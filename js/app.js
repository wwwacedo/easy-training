import TreinoTopo from "./TreinoTopo.js";
import Exercicio from "./Exercicio.js";
import BtnAdicionarExercicio from "./BtnAdicionarExercicio.js";

const $treinoTopo = document.querySelector('#treino-topo');
const $exercicio = document.querySelector('#exercicio');
const $btnAdicionarExercicio = document.querySelector('#btn-adicionar-exercicio');
const $form = document.querySelector('form');
const $infos = document.querySelector('#infos-treino');

const $infoNomeTreino = $infos.querySelector('#info-nome-treino');
const $infoDescricao = $infos.querySelector('#info-descricao');
const $infoNomeExercicio = $infos.querySelector('#info-nome-exercicio');
const $infoSeries = $infos.querySelector('#info-series');
const $infoRepeticoes = $infos.querySelector('#info-repeticoes');
const $infoCarga = $infos.querySelector('#info-carga');
const $infoIntervalo = $infos.querySelector('#info-intervalo');

const treinos = JSON.parse(localStorage.getItem('treinos')) || [];
const exercicios = [];
const id = () => {
    return exercicios.length + 1
}

$treinoTopo.innerHTML = TreinoTopo();
$exercicio.innerHTML = Exercicio(id());
$btnAdicionarExercicio.innerHTML = BtnAdicionarExercicio();

const $inputNomeTreino = $form.querySelector('#nome-treino');
const $inputDescricao = $form.querySelector('#descricao');
const $inputNomeExercicio = $form.querySelector('#nome-exercicio');
const $inputSeries = $form.querySelector('#series');
const $inputRepeticoes = $form.querySelector('#repeticoes');
const $inputCarga = $form.querySelector('#carga');
const $inputIntervalo = $form.querySelector('#intervalo');

$form.addEventListener('keyup', (e) => {
    switch (e.target.id) {
        case 'nome-treino': 
            $infoNomeTreino.innerHTML = `Treino: <span>${$inputNomeTreino.value}</span>`;
        case 'descricao':
            $infoDescricao.innerHTML = `Descrição: <span>${$inputDescricao.value}</span>`;
        case 'nome-exercicio':
            $infoNomeExercicio.innerHTML = `${id()}. <span>${$inputNomeExercicio.value}</span>`;
        case 'series':
            $infoSeries.innerHTML = `Séries: <span>${$inputSeries.value}</span>`;
        case 'repeticoes':
            $infoRepeticoes.innerHTML = `Repetições: <span>${$inputRepeticoes.value}</span>`;
        case 'carga':
            $infoCarga.innerHTML = `Carga: <span>${$inputCarga.value}</span> Kg`;
        case 'intervalo':
            $infoIntervalo.innerHTML = `Intervalo: <span>${$inputIntervalo.value}</span> seg.`;
    }
});

$form.addEventListener('change', (e) => {
    switch (e.target.id) {
        case 'series':
            $infoSeries.innerHTML = `Séries: <span>${$inputSeries.value}</span>`;
        case 'repeticoes':
            $infoRepeticoes.innerHTML = `Repetições: <span>${$inputRepeticoes.value}</span>`;
        case 'carga':
            $infoCarga.innerHTML = `Carga: <span>${$inputCarga.value}</span> Kg`;
        case 'intervalo':
            $infoIntervalo.innerHTML = `Intervalo: <span>${$inputIntervalo.value}</span> seg.`;
    }
});

// $btnAdicionarExercicio.addEventListener('click', (e) => {
//     e.preventDefault();
//     salvarExercicio();
//     $infoNomeExercicio.textContent = '';
//     $infoSeries.textContent = '';
//     $infoRepeticoes.textContent = '';
//     $infoCarga.textContent = '';
//     $infoIntervalo.textContent = '';
//     console.log(exercicios)
//     $exercicio.innerHTML = Exercicio(id());


//     // EXERCÍCIO
//     const $inputNomeExercicio = $form.querySelector('#nome-exercicio');
//     $inputNomeExercicio.addEventListener('keyup', () => {
//         $infoNomeExercicio.textContent = `${id()}. ${$inputNomeExercicio.value}`;
//     });

//     // SÉRIES
//     const $inputSeries = $form.querySelector('#series');
//     $inputSeries.addEventListener('keyup', () => {
//         $infoSeries.textContent = `Séries: ${$inputSeries.value}`;
//     });
//     $inputSeries.addEventListener('change', () => {
//         $infoSeries.textContent = `Séries: ${$inputSeries.value}`;
//     });

//     // REPETIÇÕES 
//     const $inputRepeticoes = $form.querySelector('#repeticoes');
//     $inputRepeticoes.addEventListener('keyup', () => {
//         $infoRepeticoes.textContent = `Repetições: ${$inputRepeticoes.value}`;
//     });
//     $inputRepeticoes.addEventListener('change', () => {
//         $infoRepeticoes.textContent = `Repetições: ${$inputRepeticoes.value}`;
//     });

//     // CARGA
//     const $inputCarga = $form.querySelector('#carga');
//     $inputCarga.addEventListener('keyup', () => {
//         $infoCarga.textContent = `Carga: ${$inputCarga.value} Kg`;
//     });
//     $inputCarga.addEventListener('change', () => {
//         $infoCarga.textContent = `Carga: ${$inputCarga.value} Kg`;
//     });

//     // INTERVALO
//     const $inputIntervalo = $form.querySelector('#intervalo');
//     $inputIntervalo.addEventListener('keyup', () => {
//         $infoIntervalo.textContent = `Intervalo: ${$inputIntervalo.value} seg.`;
//     });
//     $inputIntervalo.addEventListener('change', () => {
//         $infoIntervalo.textContent = `Intervalo: ${$inputIntervalo.value} seg.`;
//     });





// });


// function salvarExercicio() {
//     const exercicio = {
//         nome: `${$infoNomeExercicio.lastChild.textContent}`,
//         series: `${$infoSeries.lastChild.textContent}`,
//         repeticoes: `${$infoRepeticoes.lastChild.textContent}`,
//         carga: `${$infoCarga.childNodes['span'].innerHTML}`,
//         intervalo: `${$infoIntervalo.childNodes['span'].textContent}`,
//     }
//     exercicios.push(exercicio);
// }

// // document.addEventListener('click', (e) => {
// //     console.log(e.target)
// // })