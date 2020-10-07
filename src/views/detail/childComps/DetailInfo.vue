<template>
  <div v-if="Object.keys(detailInfo).length!==0" class="goods-info">
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index"
           :src="item" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailInfo",
        props:{
        detailInfo:{
          type:Object,
          default(){
            return {}
          }
        },
        data(){
          return{
            counter:0,
            imageLength:0
          }
        },
        methods:{
        },
        watch:{
          detailImage(){
            // 获取图片个数
            this.imageLength.this.datailImage.detailImage[0].list.length
          }
        }
      }
    }
</script>

<style scoped>
  .goods-info{
  }
.info-key{
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 30px;
  padding-top: 10px;
  border-bottom: 1px solid #eeddee;
  border-top: 1px solid #eeddee;
}
  .info-list img{
    width: 100%;
    padding-top: 10px;
  }
</style>
