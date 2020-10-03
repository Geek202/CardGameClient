<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <Yes yes="yes!" />
  <Yes yes="no" />
  <p>Hello, World!</p>
  
  <CardRow>
    <Card v-for="card in vals" v-bind:onClick="clickCard" v-bind:value="card.value" v-bind:colour="card.colour" v-bind:key="card.val" />
  </CardRow>
</template>

<script>
import Yes from './Yes.vue'
import Card from './Card.vue'
import CardRow from './CardRow.vue'
import { state } from '../state/appstate'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return state
  },
  components: {
    Yes,
    Card,
    CardRow,
  },
  methods: {
    clickCard(c) {
      window.alert(c.col + " " + c.value)
    }
  }
}
</script>
