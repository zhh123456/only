<template>
  <div class="header-imgs">
     <div v-for="img in imgs" :key="img.id" class="imgs">
     	<router-link :to="{name:'list'}">
     	<img class="inner-img" :src="img.url"/>
     	<span>{{img.msg}}</span>
     	</router-link>
     </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:"AppImgs",
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
                  if(i>7&&i<12){
                      that.imgs.push(res.data[i])
                  }
              })
          })
      }
      
  },
  created(){
      this.getImgs()
  }
}
</script>
<style scoped lang="scss">
    .header-imgs{
    	position: relative;
    	padding:0 2%;
       .imgs{
       		width: 48%;
       	img{
       		width: 100%;
	      	
	       	display: block;
       	}
       	
       	span{
       		width: 1.69rem;
       		font-size: 0.16rem;
			    text-align: center;
			    padding:4% 2%;
			    display: block;
       	}
       }
       .imgs:nth-child(4){
       	.inner-img{
       		height: 4.76rem;
       		display: block;
       	}
       	position: absolute;
       	right: 2%;
       	top: 0;
       	
       }
    }
</style>

