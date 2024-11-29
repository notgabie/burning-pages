<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MessageCard',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
    <div class="w-full h-28 border rounded-md">
      <p>Message</p>
        <p>{{ message }}</p>
    </div>
</template>
