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
    <CHeaderNav class="mr-auto">
      <CHeaderNavItem class="px-3 pt-2">
        <h5 class="d-none d-lg-inline"><span class="d-sm-down-none">Ahlan Wa Sahlan di Aplikasi Tahfizh Pesantren Pondok Quran <font-awesome-icon icon="mosque" /></span></h5>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="flex-end">
      <CHeaderNavItem class="d-md-down-none">
        <CBadge color="secondary" shape="pill">
          <font-awesome-icon icon="id-badge" />&nbsp;{{ userlevel }}
        </CBadge>
      </CHeaderNavItem>
      <CHeaderNavItem class="mx-1">
        <CDropdown color="danger" :toggler-text="username" class="m-2">
          <CDropdownItem href="#" @click="logout"><font-awesome-icon icon="power-off" /> Logout</CDropdownItem>
        </CDropdown>
      </CHeaderNavItem>
    </CHeaderNav>
  </CHeader>
</template>

<script>
// import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    const sessdata = JSON.parse(localStorage.getItem('sessdata'));
    let username = "User", userlevel = "";
    if(sessdata) {
      username = sessdata.nama;
      userlevel = sessdata.level;
    }
    return {
      username: username, userlevel: userlevel
    }
  },
  computed: {
      ...mapState('user', {
          authenticated: state => state.authenticated //ME-LOAD STATE AUTHENTICATED
      })
  },
  methods: {  
      //KETIKA TOMBOL LOGOUT DITEKAN, FUNGSI INI DIJALANKAN
      logout() {
          return new Promise((resolve, reject) => {
              localStorage.clear()
              resolve()
          }).then(() => {
              //MEMPERBAHARUI STATE TOKEN
              this.$store.state.token = null
              this.$router.push('/login') //REDIRECT KE PAGE LOGIN
          })
      }
  }
}
</script>
