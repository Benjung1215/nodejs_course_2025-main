const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  avatar: {
    url: { type: String }, // S3 的完整 URL
    key: { type: String }, // S3 的檔案 key
    lastUpdated: { type: Date, default: Date.now },
  },
});

// 建立 model
const User = mongoose.model("User", userSchema);

// 匯出 model
module.exports = User;
