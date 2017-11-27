<template>
  <div class="app-main-movie-box">
    <AppMainMovieItem :movie="movie" v-for="movie in movies" :key="movie.id" :type="type"></AppMainMovieItem>
    <button class="more-btn">更多{{type}}电影</button>
  </div>
</template>
<script>
import AppMainMovieItem from './AppMainMovieItem'
import axios from 'axios'
export default {
  name:"AppMainMovieBox",
  props:['url','type'],
  data(){
    return{
      movies:[]
    }
  },
  methods:{
    getMovies(){
      let that = this
      axios.get(this.url,{params:{__t:Date.now()}})
      .then((res)=>{
       // console.log(res.data.data.films)
        that.movies = res.data.data.films
      })
    }
  },
  created(){
    this.getMovies()
  },
  components:{AppMainMovieItem}
}
</script>
<style scoped lang="scss">
  .app-main-movie-box{
    padding: 0 15px;
    .more-btn{
      display: block;
      width: 1.6rem;
      height: 0.3rem;
      border: 1px solid #aaa;
      border-radius: 15px;
      margin: 10px auto 30px;
      text-align: center;
      line-height: 0.3rem;
      font-size: 12px;
      color: #616161;
      cursor: pointer;
      outline: none;
    }
  }
</style>

