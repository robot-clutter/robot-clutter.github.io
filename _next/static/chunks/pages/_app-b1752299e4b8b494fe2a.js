_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"67mL":function(e,t,n){},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},Q7LR:function(e,t,n){},cha2:function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("nKUr"),a=n("sKF2");n("Q7LR"),n("67mL");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps,r=t.layout||function(e){return Object(o.jsx)(o.Fragment,{children:e})};return Object(o.jsx)(a.a,{attribute:"class",children:Object(o.jsx)(r,{children:Object(o.jsx)(t,i({},n))})})}},g4pe:function(e,t,n){e.exports=n("8Kt/")},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},sKF2:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=n("g4pe"),c=n.n(a),i=Object(r.createContext)({setTheme:function(e){},themes:[]}),u=function(){return Object(r.useContext)(i)},s=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,c=e.enableSystem,u=void 0===c||c,s=e.storageKey,f=void 0===s?"theme":s,h=e.themes,v=void 0===h?["light","dark"]:h,b=e.defaultTheme,p=void 0===b?"light":b,y=e.attribute,O=void 0===y?"data-theme":y,g=e.value,j=e.children,w=Object(r.useState)((function(){return m(f)})),T=w[0],E=w[1],S=Object(r.useState)((function(){return m(f)})),_=S[0],k=S[1],x=g?Object.values(g):v,P=Object(r.useCallback)((function(e,t){void 0===t&&(t=!0);var n=(null==g?void 0:g[e])||e,r=a?d():null;if(t)try{localStorage.setItem(f,e)}catch(e){}var o,c=document.documentElement;"class"===O?((o=c.classList).remove.apply(o,x),c.classList.add(n)):c.setAttribute(O,n),null==r||r()}),[]),L=Object(r.useCallback)((function(e){var t=e.matches?"dark":"light";k(t),"system"===T&&P(t,!1)}),[T]);Object(r.useEffect)((function(){if(u){var e=window.matchMedia("(prefers-color-scheme: dark)");return e.addListener(L),L(e),function(){return e.removeListener(L)}}}),[L]);var C=Object(r.useCallback)((function(e){t||(P(e),E(e))}),[]);return Object(r.useEffect)((function(){var e=function(e){e.key===f&&C(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[]),o.a.createElement(i.Provider,{value:{theme:T,setTheme:C,forcedTheme:t,resolvedTheme:"system"===T?_:T,themes:u?[].concat(v,["system"]):v,systemTheme:u?_:void 0}},o.a.createElement(l,{forcedTheme:t,storageKey:f,attribute:O,value:g,enableSystem:u,defaultTheme:p,attrs:x}),j)},l=Object(r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,r=e.attribute,a=e.enableSystem,i=e.defaultTheme,u=e.value,s="class"===r?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",l=function(e,t){e=(null==u?void 0:u[e])||e;var n=t?e:"'"+e+"'";return"class"===r?"d.add("+n+")":"d.setAttribute('"+r+"', "+n+")"};return o.a.createElement(c.a,null,o.a.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+s+l(t)+"}()"}}:a?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+s+"var e=localStorage.getItem('"+n+"');if(!e)return localStorage.setItem('"+n+"','"+i+"'),"+l(i)+';if("system"===e){var t="(prefers-color-scheme: dark)",m=window.matchMedia(t);m.media!==t||m.matches?'+l("dark")+":"+l("light")+"}else "+(u?"var x="+JSON.stringify(u)+";":"")+l(u?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+s+'var t=localStorage.getItem("'+n+'");if(!t)return localStorage.setItem("'+n+'","'+i+'"),'+l(i)+";"+(u?"var x="+JSON.stringify(u)+";":"")+l(u?"x[t]":"t",!0)+"}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),m=function(e){if("undefined"!=typeof window){var t;try{t=localStorage.getItem(e)||void 0}catch(e){}return t}},d=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(e),document.head.removeChild(e)}}}},[[0,0,2,1]]]);