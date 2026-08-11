// =====================
// CONFIGURAÃ‡ÃƒO SUPABASE
// =====================
const SUPABASE_URL = "https://efjqtwzyfxrtbqunwezd.supabase.co"
const SUPABASE_KEY = "sb_publishable_XcL3QhuOLyieluwevdLNJg_8IhVrIQj"

const cliente = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)

// =====================
// ÃUDIOS
// =====================
const musica = new Audio("MusicLogin.mp3")
musica.volume = 0.09

musica.loop = true
const somErro = new Audio("Erro.mp3")
somErro.volume = 0.8

const somCerto = new Audio("SomCerto.mp3")
somCerto.volume = 0.8

// Toca mÃºsica ao primeiro clique
document.addEventListener("click", function() {
  musica.play().catch(function() {})
}, { once: true })
// âœ… FUNÃ‡ÃƒO PARA ATUALIZAR NOME
async function atualizarNomeSupabase(novoNome) {
  try {
    const resultado = await cliente.auth.getUser()
    
    if (resultado.error || !resultado.data.user) {
      return
    }

    const userId = resultado.data.user.id

    const { error } = await cliente
      .from("Jogadores")
      .update({
        usuarios: novoNome
      })
      .eq("user_id", userId)

    if (error) {
      console.error("Erro ao atualizar nome:", error.message)
      return
    }

    console.log("âœ… Nome atualizado para:", novoNome)
  } catch (erro) {
    console.error("Erro:", erro)
  }
}
// =====================
// ELEMENTOS DO HTML
// =====================
const formulario = document.getElementById("formLogin")
const botaoCadastro = document.getElementById("botaoCadastro")
const botaoEsqueciSenha = document.getElementById("botaoEsqueciSenha")



// =====================
// FUNÃ‡ÃƒO: CRIAR CONTA
// =====================
botaoCadastro.addEventListener("click", async function() {
  const nome = document.getElementById("nome").value.trim()
  const email = document.getElementById("email").value.trim()
  const senha = document.getElementById("senha").value

  // ValidaÃ§Ãµes
  if (nome.length < 3) {
    somErro.play().catch(function() {})
    alert("Nome precisa ter 3+ caracteres!")
    return
  }

  if (email === "") {
    somErro.play().catch(function() {})
    alert("Digite seu email!")
    return
  }

  if (senha.length < 9) {
    somErro.play().catch(function() {})
    alert("Senha precisa ter 9+ caracteres!")
    return
  }

  // Cria conta no Supabase
  const resultado = await cliente.auth.signUp({
    email: email,
    password: senha
  })

  if (resultado.error) {
    somErro.play().catch(function() {})
    alert("Erro ao criar conta:\n\n" + resultado.error.message)
    return
  }

  const usuario = resultado.data.user

  if (!usuario) {
    somErro.play().catch(function() {})
    alert("Conta nÃ£o foi criada.")
    return
  }

  // Cria registro em inventario
  const resultadoInventario = await cliente
    .from("inventario")
    .insert({
      user_id: usuario.id,
      poder: 0,
      moedas: 0,
      ganho: 1,
      pet: "0",
      espadas: "0",
      espada: "0",
      acessorio: "",
      autoclick: 0,
      pets_possuidos: "0",
      usuarios: nome
    })

  if (resultadoInventario.error) {
    somErro.play().catch(function() {})
    alert("Erro ao criar inventÃ¡rio:\n\n" + resultadoInventario.error.message)
    return
  }

  somCerto.play().catch(function() {})
  alert("Conta criada com sucesso!\n\nConfirme seu email no Gmail.\n\nDepois volte aqui e clique em Entrar.")
})

// =====================
// FUNÃ‡ÃƒO: FAZER LOGIN
// =====================
formulario.addEventListener("submit", async function(e) {
  e.preventDefault()

  const email = document.getElementById("email").value.trim()
  const senha = document.getElementById("senha").value

  if (email === "") {
    somErro.play().catch(function() {})
    alert("Digite seu email!")
    return
  }

  if (senha === "") {
    somErro.play().catch(function() {})
    alert("Digite sua senha!")
    return
  }

  // Faz login
  const resultado = await cliente.auth.signInWithPassword({
    email: email,
    password: senha
  })

  if (resultado.error) {
    somErro.play().catch(function() {})
    alert("Erro ao fazer login:\n\n" + resultado.error.message)
    return
  }

  const usuario = resultado.data.user

  if (!usuario) {
    somErro.play().catch(function() {})
    alert("Falha ao fazer login.")
    return
  }

  // Verifica se tem registro em inventario
  const resultadoBusca = await cliente
    .from("inventario")
    .select("user_id")
    .eq("user_id", usuario.id)
    .maybeSingle()

  if (resultadoBusca.error) {
    somErro.play().catch(function() {})
    alert("Erro ao verificar dados:\n\n" + resultadoBusca.error.message)
    return
  }

  // Se nÃ£o tem registro, cria
  if (!resultadoBusca.data) {
    // Cria inventÃ¡rio
    const resultadoInventario = await cliente
      .from("inventario")
      .insert({
        user_id: usuario.id,
        poder: 0,
        moedas: 0,
        ganho: 1,
        pet: "0",
        espadas: "0",
        espada: "0",
        acessorio: "",
        autoclick: 0,
        pets_possuidos: "0",
        usuarios: "Jogador"
      })

    if (resultadoInventario.error) {
      somErro.play().catch(function() {})
      alert("Erro ao criar inventÃ¡rio:\n\n" + resultadoInventario.error.message)
      return
    }
  }

  somCerto.play().catch(function() {})
  alert("Login realizado com sucesso!")

  // Aguarda um pouco antes de redirecionar
  setTimeout(function() {
    window.location.href = "Carregando.html"
  }, 500)
})

// =====================
// FUNÃ‡ÃƒO: ESQUECI SENHA
// =====================
botaoEsqueciSenha.addEventListener("click", async function() {
  const email = document.getElementById("email").value.trim()

  if (email === "") {
    somErro.play().catch(function() {})
    alert("Digite seu email primeiro!")
    return
  }

  const resultado = await cliente.auth.resetPasswordForEmail(
    email,
    {
      redirectTo: "https://paulaodoarrocha.github.io/JogoClickSimulathor/NovaSenha.html"
    }
  )

  if (resultado.error) {
    somErro.play().catch(function() {})
    alert("Erro ao enviar recuperaÃ§Ã£o:\n\n" + resultado.error.message)
    return
  }

  somCerto.play().catch(function() {})
  alert("Email de recuperaÃ§Ã£o enviado!\n\nAbra seu Gmail e clique no link para criar uma nova senha.")
})