const corpo = document.querySelector("body");
const gradiente = document.querySelector("#gradiente");

const msg = document.querySelector("h3");
const imagem = document.querySelector("#imagem");

const data = new Date();
const minutos = data.getMinutes();
const hora = data.getHours();

//const hora = 15;

function mudar() {
    
    msg.innerText = `Agora são: ${hora}:${minutos}`;
    
    if (hora >= 6 && hora <= 12) {
        imagem.src = "assets/dia.png";
        corpo.classList.add("cor-dia");
        gradiente.classList.add("gradient-dia");
       
    } else if (hora > 12 && hora <= 18) {
        imagem.src = "assets/tarde.png";
        corpo.classList.add("cor-tarde");
        gradiente.classList.add("gradient-tarde");
       
    } else {
        imagem.src = "assets/noite.png";
        corpo.classList.add("cor-noite");
        gradiente.classList.add("gradient-noite");
    }
}

var textoFooter = document.createElement("P");
    textoFooter.innerHTML = "&copy; Vinícius.";
    document.getElementById("copyright").appendChild(textoFooter);
