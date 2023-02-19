import { useContext, useState } from "react";
import { createContext } from "react";

export interface ExportImportJsonOptions {
  title: string;
  defaultName?: string;
  multiplefiles?: boolean;
}

export interface ToolState {
    tool: string;
    setTool: (value: string) => void;
    exportToJson: (value: any, options: ExportImportJsonOptions) => Promise<any>;
    importJson: (options: ExportImportJsonOptions) => Promise<any>;
}

interface ToolContextProps extends Omit<ToolState, 'tool' | 'setTool'>{
  children: React.ReactNode;
}

const context = createContext<ToolState>({} as ToolState);

export function ToolContextProvider({
  children, ...props
}: ToolContextProps) {
  const [tool, setTool] = useState('MhfDat');
  
  return (
    <context.Provider value={{ tool, setTool, ...props }}>{children}</context.Provider>
  );
}

export const useTool = () => useContext(context);

