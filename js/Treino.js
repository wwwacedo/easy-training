export default function Treino({id, nome, descricao}) {
    return `
    <div class="d-grid gap-2">
        <button class="btn btn-dark botao" type="button" data-bs-toggle="collapse" data-bs-target="#treino-${id}"
            aria-expanded="false" aria-controls="treino-${id}">
            <h3 class="display-6">${nome}</h3>
            <h6 class="">${descricao}</h6>
        </button>
    </div>
    <div class="collapse" id="treino-${id}">
        <div class="card card-body">
        </div>
    </div
    `
}
