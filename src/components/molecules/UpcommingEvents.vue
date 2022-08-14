<template>
  <div class="upcomming-events-container">
    <h2>{{ $t("upcommingEvents") }}</h2>
    <div class="events-container">
      <a @click="scroll_left"
        ><img src="../../assets/HomePage/left.png" alt=""
      /></a>
      <div class="scrollable-container">
        <slider
          ref="slider"
          :options="options"
        >
          <slideritem
            v-for="(item, index) in events"
            :key="index"
            class="custom-slider-item"
          >
            <EventItem :eventInfo="item" />
          </slideritem>
          <div slot="loading">loading...</div>
        </slider>
      </div>
      <a @click="scroll_right"
        ><img src="../../assets/HomePage/right.png" alt=""
      /></a>
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
import EventItem from "../atoms/EventItem.vue";

export default {
  name: "UpcommingEvents",
  props: {},
  data() {
    return {
      //Slider configuration [obj]
      options: {
        currentPage: 0,
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 300,
        infinite: 3,
        slidesToScroll: 1,
        autoplay: 5000,
        loop: true,
        pagination: false,
      },
    };
  },
  computed: {
    events() {
      return this.$store.state.group;
    }
  },
  mounted() {
    this.fetchGroup();
  },
  methods: {
    scroll_left() {
      this.$refs.slider.$emit("slidePre");
    },
    scroll_right() {
      this.$refs.slider.$emit("slideNext");
    },
    async fetchGroup() {
      // this.group = this.$router.currentRoute.params.name;
      this.loading = true;
      await this.$store.dispatch("getGroup", 'events');
      this.loading = false;
    },
  },
  components: {
    EventItem,
    slider,
    slideritem,
  },
};
</script>

<style scoped>
/* Upcomming Events */
.upcomming-events-container {
  width: 100%;
  margin-bottom: 70px;
}
.events-container {
  display: flex;
  justify-content: center;
}

a {
  margin-top: 115px;
}

a img {
  width: 30px;
}

.scrollable-container {
  width: 86%;
}

h2 {
  padding: 0 8rem;
  margin-bottom: 25px;
  color: #f38023;
}

.custom-slider-item {
  width: 33%;
}

@media only screen and (max-width: 65rem) {
  h2 {
    padding: 0;
    width: 83%;
    margin: 0 auto 25px;
  }
}

@media only screen and (max-width: 720px) {
  .custom-slider-item {
    width: 80%;
  }
}

@media only screen and (max-width: 530px) {
  .custom-slider-item {
    width: 100%;
  }
}
</style>