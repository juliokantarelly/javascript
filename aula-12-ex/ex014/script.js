function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var atual = new Date()
    var hora = atual.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src =  'fotomanha.png'
        document.body.style.background = '#FDB457'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#FE6600'
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#022340'
    }
}

/*
#FFCE94 - manhã
#FDB457 - manhã

#F25C05 - tarde
#BF2604 - tarde
#FE6600 - tarde

#022340 - noite
#044D8C - noite
#0669BF - noite
#0A4995 - noite
*/
