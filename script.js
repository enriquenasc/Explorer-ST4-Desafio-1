let numberOne = prompt("Digite o 1° valor: ")
let numberTwo = prompt("Digite o 2° valor: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo
const equals = numberOne == numberTwo

alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + multi)
alert("A divisão dos dois números é: " + div)
alert("O resto da divisão dos dois números é: " + restDiv)
if(sum%2 == 0){
	alert("A soma dos dois números é par: " + sum);
}else{
	alert("A soma dos dois números é ímpar: " + sum);
}

if(numberOne == numberTwo){
	alert("Os números inseridos são iguais.");
}else{
	alert("Os números inseridos são diferentes.");
}