<template>
  <div class="params-wrap" v-if="Object.keys(detailParam).length!==0">
     <div v-for="(item,index) in detailParam.tables" :key="index">
       <div v-for="(list,index) in item" class="flex" :key="index">
         <div v-for="(listen,index) in list" class="rule-list-item" :key="index">
           {{listen}}
         </div>
       </div>
     </div>
    <div v-for="(infos, index) in detailParam.infos" :key="index" class="flex info-list-wrap">
      <div class="info-list-tit">{{infos.key}}</div>
         <div>{{infos.value}}</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "DetailParam",
        props:{
          detailParam:{
            type:Object,
             default(){
              return {}
            }
          }
      }
    }
</script>

<style scoped>
  .params-wrap {
    border-top: 4px solid #ececec;
    border-bottom: 4px solid #ececec;
  }
  .rule-list-item {
    font-size: 12px;
    width: 20%;
    border-bottom: 1px solid #ececec;
    padding: 10px 4px;
  }
  .info-list-wrap {
    font-size: 14px;;
    border-bottom: 1px solid #ececec;
    padding: 10px 4px;
    line-height: 20px;
  }

  .info-list-tit {
    width: 18%;
  }

</style>
