function verificar(anoNascimento, m, f){
    var nasc = anoNascimento.value
    var masc = m.checked
    var fem = f.checked
    var data = new Date()
    var anoAtual = data.getFullYear()
    var result = document.getElementById('result')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (nasc < 1919 || nasc > 2019){
        window.alert('Ano de nascimento inválido, digite novamente.')
    } else {
        var idade = anoAtual - nasc
        if (masc == true){
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'imagens/h-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/h-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/h-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/h-idoso.png')
            }
        }
        else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src', 'imagens/m-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/m-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/m-adulto.png')
            } else {
                img.setAttribute('src', 'imagens/m-idoso.png')
            }
        }
        result.innerHTML = `<p>Você é ${genero} e tem ${idade} anos</p>`
        result.appendChild(img)
    }

}