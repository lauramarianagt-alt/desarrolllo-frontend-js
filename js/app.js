import { createAdvert } from "./createAdvert.js";
import { getAdverts } from "./api.js";

const token = localStorage.getItem("token");
const createAdvertLink = document.querySelector("#create-advert-link");
const signupLink = document.querySelector("#signup-link");
const loginLink = document.querySelector("#login-link");
const logoutButton = document.querySelector("#logout-button");


if (token) {
  signupLink.style.display = "none";
  loginLink.style.display = "none";
} else {
  createAdvertLink.style.display = "none";
  logoutButton.style.display = "none";
}


const advertsContainer = document.querySelector("#adverts-container");

async function loadAdverts() {
  advertsContainer.innerHTML = "<p>Cargando anuncios...</p>";
  try {
    const adverts = await getAdverts();


  if (adverts.length === 0) {
    advertsContainer.innerHTML = "<p>No hay anuncios disponibles.</p>";
    return;
  }

  advertsContainer.innerHTML = "";

  adverts.forEach((advert) => {
    const advertElement = createAdvert(advert);
    advertsContainer.appendChild(advertElement);
  });

  } catch (error) {
    advertsContainer.innerHTML = "<p>Error al cargar los anuncios.</p>";
      console.error("Error fetching adverts:", error);
      
  } 
}

loadAdverts();


logoutButton.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.reload();
});
