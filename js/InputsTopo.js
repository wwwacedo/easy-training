export default function InputsTopo() {
    return `
    <div class="form-floating">
        <input type="text" class="form-control border border-secondary rounded-2" id="nome-treino" placeholder="Treino A" required>
        <label for="nome-treino" class="small">Nome do Treino</label>
    </div>
        
    <div class="form-floating mt-3 mb-2">
        <input type="text" class="form-control border border-secondary rounded-2" id="descricao" placeholder="Superiores, Inferiores, Fullbody...">
        <label for="descricao" class="small">Descrição do Treino</label>
    </div>

    `
}