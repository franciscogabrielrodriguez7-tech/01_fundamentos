// 15. Clasificación de color con switch
// Objetivo: usar switch con texto.
// Solicita un color y muestra un mensaje:
// - "rojo" → "Color de alerta"
// - "verde" → "Color de avance"
// - "amarillo" → "Color de precaución"
// - cualquier otro → "Color no reconocido"

let color = "rojo";

switch (color) {
  case "rojo":
    console.log("Color de alerta");
    break;
  case "amarillo":
    console.log("Color de precaución");
    break;
  case "verde":
    console.log("Color de avance");
    break;
  default:
    console.log("Color no reconocido");
}
