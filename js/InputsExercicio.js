export default function InputsExercicio(id) {
    return `
    <div class="form-floating">
        <input type="text" class="form-control border border-secondary rounded-2" id="nome-exercicio" placeholder="Nome do Exercício" required>
        <label for="nome-exercicio" class="small">Nome do Exercício</label>
    </div>
    
    <div class="row mt-2 g-1">
        <div class="form-floating me-1 col">
            <input type="number" class="form-control border border-secondary rounded-2" id="series" placeholder="Séries" min="1" max="999">
            <label for="series" class="small">Séries</label>
        </div>  
        <div class="form-floating mx-1 col">
            <input type="number" class="form-control border border-secondary rounded-2" id="repeticoes" placeholder="Repetições" min="1" max="999">
            <label for="repeticoes" class="small">Rep.</label>
        </div>
        <div class="form-floating ms-1 col">
            <input type="number" class="form-control border border-secondary rounded-2" id="carga" min="1" max="999" placeholder="Carga">
            <label for="carga" class="small">Carga (kg)</label>
        </div>
    </div>
    <div class="row g-1 mt-2">
        <div class="form-floating me-1 col">
            <input type="number" class="form-control border border-secondary rounded-2" id="duracao" min="1" max="999" placeholder="Duração (seg.)">
            <label for="duracao" class="small">Duração (seg.)</label>
        </div>

        <div class="form-floating ms-1 col">
            <input type="number" class="form-control border border-secondary rounded-2" id="intervalo" placeholder="Intervalo" min="0" max="999">
            <label for="intervalo" class="small">Intervalo (seg.)</label>
        </div>
    </div>
    <div class="row g-1 mt-2">
        <div class="form-floating">
            <input type="text" class="form-control border border-secondary rounded-2" id="observacao" placeholder="Observação">
            <label for="observacao" class="small">Observação</label>
        </div>
    </div>
    
    `
}