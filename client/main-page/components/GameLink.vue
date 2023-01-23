<script setup lang="ts">
const props = defineProps<{ text: string }>()

const copyLink = () => {
  navigator.clipboard.writeText(props.text)
}
</script>

<template>
  <button class="game-link" @click="copyLink">{{ text }}</button>
</template>

<style lang="scss" scoped>
@import '@/general/style/colors.scss';

.game-link {
  border: none;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  color: $primary;
  background-color: $light;

  &:hover {
    color: $active;
  }
}
</style>
