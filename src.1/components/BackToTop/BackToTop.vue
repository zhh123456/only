<template>
  <div class="back-to-top">
      <div class="top-div">
          <div class="circle" @click="back">
              <icon name="arrow-up"></icon>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name:"BackToTop",
  data(){
      return{
          isShow:false
      }
  },
  mounted(){
      let that = this
      
      this.$parent.$el.addEventListener('scroll',function(e){
          if(this.scrollTop>300){
              that.isShow = true
          }else{
              that.isShow = false
          }
      })
  },
  methods:{
      back(){
          //console.log(1)
          this.$parent.$el.scrollTop=0
      }
  }
}
</script>
<style scoped lang="scss">
    .back-to-top{
        position: fixed;
        bottom: 0;
        right:0;
        .top-div{
            padding: 0.1rem;
            .circle{
                width: 0.48rem;
                height: 0.48rem;
                border-radius: 50%;
                background: #282828;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ffffff;
            }
        }
    }
</style>
