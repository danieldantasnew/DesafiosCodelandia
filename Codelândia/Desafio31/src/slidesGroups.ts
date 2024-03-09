function handleClick(event: Event) {
  const groups = document.querySelector<HTMLElement>('.groups');
  const group = document.querySelectorAll<HTMLElement>('.group');
  if (event.currentTarget instanceof HTMLElement && groups && group) {
    if(event.currentTarget.getAttribute('data-control') === "prev") {
      group.forEach((item)=> {
        const {width} = item.getBoundingClientRect();
        item.style.transform = `translateX(calc(+${width}px + 2rem))`
      });
    }
    else {
      group.forEach((item)=> {
        const {width} = item.getBoundingClientRect();
        item.style.transform = `translateX(calc(-${width}px - 2rem))`
      });
    }
    
  }
}


export function handleSlides() {
  const controlLeft = document.querySelectorAll('[data-control]');
  
  if(controlLeft instanceof NodeList) {
    controlLeft.forEach((item) => item.addEventListener('click', handleClick));
  }
}