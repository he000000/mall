<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
<!--    商品展示-->
    <cart-list></cart-list>
<!--    结算-->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";
  import  { mapGetters }  from 'Vuex'

    export default {
        name: "cart",
        components:{
        NavBar,
          CartList,
          CartBottomBar
      },
      computed:{
        ...mapGetters(['cartLength','cartList'])
      }
    }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: #ff8198;
    color: white;
  }

</style>
