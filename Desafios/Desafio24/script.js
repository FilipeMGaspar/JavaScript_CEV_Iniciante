let cxVal1 = document.querySelector('input#cxVal1')
let CxVal2 = document.querySelector('input#CxVal2')
let DivResultado = document.querySelector('div#resultado')

function iniciar(){
    cxVal1.focus()
    cxVal1.value = ''
}

function calcular(){

    if(cxVal1.value.length==0){
        alert ('!![ERRO]!! Valor 1 não foi informado!')
        iniciar()
    }else{
        if (verificaValor(Number(cxVal1.value))){
            if(verificaValor(Number(CxVal2.value))){
                calculaMMC(Number(cxVal1.value), Number(CxVal2.value))
            }else{
                alert (`!![ERRO]!! Valor 2: ${Number(CxVal2.value)} não é válido! Indique maior que 0.`)
                CxVal2.focus()
                CxVal2.value = ''
            }
        }else{
            alert (`!![ERRO]!! Valor 1: ${Number(cxVal1.value)} não é válido! Indique maior que 0.`)
            iniciar()
        }
    }
}

function verificaValor(valor){
    if(valor > 0){
        return true
    }else{
        return false
    }
}

function desblocCxVal2(){
    CxVal2.removeAttribute('disabled');
    CxVal2.focus()
}   

function calculaMMC(valor1, valor2){
    let multval1 = 1
    let multval2 = 1
    let maior 
    if(valor1>valor2){
        maior = valor1
    }else{
        maior = valor2
    }    
    alert (maior)
    let c
    for(c=1; c<=maior; c++){
        multval1 = valor1 * $c
        multval2 = valor2 * $c
        if(multval1 == multval2){
            alert (`MMC = ${multval2}`)
        }
    }
    DivResultado.innerHTML = `<p>Mínimo Múltiplo Comum entre <strong>${valor1}</strong> e <strong>${valor2}</strong></p>`
    

}