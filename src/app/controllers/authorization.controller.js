const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

const { OAuth2Client } = require("google-auth-library");

const UserSchema = require("../models/user");

function generateToken(params = {}) {
  return jwt.sign({ params }, authConfig.secret);
}

async function login(req, res) {
  switch (req.body.type) {
    case "default_form":
      break;
    case "google_api":
      const client = new OAuth2Client(
        "887032542043-b0ojvgrlv7hd7ol0n45bs9svvdubab07.apps.googleusercontent.com"
      );

      const { token } = req.body;
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience:
          "887032542043-b0ojvgrlv7hd7ol0n45bs9svvdubab07.apps.googleusercontent.com",
      });

      const { name, email, picture } = ticket.getPayload();
      console.log(ticket.getPayload());

      const user = await UserSchema.findOne({ email }).select("+password");

      if (!user)
        return res.status(400).send({ error: "Incorret user or password" });
      if (!(await bcrypt.compare(password, user.password)))
        return res.status(400).send({ error: "Incorret user or password" });

      user.password = undefined;

      break;
  }

  try {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ email }).select("+password");
    console.warn("USER", user);
    if (!user)
      return res.status(400).send({ error: "Incorret user or password" });
    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).send({ error: "Incorret user or password" });
    user.password = undefined;
    res.send({
      user,
      token: generateToken({
        id: user._id,
      }),
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: "Error on login" });
  }
}

module.exports = { login };
