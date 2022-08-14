<template>
  <p class="info-path">Главная{{ parsedpath() }}</p>
</template>

<script>
export default {
  name: "InfoPath",
  props: {
    paths: {
      type: Array,
    },
  },
  computed: {
    parser() {
      return this.$store.state.parser;
    },
  },
  methods: {
    parsedpath() {
      let pathParse = "";

      for (let i = 0; i < this.paths.length; i++) {
        if (this.paths[i] === undefined) continue;
        pathParse = pathParse + " - " + this.parser[this.paths[i]];
      }
      return pathParse;
    },
  },
};
</script>

<style scoped>
.info-path {
  color: white;
  padding: 0.75rem 0;
  font-size: 0.875rem;
}
</style>
