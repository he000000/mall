<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">商城</div>
    </nav-bar>
<!--    <tab-control-->
<!--      :titles="['流行','新款','精选']"-->
<!--      @tabClick="tabClick" ref="tabControl" v-show="isTabFixed"-->
<!--    ></tab-control>-->
    <scroll class="content" ref="scroll" :probe-type="3"
            @scroll="contentScroll" :pull-up-load="true"
       @pullingUp="LoadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
         :titles="['流行','新款','精选']"
        @tabClick="tabClick" ref="tabControl"
      ></tab-control>
      <goods :goods="showGoods"></goods>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import homeSwiper from "./childComps/homeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import Goods from "../../components/common/goods/Goods";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";


  import {getHomeMUltidata, getHomeGoods} from "../../network/home";
  import {debounce} from "../../common/utils";

  // 轮播

    export default {
        name: "home",
        components:{
           homeSwiper,
          RecommendView,
          FeatureView,
          NavBar,
          TabControl,
          Goods,
          Scroll,
          BackTop
      },
      data(){
          return{
            banners:[],
            recommends:[],
            // 数据请求分3组
            goods:{
              'pop':{page: 0,list:[]},
              'new':{page: 0,list:[]},
              'sell':{page: 0,list:[]},
            },

            currentType:'pop',
            isShowBackTop:false,
            tabOffsetTop:0,
            isTabFixed:false

          }
      },
      computed:{
        showGoods(){
          return this.goods[this.currentType].list
        },
        // 记录页面滑动位置，再次切换回来的时候依然停留在这里
        activated(){
          this.$refs.scroll.scrollTo(0,this.saveY,0)
          // 刷新防止顶部
          this.$refs.scroll.refresh()
        },
        deactivated(){
          this.saveY=this.$refs.scroll.getScrollY
        }

      },

      created() {
          // 1.请求多个数据
        this.getHomeMUltidata();
          // .then(res=>{
          // result保存数据
          // this.banners=res.data.data.banner.list;
          // this.recommends=res.data.data.recommend.list;
        //
        // })
        // 2.请求商品数据
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');
        // 3.监听item中图片加载完成

      },
      mounted() {
        // 3.监听item中图片加载完成
        const  refresh =debounce(this.$refs.scroll.refresh,500)
        this.$bus.$on('itemImageLoad',()=>{
          refresh();
        })
      },
      methods: {
          // 监听轮播加载完成
        swiperImageLoad(){
          // 获取outOffsetTop
          this.$refs.tabControl.$el.offsetTop
        },
          // 防抖函数
        // debounce(func,delay){
        //   let timer=null
        //   return function (...args) {
        //     if(timer) clearInterval(timer)
        //     timer=setTimeout(()=>{
        //       func.apply(this,args)
        //     },delay)
        //   }
        // },
        LoadMore(){
          // console.log(this.$refs.scroll.pullUpLoad)
          // console.log('加载更多')
          this.getHomeGoods(this.currentType);
        },
        contentScroll(position){
          // 判断backtop是否显示
          this.isShowBackTop=(-position.y)>1000
          // 决定tabControl是否吸顶
          // this.isTabFixed = ((-position.y) > this.tabOffsetTop) ? true : false
          // this.isTabFixed=(-position.y)>this.tabOffsetTop
          // console.log(this.isTabFixed)
        },
          // 返回顶部按钮
        backClick(){

          // console.log(this.$refs.scroll.scrollTo());

          this.$refs.scroll.scrollTo(0,0,500)
        },
          // 事件监听相关的方法
        tabClick(index){
          this.currentType=Object.keys(this.goods)[index];
          // switch (index) {
          //   case 0:
          //     this.currentType='pop';break;
          //   case 1:
          //     this.currentType='new';break;
          //   case 2:
          //     this.currentType='sell';break;
          //
          // }

         },

          // 网络请求相关数据
        // result保存数据
        getHomeMUltidata() {
          getHomeMUltidata().then(res => {
            this.banners = res.data.data.banner.list;
            this.recommends = res.data.data.recommend.list;
          })
        },
        // 2.请求商品数据
        getHomeGoods(type){
          const page=this.goods[type].page+1;
          getHomeGoods(type,page).then(res=>{
            // 将数组一个一个添加到list中
            this.goods[type].list.push(...res.data.data.list);
            this.goods[type].page+=1;
            // 完成上拉加载更多
            // this.$refs.scroll.finishPullUp();
           })
        }
      }
    }
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
    /*padding-top:44px ;*/
  }
  .home-nav{
    background-color: #FF8E96;
    color: white;
    /*position: fixed;*/
    /*left: 0;*/
    /*top: 0;*/
    /*right: 0;*/
    /*z-index: 9;*/
  }
  .content{
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /*height: calc(100vh - 93px);*/

  }

</style>
