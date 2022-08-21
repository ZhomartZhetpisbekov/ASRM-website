<template>
  <div class="become-member">
    <div v-if="index" class="content-container">
      <!-- <h2>{{ $t('becomeMember.title') }}</h2> -->
      <h2>{{ index.title }}</h2>
      <div v-html="index.text" class="text-content">
        <!-- <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis rhoncus hendrerit. Quisque mattis ante sit amet dictum
          finibus. Sed scelerisque augue eget gravida pellentesque.
        </p>
        <p>
          Vivamus ultrices mauris eu lectus fringilla, eu finibus leo lobortis.
          Morbi quis dui quam. Donec finibus eros nulla, in auctor tortor
          pharetra a. Ut interdum eros sit amet egestas cursus. Nulla fringilla
          aliquet varius.
        </p> -->
      </div>
      <a href="/society/membership">{{ $t("becomeMember.readMoreBtn") }}</a>
    </div>
    <div class="image-container"></div>
  </div>
</template>

<script>
export default {
  name: "BecomeMember",
  props: {},
  computed: {
    index() {
      return this.$store.state.membership[0];
    },
  },
  mounted() {
    this.fetchIndex();
  },
  methods: {
    async fetchIndex() {
      this.loading = true;
      await this.$store.dispatch("getMembership");
      this.loading = false;
    },
  },
};
</script>

<style scoped>
/* Become Member */
.become-member {
  /* width: 83.5%; */
  margin: 0 8rem;
  /* margin: auto; */
  display: flex;
  color: #000;
  margin-bottom: 5rem;
  border: 1px solid #f38023;
}

.content-container {
  width: 70%;
  /* height: 480px; */
  background: #fdf1e8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 4rem;
}

.text-content {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 2rem;
}

h2 {
  font-size: 2rem;
  color: #f38023;
}

p {
  font-size: 16px;
}

a {
  padding: 1rem 2.25rem;
  background: #00acb1;
  color: #fff;
  border-radius: 30px;
  transition: all 0.25s ease;
}

a:hover {
  color: #fff;
  transform: scale(1.1, 1.1);
}

.image-container {
  width: 30%;
  background-image: url(../../assets/HomePage/become-member2.png);
  background-position: center center;
  /* background-attachment: fixed; */
  background-size: cover;
}

@media only screen and (max-width: 65rem) {
  .become-member {
    /* width: 100%; */
    /* border: 0; */
    margin: 0 2rem 5rem;
    /* flex-direction: column; */
  }
  .content-container {
    padding: 2rem;
  }
}

@media only screen and (max-width: 40rem) {
  .become-member {
    width: 100%;
    border: 0;
    margin: 0;
    margin-bottom: 5rem;
    flex-direction: column;
  }
  h2 {
    font-size: 1.5rem;
  }

  .content-container {
    width: 100%;
    /* height: 380px; */
  }

  .image-container {
    width: 100%;
    height: 300px;
  }
}
</style>
