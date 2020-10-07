<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>

    <tab-bar>
      <!--        二级插槽-->
      <tab-bar-item path="/home">
        <!--          插槽内容-->
        <img slot="item-icon" src="../src/assets/img/首页.svg" alt="">
        <img slot="item-icon-active" src="../src/assets/img/首页1.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item >
      <tab-bar-item path="/category">
        <img slot="item-icon" src="../src/assets/img/分类.svg" alt="">
        <img slot="item-icon-active" src="../src/assets/img/分类1.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="../src/assets/img/购物车.svg" alt="">
        <img slot="item-icon-active" src="../src/assets/img/购物车1.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="../src/assets/img/我的.svg" alt="">
        <img slot="item-icon-active" src="../src/assets/img/我的1.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
<!--    一级插槽-->
    </div>
</template>

<script>
  // 底部bar
import TabBar from "./components/common/tabbar/TabBar";
import TabBarItem from "./components/common/tabbar/TabBarItem";
import MainTabBar from "./components/content/MainTabBar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar,
    TabBarItem,
    TabBar,
  }
}
</script>

<style>
  @import "assets/css/base.css";



</style>
