let currentOperationText = document.querySelector("#current-operation")
let button = document.querySelectorAll("button")
let h3 = document.querySelector("#calc > h3")
let deletar = [];


function Calcular(num){
  var valor = document.querySelector("#current-operation")
  valor.innerHTML += num

  if(num === "AC"){
    Limpar();
  } 
  if(num === "DEL") {
    Deletar();
  }
}

function Limpar(){
  currentOperationText.textContent = ""
}

function Deletar(){
  currentOperationText.textContent = ""
  console.log(currentOperationText.length)
}