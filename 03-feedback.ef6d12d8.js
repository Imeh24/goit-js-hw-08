!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o),(0,o.register)("dCfNN",function(t,r){var o="Expected a function",i=0/0,n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),m=Object.prototype.toString,p=Math.max,g=Math.min,v=function(){return d.Date.now()};function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==m.call(t))return i;if(b(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=b(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var o=l.test(e);return o||f.test(e)?u(e.slice(2),o?2:8):a.test(e)?i:+e}t.exports=function(e,t,r){var i=!0,n=!0;if("function"!=typeof e)throw TypeError(o);return b(r)&&(i="leading"in r?!!r.leading:i,n="trailing"in r?!!r.trailing:n),function(e,t,r){var i,n,a,l,f,u,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError(o);function h(t){var r=i,o=n;return i=n=void 0,s=t,l=e.apply(o,r)}function O(e){var r=e-u,o=e-s;return void 0===u||r>=t||r<0||d&&o>=a}function x(){var e,r,o,i=v();if(O(i))return j(i);f=setTimeout(x,(e=i-u,r=i-s,o=t-e,d?g(o,a-r):o))}function j(e){return(f=void 0,m&&i)?h(e):(i=n=void 0,l)}function T(){var e,r=v(),o=O(r);if(i=arguments,n=this,u=r,o){if(void 0===f)return s=e=u,f=setTimeout(x,t),c?h(e):l;if(d)return f=setTimeout(x,t),h(u)}return void 0===f&&(f=setTimeout(x,t)),l}return t=y(t)||0,b(r)&&(c=!!r.leading,a=(d="maxWait"in r)?p(y(r.maxWait)||0,t):a,m="trailing"in r?!!r.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=u=n=f=void 0},T.flush=function(){return void 0===f?l:j(v())},T}(e,t,{leading:i,maxWait:t,trailing:n})}});var i=o("dCfNN");let n=document.querySelector(".feedback-form"),a="feedback-form-state",l=(i&&i.__esModule?i.default:i)(()=>{let e={email:n.email.value,message:n.message.value};localStorage.setItem(a,JSON.stringify(e))},500);n.addEventListener("input",()=>{l()});let f=localStorage.getItem(a),{email:u="",message:s=""}=f?JSON.parse(f):{};n.message.value=s,n.message.placeholder="Write your feedback",n.email.value=u,n.email.placeholder="Valid email address",n.addEventListener("submit",e=>{if(e.preventDefault(),f)try{let{email:e,message:t}=JSON.parse(f);console.log("Feedback submitted:"),console.log("Email:",e),console.log("Message:",t),console.log({email:e,message:t})}catch(e){console.error("Error parsing stored data:",e)}localStorage.removeItem(a),n.reset()})}();
//# sourceMappingURL=03-feedback.ef6d12d8.js.map
