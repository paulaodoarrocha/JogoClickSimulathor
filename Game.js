
let poder = (Number(localStorage.getItem("poder")) || 0)


let ganho = 1
let petEquipado = Number(localStorage.getItem("petEquipado")) || 0

let bonusPet = 1

switch(petEquipado){

case 1:
bonusPet = 2
break

case 2:
bonusPet = 4
break

case 3:
bonusPet = 6
break

case 4:
bonusPet = 8
break

case 5:
bonusPet = 10
break

case 6:
bonusPet = 12
break

case 7:
bonusPet = 15
break

case 8:
bonusPet = 30
break

case 9:
bonusPet = 50
break

}

let espadaEquipada = Number(localStorage.getItem("espadaEquipada")) || 0

let bonusEspada = 1

switch(espadaEquipada){

case 1:
bonusEspada = 2
break

case 2:
bonusEspada = 4
break

case 3:
bonusEspada = 6
break

case 4:
bonusEspada = 8
break

case 5:
bonusEspada = 10
break

case 6:
bonusEspada = 15
break

case 7:
bonusEspada = 20
break

case 8:
bonusEspada = 30
break

case 9:
bonusEspada = 50
break

}

let bonusRank = 1


function formatarNumero(num){

num = Number(num) || 0

const lista = [

["K",1e3],
["M",1e6],
["B",1e9],
["T",1e12],
["Qa",1e15],
["Qi",1e18],
["Sx",1e21],
["Sp",1e24],
["Oc",1e27],
["No",1e30],
["Dc",1e33],
["Ud",1e36],
["Dd",1e39],
["Td",1e42],
["Qad",1e45],
["Qid",1e48],
["Sxd",1e51],
["Spd",1e54],
["Ocvg",1e57],
["Nvgt",1e60],
["Utvg",1e63],
["Tvg",1e66],
["Qavg",1e69],
["Qivg",1e72],
["Sxvg",1e75],
["Spvg",1e78],
["Nvvg",1e84],
["Utvg2",1e87],
["Trvg",1e90]

]


for(let i = lista.length - 1; i >= 0; i--){

if(num >= lista[i][1]){

return (num / lista[i][1])
.toFixed(1)
.replace(".0","")
+
lista[i][0]

}

}

return Math.floor(num).toString()

}



function salvar(){

localStorage.setItem("poder", poder)
localStorage.setItem("ganho", ganho)

}

function calcularBonusRank(){
// Infinito
if(poder >= 1e78){

bonusRank = 5e80

}

// Supremo Final
else if(poder >= 3e70){

bonusRank = 7e69

}

// Divindade Absoluta
else if(poder >= 6e66){

bonusRank = 2e65

}

// Imperador Cósmico
else if(poder >= 6e63){

bonusRank = 7e62

}

// Rei Cósmico
else if(poder >= 2e61){

bonusRank = 1e60

}

// Transcendente
else if(poder >= 1e60){

bonusRank = 4e57

}

// Arcanjo Supremo
else if(poder >= 4e58){

bonusRank = 9e56

}

// Ancião Eterno
else if(poder >= 8e55){

bonusRank = 8e54

}

// Eterno
else if(poder >= 6e53){

bonusRank = 9e51

}

// Destruidor
else if(poder >= 9e43){

bonusRank = 1e48

}

// Lorde Galáctico
else if(poder >= 4e40){

bonusRank = 1e40

}

// Omega
else if(poder >= 1e40){

bonusRank = 1e37

}

// Cósmico
else if(poder >= 9e36){

bonusRank = 1e36

}

// Titã
else if(poder >= 2e35){

bonusRank = 1e33

}

// Supremo
else if(poder >= 1e31){

bonusRank = 1e30

}

// Lendário
else if(poder >= 9e29){

bonusRank = 9e27

}

// Divino
else if(poder >= 9e25){

bonusRank = 8e24

}

// Semideus
else if(poder >= 7e22){

bonusRank = 1e21

}

// Mítico
else if(poder >= 2e18){

bonusRank = 1e17

}
// Mestre Arcano
else if(poder >= 3e16){

bonusRank = 1e15

}

// Celestial
else if(poder >= 1e14){

bonusRank = 1e13

}

// Imensurável
else if(poder >= 9e11){

bonusRank = 2e11

}

// Lorde
else if(poder >= 1e10){

bonusRank = 3e8

}

// Hacker
else if(poder >= 2e8){

bonusRank = 1e7

}

// Elite
else if(poder >= 1e6){

bonusRank = 4e5

}

// Veterano
else if(poder >= 100000){

bonusRank = 8000

}

// Pro
else if(poder >= 10000){

bonusRank = 1500

}

// Guerreiro
else if(poder >= 500){

bonusRank = 100

}

// Iniciante
else if(poder >= 50){

bonusRank = 50

}

// Noob
else{

bonusRank = 1

}

if(bonusRank > 9e99){
    bonusRank = 9e99
}
}

const ranks = [
{ poder: 0, nome: "Noob 🤡" },
{ poder: 50, nome: "Iniciante 😊" },
{ poder: 500, nome: "Guerreiro ⚔️" },
{ poder: 10000, nome: "Pro 🥶" },
{ poder: 100000, nome: "Veterano 🛡️" },
{ poder: 1e6, nome: "Elite 💎" },
{ poder: 2e7, nome: "Hacker 😈" },
{ poder: 1e10, nome: "Lorde ⚔️" },
{ poder: 9e11, nome: "Imensurável 👽" },
{ poder: 1e14, nome: "Celestial ✨" },
{ poder: 3e16, nome: "Mestre Arcano 🔮" },
{ poder: 2e18, nome: "Mítico 🌟" },
{ poder: 7e22, nome: "Semideus ⚜️" },
{ poder: 9e25, nome: "Divino 🔱" },
{ poder: 9e29, nome: "Lendário 🏆" },
{ poder: 1e31, nome: "Supremo 🌠" },
{ poder: 2e35, nome: "Titã 🔥" },
{ poder: 9e36, nome: "Cósmico 🌌" },
{ poder: 1e40, nome: "Omega Ω" },
{ poder: 4e40, nome: "Lorde Galáctico 🌌" },
{ poder: 9e43, nome: "Destruidor 💥" },
{ poder: 6e53, nome: "Eterno ♾️" },
{ poder: 8e55, nome: "Ancião Eterno ♾️" },
{ poder: 1e60, nome: "Transcendente ⚡" },
{ poder: 2e61, nome: "Rei Cósmico 👑" },
{ poder: 6e63, nome: "Imperador Cósmico 🌠" },
{ poder: 6e66, nome: "Divindade Absoluta ⚡" },
{ poder: 3e70, nome: "Supremo Final 🌌" },
{ poder: 1e78, nome: "Imperador Universal 👑" },
{ poder: 1e95, nome: "Infinito ∞ ☠️" }
]
function atualizarProximoRank(){

let proximo = null

for(let i = 0; i < ranks.length; i++){

if(poder < ranks[i].poder){

proximo = ranks[i]

break

}

}

if(proximo){

let falta = proximo.poder - poder

document.getElementById("proximoRank").innerHTML =
"🏆 Próximo Rank:<br>" +
proximo.nome +
"<br>Faltam: " +
formatarNumero(falta)

}else{

document.getElementById("proximoRank").innerHTML =
"🏆 Rank Máximo"

}

}

function atualizarRank(){

if(poder >= 1e95){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px red,0 0 10px orange,0 0 15px yellow,0 0 20px lime,0 0 25px cyan,0 0 30px blue,0 0 35px magenta;">Infinito ∞ ☠️</span>'

}

else if(poder >= 1e87){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px #ff0000,0 0 10px #ff3300,0 0 20px #ff6600,0 0 30px #ffff00;">Imperador Universal 👑</span>'

}

else if(poder >= 3e82){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px #00ffff,0 0 20px #0088ff,0 0 30px #9400D3;">Supremo Final 🌌</span>'

}

else if(poder >= 1e78){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px violet,0 0 10px magenta,0 0 20px deeppink,0 0 30px cyan;">Divindade Absoluta ⚡</span>'

}

else if(poder >= 3e70){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px gold,0 0 10px orange,0 0 20px yellow,0 0 30px white;">Imperador Cósmico 🌠</span>'

}

else if(poder >= 6e66){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px gold,0 0 10px gold,0 0 20px white;">Rei Cósmico 👑</span>'

}

else if(poder >= 6e63){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px deepskyblue,0 0 20px white;">Arcanjo Supremo 😇</span>'

}

else if(poder >= 2e61){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px aqua,0 0 20px white;">Transcendente ⚡</span>'

}

else if(poder >= 4e58){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px white,0 0 10px silver,0 0 20px cyan;">Ancião Eterno ♾️</span>'

}

else if(poder >= 8e55){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px white,0 0 10px gray,0 0 20px cyan;">Eterno ♾️</span>'

}

else if(poder >= 6e53){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px hotpink,0 0 10px deeppink,0 0 20px red;">Destruidor 💥</span>'

}

else if(poder >= 9e43){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px magenta,0 0 10px violet,0 0 20px purple;">Omega Ω</span>'

}

else if(poder >= 4e40){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px slateblue,0 0 10px blueviolet,0 0 20px cyan;">Lorde Galáctico 🌌</span>'

}

else if(poder >= 9e36){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px purple,0 0 10px magenta,0 0 20px blue;">Cósmico 🌌</span>'

}

else if(poder >= 2e35){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px lime,0 0 10px greenyellow,0 0 20px cyan;">Titã 🔥</span>'
}
else if(poder >= 1e31){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px #00ffff,0 0 20px #00bfff;">Supremo 🌠</span>'

}

else if(poder >= 9e29){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px gold,0 0 10px yellow,0 0 20px orange;">Lendário 🏆</span>'

}

else if(poder >= 9e25){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px gold,0 0 10px orange,0 0 20px red;">Divino 🔱</span>'

}

else if(poder >= 7e22){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px lawngreen,0 0 10px lime,0 0 20px green;">Semideus ⚜️</span>'

}

else if(poder >= 2e18){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px violet,0 0 10px deeppink,0 0 20px magenta;">Mítico 🌟</span>'

}

else if(poder >= 3e16){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px dodgerblue,0 0 10px cyan,0 0 20px white;">Mestre Arcano 🔮</span>'

}

else if(poder >= 1e14){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px blueviolet,0 0 10px violet,0 0 20px magenta;">Celestial ✨</span>'

}

else if(poder >= 9e11){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px lime,0 0 10px lawngreen,0 0 20px green;">Imensurável 👽</span>'

}

else if(poder >= 1e10){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px crimson,0 0 10px red,0 0 20px orange;">Lorde ⚔️</span>'

}

else if(poder >= 2e7){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px red,0 0 10px crimson,0 0 20px darkred;">Hacker 😈</span>'

}

else if(poder >= 1e6){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px dodgerblue,0 0 20px blue;">Elite 💎</span>'

}

else if(poder >= 100000){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px deepskyblue,0 0 10px cyan;">Veterano 🛡️</span>'

}

else if(poder >= 10000){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px aqua;">Pro 🥶</span>'

}

else if(poder >= 500){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px lime,0 0 10px green;">Guerreiro ⚔️</span>'

}

else if(poder >= 50){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px #00FF7F,0 0 10px lime;">Iniciante 😊</span>'

}

else{

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px gray;">Noob 🤡</span>'

}
atualizarProximoRank()
}



function atualizarTela(){

calcularBonusRank()

document.getElementById("poder").innerHTML =
formatarNumero(poder)


document.getElementById("ganho").innerHTML =
"Voce esta ganhando +" + formatarNumero(Math.max(1, Math.round(ganho * bonusRank * bonusPet  * bonusEspada))) + " poder"


atualizarRank()

}



function treinar(){

calcularBonusRank()



poder += Math.max(1, Math.round(ganho * bonusRank * bonusPet  * bonusEspada))

salvar()

atualizarTela()

}



function carregarJogo(){

atualizarTela()

}


carregarJogo()

// =====================
// ACESSÓRIOS
// =====================


let accComprado = localStorage.getItem("accComprado") === "true"

let accCompradoOuro = localStorage.getItem("accCompradoOuro") === "true"

let accCompradoDiamante = localStorage.getItem("accCompradoDiamante") === "true"

let accCompradoAmetista = localStorage.getItem("accCompradoAmetista") === "true"

let accCompradoAtomica = localStorage.getItem("accCompradoAtomica") === "true"

let accCompradoAntimateria = localStorage.getItem("accCompradoAntimateria") === "true"


function atualizarDepoisCompra(){

salvar()

atualizarTela()

}

if(accComprado){
    ganho *= 3
}

if(accCompradoOuro){
    ganho *= 5
}

if(accCompradoDiamante){
    ganho *= 7
}

if(accCompradoAmetista){
    ganho *= 10
}

if(accCompradoAtomica){
    ganho *= 15
}

if(accCompradoAntimateria){
    ganho *= 20
}


// Colar Prata

function acc(){

if(accComprado){

alert("Voce ja tem esse Item!!!")
return

}


if(poder >= 50000){

poder -= 50000

ganho *= 3

accComprado = true

localStorage.setItem("accComprado", "true")

alert("Comprado com sucesso")

atualizarDepoisCompra()

}

else{

alert("Poder Insuficiente")

}

}




// Colar Ouro

function acc2(){

if(accCompradoOuro){

alert("Voce ja tem esse Item!!!")
return

}

accCompradoOuro = true

if(poder >= 1e10){

poder -= 1e10

ganho *= 5

localStorage.setItem("accCompradoOuro", "true")

alert("Comprado com sucesso")

atualizarDepoisCompra()

}

else{

alert("Poder Insuficiente")

}

}




// Pingente Diamante

function acc3(){

if(accCompradoDiamante){

alert("Voce ja tem esse Item!!!")
return

}


if(poder >= 2e16){

poder -= 2e16

ganho *= 7

accCompradoDiamante = true

localStorage.setItem("accCompradoDiamante", "true")

alert("Comprado com sucesso")

atualizarDepoisCompra()

}

else{

alert("Poder Insuficiente")

}

}




// Ametista

function acc4(){

if(accCompradoAmetista){

alert("Voce ja tem esse Item!!!")
return

}


if(poder >= 3e23){

poder -= 3e23

ganho *= 10

accCompradoAmetista = true

localStorage.setItem("accCompradoAmetista", "true")

alert("Comprado com sucesso")

atualizarDepoisCompra()

}

else{

alert("Poder Insuficiente")

}

}




// Fissão Atômica

function acc5(){

if(accCompradoAtomica){

alert("Voce ja tem esse Item!!!")
return

}


if(poder >= 9e29){

poder -= 9e29

ganho *= 20

accCompradoAtomica = true

localStorage.setItem("accCompradoAtomica", "true")

alert("Comprado com sucesso")

atualizarDepoisCompra()

}

else{

alert("Poder Insuficiente")

}

}




// Antimatéria

function acc6(){

if(accCompradoAntimateria){

alert("Voce ja tem esse Item!!!")
return

}


if(poder >= 2e36){

poder -= 2e36

ganho *= 50

accCompradoAntimateria = true

 localStorage.setItem("accCompradoAntimateria", "true")

alert("Comprado com sucesso")

atualizarDepoisCompra()

}

else{

alert("Poder Insuficiente")

}

}

// =====================
// AUTO CLICK
// =====================


let autoClick = localStorage.getItem("autoClick") === "1"
let autoClickId = null



function iniciarAutoClick(){

if(autoClickId){
return
}


autoClickId = setInterval(function(){

treinar()

},50)

}



function automatico(){

if(autoClick){

alert("Voce ja tem esse Item!!!")
return

}


if(poder >= 5000){

poder -= 5000

autoClick = true


localStorage.setItem("autoClick","1")


alert("Comprado com sucesso")


iniciarAutoClick()


document.getElementById("automatico").innerHTML =
"Automatico ⚡"


atualizarTela()



}
else{

alert("Poder Insuficiente")

}

}




function carregarAutoClick(){

if(autoClick){

document.getElementById("automatico").innerHTML =
"Automatico ⚡"


iniciarAutoClick()

}

}


carregarAutoClick()

let poderJogador = Number(localStorage.getItem("poder")) || 0


let vidaBoss = 0
let danoJogador = 1



function atualizarDano(){

danoJogador = Math.max(1, Math.floor(poderJogador * 0.1))

}



function escolherBoss(numero){


if(numero == 1){

vidaBoss = 1000

}


else if(numero == 2){

vidaBoss = 100000

}


else if(numero == 3){

vidaBoss = 10000000

}


atualizarDano()


document.getElementById("vidaBoss").innerHTML =
"Vida: " + vidaBoss


document.getElementById("dano").innerHTML =
"Dano: " + danoJogador


}



function atacarBoss(){


vidaBoss -= danoJogador


if(vidaBoss <= 0){

vidaBoss = 0

alert("Boss derrotado!")


}


document.getElementById("vidaBoss").innerHTML =
"Vida: " + vidaBoss


}
