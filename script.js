const heart = document.getElementById("heartBtn");
const choices = document.getElementById("choices");
const msg = document.getElementById("msgBox");
const foto = document.getElementById("foto");
const btnNao = document.getElementById("btnNao"); // botão NÃO
const music = document.getElementById("music");

// Clicar no coração abre as escolhas
heart.addEventListener("click", () => {
    music.play(); // 🔊 começa a tocar ao clicar
    heart.style.display = "none";
    choices.style.display = "block";
});

// Botão NÃO começa a fugir só depois que aparecer
function randomPosition() {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 60;

    btnNao.style.position = "absolute";
    btnNao.style.left = Math.random() * maxX + "px";
    btnNao.style.top  = Math.random() * maxY + "px";
}

// Quando passar o mouse no NÃO → ele foge ❤‍🔥
btnNao.addEventListener("mouseover", randomPosition);

// Botão SIM → mensagem final
function showLove() {
    choices.style.display = "none";
    msg.style.display = "block";
    foto.style.display = "block";
}

// corações subindo
setInterval(() => {
    const h = document.createElement("div");
    h.classList.add("heart");
    h.innerHTML = "💜";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (20 + Math.random() * 30) + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
}, 350);
