import Apply from "../../models/apply";
import Joi from "@hapi/joi";
import sanitizeHtml from "sanitize-html";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  return next();
};

const sanitizeOption = {
  allowedTags: [
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "p",
    "a",
    "ul",
    "ol",
    "nl",
    "li",
    "b",
    "i",
    "strong",
    "em",
    "strike",
    "abbr",
    "code",
    "hr",
    "br",
    "div",
    "table",
    "thead",
    "caption",
    "tbody",
    "tr",
    "th",
    "td",
    "pre",
    "iframe",
  ],
  disallowedTagsMode: "discard",
  allowedAttributes: {
    a: ["href", "name", "target"],
    // We don't currently allow img itself by default, but this
    // would make sense if we did. You could add srcset here,
    // and if you do the URL is checked for safety
    img: ["src"],
  },
  // Lots of these won't come up by default because we don't allow them
  selfClosing: [
    "img",
    "br",
    "hr",
    "area",
    "base",
    "basefont",
    "input",
    "link",
    "meta",
  ],
  // URL schemes we permit
  allowedSchemes: ["http", "https", "ftp", "mailto"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: true,
  enforceHtmlBoundary: false,
};

const removeHtmlAndShorten = (content) => {
  const filtered = sanitizeHtml(content, {
    allowedTags: [],
  });

  return filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`;
};

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
    content: sanitizeHtml(content, sanitizeOption),
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
  const page = parseInt(ctx.query.page || "1", 10);
  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { lang } = ctx.query;
  const query = {
    ...(lang ? { langs: lang } : {}),
  };

  try {
    // 쿼리를 프로미스로 만들기위해서는 exec()를 붙인다. 3 필수 4 필수 x
    const applys = await Apply.find(query)
      .sort({ _id: -1 })
      .limit(5)
      .skip((page - 1) * 5)
      .lean()
      .exec();

    // 전체 페이지
    const applyCount = await Apply.countDocuments(query).exec();
    // 마지막 페이지
    ctx.set("Last-Page", Math.ceil(applyCount / 5));
    ctx.body = applys.map((apply) => ({
      ...apply,
      content: removeHtmlAndShorten(apply.content),
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

export const update = async (ctx) => {
  const { id } = ctx.params;
  const schema = Joi.object().keys({
    applystartday: Joi.string(),
    applyendday: Joi.string(),
    teststartday: Joi.string(),
    testendday: Joi.string(),
    title: Joi.string(),
    content: Joi.string(),
    langs: Joi.array().items(Joi.string()),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const apply = await Apply.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 업데이트된 데이터 반환
    }).exec();
    if (!apply) {
      ctx.status = 404;
      return;
    }
    ctx.body = apply;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const remove = async (ctx) => {
  const { id } = ctx.params;
  try {
    await Apply.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (error) {
    ctx.throw(500, error);
  }
};
