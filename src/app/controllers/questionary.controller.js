const bcrypt = require("bcryptjs");

const QuestionarySchema = require("../models/questionary");
const QuestionSchema = require("../models/question");
const AnswerSchema = require("../models/answer");

async function create(req, res) {
  try {
    const { title, teacher, grade } = req.body;

    const questionary = await QuestionarySchema.create({
      title,
      teacher,
      grade,
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

async function indexStudent(req, res) {
  try {
    const questionary = await QuestionarySchema.findById(
      req.params.idQuestionary
    )
      .populate("questions")
      .lean();

    const answer = await AnswerSchema.findOne({
      questionary: questionary._id,
      student: req.params.idStudent,
    });

    if (answer) {
      questionary.alreadyAnswered = true;
      questionary.answers = answer.answers;
    } else {
      questionary.alreadyAnswered = false;
    }

    return res.send({ questionary });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao buscar questionário!" });
  }
}

async function indexTeacher(req, res) {
  try {
    const questionary = await QuestionarySchema.findById(
      req.params.idQuestionary
    )
      .populate("questions")
      .lean();

    return res.send({ questionary });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao buscar questionário!" });
  }
}

async function getClasses(req, res) {
  const idQuestionary = req.params.idQuestionary;

  console.log("QUESTIONARIOS", idQuestionary);
  try {
    const questionary = await QuestionarySchema.findById(idQuestionary);

    return res.send({ questionary });
  } catch (err) {
    console.log("FUCKKKKKKKKKKKKKKKK", err);
    return res.status(400).send({ error: "Erro ao buscar classes!" });
  }
}

async function list(req, res) {
  console.log("LIST");
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
    await QuestionarySchema.findByIdAndUpdate(req.params.id, req.body);
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

async function publish(req, res) {
  try {
    await QuestionarySchema.updateOne(
      { _id: req.params.id },
      {
        publish: true,
      }
    );
    return res.send();
  } catch (err) {
    return res.status(400).send({ error: "Erro ao publicar questionário" });
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
      hasObject,
      path,
      objName,
    } = req.body;

    const questionary = await QuestionarySchema.findOne({ _id: questionaryId });

    const question = await QuestionSchema.create({
      title,
      alternatives,
      rightOne,
      teacher,
      hasObject,
      path,
      objName,
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

async function getClasseQuestionarys(req, res) {
  try {
    const questionarys = await QuestionarySchema.find({
      classes: req.params.idClasse,

      // publish: true,
    }).lean();

    const questionarysArray = await Promise.all(
      questionarys.map(async (questionary) => {
        const answer = await AnswerSchema.findOne({
          questionary: questionary._id,
          student: req.params.idStudent,
          classe: req.params.idClasse,
        });
        if (answer) {
          return {
            ...questionary,
            alreadyAnswered: true,
            myGrade: answer.grade,
          };
        } else {
          return {
            ...questionary,
            alreadyAnswered: false,
          };
        }
      })
    );

    return res.send({ questionarys: questionarysArray });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar questionários" });
  }
}

//CLASSES

async function addClasseToQuestionary(req, res) {
  const { classesIds, idQuestionary } = req.body;
  console.log(req.body);
  try {
    const questionary = await QuestionarySchema.findOne({ _id: idQuestionary });

    if (questionary) {
      questionary.classes = classesIds;
      await questionary.save();
    } else {
      res.status(400).send();
    }

    res.send();
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar questionários" });
  }
}

module.exports = {
  create,
  indexStudent,
  indexTeacher,
  list,
  update,
  remove,
  join,
  publish,
  addQuestion,
  updateQuestion,
  removeQuestion,
  getClasses,
  getQuestionarys: getClasseQuestionarys,
  addClasseToQuestionary,
};
