import string_a from './a.js'
import string_b from './b.js'
import jquery from 'jquery'
import Vue from 'vue'
import elementUI from 'element-ui'
Vue.use(elementUI)

console.log( "this is main1 ", string_a + string_b + "main1文件已引用~~~~~~~~~~~" )
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