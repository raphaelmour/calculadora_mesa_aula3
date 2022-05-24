function multiplicar (num1, num2) {
    
    let resultado = num1 * num2;     
    if(isNaN(resultado)){
        alert('Digite apenas números!')
    } else {
        alert('A multiplicação de ' + num1 + ' por ' + num2 + ' é: ' + resultado)
    }
}

export default multiplicar;