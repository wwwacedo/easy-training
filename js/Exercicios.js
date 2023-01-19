export default function Exercicios({exercicios}) {
    return exercicios.map((exercicio) => {
        return `
        <div class="card card-body card-body-exercicio border-primary mx-3 mb-3">
            <div class="fw-bold fs-5">${exercicio.id} - ${exercicio.nome}</div>
            ${exercicio.series ? `<div>Séries: ${exercicio.series}</div>` : ''}
            ${exercicio.repeticoes ? `<div>Repetições: ${exercicio.repeticoes}</div>` : ''}
            ${exercicio.carga ? `<div>Carga: ${exercicio.carga} kg</div>` : ''}
            ${exercicio.intervalo ? `<div>Intervalo: ${exercicio.intervalo} seg.</div>` : ''}
        </div>
        `
    }).join('');
}