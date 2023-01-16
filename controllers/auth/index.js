const loginController = require("./loginController");
const logoutController = require("./logoutController");
const registerController = require("./registerController");
const {
  currentUserController,
  userStatusController,
} = require("./userController");
const avatarController = require("./avatarController");
const verifyEmailController = require("./verifyEmailController");
const verifyUserController = require("./verifyUserController");

module.exports = {
  loginController,
  logoutController,
  registerController,
  currentUserController,
  userStatusController,
  avatarController,
  verifyEmailController,
  verifyUserController,
};
