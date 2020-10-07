import Vue from 'vue'
import Vuex from 'Vuex'

import getters from "./getters";
Vue.use(Vuex);
const  stroe=new  Vuex.Store({
   getters,
    state:{
    cartList:[]

  },
  mutations:{
    // mutations唯一的目的就是修改state中的状态
    // mutations中的每个方法尽可能完成的事件比较单一
    // addCounter(state,payload){
    //   payload.count++
    // addToCart(s)
    addCart(state,payload){
      // let oldProduct=null
      // for (let item of state.cartList){
      //   if (item.iid===payload.iid){
      //     oldProduct=item
      //   }
      // }
      let oldProduct =state.cartList.find(item=> item.iid===payload.iid)
      // 判断oldProducrt
      if(oldProduct){
        oldProduct.count+=1
      }else {
        payload.count=1
        payload.checked=true
        state.cartList.push(payload)
      }
    }

  }

})
export default stroe
