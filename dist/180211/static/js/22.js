webpackJsonp([22],{jqh9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("3cXf"),s=n.n(a),i=n("4YfN"),u=n.n(i),r=n("0xDb"),o={name:"sub-menu-nav",props:{menuNav:Object,required:!0},components:{SubMenuNav:l},methods:{gotoRouteHandle:function(e){var t=Object(r.a)(e);/\S/.test(t)&&this.$router.push({name:t})}}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.menuNav.list&&e.menuNav.list.length>=1?n("el-submenu",{attrs:{"data-idx":e.menuNav.menuId+"",index:e.menuNav.menuId+""}},[n("template",{attrs:{slot:"title"},slot:"title"},[n("i",{class:["site-sidebar__menu-icon",e.menuNav.icon?e.menuNav.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(e.menuNav.name))])]),e._v(" "),e._l(e.menuNav.list,function(e){return n("sub-menu-nav",{key:e.menuId,attrs:{"menu-nav":e}})})],2):n("el-menu-item",{attrs:{index:e.menuNav.menuId+"","data-idx":e.menuNav.menuId+""},on:{click:function(t){e.gotoRouteHandle(e.menuNav.url)}}},[n("i",{class:["site-sidebar__menu-icon",e.menuNav.icon?e.menuNav.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(e.menuNav.name))])])},staticRenderFns:[]},l=n("46Yf")(o,m,!1,null,null,null).exports,c=n("gyMJ"),v=n("9rMa"),d=n("Xo2K"),_=n.n(d),N={data:function(){return{menuNavActive:"1-1"}},components:{SubMenuNav:l},watch:{$route:"routeHandle"},created:function(){var e=this;this.getMenuNavList().then(function(){e.routeHandle(e.$route)})},methods:u()({getMenuNavList:function(){var e=this;return c.a.menu.nav().then(function(t){var n=t.data;n&&0===n.code?(e.UPDATE_MENU_NAV_LIST(n.menuList),sessionStorage.setItem("permissions",s()(n.permissions||"[]"))):(e.UPDATE_MENU_NAV_LIST([]),sessionStorage.setItem("permissions","[]"))})},routeHandle:function(e){if(/^\/n\/.*$/.test(e.path)){var t=this.$store.state.contentTabs.filter(function(t){return t.name===e.name})[0];if(_()(t)){var n=this.getMenuNavByRouteName(e.name,this.$store.state.menuNavList);_()(n)||(t={id:n.menuId,name:e.name,title:n.name,type:-1!==(window.SITE_CONFIG.nestIframeRouteNameList||[]).indexOf(e.name)?"iframe":"module",url:n.url},this.ADD_CONTENT_TAB(t))}this.menuNavActive=t.id+"",this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e.name})}},getMenuNavByRouteName:function(e,t){for(var n=0;n<t.length;n++){if(t[n].list&&t[n].list.length>=1)return this.getMenuNavByRouteName(e,t[n].list);if(Object(r.a)(t[n].url)===e)return t[n]}}},Object(v.b)(["UPDATE_MENU_NAV_LIST","ADD_CONTENT_TAB","UPDATE_CONTENT_TABS_ACTIVE_NAME"]))},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"site-sidebar"},[n("div",{staticClass:"site-sidebar__inner"},[n("el-menu",{staticClass:"site-sidebar__menu",attrs:{"default-active":e.menuNavActive,collapse:e.$store.state.sidebarCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"1-1"},on:{click:function(t){e.$router.push({name:"home"})}}},[n("i",{staticClass:"site-sidebar__menu-icon fa fa-home"}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),e._v(" "),e._l(e.$store.state.menuNavList,function(e){return n("sub-menu-nav",{key:e.menuId,attrs:{"menu-nav":e}})})],2)],1)])},staticRenderFns:[]},h=n("46Yf")(N,f,!1,null,null,null);t.default=h.exports}});