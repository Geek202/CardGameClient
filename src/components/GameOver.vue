<template>
    <h1>Game Over!</h1>
    <h2 v-if="winner === username">You won!</h2>
    <h2 v-else>Winner: {{ winner }}</h2>
</template>

<script>
import { state } from '../state/appstate.js';

export default {
    data() {
        return state;
    }
}
</script>
