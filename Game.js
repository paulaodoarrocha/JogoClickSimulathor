
let poder = (Number(localStorage.getItem("poder")) || 0)

let ganho = Number(localStorage.getItem("ganho")) || 1

let accEquipado = localStorage.getItem("accEquipado") || ""


let petEquipado = Number(localStorage.getItem("petEquipado")) || 0

let bonusPet = 1

switch(petEquipado){

case 1:
bonusPet = 5
break

case 2:
bonusPet = 9
break

case 3:
bonusPet = 15
break

case 4:
bonusPet = 30
break

case 5:
bonusPet = 50
break

case 6:
bonusPet = 90
break

case 7:
bonusPet = 500
break

case 8:
bonusPet = 1000
break

case 9:
bonusPet = 5000
break

}

let espadaEquipada = Number(localStorage.getItem("espadaEquipada")) || 0

let bonusEspada = 1

switch(espadaEquipada){

case 1:
bonusEspada = 5
break

case 2:
bonusEspada = 10
break

case 3:
bonusEspada = 20
break

case 4:
bonusEspada = 40
break

case 5:
bonusEspada = 60
break

case 6:
bonusEspada = 80
break

case 7:
bonusEspada = 500
break

case 8:
bonusEspada = 2500
break

case 9:
bonusEspada = 10000
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
["Nvvg",1e81],
["Uqnd",1e84],
["Qrdvg",1e87],
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

if(poder >= 1e90){
bonusRank = 1e80
}

else if(poder >= 3e87){
bonusRank = 6e76
}

else if(poder >= 3e84){
bonusRank = 2e74
}

else if(poder >= 3e81){
bonusRank = 2e72
}

else if(poder >= 3e78){
bonusRank = 3e70
}


else if(poder >= 3e75){
bonusRank = 1e66
}

else if(poder >= 3e72){
bonusRank = 5e64
}

else if(poder >= 6e69){
bonusRank = 1e62
}

else if(poder >= 6e66){
bonusRank = 5e58
}

else if(poder >= 6e63){
bonusRank = 9e55
}

else if(poder >= 5e60){
bonusRank = 9e52
}

else if(poder >= 4e57){
bonusRank = 7e50
}

else if(poder >= 9e54){
bonusRank = 4e48
}

else if(poder >= 6e51){
bonusRank = 6e45
}

else if(poder >= 3e48){
bonusRank = 5e41
}

else if(poder >= 1e45){
bonusRank = 2e39
}

else if(poder >= 1e42){
bonusRank = 1e36
}

else if(poder >= 9e39){
bonusRank = 1e33
}

else if(poder >= 2e36){
bonusRank = 5e31
}

else if(poder >= 9e33){
bonusRank = 3e28
}

else if(poder >= 3e30){
bonusRank = 1e25
}

else if(poder >= 9e25){
bonusRank = 1e23
}

else if(poder >= 7e22){
bonusRank = 5e19
}

else if(poder >= 2e18){
bonusRank = 9e16
}

else if(poder >= 3e16){
bonusRank = 5e13
}

else if(poder >= 1e14){
bonusRank = 1e12
}

else if(poder >= 9e13){
bonusRank = 5e9
}

else if(poder >= 1e10){
bonusRank = 1e8
}

else if(poder >= 2e8){
bonusRank = 1e6
}

else if(poder >= 1e6){
bonusRank = 5000
}

else if(poder >= 100000){
bonusRank = 1000
}

else if(poder >= 10000){
bonusRank = 200
}

else if(poder >= 500){
bonusRank = 50
}

else if(poder >= 50){
bonusRank = 10
}

else{
bonusRank = 1
}


if(bonusRank > 9e99){
    bonusRank = 9e99
}
}

const ranks = [

{poder:0, nome:"Noob 🤡", cor:"gray"},

{poder:50, nome:"Iniciante 😊", cor:"#00ff7f"},

{poder:500, nome:"Guerreiro ⚔️", cor:"lime"},

{poder:10000, nome:"Pro 🥶", cor:"cyan"},

{poder:100000, nome:"Veterano 🛡️", cor:"deepskyblue"},

{poder:1e6, nome:"Elite 💎", cor:"blueviolet"},

{poder:2e8, nome:"Hacker 😈", cor:"red"},

{poder:1e10, nome:"Lorde ⚔️", cor:"crimson"},

{poder:9e13, nome:"Imensurável 👽", cor:"lime"},

{poder:1e14, nome:"Celestial ✨", cor:"violet"},

{poder:3e16, nome:"Mestre Arcano 🔮", cor:"cyan"},

{poder:2e18, nome:"Mítico 🌟", cor:"magenta"},

{poder:7e22, nome:"Semideus ⚜️", cor:"gold"},

{poder:9e25, nome:"Divino 🔱", cor:"orange"},

{poder:3e30, nome:"Lendário 🏆", cor:"yellow"},

{poder:9e33, nome:"Supremo 🌠", cor:"cyan"},

{poder:2e36, nome:"Titã 🔥", cor:"lime"},

{poder:9e39, nome:"Cósmico 🌌", cor:"purple"},

{poder:1e42, nome:"Omega Ω", cor:"blueviolet"},

{poder:1e45, nome:"Lorde Galáctico 🌌", cor:"cyan"},

{poder:3e48, nome:"Destruidor 💥", cor:"red"},

{poder:6e51, nome:"Eterno ♾️", cor:"white"},

{poder:9e54, nome:"Ancião Eterno ♾️", cor:"silver"},

{poder:4e57, nome:"Transcendente ⚡", cor:"aqua"},

{poder:5e60, nome:"Rei Cósmico 👑", cor:"gold"},

{poder:6e63, nome:"Imperador Cósmico 🌠", cor:"orange"},

{poder:6e66, nome:"Divindade Absoluta ⚡", cor:"yellow"},

{poder:6e69, nome:"Supremo Final 🌌", cor:"cyan"},

{poder:3e72, nome:"Imperador Universal 👑", cor:"gold"},

{poder:3e75, nome:"Infinito ∞ ☠️", cor:"white"},

{poder:3e78, nome:"???????????", cor:"red"},

{poder:3e81, nome:"Error (𓁹 𓁹)𓁹‿𓁹👁️⃤", cor:"magenta"},

{poder:3e84, nome:"Rei Do Six Seven👑", cor:"Azure"},

{poder:3e87, nome:"DESEMPREGADO 💀", cor:"black"},

{poder:1e90, nome:"COMO VOCÊ CHEGOU A ISSO? 👁️", cor:"white"}

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

if(poder >= 1e90){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 5px red,
0 0 10px orange,
0 0 15px yellow,
0 0 20px lime,
0 0 25px cyan,
0 0 30px blue,
0 0 40px magenta;">
COMO VOCÊ CHEGOU A ISSO? 👁️♾️
</span>`

}

else if(poder >= 3e87){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 10px crimson,
0 0 20px red,
0 0 30px orange,
0 0 40px yellow;">
DESEMPREGADO 👑
</span>`

}



else if(poder >= 3e84){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 5px red,
0 0 10px orange,
0 0 15px yellow,
0 0 20px lime,
0 0 25px cyan;">
Rei Do Six Seven👑
</span>`

}


else if(poder >= 3e81){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 10px red,
0 0 20px purple,
0 0 30px cyan,
0 0 40px blue;">
Error (𓁹 𓁹)𓁹‿𓁹👁️⃤
</span>`

}

else if(poder >= 3e78){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 10px red,
0 0 20px orange,
0 0 30px yellow;">
???????????
</span>`

}

else if(poder >= 3e75){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 10px cyan,
0 0 20px blue,
0 0 30px purple,
0 0 40px magenta;">
Infinito ∞ ☠️
</span>`

}

else if(poder >= 3e72){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 10px gold,
0 0 20px orange,
0 0 30px red;">
Imperador Universal 👑
</span>`

}

else if(poder >= 6e69){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px cyan,
0 0 18px blue,
0 0 35px purple;">
Supremo Final 🌌
</span>`

}

else if(poder >= 6e66){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px yellow,
0 0 18px gold,
0 0 35px orange;">
Divindade Absoluta ⚡
</span>`

}

else if(poder >= 6e63){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px cyan,
0 0 18px aqua,
0 0 35px white;">
Imperador Cósmico 🌠
</span>`

}

else if(poder >= 5e60){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px gold,
0 0 18px yellow,
0 0 35px red;">
Rei Cósmico 👑
</span>`

}

else if(poder >= 4e57){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px cyan,
0 0 18px blue,
0 0 35px purple;">
Transcendente ⚡
</span>`

}

else if(poder >= 9e54){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px white,
0 0 18px silver,
0 0 35px cyan;">
Ancião Eterno ♾️
</span>`

}

else if(poder >= 6e51){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px white,
0 0 18px gray,
0 0 35px blue;">
Eterno ♾️
</span>`

}

else if(poder >= 3e48){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px pink,
0 0 18px magenta,
0 0 35px red;">
Destruidor 💥
</span>`

}

else if(poder >= 1e45){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px purple,
0 0 18px violet,
0 0 35px blue;">
Lorde Galáctico 🌌
</span>`

}

else if(poder >= 1e42){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px blue,
0 0 18px cyan,
0 0 35px white;">
Omega Ω
</span>`

}

else if(poder >= 2e36){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px lime,
0 0 18px green,
0 0 35px cyan;">
Cósmico 🌌
</span>`

}

else if(poder >= 9e33){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px orange,
0 0 18px red,
0 0 35px yellow">
Titã 🔥
</span>`

}

else if(poder >= 3e30){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px gold,
0 0 18px orange,
0 0 35px red;">
Supremo 🌠
</span>`

}

else if(poder >= 9e25){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px red,
0 0 18px orange,
0 0 35px yellow;">
Divino 🔱
</span>`

}

else if(poder >= 7e22){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px green,
0 0 18px lime,
0 0 35px cyan;">
Semideus ⚜️
</span>`

}

else if(poder >= 2e18){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px violet,
0 0 18px pink,
0 0 35px magenta;">
Mítico 🌟
</span>`

}

else if(poder >= 3e16){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px blue,
0 0 18px cyan,
0 0 35px white;">
Mestre Arcano 🔮
</span>`

}

else if(poder >= 1e14){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px purple,
0 0 18px violet,
0 0 35px magenta;">
Celestial ✨
</span>`

}

else if(poder >= 9e13){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px lime,
0 0 18px green,
0 0 35px yellow;">
Imensurável 👽
</span>`

}

else if(poder >= 1e10){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px red,
0 0 18px crimson,
0 0 35px orange;">
Lorde ⚔️
</span>`

}

else if(poder >= 2e8){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px purple,
0 0 18px red,
0 0 35px magenta;">
Hacker 😈
</span>`

}

else if(poder >= 1e6){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px cyan,
0 0 18px blue,
0 0 35px purple;">
Elite 💎
</span>`

}

else if(poder >= 100000){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px cyan,
0 0 18px aqua;">
Veterano 🛡️
</span>`

}

else if(poder >= 10000){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px lime,
0 0 18px green;">
Pro 🥶
</span>`

}

else if(poder >= 500){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px blue,
0 0 18px cyan;">
Guerreiro ⚔️
</span>`

}

else if(poder >= 50){

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px lime,
0 0 18px green;">
Iniciante 😊
</span>`

}

else{

document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 5px gray;">
Noob 🤡
</span>`

}

}





function atualizarTela(){

calcularBonusRank()

document.getElementById("poder").innerHTML =
formatarNumero(poder)


document.getElementById("ganho").innerHTML =
"Voce esta ganhando +" + formatarNumero(Math.max(1, Math.round(ganho * bonusRank * bonusPet  * bonusEspada))) + " poder"


atualizarRank()
atualizarProximoRank()
}

let click = new Audio("Click.mp3")
click.volume = 0.09
click.loop = false


Click.addEventListener("click", function(){
  click.play()
})



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



let comprou = new Audio("Comprar.mp3")
comprou.volume = 0.6




function atualizarAcc(){

if(accEquipado === "prata"){
    ganho = 3
}

else if(accEquipado === "ouro"){
    ganho = 6
}

else if(accEquipado === "diamante"){
    ganho = 12
}

else if(accEquipado === "ametista"){
    ganho = 30
}

else if(accEquipado === "atomica"){
    ganho = 50
}

else if(accEquipado === "antimateria"){
    ganho = 50
}

else{
    ganho = 1
}

}

atualizarAcc()

// Colar Prata

function acc(){

if(accComprado){

  accEquipado = "prata"
  localStorage.setItem("accEquipado", accEquipado)
comprou.play()
ganho = 3
localStorage.setItem("ganho", ganho)

  alert("Acessório Prata equipado!")
  return

}


if(poder >= 50000){
  


poder -= 50000

accComprado = true


ganho = 3
localStorage.setItem("ganho", ganho)

localStorage.setItem("accComprado", "true")

alert("Comprado com sucesso")

atualizarDepoisCompra()

}

else{

alert("Poder insuficiente")

}

}



// Colar Ouro

function acc2(){

if(accCompradoOuro){

accEquipado = "ouro"
localStorage.setItem("accEquipado", accEquipado)
comprou.play()
ganho = 6
localStorage.setItem("ganho", ganho)

alert("Acessório Ouro equipado!")
return

}


if(poder >= 1e10){

poder -= 1e10

accCompradoOuro = true

localStorage.setItem("accCompradoOuro", "true")

alert("Comprado com sucesso")

atualizarDepoisCompra()

}

else{

alert("Poder insuficiente")

}

}

// Pingente Diamante

function acc3(){

if(accCompradoDiamante){

  accEquipado = "diamante"
  localStorage.setItem("accEquipado", accEquipado)
comprou.play()
  ganho = 10
  localStorage.setItem("ganho", ganho)

  alert("Acessório Diamante equipado!")
  return

}

if(poder >= 2e19){

poder -= 2e19

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

  accEquipado = "ametista"
  localStorage.setItem("accEquipado", accEquipado)
comprou.play()
  ganho = 18
  localStorage.setItem("ganho", ganho)

  alert("Acessório Ametista equipado!")
  return

}
if(poder >= 1e29){

poder -= 1e29

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

  accEquipado = "atomica"
  localStorage.setItem("accEquipado", accEquipado)
comprou.play()
  ganho = 30
  localStorage.setItem("ganho", ganho)

  alert("Acessório Atômico equipado!")
  return

}
if(poder >= 2e40){

poder -= 2e40

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

  accEquipado = "antimateria"
  localStorage.setItem("accEquipado", accEquipado)
comprou.play()
  ganho = 100
  localStorage.setItem("ganho", ganho)

  alert("Acessório Antimatéria equipado!")
  return

}
if(poder >= 6e58){

poder -= 6e58

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

},200)

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

let musicGame = new Audio("GameMusic.mp3")
musicGame.volume = 0.2
musicGame.loop = true


function controlarMusica(){
  if(musicGame.paused){
    musicGame.play()
    document.getElementById("GameMusic").innerHTML = "On"
  }
  else{
    musicGame.pause()
    document.getElementById("GameMusic").innerHTML = "Off"
  }
}
