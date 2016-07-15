var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hi Kimi';
});

app.listen(4000);
