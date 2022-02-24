import { get } from 'lodash';
import colors from 'vuetify/es5/util/colors'

const colorVariants = ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'];

let {
  SERVER_HOST,
  SERVER_PORT,
  APP_SHORT_NAME,
  APP_LONG_NAME,
  APP_THEME_MODE
} = process.env;

SERVER_HOST = SERVER_HOST || '0.0.0.0';
SERVER_PORT = SERVER_PORT || 3000;

APP_THEME_MODE = (APP_THEME_MODE || 'light').toLowerCase();

const env = {
  ...process.env,
  SERVER_HOST,
  SERVER_PORT,
  APP_SHORT_NAME,
  APP_LONG_NAME,
  APP_THEME_MODE
};
["LIGHT", "DARK"].forEach(mode => {
  colorVariants.forEach(variant => {
    const key = `APP_THEME_${mode}_${variant.toUpperCase()}`;
    const color = env[key];
    if (color) {
      env[key] = color.startsWith("#") ? color : get(colors, color);
    }
  });
});
export default env;

export function buildTheme(mode) {
  const theme = { };
  colorVariants.forEach(variant => {
    const prop = `APP_THEME_${mode.toUpperCase()}_${variant.toUpperCase()}`;
    if (prop in env) {
      theme[variant] = env[prop];
    }
  });
  return theme;
}
