import { GenQuestProp } from './genQuestProp';
import { LoadedStage, QuestFileHeader } from './header';
import { MapInfo } from './map';
import { MapZones } from './mapZones';
import { LargeMonsterPointers, LargeMonsterSpawn } from './monsters';
import { QuestStrings } from './questStrings';
import { QuestTypeFlags } from './questTypeFlags';
import { RewardTable } from './reward';
import { SupplyItem } from './supplyItems';

export * from "./header";
export * from "./genQuestProp";
export * from "./questTypeFlags";
export * from "./map";
export * from "./monsters";

export interface QuestFile {
    header: QuestFileHeader;
    map_info:  MapInfo;
    map_zones: MapZones,
    gen_quest_prop: GenQuestProp,
    quest_type_flags: QuestTypeFlags,
    large_monster_pointers: LargeMonsterPointers;
    large_monster_ids: number[];
    large_monster_spawns: LargeMonsterSpawn[];
    rewards: RewardTable[];
    supply_items: SupplyItem[];
    loaded_stages: LoadedStage[];
    strings: QuestStrings;
    unk_data: number[];
}