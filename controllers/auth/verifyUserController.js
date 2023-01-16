const { verifyUser } = require("../../service/auth");

const verifyUserController = async (req, res) => {
  try {
    const { verificationToken } = req.params;
    await verifyUser(verificationToken);
    res.status(200).json({ message: "Verification successful" });
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = verifyUserController;
