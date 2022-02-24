<template>
  <v-skeleton-loader boilerplate :type="type || randomType"></v-skeleton-loader>
</template>

<script>
export default {
  name: "PmxContentPlaceholder",
  props: {
    type: {
      type: String,
      required: false
    }
  },
  computed: {
    randomType() {
      const types = [
        "card-avatar, article, actions",
        "table-heading, list-item-two-line, image, table-tfoot",
        "date-picker",
        "list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
      ];
      return types[Math.floor(Math.random() * types.length)];
    }
  }
};
</script>

<style scoped>

</style>
