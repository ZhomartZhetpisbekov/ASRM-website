<template>
  <div v-if="userValue || inputType == 'password' || inputName == 'middle_name'">
    <label class="input_label">{{ $t(inputLabel) }} </label>
    <input
      v-model="userValue"
      :type="inputType"
      :readonly="isReadOnly"
      :class="{ activeInput: !isReadOnly }"
    />
    <!-- <input
      v-else
      :value="inputType == 'password' ? 'lolipendr' : userValue"
      :type="inputType"
      :readonly="isReadOnly"
      :class="{ activeInput: !isReadOnly }"
    /> -->
  </div>
</template>

<script>
export default {
  name: "AccountFormItem",
  props: {
    inputLabel: {
      type: String,
    },
    inputCommitter: {
      type: String,
    },
    inputType: {
      type: String,
    },
    isReadOnly: {
      type: Boolean,
    },
    inputName: String,
  },
  data() {
    return {
      temp: '',
    }
  },
  mounted() {
    console.log(this.isReadOnly);
  },
  computed:{
    userValue: {
      get() {
        return this.$store.state.userInfo[this.inputName];
      },
      set(value) {
        this.$store.commit(`a/${this.inputCommitter}`, value);
      }
    },
    // userValue() {
    //   return this.$store.state.userInfo[this.inputName];
    // }
  },
  // methods: {
  //   committer() {
  //     this.$store.commit(`a/${this.inputCommitter}`, this.userValue);
  //   }
  // }
};
</script>

<style scoped>
div {
  flex-grow: 1;
  min-width: 35%;
  max-width: 47%;
}

.input_label {
  margin-top: 1rem;
  display: block;
  font-size: 1rem;
  font-family: "Gotham Pro";
  color: #005963;
}
input {
  display: block;
  height: 2.5rem;
  width: 100%;
  background: #f1f5f6;
  border: 0;
  padding: 0 1rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 300;
  align-content: stretch;
}

.activeInput {
  background: #f1fbff;
}

input:focus {
  outline: none;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="date"] {
  color: #000;
  font-family: "Gotham Pro";
}

@media screen and (max-width: 40rem) {
  div {
    min-width: 100%;
  }
}
</style>
