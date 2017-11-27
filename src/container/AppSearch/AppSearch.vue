<template>
   <div class="app-search">
     <search></search>
     <app-search-content></app-search-content>
   </div>
</template>

<script>
import Search from './Search'
import AppSearchContent from './AppSearchContent'
export default {
  name: 'AppSearch',
  components:{Search,AppSearchContent}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
