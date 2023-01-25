export default function Exercicios({exercicios}) {
    return exercicios.map((exercicio) => {
        return `
        <div>
            <div class="card card-body card-body-exercicio mx-1">
                <div class="fw-bold fs-6"><span class="id-exercicio">${exercicio.id}</span> - <span class="fs-6">${exercicio.nome}</span></div>        
                <div>
                ${exercicio.series ? `<span>${exercicio.series} <i class="fa-solid fa-xmark xmark-icon"></i></span>` : ''}
                ${exercicio.repeticoes ? `<span>${exercicio.repeticoes} rep.</span>` : ''}
                ${exercicio.carga ? `<span><i class="fa-solid fa-dumbbell dumbbell-icon"></i> ${exercicio.carga} kg</span>` : ''}
                ${exercicio.duracao ? `<span><i class="fa-solid fa-stopwatch stopwatch-icon"></i> ${exercicio.duracao} seg.</span>` : ''}
                ${exercicio.intervalo ? `<span><i class="fa-regular fa-clock clock-icon"></i> ${exercicio.intervalo} seg.</span>` : ''}
                </div>
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



