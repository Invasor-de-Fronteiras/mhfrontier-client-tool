use std::mem::size_of;

use serde_derive::{Deserialize, Serialize};

use crate::file::reader::{CustomReader, FileReader};
use crate::file::writer::{CustomWriter, FileWriter};

use super::offsets::{ITEM_NAMES_PTR, ITEM_PROPS_PTR};

#[derive(Serialize, Deserialize, Debug, PartialEq)]
#[repr(C)]
pub struct ItemProps {
    pub unk0: u8,
    pub unk1: u8,
    pub rare: u8,
    pub max_inventory: u8,
    pub unk4: u8,
    pub icon: u8,
    pub color: u8,
    pub unk7: u8,
    pub unk8: u8,
    pub unk9: u8,
    pub unk10: u8,
    pub unk11: u8,
    pub unk12: u8,
    pub unk13: u8,
    pub unk14: u8,
    pub unk15: u8,
    pub unk16: u8,
    pub unk17: u8,
    pub unk19: u8,
    pub unk20: u8,
    pub unk21: u8,
    pub unk22: u8,
    pub unk23: u8,
    pub unk24: u8,
    pub unk25: u8,
    pub unk26: u8,
    pub unk27: u8,
    pub unk28: u8,
    pub unk29: u8,
    pub unk30: u8,
    pub unk31: u8,
    pub unk32: u8,
    pub unk33: u8,
    pub unk34: u8,
    pub unk35: u8,
    pub unk36: u8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq)]
pub struct Item {
    pub item_id: u32,
    pub item_props: ItemProps,
    pub name_ptr: u32,
    pub name: String
}

impl Item {
    
    fn read_by_id(reader: &mut FileReader, item_id: u32) -> std::io::Result<Self> {
        let item_prop_ptr = ITEM_PROPS_PTR + size_of::<ItemProps>() as u32 * item_id;
        let item_name_ptr = ITEM_NAMES_PTR + 4 * item_id;
        reader.seek_start(item_prop_ptr as u64)?;
        let item_props = reader.read_struct::<ItemProps>()?;
        reader.seek_start(item_name_ptr as u64)?;
        let name_ptr = reader.read_u32()?;
        reader.seek_start(name_ptr as u64)?;
        let name = reader.read_string()?;

        Ok(Item {
            item_id,
            item_props,
            name,
            name_ptr
        })
    }

}

pub type Items = Vec<Item>;

impl CustomReader for Items {

    fn read(reader: &mut FileReader) -> std::io::Result<Self> {
        let mut items: Vec<Item> = vec![];

        for i in 0..16700 {
            let item = Item::read_by_id(reader, i)?;
            items.push(item);
        }

        Ok(items)
    }
}

impl CustomWriter for Items {
    fn write(&mut self, writer: &mut FileWriter) -> std::io::Result<u64> {
        writer.seek_start(ITEM_PROPS_PTR as u64)?;
        for item in self.into_iter() {
            writer.write_struct(&mut item.item_props)?;
        }

        writer.seek_start(ITEM_NAMES_PTR as u64)?;
        for item in self.into_iter() {
            writer.write_u32(&mut item.name_ptr)?;
        }

        Ok(0)
    }
    
}

pub struct ItemName {
    item_id: u32,
    name: String
}

pub type ItemNames = Vec<ItemName>;

impl CustomReader for ItemNames {

    fn read(reader: &mut FileReader) -> std::io::Result<Self> {
        let mut items: Vec<ItemName> = vec![];
        let total = reader.read_u32()?;

        for _ in 0..total {
            let item_id = reader.read_u32()?;
            let name = reader.read_string()?;
            items.push(ItemName { item_id, name });
        }

        Ok(items)
    }
}

pub fn write_extra_item_names(writer: &mut FileWriter, value: &mut Items, original: &mut Items, extra_items: &mut ItemNames) -> std::io::Result<u64> {
    let mut items: ItemNames = vec![];

    for item in value.into_iter() {
        if original[item.item_id as usize].name != item.name {
            items.push(ItemName {
                item_id: item.item_id,
                name: item.name.clone()
            });
        }
    }

    for item in extra_items {
        let exists = items
            .iter()
            .find(|a| a.item_id == item.item_id);

        if let None = exists {
            items.push(ItemName {
                item_id: item.item_id,
                name: item.name.clone()
            });
        }
    }

    let length = items.len() as u32;
    writer.write_u32(&length)?;
    
    for item in items {
        writer.write_u32(&item.item_id)?;
        value[item.item_id as usize].name_ptr = writer.current_position()? as u32;
        writer.write_string(&item.name)?;
    }

    Ok(writer.current_position()?)
}

