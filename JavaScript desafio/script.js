//1.Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert(`Hello World`);

//2.Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let n1 = prompt(`Digite um número`)
let n2 = prompt(`Digite o segundo número`)
let result = Number(n1) + Number(n2)
alert(`A soma é ${result}`)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let value = 1
if (typeof value === `number`){
    alert(`Its a number`)
}else {
    alert(`Is not a number`)
}

//4.Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let second_value = `Felipe`
if (typeof second_value === `string`){
    alert(`Its a String`)
}else {
    alert(`Is not a string`)
}
//5.Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let script = true
if(typeof script === `boolean`){
    alert(`its a boolean`)
}else {
    alert(`Its a boolean`)
}
//6.Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let firstNumber = prompt("Digite o primeiro númemro")
let secondNumber = prompt("Digite o segundo número")
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)
const sub = firstNumber - secondNumber
alert("Subtração: " + sub)
//7.Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let numberOne = prompt("Digite o primeiro númemro")
let numberTwo = prompt("Digite o segundo número")
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)
const mult = numberOne * numberTwo
alert("Multiplicação: " + mult)
//8.Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let divOne = prompt("Digite o primeiro númemro")
let divTwo = prompt("Digite o segundo número")
divOne = Number(divOne)
divTwo = Number(divTwo)
const div = divOne / divTwo
alert("Divisão: " + div)
//9.Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let numberOdd = prompt(`Digite um número aleatorio`)
if(numberOdd % 2 === 0){
    alert(`Esse número é par`)
}else{
    alert(`Esse número não é par`)
}
//10.Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let numberEven = prompt(`Digite um número aleatorio`)
if(numberEven % 2 === 1){
    alert(`Esse número é ímpar`)
}else{
    alert(`Esse número não é ímpar`)
}