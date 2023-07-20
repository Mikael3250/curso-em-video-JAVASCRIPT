function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('erro! verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', './src/images/crianca-masculina.png')
            } else if (idade < 21){
                img.setAttribute('src', './src/images/jovem-masculino.png')
            } else if (idade < 50) {
                img.setAttribute('src', './src/images/adulto-masculino.png')
            } else if (idade < 101){
                img.setAttribute('src', './src/images/idoso-masculino.png')
            } else {
                img.setAttribute('src', './src/images/morto.png') 
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', './src/images/crianca-menina.png')
            } else if (idade < 21){
                img.setAttribute('src', './src/images/jovem-menina.png')
            } else if (idade < 50) {
                img.setAttribute('src', './src/images/adulto-feminino.png')
            } else if (idade < 101){
                img.setAttribute('src', './src/images/idoso-feminino.png')
            } else {
                img.setAttribute('src', './src/images/morto.png') 
            }
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
