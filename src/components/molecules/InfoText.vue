<template>
  <div v-if="category" class="info-text">
    <h1 class="info-text_title">{{ category.title }}</h1>
    <img :src="`${imgPath}${category.main_image}`" alt="" />
    <div
      class="parsed-html"
      :class="{ active: isShortText }"
      v-html="category.text"
    ></div>
    <div v-if="isShortText" class="become-member">
      <h3>Continue reading</h3>
      <p>Become cucumber to read more</p>
      <a>Click here</a>
    </div>
    <div v-if="category.pdfs.length > 0">
      <a
        v-for="(item, index) in category.pdfs"
        :key="index"
        :href="`${imgPath}${item.pdf}`"
      >
        {{ item.pdf }}
      </a>
      <vue-pdf-embed
        v-for="(item, index) in category.pdfs"
        :key="index"
        :source="`${imgPath}${item.pdf}`"
      />
    </div>
  </div>
</template>

<script>
import api from "../../services/api";
import VuePdfEmbed from "vue-pdf-embed/dist/vue2-pdf-embed";

export default {
  name: "InfoText",
  components: { VuePdfEmbed },
  props: {
    category: {
      type: Object,
    },
  },
  computed: {
    imgPath() {
      return `${api.defaults.baseURL}`;
    },
    isShortText() {
      return !this.$store.state.isPremiumUser && this.category.paid;
    }
  },
  mounted() {
    console.log(this.category);
  },
};
</script>

<style scoped>
.info-text {
  color: var(--text-color);
  font-family: "Gotham Pro";
}
.info-text_title {
  font-family: "Gotham Pro Bold";
  font-size: 2rem;
  /* margin-top: 0.5rem; */
  margin-bottom: 2rem;
}

img {
  width: 100%;
}

.parsed-html {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  line-height: 1.5rem;
}

.parsed-html >>> img {
  width: 50%;
}

.parsed-html >>> iframe {
  width: 100%;
  aspect-ratio: 16/9;
}

.parsed-html >>> ol,
.parsed-html >>> ul {
  padding: 0 2rem;
}

.parsed-html >>> a {
  text-decoration: underline;
}

.active >>> p:not(:first-child, :nth-child(2)) {
  display: none;
}

.active {
  -webkit-mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 30%, transparent 100%);
  height: 30%;
}

.become-member {
  padding: 2rem 2rem;
  background-color: #fdf1e8;
  border: 1px solid #f38023;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #000;
}

.become-member h3 {
  font-size: 1.8rem;
  color: #f38023;
}

.become-member a {
  width: auto;
  margin: auto;
  padding: 15px 40px;
  background: #00acb1;
  color: #fff;
  border-radius: 30px;
  transition: all 0.25s ease;
}

.become-member a:hover {
  color: #fff;
  transform: scale(1.1, 1.1);
}

</style>