<template>
  <div v-if="Object.keys(goods).length!==0">
    <div class="title">{{goods.title}}</div>
        <div class="price-wrap">
          <div class="new-price">￥{{goods.highNowPrice}}</div>
          <div class="old-price">{{goods.highPrice}}</div>
          <div class="discount-desc" v-if="goods.discountDesc"><span>{{goods.discountDesc}}</span></div>
        </div>
    <div class="other-info">
      <div><span>{{goods.columns[0]}}</span></div>
      <div><span>{{goods.columns[1]}}</span></div>
      <div><span>{{goods.columns[2]}}</span></div>
    </div>
  </div>
<!--  <div v-if="Object.keys(goods).length!==0">-->
<!--      <div class="server-wrap">-->
<!--          <div v-for="index in goods.services.length-1":key="index">-->
<!--            <img :src="goods.services[index-1].icon" alt="">-->
<!--                  {{goods.services[index-1].name}}-->
<!--          </div>-->
<!--      </div>-->
<!--    </div>-->
</template>

<script>
    export default {
        name: "DetailBaseInfo",
        props:{
          goods:{
            type:Object,
            default(){
              return {}
            }
          }
        },
      computed:{
          showImage(){
            return this.product.image|| this.product.show.img
          }
      }
    }
</script>

<style scoped>
  .title{
    margin: 10px 0;
    padding: 0 4px;
    font-size: 18px;
    font-weight: bold;
    line-height: 20px;
  }
  .price-wrap{
    display: flex;
    padding: 0 4px 10px;

  }
  .new-price{
    color: red;
    font-size: 25px;
  }
  .old-price{
    color: #999999;
    font-size: 12px;
    margin: 0 4px;
    text-decoration: line-through;
  }
  .discount-desc{
    height: 18px;
    color: #FFFFFF;
    font-size: 12px;
    border-radius: 100px;
    padding: 3px 6px;
    background-color: #ff8198;
  }
  .other-info{
    display: flex;
    color: #999999;
    font-size: 12px;
    text-align: center;
    padding: 10px 4px;
    border-bottom: 1px solid #eeddee;
    border-top: 1px solid #eeddee;
  }
  .other-info div{
    flex: 1;
  }

  .server-wrap{
    display: flex;
    font-size: 12px;
    color: #333333;
    padding: 10px 4px;

    border-bottom: 4px solid #eeddee;
    /*img{*/
    /*  width: 12px;*/
    /*  height: 12px;*/
    /*  vertical-align: middle;*/
    /*}*/
  }


</style>
