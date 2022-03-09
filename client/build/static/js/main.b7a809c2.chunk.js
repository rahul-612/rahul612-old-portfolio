(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},35:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),i=t(11),n=t.n(i),r=(t(30),t(4)),l=(t(31),t(32),[{id:1,name:"css",percent:"90%"},{id:2,name:"html",percent:"90%"},{id:3,name:"react",percent:"80%"},{id:4,name:"javascript",percent:"80%"},{id:5,name:"node.js",percent:"65%"},{id:6,name:"UI design",percent:"50%"},{id:7,name:"mongoDB",percent:"65%"}]),o=t(0),m=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"bar flex",children:[Object(o.jsx)("div",{className:e.visible?"bar fill appear fill_bar_ani":"bar fill fade-in",ref:e.set,style:{width:e.percent},children:Object(o.jsx)("div",{className:"bar_name flex appear",children:e.name})}),Object(o.jsx)("span",{className:"bar_percent appear",children:e.percent})]})})};var j=function(e){var a=s.a.useState(null),t=Object(r.a)(a,2),c=t[0],i=t[1],n=s.a.useState(!1),l=Object(r.a)(n,2),o=l[0],m=l[1];return s.a.useEffect((function(){var a=new IntersectionObserver((function(e){var a=Object(r.a)(e,1)[0];m(a.isIntersecting)}),e);return c&&a.observe(c),function(){c&&a.unobserve(c)}}),[c,e]),[i,o]},d=function(e,a){document.querySelectorAll(".navBtn").forEach((function(e){e.classList.remove("active")})),e&&document.getElementsByClassName(a)[0].classList.add("active")},h=function(){var e=j({threshold:0,triggerOnce:!0}),a=Object(r.a)(e,2),t=a[0],c=a[1];return Object(o.jsxs)("section",{id:"about",className:"about",children:[Object(o.jsxs)("h1",{className:c?"heading_about appear fade-in h_ani":"heading_about fade-in",ref:t,children:["About",c?d(c,"aboutNavItem"):null]}),Object(o.jsxs)("div",{className:c?"my_section fade-in appear":"fade-in",ref:t,children:[Object(o.jsxs)("div",{className:"bio_container",children:[Object(o.jsx)("div",{className:"my_img"}),Object(o.jsxs)("div",{className:"my_bio flex",children:[Object(o.jsxs)("h1",{className:"flex",children:["Who's this guy",Object(o.jsx)("i",{class:"fas fa-question"})]}),Object(o.jsxs)("p",{className:"flex",children:[" Hi, My name is Rahul Kumar. I have a good knowledge of ",Object(o.jsx)("span",{style:{color:"#3D9970",fontWeight:"bold"},children:"Front-end development"}),".I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences."]}),Object(o.jsx)("a",{href:"#contact",style:{color:"#3D9970",fontWeight:"bold"},children:"Let's make something special"})]})]}),Object(o.jsxs)("div",{className:"skills",children:[l.map((function(e){return Object(o.jsx)(m,{name:e.name,percent:e.percent,visible:c,set:t},e.id)})),Object(o.jsxs)("div",{className:"qual flex",children:[Object(o.jsx)("h1",{children:"Education"}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{className:"fas  fa-graduation-cap"}),"MCA, 2022 ",Object(o.jsx)("p",{children:"LBSIM(IPU), Delhi"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{className:"fas fa-graduation-cap"}),"BCA, 2020 ",Object(o.jsx)("p",{children:"BIT Mesra, Ranchi"})]})]})]})]})]})]})},u=t(18),b=t.n(u),p=t(22),g=t(13),f=t(19),O=(t(35),t(2)),x=t(14),v=(t(36),function(){var e,a,t=Object(O.d)(),s=Object(c.useState)(!1),i=Object(r.a)(s,2),n=(i[0],i[1],j({threshold:.2,triggerOnce:!0})),l=Object(r.a)(n,2),m=l[0],h=l[1],u=Object(c.useState)({name:"",email:"",msg:""}),v=Object(r.a)(u,2),N=v[0],_=v[1],k=function(t){e=t.target.name,a=t.target.value,_(Object(f.a)(Object(f.a)({},N),{},Object(g.a)({},e,a)))},y=function(){var e=Object(p.a)(b.a.mark((function e(a){var c,s,i,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c=N.name,s=N.email,i=N.msg,e.next=4,fetch("/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,email:s,msg:i})});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,console.log(r.status),422!==r.status&&r&&c&&s&&i?(x.b.success("Message sent successfully!",{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),t.push("/")):x.b.error("Please Try Again!",{position:"bottom-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),_({name:"",email:"",msg:""});case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{id:"contact",children:[Object(o.jsx)("div",{className:"custom-shape-divider-top-1632563289",children:Object(o.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(o.jsx)("path",{d:"M1200 0L0 0 598.97 114.72 1200 0z",className:"shape-fill"})})}),Object(o.jsxs)("div",{className:h?"contact_head h_ani appear fade-in":"contact_head fade-in",ref:m,children:["contact ",h?d(h,"contactNavItem"):null]}),Object(o.jsx)("div",{className:h?"contact_box appear fade-in":"contact_box fade-in",ref:m,children:Object(o.jsxs)("form",{method:"POST",children:[Object(o.jsxs)("div",{className:"inputBox",children:[Object(o.jsx)("input",{type:"text",name:"name",autoComplete:"off",value:N.name,onChange:k,required:!0}),Object(o.jsx)("label",{htmlFor:"name",children:"name"})]}),Object(o.jsxs)("div",{className:"inputBox",children:[Object(o.jsx)("input",{type:"email",name:"email",autoComplete:"off",value:N.email,onChange:k,required:!0}),Object(o.jsx)("label",{htmlFor:"email",children:"email"})]}),Object(o.jsxs)("div",{className:"inputBox",children:[Object(o.jsx)("textarea",{name:"msg",cols:"71",rows:"8",value:N.msg,onChange:k,autoComplete:"off",required:!0}),Object(o.jsx)("label",{htmlFor:"msg",children:"Message"})]}),Object(o.jsx)("input",{type:"submit",name:"",value:"Submit",onClick:y})]})}),Object(o.jsx)(x.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})})}),N=(t(42),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("footer",{className:"flex",children:[Object(o.jsxs)("div",{className:"foot_link_container flex",children:[Object(o.jsx)("a",{className:"foot_link",href:"https://linkedin.com/in/rahul-kumar-83658a222",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-2x fa-linkedin"})}),Object(o.jsx)("a",{className:"foot_link",href:"https://github.com/rahul-612",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-2x fa-github"})}),Object(o.jsx)("a",{className:"foot_link",href:"https://www.instagram.com/blessed_612/",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-2x fa-instagram"})}),Object(o.jsx)("a",{className:"foot_link",href:"https://www.facebook.com/Rk785164",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-2x fa-facebook"})}),Object(o.jsx)("a",{className:"foot_link",href:"#",target:"_blank",children:Object(o.jsx)("i",{className:"fab fa-2x fa-twitter"})})]}),Object(o.jsx)("div",{className:"copy",children:Object(o.jsxs)("p",{children:["Rahul Kumar ",Object(o.jsx)("span",{children:"\u24b8 2021"})]})})]})})}),_=(t(43),t(44),function(){var e=j({threshold:.2,triggerOnce:!0}),a=Object(r.a)(e,2),t=a[0],c=a[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("header",{id:"home",className:"home",children:Object(o.jsxs)("div",{className:"heading",ref:t,children:[c?d(c,"homeNavItem"):null,Object(o.jsx)("h1",{children:"Hello, I am Rahul Kumar."}),Object(o.jsxs)("h1",{children:["I'm a ",Object(o.jsx)("span",{className:"roleText"})," "]}),Object(o.jsxs)("a",{href:"#about",className:"h_btn",children:["view my work    ",Object(o.jsx)("i",{className:"fas fa-arrow-down"}),Object(o.jsx)("i",{className:"fas fa-arrow-right"})]})]})})})});t(45),t(46);function k(e){document.querySelectorAll(".navBtn").forEach((function(e){e.classList.remove("active")})),"active"===e.target.className||e.target.classList.add("active")}function y(e){var a=document.querySelector(".nav-menu");e.target.classList.toggle("active"),a.classList.toggle("active"),document.querySelector(".heading").classList.toggle("fade-in")}var S=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{id:"navbar",children:[Object(o.jsxs)("ul",{className:"nav-menu",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#home",className:"navBtn homeNavItem",onClick:k,children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#about",className:"navBtn aboutNavItem",onClick:k,children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#portfolio",className:"navBtn portfolioNavItem",onClick:k,children:"Portfolio"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#contact",className:"navBtn contactNavItem",onClick:k,children:"Contact"})})]}),Object(o.jsxs)("div",{className:"hamburger",onClick:y,children:[Object(o.jsx)("span",{className:"h_bar"}),Object(o.jsx)("span",{className:"h_bar"}),Object(o.jsx)("span",{className:"h_bar"})]}),Object(o.jsx)("div",{className:"nav_bottom_border"})]})})},C=(t(47),t(48),t(25)),w=t.p+"static/media/moving_car.ae43ac5c.jpg",I=t.p+"static/media/food_delivery.f1b29acd.jpg",B=t.p+"static/media/analog_clock.97198f27.jpg",L=t.p+"static/media/special_effects.93913262.jpg",J=t.p+"static/media/black_jack.4b8e0820.jpg",A=t.p+"static/media/budget_app.678f89aa.jpg",F=t.p+"static/media/cal.3fa4d73b.jpg",R=t.p+"static/media/cv_screener.eeec3c6a.jpg",E=t.p+"static/media/drag_drop.1bc0b096.jpg",M=t.p+"static/media/lead_tracker.ff1e4f44.jpg",T=t.p+"static/media/postman.19ca0414.jpg",D=t.p+"static/media/snake.c8866f49.jpg",P=t.p+"static/media/chat_app.c58b4201.jpg",q=t.p+"static/media/node_weather.816c8a53.jpg",W=t.p+"static/media/covid_tracker.1453aac7.jpg",H=t.p+"static/media/keep_clone.3ea03c47.jpg",K=t.p+"static/media/todo.735ae1a6.jpg",G=t.p+"static/media/weather_app.1f6e34c1.jpg",U=t.p+"static/media/basic-mern.71401b97.jpg",V=t.p+"static/media/restful_api.d7ab5f78.jpg",z=1,Q=[{id:z++,image:t.p+"static/media/ecomm.31db0e14.jpg",name:"Ecommerce",category:"MERN",url:"https://mern-ecommerce-web-site.herokuapp.com/"},{id:z++,image:t.p+"static/media/mi_clone.98b6447e.jpg",name:"Mi Store Clone",category:"ReactJS",url:"https://mi-store-react-clone.netlify.app/"},{id:z++,image:M,name:"Lead Tracker",category:"JavaScript",url:"https://github.com/rahul-612/Lead-Tracker-Chrome-Extension-"},{id:z++,image:U,name:"Basic MERN App",category:"MERN",url:"https://mern-basic-app.herokuapp.com/"},{id:z++,image:V,name:"RestFul API",category:"NodeJS",url:"https://github.com/rahul-612/restful-api"},{id:z++,image:w,name:"moving car",category:"CSS",url:"https://github.com/rahul-612/Moving-Car"},{id:z++,image:P,name:"Realtime ChatApp",category:"NodeJS",url:"https://github.com/rahul-612/RealTime-ChatApp"},{id:z++,image:W,name:"Live Covid19",category:"ReactJS",url:"https://github.com/rahul-612/Live-Covid-Tracker"},{id:z++,image:G,name:"Live Weather",category:"ReactJS",url:"https://github.com/rahul-612/Live-Weather-App"},{id:z++,image:I,name:"food delivery",category:"CSS",url:"https://github.com/rahul-612/Food-Delivery"},{id:z++,image:B,name:"analog clock",category:"CSS",url:"https://github.com/rahul-612/Analog-Clock"},{id:z++,image:L,name:"special effects",category:"CSS",url:"https://github.com/rahul-612/CSS-Special-Effects-Animations"},{id:z++,image:J,name:"BlackJack Game",category:"JavaScript",url:"https://github.com/rahul-612/Black-Jack-Game"},{id:z++,image:A,name:"Budget App",category:"JavaScript",url:"https://github.com/rahul-612/Budget-App"},{id:z++,image:F,name:"Calculator",category:"JavaScript",url:"https://github.com/rahul-612/Calculator"},{id:z++,image:R,name:"CV Screener",category:"JavaScript",url:"https://github.com/rahul-612/CV-Screener"},{id:z++,image:E,name:"Drag & Drop",category:"JavaScript",url:"https://github.com/rahul-612/Drag-and-Drop-Element"},{id:z++,image:T,name:"PostMan Clone",category:"JavaScript",url:"https://github.com/rahul-612/Postman-Clone"},{id:z++,image:D,name:"Snake Game",category:"JavaScript",url:"https://github.com/rahul-612/Snake-Game"},{id:z++,image:q,name:"Weather App",category:"NodeJS",url:"https://github.com/rahul-612/Node-Weather"},{id:z++,image:H,name:"Keep Clone",category:"ReactJS",url:"https://github.com/rahul-612/Keep-Clone"},{id:z++,image:K,name:"ToDo List",category:"ReactJS",url:"https://github.com/rahul-612/ToDo-List"}];function X(e){document.querySelectorAll(".menu_btn").forEach((function(e){e.classList.remove("menu_active")})),"menu_active"===e.target.className||e.target.classList.add("menu_active")}var Y=function(e){var a=e.filterItem,t=e.catItems;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"menu-tab flex",children:t.map((function(e,t){return Object(o.jsx)("button",{className:"menu_btn",onClickCapture:X,onClick:function(){return a(e)},children:e},t)}))})})})},Z=function(e){var a=e.items;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"project_container flex",children:a.map((function(e,a){e.id;var t=e.name,c=e.image,s=e.url;return Object(o.jsxs)("a",{href:s,target:"_blank",className:"hover_effect",children:[Object(o.jsx)("img",{src:c,alt:t,className:"p_img"}),Object(o.jsx)("h1",{className:"p_title",children:t}),Object(o.jsx)("i",{className:"fas fa-4x fa-search p_icon"})]},a)}))})})},$=[].concat(Object(C.a)(new Set(Q.map((function(e){return e.category})))),["all"]),ee=function(){var e=Object(c.useState)(Q),a=Object(r.a)(e,2),t=a[0],s=a[1],i=Object(c.useState)($),n=Object(r.a)(i,2),l=n[0];n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Y,{filterItem:function(e){if("all"!==e){var a=Q.filter((function(a){return a.category===e}));s(a)}else s(Q)},catItems:l}),Object(o.jsx)(Z,{items:t})]})},ae=function(){var e=j({threshold:.2,triggerOnce:!0}),a=Object(r.a)(e,2),t=a[0],c=a[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{id:"portfolio",className:"portfolio flex",children:[Object(o.jsxs)("h1",{className:c?"port_head appear fade-in h_ani":"port_head fade-in",ref:t,children:["Projects ",c?d(c,"portfolioNavItem"):null]}),Object(o.jsx)("div",{className:c?"projects appear fade-in":"projects fade-in",ref:t,children:Object(o.jsx)(ee,{})})]})})},te=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(S,{}),Object(o.jsx)(h,{}),Object(o.jsx)(ae,{}),Object(o.jsx)(v,{}),Object(o.jsx)(N,{})]})},ce=t(17);n.a.render(Object(o.jsx)(ce.a,{children:Object(o.jsx)(te,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b7a809c2.chunk.js.map