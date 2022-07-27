import Vue from 'vue'
import Router from 'vue-router'


// Containers
const TheContainer = () => import('../components/containers/TheContainer')
const TheNoSidebar = () => import('../components/containers/TheNoSidebar')

// Views
const DSales = () => import('../components/dashboards/DSales')
const DProduction = () => import('../components/dashboards/DProduction')

const Charts = () => import('../components/charts/Charts')
const Widgets = () => import('../components/widgets/Widgets')

// Views - Pages
const Page404 = () => import('../components/pages/Page404')
const Page500 = () => import('../components/pages/Page500')
const Login = () => import('../components/pages/Login')
const Register = () => import('../components/pages/Register')

// Master Data
const Users = () => import('../components/master/Users')
const Group = () => import('../components/master/Groups')
const Unit = () => import('../components/master/Units')
const Muhaffizh = () => import('../components/master/Muhaffizhs')
const Santri = () => import('../components/master/Santris')
// Proses
const Mutqin = () => import('../components/process/Mutqins')
const Setoran = () => import('../components/process/Setorans')
const Tahsin = () => import('../components/process/Tahsins')
// Laporan
const Halaqoh = () => import('../components/laporan/Halaqoh')
const MuhaffizhRpt = () => import('../components/laporan/Muhaffizh')
const SantriRpt = () => import('../components/laporan/Santri')
const SetoranRpt = () => import('../components/laporan/Setoran')

Vue.use(Router)

const router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth && to.meta.auth == true) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

function configRoutes() {
  return [
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    // MASTER
    {
      path: '/master',
      redirect: '/master',
      name: 'Master',
      component: TheContainer,
      children: [
        {
          path: 'user',
          name: 'Users',
          component: Users,
          meta: { title: 'Manajemen User', auth: true }
        },
        {
          path: 'unit',
          name: 'Units',
          component: Unit,
          meta: { title: 'Unit', auth: true }
        },
        {
          path: 'muhaffizh',
          name: 'Muhaffizhs',
          component: Muhaffizh,
          meta: { title: 'Muhaffizh', auth: true }
        },
        {
          path: 'group',
          name: 'Groups',
          component: Group,
          meta: { title: 'Grup/Halaqoh', auth: true }
        },
        {
          path: 'santri',
          name: 'Santris',
          component: Santri,
          meta: { title: 'Santri', auth: true }
        },
      ]
    },
    // PROSES
    {
      path: '/process',
      redirect: '/process',
      name: 'Proses',
      component: TheContainer,
      children: [
        {
          path: 'mutqin',
          name: 'Mutqins',
          component: Mutqin,
          meta: { title: 'Mutqin', auth: true }
        },
        {
          path: 'setoran',
          name: 'Setorans',
          component: Setoran,
          meta: { title: 'Setoran', auth: true }
        },
        {
          path: 'tahsin',
          name: 'Tahsins',
          component: Tahsin,
          meta: { title: 'Tahsin', auth: true }
        },
      ]
    },
    //Dashboard
    {
      path: '/',
      redirect: '/santri-grafik',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'santri-grafik',
          name: 'Monitor Grafik Santri',
          component: DSales,
          meta: {
            auth: true,
            title: 'Santri'
          }
        },
        {
          path: 'santri-dashboard',
          name: 'Monitor Dashboard Santri',
          component: DProduction,
          meta: {
            auth: true,
            title: 'Santri'
          }
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts,
          meta: {
            auth: true
          }
        },
        {
          path: 'widgets',
          name: 'Widgets',
          component: Widgets,
          meta: {
            auth: true
          }
        },
      ]
    },
    // LAPORAN
    {
      path: '/laporan',
      redirect: '/laporan',
      name: 'Laporan',
      component: TheContainer,
      children: [
        {
          path: 'halaqoh',
          name: 'Halaqoh',
          component: Halaqoh,
          meta: { title: 'Laporan List Group/Halaqoh', auth: true }
        },
        {
          path: 'muhaffizh',
          name: 'MuhaffizhRpt',
          component: MuhaffizhRpt,
          meta: { title: 'Laporan List Muhaffizh', auth: true }
        },
        {
          path: 'santri',
          name: 'SantriRpt',
          component: SantriRpt,
          meta: { title: 'Laporan List Santri', auth: true }
        },
        {
          path: 'setoran',
          name: 'SetoranRpt',
          component: SetoranRpt,
          meta: { title: 'Laporan Setoran Juz', auth: true }
        },
      ]
    },

    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

export default router

//Navigation Guards
// Router.beforeEach((to, from, next) => {
//   store.commit('CLEAR_ERRORS')
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//       let auth = store.getters.isAuth
//       if (!auth) {
//           next({ name: 'login' })
//       } else {
//           next()
//       }
//   } else {
//       next()
//   }
// })