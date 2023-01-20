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


const $infoNomeTreino = $form.querySelector('#info-nome-treino');
const $infoDescricao = $form.querySelector('#info-descricao');
const $infoNomeExercicio = $form.querySelector('#info-nome-exercicio');
const $infoSeries = $form.querySelector('#info-series');
const $infoRepeticoes = $form.querySelector('#info-repeticoes');
const $infoCarga = $form.querySelector('#info-carga');
const $infoIntervalo = $form.querySelector('#info-intervalo');
const $infosTreino = [$infoNomeTreino, $infoDescricao];
const $infosExercicios = [$infoNomeExercicio, $infoSeries, $infoRepeticoes, $infoCarga, $infoIntervalo];
const $allInfos = document.querySelectorAll('.info');

let treinos = JSON.parse(localStorage.getItem('treinos')) || [];

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
const $inputsTreino = [$inputNomeTreino, $inputDescricao];
const $inputsExercicios = [$inputNomeExercicio, $inputSeries, $inputRepeticoes, $inputCarga, $inputIntervalo];
const $allInputs = document.querySelectorAll('input');

let topoTreinoDefinido = false;

$form.addEventListener('keyup', (e) => {
    switch (e.target.id) {
        case 'nome-treino':
            $infoNomeTreino.innerHTML = `${$inputNomeTreino.value ? `Nome: <span>${$inputNomeTreino.value}</span>` : ''}`;
           
        case 'descricao':
            $infoDescricao.innerHTML = `${$inputDescricao.value ? `Descrição: <span>${$inputDescricao.value}</span>`: ''}`;
          
        case 'nome-exercicio':
            $infoNomeExercicio.innerHTML = `<span>${$inputNomeExercicio.value}</span>`;
         
        case 'series':
            $infoSeries.innerHTML = `${$inputSeries.value ? `Séries: <span>${$inputSeries.value}</span>`: ''}`;
        
        case 'repeticoes':
            $infoRepeticoes.innerHTML = `${$inputRepeticoes.value ? `Repetições: <span>${$inputRepeticoes.value}</span>`: ''}`;
          
        case 'carga':
            $infoCarga.innerHTML = `${$inputCarga.value ? `Carga: <span>${$inputCarga.value}</span> Kg`: ''}`;
           
        case 'intervalo':
            $infoIntervalo.innerHTML = `${$inputIntervalo.value ? `Intervalo: <span>${$inputIntervalo.value}</span> seg.` : ''}`;
           
    }
    if ($inputsTreino.some((input) => input.value != '')) {
        $form.querySelector('#infos-treino').classList.remove('d-none')
    } else {
        $form.querySelector('#infos-treino').classList.add('d-none')
    }

    if ($inputsExercicios.some((input) => input.value != '')) {
        $form.querySelector('#infos-exercicios').classList.remove('d-none')
    } else {
        $form.querySelector('#infos-exercicios').classList.add('d-none')
    }
    
});

$form.addEventListener('change', (e) => {
    switch (e.target.id) {
        case 'series':
            $infoSeries.innerHTML = `${$inputSeries.value ? `Séries: <span>${$inputSeries.value}</span>` : ''}`;
            
        case 'repeticoes':
            $infoRepeticoes.innerHTML = `${$inputRepeticoes.value ? `Repetições: <span>${$inputRepeticoes.value}</span>` : ''}`;
            
        case 'carga':
            $infoCarga.innerHTML = `${$inputCarga.value ? `Carga: <span>${$inputCarga.value}</span> Kg` : ''}`;
           
        case 'intervalo':
            $infoIntervalo.innerHTML = `${$inputIntervalo.value ? `Intervalo: <span>${$inputIntervalo.value}</span> seg.` : ''}`;
            
    }
    if($inputsTreino.some((input) => input.value != '')) {
        $form.querySelector('#infos-treino').classList.remove('d-none')
    } else {
        $form.querySelector('#infos-treino').classList.add('d-none')
    }

    if($inputsExercicios.some((input) => input.value != '')) {
        $form.querySelector('#infos-exercicios').classList.remove('d-none')
    } else {
        $form.querySelector('#infos-exercicios').classList.add('d-none')
    }
    
});

$btnAdicionarExercicio.addEventListener('click', (e) => {

    if($inputNomeTreino.value && $inputNomeExercicio.value) {
        console.log($inputNomeTreino)
        $inputNomeTreino.setAttribute('disabled', '')
        
        if (exercicios.length === 0) $ulExercicios.classList.remove('d-none');
        
        if($inputDescricao) $inputNomeTreino.setAttribute('disabled', '')
   
        $form.querySelector('#infos-exercicios').classList.add('d-none')
        
        salvarExercicio();
        
        $infosExercicios.forEach((info) => { info.textContent = '' });
        $inputsExercicios.forEach((input) => { input.value = '' });
        criarInfoExercicios(exercicios);
    }

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
        const series = `${exercicio.series ? `| ${exercicio.series} S ` : ``}`;
        const reps = `${exercicio.repeticoes ? `| ${exercicio.repeticoes} R `: ``}`
        const carga = `${exercicio.carga ? `| ${exercicio.carga} kg ` : ``}`;
        const intervalo = `${exercicio.intervalo ? `| ${exercicio.intervalo} seg.` : ``}`;
        $li.innerHTML = `${exercicio.nome} ${series}${reps}${carga}${intervalo}`;
        $ulExercicios.appendChild($li);
    })
}

$btnSalvarTreino.addEventListener('click', (e) => {
    e.preventDefault();
    // mostrar modal com o treino montado
    if (exercicios.length !== 0) {
        salvarTreino();
        criarTreinos(treinos);
        $allInfos.forEach((info) => info.textContent = '');
        $allInputs.forEach((input) => input.value = '');
        exercicios = [];
        $ulExercicios.innerHTML = '';
        $inputNomeTreino.removeAttribute('disabled', '')
        $inputDescricao.removeAttribute('disabled', '')
        $form.querySelector('#infos-treino').classList.add('d-none')
        $form.querySelector('#infos-exercicios').classList.add('d-none')
    } else {
        alert("Não há exercícios salvos!")
    }
});

function salvarTreino() {
    const treino = {
        id: novoId(),
        nome: `${$inputNomeTreino.value}`,
        descricao: `${$inputDescricao.value}`,
        exercicios: []
    }
    exercicios.forEach((ex) => treino.exercicios.push(ex));
    treinos.push(treino);
    updateLocalStorage(treinos);
}

function novoId() {
    return Math.floor(Math.random() * 1000000);
}

function criarTreinos(treinos) {
    const $treinos = document.querySelector('#treinos');
    $treinos.innerHTML = '';
    treinos.forEach((treino) => {
        const $div = document.createElement('div');
        $div.innerHTML = Treino({ ...treino });
        const $newDiv = $div.querySelector('.card-body-treino');
        $newDiv.innerHTML = Exercicios({ ...treino });
        // const $btn = $div.querySelector('.card-body-treino');
        $treinos.appendChild($div);
        $div.querySelector('.btnApagarTreino').addEventListener('click', function() {
            const element = this.parentNode.parentNode.parentNode;
            apagarTreino(element)
            apagarBtnTreino(element)
        })
    })
}

function updateLocalStorage(treinos) {
    localStorage.setItem('treinos', JSON.stringify(treinos));
}

function apagarBtnTreino(element) {
    element.remove();
}

function apagarTreino(element) {
    const id = element.classList.item(1).split('-')[1];
    treinos = treinos.filter(element => element.id != id);
    updateLocalStorage(treinos)
}

// document.addEventListener('click', (e) => {
//     console.log(e.target)
// })