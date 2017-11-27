<template>
  <div class="header-imgs-bhh">
     <div v-for="img in imgs" :key="img.id" class="imgs" @click="toDetail(img.id)">
     	<img class="inner-img" :src="img.url"/>
     </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:"AppImgsBhh",
  props:['num1','num2'],
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
                  if(i>parseInt(that.num1)&&i<parseInt(that.num2)){
                      that.imgs.push(res.data[i])
                  }
              })
          })
      },
      toDetail(id){
      	this.$router.push({name:'detail',params:{id}})
      }
  },
  created(){
      this.getImgs()
  }
}
</script>
<style scoped lang="scss">
    .header-imgs-bhh{
    	width: 100%;
    	display: flex;
    	justify-content: space-between;
    	flex-wrap: wrap;
    	box-sizing: border-box;
    	.imgs:nth-child(1){
    		width: 100%;
    	}
       .imgs{
       		width: 48%;
       	img{
       		width: 100%;
	       	display: block;
       	}
      
    	}
    }
</style>

