<template>
  <div class="single-news-block">
    <div @click="goToArticle" class="img-container">
      <img :src="imgPath" alt="" />
    </div>
    <!-- <a href="" class="text-container" :class="{ activeText: isLeadNews }"> -->
    <div @click="goToArticle" class="text-block">
      <h3>{{ title }}</h3>
      <p>
        {{ shortText.slice(0, 250) + ".." }}
      </p>
      <span>{{ date }}</span>
    </div>
    <!-- </a> -->
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
  padding: 0 8rem;
  display: flex;
  margin-bottom: 3rem;
}

.img-container {
  width: 55%;
  cursor: pointer;
}

.img-container img {
  width: 100%;
  object-fit: cover;
  height: 22rem;
}

.text-block {
  width: 45%;
  padding: 0.5rem 0 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
}

@media only screen and (max-width: 65rem) {
  .single-news-block {
    padding: 0 2rem;
  }
}

@media only screen and (max-width: 40rem) {
  .single-news-block {
    padding: 0;
    width: 100%;
    flex-direction: column;
    gap: 0.5rem;
  }

  .img-container {
    width: 100%;
  }

  .text-block {
    padding: 0.5rem 2rem;
    width: 100%;
    gap: 1rem;
  }
}

</style>