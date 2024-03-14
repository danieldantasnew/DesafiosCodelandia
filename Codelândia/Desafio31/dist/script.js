import fetchData from "./fetchData.js";
import { handleEndgames, normalizateMacthes } from "./handleEndgames.js";
import { handleGroups } from "./handleGroups.js";
import { handleSlides } from "./slidesGroups.js";
import handleMenu from "./handleMenu.js";
import isMobile from "./isMobile.js";
function mobileActive() {
    const mobile = isMobile("590px");
    const menu = document.querySelector('[data-menu]');
    if (!mobile && menu?.classList.contains('active')) {
        handleMenu();
    }
}
async function dadosApi() {
    const data = await fetchData('./src/dataFirstStage/dataFirstStage.json');
    const dataMacthes = await fetchData('https://worldcupjson.net/matches');
    if (!data || !dataMacthes)
        return;
    handleGroups(data.groups);
    const lastThreeMatches = normalizateMacthes(dataMacthes).slice(-3);
    const games = document.querySelector('[data-games]');
    const gamesMacthes = document.querySelector('[data-macthes]');
    games ? handleEndgames(lastThreeMatches, games) : '';
    gamesMacthes ? handleEndgames(normalizateMacthes(dataMacthes), gamesMacthes) : '';
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
}
init();
//# sourceMappingURL=script.js.map