<template>
  <section class="login-page">
    <form autocomplete="off" @submit="submitHandler">
      <h3>{{ $t("loginPage.loginTitle") }}</h3>

      <label for="username">{{ $t("loginPage.username") }}</label>
      <input
        autocomplete="off"
        required
        v-model="usernameRef"
        type="text"
        placeholder="Email or Phone"
        id="username"
      />
      <!-- <label style="margin-bottom: 1rem; color: red" v-if="!loginError"
        >Неверный пароль или логин</label
      > -->

      <label for="password">{{ $t("loginPage.password") }}</label>
      <input
        autocomplete="off"
        required
        v-model="passwordRef"
        type="password"
        placeholder="*********"
        id="password"
        :minlength="8"
      />
      <label style="margin-bottom: 1rem; color: red" v-if="!loginError"
        >Неверный пароль или логин</label
      >

      <div class="actions-container" style="line-height: 1.25rem">
        <div class="checkbox-container">
          <input type="checkbox" />
          <label> {{ $t("loginPage.remember") }}</label>
        </div>

        <span> {{ $t("loginPage.forget") }}</span>
      </div>
      <div class="login-page__buttons">
        <button type="submit">{{ $t("loginPage.login") }}</button>
        <!-- <button>{{ $t("loginPage.registration") }}</button> -->
        <p
          @click="
            () => {
              this.$router.push('/register');
            }
          "
        >
          New user? Create an account!
        </p>
      </div>
    </form>
  </section>
</template>

<script>
// import i18n from "../../plugins/i18n";

export default {
  name: "LoginPage",
  data() {
    return {
      usernameRef: "",
      passwordRef: "",
    };
  },
  computed: {
    loginError() {
      return this.$store.state.loginPassed;
    },
  },
  methods: {
    async submitHandler(e) {
      e.preventDefault();
      await this.$store.dispatch("loginUser", {
        email: this.usernameRef,
        password: this.passwordRef,
      });
    },
  },
  created() {
    if (localStorage.getItem("token")) this.$router.push("/account");
  },
};
</script>

<style scoped>
.login-page {
  margin-top: 12rem;
  display: flex;
  width: 100vw;
  /* height: 100vh; */
  margin-bottom: 4rem;
  align-items: center;
}

form {
  background-color: var(--login-bg-color);
  padding: 2rem 3rem;
}
form * {
  font-family: "Gotham Pro";
  color: var(--main-text-color);
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-family: "Gotham Pro Bold";
  font-size: 2rem;
  /* font-weight: 700; */
  text-align: center;
  line-height: 2rem;
  margin-bottom: 2rem;
  /* text-align: center; */
}

form > label {
  display: block;
  /* margin-top: 2rem; */
  font-size: 1rem;
  font-weight: 500;
  color: black;
}
form > input {
  display: block;
  height: 2.5rem;
  width: 100%;
  /* background-color: rgba(255, 255, 255, 0.07); */
  border-radius: 1.5rem;
  border: 1px solid var(--main-text-color);
  padding: 0 1rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 1rem;
}
::placeholder {
  color: var(--text-color);
}

.actions-container,
.checkbox-container {
  display: flex;
  gap: 0.5rem;
  width: fit-content;
  align-items: center;
}

.checkbox-container > input {
  height: 1rem;
  width: 1rem;
}

.checkbox-container > label,
.actions-container > span {
  height: 0.875rem;
  color: black;
}

.actions-container {
  margin-top: 0.5rem;
  width: 100%;
  justify-content: space-between;
}

.login-page__buttons {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

button {
  width: 50%;
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 2rem;
  cursor: pointer;
  font-family: "Gotham Pro Med";
}

.login-page__buttons > button:first-child {
  background-color: var(--secondary-color);
  color: var(--footer-bg-color);
}

.login-page__buttons > p:last-child {
  font-family: "Gotham Pro Med";
  cursor: pointer;
}

@media screen and (max-width: 65rem) {
  .login-page {
    margin-top: 7rem;
  }
}

@media screen and (max-width: 40rem) {
  form {
    width: 100%;
    padding: 2rem;
  }
  .login-page {
    margin-top: 6rem;
  }
  form h3 {
    font-size: 1.5rem;
  }
}
</style>
