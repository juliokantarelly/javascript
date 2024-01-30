let num = document.getElementById('numtxt')
let list = document.getElementById('lista')
let res = document.getElementById('res')
let grupo = []
list.innerHTML = ''

function isnum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
}

function inlist(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnum(num.value) && !inlist(num.value, grupo)) {
        grupo.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já adicionado.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (grupo.length == 0) {
        window.alert('Adicione valores antes de finalizar.')   
    } else {
        let total = grupo.length
        let maior = grupo[0]
        let menor = grupo[0]
        let soma = 0
        let media = 0
        for (let pos in grupo) {
            soma += grupo[pos]
            if (grupo[pos] > maior) {
                maior = grupo[pos]
            }
            if (grupo[pos] < menor) {
                menor = grupo[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>O total de números na lista é ${total}</p>`
        res.innerHTML += `<p>O maior número da lista é ${maior}</p>`
        res.innerHTML += `<p>O menor número da lista é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores listados é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores listados é ${media}</p>`
    }
}