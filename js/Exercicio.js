export default function Exercicio(id) {
    return `
    <p class="text-light display-4">Dados do Exercício ${id}</p>

    <div class="input-group mb-3">
        <span class="input-group-text col-4">Exercício: </span>
        <input id="nome-exercicio" type="text" class="form-control col-4" aria-label="" required>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text col-4">Séries: </span>
        <input id="series" type="number" class="form-control col-4" aria-label="" required>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text col-4">Repetições: </span>
        <input id="repeticoes" type="number" class="form-control col-4" aria-label=""  required>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text col-4">Carga: </span>
        <input id="carga" type="number" class="form-control col-4" aria-label="">
        <span class="input-group-text col-2">Kg</span>
    </div>
    <div class="input-group mb-3">
        <span class="input-group-text col-4">Intervalo: </span>
        <input id="intervalo" type="number" class="form-control" aria-label="" required>
        <span class="input-group-text col-2">seg.</span>
    </div>
    `
}