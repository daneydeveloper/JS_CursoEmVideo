function verificar(nascimento, masc, fem){
    var date = new Date()
    var currentYear = date.getFullYear()
    var year = currentYear - nascimento.value
    var male = masc.checked
    var female = masc.checked 
    var result = document.getElementById('result')
    var img = document.createElement('img')

    img.setAttribute('id', 'foto')

    if (nascimento.value < 1900 || nascimento.value > currentYear) {
        window.alert('Você digitou um ano incompatível, digite novamente.')
    } else {
        if (male == true){
            var genero = 'homem'
            if (year >= 0 && year < 10){
                img.setAttribute('src', 'imagens/h-crianca.png')
            } else if (year < 20){
                img.setAttribute('src', 'imagens/h-jovem.png')
            } else if (year < 50){
                img.setAttribute('src', 'imagens/h-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/h-idoso.png')
            }
        } else {
            var genero = 'Mulher'
            if (year >= 0 && year < 10){
                img.setAttribute('src', 'imagens/m-crianca.png')
            } else if (year < 20){
                img.setAttribute('src', 'imagens/m-jovem.png')
            } else if (year < 50){
                img.setAttribute('src', 'imagens/m-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/m-idoso.png')
            }
        }
        result.innerHTML = `Você é ${genero} e tem ${year} anos`
        result.appendChild(img)
    }
}