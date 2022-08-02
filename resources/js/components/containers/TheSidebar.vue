<template>
  <CSidebar 
    class="custom-sidebar"
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
    
  >
    <!--<CSidebarBrand class="d-md-down-none" to="/">
      <CIcon 
        class="c-sidebar-brand-full" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 556 134"
      />
      <CIcon 
        class="c-sidebar-brand-minimized" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>-->

    <CSidebarBrand class="d-md-down-note" to="/">
    <CImg
      class="c-sidebar-brand-full"
      src="/assets/images/pesantren.png"
      :height="56"
    >
    </CImg>
    <CImg
      class="c-sidebar-brand-minimized"
      src="/assets/images/pesantren.png"
      :height="56"
    >
    </CImg>
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="navcontent"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
// import nav from './_nav'

export default {
  name: 'TheSidebar',
  // nav,
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    },
  },
  data() {
    const sessdata = JSON.parse(localStorage.getItem('sessdata'));
    let childs = [];
    if(sessdata) {
      sessdata.menu.forEach((m)=>{
        switch(m.sublevel) {
          case 0: childs.push({ _id: m.id, _name:'CSidebarNavTitle', _children:[m.title] }); break;
          case 1: 
            if(m.path) {
              childs.push({ _id: m.id, _name: 'CSidebarNavItem', name: m.title, to: m.path, icon: m.icon });
            } else {
              childs.push({ _id: m.id, _name: 'CSidebarNavDropdown', name: m.title, icon: m.icon, items: [] });
            }
          break;
          case 2:
            let parent_idx = childs.findIndex((c)=>c._id==m.parent_id);
            if(parent_idx > -1) {
              childs[parent_idx].items.push({ _id: m.id, name: m.title, to: m.path });
            }
          break;
        }
      });
    }
    return {
      navcontent: [{ _name: 'CSidebarNav', _children: childs }]
    }
  }
}
</script>
