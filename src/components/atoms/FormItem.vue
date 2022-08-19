<template>
  <div :class="inputClass">
    <label class="input_label" :class="{ 'required-field': inputRequired }">
      {{ inputLabel }}
    </label>
    <input
      v-if="inputType == 'tel'"
      autocomplete="off"
      :placeholder="inputPlaceholder"
      :type="inputType"
      
      :required="inputRequired"
      v-model="modelka"
      @input="committer"
      :minlength="11"
    />
    <input
      v-else
      autocomplete="off"
      :placeholder="inputPlaceholder"
      :type="inputType"
      :required="inputRequired"
      v-model="modelka"
      @input="committer"
      :minlength="inputType == 'password' ? 8 : 1"
    />
    <!-- <span class="validity"></span> -->
  </div>
</template>

<script>
export default {
  name: "FormItem",
  data() {
    return {
      modelka: "",
    };
  },
  props: {
    inputLabel: {
      type: String,
    },
    inputPlaceholder: {
      type: String,
    },
    inputType: {
      type: String,
    },
    inputClass: {
      type: String,
    },
    inputRequired: Boolean,
    inputCommiter: String,
  },
  methods: {
    committer() {
      this.$store.commit(`a/${this.inputCommiter}`, this.modelka);
    },
  },
};
</script>

<style scoped>
div {
  flex-grow: 1;
  min-width: 25%;
}

.input_label {
  margin-top: 1rem;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: black;
}
.input_label input {
  float: right;
}
.required-field::after {
  content: "*";
  /* color: red; */
}
input {
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
  /* margin-bottom: 1rem; */
  align-content: stretch;
}

input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
  color: #8b0000;
}

input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
  color: #009000;
}

.date-class {
  max-width: 30.25%;
}

::placeholder {
  color: var(--text-color);
}

@media screen and (max-width: 40rem) {
  .date-class {
    max-width: 100%;
  }
}
</style>
