import { createAdvert, getAdvert } from "./api.js";

const form = document.querySelector("#create-advert-form");
const params = new URLSearchParams(window.location.search);
const advertId = params.get("id");
if (advertId) {
  const advert = await getAdvert(advertId);

  form.elements.name.value = advert.name;
  form.elements.price.value = advert.price;
}
const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "./login.html";
}


form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const name = formData.get("name");
  const price = Number(formData.get("price"));

  await createAdvert({
    name,
    price,
  });

  window.location.href = "./index.html";
});

console.log(advertId);
