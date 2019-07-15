<template>
  <div id="pokerCards" class="scrumPokerTheme">
    <section>
      <input type="text" v-model="query" placeholder="Search by number..." />
      <transition-group
        tag="ul"
        v-bind:css="false"
        v-bind:class="{ blur: typeof selected[0] !== 'undefined' }"
      >
        <li
          v-for="(card, index) in computedList"
          v-bind:class="[card.color]"
          v-bind:key="card.number"
          v-bind:data-index="index"
          v-on:click="selected.push(card)"
        >
          <div class="title-sup">
            <p>{{ card.number }}</p>
            <p v-html="card.symbol"></p>
          </div>
          <div class="title-center">
            <p v-html="card.symbol"></p>
          </div>
          <div class="title-bot">
            <p>{{ card.number }}</p>
            <p v-html="card.symbol"></p>
          </div>
        </li>
      </transition-group>
      <transition
        enter-active-class="animated pulse"
        leave-active-class="animated fadeOutDown"
      >
        <div
          v-if="typeof selected[0] !== 'undefined'"
          v-on:click="selected = []"
          class="selectedCard"
        >
          <h1>Seleted Card</h1>
          <div class="clip-text" v-html="selected[0].number"></div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: "pokerCards",
  data() {
    return {
      ready: false,
      selected: [],
      query: "",
      cards: []
    };
  },
  computed: {
    computedList: function() {
      let vm = this;
      return this.cards.filter(function(card) {
        return card.number.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
      });
    }
  },
  mounted() {
    this.createCards();
  },
  methods: {
    createCards() {
      this.cards = [];
      let colors = ["blackCards", "redCards"];
      let symbols = ["♠", "♦", "♣", "♥"];
      let num = 7;
      let a = 1;
      let b = 0;
      let temp = 0;
      while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        if (b !== a) {
          this.cards.push({
            number: b.toString(),
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            color: colors[Math.floor(Math.random() * colors.length)]
          });
        }
        num--;
      }
      this.cards.push({
        number: "?",
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)]
      });
      this.cards.push({
        number: "∞",
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }
};
</script>
