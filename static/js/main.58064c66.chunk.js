(window.webpackJsonpresume=window.webpackJsonpresume||[]).push([[0],{16:function(e,t,a){e.exports=a(34)},21:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),l=a.n(o),c=(a(21),a(3)),i=a(8),s=a(6),u=a(4),m=a(2),f=a(5),d=a(12),p=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={toggle:!1},e.onMouseEnter=e.onMouseEnter.bind(Object(m.a)(e)),e.onMouseLeave=e.onMouseLeave.bind(Object(m.a)(e)),e}return Object(f.a)(t,e),Object(i.a)(t,[{key:"onMouseEnter",value:function(){this.setState({toggle:!0})}},{key:"onMouseLeave",value:function(){this.setState({toggle:!1})}},{key:"render",value:function(){var e=this,t=this.state.toggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"home"},r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement(d.Spring,{from:{opacity:"0"},to:{opacity:t?"1":"0",width:t?"100%":"0%",backgroundColor:t?"white":"black"},config:{duration:700}},(function(t){return r.a.createElement("div",{onMouseEnter:function(){return e.onMouseEnter()},onMouseLeave:function(){return e.onMouseLeave()}},r.a.createElement("h1",{className:"responsive-headline"},"Pelle Zackrisson"),r.a.createElement("div",{style:t,id:"underline"}))})),r.a.createElement("h3",null," Welcome to this portfolio that is done in react. ",r.a.createElement("br",null),"I'm a ",r.a.createElement("span",null,"FrontEnd Developer"),", creating awesome and effective visual identities for companies of all sizes . Let's ",r.a.createElement("a",{className:"smoothscroll",href:"#about"}," start scrolling"),"and learn more ",r.a.createElement("a",{className:"smoothscroll",href:"#about"},"about me"),"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/pellennen"},r.a.createElement("i",{className:"fa fa-facebook"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/per-zackrisson-a0343b172"},r.a.createElement("i",{className:"fa fa-linkedin"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/rangeltangel"},r.a.createElement("i",{className:"fa fa-instagram"})))))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))," ")}}]),t}(n.Component),E=a(11),b=a(9);var h=function(){var e=Object(n.useState)(!0),t=Object(E.a)(e,2),a=t[0],o=t[1],l=Object(b.c)({from:{x:0},x:a?1:0,config:{duration:4e3}}).x;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{onClick:function(){return o(!a)}},r.a.createElement(b.a.div,{style:{opacity:l.interpolate({range:[0,1],output:[.3,4]}),transform:l.interpolate({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]}).interpolate((function(e){return"scale(".concat(e,")")}))}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,"I prefer to keep learning, continue challenging myself, and do interesting things. I\u2019m easily inspired and more then willing to follow my fascinations wherever they take me. I\u2019m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. I\u2019m a people-person with deep emotions and empathy. Feel free to get in touch by any means of communication."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,"Per Zackrisson"),r.a.createElement("br",null),r.a.createElement("span",null,"Fr\xe4mlingsv\xe4gen 19C",r.a.createElement("br",null),"126 48 H\xe4gersten"),r.a.createElement("br",null),r.a.createElement("span",null,"0731417253"),r.a.createElement("br",null),r.a.createElement("span",null,"perszackrisson@gmail.com"))),r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null)))," ")," ")),r.a.createElement("div",{className:"things"},"My passions")))},v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={toggle:!1},e.onMouseEnter=e.onMouseEnter.bind(Object(m.a)(e)),e.onMouseLeave=e.onMouseLeave.bind(Object(m.a)(e)),e}return Object(f.a)(t,e),Object(i.a)(t,[{key:"onMouseEnter",value:function(){this.setState({toggle:!0})}},{key:"onMouseLeave",value:function(){this.setState({toggle:!1})}},{key:"render",value:function(){var e=this,t=this.state.toggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement(d.Spring,{from:{opacity:"0"},to:{opacity:t?"1":"0"},config:{duration:700}},(function(t){return r.a.createElement("div",{onMouseEnter:function(){return e.onMouseEnter()},onMouseLeave:function(){return e.onMouseLeave()}},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{style:t,className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{style:t,className:"smoothscroll",href:"#passions"},"Passions")))})))," ")," ")}}]),t}(n.Component),g=function(e,t){return[-(t-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1]},y=function(e,t,a){return"perspective(500px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(a,")")};var w=function(){var e=Object(b.c)((function(){return{xys:[0,0,1],config:{mass:5,tension:1e3,friction:100}}})),t=Object(E.a)(e,2),a=t[0],n=t[1];return r.a.createElement("section",{id:"about"},r.a.createElement("div",{class:"centerpic"},r.a.createElement(b.a.div,{id:"profile-pic",onMouseMove:function(e){var t=e.clientX,a=e.clientY;return n({xys:g(t,a)})},onMouseLeave:function(){return n({xys:[0,0,1]})},style:{transform:a.xys.interpolate(y)}})))},O=a(10);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=[{id:0,url:"photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=993&q=80"},{id:1,url:"photo-1511854005000-f27912f66ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},{id:2,url:"photo-1454165205744-3b78555e5572?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},{id:3,url:"photo-1557286581-db6c124a6e2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}];var N=function(){var e=Object(n.useState)(0),t=Object(E.a)(e,2),a=t[0],o=t[1],l=Object(b.d)(M[a],(function(e){return e.id}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:b.b.molasses});return Object(n.useEffect)((function(){setInterval((function(){return o((function(e){return(e+1)%4}))}),2e3)}),[]),l.map((function(e){var t=e.item,a=e.props,n=e.key;return r.a.createElement(b.a.div,{id:"passions",key:n,class:"bg",style:k({},a,{backgroundImage:"url(https://images.unsplash.com/".concat(t.url,"&auto=format&fit=crop)")})})}))};var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(v,null),r.a.createElement(w,null),r.a.createElement(h,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.58064c66.chunk.js.map