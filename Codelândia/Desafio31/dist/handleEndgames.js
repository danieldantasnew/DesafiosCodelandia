import { stringToDate } from "./stringToDate.js";
const caminho = "./image/flags/";
export const flagsCountries = {
    "QAT": `${caminho}Qatar.svg`,
    "NED": `.${caminho}Netherlands.svg`,
    "SEN": `${caminho}Senegal.svg`,
    "ECU": `${caminho}Ecuador.svg`,
    "ENG": `${caminho}England.svg`,
    "WAL": `${caminho}Wales.svg`,
    "IRN": `${caminho}Iran.svg`,
    "USA": `${caminho}USA.svg`,
    "MEX": `${caminho}Mexico.svg`,
    "POL": `${caminho}Poland.svg`,
    "ARG": `${caminho}Argentina.svg`,
    "KSA": `${caminho}SaudiArabia.svg`,
    "TUN": `${caminho}Tunisia.png`,
    "AUS": `${caminho}Australia.png`,
    "DEN": `${caminho}Denmark.png`,
    "FRA": `${caminho}France.png`,
    "ESP": `${caminho}Spain.png`,
    "JPN": `${caminho}Japan.svg`,
    "CRC": `${caminho}Costa_Rica.png`,
    "GER": `${caminho}Germany.png`,
    "BEL": `${caminho}Belgium.png`,
    "CRO": `${caminho}Croatia.png`,
    "CAN": `${caminho}Canada.png`,
    "MAR": `${caminho}Morocco.png`,
    "BRA": `${caminho}Brazil.svg`,
    "SRB": `${caminho}Serbia.png`,
    "CMR": `${caminho}Cameroon.png`,
    "SUI": `${caminho}Switzerland.png`,
    "GHA": `${caminho}Ghana.png`,
    "URU": `${caminho}Uruguay.png`,
    "POR": `${caminho}Portugal.svg`,
    "KOR": `${caminho}South_Korea.png`,
};
export const stages = {
    "First stage": "Fase de grupos",
    "Round of 16": "Oitavas de final",
    "Quarter-final": "Quartas de final",
    "Semi-final": "Semifinal",
    "Play-off for third place": "Disputa de 3° lugar",
    "Final": "Final"
};
export function normalizateMacthes(data) {
    return data.map((item) => {
        return {
            id: item.id,
            stadium: item.venue,
            home_team_country: item.home_team_country,
            away_team_country: item.away_team_country,
            datetime: stringToDate(item.datetime),
            winner: item.winner,
            winner_code: item.winner_code,
            home_team: item.home_team,
            away_team: item.away_team,
            stage_name: item.stage_name,
            video: item.video,
        };
    });
}
function handleClickMatch(event) {
    if (event.currentTarget instanceof HTMLElement) {
        window.location.href = `/watchMatch.html?id=${event.currentTarget.id}`;
    }
}
export function loopForMatches(arr) {
    if (arr instanceof NodeList)
        arr.forEach((item) => item.addEventListener('click', handleClickMatch));
}
export function loopForGames(arr, sectionFather) {
    return {
        clearHTML: sectionFather.innerHTML = '',
        loop: arr.forEach((game) => {
            sectionFather.innerHTML +=
                `
      <div class="matches" id=${game.id - 1}>
        <div class="infoMatch">
          <p class="stadium">${game.stadium}</p>
          <p>
            ${game.datetime.getDate() >= 0 && game.datetime.getDate() <= 9 ?
                    `0${game.datetime.getDate()}` :
                    `${game.datetime.getDate()}`}/${game.datetime.getMonth() + 1}/${game.datetime.getFullYear()}
          </p>
          <p>${game.datetime.getHours()}:${game.datetime.getMinutes() >= 0 && game.datetime.getMinutes() <= 9 ?
                    `0${game.datetime.getMinutes()}` :
                    `${game.datetime.getMinutes()}`}
          </p>
        </div>
        <div class="scoreBoard">
          <div class="country">
            <img src=${flagsCountries[game.home_team_country]} alt="Flag of Country" >
            <p>${game.home_team.name}</p>
          </div>
          <div class="infoScore">
            <p>${game.home_team.goals}</p>
            ${(game.home_team.penalties && game.away_team.penalties) ? `<p class="penalties">(${game.home_team.penalties})</p>` : ''}
            <p>X</p>
            ${(game.home_team.penalties && game.away_team.penalties) ? `<p class="penalties">(${game.away_team.penalties})</p>` : ''}
            <p>${game.away_team.goals}</p>
          </div>
          <div class="country">
            <p>${game.away_team.name}</p>
            <img src=${flagsCountries[game.away_team_country]} alt="Flag of Country" >
          </div>
        </div>
      </div>
  `;
        }),
        addEvent: loopForMatches(sectionFather.childNodes),
    };
}
export function handleEndgames(data, games) {
    if (games) {
        loopForGames(data, games);
    }
}
//# sourceMappingURL=handleEndgames.js.map