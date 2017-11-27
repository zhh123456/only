<template>
    <header class="app-header">
     
         <div class="info-box">
            <div class="left" @click="isNavShow=!isNavShow">
                <span><icon name="bars"></icon></span>
                <span>{{title}}</span>
            </div>
            <div class="right">
            
                <router-link :to="{name:'mine'}"><icon name="user-o"></icon></router-link>
                <router-link to="position">北京</router-link>
            </div>
        </div>
        
        
        <transition enter-active-class="fast-animate fadeIn" leave-active-class="fast-animate fadeOut">
        <div class="mark" @click="change()" v-if="isNavShow"></div>
        </transition>
        <transition enter-active-class="fast-animate slideInLeft" leave-active-class="fast-animate slideOutLeft">
        <div class="nav" v-if="isNavShow">
            <nav>
                <ul>
                    <li class="nav-item" v-for="(nav,i) in navs" :key="i"><a @click="change(nav.path)">{{nav.title}}<icon name="angle-right"></icon></a></li>
                </ul>
            </nav>     
        </div> 
        </transition>
    </header>
  
</template>

<script>
export default {
  name:"AppHeader",
  data(){
      return{
          isNavShow:false,
          navs:[
              {title:"首页",path:'/'},
              {title:"影片",path:'/movie'},
              {title:"影院",path:'/'},
              {title:"商城",path:'/'},
              {title:"我的",path:'/mine'},
              {title:"卖座卡",path:'/'}
          ]
      }
  },
  computed:{
      title(){
          switch(this.$route.name){
              case 'main':return '首页';breake;
              case 'movie':return '卖座电影';breake;
              case 'position':return '选择城市';breake;
              case 'mine':return '我的';breake;
              default:return "卖座";breake;
          }
      }
  },
  methods:{
      change(path){
          this.isNavShow=false
          this.$router.push(path)
      }
  }
//   mounted(){
//       let that = this
//       this.$router.beforeEach((to,from,next)=>{
//           console.log("change")
//           that.isNavShow=false
//           next()
//       })
//   }
}
</script>

<style scoped lang="scss">
.fast-animate{
    animation-duration: 0.3s;
}
.app-header{
    height: 50px;
    background: #282822;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background: #282822;
    .info-box{
        width: 100%;
        height: 50px;
        background: #282822;
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 999;
    }
    .left,.right{
        height: 100%;
        display: flex;
        position: relative;
        z-index: 999;
        span:first-child{
            width: 0.48rem;
            height: 50px;
            text-align: center;
            line-height: 50px;
        }
        span,a:last-child{
            padding: 0 0.14rem;
            line-height: 50px;
            color: #efefef;
        }
    }
    .right{
        flex-direction: row-reverse;
       span:last-child{
           color: #999;
       }
    }

    .mark,.nav{
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 997;
    }
    .nav{
        position: absolute;
        background: #282828;
        width: 2.65rem;
        z-index: 998;
        a{
            display: block;
            height: 50px;
            padding: 0 0.16rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    
}
</style>


