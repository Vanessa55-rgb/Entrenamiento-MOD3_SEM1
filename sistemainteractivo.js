// mensaje de bienvenida del programa
console.log("bienvenido al sistema interactivo de mensajes");

// captura de datos del usuario
let nombre = prompt("por favor, ingresa tu nombre: ");
let edadIngresada = prompt("por favor, ingresa tu edad: ");

// conversion de edad a número
let edad = parseInt(edadIngresada);

// validacion y mensajes personalizados
if (isNaN(edad)) {
    // si la edad no es un número válido
    console.error("error: por favor, ingresa una edad válida en números");
} else if (edad < 18) {
    // si es menor de edad
    alert(`hola ${nombre}, eres menor de edad, ¡sigue aprendiendo y disfrutando del código!`);
} else {
    // si es mayor de edad
    alert(`hola ${nombre}, eres mayor de edad, ¡prepárate para grandes oportunidades en el mundo de la programación!`);
}