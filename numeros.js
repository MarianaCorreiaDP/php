const peso1 = 1.0 //Declarando uma constante de valor 1.0
const peso2 = Number("2.0") //Declarando uma constante que era String mas foi forçada a passar pra Number

console.log(peso1, peso2) //Exibi os valores das constantes
console.log(Number.isInteger(peso1)) //Verificando se é do tipo Number
console.log(Number.isInteger(peso2)) //Verificando se é do tipo Number

const avaliacao1 = 9.871 //Definindo uma constante que recebe um valor
const avaliacao2 = 6.871 //Definindo uma constante que recebe um valor
 
const total = avaliacao1* peso1 + avaliacao2 * peso2 //A constante recebe uma funçao aritmética com outras constantes
const media = total / (peso1+peso2) //A constante recebe uma função aritmética com outras constantes

console.log(media.toFixed(2)) //toFixed define que o Number apenas exibirá 2 casas decimais
console.log(media.toString(2)) //toString define que será mostrado como uma string, atribuindo o valor 2 o Number será mostrado como binário
console.log(typeof media) //Exibe o tipo da constante 