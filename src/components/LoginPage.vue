<template>
    <div v-if="!connecting">
        <input v-model="username" placeholder="Enter username..." class="textbox">
        <br>
        <button @click="login" class="button">Login!</button>
    </div>
    <div v-else>
        <h2>Connecting...</h2>
        <Octicon name="sync" v-bind:size="72" classList="loading-icon" />
    </div>
</template>

<script>
import { state } from '../state/appstate.js'
import { beginConnection } from '../socket/websocket.js';
import Octicon from './Octicon.vue';

export default {
    name: 'LoginPage',
    data() {
        return state;
    },
    methods: {
        login() {
            if (this.username !== "") {
                beginConnection(this);
            } else {
                this.snackBarMessage = "Enter a username!";
                this.showSnackBar = true;
            }
        }
    },
    components: {
        Octicon,
    }
}
</script>
