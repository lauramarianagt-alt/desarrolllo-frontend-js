import { createUser } from "../signup/signup-model.js";
import { validateEmail } from "./validators.js";

export const signupController =  (signupForm) => {

  signupForm.addEventListener('submit', async (event) => {

    event.preventDefault();
    let existErrors = false;


    const form = new FormData(signupForm)
    const email = form.get('email')
    const password = form.get('password')
    const passwordConfirm = form.get('password-confirm')


    
    const isEmailValid = validateEmail(email)

    if (!isEmailValid) {
      existErrors = true
      alert('El email no es valido')
    }

  
    if (password !== passwordConfirm) {
      existErrors = true
      alert('Las contraseñas no son iguales')
    }

    if (!existErrors) {
      try {
        await createUser(email, password)
        
        alert('Usuario creado correctamente');

        window.location.href = "./login.html";
       
      } catch (error) {
        alert('Error al crear el usuario: ' + error.message);       
      }
    }
  })
}