function subtrair(num1, num2) {

    let resultado = num1 - num2;
    if(isNaN(resultado)) {
        alert('Digite apenas números!')
    } else {
        alert('A subtração de ' + num1 + ' por ' + num2 + ' é: ' + resultado)
    }
}

export default subtrair;

//resultado = subtrair(5,2);
//console.log(resultado); 