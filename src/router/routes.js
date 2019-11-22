
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { name:"Home", path: '', component: () => import('pages/Index.vue') },
      { name:"Teams", path: 'teams', component: () => import('pages/Teams.vue') },
      { name:"Prize Pool", path: 'prize-pool', component: () => import('pages/PrizePool.vue') },
      { name:"Profile", path: 'profile', component: () => import('pages/Profile.vue') },
      { name:"Research", path: 'research', component: () => import('pages/Research.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
