

const reliquias = [
  { id:1,  nome:"Graveto",           raridade:"comum",    imagem:"Releq1.jpg",  buff:2,  pesoBase:40 },
  { id:2,  nome:"Tung Tung Sahur",   raridade:"comum",    imagem:"Releq2.jpg",  buff:4,    pesoBase:20 },

  { id:3,  nome:"Shimpazimi",        raridade:"raro",     imagem:"Releq3.jpg",  buff:6,  pesoBase:15 },
  { id:4,  nome:"Patapim",           raridade:"raro",     imagem:"Releq4.jpg",  buff:8,    pesoBase:10 },

  { id:5,  nome:"Orange",            raridade:"epico",    imagem:"Releq5.jpg",  buff:10,    pesoBase:8 },
  { id:6,  nome:"Crocodilo Bombeiro",raridade:"epico",    imagem:"Releq6.jpg",  buff:15,   pesoBase:6 },

  { id:7,  nome:"Lá Combination",    raridade:"lendario", imagem:"Releq7.jpg",  buff:25,   pesoBase:3 },
  { id:8,  nome:"Fumante",           raridade:"lendario", imagem:"Releq8.jpg",  buff:50,   pesoBase:2 },

  { id:9,  nome:"GULOSAO",           raridade:"mitico",   imagem:"Releq9.jpg",  buff:100,   pesoBase:1 },
  { id:10, nome:"LEGEND",            raridade:"mitico",   imagem:"Releq10.jpg", buff:200,  pesoBase:0.1 },

  { id:11, nome:"BoraBill la ele",             raridade:"secreto",  imagem:"Releq11.jpg", buff:500,  pesoBase:0.05 },
  { id:12, nome:"Evoluçao Sahur final",       raridade:"secreto",  imagem:"Releq12.jpg", buff:1000,  pesoBase:0.01 }
]

const nomeRaridade = {
  comum:"Comum",
  raro:"Raro",
  epico:"Épico",
  lendario:"Lendário",
  mitico:"Mítico",
  secreto:"Secreto"
}

const PRECO_GIRO = 1000000       // 10M
const PRECO_GIRO_DUPLO = 1800000 // 18M
const PRECO_AUTO_ROLL = 10000000  // 100M


const FATOR_LUCKY_POR_NIVEL = 0.03
const LUCKY_MAX = 10


moedas = Number(localStorage.getItem("moedas")) || 0

let reliquiasPossuidas = JSON.parse(localStorage.getItem("reliquiasPossuidas") || "[]")
let reliquiaEquipada = Number(localStorage.getItem("reliquiaEquipada")) || 0
let luckyNivel = Number(localStorage.getItem("luckyNivel")) || 0
let autoRollDesbloqueado = localStorage.getItem("autoRollDesbloqueado") === "true"
let autoRollAtivo = false 

function salvarEstado(){
  localStorage.setItem("moedas", moedas)
  localStorage.setItem("reliquiasPossuidas", JSON.stringify(reliquiasPossuidas))
  localStorage.setItem("reliquiaEquipada", reliquiaEquipada)
  localStorage.setItem("luckyNivel", luckyNivel)
  localStorage.setItem("autoRollDesbloqueado", autoRollDesbloqueado ? "true" : "false")
}

function somaPesoTotal(){
  return reliquias.reduce((soma, r) => soma + r.pesoBase, 0)
}

function pesosAjustados(){
  const nivel = Math.min(luckyNivel, LUCKY_MAX)
  const fator = nivel * FATOR_LUCKY_POR_NIVEL

  const pesoComumTotal = reliquias
    .filter(r => r.raridade === "comum")
    .reduce((soma, r) => soma + r.pesoBase, 0)

  const somaRestante = reliquias
    .filter(r => r.raridade !== "comum")
    .reduce((soma, r) => soma + r.pesoBase, 0)

  const transferido = pesoComumTotal * fator

  return reliquias.map(r => {
    if(r.raridade === "comum"){
      return r.pesoBase - transferido * (r.pesoBase / pesoComumTotal)
    }
    return r.pesoBase + transferido * (r.pesoBase / somaRestante)
  })
}

function chanceItem(relic){
  const pesos = pesosAjustados()
  const index = reliquias.findIndex(r => r.id === relic.id)
  const total = somaPesoTotal() 
  return (pesos[index] / total) * 100
}


function ganhoPercentualPorNivelLucky(){
  const pesoComumTotal = reliquias
    .filter(r => r.raridade === "comum")
    .reduce((soma, r) => soma + r.pesoBase, 0)

  const somaRestante = reliquias
    .filter(r => r.raridade !== "comum")
    .reduce((soma, r) => soma + r.pesoBase, 0)

  return (pesoComumTotal * FATOR_LUCKY_POR_NIVEL / somaRestante) * 100
}

function custoLucky(nivel){
  return 500000000 * (nivel + 1) * (nivel + 1)
}


function sortearReliquia(){
  const pesos = pesosAjustados()
  const total = pesos.reduce((s, p) => s + p, 0)

  let sorte = Math.random() * total

  for(let i = 0; i < reliquias.length; i++){
    sorte -= pesos[i]
    if(sorte <= 0){
      return reliquias[i]
    }
  }

  return reliquias[reliquias.length - 1]
}


function animarGiro(relicAlvo){
  return new Promise((resolve) => {
    const track = document.getElementById("reelTrack")
    const viewport = document.getElementById("reelViewport")

    const itemWidth = 110
    const totalItens = 40
    const indexAlvo = totalItens - 6

    track.style.transition = "none"
    track.style.transform = "translateX(0px)"
    track.innerHTML = ""

    for(let i = 0; i < totalItens; i++){
      const relic = (i === indexAlvo)
        ? relicAlvo
        : reliquias[Math.floor(Math.random() * reliquias.length)]

      const div = document.createElement("div")
      div.className = "reelItem " + relic.raridade
      div.innerHTML = `<img src="${relic.imagem}"><span>${relic.nome}</span>`
      track.appendChild(div)
    }

    void track.offsetWidth

    const viewportWidth = viewport.clientWidth
    const offset = -(indexAlvo * itemWidth - viewportWidth / 2 + itemWidth / 2)

    requestAnimationFrame(() => {
      track.style.transition = "transform 3.2s cubic-bezier(0.12,0.78,0.15,1)"
      track.style.transform = `translateX(${offset}px)`
    })

    setTimeout(resolve, 3350)
  })
}


async function girar(quantidade, auto){
  const preco = quantidade === 2 ? PRECO_GIRO_DUPLO : PRECO_GIRO

  moedas = Number(localStorage.getItem("moedas")) || 0

  if(moedas < preco){
    if(!auto) alert("Moedas insuficientes!")
    return false
  }

  if(!auto){
    const b1 = document.getElementById("btnGirar1"); if(b1) b1.disabled = true
    const b2 = document.getElementById("btnGirar2"); if(b2) b2.disabled = true
  }

  moedas -= preco
  salvarEstado()
  atualizarMoedasTela()

  for(let i = 0; i < quantidade; i++){
    const relic = sortearReliquia()

    await animarGiro(relic)

    const jaTinha = reliquiasPossuidas.includes(relic.id)

    if(!jaTinha){
      reliquiasPossuidas.push(relic.id)
      salvarEstado()
    }

    await mostrarPopupNovaReliquia(relic, !jaTinha, auto)
  }

  if(!auto){
    const b1 = document.getElementById("btnGirar1"); if(b1) b1.disabled = false
    const b2 = document.getElementById("btnGirar2"); if(b2) b2.disabled = false
  }

  renderizarReliquias()
  return true
}


function comprarAutoRoll(){
  moedas = Number(localStorage.getItem("moedas")) || 0

  if(moedas < PRECO_AUTO_ROLL){
    alert("Moedas insuficientes! Precisa de " + formatarMoedas(PRECO_AUTO_ROLL))
    return
  }

  moedas -= PRECO_AUTO_ROLL
  autoRollDesbloqueado = true
  salvarEstado()
  atualizarMoedasTela()
  alert("Auto Giro desbloqueado!")
  atualizarBotaoAutoRoll()
}

function alternarAutoRoll(){
  if(!autoRollDesbloqueado){
    comprarAutoRoll()
    return
  }

  autoRollAtivo = !autoRollAtivo
  atualizarBotaoAutoRoll()

  if(autoRollAtivo){
    rodarAutoRoll()
  }
}

async function rodarAutoRoll(){
  const b1 = document.getElementById("btnGirar1"); if(b1) b1.disabled = true
  const b2 = document.getElementById("btnGirar2"); if(b2) b2.disabled = true

  while(autoRollAtivo){
    const sucesso = await girar(1, true)

    if(!sucesso){
      autoRollAtivo = false
      atualizarBotaoAutoRoll()
      alert("Moedas insuficientes! Auto Giro desligado.")
      break
    }
  }

  if(b1) b1.disabled = false
  if(b2) b2.disabled = false
}

function atualizarBotaoAutoRoll(){
  const btn = document.getElementById("btnAutoRoll")
  if(!btn) return

  if(!autoRollDesbloqueado){
    btn.innerHTML = "🔒 Auto Giro<br><span>" + formatarMoedas(PRECO_AUTO_ROLL) + " moedas</span>"
    return
  }

  btn.innerHTML = autoRollAtivo ? "⏹️ Parar Auto Giro" : "▶️ Ligar Auto Giro"
}


function mostrarPopupNovaReliquia(relic, nova, autoFechar){
  return new Promise((resolve) => {
    const overlay = document.getElementById("overlayNovaReliquia")
    const conteudo = document.getElementById("popupRelicConteudo")

    conteudo.className = "popupRelic grande " + relic.raridade

    conteudo.innerHTML = `
      ${nova ? '<div class="badgeNew">NEW</div>' : ""}
      <img src="${relic.imagem}">
      <h2 class="raridadeTag">${nova ? "✨ NOVA RELÍQUIA! ✨" : "Relíquia repetida"}</h2>
      <p class="nomeRelic">${relic.nome}</p>
      <p class="raridadeTag">${nomeRaridade[relic.raridade]}</p>
      <p class="buffRelic">Buff: x${relic.buff}</p>
      <p class="chanceRelic">Chance de conseguir: ${chanceItem(relic).toFixed(3)}%</p>
      ${autoFechar ? "" : '<button id="btnFecharPopup">Continuar</button>'}
    `

    overlay.classList.add("ativo")

    if(autoFechar){
      setTimeout(() => {
        overlay.classList.remove("ativo")
        resolve()
      }, 1300)
      return
    }

    document.getElementById("btnFecharPopup").onclick = function(){
      overlay.classList.remove("ativo")
      resolve()
    }
  })
}


function equiparReliquia(id){
  if(!reliquiasPossuidas.includes(id)){
    return
  }

  if(reliquiaEquipada === id){
    reliquiaEquipada = 0
  }else{
    reliquiaEquipada = id
  }

  salvarEstado()
  renderizarInventario()
  renderizarReliquias()
}


function renderizarReliquias(){
  const container = document.getElementById("containerReliquias")
  container.innerHTML = ""

  reliquias.forEach(relic => {
    const possui = reliquiasPossuidas.includes(relic.id)
    const equipado = reliquiaEquipada === relic.id

    const div = document.createElement("div")
    div.className = "cardRelic " + relic.raridade + (equipado ? " equipado" : "") + (!possui ? " bloqueado" : "")

    const imagemHtml = possui
      ? `<img src="${relic.imagem}">`
      : `<div class="lockBox">🔒</div>`

    div.innerHTML = `
      ${imagemHtml}
      <p class="nomeRelic">${relic.nome}</p>
      <p class="raridadeTag">${nomeRaridade[relic.raridade]}</p>
      <p class="buffRelic">Buff: x${relic.buff}</p>
      <p class="chanceRelic">Chance: ${chanceItem(relic).toFixed(3)}%</p>
      <p class="${possui ? (equipado ? "tagEquipado" : "") : "tagBloqueado"}">
        ${possui ? (equipado ? "✔️ Equipado" : "Possui (toque pra equipar)") : "🔒 Bloqueada"}
      </p>
    `

    if(possui){
      div.style.cursor = "pointer"
      div.onclick = function(){ equiparReliquia(relic.id) }
    }

    container.appendChild(div)
  })
}

function renderizarInventario(){
  const container = document.getElementById("listaInventario")
  container.innerHTML = ""

  const possuidas = reliquias.filter(r => reliquiasPossuidas.includes(r.id))

  if(possuidas.length === 0){
    container.innerHTML = "<p>Você ainda não tem nenhuma relíquia.</p>"
    return
  }

  possuidas.forEach(relic => {
    const equipado = reliquiaEquipada === relic.id

    const div = document.createElement("div")
    div.className = "cardRelic " + relic.raridade + (equipado ? " equipado" : "")
    div.style.cursor = "pointer"
    div.onclick = function(){ equiparReliquia(relic.id) }

    div.innerHTML = `
      <img src="${relic.imagem}">
      <p class="nomeRelic">${relic.nome}</p>
      <p class="raridadeTag">${nomeRaridade[relic.raridade]}</p>
      <p class="buffRelic">Buff: x${relic.buff}</p>
      <p class="${equipado ? "tagEquipado" : ""}">${equipado ? "✔️ Equipado" : "Toque pra equipar"}</p>
    `

    container.appendChild(div)
  })
}

function renderizarChances(){
  const container = document.getElementById("listaChances")
  container.innerHTML = ""

  reliquias.forEach(relic => {
    const possui = reliquiasPossuidas.includes(relic.id)

    const div = document.createElement("div")
    div.className = "cardRelic " + relic.raridade + (!possui ? " bloqueado" : "")

    const imagemHtml = possui
      ? `<img src="${relic.imagem}">`
      : `<div class="lockBox">🔒</div>`

    div.innerHTML = `
      ${imagemHtml}
      <p class="nomeRelic">${relic.nome}</p>
      <p class="raridadeTag">${nomeRaridade[relic.raridade]}</p>
      <p class="chanceRelic">Chance: ${chanceItem(relic).toFixed(3)}%</p>
    `

    container.appendChild(div)
  })
}

function renderizarLucky(){
  const nivelAtual = Math.min(luckyNivel, LUCKY_MAX)
  const ganhoPorNivel = ganhoPercentualPorNivelLucky()

  document.getElementById("luckyNivel").innerHTML =
    "Nível: " + luckyNivel + " / " + LUCKY_MAX

  document.getElementById("luckyBonus").innerHTML =
    "Cada nível dá +" + ganhoPorNivel.toFixed(1) + "% de chance (relativo) pra qualquer relíquia acima de Comum.<br>" +
    "No seu nível atual: +" + (ganhoPorNivel * nivelAtual).toFixed(1) + "%<br>" +
    "No nível máximo (10): +" + (ganhoPorNivel * LUCKY_MAX).toFixed(1) + "%"

  const botao = document.getElementById("btnMelhorarLucky")

  if(luckyNivel >= LUCKY_MAX){
    botao.innerHTML = "Nível máximo!"
    botao.disabled = true
    return
  }

  botao.disabled = false
  botao.innerHTML = "Melhorar (custo: " + formatarMoedas(custoLucky(luckyNivel)) + ")"
}

function melhorarLucky(){
  if(luckyNivel >= LUCKY_MAX){
    return
  }

  const custo = custoLucky(luckyNivel)

  moedas = Number(localStorage.getItem("moedas")) || 0

  if(moedas < custo){
    alert("Moedas insuficientes!")
    return
  }

  moedas -= custo
  luckyNivel++
  salvarEstado()
  atualizarMoedasTela()
  renderizarLucky()
  renderizarReliquias()
}

function atualizarMoedasTela(){
  document.getElementById("moedas").innerHTML =
    "Moedas: " + formatarMoedas(moedas)
}

function formatarMoedas(valor){
  if(valor >= 1e12) return (valor/1e12).toFixed(1).replace(".0","") + "T"
  if(valor >= 1e9) return (valor/1e9).toFixed(1).replace(".0","") + "B"
  if(valor >= 1e6) return (valor/1e6).toFixed(1).replace(".0","") + "M"
  if(valor >= 1e3) return (valor/1e3).toFixed(1).replace(".0","") + "K"
  return valor.toString()
}



function abrirChances(){
  renderizarChances()
  document.getElementById("overlayChances").classList.add("ativo")
}

function abrirInventario(){
  renderizarInventario()
  document.getElementById("overlayInventario").classList.add("ativo")
}

function abrirLucky(){
  renderizarLucky()
  document.getElementById("overlayLucky").classList.add("ativo")
}

function fecharModal(idOverlay){
  document.getElementById(idOverlay).classList.remove("ativo")
}


function inicializarPrecos(){
  const p1 = document.getElementById("precoGiro1")
  const p2 = document.getElementById("precoGiro2")
  if(p1) p1.textContent = formatarMoedas(PRECO_GIRO) + " moedas"
  if(p2) p2.textContent = formatarMoedas(PRECO_GIRO_DUPLO) + " moedas"
}

atualizarMoedasTela()
renderizarReliquias()
inicializarPrecos()
atualizarBotaoAutoRoll()
