<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Tom_The_Geek's Card Game" /> -->
  <h1>Tom_The_Geek's Card Game</h1>
  <LoginPage v-if="gameState === ''" />
  <Lobby v-else-if="gameState === 'lobby'" />
  <InGame v-else-if="gameState === 'in_game'" />
  <GameOver v-else-if="gameState == 'ended'" />
  <button class="button" v-if="ws != null" @click="abort">{{ btnMsg() }}</button>
  <SnackBar />
  <transition name="slide-up">
    <Copyright v-if="!showSnackBar" />
  </transition>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoginPage from './components/LoginPage.vue'
import Lobby from './components/Lobby.vue'
import SnackBar from './components/SnackBar.vue'
import InGame from './components/InGame.vue'
import GameOver from './components/GameOver.vue'
import Copyright from './components/Copyright.vue'
import { state } from './state/appstate.js'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginPage,
    Lobby,
    SnackBar,
    InGame,
    GameOver,
    Copyright,
  },
  data() {
    return state;
  },
  methods: {
    abort() {
      if (this.winner === this.username) {
        this.snackBarMessage = "You won the last game!";
        this.showSnackBar = true;
      }

      this.ws && this.ws.close();
      this.ws = null;
      this.gameState = "";
      this.gameHost = "";
      this.playerCount = 0;
      this.winner = "";
      this.leaderboard = [];
    },
    btnMsg() {
      return (this.gameState === "ended" ? "Continue" : "Disconnect")
    }
  }
}
</script>
