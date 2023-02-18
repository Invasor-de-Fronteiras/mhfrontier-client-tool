import { useState } from "react";

import { DatFile, MhfDatContextProvider } from "ui";
import { open } from "@tauri-apps/api/dialog";
import { copyFile, exists, createDir } from "@tauri-apps/api/fs";
import { toast } from 'react-toastify';
import { readDatFile, refrontier, saveDatFile } from "./events";

interface MhfDatEditorProps {
  children: React.ReactNode;
}

const getOutputPath = (filepath: string): string => {
  const folderPath = filepath.substring(0, filepath.lastIndexOf("\\"));
  const filename = filepath.substring(filepath.lastIndexOf("\\"));

  return`${folderPath}/output/${filename}`;
}

const prepareMetaFile = async (filepath: string) => {
  const folderPath = filepath.substring(0, filepath.lastIndexOf("\\"));
  const filename = filepath.substring(filepath.lastIndexOf("\\"));

  await createDir(`${folderPath}/output`, { recursive: true });
  await copyFile(`output/${filename}`, `${folderPath}/output/${filename}`);

  const fileMetaOutputExists = await exists(`${folderPath}/output/${filename}.meta`);
  if (fileMetaOutputExists) return;

  const fileMetaExists =  await exists(`${filepath}.meta`);
  if (!fileMetaExists) throw Error('Meta file not found');

  await copyFile(`${filepath}.meta`, `${folderPath}/output/${filename}.meta`);
}

function MhfDatEditor({ children }: MhfDatEditorProps) {
  const [filePath, setFilePath] = useState<string | null>(null);
  const [file, setFile] = useState<DatFile | undefined>(undefined);

  const handleSaveDat = async (data: DatFile) => {
    if (!filePath || !data) return;

    try {
      await saveDatFile({
        dat: data,
        filepath: filePath
      });

      toast.success('Successfully saved dat file!');
    } catch (error) {
      toast.error(`Failed to save mhfdat: ${error}`);
    }
  };

  const handleLoadDat = async () => {
    try {
      const path = await open({ multiple: false });
      if (!path) return;

      const message = await refrontier(path as string, '-log');
      const messages = message.split('==============================');
      toast.success(messages[1]);
      toast.success(messages[2]);

      const dat = await readDatFile(path as string);

      setFile(dat);
      setFilePath(path as string);
      console.log('dat: ', dat);
      toast.success('mhfdat file read successfully!');
    } catch (error) {
      toast.error(`Failed to load mhfdat: ${error}`);
    }
  };

  const handleEncrypt = async () => {
    try {
      if (!filePath) return;

      const messageCompress = await refrontier(filePath, '-compress', '0,10');
      messageCompress.split('==============================').forEach((message) => {
        toast.success(message);
      });
  
      await prepareMetaFile(filePath);
      const messageEncrypt = await refrontier(getOutputPath(filePath), '-encrypt');
      messageEncrypt.split('==============================').forEach((message) => {
        toast.success(message);
      });
    } catch (error) {
      toast.error(`Failed to encrypt mhfdat: ${error}`);
    }
  };

  return (
    <MhfDatContextProvider
      data={file}
      handleSaveDat={handleSaveDat}
      handleLoadDat={handleLoadDat}
      handleEncrypt={handleEncrypt}
      isLoadedDatFile={!!file}
    >
        {children}
    </MhfDatContextProvider>
  );
}

export default MhfDatEditor;
