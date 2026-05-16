import { createAdvert, getAdvert, updateAdvert } from "./api.js";

const form = document.querySelector("#create-advert-form");
const params = new URLSearchParams(window.location.search);
const advertId = params.get("id");

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "./login.html";
}

function getUserId() {
  const payloadBase64 = token.split(".")[1];
  const decodedPayload = atob(payloadBase64);
  const payload = JSON.parse(decodedPayload);

  return payload.userId;
}

if (advertId) {
  const advert = await getAdvert(advertId);

  if (advert.userId !== getUserId()) {
    window.location.href = "./index.html";
  }

  form.elements.name.value = advert.name;
  form.elements.description.value = advert.description || "";
  form.elements.price.value = advert.price;
  form.elements.sale.value = advert.sale.toString();
  form.elements.photo.value = advert.photo || "";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const advert = {
    name: formData.get("name"),
    price: Number(formData.get("price")),
    description: formData.get("description"),
    sale: formData.get("sale") === "true",
    photo: formData.get("photo"),
  };

  if (advertId) {
    await updateAdvert(advertId, advert);
  } else {
    await createAdvert(advert);
  }

  window.location.href = "./index.html";
});

