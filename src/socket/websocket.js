export function beginConnection(st) {
    st.ws = new WebSocket("ws://" + st.server + "/ws" + window.encodeURIComponent(st.gameId));
    st.connecting = true;
    st.ws.onerror = (e) => {
        st.snackBarMessage = "Failed to connect!";
        st.showSnackBar = true;
        st.ws = null;
        console.log("websocket error", e);
    };

    st.ws.onclose = (e) => {
        if (!st.connecting) {
            st.snackBarMessage = "Disconnected (code: " + e.code + ", reason: " + e.reason + ")";
            st.showSnackBar = true;
        } else {
            st.connecting = false;
        }
        st.ws = null;
    }

    st.ws.onmessage = (e) => {
        const msg = JSON.parse(e.data);
        switch (msg.type) {
            case "login":
                window.console.log("logged in!", msg);
                st.gameState = "lobby";
                st.gameHost = msg.host;
                st.playerCount = msg.player_count;
                break;

            case "player_sync":
                window.console.log("player sync!", msg);
                st.hand = msg.hand.slice();
                st.selectedCardIndex = msg.played_card;
                break;
            
            case "game_state":
                window.console.log("game state!", msg);
                st.gameState = msg.game_state.toLowerCase();
                st.playerCount = msg.player_count;
                st.gameHost = msg.host;
                break;
            
            case "game_results":
                window.console.log("game results!", msg);
                st.leaderboard = msg.leaderboard.slice().reverse();
                st.winner = st.leaderboard[0];
                break;
            
            case "round_end":
                window.console.log("round ended!", msg);
                st.lastRoundWinner = msg.winner;

            default:
                window.console.log("Unknown data: ", e.data)
                break;
        }
    }
    st.ws.onopen = () => {
        st.ws.send(JSON.stringify({
            type: "login",
            name: st.username,
        }))
        st.connecting = false;
    }
}
