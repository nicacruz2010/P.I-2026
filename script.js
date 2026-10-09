
/* K-VERSE - JavaScript */

// 1. Animação dos álbuns ao passar o mouse
const albuns = document.querySelectorAll(".album");

albuns.forEach((album) => {
    album.addEventListener("mouseenter", () => {
        album.classList.add("album-animado");
    });

    album.addEventListener("mouseleave", () => {
        album.classList.remove("album-animado");
    });
});

// 2. Animação nos cards de artistas
const artistas = document.querySelectorAll(".artist");

artistas.forEach((artista) => {
    artista.addEventListener("mouseenter", () => {
        artista.classList.add("card-animado");
    });

    artista.addEventListener("mouseleave", () => {
        artista.classList.remove("card-animado");
    });
});

// 3. Animação nos cards de notícias
const noticias = document.querySelectorAll(".news-card");

noticias.forEach((noticia) => {
    noticia.addEventListener("mouseenter", () => {
        noticia.classList.add("card-animado");
    });

    noticia.addEventListener("mouseleave", () => {
        noticia.classList.remove("card-animado");
    });
});

// 4. Mensagem de boas-vindas no console
console.log("Bem-vindo ao K-VERSE! 💜");
