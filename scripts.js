// Lista de items a procesar
const items = ["uno", "dos", "tres"];

// Cuenta los items procesados, sin estado global ni ramas duplicadas
function processItems() {
    let counter = 0;
    for (const item of items) {
        counter += 1;
    }
    return counter;
}

// Antes usaba eval(), que permite ejecutar codigo arbitrario.
// Ahora se valida la entrada como numero.
function evaluateUserInput(input) {
    const value = Number(input);
    return Number.isNaN(value) ? null : value;
}

// Guarda solo lo que el usuario escribio, en sessionStorage,
// que se borra al cerrar la pestana.
function saveUserData() {
    const field = document.getElementById("user-data");
    if (!field) {
        return null;
    }
    sessionStorage.setItem("userData", field.value);
    return field.value;
}

// Comparacion estricta: compara valor Y tipo
function checkValue(value) {
    return value === 0;
}

window.onload = function () {
    processItems();
};
