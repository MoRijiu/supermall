<template>
<div id="vue">
  <router-view></router-view>
  <main-tabbar></main-tabbar>
</div>
</template>

<script>
import MainTabbar from 'components/content/tabbar/MainTabbar'

export default {
  name: 'App',
  components: {
    MainTabbar,
  }
}
</script>

<style>

@import 'assets/css/base.css';
</style>
