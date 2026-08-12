let poder = (Number(localStorage.getItem("poder")) || 0)

let ganho = Number(localStorage.getItem("ganho")) || 1

let accEquipado = localStorage.getItem("accEquipado") || ""

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
bonusPet = 20
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
bonusEspada = 12
break
case 7:
bonusEspada = 15
break
case 8:
bonusEspada = 25
break
case 9:
bonusEspada = 50
break
case 10:
bonusEspada = 100
break
}


let reliquiaEquipada = Number(localStorage.getItem("reliquiaEquipada")) || 0

let bonusReliquia = 1

const buffsReliquias = {
1: 1.5,
2: 2,
3: 3.5,
4: 5,
5: 9,
6: 13,
7: 25,
8: 40,
9: 80,
10: 150
}

if(buffsReliquias[reliquiaEquipada]){
bonusReliquia = buffsReliquias[reliquiaEquipada]
}

let bonusAcessorio = 1

function atualizarBonusAcessorio() {
  bonusAcessorio = 1

  if (accEquipado === "prata") {
    bonusAcessorio = 2
  } else if (accEquipado === "ouro") {
    bonusAcessorio = 4
  } else if (accEquipado === "diamante") {
    bonusAcessorio = 8
  } else if (accEquipado === "ametista") {
    bonusAcessorio = 12
  } else if (accEquipado === "atomica") {
    bonusAcessorio = 20
  } else if (accEquipado === "antimateria") {
    bonusAcessorio = 50
  }
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
["Trvg",1e90],
["Trig",1e93],
["Dutg",1e96],
["MAX",1e99]
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

let salvamentoPendente = false
let timerSalvamento = null

function salvar(){
  localStorage.setItem("poder", poder)
  localStorage.setItem("ganho", ganho)
  localStorage.setItem("accEquipado", accEquipado)  
  
  if(typeof moedas !== "undefined"){
    localStorage.setItem("moedas", moedas)
  }

  salvamentoPendente = true

  if(timerSalvamento){
     return
  }

  timerSalvamento = setTimeout(async function(){

    timerSalvamento = null

    if(!salvamentoPendente){
      return
    }

    salvamentoPendente = false

    const resultado = await cliente.auth.getUser()

    if(resultado.error || !resultado.data.user){
      return
    }

    const userId = resultado.data.user.id

    const { data, error } = await cliente
      .from("inventario")
      .update({
          poder: Number(poder) || 0,
          moedas: typeof moedas !== "undefined"
              ? Number(moedas) || 0
              : Number(localStorage.getItem("moedas")) || 0,
          acessorio: accEquipado,
          ganho: ganho
      })
      .eq("user_id", userId)
      .select()

    if(error){
      salvamentoPendente = true
      console.error("Erro ao salvar progresso:", error)
      alert("Erro ao salvar progresso:\n\n" + error.message)
    } else if(!data || data.length === 0){
      salvamentoPendente = true
      alert("O jogo não conseguiu salvar (bloqueado por permissão). Nenhuma linha foi alterada.")
    }

  }, 1000)
}

function calcularBonusRank(){
if(poder >= 1e99){
bonusRank = 9e99
}
else if(poder >= 1e98){
bonusRank = 1e85
}
else if(poder >= 1e97){
bonusRank = 1e85
}
else if(poder >= 1e95){
bonusRank = 1e84
}
else if(poder >= 1e93){
bonusRank = 1e82
}
else if(poder >= 1e90){
bonusRank = 1e80
}
else if(poder >= 3e87){
bonusRank = 1e76
}
else if(poder >= 3e84){
bonusRank = 1e74
}
else if(poder >= 3e81){
bonusRank = 1e72
}
else if(poder >= 3e78){
bonusRank = 1e70
}
else if(poder >= 3e75){
bonusRank = 1e66
}
else if(poder >= 3e72){
bonusRank = 2e64
}
else if(poder >= 6e69){
bonusRank = 1e62
}
else if(poder >= 6e66){
bonusRank = 2e58
}
else if(poder >= 6e63){
bonusRank = 5e55
}
else if(poder >= 5e60){
bonusRank = 4e52
}
else if(poder >= 4e57){
bonusRank = 1e50
}
else if(poder >= 9e54){
bonusRank = 1e48
}
else if(poder >= 6e51){
bonusRank = 1e45
}
else if(poder >= 3e48){
bonusRank = 1e41
}
else if(poder >= 1e45){
bonusRank = 1e39
}
else if(poder >= 1e42){
bonusRank = 1e36
}
else if(poder >= 9e39){
bonusRank = 1e33
}
else if(poder >= 2e36){
bonusRank = 1e31
}
else if(poder >= 9e33){
bonusRank = 1e28
}
else if(poder >= 3e30){
bonusRank = 1e25
}
else if(poder >= 9e25){
bonusRank = 1e23
}
else if(poder >= 7e22){
bonusRank = 1e19
}
else if(poder >= 2e18){
bonusRank = 1e16
}
else if(poder >= 3e16){
bonusRank = 1e13
}
else if(poder >= 1e14){
bonusRank = 1e12
}
else if(poder >= 9e13){
bonusRank = 1e9
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
bonusRank = 40
}
else if(poder >= 50){
bonusRank = 8
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
{poder:1e90, nome:"COMO VOCÊ CHEGOU A ISSO? 👁️", cor:"white"},
{poder:1e93, nome:"Bug Do Universo 🐛", cor:"lime"},
{poder:1e95, nome:"Savage Supremo 💀🔥", cor:"crimson"},
{poder:1e97, nome:"Anomalia Cósmica 🌀", cor:"violet"},
{poder:1e98, nome:"Dev Surtou 😭 (Meme)", cor:"yellow"},
{poder:1e99, nome:"ALCANÇOU O LIMITE 9e99 ♾️👑", cor:"white"}
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
if(poder >= 1e99){
document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 10px gold,
0 0 20px white,
0 0 30px cyan,
0 0 45px magenta,
0 0 60px red;">
ALCANÇOU O LIMITE 9e99 ♾️👑
</span>`
}
else if(poder >= 1e98){
document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 8px yellow,
0 0 16px orange,
0 0 24px gray;">
Dev Surtou 😭 (Meme)
</span>`
}
else if(poder >= 1e97){
document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 10px violet,
0 0 20px purple,
0 0 30px magenta;">
Anomalia Cósmica 🌀
</span>`
}
else if(poder >= 1e95){
document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 10px crimson,
0 0 20px red,
0 0 30px black;">
Savage Supremo 💀🔥
</span>`
}
else if(poder >= 1e93){
document.getElementById("rank").innerHTML =
`<span style="
color:white;
text-shadow:
0 0 10px lime,
0 0 20px green,
0 0 30px cyan;">
Bug Do Universo 🐛
</span>`
}
else if(poder >= 1e90){
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
atualizarBonusAcessorio()  

document.getElementById("poder").innerHTML =
formatarNumero(poder)

document.getElementById("ganho").innerHTML =
"Voce esta ganhando +" + formatarNumero(Math.max(1, Math.round(ganho * bonusRank * bonusPet * bonusEspada * bonusAcessorio * bonusReliquia))) + " poder"

atualizarRank()
atualizarProximoRank()
atualizarMoedas()
}

let click = new Audio("Click.mp3")
click.volume = 0.09
click.loop = false

// ✅ CORRIGIDO: antes usava "Click" direto (variável global implícita do id),
// o que quebrava em qualquer página sem o botão #Click. Agora é seguro.
const btnClick = document.getElementById("Click")
if(btnClick){
  btnClick.addEventListener("click", function(){
    click.play()
  })
}

async function treinar(){
  calcularBonusRank()
  atualizarBonusAcessorio()  

  const valorGanho = Math.max(
    1,
    Math.round(ganho * bonusRank * bonusPet * bonusEspada * bonusAcessorio * bonusReliquia)  
  )

  const { data, error } = await cliente.rpc(
    "aumentar_poder",
    {
      valor: valorGanho
    }
  )

  if(error){
    console.error("Erro ao aumentar poder:", error.message)
    // ✅ AUMENTA LOCALMENTE SE FALHAR
    poder += valorGanho
    localStorage.setItem("poder", poder)
    salvar()
    atualizarTela()
    return
  }

  // ✅ SÓ ATUALIZA SE data FOR VÁLIDO
  if(data !== null && data !== undefined){
    poder = Number(data)
  } else {
    poder += valorGanho
  }
  
  localStorage.setItem("poder", poder)
  salvar()
  atualizarTela()
}

async function carregarJogo(){
  await carregarEspadas()
  atualizarBonusAcessorio()  
  atualizarTela()
}

carregarJogo()



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
    ganho = 2
}

else if(accEquipado === "ouro"){
    ganho = 4
}

else if(accEquipado === "diamante"){
    ganho = 8
    
}

else if(accEquipado === "ametista"){
    ganho = 12
}

else if(accEquipado === "atomica"){
    ganho = 20
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
    atualizarBonusAcessorio() 
    alert("Acessório Prata equipado!")
    atualizarTela()
    return
  }
  
  if(poder >= 50000){
    poder -= 50000
    accComprado = true
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
atualizarTela()
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
  atualizarTela()
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
  atualizarTela()
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
  atualizarTela()
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
  atualizarTela()
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





async function testarSupabase(){


const resultado = await cliente.auth.getUser()

if(resultado.error){

    alert("Erro Supabase:", resultado.error)

    return
}

if(!resultado.data.user){

    alert("Nenhum usuário logado")

    return
}

alert("Supabase funcionando!")
alert("ID do usuário:", resultado.data.user.id)
alert("Email:", resultado.data.user.email)


}


async function carregarDadosSupabase(){


const resultado = await cliente.auth.getUser()

if(resultado.error || !resultado.data.user){
    return
}

const userId = resultado.data.user.id

const resposta = await cliente
    .from("inventario")
    .select("poder, moedas")
    .eq("user_id", userId)
    .maybeSingle()

if(resposta.error){

    alert.error(
        "Erro ao carregar jogador:",
        resposta.error
    )

    return
}

if(!resposta.data){
    alert("Jogador ainda não possui dados no Supabase")
    return
}

alert(
"Dados encontrados no Supabase!\n\n" +
"Poder: " + resposta.data.poder + "\n" +
"Moedas: " + resposta.data.moedas
)


}


async function verificarResetForcado(){
  const resultado = await cliente.auth.getUser()
  if(resultado.error || !resultado.data.user){
    return
  }

  const userId = resultado.data.user.id

  const resposta = await cliente
    .from("inventario")
    .select("reset_id")
    .eq("user_id", userId)
    .maybeSingle()

  if(resposta.error || !resposta.data){
    return
  }

  const resetIdServidor = Number(resposta.data.reset_id) || 0
  const resetIdVisto = Number(localStorage.getItem("resetIdVisto")) || 0

  if(resetIdServidor > resetIdVisto){

    const sessaoGuardada = {}
    for(let i = 0; i < localStorage.length; i++){
      const chave = localStorage.key(i)
      if(chave.startsWith("sb-") || chave.includes("supabase")){
        sessaoGuardada[chave] = localStorage.getItem(chave)
      }
    }

    localStorage.clear()

    Object.keys(sessaoGuardada).forEach(function(chave){
      localStorage.setItem(chave, sessaoGuardada[chave])
    })

    localStorage.setItem("resetIdVisto", resetIdServidor)

    location.reload()
  }
}


async function sincronizarPrimeiroAcesso(){
    const resultado = await cliente.auth.getUser()

    if(resultado.error || !resultado.data.user){
        return
    }

    const userId = resultado.data.user.id

    const poderLocal = Number(localStorage.getItem("poder")) || 0
    const moedasLocal = Number(localStorage.getItem("moedas")) || 0

    const resposta = await cliente
        .from("inventario")
        .select("poder, moedas")
        .eq("user_id", userId)
        .maybeSingle()

    if(resposta.error){
        console.log("Erro ao buscar dados:", resposta.error.message)
        return
    }

    if(!resposta.data){
        console.log("Nenhum dado no Supabase ainda")
        return
    }

    const poderServidor = Number(resposta.data.poder) || 0
    const moedasServidor = Number(resposta.data.moedas) || 0


    poder = Math.max(poderLocal, poderServidor)
    moedas = Math.max(moedasLocal, moedasServidor)

    localStorage.setItem("poder", poder)
    localStorage.setItem("moedas", moedas)

    atualizarTela()
    atualizarMoedas()
}

verificarResetForcado().then(function(){
  sincronizarPrimeiroAcesso()
})


async function carregarTudoAoIniciar(){
  try {
    await carregarEspadasSupabase()
    
    await new Promise(resolve => setTimeout(resolve, 500))
    
    atualizarTela()
    
    console.log("✅ Dados carregados com sucesso!")
  } catch(erro) {
    console.error("Erro ao carregar dados:", erro)
  }
}

carregarTudoAoIniciar()