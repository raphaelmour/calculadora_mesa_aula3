function dividir(num1, num2) {
    
    let resultado = num1 / num2
    if (num1 == 0 || num2 == 0) {
        alert('Não se pode dividir por zero');
    } else if (isNaN(resultado)) {
        alert('Digite apenas números!')
    } else {
        alert('A divisão de ' + num1 + ' por ' + num2 + ' é: ' + resultado)
    }
}

export default dividir;