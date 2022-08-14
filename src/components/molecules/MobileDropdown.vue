<template>
  <div class="mobile-dropdown" :class="{ menuOpen: isActive }">
    <div class="mobile-dropdown__container">
      <DropDown />
      <NavItem
        :active="true"
        :imgPath="'account'"
        :pagePath="'account'"
        :styling="'top'"
        :title="'Личный кабинет'"
      />
    </div>
    <SearchBar />
    <div class="mobile-dropdown__info">
      <ul class="mobile-dropdown__sections">
        <MobileMenuItem
          v-for="(item, ind) in headerLinks"
          :key="ind"
          :currentSection="ind == current"
          :sectionName="item.name"
          :styling="'left'"
          :pagePath="item.path"
          :id="ind"
          @changeCurrentSection="(payload) => clickHandler(payload)"
        />
      </ul>
      <ul v-if="groupList" class="mobile-dropdown__list">
        <MobileMenuItem
          v-for="(item, ind) in groupList"
          :key="ind"
          :sectionName="item.title"
          :styling="'right'"
          :pageName="headerLinks[current].path"
          :pagePath="item.category"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import NavItem from "../atoms/NavItem.vue";
import SearchBar from "../atoms/SearchBar.vue";
import DropDown from "../atoms/LangsDropDown.vue";
import MobileMenuItem from "../atoms/MobileMenuItem.vue";
export default {
  name: "MobileDropdown",
  components: {
    NavItem,
    SearchBar,
    DropDown,
    MobileMenuItem,
  },
  props: {
    isActive: {
      type: Boolean,
    },
  },
  created() {
    this.fetchGroup();
    const checker = this.headerLinks.findIndex(
      (item) => item.path == this.$route.params.name
    );
    checker == -1 ? (this.current = 0) : (this.current = checker);
  },
  computed: {
    headerLinks() {
      return this.$store.getters.headerBottomItems;
    },

    groupList() {
      return this.$store.state.group;
    },
  },

  data() {
    return {
      current: 0,
      group: "",
    };
  },
  watch: {
    current() {
      this.fetchGroup();
    },
  },
  methods: {
    clickHandler(payload) {
      this.current = payload;
    },
    async fetchGroup() {
      this.group = this.headerLinks[this.current].path;
      this.loading = true;
      await this.$store.dispatch("getGroup", this.group);
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.mobile-dropdown {
  display: none;
  width: 100%;
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
  /* bottom: 0; */
  height: 100vh;
  padding: 1rem;
  background: var(--footer-bg-color);
  padding-bottom: 2em;
  font-size: 0.875rem;
}

.mobile-dropdown__container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.menuOpen {
  display: block;
}

.mobile-dropdown__info {
  margin-top: 1.5rem;
  margin-left: -1rem;
  margin-right: -1rem;
  display: flex;
  /* justify-content: space-between; */

  border-top: 2px solid var(--search-bar-color);
}

.mobile-dropdown__sections {
  width: calc(100% / 2);
  list-style: none;
}

.mobile-dropdown__list {
  width: calc(100% / 2);
  list-style: none;
  height: 100vh;
  background: #fff;
  /* width: 100%; */
}

@media screen and (min-width: 65rem) {
  .mobile-dropdown {
    display: none;
  }
}
</style>
