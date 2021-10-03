const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routers
app.use("/api", routes.rootRouter);
app.use("/api/user", routes.userRouter);
app.use("/api/class", routes.classRouter);
app.use("/api/questionary", routes.questionaryRouter);
app.use("/api/answer", routes.answerRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    //res.sendFile(path.resolve(__dirname,'..','..','client','build','index.html'));
  });
}

app.listen(process.env.PORT || 3333);
