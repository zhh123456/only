<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader/AppHeader'

export default {
  name: 'app',
  data(){
    return{}
  },
  components:{
    AppHeader
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';

</style>
