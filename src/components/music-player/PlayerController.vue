<template>
	<div class="flex justify-center">
		<div class="controller-container">
			<button>Previous</button>
		</div>
		<div class="controller-container progress-bar-container text-center">
			<span class="controller-title">
				{{ musicListStore.playingMusic.title }}
			</span>
			<div class="progress-bar">
				<div class="progress-bar-body"></div>
			</div>
		</div>
		<div class="controller-container">
			<button>Next</button>
		</div>
	</div>
</template>

<script lang="ts">
import { musicListStore } from '../../stores/music-list-store';

export default {
	name: 'PlayerController',
	data() {
		return {
			musicListStore: musicListStore(),
		};
	},
};
</script>

<style scoped lang="scss">
.controller-container {
	height: 100%;
	padding: 5px;
	margin: auto 5px;
	height: 50px;
}
.progress-bar-container {
	width: 50%;

	.controller-title {
		color: var(--vt-c-text-green-1);
		font-weight: bolder;
	}

	.progress-bar {
		width: 100%;
		height: 10px;
		background-color: var(--color-background);
		border-radius: 10px;
		padding: 2px;

		.progress-bar-body {
			width: 64%;
			height: 6px;
			border-radius: 10px;
			background-color: var(--vt-c-text-green-1);
		}
	}
}
</style>
