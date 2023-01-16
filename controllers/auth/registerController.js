const { register } = require("../../service/auth");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { nanoid } = require("nanoid");

const registerController = async (req, res) => {
  const verificationToken = nanoid();

  try {
    const { email, password, subscription } = req.body;
    const data = await register(
      email,
      password,
      subscription,
      verificationToken
    );

    const message = {
      to: email,
      from: "sinatrapallpatin@gmail.com",
      subject: "Verification",
      text: `Verify email ${BASE_URL}/api/users/verify/${user.verificationToken}`,
      html: `<h2>Please, <a href='${BASE_URL}/api/users/verify/${user.verificationToken}'>Verify</a> your email</h2>`,
    };

    await sgMail.send(message);

    res.status(201).json({ user: data });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports = registerController;
