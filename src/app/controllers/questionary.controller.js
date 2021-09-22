const bcrypt = require("bcryptjs");

const QuestionarySchema = require("../models/questionary");
const QuestionSchema = require("../models/question");

async function create(req, res) {
  try {
    const { title, teacher } = req.body;

    const questionary = await QuestionarySchema.create({
      title,
      teacher,
    });

    return res.send({
      questionary,
    });
  } catch (err) {
    return res
      .status(400)
      .send({ error: "Erro ao cadastrar questionário", message: err });
  }
}

async function index(req, res) {
  try {
    const questionary = await QuestionarySchema.findById(
      req.params.id
    ).populate("questions");
    return res.send({ questionary });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar turma" });
  }
}

async function getClasses(req, res) {
  try {
    const questionary = await QuestionarySchema.findById(
      req.params.id
    ).populate("classes");
    return res.send({ questionary });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar turmas" });
  }
}

async function list(req, res) {
  try {
    const questionarys = await QuestionarySchema.find({
      teacher: req.params.idTeacher,
    });
    res.send({ questionarys });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar questionários" });
  }
}

async function update(req, res) {
  try {
    const questionary = await QuestionarySchema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    return res.send();
  } catch (err) {
    return res.status(400).send({ error: "Erro ao editar questionary" });
  }
}

async function remove(req, res) {
  try {
    await QuestionarySchema.findByIdAndRemove(req.params.id);
    return res.status(200).send();
  } catch (err) {
    return res.status(400).send({ error: "Erro ao deletar turma", err });
  }
}

async function join(req, res) {
  console.log(req.body);
  const { _id, key } = req.body;
  try {
    let questionary = await QuestionarySchema.findOne({ hash: key }).populate(
      "students"
    );
    const user = await UserSchema.findOne({ _id });
    if (!questionary)
      return res.status(400).send({ error: "Turma não encontrada" });

    questionary.students.push(user);
    await questionary.save();

    return res.send();
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao editar questionary" });
  }
}

// QUESTIONS
async function addQuestion(req, res) {
  try {
    const {
      title,
      questionary: questionaryId,
      alternatives,
      rightOne,
      teacher,
    } = req.body;

    const questionary = await QuestionarySchema.findOne({ _id: questionaryId });

    const question = await QuestionSchema.create({
      title,
      alternatives,
      rightOne,
      teacher,
    });

    questionary.questions.push(question);

    await questionary.save();

    return res.send({
      questionary,
    });
  } catch (err) {
    return res
      .status(400)
      .send({ error: "Erro ao cadastrar questão", message: err });
  }
}

async function updateQuestion(req, res) {
  try {
    const { title, alternatives, rightOne } = req.body;
    const question = await QuestionSchema.findOne({ _id: req.body._id });

    question.alternatives = alternatives.map((alternative) => {
      return { ...alternative, _id: undefined };
    });
    question.title = title;
    question.rightOne = rightOne;

    await question.save();
    return res.send();
  } catch (err) {
    return res.status(400).send({ error: "Erro ao editar questão" });
  }
}

async function removeQuestion(req, res) {
  try {
    await QuestionSchema.findByIdAndRemove(req.params.id);
    return res.status(200).send();
  } catch (err) {
    return res.status(400).send({ error: "Erro ao deletar turma", err });
  }
}

//STUDENTS

async function getQuestionarys(req, res) {
  try {
    const questionarys = await QuestionarySchema.find({
      "student._id": req.params.id,
    }).populate("classes");
    return res.send({ questionarys });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar turmas" });
  }
}

module.exports = {
  create,
  index,
  list,
  update,
  remove,
  join,
  addQuestion,
  updateQuestion,
  removeQuestion,
  getClasses,
  getQuestionarys
};
