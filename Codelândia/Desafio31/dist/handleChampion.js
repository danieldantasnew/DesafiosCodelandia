function activeContainer() {
    const content = document.querySelector('.contentWorld');
    content?.classList.add('active');
    activatedList();
}
function activatedList() {
    const thropies = document.querySelectorAll('.trophy');
    if (thropies) {
        thropies.forEach((item, index) => {
            setTimeout(() => item.classList.add('active'), 2000 * index);
        });
    }
    ;
}
export function handleChampion() {
    setTimeout(() => activeContainer(), 2000);
}
//# sourceMappingURL=handleChampion.js.map