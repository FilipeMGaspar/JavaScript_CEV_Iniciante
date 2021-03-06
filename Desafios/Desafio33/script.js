let cJuros = document.querySelector('input#cJuros')

let cValEmpres = document.querySelector('input#cValEmpres')

let cxParcelar = document.querySelector('input#cxParcelar')

let CSelDetalhes = document.querySelector('select#CSelDetalhes')


function iniciar(){
    cValEmpres.focus()
    cValEmpres.value= ''
}

function ativaCxJuros(){
    if(verificaValorEmprestado(Number(cValEmpres.value))){
        cJuros.removeAttribute('readonly')
        cJuros.focus()
    }else{
        alert(`!! [ERRO] !! O Valor ${Number(cValEmpres.value)} não é válido para empréstimo. Valor minimo de 250€`)
        caixaDeJurosativa()
    }
}

function ativaCXparcelar(){
    if(validaJuros(Number(cJuros.value))){
        cxParcelar.removeAttribute('readonly')
        cxParcelar.focus()
    }else{
        caixaDeJurosativa()
    }
}

function calcular(){
        
    if(cValEmpres.value.length == 0){
        alert ('!! [ERRO] !! Valor de Empréstimo não indicado.')
        iniciar()
    }else{
        if (cJuros.value.length == 0){
            alert('!! [ERRO] !! Valor de juros não indicado')
            cJuros.focus()
            cJuros.value= ''
        }else{
            if(validaJuros(Number(cJuros.value))){
                                /* Vamos adicinar num select e ativar  a cx de parcelas e btn de parcelar*/ 
                if(validaNrParcelas(Number(cxParcelar.value))){
                    colocanaLista(Number(cValEmpres.value), Number(cJuros.value), Number(cxParcelar.value))
                }else{
                    alert(`!! [ERRO] !! Dividir o valor ${Number(cValEmpres.value)}€ em ${Number(cxParcelar.value)} meses não é possivel. Valor minimo 3 Meses`)
                    cxParcelar.focus()
                    cxParcelar.value='3'
                }
               
            }else{
                alert(`!! [ERRO] !! O valor ${Number(cJuros.value)} não é válido indique entre 2% e 26%.`)
                cJuros.focus()
                cJuros.value= ''
            }
        }
    }
}

function verificaValorEmprestado(Vempresta){
    if(Vempresta>=250){
        return true
    }else{
        return false
    }
}

function caixaDeJurosativa(){
    cValEmpres.value= '250'
    cJuros.removeAttribute('readonly')
    cJuros.focus()
}

function validaJuros(valorDosJuros){
    if(valorDosJuros>=2 && valorDosJuros<=26){
        return true
    }else{
        return false
    }
}


function validaNrParcelas(numDeParcelas){
    if(numDeParcelas>=3){
        return true
    }else{
        return false
    }
}

function colocanaLista(valorEmp, Porcenjuros, nrVezes){
    let btnSimular = document.querySelector('input#btnSimular')

    btnSimular.style.display='none'

    let valorJuros= valorEmp*Porcenjuros/100
    let totalAPagar = valorJuros+valorEmp
    let valorPorMes = totalAPagar/nrVezes

    let itemOption1 = document.createElement('option')
    let itemOption2 = document.createElement('option')
    let itemOption3 = document.createElement('option')
    let itemOption4 = document.createElement('option')
    let itemOption5 = document.createElement('option')
    let itemOption6 = document.createElement('option')
    
    itemOption1.text=`Valor: ${valorEmp}€`
    itemOption2.text=`Juro: ${Porcenjuros}%`
    itemOption3.text=`Dividir em: ${nrVezes} Meses`
    itemOption4.text=`Mais : ${valorJuros}€ de juros`
    itemOption5.text=`Total : ${totalAPagar}€ a Pagar`
    itemOption6.text=`Pagará : ${valorPorMes}€ por mês`


    CSelDetalhes.appendChild(itemOption1)
    CSelDetalhes.appendChild(itemOption2)
    CSelDetalhes.appendChild(itemOption3)
    CSelDetalhes.appendChild(itemOption4)
    CSelDetalhes.appendChild(itemOption5)
    CSelDetalhes.appendChild(itemOption6)
}