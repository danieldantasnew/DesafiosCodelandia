import fetchData from "./fetchData.js";
import { Group, Groups } from "./handleGroups.js";
import { Teams, handleEndgames, newTeams, normalizateMacthes } from "./handleEndgames.js";
import { handleGroups } from "./handleGroups.js";
import { handleSlides } from "./slidesGroups.js";
import handleMenu  from "./handleMenu.js";
import isMobile from "./isMobile.js";
import { handleChampion } from "./handleChampion.js";
import { handleWatch } from "./watch.js";
import { watchMatch } from "./watchMatch.js";
import { insertRounds, roundInMacthes } from "./handleSlidesGroupStage.js";
import { dataAPIGroups, dataAPIMatches } from "./slideStage.js";

function mobileActive() {
  const mobile = isMobile("590px");
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  
  if(!mobile && menu?.classList.contains('active')) {
    handleMenu();
  }
}

async function fetchDataApi() {
  const data = await fetchData<Groups>('./src/dataFirstStage/dataFirstStage.json');
  const dataMacthes = await fetchData<Teams[]>('./src/dataMatches/matches.json');
  if (!data || !dataMacthes) return;
  
  const dataAPI: newTeams[] = normalizateMacthes(dataMacthes);
  const groupsAPI: Group[] = data.groups;

  dataAPIMatches(dataAPI);
  dataAPIGroups(groupsAPI);
  roundInMacthes(dataAPI);
  insertRounds();
  
  const watchMatchElement = document.querySelector<HTMLElement>("[data-watchMatch]");
  const lastThreeMatches = dataAPI.slice(-4);
  const games = document.querySelector<HTMLElement>('[data-games]');
  const gamesMacthes = document.querySelector<HTMLElement>('[data-macthes]');
  
  if(watchMatchElement) watchMatch(dataAPI, watchMatchElement); 
  games? handleEndgames(lastThreeMatches, games) : '';
  gamesMacthes? handleEndgames(dataAPI, gamesMacthes) : '';

  handleGroups(groupsAPI);
  handleWatch(dataAPI);
}

function init() {
  const btnMenu = document.querySelector<HTMLElement>("[data-menuHam]");
  const btnMenuClose = document.querySelector<HTMLElement>("[data-closeMenu]");
  const modal = document.querySelector<HTMLElement>("[data-modal]");
  btnMenu?.addEventListener('click', handleMenu);
  btnMenuClose?.addEventListener('click', handleMenu);
  modal?.addEventListener('click', handleMenu);

  handleSlides();
  fetchDataApi();
  window.addEventListener("resize", mobileActive);
  window.addEventListener("scroll", handleChampion);
  window.addEventListener("wheel", handleChampion);
}

init();