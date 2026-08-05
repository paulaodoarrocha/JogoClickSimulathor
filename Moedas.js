let moedas = Number(localStorage.getItem("moedas")) || 0

function salvarMoedas(){
    localStorage.setItem("moedas", moedas)
}

function ganharMoedas(valor){
    moedas += valor
    salvarMoedas()
    atualizarMoedas()
}

function atualizarMoedas(){

    moedas = Number(localStorage.getItem("moedas")) || 0

    let elemento = document.getElementById("moedas")

    if(elemento){
        elemento.innerHTML = "Moedas: " + formatarMoedas(moedas)
    }

}

function formatarMoedas(valor){

    if(valor >= 1e12) return (valor/1e12).toFixed(1).replace(".0","") + "T"
    if(valor >= 1e9) return (valor/1e9).toFixed(1).replace(".0","") + "B"
    if(valor >= 1e6) return (valor/1e6).toFixed(1).replace(".0","") + "M"
    if(valor >= 1e3) return (valor/1e3).toFixed(1).replace(".0","") + "K"

    return valor.toString()
}

atualizarMoedas()