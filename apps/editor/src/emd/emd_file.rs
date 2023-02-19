use super::monsters::Monsters;
use crate::file::reader::FileReader;
use crate::file::writer::FileWriter;
use serde_derive::{Deserialize, Serialize};
use std::io::Result;

#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub struct EmdFile {
    pub monsters: Monsters
}

impl EmdFile {
    pub fn from_path(filename: &str) -> Result<EmdFile> {
        let mut reader = FileReader::from_filename(filename)?;

        let monsters = reader.read_custom::<Monsters>()?;

        Ok(EmdFile {
            monsters,
        })
    }

    pub fn save_to(filename: &str, emd: &mut EmdFile) -> Result<()> {
        let original = EmdFile::from_path(filename)?;
        let mut writer = FileWriter::from_filename(filename)?;

        writer.write_custom(&mut emd.monsters)?;

        for (i, monster) in original.monsters.iter().enumerate() {
            writer.seek_start(monster.header.table_ptr as u64)?;
            
            let current = &mut emd.monsters[i];
            writer.write_custom(&mut current.table)?;
        }

        Ok(())
    }

}
