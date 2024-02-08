let palabra = "";
let palabraEncriptada = "";

function encriptar() {
  palabra = document.getElementById("txtarearequest").value.toLowerCase();
  const conversiones = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  const palabraEncriptar = palabra
    .split("")
    .map((letra) => conversiones[letra] || letra)
    .join("");
  return palabraEncriptar;
}

function mostrarEncriptar() {
  let inputResultado = document.getElementById("txtarearesponse");
  inputResultado.style.backgroundImage = "none";
  inputResultado.innerHTML = encriptar();
  let btncopiar = document.getElementById("btncopiar");
  btncopiar.style.display = "block";
  let inputrequestLimpiar = document.getElementById("txtarearequest");
  inputrequestLimpiar.value="";
  let h1message = document.getElementById("h1ResponseMensaje");
  let pmessage = document.getElementById("pReponseMensaje");
  h1message.style.display="none";
  pmessage.style.display ="none"
}

function desencriptar() {
  let campoEncriptado = document.getElementById("txtarearequest").value;
  const conversionesInversas = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  const palabraOriginal = campoEncriptado.split(/(enter|imes|ai|ober|ufat)/).map((letra) => conversionesInversas[letra] || letra).join("");
  return palabraOriginal;
}

function mostrarDesencriptar() {
  let inputResultado2 = document.getElementById("txtarearesponse");
  inputResultado2.style.backgroundImage = "none";
  inputResultado2.value = desencriptar();
  btncopiar.style.display = "block";
  let inputrequestLimpiar = document.getElementById("txtarearequest");
  inputrequestLimpiar.value="";
  let h1message = document.getElementById("h1ResponseMensaje");
  let pmessage = document.getElementById("pReponseMensaje");
  h1message.style.display="none";
  pmessage.style.display ="none"
}

function btncopy() {
  let campoEncriptado = document.getElementById("txtarearesponse");

  campoEncriptado.select();
  campoEncriptado.setSelectionRange(0,campoEncriptado.value.length); /* Para dispositivos móviles */

  /* Intenta copiar el texto al portapapeles */
  navigator.clipboard
    .writeText(campoEncriptado.value)
    .then(function () {
      /* Éxito: el texto se ha copiado correctamente */
      alert("Texto copiado al portapapeles: " + campoEncriptado.value);
      location.reload();
    })
    .catch(function (err) {
      /* Manejar errores en caso de que la copia al portapapeles falle */
      console.error("Error al copiar al portapapeles: ", err);
    });
}

