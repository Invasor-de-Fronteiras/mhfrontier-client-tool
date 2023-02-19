use std::io::Result;

use editor::emd::emd_file::EmdFile;
use serde::{ Deserialize, Serialize };

use crate::utils::{wrap_json_result, wrap_result};

#[derive(Serialize, Deserialize, Debug, PartialEq)]
struct SaveEmdPayload {
    filepath: String,
    emd: EmdFile,
}

#[tauri::command]
pub fn save_emd_file(event: String) -> String {
    let result = || -> Result<String> {
        let mut payload = serde_json::from_str::<SaveEmdPayload>(&event)?;
        EmdFile::save_to(&payload.filepath, &mut payload.emd)?;

        Ok(String::from("{ \"status\": \"Success\" }"))
    };

    match result() {
        Ok(response) => response,
        Err(error) => wrap_result(error.to_string(), true),
    }
}

#[tauri::command]
pub fn read_emd_file(event: String) -> String {
    let result = EmdFile::from_path(&event);
    wrap_json_result(result)
}
