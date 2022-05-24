function somar(num1, num2) {

    let resultado = num1 + num2;
    if(isNaN(resultado)) {
        alert('Digite apenas números!')
    } else {
        alert('A soma de ' + num1 + ' e ' + num2 + ' é: ' + resultado)
    }
}

// console.log(somar(3,4));

export default somar;