const fs = require("fs");

// Asynchronous
fs.readFile("archivo.txt", "utf-8", (error, contenido) => {
  if (error) {
    console.log("Error:", error);
    return;
  }
  console.log("Asynchronous:", contenido);
});

// Synchronous
const contenido = fs.readFileSync("archivo.txt", "utf-8");
console.log("Synchronous:", contenido);
