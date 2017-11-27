<template>
  <router-link :to="{name:'list'}" class="header-img-item">
      <span>
          <img :src="imgs">
      </span>
  </router-link>
</template>
<script>
import axios from 'axios'
export default {
  name:"HeaderImgItem",
  props:['id'],
  data(){
      return{
          imgs:''
      }
  },
  methods:{
      getImgs(){
          let that = this
          axios.get('/static/img.json')
          .then((res)=>{
              //console.log(res.data[ parseInt(that.id)-1].url) 
              that.imgs = res.data[ parseInt(that.id)-1].url
            //   console.log(typeof(that.imgs))
          })
      }
  },
  created(){
      
      this.getImgs()
  }
}
</script>
<style scoped lang="scss">
    .header-img-item{
        span{
            img{
                margin-bottom: 10px;
                width: 94%;
                margin-left: 3%;
            }
        }
    }
</style>

