var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Hello Cedar';
});

app.listen(4000);
