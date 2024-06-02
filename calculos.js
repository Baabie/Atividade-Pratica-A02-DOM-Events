// funçao para calcular os totais

function calcularTotais() {
    // obter os valores dos inputs

    const valorBase = parseFloat(document.getElementById('valor_base').value) || 0;
    const valorTransporte = parseFloat(document.getElementById('valor_transporte').value) || 0;
    const valorAlimentacao = parseFloat(document.getElementById('valor_alimentacao').value) || 0;
    const valorAutomovel = parseFloat(document.getElementById('valor_automovel').value) || 0;
    const faltas = parseFloat(document.getElementById('faltas').value) || 0;

    const receitaTotal = valorBase + valorTransporte + valorAlimentacao;
    const descontosTotal = valorAutomovel + faltas;

    // total final
    const valorTotal = receitaTotal - descontosTotal


    // definir valores nos campos 
    document.getElementById('valor_receita').value = receitaTotal.toFixed(2);
    document.getElementById('valor_descontos').value = descontosTotal.toFixed(2);
    document.getElementById('valor_total').value = valorTotal.toFixed(2);
}

// addeventlistener para os campos respectivos
document.getElementById('btn_calcular').addEventListener('click', calcularTotais);

// ouvintes para os campos de entrada, (aqui o valor colocado nos campos atualizaria sozinho já fazendo os calculos)
const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach(input => {
    input.addEventListener('input', calcularTotais);
    input.addEventListener('blur', calcularTotais);
})
