
let poder = Number(localStorage.getItem("poder")) || 0

function setTexto(id, texto) {
  const el = document.getElementById(id)
  if (el) el.innerHTML = texto
}

function formatarNumero(num) {
  num = Number(num) || 0

  if (num >= 1e90) return (num / 1e90).toFixed(1).replace(".0", "") + "Trvg"
  if (num >= 1e87) return (num / 1e87).toFixed(1).replace(".0", "") + "Utvg2"
  if (num >= 1e84) return (num / 1e84).toFixed(1).replace(".0", "") + "Nvvg"
  if (num >= 1e78) return (num / 1e78).toFixed(1).replace(".0", "") + "Spvg"
  if (num >= 1e75) return (num / 1e75).toFixed(1).replace(".0", "") + "Sxvg"
  if (num >= 1e72) return (num / 1e72).toFixed(1).replace(".0", "") + "Qivg"
  if (num >= 1e69) return (num / 1e69).toFixed(1).replace(".0", "") + "Qavg"
  if (num >= 1e66) return (num / 1e66).toFixed(1).replace(".0", "") + "Tvg"
  if (num >= 1e63) return (num / 1e63).toFixed(1).replace(".0", "") + "Utvg"
  if (num >= 1e60) return (num / 1e60).toFixed(1).replace(".0", "") + "Nvgt"
  if (num >= 1e57) return (num / 1e57).toFixed(1).replace(".0", "") + "Ocvg"
  if (num >= 1e54) return (num / 1e54).toFixed(1).replace(".0", "") + "Spd"
  if (num >= 1e51) return (num / 1e51).toFixed(1).replace(".0", "") + "Sxd"
  if (num >= 1e48) return (num / 1e48).toFixed(1).replace(".0", "") + "Qid"
  if (num >= 1e45) return (num / 1e45).toFixed(1).replace(".0", "") + "Qad"
  if (num >= 1e42) return (num / 1e42).toFixed(1).replace(".0", "") + "Td"
  if (num >= 1e39) return (num / 1e39).toFixed(1).replace(".0", "") + "Dd"
  if (num >= 1e36) return (num / 1e36).toFixed(1).replace(".0", "") + "Ud"
  if (num >= 1e33) return (num / 1e33).toFixed(1).replace(".0", "") + "Dc"
  if (num >= 1e30) return (num / 1e30).toFixed(1).replace(".0", "") + "No"
  if (num >= 1e27) return (num / 1e27).toFixed(1).replace(".0", "") + "Oc"
  if (num >= 1e24) return (num / 1e24).toFixed(1).replace(".0", "") + "Sp"
  if (num >= 1e21) return (num / 1e21).toFixed(1).replace(".0", "") + "Sx"
  if (num >= 1e18) return (num / 1e18).toFixed(1).replace(".0", "") + "Qi"
  if (num >= 1e15) return (num / 1e15).toFixed(1).replace(".0", "") + "Qa"
  if (num >= 1e12) return (num / 1e12).toFixed(1).replace(".0", "") + "T"
  if (num >= 1e9) return (num / 1e9).toFixed(1).replace(".0", "") + "B"
  if (num >= 1e6) return (num / 1e6).toFixed(1).replace(".0", "") + "M"
  if (num >= 1e3) return (num / 1e3).toFixed(1).replace(".0", "") + "K"

  return Math.floor(num).toString()
}

function atualizarRank(){

if(poder >= 1e95){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px red,0 0 10px orange,0 0 15px yellow,0 0 20px lime,0 0 25px cyan,0 0 30px blue,0 0 35px magenta;">Infinito ∞ ☠️</span>'

}

else if(poder >= 1e90){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px #ff0000,0 0 10px #ff3300,0 0 20px #ff6600,0 0 30px #ffff00;">Imperador Universal 👑</span>'

}

else if(poder >= 1e85){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px #00ffff,0 0 20px #0088ff,0 0 30px #9400D3;">Supremo Final 🌌</span>'

}

else if(poder >= 1e80){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px violet,0 0 10px magenta,0 0 20px deeppink,0 0 30px cyan;">Divindade Absoluta ⚡</span>'

}

else if(poder >= 1e75){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px gold,0 0 10px orange,0 0 20px yellow,0 0 30px white;">Imperador Cósmico 🌠</span>'

}

else if(poder >= 1e70){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px gold,0 0 10px gold,0 0 20px white;">Rei Cósmico 👑</span>'

}

else if(poder >= 1e65){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px deepskyblue,0 0 20px white;">Arcanjo Supremo 😇</span>'

}

else if(poder >= 1e60){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px aqua,0 0 20px white;">Transcendente ⚡</span>'

}

else if(poder >= 1e55){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px white,0 0 10px silver,0 0 20px cyan;">Ancião Eterno ♾️</span>'

}

else if(poder >= 1e50){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px white,0 0 10px gray,0 0 20px cyan;">Eterno ♾️</span>'

}

else if(poder >= 1e45){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px hotpink,0 0 10px deeppink,0 0 20px red;">Destruidor 💥</span>'

}

else if(poder >= 1e40){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px magenta,0 0 10px violet,0 0 20px purple;">Omega Ω</span>'

}

else if(poder >= 1e35){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px slateblue,0 0 10px blueviolet,0 0 20px cyan;">Lorde Galáctico 🌌</span>'

}

else if(poder >= 1e30){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px purple,0 0 10px magenta,0 0 20px blue;">Cósmico 🌌</span>'

}

else if(poder >= 1e25){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px lime,0 0 10px greenyellow,0 0 20px cyan;">Titã 🔥</span>'
}
else if(poder >= 1e20){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px #00ffff,0 0 20px #00bfff;">Supremo 🌠</span>'

}

else if(poder >= 1e15){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px gold,0 0 10px yellow,0 0 20px orange;">Lendário 🏆</span>'

}

else if(poder >= 1e10){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px gold,0 0 10px orange,0 0 20px red;">Divino 🔱</span>'

}

else if(poder >= 1e9){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px lawngreen,0 0 10px lime,0 0 20px green;">Semideus ⚜️</span>'

}

else if(poder >= 1e8){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px violet,0 0 10px deeppink,0 0 20px magenta;">Mítico 🌟</span>'

}

else if(poder >= 1e7){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px dodgerblue,0 0 10px cyan,0 0 20px white;">Mestre Arcano 🔮</span>'

}

else if(poder >= 1e6){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px blueviolet,0 0 10px violet,0 0 20px magenta;">Celestial ✨</span>'

}

else if(poder >= 100000){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px lime,0 0 10px lawngreen,0 0 20px green;">Imensurável 👽</span>'

}

else if(poder >= 50000){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px crimson,0 0 10px red,0 0 20px orange;">Lorde ⚔️</span>'

}

else if(poder >= 10000){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px red,0 0 10px crimson,0 0 20px darkred;">Hacker 😈</span>'

}

else if(poder >= 5000){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px dodgerblue,0 0 20px blue;">Elite 💎</span>'

}

else if(poder >= 1000){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px deepskyblue,0 0 10px cyan;">Veterano 🛡️</span>'

}

else if(poder >= 500){

document.getElementById("rank").innerHTML =
'<span style="color:#fff;text-shadow:0 0 5px cyan,0 0 10px aqua;">Pro 🥶</span>'

}

else if(poder >= 100){

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

}

function atualizarTela() {
  setTexto("poder", formatarNumero(poder))
  atualizarRank()
}

const bosses = [
  { nome: "Benimaru", valor: 100, escala: "K", imagem: "benimaru.gif", texto: "100K Power", ouro: 10, espada: 1, chanceEspada: 50},
  { nome: "Arthur", valor: 122, escala: "B", imagem: "dragon.gif", texto: "122B Power", ouro: 100, espada: 2, chanceEspada: 40},
  { nome: "Poderosa", valor: 999, escala: "T", imagem: "magia.gif", texto: "999T Power", ouro: 1000, espada: 3, chanceEspada: 30},
  { nome: "Shadow", valor: 112, escala: "Qi", imagem: "shadow.gif", texto: "112Qi Power", ouro: 10000, espada: 4, chanceEspada: 20},
  { nome: "WangLing", valor: 1, escala: "Sp", imagem: "ling.gif", texto: "1Sp Power", ouro: 100000, espada: 5, chanceEspada: 15},
  { nome: "Goku", valor: 539, escala: "Ud", imagem: "goku.gif", texto: "539Ud Power", ouro: 1000000, espada: 6, chanceEspada:10},
  { nome: "Saber", valor: 55, escala: "Qad", imagem: "saber.gif", texto: "Qad Power", ouro: 10000000, espada: 7, chanceEspada: 7},
  { nome: "Megumi", valor: 999, escala: "Sxd", imagem: "megumi.gif", texto: "999Sxd Power", ouro: 100000000, espada: 8, chanceEspada: 5},
    { nome: "WangFinalBossTrueForm💀", valor: 999, escala: "Utvg", imagem: "wang.gif", texto: "67Utvg Power", ouro: 1000000000, espada: 9, chanceEspada: 1},
      { nome: "PaulaoDopenu", valor: 999, escala: "Trvg", imagem: "Paulo.jpg", texto: "999Trvg Power", ouro: 10000000000}
]

const escalaBase = {
  "": 0,
  K: 1,
  M: 2,
  B: 3,
  T: 4,
  Qa: 5,
  Qi: 6,
  Sx: 7,
  Sp: 8,
  Oc: 9,
  No: 10,
  Dc: 11,
  Ud: 12,
  Dd: 13,
  Td: 14,
  Qad: 15,
  Qid: 16,
  Sxd: 17,
  Spd: 18,
  Ocvg: 19,
  Nvgt: 20,
  Utvg: 21,
  Tvg: 22,
  Qavg: 23,
  Qivg: 24,
  Sxvg: 25,
  Spvg: 26,
  Nvvg: 27,
  Utvg2: 28,
  Trvg: 29
}

function converterPoder(valor, escala) {
  const expo = escalaBase[escala] ?? 0
  return valor * (10 ** (expo * 3))
}

function desafiarBoss(id) {
  const boss = bosses[id]
  if (!boss) return

  const poderNecessario = converterPoder(boss.valor, boss.escala)

 

  localStorage.setItem("BossNome", boss.nome)
  localStorage.setItem("BossValor", boss.valor)
  localStorage.setItem("BossEscala", boss.escala)
  localStorage.setItem("BossImagem", boss.imagem)
  localStorage.setItem("BossPowerText", boss.texto)
  
  localStorage.setItem("BossEspada", boss.espada)
  localStorage.setItem("BossChanceEspada", boss.chanceEspada)
  
  localStorage.setItem("BossOuro", boss.ouro)

  window.location.href = "Desafiar.html"
}

atualizarTela()