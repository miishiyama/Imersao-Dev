var numeroScreto = parseInt(Math.random() * 1001)

while (chute != numeroScreto) {
    var chute = prompt("Digite um número entre 1 e 1000")
    if (chute == numeroScreto) {
        alert("Acertou!")
    } else if (chute > numeroScreto) {
        alert("Errou... o número secreto é menor")
    } else if (chute < numeroScreto) {
        alert("Errou... o número secreto é maior")
    }
}