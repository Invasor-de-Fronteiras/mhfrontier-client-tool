#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod quest;
mod questlist;
mod re_frontier;
mod utils;
mod dat;
mod emd;

use quest::{export_quest_info, read_quest_file, save_quest_file};
use dat::{read_dat_file, save_dat_file};
use emd::{read_emd_file, save_emd_file};
use questlist::{read_all_questlist, read_all_questlist_old, read_questinfo, save_all_questlists};
use re_frontier::re_frontier;
use tauri;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            read_quest_file,
            save_quest_file,
            export_quest_info,
            read_all_questlist,
            read_all_questlist_old,
            read_questinfo,
            save_all_questlists,
            read_dat_file,
            save_dat_file,
            re_frontier,
            read_emd_file,
            save_emd_file
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
