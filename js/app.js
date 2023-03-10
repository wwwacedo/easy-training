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
const $infosExercicios = [$infoNomeExercicio, $infoSeries, $infoRepeticoes, $infoCarga, $infoIntervalo, $infoObservacao];
const $allInfos = document.querySelectorAll('.info');

let treinos = JSON.parse(localStorage.getItem('treinos')) || [];
let exercicios = JSON.parse(localStorage.getItem('exercicios')) || [];

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
const $inputsExercicios = [$inputNomeExercicio, $inputSeries, $inputRepeticoes, $inputCarga, $inputDuracao, $inputIntervalo, $inputObservacao];
const $allInputs = document.querySelectorAll('input');

criarTreinos(treinos);
renderizarInfo();

$form.addEventListener('keyup', (e) => {
    switch (e.target.id) {
        case 'nome-treino':
            $infoNomeTreino.innerHTML = `${$inputNomeTreino.value ? `Nome: <span class="info-value">${$inputNomeTreino.value}</span>` : ''}`;

        case 'descricao':
            $infoDescricao.innerHTML = `${$inputDescricao.value ? `Descri????o: <span class="info-value">${$inputDescricao.value}</span>` : ''}`;

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
                `<i class="fa-solid fa-hand hand-icon"></i>
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
                `<i class="fa-solid fa-hand hand-icon"></i>
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
        localStorage.setItem('treino', JSON.stringify($inputNomeTreino.value));

        if (exercicios.length === 0) $olExercicios.classList.remove('d-none');

        if ($inputDescricao.value) {
            $inputDescricao.setAttribute('disabled', '');
            localStorage.setItem('descricao', JSON.stringify($inputDescricao.value));
        }

        $form.querySelector('#infos-exercicios').classList.add('d-none')

        criarInfoExercicio();

        salvarExercicios();
        console.log(exercicios)

        $infosExercicios.forEach((info) => { info.textContent = '' });
        $inputsExercicios.forEach((input) => { input.value = '' });

        $inputNomeExercicio.focus();
    } else {
        alert('Preencha, no m??nimo, o nome do treino e do exerc??cio a ser adicionado!')
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
    updateLocalStorageExercicios();
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
        ` <i class="fa-solid fa-hand hand-icon"></i> <span data-info='intervalo'>${$inputIntervalo.value}</span> seg.` : ``}`;

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
        salvarExercicios();
        console.log(exercicios.length)
        // se o usu??rio deletar todos os exercicios
        if (exercicios.length === 0) {
            localStorage.setItem('treino', JSON.stringify(''));
            localStorage.setItem('descricao', JSON.stringify(''));
            $form.querySelector('#infos-treino').classList.add('d-none');
            $olExercicios.classList.add('d-none');
            $inputNomeTreino.removeAttribute('disabled', '');
            $inputDescricao.removeAttribute('disabled', '');
            $inputNomeTreino.value = '';
            $inputDescricao.value = '';
        }
    })
    $olExercicios.appendChild($li);

}

$btnSalvarTreino.addEventListener('click', () => {
    salvarExercicios();
    if (exercicios.length !== 0) {
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
    } else {
        alert("N??o h?? exerc??cios salvos!")
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
    exercicios = [];
    updateLocalStorageExercicios();
    updateLocalStorageTreinos();
    localStorage.setItem('treino', JSON.stringify(''));
    localStorage.setItem('descricao', JSON.stringify(''));
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

        $treinos.appendChild($divTreino);
        $divTreino.querySelector('.btnApagarTreino').addEventListener('click', function () {
            if (confirm(`Deseja apagar ${treino.nome}?`)) {
                const element = this.parentNode.parentNode.parentNode;
                apagarTreino(element)
                apagarBtnTreino(element)
            }
        })
    })
}

function renderizarInfo() {
    if (exercicios.length > 0) {

        $form.querySelector('#infos-treino').classList.remove('d-none');
        
        const nomeTreino = JSON.parse(localStorage.getItem('treino'));
        $inputNomeTreino.value = nomeTreino;
        $inputNomeTreino.setAttribute('disabled', '')
        $infoNomeTreino.innerHTML = `Nome: <span class="info-value">${nomeTreino}</span>`

        const descricao = JSON.parse(localStorage.getItem('descricao'));
        if(descricao) {
            $inputDescricao.value = descricao;
            $inputDescricao.setAttribute('disabled', '');
            $infoDescricao.innerHTML = `Descri????o: <span class="info-value">${descricao}</span>`;
        }

        $form.querySelector('#infos-treino').classList.remove('d-none')
        $olExercicios.classList.remove('d-none');
        exercicios.forEach(exercicio => {

            const $li = document.createElement('li');
            const nome = `<span data-info='nome'>${exercicio.nome}</span>`

            const series = `${exercicio.series ?
                ` <span data-info='series'>${exercicio.series}</span> <i class="fa-solid fa-xmark xmark-icon"></i> ` : ``}`;

            const reps = `${exercicio.repeticoes ?
                ` <span data-info='repeticoes'>${exercicio.repeticoes}</span> rep. ` : ``}`

            const carga = `${exercicios.carga ?
                ` <i class="fa-solid fa-dumbbell dumbbell-icon"></i> <span data-info='carga'>${exercicios.carga}</span> kg ` : ``}`;

            const duracao = `${exercicio.duracao ?
                ` <i class="fa-solid fa-stopwatch stopwatch-icon"></i> <span data-info='duracao'>${exercicio.duracao}</span> seg. ` : ``}`;

            const intervalo = `${exercicio.intervalo ?
                ` <i class="fa-solid fa-hand hand-icon"></i> <span data-info='intervalo'>${exercicio.intervalo}</span> seg.` : ``}`;

            const observacao = `${exercicio.observacao ?
                `<i class="fa-solid fa-triangle-exclamation triangle-exclamation-icon"></i> 
                                    <span data-info='observacao' class="small">${exercicio.observacao}</span>` : ``}`;

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
                salvarExercicios();
                console.log(exercicios.length)
                // se o usu??rio deletar todos os exercicios
                if (exercicios.length === 0) {
                    localStorage.setItem('treino', JSON.stringify(''));
                    localStorage.setItem('descricao', JSON.stringify(''));
                    $form.querySelector('#infos-treino').classList.add('d-none');
                    $olExercicios.classList.add('d-none');
                    $inputNomeTreino.removeAttribute('disabled', '');
                    $inputDescricao.removeAttribute('disabled', '');
                    $inputNomeTreino.value = '';
                    $inputDescricao.value = '';
                }

            })
            $olExercicios.appendChild($li);
        })
        exercicios = [];
    } 
}

function updateLocalStorageTreinos() {
    localStorage.setItem('treinos', JSON.stringify(treinos));
}

function updateLocalStorageExercicios() {
    localStorage.setItem('exercicios', JSON.stringify(exercicios));
}


function apagarBtnTreino(element) {
    element.remove();
}

function apagarTreino(element) {
    const id = element.classList.item(1).split('-')[1];
    treinos = treinos.filter(element => element.id != id);
    updateLocalStorageTreinos();
}
