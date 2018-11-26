import string from './ab'
var string_a = "a文件已经引用" + string
function temp() {
  console.log("这是是a、 b文件都有的函数")
}
export default string_a
setTimeout(function() {
    require.ensure([], function(require) {
        require('./async.js');
    });
    require.ensure([], function(require) {
        require('./async.js');
        console.log("lalal")
    });
    require.ensure([], function(require) {
        require('./async.js');
        console.log("lalal123")
    });
    require.ensure([], function(require) {
        require('./async.js');
        console.log("lalal2345")
    });
}, 3000)