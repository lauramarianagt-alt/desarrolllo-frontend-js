export async function getAdverts(advertId) {
  const token = localStorage.getItem("token");
  const response = await fetch(("http://127.0.0.1:8000/api/adverts"), {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  const adverts = await response.json();

  return adverts;
}

export async function getAdvert(advertId) {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `http://127.0.0.1:8000/api/adverts/${advertId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const advert = await response.json();

  return advert;
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

export async function updateAdvert(advertId, advert) {
  const token = localStorage.getItem("token");

  const response = await fetch(`http://127.0.0.1:8000/api/adverts/${advertId}`, {
    method: "PUT",
    body: JSON.stringify(advert),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

  const updatedAdvert = await response.json();
  return updatedAdvert;
}