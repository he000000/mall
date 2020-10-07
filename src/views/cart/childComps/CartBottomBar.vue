<template>
    <div class="bottom-bar">
      <div class="check-content">
        <input type="checkbox" class="check" @click="check">
        <span class="text">全选</span>
      </div>
      <div class="sum">合计：￥{{totalPrice}}</div>
      <div class="calculate">
       去计算:({{checkLength}})
      </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
        name: "CartBottomBar",
      components:{
        mapGetters
      },
        computed:{
          totalPrice(){
            return this.$store.state.cartList.filter(item=>{
              console.log(item.checked)
              return item.checked
            }).reduce((preValue,item)=>{
              return preValue+item.price*item.count
            },0).toFixed(2)
          },
          checkLength(){
            return this.$store.state.cartList.length
            // return this.$store.start.cartList.filter(item=>item.checked.length)
          }

      },
      methods:{
        check(){
          // console.log(this.$store.state.cartList)
        }
      }
    }
</script>

<style scoped>
  .calculate{
    float: right;
    padding-top: 10px;
    width: 100px;
    height: 30px;
    background-color: red;
    margin-left:230px;
    margin-top: -30px;
    text-align: center;


  }
  .bottom-bar{
    height: 40px;
    background-color: #EEEEEE;
    position: relative;
    bottom: 40px;
  }
  .check-content{
    position: relative;
    padding-top: 10px;
    display: flex;
    width: 100px;
  }
  .text{
    padding-top: 3px;
    margin-left: 10px;
  }
  .sum{
    flex: 1;
    margin-top: -19px;
    margin-left: 90px;
  }
  .check {
    margin-left: 10px;
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 100%;
    border: 1px solid red;
  }
  .check:checked {
    background: url(../../../assets/img/detail/check_active.png) no-repeat center;
    background-size: cover;
  }

</style>
