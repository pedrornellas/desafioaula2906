const express = require ("express");
const router = express.router ();
const ServicosController = require ("../Controller/servicos/ServicosController")

router.get ("/", ServicosController.listar);
