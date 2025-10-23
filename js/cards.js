const cards = [
  // ======== COMMON (24) ========
  {
    name: "Lily Cat",
    power: 8,
    rarity: "common",
    img: "assets/lilycat.png",
  },
  {
    name: "Iris Frog",
    power: 8,
    rarity: "common",
    img: "assets/irisfrog.png",
  },
  {
    name: "Fungi Bard",
    power: 8,
    rarity: "common",
    img: "assets/fungibard.png",
  },
  {
    name: "Spore Fox",
    power: 9,
    rarity: "common",
    img: "assets/sporefox.png",
  },
  {
    name: "Violet Wisp",
    power: 10,
    rarity: "common",
    img: "assets/violetwisp.png",
  },
  {
    name: "Toadstool Twins",
    power: 11,
    rarity: "common",
    img: "assets/toadstooltwins.png",
  },
  {
    name: "Baobab Guardian",
    power: 9,
    rarity: "common",
    img: "assets/baobabguardian.png",
  },
  {
    name: "Mushroom Boy",
    power: 9,
    rarity: "common",
    img: "assets/mushroomboy.png",
  },
  {
    name: "Birch Brother",
    power: 10,
    rarity: "common",
    img: "assets/birchbrother.png",
  },
  {
    name: "Bloom Spirit",
    power: 8,
    rarity: "common",
    img: "assets/bloomspirit.png",
  },
  {
    name: "Tulip Tortoise",
    power: 9,
    rarity: "common",
    img: "assets/tuliptortoise.png",
  },
  {
    name: "Minty Moth",
    power: 8,
    rarity: "common",
    img: "assets/mintymoth.png",
  },
  {
    name: "Peony Pup",
    power: 8,
    rarity: "common",
    img: "assets/peonypup.png",
  },
  {
    name: "Pitcher Sprite",
    power: 8,
    rarity: "common",
    img: "assets/pitchersprite.png",
  },
  {
    name: "Creeper Pixie",
    power: 10,
    rarity: "common",
    img: "assets/creeperpixie.png",
  },
  {
    name: "Dreamroot Sloth",
    power: 8,
    rarity: "common",
    img: "assets/dreamrootsloth.png",
  },
  {
    name: "Reed Runner",
    power: 8,
    rarity: "common",
    img: "assets/reedrunner.png",
  },
  {
    name: "Snapdragon Sentry",
    power: 9,
    rarity: "common",
    img: "assets/snapdragonsentry.png",
  },
  {
    name: "Cactus Kid",
    power: 9,
    rarity: "common",
    img: "assets/cactuskid.png",
  },
  {
    name: "Rootfather Elm",
    power: 9,
    rarity: "common",
    img: "assets/rootfatherelm.png",
  },
  {
    name: "Thistle Rogue",
    power: 10,
    rarity: "common",
    img: "assets/thistlerogue.png",
  },
  {
    name: "Mandrake Snout",
    power: 11,
    rarity: "common",
    img: "assets/mandrakesnout.png",
  },
  {
    name: "Aconite Chinchilla",
    power: 9,
    rarity: "common",
    img: "assets/aconitechinchilla.png",
  },
  {
    name: "Dahlia Kitten",
    power: 10,
    rarity: "common",
    img: "assets/dhaliakitten.png",
  },

  // ======== RARE (12) ========
  {
    name: "Dandelion Puff",
    power: 12,
    rarity: "rare",
    img: "assets/dandelionpuff.png",
  },
  {
    name: "Fern Sprite",
    power: 12,
    rarity: "rare",
    img: "assets/fernsrpite.png",
  },
  {
    name: "Sunflower Sentry",
    power: 12,
    rarity: "rare",
    img: "assets/sunflowersentry.png",
  },
  {
    name: "Mooncap Owl",
    power: 13,
    rarity: "rare",
    img: "assets/mooncapowl.png",
  },
  {
    name: "Acorn Knight",
    power: 14,
    rarity: "rare",
    img: "assets/acornknight.png",
  },
  {
    name: "Rose Knight",
    power: 14,
    rarity: "rare",
    img: "assets/roseknight.png",
  },
  {
    name: "Clover Witch",
    power: 14,
    rarity: "rare",
    img: "assets/cloverwitch.png",
  },
  {
    name: "Bramble Bear",
    power: 15,
    rarity: "rare",
    img: "assets/bramblebear.png",
  },
  {
    name: "Volcan Lily Warrior",
    power: 14,
    rarity: "rare",
    img: "assets/volcanlilywarrior.png",
  },
  {
    name: "Heliconia Harlequin",
    power: 13,
    rarity: "rare",
    img: "assets/heliconiaharlequin.png",
  },
  {
    name: "Agave Alchemist",
    power: 15,
    rarity: "rare",
    img: "assets/agavealchemist.png",
  },
  {
    name: "Honeysuckle Herald",
    power: 14,
    rarity: "rare",
    img: "assets/honeysuckleherald.png",
  },

  // ======== LEGENDARY (4) ========
  {
    name: "Lotus Empress",
    power: 25,
    rarity: "legendary",
    img: "assets/lotusempress.png",
  },
  {
    name: "Camellia Countess",
    power: 25,
    rarity: "legendary",
    img: "assets/camelliacountess.png",
  },
  {
    name: "Nightshade Oracle",
    power: 25,
    rarity: "legendary",
    img: "assets/nightshadeoracle.png",
  },
  {
    name: "Thorn Regent",
    power: 25,
    rarity: "legendary",
    img: "assets/thornregent.png",
  },
];

// ======== Pull odds  ========
const rarityOdds = {
  common: 0.84,
  rare: 0.15,
  legendary: 0.01,
};
