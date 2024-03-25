import { flagsCountries, newTeams, stages } from "./handleEndgames.js";

export function watchMatch(dataAPI: newTeams[], sectionWatchMatch: HTMLElement) {
  const url = new URLSearchParams(window.location.search);
  const params = Number(url.get('id'));
  let id: number | null = params;
  if(dataAPI && dataAPI[id]) {
    sectionWatchMatch.innerHTML = 
    `
      <div class="watchMatch individualPage">
        <div class="matches desactivate">
          <div class="infoMatch">
            <p class="stadium">${dataAPI[id].stadium}</p>
            <p>
              ${
                dataAPI[id].datetime.getDate() >= 0 && dataAPI[id].datetime.getDate() <= 9 ?
                `0${dataAPI[id].datetime.getDate()}` :
                `${dataAPI[id].datetime.getDate()}`
              }/${dataAPI[id].datetime.getMonth() + 1}/${dataAPI[id].datetime.getFullYear()}
            </p>
            <p>${dataAPI[id].datetime.getHours()}:${
              dataAPI[id].datetime.getMinutes() >= 0 && dataAPI[id].datetime.getMinutes() <= 9 ?
              `0${dataAPI[id].datetime.getMinutes()}`:
              `${dataAPI[id].datetime.getMinutes()}`
            }
            </p>
            <p class="stage">${stages[dataAPI[id].stage_name]}</p>
          </div>
          <div class="scoreBoard">
            <div class="country">
              <img src=${flagsCountries[dataAPI[id].home_team_country]} alt="Flag of Country" >
              <p>${dataAPI[id].home_team.name}</p>
            </div>
            <div class="infoScore">
              <p>${dataAPI[id].home_team.goals}</p>
              ${(dataAPI[id].home_team.penalties && dataAPI[id].away_team.penalties)? `<p class="penalties">(${dataAPI[id].home_team.penalties})</p>` : ''}
              <p>X</p>
              ${(dataAPI[id].home_team.penalties && dataAPI[id].away_team.penalties)? `<p class="penalties">(${dataAPI[id].away_team.penalties})</p>` : ''}
              <p>${dataAPI[id].away_team.goals}</p>
            </div>
            <div class="country">
              <p>${dataAPI[id].away_team.name}</p>
              <img src=${flagsCountries[dataAPI[id].away_team_country]} alt="Flag of Country" >
            </div>
          </div>
        </div>
        <div>
            <iframe width="600" height="600" src=${dataAPI[id].video} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <a style="display: inline-block; margin: 0 auto" class="btn" href="./watch.html">ASSISTIR JOGOS DA COPA</a>
    `
  }
  else {
    sectionWatchMatch.innerHTML = 
    `
      <p style="text-align: center; color: red; font-size: 3rem;">Partida não encontrada. Por favor, verifique se o link da página está correto.</p>
    `
  }
}