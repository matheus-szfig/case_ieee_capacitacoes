const letraNome = "B"

const entrada = [
  {
    nome:"Breno",
    idade:22
  },
  {
    nome: "Bruna",
    idade: 21
  },
  {
    nome: "Carlos",
    idade: 23
  }
]

const result = entrada.map(m => m.nome)
  .filter(v => v[0].toLowerCase() === letraNome.toLowerCase());

console.log(result);