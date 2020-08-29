//import Joi from "@hapi/joi";
import Rank from "../../models/rank";
import Apply from "../../models/apply";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

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
  const { applyId } = ctx.request.body;

  try {
    const exists = await Apply.findById(applyId).exec();

    if (!exists) {
      ctx.status = 404;
      return;
    }

    const rank = new Rank({
      applyId: ObjectId(applyId),
      user: ctx.state.user,
    });

    await rank.save();
    ctx.body = rank;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const getReceiveUser = async (ctx) => {
  const { id } = ctx.params;

  try {
    const exists = await Rank.findOne({
      $and: [
        { applyId: ObjectId(id) },
        { "user._id": ObjectId(ctx.state.user._id) },
      ],
    }).exec();

    ctx.body = exists;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const cancelReceive = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Rank.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const rankList = async (ctx) => {
  const { id } = ctx.params;

  try {
    const apply = await Apply.findById(id).exec();

    if (!apply) {
      ctx.status = 404;
      return;
    }

    const exists = await Rank.find({ applyId: ObjectId(id) })
      .sort({ score: -1 })
      .lean()
      .exec();

    ctx.body = exists;
  } catch (error) {
    ctx.throw(500, error);
  }
};
