const caminho: string = "./image/flags/";
const flagsCountries: Record<string, string> = {
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
}

type Teams = {
  country: string;
  name: string;
  group_letter: string;
  group_points: 0;
  wins: number;
  draws: number;
  losses: number;
  games_played: number;
  goals_for: number;
  goals_against: number;
  goal_differential: number;
}

interface Group {
  letter: string;
  teams: Teams[];
}

export interface Groups {
  groups: Group[];
}

function teamsByOrder(data: Teams[]) {
  return data
  .sort((teamA, teamB)=> teamB.goals_against - teamA.goals_against)
  .sort((teamA, teamB)=> teamB.goals_for - teamA.goals_for)
  .sort((teamA, teamB)=> teamB.draws - teamA.draws)
  .sort((teamA, teamB)=> teamA.losses - teamB.losses)
  .sort((teamA, teamB)=> teamB.goal_differential - teamA.goal_differential)
  .sort((teamA, teamB)=> teamB.wins - teamA.wins)
  .sort((teamA, teamB)=> teamB.group_points - teamA.group_points)
}

export function handleGroups(arr: Group[]): void {
  const groups = document.querySelector('.groups');
  if(groups instanceof HTMLElement && arr) {
    arr.forEach((data)=> {
      let counter = 0;
      groups.innerHTML += 
      `
        <div class="group">
          <h2>Grupo ${data.letter}</h2>
          <table>
            <thead>
              <th style="text-align: left">Equipe</th>
              <th>Pts</th>
              <th>PJ</th>
              <th>VIT</th>
              <th>E</th>
              <th>DER</th>
              <th>GM</th>
              <th>GC</th>
              <th>SG</th>
            </thead>
            <tbody>
              ${teamsByOrder(data.teams).map((team)=> 
                {
                  counter +=1;
                  return `
                    <tr>
                      <td class="flag-name">
                        <span class="position">${counter}</span>
                        <img src=${flagsCountries[team.country]} alt="Flag of ${team.name}">
                        ${team.name}
                      </td>
                      <td>
                        ${team.group_points}
                      </td>
                      <td>
                        ${team.games_played}
                      </td>
                      <td>
                        ${team.wins}
                      </td>
                      <td>
                        ${team.draws}
                      </td>
                      <td>
                        ${team.losses}
                      </td>
                      <td>
                        ${team.goals_for}
                      </td>
                      <td>
                        ${team.goals_against}
                      </td>
                      <td>
                        ${team.goal_differential}
                      </td>
                    </tr>
                `
                }
                ).join('')}
            </tbody>
          </table>
        </div>
      `
    })
  }
}