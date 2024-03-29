const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");
const { OAuth2Client } = require("google-auth-library");

const AnswerSchema = require("../models/answer");
const UserSchema = require("../models/user");
const ClassSchema = require("../models/class");
const LogSchema = require("../models/log");

function generateToken(params = {}) {
  return jwt.sign({ params }, authConfig.secret);
}

async function create(req, res) {
  // try {
  //   const { email } = req.body;
  //   if (await UserSchema.findOne({ email })) {
  //     return res.status(400).send({ error: "Login já existe" });
  //   }
  //   const user = await UserSchema.create(req.body);
  //   user.password = undefined;

  //   return res.send({
  //     user,
  //     token: generateToken({
  //       id: user._id,
  //     }),
  //   });
  // } catch (err) {
  //   return res
  //     .status(400)
  //     .send({ error: "Erro ao cadastrar usuário", message: err });
  // }

  switch (req.body.login_with) {
    case "default_form":
      try {
        const { email } = req.body;
        if (await UserSchema.findOne({ email })) {
          return res
            .status(400)
            .send({ error: "Email já vinculado a uma conta" });
        }
        const user = await UserSchema.create(req.body);
        user.password = undefined;

        return res.send({
          user,
          token: generateToken({
            id: user._id,
          }),
          type: "default_form",
        });
      } catch (err) {
        return res
          .status(400)
          .send({ error: "Erro ao cadastrar usuário", message: err });
      }

    case "google_api":
      const client = new OAuth2Client(
        "887032542043-b0ojvgrlv7hd7ol0n45bs9svvdubab07.apps.googleusercontent.com"
      );

      const { token, type } = req.body;
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience:
          "887032542043-b0ojvgrlv7hd7ol0n45bs9svvdubab07.apps.googleusercontent.com",
      });

      const { email, name, picture } = ticket.getPayload();

      if (await UserSchema.findOne({ email })) {
        return res
          .status(400)
          .send({ error: "Email já vinculado a uma conta" });
      }

      const user = await UserSchema.create({
        email,
        name,
        type,
        user_terms_accepted: true,
        linked: type === "teacher" ? true : false,
        login_with: "google_api",
        picture,
      });
      user.password = undefined;

      return res.send({
        user,
        token,
        login_with: "google_api",
      });
  }
}

async function finishCreate(req, res) {
  try {
    const { birthday, institution, password, use_terms_accepted, email, type } =
      req.body;
    const user = await UserSchema.findOneAndUpdate(
      { email },
      { birthday, institution, password, use_terms_accepted, type },
      {
        new: true,
      }
    );
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao editar usuário" });
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

async function listStudentsFromTeacher(req, res) {
  try {
    const classes = await ClassSchema.find({
      teacher: req.params.id,
    }).populate("students");

    console.log("classes", classes);

    var temp = [];

    classes.map((classe) => {
      for (const student of classe.students) {
        temp.push(student);
      }
    });
    console.log("students", temp);

    const students = await Promise.all(
      temp.map(async (student) => {
        const log = await LogSchema.findOne({ user: student._id });
        const { name } = await ClassSchema.findOne({
          _id: student.classe,
        }).select("name");
        return {
          name: student.name,
          email: student.email,
          birthday: student.birthday,
          classe: name,
          spent_time:
            log != null
              ? `${log.spent_time?.hour}h ${log.spent_time?.minutes.toFixed(
                  0
                )}m ${log.spent_time?.seconds}s`
              : 0,
        };
      })
    );

    console.log("studentsstudents", students);

    return res.send({
      students,
    });
  } catch (err) {
    console.log(err);
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

async function getGrades(req, res) {
  try {
    const answers = await AnswerSchema.find({
      student: req.params.id,
    })
      .populate("questionary")
      .populate("student");

    res.send({ answers });
  } catch (err) {
    return res.status(400).send({ error: "Erro ao buscar usuários" });
  }
}

module.exports = {
  create,
  index,
  list,
  update,
  remove,
  getGrades,
  finishCreate,
  listStudentsFromTeacher,
};
