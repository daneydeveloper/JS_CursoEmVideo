function contar(i, f, p){
    var result = document.getElementById('result')

    if (!i.value || !f.value || !p.value){
        window.alert('Preencha todos os camppos.')
    }
    else {
        var inicio = Number(i.value)
        var fim = Number(f.value)
        var passo = Number(p.value)

        if (inicio > fim){
            window.alert('Inicio maior que fim, digite novamente.')
        }
        else {
            if (passo <= 0) {
                window.alert('Valor do passo incompatível. Digite novamente')
            }
            else {
                for (var index = inicio; index <= fim; index += passo) {
                    
                    result.innerHTML += ` ${index} `
                    
                    var count = index + passo
    
                    if (count <= fim){
                        result.innerHTML += `\u{1F449}`
                    }    
                    else {
                        result.innerHTML += `\u{1F3C1}`
                    }            
                }
            }
        }
    }
}