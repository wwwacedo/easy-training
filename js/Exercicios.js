export default function Exercicios({exercicios}) {
    return exercicios.map((exercicio) => {
        return `
        <div>
            <div class="card card-body card-body-exercicio mx-1">
                
                <div>
                    <span class="titulo-exercicio fw-bold fs-6 rounded-1 px-1 mb-1">
                        <span class="me-2">${exercicio.id}.</span>
                        <span>${exercicio.nome}</span>
                    </span>
                </div>        
                <div>                    
                    ${exercicio.series ? `<span class="small">${exercicio.series} <i class="fa-solid fa-xmark xmark-icon"></i></span>` : ''}

                    ${exercicio.repeticoes ? `<span class="small">${exercicio.repeticoes} reps.</span>` : ''}
                </div>
                ${exercicio.carga ? `
                    <span class="small row">
                        <div class="col-1"><i class="fa-solid fa-dumbbell dumbbell-icon"></i></div>
                        <div class="col">${exercicio.carga} kg</div>
                    </span>` : ''}
                ${exercicio.duracao ? `
                    <span class="small row">
                        <div class="col-1"><i class="fa-solid fa-stopwatch stopwatch-icon"></i></div> 
                        <div class="col">${exercicio.duracao} seg.</div>
                    </span>` : ''}
                ${exercicio.intervalo ? `
                    <span class="small row">
                        <div class="col-1"><i class="fa-solid fa-hand hand-icon"></i></div> 
                        <div class="col">${exercicio.intervalo} seg.</div>
                    </span>` : ''}
                ${exercicio.observacao ? `
                    <span class="small row">
                        <div class="col-1"><i class="fa-solid fa-triangle-exclamation triangle-exclamation-icon"></i></div>  
                        <div class="col">${exercicio.observacao}</div>
                    </span>` : ''}
            </div>
        
        <dialog id="exercicioDialog">
            <form method="dialog">
                <section>
                        <label for="">${exercicio.nome}: </label>
                        <input type="text" name="" id="" value="${exercicio.nome}">
                        ${exercicio.series ? `
                            <label for="">S??ries: </label>
                            <input type="number" name="" id="" value="${exercicio.series}">
                        ` : ''}
                        ${exercicio.repeticoes ? `
                            <label for="">Repeti????es: </label>
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



