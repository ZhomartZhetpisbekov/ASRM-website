<template>
  <div class="single-news-container">
    <div @click="goToArticle" class="img-container">
      <img :src="imgPath" alt="" />
      <span class="mobile-view-date">{{ date }}</span>
    </div>
    <div @click="goToArticle" class="text-block">
      <h3>{{ title }}</h3>
      <p>
        {{ shortText.slice(0, 250) + ".." }}
      </p>
      <span>{{ date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleNews",
  props: {
    imgPath: {
      type: String,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    date: {
      type: String,
    },
    isLeadNews: {
      type: Boolean,
    },
    articleId: {
      type: Number,
    },
    ind: {
      type: Number,
    },
    type: {
      type: String,
    },
  },
  computed: {
    shortText() {
      return new DOMParser()
        .parseFromString(this.text, "text/html")
        .querySelector("p").textContent;
    },
    // category() {
    //   return this.$router.currentRoute.params.category;
    // }
  },
  methods: {
    goToArticle() {
      if (this.ind != null) {
        this.$router.push({
          name: "EventArticle",
          params: { category: this.type, article: this.articleId },
        });
      } else {
        this.$router.push(`/news/${this.articleId}`);
      }
    },
  },
};
</script>

<style scoped>
/* Single News */
h3 {
  font-size: 2rem;
  color: #005963;
  line-height: 30px;
}

span {
  color: #70a2a7;
}
.single-news-container {
  /* border: 1px solid green; */
  display: flex;
  margin-bottom: 2rem;
}

.img-container {
  width: 35%;
  /* height: 15rem; */
  cursor: pointer;
}

.img-container img {
  width: 100%;
  /* max-height: 15rem; */
  height: 100%;
  object-fit: cover;
}

.img-container .mobile-view-date {
  display: none;
}

.text-block {
  width: 65%;
  padding-left: 2rem;
  /* padding: 0.5rem 0 0.5rem 1.5rem; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  cursor: pointer;
}

/* @media screen and (max-width: 65rem) {
  .single-news-block {
    padding: 0 2rem;
  }
} */

@media screen and (max-width: 40rem) {
  .single-news-container {
    /* padding: 0 1rem 0 2rem; */
    /* margin: 0 1rem 0 2rem; */
    display: flex;
    gap: 0.75rem;
  }
  h3 {
    font-size: 1rem;
  }
  span {
    font-size: 0.75rem;
  }
  .img-container {
    /* margin-left: 2rem; */
    position: relative;
    height: auto;
    /* width: 10rem; */
  }
  .img-container img {
    width: 6rem;
    height: 4rem;
  }
  .text-block {
    height: 4rem;
    width: 100%;
    padding: 0;
    line-height: 1.125rem;
    /* padding-left: 1.5rem; */
    justify-content: flex-start;
  }
  .text-block h3 {
    height: 4rem;
    /* width: auto; */
    padding: 0;
    line-height: 1.125rem;
    /* padding-left: 1.5rem; */
    justify-content: flex-start;
  }

  .text-block p,
  span {
    display: none;
  }
  .img-container .mobile-view-date {
    display: block;
    position: absolute;
    /* top: 0; */
    width: 10rem;
  }
}
</style>
