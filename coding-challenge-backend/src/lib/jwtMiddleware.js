import jwt from 'jsonwebtoken';
import User from '../models/user';

// 토큰 인증
const jwtMiddleware = async (ctx, next) => {
  const token = ctx.cookies.get('access_token');
  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    ctx.state.user = {
      _id: decoded._id,
      userid: decoded.userid,
      username: decoded.username,
      userstatus: decoded.userstatus,
      apikey: decoded.apikey,
    };

    // {
    //     _id: '*',
    //     userid: '*',
    //     iat: 1597145658,
    //     exp: 1597750458
    //   }
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 2) {
      // NOTE: 2일 미만 재발급
      const user = await User.findById(decoded._id);
      const token = user.generateToken();
      ctx.cookies.set('access_token', token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      });
    }
    return next();
  } catch (error) {
    return next();
  }
};

export default jwtMiddleware;
