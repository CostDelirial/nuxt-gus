import env, { buildTheme } from "~/lib/env";
import router from "~/config/router";
const packageInfo = require("~/package.json");

export const state = () => ({
  application: {
    shortName: undefined,
    longName: undefined,
    description: undefined,
    version: undefined,
    environment: undefined
  },
  user: {
    userId: undefined,
    forename: undefined,
    surname: undefined,
    email: undefined,
    rfc: undefined,
    roles: undefined
  },
  support: {
    email: undefined,
    phone: undefined
  }
});

export const mutations = {
  setApplication(state, payload) {
    state.application = payload;
  },
  setUser(state, payload) {
    state.user = payload;
  },
  setSupport(state, payload) {
    state.support = payload;
  }
}

export const actions = {
  nuxtServerInit({ commit }) {
    commit("setApplication", {
      shortName: env.APP_SHORT_NAME,
      longName: env.APP_LONG_NAME,
      description: env.APP_DESCRIPTION,
      version: packageInfo.version,
      environment: env.APP_ENVIRONMENT
    });
    commit("setUser", {
      userId: "4a5dc597-5212-4bfa-8432-d6ca21519c9d",
      forename: "Ana Alicia",
      surname: "Lopez Suarez",
      email: "ana.alicica.lopez@pemex.com",
      rfc: "LOSA850307RQ3",
      roles: ["Super Administrador"]
    });
    commit("setSupport", {
      email: env.APP_SUPPORT_EMAIL,
      phone: env.APP_SUPPORT_PHONE
    }),
    commit("appearance/setTheme", {
      mode: env.APP_THEME_MODE,
      light: buildTheme('light'),
      dark: buildTheme('dark'),
    });
    commit("appearance/setStyle", {
      look: env.APP_STYLE_LOOK,
      shape: env.APP_STYLE_SHAPE,
      spacing: env.APP_STYLE_SPACING
    });
    commit("navigation/setItems", router.navigationItems())
  }
}
