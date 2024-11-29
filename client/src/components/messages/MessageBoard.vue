<script lang="ts">
import { onMounted, ref } from 'vue';
import MessageCard from './MessageCard.vue';
import MessageInput from './MessageInput.vue';
import axios from 'axios';

export default {
  name: 'MessageList',
  components: {
    MessageCard,
    MessageInput,
  },
  setup() {
    const messageList = ref<string[]>([]);

    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:3000/messages');
        messageList.value = response.data;
      } catch (err) {
        console.error('Error fetching messages:', err);
      }
    }

    onMounted(() => {
      fetchMessages();
    });
  }
}
</script>

<template>

    <div class="w-[88%] h-screen flex flex-col gap-3 overflow-x-scroll">
        <MessageCard v-for="message in messageList" :key="message" :message="message" />
        <MessageInput />
    </div>

</template>
