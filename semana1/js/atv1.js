
function parImpar(){
    const numero = prompt("digite um numero inteiro positivo");
    
    if(numero == "" || numero <= 0 || numero.includes(",") || numero.includes(".")){
        alert("digite um numero válido");
        parImpar();
        return;
    }
    
    if(numero %2 == 0){
        alert("numero par")
    }else{
        alert("numero impar")
    }
}

parImpar();