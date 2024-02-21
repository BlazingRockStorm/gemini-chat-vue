<template>
  <v-sheet class="mx-auto mt-1 container" elevation="4" max-width="85%">
    <ChatMessage v-for="(message, index) in messages" :key="index" :msg="message" />
  </v-sheet>
  <v-sheet class="mx-auto mt-1 container pa-5" elevation="4" max-width="85%" height="auto">
    <div class="d-flex">
      <v-textarea label="prompt" variant="underlined" class="me-5" v-model="message"></v-textarea>
      <v-btn @click="userInput" icon="mdi-send" class="align-self-center"></v-btn>
    </div>
  </v-sheet>
</template>

<script>
import ChatMessage from './ChatMessage.vue'
import { reactive, ref } from 'vue'

export default {
  name: 'ChatScreen',
  components: {
    ChatMessage
  },
  setup() {
    const message = ref(null)
    const messages = reactive([])

    const userInput = () => {
      messages.push({
        role: 'user',
        content: message.value
      })
      message.value = null
      chat(messages)
    }

    const chat = async (msgs) => {
      messages.push({
        role: 'assistant',
        content: 'test' + msgs
      })


    }

    return { userInput, message, messages }
  },
}
</script>

<style scoped>
.container {
  max-height: 75hv;
  overflow-y: auto;
  flex-direction: column;
}
</style>