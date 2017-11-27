<template>
  <header class="app-header">
  	<router-link :to="{name:'car'}">
    	<img class="img1" src="../../assets/indexCollect.png"/>
  	</router-link>
    <img class="img2" src="../../assets/logo-title.png"/>
    <div>
    	<router-link class="divhh" :to="{name:'search'}">
      	<img src="../../assets/indexSearch.png"/>
      </router-link>
      <div @click="change" class="divhh">
      	<img class="img" src="../../assets/indexAccount.png"/>
      </div>
    </div>
  </header>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name:'AppHeader',
  data(){
  	return{
  		
  	}
  },
  computed:{
  	...mapState(['userInfo'])
  },
  methods:{
  	change(){
  		//console.log(this.userInfo)
  		if(!this.userInfo.userID){
  			this.$router.push('login')
  		}else{
  			this.$router.push('mine')
  		}
  	}
  }
}
</script>
<style scoped lang="scss">
  .app-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100000;
    background: #ffffff;
    display: flex;
    height: 0.46rem;
    justify-content: space-between;
    align-items: center;
    color: #999999;
    border-bottom: 1px solid #d1d1d1;
    .img1{
      width: 17px;
      margin-left: 10px;
    }
    .img2{
      width: 1rem;
      height: 0.2rem;
    }
    div{
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
      
    	.divhh{
         margin-top: 6px;
	      img{
	        width: 17px;
	        height: 17px;
	        margin-right: 0.1rem;
	      }
        .img{
          margin-top: -5px;
        }
	    }
    }
    
  }
</style>


