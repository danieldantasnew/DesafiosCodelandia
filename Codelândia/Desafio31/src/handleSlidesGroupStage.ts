import { loopForGames, newTeams } from "./handleEndgames.js";
import { observerControllers } from "./slideStage.js";

let dataRoundInMatch: newTeams[];
let control: number = 0;

export function roundInMacthes(data: newTeams[]): void {
  dataRoundInMatch = data.filter((match) => match.round !== "");
}

function createRounds(element: HTMLElement): void {
  element.innerHTML += 
  `
    <div class="controllers">
      <span data-controllers-round="left">Prev</span>
      <h1 data-title-round></h1>
      <span data-controllers-round="right">Next</span>
    </div>
    <div data-round class="rounds"></div>
  `;

  const controllers = document.querySelectorAll('[data-controllers-round]');
  if(controllers instanceof NodeList) controllers.forEach((item)=> item.addEventListener("click", (event)=> {
    controlSlideRound(event, controllers);
  }));
  observerControllers(controllers, control, 'data-controllers-round', 2);
  handleSlideRounds();
}

export function insertRounds() {
  const contentGroups = document.querySelector<HTMLElement>('.contentGroups');
  const groups = document.querySelector<HTMLElement>('[data-stage]')
  const classGroups = document.querySelector<HTMLElement>('[data-stage]')?.classList.contains('stages');
  const rounds = document.querySelector('.contentRounds');

  if(contentGroups && groups && !classGroups && !rounds) {
    const section = document.createElement('section');
    section.classList.add('contentRounds');
    contentGroups.appendChild(section);
    createRounds(section);
  }
  else {
    control = 0;
    rounds ? contentGroups?.removeChild(rounds) : '';
  }
}

function roundOne() {
  const title = document.querySelector<HTMLElement>('[data-title-round]');
  const contentRound = document.querySelector<HTMLElement>('[data-round]');
  if(title && contentRound && dataRoundInMatch) {
    title.innerText = "1° RODADA";
    const roundMatches = dataRoundInMatch.filter((match)=> match.round === "1");
    loopForGames(roundMatches, contentRound);
  }
}

function roundTwo() {
  const title = document.querySelector<HTMLElement>('[data-title-round]');
  const contentRound = document.querySelector<HTMLElement>('[data-round]');
  if(title && contentRound && dataRoundInMatch) {
    title.innerText = "2° RODADA";
    const roundMatches = dataRoundInMatch.filter((match)=> match.round === "2");
    loopForGames(roundMatches, contentRound);
  }
}

function roundThree() {
  const title = document.querySelector<HTMLElement>('[data-title-round]');
  const contentRound = document.querySelector<HTMLElement>('[data-round]');
  if(title && contentRound && dataRoundInMatch) {
    title.innerText = "3° RODADA";
    const roundMatches = dataRoundInMatch.filter((match)=> match.round === "3");
    loopForGames(roundMatches, contentRound);
  }
}

function controlSlideRound(event: Event, controllers: NodeList) {
  if(event.currentTarget instanceof HTMLElement) {
    if(event.currentTarget.getAttribute('data-controllers-round') === "left") {
      control - 1 < 0 ? control : control -= 1;
    }
    else if(event.currentTarget.getAttribute('data-controllers-round') === "right") {
      control + 1 > 2 ? control : control += 1;
    }
    else {
      control = 0;
    }
  }
  observerControllers(controllers, control, 'data-controllers-round', 2);
  handleSlideRounds();
}

function handleSlideRounds(): void {
  switch (control) {
    case 0:
      roundOne();
      break;
    case 1:
      roundTwo()
    break;
    case 2:
      roundThree();
      break;
    default:
      break;
  }
}
