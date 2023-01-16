const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { Conflict } = require("http-errors");
const { User } = require("../../models/userModel");

const registerUser = async (
  email,
  password,
  verificationToken,
  subscription
) => {
  const user = await User.findOne({ email });
  if (!user) {
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const newUserCreate = await User.create({
      email,
      password: hashPassword,
      avatarURL,
      verificationToken,
      subscription,
    });

    return newUserCreate;
  }
  throw new Conflict("Email in use");
};

module.exports = registerUser;
