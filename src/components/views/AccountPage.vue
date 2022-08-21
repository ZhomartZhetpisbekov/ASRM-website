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
  created() {
    this.fetchUserInfo();
  },
  methods: {
    async fetchUserInfo() {
      this.loading = true;
      await this.$store.dispatch("getUserInformation");
      this.loading = false;
    },
    submitHandler(e) {
      e.preventDefault();
      this.isEditting = false;
      // console.log(this.$store)
      this.$store.dispatch('a/modifyUser');
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
          title: "Account information",
          inputFields: [
            {
              label: "Username",
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
              label: "Email",
              type: "email",
              name: "email",
              inputCommitter: 'SET_EMAIL',
            },
            {
              label: "Phone number",
              type: "tel",
              name: "phone",
              inputCommitter: 'SET_PHONE',
            },
          ],
        },
        {
          title: "Personal information",
          inputFields: [
            {
              label: "First name",
              type: "text",
              name: "first_name",
              inputCommitter: 'SET_FNAME',
            },
            {
              label: "Middle name",
              type: "text",
              name: "middle_name",
              inputCommitter: 'SET_MNAME',
            },
            {
              label: "Last name",
              type: "text",
              name: "last_name",
              inputCommitter: "SET_LNAME",
            },
            {
              label: "Date of birth",
              type: "date",
              name: "date_of_Birth",
              inputCommitter: 'SET_BDATE',
            },
          ],
        },
        {
          title: "Address",
          inputFields: [
            {
              label: "Street address line 1",
              type: "text",
              name: "address",
              inputCommitter: 'SET_ADDRESS1',
            },
            {
              label: "Street address line 2",
              type: "text",
              name: "address",
              inputCommitter: 'SET_ADDRESS2',
            },

            {
              label: "Country",
              type: "text",
              name: "country",
              inputCommitter: 'SET_COUNTRY',
            },
            {
              label: "City",
              type: "text",
              name: "city",
              inputCommitter: 'SET_CITY',
            },
          ],
        },
        {
          title: "Work information",
          inputFields: [
            {
              label: "Occupation",
              type: "text",
              name: "profession",
              inputCommitter: 'SET_OCCUPATION',
            },
            {
              label: "Job title",
              type: "text",
              name: "job",
              inputCommitter: 'SET_JOB',
            },
            {
              label: "Place of work",
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