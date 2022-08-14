<template>
  <div class="single-news-block">
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
  },
  data() {
    return {
      htmlString: this.text,
      shortText: new DOMParser()
        .parseFromString(this.text, "text/html")
        .querySelector("p").textContent,
    };
  },
  methods: {
    goToArticle() {
      this.$router.push(`/news/${this.articleId}`);
    },
  },
};
</script>

<style scoped>
/* Single News */
h3 {
  font-size: 1.8rem;
  color: #005963;
  line-height: 30px;
}

span {
  color: #70a2a7;
}
.single-news-block {
  /* border: 1px solid green; */
  padding: 0 8rem;
  display: flex;
  margin-bottom: 2rem;
}

.img-container {
  width: 35%;
  cursor: pointer;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-container .mobile-view-date {
  display: none;
}

.text-block {
  width: 65%;
  padding: 0.5rem 0 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-around;
  cursor: pointer;
}

@media screen and (max-width: 65rem) {
  .single-news-block {
    padding: 0 2rem;
  }
}

@media screen and (max-width: 40rem) {
  /* .single-news-block {
    padding: 0 1rem;
  } */
  h3 {
    font-size: 1rem;
  }
  .img-container img {
    height: 7rem;
  }
  .text-block {
    padding: 0;
    padding-left: 1.5rem;
    justify-content: flex-start;
  }
  .text-block p,
  span {
    display: none;
  }
  .img-container .mobile-view-date {
    display: block;
  }
}
</style>