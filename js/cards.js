const cards = [
  // ======== COMMON (24) ========
  {
    name: "Lily Cat",
    power: 8,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/lilycat.png",
  },
  {
    name: "Iris Frog",
    power: 8,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/irisfrog.png",
  },
  {
    name: "Fungi Bard",
    power: 8,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/fungibard.png",
  },
  {
    name: "Spore Fox",
    power: 9,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/sporefox.png",
  },
  {
    name: "Violet Wisp",
    power: 10,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/violetwisp.png",
  },
  {
    name: "Toadstool Twins",
    power: 11,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/toadstooltwins.png",
  },
  {
    name: "Baobab Guardian",
    power: 9,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/baobabguardian.png",
  },
  {
    name: "Mushroom Boy",
    power: 9,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/mushroomboy.png",
  },
  {
    name: "Birch Brother",
    power: 10,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/birchbrother.png",
  },
  {
    name: "Bloom Spirit",
    power: 8,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/bloomspirit.png",
  },
  {
    name: "Tulip Tortoise",
    power: 9,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/tuliptortoise.png",
  },
  {
    name: "Minty Moth",
    power: 8,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/mintymoth.png",
  },
  {
    name: "Peony Pup",
    power: 8,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/peonypup.png",
  },
  {
    name: "Pitcher Sprite",
    power: 8,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/pitchersprite.png",
  },
  {
    name: "Creeper Pixie",
    power: 10,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/creeperpixie.png",
  },
  {
    name: "Dreamroot Sloth",
    power: 8,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/dreamrootsloth.png",
  },
  {
    name: "Reed Runner",
    power: 8,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/reedrunner.png",
  },
  {
    name: "Snapdragon Sentry",
    power: 9,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/snapdragonsentry.png",
  },
  {
    name: "Cactus Kid",
    power: 9,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/cactuskid.png",
  },
  {
    name: "Rootfather Elm",
    power: 9,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/rootfatherelm.png",
  },
  {
    name: "Thistle Rogue",
    power: 10,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/thistlerogue.png",
  },
  {
    name: "Mandrake Snout",
    power: 11,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/mandrakesnout.png",
  },
  {
    name: "Aconite Chinchilla",
    power: 9,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/aconitechinchilla.png",
  },
  {
    name: "Dahlia Kitten",
    power: 10,
    rarity: "common",
    img: "https://alice-ji.github.io/Gacha/assets/dhaliakitten.png",
  },

  // ======== RARE (12) ========
  {
    name: "Dandelion Puff",
    power: 12,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/dandelionpuff.png",
  },
  {
    name: "Fern Sprite",
    power: 12,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/fernsrpite.png",
  },
  {
    name: "Sunflower Sentry",
    power: 12,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/sunflowersentry.png",
  },
  {
    name: "Mooncap Owl",
    power: 13,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/mooncapowl.png",
  },
  {
    name: "Acorn Knight",
    power: 14,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/acornknight.png",
  },
  {
    name: "Rose Knight",
    power: 14,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/roseknight.png",
  },
  {
    name: "Clover Witch",
    power: 14,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/cloverwitch.png",
  },
  {
    name: "Bramble Bear",
    power: 15,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/bramblebear.png",
  },
  {
    name: "Volcan Lily Warrior",
    power: 14,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/volcanlilywarrior.png",
  },
  {
    name: "Heliconia Harlequin",
    power: 13,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/heliconiaharlequin.png",
  },
  {
    name: "Agave Alchemist",
    power: 15,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/agavealchemist.png",
  },
  {
    name: "Honeysuckle Herald",
    power: 14,
    rarity: "rare",
    img: "https://alice-ji.github.io/Gacha/assets/honeysuckleherald.png",
  },

  // ======== LEGENDARY (4) ========
  {
    name: "Lotus Empress",
    power: 25,
    rarity: "legendary",
    img: "https://alice-ji.github.io/Gacha/assets/lotusempress.png",
  },
  {
    name: "Camellia Countess",
    power: 25,
    rarity: "legendary",
    img: "https://alice-ji.github.io/Gacha/assets/camelliacountess.png",
  },
  {
    name: "Nightshade Oracle",
    power: 25,
    rarity: "legendary",
    img: "https://alice-ji.github.io/Gacha/assets/nightshadeoracle.png",
  },
  {
    name: "Thorn Regent",
    power: 25,
    rarity: "legendary",
    img: "https://alice-ji.github.io/Gacha/assets/thornregent.png",
  },
];

// ======== Pull odds  ========
const rarityOdds = {
  common: 0.7,
  rare: 0.25,
  legendary: 0.05,
};
