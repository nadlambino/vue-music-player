<template>
    <div class="container player-list">
        <ul>
            <list-item 
                v-for="(list, index) in lists" 
                :key="index" 
                :list_id="index"
                :list="list" 
                :playing="index === playing_id"
                @changeMusic="changeMusic"
            />
        </ul>
    </div>
</template>

<script>
import { MUSIC_LIST } from './../../data/music-list';
import ListItem from './player-list/ListItem.vue';

export default {
    name: 'PlayerList',
    components: { ListItem },
    data() {
        return {
            lists: [],
            playing_id: 0
        }
    },
    beforeMount() {
        this.lists = MUSIC_LIST;
    },
    methods: {
        changeMusic(list_id) {
            this.playing_id = list_id;
        }
    }
}
</script>

<style scoped lang="scss">
.player-list {
    width: 40%;
    height: 75vh;
    margin-left: 0;
    overflow-y: scroll;
}

ul {
    list-style-type: none;
    padding-left: 0;
}
</style>