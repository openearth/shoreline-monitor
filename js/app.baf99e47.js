(function(e){function t(t){for(var s,o,i=t[0],l=t[1],c=t[2],f=0,u=[];f<i.length;f++)o=i[f],r[o]&&u.push(r[o][0]),r[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(n.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},r={app:0},n=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/shoreline-monitor/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"110c":function(e,t,a){},"393a":function(e,t,a){"use strict";var s=a("110c"),r=a.n(s);r.a},"3c50":function(e,t,a){},"3ede":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return a(t)}function n(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-map-component"),a("v-info-card")],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"map"}},[a("v-mapbox",{ref:"map",attrs:{"access-token":"pk.eyJ1Ijoic2lnZ3lmIiwiYSI6Il8xOGdYdlEifQ.3-JZpqwUa3hydjAJFXIlMA","map-style":"mapbox://styles/mapbox/satellite-v9",center:[0,0],zoom:6,pitch:0,id:"map"}}),a("v-transect-dialog",{attrs:{transect_id:e.transect_id,dialog:e.dialog},on:{changedialog:function(t){e.dialog=!1}}})],1)},i=[],l=(a("ac6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{row:"","justify-center":"","pa-0":""}},[a("v-dialog",{attrs:{id:"transect-dialog","pa-0":""},model:{value:e.showdialog,callback:function(t){e.showdialog=t},expression:"showdialog"}},[a("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[e._v("Open Dialog")]),a("v-card",{attrs:{id:"transect-card","pa-0":""}},[a("v-card-title",{staticClass:"headline"}),a("v-card-text",{attrs:{"pa-0":""}},[a("v-container",{attrs:{"pa-0":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs7:""}},[a("div",{attrs:{id:"container"}})]),a("v-flex",{attrs:{xs5:""}},[a("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.items,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.name))]),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.data))])]}}])}),a("v-spacer"),a("div",{attrs:{id:"inquiries"}},[e._v("\n                For inquiries please fill in this "),a("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSfd6VpTH5WPaHrUm1ZQfN2FQ6az77Wd7BykEt-orWMMpIVYFA/viewform",target:"_blank"}},[e._v("form")]),e._v(".\n              ")])],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:function(t){e.showdialog=!1}}},[e._v("\n          CLOSE\n        ")])],1)],1)],1)],1)}),c=[],d=(a("7f7f"),a("28a5"),a("ea7f")),f=a.n(d),u=a("0319"),p=a.n(u),m=a("c1df"),b=a.n(m);p()(f.a);var h={props:{dialog:{type:Boolean},transect_id:{type:String}},data:function(){return{table:{},headers:[{text:"",sortable:!1,value:"name"},{text:"Properties",value:"data",align:"right"}],items:[{value:!1,name:"Country",data:""},{value:!1,name:"Profile",data:""},{value:!1,name:"Rate of Change",data:""},{value:!1,name:"Sandy",data:""}]}},mounted:function(){},methods:{getProfileData:function(e){var t=this,a=e.split("_"),s=a[1],r=a[2],n="https://storage.googleapis.com/shoreline-monitor/features/".concat(s,"/").concat(r,"/BOX_").concat(s,"_").concat(r,".json");console.log(n),fetch(n).then(function(e){return e.json()}).then(function(a){var s=a.features.filter(function(t){return t.properties.transect_id===e}),r=s[0];t.table={},t.items.forEach(function(t){"Country"===t.name&&(t.data=r.properties.country_name),"Profile"===t.name&&(t.data=e),"Rate of Change"===t.name&&(t.data=r.properties.change_rate.toFixed(2)+" +/- "+r.properties.change_rate_unc.toFixed(2)+" m/year"),"Sandy"===t.name&&(t.data=r.properties.flag_sandy)}),console.log(r);var n=r.properties.dt,o=n.map(function(e){return b()("1984").add(365*e,"day").valueOf()}),i=r.properties.distances.map(function(e,t){return[o[t],e]}),l=r.properties.intercept,c=r.properties.change_rate,d=[[o[0],l],[o[o.length-1],l+n[n.length-1]*c]];f.a.chart("container",{chart:{},xAxis:{min:o[0],max:o[o.length-1],type:"datetime",dateTimeLabelFormats:{day:"%e of %b"}},yAxis:{min:0},title:{text:"Shoreline profile"},legend:{enabled:!1},series:[{type:"line",name:"Regression Line",data:d,marker:{enabled:!1},states:{hover:{lineWidth:0}},enableMouseTracking:!1},{type:"scatter",name:"Observations",data:i,marker:{radius:4}}]})})}},computed:{showdialog:{get:function(){return this.getProfileData(this.transect_id),this.dialog},set:function(e){this.$emit("changedialog",e)}}}},v=h,g=(a("a3f3"),a("2877")),j=Object(g["a"])(v,l,c,!1,null,null,null);j.options.__file="TransectDialog.vue";var y=j.exports,_=[{id:"shoreline-profiles",type:"symbol",source:{type:"vector",url:"mapbox://camvdvries.a95za8o5"},minzoom:9,"source-layer":"ShorelineMonitorPoint-cpol2b",layout:{"text-field":["step",["get","Value"],"――――――",-5,"―――――",-4,"――――",-3,"―――",-2,"――",-1,"-",0,"―",1,"――",2,"―――",3,"――――",4,"―――――",5,"――――――"],"text-anchor":["step",["get","Value"],"left",0,"right"],"text-font":["Overpass Mono Bold","Arial Unicode MS Regular"],"text-rotate":["interpolate",["linear"],["get","Angle"],-3.14143155771224,360,3.1413780228666,0],"text-size":["interpolate",["linear"],["zoom"],0,5,22,40],"text-allow-overlap":!0,"text-rotation-alignment":"map"},paint:{"text-color":["interpolate",["linear"],["get","NormalizedValue"],-1,"hsl(359, 79%, 47%)",-.5,"hsl(30, 98%, 69%)",0,"hsl(60, 100%, 87%)",.5,"hsl(88, 59%, 63%)",1,"hsl(139, 70%, 35%)"],"text-translate-anchor":"map"}},{id:"shoreline-profiles-hover",type:"symbol",source:{type:"vector",url:"mapbox://camvdvries.a95za8o5"},minzoom:9,"source-layer":"ShorelineMonitorPoint-cpol2b",layout:{"text-field":["step",["get","Value"],"――――――",-5,"―――――",-4,"――――",-3,"―――",-2,"――",-1,"-",0,"―",1,"――",2,"―――",3,"――――",4,"―――――",5,"――――――"],"text-anchor":["step",["get","Value"],"left",0,"right"],"text-font":["Overpass Mono Bold","Arial Unicode MS Regular"],"text-rotate":["interpolate",["linear"],["get","Angle"],-3.14143155771224,360,3.1413780228666,0],"text-size":["interpolate",["linear"],["zoom"],0,6,22,42],"text-allow-overlap":!0,"text-rotation-alignment":"map"},paint:{"text-color":"#4538ff","text-translate-anchor":"map"},filter:["==","Transect_id",""]},{id:"shoreline-aggregated-glow-middle",type:"circle",source:{type:"vector",url:"mapbox://gerbenha.6z18bebw"},minzoom:4,maxzoom:9,"source-layer":"Aggregatedpointsz5-bsf5g2",paint:{"circle-radius":["interpolate",["linear"],["zoom"],0,2,9,18],"circle-blur":2,"circle-color":"#ffffff"}},{id:"shoreline-aggregated-middle",type:"circle",source:{type:"vector",url:"mapbox://gerbenha.6z18bebw"},minzoom:4,maxzoom:9,"source-layer":"Aggregatedpointsz5-bsf5g2",paint:{"circle-radius":["interpolate",["linear"],["zoom"],0,1,9,20],"circle-color":["step",["get","NormalizedValue"],"#D7191C",-.6,"#FDAE61",-.2,"#FFFFBF",.2,"#A6D96A",.6,"#1A9641"],"circle-opacity":["interpolate",["linear"],["zoom"],0,.28,9,1],"circle-blur":1}},{id:"shoreline-aggregated-glow",type:"circle",source:{type:"vector",url:"mapbox://gerbenha.0palcbmn"},minzoom:0,maxzoom:4,"source-layer":"Aggregatedpointsz0-0vqo71",paint:{"circle-radius":["interpolate",["linear"],["zoom"],0,2,9,18],"circle-blur":2,"circle-color":"#ffffff"}},{id:"shoreline-aggregated",type:"circle",source:{type:"vector",url:"mapbox://gerbenha.0palcbmn"},minzoom:0,maxzoom:4,"source-layer":"Aggregatedpointsz0-0vqo71",paint:{"circle-radius":["interpolate",["linear"],["zoom"],0,1,9,20],"circle-color":["step",["get","NormalizedValue"],"#D7191C",-.6,"#FDAE61",-.2,"#FFFFBF",.2,"#A6D96A",.6,"#1A9641"],"circle-opacity":["interpolate",["linear"],["zoom"],0,.28,9,1],"circle-blur":1}}],x={data:function(){return{map:null,transect_id:"BOX_120_124_53",hover_id:"",dialog:!1}},watch:{dialog:{handler:function(e){this.dialog=e,console.log("dialog",this.dialog)}}},mounted:function(){var e=this;this.map=this.$refs.map.map,this.map.on("load",function(){_.forEach(function(t){console.log(t),e.map.addLayer(t)}),e.map.on("mousemove","shoreline-profiles",function(t){e.map.getCanvas().style.cursor="pointer",e.hover_id!==t.features[0].properties.Transect_id&&(e.hover_id=t.features[0].properties.Transect_id,e.map.setFilter("shoreline-profiles-hover",["==","Transect_id",e.hover_id]))}),e.map.on("mouseleave","shoreline-profiles",function(){e.map.getCanvas().style.cursor="",e.map.setFilter("shoreline-profiles-hover",["==","Transect_id",""]),e.hover_id=""}),e.map.on("click","shoreline-profiles",function(t){console.log("shoreline click",t,t.features[0]),e.transect_id=t.features[0].properties.Transect_id,e.dialog=!0})})},methods:{deferredMountedTo:function(e){this.map=e}},components:{"v-transect-dialog":y}},z=x,k=(a("393a"),Object(g["a"])(z,o,i,!1,null,null,null));k.options.__file="MapComponent.vue";var w=k.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panel",{staticClass:"v-selection-panel",attrs:{value:0,id:"info-box"}},[a("v-expansion-panel-content",{attrs:{id:"info-content"}},[a("h2",{attrs:{slot:"header"},slot:"header"},[e._v("\n        Long-term Shoreline Changes (1984-2016)\n      ")]),a("p",[e._v("\n        The bars represent the erosion/accretion along coasts, every 500m, over the period 1984-2016.\n        Green bars indicate where shoreline accretion has occurred (natural accretion, land reclamation, nourishments).\n        Red bars indicate erosive shorelines, based on a linear fit through shoreline positions.\n        If you're zoomed in you can click on a profile to see a time series chart.\n      ")]),a("p"),a("div",{staticClass:"RdYlGn legend"},[a("span",{staticClass:"label-left"},[e._v("-3m/yr")]),a("div",{staticClass:"legend-box q0-5",attrs:{title:"-10"}},[e._v(" ")]),a("div",{staticClass:"legend-box q1-5",attrs:{title:"-5"}},[e._v(" ")]),a("div",{staticClass:"legend-box q2-5",attrs:{title:"0"}},[e._v(" ")]),a("div",{staticClass:"legend-box q3-5",attrs:{title:"5"}},[e._v(" ")]),a("div",{staticClass:"legend-box q4-5",attrs:{title:"10"}},[e._v(" ")]),a("span",{staticClass:"label-right"},[e._v("3m/yr")])]),a("p"),a("p",[e._v("\n        The results of the global analysis and methods can be found in:\n        "),a("a",{attrs:{href:"https://www.nature.com/articles/s41598-018-24630-6",target:"_blank"}},[e._v("Luijendijk et al., 2018, Scientific Reports")])]),a("p",[e._v("\n        For inquiries please fill in this "),a("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSfd6VpTH5WPaHrUm1ZQfN2FQ6az77Wd7BykEt-orWMMpIVYFA/viewform",target:"_blank"}},[e._v("form")]),e._v(".\n      ")]),a("p",[e._v("\n        This dataset is created in collaboration with the Delft University of Technology.\n      ")]),a("p",[a("img",{attrs:{alt:"",src:"src/assets/TUDelftLogo.png"}})]),a("div",{staticClass:"extra content info-buttons-content",attrs:{"data-dataset":"shoreline"}},[a("div",{staticClass:"left floated like"},[a("div",[a("a",{staticClass:"ui small primary button",attrs:{href:"https://twitter.com/beachmonitor",title:"Follow on Twitter",target:"_blank"}},[a("i",{staticClass:"twitter icon"})])]),a("div",[a("a",{staticClass:"ui small primary button",attrs:{id:"github-button",href:"https://github.com/deltares/aqua-monitor",title:"Fork or Follow me on GitHub",target:"_blank"}},[a("i",{staticClass:"github icon"})])]),a("div",[a("a",{staticClass:"ui small button",attrs:{href:"mailto:arjen.luijendijk@deltares.nl?subject=Shoreline Monitor Feedback",title:"Get in touch!"}},[a("i",{staticClass:"mail icon"})])]),a("div",[a("a",{staticClass:"ui small button",attrs:{id:"terms-button",href:"https://www.deltares.nl/en/disclaimer/",target:"_blank",title:"Terms of Use"}},[a("i",{staticClass:"copyright icon"})])])]),a("div",{staticClass:"right floated star"},[a("a",{staticClass:"ui small button info-close-button"},[a("i",{staticClass:"close icon"})])])])])],1)},F=[],O=(a("e192"),a("ac6d"),{data:function(){return{}},mounted:function(){},methods:{}}),A=O,T=(a("a031"),Object(g["a"])(A,C,F,!1,null,null,null));T.options.__file="InfoCard.vue";var S=T.exports,M={name:"app",components:{"v-map-component":w,"v-info-card":S}},P=M,q=(a("5c0b"),Object(g["a"])(P,r,n,!1,null,null,null));q.options.__file="App.vue";var D=q.exports,E=a("2f62");s["default"].use(E["a"]);var I=new E["a"].Store({state:{},mutations:{},actions:{}}),V=a("bd47"),L=a.n(V),U=(a("bf40"),a("ce5b")),B=a.n(U);s["default"].use(L.a),s["default"].use(B.a,{}),s["default"].config.productionTip=!1,new s["default"]({store:I,render:function(e){return e(D)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("5e27"),r=a.n(s);r.a},"5e27":function(e,t,a){},a031:function(e,t,a){"use strict";var s=a("3c50"),r=a.n(s);r.a},a3f3:function(e,t,a){"use strict";var s=a("3ede"),r=a.n(s);r.a}});
//# sourceMappingURL=app.baf99e47.js.map