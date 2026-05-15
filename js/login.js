const form = document.querySelector("#login-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

  const username = formData.get("username");
  const password = formData.get("password");

  const response = await fetch("http://127.0.0.1:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  });

  const data = await response.json();

  console.log(data);
  console.log(data.accessToken);
 

  localStorage.setItem("token", data.accessToken);
  
  window.location.href = "index.html";
});