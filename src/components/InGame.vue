<template>
    <CardRow>
        <Card v-for="card in hand" v-bind:onClick="clickCard" v-bind:value="card.value" v-bind:colour="card.colour.toLowerCase()"
            v-bind:sel="hand.indexOf(card) === selectedCardIndex" v-bind:key="idOf(card)" v-bind:idz="hand.indexOf(card)" />
    </CardRow>

    <!-- Show [waiting for opponent] message -->
    <div v-if="selectedCardIndex !== -1">
        <h2>Waiting for opponent...</h2>
        <Octicon name="sync" v-bind:size="72" classList="loading-icon" />
    </div>

    <h3 v-if="lastRoundWinner !== ''">
        Last winner: {{ lastRoundWinner }}
    </h3>
</template>

<script>
import CardRow from './CardRow.vue';
import Card from './Card.vue';
import Octicon from './Octicon.vue';
import { state, cols } from '../state/appstate.js'

export default {
    data() {
        return state;
    },
    methods: {
        idOf(card) {
            const r = cols.indexOf(card.colour.toLowerCase()) * 100 + card.value;
            return r;
        },
        clickCard(card) {
            this.ws.send(JSON.stringify({
                type: "play_card",
                card_num: card.idx,
            }))
        }
    },
    components: {
        Card,
        CardRow,
        Octicon,
    },
}
</script>
