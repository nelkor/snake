<script setup lang="ts">
import { useUser } from '@/user'

import { createGame } from '../api/create-game'

const user = useUser()
const isRequestSent = ref(false)

const onCreateClicked = async () => {
  isRequestSent.value = true

  const userState = await createGame()

  isRequestSent.value = false

  user.setState(userState)
}
</script>

<template>
  <h1>Главная</h1>

  <button :disabled="isRequestSent" @click="onCreateClicked">
    Создать игру
  </button>
</template>
