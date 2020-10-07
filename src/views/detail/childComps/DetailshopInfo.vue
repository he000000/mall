<template>
  <div class="swiper" >
    <div class="shopInfo">
        <div class="logo"><img :src="shop.shopLogo" alt=""></div>
         <div class="name">{{shop.name}}</div>
    </div>
    <div class="warper">
      <div class="cSells">
        <div class="text">{{shop.cSells}}</div>
        <div><span>总销量</span></div>
      </div>
      <div class="cGoods">
        <div class="text">{{shop.cGoods}}</div>
        <div>全部宝贝</div>
      </div>
      <div class="score">
        <div class="scorename">
             <div>{{shop.score[0].name}}</div>
             <div>{{shop.score[1].name}}</div>
             <div>{{shop.score[2].name}}</div>
        </div>
        <div>
             <div class="active">{{shop.score[0].score}}</div>
             <div class="activegreen">{{shop.score[1].score}}</div>
             <div class="active">{{shop.score[2].score}}</div>
        </div>
        <div>
             <div class="active"><span>底</span></div>
             <div class="activegreen"><span>高</span></div>
             <div class="active"><span>底</span></div>
        </div>
      </div>
    </div>
    <div class="inShop">进店逛逛</div>
  </div>

</template>

<script>
    export default {
        name: "DetailshopInfo",
         props:{
          shop:{
            type:Object,
            default(){
              return {}
            }
          }
      }
    }
</script>

<style scoped>
  .swiper{
    margin-bottom: 10px;
    margin-top: 15px;
    border-bottom: 1px solid #eeddee;
    border-top: 1px solid #eeddee;
  }
  .shopInfo{
    display: flex;
    padding-top: 30px;
    padding-left: 15px;
  }
  .logo img{
    flex: 0.1;
    width: 60px;
    height: 60px;
    border-radius: 200px;
    border: 1px solid #999999;
  }
  .name{
    flex: 1;
    padding-top: 25px;
    padding-left: 15px;
    font-size: 18px;
  }
  .warper{
    padding-top: 20px;
    height: 70px;
    display: flex;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    line-height: 25px;

  }
  .text{
    font-size: 22px;
  }
  .cSells{
    flex: 0.5;
    padding-top: 13px;

  }
  .cGoods{
    flex: 0.5;
    padding-top: 13px;

    border-right: 1px solid #999999;
  }
  .score{
    flex: 1;
    display: flex;
  }
  .score div{
    flex: 1;
  }
  .scorename{
    flex: 1.5;
  }
  .active{
    color: red;
  }
  .activegreen{
    color: #42b983;
  }
  .inShop{
    margin: 20px auto;
    width: 150px;
    height: 25px;
    padding-top: 5px;
    border-radius: 10px;
    background-color: #F3F4F9;
    text-align: center;
  }
</style>
