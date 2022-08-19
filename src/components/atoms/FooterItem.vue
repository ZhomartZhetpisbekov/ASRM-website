<template>
  <a @click="changePage">{{ this.link }}</a>
</template>

<script scoped>
export default {
  name: "FooterItem",
  props: {
    link: {
      type: String,
    },
    pagePath: {
      type: String,
    },
    routerName: {
      type: String,
    },
  },
  methods: {
    changePage() {
      this.$store.dispatch("getUserInformation");
      if (this.$router.currentRoute.path !== "/" + this.pagePath)
        this.$router.push({
          name: this.routerName,
          params: { name: this.pagePath },
        });
    },
  },
};
</script>

<style scoped>
/* Footer Item */
a {
  text-decoration: none;
  font-size: 1rem;
  color: #005963;
  margin-bottom: 1rem;
  transition: all 0.25s ease;
  font-family: "Gotham Pro";
  cursor: pointer;
}

a:hover {
  color: #f38023;
}
</style>
