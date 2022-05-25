<template>
<div>
  <Loading v-if="$store.state.loading" />
  <router-view>
  </router-view>
</div>
</template>

<script>
import Loading from './components/parts/ProccessLoading'
export default {
  name: "App",
  components: {
    Loading
  }
};
</script>

<style lang="scss">
@import "../assets/scss/style";

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.action-columns {
  width: 150px;
  text-align: center;
}

.b-table-sticky-header {
  max-height: var(--sticky-height) !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
