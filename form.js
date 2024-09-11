const apiurl = "https://talentotech-59wl.onrender.com";

async function enviarDatosFormulario() {
  const form = document.getElementById("formulario");
  const datosDelFormulario = new FormData(form);
  const datosConvertidos = new URLSearchParams(datosDelFormulario).toString();

  let respuesta = await fetch(apiurl + "/contacts/guardar", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: datosConvertidos,
  });
  respuesta = await respuesta.json();
  alert(respuesta.message);
}
