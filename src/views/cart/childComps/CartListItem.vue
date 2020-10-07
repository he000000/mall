<template>
  <div>
    <div class="cart-list-main flex">
      <div class="cart-list-left flex">
        <check-button :is-checked="product.checked" @click="checkClick"></check-button>
<!--        <input type="checkbox" class="check" @click="check" :value="product.checked">-->
          <img :src="product.image" alt="" class="goods-img">
      </div>
      <div class="cart-list-right">
        <div class="goods-name one-txt-cut">{{product.title}}</div>
        <div class="goods-info flex">
          <span class="price">￥{{product.price}}</span><span>x{{product.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
    export default {
        name: "CartListItem",
        components:{
        CheckButton
      },
      data(){
        return  isChecked
      },
         props:{
          product:{
            type:Object,
            default(){
              return {}
             }
            },
           methods: {
             checkClick(){
               // console.log('123')
               // this.product.checked=!this.product.checked
               // this.product.checked=!this.product.checked
             },
             // addCart() {
             //   this.$emit('addCart')
             // },
           }
      }
    }
</script>

<style scoped>
  .cart-list-main {
    padding: 10px;
    border-bottom: 1px solid #ececec;
  }
  .cart-list-left {
    width: 26%;
    align-items: center;
  }
  .check {
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 100%;
    border: 1px solid #ececec;
  }
  .check:checked {
    background: url(../../../assets/img/detail/check_active.png) no-repeat center;
    background-size: cover;
  }
  .goods-img {
    width: 52px;
    height: 66px;
    overflow: hidden;
    border: 1px solid #ececec;
    margin:0 10px;
    border-radius: 6px;
    vertical-align: middle;
  }
  .cart-list-right {
    width: 74%;
    position: relative;
  }
  .goods-name {
    width: 100%;
    font-size: 13px;
  }
  .goods-info {
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .price {
    color: #F9CD0B;
  }
</style>
