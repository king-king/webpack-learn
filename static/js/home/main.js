document.querySelector('#home').onclick=function () {
    require.ensure([], function() {
        var home = require('../async/getHome') //baidumap.js放在我们当前目录下
        home.get();
      })
}