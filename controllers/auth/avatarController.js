const { updateAvatarUser } = require("../../service/auth");
const path = require("path");
const fs = require("fs").promises;
const Jimp = require("jimp");
const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const avatarController = async (req, res) => {
  const { _id: id } = req.user;
  const { path: tmpUpload, originalname } = req.file;
  try {
    const filename = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarsDir, filename);
    await Jimp.read(tmpUpload)
      .then((img) => {
        return img.resize(250, 250).writeAsync(tmpUpload);
      })
      .catch((error) => {
        console.log(error.message);
      });

    await fs.rename(tmpUpload, resultUpload);
    const avatarURL = path.join("public", "avatars", `${id}.${originalname}`);
    const data = await updateAvatarUser(id, avatarURL);
    res.json(data);
  } catch (error) {
    await fs.unlink(tmpUpload);
    throw error;
  }
};

module.exports = avatarController;
