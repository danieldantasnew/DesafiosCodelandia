import fetchData from "./fetchData.js";
import { Groups } from "./handleGroups.js";
import { Teams, handleEndgames, normalizateMacthes } from "./handleEndgames.js";
import { handleGroups } from "./handleGroups.js";
import { handleSlides } from "./slidesGroups.js";



async function dadosApi() {
  const data = await fetchData<Groups>('./src/dataFirstStage/dataFirstStage.json');
  const dataMacthes = await fetchData<Teams[]>('https://worldcupjson.net/matches');
  if (!data || !dataMacthes) return;

  handleGroups(data.groups);
  handleSlides();
  handleEndgames(normalizateMacthes(dataMacthes));
}

dadosApi();