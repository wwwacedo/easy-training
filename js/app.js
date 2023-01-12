import TreinoTopo from "./TreinoTopo.js";
import Exercicio from "./Exercicio.js";
import BtnAdicionarExercicio from "./BtnAdicionarExercicio.js";
import BtnSalvarTreino from "./BtnSalvarTreino.js";

const $btnCriarTreino = document.querySelector('#criar-treino');
const $treinoTopo = document.querySelector('#treino-topo');
const $exercicio = document.querySelector('#exercicio');
const $btnSalvarTreino = document.querySelector('#btn-salvar-treino');
const $btnAdicionarExercicio = document.querySelector('#btn-adicionar-exercicio');
const $form = document.querySelector('form');
const $infos = document.querySelector('#infos');

// ID`s do TreinoTopo(): #nome-treino, #descricao

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


$btnCriarTreino.addEventListener('click', () => {
    $btnCriarTreino.classList.replace('btn-primary', 'btn-secondary');
    $treinoTopo.innerHTML = TreinoTopo();
    $exercicio.innerHTML = Exercicio(id());
    $btnAdicionarExercicio.innerHTML = BtnAdicionarExercicio();
    $btnSalvarTreino.innerHTML = BtnSalvarTreino();

    const $inputNomeTreino = $form.querySelector('#nome-treino');
    $inputNomeTreino.addEventListener('keyup', () => {
        $infoNomeTreino.textContent = $inputNomeTreino.value;
    });

    // DESCRIÇÃO
    const $inputDescricao = $form.querySelector('#descricao');
    $inputDescricao.addEventListener('keyup', () => {
        $infoDescricao.textContent = $inputDescricao.value;
    });
    
    // EXERCÍCIO
    const $inputNomeExercicio = $form.querySelector('#nome-exercicio');
    $inputNomeExercicio.addEventListener('keyup', () => {
        $infoNomeExercicio.textContent = `${id()}. ${$inputNomeExercicio.value}`;
    });

    // SÉRIES
    const $inputSeries = $form.querySelector('#series');
    $inputSeries.addEventListener('keyup', () => {
        $infoSeries.textContent = `Séries: ${$inputSeries.value}`;
    });
    $inputSeries.addEventListener('change', () => {
        $infoSeries.textContent = `Séries: ${$inputSeries.value}`;
    });

    // REPETIÇÕES 
    const $inputRepeticoes = $form.querySelector('#repeticoes');
    $inputRepeticoes.addEventListener('keyup', () => {
        $infoRepeticoes.textContent = `Repetições: ${$inputRepeticoes.value}`;
    });
    $inputRepeticoes.addEventListener('change', () => {
        $infoRepeticoes.textContent = `Repetições: ${$inputRepeticoes.value}`;
    });

    // CARGA
    const $inputCarga = $form.querySelector('#carga');
    $inputCarga.addEventListener('keyup', () => {
        $infoCarga.textContent = `Carga: ${$inputCarga.value} Kg`;
    });
    $inputCarga.addEventListener('change', () => {
        $infoCarga.textContent = `Carga: ${$inputCarga.value} Kg`;
    });
    
    // INTERVALO
    const $inputIntervalo = $form.querySelector('#intervalo');
    $inputIntervalo.addEventListener('keyup', () => {
        $infoIntervalo.textContent = `Intervalo: ${$inputIntervalo.value} seg.`;
    });
    $inputIntervalo.addEventListener('change', () => {
        $infoIntervalo.textContent = `Intervalo: ${$inputIntervalo.value} seg.`;
    });
});

$btnAdicionarExercicio.addEventListener('click', (e) => {
    e.preventDefault();
    salvarExercicio();
    console.log(exercicios)
    console.log(id())
    $exercicio.innerHTML = Exercicio(id());
    $infoNomeExercicio.textContent = '';
    $infoSeries.textContent = '';
    $infoRepeticoes.textContent = '';
    $infoCarga.textContent = '';
    $infoIntervalo.textContent = '';
    
    // EXERCÍCIO
    const $inputNomeExercicio = $form.querySelector('#nome-exercicio');
    $inputNomeExercicio.addEventListener('keyup', () => {
        $infoNomeExercicio.textContent = `${id()}. ${$inputNomeExercicio.value}`;
    });

    // SÉRIES
    const $inputSeries = $form.querySelector('#series');
    $inputSeries.addEventListener('keyup', () => {
        $infoSeries.textContent = `Séries: ${$inputSeries.value}`;
    });
    $inputSeries.addEventListener('change', () => {
        $infoSeries.textContent = `Séries: ${$inputSeries.value}`;
    });

    // REPETIÇÕES 
    const $inputRepeticoes = $form.querySelector('#repeticoes');
    $inputRepeticoes.addEventListener('keyup', () => {
        $infoRepeticoes.textContent = `Repetições: ${$inputRepeticoes.value}`;
    });
    $inputRepeticoes.addEventListener('change', () => {
        $infoRepeticoes.textContent = `Repetições: ${$inputRepeticoes.value}`;
    });

    // CARGA
    const $inputCarga = $form.querySelector('#carga');
    $inputCarga.addEventListener('keyup', () => {
        $infoCarga.textContent = `Carga: ${$inputCarga.value} Kg`;
    });
    $inputCarga.addEventListener('change', () => {
        $infoCarga.textContent = `Carga: ${$inputCarga.value} Kg`;
    });

    // INTERVALO
    const $inputIntervalo = $form.querySelector('#intervalo');
    $inputIntervalo.addEventListener('keyup', () => {
        $infoIntervalo.textContent = `Intervalo: ${$inputIntervalo.value} seg.`;
    });
    $inputIntervalo.addEventListener('change', () => {
        $infoIntervalo.textContent = `Intervalo: ${$inputIntervalo.value} seg.`;
    });

    function salvarExercicio() {
        const exercicio = {
            nome: `${$infoNomeExercicio.textContent}`,
            series: `${$infoSeries.textContent}`,
            repeticoes: `${$infoRepeticoes.textContent}`,
            carga: `${$infoCarga.textContent}`,
            intervalo: `${$infoIntervalo.textContent}`,
        }
        exercicios.push(exercicio);
    }

});

$btnSalvarTreino.addEventListener('click', (e) => {
    e.preventDefault();

});



// document.addEventListener('click', (e) => {
//     console.log(e.target)
// })