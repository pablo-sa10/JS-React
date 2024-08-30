const btn = document.getElementById("btn")
    const divHora = document.getElementById("hora")

    btn.onclick = function(){

        //apaga o conteudo
        divHora.textContent = "";

        let data = new Date();

        let dia = data.getDate();
        let mes = data.getMonth();
        let ano = data.getFullYear();

        let diaSemana = data.getDay();

        const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
        const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
        divHora.textContent = `${diasDaSemana[diaSemana]}, ${dia} ${meses[mes]} ${ano}`
    }