import { ABILITY_SCORE } from "../types";
import { createButton } from "./common";

export default (onClick) => {
  const parent = document.querySelector(".ability-scores");
  for (const child of parent.children) {
    const button = createButton("roll", function () {
      onClick({
        type: ABILITY_SCORE,
        name: child.querySelector(".ability-score-name").innerText,
        score: child.querySelector(".ability-score").innerText,
        modifier: child.querySelector(".ability-score-modifier").innerText,
      });
    });
    button.classList.add("m-t-10");
    child.appendChild(button);
  }
  console.log("Hooked ability scores");
};