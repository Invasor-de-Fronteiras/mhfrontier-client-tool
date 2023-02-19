import { open, save } from "@tauri-apps/api/dialog";
import { writeFile, readTextFile } from "@tauri-apps/api/fs";
import { toast } from "react-toastify";
import { ExportImportJsonOptions, ToolContextProvider } from "ui/lib/context/ToolContext";

interface ToolProps {
    children: React.ReactNode;
}

function Tool({ children }: ToolProps) {

  const exportToJson = async (value: any, options: ExportImportJsonOptions) => {
      try {
        const path = await save({ title: options.title, defaultPath: options.defaultName });
        if (!path) return;
  
        await writeFile(path as string, JSON.stringify(value));
        toast.success('File exported successfully!');
      } catch (error) {
        toast.error(`Failed to export file: ${error}`);
      }
  }

  const importJson = async (options: ExportImportJsonOptions) => {
    const path = await open({ title: options.title, defaultPath: options.defaultName });
    if (!path) return null;

    return readTextFile(path as string);
  }

  return (
    <ToolContextProvider
      exportToJson={exportToJson}
      importJson={importJson}
    >
      {children}
    </ToolContextProvider>
  );
}

export default Tool;
