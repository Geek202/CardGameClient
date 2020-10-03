import { reactive } from 'vue'

export const cols = [ "red", "yellow", "black" ];

function all_card_types(len) {
    const ret = [];
    for (var i = 0; i < len; i++) {
        for (var c in cols) {
            ret.push({
                value: i,
                colour: cols[c],
            });
        }
    }
    return ret;
}

export const state = reactive({
    ws: null,
    connecting: false,

    username: "",
    gameId: "",
    server: "devsite.tomthegeek.ml:7070",

    gameState: "",
    gameHost: "",
    playerCount: 0,

    hand: [],
    selectedCardIndex: -1,

    lastRoundWinner: "",

    winner: "",
    leaderboard: [],

    snackBarMessage: "",
    showSnackBar: false,

    vals: all_card_types(10),
})
