<template>
    <h2>In the lobby</h2>
    <p v-if="playerCount < 2">Waiting for players...</p>
    <div v-else>
        <p>Waiting for game start...</p>
        <button class="button" v-if="username === gameHost" @click="startGame">Start game!</button>
    </div>
</template>

<script>
import CardRow from './CardRow.vue';
import Card from './Card.vue';
import { state, cols } from '../state/appstate.js';

export default {
    name: "Lobby",
    data() {
        return state;
    },
    methods: {
        startGame(e) {
            this.ws.send(JSON.stringify({
                type: "start_game",
            }));
        },
    },
    components: {
        Card,
        CardRow,
    },
}
</script>
