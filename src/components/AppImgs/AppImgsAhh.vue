<template>
  <router-link :to="{name:'list'}" class="header-imgs">
     <div v-for="img in imgs" :key="img.id" class="imgs">
     	<img class="inner-img" :src="img.url"/>
     	<span>{{img.msg}}</span>
     </div>
  </router-link>
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
                  if(i>11&&i<20){
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
    	width: 100%;
    	padding: 0 2%;
    	display: flex;
    	justify-content: space-between;
    	flex-wrap: wrap;
    	box-sizing: border-box;
       .imgs{
       		width: 48%;
       	img{
       		width: 100%;
	      	
	       	display: block;
       	}
       	
       	span{
       		width: 1.69rem;
       		font-size: 0.2rem;
			    text-align: center;
			    padding:4% 2%;
			    display: block;
			    font-weight: bold;
			    color: #000;
       	}
       }
      
    }
</style>

