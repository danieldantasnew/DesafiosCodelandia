function activeContainer() {
  const content = document.querySelector<HTMLElement>('.contentWorld');
  content?.classList.add('active');
  activatedList();
}

function activatedList() {
  const thropies = document.querySelectorAll<Element>('.trophy');
  if(thropies) {
    thropies.forEach((item, index)=> {
      setTimeout(()=> item.classList.add('active') , 2000 * index);
    })
  };
}


export function handleChampion() {
  setTimeout(()=> activeContainer(), 2000)
}