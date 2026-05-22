// let idade = 30


// if (idade < 16) {

//     console.log("Voto Opcional")

// } else if (idade < 18 || idade >= 65) {
//     console.log("Voto Opcional")
// }
// else  {
//     console.log("Obrigatorio")
// }


let numero1 = 10
let numero2 = 0
let operador = "/"


if(operador == "+"){
    let resultado = numero1 + numero2
console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
}

else if (operador == "-"){
    let resultado = numero1 - numero2
console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
}

else if (operador == "*"){
    let resultado = numero1 * numero2
console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
}

else if (operador == "/"){

    if(numero2 == 0){
        console.log("Não foi possivel dividir por Zero!!")

    }
    else{

        let resultado = numero1 / numero2
    console.log(`${numero1} ${operador} ${numero2} = ${resultado}`)
    }
}