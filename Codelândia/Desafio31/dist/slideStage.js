import { loopForGames } from "./handleEndgames.js";
import { slideStages } from "./script.js";
const controllers = document.querySelectorAll('[data-controllers]');
controllers.forEach((item) => item.addEventListener("click", controlSlide));
let control = 0;
export function roundOf16(data, sectionStages, dataTitle) {
    const dataRoundOf16 = data.filter((match) => match.stage_name === 'Round of 16');
    if (dataTitle)
        dataTitle.innerText = "OITAVAS DE FINAL";
    if (sectionStages) {
        sectionStages.classList.add('stages');
        loopForGames(dataRoundOf16, sectionStages);
    }
}
export function quarterFinal(data, sectionStages, dataTitle) {
    const quarterFinal = data.filter((match) => match.stage_name === 'Quarter-final');
    if (dataTitle)
        dataTitle.innerText = "QUARTAS DE FINAL";
    if (sectionStages) {
        loopForGames(quarterFinal, sectionStages);
    }
}
export function semiFinal(data, sectionStages, dataTitle) {
    const semiFinal = data.filter((match) => match.stage_name === 'Semi-final');
    if (dataTitle)
        dataTitle.innerText = "SEMIFINAL";
    if (sectionStages) {
        loopForGames(semiFinal, sectionStages);
    }
}
export function playOff(data, sectionStages, dataTitle) {
    const playOff = data.filter((match) => match.stage_name === 'Play-off for third place');
    if (dataTitle)
        dataTitle.innerText = "DISPUTA DE 3° LUGAR";
    if (sectionStages) {
        loopForGames(playOff, sectionStages);
    }
}
export function final(data, sectionStages, dataTitle) {
    const final = data.filter((match) => match.stage_name === 'Final');
    if (dataTitle)
        dataTitle.innerText = "FINAL";
    if (sectionStages) {
        loopForGames(final, sectionStages);
    }
}
export function controlSlide(event) {
    if (event.currentTarget instanceof HTMLElement) {
        if (event.currentTarget.getAttribute('data-controllers') === "left") {
            control - 1 < 0 ? control : control -= 1;
        }
        else if (event.currentTarget.getAttribute('data-controllers') === "right") {
            control + 1 > 5 ? control : control += 1;
        }
        else {
            control = 0;
        }
    }
    slideStages();
    observerControllers();
}
export function valueControl() {
    return control;
}
export function observerControllers() {
    controllers.forEach((item) => {
        if (item.getAttribute('data-controllers') === "left" && control === 0) {
            item.innerHTML = `<img src="./image/controls/arrow-right-white.svg" alt="left control">`;
        }
        else if (item.getAttribute('data-controllers') === "right" && control === 5) {
            item.innerHTML = `<img src="./image/controls/arrow-right-white.svg" alt="right control">`;
        }
        else {
            item.innerHTML = `<img src="./image/controls/arrow-right.svg" alt="${item.getAttribute('data-controllers')} control">`;
        }
    });
}
observerControllers();
//# sourceMappingURL=slideStage.js.map