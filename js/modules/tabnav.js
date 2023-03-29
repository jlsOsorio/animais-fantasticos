export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tabmenu="tabmenu"] li');
  const tabContent = document.querySelectorAll(
    '[data-tabcontent="tabcontent"] section'
  );

  function activeTab(index) {
    tabContent.forEach((section) => {
      const animeClass = section.dataset.anime;
      section.classList.remove("ativo", animeClass);
    });
    const section = tabContent[index];
    section.classList.add("ativo", section.dataset.anime);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
