function addServicesCard(params = {}) {
  const templateServices = document.querySelector(
    ".services__template-content",
  );
  const containerServicesEl = document.querySelector(".services__content");

  templateServices.content.querySelector(".services__content-card-image").src =
    params.img;
  templateServices.content.querySelector(
    ".services__content-card-title",
  ).textContent = params.title;
  templateServices.content.querySelector(
    ".services__content-card-description",
  ).textContent = params.description;

  const clone = templateServices.content.cloneNode(true);
  containerServicesEl.appendChild(clone);
}

function getDataServicios() {
  return fetch(
    "https://cdn.contentful.com/spaces/wu26a8zpzbji/environments/master/entries?access_token=P09-2BU9Ai_curQdJT3F93l70rCnlMlgA713uRt4MmI&content_type=servicios&order=sys.createdAt",
  )
    .then((response) => response.json())
    .then((data) => {
      const dataCollection = data.items.map((item) => {
        return {
          img: data.includes["Asset"][0].fields.file.url,
          title: item.fields.title,
          description: item.fields.description,
        };
      });
      return dataCollection;
    });
}

(function main() {
  const containerHeader = document.querySelector(".services__header-container");
  appendHeader(containerHeader);

  getDataServicios().then((services) => {
    for (const card of services) {
      addServicesCard(card);
    }
  });

  const containerFooter = document.querySelector(".container-footer");
  appendFooter(containerFooter);
})();
