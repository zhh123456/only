<template>
   <div class="app-list">
   	  <header class="app-header">
	  	<p>
	    	更多
	  	</p>
	    <img class="img2" src="../../assets/logo-title.png"/>
	    <div>
	    	<router-link class="divhh" :to="{name:'search'}">
	      	<img src="../../assets/indexSearch.png"/>
	      </router-link>
	      <div @click="change">
	      	返回
	      </div>
	    </div>
	  </header>
       <img src="http://m.only.cn/mvc/images/list_banner.jpg" class="banner"/>
       <div class="list">
           <div class="list-nav">
                   <a href="#" class="active">人气</a>  
                   <a href="#">价格</a>                   
                   <a href="#">销量</a>                   
                   <a href="#">新品</a>                                                       
           </div>
           <div class="list-content">
               <div class="list-item"  v-for="(list,i) in lists" :key="i" >
                   <img class="pic" :src="'http://cdn.bestseller.com.cn'+list.gscMaincolPath" @click="toDetail(list.goodsCode)"/>
                   <p>{{list.goodsName}}</p>
                   <span>￥{{list.discountPrice}}</span> 
                   <p @click="addGood({goodid:list.goodsCode,name:list.goodsName,price:list.discountPrice,img:list.gscMaincolPath})" class="list-car"> 
                       <img class="car" src="http://m.only.cn/mvc/goodsList/css/myImg/list_car.png" />
                    </p>
               </div>
           </div>        
       </div>
   </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'AppList',
  data(){
      return {
          lists:[]
      }
  },
  computed:{
  	...mapState(['userInfo'])
  },
  methods:{
      getList(){
          let that=this
          axios.get("/only/sdk11089/25052.F0MVP00N95U2ET3JBCK2P9F4PNHLBLA815106492173970.22992686973884702.420145118/onlyH5_goods/goodsList").then((res)=>{
              res.data.data.forEach((item,i)=>{
                  if(i>=0&&i<10){
                   that.lists.push(res.data.data[i])                       
                  }
              })
              //console.log(res.data.data)
          })
      },
      toDetail(id){

        this.$router.replace({name:'detail',params:{id}})
        // / console.log(id)
      },
      change(){
  			this.$router.go(-1)
  	  },
  	  ...mapMutations(['addGood'])
  },
  mounted () {
      this.getList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app-list{
   overflow: scroll;
   height:100vh;
   padding-top: 0.46rem;
}
.banner{
    height:1.4rem;
    width:100%;
}
.list-nav{
    margin-top:3px;
    display:flex;
    justify-content:space-around;
    border:1px solid #000;
    width:100%;
    height:0.4rem;
    a{
         display:flex;
         padding: 0.05rem 0;         
         justify-content:center;
         align-items:center;
          width:25%;
          height:100%;
         border-right:1px solid #000;
          
    }
    .active{
        background:#000;
        color:#fff;
    }
}
.list-content{
         display:flex;
         justify-content:space-between;
         flex-wrap:wrap;
         padding:10px;
         .list-item{
           position:relative; 
           width:1.7rem; 
           z-index:100;   
             .pic{
                    width:1.7rem;
                    height:3.3rem;
                }
                p{
                        width:1.7rem;
                        padding: 0 0.2rem;;
                        text-align:center;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-size:12px;
                        color:#000;
                }
                span{
                        padding:5px 0;
                        width:100%;       
                        display:flex;       
                        justify-content:center;
                        align-items:center;
                         font-size:12px;
                        color:#000;
                }
               .car{
                   position:absolute;
                   right:0.1rem;
                   bottom:1rem;
                   width:0.5rem;
                   height:0.5rem;
                   z-index: 100000;
               }
         }
  
}
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
    color: #000000;
    padding: 0 10px;
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