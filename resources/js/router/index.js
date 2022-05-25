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
const Bank = () => import('../components/master/Banks')

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
          path: 'users',
          name: 'Users',
          component: Users,
          meta: { title: 'User', auth: true }
        },
        {
          path: 'Banks',
          name: 'Banks',
          component: Bank,
          meta: { title: 'Bank', auth: true }
        },
      ]
    },

    // PRODUCTIONS
    {
      path: '/productions',
      redirect: '/productions',
      name: 'Productions',
      component: TheContainer,
      children: [
        {
          path: 'sales-order',
          name: 'SalesOrder',
          component: SalesOrder,
          meta: { title: 'Sales Order', auth: true }
        },
        {
          path: 'ppc',
          name: 'PPC',
          component: PPC,
          meta: { title: 'PPC', auth: true }
        },
        {
          path: 'om',
          name: 'om',
          component: OM,
          meta: { title: 'OM', auth: true }
        },
        {
          path: 'cutting',
          name: 'cutting',
          component: Cutting,
          meta: { title: 'Cutting', auth: true }
        },
        {
          path: 'fitting',
          name: 'fitting',
          component: Fitting,
          meta: { title: 'Perlengkapan', auth: true }
        },
        {
          path: 'sewing',
          name: 'sewing',
          component: Sewing,
          meta: { title: 'Jahit', auth: true }
        },
        {
          path: 'packing',
          name: 'packing',
          component: Packing,
          meta: { title: 'Packing', auth: true }
        }
      ]
    },
   
    //Dashboard
    {
      path: '/',
      redirect: '/sales-dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'sales-dashboard',
          name: 'Monitor Penjualan',
          component: DSales,
          meta: {
            auth: true,
            title: 'Monitor Penjualan'
          }
        },
        {
          path: 'production-dashboard',
          name: 'Monitor Produksi',
          component: DProduction,
          meta: {
            auth: true,
            title: 'Monitor Produksi'
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