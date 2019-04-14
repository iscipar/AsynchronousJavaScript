const boton = document.querySelector("button");
const div = document.querySelector("div#usuarios");

boton.addEventListener("click", enviarConsulta);

function enviarConsulta() {
  const consulta = new XMLHttpRequest();
  const metodo = "GET";
  const url = "https://jsonplaceholder.typicode.com/users";

  consulta.open(metodo, url);
  consulta.addEventListener("load", mostrarUsuarios);
  consulta.addEventListener("error", mostrarError);
  consulta.send();

  function mostrarUsuarios() {
    if (consulta.status !== 200) {
      mostrarError();
      return;
    }

    const usuarios = JSON.parse(consulta.responseText);
    usuarios.forEach(usuario => {
      const p = document.createElement("p");
      p.innerText = `Nombre: ${usuario.name}`;
      div.appendChild(p);
    });
  }

  function mostrarError() {
    console.error("Error");
  }
}

const perros = fetch("https://api.thedogapi.com/v1/images/search");
console.log(perros);
