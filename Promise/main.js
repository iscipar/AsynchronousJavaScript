const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlComentarios = "https://jsonplaceholder.typicode.com/comments";
let usuarioId;
let postId;

const obtenerUsuarios = new Promise((resolve, reject) => {
  const consultaUsuarios = new XMLHttpRequest();
  consultaUsuarios.open("GET", urlUsuarios);
  consultaUsuarios.addEventListener("load", () => {
    if (consultaUsuarios.status !== 200) {
      return reject(consultaUsuarios.status);
    }
    const usuarios = JSON.parse(consultaUsuarios.responseText);
    const usuario = usuarios.filter(usuario => usuario.id === 1);
    console.log(usuario);
    usuarioId = usuario[0].id;
    return resolve(usuarioId);
  });
  consultaUsuarios.addEventListener("error", e => {
    return reject(e);
  });
  consultaUsuarios.send();
});

const obtenerPosts = usuarioId => {
  return new Promise((resolve, reject) => {
    const consultaPosts = new XMLHttpRequest();
    consultaPosts.open("GET", urlPosts + "?userId=" + usuarioId);
    consultaPosts.addEventListener("load", () => {
      if (consultaPosts.status !== 200) {
        return reject(consultaPosts.status);
      }
      const posts = JSON.parse(consultaPosts.responseText);
      const post = posts.filter(post => post.id === 1);
      console.log(post);
      postId = post[0].id;
      return resolve(postId);
    });
    consultaPosts.addEventListener("error", e => {
      return reject(e);
    });
    consultaPosts.send();
  });
};

const obtenerComentarios = postId => {
  return new Promise((resolve, reject) => {
    const consultaComentarios = new XMLHttpRequest();
    consultaComentarios.open("GET", urlComentarios + "?postId=" + postId);
    consultaComentarios.addEventListener("load", () => {
      if (consultaComentarios.status !== 200) {
        return reject(consultaComentarios.status);
      }
      const comentarios = JSON.parse(consultaComentarios.responseText);
      return resolve(comentarios);
    });
    consultaComentarios.addEventListener("error", e => {
      return reject(e);
    });
    consultaComentarios.send();
  });
};

obtenerUsuarios
  .then(datos => {
    return obtenerPosts(datos);
  })
  .then(datos => {
    return obtenerComentarios(datos);
  })
  .then(datos => {
    console.log(datos);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
