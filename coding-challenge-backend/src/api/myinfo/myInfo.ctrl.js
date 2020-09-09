import Rank from "../../models/rank";
import mongoose from "mongoose";
import Joi from "@hapi/joi";
import User from "../../models/user";

const { ObjectId } = mongoose.Types;

// NOTE : myinfo페이지 내가 접수한 챌린지
export const myApplyList = async (ctx) => {
  const page = parseInt(ctx.query.page || "1", 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const exists = await Rank.find({ "user._id": ObjectId(ctx.state.user._id) })
      .sort({ _id: -1 })
      .limit(3)
      .skip((page - 1) * 3)
      .lean()
      .populate(
        "applyId",
        "langs _id applystartday applyendday teststartday testendday title"
      )
      .exec();

    const receiveCount = await Rank.countDocuments({
      "user._id": ObjectId(ctx.state.user._id),
    }).exec();

    ctx.set(
      "My-Info-Receive-Last-Page",
      Math.ceil(receiveCount === 0 ? 1 : receiveCount / 3)
    );

    ctx.body = exists;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const updateUser = async (ctx) => {
  const schema = Joi.object().keys({
    _id: Joi.string(),
    userid: Joi.string(),
    username: Joi.string(),
    userstatus: Joi.string(),
    apikey: Joi.string(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { _id, username, apikey } = ctx.request.body;
  const userObj = {
    username,
    apikey,
  };

  try {
    const user = await User.findByIdAndUpdate(_id, userObj, {
      new: true,
    }).exec();
    if (!user) {
      ctx.status = 404;
      return;
    }
    ctx.body = user.serialize();
  } catch (error) {
    ctx.throw(500, error);
  }
};
