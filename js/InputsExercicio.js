export default function InputsExercicio(id) {
    return `
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="nome-exercicio" placeholder="Nome do Exercício" required>
        <label for="nome-exercicio">Nome do Exercício</label>
    </div>
    
    <div class="row g-1">
        <div class="form-floating mb-3 me-1 col">
            <input type="number" class="form-control" id="series" placeholder="Séries" min="1" required>
            <label for="series">Séries</label>
        </div>  
        <div class="form-floating mb-3 ms-1 col">
            <input type="number" class="form-control" id="repeticoes" placeholder="Repetições" min="1" required>
            <label for="repeticoes">Repetições</label>
        </div>
    </div>
    
    <div class="row g-1">
        <div class="form-floating mb-3 me-1 col">
            <input type="number" class="form-control" id="carga" placeholder="Carga">
            <label for="carga">Carga (kg)</label>
        </div>

        <div class="form-floating mb-3 ms-1 col">
            <input type="number" class="form-control" id="intervalo" placeholder="Intervalo" min="0" required>
            <label for="intervalo">Intervalo (seg.)</label>
        </div>
    </div>
    
    `
}