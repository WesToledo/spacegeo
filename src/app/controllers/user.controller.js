const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

const UserSchema = require("../models/user");

function generateToken(params = {}) {
  return jwt.sign({ params }, authConfig.secret);
}

async function create(req, res) {
  try {
    const { email } = req.body;
    if (await UserSchema.findOne({ email })) {
      return res.status(400).send({ error: "Login já existe" });
    }
    const user = await UserSchema.create(req.body);
    user.password = undefined;

    return res.send({
      user,
      token: generateToken({
        id: user._id,
      }),
    });
  } catch (err) {
    return res
      .status(400)
      .send({ error: "Erro ao cadastrar usuário", message: err });
  }
}

async function index(req, res) {
  try {
    const user = await UserSchema.findById(req.params.id);
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar usuário" });
  }
}

async function list(req, res) {
  try {
    const user = await UserSchema.find();
    res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar usuários" });
  }
}

async function update(req, res) {
  try {
    const user = await UserSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao editar usuário" });
  }
}

async function remove(req, res) {
  try {
    await UserSchema.findByIdAndRemove(req.params.id);
    return res.status(200).send();
  } catch (err) {
    return res.status(400).send({ error: "Erro ao deletar usuário", err });
  }
}

module.exports = { create, index, list, update, remove };
