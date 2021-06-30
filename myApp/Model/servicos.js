const listaServico = require("../database/servicos.json");
const fs = require("fs");

const ServicosModel = {
  findAll: () => servicos,
  findById: (id) => {
    const buscarServico = servicos.find((servico) => servico.id === id);
    return buscarServico;
  },
  create: (servico) => {
    servicos.push(servico);
    fs.writeFileSync("../database/servicos.json", JSON.stringify(servicos));
  },
  update: (servicoEncontrado, nome, preco) => {
    servicoEncontrado.nome = nome;
    servicoEncontrado.preco = preco;
    fs.writeFileSync("../database/servicos.json", JSON.stringify(servicos));
  },
  destroy: (id) => {
    const newServicos = servicos.filter((servico) => servico.id !== id);
    servicos.splice(newServicos, 1);
    fs.writeFileSync("../database/servicos.json", JSON.stringify(newServicos));
  },
};

module.exports = ServicosModel;
