(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t){},135:function(e,t,a){"use strict";a.r(t);var n=a(78),r=a(1),l=a.n(r),o=a(19),s=a.n(o),c=(a(85),a(86),a(14)),u=a(15),i=a(17),m=a(16),p=a(18),g=a(136),d=a(137),E=a(138),h=a(139),f=a(140),v=a(141),b=a(142),y=a(143),w=a(144),O=a(145),k=a(146),N=a(69),j=a.n(N),_=function(e){return l.a.createElement(g.a,null,l.a.createElement(d.a,null,l.a.createElement(E.a,{md:4,className:"offset-md-4"},l.a.createElement(h.a,null,l.a.createElement(f.a,null,l.a.createElement("h1",null,l.a.createElement("i",{className:"fas fa-user-circle"})," ",e.title," ")),l.a.createElement(v.a,null,l.a.createElement(b.a,{onSubmit:e.handleEvent},"Login"!==e.title&&l.a.createElement(y.a,null,l.a.createElement(w.a,{type:"text",name:"name",placeholder:"Enter your Name",required:!0})),l.a.createElement(y.a,null,l.a.createElement(w.a,{type:"email",name:"email",placeholder:"Enter your Email",required:!0})),l.a.createElement(y.a,null,l.a.createElement(w.a,{type:"password",name:"password",placeholder:"Enter your Password",required:!0})),"Login"!==e.title&&l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement(w.a,{type:"url",name:"profile",placeholder:"Enter your url image"})),l.a.createElement(y.a,null,l.a.createElement(w.a,{type:"select",name:"gender",required:!0},l.a.createElement("option",{value:""},"Select your gender"),l.a.createElement("option",null,"Male"),l.a.createElement("option",null,"Female"),l.a.createElement("option",null,"Others")))),l.a.createElement(y.a,null,l.a.createElement(O.a,{outline:!0,color:"success",size:"lg",block:!0},e.title),l.a.createElement("small",null,l.a.createElement(k.a,{className:j.a.enlace,to:e.path.uri,color:"info"},e.path.text)))))))))},S=a(42),C=a.n(S),A=a(72),M=function(){var e=Object(A.a)(C.a.mark(function e(t,a,n,r){var l,o,s,c;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=JSON.stringify(a),(o=new Headers).append("Content-Type","application/json"),o.append("Authorization",atob(localStorage.getItem("fakeAuth"))),e.next=6,fetch(t,"get"!==n?{method:n,body:l,headers:o}:{method:n,headers:o});case 6:return s=e.sent,e.next=9,s.json();case 9:c=e.sent,r(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Error: ".concat(e.t0));case 16:case"end":return e.stop()}},e,this,[[0,13]])}));return function(t,a,n,r){return e.apply(this,arguments)}}(),x=a(13),G=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e3,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,l=[];switch(l.push(t,a,n,r),e){case 200:x.NotificationManager.success.apply(x.NotificationManager,l);break;case 400:case 401:case 403:case 406:x.NotificationManager.warning.apply(x.NotificationManager,l);break;case 409:case 404:x.NotificationManager.info.apply(x.NotificationManager,l);break;case 500:x.NotificationManager.error.apply(x.NotificationManager,l)}},U={FormRegister:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.email,r=t.password,l=t.gender,o=t.profile;M("/auth/register",{name:a.value,email:n.value,password:r.value,gender:l.value,profile:o.value},"post",function(e){200===e.status?window.location.href="/":G(e.status,e.response)})},FormLogin:function(e){e.preventDefault();var t=e.target,a=t.email,n=t.password;M("/auth/login",{email:a.value,password:n.value},"post",function(e){200===e.status?(localStorage.setItem("fakeAuth",btoa(e.response)),window.location.href="/home"):G(e.status,e.response)})},FormUpdate:function(e,t){e.preventDefault();var a=e.target,n=a.name,r=a.email,l=a.password,o=a.gender,s=a.profile;M("/auth/update/".concat(t),{name:n.value,email:r.value,password:l.value,gender:o.value,profile:s.value},"put",function(e){200===e.status?window.location.href="/home":G(e.status,e.response)})}},P=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"L_R"},this.props.fakeAuth("public"),l.a.createElement(_,{title:"Login",handleEvent:U.FormLogin.bind(this),path:{uri:"/register",text:"Create an account"}}))}}]),t}(r.Component),R=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"L_R"},this.props.fakeAuth("public"),l.a.createElement(_,{title:"Register",handleEvent:U.FormRegister.bind(this),path:{uri:"/",text:"Go to login"}}))}}]),t}(r.Component),D=a(12),I=a(159),L=a(160),F=a(155),H=a(150),q=a(22),z=a.n(q),B=a(28),V=a(73),T=Object(V.a)(function(e,t){switch(t.type){case"USERS":return Object(B.a)({},e,{users:t.users});case"GROUPS":return Object(B.a)({},e,{groups:t.groups});case"GROUP_NAME":return Object(B.a)({},e,{groupname:t.groupname});case"LOAD_MESSAGE":return Object(B.a)({},e,{messages:t.messages});default:return e}},{users:[],groups:[],groupname:"",messages:[]}),W=a(75),Y=function(e){return{type:"USERS",users:e}},J=a.n(W)()("http://localhost:5000/");null!==localStorage.getItem("fakeAuth")&&(J.on("connect",function(){K(function(e){return J.emit("newuser",{_id:e.response._id,name:e.response.name,email:e.response.email,profile:e.response.profile})})}),J.on("getgroups",function(e){return T.dispatch({type:"GROUPS",groups:e})}),J.on("users",function(e){return T.dispatch(Y(X(e)))}),J.on("updateusers",function(e){return T.dispatch(Y(X(e)))}),J.on("updatelocalchat",function(e){T.dispatch({type:"GROUP_NAME",groupname:e.group}),Q(e.group),""!==e.status&&G(e.status,e.message)}),J.on("updatechat",function(e){return G(e.status,e.message)}),J.on("loadmessages",function(e){return T.dispatch(function(e){return{type:"LOAD_MESSAGE",messages:e}}(e))}));var K=function(e){return M("/auth/getusers",{},"get",function(t){return e(t)})},$=function(e){return J.emit("switchgroup",e)},Q=function(e){return J.emit("askformessages",e)},X=function(e){var t=[],a=void 0;return Object.values(e).forEach(function(e){a=e.split("-"),t.push({_id:a[0],name:a[1],email:a[2],profile:a[3]})}),t},Z={GetDataUser:K,NewGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=void 0;""===t?(e.preventDefault(),a={name:e.target.group.value,type:"All"}):a=t,M("/events/newgroup",a,"post",function(e){console.log(e),void 0!==e.groupname&&(J.emit("groupregister"),$(e.groupname)),G(e.status,e.message)})},NewMessage:function(e){""!==e.message?M("/events/newmessage",e,"post",function(t){Q(e.groupname),document.getElementsByName("message")[0].value=""}):G(406,"The message field can not be empty")},SwitchGroup:$,AskformessagesIndividual:function(e){var t=e.groupname,a=e.message;J.emit("askformessages",""===a?t:{groupname:t,message:a})}},ee=a(147),te=a(148),ae=a(149),ne=a(151),re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(D.a)(Object(D.a)(a))),a.state={isOpen:!1},a.typechat="",a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"componentWillUpdate",value:function(){this.typechat=this.props.typechat}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(ee.a,{color:"light",light:!0,expand:"md"},l.a.createElement("h4",null,"#","All"===this.typechat?this.props.groupname:"Private conversation"),l.a.createElement(te.a,{onClick:this.toggle}),l.a.createElement(ae.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(H.a,{className:"ml-auto",navbar:!0},l.a.createElement(ne.a,null,l.a.createElement(w.a,{className:"inputHome",type:"text",name:"searchusers",placeholder:"Search conversation",onChange:function(t){return e.props.AskformessagesIndividual({groupname:e.props.groupname,message:t.target.value})}}))))))}}]),t}(r.Component),le=a(76),oe=a.n(le),se=function(e){return l.a.createElement("div",null,l.a.createElement(d.a,null,l.a.createElement(E.a,{md:1},l.a.createElement("img",{width:"70",height:"60",alt:"img",className:"rounded",src:e.data.profile})),l.a.createElement(E.a,{md:11},l.a.createElement("span",null,l.a.createElement("b",null,e.data.username)," \xa0 ",l.a.createElement("small",null," ",oe()(e.data.createdAt).format("MMMM Do YYYY, h:mm:ss a"))),l.a.createElement(d.a,null,l.a.createElement(E.a,{md:12},l.a.createElement("p",null,e.data.message))))),l.a.createElement("br",null))},ce=a(161),ue=a(152),ie=a(153),me=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(D.a)(Object(D.a)(a))),a.state={popoverOpen:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return l.a.createElement("div",{className:"float-right"},l.a.createElement(O.a,{id:"Popover1",size:"sm",outline:!0,color:"secondary"},l.a.createElement("i",{className:"fas fa-plus-circle fa-2x"})),l.a.createElement(ce.a,{placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},l.a.createElement(ue.a,null,"Create a new Group"),l.a.createElement(ie.a,null,l.a.createElement(b.a,{onSubmit:this.props.newgroup.bind(this)},l.a.createElement(y.a,null,l.a.createElement(w.a,{type:"text",required:!0,name:"group",placeholder:"Title of the new group"})),l.a.createElement(y.a,null,l.a.createElement(O.a,{size:"lg",block:!0,color:"success"},"Create"))))))}}]),t}(r.Component),pe=a(154),ge=function(e){return l.a.createElement("div",null,l.a.createElement(ne.a,null,l.a.createElement(pe.a,null,l.a.createElement(O.a,{onClick:e.groupchange.bind(void 0),outline:!0,color:"secondary",size:"sm",block:!0},e.data.name," \xa0",l.a.createElement(F.a,{color:"All"===e.data.type?"primary":"danger"},e.data.type)))))},de=function(e){return l.a.createElement("div",null,l.a.createElement(pe.a,null,l.a.createElement(O.a,{onClick:e.newgroup.bind(void 0),outline:!0,color:"secondary",size:"sm",block:!0},l.a.createElement("i",{className:"fas fa-circle ".concat(e.userActive)}),"\xa0 ",e.name)))},Ee=a(164),he=a(156),fe=a(157),ve=a(158),be=function(e){return l.a.createElement("div",null,l.a.createElement(Ee.a,{isOpen:e.modal,toggle:e.toggle},l.a.createElement(b.a,{onSubmit:function(t){return U.FormUpdate(t,e.user._id)}},l.a.createElement(he.a,{toggle:e.toggle},l.a.createElement("i",{className:"fas fa-user-edit"})," Edit user profile"),l.a.createElement(fe.a,null,l.a.createElement(d.a,{form:!0},l.a.createElement(E.a,{md:6},l.a.createElement(y.a,null,l.a.createElement(w.a,{type:"text",name:"name",placeholder:"Enter your Name",required:!0,defaultValue:e.user.name}))),l.a.createElement(E.a,{md:6},l.a.createElement(y.a,null,l.a.createElement(w.a,{type:"email",name:"email",placeholder:"Enter your Email",required:!0,defaultValue:e.user.email})))),l.a.createElement(d.a,{form:!0},l.a.createElement(E.a,{md:6},l.a.createElement(y.a,null,l.a.createElement(w.a,{type:"password",name:"password",placeholder:"Enter your Password"}))),l.a.createElement(E.a,{md:6},l.a.createElement(y.a,null,l.a.createElement(w.a,{type:"select",name:"gender",required:!0,defaultValue:e.user.gender},l.a.createElement("option",{value:""},"Select your gender"),l.a.createElement("option",null,"Male"),l.a.createElement("option",null,"Female"),l.a.createElement("option",null,"Others"))))),l.a.createElement(d.a,{form:!0},l.a.createElement(E.a,{md:12},l.a.createElement(w.a,{type:"url",name:"profile",placeholder:"Enter your url image",defaultValue:e.user.profile})))),l.a.createElement(ve.a,null,l.a.createElement(O.a,{type:"submit",color:"primary"},"Edit"),l.a.createElement(O.a,{type:"button",color:"secondary",onClick:e.toggle},"Cancel")))))},ye=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={_id:"",name:"",email:"",profile:"",gender:"",usersCount:0,groupsCount:1,users:[],groups:[],groupname:"",message:"",messages:[],modal:!1,typechat:"All"},a.toggle=a.toggle.bind(Object(D.a)(Object(D.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"componentDidMount",value:function(){var e=this;this.props.fakeAuth("compare")&&(Z.GetDataUser(function(t){return e.setState(t.response)}),T.subscribe(function(){e.setState({users:T.getState().users,usersCount:T.getState().users.length,groups:T.getState().groups,groupsCount:document.getElementsByClassName("groupsNav")[0].childElementCount,groupname:T.getState().groupname,messages:T.getState().messages})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(g.a,{fluid:!0},this.props.fakeAuth("private"),l.a.createElement(d.a,null,l.a.createElement(E.a,{md:1,className:"text-white ".concat(z.a.menubar1)},l.a.createElement("br",null),l.a.createElement(d.a,null,l.a.createElement(E.a,{md:12},l.a.createElement(I.a,{className:"rounded",top:!0,width:"100%",height:"60%",src:this.state.profile,alt:"Card image cap"}),l.a.createElement(L.a,null,this.state.name)),l.a.createElement(E.a,{md:12,className:"columnBtns"},l.a.createElement(O.a,{outline:!0,color:"secondary",onClick:this.toggle},l.a.createElement("i",{className:"fas fa-user-edit fa-2x"}))),l.a.createElement(E.a,{md:12},l.a.createElement(O.a,{onClick:this.props.logout,className:"mt-3",outline:!0,color:"danger"},l.a.createElement("i",{className:"fas fa-sign-out-alt fa-3x"}))))),l.a.createElement(E.a,{md:2,className:"text-white ".concat(z.a.menubar2)},l.a.createElement("br",null),l.a.createElement("h3",null,"Groups",l.a.createElement("small",{className:"ml-2"},l.a.createElement(F.a,{color:"warning"},this.state.groupsCount)),l.a.createElement(me,{newgroup:function(e){return Z.NewGroup(e)}})),l.a.createElement(d.a,null,l.a.createElement(E.a,{md:12,className:"mt-2"},l.a.createElement(h.a,{body:!0,className:z.a.groupContent},l.a.createElement(H.a,{vertical:!0,className:"groupsNav"},l.a.createElement(ge,{groupchange:function(){Z.SwitchGroup("group1"),e.setState({typechat:"All"})},data:{type:"All",name:"group1"}}),this.state.groups.map(function(t,a){return"All"===t.type?l.a.createElement(ge,{groupchange:function(){Z.SwitchGroup(t.name),e.setState({typechat:"All"})},key:a,data:t}):""}))))),l.a.createElement("br",null),l.a.createElement("h3",null,"Users",l.a.createElement("small",null,l.a.createElement(F.a,{className:"float-right",color:"warning"},this.state.usersCount))),l.a.createElement(w.a,{className:"float-right",type:"search",name:"searchusers",placeholder:"Search users"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.a,null,l.a.createElement(E.a,{md:12},l.a.createElement(h.a,{body:!0,className:z.a.usersContent},l.a.createElement(H.a,{vertical:!0},this.state.users.map(function(t,a){return t._id!==e.state._id?l.a.createElement(de,{key:a,newgroup:function(){e.setState({typechat:"Private"}),Z.NewGroup(void 0,{name:"".concat(e.state._id,"-").concat(t._id),type:"Private",relationship:{user1:e.state._id,user2:t._id}})},name:t.name,email:t.email,userActive:z.a.userActive}):""})))))),l.a.createElement(E.a,{md:9},l.a.createElement(re,{groupname:this.state.groupname,typechat:this.state.typechat,AskformessagesIndividual:Z.AskformessagesIndividual.bind(this)}),l.a.createElement(d.a,{className:"mt-1 mb-2"},l.a.createElement(E.a,{md:12},l.a.createElement(h.a,{body:!0,className:z.a.bodyContent},this.state.messages.map(function(e,t){return l.a.createElement(se,{data:e,key:t})}))),l.a.createElement(E.a,{md:12},l.a.createElement(w.a,{onChange:function(t){return e.setState({message:t.target.value})},type:"textarea",name:"message",placeholder:"Write a new message"})," ",l.a.createElement("br",null),l.a.createElement(O.a,{onClick:function(){return Z.NewMessage({groupname:e.state.groupname,username:e.state.name,profile:e.state.profile,message:e.state.message})},color:"primary",size:"lg",block:!0},"Send Message"))))),l.a.createElement(be,{modal:this.state.modal,user:{_id:this.state._id,name:this.state.name,email:this.state.email,profile:this.state.profile,gender:this.state.gender},toggle:this.toggle}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=a(163),Oe=a(166),ke=a(162),Ne=a(165),je=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:localStorage.getItem("fakeAuth");return"public"===e&&null!==t?l.a.createElement(we.a,{to:"/home"}):"private"===e&&null===t?l.a.createElement(we.a,{to:"/"}):"compare"===e?t:null},_e=function(){window.confirm("Are you sure you want to log out?")&&(localStorage.removeItem("fakeAuth"),window.location.href="/")},Se=function(e){var t=e.component,a=Object(n.a)(e,["component"]);return l.a.createElement(Oe.a,Object.assign({},a,{render:function(e){return l.a.createElement(t,Object.assign({},e,{fakeAuth:je,logout:_e}))}}))};s.a.render(l.a.createElement(ke.a,null,l.a.createElement("div",null,l.a.createElement(x.NotificationContainer,null),l.a.createElement(Ne.a,null,l.a.createElement(Se,{exact:!0,path:"/",component:P}),l.a.createElement(Se,{path:"/register",component:R}),l.a.createElement(Se,{path:"/home",component:ye}),l.a.createElement(Oe.a,{render:function(){return l.a.createElement(we.a,{to:"/"})}})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e,t,a){e.exports={menubar1:"Home_menubar1__10zEC",menubar2:"Home_menubar2__3jj5k","nav-item":"Home_nav-item__1TuS9",userActive:"Home_userActive__pe7Vb",bodyContent:"Home_bodyContent__5df6w",groupContent:"Home_groupContent__1KrMB",usersContent:"Home_usersContent__2FL0i"}},69:function(e,t,a){e.exports={enlace:"App_enlace__2ew_r"}},80:function(e,t,a){e.exports=a(135)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.038f617d.chunk.js.map