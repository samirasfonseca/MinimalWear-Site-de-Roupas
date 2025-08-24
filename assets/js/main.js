/*----------- Menu Hamburguer ------------*/
  function toggleMenu() {
    // só funciona se a largura da tela for menor que 768px
    if (window.innerWidth <= 768) {
      const menu = document.getElementById("navbar");
      menu.classList.toggle("active");
    }
  }