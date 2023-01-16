const express = require("express");
const {
  loginController,
  logoutController,
  registerController,
  currentUserController,
  userStatusController,
  avatarController,
  verifyEmailController,
  verifyUserController,
} = require("../../controllers/auth");

const {
  registerUserValid,
  loginUserValid,
} = require("../../middleware/schemas/validationUser");
const { userToken, validation, upload } = require("../../middleware");

const router = express.Router();

router.patch("/avatars", userToken, upload.single("avatar"), avatarController);

router.get("/current", userToken, currentUserController);
router.get("/verify/:verificationToken", verifyUserController);
router.post("/verify", verifyEmailController);
router.patch("/", userToken, userStatusController);
router.post("/register", validation(registerUserValid), registerController);
router.get("/login", validation(loginUserValid), loginController);
router.post("/logout", userToken, logoutController);

module.exports = router;
