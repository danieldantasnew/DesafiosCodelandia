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
}

interface Group {
  letter: string;
  teams: Teams[];
}

export interface Groups {
  groups: Group[];
}

export function handleGroups(arr: Group[]): void {
  const groups = document.querySelector('.groups');
  if(groups instanceof HTMLElement && arr) {
    arr.forEach((data)=> {
      groups.innerHTML += 
      `
      <div class="group">
        <h2>Grupo ${data.letter}</h2>
        <ul>
          ${data.teams.map((team)=> 
            `
            <li>
              <img src=${flagsCountries[team.country]} alt="Qatar">
              <p>${team.name}</p>
            </li>
          `
          ).join('')}
        </ul>
      </div>
      `
    })
  }
}