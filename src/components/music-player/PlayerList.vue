<template>
	<div class="player-list flex-auto mt-2 w-3/12">
		<ul>
			<list-item
				v-for="(list, index) in lists"
				:key="index"
				:list_id="index"
				:list="list"
				:playing="index === musicListStore.playing_id"
				@changeMusic="changeMusic"
			/>
		</ul>
	</div>
</template>

<script lang="ts">
import { musicListStore } from './../../stores/music-list-store';
import ListItem from './player-list/ListItem.vue';

export default {
	name: 'PlayerList',
	components: { ListItem },
	data() {
		return {
			musicListStore: musicListStore(),
		};
	},
	beforeMount() {
		this.lists = this.musicListStore.lists;
	},
	methods: {
		changeMusic(list_id: number) {
			this.musicListStore.setPlayingId(list_id);
		},
	},
};
</script>

<style scoped lang="scss">
.player-list {
	height: 75vh;
	margin-left: 0;
	overflow-y: scroll;
}

ul {
	list-style-type: none;
	padding-left: 0;
}
</style>
