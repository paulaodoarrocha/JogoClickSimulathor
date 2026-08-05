function Verificar(){
let nome = document.getElementById("nome").value
let senha = document.getElementById("senha").value
let email = document.getElementById("email").value
  

  
if(email.includes("@gmail.com") && senha.length >= 9 && email.length >= 5 ){
  alert("Carregando Imformaçoes..")
  alert("Espere mas um pouco...")
  alert("Indo para o jogo!!")
  window.location.href = "Game.html"
}
  
else if(nome.length <= 5){
  alert("Caracteristicas Insuficientes!!")
}
else if(senha.length <= 8){
  alert("Caracteristicas Insuficientes")
  
}
else{
  alert("Informaçoes Invalidas")
}
}
  