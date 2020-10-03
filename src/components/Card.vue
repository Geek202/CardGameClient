<template>
  <div v-bind:class="computeClass()" @click="clk">
    <span class="card-value">
        {{ value }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
      colour: String,
      value: Number,
      onClick: Function,
      sel: Boolean,
      idz: Number,
  },
  methods: {
    clk(e) {
      this.onClick({
        col: this.colour,
        value: this.value,
        idx: this.idz,
      })
    },
    computeClass() {
      var r = "card-container card-" +this.colour + " ";
      if (this.sel) {
        r += "card-sel";
      } else {
        r += "card-no-sel";
      }
      return r;
    },
  },
}
</script>