module.exports = options => {
  return async function auth(ctx, next) {
    ctx.state.csrf = ctx.csrf;
    await next();
  };
};
