const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";
const urlComentarios = "https://jsonplaceholder.typicode.com/comments";
let usuarioId;
let postId;

const consultaUsuarios = new XMLHttpRequest();
consultaUsuarios.open("GET", urlUsuarios);
consultaUsuarios.addEventListener("load", () => {
  const usuarios = JSON.parse(consultaUsuarios.responseText);
  const usuario = usuarios.filter(usuario => usuario.id === 1);
  console.log(usuario);
  usuarioId = usuario[0].id;

  const consultaPosts = new XMLHttpRequest();
  consultaPosts.open("GET", urlPosts + "?userId=" + usuarioId);
  consultaPosts.addEventListener("load", () => {
    const posts = JSON.parse(consultaPosts.responseText);
    const post = posts.filter(post => post.id === 1);
    console.log(post);
    postId = post[0].id;

    const consultaComentarios = new XMLHttpRequest();
    consultaComentarios.open("GET", urlComentarios + "?postId=" + postId);
    consultaComentarios.addEventListener("load", () => {
      const comentarios = JSON.parse(consultaComentarios.responseText);
      console.log(comentarios);
    });
    consultaComentarios.send();
  });
  consultaPosts.send();
});
consultaUsuarios.send();
