import{d as p,l as a,h as _,p as k,x as f,B as ee,y as te,P as b,S as ne,q as re}from"./preact.module.7d28e569.js";import{p as R,V as oe,y as ie,h as $,s as T,_ as ue,A as le,F as se,T as ae,q as fe,x as _e}from"./hooks.module.a05e4479.js";function H(e,t){for(var n in t)e[n]=t[n];return e}function S(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function w(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}function N(e){this.props=e}function ce(e,t){function n(i){var o=this.props.ref,u=o==i.ref;return!u&&o&&(o.call?o(null):o.current=null),t?!t(this.props,i)||!u:S(this.props,i)}function r(i){return this.shouldComponentUpdate=n,_(e,i)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(N.prototype=new p).isPureReactComponent=!0,N.prototype.shouldComponentUpdate=function(e,t){return S(this.props,e)||S(this.state,t)};var P=a.__b;a.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),P&&P(e)};var de=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function pe(e){function t(n){var r=H({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=de,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var U=function(e,t){return e==null?null:f(f(e).map(t))},ve={map:U,forEach:U,count:function(e){return e?f(e).length:0},only:function(e){var t=f(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:f},he=a.__e;a.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}he(e,t,n,r)};var A=a.unmount;function q(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=H({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return q(r,t,n)})),e}function z(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return z(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function g(){this.__u=0,this.t=null,this.__b=null}function Q(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function me(e){var t,n,r;function i(o){if(t||(t=e()).then(function(u){n=u.default||u},function(u){r=u}),r)throw r;if(!n)throw t;return _(n,o)}return i.displayName="Lazy",i.__f=!0,i}function v(){this.u=null,this.o=null}a.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),A&&A(e)},(g.prototype=new p).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=Q(r.__v),o=!1,u=function(){o||(o=!0,n.__R=null,i?i(l):l())};n.__R=u;var l=function(){if(!--r.__u){if(r.state.__a){var E=r.state.__a;r.__v.__k[0]=z(E,E.__c.__P,E.__c.__O)}var L;for(r.setState({__a:r.__b=null});L=r.t.pop();)L.forceUpdate()}},s=t.__h===!0;r.__u++||s||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(u,u)},g.prototype.componentWillUnmount=function(){this.t=[]},g.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=q(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&_(k,null,e.fallback);return i&&(i.__h=null),[_(k,null,t.__a?null:e.children),i]};var M=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function ye(e){return this.getChildContext=function(){return e.context},e.children}function ge(e){var t=this,n=e.i;t.componentWillUnmount=function(){b(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),b(_(ye,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function ke(e,t){var n=_(ge,{__v:e,i:t});return n.containerInfo=t,n}(v.prototype=new p).__a=function(e){var t=this,n=Q(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),M(t,e,r)):i()};n?n(o):o()}},v.prototype.render=function(e){this.u=null,this.o=new Map;var t=f(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},v.prototype.componentDidUpdate=v.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){M(e,n,t)})};var Y=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,be=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ee=typeof document<"u",we=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function Ce(e,t,n){return t.__k==null&&(t.textContent=""),b(e,t),typeof n=="function"&&n(),e?e.__c:null}function Se(e,t,n){return ne(e,t),typeof n=="function"&&n(),e?e.__c:null}p.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(p.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var I=a.event;function Ne(){}function Oe(){return this.cancelBubble}function xe(){return this.defaultPrevented}a.event=function(e){return I&&(e=I(e)),e.persist=Ne,e.isPropagationStopped=Oe,e.isDefaultPrevented=xe,e.nativeEvent=e};var Z,V={configurable:!0,get:function(){return this.class}},D=a.vnode;a.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var i=t.indexOf("-")===-1;for(var o in r={},n){var u=n[o];Ee&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in n&&u==null||(o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&u===!0?u="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!we(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():i&&be.test(o)?o=o.replace(/[A-Z0-9]/g,"-$&").toLowerCase():u===null&&(u=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),r[o]&&(o="oninputCapture")),r[o]=u)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=f(n.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=f(n.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),e.props=r,n.class!=n.className&&(V.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",V))}e.$$typeof=Y,D&&D(e)};var W=a.__r;a.__r=function(e){W&&W(e),Z=e.__c};var Re={ReactCurrentDispatcher:{current:{readContext:function(e){return Z.__n[e.__c].props.value}}}};function $e(e){return _.bind(null,e)}function G(e){return!!e&&e.$$typeof===Y}function Te(e){return G(e)?re.apply(null,arguments):e}function Le(e){return!!e.__k&&(b(null,e),!0)}function Pe(e){return e&&(e.base||e.nodeType===1&&e)||null}var Ue=function(e,t){return e(t)},Ae=function(e,t){return e(t)},Me=k;function J(e){e()}function Ie(e){return e}function Ve(){return[!1,J]}var De=T;function We(e,t){var n=t(),r=R({h:{__:n,v:t}}),i=r[0].h,o=r[1];return T(function(){i.__=n,i.v=t,w(i.__,t())||o({h:i})},[e,n,t]),$(function(){return w(i.__,i.v())||o({h:i}),e(function(){w(i.__,i.v())||o({h:i})})},[e]),n}var tt={useState:R,useId:oe,useReducer:ie,useEffect:$,useLayoutEffect:T,useInsertionEffect:De,useTransition:Ve,useDeferredValue:Ie,useSyncExternalStore:We,startTransition:J,useRef:ue,useImperativeHandle:le,useMemo:se,useCallback:ae,useContext:fe,useDebugValue:_e,version:"17.0.2",Children:ve,render:Ce,hydrate:Se,unmountComponentAtNode:Le,createPortal:ke,createElement:_,createContext:ee,createFactory:$e,cloneElement:Te,createRef:te,Fragment:k,isValidElement:G,findDOMNode:Pe,Component:p,PureComponent:N,memo:ce,forwardRef:pe,flushSync:Ae,unstable_batchedUpdates:Ue,StrictMode:Me,Suspense:g,SuspenseList:v,lazy:me,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Re};let C=0,B=[];function Be(){return C+=1,()=>{if(C-=1,C===0){let e=B;B=[];for(let t of e)t()}}}const Fe=5,h=6,m=10;let He=(e,t,n,r)=>(e.events=e.events||{},e.events[n+m]||(e.events[n+m]=r(i=>{e.events[n].reduceRight((o,u)=>(u(o),o),{shared:{},...i})})),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let i=e.events[n],o=i.indexOf(t);i.splice(o,1),i.length||(delete e.events[n],e.events[n+m](),delete e.events[n+m])}),qe=1e3,X=(e,t)=>He(e,r=>{let i=t(r);i&&e.events[h].push(i)},Fe,r=>{let i=e.listen;e.listen=u=>(!e.lc&&!e.active&&(e.active=!0,r()),i(u));let o=e.off;return e.events[h]=[],e.off=()=>{setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let u of e.events[h])u();e.events[h]=[],o()}},qe)},()=>{e.listen=i,e.off=o}}),y=Symbol(),ze=(e,t,n,r)=>{let i={...e};i.set=(...u)=>{e[y]=t,e.set(...u),delete e[y]},e.setKey&&(i.setKey=(...u)=>{e[y]=t,e.setKey(...u),delete e[y]});let o=n(i,...r);if(o instanceof Promise){let u=Be();return o.finally(u)}return o},Qe=(e,t,n)=>(...r)=>ze(e,t,n,r),c=[],O=0,K=e=>{let t,n=[],r={lc:0,value:e,set(i){r.value=i,r.notify()},get(){return r.lc||r.listen(()=>{})(),r.value},notify(i){t=n;let o=!c.length;for(let u=0;u<t.length;u++)c.push(t[u],r.value,i);if(o){O++;for(let u=0;u<c.length;u+=3)c[u](c[u+1],c[u+2]);c.length=0}},listen(i){return n===t&&(n=n.slice()),r.lc=n.push(i),()=>{n===t&&(n=n.slice());let o=n.indexOf(i);~o&&(n.splice(o,1),r.lc--)}},subscribe(i){let o=r.listen(i);return i(r.value),o},off(){}};return r};function Ye(e,t,n){let r=new Set([...t,void 0]);return e.listen((i,o)=>{r.has(o)&&n(i,o)})}let Ze=(e,t)=>{Array.isArray(e)||(e=[e]);let n,r=[],i=()=>{let u=e.map(l=>l.get());(n!==O||u.some((l,s)=>l!==r[s]))&&(n=O,r=u,o.set(t(...u)))},o=K();return X(o,()=>{let u=e.map(l=>l.listen(i,t));return i(),()=>{for(let l of u)l()}}),o},F=e=>e,d={},x={addEventListener(){},removeEventListener(){}};function Ge(){try{return typeof localStorage<"u"}catch{return!1}}Ge()&&(d=localStorage);let Je={addEventListener(e,t){window.addEventListener("storage",t)},removeEventListener(e,t){window.removeEventListener("storage",t)}};typeof window<"u"&&(x=Je);function Xe(e,t=void 0,n={}){let r=n.encode||F,i=n.decode||F,o=K(t),u=o.set;o.set=s=>{typeof s>"u"?delete d[e]:d[e]=r(s),u(s)};function l(s){s.key===e?s.newValue===null?u(void 0):u(i(s.newValue)):d[e]||u(void 0)}return X(o,()=>{if(o.set(d[e]?i(d[e]):t),n.listen!==!1)return x.addEventListener(e,l),()=>{x.removeEventListener(e,l)}}),o}const j=Xe("theme","system",{listen:!0}),nt=Ze(j,e=>e==="dark"||e==="light"?e:typeof window>"u"||window?.matchMedia&&window?.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"),rt=Qe(j,"setTheme",(e,t)=>{e.set(t)});function ot(e,t={}){let[,n]=R({});return $(()=>{let r,i,o,u=()=>{r||(r=1,i=setTimeout(()=>{r=void 0,n({})}))};return t.keys?o=Ye(e,t.keys,u):o=e.listen(u),()=>{o(),clearTimeout(i)}},[e,""+t.keys]),e.get()}var Ke=0;function it(e,t,n,r,i){var o,u,l={};for(u in t)u=="ref"?o=t[u]:l[u]=t[u];var s={type:e,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ke,__source:i,__self:r};if(typeof e=="function"&&(o=e.defaultProps))for(u in o)l[u]===void 0&&(l[u]=o[u]);return a.vnode&&a.vnode(s),s}export{j as a,tt as b,it as o,rt as s,nt as t,ot as u};
