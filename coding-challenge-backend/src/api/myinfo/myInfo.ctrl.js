import Rank from "../../models/rank";
import mongoose from "mongoose";

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

    ctx.set("My-Info-Receive-Last-Page", Math.ceil(receiveCount / 3));

    ctx.body = exists;
  } catch (error) {
    ctx.throw(500, error);
  }
};
