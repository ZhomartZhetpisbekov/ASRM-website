<template>
  <div @click="goToArticle" class="similar-news-box">
    <p>
      {{ title }}
    </p>
    <span class="similar-news-date"> {{ date }}</span>
  </div>
</template>

<script>

export default {
  name: 'SimilarNewsBox',
  props: {
    title: {
      type: String
    },
    date: {
      type: String
    },
    id: {
      type: Number,
    }
  },
  methods: {
    goToArticle() {
      this.$router.push(`/news/${this.id}`);
    }
  }
}
</script>

<style scoped>
  .similar-news-box {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    cursor: pointer;
  }

  p {
    font-family: 'Gotham Pro Med';
  }

  .similar-news-date {
    font-size: 1rem;
    color: #70A2A7;
  }
  @media only screen and (max-width: 40rem) {
    .similar-news-date {
      font-size: 0.75rem;
    }
  }
</style>