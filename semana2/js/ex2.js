
function hora() {
    const data = new Date();

    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    const horaFormatada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

    const h1 = document.getElementById("hora");
    h1.textContent = horaFormatada;

    // Chame a função novamente após 1 segundo
    setTimeout(() => {
        hora();
    }, 1000);
}

hora();
