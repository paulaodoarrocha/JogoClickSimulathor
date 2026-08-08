let bossFinalMusic = new Audio("FinalBoss.mp3")
bossFinalMusic.volume = 0.4
bossFinalMusic.loop = true 

function controlarMusicaFinalBoss(){
  if(bossFinalMusic.paused){
    bossFinalMusic.play()
    document.getElementById("BossFinalMusic").innerHTML = "On"
  }
  else{
    bossFinalMusic.pause()
    document.getElementById("BossFinalMusic").innerHTML = "Off"
  }
}