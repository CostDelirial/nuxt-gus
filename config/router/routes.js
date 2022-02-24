export default [
  {
    name: "index",
    meta: {
      title: "Inicio",
      icon: "mdi-home-outline",
      heading: {
        visible: false
      }
    }
  },
  {
    name: "modulo1",
    meta: {
      title: "Módulo 1",
      subtitle: "Bienvenido al Módulo 1",
      icon: "mdi-puzzle-outline"
    }
  },
  {
    name: "modulo1-pagina1",
    meta: {
      title: "Análisis de Riesgo Previo y Revisión",
      subtitle: "Módulo 1",
      icon: "mdi-file-document-outline"
    }
  },
  {
    name: "modulo1-pagina2",
    meta: {
      title: "Página 2",
      subtitle: "Módulo 1",
      icon: "mdi-file-document-outline"
    }
  },
  {
    name: "modulo2",
    meta: {
      title: "Módulo 2",
      subtitle: "Bienvenido al Módulo 2",
      icon: "mdi-puzzle-outline"
    }
  },
  {
    name: "modulo2-pagina1",
    meta: {
      title: "Página 1",
      subtitle: "Módulo 2",
      icon: "mdi-file-document-outline"
    }
  },
  {
    name: "modulo2-pagina2",
    meta: {
      title: "Página 2",
      subtitle: "Módulo 2",
      icon: "mdi-file-document-outline"
    }
  }
].map(route => {
  if (!route.meta) {
    route.meta = { };
  }
  if (!route.meta.heading) {
    route.meta.heading = { };
  }
  if (route.meta.heading.visible === undefined) {
    route.meta.heading.visible = true;
  }
  return route;
});
