<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ChatScreen msg="Welcome to Your Vue.js App"/>
</template>

<script>
import ChatScreen from './components/ChatScreen.vue'

export default {
  name: 'App',
  components: {
    ChatScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
