<script setup lang="ts">
import { useUser } from '@/user'
import { GameField, GameWaiting, GameView } from '@/game'

const user = useUser()

const userGame = computed(() => user.state?.gameId || '')
const userRole = computed(() => user.state?.role || 0)
</script>

<template>
  <template v-if="userGame">
    <GameField v-if="userRole" />
    <GameWaiting v-else />
  </template>

  <GameView v-else />
</template>
