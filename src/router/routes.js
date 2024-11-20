
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Contact', component: () => import('pages/Contact.vue') },
      { path: '/confinfo2022', component: () => import('pages/confinfo2022.vue') },
      { path: '/confinfo', component: () => import('pages/confinfo2024.vue') },
      { path: '/traininginfo', component: () => import('pages/TrainingPage.vue') },
      { path: '/members', component: () => import('pages/Members.vue'), meta: {requiresAuth: false} },
      { path: '/applicants', component: () => import('pages/applicants.vue') },
      { path: '/About', component: () => import('pages/About.vue') },
      { path: '/registerTraining', component: () => import('pages/registerTraining.vue') },
      { path: '/springtraining', component: () => import('pages/springtraining.vue') },
      { path: '/2022ConfRegistration', component: () => import('pages/registerConf.vue') },
      { path: '/history', component: () => import('pages/history.vue') },
      { path: '/memberlist', component: () => import('pages/MemberList.vue') },
      { path: '/join', component: () => import('pages/join.vue') },
      { path: '/cta', component: () => import('pages/cta.vue') },
      { path: '/optics-training', component: () => import('pages/optics-training.vue') },
      { path: '/conflive', component: () => import('src/pages/conflive2024.vue') },
      { path: '/conflive24', component: () => import('src/pages/conflive2024.vue') },
      { path: '/springtrain24', component: () => import('pages/springtraining2024.vue') },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/Error404.vue')
  // }
]

export default routes
