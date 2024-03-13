let index = 0;

function handleClick(event: Event) {
  const groups = document.querySelector<HTMLElement>('.groups');
  const group = document.querySelectorAll<HTMLElement>('.group');
  const mobile = window.matchMedia("(max-width: 800px)").matches;

  if (event.currentTarget instanceof HTMLElement && groups && group) {
    if(event.currentTarget.getAttribute('data-control') === "prev") {
      index - 1 < 0 ? index = 0 : index -= 1;
    }
    else {
      mobile ? index + 1 >= group.length ? index = group.length - 1 : index+=1 : index + 5 >= group.length ? index = group.length - 5 : index+=1;
    }


    if(mobile) {
      const {width} = group[0].getBoundingClientRect();
      group.forEach((item)=> {
        item.style.transform = `translateX(calc(-${width*index}px - ${index > 0 ? index * 16 : 0}px))`;
      });
    }

    else {
      const {width} = groups.getBoundingClientRect();
      group.forEach((item)=> {
        item.style.transform = `translateX(calc(-${width*index}px - ${index > 1 ? 20 : 0}px))`;
      });
    }
  }
}


export function handleSlides() {
  const controlLeft = document.querySelectorAll('[data-control]');
  window.addEventListener('resize', (event)=> {
    index = 0;
    handleClick(event);
  });

  if(controlLeft instanceof NodeList) {
    controlLeft.forEach((item) => item.addEventListener('click', handleClick));
  }
}