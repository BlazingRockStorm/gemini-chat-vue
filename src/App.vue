<template>
  <main>
    <ChatScreen2 />
  </main>
</template>

<script>
import ChatScreen2 from './components/ChatScreen2.vue'

export default {
  name: 'App',
  components: {
    ChatScreen2
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
