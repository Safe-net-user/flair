(()=>{var e={};e.id=826,e.ids=[826],e.modules={53524:e=>{"use strict";e.exports=require("@prisma/client")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},15673:e=>{"use strict";e.exports=require("node:events")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},47261:e=>{"use strict";e.exports=require("node:util")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},83840:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>a.a,__next_app__:()=>f,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>l}),n(96469),n(71679),n(45823),n(26514),n(12523);var r=n(23191),o=n(88716),i=n(37922),a=n.n(i),u=n(95231),s={};for(let e in u)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(s[e]=()=>u[e]);n.d(t,s);let l=["",{children:["back-up",{children:["explore",{children:["user",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,96469)),"/workspaces/flair/src/app/back-up/explore/user/[slug]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,71679)),"/workspaces/flair/src/app/back-up/explore/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(n.bind(n,45823)),"/workspaces/flair/src/app/back-up/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,26514)),"/workspaces/flair/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.bind(n,12523)),"/workspaces/flair/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/workspaces/flair/src/app/back-up/explore/user/[slug]/page.tsx"],d="/back-up/explore/user/[slug]/page",f={require:n,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/back-up/explore/user/[slug]/page",pathname:"/back-up/explore/user/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},76968:(e,t,n)=>{Promise.resolve().then(n.bind(n,26147))},35303:()=>{},26147:(e,t,n)=>{"use strict";n.d(t,{Carousel:()=>_,CarouselContent:()=>L,CarouselItem:()=>M,CarouselNext:()=>U,CarouselPrevious:()=>F});var r=n(10326),o=n(17577),i=n(76812);function a(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function u(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let r=e[n],o=t[n];return"function"==typeof r?`${r}`==`${o}`:a(r)&&a(o)?u(r,o):r===o})}function s(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function l(e){return"number"==typeof e}function c(e){return"string"==typeof e}function d(e){return"boolean"==typeof e}function f(e){return"[object Object]"===Object.prototype.toString.call(e)}function p(e){return Math.abs(e)}function m(e){return Math.sign(e)}function x(e){return v(e).map(Number)}function g(e){return e[h(e)]}function h(e){return Math.max(0,e.length-1)}function b(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function v(e){return Object.keys(e)}function y(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function w(){let e=[],t={add:function(n,r,o,i={passive:!0}){let a;return"addEventListener"in n?(n.addEventListener(r,o,i),a=()=>n.removeEventListener(r,o,i)):(n.addListener(o),a=()=>n.removeListener(o)),e.push(a),t},clear:function(){e=e.filter(e=>e())}};return t}function O(e=0,t=0){let n=p(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function N(e){let t=e;function n(e){return l(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function E(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},r=t.style,o=!1;return{clear:function(){o||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){o||(r.transform=n(e.direction(t)))},toggleActive:function(e){o=!e}}}let j={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function C(e,t,n){let r,o,i,a,u;let s=e.ownerDocument,k=s.defaultView,D=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(v(n).forEach(r=>{let o=t[r],i=n[r],a=f(o)&&f(i);t[r]=a?e(o,i):i}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let r=n.breakpoints||{},o=v(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{});return t(n,o)},optionsMediaQueries:function(t){return t.map(e=>v(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(k),P=(u=[],{init:function(e,t){return(u=t.filter(({options:e})=>!1!==D.optionsAtMedia(e).active)).forEach(t=>t.init(e,D)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){u=u.filter(e=>e.destroy())}}),S=w(),_=function(){let e;let t={},n={init:function(t){e=t},emit:function(r){return(t[r]||[]).forEach(t=>t(e,r)),n},off:function(e,r){return t[e]=(t[e]||[]).filter(e=>e!==r),n},on:function(e,r){return t[e]=(t[e]||[]).concat([r]),n}};return n}(),{mergeOptions:L,optionsAtMedia:M,optionsMediaQueries:F}=D,{on:U,off:T,emit:q}=_,A=!1,I=L(j,C.globalOptions),z=L(I),R=[];function H(t,n){!A&&(z=M(I=L(I,t)),R=n||R,function(){let{container:t,slides:n}=z;i=(c(t)?e.querySelector(t):t)||e.children[0];let r=c(n)?i.querySelectorAll(n):n;a=[].slice.call(r||i.children)}(),r=function t(n){let r=function(e,t,n,r,o,i,a){let u,s;let{align:f,axis:j,direction:C,startIndex:k,loop:D,duration:P,dragFree:S,dragThreshold:_,inViewThreshold:L,slidesToScroll:M,skipSnaps:F,containScroll:U,watchResize:T,watchSlides:q,watchDrag:A}=i,I={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:o}=e;return{top:t,right:n+r,bottom:t+o,left:n,width:r,height:o}}},z=I.measure(t),R=n.map(I.measure),H=function(e,t){let n="rtl"===t,r="y"===e,o=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(e){let{height:t,width:n}=e;return r?t:n},direction:function(e){return e*o}}}(j,C),V=H.measureSize(z),B={measure:function(e){return e/100*V}},$=function(e,t){let n={start:function(){return 0},center:function(e){return(t-e)/2},end:function(e){return t-e}};return{measure:function(r,o){return c(e)?n[e](r):e(t,r,o)}}}(f,V),G=!D&&!!U,{slideSizes:X,slideSizesWithGaps:J,startGap:Y,endGap:K}=function(e,t,n,r,o,i){let{measureSize:a,startEdge:u,endEdge:s}=e,l=n[0]&&o,c=function(){if(!l)return 0;let e=n[0];return p(t[u]-e[u])}(),d=l?parseFloat(i.getComputedStyle(g(r)).getPropertyValue(`margin-${s}`)):0,f=n.map(a),m=n.map((e,t,n)=>{let r=t===h(n);return t?r?f[t]+d:n[t+1][u]-e[u]:f[t]+c}).map(p);return{slideSizes:f,slideSizesWithGaps:m,startGap:c,endGap:d}}(H,z,R,n,D||!!U,o),Q=function(e,t,n,r,o,i,a,u,s){let{startEdge:c,endEdge:d,direction:f}=e,m=l(n);return{groupSlides:function(e){return m?x(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?x(e).reduce((n,s,l)=>{let m=g(n)||0,x=s===h(e),b=o[c]-i[m][c],v=o[c]-i[s][d],y=r||0!==m?0:f(a),w=p(v-(!r&&x?f(u):0)-(b+y));return l&&w>t+2&&n.push(s),x&&n.push(e.length),n},[]).map((t,n,r)=>{let o=Math.max(r[n-1]||0);return e.slice(o,t)}):[]}}}(H,V,M,D,z,R,Y,K,0),{snaps:Z,snapsAligned:W}=function(e,t,n,r,o){let{startEdge:i,endEdge:a}=e,{groupSlides:u}=o,s=u(r).map(e=>g(e)[a]-e[0][i]).map(p).map(t.measure),l=r.map(e=>n[i]-e[i]).map(e=>-p(e)),c=u(l).map(e=>e[0]).map((e,t)=>e+s[t]);return{snaps:l,snapsAligned:c}}(H,$,z,R,Q),ee=-g(Z)+g(J),{snapsContained:et,scrollContainLimit:en}=function(e,t,n,r,o){let i=O(-t+e,0),a=n.map((e,t)=>{let{min:r,max:o}=i,a=i.constrain(e),u=t===h(n);return t?u||1>p(r-a)?r:1>p(o-a)?o:a:o}).map(e=>parseFloat(e.toFixed(3))),u=function(){let e=a[0],t=g(a);return O(a.lastIndexOf(e),a.indexOf(t)+1)}();return{snapsContained:function(){if(t<=e+2)return[i.max];if("keepSnaps"===r)return a;let{min:n,max:o}=u;return a.slice(n,o)}(),scrollContainLimit:u}}(V,ee,W,U,0),er=G?et:W,{limit:eo}=function(e,t,n){let r=t[0];return{limit:O(n?r-e:g(t),r)}}(ee,er,D),ei=function e(t,n,r){let{constrain:o}=O(0,t),i=t+1,a=u(n);function u(e){return r?p((i+e)%i):o(e)}function s(){return e(t,a,r)}let l={get:function(){return a},set:function(e){return a=u(e),l},add:function(e){return s().set(a+e)},clone:s};return l}(h(er),k,D),ea=ei.clone(),eu=x(n),es=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()},el=({scrollBody:e,translate:t,location:n,offsetLocation:r,scrollLooper:o,slideLooper:i,dragHandler:a,animation:u,eventHandler:s,options:{loop:l}},c)=>{let d=e.velocity(),f=e.settled();f&&!a.pointerDown()&&(u.stop(),s.emit("settle")),f||s.emit("scroll"),r.set(n.get()-d+d*c),l&&(o.loop(e.direction()),i.loop()),t.to(r.get())},ec=function(e,t,n,r){let o=w(),i=1e3/60,a=null,u=0,s=0;function l(e){if(!s)return;a||(a=e);let o=e-a;for(a=e,u+=o;u>=i;)n(),u-=i;r(p(u/i)),s&&t.requestAnimationFrame(l)}function c(){t.cancelAnimationFrame(s),a=null,u=0,s=0}return{init:function(){o.add(e,"visibilitychange",()=>{e.hidden&&(a=null,u=0)})},destroy:function(){c(),o.clear()},start:function(){s||(s=t.requestAnimationFrame(l))},stop:c,update:n,render:r}}(r,o,()=>es(eN),e=>el(eN,e)),ed=er[ei.get()],ef=N(ed),ep=N(ed),em=N(ed),ex=function(e,t,n,r,o){let i=0,a=0,u=r,s=.68,l=e.get(),c=0;function d(e){return u=e,x}function f(e){return s=e,x}let x={direction:function(){return a},duration:function(){return u},velocity:function(){return i},seek:function(){let t=n.get()-e.get(),r=0;return u?(i+=t/u,i*=s,l+=i,e.add(i),r=l-c):(i=0,e.set(n),r=t),a=m(r),c=l,x},settled:function(){return .001>p(n.get()-t.get())},useBaseFriction:function(){return f(.68)},useBaseDuration:function(){return d(r)},useFriction:f,useDuration:d};return x}(ef,ep,em,P,0),eg=function(e,t,n,r,o){let{reachedAny:i,removeOffset:a,constrain:u}=r;function s(e){return e.concat().sort((e,t)=>p(e)-p(t))[0]}function l(t,r){let o=[t,t+n,t-n];if(!e)return o[0];if(!r)return s(o);let i=o.filter(e=>m(e)===r);return i.length?s(i):g(o)-n}return{byDistance:function(n,r){let s=o.get()+n,{index:c,distance:d}=function(n){let r=e?a(n):u(n),{index:o}=t.map((e,t)=>({diff:l(e-r,0),index:t})).sort((e,t)=>p(e.diff)-p(t.diff))[0];return{index:o,distance:r}}(s),f=!e&&i(s);if(!r||f)return{index:c,distance:n};let m=n+l(t[c]-d,0);return{index:c,distance:m}},byIndex:function(e,n){let r=l(t[e]-o.get(),n);return{index:e,distance:r}},shortcut:l}}(D,er,ee,eo,em),eh=function(e,t,n,r,o,i,a){function u(o){let u=o.distance,s=o.index!==t.get();i.add(u),u&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),s&&(n.set(t.get()),t.set(o.index),a.emit("select"))}return{distance:function(e,t){u(o.byDistance(e,t))},index:function(e,n){let r=t.clone().set(e);u(o.byIndex(r.get(),n))}}}(ec,ei,ea,ex,eg,em,a),eb=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(eo),ev=w(),ey=function(e,t,n,r){let o;let i={},a=null,u=null,s=!1;return{init:function(){o=new IntersectionObserver(e=>{s||(e.forEach(e=>{i[t.indexOf(e.target)]=e}),a=null,u=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:r}),t.forEach(e=>o.observe(e))},destroy:function(){o&&o.disconnect(),s=!0},get:function(e=!0){if(e&&a)return a;if(!e&&u)return u;let t=v(i).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:o}=i[r];return(e&&o||!e&&!o)&&t.push(r),t},[]);return e&&(a=t),e||(u=t),t}}}(t,n,a,L),{slideRegistry:ew}=function(e,t,n,r,o,i){let{groupSlides:a}=o,{min:u,max:s}=r;return{slideRegistry:function(){let r=a(i);return 1===n.length?[i]:e&&"keepSnaps"!==t?r.slice(u,s).map((e,t,n)=>{let r=t===h(n);return t?r?b(h(i)-g(n)[0]+1,g(n)[0]):e:b(g(n[0])+1)}):r}()}}(G,U,er,en,Q,eu),eO=function(e,t,n,r,o,i){let a=0;function u(e){"Tab"===e.code&&(a=new Date().getTime())}function s(u){i.add(u,"focus",()=>{if(new Date().getTime()-a>10)return;e.scrollLeft=0;let i=t.indexOf(u),s=n.findIndex(e=>e.includes(i));l(s)&&(o.useDuration(0),r.index(s,0))},{passive:!0,capture:!0})}return{init:function(){i.add(document,"keydown",u,!1),t.forEach(s)}}}(e,n,ew,eh,ex,ev),eN={ownerDocument:r,ownerWindow:o,eventHandler:a,containerRect:z,slideRects:R,animation:ec,axis:H,dragHandler:function(e,t,n,r,o,i,a,u,s,l,c,f,x,g,h,b,v,N,E){let{cross:j,direction:C}=e,k=["INPUT","SELECT","TEXTAREA"],D={passive:!1},P=w(),S=w(),_=O(50,225).constrain(g.measure(20)),L={mouse:300,touch:400},M={mouse:500,touch:600},F=h?43:25,U=!1,T=0,q=0,A=!1,I=!1,z=!1,R=!1;function H(e){let t=i.readPoint(e),n=i.readPoint(e,j),r=p(t-T),a=p(n-q);if(!I&&!R&&(!e.cancelable||!(I=r>a)))return V(e);let s=i.pointerMove(e);r>b&&(z=!0),l.useFriction(.3).useDuration(1),u.start(),o.add(C(s)),e.preventDefault()}function V(e){let t=c.byDistance(0,!1).index!==f.get(),n=i.pointerUp(e)*(h?M:L)[R?"mouse":"touch"],r=function(e,t){let n=f.add(-1*m(e)),r=c.byDistance(e,!h).distance;return h||p(e)<_?r:v&&t?.5*r:c.byIndex(n.get(),0).distance}(C(n),t),o=function(e,t){var n,r;if(0===e||0===t||p(e)<=p(t))return 0;let o=(n=p(e),r=p(t),p(n-r));return p(o/e)}(n,r);I=!1,A=!1,S.clear(),l.useDuration(F-10*o).useFriction(.68+o/50),s.distance(r,!h),R=!1,x.emit("pointerUp")}function B(e){z&&(e.stopPropagation(),e.preventDefault(),z=!1)}return{init:function(e){E&&P.add(t,"dragstart",e=>e.preventDefault(),D).add(t,"touchmove",()=>void 0,D).add(t,"touchend",()=>void 0).add(t,"touchstart",u).add(t,"mousedown",u).add(t,"touchcancel",V).add(t,"contextmenu",V).add(t,"click",B,!0);function u(u){(d(E)||E(e,u))&&function(e){let u=y(e,r);R=u,z=h&&u&&!e.buttons&&U,U=p(o.get()-a.get())>=2,u&&0!==e.button||function(e){let t=e.nodeName||"";return k.includes(t)}(e.target)||(A=!0,i.pointerDown(e),l.useFriction(0).useDuration(0),o.set(a),function(){let e=R?n:t;S.add(e,"touchmove",H,D).add(e,"touchend",V).add(e,"mousemove",H,D).add(e,"mouseup",V)}(),T=i.readPoint(e),q=i.readPoint(e,j),x.emit("pointerDown"))}(u)}},pointerDown:function(){return A},destroy:function(){P.clear(),S.clear()}}}(H,e,r,o,em,function(e,t){let n,r;function o(e){return e.timeStamp}function i(n,r){let o=r||e.scroll,i=`client${"x"===o?"X":"Y"}`;return(y(n,t)?n:n.touches[0])[i]}return{pointerDown:function(e){return n=e,r=e,i(e)},pointerMove:function(e){let t=i(e)-i(r),a=o(e)-o(n)>170;return r=e,a&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=i(r)-i(n),a=o(e)-o(n),u=o(e)-o(r)>170,s=t/a;return a&&!u&&p(s)>.1?s:0},readPoint:i}}(H,o),ef,ec,eh,ex,eg,ei,a,B,S,_,F,0,A),eventStore:ev,percentOfView:B,index:ei,indexPrevious:ea,limit:eo,location:ef,offsetLocation:ep,options:i,resizeHandler:function(e,t,n,r,o,i,a){let u,s;let l=[],c=!1;function f(e){return o.measureSize(a.measure(e))}return{init:function(o){i&&(s=f(e),l=r.map(f),u=new ResizeObserver(a=>{!c&&(d(i)||i(o,a))&&function(i){for(let a of i){let i=a.target===e,u=r.indexOf(a.target),c=i?s:l[u];if(p(f(i?e:r[u])-c)>=.5){n.requestAnimationFrame(()=>{o.reInit(),t.emit("resize")});break}}}(a)}),[e].concat(r).forEach(e=>u.observe(e)))},destroy:function(){u&&u.disconnect(),c=!0}}}(t,a,o,n,H,T,I),scrollBody:ex,scrollBounds:function(e,t,n,r,o){let i=o.measure(10),a=o.measure(50),u=O(.1,.99),s=!1;return{constrain:function(o){if(!(!s&&e.reachedAny(n.get())&&e.reachedAny(t.get())))return;let l=e.reachedMin(t.get())?"min":"max",c=p(e[l]-t.get()),d=n.get()-t.get(),f=u.constrain(c/a);n.subtract(d*f),!o&&p(d)<i&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){s=!e}}}(eo,ep,em,ex,B),scrollLooper:function(e,t,n,r){let{reachedMin:o,reachedMax:i}=O(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?i(n.get()):-1===t&&o(n.get())))return;let a=-1*t*e;r.forEach(e=>e.add(a))}}}(ee,eo,ep,[ef,ep,em]),scrollProgress:eb,scrollSnapList:er.map(eb.get),scrollSnaps:er,scrollTarget:eg,scrollTo:eh,slideLooper:function(e,t,n,r,o,i,a,u,s){let l=x(o),c=p(f(x(o).reverse(),a[0]),n,!1).concat(p(f(l,t-a[0]-1),-n,!0));function d(e,t){return e.reduce((e,t)=>e-o[t],t)}function f(e,t){return e.reduce((e,n)=>d(e,t)>0?e.concat([n]):e,[])}function p(o,a,l){let c=i.map((e,n)=>({start:e-r[n]+.5+a,end:e+t-.5+a}));return o.map(t=>{let r=l?0:-n,o=l?n:0,i=c[t][l?"end":"start"];return{index:t,loopPoint:i,slideLocation:N(-1),translate:E(e,s[t]),target:()=>u.get()>i?r:o}})}return{canLoop:function(){return c.every(({index:e})=>.1>=d(l.filter(t=>t!==e),t))},clear:function(){c.forEach(e=>e.translate.clear())},loop:function(){c.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,o=t();o!==r.get()&&(n.to(o),r.set(o))})},loopPoints:c}}(H,V,ee,X,J,Z,er,ep,n),slideFocus:eO,slidesHandler:(s=!1,{init:function(e){q&&(u=new MutationObserver(t=>{!s&&(d(q)||q(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),a.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){u&&u.disconnect(),s=!0}}),slidesInView:ey,slideIndexes:eu,slideRegistry:ew,slidesToScroll:Q,target:em,translate:E(H,t)};return eN}(e,i,a,s,k,n,_);return n.loop&&!r.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):r}(z),F([I,...R.map(({options:e})=>e)]).forEach(e=>S.add(e,"change",V)),z.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(),r.eventHandler.init(X),r.resizeHandler.init(X),r.slidesHandler.init(X),r.options.loop&&r.slideLooper.loop(),i.offsetParent&&a.length&&r.dragHandler.init(X),o=P.init(X,R)))}function V(e,t){let n=G();B(),H(L({startIndex:n},e),t),_.emit("reInit")}function B(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),P.destroy(),S.clear()}function $(e,t,n){z.active&&!A&&(r.scrollBody.useBaseFriction().useDuration(!0===t?0:z.duration),r.scrollTo.index(e,n||0))}function G(){return r.index.get()}let X={canScrollNext:function(){return r.index.add(1).get()!==G()},canScrollPrev:function(){return r.index.add(-1).get()!==G()},containerNode:function(){return i},internalEngine:function(){return r},destroy:function(){A||(A=!0,S.clear(),B(),_.emit("destroy"))},off:T,on:U,emit:q,plugins:function(){return o},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:V,rootNode:function(){return e},scrollNext:function(e){$(r.index.add(1).get(),e,-1)},scrollPrev:function(e){$(r.index.add(-1).get(),e,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:$,selectedScrollSnap:G,slideNodes:function(){return a},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return H(t,n),setTimeout(()=>_.emit("init"),0),X}function k(e={},t=[]){let n=(0,o.useRef)(e),r=(0,o.useRef)(t),[i,a]=(0,o.useState)(),[l,c]=(0,o.useState)(),d=(0,o.useCallback)(()=>{i&&i.reInit(n.current,r.current)},[i]);return(0,o.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&l){C.globalOptions=k.globalOptions;let e=C(l,n.current,r.current);return a(e),()=>e.destroy()}a(void 0)},[l,a]),(0,o.useEffect)(()=>{u(n.current,e)||(n.current=e,d())},[e,d]),(0,o.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=s(e),r=s(t);return n.every((e,t)=>u(e,r[t]))}(r.current,t)&&(r.current=t,d())},[t,d]),[c,i]}C.globalOptions=void 0,k.globalOptions=void 0;var D=n(91664);!function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}();let P=o.createContext(null);function S(){let e=o.useContext(P);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let _=o.forwardRef(({orientation:e="horizontal",opts:t,setApi:n,plugins:i,className:a,children:u,...s},l)=>{let[c,d]=k({...t,axis:"horizontal"===e?"x":"y"},i),[f,p]=o.useState(!1),[m,x]=o.useState(!1),g=o.useCallback(e=>{e&&(p(e.canScrollPrev()),x(e.canScrollNext()))},[]),h=o.useCallback(()=>{d?.scrollPrev()},[d]),b=o.useCallback(()=>{d?.scrollNext()},[d]),v=o.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),h()):"ArrowRight"===e.key&&(e.preventDefault(),b())},[h,b]);return o.useEffect(()=>{d&&n&&n(d)},[d,n]),o.useEffect(()=>{if(d)return g(d),d.on("reInit",g),d.on("select",g),()=>{d?.off("select",g)}},[d,g]),r.jsx(P.Provider,{value:{carouselRef:c,api:d,opts:t,orientation:e||(t?.axis==="y"?"vertical":"horizontal"),scrollPrev:h,scrollNext:b,canScrollPrev:f,canScrollNext:m},children:r.jsx("div",{ref:l,onKeyDownCapture:v,className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("relative",a),role:"region","aria-roledescription":"carousel",...s,children:u})})});_.displayName="Carousel";let L=o.forwardRef(({className:e,...t},n)=>{let{carouselRef:o,orientation:i}=S();return r.jsx("div",{ref:o,className:"overflow-hidden",children:r.jsx("div",{ref:n,className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("flex","horizontal"===i?"-ml-4":"-mt-4 flex-col",e),...t})})});L.displayName="CarouselContent";let M=o.forwardRef(({className:e,...t},n)=>{let{orientation:o}=S();return r.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("min-w-0 shrink-0 grow-0 basis-full","horizontal"===o?"pl-4":"pt-4",e),...t})});M.displayName="CarouselItem";let F=o.forwardRef(({className:e,variant:t="outline",size:n="icon",...o},a)=>{let{orientation:u,scrollPrev:s,canScrollPrev:l}=S();return(0,r.jsxs)(D.z,{ref:a,variant:t,size:n,className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("absolute  h-8 w-8 rounded-full","horizontal"===u?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!l,onClick:s,...o,children:[r.jsx(i.Y4O,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Previous slide"})]})});F.displayName="CarouselPrevious";let U=o.forwardRef(({className:e,variant:t="outline",size:n="icon",...o},a)=>{let{orientation:u,scrollNext:s,canScrollNext:l}=S();return(0,r.jsxs)(D.z,{ref:a,variant:t,size:n,className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("absolute h-8 w-8 rounded-full","horizontal"===u?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",e),disabled:!l,onClick:s,...o,children:[r.jsx(i.LZ3,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Next slide"})]})});U.displayName="CarouselNext"},71679:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o,metadata:()=>r});let r={title:"Exploration"};function o({children:e}){return e}},96469:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var r=n(19510),o=n(71159);!function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}();let i=o.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("rounded-xl border bg-card text-card-foreground shadow",e),...t}));i.displayName="Card",o.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("flex flex-col space-y-1.5 p-6",e),...t})).displayName="CardHeader",o.forwardRef(({className:e,...t},n)=>r.jsx("h3",{ref:n,className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("font-semibold leading-none tracking-tight",e),...t})).displayName="CardTitle",o.forwardRef(({className:e,...t},n)=>r.jsx("p",{ref:n,className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("text-sm text-muted-foreground",e),...t})).displayName="CardDescription";let a=o.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("p-6 pt-0",e),...t}));a.displayName="CardContent",o.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:Object(function(){var e=Error("Cannot find module '@/lib/utils'");throw e.code="MODULE_NOT_FOUND",e}())("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter";var u=n(68570);let s=(0,u.createProxy)(String.raw`/workspaces/flair/src/components/ui/carousel.tsx`),{__esModule:l,$$typeof:c}=s;s.default;let d=(0,u.createProxy)(String.raw`/workspaces/flair/src/components/ui/carousel.tsx#Carousel`),f=(0,u.createProxy)(String.raw`/workspaces/flair/src/components/ui/carousel.tsx#CarouselContent`),p=(0,u.createProxy)(String.raw`/workspaces/flair/src/components/ui/carousel.tsx#CarouselItem`),m=(0,u.createProxy)(String.raw`/workspaces/flair/src/components/ui/carousel.tsx#CarouselPrevious`),x=(0,u.createProxy)(String.raw`/workspaces/flair/src/components/ui/carousel.tsx#CarouselNext`);function g({params:{slug:e}}){return r.jsx("main",{children:(0,r.jsxs)(d,{className:"ml-52 w-full max-w-xs",children:[r.jsx(f,{children:Array.from({length:5}).map((e,t)=>r.jsx(p,{children:r.jsx("div",{className:"p-1",children:r.jsx(i,{children:r.jsx(a,{className:"flex aspect-square items-center justify-center p-6",children:r.jsx("span",{className:"text-4xl font-semibold",children:t+1})})})})},t))}),r.jsx(m,{}),r.jsx(x,{})]})})}},45823:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u,metadata:()=>a});var r=n(19510),o=n(71159),i=n(28592);let a={title:"Back up"};function u({children:e}){return(0,r.jsxs)(o.Fragment,{children:[r.jsx(i.h,{}),e,r.jsx(i.$,{})]})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[948,70,165,568,137],()=>n(83840));module.exports=r})();