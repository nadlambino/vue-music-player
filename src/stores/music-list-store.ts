import { defineStore } from 'pinia';
import { MUSIC_LIST } from './../data/music-list';

export const musicListStore = defineStore('musicListStore', {
    state() {
        return {
            lists: MUSIC_LIST,
            playing_id : 0
        }
    },
    getters : {
        playingMusic(state) {
            return this.lists[this.playing_id];
        }
    },
    actions : {
        setPlayingId(playing_id : number) {
            this.playing_id = playing_id;
        }
    }
});
