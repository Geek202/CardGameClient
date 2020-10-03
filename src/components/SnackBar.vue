<template>
    <transition name="slide-up" @after-enter="afterShow">
        <div v-if="showSnackBar" class="snackbar" @click="hide">
            <Octicon name="alert" v-bind:size="20" classList="alert-icon" />
            {{ snackBarMessage }}
        </div>
    </transition>
</template>

<script>
import { state } from '../state/appstate.js';
import Octicon from './Octicon.vue'

export default {
    methods: {
        hide() {
            if (this.showSnackBar) {
                this.snackBarMessage = "";
                this.showSnackBar = false;
            }
        },
        afterShow() {
            window.setTimeout(this.hide, 2000);
        }
    },

    data() {
        return state;
    },
    components: {
        Octicon,
    }
}
</script>
