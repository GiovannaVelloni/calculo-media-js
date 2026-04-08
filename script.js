function calcularMedia() {
    
    const campoNota1 = document.getElementById('inputNota1');
    const campoNota2 = document.getElementById('inputNota2');
    const displayResultado = document.getElementById('resultado');

    const nota1 = parseFloat(campoNota1.value);
    const nota2 = parseFloat(campoNota2.value);

    if (isNaN(nota1) || isNaN(nota2)) {
        displayResultado.innerText = "Por favor, insira dois números válidos.";
        return;
    }

    const soma = nota1 + nota2;
    const media = soma / 2;

    displayResultado.innerText = `A média entre ${nota1} e ${nota2} é: ${media.toFixed(2)}`;
}