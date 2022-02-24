<template>
  <v-list v-bind="$attrs" dense>
    <template v-for="(item, itemIndex) of items">
      <v-list-group
        v-if="item.items && item.items.length > 0"
        :value="isListGroupActive(item)"
        :key="item.key || itemIndex"
        :prepend-icon="item.icon"
      >
        <template #activator>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </template>
        <v-list>
          <template
            v-for="(subItem, subItemIndex) of item.items"
          >
            <pmx-navigation-list-item
              :key="subItem.key || subItemIndex"
              :item="subItem"
              :active-class="activeClass"
              :large-icon="largeIconsOnSubItems"
              :x-large-icon="xLargeIconsOnSubItems"
              :small-icon="smallIconsOnSubItems"
              :x-small-icon="xSmallIconsOnSubItems"
            ></pmx-navigation-list-item>
          </template>
        </v-list>
      </v-list-group>
      <pmx-navigation-list-item
        v-else
        :key="item.key || itemIndex"
        :item="item"
        :active-class="activeClass"
      ></pmx-navigation-list-item>
    </template>
  </v-list>
</template>

<script>
import PmxNavigationListItem from "./PmxNavigationListItem";
export default {
  name: "PmxNavigationList",
  components: {
    PmxNavigationListItem
  },
  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    activeClass: {
      type: String,
      default: "primary white--text"
    },
    largeIconsOnSubItems: {
      type: Boolean,
      default: undefined
    },
    xLargeIconsOnSubItems: {
      type: Boolean,
      default: undefined
    },
    smallIconsOnSubItems: {
      type: Boolean,
      default: undefined
    },
    xSmallIconsOnSubItems: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    isListGroupActive(item) {
      let isActive = false;
      this.$route.matched.forEach(route => {
        const subItem = (item.items || [])
          .filter(i => !!i.route)
          .find(i => (i.route.name || i.route) === route.name || (i.route.name || i.route) === route.path);
        if (subItem) {
          isActive = true;
        }
      });
      return isActive;
    }
  },
  mounted() {
    console.warn(this.$route);
  }
}
</script>

<style scoped>

</style>
