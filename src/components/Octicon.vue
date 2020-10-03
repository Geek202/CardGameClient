<template>
    <span v-bind:class="classList" v-html="icon()"></span>
</template>

<script>
import octicons from '@primer/octicons';

export default {
    props: {
        name: String,
        size: Number,
        classList: String,
    },
    methods: {
        icon() {
            return octicons[this.name].toSVG({
                width: this.size,
                height: this.size,
                class: this.classList,
            });
        }
    }
}
</script>
