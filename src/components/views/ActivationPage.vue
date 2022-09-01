<template>
  <section class="activation-container">
    <div
      v-if="this.$route.params.uid && this.$route.params.token"
      class="activation-message"
    >
      <h2>{{ $t('activation.successfull.title') }}</h2>
      <p>
        {{ $t('activation.successfull.text') }}
      </p>
    </div>
    <div v-else class="activation-message">
      <h2>{{ $t('activation.title') }}</h2>
      <p>
        {{ $t('activation.text[0]') }}
      </p>
      <p>
        {{ $t('activation.text[1]') }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ActivationPage",
  computed: {
    uid() {
      return this.$route.params.uid;
    },
    token() {
      return this.$route.params.token;
    },
  },
  methods: {
    async activateUser() {
      console.log(this.uid);
      console.log(this.token);
      await this.$store.dispatch("userActivate", {
        uid: this.uid,
        token: this.token,
      });
    },
  },
  mounted() {
    console.log("mounted");
    if (this.$route.params.uid && this.$route.params.token) this.activateUser();
  },
};
</script>

<style>
.activation-container {
  width: 100%;
  height: 100%;
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* gap: 2rem; */
  /* text-align: center; */
  /* color: var(--text-color); */
  /* width: 100vw; */
  padding: 0 8rem;
  /* margin-bottom: 4rem; */
}

.activation-message {
  background-color: var(--login-bg-color);
  padding: 2rem 3rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  color: var(--main-text-color);
  width: 30rem;
}
.activation-message > h2 {
  font-family: "Gotham Pro Bold";
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.activation-message > p {
  text-align: center;
  color: var(--text-color);
  line-height: 1.5rem;
}

@media screen and (max-width: 65rem) {
  .activation-container {
    margin-top: 7rem;
  }
}

@media screen and (max-width: 40rem) {
  .activation-container {
    padding: 0;
    margin-top: 6rem;
  }
  .activation-message > h2 {
    font-size: 1.5rem;
  }

  .activation-message {
    padding: 4rem 2rem;
    width: 100%;
  }
}
</style>
