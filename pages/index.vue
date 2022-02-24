<template>
  <pmx-application-frame>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <v-icon size="256" color="primary">mdi-cloud-outline</v-icon>
        <h1 class="display-4">
          {{ $store.state.application.longName }}
        </h1>
        <v-sheet class="mt-6 py-3 secondary">
          <h3 class="heading white--text">
            {{ $store.state.application.description }}
          </h3>
        </v-sheet>
      </v-col>
    </v-row>
  </pmx-application-frame>
</template>

<script>
import PmxApplicationFrame from "@/components/PmxApplicationFrame";
export default {
  name: "IndexPage",
  head: {
    title: "Inicio"
  },
  components: {
    PmxApplicationFrame
  }
}
</script>
