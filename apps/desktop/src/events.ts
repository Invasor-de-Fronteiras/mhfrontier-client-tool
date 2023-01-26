import { invoke } from "@tauri-apps/api";
import { Config, DatFile, DBConfig, QuestInfo } from "ui";

interface ImportQuestlistPayload {
    db_config: DBConfig;
    filepath: string;
}

interface UpdateQuestPayload {
    db_config: DBConfig;
    quest: QuestInfo;
}

interface ExportQuestInfoPayload {
    filepath: string,
    quest_info: QuestInfo
}

interface Result {
    status: string;
    error?: string;
}

export const getConfig = async (): Promise<Config | null> => {
    const response: string = await invoke("get_config");

    try {
        if (!response) {
            return null;
        }

        return JSON.parse(response) as Config
    } catch {
        return null;
    }
}

export const importQuestlists = async (payload: ImportQuestlistPayload): Promise<void> => {
    const response: string = await invoke("db_import_questlist", {
        event: JSON.stringify(payload)
    });

    try {
        if (!response) {
            throw Error("No response!");
        }
        const result = JSON.parse(response) as Result;
        if (result.status !== "Success" || result.error) {
            throw Error(result.error);
        }
    } catch(error) {
        throw error;
    }
}

export const exportQuestInfo = async (payload: ExportQuestInfoPayload): Promise<void> => {
    const response: string = await invoke("export_quest_info", {
        event: JSON.stringify(payload)
    });

    try {
        if (!response) {
            throw Error("No response!");
        }
        const result = JSON.parse(response) as Result;
        if (result.status !== "Success" || result.error) {
            throw Error(result.error);
        }
    } catch(error) {
        throw error;
    }
}

export const updateQuest = async (payload: UpdateQuestPayload): Promise<void> => {
    const response: string = await invoke("db_update_quest", {
        event: JSON.stringify(payload)
    });

    try {
        if (!response) {
            throw Error("No response!");
        }
        const result = JSON.parse(response) as Result;
        if (result.status !== "Success" || result.error) {
            throw Error(result.error);
        }
    } catch(error) {
        throw error;
    }
}


interface SaveMhfDatPayload {
    filepath: string;
    dat: DatFile;
}

export const saveDatFile = async (payload: SaveMhfDatPayload): Promise<void> => {
    const response: string = await invoke("save_dat_file", {
        event: JSON.stringify(payload)
    });

    try {
        if (!response) {
            throw Error("No response!");
        }
        const result = JSON.parse(response) as Result;
        if (result.status !== "Success" || result.error) {
            throw Error(result.error);
        }
    } catch(error) {
        throw error;
    }
}

export const readDatFile = async (filepath: string): Promise<DatFile> => {
    const response: string = await invoke("read_dat_file", {
        event: filepath
    });

    try {
        if (!response) {
            throw Error("No response!");
        }
        const result = JSON.parse(response);
        if ((result as Result).error) {
            throw Error(result.error);
        }

        return result as DatFile;
    } catch(error) {
        throw error;
    }
}

export const refrontier = async (filepath: string, ...options: string[]): Promise<string> => {
    const response: string = await invoke("re_frontier", {
        event: JSON.stringify({
            filepath,
            re_frontier_path: "./ReFrontier/ReFrontier.exe",
            options
        })
    });
    
    try {
        if (!response) {
            throw Error("No response!");
        }

        const result = JSON.parse(response) as { message: string, error?: string };

        if (result.error) {
            throw Error(`Failed to execute ReFrontier: ${result.error}`);
        }

        return result.message;
    } catch (error) {
        throw error;
    }
}