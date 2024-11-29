<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const message = ref('')

 const onSubmit = async (event: Event) => {
   event.preventDefault();
   if (!message.value) return;

   try {
    await axios.post('http://localhost:3000/messages', {
      message: message.value,
    });
    message.value = '';
   } catch (err) {
      console.error('Error sending message:', err);
   }

 }

</script>

<template>
  <form @submit="onSubmit">
  <input
    type={text}
    placeholder="Write down your thoughts..."
    class="border-2 border-gray-300 rounded-lg p-2 text-xs"
  />
  <button
    type="submit"
    class="bg-blue-500 text-white rounded-lg p-2 text-xs">Send</button>
  </form>
  </template>
