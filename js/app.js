import InputsTopo from "./InputsTopo.js";
import InputsExercicio from "./InputsExercicio.js";
import BtnAdicionarExercicio from "./BtnAdicionarExercicio.js";
import BtnSalvarTreino from "./BtnSalvarTreino.js";
import Treino from "./Treino.js";
import Exercicios from "./Exercicios.js";

const $InputsTopo = document.querySelector('#inputs-topo');
const $InputsExercicio = document.querySelector('#inputs-exercicio');
const $btnAdicionarExercicio = document.querySelector('#btn-adicionar-exercicio');
const $btnSalvarTreino = document.querySelector('#btn-salvar-treino');
const $form = document.querySelector('form');
const $infos = document.querySelector('#infos-treino');


const $infoNomeTreino = $infos.querySelector('#info-nome-treino');
const $infoDescricao = $infos.querySelector('#info-descricao');
const $infoNomeExercicio = $infos.querySelector('#info-nome-exercicio');
const $infoSeries = $infos.querySelector('#info-series');
const $infoRepeticoes = $infos.querySelector('#info-repeticoes');
const $infoCarga = $infos.querySelector('#info-carga');
const $infoIntervalo = $infos.querySelector('#info-intervalo');
const $infosExercicios = [$infoNomeExercicio, $infoSeries, $infoRepeticoes, $infoCarga, $infoIntervalo];
const $allInfos = document.querySelectorAll('.info');

const treinos = JSON.parse(localStorage.getItem('treinos')) || [];

criarTreinos(treinos);


let exercicios = [];
const id = (arg) => {
    return arg.length + 1
}

$InputsTopo.innerHTML = InputsTopo();
$InputsExercicio.innerHTML = InputsExercicio(id(exercicios));
$btnAdicionarExercicio.innerHTML = BtnAdicionarExercicio();
$btnSalvarTreino.innerHTML = BtnSalvarTreino();

const $inputNomeTreino = $form.querySelector('#nome-treino');
const $inputDescricao = $form.querySelector('#descricao');
const $inputNomeExercicio = $form.querySelector('#nome-exercicio');
const $inputSeries = $form.querySelector('#series');
const $inputRepeticoes = $form.querySelector('#repeticoes');
const $inputCarga = $form.querySelector('#carga');
const $inputIntervalo = $form.querySelector('#intervalo');
const $ulExercicios = document.querySelector('#exercicios');
const $inputsExercicios = [$inputNomeExercicio, $inputSeries, $inputRepeticoes, $inputCarga, $inputIntervalo];
const $allInputs = document.querySelectorAll('input');

$form.addEventListener('keyup', (e) => {
    switch (e.target.id) {
        case 'nome-treino': 
            $infoNomeTreino.innerHTML = `Treino: <span>${$inputNomeTreino.value}</span>`;
            break;
        case 'descricao':
            $infoDescricao.innerHTML = `Descrição: <span>${$inputDescricao.value}</span>`;
            break;
        case 'nome-exercicio':
            $infoNomeExercicio.innerHTML = `${id(exercicios)}. <span>${$inputNomeExercicio.value}</span>`;
            break;
        case 'series':
            $infoSeries.innerHTML = `Séries: <span>${$inputSeries.value}</span>`;
            break;
        case 'repeticoes':
            $infoRepeticoes.innerHTML = `Repetições: <span>${$inputRepeticoes.value}</span>`;
            break;
        case 'carga':
            $infoCarga.innerHTML = `Carga: <span>${$inputCarga.value}</span> Kg`;
            break;
        case 'intervalo':
            $infoIntervalo.innerHTML = `Intervalo: <span>${$inputIntervalo.value}</span> seg.`;
            break;
    }
});

$form.addEventListener('change', (e) => {
    switch (e.target.id) {
        case 'series':
            $infoSeries.innerHTML = `Séries: <span>${$inputSeries.value}</span>`;
            break;
        case 'repeticoes':
            $infoRepeticoes.innerHTML = `Repetições: <span>${$inputRepeticoes.value}</span>`;
            break;
        case 'carga':
            $infoCarga.innerHTML = `Carga: <span>${$inputCarga.value}</span> Kg`;
            break;
        case 'intervalo':
            $infoIntervalo.innerHTML = `Intervalo: <span>${$inputIntervalo.value}</span> seg.`;
            break;
    }
});

$btnAdicionarExercicio.addEventListener('click', (e) => {
    e.preventDefault();
    salvarExercicio();
    $infosExercicios.forEach((info) => {info.textContent = ''});
    $inputsExercicios.forEach((input) => {input.value = ''});
    criarInfoExercicios(exercicios);
});


function salvarExercicio() {
    const exercicio = {
        id: id(exercicios),
        nome: `${$inputNomeExercicio.value}`,
        series: `${$inputSeries.value}`,
        repeticoes: `${$inputRepeticoes.value}`,
        carga: `${$inputCarga.value}`,
        intervalo: `${$inputIntervalo.value}`,
    }
    exercicios.push(exercicio);
}

function criarInfoExercicios(arr) {
    
    $ulExercicios.innerHTML = '';
    arr.forEach(exercicio => {
        const $li = document.createElement('li');
        $li.innerHTML = `${exercicio.id}. ${exercicio.nome} | ${exercicio.series} x ${exercicio.repeticoes} reps | ${exercicio.carga ? `${exercicio.carga} kg | ` : ``}${exercicio.intervalo} seg.`;
        $ulExercicios.appendChild($li);
    })
}

$btnSalvarTreino.addEventListener('click', (e) => {
    e.preventDefault();
    // mostrar modal com o treino montado
    salvarTreino();
    criarTreinos(treinos);
    $allInfos.forEach((info) => info.textContent = '');
    $allInputs.forEach((input) => input.value = '');
    exercicios = [];
    $ulExercicios.innerHTML = '';
    // salvar treino no localStorage
});

function salvarTreino() {
    const treino = {
        id: id(treinos),
        nome: `${$inputNomeTreino.value}`,
        descricao: `${$inputDescricao.value}`,
        exercicios: []
    }
    exercicios.forEach((ex) => treino.exercicios.push(ex));
    treinos.push(treino);
    updateLocalStorage()
}

function criarTreinos(treinos) {
    const $treinos = document.querySelector('#treinos');
    $treinos.innerHTML = '';
    treinos.forEach((treino) => {
        const $div = document.createElement('div');
        $div.classList.add('mb-3');
        $div.innerHTML = Treino({...treino});
        const $newDiv = $div.querySelector('.card-body');
        $newDiv.innerHTML = Exercicios({...treino});
        $treinos.appendChild($div);
    })
    
}

function updateLocalStorage() {
    localStorage.setItem('treinos', JSON.stringify(treinos));
}

// document.addEventListener('click', (e) => {
//     console.log(e.target)
// })