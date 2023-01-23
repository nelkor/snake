<script setup lang="ts">
import { usePlayerState } from '@/main-page'
import { UiButton } from '@/ui'

const playerState = usePlayerState()
</script>

<template>
  <div class="lobby">
    <div class="text">
      <p>
        Чтобы два игрока сыграли друг с другом, один из них должен создать игру,
        а другой — присоединиться к ней.
      </p>
    </div>

    <div class="button-container">
      <UiButton class="lobby-button" @click="playerState.createGame">
        Создать игру
      </UiButton>
    </div>
  </div>
</template>
