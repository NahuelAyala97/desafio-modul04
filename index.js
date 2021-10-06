function addServices(params = {}) {
  const templateServices = document.querySelector(".template-services");
  const servicesContainerEl = document.querySelector(".services__container");

  templateServices.content.querySelector(".services__item-title").textContent =
    params.title;
  templateServices.content.querySelector(
    ".services__item-description",
  ).textContent = params.description;
  templateServices.content.querySelector(".services__item-img").src =
    params.image;

  const clone = templateServices.content.cloneNode(true);
  servicesContainerEl.appendChild(clone);
}

function getMyServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/wu26a8zpzbji/environments/master/entries?access_token=P09-2BU9Ai_curQdJT3F93l70rCnlMlgA713uRt4MmI&content_type=services&order=sys.createdAt",
  )
    .then((response) => response.json())
    .then((data) => {
      const servicesCollection = data.items.map((item) => {
        return {
          title: item.fields.title,
          description: item.fields.description,
          image: data.includes["Asset"][0].fields.file.url,
        };
      });
      return servicesCollection;
    });
}

(function main() {
  const containerHeader = document.querySelector(".welcome__container-header");
  appendHeader(containerHeader);
  getMyServices().then((service) => {
    for (const s of service) {
      addServices(s);
    }
  });
  const containerForm = document.querySelector(".form__container");
  appendForm(containerForm);
  const containerFooter = document.querySelector(".container__footer");
  appendFooter(containerFooter);
})();
