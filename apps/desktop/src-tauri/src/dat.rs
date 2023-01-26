use std::io::Result;

use editor::dat::dat_file::DatFile;
use serde::{ Deserialize, Serialize };

use crate::utils::{wrap_json_result, wrap_result};

#[derive(Serialize, Deserialize, Debug, PartialEq)]
struct SaveDatPayload {
    filepath: String,
    dat: DatFile,
}

#[tauri::command]
pub fn save_dat_file(event: String) -> String {
    let result = || -> Result<String> {
        let mut payload = serde_json::from_str::<SaveDatPayload>(&event)?;
        DatFile::save_to(&payload.filepath, &mut payload.dat)?;

        Ok(String::from("{ \"status\": \"Success\" }"))
    };

    match result() {
        Ok(response) => response,
        Err(error) => wrap_result(error.to_string(), true),
    }
}

#[tauri::command]
pub fn read_dat_file(event: String) -> String {
    let result = DatFile::from_path(&event);
    wrap_json_result(result)
}
