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
          {
            name: 'Mutqin',
            to: '/master/mutqins'
          },  
          {
            name: 'Setoran',
            to: '/master/setorans'
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