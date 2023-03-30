export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // Activa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove("ativo", this.animeClass);
    });
    const section = this.tabContent[index];
    section.classList.add("ativo", section.dataset.anime);
  }

  // Adicionar os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Activar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }

    return this;
  }
}
