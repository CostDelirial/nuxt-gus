import routes from "./routes";
import navigation from "./navigation";

function resolveRoute(route) {
  return routes.find(config => config.name === route.name);
}

function configureNavigationItem(item) {
  let route = resolveRoute(item.route);
  if (route && route.meta) {
    Object.keys(route.meta).forEach(key => item[key] = route.meta[key]);
  }
}

export default {
  navigationItems() {
    // Los datos pueden provenir de los claims
    // del usuario, una API, base de datos, etc.
    return (navigation.items || []).filter(item => !!item.route).map(item => {
      configureNavigationItem(item);
      if (item.items && item.items.length > 0) {
        item.items.forEach(subItem => configureNavigationItem(subItem));
      }
      return item;
    });
  },
  extendRoutes(nuxtRoutes) {
    nuxtRoutes.forEach(route => {
      const config = routes.find(r => r.name === route.name);
      if (config) {
        Object.keys(config).forEach(key => route[key] = config[key]);
      }
    });
  }
}
