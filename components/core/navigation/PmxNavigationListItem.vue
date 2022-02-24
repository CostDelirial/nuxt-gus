<template>
  <v-list-item
    :to="item.route || item.link"
    :exact="item.exact || false"
    :active-class="activeClass"
  >
    <v-list-item-action>
      <v-icon
        :color="iconColor"
        :large="largeIcon"
        :x-large="xLargeIcon"
        :small="smallIcon"
        :x-small="xSmallIcon"
        v-text="item.icon"></v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="item.title"></v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "PmxNavigationListItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    activeClass: {
      type: String,
      required: false
    },
    iconColor: {
      type: String,
      required: false
    },
    largeIcon: {
      type: Boolean,
      default: undefined
    },
    xLargeIcon: {
      type: Boolean,
      default: undefined
    },
    smallIcon: {
      type: Boolean,
      default: undefined
    },
    xSmallIcon: {
      type: Boolean,
      default: undefined
    }
  }
}
</script>

<style scoped>

</style>
