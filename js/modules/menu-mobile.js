import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClasse = 'active';
    // Definie o touchstart e click como argumento padrão de events caso o utilizador não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }
  
  openMenu() {
    this.menuButton.classList.add(this.activeClasse);
    this.menuList.classList.add(this.activeClasse);

    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClasse);
      this.menuList.classList.remove(this.activeClasse);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }

    return this;
  }
}
