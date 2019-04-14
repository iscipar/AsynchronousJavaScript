const mostrarNombre = () => {
  console.log("Nombre ingresado:", nombre.value);
};

const nombre = document.querySelector("input[name=nombre]");

nombre.addEventListener("blur", mostrarNombre);
