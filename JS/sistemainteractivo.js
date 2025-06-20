function iniciarSistema() {
    console.clear();
    console.log("¡Bienvenido al Sistema Interactivo de Mensajes!");

    let nombre = prompt("Por favor, ingresa tu nombre:");
    if (!nombre) {
        alert("Debes ingresar tu nombre para continuar.");
        return;
    }

    let edadIngresada = prompt("Por favor, ingresa tu edad:");
    let edad = parseInt(edadIngresada);

    if (isNaN(edad)) {
        console.error("Error: ingresa una edad válida.");
        alert("Error: ingresa una edad válida.");
    } else if (edad < 18) {
        alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
    } else {
        alert(`Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en programación!`);
    }
}