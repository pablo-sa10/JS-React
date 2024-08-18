function fatorial() {
    const num = parseInt(prompt("Digite um número inteiro positivo"));

    if (isNaN(num) || num <= 0) {
        alert("Digite um número válido");
        fatorial();
        return;
    }

    let numFatorial = 1;
    for (let i = num; i > 1; i--) { 
        numFatorial *= i;
    }

    alert(`O fatorial de ${num} é ${numFatorial}`);
}

fatorial();
