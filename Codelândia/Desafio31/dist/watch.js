import { flagsCountries, stages } from "./handleEndgames.js";
export function handleWatch(data) {
    const watchSection = document.querySelector('[data-watch]');
    if (watchSection) {
        watchSection.innerHTML +=
            data.map((matchWatch) => `    
      <div class="watchMatch">
        <div class="matches">
          <div class="infoMatch">
            <p class="stadium">${matchWatch.stadium}</p>
            <p>
              ${matchWatch.datetime.getDate() >= 0 && matchWatch.datetime.getDate() <= 9 ?
                `0${matchWatch.datetime.getDate()}` :
                `${matchWatch.datetime.getDate()}`}/${matchWatch.datetime.getMonth() + 1}/${matchWatch.datetime.getFullYear()}
            </p>
            <p>${matchWatch.datetime.getHours()}:${matchWatch.datetime.getMinutes() >= 0 && matchWatch.datetime.getMinutes() <= 9 ?
                `0${matchWatch.datetime.getMinutes()}` :
                `${matchWatch.datetime.getMinutes()}`}
            </p>
            <p class="stage">${stages[matchWatch.stage_name]}</p>
          </div>
          <div class="scoreBoard">
            <div class="country">
              <img src=${flagsCountries[matchWatch.home_team_country]} alt="Flag of Country" >
              <p>${matchWatch.home_team.name}</p>
            </div>
            <div class="infoScore">
              <p>${matchWatch.home_team.goals}</p>
              ${(matchWatch.home_team.penalties && matchWatch.away_team.penalties) ? `<p class="penalties">(${matchWatch.home_team.penalties})</p>` : ''}
              <p>X</p>
              ${(matchWatch.home_team.penalties && matchWatch.away_team.penalties) ? `<p class="penalties">(${matchWatch.away_team.penalties})</p>` : ''}
              <p>${matchWatch.away_team.goals}</p>
            </div>
            <div class="country">
              <p>${matchWatch.away_team.name}</p>
              <img src=${flagsCountries[matchWatch.away_team_country]} alt="Flag of Country" >
            </div>
          </div>
        </div>
        <div>
            <iframe width="600" height="600" src=${matchWatch.video} title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    `).join('');
    }
}
//# sourceMappingURL=watch.js.map