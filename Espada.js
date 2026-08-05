let espadaEquipada = Number(localStorage.getItem("espadaEquipada")) || 0

let bonusEspada = 1



// EQUIPAR ESPADA

function equiparEspada(numero){

let possui = localStorage.getItem("espada" + numero) === "true"


if(!possui){

alert("Você não possui essa espada!")

return

}



if(espadaEquipada == numero){

espadaEquipada = 0

}else{

espadaEquipada = numero

}



localStorage.setItem("espadaEquipada", espadaEquipada)


atualizarBotoesEspadas()

atualizarBonusEspada()

}



// ATUALIZA OS BOTÕES

function atualizarBotoesEspadas(){


for(let i = 1; i <= 9; i++){


let botao = document.getElementById("espadaBtn" + i)


if(!botao){
continue
}



let possui = localStorage.getItem("espada" + i) === "true"



if(!possui){

botao.innerHTML = "Bloqueada 🔒"

continue

}



if(espadaEquipada == i){

botao.innerHTML = "Desequipar ❌"

}else{

botao.innerHTML = "Equipar"

}


}


}



// BÔNUS DAS ESPADAS

function atualizarBonusEspada(){


bonusEspada = 1


if(espadaEquipada == 1){
bonusEspada = 2
}


if(espadaEquipada == 2){
bonusEspada = 3
}


if(espadaEquipada == 3){
bonusEspada = 4
}


if(espadaEquipada == 4){
bonusEspada = 6
}


if(espadaEquipada == 5){
bonusEspada = 8
}


if(espadaEquipada == 6){
bonusEspada = 10
}


if(espadaEquipada == 7){
bonusEspada = 12
}


if(espadaEquipada == 8){
bonusEspada = 15
}


if(espadaEquipada == 9){
bonusEspada = 30
}


}



// DROP DAS ESPADAS

function droparEspada(numero, chance){


let sorte = Math.random() * 100



if(sorte <= chance){



if(localStorage.getItem("espada" + numero) !== "true"){


localStorage.setItem("espada" + numero,"true")


alert("🗡️ Você conseguiu uma nova espada!")


}



}


}



// CARREGAR AO ABRIR

atualizarBonusEspada()

atualizarBotoesEspadas()