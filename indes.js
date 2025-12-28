//variaveis
let vitoria = 500
let derrota = 10

function calvitoria(vitorias, derrotas) {
    let total = vitorias - derrotas
    return total
}
function ranking(total) {
    if (total <= 10) {
        return 'Ferro!'
    } else if (total >= 11 && total <= 20) {
        return 'Bronze!'
    } else if (total >= 21 && total <= 50) {
        return 'Prata!'
    } else if (total >= 51 && total <= 80) {
        return 'Ouro!'
    } else if (total >= 81 && total <= 90) {
        return 'Diamante!'
    } else if (total >= 91 && total <= 100) {
        return 'Lendário!'
    } else if (total > 100) {
        return 'Imortal!'
    }
}

let total = calvitoria(vitoria, derrota)
//console.log(ranking(total))
function mensagemFinal() {
    return `O jogador teve ${vitoria} vitórias e ${derrota} derrotas, totalizando ${total} pontos e seu ranking é: ${ranking(total)}`
}
console.log(mensagemFinal())