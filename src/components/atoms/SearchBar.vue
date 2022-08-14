<template>
  <div class="searchbar">
    <!-- <img class="icon" :src="require('@/assets/Header/search.svg')" alt="" /> -->
    <input
      type="text"
      @input="searchHandler"
      placeholder="Search"
      v-model="searchRef"
    />
    <div v-if="searchRef.length > 0" class="search-results">
      <span>Top results:</span>
      <p v-for="r of resultQuery" :key="r.id" @click="clickHandler(r.url)">
        {{ r.title }}
      </p>
      <!-- <p class="view-more">View all results -></p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchRef: "",
    };
  },
  methods: {
    searchHandler() {
      if (this.searchRef.length > 0) {
        this.getSearchRes();
      }
    },
    async getSearchRes() {
      await this.$store.dispatch("getSearchResults", this.searchRef);
    },
    clickHandler(url) {
      console.log(this.$router);
      console.log(this.resultQuery)
      // this.$router.push("/");
      this.$router.push('/'+url);
      // this.$router.go();
    },
  },
  computed: {
    resultQuery() {
      return this.$store.state.searchResults;
    },
  },
};
</script>

<style scoped>
.searchbar {
  /* margin-left: 3rem; */
  /* position: relative; */
  width: 100%;
}
::placeholder {
  color: var(--search-bar-text-color);
  font-size: 1rem;
}

.searchbar input {
  width: 100%;
  height: 2rem;
  border-radius: 1.125rem;
  border-color: var(--footer-border-color);
  border-width: 0;
  text-align: left;
  padding-left: 1rem;
  background: linear-gradient(
      var(--search-bar-underline),
      var(--search-bar-underline)
    )
    center bottom 5px / calc(100% - 32px) 2px no-repeat;
  background-color: var(--search-bar-color);
}

.search-results {
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 8rem;
  top: 8rem;
  height: calc(100vh - 8rem);
  /* bottom: 0; */
  /* z-index: 3; */
  /* height: 10rem; */
  background: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
}

.search-results > p:not(:last-child) {
  border-bottom: 1px solid var(--search-bar-underline);
  padding: 1rem 0;
  /* text-decoration: underline; */
}

.search-results > span {
  padding: 2rem 0 1rem 0;
  /* font-weight: bold; */
  font-family: "Gotham Pro Bold";
}

.search-results > p:hover {
  cursor: pointer;
  color: var(--secondary-color);
}

.view-more {
  padding: 1rem 0;
  text-decoration: underline;
}

@media screen and (max-width: 65rem) {
  ::placeholder {
    font-size: 0.875rem;
  }
  .search-results {
    padding: 0 1rem;
  }
}
</style>
