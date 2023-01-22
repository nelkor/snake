<script setup lang="ts">
const emit = defineEmits(['delete-game'])
const deleteGame = () => emit('delete-game')
</script>

<template>
  <div>Приглашение</div>
  <button @click="deleteGame">Отменить игру</button>
</template>
