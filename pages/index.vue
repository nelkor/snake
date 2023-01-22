<script setup lang="ts">
import {
  GameCreation,
  InvitationToPlay,
  usePlayerState,
  requestDeleteGame,
  requestNewGame,
} from '@/main-page'

const { gameId, createGame, deleteGame } = await usePlayerState()

const onNewGame = () => requestNewGame().then(createGame)
const onDeleteGame = () => requestDeleteGame().then(deleteGame)
</script>

<template>
  <InvitationToPlay v-if="gameId" @delete-game="onDeleteGame" />
  <GameCreation v-else @new-game="onNewGame" />
</template>
