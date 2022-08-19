<template>
  <div v-if="category.length > 0" class="info-text">
    <h1 class="info-text_title">{{ category[0].type }}</h1>
    <SingleNews
      v-for="(item, index) in category.slice(0, newsCount)"
      :key="index"
      :articleId="item.id"
      :imgPath="`${imgPath}${item.main_image}`"
      :title="item.title"
      :text="item.text"
      :date="item.date"
      :ind="index"
      :type="item.type"
    />

    <!-- <div class="more-news-btn">
      <a @click="showMoreNews">Показать еще</a>
    </div> -->
  </div>
</template>

<script>
import api from "../../services/api";
import SingleNews from "./SingleNews.vue";

export default {
  name: "EventsInfoText",
  components: { SingleNews },
  props: {
    category: {
      type: Array,
    },
  },
  data() {
    return {
      newsCount: 3,
    }
  },
  computed: {
    imgPath() {
      return `${api.defaults.baseURL}`;
    },
  },
  mounted() {
    () => {this.newsCount = 0};
  },
  methods: {
    showMoreNews() {
      this.newsCount += 3;
    }
  },
};
</script>

<style scoped>
.info-text {
  color: var(--text-color);
  font-family: "Gotham Pro";
  line-height: 1.3rem;
  /* letter-spacing: 1.1px; */
}
.info-text_title {
  font-family: "Gotham Pro Bold";
  font-size: 2rem;
  /* margin-top: 0.5rem; */
  margin-bottom: 2rem;
}

.more-news-btn {
  width: 100%;
  /* padding: 0 8rem; */
  /* margin: auto; */
  display: flex;
  flex-direction: row-reverse;
  /* margin-bottom: 40px; */
}

.more-news-btn a {
  padding: 10px 20px;
  background: #00acb1;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
}
</style>