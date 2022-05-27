<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
    <CImg
      class="c-sidebar-brand-full"
      src="/assets/images/pesantren.png"
      :height="56"
    >
    </CImg>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3 pt-2">
        <h5>PESANTREN</h5>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="d-md-down-none flex-end">
      <CHeaderNavItem class="d-md-down-none">
        <CHeaderNavLink>
          <CIcon name="cil-bell"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-1">
        <CHeaderNavLink>
          <CButton variant="ghost" color="danger" @click="logout">Logout</CButton>
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
  </CHeader>
</template>

<script>
// import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState('user', {
            authenticated: state => state.authenticated //ME-LOAD STATE AUTHENTICATED
        }),
    },
    methods: {  
        //KETIKA TOMBOL LOGOUT DITEKAN, FUNGSI INI DIJALANKAN
        logout() {
            return new Promise((resolve, reject) => {
                localStorage.removeItem('token') //MENGHAPUS TOKEN DARI LOCALSTORAGE
                resolve()
            }).then(() => {
                //MEMPERBAHARUI STATE TOKEN
                this.$store.state.token = localStorage.getItem('token')
                this.$router.push('/login') //REDIRECT KE PAGE LOGIN
            })
        }
    }
}
</script>
