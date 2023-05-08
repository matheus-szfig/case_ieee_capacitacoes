const letraNome = "M"

const entrada = [
  {
    nome:"Matheus",
    idade:22
  },
  {
    nome: "Marcos",
    idade: 21
  },
  {
    nome: "Alberto",
    idade: 23
  },
  {
    nome:"Lucas",
    idade:22
  },
  {
    nome: "Marina",
    idade: 25
  },
  {
    nome: "João",
    idade: 21
  }
]

let media = 0;
const result = entrada
  .filter(v => v.nome[0].toLowerCase() === letraNome.toLowerCase())
  .map(m => {
    media += m.idade;
    return m.nome;
  });

media = media/(result.length);

console.log(result, "\n", "média:", media);