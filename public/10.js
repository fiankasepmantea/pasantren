(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{104:function(t,e,a){var n=a(120);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(11)(n,r);n.locals&&(t.exports=n.locals)},119:function(t,e,a){"use strict";a(104)},120:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,"\n.action-columns {\n  width: 150px;\n  text-align: center;\n}\n",""])},125:function(t,e,a){"use strict";a.r(e);var n=a(84),r=a(13);function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={inject:["validator"],name:"UnitForm",computed:o(o({},Object(r.e)(["errors"])),Object(r.e)("unit",{unit:function(t){return t.unit}})),created:function(){this.$validator=this.validator},methods:o(o({},Object(r.d)("unit",["CLEAR_FORM"])),{},{validateState:function(t){return this.veeFields[t]&&(this.veeFields[t].dirty||this.veeFields[t].validated)?!this.veeErrors.has(t):null}}),destroyed:function(){this.CLEAR_FORM()}},c=a(9),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form",{on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[a("b-form-group",{attrs:{label:"Nama Unit","label-for":"nama","label-cols":"3"}},[a("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],attrs:{id:"nama",placeholder:"Masukan Nama Unit",name:"nama",state:t.validateState("nama"),"data-vv-as":"Nama"},model:{value:t.unit.nama,callback:function(e){t.$set(t.unit,"nama",e)},expression:"unit.nama"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(t.veeErrors.first("nama")))])],1),t._v(" "),a("b-form-group",{attrs:{label:"Keterangan","label-for":"keterangan","label-cols":"3"}},[a("b-form-textarea",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],attrs:{id:"keterangan",placeholder:"Masukan Keterangan",name:"keterangan",state:t.validateState("keterangan"),"data-vv-as":"Keterangan"},model:{value:t.unit.keterangan,callback:function(e){t.$set(t.unit,"keterangan",e)},expression:"unit.keterangan"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(t.veeErrors.first("keterangan")))])],1)],1)],1)}),[],!1,null,null,null).exports;function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var f={name:"Units",components:{pagetitle:n.a,Form:u},created:function(){this.loadData()},data:function(){return{createModal:!1,editModal:!1,editedId:null,perPage:20,currentPage:1,pageOptions:[10,20,50,100],header:[{key:"nama",label:"Nama Unit"},{key:"keterangan",label:"Keterangan"},{key:"actions",label:"Aksi",stickyColumn:!0,class:"action-columns"}]}},provide:function(){return{validator:this.$validator}},computed:p({rows:function(){return this.units&&this.units.data?this.units.data.length:0}},Object(r.e)("unit",{units:function(t){return t.units}})),methods:p(p({},Object(r.b)("unit",["getUnits","removeUnit","editUnit","updateUnit","submitUnit"])),{},{loadData:function(){var t=this;this.$store.commit("loadingOn"),setTimeout((function(){t.getUnits(),t.$store.commit("loadingOff")}),1e3)},deleteUnit:function(t){var e=this;this.$swal({title:"Apakah anda yakin ?",text:"Tindakan ini akan menghapus data secara permanen",showCancelButton:!0}).then((function(a){a.value&&e.removeUnit(t)}))},handleEdit:function(t){this.editModal=!0,this.editUnit(t),this.editedId=t},handleUpdate:function(t){var e=this;t.preventDefault(),this.$validator.validateAll().then((function(t){t&&(e.updateUnit(e.editedId),e.$toasted.global.success_toast({message:"Data Unit berhasil diubah.."}),e.editModal=!1,e.loadData())})).catch((function(t){e.$toast.global.failed_toast({message:"Data Unit gagal untuk diubah.."})}))},handleSubmit:function(t){var e=this;t.preventDefault(),this.$validator.validateAll().then((function(t){t&&(e.submitUnit(),e.$toasted.global.success_toast({message:"Data Unit berhasil ditambahkan.."}),e.createModal=!1,e.loadData())})).catch((function(t){e.$toasted.global.failed_toast({message:"Data Unit gagal ditambahkan.."})}))}})},v=(a(119),Object(c.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("pagetitle"),t._v(" "),a("CRow",[a("CCardBody",{staticStyle:{"padding-top":"0px"}},[a("div",{staticClass:"d-flex justify-content-end"},[a("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(e){t.createModal=!0}}},[t._v("+ Tambah Data")])],1),t._v(" "),a("b-form",{attrs:{inline:""}},[a("b-form-group",{staticClass:"mb-2",attrs:{label:"Show :","label-size":"sm","label-for":"perPageSelect"}},[a("b-form-select",{staticClass:"ml-2",attrs:{id:"perPageSelect",size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),t._v(" "),a("b-table",{attrs:{items:t.units.data,fields:t.header,"current-page":t.currentPage,"per-page":t.perPage,"sticky-header":"",striped:"",hover:"",small:"",responsive:"",outlined:"","show-empty":""},scopedSlots:t._u([{key:"cell(actions)",fn:function(e){return[a("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(a){return t.handleEdit(e.item.id)}}},[t._v("\n              Edit\n            ")]),t._v(" "),a("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(a){return t.deleteUnit(e.item.id)}}},[t._v("\n              Delete\n            ")])]}}])}),t._v(" "),a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last",size:"sm",align:"right"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),a("b-modal",{attrs:{title:"Tambah Data Unit","no-close-on-backdrop":"","no-close-on-esc":"",centered:""},on:{ok:t.handleSubmit},model:{value:t.createModal,callback:function(e){t.createModal=e},expression:"createModal"}},[a("Form")],1),t._v(" "),a("b-modal",{attrs:{title:"Ubah Data Grup","no-close-on-backdrop":"","no-close-on-esc":"",centered:""},on:{ok:t.handleUpdate},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}},[a("Form")],1)],1)],1)],1)}),[],!1,null,null,null));e.default=v.exports},84:function(t,e,a){"use strict";var n={name:"page-title"},r=a(9),i=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("CRow",[e("CCol",{staticClass:"col-12"},[e("span",{staticClass:"text-uppercase page-subtitle"},[this._v("Master Data")]),this._v(" "),e("h3",{staticClass:"page-title"},[this._v(this._s(this.$route.meta.title))])])],1)],1)}),[],!1,null,null,null);e.a=i.exports}}]);