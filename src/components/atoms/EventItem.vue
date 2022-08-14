<template>
  <div class="event-container" @click="goToEvents">
    <!-- <a href="" class="event-link-wrapper" style="border: 1px solid purple"> -->
    <img :src="`${imgPath}${eventInfo.main_image}`" />
    <div class="text-box">
      <p>
        <!-- {{ eventInfo[2] }} -->
        {{ eventInfo.announcement }}
      </p>
      <p class="read-more">Read More...</p>
    </div>
    <!-- </a> -->
  </div>
</template>

<script scoped>
import api from '../../services/api';

export default {
  name: "EventItem",
  props: {
    eventInfo: {
      type: Object,
    },
  },
  computed: {
    imgPath() {
      return `${api.defaults.baseURL}`
    },
  },
  methods: {
    goToEvents() {
      this.$router.push(`events/${this.eventInfo.category}`);
    }
  },
};
</script>

<style scoped>
/* Event Item */

.event-container {
  width: 90%;
  text-align: left;
  cursor: pointer;
}

img {
  width: 100%;
  display: block;
}

.text-box {
  width: 100%;
  min-height: 157px;
  height: auto;
  padding: 15px 20px;
  background: #f0f5f6;
  color: #000;
  font-size: 1rem;
}

.text-box p {
  width: 100%;
  word-break: break-word;
  white-space: normal;
}

/* p {
  background: #f0f5f6;
  color: #000;
  padding: 15px 20px;
  font-size: 1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: auto;
  height: 60px;
  width: 100%;
} */

.read-more {
  color: #17a2ab;
}
</style>