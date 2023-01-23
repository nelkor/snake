<script setup lang="ts">
import { usePlayerState } from '@/main-page'
import { UiButton } from '@/ui'

import GameLink from './GameLink.vue'

const playerState = usePlayerState()

const linkTitle = computed(() => {
  const { host } = process.server ? useRequestHeaders() : location

  return `${host}/${playerState.gameId}`
})
</script>

<template>
  <div class="lobby">
    <div class="text">
      <p>Чтобы пригласить друга, отправьте ему эту ссылку:</p>
      <GameLink :text="linkTitle" />
      <p>С вами сыграет первый, кто перейдёт по этой ссылке.</p>
    </div>

    <div class="button-container">
      <UiButton class="lobby-button" @click="playerState.cancelGame">
        Отменить игру
      </UiButton>
    </div>
  </div>
</template>
