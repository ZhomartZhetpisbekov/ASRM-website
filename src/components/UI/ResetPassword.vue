<template>
  <div class="reset-container">
    <!-- <h2>Reset {{ currentEntity }}</h2> -->
    <h2>{{ $t(`reset.${currentEntity}`) }}</h2>
    <AccountFormItem
      v-if="currentEntity != 'email'"
      :inputLabel="'reset.formLabels.currentPassword'"
      :inputType="'password'"
      :isReadOnly="false"
      :inputName="'password'"
      :inputCommitter="'SET_CURRENT_PASSWORD'"
    />
    <AccountFormItem
      v-if="currentEntity == 'username'"
      :inputLabel="`reset.formLabels.newUsername`"
      :inputType="'text'"
      :isReadOnly="false"
      :inputName="'username'"
      :inputCommitter="`SET_NEW_USERNAME`"
    />
    <AccountFormItem
      v-if="currentEntity == 'password'"
      :inputLabel="`reset.formLabels.newPassword`"
      :inputType="'password'"
      :isReadOnly="false"
      :inputName="'password'"
      :inputCommitter="`SET_NEW_PASSWORD`"
    />
    <AccountFormItem
      v-if="currentEntity == 'email'"
      :inputLabel="`reset.formLabels.newEmail`"
      :inputType="'text'"
      :isReadOnly="false"
      :inputName="'email'"
      :inputCommitter="`SET_NEW_EMAIL`"
    />
    <button @click="reset(currentEntity)" class="submit-btn">{{ $t('accountPage.save') }}</button>
  </div>
</template>

<script>
import AccountFormItem from "../atoms/AccountFormItem.vue";
export default {
  components: { AccountFormItem },
  computed: {
    currentEntity() {
      return this.$route.params.resetEntity;
    },
  },
  methods: {
    reset(currentEntity) {
      this.$store.dispatch(`a/reset_${currentEntity}`);
    },
  },
};
</script>

<style scoped>
.reset-container {
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.submit-btn {
  margin-top: 1rem;
  width: 30%;
  padding: 1rem 3rem;
  background: #005963;
  font-size: 1rem;
  font-family: "Gotham Pro Med";
  color: #fff;
  border: 0;
  cursor: pointer;
}

@media screen and (max-width: 65rem) {
  .submit-btn {
    width: 80%;
  }
}

@media screen and (max-width: 40rem) {
  .submit-btn {
    width: 100%;
  }
}
</style>