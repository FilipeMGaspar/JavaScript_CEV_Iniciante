let txtpeso = document.getElementById('txtpeso')
let txtaltura = document.querySelector('input#txtaltura')
let divresultado = document.querySelector('div#resultado')

function iniciar(){
    txtpeso.focus()
}


function calcular(){
    if(txtpeso.value.length==0){
      alert('!! [ERRO] !! Valor do Peso não foi informado!')
      txtpeso.focus()
    }else if(txtaltura.value.length == 0){
        alert('!! [ERRO] !! Valor da Altura não foi informado!')
        txtaltura.focus()
    }else{
        if(Number(txtpeso.value)<=0){
            alert(`!! [ERRO] !! valor: ${Number(txtpeso.value)} para o Peso é incorreto!`)
            txtpeso.focus()
            txtpeso.value = ''
        }else if (Number(txtaltura.value)<=0 || Number(txtaltura.value)>=3){
            alert(`!! [ERRO] !! O valor: ${Number(txtaltura.value)} para a Altura é inválido!`)
            txtaltura.focus()
            txtaltura.value = ''
        }else{
            calculaimc(Number(txtpeso.value), Number(txtaltura.value))
        }
    }
}

function calculaimc(peso , altura){
    let imc = peso / (altura*altura)
    let arredondaimc = imc.toFixed(2)//imc.toFixed(2) coloca o valor com duas casas décimais
    verSitucao(peso, altura, arredondaimc)    
}

function verSitucao(pesa, mede, imccalc){
    let item = document.createElement('p')
    
    divresultado.innerHTML =`<p>Para o peso de ${pesa}Kg e Altura de ${mede}m</p>`
    divresultado.innerHTML +=`<p>O seu IMC é de: ${imccalc}kg/m<sup>2</sup></p>`
    
   if(imccalc<18.5){
        item.style.color = '#d23434'
        item.innerHTML = '<strong>Magreza</strong>'

        divresultado.innerHTML += `<p>Sinto muito! É muito preocupante! O seu IMC é de ${imccalc}kg/m<sup>2</sup>. Indicando: </p>`        
        divresultado.appendChild(item)

   }else if(imccalc<24.9){
        item.style.color = '#249634'
        item.innerHTML = '<strong>Normal</strong>'

        divresultado.innerHTML += `<p>Muito bem! O seu IMC é de ${imccalc}kg/m<sup>2</sup>. Indicando: </p>`        
        divresultado.appendChild(item) 

   }else if(imccalc<30){
        item.style.color = '#db7c48'
        item.innerHTML = '<strong>Sobrepeso</strong>'

         divresultado.innerHTML += `<p>É preocupante! O seu IMC é de ${imccalc}kg/m<sup>2</sup>. Indicando: </p>`        
        divresultado.appendChild(item)
   }else{ 
        
        item.style.color = '#d23434'
        item.innerHTML = '<strong>Obesidade</strong>'

        divresultado.innerHTML += `<p>Sinto muito! A sua situação é muito preocupante! O seu IMC é de ${imccalc}kg/m<sup>2</sup>. Indicando: </p>`        
        divresultado.appendChild(item)
    }

}