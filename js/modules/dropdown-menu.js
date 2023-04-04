import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'active';

    // Definie o touchstart e click como argumento padrão de events caso o utilizador não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else {
      this.events = events;
    }
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Activa o dropdownmenu e adiciona a função que observa o clique dentro dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }
  
  init() {
    if (this.dropdownMenus) {
      this.addDropdownMenusEvent();
    }

    return this;
  }
}
