/*document.getElementById("contact").addEventListener("submit", function(event){
    event.preventDefault();*/

function saveCliente() {

    let nameCliente = document.getElementById("name");
    let lastnameCliente = document.getElementById("lastname");
    let phoneCliente = document.getElementById("phone");
    let emailCliente = document.getElementById("email");
    let cityCliente = document.getElementById("city");
    let messageCliente = document.getElementById("message");

    let cliente = {
        name: nameCliente.value,
        lastname: lastnameCliente.value,
        phone: phoneCliente.value,
        email: emailCliente.value,
        city: cityCliente.value,
        message: messageCliente.value
    };

    let url = "http://127.0.0.1:8000/api/clienteC";
    let = params = {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(cliente),
    }

    fetch(url, params).then((response) => {

        if (response.status == 201) {
            alert("Datos enviados correctamente");
        } else {
            alert("Error al enviar datos");
        }
    });

    return true;

}
