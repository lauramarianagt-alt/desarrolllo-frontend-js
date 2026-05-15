 export function createAdvert(advert) {
    const advertElement = document.createElement("div");

    advertElement.classList.add("advert");

    advertElement.innerHTML = `
        <h2>${advert.name}</h2>
        <p>Price: $${advert.price}</p>
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
    
    advertElement.appendChild(deleteButton);        
    

    return advertElement;
}   

