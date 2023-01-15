export default function InputsTopo() {
    return `
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="nome-treino" placeholder="Treino A" required>
        <label for="nome-treino">Nome do Treino</label>
    </div>
        
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="descricao" placeholder="Superiores, Inferiores, Fullbody...">
        <label for="descricao">Descrição do Treino</label>
    </div>

    `
}