import{S as F,i as M,s as N,k as E,q as h,l as Y,m as B,r as g,h as c,n as O,b as k,G as $,H as A,a as I,y as L,c as q,z as D,A as P,u as Q,g as d,d as x,f as R,B as S,w as C,J as G,K as J,v as T}from"../chunks/index.aba74ed4.js";import{L as U,a as K}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.d509cd03.js";function X(o){let e,a,s;return{c(){e=E("div"),a=E("h2"),s=h("You have a Heartache!"),this.h()},l(r){e=Y(r,"DIV",{class:!0});var u=B(e);a=Y(u,"H2",{});var p=B(a);s=g(p,"You have a Heartache!"),p.forEach(c),u.forEach(c),this.h()},h(){O(e,"class","p-4 prose card m-4")},m(r,u){k(r,e,u),$(e,a),$(a,s)},p:A,i:A,o:A,d(r){r&&c(e)}}}class Z extends F{constructor(e){super(),M(this,e,null,X,N,{})}}function y(o){let e;return{c(){e=h("headache")},l(a){e=g(a,"headache")},m(a,s){k(a,e,s)},d(a){a&&c(e)}}}function ee(o){let e;return{c(){e=h("tummyache")},l(a){e=g(a,"tummyache")},m(a,s){k(a,e,s)},d(a){a&&c(e)}}}function te(o){let e;return{c(){e=h("heartache")},l(a){e=g(a,"heartache")},m(a,s){k(a,e,s)},d(a){a&&c(e)}}}function ae(o){let e,a,s,r,u,p,n,b,_;function H(t){o[1](t)}let w={name:"problem",value:"headache",$$slots:{default:[y]},$$scope:{ctx:o}};o[0]!==void 0&&(w.group=o[0]),e=new K({props:w}),C.push(()=>G(e,"group",H));function v(t){o[2](t)}let i={name:"problem",value:"tummyache",$$slots:{default:[ee]},$$scope:{ctx:o}};o[0]!==void 0&&(i.group=o[0]),r=new K({props:i}),C.push(()=>G(r,"group",v));function m(t){o[3](t)}let f={name:"problem",value:"heartache",$$slots:{default:[te]},$$scope:{ctx:o}};return o[0]!==void 0&&(f.group=o[0]),n=new K({props:f}),C.push(()=>G(n,"group",m)),{c(){L(e.$$.fragment),s=I(),L(r.$$.fragment),p=I(),L(n.$$.fragment)},l(t){D(e.$$.fragment,t),s=q(t),D(r.$$.fragment,t),p=q(t),D(n.$$.fragment,t)},m(t,l){P(e,t,l),k(t,s,l),P(r,t,l),k(t,p,l),P(n,t,l),_=!0},p(t,l){const V={};l&16&&(V.$$scope={dirty:l,ctx:t}),!a&&l&1&&(a=!0,V.group=t[0],J(()=>a=!1)),e.$set(V);const W={};l&16&&(W.$$scope={dirty:l,ctx:t}),!u&&l&1&&(u=!0,W.group=t[0],J(()=>u=!1)),r.$set(W);const z={};l&16&&(z.$$scope={dirty:l,ctx:t}),!b&&l&1&&(b=!0,z.group=t[0],J(()=>b=!1)),n.$set(z)},i(t){_||(d(e.$$.fragment,t),d(r.$$.fragment,t),d(n.$$.fragment,t),_=!0)},o(t){x(e.$$.fragment,t),x(r.$$.fragment,t),x(n.$$.fragment,t),_=!1},d(t){S(e,t),t&&c(s),S(r,t),t&&c(p),S(n,t)}}}function j(o){let e,a;return e=new Z({}),{c(){L(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,r){P(e,s,r),a=!0},i(s){a||(d(e.$$.fragment,s),a=!0)},o(s){x(e.$$.fragment,s),a=!1},d(s){S(e,s)}}}function se(o){let e,a,s,r,u,p,n,b,_,H,w,v;u=new U({props:{$$slots:{default:[ae]},$$scope:{ctx:o}}});let i=o[0]=="heartache"&&j();return{c(){e=E("div"),a=E("h1"),s=h("What is your problem?"),r=I(),L(u.$$.fragment),p=I(),n=E("p"),b=h("Your problem is "),_=h(o[0]),H=h("!"),w=I(),i&&i.c(),this.h()},l(m){e=Y(m,"DIV",{class:!0});var f=B(e);a=Y(f,"H1",{});var t=B(a);s=g(t,"What is your problem?"),t.forEach(c),r=q(f),D(u.$$.fragment,f),p=q(f),n=Y(f,"P",{});var l=B(n);b=g(l,"Your problem is "),_=g(l,o[0]),H=g(l,"!"),l.forEach(c),w=q(f),i&&i.l(f),f.forEach(c),this.h()},h(){O(e,"class","p-4 prose card m-4")},m(m,f){k(m,e,f),$(e,a),$(a,s),$(e,r),P(u,e,null),$(e,p),$(e,n),$(n,b),$(n,_),$(n,H),$(e,w),i&&i.m(e,null),v=!0},p(m,[f]){const t={};f&17&&(t.$$scope={dirty:f,ctx:m}),u.$set(t),(!v||f&1)&&Q(_,m[0]),m[0]=="heartache"?i?f&1&&d(i,1):(i=j(),i.c(),d(i,1),i.m(e,null)):i&&(T(),x(i,1,1,()=>{i=null}),R())},i(m){v||(d(u.$$.fragment,m),d(i),v=!0)},o(m){x(u.$$.fragment,m),x(i),v=!1},d(m){m&&c(e),S(u),i&&i.d()}}}function oe(o,e,a){let s="";function r(n){s=n,a(0,s)}function u(n){s=n,a(0,s)}function p(n){s=n,a(0,s)}return o.$$.update=()=>{o.$$.dirty&1&&console.log(s)},[s,r,u,p]}class ie extends F{constructor(e){super(),M(this,e,oe,se,N,{})}}export{ie as component};
