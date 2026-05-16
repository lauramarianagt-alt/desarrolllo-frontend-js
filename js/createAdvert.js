 export function createAdvert(advert) {
    const advertElement = document.createElement("div");

    advertElement.classList.add("advert");

    advertElement.innerHTML = `
        <h2>${advert.name}</h2>
        <p>${advert.description || "Sin descripción"}</p>
        <p>Price: $${advert.price}</p>
        <p>${advert.sale ? "Venta" : "Compra"}</p>
        ${advert.photo ? `<img src="${advert.photo}" alt="${advert.name}" width="200">` : ""}

    `;


    const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

            deleteButton.addEventListener("click", async () => {
                const token = localStorage.getItem("token");

                await fetch(`http://127.0.0.1:8000/api/adverts/${advert.id}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });
                advertElement.remove();
            });
    
    const editButton = document.createElement("button");
    editButton.textContent = "Editar";
    
    editButton.addEventListener("click", () => {
        window.location.href = `./create-advert.html?id=${advert.id}`;
});

advertElement.appendChild(deleteButton);
advertElement.appendChild(editButton);

return advertElement;
}   

