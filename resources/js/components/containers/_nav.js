export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavTitle',
        _children: ['Dashboards']  // DASHBOARDS
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Muhaffizh',
        to: '/sales-dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Santri',
        to: '/production-dashboard',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['MASTER DATA'] // MASTER DATA
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Master Data',
        route: '/master',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'Role',
            to: '/master/users'
          },   
          {
            name: 'Unit',
            to: '/master/units'
          },
          {
            name: 'Grup',
            to: '/master/groups'
          },
          {
            name: 'Muhaffizh',
            to: '/master/muhaffizhs'
          },    
          {
            name: 'Santri',
            to: '/master/santris'
          },     
        ]
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['PRODUCTION CONTROL'] // PRODUCTION CONTROL
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Mutqin',
        to: '/productions/sales-order',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Setoran',
        to: '/stock/opname',
        icon: 'cil-address-book'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Tahsin',
        to: '/permit/surat-jalan',
        icon: 'cil-file'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['LAPORAN'] // LAPORAN
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Laporan',
        route: '/master',
        icon: 'cil-book',
        items: []
      }

      // {
      //   _name: 'CSidebarNavDropdown',
      //   name: 'Icons',
      //   route: '/icons',
      //   icon: 'cil-star',
      //   items: [
      //     {
      //       name: 'CoreUI Icons',
      //       to: '/icons/coreui-icons',
      //       badge: {
      //         color: 'info',
      //         text: 'NEW'
      //       }
      //     },
      //     {
      //       name: 'Brands',
      //       to: '/icons/brands'
      //     },
      //     {
      //       name: 'Flags',
      //       to: '/icons/flags'
      //     }
      //   ]
      // },
      // {
      //   _name: 'CSidebarNavDropdown',
      //   name: 'Notifications',
      //   route: '/notifications',
      //   icon: 'cil-bell',
      //   items: [
      //     {
      //       name: 'Alerts',
      //       to: '/notifications/alerts'
      //     },
      //     {
      //       name: 'Badges',
      //       to: '/notifications/badges'
      //     },
      //     {
      //       name: 'Modals',
      //       to: '/notifications/modals'
      //     }
      //   ]
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Widgets',
      //   to: '/widgets',
      //   icon: 'cil-calculator',
      //   badge: {
      //     color: 'primary',
      //     text: 'NEW',
      //     shape: 'pill'
      //   }
      // },
      // {
      //   _name: 'CSidebarNavDivider',
      //   _class: 'm-2'
      // },
      // {
      //   _name: 'CSidebarNavTitle',
      //   _children: ['Extras']
      // },
      // {
      //   _name: 'CSidebarNavDropdown',
      //   name: 'Pages',
      //   route: '/pages',
      //   icon: 'cil-star',
      //   items: [
      //     {
      //       name: 'Login',
      //       to: '/pages/login'
      //     },
      //     {
      //       name: 'Register',
      //       to: '/pages/register'
      //     },
      //     {
      //       name: 'Error 404',
      //       to: '/pages/404'
      //     },
      //     {
      //       name: 'Error 500',
      //       to: '/pages/500'
      //     }
      //   ]
      // },
    ]
  }
]