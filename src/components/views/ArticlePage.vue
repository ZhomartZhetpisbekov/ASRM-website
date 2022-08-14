<template>
  <div class="article-page">
    <div v-if="article.length > 0" class="article-page-container">
      <div class="article-container">
        <img v-if="article.length > 0" :src="this.imgPath" alt="" />
        <div class="text-block">
          <h3>{{ article[0].title }}</h3>
          <span>{{ article[0].date }}</span>
          <div class="parsed-html" v-html="article[0].text"></div>
          <div class="go-back-btn mobile">
            <a @click="goBack">
              <i class="fa-solid fa-arrow-left-long"></i>
              Вернуться на страницу новостей
            </a>
          </div>
        </div>
      </div>
      <div class="similar-news-container">
        <h3>Другие новости</h3>
        <SimilarNewsBox
          class="similar-news-fullscreen"
          v-for="(item, index) in news
            .filter((elem) => elem.id != article[0].id)
            .slice(0, newsCount)"
          :key="index"
          :id="item.id"
          :title="item.title"
          :date="item.date"
        />
        <div class="similar-news-mobile">
          <SingleNews
            v-for="(item, index) in news
              .filter((elem) => elem.id != article[0].id)
              .slice(0, newsCount)"
            :key="index"
            :articleId="item.id"
            :imgPath="`${apiUrl}${item.main_image}`"
            :title="item.title"
            :text="item.text"
            :date="item.date"
          />
        </div>
        <div class="more-news-btn">
          <a @click="showMoreNews">Показать еще</a>
        </div>
      </div>
    </div>
    <div class="go-back-btn">
      <a class="goBack-btn" @click="goBack">
        <i class="fa-solid fa-arrow-left-long"></i>
        Вернуться на страницу новостей
      </a>
    </div>
  </div>
</template>

<script>
import api from "../../services/api";
import SimilarNewsBox from "../molecules/SimilarNewsBox.vue";
import SingleNews from "../molecules/SingleNews.vue";

export default {
  name: "ArticlePage",
  components: {
    SimilarNewsBox,
    SingleNews,
  },
  data() {
    return {
      newsCount: 3,
    };
  },
  computed: {
    news() {
      return this.$store.state.news;
    },
    article() {
      return this.$store.state.article;
    },
    imgPath() {
      return `${api.defaults.baseURL}${this.article[0].main_image}`;
    },
    apiUrl() {
      return `${api.defaults.baseURL}`;
    },
  },
  // mounted() {
  //   this.fetchArticle();
  //   this.fetchNews();
  // },
  mounted() {
    () => {
      this.newsCount = 3;
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchArticle();
        this.fetchNews();
      },
    },
  },
  methods: {
    async fetchArticle() {
      let newId = this.$router.currentRoute.params.id;
      this.loading = true;
      await this.$store.dispatch("getArticle", newId);
      this.loading = false;
    },
    async fetchNews() {
      this.loading = true;
      await this.$store.dispatch("getNews");
      this.loading = false;
    },
    goBack() {
      this.$router.push("/news");
    },
    showMoreNews() {
      this.newsCount += 3;
    },
  },
};
</script>

<style scoped>
h3 {
  font-family: "Gotham Pro Med";
  font-size: 2rem;
  line-height: 2rem;
  color: #005963;
}
span {
  color: #70a2a7;
}

a {
  cursor: pointer;
}
.article-page {
  margin-top: 13rem;
  width: 100%;
  padding: 0 8rem;
  color: #000;
  font-family: "Gotham Pro";
  letter-spacing: 1.1px;
  line-height: 23px;
  text-align: center;
}

.article-page-container {
  display: flex;
  justify-content: space-between;
  text-align: left;
}

.article-container {
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.text-block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.similar-news-container {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.similar-news-mobile {
  display: none;
}

.article-container img {
  width: 100%;
  height: 24rem;
  object-fit: cover;
}

.go-back-btn {
  margin: 2rem 0;
}

.mobile {
  display: none;
}

.go-back-btn a {
  color: #005963;
}

.more-news-btn {
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: 40px;
}

.more-news-btn a {
  padding: 10px 20px;
  background: #00acb1;
  color: #fff;
  border-radius: 30px;
  cursor: pointer;
}

.parsed-html {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  /* color: var(--text-color); */
  text-decoration: underline;
}

@media only screen and (max-width: 65rem) {
  .article-page {
    margin-top: 8rem;
    padding: 0 2rem;
  }
}

@media only screen and (max-width: 40rem) {
  .similar-news-container h3 {
    padding: 0 2rem;
    font-size: 1.5rem;
    color: #f38023;
  }
  .article-page {
    margin-top: 6rem;
    padding: 0;
  }

  .text-block {
    padding: 0 2rem;
  }
  .article-page-container {
    flex-direction: column;
    gap: 2.5rem;
  }

  .article-container {
    width: 100%;
  }

  .similar-news-container {
    width: 100%;
  }

  .similar-news-fullscreen {
    display: none;
  }
  .similar-news-mobile {
    display: block;
  }

  .go-back-btn {
    display: none;
  }

  .mobile {
    margin: 0;
    display: block;
    text-align: right;
  }

  .more-news-btn {
    margin-top: -1rem;
    padding: 0 2rem;
  }
}
</style>