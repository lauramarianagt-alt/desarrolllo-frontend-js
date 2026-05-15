import { createAdvert } from "./api.js";

 const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "./login.html";
}

const form = document.querySelector("#create-advert-form");

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
