const servicosModel = require ("../Model/servicos.js")
const ServicosController = {
    listar: (req, res) => {
      const servicos = ServicosModel.findAll();
      res.render(servicos);
    },
}

module.exports = {ServicosController};