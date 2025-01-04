
const routes = {
  start: '/',
  home: '/home',

  personal: {
    home: '/personal',
    addPerson: '/personal/add',
    personPage: (id: string) => ({route: '/personal/:personId', to: `/personal/${id}`}),
    editPerson: (id: string) => ({route: '/personal/:personId/edit', to: `/personal/${id}/edit`})
  },
  
  goshunGullugy: {
    home: '/goshun_gulluk/home',
    stuff: '/goshun_gulluk/stuff',
    duty: '/goshun_gulluk/duty',
    garawul: '/goshun_gulluk/garawul'
  },


}

export default routes;