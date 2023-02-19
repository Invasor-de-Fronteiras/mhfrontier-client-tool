import { useContext, useEffect, useMemo } from "react";
import { createContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { EmdFile } from "../utils/mhfemd";

interface MhfEmdContextState {
  handleSaveEmd: (data: EmdFile) => void;
  handleLoadEmd: () => void;
  handleEncryptEmd: () => void;
  mhfemdSubmit: () => void;
  isLoadedEmdFile: boolean;
  form: UseFormReturn<EmdFile>;
}

interface MhfEmdContextProps extends Omit<MhfEmdContextState, "form" | "mhfemdSubmit"> {
  children: React.ReactNode;
  data?: EmdFile;
}

const context = createContext({} as MhfEmdContextState);

export function MhfEmdContextProvider({
  children,
  ...props
}: MhfEmdContextProps) {
  const form = useForm<EmdFile>({
    defaultValues: props.data,
  });

  useEffect(() => {
    form.reset(props.data);
  }, [props.data]);

  const value = useMemo(() => ({
    form,
    mhfemdSubmit: () => {
      form.handleSubmit((data) => props.handleSaveEmd(data))();
    },
    ...props
  }), [form, props]);

  return (
    <context.Provider value={value}>{children}</context.Provider>
  );
}

export const useMhfEmd = () => useContext(context);
