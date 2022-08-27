<template>
  <div class="account-page">
    <h2>{{ $t('accountPage.title') }}</h2>
    <div class="account-categories">
      <a @click="toggleIsOnSettings('settings')" :class="{ activeLink: isOnSettings }">{{ $t('accountPage.accountSetting') }}</a>
      <a @click="toggleIsOnSettings('membership')" :class="{ activeLink: !isOnSettings }">{{ $t('accountPage.membership') }}</a>
    </div>
    <hr />
    <div class="main-content">
      <div class="main-edit">
        <a @click="editInfo" :class="{ activeLink: isEditting }">{{ $t('accountPage.editInfo') }}</a>
      </div>
      <div class="user-info-container" v-if="isOnSettings" >
        <form @submit="submitHandler">
          <AccountForm
            v-for="(item, index) in formSections"
            :key="index"
            :sectionTitle="item.title"
            :sectionItems="item.inputFields"
            :isReadOnly="!isEditting"
          />
          <input v-if="isEditting" type="submit" value="Save" class="submit-btn">
        </form>
      </div>
      <div class="user-info-container" v-if="!isOnSettings" >
        <div class="parsed-html" v-html="categoryDetails.text"></div>
      </div>
      <div class="user-actions-container">
        <a @click="editInfo" :class="{ activeLink: isEditting }">{{ $t('accountPage.editInfo') }}</a>
        <a>{{ $t('accountPage.deleteAccount') }}</a>
        <a @click="signOutHandler">{{ $t('accountPage.signOut') }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import AccountForm from "../molecules/AccountForm.vue";
// import i18n from "../../plugins/i18n";

export default {
  name: "AccountPage",
  components: { AccountForm },
  computed: {
    categoryDetails() {
      return this.$store.state.categoryDetails[0];
    }
  },
  created() {
    this.fetchUserInfo();
  },
  mounted() {
    this.fetchCategoryDetails();
  },
  methods: {
    async fetchUserInfo() {
      this.loading = true;
      await this.$store.dispatch("getUserInformation");
      this.loading = false;
    },
    async fetchCategoryDetails() {
      this.loading = true;
      await this.$store.dispatch("getCategoryDetails", {
        group: 'society',
        category: 'membership',
      });
      this.loading = false;
    },
    submitHandler(e) {
      e.preventDefault();
      this.isEditting = false;
      this.$store.dispatch('a/modifyUser');
      this.$router.go();
    },
    editInfo() {
      this.isEditting = true;
    },
    toggleIsOnSettings(route) {
      route == 'membership' ? this.isOnSettings = false : this.isOnSettings = true;
    },
    signOutHandler() {
      this.$store.dispatch("userLogOut");
    }
  },
  data() {
    return {
      isOnSettings: true,
      isEditting: false,
      formSections: [
        {
          title: "registrationPage.accountInfo.title",
          inputFields: [
            {
              label: "registrationPage.accountInfo.username",
              type: "text",
              name: "username",
              inputCommitter: 'SET_USERNAME',
            },
            // {
            //   label: "Password",
            //   type: "password",
            //   name: "password"
            // },
            {
              label: "registrationPage.accountInfo.email",
              type: "email",
              name: "email",
              inputCommitter: 'SET_EMAIL',
            },
            {
              label: "registrationPage.workInfo.phone",
              type: "tel",
              name: "phone",
              inputCommitter: 'SET_PHONE',
            },
          ],
        },
        {
          title: "registrationPage.personalInfo.title",
          inputFields: [
            {
              label: "registrationPage.personalInfo.fname",
              type: "text",
              name: "first_name",
              inputCommitter: 'SET_FNAME',
            },
            {
              label: "registrationPage.personalInfo.mname",
              type: "text",
              name: "fatherland",
              inputCommitter: 'SET_MNAME',
            },
            {
              label: "registrationPage.personalInfo.lname",
              type: "text",
              name: "last_name",
              inputCommitter: "SET_LNAME",
            },
            {
              label: "registrationPage.personalInfo.dob",
              type: "date",
              name: "date_of_Birth",
              inputCommitter: 'SET_BDATE',
            },
          ],
        },
        {
          title: "registrationPage.address.title",
          inputFields: [
            {
              label: "registrationPage.address.address1",
              type: "text",
              name: "address",
              inputCommitter: 'SET_ADDRESS1',
            },
            {
              label: "registrationPage.address.address2",
              type: "text",
              name: "address",
              inputCommitter: 'SET_ADDRESS2',
            },

            {
              label: "registrationPage.address.country",
              type: "text",
              name: "country",
              inputCommitter: 'SET_COUNTRY',
            },
            {
              label: "registrationPage.address.city",
              type: "text",
              name: "city",
              inputCommitter: 'SET_CITY',
            },
          ],
        },
        {
          title: "registrationPage.workInfo.title",
          inputFields: [
            {
              label: "registrationPage.workInfo.occupation",
              type: "text",
              name: "profession",
              inputCommitter: 'SET_OCCUPATION',
            },
            {
              label: "registrationPage.workInfo.jobTitle",
              type: "text",
              name: "job",
              inputCommitter: 'SET_JOB',
            },
            {
              label: "registrationPage.workInfo.placeOfWork",
              type: "text",
              name: "place_of_work",
              inputCommitter: 'SET_PWORK',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  color: #005963;
}

a {
  color: #005963;
  line-height: 1.5rem;
  cursor: pointer;
}

.activeLink {
  border-bottom: 2px solid #005963;
}

.account-page {
  margin: 13rem 0 2rem;
  width: 100%;
  padding: 0 8rem;
}

.account-categories {
  margin-top: 2rem;
  display: flex;
  gap: 4rem;
}

.main-content {
  margin-top: 2rem;
  display: flex;
  /* justify-content: space-between; */
  gap: 4rem;
}

.main-edit {
  display: none;
  width: auto;
  text-align: right;
  margin-bottom: 1.5rem;
}

.user-info-container {
  width: 75%;
}


.parsed-html {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
  color: var(--text-color);
  font-size: 1rem;
}

.parsed-html >>> img {
  width: 50%;
}

.parsed-html >>> iframe {
  width: 100%;
  aspect-ratio: 16/9;
}

.parsed-html >>> ol,
.parsed-html >>> ul {
  padding: 0 2rem;
}

.parsed-html >>> a {
  text-decoration: underline;
  color: var(--text-color);
}


.user-actions-container {
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.submit-btn {
  padding: 1rem 3rem;
  background: #005963;
  font-size: 1rem;
  font-family: 'Gotham Pro Med';
  color: #fff;
  border: 0;
  cursor: pointer;
}

@media only screen and (max-width: 65rem) {
  .account-page {
    margin-top: 8rem;
    padding: 0 2rem;
  }
}

@media only screen and (max-width: 40rem) {
  .account-page {
    padding: 0 2rem;
  }

  .main-content {
    flex-direction: column;
    gap: 0;
  }

  .main-edit {
    display: block;
  }

  .main-edit a {
    padding: 0.3rem 0;
  }

  .user-info-container {
    width: 100%;
  }

  .user-actions-container {
    width: 100%;
    text-align: right;
  }

  .user-actions-container a:first-child {
    display: none;
  }
}
</style>