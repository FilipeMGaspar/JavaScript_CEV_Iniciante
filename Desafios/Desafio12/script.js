let selectnum = document.querySelector('select#selectnum')
let txtnun = document.querySelector('input#txtnun')
let btninserir = document.querySelector('input#btninserir')
let valores = []

function iniciar(){
    txtnun.focus()
}

function inserir(){
    

    if(txtnun.value.length==0){
        alert ('!! [ERRO] !! Número não Informado!')
        txtnun.focus()
    }
    else{
        colocanalista(Number(txtnun.value))
    }
}

function colocanalista(recebenum){
    
    let item = document.createElement('option')
   
        if(estaNaLista(recebenum)){
            valores.push(recebenum)
            item.text = `Adicionou o N.º: ${recebenum}`    
            selectnum.appendChild(item)    
            txtnun.focus()
            txtnun.value = ''
            if (valores.length == 5){
                btninserir.style.display = 'none'
                txtnun.style.display= 'none'
                MaiorEmenor()
            }    
        }else{
            alert(`!! [ERRO] !! O Número ${recebenum} encontrado na lista!`)
            txtnun.focus()
            txtnun.value = ''
        }
}

function estaNaLista(vernumnlista){
     let encontrado = valores.indexOf(vernumnlista)
    if(encontrado == -1){
        return true
    }else{
        return false
    }
}

function MaiorEmenor() {
    let divresultado = document.querySelector('div#resultado')
    let maior = valores[0]
    let menor = valores[0]

    for (pos in valores){
        if(valores[pos]>maior){
            maior = valores[pos]
        }

        if(valores[pos]<menor){
            menor = valores[pos]
        }
    }
    divresultado.innerHTML =`<p>O <strong>Maior Valor</strong> informado foi: ${maior}</p>`
    divresultado.innerHTML += `<p>O <em>Menor Valor</em> Informado foi: ${menor}</p>`
}