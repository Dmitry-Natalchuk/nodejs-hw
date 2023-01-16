const { NotFound } = require("http-errors");
const { User } = require("../models/userModel");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { BASE_URL } = process.env;

const verifyUser = async (verificationToken) => {
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw new NotFound("User not found");
  }
  await User.findByIdAndUpdate(user._id, {
    verificationToken: null,
    verify: true,
  });
};

const verifyEmail = async (email) => {
  const user = await User.findOne({ email, verify: false });
  if (user) {
    const message = {
      to: email,
      from: "sinatrapallpatin@gmail.com",
      subject: "Verification",
      text: `Verify your email ${BASE_URL}/api/users/verify/${user.verificationToken}`,
      html: `<h2>Please, <a href='${BASE_URL}/api/users/verify/${user.verificationToken}'>Verify</a> your email</h2>`,
    };

    await sgMail.send(message);
  }
  return user;
};

module.exports = {
  verifyUser,
  verifyEmail,
};
