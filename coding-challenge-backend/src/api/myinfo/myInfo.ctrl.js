import Rank from "../../models/rank";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

// NOTE : myinfo페이지 내가 접수한 챌린지
export const myApplyList = async (ctx) => {
    try {
      // TODO: 페이징 처리?
      const exists = await Rank.find({ "user._id": ObjectId(ctx.state.user._id) })
        .sort({ _id: -1 })
        .populate(
          "applyId",
          "langs _id applystartday applyendday teststartday testendday title"
        )
        .exec();
  
      ctx.body = exists;
    } catch (error) {
      ctx.throw(500, error);
    }
  };