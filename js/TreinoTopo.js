export default function TreinoTopo() {
    return `
    <div class="input-group my-3">
        <span class="input-group-text col-4">Nome: </span>
        <input id="nome-treino" type="text" class="form-control col-4" placeholder="Treino..." aria-label="" required>
    </div>
            
    <div class="input-group mb-3">
        <span class="input-group-text col-4">Descrição: </span>
        <input id="descricao" type="text" class="form-control col-4" placeholder="Superiores, Inferiores, Fullbody..." aria-label="">
    </div>
    `
}