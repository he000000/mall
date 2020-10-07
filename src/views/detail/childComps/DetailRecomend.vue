<template>
  <div class="recommend-info-wrap" v-if="Object.keys(detailRecomend)!==0" >
    <div class="recommend-info-list" v-for="(item,index) in detailRecomend" :key="index">
      <img :src="item.image" alt="" class="recommend-info-img">
      <div class="recommend-info-title">{{item.title}}</div>
      <div>
        <span class="recommend-info-price">{{item.discountPrice}}</span>
        <span><img class="icon" src="../../../assets/img/home/collect_icon.png" alt="">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailRecomend",
        props:{
        detailRecomend:{
          type:Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>
  .recommend-info-wrap {
    display:flex;
    padding: 0 4px;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: 4px solid #ececec;
  }
  .recommend-info-list {
    padding-left: 2px;
    padding-right: 2px;
    flex: 1;
    width: 48%;
    margin-top: 6px;
  }
  .recommend-info-title {
    width: 100%;
    font-size: 14px;
    margin: 4px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .recommend-info-img {
    width: 100%;
    border-radius: 6px;
  }
  .recommend-info-price {
    color: var(--color-text);
    margin-right: 6px;
  }
  .icon{
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: -4px;
  }


</style>
