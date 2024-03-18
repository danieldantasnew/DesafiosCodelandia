import fetchData from "./fetchData.js";
import { Groups } from "./handleGroups.js";
import { Teams, handleEndgames, normalizateMacthes } from "./handleEndgames.js";
import { handleGroups } from "./handleGroups.js";
import { handleSlides } from "./slidesGroups.js";
import handleMenu  from "./handleMenu.js";
import isMobile from "./isMobile.js";
import { handleChampion } from "./handleChampion.js";

function mobileActive() {
  const mobile = isMobile("590px");
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  
  if(!mobile && menu?.classList.contains('active')) {
    handleMenu();
  }
}

async function dadosApi() {
  const data = await fetchData<Groups>('./src/dataFirstStage/dataFirstStage.json');
  const dataMacthes = await fetchData<Teams[]>('https://worldcupjson.net/matches');
  if (!data || !dataMacthes) return;

  handleGroups(data.groups);
  
  const lastThreeMatches = normalizateMacthes(dataMacthes).slice(-3);
  const games = document.querySelector<HTMLElement>('[data-games]');
  const gamesMacthes = document.querySelector<HTMLElement>('[data-macthes]');
  games? handleEndgames(lastThreeMatches, games) : '';
  gamesMacthes? handleEndgames(normalizateMacthes(dataMacthes), gamesMacthes) : '';
}

function init() {
  const btnMenu = document.querySelector<HTMLElement>("[data-menuHam]");
  const btnMenuClose = document.querySelector<HTMLElement>("[data-closeMenu]");
  const modal = document.querySelector<HTMLElement>("[data-modal]");
  btnMenu?.addEventListener('click', handleMenu);
  btnMenuClose?.addEventListener('click', handleMenu);
  modal?.addEventListener('click', handleMenu);

  handleSlides();
  dadosApi();
  handleChampion();
  window.addEventListener("resize", mobileActive);
}

init();