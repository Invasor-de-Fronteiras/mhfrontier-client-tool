import { invoke } from "@tauri-apps/api";
import { DatFile } from "ui";

interface Result {
    status: string;
    error?: string;
}

interface SaveMhfDatPayload {
    filepath: string;
    dat: DatFile;
}

export const saveDatFile = async (payload: SaveMhfDatPayload): Promise<void> => {
    const response: string = await invoke("save_dat_file", {
        event: JSON.stringify(payload)
    });

    if (!response) {
        throw Error("No response!");
    }

    const result = JSON.parse(response) as Result;
    if (result.status !== "Success" || result.error) {
        throw Error(result.error);
    }
}

export const readDatFile = async (filepath: string): Promise<DatFile> => {
    const response: string = await invoke("read_dat_file", {
        event: filepath
    });

    if (!response) {
        throw Error("No response!");
    }

    const result = JSON.parse(response);
    if ((result as Result).error) {
        throw Error(result.error);
    }

    return result as DatFile;
}
