<template>
    <span :style="style"></span>
</template>

<script>
export default {
    name: 'DotIcon',
    props: {
        size: {
            type: Number,
            default: () => (5)
        },
        color: {
            type: String,
            default: () => ('#bbb')
        }
    },
    computed: {
        style() {
            return {
                'width': this.size + 'px',
                'height': this.size + 'px',
                'background-color': this.color,
                'border-radius': '50%',
                'display': 'inline-block',
                'top': -1 * this.size + 'px'

            }
        }
    }
}
</script>

