const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlComentarios = "https://jsonplaceholder.typicode.com/comments";
let usuarioId;
let postId;

const obtenerComentarios = async () => {
  try {
    let respuesta = await fetch(urlUsuarios);
    if (respuesta.status !== 200) {
      throw new Error(respuesta.status);
    }
    const usuarios = await respuesta.json();
    const usuario = usuarios.filter(usuario => usuario.id === 1);
    console.log(usuario);
    usuarioId = usuario[0].id;

    respuesta = await fetch(urlPosts + "?userId=" + usuarioId);
    if (respuesta.status !== 200) {
      throw new Error(respuesta.status);
    }
    const posts = await respuesta.json();
    const post = posts.filter(post => post.id === 1);
    console.log(post);
    postId = post[0].id;

    respuesta = await fetch(urlComentarios + "?postId=" + postId);
    if (respuesta.status !== 200) {
      throw new Error(respuesta.status);
    }
    const comentarios = await respuesta.json();
    console.log(comentarios);
  } catch (error) {
    console.error(error);
  }
};
obtenerComentarios();
