import './css/common.css'
import './css/base.css'
import './less/common.less'
import './scss/base.scss'



//vue控制区域
import App from './component/App.vue'
import Vue from 'vue'

var vm = new Vue({
    el: '#app',
    render: h => h(App)
})




//jQuery控制区域
import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', 'red')
})

//高级js语法
class Person {
    static info = 'abc'
}
console.log(Person.info);

