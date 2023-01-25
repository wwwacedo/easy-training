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
const $infoDuracao = $form.querySelector('#info-duracao');
const $infoIntervalo = $form.querySelector('#info-intervalo');
const $infoObservacao = $form.querySelector('#info-observacao');
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
const $inputDuracao = $form.querySelector('#duracao');
const $inputIntervalo = $form.querySelector('#intervalo');
const $inputObservacao = $form.querySelector('#observacao');
const $olExercicios = document.querySelector('#exercicios');
const $inputsTreino = [$inputNomeTreino, $inputDescricao];
const $inputsExercicios = [$inputNomeExercicio, $inputSeries, $inputRepeticoes, $inputCarga, $inputDuracao, $inputIntervalo];
const $allInputs = document.querySelectorAll('input');

// let topoTreinoDefinido = false;

$form.addEventListener('keyup', (e) => {
    switch (e.target.id) {
        case 'nome-treino':
            $infoNomeTreino.innerHTML = `${$inputNomeTreino.value ? `Nome: <span class="info-value">${$inputNomeTreino.value}</span>` : ''}`;

        case 'descricao':
            $infoDescricao.innerHTML = `${$inputDescricao.value ? `Descrição: <span class="info-value">${$inputDescricao.value}</span>` : ''}`;

        case 'nome-exercicio':
            $infoNomeExercicio.innerHTML = `<span class="info-value">${$inputNomeExercicio.value}</span>`;

        case 'series':
            $infoSeries.innerHTML = `${$inputSeries.value ?
                `<span class="info-value">${$inputSeries.value}</span>
                <i class="fa-solid fa-xmark xmark-icon"></i>
                ` : ''}`;

        case 'repeticoes':
            $infoRepeticoes.innerHTML = `${$inputRepeticoes.value ? `<span class="info-value">${$inputRepeticoes.value}</span> reps.` : ''}`;

        case 'carga':
            $infoCarga.innerHTML = `${$inputCarga.value ?
                `<i class="fa-solid fa-dumbbell dumbbell-icon"></i>
                <span class="info-value">${$inputCarga.value}</span> Kg
                ` : ''}`;

        case 'duracao':
            $infoDuracao.innerHTML = `${$inputDuracao.value ?
                `<i class="fa-solid fa-stopwatch stopwatch-icon"></i>
                <span class="info-value">${$inputDuracao.value}</span> seg.` : ''}`;

        case 'intervalo':
            $infoIntervalo.innerHTML = `${$inputIntervalo.value ?
                `<i class="fa-regular fa-clock clock-icon"></i>
                <span class="info-value">${$inputIntervalo.value}</span> seg.` : ''}`;
        
        case 'observacao':
            $infoObservacao.innerHTML = `${$inputObservacao.value ?
                `<i class="fa-solid fa-triangle-exclamation triangle-exclamation-icon"> </i>
                <span class="info-value">${$inputObservacao.value}</span>` : ''}`;

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
            $infoSeries.innerHTML = `${$inputSeries.value ?
                `<span class="info-value">${$inputSeries.value}</span>
                <i class="fa-solid fa-xmark xmark-icon"></i>
                ` : ''}`;

        case 'repeticoes':
            $infoRepeticoes.innerHTML = `${$inputRepeticoes.value ? `<span class="info-value">${$inputRepeticoes.value}</span> reps.` : ''}`;

        case 'carga':
            $infoCarga.innerHTML = `${$inputCarga.value ?
                `<i class="fa-solid fa-dumbbell dumbbell-icon"></i>
                <span class="info-value">${$inputCarga.value}</span> Kg
                ` : ''}`;

        case 'duracao':
            $infoDuracao.innerHTML = `${$inputDuracao.value ?
                `<i class="fa-solid fa-stopwatch stopwatch-icon"></i>
                <span class="info-value">${$inputDuracao.value}</span> seg.` : ''}`;

        case 'intervalo':
            $infoIntervalo.innerHTML = `${$inputIntervalo.value ?
                `<i class="fa-regular fa-clock clock-icon"></i>
                <span class="info-value">${$inputIntervalo.value}</span> seg.` : ''}`;

        case 'observacao':
            $infoObservacao.innerHTML = `${$inputObservacao.value ?
                `<i class="fa-solid fa-triangle-exclamation triangle-exclamation-icon"> </i>
                <span class="info-value">${$inputObservacao.value}</span>` : ''}`;

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

$btnAdicionarExercicio.addEventListener('click', (e) => {
    e.preventDefault();
    if ($inputNomeTreino.value && $inputNomeExercicio.value) {

        $inputNomeTreino.setAttribute('disabled', '')

        if (exercicios.length === 0) $olExercicios.classList.remove('d-none');

        if ($inputDescricao.value) $inputDescricao.setAttribute('disabled', '')

        $form.querySelector('#infos-exercicios').classList.add('d-none')

        criarInfoExercicio();

        $infosExercicios.forEach((info) => { info.textContent = '' });
        $inputsExercicios.forEach((input) => { input.value = '' });

        $inputNomeExercicio.focus();
    } else {
        alert('Preencha, no mínimo, o nome do treino e do exercício a ser adicionado!')
    }

});

function salvarExercicios() {
    exercicios = [];
    const lis = $olExercicios.querySelectorAll('li');
    lis.forEach(li => {
        const series = li.querySelector('[data-info="series"]');
        const repeticoes = li.querySelector('[data-info="repeticoes"]');
        const carga = li.querySelector('[data-info="carga"]'); 
        const duracao = li.querySelector('[data-info="duracao"]');
        const intervalo = li.querySelector('[data-info="intervalo"]');
        const observacao = li.querySelector('[data-info="observacao"]');
        
        const exercicio = {
            id: id(exercicios),
            nome: `${li.querySelector('[data-info="nome"]').innerHTML}`,
        }
        if (series) exercicio.series = series.innerHTML;
        if (repeticoes) exercicio.repeticoes = repeticoes.innerHTML;
        if (carga) exercicio.carga = carga.innerHTML;
        if (duracao) exercicio.duracao = duracao.innerHTML;
        if (intervalo) exercicio.intervalo = intervalo.innerHTML;
        if (observacao) exercicio.observacao = observacao.innerHTML;
        
        exercicios.push(exercicio);
    })
}

function criarInfoExercicio() {
    const $li = document.createElement('li');
    const nome = `<span data-info='nome'>${$inputNomeExercicio.value}</span>`
    
    const series = `${$inputSeries.value ? 
        ` <span data-info='series'>${$inputSeries.value}</span> <i class="fa-solid fa-xmark xmark-icon"></i> ` : ``}`;
    
    const reps = `${$inputRepeticoes.value ? 
        ` <span data-info='repeticoes'>${$inputRepeticoes.value}</span> rep. ` : ``}`
    
    const carga = `${$inputCarga.value ? 
        ` <i class="fa-solid fa-dumbbell dumbbell-icon"></i> <span data-info='carga'>${$inputCarga.value}</span> kg ` : ``}`;
    
    const duracao = `${$inputDuracao.value ? 
        ` <i class="fa-solid fa-stopwatch stopwatch-icon"></i> <span data-info='duracao'>${$inputDuracao.value}</span> seg. ` : ``}`;

    const intervalo = `${$inputIntervalo.value ? 
        ` <i class="fa-regular fa-clock clock-icon"></i> <span data-info='intervalo'>${$inputIntervalo.value}</span> seg.` : ``}`;
        
    const observacao = `${$inputObservacao.value ? 
        `<i class="fa-solid fa-triangle-exclamation triangle-exclamation-icon"></i> 
        <span data-info='observacao' class="small">${$inputObservacao.value}</span>` : ``}`;

    $li.innerHTML = `
            <div class="row align-items-center">
                <div class="col">
                    ${nome}${series || reps || carga ? '<br>' : ''}${series}${reps}${carga}
                    ${duracao || intervalo ? '<br>' : ''}${duracao}${intervalo}
                    ${observacao ? `<br>${observacao}` : ''}
                </div>
                <div class="col-2">
                    <i class="fa-solid fa-delete-left delete-icon" id="delete"></i>
                </div>
            </div>
            `;
    $li.querySelector('#delete').addEventListener('click', function () {
        this.parentNode.parentNode.parentNode.remove();
    })
    $olExercicios.appendChild($li);

}

$btnSalvarTreino.addEventListener('click', () => {
    salvarExercicios()
    if (exercicios.length !== 0) {
        const resposta = confirm('Deseja salvar o treino?');
        if (resposta === true) {
            salvarTreino();
            criarTreinos(treinos);
            $allInfos.forEach((info) => info.textContent = '');
            $allInputs.forEach((input) => input.value = '');
            exercicios = [];
            $olExercicios.innerHTML = '';
            $inputNomeTreino.removeAttribute('disabled', '')
            $inputDescricao.removeAttribute('disabled', '')
            $form.querySelector('#infos-treino').classList.add('d-none')
            $form.querySelector('#infos-exercicios').classList.add('d-none')
        }
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
        const $divTreino = document.createElement('div');
        $divTreino.innerHTML = Treino({ ...treino });
        const $divExercicios = $divTreino.querySelector('.card-body-treino');
        $divExercicios.innerHTML = Exercicios({ ...treino });

        // const $btnEditar = $divExercicios.querySelectorAll('.btn-editar-treino');
        // $btnEditar.forEach(btn => btn.addEventListener('click', function() {
        //     const element = this.parentNode.parentNode.parentNode.parentNode; 
        //     const $modal = element.querySelector('#exercicioDialog')
        //     const $btnCancelar = element.querySelector('#cancelar');
        //     const $btnConfirmar = element.querySelector('#confirmar');
        //     $btnCancelar.addEventListener('click', function () {
        //         $modal.close();
        //     });
        //     $btnConfirmar.addEventListener('click', function () {
        //         const $inputs = $modal.querySelectorAll('input');
        //         console.log($inputs)
        //     })
        //     $modal.showModal()
        // }))

        $treinos.appendChild($divTreino);
        $divTreino.querySelector('.btnApagarTreino').addEventListener('click', function () {
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

