/**
 * Data scraped from PokéApi
 * Was causing performance slowdowns to run so many
 * fetches to get a list of allPokemon and their types
 */

// interface PokemonData {
//   name: string;
//   url: string;
//   types?: string[];
// }

// async function getPokemonData(
//   url: string,
//   ref: React.MutableRefObject<PokemonData[]>,
// ) {
//   return fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       const types = Object.values(data.types || []).map(
//         (type: any) => type.type.name,
//       );
//       const pokemon = ref.current.find((f) => f.url === url);
//       if (pokemon) pokemon.types = types;
//     });
// }
// const allPokemonRef = React.useRef<PokemonData[]>([]);
// const allPokemon = allPokemonRef.current;
// const setAllPokemon = (value: PokemonData[]) => {
//   allPokemonRef.current = value;
// };

// React.useEffect(() => {
//   fetch("https://pokeapi.co/api/v2/pokemon?limit=1118")
//     .then((res) => res.json())
//     .then((data) => {
//       const basePokemon = (data.results as PokemonData[]).filter(
//         (p) => !/(mega|gmax|-)/gi.test(p.name),
//       );
//       basePokemon.forEach((p) => getPokemonData(p.url, allPokemonRef));
//       setAllPokemon(basePokemon);
//     });
// }, []);

export const ALL_POKEMON = [
  {
    name: "bulbasaur",
    types: ["grass", "poison"],
  },
  {
    name: "ivysaur",
    types: ["grass", "poison"],
  },
  {
    name: "venusaur",
    types: ["grass", "poison"],
  },
  {
    name: "charmander",
    types: ["fire"],
  },
  {
    name: "charmeleon",
    types: ["fire"],
  },
  {
    name: "charizard",
    types: ["fire", "flying"],
  },
  {
    name: "squirtle",
    types: ["water"],
  },
  {
    name: "wartortle",
    types: ["water"],
  },
  {
    name: "blastoise",
    types: ["water"],
  },
  {
    name: "caterpie",
    types: ["bug"],
  },
  {
    name: "metapod",
    types: ["bug"],
  },
  {
    name: "butterfree",
    types: ["bug", "flying"],
  },
  {
    name: "weedle",
    types: ["bug", "poison"],
  },
  {
    name: "kakuna",
    types: ["bug", "poison"],
  },
  {
    name: "beedrill",
    types: ["bug", "poison"],
  },
  {
    name: "pidgey",
    types: ["normal", "flying"],
  },
  {
    name: "pidgeotto",
    types: ["normal", "flying"],
  },
  {
    name: "pidgeot",
    types: ["normal", "flying"],
  },
  {
    name: "rattata",
    types: ["normal"],
  },
  {
    name: "raticate",
    types: ["normal"],
  },
  {
    name: "spearow",
    types: ["normal", "flying"],
  },
  {
    name: "fearow",
    types: ["normal", "flying"],
  },
  {
    name: "ekans",
    types: ["poison"],
  },
  {
    name: "arbok",
    types: ["poison"],
  },
  {
    name: "pikachu",
    types: ["electric"],
  },
  {
    name: "raichu",
    types: ["electric"],
  },
  {
    name: "sandshrew",
    types: ["ground"],
  },
  {
    name: "sandslash",
    types: ["ground"],
  },
  {
    name: "nidorina",
    types: ["poison"],
  },
  {
    name: "nidoqueen",
    types: ["poison", "ground"],
  },
  {
    name: "nidorino",
    types: ["poison"],
  },
  {
    name: "nidoking",
    types: ["poison", "ground"],
  },
  {
    name: "clefairy",
    types: ["fairy"],
  },
  {
    name: "clefable",
    types: ["fairy"],
  },
  {
    name: "vulpix",
    types: ["fire"],
  },
  {
    name: "ninetales",
    types: ["fire"],
  },
  {
    name: "jigglypuff",
    types: ["normal", "fairy"],
  },
  {
    name: "wigglytuff",
    types: ["normal", "fairy"],
  },
  {
    name: "zubat",
    types: ["poison", "flying"],
  },
  {
    name: "golbat",
    types: ["poison", "flying"],
  },
  {
    name: "oddish",
    types: ["grass", "poison"],
  },
  {
    name: "gloom",
    types: ["grass", "poison"],
  },
  {
    name: "vileplume",
    types: ["grass", "poison"],
  },
  {
    name: "paras",
    types: ["bug", "grass"],
  },
  {
    name: "parasect",
    types: ["bug", "grass"],
  },
  {
    name: "venonat",
    types: ["bug", "poison"],
  },
  {
    name: "venomoth",
    types: ["bug", "poison"],
  },
  {
    name: "diglett",
    types: ["ground"],
  },
  {
    name: "dugtrio",
    types: ["ground"],
  },
  {
    name: "meowth",
    types: ["normal"],
  },
  {
    name: "persian",
    types: ["normal"],
  },
  {
    name: "psyduck",
    types: ["water"],
  },
  {
    name: "golduck",
    types: ["water"],
  },
  {
    name: "mankey",
    types: ["fighting"],
  },
  {
    name: "primeape",
    types: ["fighting"],
  },
  {
    name: "growlithe",
    types: ["fire"],
  },
  {
    name: "arcanine",
    types: ["fire"],
  },
  {
    name: "poliwag",
    types: ["water"],
  },
  {
    name: "poliwhirl",
    types: ["water"],
  },
  {
    name: "poliwrath",
    types: ["water", "fighting"],
  },
  {
    name: "abra",
    types: ["psychic"],
  },
  {
    name: "kadabra",
    types: ["psychic"],
  },
  {
    name: "alakazam",
    types: ["psychic"],
  },
  {
    name: "machop",
    types: ["fighting"],
  },
  {
    name: "machoke",
    types: ["fighting"],
  },
  {
    name: "machamp",
    types: ["fighting"],
  },
  {
    name: "bellsprout",
    types: ["grass", "poison"],
  },
  {
    name: "weepinbell",
    types: ["grass", "poison"],
  },
  {
    name: "victreebel",
    types: ["grass", "poison"],
  },
  {
    name: "tentacool",
    types: ["water", "poison"],
  },
  {
    name: "tentacruel",
    types: ["water", "poison"],
  },
  {
    name: "geodude",
    types: ["rock", "ground"],
  },
  {
    name: "graveler",
    types: ["rock", "ground"],
  },
  {
    name: "golem",
    types: ["rock", "ground"],
  },
  {
    name: "ponyta",
    types: ["fire"],
  },
  {
    name: "rapidash",
    types: ["fire"],
  },
  {
    name: "slowpoke",
    types: ["water", "psychic"],
  },
  {
    name: "slowbro",
    types: ["water", "psychic"],
  },
  {
    name: "magnemite",
    types: ["electric", "steel"],
  },
  {
    name: "magneton",
    types: ["electric", "steel"],
  },
  {
    name: "farfetchd",
    types: ["normal", "flying"],
  },
  {
    name: "doduo",
    types: ["normal", "flying"],
  },
  {
    name: "dodrio",
    types: ["normal", "flying"],
  },
  {
    name: "seel",
    types: ["water"],
  },
  {
    name: "dewgong",
    types: ["water", "ice"],
  },
  {
    name: "grimer",
    types: ["poison"],
  },
  {
    name: "muk",
    types: ["poison"],
  },
  {
    name: "shellder",
    types: ["water"],
  },
  {
    name: "cloyster",
    types: ["water", "ice"],
  },
  {
    name: "gastly",
    types: ["ghost", "poison"],
  },
  {
    name: "haunter",
    types: ["ghost", "poison"],
  },
  {
    name: "gengar",
    types: ["ghost", "poison"],
  },
  {
    name: "onix",
    types: ["rock", "ground"],
  },
  {
    name: "drowzee",
    types: ["psychic"],
  },
  {
    name: "hypno",
    types: ["psychic"],
  },
  {
    name: "krabby",
    types: ["water"],
  },
  {
    name: "kingler",
    types: ["water"],
  },
  {
    name: "voltorb",
    types: ["electric"],
  },
  {
    name: "electrode",
    types: ["electric"],
  },
  {
    name: "exeggcute",
    types: ["grass", "psychic"],
  },
  {
    name: "exeggutor",
    types: ["grass", "psychic"],
  },
  {
    name: "cubone",
    types: ["ground"],
  },
  {
    name: "marowak",
    types: ["ground"],
  },
  {
    name: "hitmonlee",
    types: ["fighting"],
  },
  {
    name: "hitmonchan",
    types: ["fighting"],
  },
  {
    name: "lickitung",
    types: ["normal"],
  },
  {
    name: "koffing",
    types: ["poison"],
  },
  {
    name: "weezing",
    types: ["poison"],
  },
  {
    name: "rhyhorn",
    types: ["ground", "rock"],
  },
  {
    name: "rhydon",
    types: ["ground", "rock"],
  },
  {
    name: "chansey",
    types: ["normal"],
  },
  {
    name: "tangela",
    types: ["grass"],
  },
  {
    name: "kangaskhan",
    types: ["normal"],
  },
  {
    name: "horsea",
    types: ["water"],
  },
  {
    name: "seadra",
    types: ["water"],
  },
  {
    name: "goldeen",
    types: ["water"],
  },
  {
    name: "seaking",
    types: ["water"],
  },
  {
    name: "staryu",
    types: ["water"],
  },
  {
    name: "starmie",
    types: ["water", "psychic"],
  },
  {
    name: "scyther",
    types: ["bug", "flying"],
  },
  {
    name: "jynx",
    types: ["ice", "psychic"],
  },
  {
    name: "electabuzz",
    types: ["electric"],
  },
  {
    name: "magmar",
    types: ["fire"],
  },
  {
    name: "pinsir",
    types: ["bug"],
  },
  {
    name: "tauros",
    types: ["normal"],
  },
  {
    name: "magikarp",
    types: ["water"],
  },
  {
    name: "gyarados",
    types: ["water", "flying"],
  },
  {
    name: "lapras",
    types: ["water", "ice"],
  },
  {
    name: "ditto",
    types: ["normal"],
  },
  {
    name: "eevee",
    types: ["normal"],
  },
  {
    name: "vaporeon",
    types: ["water"],
  },
  {
    name: "jolteon",
    types: ["electric"],
  },
  {
    name: "flareon",
    types: ["fire"],
  },
  {
    name: "porygon",
    types: ["normal"],
  },
  {
    name: "omanyte",
    types: ["rock", "water"],
  },
  {
    name: "omastar",
    types: ["rock", "water"],
  },
  {
    name: "kabuto",
    types: ["rock", "water"],
  },
  {
    name: "kabutops",
    types: ["rock", "water"],
  },
  {
    name: "aerodactyl",
    types: ["rock", "flying"],
  },
  {
    name: "snorlax",
    types: ["normal"],
  },
  {
    name: "articuno",
    types: ["ice", "flying"],
  },
  {
    name: "zapdos",
    types: ["electric", "flying"],
  },
  {
    name: "moltres",
    types: ["fire", "flying"],
  },
  {
    name: "dratini",
    types: ["dragon"],
  },
  {
    name: "dragonair",
    types: ["dragon"],
  },
  {
    name: "dragonite",
    types: ["dragon", "flying"],
  },
  {
    name: "mewtwo",
    types: ["psychic"],
  },
  {
    name: "mew",
    types: ["psychic"],
  },
  {
    name: "chikorita",
    types: ["grass"],
  },
  {
    name: "bayleef",
    types: ["grass"],
  },
  {
    name: "cyndaquil",
    types: ["fire"],
  },
  {
    name: "quilava",
    types: ["fire"],
  },
  {
    name: "typhlosion",
    types: ["fire"],
  },
  {
    name: "totodile",
    types: ["water"],
  },
  {
    name: "croconaw",
    types: ["water"],
  },
  {
    name: "feraligatr",
    types: ["water"],
  },
  {
    name: "sentret",
    types: ["normal"],
  },
  {
    name: "furret",
    types: ["normal"],
  },
  {
    name: "hoothoot",
    types: ["normal", "flying"],
  },
  {
    name: "noctowl",
    types: ["normal", "flying"],
  },
  {
    name: "ledyba",
    types: ["bug", "flying"],
  },
  {
    name: "ledian",
    types: ["bug", "flying"],
  },
  {
    name: "spinarak",
    types: ["bug", "poison"],
  },
  {
    name: "ariados",
    types: ["bug", "poison"],
  },
  {
    name: "crobat",
    types: ["poison", "flying"],
  },
  {
    name: "chinchou",
    types: ["water", "electric"],
  },
  {
    name: "lanturn",
    types: ["water", "electric"],
  },
  {
    name: "pichu",
    types: ["electric"],
  },
  {
    name: "cleffa",
    types: ["fairy"],
  },
  {
    name: "igglybuff",
    types: ["normal", "fairy"],
  },
  {
    name: "togepi",
    types: ["fairy"],
  },
  {
    name: "togetic",
    types: ["fairy", "flying"],
  },
  {
    name: "natu",
    types: ["psychic", "flying"],
  },
  {
    name: "xatu",
    types: ["psychic", "flying"],
  },
  {
    name: "mareep",
    types: ["electric"],
  },
  {
    name: "flaaffy",
    types: ["electric"],
  },
  {
    name: "ampharos",
    types: ["electric"],
  },
  {
    name: "bellossom",
    types: ["grass"],
  },
  {
    name: "marill",
    types: ["water", "fairy"],
  },
  {
    name: "azumarill",
    types: ["water", "fairy"],
  },
  {
    name: "sudowoodo",
    types: ["rock"],
  },
  {
    name: "politoed",
    types: ["water"],
  },
  {
    name: "hoppip",
    types: ["grass", "flying"],
  },
  {
    name: "skiploom",
    types: ["grass", "flying"],
  },
  {
    name: "jumpluff",
    types: ["grass", "flying"],
  },
  {
    name: "aipom",
    types: ["normal"],
  },
  {
    name: "sunkern",
    types: ["grass"],
  },
  {
    name: "sunflora",
    types: ["grass"],
  },
  {
    name: "yanma",
    types: ["bug", "flying"],
  },
  {
    name: "wooper",
    types: ["water", "ground"],
  },
  {
    name: "quagsire",
    types: ["water", "ground"],
  },
  {
    name: "espeon",
    types: ["psychic"],
  },
  {
    name: "umbreon",
    types: ["dark"],
  },
  {
    name: "murkrow",
    types: ["dark", "flying"],
  },
  {
    name: "slowking",
    types: ["water", "psychic"],
  },
  {
    name: "misdreavus",
    types: ["ghost"],
  },
  {
    name: "unown",
    types: ["psychic"],
  },
  {
    name: "wobbuffet",
    types: ["psychic"],
  },
  {
    name: "girafarig",
    types: ["normal", "psychic"],
  },
  {
    name: "pineco",
    types: ["bug"],
  },
  {
    name: "forretress",
    types: ["bug", "steel"],
  },
  {
    name: "dunsparce",
    types: ["normal"],
  },
  {
    name: "gligar",
    types: ["ground", "flying"],
  },
  {
    name: "steelix",
    types: ["steel", "ground"],
  },
  {
    name: "snubbull",
    types: ["fairy"],
  },
  {
    name: "granbull",
    types: ["fairy"],
  },
  {
    name: "qwilfish",
    types: ["water", "poison"],
  },
  {
    name: "scizor",
    types: ["bug", "steel"],
  },
  {
    name: "shuckle",
    types: ["bug", "rock"],
  },
  {
    name: "heracross",
    types: ["bug", "fighting"],
  },
  {
    name: "sneasel",
    types: ["dark", "ice"],
  },
  {
    name: "teddiursa",
    types: ["normal"],
  },
  {
    name: "ursaring",
    types: ["normal"],
  },
  {
    name: "slugma",
    types: ["fire"],
  },
  {
    name: "magcargo",
    types: ["fire", "rock"],
  },
  {
    name: "swinub",
    types: ["ice", "ground"],
  },
  {
    name: "piloswine",
    types: ["ice", "ground"],
  },
  {
    name: "corsola",
    types: ["water", "rock"],
  },
  {
    name: "remoraid",
    types: ["water"],
  },
  {
    name: "octillery",
    types: ["water"],
  },
  {
    name: "delibird",
    types: ["ice", "flying"],
  },
  {
    name: "mantine",
    types: ["water", "flying"],
  },
  {
    name: "skarmory",
    types: ["steel", "flying"],
  },
  {
    name: "houndour",
    types: ["dark", "fire"],
  },
  {
    name: "houndoom",
    types: ["dark", "fire"],
  },
  {
    name: "kingdra",
    types: ["water", "dragon"],
  },
  {
    name: "phanpy",
    types: ["ground"],
  },
  {
    name: "donphan",
    types: ["ground"],
  },
  {
    name: "porygon2",
    types: ["normal"],
  },
  {
    name: "stantler",
    types: ["normal"],
  },
  {
    name: "smeargle",
    types: ["normal"],
  },
  {
    name: "tyrogue",
    types: ["fighting"],
  },
  {
    name: "hitmontop",
    types: ["fighting"],
  },
  {
    name: "smoochum",
    types: ["ice", "psychic"],
  },
  {
    name: "elekid",
    types: ["electric"],
  },
  {
    name: "magby",
    types: ["fire"],
  },
  {
    name: "miltank",
    types: ["normal"],
  },
  {
    name: "blissey",
    types: ["normal"],
  },
  {
    name: "raikou",
    types: ["electric"],
  },
  {
    name: "entei",
    types: ["fire"],
  },
  {
    name: "suicune",
    types: ["water"],
  },
  {
    name: "larvitar",
    types: ["rock", "ground"],
  },
  {
    name: "pupitar",
    types: ["rock", "ground"],
  },
  {
    name: "tyranitar",
    types: ["rock", "dark"],
  },
  {
    name: "lugia",
    types: ["psychic", "flying"],
  },
  {
    name: "celebi",
    types: ["psychic", "grass"],
  },
  {
    name: "treecko",
    types: ["grass"],
  },
  {
    name: "grovyle",
    types: ["grass"],
  },
  {
    name: "sceptile",
    types: ["grass"],
  },
  {
    name: "torchic",
    types: ["fire"],
  },
  {
    name: "combusken",
    types: ["fire", "fighting"],
  },
  {
    name: "blaziken",
    types: ["fire", "fighting"],
  },
  {
    name: "mudkip",
    types: ["water"],
  },
  {
    name: "marshtomp",
    types: ["water", "ground"],
  },
  {
    name: "swampert",
    types: ["water", "ground"],
  },
  {
    name: "poochyena",
    types: ["dark"],
  },
  {
    name: "mightyena",
    types: ["dark"],
  },
  {
    name: "zigzagoon",
    types: ["normal"],
  },
  {
    name: "linoone",
    types: ["normal"],
  },
  {
    name: "wurmple",
    types: ["bug"],
  },
  {
    name: "silcoon",
    types: ["bug"],
  },
  {
    name: "beautifly",
    types: ["bug", "flying"],
  },
  {
    name: "cascoon",
    types: ["bug"],
  },
  {
    name: "dustox",
    types: ["bug", "poison"],
  },
  {
    name: "lotad",
    types: ["water", "grass"],
  },
  {
    name: "lombre",
    types: ["water", "grass"],
  },
  {
    name: "ludicolo",
    types: ["water", "grass"],
  },
  {
    name: "seedot",
    types: ["grass"],
  },
  {
    name: "nuzleaf",
    types: ["grass", "dark"],
  },
  {
    name: "shiftry",
    types: ["grass", "dark"],
  },
  {
    name: "taillow",
    types: ["normal", "flying"],
  },
  {
    name: "swellow",
    types: ["normal", "flying"],
  },
  {
    name: "wingull",
    types: ["water", "flying"],
  },
  {
    name: "pelipper",
    types: ["water", "flying"],
  },
  {
    name: "ralts",
    types: ["psychic", "fairy"],
  },
  {
    name: "kirlia",
    types: ["psychic", "fairy"],
  },
  {
    name: "gardevoir",
    types: ["psychic", "fairy"],
  },
  {
    name: "surskit",
    types: ["bug", "water"],
  },
  {
    name: "masquerain",
    types: ["bug", "flying"],
  },
  {
    name: "shroomish",
    types: ["grass"],
  },
  {
    name: "breloom",
    types: ["grass", "fighting"],
  },
  {
    name: "slakoth",
    types: ["normal"],
  },
  {
    name: "vigoroth",
    types: ["normal"],
  },
  {
    name: "slaking",
    types: ["normal"],
  },
  {
    name: "nincada",
    types: ["bug", "ground"],
  },
  {
    name: "ninjask",
    types: ["bug", "flying"],
  },
  {
    name: "shedinja",
    types: ["bug", "ghost"],
  },
  {
    name: "whismur",
    types: ["normal"],
  },
  {
    name: "loudred",
    types: ["normal"],
  },
  {
    name: "exploud",
    types: ["normal"],
  },
  {
    name: "makuhita",
    types: ["fighting"],
  },
  {
    name: "hariyama",
    types: ["fighting"],
  },
  {
    name: "azurill",
    types: ["normal", "fairy"],
  },
  {
    name: "nosepass",
    types: ["rock"],
  },
  {
    name: "skitty",
    types: ["normal"],
  },
  {
    name: "delcatty",
    types: ["normal"],
  },
  {
    name: "sableye",
    types: ["dark", "ghost"],
  },
  {
    name: "mawile",
    types: ["steel", "fairy"],
  },
  {
    name: "aron",
    types: ["steel", "rock"],
  },
  {
    name: "lairon",
    types: ["steel", "rock"],
  },
  {
    name: "aggron",
    types: ["steel", "rock"],
  },
  {
    name: "meditite",
    types: ["fighting", "psychic"],
  },
  {
    name: "medicham",
    types: ["fighting", "psychic"],
  },
  {
    name: "electrike",
    types: ["electric"],
  },
  {
    name: "manectric",
    types: ["electric"],
  },
  {
    name: "plusle",
    types: ["electric"],
  },
  {
    name: "minun",
    types: ["electric"],
  },
  {
    name: "volbeat",
    types: ["bug"],
  },
  {
    name: "illumise",
    types: ["bug"],
  },
  {
    name: "roselia",
    types: ["grass", "poison"],
  },
  {
    name: "gulpin",
    types: ["poison"],
  },
  {
    name: "swalot",
    types: ["poison"],
  },
  {
    name: "carvanha",
    types: ["water", "dark"],
  },
  {
    name: "sharpedo",
    types: ["water", "dark"],
  },
  {
    name: "wailmer",
    types: ["water"],
  },
  {
    name: "wailord",
    types: ["water"],
  },
  {
    name: "numel",
    types: ["fire", "ground"],
  },
  {
    name: "camerupt",
    types: ["fire", "ground"],
  },
  {
    name: "torkoal",
    types: ["fire"],
  },
  {
    name: "spoink",
    types: ["psychic"],
  },
  {
    name: "grumpig",
    types: ["psychic"],
  },
  {
    name: "spinda",
    types: ["normal"],
  },
  {
    name: "trapinch",
    types: ["ground"],
  },
  {
    name: "vibrava",
    types: ["ground", "dragon"],
  },
  {
    name: "flygon",
    types: ["ground", "dragon"],
  },
  {
    name: "cacnea",
    types: ["grass"],
  },
  {
    name: "cacturne",
    types: ["grass", "dark"],
  },
  {
    name: "swablu",
    types: ["normal", "flying"],
  },
  {
    name: "altaria",
    types: ["dragon", "flying"],
  },
  {
    name: "zangoose",
    types: ["normal"],
  },
  {
    name: "seviper",
    types: ["poison"],
  },
  {
    name: "lunatone",
    types: ["rock", "psychic"],
  },
  {
    name: "solrock",
    types: ["rock", "psychic"],
  },
  {
    name: "barboach",
    types: ["water", "ground"],
  },
  {
    name: "whiscash",
    types: ["water", "ground"],
  },
  {
    name: "corphish",
    types: ["water"],
  },
  {
    name: "crawdaunt",
    types: ["water", "dark"],
  },
  {
    name: "baltoy",
    types: ["ground", "psychic"],
  },
  {
    name: "claydol",
    types: ["ground", "psychic"],
  },
  {
    name: "lileep",
    types: ["rock", "grass"],
  },
  {
    name: "cradily",
    types: ["rock", "grass"],
  },
  {
    name: "anorith",
    types: ["rock", "bug"],
  },
  {
    name: "armaldo",
    types: ["rock", "bug"],
  },
  {
    name: "feebas",
    types: ["water"],
  },
  {
    name: "milotic",
    types: ["water"],
  },
  {
    name: "castform",
    types: ["normal"],
  },
  {
    name: "kecleon",
    types: ["normal"],
  },
  {
    name: "shuppet",
    types: ["ghost"],
  },
  {
    name: "banette",
    types: ["ghost"],
  },
  {
    name: "duskull",
    types: ["ghost"],
  },
  {
    name: "dusclops",
    types: ["ghost"],
  },
  {
    name: "tropius",
    types: ["grass", "flying"],
  },
  {
    name: "chimecho",
    types: ["psychic"],
  },
  {
    name: "absol",
    types: ["dark"],
  },
  {
    name: "wynaut",
    types: ["psychic"],
  },
  {
    name: "snorunt",
    types: ["ice"],
  },
  {
    name: "glalie",
    types: ["ice"],
  },
  {
    name: "spheal",
    types: ["ice", "water"],
  },
  {
    name: "sealeo",
    types: ["ice", "water"],
  },
  {
    name: "walrein",
    types: ["ice", "water"],
  },
  {
    name: "clamperl",
    types: ["water"],
  },
  {
    name: "huntail",
    types: ["water"],
  },
  {
    name: "gorebyss",
    types: ["water"],
  },
  {
    name: "relicanth",
    types: ["water", "rock"],
  },
  {
    name: "luvdisc",
    types: ["water"],
  },
  {
    name: "bagon",
    types: ["dragon"],
  },
  {
    name: "shelgon",
    types: ["dragon"],
  },
  {
    name: "salamence",
    types: ["dragon", "flying"],
  },
  {
    name: "beldum",
    types: ["steel", "psychic"],
  },
  {
    name: "metang",
    types: ["steel", "psychic"],
  },
  {
    name: "metagross",
    types: ["steel", "psychic"],
  },
  {
    name: "regirock",
    types: ["rock"],
  },
  {
    name: "regice",
    types: ["ice"],
  },
  {
    name: "registeel",
    types: ["steel"],
  },
  {
    name: "latias",
    types: ["dragon", "psychic"],
  },
  {
    name: "latios",
    types: ["dragon", "psychic"],
  },
  {
    name: "kyogre",
    types: ["water"],
  },
  {
    name: "groudon",
    types: ["ground"],
  },
  {
    name: "rayquaza",
    types: ["dragon", "flying"],
  },
  {
    name: "jirachi",
    types: ["steel", "psychic"],
  },
  {
    name: "turtwig",
    types: ["grass"],
  },
  {
    name: "grotle",
    types: ["grass"],
  },
  {
    name: "torterra",
    types: ["grass", "ground"],
  },
  {
    name: "chimchar",
    types: ["fire"],
  },
  {
    name: "monferno",
    types: ["fire", "fighting"],
  },
  {
    name: "infernape",
    types: ["fire", "fighting"],
  },
  {
    name: "piplup",
    types: ["water"],
  },
  {
    name: "prinplup",
    types: ["water"],
  },
  {
    name: "empoleon",
    types: ["water", "steel"],
  },
  {
    name: "starly",
    types: ["normal", "flying"],
  },
  {
    name: "staravia",
    types: ["normal", "flying"],
  },
  {
    name: "staraptor",
    types: ["normal", "flying"],
  },
  {
    name: "bidoof",
    types: ["normal"],
  },
  {
    name: "bibarel",
    types: ["normal", "water"],
  },
  {
    name: "kricketot",
    types: ["bug"],
  },
  {
    name: "kricketune",
    types: ["bug"],
  },
  {
    name: "shinx",
    types: ["electric"],
  },
  {
    name: "luxio",
    types: ["electric"],
  },
  {
    name: "luxray",
    types: ["electric"],
  },
  {
    name: "budew",
    types: ["grass", "poison"],
  },
  {
    name: "roserade",
    types: ["grass", "poison"],
  },
  {
    name: "cranidos",
    types: ["rock"],
  },
  {
    name: "rampardos",
    types: ["rock"],
  },
  {
    name: "shieldon",
    types: ["rock", "steel"],
  },
  {
    name: "bastiodon",
    types: ["rock", "steel"],
  },
  {
    name: "burmy",
    types: ["bug"],
  },
  {
    name: "mothim",
    types: ["bug", "flying"],
  },
  {
    name: "combee",
    types: ["bug", "flying"],
  },
  {
    name: "vespiquen",
    types: ["bug", "flying"],
  },
  {
    name: "pachirisu",
    types: ["electric"],
  },
  {
    name: "buizel",
    types: ["water"],
  },
  {
    name: "floatzel",
    types: ["water"],
  },
  {
    name: "cherubi",
    types: ["grass"],
  },
  {
    name: "cherrim",
    types: ["grass"],
  },
  {
    name: "shellos",
    types: ["water"],
  },
  {
    name: "gastrodon",
    types: ["water", "ground"],
  },
  {
    name: "ambipom",
    types: ["normal"],
  },
  {
    name: "drifloon",
    types: ["ghost", "flying"],
  },
  {
    name: "drifblim",
    types: ["ghost", "flying"],
  },
  {
    name: "buneary",
    types: ["normal"],
  },
  {
    name: "lopunny",
    types: ["normal"],
  },
  {
    name: "mismagius",
    types: ["ghost"],
  },
  {
    name: "honchkrow",
    types: ["dark", "flying"],
  },
  {
    name: "glameow",
    types: ["normal"],
  },
  {
    name: "purugly",
    types: ["normal"],
  },
  {
    name: "chingling",
    types: ["psychic"],
  },
  {
    name: "stunky",
    types: ["poison", "dark"],
  },
  {
    name: "skuntank",
    types: ["poison", "dark"],
  },
  {
    name: "bronzor",
    types: ["steel", "psychic"],
  },
  {
    name: "bronzong",
    types: ["steel", "psychic"],
  },
  {
    name: "bonsly",
    types: ["rock"],
  },
  {
    name: "happiny",
    types: ["normal"],
  },
  {
    name: "chatot",
    types: ["normal", "flying"],
  },
  {
    name: "spiritomb",
    types: ["ghost", "dark"],
  },
  {
    name: "gible",
    types: ["dragon", "ground"],
  },
  {
    name: "gabite",
    types: ["dragon", "ground"],
  },
  {
    name: "garchomp",
    types: ["dragon", "ground"],
  },
  {
    name: "munchlax",
    types: ["normal"],
  },
  {
    name: "riolu",
    types: ["fighting"],
  },
  {
    name: "lucario",
    types: ["fighting", "steel"],
  },
  {
    name: "hippopotas",
    types: ["ground"],
  },
  {
    name: "hippowdon",
    types: ["ground"],
  },
  {
    name: "skorupi",
    types: ["poison", "bug"],
  },
  {
    name: "drapion",
    types: ["poison", "dark"],
  },
  {
    name: "croagunk",
    types: ["poison", "fighting"],
  },
  {
    name: "toxicroak",
    types: ["poison", "fighting"],
  },
  {
    name: "carnivine",
    types: ["grass"],
  },
  {
    name: "finneon",
    types: ["water"],
  },
  {
    name: "lumineon",
    types: ["water"],
  },
  {
    name: "mantyke",
    types: ["water", "flying"],
  },
  {
    name: "snover",
    types: ["grass", "ice"],
  },
  {
    name: "abomasnow",
    types: ["grass", "ice"],
  },
  {
    name: "weavile",
    types: ["dark", "ice"],
  },
  {
    name: "magnezone",
    types: ["electric", "steel"],
  },
  {
    name: "lickilicky",
    types: ["normal"],
  },
  {
    name: "rhyperior",
    types: ["ground", "rock"],
  },
  {
    name: "tangrowth",
    types: ["grass"],
  },
  {
    name: "electivire",
    types: ["electric"],
  },
  {
    name: "magmortar",
    types: ["fire"],
  },
  {
    name: "togekiss",
    types: ["fairy", "flying"],
  },
  {
    name: "leafeon",
    types: ["grass"],
  },
  {
    name: "glaceon",
    types: ["ice"],
  },
  {
    name: "gliscor",
    types: ["ground", "flying"],
  },
  {
    name: "mamoswine",
    types: ["ice", "ground"],
  },
  {
    name: "gallade",
    types: ["psychic", "fighting"],
  },
  {
    name: "probopass",
    types: ["rock", "steel"],
  },
  {
    name: "dusknoir",
    types: ["ghost"],
  },
  {
    name: "froslass",
    types: ["ice", "ghost"],
  },
  {
    name: "rotom",
    types: ["electric", "ghost"],
  },
  {
    name: "uxie",
    types: ["psychic"],
  },
  {
    name: "mesprit",
    types: ["psychic"],
  },
  {
    name: "azelf",
    types: ["psychic"],
  },
  {
    name: "dialga",
    types: ["steel", "dragon"],
  },
  {
    name: "palkia",
    types: ["water", "dragon"],
  },
  {
    name: "heatran",
    types: ["fire", "steel"],
  },
  {
    name: "regigigas",
    types: ["normal"],
  },
  {
    name: "cresselia",
    types: ["psychic"],
  },
  {
    name: "phione",
    types: ["water"],
  },
  {
    name: "manaphy",
    types: ["water"],
  },
  {
    name: "darkrai",
    types: ["dark"],
  },
  {
    name: "arceus",
    types: ["normal"],
  },
  {
    name: "victini",
    types: ["psychic", "fire"],
  },
  {
    name: "snivy",
    types: ["grass"],
  },
  {
    name: "servine",
    types: ["grass"],
  },
  {
    name: "serperior",
    types: ["grass"],
  },
  {
    name: "tepig",
    types: ["fire"],
  },
  {
    name: "pignite",
    types: ["fire", "fighting"],
  },
  {
    name: "emboar",
    types: ["fire", "fighting"],
  },
  {
    name: "oshawott",
    types: ["water"],
  },
  {
    name: "dewott",
    types: ["water"],
  },
  {
    name: "samurott",
    types: ["water"],
  },
  {
    name: "patrat",
    types: ["normal"],
  },
  {
    name: "watchog",
    types: ["normal"],
  },
  {
    name: "lillipup",
    types: ["normal"],
  },
  {
    name: "herdier",
    types: ["normal"],
  },
  {
    name: "stoutland",
    types: ["normal"],
  },
  {
    name: "purrloin",
    types: ["dark"],
  },
  {
    name: "liepard",
    types: ["dark"],
  },
  {
    name: "pansage",
    types: ["grass"],
  },
  {
    name: "simisage",
    types: ["grass"],
  },
  {
    name: "pansear",
    types: ["fire"],
  },
  {
    name: "simisear",
    types: ["fire"],
  },
  {
    name: "panpour",
    types: ["water"],
  },
  {
    name: "simipour",
    types: ["water"],
  },
  {
    name: "munna",
    types: ["psychic"],
  },
  {
    name: "musharna",
    types: ["psychic"],
  },
  {
    name: "pidove",
    types: ["normal", "flying"],
  },
  {
    name: "tranquill",
    types: ["normal", "flying"],
  },
  {
    name: "unfezant",
    types: ["normal", "flying"],
  },
  {
    name: "blitzle",
    types: ["electric"],
  },
  {
    name: "zebstrika",
    types: ["electric"],
  },
  {
    name: "roggenrola",
    types: ["rock"],
  },
  {
    name: "boldore",
    types: ["rock"],
  },
  {
    name: "gigalith",
    types: ["rock"],
  },
  {
    name: "woobat",
    types: ["psychic", "flying"],
  },
  {
    name: "swoobat",
    types: ["psychic", "flying"],
  },
  {
    name: "drilbur",
    types: ["ground"],
  },
  {
    name: "excadrill",
    types: ["ground", "steel"],
  },
  {
    name: "audino",
    types: ["normal"],
  },
  {
    name: "timburr",
    types: ["fighting"],
  },
  {
    name: "gurdurr",
    types: ["fighting"],
  },
  {
    name: "conkeldurr",
    types: ["fighting"],
  },
  {
    name: "tympole",
    types: ["water"],
  },
  {
    name: "palpitoad",
    types: ["water", "ground"],
  },
  {
    name: "seismitoad",
    types: ["water", "ground"],
  },
  {
    name: "throh",
    types: ["fighting"],
  },
  {
    name: "sawk",
    types: ["fighting"],
  },
  {
    name: "sewaddle",
    types: ["bug", "grass"],
  },
  {
    name: "swadloon",
    types: ["bug", "grass"],
  },
  {
    name: "leavanny",
    types: ["bug", "grass"],
  },
  {
    name: "venipede",
    types: ["bug", "poison"],
  },
  {
    name: "whirlipede",
    types: ["bug", "poison"],
  },
  {
    name: "scolipede",
    types: ["bug", "poison"],
  },
  {
    name: "cottonee",
    types: ["grass", "fairy"],
  },
  {
    name: "whimsicott",
    types: ["grass", "fairy"],
  },
  {
    name: "petilil",
    types: ["grass"],
  },
  {
    name: "lilligant",
    types: ["grass"],
  },
  {
    name: "sandile",
    types: ["ground", "dark"],
  },
  {
    name: "krokorok",
    types: ["ground", "dark"],
  },
  {
    name: "krookodile",
    types: ["ground", "dark"],
  },
  {
    name: "darumaka",
    types: ["fire"],
  },
  {
    name: "maractus",
    types: ["grass"],
  },
  {
    name: "dwebble",
    types: ["bug", "rock"],
  },
  {
    name: "crustle",
    types: ["bug", "rock"],
  },
  {
    name: "scraggy",
    types: ["dark", "fighting"],
  },
  {
    name: "scrafty",
    types: ["dark", "fighting"],
  },
  {
    name: "sigilyph",
    types: ["psychic", "flying"],
  },
  {
    name: "yamask",
    types: ["ghost"],
  },
  {
    name: "cofagrigus",
    types: ["ghost"],
  },
  {
    name: "tirtouga",
    types: ["water", "rock"],
  },
  {
    name: "carracosta",
    types: ["water", "rock"],
  },
  {
    name: "archen",
    types: ["rock", "flying"],
  },
  {
    name: "archeops",
    types: ["rock", "flying"],
  },
  {
    name: "trubbish",
    types: ["poison"],
  },
  {
    name: "garbodor",
    types: ["poison"],
  },
  {
    name: "zorua",
    types: ["dark"],
  },
  {
    name: "zoroark",
    types: ["dark"],
  },
  {
    name: "minccino",
    types: ["normal"],
  },
  {
    name: "cinccino",
    types: ["normal"],
  },
  {
    name: "gothita",
    types: ["psychic"],
  },
  {
    name: "gothorita",
    types: ["psychic"],
  },
  {
    name: "gothitelle",
    types: ["psychic"],
  },
  {
    name: "solosis",
    types: ["psychic"],
  },
  {
    name: "duosion",
    types: ["psychic"],
  },
  {
    name: "reuniclus",
    types: ["psychic"],
  },
  {
    name: "ducklett",
    types: ["water", "flying"],
  },
  {
    name: "swanna",
    types: ["water", "flying"],
  },
  {
    name: "vanillite",
    types: ["ice"],
  },
  {
    name: "vanillish",
    types: ["ice"],
  },
  {
    name: "vanilluxe",
    types: ["ice"],
  },
  {
    name: "deerling",
    types: ["normal", "grass"],
  },
  {
    name: "sawsbuck",
    types: ["normal", "grass"],
  },
  {
    name: "emolga",
    types: ["electric", "flying"],
  },
  {
    name: "karrablast",
    types: ["bug"],
  },
  {
    name: "escavalier",
    types: ["bug", "steel"],
  },
  {
    name: "foongus",
    types: ["grass", "poison"],
  },
  {
    name: "amoonguss",
    types: ["grass", "poison"],
  },
  {
    name: "frillish",
    types: ["water", "ghost"],
  },
  {
    name: "jellicent",
    types: ["water", "ghost"],
  },
  {
    name: "alomomola",
    types: ["water"],
  },
  {
    name: "joltik",
    types: ["bug", "electric"],
  },
  {
    name: "galvantula",
    types: ["bug", "electric"],
  },
  {
    name: "ferroseed",
    types: ["grass", "steel"],
  },
  {
    name: "ferrothorn",
    types: ["grass", "steel"],
  },
  {
    name: "klink",
    types: ["steel"],
  },
  {
    name: "klang",
    types: ["steel"],
  },
  {
    name: "klinklang",
    types: ["steel"],
  },
  {
    name: "tynamo",
    types: ["electric"],
  },
  {
    name: "eelektrik",
    types: ["electric"],
  },
  {
    name: "eelektross",
    types: ["electric"],
  },
  {
    name: "elgyem",
    types: ["psychic"],
  },
  {
    name: "beheeyem",
    types: ["psychic"],
  },
  {
    name: "litwick",
    types: ["ghost", "fire"],
  },
  {
    name: "lampent",
    types: ["ghost", "fire"],
  },
  {
    name: "chandelure",
    types: ["ghost", "fire"],
  },
  {
    name: "axew",
    types: ["dragon"],
  },
  {
    name: "fraxure",
    types: ["dragon"],
  },
  {
    name: "haxorus",
    types: ["dragon"],
  },
  {
    name: "cubchoo",
    types: ["ice"],
  },
  {
    name: "beartic",
    types: ["ice"],
  },
  {
    name: "cryogonal",
    types: ["ice"],
  },
  {
    name: "shelmet",
    types: ["bug"],
  },
  {
    name: "accelgor",
    types: ["bug"],
  },
  {
    name: "stunfisk",
    types: ["ground", "electric"],
  },
  {
    name: "mienfoo",
    types: ["fighting"],
  },
  {
    name: "mienshao",
    types: ["fighting"],
  },
  {
    name: "druddigon",
    types: ["dragon"],
  },
  {
    name: "golett",
    types: ["ground", "ghost"],
  },
  {
    name: "golurk",
    types: ["ground", "ghost"],
  },
  {
    name: "pawniard",
    types: ["dark", "steel"],
  },
  {
    name: "bisharp",
    types: ["dark", "steel"],
  },
  {
    name: "bouffalant",
    types: ["normal"],
  },
  {
    name: "rufflet",
    types: ["normal", "flying"],
  },
  {
    name: "braviary",
    types: ["normal", "flying"],
  },
  {
    name: "vullaby",
    types: ["dark", "flying"],
  },
  {
    name: "mandibuzz",
    types: ["dark", "flying"],
  },
  {
    name: "heatmor",
    types: ["fire"],
  },
  {
    name: "durant",
    types: ["bug", "steel"],
  },
  {
    name: "deino",
    types: ["dark", "dragon"],
  },
  {
    name: "zweilous",
    types: ["dark", "dragon"],
  },
  {
    name: "hydreigon",
    types: ["dark", "dragon"],
  },
  {
    name: "larvesta",
    types: ["bug", "fire"],
  },
  {
    name: "volcarona",
    types: ["bug", "fire"],
  },
  {
    name: "cobalion",
    types: ["steel", "fighting"],
  },
  {
    name: "terrakion",
    types: ["rock", "fighting"],
  },
  {
    name: "virizion",
    types: ["grass", "fighting"],
  },
  {
    name: "reshiram",
    types: ["dragon", "fire"],
  },
  {
    name: "zekrom",
    types: ["dragon", "electric"],
  },
  {
    name: "kyurem",
    types: ["dragon", "ice"],
  },
  {
    name: "genesect",
    types: ["bug", "steel"],
  },
  {
    name: "chespin",
    types: ["grass"],
  },
  {
    name: "quilladin",
    types: ["grass"],
  },
  {
    name: "chesnaught",
    types: ["grass", "fighting"],
  },
  {
    name: "fennekin",
    types: ["fire"],
  },
  {
    name: "braixen",
    types: ["fire"],
  },
  {
    name: "delphox",
    types: ["fire", "psychic"],
  },
  {
    name: "froakie",
    types: ["water"],
  },
  {
    name: "frogadier",
    types: ["water"],
  },
  {
    name: "greninja",
    types: ["water", "dark"],
  },
  {
    name: "bunnelby",
    types: ["normal"],
  },
  {
    name: "diggersby",
    types: ["normal", "ground"],
  },
  {
    name: "fletchling",
    types: ["normal", "flying"],
  },
  {
    name: "fletchinder",
    types: ["fire", "flying"],
  },
  {
    name: "talonflame",
    types: ["fire", "flying"],
  },
  {
    name: "scatterbug",
    types: ["bug"],
  },
  {
    name: "spewpa",
    types: ["bug"],
  },
  {
    name: "vivillon",
    types: ["bug", "flying"],
  },
  {
    name: "litleo",
    types: ["fire", "normal"],
  },
  {
    name: "pyroar",
    types: ["fire", "normal"],
  },
  {
    name: "flabebe",
    types: ["fairy"],
  },
  {
    name: "floette",
    types: ["fairy"],
  },
  {
    name: "florges",
    types: ["fairy"],
  },
  {
    name: "skiddo",
    types: ["grass"],
  },
  {
    name: "gogoat",
    types: ["grass"],
  },
  {
    name: "pancham",
    types: ["fighting"],
  },
  {
    name: "pangoro",
    types: ["fighting", "dark"],
  },
  {
    name: "furfrou",
    types: ["normal"],
  },
  {
    name: "espurr",
    types: ["psychic"],
  },
  {
    name: "honedge",
    types: ["steel", "ghost"],
  },
  {
    name: "doublade",
    types: ["steel", "ghost"],
  },
  {
    name: "spritzee",
    types: ["fairy"],
  },
  {
    name: "aromatisse",
    types: ["fairy"],
  },
  {
    name: "swirlix",
    types: ["fairy"],
  },
  {
    name: "slurpuff",
    types: ["fairy"],
  },
  {
    name: "inkay",
    types: ["dark", "psychic"],
  },
  {
    name: "malamar",
    types: ["dark", "psychic"],
  },
  {
    name: "binacle",
    types: ["rock", "water"],
  },
  {
    name: "barbaracle",
    types: ["rock", "water"],
  },
  {
    name: "skrelp",
    types: ["poison", "water"],
  },
  {
    name: "dragalge",
    types: ["poison", "dragon"],
  },
  {
    name: "clauncher",
    types: ["water"],
  },
  {
    name: "clawitzer",
    types: ["water"],
  },
  {
    name: "helioptile",
    types: ["electric", "normal"],
  },
  {
    name: "heliolisk",
    types: ["electric", "normal"],
  },
  {
    name: "tyrunt",
    types: ["rock", "dragon"],
  },
  {
    name: "tyrantrum",
    types: ["rock", "dragon"],
  },
  {
    name: "amaura",
    types: ["rock", "ice"],
  },
  {
    name: "aurorus",
    types: ["rock", "ice"],
  },
  {
    name: "sylveon",
    types: ["fairy"],
  },
  {
    name: "hawlucha",
    types: ["fighting", "flying"],
  },
  {
    name: "dedenne",
    types: ["electric", "fairy"],
  },
  {
    name: "carbink",
    types: ["rock", "fairy"],
  },
  {
    name: "goomy",
    types: ["dragon"],
  },
  {
    name: "sliggoo",
    types: ["dragon"],
  },
  {
    name: "goodra",
    types: ["dragon"],
  },
  {
    name: "klefki",
    types: ["steel", "fairy"],
  },
  {
    name: "phantump",
    types: ["ghost", "grass"],
  },
  {
    name: "trevenant",
    types: ["ghost", "grass"],
  },
  {
    name: "bergmite",
    types: ["ice"],
  },
  {
    name: "avalugg",
    types: ["ice"],
  },
  {
    name: "noibat",
    types: ["flying", "dragon"],
  },
  {
    name: "noivern",
    types: ["flying", "dragon"],
  },
  {
    name: "xerneas",
    types: ["fairy"],
  },
  {
    name: "yveltal",
    types: ["dark", "flying"],
  },
  {
    name: "zygarde",
    types: ["dragon", "ground"],
  },
  {
    name: "diancie",
    types: ["rock", "fairy"],
  },
  {
    name: "hoopa",
    types: ["psychic", "ghost"],
  },
  {
    name: "volcanion",
    types: ["fire", "water"],
  },
  {
    name: "rowlet",
    types: ["grass", "flying"],
  },
  {
    name: "dartrix",
    types: ["grass", "flying"],
  },
  {
    name: "decidueye",
    types: ["grass", "ghost"],
  },
  {
    name: "litten",
    types: ["fire"],
  },
  {
    name: "torracat",
    types: ["fire"],
  },
  {
    name: "incineroar",
    types: ["fire", "dark"],
  },
  {
    name: "popplio",
    types: ["water"],
  },
  {
    name: "brionne",
    types: ["water"],
  },
  {
    name: "primarina",
    types: ["water", "fairy"],
  },
  {
    name: "pikipek",
    types: ["normal", "flying"],
  },
  {
    name: "trumbeak",
    types: ["normal", "flying"],
  },
  {
    name: "toucannon",
    types: ["normal", "flying"],
  },
  {
    name: "yungoos",
    types: ["normal"],
  },
  {
    name: "gumshoos",
    types: ["normal"],
  },
  {
    name: "grubbin",
    types: ["bug"],
  },
  {
    name: "charjabug",
    types: ["bug", "electric"],
  },
  {
    name: "vikavolt",
    types: ["bug", "electric"],
  },
  {
    name: "crabrawler",
    types: ["fighting"],
  },
  {
    name: "crabominable",
    types: ["fighting", "ice"],
  },
  {
    name: "cutiefly",
    types: ["bug", "fairy"],
  },
  {
    name: "ribombee",
    types: ["bug", "fairy"],
  },
  {
    name: "rockruff",
    types: ["rock"],
  },
  {
    name: "mareanie",
    types: ["poison", "water"],
  },
  {
    name: "toxapex",
    types: ["poison", "water"],
  },
  {
    name: "mudbray",
    types: ["ground"],
  },
  {
    name: "mudsdale",
    types: ["ground"],
  },
  {
    name: "dewpider",
    types: ["water", "bug"],
  },
  {
    name: "araquanid",
    types: ["water", "bug"],
  },
  {
    name: "fomantis",
    types: ["grass"],
  },
  {
    name: "lurantis",
    types: ["grass"],
  },
  {
    name: "morelull",
    types: ["grass", "fairy"],
  },
  {
    name: "shiinotic",
    types: ["grass", "fairy"],
  },
  {
    name: "salandit",
    types: ["poison", "fire"],
  },
  {
    name: "salazzle",
    types: ["poison", "fire"],
  },
  {
    name: "stufful",
    types: ["normal", "fighting"],
  },
  {
    name: "bewear",
    types: ["normal", "fighting"],
  },
  {
    name: "bounsweet",
    types: ["grass"],
  },
  {
    name: "steenee",
    types: ["grass"],
  },
  {
    name: "tsareena",
    types: ["grass"],
  },
  {
    name: "comfey",
    types: ["fairy"],
  },
  {
    name: "oranguru",
    types: ["normal", "psychic"],
  },
  {
    name: "passimian",
    types: ["fighting"],
  },
  {
    name: "wimpod",
    types: ["bug", "water"],
  },
  {
    name: "golisopod",
    types: ["bug", "water"],
  },
  {
    name: "sandygast",
    types: ["ghost", "ground"],
  },
  {
    name: "palossand",
    types: ["ghost", "ground"],
  },
  {
    name: "pyukumuku",
    types: ["water"],
  },
  {
    name: "silvally",
    types: ["normal"],
  },
  {
    name: "komala",
    types: ["normal"],
  },
  {
    name: "turtonator",
    types: ["fire", "dragon"],
  },
  {
    name: "togedemaru",
    types: ["electric", "steel"],
  },
  {
    name: "bruxish",
    types: ["water", "psychic"],
  },
  {
    name: "drampa",
    types: ["normal", "dragon"],
  },
  {
    name: "dhelmise",
    types: ["ghost", "grass"],
  },
  {
    name: "cosmog",
    types: ["psychic"],
  },
  {
    name: "cosmoem",
    types: ["psychic"],
  },
  {
    name: "solgaleo",
    types: ["psychic", "steel"],
  },
  {
    name: "lunala",
    types: ["psychic", "ghost"],
  },
  {
    name: "nihilego",
    types: ["rock", "poison"],
  },
  {
    name: "buzzwole",
    types: ["bug", "fighting"],
  },
  {
    name: "pheromosa",
    types: ["bug", "fighting"],
  },
  {
    name: "xurkitree",
    types: ["electric"],
  },
  {
    name: "celesteela",
    types: ["steel", "flying"],
  },
  {
    name: "kartana",
    types: ["grass", "steel"],
  },
  {
    name: "guzzlord",
    types: ["dark", "dragon"],
  },
  {
    name: "necrozma",
    types: ["psychic"],
  },
  {
    name: "magearna",
    types: ["steel", "fairy"],
  },
  {
    name: "marshadow",
    types: ["fighting", "ghost"],
  },
  {
    name: "poipole",
    types: ["poison"],
  },
  {
    name: "naganadel",
    types: ["poison", "dragon"],
  },
  {
    name: "stakataka",
    types: ["rock", "steel"],
  },
  {
    name: "blacephalon",
    types: ["fire", "ghost"],
  },
  {
    name: "zeraora",
    types: ["electric"],
  },
  {
    name: "meltan",
    types: ["steel"],
  },
  {
    name: "melmetal",
    types: ["steel"],
  },
  {
    name: "grookey",
    types: ["grass"],
  },
  {
    name: "thwackey",
    types: ["grass"],
  },
  {
    name: "rillaboom",
    types: ["grass"],
  },
  {
    name: "scorbunny",
    types: ["fire"],
  },
  {
    name: "raboot",
    types: ["fire"],
  },
  {
    name: "cinderace",
    types: ["fire"],
  },
  {
    name: "sobble",
    types: ["water"],
  },
  {
    name: "drizzile",
    types: ["water"],
  },
  {
    name: "inteleon",
    types: ["water"],
  },
  {
    name: "skwovet",
    types: ["normal"],
  },
  {
    name: "greedent",
    types: ["normal"],
  },
  {
    name: "rookidee",
    types: ["flying"],
  },
  {
    name: "corvisquire",
    types: ["flying"],
  },
  {
    name: "corviknight",
    types: ["flying", "steel"],
  },
  {
    name: "blipbug",
    types: ["bug"],
  },
  {
    name: "dottler",
    types: ["bug", "psychic"],
  },
  {
    name: "orbeetle",
    types: ["bug", "psychic"],
  },
  {
    name: "nickit",
    types: ["dark"],
  },
  {
    name: "thievul",
    types: ["dark"],
  },
  {
    name: "gossifleur",
    types: ["grass"],
  },
  {
    name: "eldegoss",
    types: ["grass"],
  },
  {
    name: "wooloo",
    types: ["normal"],
  },
  {
    name: "dubwool",
    types: ["normal"],
  },
  {
    name: "chewtle",
    types: ["water"],
  },
  {
    name: "drednaw",
    types: ["water", "rock"],
  },
  {
    name: "yamper",
    types: ["electric"],
  },
  {
    name: "boltund",
    types: ["electric"],
  },
  {
    name: "rolycoly",
    types: ["rock"],
  },
  {
    name: "carkol",
    types: ["rock", "fire"],
  },
  {
    name: "coalossal",
    types: ["rock", "fire"],
  },
  {
    name: "applin",
    types: ["grass", "dragon"],
  },
  {
    name: "flapple",
    types: ["grass", "dragon"],
  },
  {
    name: "appletun",
    types: ["grass", "dragon"],
  },
  {
    name: "silicobra",
    types: ["ground"],
  },
  {
    name: "sandaconda",
    types: ["ground"],
  },
  {
    name: "cramorant",
    types: ["flying", "water"],
  },
  {
    name: "arrokuda",
    types: ["water"],
  },
  {
    name: "barraskewda",
    types: ["water"],
  },
  {
    name: "toxel",
    types: ["electric", "poison"],
  },
  {
    name: "sizzlipede",
    types: ["fire", "bug"],
  },
  {
    name: "centiskorch",
    types: ["fire", "bug"],
  },
  {
    name: "clobbopus",
    types: ["fighting"],
  },
  {
    name: "grapploct",
    types: ["fighting"],
  },
  {
    name: "sinistea",
    types: ["ghost"],
  },
  {
    name: "polteageist",
    types: ["ghost"],
  },
  {
    name: "hatenna",
    types: ["psychic"],
  },
  {
    name: "hattrem",
    types: ["psychic"],
  },
  {
    name: "hatterene",
    types: ["psychic", "fairy"],
  },
  {
    name: "impidimp",
    types: ["dark", "fairy"],
  },
  {
    name: "morgrem",
    types: ["dark", "fairy"],
  },
  {
    name: "grimmsnarl",
    types: ["dark", "fairy"],
  },
  {
    name: "obstagoon",
    types: ["dark", "normal"],
  },
  {
    name: "perrserker",
    types: ["steel"],
  },
  {
    name: "cursola",
    types: ["ghost"],
  },
  {
    name: "sirfetchd",
    types: ["fighting"],
  },
  {
    name: "runerigus",
    types: ["ground", "ghost"],
  },
  {
    name: "milcery",
    types: ["fairy"],
  },
  {
    name: "alcremie",
    types: ["fairy"],
  },
  {
    name: "falinks",
    types: ["fighting"],
  },
  {
    name: "pincurchin",
    types: ["electric"],
  },
  {
    name: "snom",
    types: ["ice", "bug"],
  },
  {
    name: "frosmoth",
    types: ["ice", "bug"],
  },
  {
    name: "stonjourner",
    types: ["rock"],
  },
  {
    name: "morpeko",
    types: ["electric", "dark"],
  },
  {
    name: "cufant",
    types: ["steel"],
  },
  {
    name: "copperajah",
    types: ["steel"],
  },
  {
    name: "dracozolt",
    types: ["electric", "dragon"],
  },
  {
    name: "arctozolt",
    types: ["electric", "ice"],
  },
  {
    name: "dracovish",
    types: ["water", "dragon"],
  },
  {
    name: "arctovish",
    types: ["water", "ice"],
  },
  {
    name: "duraludon",
    types: ["steel", "dragon"],
  },
  {
    name: "dreepy",
    types: ["dragon", "ghost"],
  },
  {
    name: "drakloak",
    types: ["dragon", "ghost"],
  },
  {
    name: "dragapult",
    types: ["dragon", "ghost"],
  },
  {
    name: "eternatus",
    types: ["poison", "dragon"],
  },
  {
    name: "kubfu",
    types: ["fighting"],
  },
  {
    name: "zarude",
    types: ["dark", "grass"],
  },
  {
    name: "regieleki",
    types: ["electric"],
  },
  {
    name: "regidrago",
    types: ["dragon"],
  },
  {
    name: "glastrier",
    types: ["ice"],
  },
  {
    name: "spectrier",
    types: ["ghost"],
  },
  {
    name: "calyrex",
    types: ["psychic", "grass"],
  },
];