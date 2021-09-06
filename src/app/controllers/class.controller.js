const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

const ClassSchema = require("../models/class");

async function create(req, res) {
  try {
    const hash = await bcrypt.hash(
      req.body.name.concat("", new Date().toISOString()),
      10
    );
    const classe = await ClassSchema.create({
      name: req.body.name,
      hash: hash.substr(39, 60),
    });

    return res.send({
      classe,
    });
  } catch (err) {
    return res
      .status(400)
      .send({ error: "Erro ao cadastrar turma", message: err });
  }
}

async function index(req, res) {
  try {
    const classe = await ClassSchema.findById(req.params.id);
    return res.send({ classe });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar turma" });
  }
}

async function list(req, res) {
  try {
    const classes = await ClassSchema.find();
    res.send({ classes });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar turmas" });
  }
}

async function update(req, res) {
  try {
    const classe = await ClassSchema.findByIdAndUpdate(req.params.id, req.body);
    return res.send();
  } catch (err) {
    return res.status(400).send({ error: "Erro ao editar classe" });
  }
}

async function remove(req, res) {
  try {
    await ClassSchema.findByIdAndRemove(req.params.id);
    return res.status(200).send();
  } catch (err) {
    return res.status(400).send({ error: "Erro ao deletar turma", err });
  }
}

module.exports = { create, index, list, update, remove };
