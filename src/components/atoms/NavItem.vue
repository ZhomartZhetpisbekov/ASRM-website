<template>
  <li :class="`${this.addClass} ${this.styling}`" @click="changePage">
    <img v-if="styling == 'top'" :src="this.path" />
    <p>{{ this.title }}</p>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    active: {
      type: Boolean,
    },
    styling: {
      type: String,
    },
    title: {
      type: String,
    },
    imgPath: {
      type: String,
    },
    pagePath: {
      type: String,
    },
    routerName: {
      type: String,
    },
  },
  data() {
    return {
      addClass: this.active == true ? "active" : "",
      path:
        this.styling == "top" &&
        require("@/assets/Header/" + this.imgPath + "_icon.svg"),
    };
  },
  methods: {
    changePage() {
      if (
        this.active == true &&
        this.$router.currentRoute.params.name != "Login"
      ) {
        this.$router.push({
          name: "Login",
        });
        this.$router.go()
      }
      if (this.pagePath == 'contacts') {this.$router.push('society/contacts')}
      else if (this.$router.currentRoute.path !== "/" + this.pagePath)
        this.$router.push({
          name: this.routerName,
          params: { name: this.pagePath },
        });
    },
  },
};
</script>

<style scoped>
li {
  padding-bottom: 0.25rem;
  /* color: white; */
  display: flex;
  align-items: center;
}

li:hover {
  cursor: pointer;
}

.bottom:hover {
  border-bottom: 2px solid white;
}

.top {
  border-radius: 1rem;
  font-size: 1rem;
  /* margin: 0 1rem; */
  padding: 0.5rem 0;
}

.top img {
  height: 1rem;
  margin-right: 0.5rem;
  fill: var(--header-top-color);
}

.top > p {
  height: 0.875rem;
  /* font-weight: normal; */
  font-family: "Gotham Pro Med";
}

.bottom {
  font-size: 1rem;
  /* font-weight: normal; */
  font-family: "Gotham Pro Med";
  border-bottom: 2px solid var(--bg-color);
}
/* 
p {
  font-weight:bold;
} */

.bottomSqueezed {
  font-size: 1rem;
}

.active {
  background: var(--secondary-color);
  /* border: 1px solid var(--text-color); */
  color: var(--bg-color);
  padding: 0.5rem;
  margin-right: 0;
}

@media screen and (max-width: 65rem) {
  .middle {
    margin: 0 2em;
  }
  .top > p {
    font-size: 0.875rem;
    height: 0.75rem;
  }
}
</style>
