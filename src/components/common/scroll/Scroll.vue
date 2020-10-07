<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core'
    export default {
        name: "Scroll",
      props:{
        probeType:{
          type:Number,
          default:0
        },
        pullUpLoad:{
          type:Boolean,
          default: true
        },
      },
         data(){
        return{
          scroll: null,
        }
      },
        mounted() {
          this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            mouseWheel: true,  // 开启鼠标滚轮
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,

          });
          // 监听滚动位置
          this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)

          })
          // 监听上来加载更多
          // this.scroll.on('scroll',()=>{
          //   this.$emit('pullingUp')
          // })
          // 监听scrool滚到底部
          if(this.pullUpLoad){
            this.scroll.on('scrollEnd',()=>{
              this.$emit('pullingUp');
            })
          }
      },
         methods:{
           scrollTo(x,y,time=300){
            // console.log('返回顶部');
             this.scroll && this.scroll.scrollTo(x,y,time)

            },
           finishPullUp(){
             // console.log('加载更多');
             // console.log(this.scroll)
             // this.scroll.finishPullUp()
           },
           refresh(){
             this.scroll &&  this.scroll.refresh()
           },
           getScrollY(){
             return this.scroll?this.scroll.y:0
           }

        }

    }
</script>

<style scoped>

</style>
