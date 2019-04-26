
import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from  'js/api.js'
import qs from 'qs'

// qs  querystring  query: 查询字符串中的参数部分（问号后面部分字符串），或者使用 querystring.parse() 解析后返回的对象。
// location.search  设置或返回当前 URL 的查询部分（问号 ? 之后的部分）
// location.search.substr(1) 取问号后边的部分
// 对象的解构赋值
let {keyword,id} = qs.parse(location.search.substr(1))
import mixin from 'js/mixin.js'
import Velocity from 'velocity-animate'

new Vue({
    el:".container",
    data:{
        searchLists:null,
        keyword,
        isShow:false
    },
    created(){
        // 异步数据请求，我们放在created声明周期中调用
        this.getSearchList();
    },
    methods:{
        getSearchList(){
            axios.get(url.searchList, { params: { keyword, id}}).then(res=>{
                this.searchLists = res.data.lists
            })
        },
        move(){
            // 当网页被卷去的高大于100时
            if (document.documentElement.scrollTop > 100){
                this.isShow = true;
            }else{
                this.isShow = false;
            }
        },
        toTop(){
            // 点击回到顶部                 
            Velocity(document.documentElement,'scroll',{duration:500})
        }
    },
    mixins:[mixin]
})