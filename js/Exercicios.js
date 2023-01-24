export default function Exercicios({exercicios}) {
    return exercicios.map((exercicio) => {
        return `
        <div>
        <div class="card card-body card-body-exercicio mx-3">
            <div class="fw-bold fs-5"><span class="id-exercicio">${exercicio.id}</span> - <span class="fs-6">${exercicio.nome}</span></div>        
            ${exercicio.series ? `<span>Séries: ${exercicio.series}</span>` : ''}
            ${exercicio.repeticoes ? `<span>Repetições: ${exercicio.repeticoes}</span>` : ''}
            ${exercicio.carga ? `<span>Carga: ${exercicio.carga} kg</span>` : ''}
            ${exercicio.intervalo ? `<span>Intervalo: ${exercicio.intervalo} seg.</span>` : ''}
        </div>
        
        <dialog id="exercicioDialog">
            <form method="dialog">
                <section>
                        <label for="">${exercicio.nome}: </label>
                        <input type="text" name="" id="" value="${exercicio.nome}">
                        ${exercicio.series ? `
                            <label for="">Séries: </label>
                            <input type="number" name="" id="" value="${exercicio.series}">
                        ` : ''}
                        ${exercicio.repeticoes ? `
                            <label for="">Repetições: </label>
                            <input type="number" name="" id="" value="${exercicio.repeticoes}">
                        ` : ''}
                        ${exercicio.carga ? `
                            <label for="">Carga (kg): </label>
                            <input type="number" name="" id="" value="${exercicio.carga}">
                        ` : ''}
                        ${exercicio.intervalo ? `
                            <label for="">Intervalo (seg): </label>
                            <input type="number" name="" id="" value="${exercicio.intervalo}">
                        ` : ''}
                </section>
                <menu>
                    <button id="cancelar" type="reset">Cancelar</button>
                    <button id="confirmar" type="submit">Confirmar</button>
                </menu>
            </form>
        </dialog>
</div>

        `
    }).join('');
}



