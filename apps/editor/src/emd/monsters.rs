use serde_derive::{Deserialize, Serialize};

use crate::file::reader::{CustomReader, FileReader};
use crate::file::writer::{CustomWriter, FileWriter};

use super::offsets::MONSTER_TABLE_PTR;

#[derive(Serialize, Deserialize, Debug, PartialEq)]
#[repr(C)]
pub struct MonsterStats {
    pub life: f32,
    pub atk: f32,
    pub def: f32,
    pub stagger: f32,
    pub unk1: f32,
    pub unk2: f32,
}

pub type MonsterTable = Vec<MonsterStats>;

impl CustomReader for MonsterTable {
    fn read(reader: &mut FileReader) -> std::io::Result<Self> {
        let mut monster_table: Vec<MonsterStats> = vec![];

        for i in 0..83 {
            let monster_stats = reader.read_struct::<MonsterStats>()?;
            monster_table.push(monster_stats);
        }

        Ok(monster_table)
    }
}

impl CustomWriter for MonsterTable {
    fn write(&mut self, writer: &mut FileWriter) -> std::io::Result<u64> {
        for monster_stats in self {
            writer.write_struct(monster_stats)?;
        }

        Ok(0)
    }
}

#[derive(Serialize, Deserialize, Debug, PartialEq)]
#[repr(C)]
pub struct MonsterHeader {
    pub table_ptr: u32
}

#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub struct Monster {
    pub monster_id: u32,
    pub header: MonsterHeader,
    pub table: MonsterTable,
}

pub type Monsters = Vec<Monster>;

impl CustomReader for Monsters {
    fn read(reader: &mut FileReader) -> std::io::Result<Self> {
        let mut monsters: Vec<Monster> = vec![];
        let mut start_ptr = MONSTER_TABLE_PTR as u64;


        for i in 0..176 {
            reader.seek_start(start_ptr)?;

            let header = reader.read_struct::<MonsterHeader>()?;
            reader.seek_start(header.table_ptr as u64)?;
            let table = reader.read_custom::<MonsterTable>()?;
            
            monsters.push(Monster {
                monster_id: i + 1,
                header,
                table
            });

            start_ptr += 0xC0;
        }

        Ok(monsters)
    }
}

impl CustomWriter for Monsters {
    fn write(&mut self, writer: &mut FileWriter) -> std::io::Result<u64> {

        for monster in self {
            writer.seek_start(monster.header.table_ptr as u64)?;
            writer.write_custom(&mut monster.table)?;
        }

        Ok(0)
    }
}