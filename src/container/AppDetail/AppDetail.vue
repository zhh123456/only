<!--<template>
	<div class="app-detail">
		<img :src="img.url"/>
		
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		name:'AppDetail',
		data(){
			return{
				img:{}
			}
		},
		methods:{
			getImgs(){
				let that = this
				let num = this.$route.params.id
				axios.get('/static/img.json?'+num).then((res)=>{
					that.img=res.data[num-1]
				})
			}
		},
		created(){
			this.getImgs()
		}
	}
</script>
<style scoped lang="scss">
	
</style>-->
	
<template>
    <div class="app-detail">
        <div class="header">
           <div class="left">
               <router-link :to="{name:'list'}">
                <img src="http://m.only.cn/mvc/goodsDetails_content/css/myImg/go-back.png"  />                   
               </router-link>
            </div>
            <div class="center">
            <img src="http://m.only.cn/css/res/logo-title_03.png" class="logo"/>              
            </div>
            <div class="right">
            	<router-link :to="{name:'car'}">
                <img src="http://m.only.cn/mvc/goodsDetails_content/css/myImg/indexCollect.png"/>
                </router-link>
                <router-link :to="{name:'search'}">
                 <img src="http://m.only.cn/mvc/goodsDetails_content/css/myImg/indexSearch.png"/>
                  </router-link>
                  <router-link :to="{name:'mine'}">
                  <img src="http://m.only.cn/mvc/goodsDetails_content/css/myImg/indexAccount.png"/>
                  </router-link>
            </div>
        </div>
       
      <div class="datail-content">
           <div class="banner">
             <img :src="'http://cdn.bestseller.com.cn'+lists.gscMaincolPath"/>
          </div>
            <div class="detail-info">
                <p class="name">{{lists.goodsName}}</p>
                <h4>款号{{lists.goodsCode}}</h4>
                <p class="price"><span>￥</span>{{lists.discountPrice}}</p>
                <s>价格￥{{lists.discountPrice}}</s>
        </div>
        <div class="detail-size">
            <ul>
                <li>
                    请选择 颜色分类 尺码
                    <img src="http://m.only.cn/mvc/images/right.png"/>
                </li>
            </ul>
        </div>
        <div class="blank"></div>
        <div class="bodys">
            <img :src="'http://cdn.bestseller.com.cn'+lists.gscMaincolPath" class="intro-img"/>
        </div>
        <div style="font-size:12px;padding-top:0.1rem;border-top:1px solid #ccc;padding: 0.1rem;">
            因不同的计量方法，测量允许1-3cm内误差（CM）
        </div>
        <div class="intro-size">
            <img src="../../assets/1.png"/>
        </div>
    </div>
    <div class="footer">
        <a href="##" class="service">导购专项服务</a>
        <a href="##" class="car" @click="addGood({goodid:lists.goodsCode,name:lists.goodsName,price:lists.discountPrice})">加入购物车</a>
        <a href="##" class="buy">立即购买</a>        
    </div>
 </div>
</template>
<script>
import {mapMutations} from 'vuex'
import axios from 'axios'
    export default {
        name:'AppDetail',
        data(){
           return {
               lists:[]
           }
        },
        methods: {
            getCloths(){
                let that=this;
               axios.get("/only/sdk11089/25052.F0MVP00N95U2ET3JBCK2P9F4PNHLBLA815106492173970.22992686973884702.420145118/onlyH5_goods/goodsList").then((res)=>{
                   that.lists=res.data.data
                   //console.log(that.lists)
                  for(var i=0;i<res.data.data.length;i++){
                      if(res.data.data[i].goodsCode==this.$route.params.id){
                          console.log(res.data.data[i].goodsCode)
                          that.lists=res.data.data[i]
                      }
                  }
               })
               console.log(this.$route.params.id)
            },
            ...mapMutations(['addGood'])
        },
        mounted(){
            this.getCloths()
        }
    }
</script>
<style lang="scss" scoped>
.app-detail{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
    width:100%;
    .datail-content{
         flex:1;
         overflow: scroll;
        height:100vh;
    .banner{
       img{
            width:3.75rem;
            height:3.75rem;
            display:block;
        }
    }
     .detail-info{
         padding:0 0.1rem;
        .name{
                padding:0;
                font-size:16px;
                padding: 1% 0;
            font-weight: normal;
            }
            h4{
            font-weight: normal;
            }
            .price{
                font-size:16px;
                color:#ff5000;
                span{
                    font-size:12px;
                    color:#ff5000;
                }
                
            }

        }
        .detail-size{
                padding:0 0.1rem;            
            ul{
                height:0.4rem;
                border-top:1px solid #ccc;
                border-bottom:1px solid #ccc;
                line-height:0.4rem;
                li{
                    img{
                            float: right;
                            width: 7px;
                            height: 12px;
                            margin-top: 13px;
                    }
                }
            }
        }
        .blank{
            height:0.3rem; 
        }
        .bodys{
              width:3.5rem;
                height:5.5rem;
            .intro-img{
                width:3.5rem;
                height:5.5rem;
                border:0;
            }
        }
    }
    .footer{

        width:100%;
        background:#fff;
        height:0.4rem;
        display:flex;
        border-top:1px solid #000;
         border-bottom:1px solid #000;
        a{
           display:inline-block;
           width:33.3%;
           text-align:center;
           line-height:0.4rem;
        }
        .car{
          background:#000;
          color:#fff;
        }
       .buy{
           background:#d70715;
          color:#fff;
       }
    }
}

.header{
     height:0.48rem;
     width:100%;
     background:#fff;
     display: flex;
     align-items: center;
     justify-content: space-between;
     .left{
         width:40%;
     }
     .center{
         width:40%;
             .logo{
                width:33.3%;         
                width:0.8rem;
                height:0.15rem;
                }
     }
     .right{
         width:20%;
         display: flex;
         justify-content: space-around;
         align-items: center;
         margin-right:0.1rem;
         img{
             width:0.18rem;
             height:0.18rem;
             margin:0 0.05rem;
         }
     }
 }  

</style>
