(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{16:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(90),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e3a243c3-5c88-4a36-9397-738aef75b12f"}}),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e,t){return t?a.post("follow/".concat(e),{}).then((function(e){return e.data})):a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getProfile:function(e){if(void 0!==e||null!==e)return a.get("profile/"+e).then((function(e){return e.data})).catch((function(e){return console.error(e)}))},getStatus:function(e){return a.get("profile/status/"+e).then((function(e){return e.data})).catch((function(e){return console.error(e)}))},putStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e})).catch((function(e){return console.error(e)}))}},i={getUserData:function(){return a.get("auth/me").then((function(e){return e.data})).catch((function(e){return console.error(e)}))},login:function(e,t,n,r){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logOut:function(){return a.delete("auth/login")}}},17:function(e,t,n){e.exports={conteiner:"Nav_conteiner__2kGgD",link:"Nav_link__1CVGd",active:"Nav_active__XSt-p"}},235:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(41),c=n(28),i=n(29),o=n(32),s=n(31),l=n(39),f=n.n(l),d=n(9),p=n(11),h=n(8),m=n.n(h),v=n(10),g=n(7),b=n(25),O="INITUAL_SUCCESS",E={initial:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(g.a)(Object(g.a)({},e),{},{initial:!0});default:return e}},_=n(40),w=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(_.a,{isFetching:!0})},a.a.createElement(e,t))}},y=n(27),k=n(57),N=n.n(k),S=n(15),C=n(238),x=n(236),T=function(e){return a.a.createElement("div",null,a.a.createElement("h2",{className:N.a.top},"FreeNet"),a.a.createElement("div",{className:N.a.login_linck},!1!==e.auth?a.a.createElement("div",null,a.a.createElement(C.a,{inline:!0},a.a.createElement(x.a,{onClick:e.logOutThunk,variant:"outline-light"},e.login+":: LogOut"))):a.a.createElement("div",null,a.a.createElement(d.a,{to:"/login"}),a.a.createElement(C.a,{inline:!0},a.a.createElement(S.b,{className:"btn btn-outline-light",to:"/login"},"::LogIn")))))},A=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(T,{login:this.props.login,auth:this.props.auth,logOutThunk:this.props.logOutThunk})}}]),n}(a.a.Component),P=Object(y.b)((function(e){return{auth:e.auth.auth,login:e.auth.login}}),{setUserData:b.e,logOutThunk:b.c})(A),I=n(17),R=n.n(I),F=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:R.a.conteiner},a.a.createElement("div",null,a.a.createElement(S.b,{className:R.a.link,activeClassName:R.a.active,to:"/profile"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),a.a.createElement("div",null,a.a.createElement(S.b,{className:R.a.link,activeClassName:R.a.active,to:"/dialogs"},"\u0414\u0438\u0430\u043b\u043e\u0433\u0438")),a.a.createElement("div",null,a.a.createElement(S.b,{className:R.a.link,activeClassName:R.a.active,to:"/news"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")),a.a.createElement("div",null,a.a.createElement(S.b,{className:R.a.link,activeClassName:R.a.active,to:"/users"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),a.a.createElement("div",null,a.a.createElement(S.b,{className:R.a.link,activeClassName:R.a.active,to:"/sittings"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")))}}]),n}(r.Component),L=(n(174),n(237)),U=n(21),G=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,311))})),D=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,312))})),W=a.a.lazy((function(){return n.e(7).then(n.bind(null,310))})),z=a.a.lazy((function(){return Promise.all([n.e(0),n.e(8),n.e(9)]).then(n.bind(null,313))})),H=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,314))})),M=Object(p.a)(),Y=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initialAppThunk()}},{key:"render",value:function(){return this.props.initial?a.a.createElement("div",{className:f.a.conteinerRow},a.a.createElement("div",{className:f.a.header},a.a.createElement(P,null)),a.a.createElement("div",{className:f.a.sidebar},a.a.createElement(F,null)),a.a.createElement(L.a,{className:f.a.content},a.a.createElement(d.b,{history:M,path:"/dialogs",render:w(G)}),a.a.createElement(d.b,{history:M,path:"/profile/:uid?",render:w(z)}),a.a.createElement(d.b,{history:M,path:"/users",render:w(W)}),a.a.createElement(d.b,{history:M,path:"/news",render:w(D)}),a.a.createElement(d.b,{history:M,path:"/login",render:w(H)}))):a.a.createElement(_.a,{isFetching:!0})}}]),n}(a.a.Component),B=Object(U.compose)(d.f,Object(y.b)((function(e){return{auth:e.auth.auth,initial:e.app.initial}}),{initialAppThunk:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(b.b)());case 2:e.sent?t({type:O}):console.log("ERR CCONNECT");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(79),K=n(80),X=n(81),Z=n(82),V=n(83),$=n(94),q=n(95),Q=n(89),ee=Object(U.combineReducers)({app:j,auth:b.a,users:K.a,userProfile:X.a,dialogs:Z.a,news:V.a,status:J.a,form:Q.a}),te=Object(U.createStore)(ee,Object(q.composeWithDevTools)(Object(U.applyMiddleware)($.a))),ne=te;window.store=te,Object(u.render)(a.a.createElement(S.a,null,a.a.createElement(y.a,{store:ne},a.a.createElement(B,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,n){"use strict";n.d(t,"e",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h}));var r=n(8),a=n.n(r),u=n(10),c=n(7),i=n(16),o=n(34),s="SET_USER_DATA",l={userId:null,login:null,email:null,auth:null};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(c.a)(Object(c.a)({},e),{},{userId:t.userId,login:t.login,email:t.email,auth:t.auth});default:return e}};var f=function(e,t,n,r){return{type:s,userId:e,login:t,email:n,auth:r}},d=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getUserData();case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return",!1);case 7:if(0!==n.resultCode){e.next=12;break}return t(f(n.data.id,n.data.login,n.data.email,!0)),e.abrupt("return",!0);case 12:if(1!==n.resultCode){e.next=15;break}return t(f(n.data.id,n.data.login,n.data.email,!1)),e.abrupt("return",!0);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var r=Object(u.a)(a.a.mark((function r(u){var c,s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?u(d()):10===c.data.resultCode&&(s=c.data.messages.lenght>0?c.data.messages:c.data.messages[0],u(Object(o.b)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},h=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logOut();case 2:0===(n=e.sent).data.resultCode?t(f(null,null,null,!1)):console.error(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},39:function(e,t,n){e.exports={conteinerRow:"App_conteinerRow__3RgF7",header:"App_header__3ZZ1n",sidebar:"App_sidebar__1l9Om",content:"App_content__3La4L",footer:"App_footer__29Fsv"}},40:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n.p+"static/media/loading.7d04f822.gif",c=n(91),i=n.n(c);t.a=function(e){return e.isFetching?a.a.createElement("img",{className:i.a.loading,alt:"preload",src:u}):null}},57:function(e,t,n){e.exports={top:"Header_top__Y48KN",login_linck:"Header_login_linck__3mXkk"}},79:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(8),a=n.n(r),u=n(10),c=n(16),i="SET_STATUS",o=null;t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return t.status;default:return e}};var s=function(e){return{type:i,status:e}},l=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:return r=t.sent,n(s(r)),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.putStatus(e);case 2:void 0!==(r=t.sent)&&0===r.data.resultCode&&n(s(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},80:function(e,t,n){"use strict";n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return j}));var r=n(8),a=n.n(r),u=n(10),c=n(26),i=n(7),o=n(16),s="TOGGLE_FOLLOWING_IN_PROGRESS",l="FOLLOWED",f="SET_USERS",d="SET_CURRENT_PAGE",p="TOTAL_COUNT",h="IS_FETCHING",m={usersArr:[],pageSize:5,totalCount:0,currentPage:1,isFetching:!1,userProfile:null,followingInProgress:[]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{usersArr:e.usersArr.map((function(e){return e.id===t.id?Object(i.a)(Object(i.a)({},e),{},{followed:t.val}):e})).reverse()});case f:return Object(i.a)(Object(i.a)({},e),{},{usersArr:t.usersArr});case d:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case p:return Object(i.a)(Object(i.a)({},e),{},{totalCount:t.totalCount});case h:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetcing});case s:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.id]):Object(c.a)(e.followingInProgress.filter((function(e){return e!==t.id})))});default:return e}};var v=function(e,t){return{type:l,id:e,val:t}},g=function(e){return{type:d,currentPage:e}},b=function(e){return{type:h,isFetcing:e}},O=function(e,t){return{type:s,id:e,isFetching:t}},E=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(b(!0)),n.next=3,o.c.getUsers(e,t);case 3:u=n.sent,r((c=u.items,{type:f,usersArr:c})),r((a=u.totalCount,{type:p,totalCount:a})),r(b(!1));case 7:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()},j=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(O(e,!0)),n.next=3,o.c.follow(e,t);case 3:0===n.sent.resultCode&&(r(O(e,!1)),r(v(e,t)));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},81:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l}));var r=n(8),a=n.n(r),u=n(10),c=n(16),i="SET_USER_PROFILE",o={data:{}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return t.userProfile;default:return e}};var s=function(e){return{type:i,userProfile:e}},l=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfile(e);case 2:return r=t.sent,n(s(r)),t.abrupt("return",r.userId);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},82:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var r=n(26),a=n(34),u="GET_DIALOGS_ITEMS",c="SET_MESSAGE",i=[{user:"One",message:"Hi!"},{user:"Two",message:"Hello!"}];t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return e;case c:return[].concat(Object(r.a)(e),[{user:t.to,message:t.message}]);default:return e}};var o=function(){return function(e){e({type:u})}},s=function(e,t){return function(n){n(function(e,t){return{type:c,to:e,message:t}}(e,t)),n(Object(a.a)("message"))}}},83:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(26),a=n(7),u="SET_NEWS",c="DEL_NEWS",i={arr:[{id:1,text:"\u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430, \u0441\u0432\u0435\u0442\u0438\u0442 \u0441\u043e\u043b\u043d\u0446\u0435! \u0425\u043e\u0447\u0443 \u043f\u0438\u0432\u043e!"},{id:2,text:"\u0422\u0435\u043c\u043d\u043e\u0435 \u043f\u0438\u0432\u043e \u0438 \u0447\u0438\u043f\u044b\u0441\u044b, \u0447\u043b\u0443\u0447\u0448\u0435 \u0447\u0435\u043c \u043a\u043e\u0434\u0438\u0442\u044c!"}]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(a.a)(Object(a.a)({},e),{},{arr:[].concat(Object(r.a)(e.arr),[{text:t.text}])});case c:return Object(a.a)(Object(a.a)({},e),{},{arr:e.arr.filter((function(e){return e.id!==t.id}))});default:return e}};var o=function(e){return function(t){t({type:u,text:e})}}},91:function(e,t,n){e.exports={loading:"loading_loading__20RRY"}}},[[235,2,3]]]);
//# sourceMappingURL=main.abb2b66c.chunk.js.map