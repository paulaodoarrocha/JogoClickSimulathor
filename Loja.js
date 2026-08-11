let moedas = Number(localStorage.getItem("moedas")) || 0

document.getElementById("moedas").innerHTML = "Moedas: " + formatarMoedas(moedas)


let petEquipado = Number(localStorage.getItem("petEquipado")) || 0



async function comprarPet(numero, preco){

    moedas = Number(localStorage.getItem("moedas")) || 0

    let possui = localStorage.getItem("pet" + numero) === "true"

    if(possui){
        equiparPet(numero)
        return
    }

    if(moedas >= preco){

        
        const { data, error } = await cliente.rpc(
            "comprar_pet",
            {
                p_pet_id: numero,
                p_preco: preco
            }
        )

        if(error){
            console.error("Erro ao comprar pet:", error.message)
            alert("Erro ao comprar pet:\n\n" + error.message)
            return
        }

        
        if(data.sucesso){
            
            moedas = Number(data.novo_saldo) || 0
            localStorage.setItem("moedas", moedas)
            localStorage.setItem("pet" + numero, "true")

            alert("Pet comprado!")

            Moedas()
            BotoesPets()

        }else{
            alert("Erro ao comprar pet!")
        }

    }else{

        alert("Moedas insuficientes!")

    }

}


function equiparPet(numero){

let possui = localStorage.getItem("pet" + numero) === "true"

if(!possui){
return
}

if(petEquipado == numero){

petEquipado = 0

}else{

petEquipado = numero

}

localStorage.setItem("petEquipado", petEquipado)

BotoesPets()

}



function BotoesPets(){

for(let i = 1; i <= 9; i++){

let botao = document.getElementById("petBtn" + i)

if(!botao){
continue
}

let possui = localStorage.getItem("pet" + i) === "true"

if(!possui){

document.getElementById("textoPet" + i).innerHTML = "Comprar"

continue

}

if(petEquipado == i){

document.getElementById("textoPet" + i).innerHTML = "Equipado ✔️"

}else{

document.getElementById("textoPet" + i).innerHTML = "Equipar"

}

}

}


BotoesPets()

function formatarMoedas(valor){

if(valor >= 1e12) return (valor/1e12).toFixed(1).replace(".0","") + "T"
if(valor >= 1e9) return (valor/1e9).toFixed(1).replace(".0","") + "B"
if(valor >= 1e6) return (valor/1e6).toFixed(1).replace(".0","") + "M"
if(valor >= 1e3) return (valor/1e3).toFixed(1).replace(".0","") + "K"

return valor.toString()

}

let petFofo = new Audio("PetFofo.mp3")
petFofo.volume = 0.5

petBtn1.addEventListener("click", function(){
  petFofo.play()
})


let petGuerra = new Audio("PetGuerra.mp3")
petGuerra.volume = 0.5

petBtn2.addEventListener("click", function(){
  petGuerra.play()
})


let petNaoEstouRindo = new Audio("NaoEstouRindo.mp3")
petNaoEstouRindo.volume = 0.5

petBtn3.addEventListener("click", function(){
  petNaoEstouRindo.play()
})


let petEstranho = new Audio("GatoEstranho.mp3")
petEstranho.volume = 0.5

petBtn4.addEventListener("click", function(){
  petEstranho.play()
})


let petPodeSim = new Audio("PodeSim.mp3")
petPodeSim.volume = 0.5

petBtn5.addEventListener("click", function(){
  petPodeSim.play()
})

let petCalaBoca= new Audio("CalaBoca.mp3")
petCalaBoca.volume = 0.5

petBtn6.addEventListener("click", function(){
  petCalaBoca.play()
})


let petSoEuPossoFalar = new Audio("SoEuPossoFalar.mp3")
petSoEuPossoFalar.volume = 0.5

petBtn7.addEventListener("click", function(){
  petSoEuPossoFalar.play()
})


let petSixSeven = new Audio("SixSeven.mp3")
petSixSeven.volume = 0.5

petBtn8.addEventListener("click", function(){
  petSixSeven.play()
})


let petAura = new Audio("PetAura.mp3")
petAura.volume = 0.5

petBtn9.addEventListener("click", function(){
  petAura.play()
})