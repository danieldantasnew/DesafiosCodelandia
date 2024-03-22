import fetchData from "./fetchData.js";
import { Group, Groups } from "./handleGroups.js";
import { Teams, handleEndgames, newTeams, normalizateMacthes } from "./handleEndgames.js";
import { handleGroups } from "./handleGroups.js";
import { handleSlides } from "./slidesGroups.js";
import handleMenu  from "./handleMenu.js";
import isMobile from "./isMobile.js";
import { handleChampion } from "./handleChampion.js";
import { final, playOff, quarterFinal, roundOf16, semiFinal, valueControl } from "./slideStage.js";
import { handleWatch } from "./watch.js";
import { watchMatch } from "./watchMatch.js";

let dataAPI: newTeams[];
let groupsAPI: Group[];

function mobileActive() {
  const mobile = isMobile("590px");
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  
  if(!mobile && menu?.classList.contains('active')) {
    handleMenu();
  }
}

async function dadosApi() {
  const data = await fetchData<Groups>('./src/dataFirstStage/dataFirstStage.json');
  const dataMacthes = await fetchData<Teams[]>('./src/dataMatches/matches.json');
  if (!data || !dataMacthes) return;
  
  dataAPI = normalizateMacthes(dataMacthes);
  groupsAPI = data.groups;

  
  
  const watchMatchElement = document.querySelector<HTMLElement>("[data-watchMatch]");
  const lastThreeMatches = dataAPI.slice(-4);
  const games = document.querySelector<HTMLElement>('[data-games]');
  const gamesMacthes = document.querySelector<HTMLElement>('[data-macthes]');
  
  if(watchMatchElement) watchMatch(dataAPI, watchMatchElement); 
  games? handleEndgames(lastThreeMatches, games) : '';
  gamesMacthes? handleEndgames(dataAPI, gamesMacthes) : '';

  handleGroups(groupsAPI);
  handleWatch(normalizateMacthes(dataMacthes));
}

export function slideStages() {
  const stages = document.querySelector<HTMLElement>('[data-stage]');
  const dataTitle = document.querySelector<HTMLElement>('[data-titleStage]');

  switch (valueControl()) {
    case 0:
      stages && dataTitle ? handleGroups(groupsAPI, dataTitle, stages) : '';
      break;
    case 1:
      stages && dataTitle ? roundOf16(dataAPI, stages, dataTitle): '';
      break;
    case 2: 
    stages && dataTitle ? quarterFinal(dataAPI, stages, dataTitle): '';
      break;
    case 3: 
      stages && dataTitle ? semiFinal(dataAPI, stages, dataTitle): '';
      break;
    case 4: 
      stages && dataTitle ? playOff(dataAPI, stages, dataTitle): '';
      break;
    case 5: 
      stages && dataTitle ? final(dataAPI, stages, dataTitle): '';
      break;
    default:
      break;
  }
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
  window.addEventListener("resize", mobileActive);
  window.addEventListener("scroll", handleChampion);
  window.addEventListener("wheel", handleChampion);
}

init();