<template>
  <pmx-application-frame>
    <template #app-bar-items>
      <v-btn
        text
        class="ms-4"
        @click="firstDialogVisible = true"
      >Acción 1</v-btn>
      <v-btn text>Acción 2</v-btn>
    </template>

    <pmx-content-placeholder></pmx-content-placeholder>

    <template #dialog>
      <v-dialog
        v-model="firstDialogVisible"
        max-width="600"
      >
        <v-card outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline">
                TITULO
              </div>
              <v-list-item-title class="text-h5 mb-1">
                Mensaje informativo.
              </v-list-item-title>
              <v-list-item-subtitle>
                Detalles completos de la acción.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <pmx-content-placeholder type="table"></pmx-content-placeholder>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :rounded="$store.state.appearance.style.shape === 'rounded'"
              color="primary"
              dark
              @click="firstDialogVisible = false"
            >Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="secondDialogVisible"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card flat>
          <v-toolbar flat color="primary" dark>
            <v-btn icon @click="secondDialogVisible = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Acción #2</v-toolbar-title>
          </v-toolbar>

          <pmx-content-placeholder></pmx-content-placeholder>
        </v-card>
      </v-dialog>
    </template>
  </pmx-application-frame>
</template>

<script>
import PmxApplicationFrame from "@/components/PmxApplicationFrame";
import PmxContentPlaceholder from "@/components/core/support/PmxContentPlaceholder";
export default {
  name: "Modulo1Pagina1",
  components: {
    PmxContentPlaceholder,
    PmxApplicationFrame
  },
  data: () => ({
    firstDialogVisible: false,
    secondDialogVisible: false
  })
};
</script>

<style scoped>

</style>
