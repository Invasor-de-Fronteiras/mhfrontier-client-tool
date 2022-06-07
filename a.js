class MapStage {
  constructor(id, areaNumber, imgPath) {
    this.id = id;
    this.areaNumber = areaNumber;
    this.imgPath = imgPath;
  }
}

class Map {
  constructor(id, name, stages) {
    this.id = id;
    this.name = name;
    this.stages = stages;
  }
}

const maps = [
  { id: 0, name: "null", stages: [] },
  {
    id: 1,
    name: "Siege Fortress Day",
    stages: [
      { id: 10, areaNumber: 0, imgPath: "" },
      { id: 14, areaNumber: 1, imgPath: "" },
      { id: 30, areaNumber: 2, imgPath: "" },
      { id: 28, areaNumber: 3, imgPath: "" },
      { id: 11, areaNumber: 4, imgPath: "" },
      { id: 12, areaNumber: 5, imgPath: "" },
      { id: 31, areaNumber: 6, imgPath: "" },
    ],
  },
  {
    id: 2,
    name: "Forest and Hills Day",
    stages: [
      { id: 21, areaNumber: 0, imgPath: "/Forest n Hills/Day/mori-0.png" },
      { id: 32, areaNumber: 1, imgPath: "/Forest n Hills/Day/mori-1.png" },
      { id: 33, areaNumber: 2, imgPath: "/Forest n Hills/Day/mori-2.png" },
      { id: 34, areaNumber: 3, imgPath: "/Forest n Hills/Day/mori-3.png" },
      { id: 35, areaNumber: 4, imgPath: "/Forest n Hills/Day/mori-4.png" },
      { id: 36, areaNumber: 5, imgPath: "/Forest n Hills/Day/mori-5.png" },
      { id: 37, areaNumber: 6, imgPath: "/Forest n Hills/Day/mori-6.png" },
      { id: 38, areaNumber: 7, imgPath: "/Forest n Hills/Day/mori-7.png" },
      { id: 39, areaNumber: 8, imgPath: "/Forest n Hills/Day/mori-8.png" },
      { id: 40, areaNumber: 9, imgPath: "/Forest n Hills/Day/mori-9.png" },
      { id: 41, areaNumber: 10, imgPath: "/Forest n Hills/Day/mori-10.png" },
      { id: 42, areaNumber: 11, imgPath: "/Forest n Hills/Day/mori-11.png" },
      { id: 43, areaNumber: 12, imgPath: "/Forest n Hills/Day/mori-12.png" },
    ],
  },
  {
    id: 3,
    name: "Desert Day",
    stages: [
      { id: 140, areaNumber: 0, imgPath: "/Forest n Hills/Night/mori-0.png" },
      { id: 141, areaNumber: 1, imgPath: "/Forest n Hills/Night/mori-1.png" },
      { id: 142, areaNumber: 2, imgPath: "/Forest n Hills/Night/mori-2.png" },
      { id: 143, areaNumber: 3, imgPath: "/Forest n Hills/Night/mori-3.png" },
      { id: 144, areaNumber: 4, imgPath: "/Forest n Hills/Night/mori-4.png" },
      { id: 145, areaNumber: 5, imgPath: "/Forest n Hills/Night/mori-5.png" },
      { id: 146, areaNumber: 6, imgPath: "/Forest n Hills/Night/mori-6.png" },
      { id: 147, areaNumber: 7, imgPath: "/Forest n Hills/Night/mori-7.png" },
      { id: 148, areaNumber: 8, imgPath: "/Forest n Hills/Night/mori-8.png" },
      { id: 149, areaNumber: 9, imgPath: "/Forest n Hills/Night/mori-9.png" },
      { id: 150, areaNumber: 10, imgPath: "/Forest n Hills/Night/mori-10.png" },
      { id: 7, areaNumber: 11, imgPath: "/Forest n Hills/Night/mori-11.png" },
    ],
  },
  {
    id: 4,
    name: "Swamp Day",
    stages: [
      { id: 151, areaNumber: 0, imgPath: "/Swamp/Day/numa-bc.png" },
      { id: 152, areaNumber: 1, imgPath: "/Swamp/Day/numa-1.png" },
      { id: 153, areaNumber: 2, imgPath: "/Swamp/Day/numa-2.png" },
      { id: 154, areaNumber: 3, imgPath: "/Swamp/Day/numa-3.png" },
      { id: 155, areaNumber: 4, imgPath: "/Swamp/Day/numa-4.png" },
      { id: 156, areaNumber: 5, imgPath: "/Swamp/Day/numa-5.png" },
      { id: 157, areaNumber: 6, imgPath: "/Swamp/Day/numa-6.png" },
      { id: 158, areaNumber: 7, imgPath: "/Swamp/Day/numa-7.png" },
      { id: 159, areaNumber: 8, imgPath: "/Swamp/Day/numa-8.png" },
      { id: 160, areaNumber: 9, imgPath: "/Swamp/Day/numa-9.png" },
      { id: 9, areaNumber: 10, imgPath: "/Swamp/Day/numa-10.png" },
    ],
  },
  {
    id: 5,
    name: "Volcano Day",
    stages: [
      { id: 161, areaNumber: 0, imgPath: "" },
      { id: 162, areaNumber: 1, imgPath: "" },
      { id: 163, areaNumber: 2, imgPath: "" },
      { id: 164, areaNumber: 3, imgPath: "" },
      { id: 165, areaNumber: 4, imgPath: "" },
      { id: 166, areaNumber: 5, imgPath: "" },
      { id: 167, areaNumber: 6, imgPath: "" },
      { id: 168, areaNumber: 7, imgPath: "" },
      { id: 169, areaNumber: 8, imgPath: "" },
      { id: 74, areaNumber: 9, imgPath: "" },
    ],
  },
  {
    id: 6,
    name: "Jungle Day",
    stages: [
      { id: 110, areaNumber: 0, imgPath: "/Jungle/Day/mitu-bc.png" },
      { id: 111, areaNumber: 1, imgPath: "/Jungle/Day/mitu-1.png" },
      { id: 112, areaNumber: 2, imgPath: "/Jungle/Day/mitu-2d.png" },
      { id: 113, areaNumber: 3, imgPath: "/Jungle/Day/mitu-3d.png" },
      { id: 114, areaNumber: 4, imgPath: "/Jungle/Day/mitu-4.png" },
      { id: 115, areaNumber: 5, imgPath: "/Jungle/Day/mitu-5.png" },
      { id: 116, areaNumber: 6, imgPath: "/Jungle/Day/mitu-6.png" },
      { id: 117, areaNumber: 7, imgPath: "/Jungle/Day/mitu-7.png" },
      { id: 118, areaNumber: 8, imgPath: "/Jungle/Day/mitu-8.png" },
      { id: 119, areaNumber: 9, imgPath: "/Jungle/Day/mitu-9.png" },
      { id: 120, areaNumber: 10, imgPath: "/Jungle/Day/mitu-10.png" },
    ],
  },
  {
    id: 7,
    name: "Castle Schrade",
    stages: [
      { id: 25, areaNumber: 0, imgPath: "" },
      { id: 20, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 8,
    name: "Crimson Battleground",
    stages: [
      { id: 8, areaNumber: 0, imgPath: "" },
      { id: 88, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 9,
    name: "Arena with Ledge Day",
    stages: [
      { id: 89, areaNumber: 0, imgPath: "" },
      { id: 90, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 10,
    name: "Arena with Pillar Day",
    stages: [
      { id: 89, areaNumber: 0, imgPath: "" },
      { id: 91, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 11,
    name: "Snowy Mountains Day",
    stages: [
      { id: 98, areaNumber: 0, imgPath: "" },
      { id: 92, areaNumber: 1, imgPath: "" },
      { id: 93, areaNumber: 2, imgPath: "" },
      { id: 94, areaNumber: 3, imgPath: "" },
      { id: 95, areaNumber: 4, imgPath: "" },
      { id: 96, areaNumber: 5, imgPath: "" },
      { id: 97, areaNumber: 6, imgPath: "" },
      { id: 99, areaNumber: 7, imgPath: "" },
      { id: 100, areaNumber: 8, imgPath: "" },
      { id: 6, areaNumber: 9, imgPath: "" },
    ],
  },
  {
    id: 12,
    name: "Town Siege Day",
    stages: [
      { id: 179, areaNumber: 0, imgPath: "" },
      { id: 176, areaNumber: 1, imgPath: "" },
      { id: 177, areaNumber: 2, imgPath: "" },
      { id: 178, areaNumber: 3, imgPath: "" },
    ],
  },
  {
    id: 13,
    name: "Tower 1",
    stages: [
      { id: 121, areaNumber: 0, imgPath: "" },
      { id: 122, areaNumber: 1, imgPath: "" },
      { id: 123, areaNumber: 2, imgPath: "" },
      { id: 130, areaNumber: 3, imgPath: "" },
      { id: 128, areaNumber: 4, imgPath: "" },
      { id: 129, areaNumber: 5, imgPath: "" },
      { id: 127, areaNumber: 6, imgPath: "" },
      { id: 125, areaNumber: 7, imgPath: "" },
    ],
  },
  {
    id: 14,
    name: "Tower 2",
    stages: [
      { id: 129, areaNumber: 0, imgPath: "" },
      { id: 122, areaNumber: 1, imgPath: "" },
      { id: 125, areaNumber: 2, imgPath: "" },
      { id: 127, areaNumber: 3, imgPath: "" },
    ],
  },
  {
    id: 15,
    name: "Tower 3",
    stages: [
      { id: 83, areaNumber: 0, imgPath: "" },
      { id: 84, areaNumber: 1, imgPath: "" },
      { id: 122, areaNumber: 2, imgPath: "" },
      { id: 123, areaNumber: 3, imgPath: "" },
      { id: 124, areaNumber: 4, imgPath: "" },
      { id: 125, areaNumber: 5, imgPath: "" },
      { id: 127, areaNumber: 6, imgPath: "" },
      { id: 128, areaNumber: 7, imgPath: "" },
      { id: 129, areaNumber: 8, imgPath: "" },
      { id: 130, areaNumber: 9, imgPath: "" },
    ],
  },
  {
    id: 16,
    name: "Forest and Hills Night",
    stages: [
      { id: 21, areaNumber: 0, imgPath: "" },
      { id: 32, areaNumber: 1, imgPath: "" },
      { id: 33, areaNumber: 2, imgPath: "" },
      { id: 34, areaNumber: 3, imgPath: "" },
      { id: 35, areaNumber: 4, imgPath: "" },
      { id: 36, areaNumber: 5, imgPath: "" },
      { id: 37, areaNumber: 6, imgPath: "" },
      { id: 38, areaNumber: 7, imgPath: "" },
      { id: 39, areaNumber: 8, imgPath: "" },
      { id: 40, areaNumber: 9, imgPath: "" },
      { id: 41, areaNumber: 10, imgPath: "" },
      { id: 42, areaNumber: 11, imgPath: "" },
      { id: 43, areaNumber: 12, imgPath: "" },
    ],
  },
  {
    id: 17,
    name: "Desert Night",
    stages: [
      { id: 45, areaNumber: 0, imgPath: "" },
      { id: 47, areaNumber: 1, imgPath: "" },
      { id: 48, areaNumber: 2, imgPath: "" },
      { id: 49, areaNumber: 3, imgPath: "" },
      { id: 50, areaNumber: 4, imgPath: "" },
      { id: 51, areaNumber: 5, imgPath: "" },
      { id: 52, areaNumber: 6, imgPath: "" },
      { id: 53, areaNumber: 7, imgPath: "" },
      { id: 54, areaNumber: 8, imgPath: "" },
      { id: 55, areaNumber: 9, imgPath: "" },
      { id: 56, areaNumber: 10, imgPath: "" },
    ],
  },
  {
    id: 18,
    name: "Swamp Night",
    stages: [
      { id: 16, areaNumber: 0, imgPath: "" },
      { id: 44, areaNumber: 1, imgPath: "" },
      { id: 67, areaNumber: 2, imgPath: "" },
      { id: 68, areaNumber: 3, imgPath: "" },
      { id: 69, areaNumber: 4, imgPath: "" },
      { id: 73, areaNumber: 5, imgPath: "" },
      { id: 75, areaNumber: 6, imgPath: "" },
      { id: 29, areaNumber: 7, imgPath: "" },
    ],
  },
  {
    id: 19,
    name: "Volcano Night",
    stages: [
      { id: 58, areaNumber: 0, imgPath: "" },
      { id: 59, areaNumber: 1, imgPath: "" },
      { id: 60, areaNumber: 2, imgPath: "" },
      { id: 61, areaNumber: 3, imgPath: "" },
      { id: 62, areaNumber: 4, imgPath: "" },
      { id: 63, areaNumber: 5, imgPath: "" },
      { id: 64, areaNumber: 6, imgPath: "" },
      { id: 65, areaNumber: 7, imgPath: "" },
      { id: 74, areaNumber: 8, imgPath: "" },
    ],
  },
  {
    id: 20,
    name: "Jungle Night",
    stages: [
      { id: 1, areaNumber: 0, imgPath: "" },
      { id: 2, areaNumber: 1, imgPath: "" },
      { id: 3, areaNumber: 2, imgPath: "" },
      { id: 4, areaNumber: 3, imgPath: "" },
      { id: 5, areaNumber: 4, imgPath: "" },
      { id: 18, areaNumber: 5, imgPath: "" },
      { id: 19, areaNumber: 6, imgPath: "" },
      { id: 22, areaNumber: 7, imgPath: "" },
      { id: 23, areaNumber: 8, imgPath: "" },
      { id: 26, areaNumber: 9, imgPath: "" },
    ],
  },
  {
    id: 21,
    name: "Snowy Mountains Night",
    stages: [
      { id: 107, areaNumber: 0, imgPath: "" },
      { id: 101, areaNumber: 1, imgPath: "" },
      { id: 102, areaNumber: 2, imgPath: "" },
      { id: 103, areaNumber: 3, imgPath: "" },
      { id: 104, areaNumber: 4, imgPath: "" },
      { id: 105, areaNumber: 5, imgPath: "" },
      { id: 106, areaNumber: 6, imgPath: "" },
      { id: 108, areaNumber: 7, imgPath: "" },
      { id: 109, areaNumber: 8, imgPath: "" },
      { id: 15, areaNumber: 9, imgPath: "" },
    ],
  },
  {
    id: 22,
    name: "Town Siege night",
    stages: [{ id: 183, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 23,
    name: "Siege Fortress Night",
    stages: [
      { id: 79, areaNumber: 0, imgPath: "" },
      { id: 14, areaNumber: 1, imgPath: "" },
      { id: 30, areaNumber: 2, imgPath: "" },
      { id: 28, areaNumber: 3, imgPath: "" },
      { id: 11, areaNumber: 4, imgPath: "" },
      { id: 12, areaNumber: 5, imgPath: "" },
      { id: 31, areaNumber: 6, imgPath: "" },
    ],
  },
  {
    id: 24,
    name: "Arena with Ledge Night",
    stages: [
      { id: 46, areaNumber: 0, imgPath: "" },
      { id: 90, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 25,
    name: "Arena with Pillar Night",
    stages: [
      { id: 46, areaNumber: 0, imgPath: "" },
      { id: 91, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 26,
    name: "Great Forest Day",
    stages: [
      { id: 224, areaNumber: 0, imgPath: "" },
      { id: 226, areaNumber: 1, imgPath: "" },
      { id: 228, areaNumber: 2, imgPath: "" },
      { id: 230, areaNumber: 3, imgPath: "" },
      { id: 232, areaNumber: 4, imgPath: "" },
      { id: 234, areaNumber: 5, imgPath: "" },
      { id: 236, areaNumber: 6, imgPath: "" },
      { id: 238, areaNumber: 7, imgPath: "" },
      { id: 240, areaNumber: 8, imgPath: "" },
    ],
  },
  {
    id: 27,
    name: "Great Forest Night",
    stages: [
      { id: 225, areaNumber: 0, imgPath: "" },
      { id: 227, areaNumber: 1, imgPath: "" },
      { id: 229, areaNumber: 2, imgPath: "" },
      { id: 231, areaNumber: 3, imgPath: "" },
      { id: 233, areaNumber: 4, imgPath: "" },
      { id: 235, areaNumber: 5, imgPath: "" },
      { id: 237, areaNumber: 6, imgPath: "" },
      { id: 239, areaNumber: 7, imgPath: "" },
      { id: 241, areaNumber: 8, imgPath: "" },
    ],
  },
  {
    id: 28,
    name: "Volcano 2 Day",
    stages: [
      { id: 161, areaNumber: 0, imgPath: "" },
      { id: 59, areaNumber: 1, imgPath: "" },
      { id: 60, areaNumber: 2, imgPath: "" },
      { id: 61, areaNumber: 3, imgPath: "" },
      { id: 60, areaNumber: 4, imgPath: "" },
      { id: 62, areaNumber: 5, imgPath: "" },
      { id: 63, areaNumber: 6, imgPath: "" },
      { id: 64, areaNumber: 7, imgPath: "" },
      { id: 65, areaNumber: 8, imgPath: "" },
      { id: 27, areaNumber: 9, imgPath: "" },
      { id: 221, areaNumber: 10, imgPath: "" },
      { id: 223, areaNumber: 11, imgPath: "" },
    ],
  },
  {
    id: 29,
    name: "Volcano 2 Night",
    stages: [
      { id: 58, areaNumber: 0, imgPath: "" },
      { id: 59, areaNumber: 1, imgPath: "" },
      { id: 60, areaNumber: 2, imgPath: "" },
      { id: 61, areaNumber: 3, imgPath: "" },
      { id: 62, areaNumber: 4, imgPath: "" },
      { id: 63, areaNumber: 5, imgPath: "" },
      { id: 64, areaNumber: 6, imgPath: "" },
      { id: 65, areaNumber: 7, imgPath: "" },
      { id: 27, areaNumber: 8, imgPath: "" },
      { id: 221, areaNumber: 9, imgPath: "" },
      { id: 223, areaNumber: 10, imgPath: "" },
    ],
  },
  {
    id: 30,
    name: "Jungle Dream",
    stages: [{ id: 120, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 31,
    name: "Gorge Day",
    stages: [
      { id: 288, areaNumber: 0, imgPath: "" },
      { id: 290, areaNumber: 1, imgPath: "" },
      { id: 292, areaNumber: 2, imgPath: "" },
      { id: 294, areaNumber: 3, imgPath: "" },
      { id: 296, areaNumber: 4, imgPath: "" },
      { id: 298, areaNumber: 5, imgPath: "" },
      { id: 300, areaNumber: 6, imgPath: "" },
    ],
  },
  {
    id: 32,
    name: "Gorge Night",
    stages: [
      { id: 289, areaNumber: 0, imgPath: "" },
      { id: 291, areaNumber: 1, imgPath: "" },
      { id: 293, areaNumber: 2, imgPath: "" },
      { id: 295, areaNumber: 3, imgPath: "" },
      { id: 297, areaNumber: 4, imgPath: "" },
      { id: 299, areaNumber: 5, imgPath: "" },
      { id: 301, areaNumber: 6, imgPath: "" },
    ],
  },
  {
    id: 35,
    name: "Battlefield Day",
    stages: [
      { id: 8, areaNumber: 0, imgPath: "" },
      { id: 197, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 44,
    name: "Top of Great Forest",
    stages: [
      { id: 245, areaNumber: 0, imgPath: "" },
      { id: 246, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 45,
    name: "Caravan Balloon Day",
    stages: [{ id: 258, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 46,
    name: "Caravan Balloon Night",
    stages: [{ id: 259, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 47,
    name: "Solitude Isle 1",
    stages: [
      { id: 311, areaNumber: 0, imgPath: "" },
      { id: 314, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 48,
    name: "Solitude Isle 2",
    stages: [
      { id: 311, areaNumber: 0, imgPath: "" },
      { id: 317, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 49,
    name: "Solitude Isle 3",
    stages: [
      { id: 311, areaNumber: 0, imgPath: "" },
      { id: 320, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 50,
    name: "Highlands Day",
    stages: [
      { id: 247, areaNumber: 0, imgPath: "" },
      { id: 249, areaNumber: 1, imgPath: "" },
      { id: 251, areaNumber: 2, imgPath: "" },
      { id: 253, areaNumber: 3, imgPath: "" },
      { id: 255, areaNumber: 4, imgPath: "" },
      { id: 303, areaNumber: 5, imgPath: "" },
      { id: 305, areaNumber: 6, imgPath: "" },
      { id: 307, areaNumber: 7, imgPath: "" },
    ],
  },
  {
    id: 51,
    name: "Highlands Night",
    stages: [
      { id: 248, areaNumber: 0, imgPath: "" },
      { id: 250, areaNumber: 1, imgPath: "" },
      { id: 252, areaNumber: 2, imgPath: "" },
      { id: 254, areaNumber: 3, imgPath: "" },
      { id: 302, areaNumber: 4, imgPath: "" },
      { id: 304, areaNumber: 5, imgPath: "" },
      { id: 306, areaNumber: 6, imgPath: "" },
      { id: 308, areaNumber: 7, imgPath: "" },
    ],
  },
  {
    id: 52,
    name: "Tower with Nesthole",
    stages: [
      { id: 121, areaNumber: 0, imgPath: "" },
      { id: 122, areaNumber: 1, imgPath: "" },
      { id: 125, areaNumber: 2, imgPath: "" },
      { id: 127, areaNumber: 3, imgPath: "" },
      { id: 129, areaNumber: 4, imgPath: "" },
    ],
  },
  {
    id: 53,
    name: "Arena with Moat Day",
    stages: [
      { id: 280, areaNumber: 0, imgPath: "" },
      { id: 13, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 54,
    name: "Arena with Moat Night",
    stages: [
      { id: 281, areaNumber: 0, imgPath: "" },
      { id: 17, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 55,
    name: "Fortress Day",
    stages: [
      { id: 272, areaNumber: 0, imgPath: "" },
      { id: 274, areaNumber: 1, imgPath: "" },
      { id: 276, areaNumber: 2, imgPath: "" },
      { id: 278, areaNumber: 3, imgPath: "" },
    ],
  },
  {
    id: 56,
    name: "Fortress Night",
    stages: [
      { id: 273, areaNumber: 0, imgPath: "" },
      { id: 275, areaNumber: 1, imgPath: "" },
      { id: 277, areaNumber: 2, imgPath: "" },
      { id: 279, areaNumber: 3, imgPath: "" },
    ],
  },
  {
    id: 57,
    name: "Tidal Island Day",
    stages: [
      { id: 322, areaNumber: 0, imgPath: "" },
      { id: 323, areaNumber: 1, imgPath: "" },
      { id: 324, areaNumber: 2, imgPath: "" },
      { id: 325, areaNumber: 3, imgPath: "" },
      { id: 335, areaNumber: 4, imgPath: "" },
    ],
  },
  {
    id: 58,
    name: "Tidal Island Night",
    stages: [
      { id: 330, areaNumber: 0, imgPath: "" },
      { id: 331, areaNumber: 1, imgPath: "" },
      { id: 332, areaNumber: 2, imgPath: "" },
      { id: 333, areaNumber: 3, imgPath: "" },
      { id: 339, areaNumber: 4, imgPath: "" },
    ],
  },
  {
    id: 60,
    name: "Polar Sea Day",
    stages: [
      { id: 345, areaNumber: 0, imgPath: "" },
      { id: 347, areaNumber: 1, imgPath: "" },
      { id: 349, areaNumber: 2, imgPath: "" },
      { id: 351, areaNumber: 3, imgPath: "" },
      { id: 353, areaNumber: 4, imgPath: "" },
      { id: 355, areaNumber: 5, imgPath: "" },
      { id: 357, areaNumber: 6, imgPath: "" },
    ],
  },
  {
    id: 61,
    name: "Polar Sea Night",
    stages: [
      { id: 346, areaNumber: 0, imgPath: "" },
      { id: 348, areaNumber: 1, imgPath: "" },
      { id: 350, areaNumber: 2, imgPath: "" },
      { id: 352, areaNumber: 3, imgPath: "" },
      { id: 354, areaNumber: 4, imgPath: "" },
      { id: 356, areaNumber: 5, imgPath: "" },
      { id: 358, areaNumber: 6, imgPath: "" },
    ],
  },
  {
    id: 62,
    name: "World's End",
    stages: [
      { id: 359, areaNumber: 0, imgPath: "" },
      { id: 360, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 63,
    name: "Large Airship",
    stages: [{ id: 343, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 64,
    name: "Flower Field Day",
    stages: [
      { id: 361, areaNumber: 0, imgPath: "" },
      { id: 363, areaNumber: 1, imgPath: "" },
      { id: 365, areaNumber: 2, imgPath: "" },
      { id: 367, areaNumber: 3, imgPath: "" },
      { id: 369, areaNumber: 4, imgPath: "" },
      { id: 371, areaNumber: 5, imgPath: "" },
    ],
  },
  {
    id: 65,
    name: "Flower Field Night",
    stages: [
      { id: 362, areaNumber: 0, imgPath: "" },
      { id: 364, areaNumber: 1, imgPath: "" },
      { id: 366, areaNumber: 2, imgPath: "" },
      { id: 368, areaNumber: 3, imgPath: "" },
      { id: 370, areaNumber: 4, imgPath: "" },
      { id: 372, areaNumber: 5, imgPath: "" },
    ],
  },
  {
    id: 66,
    name: "Deep Crater",
    stages: [
      { id: 374, areaNumber: 0, imgPath: "" },
      { id: 380, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 67,
    name: "Bamboo Forest Day",
    stages: [
      { id: 375, areaNumber: 0, imgPath: "" },
      { id: 377, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 68,
    name: "Bamboo Forest Night",
    stages: [
      { id: 376, areaNumber: 0, imgPath: "" },
      { id: 378, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 69,
    name: "Battlefield 2 Day",
    stages: [
      { id: 8, areaNumber: 0, imgPath: "" },
      { id: 396, areaNumber: 1, imgPath: "" },
    ],
  },
  { id: 70, name: "Unimplemented map", stages: [] },
  {
    id: 71,
    name: "1st Dist Tower 1",
    stages: [
      { id: 391, areaNumber: 0, imgPath: "" },
      { id: 392, areaNumber: 1, imgPath: "" },
      { id: 399, areaNumber: 2, imgPath: "" },
    ],
  },
  {
    id: 72,
    name: "1st Dist Tower 2",
    stages: [
      { id: 391, areaNumber: 0, imgPath: "" },
      { id: 392, areaNumber: 1, imgPath: "" },
      { id: 399, areaNumber: 2, imgPath: "" },
    ],
  },
  {
    id: 73,
    name: "2nd Dist Tower 1",
    stages: [
      { id: 391, areaNumber: 0, imgPath: "" },
      { id: 392, areaNumber: 1, imgPath: "" },
      { id: 414, areaNumber: 2, imgPath: "" },
    ],
  },
  {
    id: 74,
    name: "2nd Dist Tower 2",
    stages: [
      { id: 391, areaNumber: 0, imgPath: "" },
      { id: 392, areaNumber: 1, imgPath: "" },
      { id: 414, areaNumber: 2, imgPath: "" },
    ],
  },
  {
    id: 75,
    name: "Urgent Tower",
    stages: [
      { id: 391, areaNumber: 0, imgPath: "" },
      { id: 392, areaNumber: 1, imgPath: "" },
      { id: 399, areaNumber: 2, imgPath: "" },
    ],
  },
  {
    id: 76,
    name: "3rd Dist Tower 1",
    stages: [
      { id: 391, areaNumber: 0, imgPath: "" },
      { id: 392, areaNumber: 1, imgPath: "" },
      { id: 399, areaNumber: 2, imgPath: "" },
    ],
  },
  {
    id: 77,
    name: "3rd Dist Tower 2",
    stages: [
      { id: 391, areaNumber: 0, imgPath: "" },
      { id: 392, areaNumber: 1, imgPath: "" },
      { id: 399, areaNumber: 2, imgPath: "" },
    ],
  },
  {
    id: 78,
    name: "4th Dist Tower",
    stages: [
      { id: 391, areaNumber: 0, imgPath: "" },
      { id: 392, areaNumber: 1, imgPath: "" },
      { id: 399, areaNumber: 2, imgPath: "" },
    ],
  },
  {
    id: 79,
    name: "White Lake Day",
    stages: [
      { id: 400, areaNumber: 0, imgPath: "" },
      { id: 402, areaNumber: 1, imgPath: "" },
      { id: 404, areaNumber: 2, imgPath: "" },
      { id: 406, areaNumber: 3, imgPath: "" },
      { id: 408, areaNumber: 4, imgPath: "" },
      { id: 410, areaNumber: 5, imgPath: "" },
    ],
  },
  {
    id: 80,
    name: "White Lake Night",
    stages: [
      { id: 401, areaNumber: 0, imgPath: "" },
      { id: 403, areaNumber: 1, imgPath: "" },
      { id: 405, areaNumber: 2, imgPath: "" },
      { id: 407, areaNumber: 3, imgPath: "" },
      { id: 409, areaNumber: 4, imgPath: "" },
      { id: 411, areaNumber: 5, imgPath: "" },
    ],
  },
  {
    id: 81,
    name: "Solitude Depths Slay 1",
    stages: [
      { id: 417, areaNumber: 0, imgPath: "" },
      { id: 418, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 82,
    name: "Solitude Depths Slay 2",
    stages: [{ id: 417, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 83,
    name: "Solitude Depths Slay 3",
    stages: [{ id: 417, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 84,
    name: "Solitude Depths Slay 4",
    stages: [{ id: 417, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 85,
    name: "Solitude Depths Slay 5",
    stages: [{ id: 417, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 86,
    name: "Solitude Depths Support 1",
    stages: [
      { id: 417, areaNumber: 0, imgPath: "" },
      { id: 440, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 87,
    name: "Solitude Depths Support 2",
    stages: [{ id: 417, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 88,
    name: "Solitude Depths Support 3",
    stages: [{ id: 417, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 89,
    name: "Solitude Depths Support 4",
    stages: [{ id: 417, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 90,
    name: "Solitude Depths Support 5",
    stages: [{ id: 417, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 91,
    name: "Cloud Viewing Fortress",
    stages: [
      { id: 438, areaNumber: 0, imgPath: "" },
      { id: 439, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 92,
    name: "Painted Falls Day",
    stages: [
      { id: 423, areaNumber: 0, imgPath: "" },
      { id: 425, areaNumber: 1, imgPath: "" },
      { id: 427, areaNumber: 2, imgPath: "" },
      { id: 429, areaNumber: 3, imgPath: "" },
      { id: 431, areaNumber: 4, imgPath: "" },
      { id: 433, areaNumber: 5, imgPath: "" },
      { id: 435, areaNumber: 6, imgPath: "" },
    ],
  },
  {
    id: 93,
    name: "Painted Falls Nigh",
    stages: [
      { id: 424, areaNumber: 0, imgPath: "" },
      { id: 426, areaNumber: 1, imgPath: "" },
      { id: 428, areaNumber: 2, imgPath: "" },
      { id: 430, areaNumber: 3, imgPath: "" },
      { id: 432, areaNumber: 4, imgPath: "" },
      { id: 434, areaNumber: 5, imgPath: "" },
      { id: 436, areaNumber: 6, imgPath: "" },
    ],
  },
  {
    id: 94,
    name: "Sanctuary",
    stages: [
      { id: 448, areaNumber: 0, imgPath: "" },
      { id: 449, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 95,
    name: "Hunter's Road",
    stages: [{ id: 459, areaNumber: 0, imgPath: "" }],
  },
  {
    id: 96,
    name: "Sacred Pinnacle",
    stages: [
      { id: 446, areaNumber: 0, imgPath: "" },
      { id: 447, areaNumber: 1, imgPath: "" },
    ],
  },
  {
    id: 97,
    name: "Historic Site",
    stages: [
      { id: 460, areaNumber: 0, imgPath: "" },
      { id: 461, areaNumber: 1, imgPath: "" },
    ],
  },
];

const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const mapsPath = path.join(
  __dirname,
  "packages",
  "ui",
  "lib",
  "assets",
  "MHFZ Resource Maps"
);

const saveMap = async () => {
  const data = [];

  for (let i = 0; i < maps.length; i++) {
    const map = maps[i];
    const stages = [];

    for (let j = 0; j < map.stages.length; j++) {
      const stage = map.stages[j];
      const imgPath = path.join(mapsPath, stage.imgPath);

      if (stage.imgPath && !(await fileExists(imgPath))) {
        console.log(`${imgPath} does not exist`);
      }
      stages.push(new MapStage(stage.id, stage.areaNumber, stage.imgPath));
    }

    data.push(new Map(map.id, map.name, stages));
  }

  await fs.writeFileSync(`./obj.json`, JSON.stringify(data));
  console.log("salvou!");
};

const getFiles = async () => {
  const files = await readdir(mapsPath);

  return files;
};

const fileExists = async (filePath) => {
  try {
    const r = await stat(filePath);
    return !r.isDirectory();
  } catch (err) {
    return false;
  }
};

saveMap();