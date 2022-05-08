<template>
    <li :class="{'playing-container' : playing}" @click="play(list_id)">
        <div class="list-main-container" :class="{'playing' : playing}">
            <span class="title">{{list.title}}</span>
        </div>
        <div class="list-sub-container">
            <span class="artist">{{list.artist}}</span>
            <dot-icon :size="3" />
            <span class="album">{{list.album}}</span>
            <dot-icon :size="3" />
            <span class="released">{{list.released}}</span>
        </div>
    </li>
</template>

<script>
import DotIcon from "../../general/DotIcon.vue";

export default {
    name: 'ListItem',
    components: {
        DotIcon
    },
    props : {
        list : {
            type: Object,
            required: true
        },
        list_id : {
            type: Number,
            required: true
        },
        playing: {
            type: Boolean,
            default: () => (false)
        }
    },
    methods : {
        play(list_id) {
            this.$emit('changeMusic', list_id);
        }
    }
}
</script>

<style scoped lang="scss">
li {
    margin: 5px;
    margin-bottom: 7px;
    padding: 10px;
    background-color: var(--vt-c-black-soft);
    vertical-align: middle;

    .list-main-container {
        font-size: 12pt;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis;

        .title {
            color: var(--vt-c-text-green-2);
        }
    }

    .list-sub-container {
        font-size: 10pt;
        width: 100%;
        margin-top: 7px;

        span {
            margin-right: 10px;
        }
    }

    &:hover {
        cursor: pointer;
        background-color: var(--vt-c-black-mute);
    }

    &:first-child {
        margin-top: 0;
    }
    
    &:last-child {
        margin-bottom: 0;
    }
}

.playing-container {
    background-color: var(--vt-c-black-mute);
    border-bottom: 2px solid var(--vt-c-text-green-2);
}

.playing {
    span {
        color: var(--vt-c-text-green-1) !important;
    }
}
</style>
