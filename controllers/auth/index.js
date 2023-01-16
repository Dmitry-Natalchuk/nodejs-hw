const loginController = require("./loginController");
const logoutController = require("./logoutController");
const registerController = require("./registerController");
const {
  currentUserController,
  userStatusController,
} = require("./userController");
const avatarController = require("./avatarController");

module.exports = {
  loginController,
  logoutController,
  registerController,
  currentUserController,
  userStatusController,
  avatarController,
};
