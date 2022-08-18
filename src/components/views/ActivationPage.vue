<template>
  <div class="activation-container">
    <h2>Hello pussy</h2>
    <p>Activate please, if you're not pussy</p>
    <button @click="activateUser">Activate Me </button>
  </div>
</template>

<script>
export default {
  name: 'ActivationPage',
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
      await this.$store.dispatch("userActivate", {uid: this.uid, token: this.token});
    }
  }
}
</script>

<style>
.activation-container {
  width: 100%;
  height: 500px;
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
  color: var(--text-color);
  /* width: 100vw; */
  padding: 0 8rem;
  /* margin-bottom: 4rem; */
}
</style>