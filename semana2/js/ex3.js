const input = document.getElementById('input')
const btn = document.getElementById('btn')

btn.onclick = () => {
    const texto = input.value;
    
    const textoLimpo = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    const textoInvertido = textoLimpo.split('').reverse().join('');

    if (textoLimpo === textoInvertido) {
        alert("É um palíndromo");
    } else {
        alert("Não é um palíndromo");
    }
};
