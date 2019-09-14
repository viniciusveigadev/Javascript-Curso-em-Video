var botaoAdd = document.querySelector("#add");
botaoAdd.addEventListener('click', adicionar);

var botaoFin = document.querySelector("#finalizar");
botaoFin.addEventListener('click', finalizar);

var valores = [ ];

function adicionar() {
    var numTxt = document.querySelector("#txtn");
    var numInt = Number(numTxt.value);
    if (numInt <= 0 && numInt >= 100) {
        alert("Favor digitar um numero válido");
    }else {
        valores.push(numInt);
        var select = document.querySelector("#numeros");
        var item = document.createElement('option');
        item.text = `Valor ${numInt} adicionado`;
        select.appendChild(item);
    }
}
function finalizar(){
    var total = valores.length;
    var ordem = valores.sort();

    var res = document.querySelector("#res");
    var paragrafo = document.createElement('p');
    paragrafo.innerText = `Ao todo temos ${total} números cadastrados O menor valor é ${ordem[0]} O maior valor é ${ordem -1}`;
    res.appendChild(paragrafo);

}
