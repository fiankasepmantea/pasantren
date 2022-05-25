<template>
<div class="main-container">
  <CHeader light>
    <CHeaderBrand class="flex-start" to="/">
    <CImg
      class="c-sidebar-brand-full"
      src="/assets/images/pasantren.png"
      :height="56"
    >
    </CImg>
    </CHeaderBrand>
    <CHeaderNav class="ml-auto">
      <CHeaderNavItem class="px-3 pt-2">
        <h5>PASANTREN</h5>
      </CHeaderNavItem>
    </CHeaderNav>
  </CHeader>

  <CContainer fluid style="padding-top:60px !important">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </CContainer>
  </div>
</template>

<script>
import TheHeader from './TheHeader'

export default {
  name: 'TheNoSidebar',
  components: {
    TheHeader,
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.main-container {
  overflow: hidden;
}

</style>
