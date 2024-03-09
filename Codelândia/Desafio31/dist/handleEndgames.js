const caminho = "./image/flags/";
const flagsCountries = {
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
export function handleEndgames(data) {
    const games = document.querySelector('[data-games]');
    if (games) {
        data.map((game) => games.innerHTML +=
            `
      <div class="matches">
        <div class="infoMatch">
          <p>${game.venue}</p>
          <p>${game.datetime}</p>
          <p></p>
        </div>
        <div class="scoreBoard">
          <div class="country">
            <img src=${flagsCountries[game.home_team_country]} alt="Flag of Country" >
            <p>${game.home_team.name}</p>
          </div>
          <div>
            <p>${game.home_team.goals}</p>
            ${(game.home_team.penalties && game.away_team.penalties) ? `<p>(${game.home_team.penalties})</p>` : ''}
            <p>X</p>
            ${(game.home_team.penalties && game.away_team.penalties) ? `<p>(${game.away_team.penalties})</p>` : ''}
            <p>${game.away_team.goals}</p>
          </div>
          <div class="country">
            <img src=${flagsCountries[game.away_team_country]} alt="Flag of Country" >
            <p>${game.away_team.name}</p>
           </div>
        </div>
      </div>
    `);
    }
}
//# sourceMappingURL=handleEndgames.js.map