function appendForm(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<form action="" class="form">
      <label class="form__label">
        <span class="form__text text-caption">NOMBRE</span>
        <input name="name" type="text" class="form__input text-body" />
      </label>
      <label class="form__label">
        <span class="form__text text-caption">EMAIL</span>
        <input name="email" type="email" class="form__input text-body" />
      </label>
      <label class="form__label">
        <span class="form__text text-caption">Mensaje</span>
        <textarea name="message" class="form__textarea text-body"></textarea>
      </label>
      <button class="form__button-submit text-body-bold">Enviar</button>
    </form>`;

  el.appendChild(componentEl);
  postData();
}

function postData() {
  const formEl = document.querySelector(".form");

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData.entries());

    let message = `${dataObject.name} te envío el siguiente mensaje: <br/>
    ${dataObject.message} <br/>
    Respondele en ${dataObject.email}`;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "nahuelayala30@gmail.com",
        message: message,
      }),
    })
      .then(() => {
        alert("El mensaje se ha enviado correctamente!");

        const inputsEl = formEl.querySelectorAll(".form__input");
        inputsEl.forEach((input) => {
          input.value = "";
        });

        const textareaEl = formEl.querySelector(".form__textarea");
        textareaEl.value = "";
      })
      .catch(() => {
        alert("Error al enviar el mensaje");
      });
  });
}
