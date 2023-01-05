const { User } = require("../../models/userModel");

const updateAvatarUser = async (id, avatarURL) => {
  const user = await User.findByIdAndUpdate(
    id,
    { avatarURL },
    {
      new: true,
    }
  );
  return {
    user: {
      avatarURL: user.avatarURL,
    },
  };
};

module.exports = updateAvatarUser;