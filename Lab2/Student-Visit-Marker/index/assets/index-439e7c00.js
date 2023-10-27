(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Ry="modulepreload",by=function(t){return"/"+t},ph={},Bt=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=by(i),i in ph)return;ph[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Ry,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};function Pl(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const we={},Br=[],Ot=()=>{},Py=()=>!1,Sy=/^on[^a-z]/,Zo=t=>Sy.test(t),Sl=t=>t.startsWith("onUpdate:"),$e=Object.assign,Cl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Cy=Object.prototype.hasOwnProperty,ce=(t,e)=>Cy.call(t,e),K=Array.isArray,$r=t=>vi(t)==="[object Map]",ea=t=>vi(t)==="[object Set]",mh=t=>vi(t)==="[object Date]",Z=t=>typeof t=="function",Ve=t=>typeof t=="string",Ks=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Bf=t=>Ee(t)&&Z(t.then)&&Z(t.catch),$f=Object.prototype.toString,vi=t=>$f.call(t),ky=t=>vi(t).slice(8,-1),jf=t=>vi(t)==="[object Object]",kl=t=>Ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oo=Pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ta=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Oy=/-(\w)/g,Zt=ta(t=>t.replace(Oy,(e,n)=>n?n.toUpperCase():"")),Ny=/\B([A-Z])/g,ls=ta(t=>t.replace(Ny,"-$1").toLowerCase()),na=ta(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ga=ta(t=>t?`on${na(t)}`:""),Ws=(t,e)=>!Object.is(t,e),ao=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Rc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gh;const bc=()=>gh||(gh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ra(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ve(r)?My(r):ra(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ve(t))return t;if(Ee(t))return t}}const Dy=/;(?![^(]*\))/g,xy=/:([^]+)/,Vy=/\/\*[^]*?\*\//g;function My(t){const e={};return t.replace(Vy,"").split(Dy).forEach(n=>{if(n){const r=n.split(xy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Nt(t){let e="";if(Ve(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const r=Nt(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ly="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uy=Pl(Ly);function qf(t){return!!t||t===""}function Fy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=sa(t[r],e[r]);return n}function sa(t,e){if(t===e)return!0;let n=mh(t),r=mh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ks(t),r=Ks(e),n||r)return t===e;if(n=K(t),r=K(e),n||r)return n&&r?Fy(t,e):!1;if(n=Ee(t),r=Ee(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!sa(t[o],e[o]))return!1}}return String(t)===String(e)}function Hf(t,e){return t.findIndex(n=>sa(n,e))}const St=t=>Ve(t)?t:t==null?"":K(t)||Ee(t)&&(t.toString===$f||!Z(t.toString))?JSON.stringify(t,zf,2):String(t),zf=(t,e)=>e&&e.__v_isRef?zf(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ea(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!K(e)&&!jf(e)?String(e):e;let Rt;class By{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){Rt=this}off(){Rt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $y(t,e=Rt){e&&e.active&&e.effects.push(t)}function jy(){return Rt}const Ol=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Kf=t=>(t.w&jn)>0,Wf=t=>(t.n&jn)>0,qy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=jn},Hy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Kf(s)&&!Wf(s)?s.delete(t):e[n++]=s,s.w&=~jn,s.n&=~jn}e.length=n}},Pc=new WeakMap;let Ps=0,jn=1;const Sc=30;let bt;const ar=Symbol(""),Cc=Symbol("");class Nl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$y(this,r)}run(){if(!this.active)return this.fn();let e=bt,n=Ln;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=bt,bt=this,Ln=!0,jn=1<<++Ps,Ps<=Sc?qy(this):_h(this),this.fn()}finally{Ps<=Sc&&Hy(this),jn=1<<--Ps,bt=this.parent,Ln=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){bt===this?this.deferStop=!0:this.active&&(_h(this),this.onStop&&this.onStop(),this.active=!1)}}function _h(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ln=!0;const Gf=[];function us(){Gf.push(Ln),Ln=!1}function hs(){const t=Gf.pop();Ln=t===void 0?!0:t}function pt(t,e,n){if(Ln&&bt){let r=Pc.get(t);r||Pc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ol()),Qf(s)}}function Qf(t,e){let n=!1;Ps<=Sc?Wf(t)||(t.n|=jn,n=!Kf(t)):n=!t.has(bt),n&&(t.add(bt),bt.deps.push(t))}function pn(t,e,n,r,s,i){const o=Pc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?kl(n)&&a.push(o.get("length")):(a.push(o.get(ar)),$r(t)&&a.push(o.get(Cc)));break;case"delete":K(t)||(a.push(o.get(ar)),$r(t)&&a.push(o.get(Cc)));break;case"set":$r(t)&&a.push(o.get(ar));break}if(a.length===1)a[0]&&kc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);kc(Ol(c))}}function kc(t,e){const n=K(t)?t:[...t];for(const r of n)r.computed&&yh(r);for(const r of n)r.computed||yh(r)}function yh(t,e){(t!==bt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const zy=Pl("__proto__,__v_isRef,__isVue"),Jf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ks)),Ky=Dl(),Wy=Dl(!1,!0),Gy=Dl(!0),vh=Qy();function Qy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ee(this);for(let i=0,o=this.length;i<o;i++)pt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ee)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){us();const r=ee(this)[e].apply(this,n);return hs(),r}}),t}function Jy(t){const e=ee(this);return pt(e,"has",t),e.hasOwnProperty(t)}function Dl(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?dv:tp:e?ep:Zf).get(r))return r;const o=K(r);if(!t){if(o&&ce(vh,s))return Reflect.get(vh,s,i);if(s==="hasOwnProperty")return Jy}const a=Reflect.get(r,s,i);return(Ks(s)?Jf.has(s):zy(s))||(t||pt(r,"get",s),e)?a:nt(a)?o&&kl(s)?a:a.value:Ee(a)?t?rp(a):oa(a):a}}const Yy=Yf(),Xy=Yf(!0);function Yf(t=!1){return function(n,r,s,i){let o=n[r];if(Qr(o)&&nt(o)&&!nt(s))return!1;if(!t&&(!To(s)&&!Qr(s)&&(o=ee(o),s=ee(s)),!K(n)&&nt(o)&&!nt(s)))return o.value=s,!0;const a=K(n)&&kl(r)?Number(r)<n.length:ce(n,r),c=Reflect.set(n,r,s,i);return n===ee(i)&&(a?Ws(s,o)&&pn(n,"set",r,s):pn(n,"add",r,s)),c}}function Zy(t,e){const n=ce(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&pn(t,"delete",e,void 0),r}function ev(t,e){const n=Reflect.has(t,e);return(!Ks(e)||!Jf.has(e))&&pt(t,"has",e),n}function tv(t){return pt(t,"iterate",K(t)?"length":ar),Reflect.ownKeys(t)}const Xf={get:Ky,set:Yy,deleteProperty:Zy,has:ev,ownKeys:tv},nv={get:Gy,set(t,e){return!0},deleteProperty(t,e){return!0}},rv=$e({},Xf,{get:Wy,set:Xy}),xl=t=>t,ia=t=>Reflect.getPrototypeOf(t);function ji(t,e,n=!1,r=!1){t=t.__v_raw;const s=ee(t),i=ee(e);n||(e!==i&&pt(s,"get",e),pt(s,"get",i));const{has:o}=ia(s),a=r?xl:n?Ll:Gs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function qi(t,e=!1){const n=this.__v_raw,r=ee(n),s=ee(t);return e||(t!==s&&pt(r,"has",t),pt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Hi(t,e=!1){return t=t.__v_raw,!e&&pt(ee(t),"iterate",ar),Reflect.get(t,"size",t)}function Eh(t){t=ee(t);const e=ee(this);return ia(e).has.call(e,t)||(e.add(t),pn(e,"add",t,t)),this}function wh(t,e){e=ee(e);const n=ee(this),{has:r,get:s}=ia(n);let i=r.call(n,t);i||(t=ee(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ws(e,o)&&pn(n,"set",t,e):pn(n,"add",t,e),this}function Th(t){const e=ee(this),{has:n,get:r}=ia(e);let s=n.call(e,t);s||(t=ee(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pn(e,"delete",t,void 0),i}function Ih(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&pn(t,"clear",void 0,void 0),n}function zi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ee(o),c=e?xl:t?Ll:Gs;return!t&&pt(a,"iterate",ar),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ki(t,e,n){return function(...r){const s=this.__v_raw,i=ee(s),o=$r(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?xl:e?Ll:Gs;return!e&&pt(i,"iterate",c?Cc:ar),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Rn(t){return function(...e){return t==="delete"?!1:this}}function sv(){const t={get(i){return ji(this,i)},get size(){return Hi(this)},has:qi,add:Eh,set:wh,delete:Th,clear:Ih,forEach:zi(!1,!1)},e={get(i){return ji(this,i,!1,!0)},get size(){return Hi(this)},has:qi,add:Eh,set:wh,delete:Th,clear:Ih,forEach:zi(!1,!0)},n={get(i){return ji(this,i,!0)},get size(){return Hi(this,!0)},has(i){return qi.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:zi(!0,!1)},r={get(i){return ji(this,i,!0,!0)},get size(){return Hi(this,!0)},has(i){return qi.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:zi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ki(i,!1,!1),n[i]=Ki(i,!0,!1),e[i]=Ki(i,!1,!0),r[i]=Ki(i,!0,!0)}),[t,n,e,r]}const[iv,ov,av,cv]=sv();function Vl(t,e){const n=e?t?cv:av:t?ov:iv;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const lv={get:Vl(!1,!1)},uv={get:Vl(!1,!0)},hv={get:Vl(!0,!1)},Zf=new WeakMap,ep=new WeakMap,tp=new WeakMap,dv=new WeakMap;function fv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pv(t){return t.__v_skip||!Object.isExtensible(t)?0:fv(ky(t))}function oa(t){return Qr(t)?t:Ml(t,!1,Xf,lv,Zf)}function np(t){return Ml(t,!1,rv,uv,ep)}function rp(t){return Ml(t,!0,nv,hv,tp)}function Ml(t,e,n,r,s){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=pv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function jr(t){return Qr(t)?jr(t.__v_raw):!!(t&&t.__v_isReactive)}function Qr(t){return!!(t&&t.__v_isReadonly)}function To(t){return!!(t&&t.__v_isShallow)}function sp(t){return jr(t)||Qr(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function ip(t){return wo(t,"__v_skip",!0),t}const Gs=t=>Ee(t)?oa(t):t,Ll=t=>Ee(t)?rp(t):t;function op(t){Ln&&bt&&(t=ee(t),Qf(t.dep||(t.dep=Ol())))}function ap(t,e){t=ee(t);const n=t.dep;n&&kc(n)}function nt(t){return!!(t&&t.__v_isRef===!0)}function Ae(t){return cp(t,!1)}function mv(t){return cp(t,!0)}function cp(t,e){return nt(t)?t:new gv(t,e)}class gv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:Gs(e)}get value(){return op(this),this._value}set value(e){const n=this.__v_isShallow||To(e)||Qr(e);e=n?e:ee(e),Ws(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Gs(e),ap(this))}}function Ue(t){return nt(t)?t.value:t}const _v={get:(t,e,n)=>Ue(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return nt(s)&&!nt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function lp(t){return jr(t)?t:new Proxy(t,_v)}class yv{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Nl(e,()=>{this._dirty||(this._dirty=!0,ap(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ee(this);return op(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function vv(t,e,n=!1){let r,s;const i=Z(t);return i?(r=t,s=Ot):(r=t.get,s=t.set),new yv(r,s,i||!s,n)}function Un(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){aa(i,e,n)}return s}function Dt(t,e,n,r){if(Z(t)){const i=Un(t,e,n,r);return i&&Bf(i)&&i.catch(o=>{aa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Dt(t[i],e,n,r));return s}function aa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Un(c,null,10,[t,o,a]);return}}Ev(t,n,s,r)}function Ev(t,e,n,r=!0){console.error(t)}let Qs=!1,Oc=!1;const tt=[];let qt=0;const qr=[];let on=null,er=0;const up=Promise.resolve();let Ul=null;function hp(t){const e=Ul||up;return t?e.then(this?t.bind(this):t):e}function wv(t){let e=qt+1,n=tt.length;for(;e<n;){const r=e+n>>>1;Js(tt[r])<t?e=r+1:n=r}return e}function Fl(t){(!tt.length||!tt.includes(t,Qs&&t.allowRecurse?qt+1:qt))&&(t.id==null?tt.push(t):tt.splice(wv(t.id),0,t),dp())}function dp(){!Qs&&!Oc&&(Oc=!0,Ul=up.then(pp))}function Tv(t){const e=tt.indexOf(t);e>qt&&tt.splice(e,1)}function Iv(t){K(t)?qr.push(...t):(!on||!on.includes(t,t.allowRecurse?er+1:er))&&qr.push(t),dp()}function Ah(t,e=Qs?qt+1:0){for(;e<tt.length;e++){const n=tt[e];n&&n.pre&&(tt.splice(e,1),e--,n())}}function fp(t){if(qr.length){const e=[...new Set(qr)];if(qr.length=0,on){on.push(...e);return}for(on=e,on.sort((n,r)=>Js(n)-Js(r)),er=0;er<on.length;er++)on[er]();on=null,er=0}}const Js=t=>t.id==null?1/0:t.id,Av=(t,e)=>{const n=Js(t)-Js(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function pp(t){Oc=!1,Qs=!0,tt.sort(Av);const e=Ot;try{for(qt=0;qt<tt.length;qt++){const n=tt[qt];n&&n.active!==!1&&Un(n,null,14)}}finally{qt=0,tt.length=0,fp(),Qs=!1,Ul=null,(tt.length||qr.length)&&pp()}}function Rv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||we;d&&(s=n.map(m=>Ve(m)?m.trim():m)),h&&(s=n.map(Rc))}let a,c=r[a=Ga(e)]||r[a=Ga(Zt(e))];!c&&i&&(c=r[a=Ga(ls(e))]),c&&Dt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Dt(l,t,6,s)}}function mp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=mp(l,e,!0);u&&(a=!0,$e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ee(t)&&r.set(t,null),null):(K(i)?i.forEach(c=>o[c]=null):$e(o,i),Ee(t)&&r.set(t,o),o)}function ca(t,e){return!t||!Zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,ls(e))||ce(t,e))}let Tt=null,gp=null;function Io(t){const e=Tt;return Tt=t,gp=t&&t.type.__scopeId||null,e}function Sn(t,e=Tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Vh(-1);const i=Io(e);let o;try{o=t(...s)}finally{Io(i),r._d&&Vh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Qa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:m,ctx:E,inheritAttrs:w}=t;let v,S;const O=Io(t);try{if(n.shapeFlag&4){const k=s||r;v=jt(u.call(k,k,h,i,m,d,E)),S=c}else{const k=e;v=jt(k.length>1?k(i,{attrs:c,slots:a,emit:l}):k(i,null)),S=e.props?c:bv(c)}}catch(k){Ms.length=0,aa(k,t,1),v=he(dr)}let L=v;if(S&&w!==!1){const k=Object.keys(S),{shapeFlag:le}=L;k.length&&le&7&&(o&&k.some(Sl)&&(S=Pv(S,o)),L=Jr(L,S))}return n.dirs&&(L=Jr(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),v=L,Io(O),v}const bv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Zo(n))&&((e||(e={}))[n]=t[n]);return e},Pv=(t,e)=>{const n={};for(const r in t)(!Sl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Sv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Rh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!ca(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Rh(r,o,l):!0:!!o;return!1}function Rh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ca(n,i))return!0}return!1}function Cv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const kv=t=>t.__isSuspense;function Ov(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):Iv(t)}const Wi={};function co(t,e,n){return _p(t,e,n)}function _p(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=we){var a;const c=jy()===((a=We)==null?void 0:a.scope)?We:null;let l,u=!1,h=!1;if(nt(t)?(l=()=>t.value,u=To(t)):jr(t)?(l=()=>t,r=!0):K(t)?(h=!0,u=t.some(k=>jr(k)||To(k)),l=()=>t.map(k=>{if(nt(k))return k.value;if(jr(k))return rr(k);if(Z(k))return Un(k,c,2)})):Z(t)?e?l=()=>Un(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),Dt(t,c,3,[m])}:l=Ot,e&&r){const k=l;l=()=>rr(k())}let d,m=k=>{d=O.onStop=()=>{Un(k,c,4)}},E;if(Xs)if(m=Ot,e?n&&Dt(e,c,3,[l(),h?[]:void 0,m]):l(),s==="sync"){const k=RE();E=k.__watcherHandles||(k.__watcherHandles=[])}else return Ot;let w=h?new Array(t.length).fill(Wi):Wi;const v=()=>{if(O.active)if(e){const k=O.run();(r||u||(h?k.some((le,$)=>Ws(le,w[$])):Ws(k,w)))&&(d&&d(),Dt(e,c,3,[k,w===Wi?void 0:h&&w[0]===Wi?[]:w,m]),w=k)}else O.run()};v.allowRecurse=!!e;let S;s==="sync"?S=v:s==="post"?S=()=>ft(v,c&&c.suspense):(v.pre=!0,c&&(v.id=c.uid),S=()=>Fl(v));const O=new Nl(l,S);e?n?v():w=O.run():s==="post"?ft(O.run.bind(O),c&&c.suspense):O.run();const L=()=>{O.stop(),c&&c.scope&&Cl(c.scope.effects,O)};return E&&E.push(L),L}function Nv(t,e,n){const r=this.proxy,s=Ve(t)?t.includes(".")?yp(r,t):()=>r[t]:t.bind(r,r);let i;Z(e)?i=e:(i=e.handler,n=e);const o=We;Yr(this);const a=_p(s,i.bind(r),n);return o?Yr(o):cr(),a}function yp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function rr(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),nt(t))rr(t.value,e);else if(K(t))for(let n=0;n<t.length;n++)rr(t[n],e);else if(ea(t)||$r(t))t.forEach(n=>{rr(n,e)});else if(jf(t))for(const n in t)rr(t[n],e);return t}function Nc(t,e){const n=Tt;if(n===null)return t;const r=da(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=we]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&rr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Yn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(us(),Dt(c,n,8,[t.el,a,t,e]),hs())}}function vp(t,e){return Z(t)?(()=>$e({name:t.name},e,{setup:t}))():t}const lo=t=>!!t.type.__asyncLoader,Ep=t=>t.type.__isKeepAlive;function Dv(t,e){wp(t,"a",e)}function xv(t,e){wp(t,"da",e)}function wp(t,e,n=We){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(la(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ep(s.parent.vnode)&&Vv(r,e,n,s),s=s.parent}}function Vv(t,e,n,r){const s=la(e,t,r,!0);Tp(()=>{Cl(r[e],s)},n)}function la(t,e,n=We,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;us(),Yr(n);const a=Dt(e,n,t,o);return cr(),hs(),a});return r?s.unshift(i):s.push(i),i}}const vn=t=>(e,n=We)=>(!Xs||t==="sp")&&la(t,(...r)=>e(...r),n),Mv=vn("bm"),Lv=vn("m"),Uv=vn("bu"),Fv=vn("u"),Bv=vn("bum"),Tp=vn("um"),$v=vn("sp"),jv=vn("rtg"),qv=vn("rtc");function Hv(t,e=We){la("ec",t,e)}const Ip="components";function TN(t,e){return Kv(Ip,t,!0,e)||t}const zv=Symbol.for("v-ndc");function Kv(t,e,n=!0,r=!1){const s=Tt||We;if(s){const i=s.type;if(t===Ip){const a=TE(i,!1);if(a&&(a===e||a===Zt(e)||a===na(Zt(e))))return i}const o=bh(s[t]||i[t],e)||bh(s.appContext[t],e);return!o&&r?i:o}}function bh(t,e){return t&&(t[e]||t[Zt(e)]||t[na(Zt(e))])}function Bl(t,e,n,r){let s;const i=n&&n[r];if(K(t)||Ve(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Dc=t=>t?xp(t)?da(t)||t.proxy:Dc(t.parent):null,Vs=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dc(t.parent),$root:t=>Dc(t.root),$emit:t=>t.emit,$options:t=>$l(t),$forceUpdate:t=>t.f||(t.f=()=>Fl(t.update)),$nextTick:t=>t.n||(t.n=hp.bind(t.proxy)),$watch:t=>Nv.bind(t)}),Ja=(t,e)=>t!==we&&!t.__isScriptSetup&&ce(t,e),Wv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ja(r,e))return o[e]=1,r[e];if(s!==we&&ce(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,i[e];if(n!==we&&ce(n,e))return o[e]=4,n[e];xc&&(o[e]=0)}}const u=Vs[e];let h,d;if(u)return e==="$attrs"&&pt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==we&&ce(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ja(s,e)?(s[e]=n,!0):r!==we&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==we&&ce(t,o)||Ja(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Vs,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ph(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xc=!0;function Gv(t){const e=$l(t),n=t.proxy,r=t.ctx;xc=!1,e.beforeCreate&&Sh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:E,activated:w,deactivated:v,beforeDestroy:S,beforeUnmount:O,destroyed:L,unmounted:k,render:le,renderTracked:$,renderTriggered:ie,errorCaptured:_e,serverPrefetch:yt,expose:at,inheritAttrs:In,components:Jn,directives:Lt,filters:vs}=e;if(l&&Qv(l,r,null),o)for(const ye in o){const de=o[ye];Z(de)&&(r[ye]=de.bind(n))}if(s){const ye=s.call(n,n);Ee(ye)&&(t.data=oa(ye))}if(xc=!0,i)for(const ye in i){const de=i[ye],rn=Z(de)?de.bind(n,n):Z(de.get)?de.get.bind(n,n):Ot,An=!Z(de)&&Z(de.set)?de.set.bind(n):Ot,Ut=Pt({get:rn,set:An});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:dt=>Ut.value=dt})}if(a)for(const ye in a)Ap(a[ye],r,n,ye);if(c){const ye=Z(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(de=>{uo(de,ye[de])})}u&&Sh(u,t,"c");function Le(ye,de){K(de)?de.forEach(rn=>ye(rn.bind(n))):de&&ye(de.bind(n))}if(Le(Mv,h),Le(Lv,d),Le(Uv,m),Le(Fv,E),Le(Dv,w),Le(xv,v),Le(Hv,_e),Le(qv,$),Le(jv,ie),Le(Bv,O),Le(Tp,k),Le($v,yt),K(at))if(at.length){const ye=t.exposed||(t.exposed={});at.forEach(de=>{Object.defineProperty(ye,de,{get:()=>n[de],set:rn=>n[de]=rn})})}else t.exposed||(t.exposed={});le&&t.render===Ot&&(t.render=le),In!=null&&(t.inheritAttrs=In),Jn&&(t.components=Jn),Lt&&(t.directives=Lt)}function Qv(t,e,n=Ot){K(t)&&(t=Vc(t));for(const r in t){const s=t[r];let i;Ee(s)?"default"in s?i=hn(s.from||r,s.default,!0):i=hn(s.from||r):i=hn(s),nt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Sh(t,e,n){Dt(K(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ap(t,e,n,r){const s=r.includes(".")?yp(n,r):()=>n[r];if(Ve(t)){const i=e[t];Z(i)&&co(s,i)}else if(Z(t))co(s,t.bind(n));else if(Ee(t))if(K(t))t.forEach(i=>Ap(i,e,n,r));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&co(s,i,t)}}function $l(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ao(c,l,o,!0)),Ao(c,e,o)),Ee(e)&&i.set(e,c),c}function Ao(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ao(t,i,n,!0),s&&s.forEach(o=>Ao(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Jv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Jv={data:Ch,props:kh,emits:kh,methods:Ss,computed:Ss,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:Ss,directives:Ss,watch:Xv,provide:Ch,inject:Yv};function Ch(t,e){return e?t?function(){return $e(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function Yv(t,e){return Ss(Vc(t),Vc(e))}function Vc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ss(t,e){return t?$e(Object.create(null),t,e):e}function kh(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:$e(Object.create(null),Ph(t),Ph(e??{})):e}function Xv(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function Rp(){return{app:null,config:{isNativeTag:Py,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zv=0;function eE(t,e){return function(r,s=null){Z(r)||(r=$e({},r)),s!=null&&!Ee(s)&&(s=null);const i=Rp(),o=new Set;let a=!1;const c=i.app={_uid:Zv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bE,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=he(r,s);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,da(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ro=c;try{return l()}finally{Ro=null}}};return c}}let Ro=null;function uo(t,e){if(We){let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[t]=e}}function hn(t,e,n=!1){const r=We||Tt;if(r||Ro){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ro._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(r&&r.proxy):e}}function tE(t,e,n,r=!1){const s={},i={};wo(i,ha,1),t.propsDefaults=Object.create(null),bp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:np(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ee(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ca(t.emitsOptions,d))continue;const m=e[d];if(c)if(ce(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const E=Zt(d);s[E]=Mc(c,a,E,m,t,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{bp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=ls(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Mc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],l=!0)}l&&pn(t,"set","$attrs")}function bp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(oo(c))continue;const l=e[c];let u;s&&ce(s,u=Zt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ca(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ee(n),l=a||we;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Mc(s,c,h,l[h],t,!ce(l,h))}}return o}function Mc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Yr(s),r=l[n]=c.call(null,e),cr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ls(n))&&(r=!0))}return r}function Pp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,m]=Pp(h,e,!0);$e(o,d),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ee(t)&&r.set(t,Br),Br;if(K(i))for(let u=0;u<i.length;u++){const h=Zt(i[u]);Oh(h)&&(o[h]=we)}else if(i)for(const u in i){const h=Zt(u);if(Oh(h)){const d=i[u],m=o[h]=K(d)||Z(d)?{type:d}:$e({},d);if(m){const E=xh(Boolean,m.type),w=xh(String,m.type);m[0]=E>-1,m[1]=w<0||E<w,(E>-1||ce(m,"default"))&&a.push(h)}}}const l=[o,a];return Ee(t)&&r.set(t,l),l}function Oh(t){return t[0]!=="$"}function Nh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Dh(t,e){return Nh(t)===Nh(e)}function xh(t,e){return K(e)?e.findIndex(n=>Dh(n,t)):Z(e)&&Dh(e,t)?0:-1}const Sp=t=>t[0]==="_"||t==="$stable",jl=t=>K(t)?t.map(jt):[jt(t)],rE=(t,e,n)=>{if(e._n)return e;const r=Sn((...s)=>jl(e(...s)),n);return r._c=!1,r},Cp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Sp(s))continue;const i=t[s];if(Z(i))e[s]=rE(s,i,r);else if(i!=null){const o=jl(i);e[s]=()=>o}}},kp=(t,e)=>{const n=jl(e);t.slots.default=()=>n},sE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),wo(e,"_",n)):Cp(e,t.slots={})}else t.slots={},e&&kp(t,e);wo(t.slots,ha,1)},iE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=we;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:($e(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Cp(e,s)),o=e}else e&&(kp(t,e),o={default:1});if(i)for(const a in s)!Sp(a)&&!(a in o)&&delete s[a]};function Lc(t,e,n,r,s=!1){if(K(t)){t.forEach((d,m)=>Lc(d,e&&(K(e)?e[m]:e),n,r,s));return}if(lo(r)&&!s)return;const i=r.shapeFlag&4?da(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===we?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ve(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):nt(l)&&(l.value=null)),Z(c))Un(c,a,12,[o,u]);else{const d=Ve(c),m=nt(c);if(d||m){const E=()=>{if(t.f){const w=d?ce(h,c)?h[c]:u[c]:c.value;s?K(w)&&Cl(w,i):K(w)?w.includes(i)||w.push(i):d?(u[c]=[i],ce(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ce(h,c)&&(h[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,ft(E,n)):E()}}}const ft=Ov;function oE(t){return aE(t)}function aE(t,e){const n=bc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=Ot,insertStaticContent:E}=t,w=(f,p,_,y=null,I=null,A=null,V=!1,C=null,N=!!p.dynamicChildren)=>{if(f===p)return;f&&!ws(f,p)&&(y=T(f),dt(f,I,A,!0),f=null),p.patchFlag===-2&&(N=!1,p.dynamicChildren=null);const{type:b,ref:j,shapeFlag:F}=p;switch(b){case ua:v(f,p,_,y);break;case dr:S(f,p,_,y);break;case ho:f==null&&O(p,_,y,V);break;case vt:Jn(f,p,_,y,I,A,V,C,N);break;default:F&1?le(f,p,_,y,I,A,V,C,N):F&6?Lt(f,p,_,y,I,A,V,C,N):(F&64||F&128)&&b.process(f,p,_,y,I,A,V,C,N,D)}j!=null&&I&&Lc(j,f&&f.ref,A,p||f,!p)},v=(f,p,_,y)=>{if(f==null)r(p.el=a(p.children),_,y);else{const I=p.el=f.el;p.children!==f.children&&l(I,p.children)}},S=(f,p,_,y)=>{f==null?r(p.el=c(p.children||""),_,y):p.el=f.el},O=(f,p,_,y)=>{[f.el,f.anchor]=E(f.children,p,_,y,f.el,f.anchor)},L=({el:f,anchor:p},_,y)=>{let I;for(;f&&f!==p;)I=d(f),r(f,_,y),f=I;r(p,_,y)},k=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),s(f),f=_;s(p)},le=(f,p,_,y,I,A,V,C,N)=>{V=V||p.type==="svg",f==null?$(p,_,y,I,A,V,C,N):yt(f,p,I,A,V,C,N)},$=(f,p,_,y,I,A,V,C)=>{let N,b;const{type:j,props:F,shapeFlag:q,transition:J,dirs:ne}=f;if(N=f.el=o(f.type,A,F&&F.is,F),q&8?u(N,f.children):q&16&&_e(f.children,N,null,y,I,A&&j!=="foreignObject",V,C),ne&&Yn(f,null,y,"created"),ie(N,f,f.scopeId,V,y),F){for(const ge in F)ge!=="value"&&!oo(ge)&&i(N,ge,null,F[ge],A,f.children,y,I,Ye);"value"in F&&i(N,"value",null,F.value),(b=F.onVnodeBeforeMount)&&$t(b,y,f)}ne&&Yn(f,null,y,"beforeMount");const ve=(!I||I&&!I.pendingBranch)&&J&&!J.persisted;ve&&J.beforeEnter(N),r(N,p,_),((b=F&&F.onVnodeMounted)||ve||ne)&&ft(()=>{b&&$t(b,y,f),ve&&J.enter(N),ne&&Yn(f,null,y,"mounted")},I)},ie=(f,p,_,y,I)=>{if(_&&m(f,_),y)for(let A=0;A<y.length;A++)m(f,y[A]);if(I){let A=I.subTree;if(p===A){const V=I.vnode;ie(f,V,V.scopeId,V.slotScopeIds,I.parent)}}},_e=(f,p,_,y,I,A,V,C,N=0)=>{for(let b=N;b<f.length;b++){const j=f[b]=C?kn(f[b]):jt(f[b]);w(null,j,p,_,y,I,A,V,C)}},yt=(f,p,_,y,I,A,V)=>{const C=p.el=f.el;let{patchFlag:N,dynamicChildren:b,dirs:j}=p;N|=f.patchFlag&16;const F=f.props||we,q=p.props||we;let J;_&&Xn(_,!1),(J=q.onVnodeBeforeUpdate)&&$t(J,_,p,f),j&&Yn(p,f,_,"beforeUpdate"),_&&Xn(_,!0);const ne=I&&p.type!=="foreignObject";if(b?at(f.dynamicChildren,b,C,_,y,ne,A):V||de(f,p,C,null,_,y,ne,A,!1),N>0){if(N&16)In(C,p,F,q,_,y,I);else if(N&2&&F.class!==q.class&&i(C,"class",null,q.class,I),N&4&&i(C,"style",F.style,q.style,I),N&8){const ve=p.dynamicProps;for(let ge=0;ge<ve.length;ge++){const ke=ve[ge],At=F[ke],kr=q[ke];(kr!==At||ke==="value")&&i(C,ke,At,kr,I,f.children,_,y,Ye)}}N&1&&f.children!==p.children&&u(C,p.children)}else!V&&b==null&&In(C,p,F,q,_,y,I);((J=q.onVnodeUpdated)||j)&&ft(()=>{J&&$t(J,_,p,f),j&&Yn(p,f,_,"updated")},y)},at=(f,p,_,y,I,A,V)=>{for(let C=0;C<p.length;C++){const N=f[C],b=p[C],j=N.el&&(N.type===vt||!ws(N,b)||N.shapeFlag&70)?h(N.el):_;w(N,b,j,null,y,I,A,V,!0)}},In=(f,p,_,y,I,A,V)=>{if(_!==y){if(_!==we)for(const C in _)!oo(C)&&!(C in y)&&i(f,C,_[C],null,V,p.children,I,A,Ye);for(const C in y){if(oo(C))continue;const N=y[C],b=_[C];N!==b&&C!=="value"&&i(f,C,b,N,V,p.children,I,A,Ye)}"value"in y&&i(f,"value",_.value,y.value)}},Jn=(f,p,_,y,I,A,V,C,N)=>{const b=p.el=f?f.el:a(""),j=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:q,slotScopeIds:J}=p;J&&(C=C?C.concat(J):J),f==null?(r(b,_,y),r(j,_,y),_e(p.children,_,j,I,A,V,C,N)):F>0&&F&64&&q&&f.dynamicChildren?(at(f.dynamicChildren,q,_,I,A,V,C),(p.key!=null||I&&p===I.subTree)&&Op(f,p,!0)):de(f,p,_,j,I,A,V,C,N)},Lt=(f,p,_,y,I,A,V,C,N)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?I.ctx.activate(p,_,y,V,N):vs(p,_,y,I,A,V,N):Pr(f,p,N)},vs=(f,p,_,y,I,A,V)=>{const C=f.component=_E(f,y,I);if(Ep(f)&&(C.ctx.renderer=D),yE(C),C.asyncDep){if(I&&I.registerDep(C,Le),!f.el){const N=C.subTree=he(dr);S(null,N,p,_)}return}Le(C,f,p,_,I,A,V)},Pr=(f,p,_)=>{const y=p.component=f.component;if(Sv(f,p,_))if(y.asyncDep&&!y.asyncResolved){ye(y,p,_);return}else y.next=p,Tv(y.update),y.update();else p.el=f.el,y.vnode=p},Le=(f,p,_,y,I,A,V)=>{const C=()=>{if(f.isMounted){let{next:j,bu:F,u:q,parent:J,vnode:ne}=f,ve=j,ge;Xn(f,!1),j?(j.el=ne.el,ye(f,j,V)):j=ne,F&&ao(F),(ge=j.props&&j.props.onVnodeBeforeUpdate)&&$t(ge,J,j,ne),Xn(f,!0);const ke=Qa(f),At=f.subTree;f.subTree=ke,w(At,ke,h(At.el),T(At),f,I,A),j.el=ke.el,ve===null&&Cv(f,ke.el),q&&ft(q,I),(ge=j.props&&j.props.onVnodeUpdated)&&ft(()=>$t(ge,J,j,ne),I)}else{let j;const{el:F,props:q}=p,{bm:J,m:ne,parent:ve}=f,ge=lo(p);if(Xn(f,!1),J&&ao(J),!ge&&(j=q&&q.onVnodeBeforeMount)&&$t(j,ve,p),Xn(f,!0),F&&fe){const ke=()=>{f.subTree=Qa(f),fe(F,f.subTree,f,I,null)};ge?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ke()):ke()}else{const ke=f.subTree=Qa(f);w(null,ke,_,y,f,I,A),p.el=ke.el}if(ne&&ft(ne,I),!ge&&(j=q&&q.onVnodeMounted)){const ke=p;ft(()=>$t(j,ve,ke),I)}(p.shapeFlag&256||ve&&lo(ve.vnode)&&ve.vnode.shapeFlag&256)&&f.a&&ft(f.a,I),f.isMounted=!0,p=_=y=null}},N=f.effect=new Nl(C,()=>Fl(b),f.scope),b=f.update=()=>N.run();b.id=f.uid,Xn(f,!0),b()},ye=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,nE(f,p.props,y,_),iE(f,p.children,_),us(),Ah(),hs()},de=(f,p,_,y,I,A,V,C,N=!1)=>{const b=f&&f.children,j=f?f.shapeFlag:0,F=p.children,{patchFlag:q,shapeFlag:J}=p;if(q>0){if(q&128){An(b,F,_,y,I,A,V,C,N);return}else if(q&256){rn(b,F,_,y,I,A,V,C,N);return}}J&8?(j&16&&Ye(b,I,A),F!==b&&u(_,F)):j&16?J&16?An(b,F,_,y,I,A,V,C,N):Ye(b,I,A,!0):(j&8&&u(_,""),J&16&&_e(F,_,y,I,A,V,C,N))},rn=(f,p,_,y,I,A,V,C,N)=>{f=f||Br,p=p||Br;const b=f.length,j=p.length,F=Math.min(b,j);let q;for(q=0;q<F;q++){const J=p[q]=N?kn(p[q]):jt(p[q]);w(f[q],J,_,null,I,A,V,C,N)}b>j?Ye(f,I,A,!0,!1,F):_e(p,_,y,I,A,V,C,N,F)},An=(f,p,_,y,I,A,V,C,N)=>{let b=0;const j=p.length;let F=f.length-1,q=j-1;for(;b<=F&&b<=q;){const J=f[b],ne=p[b]=N?kn(p[b]):jt(p[b]);if(ws(J,ne))w(J,ne,_,null,I,A,V,C,N);else break;b++}for(;b<=F&&b<=q;){const J=f[F],ne=p[q]=N?kn(p[q]):jt(p[q]);if(ws(J,ne))w(J,ne,_,null,I,A,V,C,N);else break;F--,q--}if(b>F){if(b<=q){const J=q+1,ne=J<j?p[J].el:y;for(;b<=q;)w(null,p[b]=N?kn(p[b]):jt(p[b]),_,ne,I,A,V,C,N),b++}}else if(b>q)for(;b<=F;)dt(f[b],I,A,!0),b++;else{const J=b,ne=b,ve=new Map;for(b=ne;b<=q;b++){const mt=p[b]=N?kn(p[b]):jt(p[b]);mt.key!=null&&ve.set(mt.key,b)}let ge,ke=0;const At=q-ne+1;let kr=!1,hh=0;const Es=new Array(At);for(b=0;b<At;b++)Es[b]=0;for(b=J;b<=F;b++){const mt=f[b];if(ke>=At){dt(mt,I,A,!0);continue}let Ft;if(mt.key!=null)Ft=ve.get(mt.key);else for(ge=ne;ge<=q;ge++)if(Es[ge-ne]===0&&ws(mt,p[ge])){Ft=ge;break}Ft===void 0?dt(mt,I,A,!0):(Es[Ft-ne]=b+1,Ft>=hh?hh=Ft:kr=!0,w(mt,p[Ft],_,null,I,A,V,C,N),ke++)}const dh=kr?cE(Es):Br;for(ge=dh.length-1,b=At-1;b>=0;b--){const mt=ne+b,Ft=p[mt],fh=mt+1<j?p[mt+1].el:y;Es[b]===0?w(null,Ft,_,fh,I,A,V,C,N):kr&&(ge<0||b!==dh[ge]?Ut(Ft,_,fh,2):ge--)}}},Ut=(f,p,_,y,I=null)=>{const{el:A,type:V,transition:C,children:N,shapeFlag:b}=f;if(b&6){Ut(f.component.subTree,p,_,y);return}if(b&128){f.suspense.move(p,_,y);return}if(b&64){V.move(f,p,_,D);return}if(V===vt){r(A,p,_);for(let F=0;F<N.length;F++)Ut(N[F],p,_,y);r(f.anchor,p,_);return}if(V===ho){L(f,p,_);return}if(y!==2&&b&1&&C)if(y===0)C.beforeEnter(A),r(A,p,_),ft(()=>C.enter(A),I);else{const{leave:F,delayLeave:q,afterLeave:J}=C,ne=()=>r(A,p,_),ve=()=>{F(A,()=>{ne(),J&&J()})};q?q(A,ne,ve):ve()}else r(A,p,_)},dt=(f,p,_,y=!1,I=!1)=>{const{type:A,props:V,ref:C,children:N,dynamicChildren:b,shapeFlag:j,patchFlag:F,dirs:q}=f;if(C!=null&&Lc(C,null,_,f,!0),j&256){p.ctx.deactivate(f);return}const J=j&1&&q,ne=!lo(f);let ve;if(ne&&(ve=V&&V.onVnodeBeforeUnmount)&&$t(ve,p,f),j&6)$i(f.component,_,y);else{if(j&128){f.suspense.unmount(_,y);return}J&&Yn(f,null,p,"beforeUnmount"),j&64?f.type.remove(f,p,_,I,D,y):b&&(A!==vt||F>0&&F&64)?Ye(b,p,_,!1,!0):(A===vt&&F&384||!I&&j&16)&&Ye(N,p,_),y&&Sr(f)}(ne&&(ve=V&&V.onVnodeUnmounted)||J)&&ft(()=>{ve&&$t(ve,p,f),J&&Yn(f,null,p,"unmounted")},_)},Sr=f=>{const{type:p,el:_,anchor:y,transition:I}=f;if(p===vt){Cr(_,y);return}if(p===ho){k(f);return}const A=()=>{s(_),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:V,delayLeave:C}=I,N=()=>V(_,A);C?C(f.el,A,N):N()}else A()},Cr=(f,p)=>{let _;for(;f!==p;)_=d(f),s(f),f=_;s(p)},$i=(f,p,_)=>{const{bum:y,scope:I,update:A,subTree:V,um:C}=f;y&&ao(y),I.stop(),A&&(A.active=!1,dt(V,f,p,_)),C&&ft(C,p),ft(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ye=(f,p,_,y=!1,I=!1,A=0)=>{for(let V=A;V<f.length;V++)dt(f[V],p,_,y,I)},T=f=>f.shapeFlag&6?T(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),M=(f,p,_)=>{f==null?p._vnode&&dt(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,_),Ah(),fp(),p._vnode=f},D={p:w,um:dt,m:Ut,r:Sr,mt:vs,mc:_e,pc:de,pbc:at,n:T,o:t};let B,fe;return e&&([B,fe]=e(D)),{render:M,hydrate:B,createApp:eE(M,B)}}function Xn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Op(t,e,n=!1){const r=t.children,s=e.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=kn(s[i]),a.el=o.el),n||Op(o,a)),a.type===ua&&(a.el=o.el)}}function cE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const lE=t=>t.__isTeleport,vt=Symbol.for("v-fgt"),ua=Symbol.for("v-txt"),dr=Symbol.for("v-cmt"),ho=Symbol.for("v-stc"),Ms=[];let Ct=null;function te(t=!1){Ms.push(Ct=t?null:[])}function uE(){Ms.pop(),Ct=Ms[Ms.length-1]||null}let Ys=1;function Vh(t){Ys+=t}function Np(t){return t.dynamicChildren=Ys>0?Ct||Br:null,uE(),Ys>0&&Ct&&Ct.push(t),t}function ae(t,e,n,r,s,i){return Np(g(t,e,n,r,s,i,!0))}function ql(t,e,n,r,s){return Np(he(t,e,n,r,s,!0))}function Uc(t){return t?t.__v_isVNode===!0:!1}function ws(t,e){return t.type===e.type&&t.key===e.key}const ha="__vInternal",Dp=({key:t})=>t??null,fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ve(t)||nt(t)||Z(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,s=null,i=t===vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dp(e),ref:e&&fo(e),scopeId:gp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return a?(Hl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ve(n)?8:16),Ys>0&&!o&&Ct&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ct.push(c),c}const he=hE;function hE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===zv)&&(t=dr),Uc(t)){const a=Jr(t,e,!0);return n&&Hl(a,n),Ys>0&&!i&&Ct&&(a.shapeFlag&6?Ct[Ct.indexOf(t)]=a:Ct.push(a)),a.patchFlag|=-2,a}if(IE(t)&&(t=t.__vccOpts),e){e=dE(e);let{class:a,style:c}=e;a&&!Ve(a)&&(e.class=Nt(a)),Ee(c)&&(sp(c)&&!K(c)&&(c=$e({},c)),e.style=ra(c))}const o=Ve(t)?1:kv(t)?128:lE(t)?64:Ee(t)?4:Z(t)?2:0;return g(t,e,n,r,s,o,i,!0)}function dE(t){return t?sp(t)||ha in t?$e({},t):t:null}function Jr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?pE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Dp(a),ref:e&&e.ref?n&&s?K(s)?s.concat(fo(e)):[s,fo(e)]:fo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Jr(t.ssContent),ssFallback:t.ssFallback&&Jr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Fc(t=" ",e=0){return he(ua,null,t,e)}function fE(t,e){const n=he(ho,null,t);return n.staticCount=e,n}function Be(t="",e=!1){return e?(te(),ql(dr,null,t)):he(dr,null,t)}function jt(t){return t==null||typeof t=="boolean"?he(dr):K(t)?he(vt,null,t.slice()):typeof t=="object"?kn(t):he(ua,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Jr(t)}function Hl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Hl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ha in e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[Fc(e)]):n=8);t.children=e,t.shapeFlag|=n}function pE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Nt([e.class,r.class]));else if(s==="style")e.style=ra([e.style,r.style]);else if(Zo(s)){const i=e[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $t(t,e,n,r=null){Dt(t,e,7,[n,r])}const mE=Rp();let gE=0;function _E(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||mE,i={uid:gE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new By(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pp(r,s),emitsOptions:mp(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Rv.bind(null,i),t.ce&&t.ce(i),i}let We=null,zl,Or,Mh="__VUE_INSTANCE_SETTERS__";(Or=bc()[Mh])||(Or=bc()[Mh]=[]),Or.push(t=>We=t),zl=t=>{Or.length>1?Or.forEach(e=>e(t)):Or[0](t)};const Yr=t=>{zl(t),t.scope.on()},cr=()=>{We&&We.scope.off(),zl(null)};function xp(t){return t.vnode.shapeFlag&4}let Xs=!1;function yE(t,e=!1){Xs=e;const{props:n,children:r}=t.vnode,s=xp(t);tE(t,n,s,e),sE(t,r);const i=s?vE(t,e):void 0;return Xs=!1,i}function vE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ip(new Proxy(t.ctx,Wv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?wE(t):null;Yr(t),us();const i=Un(r,t,0,[t.props,s]);if(hs(),cr(),Bf(i)){if(i.then(cr,cr),e)return i.then(o=>{Lh(t,o,e)}).catch(o=>{aa(o,t,0)});t.asyncDep=i}else Lh(t,i,e)}else Vp(t,e)}function Lh(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=lp(e)),Vp(t,n)}let Uh;function Vp(t,e,n){const r=t.type;if(!t.render){if(!e&&Uh&&!r.render){const s=r.template||$l(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=$e($e({isCustomElement:i,delimiters:a},o),c);r.render=Uh(s,l)}}t.render=r.render||Ot}Yr(t),us(),Gv(t),hs(),cr()}function EE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}}))}function wE(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return EE(t)},slots:t.slots,emit:t.emit,expose:e}}function da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(lp(ip(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)},has(e,n){return n in e||n in Vs}}))}function TE(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function IE(t){return Z(t)&&"__vccOpts"in t}const Pt=(t,e)=>vv(t,e,Xs);function Mp(t,e,n){const r=arguments.length;return r===2?Ee(e)&&!K(e)?Uc(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Uc(n)&&(n=[n]),he(t,e,n))}const AE=Symbol.for("v-scx"),RE=()=>hn(AE),bE="3.3.4",PE="http://www.w3.org/2000/svg",tr=typeof document<"u"?document:null,Fh=tr&&tr.createElement("template"),SE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?tr.createElementNS(PE,t):tr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>tr.createTextNode(t),createComment:t=>tr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fh.innerHTML=r?`<svg>${t}</svg>`:t;const a=Fh.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function CE(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function kE(t,e,n){const r=t.style,s=Ve(n);if(n&&!s){if(e&&!Ve(e))for(const i in e)n[i]==null&&Bc(r,i,"");for(const i in n)Bc(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Bh=/\s*!important$/;function Bc(t,e,n){if(K(n))n.forEach(r=>Bc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=OE(t,e);Bh.test(n)?t.setProperty(ls(r),n.replace(Bh,""),"important"):t[r]=n}}const $h=["Webkit","Moz","ms"],Ya={};function OE(t,e){const n=Ya[e];if(n)return n;let r=Zt(e);if(r!=="filter"&&r in t)return Ya[e]=r;r=na(r);for(let s=0;s<$h.length;s++){const i=$h[s]+r;if(i in t)return Ya[e]=i}return e}const jh="http://www.w3.org/1999/xlink";function NE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(jh,e.slice(6,e.length)):t.setAttributeNS(jh,e,n);else{const i=Uy(e);n==null||i&&!qf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function DE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=qf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function nr(t,e,n,r){t.addEventListener(e,n,r)}function xE(t,e,n,r){t.removeEventListener(e,n,r)}function VE(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=ME(e);if(r){const l=i[e]=FE(r,s);nr(t,a,l,c)}else o&&(xE(t,a,o,c),i[e]=void 0)}}const qh=/(?:Once|Passive|Capture)$/;function ME(t){let e;if(qh.test(t)){e={};let r;for(;r=t.match(qh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ls(t.slice(2)),e]}let Xa=0;const LE=Promise.resolve(),UE=()=>Xa||(LE.then(()=>Xa=0),Xa=Date.now());function FE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Dt(BE(r,n.value),e,5,[r])};return n.value=t,n.attached=UE(),n}function BE(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hh=/^on[a-z]/,$E=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?CE(t,r,s):e==="style"?kE(t,n,r):Zo(e)?Sl(e)||VE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jE(t,e,r,s))?DE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),NE(t,e,r,s))};function jE(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Hh.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hh.test(e)&&Ve(n)?!1:e in t}const bo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>ao(e,n):e};function qE(t){t.target.composing=!0}function zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Lp={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=bo(s);const i=r||s.props&&s.props.type==="number";nr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Rc(a)),t._assign(a)}),n&&nr(t,"change",()=>{t.value=t.value.trim()}),e||(nr(t,"compositionstart",qE),nr(t,"compositionend",zh),nr(t,"change",zh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=bo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Rc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},HE={deep:!0,created(t,e,n){t._assign=bo(n),nr(t,"change",()=>{const r=t._modelValue,s=zE(t),i=t.checked,o=t._assign;if(K(r)){const a=Hf(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(ea(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Up(t,i))})},mounted:Kh,beforeUpdate(t,e,n){t._assign=bo(n),Kh(t,e,n)}};function Kh(t,{value:e,oldValue:n},r){t._modelValue=e,K(e)?t.checked=Hf(e,r.props.value)>-1:ea(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=sa(e,Up(t,!0)))}function zE(t){return"_value"in t?t._value:t.value}function Up(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const KE=$e({patchProp:$E},SE);let Wh;function WE(){return Wh||(Wh=oE(KE))}const GE=(...t)=>{const e=WE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=QE(r);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function QE(t){return Ve(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xr=typeof window<"u";function JE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function Za(t,e){const n={};for(const r in e){const s=e[r];n[r]=xt(s)?s.map(t):t(s)}return n}const Ls=()=>{},xt=Array.isArray,YE=/\/$/,XE=t=>t.replace(YE,"");function ec(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=nw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function ZE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ew(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Xr(e.matched[r],n.matched[s])&&Fp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!tw(t[n],e[n]))return!1;return!0}function tw(t,e){return xt(t)?Qh(t,e):xt(e)?Qh(e,t):t===e}function Qh(t,e){return xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function nw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Zs;(function(t){t.pop="pop",t.push="push"})(Zs||(Zs={}));var Us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Us||(Us={}));function rw(t){if(!t)if(xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),XE(t)}const sw=/^[^#]+#/;function iw(t,e){return t.replace(sw,"#")+e}function ow(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function aw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=ow(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jh(t,e){return(history.state?history.state.position-e:-1)+t}const $c=new Map;function cw(t,e){$c.set(t,e)}function lw(t){const e=$c.get(t);return $c.delete(t),e}let uw=()=>location.protocol+"//"+location.host;function Bp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Gh(c,"")}return Gh(n,t)+r+s}function hw(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=Bp(t,location),E=n.value,w=e.value;let v=0;if(d){if(n.value=m,e.value=d,o&&o===E){o=null;return}v=w?d.position-w.position:0}else r(m);s.forEach(S=>{S(n.value,E,{delta:v,type:Zs.pop,direction:v?v>0?Us.forward:Us.back:Us.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const E=s.indexOf(d);E>-1&&s.splice(E,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(pe({},d.state,{scroll:fa()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Yh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?fa():null}}function dw(t){const{history:e,location:n}=window,r={value:Bp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:uw()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=pe({},e.state,Yh(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=pe({},s.value,e.state,{forward:c,scroll:fa()});i(u.current,u,!0);const h=pe({},Yh(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function fw(t){t=rw(t);const e=dw(t),n=hw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=pe({location:"",base:t,go:r,createHref:iw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function pw(t){return typeof t=="string"||t&&typeof t=="object"}function $p(t){return typeof t=="string"||typeof t=="symbol"}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jp=Symbol("");var Xh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xh||(Xh={}));function Zr(t,e){return pe(new Error,{type:t,[jp]:!0},e)}function sn(t,e){return t instanceof Error&&jp in t&&(e==null||!!(t.type&e))}const Zh="[^/]+?",mw={sensitive:!1,strict:!1,start:!0,end:!0},gw=/[.+*?^${}()[\]/\\]/g;function _w(t,e){const n=pe({},mw,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(gw,"\\$&"),m+=40;else if(d.type===1){const{value:E,repeatable:w,optional:v,regexp:S}=d;i.push({name:E,repeatable:w,optional:v});const O=S||Zh;if(O!==Zh){m+=10;try{new RegExp(`(${O})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${E}" (${O}): `+k.message)}}let L=w?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(L=v&&l.length<2?`(?:/${L})`:"/"+L),v&&(L+="?"),s+=L,m+=20,v&&(m+=-8),w&&(m+=-20),O===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",E=i[d-1];h[E.name]=m&&E.repeatable?m.split("/"):m}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:E,repeatable:w,optional:v}=m,S=E in l?l[E]:"";if(xt(S)&&!w)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const O=xt(S)?S.join("/"):S;if(!O)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function yw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function vw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=yw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ed(r))return 1;if(ed(s))return-1}return s.length-r.length}function ed(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ew={type:0,value:""},ww=/[a-zA-Z0-9_]/;function Tw(t){if(!t)return[[]];if(t==="/")return[[Ew]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:ww.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Iw(t,e,n){const r=_w(Tw(t.path),n),s=pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Aw(t,e){const n=[],r=new Map;e=rd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const m=!d,E=Rw(u);E.aliasOf=d&&d.record;const w=rd(e,u),v=[E];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of L)v.push(pe({},E,{components:d?d.record.components:E.components,path:k,aliasOf:d?d.record:E}))}let S,O;for(const L of v){const{path:k}=L;if(h&&k[0]!=="/"){const le=h.record.path,$=le[le.length-1]==="/"?"":"/";L.path=h.record.path+(k&&$+k)}if(S=Iw(L,h,w),d?d.alias.push(S):(O=O||S,O!==S&&O.alias.push(S),m&&u.name&&!nd(S)&&o(u.name)),E.children){const le=E.children;for(let $=0;$<le.length;$++)i(le[$],S,d&&d.children[$])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return O?()=>{o(O)}:Ls}function o(u){if($p(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&vw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!qp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!nd(u)&&r.set(u.record.name,u)}function l(u,h){let d,m={},E,w;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Zr(1,{location:u});w=d.record.name,m=pe(td(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&td(u.params,d.keys.map(O=>O.name))),E=d.stringify(m)}else if("path"in u)E=u.path,d=n.find(O=>O.re.test(E)),d&&(m=d.parse(E),w=d.record.name);else{if(d=h.name?r.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw Zr(1,{location:u,currentLocation:h});w=d.record.name,m=pe({},h.params,u.params),E=d.stringify(m)}const v=[];let S=d;for(;S;)v.unshift(S.record),S=S.parent;return{name:w,path:E,params:m,matched:v,meta:Pw(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function td(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Rw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function bw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function nd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Pw(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function rd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qp(t,e){return e.children.some(n=>n===t||qp(t,n))}const Hp=/#/g,Sw=/&/g,Cw=/\//g,kw=/=/g,Ow=/\?/g,zp=/\+/g,Nw=/%5B/g,Dw=/%5D/g,Kp=/%5E/g,xw=/%60/g,Wp=/%7B/g,Vw=/%7C/g,Gp=/%7D/g,Mw=/%20/g;function Kl(t){return encodeURI(""+t).replace(Vw,"|").replace(Nw,"[").replace(Dw,"]")}function Lw(t){return Kl(t).replace(Wp,"{").replace(Gp,"}").replace(Kp,"^")}function jc(t){return Kl(t).replace(zp,"%2B").replace(Mw,"+").replace(Hp,"%23").replace(Sw,"%26").replace(xw,"`").replace(Wp,"{").replace(Gp,"}").replace(Kp,"^")}function Uw(t){return jc(t).replace(kw,"%3D")}function Fw(t){return Kl(t).replace(Hp,"%23").replace(Ow,"%3F")}function Bw(t){return t==null?"":Fw(t).replace(Cw,"%2F")}function Po(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function $w(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(zp," "),o=i.indexOf("="),a=Po(o<0?i:i.slice(0,o)),c=o<0?null:Po(i.slice(o+1));if(a in e){let l=e[a];xt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function sd(t){let e="";for(let n in t){const r=t[n];if(n=Uw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(xt(r)?r.map(i=>i&&jc(i)):[r&&jc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function jw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const qw=Symbol(""),id=Symbol(""),Wl=Symbol(""),Qp=Symbol(""),qc=Symbol("");function Ts(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function On(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Zr(4,{from:n,to:e})):h instanceof Error?a(h):pw(h)?a(Zr(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function tc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Hw(a)){const l=(a.__vccOpts||a)[e];l&&s.push(On(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=JE(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&On(d,n,r,i,o)()}))}}return s}function Hw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function od(t){const e=hn(Wl),n=hn(Qp),r=Pt(()=>e.resolve(Ue(t.to))),s=Pt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Xr.bind(null,u));if(d>-1)return d;const m=ad(c[l-2]);return l>1&&ad(u)===m&&h[h.length-1].path!==m?h.findIndex(Xr.bind(null,c[l-2])):d}),i=Pt(()=>s.value>-1&&Ww(n.params,r.value.params)),o=Pt(()=>s.value>-1&&s.value===n.matched.length-1&&Fp(n.params,r.value.params));function a(c={}){return Kw(c)?e[Ue(t.replace)?"replace":"push"](Ue(t.to)).catch(Ls):Promise.resolve()}return{route:r,href:Pt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const zw=vp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:od,setup(t,{slots:e}){const n=oa(od(t)),{options:r}=hn(Wl),s=Pt(()=>({[cd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[cd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Mp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Cn=zw;function Kw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ww(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!xt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ad(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cd=(t,e,n)=>t??e??n,Gw=vp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=hn(qc),s=Pt(()=>t.route||r.value),i=hn(id,0),o=Pt(()=>{let l=Ue(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Pt(()=>s.value.matched[o.value]);uo(id,Pt(()=>o.value+1)),uo(qw,a),uo(qc,s);const c=Ae();return co(()=>[c.value,a.value,t.name],([l,u,h],[d,m,E])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Xr(u,m)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return ld(n.default,{Component:d,route:l});const m=h.props[u],E=m?m===!0?l.params:typeof m=="function"?m(l):m:null,v=Mp(d,pe({},E,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return ld(n.default,{Component:v,route:l})||v}}});function ld(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Jp=Gw;function Qw(t){const e=Aw(t.routes,t),n=t.parseQuery||$w,r=t.stringifyQuery||sd,s=t.history,i=Ts(),o=Ts(),a=Ts(),c=mv(bn);let l=bn;xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Za.bind(null,T=>""+T),h=Za.bind(null,Bw),d=Za.bind(null,Po);function m(T,M){let D,B;return $p(T)?(D=e.getRecordMatcher(T),B=M):B=T,e.addRoute(B,D)}function E(T){const M=e.getRecordMatcher(T);M&&e.removeRoute(M)}function w(){return e.getRoutes().map(T=>T.record)}function v(T){return!!e.getRecordMatcher(T)}function S(T,M){if(M=pe({},M||c.value),typeof T=="string"){const _=ec(n,T,M.path),y=e.resolve({path:_.path},M),I=s.createHref(_.fullPath);return pe(_,y,{params:d(y.params),hash:Po(_.hash),redirectedFrom:void 0,href:I})}let D;if("path"in T)D=pe({},T,{path:ec(n,T.path,M.path).path});else{const _=pe({},T.params);for(const y in _)_[y]==null&&delete _[y];D=pe({},T,{params:h(_)}),M.params=h(M.params)}const B=e.resolve(D,M),fe=T.hash||"";B.params=u(d(B.params));const f=ZE(r,pe({},T,{hash:Lw(fe),path:B.path})),p=s.createHref(f);return pe({fullPath:f,hash:fe,query:r===sd?jw(T.query):T.query||{}},B,{redirectedFrom:void 0,href:p})}function O(T){return typeof T=="string"?ec(n,T,c.value.path):pe({},T)}function L(T,M){if(l!==T)return Zr(8,{from:M,to:T})}function k(T){return ie(T)}function le(T){return k(pe(O(T),{replace:!0}))}function $(T){const M=T.matched[T.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let B=typeof D=="function"?D(T):D;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=O(B):{path:B},B.params={}),pe({query:T.query,hash:T.hash,params:"path"in B?{}:T.params},B)}}function ie(T,M){const D=l=S(T),B=c.value,fe=T.state,f=T.force,p=T.replace===!0,_=$(D);if(_)return ie(pe(O(_),{state:typeof _=="object"?pe({},fe,_.state):fe,force:f,replace:p}),M||D);const y=D;y.redirectedFrom=M;let I;return!f&&ew(r,B,D)&&(I=Zr(16,{to:y,from:B}),Ut(B,B,!0,!1)),(I?Promise.resolve(I):at(y,B)).catch(A=>sn(A)?sn(A,2)?A:An(A):de(A,y,B)).then(A=>{if(A){if(sn(A,2))return ie(pe({replace:p},O(A.to),{state:typeof A.to=="object"?pe({},fe,A.to.state):fe,force:f}),M||y)}else A=Jn(y,B,!0,p,fe);return In(y,B,A),A})}function _e(T,M){const D=L(T,M);return D?Promise.reject(D):Promise.resolve()}function yt(T){const M=Cr.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(T):T()}function at(T,M){let D;const[B,fe,f]=Jw(T,M);D=tc(B.reverse(),"beforeRouteLeave",T,M);for(const _ of B)_.leaveGuards.forEach(y=>{D.push(On(y,T,M))});const p=_e.bind(null,T,M);return D.push(p),Ye(D).then(()=>{D=[];for(const _ of i.list())D.push(On(_,T,M));return D.push(p),Ye(D)}).then(()=>{D=tc(fe,"beforeRouteUpdate",T,M);for(const _ of fe)_.updateGuards.forEach(y=>{D.push(On(y,T,M))});return D.push(p),Ye(D)}).then(()=>{D=[];for(const _ of f)if(_.beforeEnter)if(xt(_.beforeEnter))for(const y of _.beforeEnter)D.push(On(y,T,M));else D.push(On(_.beforeEnter,T,M));return D.push(p),Ye(D)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),D=tc(f,"beforeRouteEnter",T,M),D.push(p),Ye(D))).then(()=>{D=[];for(const _ of o.list())D.push(On(_,T,M));return D.push(p),Ye(D)}).catch(_=>sn(_,8)?_:Promise.reject(_))}function In(T,M,D){a.list().forEach(B=>yt(()=>B(T,M,D)))}function Jn(T,M,D,B,fe){const f=L(T,M);if(f)return f;const p=M===bn,_=xr?history.state:{};D&&(B||p?s.replace(T.fullPath,pe({scroll:p&&_&&_.scroll},fe)):s.push(T.fullPath,fe)),c.value=T,Ut(T,M,D,p),An()}let Lt;function vs(){Lt||(Lt=s.listen((T,M,D)=>{if(!$i.listening)return;const B=S(T),fe=$(B);if(fe){ie(pe(fe,{replace:!0}),B).catch(Ls);return}l=B;const f=c.value;xr&&cw(Jh(f.fullPath,D.delta),fa()),at(B,f).catch(p=>sn(p,12)?p:sn(p,2)?(ie(p.to,B).then(_=>{sn(_,20)&&!D.delta&&D.type===Zs.pop&&s.go(-1,!1)}).catch(Ls),Promise.reject()):(D.delta&&s.go(-D.delta,!1),de(p,B,f))).then(p=>{p=p||Jn(B,f,!1),p&&(D.delta&&!sn(p,8)?s.go(-D.delta,!1):D.type===Zs.pop&&sn(p,20)&&s.go(-1,!1)),In(B,f,p)}).catch(Ls)}))}let Pr=Ts(),Le=Ts(),ye;function de(T,M,D){An(T);const B=Le.list();return B.length?B.forEach(fe=>fe(T,M,D)):console.error(T),Promise.reject(T)}function rn(){return ye&&c.value!==bn?Promise.resolve():new Promise((T,M)=>{Pr.add([T,M])})}function An(T){return ye||(ye=!T,vs(),Pr.list().forEach(([M,D])=>T?D(T):M()),Pr.reset()),T}function Ut(T,M,D,B){const{scrollBehavior:fe}=t;if(!xr||!fe)return Promise.resolve();const f=!D&&lw(Jh(T.fullPath,0))||(B||!D)&&history.state&&history.state.scroll||null;return hp().then(()=>fe(T,M,f)).then(p=>p&&aw(p)).catch(p=>de(p,T,M))}const dt=T=>s.go(T);let Sr;const Cr=new Set,$i={currentRoute:c,listening:!0,addRoute:m,removeRoute:E,hasRoute:v,getRoutes:w,resolve:S,options:t,push:k,replace:le,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:rn,install(T){const M=this;T.component("RouterLink",Cn),T.component("RouterView",Jp),T.config.globalProperties.$router=M,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Ue(c)}),xr&&!Sr&&c.value===bn&&(Sr=!0,k(s.location).catch(fe=>{}));const D={};for(const fe in bn)Object.defineProperty(D,fe,{get:()=>c.value[fe],enumerable:!0});T.provide(Wl,M),T.provide(Qp,np(D)),T.provide(qc,c);const B=T.unmount;Cr.add(T),T.unmount=function(){Cr.delete(T),Cr.size<1&&(l=bn,Lt&&Lt(),Lt=null,c.value=bn,Sr=!1,ye=!1),B()}}};function Ye(T){return T.reduce((M,D)=>M.then(()=>yt(D)),Promise.resolve())}return $i}function Jw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Xr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Xr(l,c))||s.push(c))}return[n,r,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Xw;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const E=l<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zw=function(t){const e=Yp(t);return Xp.encodeByteArray(e,!0)},So=function(t){return Zw(t).replace(/\./g,"")},Zp=function(t){try{return Xp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=()=>eT().__FIREBASE_DEFAULTS__,nT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zp(t[1]);return e&&JSON.parse(e)},pa=()=>{try{return tT()||nT()||rT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},em=t=>{var e,n;return(n=(e=pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tm=t=>{const e=em(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},nm=()=>{var t;return(t=pa())===null||t===void 0?void 0:t.config},rm=t=>{var e;return(e=pa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[So(JSON.stringify(n)),So(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function oT(){var t;const e=(t=pa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lT(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uT(){try{return typeof indexedDB=="object"}catch{return!1}}function hT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dT,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?fT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new nn(s,a,r)}}function fT(t,e){return t.replace(pT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const pT=/\{\$([^}]+)}/g;function mT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Co(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ud(i)&&ud(o)){if(!Co(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ud(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gT(t,e){const n=new _T(t,e);return n.subscribe.bind(n)}class _T{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=nc),s.error===void 0&&(s.error=nc),s.complete===void 0&&(s.complete=nc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){return t&&t._delegate?t._delegate:t}class qn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wT(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ET(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ET(t){return t===Zn?void 0:t}function wT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const IT={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},AT=se.INFO,RT={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},bT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=RT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gl{constructor(e){this.name=e,this._logLevel=AT,this._logHandler=bT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const PT=(t,e)=>e.some(n=>t instanceof n);let hd,dd;function ST(){return hd||(hd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CT(){return dd||(dd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const im=new WeakMap,Hc=new WeakMap,om=new WeakMap,rc=new WeakMap,Ql=new WeakMap;function kT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Fn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&im.set(n,t)}).catch(()=>{}),Ql.set(e,t),e}function OT(t){if(Hc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hc.set(t,e)}let zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||om.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NT(t){zc=t(zc)}function DT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sc(this),e,...n);return om.set(r,e.sort?e.sort():[e]),Fn(r)}:CT().includes(t)?function(...e){return t.apply(sc(this),e),Fn(im.get(this))}:function(...e){return Fn(t.apply(sc(this),e))}}function xT(t){return typeof t=="function"?DT(t):(t instanceof IDBTransaction&&OT(t),PT(t,ST())?new Proxy(t,zc):t)}function Fn(t){if(t instanceof IDBRequest)return kT(t);if(rc.has(t))return rc.get(t);const e=xT(t);return e!==t&&(rc.set(t,e),Ql.set(e,t)),e}const sc=t=>Ql.get(t);function VT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Fn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Fn(o.result),c.oldVersion,c.newVersion,Fn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const MT=["get","getKey","getAll","getAllKeys","count"],LT=["put","add","delete","clear"],ic=new Map;function fd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ic.get(e))return ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=LT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||MT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ic.set(e,i),i}NT(t=>({...t,get:(e,n,r)=>fd(e,n)||t.get(e,n,r),has:(e,n)=>!!fd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(FT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function FT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kc="@firebase/app",pd="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Gl("@firebase/app"),BT="@firebase/app-compat",$T="@firebase/analytics-compat",jT="@firebase/analytics",qT="@firebase/app-check-compat",HT="@firebase/app-check",zT="@firebase/auth",KT="@firebase/auth-compat",WT="@firebase/database",GT="@firebase/database-compat",QT="@firebase/functions",JT="@firebase/functions-compat",YT="@firebase/installations",XT="@firebase/installations-compat",ZT="@firebase/messaging",eI="@firebase/messaging-compat",tI="@firebase/performance",nI="@firebase/performance-compat",rI="@firebase/remote-config",sI="@firebase/remote-config-compat",iI="@firebase/storage",oI="@firebase/storage-compat",aI="@firebase/firestore",cI="@firebase/firestore-compat",lI="firebase",uI="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="[DEFAULT]",hI={[Kc]:"fire-core",[BT]:"fire-core-compat",[jT]:"fire-analytics",[$T]:"fire-analytics-compat",[HT]:"fire-app-check",[qT]:"fire-app-check-compat",[zT]:"fire-auth",[KT]:"fire-auth-compat",[WT]:"fire-rtdb",[GT]:"fire-rtdb-compat",[QT]:"fire-fn",[JT]:"fire-fn-compat",[YT]:"fire-iid",[XT]:"fire-iid-compat",[ZT]:"fire-fcm",[eI]:"fire-fcm-compat",[tI]:"fire-perf",[nI]:"fire-perf-compat",[rI]:"fire-rc",[sI]:"fire-rc-compat",[iI]:"fire-gcs",[oI]:"fire-gcs-compat",[aI]:"fire-fst",[cI]:"fire-fst-compat","fire-js":"fire-js",[lI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new Map,Gc=new Map;function dI(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pr(t){const e=t.name;if(Gc.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;Gc.set(e,t);for(const n of ko.values())dI(n,t);return!0}function ma(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bn=new Ei("app","Firebase",fI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=uI;function am(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});if(n||(n=nm()),!n)throw Bn.create("no-options");const i=ko.get(s);if(i){if(Co(n,i.options)&&Co(r,i.config))return i;throw Bn.create("duplicate-app",{appName:s})}const o=new TT(s);for(const c of Gc.values())o.addComponent(c);const a=new pI(n,r,o);return ko.set(s,a),a}function Jl(t=Wc){const e=ko.get(t);if(!e&&t===Wc&&nm())return am();if(!e)throw Bn.create("no-app",{appName:t});return e}function Gt(t,e,n){var r;let s=(r=hI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(a.join(" "));return}pr(new qn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI="firebase-heartbeat-database",gI=1,ei="firebase-heartbeat-store";let oc=null;function cm(){return oc||(oc=VT(mI,gI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),oc}async function _I(t){try{return await(await cm()).transaction(ei).objectStore(ei).get(lm(t))}catch(e){if(e instanceof nn)fr.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function md(t,e){try{const r=(await cm()).transaction(ei,"readwrite");await r.objectStore(ei).put(e,lm(t)),await r.done}catch(n){if(n instanceof nn)fr.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(r.message)}}}function lm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=1024,vI=30*24*60*60*1e3;class EI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=vI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gd(),{heartbeatsToSend:n,unsentEntries:r}=wI(this._heartbeatsCache.heartbeats),s=So(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function gd(){return new Date().toISOString().substring(0,10)}function wI(t,e=yI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_d(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_d(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uT()?hT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await _I(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return md(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _d(t){return So(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){pr(new qn("platform-logger",e=>new UT(e),"PRIVATE")),pr(new qn("heartbeat",e=>new EI(e),"PRIVATE")),Gt(Kc,pd,t),Gt(Kc,pd,"esm2017"),Gt("fire-js","")}II("");function Yl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function yd(t){return t!==void 0&&t.enterprise!==void 0}class AI{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function um(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RI=um,hm=new Ei("auth","Firebase",um());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Gl("@firebase/auth");function bI(t,...e){Oo.logLevel<=se.WARN&&Oo.warn(`Auth (${wr}): ${t}`,...e)}function po(t,...e){Oo.logLevel<=se.ERROR&&Oo.error(`Auth (${wr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,...e){throw Xl(t,...e)}function Qt(t,...e){return Xl(t,...e)}function PI(t,e,n){const r=Object.assign(Object.assign({},RI()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function Xl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hm.create(t,...e)}function W(t,e,...n){if(!t)throw Xl(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw po(e),new Error(e)}function mn(t,e){t||cn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SI(){return vd()==="http:"||vd()==="https:"}function vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SI()||aT()||"connection"in navigator)?navigator.onLine:!0}function kI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=iT()||cT()}get(){return CI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new Ti(3e4,6e4);function Tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wn(t,e,n,r,s={}){return fm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=wi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),dm.fetch()(pm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function fm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OI),e);try{const s=new DI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gi(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw PI(t,u,l);Vt(t,u)}}catch(s){if(s instanceof nn)throw s;Vt(t,"network-request-failed",{message:String(s)})}}async function Ii(t,e,n,r,s={}){const i=await Wn(t,e,n,r,s);return"mfaPendingCredential"in i&&Vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function pm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Zl(t.config,s):`${t.config.apiScheme}://${s}`}class DI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),NI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Qt(t,e,r);return s.customData._tokenResponse=n,s}async function xI(t,e){return Wn(t,"GET","/v2/recaptchaConfig",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(t,e){return Wn(t,"POST","/v1/accounts:delete",e)}async function MI(t,e){return Wn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LI(t,e=!1){const n=Me(t),r=await n.getIdToken(e),s=eu(r);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fs(ac(s.auth_time)),issuedAtTime:Fs(ac(s.iat)),expirationTime:Fs(ac(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ac(t){return Number(t)*1e3}function eu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return po("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zp(n);return s?JSON.parse(s):(po("Failed to decode base64 JWT payload"),null)}catch(s){return po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function UI(t){const e=eu(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&FI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(t){var e;const n=t.auth,r=await t.getIdToken(),s=await es(t,MI(n,{idToken:r}));W(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qI(i.providerUserInfo):[],a=jI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new mm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function $I(t){const e=Me(t);await No(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qI(t){return t.map(e=>{var{providerId:n}=e,r=Yl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(t,e){const n=await fm(t,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=pm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):UI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await HI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ti;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Yl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new BI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await es(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LI(this,e)}reload(){return $I(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await No(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await es(this,VI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:k,isAnonymous:le,providerData:$,stsTokenManager:ie}=n;W(L&&ie,e,"internal-error");const _e=ti.fromJSON(this.name,ie);W(typeof L=="string",e,"internal-error"),Pn(h,e.name),Pn(d,e.name),W(typeof k=="boolean",e,"internal-error"),W(typeof le=="boolean",e,"internal-error"),Pn(m,e.name),Pn(E,e.name),Pn(w,e.name),Pn(v,e.name),Pn(S,e.name),Pn(O,e.name);const yt=new lr({uid:L,auth:e,email:d,emailVerified:k,displayName:h,isAnonymous:le,photoURL:E,phoneNumber:m,tenantId:w,stsTokenManager:_e,createdAt:S,lastLoginAt:O});return $&&Array.isArray($)&&(yt.providerData=$.map(at=>Object.assign({},at))),v&&(yt._redirectEventId=v),yt}static async _fromIdTokenResponse(e,n,r=!1){const s=new ti;s.updateFromServerResponse(n);const i=new lr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await No(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=new Map;function ln(t){mn(t instanceof Function,"Expected a class definition");let e=Ed.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ed.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gm.type="NONE";const wd=gm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Hr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hr(ln(wd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ln(wd);const o=mo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=lr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Hr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Hr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_m(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wm(e))return"Blackberry";if(Tm(e))return"Webos";if(tu(e))return"Safari";if((e.includes("chrome/")||ym(e))&&!e.includes("edge/"))return"Chrome";if(Em(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _m(t=it()){return/firefox\//i.test(t)}function tu(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ym(t=it()){return/crios\//i.test(t)}function vm(t=it()){return/iemobile/i.test(t)}function Em(t=it()){return/android/i.test(t)}function wm(t=it()){return/blackberry/i.test(t)}function Tm(t=it()){return/webos/i.test(t)}function ga(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zI(t=it()){var e;return ga(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function KI(){return lT()&&document.documentMode===10}function Im(t=it()){return ga(t)||Em(t)||Tm(t)||wm(t)||/windows phone/i.test(t)||vm(t)}function WI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t,e=[]){let n;switch(t){case"Browser":n=Td(it());break;case"Worker":n=`${Td(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(t,e={}){return Wn(t,"GET","/v2/passwordPolicy",Tr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=6;class YI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:JI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Id(this),this.idTokenSubscription=new Id(this),this.beforeStateQueue=new GI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await No(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Me(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await QI(this),n=new YI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Am(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ir(t){return Me(t)}class Id{constructor(e){this.auth=e,this.observer=null,this.addObserver=gT(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Rm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ZI().appendChild(r)})}function e0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const t0="https://www.google.com/recaptcha/enterprise.js?render=",n0="recaptcha-enterprise",r0="NO_RECAPTCHA";class s0{constructor(e){this.type=n0,this.auth=Ir(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{xI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new AI(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;yd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(r0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&yd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Rm(t0+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Do(t,e,n,r=!1){const s=new s0(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t,e){const n=ma(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Co(i,e??{}))return s;Vt(s,"already-initialized")}return n.initialize({options:e})}function o0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function a0(t,e,n){const r=Ir(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=bm(e),{host:o,port:a}=c0(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||l0()}function bm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function c0(t){const e=bm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ad(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ad(o)}}}function Ad(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function l0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function u0(t,e){return Wn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cc(t,e){return Ii(t,"POST","/v1/accounts:signInWithPassword",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h0(t,e){return Ii(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}async function d0(t,e){return Ii(t,"POST","/v1/accounts:signInWithEmailLink",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends nu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ni(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ni(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await Do(e,r,"signInWithPassword");return cc(e,s)}else return cc(e,r).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Do(e,r,"signInWithPassword");return cc(e,i)}else return Promise.reject(s)});case"emailLink":return h0(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return u0(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return d0(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t,e){return Ii(t,"POST","/v1/accounts:signInWithIdp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="http://localhost";class mr extends nu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Yl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zr(e,n)}buildRequest(){const e={requestUri:f0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function m0(t){const e=Cs(ks(t)).link,n=e?Cs(ks(e)).deep_link_id:null,r=Cs(ks(t)).deep_link_id;return(r?Cs(ks(r)).link:null)||r||n||e||t}class ru{constructor(e){var n,r,s,i,o,a;const c=Cs(ks(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=p0((s=c.mode)!==null&&s!==void 0?s:null);W(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=m0(e);try{return new ru(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.providerId=ds.PROVIDER_ID}static credential(e,n){return ni._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ru.parseLink(n);return W(r,"argument-error"),ni._fromEmailAndCode(e,r.code,r.tenantId)}}ds.PROVIDER_ID="password";ds.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ds.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Pm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ai{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Ai{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Ai{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(t,e){return Ii(t,"POST","/v1/accounts:signUp",Tr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await lr._fromIdTokenResponse(e,r,s),o=Rd(r);return new gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Rd(r);return new gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Rd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xo(e,n,r,s)}}function Sm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(t,i,e,r):i})}async function g0(t,e,n=!1){const r=await es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _0(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await es(t,Sm(r,s,e,t),n);W(i.idToken,r,"internal-error");const o=eu(i.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(t,e,n=!1){const r="signIn",s=await Sm(t,r,e),i=await gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function y0(t,e){return Cm(Ir(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(t){const e=Ir(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function v0(t,e,n){var r;const s=Ir(t),i={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=s._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Do(s,i,"signUpPassword");o=lc(s,l)}else o=lc(s,i).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Do(s,i,"signUpPassword");return lc(s,u)}throw l});const a=await o.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&km(t),l}),c=await gr._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function E0(t,e,n){return y0(Me(t),ds.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&km(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(t,e){return Wn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Me(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await es(r,w0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function I0(t,e,n,r){return Me(t).onIdTokenChanged(e,n,r)}function A0(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function su(t,e,n,r){return Me(t).onAuthStateChanged(e,n,r)}function bd(t){return Me(t).signOut()}const Vo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vo,"1"),this.storage.removeItem(Vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(){const t=it();return tu(t)||ga(t)}const b0=1e3,P0=10;class Nm extends Om{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=R0()&&WI(),this.fallbackToPolling=Im(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);KI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,P0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},b0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nm.type="LOCAL";const S0=Nm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm extends Om{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dm.type="SESSION";const xm=Dm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _a(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await C0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_a.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=iu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function O0(t){Jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function N0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function D0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x0(){return Vm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="firebaseLocalStorageDb",V0=1,Mo="firebaseLocalStorage",Lm="fbase_key";class Ri{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ya(t,e){return t.transaction([Mo],e?"readwrite":"readonly").objectStore(Mo)}function M0(){const t=indexedDB.deleteDatabase(Mm);return new Ri(t).toPromise()}function Jc(){const t=indexedDB.open(Mm,V0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mo,{keyPath:Lm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mo)?e(r):(r.close(),await M0(),e(await Jc()))})})}async function Pd(t,e,n){const r=ya(t,!0).put({[Lm]:e,value:n});return new Ri(r).toPromise()}async function L0(t,e){const n=ya(t,!1).get(e),r=await new Ri(n).toPromise();return r===void 0?null:r.value}function Sd(t,e){const n=ya(t,!0).delete(e);return new Ri(n).toPromise()}const U0=800,F0=3;class Um{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>F0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_a._getInstance(x0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await N0(),!this.activeServiceWorker)return;this.sender=new k0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||D0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jc();return await Pd(e,Vo,"1"),await Sd(e,Vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>L0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ya(s,!1).getAll();return new Ri(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),U0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Um.type="LOCAL";const B0=Um;new Ti(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t,e){return e?ln(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou extends nu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function j0(t){return Cm(t.auth,new ou(t),t.bypassAuthState)}function q0(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),_0(n,new ou(t),t.bypassAuthState)}async function H0(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),g0(n,new ou(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return j0;case"linkViaPopup":case"linkViaRedirect":return H0;case"reauthViaPopup":case"reauthViaRedirect":return q0;default:Vt(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new Ti(2e3,1e4);class Ur extends Fm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,z0.get())};e()}}Ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="pendingRedirect",go=new Map;class W0 extends Fm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const r=await G0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function G0(t,e){const n=Y0(e),r=J0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Q0(t,e){go.set(t._key(),e)}function J0(t){return ln(t._redirectPersistence)}function Y0(t){return mo(K0,t.config.apiKey,t.name)}async function X0(t,e,n=!1){const r=Ir(t),s=$0(r,e),o=await new W0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=10*60*1e3;class eA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cd(e))}saveEventToCache(e){this.cachedEventUids.add(Cd(e)),this.lastProcessedEventTime=Date.now()}}function Cd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e={}){return Wn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sA=/^https?/;async function iA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nA(t);for(const n of e)try{if(oA(n))return}catch{}Vt(t,"unauthorized-domain")}function oA(t){const e=Qc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sA.test(n))return!1;if(rA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=new Ti(3e4,6e4);function kd(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cA(t){return new Promise((e,n)=>{var r,s,i;function o(){kd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kd(),n(Qt(t,"network-request-failed"))},timeout:aA.get()})}if(!((s=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Jt().gapi)===null||i===void 0)&&i.load)o();else{const a=e0("iframefcb");return Jt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},Rm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw _o=null,e})}let _o=null;function lA(t){return _o=_o||cA(t),_o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=new Ti(5e3,15e3),hA="__/auth/iframe",dA="emulator/auth/iframe",fA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mA(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zl(e,dA):`https://${t.config.authDomain}/${hA}`,r={apiKey:e.apiKey,appName:t.name,v:wr},s=pA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wi(r).slice(1)}`}async function gA(t){const e=await lA(t),n=Jt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:mA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),a=Jt().setTimeout(()=>{i(o)},uA.get());function c(){Jt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yA=500,vA=600,EA="_blank",wA="http://localhost";class Od{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TA(t,e,n,r=yA,s=vA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_A),{width:r.toString(),height:s.toString(),top:i,left:o}),l=it().toLowerCase();n&&(a=ym(l)?EA:n),_m(l)&&(e=e||wA,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,E])=>`${d}${m}=${E},`,"");if(zI(l)&&a!=="_self")return IA(e||"",a),new Od(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Od(h)}function IA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="__/auth/handler",RA="emulator/auth/handler",bA=encodeURIComponent("fac");async function Nd(t,e,n,r,s,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:s};if(e instanceof Pm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Ai){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${bA}=${encodeURIComponent(c)}`:"";return`${PA(t)}?${wi(a).slice(1)}${l}`}function PA({config:t}){return t.emulator?Zl(t,RA):`https://${t.authDomain}/${AA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="webStorageSupport";class SA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xm,this._completeRedirectFn=X0,this._overrideRedirectResult=Q0}async _openPopup(e,n,r,s){var i;mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Nd(e,n,r,Qc(),s);return TA(e,o,iu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Nd(e,n,r,Qc(),s);return O0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gA(e),r=new eA(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uc,{type:uc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[uc];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Im()||tu()||ga()}}const CA=SA;var Dd="@firebase/auth",xd="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function NA(t){pr(new qn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Am(t)},l=new XI(r,s,i,c);return o0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pr(new qn("auth-internal",e=>{const n=Ir(e.getProvider("auth").getImmediate());return(r=>new kA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Dd,xd,OA(t)),Gt(Dd,xd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=5*60,xA=rm("authIdTokenMaxAge")||DA;let Vd=null;const VA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xA)return;const s=n==null?void 0:n.token;Vd!==s&&(Vd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function MA(t=Jl()){const e=ma(t,"auth");if(e.isInitialized())return e.getImmediate();const n=i0(t,{popupRedirectResolver:CA,persistence:[B0,S0,xm]}),r=rm("authTokenSyncURL");if(r){const i=VA(r);A0(n,i,()=>i(n.currentUser)),I0(n,o=>i(o))}const s=em("auth");return s&&a0(n,`http://${s}`),n}NA("Browser");var LA="firebase",UA="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gt(LA,UA,"app");const FA={apiKey:"AIzaSyA4jqC8aoZClYtYFUVo27H7rP7nzg3M8fY",authDomain:"student-visit-marker.firebaseapp.com",projectId:"student-visit-marker",storageBucket:"student-visit-marker.appspot.com",messagingSenderId:"324725378707",appId:"1:324725378707:web:7ee388b9597138c9c6c766",measurementId:"G-KJE36VKVSW"},au=()=>am(FA);au();const dn=MA();new an;const $m=new Set,BA=t=>{$m.add(t),t(dn.currentUser)},Yc=t=>{$m.forEach(e=>{e(t)})},IN=(t,e,n)=>v0(dn,e,n).then(async r=>(await T0(r.user,{displayName:t}),Yc(r.user),r)),AN=(t,e)=>E0(dn,t,e),$A=()=>{const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const n=t[e],r=n.indexOf("="),s=r>-1?n.substr(0,r):n;document.cookie=s+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT"}return localStorage.clear(),bd(dn).then(()=>{if(dn.currentUser)return bd(dn)})};su(dn,t=>{Yc(t||void 0)});const Md=(t,e,n)=>{const r=su(dn,s=>{if(s){n(),r();return}n({name:"unauthorized"}),r()})},En=t=>{const e=su(dn,n=>{t(n),e()})};var jA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,cu=cu||{},G=jA||self;function va(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function bi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function qA(t){return Object.prototype.hasOwnProperty.call(t,hc)&&t[hc]||(t[hc]=++HA)}var hc="closure_uid_"+(1e9*Math.random()>>>0),HA=0;function zA(t,e,n){return t.call.apply(t.bind,arguments)}function KA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=zA:rt=KA,rt.apply(null,arguments)}function Qi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function qe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Gn(){this.s=this.s,this.o=this.o}var WA=0;Gn.prototype.s=!1;Gn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),WA!=0)&&qA(this)};Gn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function lu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ld(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(va(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function st(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var GA=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",()=>{},e),G.removeEventListener("test",()=>{},e)}catch{}return t}();function ri(t){return/^[\s\xa0]*$/.test(t)}function Ea(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function Ht(t){return Ea().indexOf(t)!=-1}function uu(t){return uu[" "](t),t}uu[" "]=function(){};function QA(t,e){var n=$R;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var JA=Ht("Opera"),ts=Ht("Trident")||Ht("MSIE"),qm=Ht("Edge"),Xc=qm||ts,Hm=Ht("Gecko")&&!(Ea().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge"))&&!(Ht("Trident")||Ht("MSIE"))&&!Ht("Edge"),YA=Ea().toLowerCase().indexOf("webkit")!=-1&&!Ht("Edge");function zm(){var t=G.document;return t?t.documentMode:void 0}var Zc;e:{var dc="",fc=function(){var t=Ea();if(Hm)return/rv:([^\);]+)(\)|;)/.exec(t);if(qm)return/Edge\/([\d\.]+)/.exec(t);if(ts)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(YA)return/WebKit\/(\S+)/.exec(t);if(JA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fc&&(dc=fc?fc[1]:""),ts){var pc=zm();if(pc!=null&&pc>parseFloat(dc)){Zc=String(pc);break e}}Zc=dc}var el;if(G.document&&ts){var Ud=zm();el=Ud||parseInt(Zc,10)||void 0}else el=void 0;var XA=el;function si(t,e){if(st.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Hm){e:{try{uu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ZA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&si.$.h.call(this)}}qe(si,st);var ZA={2:"touch",3:"pen",4:"mouse"};si.prototype.h=function(){si.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pi="closure_listenable_"+(1e6*Math.random()|0),eR=0;function tR(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++eR,this.fa=this.ia=!1}function wa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function hu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Km(t){const e={};for(const n in t)e[n]=t[n];return e}const Fd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wm(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Fd.length;i++)n=Fd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ta(t){this.src=t,this.g={},this.h=0}Ta.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=nl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new tR(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function tl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=jm(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(wa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function nl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var du="closure_lm_"+(1e6*Math.random()|0),mc={};function Gm(t,e,n,r,s){if(r&&r.once)return Jm(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Gm(t,e[i],n,r,s);return null}return n=mu(n),t&&t[Pi]?t.O(e,n,bi(r)?!!r.capture:!!r,s):Qm(t,e,n,!1,r,s)}function Qm(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=bi(s)?!!s.capture:!!s,a=pu(t);if(a||(t[du]=a=new Ta(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=rR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)GA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Xm(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rR(){function t(n){return e.call(t.src,t.listener,n)}const e=sR;return t}function Jm(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Jm(t,e[i],n,r,s);return null}return n=mu(n),t&&t[Pi]?t.P(e,n,bi(r)?!!r.capture:!!r,s):Qm(t,e,n,!0,r,s)}function Ym(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ym(t,e[i],n,r,s);else r=bi(r)?!!r.capture:!!r,n=mu(n),t&&t[Pi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=nl(i,n,r,s),-1<n&&(wa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=pu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=nl(e,n,r,s)),(n=-1<t?e[t]:null)&&fu(n))}function fu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Pi])tl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Xm(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=pu(e))?(tl(n,t),n.h==0&&(n.src=null,e[du]=null)):wa(t)}}}function Xm(t){return t in mc?mc[t]:mc[t]="on"+t}function sR(t,e){if(t.fa)t=!0;else{e=new si(e,this);var n=t.listener,r=t.la||t.src;t.ia&&fu(t),t=n.call(r,e)}return t}function pu(t){return t=t[du],t instanceof Ta?t:null}var gc="__closure_events_fn_"+(1e9*Math.random()>>>0);function mu(t){return typeof t=="function"?t:(t[gc]||(t[gc]=function(e){return t.handleEvent(e)}),t[gc])}function je(){Gn.call(this),this.i=new Ta(this),this.S=this,this.J=null}qe(je,Gn);je.prototype[Pi]=!0;je.prototype.removeEventListener=function(t,e,n,r){Ym(this,t,e,n,r)};function Qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new st(e,t);else if(e instanceof st)e.target=e.target||t;else{var s=e;e=new st(r,t),Wm(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ji(o,r,!0,e)&&s}if(o=e.g=t,s=Ji(o,r,!0,e)&&s,s=Ji(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ji(o,r,!1,e)&&s}je.prototype.N=function(){if(je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)wa(n[r]);delete t.g[e],t.h--}}this.J=null};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ji(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&tl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var gu=G.JSON.stringify;class iR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function oR(){var t=_u;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class aR{constructor(){this.h=this.g=null}add(e,n){const r=Zm.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Zm=new iR(()=>new cR,t=>t.reset());class cR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function uR(t){G.setTimeout(()=>{throw t},0)}let ii,oi=!1,_u=new aR,eg=()=>{const t=G.Promise.resolve(void 0);ii=()=>{t.then(hR)}};var hR=()=>{for(var t;t=oR();){try{t.h.call(t.g)}catch(n){uR(n)}var e=Zm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}oi=!1};function Ia(t,e){je.call(this),this.h=t||1,this.g=e||G,this.j=rt(this.qb,this),this.l=Date.now()}qe(Ia,je);x=Ia.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(yu(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Ia.$.N.call(this),yu(this),delete this.g};function vu(t,e,n){if(typeof t=="function")n&&(t=rt(t,n));else if(t&&typeof t.handleEvent=="function")t=rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function tg(t){t.g=vu(()=>{t.g=null,t.i&&(t.i=!1,tg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dR extends Gn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:tg(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ai(t){Gn.call(this),this.h=t,this.g={}}qe(ai,Gn);var Bd=[];function ng(t,e,n,r){Array.isArray(n)||(n&&(Bd[0]=n.toString()),n=Bd);for(var s=0;s<n.length;s++){var i=Gm(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function rg(t){hu(t.g,function(e,n){this.g.hasOwnProperty(n)&&fu(e)},t),t.g={}}ai.prototype.N=function(){ai.$.N.call(this),rg(this)};ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Aa(){this.g=!0}Aa.prototype.Ea=function(){this.g=!1};function fR(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function pR(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Fr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+gR(t,n)+(r?" "+r:"")})}function mR(t,e){t.info(function(){return"TIMEOUT: "+e})}Aa.prototype.info=function(){};function gR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return gu(n)}catch{return e}}var Ar={},$d=null;function Ra(){return $d=$d||new je}Ar.Ta="serverreachability";function sg(t){st.call(this,Ar.Ta,t)}qe(sg,st);function ci(t){const e=Ra();Qe(e,new sg(e))}Ar.STAT_EVENT="statevent";function ig(t,e){st.call(this,Ar.STAT_EVENT,t),this.stat=e}qe(ig,st);function ht(t){const e=Ra();Qe(e,new ig(e,t))}Ar.Ua="timingevent";function og(t,e){st.call(this,Ar.Ua,t),this.size=e}qe(og,st);function Si(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var ba={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ag={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Eu(){}Eu.prototype.h=null;function jd(t){return t.h||(t.h=t.i())}function cg(){}var Ci={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function wu(){st.call(this,"d")}qe(wu,st);function Tu(){st.call(this,"c")}qe(Tu,st);var rl;function Pa(){}qe(Pa,Eu);Pa.prototype.g=function(){return new XMLHttpRequest};Pa.prototype.i=function(){return{}};rl=new Pa;function ki(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ai(this),this.P=_R,t=Xc?125:void 0,this.V=new Ia(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new lg}function lg(){this.i=null,this.g="",this.h=!1}var _R=45e3,sl={},Lo={};x=ki.prototype;x.setTimeout=function(t){this.P=t};function il(t,e,n){t.L=1,t.v=Ca(gn(e)),t.s=n,t.S=!0,ug(t,null)}function ug(t,e){t.G=Date.now(),Oi(t),t.A=gn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),yg(n.i,"t",r),t.C=0,n=t.l.J,t.h=new lg,t.g=Fg(t.l,n?e:null,!t.s),0<t.O&&(t.M=new dR(rt(t.Pa,t,t.g),t.O)),ng(t.U,t.g,"readystatechange",t.nb),e=t.I?Km(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ci(),fR(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&zt(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=zt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Xc||this.g&&(this.h.h||this.g.ja()||Kd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?ci(3):ci(2)),Sa(this);var n=this.g.da();this.ca=n;t:if(hg(this)){var r=Kd(this.g);t="";var s=r.length,i=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),Bs(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,pR(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ri(a)){var l=a;break t}}l=null}if(n=l)Fr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ol(this,n);else{this.i=!1,this.o=3,ht(12),sr(this),Bs(this);break e}}this.S?(dg(this,u,o),Xc&&this.i&&u==3&&(ng(this.U,this.V,"tick",this.mb),this.V.start())):(Fr(this.j,this.m,o,null),ol(this,o)),u==4&&sr(this),this.i&&!this.J&&(u==4?Vg(this.l,this):(this.i=!1,Oi(this)))}else UR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),sr(this),Bs(this)}}}catch{}finally{}};function hg(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function dg(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=yR(t,n),s==Lo){e==4&&(t.o=4,ht(14),r=!1),Fr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==sl){t.o=4,ht(15),Fr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Fr(t.j,t.m,s,null),ol(t,s);hg(t)&&s!=Lo&&s!=sl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Su(e),e.M=!0,ht(11))):(Fr(t.j,t.m,n,"[Invalid Chunked Response]"),sr(t),Bs(t))}x.mb=function(){if(this.g){var t=zt(this.g),e=this.g.ja();this.C<e.length&&(Sa(this),dg(this,t,e),this.i&&t!=4&&Oi(this))}};function yR(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Lo:(n=Number(e.substring(n,r)),isNaN(n)?sl:(r+=1,r+n>e.length?Lo:(e=e.slice(r,r+n),t.C=r+n,e)))}x.cancel=function(){this.J=!0,sr(this)};function Oi(t){t.Y=Date.now()+t.P,fg(t,t.P)}function fg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Si(rt(t.lb,t),e)}function Sa(t){t.B&&(G.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(mR(this.j,this.A),this.L!=2&&(ci(),ht(17)),sr(this),this.o=2,Bs(this)):fg(this,this.Y-t)};function Bs(t){t.l.H==0||t.J||Vg(t.l,t)}function sr(t){Sa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,yu(t.V),rg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ol(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||al(n.i,t))){if(!t.K&&al(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Bo(n),Da(n);else break e;Pu(n),ht(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Si(rt(n.ib,n),6e3));if(1>=wg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ir(n,11)}else if((t.K||n.g==t)&&Bo(n),!ri(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const E=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Iu(i,i.h),i.h=null))}if(r.F){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Te(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Ug(r,r.J?r.pa:null,r.Y),o.K){Tg(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Sa(a),Oi(a)),r.g=o}else Dg(r);0<n.j.length&&xa(n)}else l[0]!="stop"&&l[0]!="close"||ir(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ir(n,7):bu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ci(4)}catch{}}function vR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(va(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ER(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(va(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function pg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(va(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ER(t),r=vR(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var mg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ur(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ur){this.h=t.h,Uo(this,t.j),this.s=t.s,this.g=t.g,Fo(this,t.m),this.l=t.l;var e=t.i,n=new li;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qd(this,n),this.o=t.o}else t&&(e=String(t).match(mg))?(this.h=!1,Uo(this,e[1]||"",!0),this.s=Os(e[2]||""),this.g=Os(e[3]||"",!0),Fo(this,e[4]),this.l=Os(e[5]||"",!0),qd(this,e[6]||"",!0),this.o=Os(e[7]||"")):(this.h=!1,this.i=new li(null,this.h))}ur.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,Hd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,Hd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?AR:IR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,bR)),t.join("")};function gn(t){return new ur(t)}function Uo(t,e,n){t.j=n?Os(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qd(t,e,n){e instanceof li?(t.i=e,PR(t.i,t.h)):(n||(e=Ns(e,RR)),t.i=new li(e,t.h))}function Te(t,e,n){t.i.set(e,n)}function Ca(t){return Te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Os(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,TR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function TR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Hd=/[#\/\?@]/g,IR=/[#\?:]/g,AR=/[#\?]/g,RR=/[#\?@]/g,bR=/#/g;function li(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qn(t){t.g||(t.g=new Map,t.h=0,t.i&&wR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=li.prototype;x.add=function(t,e){Qn(this),this.i=null,t=fs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function gg(t,e){Qn(t),e=fs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _g(t,e){return Qn(t),e=fs(t,e),t.g.has(e)}x.forEach=function(t,e){Qn(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};x.ta=function(){Qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};x.Z=function(t){Qn(this);let e=[];if(typeof t=="string")_g(this,t)&&(e=e.concat(this.g.get(fs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Qn(this),this.i=null,t=fs(this,t),_g(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function yg(t,e,n){gg(t,e),0<n.length&&(t.i=null,t.g.set(fs(t,e),lu(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function fs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function PR(t,e){e&&!t.j&&(Qn(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(gg(this,r),yg(this,s,n))},t)),t.j=e}var SR=class{constructor(t,e){this.g=t,this.map=e}};function vg(t){this.l=t||CR,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var CR=10;function Eg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wg(t){return t.h?1:t.g?t.g.size:0}function al(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Iu(t,e){t.g?t.g.add(e):t.h=e}function Tg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vg.prototype.cancel=function(){if(this.i=Ig(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ig(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return lu(t.i)}var kR=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function OR(){this.g=new kR}function NR(t,e,n){const r=n||"";try{pg(t,function(s,i){let o=s;bi(s)&&(o=gu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function DR(t,e){const n=new Aa;if(G.Image){const r=new Image;r.onload=Qi(Yi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Qi(Yi,n,r,"TestLoadImage: error",!1,e),r.onabort=Qi(Yi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Qi(Yi,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Yi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ka(t){this.l=t.ec||null,this.j=t.ob||!1}qe(ka,Eu);ka.prototype.g=function(){return new Oa(this.l,this.j)};ka.prototype.i=function(t){return function(){return t}}({});function Oa(t,e){je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Au,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}qe(Oa,je);var Au=0;x=Oa.prototype;x.open=function(t,e){if(this.readyState!=Au)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ui(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ni(this)),this.readyState=Au};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ag(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Ag(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ni(this):ui(this),this.readyState==3&&Ag(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Ni(this))};x.Ya=function(t){this.g&&(this.response=t,Ni(this))};x.ka=function(){this.g&&Ni(this)};function Ni(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ui(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ui(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var xR=G.JSON.parse;function Pe(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rg,this.L=this.M=!1}qe(Pe,je);var Rg="",VR=/^https?$/i,MR=["POST","PUT"];x=Pe.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():rl.g(),this.C=this.u?jd(this.u):jd(rl),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){zd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=G.FormData&&t instanceof G.FormData,!(0<=jm(MR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Sg(this),0<this.B&&((this.L=LR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=vu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){zd(this,i)}};function LR(t){return ts&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof cu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function zd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bg(t),Na(t)}function bg(t){t.F||(t.F=!0,Qe(t,"complete"),Qe(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Na(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Na(this,!0)),Pe.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?Pg(this):this.kb())};x.kb=function(){Pg(this)};function Pg(t){if(t.h&&typeof cu<"u"&&(!t.C[1]||zt(t)!=4||t.da()!=2)){if(t.v&&zt(t)==4)vu(t.La,0,t);else if(Qe(t,"readystatechange"),zt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(mg)[1]||null;!s&&G.self&&G.self.location&&(s=G.self.location.protocol.slice(0,-1)),r=!VR.test(s?s.toLowerCase():"")}n=r}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var i=2<zt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",bg(t)}}finally{Na(t)}}}}function Na(t,e){if(t.g){Sg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function Sg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function zt(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),xR(e)}};function Kd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Rg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function UR(t){const e={};t=(t.g&&2<=zt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ri(t[r]))continue;var n=lR(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}nR(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Cg(t){let e="";return hu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Ru(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Cg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Te(t,e,n))}function Is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function kg(t){this.Ga=0,this.j=[],this.l=new Aa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Is("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Is("baseRetryDelayMs",5e3,t),this.hb=Is("retryDelaySeedMs",1e4,t),this.eb=Is("forwardChannelMaxRetries",2,t),this.xa=Is("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new vg(t&&t.concurrentRequestLimit),this.Ja=new OR,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=kg.prototype;x.ra=8;x.H=1;function bu(t){if(Og(t),t.H==3){var e=t.W++,n=gn(t.I);if(Te(n,"SID",t.K),Te(n,"RID",e),Te(n,"TYPE","terminate"),Di(t,n),e=new ki(t,t.l,e),e.L=2,e.v=Ca(gn(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=Fg(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Oi(e)}Lg(t)}function Da(t){t.g&&(Su(t),t.g.cancel(),t.g=null)}function Og(t){Da(t),t.u&&(G.clearTimeout(t.u),t.u=null),Bo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function xa(t){if(!Eg(t.i)&&!t.m){t.m=!0;var e=t.Na;ii||eg(),oi||(ii(),oi=!0),_u.add(e,t),t.C=0}}function FR(t,e){return wg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Si(rt(t.Na,t,e),Mg(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ki(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Km(i),Wm(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Ng(this,s,e),n=gn(this.I),Te(n,"RID",t),Te(n,"CVER",22),this.F&&Te(n,"X-HTTP-Session-Id",this.F),Di(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Cg(i)))+"&"+e:this.o&&Ru(n,this.o,i)),Iu(this.i,s),this.bb&&Te(n,"TYPE","init"),this.P?(Te(n,"$req",e),Te(n,"SID","null"),s.aa=!0,il(s,n,null)):il(s,n,e),this.H=2}}else this.H==3&&(t?Wd(this,t):this.j.length==0||Eg(this.i)||Wd(this))};function Wd(t,e){var n;e?n=e.m:n=t.W++;const r=gn(t.I);Te(r,"SID",t.K),Te(r,"RID",n),Te(r,"AID",t.V),Di(t,r),t.o&&t.s&&Ru(r,t.o,t.s),n=new ki(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ng(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Iu(t.i,n),il(n,r,e)}function Di(t,e){t.na&&hu(t.na,function(n,r){Te(e,r,n)}),t.h&&pg({},function(n,r){Te(e,r,n)})}function Ng(t,e,n){n=Math.min(t.j.length,n);var r=t.h?rt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{NR(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Dg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ii||eg(),oi||(ii(),oi=!0),_u.add(e,t),t.A=0}}function Pu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Si(rt(t.Ma,t),Mg(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,xg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Si(rt(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ht(10),Da(this),xg(this))};function Su(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function xg(t){t.g=new ki(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=gn(t.wa);Te(e,"RID","rpc"),Te(e,"SID",t.K),Te(e,"AID",t.V),Te(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Te(e,"TO",t.qa),Te(e,"TYPE","xmlhttp"),Di(t,e),t.o&&t.s&&Ru(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ca(gn(e)),n.s=null,n.S=!0,ug(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Da(this),Pu(this),ht(19))};function Bo(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function Vg(t,e){var n=null;if(t.g==e){Bo(t),Su(t),t.g=null;var r=2}else if(al(t.i,e))n=e.F,Tg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=Ra(),Qe(r,new og(r,n)),xa(t)}else Dg(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(r==1&&FR(t,e)||r==2&&Pu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ir(t,5);break;case 4:ir(t,10);break;case 3:ir(t,6);break;default:ir(t,2)}}}function Mg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ir(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=rt(t.pb,t);n||(n=new ur("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Uo(n,"https"),Ca(n)),DR(n.toString(),r)}else ht(2);t.H=0,t.h&&t.h.za(e),Lg(t),Og(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ht(2)):(this.l.info("Failed to ping google.com"),ht(1))};function Lg(t){if(t.H=0,t.ma=[],t.h){const e=Ig(t.i);(e.length!=0||t.j.length!=0)&&(Ld(t.ma,e),Ld(t.ma,t.j),t.i.i.length=0,lu(t.j),t.j.length=0),t.h.ya()}}function Ug(t,e,n){var r=n instanceof ur?gn(n):new ur(n);if(r.g!="")e&&(r.g=e+"."+r.g),Fo(r,r.m);else{var s=G.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new ur(null);r&&Uo(i,r),e&&(i.g=e),s&&Fo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Te(r,n,e),Te(r,"VER",t.ra),Di(t,r),r}function Fg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Pe(new ka({ob:!0})):new Pe(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function Bg(){}x=Bg.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function $o(){if(ts&&!(10<=Number(XA)))throw Error("Environmental error: no available transport.")}$o.prototype.g=function(t,e){return new _t(t,e)};function _t(t,e){je.call(this),this.g=new kg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ri(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ri(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ps(this)}qe(_t,je);_t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Ug(t,null,t.Y),xa(t)};_t.prototype.close=function(){bu(this.g)};_t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gu(t),t=n);e.j.push(new SR(e.fb++,t)),e.H==3&&xa(e)};_t.prototype.N=function(){this.g.h=null,delete this.j,bu(this.g),delete this.g,_t.$.N.call(this)};function $g(t){wu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}qe($g,wu);function jg(){Tu.call(this),this.status=1}qe(jg,Tu);function ps(t){this.g=t}qe(ps,Bg);ps.prototype.Ba=function(){Qe(this.g,"a")};ps.prototype.Aa=function(t){Qe(this.g,new $g(t))};ps.prototype.za=function(t){Qe(this.g,new jg)};ps.prototype.ya=function(){Qe(this.g,"b")};function BR(){this.blockSize=-1}function Mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}qe(Mt,BR);Mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _c(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Mt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)_c(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){_c(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){_c(this,r),s=0;break}}this.h=s,this.i+=e};Mt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function me(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var $R={};function Cu(t){return-128<=t&&128>t?QA(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function Kt(t){if(isNaN(t)||!isFinite(t))return Kr;if(0>t)return Ke(Kt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=cl;return new me(e,0)}function qg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(qg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Kt(Math.pow(e,8)),r=Kr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Kt(Math.pow(e,i)),r=r.R(i).add(Kt(o))):(r=r.R(n),r=r.add(Kt(o)))}return r}var cl=4294967296,Kr=Cu(0),ll=Cu(1),Gd=Cu(16777216);x=me.prototype;x.ea=function(){if(Et(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:cl+r)*e,e*=cl}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(un(this))return"0";if(Et(this))return"-"+Ke(this).toString(t);for(var e=Kt(Math.pow(t,6)),n=this,r="";;){var s=qo(n,e).g;n=jo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,un(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function un(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Et(t){return t.h==-1}x.X=function(t){return t=jo(this,t),Et(t)?-1:un(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new me(n,~t.h).add(ll)}x.abs=function(){return Et(this)?Ke(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new me(n,n[n.length-1]&-2147483648?-1:0)};function jo(t,e){return t.add(Ke(e))}x.R=function(t){if(un(this)||un(t))return Kr;if(Et(this))return Et(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(Et(t))return Ke(this.R(Ke(t)));if(0>this.X(Gd)&&0>t.X(Gd))return Kt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Xi(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Xi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Xi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Xi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new me(n,0)};function Xi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function As(t,e){this.g=t,this.h=e}function qo(t,e){if(un(e))throw Error("division by zero");if(un(t))return new As(Kr,Kr);if(Et(t))return e=qo(Ke(t),e),new As(Ke(e.g),Ke(e.h));if(Et(e))return e=qo(t,Ke(e)),new As(Ke(e.g),e.h);if(30<t.g.length){if(Et(t)||Et(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ll,r=e;0>=r.X(t);)n=Qd(n),r=Qd(r);var s=Nr(n,1),i=Nr(r,1);for(r=Nr(r,2),n=Nr(n,2);!un(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Nr(r,1),n=Nr(n,1)}return e=jo(t,s.R(e)),new As(s,e)}for(s=Kr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Kt(n),o=i.R(e);Et(o)||0<o.X(t);)n-=r,i=Kt(n),o=i.R(e);un(i)&&(i=ll),s=s.add(i),t=jo(t,o)}return new As(s,t)}x.gb=function(t){return qo(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new me(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new me(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new me(n,this.h^t.h)};function Qd(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new me(n,t.h)}function Nr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new me(s,t.h)}$o.prototype.createWebChannel=$o.prototype.g;_t.prototype.send=_t.prototype.u;_t.prototype.open=_t.prototype.m;_t.prototype.close=_t.prototype.close;ba.NO_ERROR=0;ba.TIMEOUT=8;ba.HTTP_ERROR=6;ag.COMPLETE="complete";cg.EventType=Ci;Ci.OPEN="a";Ci.CLOSE="b";Ci.ERROR="c";Ci.MESSAGE="d";je.prototype.listen=je.prototype.O;Pe.prototype.listenOnce=Pe.prototype.P;Pe.prototype.getLastError=Pe.prototype.Sa;Pe.prototype.getLastErrorCode=Pe.prototype.Ia;Pe.prototype.getStatus=Pe.prototype.da;Pe.prototype.getResponseJson=Pe.prototype.Wa;Pe.prototype.getResponseText=Pe.prototype.ja;Pe.prototype.send=Pe.prototype.ha;Pe.prototype.setWithCredentials=Pe.prototype.Oa;Mt.prototype.digest=Mt.prototype.l;Mt.prototype.reset=Mt.prototype.reset;Mt.prototype.update=Mt.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=Kt;me.fromString=qg;var jR=function(){return new $o},qR=function(){return Ra()},yc=ba,HR=ag,zR=Ar,Jd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Zi=cg,KR=Pe,WR=Mt,Wr=me;const Yd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="10.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Gl("@firebase/firestore");function Rs(){return _r.logLevel}function U(t,...e){if(_r.logLevel<=se.DEBUG){const n=e.map(ku);_r.debug(`Firestore (${ms}): ${t}`,...n)}}function _n(t,...e){if(_r.logLevel<=se.ERROR){const n=e.map(ku);_r.error(`Firestore (${ms}): ${t}`,...n)}}function ns(t,...e){if(_r.logLevel<=se.WARN){const n=e.map(ku);_r.warn(`Firestore (${ms}): ${t}`,...n)}}function ku(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function Ie(t,e){t||Q()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class QR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JR{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new Hg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new Ze(e)}}class YR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new ZR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=tb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function rs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new xe(0,0))}static max(){return new Y(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends hi{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const nb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends hi{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return nb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new z(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new z(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(be.fromString(e))}static fromName(e){return new H(be.fromString(e).popFirst(5))}static empty(){return new H(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new be(e.slice()))}}function rb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Hn(s,H.empty(),e)}function sb(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(Y.min(),H.empty(),-1)}static max(){return new Hn(Y.max(),H.empty(),-1)}}function ib(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ab{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t){if(t.code!==P.FAILED_PRECONDITION||t.message!==ob)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Vi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ou.ae=-1;function Va(t){return t==null}function Ho(t){return t===0&&1/t==-1/0}function cb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ho(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new eo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new eo(this.root,e,this.comparator,!1)}getReverseIterator(){return new eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new eo(this.root,e,this.comparator,!0)}}class eo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zd(this.data.getIterator())}getIteratorFrom(e){return new Zd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Zd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new kt([])}unionWith(e){let n=new Je(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wg("Invalid base64 string: "+i):i}}(e);return new ot(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const lb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=lb.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function yr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Du(t){const e=t.mapValue.fields.__previous_value__;return Nu(e)?Du(e):e}function di(t){const e=zn(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nu(t)?4:hb(t)?9007199254740991:10:Q()}function en(t,e){if(t===e)return!0;const n=vr(t);if(n!==vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=zn(s.timestampValue),a=zn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return yr(s.bytesValue).isEqual(yr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ne(s.doubleValue),a=Ne(i.doubleValue);return o===a?Ho(o)===Ho(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return rs(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Xd(o)!==Xd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!en(o[c],a[c])))return!1;return!0}(t,e);default:return Q()}}function pi(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=vr(t),r=vr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ne(i.integerValue||i.doubleValue),c=Ne(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ef(t.timestampValue,e.timestampValue);case 4:return ef(di(t),di(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const a=yr(i),c=yr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ue(a[l],c[l]);if(u!==0)return u}return ue(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ue(Ne(i.latitude),Ne(o.latitude));return a!==0?a:ue(Ne(i.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=ss(a[l],c[l]);if(u)return u}return ue(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===to.mapValue&&o===to.mapValue)return 0;if(i===to.mapValue)return 1;if(o===to.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ue(c[h],u[h]);if(d!==0)return d;const m=ss(a[c[h]],l[u[h]]);if(m!==0)return m}return ue(c.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function ef(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=zn(t),r=zn(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function is(t){return ul(t)}function ul(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return yr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ul(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ul(n.fields[o])}`;return s+"}"}(t.mapValue):Q()}function hl(t){return!!t&&"integerValue"in t}function xu(t){return!!t&&"arrayValue"in t}function tf(t){return!!t&&"nullValue"in t}function nf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yo(t){return!!t&&"mapValue"in t}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$s(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=$s(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){gs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt($s(this.value))}}function Gg(t){const e=[];return gs(t.fields,(n,r)=>{const s=new Ge([n]);if(yo(r)){const i=Gg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new kt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,Y.min(),Y.min(),Y.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new et(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new et(e,2,n,Y.min(),Y.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Y.min(),Y.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,n){this.position=e,this.inclusive=n}}function rf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n="asc"){this.field=e,this.dir=n}}function db(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{}class De extends Qg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pb(e,n,r):n==="array-contains"?new _b(e,r):n==="in"?new yb(e,r):n==="not-in"?new vb(e,r):n==="array-contains-any"?new Eb(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mb(e,r):new gb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&vr(this.value)===vr(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends Qg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new tn(e,n)}matches(e){return Jg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Jg(t){return t.op==="and"}function Yg(t){return fb(t)&&Jg(t)}function fb(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function dl(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+is(t.value);if(Yg(t))return t.filters.map(e=>dl(e)).join(",");{const e=t.filters.map(n=>dl(n)).join(",");return`${t.op}(${e})`}}function Xg(t,e){return t instanceof De?function(r,s){return s instanceof De&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)}(t,e):t instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Xg(o,s.filters[a]),!0):!1}(t,e):void Q()}function Zg(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${is(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(Zg).join(" ,")+"}"}(t):"Filter"}class pb extends De{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class mb extends De{constructor(e,n){super(e,"in",n),this.keys=e_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gb extends De{constructor(e,n){super(e,"not-in",n),this.keys=e_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function e_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class _b extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xu(n)&&pi(n.arrayValue,this.value)}}class yb extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class vb extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pi(this.value.arrayValue,n)}}class Eb extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.le=null}}function of(t,e=null,n=[],r=[],s=null,i=null,o=null){return new wb(t,e,n,r,s,i,o)}function Vu(t){const e=X(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>dl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>is(r)).join(",")),e.le=n}return e.le}function Mu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!db(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Xg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sf(t.startAt,e.startAt)&&sf(t.endAt,e.endAt)}function fl(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Tb(t,e,n,r,s,i,o,a){return new Ma(t,e,n,r,s,i,o,a)}function Lu(t){return new Ma(t)}function af(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ib(t){return t.collectionGroup!==null}function js(t){const e=X(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Je(Ge.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Ko(i,r))}),n.has(Ge.keyField().canonicalString())||e.he.push(new Ko(Ge.keyField(),r))}return e.he}function Yt(t){const e=X(t);return e.Pe||(e.Pe=Ab(e,js(t))),e.Pe}function Ab(t,e){if(t.limitType==="F")return of(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ko(s.field,i)});const n=t.endAt?new zo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zo(t.startAt.position,t.startAt.inclusive):null;return of(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function pl(t,e,n){return new Ma(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function La(t,e){return Mu(Yt(t),Yt(e))&&t.limitType===e.limitType}function t_(t){return`${Vu(Yt(t))}|lt:${t.limitType}`}function Vr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Zg(s)).join(", ")}]`),Va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>is(s)).join(",")),`Target(${r})`}(Yt(t))}; limitType=${t.limitType})`}function Ua(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of js(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=rf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,js(r),s)||r.endAt&&!function(o,a,c){const l=rf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,js(r),s))}(t,e)}function Rb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function n_(t){return(e,n)=>{let r=!1;for(const s of js(t)){const i=bb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bb(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?ss(c,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Kg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=new Re(H.comparator);function yn(){return Pb}const r_=new Re(H.comparator);function Ds(...t){let e=r_;for(const n of t)e=e.insert(n.key,n);return e}function s_(t){let e=r_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function or(){return qs()}function i_(){return qs()}function qs(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const Sb=new Re(H.comparator),Cb=new Je(H.comparator);function re(...t){let e=Cb;for(const n of t)e=e.add(n);return e}const kb=new Je(ue);function Ob(){return kb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ho(e)?"-0":e}}function a_(t){return{integerValue:""+t}}function Nb(t,e){return cb(e)?a_(e):o_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this._=void 0}}function Db(t,e,n){return t instanceof Wo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Nu(i)&&(i=Du(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof mi?l_(t,e):t instanceof gi?u_(t,e):function(s,i){const o=c_(s,i),a=cf(o)+cf(s.Te);return hl(o)&&hl(s.Te)?a_(a):o_(s.serializer,a)}(t,e)}function xb(t,e,n){return t instanceof mi?l_(t,e):t instanceof gi?u_(t,e):n}function c_(t,e){return t instanceof Go?function(r){return hl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Wo extends Fa{}class mi extends Fa{constructor(e){super(),this.elements=e}}function l_(t,e){const n=h_(e);for(const r of t.elements)n.some(s=>en(s,r))||n.push(r);return{arrayValue:{values:n}}}class gi extends Fa{constructor(e){super(),this.elements=e}}function u_(t,e){let n=h_(e);for(const r of t.elements)n=n.filter(s=>!en(s,r));return{arrayValue:{values:n}}}class Go extends Fa{constructor(e,n){super(),this.serializer=e,this.Te=n}}function cf(t){return Ne(t.integerValue||t.doubleValue)}function h_(t){return xu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Vb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof mi&&s instanceof mi||r instanceof gi&&s instanceof gi?rs(r.elements,s.elements,en):r instanceof Go&&s instanceof Go?en(r.Te,s.Te):r instanceof Wo&&s instanceof Wo}(t.transform,e.transform)}class Mb{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ba{}function d_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new p_(t.key,fn.none()):new Mi(t.key,t.data,fn.none());{const n=t.data,r=wt.empty();let s=new Je(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Rr(t.key,r,new kt(s.toArray()),fn.none())}}function Lb(t,e,n){t instanceof Mi?function(s,i,o){const a=s.value.clone(),c=uf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(s,i,o){if(!vo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=uf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(f_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Hs(t,e,n,r){return t instanceof Mi?function(i,o,a,c){if(!vo(i.precondition,o))return a;const l=i.value.clone(),u=hf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,o,a,c){if(!vo(i.precondition,o))return a;const l=hf(i.fieldTransforms,c,o),u=o.data;return u.setAll(f_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return vo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Ub(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=c_(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function lf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,(i,o)=>Vb(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mi extends Ba{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rr extends Ba{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function f_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function uf(t,e,n){const r=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,xb(o,a,n[s]))}return r}function hf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Db(i,o,e))}return r}class p_ extends Ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fb extends Ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Lb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=i_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=d_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,(n,r)=>lf(n,r))&&rs(this.baseMutations,e.baseMutations,(n,r)=>lf(n,r))}}class Uu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length);let s=function(){return Sb}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Uu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,oe;function qb(t){switch(t){default:return Q();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function m_(t){if(t===void 0)return _n("GRPC error has no .code"),P.UNKNOWN;switch(t){case Oe.OK:return P.OK;case Oe.CANCELLED:return P.CANCELLED;case Oe.UNKNOWN:return P.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return P.INTERNAL;case Oe.UNAVAILABLE:return P.UNAVAILABLE;case Oe.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Oe.NOT_FOUND:return P.NOT_FOUND;case Oe.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Oe.ABORTED:return P.ABORTED;case Oe.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Oe.DATA_LOSS:return P.DATA_LOSS;default:return Q()}}(oe=Oe||(Oe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=new Wr([4294967295,4294967295],0);function df(t){const e=Hb().encode(t),n=new WR;return n.update(e),new Uint8Array(n.digest())}function ff(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([s,i],0)]}class Fu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xs(`Invalid padding: ${n}`);if(r<0)throw new xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xs(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Wr.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(Wr.fromNumber(r)));return s.compare(zb)===1&&(s=new Wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ee===0)return!1;const n=df(e),[r,s]=ff(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);if(!this.Re(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Fu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=df(e),[r,s]=ff(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(r,s,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Li.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $a(Y.min(),s,new Re(ue),yn(),re())}}class Li{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Li(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class g_{constructor(e,n){this.targetId=e,this.ge=n}}class __{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class pf{constructor(){this.pe=0,this.ye=gf(),this.we=ot.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get Ce(){return this.be}ve(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=re(),n=re(),r=re();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new Li(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=gf()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class Kb{constructor(e){this.ke=e,this.qe=new Map,this.Qe=yn(),this.Ke=mf(),this.$e=new Re(ue)}Ue(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.We(n,e.fe):this.Ge(n,e.key,e.fe);for(const n of e.removedTargetIds)this.Ge(n,e.key,e.fe)}ze(e){this.forEachTarget(e,n=>{const r=this.je(n);switch(e.state){case 0:this.He(n)&&r.ve(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.ve(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.He(n)&&(r.Le(),r.ve(e.resumeToken));break;case 4:this.He(n)&&(this.Je(n),r.ve(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.He(s)&&n(s)})}Ye(e){const n=e.targetId,r=e.ge.count,s=this.Ze(n);if(s){const i=s.target;if(fl(i))if(r===0){const o=new H(i.path);this.Ge(n,o,et.newNoDocument(o,Y.min()))}else Ie(r===1);else{const o=this.Xe(n);if(o!==r){const a=this.et(e),c=a?this.tt(a,e,o):1;if(c!==0){this.Je(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(n,l)}}}}}et(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=yr(r).toUint8Array()}catch(c){if(c instanceof Wg)return ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Fu(o,s,i)}catch(c){return ns(c instanceof xs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Ee===0?null:a}tt(e,n,r){return n.ge.count===r-this.it(e,n.targetId)?0:2}it(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ke.rt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ge(n,i,null),s++)}),s}st(e){const n=new Map;this.qe.forEach((i,o)=>{const a=this.Ze(o);if(a){if(i.current&&fl(a.target)){const c=new H(a.target.path);this.Qe.get(c)!==null||this.ot(o,c)||this.Ge(o,c,et.newNoDocument(c,e))}i.Ce&&(n.set(o,i.Fe()),i.Me())}});let r=re();this.Ke.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ze(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const s=new $a(e,n,this.$e,this.Qe,r);return this.Qe=yn(),this.Ke=mf(),this.$e=new Re(ue),s}We(e,n){if(!this.He(e))return;const r=this.ot(e,n.key)?2:0;this.je(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.Ke=this.Ke.insert(n.key,this._t(n.key).add(e))}Ge(e,n,r){if(!this.He(e))return;const s=this.je(e);this.ot(e,n)?s.xe(n,1):s.Oe(n),this.Ke=this.Ke.insert(n,this._t(n).delete(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}Xe(e){const n=this.je(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.je(e).Ne()}je(e){let n=this.qe.get(e);return n||(n=new pf,this.qe.set(e,n)),n}_t(e){let n=this.Ke.get(e);return n||(n=new Je(ue),this.Ke=this.Ke.insert(e,n)),n}He(e){const n=this.Ze(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ze(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.ut(e)}Je(e){this.qe.set(e,new pf),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.Ge(e,n,null)})}ot(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function mf(){return new Re(H.comparator)}function gf(){return new Re(H.comparator)}const Wb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Gb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Qb=(()=>({and:"AND",or:"OR"}))();class Jb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ml(t,e){return t.useProto3Json||Va(e)?e:{value:e}}function Qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Yb(t,e){return Qo(t,e.toTimestamp())}function Xt(t){return Ie(!!t),Y.fromTimestamp(function(n){const r=zn(n);return new xe(r.seconds,r.nanos)}(t))}function Bu(t,e){return function(r){return new be(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function v_(t){const e=be.fromString(t);return Ie(I_(e)),e}function gl(t,e){return Bu(t.databaseId,e.path)}function vc(t,e){const n=v_(e);if(n.get(1)!==t.databaseId.projectId)throw new z(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(E_(n))}function _l(t,e){return Bu(t.databaseId,e)}function Xb(t){const e=v_(t);return e.length===4?be.emptyPath():E_(e)}function yl(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function E_(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _f(t,e,n){return{name:gl(t,e),fields:n.value.mapValue.fields}}function Zb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ie(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):(Ie(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?P.UNKNOWN:m_(l.code);return new z(u,l.message||"")}(o);n=new __(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=vc(t,r.document.name),i=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):Y.min(),a=new wt({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Eo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=vc(t,r.document),i=r.readTime?Xt(r.readTime):Y.min(),o=et.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Eo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=vc(t,r.document),i=r.removedTargetIds||[];n=new Eo([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new jb(s,i),a=r.targetId;n=new g_(a,o)}}return n}function eP(t,e){let n;if(e instanceof Mi)n={update:_f(t,e.key,e.value)};else if(e instanceof p_)n={delete:gl(t,e.key)};else if(e instanceof Rr)n={update:_f(t,e.key,e.data),updateMask:lP(e.fieldMask)};else{if(!(e instanceof Fb))return Q();n={verify:gl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Wo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof gi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Yb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function tP(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Xt(s.updateTime):Xt(i);return o.isEqual(Y.min())&&(o=Xt(i)),new Mb(o,s.transformResults||[])}(n,e))):[]}function nP(t,e){return{documents:[_l(t,e.path)]}}function rP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=_l(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=_l(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return T_(tn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Mr(h.field),direction:oP(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ml(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function sP(t){let e=Xb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=w_(h);return d instanceof tn&&Yg(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(E){return new Ko(Lr(E.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Va(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,m=h.values||[];return new zo(m,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,m=h.values||[];return new zo(m,d)}(n.endAt)),Tb(e,s,o,i,a,"F",c,l)}function iP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function w_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Lr(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Lr(n.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Lr(n.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Lr(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return De.create(Lr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>w_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function oP(t){return Wb[t]}function aP(t){return Gb[t]}function cP(t){return Qb[t]}function Mr(t){return{fieldPath:t.canonicalString()}}function Lr(t){return Ge.fromServerFormat(t.fieldPath)}function T_(t){return t instanceof De?function(n){if(n.op==="=="){if(nf(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NAN"}};if(tf(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(nf(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NOT_NAN"}};if(tf(n.value))return{unaryFilter:{field:Mr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(n.field),op:aP(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(s=>T_(s));return r.length===1?r[0]:{compositeFilter:{op:cP(n.op),filters:r}}}(t):Q()}function lP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function I_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r,s,i=Y.min(),o=Y.min(),a=ot.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.ct=e}}function hP(t){const e=sP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(){this._n=new fP}addToCollectionParentIndex(e,n){return this._n.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Hn.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class fP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new os(0)}static Bn(){return new os(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Hs(r.mutation,s,kt.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=or();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ds();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=yn();const o=qs(),a=function(){return qs()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Rr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Hs(u.mutation,l,u.mutation.getFieldMask(),xe.now())):o.set(l.key,kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new mP(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qs();let s=new Re((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||kt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=i_();u.forEach(d=>{if(!i.has(d)){const m=d_(n.get(d),r.get(d));m!==null&&h.set(d,m),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ib(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(or());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:s_(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ds();return this.indexManager.getCollectionParents(e,i).next(a=>R.forEach(a,c=>{const l=function(h,d){return new Ma(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,et.newInvalidDocument(u)))});let a=Ds();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&Hs(u.mutation,l,kt.empty(),xe.now()),Ua(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return R.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:hP(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.overlays=new Re(H.comparator),this.hr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=or();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=or(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Re((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=or(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=or(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $b(n,r));let i=this.hr.get(n);i===void 0&&(i=re(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.Pr=new Je(Fe.Ir),this.Tr=new Je(Fe.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Fe(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new H(new be([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new H(new be([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=re();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return H.comparator(e.key,n.key)||ue(e.pr,n.pr)}static Er(e,n){return ue(e.pr,n.pr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Je(Fe.Ir)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bb(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Fe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ue);return n.forEach(s=>{const i=new Fe(s,0),o=new Fe(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),R.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Fe(new H(i),0);let a=new Je(ue);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),R.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return R.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Fe(n,0),s=this.wr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EP{constructor(e){this.vr=e,this.docs=function(){return new Re(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=yn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=yn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||ib(sb(u),r)<=0||(s.has(u.key)||Ua(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q()}Fr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new wP(this)}getSize(e){return R.resolve(this.size)}}class wP extends pP{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.persistence=e,this.Mr=new _s(n=>Vu(n),Mu),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new $u,this.targetCount=0,this.Br=os.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),R.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new os(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.qn(n),R.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Ou(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new TP(this),this.indexManager=new dP,this.remoteDocumentCache=function(s){return new EP(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new uP(n),this.$r=new _P(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new vP(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const s=new AP(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return R.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class AP extends ab{constructor(e){super(),this.currentSequenceNumber=e}}class ju{constructor(e){this.persistence=e,this.zr=new $u,this.jr=null}static Hr(e){return new ju(e)}get Jr(){if(this.jr)return this.jr;throw Q()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,r=>{const s=H.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return R.or([()=>R.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new RP;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Rs()<=se.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Vr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(Rs()<=se.DEBUG&&U("QueryEngine","Query:",Vr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Rs()<=se.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Vr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(n))):R.resolve())}ji(e,n){if(af(n))return R.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=pl(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,pl(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return af(n)||s.isEqual(Y.min())?R.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?R.resolve(null):(Rs()<=se.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vr(n)),this.es(e,o,n,rb(s,-1)).next(a=>a))})}Zi(e,n){let r=new Je(n_(e));return n.forEach((s,i)=>{Ua(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Rs()<=se.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Vr(n)),this.zi.getDocumentsMatchingQuery(e,n,Hn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Re(ue),this.rs=new _s(i=>Vu(i),Mu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gP(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function SP(t,e,n,r){return new PP(t,e,n,r)}async function A_(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function CP(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let m=R.resolve();return d.forEach(E=>{m=m.next(()=>u.getEntry(c,E)).next(w=>{const v=l.docVersions.get(E);Ie(v!==null),w.version.compareTo(v)<0&&(h.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=re();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function R_(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function kP(t,e){const n=X(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let m=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(ot.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,r)),s=s.insert(h,m),function(w,v,S){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,m,u)&&a.push(n.Qr.updateTargetData(i,m))});let c=yn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(OP(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(Y.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function OP(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=yn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function NP(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DP(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Mn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function vl(t,e,n){const r=X(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Vi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function yf(t,e,n){const r=X(t);let s=Y.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=X(c),d=h.rs.get(u);return d!==void 0?R.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,Yt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:re())).next(a=>(xP(r,Rb(e),a),{documents:a,hs:i})))}function xP(t,e,n){let r=t.ss.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class vf{constructor(){this.activeTargetIds=Ob()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VP{constructor(){this.no=new vf,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new vf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no=null;function Ec(){return no===null?no=function(){return 268435456+Math.round(2147483648*Math.random())}():no++,"0x"+no.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class FP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Ec(),c=this.bo(n,r);U("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ns("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=LP[n];return`${this.fo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=Ec();return new Promise((o,a)=>{const c=new KR;c.setWithCredentials(!0),c.listenOnce(HR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case yc.NO_ERROR:const u=c.getResponseJson();U(Xe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case yc.TIMEOUT:U(Xe,`RPC '${e}' ${i} timed out`),a(new z(P.DEADLINE_EXCEEDED,"Request time out"));break;case yc.HTTP_ERROR:const h=c.getStatus();if(U(Xe,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const E=function(v){const S=v.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(S)>=0?S:P.UNKNOWN}(m.status);a(new z(E,m.message))}else a(new z(P.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new z(P.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{U(Xe,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);U(Xe,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=Ec(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=jR(),a=qR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");U(Xe,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,m=!1;const E=new UP({lo:v=>{m?U(Xe,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(U(Xe,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),U(Xe,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},ho:()=>h.close()}),w=(v,S,O)=>{v.listen(S,L=>{try{O(L)}catch(k){setTimeout(()=>{throw k},0)}})};return w(h,Zi.EventType.OPEN,()=>{m||U(Xe,`RPC '${e}' stream ${s} transport opened.`)}),w(h,Zi.EventType.CLOSE,()=>{m||(m=!0,U(Xe,`RPC '${e}' stream ${s} transport closed`),E.Vo())}),w(h,Zi.EventType.ERROR,v=>{m||(m=!0,ns(Xe,`RPC '${e}' stream ${s} transport errored:`,v),E.Vo(new z(P.UNAVAILABLE,"The operation could not be completed")))}),w(h,Zi.EventType.MESSAGE,v=>{var S;if(!m){const O=v.data[0];Ie(!!O);const L=O,k=L.error||((S=L[0])===null||S===void 0?void 0:S.error);if(k){U(Xe,`RPC '${e}' stream ${s} received error:`,k);const le=k.status;let $=function(yt){const at=Oe[yt];if(at!==void 0)return m_(at)}(le),ie=k.message;$===void 0&&($=P.INTERNAL,ie="Unknown error status: "+le+" with message "+k.message),m=!0,E.Vo(new z($,ie)),h.close()}else U(Xe,`RPC '${e}' stream ${s} received:`,O),E.mo(O)}}),w(a,zR.STAT_EVENT,v=>{v.stat===Jd.PROXY?U(Xe,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Jd.NOPROXY&&U(Xe,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.Ro()},0),E}}function wc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(t){return new Jb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),s=Math.max(0,n-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new b_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===P.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new z(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BP extends P_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=Zb(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Xt(o.readTime):Y.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=yl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=fl(c)?{documents:nP(i,c)}:{query:rP(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=y_(i,o.resumeToken);const l=ml(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=Qo(i,o.snapshotVersion.toTimestamp());const l=ml(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=iP(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=yl(this.serializer),n.removeTarget=e,this.t_(n)}}class $P extends P_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=tP(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.T_(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=yl(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>eP(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new z(P.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.So(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(P.UNKNOWN,s.toString())})}vo(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(P.UNKNOWN,i.toString())})}terminate(){this.A_=!0}}class qP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(_n(n),this.g_=!1):U("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{br(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=X(c);l.v_.add(4),await Ui(l),l.x_.set("Unknown"),l.v_.delete(4),await qa(l)}(this))})}),this.x_=new qP(r,s)}}async function qa(t){if(br(t))for(const e of t.F_)await e(!0)}async function Ui(t){for(const e of t.F_)await e(!1)}function S_(t,e){const n=X(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Ku(n)?zu(n):ys(n).Jo()&&Hu(n,e))}function C_(t,e){const n=X(t),r=ys(n);n.C_.delete(e),r.Jo()&&k_(n,e),n.C_.size===0&&(r.Jo()?r.Xo():br(n)&&n.x_.set("Unknown"))}function Hu(t,e){if(t.O_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).c_(e)}function k_(t,e){t.O_.Ne(e),ys(t).l_(e)}function zu(t){t.O_=new Kb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.C_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.x_.p_()}function Ku(t){return br(t)&&!ys(t).Ho()&&t.C_.size>0}function br(t){return X(t).v_.size===0}function O_(t){t.O_=void 0}async function zP(t){t.C_.forEach((e,n)=>{Hu(t,e)})}async function KP(t,e){O_(t),Ku(t)?(t.x_.S_(e),zu(t)):t.x_.set("Unknown")}async function WP(t,e,n){if(t.x_.set("Online"),e instanceof __&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jo(t,r)}else if(e instanceof Eo?t.O_.Ue(e):e instanceof g_?t.O_.Ye(e):t.O_.ze(e),!n.isEqual(Y.min()))try{const r=await R_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(ot.EMPTY_BYTE_STRING,u.snapshotVersion)),k_(i,c);const h=new Mn(u.target,c,l,u.sequenceNumber);Hu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Jo(t,r)}}async function Jo(t,e,n){if(!Vi(e))throw e;t.v_.add(1),await Ui(t),t.x_.set("Offline"),n||(n=()=>R_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await qa(t)})}function N_(t,e){return e().catch(n=>Jo(t,n,e))}async function Ha(t){const e=X(t),n=Kn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;GP(e);)try{const s=await NP(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,QP(e,s)}catch(s){await Jo(e,s)}D_(e)&&x_(e)}function GP(t){return br(t)&&t.D_.length<10}function QP(t,e){t.D_.push(e);const n=Kn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function D_(t){return br(t)&&!Kn(t).Ho()&&t.D_.length>0}function x_(t){Kn(t).start()}async function JP(t){Kn(t).d_()}async function YP(t){const e=Kn(t);for(const n of t.D_)e.I_(n.mutations)}async function XP(t,e,n){const r=t.D_.shift(),s=Uu.from(r,e,n);await N_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ha(t)}async function ZP(t,e){e&&Kn(t).P_&&await async function(r,s){if(function(o){return qb(o)&&o!==P.ABORTED}(s.code)){const i=r.D_.shift();Kn(r).Zo(),await N_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ha(r)}}(t,e),D_(t)&&x_(t)}async function wf(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=br(n);n.v_.add(3),await Ui(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await qa(n)}async function eS(t,e){const n=X(t);e?(n.v_.delete(2),await qa(n)):e||(n.v_.add(2),await Ui(n),n.x_.set("Unknown"))}function ys(t){return t.N_||(t.N_=function(n,r,s){const i=X(n);return i.R_(),new BP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:zP.bind(null,t),To:KP.bind(null,t),u_:WP.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Ku(t)?zu(t):t.x_.set("Unknown")):(await t.N_.stop(),O_(t))})),t.N_}function Kn(t){return t.B_||(t.B_=function(n,r,s){const i=X(n);return i.R_(),new $P(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:JP.bind(null,t),To:ZP.bind(null,t),E_:YP.bind(null,t),T_:XP.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await Ha(t)):(await t.B_.stop(),t.D_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Wu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gu(t,e){if(_n("AsyncQueue",`${e}: ${t}`),Vi(t))return new z(P.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Ds(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new Gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.L_=new Re(H.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):Q():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class as{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new as(e,n,Gr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&La(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.q_=void 0,this.listeners=[]}}class nS{constructor(){this.queries=new _s(e=>t_(e),La),this.onlineState="Unknown",this.Q_=new Set}}async function rS(t,e){const n=X(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new tS),s)try{i.q_=await n.onListen(r)}catch(o){const a=Gu(o,`Initialization of query '${Vr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.K_(n.onlineState),i.q_&&e.U_(i.q_)&&Qu(n)}async function sS(t,e){const n=X(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function iS(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.U_(s)&&(r=!0);o.q_=s}}r&&Qu(n)}function oS(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Qu(t){t.Q_.forEach(e=>{e.next()})}class aS{constructor(e,n,r){this.query=e,this.W_=n,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=r||{}}U_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new as(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.G_?this.j_(e)&&(this.W_.next(e),n=!0):this.H_(e,this.onlineState)&&(this.J_(e),n=!0),this.z_=e,n}onError(e){this.W_.error(e)}K_(e){this.onlineState=e;let n=!1;return this.z_&&!this.G_&&this.H_(this.z_,e)&&(this.J_(this.z_),n=!0),n}H_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Y_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}j_(e){if(e.docChanges.length>0)return!0;const n=this.z_&&this.z_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}J_(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.G_=!0,this.W_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.key=e}}class M_{constructor(e){this.key=e}}class cS{constructor(e,n){this.query=e,this.sa=n,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=re(),this.mutatedKeys=re(),this.aa=n_(e),this.ua=new Gr(this.aa)}get ca(){return this.sa}la(e,n){const r=n?n.ha:new Tf,s=n?n.ua:this.ua;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),m=Ua(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;d&&m?d.data.isEqual(m.data)?E!==w&&(r.track({type:3,doc:m}),v=!0):this.Pa(d,m)||(r.track({type:2,doc:m}),v=!0,(c&&this.aa(m,c)>0||l&&this.aa(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),v=!0):d&&!m&&(r.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(m?(o=o.add(m),i=w?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{ua:o,ha:r,Xi:a,mutatedKeys:i}}Pa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.ua;this.ua=e.ua,this.mutatedKeys=e.mutatedKeys;const i=e.ha.k_();i.sort((l,u)=>function(d,m){const E=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return E(d)-E(m)}(l.type,u.type)||this.aa(l.doc,u.doc)),this.Ia(r);const o=n?this.Ta():[],a=this._a.size===0&&this.current?1:0,c=a!==this.oa;return this.oa=a,i.length!==0||c?{snapshot:new as(this.query,e.ua,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}K_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ua:this.ua,ha:new Tf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(e){return!this.sa.has(e)&&!!this.ua.has(e)&&!this.ua.get(e).hasLocalMutations}Ia(e){e&&(e.addedDocuments.forEach(n=>this.sa=this.sa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.sa=this.sa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this._a;this._a=re(),this.ua.forEach(r=>{this.da(r.key)&&(this._a=this._a.add(r.key))});const n=[];return e.forEach(r=>{this._a.has(r)||n.push(new M_(r))}),this._a.forEach(r=>{e.has(r)||n.push(new V_(r))}),n}Aa(e){this.sa=e.hs,this._a=re();const n=this.la(e.documents);return this.applyChanges(n,!0)}Ra(){return as.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,this.oa===0,this.hasCachedResults)}}class lS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uS{constructor(e){this.key=e,this.Va=!1}}class hS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ma={},this.fa=new _s(a=>t_(a),La),this.ga=new Map,this.pa=new Set,this.ya=new Re(H.comparator),this.wa=new Map,this.Sa=new $u,this.ba={},this.Da=new Map,this.Ca=os.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return this.va===!0}}async function dS(t,e){const n=TS(t);let r,s;const i=n.fa.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Ra();else{const o=await DP(n.localStore,Yt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await fS(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&S_(n.remoteStore,o)}return s}async function fS(t,e,n,r,s){t.Fa=(h,d,m)=>async function(w,v,S,O){let L=v.view.la(S);L.Xi&&(L=await yf(w.localStore,v.query,!1).then(({documents:$})=>v.view.la($,L)));const k=O&&O.targetChanges.get(v.targetId),le=v.view.applyChanges(L,w.isPrimaryClient,k);return Af(w,v.targetId,le.Ea),le.snapshot}(t,h,d,m);const i=await yf(t.localStore,e,!0),o=new cS(e,i.hs),a=o.la(i.documents),c=Li.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Af(t,n,l.Ea);const u=new lS(e,n,o);return t.fa.set(e,u),t.ga.has(n)?t.ga.get(n).push(e):t.ga.set(n,[e]),l.snapshot}async function pS(t,e){const n=X(t),r=n.fa.get(e),s=n.ga.get(r.targetId);if(s.length>1)return n.ga.set(r.targetId,s.filter(i=>!La(i,e))),void n.fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),C_(n.remoteStore,r.targetId),El(n,r.targetId)}).catch(xi)):(El(n,r.targetId),await vl(n.localStore,r.targetId,!0))}async function mS(t,e,n){const r=IS(t);try{const s=await function(o,a){const c=X(o),l=xe.now(),u=a.reduce((m,E)=>m.add(E.key),re());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let E=yn(),w=re();return c.os.getEntries(m,u).next(v=>{E=v,E.forEach((S,O)=>{O.isValidDocument()||(w=w.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,E)).next(v=>{h=v;const S=[];for(const O of a){const L=Ub(O,h.get(O.key).overlayedDocument);L!=null&&S.push(new Rr(O.key,L,Gg(L.value.mapValue),fn.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,S,a)}).next(v=>{d=v;const S=v.applyToLocalDocumentSet(h,w);return c.documentOverlayCache.saveOverlays(m,v.batchId,S)})}).then(()=>({batchId:d.batchId,changes:s_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.ba[o.currentUser.toKey()];l||(l=new Re(ue)),l=l.insert(a,c),o.ba[o.currentUser.toKey()]=l}(r,s.batchId,n),await Fi(r,s.changes),await Ha(r.remoteStore)}catch(s){const i=Gu(s,"Failed to persist write");n.reject(i)}}async function L_(t,e){const n=X(t);try{const r=await kP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.wa.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Va=!0:s.modifiedDocuments.size>0?Ie(o.Va):s.removedDocuments.size>0&&(Ie(o.Va),o.Va=!1))}),await Fi(n,r,e)}catch(r){await xi(r)}}function If(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.fa.forEach((i,o)=>{const a=o.view.K_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=X(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.K_(a)&&(l=!0)}),l&&Qu(c)}(r.eventManager,e),s.length&&r.ma.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gS(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.wa.get(e),i=s&&s.key;if(i){let o=new Re(H.comparator);o=o.insert(i,et.newNoDocument(i,Y.min()));const a=re().add(i),c=new $a(Y.min(),new Map,new Re(ue),o,a);await L_(r,c),r.ya=r.ya.remove(i),r.wa.delete(e),Ju(r)}else await vl(r.localStore,e,!1).then(()=>El(r,e,n)).catch(xi)}async function _S(t,e){const n=X(t),r=e.batch.batchId;try{const s=await CP(n.localStore,e);F_(n,r,null),U_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fi(n,s)}catch(s){await xi(s)}}async function yS(t,e,n){const r=X(t);try{const s=await function(o,a){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ie(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);F_(r,e,n),U_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fi(r,s)}catch(s){await xi(s)}}function U_(t,e){(t.Da.get(e)||[]).forEach(n=>{n.resolve()}),t.Da.delete(e)}function F_(t,e,n){const r=X(t);let s=r.ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.ba[r.currentUser.toKey()]=s}}function El(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ga.get(e))t.fa.delete(r),n&&t.ma.Ma(r,n);t.ga.delete(e),t.isPrimaryClient&&t.Sa.Vr(e).forEach(r=>{t.Sa.containsKey(r)||B_(t,r)})}function B_(t,e){t.pa.delete(e.path.canonicalString());const n=t.ya.get(e);n!==null&&(C_(t.remoteStore,n),t.ya=t.ya.remove(e),t.wa.delete(n),Ju(t))}function Af(t,e,n){for(const r of n)r instanceof V_?(t.Sa.addReference(r.key,e),vS(t,r)):r instanceof M_?(U("SyncEngine","Document no longer in limbo: "+r.key),t.Sa.removeReference(r.key,e),t.Sa.containsKey(r.key)||B_(t,r.key)):Q()}function vS(t,e){const n=e.key,r=n.path.canonicalString();t.ya.get(n)||t.pa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.pa.add(r),Ju(t))}function Ju(t){for(;t.pa.size>0&&t.ya.size<t.maxConcurrentLimboResolutions;){const e=t.pa.values().next().value;t.pa.delete(e);const n=new H(be.fromString(e)),r=t.Ca.next();t.wa.set(r,new uS(n)),t.ya=t.ya.insert(n,r),S_(t.remoteStore,new Mn(Yt(Lu(n.path)),r,"TargetPurposeLimboResolution",Ou.ae))}}async function Fi(t,e,n){const r=X(t),s=[],i=[],o=[];r.fa.isEmpty()||(r.fa.forEach((a,c)=>{o.push(r.Fa(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=qu.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ma.u_(s),await async function(c,l){const u=X(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(l,d=>R.forEach(d.qi,m=>u.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>R.forEach(d.Qi,m=>u.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Vi(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const m=u.ns.get(d),E=m.snapshotVersion,w=m.withLastLimboFreeSnapshotVersion(E);u.ns=u.ns.insert(d,w)}}}(r.localStore,i))}async function ES(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await A_(n.localStore,e);n.currentUser=e,function(i,o){i.Da.forEach(a=>{a.forEach(c=>{c.reject(new z(P.CANCELLED,o))})}),i.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fi(n,r.us)}}function wS(t,e){const n=X(t),r=n.wa.get(e);if(r&&r.Va)return re().add(r.key);{let s=re();const i=n.ga.get(e);if(!i)return s;for(const o of i){const a=n.fa.get(o);s=s.unionWith(a.view.ca)}return s}}function TS(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=L_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gS.bind(null,e),e.ma.u_=iS.bind(null,e.eventManager),e.ma.Ma=oS.bind(null,e.eventManager),e}function IS(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_S.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yS.bind(null,e),e}class Rf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ja(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return SP(this.persistence,new bP,e.initialUser,this.serializer)}createPersistence(e){return new IP(ju.Hr,this.serializer)}createSharedClientState(e){return new VP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>If(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ES.bind(null,this.syncEngine),await eS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nS}()}createDatastore(e){const n=ja(e.databaseInfo.databaseId),r=function(i){return new FP(i)}(e.databaseInfo);return function(i,o,a,c){return new jP(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new HP(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>If(this.syncEngine,n,0),function(){return Ef.C()?new Ef:new MP}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new hS(s,i,o,a,c,l);return u&&(h.va=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=X(n);U("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await Ui(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Na(this.observer.next,e)}error(e){this.observer.error?this.Na(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}Ba(){this.muted=!0}Na(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=zg.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Tc(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await A_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SS(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>wf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>wf(e.remoteStore,i)),t._onlineComponents=e}function PS(t){return t.name==="FirebaseError"?t.code===P.FAILED_PRECONDITION||t.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function SS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!PS(n))throw n;ns("Error using user provided cache. Falling back to memory cache: "+n),await Tc(t,new Rf)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Tc(t,new Rf);return t._offlineComponents}async function $_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await bf(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await bf(t,new AS))),t._onlineComponents}function CS(t){return $_(t).then(e=>e.syncEngine)}async function kS(t){const e=await $_(t),n=e.eventManager;return n.onListen=dS.bind(null,e.syncEngine),n.onUnlisten=pS.bind(null,e.syncEngine),n}function OS(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new RS({next:d=>{o.enqueueAndForget(()=>sS(i,h));const m=d.docs.has(a);!m&&d.fromCache?l.reject(new z(P.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&c&&c.source==="server"?l.reject(new z(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new aS(Lu(a.path),u,{includeMetadataChanges:!0,Y_:!0});return rS(i,h)}(await kS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(t,e,n){if(!n)throw new z(P.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DS(t,e,n,r){if(e===!0&&r===!0)throw new z(P.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sf(t){if(!H.isDocumentKey(t))throw new z(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function _i(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yu(t);throw new z(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=j_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new GR;switch(r.type){case"firstParty":return new XR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Pf.get(n);r&&(U("ComponentProvider","Removing Datastore"),Pf.delete(n),r.terminate())}(this),Promise.resolve()}}function xS(t,e,n,r={}){var s;const i=(t=_i(t,Xu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ze.MOCK_USER;else{a=sm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new z(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(l)}t._authCredentials=new QR(new Hg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zu(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class yi extends Zu{constructor(e,n,r){super(e,n,Lu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new H(e))}withConverter(e){return new yi(this.firestore,e,this._path)}}function wn(t,e,...n){if(t=Me(t),arguments.length===1&&(e=zg.V()),NS("doc","path",e),t instanceof Xu){const r=be.fromString(e,...n);return Sf(r),new It(t,null,new H(r))}{if(!(t instanceof It||t instanceof yi))throw new z(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Sf(r),new It(t.firestore,t instanceof yi?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new b_(this,"async_queue_retry"),this.su=()=>{const n=wc();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=wc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const n=wc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new $n;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Za.push(e),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!Vi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(e){const n=this.Ya.then(()=>(this.nu=!0,e().catch(r=>{this.tu=r,this.nu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw _n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.nu=!1,r))));return this.Ya=n,n}enqueueAfterDelay(e,n,r){this.ou(),this.iu.indexOf(e)>-1&&(n=0);const s=Wu.createAndSchedule(this,e,n,r,i=>this.uu(i));return this.eu.push(s),s}ou(){this.tu&&Q()}verifyOperationInProgress(){}async cu(){let e;do e=this.Ya,await e;while(e!==this.Ya)}lu(e){for(const n of this.eu)if(n.timerId===e)return!0;return!1}hu(e){return this.cu().then(()=>{this.eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.cu()})}Pu(e){this.iu.push(e)}uu(e){const n=this.eu.indexOf(e);this.eu.splice(n,1)}}class eh extends Xu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new VS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||H_(this),this._firestoreClient.terminate()}}function MS(t,e){const n=typeof t=="object"?t:Jl(),r=typeof t=="string"?t:e||"(default)",s=ma(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=tm("firestore");i&&xS(s,...i)}return s}function q_(t){return t._firestoreClient||H_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function H_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new ub(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,j_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new bS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(ot.fromBase64String(e))}catch(n){throw new z(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=/^__.*__$/;class US{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mi(e,this.data,n,this.fieldTransforms)}}function K_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class rh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Iu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new rh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Au:!1});return s.Ru(e),s}Vu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Eu({path:r,Au:!1});return s.Iu(),s}mu(e){return this.Eu({path:void 0,Au:!0})}fu(e){return Yo(e,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Iu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ru(this.path.get(e))}Ru(e){if(e.length===0)throw this.fu("Document fields must not be empty");if(K_(this.Tu)&&LS.test(e))throw this.fu('Document fields cannot begin and end with "__"')}}class FS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ja(e)}yu(e,n,r,s=!1){return new rh({Tu:e,methodName:n,pu:r,path:Ge.emptyPath(),Au:!1,gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function BS(t){const e=t._freezeSettings(),n=ja(t._databaseId);return new FS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $S(t,e,n,r,s,i={}){const o=t.yu(i.merge||i.mergeFields?2:0,e,n,s);J_("Data must be an object, but it was:",o,r);const a=G_(r,o);let c,l;if(i.merge)c=new kt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=jS(e,h,n);if(!o.contains(d))throw new z(P.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);HS(u,d)||u.push(d)}c=new kt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new US(new wt(a),c,l)}function W_(t,e){if(Q_(t=Me(t)))return J_("Unsupported field value:",e,t),G_(t,e);if(t instanceof z_)return function(r,s){if(!K_(s.Tu))throw s.fu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&e.Tu!==4)throw e.fu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=W_(a,s.mu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:Qo(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qo(s.serializer,i)}}if(r instanceof nh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:y_(s.serializer,r._byteString)};if(r instanceof It){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.fu(`Unsupported field value: ${Yu(r)}`)}(t,e)}function G_(t,e){const n={};return Kg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(t,(r,s)=>{const i=W_(s,e.du(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Q_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof nh||t instanceof cs||t instanceof It||t instanceof z_)}function J_(t,e,n){if(!Q_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Yu(n);throw r==="an object"?e.fu(t+" a custom object"):e.fu(t+" "+r)}}function jS(t,e,n){if((e=Me(e))instanceof th)return e._internalPath;if(typeof e=="string")return Y_(t,e);throw Yo("Field path arguments must be of type string or ",t,!1,void 0,n)}const qS=new RegExp("[~\\*/\\[\\]]");function Y_(t,e,n){if(e.search(qS)>=0)throw Yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new th(...e.split("."))._internalPath}catch{throw Yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new z(P.INVALID_ARGUMENT,a+t+c)}function HS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Z_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zS extends X_{data(){return super.data()}}function Z_(t,e){return typeof e=="string"?Y_(t,e):e instanceof th?e._internalPath:e._delegate._internalPath}class KS{convertValue(e,n="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new nh(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Du(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=zn(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);Ie(I_(r));const s=new fi(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||_n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ey extends X_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new QS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Z_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class QS extends ey{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){t=_i(t,It);const e=_i(t.firestore,eh);return OS(q_(e),t._key).then(n=>XS(e,t,n))}class JS extends KS{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function Bi(t,e,n){t=_i(t,It);const r=_i(t.firestore,eh),s=WS(t.converter,e,n);return YS(r,[$S(BS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,fn.none())])}function YS(t,e){return function(r,s){const i=new $n;return r.asyncQueue.enqueueAndForget(async()=>mS(await CS(r),s,i)),i.promise}(q_(t),e)}function XS(t,e,n){const r=n.docs.get(e._key),s=new JS(t);return new ey(t,s,e._key,r,new GS(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ms=s})(wr),pr(new qn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new eh(new JR(r.getProvider("auth-internal")),new eb(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new z(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Gt(Yd,"4.3.0",e),Gt(Yd,"4.3.0","esm2017")})();const Tn=MS(au()),Ka="settings",ty="users",sh="saves",ZS=(t,e)=>Bi(wn(Tn,Ka,t),{marks:e},{merge:!0}),eC=t=>za(wn(Tn,Ka,t)).then(e=>e.exists()?e.data().marks:null),tC=(t,e)=>Bi(wn(Tn,ty,t),{list:e},{merge:!0}),nC=t=>za(wn(Tn,ty,t)).then(e=>e.exists()?e.data().list:null),rC=(t,e)=>Bi(wn(Tn,Ka,t),{otherSettings:e},{merge:!0}),sC=t=>za(wn(Tn,Ka,t)).then(e=>e.exists()?e.data().otherSettings:null),iC=(t,e,n)=>Bi(wn(Tn,sh,t),{[e]:n},{merge:!0}),oC=t=>za(wn(Tn,sh,t)).then(e=>e.exists()?e.data():null),kf=(t,e)=>Bi(wn(Tn,sh,t),e),Xo=[{count:0,mark:"Absent",color:"tomato"},{count:1,mark:"Present",color:"green"}],aC=()=>{const t=localStorage.getItem("convert");if(t==null)return Xo;const e=JSON.parse(t);return e==null||e.length<2?Xo:e};let ut=aC();const wl=t=>{for(let e=0;e<ut.length;e++)if(t<=ut[e].count)return ut[e].mark;return ut[ut.length-1].mark},Tl=t=>{for(let e=0;e<ut.length;e++)if(t<=ut[e].count)return ut[e].color;return ut[ut.length-1].color},SN=()=>ut,CN=t=>(ut=t,localStorage.setItem("convert",JSON.stringify(ut)),new Promise((e,n)=>{En(r=>{r&&ZS(r.uid,t).then(e).catch(n),e()})}));En(t=>{t&&eC(t.uid).then(e=>{if(e){localStorage.setItem("convert",JSON.stringify(e)),ut=e;return}localStorage.setItem("convert",JSON.stringify(Xo)),ut=Xo})});const cC={key:0,class:"border-bottom-0"},lC={class:"fw-semibold mb-0"},uC={class:"fw-semibold mb-1"},hC={class:"border-bottom-0 text-center"},dC={key:2,class:"border-bottom-0 text-center"},fC={class:"mb-0 fw-normal"},pC={key:3,class:"border-bottom-0 text-center"},mC={class:"mb-0 fw-normal"},gC={__name:"StudentListItem",props:{onlyMarks:{type:Boolean,required:!1,default:!1},number:{type:Number,required:!0},name:{type:String,required:!0},count:{type:Number,required:!0},removeSelf:{type:Function,required:!0},selectedItem:{type:Number,required:!0}},setup(t){return(e,n)=>(te(),ae("tr",{class:Nt(t.selectedItem===t.number?"bg-danger":"")},[t.onlyMarks?Be("",!0):(te(),ae("td",cC,[g("h6",lC,St(t.number),1)])),t.onlyMarks?Be("",!0):(te(),ae("td",{key:1,class:"border-bottom-0",onClick:n[0]||(n[0]=()=>t.removeSelf(null))},[g("h6",uC,St(t.name),1)])),g("td",hC,[g("p",{class:"mb-0 fw-normal",style:ra({color:Ue(Tl)(t.count)})},St(Ue(wl)(t.count)),5)]),t.onlyMarks?Be("",!0):(te(),ae("td",dC,[g("p",fC,St(t.count),1)])),t.onlyMarks?Be("",!0):(te(),ae("td",pC,[g("p",mC,[g("i",{class:"ti ti-x custom-btn",onClick:n[1]||(n[1]=(...r)=>t.removeSelf&&t.removeSelf(...r))})])]))],2))}},_C={class:"table-responsive mt-4"},yC={class:"table text-nowrap mb-0 align-middle"},vC={class:"text-dark fs-4"},EC={key:0,class:"border-bottom-0"},wC=g("h6",{class:"fw-semibold mb-0"},[g("i",{class:"ti ti-list-numbers"})],-1),TC=[wC],IC={key:1,class:"border-bottom-0"},AC=g("h6",{class:"fw-semibold mb-0"},"Full name",-1),RC=[AC],bC=g("th",{class:"border-bottom-0 text-center"},[g("h6",{class:"fw-semibold mb-0"},"Mark")],-1),PC={key:2,class:"border-bottom-0 text-center"},SC=g("h6",{class:"fw-semibold mb-0"},"Detected times",-1),CC=[SC],kC={key:3,class:"border-bottom-0 text-center"},OC=g("h6",{class:"fw-semibold mb-0"},"Remove",-1),NC=[OC],DC={__name:"StudentList",props:{onlyMarks:{type:Boolean,required:!1,default:!1},students:{type:Array,required:!0},removeItem:{type:Function,required:!0}},setup(t){const e=t,n=Ae(-1),r=(s,i,o)=>{if(o===n.value&&s){e.removeItem(i),n.value=-1;return}n.value=s?o:-1};return(s,i)=>(te(),ae("div",_C,[g("table",yC,[g("thead",vC,[g("tr",null,[t.onlyMarks?Be("",!0):(te(),ae("th",EC,TC)),t.onlyMarks?Be("",!0):(te(),ae("th",IC,RC)),bC,t.onlyMarks?Be("",!0):(te(),ae("th",PC,CC)),t.onlyMarks?Be("",!0):(te(),ae("th",kC,NC))])]),g("tbody",null,[(te(!0),ae(vt,null,Bl(t.students,(o,a)=>(te(),ql(gC,{key:a,number:a+1,"only-marks":t.onlyMarks,name:o.name,count:o.count,"selected-item":n.value,"remove-self":c=>r(c,o,a+1)},null,8,["number","only-marks","name","count","selected-item","remove-self"]))),128))])])]))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="firebasestorage.googleapis.com",ry="storageBucket",xC=2*60*1e3,VC=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends nn{constructor(e,n,r=0){super(Ic(e),`Firebase Storage: ${n} (${Ic(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ic(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function Ic(t){return"storage/"+t}function ih(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(Se.UNKNOWN,t)}function MC(t){return new Ce(Se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function LC(t){return new Ce(Se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function UC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(Se.UNAUTHENTICATED,t)}function FC(){return new Ce(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BC(t){return new Ce(Se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $C(){return new Ce(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jC(){return new Ce(Se.CANCELED,"User canceled the upload/download.")}function qC(t){return new Ce(Se.INVALID_URL,"Invalid URL '"+t+"'.")}function HC(t){return new Ce(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function zC(){return new Ce(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ry+"' property when initializing the app?")}function KC(){return new Ce(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function WC(){return new Ce(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function GC(t){return new Ce(Se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Il(t){return new Ce(Se.INVALID_ARGUMENT,t)}function sy(){return new Ce(Se.APP_DELETED,"The Firebase app was deleted.")}function QC(t){return new Ce(Se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zs(t,e){return new Ce(Se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function bs(t){throw new Ce(Se.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=gt.makeFromUrl(e,n)}catch{return new gt(e,"")}if(r.path==="")return r;throw HC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(k){k.path_=decodeURIComponent(k.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),E={bucket:1,path:3},w=n===ny?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",S=new RegExp(`^https?://${w}/${s}/${v}`,"i"),L=[{regex:a,indices:c,postModify:i},{regex:m,indices:E,postModify:l},{regex:S,indices:{bucket:1,path:2},postModify:l}];for(let k=0;k<L.length;k++){const le=L[k],$=le.regex.exec(e);if($){const ie=$[le.indices.bucket];let _e=$[le.indices.path];_e||(_e=""),r=new gt(ie,_e),le.postModify(r);break}}if(r==null)throw qC(e);return r}}class JC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(m,c())},v)}function d(){i&&clearTimeout(i)}function m(v,...S){if(l){d();return}if(v){d(),u.call(null,v,...S);return}if(c()||o){d(),u.call(null,v,...S);return}r<64&&(r*=2);let L;a===1?(a=2,L=0):L=(r+Math.random())*1e3,h(L)}let E=!1;function w(v){E||(E=!0,d(),!l&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function XC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){return t!==void 0}function ek(t){return typeof t=="object"&&!Array.isArray(t)}function oh(t){return typeof t=="string"||t instanceof String}function Of(t){return ah()&&t instanceof Blob}function ah(){return typeof Blob<"u"&&!oT()}function Nf(t,e,n,r){if(r<e)throw Il(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Il(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function iy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(hr||(hr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,E)=>{this.resolve_=m,this.reject_=E,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ro(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===hr.NO_ERROR,c=i.getStatus();if(!a||tk(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===hr.ABORT;r(!1,new ro(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new ro(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());ZC(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=ih();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?sy():jC();o(c)}else{const c=$C();o(c)}};this.canceled_?n(!1,new ro(!1,null,!0)):this.backoffId_=YC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&XC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ro{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function rk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ik(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ok(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ak(t,e,n,r,s,i,o=!0){const a=iy(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return ik(l,e),rk(l,n),sk(l,i),ok(l,r),new nk(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lk(...t){const e=ck();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ah())return new Blob(t);throw new Ce(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t){if(typeof atob>"u")throw GC("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ac{constructor(e,n){this.data=e,this.contentType=n||null}}function dk(t,e){switch(t){case Wt.RAW:return new Ac(oy(e));case Wt.BASE64:case Wt.BASE64URL:return new Ac(ay(t,e));case Wt.DATA_URL:return new Ac(pk(e),mk(e))}throw ih()}function oy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function fk(t){let e;try{e=decodeURIComponent(t)}catch{throw zs(Wt.DATA_URL,"Malformed data URL.")}return oy(e)}function ay(t,e){switch(t){case Wt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw zs(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Wt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw zs(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=hk(e)}catch(s){throw s.message.includes("polyfill")?s:zs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class cy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zs(Wt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=gk(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function pk(t){const e=new cy(t);return e.base64?ay(Wt.BASE64,e.rest):fk(e.rest)}function mk(t){return new cy(t).contentType}function gk(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n){let r=0,s="";Of(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Of(this.data_)){const r=this.data_,s=uk(r,e,n);return s===null?null:new Vn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Vn(r,!0)}}static getBlob(...e){if(ah()){const n=e.map(r=>r instanceof Vn?r.data_:r);return new Vn(lk.apply(null,n))}else{const n=e.map(o=>oh(o)?dk(Wt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Vn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t){let e;try{e=JSON.parse(t)}catch{return null}return ek(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function yk(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function uy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t,e){return e}class ct{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||vk}}let so=null;function Ek(t){return!oh(t)||t.length<2?t:uy(t)}function hy(){if(so)return so;const t=[];t.push(new ct("bucket")),t.push(new ct("generation")),t.push(new ct("metageneration")),t.push(new ct("name","fullPath",!0));function e(i,o){return Ek(o)}const n=new ct("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ct("size");return s.xform=r,t.push(s),t.push(new ct("timeCreated")),t.push(new ct("updated")),t.push(new ct("md5Hash",null,!0)),t.push(new ct("cacheControl",null,!0)),t.push(new ct("contentDisposition",null,!0)),t.push(new ct("contentEncoding",null,!0)),t.push(new ct("contentLanguage",null,!0)),t.push(new ct("contentType",null,!0)),t.push(new ct("metadata","customMetadata",!0)),so=t,so}function wk(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new gt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Tk(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return wk(r,t),r}function dy(t,e,n){const r=ly(e);return r===null?null:Tk(t,r,n)}function Ik(t,e,n,r){const s=ly(e);if(s===null||!oh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),m=Wa(d,n,r),E=iy({alt:"media",token:l});return m+E})[0]}function Ak(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ch{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){if(!t)throw ih()}function Rk(t,e){function n(r,s){const i=dy(t,s,e);return fy(i!==null),i}return n}function bk(t,e){function n(r,s){const i=dy(t,s,e);return fy(i!==null),Ik(i,s,t.host,t._protocol)}return n}function py(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=FC():s=UC():n.getStatus()===402?s=LC(t.bucket):n.getStatus()===403?s=BC(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function my(t){const e=py(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=MC(t.path)),i.serverResponse=s.serverResponse,i}return n}function Pk(t,e,n){const r=e.fullServerUrl(),s=Wa(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new ch(s,i,bk(t,n),o);return a.errorHandler=my(e),a}function Sk(t,e){const n=e.fullServerUrl(),r=Wa(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,l){}const a=new ch(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=my(e),a}function Ck(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function kk(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Ck(null,e)),r}function Ok(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let L="";for(let k=0;k<2;k++)L=L+Math.random().toString().slice(2);return L}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=kk(e,r,s),u=Ak(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",m=Vn.getBlob(h,r,d);if(m===null)throw KC();const E={name:l.fullPath},w=Wa(i,t.host,t._protocol),v="POST",S=t.maxUploadRetryTime,O=new ch(w,v,Rk(t,n),S);return O.urlParams=E,O.headers=o,O.body=m.uploadData(),O.errorHandler=py(e),O}class Nk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=hr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=hr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=hr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw bs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Dk extends Nk{initXhr(){this.xhr_.responseType="text"}}function lh(){return new Dk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this._service=e,n instanceof gt?this._location=n:this._location=gt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Er(e,n)}get root(){const e=new gt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uy(this._location.path)}get storage(){return this._service}get parent(){const e=_k(this._location.path);if(e===null)return null;const n=new gt(this._location.bucket,e);return new Er(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw QC(e)}}function xk(t,e,n){t._throwIfRoot("uploadBytes");const r=Ok(t.storage,t._location,hy(),new Vn(e,!0),n);return t.storage.makeRequestWithTokens(r,lh).then(s=>({metadata:s,ref:t}))}function Vk(t){t._throwIfRoot("getDownloadURL");const e=Pk(t.storage,t._location,hy());return t.storage.makeRequestWithTokens(e,lh).then(n=>{if(n===null)throw WC();return n})}function Mk(t){t._throwIfRoot("deleteObject");const e=Sk(t.storage,t._location);return t.storage.makeRequestWithTokens(e,lh)}function Lk(t,e){const n=yk(t._location.path,e),r=new gt(t._location.bucket,n);return new Er(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t){return/^[A-Za-z]+:\/\//.test(t)}function Fk(t,e){return new Er(t,e)}function gy(t,e){if(t instanceof uh){const n=t;if(n._bucket==null)throw zC();const r=new Er(n,n._bucket);return e!=null?gy(r,e):r}else return e!==void 0?Lk(t,e):t}function Bk(t,e){if(e&&Uk(e)){if(t instanceof uh)return Fk(t,e);throw Il("To use ref(service, url), the first argument must be a Storage instance.")}else return gy(t,e)}function Df(t,e){const n=e==null?void 0:e[ry];return n==null?null:gt.makeFromBucketSpec(n,t)}function $k(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:sm(s,t.app.options.projectId))}class uh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ny,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xC,this._maxUploadRetryTime=VC,this._requests=new Set,s!=null?this._bucket=gt.makeFromBucketSpec(s,this._host):this._bucket=Df(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=gt.makeFromBucketSpec(this._url,e):this._bucket=Df(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Nf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Nf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Er(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new JC(sy());{const o=ak(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const xf="@firebase/storage",Vf="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="storage";function jk(t,e,n){return t=Me(t),xk(t,e,n)}function qk(t){return t=Me(t),Vk(t)}function Hk(t){return t=Me(t),Mk(t)}function yy(t,e){return t=Me(t),Bk(t,e)}function zk(t=Jl(),e){t=Me(t);const r=ma(t,_y).getImmediate({identifier:e}),s=tm("storage");return s&&Kk(r,...s),r}function Kk(t,e,n,r={}){$k(t,e,n,r)}function Wk(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new uh(n,r,s,e,wr)}function Gk(){pr(new qn(_y,Wk,"PUBLIC").setMultipleInstances(!0)),Gt(xf,Vf,""),Gt(xf,Vf,"esm2017")}Gk();const vy=zk(au()),Qk=(t,e)=>{const n=yy(vy,`temp/${e}/${t.name}`);return jk(n,t)},Al=(t,e)=>{const n=yy(vy,`temp/${e}/${t}`);return Hk(n)},Jk=async t=>{try{return await qk(t)}catch(e){console.log(e)}return""},Yk=t=>{const e=new Headers;e.append("apikey","oxxfYyna6PTVsQXKJyS12n0rTasGIgZh");const n={method:"GET",redirect:"follow",headers:e},r=`https://api.apilayer.com/image_to_text/url?url=${encodeURIComponent(t)}`;return fetch(r,n).then(s=>s.text())},Xk=()=>{const t=localStorage.getItem("other-settings");if(t==null)return{};const e=JSON.parse(t);return e??{}},kN=t=>(localStorage.setItem("other-settings",JSON.stringify(t)),new Promise((e,n)=>{En(r=>{r&&rC(r.uid,t).then(e).catch(n)})}));En(t=>{t&&sC(t.uid).then(e=>{e&&localStorage.setItem("other-settings",JSON.stringify(e))})});let io;const Zk=new Uint8Array(16);function e1(){if(!io&&(io=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!io))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return io(Zk)}const He=[];for(let t=0;t<256;++t)He.push((t+256).toString(16).slice(1));function t1(t,e=0){return He[t[e+0]]+He[t[e+1]]+He[t[e+2]]+He[t[e+3]]+"-"+He[t[e+4]]+He[t[e+5]]+"-"+He[t[e+6]]+He[t[e+7]]+"-"+He[t[e+8]]+He[t[e+9]]+"-"+He[t[e+10]]+He[t[e+11]]+He[t[e+12]]+He[t[e+13]]+He[t[e+14]]+He[t[e+15]]}const n1=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Mf={randomUUID:n1};function Ey(t,e,n){if(Mf.randomUUID&&!e&&!t)return Mf.randomUUID();t=t||{};const r=t.random||(t.rng||e1)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let s=0;s<16;++s)e[n+s]=r[s];return e}return t1(r)}const r1=t=>{const e=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0"),s=String(t.getHours()).padStart(2,"0"),i=String(t.getMinutes()).padStart(2,"0"),o=String(t.getSeconds()).padStart(2,"0");return`${e}.${n}.${r} ${s}:${i}:${o}`},wy=()=>{const t=localStorage.getItem("images");if(t==null)return{};const e=JSON.parse(t);return e??{}},ON=t=>{const e=wy(),n=e[t].name;return delete e[t],localStorage.setItem("images",JSON.stringify(e)),new Promise((r,s)=>{En(i=>{const o=i?i.uid:"public";i&&Al(n,o).then(()=>{kf(i.uid,e).then(r).catch(s)}).catch(a=>{a.code==="storage/object-not-found"?kf(i.uid,e).then(r).catch(s):s(a)})})})},s1=(t,e)=>new Promise((n,r)=>{En(s=>{const i=s?s.uid:"public";Qk(t,i).then(async o=>{const a=await Jk(o.ref),c=()=>n({url:a,path:i});if(s&&e){const l={name:t.name,url:a,date:r1(new Date)},u=Ey(),h=wy();h[u]=l,localStorage.setItem("images",JSON.stringify(h)),iC(s.uid,u,l).then(c).catch(c)}c()}).catch(r)})});En(t=>{t&&oC(t.uid).then(e=>{e&&localStorage.setItem("images",JSON.stringify(e))})});var i1={compareTwoStrings:Ty,findBestMatch:o1};function Ty(t,e){if(t=t.replace(/\s+/g,""),e=e.replace(/\s+/g,""),t===e)return 1;if(t.length<2||e.length<2)return 0;let n=new Map;for(let s=0;s<t.length-1;s++){const i=t.substring(s,s+2),o=n.has(i)?n.get(i)+1:1;n.set(i,o)}let r=0;for(let s=0;s<e.length-1;s++){const i=e.substring(s,s+2),o=n.has(i)?n.get(i):0;o>0&&(n.set(i,o-1),r++)}return 2*r/(t.length+e.length-2)}function o1(t,e){if(!a1(t,e))throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");const n=[];let r=0;for(let i=0;i<e.length;i++){const o=e[i],a=Ty(t,o);n.push({target:o,rating:a}),a>n[r].rating&&(r=i)}const s=n[r];return{ratings:n,bestMatch:s,bestMatchIndex:r}}function a1(t,e){return!(typeof t!="string"||!Array.isArray(e)||!e.length||e.find(function(n){return typeof n!="string"}))}const c1=(t,e)=>(t.indexOf("і")!=-1&&(e=e.replaceAll("i","і")),i1.compareTwoStrings(t,e)),l1=(t,e)=>{const n=t.split(/[\s\t\n]+/).filter(i=>i.trim().length>2);let r=0,s="";for(let i in e){const o=e[i].split(/[\s\t\n]+/).filter(l=>l.trim().length>2),c=n.reduce((l,u)=>l+Math.max(...o.map(h=>c1(u,h))),0)/n.length;if(c>r&&(r=c,s=e[i],r>.9))break}return{similarity:r,matched:s}},Lf={а:"a",А:"A",б:"b",Б:"B",в:"v",В:"V",г:"h",Г:"H",ґ:"g",Ґ:"G",д:"d",Д:"D",е:"e",Е:"E",є:"ie",Є:"Ye",ж:"zh",Ж:"Zh",з:"z",З:"Z",и:"y",И:"Y",і:"i",І:"I",ї:"yi",Ї:"Yi",й:"i",Й:"Y",к:"k",К:"K",л:"l",Л:"L",м:"m",М:"M",н:"n",Н:"N",о:"o",О:"O",п:"p",П:"P",р:"r",Р:"R",с:"s",С:"S",т:"t",Т:"T",у:"u",У:"U",ф:"f",Ф:"F",х:"kh",Х:"Kh",ц:"ts",Ц:"Ts",ч:"ch",Ч:"Ch",ш:"sh",Ш:"Sh",щ:"shch",Щ:"Shch",ь:"",Ь:"",ю:"iu",Ю:"Yu",я:"ia",Я:"Ya"},u1=t=>Lf[t]?Lf[t]:t,h1=t=>{let e="";for(let n in t)e+=u1(t[n]);return e},d1=t=>{const e=Xk()["save-image"];let n="";return s1(t,e).then(async r=>{const s=r.url;n=r.path;const i=await Yk(s),o=JSON.parse(i);if("all_text"in o)return o.all_text;throw"message"in o?o.message:"Maybe some error has occurred..."}).catch(r=>{throw e||Al(t.name,n),r}).then(r=>(e||Al(t.name,n),r))},Uf=(t,e,n,r)=>{const s=l1(e,n);if(s.similarity>.9){r.push(t);const i=n.indexOf(s.matched);return i!==-1&&n.splice(i,1),!0}return!1},f1=async(t,e)=>{const n=[],r=await d1(e),s=Math.min(...t.map(o=>o.name.length)),i=r.split(`
`).filter(o=>o.trim().length>=s/2);for(let o in t)Uf(t[o].name,t[o].name,i,n)||Uf(t[o].name,h1(t[o].name),i,n);return{detected:n,undetected:i}},p1={class:"border-bottom-0"},m1={class:"fw-semibold mb-0"},g1={class:"fw-semibold mb-1"},_1={key:0,class:"border-bottom-0 text-center"},y1={class:"mb-0 fw-normal"},v1={__name:"SimpleStudentListItem",props:{number:{type:Number,required:!0},name:{type:String,required:!0},removable:{type:Boolean,required:!1,default:!0},removeSelf:{type:Function,required:!0},selectedItem:{type:Number,required:!0}},setup(t){return(e,n)=>(te(),ae("tr",{class:Nt(t.selectedItem===t.number?"bg-danger":"")},[g("td",p1,[g("h6",m1,St(t.number),1)]),g("td",{class:"border-bottom-0",onClick:n[0]||(n[0]=()=>t.removeSelf(null))},[g("h6",g1,St(t.name),1)]),t.removable?(te(),ae("td",_1,[g("p",y1,[g("i",{class:"ti ti-x custom-btn",onClick:n[1]||(n[1]=(...r)=>t.removeSelf&&t.removeSelf(...r))})])])):Be("",!0)],2))}},E1={class:"table-responsive mt-4"},w1={class:"table text-nowrap mb-0 align-middle"},T1={class:"text-dark fs-4"},I1=g("th",{class:"border-bottom-0"},[g("h6",{class:"fw-semibold mb-0"},[g("i",{class:"ti ti-list-numbers"})])],-1),A1=g("th",{class:"border-bottom-0"},[g("h6",{class:"fw-semibold mb-0"},"Full name")],-1),R1={key:0,class:"border-bottom-0 text-center"},b1=g("h6",{class:"fw-semibold mb-0"},"Remove",-1),P1=[b1],Rl={__name:"SimpleStudentList",props:{students:{type:Array,required:!0},removable:{type:Boolean,required:!1,default:!0},removeItem:{type:Function,required:!0}},setup(t){const e=t,n=Ae(-1),r=(s,i,o)=>{if(o===n.value&&s){e.removeItem(i),n.value=-1;return}n.value=s?o:-1};return(s,i)=>(te(),ae("div",E1,[g("table",w1,[g("thead",T1,[g("tr",null,[I1,A1,t.removable?(te(),ae("th",R1,P1)):Be("",!0)])]),g("tbody",null,[(te(!0),ae(vt,null,Bl(t.students,(o,a)=>(te(),ql(v1,{key:a,number:a+1,name:o,"selected-item":n.value,"remove-self":c=>r(c,o,a+1),removable:t.removable},null,8,["number","name","selected-item","remove-self","removable"]))),128))])])]))}},S1={class:"modal-list"},C1={class:"card"},k1={class:"row",style:{"overflow-y":"auto","max-height":"90vh"}},O1={class:"card-body",style:{"overflow-x":"auto",position:"relative"}},N1=g("h2",null,"Your image:",-1),D1=["src"],x1={key:0,class:"card-body"},V1=g("h2",null,"Students detected:",-1),M1={class:"text-danger"},L1={style:{display:"flex","justify-content":"space-between","align-items":"center"}},U1={id:"students-list"},F1=["value"],B1=g("input",{type:"submit",class:"btn btn-primary py-2 fs-4 rounded-2 float-right ml-2",value:"Add student"},null,-1),$1=g("br",null,null,-1),j1={style:{display:"flex","justify-content":"space-around"},class:"mt-4"},q1={key:1,class:"card-body",style:{"text-align":"center"}},H1=g("h2",null,"No one has been identified from the photo!",-1),z1={class:"text-danger"},K1=g("br",null,null,-1),W1={key:1,class:"col-12 col-lg-6 col-xl-4"},G1={class:"card-body"},Q1=g("h2",null,"Undetected lines in image:",-1),J1={__name:"SubmitMarks",props:{students:{type:Array,required:!0},detected:{type:Array,required:!0},undetected:{type:Array,required:!0},image:{type:String,required:!0},removeItem:{type:Function,required:!0},isActive:{type:Boolean,required:!0},errorMessage:{type:String,required:!0},submit:{type:Function,required:!0},cancel:{type:Function,required:!0},addDetected:{type:Function,required:!0}},setup(t){const e=t,n=Ae(""),r=Ae(""),s=()=>(r.value="",e.students.filter(o=>!e.detected.includes(o.name)).map(o=>o.name).includes(n.value)?(e.addDetected(n.value),n.value="",!1):(r.value="Select item from list!",!1));return(i,o)=>(te(),ae("main",null,[g("div",{class:Nt(t.isActive?"modal-container":"modal-container hide"),style:{"overflow-y":"hidden"}},[g("div",S1,[g("div",C1,[g("div",k1,[t.image!==""?(te(),ae("div",{key:0,class:Nt(t.image!==""?"col-12 col-xl-4":"")},[g("div",O1,[N1,g("img",{src:t.image,alt:"image",style:{height:"80vh"}},null,8,D1)])],2)):Be("",!0),g("div",{class:Nt(t.image!==""?"col-12 col-lg-6 col-xl-4":"col-6")},[t.detected.length!=0?(te(),ae("div",x1,[V1,g("form",{onSubmit:s,action:"#",onsubmit:"return false;"},[g("span",M1,St(r.value),1),g("div",L1,[Nc(g("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),class:"form-control",required:"",type:"list",list:"students-list",autocomplete:"off"},null,512),[[Lp,n.value]]),g("datalist",U1,[(te(!0),ae(vt,null,Bl(t.students.filter(a=>!t.detected.includes(a.name)),(a,c)=>(te(),ae("option",{key:c,value:a.name},null,8,F1))),128))]),B1])],32),he(Rl,{students:t.detected,"remove-item":t.removeItem,"only-marks":!1},null,8,["students","remove-item"]),$1,g("div",j1,[g("input",{type:"button",class:"btn btn-success py-8 fs-4 mb-1 rounded-2",value:"Mark all",onClick:o[1]||(o[1]=(...a)=>t.submit&&t.submit(...a))}),g("input",{type:"button",class:"btn btn-danger py-8 fs-4 mb-1 rounded-2",value:"Cancel",onClick:o[2]||(o[2]=(...a)=>t.cancel&&t.cancel(...a))})])])):(te(),ae("div",q1,[H1,g("h4",z1,St(t.errorMessage),1),K1,g("input",{type:"button",class:"btn btn-success py-8 fs-4 mb-1 rounded-2",value:"Ok",onClick:o[3]||(o[3]=(...a)=>t.submit&&t.submit(...a))})]))],2),t.undetected.length!=0?(te(),ae("div",W1,[g("div",G1,[Q1,he(Rl,{students:t.undetected,"remove-item":()=>{},removable:!1,"only-marks":!1},null,8,["students"])])])):Be("",!0)])])])],2)]))}},Y1=(t,e)=>{const n=(t.clipboardData||t.originalEvent.clipboardData).items;for(let r=0;r<n.length;r++)if(n[r].type.indexOf("image")!==-1){const s=n[r].getAsFile();e(Iy(s));return}e(null)},Iy=t=>{const e=t.slice(0,t.size,"image/png");return new File([e],Ey(),{type:"image/png"})},X1=(t,e)=>{const n=new FileReader;n.onload=r=>{const s=r.target.result;e(s)},n.readAsDataURL(t)};const Z1=g("div",{style:{"margin-top":"50vh","margin-left":"50vw"}},[g("div",{class:"lds-ellipsis"},[g("div"),g("div"),g("div"),g("div")])],-1),eO=[Z1],tO={__name:"LoadingWindow",props:{isActive:{type:Boolean,required:!0}},setup(t){return(e,n)=>(te(),ae("main",null,[g("div",{class:Nt(t.isActive?"modal-container":"modal-container hide")},eO,2)]))}},nO=g("label",{for:"file",class:"form-label"},"Select image with students names or paste it from buffer",-1),rO={style:{display:"flex","align-items":"center"}},sO={class:"mr-4"},iO=g("input",{type:"submit",class:"btn btn-primary py-8 fs-4 mb-1 rounded-2",value:"Upload"},null,-1),oO={__name:"FileUpload",props:{students:{type:Array,required:!0},submit:{type:Function,required:!0}},setup(t){const e=t,n=Ae(null),r=Ae(!1),s=Ae(""),i=Ae(!1),o=Ae([]),a=Ae([]),c=Ae(""),l=w=>{o.value.push(w)},u=async w=>{if(s.value="",o.value=[],e.students.length==0){c.value="First provide students in students list!",r.value=!0,i.value=!1;return}try{const v=await f1(e.students,w);o.value=v.detected,a.value=v.undetected,X1(w,S=>s.value=S)}catch(v){console.log(v),c.value=v}r.value=!0,i.value=!1},h=()=>(i.value=!0,u(Iy(n.value.files[0])),!1),d=w=>{const v=o.value.indexOf(w);v!==-1&&o.value.splice(v,1)},m=()=>{r.value=!1,e.submit(ee(o.value))},E=()=>{r.value=!1};return document.addEventListener("paste",w=>{!i.value&&!r.value&&(i.value=!0,Y1(w,v=>{if(v){u(v);return}i.value=!1}))}),(w,v)=>(te(),ae("main",null,[g("form",{onSubmit:h,action:"#",onsubmit:"return false;",class:"mb-4"},[nO,g("div",rO,[g("div",sO,[g("input",{type:"file",class:"form-control",name:"file",ref_key:"file",ref:n,accept:"image/png, image/jpeg",required:""},null,512)]),iO])],32),g("div",null,[he(J1,{students:t.students,detected:o.value,undetected:a.value,"remove-item":d,image:s.value,"is-active":r.value,submit:m,cancel:E,"error-message":c.value,"add-detected":l},null,8,["students","detected","undetected","image","is-active","error-message"])]),he(tO,{"is-active":i.value},null,8,["is-active"])]))}},aO=t=>{const e=t.map(i=>`
    <tr>
    ${"name"in i?"<td>"+i.name+"</td>":""}<td style="color: ${i.color}">${i.mark}</td>
    </tr>
    `).join(" "),n=document.createElement("table");n.style="font-family:arial; color: black; font-size:14px;",n.innerHTML=e,document.body.appendChild(n);const r=document.createRange();r.selectNodeContents(n);const s=window.getSelection();s.removeAllRanges(),s.addRange(r),document.execCommand("copy"),document.body.removeChild(n)},cO=()=>{const t=localStorage.getItem("students");if(t==null)return[];const e=JSON.parse(t);return e??[]},Dr=t=>(localStorage.setItem("students",JSON.stringify(t)),new Promise((e,n)=>{En(r=>{r&&tC(r.uid,t).then(e).catch(n)})}));En(t=>{t&&nC(t.uid).then(e=>{if(e){localStorage.setItem("students",JSON.stringify(e));return}localStorage.setItem("students",null)})});const lO={class:"modal-list"},uO={class:"card"},hO={class:"card-body",style:{"overflow-y":"auto","max-height":"90vh"}},dO=g("h2",null,"Students to add:",-1),fO={style:{display:"flex","justify-content":"space-around"},class:"mt-4"},pO={__name:"StudentsPreview",props:{submit:{type:Function,required:!0},cancel:{type:Function,required:!0},event:{type:Object,required:!0}},setup(t){const e=t,n=Ae([]),r=o=>{const a=n.value.indexOf(o);a!=-1&&n.value.splice(a,1)},s=o=>{if(!("preventDefault"in o))return!1;o.preventDefault();const l=(o.clipboardData||window.clipboardData).getData("text").split(/\n/).filter(u=>u.trim().length>0).map(u=>u.replace(/(\r\n|\n|\r)/gm,"").substr(0,40));if(l.length<2)return e.submit(l),!1;o.target.blur(),n.value=[];for(let u in l)n.value.push(l[u]);return!0},i=()=>{e.submit(ee(n.value))};return(o,a)=>(te(),ae("main",null,[g("div",{class:Nt(s(t.event)?"modal-container":"modal-container hide"),style:{"overflow-y":"hidden"}},[g("div",lO,[g("div",uO,[g("div",hO,[dO,he(Rl,{students:n.value,"remove-item":r,"only-marks":!1},null,8,["students"]),g("div",fO,[g("input",{type:"button",class:"btn btn-success py-8 fs-4 mb-1 rounded-2",value:"Add all",onClick:i}),g("input",{type:"button",class:"btn btn-danger py-8 fs-4 mb-1 rounded-2",value:"Cancel",onClick:a[0]||(a[0]=(...c)=>t.cancel&&t.cancel(...c))})])])])])],2)]))}},mO={class:"modal-list",style:{"max-width":"400px",width:"100vh",height:"auto"}},gO={class:"card",style:{"margin-top":"30vh"}},_O={class:"card-body text-center"},yO={style:{display:"flex","justify-content":"space-around"},class:"mt-4"},vO={__name:"QuestionWindow",props:{question:{type:String,required:!0},submit:{type:Function,required:!0},cancel:{type:Function,required:!0}},setup(t){return(e,n)=>(te(),ae("main",null,[g("div",{class:Nt(t.question!==""?"modal-container":"modal-container hide")},[g("div",mO,[g("div",gO,[g("div",_O,[g("h4",null,St(t.question),1),g("div",yO,[g("input",{type:"button",class:"btn btn-success py-8 fs-4 mb-1 rounded-2",value:"Ok",onClick:n[0]||(n[0]=(...r)=>t.submit&&t.submit(...r))}),g("input",{type:"button",class:"btn btn-danger py-8 fs-4 mb-1 rounded-2",value:"Cancel",onClick:n[1]||(n[1]=(...r)=>t.cancel&&t.cancel(...r))})])])])])],2)]))}},EO={class:"card"},wO={class:"card-body"},TO=g("h1",{class:"mb-4"},"Dashboard",-1),IO={style:{color:"green","font-size":"0.7em"}},AO={class:"row",style:{width:"100%","align-items":"center"}},RO={class:"col-12 col-lg-6 col-md-6 mb-4",style:{display:"flex","align-items":"center"}},bO=g("input",{type:"submit",class:"btn btn-primary py-8 fs-4 rounded-2 float-right ml-2",value:"Add student"},null,-1),PO={class:"col-6 col-lg-2 col-md-2 col-sm-4 mb-4 float-right"},SO={class:"text-center"},CO=g("label",{for:"marks"},"Only marks",-1),kO=g("br",null,null,-1),OO={__name:"HomeView",setup(t){const e=Ae(""),n=Ae(cO()),r=Ae(JSON.parse(localStorage.getItem("onlyMarks"))),s=()=>{localStorage.setItem("onlyMarks",r.value)},i=Ae(),o=()=>e.value.trim().length==0?(i.value.setCustomValidity("Name can't be empty!"),i.value.reportValidity(),i.value.focus(),e.value="",!1):(a(e.value.trim()),!1),a=$=>{n.value.push({name:$,count:0}),n.value.sort((ie,_e)=>ie.name.localeCompare(_e.name)),e.value="",Dr(ee(n.value))},c=$=>{const ie=n.value.indexOf($);ie!==-1&&(n.value.splice(ie,1),Dr(ee(n.value)))},l=Ae({}),u=$=>{"preventDefault"in l.value||(l.value=$)},h=$=>{if(l.value={},$.length==1){e.value=$[0];return}for(let ie in $)n.value.push({name:$[ie],count:0});n.value.sort((ie,_e)=>ie.name.localeCompare(_e.name)),Dr(ee(n.value))},d=()=>{l.value={}},m=Ae(""),E=Ae(()=>{}),w=Ae(()=>m.value=""),v=()=>{m.value="Do you really want to remove all students?",E.value=()=>{n.value=[],Dr(ee(n.value)),m.value=""}},S=()=>{m.value="Do you really want to remove all students?",E.value=()=>{n.value.forEach($=>$.count=0),Dr(ee(n.value)),m.value=""}},O=$=>{for(let ie in $)for(let _e in n.value)$[ie]===n.value[_e].name&&n.value[_e].count++;Dr(ee(n.value))},L=Ae(""),k=$=>r.value?{mark:wl($.count),color:Tl($.count)}:{name:$.name,mark:wl($.count),color:Tl($.count)},le=()=>{const $=n.value.map(k);aO($),L.value="Copied!",setTimeout(()=>L.value="",2e3)};return($,ie)=>(te(),ae("main",null,[g("div",EO,[g("div",wO,[TO,he(oO,{students:n.value,submit:O},null,8,["students"]),g("h2",null,[Fc("Student list "),g("i",{class:"ti ti-copy custom-btn",onClick:le}),Fc(),g("span",IO,St(L.value),1)]),g("form",{onSubmit:o,action:"#",onsubmit:"return false;",class:"left-form mb-4 container-fluid"},[g("div",AO,[g("div",RO,[Nc(g("input",{ref_key:"nameInput",ref:i,type:"text",class:"form-control",name:"name","onUpdate:modelValue":ie[0]||(ie[0]=_e=>e.value=_e),onPaste:u,required:"",maxlength:"40",placeholder:"Student name...",style:{width:"100%"}},null,544),[[Lp,e.value]]),bO]),g("div",{class:"col-6 col-lg-2 col-md-2 col-sm-4 mb-4"},[g("input",{type:"button",class:"btn py-8 fs-4 rounded-2 float-right btn-warning",value:"Clear marks",onClick:S})]),g("div",PO,[g("div",SO,[CO,kO,Nc(g("input",{type:"checkbox",name:"marks","onUpdate:modelValue":ie[1]||(ie[1]=_e=>r.value=_e),onChange:s},null,544),[[HE,r.value]])])]),g("div",{class:"col-6 col-lg-2 col-md-2 col-sm-4 mb-4"},[g("input",{type:"button",class:"btn py-8 fs-4rounded-2 float-right btn-danger",value:"Remove all",onClick:v})])])],32),he(DC,{students:n.value,"remove-item":c,"only-marks":r.value},null,8,["students","only-marks"])])]),he(pO,{submit:h,cancel:d,event:l.value},null,8,["event"]),he(vO,{question:m.value,submit:E.value,cancel:w.value},null,8,["question","submit","cancel"])]))}},NO=Qw({history:fw("/"),routes:[{path:"/:pathMatch(.*)*",name:"404",component:()=>Bt(()=>import("./NotFoundView-81bbacc4.js"),["assets/NotFoundView-81bbacc4.js","assets/_plugin-vue_export-helper-c27b6911.js"])},{path:"/",name:"home",component:OO},{path:"/about",name:"about",component:()=>Bt(()=>import("./AboutView-acd75933.js"),["assets/AboutView-acd75933.js","assets/_plugin-vue_export-helper-c27b6911.js"])},{path:"/unauthorized",name:"unauthorized",component:()=>Bt(()=>import("./UnauthorizedView-189cb5a9.js"),["assets/UnauthorizedView-189cb5a9.js","assets/_plugin-vue_export-helper-c27b6911.js"])},{path:"/saves",name:"saves",component:()=>Bt(()=>import("./SavesView-203dde43.js"),["assets/SavesView-203dde43.js","assets/_plugin-vue_export-helper-c27b6911.js"])},{path:"/images",name:"images",component:()=>Bt(()=>import("./ImagesView-0f778264.js"),[]),beforeEnter:Md},{path:"/settings",name:"settings",component:()=>Bt(()=>import("./SettingsView-43627bdc.js"),["assets/SettingsView-43627bdc.js","assets/SettingsView-4ad0bff0.css"]),beforeEnter:Md},{path:"/help",name:"help",component:()=>Bt(()=>import("./HelpView-c2ae7c26.js"),["assets/HelpView-c2ae7c26.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/HelpView-8a32025c.css"])},{path:"/privacy",name:"privacy",component:()=>Bt(()=>import("./PrivacyView-ec05fbef.js"),["assets/PrivacyView-ec05fbef.js","assets/_plugin-vue_export-helper-c27b6911.js"])},{path:"/login",name:"login",component:()=>Bt(()=>import("./LoginView-44b86e14.js"),["assets/LoginView-44b86e14.js","assets/error-messages-e0a13655.js"])},{path:"/register",name:"register",component:()=>Bt(()=>import("./RegisterView-10a634c7.js"),["assets/RegisterView-10a634c7.js","assets/error-messages-e0a13655.js"])}]}),DO="/assets/logo-991c04ba.png",xO="/assets/user-7b83a5b5.png",Ff=()=>{(window.innerWidth>0?window.innerWidth:screen.width)<1199?(document.getElementById("main-wrapper").setAttribute("meta-data","mini-sidebar"),document.getElementById("main-wrapper").setAttribute("data-sidebartype","mini-sidebar"),document.getElementById("main-wrapper").classList.add("mini-sidebar")):(document.getElementById("main-wrapper").setAttribute("meta-data","full"),document.getElementById("main-wrapper").setAttribute("data-sidebartype","full"),document.getElementById("main-wrapper").classList.remove("mini-sidebar"))},bl=t=>{const e=document.getElementById("main-wrapper");e.getAttribute("meta-data")!="full"&&(e.classList.toggle("mini-sidebar"),e.classList.contains("mini-sidebar")&&(t.checked=!0,e.setAttribute("data-sidebartype","mini-sidebar")),e.classList.toggle("show-sidebar"))};document.addEventListener("DOMContentLoaded",()=>{Ff(),window.addEventListener("resize",Ff),document.querySelectorAll(".sidebartoggler").forEach(function(n){n.addEventListener("click",()=>{const r=document.getElementById("main-wrapper");r.classList.toggle("mini-sidebar"),r.classList.contains("mini-sidebar")?(n.checked=!0,r.setAttribute("data-sidebartype","mini-sidebar")):(n.checked=!1,r.setAttribute("data-sidebartype","full")),r.classList.toggle("show-sidebar")})}),document.querySelectorAll(".hide-btn").forEach(n=>{n.addEventListener("click",()=>{bl(n)})})});const VO={class:"page-wrapper",id:"main-wrapper","data-layout":"vertical","data-navbarbg":"skin6","data-sidebartype":"full","data-sidebar-position":"fixed","data-header-position":"fixed"},MO={class:"left-sidebar"},LO={class:"brand-logo d-flex align-items-center justify-content-between"},UO=g("img",{src:DO,style:{width:"100%"},alt:"logo"},null,-1),FO=g("div",{class:"close-btn d-xl-none d-block sidebartoggler cursor-pointer",id:"sidebarCollapse"},[g("i",{class:"ti ti-x fs-8"})],-1),BO={class:"sidebar-nav scroll-sidebar","data-simplebar":""},$O={id:"sidebarnav",class:"sidebar-nav"},jO={key:0,style:{display:"flex","align-items":"center"}},qO=g("img",{src:xO,alt:"",width:"35",height:"35",class:"rounded-circle mr-1"},null,-1),HO={class:"hide-menu"},zO=g("li",{class:"nav-small-cap"},[g("i",{class:"ti ti-dots nav-small-cap-icon fs-4"}),g("span",{class:"hide-menu"},"Home")],-1),KO={class:"sidebar-item hide-btn"},WO=g("span",null,[g("i",{class:"ti ti-layout-dashboard"})],-1),GO=g("span",{class:"hide-menu"},"Dashboard",-1),QO=g("li",{class:"nav-small-cap"},[g("i",{class:"ti ti-dots nav-small-cap-icon fs-4"}),g("span",{class:"hide-menu"},"Menu")],-1),JO={key:1,class:"sidebar-item hide-btn"},YO=g("span",null,[g("i",{class:"ti ti-cards"})],-1),XO={key:2,class:"sidebar-item hide-btn"},ZO=g("span",null,[g("i",{class:"ti ti-adjustments-alt"})],-1),eN={class:"sidebar-item hide-btn"},tN=g("span",null,[g("i",{class:"ti ti-alert-circle"})],-1),nN=g("span",{class:"hide-menu"},"About",-1),rN={class:"sidebar-item hide-btn"},sN=g("span",null,[g("i",{class:"ti ti-help"})],-1),iN=g("span",{class:"hide-menu"},"Help",-1),oN={class:"sidebar-item hide-btn"},aN=g("span",null,[g("i",{class:"ti ti-lock-square"})],-1),cN=g("span",{class:"hide-menu"},"Privacy",-1),lN={key:3},uN=g("li",{class:"nav-small-cap"},[g("i",{class:"ti ti-dots nav-small-cap-icon fs-4"}),g("span",{class:"hide-menu"},"Exit")],-1),hN=g("span",null,[g("i",{class:"ti ti-logout"})],-1),dN={key:1},fN=g("li",{class:"nav-small-cap"},[g("i",{class:"ti ti-dots nav-small-cap-icon fs-4"}),g("span",{class:"hide-menu"},"Account")],-1),pN={class:"sidebar-item hide-btn"},mN={class:"sidebar-link",href:"/login","aria-expanded":"false"},gN=g("span",null,[g("i",{class:"ti ti-login"})],-1),_N=g("li",{class:"sidebar-item hide-btn"},[g("a",{class:"sidebar-link",href:"/register","aria-expanded":"false"},[g("span",null,[g("i",{class:"ti ti-user"})]),g("span",{class:"hide-menu"},"Sign Up")])],-1),yN={class:"body-wrapper"},vN=fE('<header class="app-header" style="background-color:rgba(0, 0, 0, 0);pointer-events:none;"><nav class="navbar navbar-expand-lg"><ul class="navbar-nav"><li class="nav-item d-block d-xl-none"><a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)" style="pointer-events:auto;"><i class="ti ti-menu-2" style="background-color:white;padding:10px;box-shadow:2px 2px rgba(0, 0, 0, 0.263);"></i></a></li></ul></nav></header>',1),EN={class:"container-fluid"},wN={__name:"App",setup(t){const e=Ae(!1),n=Ae(""),r=()=>{$A().then(()=>{window.location.reload()}).catch(s=>console.log(s))};return BA(s=>{e.value=!!s,s&&(n.value=s.displayName)}),(s,i)=>(te(),ae("div",VO,[g("aside",MO,[g("div",null,[g("div",LO,[he(Ue(Cn),{to:"/",class:"text-nowrap logo-img"},{default:Sn(()=>[UO]),_:1}),FO]),g("nav",BO,[g("ul",$O,[e.value?(te(),ae("li",jO,[qO,g("div",HO,St(n.value),1)])):Be("",!0),zO,g("li",KO,[he(Ue(Cn),{class:"sidebar-link",to:"/","aria-expanded":"false"},{default:Sn(()=>[WO,GO]),_:1})]),g("div",null,[QO,Be("",!0),e.value?(te(),ae("li",JO,[he(Ue(Cn),{class:"sidebar-link",to:"/images","aria-expanded":"false"},{default:Sn(()=>[YO,g("span",{class:"hide-menu",onClick:i[0]||(i[0]=o=>Ue(bl)(o.target))},"Images")]),_:1})])):Be("",!0),e.value?(te(),ae("li",XO,[he(Ue(Cn),{class:"sidebar-link",to:"/settings","aria-expanded":"false"},{default:Sn(()=>[ZO,g("span",{class:"hide-menu",onClick:i[1]||(i[1]=o=>Ue(bl)(o.target))},"Settings")]),_:1})])):Be("",!0),g("li",eN,[he(Ue(Cn),{class:"sidebar-link",to:"/about","aria-expanded":"false"},{default:Sn(()=>[tN,nN]),_:1})]),g("li",rN,[he(Ue(Cn),{class:"sidebar-link",to:"/help","aria-expanded":"false"},{default:Sn(()=>[sN,iN]),_:1})]),g("li",oN,[he(Ue(Cn),{class:"sidebar-link",to:"/privacy","aria-expanded":"false"},{default:Sn(()=>[aN,cN]),_:1})]),e.value?(te(),ae("div",lN,[uN,g("li",{class:"sidebar-item hide-btn"},[g("a",{class:"sidebar-link",href:"/login","aria-expanded":"false"},[hN,g("span",{class:"hide-menu",onClick:r},"Logout")])])])):Be("",!0)]),e.value?Be("",!0):(te(),ae("div",dN,[fN,g("li",pN,[g("a",mN,[gN,g("span",{class:"hide-menu",onClick:i[2]||(i[2]=(...o)=>s.change&&s.change(...o))},"Sign In")])]),_N]))])])])]),g("div",yN,[vN,g("div",EN,[he(Ue(Jp))])])]))}},Ay=GE(wN);Ay.use(NO);Ay.mount("#app");export{eC as A,nC as B,oC as C,NO as D,Ue as E,vt as F,tO as G,IN as H,tC as I,cO as J,Cn as R,DO as _,g as a,fE as b,ae as c,Bl as d,ql as e,ON as f,wy as g,ra as h,SN as i,he as j,CN as k,ee as l,Xk as m,Nt as n,te as o,HE as p,TN as q,Ae as r,kN as s,St as t,Fc as u,Lp as v,Nc as w,Sn as x,AN as y,sC as z};
