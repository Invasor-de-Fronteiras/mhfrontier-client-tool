import { invoke } from "@tauri-apps/api";
import { EmdFile } from "ui";

interface Result {
    status: string;
    error?: string;
}

interface SaveMhfEmdPayload {
    filepath: string;
    emd: EmdFile;
}

export const saveEmdFile = async (payload: SaveMhfEmdPayload): Promise<void> => {
    const response: string = await invoke("save_emd_file", {
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

export const readEmdFile = async (filepath: string): Promise<EmdFile> => {
    const response: string = await invoke("read_emd_file", {
        event: filepath
    });

    if (!response) {
        throw Error("No response!");
    }

    const result = JSON.parse(response);
    if ((result as Result).error) {
        throw Error(result.error);
    }

    return result as EmdFile;
}
