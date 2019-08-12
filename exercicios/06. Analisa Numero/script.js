var values = []

function adicionar(num){
    if (!num.value){
        window.alert('Digite um valor!')
    }
    else {
        n = Number(num.value)
        if (n < 1 || n > 100){
            window.alert('Digite um valor válido!')
        }
        else {
            if (values.indexOf(n) != -1){
                window.alert('Este valor já foi adicionado!')
            }
            else {
                var result = document.getElementById('result')
                result.innerHTML = ''
                var adicionados = document.getElementById('adicionados')
                let item = document.createElement('option')
                item.text = `O valor ${n} foi adicionado!`

                adicionados.appendChild(item)
                values.push(n)
            }
        }
    }
}

function finalizar(){
    var soma = 0

    for (let index = 0; index < values.length; index++) {
        soma += values[index]
    }
    
    values.sort()
    
    var tamanho = values.length
    var maior = values[tamanho-1]
    var menor = values[0]
    var media = soma/tamanho

    var result = document.getElementById('result')

    result.innerHTML += `<p>Ao todo, temos ${tamanho} elementos</p>`
    result.innerHTML += `<p>Maior valor: ${maior}</p>`
    result.innerHTML += `<p>Menor valor: ${menor}</p>`
    result.innerHTML += `<p>Somatório: ${soma}</p>`
    result.innerHTML += `<p>Média: ${media}</p>`


}