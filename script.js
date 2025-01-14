const form = document.getElementById('form');
const imgAprovado = '<img src= "./images/aprovado.png" />';
const imgReprovado = '<img src= "./images/reprovado.png" />';

const aprovado = '<span class="resultado aprovado">Aprovado</span>'
const reprovado = '<span class="resultado reprovado">Reprovado</span>'

let linhas = '';
const materias = [];
const notas = [];
const mediaInformada = parseFloat(prompt("Qual a média ?"));

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedias();
})


//functions
function adicionaLinha() {
    const inputMateria = document.getElementById('input-materia');
    const inputNota = document.getElementById('input-nota');

    let linha = '<tr>';

    if (materias.includes(inputMateria.value)) {
        alert(`Esta Matéria já foi inserida...`)
    } else {
        materias.push(inputMateria.value);
        notas.push(parseFloat(inputNota.value));
        linha += `<td>${inputMateria.value}</td>`
        linha += `<td>${inputNota.value}</td>`
        linha += `<td>${inputNota.value >= mediaInformada ? imgAprovado : imgReprovado}</td>`

        linhas += linha;
    }

    inputMateria.value = '';
    inputNota.value = '';
};

function atualizaTabela() {
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = linhas
};

function atualizaMedias() {
    const mediaFinal = calculaMedia();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= mediaInformada ? aprovado : reprovado;
}

function calculaMedia() {
    let somaDasMedias = 0;
    for (let i = 0; i < notas.length; i++) {
        somaDasMedias += notas[i];
    }
    return somaDasMedias / notas.length;
}