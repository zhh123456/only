

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    userInfo:{
        userID:'',
        password:''
    },
    car:{
    	goods:localStorage.goods?JSON.parse(localStorage.goods):[]
    }

}

const getters={
    pureCar(state){
    	return state.car.goods
    },
    all_price_num(state){
    	let all={price:0,num:0}
    	state.car.goods.forEach((item,i)=>{
    		all.num+=item.num
    		all.price+=item.num*item.price
    	})
    	return all
    }
}

const mutations = {
    changeUserInfo(state,userinfo){
        state.userInfo = userinfo
    },
    exit(state){
    	state.userInfo={
	        userID:'',
	        password:''
	    }
    },
    addGood(state,{goodid,price,name,img}){
    	let goods = state.car.goods
    	let isHas = false
    	let length = goods.length
    	for(var i = 0;i < length;i++){
    		if(goods[i].goodid==goodid){
    			goods[i].num++
    			isHas=true
    			break;
    		}
    	}
    	if(!isHas){
    		goods.push({goodid,price,name,num:1,img})
    	}
    	localStorage.goods = JSON.stringify(goods)
    },
    reduceGood(state,goodid){
    	let goods = state.car.goods
    	let length = goods.length
    	for(var i =0;i<length;i++){
    		if(goods[i].goodid==goodid){
    			goods[i].num--
    			if(goods[i].num==0){
    				goods.splice(i,1)
    			}
    			break;
    		}
    	}
    	localStorage.goods = JSON.stringify(goods)
    },
    remove(state,goodid){
    	let goods = state.car.goods
    	let length = goods.length
    	for(var i =0;i<length;i++){
    		if(goods[i].goodid==goodid){
    				goods.splice(i,1)
    			break;
    		}
    	}
    	localStorage.goods = JSON.stringify(goods)
    }
}


import actions from './actions'
const store = new Vuex.Store({
    state,mutations,actions,getters
})

export default store