<template>
  <div class="news-page">
    <!-- <div class="banner">
      <h2>Новости</h2>
    </div> -->
    <h2>{{ $t('header.navBottom[4]') }}</h2>

    <div v-if="news.length > 0" class="news-container">
      <LeadNews
        :articleId="news[0].id"
        :imgPath="`${imgPath}${news[0].main_image}`"
        :title="news[0].title"
        :text="news[0].text"
        :date="news[0].date"
      />

      <SingleNews
        v-for="(item, index) in news.slice(1, newsCount)"
        :key="index"
        :articleId="item.id"
        :imgPath="`${imgPath}${item.main_image}`"
        :title="item.title"
        :text="item.text"
        :date="item.date"
      />
    </div>

    <div class="more-news-btn">
      <a @click="showMoreNews">Показать еще</a>
    </div>
    <router-view></router-view>

    <BecomeMember />
  </div>
</template>

<script>
import SingleNews from "../molecules/SingleNews.vue";
import LeadNews from "../molecules/LeadNews.vue";
import BecomeMember from "../molecules/BecomeMember.vue";
import api from "../../services/api";

export default {
  name: "NewsPage",
  components: { LeadNews, SingleNews, BecomeMember },
  data() {
    return {
      newsCount: 4,
    }
  },
  mounted() {
    this.fetchNews();
    ()=>{
      this.newsCount = 4;
    }
  },
  methods: {
    async fetchNews() {
      this.loading = true;
      await this.$store.dispatch("getNews"); 

      this.loading = false;
    },
    showMoreNews() {
      this.newsCount += 3;
    } 
  },
  computed: {
    imgPath() {
      return `${api.defaults.baseURL}`
    },
    news() {
      return this.$store.state.news
    }
  },
};
</script>

<style scoped>
/* News Page */
.news-page {
  margin-top: 13rem;
  width: 100%;
  color: #000;
  font-family: 'Gotham Pro';
  letter-spacing: 1.1px;
  line-height: 23px;
}

h2 {
  /* width: 83%; */
  padding: 0 8rem;
  margin-bottom: 1rem;
  font-size: 42px;
  color: #005963;
}

.news-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.more-news-btn {
  width: 100%;
  padding: 0 8rem;
  /* margin: auto; */
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 40px;
}

.more-news-btn a {
  padding: 10px 20px;
  background: #00ACB1;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
}

@media only screen and (max-width: 65rem) {
  h2 {
    padding: 0 2rem;
  }

  .news-page {
    margin-top: 8rem;
  }
}
</style>
