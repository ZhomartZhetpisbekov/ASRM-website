<template>
  <div class="slider-zhomart-container">
    <slider @tap="onTap()" ref="slider" :options="options">
      <slideritem :style="aboutUsStyles">
        <AboutUsBanner :aboutUs="aboutUsInfo" />
      </slideritem>
      <slideritem :style="aboutUsStyles">
        <LeadEventBanner :leadEvent="leadEventInfo" />
      </slideritem>
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
import AboutUsBanner from "../molecules/AboutUsBanner.vue";
import LeadEventBanner from "../molecules/LeadEventBanner.vue";

export default {
  name: "SliderBanner",
  components: { AboutUsBanner, LeadEventBanner, slider, slideritem },
  computed: {
    aboutUsInfo() {
      return this.$store.state.aboutUs[0];
    },
    leadEventInfo() {
      return this.$store.state.leadEvent[0];
    },
  },
  data() {
    return {
      aboutUsStyles: {
        "font-size": "1rem",
        display: "inline",
        "text-align": "left",
        "white-space": "normal",
      },
      leadEventStyles: {
        "font-size": "1rem",
        display: "inline",
        "white-space": "normal",
      },
      options: {
        currentPage: 1,
        pagination: true,
        thresholdDistance: 100,
        thresholdTime: 300,
        // deviation: "200",
        speed: 300, // Sliding speed
        loop: true, // Infinite loop
        autoplay: 8000, // Auto play[ms]
      },
    };
  },
  mounted() {
    this.fetchIndex();
  },
  methods: {
    async fetchIndex() {
      this.loading = true;
      await this.$store.dispatch("getAboutUs");
      await this.$store.dispatch("getLeadEvent");
      this.loading = false;
    },
    onTap() {
      console.log("tap");
    },
  },
};
</script>

<style>
.slider-zhomart-container {
  width: 100%;
  max-height: 500px !important;
  margin-bottom: 70px;
}

.swiper-container-horizontal > * > .slider-pagination-bullet {
  background: #fff none repeat scroll 0 0 !important;
  opacity: 1 !important;
  width: 0.7rem !important;
  height: 0.7rem !important;
}
.swiper-container-vertical .slider-pagination-bullet-active,
.swiper-container-horizontal .slider-pagination-bullet-active {
  background: var(--main-text-color) none repeat scroll 0 0 !important;
}
</style>
