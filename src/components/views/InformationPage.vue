<template>
  <div v-if="groupList.length > 0" class="information">
    <InfoMenu :categoryList="groupList" :category="categoryDetails" />
    <InfoText :category="categoryDetails" />
  </div>
</template>

<script>
import InfoMenu from "../molecules/InfoMenu.vue";
import InfoText from "../molecules/InfoText.vue";

export default {
  name: "SocietyPage",
  components: {
    InfoMenu,
    InfoText,
  },
  computed: {
    groupList() {
      return this.$store.state.group;
    },
    categoryDetails() {
      return this.$store.state.categoryDetails[0];
    },
  },
  data() {
    return {
      group: "",
      category: "",
      // currentRoute: this.$router.currentRoute,
    };
  },
  mounted() {
    this.fetchGroup().then(() => {
      this.fetchCategoryDetails();
    });
    // this.fetchCategoryDetails();
    // console.log(this.$router.currentRoute);
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchGroup().then(() => {
          this.fetchCategoryDetails();
        });
      },
    },
  },
  methods: {
    async fetchGroup() {
      this.group = this.$router.currentRoute.params.name;
      this.loading = true;
      await this.$store.dispatch("getGroup", this.group);
      this.loading = false;
    },
    async fetchCategoryDetails() {
      !this.$router.currentRoute.params.category
        ? (this.category = this.$store.state.group[0].category)
        : (this.category = this.$router.currentRoute.params.category);
      this.loading = true;
      await this.$store.dispatch("getCategoryDetails", {
        group: this.group,
        category: this.category,
      });
      this.loading = false;
    },
  },
};
</script>

<style>
.information {
  margin-top: 12em;
  display: flex;
  width: 100%;
  padding: 0 8rem 4rem 8rem;
  flex-direction: row;
}

@media screen and (max-width: 65rem) {
  .information {
    margin-top: 8rem;
    padding: 0 2rem 4rem 2rem;
  }
}
</style>
