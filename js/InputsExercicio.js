export default function InputsExercicio(id) {
    return `
    <div class="form-floating">
        <input type="text" class="form-control" id="nome-exercicio" placeholder="Nome do Exercício">
        <label for="nome-exercicio">Nome do Exercício</label>
    </div>
    
    <div class="row g-1">
        <div class="form-floating me-1 col">
            <input type="number" class="form-control" id="series" placeholder="Séries" min="1">
            <label for="series">Séries</label>
        </div>  
        <div class="form-floating ms-1 col">
            <input type="number" class="form-control" id="repeticoes" placeholder="Repetições" min="1">
            <label for="repeticoes">Repetições</label>
        </div>
    </div>
    
    <div class="row g-1">
        <div class="form-floating me-1 col">
            <input type="number" class="form-control" id="carga" placeholder="Carga">
            <label for="carga">Carga (kg)</label>
        </div>

        <div class="form-floating ms-1 col">
            <input type="number" class="form-control" id="intervalo" placeholder="Intervalo" min="0">
            <label for="intervalo">Intervalo (seg.)</label>
        </div>
    </div>
    
    `
}