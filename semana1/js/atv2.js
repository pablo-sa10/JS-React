
function numeroPrimo(){
    const num = prompt("digite um numero inteiro positivo");
    
    if(num == "" || num <= 0 || num.includes(",") || num.includes(".")){
        alert("digite um numero válido");
        numeroPrimo();
        return;
    }
    
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

if(numeroPrimo() == true){
    alert("é primo");
}else{
    alert("não é primo")
}