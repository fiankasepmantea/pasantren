(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{126:function(a,e,t){"use strict";t.r(e);var i=t(84),r=t(13);function n(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,i)}return t}function l(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){o(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var s={inject:["validator"],name:"MuhaffizhForm",created:function(){this.getUnit(),this.$validator=this.validator},computed:l(l({},Object(r.e)(["errors"])),Object(r.e)("muhaffizh",{muhaffizh:function(a){return a.muhaffizh},muhaffizh_unit:function(a){return a.muhaffizh_unit}})),watch:{return:function(){this.getUnit()}},methods:l(l(l({},Object(r.d)("muhaffizh",["CLEAR_FORM"])),Object(r.b)("muhaffizh",["getUnit"])),{},{validateState:function(a){return this.veeFields[a]&&(this.veeFields[a].dirty||this.veeFields[a].validated)?!this.veeErrors.has(a):null}}),destroyed:function(){this.CLEAR_FORM()},data:function(){return{selected_pendidikan:null,options_pendidikan:[{value:"D3",text:"D3"},{value:"S1",text:"S1"},{value:"S2",text:"S2"},{value:"S3",text:"S3"}],selected_status:null,options_status:[{value:"Aktif",text:"Aktif"},{value:"Tidak Aktif",text:"Tidak Aktif"}]}}},u=t(9),f=Object(u.a)(s,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("b-form",{on:{submit:function(a){a.stopPropagation(),a.preventDefault()}}},[t("b-form-group",{attrs:{label:"Unit","label-cols":"3","label-for":"unit"}},[t("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],attrs:{id:"unit",options:a.muhaffizh_unit,placeholder:"Pilih Unit",name:"unit",state:a.validateState("unit"),"data-vv-as":"Unit"},model:{value:a.muhaffizh.unit_id,callback:function(e){a.$set(a.muhaffizh,"unit_id",e)},expression:"muhaffizh.unit_id"}}),a._v(" "),t("b-form-invalid-feedback",[a._v(a._s(a.veeErrors.first("unit")))])],1),a._v(" "),t("b-form-group",{attrs:{label:"Nomor Induk","label-cols":"3","label-for":"nomorinduk"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],attrs:{id:"nomorinduk",placeholder:"Masukan Nomor Induk",name:"nomorinduk",state:a.validateState("nomorinduk"),"data-vv-as":"NomorInduk"},model:{value:a.muhaffizh.nomor_induk,callback:function(e){a.$set(a.muhaffizh,"nomor_induk",e)},expression:"muhaffizh.nomor_induk"}}),a._v(" "),t("b-form-invalid-feedback",[a._v(a._s(a.veeErrors.first("nomorinduk")))])],1),a._v(" "),t("b-form-group",{attrs:{label:"Nama","label-cols":"3","label-for":"nama"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],attrs:{id:"nama",placeholder:"Masukan Nama",name:"nama",state:a.validateState("nama"),"data-vv-as":"Nama"},model:{value:a.muhaffizh.nama,callback:function(e){a.$set(a.muhaffizh,"nama",e)},expression:"muhaffizh.nama"}}),a._v(" "),t("b-form-invalid-feedback",[a._v(a._s(a.veeErrors.first("nama")))])],1),a._v(" "),t("b-form-group",{attrs:{label:"Alamat","label-cols":"3","label-for":"alamat"}},[t("b-form-textarea",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],attrs:{id:"alamat",placeholder:"Masukan Alamat",name:"alamat",state:a.validateState("alamat"),"data-vv-as":"Alamat"},model:{value:a.muhaffizh.alamat,callback:function(e){a.$set(a.muhaffizh,"alamat",e)},expression:"muhaffizh.alamat"}}),a._v(" "),t("b-form-invalid-feedback",[a._v(a._s(a.veeErrors.first("alamat")))])],1),a._v(" "),t("b-form-group",{attrs:{label:"Tempat Lahir","label-cols":"3","label-for":"tempatlahir"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],attrs:{id:"tempatlahir",placeholder:"Masukan Tempat Lahir",name:"tempatlahir",state:a.validateState("tempatlahir"),"data-vv-as":"TempatLahir"},model:{value:a.muhaffizh.tempat_lahir,callback:function(e){a.$set(a.muhaffizh,"tempat_lahir",e)},expression:"muhaffizh.tempat_lahir"}}),a._v(" "),t("b-form-invalid-feedback",[a._v(a._s(a.veeErrors.first("tempatlahir")))])],1),a._v(" "),t("b-form-group",{attrs:{label:"Tanggal Lahir","label-cols":"3","label-for":"tanggallahir"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],attrs:{id:"tanggallahir",placeholder:"Masukan Tanggal Lahir",type:"date",name:"tanggallahir",state:a.validateState("tanggallahir"),"data-vv-as":"TanggalLahir"},model:{value:a.muhaffizh.tanggal_lahir,callback:function(e){a.$set(a.muhaffizh,"tanggal_lahir",e)},expression:"muhaffizh.tanggal_lahir"}}),a._v(" "),t("b-form-invalid-feedback",[a._v(a._s(a.veeErrors.first("tanggallahir")))])],1),a._v(" "),t("b-form-group",{attrs:{label:"No HP","label-cols":"3","label-for":"no_hp"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],attrs:{id:"no_hp",placeholder:"Masukan No HP",name:"nohp",state:a.validateState("no_hp"),"data-vv-as":"NoHP"},model:{value:a.muhaffizh.no_hp,callback:function(e){a.$set(a.muhaffizh,"no_hp",e)},expression:"muhaffizh.no_hp"}}),a._v(" "),t("b-form-invalid-feedback",[a._v(a._s(a.veeErrors.first("no_hp")))])],1),a._v(" "),t("b-form-group",{attrs:{label:"Mulai Bertugas","label-cols":"3","label-for":"mulaibertugas"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],attrs:{id:"mulaibertugas",placeholder:"Masukan Tanggal Bertugas",type:"date",name:"mulaibertugas",state:a.validateState("mulaibertugas"),"data-vv-as":"MulaiBertugas"},model:{value:a.muhaffizh.mulai_bertugas,callback:function(e){a.$set(a.muhaffizh,"mulai_bertugas",e)},expression:"muhaffizh.mulai_bertugas"}}),a._v(" "),t("b-form-invalid-feedback",[a._v(a._s(a.veeErrors.first("mulaibertugas")))])],1),a._v(" "),t("b-form-group",{attrs:{label:"Pendidikan Terakhir","label-cols":"3","label-for":"pendidikanterakhir"}},[t("b-form-select",{attrs:{options:a.options_pendidikan},model:{value:a.muhaffizh.pendidikan_terakhir,callback:function(e){a.$set(a.muhaffizh,"pendidikan_terakhir",e)},expression:"muhaffizh.pendidikan_terakhir"}},[a._v(a._s(a.selected_pendidikan))])],1),a._v(" "),t("b-form-group",{attrs:{label:"Status","label-cols":"3","label-for":"status"}},[t("b-form-select",{attrs:{options:a.options_status},model:{value:a.muhaffizh.status,callback:function(e){a.$set(a.muhaffizh,"status",e)},expression:"muhaffizh.status"}},[a._v(a._s(a.selected_status))])],1),a._v(" "),t("b-form-group",{attrs:{label:"Kelas/Angkatan","label-cols":"3","label-for":"kelasangkatan"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],attrs:{id:"kelasangkatan",placeholder:"Masukan Angkatan/Kelas",name:"kelasangkatan",state:a.validateState("kelasangkatan"),"data-vv-as":"KelasAngkatan"},model:{value:a.muhaffizh.angkatan_kelas,callback:function(e){a.$set(a.muhaffizh,"angkatan_kelas",e)},expression:"muhaffizh.angkatan_kelas"}}),a._v(" "),t("b-form-invalid-feedback",[a._v(a._s(a.veeErrors.first("kelasangkatan")))])],1)],1)],1)}),[],!1,null,null,null).exports,c=t(96);function d(a,e){return function(a){if(Array.isArray(a))return a}(a)||function(a,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(a)))return;var t=[],i=!0,r=!1,n=void 0;try{for(var l,o=a[Symbol.iterator]();!(i=(l=o.next()).done)&&(t.push(l.value),!e||t.length!==e);i=!0);}catch(a){r=!0,n=a}finally{try{i||null==o.return||o.return()}finally{if(r)throw n}}return t}(a,e)||function(a,e){if(!a)return;if("string"==typeof a)return h(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);"Object"===t&&a.constructor&&(t=a.constructor.name);if("Map"===t||"Set"===t)return Array.from(a);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(a,e)}(a,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(a,e){(null==e||e>a.length)&&(e=a.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=a[t];return i}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,i)}return t}function v(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){b(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function b(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var p={name:"Muhaffizhs",components:{pagetitle:i.a,Form:f,DataView:c.a},created:function(){this.loadData()},data:function(){return{createModal:!1,viewModal:!1,editModal:!1,editedId:null,perPage:20,currentPage:1,currentMuhaffizh:{},pageOptions:[10,20,50,100],header:[{key:"nama",label:"Nama"},{key:"no_hp",label:"No HP"},{key:"mulai_bertugas",label:"Mulai Bertugas"},{key:"status",label:"Status"},{key:"angkatan_kelas",label:"Kelas/Angkatan"},{key:"list_unit.nama",label:"Unit"},{key:"actions",label:"Aksi",stickyColumn:!0,class:"action-columns"}]}},provide:function(){return{validator:this.$validator}},computed:v({rows:function(){return this.muhaffizhs&&this.muhaffizhs.data?this.muhaffizhs.data.length:0}},Object(r.e)("muhaffizh",{muhaffizhs:function(a){return a.muhaffizhs}})),methods:v(v({},Object(r.b)("muhaffizh",["getMuhaffizhs","removeMuhaffizh","editMuhaffizh","updateMuhaffizh","submitMuhaffizh"])),{},{loadData:function(){var a=this;this.$store.commit("loadingOn"),setTimeout((function(){a.getMuhaffizhs(),a.$store.commit("loadingOff")}),1e3)},deleteMuhaffizh:function(a){var e=this;this.$swal({title:"Apakah anda yakin ?",text:"Tindakan ini akan menghapus data secara permanen",showCancelButton:!0}).then((function(t){t.value&&e.removeMuhaffizh(a)}))},handleView:function(a){this.viewModal=!0;for(var e=0,t=Object.entries(a);e<t.length;e++){var i=d(t[e],2),r=i[0],n=i[1];if("string"==typeof n||"number"==typeof n){if(r.toLowerCase().indexOf("_id")>=0||r.toLowerCase().indexOf("id_")>=0)continue;this.currentMuhaffizh[r]=n}}this.currentMuhaffizh.unit=a.list_unit.nama},handleEdit:function(a){this.editModal=!0,this.editMuhaffizh(a),this.editedId=a},handleUpdate:function(a){var e=this;a.preventDefault(),this.$validator.validateAll().then((function(a){a&&(e.updateMuhaffizh(e.editedId),e.$toasted.global.success_toast({message:"Data Muhaffizh berhasil diubah.."}),e.editModal=!1,e.loadData())})).catch((function(a){e.$toasted.global.failed_toast({message:"Data Muhaffizh gagal untuk diubah.."})}))},handleSubmit:function(a){var e=this;a.preventDefault(),this.$validator.validateAll().then((function(a){a&&(e.submitMuhaffizh(),e.$toasted.global.success_toast({message:"Data Muhaffizh berhasil ditambahkan.."}),e.createModal=!1,e.loadData())})).catch((function(a){e.$toasted.global.failed_toast({message:"Data Muhaffizh gagal untuk ditambahkan.."})}))}})},g=Object(u.a)(p,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("pagetitle"),a._v(" "),t("CRow",[t("CCardBody",{staticStyle:{"padding-top":"0px"}},[t("div",{staticClass:"d-flex justify-content-end"},[t("b-button",{attrs:{size:"sm",variant:"success"},on:{click:function(e){a.createModal=!0}}},[a._v("+ Tambah Muhaffizh")])],1),a._v(" "),t("b-form",{attrs:{inline:""}},[t("b-form-group",{staticClass:"mb-2",attrs:{label:"Show :","label-size":"sm","label-for":"perPageSelect"}},[t("b-form-select",{staticClass:"ml-2",attrs:{id:"perPageSelect",size:"sm",options:a.pageOptions},model:{value:a.perPage,callback:function(e){a.perPage=e},expression:"perPage"}})],1)],1),a._v(" "),t("b-table",{attrs:{items:a.muhaffizhs.data,fields:a.header,"current-page":a.currentPage,"per-page":a.perPage,"sticky-header":"","no-border-collapse":"",striped:"",hover:"",small:"",responsive:"",outlined:"","show-empty":""},scopedSlots:a._u([{key:"cell(actions)",fn:function(e){return[t("b-button",{attrs:{variant:"info",size:"sm"},on:{click:function(t){return a.handleView(e.item)}}},[a._v("\n              View\n            ")]),a._v(" "),t("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(t){return a.handleEdit(e.item.id)}}},[a._v("\n              Edit\n            ")]),a._v(" "),t("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(t){return a.deleteMuhaffizh(e.item.id)}}},[a._v("\n              Delete\n            ")])]}}])}),a._v(" "),t("b-pagination",{attrs:{"total-rows":a.rows,"per-page":a.perPage,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last",size:"sm",align:"right"},model:{value:a.currentPage,callback:function(e){a.currentPage=e},expression:"currentPage"}}),a._v(" "),t("b-modal",{attrs:{title:"Tambah Data Muhaffizh","no-close-on-backdrop":"","no-close-on-esc":"",centered:""},on:{ok:a.handleSubmit},model:{value:a.createModal,callback:function(e){a.createModal=e},expression:"createModal"}},[t("Form")],1),a._v(" "),t("b-modal",{attrs:{title:"Ubah Data Muhaffizh","no-close-on-backdrop":"","no-close-on-esc":"",centered:""},on:{ok:a.handleUpdate},model:{value:a.editModal,callback:function(e){a.editModal=e},expression:"editModal"}},[t("Form")],1),a._v(" "),t("b-modal",{attrs:{title:"Lihat Data Muhaffizh","body-class":"form-view",centered:""},model:{value:a.viewModal,callback:function(e){a.viewModal=e},expression:"viewModal"}},[t("DataView",{attrs:{items:a.currentMuhaffizh}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=g.exports},84:function(a,e,t){"use strict";var i={name:"page-title"},r=t(9),n=Object(r.a)(i,(function(){var a=this.$createElement,e=this._self._c||a;return e("div",[e("CRow",[e("CCol",{staticClass:"col-12"},[e("span",{staticClass:"text-uppercase page-subtitle"},[this._v("Master Data")]),this._v(" "),e("h3",{staticClass:"page-title"},[this._v(this._s(this.$route.meta.title))])])],1)],1)}),[],!1,null,null,null);e.a=n.exports},96:function(a,e,t){"use strict";var i={name:"PropertyView",props:{items:{type:Object,default:function(a){return{info:"Data is empty"}}}},computed:{getItems:function(){return this.items}}},r=t(9),n=Object(r.a)(i,(function(){var a=this.$createElement,e=this._self._c||a;return e("div",this._l(this.getItems,(function(a,t,i){return e("div",[e("b-form-group",{attrs:{label:t.replace(/[_-]/g," ").trim().split(" ").map((function(a){return a[0].toUpperCase()+a.substring(1).toLowerCase()})).join(" "),"label-cols":"3",labelFor:t}},[e("b-form-input",{attrs:{id:t.replace(/[_-]/g,"").trim(),value:a,plaintext:!0}})],1)],1)})),0)}),[],!1,null,null,null);e.a=n.exports}}]);