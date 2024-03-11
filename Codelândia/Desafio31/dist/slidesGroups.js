function handleClick(event) {
    const groups = document.querySelector('.groups');
    const group = document.querySelectorAll('.group');
    if (event.currentTarget instanceof HTMLElement && groups && group) {
        if (event.currentTarget.getAttribute('data-control') === "prev") {
            group.forEach((item) => {
                const { width } = item.getBoundingClientRect();
                item.style.transform = `translateX(calc(+${width}px + 1rem))`;
            });
        }
        else {
            group.forEach((item) => {
                const { width } = item.getBoundingClientRect();
                item.style.transform = `translateX(calc(-${width}px - 1rem))`;
            });
        }
    }
}
export function handleSlides() {
    const controlLeft = document.querySelectorAll('[data-control]');
    if (controlLeft instanceof NodeList) {
        controlLeft.forEach((item) => item.addEventListener('click', handleClick));
    }
}
//# sourceMappingURL=slidesGroups.js.map