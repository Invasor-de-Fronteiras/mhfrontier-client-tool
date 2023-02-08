import { invoke } from "@tauri-apps/api";
import { Config } from "ui";

export const getConfig = async (): Promise<Config | null> => {
    const response: string = await invoke("get_config");

    if (!response) {
        return null;
    }

    return JSON.parse(response) as Config;
}
