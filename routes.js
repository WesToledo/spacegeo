const express = require("express");

const authMiddleware = require("./src/app/middleware/auth");

const user = require("./src/app/controllers/user.controller");
const classe = require("./src/app/controllers/class.controller");
const auth = require("./src/app/controllers/authorization.controller");
const questionary = require("./src/app/controllers/questionary.controller");

//Auth
const rootRouter = express.Router();
rootRouter.post("/login", auth.login);

// Users
const userRouter = express.Router();
userRouter.post("/create", user.create);
userRouter.get("/", user.list);
userRouter.get("/:id", user.index);
userRouter.put("/update/:id", user.update);
userRouter.delete("/remove/:id", user.remove);

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
questionaryRouter.get("/:id", questionary.index);
questionaryRouter.get("/classes/:id", questionary.getClasses);
questionaryRouter.put("/update/:id", questionary.update);
questionaryRouter.put("/join", questionary.join);
questionaryRouter.delete("/remove/:id", questionary.remove);

questionaryRouter.post("/question/add", questionary.addQuestion);
questionaryRouter.put("/question/update", questionary.updateQuestion);
questionaryRouter.delete("/question/remove/:id", questionary.removeQuestion);

module.exports = {
  rootRouter,
  userRouter,
  classRouter,
  questionaryRouter,
};
