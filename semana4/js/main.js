const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('input');
const radioProf = document.getElementById('prof');
const radioAluno = document.getElementById('aluno');
const divProf = document.getElementById('div-prof');
const divAluno = document.getElementById('div-aluno');

function toggleDivs() {
    if (radioProf.checked) {
        divProf.classList.remove('hide');
        divAluno.classList.add('hide');
    } else {
        divProf.classList.add('hide');
        divAluno.classList.remove('hide');
    }
}

// Verifica o estado inicial ao carregar a página
window.onload = toggleDivs;

// Adiciona evento de escuta para alteração nos inputs do tipo radio
radioProf.addEventListener('change', toggleDivs);
radioAluno.addEventListener('change', toggleDivs);

// Função para validação
function validarCampo(input) {
    const errorSpan = document.getElementById(`error-${input.id}`);
    if (input.value.trim() === "") {
        input.classList.add('error');
        errorSpan.style.display = 'inline';
        return false;
    } else {
        input.classList.remove('error');
        errorSpan.style.display = 'none';
        return true;
    }
}

// Adiciona o evento onblur para cada campo de input
inputs.forEach(input => {
    input.addEventListener('blur', () => validarCampo(input));
});

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o reload da página
    let formularioValido = true;
    inputs.forEach(input => {
        if (!validarCampo(input)) {
            formularioValido = false;
        }
    });
    if (formularioValido) {
        // Se o formulário for válido, você pode submetê-lo manualmente
        formulario.submit();
    }
});

function formatarTelefone(input) {
    let valor = input.value.replace(/\D/g, '');
    let formato;

    if (valor.length <= 10) {
        // Formato para (xx)xxxx-xxxx
        formato = valor.replace(/(\d{2})(\d{4})(\d{4})/, '($1)$2-$3');
    } else {
        // Formato para (xx)xxxxx-xxxx
        formato = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
    }

    input.value = formato;
}

document.getElementById('fixo').addEventListener('input', function () {
    formatarTelefone(this);
});

document.getElementById('celular').addEventListener('input', function () {
    formatarTelefone(this);
});

class Pessoa {
    constructor(nome, sobrenome, email, dataNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.dataNascimento = new Date(dataNascimento); // Garantindo que seja uma data
    }

    // Método para retornar o nome completo
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

class Aluno extends Pessoa {
    constructor(nome, sobrenome, email, dataNascimento, curso) {
        super(nome, sobrenome, email, dataNascimento);
        this.curso = curso;
    }
}

class Professor extends Pessoa {
    constructor(nome, sobrenome, email, dataNascimento, areaAtuacao, linkLattes) {
        super(nome, sobrenome, email, dataNascimento);
        this.areaAtuacao = areaAtuacao;
        this.linkLattes = linkLattes;
    }
}