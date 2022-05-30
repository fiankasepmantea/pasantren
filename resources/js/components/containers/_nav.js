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
        name: 'Monitor Penjualan',
        to: '/sales-dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Monitor Produksi',
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
            name: 'User',
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
                 
        ]
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['PRODUCTION CONTROL'] // PRODUCTION CONTROL
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Sales Order',
        to: '/productions/sales-order',
        icon: 'cil-speedometer'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'PPC',
        route: '/productions',
        icon: 'cil-description',
        items: [
          {
            name: 'PPC',
            to: '/productions/ppc',
          },
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Mutasi',
        route: '/transfers',
        icon: 'cil-swap-horizontal',
        items: [
          {
            name: 'Mutasi Pengiriman',
            to: '/transfers/outgoing',
          },
          {
            name: 'Mutasi Penerimaan',
            to: '/transfers/incoming'
          },
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Stok Opname',
        to: '/stock/opname',
        icon: 'cil-address-book'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Surat Jalan',
        to: '/permit/surat-jalan',
        icon: 'cil-file'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Faktur',
        to: '/invoices/sales-invoice',
        icon: 'cil-envelope-letter'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Pembayaran',
        to: '/payments/sales-payment',
        icon: 'cil-money'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Retur',
        to: '/returns/return-sales',
        icon: 'cil-money'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Kontra Bon',
        to: '/counters/counter-bill',
        icon: 'cil-money'
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