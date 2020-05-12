(this["webpackJsonpxantiagoma.github.io"]=this["webpackJsonpxantiagoma.github.io"]||[]).push([[0],{133:function(n,e,t){n.exports=t(292)},138:function(n,e,t){},292:function(n,e,t){"use strict";t.r(e);var a={};t.r(a),t.d(a,"breakpoints",(function(){return T})),t.d(a,"mqs",(function(){return P})),t.d(a,"light",(function(){return B})),t.d(a,"dark",(function(){return J})),t.d(a,"mediaqueries",(function(){return S}));var r=t(0),o=t.n(r),i=t(7),c=t.n(i),l=(t(138),t(139),t(140),t(141),t(30)),m=t(62),s=t(26),h=function(n){n.match,n.history;return o.a.createElement(o.a.Fragment,null,"Under contruction ",o.a.createElement("br",null))},u=t(18),p=t(81),d=t.n(p),g=t(296),b=t(301),f=t(110),y=t.n(f),v=t(27),x=t(43),E=t.n(x),w=t(16),k=t(302),j=t(303),O=t(297),z=t(34),F=t(8),N=t.n(F),I=t(112),M=t.n(I),C=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return N.a.divIcon({className:e,html:M.a.renderToString(n)})},L=t(64),A=t(44),T={xs:320,sm:576,md:768,lg:992,xl:1200,xxl:1600},W=Object(A.mapValues)(T,(function(n){return"only screen and (min-width: ".concat(n,"px)")})),P=Object(L.a)(W,(function(n){var e=Object(A.keys)(T);Object(A.forEach)(e,(function(t,a){if(a!==e.length-1){var r=W[t],o=e[a+1];n["".concat(t,"Only")]="".concat(r," and (max-width: ").concat(T[o],"px)")}})),n.se="(device-height : 568px)\n    and (device-width : 320px)\n    and (-webkit-min-device-pixel-ratio: 2)",n.mobileLandscape="only screen and (min-width: ".concat(T.xs,"px)\n    and (max-width: ").concat(T.lg-1,"px)\n    and (orientation: landscape)")})),S=Object(A.mapValues)(P,(function(n){return"@media ".concat(n)})),q={name:"base",colors:{primary:"hotpink",background:"#000000"},sizes:{navbar:{height:"50px"}},mediaqueries:S},B=Object(L.a)(q,(function(n){n.name="light",n.colors.navbar="#e8eaf3",n.colors.container="#F5F6FA",n.colors.background="#FFFFFF",n.colors.text="#0E0E0E"})),J=Object(L.a)(q,(function(n){n.name="dark",n.colors.background="#070706",n.colors.container="#0E0E0E",n.colors.navbar="#000000",n.colors.text="#F5F6FA"})),Z=t(300);function D(){var n=Object(u.a)(["\n    align-items: center;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    padding: 0;\n    position: absolute;\n\n    & > li {\n        display: inline-block;\n        margin: 0 0.5rem;\n    }\n\n    .social-icon {\n\n        path {\n            fill: white;\n            opacity: 1;\n            transition: opacity .5s;\n\n            "," {\n                opacity: 0.5;\n            }\n        }\n\n        &:hover, &:focus {\n            path {\n                opacity: 1;\n            }\n        }\n    }\n"]);return D=function(){return n},n}function G(){var n=Object(u.a)(["\n    border-radius: .5rem .5rem 0 0;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    min-height: 300px;\n    min-height: 50vh;\n    padding: 1rem;\n    position: relative;\n\n    h4 {\n        margin-top: -.5rem;\n\n        "," {\n            font-size: 1.3rem;\n        }\n\n        "," {\n            font-size: 1.3rem;\n        }\n\n        "," {\n            margin-top: 0;\n        }\n    }\n\n    p {\n        "," {\n            font-size: 0.8rem;\n        }\n    }\n"]);return G=function(){return n},n}function V(){var n=Object(u.a)(["\n    align-items: center;\n    box-sizing: border-box;\n    color: white;\n    display: flex;\n    height: 100%;\n    justify-content: center;\n    padding: 0 1rem;\n    position: absolute;\n    text-align: center;\n    text-shadow: -3px 1px 2px rgba(0, 0, 0, 1);\n    width: 100%;\n    font-size: 4rem;\n\n    "," {\n        font-size: 3.5vw;\n    }\n"]);return V=function(){return n},n}function _(){var n=Object(u.a)(["\n    .hero {\n        position: relative;\n        margin-top: -",';\n    }\n\n    .hero-ratio > div::before {\n        background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) );\n        content: "";\n        height: 100%;\n        position: relative;\n        width: 100%;\n    }\n\n    .map-marker {\n        top: -2rem;\n        position: relative;\n    }\n\n    .map-ratio {\n        z-index: -1;\n    }\n\n']);return _=function(){return n},n}var H=Z.a.Title,K=Z.a.Paragraph,R=v.a.div(_(),(function(n){return n.theme.sizes.navbar.height})),U=v.a.div(V(),S.lg),X=v.a.div(G(),S.se,S.mobileLandscape,S.md,S.se),$=v.a.ul(D(),(function(n){return n.theme.mediaqueries.lg})),Q=[{name:"GitHub",url:"https://github.com/xantiagoma",icon:w.d},{name:"LinkedIn",url:"https://www.linkedin.com/in/xantiagoma",icon:w.g},{name:"Twitter",url:"https://twitter.com/xantiagoma",icon:w.i},{name:"Instagram",url:"https://www.instagram.com/xantiagoma",icon:w.f},{name:"Gmail",url:"mailto:xantiagoma@gmail.com",icon:w.e}],Y=function(n){var e=n.width,t=n.height,a=[6.244747,-75.574828],r=Object(z.b)().name,i=o.a.createElement(E.a,{path:w.h,className:"map-marker",title:"Medell\xedn",size:"25px",color:"light"===r?"black":"white"}),c=Object(g.a)(P.mobileLandscape);return o.a.createElement(d.a,{ratio:e/(t/(c?1:2)),style:{maxWidth:"".concat(e,"px")},className:"map-ratio"},o.a.createElement(k.a,{attributionControl:!1,center:a,doubleClickZoom:!1,dragging:!1,keyboard:!1,scrollWheelZoom:!1,tap:!1,touchZoom:!1,zoom:13,zoomControl:!1},o.a.createElement(j.a,{url:"light"===r?"https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png":"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"}),o.a.createElement(O.a,{position:a,icon:C(i)})))},nn=function(){var n=Object(b.a)(),e=n.width,t=n.height;return o.a.createElement(R,null,o.a.createElement("div",{className:"hero"},o.a.createElement(d.a,{ratio:e/t,style:{maxWidth:"".concat(e,"px")},className:"hero-ratio"},o.a.createElement(y.a,{photoId:"gy08FXeM2L4",expand:!0},o.a.createElement(U,{className:"text-h1"},"Santiago Montoya Angarita"),o.a.createElement($,null,Q.map((function(n){var e=n.name,t=n.url,a=n.icon;return o.a.createElement("li",{key:e},o.a.createElement("a",{href:t,target:"_black",className:"social-icon"},o.a.createElement(E.a,{path:a,title:e,size:"25px",color:""})))})))))),o.a.createElement(X,{className:"container"},o.a.createElement(H,{level:1},"About me"),o.a.createElement(K,null,"I'm a Web Developer from Medell\xedn, Colombia.",o.a.createElement("br",null),o.a.createElement("br",null),"Last years I\u2019ve been working in projects using Vue.js, React, and Angular (2+) , I'm also familiar with other JavaScript frameworks and plain vanilla.",o.a.createElement("br",null),o.a.createElement("br",null),"As well I enjoy doing back-end development in Node.js, Go, Kotlin and Python and I know some PHP, Java, C++, C#, Bash, Dart/Flutter for intermediate programs.",o.a.createElement("br",null),o.a.createElement("br",null),"I've been working in web development for the last 5 years., I'm a big fan of programming in general.")),o.a.createElement(Y,{width:e,height:t}))},en=t(15);function tn(){var n=Object(u.a)(["\n  body {\n    background: ",";\n    color:  ",";\n  }\n\n  h1, h2, h3, h4, h5, h6, p, small, .ant-typography,\n  h1.ant-typography, .ant-typography h1,\n  h2.ant-typography, .ant-typography h2,\n  h3.ant-typography, .ant-typography h3\n  h4.ant-typography, .ant-typography h4\n  h5.ant-typography, .ant-typography h5\n  h6.ant-typography, .ant-typography h6,\n  p.ant-typography, .ant-typography p,\n  small.ant-typography, .ant-typography small {\n    color:  ",";\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n"]);return tn=function(){return n},n}var an=function(){var n,e=Object(z.b)();return o.a.createElement(en.a,{styles:(n={theme:e},Object(en.c)(tn(),n.theme.colors.background,n.theme.colors.text,n.theme.colors.text))})},rn=t(125),on=t.n(rn),cn=Object(r.createContext)({theme:"system",setTheme:function(){}});t(298);function ln(){var n=Object(r.useState)([!1]),e=Object(l.a)(n,2),t=e[0],a=e[1],o=function(){return window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?[!0,"dark"]:[!0,"light"]:[!1]};return Object(r.useEffect)((function(){a(o()),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(){return a(o())}))}),[]),t}var mn=t(1),sn=t.n(mn);function hn(){var n=Object(u.a)(["\n    margin: 0 0.5rem;\n    padding: 0;\n    background: transparent;\n    border: none;\n    outline: none;\n\n    .icon {\n        & > path {\n            fill: ",";\n        }\n\n        .hide-top & > path {\n            fill: white;\n        }\n\n        .active .hide-top & > path  {\n            fill: ",";\n        }\n\n        & > path {\n            opacity: 0.5;\n            transition: opacity .5s, fill .5s;\n        }\n        &.active > path {\n            opacity: 1;\n        }\n    }\n\n\n"]);return hn=function(){return n},n}function un(){var n=Object(u.a)(["\n    display: flex;\n    background: ",";\n    height: ",";\n    transition: color 1s, background 1s;\n    font-size: 16px;\n\n    &.hide-top {\n        background: transparent;\n        color: white;\n\n        .active & {\n            background: ",";\n            color: inherit;\n        }\n    }\n\n    .title {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 0 1rem;\n    }\n\n    h1 {\n        margin: 0\n    }\n\n    .urls {\n        align-items: center;\n        display: flex;\n        justify-content: center;\n        margin-right: auto;\n        padding: 0;\n\n        li {\n        display: inline-block;\n            a {\n                margin-right: 1rem;\n            }\n        }\n    }\n\n    .theme-switcher {\n        display: flex;\n        align-items: center;\n    }\n"]);return un=function(){return n},n}var pn=v.a.nav(un(),(function(n){return n.theme.colors.navbar}),(function(n){return n.theme.sizes.navbar.height}),(function(n){return n.theme.colors.navbar})),dn={system:w.c,light:w.a,dark:w.b},gn={system:"Auto",light:"Light",dark:"Dark"},bn=v.a.button(hn(),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.text})),fn=function(){var n=Object(r.useContext)(cn),e=n.theme,t=n.setTheme,a=ln(),i=Object(l.a)(a,1)[0],c=Object(s.e)({path:"/",exact:!0});return o.a.createElement(on.a,{enabled:!0,top:0,bottomBoundary:1200,innerZ:1},o.a.createElement(pn,{className:sn()({"hide-top":!!c})},o.a.createElement("div",{className:"title"},o.a.createElement(m.b,{to:"/"},"xantiagoma")),o.a.createElement("ul",{className:"urls"}),o.a.createElement("div",{className:"theme-switcher"},["light",i&&"system","dark"].filter((function(n){return n})).map((function(n){return o.a.createElement(bn,{key:n,onClick:function(){return t(n)}},o.a.createElement(E.a,{path:dn[n],title:gn[n],size:"25px",className:sn()("icon",{active:e===n}),color:""}))})))))},yn=t(299),vn=function(n){return a[n]||B},xn=function(){var n=Object(yn.a)("theme","system"),e=Object(l.a)(n,2),t=e[0],a=e[1],r=ln(),i=Object(l.a)(r,2),c=i[0],u=i[1],p=vn("system"===t?c?u:"light":t);return o.a.createElement(cn.Provider,{value:{theme:t,setTheme:a}},o.a.createElement(z.a,{theme:p},o.a.createElement(an,null),o.a.createElement(m.a,null,o.a.createElement(fn,null),o.a.createElement(s.a,{component:nn,path:"/",exact:!0}),o.a.createElement(s.a,{component:h,path:"/blog"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(xn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[133,1,2]]]);
//# sourceMappingURL=main.10e80663.chunk.js.map