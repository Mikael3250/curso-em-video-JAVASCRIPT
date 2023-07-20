const botaoAlterarTema = document.getElementById("mudar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocarTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        imagemBotaoTrocarTema.setAttribute("src", "./src/images/sol.png");
    } else {
        imagemBotaoTrocarTema.setAttribute("src", "./src/images/lua.png");

    }
});
