import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  userid: String,
  username: String,
  hashedPassword: String,
  apikey: String,
});

// function 사용
// this 사용
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

// 비밀번호 검증
UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true / false
};

// 해당 유저 찾기
UserSchema.statics.findByUserid = function (userid) {
  return this.findOne({ userid });
};

// reponse 할 때 비번 정보 삭제
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

const User = mongoose.model("User", UserSchema);
export default User;
