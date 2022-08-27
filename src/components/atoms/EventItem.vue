<template>
  <div class="event-container" @click="goToEvents">
    <!-- <a href="" class="event-link-wrapper" style="border: 1px solid purple"> -->
    <img :src="`${imgPath}${eventInfo.main_image}`" />
    <div class="text-box">
      <p>
        <!-- {{ eventInfo[2] }} -->
        <!-- {{ eventInfo.announcement }} -->
        {{ eventInfo.title }}.
        <span class="read-more">Read More...</span>
      </p>
    </div>
    <!-- </a> -->
  </div>
</template>

<script scoped>
import api from "../../services/api";

export default {
  name: "EventItem",
  props: {
    eventInfo: {
      type: Object,
    },
  },
  computed: {
    imgPath() {
      return `${api.defaults.baseURL}`;
    },
  },
  methods: {
    goToEvents() {
      // this.$router.push(`events/${this.eventInfo.category}`);
      this.$router.push(`news/${this.eventInfo.id}`);
    },
  },
};
</script>

<style scoped>
/* Event Item */

.event-container {
  width: 100%;
  margin-right: 2rem;
  text-align: left;
  cursor: pointer;
}

img {
  width: 100%;
  min-height: 15rem;
  height: 15rem;
  object-fit: cover;
  display: block;
}

.text-box {
  width: 100%;
  /* min-height: 157px; */
  height: 8rem;
  padding: 1rem 0.5rem 1.5rem 1rem;
  background: #f0f5f6;
  color: #005963;
  font-size: 1rem;
  border: 1px solid #00acb1;
}

.text-box p {
  font-family: "Gotham Pro";
  line-height: 1.25rem;
  width: 100%;
  word-break: break-word;
  white-space: normal;
}

.read-more {
  font-family: "Gotham Pro Med";
  color: var(--text-color);
}

@media screen and (max-width: 80rem) {
  .text-box {
    height: 9rem;
  }
}

@media screen and (max-width: 65rem) {
  img {
    height: 11rem;
  }
  .text-box {
    height: 8rem;
  }
}

@media screen and (max-width: 40rem) {
  .event-container {
    margin: 0;
  }
  .text-box {
    height: 9rem;
  }
}
</style>
