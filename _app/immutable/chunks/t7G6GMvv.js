var Mn=Array.isArray,tn=Array.prototype.indexOf,Yn=Array.from,jn=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,Hn=Object.prototype,Bn=Array.prototype,rn=Object.getPrototypeOf;const Un=()=>{};function Vn(t){return t()}function gt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,At=4,tt=8,it=16,R=32,B=64,$=128,T=256,Z=512,p=1024,x=2048,P=4096,b=8192,F=16384,en=32768,kt=65536,Gn=1<<17,ln=1<<19,Rt=1<<20,Et=Symbol("$state"),Kn=Symbol("legacy props"),$n=Symbol("");function xt(t){return t===this.v}function sn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Dt(t){return!sn(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function Jn(){nt=!0}const Qn=1,tr=2,nr=16,rr=1,er=2,lr=4,sr=8,ar=16,ur=1,or=2,vn="[",pn="[!",hn="]",It={},fr=Symbol();function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function yt(t){i=t}function ir(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(i.l={s:null,u:null,r1:[],r2:_t(!1)})}function _r(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];J(s.effect),X(s.reaction),Lt(s.fn)}}finally{J(r),X(e)}}i=n.p,n.m=!0}return{}}function rt(){return!nt||i!==null&&i.l===null}function _t(t,n){var r={f:0,v:t,reactions:null,equals:xt,rv:0,wv:0};return r}function cr(t){return dn(_t(t))}function vr(t,n=!1){var e;const r=_t(t);return n||(r.equals=Dt),nt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function dn(t){return u!==null&&!A&&u.f&y&&(w===null?Sn([t]):w.push(t)),t}function pr(t,n){return u!==null&&!A&&rt()&&u.f&(y|it)&&(w===null||!w.includes(t))&&cn(),En(t,n)}function En(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=$t(),Ot(t,x),rt()&&f!==null&&f.f&p&&!(f.f&(R|B))&&(g===null?On([t]):g.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),l=r.length,s=0;s<l;s++){var a=r[s],_=a.f;_&x||!e&&a===f||(m(a,n),_&(p|T)&&(_&y?Ot(a,P):lt(a)))}}let q=!1;function hr(t){q=t}let k;function M(t){if(t===null)throw St(),It;return k=t}function dr(){return M(L(k))}function Er(t){if(q){if(L(k)!==null)throw St(),It;k=t}}function yr(){for(var t=0,n=k;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=L(n);n.remove(),n=e}}var wt,Ct,Nt;function wr(){if(wt===void 0){wt=window;var t=Element.prototype,n=Node.prototype;Ct=dt(n,"firstChild").get,Nt=dt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function at(t){return Ct.call(t)}function L(t){return Nt.call(t)}function Tr(t,n){if(!q)return at(t);var r=at(k);if(r===null)r=k.appendChild(st());else if(n&&r.nodeType!==3){var e=st();return r==null||r.before(e),M(e),e}return M(r),r}function mr(t,n){if(!q){var r=at(t);return r instanceof Comment&&r.data===""?L(r):r}return k}function gr(t,n=1,r=!1){let e=q?k:t;for(var l;n--;)l=e,e=L(e);if(!q)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=st();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function Ar(t){t.textContent=""}function bt(t){var n=y|x,r=u!==null&&u.f&y?u:null;return f===null||r!==null&&r.f&T?n|=T:f.f|=Rt,{ctx:i,deps:null,effects:null,equals:xt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function kr(t){const n=bt(t);return n.equals=Dt,n}function ct(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)S(n[r])}}function yn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function qt(t){var n,r=f;J(yn(t));try{ct(t),n=zt(t)}finally{J(r)}return n}function Pt(t){var n=qt(t),r=(I||t.f&T)&&t.deps!==null?P:p;m(t,r),t.equals(n)||(t.v=n,t.wv=$t())}function wn(t){ct(t),H(t,0),m(t,F),t.v=t.deps=t.ctx=t.reactions=null}function Ft(t){f===null&&u===null&&on(),u!==null&&u.f&T&&f===null&&un(),vt&&an()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function U(t,n,r,e=!0){var l=(t&B)!==0,s=f,a={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=C;try{Tt(!0),pt(a),a.f|=en}catch(O){throw S(a),O}finally{Tt(_)}}else n!==null&&lt(a);var E=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Rt|$))===0;if(!E&&!l&&e&&(s!==null&&Tn(a,s),u!==null&&u.f&y)){var c=u;(c.effects??(c.effects=[])).push(a)}return a}function Rr(t){Ft();var n=f!==null&&(f.f&R)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Lt(t);return e}}function xr(t){return Ft(),mn(t)}function Dr(t){const n=U(B,t,!0);return(r={})=>new Promise(e=>{r.outro?kn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Lt(t){return U(At,t,!1)}function mn(t){return U(tt,t,!0)}function Ir(t,n=[],r=bt){const e=n.map(r);return gn(()=>t(...e.map(Fn)))}function gn(t,n=0){return U(tt|it|n,t,!0)}function Sr(t,n=!0){return U(tt|R,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=vt,e=u;mt(!0),X(null);try{n.call(null)}finally{mt(r),X(e)}}}function Yt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;n.f&R||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:L(e);e.remove(),e=s}r=!0}Yt(t,n&&!r),H(t,0),m(t,F);var a=t.transitions;if(a!==null)for(const E of a)E.stop();Mt(t);var _=t.parent;_!==null&&_.first!==null&&jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function jt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function kn(t,n){var r=[];Ht(t,r,!0),Rn(r,()=>{S(t),n&&n()})}function Rn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ht(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&kt)!==0||(e.f&R)!==0;Ht(e,n,s?r:!1),e=l}}}function Or(t){Bt(t,!0)}function Bt(t,n){if(t.f&b){t.f^=b,t.f&p||(t.f^=p),V(t)&&(m(t,x),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&kt)!==0||(r.f&R)!==0;Bt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const xn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let z=!1,W=!1,ut=[],ot=[];function Ut(){z=!1;const t=ut.slice();ut=[],gt(t)}function Vt(){W=!1;const t=ot.slice();ot=[],gt(t)}function Cr(t){z||(z=!0,queueMicrotask(Ut)),ut.push(t)}function Nr(t){W||(W=!0,xn(Vt)),ot.push(t)}function Dn(){z&&Ut(),W&&Vt()}const Gt=0,In=1;let G=!1,K=Gt,Y=!1,j=null,C=!1,vt=!1;function Tt(t){C=t}function mt(t){vt=t}let D=[],N=0;let u=null,A=!1;function X(t){u=t}let f=null;function J(t){f=t}let w=null;function Sn(t){w=t}let v=null,d=0,g=null;function On(t){g=t}let Kt=1,Q=0,I=!1;function $t(){return++Kt}function V(t){var c;var n=t.f;if(n&x)return!0;if(n&P){var r=t.deps,e=(n&T)!==0;if(r!==null){var l,s,a=(n&Z)!==0,_=e&&f!==null&&!I,E=r.length;if(a||_){for(l=0;l<E;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=Z)}for(l=0;l<E;l++)if(s=r[l],V(s)&&Pt(s),s.wv>t.wv)return!0}(!e||f!==null&&!I)&&m(t,p)}return!1}function Cn(t,n){for(var r=n;r!==null;){if(r.f&$)try{r.fn(t);return}catch{r.f^=$}r=r.parent}throw G=!1,t}function Nn(t){return(t.f&F)===0&&(t.parent===null||(t.parent.f&$)===0)}function et(t,n,r,e){if(G){if(r===null&&(G=!1),Nn(n))throw t;return}r!==null&&(G=!0);{Cn(t,n);return}}function Zt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?Zt(s,n,r+1):n===s&&(r===0?m(s,x):s.f&p&&m(s,P),lt(s))}}function zt(t){var ht;var n=v,r=d,e=g,l=u,s=I,a=w,_=i,E=A,c=t.f;v=null,d=0,g=null,u=c&(R|B)?null:t,I=(c&T)!==0&&(!C||(l===null||E)&&t.parent!==null),w=null,yt(t.ctx),A=!1,Q++;try{var O=(0,t.fn)(),h=t.deps;if(v!==null){var o;if(H(t,d),h!==null&&d>0)for(h.length=d+v.length,o=0;o<v.length;o++)h[d+o]=v[o];else t.deps=h=v;if(!I)for(o=d;o<h.length;o++)((ht=h[o]).reactions??(ht.reactions=[])).push(t)}else h!==null&&d<h.length&&(H(t,d),h.length=d);if(rt()&&g!==null&&!(t.f&(y|P|x)))for(o=0;o<g.length;o++)Zt(g[o],t);return l!==null&&Q++,O}finally{v=n,d=r,g=e,u=l,I=s,w=a,yt(_),A=E}}function bn(t,n){let r=n.reactions;if(r!==null){var e=tn.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(m(n,P),n.f&(T|Z)||(n.f^=Z),ct(n),H(n,0))}function H(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)bn(t,r[e])}function pt(t){var n=t.f;if(!(n&F)){m(t,p);var r=f,e=i;f=t;try{n&it?An(t):Yt(t),Mt(t);var l=zt(t);t.teardown=typeof l=="function"?l:null,t.wv=Kt;var s=t.deps,a}catch(_){et(_,t,r,e||t.ctx)}finally{f=r}}}function Wt(){if(N>1e3){N=0;try{fn()}catch(t){if(j!==null)et(t,j,null);else throw t}}N++}function Xt(t){var n=t.length;if(n!==0){Wt();var r=C;C=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var s=[];Jt(l,s),qn(s)}}finally{C=r}}}function qn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(F|b)))try{V(e)&&(pt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?jt(e):e.fn=null))}catch(l){et(l,e,null,e.ctx)}}}function Pn(){if(Y=!1,N>1001)return;const t=D;D=[],Xt(t),Y||(N=0,j=null)}function lt(t){K===Gt&&(Y||(Y=!0,queueMicrotask(Pn))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(B|R)){if(!(r&p))return;n.f^=p}}D.push(n)}function Jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&R)!==0,a=s&&(l&p)!==0,_=r.next;if(!a&&!(l&b))if(l&tt){if(s)r.f^=p;else{var E=u;try{u=r,V(r)&&pt(r)}catch(o){et(o,r,null,r.ctx)}finally{u=E}}var c=r.first;if(c!==null){r=c;continue}}else l&At&&e.push(r);if(_===null){let o=r.parent;for(;o!==null;){if(t===o)break t;var O=o.next;if(O!==null){r=O;continue t}o=o.parent}}r=_}for(var h=0;h<e.length;h++)c=e[h],n.push(c),Jt(c,n)}function Qt(t){var n=K,r=D;try{Wt();const l=[];K=In,D=l,Y=!1,Xt(r);var e=t==null?void 0:t();return Dn(),(D.length>0||l.length>0)&&Qt(),N=0,j=null,e}finally{K=n,D=r}}async function br(){await Promise.resolve(),Qt()}function Fn(t){var n=t.f,r=(n&y)!==0;if(r&&n&F){var e=qt(t);return wn(t),e}if(u!==null&&!A){w!==null&&w.includes(t)&&_n();var l=u.deps;t.rv<Q&&(t.rv=Q,v===null&&l!==null&&l[d]===t?d++:v===null?v=[t]:v.push(t))}else if(r&&t.deps===null&&t.effects===null){var s=t,a=s.parent;a!==null&&!(a.f&T)&&(s.f^=T)}return r&&(s=t,V(s)&&Pt(s)),t.v}function qr(t){var n=A;try{return A=!0,t()}finally{A=n}}const Ln=-7169;function m(t,n){t.f=t.f&Ln|n}function Pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Et in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&Et in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Jn as $,k as A,hn as B,St as C,Zn as D,Ar as E,Yn as F,Dr as G,vn as H,st as I,Sr as J,ir as K,q as L,_r as M,gn as N,kt as O,Un as P,S as Q,mr as R,Et as S,ur as T,fr as U,or as V,xr as W,Vn as X,gt as Y,Pr as Z,bt as _,Bn as a,Ir as a0,Tr as a1,Er as a2,gr as a3,pn as a4,yr as a5,Or as a6,kn as a7,b as a8,En as a9,br as aA,sn as aB,Ht as aa,Rn as ab,kr as ac,vr as ad,tr as ae,Qn as af,nr as ag,Nr as ah,$n as ai,rt as aj,mn as ak,Lt as al,cr as am,Cr as an,zn as ao,Gn as ap,lr as aq,Dt as ar,R as as,B as at,rr as au,er as av,sr as aw,Kn as ax,ar as ay,Qt as az,Wn as b,pr as c,Fn as d,f as e,Xn as f,dt as g,rn as h,Mn as i,i as j,qr as k,nt as l,jn as m,X as n,Hn as o,J as p,u as q,wr as r,_t as s,at as t,Rr as u,L as v,It as w,hr as x,M as y,dr as z};
