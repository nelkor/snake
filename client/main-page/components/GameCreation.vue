<script setup lang="ts">
const emit = defineEmits(['new-game'])
const createGame = () => emit('new-game')
</script>

<template>
  <div>Создание</div>
  <button @click="createGame">Создать игру</button>
</template>
