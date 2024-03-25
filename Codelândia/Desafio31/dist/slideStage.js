import { loopForGames } from "./handleEndgames.js";
import { handleGroups } from "./handleGroups.js";
import { insertRounds } from "./handleSlidesGroupStage.js";
const controllers = document.querySelectorAll('[data-controllers]');
controllers.forEach((item) => item.addEventListener("click", controlSlide));
let control = 0;
let dataMatch;
let dataGroup;
export function dataAPIMatches(data) {
    dataMatch = data;
}
export function dataAPIGroups(data) {
    dataGroup = data;
}
function slideStages() {
    const stages = document.querySelector('[data-stage]');
    const dataTitle = document.querySelector('[data-titleStage]');
    switch (valueControl()) {
        case 0:
            stages && dataTitle ? handleGroups(dataGroup, dataTitle, stages) : '';
            break;
        case 1:
            stages && dataTitle ? roundOf16(dataMatch, stages, dataTitle) : '';
            break;
        case 2:
            stages && dataTitle ? quarterFinal(dataMatch, stages, dataTitle) : '';
            break;
        case 3:
            stages && dataTitle ? semiFinal(dataMatch, stages, dataTitle) : '';
            break;
        case 4:
            stages && dataTitle ? playOff(dataMatch, stages, dataTitle) : '';
            break;
        case 5:
            stages && dataTitle ? final(dataMatch, stages, dataTitle) : '';
            break;
        default:
            break;
    }
}
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
    observerControllers(controllers, control);
    insertRounds();
}
export function valueControl() {
    return control;
}
export function observerControllers(controls, controlItem, attribute = 'data-controllers', max = 5) {
    controls.forEach((item) => {
        if (item instanceof HTMLElement) {
            if (item.getAttribute(attribute) === "left" && controlItem === 0) {
                item.innerHTML = `<img src="./image/controls/arrow-right-white.svg" alt="left control">`;
            }
            else if (item.getAttribute(attribute) === "right" && controlItem === max) {
                item.innerHTML = `<img src="./image/controls/arrow-right-white.svg" alt="right control">`;
            }
            else {
                item.innerHTML = `<img src="./image/controls/arrow-right.svg" alt="${item.getAttribute(attribute)} control">`;
            }
        }
    });
}
observerControllers(controllers, control);
//# sourceMappingURL=slideStage.js.map