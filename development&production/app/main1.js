import string_a from './a.js'
import string_b from './b.js'
import jquery from 'jquery'
import Vue from 'vue'
import elementUI from 'element-ui'
Vue.use(elementUI)

console.log( "this is main1 ", string_a + string_b + "main1文件已引用~~~~~~~~~~~" )
require.ensure([], function(require) {
    require('./async.js');
    console.log("引用 async.js 文件")
});
require.ensure([], function(require) {
    require('./async1.js');
    console.log("引用 async1.js 文件")
});