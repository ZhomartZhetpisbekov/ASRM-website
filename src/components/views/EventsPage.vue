<template>
  <div v-if="groupList.length > 0" class="information">
    <InfoMenu :categoryList="groupList" :category="categoryDetails[0]" />
    <EventsInfoText :category="categoryDetails"/>
  </div>
</template>

<script>
import InfoMenu from "../molecules/InfoMenu.vue";
import EventsInfoText from "../molecules/EventsInfoText.vue";

export default {
  name: "EventsPage",
  components: {
    InfoMenu,
    EventsInfoText,
  },
  data() {
    return {
      groupList: [
        {category: 'archive', title: 'Архив мероприятий'},
        {category: 'upcoming', title: 'Предстоящие мероприятия'},
        {category: 'educational', title: 'Образовательные программы для пациентов'}
      ],
      category: '',
    }
  },
  computed: {
    categoryDetails() {
      return this.$store.state.categoryDetails;
    },
  },
  mounted() {
    this.fetchCategoryDetails();
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchCategoryDetails()
      },
    },
  },
  methods: {
    async fetchCategoryDetails() {
      !this.$router.currentRoute.params.category
        ? (this.category = this.groupList[0].category)
        : (this.category = this.$router.currentRoute.params.category);
      this.loading = true;
      await this.$store.dispatch("getCategoryDetails", {
        group: 'events',
        category: this.category,
      });
      this.loading = false;
    },
  },
};
</script>

<style>
.information {
  margin-top: 12.5rem;
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
