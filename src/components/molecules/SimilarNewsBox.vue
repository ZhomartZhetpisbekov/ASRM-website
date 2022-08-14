<template>
  <div @click="goToArticle" class="similar-news-box">
    <p>
      {{ title }}
    </p>
    <span>{{ date }}</span>
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
    gap: 5px;
    cursor: pointer;
  }

  p {
    font-family: 'Gotham Pro Med';
  }

  span {
    font-size: 1rem;
    color: #70A2A7;
  }
</style>