<template>
  <div class="content">
    <v-row class="d-flex overflow-auto">
      <v-col cols="12" sm="2" class="align-start">
        <v-sheet class="ma-2 pa-2">
          <v-btn :append-icon="msg.role === 'user' ? 'mdi-account' : 'mdi-model'">{{ msg.role }}</v-btn>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="10" class="align-self-center">
        <v-sheet class="ma-2 pa-2">
          <pre v-html="msg.parts" class="preWrap"></pre>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'ChatMessage',
  props: ['msg']
}
</script>

<style scoped>
.content {
  flex: 1;
}

.preWrap {
  white-space: pre-wrap;
}
</style>
