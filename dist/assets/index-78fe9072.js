function lE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function uE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ag={exports:{}},pl={},Rg={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs=Symbol.for("react.element"),cE=Symbol.for("react.portal"),hE=Symbol.for("react.fragment"),dE=Symbol.for("react.strict_mode"),fE=Symbol.for("react.profiler"),pE=Symbol.for("react.provider"),mE=Symbol.for("react.context"),gE=Symbol.for("react.forward_ref"),yE=Symbol.for("react.suspense"),vE=Symbol.for("react.memo"),wE=Symbol.for("react.lazy"),Mf=Symbol.iterator;function EE(t){return t===null||typeof t!="object"?null:(t=Mf&&t[Mf]||t["@@iterator"],typeof t=="function"?t:null)}var Dg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xg=Object.assign,Pg={};function Ii(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||Dg}Ii.prototype.isReactComponent={};Ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Og(){}Og.prototype=Ii.prototype;function Ah(t,e,n){this.props=t,this.context=e,this.refs=Pg,this.updater=n||Dg}var Rh=Ah.prototype=new Og;Rh.constructor=Ah;xg(Rh,Ii.prototype);Rh.isPureReactComponent=!0;var Uf=Array.isArray,Lg=Object.prototype.hasOwnProperty,Dh={current:null},$g={key:!0,ref:!0,__self:!0,__source:!0};function Mg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Lg.call(e,r)&&!$g.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xs,type:t,key:s,ref:o,props:i,_owner:Dh.current}}function _E(t,e){return{$$typeof:Xs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xs}function SE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ff=/\/+/g;function hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?SE(""+t.key):e.toString(36)}function ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xs:case cE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hu(o,0):r,Uf(i)?(n="",t!=null&&(n=t.replace(Ff,"$&/")+"/"),ta(i,e,n,"",function(u){return u})):i!=null&&(xh(i)&&(i=_E(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ff,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Uf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+hu(s,a);o+=ta(s,e,n,l,i)}else if(l=EE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+hu(s,a++),o+=ta(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function No(t,e,n){if(t==null)return t;var r=[],i=0;return ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function IE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qe={current:null},na={transition:null},TE={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:na,ReactCurrentOwner:Dh};H.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=Ii;H.Fragment=hE;H.Profiler=fE;H.PureComponent=Ah;H.StrictMode=dE;H.Suspense=yE;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TE;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=xg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Lg.call(e,l)&&!$g.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Xs,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:mE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pE,_context:t},t.Consumer=t};H.createElement=Mg;H.createFactory=function(t){var e=Mg.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:gE,render:t}};H.isValidElement=xh;H.lazy=function(t){return{$$typeof:wE,_payload:{_status:-1,_result:t},_init:IE}};H.memo=function(t,e){return{$$typeof:vE,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=na.transition;na.transition={};try{t()}finally{na.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Qe.current.useCallback(t,e)};H.useContext=function(t){return Qe.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Qe.current.useDeferredValue(t)};H.useEffect=function(t,e){return Qe.current.useEffect(t,e)};H.useId=function(){return Qe.current.useId()};H.useImperativeHandle=function(t,e,n){return Qe.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Qe.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Qe.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Qe.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Qe.current.useReducer(t,e,n)};H.useRef=function(t){return Qe.current.useRef(t)};H.useState=function(t){return Qe.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Qe.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Qe.current.useTransition()};H.version="18.2.0";Rg.exports=H;var ce=Rg.exports;const Xt=uE(ce),kE=lE({__proto__:null,default:Xt},[ce]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CE=ce,NE=Symbol.for("react.element"),AE=Symbol.for("react.fragment"),RE=Object.prototype.hasOwnProperty,DE=CE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xE={key:!0,ref:!0,__self:!0,__source:!0};function Ug(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RE.call(e,r)&&!xE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:NE,type:t,key:s,ref:o,props:i,_owner:DE.current}}pl.Fragment=AE;pl.jsx=Ug;pl.jsxs=Ug;Ag.exports=pl;var L=Ag.exports,nc={},Fg={exports:{}},ut={},Vg={exports:{}},jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,j){var z=R.length;R.push(j);e:for(;0<z;){var de=z-1>>>1,_e=R[de];if(0<i(_e,j))R[de]=j,R[z]=_e,z=de;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var j=R[0],z=R.pop();if(z!==j){R[0]=z;e:for(var de=0,_e=R.length,ko=_e>>>1;de<ko;){var Wn=2*(de+1)-1,cu=R[Wn],Gn=Wn+1,Co=R[Gn];if(0>i(cu,z))Gn<_e&&0>i(Co,cu)?(R[de]=Co,R[Gn]=z,de=Gn):(R[de]=cu,R[Wn]=z,de=Wn);else if(Gn<_e&&0>i(Co,z))R[de]=Co,R[Gn]=z,de=Gn;else break e}}return j}function i(R,j){var z=R.sortIndex-j.sortIndex;return z!==0?z:R.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,g=!1,y=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=R)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function w(R){if(v=!1,m(R),!y)if(n(l)!==null)y=!0,lu(T);else{var j=n(u);j!==null&&uu(w,j.startTime-R)}}function T(R,j){y=!1,v&&(v=!1,p(P),P=-1),g=!0;var z=f;try{for(m(j),h=n(l);h!==null&&(!(h.expirationTime>j)||R&&!wt());){var de=h.callback;if(typeof de=="function"){h.callback=null,f=h.priorityLevel;var _e=de(h.expirationTime<=j);j=t.unstable_now(),typeof _e=="function"?h.callback=_e:h===n(l)&&r(l),m(j)}else r(l);h=n(l)}if(h!==null)var ko=!0;else{var Wn=n(u);Wn!==null&&uu(w,Wn.startTime-j),ko=!1}return ko}finally{h=null,f=z,g=!1}}var N=!1,D=null,P=-1,X=5,b=-1;function wt(){return!(t.unstable_now()-b<X)}function Li(){if(D!==null){var R=t.unstable_now();b=R;var j=!0;try{j=D(!0,R)}finally{j?$i():(N=!1,D=null)}}else N=!1}var $i;if(typeof d=="function")$i=function(){d(Li)};else if(typeof MessageChannel<"u"){var $f=new MessageChannel,aE=$f.port2;$f.port1.onmessage=Li,$i=function(){aE.postMessage(null)}}else $i=function(){_(Li,0)};function lu(R){D=R,N||(N=!0,$i())}function uu(R,j){P=_(function(){R(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,lu(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var z=f;f=j;try{return R()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,j){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=f;f=R;try{return j()}finally{f=z}},t.unstable_scheduleCallback=function(R,j,z){var de=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?de+z:de):z=de,R){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=z+_e,R={id:c++,callback:j,priorityLevel:R,startTime:z,expirationTime:_e,sortIndex:-1},z>de?(R.sortIndex=z,e(u,R),n(l)===null&&R===n(u)&&(v?(p(P),P=-1):v=!0,uu(w,z-de))):(R.sortIndex=_e,e(l,R),y||g||(y=!0,lu(T))),R},t.unstable_shouldYield=wt,t.unstable_wrapCallback=function(R){var j=f;return function(){var z=f;f=j;try{return R.apply(this,arguments)}finally{f=z}}}})(jg);Vg.exports=jg;var PE=Vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg=ce,at=PE;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bg=new Set,gs={};function Ir(t,e){oi(t,e),oi(t+"Capture",e)}function oi(t,e){for(gs[t]=e,t=0;t<e.length;t++)bg.add(e[t])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rc=Object.prototype.hasOwnProperty,OE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vf={},jf={};function LE(t){return rc.call(jf,t)?!0:rc.call(Vf,t)?!1:OE.test(t)?jf[t]=!0:(Vf[t]=!0,!1)}function $E(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ME(t,e,n,r){if(e===null||typeof e>"u"||$E(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ye(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ph=/[\-:]([a-z])/g;function Oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ph,Oh);Pe[e]=new Ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ph,Oh);Pe[e]=new Ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ph,Oh);Pe[e]=new Ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ME(e,n,i,r)&&(n=null),r||i===null?LE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cn=zg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ao=Symbol.for("react.element"),Or=Symbol.for("react.portal"),Lr=Symbol.for("react.fragment"),$h=Symbol.for("react.strict_mode"),ic=Symbol.for("react.profiler"),Bg=Symbol.for("react.provider"),Hg=Symbol.for("react.context"),Mh=Symbol.for("react.forward_ref"),sc=Symbol.for("react.suspense"),oc=Symbol.for("react.suspense_list"),Uh=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),Kg=Symbol.for("react.offscreen"),zf=Symbol.iterator;function Mi(t){return t===null||typeof t!="object"?null:(t=zf&&t[zf]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,du;function qi(t){if(du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+t}var fu=!1;function pu(t,e){if(!t||fu)return"";fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qi(t):""}function UE(t){switch(t.tag){case 5:return qi(t.type);case 16:return qi("Lazy");case 13:return qi("Suspense");case 19:return qi("SuspenseList");case 0:case 2:case 15:return t=pu(t.type,!1),t;case 11:return t=pu(t.type.render,!1),t;case 1:return t=pu(t.type,!0),t;default:return""}}function ac(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lr:return"Fragment";case Or:return"Portal";case ic:return"Profiler";case $h:return"StrictMode";case sc:return"Suspense";case oc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hg:return(t.displayName||"Context")+".Consumer";case Bg:return(t._context.displayName||"Context")+".Provider";case Mh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uh:return e=t.displayName||null,e!==null?e:ac(t.type)||"Memo";case pn:e=t._payload,t=t._init;try{return ac(t(e))}catch{}}return null}function FE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ac(e);case 8:return e===$h?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Un(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VE(t){var e=qg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ro(t){t._valueTracker||(t._valueTracker=VE(t))}function Wg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lc(t,e){var n=e.checked;return ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Un(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gg(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function uc(t,e){Gg(t,e);var n=Un(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cc(t,e.type,n):e.hasOwnProperty("defaultValue")&&cc(t,e.type,Un(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cc(t,e,n){(e!=="number"||_a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wi=Array.isArray;function Wr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Un(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Wi(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Un(n)}}function Qg(t,e){var n=Un(e.value),r=Un(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Kf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Do,Xg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Do.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jE=["Webkit","ms","Moz","O"];Object.keys(ts).forEach(function(t){jE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ts[e]=ts[t]})});function Jg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ts.hasOwnProperty(t)&&ts[t]?(""+e).trim():e+"px"}function Zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zE=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fc(t,e){if(e){if(zE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function pc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mc=null;function Fh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gc=null,Gr=null,Qr=null;function qf(t){if(t=eo(t)){if(typeof gc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=wl(e),gc(t.stateNode,t.type,e))}}function ey(t){Gr?Qr?Qr.push(t):Qr=[t]:Gr=t}function ty(){if(Gr){var t=Gr,e=Qr;if(Qr=Gr=null,qf(t),e)for(t=0;t<e.length;t++)qf(e[t])}}function ny(t,e){return t(e)}function ry(){}var mu=!1;function iy(t,e,n){if(mu)return t(e,n);mu=!0;try{return ny(t,e,n)}finally{mu=!1,(Gr!==null||Qr!==null)&&(ry(),ty())}}function vs(t,e){var n=t.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var yc=!1;if(en)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){yc=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{yc=!1}function bE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ns=!1,Sa=null,Ia=!1,vc=null,BE={onError:function(t){ns=!0,Sa=t}};function HE(t,e,n,r,i,s,o,a,l){ns=!1,Sa=null,bE.apply(BE,arguments)}function KE(t,e,n,r,i,s,o,a,l){if(HE.apply(this,arguments),ns){if(ns){var u=Sa;ns=!1,Sa=null}else throw Error(S(198));Ia||(Ia=!0,vc=u)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wf(t){if(Tr(t)!==t)throw Error(S(188))}function qE(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wf(i),t;if(s===r)return Wf(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function oy(t){return t=qE(t),t!==null?ay(t):null}function ay(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ay(t);if(e!==null)return e;t=t.sibling}return null}var ly=at.unstable_scheduleCallback,Gf=at.unstable_cancelCallback,WE=at.unstable_shouldYield,GE=at.unstable_requestPaint,fe=at.unstable_now,QE=at.unstable_getCurrentPriorityLevel,Vh=at.unstable_ImmediatePriority,uy=at.unstable_UserBlockingPriority,Ta=at.unstable_NormalPriority,YE=at.unstable_LowPriority,cy=at.unstable_IdlePriority,ml=null,Mt=null;function XE(t){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(ml,t,void 0,(t.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:e_,JE=Math.log,ZE=Math.LN2;function e_(t){return t>>>=0,t===0?32:31-(JE(t)/ZE|0)|0}var xo=64,Po=4194304;function Gi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ka(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Gi(a):(s&=o,s!==0&&(r=Gi(s)))}else o=n&~i,o!==0?r=Gi(o):s!==0&&(r=Gi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kt(e),i=1<<n,r|=t[n],e&=~i;return r}function t_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=t_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function wc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hy(){var t=xo;return xo<<=1,!(xo&4194240)&&(xo=64),t}function gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Js(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kt(e),t[e]=n}function r_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Q=0;function dy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fy,zh,py,my,gy,Ec=!1,Oo=[],Tn=null,kn=null,Cn=null,ws=new Map,Es=new Map,gn=[],i_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(t,e){switch(t){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":ws.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(e.pointerId)}}function Fi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=eo(e),e!==null&&zh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function s_(t,e,n,r,i){switch(e){case"focusin":return Tn=Fi(Tn,t,e,n,r,i),!0;case"dragenter":return kn=Fi(kn,t,e,n,r,i),!0;case"mouseover":return Cn=Fi(Cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ws.set(s,Fi(ws.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Es.set(s,Fi(Es.get(s)||null,t,e,n,r,i)),!0}return!1}function yy(t){var e=Zn(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=sy(n),e!==null){t.blockedOn=e,gy(t.priority,function(){py(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_c(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mc=r,n.target.dispatchEvent(r),mc=null}else return e=eo(n),e!==null&&zh(e),t.blockedOn=n,!1;e.shift()}return!0}function Yf(t,e,n){ra(t)&&n.delete(e)}function o_(){Ec=!1,Tn!==null&&ra(Tn)&&(Tn=null),kn!==null&&ra(kn)&&(kn=null),Cn!==null&&ra(Cn)&&(Cn=null),ws.forEach(Yf),Es.forEach(Yf)}function Vi(t,e){t.blockedOn===e&&(t.blockedOn=null,Ec||(Ec=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,o_)))}function _s(t){function e(i){return Vi(i,t)}if(0<Oo.length){Vi(Oo[0],t);for(var n=1;n<Oo.length;n++){var r=Oo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Tn!==null&&Vi(Tn,t),kn!==null&&Vi(kn,t),Cn!==null&&Vi(Cn,t),ws.forEach(e),Es.forEach(e),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)yy(n),n.blockedOn===null&&gn.shift()}var Yr=cn.ReactCurrentBatchConfig,Ca=!0;function a_(t,e,n,r){var i=Q,s=Yr.transition;Yr.transition=null;try{Q=1,bh(t,e,n,r)}finally{Q=i,Yr.transition=s}}function l_(t,e,n,r){var i=Q,s=Yr.transition;Yr.transition=null;try{Q=4,bh(t,e,n,r)}finally{Q=i,Yr.transition=s}}function bh(t,e,n,r){if(Ca){var i=_c(t,e,n,r);if(i===null)Cu(t,e,r,Na,n),Qf(t,r);else if(s_(i,t,e,n,r))r.stopPropagation();else if(Qf(t,r),e&4&&-1<i_.indexOf(t)){for(;i!==null;){var s=eo(i);if(s!==null&&fy(s),s=_c(t,e,n,r),s===null&&Cu(t,e,r,Na,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cu(t,e,r,null,n)}}var Na=null;function _c(t,e,n,r){if(Na=null,t=Fh(r),t=Zn(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Na=t,null}function vy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QE()){case Vh:return 1;case uy:return 4;case Ta:case YE:return 16;case cy:return 536870912;default:return 16}default:return 16}}var _n=null,Bh=null,ia=null;function wy(){if(ia)return ia;var t,e=Bh,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ia=i.slice(t,1<r?1-r:void 0)}function sa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Lo(){return!0}function Xf(){return!1}function ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lo:Xf,this.isPropagationStopped=Xf,this}return ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),e}var Ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=ct(Ti),Zs=ae({},Ti,{view:0,detail:0}),u_=ct(Zs),yu,vu,ji,gl=ae({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ji&&(ji&&t.type==="mousemove"?(yu=t.screenX-ji.screenX,vu=t.screenY-ji.screenY):vu=yu=0,ji=t),yu)},movementY:function(t){return"movementY"in t?t.movementY:vu}}),Jf=ct(gl),c_=ae({},gl,{dataTransfer:0}),h_=ct(c_),d_=ae({},Zs,{relatedTarget:0}),wu=ct(d_),f_=ae({},Ti,{animationName:0,elapsedTime:0,pseudoElement:0}),p_=ct(f_),m_=ae({},Ti,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g_=ct(m_),y_=ae({},Ti,{data:0}),Zf=ct(y_),v_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function __(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=E_[t])?!!e[t]:!1}function Kh(){return __}var S_=ae({},Zs,{key:function(t){if(t.key){var e=v_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kh,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I_=ct(S_),T_=ae({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=ct(T_),k_=ae({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kh}),C_=ct(k_),N_=ae({},Ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),A_=ct(N_),R_=ae({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),D_=ct(R_),x_=[9,13,27,32],qh=en&&"CompositionEvent"in window,rs=null;en&&"documentMode"in document&&(rs=document.documentMode);var P_=en&&"TextEvent"in window&&!rs,Ey=en&&(!qh||rs&&8<rs&&11>=rs),tp=String.fromCharCode(32),np=!1;function _y(t,e){switch(t){case"keyup":return x_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function O_(t,e){switch(t){case"compositionend":return Sy(e);case"keypress":return e.which!==32?null:(np=!0,tp);case"textInput":return t=e.data,t===tp&&np?null:t;default:return null}}function L_(t,e){if($r)return t==="compositionend"||!qh&&_y(t,e)?(t=wy(),ia=Bh=_n=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ey&&e.locale!=="ko"?null:e.data;default:return null}}var $_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$_[t.type]:e==="textarea"}function Iy(t,e,n,r){ey(r),e=Aa(e,"onChange"),0<e.length&&(n=new Hh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var is=null,Ss=null;function M_(t){Ly(t,0)}function yl(t){var e=Fr(t);if(Wg(e))return t}function U_(t,e){if(t==="change")return e}var Ty=!1;if(en){var Eu;if(en){var _u="oninput"in document;if(!_u){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),_u=typeof ip.oninput=="function"}Eu=_u}else Eu=!1;Ty=Eu&&(!document.documentMode||9<document.documentMode)}function sp(){is&&(is.detachEvent("onpropertychange",ky),Ss=is=null)}function ky(t){if(t.propertyName==="value"&&yl(Ss)){var e=[];Iy(e,Ss,t,Fh(t)),iy(M_,e)}}function F_(t,e,n){t==="focusin"?(sp(),is=e,Ss=n,is.attachEvent("onpropertychange",ky)):t==="focusout"&&sp()}function V_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yl(Ss)}function j_(t,e){if(t==="click")return yl(e)}function z_(t,e){if(t==="input"||t==="change")return yl(e)}function b_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nt=typeof Object.is=="function"?Object.is:b_;function Is(t,e){if(Nt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rc.call(e,i)||!Nt(t[i],e[i]))return!1}return!0}function op(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ap(t,e){var n=op(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=op(n)}}function Cy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ny(){for(var t=window,e=_a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_a(t.document)}return e}function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function B_(t){var e=Ny(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cy(n.ownerDocument.documentElement,n)){if(r!==null&&Wh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ap(n,s);var o=ap(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var H_=en&&"documentMode"in document&&11>=document.documentMode,Mr=null,Sc=null,ss=null,Ic=!1;function lp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ic||Mr==null||Mr!==_a(r)||(r=Mr,"selectionStart"in r&&Wh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ss&&Is(ss,r)||(ss=r,r=Aa(Sc,"onSelect"),0<r.length&&(e=new Hh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mr)))}function $o(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ur={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},Su={},Ay={};en&&(Ay=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function vl(t){if(Su[t])return Su[t];if(!Ur[t])return t;var e=Ur[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ay)return Su[t]=e[n];return t}var Ry=vl("animationend"),Dy=vl("animationiteration"),xy=vl("animationstart"),Py=vl("transitionend"),Oy=new Map,up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(t,e){Oy.set(t,e),Ir(e,[t])}for(var Iu=0;Iu<up.length;Iu++){var Tu=up[Iu],K_=Tu.toLowerCase(),q_=Tu[0].toUpperCase()+Tu.slice(1);bn(K_,"on"+q_)}bn(Ry,"onAnimationEnd");bn(Dy,"onAnimationIteration");bn(xy,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(Py,"onTransitionEnd");oi("onMouseEnter",["mouseout","mouseover"]);oi("onMouseLeave",["mouseout","mouseover"]);oi("onPointerEnter",["pointerout","pointerover"]);oi("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function cp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,KE(r,e,void 0,t),t.currentTarget=null}function Ly(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cp(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cp(i,a,u),s=l}}}if(Ia)throw t=vc,Ia=!1,vc=null,t}function Z(t,e){var n=e[Ac];n===void 0&&(n=e[Ac]=new Set);var r=t+"__bubble";n.has(r)||($y(e,t,2,!1),n.add(r))}function ku(t,e,n){var r=0;e&&(r|=4),$y(n,t,r,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Ts(t){if(!t[Mo]){t[Mo]=!0,bg.forEach(function(n){n!=="selectionchange"&&(W_.has(n)||ku(n,!1,t),ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,ku("selectionchange",!1,e))}}function $y(t,e,n,r){switch(vy(e)){case 1:var i=a_;break;case 4:i=l_;break;default:i=bh}n=i.bind(null,e,n,t),i=void 0,!yc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Zn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}iy(function(){var u=s,c=Fh(n),h=[];e:{var f=Oy.get(t);if(f!==void 0){var g=Hh,y=t;switch(t){case"keypress":if(sa(n)===0)break e;case"keydown":case"keyup":g=I_;break;case"focusin":y="focus",g=wu;break;case"focusout":y="blur",g=wu;break;case"beforeblur":case"afterblur":g=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=h_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=C_;break;case Ry:case Dy:case xy:g=p_;break;case Py:g=A_;break;case"scroll":g=u_;break;case"wheel":g=D_;break;case"copy":case"cut":case"paste":g=g_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=ep}var v=(e&4)!==0,_=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=vs(d,p),w!=null&&v.push(ks(d,w,m)))),_)break;d=d.return}0<v.length&&(f=new g(f,y,null,n,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==mc&&(y=n.relatedTarget||n.fromElement)&&(Zn(y)||y[tn]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Zn(y):null,y!==null&&(_=Tr(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Jf,w="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=ep,w="onPointerLeave",p="onPointerEnter",d="pointer"),_=g==null?f:Fr(g),m=y==null?f:Fr(y),f=new v(w,d+"leave",g,n,c),f.target=_,f.relatedTarget=m,w=null,Zn(c)===u&&(v=new v(p,d+"enter",y,n,c),v.target=m,v.relatedTarget=_,w=v),_=w,g&&y)t:{for(v=g,p=y,d=0,m=v;m;m=Rr(m))d++;for(m=0,w=p;w;w=Rr(w))m++;for(;0<d-m;)v=Rr(v),d--;for(;0<m-d;)p=Rr(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=Rr(v),p=Rr(p)}v=null}else v=null;g!==null&&hp(h,f,g,v,!1),y!==null&&_!==null&&hp(h,_,y,v,!0)}}e:{if(f=u?Fr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var T=U_;else if(rp(f))if(Ty)T=z_;else{T=V_;var N=F_}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=j_);if(T&&(T=T(t,u))){Iy(h,T,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&cc(f,"number",f.value)}switch(N=u?Fr(u):window,t){case"focusin":(rp(N)||N.contentEditable==="true")&&(Mr=N,Sc=u,ss=null);break;case"focusout":ss=Sc=Mr=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,lp(h,n,c);break;case"selectionchange":if(H_)break;case"keydown":case"keyup":lp(h,n,c)}var D;if(qh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $r?_y(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ey&&n.locale!=="ko"&&($r||P!=="onCompositionStart"?P==="onCompositionEnd"&&$r&&(D=wy()):(_n=c,Bh="value"in _n?_n.value:_n.textContent,$r=!0)),N=Aa(u,P),0<N.length&&(P=new Zf(P,t,null,n,c),h.push({event:P,listeners:N}),D?P.data=D:(D=Sy(n),D!==null&&(P.data=D)))),(D=P_?O_(t,n):L_(t,n))&&(u=Aa(u,"onBeforeInput"),0<u.length&&(c=new Zf("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}Ly(h,e)})}function ks(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Aa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=vs(t,n),s!=null&&r.unshift(ks(t,s,i)),s=vs(t,e),s!=null&&r.push(ks(t,s,i))),t=t.return}return r}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=vs(n,s),l!=null&&o.unshift(ks(n,l,a))):i||(l=vs(n,s),l!=null&&o.push(ks(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var G_=/\r\n?/g,Q_=/\u0000|\uFFFD/g;function dp(t){return(typeof t=="string"?t:""+t).replace(G_,`
`).replace(Q_,"")}function Uo(t,e,n){if(e=dp(e),dp(t)!==e&&n)throw Error(S(425))}function Ra(){}var Tc=null,kc=null;function Cc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,Y_=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,X_=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(t){return fp.resolve(null).then(t).catch(J_)}:Nc;function J_(t){setTimeout(function(){throw t})}function Nu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_s(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_s(e)}function Nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ki=Math.random().toString(36).slice(2),Pt="__reactFiber$"+ki,Cs="__reactProps$"+ki,tn="__reactContainer$"+ki,Ac="__reactEvents$"+ki,Z_="__reactListeners$"+ki,eS="__reactHandles$"+ki;function Zn(t){var e=t[Pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tn]||n[Pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pp(t);t!==null;){if(n=t[Pt])return n;t=pp(t)}return e}t=n,n=t.parentNode}return null}function eo(t){return t=t[Pt]||t[tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function wl(t){return t[Cs]||null}var Rc=[],Vr=-1;function Bn(t){return{current:t}}function ne(t){0>Vr||(t.current=Rc[Vr],Rc[Vr]=null,Vr--)}function J(t,e){Vr++,Rc[Vr]=t.current,t.current=e}var Fn={},Be=Bn(Fn),Ze=Bn(!1),dr=Fn;function ai(t,e){var n=t.type.contextTypes;if(!n)return Fn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function et(t){return t=t.childContextTypes,t!=null}function Da(){ne(Ze),ne(Be)}function mp(t,e,n){if(Be.current!==Fn)throw Error(S(168));J(Be,e),J(Ze,n)}function My(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,FE(t)||"Unknown",i));return ae({},n,r)}function xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fn,dr=Be.current,J(Be,t),J(Ze,Ze.current),!0}function gp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=My(t,e,dr),r.__reactInternalMemoizedMergedChildContext=t,ne(Ze),ne(Be),J(Be,t)):ne(Ze),J(Ze,n)}var Ht=null,El=!1,Au=!1;function Uy(t){Ht===null?Ht=[t]:Ht.push(t)}function tS(t){El=!0,Uy(t)}function Hn(){if(!Au&&Ht!==null){Au=!0;var t=0,e=Q;try{var n=Ht;for(Q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ht=null,El=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(t+1)),ly(Vh,Hn),i}finally{Q=e,Au=!1}}return null}var jr=[],zr=0,Pa=null,Oa=0,ht=[],dt=0,fr=null,qt=1,Wt="";function Qn(t,e){jr[zr++]=Oa,jr[zr++]=Pa,Pa=t,Oa=e}function Fy(t,e,n){ht[dt++]=qt,ht[dt++]=Wt,ht[dt++]=fr,fr=t;var r=qt;t=Wt;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var s=32-kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qt=1<<32-kt(e)+i|n<<i|r,Wt=s+t}else qt=1<<s|n<<i|r,Wt=t}function Gh(t){t.return!==null&&(Qn(t,1),Fy(t,1,0))}function Qh(t){for(;t===Pa;)Pa=jr[--zr],jr[zr]=null,Oa=jr[--zr],jr[zr]=null;for(;t===fr;)fr=ht[--dt],ht[dt]=null,Wt=ht[--dt],ht[dt]=null,qt=ht[--dt],ht[dt]=null}var st=null,it=null,ie=!1,It=null;function Vy(t,e){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,st=t,it=Nn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,st=t,it=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fr!==null?{id:qt,overflow:Wt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,st=t,it=null,!0):!1;default:return!1}}function Dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xc(t){if(ie){var e=it;if(e){var n=e;if(!yp(t,e)){if(Dc(t))throw Error(S(418));e=Nn(n.nextSibling);var r=st;e&&yp(t,e)?Vy(r,n):(t.flags=t.flags&-4097|2,ie=!1,st=t)}}else{if(Dc(t))throw Error(S(418));t.flags=t.flags&-4097|2,ie=!1,st=t}}}function vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;st=t}function Fo(t){if(t!==st)return!1;if(!ie)return vp(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cc(t.type,t.memoizedProps)),e&&(e=it)){if(Dc(t))throw jy(),Error(S(418));for(;e;)Vy(t,e),e=Nn(e.nextSibling)}if(vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){it=Nn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}it=null}}else it=st?Nn(t.stateNode.nextSibling):null;return!0}function jy(){for(var t=it;t;)t=Nn(t.nextSibling)}function li(){it=st=null,ie=!1}function Yh(t){It===null?It=[t]:It.push(t)}var nS=cn.ReactCurrentBatchConfig;function _t(t,e){if(t&&t.defaultProps){e=ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var La=Bn(null),$a=null,br=null,Xh=null;function Jh(){Xh=br=$a=null}function Zh(t){var e=La.current;ne(La),t._currentValue=e}function Pc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xr(t,e){$a=t,Xh=br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Je=!0),t.firstContext=null)}function yt(t){var e=t._currentValue;if(Xh!==t)if(t={context:t,memoizedValue:e,next:null},br===null){if($a===null)throw Error(S(308));br=t,$a.dependencies={lanes:0,firstContext:t}}else br=br.next=t;return e}var er=null;function ed(t){er===null?er=[t]:er.push(t)}function zy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ed(e)):(n.next=i.next,i.next=n),e.interleaved=n,nn(t,r)}function nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mn=!1;function td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function by(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function An(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,nn(t,n)}return i=r.interleaved,i===null?(e.next=e,ed(r)):(e.next=i.next,i.next=e),r.interleaved=e,nn(t,n)}function oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jh(t,n)}}function wp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ma(t,e,n,r){var i=t.updateQueue;mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=ae({},h,f);break e;case 2:mn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);mr|=o,t.lanes=o,t.memoizedState=h}}function Ep(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var By=new zg.Component().refs;function Oc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _l={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Dn(t),s=Jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=An(t,s,i),e!==null&&(Ct(e,t,i,r),oa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ge(),i=Dn(t),s=Jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=An(t,s,i),e!==null&&(Ct(e,t,i,r),oa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ge(),r=Dn(t),i=Jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=An(t,i,r),e!==null&&(Ct(e,t,r,n),oa(e,t,r))}};function _p(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Is(n,r)||!Is(i,s):!0}function Hy(t,e,n){var r=!1,i=Fn,s=e.contextType;return typeof s=="object"&&s!==null?s=yt(s):(i=et(e)?dr:Be.current,r=e.contextTypes,s=(r=r!=null)?ai(t,i):Fn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_l,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_l.enqueueReplaceState(e,e.state,null)}function Lc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=By,td(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=yt(s):(s=et(e)?dr:Be.current,i.context=ai(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Oc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_l.enqueueReplaceState(i,i.state,null),Ma(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===By&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Vo(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ip(t){var e=t._init;return e(t._payload)}function Ky(t){function e(p,d){if(t){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=xn(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,w){return d===null||d.tag!==6?(d=$u(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,w){var T=m.type;return T===Lr?c(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pn&&Ip(T)===d.type)?(w=i(d,m.props),w.ref=zi(p,d,m),w.return=p,w):(w=da(m.type,m.key,m.props,null,p.mode,w),w.ref=zi(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Mu(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,w,T){return d===null||d.tag!==7?(d=lr(m,p.mode,w,T),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=$u(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ao:return m=da(d.type,d.key,d.props,null,p.mode,m),m.ref=zi(p,null,d),m.return=p,m;case Or:return d=Mu(d,p.mode,m),d.return=p,d;case pn:var w=d._init;return h(p,w(d._payload),m)}if(Wi(d)||Mi(d))return d=lr(d,p.mode,m,null),d.return=p,d;Vo(p,d)}return null}function f(p,d,m,w){var T=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ao:return m.key===T?l(p,d,m,w):null;case Or:return m.key===T?u(p,d,m,w):null;case pn:return T=m._init,f(p,d,T(m._payload),w)}if(Wi(m)||Mi(m))return T!==null?null:c(p,d,m,w,null);Vo(p,m)}return null}function g(p,d,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(d,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ao:return p=p.get(w.key===null?m:w.key)||null,l(d,p,w,T);case Or:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,T);case pn:var N=w._init;return g(p,d,m,N(w._payload),T)}if(Wi(w)||Mi(w))return p=p.get(m)||null,c(d,p,w,T,null);Vo(d,w)}return null}function y(p,d,m,w){for(var T=null,N=null,D=d,P=d=0,X=null;D!==null&&P<m.length;P++){D.index>P?(X=D,D=null):X=D.sibling;var b=f(p,D,m[P],w);if(b===null){D===null&&(D=X);break}t&&D&&b.alternate===null&&e(p,D),d=s(b,d,P),N===null?T=b:N.sibling=b,N=b,D=X}if(P===m.length)return n(p,D),ie&&Qn(p,P),T;if(D===null){for(;P<m.length;P++)D=h(p,m[P],w),D!==null&&(d=s(D,d,P),N===null?T=D:N.sibling=D,N=D);return ie&&Qn(p,P),T}for(D=r(p,D);P<m.length;P++)X=g(D,p,P,m[P],w),X!==null&&(t&&X.alternate!==null&&D.delete(X.key===null?P:X.key),d=s(X,d,P),N===null?T=X:N.sibling=X,N=X);return t&&D.forEach(function(wt){return e(p,wt)}),ie&&Qn(p,P),T}function v(p,d,m,w){var T=Mi(m);if(typeof T!="function")throw Error(S(150));if(m=T.call(m),m==null)throw Error(S(151));for(var N=T=null,D=d,P=d=0,X=null,b=m.next();D!==null&&!b.done;P++,b=m.next()){D.index>P?(X=D,D=null):X=D.sibling;var wt=f(p,D,b.value,w);if(wt===null){D===null&&(D=X);break}t&&D&&wt.alternate===null&&e(p,D),d=s(wt,d,P),N===null?T=wt:N.sibling=wt,N=wt,D=X}if(b.done)return n(p,D),ie&&Qn(p,P),T;if(D===null){for(;!b.done;P++,b=m.next())b=h(p,b.value,w),b!==null&&(d=s(b,d,P),N===null?T=b:N.sibling=b,N=b);return ie&&Qn(p,P),T}for(D=r(p,D);!b.done;P++,b=m.next())b=g(D,p,P,b.value,w),b!==null&&(t&&b.alternate!==null&&D.delete(b.key===null?P:b.key),d=s(b,d,P),N===null?T=b:N.sibling=b,N=b);return t&&D.forEach(function(Li){return e(p,Li)}),ie&&Qn(p,P),T}function _(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===Lr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ao:e:{for(var T=m.key,N=d;N!==null;){if(N.key===T){if(T=m.type,T===Lr){if(N.tag===7){n(p,N.sibling),d=i(N,m.props.children),d.return=p,p=d;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===pn&&Ip(T)===N.type){n(p,N.sibling),d=i(N,m.props),d.ref=zi(p,N,m),d.return=p,p=d;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===Lr?(d=lr(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=da(m.type,m.key,m.props,null,p.mode,w),w.ref=zi(p,d,m),w.return=p,p=w)}return o(p);case Or:e:{for(N=m.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=Mu(m,p.mode,w),d.return=p,p=d}return o(p);case pn:return N=m._init,_(p,d,N(m._payload),w)}if(Wi(m))return y(p,d,m,w);if(Mi(m))return v(p,d,m,w);Vo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=$u(m,p.mode,w),d.return=p,p=d),o(p)):n(p,d)}return _}var ui=Ky(!0),qy=Ky(!1),to={},Ut=Bn(to),Ns=Bn(to),As=Bn(to);function tr(t){if(t===to)throw Error(S(174));return t}function nd(t,e){switch(J(As,e),J(Ns,t),J(Ut,to),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dc(e,t)}ne(Ut),J(Ut,e)}function ci(){ne(Ut),ne(Ns),ne(As)}function Wy(t){tr(As.current);var e=tr(Ut.current),n=dc(e,t.type);e!==n&&(J(Ns,t),J(Ut,n))}function rd(t){Ns.current===t&&(ne(Ut),ne(Ns))}var se=Bn(0);function Ua(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ru=[];function id(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var aa=cn.ReactCurrentDispatcher,Du=cn.ReactCurrentBatchConfig,pr=0,oe=null,ve=null,Ie=null,Fa=!1,os=!1,Rs=0,rS=0;function Oe(){throw Error(S(321))}function sd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nt(t[n],e[n]))return!1;return!0}function od(t,e,n,r,i,s){if(pr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,aa.current=t===null||t.memoizedState===null?aS:lS,t=n(r,i),os){s=0;do{if(os=!1,Rs=0,25<=s)throw Error(S(301));s+=1,Ie=ve=null,e.updateQueue=null,aa.current=uS,t=n(r,i)}while(os)}if(aa.current=Va,e=ve!==null&&ve.next!==null,pr=0,Ie=ve=oe=null,Fa=!1,e)throw Error(S(300));return t}function ad(){var t=Rs!==0;return Rs=0,t}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?oe.memoizedState=Ie=t:Ie=Ie.next=t,Ie}function vt(){if(ve===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Ie===null?oe.memoizedState:Ie.next;if(e!==null)Ie=e,ve=t;else{if(t===null)throw Error(S(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ie===null?oe.memoizedState=Ie=t:Ie=Ie.next=t}return Ie}function Ds(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=vt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,oe.lanes|=c,mr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Nt(r,e.memoizedState)||(Je=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,mr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pu(t){var e=vt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nt(s,e.memoizedState)||(Je=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Gy(){}function Qy(t,e){var n=oe,r=vt(),i=e(),s=!Nt(r.memoizedState,i);if(s&&(r.memoizedState=i,Je=!0),r=r.queue,ld(Jy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,xs(9,Xy.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(S(349));pr&30||Yy(n,e,i)}return i}function Yy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xy(t,e,n,r){e.value=n,e.getSnapshot=r,Zy(e)&&ev(t)}function Jy(t,e,n){return n(function(){Zy(e)&&ev(t)})}function Zy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nt(t,n)}catch{return!0}}function ev(t){var e=nn(t,1);e!==null&&Ct(e,t,1,-1)}function Tp(t){var e=xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:t},e.queue=t,t=t.dispatch=oS.bind(null,oe,t),[e.memoizedState,t]}function xs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tv(){return vt().memoizedState}function la(t,e,n,r){var i=xt();oe.flags|=t,i.memoizedState=xs(1|e,n,void 0,r===void 0?null:r)}function Sl(t,e,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&sd(r,o.deps)){i.memoizedState=xs(e,n,s,r);return}}oe.flags|=t,i.memoizedState=xs(1|e,n,s,r)}function kp(t,e){return la(8390656,8,t,e)}function ld(t,e){return Sl(2048,8,t,e)}function nv(t,e){return Sl(4,2,t,e)}function rv(t,e){return Sl(4,4,t,e)}function iv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sv(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4,4,iv.bind(null,e,t),n)}function ud(){}function ov(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function av(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lv(t,e,n){return pr&21?(Nt(n,e)||(n=hy(),oe.lanes|=n,mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Je=!0),t.memoizedState=n)}function iS(t,e){var n=Q;Q=n!==0&&4>n?n:4,t(!0);var r=Du.transition;Du.transition={};try{t(!1),e()}finally{Q=n,Du.transition=r}}function uv(){return vt().memoizedState}function sS(t,e,n){var r=Dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cv(t))hv(e,n);else if(n=zy(t,e,n,r),n!==null){var i=Ge();Ct(n,t,r,i),dv(n,e,r)}}function oS(t,e,n){var r=Dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cv(t))hv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,o)){var l=e.interleaved;l===null?(i.next=i,ed(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=zy(t,e,i,r),n!==null&&(i=Ge(),Ct(n,t,r,i),dv(n,e,r))}}function cv(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function hv(t,e){os=Fa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jh(t,n)}}var Va={readContext:yt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},aS={readContext:yt,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:yt,useEffect:kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,la(4194308,4,iv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return la(4194308,4,t,e)},useInsertionEffect:function(t,e){return la(4,2,t,e)},useMemo:function(t,e){var n=xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sS.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:Tp,useDebugValue:ud,useDeferredValue:function(t){return xt().memoizedState=t},useTransition:function(){var t=Tp(!1),e=t[0];return t=iS.bind(null,t[1]),xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=xt();if(ie){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Te===null)throw Error(S(349));pr&30||Yy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kp(Jy.bind(null,r,s,t),[t]),r.flags|=2048,xs(9,Xy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xt(),e=Te.identifierPrefix;if(ie){var n=Wt,r=qt;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Rs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lS={readContext:yt,useCallback:ov,useContext:yt,useEffect:ld,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:av,useReducer:xu,useRef:tv,useState:function(){return xu(Ds)},useDebugValue:ud,useDeferredValue:function(t){var e=vt();return lv(e,ve.memoizedState,t)},useTransition:function(){var t=xu(Ds)[0],e=vt().memoizedState;return[t,e]},useMutableSource:Gy,useSyncExternalStore:Qy,useId:uv,unstable_isNewReconciler:!1},uS={readContext:yt,useCallback:ov,useContext:yt,useEffect:ld,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:rv,useMemo:av,useReducer:Pu,useRef:tv,useState:function(){return Pu(Ds)},useDebugValue:ud,useDeferredValue:function(t){var e=vt();return ve===null?e.memoizedState=t:lv(e,ve.memoizedState,t)},useTransition:function(){var t=Pu(Ds)[0],e=vt().memoizedState;return[t,e]},useMutableSource:Gy,useSyncExternalStore:Qy,useId:uv,unstable_isNewReconciler:!1};function hi(t,e){try{var n="",r=e;do n+=UE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $c(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cS=typeof WeakMap=="function"?WeakMap:Map;function fv(t,e,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){za||(za=!0,Kc=r),$c(t,e)},n}function pv(t,e,n){n=Jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$c(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$c(t,e),typeof r!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=TS.bind(null,t,e,n),e.then(t,t))}function Np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ap(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jt(-1,1),e.tag=2,An(n,e,1))),n.lanes|=1),t)}var hS=cn.ReactCurrentOwner,Je=!1;function qe(t,e,n,r){e.child=t===null?qy(e,null,n,r):ui(e,t.child,n,r)}function Rp(t,e,n,r,i){n=n.render;var s=e.ref;return Xr(e,i),r=od(t,e,n,r,s,i),n=ad(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(ie&&n&&Gh(e),e.flags|=1,qe(t,e,r,i),e.child)}function Dp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!yd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mv(t,e,s,r,i)):(t=da(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Is,n(o,r)&&t.ref===e.ref)return rn(t,e,i)}return e.flags|=1,t=xn(s,r),t.ref=e.ref,t.return=e,e.child=t}function mv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Is(s,r)&&t.ref===e.ref)if(Je=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Je=!0);else return e.lanes=t.lanes,rn(t,e,i)}return Mc(t,e,n,r,i)}function gv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Hr,rt),rt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(Hr,rt),rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(Hr,rt),rt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(Hr,rt),rt|=r;return qe(t,e,i,n),e.child}function yv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mc(t,e,n,r,i){var s=et(n)?dr:Be.current;return s=ai(e,s),Xr(e,i),n=od(t,e,n,r,s,i),r=ad(),t!==null&&!Je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,rn(t,e,i)):(ie&&r&&Gh(e),e.flags|=1,qe(t,e,n,i),e.child)}function xp(t,e,n,r,i){if(et(n)){var s=!0;xa(e)}else s=!1;if(Xr(e,i),e.stateNode===null)ua(t,e),Hy(e,n,r),Lc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yt(u):(u=et(n)?dr:Be.current,u=ai(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Sp(e,o,r,u),mn=!1;var f=e.memoizedState;o.state=f,Ma(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ze.current||mn?(typeof c=="function"&&(Oc(e,n,c,r),l=e.memoizedState),(a=mn||_p(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,by(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:_t(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yt(l):(l=et(n)?dr:Be.current,l=ai(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Sp(e,o,r,l),mn=!1,f=e.memoizedState,o.state=f,Ma(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||Ze.current||mn?(typeof g=="function"&&(Oc(e,n,g,r),y=e.memoizedState),(u=mn||_p(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Uc(t,e,n,r,s,i)}function Uc(t,e,n,r,i,s){yv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gp(e,n,!1),rn(t,e,s);r=e.stateNode,hS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ui(e,t.child,null,s),e.child=ui(e,null,a,s)):qe(t,e,a,s),e.memoizedState=r.state,i&&gp(e,n,!0),e.child}function vv(t){var e=t.stateNode;e.pendingContext?mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mp(t,e.context,!1),nd(t,e.containerInfo)}function Pp(t,e,n,r,i){return li(),Yh(i),e.flags|=256,qe(t,e,n,r),e.child}var Fc={dehydrated:null,treeContext:null,retryLane:0};function Vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function wv(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(se,i&1),t===null)return xc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=kl(o,r,0,null),t=lr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Vc(n),e.memoizedState=Fc,t):cd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=xn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=xn(a,s):(s=lr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Vc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fc,r}return s=t.child,t=s.sibling,r=xn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cd(t,e){return e=kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jo(t,e,n,r){return r!==null&&Yh(r),ui(e,t.child,null,n),t=cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ou(Error(S(422))),jo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=kl({mode:"visible",children:r.children},i,0,null),s=lr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ui(e,t.child,null,o),e.child.memoizedState=Vc(o),e.memoizedState=Fc,s);if(!(e.mode&1))return jo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Ou(s,r,void 0),jo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Je||a){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(t,i),Ct(r,t,i,-1))}return gd(),r=Ou(Error(S(421))),jo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=kS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,it=Nn(i.nextSibling),st=e,ie=!0,It=null,t!==null&&(ht[dt++]=qt,ht[dt++]=Wt,ht[dt++]=fr,qt=t.id,Wt=t.overflow,fr=e),e=cd(e,r.children),e.flags|=4096,e)}function Op(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Pc(t.return,e,n)}function Lu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ev(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qe(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Op(t,n,e);else if(t.tag===19)Op(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ua(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Lu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ua(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Lu(e,!0,n,null,s);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fS(t,e,n){switch(e.tag){case 3:vv(e),li();break;case 5:Wy(e);break;case 1:et(e.type)&&xa(e);break;case 4:nd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(La,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?wv(t,e,n):(J(se,se.current&1),t=rn(t,e,n),t!==null?t.sibling:null);J(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ev(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,gv(t,e,n)}return rn(t,e,n)}var _v,jc,Sv,Iv;_v=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jc=function(){};Sv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,tr(Ut.current);var s=null;switch(n){case"input":i=lc(t,i),r=lc(t,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=hc(t,i),r=hc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ra)}fc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Iv=function(t,e,n,r){n!==r&&(e.flags|=4)};function bi(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Le(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function pS(t,e,n){var r=e.pendingProps;switch(Qh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(e),null;case 1:return et(e.type)&&Da(),Le(e),null;case 3:return r=e.stateNode,ci(),ne(Ze),ne(Be),id(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,It!==null&&(Gc(It),It=null))),jc(t,e),Le(e),null;case 5:rd(e);var i=tr(As.current);if(n=e.type,t!==null&&e.stateNode!=null)Sv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Le(e),null}if(t=tr(Ut.current),Fo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pt]=e,r[Cs]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<Qi.length;i++)Z(Qi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":bf(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":Hf(r,s),Z("invalid",r)}fc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Uo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Uo(r.textContent,a,t),i=["children",""+a]):gs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":Ro(r),Bf(r,s,!0);break;case"textarea":Ro(r),Kf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ra)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pt]=e,t[Cs]=r,_v(t,e,!1,!1),e.stateNode=t;e:{switch(o=pc(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qi.length;i++)Z(Qi[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":bf(t,r),i=lc(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),Z("invalid",t);break;case"textarea":Hf(t,r),i=hc(t,r),Z("invalid",t);break;default:i=r}fc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Zg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ys(t,l):typeof l=="number"&&ys(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&Lh(t,s,l,o))}switch(n){case"input":Ro(t),Bf(t,r,!1);break;case"textarea":Ro(t),Kf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Un(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Wr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Wr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Le(e),null;case 6:if(t&&e.stateNode!=null)Iv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=tr(As.current),tr(Ut.current),Fo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pt]=e,(s=r.nodeValue!==n)&&(t=st,t!==null))switch(t.tag){case 3:Uo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Uo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=e,e.stateNode=r}return Le(e),null;case 13:if(ne(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&it!==null&&e.mode&1&&!(e.flags&128))jy(),li(),e.flags|=98560,s=!1;else if(s=Fo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Pt]=e}else li(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Le(e),s=!1}else It!==null&&(Gc(It),It=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?we===0&&(we=3):gd())),e.updateQueue!==null&&(e.flags|=4),Le(e),null);case 4:return ci(),jc(t,e),t===null&&Ts(e.stateNode.containerInfo),Le(e),null;case 10:return Zh(e.type._context),Le(e),null;case 17:return et(e.type)&&Da(),Le(e),null;case 19:if(ne(se),s=e.memoizedState,s===null)return Le(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)bi(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ua(t),o!==null){for(e.flags|=128,bi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>di&&(e.flags|=128,r=!0,bi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ua(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),bi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Le(e),null}else 2*fe()-s.renderingStartTime>di&&n!==1073741824&&(e.flags|=128,r=!0,bi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=se.current,J(se,r?n&1|2:n&1),e):(Le(e),null);case 22:case 23:return md(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?rt&1073741824&&(Le(e),e.subtreeFlags&6&&(e.flags|=8192)):Le(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function mS(t,e){switch(Qh(e),e.tag){case 1:return et(e.type)&&Da(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ci(),ne(Ze),ne(Be),id(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rd(e),null;case 13:if(ne(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(se),null;case 4:return ci(),null;case 10:return Zh(e.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var zo=!1,Ue=!1,gS=typeof WeakSet=="function"?WeakSet:Set,C=null;function Br(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function zc(t,e,n){try{n()}catch(r){ue(t,e,r)}}var Lp=!1;function yS(t,e){if(Tc=Ca,t=Ny(),Wh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kc={focusedElem:t,selectionRange:n},Ca=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,_=y.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:_t(e.type,v),_);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ue(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return y=Lp,Lp=!1,y}function as(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zc(e,n,s)}i=i.next}while(i!==r)}}function Il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tv(t){var e=t.alternate;e!==null&&(t.alternate=null,Tv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pt],delete e[Cs],delete e[Ac],delete e[Z_],delete e[eS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kv(t){return t.tag===5||t.tag===3||t.tag===4}function $p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ra));else if(r!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}function Hc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hc(t,e,n),t=t.sibling;t!==null;)Hc(t,e,n),t=t.sibling}var Ne=null,St=!1;function dn(t,e,n){for(n=n.child;n!==null;)Cv(t,e,n),n=n.sibling}function Cv(t,e,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:Ue||Br(n,e);case 6:var r=Ne,i=St;Ne=null,dn(t,e,n),Ne=r,St=i,Ne!==null&&(St?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(St?(t=Ne,n=n.stateNode,t.nodeType===8?Nu(t.parentNode,n):t.nodeType===1&&Nu(t,n),_s(t)):Nu(Ne,n.stateNode));break;case 4:r=Ne,i=St,Ne=n.stateNode.containerInfo,St=!0,dn(t,e,n),Ne=r,St=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zc(n,e,o),i=i.next}while(i!==r)}dn(t,e,n);break;case 1:if(!Ue&&(Br(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,e,a)}dn(t,e,n);break;case 21:dn(t,e,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,dn(t,e,n),Ue=r):dn(t,e,n);break;default:dn(t,e,n)}}function Mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gS),e.forEach(function(r){var i=CS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,St=!1;break e;case 3:Ne=a.stateNode.containerInfo,St=!0;break e;case 4:Ne=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Ne===null)throw Error(S(160));Cv(s,o,i),Ne=null,St=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Nv(e,t),e=e.sibling}function Nv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Et(e,t),Dt(t),r&4){try{as(3,t,t.return),Il(3,t)}catch(v){ue(t,t.return,v)}try{as(5,t,t.return)}catch(v){ue(t,t.return,v)}}break;case 1:Et(e,t),Dt(t),r&512&&n!==null&&Br(n,n.return);break;case 5:if(Et(e,t),Dt(t),r&512&&n!==null&&Br(n,n.return),t.flags&32){var i=t.stateNode;try{ys(i,"")}catch(v){ue(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gg(i,s),pc(a,o);var u=pc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Zg(i,h):c==="dangerouslySetInnerHTML"?Xg(i,h):c==="children"?ys(i,h):Lh(i,c,h,u)}switch(a){case"input":uc(i,s);break;case"textarea":Qg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Wr(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Wr(i,!!s.multiple,s.defaultValue,!0):Wr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Cs]=s}catch(v){ue(t,t.return,v)}}break;case 6:if(Et(e,t),Dt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ue(t,t.return,v)}}break;case 3:if(Et(e,t),Dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_s(e.containerInfo)}catch(v){ue(t,t.return,v)}break;case 4:Et(e,t),Dt(t);break;case 13:Et(e,t),Dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fd=fe())),r&4&&Mp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ue=(u=Ue)||c,Et(e,t),Ue=u):Et(e,t),Dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(C=t,c=t.child;c!==null;){for(h=C=c;C!==null;){switch(f=C,g=f.child,f.tag){case 0:case 11:case 14:case 15:as(4,f,f.return);break;case 1:Br(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ue(r,n,v)}}break;case 5:Br(f,f.return);break;case 22:if(f.memoizedState!==null){Fp(h);continue}}g!==null?(g.return=f,C=g):Fp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jg("display",o))}catch(v){ue(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ue(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Et(e,t),Dt(t),r&4&&Mp(t);break;case 21:break;default:Et(e,t),Dt(t)}}function Dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kv(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ys(i,""),r.flags&=-33);var s=$p(t);Hc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$p(t);Bc(t,a,o);break;default:throw Error(S(161))}}catch(l){ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vS(t,e,n){C=t,Av(t)}function Av(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||zo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ue;a=zo;var u=Ue;if(zo=o,(Ue=l)&&!u)for(C=i;C!==null;)o=C,l=o.child,o.tag===22&&o.memoizedState!==null?Vp(i):l!==null?(l.return=o,C=l):Vp(i);for(;s!==null;)C=s,Av(s),s=s.sibling;C=i,zo=a,Ue=u}Up(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):Up(t)}}function Up(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ue||Il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_t(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ep(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ep(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&_s(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ue||e.flags&512&&bc(e)}catch(f){ue(e,e.return,f)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function Fp(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function Vp(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Il(4,e)}catch(l){ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ue(e,i,l)}}var s=e.return;try{bc(e)}catch(l){ue(e,s,l)}break;case 5:var o=e.return;try{bc(e)}catch(l){ue(e,o,l)}}}catch(l){ue(e,e.return,l)}if(e===t){C=null;break}var a=e.sibling;if(a!==null){a.return=e.return,C=a;break}C=e.return}}var wS=Math.ceil,ja=cn.ReactCurrentDispatcher,hd=cn.ReactCurrentOwner,gt=cn.ReactCurrentBatchConfig,q=0,Te=null,ge=null,De=0,rt=0,Hr=Bn(0),we=0,Ps=null,mr=0,Tl=0,dd=0,ls=null,Xe=null,fd=0,di=1/0,Bt=null,za=!1,Kc=null,Rn=null,bo=!1,Sn=null,ba=0,us=0,qc=null,ca=-1,ha=0;function Ge(){return q&6?fe():ca!==-1?ca:ca=fe()}function Dn(t){return t.mode&1?q&2&&De!==0?De&-De:nS.transition!==null?(ha===0&&(ha=hy()),ha):(t=Q,t!==0||(t=window.event,t=t===void 0?16:vy(t.type)),t):1}function Ct(t,e,n,r){if(50<us)throw us=0,qc=null,Error(S(185));Js(t,n,r),(!(q&2)||t!==Te)&&(t===Te&&(!(q&2)&&(Tl|=n),we===4&&yn(t,De)),tt(t,r),n===1&&q===0&&!(e.mode&1)&&(di=fe()+500,El&&Hn()))}function tt(t,e){var n=t.callbackNode;n_(t,e);var r=ka(t,t===Te?De:0);if(r===0)n!==null&&Gf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gf(n),e===1)t.tag===0?tS(jp.bind(null,t)):Uy(jp.bind(null,t)),X_(function(){!(q&6)&&Hn()}),n=null;else{switch(dy(r)){case 1:n=Vh;break;case 4:n=uy;break;case 16:n=Ta;break;case 536870912:n=cy;break;default:n=Ta}n=Mv(n,Rv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rv(t,e){if(ca=-1,ha=0,q&6)throw Error(S(327));var n=t.callbackNode;if(Jr()&&t.callbackNode!==n)return null;var r=ka(t,t===Te?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ba(t,r);else{e=r;var i=q;q|=2;var s=xv();(Te!==t||De!==e)&&(Bt=null,di=fe()+500,ar(t,e));do try{SS();break}catch(a){Dv(t,a)}while(1);Jh(),ja.current=s,q=i,ge!==null?e=0:(Te=null,De=0,e=we)}if(e!==0){if(e===2&&(i=wc(t),i!==0&&(r=i,e=Wc(t,i))),e===1)throw n=Ps,ar(t,0),yn(t,r),tt(t,fe()),n;if(e===6)yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!ES(i)&&(e=Ba(t,r),e===2&&(s=wc(t),s!==0&&(r=s,e=Wc(t,s))),e===1))throw n=Ps,ar(t,0),yn(t,r),tt(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Yn(t,Xe,Bt);break;case 3:if(yn(t,r),(r&130023424)===r&&(e=fd+500-fe(),10<e)){if(ka(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ge(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nc(Yn.bind(null,t,Xe,Bt),e);break}Yn(t,Xe,Bt);break;case 4:if(yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wS(r/1960))-r,10<r){t.timeoutHandle=Nc(Yn.bind(null,t,Xe,Bt),r);break}Yn(t,Xe,Bt);break;case 5:Yn(t,Xe,Bt);break;default:throw Error(S(329))}}}return tt(t,fe()),t.callbackNode===n?Rv.bind(null,t):null}function Wc(t,e){var n=ls;return t.current.memoizedState.isDehydrated&&(ar(t,e).flags|=256),t=Ba(t,e),t!==2&&(e=Xe,Xe=n,e!==null&&Gc(e)),t}function Gc(t){Xe===null?Xe=t:Xe.push.apply(Xe,t)}function ES(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yn(t,e){for(e&=~dd,e&=~Tl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kt(e),r=1<<n;t[n]=-1,e&=~r}}function jp(t){if(q&6)throw Error(S(327));Jr();var e=ka(t,0);if(!(e&1))return tt(t,fe()),null;var n=Ba(t,e);if(t.tag!==0&&n===2){var r=wc(t);r!==0&&(e=r,n=Wc(t,r))}if(n===1)throw n=Ps,ar(t,0),yn(t,e),tt(t,fe()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yn(t,Xe,Bt),tt(t,fe()),null}function pd(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(di=fe()+500,El&&Hn())}}function gr(t){Sn!==null&&Sn.tag===0&&!(q&6)&&Jr();var e=q;q|=1;var n=gt.transition,r=Q;try{if(gt.transition=null,Q=1,t)return t()}finally{Q=r,gt.transition=n,q=e,!(q&6)&&Hn()}}function md(){rt=Hr.current,ne(Hr)}function ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Y_(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Qh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Da();break;case 3:ci(),ne(Ze),ne(Be),id();break;case 5:rd(r);break;case 4:ci();break;case 13:ne(se);break;case 19:ne(se);break;case 10:Zh(r.type._context);break;case 22:case 23:md()}n=n.return}if(Te=t,ge=t=xn(t.current,null),De=rt=e,we=0,Ps=null,dd=Tl=mr=0,Xe=ls=null,er!==null){for(e=0;e<er.length;e++)if(n=er[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}er=null}return t}function Dv(t,e){do{var n=ge;try{if(Jh(),aa.current=Va,Fa){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fa=!1}if(pr=0,Ie=ve=oe=null,os=!1,Rs=0,hd.current=null,n===null||n.return===null){we=1,Ps=e,ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=De,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Np(o);if(g!==null){g.flags&=-257,Ap(g,o,a,s,e),g.mode&1&&Cp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Cp(s,u,e),gd();break e}l=Error(S(426))}}else if(ie&&a.mode&1){var _=Np(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ap(_,o,a,s,e),Yh(hi(l,a));break e}}s=l=hi(l,a),we!==4&&(we=2),ls===null?ls=[s]:ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=fv(s,l,e);wp(s,p);break e;case 1:a=l;var d=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Rn===null||!Rn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=pv(s,a,e);wp(s,w);break e}}s=s.return}while(s!==null)}Ov(n)}catch(T){e=T,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function xv(){var t=ja.current;return ja.current=Va,t===null?Va:t}function gd(){(we===0||we===3||we===2)&&(we=4),Te===null||!(mr&268435455)&&!(Tl&268435455)||yn(Te,De)}function Ba(t,e){var n=q;q|=2;var r=xv();(Te!==t||De!==e)&&(Bt=null,ar(t,e));do try{_S();break}catch(i){Dv(t,i)}while(1);if(Jh(),q=n,ja.current=r,ge!==null)throw Error(S(261));return Te=null,De=0,we}function _S(){for(;ge!==null;)Pv(ge)}function SS(){for(;ge!==null&&!WE();)Pv(ge)}function Pv(t){var e=$v(t.alternate,t,rt);t.memoizedProps=t.pendingProps,e===null?Ov(t):ge=e,hd.current=null}function Ov(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mS(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ge=null;return}}else if(n=pS(n,e,rt),n!==null){ge=n;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);we===0&&(we=5)}function Yn(t,e,n){var r=Q,i=gt.transition;try{gt.transition=null,Q=1,IS(t,e,n,r)}finally{gt.transition=i,Q=r}return null}function IS(t,e,n,r){do Jr();while(Sn!==null);if(q&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(r_(t,s),t===Te&&(ge=Te=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,Mv(Ta,function(){return Jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gt.transition,gt.transition=null;var o=Q;Q=1;var a=q;q|=4,hd.current=null,yS(t,n),Nv(n,t),B_(kc),Ca=!!Tc,kc=Tc=null,t.current=n,vS(n),GE(),q=a,Q=o,gt.transition=s}else t.current=n;if(bo&&(bo=!1,Sn=t,ba=i),s=t.pendingLanes,s===0&&(Rn=null),XE(n.stateNode),tt(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(za)throw za=!1,t=Kc,Kc=null,t;return ba&1&&t.tag!==0&&Jr(),s=t.pendingLanes,s&1?t===qc?us++:(us=0,qc=t):us=0,Hn(),null}function Jr(){if(Sn!==null){var t=dy(ba),e=gt.transition,n=Q;try{if(gt.transition=null,Q=16>t?16:t,Sn===null)var r=!1;else{if(t=Sn,Sn=null,ba=0,q&6)throw Error(S(331));var i=q;for(q|=4,C=t.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var c=C;switch(c.tag){case 0:case 11:case 15:as(8,c,s)}var h=c.child;if(h!==null)h.return=c,C=h;else for(;C!==null;){c=C;var f=c.sibling,g=c.return;if(Tv(c),c===u){C=null;break}if(f!==null){f.return=g,C=f;break}C=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:as(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,C=p;break e}C=s.return}}var d=t.current;for(C=d;C!==null;){o=C;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,C=m;else e:for(o=d;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Il(9,a)}}catch(T){ue(a,a.return,T)}if(a===o){C=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,C=w;break e}C=a.return}}if(q=i,Hn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(ml,t)}catch{}r=!0}return r}finally{Q=n,gt.transition=e}}return!1}function zp(t,e,n){e=hi(n,e),e=fv(t,e,1),t=An(t,e,1),e=Ge(),t!==null&&(Js(t,1,e),tt(t,e))}function ue(t,e,n){if(t.tag===3)zp(t,t,n);else for(;e!==null;){if(e.tag===3){zp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))){t=hi(n,t),t=pv(e,t,1),e=An(e,t,1),t=Ge(),e!==null&&(Js(e,1,t),tt(e,t));break}}e=e.return}}function TS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ge(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(De&n)===n&&(we===4||we===3&&(De&130023424)===De&&500>fe()-fd?ar(t,0):dd|=n),tt(t,e)}function Lv(t,e){e===0&&(t.mode&1?(e=Po,Po<<=1,!(Po&130023424)&&(Po=4194304)):e=1);var n=Ge();t=nn(t,e),t!==null&&(Js(t,e,n),tt(t,n))}function kS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lv(t,n)}function CS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Lv(t,n)}var $v;$v=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ze.current)Je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Je=!1,fS(t,e,n);Je=!!(t.flags&131072)}else Je=!1,ie&&e.flags&1048576&&Fy(e,Oa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ua(t,e),t=e.pendingProps;var i=ai(e,Be.current);Xr(e,n),i=od(null,e,r,t,i,n);var s=ad();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,et(r)?(s=!0,xa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,td(e),i.updater=_l,e.stateNode=i,i._reactInternals=e,Lc(e,r,t,n),e=Uc(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Gh(e),qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ua(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AS(r),t=_t(r,t),i){case 0:e=Mc(null,e,r,t,n);break e;case 1:e=xp(null,e,r,t,n);break e;case 11:e=Rp(null,e,r,t,n);break e;case 14:e=Dp(null,e,r,_t(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),Mc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),xp(t,e,r,i,n);case 3:e:{if(vv(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,by(t,e),Ma(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=hi(Error(S(423)),e),e=Pp(t,e,r,n,i);break e}else if(r!==i){i=hi(Error(S(424)),e),e=Pp(t,e,r,n,i);break e}else for(it=Nn(e.stateNode.containerInfo.firstChild),st=e,ie=!0,It=null,n=qy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(li(),r===i){e=rn(t,e,n);break e}qe(t,e,r,n)}e=e.child}return e;case 5:return Wy(e),t===null&&xc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cc(r,i)?o=null:s!==null&&Cc(r,s)&&(e.flags|=32),yv(t,e),qe(t,e,o,n),e.child;case 6:return t===null&&xc(e),null;case 13:return wv(t,e,n);case 4:return nd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ui(e,null,r,n):qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),Rp(t,e,r,i,n);case 7:return qe(t,e,e.pendingProps,n),e.child;case 8:return qe(t,e,e.pendingProps.children,n),e.child;case 12:return qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(La,r._currentValue),r._currentValue=o,s!==null)if(Nt(s.value,o)){if(s.children===i.children&&!Ze.current){e=rn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Jt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Pc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Pc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xr(e,n),i=yt(i),r=r(i),e.flags|=1,qe(t,e,r,n),e.child;case 14:return r=e.type,i=_t(r,e.pendingProps),i=_t(r.type,i),Dp(t,e,r,i,n);case 15:return mv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),ua(t,e),e.tag=1,et(r)?(t=!0,xa(e)):t=!1,Xr(e,n),Hy(e,r,i),Lc(e,r,i,n),Uc(null,e,r,!0,t,n);case 19:return Ev(t,e,n);case 22:return gv(t,e,n)}throw Error(S(156,e.tag))};function Mv(t,e){return ly(t,e)}function NS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(t,e,n,r){return new NS(t,e,n,r)}function yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AS(t){if(typeof t=="function")return yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mh)return 11;if(t===Uh)return 14}return 2}function xn(t,e){var n=t.alternate;return n===null?(n=mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function da(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Lr:return lr(n.children,i,s,e);case $h:o=8,i|=8;break;case ic:return t=mt(12,n,e,i|2),t.elementType=ic,t.lanes=s,t;case sc:return t=mt(13,n,e,i),t.elementType=sc,t.lanes=s,t;case oc:return t=mt(19,n,e,i),t.elementType=oc,t.lanes=s,t;case Kg:return kl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Bg:o=10;break e;case Hg:o=9;break e;case Mh:o=11;break e;case Uh:o=14;break e;case pn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=mt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function lr(t,e,n,r){return t=mt(7,t,r,e),t.lanes=n,t}function kl(t,e,n,r){return t=mt(22,t,r,e),t.elementType=Kg,t.lanes=n,t.stateNode={isHidden:!1},t}function $u(t,e,n){return t=mt(6,t,null,e),t.lanes=n,t}function Mu(t,e,n){return e=mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function RS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vd(t,e,n,r,i,s,o,a,l){return t=new RS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},td(s),t}function DS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Or,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Uv(t){if(!t)return Fn;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(et(n))return My(t,n,e)}return e}function Fv(t,e,n,r,i,s,o,a,l){return t=vd(n,r,!0,t,i,s,o,a,l),t.context=Uv(null),n=t.current,r=Ge(),i=Dn(n),s=Jt(r,i),s.callback=e??null,An(n,s,i),t.current.lanes=i,Js(t,i,r),tt(t,r),t}function Cl(t,e,n,r){var i=e.current,s=Ge(),o=Dn(i);return n=Uv(n),e.context===null?e.context=n:e.pendingContext=n,e=Jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=An(i,e,o),t!==null&&(Ct(t,i,o,s),oa(t,i,o)),o}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wd(t,e){bp(t,e),(t=t.alternate)&&bp(t,e)}function xS(){return null}var Vv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ed(t){this._internalRoot=t}Nl.prototype.render=Ed.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Cl(t,e,null,null)};Nl.prototype.unmount=Ed.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gr(function(){Cl(null,t,null,null)}),e[tn]=null}};function Nl(t){this._internalRoot=t}Nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=my();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gn.length&&e!==0&&e<gn[n].priority;n++);gn.splice(n,0,t),n===0&&yy(t)}};function _d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Al(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function PS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ha(o);s.call(u)}}var o=Fv(e,r,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=o,t[tn]=o.current,Ts(t.nodeType===8?t.parentNode:t),gr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ha(l);a.call(u)}}var l=vd(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=l,t[tn]=l.current,Ts(t.nodeType===8?t.parentNode:t),gr(function(){Cl(e,l,n,r)}),l}function Rl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ha(o);a.call(l)}}Cl(e,o,t,i)}else o=PS(n,e,t,i,r);return Ha(o)}fy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gi(e.pendingLanes);n!==0&&(jh(e,n|1),tt(e,fe()),!(q&6)&&(di=fe()+500,Hn()))}break;case 13:gr(function(){var r=nn(t,1);if(r!==null){var i=Ge();Ct(r,t,1,i)}}),wd(t,1)}};zh=function(t){if(t.tag===13){var e=nn(t,134217728);if(e!==null){var n=Ge();Ct(e,t,134217728,n)}wd(t,134217728)}};py=function(t){if(t.tag===13){var e=Dn(t),n=nn(t,e);if(n!==null){var r=Ge();Ct(n,t,e,r)}wd(t,e)}};my=function(){return Q};gy=function(t,e){var n=Q;try{return Q=t,e()}finally{Q=n}};gc=function(t,e,n){switch(e){case"input":if(uc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wl(r);if(!i)throw Error(S(90));Wg(r),uc(r,i)}}}break;case"textarea":Qg(t,n);break;case"select":e=n.value,e!=null&&Wr(t,!!n.multiple,e,!1)}};ny=pd;ry=gr;var OS={usingClientEntryPoint:!1,Events:[eo,Fr,wl,ey,ty,pd]},Bi={findFiberByHostInstance:Zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},LS={bundleType:Bi.bundleType,version:Bi.version,rendererPackageName:Bi.rendererPackageName,rendererConfig:Bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=oy(t),t===null?null:t.stateNode},findFiberByHostInstance:Bi.findFiberByHostInstance||xS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{ml=Bo.inject(LS),Mt=Bo}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_d(e))throw Error(S(200));return DS(t,e,null,n)};ut.createRoot=function(t,e){if(!_d(t))throw Error(S(299));var n=!1,r="",i=Vv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vd(t,1,!1,null,null,n,!1,r,i),t[tn]=e.current,Ts(t.nodeType===8?t.parentNode:t),new Ed(e)};ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=oy(e),t=t===null?null:t.stateNode,t};ut.flushSync=function(t){return gr(t)};ut.hydrate=function(t,e,n){if(!Al(e))throw Error(S(200));return Rl(null,t,e,!0,n)};ut.hydrateRoot=function(t,e,n){if(!_d(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fv(e,null,t,1,n??null,i,!1,s,o),t[tn]=e.current,Ts(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nl(e)};ut.render=function(t,e,n){if(!Al(e))throw Error(S(200));return Rl(null,t,e,!1,n)};ut.unmountComponentAtNode=function(t){if(!Al(t))throw Error(S(40));return t._reactRootContainer?(gr(function(){Rl(null,null,t,!1,function(){t._reactRootContainer=null,t[tn]=null})}),!0):!1};ut.unstable_batchedUpdates=pd;ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Al(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Rl(t,e,n,!1,r)};ut.version="18.2.0-next-9e3b772b8-20220608";function jv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jv)}catch(t){console.error(t)}}jv(),Fg.exports=ut;var $S=Fg.exports,Hp=$S;nc.createRoot=Hp.createRoot,nc.hydrateRoot=Hp.hydrateRoot;/**
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
 */const zv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},MS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},bv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new US;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class US extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FS=function(t){const e=zv(t);return bv.encodeByteArray(e,!0)},Ka=function(t){return FS(t).replace(/\./g,"")},Bv=function(t){try{return bv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const jS=()=>VS().__FIREBASE_DEFAULTS__,zS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bv(t[1]);return e&&JSON.parse(e)},Sd=()=>{try{return jS()||zS()||bS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hv=t=>{var e,n;return(n=(e=Sd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BS=t=>{const e=Hv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kv=()=>{var t;return(t=Sd())===null||t===void 0?void 0:t.config},qv=t=>{var e;return(e=Sd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class HS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function KS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ka(JSON.stringify(n)),Ka(JSON.stringify(o)),a].join(".")}/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function WS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QS(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YS(){try{return typeof indexedDB=="object"}catch{return!1}}function XS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const JS="FirebaseError";class hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JS,Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ZS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new hn(i,a,r)}}function ZS(t,e){return t.replace(eI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const eI=/\{\$([^}]+)}/g;function tI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Kp(s)&&Kp(o)){if(!qa(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Kp(t){return t!==null&&typeof t=="object"}/**
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
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nI(t,e){const n=new rI(t,e);return n.subscribe.bind(n)}class rI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");iI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Uu),i.error===void 0&&(i.error=Uu),i.complete===void 0&&(i.complete=Uu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function iI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uu(){}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xn="[DEFAULT]";/**
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
 */class sI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new HS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aI(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oI(t){return t===Xn?void 0:t}function aI(t){return t.instantiationMode==="EAGER"}/**
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
 */class lI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const uI={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},cI=W.INFO,hI={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},dI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Id{constructor(e){this.name=e,this._logLevel=cI,this._logHandler=dI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const fI=(t,e)=>e.some(n=>t instanceof n);let qp,Wp;function pI(){return qp||(qp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mI(){return Wp||(Wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wv=new WeakMap,Qc=new WeakMap,Gv=new WeakMap,Fu=new WeakMap,Td=new WeakMap;function gI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Pn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wv.set(n,t)}).catch(()=>{}),Td.set(e,t),e}function yI(t){if(Qc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qc.set(t,e)}let Yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vI(t){Yc=t(Yc)}function wI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vu(this),e,...n);return Gv.set(r,e.sort?e.sort():[e]),Pn(r)}:mI().includes(t)?function(...e){return t.apply(Vu(this),e),Pn(Wv.get(this))}:function(...e){return Pn(t.apply(Vu(this),e))}}function EI(t){return typeof t=="function"?wI(t):(t instanceof IDBTransaction&&yI(t),fI(t,pI())?new Proxy(t,Yc):t)}function Pn(t){if(t instanceof IDBRequest)return gI(t);if(Fu.has(t))return Fu.get(t);const e=EI(t);return e!==t&&(Fu.set(t,e),Td.set(e,t)),e}const Vu=t=>Td.get(t);function _I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Pn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Pn(o.result),l.oldVersion,l.newVersion,Pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const SI=["get","getKey","getAll","getAllKeys","count"],II=["put","add","delete","clear"],ju=new Map;function Gp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ju.get(e))return ju.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=II.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ju.set(e,s),s}vI(t=>({...t,get:(e,n,r)=>Gp(e,n)||t.get(e,n,r),has:(e,n)=>!!Gp(e,n)||t.has(e,n)}));/**
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
 */class TI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xc="@firebase/app",Qp="0.9.12";/**
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
 */const vr=new Id("@firebase/app"),CI="@firebase/app-compat",NI="@firebase/analytics-compat",AI="@firebase/analytics",RI="@firebase/app-check-compat",DI="@firebase/app-check",xI="@firebase/auth",PI="@firebase/auth-compat",OI="@firebase/database",LI="@firebase/database-compat",$I="@firebase/functions",MI="@firebase/functions-compat",UI="@firebase/installations",FI="@firebase/installations-compat",VI="@firebase/messaging",jI="@firebase/messaging-compat",zI="@firebase/performance",bI="@firebase/performance-compat",BI="@firebase/remote-config",HI="@firebase/remote-config-compat",KI="@firebase/storage",qI="@firebase/storage-compat",WI="@firebase/firestore",GI="@firebase/firestore-compat",QI="firebase",YI="9.22.2";/**
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
 */const Jc="[DEFAULT]",XI={[Xc]:"fire-core",[CI]:"fire-core-compat",[AI]:"fire-analytics",[NI]:"fire-analytics-compat",[DI]:"fire-app-check",[RI]:"fire-app-check-compat",[xI]:"fire-auth",[PI]:"fire-auth-compat",[OI]:"fire-rtdb",[LI]:"fire-rtdb-compat",[$I]:"fire-fn",[MI]:"fire-fn-compat",[UI]:"fire-iid",[FI]:"fire-iid-compat",[VI]:"fire-fcm",[jI]:"fire-fcm-compat",[zI]:"fire-perf",[bI]:"fire-perf-compat",[BI]:"fire-rc",[HI]:"fire-rc-compat",[KI]:"fire-gcs",[qI]:"fire-gcs-compat",[WI]:"fire-fst",[GI]:"fire-fst-compat","fire-js":"fire-js",[QI]:"fire-js-all"};/**
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
 */const Wa=new Map,Zc=new Map;function JI(t,e){try{t.container.addComponent(e)}catch(n){vr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Zc.has(e))return vr.debug(`There were multiple attempts to register component ${e}.`),!1;Zc.set(e,t);for(const n of Wa.values())JI(n,t);return!0}function kd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ZI={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},On=new no("app","Firebase",ZI);/**
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
 */class eT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const Ci=YI;function Qv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw On.create("bad-app-name",{appName:String(i)});if(n||(n=Kv()),!n)throw On.create("no-options");const s=Wa.get(i);if(s){if(qa(n,s.options)&&qa(r,s.config))return s;throw On.create("duplicate-app",{appName:i})}const o=new lI(i);for(const l of Zc.values())o.addComponent(l);const a=new eT(n,r,o);return Wa.set(i,a),a}function Yv(t=Jc){const e=Wa.get(t);if(!e&&t===Jc&&Kv())return Qv();if(!e)throw On.create("no-app",{appName:t});return e}function Ln(t,e,n){var r;let i=(r=XI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vr.warn(a.join(" "));return}fi(new yr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const tT="firebase-heartbeat-database",nT=1,Os="firebase-heartbeat-store";let zu=null;function Xv(){return zu||(zu=_I(tT,nT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Os)}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),zu}async function rT(t){try{return await(await Xv()).transaction(Os).objectStore(Os).get(Jv(t))}catch(e){if(e instanceof hn)vr.warn(e.message);else{const n=On.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vr.warn(n.message)}}}async function Yp(t,e){try{const r=(await Xv()).transaction(Os,"readwrite");await r.objectStore(Os).put(e,Jv(t)),await r.done}catch(n){if(n instanceof hn)vr.warn(n.message);else{const r=On.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vr.warn(r.message)}}}function Jv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const iT=1024,sT=30*24*60*60*1e3;class oT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=sT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xp(),{heartbeatsToSend:n,unsentEntries:r}=aT(this._heartbeatsCache.heartbeats),i=Ka(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xp(){return new Date().toISOString().substring(0,10)}function aT(t,e=iT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YS()?XS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jp(t){return Ka(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function uT(t){fi(new yr("platform-logger",e=>new TI(e),"PRIVATE")),fi(new yr("heartbeat",e=>new oT(e),"PRIVATE")),Ln(Xc,Qp,t),Ln(Xc,Qp,"esm2017"),Ln("fire-js","")}uT("");var cT="firebase",hT="9.22.2";/**
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
 */Ln(cT,hT,"app");function Cd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Zv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dT=Zv,e0=new no("auth","Firebase",Zv());/**
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
 */const Ga=new Id("@firebase/auth");function fT(t,...e){Ga.logLevel<=W.WARN&&Ga.warn(`Auth (${Ci}): ${t}`,...e)}function fa(t,...e){Ga.logLevel<=W.ERROR&&Ga.error(`Auth (${Ci}): ${t}`,...e)}/**
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
 */function zt(t,...e){throw Nd(t,...e)}function Ft(t,...e){return Nd(t,...e)}function t0(t,e,n){const r=Object.assign(Object.assign({},dT()),{[e]:n});return new no("auth","Firebase",r).create(e,{appName:t.name})}function pT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&zt(t,"argument-error"),t0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return e0.create(t,...e)}function F(t,e,...n){if(!t)throw Nd(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fa(e),new Error(e)}function sn(t,e){t||Gt(e)}/**
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
 */function eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mT(){return Zp()==="http:"||Zp()==="https:"}function Zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mT()||WS()||"connection"in navigator)?navigator.onLine:!0}function yT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class io{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=qS()||GS()}get(){return gT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ad(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class n0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const vT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wT=new io(3e4,6e4);function r0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function so(t,e,n,r,i={}){return i0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ro(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),n0.fetch()(s0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function i0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},vT),e);try{const i=new _T(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ho(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ho(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw t0(t,c,u);zt(t,c)}}catch(i){if(i instanceof hn)throw i;zt(t,"network-request-failed",{message:String(i)})}}async function ET(t,e,n,r,i={}){const s=await so(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function s0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ad(t.config,i):`${t.config.apiScheme}://${i}`}class _T{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),wT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ft(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ST(t,e){return so(t,"POST","/v1/accounts:delete",e)}async function IT(t,e){return so(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function cs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TT(t,e=!1){const n=nt(t),r=await n.getIdToken(e),i=Rd(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:cs(bu(i.auth_time)),issuedAtTime:cs(bu(i.iat)),expirationTime:cs(bu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function bu(t){return Number(t)*1e3}function Rd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bv(n);return i?JSON.parse(i):(fa("Failed to decode base64 JWT payload"),null)}catch(i){return fa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function kT(t){const e=Rd(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hn&&CT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class NT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class o0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cs(this.lastLoginAt),this.creationTime=cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ls(t,IT(n,{idToken:r}));F(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?DT(s.providerUserInfo):[],a=RT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new o0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function AT(t){const e=nt(t);await Qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function DT(t){return t.map(e=>{var{providerId:n}=e,r=Cd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xT(t,e){const n=await i0(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=s0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",n0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $s;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
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
 */function fn(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new o0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TT(this,e)}reload(){return AT(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ls(this,ST(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:N,stsTokenManager:D}=n;F(m&&D,e,"internal-error");const P=$s.fromJSON(this.name,D);F(typeof m=="string",e,"internal-error"),fn(h,e.name),fn(f,e.name),F(typeof w=="boolean",e,"internal-error"),F(typeof T=="boolean",e,"internal-error"),fn(g,e.name),fn(y,e.name),fn(v,e.name),fn(_,e.name),fn(p,e.name),fn(d,e.name);const X=new ur({uid:m,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:d});return N&&Array.isArray(N)&&(X.providerData=N.map(b=>Object.assign({},b))),_&&(X._redirectEventId=_),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new $s;i.updateFromServerResponse(n);const s=new ur({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qa(s),s}}/**
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
 */const em=new Map;function Qt(t){sn(t instanceof Function,"Expected a class definition");let e=em.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,em.set(t,e),e)}/**
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
 */class a0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a0.type="NONE";const tm=a0;/**
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
 */function pa(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pa(this.userKey,i.apiKey,s),this.fullPersistenceKey=pa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(Qt(tm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Qt(tm);const o=pa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ur._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Zr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zr(s,e,r))}}/**
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
 */function nm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d0(e))return"Blackberry";if(f0(e))return"Webos";if(Dd(e))return"Safari";if((e.includes("chrome/")||u0(e))&&!e.includes("edge/"))return"Chrome";if(h0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function l0(t=He()){return/firefox\//i.test(t)}function Dd(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u0(t=He()){return/crios\//i.test(t)}function c0(t=He()){return/iemobile/i.test(t)}function h0(t=He()){return/android/i.test(t)}function d0(t=He()){return/blackberry/i.test(t)}function f0(t=He()){return/webos/i.test(t)}function Dl(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PT(t=He()){var e;return Dl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OT(){return QS()&&document.documentMode===10}function p0(t=He()){return Dl(t)||h0(t)||f0(t)||d0(t)||/windows phone/i.test(t)||c0(t)}function LT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function m0(t,e=[]){let n;switch(t){case"Browser":n=nm(He());break;case"Worker":n=`${nm(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}async function g0(t,e){return so(t,"GET","/v2/recaptchaConfig",r0(t,e))}function rm(t){return t!==void 0&&t.enterprise!==void 0}class y0{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function $T(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function v0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$T().appendChild(r)})}function MT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const UT="https://www.google.com/recaptcha/enterprise.js?render=",FT="recaptcha-enterprise",VT="NO_RECAPTCHA";class jT{constructor(e){this.type=FT,this.auth=oo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{g0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new y0(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;rm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(VT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&rm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}v0(UT+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class zT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class bT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new im(this),this.idTokenSubscription=new im(this),this.beforeStateQueue=new zT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}async initializeRecaptchaConfig(){const e=await g0(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new y0(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new jT(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new no("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function oo(t){return nt(t)}class im{constructor(e){this.auth=e,this.observer=null,this.addObserver=nI(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function BT(t,e){const n=kd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qa(s,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function HT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KT(t,e,n){const r=oo(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=w0(e),{host:o,port:a}=qT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||WT()}function w0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qT(t){const e=w0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:sm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:sm(o)}}}function sm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class E0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}/**
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
 */async function ei(t,e){return ET(t,"POST","/v1/accounts:signInWithIdp",r0(t,e))}/**
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
 */const GT="http://localhost";class wr extends E0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new wr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ei(e,n)}buildRequest(){const e={requestUri:GT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
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
 */class xd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ao extends xd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vn extends ao{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
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
 */class Kt extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
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
 */class wn extends ao{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
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
 */class En extends ao{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return En.credential(n,r)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
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
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ur._fromIdTokenResponse(e,r,i),o=om(r);return new pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=om(r);return new pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function om(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ya extends hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ya.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ya(e,n,r,i)}}function _0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ya._fromErrorAndOperation(t,s,e,r):s})}async function QT(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
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
 */async function YT(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ls(t,_0(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=Rd(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
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
 */async function XT(t,e,n=!1){const r="signIn",i=await _0(t,r,e),s=await pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function JT(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function ZT(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function ek(t){return nt(t).signOut()}const Xa="__sak";/**
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
 */class S0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xa,"1"),this.storage.removeItem(Xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function tk(){const t=He();return Dd(t)||Dl(t)}const nk=1e3,rk=10;class I0 extends S0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tk()&&LT(),this.fallbackToPolling=p0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}I0.type="LOCAL";const ik=I0;/**
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
 */class T0 extends S0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}T0.type="SESSION";const k0=T0;/**
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
 */function sk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await sk(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xl.receivers=[];/**
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
 */function Pd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ok{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Pd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Vt(){return window}function ak(t){Vt().location.href=t}/**
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
 */function C0(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function lk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ck(){return C0()?self:null}/**
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
 */const N0="firebaseLocalStorageDb",hk=1,Ja="firebaseLocalStorage",A0="fbase_key";class lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pl(t,e){return t.transaction([Ja],e?"readwrite":"readonly").objectStore(Ja)}function dk(){const t=indexedDB.deleteDatabase(N0);return new lo(t).toPromise()}function th(){const t=indexedDB.open(N0,hk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ja,{keyPath:A0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ja)?e(r):(r.close(),await dk(),e(await th()))})})}async function am(t,e,n){const r=Pl(t,!0).put({[A0]:e,value:n});return new lo(r).toPromise()}async function fk(t,e){const n=Pl(t,!1).get(e),r=await new lo(n).toPromise();return r===void 0?null:r.value}function lm(t,e){const n=Pl(t,!0).delete(e);return new lo(n).toPromise()}const pk=800,mk=3;class R0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xl._getInstance(ck()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lk(),!this.activeServiceWorker)return;this.sender=new ok(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await th();return await am(e,Xa,"1"),await lm(e,Xa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>am(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pl(i,!1).getAll();return new lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R0.type="LOCAL";const gk=R0;new io(3e4,6e4);/**
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
 */function D0(t,e){return e?Qt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Od extends E0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yk(t){return XT(t.auth,new Od(t),t.bypassAuthState)}function vk(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),YT(n,new Od(t),t.bypassAuthState)}async function wk(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),QT(n,new Od(t),t.bypassAuthState)}/**
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
 */class x0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yk;case"linkViaPopup":case"linkViaRedirect":return wk;case"reauthViaPopup":case"reauthViaRedirect":return vk;default:zt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ek=new io(2e3,1e4);async function _k(t,e,n){const r=oo(t);pT(t,e,xd);const i=D0(r,n);return new nr(r,"signInViaPopup",e,i).executeNotNull()}class nr extends x0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Pd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ek.get())};e()}}nr.currentPopupAction=null;/**
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
 */const Sk="pendingRedirect",ma=new Map;class Ik extends x0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ma.get(this.auth._key());if(!e){try{const r=await Tk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ma.set(this.auth._key(),e)}return this.bypassAuthState||ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tk(t,e){const n=Nk(e),r=Ck(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kk(t,e){ma.set(t._key(),e)}function Ck(t){return Qt(t._redirectPersistence)}function Nk(t){return pa(Sk,t.config.apiKey,t.name)}async function Ak(t,e,n=!1){const r=oo(t),i=D0(r,e),o=await new Ik(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Rk=10*60*1e3;class Dk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!P0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rk&&this.cachedEventUids.clear(),this.cachedEventUids.has(um(e))}saveEventToCache(e){this.cachedEventUids.add(um(e)),this.lastProcessedEventTime=Date.now()}}function um(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function P0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P0(t);default:return!1}}/**
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
 */async function Pk(t,e={}){return so(t,"GET","/v1/projects",e)}/**
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
 */const Ok=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lk=/^https?/;async function $k(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Pk(t);for(const n of e)try{if(Mk(n))return}catch{}zt(t,"unauthorized-domain")}function Mk(t){const e=eh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Lk.test(n))return!1;if(Ok.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Uk=new io(3e4,6e4);function cm(){const t=Vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Fk(t){return new Promise((e,n)=>{var r,i,s;function o(){cm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cm(),n(Ft(t,"network-request-failed"))},timeout:Uk.get()})}if(!((i=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Vt().gapi)===null||s===void 0)&&s.load)o();else{const a=MT("iframefcb");return Vt()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},v0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ga=null,e})}let ga=null;function Vk(t){return ga=ga||Fk(t),ga}/**
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
 */const jk=new io(5e3,15e3),zk="__/auth/iframe",bk="emulator/auth/iframe",Bk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kk(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ad(e,bk):`https://${t.config.authDomain}/${zk}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},i=Hk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ro(r).slice(1)}`}async function qk(t){const e=await Vk(t),n=Vt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Kk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Vt().setTimeout(()=>{s(o)},jk.get());function l(){Vt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Wk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gk=500,Qk=600,Yk="_blank",Xk="http://localhost";class hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jk(t,e,n,r=Gk,i=Qk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Wk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();n&&(a=u0(u)?Yk:n),l0(u)&&(e=e||Xk,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(PT(u)&&a!=="_self")return Zk(e||"",a),new hm(null);const h=window.open(e||"",a,c);F(h,t,"popup-blocked");try{h.focus()}catch{}return new hm(h)}function Zk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const eC="__/auth/handler",tC="emulator/auth/handler",nC=encodeURIComponent("fac");async function dm(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:i};if(e instanceof xd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ao){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${nC}=${encodeURIComponent(l)}`:"";return`${rC(t)}?${ro(a).slice(1)}${u}`}function rC({config:t}){return t.emulator?Ad(t,tC):`https://${t.authDomain}/${eC}`}/**
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
 */const Bu="webStorageSupport";class iC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k0,this._completeRedirectFn=Ak,this._overrideRedirectResult=kk}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await dm(e,n,r,eh(),i);return Jk(e,o,Pd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dm(e,n,r,eh(),i);return ak(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qk(e),r=new Dk(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bu,{type:Bu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bu];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$k(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p0()||Dd()||Dl()}}const sC=iC;var fm="@firebase/auth",pm="0.23.2";/**
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
 */class oC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lC(t){fi(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m0(t)},u=new bT(r,i,s,l);return HT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new yr("auth-internal",e=>{const n=oo(e.getProvider("auth").getImmediate());return(r=>new oC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(fm,pm,aC(t)),Ln(fm,pm,"esm2017")}/**
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
 */const uC=5*60,cC=qv("authIdTokenMaxAge")||uC;let mm=null;const hC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cC)return;const i=n==null?void 0:n.token;mm!==i&&(mm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dC(t=Yv()){const e=kd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BT(t,{popupRedirectResolver:sC,persistence:[gk,ik,k0]}),r=qv("authTokenSyncURL");if(r){const s=hC(r);ZT(n,s,()=>s(n.currentUser)),JT(n,o=>s(o))}const i=Hv("auth");return i&&KT(n,`http://${i}`),n}lC("Browser");var fC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,Ld=Ld||{},M=fC||self;function Ol(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function uo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pC(t){return Object.prototype.hasOwnProperty.call(t,Hu)&&t[Hu]||(t[Hu]=++mC)}var Hu="closure_uid_"+(1e9*Math.random()>>>0),mC=0;function gC(t,e,n){return t.call.apply(t.bind,arguments)}function yC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=gC:je=yC,je.apply(null,arguments)}function Ko(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ce(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Kn(){this.s=this.s,this.o=this.o}var vC=0;Kn.prototype.s=!1;Kn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vC!=0)&&pC(this)};Kn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const O0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $d(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function gm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ol(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var wC=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{M.addEventListener("test",()=>{},e),M.removeEventListener("test",()=>{},e)}catch{}return t}();function Ms(t){return/^[\s\xa0]*$/.test(t)}function Ll(){var t=M.navigator;return t&&(t=t.userAgent)?t:""}function Ot(t){return Ll().indexOf(t)!=-1}function Md(t){return Md[" "](t),t}Md[" "]=function(){};function EC(t,e){var n=dN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var _C=Ot("Opera"),mi=Ot("Trident")||Ot("MSIE"),L0=Ot("Edge"),nh=L0||mi,$0=Ot("Gecko")&&!(Ll().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge"))&&!(Ot("Trident")||Ot("MSIE"))&&!Ot("Edge"),SC=Ll().toLowerCase().indexOf("webkit")!=-1&&!Ot("Edge");function M0(){var t=M.document;return t?t.documentMode:void 0}var rh;e:{var Ku="",qu=function(){var t=Ll();if($0)return/rv:([^\);]+)(\)|;)/.exec(t);if(L0)return/Edge\/([\d\.]+)/.exec(t);if(mi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SC)return/WebKit\/(\S+)/.exec(t);if(_C)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qu&&(Ku=qu?qu[1]:""),mi){var Wu=M0();if(Wu!=null&&Wu>parseFloat(Ku)){rh=String(Wu);break e}}rh=Ku}var ih;if(M.document&&mi){var ym=M0();ih=ym||parseInt(rh,10)||void 0}else ih=void 0;var IC=ih;function Us(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($0){e:{try{Md(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:TC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Us.$.h.call(this)}}Ce(Us,ze);var TC={2:"touch",3:"pen",4:"mouse"};Us.prototype.h=function(){Us.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var co="closure_listenable_"+(1e6*Math.random()|0),kC=0;function CC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++kC,this.fa=this.ia=!1}function $l(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ud(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function NC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function U0(t){const e={};for(const n in t)e[n]=t[n];return e}const vm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<vm.length;s++)n=vm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ml(t){this.src=t,this.g={},this.h=0}Ml.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=oh(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new CC(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function sh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=O0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&($l(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function oh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Fd="closure_lm_"+(1e6*Math.random()|0),Gu={};function V0(t,e,n,r,i){if(r&&r.once)return z0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)V0(t,e[s],n,r,i);return null}return n=zd(n),t&&t[co]?t.O(e,n,uo(r)?!!r.capture:!!r,i):j0(t,e,n,!1,r,i)}function j0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=uo(i)?!!i.capture:!!i,a=jd(t);if(a||(t[Fd]=a=new Ml(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=AC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(B0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function AC(){function t(n){return e.call(t.src,t.listener,n)}const e=RC;return t}function z0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)z0(t,e[s],n,r,i);return null}return n=zd(n),t&&t[co]?t.P(e,n,uo(r)?!!r.capture:!!r,i):j0(t,e,n,!0,r,i)}function b0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)b0(t,e[s],n,r,i);else r=uo(r)?!!r.capture:!!r,n=zd(n),t&&t[co]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=oh(s,n,r,i),-1<n&&($l(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=jd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=oh(e,n,r,i)),(n=-1<t?e[t]:null)&&Vd(n))}function Vd(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[co])sh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(B0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jd(e))?(sh(n,t),n.h==0&&(n.src=null,e[Fd]=null)):$l(t)}}}function B0(t){return t in Gu?Gu[t]:Gu[t]="on"+t}function RC(t,e){if(t.fa)t=!0;else{e=new Us(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Vd(t),t=n.call(r,e)}return t}function jd(t){return t=t[Fd],t instanceof Ml?t:null}var Qu="__closure_events_fn_"+(1e9*Math.random()>>>0);function zd(t){return typeof t=="function"?t:(t[Qu]||(t[Qu]=function(e){return t.handleEvent(e)}),t[Qu])}function ke(){Kn.call(this),this.i=new Ml(this),this.S=this,this.J=null}Ce(ke,Kn);ke.prototype[co]=!0;ke.prototype.removeEventListener=function(t,e,n,r){b0(this,t,e,n,r)};function xe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),F0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=qo(o,r,!0,e)&&i}if(o=e.g=t,i=qo(o,r,!0,e)&&i,i=qo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=qo(o,r,!1,e)&&i}ke.prototype.N=function(){if(ke.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)$l(n[r]);delete t.g[e],t.h--}}this.J=null};ke.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ke.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function qo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&sh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var bd=M.JSON.stringify;class DC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xC(){var t=Bd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class PC{constructor(){this.h=this.g=null}add(e,n){const r=H0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var H0=new DC(()=>new OC,t=>t.reset());class OC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function $C(t){M.setTimeout(()=>{throw t},0)}let Fs,Vs=!1,Bd=new PC,K0=()=>{const t=M.Promise.resolve(void 0);Fs=()=>{t.then(MC)}};var MC=()=>{for(var t;t=xC();){try{t.h.call(t.g)}catch(n){$C(n)}var e=H0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vs=!1};function Ul(t,e){ke.call(this),this.h=t||1,this.g=e||M,this.j=je(this.qb,this),this.l=Date.now()}Ce(Ul,ke);k=Ul.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xe(this,"tick"),this.ga&&(Hd(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){Ul.$.N.call(this),Hd(this),delete this.g};function Kd(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(t,e||0)}function q0(t){t.g=Kd(()=>{t.g=null,t.i&&(t.i=!1,q0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class UC extends Kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:q0(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(t){Kn.call(this),this.h=t,this.g={}}Ce(js,Kn);var wm=[];function W0(t,e,n,r){Array.isArray(n)||(n&&(wm[0]=n.toString()),n=wm);for(var i=0;i<n.length;i++){var s=V0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function G0(t){Ud(t.g,function(e,n){this.g.hasOwnProperty(n)&&Vd(e)},t),t.g={}}js.prototype.N=function(){js.$.N.call(this),G0(this)};js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fl(){this.g=!0}Fl.prototype.Ea=function(){this.g=!1};function FC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function VC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Kr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zC(t,n)+(r?" "+r:"")})}function jC(t,e){t.info(function(){return"TIMEOUT: "+e})}Fl.prototype.info=function(){};function zC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return bd(n)}catch{return e}}var kr={},Em=null;function Vl(){return Em=Em||new ke}kr.Ta="serverreachability";function Q0(t){ze.call(this,kr.Ta,t)}Ce(Q0,ze);function zs(t){const e=Vl();xe(e,new Q0(e))}kr.STAT_EVENT="statevent";function Y0(t,e){ze.call(this,kr.STAT_EVENT,t),this.stat=e}Ce(Y0,ze);function We(t){const e=Vl();xe(e,new Y0(e,t))}kr.Ua="timingevent";function X0(t,e){ze.call(this,kr.Ua,t),this.size=e}Ce(X0,ze);function ho(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){t()},e)}var jl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},J0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qd(){}qd.prototype.h=null;function _m(t){return t.h||(t.h=t.i())}function Z0(){}var fo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wd(){ze.call(this,"d")}Ce(Wd,ze);function Gd(){ze.call(this,"c")}Ce(Gd,ze);var ah;function zl(){}Ce(zl,qd);zl.prototype.g=function(){return new XMLHttpRequest};zl.prototype.i=function(){return{}};ah=new zl;function po(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new js(this),this.P=bC,t=nh?125:void 0,this.V=new Ul(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ew}function ew(){this.i=null,this.g="",this.h=!1}var bC=45e3,lh={},Za={};k=po.prototype;k.setTimeout=function(t){this.P=t};function uh(t,e,n){t.L=1,t.v=Bl(on(e)),t.s=n,t.S=!0,tw(t,null)}function tw(t,e){t.G=Date.now(),mo(t),t.A=on(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),uw(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ew,t.g=Dw(t.l,n?e:null,!t.s),0<t.O&&(t.M=new UC(je(t.Pa,t,t.g),t.O)),W0(t.U,t.g,"readystatechange",t.nb),e=t.I?U0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),zs(),FC(t.j,t.u,t.A,t.m,t.W,t.s)}k.nb=function(t){t=t.target;const e=this.M;e&&Lt(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const c=Lt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||nh||this.g&&(this.h.h||this.g.ja()||km(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?zs(3):zs(2)),bl(this);var n=this.g.da();this.ca=n;t:if(nw(this)){var r=km(this.g);t="";var i=r.length,s=Lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),hs(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,VC(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ms(a)){var u=a;break t}}u=null}if(n=u)Kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ch(this,n);else{this.i=!1,this.o=3,We(12),rr(this),hs(this);break e}}this.S?(rw(this,c,o),nh&&this.i&&c==3&&(W0(this.U,this.V,"tick",this.mb),this.V.start())):(Kr(this.j,this.m,o,null),ch(this,o)),c==4&&rr(this),this.i&&!this.J&&(c==4?Cw(this.l,this):(this.i=!1,mo(this)))}else uN(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),rr(this),hs(this)}}}catch{}finally{}};function nw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function rw(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=BC(t,n),i==Za){e==4&&(t.o=4,We(14),r=!1),Kr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==lh){t.o=4,We(15),Kr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Kr(t.j,t.m,i,null),ch(t,i);nw(t)&&i!=Za&&i!=lh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,We(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ef(e),e.M=!0,We(11))):(Kr(t.j,t.m,n,"[Invalid Chunked Response]"),rr(t),hs(t))}k.mb=function(){if(this.g){var t=Lt(this.g),e=this.g.ja();this.C<e.length&&(bl(this),rw(this,t,e),this.i&&t!=4&&mo(this))}};function BC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Za:(n=Number(e.substring(n,r)),isNaN(n)?lh:(r+=1,r+n>e.length?Za:(e=e.slice(r,r+n),t.C=r+n,e)))}k.cancel=function(){this.J=!0,rr(this)};function mo(t){t.Y=Date.now()+t.P,iw(t,t.P)}function iw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ho(je(t.lb,t),e)}function bl(t){t.B&&(M.clearTimeout(t.B),t.B=null)}k.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(jC(this.j,this.A),this.L!=2&&(zs(),We(17)),rr(this),this.o=2,hs(this)):iw(this,this.Y-t)};function hs(t){t.l.H==0||t.J||Cw(t.l,t)}function rr(t){bl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Hd(t.V),G0(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ch(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||hh(n.i,t))){if(!t.K&&hh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)nl(n),ql(n);else break e;Zd(n),We(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ho(je(n.ib,n),6e3));if(1>=dw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ir(n,11)}else if((t.K||n.g==t)&&nl(n),!Ms(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Qd(s,s.h),s.h=null))}if(r.F){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ee(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Rw(r,r.J?r.pa:null,r.Y),o.K){fw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(bl(a),mo(a)),r.g=o}else Tw(r);0<n.j.length&&Wl(n)}else u[0]!="stop"&&u[0]!="close"||ir(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ir(n,7):Jd(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}zs(4)}catch{}}function HC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ol(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function KC(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ol(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function sw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ol(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=KC(t),r=HC(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var ow=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function cr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof cr){this.h=t.h,el(this,t.j),this.s=t.s,this.g=t.g,tl(this,t.m),this.l=t.l;var e=t.i,n=new bs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Sm(this,n),this.o=t.o}else t&&(e=String(t).match(ow))?(this.h=!1,el(this,e[1]||"",!0),this.s=Yi(e[2]||""),this.g=Yi(e[3]||"",!0),tl(this,e[4]),this.l=Yi(e[5]||"",!0),Sm(this,e[6]||"",!0),this.o=Yi(e[7]||"")):(this.h=!1,this.i=new bs(null,this.h))}cr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xi(e,Im,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xi(e,Im,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xi(n,n.charAt(0)=="/"?QC:GC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xi(n,XC)),t.join("")};function on(t){return new cr(t)}function el(t,e,n){t.j=n?Yi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sm(t,e,n){e instanceof bs?(t.i=e,JC(t.i,t.h)):(n||(e=Xi(e,YC)),t.i=new bs(e,t.h))}function ee(t,e,n){t.i.set(e,n)}function Bl(t){return ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Yi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,WC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function WC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Im=/[#\/\?@]/g,GC=/[#\?:]/g,QC=/[#\?]/g,YC=/[#\?@]/g,XC=/#/g;function bs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function qn(t){t.g||(t.g=new Map,t.h=0,t.i&&qC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=bs.prototype;k.add=function(t,e){qn(this),this.i=null,t=Ni(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aw(t,e){qn(t),e=Ni(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function lw(t,e){return qn(t),e=Ni(t,e),t.g.has(e)}k.forEach=function(t,e){qn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};k.ta=function(){qn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};k.Z=function(t){qn(this);let e=[];if(typeof t=="string")lw(this,t)&&(e=e.concat(this.g.get(Ni(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return qn(this),this.i=null,t=Ni(this,t),lw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function uw(t,e,n){aw(t,e),0<n.length&&(t.i=null,t.g.set(Ni(t,e),$d(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ni(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JC(t,e){e&&!t.j&&(qn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aw(this,r),uw(this,i,n))},t)),t.j=e}var ZC=class{constructor(t,e){this.g=t,this.map=e}};function cw(t){this.l=t||eN,M.PerformanceNavigationTiming?(t=M.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eN=10;function hw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dw(t){return t.h?1:t.g?t.g.size:0}function hh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qd(t,e){t.g?t.g.add(e):t.h=e}function fw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cw.prototype.cancel=function(){if(this.i=pw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $d(t.i)}var tN=class{stringify(t){return M.JSON.stringify(t,void 0)}parse(t){return M.JSON.parse(t,void 0)}};function nN(){this.g=new tN}function rN(t,e,n){const r=n||"";try{sw(t,function(i,s){let o=i;uo(i)&&(o=bd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function iN(t,e){const n=new Fl;if(M.Image){const r=new Image;r.onload=Ko(Wo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ko(Wo,n,r,"TestLoadImage: error",!1,e),r.onabort=Ko(Wo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ko(Wo,n,r,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Wo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function go(t){this.l=t.fc||null,this.j=t.ob||!1}Ce(go,qd);go.prototype.g=function(){return new Hl(this.l,this.j)};go.prototype.i=function(t){return function(){return t}}({});function Hl(t,e){ke.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Yd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ce(Hl,ke);var Yd=0;k=Hl.prototype;k.open=function(t,e){if(this.readyState!=Yd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bs(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||M).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yo(this)),this.readyState=Yd};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bs(this)),this.g&&(this.readyState=3,Bs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function mw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?yo(this):Bs(this),this.readyState==3&&mw(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,yo(this))};k.Ya=function(t){this.g&&(this.response=t,yo(this))};k.ka=function(){this.g&&yo(this)};function yo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bs(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Bs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Hl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var sN=M.JSON.parse;function he(t){ke.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=gw,this.L=this.M=!1}Ce(he,ke);var gw="",oN=/^https?$/i,aN=["POST","PUT"];k=he.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ah.g(),this.C=this.u?_m(this.u):_m(ah),this.g.onreadystatechange=je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Tm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=M.FormData&&t instanceof M.FormData,!(0<=O0(aN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ww(this),0<this.B&&((this.L=lN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.ua,this)):this.A=Kd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Tm(this,s)}};function lN(t){return mi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof Ld<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))};function Tm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yw(t),Kl(t)}function yw(t){t.F||(t.F=!0,xe(t,"complete"),xe(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xe(this,"complete"),xe(this,"abort"),Kl(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kl(this,!0)),he.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?vw(this):this.kb())};k.kb=function(){vw(this)};function vw(t){if(t.h&&typeof Ld<"u"&&(!t.C[1]||Lt(t)!=4||t.da()!=2)){if(t.v&&Lt(t)==4)Kd(t.La,0,t);else if(xe(t,"readystatechange"),Lt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(ow)[1]||null;!i&&M.self&&M.self.location&&(i=M.self.location.protocol.slice(0,-1)),r=!oN.test(i?i.toLowerCase():"")}n=r}if(n)xe(t,"complete"),xe(t,"success");else{t.m=6;try{var s=2<Lt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",yw(t)}}finally{Kl(t)}}}}function Kl(t,e){if(t.g){ww(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function ww(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(M.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function Lt(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<Lt(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),sN(e)}};function km(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case gw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function uN(t){const e={};t=(t.g&&2<=Lt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ms(t[r]))continue;var n=LC(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}NC(e,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ew(t){let e="";return Ud(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Xd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ew(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ee(t,e,n))}function Hi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _w(t){this.Ga=0,this.j=[],this.l=new Fl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hi("baseRetryDelayMs",5e3,t),this.hb=Hi("retryDelaySeedMs",1e4,t),this.eb=Hi("forwardChannelMaxRetries",2,t),this.xa=Hi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cw(t&&t.concurrentRequestLimit),this.Ja=new nN,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=_w.prototype;k.ra=8;k.H=1;function Jd(t){if(Sw(t),t.H==3){var e=t.W++,n=on(t.I);if(ee(n,"SID",t.K),ee(n,"RID",e),ee(n,"TYPE","terminate"),vo(t,n),e=new po(t,t.l,e),e.L=2,e.v=Bl(on(n)),n=!1,M.navigator&&M.navigator.sendBeacon)try{n=M.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&M.Image&&(new Image().src=e.v,n=!0),n||(e.g=Dw(e.l,null),e.g.ha(e.v)),e.G=Date.now(),mo(e)}Aw(t)}function ql(t){t.g&&(ef(t),t.g.cancel(),t.g=null)}function Sw(t){ql(t),t.u&&(M.clearTimeout(t.u),t.u=null),nl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&M.clearTimeout(t.m),t.m=null)}function Wl(t){if(!hw(t.i)&&!t.m){t.m=!0;var e=t.Na;Fs||K0(),Vs||(Fs(),Vs=!0),Bd.add(e,t),t.C=0}}function cN(t,e){return dw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ho(je(t.Na,t,e),Nw(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new po(this,this.l,t);let s=this.s;if(this.U&&(s?(s=U0(s),F0(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Iw(this,i,e),n=on(this.I),ee(n,"RID",t),ee(n,"CVER",22),this.F&&ee(n,"X-HTTP-Session-Id",this.F),vo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Ew(s)))+"&"+e:this.o&&Xd(n,this.o,s)),Qd(this.i,i),this.bb&&ee(n,"TYPE","init"),this.P?(ee(n,"$req",e),ee(n,"SID","null"),i.aa=!0,uh(i,n,null)):uh(i,n,e),this.H=2}}else this.H==3&&(t?Cm(this,t):this.j.length==0||hw(this.i)||Cm(this))};function Cm(t,e){var n;e?n=e.m:n=t.W++;const r=on(t.I);ee(r,"SID",t.K),ee(r,"RID",n),ee(r,"AID",t.V),vo(t,r),t.o&&t.s&&Xd(r,t.o,t.s),n=new po(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Iw(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Qd(t.i,n),uh(n,r,e)}function vo(t,e){t.na&&Ud(t.na,function(n,r){ee(e,r,n)}),t.h&&sw({},function(n,r){ee(e,r,n)})}function Iw(t,e,n){n=Math.min(t.j.length,n);var r=t.h?je(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{rN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Tw(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Fs||K0(),Vs||(Fs(),Vs=!0),Bd.add(e,t),t.A=0}}function Zd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ho(je(t.Ma,t),Nw(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,kw(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ho(je(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,We(10),ql(this),kw(this))};function ef(t){t.B!=null&&(M.clearTimeout(t.B),t.B=null)}function kw(t){t.g=new po(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=on(t.wa);ee(e,"RID","rpc"),ee(e,"SID",t.K),ee(e,"AID",t.V),ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ee(e,"TO",t.qa),ee(e,"TYPE","xmlhttp"),vo(t,e),t.o&&t.s&&Xd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Bl(on(e)),n.s=null,n.S=!0,tw(n,t)}k.ib=function(){this.v!=null&&(this.v=null,ql(this),Zd(this),We(19))};function nl(t){t.v!=null&&(M.clearTimeout(t.v),t.v=null)}function Cw(t,e){var n=null;if(t.g==e){nl(t),ef(t),t.g=null;var r=2}else if(hh(t.i,e))n=e.F,fw(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Vl(),xe(r,new X0(r,n)),Wl(t)}else Tw(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&cN(t,e)||r==2&&Zd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ir(t,5);break;case 4:ir(t,10);break;case 3:ir(t,6);break;default:ir(t,2)}}}function Nw(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ir(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=je(t.pb,t);n||(n=new cr("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||el(n,"https"),Bl(n)),iN(n.toString(),r)}else We(2);t.H=0,t.h&&t.h.za(e),Aw(t),Sw(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),We(2)):(this.l.info("Failed to ping google.com"),We(1))};function Aw(t){if(t.H=0,t.ma=[],t.h){const e=pw(t.i);(e.length!=0||t.j.length!=0)&&(gm(t.ma,e),gm(t.ma,t.j),t.i.i.length=0,$d(t.j),t.j.length=0),t.h.ya()}}function Rw(t,e,n){var r=n instanceof cr?on(n):new cr(n);if(r.g!="")e&&(r.g=e+"."+r.g),tl(r,r.m);else{var i=M.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new cr(null);r&&el(s,r),e&&(s.g=e),i&&tl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ee(r,n,e),ee(r,"VER",t.ra),vo(t,r),r}function Dw(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new he(new go({ob:!0})):new he(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function xw(){}k=xw.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function rl(){if(mi&&!(10<=Number(IC)))throw Error("Environmental error: no available transport.")}rl.prototype.g=function(t,e){return new lt(t,e)};function lt(t,e){ke.call(this),this.g=new _w(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ms(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ms(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ai(this)}Ce(lt,ke);lt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;We(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Rw(t,null,t.Y),Wl(t)};lt.prototype.close=function(){Jd(this.g)};lt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=bd(t),t=n);e.j.push(new ZC(e.fb++,t)),e.H==3&&Wl(e)};lt.prototype.N=function(){this.g.h=null,delete this.j,Jd(this.g),delete this.g,lt.$.N.call(this)};function Pw(t){Wd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ce(Pw,Wd);function Ow(){Gd.call(this),this.status=1}Ce(Ow,Gd);function Ai(t){this.g=t}Ce(Ai,xw);Ai.prototype.Ba=function(){xe(this.g,"a")};Ai.prototype.Aa=function(t){xe(this.g,new Pw(t))};Ai.prototype.za=function(t){xe(this.g,new Ow)};Ai.prototype.ya=function(){xe(this.g,"b")};function hN(){this.blockSize=-1}function At(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ce(At,hN);At.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Yu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}At.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Yu(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Yu(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Yu(this,r),i=0;break}}this.h=i,this.i+=e};At.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Y(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var dN={};function tf(t){return-128<=t&&128>t?EC(t,function(e){return new Y([e|0],0>e?-1:0)}):new Y([t|0],0>t?-1:0)}function $t(t){if(isNaN(t)||!isFinite(t))return ti;if(0>t)return Re($t(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=dh;return new Y(e,0)}function Lw(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Re(Lw(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=$t(Math.pow(e,8)),r=ti,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=$t(Math.pow(e,s)),r=r.R(s).add($t(o))):(r=r.R(n),r=r.add($t(o)))}return r}var dh=4294967296,ti=tf(0),fh=tf(1),Nm=tf(16777216);k=Y.prototype;k.ea=function(){if(ft(this))return-Re(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:dh+r)*e,e*=dh}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Yt(this))return"0";if(ft(this))return"-"+Re(this).toString(t);for(var e=$t(Math.pow(t,6)),n=this,r="";;){var i=sl(n,e).g;n=il(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Yt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Yt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ft(t){return t.h==-1}k.X=function(t){return t=il(this,t),ft(t)?-1:Yt(t)?0:1};function Re(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Y(n,~t.h).add(fh)}k.abs=function(){return ft(this)?Re(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Y(n,n[n.length-1]&-2147483648?-1:0)};function il(t,e){return t.add(Re(e))}k.R=function(t){if(Yt(this)||Yt(t))return ti;if(ft(this))return ft(t)?Re(this).R(Re(t)):Re(Re(this).R(t));if(ft(t))return Re(this.R(Re(t)));if(0>this.X(Nm)&&0>t.X(Nm))return $t(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Go(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Go(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Go(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Go(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Y(n,0)};function Go(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ki(t,e){this.g=t,this.h=e}function sl(t,e){if(Yt(e))throw Error("division by zero");if(Yt(t))return new Ki(ti,ti);if(ft(t))return e=sl(Re(t),e),new Ki(Re(e.g),Re(e.h));if(ft(e))return e=sl(t,Re(e)),new Ki(Re(e.g),e.h);if(30<t.g.length){if(ft(t)||ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=fh,r=e;0>=r.X(t);)n=Am(n),r=Am(r);var i=Dr(n,1),s=Dr(r,1);for(r=Dr(r,2),n=Dr(n,2);!Yt(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Dr(r,1),n=Dr(n,1)}return e=il(t,i.R(e)),new Ki(i,e)}for(i=ti;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=$t(n),o=s.R(e);ft(o)||0<o.X(t);)n-=r,s=$t(n),o=s.R(e);Yt(s)&&(s=fh),i=i.add(s),t=il(t,o)}return new Ki(i,t)}k.gb=function(t){return sl(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Y(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Y(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Y(n,this.h^t.h)};function Am(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Y(n,t.h)}function Dr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Y(i,t.h)}rl.prototype.createWebChannel=rl.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;jl.NO_ERROR=0;jl.TIMEOUT=8;jl.HTTP_ERROR=6;J0.COMPLETE="complete";Z0.EventType=fo;fo.OPEN="a";fo.CLOSE="b";fo.ERROR="c";fo.MESSAGE="d";ke.prototype.listen=ke.prototype.O;he.prototype.listenOnce=he.prototype.P;he.prototype.getLastError=he.prototype.Sa;he.prototype.getLastErrorCode=he.prototype.Ia;he.prototype.getStatus=he.prototype.da;he.prototype.getResponseJson=he.prototype.Wa;he.prototype.getResponseText=he.prototype.ja;he.prototype.send=he.prototype.ha;he.prototype.setWithCredentials=he.prototype.Oa;At.prototype.digest=At.prototype.l;At.prototype.reset=At.prototype.reset;At.prototype.update=At.prototype.j;Y.prototype.add=Y.prototype.add;Y.prototype.multiply=Y.prototype.R;Y.prototype.modulo=Y.prototype.gb;Y.prototype.compare=Y.prototype.X;Y.prototype.toNumber=Y.prototype.ea;Y.prototype.toString=Y.prototype.toString;Y.prototype.getBits=Y.prototype.D;Y.fromNumber=$t;Y.fromString=Lw;var fN=function(){return new rl},pN=function(){return Vl()},Xu=jl,mN=J0,gN=kr,Rm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yN=go,Qo=Z0,vN=he,wN=At,ni=Y;const Dm="@firebase/firestore";/**
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
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
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
 */let Ri="9.22.2";/**
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
 */const Er=new Id("@firebase/firestore");function xm(){return Er.logLevel}function x(t,...e){if(Er.logLevel<=W.DEBUG){const n=e.map(nf);Er.debug(`Firestore (${Ri}): ${t}`,...n)}}function an(t,...e){if(Er.logLevel<=W.ERROR){const n=e.map(nf);Er.error(`Firestore (${Ri}): ${t}`,...n)}}function gi(t,...e){if(Er.logLevel<=W.WARN){const n=e.map(nf);Er.warn(`Firestore (${Ri}): ${t}`,...n)}}function nf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function re(t,e){t||$()}function V(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class A extends hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $w{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class _N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SN{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new hr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new $w(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Me(e)}}class IN{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class TN{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new IN(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CN{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,x("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.T=n.token,new kN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function NN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Mw{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=NN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function G(t,e){return t<e?-1:t>e?1:0}function yi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Ee{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new A(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new A(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ee(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new Ee(0,0))}static max(){return new U(new Ee(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Hs{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class te extends Hs{construct(e,n,r){return new te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new A(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new te(n)}static emptyPath(){return new te([])}}const AN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Hs{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return AN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new A(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new A(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new A(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(te.fromString(e))}static fromName(e){return new O(te.fromString(e).popFirst(5))}static empty(){return new O(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new te(e.slice()))}}function RN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(r===1e9?new Ee(n+1,0):new Ee(n,r));return new Vn(i,O.empty(),e)}function DN(t){return new Vn(t.readTime,t.key,-1)}class Vn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vn(U.min(),O.empty(),-1)}static max(){return new Vn(U.max(),O.empty(),-1)}}function xN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:G(t.largestBatchId,e.largestBatchId))}/**
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
 */const PN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ON{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wo(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==PN)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Eo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}rf.ct=-1;function Gl(t){return t==null}function ol(t){return t===0&&1/t==-1/0}function LN(t){return typeof t=="number"&&Number.isInteger(t)&&!ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Pm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Uw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class le{constructor(e,n){this.comparator=e,this.root=n||Ae.EMPTY}insert(e,n){return new le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yo(this.root,e,this.comparator,!0)}}class Yo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ae.RED,this.left=i??Ae.EMPTY,this.right=s??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ae(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class be{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Om(this.data.getIterator())}getIteratorFrom(e){return new Om(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class Om{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Tt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Tt([])}unionWith(e){let n=new be(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Tt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Fw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Fw("Invalid base64 string: "+i):i}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const $N=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jn(t){if(re(!!t),typeof t=="string"){let e=0;const n=$N.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function sf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function of(t){const e=t.mapValue.fields.__previous_value__;return sf(e)?of(e):e}function Ks(t){const e=jn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ee(e.seconds,e.nanos)}/**
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
 */class MN{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class qs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Xo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sf(t)?4:UN(t)?9007199254740991:10:$()}function bt(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ks(t).isEqual(Ks(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=jn(r.timestampValue),o=jn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return _r(r.bytesValue).isEqual(_r(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return me(r.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(r.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return me(r.integerValue)===me(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=me(r.doubleValue),o=me(i.doubleValue);return s===o?ol(s)===ol(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return yi(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Pm(s)!==Pm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!bt(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function Ws(t,e){return(t.values||[]).find(n=>bt(n,e))!==void 0}function vi(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=me(i.integerValue||i.doubleValue),a=me(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Lm(t.timestampValue,e.timestampValue);case 4:return Lm(Ks(t),Ks(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(i,s){const o=_r(i),a=_r(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=G(o[l],a[l]);if(u!==0)return u}return G(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=G(me(i.latitude),me(s.latitude));return o!==0?o:G(me(i.longitude),me(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=vi(o[l],a[l]);if(u)return u}return G(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Xo.mapValue&&s===Xo.mapValue)return 0;if(i===Xo.mapValue)return 1;if(s===Xo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=G(a[c],u[c]);if(h!==0)return h;const f=vi(o[a[c]],l[u[c]]);if(f!==0)return f}return G(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function Lm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return G(t,e);const n=jn(t),r=jn(e),i=G(n.seconds,r.seconds);return i!==0?i:G(n.nanos,r.nanos)}function wi(t){return ph(t)}function ph(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=jn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_r(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ph(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ph(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function $m(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mh(t){return!!t&&"integerValue"in t}function af(t){return!!t&&"arrayValue"in t}function Mm(t){return!!t&&"nullValue"in t}function Um(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ya(t){return!!t&&"mapValue"in t}function ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function UN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ya(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ds(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ds(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ya(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ya(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(ds(this.value))}}function Vw(t){const e=[];return Di(t.fields,(n,r)=>{const i=new Ve([n]);if(ya(r)){const s=Vw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Tt(e)}/**
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
 */class Fe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Fe(e,0,U.min(),U.min(),U.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new Fe(e,1,n,U.min(),r,i,0)}static newNoDocument(e,n){return new Fe(e,2,n,U.min(),U.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,U.min(),U.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class al{constructor(e,n){this.position=e,this.inclusive=n}}function Fm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=vi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ri{constructor(e,n="asc"){this.field=e,this.dir=n}}function FN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class jw{}class ye extends jw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jN(e,n,r):n==="array-contains"?new BN(e,r):n==="in"?new HN(e,r):n==="not-in"?new KN(e,r):n==="array-contains-any"?new qN(e,r):new ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zN(e,r):new bN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vi(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison(vi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rt extends jw{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Rt(e,n)}matches(e){return zw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zw(t){return t.op==="and"}function bw(t){return VN(t)&&zw(t)}function VN(t){for(const e of t.filters)if(e instanceof Rt)return!1;return!0}function gh(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+wi(t.value);if(bw(t))return t.filters.map(e=>gh(e)).join(",");{const e=t.filters.map(n=>gh(n)).join(",");return`${t.op}(${e})`}}function Bw(t,e){return t instanceof ye?function(n,r){return r instanceof ye&&n.op===r.op&&n.field.isEqual(r.field)&&bt(n.value,r.value)}(t,e):t instanceof Rt?function(n,r){return r instanceof Rt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&Bw(s,r.filters[o]),!0):!1}(t,e):void $()}function Hw(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${wi(e.value)}`}(t):t instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Hw).join(" ,")+"}"}(t):"Filter"}class jN extends ye{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class zN extends ye{constructor(e,n){super(e,"in",n),this.keys=Kw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bN extends ye{constructor(e,n){super(e,"not-in",n),this.keys=Kw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Kw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class BN extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return af(n)&&Ws(n.arrayValue,this.value)}}class HN extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ws(this.value.arrayValue,n)}}class KN extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ws(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ws(this.value.arrayValue,n)}}class qN extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!af(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ws(this.value.arrayValue,r))}}/**
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
 */class WN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function jm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WN(t,e,n,r,i,s,o)}function lf(t){const e=V(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wi(r)).join(",")),e.dt=n}return e.dt}function uf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vm(t.startAt,e.startAt)&&Vm(t.endAt,e.endAt)}function yh(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class xi{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function GN(t,e,n,r,i,s,o,a){return new xi(t,e,n,r,i,s,o,a)}function cf(t){return new xi(t)}function zm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function hf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ql(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function qw(t){return t.collectionGroup!==null}function ii(t){const e=V(t);if(e.wt===null){e.wt=[];const n=Ql(e),r=hf(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new ri(n)),e.wt.push(new ri(Ve.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ri(Ve.keyField(),s))}}}return e.wt}function ln(t){const e=V(t);if(!e._t)if(e.limitType==="F")e._t=jm(e.path,e.collectionGroup,ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ii(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ri(s.field,o))}const r=e.endAt?new al(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new al(e.startAt.position,e.startAt.inclusive):null;e._t=jm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function vh(t,e){e.getFirstInequalityField(),Ql(t);const n=t.filters.concat([e]);return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function wh(t,e,n){return new xi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yl(t,e){return uf(ln(t),ln(e))&&t.limitType===e.limitType}function Ww(t){return`${lf(ln(t))}|lt:${t.limitType}`}function Eh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Hw(r)).join(", ")}]`),Gl(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wi(r)).join(",")),`Target(${n})`}(ln(t))}; limitType=${t.limitType})`}function Xl(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ii(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Fm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ii(n),r)||n.endAt&&!function(i,s,o){const a=Fm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ii(n),r))}(t,e)}function QN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gw(t){return(e,n)=>{let r=!1;for(const i of ii(t)){const s=YN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function YN(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?vi(a,l):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Uw(this.inner)}size(){return this.innerSize}}/**
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
 */const XN=new le(O.comparator);function un(){return XN}const Qw=new le(O.comparator);function Ji(...t){let e=Qw;for(const n of t)e=e.insert(n.key,n);return e}function Yw(t){let e=Qw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function sr(){return fs()}function Xw(){return fs()}function fs(){return new Pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const JN=new le(O.comparator),ZN=new be(O.comparator);function B(...t){let e=ZN;for(const n of t)e=e.add(n);return e}const e2=new be(G);function t2(){return e2}/**
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
 */function Jw(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ol(e)?"-0":e}}function Zw(t){return{integerValue:""+t}}function n2(t,e){return LN(e)?Zw(e):Jw(t,e)}/**
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
 */class Jl{constructor(){this._=void 0}}function r2(t,e,n){return t instanceof Gs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&sf(i)&&(i=of(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Qs?t1(t,e):t instanceof Ys?n1(t,e):function(r,i){const s=e1(r,i),o=bm(s)+bm(r.gt);return mh(s)&&mh(r.gt)?Zw(o):Jw(r.serializer,o)}(t,e)}function i2(t,e,n){return t instanceof Qs?t1(t,e):t instanceof Ys?n1(t,e):n}function e1(t,e){return t instanceof ll?mh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Gs extends Jl{}class Qs extends Jl{constructor(e){super(),this.elements=e}}function t1(t,e){const n=r1(e);for(const r of t.elements)n.some(i=>bt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ys extends Jl{constructor(e){super(),this.elements=e}}function n1(t,e){let n=r1(e);for(const r of t.elements)n=n.filter(i=>!bt(i,r));return{arrayValue:{values:n}}}class ll extends Jl{constructor(e,n){super(),this.serializer=e,this.gt=n}}function bm(t){return me(t.integerValue||t.doubleValue)}function r1(t){return af(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class s2{constructor(e,n){this.field=e,this.transform=n}}function o2(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Qs&&r instanceof Qs||n instanceof Ys&&r instanceof Ys?yi(n.elements,r.elements,bt):n instanceof ll&&r instanceof ll?bt(n.gt,r.gt):n instanceof Gs&&r instanceof Gs}(t.transform,e.transform)}class a2{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function va(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zl{}function i1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new o1(t.key,Zt.none()):new _o(t.key,t.data,Zt.none());{const n=t.data,r=pt.empty();let i=new be(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Cr(t.key,r,new Tt(i.toArray()),Zt.none())}}function l2(t,e,n){t instanceof _o?function(r,i,s){const o=r.value.clone(),a=Hm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(r,i,s){if(!va(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Hm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(s1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ps(t,e,n,r){return t instanceof _o?function(i,s,o,a){if(!va(i.precondition,s))return o;const l=i.value.clone(),u=Km(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(i,s,o,a){if(!va(i.precondition,s))return o;const l=Km(i.fieldTransforms,a,s),u=s.data;return u.setAll(s1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return va(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function u2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=e1(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function Bm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&yi(n,r,(i,s)=>o2(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _o extends Zl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cr extends Zl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function s1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hm(t,e,n){const r=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,i2(o,a,n[i]))}return r}function Km(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,r2(s,o,e))}return r}class o1 extends Zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class c2 extends Zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class h2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&l2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ps(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ps(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Xw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=i1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),B())}isEqual(e){return this.batchId===e.batchId&&yi(this.mutations,e.mutations,(n,r)=>Bm(n,r))&&yi(this.baseMutations,e.baseMutations,(n,r)=>Bm(n,r))}}class df{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){re(e.mutations.length===r.length);let i=JN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new df(e,n,r,i)}}/**
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
 */class d2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class f2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var pe,K;function p2(t){switch(t){default:return $();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function a1(t){if(t===void 0)return an("GRPC error has no .code"),E.UNKNOWN;switch(t){case pe.OK:return E.OK;case pe.CANCELLED:return E.CANCELLED;case pe.UNKNOWN:return E.UNKNOWN;case pe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case pe.INTERNAL:return E.INTERNAL;case pe.UNAVAILABLE:return E.UNAVAILABLE;case pe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case pe.NOT_FOUND:return E.NOT_FOUND;case pe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case pe.ABORTED:return E.ABORTED;case pe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case pe.DATA_LOSS:return E.DATA_LOSS;default:return $()}}(K=pe||(pe={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class ff{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Jo}static getOrCreateInstance(){return Jo===null&&(Jo=new ff),Jo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Jo=null;/**
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
 */function m2(){return new TextEncoder}/**
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
 */const g2=new ni([4294967295,4294967295],0);function qm(t){const e=m2().encode(t),n=new wN;return n.update(e),new Uint8Array(n.digest())}function Wm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ni([n,r],0),new ni([i,s],0)]}class pf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Zi(`Invalid padding: ${n}`);if(r<0)throw new Zi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Zi(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=ni.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(ni.fromNumber(r)));return i.compare(g2)===1&&(i=new ni([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=qm(e),[r,i]=Wm(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=qm(e),[r,i]=Wm(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Zi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class eu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,So.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new eu(U.min(),i,new le(G),un(),B())}}class So{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new So(r,n,B(),B(),B())}}/**
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
 */class wa{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class l1{constructor(e,n){this.targetId=e,this.Vt=n}}class u1{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Gm{constructor(){this.St=0,this.Dt=Ym(),this.Ct=Ke.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=B(),n=B(),r=B();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new So(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Ym()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class y2{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=un(),this.zt=Qm(),this.Wt=new le(G)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(yh(o))if(i===0){const a=new O(o.path);this.Yt(r,a,Fe.newNoDocument(a,U.min()))}else re(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=ff.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var f,g,y,v,_,p;const d={localCacheCount:c,existenceFilterCount:h.count},m=h.unchangedNames;return m&&(d.bloomFilter={applied:u===0,hashCount:(f=m==null?void 0:m.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(v=(y=(g=m==null?void 0:m.bits)===null||g===void 0?void 0:g.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(p=(_=m==null?void 0:m.bits)===null||_===void 0?void 0:_.padding)!==null&&p!==void 0?p:0}),d}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=_r(s).toUint8Array()}catch(c){if(c instanceof Fw)return gi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new pf(l,o,a)}catch(c){return gi(c instanceof Zi?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&yh(a.target)){const l=new O(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Fe.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=B();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new eu(e,n,this.Wt,this.jt,r);return this.jt=un(),this.zt=Qm(),this.Wt=new le(G),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Gm,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new be(G),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Gm),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Qm(){return new le(O.comparator)}function Ym(){return new le(O.comparator)}const v2=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),w2=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),E2=(()=>({and:"AND",or:"OR"}))();class _2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _h(t,e){return t.useProto3Json||Gl(e)?e:{value:e}}function ul(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function c1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function S2(t,e){return ul(t,e.toTimestamp())}function jt(t){return re(!!t),U.fromTimestamp(function(e){const n=jn(e);return new Ee(n.seconds,n.nanos)}(t))}function mf(t,e){return function(n){return new te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function h1(t){const e=te.fromString(t);return re(m1(e)),e}function Sh(t,e){return mf(t.databaseId,e.path)}function Ju(t,e){const n=h1(e);if(n.get(1)!==t.databaseId.projectId)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new A(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(d1(n))}function Ih(t,e){return mf(t.databaseId,e)}function I2(t){const e=h1(t);return e.length===4?te.emptyPath():d1(e)}function Th(t){return new te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function d1(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xm(t,e,n){return{name:Sh(t,e),fields:n.value.mapValue.fields}}function T2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(re(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(re(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:a1(l.code);return new A(u,l.message||"")}(o);n=new u1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ju(t,r.document.name),s=jt(r.document.updateTime),o=r.document.createTime?jt(r.document.createTime):U.min(),a=new pt({mapValue:{fields:r.document.fields}}),l=Fe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new wa(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ju(t,r.document),s=r.readTime?jt(r.readTime):U.min(),o=Fe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new wa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ju(t,r.document),s=r.removedTargetIds||[];n=new wa([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new f2(i,s),a=r.targetId;n=new l1(a,o)}}return n}function k2(t,e){let n;if(e instanceof _o)n={update:Xm(t,e.key,e.value)};else if(e instanceof o1)n={delete:Sh(t,e.key)};else if(e instanceof Cr)n={update:Xm(t,e.key,e.data),updateMask:L2(e.fieldMask)};else{if(!(e instanceof c2))return $();n={verify:Sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Gs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Qs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ys)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ll)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:S2(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function C2(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?jt(r.updateTime):jt(i);return s.isEqual(U.min())&&(s=jt(i)),new a2(s,r.transformResults||[])}(n,e))):[]}function N2(t,e){return{documents:[Ih(t,e.path)]}}function A2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Ih(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ih(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return p1(Rt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:xr(c.field),direction:x2(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=_h(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function R2(t){let e=I2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=f1(c);return h instanceof Rt&&bw(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ri(Pr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Gl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new al(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new al(f,h)}(n.endAt)),GN(e,i,o,s,a,"F",l,u)}function D2(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function f1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Pr(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Pr(e.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Pr(e.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Pr(e.unaryFilter.field);return ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(Pr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(n=>f1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function x2(t){return v2[t]}function P2(t){return w2[t]}function O2(t){return E2[t]}function xr(t){return{fieldPath:t.canonicalString()}}function Pr(t){return Ve.fromServerFormat(t.fieldPath)}function p1(t){return t instanceof ye?function(e){if(e.op==="=="){if(Um(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NAN"}};if(Mm(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Um(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NOT_NAN"}};if(Mm(e.value))return{unaryFilter:{field:xr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xr(e.field),op:P2(e.op),value:e.value}}}(t):t instanceof Rt?function(e){const n=e.getFilters().map(r=>p1(r));return n.length===1?n[0]:{compositeFilter:{op:O2(e.op),filters:n}}}(t):$()}function L2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function m1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class In{constructor(e,n,r,i,s=U.min(),o=U.min(),a=Ke.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new In(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $2{constructor(e){this.fe=e}}function M2(t){const e=R2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wh(e,e.limit,"L"):e}/**
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
 */class U2{constructor(){this.rn=new F2}addToCollectionParentIndex(e,n){return this.rn.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Vn.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Vn.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class F2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new be(te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new be(te.comparator)).toArray()}}/**
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
 */class Ei{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ei(0)}static Mn(){return new Ei(-1)}}/**
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
 */class V2{constructor(){this.changes=new Pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class j2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class z2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ps(r.mutation,i,Tt.empty(),Ee.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,B()).next(()=>r))}getLocalViewOfDocuments(e,n,r=B()){const i=sr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ji();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,B()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=un();const o=fs(),a=fs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Cr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ps(c.mutation,u,c.mutation.getFieldMask(),Ee.now())):o.set(u.key,Tt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new j2(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fs();let i=new le((o,a)=>o-a),s=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Tt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||B()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Xw();c.forEach(f=>{if(!s.has(f)){const g=i1(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(sr());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,B())).next(c=>({batchId:a,changes:Yw(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=Ji();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ji();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,c){return new xi(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Fe.newInvalidDocument(u)))});let o=Ji();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ps(u.mutation,l,Tt.empty(),Ee.now()),Xl(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class b2{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return I.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:jt(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:M2(r.bundledQuery),readTime:jt(r.readTime)}}(n)),I.resolve()}}/**
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
 */class B2{constructor(){this.overlays=new le(O.comparator),this.ls=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=sr();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=sr(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new le((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=sr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=sr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new d2(n,r));let s=this.ls.get(n);s===void 0&&(s=B(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class gf{constructor(){this.fs=new be(Se.ds),this.ws=new be(Se._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Se(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Se(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new O(new te([])),r=new Se(n,e),i=new Se(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new O(new te([])),r=new Se(n,e),i=new Se(n,e+1);let s=B();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Se(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Se{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return O.comparator(e.key,n.key)||G(e.As,n.As)}static _s(e,n){return G(e.As,n.As)||O.comparator(e.key,n.key)}}/**
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
 */class H2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new be(Se.ds)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new h2(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Se(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Se(n,0),i=new Se(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new be(G);return n.forEach(i=>{const s=new Se(i,0),o=new Se(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),I.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new Se(new O(s),0);let a=new be(G);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),I.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return I.forEach(n.mutations,i=>{const s=new Se(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Se(n,0),i=this.Rs.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class K2{constructor(e){this.Ds=e,this.docs=new le(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let r=un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Fe.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=un();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||xN(DN(c),r)<=0||(i.has(c.key)||Xl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}Cs(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new q2(this)}getSize(e){return I.resolve(this.size)}}class q2 extends V2{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class W2{constructor(e){this.persistence=e,this.xs=new Pi(n=>lf(n),uf),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Ns=0,this.ks=new gf,this.targetCount=0,this.Ms=Ei.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),I.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ei(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Fn(n),I.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.ks.containsKey(n))}}/**
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
 */class G2{constructor(e,n){this.$s={},this.overlays={},this.Os=new rf(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new W2(this),this.indexManager=new U2,this.remoteDocumentCache=function(r){return new K2(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new $2(n),this.qs=new b2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new B2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new H2(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new Q2(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return I.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class Q2 extends ON{constructor(e){super(),this.currentSequenceNumber=e}}class yf{constructor(e){this.persistence=e,this.Qs=new gf,this.js=null}static zs(e){return new yf(e)}get Ws(){if(this.js)return this.js;throw $()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),I.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ws,r=>{const i=O.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,U.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return I.or([()=>I.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class vf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=B(),i=B();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vf(e,n.fromCache,r,i)}}/**
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
 */class Y2{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(zm(n))return I.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=wh(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=B(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,wh(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return zm(n)||i.isEqual(U.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(xm()<=W.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Eh(n)),this.Wi(e,o,n,RN(i,-1)))})}ji(e,n){let r=new be(Gw(e));return n.forEach((i,s)=>{Xl(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return xm()<=W.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Eh(n)),this.Ui.getDocumentsMatchingQuery(e,n,Vn.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class X2{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new le(G),this.Yi=new Pi(s=>lf(s),uf),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new z2(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function J2(t,e,n,r){return new X2(t,e,n,r)}async function g1(t,e){const n=V(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=B();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function Z2(t,e){const n=V(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=I.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);re(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=B();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function y1(t){const e=V(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function eA(t,e){const n=V(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,_){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(f,g,c)&&a.push(n.Bs.updateTargetData(s,g))});let l=un(),u=B();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(tA(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(U.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function tA(t,e,n){let r=B(),i=B();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=un();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):x("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function nA(t,e){const n=V(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rA(t,e){const n=V(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new In(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function kh(t,e,n){const r=V(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Eo(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Jm(t,e,n){const r=V(t);let i=U.min(),s=B();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=V(a),h=c.Yi.get(u);return h!==void 0?I.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,ln(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:U.min(),n?s:B())).next(a=>(iA(r,QN(e),a),{documents:a,ir:s})))}function iA(t,e,n){let r=t.Xi.get(e)||U.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class Zm{constructor(){this.activeTargetIds=t2()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sA{constructor(){this.Hr=new Zm,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Zm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class oA{Yr(e){}shutdown(){}}/**
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
 */class eg{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zo=null;function Zu(){return Zo===null?Zo=268435456+Math.round(2147483648*Math.random()):Zo++,"0x"+Zo.toString(16)}/**
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
 */const aA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class lA{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const $e="WebChannelConnection";class uA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Zu(),a=this.To(e,n);x("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(x("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw gi("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ri,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=aA[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Zu();return new Promise((o,a)=>{const l=new vN;l.setWithCredentials(!0),l.listenOnce(mN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Xu.NO_ERROR:const c=l.getResponseJson();x($e,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Xu.TIMEOUT:x($e,`RPC '${e}' ${s} timed out`),a(new A(E.DEADLINE_EXCEEDED,"Request time out"));break;case Xu.HTTP_ERROR:const h=l.getStatus();if(x($e,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(v){const _=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(_)>=0?_:E.UNKNOWN}(g.status);a(new A(y,g.message))}else a(new A(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new A(E.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{x($e,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);x($e,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Zu(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fN(),a=pN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new yN({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");x($e,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,g=!1;const y=new lA({ro:_=>{g?x($e,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(f||(x($e,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),x($e,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},oo:()=>h.close()}),v=(_,p,d)=>{_.listen(p,m=>{try{d(m)}catch(w){setTimeout(()=>{throw w},0)}})};return v(h,Qo.EventType.OPEN,()=>{g||x($e,`RPC '${e}' stream ${i} transport opened.`)}),v(h,Qo.EventType.CLOSE,()=>{g||(g=!0,x($e,`RPC '${e}' stream ${i} transport closed`),y.wo())}),v(h,Qo.EventType.ERROR,_=>{g||(g=!0,gi($e,`RPC '${e}' stream ${i} transport errored:`,_),y.wo(new A(E.UNAVAILABLE,"The operation could not be completed")))}),v(h,Qo.EventType.MESSAGE,_=>{var p;if(!g){const d=_.data[0];re(!!d);const m=d,w=m.error||((p=m[0])===null||p===void 0?void 0:p.error);if(w){x($e,`RPC '${e}' stream ${i} received error:`,w);const T=w.status;let N=function(P){const X=pe[P];if(X!==void 0)return a1(X)}(T),D=w.message;N===void 0&&(N=E.INTERNAL,D="Unknown error status: "+T+" with message "+w.message),g=!0,y.wo(new A(N,D)),h.close()}else x($e,`RPC '${e}' stream ${i} received:`,d),y._o(d)}}),v(a,gN.STAT_EVENT,_=>{_.stat===Rm.PROXY?x($e,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Rm.NOPROXY&&x($e,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function ec(){return typeof document<"u"?document:null}/**
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
 */function tu(t){return new _2(t,!0)}/**
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
 */class v1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class w1{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new v1(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new A(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cA extends w1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=T2(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?U.min():s.readTime?jt(s.readTime):U.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Th(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=yh(a)?{documents:N2(i,a)}:{query:A2(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=c1(i,s.resumeToken);const l=_h(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(U.min())>0){o.readTime=ul(i,s.snapshotVersion.toTimestamp());const l=_h(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=D2(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Th(this.serializer),n.removeTarget=e,this.Wo(n)}}class hA extends w1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=C2(e.writeResults,e.commitTime),r=jt(e.commitTime);return this.listener.cu(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Th(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>k2(this.serializer,r))};this.Wo(n)}}/**
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
 */class dA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new A(E.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new A(E.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class fA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(an(n),this.mu=!1):x("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class pA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Nr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=V(a);l.vu.add(4),await Io(l),l.bu.set("Unknown"),l.vu.delete(4),await nu(l)}(this))})}),this.bu=new fA(r,i)}}async function nu(t){if(Nr(t))for(const e of t.Ru)await e(!0)}async function Io(t){for(const e of t.Ru)await e(!1)}function E1(t,e){const n=V(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),_f(n)?Ef(n):Oi(n).Ko()&&wf(n,e))}function _1(t,e){const n=V(t),r=Oi(n);n.Au.delete(e),r.Ko()&&S1(n,e),n.Au.size===0&&(r.Ko()?r.jo():Nr(n)&&n.bu.set("Unknown"))}function wf(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Oi(t).su(e)}function S1(t,e){t.Vu.qt(e),Oi(t).iu(e)}function Ef(t){t.Vu=new y2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Oi(t).start(),t.bu.gu()}function _f(t){return Nr(t)&&!Oi(t).Uo()&&t.Au.size>0}function Nr(t){return V(t).vu.size===0}function I1(t){t.Vu=void 0}async function mA(t){t.Au.forEach((e,n)=>{wf(t,e)})}async function gA(t,e){I1(t),_f(t)?(t.bu.Iu(e),Ef(t)):t.bu.set("Unknown")}async function yA(t,e,n){if(t.bu.set("Online"),e instanceof u1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cl(t,r)}else if(e instanceof wa?t.Vu.Ht(e):e instanceof l1?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(U.min()))try{const r=await y1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Ke.EMPTY_BYTE_STRING,u.snapshotVersion)),S1(i,a);const c=new In(u.target,a,l,u.sequenceNumber);wf(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await cl(t,r)}}async function cl(t,e,n){if(!Eo(e))throw e;t.vu.add(1),await Io(t),t.bu.set("Offline"),n||(n=()=>y1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await nu(t)})}function T1(t,e){return e().catch(n=>cl(t,n,e))}async function ru(t){const e=V(t),n=zn(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;vA(e);)try{const i=await nA(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,wA(e,i)}catch(i){await cl(e,i)}k1(e)&&C1(e)}function vA(t){return Nr(t)&&t.Eu.length<10}function wA(t,e){t.Eu.push(e);const n=zn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function k1(t){return Nr(t)&&!zn(t).Uo()&&t.Eu.length>0}function C1(t){zn(t).start()}async function EA(t){zn(t).hu()}async function _A(t){const e=zn(t);for(const n of t.Eu)e.uu(n.mutations)}async function SA(t,e,n){const r=t.Eu.shift(),i=df.from(r,e,n);await T1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ru(t)}async function IA(t,e){e&&zn(t).ou&&await async function(n,r){if(i=r.code,p2(i)&&i!==E.ABORTED){const s=n.Eu.shift();zn(n).Qo(),await T1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ru(n)}var i}(t,e),k1(t)&&C1(t)}async function tg(t,e){const n=V(t);n.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=Nr(n);n.vu.add(3),await Io(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await nu(n)}async function TA(t,e){const n=V(t);e?(n.vu.delete(2),await nu(n)):e||(n.vu.add(2),await Io(n),n.bu.set("Unknown"))}function Oi(t){return t.Su||(t.Su=function(e,n,r){const i=V(e);return i.fu(),new cA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:mA.bind(null,t),ao:gA.bind(null,t),nu:yA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),_f(t)?Ef(t):t.bu.set("Unknown")):(await t.Su.stop(),I1(t))})),t.Su}function zn(t){return t.Du||(t.Du=function(e,n,r){const i=V(e);return i.fu(),new hA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:EA.bind(null,t),ao:IA.bind(null,t),au:_A.bind(null,t),cu:SA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await ru(t)):(await t.Du.stop(),t.Eu.length>0&&(x("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Sf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Sf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new A(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function If(t,e){if(an("AsyncQueue",`${e}: ${t}`),Eo(t))return new A(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class si{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=Ji(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new si(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof si)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new si;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ng{constructor(){this.Cu=new le(O.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):$():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class _i{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _i(e,n,si.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class kA{constructor(){this.Nu=void 0,this.listeners=[]}}class CA{constructor(){this.queries=new Pi(e=>Ww(e),Yl),this.onlineState="Unknown",this.ku=new Set}}async function NA(t,e){const n=V(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new kA),i)try{s.Nu=await n.onListen(r)}catch(o){const a=If(o,`Initialization of query '${Eh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Tf(n)}async function AA(t,e){const n=V(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function RA(t,e){const n=V(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Tf(n)}function DA(t,e,n){const r=V(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Tf(t){t.ku.forEach(e=>{e.next()})}class xA{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class N1{constructor(e){this.key=e}}class A1{constructor(e){this.key=e}}class PA{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=B(),this.mutatedKeys=B(),this.tc=Gw(e),this.ec=new si(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new ng,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),g=Xl(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;f&&g?f.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),_=!0):this.rc(f,g)||(r.track({type:2,doc:g}),_=!0,(l&&this.tc(g,l)>0||u&&this.tc(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),_=!0):f&&!g&&(r.track({type:1,doc:f}),_=!0,(l||u)&&(a=!0)),_&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return g(h)-g(f)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new _i(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ng,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=B(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new A1(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new N1(r))}),n}hc(e){this.Yu=e.ir,this.Zu=B();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return _i.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class OA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LA{constructor(e){this.key=e,this.fc=!1}}class $A{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Pi(a=>Ww(a),Yl),this._c=new Map,this.mc=new Set,this.gc=new le(O.comparator),this.yc=new Map,this.Ic=new gf,this.Tc={},this.Ec=new Map,this.Ac=Ei.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function MA(t,e){const n=qA(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await rA(n.localStore,ln(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await UA(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&E1(n.remoteStore,o)}return i}async function UA(t,e,n,r,i){t.Rc=(h,f,g)=>async function(y,v,_,p){let d=v.view.sc(_);d.zi&&(d=await Jm(y.localStore,v.query,!1).then(({documents:T})=>v.view.sc(T,d)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(d,y.isPrimaryClient,m);return ig(y,v.targetId,w.cc),w.snapshot}(t,h,f,g);const s=await Jm(t.localStore,e,!0),o=new PA(e,s.ir),a=o.sc(s.documents),l=So.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);ig(t,n,u.cc);const c=new OA(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function FA(t,e){const n=V(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Yl(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await kh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),_1(n.remoteStore,r.targetId),Ch(n,r.targetId)}).catch(wo)):(Ch(n,r.targetId),await kh(n.localStore,r.targetId,!0))}async function VA(t,e,n){const r=WA(t);try{const i=await function(s,o){const a=V(s),l=Ee.now(),u=o.reduce((f,g)=>f.add(g.key),B());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=un(),y=B();return a.Zi.getEntries(f,u).next(v=>{g=v,g.forEach((_,p)=>{p.isValidDocument()||(y=y.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(v=>{c=v;const _=[];for(const p of o){const d=u2(p,c.get(p.key).overlayedDocument);d!=null&&_.push(new Cr(p.key,d,Vw(d.value.mapValue),Zt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,_,o)}).next(v=>{h=v;const _=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(f,v.batchId,_)})}).then(()=>({batchId:h.batchId,changes:Yw(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new le(G)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await To(r,i.changes),await ru(r.remoteStore)}catch(i){const s=If(i,"Failed to persist write");n.reject(s)}}async function R1(t,e){const n=V(t);try{const r=await eA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?re(o.fc):i.removedDocuments.size>0&&(re(o.fc),o.fc=!1))}),await To(n,r,e)}catch(r){await wo(r)}}function rg(t,e,n){const r=V(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=V(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&Tf(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jA(t,e,n){const r=V(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new le(O.comparator);o=o.insert(s,Fe.newNoDocument(s,U.min()));const a=B().add(s),l=new eu(U.min(),new Map,new le(G),o,a);await R1(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),kf(r)}else await kh(r.localStore,e,!1).then(()=>Ch(r,e,n)).catch(wo)}async function zA(t,e){const n=V(t),r=e.batch.batchId;try{const i=await Z2(n.localStore,e);x1(n,r,null),D1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await To(n,i)}catch(i){await wo(i)}}async function bA(t,e,n){const r=V(t);try{const i=await function(s,o){const a=V(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(re(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);x1(r,e,n),D1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await To(r,i)}catch(i){await wo(i)}}function D1(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function x1(t,e,n){const r=V(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Ch(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||P1(t,r)})}function P1(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(_1(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),kf(t))}function ig(t,e,n){for(const r of n)r instanceof N1?(t.Ic.addReference(r.key,e),BA(t,r)):r instanceof A1?(x("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||P1(t,r.key)):$()}function BA(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(x("SyncEngine","New document in limbo: "+n),t.mc.add(r),kf(t))}function kf(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new O(te.fromString(e)),r=t.Ac.next();t.yc.set(r,new LA(n)),t.gc=t.gc.insert(n,r),E1(t.remoteStore,new In(ln(cf(n.path)),r,"TargetPurposeLimboResolution",rf.ct))}}async function To(t,e,n){const r=V(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=vf.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=V(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(l,h=>I.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>I.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Eo(c))throw c;x("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ji.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ji=u.Ji.insert(h,y)}}}(r.localStore,s))}async function HA(t,e){const n=V(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await g1(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new A(E.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await To(n,r.er)}}function KA(t,e){const n=V(t),r=n.yc.get(e);if(r&&r.fc)return B().add(r.key);{let i=B();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function qA(t){const e=V(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=R1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jA.bind(null,e),e.dc.nu=RA.bind(null,e.eventManager),e.dc.Pc=DA.bind(null,e.eventManager),e}function WA(t){const e=V(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bA.bind(null,e),e}class sg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=tu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return J2(this.persistence,new Y2,e.initialUser,this.serializer)}createPersistence(e){return new G2(yf.zs,this.serializer)}createSharedClientState(e){return new sA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class GA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HA.bind(null,this.syncEngine),await TA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new CA}createDatastore(e){const n=tu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new uA(i));var i;return function(s,o,a,l){return new dA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>rg(this.syncEngine,a,0),o=eg.D()?new eg:new oA,new pA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new $A(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=V(e);x("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Io(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class QA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class YA{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Me.UNAUTHENTICATED,this.clientId=Mw.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{x("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(x("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new A(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=If(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tc(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await g1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function og(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JA(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>tg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>tg(e.remoteStore,s)),t._onlineComponents=e}function XA(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function JA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!XA(n))throw n;gi("Error using user provided cache. Falling back to memory cache: "+n),await tc(t,new sg)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await tc(t,new sg);return t._offlineComponents}async function O1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await og(t,t._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await og(t,new GA))),t._onlineComponents}function ZA(t){return O1(t).then(e=>e.syncEngine)}async function ag(t){const e=await O1(t),n=e.eventManager;return n.onListen=MA.bind(null,e.syncEngine),n.onUnlisten=FA.bind(null,e.syncEngine),n}/**
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
 */function L1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const lg=new Map;/**
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
 */function $1(t,e,n){if(!n)throw new A(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eR(t,e,n,r){if(e===!0&&r===!0)throw new A(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ug(t){if(!O.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cg(t){if(O.isDocumentKey(t))throw new A(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function iu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function ms(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new A(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=iu(t);throw new A(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class hg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new A(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new A(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=L1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new A(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class su{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new A(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new A(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new EN;switch(n.type){case"firstParty":return new TN(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new A(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=lg.get(e);n&&(x("ComponentProvider","Removing Datastore"),lg.delete(e),n.terminate())}(this),Promise.resolve()}}function tR(t,e,n,r={}){var i;const s=(t=ms(t,su))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Me.MOCK_USER;else{a=KS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new A(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Me(u)}t._authCredentials=new _N(new $w(a,l))}}/**
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
 */class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class Ar{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ar(this.firestore,e,this._query)}}class $n extends Ar{constructor(e,n,r){super(e,n,cf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new O(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function nR(t,e,...n){if(t=nt(t),$1("collection","path",e),t instanceof su){const r=te.fromString(e,...n);return cg(r),new $n(t,null,r)}{if(!(t instanceof ot||t instanceof $n))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return cg(r),new $n(t.firestore,null,r)}}function rR(t,e,...n){if(t=nt(t),arguments.length===1&&(e=Mw.A()),$1("doc","path",e),t instanceof su){const r=te.fromString(e,...n);return ug(r),new ot(t,null,new O(r))}{if(!(t instanceof ot||t instanceof $n))throw new A(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(te.fromString(e,...n));return ug(r),new ot(t.firestore,t instanceof $n?t.converter:null,new O(r))}}/**
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
 */class iR{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new v1(this,"async_queue_retry"),this.Xc=()=>{const n=ec();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=ec();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new hr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Eo(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw an("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Sf.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&$()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function dg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class hl extends su{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new iR,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||U1(this),this._firestoreClient.terminate()}}function sR(t,e){const n=typeof t=="object"?t:Yv(),r=typeof t=="string"?t:e||"(default)",i=kd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=BS("firestore");s&&tR(i,...s)}return i}function M1(t){return t._firestoreClient||U1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function U1(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new MN(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,L1(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new YA(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Si(Ke.fromBase64String(e))}catch(n){throw new A(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Si(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Cf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new A(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nf{constructor(e){this._methodName=e}}/**
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
 */class Af{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new A(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new A(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
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
 */const oR=/^__.*__$/;class aR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new _o(e,this.data,n,this.fieldTransforms)}}function F1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Rf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Rf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return dl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(F1(this.ca)&&oR.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class lR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tu(e)}ya(e,n,r,i=!1){return new Rf({ca:e,methodName:n,ga:r,path:Ve.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function V1(t){const e=t._freezeSettings(),n=tu(t._databaseId);return new lR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uR(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);b1("Data must be an object, but it was:",o,r);const a=j1(r,o);let l,u;if(s.merge)l=new Tt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=hR(e,h,n);if(!o.contains(f))throw new A(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);fR(c,f)||c.push(f)}l=new Tt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new aR(new pt(a),l,u)}class Df extends Nf{_toFieldTransform(e){return new s2(e.path,new Gs)}isEqual(e){return e instanceof Df}}function cR(t,e,n,r=!1){return xf(n,t.ya(r?4:3,e))}function xf(t,e){if(z1(t=nt(t)))return b1("Unsupported field value:",e,t),j1(t,e);if(t instanceof Nf)return function(n,r){if(!F1(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=xf(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return n2(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ee.fromDate(n);return{timestampValue:ul(r.serializer,i)}}if(n instanceof Ee){const i=new Ee(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ul(r.serializer,i)}}if(n instanceof Af)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Si)return{bytesValue:c1(r.serializer,n._byteString)};if(n instanceof ot){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:mf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${iu(n)}`)}(t,e)}function j1(t,e){const n={};return Uw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Di(t,(r,i)=>{const s=xf(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function z1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ee||t instanceof Af||t instanceof Si||t instanceof ot||t instanceof Nf)}function b1(t,e,n){if(!z1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=iu(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function hR(t,e,n){if((e=nt(e))instanceof Cf)return e._internalPath;if(typeof e=="string")return B1(t,e);throw dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const dR=new RegExp("[~\\*/\\[\\]]");function B1(t,e,n){if(e.search(dR)>=0)throw dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cf(...e.split("."))._internalPath}catch{throw dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new A(E.INVALID_ARGUMENT,a+t+l)}function fR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class H1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new pR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ou("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pR extends H1{data(){return super.data()}}function ou(t,e){return typeof e=="string"?B1(t,e):e instanceof Cf?e._internalPath:e._delegate._internalPath}/**
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
 */function mR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new A(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pf{}class K1 extends Pf{}function gR(t,e,...n){let r=[];e instanceof Pf&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Of).length,o=i.filter(a=>a instanceof au).length;if(s>1||s>0&&o>0)throw new A(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class au extends K1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new au(e,n,r)}_apply(e){const n=this._parse(e);return q1(e._query,n),new Ar(e.firestore,e.converter,vh(e._query,n))}_parse(e){const n=V1(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new A(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){pg(c,u);const f=[];for(const g of c)f.push(fg(a,i,g));h={arrayValue:{values:f}}}else h=fg(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||pg(c,u),h=cR(o,s,c,u==="in"||u==="not-in");return ye.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function yR(t,e,n){const r=e,i=ou("where",t);return au._create(i,r,n)}class Of extends Pf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Of(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Rt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)q1(s,a),s=vh(s,a)}(e._query,n),new Ar(e.firestore,e.converter,vh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Lf extends K1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Lf(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new A(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ri(i,s);return function(a,l){if(hf(a)===null){const u=Ql(a);u!==null&&W1(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Ar(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new xi(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function vR(t,e="asc"){const n=e,r=ou("orderBy",t);return Lf._create(r,n)}function fg(t,e,n){if(typeof(n=nt(n))=="string"){if(n==="")throw new A(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!qw(e)&&n.indexOf("/")!==-1)throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(te.fromString(n));if(!O.isDocumentKey(r))throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $m(t,new O(r))}if(n instanceof ot)return $m(t,n._key);throw new A(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${iu(n)}.`)}function pg(t,e){if(!Array.isArray(t)||t.length===0)throw new A(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function q1(t,e){if(e.isInequality()){const r=Ql(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new A(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=hf(t);s!==null&&W1(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new A(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function W1(t,e,n){if(!n.isEqual(e))throw new A(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class wR{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Af(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=of(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ks(e));default:return null}}convertTimestamp(e){const n=jn(e);return new Ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=te.fromString(e);re(m1(r));const i=new qs(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||an(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function ER(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class es{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class G1 extends H1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ea(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ou("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ea extends G1{data(e={}){return super.data(e)}}class _R{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new es(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ea(this._firestore,this._userDataWriter,r.key,r,new es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new A(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ea(r._firestore,r._userDataWriter,o.doc.key,o.doc,new es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ea(r._firestore,r._userDataWriter,o.doc.key,o.doc,new es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:SR(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class Q1 extends wR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function IR(t,e){const n=ms(t.firestore,hl),r=rR(t),i=ER(t.converter,e);return kR(n,[uR(V1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Zt.exists(!1))]).then(()=>r)}function TR(t,...e){var n,r,i;t=nt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||dg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(dg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof ot)u=ms(t.firestore,hl),c=cf(t._key.path),l={next:h=>{e[o]&&e[o](CR(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ms(t,Ar);u=ms(h.firestore,hl),c=h._query;const f=new Q1(u);l={next:g=>{e[o]&&e[o](new _R(u,f,h,g))},error:e[o+1],complete:e[o+2]},mR(t._query)}return function(h,f,g,y){const v=new QA(y),_=new xA(f,v,g);return h.asyncQueue.enqueueAndForget(async()=>NA(await ag(h),_)),()=>{v.Dc(),h.asyncQueue.enqueueAndForget(async()=>AA(await ag(h),_))}}(M1(u),c,a,l)}function kR(t,e){return function(n,r){const i=new hr;return n.asyncQueue.enqueueAndForget(async()=>VA(await ZA(n),r,i)),i.promise}(M1(t),e)}function CR(t,e,n){const r=n.docs.get(e._key),i=new Q1(t);return new G1(t,i,e._key,r,new es(n.hasPendingWrites,n.fromCache),e.converter)}function NR(){return new Df("serverTimestamp")}(function(t,e=!0){(function(n){Ri=n})(Ci),fi(new yr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new hl(new SN(n.getProvider("auth-internal")),new CN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new A(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qs(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Ln(Dm,"3.12.2",t),Ln(Dm,"3.12.2","esm2017")})();const AR={apiKey:"AIzaSyBL8pZ37kbNX3g_Tf4bn3Pn2sZxdj5m23Y",authDomain:"whatsappish.firebaseapp.com",projectId:"whatsappish",storageBucket:"whatsappish.appspot.com",messagingSenderId:"358773295400",appId:"1:358773295400:web:aa6766fe0bbbd5fe77681d"},Y1=Qv(AR),qr=dC(Y1),RR=new Kt,DR=sR(Y1);/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var X1=OR,mg=LR,xR=decodeURIComponent,PR=encodeURIComponent,ea=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function OR(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var n={},r=e||{},i=t.split(";"),s=r.decode||xR,o=0;o<i.length;o++){var a=i[o],l=a.indexOf("=");if(!(l<0)){var u=a.substring(0,l).trim();if(n[u]==null){var c=a.substring(l+1,a.length).trim();c[0]==='"'&&(c=c.slice(1,-1)),n[u]=$R(c,s)}}}return n}function LR(t,e,n){var r=n||{},i=r.encode||PR;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!ea.test(t))throw new TypeError("argument name is invalid");var s=i(e);if(s&&!ea.test(s))throw new TypeError("argument val is invalid");var o=t+"="+s;if(r.maxAge!=null){var a=r.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!ea.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!ea.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite){var l=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(l){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o}function $R(t,e){try{return e(t)}catch{return t}}function MR(){return typeof document=="object"&&typeof document.cookie=="string"}function UR(t,e){return typeof t=="string"?X1(t,e):typeof t=="object"&&t!==null?t:{}}function FR(t,e){return typeof e>"u"&&(e=!t||t[0]!=="{"&&t[0]!=="["&&t[0]!=='"'),!e}function gg(t,e){e===void 0&&(e={});var n=VR(t);if(FR(n,e.doNotParse))try{return JSON.parse(n)}catch{}return t}function VR(t){return t&&t[0]==="j"&&t[1]===":"?t.substr(2):t}var Jn=globalThis&&globalThis.__assign||function(){return Jn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Jn.apply(this,arguments)},jR=function(){function t(e,n){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=UR(e,n),new Promise(function(){r.HAS_DOCUMENT_COOKIE=MR()}).catch(function(){})}return t.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=X1(document.cookie,e))},t.prototype._emitChange=function(e){for(var n=0;n<this.changeListeners.length;++n)this.changeListeners[n](e)},t.prototype.get=function(e,n,r){return n===void 0&&(n={}),this._updateBrowserValues(r),gg(this.cookies[e],n)},t.prototype.getAll=function(e,n){e===void 0&&(e={}),this._updateBrowserValues(n);var r={};for(var i in this.cookies)r[i]=gg(this.cookies[i],e);return r},t.prototype.set=function(e,n,r){var i;typeof n=="object"&&(n=JSON.stringify(n)),this.cookies=Jn(Jn({},this.cookies),(i={},i[e]=n,i)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=mg(e,n,r)),this._emitChange({name:e,value:n,options:r})},t.prototype.remove=function(e,n){var r=n=Jn(Jn({},n),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Jn({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=mg(e,"",r)),this._emitChange({name:e,value:void 0,options:n})},t.prototype.addChangeListener=function(e){this.changeListeners.push(e)},t.prototype.removeChangeListener=function(e){var n=this.changeListeners.indexOf(e);n>=0&&this.changeListeners.splice(n,1)},t}();const J1=jR;const zR=()=>L.jsxs("nav",{className:"nav",children:[L.jsx("img",{src:"../public/images/whatsapp-logo.svg",className:"nav-img"}),L.jsx("h1",{children:"ChatConnect"})]}),bR=new J1,BR=t=>{const{setIsAuth:e}=t,n=async()=>{try{const r=await _k(qr,RR);console.log(r),bR.set("auth-token",r.user.refreshToken),e(!0)}catch(r){console.error(r)}};return L.jsxs("div",{className:"container",children:[L.jsx(zR,{}),L.jsxs("div",{className:"auth",children:[L.jsx("p",{children:"Sign In With Google To Continue"}),L.jsx("button",{onClick:n,children:"Sign In With Google"})]})]})};var Z1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yg=Xt.createContext&&Xt.createContext(Z1),Mn=globalThis&&globalThis.__assign||function(){return Mn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Mn.apply(this,arguments)},HR=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function eE(t){return t&&t.map(function(e,n){return Xt.createElement(e.tag,Mn({key:n},e.attr),eE(e.child))})}function KR(t){return function(e){return Xt.createElement(qR,Mn({attr:Mn({},t.attr)},e),eE(t.child))}}function qR(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=HR(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Xt.createElement("svg",Mn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Mn(Mn({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Xt.createElement("title",null,s),t.children)};return yg!==void 0?Xt.createElement(yg.Consumer,null,function(n){return e(n)}):e(Z1)}function WR(t){return KR({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"}}]})(t)}const tE=({signUserOut:t})=>L.jsx(L.Fragment,{children:L.jsxs("nav",{className:"nav-room",children:[L.jsxs("div",{className:"flex",children:[L.jsx("img",{src:"./public/images/whatsapp-logo.svg",className:"nav-img"}),L.jsx("h1",{children:"ChatConnect"})]}),L.jsx("div",{children:L.jsx("button",{onClick:t,className:"sign-out",children:"Sign Out"})})]})}),GR=t=>{const{room:e,signUserOut:n}=t,[r,i]=ce.useState(""),s=nR(DR,"messages"),[o,a]=ce.useState([]);ce.useEffect(()=>{const c=gR(s,yR("room","==",e),vR("createdAt")),h=TR(c,f=>{let g=[];f.forEach(y=>{g.push({...y.data(),id:y.id})}),a(g)});return()=>h()},[]);const l=async c=>{c.preventDefault(),r!==""&&(await IR(s,{text:r,createdAt:NR(),user:qr.currentUser.displayName,room:e,photoUrl:qr.currentUser.photoURL,messageId:qr.currentUser.uid}),i(""))},u=c=>`message-${c}`;return L.jsxs("div",{className:"container",children:[L.jsx(tE,{signUserOut:n}),L.jsxs("div",{className:"chat-app",children:[L.jsx("div",{className:"header",children:L.jsxs("h1",{children:["Welcome to ",e.toUpperCase()]})}),L.jsx("div",{className:"messages",children:o.map(c=>{let h;return c.messageId===qr.currentUser.uid?h=1:h=2,L.jsxs("div",{className:`chat-box ${u(h)}`,children:[L.jsx("img",{className:"display-picture",referrerPolicy:"no-referrer",src:c.photoUrl}),L.jsxs("div",{className:"message",children:[L.jsx("div",{className:"user-info",children:L.jsx("h4",{className:"user",children:c.user})}),L.jsx("h5",{className:"text-message",children:c.text})]})]})})}),L.jsxs("form",{onSubmit:l,className:"new-message-form",children:[L.jsx("input",{className:"new-message-input",placeholder:"Type your message here...",onChange:c=>i(c.target.value),value:r}),L.jsxs("button",{type:"submit",className:"send-button",children:[L.jsx("span",{children:L.jsx(WR,{})}),"Send"]})]})]})]})};const QR=({roomInputRef:t,setRoom:e})=>L.jsx(L.Fragment,{children:L.jsxs("div",{className:"room",children:[L.jsx("label",{className:"label",children:"Enter Room Name:"}),L.jsx("input",{ref:t,type:"text",className:"room-input"}),L.jsx("button",{className:"chat-btn",onClick:()=>e(t.current.value),children:"Enter Chat"})]})}),vg=new J1,YR=()=>{const[t,e]=ce.useState(vg.get("auth-token")),[n,r]=ce.useState(null),i=ce.useRef(null),s=async()=>{await ek(qr),vg.remove("auth-token"),e(!1),r(null)};return t?L.jsx(L.Fragment,{children:n?L.jsx(GR,{room:n,signUserOut:s}):L.jsxs("div",{className:"container",children:[L.jsx(tE,{signUserOut:s}),L.jsx(QR,{roomInputRef:i,setRoom:r})]})}):L.jsx("div",{children:L.jsx(BR,{setIsAuth:e})})};/**
 * @remix-run/router v1.6.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fl.apply(this,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const wg="popstate";function XR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Nh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:rE(i)}return ZR(e,n,null,t)}function nE(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function JR(){return Math.random().toString(36).substr(2,8)}function Eg(t,e){return{usr:t.state,key:t.key,idx:e}}function Nh(t,e,n,r){return n===void 0&&(n=null),fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?iE(e):e,{state:n,key:e&&e.key||r||JR()})}function rE(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function iE(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ZR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=or.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(fl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=or.Pop;let _=c(),p=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:p})}function f(_,p){a=or.Push;let d=Nh(v.location,_,p);n&&n(d,_),u=c()+1;let m=Eg(d,u),w=v.createHref(d);try{o.pushState(m,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}s&&l&&l({action:a,location:v.location,delta:1})}function g(_,p){a=or.Replace;let d=Nh(v.location,_,p);n&&n(d,_),u=c();let m=Eg(d,u),w=v.createHref(d);o.replaceState(m,"",w),s&&l&&l({action:a,location:v.location,delta:0})}function y(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:rE(_);return nE(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let v={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(wg,h),l=_,()=>{i.removeEventListener(wg,h),l=null}},createHref(_){return e(i,_)},createURL:y,encodeLocation(_){let p=y(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(_){return o.go(_)}};return v}var _g;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_g||(_g={}));function eD(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const sE=["post","put","patch","delete"];new Set(sE);const tD=["get",...sE];new Set(tD);/**
 * React Router v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const nD="startTransition";var Sg=kE[nD];const rD=ce.createContext(null),oE=ce.createContext(null);function iD(){return ce.useContext(oE)!=null}var Ig;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Ig||(Ig={}));var Tg;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Tg||(Tg={}));function sD(t){let{basename:e="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1}=t;iD()&&nE(!1);let a=e.replace(/^\/*/,"/"),l=ce.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=iE(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:g="default"}=r,y=ce.useMemo(()=>{let v=eD(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:f,key:g},navigationType:i}},[a,u,c,h,f,g,i]);return y==null?null:ce.createElement(rD.Provider,{value:l},ce.createElement(oE.Provider,{children:n,value:y}))}var kg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(kg||(kg={}));new Promise(()=>{});/**
 * React Router DOM v6.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oD(t){let{basename:e,children:n,future:r,window:i}=t,s=ce.useRef();s.current==null&&(s.current=XR({window:i,v5Compat:!0}));let o=s.current,[a,l]=ce.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=ce.useCallback(h=>{u&&Sg?Sg(()=>l(h)):l(h)},[l,u]);return ce.useLayoutEffect(()=>o.listen(c),[o,c]),ce.createElement(sD,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var Cg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Cg||(Cg={}));var Ng;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ng||(Ng={}));nc.createRoot(document.getElementById("root")).render(L.jsx(Xt.StrictMode,{children:L.jsx(oD,{children:L.jsx(YR,{})})}));
