<template>
  <div class="languages">
    <div
      class="languages_language"
      @click="expand"
      :class="{ opened: this.expanded }"
    >
      <img
        :src="require('@/assets/Header/' + languages[0].link + '.svg')"
        class="languages-logo"
      />
      <p>{{ languages[0].name }}</p>
      <img
        :src="require('@/assets/Header/expand-more_icon.svg')"
        class="languages-expand"
        :class="{ compress: this.expanded }"
      />
    </div>
    <div class="dropdown-content" :class="{ open: this.expanded }">
      <div class="languages_language" @click="changeLang(1)">
        <img
          :src="require('@/assets/Header/' + languages[1].link + '.svg')"
          class="languages-logo"
        />
        <p>{{ languages[1].name }}</p>
      </div>
      <div class="languages_language" @click="changeLang(2)">
        <img
          :src="require('@/assets/Header/' + languages[2].link + '.svg')"
          class="languages-logo"
        />
        <p>{{ languages[2].name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "../../plugins/i18n";

export default {
  name: "DropDown",
  data() {
    return {
      expanded: false,
      languages: [
        { link: "ru", name: "Русский" },
        { link: "kz", name: "Қазақ" },
        { link: "en", name: "English" },
      ],
    };
  },
  methods: {
    expand() {
      this.expanded = !this.expanded;
    },
    changeLang(num) {
      this.expanded = false;
      const copied = this.languages[num];
      this.languages[num] = this.languages[0];
      this.languages[0] = copied;
      // i18n.locale = this.languages[0].link;
      this.$store.commit("SET_LANG", this.languages[0].link);
      i18n.locale = this.$store.state.currentLanguage;
      this.$router.go();
    },
  },
  created() {
    if (this.$store.state.currentLanguage == "en") {
      this.languages = [
        { link: "en", name: "English" },
        { link: "ru", name: "Русский" },
        { link: "kz", name: "Қазақ" },
      ];
    }
    if (this.$store.state.currentLanguage == "kz") {
      this.languages = [
        { link: "kz", name: "Kazakh" },
        { link: "en", name: "English" },
        { link: "ru", name: "Русский" },
      ];
    }
  },
};
</script>

<style scoped>
.languages {
  font-size: 0.875rem;
  height: 2rem;
  width: 7.75rem;
  font-family: "Gotham Pro";
  background: var(--search-bar-color);
  color: var(--text-color);
}

/* .languages:hover .dropdown-content {
  display: block;
} */

.opened {
  background: var(--secondary-color);
  /* border: 1px solid var(--text-color); */
  color: var(--bg-color);
}

.languages_language {
  cursor: pointer;
  padding-left: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  /* left: 1rem; */
  /* min-width: 160px; */
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
  border-bottom: 1px solid var(--text-color);
  z-index: 1;
}

.dropdown-content div {
  padding: 0 0.5rem;
  border-top: 1px var(--text-color) solid;
  border-left: 1px var(--text-color) solid;
  border-right: 1px var(--text-color) solid;
  width: 7.75rem;
}

.open {
  display: block;
}

.languages-logo {
  width: 1.375rem;
  height: 1.375rem;
  /* aspect-ratio: 1/1; */
  object-fit: cover;
  object-position: 46%;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.languages-expand {
  width: 1.875rem;
  transition: all 0.375s ease;
}

.compress {
  transform: rotate(180deg);
}
</style>
