const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlComentarios = "https://jsonplaceholder.typicode.com/comments";
let usuarioId;
let postId;

fetch(urlUsuarios)
  .then(respuesta => {
    if (respuesta.status !== 200) {
      throw new Error(respuesta.status);
    }
    return respuesta.json();
  })
  .then(usuarios => {
    const usuario = usuarios.filter(usuario => usuario.id === 1);
    console.log(usuario);
    usuarioId = usuario[0].id;
    return fetch(urlPosts + "?userId=" + usuarioId);
  })
  .then(respuesta => {
    if (respuesta.status !== 200) {
      throw new Error(respuesta.status);
    }
    return respuesta.json();
  })
  .then(posts => {
    const post = posts.filter(post => post.id === 1);
    console.log(post);
    postId = post[0].id;
    return fetch(urlComentarios + "?postId=" + postId);
  })
  .then(respuesta => {
    if (respuesta.status !== 200) {
      throw new Error(respuesta.status);
    }
    return respuesta.json();
  })
  .then(comentarios => {
    console.log(comentarios);
  })
  .catch(error => {
    console.error(error);
  });
