const apiUrl = "http://localhost:3000/users"; // Cambia la dirección por la URL de tu backend

// Función para registrar un nuevo usuario
function registerUser(userData) {
    axios
        .post(`${apiUrl}/users`, userData)
        .then((response) => {
            // Aquí puedes procesar la respuesta de la API después de registrar al usuario
            const { user, token } = response.data;
            alert("Usuario registrado exitosamente!");
            console.log(user); // Puedes mostrar los datos del usuario en la consola o en tu frontend
            console.log(token); // Puedes guardar el token de confirmación si lo necesitas
        })
        .catch((error) => {
            // Manejo de errores
            console.error("Error al registrar usuario:", error.response.data.message);
        });
}

// Obtener el formulario de registro y añadir el evento submit
const registerForm = document.querySelector(".register form");
registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma convencional
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;

    const userData = { name, email, age, password };
    registerUser(userData);
});
  