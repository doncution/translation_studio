<template>
  <div class="ui container" style="margin-top: 2rem">
    <h1 class="ui header">Translation Studio</h1>
    <p>The Electron environment is running with the following runtime versions:</p>
    <div class="ui segment">
      <pre style="overflow-x: auto;">{{ formattedRuntimeInfo }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { RuntimeInfo } from '../common/runtime-info';

const props = defineProps<{
  readonly runtimeInfo: RuntimeInfo;
}>();

const formattedRuntimeInfo = computed(() =>
  JSON.stringify(props.runtimeInfo, undefined, 2),
);
</script>
