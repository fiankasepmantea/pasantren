(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{107:function(t,e,a){"use strict";a(96)},108:function(t,e,a){(t.exports=a(10)(!1)).push([t.i,"\n.card-text {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n",""])},119:function(t,e,a){"use strict";a.r(e);var i=a(92),r=a(83),n=a(102);var s=(t,e=100)=>{if(void 0===t)throw new TypeError("Hex color is not defined");if(!t.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error(t+" is not a valid hex color");let a,i,r;return 7===t.length?(a=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),r=parseInt(t.slice(5,7),16)):(a=parseInt(t.slice(1,2),16),i=parseInt(t.slice(2,3),16),r=parseInt(t.slice(3,5),16)),`rgba(${a}, ${i}, ${r}, ${e/100})`};var o={name:"CLTotalSetorJuz",components:{CChartLine:r.CChartLine},data:function(){return{labels:["Mei-2","Mei-3","Mei-4","Juni-1","Juni-2","Juni-3","Juni-4","Juli-1","Juli-2","Juli-3","Juli-4","Juli-5","Agustus-1","Agustus-2","Agustus-3","Agustus-4"]}},computed:{ds:function(){for(var t,e,a=Object(n.a)("info")||"#20a8d8",i=this.labels.length,r=[],o=0;o<=i;o++)r.push((t=0,e=30,Math.floor(Math.random()*(e-t+1)+t)));return[{label:"Juz",backgroundColor:s(a,10),borderColor:a,pointHoverBackgroundColor:a,borderWidth:2,data:r}]},opt:function(){return{maintainAspectRatio:!1,scales:{xAxes:[{ticks:{callback:function(t){return t.split("-")[1]}}},{gridLines:{drawOnChartArea:!1},ticks:{callback:function(t){var e=t.split("-")[0];return 3==t.split("-")[1]?e:""}}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(6),max:30},gridLines:{display:!0}}]},elements:{point:{radius:2,hitRadius:10,hoverRadius:4,hoverBorderWidth:3},line:{tension:0}},legend:{display:!1}}}}},l=a(9),u=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("CChartLine",{attrs:{datasets:this.ds,options:this.opt,labels:this.labels}})}),[],!1,null,null,null).exports;var c={name:"CCSetoranUnit",components:{CChartBar:r.CChartBar},data:function(){return{labels:["SD","SMP","SMA"]}},computed:{ds:function(){for(var t,e,a=Object(n.a)("success")||"#4dbd74",i=this.labels.length,r=[],o=0;o<=i;o++)r.push((t=0,e=30,Math.floor(Math.random()*(e-t+1)+t)));return[{label:"Juz",backgroundColor:s(a,10),borderColor:a,pointHoverBackgroundColor:a,borderWidth:2,data:r}]},opt:function(){return{maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!0}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(6),max:30},gridLines:{display:!0}}]},elements:{point:{radius:2,hitRadius:10,hoverRadius:4,hoverBorderWidth:3},line:{tension:0}},legend:{display:!1}}}}},d=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("CChartBar",{attrs:{datasets:this.ds,options:this.opt,labels:this.labels}})}),[],!1,null,null,null).exports;var h={name:"CCSetoranMuhaffizh",components:{CChartLine:r.CChartLine},data:function(){return{labels:["Ciro","David","Pipin","Agif"]}},computed:{ds:function(){for(var t,e,a=Object(n.a)("warning")||"#f9b115",i=this.labels.length,r=[],o=0;o<=i;o++)r.push((t=0,e=30,Math.floor(Math.random()*(e-t+1)+t)));return[{label:"Juz",backgroundColor:s(a,10),borderColor:a,pointHoverBackgroundColor:a,borderWidth:2,data:r}]},opt:function(){return{maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!0}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(6),max:30},gridLines:{display:!0}}]},elements:{point:{radius:2,hitRadius:10,hoverRadius:4,hoverBorderWidth:3},line:{tension:0}},legend:{display:!1}}}}},p=Object(l.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("CChartLine",{attrs:{datasets:this.ds,options:this.opt,labels:this.labels}})}),[],!1,null,null,null).exports;var b={name:"CCSetoranGroup",components:{CChartLine:r.CChartLine},data:function(){return{labels:["Umar","Saidah","Sidik","Usman","Fajar"]}},computed:{ds:function(){for(var t,e,a=Object(n.a)("danger")||"#f86c6b",i=this.labels.length,r=[],o=0;o<=i;o++)r.push((t=0,e=30,Math.floor(Math.random()*(e-t+1)+t)));return[{label:"Juz",backgroundColor:s(a,10),borderColor:a,pointHoverBackgroundColor:a,borderWidth:2,data:r}]},opt:function(){return{maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!0}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(6),max:30},gridLines:{display:!0}}]},elements:{point:{radius:2,hitRadius:10,hoverRadius:4,hoverBorderWidth:3},line:{tension:0}},legend:{display:!1}}}}},f=Object(l.a)(b,(function(){var t=this.$createElement;return(this._self._c||t)("CChartLine",{attrs:{datasets:this.ds,options:this.opt,labels:this.labels}})}),[],!1,null,null,null).exports,C={components:{PageTitle:i.a,MainChart:u,ChartUnit:d,ChartMuhaffizh:p,ChartGroup:f}},m=(a(107),Object(l.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("PageTitle"),this._v(" "),e("b-row",[e("b-col",{attrs:{md:"12"}},[e("b-card",{attrs:{title:"Total Setoran Juz"}},[e("MainChart")],1)],1)],1),this._v(" "),e("b-row",[e("b-col",{attrs:{md:"4"}},[e("b-card",{attrs:{title:"Setoran Unit"}},[e("ChartUnit")],1)],1),this._v(" "),e("b-col",{attrs:{md:"4"}},[e("b-card",{attrs:{title:"Setoran Muhaffizh"}},[e("ChartMuhaffizh")],1)],1),this._v(" "),e("b-col",{attrs:{md:"4"}},[e("b-card",{attrs:{title:"Setoran Group"}},[e("ChartGroup")],1)],1)],1)],1)}),[],!1,null,null,null));e.default=m.exports},92:function(t,e,a){"use strict";var i={name:"page-title"},r=a(9),n=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("CRow",[e("CCol",{staticClass:"col-12"},[e("span",{staticClass:"text-uppercase page-subtitle"},[this._v("Dashboard")]),this._v(" "),e("h3",{staticClass:"page-title"},[this._v(this._s(this.$route.meta.title))])])],1)],1)}),[],!1,null,null,null);e.a=n.exports},96:function(t,e,a){var i=a(108);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(11)(i,r);i.locals&&(t.exports=i.locals)}}]);