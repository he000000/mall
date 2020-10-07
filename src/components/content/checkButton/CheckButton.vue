<template>
    <div class="check-button" :class="{check:isChecked}" @click="checkClick">
      <img src="../../../assets/img/detail/对号.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "CheckButton",
         props:{
          isChecked:{
            type:Boolean,
            default:false
          }
         },
          methods:{
            checkClick(){
              this.isChecked=!this.isChecked;
              console.log(this.isChecked)
              this.$emit('checkClick')
            }
          }
    }
</script>

<style scoped>
  .check{
    border-color: #ff8198;
    background-color: #ff8198;
  }
  .check-button{
    border-radius: 50%;
    border: 1px solid #ff8198;
  }
  .check-button img{
    width: 18px;
    height: 18px;
  }

</style>
