export default {
  items: [
    {
      route: {
        name: 'index'
      },
      exact: true
    },
    {
      route: {
        name: "modulo1"
      },
      items: [
        {
          route: {
            name: "modulo1-pagina1"
          }
        },
        {
          route: {
            name: "modulo1-pagina2"
          }
        }
      ]
    },
    {
      route: {
        name: "modulo2"
      },
      items: [
        {
          route: {
            name: "modulo2-pagina1"
          }
        },
        {
          route: {
            name: "modulo2-pagina2"
          }
        }
      ]
    }
  ]
}
