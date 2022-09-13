const valorSecreto = parseInt(Math.random() * 11)

console.log("Número secereto é: ", valorSecreto);




function Chutar(){ 
  const elementoChute = document.getElementById('resultado')
  const chute = parseInt(document.getElementById("valor").value)
  console.log(chute)

  if (chute == valorSecreto) {
    elementoChute.innerHTML = "parabens vc acertou o numero secreto"
  } else if(chute > 10 ||  chute < 0){
    elementoChute.innerHTML = "você deve digitar um numero entre 0 e 10" 
  }else{
    elementoChute.innerHTML = "que pena, esse não é o valor secreto"
  }
}



