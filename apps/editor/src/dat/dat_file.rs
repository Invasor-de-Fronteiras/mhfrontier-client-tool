use super::dat_end_flag::DatEndFlag;
use super::items::{Items, ItemNames, write_extra_item_names};
use crate::file::reader::FileReader;
use crate::file::writer::FileWriter;
use serde_derive::{Deserialize, Serialize};
use std::io::Result;

#[derive(Serialize, Deserialize, Debug, PartialEq)]
#[repr(C)]
pub struct DatFile {
    pub items: Items
}

impl DatFile {
    pub fn from_path(filename: &str) -> Result<DatFile> {
        let mut reader = FileReader::from_filename(filename)?;

        let items = reader.read_custom::<Items>()?;

        Ok(DatFile {
            items,
        })
    }

    pub fn save_to(filename: &str, dat: &mut DatFile) -> Result<()> {
        let mut original = DatFile::from_path(filename)?;
        let mut end_flag = DatEndFlag::from_path(filename)?;
        let mut writer = FileWriter::from_filename(filename)?;

        DatFile::write_extra_data(&mut writer, filename, dat, &mut original, &mut end_flag)?;

        writer.write_custom(&mut dat.items)?;

        Ok(())
    }

    pub fn write_extra_data(
        writer: &mut FileWriter,
        filename: &str,
        dat: &mut DatFile,
        original: &mut DatFile,
        end_flag: &mut DatEndFlag,
    ) -> Result<()> {
        let have_sign = end_flag.is_valid();
        let mut items_names: ItemNames = vec![];
        if have_sign {
            let mut reader = FileReader::from_filename(filename)?;
            reader.seek_start(end_flag.start_ptr as u64)?;
            items_names = reader.read_custom::<ItemNames>()?;
            writer.set_len(end_flag.start_ptr as u64)?;
        }

        let mut new_end_flag = DatEndFlag::new(writer.get_len()? as u32);

        writer.seek_start(new_end_flag.start_ptr as u64)?;

        write_extra_item_names(
            writer,
            &mut dat.items,
            &mut original.items,
            &mut items_names
        )?;

        writer.write_struct(&mut new_end_flag)?;
        writer.write_u8(&0)?;

        Ok(())
    }

}
