<template>
  <section class="registration-page">
    <form @submit="submitHandler">
      <h3>{{ $t("registrationPage.regTitle") }}</h3>

      <div class="account-information">
        <label class="registration-information">{{
          $t("registrationPage.accountInfo.title")
        }}</label>
        <registration-form :info="accountInfo" />
        <registration-form :info="accountInfo2" />
      </div>
      <div class="personal-information">
        <label class="registration-information">{{
          $t("registrationPage.personalInfo.title")
        }}</label>
        <registration-form :info="personalInfo" />
      </div>
      <div class="address-information">
        <label class="registration-information">{{
          $t("registrationPage.address.title")
        }}</label>
        <registration-form :info="address1" />
        <registration-form :info="address2" />
        <registration-form :info="address3" />
      </div>
      <div class="work-information">
        <label class="registration-information">{{
          $t("registrationPage.workInfo.title")
        }}</label>
        <registration-form :info="workInfo1" />
        <registration-form :info="workInfo2" />
      </div>
      <p
        style="margin: 1rem 0; text-align:center; color: red"
        v-if="registrationError"
      >
        {{ errorText }}
      </p>
      <div class="registration-page__buttons">
        <button type="s, required: trueubmit">
          {{ $t("loginPage.registration") }}
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import RegistrationForm from "../molecules/RegistrationForm.vue";
export default {
  components: { RegistrationForm },
  name: "RegistrationPage",
  computed: {
    registrationError() {
      return this.$store.state.a.regError;
      // return this.$store.getters("a/get_error");
    },
    errorText() {
      return this.$store.state.a.errorMsg;
    },
  },
  data() {
    return {
      usernameRef: "",
      passwordRef: "",
      emailRef: "",
      firstNameRef: "",
      lastNameRef: "",
      middleNameRef: "",
      accountInfo: [
        {
          label: "registrationPage.accountInfo.username",
          placeholder: "",
          type: "text",
          required: true,
          committer: "SET_USERNAME",
        },
        {
          label: "registrationPage.accountInfo.email",
          placeholder: "john@email.com",
          type: "email",
          required: true,
          committer: "SET_EMAIL",
        },
      ],
      accountInfo2: [
        {
          label: "registrationPage.accountInfo.password",
          placeholder: "min. 8 characters, not username",
          type: "password",
          required: true,
          committer: "SET_PASSWORD",
        },
        {
          label: "registrationPage.accountInfo.passwordConfirm",
          placeholder: "***********",
          type: "password",
          required: true,
          committer: "SET_CONFIRMED_PASSWORD",
        },
      ],
      personalInfo: [
        {
          label: "registrationPage.personalInfo.fname",
          placeholder: "",
          type: "text",
          required: true,
          committer: "SET_FNAME",
        },
        {
          label: "registrationPage.personalInfo.mname",
          placeholder: "",
          type: "text",
          required: false,
          committer: "SET_MNAME",
        },
        {
          label: "registrationPage.personalInfo.lname",
          placeholder: "",
          type: "text",
          required: true,
          committer: "SET_LNAME",
        },
        {
          label: "registrationPage.personalInfo.dob",
          placeholder: "dd/mm/yyyy",
          type: "date",
          required: true,
          className: "date-class",
          committer: "SET_BDATE",
        },
      ],
      address1: [
        {
          label: "registrationPage.address.address1",
          placeholder: "",
          type: "text",
          required: true,
          committer: "SET_ADDRESS1",
        },
      ],
      address2: [
        {
          label: "registrationPage.address.address2",
          placeholder: "",
          type: "text",
          required: false,
          committer: "SET_ADDRESS2",
        },
      ],
      address3: [
        {
          label: "registrationPage.address.country",
          placeholder: "",
          type: "text",
          required: true,
          committer: "SET_COUNTRY",
        },
        {
          label: "registrationPage.address.city",
          placeholder: "",
          type: "text",
          required: true,
          committer: "SET_CITY",
        },
      ],
      workInfo1: [
        {
          label: "registrationPage.workInfo.occupation",
          placeholder: "",
          type: "text",
          required: true,
          committer: "SET_OCCUPATION",
        },
        {
          label: "registrationPage.workInfo.jobTitle",
          placeholder: "",
          type: "text",
          required: true,
          committer: "SET_JOB",
        },
      ],
      workInfo2: [
        {
          label: "registrationPage.workInfo.placeOfWork",
          placeholder: "",
          type: "text",
          required: true,
          committer: "SET_PWORK",
        },
        {
          label: "registrationPage.workInfo.phone",
          placeholder: "+X (XXX) XXX - XXXX",
          type: "tel",
          required: true,
          committer: "SET_PHONE",
        },
      ],
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      console.log("submitted");
      this.$store.dispatch("a/getRegistration");
    },
  },
};
</script>

<style scoped>
.registration-page {
  margin-top: 12rem;
  display: flex;
  width: 100vw;
  /* height: 100vh; */
  margin-bottom: 4rem;
  align-items: center;
}

.personal-information,
.address-information,
.work-information {
  margin-top: 1rem;
}
.account-information {
  margin-top: 1.5rem;
}

.work-information {
  margin-bottom: 0.5rem;
}

/* .account-information > label,
.personal-information > label,
.address-information > label,
.work-information > label {
  margin-bottom: 1rem;
} */

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
  /* text-align: center; */
}

.account-information {
  display: flex;
  flex-direction: column;
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

.registration-page__buttons {
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

.registration-page__buttons > button:first-child {
  background-color: var(--secondary-color);
  color: var(--footer-bg-color);
}

.registration-page__buttons > p:last-child {
  font-family: "Gotham Pro Med";
  cursor: pointer;
}

/* label.registration-information {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
} */

@media screen and (max-width: 65rem) {
  .registration-page {
    margin-top: 6rem;
  }
}

@media screen and (max-width: 40rem) {
  form {
    width: 100%;
    padding: 2rem;
  }
  .registration-page {
    margin-top: 6rem;
  }
  form h3 {
    font-size: 1.5rem;
  }
}
</style>
