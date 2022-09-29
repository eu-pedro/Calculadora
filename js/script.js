let currentOperationText = document.querySelector("#current-operation")
let button = document.querySelectorAll("button")
let h3 = document.querySelector("#calc > h3")
let deletar = [];


function Inserir(num){
  var valor = document.querySelector("#current-operation").innerHTML

  document.querySelector("#current-operation").innerHTML = valor + num 
  
}

function Limpar(){
  currentOperationText.textContent = "";
  deletar.splice(0, deletar.length);
  
}

function Deletar(){
  var renderizar = document.querySelector("#current-operation").innerHTML
  document.querySelector("#current-operation").innerHTML = renderizar.substring(0, renderizar.length -1) 
}