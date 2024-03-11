import fetchData from "./fetchData.js";
import { handleEndgames, normalizateMacthes } from "./handleEndgames.js";
import { handleGroups } from "./handleGroups.js";
import { handleSlides } from "./slidesGroups.js";
async function dadosApi() {
    const data = await fetchData('./src/dataFirstStage/dataFirstStage.json');
    const dataMacthes = await fetchData('https://worldcupjson.net/matches');
    if (!data || !dataMacthes)
        return;
    handleGroups(data.groups);
    handleSlides();
    handleEndgames(normalizateMacthes(dataMacthes));
}
dadosApi();
//# sourceMappingURL=script.js.map