module.exports = options => {
  return async function getIp(ctx, next) {
    // ctx.request.ip
    ctx.body = "test";
    await next();
  };
};
