function addCardPortfolio(params = {}) {
  const templatePortfolio = document.querySelector(
    ".porfolio__template-content",
  );
  const containerPortfolio = document.querySelector(".portfolio__content");

  templatePortfolio.content.querySelector(
    ".portfolio__content-card-image",
  ).src = params.img;
  templatePortfolio.content.querySelector(
    ".portfolio__content-card-title",
  ).textContent = params.title;
  templatePortfolio.content.querySelector(
    ".portfolio__content-card-description",
  ).textContent = params.description;
  templatePortfolio.content.querySelector(".portfolio__content-card-link").src =
    params.link;

  const clone = templatePortfolio.content.cloneNode(true);
  containerPortfolio.appendChild(clone);
}

function getDataPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/wu26a8zpzbji/environments/master/entries?access_token=P09-2BU9Ai_curQdJT3F93l70rCnlMlgA713uRt4MmI&content_type=portfolio&order=sys.createdAt",
  )
    .then((response) => response.json())
    .then((data) => {
      const datacollection = data.items.map((item) => {
        return {
          img: data.includes["Asset"][0].fields.file.url,
          title: item.fields.title,
          description: item.fields.description,
          link: item.fields.url,
        };
      });
      return datacollection;
    });
}

(function main() {
  const containerHeader = document.querySelector(
    ".portfolio__header-container",
  );
  appendHeader(containerHeader);

  getDataPortfolio().then((portfolio) => {
    for (const card of portfolio) {
      addCardPortfolio(card);
    }
  });

  const containerFooter = document.querySelector(".container-footer");
  appendFooter(containerFooter);
})();
