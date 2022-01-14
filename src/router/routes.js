
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Contact', component: () => import('pages/Contact.vue') },
      { path: '/Conf', component: () => import('pages/ConfPage.vue') },
      { path: '/Training', component: () => import('pages/TrainingPage.vue') },
      { path: '/members', component: () => import('pages/Members.vue'), meta: {requiresAuth: true} },
      { path: '/applicants', component: () => import('pages/applicants.vue') },
      { path: '/About', component: () => import('pages/About.vue') },
      { path: '/registerTraining', component: () => import('pages/registerTraining.vue') },
      { path: '/2022ConfRegistration', component: () => import('pages/registerConf.vue') },
      { path: '/join', component: () => import('pages/join.vue') },
      { path: '/auth', component: () => import('pages/auth.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
