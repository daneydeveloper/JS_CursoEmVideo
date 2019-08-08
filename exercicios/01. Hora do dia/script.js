function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora <= 12) {
        msg.innerHTML = `Bom dia, agora são ${hora}:${minutos}h`
        imagem.src = 'imagens/dia.png'
        document.body.style.background = '#e2cd9f'

    } else if (hora > 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora}:${minutos}h`
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
        
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora}:${minutos}h`
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
    }
    
}