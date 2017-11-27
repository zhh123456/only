<template>
  <div class="app-footer">
      <p class="p1">
          <img src="http://m.only.cn/mvc/images/hotline.png">
          <span>400-862-8888</span>
      </p>
      <p class="p2">
          <img src="http://m.only.cn/mvc/images/diright.png">
      </p>
      <p class="p3">
          <img src="http://m.only.cn/mvc/images/copyright.jpg">
      </p>
  </div>
</template>
<script>
export default {
  name:'AppFooter'
}
</script>
<style scoped lang="scss">
    .app-footer{
        text-align: center;
        p{
            margin: 0;
            padding: 0;
        }
        .p1{
           position: relative;
            img{
                position: absolute;
                top: 0px;
                left: 23%;
                width:0.3rem;
                height: 0.3rem;
                display: inline-block;
            }
            span{
                font-size: 0.2rem;
                display: inline-block;
            }
        }
        .p2{
            img{
                width: 0.78rem;
            }
            
        }
        .p3{
            img{
                width: 2.14rem;
            }
            
        }
    }
</style>

