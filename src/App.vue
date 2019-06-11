<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import mail from './components/mail.vue'

export default {
  name: 'app',
  components: {
    mail
  }
}
</script>

<style>
#app {
	max-width: 750px;
	margin:0 auto;
  height: 100%;
}
</style>
