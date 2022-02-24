<template>
  <v-list dense>
    <template v-for="(descriptor, index) in descriptors">
      <v-subheader v-if="descriptor.subheader" :key="index" v-text="descriptor.text"></v-subheader>
      <v-list-item v-else :key="index">
        <v-list-item-icon v-if="descriptor.icon">
          <v-icon color="accent" v-text="descriptor.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="descriptor.title"></v-list-item-title>
          <v-list-item-subtitle v-html="descriptor.subtitle"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "PmxApplicationInfo",
  props: {
    application: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    support: {
      type: Object,
      required: false
    }
  },
  computed: {
    descriptors() {
      const icon = "mdi-check-outline";
      return [
        ...(
          this.application
            ? [
              {
                subheader: true,
                text: "Aplicación"
              },
              {
                title: this.application.longName,
                subtitle: "Nombre",
                icon: "mdi-application-outline"
              },
              {
                title: this.application.description,
                subtitle: "Descripción",
                icon: "mdi-sticker-text-outline"
              },
              {
                title: this.application.version,
                subtitle: "Versión",
                icon: "mdi-stairs"
              },
              {
                title: {
                  "development": "Desarrollo",
                  "qa": "Calidad",
                  "production": "Producción"
                }[this.application.environment],
                subtitle: "Ambiente",
                icon: {
                  "development": "mdi-tools",
                  "qa": "mdi-clipboard-check-outline",
                  "production": "mdi-cloud-outline"
                }[this.application.environment]
              }
            ]
            : []
        ),
        ...(
          this.user
            ? [
              {
                subheader: true,
                text: "Usuario"
              },
              {
                title: `${this.user.forename} ${this.user.surname}`,
                subtitle: "Nombre Completo",
                icon: "mdi-card-account-details-outline"
              },
              {
                title: this.user.email,
                subtitle: "Correo Electrónico",
                icon: "mdi-email-outline"
              },
              {
                title: this.user.rfc,
                subtitle: "RFC",
                icon: "mdi-key-outline"
              },
              {
                title: (this.user.roles || []).join(", "),
                subtitle: "Roles",
                icon: "mdi-shield-lock-outline"
              }
            ]
            : []
        ),
        ...(
          this.support
            ? [
              {
                subheader: true,
                text: "Mesa de Ayuda"
              },
              {
                title: this.support.email,
                subtitle: "Correo Electrónico",
                icon: "mdi-email-outline"
              },
              {
                title: this.support.phone,
                subtitle: "Teléfono",
                icon: "mdi-phone-outline",
                href: `tel:${this.support.phone}`
              }
            ]
            : []
        )
      ]
    }
  }
};
</script>

<style scoped>

</style>
