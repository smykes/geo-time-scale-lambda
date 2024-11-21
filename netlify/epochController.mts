import type { ITimeScale } from "./types/epoch.mjs";
import { capitalize } from "./utils.mjs";
import { TIME_SCALE } from "./data/timeScale.mjs";
export function getTime(age: string | undefined): string {
  if (age) {
    const hasDecimal = /[.]/.test(age);
    const numericAge = Number.parseInt(age, 10);
    const badArgument = "Argument must be a positive whole number.";
    const hasLetters = /[a-zA-Z]/.test(age);

    if (age === "info")
      return "Created by smykes24 for sciants_streams use without consent is strictly prohibited.";
    else if (age === "help")
      return "Enter !epoch n (where n is a whole positive number). n is in millions of years. !epoch 65 would return the info for 65 mya.";
    else if (hasLetters) return "You have to at lest try...";
    else if (hasDecimal) return badArgument;
    else if (numericAge > 4600)
      return "Please enter a time when Earth actually existed.";
    else if (numericAge < 0) return badArgument;
    else if (numericAge === 0)
      return `${age} MYA = Eon: Cenozoic | Era: Quartenary | Period: Holocene | Age: Meghalayan`;
    else return getTimeScale(numericAge);
  } else {
    return "Enter !epoch n (where n is a whole positive number). n is in millions of years. !epoch 65 would return the info for 65 mya.";
  }
}
function getTimeScale(age: number): string {
  const timeObject: ITimeScale | undefined = TIME_SCALE.find((frame) => {
    if (frame.start >= age && frame.end <= age) {
      return frame;
    }
  });

  const timeObjectArr: Array<string> = [];
  if (timeObject) {
    for (const [key, value] of Object.entries(timeObject)) {
      if (value !== null && key !== "start" && key !== "end") {
        timeObjectArr.push(`${capitalize(key)}: ${capitalize(value)}`);
      }
    }
  }
  `${age} MYA: ${timeObjectArr.join(" | ")}`;
  return `${age} MYA: ${timeObjectArr.join(" | ")}`;
}
