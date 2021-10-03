const bcrypt = require("bcryptjs");

const QuestionSchema = require("../models/question");
const AnswerSchema = require("../models/answer");

async function create(req, res) {
  try {
    const { questionary, student, classe, answers, timeBegin, timeEnd, grade } =
      req.body;

    const answer = await AnswerSchema.create({
      questionary,
      student,
      classe,
      answers: answers.map((answer) => {
        return {
          question: answer.question,
          alternative: answer.alternative,
          index: answer.index,
        };
      }),
      timeBegin,
      timeEnd,
      grade,
    });

    return res.send({
      answer,
    });
  } catch (err) {
    return res
      .status(400)
      .send({ error: "Erro ao cadastrar questionário", message: err });
  }
}

module.exports = {
  create,
};
