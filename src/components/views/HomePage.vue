<template>
  <div class="home-page">
    <AboutUsBanner />
    <UpcommingEvents />
    <BecomeMember />
  </div>
</template>

<script>
import AboutUsBanner from "../molecules/AboutUsBanner.vue";
import UpcommingEvents from "../molecules/UpcommingEvents.vue";
import BecomeMember from "../molecules/BecomeMember.vue";

export default {
  name: "HomePage",
  components: { AboutUsBanner, UpcommingEvents, BecomeMember },
};
</script>

<style>
/* Footer */
.home-page {
  margin-top: 12rem;
  width: 100%;
  font-family: 'Gotham Pro';
  letter-spacing: 1.2px;
  line-height: 23px;
}

h2, h3 {
  font-family: 'Gotham Pro Med';
  line-height: 2rem;
}
@media screen and (max-width: 65rem) {
  .home-page{
    margin-top: 6rem;
  }
}
</style>
