<template>
  <li
    class="info-middle"
    :class="{ active: this.activeGiven }"
    @click="changeRoute"
  >
    <p>{{ this.title }}</p>
  </li>
</template>

<script>

export default {
  name: 'InfoItem2',
  props: {
    title: {
      type: String,
    },
    group: {
      type: String
    },
    category: {
      type: String,
    }
  },
  data() {
    return {
      activeGiven: false,
    }
  },
  mounted() {
    this.checkActive();
  },
  methods: {
    changeRoute() {
      this.$router.push(`/${this.group}/${this.category}`);
      this.activeGiven = true;
    },
    checkActive() {
      this.activeGiven = this.$router.currentRoute.params.category == this.category;
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.checkActive();
      },
    },
  },
}
</script>

<style scoped>
li {
  color: var(--text-color);
  display: flex;
  align-items: center;
  transition: all 0.375s ease;
  padding: 1rem;
  font-family: "Gotham Pro";
  font-size: 0.875rem;
  /* border-top-right-radius: 1.5rem; */
  /* border-bottom-right-radius: 1.5rem;/ */
  width: 16rem;
  border-top: 1px solid var(--search-bar-color);
}

li:hover {
  background: var(--active-color);
  font-family: "Gotham Pro Med";
  font-style: italic;
  cursor: pointer;
}

.active {
  background: var(--active-color);
  font-family: "Gotham Pro Med";
  font-style: italic;
  /* border: none; */
}

@media screen and (max-width: 65rem) {
  /* .info-middle {
    padding: 0.875rem 0 0.875rem 4rem;
  }
  li {
    width: 18rem;
  }
  .active {
    font-size: 1.175rem;
  } */
}
</style>