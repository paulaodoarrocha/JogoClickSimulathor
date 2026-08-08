let paulo = new Audio("Paulao.mp3")
paulo.volume = 0.4
paulo.loop = true 

function controlarMusicaPaulo(){
  if(paulo.paused){
    paulo.play()
    document.getElementById("Paulo").innerHTML = "On"
  }
  else{
    paulo.pause()
    document.getElementById("Paulo").innerHTML = "Off"
  }
}