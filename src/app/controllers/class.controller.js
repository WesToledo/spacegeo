const { Pricing } = require("aws-sdk");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

const ClassSchema = require("../models/class");
const UserSchema = require("../models/user");
const LogSchema = require("../models/log");

async function create(req, res) {
  try {
    const hash = await bcrypt.hash(
      req.body.name.concat("", new Date().toISOString()),
      10
    );
    const classe = await ClassSchema.create({
      name: req.body.name,
      teacher: req.body.teacher,
      hash: hash.substr(40, 45),
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
    const classe = await ClassSchema.findById(req.params.id).populate(
      "students"
    );

    const students = await Promise.all(
      classe.students.map(async ({ name, email, birthday, _id }) => {
        const log = await LogSchema.findOne({ user: _id });
        console.log("LOG", log);
        return {
          name,
          email,
          birthday,
          _id,
          spent_time: log ? (log.spent_time ? log.spent_time : 0) : 0,
        };
      })
    );

    return res.send({ classe: { ...classe, students: students } });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao buscar turma" });
  }
}

async function list(req, res) {
  try {
    const classes = await ClassSchema.find({
      teacher: req.params.idTeacher,
    });
    res.send({ classes });
  } catch (err) {
    console.log(err);
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
    console.log(req.params.id);
    const classe = await ClassSchema.findById(req.params.id);
    console.log(classe);

    await Promise.all(
      classe.students.map(async (id) => {
        await UserSchema.updateOne(
          { _id: id },
          { linked: false, classe: undefined }
        );
      })
    );

    await ClassSchema.findByIdAndRemove(req.params.id);
    return res.status(200).send();
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao deletar turma", err });
  }
}

async function join(req, res) {
  console.log(req.body);
  const { _id, key } = req.body;
  try {
    let classe = await ClassSchema.findOne({ hash: key }).populate("students");
    let user = await UserSchema.findOne({ _id: _id });
    if (!classe) return res.status(400).send({ error: "Turma não encontrada" });

    await UserSchema.updateOne(
      { _id: user._id },
      {
        linked: true,
        classe: classe._id,
      }
    );

    classe.students.push(user);
    await classe.save();

    return res.send({ classe });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao editar classe" });
  }
}

module.exports = { create, index, list, update, remove, join };
