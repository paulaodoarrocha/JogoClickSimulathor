let moedas = Number(localStorage.getItem("moedas")) || 0

document.getElementById("moedas").innerHTML = "Moedas: " + formatarMoedas(moedas)


let petEquipado = Number(localStorage.getItem("petEquipado")) || 0



function comprarPet(numero, preco){

    moedas = Number(localStorage.getItem("moedas")) || 0

    let possui = localStorage.getItem("pet" + numero) === "true"


    if(possui){
        equiparPet(numero)
        return
    }


    if(moedas >= preco){

        moedas -= preco

        localStorage.setItem("moedas", moedas)

        localStorage.setItem("pet" + numero, "true")

        alert("Pet comprado!")

        atualizarMoedas()
        atualizarBotoesPets()

    }else{

        alert("Moedas insuficientes!")

    }

}


function equiparPet(numero){


let possui = localStorage.getItem("pet" + numero) === "true"


if(!possui){
return
}


if(petEquipado == numero){

petEquipado = 0

}else{

petEquipado = numero

}


localStorage.setItem("petEquipado", petEquipado)


atualizarBotoesPets()

}



function atualizarBotoesPets(){

for(let i = 1; i <= 9; i++){

let botao = document.getElementById("petBtn" + i)

if(!botao){
continue
}

let possui = localStorage.getItem("pet" + i) === "true"


if(!possui){

document.getElementById("textoPet" + i).innerHTML = "Comprar"

continue

}


if(petEquipado == i){

document.getElementById("textoPet" + i).innerHTML = "Equipado ✔️"

}else{

document.getElementById("textoPet" + i).innerHTML = "Equipar"

}


}

}


atualizarBotoesPets()
function formatarMoedas(valor){

if(valor >= 1e12) return (valor/1e12).toFixed(1).replace(".0","") + "T"
if(valor >= 1e9) return (valor/1e9).toFixed(1).replace(".0","") + "B"
if(valor >= 1e6) return (valor/1e6).toFixed(1).replace(".0","") + "M"
if(valor >= 1e3) return (valor/1e3).toFixed(1).replace(".0","") + "K"

return valor.toString()

}