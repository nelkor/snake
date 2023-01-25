<script setup lang="ts">
import { useUser } from '@/user'
import { usePage, AppGame, AppLobby } from '@/page'

const user = useUser()

await user.fetchData(useRoute().path)

const page = usePage()
</script>

<template>
  <AppGame v-if="page.gameId" />
  <AppLobby v-else />
</template>
