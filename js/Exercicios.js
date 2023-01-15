export default function Exercicios({exercicios}) {
    return exercicios.map((exercicio) => {
        return `
        <div>
            <p>${exercicio.id} - ${exercicio.nome}</p>
            <p>Séries: ${exercicio.series}</p>
            <p>Repetições: ${exercicio.repeticoes}</p>
            ${exercicio.carga ? `<p>Carga: ${exercicio.carga} kg</p>` : ''}
            <p>Intervalo: ${exercicio.intervalo} seg.</p>
        </div>
        `
    }).join('');
}