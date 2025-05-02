function mostrarPedido() {
    document.getElementById("pedido").style.display = "block";
}

function mostrarFinal() {
    document.getElementById("final").style.display = "block";
}

// Efeito de corações flutuando
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 300);
