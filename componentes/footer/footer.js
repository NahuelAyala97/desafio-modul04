function appendFooter(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = ` <footer class="footer">
    <div class="footer__container-content">
      <a class="footer__logo logo" href="/">NAHUEL</a>
      <nav class="footer__nav">
        <a href="" class="footer__nav-link">
          <span class="text-body footer__nav-link-text">instagram</span>
          <img src="./componentes/images/icons/icon-instagram.png" alt="" />
        </a>
        <a href="" class="footer__nav-link">
          <span class="text-body footer__nav-link-text">Linkedin</span>
          <img src="./componentes/images/icons/icon-linkeding.png" alt="" />
        </a>
        <a href="" class="footer__nav-link">
          <span class="text-body footer__nav-link-text">Github</span>
          <img src="./componentes/images/icons/icon-github.png" alt="" />
        </a>
      </nav>
    </div>
  </footer>`;

  el.appendChild(componentEl);
}
