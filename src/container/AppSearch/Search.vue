<template>
  <div class="search">
       <mt-search
      v-model="value"
      cancel-text="返回"
      placeholder="输入商品名称或款号">
    </mt-search>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      value:""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .searchbox{
    border-radius:20px;
  }
  .search{
    height:0.4rem;
  }
</style>
