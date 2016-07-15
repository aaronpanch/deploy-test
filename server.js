var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'Im in a new branch created at 1:32';
});

app.listen(4000);
