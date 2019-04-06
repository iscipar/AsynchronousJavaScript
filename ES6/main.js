// ES5
// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
// }

// Persona.prototype.autorizar = function autorizar() {
//   if (this.edad >= 18) {
//     var mensaje = this.nombre + " es mayor de edad";
//   } else {
//     var mensaje = this.nombre + " es menor de edad";
//   }
//   console.log(mensaje);
// };

// function filtrarAmigos(entrada) {
//   var salida = [];
//   entrada.forEach(function(amigo) {
//     if (amigo[0] == "M") {
//       salida.push(amigo);
//     }
//   });
//   return salida;
// }

// var contador = {
//   valor: 0,
//   incrementar: function() {
//     setTimeout(function() {
//       this.valor++;
//       console.log(this.valor);
//     }, 1000);
//   }
// };

// function mostrarValor(valor) {
//   if (valor) {
//     console.log(valor);
//   } else {
//     console.log("defecto");
//   }
// }

// var persona = new Persona("Ismael", 38);
// persona.autorizar();

// var amigos = filtrarAmigos(["Ana", "Pepe", "Maria", "Tomas", "Marcelo"]);
// console.log("Amigos filtrados:", amigos);

// contador.incrementar();

// var colores = ["rojo", "verde", "azul"];
// var rojo = colores[0];
// var verde = colores[1];
// var azul = colores[2];
// console.log(rojo);
// console.log(verde);
// console.log(azul);
// var jugador = { nombre: "Rodrigo", equipo: "Valencia" };
// var nombre = jugador.nombre;
// var equipo = jugador.equipo;
// console.log(nombre);
// console.log(equipo);

// mostrarValor();

// ES6
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  autorizar() {
    if (this.edad >= 18) {
      let mensaje = `${this.nombre} es mayor de edad`;
      console.log(mensaje);
    } else {
      let mensaje = `${this.nombre} es menor de edad`;
      console.log(mensaje);
    }
  }
}

const filtrarAmigos = entrada => {
  return entrada.filter(amigo => amigo[0] == "M");
};

const contador = {
  valor: 0,
  incrementar: function() {
    setTimeout(() => {
      this.valor++;
      console.log(this.valor);
    }, 1000);
  }
};

function mostrarValor(valor = "defecto") {
  console.log(valor);
}

const persona = new Persona("Ismael", 38);
persona.autorizar();

const amigos = filtrarAmigos(["Ana", "Pepe", "Maria", "Tomas", "Marcelo"]);
console.log("Amigos filtrados:", amigos);

contador.incrementar();

const colores = ["rojo", "verde", "azul"];
const [rojo, verde, azul] = colores;
console.log(rojo);
console.log(verde);
console.log(azul);
const jugador = { nombre: "Rodrigo", equipo: "Valencia" };
const { nombre, equipo } = jugador;
console.log(nombre);
console.log(equipo);

mostrarValor();
