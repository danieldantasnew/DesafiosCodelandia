import { flagsCountries, newTeams } from "./handleEndgames.js";
import { slideStages } from "./script.js";

const controllers = document.querySelectorAll('[data-controllers]');
controllers.forEach((item)=> item.addEventListener("click", controlSlide));
let control = 0;

export function roundOf16(data: newTeams[], sectionStages: HTMLElement, dataTitle: HTMLElement) {
  const dataRoundOf16 = data.filter((match)=> match.stage_name === 'Round of 16');
  if(dataTitle) dataTitle.innerText = "OITAVAS DE FINAL";
  if(sectionStages) {
    sectionStages.classList.add('stages')
    sectionStages.innerHTML = ''; 
    dataRoundOf16.forEach((game)=> {
      sectionStages.innerHTML +=
      `
      <div class="matches">
        <div class="infoMatch">
          <p class="stadium">${game.stadium}</p>
          <p>
            ${
              game.datetime.getDate() >= 0 && game.datetime.getDate() <= 9 ?
              `0${game.datetime.getDate()}` :
              `${game.datetime.getDate()}`
            }/${game.datetime.getMonth() + 1}/${game.datetime.getFullYear()}
          </p>
          <p>${game.datetime.getHours()}:${
            game.datetime.getMinutes() >= 0 && game.datetime.getMinutes() <= 9 ?
            `0${game.datetime.getMinutes()}`:
            `${game.datetime.getMinutes()}` 
          }
          </p>
        </div>
        <div class="scoreBoard">
          <div class="country">
            <img src=${flagsCountries[game.home_team_country]} alt="Flag of Country" >
            <p>${game.home_team.name}</p>
          </div>
          <div class="infoScore">
            <p>${game.home_team.goals}</p>
            ${(game.home_team.penalties && game.away_team.penalties)? `<p class="penalties">(${game.home_team.penalties})</p>` : ''}
            <p>X</p>
            ${(game.home_team.penalties && game.away_team.penalties)? `<p class="penalties">(${game.away_team.penalties})</p>` : ''}
            <p>${game.away_team.goals}</p>
          </div>
          <div class="country">
            <p>${game.away_team.name}</p>
            <img src=${flagsCountries[game.away_team_country]} alt="Flag of Country" >
          </div>
        </div>
      </div>
  `});
  }
}

export function quarterFinal(data: newTeams[], sectionStages: HTMLElement, dataTitle: HTMLElement) {
  const dataRoundOf16 = data.filter((match)=> match.stage_name === 'Quarter-final');
  if(dataTitle) dataTitle.innerText = "QUARTAS DE FINAL";
  if(sectionStages) { 
    sectionStages.innerHTML = ''; 
    dataRoundOf16.forEach((game)=> {
      sectionStages.innerHTML +=
      `
      <div class="matches">
        <div class="infoMatch">
          <p class="stadium">${game.stadium}</p>
          <p>
            ${
              game.datetime.getDate() >= 0 && game.datetime.getDate() <= 9 ?
              `0${game.datetime.getDate()}` :
              `${game.datetime.getDate()}`
            }/${game.datetime.getMonth() + 1}/${game.datetime.getFullYear()}
          </p>
          <p>${game.datetime.getHours()}:${
            game.datetime.getMinutes() >= 0 && game.datetime.getMinutes() <= 9 ?
            `0${game.datetime.getMinutes()}`:
            `${game.datetime.getMinutes()}` 
          }
          </p>
        </div>
        <div class="scoreBoard">
          <div class="country">
            <img src=${flagsCountries[game.home_team_country]} alt="Flag of Country" >
            <p>${game.home_team.name}</p>
          </div>
          <div class="infoScore">
            <p>${game.home_team.goals}</p>
            ${(game.home_team.penalties && game.away_team.penalties)? `<p class="penalties">(${game.home_team.penalties})</p>` : ''}
            <p>X</p>
            ${(game.home_team.penalties && game.away_team.penalties)? `<p class="penalties">(${game.away_team.penalties})</p>` : ''}
            <p>${game.away_team.goals}</p>
          </div>
          <div class="country">
            <p>${game.away_team.name}</p>
            <img src=${flagsCountries[game.away_team_country]} alt="Flag of Country" >
          </div>
        </div>
      </div>
  `});
  }
}

export function semiFinal(data: newTeams[], sectionStages: HTMLElement, dataTitle: HTMLElement) {
  const dataRoundOf16 = data.filter((match)=> match.stage_name === 'Semi-final');
  if(dataTitle) dataTitle.innerText = "SEMIFINAL";
  if(sectionStages) { 
    sectionStages.innerHTML = ''; 
    dataRoundOf16.forEach((game)=> {
      sectionStages.innerHTML +=
      `
      <div class="matches">
        <div class="infoMatch">
          <p class="stadium">${game.stadium}</p>
          <p>
            ${
              game.datetime.getDate() >= 0 && game.datetime.getDate() <= 9 ?
              `0${game.datetime.getDate()}` :
              `${game.datetime.getDate()}`
            }/${game.datetime.getMonth() + 1}/${game.datetime.getFullYear()}
          </p>
          <p>${game.datetime.getHours()}:${
            game.datetime.getMinutes() >= 0 && game.datetime.getMinutes() <= 9 ?
            `0${game.datetime.getMinutes()}`:
            `${game.datetime.getMinutes()}` 
          }
          </p>
        </div>
        <div class="scoreBoard">
          <div class="country">
            <img src=${flagsCountries[game.home_team_country]} alt="Flag of Country" >
            <p>${game.home_team.name}</p>
          </div>
          <div class="infoScore">
            <p>${game.home_team.goals}</p>
            ${(game.home_team.penalties && game.away_team.penalties)? `<p class="penalties">(${game.home_team.penalties})</p>` : ''}
            <p>X</p>
            ${(game.home_team.penalties && game.away_team.penalties)? `<p class="penalties">(${game.away_team.penalties})</p>` : ''}
            <p>${game.away_team.goals}</p>
          </div>
          <div class="country">
            <p>${game.away_team.name}</p>
            <img src=${flagsCountries[game.away_team_country]} alt="Flag of Country" >
          </div>
        </div>
      </div>
  `});
  }
}

export function playOff(data: newTeams[], sectionStages: HTMLElement, dataTitle: HTMLElement) {
  const dataRoundOf16 = data.filter((match)=> match.stage_name === 'Play-off for third place');
  if(dataTitle) dataTitle.innerText = "DISPUTA DE 3° LUGAR";
  if(sectionStages) { 
    sectionStages.innerHTML = ''; 
    dataRoundOf16.forEach((game)=> {
      sectionStages.innerHTML +=
      `
      <div class="matches">
        <div class="infoMatch">
          <p class="stadium">${game.stadium}</p>
          <p>
            ${
              game.datetime.getDate() >= 0 && game.datetime.getDate() <= 9 ?
              `0${game.datetime.getDate()}` :
              `${game.datetime.getDate()}`
            }/${game.datetime.getMonth() + 1}/${game.datetime.getFullYear()}
          </p>
          <p>${game.datetime.getHours()}:${
            game.datetime.getMinutes() >= 0 && game.datetime.getMinutes() <= 9 ?
            `0${game.datetime.getMinutes()}`:
            `${game.datetime.getMinutes()}` 
          }
          </p>
        </div>
        <div class="scoreBoard">
          <div class="country">
            <img src=${flagsCountries[game.home_team_country]} alt="Flag of Country" >
            <p>${game.home_team.name}</p>
          </div>
          <div class="infoScore">
            <p>${game.home_team.goals}</p>
            ${(game.home_team.penalties && game.away_team.penalties)? `<p class="penalties">(${game.home_team.penalties})</p>` : ''}
            <p>X</p>
            ${(game.home_team.penalties && game.away_team.penalties)? `<p class="penalties">(${game.away_team.penalties})</p>` : ''}
            <p>${game.away_team.goals}</p>
          </div>
          <div class="country">
            <p>${game.away_team.name}</p>
            <img src=${flagsCountries[game.away_team_country]} alt="Flag of Country" >
          </div>
        </div>
      </div>
  `});
  }
}

export function final(data: newTeams[], sectionStages: HTMLElement, dataTitle: HTMLElement) {
  const dataRoundOf16 = data.filter((match)=> match.stage_name === 'Final');
  if(dataTitle) dataTitle.innerText = "FINAL";
  if(sectionStages) { 
    sectionStages.innerHTML = ''; 
    dataRoundOf16.forEach((game)=> {
      sectionStages.innerHTML +=
      `
      <div class="matches">
        <div class="infoMatch">
          <p class="stadium">${game.stadium}</p>
          <p>
            ${
              game.datetime.getDate() >= 0 && game.datetime.getDate() <= 9 ?
              `0${game.datetime.getDate()}` :
              `${game.datetime.getDate()}`
            }/${game.datetime.getMonth() + 1}/${game.datetime.getFullYear()}
          </p>
          <p>${game.datetime.getHours()}:${
            game.datetime.getMinutes() >= 0 && game.datetime.getMinutes() <= 9 ?
            `0${game.datetime.getMinutes()}`:
            `${game.datetime.getMinutes()}` 
          }
          </p>
        </div>
        <div class="scoreBoard">
          <div class="country">
            <img src=${flagsCountries[game.home_team_country]} alt="Flag of Country" >
            <p>${game.home_team.name}</p>
          </div>
          <div class="infoScore">
            <p>${game.home_team.goals}</p>
            ${(game.home_team.penalties && game.away_team.penalties)? `<p class="penalties">(${game.home_team.penalties})</p>` : ''}
            <p>X</p>
            ${(game.home_team.penalties && game.away_team.penalties)? `<p class="penalties">(${game.away_team.penalties})</p>` : ''}
            <p>${game.away_team.goals}</p>
          </div>
          <div class="country">
            <p>${game.away_team.name}</p>
            <img src=${flagsCountries[game.away_team_country]} alt="Flag of Country" >
          </div>
        </div>
      </div>
  `});
  }
}

export function controlSlide(event: Event) {
  if(event.currentTarget instanceof HTMLElement) {
    if(event.currentTarget.getAttribute('data-controllers') === "left") {
      control - 1 < 0 ? control : control -= 1;
    }
    else if(event.currentTarget.getAttribute('data-controllers') === "right") {
      control + 1 > 5 ? control : control += 1;
    }
    else {
      control = 0;
    }
  }
  slideStages();
  observerControllers();
}

export function valueControl() {
  return control;
}

export function observerControllers() {
  controllers.forEach((item)=> {
    if(item.getAttribute('data-controllers') === "left" && control === 0) {
      item.innerHTML = `<img src="./image/controls/arrow-right-white.svg" alt="left control">`
    }
    else if(item.getAttribute('data-controllers') === "right" && control === 5) {
      item.innerHTML = `<img src="./image/controls/arrow-right-white.svg" alt="right control">`
    }
    else {
      item.innerHTML = `<img src="./image/controls/arrow-right.svg" alt="${item.getAttribute('data-controllers')} control">`
    } 
  });
}

observerControllers();