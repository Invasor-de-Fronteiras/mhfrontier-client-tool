import { useState } from "react";

import { EmdFile, MhfEmdContextProvider } from "ui";
import { open } from "@tauri-apps/api/dialog";
import { copyFile, exists, createDir } from "@tauri-apps/api/fs";
import { toast } from 'react-toastify';
import { readEmdFile, refrontier, saveEmdFile } from "./events";

interface MhfEmdEditorProps {
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

function MhfEmdEditor({ children }: MhfEmdEditorProps) {
  const [filePath, setFilePath] = useState<string | null>(null);
  const [file, setFile] = useState<EmdFile | undefined>(undefined);

  const handleSaveEmd = async (data: EmdFile) => {
    if (!filePath || !data) return;

    try {
      await saveEmdFile({
        emd: data,
        filepath: filePath
      });

      toast.success('Successfully saved emd file!');
    } catch (error) {
      toast.error(`Failed to save mhfemd: ${error}`);
    }
  };

  const handleLoadEmd = async () => {
    try {
      const path = await open({ multiple: false });
      if (!path) return;

      const message = await refrontier(path as string, '-log');
      const messages = message.split('==============================');
      toast.success(messages[1]);
      toast.success(messages[2]);

      const emd = await readEmdFile(path as string);

      setFile(emd);
      setFilePath(path as string);
      console.log('emd: ', emd);
      toast.success('mhfemd file read successfully!');
    } catch (error) {
      toast.error(`Failed to load mhfemd: ${error}`);
    }
  };

  const handleEncryptEmd = async () => {
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
      toast.error(`Failed to encrypt mhfemd: ${error}`);
    }
  };

  return (
    <MhfEmdContextProvider
      data={file}
      handleSaveEmd={handleSaveEmd}
      handleLoadEmd={handleLoadEmd}
      handleEncryptEmd={handleEncryptEmd}
      isLoadedEmdFile={!!file}
    >
        {children}
    </MhfEmdContextProvider>
  );
}

export default MhfEmdEditor;
