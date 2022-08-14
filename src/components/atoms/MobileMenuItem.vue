<template>
  <li :class="{ current: currentSection }" @click="clickHandler">
    <p class="mobile-menu__item" :class="styling">{{ sectionName }}</p>
  </li>
</template>

<script>
export default {
  name: "MobileMenuItem",
  props: {
    currentSection: {
      type: Boolean,
    },
    sectionName: {
      type: String,
    },
    styling: {
      type: String,
    },
    id: {
      type: Number,
    },
    pagePath: {
      type: String,
    },
    pageName: {
      type: String,
    },
  },
  methods: {
    clickHandler() {
      if (this.styling == "left") {
        this.$emit("changeCurrentSection", this.id);
        if (
          this.pagePath == "news" &&
          this.$router.currentRoute.name != "News"
        ) {
          this.$router.push({
            name: "News",
          });
          this.$router.go();
        }
      } else {
        if (
          this.$router.currentRoute.path !==
          "/" + this.pageName + "/" + this.pagePath
        ) {
          console.log(this.pageName, this.pagePath);
          this.$router.push(`/${this.pageName}/${this.pagePath}`);

          this.$router.go();
        }
      }
    },
  },
};
</script>

<style>
.mobile-menu__item:hover {
  cursor: pointer;
}

.mobile-menu__item {
  line-height: 1.5rem;
}
.mobile-menu__item.left {
  font-size: 0.875rem;
  padding: 1rem;
  color: var(--text-color);
  border-bottom: 1px solid var(--footer-bg-color);
  font-family: "Gotham Pro Med";
}

.mobile-menu__item.right {
  font-size: 0.875rem;
  background: #fff;
  color: var(--text-color);
  padding: 1rem;
  border-bottom: var(--search-bar-color) 1px solid;
  font-family: "Gotham Pro";
}

.current {
  background: var(--text-color);
  color: #fff;
}

.current > .left {
  color: #fff;
}
</style>
