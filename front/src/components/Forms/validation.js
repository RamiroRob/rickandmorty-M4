const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexNumber = /\d/

export default function validation (userData) {

    let errors ={}

    if (!regexEmail.test(userData.username)) errors.username = "El nombre de usuario debe ser un email"
    if (!userData.username) errors.username = "El nombre de usuario no puede estar vacío"
    if (userData.username.length > 35) errors.username = "El nombre de usuario no puede tener más de 35 caracteres"
    if (!userData.password) errors.password = "La constraseña no puede estar vacía"
    if (userData.password.length < 6 || userData.password.length > 10) errors.password = "La contraseña debe tener una longitud de entre 6 y 10 caracteres"
    if(!regexNumber.test(userData.password)) errors.password = "La contraseña debe tener al menos un número"

    return errors
}