//使用 vuex插件
import Vue from 'vue'
import Vuex from 'vuex'
import url from 'js/api.js'
import axios from 'axios'
Vue.use(Vuex)

import Address from 'js/addressService.js'


// 创建Store实例
const store = new Vuex.Store({
    state:{
        //存放数据的地方
        lists:null
    },
    mutations:{
        //提交mutations,是更改状态的唯一方法，而且这个过程是同步的
        init(state,lists){
            state.lists = lists
        },
        add(state,instance){
            state.lists.push(instance)
        },
        remove(state,id){
            let lists = state.lists
            let index  = lists.findIndex(item=>{
                return item.id = id
            })
            lists.splice(index,1)
        },
        update(state,instance){
            let lists = JSON.parse(JSON.stringify(state.lists))
            let index = lists.findIndex(item => {
                return item.id = instance.id
            })
            lists[index] = instance
            state.lists = lists
        },
        setDefault(state,id){
            let lists = state.lists
            lists.forEach(item => {
                    item.isDefault = item.id === id?true:false
            })
        }
    },
    actions:{
        // 异步逻辑应该封装到actions里
        getLists({commit}){
            Address.list().then(res => {
                commit('init',res.data.lists)
            })
        },
        addAction({commit},instance){
            // Address.add(instance).then(res => {
            //     commit('add',instance)
            // })
            axios.post(url.addressAdd, { instance }).then(res => {
                // 模拟添加ID，其实instance最好后台返回
                instance.id = parseInt(Math.random()*10000)
                commit('add', instance)
            })
        },
        removeAction({commit},id){
            axios.post(url.addressRemove, { id }).then(res => {
                commit('remove', id)
            })
        },
        updateAction({commit},instance){
            axios.post(url.addressSetDefault, { instance }).then(res => {
                commit('setDefault', instance)
            })
        },
        setDefaultAction({commit},id){
            axios.post(url.addressSetDefault, {id}).then(res => {
                commit('setDefault',id)
            })
        }
    }

})

export default store