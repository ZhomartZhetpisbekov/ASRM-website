<template>
  <nav>
    <ul :class="{ squeezedList: scrolledDown }">
      <div class="squeezedSpan" v-if="scrolledDown">
        <img class="squeezedLogo" :src="require('@/assets/Header/logo.png')" />
      </div>
      <NavItem
        v-for="(item, ind) in $t('header.navBottom')"
        :key="ind"
        :styling="!scrolledDown ? 'bottom' : 'bottomSqueezed'"
        :title="item"
        :pagePath="headerBottomLinks[ind].path"
        :routerName="headerBottomLinks[ind].routerName"
      />
    </ul>
  </nav>
</template>

<script>
import NavItem from "../atoms/NavItem.vue";

export default {
  name: "HeaderBottom",
  components: {
    NavItem,
  },
  props: {
    scrolledDown: {
      type: Boolean,
    },
  },
  computed: {
    headerBottomLinks() {
      return this.$store.getters.headerBottomItems;
    },
  },
  data() {
    return {
      pageNames: [
        "Общество",
        "События",
        "Образование",
        "Клинические протоколы",
        "Новости в медицине",
      ],
      pageActive: [false, false, true],
      pagePaths: [
        "obschestvo",
        "sobytia",
        "obrazovanie",
        "clinicalprotocols",
        "medicinicnews",
      ],
      pageImgs: ["Home", "Order", "Rakhmet"],
    };
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  transition: all 0.375s ease;
}
ul {
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  transition: all 0.175s ease;
  /* margin: 1rem 4rem 1.25rem 4rem; */
}

li {
  display: flex;
}

.squeezedList {
  /* margin: 0 4rem 1rem 4rem; */
  /* margin-bottom: 1rem; */
  margin-top: 0;
}

.squeezedSpan {
  width: 4rem;
  height: 4rem;
  position: relative;
}

.squeezedLogo {
  position: absolute;
  bottom: 2rem;
  /* left: 1rem; */
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  object-position: 0%;
  border-radius: 50%;
}

@media screen and (max-width: 65rem) {
  ul {
    display: none;
  }
}
</style>
