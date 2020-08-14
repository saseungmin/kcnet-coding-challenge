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


  const { applystartday,applyendday,teststartday,testendday,title, content, langs } = ctx.request.body;
  console.log(ctx.request.body);
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
  } catch (e) {
    ctx.throw(500, e);
  }
};
