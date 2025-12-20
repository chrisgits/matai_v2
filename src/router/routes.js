
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/Contact', component: () => import('pages/Contact.vue') },
      { path: '/confinfo', component: () => import('pages/confinfo2026.vue') },
      { path: '/traininginfo', component: () => import('pages/TrainingPage.vue') },
      { path: '/members', component: () => import('pages/Members.vue'), meta: {requiresAuth: false} },
      { path: '/applicants', component: () => import('pages/applicants.vue') },
      { path: '/About', component: () => import('pages/About.vue') },
      { path: '/registerTraining', component: () => import('pages/registerTraining.vue') },
      { path: '/history', component: () => import('pages/history.vue') },
      { path: '/memberlist', component: () => import('pages/MemberList.vue') },
      { path: '/join', component: () => import('pages/join.vue') },
      { path: '/cta', component: () => import('pages/cta.vue') },
      { path: '/conflive', component: () => import('src/pages/conflive2026.vue') },
      { path: '/newmemberapp', component: () => import('pages/newApp.vue') },
      { path: '/recontools', component: () => import('pages/ReconTools.vue') },


    ]
  },
  // Always leave this as last one,src/pages/conflive2025.vue
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
