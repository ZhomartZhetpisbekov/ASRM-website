<template>
  <div v-if="leadEvent" class="about-us-banner">
    <div class="content-container">
      <h2>{{ leadEvent.title }}</h2>
      <!-- <p>{{ leadEvent.text }}</p> -->
      <div v-html="leadEvent.text"></div>
      <div class="buttons-container">
        <a
          v-for="(item, index) in leadEvent.urls"
          :key="index"
          @click.capture="goLink(item.url)"
          >{{ item.text }}</a
        >
        <!-- <a>{{ leadEvent[0].link }}</a>
        <a>Join</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeadEventBanner",
  props: {
    leadEvent: Object,
  },
  methods: {
    goLink(url) {
      window.open(`${url}`, "_blank");
    },
  },
};
</script>

<style scoped>
.about-us-banner {
  width: 100%;
  height: 500px;
  /* margin-bottom: 70px; */
  background-image: url(../../assets/HomePage/event-banner.jpeg);
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.content-container {
  width: 40%;
  margin-left: 8rem;
  display: flex;
  gap: 25px;
  flex-direction: column;
  color: #fff;
}

h2 {
  font-size: 2rem;
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
  font-family: "Gotham Pro Med";
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

@media only screen and (max-width: 40rem) {
  .about-us-banner h2 {
    font-size: 1.5rem;
  }
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
