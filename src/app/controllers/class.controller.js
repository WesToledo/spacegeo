const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

const ClassSchema = require("../models/class");
const UserSchema = require("../models/user");

async function create(req, res) {
  try {
    const hash = await bcrypt.hash(
      req.body.name.concat("", new Date().toISOString()),
      10
    );
    const classe = await ClassSchema.create({
      name: req.body.name,
      teacher: req.body.teacher,
      hash: hash.substr(40, 60),
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
    const classes = await ClassSchema.find({ teacher: req.params.idTeacher });
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

async function join(req, res) {
  console.log(req.body);
  const { _id, key } = req.body;
  try {
    let classe = await ClassSchema.findOne({ hash: key }).populate("students");
    const user = await UserSchema.findOne({ _id });
    if (!classe) return res.status(400).send({ error: "Turma não encontrada" });

    classe.students.push(user);
    await classe.save();

    return res.send();
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao editar classe" });
  }
}

module.exports = { create, index, list, update, remove, join };
