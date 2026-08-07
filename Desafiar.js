
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
  Qrvdg: 28,
  Trvg: 29
}

function converterPoder(valor, escala) {
  const expo = escalaBase[escala] ?? 0
  return valor * (10 ** (expo * 3))
}

function formatarNumero(num) {
  num = Number(num) || 0

  const lista = [
    ["K", 1e3],
    ["M", 1e6],
    ["B", 1e9],
    ["T", 1e12],
    ["Qa", 1e15],
    ["Qi", 1e18],
    ["Sx", 1e21],
    ["Sp", 1e24],
    ["Oc", 1e27],
    ["No", 1e30],
    ["Dc", 1e33],
    ["Ud", 1e36],
    ["Dd", 1e39],
    ["Td", 1e42],
    ["Qad", 1e45],
    ["Qid", 1e48],
    ["Sxd", 1e51],
    ["Spd", 1e54],
    ["Ocvg", 1e57],
    ["Nvgt", 1e60],
    ["Utvg", 1e63],
    ["Tvg", 1e66],
    ["Qavg", 1e69],
    ["Qivg", 1e72],
    ["Sxvg", 1e75],
    ["Spvg", 1e78],
    ["Nvvg", 1e84],
    ["Qrvdg", 1e87],
    ["Trvg", 1e90]
    

  ]

  for (let i = lista.length - 1; i >= 0; i--) {
    if (num >= lista[i][1]) {
      return (num / lista[i][1]).toFixed(1).replace(".0", "") + lista[i][0]
    }
  }

  return Math.floor(num).toString()
}

function setTexto(id, texto) {
  const el = document.getElementById(id)
  if (el) el.innerHTML = texto
}

const bossNome = localStorage.getItem("BossNome")
const bossOuro = Number(localStorage.getItem("BossOuro")) || 0
const bossEspada = Number(localStorage.getItem("BossEspada")) || 0
const bossChanceEspada = Number(localStorage.getItem("BossChanceEspada")) || 0
const bossValor = Number(localStorage.getItem("BossValor")) || 0
const bossEscala = localStorage.getItem("BossEscala") || ""
const bossImagem = localStorage.getItem("BossImagem") || ""
const bossPowerText = localStorage.getItem("BossPowerText") || ""



let poder = Number(localStorage.getItem("poder")) || 0
let bossPower = converterPoder(bossValor, bossEscala)

let progresso = 50
let lutaAtiva = false
let lutaEncerrada = false
let intervaloBoss = null

const barraVerde = document.querySelector(".verde")
const barraVermelha = document.querySelector(".vermelho")
const btnLutar = document.getElementById("btnLutar")

function atualizarTopo() {
  if (!bossNome || !bossImagem || !bossPower) {
    localStorage.removeItem("BossNome")
    localStorage.removeItem("BossValor")
    localStorage.removeItem("BossEscala")
    localStorage.removeItem("BossImagem")
    localStorage.removeItem("BossPowerText")
    window.location.href = "batalha.html"
    return
  }

  document.getElementById("Boss").innerHTML = bossNome
  document.getElementById("Bosspower").innerHTML = bossPowerText || ("⚡" + formatarNumero(bossPower) + " Power")
  document.getElementById("BossAtual").src = bossImagem
  document.getElementById("poder").innerHTML = formatarNumero(poder)
}

function atualizarBarra() {
  const verde = Math.max(0, Math.min(100, progresso))
  const vermelho = 100 - verde

  barraVerde.style.width = verde + "%"
  barraVermelha.style.width = vermelho + "%"
}

function calcularDanos() {
  const ratio = poder / bossPower

  let danoJogador = 1
  let danoBoss = 5

  if (ratio >= 20) {
    danoJogador = 90
    danoBoss = 1
  } else if (ratio >= 8) {
    danoJogador = 60
    danoBoss = 1
  } else if (ratio >= 4) {
    danoJogador = 40
    danoBoss = 1
  } else if (ratio >= 2) {
    danoJogador = 20
    danoBoss = 2
  } else if (ratio >= 1.2) {
    danoJogador = 10
    danoBoss = 4
  } else if (ratio >= 0.8) {
    danoJogador = 6
    danoBoss = 5
  } else if (ratio >= 0.5) {
    danoJogador = 3
    danoBoss = 8
  } else if (ratio >= 0.2) {
    danoJogador = 2
    danoBoss = 20
  } else if (ratio >= 0.05) {
    danoJogador = 1
    danoBoss = 40
  } else {
    danoJogador = 1
    danoBoss = 90
  }

  return { danoJogador, danoBoss }
}

function encerrarLuta(vitoria) {
  lutaEncerrada = true
  lutaAtiva = false

  if (intervaloBoss) {
    clearInterval(intervaloBoss)
    intervaloBoss = null
  }

  btnLutar.disabled = true

  if (vitoria) {
    alert("Boss derrotado!")

   ganharMoedas(bossOuro)
   
  droparEspada(bossEspada, bossChanceEspada)
  }
  else {
    alert("Você perdeu!")
  }

  localStorage.removeItem("BossNome")
  localStorage.removeItem("BossValor")
  localStorage.removeItem("BossEscala")
  localStorage.removeItem("BossImagem")
  localStorage.removeItem("BossPowerText")

  window.location.href = "batalha.html"
}

function checarFim() {
  if (progresso >= 100) {
    progresso = 100
    atualizarBarra()
    encerrarLuta(true)
    return true
  }

  if (progresso <= 0) {
    progresso = 0
    atualizarBarra()
    encerrarLuta(false)
    return true
  }

  return false
}

function ataqueBossAutomatico() {
  if (!lutaAtiva || lutaEncerrada) return

  const { danoBoss } = calcularDanos()
  progresso -= danoBoss

  if (progresso < 0) progresso = 0

  atualizarBarra()
  checarFim()
}

function atacar() {
  if (!lutaAtiva || lutaEncerrada) return

  const { danoJogador } = calcularDanos()
  progresso += danoJogador

  if (progresso > 100) progresso = 100

  atualizarBarra()
  checarFim()
}

function iniciarLuta() {

lutaAtiva = true
lutaEncerrada = false

btnLutar.disabled = false

btnLutar.innerHTML = "⚔️ CLIQUE ⚔️"

atualizarBarra()


if(intervaloBoss){
    clearInterval(intervaloBoss)
}

intervaloBoss = setInterval(ataqueBossAutomatico, 150)

}
function criarIntro() {
  btnLutar.disabled = true
  btnLutar.innerHTML = "PREPARA..."

  const overlay = document.createElement("div")
  overlay.id = "introFight"

  overlay.style.position = "fixed"
  overlay.style.inset = "0"
  overlay.style.background = "rgba(0,0,0,0.90)"
  overlay.style.zIndex = "9999"
  overlay.style.display = "flex"
  overlay.style.alignItems = "center"
  overlay.style.justifyContent = "center"
  overlay.style.color = "#fff"
  overlay.style.fontSize = "clamp(64px, 18vw, 150px)"
  overlay.style.fontWeight = "900"
  overlay.style.letterSpacing = "4px"
  overlay.style.textAlign = "center"
  overlay.style.userSelect = "none"

  const texto = document.createElement("div")
  texto.innerHTML = "3"
  overlay.appendChild(texto)
  document.body.appendChild(overlay)

  const passos = ["3", "2", "1", "FIGHT"]
  let i = 0

  const timer = setInterval(() => {
    i++

    if (i < passos.length) {
      texto.innerHTML = passos[i]
      return
    }

    clearInterval(timer)
    overlay.remove()
    iniciarLuta()
  }, 800)
}

atualizarTopo()
atualizarBarra()
criarIntro()
