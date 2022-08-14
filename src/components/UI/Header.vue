<template>
  <header class="header" :class="{ squeeze: scrolledDown }">
    <div class="header-content">
      <HeaderTop />
      <HeaderMiddle
        v-if="!scrolledDown"
        @openMenu="(payload) => toggleMenu(payload)"
      />
      <HeaderBottom :scrolledDown="scrolledDown" />
      <MobileDropdown :isActive="isActive" />
    </div>
  </header>
</template>

<script>
import HeaderTop from "../molecules/HeaderTop.vue";
import HeaderBottom from "../molecules/HeaderBottom.vue";
import HeaderMiddle from "../molecules/HeaderMiddle.vue";
import MobileDropdown from "../molecules/MobileDropdown.vue";

export default {
  name: "BaseHeader",
  components: {
    HeaderTop,
    HeaderMiddle,
    HeaderBottom,

    MobileDropdown,
  },
  props: {
    title: {
      type: String,
    },
  },

  data() {
    return {
      isActive: false,

      scrolledDown: false,
    };
  },
  mounted() {
    document.addEventListener("resize", this.handleResize(window.innerWidth));
    document.addEventListener("scroll", () => {
      this.handleScroll(window.scrollY);
    });
  },
  beforeDestroy() {
    document.removeEventListener("scroll", () => {
      this.handleScroll(window.scrollY);
    });
    window.removeEventListener("resize", this.handleResize(window.innerWidth));
  },
  methods: {
    toggleMenu(payload) {
      this.isActive = payload;
    },
    handleScroll(payload) {
      if (payload >= 150 && window.innerWidth > 1040) {
        this.scrolledDown = true;
      } else {
        this.scrolledDown = false;
      }
    },
    handleResize(payload) {
      if (payload < 1040) {
        this.scrolledDown = false;
      }
    },
  },
};
</script>

<style>
/*Header*/
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 12rem;
  display: flex;
  z-index: 2;
  justify-content: center;
  background: var(--bg-color);
  color: var(--text-color);
  font-weight: 400;
}

.header-content {
  padding: 0 8rem;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.squeeze {
  height: 7.25rem;
}

@media screen and (max-width: 65rem) {
  .header {
    height: 6rem;
    border-bottom: 3px solid var(--search-bar-color);
  }
  .header-content {
    height: 6rem;
    justify-content: center;
    padding: 0rem;
  }
}
</style>
