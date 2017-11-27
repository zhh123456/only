<template>
 <div ref="container" class="app-swiper swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in imgs" :key="banner.id">
          <img width="100%" :src="banner.url"/>
       </div>
    </div>
    <div class="swiper-pagination" ref="pagination"></div>
  </div>
</template>
<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
  name:"AppSwiper",
  data(){
      return{
          imgs:[]
      }
  },
  methods:{
      getImgs(){
          let that = this
          axios.get('/static/img.json')
          .then((res)=>{
              res.data.forEach((item,i)=>{
                 
                  if(i>0&&i<7){
                      that.imgs.push(res.data[i])
                  }
              })
             
          })
      }
  },
  created(){
      this.getImgs()
      
  },
  updated(){
    new Swiper(this.$refs.container,{
      loop:true,
      pagination:{
          el:this.$refs.pagination
      }
    })
  }
}
</script>
<style scoped lang="scss">
    .swiper-slide{
        width:3.52rem;
        height: 4.11rem;
        margin-bottom: 10px;
        img{
          
            width: 94%;
            margin-left: 3%;
        }
    }
</style>


