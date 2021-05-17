<template>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Count",
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style>
button {
  margin-top: 10px;
}
</style>