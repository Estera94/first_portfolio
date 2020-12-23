const topMenu = document.querySelectorAll(".top-menu .menu-item");
topMenu.forEach((buttons) => {
  buttons.addEventListener("click", function () {
    for (let i = 0; i < topMenu.length; i++) {
      topMenu[i].classList.remove("menuHover");
    }

    buttons.classList.add("menuHover");
  });
});
