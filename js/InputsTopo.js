export default function InputsTopo() {
    return `
    <div class="form-floating border border-secondary rounded-3">
        <input type="text" class="form-control" id="nome-treino" placeholder="Treino A">
        <label for="nome-treino">Nome do Treino</label>
    </div>
        
    <div class="form-floating mt-2 mb-3 border border-secondary rounded-3">
        <input type="text" class="form-control " id="descricao" placeholder="Superiores, Inferiores, Fullbody...">
        <label for="descricao">Descrição do Treino</label>
    </div>

    `
}