<template>
  <v-sheet class="mx-auto mt-1 container" elevation="4" max-width="85%">
    <ChatMessage v-for="(message, index) in messages" :key="index" :msg="message" />
  </v-sheet>
  <v-sheet class="mx-auto mt-1 container pa-5" elevation="4" max-width="85%" height="auto">
    <div class="d-flex">
      <v-textarea label="prompt" variant="underlined" class="me-5" v-model="inputMessage"></v-textarea>
      <v-btn @click="sendMessage" icon="mdi-send" class="align-self-center"></v-btn>
    </div>
  </v-sheet>
</template>
  
<script>
import ChatMessage from './ChatMessage.vue'
import { GoogleGenerativeAI } from '@google/generative-ai'

export default {
  name: 'ChatScreen',
  components: {
    ChatMessage
  },

  data() {
    const genAI = new GoogleGenerativeAI(process.env.VUE_APP_GOOGLE_GEMINI_API_KEY)

    return {
      genAI: genAI,
      model: null,
      chat: null,
      messages: [],
      inputMessage: ''
    }
  },


  mounted() {
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' })
    this.chat = this.model.startChat()
    // To train model
    // this.chat = this.model.startChat({
    //   history: [
    //     {
    //       role: "user",
    //       parts: "Who is Kurrock?",
    //     },
    //     {
    //       role: "model",
    //       parts: "This is a Vietnamese/Japanese rock band based in Tokyo, Japan. They released a new album in June 2023 called VƯỢT (越). You can find their music and more information on their website: https://www.kurrock.net/",
    //     },
    //    ]
    // })
  },

  methods: {
    async sendMessage() {
      const result = await this.chat.sendMessage(this.inputMessage)
      const response = await result.response;
      const text = response.text()
      this.messages.push({
        role: 'user',
        parts: this.inputMessage
      })
      this.messages.push({ role: 'model', parts: text })
      this.inputMessage = ''

    }
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
