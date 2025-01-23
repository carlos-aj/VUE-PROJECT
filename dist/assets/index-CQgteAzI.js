(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kh(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Le={},Wr=[],Ln=()=>{},RI=()=>!1,zl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Gh=n=>n.startsWith("onUpdate:"),rt=Object.assign,zh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},CI=Object.prototype.hasOwnProperty,ke=(n,e)=>CI.call(n,e),ce=Array.isArray,Hr=n=>Ql(n)==="[object Map]",F_=n=>Ql(n)==="[object Set]",fe=n=>typeof n=="function",Xe=n=>typeof n=="string",$s=n=>typeof n=="symbol",je=n=>n!==null&&typeof n=="object",U_=n=>(je(n)||fe(n))&&fe(n.then)&&fe(n.catch),B_=Object.prototype.toString,Ql=n=>B_.call(n),bI=n=>Ql(n).slice(8,-1),$_=n=>Ql(n)==="[object Object]",Qh=n=>Xe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,co=Kh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yl=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},SI=/-(\w)/g,cn=Yl(n=>n.replace(SI,(e,t)=>t?t.toUpperCase():"")),PI=/\B([A-Z])/g,js=Yl(n=>n.replace(PI,"-$1").toLowerCase()),Xl=Yl(n=>n.charAt(0).toUpperCase()+n.slice(1)),nu=Yl(n=>n?`on${Xl(n)}`:""),Ps=(n,e)=>!Object.is(n,e),Ka=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},j_=(n,e,t,s=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:s,value:t})},Fu=n=>{const e=parseFloat(n);return isNaN(e)?n:e},kI=n=>{const e=Xe(n)?Number(n):NaN;return isNaN(e)?n:e};let Rp;const Jl=()=>Rp||(Rp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Yh(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++){const s=n[t],r=Xe(s)?xI(s):Yh(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Xe(n)||je(n))return n}const NI=/;(?![^(]*\))/g,OI=/:([^]+)/,DI=/\/\*[^]*?\*\//g;function xI(n){const e={};return n.replace(DI,"").split(NI).forEach(t=>{if(t){const s=t.split(OI);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ar(n){let e="";if(Xe(n))e=n;else if(ce(n))for(let t=0;t<n.length;t++){const s=ar(n[t]);s&&(e+=s+" ")}else if(je(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const MI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",LI=Kh(MI);function q_(n){return!!n||n===""}const W_=n=>!!(n&&n.__v_isRef===!0),Nn=n=>Xe(n)?n:n==null?"":ce(n)||je(n)&&(n.toString===B_||!fe(n.toString))?W_(n)?Nn(n.value):JSON.stringify(n,H_,2):String(n),H_=(n,e)=>W_(e)?H_(n,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[s,r],i)=>(t[su(s,i)+" =>"]=r,t),{})}:F_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>su(t))}:$s(e)?su(e):je(e)&&!ce(e)&&!$_(e)?String(e):e,su=(n,e="")=>{var t;return $s(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class K_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Dt;try{return Dt=this,e()}finally{Dt=t}}}on(){Dt=this}off(){Dt=this.parent}stop(e){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function VI(n){return new K_(n)}function G_(){return Dt}function FI(n,e=!1){Dt&&Dt.cleanups.push(n)}let Ve;const ru=new WeakSet;class z_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dt&&Dt.active&&Dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ru.has(this)&&(ru.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Y_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cp(this),X_(this);const e=Ve,t=_n;Ve=this,_n=!0;try{return this.fn()}finally{J_(this),Ve=e,_n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zh(e);this.deps=this.depsTail=void 0,Cp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ru.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Uu(this)&&this.run()}get dirty(){return Uu(this)}}let Q_=0,uo,ho;function Y_(n,e=!1){if(n.flags|=8,e){n.next=ho,ho=n;return}n.next=uo,uo=n}function Xh(){Q_++}function Jh(){if(--Q_>0)return;if(ho){let e=ho;for(ho=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;uo;){let e=uo;for(uo=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){n||(n=s)}e=t}}if(n)throw n}function X_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function J_(n){let e,t=n.depsTail,s=t;for(;s;){const r=s.prevDep;s.version===-1?(s===t&&(t=r),Zh(s),UI(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}n.deps=e,n.depsTail=t}function Uu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Z_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Z_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===bo))return;n.globalVersion=bo;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Uu(n)){n.flags&=-3;return}const t=Ve,s=_n;Ve=n,_n=!0;try{X_(n);const r=n.fn(n._value);(e.version===0||Ps(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ve=t,_n=s,J_(n),n.flags&=-3}}function Zh(n,e=!1){const{dep:t,prevSub:s,nextSub:r}=n;if(s&&(s.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=s,n.nextSub=void 0),t.subs===n&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Zh(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function UI(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let _n=!0;const ey=[];function qs(){ey.push(_n),_n=!1}function Ws(){const n=ey.pop();_n=n===void 0?!0:n}function Cp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ve;Ve=void 0;try{e()}finally{Ve=t}}}let bo=0;class BI{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ed{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!_n||Ve===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ve)t=this.activeLink=new BI(Ve,this),Ve.deps?(t.prevDep=Ve.depsTail,Ve.depsTail.nextDep=t,Ve.depsTail=t):Ve.deps=Ve.depsTail=t,ty(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=Ve.depsTail,t.nextDep=void 0,Ve.depsTail.nextDep=t,Ve.depsTail=t,Ve.deps===t&&(Ve.deps=s)}return t}trigger(e){this.version++,bo++,this.notify(e)}notify(e){Xh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Jh()}}}function ty(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ty(s)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Bu=new WeakMap,hr=Symbol(""),$u=Symbol(""),So=Symbol("");function At(n,e,t){if(_n&&Ve){let s=Bu.get(n);s||Bu.set(n,s=new Map);let r=s.get(t);r||(s.set(t,r=new ed),r.map=s,r.key=t),r.track()}}function Xn(n,e,t,s,r,i){const o=Bu.get(n);if(!o){bo++;return}const a=c=>{c&&c.trigger()};if(Xh(),e==="clear")o.forEach(a);else{const c=ce(n),u=c&&Qh(t);if(c&&t==="length"){const h=Number(s);o.forEach((f,g)=>{(g==="length"||g===So||!$s(g)&&g>=h)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(So)),e){case"add":c?u&&a(o.get("length")):(a(o.get(hr)),Hr(n)&&a(o.get($u)));break;case"delete":c||(a(o.get(hr)),Hr(n)&&a(o.get($u)));break;case"set":Hr(n)&&a(o.get(hr));break}}Jh()}function Or(n){const e=Se(n);return e===n?e:(At(e,"iterate",So),rn(n)?e:e.map(Rt))}function Zl(n){return At(n=Se(n),"iterate",So),n}const $I={__proto__:null,[Symbol.iterator](){return iu(this,Symbol.iterator,Rt)},concat(...n){return Or(this).concat(...n.map(e=>ce(e)?Or(e):e))},entries(){return iu(this,"entries",n=>(n[1]=Rt(n[1]),n))},every(n,e){return Gn(this,"every",n,e,void 0,arguments)},filter(n,e){return Gn(this,"filter",n,e,t=>t.map(Rt),arguments)},find(n,e){return Gn(this,"find",n,e,Rt,arguments)},findIndex(n,e){return Gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Gn(this,"findLast",n,e,Rt,arguments)},findLastIndex(n,e){return Gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ou(this,"includes",n)},indexOf(...n){return ou(this,"indexOf",n)},join(n){return Or(this).join(n)},lastIndexOf(...n){return ou(this,"lastIndexOf",n)},map(n,e){return Gn(this,"map",n,e,void 0,arguments)},pop(){return Hi(this,"pop")},push(...n){return Hi(this,"push",n)},reduce(n,...e){return bp(this,"reduce",n,e)},reduceRight(n,...e){return bp(this,"reduceRight",n,e)},shift(){return Hi(this,"shift")},some(n,e){return Gn(this,"some",n,e,void 0,arguments)},splice(...n){return Hi(this,"splice",n)},toReversed(){return Or(this).toReversed()},toSorted(n){return Or(this).toSorted(n)},toSpliced(...n){return Or(this).toSpliced(...n)},unshift(...n){return Hi(this,"unshift",n)},values(){return iu(this,"values",Rt)}};function iu(n,e,t){const s=Zl(n),r=s[e]();return s!==n&&!rn(n)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=t(i.value)),i}),r}const jI=Array.prototype;function Gn(n,e,t,s,r,i){const o=Zl(n),a=o!==n&&!rn(n),c=o[e];if(c!==jI[e]){const f=c.apply(n,i);return a?Rt(f):f}let u=t;o!==n&&(a?u=function(f,g){return t.call(this,Rt(f),g,n)}:t.length>2&&(u=function(f,g){return t.call(this,f,g,n)}));const h=c.call(o,u,s);return a&&r?r(h):h}function bp(n,e,t,s){const r=Zl(n);let i=t;return r!==n&&(rn(n)?t.length>3&&(i=function(o,a,c){return t.call(this,o,a,c,n)}):i=function(o,a,c){return t.call(this,o,Rt(a),c,n)}),r[e](i,...s)}function ou(n,e,t){const s=Se(n);At(s,"iterate",So);const r=s[e](...t);return(r===-1||r===!1)&&sd(t[0])?(t[0]=Se(t[0]),s[e](...t)):r}function Hi(n,e,t=[]){qs(),Xh();const s=Se(n)[e].apply(n,t);return Jh(),Ws(),s}const qI=Kh("__proto__,__v_isRef,__isVue"),ny=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter($s));function WI(n){$s(n)||(n=String(n));const e=Se(this);return At(e,"has",n),e.hasOwnProperty(n)}class sy{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,s){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return s===(r?i?eA:ay:i?oy:iy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ce(e);if(!r){let c;if(o&&(c=$I[t]))return c;if(t==="hasOwnProperty")return WI}const a=Reflect.get(e,t,mt(e)?e:s);return($s(t)?ny.has(t):qI(t))||(r||At(e,"get",t),i)?a:mt(a)?o&&Qh(t)?a:a.value:je(a)?r?cy(a):ec(a):a}}class ry extends sy{constructor(e=!1){super(!1,e)}set(e,t,s,r){let i=e[t];if(!this._isShallow){const c=fr(i);if(!rn(s)&&!fr(s)&&(i=Se(i),s=Se(s)),!ce(e)&&mt(i)&&!mt(s))return c?!1:(i.value=s,!0)}const o=ce(e)&&Qh(t)?Number(t)<e.length:ke(e,t),a=Reflect.set(e,t,s,mt(e)?e:r);return e===Se(r)&&(o?Ps(s,i)&&Xn(e,"set",t,s):Xn(e,"add",t,s)),a}deleteProperty(e,t){const s=ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&s&&Xn(e,"delete",t,void 0),r}has(e,t){const s=Reflect.has(e,t);return(!$s(t)||!ny.has(t))&&At(e,"has",t),s}ownKeys(e){return At(e,"iterate",ce(e)?"length":hr),Reflect.ownKeys(e)}}class HI extends sy{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const KI=new ry,GI=new HI,zI=new ry(!0);const ju=n=>n,ka=n=>Reflect.getPrototypeOf(n);function QI(n,e,t){return function(...s){const r=this.__v_raw,i=Se(r),o=Hr(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=r[n](...s),h=t?ju:e?qu:Rt;return!e&&At(i,"iterate",c?$u:hr),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:a?[h(f[0]),h(f[1])]:h(f),done:g}},[Symbol.iterator](){return this}}}}function Na(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function YI(n,e){const t={get(r){const i=this.__v_raw,o=Se(i),a=Se(r);n||(Ps(r,a)&&At(o,"get",r),At(o,"get",a));const{has:c}=ka(o),u=e?ju:n?qu:Rt;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!n&&At(Se(r),"iterate",hr),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Se(i),a=Se(r);return n||(Ps(r,a)&&At(o,"has",r),At(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Se(a),u=e?ju:n?qu:Rt;return!n&&At(c,"iterate",hr),a.forEach((h,f)=>r.call(i,u(h),u(f),o))}};return rt(t,n?{add:Na("add"),set:Na("set"),delete:Na("delete"),clear:Na("clear")}:{add(r){!e&&!rn(r)&&!fr(r)&&(r=Se(r));const i=Se(this);return ka(i).has.call(i,r)||(i.add(r),Xn(i,"add",r,r)),this},set(r,i){!e&&!rn(i)&&!fr(i)&&(i=Se(i));const o=Se(this),{has:a,get:c}=ka(o);let u=a.call(o,r);u||(r=Se(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Ps(i,h)&&Xn(o,"set",r,i):Xn(o,"add",r,i),this},delete(r){const i=Se(this),{has:o,get:a}=ka(i);let c=o.call(i,r);c||(r=Se(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&Xn(i,"delete",r,void 0),u},clear(){const r=Se(this),i=r.size!==0,o=r.clear();return i&&Xn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=QI(r,n,e)}),t}function td(n,e){const t=YI(n,e);return(s,r,i)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?s:Reflect.get(ke(t,r)&&r in s?t:s,r,i)}const XI={get:td(!1,!1)},JI={get:td(!1,!0)},ZI={get:td(!0,!1)};const iy=new WeakMap,oy=new WeakMap,ay=new WeakMap,eA=new WeakMap;function tA(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nA(n){return n.__v_skip||!Object.isExtensible(n)?0:tA(bI(n))}function ec(n){return fr(n)?n:nd(n,!1,KI,XI,iy)}function ly(n){return nd(n,!1,zI,JI,oy)}function cy(n){return nd(n,!0,GI,ZI,ay)}function nd(n,e,t,s,r){if(!je(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=r.get(n);if(i)return i;const o=nA(n);if(o===0)return n;const a=new Proxy(n,o===2?s:t);return r.set(n,a),a}function Kr(n){return fr(n)?Kr(n.__v_raw):!!(n&&n.__v_isReactive)}function fr(n){return!!(n&&n.__v_isReadonly)}function rn(n){return!!(n&&n.__v_isShallow)}function sd(n){return n?!!n.__v_raw:!1}function Se(n){const e=n&&n.__v_raw;return e?Se(e):n}function sA(n){return!ke(n,"__v_skip")&&Object.isExtensible(n)&&j_(n,"__v_skip",!0),n}const Rt=n=>je(n)?ec(n):n,qu=n=>je(n)?cy(n):n;function mt(n){return n?n.__v_isRef===!0:!1}function nt(n){return hy(n,!1)}function uy(n){return hy(n,!0)}function hy(n,e){return mt(n)?n:new rA(n,e)}class rA{constructor(e,t){this.dep=new ed,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Se(e),this._value=t?e:Rt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,s=this.__v_isShallow||rn(e)||fr(e);e=s?e:Se(e),Ps(e,t)&&(this._rawValue=e,this._value=s?e:Rt(e),this.dep.trigger())}}function on(n){return mt(n)?n.value:n}function Qn(n){return fe(n)?n():on(n)}const iA={get:(n,e,t)=>e==="__v_raw"?n:on(Reflect.get(n,e,t)),set:(n,e,t,s)=>{const r=n[e];return mt(r)&&!mt(t)?(r.value=t,!0):Reflect.set(n,e,t,s)}};function dy(n){return Kr(n)?n:new Proxy(n,iA)}class oA{constructor(e,t,s){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ed(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Y_(this,!0),!0}get value(){const e=this.dep.track();return Z_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function aA(n,e,t=!1){let s,r;return fe(n)?s=n:(s=n.get,r=n.set),new oA(s,r,t)}const Oa={},ll=new WeakMap;let rr;function lA(n,e=!1,t=rr){if(t){let s=ll.get(t);s||ll.set(t,s=[]),s.push(n)}}function cA(n,e,t=Le){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=t,u=L=>r?L:rn(L)||r===!1||r===0?Jn(L,1):Jn(L);let h,f,g,m,w=!1,P=!1;if(mt(n)?(f=()=>n.value,w=rn(n)):Kr(n)?(f=()=>u(n),w=!0):ce(n)?(P=!0,w=n.some(L=>Kr(L)||rn(L)),f=()=>n.map(L=>{if(mt(L))return L.value;if(Kr(L))return u(L);if(fe(L))return c?c(L,2):L()})):fe(n)?e?f=c?()=>c(n,2):n:f=()=>{if(g){qs();try{g()}finally{Ws()}}const L=rr;rr=h;try{return c?c(n,3,[m]):n(m)}finally{rr=L}}:f=Ln,e&&r){const L=f,te=r===!0?1/0:r;f=()=>Jn(L(),te)}const S=G_(),x=()=>{h.stop(),S&&S.active&&zh(S.effects,h)};if(i&&e){const L=e;e=(...te)=>{L(...te),x()}}let M=P?new Array(n.length).fill(Oa):Oa;const D=L=>{if(!(!(h.flags&1)||!h.dirty&&!L))if(e){const te=h.run();if(r||w||(P?te.some((ne,C)=>Ps(ne,M[C])):Ps(te,M))){g&&g();const ne=rr;rr=h;try{const C=[te,M===Oa?void 0:P&&M[0]===Oa?[]:M,m];c?c(e,3,C):e(...C),M=te}finally{rr=ne}}}else h.run()};return a&&a(D),h=new z_(f),h.scheduler=o?()=>o(D,!1):D,m=L=>lA(L,!1,h),g=h.onStop=()=>{const L=ll.get(h);if(L){if(c)c(L,4);else for(const te of L)te();ll.delete(h)}},e?s?D(!0):M=h.run():o?o(D.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function Jn(n,e=1/0,t){if(e<=0||!je(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,mt(n))Jn(n.value,e,t);else if(ce(n))for(let s=0;s<n.length;s++)Jn(n[s],e,t);else if(F_(n)||Hr(n))n.forEach(s=>{Jn(s,e,t)});else if($_(n)){for(const s in n)Jn(n[s],e,t);for(const s of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,s)&&Jn(n[s],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yo(n,e,t,s){try{return s?n(...s):n()}catch(r){tc(r,e,t)}}function Tn(n,e,t,s){if(fe(n)){const r=Yo(n,e,t,s);return r&&U_(r)&&r.catch(i=>{tc(i,e,t)}),r}if(ce(n)){const r=[];for(let i=0;i<n.length;i++)r.push(Tn(n[i],e,t,s));return r}}function tc(n,e,t,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Le;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](n,c,u)===!1)return}a=a.parent}if(i){qs(),Yo(i,null,10,[n,c,u]),Ws();return}}uA(n,t,r,s,o)}function uA(n,e,t,s=!0,r=!1){if(r)throw n;console.error(n)}const xt=[];let Pn=-1;const Gr=[];let Is=null,xr=0;const fy=Promise.resolve();let cl=null;function py(n){const e=cl||fy;return n?e.then(this?n.bind(this):n):e}function hA(n){let e=Pn+1,t=xt.length;for(;e<t;){const s=e+t>>>1,r=xt[s],i=Po(r);i<n||i===n&&r.flags&2?e=s+1:t=s}return e}function rd(n){if(!(n.flags&1)){const e=Po(n),t=xt[xt.length-1];!t||!(n.flags&2)&&e>=Po(t)?xt.push(n):xt.splice(hA(e),0,n),n.flags|=1,gy()}}function gy(){cl||(cl=fy.then(_y))}function dA(n){ce(n)?Gr.push(...n):Is&&n.id===-1?Is.splice(xr+1,0,n):n.flags&1||(Gr.push(n),n.flags|=1),gy()}function Sp(n,e,t=Pn+1){for(;t<xt.length;t++){const s=xt[t];if(s&&s.flags&2){if(n&&s.id!==n.uid)continue;xt.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function my(n){if(Gr.length){const e=[...new Set(Gr)].sort((t,s)=>Po(t)-Po(s));if(Gr.length=0,Is){Is.push(...e);return}for(Is=e,xr=0;xr<Is.length;xr++){const t=Is[xr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Is=null,xr=0}}const Po=n=>n.id==null?n.flags&2?-1:1/0:n.id;function _y(n){try{for(Pn=0;Pn<xt.length;Pn++){const e=xt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Yo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<xt.length;Pn++){const e=xt[Pn];e&&(e.flags&=-2)}Pn=-1,xt.length=0,my(),cl=null,(xt.length||Gr.length)&&_y()}}let jt=null,yy=null;function ul(n){const e=jt;return jt=n,yy=n&&n.type.__scopeId||null,e}function ri(n,e=jt,t){if(!e||n._n)return n;const s=(...r)=>{s._d&&Fp(-1);const i=ul(e);let o;try{o=n(...r)}finally{ul(i),s._d&&Fp(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function zr(n,e){if(jt===null)return n;const t=ic(jt),s=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Le]=e[r];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Jn(o),s.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function tr(n,e,t,s){const r=n.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(qs(),Tn(c,t,8,[n.el,a,n,e]),Ws())}}const fA=Symbol("_vte"),pA=n=>n.__isTeleport,Dr=Symbol("_leaveCb"),Da=Symbol("_enterCb");function gA(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return id(()=>{n.isMounted=!0}),Ry(()=>{n.isUnmounting=!0}),n}const tn=[Function,Array],mA={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn};function _A(n,e){const{leavingVNodes:t}=n;let s=t.get(e.type);return s||(s=Object.create(null),t.set(e.type,s)),s}function Wu(n,e,t,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:g,onLeave:m,onAfterLeave:w,onLeaveCancelled:P,onBeforeAppear:S,onAppear:x,onAfterAppear:M,onAppearCancelled:D}=e,L=String(n.key),te=_A(t,n),ne=(E,R)=>{E&&Tn(E,s,9,R)},C=(E,R)=>{const b=R[1];ne(E,R),ce(E)?E.every(A=>A.length<=1)&&b():E.length<=1&&b()},y={mode:o,persisted:a,beforeEnter(E){let R=c;if(!t.isMounted)if(i)R=S||c;else return;E[Dr]&&E[Dr](!0);const b=te[L];b&&Mr(n,b)&&b.el[Dr]&&b.el[Dr](),ne(R,[E])},enter(E){let R=u,b=h,A=f;if(!t.isMounted)if(i)R=x||u,b=M||h,A=D||f;else return;let v=!1;const De=E[Da]=tt=>{v||(v=!0,tt?ne(A,[E]):ne(b,[E]),y.delayedLeave&&y.delayedLeave(),E[Da]=void 0)};R?C(R,[E,De]):De()},leave(E,R){const b=String(n.key);if(E[Da]&&E[Da](!0),t.isUnmounting)return R();ne(g,[E]);let A=!1;const v=E[Dr]=De=>{A||(A=!0,R(),De?ne(P,[E]):ne(w,[E]),E[Dr]=void 0,te[b]===n&&delete te[b])};te[b]=n,m?C(m,[E,v]):v()},clone(E){return Wu(E,e,t,s)}};return y}function ko(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ko(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Ey(n,e=!1,t){let s=[],r=0;for(let i=0;i<n.length;i++){let o=n[i];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:i);o.type===Mt?(o.patchFlag&128&&r++,s=s.concat(Ey(o.children,e,a))):(e||o.type!==oi)&&s.push(a!=null?pr(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function vy(n,e){return fe(n)?rt({name:n.name},e,{setup:n}):n}function Ty(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function hl(n,e,t,s,r=!1){if(ce(n)){n.forEach((w,P)=>hl(w,e&&(ce(e)?e[P]:e),t,s,r));return}if(fo(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&hl(n,e,t,s.component.subTree);return}const i=s.shapeFlag&4?ic(s.component):s.el,o=r?null:i,{i:a,r:c}=n,u=e&&e.r,h=a.refs===Le?a.refs={}:a.refs,f=a.setupState,g=Se(f),m=f===Le?()=>!1:w=>ke(g,w);if(u!=null&&u!==c&&(Xe(u)?(h[u]=null,m(u)&&(f[u]=null)):mt(u)&&(u.value=null)),fe(c))Yo(c,a,12,[o,h]);else{const w=Xe(c),P=mt(c);if(w||P){const S=()=>{if(n.f){const x=w?m(c)?f[c]:h[c]:c.value;r?ce(x)&&zh(x,i):ce(x)?x.includes(i)||x.push(i):w?(h[c]=[i],m(c)&&(f[c]=h[c])):(c.value=[i],n.k&&(h[n.k]=c.value))}else w?(h[c]=o,m(c)&&(f[c]=o)):P&&(c.value=o,n.k&&(h[n.k]=o))};o?(S.id=-1,Ht(S,t)):S()}}}Jl().requestIdleCallback;Jl().cancelIdleCallback;const fo=n=>!!n.type.__asyncLoader,wy=n=>n.type.__isKeepAlive;function yA(n,e){Iy(n,"a",e)}function EA(n,e){Iy(n,"da",e)}function Iy(n,e,t=ft){const s=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(nc(e,s,t),t){let r=t.parent;for(;r&&r.parent;)wy(r.parent.vnode)&&vA(s,e,t,r),r=r.parent}}function vA(n,e,t,s){const r=nc(e,n,s,!0);od(()=>{zh(s[e],r)},t)}function nc(n,e,t=ft,s=!1){if(t){const r=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{qs();const a=Xo(t),c=Tn(e,t,n,o);return a(),Ws(),c});return s?r.unshift(i):r.push(i),i}}const ds=n=>(e,t=ft)=>{(!Oo||n==="sp")&&nc(n,(...s)=>e(...s),t)},TA=ds("bm"),id=ds("m"),wA=ds("bu"),Ay=ds("u"),Ry=ds("bum"),od=ds("um"),Cy=ds("sp"),IA=ds("rtg"),AA=ds("rtc");function RA(n,e=ft){nc("ec",n,e)}const CA="components";function ii(n,e){return SA(CA,n,!0,e)||n}const bA=Symbol.for("v-ndc");function SA(n,e,t=!0,s=!1){const r=jt||ft;if(r){const i=r.type;{const a=gR(i,!1);if(a&&(a===e||a===cn(e)||a===Xl(cn(e))))return i}const o=Pp(r[n]||i[n],e)||Pp(r.appContext[n],e);return!o&&s?i:o}}function Pp(n,e){return n&&(n[e]||n[cn(e)]||n[Xl(cn(e))])}function PA(n,e,t,s){let r;const i=t,o=ce(n);if(o||Xe(n)){const a=o&&Kr(n);let c=!1;a&&(c=!rn(n),n=Zl(n)),r=new Array(n.length);for(let u=0,h=n.length;u<h;u++)r[u]=e(c?Rt(n[u]):n[u],u,void 0,i)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,i)}else if(je(n))if(n[Symbol.iterator])r=Array.from(n,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(n);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(n[h],h,c,i)}}else r=[];return r}const Hu=n=>n?Gy(n)?ic(n):Hu(n.parent):null,po=rt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Hu(n.parent),$root:n=>Hu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Sy(n),$forceUpdate:n=>n.f||(n.f=()=>{rd(n.update)}),$nextTick:n=>n.n||(n.n=py.bind(n.proxy)),$watch:n=>YA.bind(n)}),au=(n,e)=>n!==Le&&!n.__isScriptSetup&&ke(n,e),kA={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return t[e];case 3:return i[e]}else{if(au(s,e))return o[e]=1,s[e];if(r!==Le&&ke(r,e))return o[e]=2,r[e];if((u=n.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(t!==Le&&ke(t,e))return o[e]=4,t[e];Ku&&(o[e]=0)}}const h=po[e];let f,g;if(h)return e==="$attrs"&&At(n.attrs,"get",""),h(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Le&&ke(t,e))return o[e]=4,t[e];if(g=c.config.globalProperties,ke(g,e))return g[e]},set({_:n},e,t){const{data:s,setupState:r,ctx:i}=n;return au(r,e)?(r[e]=t,!0):s!==Le&&ke(s,e)?(s[e]=t,!0):ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!t[o]||n!==Le&&ke(n,o)||au(e,o)||(a=i[0])&&ke(a,o)||ke(s,o)||ke(po,o)||ke(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function kp(n){return ce(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ku=!0;function NA(n){const e=Sy(n),t=n.proxy,s=n.ctx;Ku=!1,e.beforeCreate&&Np(e.beforeCreate,n,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:g,beforeUpdate:m,updated:w,activated:P,deactivated:S,beforeDestroy:x,beforeUnmount:M,destroyed:D,unmounted:L,render:te,renderTracked:ne,renderTriggered:C,errorCaptured:y,serverPrefetch:E,expose:R,inheritAttrs:b,components:A,directives:v,filters:De}=e;if(u&&OA(u,s,null),o)for(const Te in o){const _e=o[Te];fe(_e)&&(s[Te]=_e.bind(t))}if(r){const Te=r.call(t,t);je(Te)&&(n.data=ec(Te))}if(Ku=!0,i)for(const Te in i){const _e=i[Te],qt=fe(_e)?_e.bind(t,t):fe(_e.get)?_e.get.bind(t,t):Ln,dn=!fe(_e)&&fe(_e.set)?_e.set.bind(t):Ln,Jt=nn({get:qt,set:dn});Object.defineProperty(s,Te,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:He=>Jt.value=He})}if(a)for(const Te in a)by(a[Te],s,t,Te);if(c){const Te=fe(c)?c.call(t):c;Reflect.ownKeys(Te).forEach(_e=>{Ga(_e,Te[_e])})}h&&Np(h,n,"c");function We(Te,_e){ce(_e)?_e.forEach(qt=>Te(qt.bind(t))):_e&&Te(_e.bind(t))}if(We(TA,f),We(id,g),We(wA,m),We(Ay,w),We(yA,P),We(EA,S),We(RA,y),We(AA,ne),We(IA,C),We(Ry,M),We(od,L),We(Cy,E),ce(R))if(R.length){const Te=n.exposed||(n.exposed={});R.forEach(_e=>{Object.defineProperty(Te,_e,{get:()=>t[_e],set:qt=>t[_e]=qt})})}else n.exposed||(n.exposed={});te&&n.render===Ln&&(n.render=te),b!=null&&(n.inheritAttrs=b),A&&(n.components=A),v&&(n.directives=v),E&&Ty(n)}function OA(n,e,t=Ln){ce(n)&&(n=Gu(n));for(const s in n){const r=n[s];let i;je(r)?"default"in r?i=Qt(r.from||s,r.default,!0):i=Qt(r.from||s):i=Qt(r),mt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Np(n,e,t){Tn(ce(n)?n.map(s=>s.bind(e.proxy)):n.bind(e.proxy),e,t)}function by(n,e,t,s){let r=s.includes(".")?jy(t,s):()=>t[s];if(Xe(n)){const i=e[n];fe(i)&&Yr(r,i)}else if(fe(n))Yr(r,n.bind(t));else if(je(n))if(ce(n))n.forEach(i=>by(i,e,t,s));else{const i=fe(n.handler)?n.handler.bind(t):e[n.handler];fe(i)&&Yr(r,i,n)}}function Sy(n){const e=n.type,{mixins:t,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!t&&!s?c=e:(c={},r.length&&r.forEach(u=>dl(c,u,o,!0)),dl(c,e,o)),je(e)&&i.set(e,c),c}function dl(n,e,t,s=!1){const{mixins:r,extends:i}=e;i&&dl(n,i,t,!0),r&&r.forEach(o=>dl(n,o,t,!0));for(const o in e)if(!(s&&o==="expose")){const a=DA[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const DA={data:Op,props:Dp,emits:Dp,methods:Zi,computed:Zi,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Zi,directives:Zi,watch:MA,provide:Op,inject:xA};function Op(n,e){return e?n?function(){return rt(fe(n)?n.call(this,this):n,fe(e)?e.call(this,this):e)}:e:n}function xA(n,e){return Zi(Gu(n),Gu(e))}function Gu(n){if(ce(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function Zi(n,e){return n?rt(Object.create(null),n,e):e}function Dp(n,e){return n?ce(n)&&ce(e)?[...new Set([...n,...e])]:rt(Object.create(null),kp(n),kp(e??{})):e}function MA(n,e){if(!n)return e;if(!e)return n;const t=rt(Object.create(null),n);for(const s in e)t[s]=Ot(n[s],e[s]);return t}function Py(){return{app:null,config:{isNativeTag:RI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let LA=0;function VA(n,e){return function(s,r=null){fe(s)||(s=rt({},s)),r!=null&&!je(r)&&(r=null);const i=Py(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:LA++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:_R,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(u,...f)):fe(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,g){if(!c){const m=u._ceVNode||Ge(s,r);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),n(m,h,g),c=!0,u._container=h,h.__vue_app__=u,ic(m.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Tn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=Qr;Qr=u;try{return h()}finally{Qr=f}}};return u}}let Qr=null;function Ga(n,e){if(ft){let t=ft.provides;const s=ft.parent&&ft.parent.provides;s===t&&(t=ft.provides=Object.create(s)),t[n]=e}}function Qt(n,e,t=!1){const s=ft||jt;if(s||Qr){const r=Qr?Qr._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&fe(e)?e.call(s&&s.proxy):e}}const ky={},Ny=()=>Object.create(ky),Oy=n=>Object.getPrototypeOf(n)===ky;function FA(n,e,t,s=!1){const r={},i=Ny();n.propsDefaults=Object.create(null),Dy(n,e,r,i);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=s?r:ly(r):n.type.props?n.props=r:n.props=i,n.attrs=i}function UA(n,e,t,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=n,a=Se(r),[c]=n.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let f=0;f<h.length;f++){let g=h[f];if(sc(n.emitsOptions,g))continue;const m=e[g];if(c)if(ke(i,g))m!==i[g]&&(i[g]=m,u=!0);else{const w=cn(g);r[w]=zu(c,a,w,m,n,!1)}else m!==i[g]&&(i[g]=m,u=!0)}}}else{Dy(n,e,r,i)&&(u=!0);let h;for(const f in a)(!e||!ke(e,f)&&((h=js(f))===f||!ke(e,h)))&&(c?t&&(t[f]!==void 0||t[h]!==void 0)&&(r[f]=zu(c,a,f,void 0,n,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!ke(e,f))&&(delete i[f],u=!0)}u&&Xn(n.attrs,"set","")}function Dy(n,e,t,s){const[r,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(co(c))continue;const u=e[c];let h;r&&ke(r,h=cn(c))?!i||!i.includes(h)?t[h]=u:(a||(a={}))[h]=u:sc(n.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Se(t),u=a||Le;for(let h=0;h<i.length;h++){const f=i[h];t[f]=zu(r,c,f,u[f],n,!ke(u,f))}}return o}function zu(n,e,t,s,r,i){const o=n[t];if(o!=null){const a=ke(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=r;if(t in u)s=u[t];else{const h=Xo(r);s=u[t]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(t,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===js(t))&&(s=!0))}return s}const BA=new WeakMap;function xy(n,e,t=!1){const s=t?BA:e.propsCache,r=s.get(n);if(r)return r;const i=n.props,o={},a=[];let c=!1;if(!fe(n)){const h=f=>{c=!0;const[g,m]=xy(f,e,!0);rt(o,g),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!i&&!c)return je(n)&&s.set(n,Wr),Wr;if(ce(i))for(let h=0;h<i.length;h++){const f=cn(i[h]);xp(f)&&(o[f]=Le)}else if(i)for(const h in i){const f=cn(h);if(xp(f)){const g=i[h],m=o[f]=ce(g)||fe(g)?{type:g}:rt({},g),w=m.type;let P=!1,S=!0;if(ce(w))for(let x=0;x<w.length;++x){const M=w[x],D=fe(M)&&M.name;if(D==="Boolean"){P=!0;break}else D==="String"&&(S=!1)}else P=fe(w)&&w.name==="Boolean";m[0]=P,m[1]=S,(P||ke(m,"default"))&&a.push(f)}}const u=[o,a];return je(n)&&s.set(n,u),u}function xp(n){return n[0]!=="$"&&!co(n)}const My=n=>n[0]==="_"||n==="$stable",ad=n=>ce(n)?n.map(kn):[kn(n)],$A=(n,e,t)=>{if(e._n)return e;const s=ri((...r)=>ad(e(...r)),t);return s._c=!1,s},Ly=(n,e,t)=>{const s=n._ctx;for(const r in n){if(My(r))continue;const i=n[r];if(fe(i))e[r]=$A(r,i,s);else if(i!=null){const o=ad(i);e[r]=()=>o}}},Vy=(n,e)=>{const t=ad(e);n.slots.default=()=>t},Fy=(n,e,t)=>{for(const s in e)(t||s!=="_")&&(n[s]=e[s])},jA=(n,e,t)=>{const s=n.slots=Ny();if(n.vnode.shapeFlag&32){const r=e._;r?(Fy(s,e,t),t&&j_(s,"_",r,!0)):Ly(e,s)}else e&&Vy(n,e)},qA=(n,e,t)=>{const{vnode:s,slots:r}=n;let i=!0,o=Le;if(s.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:Fy(r,e,t):(i=!e.$stable,Ly(e,r)),o=e}else e&&(Vy(n,e),o={default:1});if(i)for(const a in r)!My(a)&&o[a]==null&&delete r[a]},Ht=sR;function WA(n){return HA(n)}function HA(n,e){const t=Jl();t.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:g,setScopeId:m=Ln,insertStaticContent:w}=n,P=(T,I,k,F=null,j=null,U=null,G=void 0,H=null,W=!!I.dynamicChildren)=>{if(T===I)return;T&&!Mr(T,I)&&(F=V(T),He(T,j,U,!0),T=null),I.patchFlag===-2&&(W=!1,I.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:Y}=I;switch(q){case rc:S(T,I,k,F);break;case oi:x(T,I,k,F);break;case cu:T==null&&M(I,k,F,G);break;case Mt:A(T,I,k,F,j,U,G,H,W);break;default:Y&1?te(T,I,k,F,j,U,G,H,W):Y&6?v(T,I,k,F,j,U,G,H,W):(Y&64||Y&128)&&q.process(T,I,k,F,j,U,G,H,W,se)}oe!=null&&j&&hl(oe,T&&T.ref,U,I||T,!I)},S=(T,I,k,F)=>{if(T==null)s(I.el=a(I.children),k,F);else{const j=I.el=T.el;I.children!==T.children&&u(j,I.children)}},x=(T,I,k,F)=>{T==null?s(I.el=c(I.children||""),k,F):I.el=T.el},M=(T,I,k,F)=>{[T.el,T.anchor]=w(T.children,I,k,F,T.el,T.anchor)},D=({el:T,anchor:I},k,F)=>{let j;for(;T&&T!==I;)j=g(T),s(T,k,F),T=j;s(I,k,F)},L=({el:T,anchor:I})=>{let k;for(;T&&T!==I;)k=g(T),r(T),T=k;r(I)},te=(T,I,k,F,j,U,G,H,W)=>{I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),T==null?ne(I,k,F,j,U,G,H,W):E(T,I,j,U,G,H,W)},ne=(T,I,k,F,j,U,G,H)=>{let W,q;const{props:oe,shapeFlag:Y,transition:re,dirs:le}=T;if(W=T.el=o(T.type,U,oe&&oe.is,oe),Y&8?h(W,T.children):Y&16&&y(T.children,W,null,F,j,lu(T,U),G,H),le&&tr(T,null,F,"created"),C(W,T,T.scopeId,G,F),oe){for(const ge in oe)ge!=="value"&&!co(ge)&&i(W,ge,null,oe[ge],U,F);"value"in oe&&i(W,"value",null,oe.value,U),(q=oe.onVnodeBeforeMount)&&bn(q,F,T)}le&&tr(T,null,F,"beforeMount");const ae=KA(j,re);ae&&re.beforeEnter(W),s(W,I,k),((q=oe&&oe.onVnodeMounted)||ae||le)&&Ht(()=>{q&&bn(q,F,T),ae&&re.enter(W),le&&tr(T,null,F,"mounted")},j)},C=(T,I,k,F,j)=>{if(k&&m(T,k),F)for(let U=0;U<F.length;U++)m(T,F[U]);if(j){let U=j.subTree;if(I===U||Wy(U.type)&&(U.ssContent===I||U.ssFallback===I)){const G=j.vnode;C(T,G,G.scopeId,G.slotScopeIds,j.parent)}}},y=(T,I,k,F,j,U,G,H,W=0)=>{for(let q=W;q<T.length;q++){const oe=T[q]=H?As(T[q]):kn(T[q]);P(null,oe,I,k,F,j,U,G,H)}},E=(T,I,k,F,j,U,G)=>{const H=I.el=T.el;let{patchFlag:W,dynamicChildren:q,dirs:oe}=I;W|=T.patchFlag&16;const Y=T.props||Le,re=I.props||Le;let le;if(k&&nr(k,!1),(le=re.onVnodeBeforeUpdate)&&bn(le,k,I,T),oe&&tr(I,T,k,"beforeUpdate"),k&&nr(k,!0),(Y.innerHTML&&re.innerHTML==null||Y.textContent&&re.textContent==null)&&h(H,""),q?R(T.dynamicChildren,q,H,k,F,lu(I,j),U):G||_e(T,I,H,null,k,F,lu(I,j),U,!1),W>0){if(W&16)b(H,Y,re,k,j);else if(W&2&&Y.class!==re.class&&i(H,"class",null,re.class,j),W&4&&i(H,"style",Y.style,re.style,j),W&8){const ae=I.dynamicProps;for(let ge=0;ge<ae.length;ge++){const we=ae[ge],yt=Y[we],ct=re[we];(ct!==yt||we==="value")&&i(H,we,yt,ct,j,k)}}W&1&&T.children!==I.children&&h(H,I.children)}else!G&&q==null&&b(H,Y,re,k,j);((le=re.onVnodeUpdated)||oe)&&Ht(()=>{le&&bn(le,k,I,T),oe&&tr(I,T,k,"updated")},F)},R=(T,I,k,F,j,U,G)=>{for(let H=0;H<I.length;H++){const W=T[H],q=I[H],oe=W.el&&(W.type===Mt||!Mr(W,q)||W.shapeFlag&70)?f(W.el):k;P(W,q,oe,null,F,j,U,G,!0)}},b=(T,I,k,F,j)=>{if(I!==k){if(I!==Le)for(const U in I)!co(U)&&!(U in k)&&i(T,U,I[U],null,j,F);for(const U in k){if(co(U))continue;const G=k[U],H=I[U];G!==H&&U!=="value"&&i(T,U,H,G,j,F)}"value"in k&&i(T,"value",I.value,k.value,j)}},A=(T,I,k,F,j,U,G,H,W)=>{const q=I.el=T?T.el:a(""),oe=I.anchor=T?T.anchor:a("");let{patchFlag:Y,dynamicChildren:re,slotScopeIds:le}=I;le&&(H=H?H.concat(le):le),T==null?(s(q,k,F),s(oe,k,F),y(I.children||[],k,oe,j,U,G,H,W)):Y>0&&Y&64&&re&&T.dynamicChildren?(R(T.dynamicChildren,re,k,j,U,G,H),(I.key!=null||j&&I===j.subTree)&&Uy(T,I,!0)):_e(T,I,k,oe,j,U,G,H,W)},v=(T,I,k,F,j,U,G,H,W)=>{I.slotScopeIds=H,T==null?I.shapeFlag&512?j.ctx.activate(I,k,F,G,W):De(I,k,F,j,U,G,W):tt(T,I,W)},De=(T,I,k,F,j,U,G)=>{const H=T.component=uR(T,F,j);if(wy(T)&&(H.ctx.renderer=se),hR(H,!1,G),H.asyncDep){if(j&&j.registerDep(H,We,G),!T.el){const W=H.subTree=Ge(oi);x(null,W,I,k)}}else We(H,T,I,k,j,U,G)},tt=(T,I,k)=>{const F=I.component=T.component;if(tR(T,I,k))if(F.asyncDep&&!F.asyncResolved){Te(F,I,k);return}else F.next=I,F.update();else I.el=T.el,F.vnode=I},We=(T,I,k,F,j,U,G)=>{const H=()=>{if(T.isMounted){let{next:Y,bu:re,u:le,parent:ae,vnode:ge}=T;{const Et=By(T);if(Et){Y&&(Y.el=ge.el,Te(T,Y,G)),Et.asyncDep.then(()=>{T.isUnmounted||H()});return}}let we=Y,yt;nr(T,!1),Y?(Y.el=ge.el,Te(T,Y,G)):Y=ge,re&&Ka(re),(yt=Y.props&&Y.props.onVnodeBeforeUpdate)&&bn(yt,ae,Y,ge),nr(T,!0);const ct=Lp(T),Zt=T.subTree;T.subTree=ct,P(Zt,ct,f(Zt.el),V(Zt),T,j,U),Y.el=ct.el,we===null&&nR(T,ct.el),le&&Ht(le,j),(yt=Y.props&&Y.props.onVnodeUpdated)&&Ht(()=>bn(yt,ae,Y,ge),j)}else{let Y;const{el:re,props:le}=I,{bm:ae,m:ge,parent:we,root:yt,type:ct}=T,Zt=fo(I);nr(T,!1),ae&&Ka(ae),!Zt&&(Y=le&&le.onVnodeBeforeMount)&&bn(Y,we,I),nr(T,!0);{yt.ce&&yt.ce._injectChildStyle(ct);const Et=T.subTree=Lp(T);P(null,Et,k,F,T,j,U),I.el=Et.el}if(ge&&Ht(ge,j),!Zt&&(Y=le&&le.onVnodeMounted)){const Et=I;Ht(()=>bn(Y,we,Et),j)}(I.shapeFlag&256||we&&fo(we.vnode)&&we.vnode.shapeFlag&256)&&T.a&&Ht(T.a,j),T.isMounted=!0,I=k=F=null}};T.scope.on();const W=T.effect=new z_(H);T.scope.off();const q=T.update=W.run.bind(W),oe=T.job=W.runIfDirty.bind(W);oe.i=T,oe.id=T.uid,W.scheduler=()=>rd(oe),nr(T,!0),q()},Te=(T,I,k)=>{I.component=T;const F=T.vnode.props;T.vnode=I,T.next=null,UA(T,I.props,F,k),qA(T,I.children,k),qs(),Sp(T),Ws()},_e=(T,I,k,F,j,U,G,H,W=!1)=>{const q=T&&T.children,oe=T?T.shapeFlag:0,Y=I.children,{patchFlag:re,shapeFlag:le}=I;if(re>0){if(re&128){dn(q,Y,k,F,j,U,G,H,W);return}else if(re&256){qt(q,Y,k,F,j,U,G,H,W);return}}le&8?(oe&16&&Ft(q,j,U),Y!==q&&h(k,Y)):oe&16?le&16?dn(q,Y,k,F,j,U,G,H,W):Ft(q,j,U,!0):(oe&8&&h(k,""),le&16&&y(Y,k,F,j,U,G,H,W))},qt=(T,I,k,F,j,U,G,H,W)=>{T=T||Wr,I=I||Wr;const q=T.length,oe=I.length,Y=Math.min(q,oe);let re;for(re=0;re<Y;re++){const le=I[re]=W?As(I[re]):kn(I[re]);P(T[re],le,k,null,j,U,G,H,W)}q>oe?Ft(T,j,U,!0,!1,Y):y(I,k,F,j,U,G,H,W,Y)},dn=(T,I,k,F,j,U,G,H,W)=>{let q=0;const oe=I.length;let Y=T.length-1,re=oe-1;for(;q<=Y&&q<=re;){const le=T[q],ae=I[q]=W?As(I[q]):kn(I[q]);if(Mr(le,ae))P(le,ae,k,null,j,U,G,H,W);else break;q++}for(;q<=Y&&q<=re;){const le=T[Y],ae=I[re]=W?As(I[re]):kn(I[re]);if(Mr(le,ae))P(le,ae,k,null,j,U,G,H,W);else break;Y--,re--}if(q>Y){if(q<=re){const le=re+1,ae=le<oe?I[le].el:F;for(;q<=re;)P(null,I[q]=W?As(I[q]):kn(I[q]),k,ae,j,U,G,H,W),q++}}else if(q>re)for(;q<=Y;)He(T[q],j,U,!0),q++;else{const le=q,ae=q,ge=new Map;for(q=ae;q<=re;q++){const ut=I[q]=W?As(I[q]):kn(I[q]);ut.key!=null&&ge.set(ut.key,q)}let we,yt=0;const ct=re-ae+1;let Zt=!1,Et=0;const gs=new Array(ct);for(q=0;q<ct;q++)gs[q]=0;for(q=le;q<=Y;q++){const ut=T[q];if(yt>=ct){He(ut,j,U,!0);continue}let en;if(ut.key!=null)en=ge.get(ut.key);else for(we=ae;we<=re;we++)if(gs[we-ae]===0&&Mr(ut,I[we])){en=we;break}en===void 0?He(ut,j,U,!0):(gs[en-ae]=q+1,en>=Et?Et=en:Zt=!0,P(ut,I[en],k,null,j,U,G,H,W),yt++)}const Oi=Zt?GA(gs):Wr;for(we=Oi.length-1,q=ct-1;q>=0;q--){const ut=ae+q,en=I[ut],pa=ut+1<oe?I[ut+1].el:F;gs[q]===0?P(null,en,k,pa,j,U,G,H,W):Zt&&(we<0||q!==Oi[we]?Jt(en,k,pa,2):we--)}}},Jt=(T,I,k,F,j=null)=>{const{el:U,type:G,transition:H,children:W,shapeFlag:q}=T;if(q&6){Jt(T.component.subTree,I,k,F);return}if(q&128){T.suspense.move(I,k,F);return}if(q&64){G.move(T,I,k,se);return}if(G===Mt){s(U,I,k);for(let Y=0;Y<W.length;Y++)Jt(W[Y],I,k,F);s(T.anchor,I,k);return}if(G===cu){D(T,I,k);return}if(F!==2&&q&1&&H)if(F===0)H.beforeEnter(U),s(U,I,k),Ht(()=>H.enter(U),j);else{const{leave:Y,delayLeave:re,afterLeave:le}=H,ae=()=>s(U,I,k),ge=()=>{Y(U,()=>{ae(),le&&le()})};re?re(U,ae,ge):ge()}else s(U,I,k)},He=(T,I,k,F=!1,j=!1)=>{const{type:U,props:G,ref:H,children:W,dynamicChildren:q,shapeFlag:oe,patchFlag:Y,dirs:re,cacheIndex:le}=T;if(Y===-2&&(j=!1),H!=null&&hl(H,null,k,T,!0),le!=null&&(I.renderCache[le]=void 0),oe&256){I.ctx.deactivate(T);return}const ae=oe&1&&re,ge=!fo(T);let we;if(ge&&(we=G&&G.onVnodeBeforeUnmount)&&bn(we,I,T),oe&6)Cn(T.component,k,F);else{if(oe&128){T.suspense.unmount(k,F);return}ae&&tr(T,null,I,"beforeUnmount"),oe&64?T.type.remove(T,I,k,se,F):q&&!q.hasOnce&&(U!==Mt||Y>0&&Y&64)?Ft(q,I,k,!1,!0):(U===Mt&&Y&384||!j&&oe&16)&&Ft(W,I,k),F&&Ke(T)}(ge&&(we=G&&G.onVnodeUnmounted)||ae)&&Ht(()=>{we&&bn(we,I,T),ae&&tr(T,null,I,"unmounted")},k)},Ke=T=>{const{type:I,el:k,anchor:F,transition:j}=T;if(I===Mt){ps(k,F);return}if(I===cu){L(T);return}const U=()=>{r(k),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(T.shapeFlag&1&&j&&!j.persisted){const{leave:G,delayLeave:H}=j,W=()=>G(k,U);H?H(T.el,U,W):W()}else U()},ps=(T,I)=>{let k;for(;T!==I;)k=g(T),r(T),T=k;r(I)},Cn=(T,I,k)=>{const{bum:F,scope:j,job:U,subTree:G,um:H,m:W,a:q}=T;Mp(W),Mp(q),F&&Ka(F),j.stop(),U&&(U.flags|=8,He(G,T,I,k)),H&&Ht(H,I),Ht(()=>{T.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Ft=(T,I,k,F=!1,j=!1,U=0)=>{for(let G=U;G<T.length;G++)He(T[G],I,k,F,j)},V=T=>{if(T.shapeFlag&6)return V(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const I=g(T.anchor||T.el),k=I&&I[fA];return k?g(k):I};let J=!1;const Q=(T,I,k)=>{T==null?I._vnode&&He(I._vnode,null,null,!0):P(I._vnode||null,T,I,null,null,null,k),I._vnode=T,J||(J=!0,Sp(),my(),J=!1)},se={p:P,um:He,m:Jt,r:Ke,mt:De,mc:y,pc:_e,pbc:R,n:V,o:n};return{render:Q,hydrate:void 0,createApp:VA(Q)}}function lu({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function nr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function KA(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Uy(n,e,t=!1){const s=n.children,r=e.children;if(ce(s)&&ce(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=As(r[i]),a.el=o.el),!t&&a.patchFlag!==-2&&Uy(o,a)),a.type===rc&&(a.el=o.el)}}function GA(n){const e=n.slice(),t=[0];let s,r,i,o,a;const c=n.length;for(s=0;s<c;s++){const u=n[s];if(u!==0){if(r=t[t.length-1],n[r]<u){e[s]=r,t.push(s);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[s]=t[i-1]),t[i]=s)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function By(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:By(e)}function Mp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const zA=Symbol.for("v-scx"),QA=()=>Qt(zA);function Yr(n,e,t){return $y(n,e,t)}function $y(n,e,t=Le){const{immediate:s,deep:r,flush:i,once:o}=t,a=rt({},t),c=e&&s||!e&&i!=="post";let u;if(Oo){if(i==="sync"){const m=QA();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Ln,m.resume=Ln,m.pause=Ln,m}}const h=ft;a.call=(m,w,P)=>Tn(m,h,w,P);let f=!1;i==="post"?a.scheduler=m=>{Ht(m,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,w)=>{w?m():rd(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const g=cA(n,e,a);return Oo&&(u?u.push(g):c&&g()),g}function YA(n,e,t){const s=this.proxy,r=Xe(n)?n.includes(".")?jy(s,n):()=>s[n]:n.bind(s,s);let i;fe(e)?i=e:(i=e.handler,t=e);const o=Xo(this),a=$y(r,i.bind(s),t);return o(),a}function jy(n,e){const t=e.split(".");return()=>{let s=n;for(let r=0;r<t.length&&s;r++)s=s[t[r]];return s}}const XA=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${cn(e)}Modifiers`]||n[`${js(e)}Modifiers`];function JA(n,e,...t){if(n.isUnmounted)return;const s=n.vnode.props||Le;let r=t;const i=e.startsWith("update:"),o=i&&XA(s,e.slice(7));o&&(o.trim&&(r=t.map(h=>Xe(h)?h.trim():h)),o.number&&(r=t.map(Fu)));let a,c=s[a=nu(e)]||s[a=nu(cn(e))];!c&&i&&(c=s[a=nu(js(e))]),c&&Tn(c,n,6,r);const u=s[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Tn(u,n,6,r)}}function qy(n,e,t=!1){const s=e.emitsCache,r=s.get(n);if(r!==void 0)return r;const i=n.emits;let o={},a=!1;if(!fe(n)){const c=u=>{const h=qy(u,e,!0);h&&(a=!0,rt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(je(n)&&s.set(n,null),null):(ce(i)?i.forEach(c=>o[c]=null):rt(o,i),je(n)&&s.set(n,o),o)}function sc(n,e){return!n||!zl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(n,e[0].toLowerCase()+e.slice(1))||ke(n,js(e))||ke(n,e))}function Lp(n){const{type:e,vnode:t,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:g,setupState:m,ctx:w,inheritAttrs:P}=n,S=ul(n);let x,M;try{if(t.shapeFlag&4){const L=r||s,te=L;x=kn(u.call(te,L,h,f,m,g,w)),M=a}else{const L=e;x=kn(L.length>1?L(f,{attrs:a,slots:o,emit:c}):L(f,null)),M=e.props?a:ZA(a)}}catch(L){go.length=0,tc(L,n,1),x=Ge(oi)}let D=x;if(M&&P!==!1){const L=Object.keys(M),{shapeFlag:te}=D;L.length&&te&7&&(i&&L.some(Gh)&&(M=eR(M,i)),D=pr(D,M,!1,!0))}return t.dirs&&(D=pr(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&ko(D,t.transition),x=D,ul(S),x}const ZA=n=>{let e;for(const t in n)(t==="class"||t==="style"||zl(t))&&((e||(e={}))[t]=n[t]);return e},eR=(n,e)=>{const t={};for(const s in n)(!Gh(s)||!(s.slice(9)in e))&&(t[s]=n[s]);return t};function tR(n,e,t){const{props:s,children:r,component:i}=n,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return s?Vp(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const g=h[f];if(o[g]!==s[g]&&!sc(u,g))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Vp(s,o,u):!0:!!o;return!1}function Vp(n,e,t){const s=Object.keys(e);if(s.length!==Object.keys(n).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==n[i]&&!sc(t,i))return!0}return!1}function nR({vnode:n,parent:e},t){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.el=n.el),s===n)(n=e.vnode).el=t,e=e.parent;else break}}const Wy=n=>n.__isSuspense;function sR(n,e){e&&e.pendingBranch?ce(n)?e.effects.push(...n):e.effects.push(n):dA(n)}const Mt=Symbol.for("v-fgt"),rc=Symbol.for("v-txt"),oi=Symbol.for("v-cmt"),cu=Symbol.for("v-stc"),go=[];let Gt=null;function Lt(n=!1){go.push(Gt=n?null:[])}function rR(){go.pop(),Gt=go[go.length-1]||null}let No=1;function Fp(n,e=!1){No+=n,n<0&&Gt&&e&&(Gt.hasOnce=!0)}function Hy(n){return n.dynamicChildren=No>0?Gt||Wr:null,rR(),No>0&&Gt&&Gt.push(n),n}function an(n,e,t,s,r,i){return Hy(X(n,e,t,s,r,i,!0))}function Qu(n,e,t,s,r){return Hy(Ge(n,e,t,s,r,!0))}function fl(n){return n?n.__v_isVNode===!0:!1}function Mr(n,e){return n.type===e.type&&n.key===e.key}const Ky=({key:n})=>n??null,za=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Xe(n)||mt(n)||fe(n)?{i:jt,r:n,k:e,f:!!t}:n:null);function X(n,e=null,t=null,s=0,r=null,i=n===Mt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ky(e),ref:e&&za(e),scopeId:yy,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:jt};return a?(ld(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Xe(t)?8:16),No>0&&!o&&Gt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Gt.push(c),c}const Ge=iR;function iR(n,e=null,t=null,s=0,r=null,i=!1){if((!n||n===bA)&&(n=oi),fl(n)){const a=pr(n,e,!0);return t&&ld(a,t),No>0&&!i&&Gt&&(a.shapeFlag&6?Gt[Gt.indexOf(n)]=a:Gt.push(a)),a.patchFlag=-2,a}if(mR(n)&&(n=n.__vccOpts),e){e=oR(e);let{class:a,style:c}=e;a&&!Xe(a)&&(e.class=ar(a)),je(c)&&(sd(c)&&!ce(c)&&(c=rt({},c)),e.style=Yh(c))}const o=Xe(n)?1:Wy(n)?128:pA(n)?64:je(n)?4:fe(n)?2:0;return X(n,e,t,s,r,o,i,!0)}function oR(n){return n?sd(n)||Oy(n)?rt({},n):n:null}function pr(n,e,t=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=n,u=e?aR(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Ky(u),ref:e&&e.ref?t&&i?ce(i)?i.concat(za(e)):[i,za(e)]:za(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&pr(n.ssContent),ssFallback:n.ssFallback&&pr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&s&&ko(h,c.clone(h)),h}function Bt(n=" ",e=0){return Ge(rc,null,n,e)}function kn(n){return n==null||typeof n=="boolean"?Ge(oi):ce(n)?Ge(Mt,null,n.slice()):fl(n)?As(n):Ge(rc,null,String(n))}function As(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:pr(n)}function ld(n,e){let t=0;const{shapeFlag:s}=n;if(e==null)e=null;else if(ce(e))t=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ld(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Oy(e)?e._ctx=jt:r===3&&jt&&(jt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:jt},t=32):(e=String(e),s&64?(t=16,e=[Bt(e)]):t=8);n.children=e,n.shapeFlag|=t}function aR(...n){const e={};for(let t=0;t<n.length;t++){const s=n[t];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ar([e.class,s.class]));else if(r==="style")e.style=Yh([e.style,s.style]);else if(zl(r)){const i=e[r],o=s[r];o&&i!==o&&!(ce(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function bn(n,e,t,s=null){Tn(n,e,7,[t,s])}const lR=Py();let cR=0;function uR(n,e,t){const s=n.type,r=(e?e.appContext:n.appContext)||lR,i={uid:cR++,vnode:n,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new K_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xy(s,r),emitsOptions:qy(s,r),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:s.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=JA.bind(null,i),n.ce&&n.ce(i),i}let ft=null;const cd=()=>ft||jt;let pl,Yu;{const n=Jl(),e=(t,s)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};pl=e("__VUE_INSTANCE_SETTERS__",t=>ft=t),Yu=e("__VUE_SSR_SETTERS__",t=>Oo=t)}const Xo=n=>{const e=ft;return pl(n),n.scope.on(),()=>{n.scope.off(),pl(e)}},Up=()=>{ft&&ft.scope.off(),pl(null)};function Gy(n){return n.vnode.shapeFlag&4}let Oo=!1;function hR(n,e=!1,t=!1){e&&Yu(e);const{props:s,children:r}=n.vnode,i=Gy(n);FA(n,s,i,e),jA(n,r,t);const o=i?dR(n,e):void 0;return e&&Yu(!1),o}function dR(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,kA);const{setup:s}=t;if(s){qs();const r=n.setupContext=s.length>1?pR(n):null,i=Xo(n),o=Yo(s,n,0,[n.props,r]),a=U_(o);if(Ws(),i(),(a||n.sp)&&!fo(n)&&Ty(n),a){if(o.then(Up,Up),e)return o.then(c=>{Bp(n,c)}).catch(c=>{tc(c,n,0)});n.asyncDep=o}else Bp(n,o)}else zy(n)}function Bp(n,e,t){fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:je(e)&&(n.setupState=dy(e)),zy(n)}function zy(n,e,t){const s=n.type;n.render||(n.render=s.render||Ln);{const r=Xo(n);qs();try{NA(n)}finally{Ws(),r()}}}const fR={get(n,e){return At(n,"get",""),n[e]}};function pR(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,fR),slots:n.slots,emit:n.emit,expose:e}}function ic(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(dy(sA(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in po)return po[t](n)},has(e,t){return t in e||t in po}})):n.proxy}function gR(n,e=!0){return fe(n)?n.displayName||n.name:n.name||e&&n.__name}function mR(n){return fe(n)&&"__vccOpts"in n}const nn=(n,e)=>aA(n,e,Oo);function Qy(n,e,t){const s=arguments.length;return s===2?je(e)&&!ce(e)?fl(e)?Ge(n,null,[e]):Ge(n,e):Ge(n,null,e):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&fl(t)&&(t=[t]),Ge(n,e,t))}const _R="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xu;const $p=typeof window<"u"&&window.trustedTypes;if($p)try{Xu=$p.createPolicy("vue",{createHTML:n=>n})}catch{}const Yy=Xu?n=>Xu.createHTML(n):n=>n,yR="http://www.w3.org/2000/svg",ER="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,jp=Yn&&Yn.createElement("template"),vR={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,s)=>{const r=e==="svg"?Yn.createElementNS(yR,n):e==="mathml"?Yn.createElementNS(ER,n):t?Yn.createElement(n,{is:t}):Yn.createElement(n);return n==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,s,r,i){const o=t?t.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{jp.innerHTML=Yy(s==="svg"?`<svg>${n}</svg>`:s==="mathml"?`<math>${n}</math>`:n);const a=jp.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Es="transition",Ki="animation",ai=Symbol("_vtc"),Xy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},TR=rt({},mA,Xy),sr=(n,e=[])=>{ce(n)?n.forEach(t=>t(...e)):n&&n(...e)},qp=n=>n?ce(n)?n.some(e=>e.length>1):n.length>1:!1;function wR(n){const e={};for(const A in n)A in Xy||(e[A]=n[A]);if(n.css===!1)return e;const{name:t="v",type:s,duration:r,enterFromClass:i=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:g=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,w=IR(r),P=w&&w[0],S=w&&w[1],{onBeforeEnter:x,onEnter:M,onEnterCancelled:D,onLeave:L,onLeaveCancelled:te,onBeforeAppear:ne=x,onAppear:C=M,onAppearCancelled:y=D}=e,E=(A,v,De,tt)=>{A._enterCancelled=tt,ws(A,v?h:a),ws(A,v?u:o),De&&De()},R=(A,v)=>{A._isLeaving=!1,ws(A,f),ws(A,m),ws(A,g),v&&v()},b=A=>(v,De)=>{const tt=A?C:M,We=()=>E(v,A,De);sr(tt,[v,We]),Wp(()=>{ws(v,A?c:i),Sn(v,A?h:a),qp(tt)||Hp(v,s,P,We)})};return rt(e,{onBeforeEnter(A){sr(x,[A]),Sn(A,i),Sn(A,o)},onBeforeAppear(A){sr(ne,[A]),Sn(A,c),Sn(A,u)},onEnter:b(!1),onAppear:b(!0),onLeave(A,v){A._isLeaving=!0;const De=()=>R(A,v);Sn(A,f),A._enterCancelled?(Sn(A,g),Ju()):(Ju(),Sn(A,g)),Wp(()=>{A._isLeaving&&(ws(A,f),Sn(A,m),qp(L)||Hp(A,s,S,De))}),sr(L,[A,De])},onEnterCancelled(A){E(A,!1,void 0,!0),sr(D,[A])},onAppearCancelled(A){E(A,!0,void 0,!0),sr(y,[A])},onLeaveCancelled(A){R(A),sr(te,[A])}})}function IR(n){if(n==null)return null;if(je(n))return[uu(n.enter),uu(n.leave)];{const e=uu(n);return[e,e]}}function uu(n){return kI(n)}function Sn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ai]||(n[ai]=new Set)).add(e)}function ws(n,e){e.split(/\s+/).forEach(s=>s&&n.classList.remove(s));const t=n[ai];t&&(t.delete(e),t.size||(n[ai]=void 0))}function Wp(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let AR=0;function Hp(n,e,t,s){const r=n._endId=++AR,i=()=>{r===n._endId&&s()};if(t!=null)return setTimeout(i,t);const{type:o,timeout:a,propCount:c}=Jy(n,e);if(!o)return s();const u=o+"end";let h=0;const f=()=>{n.removeEventListener(u,g),i()},g=m=>{m.target===n&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),n.addEventListener(u,g)}function Jy(n,e){const t=window.getComputedStyle(n),s=w=>(t[w]||"").split(", "),r=s(`${Es}Delay`),i=s(`${Es}Duration`),o=Kp(r,i),a=s(`${Ki}Delay`),c=s(`${Ki}Duration`),u=Kp(a,c);let h=null,f=0,g=0;e===Es?o>0&&(h=Es,f=o,g=i.length):e===Ki?u>0&&(h=Ki,f=u,g=c.length):(f=Math.max(o,u),h=f>0?o>u?Es:Ki:null,g=h?h===Es?i.length:c.length:0);const m=h===Es&&/\b(transform|all)(,|$)/.test(s(`${Es}Property`).toString());return{type:h,timeout:f,propCount:g,hasTransform:m}}function Kp(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,s)=>Gp(t)+Gp(n[s])))}function Gp(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Ju(){return document.body.offsetHeight}function RR(n,e,t){const s=n[ai];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const zp=Symbol("_vod"),CR=Symbol("_vsh"),bR=Symbol(""),SR=/(^|;)\s*display\s*:/;function PR(n,e,t){const s=n.style,r=Xe(t);let i=!1;if(t&&!r){if(e)if(Xe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Qa(s,a,"")}else for(const o in e)t[o]==null&&Qa(s,o,"");for(const o in t)o==="display"&&(i=!0),Qa(s,o,t[o])}else if(r){if(e!==t){const o=s[bR];o&&(t+=";"+o),s.cssText=t,i=SR.test(t)}}else e&&n.removeAttribute("style");zp in n&&(n[zp]=i?s.display:"",n[CR]&&(s.display="none"))}const Qp=/\s*!important$/;function Qa(n,e,t){if(ce(t))t.forEach(s=>Qa(n,e,s));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const s=kR(n,e);Qp.test(t)?n.setProperty(js(s),t.replace(Qp,""),"important"):n[s]=t}}const Yp=["Webkit","Moz","ms"],hu={};function kR(n,e){const t=hu[e];if(t)return t;let s=cn(e);if(s!=="filter"&&s in n)return hu[e]=s;s=Xl(s);for(let r=0;r<Yp.length;r++){const i=Yp[r]+s;if(i in n)return hu[e]=i}return e}const Xp="http://www.w3.org/1999/xlink";function Jp(n,e,t,s,r,i=LI(e)){s&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Xp,e.slice(6,e.length)):n.setAttributeNS(Xp,e,t):t==null||i&&!q_(t)?n.removeAttribute(e):n.setAttribute(e,i?"":$s(t)?String(t):t)}function Zp(n,e,t,s,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Yy(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=q_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Lr(n,e,t,s){n.addEventListener(e,t,s)}function NR(n,e,t,s){n.removeEventListener(e,t,s)}const eg=Symbol("_vei");function OR(n,e,t,s,r=null){const i=n[eg]||(n[eg]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=DR(e);if(s){const u=i[e]=LR(s,r);Lr(n,a,u,c)}else o&&(NR(n,a,o,c),i[e]=void 0)}}const tg=/(?:Once|Passive|Capture)$/;function DR(n){let e;if(tg.test(n)){e={};let s;for(;s=n.match(tg);)n=n.slice(0,n.length-s[0].length),e[s[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):js(n.slice(2)),e]}let du=0;const xR=Promise.resolve(),MR=()=>du||(xR.then(()=>du=0),du=Date.now());function LR(n,e){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Tn(VR(s,t.value),e,5,[s])};return t.value=n,t.attached=MR(),t}function VR(n,e){if(ce(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ng=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,FR=(n,e,t,s,r,i)=>{const o=r==="svg";e==="class"?RR(n,s,o):e==="style"?PR(n,t,s):zl(e)?Gh(e)||OR(n,e,t,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):UR(n,e,s,o))?(Zp(n,e,s),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jp(n,e,s,o,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Xe(s))?Zp(n,cn(e),s,i,e):(e==="true-value"?n._trueValue=s:e==="false-value"&&(n._falseValue=s),Jp(n,e,s,o))};function UR(n,e,t,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in n&&ng(e)&&fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ng(e)&&Xe(t)?!1:e in n}const Zy=new WeakMap,eE=new WeakMap,gl=Symbol("_moveCb"),sg=Symbol("_enterCb"),BR=n=>(delete n.props.mode,n),$R=BR({name:"TransitionGroup",props:rt({},TR,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=cd(),s=gA();let r,i;return Ay(()=>{if(!r.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!KR(r[0].el,t.vnode.el,o))return;r.forEach(qR),r.forEach(WR);const a=r.filter(HR);Ju(),a.forEach(c=>{const u=c.el,h=u.style;Sn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const f=u[gl]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",f),u[gl]=null,ws(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=Se(n),a=wR(o);let c=o.tag||Mt;if(r=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(r.push(h),ko(h,Wu(h,a,s,t)),Zy.set(h,h.el.getBoundingClientRect()))}i=e.default?Ey(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&ko(h,Wu(h,a,s,t))}return Ge(c,null,i)}}}),jR=$R;function qR(n){const e=n.el;e[gl]&&e[gl](),e[sg]&&e[sg]()}function WR(n){eE.set(n,n.el.getBoundingClientRect())}function HR(n){const e=Zy.get(n),t=eE.get(n),s=e.left-t.left,r=e.top-t.top;if(s||r){const i=n.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",n}}function KR(n,e,t){const s=n.cloneNode(),r=n[ai];r&&r.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),t.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:o}=Jy(s);return i.removeChild(s),o}const rg=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ce(e)?t=>Ka(e,t):e};function GR(n){n.target.composing=!0}function ig(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fu=Symbol("_assign"),Xr={created(n,{modifiers:{lazy:e,trim:t,number:s}},r){n[fu]=rg(r);const i=s||r.props&&r.props.type==="number";Lr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=Fu(a)),n[fu](a)}),t&&Lr(n,"change",()=>{n.value=n.value.trim()}),e||(Lr(n,"compositionstart",GR),Lr(n,"compositionend",ig),Lr(n,"change",ig))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:s,trim:r,number:i}},o){if(n[fu]=rg(o),n.composing)return;const a=(i||n.type==="number")&&!/^0\d/.test(n.value)?Fu(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(s&&e===t||r&&n.value.trim()===c)||(n.value=c))}},zR=["ctrl","shift","alt","meta"],QR={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>zR.some(t=>n[`${t}Key`]&&!e.includes(t))},tE=(n,e)=>{const t=n._withMods||(n._withMods={}),s=e.join(".");return t[s]||(t[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=QR[e[o]];if(a&&a(r,e))return}return n(r,...i)})},YR={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Do=(n,e)=>{const t=n._withKeys||(n._withKeys={}),s=e.join(".");return t[s]||(t[s]=r=>{if(!("key"in r))return;const i=js(r.key);if(e.some(o=>o===i||YR[o]===i))return n(r)})},XR=rt({patchProp:FR},vR);let og;function JR(){return og||(og=WA(XR))}const ZR=(...n)=>{const e=JR().createApp(...n),{mount:t}=e;return e.mount=s=>{const r=tC(s);if(!r)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,eC(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function eC(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function tC(n){return Xe(n)?document.querySelector(n):n}var ag={};/**
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
 */const nE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const z=function(n,e){if(!n)throw vi(e)},vi=function(n){return new Error("Firebase Database ("+nE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const sE=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},nC=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(g=64)),s.push(t[h],t[f],t[g],t[m])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sE(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nC(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw new sC;const g=i<<2|a>>4;if(s.push(g),u!==64){const m=a<<4&240|u>>2;if(s.push(m),f!==64){const w=u<<6&192|f;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rE=function(n){const e=sE(n);return oc.encodeByteArray(e,!0)},ml=function(n){return rE(n).replace(/\./g,"")},_l=function(n){try{return oc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rC(n){return iE(void 0,n)}function iE(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!iC(t)||(n[t]=iE(n[t],e[t]));return n}function iC(n){return n!=="__proto__"}/**
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
 */function oC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aC=()=>oC().__FIREBASE_DEFAULTS__,lC=()=>{if(typeof process>"u"||typeof ag>"u")return;const n=ag.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cC=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_l(n[1]);return e&&JSON.parse(e)},ac=()=>{try{return aC()||lC()||cC()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},uC=n=>{var e,t;return(t=(e=ac())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hC=n=>{const e=uC(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},oE=()=>{var n;return(n=ac())===null||n===void 0?void 0:n.config},dC=n=>{var e;return(e=ac())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class xo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function fC(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ml(JSON.stringify(t)),ml(JSON.stringify(o)),""].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function pC(){var n;const e=(n=ac())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mC(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function aE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _C(){const n=kt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yC(){return nE.NODE_ADMIN===!0}function EC(){return!pC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lE(){try{return typeof indexedDB=="object"}catch{return!1}}function vC(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const TC="FirebaseError";class qn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=TC,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?wC(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new qn(r,a,s)}}function wC(n,e){return n.replace(IC,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const IC=/\{\$([^}]+)}/g;/**
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
 */function Mo(n){return JSON.parse(n)}function pt(n){return JSON.stringify(n)}/**
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
 */const cE=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=Mo(_l(i[0])||""),t=Mo(_l(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:r}},AC=function(n){const e=cE(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},RC=function(n){const e=cE(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function fs(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function li(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Zu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yl(n,e,t){const s={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=e.call(t,n[r],r,n));return s}function El(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(lg(i)&&lg(o)){if(!El(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function lg(n){return n!==null&&typeof n=="object"}/**
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
 */function wi(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function eo(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function to(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class CC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)s[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const g=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(g<<1|g>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const g=(r<<5|r>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=g}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function bC(n,e){const t=new SC(n,e);return t.subscribe.bind(t)}class SC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");PC(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=pu),r.error===void 0&&(r.error=pu),r.complete===void 0&&(r.complete=pu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PC(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function pu(){}function kC(n,e){return`${n} failed: ${e} argument `}/**
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
 */const NC=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,z(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},lc=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function lt(n){return n&&n._delegate?n._delegate:n}class wn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class OC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new xo;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xC(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:DC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DC(n){return n===ir?void 0:n}function xC(n){return n.instantiationMode==="EAGER"}/**
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
 */class MC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new OC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(me||(me={}));const LC={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},VC=me.INFO,FC={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},UC=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=FC[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jo{constructor(e){this.name=e,this._logLevel=VC,this._logHandler=UC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const BC=(n,e)=>e.some(t=>n instanceof t);let cg,ug;function $C(){return cg||(cg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jC(){return ug||(ug=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uE=new WeakMap,eh=new WeakMap,hE=new WeakMap,gu=new WeakMap,hd=new WeakMap;function qC(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(ks(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&uE.set(t,n)}).catch(()=>{}),hd.set(e,n),e}function WC(n){if(eh.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});eh.set(n,e)}let th={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return eh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||hE.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ks(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function HC(n){th=n(th)}function KC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(mu(this),e,...t);return hE.set(s,e.sort?e.sort():[e]),ks(s)}:jC().includes(n)?function(...e){return n.apply(mu(this),e),ks(uE.get(this))}:function(...e){return ks(n.apply(mu(this),e))}}function GC(n){return typeof n=="function"?KC(n):(n instanceof IDBTransaction&&WC(n),BC(n,$C())?new Proxy(n,th):n)}function ks(n){if(n instanceof IDBRequest)return qC(n);if(gu.has(n))return gu.get(n);const e=GC(n);return e!==n&&(gu.set(n,e),hd.set(e,n)),e}const mu=n=>hd.get(n);function zC(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=ks(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ks(o.result),c.oldVersion,c.newVersion,ks(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const QC=["get","getKey","getAll","getAllKeys","count"],YC=["put","add","delete","clear"],_u=new Map;function hg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(_u.get(e))return _u.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=YC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||QC.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return _u.set(e,i),i}HC(n=>({...n,get:(e,t,s)=>hg(e,t)||n.get(e,t,s),has:(e,t)=>!!hg(e,t)||n.has(e,t)}));/**
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
 */class XC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(JC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function JC(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nh="@firebase/app",dg="0.10.17";/**
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
 */const ls=new Jo("@firebase/app"),ZC="@firebase/app-compat",eb="@firebase/analytics-compat",tb="@firebase/analytics",nb="@firebase/app-check-compat",sb="@firebase/app-check",rb="@firebase/auth",ib="@firebase/auth-compat",ob="@firebase/database",ab="@firebase/data-connect",lb="@firebase/database-compat",cb="@firebase/functions",ub="@firebase/functions-compat",hb="@firebase/installations",db="@firebase/installations-compat",fb="@firebase/messaging",pb="@firebase/messaging-compat",gb="@firebase/performance",mb="@firebase/performance-compat",_b="@firebase/remote-config",yb="@firebase/remote-config-compat",Eb="@firebase/storage",vb="@firebase/storage-compat",Tb="@firebase/firestore",wb="@firebase/vertexai",Ib="@firebase/firestore-compat",Ab="firebase",Rb="11.1.0";/**
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
 */const sh="[DEFAULT]",Cb={[nh]:"fire-core",[ZC]:"fire-core-compat",[tb]:"fire-analytics",[eb]:"fire-analytics-compat",[sb]:"fire-app-check",[nb]:"fire-app-check-compat",[rb]:"fire-auth",[ib]:"fire-auth-compat",[ob]:"fire-rtdb",[ab]:"fire-data-connect",[lb]:"fire-rtdb-compat",[cb]:"fire-fn",[ub]:"fire-fn-compat",[hb]:"fire-iid",[db]:"fire-iid-compat",[fb]:"fire-fcm",[pb]:"fire-fcm-compat",[gb]:"fire-perf",[mb]:"fire-perf-compat",[_b]:"fire-rc",[yb]:"fire-rc-compat",[Eb]:"fire-gcs",[vb]:"fire-gcs-compat",[Tb]:"fire-fst",[Ib]:"fire-fst-compat",[wb]:"fire-vertex","fire-js":"fire-js",[Ab]:"fire-js-all"};/**
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
 */const vl=new Map,bb=new Map,rh=new Map;function fg(n,e){try{n.container.addComponent(e)}catch(t){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bn(n){const e=n.name;if(rh.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;rh.set(e,n);for(const t of vl.values())fg(t,n);for(const t of bb.values())fg(t,n);return!0}function dE(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function pn(n){return n.settings!==void 0}/**
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
 */const Sb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ns=new Ti("app","Firebase",Sb);/**
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
 */class Pb{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ns.create("app-deleted",{appName:this._name})}}/**
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
 */const Hs=Rb;function fE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:sh,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ns.create("bad-app-name",{appName:String(r)});if(t||(t=oE()),!t)throw Ns.create("no-options");const i=vl.get(r);if(i){if(El(t,i.options)&&El(s,i.config))return i;throw Ns.create("duplicate-app",{appName:r})}const o=new MC(r);for(const c of rh.values())o.addComponent(c);const a=new Pb(t,s,o);return vl.set(r,a),a}function pE(n=sh){const e=vl.get(n);if(!e&&n===sh&&oE())return fE();if(!e)throw Ns.create("no-app",{appName:n});return e}function Yt(n,e,t){var s;let r=(s=Cb[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(a.join(" "));return}Bn(new wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const kb="firebase-heartbeat-database",Nb=1,Lo="firebase-heartbeat-store";let yu=null;function gE(){return yu||(yu=zC(kb,Nb,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Lo)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ns.create("idb-open",{originalErrorMessage:n.message})})),yu}async function Ob(n){try{const t=(await gE()).transaction(Lo),s=await t.objectStore(Lo).get(mE(n));return await t.done,s}catch(e){if(e instanceof qn)ls.warn(e.message);else{const t=Ns.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ls.warn(t.message)}}}async function pg(n,e){try{const s=(await gE()).transaction(Lo,"readwrite");await s.objectStore(Lo).put(e,mE(n)),await s.done}catch(t){if(t instanceof qn)ls.warn(t.message);else{const s=Ns.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ls.warn(s.message)}}}function mE(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Db=1024,xb=30*24*60*60*1e3;class Mb{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vb(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=gg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=xb}),this._storage.overwrite(this._heartbeatsCache))}catch(s){ls.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gg(),{heartbeatsToSend:s,unsentEntries:r}=Lb(this._heartbeatsCache.heartbeats),i=ml(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return ls.warn(t),""}}}function gg(){return new Date().toISOString().substring(0,10)}function Lb(n,e=Db){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),mg(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),mg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Vb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lE()?vC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ob(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return pg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return pg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function mg(n){return ml(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Fb(n){Bn(new wn("platform-logger",e=>new XC(e),"PRIVATE")),Bn(new wn("heartbeat",e=>new Mb(e),"PRIVATE")),Yt(nh,dg,n),Yt(nh,dg,"esm2017"),Yt("fire-js","")}Fb("");function dd(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function _E(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ub=_E,yE=new Ti("auth","Firebase",_E());/**
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
 */const Tl=new Jo("@firebase/auth");function Bb(n,...e){Tl.logLevel<=me.WARN&&Tl.warn(`Auth (${Hs}): ${n}`,...e)}function Ya(n,...e){Tl.logLevel<=me.ERROR&&Tl.error(`Auth (${Hs}): ${n}`,...e)}/**
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
 */function un(n,...e){throw pd(n,...e)}function yn(n,...e){return pd(n,...e)}function fd(n,e,t){const s=Object.assign(Object.assign({},Ub()),{[e]:t});return new Ti("auth","Firebase",s).create(e,{appName:n.name})}function is(n){return fd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $b(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&un(n,"argument-error"),fd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pd(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return yE.create(n,...e)}function he(n,e,...t){if(!n)throw pd(e,...t)}function ts(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ya(e),new Error(e)}function cs(n,e){n||ts(e)}/**
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
 */function ih(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jb(){return _g()==="http:"||_g()==="https:"}function _g(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function qb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jb()||mC()||"connection"in navigator)?navigator.onLine:!0}function Wb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Zo{constructor(e,t){this.shortDelay=e,this.longDelay=t,cs(t>e,"Short delay should be less than long delay!"),this.isMobile=ud()||aE()}get(){return qb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gd(n,e){cs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class EE{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ts("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ts("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ts("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Hb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Kb=new Zo(3e4,6e4);function Ks(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Gs(n,e,t,s,r={}){return vE(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=wi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:c},i);return gC()||(u.referrerPolicy="no-referrer"),EE.fetch()(TE(n,n.config.apiHost,t,a),u)})}async function vE(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Hb),e);try{const r=new zb(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw xa(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw xa(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw xa(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw xa(n,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fd(n,h,u);un(n,h)}}catch(r){if(r instanceof qn)throw r;un(n,"network-request-failed",{message:String(r)})}}async function ea(n,e,t,s,r={}){const i=await Gs(n,e,t,s,r);return"mfaPendingCredential"in i&&un(n,"multi-factor-auth-required",{_serverResponse:i}),i}function TE(n,e,t,s){const r=`${e}${t}?${s}`;return n.config.emulator?gd(n.config,r):`${n.config.apiScheme}://${r}`}function Gb(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(yn(this.auth,"network-request-failed")),Kb.get())})}}function xa(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=yn(n,e,s);return r.customData._tokenResponse=t,r}function yg(n){return n!==void 0&&n.enterprise!==void 0}class Qb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Gb(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yb(n,e){return Gs(n,"GET","/v2/recaptchaConfig",Ks(n,e))}/**
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
 */async function Xb(n,e){return Gs(n,"POST","/v1/accounts:delete",e)}async function wE(n,e){return Gs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function mo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Jb(n,e=!1){const t=lt(n),s=await t.getIdToken(e),r=md(s);he(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:mo(Eu(r.auth_time)),issuedAtTime:mo(Eu(r.iat)),expirationTime:mo(Eu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Eu(n){return Number(n)*1e3}function md(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ya("JWT malformed, contained fewer than 3 sections"),null;try{const r=_l(t);return r?JSON.parse(r):(Ya("Failed to decode base64 JWT payload"),null)}catch(r){return Ya("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Eg(n){const e=md(n);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vo(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof qn&&Zb(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Zb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class eS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class oh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wl(n){var e;const t=n.auth,s=await n.getIdToken(),r=await Vo(n,wE(t,{idToken:s}));he(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?IE(i.providerUserInfo):[],a=nS(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new oh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function tS(n){const e=lt(n);await wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nS(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function IE(n){return n.map(e=>{var{providerId:t}=e,s=dd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function sS(n,e){const t=await vE(n,{},async()=>{const s=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=TE(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",EE.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rS(n,e){return Gs(n,"POST","/v2/accounts:revokeToken",Ks(n,e))}/**
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
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){he(e.length!==0,"internal-error");const t=Eg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await sS(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new Jr;return s&&(he(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(he(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return ts("not implemented")}}/**
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
 */function vs(n,e){he(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ns{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=dd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new oh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return he(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Jb(this,e)}reload(){return tS(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ns(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await wl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(is(this.auth));const e=await this.getIdToken();return await Vo(this,Xb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,a,c,u,h;const f=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(r=t.email)!==null&&r!==void 0?r:void 0,m=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(a=t.tenantId)!==null&&a!==void 0?a:void 0,S=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=t.createdAt)!==null&&u!==void 0?u:void 0,M=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:L,isAnonymous:te,providerData:ne,stsTokenManager:C}=t;he(D&&C,e,"internal-error");const y=Jr.fromJSON(this.name,C);he(typeof D=="string",e,"internal-error"),vs(f,e.name),vs(g,e.name),he(typeof L=="boolean",e,"internal-error"),he(typeof te=="boolean",e,"internal-error"),vs(m,e.name),vs(w,e.name),vs(P,e.name),vs(S,e.name),vs(x,e.name),vs(M,e.name);const E=new ns({uid:D,auth:e,email:g,emailVerified:L,displayName:f,isAnonymous:te,photoURL:w,phoneNumber:m,tenantId:P,stsTokenManager:y,createdAt:x,lastLoginAt:M});return ne&&Array.isArray(ne)&&(E.providerData=ne.map(R=>Object.assign({},R))),S&&(E._redirectEventId=S),E}static async _fromIdTokenResponse(e,t,s=!1){const r=new Jr;r.updateFromServerResponse(t);const i=new ns({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await wl(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];he(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?IE(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Jr;a.updateFromIdToken(s);const c=new ns({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new oh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const vg=new Map;function ss(n){cs(n instanceof Function,"Expected a class definition");let e=vg.get(n);return e?(cs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vg.set(n,e),e)}/**
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
 */class AE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}AE.type="NONE";const Tg=AE;/**
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
 */function Xa(n,e,t){return`firebase:${n}:${e}:${t}`}class Zr{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Xa(this.userKey,r.apiKey,i),this.fullPersistenceKey=Xa("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ns._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Zr(ss(Tg),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||ss(Tg);const o=Xa(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){const f=ns._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zr(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Zr(i,e,s))}}/**
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
 */function wg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kE(e))return"Blackberry";if(NE(e))return"Webos";if(CE(e))return"Safari";if((e.includes("chrome/")||bE(e))&&!e.includes("edge/"))return"Chrome";if(PE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function RE(n=kt()){return/firefox\//i.test(n)}function CE(n=kt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bE(n=kt()){return/crios\//i.test(n)}function SE(n=kt()){return/iemobile/i.test(n)}function PE(n=kt()){return/android/i.test(n)}function kE(n=kt()){return/blackberry/i.test(n)}function NE(n=kt()){return/webos/i.test(n)}function _d(n=kt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function iS(n=kt()){var e;return _d(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oS(){return _C()&&document.documentMode===10}function OE(n=kt()){return _d(n)||PE(n)||NE(n)||kE(n)||/windows phone/i.test(n)||SE(n)}/**
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
 */function DE(n,e=[]){let t;switch(n){case"Browser":t=wg(kt());break;case"Worker":t=`${wg(kt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hs}/${s}`}/**
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
 */class aS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function lS(n,e={}){return Gs(n,"GET","/v2/passwordPolicy",Ks(n,e))}/**
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
 */const cS=6;class uS{constructor(e){var t,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:cS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class hS{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ig(this),this.idTokenSubscription=new Ig(this),this.beforeStateQueue=new aS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ss(t)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await wE(this,{idToken:e}),s=await ns._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wl(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(is(this));const t=e?lt(e):null;return t&&he(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ss(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lS(this),t=new uS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await rS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ss(e)||this._popupRedirectResolver;he(t,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[ss(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=DE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Bb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wr(n){return lt(n)}class Ig{constructor(e){this.auth=e,this.observer=null,this.addObserver=bC(t=>this.observer=t)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let cc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dS(n){cc=n}function xE(n){return cc.loadJS(n)}function fS(){return cc.recaptchaEnterpriseScript}function pS(){return cc.gapiScript}function gS(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class mS{constructor(){this.enterprise=new _S}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class _S{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const yS="recaptcha-enterprise",ME="NO_RECAPTCHA";class ES{constructor(e){this.type=yS,this.auth=wr(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Yb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Qb(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;yg(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ME)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!t&&yg(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=fS();c.length!==0&&(c+=a),xE(c).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Ag(n,e,t,s=!1,r=!1){const i=new ES(n);let o;if(r)o=ME;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ah(n,e,t,s,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ag(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ag(n,e,t,t==="getOobCode");return s(n,a)}else return Promise.reject(o)})}/**
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
 */function vS(n,e){const t=dE(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(El(i,e??{}))return r;un(r,"already-initialized")}return t.initialize({options:e})}function TS(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ss);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class yd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ts("not implemented")}_getIdTokenResponse(e){return ts("not implemented")}_linkToIdToken(e,t){return ts("not implemented")}_getReauthenticationResolver(e){return ts("not implemented")}}async function wS(n,e){return Gs(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function IS(n,e){return ea(n,"POST","/v1/accounts:signInWithPassword",Ks(n,e))}/**
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
 */async function AS(n,e){return ea(n,"POST","/v1/accounts:signInWithEmailLink",Ks(n,e))}async function RS(n,e){return ea(n,"POST","/v1/accounts:signInWithEmailLink",Ks(n,e))}/**
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
 */class Fo extends yd{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Fo(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Fo(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ah(e,t,"signInWithPassword",IS);case"emailLink":return AS(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ah(e,s,"signUpPassword",wS);case"emailLink":return RS(e,{idToken:t,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ei(n,e){return ea(n,"POST","/v1/accounts:signInWithIdp",Ks(n,e))}/**
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
 */const CS="http://localhost";class gr extends yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=dd(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new gr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ei(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ei(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ei(e,t)}buildRequest(){const e={requestUri:CS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wi(t)}return e}}/**
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
 */function bS(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SS(n){const e=eo(to(n)).link,t=e?eo(to(e)).deep_link_id:null,s=eo(to(n)).deep_link_id;return(s?eo(to(s)).link:null)||s||t||e||n}class Ed{constructor(e){var t,s,r,i,o,a;const c=eo(to(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,f=bS((r=c.mode)!==null&&r!==void 0?r:null);he(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=SS(e);try{return new Ed(t)}catch{return null}}}/**
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
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,t){return Fo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ed.parseLink(t);return he(s,"argument-error"),Fo._fromEmailAndCode(e,s.code,s.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ta extends vd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cs extends ta{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cs.credential(e.oauthAccessToken)}catch{return null}}}Cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cs.PROVIDER_ID="facebook.com";/**
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
 */class Zn extends ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Zn.credential(t,s)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
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
 */class es extends ta{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.GITHUB_SIGN_IN_METHOD="github.com";es.PROVIDER_ID="github.com";/**
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
 */class bs extends ta{constructor(){super("twitter.com")}static credential(e,t){return gr._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return bs.credential(t,s)}catch{return null}}}bs.TWITTER_SIGN_IN_METHOD="twitter.com";bs.PROVIDER_ID="twitter.com";/**
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
 */async function PS(n,e){return ea(n,"POST","/v1/accounts:signUp",Ks(n,e))}/**
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
 */class mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await ns._fromIdTokenResponse(e,s,r),o=Rg(s);return new mr({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Rg(s);return new mr({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Rg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Il extends qn{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Il.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Il(e,t,s,r)}}function LE(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Il._fromErrorAndOperation(n,i,e,s):i})}async function kS(n,e,t=!1){const s=await Vo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mr._forOperation(n,"link",s)}/**
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
 */async function NS(n,e,t=!1){const{auth:s}=n;if(pn(s.app))return Promise.reject(is(s));const r="reauthenticate";try{const i=await Vo(n,LE(s,r,e,n),t);he(i.idToken,s,"internal-error");const o=md(i.idToken);he(o,s,"internal-error");const{sub:a}=o;return he(n.uid===a,s,"user-mismatch"),mr._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&un(s,"user-mismatch"),i}}/**
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
 */async function VE(n,e,t=!1){if(pn(n.app))return Promise.reject(is(n));const s="signIn",r=await LE(n,s,e),i=await mr._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function OS(n,e){return VE(wr(n),e)}/**
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
 */async function FE(n){const e=wr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function DS(n,e,t){if(pn(n.app))return Promise.reject(is(n));const s=wr(n),o=await ah(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",PS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&FE(n),c}),a=await mr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function UE(n,e,t){return pn(n.app)?Promise.reject(is(n)):OS(lt(n),Ii.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&FE(n),s})}function xS(n,e,t,s){return lt(n).onIdTokenChanged(e,t,s)}function MS(n){return lt(n).signOut()}const Al="__sak";/**
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
 */class BE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Al,"1"),this.storage.removeItem(Al),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const LS=1e3,VS=10;class $E extends BE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=OE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);oS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,VS):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},LS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$E.type="LOCAL";const FS=$E;/**
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
 */class jE extends BE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jE.type="SESSION";const qE=jE;/**
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
 */function US(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new uc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await US(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uc.receivers=[];/**
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
 */function Td(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class BS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Td("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Vn(){return window}function $S(n){Vn().location.href=n}/**
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
 */function WE(){return typeof Vn().WorkerGlobalScope<"u"&&typeof Vn().importScripts=="function"}async function jS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qS(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function WS(){return WE()?self:null}/**
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
 */const HE="firebaseLocalStorageDb",HS=1,Rl="firebaseLocalStorage",KE="fbase_key";class na{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function hc(n,e){return n.transaction([Rl],e?"readwrite":"readonly").objectStore(Rl)}function KS(){const n=indexedDB.deleteDatabase(HE);return new na(n).toPromise()}function lh(){const n=indexedDB.open(HE,HS);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Rl,{keyPath:KE})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Rl)?e(s):(s.close(),await KS(),e(await lh()))})})}async function Cg(n,e,t){const s=hc(n,!0).put({[KE]:e,value:t});return new na(s).toPromise()}async function GS(n,e){const t=hc(n,!1).get(e),s=await new na(t).toPromise();return s===void 0?null:s.value}function bg(n,e){const t=hc(n,!0).delete(e);return new na(t).toPromise()}const zS=800,QS=3;class GE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>QS)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uc._getInstance(WS()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jS(),!this.activeServiceWorker)return;this.sender=new BS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lh();return await Cg(e,Al,"1"),await bg(e,Al),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>GS(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=hc(r,!1).getAll();return new na(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}GE.type="LOCAL";const YS=GE;new Zo(3e4,6e4);/**
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
 */function zE(n,e){return e?ss(e):(he(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class wd extends yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ei(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function XS(n){return VE(n.auth,new wd(n),n.bypassAuthState)}function JS(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),NS(t,new wd(n),n.bypassAuthState)}async function ZS(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),kS(t,new wd(n),n.bypassAuthState)}/**
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
 */class QE{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XS;case"linkViaPopup":case"linkViaRedirect":return ZS;case"reauthViaPopup":case"reauthViaRedirect":return JS;default:un(this.auth,"internal-error")}}resolve(e){cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eP=new Zo(2e3,1e4);async function Sg(n,e,t){if(pn(n.app))return Promise.reject(yn(n,"operation-not-supported-in-this-environment"));const s=wr(n);$b(n,e,vd);const r=zE(s,t);return new lr(s,"signInViaPopup",e,r).executeNotNull()}class lr extends QE{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){cs(this.filter.length===1,"Popup operations only handle one event");const e=Td();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eP.get())};e()}}lr.currentPopupAction=null;/**
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
 */const tP="pendingRedirect",Ja=new Map;class nP extends QE{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ja.get(this.auth._key());if(!e){try{const s=await sP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ja.set(this.auth._key(),e)}return this.bypassAuthState||Ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sP(n,e){const t=oP(e),s=iP(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function rP(n,e){Ja.set(n._key(),e)}function iP(n){return ss(n._redirectPersistence)}function oP(n){return Xa(tP,n.config.apiKey,n.name)}async function aP(n,e,t=!1){if(pn(n.app))return Promise.reject(is(n));const s=wr(n),r=zE(s,e),o=await new nP(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const lP=10*60*1e3;class cP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!YE(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(yn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pg(e))}saveEventToCache(e){this.cachedEventUids.add(Pg(e)),this.lastProcessedEventTime=Date.now()}}function Pg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function YE({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YE(n);default:return!1}}/**
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
 */async function hP(n,e={}){return Gs(n,"GET","/v1/projects",e)}/**
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
 */const dP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fP=/^https?/;async function pP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await hP(n);for(const t of e)try{if(gP(t))return}catch{}un(n,"unauthorized-domain")}function gP(n){const e=ih(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!fP.test(t))return!1;if(dP.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const mP=new Zo(3e4,6e4);function kg(){const n=Vn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _P(n){return new Promise((e,t)=>{var s,r,i;function o(){kg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kg(),t(yn(n,"network-request-failed"))},timeout:mP.get()})}if(!((r=(s=Vn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Vn().gapi)===null||i===void 0)&&i.load)o();else{const a=gS("iframefcb");return Vn()[a]=()=>{gapi.load?o():t(yn(n,"network-request-failed"))},xE(`${pS()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Za=null,e})}let Za=null;function yP(n){return Za=Za||_P(n),Za}/**
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
 */const EP=new Zo(5e3,15e3),vP="__/auth/iframe",TP="emulator/auth/iframe",wP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AP(n){const e=n.config;he(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gd(e,TP):`https://${n.config.authDomain}/${vP}`,s={apiKey:e.apiKey,appName:n.name,v:Hs},r=IP.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${wi(s).slice(1)}`}async function RP(n){const e=await yP(n),t=Vn().gapi;return he(t,n,"internal-error"),e.open({where:document.body,url:AP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wP,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=yn(n,"network-request-failed"),a=Vn().setTimeout(()=>{i(o)},EP.get());function c(){Vn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const CP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bP=500,SP=600,PP="_blank",kP="http://localhost";class Ng{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NP(n,e,t,s=bP,r=SP){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},CP),{width:s.toString(),height:r.toString(),top:i,left:o}),u=kt().toLowerCase();t&&(a=bE(u)?PP:t),RE(u)&&(e=e||kP,c.scrollbars="yes");const h=Object.entries(c).reduce((g,[m,w])=>`${g}${m}=${w},`,"");if(iS(u)&&a!=="_self")return OP(e||"",a),new Ng(null);const f=window.open(e||"",a,h);he(f,n,"popup-blocked");try{f.focus()}catch{}return new Ng(f)}function OP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const DP="__/auth/handler",xP="emulator/auth/handler",MP=encodeURIComponent("fac");async function Og(n,e,t,s,r,i){he(n.config.authDomain,n,"auth-domain-config-required"),he(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Hs,eventId:r};if(e instanceof vd){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Zu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ta){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await n._getAppCheckToken(),u=c?`#${MP}=${encodeURIComponent(c)}`:"";return`${LP(n)}?${wi(a).slice(1)}${u}`}function LP({config:n}){return n.emulator?gd(n,xP):`https://${n.authDomain}/${DP}`}/**
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
 */const vu="webStorageSupport";class VP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qE,this._completeRedirectFn=aP,this._overrideRedirectResult=rP}async _openPopup(e,t,s,r){var i;cs((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Og(e,t,s,ih(),r);return NP(e,o,Td())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Og(e,t,s,ih(),r);return $S(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(cs(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await RP(e),s=new cP(e);return t.register("authEvent",r=>(he(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vu,{type:vu},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[vu];o!==void 0&&t(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return OE()||CE()||_d()}}const FP=VP;var Dg="@firebase/auth",xg="1.8.1";/**
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
 */class UP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $P(n){Bn(new wn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DE(n)},u=new hS(s,r,i,c);return TS(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Bn(new wn("auth-internal",e=>{const t=wr(e.getProvider("auth").getImmediate());return(s=>new UP(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Dg,xg,BP(n)),Yt(Dg,xg,"esm2017")}/**
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
 */const jP=5*60;dC("authIdTokenMaxAge");function qP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}dS({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=yn("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",qP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$P("Browser");/**
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
 */const WP=new Map,HP={activated:!1,tokenObservers:[]};function In(n){return WP.get(n)||Object.assign({},HP)}const Mg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class KP{constructor(e,t,s,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new xo,this.pending.promise.catch(t=>{}),await GP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new xo,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function GP(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const zP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Cl=new Ti("appCheck","AppCheck",zP);function XE(n){if(!In(n).activated)throw Cl.create("use-before-activation",{appName:n.name})}/**
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
 */const QP="firebase-app-check-database",YP=1,ch="firebase-app-check-store";let Ma=null;function XP(){return Ma||(Ma=new Promise((n,e)=>{try{const t=indexedDB.open(QP,YP);t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var r;e(Cl.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},t.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(ch,{keyPath:"compositeKey"})}}}catch(t){e(Cl.create("storage-open",{originalErrorMessage:t==null?void 0:t.message}))}}),Ma)}function JP(n,e){return ZP(ek(n),e)}async function ZP(n,e){const s=(await XP()).transaction(ch,"readwrite"),i=s.objectStore(ch).put({compositeKey:n,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var u;a(Cl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function ek(n){return`${n.options.appId}-${n.name}`}/**
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
 */const uh=new Jo("@firebase/app-check");function Lg(n,e){return lE()?JP(n,e).catch(t=>{uh.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}/**
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
 */const tk={error:"UNKNOWN_ERROR"};function nk(n){return oc.encodeString(JSON.stringify(n),!1)}async function hh(n,e=!1){const t=n.app;XE(t);const s=In(t);let r=s.token,i;if(r&&!no(r)&&(s.token=void 0,r=void 0),!r){const c=await s.cachedTokenPromise;c&&(no(c)?r=c:await Lg(t,void 0))}if(!e&&r&&no(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await In(t).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?uh.warn(c.message):uh.error(c),i=c}let a;return r?i?no(r)?a={token:r.token,internalError:i}:a=Fg(i):(a={token:r.token},s.token=r,await Lg(t,r)):a=Fg(i),o&&ok(t,a),a}async function sk(n){const e=n.app;XE(e);const{provider:t}=In(e);{const{token:s}=await t.getToken();return{token:s}}}function rk(n,e,t,s){const{app:r}=n,i=In(r),o={next:t,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&no(i.token)){const a=i.token;Promise.resolve().then(()=>{t({token:a.token}),Vg(n)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Vg(n))}function JE(n,e){const t=In(n),s=t.tokenObservers.filter(r=>r.next!==e);s.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=s}function Vg(n){const{app:e}=n,t=In(e);let s=t.tokenRefresher;s||(s=ik(n),t.tokenRefresher=s),!s.isRunning()&&t.isTokenAutoRefreshEnabled&&s.start()}function ik(n){const{app:e}=n;return new KP(async()=>{const t=In(e);let s;if(t.token?s=await hh(n,!0):s=await hh(n),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const t=In(e);if(t.token){let s=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const r=t.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},Mg.RETRIAL_MIN_WAIT,Mg.RETRIAL_MAX_WAIT)}function ok(n,e){const t=In(n).tokenObservers;for(const s of t)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function no(n){return n.expireTimeMillis-Date.now()>0}function Fg(n){return{token:nk(tk),error:n}}/**
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
 */class ak{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=In(this.app);for(const t of e)JE(this.app,t.next);return Promise.resolve()}}function lk(n,e){return new ak(n,e)}function ck(n){return{getToken:e=>hh(n,e),getLimitedUseToken:()=>sk(n),addTokenListener:e=>rk(n,"INTERNAL",e),removeTokenListener:e=>JE(n.app,e)}}const uk="@firebase/app-check",hk="0.8.10",dk="app-check",Ug="app-check-internal";function fk(){Bn(new wn(dk,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return lk(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(Ug).initialize()})),Bn(new wn(Ug,n=>{const e=n.getProvider("app-check").getImmediate();return ck(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Yt(uk,hk)}fk();var pk="firebase",gk="11.1.0";/**
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
 */Yt(pk,gk,"app");const ZE=Symbol("firebaseApp");function sa(n){return cd()&&Qt(ZE,null)||pE(n)}const On=()=>{},mk=typeof window<"u";function Id(n,e){return e.split(".").reduce((t,s)=>t&&t[s],n)}function _k(n,e,t){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],n);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,t):i[r]=t}function Ir(n){return!!n&&typeof n=="object"}const yk=Object.prototype;function Ek(n){return Ir(n)&&Object.getPrototypeOf(n)===yk}function Ad(n){return Ir(n)&&n.type==="document"}function vk(n){return Ir(n)&&n.type==="collection"}function Tk(n){return Ad(n)||vk(n)}function wk(n){return Ir(n)&&n.type==="query"}function Ik(n){return Ir(n)&&"ref"in n}function Ak(n){return Ir(n)&&typeof n.bucket=="string"}function Rk(n,e){let t;return()=>{if(!t)return t=!0,n(e())}}const Ck=Symbol.for("v-scx");function bk(){return!!Qt(Ck,0)}const La=new WeakMap;function Sk(n,e){if(!La.has(n)){const t=VI(!0);La.set(n,t);const{unmount:s}=e;e.unmount=()=>{s.call(e),t.stop(),La.delete(n)}}return La.get(n)}const ev=new WeakMap;function dc(n){return ev.get(sa(n))}const Va=new WeakMap;function tv(n){const e=sa(n);if(!Va.has(e)){let t;const r=[new Promise(i=>{t=i}),i=>{Va.set(e,i),t(i.value)}];Va.set(e,r)}return Va.get(e)}function Pk(n){const e=tv(n);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function kk(n,e){xS(e,t=>{const s=tv();n.value=t,Array.isArray(s)&&s[1](n)})}var Bg={};const $g="@firebase/database",jg="1.0.10";/**
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
 */let nv="";function Nk(n){nv=n}/**
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
 */class Ok{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Mo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Dk{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return fs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const sv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ok(e)}}catch{}return new Dk},cr=sv("localStorage"),xk=sv("sessionStorage");/**
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
 */const ti=new Jo("@firebase/database"),Mk=function(){let n=1;return function(){return n++}}(),rv=function(n){const e=NC(n),t=new CC;t.update(e);const s=t.digest();return oc.encodeByteArray(s)},ra=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ra.apply(null,s):typeof s=="object"?e+=pt(s):e+=s,e+=" "}return e};let _o=null,qg=!0;const Lk=function(n,e){z(!0,"Can't turn on custom loggers persistently."),ti.logLevel=me.VERBOSE,_o=ti.log.bind(ti)},Ct=function(...n){if(qg===!0&&(qg=!1,_o===null&&xk.get("logging_enabled")===!0&&Lk()),_o){const e=ra.apply(null,n);_o(e)}},ia=function(n){return function(...e){Ct(n,...e)}},dh=function(...n){const e="FIREBASE INTERNAL ERROR: "+ra(...n);ti.error(e)},_r=function(...n){const e=`FIREBASE FATAL ERROR: ${ra(...n)}`;throw ti.error(e),new Error(e)},Xt=function(...n){const e="FIREBASE WARNING: "+ra(...n);ti.warn(e)},Vk=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},iv=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Fk=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ci="[MIN_NAME]",yr="[MAX_NAME]",Ai=function(n,e){if(n===e)return 0;if(n===ci||e===yr)return-1;if(e===ci||n===yr)return 1;{const t=Wg(n),s=Wg(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Uk=function(n,e){return n===e?0:n<e?-1:1},Gi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+pt(e))},Rd=function(n){if(typeof n!="object"||n===null)return pt(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=pt(e[s]),t+=":",t+=Rd(n[e[s]]);return t+="}",t},ov=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let r=0;r<t;r+=e)r+e>t?s.push(n.substring(r,t)):s.push(n.substring(r,r+e));return s};function hn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const av=function(n){z(!iv(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let r,i,o,a,c;n===0?(i=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),i=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-s-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let g=parseInt(h.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},Bk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$k=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},jk=new RegExp("^-?(0*)\\d{1,10}$"),qk=-2147483648,Wk=2147483647,Wg=function(n){if(jk.test(n)){const e=Number(n);if(e>=qk&&e<=Wk)return e}return null},oa=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Xt("Exception was thrown by user callback.",t),e},Math.floor(0))}},Hk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Kk{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Gk{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xt(e)}}/**
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
 */const Cd="5",lv="v",cv="s",uv="r",hv="f",dv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fv="ls",pv="p",fh="ac",gv="websocket",mv="long_polling";/**
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
 */class zk{constructor(e,t,s,r,i=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=cr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&cr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Qk(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function _v(n,e,t){z(typeof e=="string","typeof type must == string"),z(typeof t=="object","typeof params must == object");let s;if(e===gv)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===mv)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qk(n)&&(t.ns=n.namespace);const r=[];return hn(t,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class Yk{constructor(){this.counters_={}}incrementCounter(e,t=1){fs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return rC(this.counters_)}}/**
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
 */const Tu={},wu={};function bd(n){const e=n.toString();return Tu[e]||(Tu[e]=new Yk),Tu[e]}function Xk(n,e){const t=n.toString();return wu[t]||(wu[t]=e()),wu[t]}/**
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
 */class Jk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&oa(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Hg="start",Zk="close",e0="pLPCommand",t0="pRTLPCB",yv="id",Ev="pw",vv="ser",n0="cb",s0="seg",r0="ts",i0="d",o0="dframe",Tv=1870,wv=30,a0=Tv-wv,l0=25e3,c0=3e4;class jr{constructor(e,t,s,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ia(e),this.stats_=bd(t),this.urlFn=c=>(this.appCheckToken&&(c[fh]=this.appCheckToken),_v(t,mv,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Jk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(c0)),Fk(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Sd((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hg)this.id=a,this.password=c;else if(o===Zk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hg]="t",s[vv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[n0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[lv]=Cd,this.transportSessionId&&(s[cv]=this.transportSessionId),this.lastSessionId&&(s[fv]=this.lastSessionId),this.applicationId&&(s[pv]=this.applicationId),this.appCheckToken&&(s[fh]=this.appCheckToken),typeof location<"u"&&location.hostname&&dv.test(location.hostname)&&(s[uv]=hv);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){jr.forceAllow_=!0}static forceDisallow(){jr.forceDisallow_=!0}static isAvailable(){return jr.forceAllow_?!0:!jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Bk()&&!$k()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=rE(t),r=ov(s,a0);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[o0]="t",s[yv]=e,s[Ev]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=pt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Sd{constructor(e,t,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Mk(),window[e0+this.uniqueCallbackIdentifier]=e,window[t0+this.uniqueCallbackIdentifier]=t,this.myIFrame=Sd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ct("frame writing exception"),a.stack&&Ct(a.stack),Ct(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ct("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[yv]=this.myID,e[Ev]=this.myPW,e[vv]=this.currentSerial;let t=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wv+s.length<=Tv;){const o=this.pendingSegs.shift();s=s+"&"+s0+r+"="+o.seg+"&"+r0+r+"="+o.ts+"&"+i0+r+"="+o.d,r++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(s,Math.floor(l0)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Ct("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const u0=16384,h0=45e3;let bl=null;typeof MozWebSocket<"u"?bl=MozWebSocket:typeof WebSocket<"u"&&(bl=WebSocket);class Dn{constructor(e,t,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ia(this.connId),this.stats_=bd(t),this.connURL=Dn.connectionURL_(t,o,a,r,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,r,i){const o={};return o[lv]=Cd,typeof location<"u"&&location.hostname&&dv.test(location.hostname)&&(o[uv]=hv),t&&(o[cv]=t),s&&(o[fv]=s),r&&(o[fh]=r),i&&(o[pv]=i),_v(e,gv,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,cr.set("previous_websocket_failure",!0);try{let s;yC(),this.mySock=new bl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&bl!==null&&!Dn.forceDisallow_}static previouslyFailed(){return cr.isInMemoryStorage||cr.get("previous_websocket_failure")===!0}markConnectionHealthy(){cr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Mo(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=pt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ov(t,u0);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(h0))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dn.responsesRequiredToBeHealthy=2;Dn.healthyTimeout=3e4;/**
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
 */class Uo{static get ALL_TRANSPORTS(){return[jr,Dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Dn.isAvailable();let s=t&&!Dn.previouslyFailed();if(e.webSocketOnly&&(t||Xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Dn];else{const r=this.transports_=[];for(const i of Uo.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Uo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Uo.globalTransportInitialized_=!1;/**
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
 */const d0=6e4,f0=5e3,p0=10*1024,g0=100*1024,Iu="t",Kg="d",m0="s",Gg="r",_0="e",zg="o",Qg="a",Yg="n",Xg="p",y0="h";class E0{constructor(e,t,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ia("c:"+this.id+":"),this.transportManager_=new Uo(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=yo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>g0?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>p0?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Iu in e){const t=e[Iu];t===Qg?this.upgradeIfSecondaryHealthy_():t===Gg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Gi("t",e),s=Gi("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Gi("t",e),s=Gi("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Gi(Iu,e);if(Kg in e){const s=e[Kg];if(t===y0){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Yg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===m0?this.onConnectionShutdown_(s):t===Gg?this.onReset_(s):t===_0?dh("Server Error: "+s):t===zg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dh("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Cd!==s&&Xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),yo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(d0))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(f0))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(cr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Iv{put(e,t,s,r){}merge(e,t,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Av{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){z(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Sl extends Av{static getInstance(){return new Sl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ud()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Jg=32,Zg=768;class qe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function xe(){return new qe("")}function Ae(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function xs(n){return n.pieces_.length-n.pieceNum_}function Be(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new qe(n.pieces_,e)}function Rv(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function v0(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cv(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function bv(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new qe(e,0)}function at(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof qe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&t.push(s[r])}return new qe(t,0)}function ve(n){return n.pieceNum_>=n.pieces_.length}function sn(n,e){const t=Ae(n),s=Ae(e);if(t===null)return e;if(t===s)return sn(Be(n),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Sv(n,e){if(xs(n)!==xs(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function gn(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(xs(n)>xs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class T0{constructor(e,t){this.errorPrefix_=t,this.parts_=Cv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=lc(this.parts_[s]);Pv(this)}}function w0(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=lc(e),Pv(n)}function I0(n){const e=n.parts_.pop();n.byteLength_-=lc(e),n.parts_.length>0&&(n.byteLength_-=1)}function Pv(n){if(n.byteLength_>Zg)throw new Error(n.errorPrefix_+"has a key path longer than "+Zg+" bytes ("+n.byteLength_+").");if(n.parts_.length>Jg)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jg+") or object contains a cycle "+or(n))}function or(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Pd extends Av{static getInstance(){return new Pd}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zi=1e3,A0=60*5*1e3,em=30*1e3,R0=1.3,C0=3e4,b0="server_kill",tm=3;class os extends Iv{constructor(e,t,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=os.nextPersistentConnectionId_++,this.log_=ia("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zi,this.maxReconnectDelay_=A0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Pd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(pt(i)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const t=new xo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;os.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&fs(e,"w")){const s=li(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();Xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||RC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=em)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=AC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,t)}sendUnlisten_(e,t,s,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,r){const i={p:t,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,s,r){this.putInternal("p",e,t,s,r)}merge(e,t,s,r){this.putInternal("m",e,t,s,r)}putInternal(e,t,s,r,i){this.initConnection_();const o={p:t,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pt(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):dh("Unrecognized action received from server: "+pt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>C0&&(this.reconnectDelay_=zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*R0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+os.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){z(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ct("getToken() completed but was canceled"):(Ct("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new E0(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,m=>{Xt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(b0)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Xt(f),c())}}}interrupt(e){Ct("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ct("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zu(this.interruptReasons_)&&(this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(i=>Rd(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const s=new qe(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,t){Ct("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=tm&&(this.reconnectDelay_=em,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ct("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=tm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+nv.replace(/\./g,"-")]=1,ud()?e["framework.cordova"]=1:aE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sl.getInstance().currentlyOnline();return Zu(this.interruptReasons_)&&e}}os.nextPersistentConnectionId_=0;os.nextConnectionId_=0;/**
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
 */class Re{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Re(e,t)}}/**
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
 */class fc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Re(ci,e),r=new Re(ci,t);return this.compare(s,r)!==0}minPost(){return Re.MIN}}/**
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
 */let Fa;class kv extends fc{static get __EMPTY_NODE(){return Fa}static set __EMPTY_NODE(e){Fa=e}compare(e,t){return Ai(e.name,t.name)}isDefinedOn(e){throw vi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Re.MIN}maxPost(){return new Re(yr,Fa)}makePost(e,t){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new Re(e,Fa)}toString(){return".key"}}const ni=new kv;/**
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
 */let Ua=class{constructor(e,t,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Kt=class so{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??so.RED,this.left=r??xn.EMPTY_NODE,this.right=i??xn.EMPTY_NODE}copy(e,t,s,r,i){return new so(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return xn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,r;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return xn.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,so.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,so.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Kt.RED=!0;Kt.BLACK=!1;class S0{copy(e,t,s,r,i){return this}insert(e,t,s){return new Kt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let xn=class el{constructor(e,t=el.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new el(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Kt.BLACK,null,null))}remove(e){return new el(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Kt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,r=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ua(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ua(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ua(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ua(this.root_,null,this.comparator_,!0,e)}};xn.EMPTY_NODE=new S0;/**
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
 */function P0(n,e){return Ai(n.name,e.name)}function kd(n,e){return Ai(n,e)}/**
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
 */let ph;function k0(n){ph=n}const Nv=function(n){return typeof n=="number"?"number:"+av(n):"string:"+n},Ov=function(n){if(n.isLeafNode()){const e=n.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&fs(e,".sv"),"Priority must be a string or number.")}else z(n===ph||n.isEmpty(),"priority of unexpected type.");z(n===ph||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let nm;class it{static set __childrenNodeConstructor(e){nm=e}static get __childrenNodeConstructor(){return nm}constructor(e,t=it.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ov(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new it(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ve(e)?this:Ae(e)===".priority"?this.priorityNode_:it.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:it.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Ae(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(z(s!==".priority"||xs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,it.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Nv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=av(this.value_):e+=this.value_,this.lazyHash_=rv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===it.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof it.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,r=it.VALUE_TYPE_ORDER.indexOf(t),i=it.VALUE_TYPE_ORDER.indexOf(s);return z(r>=0,"Unknown leaf type: "+t),z(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}it.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Dv,xv;function N0(n){Dv=n}function O0(n){xv=n}class D0 extends fc{compare(e,t){const s=e.node.getPriority(),r=t.node.getPriority(),i=s.compareTo(r);return i===0?Ai(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Re.MIN}maxPost(){return new Re(yr,new it("[PRIORITY-POST]",xv))}makePost(e,t){const s=Dv(e);return new Re(t,new it("[PRIORITY-POST]",s))}toString(){return".priority"}}const Pt=new D0;/**
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
 */const x0=Math.log(2);class M0{constructor(e){const t=i=>parseInt(Math.log(i)/x0,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pl=function(n,e,t,s){n.sort(e);const r=function(c,u){const h=u-c;let f,g;if(h===0)return null;if(h===1)return f=n[c],g=t?t(f):f,new Kt(g,f.node,Kt.BLACK,null,null);{const m=parseInt(h/2,10)+c,w=r(c,m),P=r(m+1,u);return f=n[m],g=t?t(f):f,new Kt(g,f.node,Kt.BLACK,w,P)}},i=function(c){let u=null,h=null,f=n.length;const g=function(w,P){const S=f-w,x=f;f-=w;const M=r(S+1,x),D=n[S],L=t?t(D):D;m(new Kt(L,D.node,P,null,M))},m=function(w){u?(u.left=w,u=w):(h=w,u=w)};for(let w=0;w<c.count;++w){const P=c.nextBitIsOne(),S=Math.pow(2,c.count-(w+1));P?g(S,Kt.BLACK):(g(S,Kt.BLACK),g(S,Kt.RED))}return h},o=new M0(n.length),a=i(o);return new xn(s||e,a)};/**
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
 */let Au;const Qi={};class rs{static get Default(){return z(Pt,"ChildrenNode.ts has not been loaded"),Au=Au||new rs({".priority":Qi},{".priority":Pt}),Au}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=li(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof xn?t:null}hasIndex(e){return fs(this.indexSet_,e.toString())}addIndex(e,t){z(e!==ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=t.getIterator(Re.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=Pl(s,e.getCompare()):a=Qi;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new rs(h,u)}addToIndexes(e,t){const s=yl(this.indexes_,(r,i)=>{const o=li(this.indexSet_,i);if(z(o,"Missing index implementation for "+i),r===Qi)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(Re.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),Pl(a,o.getCompare())}else return Qi;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new Re(e.name,a))),c.insert(e,e.node)}});return new rs(s,this.indexSet_)}removeFromIndexes(e,t){const s=yl(this.indexes_,r=>{if(r===Qi)return r;{const i=t.get(e.name);return i?r.remove(new Re(e.name,i)):r}});return new rs(s,this.indexSet_)}}/**
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
 */let Yi;class Ne{static get EMPTY_NODE(){return Yi||(Yi=new Ne(new xn(kd),null,rs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ov(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Yi}updatePriority(e){return this.children_.isEmpty()?this:new Ne(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Yi:t}}getChild(e){const t=Ae(e);return t===null?this:this.getImmediateChild(t).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(z(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Re(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Yi:this.priorityNode_;return new Ne(r,o,i)}}updateChild(e,t){const s=Ae(e);if(s===null)return t;{z(Ae(e)!==".priority"||xs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(Be(e),t);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,r=0,i=!0;if(this.forEachChild(Pt,(o,a)=>{t[o]=a.val(e),s++,i&&Ne.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Nv(this.getPriority().val())+":"),this.forEachChild(Pt,(t,s)=>{const r=s.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":rv(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Re(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Re(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Re(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Re.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Re.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===aa?-1:0}withIndex(e){if(e===ni||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ne(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Pt),r=t.getIterator(Pt);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ni?null:this.indexMap_.get(e.toString())}}Ne.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class L0 extends Ne{constructor(){super(new xn(kd),Ne.EMPTY_NODE,rs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ne.EMPTY_NODE}isEmpty(){return!1}}const aa=new L0;Object.defineProperties(Re,{MIN:{value:new Re(ci,Ne.EMPTY_NODE)},MAX:{value:new Re(yr,aa)}});kv.__EMPTY_NODE=Ne.EMPTY_NODE;it.__childrenNodeConstructor=Ne;k0(aa);O0(aa);/**
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
 */const V0=!0;function bt(n,e=null){if(n===null)return Ne.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new it(t,bt(e))}if(!(n instanceof Array)&&V0){const t=[];let s=!1;if(hn(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=bt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new Re(o,c)))}}),t.length===0)return Ne.EMPTY_NODE;const i=Pl(t,P0,o=>o.name,kd);if(s){const o=Pl(t,Pt.getCompare());return new Ne(i,bt(e),new rs({".priority":o},{".priority":Pt}))}else return new Ne(i,bt(e),rs.Default)}else{let t=Ne.EMPTY_NODE;return hn(n,(s,r)=>{if(fs(n,s)&&s.substring(0,1)!=="."){const i=bt(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(s,i))}}),t.updatePriority(bt(e))}}N0(bt);/**
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
 */class F0 extends fc{constructor(e){super(),this.indexPath_=e,z(!ve(e)&&Ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),r=this.extractChild(t.node),i=s.compareTo(r);return i===0?Ai(e.name,t.name):i}makePost(e,t){const s=bt(e),r=Ne.EMPTY_NODE.updateChild(this.indexPath_,s);return new Re(t,r)}maxPost(){const e=Ne.EMPTY_NODE.updateChild(this.indexPath_,aa);return new Re(yr,e)}toString(){return Cv(this.indexPath_,0).join("/")}}/**
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
 */class U0 extends fc{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ai(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Re.MIN}maxPost(){return Re.MAX}makePost(e,t){const s=bt(e);return new Re(t,s)}toString(){return".value"}}const B0=new U0;/**
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
 */function $0(n){return{type:"value",snapshotNode:n}}function j0(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function q0(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function sm(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function W0(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Nd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ci}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:yr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pt}copy(){const e=new Nd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rm(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Pt?t="$priority":n.index_===B0?t="$value":n.index_===ni?t="$key":(z(n.index_ instanceof F0,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=pt(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=pt(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+pt(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=pt(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+pt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function im(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Pt&&(e.i=n.index_.toString()),e}/**
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
 */class kl extends Iv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ia("p:rest:"),this.listens_={}}listen(e,t,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=kl.getListenId_(e,s),a={};this.listens_[o]=a;const c=rm(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,s),li(this.listens_,o)===a){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",r(g,null)}})}unlisten(e,t){const s=kl.getListenId_(e,t);delete this.listens_[s]}get(e){const t=rm(e._queryParams),s=e._path.toString(),r=new xo;return this.restRequest_(s+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wi(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Mo(a.responseText)}catch{Xt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Xt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class H0{constructor(){this.rootNode_=Ne.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Nl(){return{value:null,children:new Map}}function Mv(n,e,t){if(ve(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Ae(e);n.children.has(s)||n.children.set(s,Nl());const r=n.children.get(s);e=Be(e),Mv(r,e,t)}}function gh(n,e,t){n.value!==null?t(e,n.value):K0(n,(s,r)=>{const i=new qe(e.toString()+"/"+s);gh(r,i,t)})}function K0(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class G0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&hn(this.last_,(s,r)=>{t[s]=t[s]-r}),this.last_=e,t}}/**
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
 */const om=10*1e3,z0=30*1e3,Q0=5*60*1e3;class Y0{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new G0(e);const s=om+(z0-om)*Math.random();yo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;hn(e,(r,i)=>{i>0&&fs(this.statsToReport_,r)&&(t[r]=i,s=!0)}),s&&this.server_.reportStats(t),yo(this.reportStats_.bind(this),Math.floor(Math.random()*2*Q0))}}/**
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
 */var Mn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Mn||(Mn={}));function Lv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Fv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Ol{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Mn.ACK_USER_WRITE,this.source=Lv()}operationForChild(e){if(ve(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new qe(e));return new Ol(xe(),t,this.revert)}}else return z(Ae(this.path)===e,"operationForChild called for unrelated child."),new Ol(Be(this.path),this.affectedTree,this.revert)}}/**
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
 */class Er{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Mn.OVERWRITE}operationForChild(e){return ve(this.path)?new Er(this.source,xe(),this.snap.getImmediateChild(e)):new Er(this.source,Be(this.path),this.snap)}}/**
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
 */class Bo{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Mn.MERGE}operationForChild(e){if(ve(this.path)){const t=this.children.subtree(new qe(e));return t.isEmpty()?null:t.value?new Er(this.source,xe(),t.value):new Bo(this.source,xe(),t)}else return z(Ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bo(this.source,Be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Od{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ve(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ae(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function X0(n,e,t,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(W0(o.childName,o.snapshotNode))}),Xi(n,r,"child_removed",e,s,t),Xi(n,r,"child_added",e,s,t),Xi(n,r,"child_moved",i,s,t),Xi(n,r,"child_changed",e,s,t),Xi(n,r,"value",e,s,t),r}function Xi(n,e,t,s,r,i){const o=s.filter(a=>a.type===t);o.sort((a,c)=>Z0(n,a,c)),o.forEach(a=>{const c=J0(n,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,n.query_))})})}function J0(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Z0(n,e,t){if(e.childName==null||t.childName==null)throw vi("Should only compare child_ events.");const s=new Re(e.childName,e.snapshotNode),r=new Re(t.childName,t.snapshotNode);return n.index_.compare(s,r)}/**
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
 */function Uv(n,e){return{eventCache:n,serverCache:e}}function Eo(n,e,t,s){return Uv(new Od(e,t,s),n.serverCache)}function Bv(n,e,t,s){return Uv(n.eventCache,new Od(e,t,s))}function mh(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function vr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Ru;const eN=()=>(Ru||(Ru=new xn(Uk)),Ru);class Ue{static fromObject(e){let t=new Ue(null);return hn(e,(s,r)=>{t=t.set(new qe(s),r)}),t}constructor(e,t=eN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:xe(),value:this.value};if(ve(e))return null;{const s=Ae(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(Be(e),t);return i!=null?{path:at(new qe(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ve(e))return this;{const t=Ae(e),s=this.children.get(t);return s!==null?s.subtree(Be(e)):new Ue(null)}}set(e,t){if(ve(e))return new Ue(t,this.children);{const s=Ae(e),i=(this.children.get(s)||new Ue(null)).set(Be(e),t),o=this.children.insert(s,i);return new Ue(this.value,o)}}remove(e){if(ve(e))return this.children.isEmpty()?new Ue(null):new Ue(null,this.children);{const t=Ae(e),s=this.children.get(t);if(s){const r=s.remove(Be(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new Ue(null):new Ue(this.value,i)}else return this}}get(e){if(ve(e))return this.value;{const t=Ae(e),s=this.children.get(t);return s?s.get(Be(e)):null}}setTree(e,t){if(ve(e))return t;{const s=Ae(e),i=(this.children.get(s)||new Ue(null)).setTree(Be(e),t);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new Ue(this.value,o)}}fold(e){return this.fold_(xe(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(at(e,r),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,xe(),t)}findOnPath_(e,t,s){const r=this.value?s(t,this.value):!1;if(r)return r;if(ve(e))return null;{const i=Ae(e),o=this.children.get(i);return o?o.findOnPath_(Be(e),at(t,i),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,xe(),t)}foreachOnPath_(e,t,s){if(ve(e))return this;{this.value&&s(t,this.value);const r=Ae(e),i=this.children.get(r);return i?i.foreachOnPath_(Be(e),at(t,r),s):new Ue(null)}}foreach(e){this.foreach_(xe(),e)}foreach_(e,t){this.children.inorderTraversal((s,r)=>{r.foreach_(at(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class En{constructor(e){this.writeTree_=e}static empty(){return new En(new Ue(null))}}function vo(n,e,t){if(ve(e))return new En(new Ue(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=sn(r,e);return i=i.updateChild(o,t),new En(n.writeTree_.set(r,i))}else{const r=new Ue(t),i=n.writeTree_.setTree(e,r);return new En(i)}}}function am(n,e,t){let s=n;return hn(t,(r,i)=>{s=vo(s,at(e,r),i)}),s}function lm(n,e){if(ve(e))return En.empty();{const t=n.writeTree_.setTree(e,new Ue(null));return new En(t)}}function _h(n,e){return Ar(n,e)!=null}function Ar(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(sn(t.path,e)):null}function cm(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Pt,(s,r)=>{e.push(new Re(s,r))}):n.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Re(s,r.value))}),e}function Os(n,e){if(ve(e))return n;{const t=Ar(n,e);return t!=null?new En(new Ue(t)):new En(n.writeTree_.subtree(e))}}function yh(n){return n.writeTree_.isEmpty()}function ui(n,e){return $v(xe(),n.writeTree_,e)}function $v(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(z(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):t=$v(at(n,r),i,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(at(n,".priority"),s)),t}}/**
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
 */function jv(n,e){return Gv(e,n)}function tN(n,e,t,s,r){z(s>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:r}),r&&(n.visibleWrites=vo(n.visibleWrites,e,t)),n.lastWriteId=s}function nN(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function sN(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);z(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let r=s.visible,i=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&rN(a,s.path)?r=!1:gn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return iN(n),!0;if(s.snap)n.visibleWrites=lm(n.visibleWrites,s.path);else{const a=s.children;hn(a,c=>{n.visibleWrites=lm(n.visibleWrites,at(s.path,c))})}return!0}else return!1}function rN(n,e){if(n.snap)return gn(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&gn(at(n.path,t),e))return!0;return!1}function iN(n){n.visibleWrites=qv(n.allWrites,oN,xe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function oN(n){return n.visible}function qv(n,e,t){let s=En.empty();for(let r=0;r<n.length;++r){const i=n[r];if(e(i)){const o=i.path;let a;if(i.snap)gn(t,o)?(a=sn(t,o),s=vo(s,a,i.snap)):gn(o,t)&&(a=sn(o,t),s=vo(s,xe(),i.snap.getChild(a)));else if(i.children){if(gn(t,o))a=sn(t,o),s=am(s,a,i.children);else if(gn(o,t))if(a=sn(o,t),ve(a))s=am(s,xe(),i.children);else{const c=li(i.children,Ae(a));if(c){const u=c.getChild(Be(a));s=vo(s,xe(),u)}}}else throw vi("WriteRecord should have .snap or .children")}}return s}function Wv(n,e,t,s,r){if(!s&&!r){const i=Ar(n.visibleWrites,e);if(i!=null)return i;{const o=Os(n.visibleWrites,e);if(yh(o))return t;if(t==null&&!_h(o,xe()))return null;{const a=t||Ne.EMPTY_NODE;return ui(o,a)}}}else{const i=Os(n.visibleWrites,e);if(!r&&yh(i))return t;if(!r&&t==null&&!_h(i,xe()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(gn(u.path,e)||gn(e,u.path))},a=qv(n.allWrites,o,e),c=t||Ne.EMPTY_NODE;return ui(a,c)}}}function aN(n,e,t){let s=Ne.EMPTY_NODE;const r=Ar(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Pt,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(t){const i=Os(n.visibleWrites,e);return t.forEachChild(Pt,(o,a)=>{const c=ui(Os(i,new qe(o)),a);s=s.updateImmediateChild(o,c)}),cm(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Os(n.visibleWrites,e);return cm(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function lN(n,e,t,s,r){z(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=at(e,t);if(_h(n.visibleWrites,i))return null;{const o=Os(n.visibleWrites,i);return yh(o)?r.getChild(t):ui(o,r.getChild(t))}}function cN(n,e,t,s){const r=at(e,t),i=Ar(n.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(t)){const o=Os(n.visibleWrites,r);return ui(o,s.getNode().getImmediateChild(t))}else return null}function uN(n,e){return Ar(n.visibleWrites,e)}function hN(n,e,t,s,r,i,o){let a;const c=Os(n.visibleWrites,e),u=Ar(c,xe());if(u!=null)a=u;else if(t!=null)a=ui(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),g=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=g.getNext();for(;m&&h.length<r;)f(m,s)!==0&&h.push(m),m=g.getNext();return h}else return[]}function dN(){return{visibleWrites:En.empty(),allWrites:[],lastWriteId:-1}}function Eh(n,e,t,s){return Wv(n.writeTree,n.treePath,e,t,s)}function Hv(n,e){return aN(n.writeTree,n.treePath,e)}function um(n,e,t,s){return lN(n.writeTree,n.treePath,e,t,s)}function Dl(n,e){return uN(n.writeTree,at(n.treePath,e))}function fN(n,e,t,s,r,i){return hN(n.writeTree,n.treePath,e,t,s,r,i)}function Dd(n,e,t){return cN(n.writeTree,n.treePath,e,t)}function Kv(n,e){return Gv(at(n.treePath,e),n.writeTree)}function Gv(n,e){return{treePath:n,writeTree:e}}/**
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
 */class pN{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;z(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),z(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(s,sm(s,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(s,q0(s,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(s,j0(s,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(s,sm(s,e.snapshotNode,r.oldSnap));else throw vi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class gN{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const zv=new gN;class xd{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Od(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dd(this.writes_,e,s)}}getChildAfterChild(e,t,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vr(this.viewCache_),i=fN(this.writes_,r,t,1,s,e);return i.length===0?null:i[0]}}function mN(n,e){z(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function _N(n,e,t,s,r){const i=new pN;let o,a;if(t.type===Mn.OVERWRITE){const u=t;u.source.fromUser?o=vh(n,e,u.path,u.snap,s,r,i):(z(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ve(u.path),o=xl(n,e,u.path,u.snap,s,r,a,i))}else if(t.type===Mn.MERGE){const u=t;u.source.fromUser?o=EN(n,e,u.path,u.children,s,r,i):(z(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Th(n,e,u.path,u.children,s,r,a,i))}else if(t.type===Mn.ACK_USER_WRITE){const u=t;u.revert?o=wN(n,e,u.path,s,r,i):o=vN(n,e,u.path,u.affectedTree,s,r,i)}else if(t.type===Mn.LISTEN_COMPLETE)o=TN(n,e,t.path,s,i);else throw vi("Unknown operation type: "+t.type);const c=i.getChanges();return yN(e,o,c),{viewCache:o,changes:c}}function yN(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=mh(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&t.push($0(mh(e)))}}function Qv(n,e,t,s,r,i){const o=e.eventCache;if(Dl(s,t)!=null)return e;{let a,c;if(ve(t))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=vr(e),h=u instanceof Ne?u:Ne.EMPTY_NODE,f=Hv(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Eh(s,vr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ae(t);if(u===".priority"){z(xs(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=um(s,t,h,c);f!=null?a=n.filter.updatePriority(h,f):a=o.getNode()}else{const h=Be(t);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const g=um(s,t,o.getNode(),c);g!=null?f=o.getNode().getImmediateChild(u).updateChild(h,g):f=o.getNode().getImmediateChild(u)}else f=Dd(s,u,e.serverCache);f!=null?a=n.filter.updateChild(o.getNode(),u,f,h,r,i):a=o.getNode()}}return Eo(e,a,o.isFullyInitialized()||ve(t),n.filter.filtersNodes())}}function xl(n,e,t,s,r,i,o,a){const c=e.serverCache;let u;const h=o?n.filter:n.filter.getIndexedFilter();if(ve(t))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(t,s);u=h.updateFullNode(c.getNode(),m,null)}else{const m=Ae(t);if(!c.isCompleteForPath(t)&&xs(t)>1)return e;const w=Be(t),S=c.getNode().getImmediateChild(m).updateChild(w,s);m===".priority"?u=h.updatePriority(c.getNode(),S):u=h.updateChild(c.getNode(),m,S,w,zv,null)}const f=Bv(e,u,c.isFullyInitialized()||ve(t),h.filtersNodes()),g=new xd(r,f,i);return Qv(n,f,t,r,g,a)}function vh(n,e,t,s,r,i,o){const a=e.eventCache;let c,u;const h=new xd(r,e,i);if(ve(t))u=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Eo(e,u,!0,n.filter.filtersNodes());else{const f=Ae(t);if(f===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),s),c=Eo(e,u,a.isFullyInitialized(),a.isFiltered());else{const g=Be(t),m=a.getNode().getImmediateChild(f);let w;if(ve(g))w=s;else{const P=h.getCompleteChild(f);P!=null?Rv(g)===".priority"&&P.getChild(bv(g)).isEmpty()?w=P:w=P.updateChild(g,s):w=Ne.EMPTY_NODE}if(m.equals(w))c=e;else{const P=n.filter.updateChild(a.getNode(),f,w,g,h,o);c=Eo(e,P,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function hm(n,e){return n.eventCache.isCompleteForChild(e)}function EN(n,e,t,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=at(t,c);hm(e,Ae(h))&&(a=vh(n,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=at(t,c);hm(e,Ae(h))||(a=vh(n,a,h,u,r,i,o))}),a}function dm(n,e,t){return t.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Th(n,e,t,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;ve(t)?u=s:u=new Ue(null).setTree(t,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,g)=>{if(h.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),w=dm(n,m,g);c=xl(n,c,new qe(f),w,r,i,o,a)}}),u.children.inorderTraversal((f,g)=>{const m=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!h.hasChild(f)&&!m){const w=e.serverCache.getNode().getImmediateChild(f),P=dm(n,w,g);c=xl(n,c,new qe(f),P,r,i,o,a)}}),c}function vN(n,e,t,s,r,i,o){if(Dl(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(ve(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return xl(n,e,t,c.getNode().getChild(t),r,i,a,o);if(ve(t)){let u=new Ue(null);return c.getNode().forEachChild(ni,(h,f)=>{u=u.set(new qe(h),f)}),Th(n,e,t,u,r,i,a,o)}else return e}else{let u=new Ue(null);return s.foreach((h,f)=>{const g=at(t,h);c.isCompleteForPath(g)&&(u=u.set(h,c.getNode().getChild(g)))}),Th(n,e,t,u,r,i,a,o)}}function TN(n,e,t,s,r){const i=e.serverCache,o=Bv(e,i.getNode(),i.isFullyInitialized()||ve(t),i.isFiltered());return Qv(n,o,t,s,zv,r)}function wN(n,e,t,s,r,i){let o;if(Dl(s,t)!=null)return e;{const a=new xd(s,e,r),c=e.eventCache.getNode();let u;if(ve(t)||Ae(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Eh(s,vr(e));else{const f=e.serverCache.getNode();z(f instanceof Ne,"serverChildren would be complete if leaf node"),h=Hv(s,f)}h=h,u=n.filter.updateFullNode(c,h,i)}else{const h=Ae(t);let f=Dd(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=n.filter.updateChild(c,h,f,Be(t),a,i):e.eventCache.getNode().hasChild(h)?u=n.filter.updateChild(c,h,Ne.EMPTY_NODE,Be(t),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Eh(s,vr(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Dl(s,xe())!=null,Eo(e,u,o,n.filter.filtersNodes())}}function IN(n,e){const t=vr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ve(e)&&!t.getImmediateChild(Ae(e)).isEmpty())?t.getChild(e):null}function fm(n,e,t,s){e.type===Mn.MERGE&&e.source.queryId!==null&&(z(vr(n.viewCache_),"We should always have a full cache before handling merges"),z(mh(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,i=_N(n.processor_,r,e,t,s);return mN(n.processor_,i.viewCache),z(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,AN(n,i.changes,i.viewCache.eventCache.getNode())}function AN(n,e,t,s){const r=n.eventRegistrations_;return X0(n.eventGenerator_,e,t,r)}/**
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
 */let pm;function RN(n){z(!pm,"__referenceConstructor has already been defined"),pm=n}function Md(n,e,t,s){const r=e.source.queryId;if(r!==null){const i=n.views.get(r);return z(i!=null,"SyncTree gave us an op for an invalid query."),fm(i,e,t,s)}else{let i=[];for(const o of n.views.values())i=i.concat(fm(o,e,t,s));return i}}function Ld(n,e){let t=null;for(const s of n.views.values())t=t||IN(s,e);return t}/**
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
 */let gm;function CN(n){z(!gm,"__referenceConstructor has already been defined"),gm=n}class mm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ue(null),this.pendingWriteTree_=dN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bN(n,e,t,s,r){return tN(n.pendingWriteTree_,e,t,s,r),r?gc(n,new Er(Lv(),e,t)):[]}function qr(n,e,t=!1){const s=nN(n.pendingWriteTree_,e);if(sN(n.pendingWriteTree_,e)){let i=new Ue(null);return s.snap!=null?i=i.set(xe(),!0):hn(s.children,o=>{i=i.set(new qe(o),!0)}),gc(n,new Ol(s.path,i,t))}else return[]}function pc(n,e,t){return gc(n,new Er(Vv(),e,t))}function SN(n,e,t){const s=Ue.fromObject(t);return gc(n,new Bo(Vv(),e,s))}function PN(n,e,t,s){const r=Zv(n,s);if(r!=null){const i=eT(r),o=i.path,a=i.queryId,c=sn(o,e),u=new Er(Fv(a),c,t);return tT(n,o,u)}else return[]}function kN(n,e,t,s){const r=Zv(n,s);if(r){const i=eT(r),o=i.path,a=i.queryId,c=sn(o,e),u=Ue.fromObject(t),h=new Bo(Fv(a),c,u);return tT(n,o,h)}else return[]}function Yv(n,e,t){const r=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=sn(o,e),u=Ld(a,c);if(u)return u});return Wv(r,e,i,t,!0)}function gc(n,e){return Xv(e,n.syncPointTree_,null,jv(n.pendingWriteTree_,xe()))}function Xv(n,e,t,s){if(ve(n.path))return Jv(n,e,t,s);{const r=e.get(xe());t==null&&r!=null&&(t=Ld(r,xe()));let i=[];const o=Ae(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const u=t?t.getImmediateChild(o):null,h=Kv(s,o);i=i.concat(Xv(a,c,u,h))}return r&&(i=i.concat(Md(r,n,s,t))),i}}function Jv(n,e,t,s){const r=e.get(xe());t==null&&r!=null&&(t=Ld(r,xe()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,u=Kv(s,o),h=n.operationForChild(o);h&&(i=i.concat(Jv(h,a,c,u)))}),r&&(i=i.concat(Md(r,n,s,t))),i}function Zv(n,e){return n.tagToQueryMap.get(e)}function eT(n){const e=n.indexOf("$");return z(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new qe(n.substr(0,e))}}function tT(n,e,t){const s=n.syncPointTree_.get(e);z(s,"Missing sync point for query tag that we're tracking");const r=jv(n.pendingWriteTree_,e);return Md(s,t,r,null)}/**
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
 */class Vd{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Vd(t)}node(){return this.node_}}class Fd{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=at(this.path_,e);return new Fd(this.syncTree_,t)}node(){return Yv(this.syncTree_,this.path_)}}const NN=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},_m=function(n,e,t){if(!n||typeof n!="object")return n;if(z(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return ON(n[".sv"],e,t);if(typeof n[".sv"]=="object")return DN(n[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},ON=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:z(!1,"Unexpected server value: "+n)}},DN=function(n,e,t){n.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&z(!1,"Unexpected increment value: "+s);const r=e.node();if(z(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},xN=function(n,e,t,s){return Ud(e,new Fd(t,n),s)},MN=function(n,e,t){return Ud(n,new Vd(e),t)};function Ud(n,e,t){const s=n.getPriority().val(),r=_m(s,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=_m(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new it(a,bt(r)):n}else{const o=n;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new it(r))),o.forEachChild(Pt,(a,c)=>{const u=Ud(c,e.getImmediateChild(a),t);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class Bd{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function $d(n,e){let t=e instanceof qe?e:new qe(e),s=n,r=Ae(t);for(;r!==null;){const i=li(s.node.children,r)||{children:{},childCount:0};s=new Bd(r,s,i),t=Be(t),r=Ae(t)}return s}function Ri(n){return n.node.value}function nT(n,e){n.node.value=e,wh(n)}function sT(n){return n.node.childCount>0}function LN(n){return Ri(n)===void 0&&!sT(n)}function mc(n,e){hn(n.node.children,(t,s)=>{e(new Bd(t,n,s))})}function rT(n,e,t,s){t&&e(n),mc(n,r=>{rT(r,e,!0)})}function VN(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function la(n){return new qe(n.parent===null?n.name:la(n.parent)+"/"+n.name)}function wh(n){n.parent!==null&&FN(n.parent,n.name,n)}function FN(n,e,t){const s=LN(t),r=fs(n.node.children,e);s&&r?(delete n.node.children[e],n.node.childCount--,wh(n)):!s&&!r&&(n.node.children[e]=t.node,n.node.childCount++,wh(n))}/**
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
 */const UN=/[\[\].#$\/\u0000-\u001F\u007F]/,BN=/[\[\].#$\u0000-\u001F\u007F]/,Cu=10*1024*1024,iT=function(n){return typeof n=="string"&&n.length!==0&&!UN.test(n)},$N=function(n){return typeof n=="string"&&n.length!==0&&!BN.test(n)},jN=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$N(n)},oT=function(n,e,t){const s=t instanceof qe?new T0(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+or(s));if(typeof e=="function")throw new Error(n+"contains a function "+or(s)+" with contents = "+e.toString());if(iv(e))throw new Error(n+"contains "+e.toString()+" "+or(s));if(typeof e=="string"&&e.length>Cu/3&&lc(e)>Cu)throw new Error(n+"contains a string greater than "+Cu+" utf8 bytes "+or(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(hn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!iT(o)))throw new Error(n+" contains an invalid key ("+o+") "+or(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);w0(s,o),oT(n,a,s),I0(s)}),r&&i)throw new Error(n+' contains ".value" child '+or(s)+" in addition to actual children.")}},qN=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!iT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!jN(t))throw new Error(kC(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class WN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function HN(n,e){let t=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();t!==null&&!Sv(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&n.eventLists_.push(t)}function Rr(n,e,t){HN(n,t),KN(n,s=>gn(s,e)||gn(e,s))}function KN(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const r=n.eventLists_[s];if(r){const i=r.path;e(i)?(GN(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function GN(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();_o&&Ct("event: "+t.toString()),oa(s)}}}/**
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
 */const zN="repo_interrupt",QN=25;class YN{constructor(e,t,s,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nl(),this.transactionQueueTree_=new Bd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function XN(n,e,t){if(n.stats_=bd(n.repoInfo_),n.forceRestClient_||Hk())n.server_=new kl(n.repoInfo_,(s,r,i,o)=>{ym(n,s,r,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Em(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pt(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new os(n.repoInfo_,e,(s,r,i,o)=>{ym(n,s,r,i,o)},s=>{Em(n,s)},s=>{ZN(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Xk(n.repoInfo_,()=>new Y0(n.stats_,n.server_)),n.infoData_=new H0,n.infoSyncTree_=new mm({startListening:(s,r,i,o)=>{let a=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(a=pc(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jd(n,"connected",!1),n.serverSyncTree_=new mm({startListening:(s,r,i,o)=>(n.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);Rr(n.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{n.server_.unlisten(s,r)}})}function JN(n){const t=n.infoData_.getNode(new qe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function aT(n){return NN({timestamp:JN(n)})}function ym(n,e,t,s,r){n.dataUpdateCount++;const i=new qe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(s){const c=yl(t,u=>bt(u));o=kN(n.serverSyncTree_,i,c,r)}else{const c=bt(t);o=PN(n.serverSyncTree_,i,c,r)}else if(s){const c=yl(t,u=>bt(u));o=SN(n.serverSyncTree_,i,c)}else{const c=bt(t);o=pc(n.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Wd(n,i)),Rr(n.eventQueue_,a,o)}function Em(n,e){jd(n,"connected",e),e===!1&&tO(n)}function ZN(n,e){hn(e,(t,s)=>{jd(n,t,s)})}function jd(n,e,t){const s=new qe("/.info/"+e),r=bt(t);n.infoData_.updateSnapshot(s,r);const i=pc(n.infoSyncTree_,s,r);Rr(n.eventQueue_,s,i)}function eO(n){return n.nextWriteId_++}function tO(n){lT(n,"onDisconnectEvents");const e=aT(n),t=Nl();gh(n.onDisconnect_,xe(),(r,i)=>{const o=xN(r,i,n.serverSyncTree_,e);Mv(t,r,o)});let s=[];gh(t,xe(),(r,i)=>{s=s.concat(pc(n.serverSyncTree_,r,i));const o=iO(n,r);Wd(n,o)}),n.onDisconnect_=Nl(),Rr(n.eventQueue_,xe(),s)}function nO(n){n.persistentConnection_&&n.persistentConnection_.interrupt(zN)}function lT(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Ct(t,...e)}function cT(n,e,t){return Yv(n.serverSyncTree_,e,t)||Ne.EMPTY_NODE}function qd(n,e=n.transactionQueueTree_){if(e||_c(n,e),Ri(e)){const t=hT(n,e);z(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&sO(n,la(e),t)}else sT(e)&&mc(e,t=>{qd(n,t)})}function sO(n,e,t){const s=t.map(u=>u.currentWriteId),r=cT(n,e,s);let i=r;const o=r.hash();for(let u=0;u<t.length;u++){const h=t[u];z(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=sn(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;n.server_.put(c.toString(),a,u=>{lT(n,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let g=0;g<t.length;g++)t[g].status=2,h=h.concat(qr(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&f.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();_c(n,$d(n.transactionQueueTree_,e)),qd(n,n.transactionQueueTree_),Rr(n.eventQueue_,e,h);for(let g=0;g<f.length;g++)oa(f[g])}else{if(u==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{Xt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=u}Wd(n,e)}},o)}function Wd(n,e){const t=uT(n,e),s=la(t),r=hT(n,t);return rO(n,r,s),s}function rO(n,e,t){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=sn(t,c.path);let h=!1,f;if(z(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,r=r.concat(qr(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=QN)h=!0,f="maxretry",r=r.concat(qr(n.serverSyncTree_,c.currentWriteId,!0));else{const g=cT(n,c.path,o);c.currentInputSnapshot=g;const m=e[a].update(g.val());if(m!==void 0){oT("transaction failed: Data returned ",m,c.path);let w=bt(m);typeof m=="object"&&m!=null&&fs(m,".priority")||(w=w.updatePriority(g.getPriority()));const S=c.currentWriteId,x=aT(n),M=MN(w,g,x);c.currentOutputSnapshotRaw=w,c.currentOutputSnapshotResolved=M,c.currentWriteId=eO(n),o.splice(o.indexOf(S),1),r=r.concat(bN(n.serverSyncTree_,c.path,M,c.currentWriteId,c.applyLocally)),r=r.concat(qr(n.serverSyncTree_,S,!0))}else h=!0,f="nodata",r=r.concat(qr(n.serverSyncTree_,c.currentWriteId,!0))}Rr(n.eventQueue_,t,r),r=[],h&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}_c(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)oa(s[a]);qd(n,n.transactionQueueTree_)}function uT(n,e){let t,s=n.transactionQueueTree_;for(t=Ae(e);t!==null&&Ri(s)===void 0;)s=$d(s,t),e=Be(e),t=Ae(e);return s}function hT(n,e){const t=[];return dT(n,e,t),t.sort((s,r)=>s.order-r.order),t}function dT(n,e,t){const s=Ri(e);if(s)for(let r=0;r<s.length;r++)t.push(s[r]);mc(e,r=>{dT(n,r,t)})}function _c(n,e){const t=Ri(e);if(t){let s=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[s]=t[r],s++);t.length=s,nT(e,t.length>0?t:void 0)}mc(e,s=>{_c(n,s)})}function iO(n,e){const t=la(uT(n,e)),s=$d(n.transactionQueueTree_,e);return VN(s,r=>{bu(n,r)}),bu(n,s),rT(s,r=>{bu(n,r)}),t}function bu(n,e){const t=Ri(e);if(t){const s=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(z(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(z(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(qr(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?nT(e,void 0):t.length=i+1,Rr(n.eventQueue_,la(e),r);for(let o=0;o<s.length;o++)oa(s[o])}}/**
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
 */function oO(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let r=t[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function aO(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Xt(`Invalid query segment '${t}' in query '${n}'`)}return e}const vm=function(n,e){const t=lO(n),s=t.namespace;t.domain==="firebase.com"&&_r(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&_r("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Vk();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new zk(t.host,t.secure,s,r,e,"",s!==t.subdomain),path:new qe(t.pathString)}},lO=function(n){let e="",t="",s="",r="",i="",o=!0,a="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let h=n.indexOf("/");h===-1&&(h=n.length);let f=n.indexOf("?");f===-1&&(f=n.length),e=n.substring(0,Math.min(h,f)),h<f&&(r=oO(n.substring(h,f)));const g=aO(n.substring(Math.min(n.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),t=e.substring(w+1),i=s}"ns"in g&&(i=g.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class Hd{constructor(e,t,s,r){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=r}get key(){return ve(this._path)?null:Rv(this._path)}get ref(){return new Ci(this._repo,this._path)}get _queryIdentifier(){const e=im(this._queryParams),t=Rd(e);return t==="{}"?"default":t}get _queryObject(){return im(this._queryParams)}isEqual(e){if(e=lt(e),!(e instanceof Hd))return!1;const t=this._repo===e._repo,s=Sv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+v0(this._path)}}class Ci extends Hd{constructor(e,t){super(e,t,new Nd,!1)}get parent(){const e=bv(this._path);return e===null?null:new Ci(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}RN(Ci);CN(Ci);/**
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
 */const cO="FIREBASE_DATABASE_EMULATOR_HOST",Ih={};let uO=!1;function hO(n,e,t,s,r){let i=s||n.options.databaseURL;i===void 0&&(n.options.projectId||_r("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ct("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=vm(i,r),a=o.repoInfo,c;typeof process<"u"&&Bg&&(c=Bg[cO]),c?(i=`http://${c}?ns=${a.namespace}`,o=vm(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new Gk(n.name,n.options,e);qN("Invalid Firebase Database URL",o),ve(o.path)||_r("Database URL must point to the root of a Firebase Database (not including a child path).");const h=fO(a,n,u,new Kk(n.name,t));return new pO(h,n)}function dO(n,e){const t=Ih[e];(!t||t[n.key]!==n)&&_r(`Database ${e}(${n.repoInfo_}) has already been deleted.`),nO(n),delete t[n.key]}function fO(n,e,t,s){let r=Ih[e.name];r||(r={},Ih[e.name]=r);let i=r[n.toURLString()];return i&&_r("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new YN(n,uO,t,s),r[n.toURLString()]=i,i}class pO{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(XN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ci(this._repo,xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(dO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_r("Cannot call "+e+" on a deleted database.")}}/**
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
 */function gO(n){Nk(Hs),Bn(new wn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return hO(s,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Yt($g,jg,n),Yt($g,jg,"esm2017")}os.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};os.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};gO();var Tm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,fT;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,y){function E(){}E.prototype=y.prototype,C.D=y.prototype,C.prototype=new E,C.prototype.constructor=C,C.C=function(R,b,A){for(var v=Array(arguments.length-2),De=2;De<arguments.length;De++)v[De-2]=arguments[De];return y.prototype[b].apply(R,v)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(C,y,E){E||(E=0);var R=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)R[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;16>b;++b)R[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=C.g[0],E=C.g[1],b=C.g[2];var A=C.g[3],v=y+(A^E&(b^A))+R[0]+3614090360&4294967295;y=E+(v<<7&4294967295|v>>>25),v=A+(b^y&(E^b))+R[1]+3905402710&4294967295,A=y+(v<<12&4294967295|v>>>20),v=b+(E^A&(y^E))+R[2]+606105819&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(y^b&(A^y))+R[3]+3250441966&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(A^E&(b^A))+R[4]+4118548399&4294967295,y=E+(v<<7&4294967295|v>>>25),v=A+(b^y&(E^b))+R[5]+1200080426&4294967295,A=y+(v<<12&4294967295|v>>>20),v=b+(E^A&(y^E))+R[6]+2821735955&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(y^b&(A^y))+R[7]+4249261313&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(A^E&(b^A))+R[8]+1770035416&4294967295,y=E+(v<<7&4294967295|v>>>25),v=A+(b^y&(E^b))+R[9]+2336552879&4294967295,A=y+(v<<12&4294967295|v>>>20),v=b+(E^A&(y^E))+R[10]+4294925233&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(y^b&(A^y))+R[11]+2304563134&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(A^E&(b^A))+R[12]+1804603682&4294967295,y=E+(v<<7&4294967295|v>>>25),v=A+(b^y&(E^b))+R[13]+4254626195&4294967295,A=y+(v<<12&4294967295|v>>>20),v=b+(E^A&(y^E))+R[14]+2792965006&4294967295,b=A+(v<<17&4294967295|v>>>15),v=E+(y^b&(A^y))+R[15]+1236535329&4294967295,E=b+(v<<22&4294967295|v>>>10),v=y+(b^A&(E^b))+R[1]+4129170786&4294967295,y=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(y^E))+R[6]+3225465664&4294967295,A=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(A^y))+R[11]+643717713&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^y&(b^A))+R[0]+3921069994&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(b^A&(E^b))+R[5]+3593408605&4294967295,y=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(y^E))+R[10]+38016083&4294967295,A=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(A^y))+R[15]+3634488961&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^y&(b^A))+R[4]+3889429448&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(b^A&(E^b))+R[9]+568446438&4294967295,y=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(y^E))+R[14]+3275163606&4294967295,A=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(A^y))+R[3]+4107603335&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^y&(b^A))+R[8]+1163531501&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(b^A&(E^b))+R[13]+2850285829&4294967295,y=E+(v<<5&4294967295|v>>>27),v=A+(E^b&(y^E))+R[2]+4243563512&4294967295,A=y+(v<<9&4294967295|v>>>23),v=b+(y^E&(A^y))+R[7]+1735328473&4294967295,b=A+(v<<14&4294967295|v>>>18),v=E+(A^y&(b^A))+R[12]+2368359562&4294967295,E=b+(v<<20&4294967295|v>>>12),v=y+(E^b^A)+R[5]+4294588738&4294967295,y=E+(v<<4&4294967295|v>>>28),v=A+(y^E^b)+R[8]+2272392833&4294967295,A=y+(v<<11&4294967295|v>>>21),v=b+(A^y^E)+R[11]+1839030562&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^y)+R[14]+4259657740&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(E^b^A)+R[1]+2763975236&4294967295,y=E+(v<<4&4294967295|v>>>28),v=A+(y^E^b)+R[4]+1272893353&4294967295,A=y+(v<<11&4294967295|v>>>21),v=b+(A^y^E)+R[7]+4139469664&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^y)+R[10]+3200236656&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(E^b^A)+R[13]+681279174&4294967295,y=E+(v<<4&4294967295|v>>>28),v=A+(y^E^b)+R[0]+3936430074&4294967295,A=y+(v<<11&4294967295|v>>>21),v=b+(A^y^E)+R[3]+3572445317&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^y)+R[6]+76029189&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(E^b^A)+R[9]+3654602809&4294967295,y=E+(v<<4&4294967295|v>>>28),v=A+(y^E^b)+R[12]+3873151461&4294967295,A=y+(v<<11&4294967295|v>>>21),v=b+(A^y^E)+R[15]+530742520&4294967295,b=A+(v<<16&4294967295|v>>>16),v=E+(b^A^y)+R[2]+3299628645&4294967295,E=b+(v<<23&4294967295|v>>>9),v=y+(b^(E|~A))+R[0]+4096336452&4294967295,y=E+(v<<6&4294967295|v>>>26),v=A+(E^(y|~b))+R[7]+1126891415&4294967295,A=y+(v<<10&4294967295|v>>>22),v=b+(y^(A|~E))+R[14]+2878612391&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~y))+R[5]+4237533241&4294967295,E=b+(v<<21&4294967295|v>>>11),v=y+(b^(E|~A))+R[12]+1700485571&4294967295,y=E+(v<<6&4294967295|v>>>26),v=A+(E^(y|~b))+R[3]+2399980690&4294967295,A=y+(v<<10&4294967295|v>>>22),v=b+(y^(A|~E))+R[10]+4293915773&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~y))+R[1]+2240044497&4294967295,E=b+(v<<21&4294967295|v>>>11),v=y+(b^(E|~A))+R[8]+1873313359&4294967295,y=E+(v<<6&4294967295|v>>>26),v=A+(E^(y|~b))+R[15]+4264355552&4294967295,A=y+(v<<10&4294967295|v>>>22),v=b+(y^(A|~E))+R[6]+2734768916&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~y))+R[13]+1309151649&4294967295,E=b+(v<<21&4294967295|v>>>11),v=y+(b^(E|~A))+R[4]+4149444226&4294967295,y=E+(v<<6&4294967295|v>>>26),v=A+(E^(y|~b))+R[11]+3174756917&4294967295,A=y+(v<<10&4294967295|v>>>22),v=b+(y^(A|~E))+R[2]+718787259&4294967295,b=A+(v<<15&4294967295|v>>>17),v=E+(A^(b|~y))+R[9]+3951481745&4294967295,C.g[0]=C.g[0]+y&4294967295,C.g[1]=C.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,C.g[2]=C.g[2]+b&4294967295,C.g[3]=C.g[3]+A&4294967295}s.prototype.u=function(C,y){y===void 0&&(y=C.length);for(var E=y-this.blockSize,R=this.B,b=this.h,A=0;A<y;){if(b==0)for(;A<=E;)r(this,C,A),A+=this.blockSize;if(typeof C=="string"){for(;A<y;)if(R[b++]=C.charCodeAt(A++),b==this.blockSize){r(this,R),b=0;break}}else for(;A<y;)if(R[b++]=C[A++],b==this.blockSize){r(this,R),b=0;break}}this.h=b,this.o+=y},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var y=1;y<C.length-8;++y)C[y]=0;var E=8*this.o;for(y=C.length-8;y<C.length;++y)C[y]=E&255,E/=256;for(this.u(C),C=Array(16),y=E=0;4>y;++y)for(var R=0;32>R;R+=8)C[E++]=this.g[y]>>>R&255;return C};function i(C,y){var E=a;return Object.prototype.hasOwnProperty.call(E,C)?E[C]:E[C]=y(C)}function o(C,y){this.h=y;for(var E=[],R=!0,b=C.length-1;0<=b;b--){var A=C[b]|0;R&&A==y||(E[b]=A,R=!1)}this.g=E}var a={};function c(C){return-128<=C&&128>C?i(C,function(y){return new o([y|0],0>y?-1:0)}):new o([C|0],0>C?-1:0)}function u(C){if(isNaN(C)||!isFinite(C))return f;if(0>C)return S(u(-C));for(var y=[],E=1,R=0;C>=E;R++)y[R]=C/E|0,E*=4294967296;return new o(y,0)}function h(C,y){if(C.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(C.charAt(0)=="-")return S(h(C.substring(1),y));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(y,8)),R=f,b=0;b<C.length;b+=8){var A=Math.min(8,C.length-b),v=parseInt(C.substring(b,b+A),y);8>A?(A=u(Math.pow(y,A)),R=R.j(A).add(u(v))):(R=R.j(E),R=R.add(u(v)))}return R}var f=c(0),g=c(1),m=c(16777216);n=o.prototype,n.m=function(){if(P(this))return-S(this).m();for(var C=0,y=1,E=0;E<this.g.length;E++){var R=this.i(E);C+=(0<=R?R:4294967296+R)*y,y*=4294967296}return C},n.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(w(this))return"0";if(P(this))return"-"+S(this).toString(C);for(var y=u(Math.pow(C,6)),E=this,R="";;){var b=L(E,y).g;E=x(E,b.j(y));var A=((0<E.g.length?E.g[0]:E.h)>>>0).toString(C);if(E=b,w(E))return A+R;for(;6>A.length;)A="0"+A;R=A+R}},n.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function w(C){if(C.h!=0)return!1;for(var y=0;y<C.g.length;y++)if(C.g[y]!=0)return!1;return!0}function P(C){return C.h==-1}n.l=function(C){return C=x(this,C),P(C)?-1:w(C)?0:1};function S(C){for(var y=C.g.length,E=[],R=0;R<y;R++)E[R]=~C.g[R];return new o(E,~C.h).add(g)}n.abs=function(){return P(this)?S(this):this},n.add=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],R=0,b=0;b<=y;b++){var A=R+(this.i(b)&65535)+(C.i(b)&65535),v=(A>>>16)+(this.i(b)>>>16)+(C.i(b)>>>16);R=v>>>16,A&=65535,v&=65535,E[b]=v<<16|A}return new o(E,E[E.length-1]&-2147483648?-1:0)};function x(C,y){return C.add(S(y))}n.j=function(C){if(w(this)||w(C))return f;if(P(this))return P(C)?S(this).j(S(C)):S(S(this).j(C));if(P(C))return S(this.j(S(C)));if(0>this.l(m)&&0>C.l(m))return u(this.m()*C.m());for(var y=this.g.length+C.g.length,E=[],R=0;R<2*y;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(var b=0;b<C.g.length;b++){var A=this.i(R)>>>16,v=this.i(R)&65535,De=C.i(b)>>>16,tt=C.i(b)&65535;E[2*R+2*b]+=v*tt,M(E,2*R+2*b),E[2*R+2*b+1]+=A*tt,M(E,2*R+2*b+1),E[2*R+2*b+1]+=v*De,M(E,2*R+2*b+1),E[2*R+2*b+2]+=A*De,M(E,2*R+2*b+2)}for(R=0;R<y;R++)E[R]=E[2*R+1]<<16|E[2*R];for(R=y;R<2*y;R++)E[R]=0;return new o(E,0)};function M(C,y){for(;(C[y]&65535)!=C[y];)C[y+1]+=C[y]>>>16,C[y]&=65535,y++}function D(C,y){this.g=C,this.h=y}function L(C,y){if(w(y))throw Error("division by zero");if(w(C))return new D(f,f);if(P(C))return y=L(S(C),y),new D(S(y.g),S(y.h));if(P(y))return y=L(C,S(y)),new D(S(y.g),y.h);if(30<C.g.length){if(P(C)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,R=y;0>=R.l(C);)E=te(E),R=te(R);var b=ne(E,1),A=ne(R,1);for(R=ne(R,2),E=ne(E,2);!w(R);){var v=A.add(R);0>=v.l(C)&&(b=b.add(E),A=v),R=ne(R,1),E=ne(E,1)}return y=x(C,b.j(y)),new D(b,y)}for(b=f;0<=C.l(y);){for(E=Math.max(1,Math.floor(C.m()/y.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),A=u(E),v=A.j(y);P(v)||0<v.l(C);)E-=R,A=u(E),v=A.j(y);w(A)&&(A=g),b=b.add(A),C=x(C,v)}return new D(b,C)}n.A=function(C){return L(this,C).h},n.and=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],R=0;R<y;R++)E[R]=this.i(R)&C.i(R);return new o(E,this.h&C.h)},n.or=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],R=0;R<y;R++)E[R]=this.i(R)|C.i(R);return new o(E,this.h|C.h)},n.xor=function(C){for(var y=Math.max(this.g.length,C.g.length),E=[],R=0;R<y;R++)E[R]=this.i(R)^C.i(R);return new o(E,this.h^C.h)};function te(C){for(var y=C.g.length+1,E=[],R=0;R<y;R++)E[R]=C.i(R)<<1|C.i(R-1)>>>31;return new o(E,C.h)}function ne(C,y){var E=y>>5;y%=32;for(var R=C.g.length-E,b=[],A=0;A<R;A++)b[A]=0<y?C.i(A+E)>>>y|C.i(A+E+1)<<32-y:C.i(A+E);return new o(b,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,fT=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,dr=o}).apply(typeof Tm<"u"?Tm:typeof self<"u"?self:typeof window<"u"?window:{});var Ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pT,ro,gT,tl,Ah,mT,_T,yT;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ba=="object"&&Ba];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function r(l,d){if(d)e:{var p=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var N=l[_];if(!(N in p))break e;p=p[N]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var p=0,_=!1,N={next:function(){if(!_&&p<l.length){var O=p++;return{value:d(O,l[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}r("Array.prototype.values",function(l){return l||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function g(l,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function m(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function w(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,N,O){for(var K=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)K[Me-2]=arguments[Me];return d.prototype[N].apply(_,K)}}function P(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function S(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(c(_)){const N=l.length||0,O=_.length||0;l.length=N+O;for(let K=0;K<O;K++)l[N+K]=_[K]}else l.push(_)}}class x{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function M(l){return/^[\s\xa0]*$/.test(l)}function D(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function L(l){return L[" "](l),l}L[" "]=function(){};var te=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function ne(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function C(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,d){let p,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(p in _)l[p]=_[p];for(let O=0;O<E.length;O++)p=E[O],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function b(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function A(l){a.setTimeout(()=>{throw l},0)}function v(){var l=qt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class De{constructor(){this.h=this.g=null}add(d,p){const _=tt.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var tt=new x(()=>new We,l=>l.reset());class We{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,_e=!1,qt=new De,dn=()=>{const l=a.Promise.resolve(void 0);Te=()=>{l.then(Jt)}};var Jt=()=>{for(var l;l=v();){try{l.h.call(l.g)}catch(p){A(p)}var d=tt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}_e=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var ps=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Cn(l,d){if(Ke.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(te){e:{try{L(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ft[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Cn.aa.h.call(this)}}w(Cn,Ke);var Ft={2:"touch",3:"pen",4:"mouse"};Cn.prototype.h=function(){Cn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(l,d,p,_,N){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=N,this.key=++J,this.da=this.fa=!1}function se(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ce(l){this.src=l,this.g={},this.h=0}Ce.prototype.add=function(l,d,p,_,N){var O=l.toString();l=this.g[O],l||(l=this.g[O]=[],this.h++);var K=I(l,d,_,N);return-1<K?(d=l[K],p||(d.fa=!1)):(d=new Q(d,this.src,O,!!_,N),d.fa=p,l.push(d)),d};function T(l,d){var p=d.type;if(p in l.g){var _=l.g[p],N=Array.prototype.indexOf.call(_,d,void 0),O;(O=0<=N)&&Array.prototype.splice.call(_,N,1),O&&(se(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function I(l,d,p,_){for(var N=0;N<l.length;++N){var O=l[N];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==_)return N}return-1}var k="closure_lm_"+(1e6*Math.random()|0),F={};function j(l,d,p,_,N){if(Array.isArray(d)){for(var O=0;O<d.length;O++)j(l,d[O],p,_,N);return null}return p=le(p),l&&l[V]?l.K(d,p,u(_)?!!_.capture:!1,N):U(l,d,p,!1,_,N)}function U(l,d,p,_,N,O){if(!d)throw Error("Invalid event type");var K=u(N)?!!N.capture:!!N,Me=Y(l);if(Me||(l[k]=Me=new Ce(l)),p=Me.add(d,p,_,K,O),p.proxy)return p;if(_=G(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)ps||(N=K),N===void 0&&(N=!1),l.addEventListener(d.toString(),_,N);else if(l.attachEvent)l.attachEvent(q(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function G(){function l(p){return d.call(l.src,l.listener,p)}const d=oe;return l}function H(l,d,p,_,N){if(Array.isArray(d))for(var O=0;O<d.length;O++)H(l,d[O],p,_,N);else _=u(_)?!!_.capture:!!_,p=le(p),l&&l[V]?(l=l.i,d=String(d).toString(),d in l.g&&(O=l.g[d],p=I(O,p,_,N),-1<p&&(se(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete l.g[d],l.h--)))):l&&(l=Y(l))&&(d=l.g[d.toString()],l=-1,d&&(l=I(d,p,_,N)),(p=-1<l?d[l]:null)&&W(p))}function W(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[V])T(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(q(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=Y(d))?(T(p,l),p.h==0&&(p.src=null,d[k]=null)):se(l)}}}function q(l){return l in F?F[l]:F[l]="on"+l}function oe(l,d){if(l.da)l=!0;else{d=new Cn(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&W(l),l=p.call(_,d)}return l}function Y(l){return l=l[k],l instanceof Ce?l:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(l){return typeof l=="function"?l:(l[re]||(l[re]=function(d){return l.handleEvent(d)}),l[re])}function ae(){He.call(this),this.i=new Ce(this),this.M=this,this.F=null}w(ae,He),ae.prototype[V]=!0,ae.prototype.removeEventListener=function(l,d,p,_){H(this,l,d,p,_)};function ge(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new Ke(d,l);else if(d instanceof Ke)d.target=d.target||l;else{var N=d;d=new Ke(_,l),R(d,N)}if(N=!0,p)for(var O=p.length-1;0<=O;O--){var K=d.g=p[O];N=we(K,_,!0,d)&&N}if(K=d.g=l,N=we(K,_,!0,d)&&N,N=we(K,_,!1,d)&&N,p)for(O=0;O<p.length;O++)K=d.g=p[O],N=we(K,_,!1,d)&&N}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)se(p[_]);delete l.g[d],l.h--}}this.F=null},ae.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},ae.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function we(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,O=0;O<d.length;++O){var K=d[O];if(K&&!K.da&&K.capture==p){var Me=K.listener,ht=K.ha||K.src;K.fa&&T(l.i,K),N=Me.call(ht,_)!==!1&&N}}return N&&!_.defaultPrevented}function yt(l,d,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function ct(l){l.g=yt(()=>{l.g=null,l.i&&(l.i=!1,ct(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Zt extends He{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ct(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Et(l){He.call(this),this.h=l,this.g={}}w(Et,He);var gs=[];function Oi(l){ne(l.g,function(d,p){this.g.hasOwnProperty(p)&&W(d)},l),l.g={}}Et.prototype.N=function(){Et.aa.N.call(this),Oi(this)},Et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=a.JSON.stringify,en=a.JSON.parse,pa=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function $c(){}$c.prototype.h=null;function xf(l){return l.h||(l.h=l.i())}function Mf(){}var Di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jc(){Ke.call(this,"d")}w(jc,Ke);function qc(){Ke.call(this,"c")}w(qc,Ke);var Xs={},Lf=null;function ga(){return Lf=Lf||new ae}Xs.La="serverreachability";function Vf(l){Ke.call(this,Xs.La,l)}w(Vf,Ke);function xi(l){const d=ga();ge(d,new Vf(d))}Xs.STAT_EVENT="statevent";function Ff(l,d){Ke.call(this,Xs.STAT_EVENT,l),this.stat=d}w(Ff,Ke);function Nt(l){const d=ga();ge(d,new Ff(d,l))}Xs.Ma="timingevent";function Uf(l,d){Ke.call(this,Xs.Ma,l),this.size=d}w(Uf,Ke);function Mi(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Li(){this.g=!0}Li.prototype.xa=function(){this.g=!1};function nI(l,d,p,_,N,O){l.info(function(){if(l.g)if(O)for(var K="",Me=O.split("&"),ht=0;ht<Me.length;ht++){var be=Me[ht].split("=");if(1<be.length){var vt=be[0];be=be[1];var Tt=vt.split("_");K=2<=Tt.length&&Tt[1]=="type"?K+(vt+"="+be+"&"):K+(vt+"=redacted&")}}else K=null;else K=O;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+d+`
`+p+`
`+K})}function sI(l,d,p,_,N,O,K){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+d+`
`+p+`
`+O+" "+K})}function Sr(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+iI(l,p)+(_?" "+_:"")})}function rI(l,d){l.info(function(){return"TIMEOUT: "+d})}Li.prototype.info=function(){};function iI(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var K=1;K<N.length;K++)N[K]=""}}}}return ut(p)}catch{return d}}var ma={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wc;function _a(){}w(_a,$c),_a.prototype.g=function(){return new XMLHttpRequest},_a.prototype.i=function(){return{}},Wc=new _a;function ms(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new Et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $f}function $f(){this.i=null,this.g="",this.h=!1}var jf={},Hc={};function Kc(l,d,p){l.L=1,l.v=Ta(Hn(d)),l.m=p,l.P=!0,qf(l,null)}function qf(l,d){l.F=Date.now(),ya(l),l.A=Hn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),sp(p.i,"t",_),l.C=0,p=l.j.J,l.h=new $f,l.g=Tp(l.j,p?d:null,!l.m),0<l.O&&(l.M=new Zt(g(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(gs[0]=N.toString()),N=gs);for(var O=0;O<N.length;O++){var K=j(p,N[O],_||d.handleEvent,!1,d.h||d);if(!K)break;d.g[K.key]=K}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),xi(),nI(l.i,l.u,l.A,l.l,l.R,l.m)}ms.prototype.ca=function(l){l=l.target;const d=this.M;d&&Kn(l)==3?d.j():this.Y(l)},ms.prototype.Y=function(l){try{if(l==this.g)e:{const Tt=Kn(this.g);var d=this.g.Ba();const Nr=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||up(this.g)))){this.J||Tt!=4||d==7||(d==8||0>=Nr?xi(3):xi(2)),Gc(this);var p=this.g.Z();this.X=p;t:if(Wf(this)){var _=up(this.g);l="";var N=_.length,O=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Js(this),Vi(this);var K="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(O&&d==N-1)});_.length=0,this.h.g+=l,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,sI(this.i,this.u,this.A,this.l,this.R,Tt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,ht=this.g;if((Me=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Me)){var be=Me;break t}}be=null}if(p=be)Sr(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zc(this,p);else{this.o=!1,this.s=3,Nt(12),Js(this),Vi(this);break e}}if(this.P){p=!0;let fn;for(;!this.J&&this.C<K.length;)if(fn=oI(this,K),fn==Hc){Tt==4&&(this.s=4,Nt(14),p=!1),Sr(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==jf){this.s=4,Nt(15),Sr(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else Sr(this.i,this.l,fn,null),zc(this,fn);if(Wf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||K.length!=0||this.h.h||(this.s=1,Nt(16),p=!1),this.o=this.o&&p,!p)Sr(this.i,this.l,K,"[Invalid Chunked Response]"),Js(this),Vi(this);else if(0<K.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),eu(vt),vt.M=!0,Nt(11))}}else Sr(this.i,this.l,K,null),zc(this,K);Tt==4&&Js(this),this.o&&!this.J&&(Tt==4?_p(this.j,this):(this.o=!1,ya(this)))}else II(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),Js(this),Vi(this)}}}catch{}finally{}};function Wf(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function oI(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?Hc:(p=Number(d.substring(p,_)),isNaN(p)?jf:(_+=1,_+p>d.length?Hc:(d=d.slice(_,_+p),l.C=_+p,d)))}ms.prototype.cancel=function(){this.J=!0,Js(this)};function ya(l){l.S=Date.now()+l.I,Hf(l,l.I)}function Hf(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Mi(g(l.ba,l),d)}function Gc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}ms.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(rI(this.i,this.A),this.L!=2&&(xi(),Nt(17)),Js(this),this.s=2,Vi(this)):Hf(this,this.S-l)};function Vi(l){l.j.G==0||l.J||_p(l.j,l)}function Js(l){Gc(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Oi(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function zc(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Qc(p.h,l))){if(!l.K&&Qc(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)ba(p),Ra(p);else break e;Zc(p),Nt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=Mi(g(p.Za,p),6e3));if(1>=zf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else er(p,11)}else if((l.K||p.g==l)&&ba(p),!M(d))for(N=p.Da.g.parse(d),d=0;d<N.length;d++){let be=N[d];if(p.T=be[0],be=be[1],p.G==2)if(be[0]=="c"){p.K=be[1],p.ia=be[2];const vt=be[3];vt!=null&&(p.la=vt,p.j.info("VER="+p.la));const Tt=be[4];Tt!=null&&(p.Aa=Tt,p.j.info("SVER="+p.Aa));const Nr=be[5];Nr!=null&&typeof Nr=="number"&&0<Nr&&(_=1.5*Nr,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const fn=l.g;if(fn){const Pa=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pa){var O=_.h;O.g||Pa.indexOf("spdy")==-1&&Pa.indexOf("quic")==-1&&Pa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Yc(O,O.h),O.h=null))}if(_.D){const tu=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;tu&&(_.ya=tu,Fe(_.I,_.D,tu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var K=l;if(_.qa=vp(_,_.J?_.ia:null,_.W),K.K){Qf(_.h,K);var Me=K,ht=_.L;ht&&(Me.I=ht),Me.B&&(Gc(Me),ya(Me)),_.g=K}else gp(_);0<p.i.length&&Ca(p)}else be[0]!="stop"&&be[0]!="close"||er(p,7);else p.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?er(p,7):Jc(p):be[0]!="noop"&&p.l&&p.l.ta(be),p.v=0)}}xi(4)}catch{}}var aI=class{constructor(l,d){this.g=l,this.map=d}};function Kf(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gf(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function zf(l){return l.h?1:l.g?l.g.size:0}function Qc(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Yc(l,d){l.g?l.g.add(d):l.h=d}function Qf(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Kf.prototype.cancel=function(){if(this.i=Yf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Yf(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return P(l.i)}function lI(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function cI(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function Xf(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=cI(l),_=lI(l),N=_.length,O=0;O<N;O++)d.call(void 0,_[O],p&&p[O],l)}var Jf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uI(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),N=null;if(0<=_){var O=l[p].substring(0,_);N=l[p].substring(_+1)}else O=l[p];d(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Zs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Zs){this.h=l.h,Ea(this,l.j),this.o=l.o,this.g=l.g,va(this,l.s),this.l=l.l;var d=l.i,p=new Bi;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Zf(this,p),this.m=l.m}else l&&(d=String(l).match(Jf))?(this.h=!1,Ea(this,d[1]||"",!0),this.o=Fi(d[2]||""),this.g=Fi(d[3]||"",!0),va(this,d[4]),this.l=Fi(d[5]||"",!0),Zf(this,d[6]||"",!0),this.m=Fi(d[7]||"")):(this.h=!1,this.i=new Bi(null,this.h))}Zs.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Ui(d,ep,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Ui(d,ep,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Ui(p,p.charAt(0)=="/"?fI:dI,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Ui(p,gI)),l.join("")};function Hn(l){return new Zs(l)}function Ea(l,d,p){l.j=p?Fi(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function va(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Zf(l,d,p){d instanceof Bi?(l.i=d,mI(l.i,l.h)):(p||(d=Ui(d,pI)),l.i=new Bi(d,l.h))}function Fe(l,d,p){l.i.set(d,p)}function Ta(l){return Fe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Fi(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ui(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,hI),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function hI(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ep=/[#\/\?@]/g,dI=/[#\?:]/g,fI=/[#\?]/g,pI=/[#\?@]/g,gI=/#/g;function Bi(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function _s(l){l.g||(l.g=new Map,l.h=0,l.i&&uI(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}n=Bi.prototype,n.add=function(l,d){_s(this),this.i=null,l=Pr(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function tp(l,d){_s(l),d=Pr(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function np(l,d){return _s(l),d=Pr(l,d),l.g.has(d)}n.forEach=function(l,d){_s(this),this.g.forEach(function(p,_){p.forEach(function(N){l.call(d,N,_,this)},this)},this)},n.na=function(){_s(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const N=l[_];for(let O=0;O<N.length;O++)p.push(d[_])}return p},n.V=function(l){_s(this);let d=[];if(typeof l=="string")np(this,l)&&(d=d.concat(this.g.get(Pr(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},n.set=function(l,d){return _s(this),this.i=null,l=Pr(this,l),np(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},n.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function sp(l,d,p){tp(l,d),0<p.length&&(l.i=null,l.g.set(Pr(l,d),P(p)),l.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const O=encodeURIComponent(String(_)),K=this.V(_);for(_=0;_<K.length;_++){var N=O;K[_]!==""&&(N+="="+encodeURIComponent(String(K[_]))),l.push(N)}}return this.i=l.join("&")};function Pr(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function mI(l,d){d&&!l.j&&(_s(l),l.i=null,l.g.forEach(function(p,_){var N=_.toLowerCase();_!=N&&(tp(this,_),sp(this,N,p))},l)),l.j=d}function _I(l,d){const p=new Li;if(a.Image){const _=new Image;_.onload=m(ys,p,"TestLoadImage: loaded",!0,d,_),_.onerror=m(ys,p,"TestLoadImage: error",!1,d,_),_.onabort=m(ys,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=m(ys,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function yI(l,d){const p=new Li,_=new AbortController,N=setTimeout(()=>{_.abort(),ys(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(O=>{clearTimeout(N),O.ok?ys(p,"TestPingServer: ok",!0,d):ys(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),ys(p,"TestPingServer: error",!1,d)})}function ys(l,d,p,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(p)}catch{}}function EI(){this.g=new pa}function vI(l,d,p){const _=p||"";try{Xf(l,function(N,O){let K=N;u(N)&&(K=ut(N)),d.push(_+O+"="+encodeURIComponent(K))})}catch(N){throw d.push(_+"type="+encodeURIComponent("_badmap")),N}}function wa(l){this.l=l.Ub||null,this.j=l.eb||!1}w(wa,$c),wa.prototype.g=function(){return new Ia(this.l,this.j)},wa.prototype.i=function(l){return function(){return l}}({});function Ia(l,d){ae.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Ia,ae),n=Ia.prototype,n.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,ji(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$i(this)),this.readyState=0},n.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function rp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}n.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?$i(this):ji(this),this.readyState==3&&rp(this)}},n.Ra=function(l){this.g&&(this.response=this.responseText=l,$i(this))},n.Qa=function(l){this.g&&(this.response=l,$i(this))},n.ga=function(){this.g&&$i(this)};function $i(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ji(l)}n.setRequestHeader=function(l,d){this.u.append(l,d)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function ji(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ia.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ip(l){let d="";return ne(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function Xc(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=ip(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Fe(l,d,p))}function Qe(l){ae.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Qe,ae);var TI=/^https?$/i,wI=["POST","PUT"];n=Qe.prototype,n.Ha=function(l){this.J=l},n.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wc.g(),this.v=this.o?xf(this.o):xf(Wc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(O){op(this,O);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)p.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(wI,d,void 0))||_||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,K]of p)this.g.setRequestHeader(O,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cp(this),this.u=!0,this.g.send(l),this.u=!1}catch(O){op(this,O)}};function op(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,ap(l),Aa(l)}function ap(l){l.A||(l.A=!0,ge(l,"complete"),ge(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ge(this,"complete"),ge(this,"abort"),Aa(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Aa(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?lp(this):this.bb())},n.bb=function(){lp(this)};function lp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Kn(l)!=4||l.Z()!=2)){if(l.u&&Kn(l)==4)yt(l.Ea,0,l);else if(ge(l,"readystatechange"),Kn(l)==4){l.h=!1;try{const K=l.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=K===0){var N=String(l.D).match(Jf)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),_=!TI.test(N?N.toLowerCase():"")}p=_}if(p)ge(l,"complete"),ge(l,"success");else{l.m=6;try{var O=2<Kn(l)?l.g.statusText:""}catch{O=""}l.l=O+" ["+l.Z()+"]",ap(l)}}finally{Aa(l)}}}}function Aa(l,d){if(l.g){cp(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ge(l,"ready");try{p.onreadystatechange=_}catch{}}}function cp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}n.isActive=function(){return!!this.g};function Kn(l){return l.g?l.g.readyState:0}n.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),en(d)}};function up(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function II(l){const d={};l=(l.g&&2<=Kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(M(l[_]))continue;var p=b(l[_]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[N]||[];d[N]=O,O.push(p)}C(d,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qi(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function hp(l){this.Aa=0,this.i=[],this.j=new Li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qi("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qi("baseRetryDelayMs",5e3,l),this.cb=qi("retryDelaySeedMs",1e4,l),this.Wa=qi("forwardChannelMaxRetries",2,l),this.wa=qi("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Kf(l&&l.concurrentRequestLimit),this.Da=new EI,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hp.prototype,n.la=8,n.G=1,n.connect=function(l,d,p,_){Nt(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=vp(this,null,this.W),Ca(this)};function Jc(l){if(dp(l),l.G==3){var d=l.U++,p=Hn(l.I);if(Fe(p,"SID",l.K),Fe(p,"RID",d),Fe(p,"TYPE","terminate"),Wi(l,p),d=new ms(l,l.j,d),d.L=2,d.v=Ta(Hn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Tp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ya(d)}Ep(l)}function Ra(l){l.g&&(eu(l),l.g.cancel(),l.g=null)}function dp(l){Ra(l),l.u&&(a.clearTimeout(l.u),l.u=null),ba(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ca(l){if(!Gf(l.h)&&!l.s){l.s=!0;var d=l.Ga;Te||dn(),_e||(Te(),_e=!0),qt.add(d,l),l.B=0}}function AI(l,d){return zf(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Mi(g(l.Ga,l,d),yp(l,l.B)),l.B++,!0)}n.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new ms(this,this.j,l);let O=this.o;if(this.S&&(O?(O=y(O),R(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=pp(this,N,d),p=Hn(this.I),Fe(p,"RID",l),Fe(p,"CVER",22),this.D&&Fe(p,"X-HTTP-Session-Id",this.D),Wi(this,p),O&&(this.O?d="headers="+encodeURIComponent(String(ip(O)))+"&"+d:this.m&&Xc(p,this.m,O)),Yc(this.h,N),this.Ua&&Fe(p,"TYPE","init"),this.P?(Fe(p,"$req",d),Fe(p,"SID","null"),N.T=!0,Kc(N,p,null)):Kc(N,p,d),this.G=2}}else this.G==3&&(l?fp(this,l):this.i.length==0||Gf(this.h)||fp(this))};function fp(l,d){var p;d?p=d.l:p=l.U++;const _=Hn(l.I);Fe(_,"SID",l.K),Fe(_,"RID",p),Fe(_,"AID",l.T),Wi(l,_),l.m&&l.o&&Xc(_,l.m,l.o),p=new ms(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=pp(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Yc(l.h,p),Kc(p,_,d)}function Wi(l,d){l.H&&ne(l.H,function(p,_){Fe(d,_,p)}),l.l&&Xf({},function(p,_){Fe(d,_,p)})}function pp(l,d,p){p=Math.min(l.i.length,p);var _=l.l?g(l.l.Na,l.l,l):null;e:{var N=l.i;let O=-1;for(;;){const K=["count="+p];O==-1?0<p?(O=N[0].g,K.push("ofs="+O)):O=0:K.push("ofs="+O);let Me=!0;for(let ht=0;ht<p;ht++){let be=N[ht].g;const vt=N[ht].map;if(be-=O,0>be)O=Math.max(0,N[ht].g-100),Me=!1;else try{vI(vt,K,"req"+be+"_")}catch{_&&_(vt)}}if(Me){_=K.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function gp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;Te||dn(),_e||(Te(),_e=!0),qt.add(d,l),l.v=0}}function Zc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Mi(g(l.Fa,l),yp(l,l.v)),l.v++,!0)}n.Fa=function(){if(this.u=null,mp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Mi(g(this.ab,this),l)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),Ra(this),mp(this))};function eu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function mp(l){l.g=new ms(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Hn(l.qa);Fe(d,"RID","rpc"),Fe(d,"SID",l.K),Fe(d,"AID",l.T),Fe(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Fe(d,"TO",l.ja),Fe(d,"TYPE","xmlhttp"),Wi(l,d),l.m&&l.o&&Xc(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Ta(Hn(d)),p.m=null,p.P=!0,qf(p,l)}n.Za=function(){this.C!=null&&(this.C=null,Ra(this),Zc(this),Nt(19))};function ba(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function _p(l,d){var p=null;if(l.g==d){ba(l),eu(l),l.g=null;var _=2}else if(Qc(l.h,d))p=d.D,Qf(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;_=ga(),ge(_,new Uf(_,p)),Ca(l)}else gp(l);else if(N=d.s,N==3||N==0&&0<d.X||!(_==1&&AI(l,d)||_==2&&Zc(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),N){case 1:er(l,5);break;case 4:er(l,10);break;case 3:er(l,6);break;default:er(l,2)}}}function yp(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function er(l,d){if(l.j.info("Error code "+d),d==2){var p=g(l.fb,l),_=l.Xa;const N=!_;_=new Zs(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ea(_,"https"),Ta(_),N?_I(_.toString(),p):yI(_.toString(),p)}else Nt(2);l.G=0,l.l&&l.l.sa(d),Ep(l),dp(l)}n.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function Ep(l){if(l.G=0,l.ka=[],l.l){const d=Yf(l.h);(d.length!=0||l.i.length!=0)&&(S(l.ka,d),S(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function vp(l,d,p){var _=p instanceof Zs?Hn(p):new Zs(p);if(_.g!="")d&&(_.g=d+"."+_.g),va(_,_.s);else{var N=a.location;_=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var O=new Zs(null);_&&Ea(O,_),d&&(O.g=d),N&&va(O,N),p&&(O.l=p),_=O}return p=l.D,d=l.ya,p&&d&&Fe(_,p,d),Fe(_,"VER",l.la),Wi(l,_),_}function Tp(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Qe(new wa({eb:p})):new Qe(l.pa),d.Ha(l.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wp(){}n=wp.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Sa(){}Sa.prototype.g=function(l,d){return new Wt(l,d)};function Wt(l,d){ae.call(this),this.g=new hp(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!M(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!M(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new kr(this)}w(Wt,ae),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Jc(this.g)},Wt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=ut(l),l=p);d.i.push(new aI(d.Ya++,l)),d.G==3&&Ca(d)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Jc(this.g),delete this.g,Wt.aa.N.call(this)};function Ip(l){jc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}w(Ip,jc);function Ap(){qc.call(this),this.status=1}w(Ap,qc);function kr(l){this.g=l}w(kr,wp),kr.prototype.ua=function(){ge(this.g,"a")},kr.prototype.ta=function(l){ge(this.g,new Ip(l))},kr.prototype.sa=function(l){ge(this.g,new Ap)},kr.prototype.ra=function(){ge(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,yT=function(){return new Sa},_T=function(){return ga()},mT=Xs,Ah={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ma.NO_ERROR=0,ma.TIMEOUT=8,ma.HTTP_ERROR=6,tl=ma,Bf.COMPLETE="complete",gT=Bf,Mf.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",ae.prototype.listen=ae.prototype.K,ro=Mf,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,pT=Qe}).apply(typeof Ba<"u"?Ba:typeof self<"u"?self:typeof window<"u"?window:{});const wm="@firebase/firestore";/**
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
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let bi="11.0.2";/**
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
 */const Tr=new Jo("@firebase/firestore");function Vr(){return Tr.logLevel}function Z(n,...e){if(Tr.logLevel<=me.DEBUG){const t=e.map(Kd);Tr.debug(`Firestore (${bi}): ${n}`,...t)}}function us(n,...e){if(Tr.logLevel<=me.ERROR){const t=e.map(Kd);Tr.error(`Firestore (${bi}): ${n}`,...t)}}function hi(n,...e){if(Tr.logLevel<=me.WARN){const t=e.map(Kd);Tr.warn(`Firestore (${bi}): ${n}`,...t)}}function Kd(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ue(n="Unexpected state"){const e=`FIRESTORE (${bi}) INTERNAL ASSERTION FAILED: `+n;throw us(e),new Error(e)}function Oe(n,e){n||ue()}function pe(n,e){return n}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends qn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class as{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ET{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(It.UNAUTHENTICATED))}shutdown(){}}class _O{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yO{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Oe(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new as;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new as,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new as)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Oe(typeof s.accessToken=="string"),new ET(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new It(e)}}class EO{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=It.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class vO{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new EO(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Oe(this.o===void 0);const s=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Oe(typeof t.token=="string"),this.R=t.token,new TO(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function IO(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class vT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=IO(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function Ee(n,e){return n<e?-1:n>e?1:0}function di(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
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
 */class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new et(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new et(0,0))}static max(){return new de(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class $o{constructor(e,t,s){t===void 0?t=0:t>e.length&&ue(),s===void 0?s=e.length-t:s>e.length-t&&ue(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return $o.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $o?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class $e extends $o{construct(e,t,s){return new $e(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ee(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new $e(t)}static emptyPath(){return new $e([])}}const AO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends $o{construct(e,t,s){return new gt(e,t,s)}static isValidIdentifier(e){return AO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new ee(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new ee(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(t)}static emptyPath(){return new gt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie($e.fromString(e))}static fromName(e){return new ie($e.fromString(e).popFirst(5))}static empty(){return new ie($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return $e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new $e(e.slice()))}}function RO(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=de.fromTimestamp(s===1e9?new et(t+1,0):new et(t,s));return new Ms(r,ie.empty(),e)}function CO(n){return new Ms(n.readTime,n.key,-1)}class Ms{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ms(de.min(),ie.empty(),-1)}static max(){return new Ms(de.max(),ie.empty(),-1)}}function bO(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ie.comparator(n.documentKey,e.documentKey),t!==0?t:Ee(n.largestBatchId,e.largestBatchId))}/**
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
 */const SO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Si(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==SO)throw n;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):$.reject(t)}static resolve(e){return new $((t,s)=>{t(e)})}static reject(e){return new $((t,s)=>{s(e)})}static waitFor(e){return new $((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next(r=>r?$.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new $((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,t){return new $((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function kO(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Pi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class yc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}yc.oe=-1;function Ec(n){return n==null}function Ml(n){return n===0&&1/n==-1/0}function NO(n){return typeof n=="number"&&Number.isInteger(n)&&!Ml(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function OO(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Im(e)),e=DO(n.get(t),e);return Im(e)}function DO(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Im(n){return n+""}/**
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
 */function Am(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function TT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ze{constructor(e,t){this.comparator=e,this.root=t||dt.EMPTY}insert(e,t){return new ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $a(this.root,e,this.comparator,!1)}getReverseIterator(){return new $a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $a(this.root,e,this.comparator,!0)}}class $a{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??dt.RED,this.left=r??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new dt(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return dt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,t,s,r,i){return this}insert(e,t,s){return new dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Rm(this.data.getIterator())}getIteratorFrom(e){return new Rm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new st(this.comparator);return t.data=e,t}}class Rm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class zt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new zt([])}unionWith(e){let t=new st(gt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new zt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class wT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wT("Invalid base64 string: "+i):i}}(e);return new _t(t)}static fromUint8Array(e){const t=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new _t(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const xO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ls(n){if(Oe(!!n),typeof n=="string"){let e=0;const t=xO.exec(n);if(Oe(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ye(n.seconds),nanos:Ye(n.nanos)}}function Ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vs(n){return typeof n=="string"?_t.fromBase64String(n):_t.fromUint8Array(n)}/**
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
 */function Gd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function vc(n){const e=n.mapValue.fields.__previous_value__;return Gd(e)?vc(e):e}function jo(n){const e=Ls(n.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class MO{constructor(e,t,s,r,i,o,a,c,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class qo{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ja={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Fs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gd(n)?4:VO(n)?9007199254740991:LO(n)?10:11:ue()}function $n(n,e){if(n===e)return!0;const t=Fs(n);if(t!==Fs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return jo(n).isEqual(jo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Ls(r.timestampValue),a=Ls(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Vs(r.bytesValue).isEqual(Vs(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return Ye(r.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(r.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ye(r.integerValue)===Ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ye(r.doubleValue),a=Ye(i.doubleValue);return o===a?Ml(o)===Ml(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return di(n.arrayValue.values||[],e.arrayValue.values||[],$n);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Am(o)!==Am(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!$n(o[c],a[c])))return!1;return!0}(n,e);default:return ue()}}function Wo(n,e){return(n.values||[]).find(t=>$n(t,e))!==void 0}function fi(n,e){if(n===e)return 0;const t=Fs(n),s=Fs(e);if(t!==s)return Ee(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ee(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ye(i.integerValue||i.doubleValue),c=Ye(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,e);case 3:return Cm(n.timestampValue,e.timestampValue);case 4:return Cm(jo(n),jo(e));case 5:return Ee(n.stringValue,e.stringValue);case 6:return function(i,o){const a=Vs(i),c=Vs(o);return a.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Ee(a[u],c[u]);if(h!==0)return h}return Ee(a.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Ee(Ye(i.latitude),Ye(o.latitude));return a!==0?a:Ee(Ye(i.longitude),Ye(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return bm(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const f=i.fields||{},g=o.fields||{},m=(a=f.value)===null||a===void 0?void 0:a.arrayValue,w=(c=g.value)===null||c===void 0?void 0:c.arrayValue,P=Ee(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:bm(m,w)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===ja.mapValue&&o===ja.mapValue)return 0;if(i===ja.mapValue)return 1;if(o===ja.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const g=Ee(c[f],h[f]);if(g!==0)return g;const m=fi(a[c[f]],u[h[f]]);if(m!==0)return m}return Ee(c.length,h.length)}(n.mapValue,e.mapValue);default:throw ue()}}function Cm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ee(n,e);const t=Ls(n),s=Ls(e),r=Ee(t.seconds,s.seconds);return r!==0?r:Ee(t.nanos,s.nanos)}function bm(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=fi(t[r],s[r]);if(i)return i}return Ee(t.length,s.length)}function pi(n){return Rh(n)}function Rh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Ls(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ie.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Rh(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Rh(t.fields[o])}`;return r+"}"}(n.mapValue):ue()}function nl(n){switch(Fs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vc(n);return e?16+nl(e):16;case 5:return 2*n.stringValue.length;case 6:return Vs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+nl(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return zs(s.fields,(i,o)=>{r+=i.length+nl(o)}),r}(n.mapValue);default:throw ue()}}function Sm(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ch(n){return!!n&&"integerValue"in n}function zd(n){return!!n&&"arrayValue"in n}function Pm(n){return!!n&&"nullValue"in n}function km(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function sl(n){return!!n&&"mapValue"in n}function LO(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function To(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zs(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=To(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=To(n.arrayValue.values[t]);return e}return Object.assign({},n)}function VO(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!sl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=To(t)}setAll(e){let t=gt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=To(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());sl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $n(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];sl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){zs(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new $t(To(this.value))}}function IT(n){const e=[];return zs(n.fields,(t,s)=>{const r=new gt([t]);if(sl(s)){const i=IT(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new zt(e)}/**
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
 */class St{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new St(e,0,de.min(),de.min(),de.min(),$t.empty(),0)}static newFoundDocument(e,t,s,r){return new St(e,1,t,de.min(),s,r,0)}static newNoDocument(e,t){return new St(e,2,t,de.min(),de.min(),$t.empty(),0)}static newUnknownDocument(e,t){return new St(e,3,t,de.min(),de.min(),$t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ll{constructor(e,t){this.position=e,this.inclusive=t}}function Nm(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=ie.comparator(ie.fromName(o.referenceValue),t.key):s=fi(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Om(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$n(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ho{constructor(e,t="asc"){this.field=e,this.dir=t}}function FO(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class AT{}class Ze extends AT{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new BO(e,t,s):t==="array-contains"?new qO(e,s):t==="in"?new WO(e,s):t==="not-in"?new HO(e,s):t==="array-contains-any"?new KO(e,s):new Ze(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new $O(e,s):new jO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fi(t,this.value)):t!==null&&Fs(this.value)===Fs(t)&&this.matchesComparison(fi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends AT{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new An(e,t)}matches(e){return RT(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function RT(n){return n.op==="and"}function CT(n){return UO(n)&&RT(n)}function UO(n){for(const e of n.filters)if(e instanceof An)return!1;return!0}function bh(n){if(n instanceof Ze)return n.field.canonicalString()+n.op.toString()+pi(n.value);if(CT(n))return n.filters.map(e=>bh(e)).join(",");{const e=n.filters.map(t=>bh(t)).join(",");return`${n.op}(${e})`}}function bT(n,e){return n instanceof Ze?function(s,r){return r instanceof Ze&&s.op===r.op&&s.field.isEqual(r.field)&&$n(s.value,r.value)}(n,e):n instanceof An?function(s,r){return r instanceof An&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&bT(o,r.filters[a]),!0):!1}(n,e):void ue()}function ST(n){return n instanceof Ze?function(t){return`${t.field.canonicalString()} ${t.op} ${pi(t.value)}`}(n):n instanceof An?function(t){return t.op.toString()+" {"+t.getFilters().map(ST).join(" ,")+"}"}(n):"Filter"}class BO extends Ze{constructor(e,t,s){super(e,t,s),this.key=ie.fromName(s.referenceValue)}matches(e){const t=ie.comparator(e.key,this.key);return this.matchesComparison(t)}}class $O extends Ze{constructor(e,t){super(e,"in",t),this.keys=PT("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jO extends Ze{constructor(e,t){super(e,"not-in",t),this.keys=PT("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function PT(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ie.fromName(s.referenceValue))}class qO extends Ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zd(t)&&Wo(t.arrayValue,this.value)}}class WO extends Ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wo(this.value.arrayValue,t)}}class HO extends Ze{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Wo(this.value.arrayValue,t)}}class KO extends Ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Wo(this.value.arrayValue,s))}}/**
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
 */class GO{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Dm(n,e=null,t=[],s=[],r=null,i=null,o=null){return new GO(n,e,t,s,r,i,o)}function Qd(n){const e=pe(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>bh(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ec(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>pi(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>pi(s)).join(",")),e.ue=t}return e.ue}function Yd(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!FO(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!bT(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Om(n.startAt,e.startAt)&&Om(n.endAt,e.endAt)}function Sh(n){return ie.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ki{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zO(n,e,t,s,r,i,o,a){return new ki(n,e,t,s,r,i,o,a)}function Tc(n){return new ki(n)}function xm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kT(n){return n.collectionGroup!==null}function wo(n){const e=pe(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new st(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ho(i,s))}),t.has(gt.keyField().canonicalString())||e.ce.push(new Ho(gt.keyField(),s))}return e.ce}function Fn(n){const e=pe(n);return e.le||(e.le=QO(e,wo(n))),e.le}function QO(n,e){if(n.limitType==="F")return Dm(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Ho(r.field,i)});const t=n.endAt?new Ll(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ll(n.startAt.position,n.startAt.inclusive):null;return Dm(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Ph(n,e){const t=n.filters.concat([e]);return new ki(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function kh(n,e,t){return new ki(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function wc(n,e){return Yd(Fn(n),Fn(e))&&n.limitType===e.limitType}function NT(n){return`${Qd(Fn(n))}|lt:${n.limitType}`}function Fr(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>ST(r)).join(", ")}]`),Ec(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>pi(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>pi(r)).join(",")),`Target(${s})`}(Fn(n))}; limitType=${n.limitType})`}function Ic(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ie.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of wo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const u=Nm(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,wo(s),r)||s.endAt&&!function(o,a,c){const u=Nm(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,wo(s),r))}(n,e)}function YO(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function OT(n){return(e,t)=>{let s=!1;for(const r of wo(n)){const i=XO(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function XO(n,e,t){const s=n.field.isKeyField()?ie.comparator(e.key,t.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?fi(c,u):ue()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return ue()}}/**
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
 */class Cr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){zs(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return TT(this.inner)}size(){return this.innerSize}}/**
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
 */const JO=new ze(ie.comparator);function hs(){return JO}const DT=new ze(ie.comparator);function io(...n){let e=DT;for(const t of n)e=e.insert(t.key,t);return e}function xT(n){let e=DT;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ur(){return Io()}function MT(){return Io()}function Io(){return new Cr(n=>n.toString(),(n,e)=>n.isEqual(e))}const ZO=new ze(ie.comparator),eD=new st(ie.comparator);function ye(...n){let e=eD;for(const t of n)e=e.add(t);return e}const tD=new st(Ee);function nD(){return tD}/**
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
 */function Xd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ml(e)?"-0":e}}function LT(n){return{integerValue:""+n}}function sD(n,e){return NO(e)?LT(e):Xd(n,e)}/**
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
 */class Ac{constructor(){this._=void 0}}function rD(n,e,t){return n instanceof Vl?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Gd(i)&&(i=vc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Ko?FT(n,e):n instanceof Go?UT(n,e):function(r,i){const o=VT(r,i),a=Mm(o)+Mm(r.Pe);return Ch(o)&&Ch(r.Pe)?LT(a):Xd(r.serializer,a)}(n,e)}function iD(n,e,t){return n instanceof Ko?FT(n,e):n instanceof Go?UT(n,e):t}function VT(n,e){return n instanceof Fl?function(s){return Ch(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Vl extends Ac{}class Ko extends Ac{constructor(e){super(),this.elements=e}}function FT(n,e){const t=BT(e);for(const s of n.elements)t.some(r=>$n(r,s))||t.push(s);return{arrayValue:{values:t}}}class Go extends Ac{constructor(e){super(),this.elements=e}}function UT(n,e){let t=BT(e);for(const s of n.elements)t=t.filter(r=>!$n(r,s));return{arrayValue:{values:t}}}class Fl extends Ac{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Mm(n){return Ye(n.integerValue||n.doubleValue)}function BT(n){return zd(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function oD(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof Ko&&r instanceof Ko||s instanceof Go&&r instanceof Go?di(s.elements,r.elements,$n):s instanceof Fl&&r instanceof Fl?$n(s.Pe,r.Pe):s instanceof Vl&&r instanceof Vl}(n.transform,e.transform)}class aD{constructor(e,t){this.version=e,this.transformResults=t}}class vn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rl(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Rc{}function $T(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Jd(n.key,vn.none()):new ca(n.key,n.data,vn.none());{const t=n.data,s=$t.empty();let r=new st(gt.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Qs(n.key,s,new zt(r.toArray()),vn.none())}}function lD(n,e,t){n instanceof ca?function(r,i,o){const a=r.value.clone(),c=Vm(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof Qs?function(r,i,o){if(!rl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Vm(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(jT(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ao(n,e,t,s){return n instanceof ca?function(i,o,a,c){if(!rl(i.precondition,o))return a;const u=i.value.clone(),h=Fm(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Qs?function(i,o,a,c){if(!rl(i.precondition,o))return a;const u=Fm(i.fieldTransforms,c,o),h=o.data;return h.setAll(jT(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(n,e,t,s):function(i,o,a){return rl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function cD(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=VT(s.transform,r||null);i!=null&&(t===null&&(t=$t.empty()),t.set(s.field,i))}return t||null}function Lm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&di(s,r,(i,o)=>oD(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ca extends Rc{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Qs extends Rc{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jT(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Vm(n,e,t){const s=new Map;Oe(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,iD(o,a,t[r]))}return s}function Fm(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,rD(i,o,e))}return s}class Jd extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uD extends Rc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hD{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&lD(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ao(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ao(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=MT();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=$T(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ye())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(t,s)=>Lm(t,s))&&di(this.baseMutations,e.baseMutations,(t,s)=>Lm(t,s))}}class Zd{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){Oe(e.mutations.length===s.length);let r=function(){return ZO}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Zd(e,t,s,r)}}/**
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
 */class dD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class fD{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Je,Ie;function pD(n){switch(n){default:return ue();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function qT(n){if(n===void 0)return us("GRPC error has no .code"),B.UNKNOWN;switch(n){case Je.OK:return B.OK;case Je.CANCELLED:return B.CANCELLED;case Je.UNKNOWN:return B.UNKNOWN;case Je.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Je.INTERNAL:return B.INTERNAL;case Je.UNAVAILABLE:return B.UNAVAILABLE;case Je.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Je.NOT_FOUND:return B.NOT_FOUND;case Je.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Je.ABORTED:return B.ABORTED;case Je.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Je.DATA_LOSS:return B.DATA_LOSS;default:return ue()}}(Ie=Je||(Je={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gD(){return new TextEncoder}/**
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
 */const mD=new dr([4294967295,4294967295],0);function Um(n){const e=gD().encode(n),t=new fT;return t.update(e),new Uint8Array(t.digest())}function Bm(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([t,s],0),new dr([r,i],0)]}class ef{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new oo(`Invalid padding: ${t}`);if(s<0)throw new oo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new oo(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new oo(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=dr.fromNumber(this.Te)}Ee(e,t,s){let r=e.add(t.multiply(dr.fromNumber(s)));return r.compare(mD)===1&&(r=new dr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Um(e),[s,r]=Bm(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ef(i,r,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const t=Um(e),[s,r]=Bm(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class oo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Cc{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,ua.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Cc(de.min(),r,new ze(Ee),hs(),ye())}}class ua{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ua(s,t,ye(),ye(),ye())}}/**
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
 */class il{constructor(e,t,s,r){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=r}}class WT{constructor(e,t){this.targetId=e,this.me=t}}class HT{constructor(e,t,s=_t.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class $m{constructor(){this.fe=0,this.ge=jm(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),t=ye(),s=ye();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:ue()}}),new ua(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=jm()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class _D{constructor(e){this.Le=e,this.Be=new Map,this.ke=hs(),this.qe=qa(),this.Qe=qa(),this.Ke=new ze(Ee)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,r)=>{this.je(r)&&t(r)})}Je(e){const t=e.targetId,s=e.me.count,r=this.Ye(t);if(r){const i=r.target;if(Sh(i))if(s===0){const o=new ie(i.path);this.We(t,o,St.newNoDocument(o,de.min()))}else Oe(s===1);else{const o=this.Ze(t);if(o!==s){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,u)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=Vs(s).toUint8Array()}catch(c){if(c instanceof wT)return hi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ef(o,r,i)}catch(c){return hi(c instanceof oo?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(t,i,null),r++)}),r}it(e){const t=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Sh(a.target)){const c=new ie(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,St.newNoDocument(c,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let s=ye();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new Cc(e,t,this.Ke,this.ke,s);return this.ke=hs(),this.qe=qa(),this.Qe=qa(),this.Ke=new ze(Ee),r}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const r=this.ze(e);this.ot(e,t)?r.Fe(t,1):r.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new $m,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new st(Ee),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new st(Ee),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||Z("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new $m),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function qa(){return new ze(ie.comparator)}function jm(){return new ze(ie.comparator)}const yD={asc:"ASCENDING",desc:"DESCENDING"},ED={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vD={and:"AND",or:"OR"};class TD{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nh(n,e){return n.useProto3Json||Ec(e)?e:{value:e}}function Ul(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function wD(n,e){return Ul(n,e.toTimestamp())}function Un(n){return Oe(!!n),de.fromTimestamp(function(t){const s=Ls(t);return new et(s.seconds,s.nanos)}(n))}function tf(n,e){return Oh(n,e).canonicalString()}function Oh(n,e){const t=function(r){return new $e(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function GT(n){const e=$e.fromString(n);return Oe(JT(e)),e}function Dh(n,e){return tf(n.databaseId,e.path)}function Su(n,e){const t=GT(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ie(QT(t))}function zT(n,e){return tf(n.databaseId,e)}function ID(n){const e=GT(n);return e.length===4?$e.emptyPath():QT(e)}function xh(n){return new $e(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function QT(n){return Oe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qm(n,e,t){return{name:Dh(n,e),fields:t.value.mapValue.fields}}function AD(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Oe(h===void 0||typeof h=="string"),_t.fromBase64String(h||"")):(Oe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),_t.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?B.UNKNOWN:qT(u.code);return new ee(h,u.message||"")}(o);t=new HT(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Su(n,s.document.name),i=Un(s.document.updateTime),o=s.document.createTime?Un(s.document.createTime):de.min(),a=new $t({mapValue:{fields:s.document.fields}}),c=St.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];t=new il(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Su(n,s.document),i=s.readTime?Un(s.readTime):de.min(),o=St.newNoDocument(r,i),a=s.removedTargetIds||[];t=new il([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Su(n,s.document),i=s.removedTargetIds||[];t=new il([],i,r,null)}else{if(!("filter"in e))return ue();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new fD(r,i),a=s.targetId;t=new WT(a,o)}}return t}function RD(n,e){let t;if(e instanceof ca)t={update:qm(n,e.key,e.value)};else if(e instanceof Jd)t={delete:Dh(n,e.key)};else if(e instanceof Qs)t={update:qm(n,e.key,e.data),updateMask:xD(e.fieldMask)};else{if(!(e instanceof uD))return ue();t={verify:Dh(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Vl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Fl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ue()}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:wD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(n,e.precondition)),t}function CD(n,e){return n&&n.length>0?(Oe(e!==void 0),n.map(t=>function(r,i){let o=r.updateTime?Un(r.updateTime):Un(i);return o.isEqual(de.min())&&(o=Un(i)),new aD(o,r.transformResults||[])}(t,e))):[]}function bD(n,e){return{documents:[zT(n,e.path)]}}function SD(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=zT(n,r);const i=function(u){if(u.length!==0)return XT(An.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Ur(g.field),direction:ND(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Nh(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:t,parent:r}}function PD(n){let e=ID(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){Oe(s===1);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(f){const g=YT(f);return g instanceof An&&CT(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(g=>function(w){return new Ho(Br(w.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,Ec(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(f){const g=!!f.before,m=f.values||[];return new Ll(m,g)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const g=!f.before,m=f.values||[];return new Ll(m,g)}(t.endAt)),zO(e,r,o,i,a,"F",c,u)}function kD(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function YT(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Br(t.unaryFilter.field);return Ze.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Br(t.unaryFilter.field);return Ze.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(t.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Br(t.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(n):n.fieldFilter!==void 0?function(t){return Ze.create(Br(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return An.create(t.compositeFilter.filters.map(s=>YT(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ue()}}(t.compositeFilter.op))}(n):ue()}function ND(n){return yD[n]}function OD(n){return ED[n]}function DD(n){return vD[n]}function Ur(n){return{fieldPath:n.canonicalString()}}function Br(n){return gt.fromServerFormat(n.fieldPath)}function XT(n){return n instanceof Ze?function(t){if(t.op==="=="){if(km(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NAN"}};if(Pm(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(km(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NOT_NAN"}};if(Pm(t.value))return{unaryFilter:{field:Ur(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(t.field),op:OD(t.op),value:t.value}}}(n):n instanceof An?function(t){const s=t.getFilters().map(r=>XT(r));return s.length===1?s[0]:{compositeFilter:{op:DD(t.op),filters:s}}}(n):ue()}function xD(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function JT(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ss{constructor(e,t,s,r,i=de.min(),o=de.min(),a=_t.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ss(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ss(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class MD{constructor(e){this.ht=e}}function LD(n){const e=PD({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?kh(e,e.limit,"L"):e}/**
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
 */class VD{constructor(){this.ln=new FD}addToCollectionParentIndex(e,t){return this.ln.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Ms.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Ms.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class FD{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new st($e.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new st($e.comparator)).toArray()}}/**
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
 */const Wm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ut{static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(41943040,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);/**
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
 */class gi{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new gi(0)}static Qn(){return new gi(-1)}}/**
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
 */function Hm([n,e],[t,s]){const r=Ee(n,t);return r===0?Ee(e,s):r}class UD{constructor(e){this.Gn=e,this.buffer=new st(Hm),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Hm(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class BD{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){Z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Pi(t)?Z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Si(t)}await this.Yn(3e5)})}}class $D{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return $.resolve(yc.oe);const s=new UD(t);return this.Zn.forEachTarget(e,r=>s.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>s.Hn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Wm)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wm):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,t))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),Vr()<=me.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f})))}}function jD(n,e){return new $D(n,e)}/**
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
 */class qD{constructor(){this.changes=new Cr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class WD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class HD{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&Ao(s.mutation,r,zt.empty(),et.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ye()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ye()){const r=ur();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=io();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=ur();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ye()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=hs();const o=Io(),a=function(){return Io()}();return t.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Qs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ao(h.mutation,u,h.mutation.getFieldMask(),et.now())):o.set(u.key,zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var f;return a.set(u,new WD(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Io();let r=new ze((o,a)=>o-a),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let h=s.get(c)||zt.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(r.get(a.batchId)||ye()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=MT();h.forEach(g=>{if(!i.has(g)){const m=$T(t.get(g),s.get(g));m!==null&&f.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return $.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):$.resolve(ur());let a=-1,c=i;return o.next(u=>$.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{c=c.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ye())).next(h=>({batchId:a,changes:xT(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ie(t)).next(s=>{let r=io();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=io();return this.indexManager.getCollectionParents(e,i).next(a=>$.forEach(a,c=>{const u=function(f,g){return new ki(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,St.newInvalidDocument(h)))});let a=io();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Ao(h.mutation,u,zt.empty(),et.now()),Ic(t,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class KD{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return $.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Un(r.createTime)}}(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(r){return{name:r.name,query:LD(r.bundledQuery),readTime:Un(r.readTime)}}(t)),$.resolve()}}/**
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
 */class GD{constructor(){this.overlays=new ze(ie.comparator),this.Er=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ur();return $.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.Tt(e,t,i)}),$.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Er.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const r=ur(),i=t.length+1,o=new ie(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return $.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new ze((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=ur(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return $.resolve(a)}Tt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Er.get(r.largestBatchId).delete(s.key);this.Er.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new dD(t,s));let i=this.Er.get(t);i===void 0&&(i=ye(),this.Er.set(t,i)),this.Er.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class zD{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class nf{constructor(){this.dr=new st(ot.Ar),this.Rr=new st(ot.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new ot(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new ot(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new ie(new $e([])),s=new ot(t,e),r=new ot(t,e+1),i=[];return this.Rr.forEachInRange([s,r],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ie(new $e([])),s=new ot(t,e),r=new ot(t,e+1);let i=ye();return this.Rr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new ot(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ot{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ie.comparator(e.key,t.key)||Ee(e.br,t.br)}static Vr(e,t){return Ee(e.br,t.br)||ie.comparator(e.key,t.key)}}/**
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
 */class QD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new st(ot.Ar)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hD(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.vr=this.vr.add(new ot(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,t){return $.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Fr(s),i=r<0?0:r;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ot(t,0),r=new ot(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([s,r],o=>{const a=this.Cr(o.br);i.push(a)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new st(Ee);return t.forEach(r=>{const i=new ot(r,0),o=new ot(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{s=s.add(a.br)})}),$.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;ie.isDocumentKey(i)||(i=i.child(""));const o=new ot(new ie(i),0);let a=new st(Ee);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.br)),!0)},o),$.resolve(this.Mr(a))}Mr(e){const t=[];return e.forEach(s=>{const r=this.Cr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){Oe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return $.forEach(t.mutations,r=>{const i=new ot(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new ot(t,0),r=this.vr.firstAfterOrEqual(s);return $.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class YD{constructor(e){this.Nr=e,this.docs=function(){return new ze(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():St.newInvalidDocument(t))}getEntries(e,t){let s=hs();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():St.newInvalidDocument(r))}),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=hs();const o=t.path,a=new ie(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||bO(CO(h),s)<=0||(r.has(h.key)||Ic(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,t,s,r){ue()}Lr(e,t){return $.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new XD(this)}getSize(e){return $.resolve(this.size)}}class XD extends qD{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.hr.addEntry(e,r)):this.hr.removeEntry(s)}),$.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class JD{constructor(e){this.persistence=e,this.Br=new Cr(t=>Qd(t),Yd),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.kr=0,this.qr=new nf,this.targetCount=0,this.Qr=gi.qn()}forEachTarget(e,t){return this.Br.forEach((s,r)=>t(r)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),$.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new gi(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Un(t),$.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),$.waitFor(i).next(()=>r)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.qr.containsKey(t))}}/**
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
 */class ZT{constructor(e,t){this.Kr={},this.overlays={},this.$r=new yc(0),this.Ur=!1,this.Ur=!0,this.Wr=new zD,this.referenceDelegate=e(this),this.Gr=new JD(this),this.indexManager=new VD,this.remoteDocumentCache=function(r){return new YD(r)}(s=>this.referenceDelegate.zr(s)),this.serializer=new MD(t),this.jr=new KD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new GD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new QD(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){Z("MemoryPersistence","Starting transaction:",e);const r=new ZD(this.$r.next());return this.referenceDelegate.Hr(),s(r).next(i=>this.referenceDelegate.Jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Yr(e,t){return $.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class ZD extends PO{constructor(e){super(),this.currentSequenceNumber=e}}class sf{constructor(e){this.persistence=e,this.Zr=new nf,this.Xr=null}static ei(e){return new sf(e)}get ti(){if(this.Xr)return this.Xr;throw ue()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),$.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(r=>this.ti.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.ti.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.ti,s=>{const r=ie.fromPath(s);return this.ni(e,r).next(i=>{i||t.removeEntry(r,de.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return $.or([()=>$.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Bl{constructor(e,t){this.persistence=e,this.ri=new Cr(s=>OO(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=jD(this,t)}static ei(e,t){return new Bl(e,t)}Hr(){}Jr(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return $.forEach(this.ri,(s,r)=>this.ir(e,s,r).next(i=>i?$.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Lr(e,o=>this.ir(e,o,t).next(a=>{a||(s++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),$.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=nl(e.data.value)),t}ir(e,t,s){return $.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.ri.get(t);return $.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class rf{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=r}static zi(e,t){let s=ye(),r=ye();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new rf(e,t.fromCache,s,r)}}/**
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
 */class ex{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tx{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return EC()?8:kO(kt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.Xi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,t,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new ex;return this.ts(e,t,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,t,o,a.size)})}).next(()=>i.result)}ns(e,t,s,r){return s.documentReadCount<this.Ji?(Vr()<=me.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Fr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),$.resolve()):(Vr()<=me.DEBUG&&Z("QueryEngine","Query:",Fr(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Yi*r?(Vr()<=me.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Fr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Fn(t))):$.resolve())}Xi(e,t){if(xm(t))return $.resolve(null);let s=Fn(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=kh(t,null,"F"),s=Fn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ye(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.rs(t,a);return this.ss(t,u,o,c.readTime)?this.Xi(e,kh(t,null,"F")):this.os(e,u,t,c)}))})))}es(e,t,s,r){return xm(t)||r.isEqual(de.min())?$.resolve(null):this.Zi.getDocuments(e,s).next(i=>{const o=this.rs(t,i);return this.ss(t,o,s,r)?$.resolve(null):(Vr()<=me.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Fr(t)),this.os(e,o,t,RO(r,-1)).next(a=>a))})}rs(e,t){let s=new st(OT(e));return t.forEach((r,i)=>{Ic(e,i)&&(s=s.add(i))}),s}ss(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(e,t,s){return Vr()<=me.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Fr(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ms.min(),s)}os(e,t,s,r){return this.Zi.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class nx{constructor(e,t,s,r){this.persistence=e,this._s=t,this.serializer=r,this.us=new ze(Ee),this.cs=new Cr(i=>Qd(i),Yd),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HD(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function sx(n,e,t,s){return new nx(n,e,t,s)}async function ew(n,e){const t=pe(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ye();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(s,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function rx(n,e){const t=pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,g=f.keys();let m=$.resolve();return g.forEach(w=>{m=m.next(()=>h.getEntry(c,w)).next(P=>{const S=u.docVersions.get(w);Oe(S!==null),P.version.compareTo(S)<0&&(f.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),h.addEntry(P)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=ye();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function tw(n){const e=pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function ix(n,e){const t=pe(n),s=e.snapshotVersion;let r=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.hs.newChangeBuffer({trackRemovals:!0});r=t.us;const a=[];e.targetChanges.forEach((h,f)=>{const g=r.get(f);if(!g)return;a.push(t.Gr.removeMatchingKeys(i,h.removedDocuments,f).next(()=>t.Gr.addMatchingKeys(i,h.addedDocuments,f)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(_t.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),r=r.insert(f,m),function(P,S,x){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,m,h)&&a.push(t.Gr.updateTargetData(i,m))});let c=hs(),u=ye();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(ox(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!s.isEqual(de.min())){const h=t.Gr.getLastRemoteSnapshotVersion(i).next(f=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return $.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.us=r,i))}function ox(n,e,t){let s=ye(),r=ye();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=hs();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:r}})}function ax(n,e){const t=pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function lx(n,e){const t=pe(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Gr.getTargetData(s,e).next(i=>i?(r=i,$.resolve(r)):t.Gr.allocateTargetId(s).next(o=>(r=new Ss(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.us.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function Mh(n,e,t){const s=pe(n),r=s.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Pi(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.us=s.us.remove(e),s.cs.delete(r.target)}function Km(n,e,t){const s=pe(n);let r=de.min(),i=ye();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=pe(c),g=f.cs.get(h);return g!==void 0?$.resolve(f.us.get(g)):f.Gr.getTargetData(u,h)}(s,o,Fn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s._s.getDocumentsMatchingQuery(o,e,t?r:de.min(),t?i:ye())).next(a=>(cx(s,YO(e),a),{documents:a,ds:i})))}function cx(n,e,t){let s=n.ls.get(e)||de.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.ls.set(e,s)}class Gm{constructor(){this.activeTargetIds=nD()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ux{constructor(){this._o=new Gm,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Gm,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hx{uo(e){}shutdown(){}}/**
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
 */class zm{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wa=null;function Pu(){return Wa===null?Wa=function(){return 268435456+Math.round(2147483648*Math.random())}():Wa++,"0x"+Wa.toString(16)}/**
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
 */const dx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fx{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const wt="WebChannelConnection";class px extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${r}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Oo(t,s,r,i,o){const a=Pu(),c=this.No(t,s.toUriEncodedString());Z("RestConnection",`Sending RPC '${t}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(t,c,u,r).then(h=>(Z("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw hi("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}ko(t,s,r,i,o,a){return this.Oo(t,s,r,i,o)}Lo(t,s,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}No(t,s){const r=dx[t];return`${this.Fo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,r){const i=Pu();return new Promise((o,a)=>{const c=new pT;c.setWithCredentials(!0),c.listenOnce(gT.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case tl.NO_ERROR:const h=c.getResponseJson();Z(wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case tl.TIMEOUT:Z(wt,`RPC '${e}' ${i} timed out`),a(new ee(B.DEADLINE_EXCEEDED,"Request time out"));break;case tl.HTTP_ERROR:const f=c.getStatus();if(Z(wt,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const w=function(S){const x=S.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(x)>=0?x:B.UNKNOWN}(m.status);a(new ee(w,m.message))}else a(new ee(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ee(B.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(wt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);Z(wt,`RPC '${e}' ${i} sending request:`,r),c.send(t,"POST",u,s,15)})}qo(e,t,s){const r=Pu(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yT(),a=_T(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=i.join("");Z(wt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let g=!1,m=!1;const w=new fx({Eo:S=>{m?Z(wt,`Not sending because RPC '${e}' stream ${r} is closed:`,S):(g||(Z(wt,`Opening RPC '${e}' stream ${r} transport.`),f.open(),g=!0),Z(wt,`RPC '${e}' stream ${r} sending:`,S),f.send(S))},Ao:()=>f.close()}),P=(S,x,M)=>{S.listen(x,D=>{try{M(D)}catch(L){setTimeout(()=>{throw L},0)}})};return P(f,ro.EventType.OPEN,()=>{m||(Z(wt,`RPC '${e}' stream ${r} transport opened.`),w.So())}),P(f,ro.EventType.CLOSE,()=>{m||(m=!0,Z(wt,`RPC '${e}' stream ${r} transport closed`),w.Do())}),P(f,ro.EventType.ERROR,S=>{m||(m=!0,hi(wt,`RPC '${e}' stream ${r} transport errored:`,S),w.Do(new ee(B.UNAVAILABLE,"The operation could not be completed")))}),P(f,ro.EventType.MESSAGE,S=>{var x;if(!m){const M=S.data[0];Oe(!!M);const D=M,L=(D==null?void 0:D.error)||((x=D[0])===null||x===void 0?void 0:x.error);if(L){Z(wt,`RPC '${e}' stream ${r} received error:`,L);const te=L.status;let ne=function(E){const R=Je[E];if(R!==void 0)return qT(R)}(te),C=L.message;ne===void 0&&(ne=B.INTERNAL,C="Unknown error status: "+te+" with message "+L.message),m=!0,w.Do(new ee(ne,C)),f.close()}else Z(wt,`RPC '${e}' stream ${r} received:`,M),w.vo(M)}}),P(a,mT.STAT_EVENT,S=>{S.stat===Ah.PROXY?Z(wt,`RPC '${e}' stream ${r} detected buffering proxy`):S.stat===Ah.NOPROXY&&Z(wt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{w.bo()},0),w}}function ku(){return typeof document<"u"?document:null}/**
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
 */function bc(n){return new TD(n,!0)}/**
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
 */class nw{constructor(e,t,s=1e3,r=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),r=Math.max(0,t-s);r>0&&Z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class sw{constructor(e,t,s,r,i,o,a,c){this.li=e,this.Yo=s,this.Zo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new nw(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(us(t.toString()),us("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Xo===t&&this.I_(s,r)},s=>{e(()=>{const r=new ee(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(r)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{s(()=>this.E_(r))}),this.stream.onMessage(r=>{s(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gx extends sw{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=AD(this.serializer,e),s=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Un(o.readTime):de.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=xh(this.serializer),t.addTarget=function(i,o){let a;const c=o.target;if(a=Sh(c)?{documents:bD(i,c)}:{query:SD(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=KT(i,o.resumeToken);const u=Nh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){a.readTime=Ul(i,o.snapshotVersion.toTimestamp());const u=Nh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=kD(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=xh(this.serializer),t.removeTarget=e,this.c_(t)}}class mx extends sw{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=CD(e.writeResults,e.commitTime),s=Un(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=xh(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>RD(this.serializer,s))};this.c_(t)}}/**
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
 */class _x extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Oh(t,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(B.UNKNOWN,i.toString())})}ko(e,t,s,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Oh(t,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(B.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class yx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(us(t),this.C_=!1):Z("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class Ex{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{s.enqueueAndForget(async()=>{br(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=pe(c);u.k_.add(4),await ha(u),u.K_.set("Unknown"),u.k_.delete(4),await Sc(u)}(this))})}),this.K_=new yx(s,r)}}async function Sc(n){if(br(n))for(const e of n.q_)await e(!0)}async function ha(n){for(const e of n.q_)await e(!1)}function rw(n,e){const t=pe(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),cf(t)?lf(t):Ni(t).s_()&&af(t,e))}function of(n,e){const t=pe(n),s=Ni(t);t.B_.delete(e),s.s_()&&iw(t,e),t.B_.size===0&&(s.s_()?s.a_():br(t)&&t.K_.set("Unknown"))}function af(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ni(n).V_(e)}function iw(n,e){n.U_.xe(e),Ni(n).m_(e)}function lf(n){n.U_=new _D({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Ni(n).start(),n.K_.F_()}function cf(n){return br(n)&&!Ni(n).i_()&&n.B_.size>0}function br(n){return pe(n).k_.size===0}function ow(n){n.U_=void 0}async function vx(n){n.K_.set("Online")}async function Tx(n){n.B_.forEach((e,t)=>{af(n,e)})}async function wx(n,e){ow(n),cf(n)?(n.K_.O_(e),lf(n)):n.K_.set("Unknown")}async function Ix(n,e,t){if(n.K_.set("Online"),e instanceof HT&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.B_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.B_.delete(a),r.U_.removeTarget(a))}(n,e)}catch(s){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $l(n,s)}else if(e instanceof il?n.U_.$e(e):e instanceof WT?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(de.min()))try{const s=await tw(n.localStore);t.compareTo(s)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.B_.get(c);if(!h)return;i.B_.set(c,h.withResumeToken(_t.EMPTY_BYTE_STRING,h.snapshotVersion)),iw(i,c);const f=new Ss(h.target,c,u,h.sequenceNumber);af(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(s){Z("RemoteStore","Failed to raise snapshot:",s),await $l(n,s)}}async function $l(n,e,t){if(!Pi(e))throw e;n.k_.add(1),await ha(n),n.K_.set("Offline"),t||(t=()=>tw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Sc(n)})}function aw(n,e){return e().catch(t=>$l(n,t,e))}async function Pc(n){const e=pe(n),t=Us(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;Ax(e);)try{const r=await ax(e.localStore,s);if(r===null){e.L_.length===0&&t.a_();break}s=r.batchId,Rx(e,r)}catch(r){await $l(e,r)}lw(e)&&cw(e)}function Ax(n){return br(n)&&n.L_.length<10}function Rx(n,e){n.L_.push(e);const t=Us(n);t.s_()&&t.f_&&t.g_(e.mutations)}function lw(n){return br(n)&&!Us(n).i_()&&n.L_.length>0}function cw(n){Us(n).start()}async function Cx(n){Us(n).w_()}async function bx(n){const e=Us(n);for(const t of n.L_)e.g_(t.mutations)}async function Sx(n,e,t){const s=n.L_.shift(),r=Zd.from(s,e,t);await aw(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await Pc(n)}async function Px(n,e){e&&Us(n).f_&&await async function(s,r){if(function(o){return pD(o)&&o!==B.ABORTED}(r.code)){const i=s.L_.shift();Us(s).__(),await aw(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Pc(s)}}(n,e),lw(n)&&cw(n)}async function Qm(n,e){const t=pe(n);t.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const s=br(t);t.k_.add(3),await ha(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Sc(t)}async function kx(n,e){const t=pe(n);e?(t.k_.delete(2),await Sc(t)):e||(t.k_.add(2),await ha(t),t.K_.set("Unknown"))}function Ni(n){return n.W_||(n.W_=function(t,s,r){const i=pe(t);return i.b_(),new gx(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Ro:vx.bind(null,n),mo:Tx.bind(null,n),po:wx.bind(null,n),R_:Ix.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),cf(n)?lf(n):n.K_.set("Unknown")):(await n.W_.stop(),ow(n))})),n.W_}function Us(n){return n.G_||(n.G_=function(t,s,r){const i=pe(t);return i.b_(),new mx(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:Cx.bind(null,n),po:Px.bind(null,n),p_:bx.bind(null,n),y_:Sx.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Pc(n)):(await n.G_.stop(),n.L_.length>0&&(Z("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class uf{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new as,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new uf(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hf(n,e){if(us("AsyncQueue",`${e}: ${n}`),Pi(n))return new ee(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class si{static emptySet(e){return new si(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ie.comparator(t.key,s.key):(t,s)=>ie.comparator(t.key,s.key),this.keyedMap=io(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof si)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new si;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Ym{constructor(){this.z_=new ze(ie.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):ue():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class mi{constructor(e,t,s,r,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new mi(e,t,si.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Nx{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class Ox{constructor(){this.queries=Xm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const r=pe(t),i=r.queries;r.queries=Xm(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(s)})})(this,new ee(B.ABORTED,"Firestore shutting down"))}}function Xm(){return new Cr(n=>NT(n),wc)}async function df(n,e){const t=pe(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Y_()&&e.Z_()&&(s=2):(i=new Nx,s=e.Z_()?0:1);try{switch(s){case 0:i.H_=await t.onListen(r,!0);break;case 1:i.H_=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=hf(o,`Initialization of query '${Fr(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&pf(t)}async function ff(n,e){const t=pe(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?r=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Dx(n,e){const t=pe(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.J_)a.ta(r)&&(s=!0);o.H_=r}}s&&pf(t)}function xx(n,e,t){const s=pe(n),r=s.queries.get(e);if(r)for(const i of r.J_)i.onError(t);s.queries.delete(e)}function pf(n){n.X_.forEach(e=>{e.next()})}var Lh,Jm;(Jm=Lh||(Lh={})).na="default",Jm.Cache="cache";class gf{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new mi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Lh.Cache}}/**
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
 */class uw{constructor(e){this.key=e}}class hw{constructor(e){this.key=e}}class Mx{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ye(),this.mutatedKeys=ye(),this.Va=OT(e),this.ma=new si(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new Ym,r=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,f)=>{const g=r.get(h),m=Ic(this.query,f)?f:null,w=!!g&&this.mutatedKeys.has(g.key),P=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;g&&m?g.data.isEqual(m.data)?w!==P&&(s.track({type:3,doc:m}),S=!0):this.ya(g,m)||(s.track({type:2,doc:m}),S=!0,(c&&this.Va(m,c)>0||u&&this.Va(m,u)<0)&&(a=!0)):!g&&m?(s.track({type:0,doc:m}),S=!0):g&&!m&&(s.track({type:1,doc:g}),S=!0,(c||u)&&(a=!0)),S&&(m?(o=o.add(m),i=P?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ma:o,pa:s,ss:a,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(m,w){const P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return P(m)-P(w)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(s),r=r!=null&&r;const a=t&&!r?this.Sa():[],c=this.Ra.size===0&&this.current&&!r?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new mi(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ym,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ye(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new hw(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new uw(s))}),t}va(e){this.da=e.ds,this.Ra=ye();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return mi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Lx{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Vx{constructor(e){this.key=e,this.Fa=!1}}class Fx{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Cr(a=>NT(a),wc),this.Oa=new Map,this.Na=new Set,this.La=new ze(ie.comparator),this.Ba=new Map,this.ka=new nf,this.qa={},this.Qa=new Map,this.Ka=gi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Ux(n,e,t=!0){const s=_w(n);let r;const i=s.xa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Ca()):r=await dw(s,e,t,!0),r}async function Bx(n,e){const t=_w(n);await dw(t,e,!0,!1)}async function dw(n,e,t,s){const r=await lx(n.localStore,Fn(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return s&&(a=await $x(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&rw(n.remoteStore,r),a}async function $x(n,e,t,s,r){n.Ua=(f,g,m)=>async function(P,S,x,M){let D=S.view.ga(x);D.ss&&(D=await Km(P.localStore,S.query,!1).then(({documents:C})=>S.view.ga(C,D)));const L=M&&M.targetChanges.get(S.targetId),te=M&&M.targetMismatches.get(S.targetId)!=null,ne=S.view.applyChanges(D,P.isPrimaryClient,L,te);return e_(P,S.targetId,ne.ba),ne.snapshot}(n,f,g,m);const i=await Km(n.localStore,e,!0),o=new Mx(e,i.ds),a=o.ga(i.documents),c=ua.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);e_(n,t,u.ba);const h=new Lx(e,t,o);return n.xa.set(e,h),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),u.snapshot}async function jx(n,e,t){const s=pe(n),r=s.xa.get(e),i=s.Oa.get(r.targetId);if(i.length>1)return s.Oa.set(r.targetId,i.filter(o=>!wc(o,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Mh(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&of(s.remoteStore,r.targetId),Vh(s,r.targetId)}).catch(Si)):(Vh(s,r.targetId),await Mh(s.localStore,r.targetId,!0))}async function qx(n,e){const t=pe(n),s=t.xa.get(e),r=t.Oa.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),of(t.remoteStore,s.targetId))}async function Wx(n,e,t){const s=Xx(n);try{const r=await function(o,a){const c=pe(o),u=et.now(),h=a.reduce((m,w)=>m.add(w.key),ye());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let w=hs(),P=ye();return c.hs.getEntries(m,h).next(S=>{w=S,w.forEach((x,M)=>{M.isValidDocument()||(P=P.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,w)).next(S=>{f=S;const x=[];for(const M of a){const D=cD(M,f.get(M.key).overlayedDocument);D!=null&&x.push(new Qs(M.key,D,IT(D.value.mapValue),vn.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,x,a)}).next(S=>{g=S;const x=S.applyToLocalDocumentSet(f,P);return c.documentOverlayCache.saveOverlays(m,S.batchId,x)})}).then(()=>({batchId:g.batchId,changes:xT(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new ze(Ee)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(s,r.batchId,t),await da(s,r.changes),await Pc(s.remoteStore)}catch(r){const i=hf(r,"Failed to persist write");t.reject(i)}}async function fw(n,e){const t=pe(n);try{const s=await ix(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Ba.get(i);o&&(Oe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?Oe(o.Fa):r.removedDocuments.size>0&&(Oe(o.Fa),o.Fa=!1))}),await da(t,s,e)}catch(s){await Si(s)}}function Zm(n,e,t){const s=pe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=pe(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const g of f.J_)g.ea(a)&&(u=!0)}),u&&pf(c)}(s.eventManager,e),r.length&&s.Ma.R_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Hx(n,e,t){const s=pe(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Ba.get(e),i=r&&r.key;if(i){let o=new ze(ie.comparator);o=o.insert(i,St.newNoDocument(i,de.min()));const a=ye().add(i),c=new Cc(de.min(),new Map,new ze(Ee),o,a);await fw(s,c),s.La=s.La.remove(i),s.Ba.delete(e),mf(s)}else await Mh(s.localStore,e,!1).then(()=>Vh(s,e,t)).catch(Si)}async function Kx(n,e){const t=pe(n),s=e.batch.batchId;try{const r=await rx(t.localStore,e);gw(t,s,null),pw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await da(t,r)}catch(r){await Si(r)}}async function Gx(n,e,t){const s=pe(n);try{const r=await function(o,a){const c=pe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Oe(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);gw(s,e,t),pw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await da(s,r)}catch(r){await Si(r)}}function pw(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function gw(n,e,t){const s=pe(n);let r=s.qa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.qa[s.currentUser.toKey()]=r}}function Vh(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Oa.get(e))n.xa.delete(s),t&&n.Ma.Wa(s,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(s=>{n.ka.containsKey(s)||mw(n,s)})}function mw(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(of(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),mf(n))}function e_(n,e,t){for(const s of t)s instanceof uw?(n.ka.addReference(s.key,e),zx(n,s)):s instanceof hw?(Z("SyncEngine","Document no longer in limbo: "+s.key),n.ka.removeReference(s.key,e),n.ka.containsKey(s.key)||mw(n,s.key)):ue()}function zx(n,e){const t=e.key,s=t.path.canonicalString();n.La.get(t)||n.Na.has(s)||(Z("SyncEngine","New document in limbo: "+t),n.Na.add(s),mf(n))}function mf(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ie($e.fromString(e)),s=n.Ka.next();n.Ba.set(s,new Vx(t)),n.La=n.La.insert(t,s),rw(n.remoteStore,new Ss(Fn(Tc(t.path)),s,"TargetPurposeLimboResolution",yc.oe))}}async function da(n,e,t){const s=pe(n),r=[],i=[],o=[];s.xa.isEmpty()||(s.xa.forEach((a,c)=>{o.push(s.Ua(c,e,t).then(u=>{var h;if((u||t)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=rf.zi(c.targetId,u);i.push(f)}}))}),await Promise.all(o),s.Ma.R_(r),await async function(c,u){const h=pe(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(u,g=>$.forEach(g.Wi,m=>h.persistence.referenceDelegate.addReference(f,g.targetId,m)).next(()=>$.forEach(g.Gi,m=>h.persistence.referenceDelegate.removeReference(f,g.targetId,m)))))}catch(f){if(!Pi(f))throw f;Z("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const m=h.us.get(g),w=m.snapshotVersion,P=m.withLastLimboFreeSnapshotVersion(w);h.us=h.us.insert(g,P)}}}(s.localStore,i))}async function Qx(n,e){const t=pe(n);if(!t.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const s=await ew(t.localStore,e);t.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new ee(B.CANCELLED,o))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await da(t,s.Ts)}}function Yx(n,e){const t=pe(n),s=t.Ba.get(e);if(s&&s.Fa)return ye().add(s.key);{let r=ye();const i=t.Oa.get(e);if(!i)return r;for(const o of i){const a=t.xa.get(o);r=r.unionWith(a.view.fa)}return r}}function _w(n){const e=pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hx.bind(null,e),e.Ma.R_=Dx.bind(null,e.eventManager),e.Ma.Wa=xx.bind(null,e.eventManager),e}function Xx(n){const e=pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Gx.bind(null,e),e}class jl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return sx(this.persistence,new tx,e.initialUser,this.serializer)}ja(e){return new ZT(sf.ei,this.serializer)}za(e){return new ux}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jl.provider={build:()=>new jl};class Jx extends jl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Oe(this.persistence.referenceDelegate instanceof Bl);const s=this.persistence.referenceDelegate.garbageCollector;return new BD(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new ZT(s=>Bl.ei(s,t),this.serializer)}}class Fh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Zm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qx.bind(null,this.syncEngine),await kx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ox}()}createDatastore(e){const t=bc(e.databaseInfo.databaseId),s=function(i){return new px(i)}(e.databaseInfo);return function(i,o,a,c){return new _x(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,o,a){return new Ex(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>Zm(this.syncEngine,t,0),function(){return zm.p()?new zm:new hx}())}createSyncEngine(e,t){return function(r,i,o,a,c,u,h){const f=new Fx(r,i,o,a,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=pe(r);Z("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await ha(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Fh.provider={build:()=>new Fh};/**
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
 */class _f{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):us("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Zx{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=It.UNAUTHENTICATED,this.clientId=vT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{Z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(Z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new as;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=hf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Nu(n,e){n.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ew(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function t_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await eM(n);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>Qm(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>Qm(e.remoteStore,r)),n._onlineComponents=e}async function eM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;hi("Error using user provided cache. Falling back to memory cache: "+t),await Nu(n,new jl)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await Nu(n,new Jx(void 0));return n._offlineComponents}async function yw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await t_(n,n._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await t_(n,new Fh))),n._onlineComponents}function tM(n){return yw(n).then(e=>e.syncEngine)}async function ql(n){const e=await yw(n),t=e.eventManager;return t.onListen=Ux.bind(null,e.syncEngine),t.onUnlisten=jx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Bx.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=qx.bind(null,e.syncEngine),t}function nM(n,e,t={}){const s=new as;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new _f({next:g=>{h.eu(),o.enqueueAndForget(()=>ff(i,f));const m=g.docs.has(a);!m&&g.fromCache?u.reject(new ee(B.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&g.fromCache&&c&&c.source==="server"?u.reject(new ee(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new gf(Tc(a.path),h,{includeMetadataChanges:!0,ua:!0});return df(i,f)}(await ql(n),n.asyncQueue,e,t,s)),s.promise}function sM(n,e,t={}){const s=new as;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new _f({next:g=>{h.eu(),o.enqueueAndForget(()=>ff(i,f)),g.fromCache&&c.source==="server"?u.reject(new ee(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new gf(a,h,{includeMetadataChanges:!0,ua:!0});return df(i,f)}(await ql(n),n.asyncQueue,e,t,s)),s.promise}/**
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
 */function Ew(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const n_=new Map;/**
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
 */function vw(n,e,t){if(!t)throw new ee(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function rM(n,e,t,s){if(e===!0&&s===!0)throw new ee(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function s_(n){if(!ie.isDocumentKey(n))throw new ee(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function r_(n){if(ie.isDocumentKey(n))throw new ee(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function kc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ue()}function ln(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=kc(n);throw new ee(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class i_{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ew((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nc{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new mO;switch(s.type){case"firstParty":return new vO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=n_.get(t);s&&(Z("ComponentProvider","Removing Datastore"),n_.delete(t),s.terminate())}(this),Promise.resolve()}}function iM(n,e,t,s={}){var r;const i=(n=ln(n,Nc))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&hi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=It.MOCK_USER;else{a=fC(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new ee(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new It(u)}n._authCredentials=new _O(new ET(a,c))}}/**
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
 */class Ys{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ys(this.firestore,e,this._query)}}class Vt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Ds extends Ys{constructor(e,t,s){super(e,t,Tc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new ie(e))}withConverter(e){return new Ds(this.firestore,e,this._path)}}function ol(n,e,...t){if(n=lt(n),vw("collection","path",e),n instanceof Nc){const s=$e.fromString(e,...t);return r_(s),new Ds(n,null,s)}{if(!(n instanceof Vt||n instanceof Ds))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child($e.fromString(e,...t));return r_(s),new Ds(n.firestore,null,s)}}function ao(n,e,...t){if(n=lt(n),arguments.length===1&&(e=vT.newId()),vw("doc","path",e),n instanceof Nc){const s=$e.fromString(e,...t);return s_(s),new Vt(n,null,new ie(s))}{if(!(n instanceof Vt||n instanceof Ds))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child($e.fromString(e,...t));return s_(s),new Vt(n.firestore,n instanceof Ds?n.converter:null,new ie(s))}}/**
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
 */class o_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new nw(this,"async_queue_retry"),this.fu=()=>{const s=ku();s&&Z("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=ku();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=ku();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new as;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Pi(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw us("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const r=uf.createAndSchedule(this,e,t,s,i=>this.Su(i));return this.du.push(r),r}pu(){this.Au&&ue()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function a_(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}class Bs extends Nc{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new o_,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new o_(e),this._firestoreClient=void 0,await e}}}function Tw(n,e){const t=typeof n=="object"?n:pE(),s=typeof n=="string"?n:"(default)",r=dE(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=hC("firestore");i&&iM(r,...i)}return r}function Oc(n){if(n._terminated)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||oM(n),n._firestoreClient}function oM(n){var e,t,s;const r=n._freezeSettings(),i=function(a,c,u,h){return new MO(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Ew(h.experimentalLongPollingOptions),h.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new Zx(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(_t.fromBase64String(e))}catch(t){throw new ee(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _i(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Dc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yf{constructor(e){this._methodName=e}}/**
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
 */class xc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ef{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const aM=/^__.*__$/;class lM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Qs(e,this.data,this.fieldMask,t,this.fieldTransforms):new ca(e,this.data,t,this.fieldTransforms)}}class ww{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Qs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Iw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class vf{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:s,Nu:!1});return r.Lu(e),r}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.xu({path:s,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Wl(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Iw(this.Mu)&&aM.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class cM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||bc(e)}$u(e,t,s,r=!1){return new vf({Mu:e,methodName:t,Ku:s,path:gt.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tf(n){const e=n._freezeSettings(),t=bc(n._databaseId);return new cM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function uM(n,e,t,s,r,i={}){const o=n.$u(i.merge||i.mergeFields?2:0,e,t,r);wf("Data must be an object, but it was:",o,s);const a=Aw(s,o);let c,u;if(i.merge)c=new zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const g=Uh(e,f,t);if(!o.contains(g))throw new ee(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Cw(h,g)||h.push(g)}c=new zt(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new lM(new $t(a),c,u)}class Mc extends yf{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mc}}function hM(n,e,t,s){const r=n.$u(1,e,t);wf("Data must be an object, but it was:",r,s);const i=[],o=$t.empty();zs(s,(c,u)=>{const h=If(e,c,t);u=lt(u);const f=r.Bu(h);if(u instanceof Mc)i.push(h);else{const g=fa(u,f);g!=null&&(i.push(h),o.set(h,g))}});const a=new zt(i);return new ww(o,a,r.fieldTransforms)}function dM(n,e,t,s,r,i){const o=n.$u(1,e,t),a=[Uh(e,s,t)],c=[r];if(i.length%2!=0)throw new ee(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)a.push(Uh(e,i[g])),c.push(i[g+1]);const u=[],h=$t.empty();for(let g=a.length-1;g>=0;--g)if(!Cw(u,a[g])){const m=a[g];let w=c[g];w=lt(w);const P=o.Bu(m);if(w instanceof Mc)u.push(m);else{const S=fa(w,P);S!=null&&(u.push(m),h.set(m,S))}}const f=new zt(u);return new ww(h,f,o.fieldTransforms)}function fM(n,e,t,s=!1){return fa(t,n.$u(s?4:3,e))}function fa(n,e){if(Rw(n=lt(n)))return wf("Unsupported field value:",e,n),Aw(n,e);if(n instanceof yf)return function(s,r){if(!Iw(r.Mu))throw r.qu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=fa(a,r.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=lt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return sD(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=et.fromDate(s);return{timestampValue:Ul(r.serializer,i)}}if(s instanceof et){const i=new et(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ul(r.serializer,i)}}if(s instanceof xc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof _i)return{bytesValue:KT(r.serializer,s._byteString)};if(s instanceof Vt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:tf(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Ef)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Xd(a.serializer,c)})}}}}}}(s,r);throw r.qu(`Unsupported field value: ${kc(s)}`)}(n,e)}function Aw(n,e){const t={};return TT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zs(n,(s,r)=>{const i=fa(r,e.Ou(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Rw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof et||n instanceof xc||n instanceof _i||n instanceof Vt||n instanceof yf||n instanceof Ef)}function wf(n,e,t){if(!Rw(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const s=kc(t);throw s==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+s)}}function Uh(n,e,t){if((e=lt(e))instanceof Dc)return e._internalPath;if(typeof e=="string")return If(n,e);throw Wl("Field path arguments must be of type string or ",n,!1,void 0,t)}const pM=new RegExp("[~\\*/\\[\\]]");function If(n,e,t){if(e.search(pM)>=0)throw Wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Dc(...e.split("."))._internalPath}catch{throw Wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Wl(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new ee(B.INVALID_ARGUMENT,a+n+c)}function Cw(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class bw{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Lc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gM extends bw{data(){return super.data()}}function Lc(n,e){return typeof e=="string"?If(n,e):e instanceof Dc?e._internalPath:e._delegate._internalPath}/**
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
 */function Sw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Af{}class Pw extends Af{}function l_(n,e,...t){let s=[];e instanceof Af&&s.push(e),s=s.concat(t),function(i){const o=i.filter(c=>c instanceof Rf).length,a=i.filter(c=>c instanceof Vc).length;if(o>1||o>0&&a>0)throw new ee(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Vc extends Pw{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Vc(e,t,s)}_apply(e){const t=this._parse(e);return kw(e._query,t),new Ys(e.firestore,e.converter,Ph(e._query,t))}_parse(e){const t=Tf(e.firestore);return function(i,o,a,c,u,h,f){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ee(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){h_(f,h);const m=[];for(const w of f)m.push(u_(c,i,w));g={arrayValue:{values:m}}}else g=u_(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||h_(f,h),g=fM(a,o,f,h==="in"||h==="not-in");return Ze.create(u,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function mM(n,e,t){const s=e,r=Lc("where",n);return Vc._create(r,s,t)}class Rf extends Af{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Rf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:An.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let o=r;const a=i.getFlattenedFilters();for(const c of a)kw(o,c),o=Ph(o,c)}(e._query,t),new Ys(e.firestore,e.converter,Ph(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cf extends Pw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Cf(e,t)}_apply(e){const t=function(r,i,o){if(r.startAt!==null)throw new ee(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new ee(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ho(i,o)}(e._query,this._field,this._direction);return new Ys(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new ki(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function c_(n,e="asc"){const t=e,s=Lc("orderBy",n);return Cf._create(s,t)}function u_(n,e,t){if(typeof(t=lt(t))=="string"){if(t==="")throw new ee(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kT(e)&&t.indexOf("/")!==-1)throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child($e.fromString(t));if(!ie.isDocumentKey(s))throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Sm(n,new ie(s))}if(t instanceof Vt)return Sm(n,t._key);throw new ee(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kc(t)}.`)}function h_(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kw(n,e){const t=function(r,i){for(const o of r)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class _M{convertValue(e,t="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return zs(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Ye(o.doubleValue));return new Ef(i)}convertGeoPoint(e){return new xc(Ye(e.latitude),Ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=vc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(jo(e));default:return null}}convertTimestamp(e){const t=Ls(e);return new et(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=$e.fromString(e);Oe(JT(s));const r=new qo(s.get(1),s.get(3)),i=new ie(s.popFirst(5));return r.isEqual(t)||us(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function yM(n,e,t){let s;return s=n?n.toFirestore(e):e,s}/**
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
 */class lo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nw extends bw{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new al(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Lc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class al extends Nw{data(e={}){return super.data(e)}}class Ow{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new lo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new al(this._firestore,this._userDataWriter,s.key,s,new lo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new al(r._firestore,r._userDataWriter,a.doc.key,a.doc,new lo(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new al(r._firestore,r._userDataWriter,a.doc.key,a.doc,new lo(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:EM(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function EM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue()}}/**
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
 */function Dw(n){n=ln(n,Vt);const e=ln(n.firestore,Bs);return nM(Oc(e),n._key).then(t=>xw(e,n,t))}class bf extends _M{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,t)}}function vM(n){n=ln(n,Ys);const e=ln(n.firestore,Bs),t=Oc(e),s=new bf(e);return Sw(n._query),sM(t,n._query).then(r=>new Ow(e,s,n,r))}function d_(n,e,t,...s){n=ln(n,Vt);const r=ln(n.firestore,Bs),i=Tf(r);let o;return o=typeof(e=lt(e))=="string"||e instanceof Dc?dM(i,"updateDoc",n._key,e,t,s):hM(i,"updateDoc",n._key,e),Pf(r,[o.toMutation(n._key,vn.exists(!0))])}function f_(n){return Pf(ln(n.firestore,Bs),[new Jd(n._key,vn.none())])}function TM(n,e){const t=ln(n.firestore,Bs),s=ao(n),r=yM(n.converter,e);return Pf(t,[uM(Tf(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,vn.exists(!1))]).then(()=>s)}function Sf(n,...e){var t,s,r;n=lt(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||a_(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(a_(e[o])){const f=e[o];e[o]=(t=f.next)===null||t===void 0?void 0:t.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,u,h;if(n instanceof Vt)u=ln(n.firestore,Bs),h=Tc(n._key.path),c={next:f=>{e[o]&&e[o](xw(u,n,f))},error:e[o+1],complete:e[o+2]};else{const f=ln(n,Ys);u=ln(f.firestore,Bs),h=f._query;const g=new bf(u);c={next:m=>{e[o]&&e[o](new Ow(u,g,f,m))},error:e[o+1],complete:e[o+2]},Sw(n._query)}return function(g,m,w,P){const S=new _f(P),x=new gf(m,S,w);return g.asyncQueue.enqueueAndForget(async()=>df(await ql(g),x)),()=>{S.eu(),g.asyncQueue.enqueueAndForget(async()=>ff(await ql(g),x))}}(Oc(u),h,a,c)}function Pf(n,e){return function(s,r){const i=new as;return s.asyncQueue.enqueueAndForget(async()=>Wx(await tM(s),r,i)),i.promise}(Oc(n),e)}function xw(n,e,t){const s=t.docs.get(e._key),r=new bf(n);return new Nw(n,r,e._key,s,new lo(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){bi=r})(Hs),Bn(new wn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new Bs(new yO(s.getProvider("auth-internal")),new wO(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Yt(wm,"4.7.5",e),Yt(wm,"4.7.5","esm2017")})();/**
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
 */const Mw="firebasestorage.googleapis.com",wM="storageBucket",IM=2*60*1e3,AM=10*60*1e3;/**
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
 */class Wn extends qn{constructor(e,t,s=0){super(Ou(e),`Firebase Storage: ${t} (${Ou(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ou(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var jn;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(jn||(jn={}));function Ou(n){return"storage/"+n}function RM(){const n="An unknown error occurred, please check the error payload for server response.";return new Wn(jn.UNKNOWN,n)}function CM(){return new Wn(jn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bM(){return new Wn(jn.CANCELED,"User canceled the upload/download.")}function SM(n){return new Wn(jn.INVALID_URL,"Invalid URL '"+n+"'.")}function PM(n){return new Wn(jn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function p_(n){return new Wn(jn.INVALID_ARGUMENT,n)}function Lw(){return new Wn(jn.APP_DELETED,"The Firebase app was deleted.")}function kM(n){return new Wn(jn.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class mn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=mn.makeFromUrl(e,t)}catch{return new mn(e,"")}if(s.path==="")return s;throw PM(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(L){L.path_=decodeURIComponent(L.path)}const h="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${r}/o${g}`,"i"),w={bucket:1,path:3},P=t===Mw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,S="([^?#]*)",x=new RegExp(`^https?://${P}/${r}/${S}`,"i"),D=[{regex:a,indices:c,postModify:i},{regex:m,indices:w,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let L=0;L<D.length;L++){const te=D[L],ne=te.regex.exec(e);if(ne){const C=ne[te.indices.bucket];let y=ne[te.indices.path];y||(y=""),s=new mn(C,y),te.postModify(s);break}}if(s==null)throw SM(e);return s}}class NM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function OM(n,e,t){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...S){u||(u=!0,e.apply(null,S))}function f(S){r=setTimeout(()=>{r=null,n(m,c())},S)}function g(){i&&clearTimeout(i)}function m(S,...x){if(u){g();return}if(S){g(),h.call(null,S,...x);return}if(c()||o){g(),h.call(null,S,...x);return}s<64&&(s*=2);let D;a===1?(a=2,D=0):D=(s+Math.random())*1e3,f(D)}let w=!1;function P(S){w||(w=!0,g(),!u&&(r!==null?(S||(a=2),clearTimeout(r),f(0)):S||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,P(!0)},t),P}function DM(n){n(!1)}/**
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
 */function xM(n){return n!==void 0}function g_(n,e,t,s){if(s<e)throw p_(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw p_(`Invalid value for '${n}'. Expected ${t} or less.`)}function MM(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var Hl;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Hl||(Hl={}));/**
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
 */function LM(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
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
 */class VM{constructor(e,t,s,r,i,o,a,c,u,h,f,g=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,w)=>{this.resolve_=m,this.reject_=w,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new Ha(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Hl.NO_ERROR,c=i.getStatus();if(!a||LM(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Hl.ABORT;s(!1,new Ha(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Ha(u,i))})},t=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());xM(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=RM();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?Lw():bM();o(c)}else{const c=CM();o(c)}};this.canceled_?t(!1,new Ha(!1,null,!0)):this.backoffId_=OM(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ha{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function FM(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function UM(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BM(n,e){e&&(n["X-Firebase-GMPID"]=e)}function $M(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function jM(n,e,t,s,r,i,o=!0){const a=MM(n.urlParams),c=n.url+a,u=Object.assign({},n.headers);return BM(u,e),FM(u,t),UM(u,i),$M(u,s),new VM(c,n.method,u,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,o)}/**
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
 */function qM(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function WM(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Kl{constructor(e,t){this._service=e,t instanceof mn?this._location=t:this._location=mn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Kl(e,t)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WM(this._location.path)}get storage(){return this._service}get parent(){const e=qM(this._location.path);if(e===null)return null;const t=new mn(this._location.bucket,e);return new Kl(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw kM(e)}}function m_(n,e){const t=e==null?void 0:e[wM];return t==null?null:mn.makeFromBucketSpec(t,n)}class HM{constructor(e,t,s,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Mw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IM,this._maxUploadRetryTime=AM,this._requests=new Set,r!=null?this._bucket=mn.makeFromBucketSpec(r,this._host):this._bucket=m_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=m_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){g_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){g_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Kl(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new NM(Lw());{const o=jM(e,this._appId,s,r,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const __="@firebase/storage",y_="0.13.4";/**
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
 */const KM="storage";function GM(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new HM(t,s,r,e,Hs)}function zM(){Bn(new wn(KM,GM,"PUBLIC").setMultipleInstances(!0)),Yt(__,y_,""),Yt(__,y_,"esm2017")}zM();const Du=new WeakMap;function Vw(n,e){return Du.has(e)||Du.set(e,{f:{},r:{},s:{},u:{}}),Du.get(e)}function QM(n,e,t,s){if(!n)return t;const[r,i]=Fw(n);if(!r)return t;const o=Vw(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:t}function YM(n,e,t,s){if(!n)return;const[r,i]=Fw(n);if(!r)return;const o=Vw(void 0,s)[r],a=e||i;if(a)return t.then(c=>{o[a]=c}).catch(On),a}function Fw(n){return Tk(n)||wk(n)?["f",n.path]:Ik(n)?["r",n.toString()]:Ak(n)?["s",n.toString()]:[]}const xu=new WeakMap;function XM(n,e,t){const s=sa();xu.has(s)||xu.set(s,new Map);const r=xu.get(s),i=YM(e,t,n,s);return i&&r.set(i,n),i?()=>r.delete(i):On}const JM={toFirestore(n){return n},fromFirestore(n,e){return n.exists()?Object.defineProperties(n.data(e),{id:{value:n.id}}):null}};function Bh(n,e,t,s){if(!Ek(n))return[n,{}];const r=[{},{}],i=Object.keys(t).reduce((a,c)=>{const u=t[c];return a[u.path]=u.data(),a},{});function o(a,c,u,h){c=c||{};const[f,g]=h;Object.getOwnPropertyNames(a).forEach(m=>{const w=Object.getOwnPropertyDescriptor(a,m);w&&!w.enumerable&&Object.defineProperty(f,m,w)});for(const m in a){const w=a[m];if(w==null||w instanceof Date||w instanceof et||w instanceof xc)f[m]=w;else if(Ad(w)){const P=u+m;f[m]=P in t?c[m]:w.path,g[P]=w.converter?w:w.withConverter(s.converter)}else if(Array.isArray(w)){f[m]=Array(w.length);for(let P=0;P<w.length;P++){const S=w[P];S&&S.path in i&&(f[m][P]=i[S.path])}o(w,c[m]||f[m],u+m+".",[f[m],g])}else Ir(w)?(f[m]={},o(w,c[m],u+m+".",[f[m],g])):f[m]=w}}return o(n,e,"",r),r}const kf={reset:!1,wait:!0,maxRefDepth:2,converter:JM,snapshotOptions:{serverTimestamps:"estimate"}};function Gl(n){for(const e in n)n[e].unsub()}function $h(n,e,t,s,r,i,o,a,c){const[u,h]=Bh(s.data(n.snapshotOptions),Id(e,t),r,n);i.set(e,t,u),jh(n,e,t,r,h,i,o,a,c)}function ZM({ref:n,target:e,path:t,depth:s,resolve:r,reject:i,ops:o},a){const c=Object.create(null);let u=On;return a.once?Dw(n).then(h=>{h.exists()?$h(a,e,t,h,c,o,s,r,i):(o.set(e,t,null),r())}).catch(i):u=Sf(n,h=>{h.exists()?$h(a,e,t,h,c,o,s,r,i):(o.set(e,t,null),r())},i),()=>{u(),Gl(c)}}function jh(n,e,t,s,r,i,o,a,c){const u=Object.keys(r);if(Object.keys(s).filter(P=>u.indexOf(P)<0).forEach(P=>{s[P].unsub(),delete s[P]}),!u.length||++o>n.maxRefDepth)return a(t);let f=0;const g=u.length,m=Object.create(null);function w(P){P in m&&++f>=g&&a(t)}u.forEach(P=>{const S=s[P],x=r[P],M=`${t}.${P}`;if(m[M]=!0,S)if(S.path!==x.path)S.unsub();else return;s[P]={data:()=>Id(e,M),unsub:ZM({ref:x,target:e,path:M,depth:o,ops:i,resolve:w.bind(null,M),reject:c},n),path:x.path}})}function eL(n,e,t,s,r,i){const o=Object.assign({},kf,i),{snapshotListenOptions:a,snapshotOptions:c,wait:u,once:h}=o,f="value";let g=nt(u?[]:n.value);u||t.set(n,f,[]);const m=s;let w,P=On;const S=[],x={added:({newIndex:D,doc:L})=>{S.splice(D,0,Object.create(null));const te=S[D],[ne,C]=Bh(L.data(c),void 0,te,o);t.add(Qn(g),D,ne),jh(o,g,`${f}.${D}`,te,C,t,0,s.bind(null,L),r)},modified:({oldIndex:D,newIndex:L,doc:te})=>{const ne=Qn(g),C=S[D],y=ne[D],[E,R]=Bh(te.data(c),y,C,o);S.splice(L,0,C),t.remove(ne,D),t.add(ne,L,E),jh(o,g,`${f}.${L}`,C,R,t,0,s,r)},removed:({oldIndex:D})=>{const L=Qn(g);t.remove(L,D),Gl(S.splice(D,1)[0])}};function M(D){const L=D.docChanges(a);if(!w&&L.length){w=!0;let te=0;const ne=L.length,C=Object.create(null);for(let y=0;y<ne;y++)C[L[y].doc.id]=!0;s=y=>{y&&y.id in C&&++te>=ne&&(u&&(t.set(n,f,Qn(g)),g=n),m(Qn(g)),s=On)}}L.forEach(te=>{x[te.type](te)}),L.length||(u&&(t.set(n,f,Qn(g)),g=n),s(Qn(g)))}return h?vM(e).then(M).catch(r):P=Sf(e,M,r),D=>{if(P(),D){const L=typeof D=="function"?D():[];t.set(n,f,L)}S.forEach(Gl)}}function tL(n,e,t,s,r,i){const o=Object.assign({},kf,i),a="value",c=Object.create(null);s=Rk(s,()=>Id(n,a));let u=On;function h(f){f.exists()?$h(o,n,a,f,c,t,0,s,r):(t.set(n,a,null),s(null))}return o.once?Dw(e).then(h).catch(r):u=Sf(e,h,r),f=>{if(u(),f){const g=typeof f=="function"?f():null;t.set(n,a,g)}Gl(c)}}const E_=Symbol();function nL(n,e){let t=On;const s=Object.assign({},kf,e),r=Qn(n),i=s.target||nt();bk()&&(s.once=!0);const o=QM(r,s.ssrKey,E_,sa()),a=o!==E_;a&&(i.value=o);let c=!a;const u=nt(!1),h=nt(),f=uy(),g=G_();let m=On;function w(){let x=Qn(n);const M=new Promise((D,L)=>{if(t(s.reset),!x)return t=On,D(null);u.value=c,c=!0,x.converter||(x=x.withConverter(s.converter)),t=(Ad(x)?tL:eL)(i,x,sL,D,L,s)}).catch(D=>(f.value===M&&(h.value=D),Promise.reject(D))).finally(()=>{f.value===M&&(u.value=!1)});f.value=M}let P=On;(mt(n)||typeof n=="function")&&(P=Yr(n,w)),w(),r&&(m=XM(f.value,r,s.ssrKey)),cd()&&Cy(()=>f.value),g&&FI(S);function S(x=s.reset){P(),m(),t(x)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>S}})}const sL={set:(n,e,t)=>_k(n,e,t),add:(n,e,t)=>n.splice(e,0,t),remove:(n,e)=>n.splice(e,1)};function v_(n,e){return nL(n,{target:nt([]),...e})}function rL(n){return Tw(sa(n))}function iL(n){return oL({initialUser:n,dependencies:{popupRedirectResolver:FP,persistence:[YS,FS,qE]}})}const Uw=Symbol("VueFireAuth");function oL({dependencies:n,initialUser:e}){return(t,s)=>{const[r,i]=aL(t,s,e,n);kk(r,i)}}function aL(n,e,t,s,r=vS(n,s)){const i=Sk(n,e).run(()=>nt(t));return ev.set(n,i),e.provide(Uw,r),[i,r]}function Bw(n){return mk?Qt(Uw):null}function lL(n,{firebaseApp:e,modules:t=[]}){n.provide(ZE,e);for(const s of t)s(e,n)}const $w=fE({apiKey:"AIzaSyCiapqiZ9cipr5J5nsFO-9QAPHxhLVbYGg",authDomain:"testfirestore-3008a.firebaseapp.com",projectId:"testfirestore-3008a",storageBucket:"testfirestore-3008a.firebasestorage.app",messagingSenderId:"637057058433",appId:"1:637057058433:web:99756c698dd93d1a99ef80",measurementId:"G-VLE84RDSCD"}),cL=Tw($w);ol(cL,"Recordatorios");/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const $r=typeof document<"u";function jw(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function uL(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&jw(n.default)}const Pe=Object.assign;function Mu(n,e){const t={};for(const s in e){const r=e[s];t[s]=Rn(r)?r.map(n):n(r)}return t}const Ro=()=>{},Rn=Array.isArray,qw=/#/g,hL=/&/g,dL=/\//g,fL=/=/g,pL=/\?/g,Ww=/\+/g,gL=/%5B/g,mL=/%5D/g,Hw=/%5E/g,_L=/%60/g,Kw=/%7B/g,yL=/%7C/g,Gw=/%7D/g,EL=/%20/g;function Nf(n){return encodeURI(""+n).replace(yL,"|").replace(gL,"[").replace(mL,"]")}function vL(n){return Nf(n).replace(Kw,"{").replace(Gw,"}").replace(Hw,"^")}function qh(n){return Nf(n).replace(Ww,"%2B").replace(EL,"+").replace(qw,"%23").replace(hL,"%26").replace(_L,"`").replace(Kw,"{").replace(Gw,"}").replace(Hw,"^")}function TL(n){return qh(n).replace(fL,"%3D")}function wL(n){return Nf(n).replace(qw,"%23").replace(pL,"%3F")}function IL(n){return n==null?"":wL(n).replace(dL,"%2F")}function zo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const AL=/\/$/,RL=n=>n.replace(AL,"");function Lu(n,e,t="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=n(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=PL(s??e,t),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:zo(o)}}function CL(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function T_(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function bL(n,e,t){const s=e.matched.length-1,r=t.matched.length-1;return s>-1&&s===r&&yi(e.matched[s],t.matched[r])&&zw(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function yi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function zw(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!SL(n[t],e[t]))return!1;return!0}function SL(n,e){return Rn(n)?w_(n,e):Rn(e)?w_(e,n):n===e}function w_(n,e){return Rn(e)?n.length===e.length&&n.every((t,s)=>t===e[s]):n.length===1&&n[0]===e}function PL(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),s=n.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=t.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Ts={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Qo;(function(n){n.pop="pop",n.push="push"})(Qo||(Qo={}));var Co;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Co||(Co={}));function kL(n){if(!n)if($r){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),RL(n)}const NL=/^[^#]+#/;function OL(n,e){return n.replace(NL,"#")+e}function DL(n,e){const t=document.documentElement.getBoundingClientRect(),s=n.getBoundingClientRect();return{behavior:e.behavior,left:s.left-t.left-(e.left||0),top:s.top-t.top-(e.top||0)}}const Fc=()=>({left:window.scrollX,top:window.scrollY});function xL(n){let e;if("el"in n){const t=n.el,s=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=DL(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function I_(n,e){return(history.state?history.state.position-e:-1)+n}const Wh=new Map;function ML(n,e){Wh.set(n,e)}function LL(n){const e=Wh.get(n);return Wh.delete(n),e}let VL=()=>location.protocol+"//"+location.host;function Qw(n,e){const{pathname:t,search:s,hash:r}=e,i=n.indexOf("#");if(i>-1){let a=r.includes(n.slice(i))?n.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),T_(c,"")}return T_(t,n)+s+r}function FL(n,e,t,s){let r=[],i=[],o=null;const a=({state:g})=>{const m=Qw(n,location),w=t.value,P=e.value;let S=0;if(g){if(t.value=m,e.value=g,o&&o===w){o=null;return}S=P?g.position-P.position:0}else s(m);r.forEach(x=>{x(t.value,w,{delta:S,type:Qo.pop,direction:S?S>0?Co.forward:Co.back:Co.unknown})})};function c(){o=t.value}function u(g){r.push(g);const m=()=>{const w=r.indexOf(g);w>-1&&r.splice(w,1)};return i.push(m),m}function h(){const{history:g}=window;g.state&&g.replaceState(Pe({},g.state,{scroll:Fc()}),"")}function f(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function A_(n,e,t,s=!1,r=!1){return{back:n,current:e,forward:t,replaced:s,position:window.history.length,scroll:r?Fc():null}}function UL(n){const{history:e,location:t}=window,s={value:Qw(n,t)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=n.indexOf("#"),g=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+c:VL()+n+c;try{e[h?"replaceState":"pushState"](u,"",g),r.value=u}catch(m){console.error(m),t[h?"replace":"assign"](g)}}function o(c,u){const h=Pe({},e.state,A_(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=Pe({},r.value,e.state,{forward:c,scroll:Fc()});i(h.current,h,!0);const f=Pe({},A_(s.value,c,null),{position:h.position+1},u);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function BL(n){n=kL(n);const e=UL(n),t=FL(n,e.state,e.location,e.replace);function s(i,o=!0){o||t.pauseListeners(),history.go(i)}const r=Pe({location:"",base:n,go:s,createHref:OL.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function $L(n){return typeof n=="string"||n&&typeof n=="object"}function Yw(n){return typeof n=="string"||typeof n=="symbol"}const Xw=Symbol("");var R_;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(R_||(R_={}));function Ei(n,e){return Pe(new Error,{type:n,[Xw]:!0},e)}function zn(n,e){return n instanceof Error&&Xw in n&&(e==null||!!(n.type&e))}const C_="[^/]+?",jL={sensitive:!1,strict:!1,start:!0,end:!0},qL=/[.+*?^${}()[\]/\\]/g;function WL(n,e){const t=Pe({},jL,e),s=[];let r=t.start?"^":"";const i=[];for(const u of n){const h=u.length?[]:[90];t.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const g=u[f];let m=40+(t.sensitive?.25:0);if(g.type===0)f||(r+="/"),r+=g.value.replace(qL,"\\$&"),m+=40;else if(g.type===1){const{value:w,repeatable:P,optional:S,regexp:x}=g;i.push({name:w,repeatable:P,optional:S});const M=x||C_;if(M!==C_){m+=10;try{new RegExp(`(${M})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${w}" (${M}): `+L.message)}}let D=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(D=S&&u.length<2?`(?:/${D})`:"/"+D),S&&(D+="?"),r+=D,m+=20,S&&(m+=-8),P&&(m+=-20),M===".*"&&(m+=-50)}h.push(m)}s.push(h)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let g=1;g<h.length;g++){const m=h[g]||"",w=i[g-1];f[w.name]=m&&w.repeatable?m.split("/"):m}return f}function c(u){let h="",f=!1;for(const g of n){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of g)if(m.type===0)h+=m.value;else if(m.type===1){const{value:w,repeatable:P,optional:S}=m,x=w in u?u[w]:"";if(Rn(x)&&!P)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const M=Rn(x)?x.join("/"):x;if(!M)if(S)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${w}"`);h+=M}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function HL(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=e[t]-n[t];if(s)return s;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Jw(n,e){let t=0;const s=n.score,r=e.score;for(;t<s.length&&t<r.length;){const i=HL(s[t],r[t]);if(i)return i;t++}if(Math.abs(r.length-s.length)===1){if(b_(s))return 1;if(b_(r))return-1}return r.length-s.length}function b_(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const KL={type:0,value:""},GL=/[a-zA-Z0-9_]/;function zL(n){if(!n)return[[]];if(n==="/")return[[KL]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${u}": ${m}`)}let t=0,s=t;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),t=1):g();break;case 4:g(),t=s;break;case 1:c==="("?t=2:GL.test(c)?g():(f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:t=3:h+=c;break;case 3:f(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function QL(n,e,t){const s=WL(zL(n.path),t),r=Pe(s,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function YL(n,e){const t=[],s=new Map;e=N_({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,g,m){const w=!m,P=P_(f);P.aliasOf=m&&m.record;const S=N_(e,f),x=[P];if("alias"in f){const L=typeof f.alias=="string"?[f.alias]:f.alias;for(const te of L)x.push(P_(Pe({},P,{components:m?m.record.components:P.components,path:te,aliasOf:m?m.record:P})))}let M,D;for(const L of x){const{path:te}=L;if(g&&te[0]!=="/"){const ne=g.record.path,C=ne[ne.length-1]==="/"?"":"/";L.path=g.record.path+(te&&C+te)}if(M=QL(L,g,S),m?m.alias.push(M):(D=D||M,D!==M&&D.alias.push(M),w&&f.name&&!k_(M)&&o(f.name)),Zw(M)&&c(M),P.children){const ne=P.children;for(let C=0;C<ne.length;C++)i(ne[C],M,m&&m.children[C])}m=m||M}return D?()=>{o(D)}:Ro}function o(f){if(Yw(f)){const g=s.get(f);g&&(s.delete(f),t.splice(t.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=t.indexOf(f);g>-1&&(t.splice(g,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function c(f){const g=ZL(f,t);t.splice(g,0,f),f.record.name&&!k_(f)&&s.set(f.record.name,f)}function u(f,g){let m,w={},P,S;if("name"in f&&f.name){if(m=s.get(f.name),!m)throw Ei(1,{location:f});S=m.record.name,w=Pe(S_(g.params,m.keys.filter(D=>!D.optional).concat(m.parent?m.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),f.params&&S_(f.params,m.keys.map(D=>D.name))),P=m.stringify(w)}else if(f.path!=null)P=f.path,m=t.find(D=>D.re.test(P)),m&&(w=m.parse(P),S=m.record.name);else{if(m=g.name?s.get(g.name):t.find(D=>D.re.test(g.path)),!m)throw Ei(1,{location:f,currentLocation:g});S=m.record.name,w=Pe({},g.params,f.params),P=m.stringify(w)}const x=[];let M=m;for(;M;)x.unshift(M.record),M=M.parent;return{name:S,path:P,params:w,matched:x,meta:JL(x)}}n.forEach(f=>i(f));function h(){t.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function S_(n,e){const t={};for(const s of e)s in n&&(t[s]=n[s]);return t}function P_(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:XL(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function XL(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const s in n.components)e[s]=typeof t=="object"?t[s]:t;return e}function k_(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function JL(n){return n.reduce((e,t)=>Pe(e,t.meta),{})}function N_(n,e){const t={};for(const s in n)t[s]=s in e?e[s]:n[s];return t}function ZL(n,e){let t=0,s=e.length;for(;t!==s;){const i=t+s>>1;Jw(n,e[i])<0?s=i:t=i+1}const r=eV(n);return r&&(s=e.lastIndexOf(r,s-1)),s}function eV(n){let e=n;for(;e=e.parent;)if(Zw(e)&&Jw(n,e)===0)return e}function Zw({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function tV(n){const e={};if(n===""||n==="?")return e;const s=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Ww," "),o=i.indexOf("="),a=zo(o<0?i:i.slice(0,o)),c=o<0?null:zo(i.slice(o+1));if(a in e){let u=e[a];Rn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function O_(n){let e="";for(let t in n){const s=n[t];if(t=TL(t),s==null){s!==void 0&&(e+=(e.length?"&":"")+t);continue}(Rn(s)?s.map(i=>i&&qh(i)):[s&&qh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function nV(n){const e={};for(const t in n){const s=n[t];s!==void 0&&(e[t]=Rn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const sV=Symbol(""),D_=Symbol(""),Uc=Symbol(""),eI=Symbol(""),Hh=Symbol("");function Ji(){let n=[];function e(s){return n.push(s),()=>{const r=n.indexOf(s);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Rs(n,e,t,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=g=>{g===!1?c(Ei(4,{from:t,to:e})):g instanceof Error?c(g):$L(g)?c(Ei(2,{from:e,to:g})):(o&&s.enterCallbacks[r]===o&&typeof g=="function"&&o.push(g),a())},h=i(()=>n.call(s&&s.instances[r],e,t,u));let f=Promise.resolve(h);n.length<3&&(f=f.then(u)),f.catch(g=>c(g))})}function Vu(n,e,t,s,r=i=>i()){const i=[];for(const o of n)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(jw(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Rs(h,t,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=uL(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&Rs(m,t,s,o,a,r)()}))}}return i}function x_(n){const e=Qt(Uc),t=Qt(eI),s=nn(()=>{const c=on(n.to);return e.resolve(c)}),r=nn(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=t.matched;if(!h||!f.length)return-1;const g=f.findIndex(yi.bind(null,h));if(g>-1)return g;const m=M_(c[u-2]);return u>1&&M_(h)===m&&f[f.length-1].path!==m?f.findIndex(yi.bind(null,c[u-2])):g}),i=nn(()=>r.value>-1&&lV(t.params,s.value.params)),o=nn(()=>r.value>-1&&r.value===t.matched.length-1&&zw(t.params,s.value.params));function a(c={}){if(aV(c)){const u=e[on(n.replace)?"replace":"push"](on(n.to)).catch(Ro);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:nn(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function rV(n){return n.length===1?n[0]:n}const iV=vy({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:x_,setup(n,{slots:e}){const t=ec(x_(n)),{options:s}=Qt(Uc),r=nn(()=>({[L_(n.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[L_(n.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&rV(e.default(t));return n.custom?i:Qy("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},i)}}}),oV=iV;function aV(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function lV(n,e){for(const t in e){const s=e[t],r=n[t];if(typeof s=="string"){if(s!==r)return!1}else if(!Rn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function M_(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const L_=(n,e,t)=>n??e??t,cV=vy({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const s=Qt(Hh),r=nn(()=>n.route||s.value),i=Qt(D_,0),o=nn(()=>{let u=on(i);const{matched:h}=r.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=nn(()=>r.value.matched[o.value]);Ga(D_,nn(()=>o.value+1)),Ga(sV,a),Ga(Hh,r);const c=nt();return Yr(()=>[c.value,a.value,n.name],([u,h,f],[g,m,w])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!yi(h,m)||!g)&&(h.enterCallbacks[f]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=r.value,h=n.name,f=a.value,g=f&&f.components[h];if(!g)return V_(t.default,{Component:g,route:u});const m=f.props[h],w=m?m===!0?u.params:typeof m=="function"?m(u):m:null,S=Qy(g,Pe({},w,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return V_(t.default,{Component:S,route:u})||S}}});function V_(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const uV=cV;function hV(n){const e=YL(n.routes,n),t=n.parseQuery||tV,s=n.stringifyQuery||O_,r=n.history,i=Ji(),o=Ji(),a=Ji(),c=uy(Ts);let u=Ts;$r&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Mu.bind(null,V=>""+V),f=Mu.bind(null,IL),g=Mu.bind(null,zo);function m(V,J){let Q,se;return Yw(V)?(Q=e.getRecordMatcher(V),se=J):se=V,e.addRoute(se,Q)}function w(V){const J=e.getRecordMatcher(V);J&&e.removeRoute(J)}function P(){return e.getRoutes().map(V=>V.record)}function S(V){return!!e.getRecordMatcher(V)}function x(V,J){if(J=Pe({},J||c.value),typeof V=="string"){const k=Lu(t,V,J.path),F=e.resolve({path:k.path},J),j=r.createHref(k.fullPath);return Pe(k,F,{params:g(F.params),hash:zo(k.hash),redirectedFrom:void 0,href:j})}let Q;if(V.path!=null)Q=Pe({},V,{path:Lu(t,V.path,J.path).path});else{const k=Pe({},V.params);for(const F in k)k[F]==null&&delete k[F];Q=Pe({},V,{params:f(k)}),J.params=f(J.params)}const se=e.resolve(Q,J),Ce=V.hash||"";se.params=h(g(se.params));const T=CL(s,Pe({},V,{hash:vL(Ce),path:se.path})),I=r.createHref(T);return Pe({fullPath:T,hash:Ce,query:s===O_?nV(V.query):V.query||{}},se,{redirectedFrom:void 0,href:I})}function M(V){return typeof V=="string"?Lu(t,V,c.value.path):Pe({},V)}function D(V,J){if(u!==V)return Ei(8,{from:J,to:V})}function L(V){return C(V)}function te(V){return L(Pe(M(V),{replace:!0}))}function ne(V){const J=V.matched[V.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let se=typeof Q=="function"?Q(V):Q;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=M(se):{path:se},se.params={}),Pe({query:V.query,hash:V.hash,params:se.path!=null?{}:V.params},se)}}function C(V,J){const Q=u=x(V),se=c.value,Ce=V.state,T=V.force,I=V.replace===!0,k=ne(Q);if(k)return C(Pe(M(k),{state:typeof k=="object"?Pe({},Ce,k.state):Ce,force:T,replace:I}),J||Q);const F=Q;F.redirectedFrom=J;let j;return!T&&bL(s,se,Q)&&(j=Ei(16,{to:F,from:se}),Jt(se,se,!0,!1)),(j?Promise.resolve(j):R(F,se)).catch(U=>zn(U)?zn(U,2)?U:dn(U):_e(U,F,se)).then(U=>{if(U){if(zn(U,2))return C(Pe({replace:I},M(U.to),{state:typeof U.to=="object"?Pe({},Ce,U.to.state):Ce,force:T}),J||F)}else U=A(F,se,!0,I,Ce);return b(F,se,U),U})}function y(V,J){const Q=D(V,J);return Q?Promise.reject(Q):Promise.resolve()}function E(V){const J=ps.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(V):V()}function R(V,J){let Q;const[se,Ce,T]=dV(V,J);Q=Vu(se.reverse(),"beforeRouteLeave",V,J);for(const k of se)k.leaveGuards.forEach(F=>{Q.push(Rs(F,V,J))});const I=y.bind(null,V,J);return Q.push(I),Ft(Q).then(()=>{Q=[];for(const k of i.list())Q.push(Rs(k,V,J));return Q.push(I),Ft(Q)}).then(()=>{Q=Vu(Ce,"beforeRouteUpdate",V,J);for(const k of Ce)k.updateGuards.forEach(F=>{Q.push(Rs(F,V,J))});return Q.push(I),Ft(Q)}).then(()=>{Q=[];for(const k of T)if(k.beforeEnter)if(Rn(k.beforeEnter))for(const F of k.beforeEnter)Q.push(Rs(F,V,J));else Q.push(Rs(k.beforeEnter,V,J));return Q.push(I),Ft(Q)}).then(()=>(V.matched.forEach(k=>k.enterCallbacks={}),Q=Vu(T,"beforeRouteEnter",V,J,E),Q.push(I),Ft(Q))).then(()=>{Q=[];for(const k of o.list())Q.push(Rs(k,V,J));return Q.push(I),Ft(Q)}).catch(k=>zn(k,8)?k:Promise.reject(k))}function b(V,J,Q){a.list().forEach(se=>E(()=>se(V,J,Q)))}function A(V,J,Q,se,Ce){const T=D(V,J);if(T)return T;const I=J===Ts,k=$r?history.state:{};Q&&(se||I?r.replace(V.fullPath,Pe({scroll:I&&k&&k.scroll},Ce)):r.push(V.fullPath,Ce)),c.value=V,Jt(V,J,Q,I),dn()}let v;function De(){v||(v=r.listen((V,J,Q)=>{if(!Cn.listening)return;const se=x(V),Ce=ne(se);if(Ce){C(Pe(Ce,{replace:!0,force:!0}),se).catch(Ro);return}u=se;const T=c.value;$r&&ML(I_(T.fullPath,Q.delta),Fc()),R(se,T).catch(I=>zn(I,12)?I:zn(I,2)?(C(Pe(M(I.to),{force:!0}),se).then(k=>{zn(k,20)&&!Q.delta&&Q.type===Qo.pop&&r.go(-1,!1)}).catch(Ro),Promise.reject()):(Q.delta&&r.go(-Q.delta,!1),_e(I,se,T))).then(I=>{I=I||A(se,T,!1),I&&(Q.delta&&!zn(I,8)?r.go(-Q.delta,!1):Q.type===Qo.pop&&zn(I,20)&&r.go(-1,!1)),b(se,T,I)}).catch(Ro)}))}let tt=Ji(),We=Ji(),Te;function _e(V,J,Q){dn(V);const se=We.list();return se.length?se.forEach(Ce=>Ce(V,J,Q)):console.error(V),Promise.reject(V)}function qt(){return Te&&c.value!==Ts?Promise.resolve():new Promise((V,J)=>{tt.add([V,J])})}function dn(V){return Te||(Te=!V,De(),tt.list().forEach(([J,Q])=>V?Q(V):J()),tt.reset()),V}function Jt(V,J,Q,se){const{scrollBehavior:Ce}=n;if(!$r||!Ce)return Promise.resolve();const T=!Q&&LL(I_(V.fullPath,0))||(se||!Q)&&history.state&&history.state.scroll||null;return py().then(()=>Ce(V,J,T)).then(I=>I&&xL(I)).catch(I=>_e(I,V,J))}const He=V=>r.go(V);let Ke;const ps=new Set,Cn={currentRoute:c,listening:!0,addRoute:m,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:P,resolve:x,options:n,push:L,replace:te,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:We.add,isReady:qt,install(V){const J=this;V.component("RouterLink",oV),V.component("RouterView",uV),V.config.globalProperties.$router=J,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>on(c)}),$r&&!Ke&&c.value===Ts&&(Ke=!0,L(r.location).catch(Ce=>{}));const Q={};for(const Ce in Ts)Object.defineProperty(Q,Ce,{get:()=>c.value[Ce],enumerable:!0});V.provide(Uc,J),V.provide(eI,ly(Q)),V.provide(Hh,c);const se=V.unmount;ps.add(V),V.unmount=function(){ps.delete(V),ps.size<1&&(u=Ts,v&&v(),v=null,c.value=Ts,Ke=!1,Te=!1),se()}}};function Ft(V){return V.reduce((J,Q)=>J.then(()=>E(Q)),Promise.resolve())}return Cn}function dV(n,e){const t=[],s=[],r=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>yi(u,a))?s.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>yi(u,c))||r.push(c))}return[t,s,r]}function Of(){return Qt(Uc)}const fV={class:"container"},pV={key:1},gV={class:"error"},mV={class:"error"},tI={__name:"login",setup(n){const e=Bw(),t=Of(),s=dc(),r=new Zn,i=new es,o=nt(""),a=nt("");var c=nt(""),u=nt("");function h(){t.push("/register")}function f(){c.value="",u.value="",UE(e,o.value,a.value).then(()=>{t.push("/reminder")}).catch(P=>{switch(P.code){case"auth/invalid-credential":u.value="Incorrect password";break;default:console.error("Error en el registro:",P);break}})}function g(){Sg(e,r).then(()=>{t.push("/reminder"),console.log("Validación correcta")}).catch(()=>{console.error("Failed sign")})}function m(){Sg(e,i).then(()=>t.push("/reminder")).catch(P=>{console.error("Error en el inicio de sesión con GitHub:",P),errorMessage.value="No se pudo iniciar sesión con GitHub."})}function w(){MS(e).then(()=>{t.push("/")}).catch(console.log("Error"))}return(P,S)=>{const x=ii("RouterLink"),M=ii("RouterView");return Lt(),an("div",fV,[on(s)?(Lt(),an("button",{key:0,onClick:w,class:"logout"},"Log out")):(Lt(),an("div",pV,[X("form",{onSubmit:S[2]||(S[2]=tE((...D)=>P.login&&P.login(...D),["prevent"]))},[S[3]||(S[3]=X("label",{for:"email"},"Email",-1)),zr(X("input",{id:"email",type:"email","onUpdate:modelValue":S[0]||(S[0]=D=>o.value=D),placeholder:"Email...",onKeyup:Do(f,["enter"])},null,544),[[Xr,o.value]]),X("p",gV,Nn(on(c)),1),S[4]||(S[4]=X("label",{for:"password"},"Password",-1)),zr(X("input",{id:"password",type:"password","onUpdate:modelValue":S[1]||(S[1]=D=>a.value=D),placeholder:"Password...",onKeyup:Do(f,["enter"])},null,544),[[Xr,a.value]]),X("p",mV,Nn(on(u)),1),X("button",{class:"log",type:"submit",onClick:f},"Login"),S[5]||(S[5]=X("p",{class:"regP"},"If you haven't registered yet, don't hesitate to join us",-1)),X("button",{class:"reg",type:"button",onClick:h},"Sign up")],32),Ge(x,{to:"/",class:"back"},{default:ri(()=>S[6]||(S[6]=[X("i",{class:"fa-solid fa-angle-left"},null,-1),Bt(" Back")])),_:1}),Ge(M),X("div",{onClick:g,class:"social"},S[7]||(S[7]=[X("i",{class:"fa-brands fa-google"},null,-1),Bt(" Login With Google")])),X("div",{onClick:m,class:"social"},S[8]||(S[8]=[X("i",{class:"fa-brands fa-github"},null,-1),Bt(" Login With Github")]))]))])}}},_V={__name:"App",setup(n){return Of().beforeEach(async(t,s)=>t.meta.requiresAuth?!!await Pk():!0),(t,s)=>{const r=ii("RouterView");return Lt(),Qu(r)}}},yV={class:"body"},EV={class:"login"},vV={__name:"landig",setup(n){const e=dc();return(t,s)=>{const r=ii("RouterLink"),i=ii("RouterView");return Lt(),an("div",yV,[s[2]||(s[2]=X("div",{class:"bg-1"},[X("h1",{class:"glitch","data-text":"DON'T FORGET ANYTHING"},"DON'T FORGET ANYTHING")],-1)),X("button",EV,[on(e)?(Lt(),Qu(r,{key:0,to:"/reminder",class:"login-link"},{default:ri(()=>s[0]||(s[0]=[Bt("DISCOVER")])),_:1})):(Lt(),Qu(r,{key:1,to:"/login",class:"login-link"},{default:ri(()=>s[1]||(s[1]=[Bt("DISCOVER")])),_:1}))]),Ge(i),s[3]||(s[3]=X("div",{class:"info"},[X("div",null,[X("h2",null,"Task Management"),X("p",null,"With this website, you can write down all your tasks, assign them a priority, and monitor their progress or delays.")]),X("div",null,[X("h2",null,"Learning Vue"),X("p",null,"This project was built using the Vue framework as a learning exercise to understand its functionalities.")]),X("div",null,[X("h2",null,"Powered by Firebase"),X("p",null,"Google Firebase was used for the database and hosting, ensuring a robust and scalable solution.")])],-1))])}}},Bc=(n,e)=>{const t=n.__vccOpts||n;for(const[s,r]of e)t[s]=r;return t},TV={__name:"task",emits:["add-task"],setup(n,{emit:e}){const t=nt(""),s=e,r=dc();function i(){t.value!==""&&(s("add-task",{concept:t.value,priority:2,time:Date.now(),done:!1,user:r.value.uid}),t.value="")}return(o,a)=>(Lt(),an("div",null,[zr(X("input",{class:"inputTask",type:"text",placeholder:"Task...","onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c),onKeyup:Do(i,["enter"])},null,544),[[Xr,t.value]])]))}},wV=Bc(TV,[["__scopeId","data-v-d153af1f"]]),IV={class:"to-doDelete"},AV={class:"list"},RV={class:"taskBox"},CV=["checked","onClick"],bV=["onClick"],SV={class:"data"},PV={class:"priority"},kV=["onClick"],NV=["onClick"],OV=["onClick"],DV={__name:"list",props:{tasks:Array},emits:["deleteAll-done","delete-done","taskChecked-done","changePriority-done"],setup(n,{emit:e}){const t=n,s=e;function r(){s("deleteAll-done")}function i(g){s("delete-done",g)}function o(g){s("taskChecked-done",g)}function a(g,m){t.tasks[g].priority=m,s("changePriority-done",g,m)}const c=nn(()=>t.tasks.filter(g=>g.done).length),u=nt(t.tasks.map(g=>h(g.time)));function h(g){const w=Date.now()-g,P=Math.floor(w/(1e3*60*60*24)),S=Math.floor(w%(1e3*60*60*24)/(1e3*60*60)),x=Math.floor(w%(1e3*60*60)/(1e3*60)),M=[];return P>0&&M.push(`${P} day${P>1?"s":""}`),S>0&&M.push(`${S} hour${S>1?"s":""}`),x>0&&M.push(`${x} minute${x>1?"s":""}`),M.join(", ")||"0 minutes"}function f(){u.value=t.tasks.map(g=>h(g.time))}return id(()=>{f();const g=setInterval(f,6e4);od(()=>clearInterval(g))}),Yr(()=>t.tasks,()=>{f()},{deep:!0}),(g,m)=>(Lt(),an(Mt,null,[X("div",IV,[X("p",null,[m[0]||(m[0]=X("i",{class:"fa-solid fa-chart-simple"},null,-1)),Bt(" "+Nn(t.tasks.length-c.value)+" to-dos from "+Nn(t.tasks.length),1)]),X("p",{class:"delete",onClick:r},m[1]||(m[1]=[X("i",{class:"fa-solid fa-x"},null,-1),Bt(" Delete all tasks ")]))]),X("div",AV,[Ge(jR,{name:"taskG",tag:"div",class:"task-group"},{default:ri(()=>[(Lt(!0),an(Mt,null,PA(t.tasks,(w,P)=>(Lt(),an("div",{class:"task",key:w.id},[X("div",RV,[X("input",{type:"checkbox",class:"Ccheckbox",checked:w.done,onClick:S=>o(P)},null,8,CV),X("h2",{class:ar({completed:w.done})},Nn(w.concept),3),X("div",{onClick:S=>i(w.id)},m[2]||(m[2]=[X("i",{class:"fa-solid fa-trash"},null,-1)]),8,bV)]),X("div",SV,[X("div",PV,[m[5]||(m[5]=X("h3",null,"Priority:",-1)),X("div",{class:ar(["low",{active:w.priority===3}]),onClick:S=>a(P,3)},m[3]||(m[3]=[X("i",{class:"fa-solid fa-angle-down"},null,-1),Bt("Low ")]),10,kV),X("div",{class:ar(["normal",{active:w.priority===2}]),onClick:S=>a(P,2)}," Normal ",10,NV),X("div",{class:ar(["high",{active:w.priority===1}]),onClick:S=>a(P,1)},m[4]||(m[4]=[X("i",{class:"fa-solid fa-angle-up"},null,-1),Bt("High ")]),10,OV)]),X("h3",null,[m[6]||(m[6]=X("i",{class:"fa-regular fa-clock"},null,-1)),Bt(" Added "+Nn(u.value[P])+" ago",1)])])]))),128))]),_:1})])],64))}},xV=Bc(DV,[["__scopeId","data-v-4f694b1c"]]),MV={},LV={class:"headerComp"};function VV(n,e){return Lt(),an("h1",LV,"Vue.js Proyect - Carlos Arana Jiménez")}const FV=Bc(MV,[["render",VV]]),UV={};function BV(n,e){return Lt(),an("footer",null,e[0]||(e[0]=[X("div",{class:"footer"},[X("p",null,"Developed by Carlos Arana Jiménez"),X("p",null,[Bt("Code available on "),X("a",{href:"https://github.com/carlos-aj/VUE-PROJECT"},[X("i",{class:"fa-brands fa-github"}),Bt(" github")])])],-1)]))}const $V=Bc(UV,[["render",BV],["__scopeId","data-v-8da53524"]]),jV={id:"app"},qV={__name:"reminder",setup(n){const e=rL(),t=dc();var s;t.value.uid==="cZrPrsdkytdenenGxH1CQobUN8Z2"?s=v_(l_(ol(e,"Recordatorios"),c_("priority"))):s=v_(l_(ol(e,"Recordatorios"),c_("priority"),mM("user","==",t.value.uid)));function r(u){TM(ol(e,"Recordatorios"),u).then(h=>{console.log("Document written with ID: ",h.id)}).catch(h=>{console.log("ERROR: "+h)})}function i(){s.value.map(u=>f_(ao(e,"Recordatorios",u.id)))}function o(u){f_(ao(e,"Recordatorios",u))}function a(u){const h=ao(e,"Recordatorios",s.value[u].id),f=s.value[u].done;d_(h,{done:!f})}function c(u,h){const f=s.value[u].id,g=ao(e,"Recordatorios",f);d_(g,{priority:h})}return(u,h)=>(Lt(),an(Mt,null,[Ge(tI),Ge(FV),X("div",jV,[Ge(wV,{onAddTask:r}),Ge(xV,{tasks:on(s),onDeleteAllDone:i,onDeleteDone:o,onTaskCheckedDone:a,onCompletedTaskCountDone:u.completedTasksCount,onChangePriorityDone:c},null,8,["tasks","onCompletedTaskCountDone"])]),Ge($V)],64))}},WV={class:"error"},HV={class:"error"},KV={class:"error"},GV={__name:"register",setup(n){const e=Bw(),t=Of(),s=nt(""),r=nt(""),i=nt(""),o=nt(""),a=nt(""),c=nt("");function u(){if(o.value="",a.value="",c.value="",!s.value){o.value="Email is required";return}if(!r.value){a.value="Password is required";return}if(r.value!==i.value){c.value="Passwords do not match";return}DS(e,s.value,r.value).then(()=>{UE(e,s.value,r.value),t.push("/reminder")}).catch(h=>{switch(h.code){case"auth/invalid-email":o.value="The email does not have a valid format";break;case"auth/email-already-in-use":o.value="The email is already registered";break;case"auth/weak-password":a.value="The password is too weak. It must be at least 6 characters long";break;default:console.error("Error en el registro:",h);break}})}return(h,f)=>{const g=ii("RouterLink");return Lt(),an(Mt,null,[X("form",{onSubmit:tE(u,["prevent"])},[f[3]||(f[3]=X("label",{for:"email"},"Email",-1)),zr(X("input",{id:"email",type:"email","onUpdate:modelValue":f[0]||(f[0]=m=>s.value=m),placeholder:"Email..."},null,512),[[Xr,s.value]]),X("p",WV,Nn(o.value),1),f[4]||(f[4]=X("label",{for:"password"},"Password",-1)),zr(X("input",{id:"password",type:"password","onUpdate:modelValue":f[1]||(f[1]=m=>r.value=m),placeholder:"Password...",onKeyup:Do(u,["enter"])},null,544),[[Xr,r.value]]),X("p",HV,Nn(a.value),1),f[5]||(f[5]=X("label",{for:"confirm-password"},"Confirm Password",-1)),zr(X("input",{id:"confirm-password",type:"password","onUpdate:modelValue":f[2]||(f[2]=m=>i.value=m),placeholder:"Confirm Password...",onKeyup:Do(u,["enter"])},null,544),[[Xr,i.value]]),X("p",KV,Nn(c.value),1),X("button",{class:"reg",type:"submit",onClick:u},"Sign up")],32),Ge(g,{to:"/login",class:"back"},{default:ri(()=>f[6]||(f[6]=[X("i",{class:"fa-solid fa-angle-left"},null,-1),Bt(" Back")])),_:1})],64)}}},zV=[{path:"/reminder",component:qV,meta:{requiresAuth:!0}},{path:"/logIn",component:tI,meta:{requiresAuth:!1}},{path:"/",component:vV,meta:{requiresAuth:!1}},{path:"/register",component:GV,meta:{requiresAuth:!1}}],QV=hV({history:BL(),routes:zV}),Df=ZR(_V);Df.use(lL,{firebaseApp:$w,modules:[iL()]});Df.use(QV);Df.mount("#app");
