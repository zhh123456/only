<template>
   <div class="app-search-content" >
       <div class="left">
           <span @click="entry=list.list,change()"  v-for="list in lists" :key="list.classifyId"  :classifyId="list.classifyId">
           	{{list.classifyName}}
                <div class="right">
                    <ul>
                        <li v-for="listing in entry" :key="listing.classifyId" :classifyId="listing.classifyId">{{listing.classifyName}}</li>
                    </ul>
                 </div>
           </span>
       </div>
   </div>
</template>
<script>
import axios from 'axios'
export default {
   name: 'AppSearchContent',
   data(){
         return{
               lists:[],
               entry:[]
         }
      },
   methods:{
       getlist(){
       let that=this           
          axios.get("/only/classify/h5/ONLY/h5_list.json").then((res)=>{
              //console.log(res.data)
              that.lists=res.data.data
              //console.log(that.lists)
          })
       },
       change(){
          
       }
   },
   mounted(){
       this.getlist()
   }
}
</script>

<style lang="scss" scoped>
@import '../../styles/_mixin.scss';
;
 .app-search-content{
     background:#f1f1f1;
     margin-top: 4px;
       @include clearfix;
     position: relative;
     .left{
             width: 35%;
             overflow-y: auto;
             overflow: scroll;
             height: 6.3rem;
             float:left;
         span{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
                padding: 1em 10%;
                text-align: center;
                font-size: 15px;
                float: left;
         }
     }
     .right{
         position: absolute;
         top:0;
         width:65%;
         margin-left:35%;
        
         li{
                 background-color: #fff;
                    padding: 0.9em 0;
                    margin-bottom: 0.03rem;
                    padding-left: 7%;
         }
     }
     .active{
         background: #fff;

     }
 }
</style>
