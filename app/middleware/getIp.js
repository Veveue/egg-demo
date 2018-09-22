module.exports = options => {
  return async function getIp(ctx, next) {
    if (ctx.request.ip === "::1") {
      ctx.status = 403;
      ctx.body = "403";
    } else {
      await next();
    }
  };
};
