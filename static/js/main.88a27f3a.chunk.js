(this["webpackJsonpxantiagoma.github.io"]=this["webpackJsonpxantiagoma.github.io"]||[]).push([[0],{198:function(n,e,t){"use strict";t.r(e);var a={};t.r(a),t.d(a,"light",(function(){return nn})),t.d(a,"dark",(function(){return en})),t.d(a,"mediaqueries",(function(){return R}));var r=t(0),i=t.n(r),o=t(76),c=t.n(o),l=(t(93),t(94),t(95),t(17)),m=t(23),u=t(14),s=function(n){n.match,n.history;return i.a.createElement(i.a.Fragment,null,"Under contruction ",i.a.createElement("br",null))},h=t(6),d=t(78),g=t.n(d),p=t(202),b=t(77),f=t.n(b),v=t(15),E=t(36),x=t.n(E),w=t(7);function y(){var n=Object(h.a)(["\n    align-items: center;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    padding: 0;\n    position: absolute;\n\n    & > li {\n        display: inline-block;\n        margin: 0 0.5rem;\n    }\n\n    .social-icon {\n\n        path {\n            fill: white;\n            opacity: 1;\n            transition: opacity .5s;\n\n            "," {\n                opacity: 0.5;\n            }\n        }\n\n        &:hover, &:focus {\n            path {\n                opacity: 1;\n            }\n        }\n    }\n"]);return y=function(){return n},n}function k(){var n=Object(h.a)(["\n    // background: ",";\n    min-height: 300px;\n    // margin-top: -100px;\n    position: relative;\n    padding: 1rem;\n    border-radius: .5rem .5rem 0 0;\n    "]);return k=function(){return n},n}function j(){var n=Object(h.a)(["\n    align-items: center;\n    box-sizing: border-box;\n    color: white;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    padding: 0 1rem;\n    position: absolute;\n    text-align: center;\n    text-shadow: -3px 1px 2px rgba(0, 0, 0, 1);\n    width: 100%;\n"]);return j=function(){return n},n}function O(){var n=Object(h.a)(["\n    .hero {\n        position: relative;\n        margin-top: -",';\n    }\n\n    .hero-ratio > div::before {\n        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) );\n        content: "";\n        height: 100%;\n        position: relative;\n        width: 100%;\n    }\n\n']);return O=function(){return n},n}var F=v.a.div(O(),(function(n){return n.theme.sizes.navbar.height})),N=v.a.div(j()),M=v.a.div(k(),(function(n){return n.theme.colors.container})),z=v.a.ul(y(),(function(n){return n.theme.mediaqueries.lg})),A=[{name:"GitHub",url:"https://github.com/xantiagoma",icon:w.d},{name:"LinkedIn",url:"https://www.linkedin.com/in/xantiagoma",icon:w.g},{name:"Twitter",url:"https://twitter.com/xantiagoma",icon:w.h},{name:"Instagram",url:"https://www.instagram.com/xantiagoma",icon:w.f},{name:"Gmail",url:"mailto:xantiagoma@gmail.com",icon:w.e}],L=function(){var n=Object(p.a)(),e=n.width,t=n.height;return i.a.createElement(F,null,i.a.createElement("div",{className:"hero"},i.a.createElement(g.a,{ratio:e/t,style:{maxWidth:"".concat(e,"px")},className:"hero-ratio"},i.a.createElement(f.a,{photoId:"gy08FXeM2L4",expand:!0},i.a.createElement(N,{className:"text-h1"},"Santiago Montoya Angarita"),i.a.createElement(z,null,A.map((function(n){var e=n.name,t=n.url,a=n.icon;return i.a.createElement("li",{key:e},i.a.createElement("a",{href:t,target:"_black",className:"social-icon"},i.a.createElement(x.a,{path:a,title:e,size:"25px",color:""})))})))))),i.a.createElement(M,{className:"container"},i.a.createElement("h2",null,"About me")))},B=t(37),I=t(5);function T(){var n=Object(h.a)(["\n  body {\n    background: ",";\n    color:  ",";\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n"]);return T=function(){return n},n}var q=function(){var n,e=Object(B.b)();return i.a.createElement(I.a,{styles:(n={theme:e},Object(I.c)(T(),n.theme.colors.background,n.theme.colors.text))})},C=t(80),S=t.n(C),W=Object(r.createContext)({theme:"system",setTheme:function(){}});t(200);function G(){var n=Object(r.useState)([!1]),e=Object(l.a)(n,2),t=e[0],a=e[1],i=function(){return window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?[!0,"dark"]:[!0,"light"]:[!1]};return Object(r.useEffect)((function(){a(i()),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(){return a(i())}))}),[]),t}var J=t(39),D=t.n(J);function H(){var n=Object(h.a)(["\n    margin: 0 0.5rem;\n    padding: 0;\n    background: transparent;\n    border: none;\n    outline: none;\n\n    .icon {\n        & > path {\n            fill: ",";\n        }\n\n        .hide-top & > path {\n            fill: white;\n        }\n\n        .active .hide-top & > path  {\n            fill: ",";\n        }\n\n        & > path {\n            opacity: 0.5;\n            transition: opacity .5s, fill .5s;\n        }\n        &.active > path {\n            opacity: 1;\n        }\n    }\n\n\n"]);return H=function(){return n},n}function P(){var n=Object(h.a)(["\n    display: flex;\n    background: ",";\n    height: ",";\n    transition: color 1s, background 1s;\n\n    &.hide-top {\n        background: transparent;\n        color: white;\n\n        .active & {\n            background: ",";\n            color: inherit;\n        }\n    }\n\n    .title {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 1rem;\n    }\n\n    h1 {\n        margin: 0\n    }\n\n    .urls {\n        display: block;\n        margin-right: auto;\n        padding: 0;\n\n        li {\n        display: inline-block;\n            a {\n                margin-right: 1rem;\n            }\n        }\n    }\n\n    .theme-switcher {\n        display: flex;\n        align-items: center;\n    }\n"]);return P=function(){return n},n}var U=v.a.nav(P(),(function(n){return n.theme.colors.navbar}),(function(n){return n.theme.sizes.navbar.height}),(function(n){return n.theme.colors.navbar})),V={system:w.c,light:w.a,dark:w.b},X={system:"Auto",light:"Light",dark:"Dark"},Z=v.a.button(H(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.text})),$=function(){var n=Object(r.useContext)(W),e=n.theme,t=n.setTheme,a=G(),o=Object(l.a)(a,1)[0],c=Object(u.e)({path:"/",exact:!0});return i.a.createElement(S.a,{enabled:!0,top:0,bottomBoundary:1200,innerZ:1},i.a.createElement(U,{className:D()({"hide-top":!!c})},i.a.createElement("div",{className:"title"},i.a.createElement(m.b,{to:"/"},"xantiagoma")),i.a.createElement("ul",{className:"urls"},i.a.createElement("li",null,i.a.createElement(m.b,{to:"/blog"},"Blog"))),i.a.createElement("div",{className:"theme-switcher"},["light",o&&"system","dark"].filter((function(n){return n})).map((function(n){return i.a.createElement(Z,{key:n,onClick:function(){return t(n)}},i.a.createElement(x.a,{path:V[n],title:X[n],size:"25px",className:D()("icon",{active:e===n}),color:""}))})))))},_=t(201),K=t(53),Q=t(87),R=Object(Q.mapValues)({xs:30,sm:48,md:64,lg:75},(function(n){return"@media only screen and (min-width: ".concat(n,"em)")})),Y={name:"base",colors:{primary:"hotpink",background:"#000000"},sizes:{navbar:{height:"50px"}},mediaqueries:R},nn=Object(K.a)(Y,(function(n){n.name="light",n.colors.background="#e8eaf3",n.colors.container="#F5F6FA",n.colors.navbar="#FFFFFF",n.colors.text="#0E0E0E"})),en=Object(K.a)(Y,(function(n){n.name="dark",n.colors.background="#070706",n.colors.container="#0E0E0E",n.colors.navbar="#000000",n.colors.text="#F5F6FA"})),tn=function(n){return a[n]||nn},an=function(){var n=Object(_.a)("theme","system"),e=Object(l.a)(n,2),t=e[0],a=e[1],r=G(),o=Object(l.a)(r,2),c=o[0],h=o[1],d=tn("system"===t?c?h:"light":t);return i.a.createElement(W.Provider,{value:{theme:t,setTheme:a}},i.a.createElement(B.a,{theme:d},i.a.createElement(q,null),i.a.createElement(m.a,null,i.a.createElement($,null),i.a.createElement(u.a,{component:L,path:"/",exact:!0}),i.a.createElement(u.a,{component:s,path:"/blog"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(an,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},88:function(n,e,t){n.exports=t(198)},93:function(n,e,t){}},[[88,1,2]]]);
//# sourceMappingURL=main.88a27f3a.chunk.js.map