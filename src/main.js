import { createApp } from 'vue'
import App from './App.vue'
// import { GoogleGenerativeAI } from '@google/generative-ai'

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(process.env.VUE_APP_GOOGLE_GEMINI_API_KEY);

// // ...

// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// const prompt = "Info about the song The River by Good Charlotte and A7x"

// const result = await model.generateContent(prompt);
// const response = await result.response;
// const text = response.text();
// console.log(text);

createApp(App).mount('#app')
