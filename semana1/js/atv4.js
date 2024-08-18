function dado() {
    let dado = prompt("Digite algum dado");

    if (dado === "") {
        alert("Por favor, digite algum dado válido");
        dado();
        return;
    }

    if (!isNaN(dado)) {
        if (dado.includes(".") || dado.includes(",")) {
            dado = parseFloat(dado); 
        } else {
            dado = parseInt(dado);
        }
    }

    if (confirm("Deseja ver o tipo de dado digitado?")) {
        alert(`O dado "${dado}" é do tipo ${typeof(dado)}`);
    } else {
        alert("Obrigado por visitar a página :)");
    }
}

dado();
