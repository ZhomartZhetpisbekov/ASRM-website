<template>
  <div class="container">
    <label class="section-title">{{ sectionTitle }}</label>
    <div class="form-group">
      <AccountFormItem
        v-for="(item, index) in sectionItems"
        :key="index"
        :inputLabel="item.label"
        :inputValue="item.value"
        :inputType="item.type"
        :isReadOnly="isReadOnly"
        :inputName="item.name"
      />
    </div>
  </div>
</template>

<script>
import AccountFormItem from "../atoms/AccountFormItem.vue";

export default {
  name: "AccountForm",
  components: { AccountFormItem },
  props: {
    sectionTitle: String,
    sectionItems: Array,
    isReadOnly: Boolean,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin-bottom: 1.5rem;
}

label {
  font-family: "Gotham Pro";
  color: #F38023;
}

.form-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0 2rem;
}
</style>