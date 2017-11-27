<template>
  <div ref="container" class="app-swiper swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
            <img :src="banner.imageUrl" :title="banner.name" width="100%"/>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
export default {
  name:'AppSwiper',
  props:['url'],
  data(){
      return{
          banners:[]
      }
  },
  methods:{
      getBanners(){
          let that = this
          axios.get(this.url,{
              params:{__t:Date.now()}
          }).then((res)=>{
             // console.log(res.data.data.billboards)
              that.banners = res.data.data.billboards
          })
      }
  },
  created(){
      this.getBanners()
  },
  updated(){
      //console.log(this.banners)
      new Swiper(this.$refs.container,{
          loop:true
      })
  }
}
</script>                              

<style scoped>

</style>

