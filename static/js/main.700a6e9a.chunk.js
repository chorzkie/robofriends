(window.webpackJsonprobofriends=window.webpackJsonprobofriends||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(8),s=n(2),l=(n(28),n(5)),u=n(6),d=n(9),h=n(7),f=n(10),b=function(e){var t=e.id,n=e.name,r=e.username,a=e.email;return o.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?150x150")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,"Username: ",r),o.a.createElement("p",null,"ID number: ",t),o.a.createElement("p",null,a)))},p=function(e){var t=e.Robots;return o.a.createElement("div",null,t.map((function(e,n){return o.a.createElement(b,{key:t[n].id,id:t[n].id,name:t[n].name,username:t[n].username,email:t[n].email})})))},m=function(e){var t=e.searchChange;return o.a.createElement("div",{className:"tc pa2"},o.a.createElement("input",{className:"pa3 ba b--blue bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},g=(n(29),function(e){return o.a.createElement("div",{style:{overflow:"scroll",height:"500px"}},e.children)}),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("div",null,o.a.createElement("h1",{className:"tc"},"Well, this is embarrassing...")):this.props.children}}]),t}(o.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.Robots.filter((function(t){return t.name.toLowerCase().includes(e.props.searchField.toLowerCase())}));return this.props.isPending?o.a.createElement("div",{className:"tc f1"},o.a.createElement("h1",null,"Loading...")):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"RoboFriends"),o.a.createElement(m,{searchChange:this.props.onSearchChange}),o.a.createElement(g,null,o.a.createElement(E,null,o.a.createElement(p,{Robots:t}))))}},{key:"componentDidMount",value:function(){this.props.onRequestRobots()}}]),t}(o.a.Component),w=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,Robots:e.requestRobots.Robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,function(e){e({type:"CHANGE_SEARCH_FIELD",payload:n})}));var n},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(v),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(30);var y={searchField:""},S={isPending:"",Robots:[],error:""},j=n(17),C=n(18),_=Object(j.createLogger)(),k=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{Robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(s.d)(k,Object(s.a)(C.a,_));i.a.render(o.a.createElement(c.a,{store:N},o.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");R?(!function(e,t){fetch(e).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.700a6e9a.chunk.js.map