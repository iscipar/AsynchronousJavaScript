const axios = require("axios");

const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlComentarios = "https://jsonplaceholder.typicode.com/comments";
let usuarioId;
let postId;

(async () => {
  try {
    let respuesta = await axios.get(urlUsuarios);
    const usuario = respuesta.data.filter(usuario => usuario.id === 1);
    console.log(usuario);
    usuarioId = usuario[0].id;

    respuesta = await axios.get(urlPosts + "?userId=" + usuarioId);
    const post = respuesta.data.filter(post => post.id === 1);
    console.log(post);
    postId = post[0].id;

    respuesta = await axios.get(urlComentarios + "?postId=" + postId);
    const comentarios = respuesta.data;
    console.log(comentarios);
  } catch (error) {
    if (error.response === undefined) {
      console.log(error);
    } else {
      console.log(`Error: ${error.response.status}`);
    }
  }
})();
