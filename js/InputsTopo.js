export default function InputsTopo() {
    return `
    <div class="form-floating">
        <input type="text" class="form-control border border-secondary rounded-3" id="nome-treino" placeholder="Treino A" required>
        <label for="nome-treino">Nome do Treino</label>
    </div>
        
    <div class="form-floating mt-3 mb-2">
        <input type="text" class="form-control border border-secondary rounded-3" id="descricao" placeholder="Superiores, Inferiores, Fullbody...">
        <label for="descricao">Descrição do Treino</label>
    </div>

    `
}