<template>
  <div>
    <ul v-if="category" class="information-menu">
      <li class="information-menu__title">{{ $t(`header.menu.${category.group}`) }}</li>
      <InfoItem
        v-for="(item, ind) in categoryList"
        :key="ind"
        :category="item.category"
        :title="item.title"
        :group="category.group"
      />
    </ul>
  </div>
</template>

<script>
import InfoItem from "../atoms/InfoItem.vue"

export default {
  name: 'InfoMenu',
  components: {InfoItem},
  props: {
    categoryList: {
      type: Array,
    },
    category: {
      type: Object,
    }
  },
}
</script>

<style>
.information-menu {
  margin-right: 4rem;
  background: var(--footer-bg-color);
}

.information-menu__title {
  list-style: none;
  padding: 1rem;
  font-family: "Gotham Pro Bold";
  background: var(--menu-title);
  color: var(--text-color);
  width: 16rem;
}

@media screen and (max-width: 65rem) {
  .information-menu {
    display: none;
  }
}
</style>