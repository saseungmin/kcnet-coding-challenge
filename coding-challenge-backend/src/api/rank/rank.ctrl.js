import Joi from "@hapi/joi";
import Rank from "../../models/rank";
import Apply from "../../models/apply";
import mongoose from "mongoose";

// const RankSchema = new Schema({
//     score: Number,
//     lang: String,
//     applyId: mongoose.Types.ObjectId,
//     user: {
//       _id: mongoose.Types.ObjectId,
//       userid: String,
//       username: String,    
//       userstatus: String,
//     },
//   });

export const receive = async (ctx) => {
  //validate
//   const schema = Joi.object().keys({
//     score: Joi.number().required(),
//     lang: Joi.string().required(),
//   });

//   const result = schema.validate(ctx.request.body);
//   if (result.error) {
//     ctx.status = 400;
//     ctx.body = result.error;
//     return;
//   }

  const { score, lang, applyId } = ctx.request.body;

  try {
    const exists = await Apply.findById(applyId).exec();
    console.log(exists);
    if (!exists) {
      ctx.status = 400;
      return;
    }

    const rank = new Rank({
      score,
      lang,
      applyId: mongoose.Types.ObjectId(applyId),
      user: ctx.state.user,
    });

    await rank.save(); // mongodb에 저장
    ctx.body = rank;

  } catch (e) {
    ctx.throw(500, e);
  }
};