import Apply from "../../models/apply";
import Joi from "@hapi/joi";

export const write = async (ctx) => {
  const schema = Joi.object().keys({
    applystartday: Joi.string().required(),
    applyendday: Joi.string().required(),
    teststartday: Joi.string().required(),
    testendday: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    langs: Joi.array().items(Joi.string()).required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {
    applystartday,
    applyendday,
    teststartday,
    testendday,
    title,
    content,
    langs,
  } = ctx.request.body;
  const apply = new Apply({
    applystartday,
    applyendday,
    teststartday,
    testendday,
    title,
    content,
    langs,
  });
  try {
    await apply.save();
    ctx.body = apply;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const list = async (ctx) => {
  const page = parseInt(ctx.query.page || '1', 10);
  if(page<1){
    ctx.status = 400;
    return;
  }

  try {
    // 쿼리를 프로미스로 만들기위해서는 exec()를 붙인다. 3 필수 4 필수 x
    const applys = await Apply.find().sort({_id:-1}).limit(10).skip((page - 1) * 10).exec();

    // 전체 페이지
    const applyCount = await Apply.countDocuments().exec();
    // 마지막 페이지
    ctx.set('Last-Page', Math.ceil(applyCount/10));
    ctx.body = applys.map(apply => ({
      ...apply,
      content: apply.content.length < 200 ? apply.content : `${apply.content.slice(0,200)}...`,
    }));
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const read = async (ctx) => {
  const { id } = ctx.params;
  try {
    const apply = await Apply.findById(id).exec();
    if (!apply) {
      ctx.status = 404; // not found
      return;
    }
    ctx.body = apply;
  } catch (error) {
    ctx.throw(500, error);
  }
};
