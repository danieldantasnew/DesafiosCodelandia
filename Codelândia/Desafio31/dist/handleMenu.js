export default function handleMenu(event) {
    const menu = document.querySelector('[data-menu]');
    const nav = document.querySelector('[data-nav]');
    const modal = document.querySelector('[data-modal]');
    if (menu && nav && modal) {
        if (menu.classList.contains('active') && modal.classList.contains('active')) {
            const header = document.querySelector('[data-header]');
            header?.appendChild(nav);
            modal.classList.remove('active');
            menu.classList.remove('active');
        }
        else {
            menu.appendChild(nav);
            modal.classList.add('active');
            menu.classList.add('active');
        }
    }
}
//# sourceMappingURL=handleMenu.js.map