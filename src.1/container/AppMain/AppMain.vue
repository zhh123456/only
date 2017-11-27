<template>
  <div class="app-main container">
      <AppSwiper url="/mz/v4/api/billboard/home"></AppSwiper>
     <AppMainMovieBox type="热映" url="/mz/v4/api/film/now-playing?page=1&count=5"></AppMainMovieBox>
     <hr>
      <AppMainMovieBox type="即将上映" url="/mz/v4/api/film/coming-soon?page=1&count=3"></AppMainMovieBox>
      <back-to-top></back-to-top>
  </div>
</template>
<script>
import AppMainMovieBox from '../../components/AppMainMovie/AppMainMovieBox'
import AppSwiper from '../../components/AppSwiper/AppSwiper'
import BackToTop from '../../components/BackToTop/BackToTop'
export default {
  name:'AppMain',
  data(){
      return{

      }
  },
  components:{
    AppSwiper,AppMainMovieBox,BackToTop
  }
}
</script>

<style scoped lang="scss">
 .app-main{overflow-y: scroll;}
</style>

