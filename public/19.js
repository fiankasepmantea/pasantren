(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{140:function(t,e,a){"use strict";a.r(e);var o={name:"Report",components:{pagetitle:a(88).a},data:function(){return{tgl_from:new Date((new Date).getFullYear(),0,2).toISOString().substr(0,10),tgl_to:(new Date).toISOString().substr(0,10)}},methods:{handleReport:function(){var t=this,e=new FormData;e.append("tgl_from",this.tgl_from),e.append("tgl_to",this.tgl_to);return fetch("/api/laporan/setoran",{method:"POST",body:e,headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(t){if(t.ok)return t.blob();throw new Error("Gagal mengunduh laporan.")})).then((function(t){var e=document.createElement("a");e.href=URL.createObjectURL(t),e.setAttribute("download","laporan_setoran.xlsx"),e.click()})).catch((function(e){t.$toasted.global.failed_toast({message:e})}))}}},l=a(9),n=Object(l.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("pagetitle"),t._v(" "),a("CCol",{attrs:{md:"6"}},[a("CCard",[a("CCardBody",[a("b-form-group",{attrs:{label:"Tanggal","label-cols":"3","label-for":"tgl_from"}},[a("b-form-input",{attrs:{id:"tgl_from",type:"date",name:"tgl_from"},model:{value:t.tgl_from,callback:function(e){t.tgl_from=e},expression:"tgl_from"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"s/d","label-cols":"3","label-for":"tgl_to"}},[a("b-form-input",{attrs:{id:"tgl_to",type:"date",name:"tgl_to"},model:{value:t.tgl_to,callback:function(e){t.tgl_to=e},expression:"tgl_to"}})],1),t._v(" "),a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.handleReport()}}},[a("font-awesome-icon",{attrs:{icon:"file-excel"}}),t._v(" Unduh Laporan")],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports},88:function(t,e,a){"use strict";var o={name:"page-title"},l=a(9),n=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("CRow",[e("CCol",{staticClass:"col-12"},[e("span",{staticClass:"text-uppercase page-subtitle"},[this._v("Laporan")]),this._v(" "),e("h3",{staticClass:"page-title"},[this._v(this._s(this.$route.meta.title))])])],1)],1)}),[],!1,null,null,null);e.a=n.exports}}]);