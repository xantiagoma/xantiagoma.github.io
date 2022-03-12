var F=Object.defineProperty;var x=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var w=(l,a,r)=>a in l?F(l,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):l[a]=r,f=(l,a)=>{for(var r in a||(a={}))v.call(a,r)&&w(l,r,a[r]);if(x)for(var r of x(a))I.call(a,r)&&w(l,r,a[r]);return l};var N=(l,a)=>{var r={};for(var o in l)v.call(l,o)&&a.indexOf(o)<0&&(r[o]=l[o]);if(l!=null&&x)for(var o of x(l))a.indexOf(o)<0&&I.call(l,o)&&(r[o]=l[o]);return r};import{r as c,R as e,u as P,c as g,L as B,a as W,A as y,B as q,b as H,d as S,e as _,f as O,g as U}from"./vendor.a415740f.js";const J=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};J();const j="modulepreload",C={},z="/",K=function(a,r){return!r||r.length===0?a():Promise.all(r.map(o=>{if(o=`${z}${o}`,o in C)return;C[o]=!0;const n=o.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":j,n||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),n)return new Promise((m,d)=>{s.addEventListener("load",m),s.addEventListener("error",d)})})).then(()=>a())},G=c.exports.createContext({theme:"dark",source:"system",setTheme:()=>{}}),R=c.exports.createContext({mapa:void 0,setMapa:void 0});function Q(l){const[a,r]=c.exports.useState();return e.createElement(R.Provider,{value:{mapa:a,setMapa:r}},l.children)}const T={Adobe:"adobe",Angular:"angular",AntDesign:"ant-design",Apache:"apache",Apple:"apple",Atlassian:"atlassian",Bash:"bash",Bootstrap:"bootstrap",Brightness:"brightness",Bulma:"bulma",Caddy:"caddy",Cellphone:"cellphone",Chakra:"chakra",CICD:"ci-cd",Cloud:"cloud",Cockpit:"cockpit",Contentful:"contentful",CouchDB:"couchdb",Dart:"dart",DemandFrontier:"demand-frontier",DesktopMobile:"desktop-mobile",Directus:"directus",Docker:"docker",Drive:"drive",EAFIT:"eafit",Element:"element",Express:"express",Firebase:"firebase",FlagCO:"flag-co",Flask:"flask",Flutter:"flutter",Foundation:"foundation",Gatsby:"gatsby",Git:"git",GitHub:"github",Globant:"globant",Gmail:"gmail",Go:"go",Golang:"golang",GraphCMS:"graphcms",GraphQL:"graphql",Haskell:"haskell",HTML:"html",HUGE:"huge",Instagram:"instagram",Ionic:"ionic",Java:"java",JSON:"json",Kotlin:"kotlin",Kubernetes:"kubernetes",Laravel:"laravel",LinkedIn:"linked-in",Linux:"linux",Logo:"logo",MapMaker:"map-maker",MaterialUI:"material-ui",MongoDB:"mongodb",MonitorCellphoneStar:"monitor-cellphone-star",MySQL:"mysql",NextJS:"nextjs",NGINX:"nginx",NodeJS:"node-js",Nuxt:"nuxt",Parse:"parse",PHP:"php",PostgreSQL:"postgresql",Prismic:"prismic",PWA:"pwa",Python:"python",Question:"question",RaspberryPi:"raspberry-pi",React:"react",Redis:"redis",REST:"rest",RethinkDB:"rethinkdb",Rust:"rust",Sass:"sass",Sketch:"sketch",Skillshare:"skillshare",Star:"star",Strapi:"strapi",SystemBrightness:"system-brightness",Tailwind:"tailwind",Twitter:"twitter",Vue:"vue",Wagtail:"wagtail",Web:"web",Wordpress:"wordpress"},D=r=>{var o=r,{icon:l}=o,a=N(o,["icon"]);const n=T[l];return e.createElement("svg",f({},a),e.createElement("use",{xlinkHref:`/icons.svg#${n}`}))},t=new Proxy(D,{get(l,a,r){return T[a]?o=>e.createElement(D,f({icon:a},o)):Reflect.get(l,a,r)}});function V(r){var o=r,{className:l}=o,a=N(o,["className"]);const{theme:n,setTheme:i,source:s}=c.exports.useContext(G),{mapa:m}=c.exports.useContext(R),{width:d,height:b}=P();c.exports.useEffect(()=>{n==="light"?(document.documentElement.classList.add("light"),document.documentElement.classList.remove("dark")):(document.documentElement.classList.add("dark"),document.documentElement.classList.remove("light"))},[n]),c.exports.useLayoutEffect(()=>{setTimeout(()=>{!!m&&m.invalidateSize()},100)},[d,b,m]);const h=e.createElement("button",f({onClick:()=>{s==="system"?i("dark"):s==="dark"?i("light"):s==="light"&&i("system")}},a),e.createElement("span",{className:"sr-only"},"Change web style to ",n==="light"?"dark":"light"," theme"),s==="system"&&e.createElement(t.SystemBrightness,{width:"26",height:"26",className:"fill-current"}),s!=="system"&&e.createElement(t.Brightness,{width:"26",height:"26",className:"fill-current"}));return e.createElement("span",f({className:g("relative flex",l)},a),h,e.createElement("span",{className:"absolute right-8 top-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none bg-black dark:bg-white rounded-full text-white dark:text-black se:hidden"},s))}function $({tag:l="ul",children:a,className:r}){const o=c.exports.useRef();return c.exports.createElement(l,{className:g("snap-carousel",r),ref:o},a)}function X(n){var i=n,{tag:l="li",children:a,className:r}=i,o=N(i,["tag","children","className"]);return c.exports.createElement(l,f({className:g("snap-slide",r),tabIndex:0},o),a)}var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Carousel:$,Slide:X});const u=({position:l,text:a,children:r,className:o}={position:"left",text:"",className:""})=>e.createElement(e.Fragment,null,e.createElement("div",{"data-text":a,className:g(["items-center order-1 shadow-xl w-8 h-8 rounded-full timeline-chip select-none hidden lg:flex",{"timeline-chip--left":l==="left","timeline-chip--right":l==="right"},o])},r,e.createElement("p",{className:"lg:sr-only"},a)),e.createElement("em",{className:"mb-4 flex lg:hidden"},a)),p=({position:l,children:a,chip:r,className:o}={position:"left",chip:null,className:""})=>e.createElement("div",{className:g("timeline-row",{"timeline-row--left":l==="left"},o)},e.createElement("div",{className:"order-1 lg:w-5/12"}),r,e.createElement("div",{className:"order-1 lg:w-5/12"},a)),Z=l=>e.createElement("div",{className:"container mx-auto w-full h-full text-gray-600 dark:text-gray-400 p-8"},e.createElement("div",{className:"relative wrap overflow-hidden h-full"},e.createElement("div",{className:"border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden lg:block",style:{left:"50%"}}),e.createElement(p,{position:"left",className:"mb-16 lg:mb-32 hidden lg:flex",chip:e.createElement(u,{position:"top",text:"Future",className:"bg-gray-800 justify-center text-gray-400"},e.createElement(t,{icon:"Logo",className:"fill-current w-2/3 p-1",role:"img","aria-label":"Future"}))}),e.createElement(p,{position:"left",className:"mb-16 lg:mb-32",chip:e.createElement(u,{position:"right",text:"2022 - Today",className:"bg-skillshareDark dark:bg-skillshare"},e.createElement("h1",{className:"mx-auto font-semibold text-lg text-skillshare dark:text-skillshareDark"},"S"))},e.createElement("a",{href:"https://www.skillshare.com/about",target:"_blank",rel:"noopener noreferrer"},e.createElement(t,{icon:"Skillshare",className:"fill-current h-24 max-w-full",role:"img","aria-label":"Skillshare"})),e.createElement("h3",{className:"font-bold text-xl mt-2 text-skillshareDark dark:text-skillshare"},"Senior Frontend Engineer"),e.createElement("p",null,"Skillshare is an online learning community with thousands of classes for creative and curious people, on topics including illustration, design, photography, video, freelancing, and more. On Skillshare, members come together to find inspiration and take the next step in their creative journey.")),e.createElement(p,{position:"right",className:"mb-16 lg:mb-32",chip:e.createElement(u,{position:"left",text:"2019 - 2022",className:"bg-huge"},e.createElement("h1",{className:"mx-auto font-semibold text-lg text-white"},"H"))},e.createElement("a",{href:"https://www.hugeinc.com/us",target:"_blank",rel:"noopener noreferrer"},e.createElement(t,{icon:"HUGE",className:"fill-current h-16 max-w-full",role:"img","aria-label":"HUGE"})),e.createElement("h3",{className:"font-bold text-xl mt-2 text-huge"},"Senior Web Engineer ",e.createElement("sup",null,"(M3+)")),e.createElement("p",null,"Huge is an experience design and digital marketing agency. A global collective of designers, technologists and strategists. The company was founded in DUMBO, Brooklyn.")),e.createElement(p,{className:"mb-16 lg:mb-32",position:"left",chip:e.createElement(u,{position:"right",text:"2017 - 2019",className:"bg-globant"},e.createElement("h1",{className:"mx-auto font-semibold text-lg text-white"},"G"))},e.createElement("a",{href:"https://www.globant.com/about",target:"_blank",rel:"noopener noreferrer"},e.createElement(t,{icon:"Globant",className:"fill-current h-16 max-w-full",role:"img","aria-label":"Globant"})),e.createElement("h3",{className:"font-bold text-xl mt-2 text-globant"},"Web UI Developer ",e.createElement("sup",null,"(SSr Advanced)")),e.createElement("p",null,"Globant is an IT and Software Development company operating in Argentina, Colombia, Uruguay, the United Kingdom, Brazil, the United States, Peru, India, Mexico, Chile, Spain, Romania and Belarus.")),e.createElement(p,{position:"right",className:"mb-16 lg:mb-32",chip:e.createElement(u,{position:"left",text:"2016 - 2017",className:"bg-demandfrontier"},e.createElement("h1",{className:"mx-auto font-semibold text-lg text-white"},"D"))},e.createElement("a",{href:"https://demandfrontier.com/our-story",target:"_blank",rel:"noopener noreferrer"},e.createElement(t,{icon:"DemandFrontier",className:"fill-current h-16 max-w-full",role:"img","aria-label":"Demand Frontier"})),e.createElement("h3",{className:"font-bold text-xl mt-2 text-demandfrontier"},"Web Developer & Marketing Automation"),e.createElement("p",null,"Demand Frontier is a digital marketing agency specializing in B2B demand generation for the global enterprise")),e.createElement(p,{className:"mb-0 lg:mb-32",position:"left",chip:e.createElement(u,{position:"right",text:"2015 - 2016",className:"bg-eafit"},e.createElement("h1",{className:"mx-auto font-semibold text-lg text-white"},"E"))},e.createElement("a",{href:"https://www.eafit.edu.co/international/eng/Paginas/eng.aspx",target:"_blank",rel:"noopener noreferrer"},e.createElement(t,{icon:"EAFIT",className:"fill-current h-16 max-w-full",role:"img","aria-label":"Universidad EAFIT"})),e.createElement("h3",{className:"font-bold text-xl mt-2 text-eafitText"},"Teacher Assistant"," ",e.createElement("small",null,"(Programming Languages, Programming Fundamentals)")),e.createElement("p",null,"Colombian university located in Medell\xEDn offering 23 undergraduate programs, 70 specializations, 34 masters, and six doctoral programs.")),e.createElement(p,{className:"hidden lg:flex",chip:e.createElement(u,{position:"bottom",text:"Born",className:"bg-gray-800 justify-center text-yellow-300"},e.createElement(t,{icon:"Star",className:"fill-current w-2/3 p-1",role:"img","aria-label":"Born"}))}))),A=({obscured:l})=>e.createElement("nav",{className:g("flex items-center w-full left-0 py-4 px-6 top-0 bg-transparent fixed z-10 transition duration-200 ease-in",{"bg-gray-50 shadow dark:bg-darkBackgroundNav dark:shadow-gray-800":l})},e.createElement(B,{to:"/",className:"flex items-center"},e.createElement(t,{icon:"Logo",width:"40",height:40,className:"fill-current text-primary opacity-90 dark:opacity-50"}),e.createElement("span",{className:"text-xl ml-2 text-primary opacity-90 dark:opacity-50"},"xantiagoma")),e.createElement(V,{className:"ml-auto"}));var ee={whatIdo:{title:"What I do?",slides:[{title:"Web Development",className:"bg-gradient-to-tr from-blue-700 to-blue-900",copy:"Sequi perspiciatis voluptatibus in dolorem et autem qui veniam aperiam. Doloremque quo repellendus reprehenderit et fugit doloremque corporis nihil.",Icon:t.Web},{title:"Software Development",className:"bg-gradient-to-tr from-green-700 to-green-900",copy:"Sequi perspiciatis voluptatibus in dolorem et autem qui veniam aperiam. Doloremque quo repellendus reprehenderit et fugit doloremque corporis nihil.",Icon:t.DesktopMobile},{title:"Mobile Apps",className:"bg-gradient-to-tr from-red-700 to-red-900",copy:"Sequi perspiciatis voluptatibus in dolorem et autem qui veniam aperiam. Doloremque quo repellendus reprehenderit et fugit doloremque corporis nihil.",Icon:t.Cellphone},{title:"Custom Development",className:"bg-gradient-to-tr from-purple-700 to-purple-900",copy:"Sequi perspiciatis voluptatibus in dolorem et autem qui veniam aperiam. Doloremque quo repellendus reprehenderit et fugit doloremque corporis nihil.",Icon:t.MonitorCellphoneStar}]},socialLinks:[{name:"LinkedIn",url:"https://www.linkedin.com/in/xantiagoma",icon:e.createElement(t.LinkedIn,{width:24,height:24,className:"cta"})},{name:"GitHub",url:"https://github.com/xantiagoma",icon:e.createElement(t.GitHub,{width:24,height:24,className:"cta"})},{name:"Twitter",url:"https://twitter.com/xantiagoma",icon:e.createElement(t.Twitter,{width:24,height:24,className:"cta"})},{name:"Instagram",url:"https://www.instagram.com/xantiagoma",icon:e.createElement(t.Instagram,{width:24,height:24,className:"cta"})},{name:"Gmail",url:"mailto:xantiagoma@gmail.com",icon:e.createElement(t.Gmail,{width:24,height:24,className:"cta"})}],skills:{title:"Skills",carousels:[{title:"Languages",slides:[{title:"JavaScript / Node.js / TypeScript",className:"bg-gradient-to-tr from-yellow-400 via-yellow-600 to-yellow-600",Icon:t.NodeJS},{title:"Dart",className:"bg-gradient-to-tr from-teal-400 to-blue-500",Icon:t.Dart},{title:"Python",className:"bg-gradient-to-tr from-blue-600 to-yellow-500",Icon:t.Python},{title:"Go",className:"bg-gradient-to-tr from-teal-500 to-blue-600",Icon:t.Go},{title:"Kotlin / Java",className:"bg-gradient-to-tr from-blue-600 via-red-600 to-orange-500",Icon:t.Kotlin},{title:"PHP",className:"bg-gradient-to-tr from-indigo-800 to-indigo-500",Icon:t.PHP},{title:"Bash",className:"bg-gradient-to-tr from-green-900 to-black",Icon:t.Bash}]},{title:"UI Frameworks",slides:[{title:"React",className:"bg-gradient-to-bl from-cyan-600 to-cyan-800",Icon:t.React},{title:"Vue",className:"bg-gradient-to-bl from-emerald-600 to-emerald-800",Icon:t.Vue},{title:"Flutter",className:"bg-gradient-to-bl from-sky-600 to-sky-800",Icon:t.Flutter},{title:"Angular",className:"bg-gradient-to-bl from-red-600 to-red-800",Icon:t.Angular},{title:"Ionic",className:"bg-gradient-to-bl from-blue-600 to-blue-800",Icon:t.Ionic}]},{title:"UI Libraries",slides:[{title:"Chakra UI & StyledComponents",className:"bg-gradient-to-bl from-teal-400 to-teal-600",Icon:t.Chakra},{title:"TailwindCSS",className:"bg-gradient-to-bl from-teal-600 to-teal-800",Icon:t.Tailwind},{title:"Bootstrap",className:"bg-gradient-to-bl from-violet-600 to-violet-800",Icon:t.Bootstrap},{title:"Ant Design",className:"bg-gradient-to-bl from-blue-600 to-red-800",Icon:t.AntDesign},{title:"MaterialUI",className:"bg-gradient-to-bl from-sky-600 to-blue-800",Icon:t.MaterialUI},{title:"Foundation",className:"bg-gradient-to-bl from-cyan-600 to-cyan-800",Icon:t.Foundation},{title:"Bulma",className:"bg-gradient-to-bl from-teal-600 to-teal-800",Icon:t.Bulma},{title:"ElementUI",className:"bg-gradient-to-bl from-sky-600 to-sky-800",Icon:t.Element}]},{title:"Data",slides:[{title:"REST",className:"bg-gradient-to-bl from-slate-600 to-slate-800",Icon:t.REST},{title:"GraphQL",className:"bg-gradient-to-bl from-pink-600 to-pink-800",Icon:t.GraphQL},{title:"PostgreSQL",className:"bg-gradient-to-bl from-blue-700 via-blue-900 to-blue-900",Icon:t.PostgreSQL},{title:"MongoDB",className:"bg-gradient-to-bl from-green-600 to-green-800",Icon:t.MongoDB},{title:"MySQL / MariaDB",className:"bg-gradient-to-bl from-yellow-800 to-blue-800",Icon:t.MySQL},{title:"RethinkDB",className:"bg-gradient-to-bl from-cyan-700 via-cyan-900 to-cyan-900",Icon:t.RethinkDB},{title:"CouchDB",className:"bg-gradient-to-bl from-red-700 via-red-900 to-red-900",Icon:t.CouchDB},{title:"Redis",className:"bg-gradient-to-bl from-rose-700 via-rose-900 to-rose-900",Icon:t.Redis}]},{title:"Backend Frameworks",slides:[{title:"Express.js / Koa / Hapi / Fastify / Restify",className:"bg-gradient-to-bl from-blue-700 via-blue-900 to-blue-900",Icon:t.Express},{title:"FastAPI / Flask / Tornado / Bottle",className:"bg-gradient-to-bl from-yellow-700 via-yellow-900 to-yellow-900",Icon:t.Flask},{title:"Gin / Revel / Beego / FastHTTP / Martini / Gorilla / Mux",className:"bg-gradient-to-bl from-indigo-700 via-indigo-900 to-indigo-900",Icon:t.Golang},{title:"Laravel / Lumen",className:"bg-gradient-to-bl from-red-700 via-red-900 to-red-900",Icon:t.Laravel},{title:"Spring Boot / Spark / Vert.X / Jooby",className:"bg-gradient-to-bl from-green-700 via-green-900 to-green-900",Icon:t.Java}]},{title:"Other",slides:[{title:"Next.js",className:"bg-gradient-to-bl from-slate-700 via-slate-900 to-slate-900",Icon:t.NextJS},{title:"HTML",className:"bg-gradient-to-bl from-amber-700 via-amber-900 to-amber-900",Icon:t.HTML},{title:"CSS / SASS / PostCSS",className:"bg-gradient-to-bl from-sky-700 via-sky-900 to-sky-900",Icon:t.Sass},{title:"JSON",className:"bg-gradient-to-bl from-yellow-700 via-yellow-900 to-yellow-900",Icon:t.JSON},{title:"Nuxt.js",className:"bg-gradient-to-tl from-green-500 to-green-900",Icon:t.Nuxt},{title:"Gatsby",className:"bg-gradient-to-tl from-purple-500 via-purple-900 to-purple-900",Icon:t.Gatsby},{title:"PWA",className:"bg-gradient-to-bl from-gray-500 via-gray-700 to-gray-700",Icon:t.PWA}]},{title:"Tools",slides:[{title:"Git",className:"bg-gradient-to-bl from-gray-500 via-gray-700 to-gray-700",Icon:t.Git},{title:"Sketch / Figma",className:"bg-gradient-to-bl from-yellow-500 via-yellow-700 to-yellow-700",Icon:t.Sketch},{title:"Photoshop / Illustrator",className:"bg-gradient-to-bl from-blue-500 via-blue-700 to-blue-700",Icon:t.Adobe},{title:"Office / Drive",className:"bg-gradient-to-bl from-orange-500 via-orange-700 to-orange-700",Icon:t.Drive},{title:"JIRA",className:"bg-gradient-to-bl from-sky-500 via-sky-700 to-sky-700",Icon:t.Atlassian}]},{title:"DevOps, OS & WebServers",slides:[{title:"Linux",className:"bg-gradient-to-tl from-yellow-500 via-yellow-700 to-yellow-700",Icon:t.Linux},{title:"Docker",className:"bg-gradient-to-tl from-sky-500 via-sky-700 to-sky-700",Icon:t.Docker},{title:"NGINX",className:"bg-gradient-to-tl from-teal-500 via-teal-700 to-teal-700",Icon:t.NGINX},{title:"CI/CD",className:"bg-gradient-to-tl from-stone-500 via-stone-700 to-stone-700",copy:"GitHub Actions / Azure Pipelines",Icon:t.CICD},{title:"Mac",className:"bg-gradient-to-tl from-slate-500 via-slate-700 to-slate-700",Icon:t.Apple},{title:"Apache",className:"bg-gradient-to-tl from-orange-500 via-red-700 to-red-700",Icon:t.Apache},{title:"Raspberry Pi",className:"bg-gradient-to-tl from-red-500 via-rose-700 to-rose-700",Icon:t.RaspberryPi},{title:"Caddy",className:"bg-gradient-to-tl from-green-500 via-cyan-700 to-cyan-700",Icon:t.Caddy}]},{title:"CMSs",slides:[{title:"Strapi",className:"bg-gradient-to-tl from-purple-500 via-purple-900 to-purple-900",Icon:t.Strapi},{title:"Contentful",className:"bg-gradient-to-tl from-blue-700 to-red-700",Icon:t.Contentful},{title:"Firebase",className:"bg-gradient-to-tl from-yellow-500 to-yellow-700",Icon:t.Firebase},{title:"Directus",className:"bg-gradient-to-tl from-slate-900 to-black",Icon:t.Directus},{title:"Wordpress",className:"bg-gradient-to-tl from-sky-700 to-cyan-700",Icon:t.Wordpress},{title:"GraphCMS",className:"bg-gradient-to-tl from-black to-gray-700",Icon:t.GraphCMS},{title:"Parse Server",className:"bg-gradient-to-tl from-blue-700 to-sky-700",Icon:t.Parse},{title:"Cockpit",className:"bg-gradient-to-tl from-neutral-800 to-black",Icon:t.Cockpit},{title:"Wagtail",className:"bg-gradient-to-tl from-black to-stone-700",Icon:t.Wagtail},{title:"Prismic",className:"bg-gradient-to-tl from-yellow-700 via-blue-700 to-red-700",Icon:t.Prismic}]},{title:"Learning",slides:[{title:"Cloud",className:"bg-gradient-to-tl from-indigo-500 via-indigo-700 to-indigo-700",Icon:t.Cloud},{title:"Rust",className:"bg-gradient-to-tl from-red-500 via-orange-700 to-orange-700",Icon:t.Rust},{title:"Kubernetes",className:"bg-gradient-to-tl from-blue-500 via-blue-700 to-blue-700",Icon:t.Kubernetes},{title:"Haskell",className:"bg-gradient-to-tl from-black to-purple-800",Icon:t.Haskell}]}]}};const{whatIdo:k,socialLinks:te,skills:L}=ee,ae=c.exports.lazy(()=>K(()=>import("./Mapa.0d7f0885.js"),["assets/Mapa.0d7f0885.js","assets/vendor.a415740f.js"])),{Carousel:M,Slide:E}=Y,le=()=>{const l=e.useRef(null),a=W(l,{root:null,rootMargin:"0px 0px 100px",threshold:1}),r=a&&a.intersectionRatio<1,{width:o,height:n}=P(),i=new Date().getFullYear();return e.createElement(c.exports.Fragment,null,e.createElement(A,{obscured:r}),e.createElement("header",{className:"hero rounded-b-2xl overflow-hidden",ref:l},e.createElement(y,{ratio:o/n},e.createElement(c.exports.Suspense,{fallback:e.createElement("span",{className:"sr-only"},"Loading map...")},e.createElement(ae,{width:o,height:n,zIndex:1,opacity:.3})),e.createElement("div",{className:"flex px-4",style:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",width:"100%",height:"100%",zIndex:2}},e.createElement("div",{className:"flex flex-col container mx-auto justify-center"},e.createElement("p",{className:"text-2xl sm:text-4xl lg:text-6xl mt-auto"},"I'm"," ",e.createElement("strong",{className:"font-semibold"},"Santiago Montoya Angarita"),"."),e.createElement("p",{className:"mt-2 sm:text-2xl lg:text-4xl"},"Software Developer / Web Engineer from",e.createElement(t.MapMaker,{className:"text-primary fill-current w-4 h-4 sm:w-10 sm:h-10",style:{display:"inline"}}),"Medell\xEDn,",e.createElement(t.FlagCO,{className:"mx-1 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10  inline"}),e.createElement("span",{className:"sr-only"},"Colombia"),"."),e.createElement("div",{className:"flex mt-4 flex-col md:flex-row landscape:flex-row"},e.createElement("a",{href:"https://drive.google.com/file/d/0B_LGcUgpukYrWURiVW5wNnFGT28/view?usp=sharing&resourcekey=0-SJO19BC7LGp2fBJodPmKSw",target:"_blank",rel:"noopener noreferrer",className:"py-2 px-4 border-current border-2 rounded text-lg w-min whitespace-nowrap"},"Download CV"),e.createElement("a",{href:"#experience",className:"py-2 px-4 border-current border-2 rounded text-lg w-min whitespace-nowrap md:ml-4 mt-4 md:mt-0 landscape:ml-4 landscape:mt-0"},"Work Experience")),e.createElement("div",{className:"flex flex-row mb-6 mt-auto"},e.createElement("ul",{className:"inline-grid self-start gap-3 sm:gap-6 grid-cols-5"},te.map(({name:s,url:m,icon:d})=>e.createElement("li",{key:s},e.createElement("a",{href:m,target:"_black",className:"social-icon"},d,e.createElement("span",{className:"sr-only"},s))))),e.createElement("a",{href:"mailto:xantiagoma@gmail.com",target:"_black",className:"flex flex-row ml-auto opacity-50 pl-4 clamp hover:opacity-100 transition duration-200"},"xantiagoma@gmail.com")))))),e.createElement("section",null,e.createElement("h2",{className:"text-4xl pl-8 pt-8"},k.title),k.slides&&e.createElement(M,null,k.slides.map(({title:s,copy:m,className:d,Icon:b})=>e.createElement(E,{key:s,className:"py-8 pl-8 flex-7-12 md:flex-4-9 lg:flex-4-11 xl:flex-3-10 2xl:flex-2-9 max-w-sm"},e.createElement("article",null,e.createElement(y,{ratio:16/9,role:"presentation"},e.createElement("div",{className:g(d,"rounded-2xl shadow-lg p-6",{"bg-blue-800":!d})},e.createElement(b,{className:"h-full mx-auto fill-current text-white text-opacity-40 max-w-full"}))),e.createElement("h3",{className:"text-lg mt-2"},s)))),e.createElement(E,{className:"pl-8"}))),e.createElement("section",null,e.createElement("h2",{className:"text-4xl pl-8 pt-8",id:"experience"},"Work Experience"),e.createElement(Z,null)),e.createElement("section",null,e.createElement("h2",{className:"text-4xl pl-8 pt-8"},L.title),L.carousels.map(({slides:s,title:m})=>e.createElement("section",{key:m},e.createElement("h3",{className:"text-3xl ml-8 mt-8 pl-4 border-l-4 border-red-700"},m),e.createElement(M,null,s.map(({title:d,className:b,Icon:h})=>e.createElement(E,{key:d,className:"py-8 pl-8 flex-4-7 md:flex-4-11 lg:flex-3-11 xl:flex-2-9 2xl:flex-2-11 skill-slide max-w-xs"},e.createElement("article",null,e.createElement(y,{ratio:16/9,role:"presentation"},e.createElement("div",{className:g(b,"rounded-2xl shadow-lg p-2 md:p-4 lg:p-6 xl:p-8",{"bg-blue-800":!b})},h&&e.createElement(h,{className:"h-full mx-auto fill-current text-white text-opacity-40 max-w-full"}))),e.createElement("h3",{className:"text-lg mt-2 border-l-4 border-red-700 pl-4 border-opacity-30"},d)))),e.createElement(E,{className:"pl-8"}))))),e.createElement("footer",{className:"dark:bg-black mt-8 opacity-60"},e.createElement("div",{className:"mx-auto p-4 flex items-center"},e.createElement("p",{className:"text-center w-full pl-7"},"\xA9 ",i," ",e.createElement("br",{className:"sm:hidden"}),"Santiago Montoya Angarita"),e.createElement("a",{href:"https://drive.google.com/file/d/0B_LGcUgpukYrWURiVW5wNnFGT28/view?usp=sharing&resourcekey=0-SJO19BC7LGp2fBJodPmKSw",target:"_blank",rel:"noopener noreferrer",className:"bg-black text-white w-7 h-7 inline-flex justify-center items-center font-bold rounded-md text-sm dark:bg-white dark:text-black transition duration-150","aria-label":"Resume / CV"},"CV"))))},re=()=>e.createElement(c.exports.Fragment,null,e.createElement(A,{obscured:!1}),e.createElement("div",{className:"h-screen w-screen flex items-center justify-center flex-col"},e.createElement("h1",{className:"text-9xl"},"404"),e.createElement("h1",{className:"text-2xl"},"Page not found"),e.createElement(B,{to:"/",className:"border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline mt-4"},"Go Home"))),oe=()=>{const l=_("(prefers-color-scheme: dark)"),[a,r]=O("theme","dark");return[r,a==="system"?l?"dark":"light":a,a]},ne=()=>{const[l,a,r]=oe();return e.createElement(G.Provider,{value:{theme:a,setTheme:l,source:r}},e.createElement(Q,null,e.createElement(q,null,e.createElement(H,null,e.createElement(S,{element:e.createElement(le,null),path:"/"}),e.createElement(S,{element:e.createElement(re,null),path:"*"})))))};Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(l=>{l.unregister()}).catch(l=>{console.error(l.message)})}const ie=document.getElementById("root");U.exports.render(e.createElement(ne,null),ie);se();export{R as M,G as T};
