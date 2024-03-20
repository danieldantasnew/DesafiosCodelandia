let timesOut: number[] = [];
let stop: boolean  = false;

function activatedList() {
  stop = true;
  const thropies = document.querySelectorAll<Element>('.trophy');
  thropies?.forEach((item, index)=> {
    let timeoutIdsetTimeout = setTimeout(()=> item.classList.add('active') , 2000 * index);
    timesOut.push(timeoutIdsetTimeout);
  }); 
}

function activeContainer() {
  const content = document.querySelector<HTMLElement>('.contentWorld');
  content?.classList.add('active');
  activatedList();
}

function desactivatedItems() {
  stop = false;
  const thropies = document.querySelectorAll<Element>('.trophy');
  const content = document.querySelector<HTMLElement>('.contentWorld');
  timesOut.forEach((timeout)=> clearTimeout(timeout));
  timesOut.forEach(()=> timesOut.shift());
  content?.classList.remove('active');
  thropies?.forEach((item)=> item.classList.remove('active'));
}

export function handleChampion() {
  const containerMain = document.querySelector<HTMLElement>('[data-effect]');
  if(containerMain) {
    if(window.scrollY >= containerMain.scrollHeight && !stop) activeContainer();
    if(window.scrollY < containerMain.scrollHeight) desactivatedItems();
  }
}