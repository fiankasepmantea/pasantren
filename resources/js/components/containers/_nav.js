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
            name: 'Manajemen User',
            to: '/master/user'
          },   
          {
            name: 'Unit',
            to: '/master/unit'
          },
          {
            name: 'Muhaffizh',
            to: '/master/muhaffizh'
          },   
          {
            name: 'Grup',
            to: '/master/group'
          }, 
          {
            name: 'Santri',
            to: '/master/santri'
          },       
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Proses Santri',
        route: '/process',
        icon: 'cil-puzzle',
        items: [     
          {
            name: 'Mutqin',
            to: '/process/mutqin'
          },  
          {
            name: 'Setoran',
            to: '/process/setoran'
          },  
          {
            name: 'Tahsin',
            to: '/process/tahsin'
          },  
        ]
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
        items: [
          {
            name: 'List Group/Halaqoh',
            to: '/master/users'
          },   
          {
            name: 'List Muhaffizh',
            to: '/master/units'
          },
          {
            name: 'List Santri',
            to: '/master/units'
          },
          {
            name: 'List Data AlQuran Santri',
            to: '/master/units'
          },
        ]
      }
    ]
  }
]