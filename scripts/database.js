const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Evil Dude",
            power: "Looks super weird"
        },
        {
            id: 2,
            name: "Ultra Wall",
            power: "Blocks your goals"
        },
        {
            id: 3,
            name: "Keyboard Maniac",
            power: "plays keytar until your ears bleed"
        },
        {
            id: 4,
            name: "Lacker",
            power: "Always catches you lacking"
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}