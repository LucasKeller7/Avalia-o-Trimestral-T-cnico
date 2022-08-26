calcular.addEventListener("click", ()=>{
    peso = document.querySelector("#peso");
    altura = document.querySelector("#altura");
    calcular = document.querySelector("#calcular");
    
    var IMC
    peso = peso.value;
    altura = altura.value;
    IMC = peso/(altura**2); 
    resultado = document.querySelector("#resultado").value = IMC;
});
