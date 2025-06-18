# Sistema Interactivo de Mensajes

Este proyecto es un pequeño programa interactivo en JavaScript que da la bienvenida al usuario, le solicita su nombre y edad, y le muestra un mensaje personalizado según su edad.

## 🧠 Descripción

El sistema realiza lo siguiente:

1. Muestra un mensaje de bienvenida en consola.
2. Solicita al usuario su nombre y edad mediante `prompt`.
3. Convierte la edad ingresada a un número.
4. Verifica si la edad es válida:
   - Si no es un número, muestra un mensaje de error en consola.
   - Si es menor de 18 años, muestra un mensaje alentador para jóvenes.
   - Si es mayor o igual a 18 años, muestra un mensaje motivacional para adultos.

## 🛠️ Tecnologías utilizadas

- JavaScript (vanilla)
- `console.log`, `prompt`, `alert` y `parseInt`
- Validaciones con `isNaN`

## 🚀 Cómo usarlo

1. Abre el archivo `sistemainteractivo.js` en una consola del navegador.
2. El programa te pedirá que ingreses tu nombre y edad.
3. Se mostrará un mensaje personalizado según tu edad.