<template>
    <div class="detail">
      <detail-navber class="detail-nav" @titleClick="titleClick"></detail-navber>
      <scroll class="content" ref="scroll">
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detailshop-info :shop="shop"></detailshop-info>
        <detail-param :detail-param="detailParam" ref="param"></detail-param>
        <detail-comment :detail-conmment="detailConmment" ref="comment"></detail-comment>
        <detail-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-info>
        <detail-recomend :detail-recomend="detailRecommends" ref="recomend"></detail-recomend>
      </scroll>
      <detail-botton-bar @addCart="addCart"></detail-botton-bar>
    </div>
</template>

<script>
  import DetailNavber from "./childComps/DetailNavber";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailshopInfo from "./childComps/DetailshopInfo";
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailInfo from "./childComps/DetailInfo";
  import DetailParam from "./childComps/DetailParam";
  import DetailComment from "./childComps/DetailComment";
  import DetailRecomend from "./childComps/DetailRecomend";
  import DetailBottonBar from "./childComps/DetailBottonBar";

  import {getDetail, Goods,shop,GoodsParam,getRecommend} from "../../network/detail";


  export default {
        name: "Detail",
        components:{
          DetailComment,
          DetailNavber,
          DetailBaseInfo,
          DetailSwiper,
          DetailshopInfo,
          Scroll,
          DetailInfo,
          DetailParam,
          DetailRecomend,
          DetailBottonBar
       },
        data(){
          return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            detailParam:{},
            detailConmment:{},
            detailRecommends:[],
            detailTopY:[0,1000,2000,3000]
          }
        },
        created() {
          this.iid=this.$route.params.iid;
          getDetail(this.iid).then(res=>{
            const data=res.data.result
            // 请求详细图片
            this.topImages=data.itemInfo.topImages;
            // console.log(res);
            // 获取商品信息
            this.goods=new Goods(data.itemInfo,data.columns);
            //获取商家信息
            this.shop=new shop(data.shopInfo);
            // 获取穿着效果
            this.detailInfo= data.detailInfo;
            // 获取衣服尺寸
            this.detailParam=new GoodsParam(data.itemParams.info,data.itemParams.rule)
            // 获取评论信息
            if(data.rate.Crate!==0)
              this.detailConmment=data.rate.list[0];
            // 获取推荐数据
          })
          // 获取推荐数据
          getRecommend().then(res=>{
            this.detailRecommends=res.data.data.list;
            // console.log(res)
          })
        },
    mounted() {

    },
    updated() {
      //     this.detailTopY=[]
      // this.detailTopY.push(0);
      // this.detailTopY.push(this.$refs.param.$el.offsetTop);
      // this.detailTopY.push(this.$refs.comment.$el.offsetTop);
      // this.detailTopY.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.detailTopY)
    },
    methods:{
          imageLoad(){
            this.$refs.scroll.refresh()
          },
          titleClick(index){
            console.log(index)
            this.$refs.scroll.scrollTo(0,-this.detailTopY[index],3000)
            console.log(this.$refs.scroll.scrollTo(0,-this.detailTopY[index],3000))
          },
           addCart(){
        // 获取购物车需要的信息c
             const product={}
             product.iid=this.iid
             product.image=this.topImages[0]
             product.title=this.goods.title
             product.price=this.goods.lowNowPrice
             // 描述信息
             product.desc=this.goods.desc
             // console.log(product)
             // 将商品添加到购物车里面
             this.$store.commit('addCart',product)

          }
        }
    }
</script>

<style scoped>
.detail{
  position: relative;
  background-color: white;
  z-index: 9;
}
.detail-nav{
  position: relative;
  background-color: white;
}
  .content{
    /*height: 100vh;*/
    height: calc(100% - 44px- 49px);
  }
</style>
