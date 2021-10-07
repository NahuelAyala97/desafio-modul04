function appendHeader(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `  <header class="header">
  <a class="header__logo logo" href="/">NAHUEL</a>
  <button class="header__button-open-hamburger">
    <div class="button-open-hamburger--bread"></div>
    <div class="button-open-hamburger--bread"></div>
    <div class="button-open-hamburger--bread"></div>
  </button>
  <nav class="header__nav">
    <button class="header__button-close-hamburger">
      <img src="./componentes/header/vector-button.png" alt="" />
    </button>
    <div class="header__nav-content">
      <a class="header__nav-content-link title" href="./portfolio.html"
        >Portfolio
      </a>
      <a class="header__nav-content-link title" href="./servicios.html"
        >Servicios
      </a>
      <a class="header__nav-content-link title" href="./contacto.html"
        >Contacto
      </a>
    </div>
  </nav>
</header>`;

  el.appendChild(componentEl);

  const buttonOpenEl = document.querySelector(".header__button-open-hamburger");
  const buttonCloseEl = document.querySelector(
    ".header__button-close-hamburger",
  );
  const menuEl = document.querySelector(".header__nav");

  buttonOpenEl.addEventListener("click", (e) => {
    menuEl.style.display = "flex";
  });

  buttonCloseEl.addEventListener("click", (e) => {
    menuEl.style.display = "";
  });
}
