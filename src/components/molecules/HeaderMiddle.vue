<template>
  <div class="header-middle">
    <div class="logo-content">
      <img
        class="logo"
        :src="require('@/assets/Header/logo2.png')"
        alt=""
        @click="
          () => {
            if (currentRouteName !== 'Home') this.$router.push('/');
          }
        "
      />
      <h1
        class="header-middle_name"
        @click="
          () => {
            if (currentRouteName !== 'Home') this.$router.push('/');
          }
        "
      >
        {{ $t("footer.title") }}
      </h1>
    </div>
    <SearchBar />
    <div class="icon-one" :class="{ active: isActive }" @click="clickHandler">
      <div class="hamburger hamburger-one"></div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../atoms/SearchBar.vue";
export default {
  name: "HeaderMiddle",
  components: {
    SearchBar,
  },
  props: {
    active: {
      type: Boolean,
    },
    styling: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    clickHandler() {
      this.isActive = !this.isActive;
      this.$emit("openMenu", this.isActive);
    },
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.header-middle {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  transition: all 0.375s ease;
  /* padding: 0 3rem; */
}

.logo-content {
  display: flex;
  align-items: flex-end;
}

.logo {
  height: 4rem;
  aspect-ratio: 1/1;
  margin-right: 1rem;
}
.header-middle_name {
  font-family: "Gotham Pro Bold";
  font-size: 3rem;
  letter-spacing: 0;
  color: var(--main-text-color);
  height: 2.25rem;
  margin-right: 3rem;
}

.logo:hover,
.header-middle_name:hover {
  cursor: pointer;
}

/* .icon {
  position: absolute;
  height: 25px;
  top: 7px;
  right: 8px;
} */

.icon:hover {
  cursor: pointer;
}

.header-middle ul {
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  transition: all 0.375s ease;
}

.header-middle li > img {
  height: 1.125em;
}
.header-middle li {
  margin-left: 30px;
}
.hamburger {
  display: none;
  top: 50%;
  left: 10%;
  width: 2rem;
  height: 0.25rem;
  background: var(--footer-border-color);
  position: relative;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
  transition: 0.5s;
}

.hamburger:before {
  top: -0.75rem;
}

.hamburger:after {
  top: 0.75rem;
}

.icon-one {
  position: relative;
  margin-left: 1em;
  cursor: pointer;
  padding: 1em 0;
  display: none;
  color: var(--footer-border-color);
}

.hamburger-one:before,
.hamburger-one:after {
  content: "";
  position: absolute;
  width: 2rem;
  height: 0.25rem;
  background: var(--footer-border-color);
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
  transition: 0.5s;
}

.icon-one.active .hamburger-one {
  background: rgba(0, 0, 0, 0);
  /* background: var(--text-color); */
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0); */
}

.icon-one.active .hamburger-one:before {
  top: 0;
  transform: rotate(45deg);
}

.icon-one.active .hamburger-one:after {
  top: 0;
  transform: rotate(135deg);
}

.squeezeMenu > li,
.squeezeMenu > div {
  display: none;
}

.squeezeLogo {
  width: 4.5rem;
  height: 4.5rem;
  object-fit: cover;
  object-position: 0%;
}

@media screen and (max-width: 65rem) {
  .header-middle li {
    display: none;
  }
  .icon-one {
    display: block;
  }
  .hamburger {
    display: block;
  }
  .logo {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.5rem;
  }
  .header-middle {
    justify-content: space-between;
    padding: 0 2rem;
    align-items: center;
  }
  /*
  .header-middle ul {
    width: 60%;
  } */
  .header-middle_name {
    font-size: 2rem;
    height: 1.675rem;
  }
  .searchbar {
    /* width: 100%;
    margin-left: 1.25rem; */
    display: none;
  }
}

@media screen and (max-width: 40rem) {
  .header-middle {
    padding: 0 1rem;
  }
}
</style>
