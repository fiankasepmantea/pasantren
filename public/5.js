(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(t,e,a){"use strict";a(95)},106:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,"\n.fade-enter-active[data-v-88d3f870],\n.fade-leave-active[data-v-88d3f870] {\n  transition: opacity 0.3s;\n}\n.fade-enter[data-v-88d3f870],\n.fade-leave-to[data-v-88d3f870] {\n  opacity: 0;\n}\n.main-container[data-v-88d3f870] {\n  overflow: hidden;\n}\n\n",""])},130:function(t,e,a){"use strict";a.r(e);var n={name:"TheNoSidebar",components:{TheHeader:a(91).a}},r=(a(105),a(9)),s=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-container"},[e("CHeader",{attrs:{light:""}},[e("CHeaderBrand",{staticClass:"flex-start",attrs:{to:"/"}},[e("CImg",{staticClass:"c-sidebar-brand-full",attrs:{src:"/assets/images/pesantren.png",height:56}})],1),this._v(" "),e("CHeaderNav",{staticClass:"ml-auto"},[e("CHeaderNavItem",{staticClass:"px-3 pt-2"},[e("h5",[this._v("PESANTREN")])])],1)],1),this._v(" "),e("CContainer",{staticStyle:{"padding-top":"60px !important"},attrs:{fluid:""}},[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1)],1)}),[],!1,null,"88d3f870",null);e.default=s.exports},91:function(t,e,a){"use strict";var n=a(13);function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var o={computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(n.e)("user",{authenticated:function(t){return t.authenticated}})),methods:{logout:function(){var t=this;return new Promise((function(t,e){localStorage.clear(),t()})).then((function(){t.$store.state.token=null,t.$router.push("/login")}))}}},i=a(9),c=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CHeader",{attrs:{fixed:"","with-subheader":"",light:""}},[a("CToggler",{staticClass:"ml-3 d-lg-none",attrs:{"in-header":""},on:{click:function(e){return t.$store.commit("toggleSidebarMobile")}}}),t._v(" "),a("CToggler",{staticClass:"ml-3 d-md-down-none",attrs:{"in-header":""},on:{click:function(e){return t.$store.commit("toggleSidebarDesktop")}}}),t._v(" "),a("CHeaderBrand",{staticClass:"mx-auto d-lg-none",attrs:{to:"/"}},[a("CImg",{staticClass:"c-sidebar-brand-full",attrs:{src:"/assets/images/pesantren.png",height:56}})],1),t._v(" "),a("CHeaderNav",{staticClass:"d-md-down-none mr-auto"},[a("CHeaderNavItem",{staticClass:"px-3 pt-2"},[a("h5",[t._v("Ahlan Wa Sahlan di Halaman Aplikasi Tahfizh Pesantren Pondok Quran.")])])],1),t._v(" "),a("CHeaderNav",{staticClass:"d-md-down-none flex-end"},[a("CHeaderNavItem",{staticClass:"d-md-down-none"},[a("CHeaderNavLink",[a("CIcon",{attrs:{name:"cil-bell"}})],1)],1),t._v(" "),a("CHeaderNavItem",{staticClass:"d-md-down-none mx-1"},[a("CHeaderNavLink",[a("CButton",{attrs:{variant:"ghost",color:"danger"},on:{click:t.logout}},[t._v("Logout")])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=c.exports},95:function(t,e,a){var n=a(106);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(11)(n,r);n.locals&&(t.exports=n.locals)}}]);