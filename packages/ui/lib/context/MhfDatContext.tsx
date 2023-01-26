import { useContext, useEffect, useMemo } from "react";
import { createContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { DatFile } from "../utils/mhfdat";

interface MhfDatContextState {
  handleSaveDat: (data: DatFile) => void;
  handleLoadDat: () => void;
  handleEncrypt: () => void;
  mhfdatSubmit: () => void;
  isLoadedDatFile: boolean;
  form: UseFormReturn<DatFile>;
}

interface MhfDatContextProps extends Omit<MhfDatContextState, "form" | "mhfdatSubmit"> {
  children: React.ReactNode;
  data?: DatFile;
}

const context = createContext({} as MhfDatContextState);

export function MhfDatContextProvider({
  children,
  ...props
}: MhfDatContextProps) {
  const form = useForm<DatFile>({
    defaultValues: props.data,
  });

  useEffect(() => {
    form.reset(props.data);
  }, [props.data]);

  const value = useMemo(() => ({
    form,
    mhfdatSubmit: () => {
      form.handleSubmit((data) => props.handleSaveDat(data))();
    },
    ...props
  }), [form, props]);

  return (
    <context.Provider value={value}>{children}</context.Provider>
  );
}

export const useMhfDat = () => useContext(context);
