
export interface MonsterStats {
    life: number;
    atk: number;
    def: number;
    stagger: number;
    unk1: number;
    unk2: number;
}

export interface MonsterHeader {
    table_ptr: number;
}

export interface Monster {
    monster_id: number;
    header: MonsterHeader;
    table: MonsterStats[];
}

export interface EmdFile {
    monsters: Monster[]
}