let CxNum = document.querySelector('input#CxNum')
let divReseultado = document.querySelector('div#resultado')

document.onload = iniciar()

function iniciar(){
    CxNum.focus()
    CxNum.value = ''
}

function calcular(){
    if(CxNum.value.length==0){
        alert ('!![ERRO]!! Valor não informado!')
        iniciar()
    }else{
        let fat = Number(CxNum.value)

        for(let i=1; i<=fat; i++){
            divReseultado.innerHTML += `${i}`
        }
    }
}