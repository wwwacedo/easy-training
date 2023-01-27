export default function InputsTopo() {
    return `
    <div class="form-floating">
        <input type="text" class="form-control border border-secondary rounded-2 inputs" id="nome-treino" placeholder="Treino A" required>
        <label for="nome-treino" class="small">nome do treino</label>
    </div>
        
    <div class="form-floating mt-3 mb-2">
        <input type="text" class="form-control border border-secondary rounded-2 inputs" id="descricao" placeholder="Superiores, Inferiores, Fullbody...">
        <label for="descricao" class="small">descrição do treino</label>
    </div>

    `
}