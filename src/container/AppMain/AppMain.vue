<template>
  <div class="app-main">
      <app-header></app-header>
      <div class="content">
      	<app-img-item :id="1"></app-img-item>
      	<app-swiper></app-swiper>
      	<app-img-item :id="8"></app-img-item>
      	<AppImgs></AppImgs>
      	<app-imgs-ahh></app-imgs-ahh>
      	<app-imgs-bhh :num1="19" :num2="27"></app-imgs-bhh>
      	<app-imgs-bhh :num1="26" :num2="32"></app-imgs-bhh>
      	<app-imgs-bhh :num1="31" :num2="39"></app-imgs-bhh>
				<app-footer></app-footer>
      </div>
      
  </div>
</template>
<script>
import AppHeader from '../../components/AppHeader/AppHeader'
import AppImgItem from '../../components/AppImgs/AppImgItem'
import AppSwiper from '../../components/AppSwiper/AppSwiper'
import AppImgs from '../../components/AppImgs/AppImgs'
import AppImgsAhh from '../../components/AppImgs/AppImgsAhh'
import AppImgsBhh from '../../components/AppImgs/AppImgsBhh'
import AppFooter from '../../components/AppFooter/AppFooter'

export default {
  name:'AppMain',
  components:{AppHeader,AppImgItem,AppSwiper,AppImgs,AppImgsAhh,AppImgsBhh,AppFooter}
}
</script>
<style scoped lang="scss">

</style>
