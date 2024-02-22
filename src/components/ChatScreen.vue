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
import { GoogleGenerativeAI } from '@google/generative-ai'

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.VUE_APP_GOOGLE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

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
        parts: message.value
      })
      message.value = null
      chat(messages)
    }

    // https://ai.google.dev/tutorials/node_quickstart?hl=vi#multi-turn-conversations-chat
    const chat = async (msgs) => {
      console.log(msgs)
      const chat = model.startChat({
        history: msgs,
        generationConfig: {
          maxOutputTokens: 100,
        },
      });
      console.log(chat);
      // const chatCompletion = await chat.sendMessage('Linkin Park');
      // const response = await chatCompletion.response;
      // const text = response.text();
      // console.log(chatCompletion);

      messages.push({
        role: 'assistant',
        parts: 'test'
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