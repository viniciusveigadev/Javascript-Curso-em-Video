//Date() consegue retornar dia, ano, data, hora etc
var data = new Date(); 

//Apague o getDay() para ver todas possibilidade de Date()
var diaAtual = data.getDay();

//O getDay() mostra a semana em números. Ex: Domingo é 0...
console.log(`O dia atual ${diaAtual}`);

//Swicth vai pegar o dia atual em número e mostrar em texto
switch (diaAtual) {

    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda feira");
        break;
    case 2:
        console.log("Terça feira");
        break;
    case 3:
        console.log("Quarta feira");
        break;
    case 4:
        console.log("Quinta feira");
        break;
    case 5:
        console.log("Sexta feira");
        break;
    case 6:
        console.log("Sábado");
        break;
        default: console.log("[ERRO] Dia inválido");
}

//Mais exemplos com Date()
var hora = data.getHours;
var minutos = data.getMinutes();
console.log(`A hora atual é: ${hora}:${minutos}`);

//Idade da pessoa com base na data de nascimento e o ano atual
var anoNasc = 1997;
var anoAtual = data.getFullYear();
var resto = anoAtual - anoNasc;
console.log(`Sua idade no ano de ${anoAtual} é: ${resto}`);

//Meses
var mes = data.getMonth();
console.log(mes);