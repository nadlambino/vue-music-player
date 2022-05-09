<template>
	<footer>
		<player-controller />
	</footer>
</template>

<script lang="ts">
import PlayerController from './music-player/PlayerController.vue';

export default {
	name: 'AppFooter',
	components: {
		PlayerController,
	},
};
</script>

<style scoped>
footer {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 10px;
	height: 11vh;
	background-color: var(--vt-c-black-soft);
}
</style>
