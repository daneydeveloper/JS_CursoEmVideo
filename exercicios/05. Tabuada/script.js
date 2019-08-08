function tabuada(numero){
    if (!numero.value){
        window.alert('Digite um valor!')
    }
    else {
        var num = Number(numero.value)
        var result = document.getElementById('result')
        result.innerHTML = ''
        
        for (let index = 1; index < 11; index++) {
            let item = document.createElement('option')
            item.text = `${num} x ${index} = ${num*index}`
            result.appendChild(item)
        }
    }
}