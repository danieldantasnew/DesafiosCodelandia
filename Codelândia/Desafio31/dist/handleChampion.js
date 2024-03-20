let timesOut = [];
let stop = false;
function activatedList() {
    stop = true;
    const thropies = document.querySelectorAll('.trophy');
    thropies?.forEach((item, index) => {
        let timeoutIdsetTimeout = setTimeout(() => item.classList.add('active'), 2000 * index);
        timesOut.push(timeoutIdsetTimeout);
    });
}
function activeContainer() {
    const content = document.querySelector('.contentWorld');
    content?.classList.add('active');
    activatedList();
}
function desactivatedItems() {
    stop = false;
    const thropies = document.querySelectorAll('.trophy');
    const content = document.querySelector('.contentWorld');
    timesOut.forEach((timeout) => clearTimeout(timeout));
    timesOut.forEach(() => timesOut.shift());
    content?.classList.remove('active');
    thropies?.forEach((item) => item.classList.remove('active'));
}
export function handleChampion() {
    const containerMain = document.querySelector('[data-effect]');
    if (containerMain) {
        if (window.scrollY >= containerMain.scrollHeight && !stop)
            activeContainer();
        if (window.scrollY < containerMain.scrollHeight)
            desactivatedItems();
    }
}
//# sourceMappingURL=handleChampion.js.map