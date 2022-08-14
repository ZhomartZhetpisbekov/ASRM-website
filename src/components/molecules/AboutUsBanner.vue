<template>
  <div class="about-us-banner">
    <div v-if="index" class="content-container">
      <!-- <h2>{{ $t("aboutUs.title") }}</h2> -->
      <h2>{{ index.title }}</h2>
      <!-- <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        rhoncus hendrerit. Quisque mattis ante sit amet dictum finibus.
      </p> -->
      <div v-html="index.text"></div>
      <div class="buttons-container">
        <a href="#">{{ $t("aboutUs.joinBtn") }}</a>
        <a @click="goToSociety">{{ $t("aboutUs.readMoreBtn") }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUsBanner",
  props: {},
  computed: {
    index() {
      return this.$store.state.aboutUs[0];
    }
  },
  mounted() {
    this.fetchIndex();
  },
  methods: {
    async fetchIndex() {
      this.loading = true;
      await this.$store.dispatch("getAboutUs");
      this.loading = false;
    },
    goToSociety() {
      this.$router.push('society');
    }
  },
};
</script>

<style scoped>
/* About Us Banner */
.about-us-banner {
  width: 100%;
  height: 500px;
  margin-bottom: 70px;
  background-image: url(../../assets/HomePage/banner-img.png);
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
}

.content-container {
  width: 30%;
  margin-left: 8rem;
  display: flex;
  gap: 25px;
  flex-direction: column;
  color: #fff;
}

h2 {
  font-size: 32px;
}

p {
  line-height: 25px;
}

.buttons-container {
  width: 100%;
  display: flex;
  gap: 10px;
}

a {
  padding: 10px 30px;
  border-radius: 20px;
  text-decoration: none;
  margin-right: 10px;
  background: var(--main-text-color);
  color: var(--bg-color);
  font-family: 'Gotham Pro Med';
  transition: all ease 0.3s;
}

a:hover {
  background: var(--secondary-color);
  color: #fff;
}

@media only screen and (max-width: 65rem) {
  .content-container {
    margin-left: 2rem;
    width: 60%;
  }
}

@media only screen and (max-width: 720px) {
  .content-container {
    margin: auto;
    width: 100%;
    padding: 0 2rem;
  }

  .buttons-container {
    width: 100%;
    flex-direction: column;
    margin: auto;
    text-align: center;
  }

  a {
    margin: auto;
    margin-bottom: 10px;
    width: 50%;
  }
}
</style>