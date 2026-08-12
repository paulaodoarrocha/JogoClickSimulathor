

const escalaBase = {
  "": 0, K: 1, M: 2, B: 3, T: 4, Qa: 5, Qi: 6, Sx: 7, Sp: 8, Oc: 9,
  No: 10, Dc: 11, Ud: 12, Dd: 13, Td: 14, Qad: 15, Qid: 16, Sxd: 17,
  Spd: 18, Ocvg: 19, Nvgt: 20, Utvg: 21, Tvg: 22, Qavg: 23, Qivg: 24,
  Sxvg: 25, Spvg: 26, Nvvg: 27, Uqnd: 28, Qrdvg: 29, Trvg: 30
}

function converterPoder(valor, escala) {
  const expo = escalaBase[escala] ?? 0
  return valor * (10 ** (expo * 3))
}

function formatarNumero(num) {
  num = Number(num) || 0

  const lista = [
    ["K",1e3], ["M",1e6], ["B",1e9], ["T",1e12], ["Qa",1e15], ["Qi",1e18],
    ["Sx",1e21], ["Sp",1e24], ["Oc",1e27], ["No",1e30], ["Dc",1e33],
    ["Ud",1e36], ["Dd",1e39], ["Td",1e42], ["Qad",1e45], ["Qid",1e48],
    ["Sxd",1e51], ["Spd",1e54], ["Ocvg",1e57], ["Nvgt",1e60], ["Utvg",1e63],
    ["Tvg",1e66], ["Qavg",1e69], ["Qivg",1e72], ["Sxvg",1e75], ["Spvg",1e78],
    ["Nvvg",1e81], ["Uqnd",1e84], ["Qrdvg",1e87], ["Trvg",1e90],
    ["Trig",1e93], ["Dutg",1e96], ["MAX",1e99]
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


const bossesData = [
  { nome: "Benimaru",               valor: 500, escala: "K",    imagem: "benimaru.gif", ouro: 10,         espada: 1,  chance: 50  },
  { nome: "Arthur",                 valor: 100, escala: "T",    imagem: "dragon.gif",   ouro: 100,        espada: 2,  chance: 40  },
  { nome: "Poderosa",               valor: 999, escala: "Qi",   imagem: "magia.gif",    ouro: 1000,       espada: 3,  chance: 30  },
  { nome: "Shadow",                 valor: 777, escala: "Oc",   imagem: "shadow.gif",   ouro: 10000,       espada: 4,  chance: 20  },
  { nome: "WangLing",               valor: 55,  escala: "Dd",   imagem: "ling.gif",     ouro: 100000,      espada: 5,  chance: 15  },
  { nome: "Goku",                   valor: 22,  escala: "Sxd",  imagem: "goku.gif",     ouro: 1000000,     espada: 6,  chance: 10  },
  { nome: "Saber",                  valor: 99,  escala: "Nvgt", imagem: "saber.gif",    ouro: 10000000,     espada: 7,  chance: 7   },
  { nome: "Megumi",                 valor: 999, escala: "Sxvg", imagem: "megumi.gif",   ouro: 100000000,    espada: 8,  chance: 5   },
  { nome: "WangFinalBossTrueForm",  valor: 67,  escala: "Sxvg", imagem: "wang.gif",     ouro: 1000000000,   espada: 9,  chance: 1   },
  { nome: "Paulo 👁️",               valor: 999, escala: "Trvg", imagem: "Paulo.jpg",    ouro: 10000000000, espada: 10, chance: 0.1 }
]

function desafiarBoss(indice) {
  const boss = bossesData[indice]

  if (!boss) {
    alert("Boss inválido!")
    return
  }

  localStorage.setItem("BossNome", boss.nome)
  localStorage.setItem("BossValor", boss.valor)
  localStorage.setItem("BossEscala", boss.escala)
  localStorage.setItem("BossImagem", boss.imagem)
  localStorage.setItem("BossOuro", boss.ouro)
  localStorage.setItem("BossEspada", boss.espada)
  localStorage.setItem("BossChanceEspada", boss.chance)
  localStorage.setItem(
    "BossPowerText",
    "⚡" + formatarNumero(converterPoder(boss.valor, boss.escala)) + " Power"
  )

  window.location.href = "Desafiar.html"
}


let modoNightmare = localStorage.getItem("modoNightmare") === "true"

function aplicarVisualNightmareLobby(ativo) {
  let overlay = document.getElementById("nightmareOverlay")

  if (!overlay) {
    overlay = document.createElement("div")
    overlay.id = "nightmareOverlay"
    overlay.style.position = "fixed"
    overlay.style.inset = "0"
    overlay.style.pointerEvents = "none"
    overlay.style.zIndex = "5000"
    overlay.style.transition = "opacity 0.6s"
    overlay.style.background = "radial-gradient(circle, rgba(60,0,0,0) 35%, rgba(120,0,0,0.55) 100%)"
    overlay.style.mixBlendMode = "multiply"
    overlay.style.opacity = "0"
    document.body.appendChild(overlay)
  }

  if (ativo) {
    overlay.style.opacity = "1"
    document.body.style.filter = "contrast(1.15) saturate(1.3) brightness(0.75) sepia(0.15) hue-rotate(-10deg)"
  } else {
    overlay.style.opacity = "0"
    document.body.style.filter = ""
  }
}

function atualizarBotaoNightmare() {
  setTexto("NightmareBtn", modoNightmare ? "☠️ Nightmare: ON" : "☠️ Nightmare: OFF")
}

function alternarNightmare() {
  modoNightmare = !modoNightmare
  localStorage.setItem("modoNightmare", modoNightmare ? "true" : "false")
  aplicarVisualNightmareLobby(modoNightmare)
  atualizarBotaoNightmare()
}

aplicarVisualNightmareLobby(modoNightmare)
atualizarBotaoNightmare()


let bossesMusic = new Audio("BossesMusic.mp3")
bossesMusic.volume = 0.3
bossesMusic.loop = true

function controlarMusicaBosses() {
  if (bossesMusic.paused) {
    bossesMusic.play().catch(() => {})
    setTexto("BossesMusic", "🎵 On")
  } else {
    bossesMusic.pause()
    setTexto("BossesMusic", "🎵 Off")
  }
}


const ranksLobby = [
  {poder:0, nome:"Noob 🤡"},
  {poder:50, nome:"Iniciante 😊"},
  {poder:500, nome:"Guerreiro ⚔️"},
  {poder:10000, nome:"Pro 🥶"},
  {poder:100000, nome:"Veterano 🛡️"},
  {poder:1e6, nome:"Elite 💎"},
  {poder:2e8, nome:"Hacker 😈"},
  {poder:1e10, nome:"Lorde ⚔️"},
  {poder:9e13, nome:"Imensurável 👽"},
  {poder:1e14, nome:"Celestial ✨"},
  {poder:3e16, nome:"Mestre Arcano 🔮"},
  {poder:2e18, nome:"Mítico 🌟"},
  {poder:7e22, nome:"Semideus ⚜️"},
  {poder:9e25, nome:"Divino 🔱"},
  {poder:3e30, nome:"Lendário 🏆"},
  {poder:9e33, nome:"Supremo 🌠"},
  {poder:2e36, nome:"Titã 🔥"},
  {poder:9e39, nome:"Cósmico 🌌"},
  {poder:1e42, nome:"Omega Ω"},
  {poder:1e45, nome:"Lorde Galáctico 🌌"},
  {poder:3e48, nome:"Destruidor 💥"},
  {poder:6e51, nome:"Eterno ♾️"},
  {poder:9e54, nome:"Ancião Eterno ♾️"},
  {poder:4e57, nome:"Transcendente ⚡"},
  {poder:5e60, nome:"Rei Cósmico 👑"},
  {poder:6e63, nome:"Imperador Cósmico 🌠"},
  {poder:6e66, nome:"Divindade Absoluta ⚡"},
  {poder:6e69, nome:"Supremo Final 🌌"},
  {poder:3e72, nome:"Imperador Universal 👑"},
  {poder:3e75, nome:"Infinito ∞ ☠️"},
  {poder:3e78, nome:"???????????"},
  {poder:3e81, nome:"Error (𓁹 𓁹)𓁹‿𓁹👁️⃤"},
  {poder:3e84, nome:"Rei Do Six Seven👑"},
  {poder:3e87, nome:"DESEMPREGADO 💀"},
  {poder:1e90, nome:"COMO VOCÊ CHEGOU A ISSO? 👁️"},
  {poder:1e93, nome:"The Vazio Creathor"},
  {poder:1e95, nome:"boundless"},
  {poder:1e97, nome:"Inimigo do Sol"},
  {poder:1e98, nome:"Conquistador da Vanessa"},
  {poder:1e99, nome:"ALCANÇOU O LIMITE 9e99 ♾️👑"}
]

function atualizarPoderRankLobby() {
  const poder = Number(localStorage.getItem("poder")) || 0
  setTexto("poder", formatarNumero(poder))

  let rankAtual = ranksLobby[0]
  for (const r of ranksLobby) {
    if (poder >= r.poder) rankAtual = r
  }
  setTexto("rank", rankAtual.nome)
}

atualizarPoderRankLobby()
