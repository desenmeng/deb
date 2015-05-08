/**
 * deb - index.js
 * Created by mengdesen on 15/5/8.
 */

'use strict';

function debug(namespace) {
  //判断当前是否开始debug模式,通过全局变量判断
  //如果关闭的话，返回一个空对象，这样就不会打出信息

  //如果开启的话，返回一个打印对象，这个对象打印的时候，会增加namespace变量，同时不同级别的错误，使用颜色
  //需要考虑打印对象的情况
}


module.exports = debug;
