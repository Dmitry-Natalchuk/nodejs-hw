const register = require("./registerUser");
const login = require("./loginUser");
const logout = require("./logoutUser");
const updateStatusUser = require("./updateStatusUser");
const updateAvatarUser = require("./updateAvatarUser")

module.exports = {
  register,
  login,
  logout,
  updateStatusUser,
  updateAvatarUser,
};
