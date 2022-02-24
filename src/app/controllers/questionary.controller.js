const QuestionarySchema = require("../models/questionary");
const QuestionSchema = require("../models/question");
const AnswerSchema = require("../models/answer");

async function create(req, res) {
  try {
    const { title, teacher, grade, type } = req.body;

    console.log(req.body);

    const questionary = await QuestionarySchema.create({
      title,
      teacher,
      grade,
      type,
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
  try {
    const questionarys = await QuestionarySchema.find({
      teacher: req.params.idTeacher,
      type: "teacher",
      deleted: false,
    }).populate("classes");
    res.send({ questionarys });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar questionários" });
  }
}
async function listDefaults(req, res) {
  try {
    const questionarys = await QuestionarySchema.find({
      publish: true,
      type: "default",
    }).populate("classes");
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
    const questionary = await QuestionarySchema.findById(req.params.id);

    if (questionary.classes.length != 0) {
      await QuestionarySchema.updateOne(
        { _id: req.params.id },
        { deleted: true }
      );

      return res.status(200).send();
    } else {
      await QuestionarySchema.findByIdAndRemove(req.params.id);
      return res.status(200).send();
    }
  } catch (err) {
    console.log(err);
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
  console.log(req.body);
  try {
    await QuestionarySchema.updateOne(
      { _id: req.params.id },
      {
        publish: req.body.publish,
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
    //     const { filename: key, location } = req.file;

    const {
      title,
      questionary: questionaryId,
      alternatives,
      rightOne,
      teacher,
      hasObject,
      objName,
      hasImg,
    } = req.body;

    console.log("create question", req.body);

    const questionary = await QuestionarySchema.findOne({
      _id: questionaryId,
    }).populate("questions");

    const question = await QuestionSchema.create({
      title,
      alternatives: JSON.parse(alternatives),
      rightOne,
      teacher,

      hasObject,
      objName: hasObject === "true" ? objName : null,

      hasImg,
      imgURL: hasImg === "true" ? req.file.location : null,
      imgKey: hasImg === "true" ? req.file.filename : null,
    });

    console.log("question", questionary);

    questionary.questions.push(question);

    await questionary.save();

    return res.send({
      questionary,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Erro ao editar questão" });
  }
}

async function updateQuestion(req, res) {
  try {
    const { _id, title, alternatives, rightOne, objName, isImgChange, hasImg } =
      req.body;

    console.log("body", req.body);
    console.log("file", req.file);

    const question = await QuestionSchema.findOne({ _id: _id });

    const aux = JSON.parse(alternatives);

    question.alternatives = aux.map((alternative) => {
      return { ...alternative, _id: undefined };
    });

    question.title = title;
    question.rightOne = rightOne;
    question.objName = objName;
    question.hasImg = hasImg;

    question.imgURL = isImgChange === "true" && req.file.location;
    question.imgKey = isImgChange === "true" && req.file.filename;

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
      publish: true,
      type: "teacher",
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

async function getDefaultQuestionarys(req, res) {
  try {
    const questionarys = await QuestionarySchema.find({
      type: "default",
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
    console.log(err);
    return res.status(400).send({ error: "Erro ao buscar questionários" });
  }
}

module.exports = {
  create,
  indexStudent,
  indexTeacher,
  list,
  listDefaults,
  update,
  remove,
  join,
  publish,
  addQuestion,
  updateQuestion,
  removeQuestion,
  getClasses,
  getQuestionarys: getClasseQuestionarys,
  getDefaultQuestionarys,
  addClasseToQuestionary,
};
