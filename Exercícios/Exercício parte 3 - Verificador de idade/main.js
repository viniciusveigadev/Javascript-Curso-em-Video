function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (Number(fano.value <= 1500)|| Number(fano.value >= ano)) {
        alert("[ERRO] Ano inválido")
    } else {
        var fSex = document.getElementsByName('radsex')

        var idade = ano - Number(fano.value)
        var genero = ''
        var imagem = document.createElement('img')

        if (fSex[0].checked) {
            genero = "Masculino"
            if (idade > 0 && idade < 10) {
                imagem.src = "assets/foto-bebe-m.png"
            } else if (idade < 21) {
                imagem.src = "assets/foto-jovem-m.png"
            } else if (idade < 50) {
                imagem.src = "assets/foto-adulto-m.png"
            } else {
                imagem.src = "assets/foto-idoso-m.png"
            }
        } else if (fSex[1].checked) {
            genero = "Feminino"
            if (idade > 0 && idade < 10) {
                imagem.src = "assets/foto-bebe-f.png"
            } else if (idade < 21) {
                imagem.src = "assets/foto-jovem-f.png"
            } else if (idade < 50) {
                imagem.src = "assets/foto-adulto-f.png"
            } else {
                imagem.src = "assets/foto-idoso-f.png"
            }
        }
        res.innerHTML = `Detectamos a idade de ${idade} anos e genêro: ${genero}`
        res.appendChild(imagem)
        res.style.textAlign = 'center'

    }

}
