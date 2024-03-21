import fetchData from "./fetchData.js";
import { handleEndgames, normalizateMacthes } from "./handleEndgames.js";
import { handleGroups } from "./handleGroups.js";
import { handleSlides } from "./slidesGroups.js";
import handleMenu from "./handleMenu.js";
import isMobile from "./isMobile.js";
import { handleChampion } from "./handleChampion.js";
import { final, playOff, quarterFinal, roundOf16, semiFinal, valueControl } from "./slideStage.js";
let dataAPI;
let groupsAPI;
function mobileActive() {
    const mobile = isMobile("590px");
    const menu = document.querySelector('[data-menu]');
    if (!mobile && menu?.classList.contains('active')) {
        handleMenu();
    }
}
async function dadosApi() {
    const data = await fetchData('./src/dataFirstStage/dataFirstStage.json');
    const dataMacthes = await fetchData('./src/dataMatches/matches.json');
    if (!data || !dataMacthes)
        return;
    handleGroups(data.groups);
    dataAPI = normalizateMacthes(dataMacthes);
    groupsAPI = data.groups;
    const lastThreeMatches = normalizateMacthes(dataMacthes).slice(-4);
    const games = document.querySelector('[data-games]');
    const gamesMacthes = document.querySelector('[data-macthes]');
    games ? handleEndgames(lastThreeMatches, games) : '';
    gamesMacthes ? handleEndgames(normalizateMacthes(dataMacthes), gamesMacthes) : '';
}
export function slideStages() {
    const stages = document.querySelector('[data-stage]');
    const dataTitle = document.querySelector('[data-titleStage]');
    switch (valueControl()) {
        case 0:
            stages && dataTitle ? handleGroups(groupsAPI, dataTitle, stages) : '';
            break;
        case 1:
            stages && dataTitle ? roundOf16(dataAPI, stages, dataTitle) : '';
            break;
        case 2:
            stages && dataTitle ? quarterFinal(dataAPI, stages, dataTitle) : '';
            break;
        case 3:
            stages && dataTitle ? semiFinal(dataAPI, stages, dataTitle) : '';
            break;
        case 4:
            stages && dataTitle ? playOff(dataAPI, stages, dataTitle) : '';
            break;
        case 5:
            stages && dataTitle ? final(dataAPI, stages, dataTitle) : '';
            break;
        default:
            break;
    }
}
function init() {
    const btnMenu = document.querySelector("[data-menuHam]");
    const btnMenuClose = document.querySelector("[data-closeMenu]");
    const modal = document.querySelector("[data-modal]");
    btnMenu?.addEventListener('click', handleMenu);
    btnMenuClose?.addEventListener('click', handleMenu);
    modal?.addEventListener('click', handleMenu);
    handleSlides();
    dadosApi();
    window.addEventListener("resize", mobileActive);
    window.addEventListener("scroll", handleChampion);
    window.addEventListener("wheel", handleChampion);
}
init();
//# sourceMappingURL=script.js.map