let n1 = 9
let n2 = 8



function somar(n1, n2)
{return n1 + n2
}
function dividir (n1,n2)

{
    return n1 / n2 
}
function multiplicar (n1,n2){
    return n1 * n2
}
function subtrair (n1,n2){
    return n1 - n2
}
function potencia (n2){
    return n2**2}

let resultado = somar (n1,n2)
let resultado2 = dividir (n1,n2)
let resultado3 = multiplicar (n1,n2)
let resultado4 = subtrair (n1,n2)
let resultado5 = potencia (n2)

console.log(`a soma de ${n1} e ${n2} é de  ${resultado}`)
console.log(`a divisão de ${n1} e ${n2} é de  ${resultado2}`)
console.log (`a multiplcação de ${n1} e ${n2} é de  ${resultado3}`)
console.log (`a subtração de ${n1} e ${n2} é de  ${resultado4}`)
console.log (`a potencia ao quadrado de  ${n2} é de  ${resultado5}`)