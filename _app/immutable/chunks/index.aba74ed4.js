function $(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function C(){return Object.create(null)}function b(t){t.forEach(T)}function q(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function H(t){return Object.keys(t).length===0}function B(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t){let n;return B(t,e=>n=e)(),n}function at(t,n,e){t.$$.on_destroy.push(B(n,e))}function ft(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],l=Math.max(n.dirty.length,r.length);for(let s=0;s<l;s+=1)o[s]=n.dirty[s]|r[s];return o}return n.dirty|r}return n.dirty}function _t(t,n,e,i,r,o){if(r){const l=L(n,e,i,o);t.p(l,r)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function pt(t){const n={};for(const e in t)n[e]=!0;return n}const I=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in I;let w=!1;function G(){w=!0}function J(){w=!1}function K(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:K(1,r,g=>n[e[g]].claim_order,u))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const o=[],l=[];let s=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(o.push(n[c-1]);s>=c;s--)l.push(n[s]);s--}for(;s>=0;s--)l.push(n[s]);o.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<o.length&&l[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(l[c],f)}}function R(t,n){if(w){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function yt(t,n,e){w&&!e?R(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function bt(){return A(" ")}function gt(){return A("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function wt(t){let n;return{p(...e){n=e,n.forEach(i=>t.push(i))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){Y(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(n(s)){const c=e(s);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(n(s)){const c=e(s);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Z(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const o=[];for(let l=0;l<r.attributes.length;l++){const s=r.attributes[l];e[s.name]||o.push(s.name)}o.forEach(l=>r.removeAttribute(l))},()=>i(n))}function vt(t,n,e){return Z(t,n,e,V)}function tt(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function Et(t){return tt(t," ")}function kt(t,n){n=""+n,t.data!==n&&(t.data=n)}function Nt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function St(t,n){return new t(n)}let y;function p(t){y=t}function v(){if(!y)throw new Error("Function called outside component initialization");return y}function At(t){v().$$.on_mount.push(t)}function Mt(t){v().$$.after_update.push(t)}function jt(t,n){return v().$$.context.set(t,n),n}function Ct(t){return v().$$.context.get(t)}function Ot(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],O=[];let m=[];const k=[],W=Promise.resolve();let N=!1;function z(){N||(N=!0,W.then(D))}function Tt(){return z(),W}function S(t){m.push(t)}function qt(t){k.push(t)}const E=new Set;let _=0;function D(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const n=h[_];_++,p(n),nt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;O.length;)O.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];E.has(e)||(E.add(e),e())}m.length=0}while(h.length);for(;k.length;)k.pop()();N=!1,E.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),b(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}function et(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const x=new Set;let d;function Bt(){d={r:0,c:[],p:d}}function Lt(){d.r||b(d.c),d=d.p}function it(t,n){t&&t.i&&(x.delete(t),t.i(n))}function Pt(t,n,e,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}const rt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...rt];function Wt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function zt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function lt(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||S(()=>{const l=t.$$.on_mount.map(T).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...l):b(l),t.$$.on_mount=[]}),o.forEach(S)}function ct(t,n){const e=t.$$;e.fragment!==null&&(et(e.after_update),b(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,r,o,l,s=[-1]){const c=y;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:s,skip_bound:!1,root:n.target||c.$$.root};l&&l(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,g,...M)=>{const j=M.length?M[0]:g;return u.ctx&&r(u.ctx[a],u.ctx[a]=j)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](j),f&&ut(t,a)),g}):[],u.update(),f=!0,b(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){G();const a=X(n.target);u.fragment&&u.fragment.l(a),a.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&it(t.$$.fragment),lt(t,n.target,n.anchor,n.customElement),J(),D()}p(c)}class Ht{$destroy(){ct(this,1),this.$destroy=$}$on(n,e){if(!q(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{lt as A,ct as B,ft as C,_t as D,ht as E,dt as F,R as G,$ as H,at as I,Wt as J,qt as K,Ct as L,jt as M,ot as N,F as O,mt as P,xt as Q,b as R,Ht as S,pt as T,Ot as U,wt as V,bt as a,yt as b,Et as c,Pt as d,gt as e,Lt as f,it as g,U as h,Ft as i,Mt as j,V as k,vt as l,X as m,$t as n,At as o,Nt as p,A as q,tt as r,st as s,Tt as t,kt as u,Bt as v,O as w,St as x,zt as y,Dt as z};
