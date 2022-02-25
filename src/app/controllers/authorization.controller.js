const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth.json");

const { OAuth2Client } = require("google-auth-library");

const UserSchema = require("../models/user");

function generateToken(params = {}) {
  return jwt.sign({ params }, authConfig.secret);
}

async function login(req, res) {
  switch (req.body.login_with) {
    case "default_form":
      try {
        const { email, password } = req.body;
        const user = await UserSchema.findOne({ email }).select("+password");

        if (!user)
          return res.status(400).send({ error: "Email ou senha incorretos" });
        if (password != user.password)
          return res.status(400).send({ error: "Email ou senha incorretos" });

        user.password = undefined;

        res.send({
          user,
          token: generateToken({
            id: user._id,
          }),
        });
      } catch (err) {
        console.log(err);
        res.status(400).send({ error: "Erro ao tentar fazer login" });
      }
      break;

    case "google_api":
      try {
        const client = new OAuth2Client(
          "887032542043-b0ojvgrlv7hd7ol0n45bs9svvdubab07.apps.googleusercontent.com"
        );

        const { token } = req.body;
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience:
            "887032542043-b0ojvgrlv7hd7ol0n45bs9svvdubab07.apps.googleusercontent.com",
        });

        const { email, name, picture } = ticket.getPayload();
        // console.log(ticket.getPayload());

        const user = await UserSchema.findOne({ email }).select("+password");

        if (!user) {
          const user = await UserSchema.create({
            email,
            name,
            login_with: "google_api",
            picture,
            completed_profile: false,
          });
          user.password = undefined;

          return res.send({
            user,
            token,
            login_with: "google_api",
          });
        }

        user.password = undefined;

        res.send({
          user,
          token,
          completed_profile: true,
        });
      } catch (err) {
        res.status(400).send({ error: "Erro ao tentar fazer login" });
      }

      break;
  }
}

module.exports = { login };
