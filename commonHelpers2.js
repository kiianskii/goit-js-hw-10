import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as m}from"./assets/vendor-77e16229.js";const r=document.querySelector(".js-form"),a=r.querySelector(".js-delay"),c=r.querySelector(".js-fulfill");r.addEventListener("submit",l);function l(t){t.preventDefault();const e=a.value,o=c.checked;u(e,o).then(s=>{n(s,!0)}).catch(s=>{n(s,!1)}),t.target.reset()}function u(t,e){const o=f(t,e);return new Promise((i,s)=>{setTimeout(()=>{e?i(o):s(o)},t)})}function f(t,e){let o=e?"✅ Fulfilled":"❌ Rejected";return o+=` promise in ${+t}ms`,o}function n(t,e){m.show(g(t,e))}function g(t,e){return{title:e?"OK":"Error",titleSize:"16px",titleLineHeight:"24px",message:t.slice(2),messageSize:"16px",messageLineHeight:"24px",messageColor:"#fff",backgroundColor:e?"#59a10d":"#EF4040",progressBarColor:e?"#326101":"#B51B1B",theme:"dark",position:"topRight",class:"message"}}
//# sourceMappingURL=commonHelpers2.js.map