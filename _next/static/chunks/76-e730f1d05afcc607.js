"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{10223:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(85893),n=r(67294),s=r(72204),l=r(82010),o=r(41664),c=r.n(o);var i=function(){var e=(0,l.F)(),t=e.setTheme,r=e.resolvedTheme,o=(0,n.useState)(!1),i=o[0],u=o[1];(0,n.useEffect)((function(){return u(!0)}),[]);var d="dark"===r;return(0,a.jsx)("nav",{className:"bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-500",children:(0,a.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"flex justify-between h-16",children:[(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)("div",{className:"flex-shrink-0 flex items-center",children:i&&(0,a.jsx)(c(),{href:"/",children:(0,a.jsx)("img",{className:"block h-12 w-auto cursor-pointer",src:d?"logo-white.svg":"logo-black.svg",alt:"Workflow"})})})}),(0,a.jsx)("div",{className:"ml-6 flex items-center",children:i&&(0,a.jsx)(s.DarkModeSwitch,{checked:d,onChange:function(e){t(e?"dark":"light")}})})]})})})},u=function(e){var t=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{}),t]})}},49906:function(e,t,r){r.d(t,{Z:function(){return w}});var a=r(85893),n=r(67294),s=r(22004);var l=function(e){var t=e.src,r=e.path,n=e.width,s=e.height,l=e.alt,o=e.caption;return(0,a.jsx)("div",{className:"relative text-base mx-auto max-w-prose lg:max-w-none",children:(0,a.jsxs)("figure",{children:[(0,a.jsx)("img",{className:"rounded-lg shadow-lg object-cover object-center",src:"PUBLIC_FOLDER"===t?"/".concat(r):r,alt:l,width:n,height:s}),o&&(0,a.jsxs)("figcaption",{className:"mt-3 flex text-sm text-gray-500",children:[(0,a.jsx)("svg",{className:"flex-none w-5 h-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})}),(0,a.jsx)("span",{className:"ml-2",children:o})]})]})})},o=r(46189);var c=function(e){var t=e.authors;return(0,a.jsxs)("div",{className:"prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1",children:[(0,a.jsx)("h3",{className:"text-gray-500 dark:text-gray-300",children:"Authors"}),t.map((function(e,t){var r=o.r[e],n=r.first_name,s=r.last_name,l=r.url;return l?(0,a.jsxs)("span",{children:[t?", ":"",(0,a.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:"".concat(n," ").concat(s)})]},e):(0,a.jsxs)("span",{children:[t?", ":"","".concat(n," ").concat(s)]},e)}))]})},i=r(25373),u=r(85611);var d=function(e){var t=e.code,r=(0,u.e1)().addToast,n={code:i.dNJ,documentation:i.vJ3,manuscript:i.QqN};return(0,a.jsx)("div",{className:"prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 -mt-7 lg:-mt-9 mb-3",children:t.map((function(e){var t=e.link,s=e.alias,l=e.type,o=e.disabled,c=e.disabledText,i=n[l];return o?(0,a.jsx)("span",{children:(0,a.jsxs)("button",{type:"button",onClick:function(e){e.preventDefault(),r(c,{appearance:"info",autoDismiss:!0})},className:"disabled cursor-not-allowed inline-flex items-center px-3 py-1 border mr-4 mt-4 border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-gray-500 bg-gray-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500",children:[(0,a.jsx)(i,{className:"text-lg mr-2"}),s]})},s):(0,a.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,a.jsxs)("button",{type:"button",className:"inline-flex items-center px-3 py-1 border mr-4 mt-4 border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500",children:[(0,a.jsx)(i,{className:"text-lg mr-2"}),s]})},s)}))})},m=r(96260),g=r(27087),x=r(2097);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){h(e,t,r[t])}))}return e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,s=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(s.push(a.value),!t||s.length!==t);l=!0);}catch(c){o=!0,n=c}finally{try{l||null==r.return||r.return()}finally{if(o)throw n}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(e){var t=e.bib,r=(0,u.e1)().addToast,s=b((0,m.Z)(t||"",{successDuration:1e3}),2),l=s[0],o=s[1];return(0,n.useEffect)((function(){l&&r("Copied to clipboard!",{appearance:"info",autoDismiss:!0})}),[l,r]),(0,a.jsx)(a.Fragment,{children:t&&(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1",children:[(0,a.jsxs)("h3",{className:"text-gray-500 dark:text-gray-300",children:["Bibtex"," ",(0,a.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),o()},className:"ml-2 inline-flex items-center px-3 py-1 border mr-4 mt-4 border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500",children:(0,a.jsx)(i.zTD,{className:"text-lg"})})]}),(0,a.jsx)(g.ZP,p({},g.lG,{code:t,language:"makefile",theme:x.Z,children:function(e){var t=e.className,r=e.style,n=e.tokens,s=e.getLineProps,l=e.getTokenProps;return(0,a.jsx)("pre",{className:t,style:r,children:n.map((function(e,t){return(0,a.jsx)("div",p({},s({line:e,key:t}),{children:e.map((function(e,t){return(0,a.jsx)("span",p({},l({token:e,key:t})),t)}))}),t)}))})}}))]})})})};function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){j(e,t,r[t])}))}return e}var w=function(e){var t=e.title,r=e.authors,o=e.journal,i=e.year,u=e.abstract,m=e.image,g=e.videos,x=e.code,f=e.bib,h=(0,n.useState)(!1),p=h[0],b=h[1];(0,n.useEffect)((function(){return b(!0)}),[]);var j=g.length>0;return(0,a.jsx)("div",{className:"bg-gray-50 dark:bg-gray-900 overflow-hidden",children:p&&(0,a.jsxs)("div",{className:"relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8",children:[(0,a.jsx)("div",{className:"hidden lg:block bg-gray-50 dark:bg-gray-900 absolute top-0 bottom-0 left-3/4 w-screen"}),(0,a.jsxs)("div",{className:"mx-auto text-base max-w-prose lg:max-w-none ",children:[(0,a.jsx)("h2",{className:"text-base text-cyan-600 dark:text-cyan-800 font-semibold tracking-wide uppercase",children:o+" ("+i+")"}),(0,a.jsx)("h3",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl relative z-20",children:t})]}),(0,a.jsxs)("div",{className:"mt-8 lg:grid lg:grid-cols-5 lg:gap-8",children:[(0,a.jsxs)("div",{className:"relative lg:row-start-1 lg:col-start-4 lg:col-span-2",children:[(0,a.jsxs)("svg",{className:"hidden lg:block absolute top-0 right-0 -mt-20 -mr-20",width:"404",height:"384",fill:"none",viewBox:"0 0 404 384","aria-hidden":"true",children:[(0,a.jsx)("defs",{children:(0,a.jsx)("pattern",{id:"de316486-4a29-4312-bdfc-fbce2132a2c1",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse",children:(0,a.jsx)("rect",{x:"0",y:"0",width:"4",height:"4",className:"text-gray-200 dark:text-gray-600",fill:"currentColor"})})}),(0,a.jsx)("rect",{width:"404",height:"384",fill:"url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"})]}),(0,a.jsx)(l,v({},m))]}),(0,a.jsxs)("div",{className:"mt-8 lg:mt-0 lg:col-span-3 min-h-screen",children:[(0,a.jsx)(d,{code:x}),(0,a.jsx)(c,{authors:r}),(0,a.jsxs)("div",{className:"mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1",children:[(0,a.jsx)("h3",{className:"text-gray-500 dark:text-gray-300",children:"Abstract"}),(0,a.jsx)("p",{children:u})]}),j&&(0,a.jsxs)("div",{className:"mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1",children:[(0,a.jsx)("h3",{className:"text-gray-500 dark:text-gray-300",children:"Media"}),g.map((function(e,t){return(0,a.jsx)(s.Z,{className:"mt-5 rounded-lg",width:"auto",url:e,controls:!0},t)}))]}),(0,a.jsx)(y,{bib:f})]})]})]})})}},46189:function(e,t,r){function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{c:function(){return s},r:function(){return l}});var n,s={IASON_SARANTOPOULOS:"IASON_SARANTOPOULOS",MARIOS_KIATOS:"MARIOS_KIATOS",ZOE_DOULGERI:"ZOE_DOULGERI",SOTIRIS_MALASIOTIS:"SOTIRIS_MALASIOTIS"},l=(a(n={},s.IASON_SARANTOPOULOS,{first_name:"Iason",last_name:"Sarantopoulos",url:"https://arl.ee.auth.gr/people/sarantopoulos/"}),a(n,s.MARIOS_KIATOS,{first_name:"Marios",last_name:"Kiatos",url:"https://scholar.google.com/citations?user=VBOCox4AAAAJ"}),a(n,s.ZOE_DOULGERI,{first_name:"Zoe",last_name:"Doulgeri",url:"https://arl.ee.auth.gr/people/doulgeri/"}),a(n,s.SOTIRIS_MALASIOTIS,{first_name:"Sotiris",last_name:"Malassiotis",url:"https://scholar.google.com/citations?user=icuzuYgAAAAJ"}),n)}}]);