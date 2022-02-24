<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawers.navigation"
      :clipped="appBar.clippedLeft"
      :color="backgroundColor"
      fixed
      app
    >
      <pmx-navigation-list :items="$store.state.navigation.items"></pmx-navigation-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="appBar.clippedLeft"
      fixed
      elevation="1"
      color="primary"
      dark
      height="50"
      app>
      <v-app-bar-nav-icon @click.stop="drawers.navigation = !drawers.navigation">
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        {{ $store.state.application.shortName }}<span v-if="$route.meta.title">: {{ $route.meta.title }}</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        offset-y
        left
        close-on-click
        :rounded="$store.state.appearance.style.shape === 'rounded'"
      >
        <template #activator="{ on, attrs }">
          <v-btn
            color="white"
            class="primary--text"
            small
            v-bind="attrs"
            v-on="on"
          >
            Crear
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <template v-for="(action, index) in appBar.creationActions">
            <v-subheader
              v-if="action.subheader"
              :key="index"
              v-text="action.title"
            ></v-subheader>
            <v-list-item
              v-else
              :key="index"
              :to="action.route"
            >
              <v-list-item-icon>
                <v-icon v-text="action.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ action.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-menu>

      <slot name="app-bar-items"></slot>

      <v-tooltip bottom>
        <template #activator="{ attrs, on }">
          <v-btn
            icon v-bind="attrs" v-on="on"
            @click.stop="drawers.notification = !drawers.notification"
          >
            <v-icon :color="notifications.length > 0 ? 'accent' : ''">
              {{ notifications.length > 0 ? 'mdi-bell-badge-outline' : 'mdi-bell-outline' }}
            </v-icon>
          </v-btn>
        </template>
        Visualiza tus notificaciones.
      </v-tooltip>
      <v-avatar color="secondary">
        <v-btn icon dark @click="drawers.about = !drawers.about">
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </v-avatar>
    </v-app-bar>

    <v-main :class="backgroundColor">
      <v-container fluid>
        <v-row v-if="$route.meta.heading.visible">
          <v-col>
            <v-list-item :two-line="!!$route.meta.subtitle">
              <v-list-item-avatar
                v-if="$route.meta.icon"
                size="80"
                color="grey lighten-4"
              >
                <v-icon color="primary" x-large v-text="$route.meta.icon"></v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1">
                  {{ $route.meta.title }}
                </v-list-item-title>
                <v-list-item-subtitle v-if="$route.meta.subtitle">
                  {{ $route.meta.subtitle }}
                </v-list-item-subtitle>
                <v-divider class="mt-3"></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <slot name="default"></slot>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-navigation-drawer
      v-model="drawers.notification"
      right
      temporary
      fixed
      width="450"
      app
    >
      <v-toolbar color="primary" dark flat>
        <v-tooltip bottom>
          <template #activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on" @click.stop="drawers.notification = false">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </template>
          Ocultar
        </v-tooltip>

        <v-toolbar-title>Notificaciones</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip v-if="notifications.length > 0" bottom>
          <template #activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on" @click.stop="notifications = []">
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </template>
          Descartar notificaciones
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ attrs, on }">
            <v-btn text v-bind="attrs" v-on="on">
              Ver Todo
            </v-btn>
          </template>
          Ver todas las notificaciones
        </v-tooltip>
      </v-toolbar>
      <v-slide-y-transition
        v-if="notifications.length > 0"
        group
        tag="v-list"
      >
        <template v-for="(notification, index) of notifications">
          <v-list-item :key="`notification${index + 1}`" three-line>
            <v-list-item-icon>
              <v-icon color="accent" x-large v-text="notification.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="notification.title"></v-list-item-title>
              <v-list-item-subtitle v-text="notification.description"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-list-item-action-text v-text="notification.timestamp"></v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-if="index < notifications.length - 1" :key="`divider${index + 1}`"></v-divider>
        </template>
      </v-slide-y-transition>

      <v-sheet v-else class="text-center mt-8" color="transparent">
        <v-avatar size="128" color="grey lighten-4">
          <v-icon size="72" color="grey">mdi-bell-outline</v-icon>
        </v-avatar>
        <p class="subtitle-1 grey--text mt-8">No hay notificaciones.</p>
      </v-sheet>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="drawers.about"
      right
      temporary
      fixed
      width="350"
      app
    >
      <v-toolbar color="primary" dark flat>
        <v-tooltip bottom>
          <template #activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on" @click.stop="drawers.about = false">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </template>
          Ocultar
        </v-tooltip>

        <v-toolbar-title v-text="$store.state.application.shortName"></v-toolbar-title>

        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template #activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-btn>
          </template>
          Perfil de Usuario
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-exit-run</v-icon>
            </v-btn>
          </template>
          Salir de {{ $store.state.application.shortName }}
        </v-tooltip>
      </v-toolbar>
      <pmx-application-info
        :application="$store.state.application"
        :user="$store.state.user"
        :support="$store.state.support"
      ></pmx-application-info>
    </v-navigation-drawer>

    <v-footer app>
      <span>
        <span v-text="$store.state.application.longName"></span> ©
        {{ new Date().getFullYear() }}
      </span>
    </v-footer>

    <slot name="dialog"></slot>

    <v-snackbar
      v-model="notificationArrived"
      color="accent"
      :rounded="$store.state.appearance.style.shape === 'rounded'"
    >
      Tienes nuevas notificaciones
      <template #action="{ attrs }">
        <v-btn
          text v-bind="attrs"
          @click="drawers.notification = true"
        >Ver</v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import PmxApplicationInfo from "@/components/PmxApplicationInfo";
import PmxNavigationList from "@/components/core/navigation/PmxNavigationList";
export default {
  name: "PmxApplicationFrame",
  components: {
    PmxApplicationInfo,
    PmxNavigationList
  },
  data: () => ({
    appBar: {
      clippedLeft: true,
      searchInput: undefined,
      searchResult: undefined,
      searchResults: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => ({
        value: number,
        text: `Resultado ${number}`
      })),
      creationActions: [
        {
          title: "Colaboración",
          subheader: true
        },
        {
          title: "Sala de Reunión",
          icon: "mdi-google-classroom"
        },
        {
          title: "Equipo de Trabajo",
          icon: "mdi-account-group-outline"
        },
        {
          subheader: true,
          title: "Documentos"
        },
        {
          title: "Minuta de Reunión",
          icon: "mdi-file-document-outline"
        }
      ]
    },
    drawers: {
      navigation: true,
      notification: false,
      about: false
    },
    notifications: [],
    notificationArrived: false,
    notificationInterval: undefined
  }),
  computed: {
    backgroundColor() {
      return this.$store.state.appearance.theme.mode === 'light' ? 'white' : undefined;
    }
  },
  methods: {
    pushNotification(notification) {
      this.notifications.unshift(notification);
      this.notificationArrived = true;
    },
    async simulateNotification() {
      try {
        const {data} = await this.$axios.get("https://baconipsum.com/api/?type=all-meat&sentences=3&start-with-lorem=0");
        const sentences = (data[0] || "").split(". ");
        if (!sentences) return;

        const icons = [
          "mdi-file-document-outline",
          "mdi-alert-outline",
          "mdi-alarm-multiple",
          "mdi-chart-timeline-variant-shimmer",
          "mdi-cloud-off-outline",
          "mdi-folder-sync-outline",
          "mdi-printer-alert",
        ];
        if (this.notifications.length === 50) {
          this.notifications = [];
        }
        this.pushNotification({
          id: Math.floor(Math.random() * 100) + 1,
          title: sentences[0],
          description: `${sentences[1]}. ${sentences[2]}`,
          timestamp: new Date().toLocaleTimeString(),
          icon: icons[Math.floor(Math.random() * icons.length)]
        });
      } catch (err) {
        console.error(err);
      }
    }
  },
  mounted() {
    this.notificationInterval = setInterval(() => this.simulateNotification(), 20*1000);
  },
  destroyed() {
    if (this.notificationInterval) {
      clearInterval(this.notificationInterval);
    }
  }
};
</script>

<style scoped>

</style>
