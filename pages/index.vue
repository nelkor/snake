<script setup lang="ts">
import { GameCreation, InvitationToPlay, usePlayerState } from '@/main-page'

const playerState = usePlayerState()

await playerState.fetchData()
</script>

<template>
  <InvitationToPlay v-if="playerState.gameId" />
  <GameCreation v-else />
</template>
