!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[FreemiumBannerDesktop]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[FreemiumBannerDesktop]"]=t(require("react")):e["rb_wixui.thunderbolt[FreemiumBannerDesktop]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(e){function t(t){for(var n,i,l=t[0],s=t[1],c=t[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={352:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://static.parastorage.com/services/editor-elements/dist/";var l=("undefined"!=typeof self?self:this).webpackJsonp__wix_editor_elements_library=("undefined"!=typeof self?self:this).webpackJsonp__wix_editor_elements_library||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;return o.push([4076,0]),r()}({0:function(t,r){t.exports=e},2402:function(e,t,r){"use strict";var n=r(3),a=r.n(n),o=r(0),i=r(989),l=r(16),s=r(782),c={NAMESPACE:"Wix_Ads",MAIN_TEXT_KEY:"Wix_Ads_2_top_banner",MAIN_TEXT_DEFAULT:"This site was designed with the {Wix} website builder. Create your website today.",BUTTON_TEXT_KEY:"Wix_Ads_2_top_banner_CTA",BUTTON_TEXT_DEFAULT:"Start Now",wixLogoPlaceHolder:"{Wix}"},u=r(434),p=r.n(u);const d="ltr";t.a=e=>{const{id:t="WIX_ADS",translate:r,useOverlay:n=!1,direction:u,href:f="",classNames:m=[d],translations:b=c}=e,y=a()(...m.map(e=>p.a[e]),p.a.desktopTop),_=r(b.NAMESPACE,b.MAIN_TEXT_KEY,b.MAIN_TEXT_DEFAULT)||"",v=_.indexOf(b.wixLogoPlaceHolder)>=0;let h=_,x="";if(v){const e=_.split(b.wixLogoPlaceHolder);h=e[0],x=e[1]}const g=r(b.NAMESPACE,b.BUTTON_TEXT_KEY,b.BUTTON_TEXT_DEFAULT);return o.createElement("div",{id:t,className:`${p.a.desktop} ${p.a.freemiumBanner}`},n?o.createElement("div",{"data-testid":s.a.overlay,className:y}):o.createElement(l.a,{className:y,href:f,target:"_blank",rel:"nofollow"},o.createElement("span",{className:p.a.contents},o.createElement("span",{className:p.a.text},h,v&&o.createElement("div",{"data-testid":s.a.logo,style:{direction:"ltr",display:"inline-flex"}},o.createElement("div",null,o.createElement(i.b,{rootClass:p.a.wixLogo,dotClass:p.a.dot})),o.createElement("div",{className:p.a.com},".com")),x),o.createElement("span",{className:`${p.a.button} ${p.a[u]}`},g))))}},3:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},4076:function(e,t,r){"use strict";r.r(t),r.d(t,"components",(function(){return n})),r.d(t,"version",(function(){return a}));const n={FreemiumBannerDesktop:{component:r(2402).a}},a="1.0.0"},434:function(e,t,r){e.exports={"freemium-banner":"KxUm9",freemiumBanner:"KxUm9",hidden:"_1CbU3",visible:"_1Oe2B",rtl:"_3jDdZ",ltr:"_4Ue8X",desktop:"_3CXj5","desktop-top":"BNB_2",desktopTop:"BNB_2",overlay:"_1186i",contents:"_1oNmL",text:"_3lBpL","wix-logo":"_2GtTS",wixLogo:"_2GtTS",dot:"zAzVm",com:"_22hH6",button:"_3ITII"}},7:function(e,t,r){"use strict";r.d(t,"g",(function(){return a})),r.d(t,"h",(function(){return o})),r.d(t,"d",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"e",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return p})),r.d(t,"f",(function(){return d}));var n=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};const a={enter:13,space:32,end:35,home:36,escape:27,arrowLeft:37,arrowUp:38,arrowRight:39,arrowDown:40,tab:9,delete:46,a:65,z:90,pageUp:33,pageDown:34},o={space:["Spacebar"," "],enter:["Enter"]};function i(e){return t=>{t.keyCode===e&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.click())}}const l=i(a.space),s=i(a.enter),c=e=>{s(e),l(e)},u=i(a.escape),p="has-custom-focus",d=(e={})=>{var t,{pressed:r,expanded:a,haspopup:o,label:i,live:l,relevant:s,current:c,owns:u,controls:p,roleDescription:d,hidden:f,disabled:m,describedBy:b,labelledBy:y,errorMessage:_,atomic:v,role:h,busy:x}=e,g=n(e,["pressed","expanded","haspopup","label","live","relevant","current","owns","controls","roleDescription","hidden","disabled","describedBy","labelledBy","errorMessage","atomic","role","busy"]);const E=null!==(t=g.tabIndex)&&void 0!==t?t:g.tabindex,w={};return i&&(w["aria-label"]=i),l&&(w["aria-live"]=l),c&&(w["aria-current"]=c),"boolean"==typeof r&&(w["aria-pressed"]=r),"boolean"==typeof f&&(w["aria-hidden"]=f),"boolean"==typeof a&&(w["aria-expanded"]=a),"boolean"==typeof m&&(w["aria-disabled"]=m),"boolean"==typeof v&&(w["aria-atomic"]=v),"boolean"==typeof x&&(w["aria-busy"]=x),"string"==typeof s&&(w["aria-relevant"]=s),"string"==typeof u&&(w["aria-owns"]=u),"string"==typeof p&&(w["aria-controls"]=p),"string"==typeof d&&(w["aria-roledescription"]=d),o&&(w["aria-haspopup"]=o),"number"==typeof E&&(w.tabIndex=E),h&&(w.role=h),b&&(w["aria-describedby"]=b),y&&(w["aria-labelledby"]=y),_&&(w["aria-errormessage"]=_),w}},782:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const n={overlay:"bannerOverlay",logo:"bannerLogo"}},989:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));var n=r(0);const a=({className:e})=>n.createElement("svg",{className:e,viewBox:"0 0 177.32 142.49"},n.createElement("defs",null,n.createElement("style",null,".cls-1{fill:none;stroke:#9d288c;stroke-miterlimit:10;stroke-width:13px}")),n.createElement("title",null,"Artboard 1"),n.createElement("path",{className:"cls-1",d:"M28.66 65.5V104s0 14.5 13 14.5h94.5s12.5-.5 12.5-13.5V65.5"}),n.createElement("path",{className:"cls-1",d:"M90.11 89.76v-75m-23 50.5l22 24.5 24-24"})),o=({rootClass:e,dotClass:t})=>n.createElement("svg",{className:e,viewBox:"0 0 28 10.89","aria-label":"wix"},n.createElement("path",{d:"M16.02.2c-.55.3-.76.78-.76 2.14a2.17 2.17 0 0 1 .7-.42 3 3 0 0 0 .7-.4A1.62 1.62 0 0 0 17.22 0a3 3 0 0 0-1.18.2z",className:t}),n.createElement("path",{d:"M12.77.52a2.12 2.12 0 0 0-.58 1l-1.5 5.8-1.3-4.75a4.06 4.06 0 0 0-.7-1.55 2.08 2.08 0 0 0-2.9 0 4.06 4.06 0 0 0-.7 1.55L3.9 7.32l-1.5-5.8a2.12 2.12 0 0 0-.6-1A2.6 2.6 0 0 0 0 .02l2.9 10.83a3.53 3.53 0 0 0 1.42-.17c.62-.33.92-.57 1.3-2 .33-1.33 1.26-5.2 1.35-5.47a.5.5 0 0 1 .34-.4.5.5 0 0 1 .4.5c.1.3 1 4.2 1.4 5.5.4 1.5.7 1.7 1.3 2a3.53 3.53 0 0 0 1.4.2l2.8-11a2.6 2.6 0 0 0-1.82.53zm4.43 1.26a1.76 1.76 0 0 1-.58.5c-.26.16-.52.26-.8.4a.82.82 0 0 0-.57.82v7.36a2.47 2.47 0 0 0 1.2-.15c.6-.3.75-.6.75-2V1.8zm7.16 3.68L28 .06a3.22 3.22 0 0 0-2.3.42 8.67 8.67 0 0 0-1 1.24l-1.34 1.93a.3.3 0 0 1-.57 0l-1.4-1.93a8.67 8.67 0 0 0-1-1.24 3.22 3.22 0 0 0-2.3-.43l3.6 5.4-3.7 5.4a3.54 3.54 0 0 0 2.32-.48 7.22 7.22 0 0 0 1-1.16l1.33-1.9a.3.3 0 0 1 .57 0l1.37 2a8.2 8.2 0 0 0 1 1.2 3.47 3.47 0 0 0 2.33.5z"}))}})}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements/dist/rb_wixui.thunderbolt[FreemiumBannerDesktop].62df9df8.bundle.min.js.map