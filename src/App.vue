<template>
  <section>
    <BaseHeader />
    <router-view />
    <BaseFooter />
  </section>
</template>

<script>
import BaseHeader from "./components/UI/Header.vue";
import BaseFooter from "./components/UI/Footer.vue";
import i18n from "./plugins/i18n";

export default {
  name: "App",

  components: {
    BaseHeader,
    // HomePage,
    BaseFooter,
  },
  mounted() {
    i18n.locale = this.$store.state.currentLanguage;
    localStorage.setItem('currentLanguage', i18n.locale);
    // console.log('i18n locale:', i18n.locale);
  },

  data: () => ({
    //
  }),
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"); */
/* @import url("http://fonts.cdnfonts.com/css/gotham-pro?styles=24950,24948,24951,24952,14946,24949,24953"); */
/* @import url(//db.onlinewebfonts.com/c/07a38bbad54db72a40b406bed1c72f53?family=Gotham+Pro); */
@import "./assets/variables.css";
/* 
@font-face {
  font-family: "Gotham Pro";
  src: url("//db.onlinewebfonts.com/t/07a38bbad54db72a40b406bed1c72f53.eot");
  src: url("//db.onlinewebfonts.com/t/07a38bbad54db72a40b406bed1c72f53.eot?#iefix")
      format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/07a38bbad54db72a40b406bed1c72f53.woff2")
      format("woff2"),
    url("//db.onlinewebfonts.com/t/07a38bbad54db72a40b406bed1c72f53.woff")
      format("woff"),
    url("//db.onlinewebfonts.com/t/07a38bbad54db72a40b406bed1c72f53.ttf")
      format("truetype"),
    url("//db.onlinewebfonts.com/t/07a38bbad54db72a40b406bed1c72f53.svg#Gotham Pro")
      format("svg");
} */

@font-face {
  font-family: "Gotham Pro Med";
  src: url("assets/Gotham_Pro_Font/GothaProMed.otf");
}

@font-face {
  font-family: "Gotham Pro Bold";
  src: url("assets/Gotham_Pro_Font/GothaProBol.otf");
}

@font-face {
  font-family: "Gotham Pro";
  src: url("assets/Gotham_Pro_Font/GothaProReg.otf");
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Gotham Pro Med", "Gotham Pro", "Gotham Pro Bold", sans-serif;
  width: 100vw;
  overflow-x: hidden;
  background: var(--bg-color);
  color: var(--bg-color);
  display: flex;
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: #000;
}
</style>
