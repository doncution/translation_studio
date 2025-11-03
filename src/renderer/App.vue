<template>
  <div class="ui container" style="margin-top: 2rem">
    <h1 class="ui header">Translation Studio</h1>
    <div class="ui segment">
      <form class="ui form">
        <div class="field">
          <label for="sourceText">Source Text</label>
          <textarea
            id="sourceText"
            rows="6"
            v-model="sourceText"
            placeholder="Enter the text to translate"
          ></textarea>
        </div>
        <div class="field">
          <label for="translationText">Translation</label>
          <textarea
            id="translationText"
            rows="6"
            v-model="translationText"
            placeholder="Enter the translated text"
          ></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const sourceText = ref<string>('');
const translationText = ref<string>('');
</script>
