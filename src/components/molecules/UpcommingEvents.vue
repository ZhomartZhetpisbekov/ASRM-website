<template>
  <div class="upcomming-events-container">
    <h2>{{ $t("upcommingEvents") }}</h2>
    <div class="events-container">
      <a @click="scroll_left"
        ><img src="../../assets/HomePage/left.png" alt=""
      /></a>
      <div class="scrollable-container">
        <slider ref="slider" :options="options">
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
    },
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
      await this.$store.dispatch("getGroup", "news");
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
  padding: 0 8rem;
  width: 100%;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.events-container {
  display: flex;
  justify-content: center;
  position: relative;
  height: 25rem;
  width: 100%;
}

a:first-child {
  /* margin-top: 115px; */
  position: absolute;
  left: -2rem;
  top: 50%;
  bottom: 50%;
}

a:last-child {
  position: absolute;
  right: -2rem;
  top: 50%;
  bottom: 50%;
}

a img {
  width: 1.5rem;
}

/* .scrollable-container {
  width: 86%;
} */

h2 {
  width: 100%;
  text-align: left;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #f38023;
}

.custom-slider-item {
  width: 34%;
}

@media only screen and (max-width: 65rem) {
  .custom-slider-item {
    width: 52%;
  }
  .upcomming-events-container {
    padding: 0 3rem 0 2rem;
  }
  a:first-child {
    left: -1.5rem;
  }

  a:last-child {
    right: -1.5rem;
  }
  .scrollable-container {
    width: 95%;
  }
}

/* @media only screen and (max-width: 720px) {
  .custom-slider-item {
    width: 80%;
  }
} */

@media only screen and (max-width: 40rem) {
  .scrollable-container {
    width: 30rem;
  }
  .custom-slider-item {
    width: 30rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  .upcomming-events-container {
    padding: 0 2.5rem 0 2rem;
  }
}
@media only screen and (max-width: 30rem) {
  .scrollable-container {
    width: 17.5rem;
    /* height: 30rem; */
  }
  .custom-slider-item {
    width: 17.5rem;
    /* height: 30rem; */
  }
}
</style>
