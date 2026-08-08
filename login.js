let musica = new Audio("MusicLogin.mp3")
 musica.volume = 0.09
 musica.loop = true

document.addEventListener("click", function(){
  musica.play()
})


let somErro = new Audio("Erro.mp3")
somErro.volume = 0.8



let deuCerto= new Audio("SomCerto.mp3")
deuCerto.volume = 0.8




function Verificar(){
let nome = document.getElementById("nome").value
let senha = document.getElementById("senha").value
let email = document.getElementById("email").value
  
  
if(email.includes("@gmail.com") && senha.length >= 9 && email.length >= 5 ){
  deuCerto.play()
  alert("Carregando Imformaçoes..")
  alert("Espere mas um pouco...")
  alert("Indo para o jogo!!")
  
  window.location.href = "Game.html"
}
  
else if(nome.length <= 5){
  alert("Caracteristicas Insuficientes!!")
  somErro.play()
}
else if(senha.length <= 8){
  alert("Caracteristicas Insuficientes")
  somErro.play()
}
else{
  alert("Informaçoes Invalidas")
}
}
 
