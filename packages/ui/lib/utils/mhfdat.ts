import { SelectOption } from "../components/Select";

export interface ItemProps {
    unk0: number;
    unk1: number;
    rare: number;
    max_inventory: number;
    unk4: number;  // item comestivel?
    icon: number;
    color: number;
    unk7: number;
    unk8: number;
    unk9: number;
    unk10: number;
    unk11: number;
    unk12: number;
    unk13: number;
    unk14: number;
    unk15: number;
    unk16: number;
    unk17: number;
    unk19: number;
    unk20: number;
    unk21: number;
    unk22: number;
    unk23: number;
    unk24: number;
    unk25: number;
    unk26: number;
    unk27: number;
    unk28: number;
    unk29: number;
    unk30: number;
    unk31: number;
    unk32: number;
    unk33: number;
    unk34: number;
    unk35: number;
    unk36: number;
}

export interface Item {
    item_id: number;
    item_props: ItemProps;
    name_ptr: number;
    name: string;
}

export interface DatFile {
    items: Item[]
}

export const itemIcons: SelectOption[] = [
    { value: 0, label: "Smoke Bomb" },
    { value: 1, label: "Sphere" },
    { value: 2, label: "Bomb" },
    { value: 3, label: "Meat" },
    { value: 4, label: "Fishing Rod" },
    { value: 5, label: "Fish" },
    { value: 6, label: "Trap Tool" },
    { value: 7, label: "Wheatstone" },
    { value: 8, label: "Dung" },
    { value: 9, label: "Shell" },
    { value: 10, label: "Bone" },
    { value: 11, label: "Binoculars" },
    { value: 12, label: "Mushroom" },
    { value: 13, label: "Bug net" },
    { value: 14, label: "Hide" },
    { value: 15, label: "Herb" },
    { value: 16, label: "Pickaxe" },
    { value: 17, label: "Barrel" },
    { value: 18, label: "Seed" },
    { value: 19, label: "BBQ" },
    { value: 20, label: "Bug" },
    { value: 21, label: "Trap" },
    { value: 22, label: "Spider Web" },
    { value: 23, label: "Scale" },
    { value: 24, label: "Potion" },
    { value: 25, label: "Egg" },
    { value: 26, label: "Ammo" },
    { value: 27, label: "Ore" },
    { value: 28, label: "Bone Husk" },
    { value: 29, label: "Map" },
    { value: 30, label: "Flute" },
    { value: 31, label: "Claw" },
    { value: 32, label: "Webbing" },
    { value: 33, label: "Garbage" },
    { value: 34, label: "Coin" },
    { value: 35, label: "Max Potion" },
    { value: 36, label: "Book" },
    { value: 37, label: "Ticket" },
    { value: 38, label: "Throwing Knife" },
    { value: 39, label: "Flute 2" },
    { value: 40, label: "Sleeping Guy" },
    { value: 41, label: "Sound Ticket" },
    { value: 42, label: "Hair Cut" },
    { value: 43, label: "Decoration" },
    { value: 44, label: "House" },
    { value: 45, label: "Vegetable" },
    { value: 46, label: "Feed with meat" },
    { value: 47, label: "Macha Pot" },
    { value: 48, label: "Macha Pot Empty" },
    { value: 49, label: "Boomerang" },
    { value: 50, label: "Coating" },
    { value: 51, label: "Empty Bottle" },
    { value: 52, label: "Crab Shell " },
    { value: 53, label: "Compass" },
    { value: 54, label: "Armor Sphere 2" },
    { value: 79, label: "Sword Stone" },
    { value: 80, label: "Halk Potion" },
    { value: 82, label: "Gacha Fruit" },
    { value: 83, label: "Sun Coin" },
    { value: 84, label: "Sigil" },
    { value: 85, label: "Felyne Decoration" },
    { value: 86, label: "Tower Sigil" },
    { value: 88, label: "Cactus" },
    { value: 89, label: "Transcedence" },
    { value: 90, label: "Arcane Pulse" },
    { value: 91, label: "Tower Sigil X" },
    { value: 92, label: "Heavenly Scale" },
    { value: 93, label: "Armor Sphere" },
]

export const itemColors: SelectOption[] = [
    { value: 0, label: "White" },
    { value: 1, label: "Red" },
    { value: 2, label: "Green" },
    { value: 3, label: "Blue" },
    { value: 4, label: "Yellow" },
    { value: 5, label: "Purple" },
    { value: 6, label: "Light Blue" },
    { value: 7, label: "Orange" },
    { value: 8, label: "Pink" },
    { value: 9, label: "Black" },
    { value: 10, label: "Gray" },
    { value: 11, label: "(Dark) White" },
    { value: 12, label: "(Dark) Red" },
    { value: 13, label: "(Dark) Green" },
    { value: 14, label: "(Dark) Blue" },
    { value: 15, label: "(Dark) Yellow" },
    { value: 16, label: "(Dark) Purple" },
    { value: 17, label: "(Dark) Light Blue" },
    { value: 18, label: "(Dark) Orange" },
    { value: 19, label: "(Dark) Pink" },
    { value: 20, label: "(Dark) Black" },
    { value: 21, label: "(Dark) Gray" },
    { value: 63, label: "Bright Blue" },
    { value: 64, label: "Bright Yellow" },
    { value: 65, label: "Bright Red" },
]