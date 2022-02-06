export {};

type CharacterClass = "warror" | "paladin" | "wizard" | "cleric";

type LawChaos = "lawful" | "neutral" | "chaotic";
type GoodEvil = "good" | "neutral" | "evil";

type Alignment = `${LawChaos}-${GoodEvil}`; //take from both

type Character = {
  name: string;
  profession: CharacterClass;
  alignment: string; // We want to change this!
};

const steve: Character = {
  name: "Steve",
  profession: "wizard",
  alignment: "chaotic-good",
};
