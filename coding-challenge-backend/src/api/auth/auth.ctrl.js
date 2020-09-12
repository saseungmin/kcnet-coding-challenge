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

  const { userid, username, password, apikey, userstatus } = ctx.request.body;
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
      userstatus,
    });

    await user.setPassword(password);
    await user.save(); // mongodb에 저장

    // 저장후 비번 삭제후 body에 추가
    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async (ctx) => {
  const { userid, password } = ctx.request.body;

  if (!userid || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
    const user = await User.findByUserid(userid);
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
  } catch (error) {
    ctx.throw(500, error);
  }
};

// 로그인 중 체크
export const check = async (ctx) => {
  const { user } = ctx.state;
  
  if (!user) {
    ctx.status = 401;
    return;
  }
  ctx.body = user;
};

export const logout = async (ctx) => {
  ctx.cookies.set("access_token");
  ctx.status = 204; // no content
};
