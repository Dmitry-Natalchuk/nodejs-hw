const { verifyEmail } = require("../../service/auth");

const verifyEmailController = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ message: "missing required field email" });
  }
  const user = await verifyEmail(email);
  if (!user) {
    res.status(400).json({ message: "Verification has already been passed" });
  } else {
    res.status(200).json({ message: "Verification email sent" });
  }
};

module.exports = verifyEmailController;
