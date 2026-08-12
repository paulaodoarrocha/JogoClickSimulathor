const SUPABASE_URL = "https://efjqtwzyfxrtbqunwezd.supabase.co"

const SUPABASE_KEY = "sb_publishable_XcL3QhuOLyieluwevdLNJg_8IhVrIQj"

const cliente = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
)


async function salvarEspadasSupabase(){

    const resultado = await cliente.auth.getUser()

    if(resultado.error || !resultado.data.user){
        return
    }

    const userId = resultado.data.user.id

    const listaEspadas = []

    for(let i = 1; i <= 9; i++){

        if(localStorage.getItem("espada" + i) === "true"){
            listaEspadas.push(i)
        }

    }

    const resposta = await cliente
    .from("inventario")
    .update({
        espadas: listaEspadas.join(",")
    })
    .eq("user_id", userId)
    .select()

    if(resposta.error){
        console.log("Erro ao salvar espadas:", resposta.error.message)
    }

}

async function carregarEspadasSupabase(){

    const resultado = await cliente.auth.getUser()

    if(resultado.error || !resultado.data.user){
        return
    }

    const userId = resultado.data.user.id

    const resposta = await cliente
        .from("inventario")
        .select("espadas")
        .eq("user_id", userId)
        .maybeSingle()

    if(resposta.error || !resposta.data){
        return
    }

    const espadas = resposta.data.espadas

    if(!espadas){
        return
    }

    espadas.split(",").forEach(numero => {

        numero = Number(numero.trim())

        if(numero >= 1 && numero <= 9){
            localStorage.setItem("espada" + numero, "true")
        }

    })
}



async function carregarPoderDoSupabase() {
  try {
    const resultado = await cliente.auth.getUser()
    
    if (resultado.error || !resultado.data.user) {
      console.log("UsuÃ¡rio nÃ£o autenticado")
      return
    }

    const userId = resultado.data.user.id

    const { data, error } = await cliente
      .from("inventario")
      .select("poder")
      .eq("user_id", userId)
      .maybeSingle()

    if (error) {
      console.error("Erro ao carregar poder:", error.message)
      return
    }

    if (data && data.poder !== null) {
  localStorage.setItem("poder", String(Number(data.poder)))
  console.log("âœ… Poder salvo:", localStorage.getItem("poder"))
}

  } catch (erro) {
    console.error("Erro em carregarPoderDoSupabase:", erro)
  }
}

async function carregarMoedasDoSupabase() {
  try {
    const resultado = await cliente.auth.getUser()

    if (resultado.error || !resultado.data.user) {
      console.log("UsuÃ¡rio nÃ£o autenticado")
      return
    }

    const userId = resultado.data.user.id

    const { data, error } = await cliente
      .from("inventario")
      .select("moedas")
      .eq("user_id", userId)
      .maybeSingle()

    if (error) {
      console.error("Erro ao carregar moedas:", error.message)
      return
    }

    if (data && data.moedas !== null) {
      localStorage.setItem("moedas", data.moedas)
      console.log("âœ… Moedas carregadas do Supabase:", data.moedas)
    }

  } catch (erro) {
    console.error("Erro em carregarMoedasDoSupabase:", erro)
  }
}

async function salvarPoderSupabase(){

    const resultado = await cliente.auth.getUser()

    if(resultado.error || !resultado.data.user){
        console.log("Erro: usuÃ¡rio nÃ£o estÃ¡ logado")
        return
    }

    const userId = resultado.data.user.id

    const resposta = await cliente
    .from("inventario")
    .update({
        poder: Number(poder)   
    })
    .eq("user_id", userId)

    if(resposta.error){
        console.log("ERRO AO SALVAR PODER:", resposta.error.message)
    }

}



async function garantirRegistroUsuario() {
  try {
    const resultado = await cliente.auth.getUser()
    
    if (resultado.error || !resultado.data.user) {
      return 
    }

    const userId = resultado.data.user.id

    const { data: existe } = await cliente
      .from("inventario")
      .select("user_id, usuarios")
      .eq("user_id", userId)
      .maybeSingle()

    if (existe) {
      if (!existe.usuarios) {
        await cliente
          .from("inventario")
          .update({ usuarios: resultado.data.user.email })
          .eq("user_id", userId)
      }
      return 
    }

    await cliente
      .from("inventario")
      .insert({
        user_id: userId,
        poder: 0,
        moedas: 0,
        usuarios: resultado.data.user.email
      })

  } catch (erro) {
    console.error("Erro:", erro) 
  }
}


window.addEventListener("load", async function() {
  await garantirRegistroUsuario()
})