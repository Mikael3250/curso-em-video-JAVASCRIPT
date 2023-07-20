function carregar () {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        img.src = './src/images/manha.png';
        document.body.style.background = 'crimsom'
    } else if (hora >= 12 && hora <= 18) {
        img.src = './src/images/tarde.png';
        document.body.style.background = '#00F8F9'
    } else {
        img.src = './src/images/anoitecer.png';
        document.body.style.background = '#131313'
    }
};
