const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = check(ctx)
});

function check(context){
  if(context.request.method == 'GET'){
    context.response.status = 405
    return 'Request cannot be GET'
  }
  else if(context.request.method == 'POST'){
    return 'Request Works'
  }
}

app.listen(3000);