import { getAdvert } from "./api.js";

const advertDetailContainer = document.querySelector("#advert-detail-container");

const params = new URLSearchParams(window.location.search);
const advertId = params.get("id");

async function loadAdvertDetail() {
  advertDetailContainer.innerHTML = "<p>Cargando anuncio...</p>";

  if (!advertId) {
    advertDetailContainer.innerHTML = "<p>No se ha encontrado el anuncio.</p>";
    return;
  }

  try {
    const advert = await getAdvert(advertId);

    if (!advert.id) {
      advertDetailContainer.innerHTML = "<p>El anuncio no existe.</p>";
      return;
    }

    advertDetailContainer.innerHTML = `
      <article>
        ${
          advert.photo
            ? `<img src="${advert.photo}" alt="${advert.name}" width="300">`
            : ""
        }

        <h1>${advert.name || "Anuncio sin nombre"}</h1>

        <p>${advert.description || "Sin descripción"}</p>

        <p>Precio: ${advert.price || "Sin precio"} €</p>

        <p>${advert.sale ? "Venta" : "Compra"}</p>
      </article>
    `;
  } catch (error) {
    advertDetailContainer.innerHTML = "<p>Error al cargar el anuncio.</p>";
    console.error("Error fetching advert detail:", error);
  }
}

loadAdvertDetail();