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
  const adverts = await getAdverts();
  adverts.forEach((advert) => {
    const advertElement = createAdvert(advert);
    advertsContainer.appendChild(advertElement);
  });
}

loadAdverts();


logoutButton.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.reload();
});
