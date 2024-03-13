export default function handleMenu(event?: Event) {
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const modal = document.querySelector<HTMLElement>('[data-modal]');

  if(menu && nav && modal) {
    if(menu.classList.contains('active') && modal.classList.contains('active')) {
      const header = document.querySelector<HTMLElement>('[data-header]');
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