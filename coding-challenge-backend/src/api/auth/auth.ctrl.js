import Joi from "@hapi/joi";
import User from "../../models/user";

export const register = async (ctx) => {
  //validate
  const schema = Joi.object().keys({
    userid: Joi.string().alphanum().min(3).max(20).required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    apikey: Joi.string().required().messages({
      "string.empty": "apikey를 입력해주세요.",
    }),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { userid, username, password, apikey } = ctx.request.body;
  try {
    const exists = await User.findByUserid(userid);
    if (exists) {
      ctx.status = 409; //Conflict
      return;
    }
    const user = new User({
      userid,
      username,
      apikey,
    });

    await user.setPassword(password);
    await user.save(); // mongodb에 저장

    // 저장후 비번 삭제후 body에 추가
    ctx.body = user.serialize();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async (ctx) => {};

export const check = async (ctx) => {};

export const logout = async (ctx) => {};
