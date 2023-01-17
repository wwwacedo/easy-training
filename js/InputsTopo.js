export default function InputsTopo() {
    return `
    <div class="form-floating">
        <input type="text" class="form-control" id="nome-treino" placeholder="Treino A">
        <label for="nome-treino">Nome do Treino</label>
    </div>
        
    <div class="form-floating">
        <input type="text" class="form-control" id="descricao" placeholder="Superiores, Inferiores, Fullbody...">
        <label for="descricao">Descrição do Treino</label>
    </div>

    `
}