const express = require("express");
const multer = require("multer");

require("dotenv").config();

const multerConfig = require("./src/config/multer");
const uploadMiddleware = multer(multerConfig);

const authMiddleware = require("./src/app/middleware/auth");

const user = require("./src/app/controllers/user.controller");
const log = require("./src/app/controllers/log.controller");
const classe = require("./src/app/controllers/class.controller");
const auth = require("./src/app/controllers/authorization.controller");
const questionary = require("./src/app/controllers/questionary.controller");
const answer = require("./src/app/controllers/answer.controller");

//Auth
const rootRouter = express.Router();
rootRouter.post("/login", auth.login);
rootRouter.put("/finish-create", user.finishCreate);
rootRouter.post("/log", log.log);

// Users
const userRouter = express.Router();
userRouter.post("/create", user.create);
userRouter.get("/", user.list);
userRouter.get("/:id", user.index);
userRouter.put("/update/:id", user.update);
userRouter.delete("/remove/:id", user.remove);
userRouter.get("/grades/:id", user.getGrades);

// Class
const classRouter = express.Router();
classRouter.post("/create", classe.create);
classRouter.get("/list/:idTeacher", classe.list);
classRouter.get("/:id", classe.index);
classRouter.put("/update/:id", classe.update);
classRouter.put("/join", classe.join);
classRouter.delete("/remove/:id", classe.remove);

// Questionary
const questionaryRouter = express.Router();
questionaryRouter.post("/create", questionary.create);
questionaryRouter.get("/list/:idTeacher", questionary.list);
questionaryRouter.get("/:idQuestionary/:idStudent", questionary.indexStudent);
questionaryRouter.get("/:idQuestionary", questionary.indexTeacher);
questionaryRouter.get("/classes/:idQuestionary", questionary.getClasses);
questionaryRouter.put("/update/:id", questionary.update);
questionaryRouter.put("/join", questionary.join);
questionaryRouter.put("/publish/:id", questionary.publish);
questionaryRouter.delete("/remove/:id", questionary.remove);

// CLASSES
questionaryRouter.post("/add-classes", questionary.addClasseToQuestionary);

//STUDENT
questionaryRouter.get(
  "/student/list/:idClasse/:idStudent",
  questionary.getQuestionarys
); //STUDENT

questionaryRouter.get(
  "/student/list/default/:idClasse/:idStudent",
  questionary.getDefaultQuestionarys
);

questionaryRouter.get("/student/list/default", questionary.listDefaults);

questionaryRouter.post(
  "/question/add",
  uploadMiddleware.single("file"),
  questionary.addQuestion
);

questionaryRouter.put(
  "/question/update",
  uploadMiddleware.single("file"),
  questionary.updateQuestion
);
questionaryRouter.delete("/question/remove/:id", questionary.removeQuestion);

// Questionary
const answerRouter = express.Router();
answerRouter.post("/answer", answer.create);

module.exports = {
  rootRouter,
  userRouter,
  classRouter,
  questionaryRouter,
  answerRouter,
};
