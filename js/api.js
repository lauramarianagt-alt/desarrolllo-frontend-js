export async function getAdverts() {
  const token = localStorage.getItem("token");
  const response = await fetch("http://127.0.0.1:8000/api/adverts", {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const adverts = await response.json();

  return adverts;
}

export async function createAdvert(advert) {

  const token = localStorage.getItem("token");
  const response = await fetch("http://127.0.0.1:8000/api/adverts", {
    method: "POST",
    body: JSON.stringify(advert),
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    });

    const createdAdvert = await response.json();

    return createdAdvert;
}