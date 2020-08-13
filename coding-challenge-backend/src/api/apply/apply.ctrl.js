import Apply from "../../models/apply";

export const write = async (ctx) => {
  const { applystartday,applyendday,teststartday,testendday,title, content, langs } = ctx.request.body;
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
