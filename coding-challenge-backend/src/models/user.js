import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  apikey: {
    type: String,
    required: true,
  },
  userstatus: {
    type: String,
    default: 'member',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
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

// 토큰 발급
UserSchema.methods.generateToken = function(){
  const token = jwt.sign(
    {
      _id: this.id,
      userid: this.userid,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    }
  )
  return token;
}

const User = mongoose.model("User", UserSchema);
export default User;
