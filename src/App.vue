<template>
  <div id="app">
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

#app {
  text-align: center;
}
a{
	text-decoration: none;
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	-webkit-user-select: none;
	-moz-user-focus: none;
	-moz-user-select: none;
}
</style>
