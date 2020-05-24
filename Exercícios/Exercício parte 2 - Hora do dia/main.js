const corpo = document.querySelector("body");
const gradiente = document.querySelector("#gradiente");

const msg = document.querySelector("h3");
const imagem = document.querySelector("#imagem");

comecarTempo(); //Inicializa

function comecarTempo() {

    var hoje = new Date();
    var minuto = hoje.getMinutes();
    var hora = hoje.getHours();

    minuto = verificarTempo(minuto);

    msg.innerText = `Agora são: ${hora}:${minuto}`;
    mudarFundo(hora); //Manda a hora para a funcão

    //Checa a cada 500 milisigundos e executa a função
    temporizador = setTimeout(function () {

        comecarTempo();

    }, 500);

}

//Adiciona o zero na frente do tempo caso seja menor que 10
function verificarTempo(tempo) {
    if (tempo < 10) {
        tempo = "0" + tempo;
    }
    return tempo;
}

//Função recebe a hora que não esta em escopo global e muda a cor de fundo
function mudarFundo(hora) {
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

//Insere minha assinatura no footer da página
var textoFooter = document.createElement("P");
textoFooter.innerHTML = "&copy; Vinícius.";
document.getElementById("copyright").appendChild(textoFooter);