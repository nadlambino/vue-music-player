<template>
    <main class="flex">
        <player-view />
        <player-list />
    </main>
</template>

<script>
import PlayerList from './music-player/PlayerList.vue'
import PlayerView from './music-player/PlayerView.vue'
export default {
	components: { PlayerView, PlayerList },
    name: 'AppBody'
}
</script>

<style scoped>
</style>