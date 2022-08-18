<template>
  <div class="article-page">
    <div class="article-page-container">
      <div class="article-container">
        <img :src="this.apiUrl + article.main_image" alt="" />
        <div class="text-block">
          <h3>{{ article.title }}</h3>
          <span>{{ article.date }}</span>
          <div class="parsed-html" v-html="article.text"></div>
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

export default {
  name: "EventArticlePage",
  data() {
    return {
      newsCount: 3,
    };
  },
  computed: {
    apiUrl() {
      return `${api.defaults.baseURL}`;
    },
    articleId() {
      return this.$route.params.article;
    },
    article() {
      return this.$store.state.categoryDetails.find((elem) => elem.id == this.$route.params.article);
    }
  },
  mounted() {
    console.log(this.$route.params.category);
    console.log(this.$route.params.article);
    () => {
      this.newsCount = 3;
    };
  },
  methods: {
    goBack() {
      this.$router.back();
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
  padding: 0 20rem;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.text-block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.article-container img {
  width: 100%;
  height: 24rem;
  object-fit: cover;
}

.go-back-btn {
  margin: 2rem 0;
}

.go-back-btn a {
  color: #005963;
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
}
</style>