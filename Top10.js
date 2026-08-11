async function carregarTop10() {
  try {
    const tabelaExistente = document.querySelector(".containerTop10")
    
    if (tabelaExistente) {
      tabelaExistente.remove()
      return
    }

    // Pega o usuÃ¡rio autenticado
    const resultado = await cliente.auth.getUser()
    
    if (resultado.error || !resultado.data.user) {
      alert("Voce precisa estar logado!")
      return
    }

    const user = resultado.data.user  // âœ… DEFINE user AQUI

    const { data, error } = await cliente
      .from("inventario")
      .select("user_id, usuarios, poder, moedas")
      .order("poder", { ascending: false })
      .limit(10)

    if (error) {
      alert("Erro ao carregar top 10: " + error.message)
      return
    }

    if (!data || data.length === 0) {
      document.getElementById("top10").innerHTML = "<p>Nenhum jogador ainda!</p>"
      return
    }

    mostrarTabelaTop10(data, user)  // âœ… PASSA user AQUI

  } catch (erro) {
    alert("Erro: " + erro.message)
  }
}
// âœ… ATUALIZA TOP 10 A CADA 5 SEGUNDOS
setInterval(async function() {
  const tabelaAberta = document.querySelector(".containerTop10")
  if (tabelaAberta) {
    carregarTop10() // Recarrega se estiver aberta
  }
}, 5000)

function mostrarTabelaTop10(jogadores, user) {  // âœ… RECEBE user AQUI
  let html = `
<div class="containerTop10">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;">
<h2 style="margin:0;">🏆 TOP 10 JOGADORES 🏆</h2>

<button onclick="fecharTop10()" style="background:gold;color:#000;border:none;padding:5px 10px;border-radius:5px;cursor:pointer;font-weight:bold;">✖</button>

</div>

<table class="tabelaTop10">
<thead>
<tr>
<th>Posição</th>
<th>Nome</th>
<th>Poder</th>
<th>Moedas</th>
</tr>
</thead>
<tbody>
`

  jogadores.forEach((jogador, index) => {
    const posicao = index + 1
    let emoji = "🥇"

if (posicao === 2) emoji = "🥈"
if (posicao === 3) emoji = "🥉"
if (posicao > 3) emoji = posicao + "º"
    // âœ… COMPARA user_id com user.id (nÃ£o com email!)
    const ehJogadorAtual = jogador.user_id === user.id ? "style='background: rgba(255, 215, 0, 0.5) !important;'" : ""

    html += `
      <tr class="linha${posicao}" ${ehJogadorAtual}>
        <td class="posicao">${emoji}</td>
        <td>${jogador.usuarios}</td>
        <td class="poder">${formatarNumero(jogador.poder)}</td>
        <td class="moedas">${formatarMoedas(jogador.moedas)}</td>
      </tr>
    `
  })

  html += `
        </tbody>
      </table>
    </div>
  `

  document.getElementById("top10").innerHTML = html
}

function fecharTop10() {
  const tabela = document.querySelector(".containerTop10")
  if (tabela) {
    tabela.remove()
  }
}

function formatarNumero(num) {
  num = Number(num) || 0


  const lista = [
    ["Trvg", 1e90],
    ["Qrdvg", 1e87],
    ["Uqnd", 1e84],
    ["Nvvg", 1e81],
    ["Spvg", 1e78],
    ["Sxvg", 1e75],
    ["Qivg", 1e72],
    ["Qavg", 1e69],
    ["Tvg", 1e66],
    ["Utvg", 1e63],
    ["Nvgt", 1e60],
    ["Ocvg", 1e57],
    ["Spd", 1e54],
    ["Sxd", 1e51],
    ["Qid", 1e48],
    ["Qad", 1e45],
    ["Td", 1e42],
    ["Dd", 1e39],
    ["Ud", 1e36],
    ["Dc", 1e33],
    ["No", 1e30],
    ["Oc", 1e27],
    ["Sp", 1e24],
    ["Sx", 1e21],
    ["Qi", 1e18],
    ["Qa", 1e15],
    ["T", 1e12],
    ["B", 1e9],
    ["M", 1e6],
    ["K", 1e3]
  ]

  for (let i = 0; i < lista.length; i++) {
    if (num >= lista[i][1]) {
      return (num / lista[i][1]).toFixed(1).replace(".0", "") + lista[i][0]
    }
  }

  return Math.floor(num).toString()
}

function formatarMoedas(valor) {
  if (valor >= 1e12) return (valor / 1e12).toFixed(1).replace(".0", "") + "T"
  if (valor >= 1e9) return (valor / 1e9).toFixed(1).replace(".0", "") + "B"
  if (valor >= 1e6) return (valor / 1e6).toFixed(1).replace(".0", "") + "M"
  if (valor >= 1e3) return (valor / 1e3).toFixed(1).replace(".0", "") + "K"

  return valor.toString()
}