const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthday: {
    type: String,
    require: true,
  },
  institution: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  linked: {
    type: Boolean,
    required: true,
    default: false,
  },
  classe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
  },
  user_terms_accepted: {
    type: Boolean,
    required: true,
    default: false,
  },
  login_with: {
    type: String,
    required: true,
    default: "default_form",
  },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
