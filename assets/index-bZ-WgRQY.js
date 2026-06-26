(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))d(v);new MutationObserver(v=>{for(const u of v)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function s(v){const u={};return v.integrity&&(u.integrity=v.integrity),v.referrerPolicy&&(u.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?u.credentials="include":v.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function d(v){if(v.ep)return;v.ep=!0;const u=s(v);fetch(v.href,u)}})();var gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var qo={exports:{}},Ja={};var sf;function rg(){if(sf)return Ja;sf=1;var r=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function s(d,v,u){var p=null;if(u!==void 0&&(p=""+u),v.key!==void 0&&(p=""+v.key),"key"in v){u={};for(var f in v)f!=="key"&&(u[f]=v[f])}else u=v;return v=u.ref,{$$typeof:r,type:d,key:p,ref:v!==void 0?v:null,props:u}}return Ja.Fragment=h,Ja.jsx=s,Ja.jsxs=s,Ja}var of;function sg(){return of||(of=1,qo.exports=rg()),qo.exports}var M=sg(),Go={exports:{}},Ce={};var df;function og(){if(df)return Ce;df=1;var r=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),p=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),D=Symbol.iterator;function k(b){return b===null||typeof b!="object"?null:(b=D&&b[D]||b["@@iterator"],typeof b=="function"?b:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,C={};function w(b,z,te){this.props=b,this.context=z,this.refs=C,this.updater=te||_}w.prototype.isReactComponent={},w.prototype.setState=function(b,z){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,z,"setState")},w.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function N(){}N.prototype=w.prototype;function R(b,z,te){this.props=b,this.context=z,this.refs=C,this.updater=te||_}var q=R.prototype=new N;q.constructor=R,x(q,w.prototype),q.isPureReactComponent=!0;var I=Array.isArray;function J(){}var Z={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function $(b,z,te){var W=te.ref;return{$$typeof:r,type:b,key:z,ref:W!==void 0?W:null,props:te}}function he(b,z){return $(b.type,z,b.props)}function ye(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function L(b){var z={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(te){return z[te]})}var ee=/\/+/g;function m(b,z){return typeof b=="object"&&b!==null&&b.key!=null?L(""+b.key):z.toString(36)}function ie(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(J,J):(b.status="pending",b.then(function(z){b.status==="pending"&&(b.status="fulfilled",b.value=z)},function(z){b.status==="pending"&&(b.status="rejected",b.reason=z)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function G(b,z,te,W,ae){var xe=typeof b;(xe==="undefined"||xe==="boolean")&&(b=null);var Te=!1;if(b===null)Te=!0;else switch(xe){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(b.$$typeof){case r:case h:Te=!0;break;case B:return Te=b._init,G(Te(b._payload),z,te,W,ae)}}if(Te)return ae=ae(b),Te=W===""?"."+m(b,0):W,I(ae)?(te="",Te!=null&&(te=Te.replace(ee,"$&/")+"/"),G(ae,z,te,"",function(Pe){return Pe})):ae!=null&&(ye(ae)&&(ae=he(ae,te+(ae.key==null||b&&b.key===ae.key?"":(""+ae.key).replace(ee,"$&/")+"/")+Te)),z.push(ae)),1;Te=0;var Ee=W===""?".":W+":";if(I(b))for(var _e=0;_e<b.length;_e++)W=b[_e],xe=Ee+m(W,_e),Te+=G(W,z,te,xe,ae);else if(_e=k(b),typeof _e=="function")for(b=_e.call(b),_e=0;!(W=b.next()).done;)W=W.value,xe=Ee+m(W,_e++),Te+=G(W,z,te,xe,ae);else if(xe==="object"){if(typeof b.then=="function")return G(ie(b),z,te,W,ae);throw z=String(b),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return Te}function Y(b,z,te){if(b==null)return b;var W=[],ae=0;return G(b,W,"","",function(xe){return z.call(te,xe,ae++)}),W}function fe(b){if(b._status===-1){var z=b._result;z=z(),z.then(function(te){(b._status===0||b._status===-1)&&(b._status=1,b._result=te)},function(te){(b._status===0||b._status===-1)&&(b._status=2,b._result=te)}),b._status===-1&&(b._status=0,b._result=z)}if(b._status===1)return b._result.default;throw b._result}var le=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},ve={map:Y,forEach:function(b,z,te){Y(b,function(){z.apply(this,arguments)},te)},count:function(b){var z=0;return Y(b,function(){z++}),z},toArray:function(b){return Y(b,function(z){return z})||[]},only:function(b){if(!ye(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return Ce.Activity=T,Ce.Children=ve,Ce.Component=w,Ce.Fragment=s,Ce.Profiler=v,Ce.PureComponent=R,Ce.StrictMode=d,Ce.Suspense=y,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(b){return Z.H.useMemoCache(b)}},Ce.cache=function(b){return function(){return b.apply(null,arguments)}},Ce.cacheSignal=function(){return null},Ce.cloneElement=function(b,z,te){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var W=x({},b.props),ae=b.key;if(z!=null)for(xe in z.key!==void 0&&(ae=""+z.key),z)!oe.call(z,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&z.ref===void 0||(W[xe]=z[xe]);var xe=arguments.length-2;if(xe===1)W.children=te;else if(1<xe){for(var Te=Array(xe),Ee=0;Ee<xe;Ee++)Te[Ee]=arguments[Ee+2];W.children=Te}return $(b.type,ae,W)},Ce.createContext=function(b){return b={$$typeof:p,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:u,_context:b},b},Ce.createElement=function(b,z,te){var W,ae={},xe=null;if(z!=null)for(W in z.key!==void 0&&(xe=""+z.key),z)oe.call(z,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ae[W]=z[W]);var Te=arguments.length-2;if(Te===1)ae.children=te;else if(1<Te){for(var Ee=Array(Te),_e=0;_e<Te;_e++)Ee[_e]=arguments[_e+2];ae.children=Ee}if(b&&b.defaultProps)for(W in Te=b.defaultProps,Te)ae[W]===void 0&&(ae[W]=Te[W]);return $(b,xe,ae)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(b){return{$$typeof:f,render:b}},Ce.isValidElement=ye,Ce.lazy=function(b){return{$$typeof:B,_payload:{_status:-1,_result:b},_init:fe}},Ce.memo=function(b,z){return{$$typeof:S,type:b,compare:z===void 0?null:z}},Ce.startTransition=function(b){var z=Z.T,te={};Z.T=te;try{var W=b(),ae=Z.S;ae!==null&&ae(te,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(J,le)}catch(xe){le(xe)}finally{z!==null&&te.types!==null&&(z.types=te.types),Z.T=z}},Ce.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},Ce.use=function(b){return Z.H.use(b)},Ce.useActionState=function(b,z,te){return Z.H.useActionState(b,z,te)},Ce.useCallback=function(b,z){return Z.H.useCallback(b,z)},Ce.useContext=function(b){return Z.H.useContext(b)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(b,z){return Z.H.useDeferredValue(b,z)},Ce.useEffect=function(b,z){return Z.H.useEffect(b,z)},Ce.useEffectEvent=function(b){return Z.H.useEffectEvent(b)},Ce.useId=function(){return Z.H.useId()},Ce.useImperativeHandle=function(b,z,te){return Z.H.useImperativeHandle(b,z,te)},Ce.useInsertionEffect=function(b,z){return Z.H.useInsertionEffect(b,z)},Ce.useLayoutEffect=function(b,z){return Z.H.useLayoutEffect(b,z)},Ce.useMemo=function(b,z){return Z.H.useMemo(b,z)},Ce.useOptimistic=function(b,z){return Z.H.useOptimistic(b,z)},Ce.useReducer=function(b,z,te){return Z.H.useReducer(b,z,te)},Ce.useRef=function(b){return Z.H.useRef(b)},Ce.useState=function(b){return Z.H.useState(b)},Ce.useSyncExternalStore=function(b,z,te){return Z.H.useSyncExternalStore(b,z,te)},Ce.useTransition=function(){return Z.H.useTransition()},Ce.version="19.2.7",Ce}var cf;function td(){return cf||(cf=1,Go.exports=og()),Go.exports}var ot=td(),Yo={exports:{}},$a={},Zo={exports:{}},Xo={};var uf;function dg(){return uf||(uf=1,(function(r){function h(G,Y){var fe=G.length;G.push(Y);e:for(;0<fe;){var le=fe-1>>>1,ve=G[le];if(0<v(ve,Y))G[le]=Y,G[fe]=ve,fe=le;else break e}}function s(G){return G.length===0?null:G[0]}function d(G){if(G.length===0)return null;var Y=G[0],fe=G.pop();if(fe!==Y){G[0]=fe;e:for(var le=0,ve=G.length,b=ve>>>1;le<b;){var z=2*(le+1)-1,te=G[z],W=z+1,ae=G[W];if(0>v(te,fe))W<ve&&0>v(ae,te)?(G[le]=ae,G[W]=fe,le=W):(G[le]=te,G[z]=fe,le=z);else if(W<ve&&0>v(ae,fe))G[le]=ae,G[W]=fe,le=W;else break e}}return Y}function v(G,Y){var fe=G.sortIndex-Y.sortIndex;return fe!==0?fe:G.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var p=Date,f=p.now();r.unstable_now=function(){return p.now()-f}}var y=[],S=[],B=1,T=null,D=3,k=!1,_=!1,x=!1,C=!1,w=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function q(G){for(var Y=s(S);Y!==null;){if(Y.callback===null)d(S);else if(Y.startTime<=G)d(S),Y.sortIndex=Y.expirationTime,h(y,Y);else break;Y=s(S)}}function I(G){if(x=!1,q(G),!_)if(s(y)!==null)_=!0,J||(J=!0,L());else{var Y=s(S);Y!==null&&ie(I,Y.startTime-G)}}var J=!1,Z=-1,oe=5,$=-1;function he(){return C?!0:!(r.unstable_now()-$<oe)}function ye(){if(C=!1,J){var G=r.unstable_now();$=G;var Y=!0;try{e:{_=!1,x&&(x=!1,N(Z),Z=-1),k=!0;var fe=D;try{t:{for(q(G),T=s(y);T!==null&&!(T.expirationTime>G&&he());){var le=T.callback;if(typeof le=="function"){T.callback=null,D=T.priorityLevel;var ve=le(T.expirationTime<=G);if(G=r.unstable_now(),typeof ve=="function"){T.callback=ve,q(G),Y=!0;break t}T===s(y)&&d(y),q(G)}else d(y);T=s(y)}if(T!==null)Y=!0;else{var b=s(S);b!==null&&ie(I,b.startTime-G),Y=!1}}break e}finally{T=null,D=fe,k=!1}Y=void 0}}finally{Y?L():J=!1}}}var L;if(typeof R=="function")L=function(){R(ye)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,m=ee.port2;ee.port1.onmessage=ye,L=function(){m.postMessage(null)}}else L=function(){w(ye,0)};function ie(G,Y){Z=w(function(){G(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(G){switch(D){case 1:case 2:case 3:var Y=3;break;default:Y=D}var fe=D;D=Y;try{return G()}finally{D=fe}},r.unstable_requestPaint=function(){C=!0},r.unstable_runWithPriority=function(G,Y){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var fe=D;D=G;try{return Y()}finally{D=fe}},r.unstable_scheduleCallback=function(G,Y,fe){var le=r.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?le+fe:le):fe=le,G){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=fe+ve,G={id:B++,callback:Y,priorityLevel:G,startTime:fe,expirationTime:ve,sortIndex:-1},fe>le?(G.sortIndex=fe,h(S,G),s(y)===null&&G===s(S)&&(x?(N(Z),Z=-1):x=!0,ie(I,fe-le))):(G.sortIndex=ve,h(y,G),_||k||(_=!0,J||(J=!0,L()))),G},r.unstable_shouldYield=he,r.unstable_wrapCallback=function(G){var Y=D;return function(){var fe=D;D=Y;try{return G.apply(this,arguments)}finally{D=fe}}}})(Xo)),Xo}var hf;function cg(){return hf||(hf=1,Zo.exports=dg()),Zo.exports}var Vo={exports:{}},xt={};var ff;function ug(){if(ff)return xt;ff=1;var r=td();function h(y){var S="https://react.dev/errors/"+y;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)S+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+y+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var d={d:{f:s,r:function(){throw Error(h(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},v=Symbol.for("react.portal");function u(y,S,B){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:T==null?null:""+T,children:y,containerInfo:S,implementation:B}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(y,S){if(y==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,xt.createPortal=function(y,S){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(h(299));return u(y,S,null,B)},xt.flushSync=function(y){var S=p.T,B=d.p;try{if(p.T=null,d.p=2,y)return y()}finally{p.T=S,d.p=B,d.d.f()}},xt.preconnect=function(y,S){typeof y=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,d.d.C(y,S))},xt.prefetchDNS=function(y){typeof y=="string"&&d.d.D(y)},xt.preinit=function(y,S){if(typeof y=="string"&&S&&typeof S.as=="string"){var B=S.as,T=f(B,S.crossOrigin),D=typeof S.integrity=="string"?S.integrity:void 0,k=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;B==="style"?d.d.S(y,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:T,integrity:D,fetchPriority:k}):B==="script"&&d.d.X(y,{crossOrigin:T,integrity:D,fetchPriority:k,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},xt.preinitModule=function(y,S){if(typeof y=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var B=f(S.as,S.crossOrigin);d.d.M(y,{crossOrigin:B,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&d.d.M(y)},xt.preload=function(y,S){if(typeof y=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var B=S.as,T=f(B,S.crossOrigin);d.d.L(y,B,{crossOrigin:T,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},xt.preloadModule=function(y,S){if(typeof y=="string")if(S){var B=f(S.as,S.crossOrigin);d.d.m(y,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:B,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else d.d.m(y)},xt.requestFormReset=function(y){d.d.r(y)},xt.unstable_batchedUpdates=function(y,S){return y(S)},xt.useFormState=function(y,S,B){return p.H.useFormState(y,S,B)},xt.useFormStatus=function(){return p.H.useHostTransitionStatus()},xt.version="19.2.7",xt}var mf;function hg(){if(mf)return Vo.exports;mf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(h){console.error(h)}}return r(),Vo.exports=ug(),Vo.exports}var pf;function fg(){if(pf)return $a;pf=1;var r=cg(),h=td(),s=hg();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(u(e)!==e)throw Error(d(188))}function S(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(d(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return y(a),e;if(l===i)return y(a),t;l=l.sibling}throw Error(d(188))}if(n.return!==i.return)n=a,i=l;else{for(var o=!1,g=a.child;g;){if(g===n){o=!0,n=a,i=l;break}if(g===i){o=!0,i=a,n=l;break}g=g.sibling}if(!o){for(g=l.child;g;){if(g===n){o=!0,n=l,i=a;break}if(g===i){o=!0,i=l,n=a;break}g=g.sibling}if(!o)throw Error(d(189))}}if(n.alternate!==i)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var T=Object.assign,D=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),R=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),$=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function m(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case w:return"Profiler";case C:return"StrictMode";case I:return"Suspense";case J:return"SuspenseList";case $:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case R:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:m(e.type)||"Memo";case oe:t=e._payload,e=e._init;try{return m(e(t))}catch{}}return null}var ie=Array.isArray,G=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},le=[],ve=-1;function b(e){return{current:e}}function z(e){0>ve||(e.current=le[ve],le[ve]=null,ve--)}function te(e,t){ve++,le[ve]=e.current,e.current=t}var W=b(null),ae=b(null),xe=b(null),Te=b(null);function Ee(e,t){switch(te(xe,t),te(ae,e),te(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Mh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Mh(t),e=zh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(W),te(W,e)}function _e(){z(W),z(ae),z(xe)}function Pe(e){e.memoizedState!==null&&te(Te,e);var t=W.current,n=zh(t,e.type);t!==n&&(te(ae,e),te(W,n))}function Ge(e){ae.current===e&&(z(W),z(ae)),Te.current===e&&(z(Te),Va._currentValue=fe)}var yt,bt;function c(e){if(yt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yt=t&&t[1]||"",bt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+bt}var re=!1;function j(e,t){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var de=function(){throw Error()};if(Object.defineProperty(de.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(de,[])}catch(Q){var P=Q}Reflect.construct(e,[],de)}else{try{de.call()}catch(Q){P=Q}e.call(de.prototype)}}else{try{throw Error()}catch(Q){P=Q}(de=e())&&typeof de.catch=="function"&&de.catch(function(){})}}catch(Q){if(Q&&P&&typeof Q.stack=="string")return[Q.stack,P.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),o=l[0],g=l[1];if(o&&g){var O=o.split(`
`),V=g.split(`
`);for(a=i=0;i<O.length&&!O[i].includes("DetermineComponentFrameRoot");)i++;for(;a<V.length&&!V[a].includes("DetermineComponentFrameRoot");)a++;if(i===O.length||a===V.length)for(i=O.length-1,a=V.length-1;1<=i&&0<=a&&O[i]!==V[a];)a--;for(;1<=i&&0<=a;i--,a--)if(O[i]!==V[a]){if(i!==1||a!==1)do if(i--,a--,0>a||O[i]!==V[a]){var ne=`
`+O[i].replace(" at new "," at ");return e.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",e.displayName)),ne}while(1<=i&&0<=a);break}}}finally{re=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?c(n):""}function A(e,t){switch(e.tag){case 26:case 27:case 5:return c(e.type);case 16:return c("Lazy");case 13:return e.child!==t&&t!==null?c("Suspense Fallback"):c("Suspense");case 19:return c("SuspenseList");case 0:case 15:return j(e.type,!1);case 11:return j(e.type.render,!1);case 1:return j(e.type,!0);case 31:return c("Activity");default:return""}}function E(e){try{var t="",n=null;do t+=A(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var U=Object.prototype.hasOwnProperty,ce=r.unstable_scheduleCallback,ue=r.unstable_cancelCallback,K=r.unstable_shouldYield,me=r.unstable_requestPaint,ge=r.unstable_now,pe=r.unstable_getCurrentPriorityLevel,ke=r.unstable_ImmediatePriority,Ie=r.unstable_UserBlockingPriority,Be=r.unstable_NormalPriority,kt=r.unstable_LowPriority,_n=r.unstable_IdlePriority,Ht=r.log,Qn=r.unstable_setDisableYieldValue,Ve=null,ct=null;function jt(e){if(typeof Ht=="function"&&Qn(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:Cr,nl=Math.log,Tr=Math.LN2;function Cr(e){return e>>>=0,e===0?32:31-(nl(e)/Tr|0)|0}var gi=256,Jn=262144,Wt=4194304;function Ut(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function il(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~l,i!==0?a=Ut(i):(o&=g,o!==0?a=Ut(o):n||(n=g&~e,n!==0&&(a=Ut(n))))):(g=i&~l,g!==0?a=Ut(g):o!==0?a=Ut(o):n||(n=i&~e,n!==0&&(a=Ut(n)))),a===0?0:t!==0&&t!==a&&(t&l)===0&&(l=a&-a,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:a}function ra(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Xf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cd(){var e=Wt;return Wt<<=1,(Wt&62914560)===0&&(Wt=4194304),e}function Mr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vf(e,t,n,i,a,l){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,O=e.expirationTimes,V=e.hiddenUpdates;for(n=o&~n;0<n;){var ne=31-We(n),de=1<<ne;g[ne]=0,O[ne]=-1;var P=V[ne];if(P!==null)for(V[ne]=null,ne=0;ne<P.length;ne++){var Q=P[ne];Q!==null&&(Q.lane&=-536870913)}n&=~de}i!==0&&ud(e,i,0),l!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function ud(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-We(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function hd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-We(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function fd(e,t){var n=t&-t;return n=(n&42)!==0?1:zr(n),(n&(e.suspendedLanes|t))!==0?0:n}function zr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Br(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function md(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Wh(e.type))}function pd(e,t){var n=Y.p;try{return Y.p=e,t()}finally{Y.p=n}}var En=Math.random().toString(36).slice(2),ft="__reactFiber$"+En,wt="__reactProps$"+En,vi="__reactContainer$"+En,Nr="__reactEvents$"+En,Kf="__reactListeners$"+En,Pf="__reactHandles$"+En,gd="__reactResources$"+En,oa="__reactMarker$"+En;function Dr(e){delete e[ft],delete e[wt],delete e[Nr],delete e[Kf],delete e[Pf]}function yi(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vi]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hh(e);e!==null;){if(n=e[ft])return n;e=Hh(e)}return t}e=n,n=e.parentNode}return null}function bi(e){if(e=e[ft]||e[vi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function da(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function xi(e){var t=e[gd];return t||(t=e[gd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[oa]=!0}var vd=new Set,yd={};function $n(e,t){Si(e,t),Si(e+"Capture",t)}function Si(e,t){for(yd[e]=t,e=0;e<t.length;e++)vd.add(t[e])}var Qf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bd={},xd={};function Jf(e){return U.call(xd,e)?!0:U.call(bd,e)?!1:Qf.test(e)?xd[e]=!0:(bd[e]=!0,!1)}function al(e,t,n){if(Jf(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ll(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function rn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function It(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $f(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,l=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){n=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Or(e){if(!e._valueTracker){var t=Sd(e)?"checked":"value";e._valueTracker=$f(e,t,""+e[t])}}function kd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Sd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wf=/[\n"\\]/g;function Ft(e){return e.replace(Wf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lr(e,t,n,i,a,l,o,g){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+It(t)):e.value!==""+It(t)&&(e.value=""+It(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Rr(e,o,It(t)):n!=null?Rr(e,o,It(n)):i!=null&&e.removeAttribute("value"),a==null&&l!=null&&(e.defaultChecked=!!l),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+It(g):e.removeAttribute("name")}function wd(e,t,n,i,a,l,o,g){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Or(e);return}n=n!=null?""+It(n):"",t=t!=null?""+It(t):n,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Or(e)}function Rr(e,t,n){t==="number"&&rl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ki(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function _d(e,t,n){if(t!=null&&(t=""+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+It(n):""}function Ed(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(d(92));if(ie(i)){if(1<i.length)throw Error(d(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=It(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Or(e)}function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var em=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ad(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||em.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Td(e,t,n){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&Ad(e,a,i)}else for(var l in t)t.hasOwnProperty(l)&&Ad(e,l,t[l])}function Hr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return nm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sn(){}var jr=null;function Ur(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,Ei=null;function Cd(e){var t=bi(e);if(t&&(e=t.stateNode)){var n=e[wt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Lr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ft(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[wt]||null;if(!a)throw Error(d(90));Lr(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&kd(i)}break e;case"textarea":_d(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ki(e,!!n.multiple,t,!1)}}}var Ir=!1;function Md(e,t,n){if(Ir)return e(t,n);Ir=!0;try{var i=e(t);return i}finally{if(Ir=!1,(_i!==null||Ei!==null)&&(Kl(),_i&&(t=_i,e=Ei,Ei=_i=null,Cd(t),e)))for(t=0;t<e.length;t++)Cd(e[t])}}function ca(e,t){var n=e.stateNode;if(n===null)return null;var i=n[wt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,t,typeof n));return n}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fr=!1;if(on)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){Fr=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{Fr=!1}var An=null,qr=null,ol=null;function zd(){if(ol)return ol;var e,t=qr,n=t.length,i,a="value"in An?An.value:An.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(i=1;i<=o&&t[n-i]===a[l-i];i++);return ol=a.slice(e,1<i?1-i:void 0)}function dl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cl(){return!0}function Bd(){return!1}function _t(e){function t(n,i,a,l,o){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(l):l[g]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?cl:Bd,this.isPropagationStopped=Bd,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=_t(Wn),ha=T({},Wn,{view:0,detail:0}),im=_t(ha),Gr,Yr,fa,hl=T({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fa&&(fa&&e.type==="mousemove"?(Gr=e.screenX-fa.screenX,Yr=e.screenY-fa.screenY):Yr=Gr=0,fa=e),Gr)},movementY:function(e){return"movementY"in e?e.movementY:Yr}}),Nd=_t(hl),am=T({},hl,{dataTransfer:0}),lm=_t(am),rm=T({},ha,{relatedTarget:0}),Zr=_t(rm),sm=T({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),om=_t(sm),dm=T({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cm=_t(dm),um=T({},Wn,{data:0}),Dd=_t(um),hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mm[e])?!!t[e]:!1}function Xr(){return pm}var gm=T({},ha,{key:function(e){if(e.key){var t=hm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xr,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vm=_t(gm),ym=T({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=_t(ym),bm=T({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xr}),xm=_t(bm),Sm=T({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),km=_t(Sm),wm=T({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_m=_t(wm),Em=T({},Wn,{newState:0,oldState:0}),Am=_t(Em),Tm=[9,13,27,32],Vr=on&&"CompositionEvent"in window,ma=null;on&&"documentMode"in document&&(ma=document.documentMode);var Cm=on&&"TextEvent"in window&&!ma,Ld=on&&(!Vr||ma&&8<ma&&11>=ma),Rd=" ",Hd=!1;function jd(e,t){switch(e){case"keyup":return Tm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ai=!1;function Mm(e,t){switch(e){case"compositionend":return Ud(t);case"keypress":return t.which!==32?null:(Hd=!0,Rd);case"textInput":return e=t.data,e===Rd&&Hd?null:e;default:return null}}function zm(e,t){if(Ai)return e==="compositionend"||!Vr&&jd(e,t)?(e=zd(),ol=qr=An=null,Ai=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ld&&t.locale!=="ko"?null:t.data;default:return null}}var Bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bm[e.type]:t==="textarea"}function Fd(e,t,n,i){_i?Ei?Ei.push(i):Ei=[i]:_i=i,t=tr(t,"onChange"),0<t.length&&(n=new ul("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var pa=null,ga=null;function Nm(e){wh(e,0)}function fl(e){var t=da(e);if(kd(t))return e}function qd(e,t){if(e==="change")return t}var Gd=!1;if(on){var Kr;if(on){var Pr="oninput"in document;if(!Pr){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),Pr=typeof Yd.oninput=="function"}Kr=Pr}else Kr=!1;Gd=Kr&&(!document.documentMode||9<document.documentMode)}function Zd(){pa&&(pa.detachEvent("onpropertychange",Xd),ga=pa=null)}function Xd(e){if(e.propertyName==="value"&&fl(ga)){var t=[];Fd(t,ga,e,Ur(e)),Md(Nm,t)}}function Dm(e,t,n){e==="focusin"?(Zd(),pa=t,ga=n,pa.attachEvent("onpropertychange",Xd)):e==="focusout"&&Zd()}function Om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(ga)}function Lm(e,t){if(e==="click")return fl(t)}function Rm(e,t){if(e==="input"||e==="change")return fl(t)}function Hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:Hm;function va(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!U.call(t,a)||!zt(e[a],t[a]))return!1}return!0}function Vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kd(e,t){var n=Vd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vd(n)}}function Pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=rl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rl(e.document)}return t}function Qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jm=on&&"documentMode"in document&&11>=document.documentMode,Ti=null,Jr=null,ya=null,$r=!1;function Jd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$r||Ti==null||Ti!==rl(i)||(i=Ti,"selectionStart"in i&&Qr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ya&&va(ya,i)||(ya=i,i=tr(Jr,"onSelect"),0<i.length&&(t=new ul("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ti)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ci={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionrun:ei("Transition","TransitionRun"),transitionstart:ei("Transition","TransitionStart"),transitioncancel:ei("Transition","TransitionCancel"),transitionend:ei("Transition","TransitionEnd")},Wr={},$d={};on&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function ti(e){if(Wr[e])return Wr[e];if(!Ci[e])return e;var t=Ci[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $d)return Wr[e]=t[n];return e}var Wd=ti("animationend"),ec=ti("animationiteration"),tc=ti("animationstart"),Um=ti("transitionrun"),Im=ti("transitionstart"),Fm=ti("transitioncancel"),nc=ti("transitionend"),ic=new Map,es="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");es.push("scrollEnd");function Qt(e,t){ic.set(e,t),$n(t,[e])}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qt=[],Mi=0,ts=0;function pl(){for(var e=Mi,t=ts=Mi=0;t<e;){var n=qt[t];qt[t++]=null;var i=qt[t];qt[t++]=null;var a=qt[t];qt[t++]=null;var l=qt[t];if(qt[t++]=null,i!==null&&a!==null){var o=i.pending;o===null?a.next=a:(a.next=o.next,o.next=a),i.pending=a}l!==0&&ac(n,a,l)}}function gl(e,t,n,i){qt[Mi++]=e,qt[Mi++]=t,qt[Mi++]=n,qt[Mi++]=i,ts|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ns(e,t,n,i){return gl(e,t,n,i),vl(e)}function ni(e,t){return gl(e,null,null,t),vl(e)}function ac(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,l=e.return;l!==null;)l.childLanes|=n,i=l.alternate,i!==null&&(i.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(a=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,a&&t!==null&&(a=31-We(n),e=l.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),l):null}function vl(e){if(50<Ia)throw Ia=0,ho=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zi={};function qm(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(e,t,n,i){return new qm(e,t,n,i)}function is(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dn(e,t){var n=e.alternate;return n===null?(n=Bt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function lc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yl(e,t,n,i,a,l){var o=0;if(i=e,typeof e=="function")is(e)&&(o=1);else if(typeof e=="string")o=Vp(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case $:return e=Bt(31,n,t,a),e.elementType=$,e.lanes=l,e;case x:return ii(n.children,a,l,t);case C:o=8,a|=24;break;case w:return e=Bt(12,n,t,a|2),e.elementType=w,e.lanes=l,e;case I:return e=Bt(13,n,t,a),e.elementType=I,e.lanes=l,e;case J:return e=Bt(19,n,t,a),e.elementType=J,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:o=10;break e;case N:o=9;break e;case q:o=11;break e;case Z:o=14;break e;case oe:o=16,i=null;break e}o=29,n=Error(d(130,e===null?"null":typeof e,"")),i=null}return t=Bt(o,n,t,a),t.elementType=e,t.type=i,t.lanes=l,t}function ii(e,t,n,i){return e=Bt(7,e,i,t),e.lanes=n,e}function as(e,t,n){return e=Bt(6,e,null,t),e.lanes=n,e}function rc(e){var t=Bt(18,null,null,0);return t.stateNode=e,t}function ls(e,t,n){return t=Bt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var sc=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var n=sc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:E(t)},sc.set(e,t),t)}return{value:e,source:t,stack:E(t)}}var Bi=[],Ni=0,bl=null,ba=0,Yt=[],Zt=0,Tn=null,en=1,tn="";function cn(e,t){Bi[Ni++]=ba,Bi[Ni++]=bl,bl=e,ba=t}function oc(e,t,n){Yt[Zt++]=en,Yt[Zt++]=tn,Yt[Zt++]=Tn,Tn=e;var i=en;e=tn;var a=32-We(i)-1;i&=~(1<<a),n+=1;var l=32-We(t)+a;if(30<l){var o=a-a%5;l=(i&(1<<o)-1).toString(32),i>>=o,a-=o,en=1<<32-We(t)+a|n<<a|i,tn=l+e}else en=1<<l|n<<a|i,tn=e}function rs(e){e.return!==null&&(cn(e,1),oc(e,1,0))}function ss(e){for(;e===bl;)bl=Bi[--Ni],Bi[Ni]=null,ba=Bi[--Ni],Bi[Ni]=null;for(;e===Tn;)Tn=Yt[--Zt],Yt[Zt]=null,tn=Yt[--Zt],Yt[Zt]=null,en=Yt[--Zt],Yt[Zt]=null}function dc(e,t){Yt[Zt++]=en,Yt[Zt++]=tn,Yt[Zt++]=Tn,en=t.id,tn=t.overflow,Tn=e}var mt=null,Qe=null,Re=!1,Cn=null,Xt=!1,os=Error(d(519));function Mn(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xa(Gt(t,e)),os}function cc(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ft]=e,t[wt]=i,n){case"dialog":De("cancel",t),De("close",t);break;case"iframe":case"object":case"embed":De("load",t);break;case"video":case"audio":for(n=0;n<qa.length;n++)De(qa[n],t);break;case"source":De("error",t);break;case"img":case"image":case"link":De("error",t),De("load",t);break;case"details":De("toggle",t);break;case"input":De("invalid",t),wd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":De("invalid",t);break;case"textarea":De("invalid",t),Ed(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Th(t.textContent,n)?(i.popover!=null&&(De("beforetoggle",t),De("toggle",t)),i.onScroll!=null&&De("scroll",t),i.onScrollEnd!=null&&De("scrollend",t),i.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Mn(e,!0)}function uc(e){for(mt=e.return;mt;)switch(mt.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:mt=mt.return}}function Di(e){if(e!==mt)return!1;if(!Re)return uc(e),Re=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||To(e.type,e.memoizedProps)),n=!n),n&&Qe&&Mn(e),uc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Qe=Rh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Qe=Rh(e)}else t===27?(t=Qe,Gn(e.type)?(e=No,No=null,Qe=e):Qe=t):Qe=mt?Kt(e.stateNode.nextSibling):null;return!0}function ai(){Qe=mt=null,Re=!1}function ds(){var e=Cn;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),Cn=null),e}function xa(e){Cn===null?Cn=[e]:Cn.push(e)}var cs=b(null),li=null,un=null;function zn(e,t,n){te(cs,t._currentValue),t._currentValue=n}function hn(e){e._currentValue=cs.current,z(cs)}function us(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function hs(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){var o=a.child;l=l.firstContext;e:for(;l!==null;){var g=l;l=a;for(var O=0;O<t.length;O++)if(g.context===t[O]){l.lanes|=n,g=l.alternate,g!==null&&(g.lanes|=n),us(l.return,n,e),i||(o=null);break e}l=g.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(d(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),us(o,n,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function Oi(e,t,n,i){e=null;for(var a=t,l=!1;a!==null;){if(!l){if((a.flags&524288)!==0)l=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(d(387));if(o=o.memoizedProps,o!==null){var g=a.type;zt(a.pendingProps.value,o.value)||(e!==null?e.push(g):e=[g])}}else if(a===Te.current){if(o=a.alternate,o===null)throw Error(d(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Va):e=[Va])}a=a.return}e!==null&&hs(t,e,n,i),t.flags|=262144}function xl(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ri(e){li=e,un=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pt(e){return hc(li,e)}function Sl(e,t){return li===null&&ri(e),hc(e,t)}function hc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},un===null){if(e===null)throw Error(d(308));un=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else un=un.next=t;return n}var Gm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ym=r.unstable_scheduleCallback,Zm=r.unstable_NormalPriority,at={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fs(){return{controller:new Gm,data:new Map,refCount:0}}function Sa(e){e.refCount--,e.refCount===0&&Ym(Zm,function(){e.controller.abort()})}var ka=null,ms=0,Li=0,Ri=null;function Xm(e,t){if(ka===null){var n=ka=[];ms=0,Li=yo(),Ri={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ms++,t.then(fc,fc),t}function fc(){if(--ms===0&&ka!==null){Ri!==null&&(Ri.status="fulfilled");var e=ka;ka=null,Li=0,Ri=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Vm(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var mc=G.S;G.S=function(e,t){Ju=ge(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Xm(e,t),mc!==null&&mc(e,t)};var si=b(null);function ps(){var e=si.current;return e!==null?e:Ke.pooledCache}function kl(e,t){t===null?te(si,si.current):te(si,t.pool)}function pc(){var e=ps();return e===null?null:{parent:at._currentValue,pool:e}}var Hi=Error(d(460)),gs=Error(d(474)),wl=Error(d(542)),_l={then:function(){}};function gc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vc(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bc(e),e;default:if(typeof t.status=="string")t.then(sn,sn);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bc(e),e}throw di=t,Hi}}function oi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(di=n,Hi):n}}var di=null;function yc(){if(di===null)throw Error(d(459));var e=di;return di=null,e}function bc(e){if(e===Hi||e===wl)throw Error(d(483))}var ji=null,wa=0;function El(e){var t=wa;return wa+=1,ji===null&&(ji=[]),vc(ji,e,t)}function _a(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Al(e,t){throw t.$$typeof===D?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xc(e){function t(F,H){if(e){var X=F.deletions;X===null?(F.deletions=[H],F.flags|=16):X.push(H)}}function n(F,H){if(!e)return null;for(;H!==null;)t(F,H),H=H.sibling;return null}function i(F){for(var H=new Map;F!==null;)F.key!==null?H.set(F.key,F):H.set(F.index,F),F=F.sibling;return H}function a(F,H){return F=dn(F,H),F.index=0,F.sibling=null,F}function l(F,H,X){return F.index=X,e?(X=F.alternate,X!==null?(X=X.index,X<H?(F.flags|=67108866,H):X):(F.flags|=67108866,H)):(F.flags|=1048576,H)}function o(F){return e&&F.alternate===null&&(F.flags|=67108866),F}function g(F,H,X,se){return H===null||H.tag!==6?(H=as(X,F.mode,se),H.return=F,H):(H=a(H,X),H.return=F,H)}function O(F,H,X,se){var we=X.type;return we===x?ne(F,H,X.props.children,se,X.key):H!==null&&(H.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===oe&&oi(we)===H.type)?(H=a(H,X.props),_a(H,X),H.return=F,H):(H=yl(X.type,X.key,X.props,null,F.mode,se),_a(H,X),H.return=F,H)}function V(F,H,X,se){return H===null||H.tag!==4||H.stateNode.containerInfo!==X.containerInfo||H.stateNode.implementation!==X.implementation?(H=ls(X,F.mode,se),H.return=F,H):(H=a(H,X.children||[]),H.return=F,H)}function ne(F,H,X,se,we){return H===null||H.tag!==7?(H=ii(X,F.mode,se,we),H.return=F,H):(H=a(H,X),H.return=F,H)}function de(F,H,X){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=as(""+H,F.mode,X),H.return=F,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case k:return X=yl(H.type,H.key,H.props,null,F.mode,X),_a(X,H),X.return=F,X;case _:return H=ls(H,F.mode,X),H.return=F,H;case oe:return H=oi(H),de(F,H,X)}if(ie(H)||L(H))return H=ii(H,F.mode,X,null),H.return=F,H;if(typeof H.then=="function")return de(F,El(H),X);if(H.$$typeof===R)return de(F,Sl(F,H),X);Al(F,H)}return null}function P(F,H,X,se){var we=H!==null?H.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return we!==null?null:g(F,H,""+X,se);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case k:return X.key===we?O(F,H,X,se):null;case _:return X.key===we?V(F,H,X,se):null;case oe:return X=oi(X),P(F,H,X,se)}if(ie(X)||L(X))return we!==null?null:ne(F,H,X,se,null);if(typeof X.then=="function")return P(F,H,El(X),se);if(X.$$typeof===R)return P(F,H,Sl(F,X),se);Al(F,X)}return null}function Q(F,H,X,se,we){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return F=F.get(X)||null,g(H,F,""+se,we);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case k:return F=F.get(se.key===null?X:se.key)||null,O(H,F,se,we);case _:return F=F.get(se.key===null?X:se.key)||null,V(H,F,se,we);case oe:return se=oi(se),Q(F,H,X,se,we)}if(ie(se)||L(se))return F=F.get(X)||null,ne(H,F,se,we,null);if(typeof se.then=="function")return Q(F,H,X,El(se),we);if(se.$$typeof===R)return Q(F,H,X,Sl(H,se),we);Al(H,se)}return null}function be(F,H,X,se){for(var we=null,He=null,Se=H,ze=H=0,Le=null;Se!==null&&ze<X.length;ze++){Se.index>ze?(Le=Se,Se=null):Le=Se.sibling;var je=P(F,Se,X[ze],se);if(je===null){Se===null&&(Se=Le);break}e&&Se&&je.alternate===null&&t(F,Se),H=l(je,H,ze),He===null?we=je:He.sibling=je,He=je,Se=Le}if(ze===X.length)return n(F,Se),Re&&cn(F,ze),we;if(Se===null){for(;ze<X.length;ze++)Se=de(F,X[ze],se),Se!==null&&(H=l(Se,H,ze),He===null?we=Se:He.sibling=Se,He=Se);return Re&&cn(F,ze),we}for(Se=i(Se);ze<X.length;ze++)Le=Q(Se,F,ze,X[ze],se),Le!==null&&(e&&Le.alternate!==null&&Se.delete(Le.key===null?ze:Le.key),H=l(Le,H,ze),He===null?we=Le:He.sibling=Le,He=Le);return e&&Se.forEach(function(Kn){return t(F,Kn)}),Re&&cn(F,ze),we}function Ae(F,H,X,se){if(X==null)throw Error(d(151));for(var we=null,He=null,Se=H,ze=H=0,Le=null,je=X.next();Se!==null&&!je.done;ze++,je=X.next()){Se.index>ze?(Le=Se,Se=null):Le=Se.sibling;var Kn=P(F,Se,je.value,se);if(Kn===null){Se===null&&(Se=Le);break}e&&Se&&Kn.alternate===null&&t(F,Se),H=l(Kn,H,ze),He===null?we=Kn:He.sibling=Kn,He=Kn,Se=Le}if(je.done)return n(F,Se),Re&&cn(F,ze),we;if(Se===null){for(;!je.done;ze++,je=X.next())je=de(F,je.value,se),je!==null&&(H=l(je,H,ze),He===null?we=je:He.sibling=je,He=je);return Re&&cn(F,ze),we}for(Se=i(Se);!je.done;ze++,je=X.next())je=Q(Se,F,ze,je.value,se),je!==null&&(e&&je.alternate!==null&&Se.delete(je.key===null?ze:je.key),H=l(je,H,ze),He===null?we=je:He.sibling=je,He=je);return e&&Se.forEach(function(ag){return t(F,ag)}),Re&&cn(F,ze),we}function Xe(F,H,X,se){if(typeof X=="object"&&X!==null&&X.type===x&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case k:e:{for(var we=X.key;H!==null;){if(H.key===we){if(we=X.type,we===x){if(H.tag===7){n(F,H.sibling),se=a(H,X.props.children),se.return=F,F=se;break e}}else if(H.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===oe&&oi(we)===H.type){n(F,H.sibling),se=a(H,X.props),_a(se,X),se.return=F,F=se;break e}n(F,H);break}else t(F,H);H=H.sibling}X.type===x?(se=ii(X.props.children,F.mode,se,X.key),se.return=F,F=se):(se=yl(X.type,X.key,X.props,null,F.mode,se),_a(se,X),se.return=F,F=se)}return o(F);case _:e:{for(we=X.key;H!==null;){if(H.key===we)if(H.tag===4&&H.stateNode.containerInfo===X.containerInfo&&H.stateNode.implementation===X.implementation){n(F,H.sibling),se=a(H,X.children||[]),se.return=F,F=se;break e}else{n(F,H);break}else t(F,H);H=H.sibling}se=ls(X,F.mode,se),se.return=F,F=se}return o(F);case oe:return X=oi(X),Xe(F,H,X,se)}if(ie(X))return be(F,H,X,se);if(L(X)){if(we=L(X),typeof we!="function")throw Error(d(150));return X=we.call(X),Ae(F,H,X,se)}if(typeof X.then=="function")return Xe(F,H,El(X),se);if(X.$$typeof===R)return Xe(F,H,Sl(F,X),se);Al(F,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,H!==null&&H.tag===6?(n(F,H.sibling),se=a(H,X),se.return=F,F=se):(n(F,H),se=as(X,F.mode,se),se.return=F,F=se),o(F)):n(F,H)}return function(F,H,X,se){try{wa=0;var we=Xe(F,H,X,se);return ji=null,we}catch(Se){if(Se===Hi||Se===wl)throw Se;var He=Bt(29,Se,null,F.mode);return He.lanes=se,He.return=F,He}}}var ci=xc(!0),Sc=xc(!1),Bn=!1;function vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ys(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Nn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ue&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=vl(e),ac(e,null,n),t}return gl(e,i,t,n),vl(e)}function Ea(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,hd(e,n)}}function bs(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?a=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xs=!1;function Aa(){if(xs){var e=Ri;if(e!==null)throw e}}function Ta(e,t,n,i){xs=!1;var a=e.updateQueue;Bn=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,g=a.shared.pending;if(g!==null){a.shared.pending=null;var O=g,V=O.next;O.next=null,o===null?l=V:o.next=V,o=O;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,g=ne.lastBaseUpdate,g!==o&&(g===null?ne.firstBaseUpdate=V:g.next=V,ne.lastBaseUpdate=O))}if(l!==null){var de=a.baseState;o=0,ne=V=O=null,g=l;do{var P=g.lane&-536870913,Q=P!==g.lane;if(Q?(Oe&P)===P:(i&P)===P){P!==0&&P===Li&&(xs=!0),ne!==null&&(ne=ne.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var be=e,Ae=g;P=t;var Xe=n;switch(Ae.tag){case 1:if(be=Ae.payload,typeof be=="function"){de=be.call(Xe,de,P);break e}de=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=Ae.payload,P=typeof be=="function"?be.call(Xe,de,P):be,P==null)break e;de=T({},de,P);break e;case 2:Bn=!0}}P=g.callback,P!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=a.callbacks,Q===null?a.callbacks=[P]:Q.push(P))}else Q={lane:P,tag:g.tag,payload:g.payload,callback:g.callback,next:null},ne===null?(V=ne=Q,O=de):ne=ne.next=Q,o|=P;if(g=g.next,g===null){if(g=a.shared.pending,g===null)break;Q=g,g=Q.next,Q.next=null,a.lastBaseUpdate=Q,a.shared.pending=null}}while(!0);ne===null&&(O=de),a.baseState=O,a.firstBaseUpdate=V,a.lastBaseUpdate=ne,l===null&&(a.shared.lanes=0),jn|=o,e.lanes=o,e.memoizedState=de}}function kc(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function wc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)kc(n[e],t)}var Ui=b(null),Tl=b(0);function _c(e,t){e=Sn,te(Tl,e),te(Ui,t),Sn=e|t.baseLanes}function Ss(){te(Tl,Sn),te(Ui,Ui.current)}function ks(){Sn=Tl.current,z(Ui),z(Tl)}var Nt=b(null),Vt=null;function On(e){var t=e.alternate;te(nt,nt.current&1),te(Nt,e),Vt===null&&(t===null||Ui.current!==null||t.memoizedState!==null)&&(Vt=e)}function ws(e){te(nt,nt.current),te(Nt,e),Vt===null&&(Vt=e)}function Ec(e){e.tag===22?(te(nt,nt.current),te(Nt,e),Vt===null&&(Vt=e)):Ln()}function Ln(){te(nt,nt.current),te(Nt,Nt.current)}function Dt(e){z(Nt),Vt===e&&(Vt=null),z(nt)}var nt=b(0);function Cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||zo(n)||Bo(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fn=0,Me=null,Ye=null,lt=null,Ml=!1,Ii=!1,ui=!1,zl=0,Ca=0,Fi=null,Km=0;function et(){throw Error(d(321))}function _s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Es(e,t,n,i,a,l){return fn=l,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,G.H=e===null||e.memoizedState===null?ou:Is,ui=!1,l=n(i,a),ui=!1,Ii&&(l=Tc(t,n,i,a)),Ac(e),l}function Ac(e){G.H=Ba;var t=Ye!==null&&Ye.next!==null;if(fn=0,lt=Ye=Me=null,Ml=!1,Ca=0,Fi=null,t)throw Error(d(300));e===null||rt||(e=e.dependencies,e!==null&&xl(e)&&(rt=!0))}function Tc(e,t,n,i){Me=e;var a=0;do{if(Ii&&(Fi=null),Ca=0,Ii=!1,25<=a)throw Error(d(301));if(a+=1,lt=Ye=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}G.H=du,l=t(n,i)}while(Ii);return l}function Pm(){var e=G.H,t=e.useState()[0];return t=typeof t.then=="function"?Ma(t):t,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(Me.flags|=1024),t}function As(){var e=zl!==0;return zl=0,e}function Ts(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Cs(e){if(Ml){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ml=!1}fn=0,lt=Ye=Me=null,Ii=!1,Ca=zl=0,Fi=null}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Me.memoizedState=lt=e:lt=lt.next=e,lt}function it(){if(Ye===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=lt===null?Me.memoizedState:lt.next;if(t!==null)lt=t,Ye=e;else{if(e===null)throw Me.alternate===null?Error(d(467)):Error(d(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},lt===null?Me.memoizedState=lt=e:lt=lt.next=e}return lt}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ma(e){var t=Ca;return Ca+=1,Fi===null&&(Fi=[]),e=vc(Fi,e,t),t=Me,(lt===null?t.memoizedState:lt.next)===null&&(t=t.alternate,G.H=t===null||t.memoizedState===null?ou:Is),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ma(e);if(e.$$typeof===R)return pt(e)}throw Error(d(438,String(e)))}function Ms(e){var t=null,n=Me.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Me.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Bl(),Me.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=he;return t.index++,n}function mn(e,t){return typeof t=="function"?t(e):t}function Dl(e){var t=it();return zs(t,Ye,e)}function zs(e,t,n){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=n;var a=e.baseQueue,l=i.pending;if(l!==null){if(a!==null){var o=a.next;a.next=l.next,l.next=o}t.baseQueue=a=l,i.pending=null}if(l=e.baseState,a===null)e.memoizedState=l;else{t=a.next;var g=o=null,O=null,V=t,ne=!1;do{var de=V.lane&-536870913;if(de!==V.lane?(Oe&de)===de:(fn&de)===de){var P=V.revertLane;if(P===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),de===Li&&(ne=!0);else if((fn&P)===P){V=V.next,P===Li&&(ne=!0);continue}else de={lane:0,revertLane:V.revertLane,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},O===null?(g=O=de,o=l):O=O.next=de,Me.lanes|=P,jn|=P;de=V.action,ui&&n(l,de),l=V.hasEagerState?V.eagerState:n(l,de)}else P={lane:de,revertLane:V.revertLane,gesture:V.gesture,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},O===null?(g=O=P,o=l):O=O.next=P,Me.lanes|=de,jn|=de;V=V.next}while(V!==null&&V!==t);if(O===null?o=l:O.next=g,!zt(l,e.memoizedState)&&(rt=!0,ne&&(n=Ri,n!==null)))throw n;e.memoizedState=l,e.baseState=o,e.baseQueue=O,i.lastRenderedState=l}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Bs(e){var t=it(),n=t.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do l=e(l,o.action),o=o.next;while(o!==a);zt(l,t.memoizedState)||(rt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,i]}function Cc(e,t,n){var i=Me,a=it(),l=Re;if(l){if(n===void 0)throw Error(d(407));n=n()}else n=t();var o=!zt((Ye||a).memoizedState,n);if(o&&(a.memoizedState=n,rt=!0),a=a.queue,Os(Bc.bind(null,i,a,e),[e]),a.getSnapshot!==t||o||lt!==null&&lt.memoizedState.tag&1){if(i.flags|=2048,qi(9,{destroy:void 0},zc.bind(null,i,a,n,t),null),Ke===null)throw Error(d(349));l||(fn&127)!==0||Mc(i,t,n)}return n}function Mc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t=Bl(),Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zc(e,t,n,i){t.value=n,t.getSnapshot=i,Nc(t)&&Dc(e)}function Bc(e,t,n){return n(function(){Nc(t)&&Dc(e)})}function Nc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Dc(e){var t=ni(e,2);t!==null&&Mt(t,e,2)}function Ns(e){var t=St();if(typeof e=="function"){var n=e;if(e=n(),ui){jt(!0);try{n()}finally{jt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t}function Oc(e,t,n,i){return e.baseState=n,zs(e,Ye,typeof i=="function"?i:mn)}function Qm(e,t,n,i,a){if(Rl(e))throw Error(d(485));if(e=t.action,e!==null){var l={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};G.T!==null?n(!0):l.isTransition=!1,i(l),n=t.pending,n===null?(l.next=t.pending=l,Lc(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Lc(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var l=G.T,o={};G.T=o;try{var g=n(a,i),O=G.S;O!==null&&O(o,g),Rc(e,t,g)}catch(V){Ds(e,t,V)}finally{l!==null&&o.types!==null&&(l.types=o.types),G.T=l}}else try{l=n(a,i),Rc(e,t,l)}catch(V){Ds(e,t,V)}}function Rc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Hc(e,t,i)},function(i){return Ds(e,t,i)}):Hc(e,t,n)}function Hc(e,t,n){t.status="fulfilled",t.value=n,jc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Lc(e,n)))}function Ds(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,jc(t),t=t.next;while(t!==i)}e.action=null}function jc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Uc(e,t){return t}function Ic(e,t){if(Re){var n=Ke.formState;if(n!==null){e:{var i=Me;if(Re){if(Qe){t:{for(var a=Qe,l=Xt;a.nodeType!==8;){if(!l){a=null;break t}if(a=Kt(a.nextSibling),a===null){a=null;break t}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){Qe=Kt(a.nextSibling),i=a.data==="F!";break e}}Mn(i)}i=!1}i&&(t=n[0])}}return n=St(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Uc,lastRenderedState:t},n.queue=i,n=lu.bind(null,Me,i),i.dispatch=n,i=Ns(!1),l=Us.bind(null,Me,!1,i.queue),i=St(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=Qm.bind(null,Me,a,l,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function Fc(e){var t=it();return qc(t,Ye,e)}function qc(e,t,n){if(t=zs(e,t,Uc)[0],e=Dl(mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ma(t)}catch(o){throw o===Hi?wl:o}else i=t;t=it();var a=t.queue,l=a.dispatch;return n!==t.memoizedState&&(Me.flags|=2048,qi(9,{destroy:void 0},Jm.bind(null,a,n),null)),[i,l,e]}function Jm(e,t){e.action=t}function Gc(e){var t=it(),n=Ye;if(n!==null)return qc(t,n,e);it(),t=t.memoizedState,n=it();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function qi(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Me.updateQueue,t===null&&(t=Bl(),Me.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Yc(){return it().memoizedState}function Ol(e,t,n,i){var a=St();Me.flags|=e,a.memoizedState=qi(1|t,{destroy:void 0},n,i===void 0?null:i)}function Ll(e,t,n,i){var a=it();i=i===void 0?null:i;var l=a.memoizedState.inst;Ye!==null&&i!==null&&_s(i,Ye.memoizedState.deps)?a.memoizedState=qi(t,l,n,i):(Me.flags|=e,a.memoizedState=qi(1|t,l,n,i))}function Zc(e,t){Ol(8390656,8,e,t)}function Os(e,t){Ll(2048,8,e,t)}function $m(e){Me.flags|=4;var t=Me.updateQueue;if(t===null)t=Bl(),Me.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Xc(e){var t=it().memoizedState;return $m({ref:t,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function Vc(e,t){return Ll(4,2,e,t)}function Kc(e,t){return Ll(4,4,e,t)}function Pc(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qc(e,t,n){n=n!=null?n.concat([e]):null,Ll(4,4,Pc.bind(null,t,e),n)}function Ls(){}function Jc(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&_s(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function $c(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&_s(t,i[1]))return i[0];if(i=e(),ui){jt(!0);try{e()}finally{jt(!1)}}return n.memoizedState=[i,t],i}function Rs(e,t,n){return n===void 0||(fn&1073741824)!==0&&(Oe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Wu(),Me.lanes|=e,jn|=e,n)}function Wc(e,t,n,i){return zt(n,t)?n:Ui.current!==null?(e=Rs(e,n,i),zt(e,t)||(rt=!0),e):(fn&42)===0||(fn&1073741824)!==0&&(Oe&261930)===0?(rt=!0,e.memoizedState=n):(e=Wu(),Me.lanes|=e,jn|=e,t)}function eu(e,t,n,i,a){var l=Y.p;Y.p=l!==0&&8>l?l:8;var o=G.T,g={};G.T=g,Us(e,!1,t,n);try{var O=a(),V=G.S;if(V!==null&&V(g,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ne=Vm(O,i);za(e,t,ne,Rt(e))}else za(e,t,i,Rt(e))}catch(de){za(e,t,{then:function(){},status:"rejected",reason:de},Rt())}finally{Y.p=l,o!==null&&g.types!==null&&(o.types=g.types),G.T=o}}function Wm(){}function Hs(e,t,n,i){if(e.tag!==5)throw Error(d(476));var a=tu(e).queue;eu(e,a,t,fe,n===null?Wm:function(){return nu(e),n(i)})}function tu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nu(e){var t=tu(e);t.next===null&&(t=e.alternate.memoizedState),za(e,t.next.queue,{},Rt())}function js(){return pt(Va)}function iu(){return it().memoizedState}function au(){return it().memoizedState}function ep(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Rt();e=Nn(n);var i=Dn(t,e,n);i!==null&&(Mt(i,t,n),Ea(i,t,n)),t={cache:fs()},e.payload=t;return}t=t.return}}function tp(e,t,n){var i=Rt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rl(e)?ru(t,n):(n=ns(e,t,n,i),n!==null&&(Mt(n,e,i),su(n,t,i)))}function lu(e,t,n){var i=Rt();za(e,t,n,i)}function za(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rl(e))ru(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,g=l(o,n);if(a.hasEagerState=!0,a.eagerState=g,zt(g,o))return gl(e,t,a,0),Ke===null&&pl(),!1}catch{}if(n=ns(e,t,a,i),n!==null)return Mt(n,e,i),su(n,t,i),!0}return!1}function Us(e,t,n,i){if(i={lane:2,revertLane:yo(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Rl(e)){if(t)throw Error(d(479))}else t=ns(e,n,i,2),t!==null&&Mt(t,e,2)}function Rl(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function ru(e,t){Ii=Ml=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function su(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,hd(e,n)}}var Ba={readContext:pt,use:Nl,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};Ba.useEffectEvent=et;var ou={readContext:pt,use:Nl,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:Zc,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ol(4194308,4,Pc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ol(4194308,4,e,t)},useInsertionEffect:function(e,t){Ol(4,2,e,t)},useMemo:function(e,t){var n=St();t=t===void 0?null:t;var i=e();if(ui){jt(!0);try{e()}finally{jt(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=St();if(n!==void 0){var a=n(t);if(ui){jt(!0);try{n(t)}finally{jt(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=tp.bind(null,Me,e),[i.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:function(e){e=Ns(e);var t=e.queue,n=lu.bind(null,Me,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ls,useDeferredValue:function(e,t){var n=St();return Rs(n,e,t)},useTransition:function(){var e=Ns(!1);return e=eu.bind(null,Me,e.queue,!0,!1),St().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Me,a=St();if(Re){if(n===void 0)throw Error(d(407));n=n()}else{if(n=t(),Ke===null)throw Error(d(349));(Oe&127)!==0||Mc(i,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,Zc(Bc.bind(null,i,l,e),[e]),i.flags|=2048,qi(9,{destroy:void 0},zc.bind(null,i,l,n,t),null),n},useId:function(){var e=St(),t=Ke.identifierPrefix;if(Re){var n=tn,i=en;n=(i&~(1<<32-We(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=zl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Km++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:js,useFormState:Ic,useActionState:Ic,useOptimistic:function(e){var t=St();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Us.bind(null,Me,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ms,useCacheRefresh:function(){return St().memoizedState=ep.bind(null,Me)},useEffectEvent:function(e){var t=St(),n={impl:e};return t.memoizedState=n,function(){if((Ue&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},Is={readContext:pt,use:Nl,useCallback:Jc,useContext:pt,useEffect:Os,useImperativeHandle:Qc,useInsertionEffect:Vc,useLayoutEffect:Kc,useMemo:$c,useReducer:Dl,useRef:Yc,useState:function(){return Dl(mn)},useDebugValue:Ls,useDeferredValue:function(e,t){var n=it();return Wc(n,Ye.memoizedState,e,t)},useTransition:function(){var e=Dl(mn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:Ma(e),t]},useSyncExternalStore:Cc,useId:iu,useHostTransitionStatus:js,useFormState:Fc,useActionState:Fc,useOptimistic:function(e,t){var n=it();return Oc(n,Ye,e,t)},useMemoCache:Ms,useCacheRefresh:au};Is.useEffectEvent=Xc;var du={readContext:pt,use:Nl,useCallback:Jc,useContext:pt,useEffect:Os,useImperativeHandle:Qc,useInsertionEffect:Vc,useLayoutEffect:Kc,useMemo:$c,useReducer:Bs,useRef:Yc,useState:function(){return Bs(mn)},useDebugValue:Ls,useDeferredValue:function(e,t){var n=it();return Ye===null?Rs(n,e,t):Wc(n,Ye.memoizedState,e,t)},useTransition:function(){var e=Bs(mn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:Ma(e),t]},useSyncExternalStore:Cc,useId:iu,useHostTransitionStatus:js,useFormState:Gc,useActionState:Gc,useOptimistic:function(e,t){var n=it();return Ye!==null?Oc(n,Ye,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ms,useCacheRefresh:au};du.useEffectEvent=Xc;function Fs(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Rt(),a=Nn(i);a.payload=t,n!=null&&(a.callback=n),t=Dn(e,a,i),t!==null&&(Mt(t,e,i),Ea(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Rt(),a=Nn(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Dn(e,a,i),t!==null&&(Mt(t,e,i),Ea(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rt(),i=Nn(n);i.tag=2,t!=null&&(i.callback=t),t=Dn(e,i,n),t!==null&&(Mt(t,e,n),Ea(t,e,n))}};function cu(e,t,n,i,a,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,o):t.prototype&&t.prototype.isPureReactComponent?!va(n,i)||!va(a,l):!0}function uu(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function hi(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=T({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function hu(e){ml(e)}function fu(e){console.error(e)}function mu(e){ml(e)}function Hl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function pu(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Gs(e,t,n){return n=Nn(n),n.tag=3,n.payload={element:null},n.callback=function(){Hl(e,t)},n}function gu(e){return e=Nn(e),e.tag=3,e}function vu(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var l=i.value;e.payload=function(){return a(l)},e.callback=function(){pu(t,n,i)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){pu(t,n,i),typeof a!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function np(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Oi(t,n,a,!0),n=Nt.current,n!==null){switch(n.tag){case 31:case 13:return Vt===null?Pl():n.alternate===null&&tt===0&&(tt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===_l?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),po(e,i,a)),!1;case 22:return n.flags|=65536,i===_l?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),po(e,i,a)),!1}throw Error(d(435,n.tag))}return po(e,i,a),Pl(),!1}if(Re)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==os&&(e=Error(d(422),{cause:i}),xa(Gt(e,n)))):(i!==os&&(t=Error(d(423),{cause:i}),xa(Gt(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Gt(i,n),a=Gs(e.stateNode,i,a),bs(e,a),tt!==4&&(tt=2)),!1;var l=Error(d(520),{cause:i});if(l=Gt(l,n),Ua===null?Ua=[l]:Ua.push(l),tt!==4&&(tt=2),t===null)return!0;i=Gt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Gs(n.stateNode,i,e),bs(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Un===null||!Un.has(l))))return n.flags|=65536,a&=-a,n.lanes|=a,a=gu(a),vu(a,e,n,i),bs(n,a),!1}n=n.return}while(n!==null);return!1}var Ys=Error(d(461)),rt=!1;function gt(e,t,n,i){t.child=e===null?Sc(t,null,n,i):ci(t,e.child,n,i)}function yu(e,t,n,i,a){n=n.render;var l=t.ref;if("ref"in i){var o={};for(var g in i)g!=="ref"&&(o[g]=i[g])}else o=i;return ri(t),i=Es(e,t,n,o,l,a),g=As(),e!==null&&!rt?(Ts(e,t,a),pn(e,t,a)):(Re&&g&&rs(t),t.flags|=1,gt(e,t,i,a),t.child)}function bu(e,t,n,i,a){if(e===null){var l=n.type;return typeof l=="function"&&!is(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,xu(e,t,l,i,a)):(e=yl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!$s(e,a)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,i)&&e.ref===t.ref)return pn(e,t,a)}return t.flags|=1,e=dn(l,i),e.ref=t.ref,e.return=t,t.child=e}function xu(e,t,n,i,a){if(e!==null){var l=e.memoizedProps;if(va(l,i)&&e.ref===t.ref)if(rt=!1,t.pendingProps=i=l,$s(e,a))(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,pn(e,t,a)}return Zs(e,t,n,i,a)}function Su(e,t,n,i){var a=i.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~l}else i=0,t.child=null;return ku(e,t,l,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kl(t,l!==null?l.cachePool:null),l!==null?_c(t,l):Ss(),Ec(t);else return i=t.lanes=536870912,ku(e,t,l!==null?l.baseLanes|n:n,n,i)}else l!==null?(kl(t,l.cachePool),_c(t,l),Ln(),t.memoizedState=null):(e!==null&&kl(t,null),Ss(),Ln());return gt(e,t,a,n),t.child}function Na(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ku(e,t,n,i,a){var l=ps();return l=l===null?null:{parent:at._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&kl(t,null),Ss(),Ec(t),e!==null&&Oi(e,t,i,!0),t.childLanes=a,null}function jl(e,t){return t=Il({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wu(e,t,n){return ci(t,e.child,null,n),e=jl(t,t.pendingProps),e.flags|=2,Dt(t),t.memoizedState=null,e}function ip(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Re){if(i.mode==="hidden")return e=jl(t,i),t.lanes=536870912,Na(null,e);if(ws(t),(e=Qe)?(e=Lh(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:en,overflow:tn}:null,retryLane:536870912,hydrationErrors:null},n=rc(e),n.return=t,t.child=n,mt=t,Qe=null)):e=null,e===null)throw Mn(t);return t.lanes=536870912,null}return jl(t,i)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(ws(t),a)if(t.flags&256)t.flags&=-257,t=wu(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(rt||Oi(e,t,n,!1),a=(n&e.childLanes)!==0,rt||a){if(i=Ke,i!==null&&(o=fd(i,n),o!==0&&o!==l.retryLane))throw l.retryLane=o,ni(e,o),Mt(i,e,o),Ys;Pl(),t=wu(e,t,n)}else e=l.treeContext,Qe=Kt(o.nextSibling),mt=t,Re=!0,Cn=null,Xt=!1,e!==null&&dc(t,e),t=jl(t,i),t.flags|=4096;return t}return e=dn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ul(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Zs(e,t,n,i,a){return ri(t),n=Es(e,t,n,i,void 0,a),i=As(),e!==null&&!rt?(Ts(e,t,a),pn(e,t,a)):(Re&&i&&rs(t),t.flags|=1,gt(e,t,n,a),t.child)}function _u(e,t,n,i,a,l){return ri(t),t.updateQueue=null,n=Tc(t,i,n,a),Ac(e),i=As(),e!==null&&!rt?(Ts(e,t,l),pn(e,t,l)):(Re&&i&&rs(t),t.flags|=1,gt(e,t,n,l),t.child)}function Eu(e,t,n,i,a){if(ri(t),t.stateNode===null){var l=zi,o=n.contextType;typeof o=="object"&&o!==null&&(l=pt(o)),l=new n(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=qs,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},vs(t),o=n.contextType,l.context=typeof o=="object"&&o!==null?pt(o):zi,l.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Fs(t,n,o,i),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&qs.enqueueReplaceState(l,l.state,null),Ta(t,i,l,a),Aa(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var g=t.memoizedProps,O=hi(n,g);l.props=O;var V=l.context,ne=n.contextType;o=zi,typeof ne=="object"&&ne!==null&&(o=pt(ne));var de=n.getDerivedStateFromProps;ne=typeof de=="function"||typeof l.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,ne||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(g||V!==o)&&uu(t,l,i,o),Bn=!1;var P=t.memoizedState;l.state=P,Ta(t,i,l,a),Aa(),V=t.memoizedState,g||P!==V||Bn?(typeof de=="function"&&(Fs(t,n,de,i),V=t.memoizedState),(O=Bn||cu(t,n,O,i,P,V,o))?(ne||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=V),l.props=i,l.state=V,l.context=o,i=O):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,ys(e,t),o=t.memoizedProps,ne=hi(n,o),l.props=ne,de=t.pendingProps,P=l.context,V=n.contextType,O=zi,typeof V=="object"&&V!==null&&(O=pt(V)),g=n.getDerivedStateFromProps,(V=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==de||P!==O)&&uu(t,l,i,O),Bn=!1,P=t.memoizedState,l.state=P,Ta(t,i,l,a),Aa();var Q=t.memoizedState;o!==de||P!==Q||Bn||e!==null&&e.dependencies!==null&&xl(e.dependencies)?(typeof g=="function"&&(Fs(t,n,g,i),Q=t.memoizedState),(ne=Bn||cu(t,n,ne,i,P,Q,O)||e!==null&&e.dependencies!==null&&xl(e.dependencies))?(V||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,Q,O),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,Q,O)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Q),l.props=i,l.state=Q,l.context=O,i=ne):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,Ul(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=ci(t,e.child,null,a),t.child=ci(t,null,n,a)):gt(e,t,n,a),t.memoizedState=l.state,e=t.child):e=pn(e,t,a),e}function Au(e,t,n,i){return ai(),t.flags|=256,gt(e,t,n,i),t.child}var Xs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vs(e){return{baseLanes:e,cachePool:pc()}}function Ks(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Lt),e}function Tu(e,t,n){var i=t.pendingProps,a=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(nt.current&2)!==0),o&&(a=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(a?On(t):Ln(),(e=Qe)?(e=Lh(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:en,overflow:tn}:null,retryLane:536870912,hydrationErrors:null},n=rc(e),n.return=t,t.child=n,mt=t,Qe=null)):e=null,e===null)throw Mn(t);return Bo(e)?t.lanes=32:t.lanes=536870912,null}var g=i.children;return i=i.fallback,a?(Ln(),a=t.mode,g=Il({mode:"hidden",children:g},a),i=ii(i,a,n,null),g.return=t,i.return=t,g.sibling=i,t.child=g,i=t.child,i.memoizedState=Vs(n),i.childLanes=Ks(e,o,n),t.memoizedState=Xs,Na(null,i)):(On(t),Ps(t,g))}var O=e.memoizedState;if(O!==null&&(g=O.dehydrated,g!==null)){if(l)t.flags&256?(On(t),t.flags&=-257,t=Qs(e,t,n)):t.memoizedState!==null?(Ln(),t.child=e.child,t.flags|=128,t=null):(Ln(),g=i.fallback,a=t.mode,i=Il({mode:"visible",children:i.children},a),g=ii(g,a,n,null),g.flags|=2,i.return=t,g.return=t,i.sibling=g,t.child=i,ci(t,e.child,null,n),i=t.child,i.memoizedState=Vs(n),i.childLanes=Ks(e,o,n),t.memoizedState=Xs,t=Na(null,i));else if(On(t),Bo(g)){if(o=g.nextSibling&&g.nextSibling.dataset,o)var V=o.dgst;o=V,i=Error(d(419)),i.stack="",i.digest=o,xa({value:i,source:null,stack:null}),t=Qs(e,t,n)}else if(rt||Oi(e,t,n,!1),o=(n&e.childLanes)!==0,rt||o){if(o=Ke,o!==null&&(i=fd(o,n),i!==0&&i!==O.retryLane))throw O.retryLane=i,ni(e,i),Mt(o,e,i),Ys;zo(g)||Pl(),t=Qs(e,t,n)}else zo(g)?(t.flags|=192,t.child=e.child,t=null):(e=O.treeContext,Qe=Kt(g.nextSibling),mt=t,Re=!0,Cn=null,Xt=!1,e!==null&&dc(t,e),t=Ps(t,i.children),t.flags|=4096);return t}return a?(Ln(),g=i.fallback,a=t.mode,O=e.child,V=O.sibling,i=dn(O,{mode:"hidden",children:i.children}),i.subtreeFlags=O.subtreeFlags&65011712,V!==null?g=dn(V,g):(g=ii(g,a,n,null),g.flags|=2),g.return=t,i.return=t,i.sibling=g,t.child=i,Na(null,i),i=t.child,g=e.child.memoizedState,g===null?g=Vs(n):(a=g.cachePool,a!==null?(O=at._currentValue,a=a.parent!==O?{parent:O,pool:O}:a):a=pc(),g={baseLanes:g.baseLanes|n,cachePool:a}),i.memoizedState=g,i.childLanes=Ks(e,o,n),t.memoizedState=Xs,Na(e.child,i)):(On(t),n=e.child,e=n.sibling,n=dn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Ps(e,t){return t=Il({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Il(e,t){return e=Bt(22,e,null,t),e.lanes=0,e}function Qs(e,t,n){return ci(t,e.child,null,n),e=Ps(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cu(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),us(e.return,t,n)}function Js(e,t,n,i,a,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=a,o.treeForkCount=l)}function Mu(e,t,n){var i=t.pendingProps,a=i.revealOrder,l=i.tail;i=i.children;var o=nt.current,g=(o&2)!==0;if(g?(o=o&1|2,t.flags|=128):o&=1,te(nt,o),gt(e,t,i,n),i=Re?ba:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,n,t);else if(e.tag===19)Cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Cl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Js(t,!1,a,n,l,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Cl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Js(t,!0,n,null,l,i);break;case"together":Js(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Oi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,n=dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $s(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&xl(e)))}function ap(e,t,n){switch(t.tag){case 3:Ee(t,t.stateNode.containerInfo),zn(t,at,e.memoizedState.cache),ai();break;case 27:case 5:Pe(t);break;case 4:Ee(t,t.stateNode.containerInfo);break;case 10:zn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ws(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(On(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Tu(e,t,n):(On(t),e=pn(e,t,n),e!==null?e.sibling:null);On(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Oi(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return Mu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),te(nt,nt.current),i)break;return null;case 22:return t.lanes=0,Su(e,t,n,t.pendingProps);case 24:zn(t,at,e.memoizedState.cache)}return pn(e,t,n)}function zu(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rt=!0;else{if(!$s(e,n)&&(t.flags&128)===0)return rt=!1,ap(e,t,n);rt=(e.flags&131072)!==0}else rt=!1,Re&&(t.flags&1048576)!==0&&oc(t,ba,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=oi(t.elementType),t.type=e,typeof e=="function")is(e)?(i=hi(e,i),t.tag=1,t=Eu(null,t,e,i,n)):(t.tag=0,t=Zs(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===q){t.tag=11,t=yu(null,t,e,i,n);break e}else if(a===Z){t.tag=14,t=bu(null,t,e,i,n);break e}}throw t=m(e)||e,Error(d(306,t,""))}}return t;case 0:return Zs(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=hi(i,t.pendingProps),Eu(e,t,i,a,n);case 3:e:{if(Ee(t,t.stateNode.containerInfo),e===null)throw Error(d(387));i=t.pendingProps;var l=t.memoizedState;a=l.element,ys(e,t),Ta(t,i,null,n);var o=t.memoizedState;if(i=o.cache,zn(t,at,i),i!==l.cache&&hs(t,[at],n,!0),Aa(),i=o.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Au(e,t,i,n);break e}else if(i!==a){a=Gt(Error(d(424)),t),xa(a),t=Au(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=Kt(e.firstChild),mt=t,Re=!0,Cn=null,Xt=!0,n=Sc(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ai(),i===a){t=pn(e,t,n);break e}gt(e,t,i,n)}t=t.child}return t;case 26:return Ul(e,t),e===null?(n=Fh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Re||(n=t.type,e=t.pendingProps,i=nr(xe.current).createElement(n),i[ft]=t,i[wt]=e,vt(i,n,e),ut(i),t.stateNode=i):t.memoizedState=Fh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pe(t),e===null&&Re&&(i=t.stateNode=jh(t.type,t.pendingProps,xe.current),mt=t,Xt=!0,a=Qe,Gn(t.type)?(No=a,Qe=Kt(i.firstChild)):Qe=a),gt(e,t,t.pendingProps.children,n),Ul(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((a=i=Qe)&&(i=Op(i,t.type,t.pendingProps,Xt),i!==null?(t.stateNode=i,mt=t,Qe=Kt(i.firstChild),Xt=!1,a=!0):a=!1),a||Mn(t)),Pe(t),a=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,To(a,l)?i=null:o!==null&&To(a,o)&&(t.flags|=32),t.memoizedState!==null&&(a=Es(e,t,Pm,null,null,n),Va._currentValue=a),Ul(e,t),gt(e,t,i,n),t.child;case 6:return e===null&&Re&&((e=n=Qe)&&(n=Lp(n,t.pendingProps,Xt),n!==null?(t.stateNode=n,mt=t,Qe=null,e=!0):e=!1),e||Mn(t)),null;case 13:return Tu(e,t,n);case 4:return Ee(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ci(t,null,i,n):gt(e,t,i,n),t.child;case 11:return yu(e,t,t.type,t.pendingProps,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,zn(t,t.type,i.value),gt(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,ri(t),a=pt(a),i=i(a),t.flags|=1,gt(e,t,i,n),t.child;case 14:return bu(e,t,t.type,t.pendingProps,n);case 15:return xu(e,t,t.type,t.pendingProps,n);case 19:return Mu(e,t,n);case 31:return ip(e,t,n);case 22:return Su(e,t,n,t.pendingProps);case 24:return ri(t),i=pt(at),e===null?(a=ps(),a===null&&(a=Ke,l=fs(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=n),a=l),t.memoizedState={parent:i,cache:a},vs(t),zn(t,at,a)):((e.lanes&n)!==0&&(ys(e,t),Ta(t,null,null,n),Aa()),a=e.memoizedState,l=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),zn(t,at,i)):(i=l.cache,zn(t,at,i),i!==a.cache&&hs(t,[at],n,!0))),gt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function gn(e){e.flags|=4}function Ws(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(ih())e.flags|=8192;else throw di=_l,gs}else e.flags&=-16777217}function Bu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Xh(t))if(ih())e.flags|=8192;else throw di=_l,gs}function Fl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?cd():536870912,e.lanes|=t,Xi|=t)}function Da(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function lp(e,t,n){var i=t.pendingProps;switch(ss(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(t),null;case 1:return Je(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),hn(at),_e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Di(t)?gn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ds())),Je(t),null;case 26:var a=t.type,l=t.memoizedState;return e===null?(gn(t),l!==null?(Je(t),Bu(t,l)):(Je(t),Ws(t,a,null,i,n))):l?l!==e.memoizedState?(gn(t),Je(t),Bu(t,l)):(Je(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&gn(t),Je(t),Ws(t,a,e,i,n)),null;case 27:if(Ge(t),n=xe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&gn(t);else{if(!i){if(t.stateNode===null)throw Error(d(166));return Je(t),null}e=W.current,Di(t)?cc(t):(e=jh(a,i,n),t.stateNode=e,gn(t))}return Je(t),null;case 5:if(Ge(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&gn(t);else{if(!i){if(t.stateNode===null)throw Error(d(166));return Je(t),null}if(l=W.current,Di(t))cc(t);else{var o=nr(xe.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?o.createElement(a,{is:i.is}):o.createElement(a)}}l[ft]=t,l[wt]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(vt(l,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&gn(t)}}return Je(t),Ws(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&gn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(d(166));if(e=xe.current,Di(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=mt,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Th(e.nodeValue,n)),e||Mn(t,!0)}else e=nr(e).createTextNode(i),e[ft]=t,t.stateNode=e}return Je(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Di(t),n!==null){if(e===null){if(!i)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[ft]=t}else ai(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),e=!1}else n=ds(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Dt(t),t):(Dt(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Je(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Di(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(d(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(317));a[ft]=t}else ai(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Je(t),a=!1}else a=ds(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Dt(t),t):(Dt(t),null)}return Dt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fl(t,t.updateQueue),Je(t),null);case 4:return _e(),e===null&&ko(t.stateNode.containerInfo),Je(t),null;case 10:return hn(t.type),Je(t),null;case 19:if(z(nt),i=t.memoizedState,i===null)return Je(t),null;if(a=(t.flags&128)!==0,l=i.rendering,l===null)if(a)Da(i,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Cl(e),l!==null){for(t.flags|=128,Da(i,!1),e=l.updateQueue,t.updateQueue=e,Fl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)lc(n,e),n=n.sibling;return te(nt,nt.current&1|2),Re&&cn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ge()>Xl&&(t.flags|=128,a=!0,Da(i,!1),t.lanes=4194304)}else{if(!a)if(e=Cl(l),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fl(t,e),Da(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Re)return Je(t),null}else 2*ge()-i.renderingStartTime>Xl&&n!==536870912&&(t.flags|=128,a=!0,Da(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(e=i.last,e!==null?e.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ge(),e.sibling=null,n=nt.current,te(nt,a?n&1|2:n&1),Re&&cn(t,i.treeForkCount),e):(Je(t),null);case 22:case 23:return Dt(t),ks(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Je(t),t.subtreeFlags&6&&(t.flags|=8192)):Je(t),n=t.updateQueue,n!==null&&Fl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&z(si),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),hn(at),Je(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function rp(e,t){switch(ss(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(at),_e(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ge(t),null;case 31:if(t.memoizedState!==null){if(Dt(t),t.alternate===null)throw Error(d(340));ai()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));ai()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(nt),null;case 4:return _e(),null;case 10:return hn(t.type),null;case 22:case 23:return Dt(t),ks(),e!==null&&z(si),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return hn(at),null;case 25:return null;default:return null}}function Nu(e,t){switch(ss(t),t.tag){case 3:hn(at),_e();break;case 26:case 27:case 5:Ge(t);break;case 4:_e();break;case 31:t.memoizedState!==null&&Dt(t);break;case 13:Dt(t);break;case 19:z(nt);break;case 10:hn(t.type);break;case 22:case 23:Dt(t),ks(),e!==null&&z(si);break;case 24:hn(at)}}function Oa(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var l=n.create,o=n.inst;i=l(),o.destroy=i}n=n.next}while(n!==a)}}catch(g){qe(t,t.return,g)}}function Rn(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var l=a.next;i=l;do{if((i.tag&e)===e){var o=i.inst,g=o.destroy;if(g!==void 0){o.destroy=void 0,a=t;var O=n,V=g;try{V()}catch(ne){qe(a,O,ne)}}}i=i.next}while(i!==l)}}catch(ne){qe(t,t.return,ne)}}function Du(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{wc(t,n)}catch(i){qe(e,e.return,i)}}}function Ou(e,t,n){n.props=hi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){qe(e,t,i)}}function La(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){qe(e,t,a)}}function nn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){qe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){qe(e,t,a)}else n.current=null}function Lu(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){qe(e,e.return,a)}}function eo(e,t,n){try{var i=e.stateNode;Cp(i,e.type,n,t),i[wt]=t}catch(a){qe(e,e.return,a)}}function Ru(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gn(e.type)||e.tag===4}function to(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function no(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(i!==4&&(i===27&&Gn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(no(e,t,n),e=e.sibling;e!==null;)no(e,t,n),e=e.sibling}function ql(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Gn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function Hu(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);vt(t,i,n),t[ft]=e,t[wt]=n}catch(l){qe(e,e.return,l)}}var vn=!1,st=!1,io=!1,ju=typeof WeakSet=="function"?WeakSet:Set,ht=null;function sp(e,t){if(e=e.containerInfo,Eo=dr,e=Qd(e),Qr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,g=-1,O=-1,V=0,ne=0,de=e,P=null;t:for(;;){for(var Q;de!==n||a!==0&&de.nodeType!==3||(g=o+a),de!==l||i!==0&&de.nodeType!==3||(O=o+i),de.nodeType===3&&(o+=de.nodeValue.length),(Q=de.firstChild)!==null;)P=de,de=Q;for(;;){if(de===e)break t;if(P===n&&++V===a&&(g=o),P===l&&++ne===i&&(O=o),(Q=de.nextSibling)!==null)break;de=P,P=de.parentNode}de=Q}n=g===-1||O===-1?null:{start:g,end:O}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ao={focusedElem:e,selectionRange:n},dr=!1,ht=t;ht!==null;)if(t=ht,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ht=e;else for(;ht!==null;){switch(t=ht,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,a=l.memoizedProps,l=l.memoizedState,i=n.stateNode;try{var be=hi(n.type,a);e=i.getSnapshotBeforeUpdate(be,l),i.__reactInternalSnapshotBeforeUpdate=e}catch(Ae){qe(n,n.return,Ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Mo(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,ht=e;break}ht=t.return}}function Uu(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:bn(e,n),i&4&&Oa(5,n);break;case 1:if(bn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){qe(n,n.return,o)}else{var a=hi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){qe(n,n.return,o)}}i&64&&Du(n),i&512&&La(n,n.return);break;case 3:if(bn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{wc(e,t)}catch(o){qe(n,n.return,o)}}break;case 27:t===null&&i&4&&Hu(n);case 26:case 5:bn(e,n),t===null&&i&4&&Lu(n),i&512&&La(n,n.return);break;case 12:bn(e,n);break;case 31:bn(e,n),i&4&&qu(e,n);break;case 13:bn(e,n),i&4&&Gu(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gp.bind(null,n),Rp(e,n))));break;case 22:if(i=n.memoizedState!==null||vn,!i){t=t!==null&&t.memoizedState!==null||st,a=vn;var l=st;vn=i,(st=t)&&!l?xn(e,n,(n.subtreeFlags&8772)!==0):bn(e,n),vn=a,st=l}break;case 30:break;default:bn(e,n)}}function Iu(e){var t=e.alternate;t!==null&&(e.alternate=null,Iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Dr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Et=!1;function yn(e,t,n){for(n=n.child;n!==null;)Fu(e,t,n),n=n.sibling}function Fu(e,t,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:st||nn(n,t),yn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:st||nn(n,t);var i=$e,a=Et;Gn(n.type)&&($e=n.stateNode,Et=!1),yn(e,t,n),Ya(n.stateNode),$e=i,Et=a;break;case 5:st||nn(n,t);case 6:if(i=$e,a=Et,$e=null,yn(e,t,n),$e=i,Et=a,$e!==null)if(Et)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(n.stateNode)}catch(l){qe(n,t,l)}else try{$e.removeChild(n.stateNode)}catch(l){qe(n,t,l)}break;case 18:$e!==null&&(Et?(e=$e,Dh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ea(e)):Dh($e,n.stateNode));break;case 4:i=$e,a=Et,$e=n.stateNode.containerInfo,Et=!0,yn(e,t,n),$e=i,Et=a;break;case 0:case 11:case 14:case 15:Rn(2,n,t),st||Rn(4,n,t),yn(e,t,n);break;case 1:st||(nn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Ou(n,t,i)),yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:st=(i=st)||n.memoizedState!==null,yn(e,t,n),st=i;break;default:yn(e,t,n)}}function qu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ea(e)}catch(n){qe(t,t.return,n)}}}function Gu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ea(e)}catch(n){qe(t,t.return,n)}}function op(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ju),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ju),t;default:throw Error(d(435,e.tag))}}function Gl(e,t){var n=op(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=vp.bind(null,e,i);i.then(a,a)}})}function At(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],l=e,o=t,g=o;e:for(;g!==null;){switch(g.tag){case 27:if(Gn(g.type)){$e=g.stateNode,Et=!1;break e}break;case 5:$e=g.stateNode,Et=!1;break e;case 3:case 4:$e=g.stateNode.containerInfo,Et=!0;break e}g=g.return}if($e===null)throw Error(d(160));Fu(l,o,a),$e=null,Et=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}var Jt=null;function Yu(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:At(t,e),Tt(e),i&4&&(Rn(3,e,e.return),Oa(3,e),Rn(5,e,e.return));break;case 1:At(t,e),Tt(e),i&512&&(st||n===null||nn(n,n.return)),i&64&&vn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Jt;if(At(t,e),Tt(e),i&512&&(st||n===null||nn(n,n.return)),i&4){var l=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":l=a.getElementsByTagName("title")[0],(!l||l[oa]||l[ft]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(i),a.head.insertBefore(l,a.querySelector("head > title"))),vt(l,i,n),l[ft]=e,ut(l),i=l;break e;case"link":var o=Yh("link","href",a).get(i+(n.href||""));if(o){for(var g=0;g<o.length;g++)if(l=o[g],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(g,1);break t}}l=a.createElement(i),vt(l,i,n),a.head.appendChild(l);break;case"meta":if(o=Yh("meta","content",a).get(i+(n.content||""))){for(g=0;g<o.length;g++)if(l=o[g],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){o.splice(g,1);break t}}l=a.createElement(i),vt(l,i,n),a.head.appendChild(l);break;default:throw Error(d(468,i))}l[ft]=e,ut(l),i=l}e.stateNode=i}else Zh(a,e.type,e.stateNode);else e.stateNode=Gh(a,i,e.memoizedProps);else l!==i?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,i===null?Zh(a,e.type,e.stateNode):Gh(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&eo(e,e.memoizedProps,n.memoizedProps)}break;case 27:At(t,e),Tt(e),i&512&&(st||n===null||nn(n,n.return)),n!==null&&i&4&&eo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(At(t,e),Tt(e),i&512&&(st||n===null||nn(n,n.return)),e.flags&32){a=e.stateNode;try{wi(a,"")}catch(be){qe(e,e.return,be)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,eo(e,a,n!==null?n.memoizedProps:a)),i&1024&&(io=!0);break;case 6:if(At(t,e),Tt(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(be){qe(e,e.return,be)}}break;case 3:if(lr=null,a=Jt,Jt=ir(t.containerInfo),At(t,e),Jt=a,Tt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(t.containerInfo)}catch(be){qe(e,e.return,be)}io&&(io=!1,Zu(e));break;case 4:i=Jt,Jt=ir(e.stateNode.containerInfo),At(t,e),Tt(e),Jt=i;break;case 12:At(t,e),Tt(e);break;case 31:At(t,e),Tt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gl(e,i)));break;case 13:At(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zl=ge()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gl(e,i)));break;case 22:a=e.memoizedState!==null;var O=n!==null&&n.memoizedState!==null,V=vn,ne=st;if(vn=V||a,st=ne||O,At(t,e),st=ne,vn=V,Tt(e),i&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||O||vn||st||fi(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){O=n=t;try{if(l=O.stateNode,a)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{g=O.stateNode;var de=O.memoizedProps.style,P=de!=null&&de.hasOwnProperty("display")?de.display:null;g.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(be){qe(O,O.return,be)}}}else if(t.tag===6){if(n===null){O=t;try{O.stateNode.nodeValue=a?"":O.memoizedProps}catch(be){qe(O,O.return,be)}}}else if(t.tag===18){if(n===null){O=t;try{var Q=O.stateNode;a?Oh(Q,!0):Oh(O.stateNode,!1)}catch(be){qe(O,O.return,be)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Gl(e,n))));break;case 19:At(t,e),Tt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gl(e,i)));break;case 30:break;case 21:break;default:At(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Ru(i)){n=i;break}i=i.return}if(n==null)throw Error(d(160));switch(n.tag){case 27:var a=n.stateNode,l=to(e);ql(e,l,a);break;case 5:var o=n.stateNode;n.flags&32&&(wi(o,""),n.flags&=-33);var g=to(e);ql(e,g,o);break;case 3:case 4:var O=n.stateNode.containerInfo,V=to(e);no(e,V,O);break;default:throw Error(d(161))}}catch(ne){qe(e,e.return,ne)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Uu(e,t.alternate,t),t=t.sibling}function fi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Rn(4,t,t.return),fi(t);break;case 1:nn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Ou(t,t.return,n),fi(t);break;case 27:Ya(t.stateNode);case 26:case 5:nn(t,t.return),fi(t);break;case 22:t.memoizedState===null&&fi(t);break;case 30:fi(t);break;default:fi(t)}e=e.sibling}}function xn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:xn(a,l,n),Oa(4,l);break;case 1:if(xn(a,l,n),i=l,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(V){qe(i,i.return,V)}if(i=l,a=i.updateQueue,a!==null){var g=i.stateNode;try{var O=a.shared.hiddenCallbacks;if(O!==null)for(a.shared.hiddenCallbacks=null,a=0;a<O.length;a++)kc(O[a],g)}catch(V){qe(i,i.return,V)}}n&&o&64&&Du(l),La(l,l.return);break;case 27:Hu(l);case 26:case 5:xn(a,l,n),n&&i===null&&o&4&&Lu(l),La(l,l.return);break;case 12:xn(a,l,n);break;case 31:xn(a,l,n),n&&o&4&&qu(a,l);break;case 13:xn(a,l,n),n&&o&4&&Gu(a,l);break;case 22:l.memoizedState===null&&xn(a,l,n),La(l,l.return);break;case 30:break;default:xn(a,l,n)}t=t.sibling}}function ao(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Sa(n))}function lo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sa(e))}function $t(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xu(e,t,n,i),t=t.sibling}function Xu(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:$t(e,t,n,i),a&2048&&Oa(9,t);break;case 1:$t(e,t,n,i);break;case 3:$t(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Sa(e)));break;case 12:if(a&2048){$t(e,t,n,i),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,g=l.onPostCommit;typeof g=="function"&&g(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){qe(t,t.return,O)}}else $t(e,t,n,i);break;case 31:$t(e,t,n,i);break;case 13:$t(e,t,n,i);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?$t(e,t,n,i):Ra(e,t):l._visibility&2?$t(e,t,n,i):(l._visibility|=2,Gi(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&ao(o,t);break;case 24:$t(e,t,n,i),a&2048&&lo(t.alternate,t);break;default:$t(e,t,n,i)}}function Gi(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,o=t,g=n,O=i,V=o.flags;switch(o.tag){case 0:case 11:case 15:Gi(l,o,g,O,a),Oa(8,o);break;case 23:break;case 22:var ne=o.stateNode;o.memoizedState!==null?ne._visibility&2?Gi(l,o,g,O,a):Ra(l,o):(ne._visibility|=2,Gi(l,o,g,O,a)),a&&V&2048&&ao(o.alternate,o);break;case 24:Gi(l,o,g,O,a),a&&V&2048&&lo(o.alternate,o);break;default:Gi(l,o,g,O,a)}t=t.sibling}}function Ra(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Ra(n,i),a&2048&&ao(i.alternate,i);break;case 24:Ra(n,i),a&2048&&lo(i.alternate,i);break;default:Ra(n,i)}t=t.sibling}}var Ha=8192;function Yi(e,t,n){if(e.subtreeFlags&Ha)for(e=e.child;e!==null;)Vu(e,t,n),e=e.sibling}function Vu(e,t,n){switch(e.tag){case 26:Yi(e,t,n),e.flags&Ha&&e.memoizedState!==null&&Kp(n,Jt,e.memoizedState,e.memoizedProps);break;case 5:Yi(e,t,n);break;case 3:case 4:var i=Jt;Jt=ir(e.stateNode.containerInfo),Yi(e,t,n),Jt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ha,Ha=16777216,Yi(e,t,n),Ha=i):Yi(e,t,n));break;default:Yi(e,t,n)}}function Ku(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ja(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ht=i,Qu(i,e)}Ku(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pu(e),e=e.sibling}function Pu(e){switch(e.tag){case 0:case 11:case 15:ja(e),e.flags&2048&&Rn(9,e,e.return);break;case 3:ja(e);break;case 12:ja(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yl(e)):ja(e);break;default:ja(e)}}function Yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ht=i,Qu(i,e)}Ku(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Rn(8,t,t.return),Yl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Yl(t));break;default:Yl(t)}e=e.sibling}}function Qu(e,t){for(;ht!==null;){var n=ht;switch(n.tag){case 0:case 11:case 15:Rn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Sa(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ht=i;else e:for(n=e;ht!==null;){i=ht;var a=i.sibling,l=i.return;if(Iu(i),i===n){ht=null;break e}if(a!==null){a.return=l,ht=a;break e}ht=l}}}var dp={getCacheForType:function(e){var t=pt(at),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return pt(at).controller.signal}},cp=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ke=null,Ne=null,Oe=0,Fe=0,Ot=null,Hn=!1,Zi=!1,ro=!1,Sn=0,tt=0,jn=0,mi=0,so=0,Lt=0,Xi=0,Ua=null,Ct=null,oo=!1,Zl=0,Ju=0,Xl=1/0,Vl=null,Un=null,dt=0,In=null,Vi=null,kn=0,co=0,uo=null,$u=null,Ia=0,ho=null;function Rt(){return(Ue&2)!==0&&Oe!==0?Oe&-Oe:G.T!==null?yo():md()}function Wu(){if(Lt===0)if((Oe&536870912)===0||Re){var e=Jn;Jn<<=1,(Jn&3932160)===0&&(Jn=262144),Lt=e}else Lt=536870912;return e=Nt.current,e!==null&&(e.flags|=32),Lt}function Mt(e,t,n){(e===Ke&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(Ki(e,0),Fn(e,Oe,Lt,!1)),sa(e,n),((Ue&2)===0||e!==Ke)&&(e===Ke&&((Ue&2)===0&&(mi|=n),tt===4&&Fn(e,Oe,Lt,!1)),an(e))}function eh(e,t,n){if((Ue&6)!==0)throw Error(d(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ra(e,t),a=i?fp(e,t):mo(e,t,!0),l=i;do{if(a===0){Zi&&!i&&Fn(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!up(n)){a=mo(e,t,!1),l=!1;continue}if(a===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var g=e;a=Ua;var O=g.current.memoizedState.isDehydrated;if(O&&(Ki(g,o).flags|=256),o=mo(g,o,!1),o!==2){if(ro&&!O){g.errorRecoveryDisabledLanes|=l,mi|=l,a=4;break e}l=Ct,Ct=a,l!==null&&(Ct===null?Ct=l:Ct.push.apply(Ct,l))}a=o}if(l=!1,a!==2)continue}}if(a===1){Ki(e,0),Fn(e,t,0,!0);break}e:{switch(i=e,l=a,l){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:Fn(i,t,Lt,!Hn);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(a=Zl+300-ge(),10<a)){if(Fn(i,t,Lt,!Hn),il(i,0,!0)!==0)break e;kn=t,i.timeoutHandle=Bh(th.bind(null,i,n,Ct,Vl,oo,t,Lt,mi,Xi,Hn,l,"Throttled",-0,0),a);break e}th(i,n,Ct,Vl,oo,t,Lt,mi,Xi,Hn,l,null,-0,0)}}break}while(!0);an(e)}function th(e,t,n,i,a,l,o,g,O,V,ne,de,P,Q){if(e.timeoutHandle=-1,de=t.subtreeFlags,de&8192||(de&16785408)===16785408){de={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Vu(t,l,de);var be=(l&62914560)===l?Zl-ge():(l&4194048)===l?Ju-ge():0;if(be=Pp(de,be),be!==null){kn=l,e.cancelPendingCommit=be(dh.bind(null,e,t,l,n,i,a,o,g,O,ne,de,null,P,Q)),Fn(e,l,o,!V);return}}dh(e,t,l,n,i,a,o,g,O)}function up(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],l=a.getSnapshot;a=a.value;try{if(!zt(l(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fn(e,t,n,i){t&=~so,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var l=31-We(a),o=1<<l;i[l]=-1,a&=~o}n!==0&&ud(e,n,t)}function Kl(){return(Ue&6)===0?(Fa(0),!1):!0}function fo(){if(Ne!==null){if(Fe===0)var e=Ne.return;else e=Ne,un=li=null,Cs(e),ji=null,wa=0,e=Ne;for(;e!==null;)Nu(e.alternate,e),e=e.return;Ne=null}}function Ki(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Bp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),kn=0,fo(),Ke=e,Ne=n=dn(e.current,null),Oe=t,Fe=0,Ot=null,Hn=!1,Zi=ra(e,t),ro=!1,Xi=Lt=so=mi=jn=tt=0,Ct=Ua=null,oo=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-We(i),l=1<<a;t|=e[a],i&=~l}return Sn=t,pl(),n}function nh(e,t){Me=null,G.H=Ba,t===Hi||t===wl?(t=yc(),Fe=3):t===gs?(t=yc(),Fe=4):Fe=t===Ys?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ot=t,Ne===null&&(tt=1,Hl(e,Gt(t,e.current)))}function ih(){var e=Nt.current;return e===null?!0:(Oe&4194048)===Oe?Vt===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?e===Vt:!1}function ah(){var e=G.H;return G.H=Ba,e===null?Ba:e}function lh(){var e=G.A;return G.A=dp,e}function Pl(){tt=4,Hn||(Oe&4194048)!==Oe&&Nt.current!==null||(Zi=!0),(jn&134217727)===0&&(mi&134217727)===0||Ke===null||Fn(Ke,Oe,Lt,!1)}function mo(e,t,n){var i=Ue;Ue|=2;var a=ah(),l=lh();(Ke!==e||Oe!==t)&&(Vl=null,Ki(e,t)),t=!1;var o=tt;e:do try{if(Fe!==0&&Ne!==null){var g=Ne,O=Ot;switch(Fe){case 8:fo(),o=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var V=Fe;if(Fe=0,Ot=null,Pi(e,g,O,V),n&&Zi){o=0;break e}break;default:V=Fe,Fe=0,Ot=null,Pi(e,g,O,V)}}hp(),o=tt;break}catch(ne){nh(e,ne)}while(!0);return t&&e.shellSuspendCounter++,un=li=null,Ue=i,G.H=a,G.A=l,Ne===null&&(Ke=null,Oe=0,pl()),o}function hp(){for(;Ne!==null;)rh(Ne)}function fp(e,t){var n=Ue;Ue|=2;var i=ah(),a=lh();Ke!==e||Oe!==t?(Vl=null,Xl=ge()+500,Ki(e,t)):Zi=ra(e,t);e:do try{if(Fe!==0&&Ne!==null){t=Ne;var l=Ot;t:switch(Fe){case 1:Fe=0,Ot=null,Pi(e,t,l,1);break;case 2:case 9:if(gc(l)){Fe=0,Ot=null,sh(t);break}t=function(){Fe!==2&&Fe!==9||Ke!==e||(Fe=7),an(e)},l.then(t,t);break e;case 3:Fe=7;break e;case 4:Fe=5;break e;case 7:gc(l)?(Fe=0,Ot=null,sh(t)):(Fe=0,Ot=null,Pi(e,t,l,7));break;case 5:var o=null;switch(Ne.tag){case 26:o=Ne.memoizedState;case 5:case 27:var g=Ne;if(o?Xh(o):g.stateNode.complete){Fe=0,Ot=null;var O=g.sibling;if(O!==null)Ne=O;else{var V=g.return;V!==null?(Ne=V,Ql(V)):Ne=null}break t}}Fe=0,Ot=null,Pi(e,t,l,5);break;case 6:Fe=0,Ot=null,Pi(e,t,l,6);break;case 8:fo(),tt=6;break e;default:throw Error(d(462))}}mp();break}catch(ne){nh(e,ne)}while(!0);return un=li=null,G.H=i,G.A=a,Ue=n,Ne!==null?0:(Ke=null,Oe=0,pl(),tt)}function mp(){for(;Ne!==null&&!K();)rh(Ne)}function rh(e){var t=zu(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,t===null?Ql(e):Ne=t}function sh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_u(n,t,t.pendingProps,t.type,void 0,Oe);break;case 11:t=_u(n,t,t.pendingProps,t.type.render,t.ref,Oe);break;case 5:Cs(t);default:Nu(n,t),t=Ne=lc(t,Sn),t=zu(n,t,Sn)}e.memoizedProps=e.pendingProps,t===null?Ql(e):Ne=t}function Pi(e,t,n,i){un=li=null,Cs(t),ji=null,wa=0;var a=t.return;try{if(np(e,a,t,n,Oe)){tt=1,Hl(e,Gt(n,e.current)),Ne=null;return}}catch(l){if(a!==null)throw Ne=a,l;tt=1,Hl(e,Gt(n,e.current)),Ne=null;return}t.flags&32768?(Re||i===1?e=!0:Zi||(Oe&536870912)!==0?e=!1:(Hn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Nt.current,i!==null&&i.tag===13&&(i.flags|=16384))),oh(t,e)):Ql(t)}function Ql(e){var t=e;do{if((t.flags&32768)!==0){oh(t,Hn);return}e=t.return;var n=lp(t.alternate,t,Sn);if(n!==null){Ne=n;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);tt===0&&(tt=5)}function oh(e,t){do{var n=rp(e.alternate,e);if(n!==null){n.flags&=32767,Ne=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=n}while(e!==null);tt=6,Ne=null}function dh(e,t,n,i,a,l,o,g,O){e.cancelPendingCommit=null;do Jl();while(dt!==0);if((Ue&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(l=t.lanes|t.childLanes,l|=ts,Vf(e,n,l,o,g,O),e===Ke&&(Ne=Ke=null,Oe=0),Vi=t,In=e,kn=n,co=l,uo=a,$u=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yp(Be,function(){return mh(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=G.T,G.T=null,a=Y.p,Y.p=2,o=Ue,Ue|=4;try{sp(e,t,n)}finally{Ue=o,Y.p=a,G.T=i}}dt=1,ch(),uh(),hh()}}function ch(){if(dt===1){dt=0;var e=In,t=Vi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=G.T,G.T=null;var i=Y.p;Y.p=2;var a=Ue;Ue|=4;try{Yu(t,e);var l=Ao,o=Qd(e.containerInfo),g=l.focusedElem,O=l.selectionRange;if(o!==g&&g&&g.ownerDocument&&Pd(g.ownerDocument.documentElement,g)){if(O!==null&&Qr(g)){var V=O.start,ne=O.end;if(ne===void 0&&(ne=V),"selectionStart"in g)g.selectionStart=V,g.selectionEnd=Math.min(ne,g.value.length);else{var de=g.ownerDocument||document,P=de&&de.defaultView||window;if(P.getSelection){var Q=P.getSelection(),be=g.textContent.length,Ae=Math.min(O.start,be),Xe=O.end===void 0?Ae:Math.min(O.end,be);!Q.extend&&Ae>Xe&&(o=Xe,Xe=Ae,Ae=o);var F=Kd(g,Ae),H=Kd(g,Xe);if(F&&H&&(Q.rangeCount!==1||Q.anchorNode!==F.node||Q.anchorOffset!==F.offset||Q.focusNode!==H.node||Q.focusOffset!==H.offset)){var X=de.createRange();X.setStart(F.node,F.offset),Q.removeAllRanges(),Ae>Xe?(Q.addRange(X),Q.extend(H.node,H.offset)):(X.setEnd(H.node,H.offset),Q.addRange(X))}}}}for(de=[],Q=g;Q=Q.parentNode;)Q.nodeType===1&&de.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<de.length;g++){var se=de[g];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}dr=!!Eo,Ao=Eo=null}finally{Ue=a,Y.p=i,G.T=n}}e.current=t,dt=2}}function uh(){if(dt===2){dt=0;var e=In,t=Vi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=G.T,G.T=null;var i=Y.p;Y.p=2;var a=Ue;Ue|=4;try{Uu(e,t.alternate,t)}finally{Ue=a,Y.p=i,G.T=n}}dt=3}}function hh(){if(dt===4||dt===3){dt=0,me();var e=In,t=Vi,n=kn,i=$u;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?dt=5:(dt=0,Vi=In=null,fh(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Un=null),Br(n),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=G.T,a=Y.p,Y.p=2,G.T=null;try{for(var l=e.onRecoverableError,o=0;o<i.length;o++){var g=i[o];l(g.value,{componentStack:g.stack})}}finally{G.T=t,Y.p=a}}(kn&3)!==0&&Jl(),an(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===ho?Ia++:(Ia=0,ho=e):Ia=0,Fa(0)}}function fh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Sa(t)))}function Jl(){return ch(),uh(),hh(),mh()}function mh(){if(dt!==5)return!1;var e=In,t=co;co=0;var n=Br(kn),i=G.T,a=Y.p;try{Y.p=32>n?32:n,G.T=null,n=uo,uo=null;var l=In,o=kn;if(dt=0,Vi=In=null,kn=0,(Ue&6)!==0)throw Error(d(331));var g=Ue;if(Ue|=4,Pu(l.current),Xu(l,l.current,o,n),Ue=g,Fa(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(Ve,l)}catch{}return!0}finally{Y.p=a,G.T=i,fh(e,t)}}function ph(e,t,n){t=Gt(n,t),t=Gs(e.stateNode,t,2),e=Dn(e,t,2),e!==null&&(sa(e,2),an(e))}function qe(e,t,n){if(e.tag===3)ph(e,e,n);else for(;t!==null;){if(t.tag===3){ph(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Un===null||!Un.has(i))){e=Gt(n,e),n=gu(2),i=Dn(t,n,2),i!==null&&(vu(n,i,t,e),sa(i,2),an(i));break}}t=t.return}}function po(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new cp;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(ro=!0,a.add(n),e=pp.bind(null,e,t,n),t.then(e,e))}function pp(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ke===e&&(Oe&n)===n&&(tt===4||tt===3&&(Oe&62914560)===Oe&&300>ge()-Zl?(Ue&2)===0&&Ki(e,0):so|=n,Xi===Oe&&(Xi=0)),an(e)}function gh(e,t){t===0&&(t=cd()),e=ni(e,t),e!==null&&(sa(e,t),an(e))}function gp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gh(e,n)}function vp(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(t),gh(e,n)}function yp(e,t){return ce(e,t)}var $l=null,Qi=null,go=!1,Wl=!1,vo=!1,qn=0;function an(e){e!==Qi&&e.next===null&&(Qi===null?$l=Qi=e:Qi=Qi.next=e),Wl=!0,go||(go=!0,xp())}function Fa(e,t){if(!vo&&Wl){vo=!0;do for(var n=!1,i=$l;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var l=0;else{var o=i.suspendedLanes,g=i.pingedLanes;l=(1<<31-We(42|e)+1)-1,l&=a&~(o&~g),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,xh(i,l))}else l=Oe,l=il(i,i===Ke?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||ra(i,l)||(n=!0,xh(i,l));i=i.next}while(n);vo=!1}}function bp(){vh()}function vh(){Wl=go=!1;var e=0;qn!==0&&zp()&&(e=qn);for(var t=ge(),n=null,i=$l;i!==null;){var a=i.next,l=yh(i,t);l===0?(i.next=null,n===null?$l=a:n.next=a,a===null&&(Qi=n)):(n=i,(e!==0||(l&3)!==0)&&(Wl=!0)),i=a}dt!==0&&dt!==5||Fa(e),qn!==0&&(qn=0)}function yh(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-We(l),g=1<<o,O=a[o];O===-1?((g&n)===0||(g&i)!==0)&&(a[o]=Xf(g,t)):O<=t&&(e.expiredLanes|=g),l&=~g}if(t=Ke,n=Oe,n=il(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ue(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ra(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ue(i),Br(n)){case 2:case 8:n=Ie;break;case 32:n=Be;break;case 268435456:n=_n;break;default:n=Be}return i=bh.bind(null,e),n=ce(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ue(i),e.callbackPriority=2,e.callbackNode=null,2}function bh(e,t){if(dt!==0&&dt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Jl()&&e.callbackNode!==n)return null;var i=Oe;return i=il(e,e===Ke?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(eh(e,i,t),yh(e,ge()),e.callbackNode!=null&&e.callbackNode===n?bh.bind(null,e):null)}function xh(e,t){if(Jl())return null;eh(e,t,!0)}function xp(){Np(function(){(Ue&6)!==0?ce(ke,bp):vh()})}function yo(){if(qn===0){var e=Li;e===0&&(e=gi,gi<<=1,(gi&261888)===0&&(gi=256)),qn=e}return qn}function Sh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function kh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Sp(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var l=Sh((a[wt]||null).action),o=i.submitter;o&&(t=(t=o[wt]||null)?Sh(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var g=new ul("action","action",null,i,a);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(qn!==0){var O=o?kh(a,o):new FormData(a);Hs(n,{pending:!0,data:O,method:a.method,action:l},null,O)}}else typeof l=="function"&&(g.preventDefault(),O=o?kh(a,o):new FormData(a),Hs(n,{pending:!0,data:O,method:a.method,action:l},l,O))},currentTarget:a}]})}}for(var bo=0;bo<es.length;bo++){var xo=es[bo],kp=xo.toLowerCase(),wp=xo[0].toUpperCase()+xo.slice(1);Qt(kp,"on"+wp)}Qt(Wd,"onAnimationEnd"),Qt(ec,"onAnimationIteration"),Qt(tc,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(Um,"onTransitionRun"),Qt(Im,"onTransitionStart"),Qt(Fm,"onTransitionCancel"),Qt(nc,"onTransitionEnd"),Si("onMouseEnter",["mouseout","mouseover"]),Si("onMouseLeave",["mouseout","mouseover"]),Si("onPointerEnter",["pointerout","pointerover"]),Si("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_p=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qa));function wh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var o=i.length-1;0<=o;o--){var g=i[o],O=g.instance,V=g.currentTarget;if(g=g.listener,O!==l&&a.isPropagationStopped())break e;l=g,a.currentTarget=V;try{l(a)}catch(ne){ml(ne)}a.currentTarget=null,l=O}else for(o=0;o<i.length;o++){if(g=i[o],O=g.instance,V=g.currentTarget,g=g.listener,O!==l&&a.isPropagationStopped())break e;l=g,a.currentTarget=V;try{l(a)}catch(ne){ml(ne)}a.currentTarget=null,l=O}}}}function De(e,t){var n=t[Nr];n===void 0&&(n=t[Nr]=new Set);var i=e+"__bubble";n.has(i)||(_h(t,e,2,!1),n.add(i))}function So(e,t,n){var i=0;t&&(i|=4),_h(n,e,i,t)}var er="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[er]){e[er]=!0,vd.forEach(function(n){n!=="selectionchange"&&(_p.has(n)||So(n,!1,e),So(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[er]||(t[er]=!0,So("selectionchange",!1,t))}}function _h(e,t,n,i){switch(Wh(t)){case 2:var a=$p;break;case 8:a=Wp;break;default:a=Ho}n=a.bind(null,t,n,e),a=void 0,!Fr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function wo(e,t,n,i,a){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var g=i.stateNode.containerInfo;if(g===a)break;if(o===4)for(o=i.return;o!==null;){var O=o.tag;if((O===3||O===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;g!==null;){if(o=yi(g),o===null)return;if(O=o.tag,O===5||O===6||O===26||O===27){i=l=o;continue e}g=g.parentNode}}i=i.return}Md(function(){var V=l,ne=Ur(n),de=[];e:{var P=ic.get(e);if(P!==void 0){var Q=ul,be=e;switch(e){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":Q=vm;break;case"focusin":be="focus",Q=Zr;break;case"focusout":be="blur",Q=Zr;break;case"beforeblur":case"afterblur":Q=Zr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=lm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=xm;break;case Wd:case ec:case tc:Q=om;break;case nc:Q=km;break;case"scroll":case"scrollend":Q=im;break;case"wheel":Q=_m;break;case"copy":case"cut":case"paste":Q=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Od;break;case"toggle":case"beforetoggle":Q=Am}var Ae=(t&4)!==0,Xe=!Ae&&(e==="scroll"||e==="scrollend"),F=Ae?P!==null?P+"Capture":null:P;Ae=[];for(var H=V,X;H!==null;){var se=H;if(X=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||X===null||F===null||(se=ca(H,F),se!=null&&Ae.push(Ga(H,se,X))),Xe)break;H=H.return}0<Ae.length&&(P=new Q(P,be,null,n,ne),de.push({event:P,listeners:Ae}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",P&&n!==jr&&(be=n.relatedTarget||n.fromElement)&&(yi(be)||be[vi]))break e;if((Q||P)&&(P=ne.window===ne?ne:(P=ne.ownerDocument)?P.defaultView||P.parentWindow:window,Q?(be=n.relatedTarget||n.toElement,Q=V,be=be?yi(be):null,be!==null&&(Xe=u(be),Ae=be.tag,be!==Xe||Ae!==5&&Ae!==27&&Ae!==6)&&(be=null)):(Q=null,be=V),Q!==be)){if(Ae=Nd,se="onMouseLeave",F="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Ae=Od,se="onPointerLeave",F="onPointerEnter",H="pointer"),Xe=Q==null?P:da(Q),X=be==null?P:da(be),P=new Ae(se,H+"leave",Q,n,ne),P.target=Xe,P.relatedTarget=X,se=null,yi(ne)===V&&(Ae=new Ae(F,H+"enter",be,n,ne),Ae.target=X,Ae.relatedTarget=Xe,se=Ae),Xe=se,Q&&be)t:{for(Ae=Ep,F=Q,H=be,X=0,se=F;se;se=Ae(se))X++;se=0;for(var we=H;we;we=Ae(we))se++;for(;0<X-se;)F=Ae(F),X--;for(;0<se-X;)H=Ae(H),se--;for(;X--;){if(F===H||H!==null&&F===H.alternate){Ae=F;break t}F=Ae(F),H=Ae(H)}Ae=null}else Ae=null;Q!==null&&Eh(de,P,Q,Ae,!1),be!==null&&Xe!==null&&Eh(de,Xe,be,Ae,!0)}}e:{if(P=V?da(V):window,Q=P.nodeName&&P.nodeName.toLowerCase(),Q==="select"||Q==="input"&&P.type==="file")var He=qd;else if(Id(P))if(Gd)He=Rm;else{He=Om;var Se=Dm}else Q=P.nodeName,!Q||Q.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?V&&Hr(V.elementType)&&(He=qd):He=Lm;if(He&&(He=He(e,V))){Fd(de,He,n,ne);break e}Se&&Se(e,P,V),e==="focusout"&&V&&P.type==="number"&&V.memoizedProps.value!=null&&Rr(P,"number",P.value)}switch(Se=V?da(V):window,e){case"focusin":(Id(Se)||Se.contentEditable==="true")&&(Ti=Se,Jr=V,ya=null);break;case"focusout":ya=Jr=Ti=null;break;case"mousedown":$r=!0;break;case"contextmenu":case"mouseup":case"dragend":$r=!1,Jd(de,n,ne);break;case"selectionchange":if(jm)break;case"keydown":case"keyup":Jd(de,n,ne)}var ze;if(Vr)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Ai?jd(e,n)&&(Le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Le="onCompositionStart");Le&&(Ld&&n.locale!=="ko"&&(Ai||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Ai&&(ze=zd()):(An=ne,qr="value"in An?An.value:An.textContent,Ai=!0)),Se=tr(V,Le),0<Se.length&&(Le=new Dd(Le,e,null,n,ne),de.push({event:Le,listeners:Se}),ze?Le.data=ze:(ze=Ud(n),ze!==null&&(Le.data=ze)))),(ze=Cm?Mm(e,n):zm(e,n))&&(Le=tr(V,"onBeforeInput"),0<Le.length&&(Se=new Dd("onBeforeInput","beforeinput",null,n,ne),de.push({event:Se,listeners:Le}),Se.data=ze)),Sp(de,e,V,n,ne)}wh(de,t)})}function Ga(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tr(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,l=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=ca(e,n),a!=null&&i.unshift(Ga(e,a,l)),a=ca(e,t),a!=null&&i.push(Ga(e,a,l))),e.tag===3)return i;e=e.return}return[]}function Ep(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Eh(e,t,n,i,a){for(var l=t._reactName,o=[];n!==null&&n!==i;){var g=n,O=g.alternate,V=g.stateNode;if(g=g.tag,O!==null&&O===i)break;g!==5&&g!==26&&g!==27||V===null||(O=V,a?(V=ca(n,l),V!=null&&o.unshift(Ga(n,V,O))):a||(V=ca(n,l),V!=null&&o.push(Ga(n,V,O)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ap=/\r\n?/g,Tp=/\u0000|\uFFFD/g;function Ah(e){return(typeof e=="string"?e:""+e).replace(Ap,`
`).replace(Tp,"")}function Th(e,t){return t=Ah(t),Ah(e)===t}function Ze(e,t,n,i,a,l){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||wi(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&wi(e,""+i);break;case"className":ll(e,"class",i);break;case"tabIndex":ll(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ll(e,n,i);break;case"style":Td(e,i,l);break;case"data":if(t!=="object"){ll(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=sl(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&Ze(e,t,"name",a.name,a,null),Ze(e,t,"formEncType",a.formEncType,a,null),Ze(e,t,"formMethod",a.formMethod,a,null),Ze(e,t,"formTarget",a.formTarget,a,null)):(Ze(e,t,"encType",a.encType,a,null),Ze(e,t,"method",a.method,a,null),Ze(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=sl(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=sn);break;case"onScroll":i!=null&&De("scroll",e);break;case"onScrollEnd":i!=null&&De("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=sl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":De("beforetoggle",e),De("toggle",e),al(e,"popover",i);break;case"xlinkActuate":rn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":rn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":rn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":rn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":rn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":rn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":rn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":rn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":rn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":al(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=tm.get(n)||n,al(e,n,i))}}function _o(e,t,n,i,a,l){switch(n){case"style":Td(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"children":typeof i=="string"?wi(e,i):(typeof i=="number"||typeof i=="bigint")&&wi(e,""+i);break;case"onScroll":i!=null&&De("scroll",e);break;case"onScrollEnd":i!=null&&De("scrollend",e);break;case"onClick":i!=null&&(e.onclick=sn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),l=e[wt]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,a),typeof i=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):al(e,n,i)}}}function vt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":De("error",e),De("load",e);var i=!1,a=!1,l;for(l in n)if(n.hasOwnProperty(l)){var o=n[l];if(o!=null)switch(l){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ze(e,t,l,o,n,null)}}a&&Ze(e,t,"srcSet",n.srcSet,n,null),i&&Ze(e,t,"src",n.src,n,null);return;case"input":De("invalid",e);var g=l=o=a=null,O=null,V=null;for(i in n)if(n.hasOwnProperty(i)){var ne=n[i];if(ne!=null)switch(i){case"name":a=ne;break;case"type":o=ne;break;case"checked":O=ne;break;case"defaultChecked":V=ne;break;case"value":l=ne;break;case"defaultValue":g=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(d(137,t));break;default:Ze(e,t,i,ne,n,null)}}wd(e,l,g,O,V,o,a,!1);return;case"select":De("invalid",e),i=o=l=null;for(a in n)if(n.hasOwnProperty(a)&&(g=n[a],g!=null))switch(a){case"value":l=g;break;case"defaultValue":o=g;break;case"multiple":i=g;default:Ze(e,t,a,g,n,null)}t=l,n=o,e.multiple=!!i,t!=null?ki(e,!!i,t,!1):n!=null&&ki(e,!!i,n,!0);return;case"textarea":De("invalid",e),l=a=i=null;for(o in n)if(n.hasOwnProperty(o)&&(g=n[o],g!=null))switch(o){case"value":i=g;break;case"defaultValue":a=g;break;case"children":l=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(91));break;default:Ze(e,t,o,g,n,null)}Ed(e,i,a,l);return;case"option":for(O in n)n.hasOwnProperty(O)&&(i=n[O],i!=null)&&(O==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ze(e,t,O,i,n,null));return;case"dialog":De("beforetoggle",e),De("toggle",e),De("cancel",e),De("close",e);break;case"iframe":case"object":De("load",e);break;case"video":case"audio":for(i=0;i<qa.length;i++)De(qa[i],e);break;case"image":De("error",e),De("load",e);break;case"details":De("toggle",e);break;case"embed":case"source":case"link":De("error",e),De("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in n)if(n.hasOwnProperty(V)&&(i=n[V],i!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Ze(e,t,V,i,n,null)}return;default:if(Hr(t)){for(ne in n)n.hasOwnProperty(ne)&&(i=n[ne],i!==void 0&&_o(e,t,ne,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&Ze(e,t,g,i,n,null))}function Cp(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,o=null,g=null,O=null,V=null,ne=null;for(Q in n){var de=n[Q];if(n.hasOwnProperty(Q)&&de!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":O=de;default:i.hasOwnProperty(Q)||Ze(e,t,Q,null,i,de)}}for(var P in i){var Q=i[P];if(de=n[P],i.hasOwnProperty(P)&&(Q!=null||de!=null))switch(P){case"type":l=Q;break;case"name":a=Q;break;case"checked":V=Q;break;case"defaultChecked":ne=Q;break;case"value":o=Q;break;case"defaultValue":g=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(d(137,t));break;default:Q!==de&&Ze(e,t,P,Q,i,de)}}Lr(e,o,g,O,V,ne,l,a);return;case"select":Q=o=g=P=null;for(l in n)if(O=n[l],n.hasOwnProperty(l)&&O!=null)switch(l){case"value":break;case"multiple":Q=O;default:i.hasOwnProperty(l)||Ze(e,t,l,null,i,O)}for(a in i)if(l=i[a],O=n[a],i.hasOwnProperty(a)&&(l!=null||O!=null))switch(a){case"value":P=l;break;case"defaultValue":g=l;break;case"multiple":o=l;default:l!==O&&Ze(e,t,a,l,i,O)}t=g,n=o,i=Q,P!=null?ki(e,!!n,P,!1):!!i!=!!n&&(t!=null?ki(e,!!n,t,!0):ki(e,!!n,n?[]:"",!1));return;case"textarea":Q=P=null;for(g in n)if(a=n[g],n.hasOwnProperty(g)&&a!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:Ze(e,t,g,null,i,a)}for(o in i)if(a=i[o],l=n[o],i.hasOwnProperty(o)&&(a!=null||l!=null))switch(o){case"value":P=a;break;case"defaultValue":Q=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(d(91));break;default:a!==l&&Ze(e,t,o,a,i,l)}_d(e,P,Q);return;case"option":for(var be in n)P=n[be],n.hasOwnProperty(be)&&P!=null&&!i.hasOwnProperty(be)&&(be==="selected"?e.selected=!1:Ze(e,t,be,null,i,P));for(O in i)P=i[O],Q=n[O],i.hasOwnProperty(O)&&P!==Q&&(P!=null||Q!=null)&&(O==="selected"?e.selected=P&&typeof P!="function"&&typeof P!="symbol":Ze(e,t,O,P,i,Q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in n)P=n[Ae],n.hasOwnProperty(Ae)&&P!=null&&!i.hasOwnProperty(Ae)&&Ze(e,t,Ae,null,i,P);for(V in i)if(P=i[V],Q=n[V],i.hasOwnProperty(V)&&P!==Q&&(P!=null||Q!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(d(137,t));break;default:Ze(e,t,V,P,i,Q)}return;default:if(Hr(t)){for(var Xe in n)P=n[Xe],n.hasOwnProperty(Xe)&&P!==void 0&&!i.hasOwnProperty(Xe)&&_o(e,t,Xe,void 0,i,P);for(ne in i)P=i[ne],Q=n[ne],!i.hasOwnProperty(ne)||P===Q||P===void 0&&Q===void 0||_o(e,t,ne,P,i,Q);return}}for(var F in n)P=n[F],n.hasOwnProperty(F)&&P!=null&&!i.hasOwnProperty(F)&&Ze(e,t,F,null,i,P);for(de in i)P=i[de],Q=n[de],!i.hasOwnProperty(de)||P===Q||P==null&&Q==null||Ze(e,t,de,P,i,Q)}function Ch(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],l=a.transferSize,o=a.initiatorType,g=a.duration;if(l&&g&&Ch(o)){for(o=0,g=a.responseEnd,i+=1;i<n.length;i++){var O=n[i],V=O.startTime;if(V>g)break;var ne=O.transferSize,de=O.initiatorType;ne&&Ch(de)&&(O=O.responseEnd,o+=ne*(O<g?1:(g-V)/(O-V)))}if(--i,t+=8*(l+o)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Eo=null,Ao=null;function nr(e){return e.nodeType===9?e:e.ownerDocument}function Mh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function To(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Co=null;function zp(){var e=window.event;return e&&e.type==="popstate"?e===Co?!1:(Co=e,!0):(Co=null,!1)}var Bh=typeof setTimeout=="function"?setTimeout:void 0,Bp=typeof clearTimeout=="function"?clearTimeout:void 0,Nh=typeof Promise=="function"?Promise:void 0,Np=typeof queueMicrotask=="function"?queueMicrotask:typeof Nh<"u"?function(e){return Nh.resolve(null).then(e).catch(Dp)}:Bh;function Dp(e){setTimeout(function(){throw e})}function Gn(e){return e==="head"}function Dh(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),ea(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ya(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Ya(n);for(var l=n.firstChild;l;){var o=l.nextSibling,g=l.nodeName;l[oa]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=o}}else n==="body"&&Ya(e.ownerDocument.body);n=a}while(n);ea(t)}function Oh(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Mo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Mo(n),Dr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Op(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[oa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Kt(e.nextSibling),e===null)break}return null}function Lp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Kt(e.nextSibling),e===null))return null;return e}function Lh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Kt(e.nextSibling),e===null))return null;return e}function zo(e){return e.data==="$?"||e.data==="$~"}function Bo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Rp(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var No=null;function Rh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Kt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Hh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function jh(e,t,n){switch(t=nr(n),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Ya(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Dr(e)}var Pt=new Map,Uh=new Set;function ir(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wn=Y.d;Y.d={f:Hp,r:jp,D:Up,C:Ip,L:Fp,m:qp,X:Yp,S:Gp,M:Zp};function Hp(){var e=wn.f(),t=Kl();return e||t}function jp(e){var t=bi(e);t!==null&&t.tag===5&&t.type==="form"?nu(t):wn.r(e)}var Ji=typeof document>"u"?null:document;function Ih(e,t,n){var i=Ji;if(i&&typeof t=="string"&&t){var a=Ft(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Uh.has(a)||(Uh.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),vt(t,"link",e),ut(t),i.head.appendChild(t)))}}function Up(e){wn.D(e),Ih("dns-prefetch",e,null)}function Ip(e,t){wn.C(e,t),Ih("preconnect",e,t)}function Fp(e,t,n){wn.L(e,t,n);var i=Ji;if(i&&e&&t){var a='link[rel="preload"][as="'+Ft(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Ft(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Ft(n.imageSizes)+'"]')):a+='[href="'+Ft(e)+'"]';var l=a;switch(t){case"style":l=$i(e);break;case"script":l=Wi(e)}Pt.has(l)||(e=T({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Pt.set(l,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Za(l))||t==="script"&&i.querySelector(Xa(l))||(t=i.createElement("link"),vt(t,"link",e),ut(t),i.head.appendChild(t)))}}function qp(e,t){wn.m(e,t);var n=Ji;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+Ft(i)+'"][href="'+Ft(e)+'"]',l=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Wi(e)}if(!Pt.has(l)&&(e=T({rel:"modulepreload",href:e},t),Pt.set(l,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Xa(l)))return}i=n.createElement("link"),vt(i,"link",e),ut(i),n.head.appendChild(i)}}}function Gp(e,t,n){wn.S(e,t,n);var i=Ji;if(i&&e){var a=xi(i).hoistableStyles,l=$i(e);t=t||"default";var o=a.get(l);if(!o){var g={loading:0,preload:null};if(o=i.querySelector(Za(l)))g.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Pt.get(l))&&Do(e,n);var O=o=i.createElement("link");ut(O),vt(O,"link",e),O._p=new Promise(function(V,ne){O.onload=V,O.onerror=ne}),O.addEventListener("load",function(){g.loading|=1}),O.addEventListener("error",function(){g.loading|=2}),g.loading|=4,ar(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:g},a.set(l,o)}}}function Yp(e,t){wn.X(e,t);var n=Ji;if(n&&e){var i=xi(n).hoistableScripts,a=Wi(e),l=i.get(a);l||(l=n.querySelector(Xa(a)),l||(e=T({src:e,async:!0},t),(t=Pt.get(a))&&Oo(e,t),l=n.createElement("script"),ut(l),vt(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function Zp(e,t){wn.M(e,t);var n=Ji;if(n&&e){var i=xi(n).hoistableScripts,a=Wi(e),l=i.get(a);l||(l=n.querySelector(Xa(a)),l||(e=T({src:e,async:!0,type:"module"},t),(t=Pt.get(a))&&Oo(e,t),l=n.createElement("script"),ut(l),vt(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function Fh(e,t,n,i){var a=(a=xe.current)?ir(a):null;if(!a)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=$i(n.href),n=xi(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=$i(n.href);var l=xi(a).hoistableStyles,o=l.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=a.querySelector(Za(e)))&&!l._p&&(o.instance=l,o.state.loading=5),Pt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Pt.set(e,n),l||Xp(a,e,n,o.state))),t&&i===null)throw Error(d(528,""));return o}if(t&&i!==null)throw Error(d(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Wi(n),n=xi(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function $i(e){return'href="'+Ft(e)+'"'}function Za(e){return'link[rel="stylesheet"]['+e+"]"}function qh(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Xp(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),vt(t,"link",n),ut(t),e.head.appendChild(t))}function Wi(e){return'[src="'+Ft(e)+'"]'}function Xa(e){return"script[async]"+e}function Gh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ft(n.href)+'"]');if(i)return t.instance=i,ut(i),i;var a=T({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ut(i),vt(i,"style",a),ar(i,n.precedence,e),t.instance=i;case"stylesheet":a=$i(n.href);var l=e.querySelector(Za(a));if(l)return t.state.loading|=4,t.instance=l,ut(l),l;i=qh(n),(a=Pt.get(a))&&Do(i,a),l=(e.ownerDocument||e).createElement("link"),ut(l);var o=l;return o._p=new Promise(function(g,O){o.onload=g,o.onerror=O}),vt(l,"link",i),t.state.loading|=4,ar(l,n.precedence,e),t.instance=l;case"script":return l=Wi(n.src),(a=e.querySelector(Xa(l)))?(t.instance=a,ut(a),a):(i=n,(a=Pt.get(l))&&(i=T({},n),Oo(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),ut(a),vt(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ar(i,n.precedence,e));return t.instance}function ar(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,l=a,o=0;o<i.length;o++){var g=i[o];if(g.dataset.precedence===t)l=g;else if(l!==a)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Do(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Oo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var lr=null;function Yh(e,t,n){if(lr===null){var i=new Map,a=lr=new Map;a.set(n,i)}else a=lr,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var l=n[a];if(!(l[oa]||l[ft]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var g=i.get(o);g?g.push(l):i.set(o,[l])}}return i}function Zh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Vp(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Xh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kp(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=$i(i.href),l=t.querySelector(Za(a));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=rr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,ut(l);return}l=t.ownerDocument||t,i=qh(i),(a=Pt.get(a))&&Do(i,a),l=l.createElement("link"),ut(l);var o=l;o._p=new Promise(function(g,O){o.onload=g,o.onerror=O}),vt(l,"link",i),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=rr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Lo=0;function Pp(e,t){return e.stylesheets&&e.count===0&&or(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&or(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Lo===0&&(Lo=62500*Mp());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&or(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Lo?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function rr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)or(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sr=null;function or(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sr=new Map,t.forEach(Qp,e),sr=null,rr.call(e))}function Qp(e,t){if(!(t.state.loading&4)){var n=sr.get(e);if(n)var i=n.get(null);else{n=new Map,sr.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var o=a[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(n.set(o.dataset.precedence,o),i=o)}i&&n.set(null,i)}a=t.instance,o=a.getAttribute("data-precedence"),l=n.get(o)||i,l===i&&n.set(null,a),n.set(o,a),this.count++,i=rr.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),l?l.parentNode.insertBefore(a,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Va={$$typeof:R,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function Jp(e,t,n,i,a,l,o,g,O){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mr(0),this.hiddenUpdates=Mr(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function Vh(e,t,n,i,a,l,o,g,O,V,ne,de){return e=new Jp(e,t,n,o,O,V,ne,de,g),t=1,l===!0&&(t|=24),l=Bt(3,null,null,t),e.current=l,l.stateNode=e,t=fs(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:n,cache:t},vs(l),e}function Kh(e){return e?(e=zi,e):zi}function Ph(e,t,n,i,a,l){a=Kh(a),i.context===null?i.context=a:i.pendingContext=a,i=Nn(t),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=Dn(e,i,t),n!==null&&(Mt(n,e,t),Ea(n,e,t))}function Qh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ro(e,t){Qh(e,t),(e=e.alternate)&&Qh(e,t)}function Jh(e){if(e.tag===13||e.tag===31){var t=ni(e,67108864);t!==null&&Mt(t,e,67108864),Ro(e,67108864)}}function $h(e){if(e.tag===13||e.tag===31){var t=Rt();t=zr(t);var n=ni(e,t);n!==null&&Mt(n,e,t),Ro(e,t)}}var dr=!0;function $p(e,t,n,i){var a=G.T;G.T=null;var l=Y.p;try{Y.p=2,Ho(e,t,n,i)}finally{Y.p=l,G.T=a}}function Wp(e,t,n,i){var a=G.T;G.T=null;var l=Y.p;try{Y.p=8,Ho(e,t,n,i)}finally{Y.p=l,G.T=a}}function Ho(e,t,n,i){if(dr){var a=jo(i);if(a===null)wo(e,t,i,cr,n),ef(e,i);else if(tg(a,e,t,n,i))i.stopPropagation();else if(ef(e,i),t&4&&-1<eg.indexOf(e)){for(;a!==null;){var l=bi(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=Ut(l.pendingLanes);if(o!==0){var g=l;for(g.pendingLanes|=2,g.entangledLanes|=2;o;){var O=1<<31-We(o);g.entanglements[1]|=O,o&=~O}an(l),(Ue&6)===0&&(Xl=ge()+500,Fa(0))}}break;case 31:case 13:g=ni(l,2),g!==null&&Mt(g,l,2),Kl(),Ro(l,2)}if(l=jo(i),l===null&&wo(e,t,i,cr,n),l===a)break;a=l}a!==null&&i.stopPropagation()}else wo(e,t,i,null,n)}}function jo(e){return e=Ur(e),Uo(e)}var cr=null;function Uo(e){if(cr=null,e=yi(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=p(t),e!==null)return e;e=null}else if(n===31){if(e=f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return cr=e,null}function Wh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pe()){case ke:return 2;case Ie:return 8;case Be:case kt:return 32;case _n:return 268435456;default:return 32}default:return 32}}var Io=!1,Yn=null,Zn=null,Xn=null,Ka=new Map,Pa=new Map,Vn=[],eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ef(e,t){switch(e){case"focusin":case"focusout":Yn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":Ka.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pa.delete(t.pointerId)}}function Qa(e,t,n,i,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[a]},t!==null&&(t=bi(t),t!==null&&Jh(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function tg(e,t,n,i,a){switch(t){case"focusin":return Yn=Qa(Yn,e,t,n,i,a),!0;case"dragenter":return Zn=Qa(Zn,e,t,n,i,a),!0;case"mouseover":return Xn=Qa(Xn,e,t,n,i,a),!0;case"pointerover":var l=a.pointerId;return Ka.set(l,Qa(Ka.get(l)||null,e,t,n,i,a)),!0;case"gotpointercapture":return l=a.pointerId,Pa.set(l,Qa(Pa.get(l)||null,e,t,n,i,a)),!0}return!1}function tf(e){var t=yi(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=p(n),t!==null){e.blockedOn=t,pd(e.priority,function(){$h(n)});return}}else if(t===31){if(t=f(n),t!==null){e.blockedOn=t,pd(e.priority,function(){$h(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ur(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jo(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);jr=i,n.target.dispatchEvent(i),jr=null}else return t=bi(n),t!==null&&Jh(t),e.blockedOn=n,!1;t.shift()}return!0}function nf(e,t,n){ur(e)&&n.delete(t)}function ng(){Io=!1,Yn!==null&&ur(Yn)&&(Yn=null),Zn!==null&&ur(Zn)&&(Zn=null),Xn!==null&&ur(Xn)&&(Xn=null),Ka.forEach(nf),Pa.forEach(nf)}function hr(e,t){e.blockedOn===t&&(e.blockedOn=null,Io||(Io=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ng)))}var fr=null;function af(e){fr!==e&&(fr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){fr===e&&(fr=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(Uo(i||n)===null)continue;break}var l=bi(n);l!==null&&(e.splice(t,3),t-=3,Hs(l,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function ea(e){function t(O){return hr(O,e)}Yn!==null&&hr(Yn,e),Zn!==null&&hr(Zn,e),Xn!==null&&hr(Xn,e),Ka.forEach(t),Pa.forEach(t);for(var n=0;n<Vn.length;n++){var i=Vn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)tf(n),n.blockedOn===null&&Vn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],o=a[wt]||null;if(typeof l=="function")o||af(n);else if(o){var g=null;if(l&&l.hasAttribute("formAction")){if(a=l,o=l[wt]||null)g=o.formAction;else if(Uo(a)!==null)continue}else g=o.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),af(n)}}}function lf(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return a=o})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Fo(e){this._internalRoot=e}mr.prototype.render=Fo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var n=t.current,i=Rt();Ph(n,i,e,t,null,null)},mr.prototype.unmount=Fo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ph(e.current,2,null,e,null,null),Kl(),t[vi]=null}};function mr(e){this._internalRoot=e}mr.prototype.unstable_scheduleHydration=function(e){if(e){var t=md();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vn.length&&t!==0&&t<Vn[n].priority;n++);Vn.splice(n,0,e),n===0&&tf(e)}};var rf=h.version;if(rf!=="19.2.7")throw Error(d(527,rf,"19.2.7"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=S(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var ig={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pr.isDisabled&&pr.supportsFiber)try{Ve=pr.inject(ig),ct=pr}catch{}}return $a.createRoot=function(e,t){if(!v(e))throw Error(d(299));var n=!1,i="",a=hu,l=fu,o=mu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Vh(e,1,!1,null,null,n,i,null,a,l,o,lf),e[vi]=t.current,ko(e),new Fo(t)},$a.hydrateRoot=function(e,t,n){if(!v(e))throw Error(d(299));var i=!1,a="",l=hu,o=fu,g=mu,O=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(O=n.formState)),t=Vh(e,1,!0,t,n??null,i,a,O,l,o,g,lf),t.context=Kh(null),n=t.current,i=Rt(),i=zr(i),a=Nn(i),a.callback=null,Dn(n,a,i),n=i,t.current.lanes=n,sa(t,n),an(t),e[vi]=t.current,ko(e),new mr(t)},$a.version="19.2.7",$a}var gf;function mg(){if(gf)return Yo.exports;gf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(h){console.error(h)}}return r(),Yo.exports=fg(),Yo.exports}var pg=mg();const na="html-deck-editor:ai-config:v1",kr=[{id:"custom",label:"OpenAI-compatible",protocol:"openai-chat",baseUrl:"",path:"/v1/chat/completions",model:"gpt-5.5",modelOptions:["gpt-5.5","gpt-5.4","gpt-5.4-mini","gpt-5.4-nano"]},{id:"openai",label:"OpenAI",protocol:"openai-chat",baseUrl:"https://api.openai.com/v1",path:"/chat/completions",model:"gpt-5.5",modelOptions:["gpt-5.5","gpt-5.4","gpt-5.4-mini","gpt-5.4-nano"]},{id:"anthropic",label:"Claude / Anthropic",protocol:"anthropic-messages",baseUrl:"https://api.anthropic.com",path:"/v1/messages",model:"claude-sonnet-4-6",modelOptions:["claude-fable-5","claude-opus-4-8","claude-sonnet-4-6","claude-haiku-4-5-20251001"]},{id:"deepseek",label:"DeepSeek",protocol:"openai-chat",baseUrl:"https://api.deepseek.com",path:"/chat/completions",model:"deepseek-v4-flash",modelOptions:["deepseek-v4-flash","deepseek-v4-pro"]},{id:"qwen",label:"通义千问 / DashScope",protocol:"openai-chat",baseUrl:"https://dashscope.aliyuncs.com/compatible-mode/v1",path:"/chat/completions",model:"qwen3.7-plus",modelOptions:["qwen3.7-max","qwen3.7-plus","qwen3.6-flash","qwen-plus","qwen-max"]},{id:"kimi",label:"Kimi / 月之暗面",protocol:"openai-chat",baseUrl:"https://api.moonshot.ai/v1",path:"/chat/completions",model:"kimi-k2.7-code",modelOptions:["kimi-k2.7-code","kimi-k2.7-code-highspeed","kimi-k2.6","kimi-k2.5","moonshot-v1-128k"]},{id:"zhipu",label:"智谱",protocol:"openai-chat",baseUrl:"https://open.bigmodel.cn/api/paas/v4",path:"/chat/completions",model:"glm-5.2",modelOptions:["glm-5.2","glm-5.1","glm-5-turbo","glm-5","glm-4.7"]},{id:"minimax",label:"MiniMax",protocol:"openai-chat",baseUrl:"https://api.minimax.io/v1",path:"/chat/completions",model:"MiniMax-M3",modelOptions:["MiniMax-M3","MiniMax-M2.7","MiniMax-M2.7-highspeed","MiniMax-M2.5"]},{id:"siliconflow",label:"硅基流动",protocol:"openai-chat",baseUrl:"https://api.siliconflow.cn/v1",path:"/chat/completions",model:"deepseek-ai/DeepSeek-V3.2",modelOptions:["deepseek-ai/DeepSeek-V3.2","Pro/deepseek-ai/DeepSeek-V3.2","Pro/zai-org/GLM-4.7","Qwen/Qwen3-Coder-480B-A35B-Instruct","Qwen/Qwen3-32B"]},{id:"openrouter",label:"OpenRouter",protocol:"openai-chat",baseUrl:"https://openrouter.ai/api/v1",path:"/chat/completions",model:"openai/gpt-5.5",modelOptions:["openai/gpt-5.5","openai/gpt-5.4","anthropic/claude-sonnet-4.5","anthropic/claude-opus-4.5","google/gemini-3-pro","deepseek/deepseek-v4-flash"]},{id:"relay",label:"自定义中转站",protocol:"openai-chat",baseUrl:"",path:"/v1/chat/completions",model:"gpt-5.5",modelOptions:["gpt-5.5","gpt-5.4","deepseek-v4-flash","glm-5.2"]}],wr={provider:"custom",baseUrl:"",path:"/v1/chat/completions",apiKey:"",model:"gpt-5.5",stream:!0,storage:"none",proxyUrl:""};function _r(r){return kr.find(h=>h.id===r)||kr[0]}function gg(r,h){const s=_r(h);return{...r,provider:h,baseUrl:s.baseUrl,path:s.path,model:s.model}}function vg(){const r=yf(sessionStorage);return r||yf(localStorage)||wr}function Wo(r){sessionStorage.removeItem(na),localStorage.removeItem(na),r.storage==="session"?sessionStorage.setItem(na,JSON.stringify(r)):r.storage==="local"&&localStorage.setItem(na,JSON.stringify(r))}function yg(r){const h={...r,apiKey:""};return Wo(h),h}function vf(r){const h=[];return!r.proxyUrl.trim()&&!r.baseUrl.trim()&&h.push("请填写 API Base URL，或填写 Proxy URL。"),!r.path.trim()&&!r.proxyUrl.trim()&&h.push("请填写 API Path。"),r.apiKey.trim()||h.push("请填写 API Key。"),r.model.trim()||h.push("请填写 Model。"),h}function yf(r){try{const h=r.getItem(na);if(!h)return null;const s=JSON.parse(h);return bg(s)}catch{return r.removeItem(na),null}}function bg(r){const h=xg(r.provider)?r.provider:wr.provider,s=Sg(r.storage)?r.storage:wr.storage;return{provider:h,baseUrl:String(r.baseUrl||""),path:String(r.path||_r(h).path),apiKey:String(r.apiKey||""),model:String(r.model||""),stream:r.stream!==!1,storage:s,proxyUrl:String(r.proxyUrl||"")}}function xg(r){return typeof r=="string"&&kr.some(h=>h.id===r)}function Sg(r){return r==="none"||r==="session"||r==="local"}class Pn extends Error{status;constructor(h,s=null){super(h),this.name="AiRequestError",this.status=s}}function Af(r){const h=r.proxyUrl.trim();return h||kg(r.baseUrl,r.path)}function kg(r,h){const s=r.trim().replace(/\/+$/,""),d=h.trim().replace(/^\/+/,"");return s?d?`${s}/${d}`:s:`/${d}`}async function bf(r,h,s={}){return _r(r.provider).protocol==="anthropic-messages"?_g(r,h,s):wg(r,h,s)}async function wg(r,h,s={}){const d=s.stream??r.stream,v={model:r.model.trim(),messages:h,temperature:s.temperature??.1,stream:d};let u;try{u=await fetch(Af(r),{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r.apiKey.trim()}`},body:JSON.stringify(v)})}catch{throw new Pn("网络请求失败，可能是接口暂时不可达或不支持当前网页直连。")}if(!u.ok)throw new Pn(await Cf(u),u.status);if(d&&u.body)return Tf(u.body,Ag);const p=await u.json();return Eg(p)}async function _g(r,h,s={}){const d=s.stream??r.stream,{system:v,messages:u}=Bg(h),p={model:r.model.trim(),max_tokens:8192,messages:u,stream:d,system:v||void 0};let f;try{f=await fetch(Af(r),{method:"POST",headers:{"Content-Type":"application/json","x-api-key":r.apiKey.trim(),"anthropic-version":"2023-06-01"},body:JSON.stringify(p)})}catch{throw new Pn("网络请求失败，可能是接口暂时不可达或不支持当前网页直连。")}if(!f.ok)throw new Pn(await Cf(f),f.status);if(d&&f.body)return Tf(f.body,Cg);const y=await f.json();return Tg(y)}function Eg(r){const s=Mf(r)?.message?.content;if(typeof s=="string")return s;if(Array.isArray(s))return s.map(d=>typeof d?.text=="string"?d.text:"").join("");throw new Pn("AI 返回格式不完整，没有找到可读取的文本结果。")}function Ag(r){const h=r.trim();if(!h.startsWith("data:"))return"";const s=h.slice(5).trim();if(!s)return"";if(s==="[DONE]")return null;try{const d=JSON.parse(s),v=Mf(d);return v?.delta?.content||v?.message?.content||""}catch{return""}}function Tg(r){if(!r||typeof r!="object")throw new Pn("AI 返回格式不完整，没有找到可读取的文本结果。");const h=r.content;if(!Array.isArray(h))throw new Pn("AI 返回格式不完整，没有找到可读取的文本结果。");const s=h.map(d=>d&&typeof d=="object"&&typeof d.text=="string"?d.text:"").join("");if(s)return s;throw new Pn("AI 返回格式不完整，没有找到可读取的文本结果。")}function Cg(r){const h=r.trim();if(!h.startsWith("data:"))return"";const s=h.slice(5).trim();if(!s)return"";if(s==="[DONE]")return null;try{const d=JSON.parse(s);return d?.type==="message_stop"?null:d?.type==="content_block_delta"&&typeof d?.delta?.text=="string"?d.delta.text:d?.type==="content_block_start"&&typeof d?.content_block?.text=="string"?d.content_block.text:""}catch{return""}}function Mg(r){return r===401||r===403?"API Key 错误或没有权限。":r===402?"账户余额不足或当前模型不可用。":r===404?"API Base URL、API Path 或 Model 可能不正确。":r===413?"当前 HTML 内容太长，请减少页面内容后再试。":r===429?"请求过于频繁，请稍后再试。":r>=500?"服务暂时异常，请稍后再试。":`AI 请求失败，HTTP ${r}。`}async function Tf(r,h){const s=r.getReader(),d=new TextDecoder;let v="",u="";for(;;){const{done:p,value:f}=await s.read();if(p)break;v+=d.decode(f,{stream:!0});const y=v.split(/\r?\n/);v=y.pop()||"";for(const S of y){const B=h(S);if(B===null)return u;u+=B}}if(v){const p=h(v);p&&(u+=p)}return u}async function Cf(r){const h=Mg(r.status);try{const s=await r.text();return s.trim()?`${h} ${zg(s)}`:h}catch{return h}}function zg(r){return r.replace(/\s+/g," ").trim().slice(0,220)}function Mf(r){if(!r||typeof r!="object")return null;const h=r.choices;return Array.isArray(h)?h[0]:null}function Bg(r){const h=[],s=[];for(const d of r)d.role==="system"?h.push(d.content):s.push({role:d.role,content:d.content});return{system:h.join(`

`),messages:s.length>0?s:[{role:"user",content:""}]}}const Ng=new TextDecoder("utf-8",{fatal:!1}),Dg=new TextEncoder;function tl(r){return Ng.decode(r)}function Og(r){return Dg.encode(r)}const Lg=/\.(html?|xhtml)$/i,nd=["#deck",".deck",".slides","#slides","[data-deck]","[data-slides]","#webslides","#presentation",".presentation","#impress",".impress"].join(", "),zf=["section","article",".slide",".step","[data-slide]","[data-page]",".page",".screen"].join(", ");function ia(r){const h=r.filter(v=>Lg.test(v.path)),s=h.find(v=>v.path.toLowerCase()==="index.html");if(s)return s;const d=h.filter(v=>v.path.toLowerCase().endsWith("/index.html")).sort((v,u)=>v.path.split("/").length-u.path.split("/").length);return d[0]?d[0]:h.length===1?h[0]:null}function ed(r){const h=ia(r.files);if(!h)return Ko(null,["没有找到 index.html 或唯一的 HTML 文件。"]);const s=tl(h.data),d=new DOMParser().parseFromString(s,"text/html");if(d.querySelector("parsererror"))return Ko(h.path,["HTML 文件解析失败，可能不是标准 HTML。"]);const u=s.includes("HtmlDeckEditor")||s.includes("FrontendSlidesEditor.mount")||!!d.querySelector('script[src*="html-deck-editor"], script[src*="editor-runtime"]'),p=d.querySelector("deck-stage#deckStage, #deckStage, .deck-stage"),f=p?Nf(p):[],y=jg(d,r,h.path,p,f);if(u&&p&&f.length>0)return{status:"already-editable",sourceKind:"fixed-stage",indexPath:h.path,slideCount:f.length,confidence:.98,messages:["这份演示稿已经带有编辑功能，可以升级为新版编辑器。"],warnings:y};if(p&&f.length>0)return{status:"ready",sourceKind:s.includes("frontend-slides")?"frontend-slides":"fixed-stage",indexPath:h.path,slideCount:f.length,confidence:.95,messages:[`找到了固定舞台结构，共 ${f.length} 页。`],warnings:y};const S=aa(d.querySelector(".reveal .slides"),"section");if(S.length>=2)return{status:"adaptable",sourceKind:"reveal",indexPath:h.path,slideCount:S.length,confidence:.82,messages:[`识别到 Reveal.js 演示结构，共 ${S.length} 页。`],warnings:["第一版会把每页内容包装进固定舞台，复杂 Reveal 转场和插件不会完整保留。",...y]};const B=Bf(d);if(B.length>=2)return{status:"adaptable",sourceKind:"section-slide",indexPath:h.path,slideCount:B.length,confidence:.78,messages:[`识别到 ${B.length} 个 slide 页面。`],warnings:["会把这些页面包装成可编辑 HTML deck。",...y]};const T=Rg(d);return T.length>=2&&T.length<=80?{status:"adaptable",sourceKind:"generic-section",indexPath:h.path,slideCount:T.length,confidence:.62,messages:[`看起来像由 ${T.length} 个页面区块组成的简单演示。`],warnings:["普通 section 会按页包装，排版可能需要打开编辑器后微调。",...y]}:Ko(h.path,["这看起来更像普通网页或应用，不像 HTML 演示稿。","第一版不会强行转换普通网站，避免生成难以编辑的结果。"])}function Rg(r){const h=Hg(r);return h.length>=2?h:Array.from(r.body.querySelectorAll("main > section, body > section")).filter(Df)}function Hg(r){const h=Array.from(r.body.querySelectorAll(nd));for(const s of h){const d=aa(s,zf).filter(Df);if(d.length>=2)return d}return[]}function Bf(r){return id(Array.from(r.body.querySelectorAll("section.slide, .slide")))}function Nf(r){const h=aa(r,".slide");return h.length?h:id(Array.from(r.querySelectorAll(".slide")))}function id(r){return r.filter(h=>!r.some(s=>s!==h&&s.contains(h)))}function aa(r,h){return r?Array.from(r.children).filter(s=>s.matches(h)):[]}function Df(r){return(r.textContent||"").trim().length>10}function jg(r,h,s,d,v){const u=[];u.push(...Ug(r,d));const f=(v.length?v:Ig(r,d)).filter(Fg);f.length>0&&u.push(`AI 友好度提示：有 ${f.length} 页主要由单张图片、SVG 或画布构成，后续 AI 难以直接改里面的文字。`),qg(r)&&u.push("AI 友好度提示：脚本里疑似动态生成 slide 内容，建议先固化为静态 HTML 再交给 AI 修改。");const y=Gg(r,h,s);return y.length>0&&u.push(`AI 友好度提示：引用了 ${y.length} 个本地资源但上传内容里找不到：${y.slice(0,3).join("、")}。建议上传完整文件夹或 ZIP。`),Array.from(new Set(u))}function Ug(r,h){const s=[],d=Xg([h,...Array.from(r.body.querySelectorAll(nd))]);for(const v of d){if(!v)continue;if(v.querySelector(".slide .slide, section.slide section.slide, [data-slide] [data-slide]")){s.push("AI 友好度提示：检测到 slide 嵌套结构，建议让每个 .slide 直接放在 deck-stage 或 deck 容器下。");break}const p=Array.from(v.querySelectorAll(".slide, section.slide, article.slide, [data-slide]")),f=aa(v,".slide, section.slide, article.slide, [data-slide]");if(p.length>=2&&f.length>0&&f.length<p.length){s.push("AI 友好度提示：部分 slide 不是 deck 容器的直接子元素，AI 修改结构时更容易误判层级。");break}}return s}function Ig(r,h){if(h)return Nf(h);const s=aa(r.querySelector(".reveal .slides"),"section");if(s.length)return s;const d=Bf(r);if(d.length)return d;const v=Array.from(r.body.querySelectorAll(nd));for(const u of v){const p=aa(u,zf);if(p.length)return p}return id(Array.from(r.body.querySelectorAll("main > section, body > section, article")))}function Fg(r){return(r.textContent||"").replace(/\s+/g,"").trim().length>8?!1:Array.from(r.querySelectorAll("img, picture, svg, canvas, video")).length===1}function qg(r){return Array.from(r.querySelectorAll("script:not([src])")).some(h=>{const s=h.textContent||"",d=/innerHTML\s*=|insertAdjacentHTML|document\.write|createElement\(\s*["'](?:section|article|div|deck-stage)/i.test(s),v=/slide|deck|presentation|section/i.test(s);return d&&v})}function Gg(r,h,s){const d=new Set(h.files.map(u=>ad(u.path))),v=Array.from(r.querySelectorAll("img[src], video[src], audio[src], source[src], track[src], script[src], link[href]")).map(u=>u.getAttribute("src")||u.getAttribute("href")||"").map(u=>Yg(u,s)).filter(u=>!!u);return Array.from(new Set(v.filter(u=>!d.has(u))))}function Yg(r,h){const s=r.trim();if(!s||s.startsWith("#")||/^(?:https?:|data:|blob:|mailto:|tel:|javascript:)/i.test(s))return null;const d=s.split(/[?#]/)[0];if(!d)return null;const v=d.startsWith("/")?"":Zg(h);return ad(`${v}${d.replace(/^\/+/,"")}`)}function ad(r){const h=[];return r.replace(/\\/g,"/").split("/").forEach(s=>{if(!(!s||s===".")){if(s===".."){h.pop();return}h.push(s)}}),h.join("/")}function Zg(r){const h=ad(r),s=h.lastIndexOf("/");return s>=0?`${h.slice(0,s)}/`:""}function Xg(r){return Array.from(new Set(r.filter(h=>!!h)))}function Ko(r,h){return{status:"unsupported",sourceKind:"unknown",indexPath:r,slideCount:0,confidence:0,messages:h,warnings:[]}}const Vg="script, style, template, meta, link, title, head",Kg=180,Pg=80;function Qg(r){const h=ia(r.files);if(!h)throw new Error("没有找到可供 AI 适配的 HTML 文件。");const s=tl(h.data),d=Jg(s);return{summary:d,messages:[{role:"system",content:["你是 Anchor Deck 的 HTML 结构适配助手。","你的任务是生成一个可执行的 HTML 结构修改方案，让现有 HTML 更容易被 Anchor Deck 编辑器识别和编辑。","本地代码会按你的计划修改 DOM 结构和 data-* 标记，再注入编辑器运行时。","只返回 JSON，不要返回 Markdown、解释、完整 HTML、CSS、JavaScript 或编辑器代码。","只建议最小结构标记：页面、可编辑文本、可编辑媒体、可编辑视觉块和忽略区域。","不要改写用户文案，不要重排样式，不要删除内容。"].join(`
`)},{role:"user",content:["请根据下面的 HTML 结构摘要生成可执行的 HTML 结构修改方案 JSON。","JSON 结构必须是：","{",'  "stageSelector": "可选，已有舞台/页面容器 selector",','  "slides": [{ "selector": "每页 selector", "title": "页面标题" }],','  "editableTextSelectors": ["文本元素 selector"],','  "editableMediaSelectors": ["图片、视频、SVG、canvas 等媒体 selector"],','  "editableBoxSelectors": ["卡片、图形、色块、数据块等视觉块 selector"],','  "ignoreSelectors": ["导航、按钮、装饰、非内容区域 selector"],','  "warnings": ["不确定或需要用户确认的点"]',"}","selector 必须来自摘要中出现的 selector。slides 至少 2 页。","",d].join(`
`)}]}}function Jg(r){const h=ld(r),s=tv(h),d=h.title?.trim()||"Untitled";return JSON.stringify({title:d,candidateCount:s.length,candidates:s},null,2)}function $g(r){const h=pv(r),s=JSON.parse(h);if(!s||typeof s!="object")throw new Error("AI 适配结果不是有效 JSON。");return s}function Wg(r,h){const s=ld(r),d=Of(s,h);return{html:r,plan:d,preview:Lf(s,d)}}function ev(r,h){const s=ld(r),d=Of(s,h);return av(s,d),{html:`<!doctype html>
${s.documentElement.outerHTML}`,plan:d,preview:Lf(s,d)}}function Of(r,h){const s=Wa(h.warnings),d=vr(r,Wa(h.ignoreSelectors),{label:"忽略区域",warnings:s,allowMultiple:!0}),v=el(r,d),u=dv(r,h.stageSelector,s,"舞台容器"),p=ov(r,h.slides||[],s);if(p.length<2)throw new Error("AI 适配计划没有识别出至少 2 页。");return{stageSelector:u,slides:p,editableTextSelectors:vr(r,Wa(h.editableTextSelectors),{label:"文本元素",warnings:s,ignoredElements:v,allowMultiple:!0}),editableMediaSelectors:vr(r,Wa(h.editableMediaSelectors),{label:"媒体元素",warnings:s,ignoredElements:v,allowMultiple:!0}),editableBoxSelectors:vr(r,Wa(h.editableBoxSelectors),{label:"视觉块",warnings:s,ignoredElements:v,allowMultiple:!0}),ignoreSelectors:d,warnings:s}}function tv(r){const h=["main","section","article","aside","header","footer","nav","div","figure","h1","h2","h3","h4","p","li","blockquote","img","picture","video","canvas","svg","iframe","[data-slide]","[data-page]","[data-deck]","[data-slides]"].join(", ");return Array.from(r.body.querySelectorAll(h)).filter(s=>!Ar(s)).filter(s=>iv(s)).slice(0,Kg).map(s=>nv(s))}function nv(r){const h={selector:mv(r),tag:r.tagName.toLowerCase()},s=r.getAttribute("id"),d=r.getAttribute("class"),v=r.getAttribute("role");if(s&&(h.id=s),d&&(h.className=la(d).slice(0,120)),v&&(h.role=v),Rf(r))h.media=uv(r);else{const u=la(r.textContent||"");u&&(h.text=u.slice(0,Pg))}return h}function iv(r){if(Rf(r)||r.matches("main, section, article, aside, header, footer, nav, [data-slide], [data-page], [data-deck], [data-slides]"))return!0;if(r.matches("h1, h2, h3, h4, p, li, blockquote"))return!!la(r.textContent||"");const h=`${r.getAttribute("id")||""} ${r.getAttribute("class")||""}`;if(/deck|slide|page|screen|card|panel|hero|section|content|chart|metric|kpi|visual|media|image/i.test(h))return!0;const s=la(r.textContent||"");return s.length>=16&&s.length<=260&&r.children.length<=6}function av(r,h){const s=h.slides.map(u=>r.querySelector(u.selector)).filter(Boolean),d=lv(r,h.stageSelector,s);rv(r,d,s).forEach((u,p)=>{hv(u),u.classList.add("slide"),u.classList.toggle("active",p===0),u.classList.toggle("visible",p===0),u.toggleAttribute("data-deck-active",p===0);const f=h.slides[p]?.title||fv(u,p);f&&!u.getAttribute("data-title")&&u.setAttribute("data-title",f.slice(0,80))}),Po(r,h.editableTextSelectors,"data-editable"),Po(r,h.editableMediaSelectors,"data-editable-media"),Po(r,h.editableBoxSelectors,"data-editable-box")}function lv(r,h,s){if(h){const v=r.querySelector(h);if(v&&v!==r.body&&v!==r.documentElement)return v}const d=s[0]?.parentElement;return d&&d!==r.body&&s.every(v=>v.parentElement===d)?d:null}function rv(r,h,s){const d=h||sv(r,s[0]);return d.id||(d.id="deckStage"),d.setAttribute("data-html-deck-editor-stage","preserve"),d.setAttribute("data-html-deck-editor-navigation","horizontal"),d.getAttribute("aria-label")||d.setAttribute("aria-label","Presentation"),s.forEach(v=>{v.parentElement!==d&&d.appendChild(v)}),s}function sv(r,h){const s=r.createElement("div");return s.id="deckStage",s.className="deck-stage",h.parentNode?.insertBefore(s,h),s}function Po(r,h,s){el(r,h).forEach(d=>{d.setAttribute(s,"")})}function ov(r,h,s){const d=new Set,v=[];return h.forEach((u,p)=>{const f=typeof u?.selector=="string"?u.selector.trim():"";if(!f){s.push(`第 ${p+1} 页缺少 selector，已跳过。`);return}const y=Er(r,f,s,`第 ${p+1} 页`);if(y.length!==1||Ar(y[0])){s.push(`第 ${p+1} 页 selector 无法唯一匹配，已跳过。`);return}if(d.has(y[0])){s.push(`第 ${p+1} 页与前面页面重复，已跳过。`);return}d.add(y[0]),v.push({selector:f,title:la(u.title||y[0].querySelector("h1, h2, h3")?.textContent||`Slide ${v.length+1}`)})}),v}function vr(r,h,s){const d=[],v=new Set;return h.forEach(u=>{const p=u.trim();if(!p||v.has(p))return;const f=Er(r,p,s.warnings,s.label).filter(y=>!Ar(y)).filter(y=>!cv(y,s.ignoredElements||[]));if(f.length===0){s.warnings.push(`${s.label} selector 未匹配到可用元素：${p}`);return}if(!s.allowMultiple&&f.length>1){s.warnings.push(`${s.label} selector 匹配过多元素：${p}`);return}v.add(p),d.push(p)}),d}function dv(r,h,s,d){if(typeof h!="string"||!h.trim())return null;const v=h.trim();return Er(r,v,s,d).filter(p=>!Ar(p)).length!==1?(s.push(`${d} selector 无法唯一匹配，已忽略。`),null):v}function Lf(r,h){return{slideCount:h.slides.length,textCount:el(r,h.editableTextSelectors).length,mediaCount:el(r,h.editableMediaSelectors).length,boxCount:el(r,h.editableBoxSelectors).length,warnings:h.warnings}}function el(r,h){const s=[],d=new Set;return h.forEach(v=>{Er(r,v).forEach(u=>{d.has(u)||(d.add(u),s.push(u))})}),s}function Er(r,h,s=[],d="selector"){try{return Array.from(r.querySelectorAll(h))}catch{return s.push(`${d} selector 语法无效：${h}`),[]}}function Ar(r){return!!r.closest(Vg)}function cv(r,h){return h.some(s=>s===r||s.contains(r))}function Rf(r){return r.matches("img, picture, video, canvas, svg, iframe, object, embed")}function uv(r){return r.matches("img")?`img ${r.getAttribute("src")||r.getAttribute("alt")||""}`.trim():r.matches("video")?`video ${r.getAttribute("src")||""}`.trim():r.matches("iframe")?`iframe ${r.getAttribute("src")||""}`.trim():r.tagName.toLowerCase()}function hv(r){r.removeAttribute("hidden"),r.getAttribute("aria-hidden")==="true"&&r.removeAttribute("aria-hidden"),r instanceof HTMLElement&&(r.style.display==="none"&&r.style.removeProperty("display"),r.style.visibility==="hidden"&&r.style.removeProperty("visibility"),Number.parseFloat(r.style.opacity||"")===0&&r.style.removeProperty("opacity"))}function fv(r,h){return la(r.querySelector("h1, h2, h3, [data-title]")?.textContent||"")||`Slide ${h+1}`}function mv(r){const h=r.getAttribute("id");if(h&&r.ownerDocument.querySelectorAll(xf(h)).length===1)return xf(h);const s=[];let d=r;for(;d&&d.tagName.toLowerCase()!=="html";){const v=d.tagName.toLowerCase();if(v==="body"){s.unshift("body");break}const p=Array.from(d.parentElement?.children||[]).filter(f=>f.tagName===d?.tagName).indexOf(d)+1;s.unshift(`${v}:nth-of-type(${Math.max(1,p)})`),d=d.parentElement}return s.join(" > ")}function xf(r){return/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(r)?`#${r}`:`[id="${r.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"]`}function pv(r){const h=r.match(/```(?:json)?\s*([\s\S]*?)```/i);if(h)return h[1].trim();const s=r.indexOf("{"),d=r.lastIndexOf("}");return s>=0&&d>s?r.slice(s,d+1):r.trim()}function Wa(r){return Array.isArray(r)?r.filter(h=>typeof h=="string").map(h=>h.trim()).filter(Boolean):[]}function la(r){return r.replace(/\s+/g," ").trim()}function ld(r){return new DOMParser().parseFromString(r,"text/html")}function yr(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Qo={exports:{}};var Sf;function gv(){return Sf||(Sf=1,(function(r,h){(function(s){r.exports=s()})(function(){return(function s(d,v,u){function p(S,B){if(!v[S]){if(!d[S]){var T=typeof yr=="function"&&yr;if(!B&&T)return T(S,!0);if(f)return f(S,!0);var D=new Error("Cannot find module '"+S+"'");throw D.code="MODULE_NOT_FOUND",D}var k=v[S]={exports:{}};d[S][0].call(k.exports,function(_){var x=d[S][1][_];return p(x||_)},k,k.exports,s,d,v,u)}return v[S].exports}for(var f=typeof yr=="function"&&yr,y=0;y<u.length;y++)p(u[y]);return p})({1:[function(s,d,v){var u=s("./utils"),p=s("./support"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";v.encode=function(y){for(var S,B,T,D,k,_,x,C=[],w=0,N=y.length,R=N,q=u.getTypeOf(y)!=="string";w<y.length;)R=N-w,T=q?(S=y[w++],B=w<N?y[w++]:0,w<N?y[w++]:0):(S=y.charCodeAt(w++),B=w<N?y.charCodeAt(w++):0,w<N?y.charCodeAt(w++):0),D=S>>2,k=(3&S)<<4|B>>4,_=1<R?(15&B)<<2|T>>6:64,x=2<R?63&T:64,C.push(f.charAt(D)+f.charAt(k)+f.charAt(_)+f.charAt(x));return C.join("")},v.decode=function(y){var S,B,T,D,k,_,x=0,C=0,w="data:";if(y.substr(0,w.length)===w)throw new Error("Invalid base64 input, it looks like a data url.");var N,R=3*(y=y.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(y.charAt(y.length-1)===f.charAt(64)&&R--,y.charAt(y.length-2)===f.charAt(64)&&R--,R%1!=0)throw new Error("Invalid base64 input, bad content length.");for(N=p.uint8array?new Uint8Array(0|R):new Array(0|R);x<y.length;)S=f.indexOf(y.charAt(x++))<<2|(D=f.indexOf(y.charAt(x++)))>>4,B=(15&D)<<4|(k=f.indexOf(y.charAt(x++)))>>2,T=(3&k)<<6|(_=f.indexOf(y.charAt(x++))),N[C++]=S,k!==64&&(N[C++]=B),_!==64&&(N[C++]=T);return N}},{"./support":30,"./utils":32}],2:[function(s,d,v){var u=s("./external"),p=s("./stream/DataWorker"),f=s("./stream/Crc32Probe"),y=s("./stream/DataLengthProbe");function S(B,T,D,k,_){this.compressedSize=B,this.uncompressedSize=T,this.crc32=D,this.compression=k,this.compressedContent=_}S.prototype={getContentWorker:function(){var B=new p(u.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new y("data_length")),T=this;return B.on("end",function(){if(this.streamInfo.data_length!==T.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),B},getCompressedWorker:function(){return new p(u.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},S.createWorkerFrom=function(B,T,D){return B.pipe(new f).pipe(new y("uncompressedSize")).pipe(T.compressWorker(D)).pipe(new y("compressedSize")).withStreamInfo("compression",T)},d.exports=S},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(s,d,v){var u=s("./stream/GenericWorker");v.STORE={magic:"\0\0",compressWorker:function(){return new u("STORE compression")},uncompressWorker:function(){return new u("STORE decompression")}},v.DEFLATE=s("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(s,d,v){var u=s("./utils"),p=(function(){for(var f,y=[],S=0;S<256;S++){f=S;for(var B=0;B<8;B++)f=1&f?3988292384^f>>>1:f>>>1;y[S]=f}return y})();d.exports=function(f,y){return f!==void 0&&f.length?u.getTypeOf(f)!=="string"?(function(S,B,T,D){var k=p,_=D+T;S^=-1;for(var x=D;x<_;x++)S=S>>>8^k[255&(S^B[x])];return-1^S})(0|y,f,f.length,0):(function(S,B,T,D){var k=p,_=D+T;S^=-1;for(var x=D;x<_;x++)S=S>>>8^k[255&(S^B.charCodeAt(x))];return-1^S})(0|y,f,f.length,0):0}},{"./utils":32}],5:[function(s,d,v){v.base64=!1,v.binary=!1,v.dir=!1,v.createFolders=!0,v.date=null,v.compression=null,v.compressionOptions=null,v.comment=null,v.unixPermissions=null,v.dosPermissions=null},{}],6:[function(s,d,v){var u=null;u=typeof Promise<"u"?Promise:s("lie"),d.exports={Promise:u}},{lie:37}],7:[function(s,d,v){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",p=s("pako"),f=s("./utils"),y=s("./stream/GenericWorker"),S=u?"uint8array":"array";function B(T,D){y.call(this,"FlateWorker/"+T),this._pako=null,this._pakoAction=T,this._pakoOptions=D,this.meta={}}v.magic="\b\0",f.inherits(B,y),B.prototype.processChunk=function(T){this.meta=T.meta,this._pako===null&&this._createPako(),this._pako.push(f.transformTo(S,T.data),!1)},B.prototype.flush=function(){y.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},B.prototype.cleanUp=function(){y.prototype.cleanUp.call(this),this._pako=null},B.prototype._createPako=function(){this._pako=new p[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var T=this;this._pako.onData=function(D){T.push({data:D,meta:T.meta})}},v.compressWorker=function(T){return new B("Deflate",T)},v.uncompressWorker=function(){return new B("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(s,d,v){function u(k,_){var x,C="";for(x=0;x<_;x++)C+=String.fromCharCode(255&k),k>>>=8;return C}function p(k,_,x,C,w,N){var R,q,I=k.file,J=k.compression,Z=N!==S.utf8encode,oe=f.transformTo("string",N(I.name)),$=f.transformTo("string",S.utf8encode(I.name)),he=I.comment,ye=f.transformTo("string",N(he)),L=f.transformTo("string",S.utf8encode(he)),ee=$.length!==I.name.length,m=L.length!==he.length,ie="",G="",Y="",fe=I.dir,le=I.date,ve={crc32:0,compressedSize:0,uncompressedSize:0};_&&!x||(ve.crc32=k.crc32,ve.compressedSize=k.compressedSize,ve.uncompressedSize=k.uncompressedSize);var b=0;_&&(b|=8),Z||!ee&&!m||(b|=2048);var z=0,te=0;fe&&(z|=16),w==="UNIX"?(te=798,z|=(function(ae,xe){var Te=ae;return ae||(Te=xe?16893:33204),(65535&Te)<<16})(I.unixPermissions,fe)):(te=20,z|=(function(ae){return 63&(ae||0)})(I.dosPermissions)),R=le.getUTCHours(),R<<=6,R|=le.getUTCMinutes(),R<<=5,R|=le.getUTCSeconds()/2,q=le.getUTCFullYear()-1980,q<<=4,q|=le.getUTCMonth()+1,q<<=5,q|=le.getUTCDate(),ee&&(G=u(1,1)+u(B(oe),4)+$,ie+="up"+u(G.length,2)+G),m&&(Y=u(1,1)+u(B(ye),4)+L,ie+="uc"+u(Y.length,2)+Y);var W="";return W+=`
\0`,W+=u(b,2),W+=J.magic,W+=u(R,2),W+=u(q,2),W+=u(ve.crc32,4),W+=u(ve.compressedSize,4),W+=u(ve.uncompressedSize,4),W+=u(oe.length,2),W+=u(ie.length,2),{fileRecord:T.LOCAL_FILE_HEADER+W+oe+ie,dirRecord:T.CENTRAL_FILE_HEADER+u(te,2)+W+u(ye.length,2)+"\0\0\0\0"+u(z,4)+u(C,4)+oe+ie+ye}}var f=s("../utils"),y=s("../stream/GenericWorker"),S=s("../utf8"),B=s("../crc32"),T=s("../signature");function D(k,_,x,C){y.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=x,this.encodeFileName=C,this.streamFiles=k,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}f.inherits(D,y),D.prototype.push=function(k){var _=k.meta.percent||0,x=this.entriesCount,C=this._sources.length;this.accumulate?this.contentBuffer.push(k):(this.bytesWritten+=k.data.length,y.prototype.push.call(this,{data:k.data,meta:{currentFile:this.currentFile,percent:x?(_+100*(x-C-1))/x:100}}))},D.prototype.openedSource=function(k){this.currentSourceOffset=this.bytesWritten,this.currentFile=k.file.name;var _=this.streamFiles&&!k.file.dir;if(_){var x=p(k,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:x.fileRecord,meta:{percent:0}})}else this.accumulate=!0},D.prototype.closedSource=function(k){this.accumulate=!1;var _=this.streamFiles&&!k.file.dir,x=p(k,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(x.dirRecord),_)this.push({data:(function(C){return T.DATA_DESCRIPTOR+u(C.crc32,4)+u(C.compressedSize,4)+u(C.uncompressedSize,4)})(k),meta:{percent:100}});else for(this.push({data:x.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},D.prototype.flush=function(){for(var k=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var x=this.bytesWritten-k,C=(function(w,N,R,q,I){var J=f.transformTo("string",I(q));return T.CENTRAL_DIRECTORY_END+"\0\0\0\0"+u(w,2)+u(w,2)+u(N,4)+u(R,4)+u(J.length,2)+J})(this.dirRecords.length,x,k,this.zipComment,this.encodeFileName);this.push({data:C,meta:{percent:100}})},D.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},D.prototype.registerPrevious=function(k){this._sources.push(k);var _=this;return k.on("data",function(x){_.processChunk(x)}),k.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),k.on("error",function(x){_.error(x)}),this},D.prototype.resume=function(){return!!y.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},D.prototype.error=function(k){var _=this._sources;if(!y.prototype.error.call(this,k))return!1;for(var x=0;x<_.length;x++)try{_[x].error(k)}catch{}return!0},D.prototype.lock=function(){y.prototype.lock.call(this);for(var k=this._sources,_=0;_<k.length;_++)k[_].lock()},d.exports=D},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(s,d,v){var u=s("../compressions"),p=s("./ZipFileWorker");v.generateWorker=function(f,y,S){var B=new p(y.streamFiles,S,y.platform,y.encodeFileName),T=0;try{f.forEach(function(D,k){T++;var _=(function(N,R){var q=N||R,I=u[q];if(!I)throw new Error(q+" is not a valid compression method !");return I})(k.options.compression,y.compression),x=k.options.compressionOptions||y.compressionOptions||{},C=k.dir,w=k.date;k._compressWorker(_,x).withStreamInfo("file",{name:D,dir:C,date:w,comment:k.comment||"",unixPermissions:k.unixPermissions,dosPermissions:k.dosPermissions}).pipe(B)}),B.entriesCount=T}catch(D){B.error(D)}return B}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(s,d,v){function u(){if(!(this instanceof u))return new u;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var p=new u;for(var f in this)typeof this[f]!="function"&&(p[f]=this[f]);return p}}(u.prototype=s("./object")).loadAsync=s("./load"),u.support=s("./support"),u.defaults=s("./defaults"),u.version="3.10.1",u.loadAsync=function(p,f){return new u().loadAsync(p,f)},u.external=s("./external"),d.exports=u},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(s,d,v){var u=s("./utils"),p=s("./external"),f=s("./utf8"),y=s("./zipEntries"),S=s("./stream/Crc32Probe"),B=s("./nodejsUtils");function T(D){return new p.Promise(function(k,_){var x=D.decompressed.getContentWorker().pipe(new S);x.on("error",function(C){_(C)}).on("end",function(){x.streamInfo.crc32!==D.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):k()}).resume()})}d.exports=function(D,k){var _=this;return k=u.extend(k||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:f.utf8decode}),B.isNode&&B.isStream(D)?p.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",D,!0,k.optimizedBinaryString,k.base64).then(function(x){var C=new y(k);return C.load(x),C}).then(function(x){var C=[p.Promise.resolve(x)],w=x.files;if(k.checkCRC32)for(var N=0;N<w.length;N++)C.push(T(w[N]));return p.Promise.all(C)}).then(function(x){for(var C=x.shift(),w=C.files,N=0;N<w.length;N++){var R=w[N],q=R.fileNameStr,I=u.resolve(R.fileNameStr);_.file(I,R.decompressed,{binary:!0,optimizedBinaryString:!0,date:R.date,dir:R.dir,comment:R.fileCommentStr.length?R.fileCommentStr:null,unixPermissions:R.unixPermissions,dosPermissions:R.dosPermissions,createFolders:k.createFolders}),R.dir||(_.file(I).unsafeOriginalName=q)}return C.zipComment.length&&(_.comment=C.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(s,d,v){var u=s("../utils"),p=s("../stream/GenericWorker");function f(y,S){p.call(this,"Nodejs stream input adapter for "+y),this._upstreamEnded=!1,this._bindStream(S)}u.inherits(f,p),f.prototype._bindStream=function(y){var S=this;(this._stream=y).pause(),y.on("data",function(B){S.push({data:B,meta:{percent:0}})}).on("error",function(B){S.isPaused?this.generatedError=B:S.error(B)}).on("end",function(){S.isPaused?S._upstreamEnded=!0:S.end()})},f.prototype.pause=function(){return!!p.prototype.pause.call(this)&&(this._stream.pause(),!0)},f.prototype.resume=function(){return!!p.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},d.exports=f},{"../stream/GenericWorker":28,"../utils":32}],13:[function(s,d,v){var u=s("readable-stream").Readable;function p(f,y,S){u.call(this,y),this._helper=f;var B=this;f.on("data",function(T,D){B.push(T)||B._helper.pause(),S&&S(D)}).on("error",function(T){B.emit("error",T)}).on("end",function(){B.push(null)})}s("../utils").inherits(p,u),p.prototype._read=function(){this._helper.resume()},d.exports=p},{"../utils":32,"readable-stream":16}],14:[function(s,d,v){d.exports={isNode:typeof Buffer<"u",newBufferFrom:function(u,p){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(u,p);if(typeof u=="number")throw new Error('The "data" argument must not be a number');return new Buffer(u,p)},allocBuffer:function(u){if(Buffer.alloc)return Buffer.alloc(u);var p=new Buffer(u);return p.fill(0),p},isBuffer:function(u){return Buffer.isBuffer(u)},isStream:function(u){return u&&typeof u.on=="function"&&typeof u.pause=="function"&&typeof u.resume=="function"}}},{}],15:[function(s,d,v){function u(I,J,Z){var oe,$=f.getTypeOf(J),he=f.extend(Z||{},B);he.date=he.date||new Date,he.compression!==null&&(he.compression=he.compression.toUpperCase()),typeof he.unixPermissions=="string"&&(he.unixPermissions=parseInt(he.unixPermissions,8)),he.unixPermissions&&16384&he.unixPermissions&&(he.dir=!0),he.dosPermissions&&16&he.dosPermissions&&(he.dir=!0),he.dir&&(I=w(I)),he.createFolders&&(oe=C(I))&&N.call(this,oe,!0);var ye=$==="string"&&he.binary===!1&&he.base64===!1;Z&&Z.binary!==void 0||(he.binary=!ye),(J instanceof T&&J.uncompressedSize===0||he.dir||!J||J.length===0)&&(he.base64=!1,he.binary=!0,J="",he.compression="STORE",$="string");var L=null;L=J instanceof T||J instanceof y?J:_.isNode&&_.isStream(J)?new x(I,J):f.prepareContent(I,J,he.binary,he.optimizedBinaryString,he.base64);var ee=new D(I,L,he);this.files[I]=ee}var p=s("./utf8"),f=s("./utils"),y=s("./stream/GenericWorker"),S=s("./stream/StreamHelper"),B=s("./defaults"),T=s("./compressedObject"),D=s("./zipObject"),k=s("./generate"),_=s("./nodejsUtils"),x=s("./nodejs/NodejsStreamInputAdapter"),C=function(I){I.slice(-1)==="/"&&(I=I.substring(0,I.length-1));var J=I.lastIndexOf("/");return 0<J?I.substring(0,J):""},w=function(I){return I.slice(-1)!=="/"&&(I+="/"),I},N=function(I,J){return J=J!==void 0?J:B.createFolders,I=w(I),this.files[I]||u.call(this,I,null,{dir:!0,createFolders:J}),this.files[I]};function R(I){return Object.prototype.toString.call(I)==="[object RegExp]"}var q={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(I){var J,Z,oe;for(J in this.files)oe=this.files[J],(Z=J.slice(this.root.length,J.length))&&J.slice(0,this.root.length)===this.root&&I(Z,oe)},filter:function(I){var J=[];return this.forEach(function(Z,oe){I(Z,oe)&&J.push(oe)}),J},file:function(I,J,Z){if(arguments.length!==1)return I=this.root+I,u.call(this,I,J,Z),this;if(R(I)){var oe=I;return this.filter(function(he,ye){return!ye.dir&&oe.test(he)})}var $=this.files[this.root+I];return $&&!$.dir?$:null},folder:function(I){if(!I)return this;if(R(I))return this.filter(function($,he){return he.dir&&I.test($)});var J=this.root+I,Z=N.call(this,J),oe=this.clone();return oe.root=Z.name,oe},remove:function(I){I=this.root+I;var J=this.files[I];if(J||(I.slice(-1)!=="/"&&(I+="/"),J=this.files[I]),J&&!J.dir)delete this.files[I];else for(var Z=this.filter(function($,he){return he.name.slice(0,I.length)===I}),oe=0;oe<Z.length;oe++)delete this.files[Z[oe].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(I){var J,Z={};try{if((Z=f.extend(I||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:p.utf8encode})).type=Z.type.toLowerCase(),Z.compression=Z.compression.toUpperCase(),Z.type==="binarystring"&&(Z.type="string"),!Z.type)throw new Error("No output type specified.");f.checkSupport(Z.type),Z.platform!=="darwin"&&Z.platform!=="freebsd"&&Z.platform!=="linux"&&Z.platform!=="sunos"||(Z.platform="UNIX"),Z.platform==="win32"&&(Z.platform="DOS");var oe=Z.comment||this.comment||"";J=k.generateWorker(this,Z,oe)}catch($){(J=new y("error")).error($)}return new S(J,Z.type||"string",Z.mimeType)},generateAsync:function(I,J){return this.generateInternalStream(I).accumulate(J)},generateNodeStream:function(I,J){return(I=I||{}).type||(I.type="nodebuffer"),this.generateInternalStream(I).toNodejsStream(J)}};d.exports=q},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(s,d,v){d.exports=s("stream")},{stream:void 0}],17:[function(s,d,v){var u=s("./DataReader");function p(f){u.call(this,f);for(var y=0;y<this.data.length;y++)f[y]=255&f[y]}s("../utils").inherits(p,u),p.prototype.byteAt=function(f){return this.data[this.zero+f]},p.prototype.lastIndexOfSignature=function(f){for(var y=f.charCodeAt(0),S=f.charCodeAt(1),B=f.charCodeAt(2),T=f.charCodeAt(3),D=this.length-4;0<=D;--D)if(this.data[D]===y&&this.data[D+1]===S&&this.data[D+2]===B&&this.data[D+3]===T)return D-this.zero;return-1},p.prototype.readAndCheckSignature=function(f){var y=f.charCodeAt(0),S=f.charCodeAt(1),B=f.charCodeAt(2),T=f.charCodeAt(3),D=this.readData(4);return y===D[0]&&S===D[1]&&B===D[2]&&T===D[3]},p.prototype.readData=function(f){if(this.checkOffset(f),f===0)return[];var y=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,y},d.exports=p},{"../utils":32,"./DataReader":18}],18:[function(s,d,v){var u=s("../utils");function p(f){this.data=f,this.length=f.length,this.index=0,this.zero=0}p.prototype={checkOffset:function(f){this.checkIndex(this.index+f)},checkIndex:function(f){if(this.length<this.zero+f||f<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+f+"). Corrupted zip ?")},setIndex:function(f){this.checkIndex(f),this.index=f},skip:function(f){this.setIndex(this.index+f)},byteAt:function(){},readInt:function(f){var y,S=0;for(this.checkOffset(f),y=this.index+f-1;y>=this.index;y--)S=(S<<8)+this.byteAt(y);return this.index+=f,S},readString:function(f){return u.transformTo("string",this.readData(f))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var f=this.readInt(4);return new Date(Date.UTC(1980+(f>>25&127),(f>>21&15)-1,f>>16&31,f>>11&31,f>>5&63,(31&f)<<1))}},d.exports=p},{"../utils":32}],19:[function(s,d,v){var u=s("./Uint8ArrayReader");function p(f){u.call(this,f)}s("../utils").inherits(p,u),p.prototype.readData=function(f){this.checkOffset(f);var y=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,y},d.exports=p},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(s,d,v){var u=s("./DataReader");function p(f){u.call(this,f)}s("../utils").inherits(p,u),p.prototype.byteAt=function(f){return this.data.charCodeAt(this.zero+f)},p.prototype.lastIndexOfSignature=function(f){return this.data.lastIndexOf(f)-this.zero},p.prototype.readAndCheckSignature=function(f){return f===this.readData(4)},p.prototype.readData=function(f){this.checkOffset(f);var y=this.data.slice(this.zero+this.index,this.zero+this.index+f);return this.index+=f,y},d.exports=p},{"../utils":32,"./DataReader":18}],21:[function(s,d,v){var u=s("./ArrayReader");function p(f){u.call(this,f)}s("../utils").inherits(p,u),p.prototype.readData=function(f){if(this.checkOffset(f),f===0)return new Uint8Array(0);var y=this.data.subarray(this.zero+this.index,this.zero+this.index+f);return this.index+=f,y},d.exports=p},{"../utils":32,"./ArrayReader":17}],22:[function(s,d,v){var u=s("../utils"),p=s("../support"),f=s("./ArrayReader"),y=s("./StringReader"),S=s("./NodeBufferReader"),B=s("./Uint8ArrayReader");d.exports=function(T){var D=u.getTypeOf(T);return u.checkSupport(D),D!=="string"||p.uint8array?D==="nodebuffer"?new S(T):p.uint8array?new B(u.transformTo("uint8array",T)):new f(u.transformTo("array",T)):new y(T)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(s,d,v){v.LOCAL_FILE_HEADER="PK",v.CENTRAL_FILE_HEADER="PK",v.CENTRAL_DIRECTORY_END="PK",v.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",v.ZIP64_CENTRAL_DIRECTORY_END="PK",v.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(s,d,v){var u=s("./GenericWorker"),p=s("../utils");function f(y){u.call(this,"ConvertWorker to "+y),this.destType=y}p.inherits(f,u),f.prototype.processChunk=function(y){this.push({data:p.transformTo(this.destType,y.data),meta:y.meta})},d.exports=f},{"../utils":32,"./GenericWorker":28}],25:[function(s,d,v){var u=s("./GenericWorker"),p=s("../crc32");function f(){u.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}s("../utils").inherits(f,u),f.prototype.processChunk=function(y){this.streamInfo.crc32=p(y.data,this.streamInfo.crc32||0),this.push(y)},d.exports=f},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(s,d,v){var u=s("../utils"),p=s("./GenericWorker");function f(y){p.call(this,"DataLengthProbe for "+y),this.propName=y,this.withStreamInfo(y,0)}u.inherits(f,p),f.prototype.processChunk=function(y){if(y){var S=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=S+y.data.length}p.prototype.processChunk.call(this,y)},d.exports=f},{"../utils":32,"./GenericWorker":28}],27:[function(s,d,v){var u=s("../utils"),p=s("./GenericWorker");function f(y){p.call(this,"DataWorker");var S=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,y.then(function(B){S.dataIsReady=!0,S.data=B,S.max=B&&B.length||0,S.type=u.getTypeOf(B),S.isPaused||S._tickAndRepeat()},function(B){S.error(B)})}u.inherits(f,p),f.prototype.cleanUp=function(){p.prototype.cleanUp.call(this),this.data=null},f.prototype.resume=function(){return!!p.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,u.delay(this._tickAndRepeat,[],this)),!0)},f.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(u.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},f.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var y=null,S=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":y=this.data.substring(this.index,S);break;case"uint8array":y=this.data.subarray(this.index,S);break;case"array":case"nodebuffer":y=this.data.slice(this.index,S)}return this.index=S,this.push({data:y,meta:{percent:this.max?this.index/this.max*100:0}})},d.exports=f},{"../utils":32,"./GenericWorker":28}],28:[function(s,d,v){function u(p){this.name=p||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}u.prototype={push:function(p){this.emit("data",p)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(p){this.emit("error",p)}return!0},error:function(p){return!this.isFinished&&(this.isPaused?this.generatedError=p:(this.isFinished=!0,this.emit("error",p),this.previous&&this.previous.error(p),this.cleanUp()),!0)},on:function(p,f){return this._listeners[p].push(f),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(p,f){if(this._listeners[p])for(var y=0;y<this._listeners[p].length;y++)this._listeners[p][y].call(this,f)},pipe:function(p){return p.registerPrevious(this)},registerPrevious:function(p){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=p.streamInfo,this.mergeStreamInfo(),this.previous=p;var f=this;return p.on("data",function(y){f.processChunk(y)}),p.on("end",function(){f.end()}),p.on("error",function(y){f.error(y)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var p=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),p=!0),this.previous&&this.previous.resume(),!p},flush:function(){},processChunk:function(p){this.push(p)},withStreamInfo:function(p,f){return this.extraStreamInfo[p]=f,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var p in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,p)&&(this.streamInfo[p]=this.extraStreamInfo[p])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var p="Worker "+this.name;return this.previous?this.previous+" -> "+p:p}},d.exports=u},{}],29:[function(s,d,v){var u=s("../utils"),p=s("./ConvertWorker"),f=s("./GenericWorker"),y=s("../base64"),S=s("../support"),B=s("../external"),T=null;if(S.nodestream)try{T=s("../nodejs/NodejsStreamOutputAdapter")}catch{}function D(_,x){return new B.Promise(function(C,w){var N=[],R=_._internalType,q=_._outputType,I=_._mimeType;_.on("data",function(J,Z){N.push(J),x&&x(Z)}).on("error",function(J){N=[],w(J)}).on("end",function(){try{var J=(function(Z,oe,$){switch(Z){case"blob":return u.newBlob(u.transformTo("arraybuffer",oe),$);case"base64":return y.encode(oe);default:return u.transformTo(Z,oe)}})(q,(function(Z,oe){var $,he=0,ye=null,L=0;for($=0;$<oe.length;$++)L+=oe[$].length;switch(Z){case"string":return oe.join("");case"array":return Array.prototype.concat.apply([],oe);case"uint8array":for(ye=new Uint8Array(L),$=0;$<oe.length;$++)ye.set(oe[$],he),he+=oe[$].length;return ye;case"nodebuffer":return Buffer.concat(oe);default:throw new Error("concat : unsupported type '"+Z+"'")}})(R,N),I);C(J)}catch(Z){w(Z)}N=[]}).resume()})}function k(_,x,C){var w=x;switch(x){case"blob":case"arraybuffer":w="uint8array";break;case"base64":w="string"}try{this._internalType=w,this._outputType=x,this._mimeType=C,u.checkSupport(w),this._worker=_.pipe(new p(w)),_.lock()}catch(N){this._worker=new f("error"),this._worker.error(N)}}k.prototype={accumulate:function(_){return D(this,_)},on:function(_,x){var C=this;return _==="data"?this._worker.on(_,function(w){x.call(C,w.data,w.meta)}):this._worker.on(_,function(){u.delay(x,arguments,C)}),this},resume:function(){return u.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(u.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new T(this,{objectMode:this._outputType!=="nodebuffer"},_)}},d.exports=k},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(s,d,v){if(v.base64=!0,v.array=!0,v.string=!0,v.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",v.nodebuffer=typeof Buffer<"u",v.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")v.blob=!1;else{var u=new ArrayBuffer(0);try{v.blob=new Blob([u],{type:"application/zip"}).size===0}catch{try{var p=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);p.append(u),v.blob=p.getBlob("application/zip").size===0}catch{v.blob=!1}}}try{v.nodestream=!!s("readable-stream").Readable}catch{v.nodestream=!1}},{"readable-stream":16}],31:[function(s,d,v){for(var u=s("./utils"),p=s("./support"),f=s("./nodejsUtils"),y=s("./stream/GenericWorker"),S=new Array(256),B=0;B<256;B++)S[B]=252<=B?6:248<=B?5:240<=B?4:224<=B?3:192<=B?2:1;S[254]=S[254]=1;function T(){y.call(this,"utf-8 decode"),this.leftOver=null}function D(){y.call(this,"utf-8 encode")}v.utf8encode=function(k){return p.nodebuffer?f.newBufferFrom(k,"utf-8"):(function(_){var x,C,w,N,R,q=_.length,I=0;for(N=0;N<q;N++)(64512&(C=_.charCodeAt(N)))==55296&&N+1<q&&(64512&(w=_.charCodeAt(N+1)))==56320&&(C=65536+(C-55296<<10)+(w-56320),N++),I+=C<128?1:C<2048?2:C<65536?3:4;for(x=p.uint8array?new Uint8Array(I):new Array(I),N=R=0;R<I;N++)(64512&(C=_.charCodeAt(N)))==55296&&N+1<q&&(64512&(w=_.charCodeAt(N+1)))==56320&&(C=65536+(C-55296<<10)+(w-56320),N++),C<128?x[R++]=C:(C<2048?x[R++]=192|C>>>6:(C<65536?x[R++]=224|C>>>12:(x[R++]=240|C>>>18,x[R++]=128|C>>>12&63),x[R++]=128|C>>>6&63),x[R++]=128|63&C);return x})(k)},v.utf8decode=function(k){return p.nodebuffer?u.transformTo("nodebuffer",k).toString("utf-8"):(function(_){var x,C,w,N,R=_.length,q=new Array(2*R);for(x=C=0;x<R;)if((w=_[x++])<128)q[C++]=w;else if(4<(N=S[w]))q[C++]=65533,x+=N-1;else{for(w&=N===2?31:N===3?15:7;1<N&&x<R;)w=w<<6|63&_[x++],N--;1<N?q[C++]=65533:w<65536?q[C++]=w:(w-=65536,q[C++]=55296|w>>10&1023,q[C++]=56320|1023&w)}return q.length!==C&&(q.subarray?q=q.subarray(0,C):q.length=C),u.applyFromCharCode(q)})(k=u.transformTo(p.uint8array?"uint8array":"array",k))},u.inherits(T,y),T.prototype.processChunk=function(k){var _=u.transformTo(p.uint8array?"uint8array":"array",k.data);if(this.leftOver&&this.leftOver.length){if(p.uint8array){var x=_;(_=new Uint8Array(x.length+this.leftOver.length)).set(this.leftOver,0),_.set(x,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var C=(function(N,R){var q;for((R=R||N.length)>N.length&&(R=N.length),q=R-1;0<=q&&(192&N[q])==128;)q--;return q<0||q===0?R:q+S[N[q]]>R?q:R})(_),w=_;C!==_.length&&(p.uint8array?(w=_.subarray(0,C),this.leftOver=_.subarray(C,_.length)):(w=_.slice(0,C),this.leftOver=_.slice(C,_.length))),this.push({data:v.utf8decode(w),meta:k.meta})},T.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:v.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},v.Utf8DecodeWorker=T,u.inherits(D,y),D.prototype.processChunk=function(k){this.push({data:v.utf8encode(k.data),meta:k.meta})},v.Utf8EncodeWorker=D},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(s,d,v){var u=s("./support"),p=s("./base64"),f=s("./nodejsUtils"),y=s("./external");function S(x){return x}function B(x,C){for(var w=0;w<x.length;++w)C[w]=255&x.charCodeAt(w);return C}s("setimmediate"),v.newBlob=function(x,C){v.checkSupport("blob");try{return new Blob([x],{type:C})}catch{try{var w=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return w.append(x),w.getBlob(C)}catch{throw new Error("Bug : can't construct the Blob.")}}};var T={stringifyByChunk:function(x,C,w){var N=[],R=0,q=x.length;if(q<=w)return String.fromCharCode.apply(null,x);for(;R<q;)C==="array"||C==="nodebuffer"?N.push(String.fromCharCode.apply(null,x.slice(R,Math.min(R+w,q)))):N.push(String.fromCharCode.apply(null,x.subarray(R,Math.min(R+w,q)))),R+=w;return N.join("")},stringifyByChar:function(x){for(var C="",w=0;w<x.length;w++)C+=String.fromCharCode(x[w]);return C},applyCanBeUsed:{uint8array:(function(){try{return u.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return u.nodebuffer&&String.fromCharCode.apply(null,f.allocBuffer(1)).length===1}catch{return!1}})()}};function D(x){var C=65536,w=v.getTypeOf(x),N=!0;if(w==="uint8array"?N=T.applyCanBeUsed.uint8array:w==="nodebuffer"&&(N=T.applyCanBeUsed.nodebuffer),N)for(;1<C;)try{return T.stringifyByChunk(x,w,C)}catch{C=Math.floor(C/2)}return T.stringifyByChar(x)}function k(x,C){for(var w=0;w<x.length;w++)C[w]=x[w];return C}v.applyFromCharCode=D;var _={};_.string={string:S,array:function(x){return B(x,new Array(x.length))},arraybuffer:function(x){return _.string.uint8array(x).buffer},uint8array:function(x){return B(x,new Uint8Array(x.length))},nodebuffer:function(x){return B(x,f.allocBuffer(x.length))}},_.array={string:D,array:S,arraybuffer:function(x){return new Uint8Array(x).buffer},uint8array:function(x){return new Uint8Array(x)},nodebuffer:function(x){return f.newBufferFrom(x)}},_.arraybuffer={string:function(x){return D(new Uint8Array(x))},array:function(x){return k(new Uint8Array(x),new Array(x.byteLength))},arraybuffer:S,uint8array:function(x){return new Uint8Array(x)},nodebuffer:function(x){return f.newBufferFrom(new Uint8Array(x))}},_.uint8array={string:D,array:function(x){return k(x,new Array(x.length))},arraybuffer:function(x){return x.buffer},uint8array:S,nodebuffer:function(x){return f.newBufferFrom(x)}},_.nodebuffer={string:D,array:function(x){return k(x,new Array(x.length))},arraybuffer:function(x){return _.nodebuffer.uint8array(x).buffer},uint8array:function(x){return k(x,new Uint8Array(x.length))},nodebuffer:S},v.transformTo=function(x,C){if(C=C||"",!x)return C;v.checkSupport(x);var w=v.getTypeOf(C);return _[w][x](C)},v.resolve=function(x){for(var C=x.split("/"),w=[],N=0;N<C.length;N++){var R=C[N];R==="."||R===""&&N!==0&&N!==C.length-1||(R===".."?w.pop():w.push(R))}return w.join("/")},v.getTypeOf=function(x){return typeof x=="string"?"string":Object.prototype.toString.call(x)==="[object Array]"?"array":u.nodebuffer&&f.isBuffer(x)?"nodebuffer":u.uint8array&&x instanceof Uint8Array?"uint8array":u.arraybuffer&&x instanceof ArrayBuffer?"arraybuffer":void 0},v.checkSupport=function(x){if(!u[x.toLowerCase()])throw new Error(x+" is not supported by this platform")},v.MAX_VALUE_16BITS=65535,v.MAX_VALUE_32BITS=-1,v.pretty=function(x){var C,w,N="";for(w=0;w<(x||"").length;w++)N+="\\x"+((C=x.charCodeAt(w))<16?"0":"")+C.toString(16).toUpperCase();return N},v.delay=function(x,C,w){setImmediate(function(){x.apply(w||null,C||[])})},v.inherits=function(x,C){function w(){}w.prototype=C.prototype,x.prototype=new w},v.extend=function(){var x,C,w={};for(x=0;x<arguments.length;x++)for(C in arguments[x])Object.prototype.hasOwnProperty.call(arguments[x],C)&&w[C]===void 0&&(w[C]=arguments[x][C]);return w},v.prepareContent=function(x,C,w,N,R){return y.Promise.resolve(C).then(function(q){return u.blob&&(q instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(q))!==-1)&&typeof FileReader<"u"?new y.Promise(function(I,J){var Z=new FileReader;Z.onload=function(oe){I(oe.target.result)},Z.onerror=function(oe){J(oe.target.error)},Z.readAsArrayBuffer(q)}):q}).then(function(q){var I=v.getTypeOf(q);return I?(I==="arraybuffer"?q=v.transformTo("uint8array",q):I==="string"&&(R?q=p.decode(q):w&&N!==!0&&(q=(function(J){return B(J,u.uint8array?new Uint8Array(J.length):new Array(J.length))})(q))),q):y.Promise.reject(new Error("Can't read the data of '"+x+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(s,d,v){var u=s("./reader/readerFor"),p=s("./utils"),f=s("./signature"),y=s("./zipEntry"),S=s("./support");function B(T){this.files=[],this.loadOptions=T}B.prototype={checkSignature:function(T){if(!this.reader.readAndCheckSignature(T)){this.reader.index-=4;var D=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+p.pretty(D)+", expected "+p.pretty(T)+")")}},isSignature:function(T,D){var k=this.reader.index;this.reader.setIndex(T);var _=this.reader.readString(4)===D;return this.reader.setIndex(k),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var T=this.reader.readData(this.zipCommentLength),D=S.uint8array?"uint8array":"array",k=p.transformTo(D,T);this.zipComment=this.loadOptions.decodeFileName(k)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var T,D,k,_=this.zip64EndOfCentralSize-44;0<_;)T=this.reader.readInt(2),D=this.reader.readInt(4),k=this.reader.readData(D),this.zip64ExtensibleData[T]={id:T,length:D,value:k}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var T,D;for(T=0;T<this.files.length;T++)D=this.files[T],this.reader.setIndex(D.localHeaderOffset),this.checkSignature(f.LOCAL_FILE_HEADER),D.readLocalPart(this.reader),D.handleUTF8(),D.processAttributes()},readCentralDir:function(){var T;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(f.CENTRAL_FILE_HEADER);)(T=new y({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(T);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var T=this.reader.lastIndexOfSignature(f.CENTRAL_DIRECTORY_END);if(T<0)throw this.isSignature(0,f.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(T);var D=T;if(this.checkSignature(f.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===p.MAX_VALUE_16BITS||this.diskWithCentralDirStart===p.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===p.MAX_VALUE_16BITS||this.centralDirRecords===p.MAX_VALUE_16BITS||this.centralDirSize===p.MAX_VALUE_32BITS||this.centralDirOffset===p.MAX_VALUE_32BITS){if(this.zip64=!0,(T=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(T),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,f.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var k=this.centralDirOffset+this.centralDirSize;this.zip64&&(k+=20,k+=12+this.zip64EndOfCentralSize);var _=D-k;if(0<_)this.isSignature(D,f.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(T){this.reader=u(T)},load:function(T){this.prepareReader(T),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},d.exports=B},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(s,d,v){var u=s("./reader/readerFor"),p=s("./utils"),f=s("./compressedObject"),y=s("./crc32"),S=s("./utf8"),B=s("./compressions"),T=s("./support");function D(k,_){this.options=k,this.loadOptions=_}D.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(k){var _,x;if(k.skip(22),this.fileNameLength=k.readInt(2),x=k.readInt(2),this.fileName=k.readData(this.fileNameLength),k.skip(x),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=(function(C){for(var w in B)if(Object.prototype.hasOwnProperty.call(B,w)&&B[w].magic===C)return B[w];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+p.pretty(this.compressionMethod)+" unknown (inner file : "+p.transformTo("string",this.fileName)+")");this.decompressed=new f(this.compressedSize,this.uncompressedSize,this.crc32,_,k.readData(this.compressedSize))},readCentralPart:function(k){this.versionMadeBy=k.readInt(2),k.skip(2),this.bitFlag=k.readInt(2),this.compressionMethod=k.readString(2),this.date=k.readDate(),this.crc32=k.readInt(4),this.compressedSize=k.readInt(4),this.uncompressedSize=k.readInt(4);var _=k.readInt(2);if(this.extraFieldsLength=k.readInt(2),this.fileCommentLength=k.readInt(2),this.diskNumberStart=k.readInt(2),this.internalFileAttributes=k.readInt(2),this.externalFileAttributes=k.readInt(4),this.localHeaderOffset=k.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");k.skip(_),this.readExtraFields(k),this.parseZIP64ExtraField(k),this.fileComment=k.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var k=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),k==0&&(this.dosPermissions=63&this.externalFileAttributes),k==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var k=u(this.extraFields[1].value);this.uncompressedSize===p.MAX_VALUE_32BITS&&(this.uncompressedSize=k.readInt(8)),this.compressedSize===p.MAX_VALUE_32BITS&&(this.compressedSize=k.readInt(8)),this.localHeaderOffset===p.MAX_VALUE_32BITS&&(this.localHeaderOffset=k.readInt(8)),this.diskNumberStart===p.MAX_VALUE_32BITS&&(this.diskNumberStart=k.readInt(4))}},readExtraFields:function(k){var _,x,C,w=k.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});k.index+4<w;)_=k.readInt(2),x=k.readInt(2),C=k.readData(x),this.extraFields[_]={id:_,length:x,value:C};k.setIndex(w)},handleUTF8:function(){var k=T.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=S.utf8decode(this.fileName),this.fileCommentStr=S.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var x=p.transformTo(k,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(x)}var C=this.findExtraFieldUnicodeComment();if(C!==null)this.fileCommentStr=C;else{var w=p.transformTo(k,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(w)}}},findExtraFieldUnicodePath:function(){var k=this.extraFields[28789];if(k){var _=u(k.value);return _.readInt(1)!==1||y(this.fileName)!==_.readInt(4)?null:S.utf8decode(_.readData(k.length-5))}return null},findExtraFieldUnicodeComment:function(){var k=this.extraFields[25461];if(k){var _=u(k.value);return _.readInt(1)!==1||y(this.fileComment)!==_.readInt(4)?null:S.utf8decode(_.readData(k.length-5))}return null}},d.exports=D},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(s,d,v){function u(_,x,C){this.name=_,this.dir=C.dir,this.date=C.date,this.comment=C.comment,this.unixPermissions=C.unixPermissions,this.dosPermissions=C.dosPermissions,this._data=x,this._dataBinary=C.binary,this.options={compression:C.compression,compressionOptions:C.compressionOptions}}var p=s("./stream/StreamHelper"),f=s("./stream/DataWorker"),y=s("./utf8"),S=s("./compressedObject"),B=s("./stream/GenericWorker");u.prototype={internalStream:function(_){var x=null,C="string";try{if(!_)throw new Error("No output type specified.");var w=(C=_.toLowerCase())==="string"||C==="text";C!=="binarystring"&&C!=="text"||(C="string"),x=this._decompressWorker();var N=!this._dataBinary;N&&!w&&(x=x.pipe(new y.Utf8EncodeWorker)),!N&&w&&(x=x.pipe(new y.Utf8DecodeWorker))}catch(R){(x=new B("error")).error(R)}return new p(x,C,"")},async:function(_,x){return this.internalStream(_).accumulate(x)},nodeStream:function(_,x){return this.internalStream(_||"nodebuffer").toNodejsStream(x)},_compressWorker:function(_,x){if(this._data instanceof S&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var C=this._decompressWorker();return this._dataBinary||(C=C.pipe(new y.Utf8EncodeWorker)),S.createWorkerFrom(C,_,x)},_decompressWorker:function(){return this._data instanceof S?this._data.getContentWorker():this._data instanceof B?this._data:new f(this._data)}};for(var T=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],D=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},k=0;k<T.length;k++)u.prototype[T[k]]=D;d.exports=u},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(s,d,v){(function(u){var p,f,y=u.MutationObserver||u.WebKitMutationObserver;if(y){var S=0,B=new y(_),T=u.document.createTextNode("");B.observe(T,{characterData:!0}),p=function(){T.data=S=++S%2}}else if(u.setImmediate||u.MessageChannel===void 0)p="document"in u&&"onreadystatechange"in u.document.createElement("script")?function(){var x=u.document.createElement("script");x.onreadystatechange=function(){_(),x.onreadystatechange=null,x.parentNode.removeChild(x),x=null},u.document.documentElement.appendChild(x)}:function(){setTimeout(_,0)};else{var D=new u.MessageChannel;D.port1.onmessage=_,p=function(){D.port2.postMessage(0)}}var k=[];function _(){var x,C;f=!0;for(var w=k.length;w;){for(C=k,k=[],x=-1;++x<w;)C[x]();w=k.length}f=!1}d.exports=function(x){k.push(x)!==1||f||p()}}).call(this,typeof gr<"u"?gr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(s,d,v){var u=s("immediate");function p(){}var f={},y=["REJECTED"],S=["FULFILLED"],B=["PENDING"];function T(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=B,this.queue=[],this.outcome=void 0,w!==p&&x(this,w)}function D(w,N,R){this.promise=w,typeof N=="function"&&(this.onFulfilled=N,this.callFulfilled=this.otherCallFulfilled),typeof R=="function"&&(this.onRejected=R,this.callRejected=this.otherCallRejected)}function k(w,N,R){u(function(){var q;try{q=N(R)}catch(I){return f.reject(w,I)}q===w?f.reject(w,new TypeError("Cannot resolve promise with itself")):f.resolve(w,q)})}function _(w){var N=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof N=="function")return function(){N.apply(w,arguments)}}function x(w,N){var R=!1;function q(Z){R||(R=!0,f.reject(w,Z))}function I(Z){R||(R=!0,f.resolve(w,Z))}var J=C(function(){N(I,q)});J.status==="error"&&q(J.value)}function C(w,N){var R={};try{R.value=w(N),R.status="success"}catch(q){R.status="error",R.value=q}return R}(d.exports=T).prototype.finally=function(w){if(typeof w!="function")return this;var N=this.constructor;return this.then(function(R){return N.resolve(w()).then(function(){return R})},function(R){return N.resolve(w()).then(function(){throw R})})},T.prototype.catch=function(w){return this.then(null,w)},T.prototype.then=function(w,N){if(typeof w!="function"&&this.state===S||typeof N!="function"&&this.state===y)return this;var R=new this.constructor(p);return this.state!==B?k(R,this.state===S?w:N,this.outcome):this.queue.push(new D(R,w,N)),R},D.prototype.callFulfilled=function(w){f.resolve(this.promise,w)},D.prototype.otherCallFulfilled=function(w){k(this.promise,this.onFulfilled,w)},D.prototype.callRejected=function(w){f.reject(this.promise,w)},D.prototype.otherCallRejected=function(w){k(this.promise,this.onRejected,w)},f.resolve=function(w,N){var R=C(_,N);if(R.status==="error")return f.reject(w,R.value);var q=R.value;if(q)x(w,q);else{w.state=S,w.outcome=N;for(var I=-1,J=w.queue.length;++I<J;)w.queue[I].callFulfilled(N)}return w},f.reject=function(w,N){w.state=y,w.outcome=N;for(var R=-1,q=w.queue.length;++R<q;)w.queue[R].callRejected(N);return w},T.resolve=function(w){return w instanceof this?w:f.resolve(new this(p),w)},T.reject=function(w){var N=new this(p);return f.reject(N,w)},T.all=function(w){var N=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=w.length,q=!1;if(!R)return this.resolve([]);for(var I=new Array(R),J=0,Z=-1,oe=new this(p);++Z<R;)$(w[Z],Z);return oe;function $(he,ye){N.resolve(he).then(function(L){I[ye]=L,++J!==R||q||(q=!0,f.resolve(oe,I))},function(L){q||(q=!0,f.reject(oe,L))})}},T.race=function(w){var N=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var R=w.length,q=!1;if(!R)return this.resolve([]);for(var I=-1,J=new this(p);++I<R;)Z=w[I],N.resolve(Z).then(function(oe){q||(q=!0,f.resolve(J,oe))},function(oe){q||(q=!0,f.reject(J,oe))});var Z;return J}},{immediate:36}],38:[function(s,d,v){var u={};(0,s("./lib/utils/common").assign)(u,s("./lib/deflate"),s("./lib/inflate"),s("./lib/zlib/constants")),d.exports=u},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(s,d,v){var u=s("./zlib/deflate"),p=s("./utils/common"),f=s("./utils/strings"),y=s("./zlib/messages"),S=s("./zlib/zstream"),B=Object.prototype.toString,T=0,D=-1,k=0,_=8;function x(w){if(!(this instanceof x))return new x(w);this.options=p.assign({level:D,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:k,to:""},w||{});var N=this.options;N.raw&&0<N.windowBits?N.windowBits=-N.windowBits:N.gzip&&0<N.windowBits&&N.windowBits<16&&(N.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new S,this.strm.avail_out=0;var R=u.deflateInit2(this.strm,N.level,N.method,N.windowBits,N.memLevel,N.strategy);if(R!==T)throw new Error(y[R]);if(N.header&&u.deflateSetHeader(this.strm,N.header),N.dictionary){var q;if(q=typeof N.dictionary=="string"?f.string2buf(N.dictionary):B.call(N.dictionary)==="[object ArrayBuffer]"?new Uint8Array(N.dictionary):N.dictionary,(R=u.deflateSetDictionary(this.strm,q))!==T)throw new Error(y[R]);this._dict_set=!0}}function C(w,N){var R=new x(N);if(R.push(w,!0),R.err)throw R.msg||y[R.err];return R.result}x.prototype.push=function(w,N){var R,q,I=this.strm,J=this.options.chunkSize;if(this.ended)return!1;q=N===~~N?N:N===!0?4:0,typeof w=="string"?I.input=f.string2buf(w):B.call(w)==="[object ArrayBuffer]"?I.input=new Uint8Array(w):I.input=w,I.next_in=0,I.avail_in=I.input.length;do{if(I.avail_out===0&&(I.output=new p.Buf8(J),I.next_out=0,I.avail_out=J),(R=u.deflate(I,q))!==1&&R!==T)return this.onEnd(R),!(this.ended=!0);I.avail_out!==0&&(I.avail_in!==0||q!==4&&q!==2)||(this.options.to==="string"?this.onData(f.buf2binstring(p.shrinkBuf(I.output,I.next_out))):this.onData(p.shrinkBuf(I.output,I.next_out)))}while((0<I.avail_in||I.avail_out===0)&&R!==1);return q===4?(R=u.deflateEnd(this.strm),this.onEnd(R),this.ended=!0,R===T):q!==2||(this.onEnd(T),!(I.avail_out=0))},x.prototype.onData=function(w){this.chunks.push(w)},x.prototype.onEnd=function(w){w===T&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=p.flattenChunks(this.chunks)),this.chunks=[],this.err=w,this.msg=this.strm.msg},v.Deflate=x,v.deflate=C,v.deflateRaw=function(w,N){return(N=N||{}).raw=!0,C(w,N)},v.gzip=function(w,N){return(N=N||{}).gzip=!0,C(w,N)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(s,d,v){var u=s("./zlib/inflate"),p=s("./utils/common"),f=s("./utils/strings"),y=s("./zlib/constants"),S=s("./zlib/messages"),B=s("./zlib/zstream"),T=s("./zlib/gzheader"),D=Object.prototype.toString;function k(x){if(!(this instanceof k))return new k(x);this.options=p.assign({chunkSize:16384,windowBits:0,to:""},x||{});var C=this.options;C.raw&&0<=C.windowBits&&C.windowBits<16&&(C.windowBits=-C.windowBits,C.windowBits===0&&(C.windowBits=-15)),!(0<=C.windowBits&&C.windowBits<16)||x&&x.windowBits||(C.windowBits+=32),15<C.windowBits&&C.windowBits<48&&(15&C.windowBits)==0&&(C.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new B,this.strm.avail_out=0;var w=u.inflateInit2(this.strm,C.windowBits);if(w!==y.Z_OK)throw new Error(S[w]);this.header=new T,u.inflateGetHeader(this.strm,this.header)}function _(x,C){var w=new k(C);if(w.push(x,!0),w.err)throw w.msg||S[w.err];return w.result}k.prototype.push=function(x,C){var w,N,R,q,I,J,Z=this.strm,oe=this.options.chunkSize,$=this.options.dictionary,he=!1;if(this.ended)return!1;N=C===~~C?C:C===!0?y.Z_FINISH:y.Z_NO_FLUSH,typeof x=="string"?Z.input=f.binstring2buf(x):D.call(x)==="[object ArrayBuffer]"?Z.input=new Uint8Array(x):Z.input=x,Z.next_in=0,Z.avail_in=Z.input.length;do{if(Z.avail_out===0&&(Z.output=new p.Buf8(oe),Z.next_out=0,Z.avail_out=oe),(w=u.inflate(Z,y.Z_NO_FLUSH))===y.Z_NEED_DICT&&$&&(J=typeof $=="string"?f.string2buf($):D.call($)==="[object ArrayBuffer]"?new Uint8Array($):$,w=u.inflateSetDictionary(this.strm,J)),w===y.Z_BUF_ERROR&&he===!0&&(w=y.Z_OK,he=!1),w!==y.Z_STREAM_END&&w!==y.Z_OK)return this.onEnd(w),!(this.ended=!0);Z.next_out&&(Z.avail_out!==0&&w!==y.Z_STREAM_END&&(Z.avail_in!==0||N!==y.Z_FINISH&&N!==y.Z_SYNC_FLUSH)||(this.options.to==="string"?(R=f.utf8border(Z.output,Z.next_out),q=Z.next_out-R,I=f.buf2string(Z.output,R),Z.next_out=q,Z.avail_out=oe-q,q&&p.arraySet(Z.output,Z.output,R,q,0),this.onData(I)):this.onData(p.shrinkBuf(Z.output,Z.next_out)))),Z.avail_in===0&&Z.avail_out===0&&(he=!0)}while((0<Z.avail_in||Z.avail_out===0)&&w!==y.Z_STREAM_END);return w===y.Z_STREAM_END&&(N=y.Z_FINISH),N===y.Z_FINISH?(w=u.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===y.Z_OK):N!==y.Z_SYNC_FLUSH||(this.onEnd(y.Z_OK),!(Z.avail_out=0))},k.prototype.onData=function(x){this.chunks.push(x)},k.prototype.onEnd=function(x){x===y.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=p.flattenChunks(this.chunks)),this.chunks=[],this.err=x,this.msg=this.strm.msg},v.Inflate=k,v.inflate=_,v.inflateRaw=function(x,C){return(C=C||{}).raw=!0,_(x,C)},v.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(s,d,v){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";v.assign=function(y){for(var S=Array.prototype.slice.call(arguments,1);S.length;){var B=S.shift();if(B){if(typeof B!="object")throw new TypeError(B+"must be non-object");for(var T in B)B.hasOwnProperty(T)&&(y[T]=B[T])}}return y},v.shrinkBuf=function(y,S){return y.length===S?y:y.subarray?y.subarray(0,S):(y.length=S,y)};var p={arraySet:function(y,S,B,T,D){if(S.subarray&&y.subarray)y.set(S.subarray(B,B+T),D);else for(var k=0;k<T;k++)y[D+k]=S[B+k]},flattenChunks:function(y){var S,B,T,D,k,_;for(S=T=0,B=y.length;S<B;S++)T+=y[S].length;for(_=new Uint8Array(T),S=D=0,B=y.length;S<B;S++)k=y[S],_.set(k,D),D+=k.length;return _}},f={arraySet:function(y,S,B,T,D){for(var k=0;k<T;k++)y[D+k]=S[B+k]},flattenChunks:function(y){return[].concat.apply([],y)}};v.setTyped=function(y){y?(v.Buf8=Uint8Array,v.Buf16=Uint16Array,v.Buf32=Int32Array,v.assign(v,p)):(v.Buf8=Array,v.Buf16=Array,v.Buf32=Array,v.assign(v,f))},v.setTyped(u)},{}],42:[function(s,d,v){var u=s("./common"),p=!0,f=!0;try{String.fromCharCode.apply(null,[0])}catch{p=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{f=!1}for(var y=new u.Buf8(256),S=0;S<256;S++)y[S]=252<=S?6:248<=S?5:240<=S?4:224<=S?3:192<=S?2:1;function B(T,D){if(D<65537&&(T.subarray&&f||!T.subarray&&p))return String.fromCharCode.apply(null,u.shrinkBuf(T,D));for(var k="",_=0;_<D;_++)k+=String.fromCharCode(T[_]);return k}y[254]=y[254]=1,v.string2buf=function(T){var D,k,_,x,C,w=T.length,N=0;for(x=0;x<w;x++)(64512&(k=T.charCodeAt(x)))==55296&&x+1<w&&(64512&(_=T.charCodeAt(x+1)))==56320&&(k=65536+(k-55296<<10)+(_-56320),x++),N+=k<128?1:k<2048?2:k<65536?3:4;for(D=new u.Buf8(N),x=C=0;C<N;x++)(64512&(k=T.charCodeAt(x)))==55296&&x+1<w&&(64512&(_=T.charCodeAt(x+1)))==56320&&(k=65536+(k-55296<<10)+(_-56320),x++),k<128?D[C++]=k:(k<2048?D[C++]=192|k>>>6:(k<65536?D[C++]=224|k>>>12:(D[C++]=240|k>>>18,D[C++]=128|k>>>12&63),D[C++]=128|k>>>6&63),D[C++]=128|63&k);return D},v.buf2binstring=function(T){return B(T,T.length)},v.binstring2buf=function(T){for(var D=new u.Buf8(T.length),k=0,_=D.length;k<_;k++)D[k]=T.charCodeAt(k);return D},v.buf2string=function(T,D){var k,_,x,C,w=D||T.length,N=new Array(2*w);for(k=_=0;k<w;)if((x=T[k++])<128)N[_++]=x;else if(4<(C=y[x]))N[_++]=65533,k+=C-1;else{for(x&=C===2?31:C===3?15:7;1<C&&k<w;)x=x<<6|63&T[k++],C--;1<C?N[_++]=65533:x<65536?N[_++]=x:(x-=65536,N[_++]=55296|x>>10&1023,N[_++]=56320|1023&x)}return B(N,_)},v.utf8border=function(T,D){var k;for((D=D||T.length)>T.length&&(D=T.length),k=D-1;0<=k&&(192&T[k])==128;)k--;return k<0||k===0?D:k+y[T[k]]>D?k:D}},{"./common":41}],43:[function(s,d,v){d.exports=function(u,p,f,y){for(var S=65535&u|0,B=u>>>16&65535|0,T=0;f!==0;){for(f-=T=2e3<f?2e3:f;B=B+(S=S+p[y++]|0)|0,--T;);S%=65521,B%=65521}return S|B<<16|0}},{}],44:[function(s,d,v){d.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(s,d,v){var u=(function(){for(var p,f=[],y=0;y<256;y++){p=y;for(var S=0;S<8;S++)p=1&p?3988292384^p>>>1:p>>>1;f[y]=p}return f})();d.exports=function(p,f,y,S){var B=u,T=S+y;p^=-1;for(var D=S;D<T;D++)p=p>>>8^B[255&(p^f[D])];return-1^p}},{}],46:[function(s,d,v){var u,p=s("../utils/common"),f=s("./trees"),y=s("./adler32"),S=s("./crc32"),B=s("./messages"),T=0,D=4,k=0,_=-2,x=-1,C=4,w=2,N=8,R=9,q=286,I=30,J=19,Z=2*q+1,oe=15,$=3,he=258,ye=he+$+1,L=42,ee=113,m=1,ie=2,G=3,Y=4;function fe(c,re){return c.msg=B[re],re}function le(c){return(c<<1)-(4<c?9:0)}function ve(c){for(var re=c.length;0<=--re;)c[re]=0}function b(c){var re=c.state,j=re.pending;j>c.avail_out&&(j=c.avail_out),j!==0&&(p.arraySet(c.output,re.pending_buf,re.pending_out,j,c.next_out),c.next_out+=j,re.pending_out+=j,c.total_out+=j,c.avail_out-=j,re.pending-=j,re.pending===0&&(re.pending_out=0))}function z(c,re){f._tr_flush_block(c,0<=c.block_start?c.block_start:-1,c.strstart-c.block_start,re),c.block_start=c.strstart,b(c.strm)}function te(c,re){c.pending_buf[c.pending++]=re}function W(c,re){c.pending_buf[c.pending++]=re>>>8&255,c.pending_buf[c.pending++]=255&re}function ae(c,re){var j,A,E=c.max_chain_length,U=c.strstart,ce=c.prev_length,ue=c.nice_match,K=c.strstart>c.w_size-ye?c.strstart-(c.w_size-ye):0,me=c.window,ge=c.w_mask,pe=c.prev,ke=c.strstart+he,Ie=me[U+ce-1],Be=me[U+ce];c.prev_length>=c.good_match&&(E>>=2),ue>c.lookahead&&(ue=c.lookahead);do if(me[(j=re)+ce]===Be&&me[j+ce-1]===Ie&&me[j]===me[U]&&me[++j]===me[U+1]){U+=2,j++;do;while(me[++U]===me[++j]&&me[++U]===me[++j]&&me[++U]===me[++j]&&me[++U]===me[++j]&&me[++U]===me[++j]&&me[++U]===me[++j]&&me[++U]===me[++j]&&me[++U]===me[++j]&&U<ke);if(A=he-(ke-U),U=ke-he,ce<A){if(c.match_start=re,ue<=(ce=A))break;Ie=me[U+ce-1],Be=me[U+ce]}}while((re=pe[re&ge])>K&&--E!=0);return ce<=c.lookahead?ce:c.lookahead}function xe(c){var re,j,A,E,U,ce,ue,K,me,ge,pe=c.w_size;do{if(E=c.window_size-c.lookahead-c.strstart,c.strstart>=pe+(pe-ye)){for(p.arraySet(c.window,c.window,pe,pe,0),c.match_start-=pe,c.strstart-=pe,c.block_start-=pe,re=j=c.hash_size;A=c.head[--re],c.head[re]=pe<=A?A-pe:0,--j;);for(re=j=pe;A=c.prev[--re],c.prev[re]=pe<=A?A-pe:0,--j;);E+=pe}if(c.strm.avail_in===0)break;if(ce=c.strm,ue=c.window,K=c.strstart+c.lookahead,me=E,ge=void 0,ge=ce.avail_in,me<ge&&(ge=me),j=ge===0?0:(ce.avail_in-=ge,p.arraySet(ue,ce.input,ce.next_in,ge,K),ce.state.wrap===1?ce.adler=y(ce.adler,ue,ge,K):ce.state.wrap===2&&(ce.adler=S(ce.adler,ue,ge,K)),ce.next_in+=ge,ce.total_in+=ge,ge),c.lookahead+=j,c.lookahead+c.insert>=$)for(U=c.strstart-c.insert,c.ins_h=c.window[U],c.ins_h=(c.ins_h<<c.hash_shift^c.window[U+1])&c.hash_mask;c.insert&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[U+$-1])&c.hash_mask,c.prev[U&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=U,U++,c.insert--,!(c.lookahead+c.insert<$)););}while(c.lookahead<ye&&c.strm.avail_in!==0)}function Te(c,re){for(var j,A;;){if(c.lookahead<ye){if(xe(c),c.lookahead<ye&&re===T)return m;if(c.lookahead===0)break}if(j=0,c.lookahead>=$&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+$-1])&c.hash_mask,j=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),j!==0&&c.strstart-j<=c.w_size-ye&&(c.match_length=ae(c,j)),c.match_length>=$)if(A=f._tr_tally(c,c.strstart-c.match_start,c.match_length-$),c.lookahead-=c.match_length,c.match_length<=c.max_lazy_match&&c.lookahead>=$){for(c.match_length--;c.strstart++,c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+$-1])&c.hash_mask,j=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart,--c.match_length!=0;);c.strstart++}else c.strstart+=c.match_length,c.match_length=0,c.ins_h=c.window[c.strstart],c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+1])&c.hash_mask;else A=f._tr_tally(c,0,c.window[c.strstart]),c.lookahead--,c.strstart++;if(A&&(z(c,!1),c.strm.avail_out===0))return m}return c.insert=c.strstart<$-1?c.strstart:$-1,re===D?(z(c,!0),c.strm.avail_out===0?G:Y):c.last_lit&&(z(c,!1),c.strm.avail_out===0)?m:ie}function Ee(c,re){for(var j,A,E;;){if(c.lookahead<ye){if(xe(c),c.lookahead<ye&&re===T)return m;if(c.lookahead===0)break}if(j=0,c.lookahead>=$&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+$-1])&c.hash_mask,j=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),c.prev_length=c.match_length,c.prev_match=c.match_start,c.match_length=$-1,j!==0&&c.prev_length<c.max_lazy_match&&c.strstart-j<=c.w_size-ye&&(c.match_length=ae(c,j),c.match_length<=5&&(c.strategy===1||c.match_length===$&&4096<c.strstart-c.match_start)&&(c.match_length=$-1)),c.prev_length>=$&&c.match_length<=c.prev_length){for(E=c.strstart+c.lookahead-$,A=f._tr_tally(c,c.strstart-1-c.prev_match,c.prev_length-$),c.lookahead-=c.prev_length-1,c.prev_length-=2;++c.strstart<=E&&(c.ins_h=(c.ins_h<<c.hash_shift^c.window[c.strstart+$-1])&c.hash_mask,j=c.prev[c.strstart&c.w_mask]=c.head[c.ins_h],c.head[c.ins_h]=c.strstart),--c.prev_length!=0;);if(c.match_available=0,c.match_length=$-1,c.strstart++,A&&(z(c,!1),c.strm.avail_out===0))return m}else if(c.match_available){if((A=f._tr_tally(c,0,c.window[c.strstart-1]))&&z(c,!1),c.strstart++,c.lookahead--,c.strm.avail_out===0)return m}else c.match_available=1,c.strstart++,c.lookahead--}return c.match_available&&(A=f._tr_tally(c,0,c.window[c.strstart-1]),c.match_available=0),c.insert=c.strstart<$-1?c.strstart:$-1,re===D?(z(c,!0),c.strm.avail_out===0?G:Y):c.last_lit&&(z(c,!1),c.strm.avail_out===0)?m:ie}function _e(c,re,j,A,E){this.good_length=c,this.max_lazy=re,this.nice_length=j,this.max_chain=A,this.func=E}function Pe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=N,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new p.Buf16(2*Z),this.dyn_dtree=new p.Buf16(2*(2*I+1)),this.bl_tree=new p.Buf16(2*(2*J+1)),ve(this.dyn_ltree),ve(this.dyn_dtree),ve(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new p.Buf16(oe+1),this.heap=new p.Buf16(2*q+1),ve(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new p.Buf16(2*q+1),ve(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ge(c){var re;return c&&c.state?(c.total_in=c.total_out=0,c.data_type=w,(re=c.state).pending=0,re.pending_out=0,re.wrap<0&&(re.wrap=-re.wrap),re.status=re.wrap?L:ee,c.adler=re.wrap===2?0:1,re.last_flush=T,f._tr_init(re),k):fe(c,_)}function yt(c){var re=Ge(c);return re===k&&(function(j){j.window_size=2*j.w_size,ve(j.head),j.max_lazy_match=u[j.level].max_lazy,j.good_match=u[j.level].good_length,j.nice_match=u[j.level].nice_length,j.max_chain_length=u[j.level].max_chain,j.strstart=0,j.block_start=0,j.lookahead=0,j.insert=0,j.match_length=j.prev_length=$-1,j.match_available=0,j.ins_h=0})(c.state),re}function bt(c,re,j,A,E,U){if(!c)return _;var ce=1;if(re===x&&(re=6),A<0?(ce=0,A=-A):15<A&&(ce=2,A-=16),E<1||R<E||j!==N||A<8||15<A||re<0||9<re||U<0||C<U)return fe(c,_);A===8&&(A=9);var ue=new Pe;return(c.state=ue).strm=c,ue.wrap=ce,ue.gzhead=null,ue.w_bits=A,ue.w_size=1<<ue.w_bits,ue.w_mask=ue.w_size-1,ue.hash_bits=E+7,ue.hash_size=1<<ue.hash_bits,ue.hash_mask=ue.hash_size-1,ue.hash_shift=~~((ue.hash_bits+$-1)/$),ue.window=new p.Buf8(2*ue.w_size),ue.head=new p.Buf16(ue.hash_size),ue.prev=new p.Buf16(ue.w_size),ue.lit_bufsize=1<<E+6,ue.pending_buf_size=4*ue.lit_bufsize,ue.pending_buf=new p.Buf8(ue.pending_buf_size),ue.d_buf=1*ue.lit_bufsize,ue.l_buf=3*ue.lit_bufsize,ue.level=re,ue.strategy=U,ue.method=j,yt(c)}u=[new _e(0,0,0,0,function(c,re){var j=65535;for(j>c.pending_buf_size-5&&(j=c.pending_buf_size-5);;){if(c.lookahead<=1){if(xe(c),c.lookahead===0&&re===T)return m;if(c.lookahead===0)break}c.strstart+=c.lookahead,c.lookahead=0;var A=c.block_start+j;if((c.strstart===0||c.strstart>=A)&&(c.lookahead=c.strstart-A,c.strstart=A,z(c,!1),c.strm.avail_out===0)||c.strstart-c.block_start>=c.w_size-ye&&(z(c,!1),c.strm.avail_out===0))return m}return c.insert=0,re===D?(z(c,!0),c.strm.avail_out===0?G:Y):(c.strstart>c.block_start&&(z(c,!1),c.strm.avail_out),m)}),new _e(4,4,8,4,Te),new _e(4,5,16,8,Te),new _e(4,6,32,32,Te),new _e(4,4,16,16,Ee),new _e(8,16,32,32,Ee),new _e(8,16,128,128,Ee),new _e(8,32,128,256,Ee),new _e(32,128,258,1024,Ee),new _e(32,258,258,4096,Ee)],v.deflateInit=function(c,re){return bt(c,re,N,15,8,0)},v.deflateInit2=bt,v.deflateReset=yt,v.deflateResetKeep=Ge,v.deflateSetHeader=function(c,re){return c&&c.state?c.state.wrap!==2?_:(c.state.gzhead=re,k):_},v.deflate=function(c,re){var j,A,E,U;if(!c||!c.state||5<re||re<0)return c?fe(c,_):_;if(A=c.state,!c.output||!c.input&&c.avail_in!==0||A.status===666&&re!==D)return fe(c,c.avail_out===0?-5:_);if(A.strm=c,j=A.last_flush,A.last_flush=re,A.status===L)if(A.wrap===2)c.adler=0,te(A,31),te(A,139),te(A,8),A.gzhead?(te(A,(A.gzhead.text?1:0)+(A.gzhead.hcrc?2:0)+(A.gzhead.extra?4:0)+(A.gzhead.name?8:0)+(A.gzhead.comment?16:0)),te(A,255&A.gzhead.time),te(A,A.gzhead.time>>8&255),te(A,A.gzhead.time>>16&255),te(A,A.gzhead.time>>24&255),te(A,A.level===9?2:2<=A.strategy||A.level<2?4:0),te(A,255&A.gzhead.os),A.gzhead.extra&&A.gzhead.extra.length&&(te(A,255&A.gzhead.extra.length),te(A,A.gzhead.extra.length>>8&255)),A.gzhead.hcrc&&(c.adler=S(c.adler,A.pending_buf,A.pending,0)),A.gzindex=0,A.status=69):(te(A,0),te(A,0),te(A,0),te(A,0),te(A,0),te(A,A.level===9?2:2<=A.strategy||A.level<2?4:0),te(A,3),A.status=ee);else{var ce=N+(A.w_bits-8<<4)<<8;ce|=(2<=A.strategy||A.level<2?0:A.level<6?1:A.level===6?2:3)<<6,A.strstart!==0&&(ce|=32),ce+=31-ce%31,A.status=ee,W(A,ce),A.strstart!==0&&(W(A,c.adler>>>16),W(A,65535&c.adler)),c.adler=1}if(A.status===69)if(A.gzhead.extra){for(E=A.pending;A.gzindex<(65535&A.gzhead.extra.length)&&(A.pending!==A.pending_buf_size||(A.gzhead.hcrc&&A.pending>E&&(c.adler=S(c.adler,A.pending_buf,A.pending-E,E)),b(c),E=A.pending,A.pending!==A.pending_buf_size));)te(A,255&A.gzhead.extra[A.gzindex]),A.gzindex++;A.gzhead.hcrc&&A.pending>E&&(c.adler=S(c.adler,A.pending_buf,A.pending-E,E)),A.gzindex===A.gzhead.extra.length&&(A.gzindex=0,A.status=73)}else A.status=73;if(A.status===73)if(A.gzhead.name){E=A.pending;do{if(A.pending===A.pending_buf_size&&(A.gzhead.hcrc&&A.pending>E&&(c.adler=S(c.adler,A.pending_buf,A.pending-E,E)),b(c),E=A.pending,A.pending===A.pending_buf_size)){U=1;break}U=A.gzindex<A.gzhead.name.length?255&A.gzhead.name.charCodeAt(A.gzindex++):0,te(A,U)}while(U!==0);A.gzhead.hcrc&&A.pending>E&&(c.adler=S(c.adler,A.pending_buf,A.pending-E,E)),U===0&&(A.gzindex=0,A.status=91)}else A.status=91;if(A.status===91)if(A.gzhead.comment){E=A.pending;do{if(A.pending===A.pending_buf_size&&(A.gzhead.hcrc&&A.pending>E&&(c.adler=S(c.adler,A.pending_buf,A.pending-E,E)),b(c),E=A.pending,A.pending===A.pending_buf_size)){U=1;break}U=A.gzindex<A.gzhead.comment.length?255&A.gzhead.comment.charCodeAt(A.gzindex++):0,te(A,U)}while(U!==0);A.gzhead.hcrc&&A.pending>E&&(c.adler=S(c.adler,A.pending_buf,A.pending-E,E)),U===0&&(A.status=103)}else A.status=103;if(A.status===103&&(A.gzhead.hcrc?(A.pending+2>A.pending_buf_size&&b(c),A.pending+2<=A.pending_buf_size&&(te(A,255&c.adler),te(A,c.adler>>8&255),c.adler=0,A.status=ee)):A.status=ee),A.pending!==0){if(b(c),c.avail_out===0)return A.last_flush=-1,k}else if(c.avail_in===0&&le(re)<=le(j)&&re!==D)return fe(c,-5);if(A.status===666&&c.avail_in!==0)return fe(c,-5);if(c.avail_in!==0||A.lookahead!==0||re!==T&&A.status!==666){var ue=A.strategy===2?(function(K,me){for(var ge;;){if(K.lookahead===0&&(xe(K),K.lookahead===0)){if(me===T)return m;break}if(K.match_length=0,ge=f._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++,ge&&(z(K,!1),K.strm.avail_out===0))return m}return K.insert=0,me===D?(z(K,!0),K.strm.avail_out===0?G:Y):K.last_lit&&(z(K,!1),K.strm.avail_out===0)?m:ie})(A,re):A.strategy===3?(function(K,me){for(var ge,pe,ke,Ie,Be=K.window;;){if(K.lookahead<=he){if(xe(K),K.lookahead<=he&&me===T)return m;if(K.lookahead===0)break}if(K.match_length=0,K.lookahead>=$&&0<K.strstart&&(pe=Be[ke=K.strstart-1])===Be[++ke]&&pe===Be[++ke]&&pe===Be[++ke]){Ie=K.strstart+he;do;while(pe===Be[++ke]&&pe===Be[++ke]&&pe===Be[++ke]&&pe===Be[++ke]&&pe===Be[++ke]&&pe===Be[++ke]&&pe===Be[++ke]&&pe===Be[++ke]&&ke<Ie);K.match_length=he-(Ie-ke),K.match_length>K.lookahead&&(K.match_length=K.lookahead)}if(K.match_length>=$?(ge=f._tr_tally(K,1,K.match_length-$),K.lookahead-=K.match_length,K.strstart+=K.match_length,K.match_length=0):(ge=f._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++),ge&&(z(K,!1),K.strm.avail_out===0))return m}return K.insert=0,me===D?(z(K,!0),K.strm.avail_out===0?G:Y):K.last_lit&&(z(K,!1),K.strm.avail_out===0)?m:ie})(A,re):u[A.level].func(A,re);if(ue!==G&&ue!==Y||(A.status=666),ue===m||ue===G)return c.avail_out===0&&(A.last_flush=-1),k;if(ue===ie&&(re===1?f._tr_align(A):re!==5&&(f._tr_stored_block(A,0,0,!1),re===3&&(ve(A.head),A.lookahead===0&&(A.strstart=0,A.block_start=0,A.insert=0))),b(c),c.avail_out===0))return A.last_flush=-1,k}return re!==D?k:A.wrap<=0?1:(A.wrap===2?(te(A,255&c.adler),te(A,c.adler>>8&255),te(A,c.adler>>16&255),te(A,c.adler>>24&255),te(A,255&c.total_in),te(A,c.total_in>>8&255),te(A,c.total_in>>16&255),te(A,c.total_in>>24&255)):(W(A,c.adler>>>16),W(A,65535&c.adler)),b(c),0<A.wrap&&(A.wrap=-A.wrap),A.pending!==0?k:1)},v.deflateEnd=function(c){var re;return c&&c.state?(re=c.state.status)!==L&&re!==69&&re!==73&&re!==91&&re!==103&&re!==ee&&re!==666?fe(c,_):(c.state=null,re===ee?fe(c,-3):k):_},v.deflateSetDictionary=function(c,re){var j,A,E,U,ce,ue,K,me,ge=re.length;if(!c||!c.state||(U=(j=c.state).wrap)===2||U===1&&j.status!==L||j.lookahead)return _;for(U===1&&(c.adler=y(c.adler,re,ge,0)),j.wrap=0,ge>=j.w_size&&(U===0&&(ve(j.head),j.strstart=0,j.block_start=0,j.insert=0),me=new p.Buf8(j.w_size),p.arraySet(me,re,ge-j.w_size,j.w_size,0),re=me,ge=j.w_size),ce=c.avail_in,ue=c.next_in,K=c.input,c.avail_in=ge,c.next_in=0,c.input=re,xe(j);j.lookahead>=$;){for(A=j.strstart,E=j.lookahead-($-1);j.ins_h=(j.ins_h<<j.hash_shift^j.window[A+$-1])&j.hash_mask,j.prev[A&j.w_mask]=j.head[j.ins_h],j.head[j.ins_h]=A,A++,--E;);j.strstart=A,j.lookahead=$-1,xe(j)}return j.strstart+=j.lookahead,j.block_start=j.strstart,j.insert=j.lookahead,j.lookahead=0,j.match_length=j.prev_length=$-1,j.match_available=0,c.next_in=ue,c.input=K,c.avail_in=ce,j.wrap=U,k},v.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(s,d,v){d.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(s,d,v){d.exports=function(u,p){var f,y,S,B,T,D,k,_,x,C,w,N,R,q,I,J,Z,oe,$,he,ye,L,ee,m,ie;f=u.state,y=u.next_in,m=u.input,S=y+(u.avail_in-5),B=u.next_out,ie=u.output,T=B-(p-u.avail_out),D=B+(u.avail_out-257),k=f.dmax,_=f.wsize,x=f.whave,C=f.wnext,w=f.window,N=f.hold,R=f.bits,q=f.lencode,I=f.distcode,J=(1<<f.lenbits)-1,Z=(1<<f.distbits)-1;e:do{R<15&&(N+=m[y++]<<R,R+=8,N+=m[y++]<<R,R+=8),oe=q[N&J];t:for(;;){if(N>>>=$=oe>>>24,R-=$,($=oe>>>16&255)===0)ie[B++]=65535&oe;else{if(!(16&$)){if((64&$)==0){oe=q[(65535&oe)+(N&(1<<$)-1)];continue t}if(32&$){f.mode=12;break e}u.msg="invalid literal/length code",f.mode=30;break e}he=65535&oe,($&=15)&&(R<$&&(N+=m[y++]<<R,R+=8),he+=N&(1<<$)-1,N>>>=$,R-=$),R<15&&(N+=m[y++]<<R,R+=8,N+=m[y++]<<R,R+=8),oe=I[N&Z];n:for(;;){if(N>>>=$=oe>>>24,R-=$,!(16&($=oe>>>16&255))){if((64&$)==0){oe=I[(65535&oe)+(N&(1<<$)-1)];continue n}u.msg="invalid distance code",f.mode=30;break e}if(ye=65535&oe,R<($&=15)&&(N+=m[y++]<<R,(R+=8)<$&&(N+=m[y++]<<R,R+=8)),k<(ye+=N&(1<<$)-1)){u.msg="invalid distance too far back",f.mode=30;break e}if(N>>>=$,R-=$,($=B-T)<ye){if(x<($=ye-$)&&f.sane){u.msg="invalid distance too far back",f.mode=30;break e}if(ee=w,(L=0)===C){if(L+=_-$,$<he){for(he-=$;ie[B++]=w[L++],--$;);L=B-ye,ee=ie}}else if(C<$){if(L+=_+C-$,($-=C)<he){for(he-=$;ie[B++]=w[L++],--$;);if(L=0,C<he){for(he-=$=C;ie[B++]=w[L++],--$;);L=B-ye,ee=ie}}}else if(L+=C-$,$<he){for(he-=$;ie[B++]=w[L++],--$;);L=B-ye,ee=ie}for(;2<he;)ie[B++]=ee[L++],ie[B++]=ee[L++],ie[B++]=ee[L++],he-=3;he&&(ie[B++]=ee[L++],1<he&&(ie[B++]=ee[L++]))}else{for(L=B-ye;ie[B++]=ie[L++],ie[B++]=ie[L++],ie[B++]=ie[L++],2<(he-=3););he&&(ie[B++]=ie[L++],1<he&&(ie[B++]=ie[L++]))}break}}break}}while(y<S&&B<D);y-=he=R>>3,N&=(1<<(R-=he<<3))-1,u.next_in=y,u.next_out=B,u.avail_in=y<S?S-y+5:5-(y-S),u.avail_out=B<D?D-B+257:257-(B-D),f.hold=N,f.bits=R}},{}],49:[function(s,d,v){var u=s("../utils/common"),p=s("./adler32"),f=s("./crc32"),y=s("./inffast"),S=s("./inftrees"),B=1,T=2,D=0,k=-2,_=1,x=852,C=592;function w(L){return(L>>>24&255)+(L>>>8&65280)+((65280&L)<<8)+((255&L)<<24)}function N(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new u.Buf16(320),this.work=new u.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function R(L){var ee;return L&&L.state?(ee=L.state,L.total_in=L.total_out=ee.total=0,L.msg="",ee.wrap&&(L.adler=1&ee.wrap),ee.mode=_,ee.last=0,ee.havedict=0,ee.dmax=32768,ee.head=null,ee.hold=0,ee.bits=0,ee.lencode=ee.lendyn=new u.Buf32(x),ee.distcode=ee.distdyn=new u.Buf32(C),ee.sane=1,ee.back=-1,D):k}function q(L){var ee;return L&&L.state?((ee=L.state).wsize=0,ee.whave=0,ee.wnext=0,R(L)):k}function I(L,ee){var m,ie;return L&&L.state?(ie=L.state,ee<0?(m=0,ee=-ee):(m=1+(ee>>4),ee<48&&(ee&=15)),ee&&(ee<8||15<ee)?k:(ie.window!==null&&ie.wbits!==ee&&(ie.window=null),ie.wrap=m,ie.wbits=ee,q(L))):k}function J(L,ee){var m,ie;return L?(ie=new N,(L.state=ie).window=null,(m=I(L,ee))!==D&&(L.state=null),m):k}var Z,oe,$=!0;function he(L){if($){var ee;for(Z=new u.Buf32(512),oe=new u.Buf32(32),ee=0;ee<144;)L.lens[ee++]=8;for(;ee<256;)L.lens[ee++]=9;for(;ee<280;)L.lens[ee++]=7;for(;ee<288;)L.lens[ee++]=8;for(S(B,L.lens,0,288,Z,0,L.work,{bits:9}),ee=0;ee<32;)L.lens[ee++]=5;S(T,L.lens,0,32,oe,0,L.work,{bits:5}),$=!1}L.lencode=Z,L.lenbits=9,L.distcode=oe,L.distbits=5}function ye(L,ee,m,ie){var G,Y=L.state;return Y.window===null&&(Y.wsize=1<<Y.wbits,Y.wnext=0,Y.whave=0,Y.window=new u.Buf8(Y.wsize)),ie>=Y.wsize?(u.arraySet(Y.window,ee,m-Y.wsize,Y.wsize,0),Y.wnext=0,Y.whave=Y.wsize):(ie<(G=Y.wsize-Y.wnext)&&(G=ie),u.arraySet(Y.window,ee,m-ie,G,Y.wnext),(ie-=G)?(u.arraySet(Y.window,ee,m-ie,ie,0),Y.wnext=ie,Y.whave=Y.wsize):(Y.wnext+=G,Y.wnext===Y.wsize&&(Y.wnext=0),Y.whave<Y.wsize&&(Y.whave+=G))),0}v.inflateReset=q,v.inflateReset2=I,v.inflateResetKeep=R,v.inflateInit=function(L){return J(L,15)},v.inflateInit2=J,v.inflate=function(L,ee){var m,ie,G,Y,fe,le,ve,b,z,te,W,ae,xe,Te,Ee,_e,Pe,Ge,yt,bt,c,re,j,A,E=0,U=new u.Buf8(4),ce=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!L||!L.state||!L.output||!L.input&&L.avail_in!==0)return k;(m=L.state).mode===12&&(m.mode=13),fe=L.next_out,G=L.output,ve=L.avail_out,Y=L.next_in,ie=L.input,le=L.avail_in,b=m.hold,z=m.bits,te=le,W=ve,re=D;e:for(;;)switch(m.mode){case _:if(m.wrap===0){m.mode=13;break}for(;z<16;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}if(2&m.wrap&&b===35615){U[m.check=0]=255&b,U[1]=b>>>8&255,m.check=f(m.check,U,2,0),z=b=0,m.mode=2;break}if(m.flags=0,m.head&&(m.head.done=!1),!(1&m.wrap)||(((255&b)<<8)+(b>>8))%31){L.msg="incorrect header check",m.mode=30;break}if((15&b)!=8){L.msg="unknown compression method",m.mode=30;break}if(z-=4,c=8+(15&(b>>>=4)),m.wbits===0)m.wbits=c;else if(c>m.wbits){L.msg="invalid window size",m.mode=30;break}m.dmax=1<<c,L.adler=m.check=1,m.mode=512&b?10:12,z=b=0;break;case 2:for(;z<16;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}if(m.flags=b,(255&m.flags)!=8){L.msg="unknown compression method",m.mode=30;break}if(57344&m.flags){L.msg="unknown header flags set",m.mode=30;break}m.head&&(m.head.text=b>>8&1),512&m.flags&&(U[0]=255&b,U[1]=b>>>8&255,m.check=f(m.check,U,2,0)),z=b=0,m.mode=3;case 3:for(;z<32;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}m.head&&(m.head.time=b),512&m.flags&&(U[0]=255&b,U[1]=b>>>8&255,U[2]=b>>>16&255,U[3]=b>>>24&255,m.check=f(m.check,U,4,0)),z=b=0,m.mode=4;case 4:for(;z<16;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}m.head&&(m.head.xflags=255&b,m.head.os=b>>8),512&m.flags&&(U[0]=255&b,U[1]=b>>>8&255,m.check=f(m.check,U,2,0)),z=b=0,m.mode=5;case 5:if(1024&m.flags){for(;z<16;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}m.length=b,m.head&&(m.head.extra_len=b),512&m.flags&&(U[0]=255&b,U[1]=b>>>8&255,m.check=f(m.check,U,2,0)),z=b=0}else m.head&&(m.head.extra=null);m.mode=6;case 6:if(1024&m.flags&&(le<(ae=m.length)&&(ae=le),ae&&(m.head&&(c=m.head.extra_len-m.length,m.head.extra||(m.head.extra=new Array(m.head.extra_len)),u.arraySet(m.head.extra,ie,Y,ae,c)),512&m.flags&&(m.check=f(m.check,ie,ae,Y)),le-=ae,Y+=ae,m.length-=ae),m.length))break e;m.length=0,m.mode=7;case 7:if(2048&m.flags){if(le===0)break e;for(ae=0;c=ie[Y+ae++],m.head&&c&&m.length<65536&&(m.head.name+=String.fromCharCode(c)),c&&ae<le;);if(512&m.flags&&(m.check=f(m.check,ie,ae,Y)),le-=ae,Y+=ae,c)break e}else m.head&&(m.head.name=null);m.length=0,m.mode=8;case 8:if(4096&m.flags){if(le===0)break e;for(ae=0;c=ie[Y+ae++],m.head&&c&&m.length<65536&&(m.head.comment+=String.fromCharCode(c)),c&&ae<le;);if(512&m.flags&&(m.check=f(m.check,ie,ae,Y)),le-=ae,Y+=ae,c)break e}else m.head&&(m.head.comment=null);m.mode=9;case 9:if(512&m.flags){for(;z<16;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}if(b!==(65535&m.check)){L.msg="header crc mismatch",m.mode=30;break}z=b=0}m.head&&(m.head.hcrc=m.flags>>9&1,m.head.done=!0),L.adler=m.check=0,m.mode=12;break;case 10:for(;z<32;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}L.adler=m.check=w(b),z=b=0,m.mode=11;case 11:if(m.havedict===0)return L.next_out=fe,L.avail_out=ve,L.next_in=Y,L.avail_in=le,m.hold=b,m.bits=z,2;L.adler=m.check=1,m.mode=12;case 12:if(ee===5||ee===6)break e;case 13:if(m.last){b>>>=7&z,z-=7&z,m.mode=27;break}for(;z<3;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}switch(m.last=1&b,z-=1,3&(b>>>=1)){case 0:m.mode=14;break;case 1:if(he(m),m.mode=20,ee!==6)break;b>>>=2,z-=2;break e;case 2:m.mode=17;break;case 3:L.msg="invalid block type",m.mode=30}b>>>=2,z-=2;break;case 14:for(b>>>=7&z,z-=7&z;z<32;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}if((65535&b)!=(b>>>16^65535)){L.msg="invalid stored block lengths",m.mode=30;break}if(m.length=65535&b,z=b=0,m.mode=15,ee===6)break e;case 15:m.mode=16;case 16:if(ae=m.length){if(le<ae&&(ae=le),ve<ae&&(ae=ve),ae===0)break e;u.arraySet(G,ie,Y,ae,fe),le-=ae,Y+=ae,ve-=ae,fe+=ae,m.length-=ae;break}m.mode=12;break;case 17:for(;z<14;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}if(m.nlen=257+(31&b),b>>>=5,z-=5,m.ndist=1+(31&b),b>>>=5,z-=5,m.ncode=4+(15&b),b>>>=4,z-=4,286<m.nlen||30<m.ndist){L.msg="too many length or distance symbols",m.mode=30;break}m.have=0,m.mode=18;case 18:for(;m.have<m.ncode;){for(;z<3;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}m.lens[ce[m.have++]]=7&b,b>>>=3,z-=3}for(;m.have<19;)m.lens[ce[m.have++]]=0;if(m.lencode=m.lendyn,m.lenbits=7,j={bits:m.lenbits},re=S(0,m.lens,0,19,m.lencode,0,m.work,j),m.lenbits=j.bits,re){L.msg="invalid code lengths set",m.mode=30;break}m.have=0,m.mode=19;case 19:for(;m.have<m.nlen+m.ndist;){for(;_e=(E=m.lencode[b&(1<<m.lenbits)-1])>>>16&255,Pe=65535&E,!((Ee=E>>>24)<=z);){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}if(Pe<16)b>>>=Ee,z-=Ee,m.lens[m.have++]=Pe;else{if(Pe===16){for(A=Ee+2;z<A;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}if(b>>>=Ee,z-=Ee,m.have===0){L.msg="invalid bit length repeat",m.mode=30;break}c=m.lens[m.have-1],ae=3+(3&b),b>>>=2,z-=2}else if(Pe===17){for(A=Ee+3;z<A;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}z-=Ee,c=0,ae=3+(7&(b>>>=Ee)),b>>>=3,z-=3}else{for(A=Ee+7;z<A;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}z-=Ee,c=0,ae=11+(127&(b>>>=Ee)),b>>>=7,z-=7}if(m.have+ae>m.nlen+m.ndist){L.msg="invalid bit length repeat",m.mode=30;break}for(;ae--;)m.lens[m.have++]=c}}if(m.mode===30)break;if(m.lens[256]===0){L.msg="invalid code -- missing end-of-block",m.mode=30;break}if(m.lenbits=9,j={bits:m.lenbits},re=S(B,m.lens,0,m.nlen,m.lencode,0,m.work,j),m.lenbits=j.bits,re){L.msg="invalid literal/lengths set",m.mode=30;break}if(m.distbits=6,m.distcode=m.distdyn,j={bits:m.distbits},re=S(T,m.lens,m.nlen,m.ndist,m.distcode,0,m.work,j),m.distbits=j.bits,re){L.msg="invalid distances set",m.mode=30;break}if(m.mode=20,ee===6)break e;case 20:m.mode=21;case 21:if(6<=le&&258<=ve){L.next_out=fe,L.avail_out=ve,L.next_in=Y,L.avail_in=le,m.hold=b,m.bits=z,y(L,W),fe=L.next_out,G=L.output,ve=L.avail_out,Y=L.next_in,ie=L.input,le=L.avail_in,b=m.hold,z=m.bits,m.mode===12&&(m.back=-1);break}for(m.back=0;_e=(E=m.lencode[b&(1<<m.lenbits)-1])>>>16&255,Pe=65535&E,!((Ee=E>>>24)<=z);){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}if(_e&&(240&_e)==0){for(Ge=Ee,yt=_e,bt=Pe;_e=(E=m.lencode[bt+((b&(1<<Ge+yt)-1)>>Ge)])>>>16&255,Pe=65535&E,!(Ge+(Ee=E>>>24)<=z);){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}b>>>=Ge,z-=Ge,m.back+=Ge}if(b>>>=Ee,z-=Ee,m.back+=Ee,m.length=Pe,_e===0){m.mode=26;break}if(32&_e){m.back=-1,m.mode=12;break}if(64&_e){L.msg="invalid literal/length code",m.mode=30;break}m.extra=15&_e,m.mode=22;case 22:if(m.extra){for(A=m.extra;z<A;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}m.length+=b&(1<<m.extra)-1,b>>>=m.extra,z-=m.extra,m.back+=m.extra}m.was=m.length,m.mode=23;case 23:for(;_e=(E=m.distcode[b&(1<<m.distbits)-1])>>>16&255,Pe=65535&E,!((Ee=E>>>24)<=z);){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}if((240&_e)==0){for(Ge=Ee,yt=_e,bt=Pe;_e=(E=m.distcode[bt+((b&(1<<Ge+yt)-1)>>Ge)])>>>16&255,Pe=65535&E,!(Ge+(Ee=E>>>24)<=z);){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}b>>>=Ge,z-=Ge,m.back+=Ge}if(b>>>=Ee,z-=Ee,m.back+=Ee,64&_e){L.msg="invalid distance code",m.mode=30;break}m.offset=Pe,m.extra=15&_e,m.mode=24;case 24:if(m.extra){for(A=m.extra;z<A;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}m.offset+=b&(1<<m.extra)-1,b>>>=m.extra,z-=m.extra,m.back+=m.extra}if(m.offset>m.dmax){L.msg="invalid distance too far back",m.mode=30;break}m.mode=25;case 25:if(ve===0)break e;if(ae=W-ve,m.offset>ae){if((ae=m.offset-ae)>m.whave&&m.sane){L.msg="invalid distance too far back",m.mode=30;break}xe=ae>m.wnext?(ae-=m.wnext,m.wsize-ae):m.wnext-ae,ae>m.length&&(ae=m.length),Te=m.window}else Te=G,xe=fe-m.offset,ae=m.length;for(ve<ae&&(ae=ve),ve-=ae,m.length-=ae;G[fe++]=Te[xe++],--ae;);m.length===0&&(m.mode=21);break;case 26:if(ve===0)break e;G[fe++]=m.length,ve--,m.mode=21;break;case 27:if(m.wrap){for(;z<32;){if(le===0)break e;le--,b|=ie[Y++]<<z,z+=8}if(W-=ve,L.total_out+=W,m.total+=W,W&&(L.adler=m.check=m.flags?f(m.check,G,W,fe-W):p(m.check,G,W,fe-W)),W=ve,(m.flags?b:w(b))!==m.check){L.msg="incorrect data check",m.mode=30;break}z=b=0}m.mode=28;case 28:if(m.wrap&&m.flags){for(;z<32;){if(le===0)break e;le--,b+=ie[Y++]<<z,z+=8}if(b!==(4294967295&m.total)){L.msg="incorrect length check",m.mode=30;break}z=b=0}m.mode=29;case 29:re=1;break e;case 30:re=-3;break e;case 31:return-4;default:return k}return L.next_out=fe,L.avail_out=ve,L.next_in=Y,L.avail_in=le,m.hold=b,m.bits=z,(m.wsize||W!==L.avail_out&&m.mode<30&&(m.mode<27||ee!==4))&&ye(L,L.output,L.next_out,W-L.avail_out)?(m.mode=31,-4):(te-=L.avail_in,W-=L.avail_out,L.total_in+=te,L.total_out+=W,m.total+=W,m.wrap&&W&&(L.adler=m.check=m.flags?f(m.check,G,W,L.next_out-W):p(m.check,G,W,L.next_out-W)),L.data_type=m.bits+(m.last?64:0)+(m.mode===12?128:0)+(m.mode===20||m.mode===15?256:0),(te==0&&W===0||ee===4)&&re===D&&(re=-5),re)},v.inflateEnd=function(L){if(!L||!L.state)return k;var ee=L.state;return ee.window&&(ee.window=null),L.state=null,D},v.inflateGetHeader=function(L,ee){var m;return L&&L.state?(2&(m=L.state).wrap)==0?k:((m.head=ee).done=!1,D):k},v.inflateSetDictionary=function(L,ee){var m,ie=ee.length;return L&&L.state?(m=L.state).wrap!==0&&m.mode!==11?k:m.mode===11&&p(1,ee,ie,0)!==m.check?-3:ye(L,ee,ie,ie)?(m.mode=31,-4):(m.havedict=1,D):k},v.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(s,d,v){var u=s("../utils/common"),p=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],f=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],y=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],S=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];d.exports=function(B,T,D,k,_,x,C,w){var N,R,q,I,J,Z,oe,$,he,ye=w.bits,L=0,ee=0,m=0,ie=0,G=0,Y=0,fe=0,le=0,ve=0,b=0,z=null,te=0,W=new u.Buf16(16),ae=new u.Buf16(16),xe=null,Te=0;for(L=0;L<=15;L++)W[L]=0;for(ee=0;ee<k;ee++)W[T[D+ee]]++;for(G=ye,ie=15;1<=ie&&W[ie]===0;ie--);if(ie<G&&(G=ie),ie===0)return _[x++]=20971520,_[x++]=20971520,w.bits=1,0;for(m=1;m<ie&&W[m]===0;m++);for(G<m&&(G=m),L=le=1;L<=15;L++)if(le<<=1,(le-=W[L])<0)return-1;if(0<le&&(B===0||ie!==1))return-1;for(ae[1]=0,L=1;L<15;L++)ae[L+1]=ae[L]+W[L];for(ee=0;ee<k;ee++)T[D+ee]!==0&&(C[ae[T[D+ee]]++]=ee);if(Z=B===0?(z=xe=C,19):B===1?(z=p,te-=257,xe=f,Te-=257,256):(z=y,xe=S,-1),L=m,J=x,fe=ee=b=0,q=-1,I=(ve=1<<(Y=G))-1,B===1&&852<ve||B===2&&592<ve)return 1;for(;;){for(oe=L-fe,he=C[ee]<Z?($=0,C[ee]):C[ee]>Z?($=xe[Te+C[ee]],z[te+C[ee]]):($=96,0),N=1<<L-fe,m=R=1<<Y;_[J+(b>>fe)+(R-=N)]=oe<<24|$<<16|he|0,R!==0;);for(N=1<<L-1;b&N;)N>>=1;if(N!==0?(b&=N-1,b+=N):b=0,ee++,--W[L]==0){if(L===ie)break;L=T[D+C[ee]]}if(G<L&&(b&I)!==q){for(fe===0&&(fe=G),J+=m,le=1<<(Y=L-fe);Y+fe<ie&&!((le-=W[Y+fe])<=0);)Y++,le<<=1;if(ve+=1<<Y,B===1&&852<ve||B===2&&592<ve)return 1;_[q=b&I]=G<<24|Y<<16|J-x|0}}return b!==0&&(_[J+b]=L-fe<<24|64<<16|0),w.bits=G,0}},{"../utils/common":41}],51:[function(s,d,v){d.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(s,d,v){var u=s("../utils/common"),p=0,f=1;function y(E){for(var U=E.length;0<=--U;)E[U]=0}var S=0,B=29,T=256,D=T+1+B,k=30,_=19,x=2*D+1,C=15,w=16,N=7,R=256,q=16,I=17,J=18,Z=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],oe=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],$=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],he=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ye=new Array(2*(D+2));y(ye);var L=new Array(2*k);y(L);var ee=new Array(512);y(ee);var m=new Array(256);y(m);var ie=new Array(B);y(ie);var G,Y,fe,le=new Array(k);function ve(E,U,ce,ue,K){this.static_tree=E,this.extra_bits=U,this.extra_base=ce,this.elems=ue,this.max_length=K,this.has_stree=E&&E.length}function b(E,U){this.dyn_tree=E,this.max_code=0,this.stat_desc=U}function z(E){return E<256?ee[E]:ee[256+(E>>>7)]}function te(E,U){E.pending_buf[E.pending++]=255&U,E.pending_buf[E.pending++]=U>>>8&255}function W(E,U,ce){E.bi_valid>w-ce?(E.bi_buf|=U<<E.bi_valid&65535,te(E,E.bi_buf),E.bi_buf=U>>w-E.bi_valid,E.bi_valid+=ce-w):(E.bi_buf|=U<<E.bi_valid&65535,E.bi_valid+=ce)}function ae(E,U,ce){W(E,ce[2*U],ce[2*U+1])}function xe(E,U){for(var ce=0;ce|=1&E,E>>>=1,ce<<=1,0<--U;);return ce>>>1}function Te(E,U,ce){var ue,K,me=new Array(C+1),ge=0;for(ue=1;ue<=C;ue++)me[ue]=ge=ge+ce[ue-1]<<1;for(K=0;K<=U;K++){var pe=E[2*K+1];pe!==0&&(E[2*K]=xe(me[pe]++,pe))}}function Ee(E){var U;for(U=0;U<D;U++)E.dyn_ltree[2*U]=0;for(U=0;U<k;U++)E.dyn_dtree[2*U]=0;for(U=0;U<_;U++)E.bl_tree[2*U]=0;E.dyn_ltree[2*R]=1,E.opt_len=E.static_len=0,E.last_lit=E.matches=0}function _e(E){8<E.bi_valid?te(E,E.bi_buf):0<E.bi_valid&&(E.pending_buf[E.pending++]=E.bi_buf),E.bi_buf=0,E.bi_valid=0}function Pe(E,U,ce,ue){var K=2*U,me=2*ce;return E[K]<E[me]||E[K]===E[me]&&ue[U]<=ue[ce]}function Ge(E,U,ce){for(var ue=E.heap[ce],K=ce<<1;K<=E.heap_len&&(K<E.heap_len&&Pe(U,E.heap[K+1],E.heap[K],E.depth)&&K++,!Pe(U,ue,E.heap[K],E.depth));)E.heap[ce]=E.heap[K],ce=K,K<<=1;E.heap[ce]=ue}function yt(E,U,ce){var ue,K,me,ge,pe=0;if(E.last_lit!==0)for(;ue=E.pending_buf[E.d_buf+2*pe]<<8|E.pending_buf[E.d_buf+2*pe+1],K=E.pending_buf[E.l_buf+pe],pe++,ue===0?ae(E,K,U):(ae(E,(me=m[K])+T+1,U),(ge=Z[me])!==0&&W(E,K-=ie[me],ge),ae(E,me=z(--ue),ce),(ge=oe[me])!==0&&W(E,ue-=le[me],ge)),pe<E.last_lit;);ae(E,R,U)}function bt(E,U){var ce,ue,K,me=U.dyn_tree,ge=U.stat_desc.static_tree,pe=U.stat_desc.has_stree,ke=U.stat_desc.elems,Ie=-1;for(E.heap_len=0,E.heap_max=x,ce=0;ce<ke;ce++)me[2*ce]!==0?(E.heap[++E.heap_len]=Ie=ce,E.depth[ce]=0):me[2*ce+1]=0;for(;E.heap_len<2;)me[2*(K=E.heap[++E.heap_len]=Ie<2?++Ie:0)]=1,E.depth[K]=0,E.opt_len--,pe&&(E.static_len-=ge[2*K+1]);for(U.max_code=Ie,ce=E.heap_len>>1;1<=ce;ce--)Ge(E,me,ce);for(K=ke;ce=E.heap[1],E.heap[1]=E.heap[E.heap_len--],Ge(E,me,1),ue=E.heap[1],E.heap[--E.heap_max]=ce,E.heap[--E.heap_max]=ue,me[2*K]=me[2*ce]+me[2*ue],E.depth[K]=(E.depth[ce]>=E.depth[ue]?E.depth[ce]:E.depth[ue])+1,me[2*ce+1]=me[2*ue+1]=K,E.heap[1]=K++,Ge(E,me,1),2<=E.heap_len;);E.heap[--E.heap_max]=E.heap[1],(function(Be,kt){var _n,Ht,Qn,Ve,ct,jt,We=kt.dyn_tree,nl=kt.max_code,Tr=kt.stat_desc.static_tree,Cr=kt.stat_desc.has_stree,gi=kt.stat_desc.extra_bits,Jn=kt.stat_desc.extra_base,Wt=kt.stat_desc.max_length,Ut=0;for(Ve=0;Ve<=C;Ve++)Be.bl_count[Ve]=0;for(We[2*Be.heap[Be.heap_max]+1]=0,_n=Be.heap_max+1;_n<x;_n++)Wt<(Ve=We[2*We[2*(Ht=Be.heap[_n])+1]+1]+1)&&(Ve=Wt,Ut++),We[2*Ht+1]=Ve,nl<Ht||(Be.bl_count[Ve]++,ct=0,Jn<=Ht&&(ct=gi[Ht-Jn]),jt=We[2*Ht],Be.opt_len+=jt*(Ve+ct),Cr&&(Be.static_len+=jt*(Tr[2*Ht+1]+ct)));if(Ut!==0){do{for(Ve=Wt-1;Be.bl_count[Ve]===0;)Ve--;Be.bl_count[Ve]--,Be.bl_count[Ve+1]+=2,Be.bl_count[Wt]--,Ut-=2}while(0<Ut);for(Ve=Wt;Ve!==0;Ve--)for(Ht=Be.bl_count[Ve];Ht!==0;)nl<(Qn=Be.heap[--_n])||(We[2*Qn+1]!==Ve&&(Be.opt_len+=(Ve-We[2*Qn+1])*We[2*Qn],We[2*Qn+1]=Ve),Ht--)}})(E,U),Te(me,Ie,E.bl_count)}function c(E,U,ce){var ue,K,me=-1,ge=U[1],pe=0,ke=7,Ie=4;for(ge===0&&(ke=138,Ie=3),U[2*(ce+1)+1]=65535,ue=0;ue<=ce;ue++)K=ge,ge=U[2*(ue+1)+1],++pe<ke&&K===ge||(pe<Ie?E.bl_tree[2*K]+=pe:K!==0?(K!==me&&E.bl_tree[2*K]++,E.bl_tree[2*q]++):pe<=10?E.bl_tree[2*I]++:E.bl_tree[2*J]++,me=K,Ie=(pe=0)===ge?(ke=138,3):K===ge?(ke=6,3):(ke=7,4))}function re(E,U,ce){var ue,K,me=-1,ge=U[1],pe=0,ke=7,Ie=4;for(ge===0&&(ke=138,Ie=3),ue=0;ue<=ce;ue++)if(K=ge,ge=U[2*(ue+1)+1],!(++pe<ke&&K===ge)){if(pe<Ie)for(;ae(E,K,E.bl_tree),--pe!=0;);else K!==0?(K!==me&&(ae(E,K,E.bl_tree),pe--),ae(E,q,E.bl_tree),W(E,pe-3,2)):pe<=10?(ae(E,I,E.bl_tree),W(E,pe-3,3)):(ae(E,J,E.bl_tree),W(E,pe-11,7));me=K,Ie=(pe=0)===ge?(ke=138,3):K===ge?(ke=6,3):(ke=7,4)}}y(le);var j=!1;function A(E,U,ce,ue){W(E,(S<<1)+(ue?1:0),3),(function(K,me,ge,pe){_e(K),te(K,ge),te(K,~ge),u.arraySet(K.pending_buf,K.window,me,ge,K.pending),K.pending+=ge})(E,U,ce)}v._tr_init=function(E){j||((function(){var U,ce,ue,K,me,ge=new Array(C+1);for(K=ue=0;K<B-1;K++)for(ie[K]=ue,U=0;U<1<<Z[K];U++)m[ue++]=K;for(m[ue-1]=K,K=me=0;K<16;K++)for(le[K]=me,U=0;U<1<<oe[K];U++)ee[me++]=K;for(me>>=7;K<k;K++)for(le[K]=me<<7,U=0;U<1<<oe[K]-7;U++)ee[256+me++]=K;for(ce=0;ce<=C;ce++)ge[ce]=0;for(U=0;U<=143;)ye[2*U+1]=8,U++,ge[8]++;for(;U<=255;)ye[2*U+1]=9,U++,ge[9]++;for(;U<=279;)ye[2*U+1]=7,U++,ge[7]++;for(;U<=287;)ye[2*U+1]=8,U++,ge[8]++;for(Te(ye,D+1,ge),U=0;U<k;U++)L[2*U+1]=5,L[2*U]=xe(U,5);G=new ve(ye,Z,T+1,D,C),Y=new ve(L,oe,0,k,C),fe=new ve(new Array(0),$,0,_,N)})(),j=!0),E.l_desc=new b(E.dyn_ltree,G),E.d_desc=new b(E.dyn_dtree,Y),E.bl_desc=new b(E.bl_tree,fe),E.bi_buf=0,E.bi_valid=0,Ee(E)},v._tr_stored_block=A,v._tr_flush_block=function(E,U,ce,ue){var K,me,ge=0;0<E.level?(E.strm.data_type===2&&(E.strm.data_type=(function(pe){var ke,Ie=4093624447;for(ke=0;ke<=31;ke++,Ie>>>=1)if(1&Ie&&pe.dyn_ltree[2*ke]!==0)return p;if(pe.dyn_ltree[18]!==0||pe.dyn_ltree[20]!==0||pe.dyn_ltree[26]!==0)return f;for(ke=32;ke<T;ke++)if(pe.dyn_ltree[2*ke]!==0)return f;return p})(E)),bt(E,E.l_desc),bt(E,E.d_desc),ge=(function(pe){var ke;for(c(pe,pe.dyn_ltree,pe.l_desc.max_code),c(pe,pe.dyn_dtree,pe.d_desc.max_code),bt(pe,pe.bl_desc),ke=_-1;3<=ke&&pe.bl_tree[2*he[ke]+1]===0;ke--);return pe.opt_len+=3*(ke+1)+5+5+4,ke})(E),K=E.opt_len+3+7>>>3,(me=E.static_len+3+7>>>3)<=K&&(K=me)):K=me=ce+5,ce+4<=K&&U!==-1?A(E,U,ce,ue):E.strategy===4||me===K?(W(E,2+(ue?1:0),3),yt(E,ye,L)):(W(E,4+(ue?1:0),3),(function(pe,ke,Ie,Be){var kt;for(W(pe,ke-257,5),W(pe,Ie-1,5),W(pe,Be-4,4),kt=0;kt<Be;kt++)W(pe,pe.bl_tree[2*he[kt]+1],3);re(pe,pe.dyn_ltree,ke-1),re(pe,pe.dyn_dtree,Ie-1)})(E,E.l_desc.max_code+1,E.d_desc.max_code+1,ge+1),yt(E,E.dyn_ltree,E.dyn_dtree)),Ee(E),ue&&_e(E)},v._tr_tally=function(E,U,ce){return E.pending_buf[E.d_buf+2*E.last_lit]=U>>>8&255,E.pending_buf[E.d_buf+2*E.last_lit+1]=255&U,E.pending_buf[E.l_buf+E.last_lit]=255&ce,E.last_lit++,U===0?E.dyn_ltree[2*ce]++:(E.matches++,U--,E.dyn_ltree[2*(m[ce]+T+1)]++,E.dyn_dtree[2*z(U)]++),E.last_lit===E.lit_bufsize-1},v._tr_align=function(E){W(E,2,3),ae(E,R,ye),(function(U){U.bi_valid===16?(te(U,U.bi_buf),U.bi_buf=0,U.bi_valid=0):8<=U.bi_valid&&(U.pending_buf[U.pending++]=255&U.bi_buf,U.bi_buf>>=8,U.bi_valid-=8)})(E)}},{"../utils/common":41}],53:[function(s,d,v){d.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(s,d,v){(function(u){(function(p,f){if(!p.setImmediate){var y,S,B,T,D=1,k={},_=!1,x=p.document,C=Object.getPrototypeOf&&Object.getPrototypeOf(p);C=C&&C.setTimeout?C:p,y={}.toString.call(p.process)==="[object process]"?function(q){process.nextTick(function(){N(q)})}:(function(){if(p.postMessage&&!p.importScripts){var q=!0,I=p.onmessage;return p.onmessage=function(){q=!1},p.postMessage("","*"),p.onmessage=I,q}})()?(T="setImmediate$"+Math.random()+"$",p.addEventListener?p.addEventListener("message",R,!1):p.attachEvent("onmessage",R),function(q){p.postMessage(T+q,"*")}):p.MessageChannel?((B=new MessageChannel).port1.onmessage=function(q){N(q.data)},function(q){B.port2.postMessage(q)}):x&&"onreadystatechange"in x.createElement("script")?(S=x.documentElement,function(q){var I=x.createElement("script");I.onreadystatechange=function(){N(q),I.onreadystatechange=null,S.removeChild(I),I=null},S.appendChild(I)}):function(q){setTimeout(N,0,q)},C.setImmediate=function(q){typeof q!="function"&&(q=new Function(""+q));for(var I=new Array(arguments.length-1),J=0;J<I.length;J++)I[J]=arguments[J+1];var Z={callback:q,args:I};return k[D]=Z,y(D),D++},C.clearImmediate=w}function w(q){delete k[q]}function N(q){if(_)setTimeout(N,0,q);else{var I=k[q];if(I){_=!0;try{(function(J){var Z=J.callback,oe=J.args;switch(oe.length){case 0:Z();break;case 1:Z(oe[0]);break;case 2:Z(oe[0],oe[1]);break;case 3:Z(oe[0],oe[1],oe[2]);break;default:Z.apply(f,oe)}})(I)}finally{w(q),_=!1}}}}function R(q){q.source===p&&typeof q.data=="string"&&q.data.indexOf(T)===0&&N(+q.data.slice(T.length))}})(typeof self>"u"?u===void 0?this:u:self)}).call(this,typeof gr<"u"?gr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Qo)),Qo.exports}var vv=gv();const Hf=lg(vv),yv=`/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with \`transform: scale()\` to fit the viewport, letterboxed.
 *      Set the \`noscale\` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — \`@media print\` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * \`visibility: hidden\` + \`opacity: 0\`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a \`slidechange\` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';

  const pad2 = (n) => String(n).padStart(2, '0');

  const stylesheet = \`
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    .stage {
      position: absolute;
      left: var(--deck-stage-inset-left, 0px);
      right: var(--deck-stage-inset-right, 0px);
      top: var(--deck-stage-inset-top, 0px);
      bottom: var(--deck-stage-inset-bottom, 0px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    /* Tap zones for mobile — back/forward thirds like Stories.
       Transparent, no visible UI, don't block the overlay. */
    .tapzones {
      position: fixed;
      inset: 0;
      display: flex;
      z-index: 2147482000;
      pointer-events: none;
    }
    .tapzone {
      flex: 1;
      pointer-events: auto;
      -webkit-tap-highlight-color: transparent;
    }
    /* Only activate tap zones on coarse pointers (touch devices). */
    @media (hover: hover) and (pointer: fine) {
      .tapzones { display: none; }
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      ::slotted(*:last-child) {
        break-after: auto;
        page-break-after: auto;
      }
      .overlay, .tapzones { display: none !important; }
    }
  \`;

  class DeckStage extends HTMLElement {
    static get observedAttributes() { return ['width', 'height', 'noscale']; }

    constructor() {
      super();
      this._root = this.attachShadow({ mode: 'open' });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;

      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTapBack = this._onTapBack.bind(this);
      this._onTapForward = this._onTapForward.bind(this);
    }

    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }

    connectedCallback() {
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, { passive: true });
      // Initial collection + layout happens via slotchange, which fires on mount.
    }

    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
    }

    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        this._fit();
        this._syncPrintPageRule();
      }
    }

    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;

      const stage = document.createElement('div');
      stage.className = 'stage';

      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');

      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Tap zones (mobile): left third = back, right third = forward.
      const tapzones = document.createElement('div');
      tapzones.className = 'tapzones export-hidden';
      tapzones.setAttribute('aria-hidden', 'true');
      tapzones.setAttribute('data-noncommentable', '');
      const tzBack = document.createElement('div');
      tzBack.className = 'tapzone tapzone--back';
      const tzMid = document.createElement('div');
      tzMid.className = 'tapzone tapzone--mid';
      tzMid.style.pointerEvents = 'none';
      const tzFwd = document.createElement('div');
      tzFwd.className = 'tapzone tapzone--fwd';
      tzBack.addEventListener('click', this._onTapBack);
      tzFwd.addEventListener('click', this._onTapForward);
      tapzones.append(tzBack, tzMid, tzFwd);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-noncommentable', '');
      overlay.innerHTML = \`
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      \`;

      overlay.querySelector('.prev').addEventListener('click', () => this._go(this._index - 1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._go(this._index + 1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      this._root.append(style, stage, tapzones, overlay);
      this._stage = stage;
      this._canvas = canvas;
      this._slot = slot;
      this._overlay = overlay;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent =
        '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' +
        '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' +
        '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }';
    }

    _onSlotChange() {
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({ showOverlay: false, broadcast: true, reason: 'init' });
      this._fit();
    }

    _collectSlides() {
      const assigned = this._slot.assignedElements({ flatten: true });
      this._slides = assigned.filter((el) => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });

      this._slides.forEach((slide, i) => {
        const n = i + 1;
        // Determine a label for comment flow: prefer explicit data-label,
        // then an existing data-screen-label, then first heading, else "Slide".
        let label = slide.getAttribute('data-label');
        if (!label) {
          const existing = slide.getAttribute('data-screen-label');
          if (existing) {
            // Strip any leading number the author may have included.
            label = existing.replace(/^\\s*\\d+\\s*/, '').trim() || existing;
          }
        }
        if (!label) {
          const h = slide.querySelector('h1, h2, h3, [data-title]');
          if (h) label = (h.textContent || '').trim().slice(0, 40);
        }
        if (!label) label = 'Slide';
        slide.setAttribute('data-screen-label', \`\${pad2(n)} \${label}\`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }

        slide.setAttribute('data-deck-slide', String(i));
      });

      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
    }

    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) { this._notes = []; return; }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }

    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }

    _applyIndex({ showOverlay = true, broadcast = true, reason = 'init' } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try { history.replaceState(null, '', '#' + (curr + 1)); } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');
        else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);

      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try { window.postMessage({ slideIndexChanged: curr }, '*'); } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? (this._slides[prev] || null) : null,
          reason: reason, // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true,
        }));
      }

      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }

    _flashOverlay() {
      if (!this._overlay) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }

    _fit() {
      if (!this._canvas) return;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        return;
      }
      const box = this._stage ? this._stage.getBoundingClientRect() : null;
      const vw = box && box.width ? box.width : window.innerWidth;
      const vh = box && box.height ? box.height : window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = \`scale(\${s})\`;
    }

    _onResize() { this._fit(); }

    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }

    _onTapBack(e) {
      e.preventDefault();
      this._go(this._index - 1, 'tap');
    }

    _onTapForward(e) {
      e.preventDefault();
      this._go(this._index + 1, 'tap');
    }

    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      const key = e.key;
      let handled = true;

      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._go(this._index + 1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._go(this._index - 1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }

      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }

    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({ showOverlay: true, broadcast: true, reason });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() { return this._index; }
    /** Total slide count. */
    get length() { return this._slides.length; }
    /** Programmatically navigate. */
    goTo(i) { this._go(i, 'api'); }
    next() { this._go(this._index + 1, 'api'); }
    prev() { this._go(this._index - 1, 'api'); }
    reset() { this._go(0, 'api'); }
    fit() { this._fit(); }
    setEditorInsets(insets = {}) {
      const next = {
        left: Math.max(0, Number(insets.left) || 0),
        right: Math.max(0, Number(insets.right) || 0),
        top: Math.max(0, Number(insets.top) || 0),
        bottom: Math.max(0, Number(insets.bottom) || 0),
      };
      this.style.setProperty('--deck-stage-inset-left', \`\${next.left}px\`);
      this.style.setProperty('--deck-stage-inset-right', \`\${next.right}px\`);
      this.style.setProperty('--deck-stage-inset-top', \`\${next.top}px\`);
      this.style.setProperty('--deck-stage-inset-bottom', \`\${next.bottom}px\`);
      this._fit();
    }
  }

  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
`,bv=`/* Frontend Slides Visual Deck Editor runtime. Source baseline: 1ba9bf0. */
(function () {
  const FONT_BODY_STACK = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  const FONT_CJK_SERIF_STACK = '"Noto Serif SC", "Songti SC", SimSun, serif';
  const FONT_LATIN_SERIF_STACK = 'Georgia, "Times New Roman", Times, serif';
  const FONT_MONO_STACK = '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace';
  const FONT_HEITI_STACK = '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';
  const FONT_SONGTI_STACK = '"Songti SC", STSong, SimSun, serif';
  const FONT_KAITI_STACK = '"Kaiti SC", STKaiti, KaiTi, serif';
  const FONT_DISPLAY_STACK = '"DIN Alternate", "Arial Narrow", Impact, sans-serif';
  const TEXT_COLOR_PALETTE = [
    "#111111", "#444444", "#737373", "#a3a3a3", "#d4d4d4", "#ffffff",
    "#b42318", "#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16",
    "#16a34a", "#14b8a6", "#06b6d4", "#0ea5e9", "#2563eb", "#1f2be0",
    "#7c3aed", "#a855f7", "#d946ef", "#ff3d8b", "#f43f5e", "#7f1d1d",
    "#78350f", "#365314", "#064e3b", "#0f172a", "#312e81", "#581c87"
  ];
  const BACKGROUND_COLOR_PALETTE = [
    { value: "", label: "无背景" },
    { value: "#ffffff", label: "白色" },
    { value: "#f7f7f5", label: "浅灰" },
    { value: "#e5e7eb", label: "灰色" },
    { value: "#d4d4d4", label: "中灰" },
    { value: "#111111", label: "黑色" },
    { value: "#fff2b8", label: "浅黄" },
    { value: "#fde68a", label: "暖黄" },
    { value: "#ffd6e7", label: "浅粉" },
    { value: "#fecdd3", label: "玫瑰粉" },
    { value: "#d9f99d", label: "浅绿" },
    { value: "#bbf7d0", label: "薄荷绿" },
    { value: "#99f6e4", label: "青绿" },
    { value: "#bfdbfe", label: "浅蓝" },
    { value: "#bae6fd", label: "天蓝" },
    { value: "#c4b5fd", label: "浅紫" },
    { value: "#fed7aa", label: "浅橙" },
    { value: "#fca5a5", label: "浅红" },
    { value: "#ff3d8b", label: "洋红" },
    { value: "#f97316", label: "橙色" },
    { value: "#eab308", label: "黄色" },
    { value: "#22c55e", label: "绿色" },
    { value: "#14b8a6", label: "青色" },
    { value: "#0ea5e9", label: "亮蓝" },
    { value: "#1f2be0", label: "蓝色" },
    { value: "#7c3aed", label: "紫色" },
    { value: "#0f172a", label: "深蓝灰" }
  ];
  const FORCED_HIDDEN_SLIDE_CLASSES = ["hidden", "is-hidden", "d-none", "invisible", "opacity-0"];

  const EDITOR_HTML = \`
<div class="edit-hotzone" data-html-deck-editor-ui aria-hidden="true"></div>
  <button class="edit-toggle" id="editToggle" data-html-deck-editor-ui title="Edit mode (E)" aria-label="Toggle edit mode">E</button>
  <div class="editor-shell" id="editorShell" data-html-deck-editor-ui aria-label="演示编辑器">
    <div class="editor-toolbar" role="toolbar" aria-label="编辑工具">
      <button class="editor-button" id="helpBtn" type="button">编辑器功能介绍</button>
      <button class="editor-button editor-icon-button" id="undoBtn" type="button" title="撤回 (Cmd/Ctrl+Z)" aria-label="撤回" disabled>↶</button>
      <button class="editor-button editor-icon-button" id="redoBtn" type="button" title="重做 (Cmd/Ctrl+Shift+Z)" aria-label="重做" disabled>↷</button>
      <button class="editor-button editor-icon-button format-brush-button" id="formatBrushBtn" type="button" title="格式刷" aria-label="格式刷" aria-pressed="false" disabled>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M14.5 4.8 19.2 9.5l-8.4 8.4H6.1v-4.7l8.4-8.4Z"></path>
          <path d="M13.2 6.1 17.9 10.8"></path>
          <path d="M5.6 18.4c-1.5 0-2.6.9-2.6 2.1 1.6.5 3.5.2 4.7-1"></path>
        </svg>
      </button>
      <button class="editor-button" id="addTextBtn" type="button">添加文字框</button>
      <button class="editor-button" id="addImageBtn" type="button">添加图片</button>
      <div class="shape-picker-wrap">
        <button class="editor-button" id="addShapeBtn" type="button" aria-haspopup="menu" aria-expanded="false">添加形状</button>
      </div>
      <div class="toolbar-action-group ai-export-group">
        <button class="editor-button" id="aiExportBtn" type="button" title="下载给 AI 的批注文件，不会保存 HTML">导出 for-ai.md</button>
        <button class="toolbar-help-button" id="aiExportHelpBtn" type="button" title="for-ai.md 使用说明" aria-label="for-ai.md 使用说明">?</button>
      </div>
      <button class="editor-button primary" id="saveBtn" type="button" title="覆盖或下载当前 HTML 文件">保存 HTML</button>
      <button class="editor-button danger" id="exitEditBtn" type="button">退出编辑</button>
    </div>
    <div class="editor-help-modal" id="editorHelp" role="dialog" aria-modal="true" aria-labelledby="editorHelpTitle" hidden>
      <div class="editor-help-card">
        <div class="editor-help-header">
          <h2 class="editor-help-title" id="editorHelpTitle">编辑器使用介绍</h2>
          <button class="editor-help-close" id="helpCloseBtn" type="button" aria-label="关闭">×</button>
        </div>
        <div class="editor-help-body">
          <section class="editor-help-section">
            <h3>打开和选择</h3>
            <p>按 E 或点左上角按钮进入编辑。点选画面里的文字、图片、背景图或视觉块后，右侧面板会显示可编辑属性。</p>
          </section>
          <section class="editor-help-section">
            <h3>内容和图片</h3>
            <ul>
              <li>文字在右侧 Content 区修改，双击文字会自动聚焦到文字输入框。</li>
              <li>拖入图片到画面可新增图片；选中图片后拖入或选择文件会替换它。</li>
              <li>未标记的普通 HTML 也会自动识别常见文本、图片、背景图、SVG/canvas 和有边框/背景的视觉块。</li>
            </ul>
          </section>
          <section class="editor-help-section">
            <h3>布局和样式</h3>
            <p>拖动选框移动元素，拖右下角改变尺寸；右侧 Layout 可以精确输入位置和大小。选中元素或文字片段后点工具栏小刷子，可以把样式刷到另一个元素或另一段文字。</p>
          </section>
          <section class="editor-help-section">
            <h3>动效和保存</h3>
            <ul>
              <li>Motion 区可以设置入场方式、出现顺序、延迟和时长，并支持预览当前元素或重播本页。</li>
              <li>选中元素后可拖动、缩放，点选框右上角 × 或按 Delete/Backspace 删除；撤回用 ↶ 或 Cmd/Ctrl+Z，重做用 ↷ 或 Cmd/Ctrl+Shift+Z。</li>
              <li>保存 HTML 会优先覆盖你授权的 index.html；浏览器不支持覆盖写入时，会退回为下载当前 HTML。</li>
              <li>选中元素后可在右侧 AI 批注里写修改意见；导出 for-ai.md 会带给 AI，保存 HTML 不会写入批注标记。</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    <div class="editor-help-modal" id="aiExportHelp" role="dialog" aria-modal="true" aria-labelledby="aiExportHelpTitle" hidden>
      <div class="editor-help-card">
        <div class="editor-help-header">
          <h2 class="editor-help-title" id="aiExportHelpTitle">for-ai.md 使用说明</h2>
          <button class="editor-help-close" id="aiExportHelpCloseBtn" type="button" aria-label="关闭">×</button>
        </div>
        <div class="editor-help-body">
          <section class="editor-help-section">
            <h3>它是什么</h3>
            <p>for-ai.md 是给外部 AI 读取的交接文件。它不会保存 HTML，也不会改写当前页面。</p>
          </section>
          <section class="editor-help-section">
            <h3>里面有什么</h3>
            <ul>
              <li>当前 HTML，其中被批注的元素会带稳定 anchor，方便 AI 定位。</li>
              <li>你在编辑器里写的批注，包括目标元素、所在页和修改意见。</li>
              <li>给 AI 的结构要求，比如保持 deck-stage 和 slide 层级，不要把内容改成截图。</li>
            </ul>
          </section>
          <section class="editor-help-section">
            <h3>怎么用</h3>
            <ul>
              <li>先选中画面里的文字、图片或块，在右侧 AI 批注里写清楚想让 AI 怎么改。</li>
              <li>点“导出 for-ai.md”，把下载的文件内容发给你使用的 AI。</li>
              <li>让 AI 按批注返回完整 HTML 或明确的修改建议。</li>
              <li>“保存 HTML”只保存当前页面，不会把批注或 anchor 写进正式 HTML。</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    <div class="editor-help-modal" id="resetHelp" role="dialog" aria-modal="true" aria-labelledby="resetHelpTitle" hidden>
      <div class="editor-help-card">
        <div class="editor-help-header">
          <h2 class="editor-help-title" id="resetHelpTitle">重置编辑说明</h2>
          <button class="editor-help-close" id="resetHelpCloseBtn" type="button" aria-label="关闭">×</button>
        </div>
        <div class="editor-help-body">
          <section class="editor-help-section">
            <h3>它会清除什么</h3>
            <p>重置编辑只清除当前浏览器为这份 HTML 自动保存的本地草稿，也就是 localStorage 里的编辑记录和旧版草稿记录。</p>
          </section>
          <section class="editor-help-section">
            <h3>它不会清除什么</h3>
            <p>重置本身不会删除或改写任何 HTML 文件，包括你刚保存或覆盖过的 index.html；它只动当前浏览器里的草稿记录。</p>
          </section>
          <section class="editor-help-section">
            <h3>和保存的关系</h3>
            <p>“保存 HTML”会把当前画面写入你授权的 HTML 文件；如果浏览器不支持覆盖写入，就下载新的 index.html。“重置编辑”只是清掉当前浏览器的自动草稿。刷新后页面会重新读取 HTML 文件本身，不再叠加草稿；如果这个文件之前已经被覆盖保存过，刷新后看到的仍然是已保存后的内容。如果刷新前又点保存 HTML，保存的仍然是当前屏幕上的内容。</p>
          </section>
        </div>
      </div>
    </div>
    <div class="editor-help-modal" id="editorConfirm" role="dialog" aria-modal="true" aria-labelledby="editorConfirmTitle" hidden>
      <div class="editor-help-card">
        <div class="editor-help-header">
          <h2 class="editor-help-title" id="editorConfirmTitle">确认操作</h2>
          <button class="editor-help-close" id="editorConfirmCloseBtn" type="button" aria-label="关闭">×</button>
        </div>
        <div class="editor-help-body">
          <p class="editor-confirm-message" id="editorConfirmMessage"></p>
          <div class="editor-confirm-actions">
            <button class="editor-button" id="editorConfirmCancelBtn" type="button">取消</button>
            <button class="editor-button danger" id="editorConfirmOkBtn" type="button">确认</button>
          </div>
        </div>
      </div>
    </div>
    <div class="shape-menu" id="shapeMenu" role="menu" hidden>
      <button class="shape-choice" type="button" data-shape-choice="rect">矩形</button>
      <button class="shape-choice" type="button" data-shape-choice="roundRect">圆角矩形</button>
      <button class="shape-choice" type="button" data-shape-choice="circle">圆形</button>
      <button class="shape-choice" type="button" data-shape-choice="triangle">三角形</button>
      <button class="shape-choice" type="button" data-shape-choice="line">直线</button>
      <button class="shape-choice" type="button" data-shape-choice="arrow">箭头</button>
    </div>
    <aside class="editor-slides" aria-label="幻灯片列表">
      <p class="editor-title">Slides</p>
      <div class="slide-rail-list" id="slideRail"></div>
    </aside>
    <aside class="editor-panel" aria-label="属性面板">
      <section class="inspector-section">
        <p class="editor-title">Selection</p>
        <div class="selection-name" id="selectionName">未选中元素</div>
        <div class="drop-zone" id="imageDropZone">拖图片到这里，或拖到画面里<br>可替换选中图片，也可新增图片</div>
      </section>
      <section class="inspector-section comment-section">
        <p class="editor-title">AI 批注</p>
        <div class="comment-target" id="commentTargetStatus">未选中元素</div>
        <label class="field-label" for="commentInput">批注</label>
        <textarea class="editor-textarea comment-input" id="commentInput" placeholder="写给 AI 的修改意见" disabled></textarea>
        <p class="field-help comment-help">仅用于 for-ai.md；保存 HTML 会自动去掉批注标记。</p>
        <div class="inspector-actions">
          <button class="editor-button" id="saveCommentBtn" type="button" disabled>保存批注</button>
          <button class="editor-button" id="clearCommentBtn" type="button" disabled>清除批注</button>
        </div>
        <div class="comment-list" id="commentList"></div>
      </section>
      <section class="inspector-section">
        <p class="editor-title">Content</p>
        <label class="field-label" for="textInput">文字</label>
        <p class="field-help">在画面或这里选中文字后，可以只改选中文字的样式。</p>
        <textarea class="editor-textarea" id="textInput" disabled></textarea>
        <label class="field-label" for="imageInput">图片文件</label>
        <div class="file-picker-row">
          <button class="editor-button" id="imagePickBtn" type="button" disabled>选择图片</button>
          <span class="file-name" id="imageFileName">未选择图片</span>
          <input class="file-input-hidden" id="imageInput" type="file" accept="image/*" disabled tabindex="-1">
        </div>
        <label class="field-label" for="shapeInput">形状类型</label>
        <select class="editor-select" id="shapeInput" disabled>
          <option value="rect">矩形</option>
          <option value="roundRect">圆角矩形</option>
          <option value="circle">圆形</option>
          <option value="triangle">三角形</option>
          <option value="line">直线</option>
          <option value="arrow">箭头</option>
        </select>
      </section>
      <section class="inspector-section">
        <p class="editor-title">Style</p>
        <label class="field-label" for="fontFamilyInput">字体</label>
        <select class="editor-select" id="fontFamilyInput" disabled>
          <option value="">跟随原样式</option>
          <option value='\${FONT_BODY_STACK}'>正文无衬线</option>
          <option value='\${FONT_HEITI_STACK}'>中文黑体</option>
          <option value='\${FONT_CJK_SERIF_STACK}'>中文标题衬线</option>
          <option value='\${FONT_SONGTI_STACK}'>中文宋体</option>
          <option value='\${FONT_KAITI_STACK}'>中文楷体</option>
          <option value='\${FONT_LATIN_SERIF_STACK}'>英文衬线</option>
          <option value='Inter, Arial, Helvetica, sans-serif'>Inter / Arial</option>
          <option value='Aptos, Calibri, Arial, sans-serif'>Aptos / Calibri</option>
          <option value='Arial, Helvetica, sans-serif'>Arial</option>
          <option value='"Times New Roman", Times, serif'>Times New Roman</option>
          <option value='\${FONT_DISPLAY_STACK}'>窄体展示</option>
          <option value='\${FONT_MONO_STACK}'>等宽代码</option>
          <option value="__custom__">自定义字体...</option>
        </select>
        <input class="editor-field font-custom-field" id="fontFamilyCustomInput" type="text" placeholder='输入字体名或字体栈，如 "霞鹜文楷", serif' disabled>
        <div class="field-grid">
          <label><span class="field-label">字号</span><input class="editor-field" id="fontSizeInput" type="number" min="8" max="220" disabled></label>
          <div class="color-field">
            <span class="field-label" id="colorInputLabel">颜色</span>
            <button class="editor-field color-picker-button" id="colorButton" type="button" aria-haspopup="menu" aria-expanded="false" aria-labelledby="colorInputLabel colorInputText" disabled>
              <span class="color-swatch no-color" id="colorSwatch" aria-hidden="true"></span>
              <span id="colorInputText">未选中</span>
            </button>
            <div class="color-popover" id="colorPalette" role="menu" hidden>
              <div class="color-preset-grid" id="colorPresetGrid" aria-label="文字颜色预设"></div>
              <div class="color-picker-host" id="colorPickerHost" aria-label="自定义文字颜色"></div>
              <div class="color-picker-actions">
                <button class="editor-button color-eyedropper-button" id="colorEyedropperBtn" type="button" title="吸管取文字色" aria-label="吸管取文字色" disabled><span aria-hidden="true">⌖</span><span>吸管取文字色</span></button>
              </div>
            </div>
          </div>
        </div>
        <div class="text-style-controls" aria-label="文字样式">
          <button class="editor-button text-style-button" id="fontWeightBtn" type="button" title="粗体" aria-label="粗体" aria-pressed="false" disabled><strong>B</strong></button>
          <button class="editor-button text-style-button text-style-italic" id="fontStyleBtn" type="button" title="斜体" aria-label="斜体" aria-pressed="false" disabled><span aria-hidden="true">I</span></button>
        </div>
        <div class="field-grid">
          <div class="background-field">
            <span class="field-label" id="bgInputLabel">背景</span>
            <button class="editor-field color-picker-button" id="bgInput" type="button" aria-haspopup="menu" aria-expanded="false" aria-labelledby="bgInputLabel bgInputText" disabled>
              <span class="color-swatch no-color" id="bgSwatch" aria-hidden="true"></span>
              <span id="bgInputText">无背景</span>
            </button>
            <div class="color-popover bg-palette" id="bgPalette" role="menu" hidden>
              <div class="color-preset-grid" id="bgPresetGrid" aria-label="背景颜色预设"></div>
              <div class="color-picker-host" id="bgPickerHost" aria-label="自定义背景色"></div>
              <div class="color-picker-actions">
                <button class="editor-button color-eyedropper-button" id="bgEyedropperBtn" type="button" title="吸管取背景色" aria-label="吸管取背景色" disabled><span aria-hidden="true">⌖</span><span>吸管取背景色</span></button>
              </div>
            </div>
          </div>
          <label><span class="field-label">透明</span><input class="editor-field" id="opacityInput" type="number" min="0" max="100" step="5" disabled></label>
        </div>
      </section>
      <section class="inspector-section">
        <p class="editor-title">Layout</p>
        <div class="field-grid">
          <label><span class="field-label">X</span><input class="editor-field" id="xInput" type="number" min="-1920" max="1920" disabled></label>
          <label><span class="field-label">Y</span><input class="editor-field" id="yInput" type="number" min="-1080" max="1080" disabled></label>
        </div>
        <div class="field-grid">
          <label><span class="field-label">宽</span><input class="editor-field" id="widthInput" type="number" min="10" max="1920" disabled></label>
          <label><span class="field-label">高</span><input class="editor-field" id="heightInput" type="number" min="10" max="1080" disabled></label>
        </div>
        <div class="inspector-actions">
          <button class="editor-button" id="bringForwardBtn" type="button" disabled>上移层级</button>
          <button class="editor-button" id="sendBackwardBtn" type="button" disabled>下移层级</button>
        </div>
      </section>
      <section class="inspector-section">
        <p class="editor-title">Motion</p>
        <p class="motion-status" id="motionStatus">未选中元素</p>
        <label class="field-label" for="animSelect">入场方式</label>
        <select class="editor-select" id="animSelect" disabled>
          <option value="">跟随原始</option>
          <option value="none">无</option>
          <option value="fade">淡入</option>
          <option value="rise">上浮</option>
          <option value="drop">下落</option>
          <option value="left">左侧滑入</option>
          <option value="right">右侧滑入</option>
          <option value="scale">缩放入场</option>
          <option value="zoom">缩小落定</option>
          <option value="pop">弹出</option>
          <option value="rotate">旋入</option>
          <option value="blur">模糊显现</option>
          <option value="flip">翻转入场</option>
        </select>
        <div class="field-grid">
          <label><span class="field-label">顺序</span><input class="editor-field" id="motionOrderInput" type="number" min="1" max="99" step="1" disabled></label>
          <label><span class="field-label">延迟 ms</span><input class="editor-field" id="delayInput" type="number" min="0" max="20000" step="50" disabled></label>
        </div>
        <div class="field-grid">
          <label><span class="field-label">时长 ms</span><input class="editor-field" id="durationInput" type="number" min="100" max="10000" step="50" disabled></label>
        </div>
        <div class="inspector-actions">
          <button class="editor-button" id="previewMotionBtn" type="button" disabled>预览当前</button>
          <button class="editor-button" id="previewSlideMotionBtn" type="button">重播本页</button>
        </div>
        <div class="inspector-actions">
          <button class="editor-button" id="restoreMotionBtn" type="button" disabled>恢复原始</button>
        </div>
      </section>
      <section class="inspector-section">
        <div class="inspector-actions">
          <button class="editor-button danger" id="deleteBtn" type="button" disabled>删除</button>
          <div class="reset-action-group">
            <button class="editor-button" id="resetBtn" type="button">重置编辑</button>
            <button class="reset-help-button" id="resetHelpBtn" type="button" title="重置编辑说明" aria-label="重置编辑说明">?</button>
          </div>
        </div>
      </section>
    </aside>
    <div class="editor-guide vertical" id="editorGuideV" data-html-deck-editor-ui aria-hidden="true"></div>
    <div class="editor-guide horizontal" id="editorGuideH" data-html-deck-editor-ui aria-hidden="true"></div>
    <div class="editor-frame" id="editorFrame" data-html-deck-editor-ui aria-hidden="true">
      <div class="frame-move" id="frameMove">拖动</div>
      <button class="frame-delete" id="frameDelete" type="button" title="删除选中元素 (Delete)" aria-label="删除选中元素">×</button>
      <div class="frame-resize" id="frameResize"></div>
    </div>
    <div class="editor-toast" id="editorToast" data-html-deck-editor-ui role="status" aria-live="polite"></div>
  </div>
\`;

  function editorRootExists() {
    return Boolean(document.getElementById("editorShell") && document.getElementById("editToggle"));
  }

  function ensureEditorDom() {
    if (editorRootExists()) return;
    document.body.insertAdjacentHTML("beforeend", EDITOR_HTML);
  }

  function getStage() {
    return document.getElementById("deckStage") || document.querySelector("[data-html-deck-editor-stage], .deck-stage, #deck");
  }

  function isDeckStageElement(element) {
    return element && element.tagName && element.tagName.toLowerCase() === "deck-stage";
  }

  function stageSlides(stage) {
    const directSlides = Array.from(stage?.children || []).filter((child) => child.classList?.contains("slide"));
    if (directSlides.length) return directSlides;
    return topLevelElements(Array.from(stage?.querySelectorAll?.(".slide") || []));
  }

  function topLevelElements(elements) {
    return elements.filter((element) => !elements.some((other) => other !== element && other.contains(element)));
  }

  function clearForcedHiddenSlideState(slide) {
    if (!slide) return;
    slide.removeAttribute("hidden");
    if (slide.getAttribute("aria-hidden") === "true") slide.removeAttribute("aria-hidden");
    FORCED_HIDDEN_SLIDE_CLASSES.forEach((className) => slide.classList.remove(className));
    if (slide.style) {
      if (slide.style.display === "none") slide.style.removeProperty("display");
      if (slide.style.visibility === "hidden") slide.style.removeProperty("visibility");
      if (Number.parseFloat(slide.style.opacity || "") === 0) slide.style.removeProperty("opacity");
    }
  }

  function normalizeSlideIndex(index, slides) {
    const count = slides?.length || 0;
    if (!count) return 0;
    const number = Number(index);
    if (!Number.isFinite(number)) return 0;
    return Math.max(0, Math.min(count - 1, Math.round(number)));
  }

  function slideOffsetX(stage, slides, index) {
    const current = normalizeSlideIndex(index, slides);
    const slide = slides?.[current];
    if (!stage || !slide) return 0;
    const offsetLeft = Number(slide.offsetLeft);
    if (Number.isFinite(offsetLeft) && (offsetLeft !== 0 || current === 0)) {
      return Math.max(0, offsetLeft);
    }
    const slideWidth = elementDesignSize(slide, stageDesignSize(stage)).width;
    return Math.max(0, slideWidth * current);
  }

  function slideIndexFromOffsetX(offsetX, slides, stage) {
    if (!slides?.length) return -1;
    const target = Math.abs(Number(offsetX) || 0);
    let bestIndex = 0;
    let bestDistance = Infinity;
    slides.forEach((slide, index) => {
      const distance = Math.abs(slideOffsetX(stage, slides, index) - target);
      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });
    return normalizeSlideIndex(bestIndex, slides);
  }

  function currentSlideFromStageTransform(stage, slides) {
    if (!stage || !slides?.length) return -1;
    const transform = stage.style?.transform || getComputedStyle(stage).transform || "";
    const pxOffset = translatePxFromTransform(transform);
    if (Number.isFinite(pxOffset)) return slideIndexFromOffsetX(pxOffset, slides, stage);
    const vwMatch = transform.match(/translate(?:3d|X)?\\(\\s*(-?\\d+(?:\\.\\d+)?)vw\\s*/i);
    if (!vwMatch) return -1;
    return normalizeSlideIndex(Math.abs(Number.parseFloat(vwMatch[1])) / 100, slides);
  }

  function translatePxFromTransform(transform) {
    const translateMatch = transform.match(/translate(?:3d|X)?\\(\\s*(-?\\d+(?:\\.\\d+)?)px\\s*/i);
    if (translateMatch) return Number.parseFloat(translateMatch[1]);
    const matrixMatch = transform.match(/^matrix\\(([^)]+)\\)$/i);
    if (matrixMatch) {
      const parts = matrixMatch[1].split(",").map((part) => Number.parseFloat(part.trim()));
      if (parts.length >= 6) return parts[4];
    }
    const matrix3dMatch = transform.match(/^matrix3d\\(([^)]+)\\)$/i);
    if (matrix3dMatch) {
      const parts = matrix3dMatch[1].split(",").map((part) => Number.parseFloat(part.trim()));
      if (parts.length >= 16) return parts[12];
    }
    return NaN;
  }

  function computeHostCurrentSlide(slides, stage) {
    const stageIndex = Number(stage?.dataset?.htmlDeckEditorCurrentSlide);
    if (Number.isFinite(stageIndex)) return normalizeSlideIndex(stageIndex, slides);
    const hostIndex = Number(window.__currentSlideIndex);
    if (Number.isFinite(hostIndex)) return normalizeSlideIndex(hostIndex, slides);
    const transformIndex = currentSlideFromStageTransform(stage, slides);
    return transformIndex >= 0 ? transformIndex : -1;
  }

  function computeCurrentSlide(slides, stage) {
    const markedIndex = slides.findIndex((slide) => slide.hasAttribute("data-html-deck-editor-current"));
    if (markedIndex >= 0) return markedIndex;
    const activeIndex = slides.findIndex((slide) => slide.classList.contains("active") || slide.classList.contains("visible") || slide.hasAttribute("data-deck-active"));
    if (activeIndex >= 0) return activeIndex;
    const hostIndex = computeHostCurrentSlide(slides, stage);
    return hostIndex >= 0 ? hostIndex : 0;
  }

  function markEditorCurrentSlide(slides, index) {
    const current = normalizeSlideIndex(index, slides);
    slides.forEach((slide, i) => {
      slide.setAttribute("data-html-deck-editor-page", "");
      if (i === current) clearForcedHiddenSlideState(slide);
      slide.toggleAttribute("data-html-deck-editor-current", i === current);
    });
    return current;
  }

  function syncHostCurrentSlide(stage, index) {
    window.__currentSlideIndex = index;
    if (stage) {
      const slides = stageSlides(stage);
      const isHorizontal = usesHorizontalSlideOffset(stage, slides);
      stage.dataset.htmlDeckEditorCurrentSlide = String(index);
      stage.style.setProperty("--html-deck-editor-current-slide", String(index));
      stage.style.setProperty("--html-deck-editor-slide-offset-x", \`\${isHorizontal ? slideOffsetX(stage, slides, index) : 0}px\`);
    }
  }

  function showPreservedSlide(stage, index, options = {}) {
    const slides = stageSlides(stage);
    const current = normalizeSlideIndex(index, slides);
    slides.forEach((slide, i) => {
      const isCurrent = i === current;
      if (isCurrent) clearForcedHiddenSlideState(slide);
      slide.classList.remove("exit");
      slide.classList.toggle("active", isCurrent);
      slide.classList.toggle("visible", isCurrent);
      slide.toggleAttribute("data-deck-active", isCurrent);
      slide.toggleAttribute("data-html-deck-editor-current", isCurrent);
      slide.setAttribute("data-html-deck-editor-page", "");
    });
    syncHostCurrentSlide(stage, current);
    syncPreservedHostControls(current, slides.length);
    if (options.dispatch !== false) {
      document.dispatchEvent(new CustomEvent("slidechange", { detail: { index: current } }));
    }
    return current;
  }

  function syncPreservedHostControls(index, total) {
    const currentText = String(index + 1).padStart(2, "0");
    const totalText = String(total).padStart(2, "0");
    document.querySelectorAll(".nav-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    ["navCounter", "slideNum"].forEach((id) => {
      const node = document.getElementById(id);
      if (node) node.textContent = \`\${currentText} / \${totalText}\`;
    });
    const progress = document.getElementById("progress");
    if (progress) progress.style.width = \`\${((index + 1) / Math.max(1, total)) * 100}%\`;
  }

  function installPreservedDeckNavigationBridge(stage, presentation) {
    if (!stage || stage.getAttribute("data-html-deck-editor-stage") !== "preserve") return;
    if (stage.dataset.htmlDeckEditorNavBridge === "true") return;
    stage.dataset.htmlDeckEditorNavBridge = "true";
    const play = (index, options = {}) => {
      presentation.slides = stageSlides(stage);
      presentation.currentSlide = showPreservedSlide(stage, index, options);
      presentation.scaleStage?.();
      return presentation.currentSlide;
    };
    if (typeof window.__playSlide !== "function") {
      window.__playSlide = (index) => play(index);
      window.__playSlide.__htmlDeckEditorBridge = true;
    }
    document.addEventListener("click", (event) => {
      if (!stage.isConnected) return;
      if (document.body.classList.contains("editing")) return;
      const target = event.target?.closest?.("#prevBtn, #nextBtn, .nav-dot, [data-slide-index], [data-slide]");
      if (!target || target.closest?.("[data-html-deck-editor-ui], #editorShell")) return;
      const slides = stageSlides(stage);
      if (!slides.length) return;
      const hostIndex = computeHostCurrentSlide(slides, stage);
      const current = hostIndex >= 0 ? hostIndex : computeCurrentSlide(slides, stage);
      let next = NaN;
      if (target.id === "prevBtn") next = current - 1;
      if (target.id === "nextBtn") next = current + 1;
      if (target.classList.contains("nav-dot")) next = Array.from(document.querySelectorAll(".nav-dot")).indexOf(target);
      if (!Number.isFinite(next)) {
        const raw = target.getAttribute("data-slide-index") || target.getAttribute("data-slide");
        next = Number.parseInt(raw, 10);
      }
      if (!Number.isFinite(next) || next < 0 || next >= slides.length) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      play(next);
    }, true);
    document.addEventListener("keydown", (event) => {
      if (!stage.isConnected) return;
      if (document.body.classList.contains("editing")) return;
      if (event.defaultPrevented || ["INPUT", "TEXTAREA", "SELECT"].includes(event.target?.tagName) || event.target?.isContentEditable) return;
      const slides = stageSlides(stage);
      if (!slides.length) return;
      const hostIndex = computeHostCurrentSlide(slides, stage);
      const current = hostIndex >= 0 ? hostIndex : computeCurrentSlide(slides, stage);
      const key = event.key;
      const delta = key === "ArrowRight" || key === "ArrowDown" || key === " " || key === "Spacebar"
        ? 1
        : key === "ArrowLeft" || key === "ArrowUp"
          ? -1
          : 0;
      if (!delta) return;
      const next = current + delta;
      if (next < 0 || next >= slides.length) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      play(next);
    }, true);
  }

  function usesHorizontalSlideOffset(stage, slides = stageSlides(stage)) {
    if (stage?.getAttribute?.("data-html-deck-editor-navigation") !== "horizontal") return false;
    if (!slides || slides.length < 2) return true;
    const firstLeft = Number(slides[0].offsetLeft) || 0;
    const firstTop = Number(slides[0].offsetTop) || 0;
    const overlaySlides = slides.every((slide) => {
      const style = getComputedStyle(slide);
      const isOverlayPositioned = style.position === "absolute" || style.position === "fixed";
      const sameOrigin = (Number(slide.offsetLeft) || 0) === firstLeft && (Number(slide.offsetTop) || 0) === firstTop;
      return isOverlayPositioned && sameOrigin;
    });
    return !overlaySlides;
  }

  function zeroInsets() {
    return { left: 0, right: 0, top: 0, bottom: 0 };
  }

  function normalizeInsets(insets) {
    const source = insets || zeroInsets();
    return {
      left: Math.max(0, Number(source.left) || 0),
      right: Math.max(0, Number(source.right) || 0),
      top: Math.max(0, Number(source.top) || 0),
      bottom: Math.max(0, Number(source.bottom) || 0)
    };
  }

  function safeAreaFromInsets(insets) {
    const safeInsets = normalizeInsets(insets);
    const width = Math.max(320, window.innerWidth - safeInsets.left - safeInsets.right);
    const height = Math.max(240, window.innerHeight - safeInsets.top - safeInsets.bottom);
    return { ...safeInsets, width, height };
  }

  function elementDesignSize(element, fallback = { width: 1920, height: 1080 }) {
    if (!element) return fallback;
    const attrWidth = Number.parseFloat(element.getAttribute?.("width") || element.dataset?.designWidth || "");
    const attrHeight = Number.parseFloat(element.getAttribute?.("height") || element.dataset?.designHeight || "");
    const rect = element.getBoundingClientRect?.();
    const width = attrWidth || element.offsetWidth || rect?.width || fallback.width;
    const height = attrHeight || element.offsetHeight || rect?.height || fallback.height;
    return {
      width: Math.max(1, width),
      height: Math.max(1, height)
    };
  }

  function stageDesignSize(stage) {
    const slides = stageSlides(stage);
    const slide = slides.find((item) => (
      item.hasAttribute("data-html-deck-editor-current") ||
      item.classList.contains("active") ||
      item.classList.contains("visible") ||
      item.hasAttribute("data-deck-active")
    )) || slides[0];
    if (isDeckStageElement(stage)) {
      return elementDesignSize(stage, { width: 1920, height: 1080 });
    }
    if (stage?.getAttribute?.("data-html-deck-editor-stage") === "preserve") {
      return elementDesignSize(slide || stage, { width: window.innerWidth || 1920, height: window.innerHeight || 1080 });
    }
    return elementDesignSize(stage || slide, { width: 1920, height: 1080 });
  }

  function stageFitTransform(size, insets) {
    const safe = safeAreaFromInsets(insets);
    const scale = Math.max(0.05, Math.min(safe.width / size.width, safe.height / size.height));
    return {
      x: Math.round(safe.left + (safe.width - size.width * scale) / 2),
      y: Math.round(safe.top + (safe.height - size.height * scale) / 2),
      scale
    };
  }

  function clearPreservedStageSafeLayout(stage) {
    if (!stage) return;
    stage.style.removeProperty("--html-deck-editor-stage-x");
    stage.style.removeProperty("--html-deck-editor-stage-y");
    stage.style.removeProperty("--html-deck-editor-stage-scale");
    stage.style.removeProperty("--html-deck-editor-current-slide");
    stage.style.removeProperty("--html-deck-editor-slide-offset-x");
    stage.querySelectorAll("[data-html-deck-editor-current], [data-html-deck-editor-page]").forEach((slide) => {
      slide.removeAttribute("data-html-deck-editor-current");
      slide.removeAttribute("data-html-deck-editor-page");
    });
  }

  function resetPreservedStageForExport(stage) {
    if (!stage || stage.getAttribute("data-html-deck-editor-stage") !== "preserve") return;
    if (stage.getAttribute("data-html-deck-editor-navigation") !== "horizontal") return;
    stage.style.removeProperty("transform");
    const slides = stageSlides(stage);
    slides.forEach((slide, index) => {
      const isFirst = index === 0;
      if (isFirst) clearForcedHiddenSlideState(slide);
      slide.classList.toggle("active", isFirst);
      slide.classList.toggle("visible", isFirst);
      slide.toggleAttribute("data-deck-active", isFirst);
    });
  }

  function layoutPreservedStageForEditor(stage, insets) {
    if (!stage || stage.getAttribute("data-html-deck-editor-stage") !== "preserve") return false;
    const safeInsets = normalizeInsets(insets);
    const editing = safeInsets.left || safeInsets.right || safeInsets.top || safeInsets.bottom;
    if (!editing) {
      clearPreservedStageSafeLayout(stage);
      return true;
    }

    const size = stageDesignSize(stage);
    const transform = stageFitTransform(size, safeInsets);
    stage.style.setProperty("--html-deck-editor-stage-x", \`\${transform.x}px\`);
    stage.style.setProperty("--html-deck-editor-stage-y", \`\${transform.y}px\`);
    stage.style.setProperty("--html-deck-editor-stage-scale", String(transform.scale));
    return true;
  }

  function defaultScaleStage(stage, insets = zeroInsets()) {
    if (!stage || stage.getAttribute("data-html-deck-editor-stage") === "preserve") return;
    const size = stageDesignSize(stage);
    const transform = stageFitTransform(size, insets);
    stage.style.transform = \`translate(\${transform.x}px, \${transform.y}px) scale(\${transform.scale})\`;
    stage.style.transformOrigin = "top left";
    stage.dataset.scale = String(transform.scale);
    stage.dataset.offsetX = String(transform.x);
    stage.dataset.offsetY = String(transform.y);
  }

  function normalizePresentation(input) {
    const stage = getStage();
    if (!stage) throw new Error("FrontendSlidesEditor requires #deckStage or .deck-stage");
    const presentation = input || {};
    if (!presentation.stage || !presentation.stage.isConnected || presentation.stage !== stage) {
      presentation.stage = stage;
      delete presentation.showSlide;
      delete presentation.scaleStage;
      delete presentation.setEditorInsets;
      presentation.currentSlide = computeCurrentSlide(stageSlides(stage), stage);
    }
    presentation.slides = stageSlides(stage);
    if (!Number.isFinite(presentation.currentSlide)) presentation.currentSlide = computeCurrentSlide(presentation.slides, stage);
    presentation.currentSlide = markEditorCurrentSlide(presentation.slides, presentation.currentSlide);
    syncHostCurrentSlide(stage, presentation.currentSlide);
    presentation.editorInsets = normalizeInsets(presentation.editorInsets);
    installPreservedDeckNavigationBridge(stage, presentation);

    const originalShowSlide = typeof presentation.showSlide === "function" ? presentation.showSlide.bind(presentation) : null;
    presentation.showSlide = function showSlide(index) {
      this.slides = stageSlides(stage);
      const requestedSlide = normalizeSlideIndex(index, this.slides);
      if (originalShowSlide) {
        originalShowSlide(requestedSlide);
        this.slides = stageSlides(stage);
        const hostIndex = computeHostCurrentSlide(this.slides, stage);
        this.currentSlide = markEditorCurrentSlide(this.slides, hostIndex >= 0 ? hostIndex : requestedSlide);
      } else {
        this.currentSlide = showPreservedSlide(stage, requestedSlide, { dispatch: false });
        if (usesHorizontalSlideOffset(stage, this.slides)) {
          stage.style.transform = \`translateX(\${-slideOffsetX(stage, this.slides, this.currentSlide)}px)\`;
          stage.style.setProperty("--html-deck-editor-current-slide", String(this.currentSlide));
        }
      }
      syncHostCurrentSlide(stage, this.currentSlide);
      if (typeof window.__playSlide === "function" && !window.__playSlide.__htmlDeckEditorBridge) {
        try {
          window.__playSlide(this.currentSlide);
        } catch (error) {
          console.warn("HtmlDeckEditor could not sync the host slide player.", error);
        }
      }
      this.scaleStage?.();
      document.dispatchEvent(new CustomEvent("slidechange", { detail: { index: this.currentSlide } }));
    };

    const originalScaleStage = typeof presentation.scaleStage === "function" ? presentation.scaleStage.bind(presentation) : null;
    presentation.scaleStage = () => {
      originalScaleStage?.();
      if (isDeckStageElement(stage) && typeof stage.fit === "function") {
        stage.fit?.();
        return;
      }
      if (!layoutPreservedStageForEditor(stage, presentation.editorInsets)) {
        defaultScaleStage(stage, presentation.editorInsets);
      }
    };
    window.addEventListener("resize", presentation.scaleStage);

    const originalSetEditorInsets = typeof presentation.setEditorInsets === "function" ? presentation.setEditorInsets.bind(presentation) : null;
    presentation.setEditorInsets = (insets) => {
      presentation.editorInsets = normalizeInsets(insets);
      if (typeof stage.setEditorInsets === "function") {
        stage.setEditorInsets(presentation.editorInsets);
      } else {
        originalSetEditorInsets?.(presentation.editorInsets);
      }
    };

    if (typeof presentation.injectChrome !== "function") presentation.injectChrome = () => {};
    return presentation;
  }

    class DeckEditor {
      constructor(presentation) {
        this.presentation = presentation;
        this.storageKey = this.makeStorageKey();
        this.legacyStorageKeys = [];
        this.isActive = false;
        this.selected = null;
        this.hideTimeout = null;
        this.dragState = null;
        this.fileDragDepth = 0;
        this.undoStack = [];
        this.historyIndex = -1;
        this.isRestoringHistory = false;
        this.hasPendingHistoryChange = false;
        this.historyLimit = 40;
        this.lastInsert = { x: 720, y: 300 };
        this.snapThreshold = 12;
        this.motionFrameRaf = null;
        this.motionCleanupTimers = new WeakMap();
        this.motionStableBoxes = new WeakMap();
        this.motionStableAncestors = new WeakMap();
        this.motionAncestorCounts = new WeakMap();
        this.textSelectionRange = null;
        this.textSelectionElement = null;
        this.layoutRefreshTimers = [];
        this.globalListenerController = typeof AbortController !== "undefined" ? new AbortController() : null;
        this.globalListeners = [];
        this.lastSlideReplay = { index: -1, at: 0 };
        this.motionHold = false;
        this.pendingConfirm = null;
        this.colorPickers = {};
        this.deleteConfirmKey = \`\${this.storageKey}:delete-confirm-seen\`;
        this.fileHandle = null;
        this.comments = {};
        this.commentMode = false;
        this.commentInputAnchor = "";
        this.formatBrush = null;
        this.toggle = document.getElementById("editToggle");
        this.hotzone = document.querySelector(".edit-hotzone");
        this.shell = document.getElementById("editorShell");
        this.stage = presentation.stage || getStage();
        this.frame = document.getElementById("editorFrame");
        this.frameMove = document.getElementById("frameMove");
        this.frameDelete = document.getElementById("frameDelete");
        this.frameResize = document.getElementById("frameResize");
        this.guideV = this.ensureOverlayElement("editorGuideV", "editor-guide vertical");
        this.guideH = this.ensureOverlayElement("editorGuideH", "editor-guide horizontal");
        this.toast = document.getElementById("editorToast");
        this.attachFrame();
        this.controls = {
          slideRail: document.getElementById("slideRail"),
          help: document.getElementById("helpBtn"),
          helpModal: document.getElementById("editorHelp"),
          helpClose: document.getElementById("helpCloseBtn"),
          aiExportHelp: document.getElementById("aiExportHelpBtn"),
          aiExportHelpModal: document.getElementById("aiExportHelp"),
          aiExportHelpClose: document.getElementById("aiExportHelpCloseBtn"),
          resetHelp: document.getElementById("resetHelpBtn"),
          resetHelpModal: document.getElementById("resetHelp"),
          resetHelpClose: document.getElementById("resetHelpCloseBtn"),
          confirmModal: document.getElementById("editorConfirm"),
          confirmTitle: document.getElementById("editorConfirmTitle"),
          confirmMessage: document.getElementById("editorConfirmMessage"),
          confirmClose: document.getElementById("editorConfirmCloseBtn"),
          confirmCancel: document.getElementById("editorConfirmCancelBtn"),
          confirmOk: document.getElementById("editorConfirmOkBtn"),
          undo: document.getElementById("undoBtn"),
          redo: document.getElementById("redoBtn"),
          formatBrush: document.getElementById("formatBrushBtn"),
          addText: document.getElementById("addTextBtn"),
          addImage: document.getElementById("addImageBtn"),
          addShape: document.getElementById("addShapeBtn"),
          shapeMenu: document.getElementById("shapeMenu"),
          aiExport: document.getElementById("aiExportBtn"),
          save: document.getElementById("saveBtn"),
          exit: document.getElementById("exitEditBtn"),
          selectionName: document.getElementById("selectionName"),
          commentTarget: document.getElementById("commentTargetStatus"),
          commentInput: document.getElementById("commentInput"),
          saveComment: document.getElementById("saveCommentBtn"),
          clearComment: document.getElementById("clearCommentBtn"),
          commentList: document.getElementById("commentList"),
          dropZone: document.getElementById("imageDropZone"),
          imagePick: document.getElementById("imagePickBtn"),
          imageName: document.getElementById("imageFileName"),
          text: document.getElementById("textInput"),
          image: document.getElementById("imageInput"),
          shape: document.getElementById("shapeInput"),
          fontFamily: document.getElementById("fontFamilyInput"),
          fontFamilyCustom: document.getElementById("fontFamilyCustomInput"),
          fontSize: document.getElementById("fontSizeInput"),
          fontWeight: document.getElementById("fontWeightBtn"),
          fontStyle: document.getElementById("fontStyleBtn"),
          colorButton: document.getElementById("colorButton"),
          colorPalette: document.getElementById("colorPalette"),
          colorPresetGrid: document.getElementById("colorPresetGrid"),
          colorPickerHost: document.getElementById("colorPickerHost"),
          colorEyedropper: document.getElementById("colorEyedropperBtn"),
          colorSwatch: document.getElementById("colorSwatch"),
          colorText: document.getElementById("colorInputText"),
          bg: document.getElementById("bgInput"),
          bgPickerHost: document.getElementById("bgPickerHost"),
          bgEyedropper: document.getElementById("bgEyedropperBtn"),
          bgSwatch: document.getElementById("bgSwatch"),
          bgText: document.getElementById("bgInputText"),
          bgPalette: document.getElementById("bgPalette"),
          bgPresetGrid: document.getElementById("bgPresetGrid"),
          opacity: document.getElementById("opacityInput"),
          x: document.getElementById("xInput"),
          y: document.getElementById("yInput"),
          width: document.getElementById("widthInput"),
          height: document.getElementById("heightInput"),
          bringForward: document.getElementById("bringForwardBtn"),
          sendBackward: document.getElementById("sendBackwardBtn"),
          motionStatus: document.getElementById("motionStatus"),
          anim: document.getElementById("animSelect"),
          order: document.getElementById("motionOrderInput"),
          delay: document.getElementById("delayInput"),
          duration: document.getElementById("durationInput"),
          previewMotion: document.getElementById("previewMotionBtn"),
          previewSlideMotion: document.getElementById("previewSlideMotionBtn"),
          restoreMotion: document.getElementById("restoreMotionBtn"),
          delete: document.getElementById("deleteBtn"),
          reset: document.getElementById("resetBtn")
        };
        [this.controls.colorPalette, this.controls.bgPalette].forEach((palette) => {
          if (palette && palette.parentElement !== this.shell) this.shell.appendChild(palette);
        });
        this.prepareEditableElements();
        this.prepareEditableIds();
        this.renderTextColorPalette();
        this.renderBackgroundPalette();
        this.initColorPickers();
        this.restore();
        this.syncCommentMarkers();
        this.renderComments();
        this.pushHistory();
        this.renderSlideRail();
        this.bindControls();
        this.bindEditableEvents();
        this.updateInspector();
        this.hideDeckResetControl();
        requestAnimationFrame(() => {
          this.hideDeckResetControl();
          this.replayActiveSlideMotion(false);
        });
      }

      hideDeckResetControl() {
        const roots = [document, this.stage?.shadowRoot].filter(Boolean);
        roots.forEach((root) => {
          root.querySelectorAll?.(".deck-controls .reset, .overlay .btn.reset").forEach((button) => {
            const divider = button.previousElementSibling;
            if (divider?.classList.contains("divider")) divider.hidden = true;
            button.hidden = true;
            button.setAttribute("aria-hidden", "true");
            button.tabIndex = -1;
          });
        });
      }

      attachFrame() {
        this.stage.querySelectorAll("[data-html-deck-editor-ui], #editorFrame, #editorGuideV, #editorGuideH").forEach((node) => {
          if (node !== this.frame && node !== this.guideV && node !== this.guideH) node.remove();
        });
        this.frame.classList.remove("active");
        this.frame.removeAttribute("style");
        this.hideGuides();
        this.shell.appendChild(this.guideV);
        this.shell.appendChild(this.guideH);
        this.shell.appendChild(this.frame);
      }

      ensureOverlayElement(id, className) {
        let element = document.getElementById(id);
        if (!element) {
          element = document.createElement("div");
          element.id = id;
          element.setAttribute("aria-hidden", "true");
        }
        element.className = className;
        element.setAttribute("data-html-deck-editor-ui", "");
        return element;
      }

      isEditorUiElement(target) {
        return Boolean(target?.closest?.("[data-html-deck-editor-ui], #editorShell, #editorFrame, #editorGuideV, #editorGuideH, #editorToast"));
      }

      makeStorageKey() {
        return \`frontend-slides:\${location.pathname}:\${document.title}:visual-edits:v1\`;
      }

      getEditableElements() {
        return Array.from(new Set(this.stage.querySelectorAll("[data-editable], [data-editable-media], [data-editable-box], [data-editor-kind], .editor-layer")));
      }

      closestSlide(element) {
        if (!element || !this.stage.contains(element)) return null;
        const slides = this.presentation?.slides?.length ? this.presentation.slides : stageSlides(this.stage);
        return slides.find((slide) => slide === element || slide.contains(element)) || null;
      }

      prepareEditableElements() {
        this.stage.querySelectorAll("[data-editor-auto], [data-editor-kind], [data-editor-small]").forEach((element) => {
          delete element.dataset.editorAuto;
          delete element.dataset.editorKind;
          delete element.dataset.editorSmall;
        });
        this.withEditVisibleElements(() => {
        const candidates = Array.from(this.stage.querySelectorAll(".slide *")).filter((element) => !this.shouldIgnoreEditorCandidate(element));
        candidates.forEach((element) => {
          const explicitKind = this.explicitEditorKind(element);
          if (explicitKind) this.markEditorKind(element, explicitKind, false);
        });
        candidates.forEach((element) => {
          if (element.dataset.editorKind) return;
          const kind = this.inferEditorKind(element, { includeBoxes: false });
          if (kind) this.markEditorKind(element, kind, true);
        });
        candidates.slice().reverse().forEach((element) => {
          if (element.dataset.editorKind) return;
          const kind = this.inferEditorKind(element, { onlyBoxes: true });
          if (kind) this.markEditorKind(element, kind, true);
        });
        this.pruneCompositeAutoContainers();
        });
      }

      originalMotionSelector() {
        return [
          "[data-anim]",
          ".row-fill",
          ".tl-node",
          ".stack-block",
          ".bar-tower",
          ".sub-card",
          ".col",
          ".vrule",
          ".kpi-cell",
          ".card-fill",
          ".card-accent",
          ".card-ink"
        ].join(", ");
      }

      shouldHoldMotionNode(element) {
        if (!element?.matches) return false;
        if (element.matches(this.originalMotionSelector())) return true;
        const style = getComputedStyle(element);
        const hasCssAnimation = (style.animationName || "")
          .split(",")
          .some((name) => name.trim() && name.trim() !== "none");
        const opacity = Number.parseFloat(style.opacity || "1");
        return hasCssAnimation || opacity <= 0.01 || element.style?.opacity === "0";
      }

      motionHoldTargetsFor(element, slide) {
        const targets = [];
        let node = element;
        while (node && node !== slide) {
          if (this.shouldHoldMotionNode(node)) targets.push(node);
          node = node.parentElement;
        }
        return targets;
      }

      holdMotionNodeForEditing(node) {
        node.classList.add("html-deck-editor-edit-visible");
        node.setAttribute("data-html-deck-editor-motion-hold", "");
        node.style.setProperty("--html-deck-editor-edit-opacity", "1");
      }

      withEditVisibleElements(callback) {
        const selector = this.originalMotionSelector();
        const changed = [];
        this.stage.querySelectorAll(selector).forEach((element) => {
          changed.push({ element, opacity: element.style.getPropertyValue("--html-deck-editor-edit-opacity") });
          element.style.setProperty("--html-deck-editor-edit-opacity", "1");
        });
        try {
          callback();
        } finally {
          changed.forEach(({ element, opacity }) => {
            if (opacity) {
              element.style.setProperty("--html-deck-editor-edit-opacity", opacity);
            } else {
              element.style.removeProperty("--html-deck-editor-edit-opacity");
            }
          });
        }
      }

      markEditorKind(element, kind, automatic) {
        element.dataset.editorKind = kind;
        if (automatic) element.dataset.editorAuto = "true";
        if (this.isSmallEditableElement(element)) {
          element.dataset.editorSmall = "true";
        } else {
          delete element.dataset.editorSmall;
        }
      }

      shouldIgnoreEditorCandidate(element) {
        if (this.isEditorUiElement(element)) return true;
        if (element.closest("[data-generated-chrome]")) return true;
        if (element.matches("script, style, template, meta, link, br, wbr, defs, clipPath, mask, pattern, linearGradient, radialGradient, stop, source, track")) return true;
        if (this.isSvgDefinitionElement(element)) return true;
        if (element.matches(".deck-progress, .deck-count, .deck-controls, .edit-hotzone[data-html-deck-editor-ui], .edit-toggle[data-html-deck-editor-ui]")) return true;
        return false;
      }

      explicitEditorKind(element) {
        if (element.classList.contains("text-layer")) return "text";
        if (element.classList.contains("image-layer")) return "media";
        if (element.classList.contains("shape-layer")) return "box";
        if (element.classList.contains("editor-layer")) return "";
        if (element.matches("[data-editable-media]")) return "media";
        if (element.matches("[data-editable-box]")) return "box";
        if (element.matches("[data-editable]")) return "text";
        return "";
      }

      inferEditorKind(element, options = {}) {
        const onlyBoxes = options.onlyBoxes === true;
        const includeBoxes = options.includeBoxes !== false;
        if (!onlyBoxes && this.isSvgTextCandidate(element)) return "text";
        if (!onlyBoxes && (element.matches(this.mediaSelector()) || this.isBackgroundMediaCandidate(element) || this.isMediaWrapperCandidate(element))) return "media";
        if (!onlyBoxes && this.isTextCandidate(element)) return "text";
        if (includeBoxes && this.isVisualBoxCandidate(element)) return "box";
        return "";
      }

      mediaSelector() {
        return "img, picture, video, canvas, svg, iframe, object, embed";
      }

      isTextCandidate(element) {
        if (this.isSvgTextCandidate(element)) return true;
        if (!this.hasVisibleText(element)) return false;
        const rect = this.elementClientRect(element);
        if (rect.width < 2 || rect.height < 2) return false;
        if (element.querySelector(this.mediaSelector())) return false;
        const textContainerTags = "h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,caption,td,th,button,a,label";
        if (element.matches(textContainerTags)) return !this.hasNestedTextContainerChild(element);
        if (this.isInlineTextChild(element)) return !this.hasReadableTextAncestor(element) && this.isVisuallyObviousTextBlock(element, rect);
        return this.isVisuallyObviousTextBlock(element, rect);
      }

      hasVisibleText(element) {
        return Boolean(element.textContent && element.textContent.replace(/\\s+/g, "").length);
      }

      hasDirectText(element) {
        return Array.from(element.childNodes).some((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      }

      hasTextBlockChild(element) {
        return Array.from(element.children).some((child) => {
          if (this.isInlineTextChild(child)) return false;
          return this.hasVisibleText(child);
        });
      }

      hasNestedTextContainerChild(element) {
        return Array.from(element.children).some((child) => {
          if (this.isInlineTextChild(child)) return false;
          if (child.matches?.("h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,caption,td,th,button,a,label,[data-editor-kind='text'],[data-editable]")) return true;
          return false;
        });
      }

      isInlineTextChild(element) {
        if (element.matches("span,small,strong,em,b,i,code,mark,sup,sub,u,s,time,var,kbd,abbr,cite,q")) return true;
        const display = getComputedStyle(element).display;
        return display.startsWith("inline");
      }

      hasReadableTextAncestor(element) {
        const ancestor = element.parentElement?.closest("h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,caption,td,th,button,a,label,[data-editor-kind='text'],[data-editable]");
        return Boolean(ancestor && this.stage.contains(ancestor) && this.closestSlide(ancestor) === this.closestSlide(element));
      }

      isVisuallyObviousTextBlock(element, rect = this.elementClientRect(element)) {
        if (element.matches("main, article, nav, header, footer, form, ul, ol, table, tbody, thead, tr, section, .slide")) return false;
        if (!this.hasDirectText(element) && !this.hasOnlyInlineTextChildren(element)) return false;
        if (this.hasNestedTextContainerChild(element)) return false;
        if (this.isBroadLayoutContainer(element)) return false;
        const style = getComputedStyle(element);
        const fontSize = Number.parseFloat(style.fontSize) || 0;
        const display = style.display;
        const singlePurpose = this.hasOnlyInlineTextChildren(element);
        const compactTextBlock = rect.width <= window.innerWidth * 0.92 && rect.height <= window.innerHeight * 0.45;
        const textLength = (element.textContent || "").replace(/\\s+/g, "").length;
        const text = (element.textContent || "").replace(/\\s+/g, " ").trim();
        const prominentText = fontSize >= 18 || rect.height >= 34 || (fontSize >= 14 && textLength <= 120);
        const shortLabel = this.isShortLabelTextCandidate(element, rect, style, text);
        return singlePurpose && compactTextBlock && (prominentText || shortLabel) && !["grid", "table", "contents"].includes(display);
      }

      isShortLabelTextCandidate(element, rect, style, text) {
        if (!text || text.length > 96) return false;
        if (rect.width < 18 || rect.height < 8) return false;
        if (rect.height > Math.max(34, window.innerHeight * 0.08)) return false;
        const fontSize = Number.parseFloat(style.fontSize) || 0;
        if (fontSize < 9) return false;
        const letterSpacing = Number.parseFloat(style.letterSpacing) || 0;
        const words = text.match(/[A-Za-z]{2,}/g) || [];
        const uppercaseWords = words.filter((word) => word === word.toUpperCase());
        const uppercaseRatio = words.length ? uppercaseWords.length / words.length : 0;
        const hasCjk = /[\\u3400-\\u9fff]/.test(text);
        const hasLabelSeparator = /[·•|/:[\\]（）()_-]/.test(text);
        const classHint = /\\b(t-cat|t-meta|label|caption|eyebrow|kicker|row-lbl|row-val|unit|lbl|note)\\b/i.test(element.className || "");
        return letterSpacing >= 0.8 || uppercaseRatio >= 0.5 || (hasCjk && words.length > 0) || hasLabelSeparator || classHint;
      }

      hasOnlyInlineTextChildren(element) {
        return Array.from(element.children).every((child) => this.isInlineTextChild(child) || !this.hasVisibleText(child));
      }

      isVisualBoxCandidate(element) {
        if (this.isSvgGraphicCandidate(element)) return true;
        if (this.hasReadableTextAncestor(element) && this.hasVisibleText(element) && !element.querySelector(this.mediaSelector())) return false;
        if (this.hasNestedTextContainerChild(element) && !element.querySelector(this.mediaSelector())) return false;
        const rect = this.elementClientRect(element);
        if (rect.width > 1700 && rect.height > 850) return false;
        if (element.matches("main, article, nav, header, footer, form, ul, ol, table, tbody, thead, tr, section.slide")) return false;
        if (this.isBroadLayoutContainer(element)) return false;
        if (this.hasCompositeEditableChildren(element)) return false;
        const style = getComputedStyle(element);
        const borderWidth = ["Top", "Right", "Bottom", "Left"].some((side) => Number.parseFloat(style[\`border\${side}Width\`]) > 0);
        const hasBackground = style.backgroundImage !== "none" || !["rgba(0, 0, 0, 0)", "transparent"].includes(style.backgroundColor);
        const hasShape = style.clipPath !== "none" || style.boxShadow !== "none";
        const hasMedia = Boolean(element.querySelector(this.mediaSelector()));
        const hasPaint = borderWidth || hasBackground || hasShape || hasMedia;
        if (!this.hasEditableBoxSize(rect, hasPaint)) return false;
        return hasPaint;
      }

      hasEditableBoxSize(rect, hasPaint) {
        if (!hasPaint) return false;
        if (rect.width >= 24 && rect.height >= 18) return true;
        const dotLike = rect.width >= 4 && rect.height >= 4;
        const lineLike = (rect.width >= 16 && rect.height >= 1) || (rect.height >= 16 && rect.width >= 1);
        return dotLike || lineLike;
      }

      isSmallEditableElement(element) {
        const rect = this.elementClientRect(element);
        if (!rect.width && !rect.height) return false;
        return rect.width < 28 || rect.height < 28;
      }

      isSvgElement(element) {
        return typeof SVGElement !== "undefined" && element instanceof SVGElement;
      }

      svgTagName(element) {
        return element?.tagName ? element.tagName.toLowerCase() : "";
      }

      isSvgDefinitionElement(element) {
        if (!this.isSvgElement(element)) return false;
        const tag = this.svgTagName(element);
        return [
          "defs",
          "clippath",
          "mask",
          "pattern",
          "lineargradient",
          "radialgradient",
          "stop",
          "filter",
          "fegaussianblur",
          "fecolormatrix",
          "feblend",
          "feoffset",
          "feflood",
          "femerge",
          "femergenode",
          "metadata",
          "title",
          "desc",
          "style",
          "script"
        ].includes(tag);
      }

      isSvgTextCandidate(element) {
        if (!this.isSvgElement(element)) return false;
        const tag = this.svgTagName(element);
        if (!["text", "tspan"].includes(tag)) return false;
        if (!this.hasVisibleText(element)) return false;
        return this.hasVisibleSvgPaint(element);
      }

      isSvgGraphicCandidate(element) {
        if (!this.isSvgElement(element)) return false;
        const tag = this.svgTagName(element);
        if (tag === "svg" || this.isSvgDefinitionElement(element)) return false;
        if (!["path", "rect", "circle", "ellipse", "line", "polyline", "polygon", "use"].includes(tag)) return false;
        if (!this.hasVisibleSvgPaint(element)) return false;
        const rect = this.elementClientRect(element);
        const paintedLine = (rect.width >= 2 && rect.height >= 0.5) || (rect.height >= 2 && rect.width >= 0.5);
        const paintedDot = rect.width >= 2 && rect.height >= 2;
        return paintedLine || paintedDot;
      }

      hasVisibleSvgPaint(element) {
        const style = getComputedStyle(element);
        if (style.display === "none" || style.visibility === "hidden" || Number.parseFloat(style.opacity || "1") === 0) return false;
        const fill = element.getAttribute("fill") || style.fill;
        const stroke = element.getAttribute("stroke") || style.stroke;
        const tag = this.svgTagName(element);
        const hasFill = this.isVisiblePaint(fill);
        const hasStroke = this.isVisiblePaint(stroke);
        if (tag === "line") return hasStroke;
        return hasFill || hasStroke || this.svgTagName(element) === "text" || this.svgTagName(element) === "tspan";
      }

      elementClientRect(element) {
        const rect = element.getBoundingClientRect();
        if ((rect.width > 0 && rect.height > 0) || !this.isSvgElement(element) || this.svgTagName(element) === "svg") return rect;
        const svg = element.ownerSVGElement;
        if (!svg || typeof element.getBBox !== "function") return rect;
        try {
          const box = element.getBBox();
          const svgRect = svg.getBoundingClientRect();
          const viewBox = svg.viewBox && svg.viewBox.baseVal;
          const scaleX = viewBox && viewBox.width ? svgRect.width / viewBox.width : 1;
          const scaleY = viewBox && viewBox.height ? svgRect.height / viewBox.height : 1;
          const computed = getComputedStyle(element);
          const stroke = Number.parseFloat(computed.strokeWidth || element.getAttribute("stroke-width") || "0") || 0;
          const rawWidth = Math.max(0, box.width * scaleX);
          const rawHeight = Math.max(0, box.height * scaleY);
          const width = Math.max(rect.width, rawWidth, stroke * scaleX);
          const height = Math.max(rect.height, rawHeight, stroke * scaleY);
          const left = svgRect.left + (box.x - (viewBox?.x || 0)) * scaleX - Math.max(0, width - rawWidth) / 2;
          const top = svgRect.top + (box.y - (viewBox?.y || 0)) * scaleY - Math.max(0, height - rawHeight) / 2;
          return {
            x: left,
            y: top,
            left,
            top,
            width,
            height,
            right: left + width,
            bottom: top + height
          };
        } catch (error) {
          return rect;
        }
      }

      distanceToRect(clientX, clientY, rect) {
        const dx = clientX < rect.left ? rect.left - clientX : clientX > rect.right ? clientX - rect.right : 0;
        const dy = clientY < rect.top ? rect.top - clientY : clientY > rect.bottom ? clientY - rect.bottom : 0;
        return Math.hypot(dx, dy);
      }

      hitSlopForRect(rect) {
        const minSide = Math.min(rect.width, rect.height);
        const maxSide = Math.max(rect.width, rect.height);
        if (minSide <= 10 || maxSide <= 28) return 16;
        if (minSide <= 22) return 10;
        return 0;
      }

      pickNearbyEditableTarget(event) {
        const active = this.activeSlide();
        if (!active) return null;
        const slideRect = active.getBoundingClientRect();
        if (
          event.clientX < slideRect.left ||
          event.clientX > slideRect.right ||
          event.clientY < slideRect.top ||
          event.clientY > slideRect.bottom
        ) {
          return null;
        }
        let best = null;
        this.getEditableElements().forEach((candidate, index) => {
          if (this.closestSlide(candidate) !== active) return;
          if (this.isEditorUiElement(candidate)) return;
          const rect = this.elementClientRect(candidate);
          if (rect.width <= 0 && rect.height <= 0) return;
          const slop = this.hitSlopForRect(rect);
          if (!slop) return;
          const expanded = {
            left: rect.left - slop,
            right: rect.right + slop,
            top: rect.top - slop,
            bottom: rect.bottom + slop
          };
          if (
            event.clientX < expanded.left ||
            event.clientX > expanded.right ||
            event.clientY < expanded.top ||
            event.clientY > expanded.bottom
          ) {
            return;
          }
          const distance = this.distanceToRect(event.clientX, event.clientY, rect);
          const area = Math.max(1, rect.width * rect.height);
          const score = distance + Math.min(12, area / 800) - index * 0.0001;
          if (!best || score < best.score) best = { candidate, score };
        });
        return best ? best.candidate : null;
      }

      isDraggableEditable(element) {
        return Boolean(
          element &&
          (element.classList.contains("editor-layer") ||
            element.matches("[data-editable-media], [data-editable-box], [data-editor-kind='media'], [data-editor-kind='box']"))
        );
      }

      hasCssBackgroundImage(element) {
        const style = getComputedStyle(element);
        return style.backgroundImage && style.backgroundImage !== "none";
      }

      isBackgroundMediaCandidate(element) {
        if (!this.hasCssBackgroundImage(element)) return false;
        const rect = this.elementClientRect(element);
        if (rect.width < 96 || rect.height < 72) return false;
        if (element.matches("main, article, nav, header, footer, section.slide")) return false;
        return !this.isBroadLayoutContainer(element);
      }

      isMediaWrapperCandidate(element) {
        if (element.matches("main, article, nav, header, footer, ul, ol, table, section.slide")) return false;
        const rect = this.elementClientRect(element);
        if (rect.width < 96 || rect.height < 72) return false;
        if (rect.width > 1700 && rect.height > 850) return false;
        if (this.isBroadLayoutContainer(element)) return false;
        const media = Array.from(element.querySelectorAll(this.mediaSelector())).filter((node) => !this.shouldIgnoreEditorCandidate(node));
        if (media.length !== 1) return false;
        if (this.hasDirectText(element)) return false;
        return this.boundsMostlyMatch(element, media[0]);
      }

      boundsMostlyMatch(container, child) {
        const outer = this.elementClientRect(container);
        const inner = this.elementClientRect(child);
        if (outer.width <= 0 || outer.height <= 0 || inner.width <= 0 || inner.height <= 0) return false;
        const areaRatio = (inner.width * inner.height) / (outer.width * outer.height);
        if (areaRatio < 0.55) return false;
        const slackX = Math.max(24, outer.width * 0.2);
        const slackY = Math.max(24, outer.height * 0.2);
        return (
          Math.abs(inner.left - outer.left) <= slackX &&
          Math.abs(inner.top - outer.top) <= slackY &&
          Math.abs(inner.right - outer.right) <= slackX &&
          Math.abs(inner.bottom - outer.bottom) <= slackY
        );
      }

      hasCompositeEditableChildren(element) {
        const rect = this.elementClientRect(element);
        const children = Array.from(element.querySelectorAll("[data-editor-kind]")).filter((child) => {
          if (child === element || this.closestSlide(child) !== this.closestSlide(element)) return false;
          return this.isSubstantialDescendant(child, rect);
        });
        if (children.length > 1) return true;
        return children.length === 1 && this.isLayoutOnlyContainer(element);
      }

      pruneCompositeAutoContainers() {
        this.stage.querySelectorAll("[data-editor-auto='true'][data-editor-kind]").forEach((element) => {
          if (!this.hasCompositeEditableChildren(element)) return;
          delete element.dataset.editorAuto;
          delete element.dataset.editorKind;
          delete element.dataset.editorSmall;
        });
      }

      isSubstantialDescendant(child, parentRect) {
        const rect = this.elementClientRect(child);
        if (rect.width < 18 || rect.height < 14) return false;
        const parentArea = Math.max(1, parentRect.width * parentRect.height);
        const childArea = rect.width * rect.height;
        if (childArea / parentArea > 0.88) return false;
        return true;
      }

      isLayoutOnlyContainer(element) {
        const style = getComputedStyle(element);
        const hasTransparentBackground = style.backgroundImage === "none" && ["rgba(0, 0, 0, 0)", "transparent"].includes(style.backgroundColor);
        const hasPlainLine = style.boxShadow === "none" && style.clipPath === "none";
        if (!hasTransparentBackground || !hasPlainLine) return false;
        const borderWidth = ["Top", "Right", "Bottom", "Left"].reduce((total, side) => total + (Number.parseFloat(style[\`border\${side}Width\`]) || 0), 0);
        return ["block", "flex", "grid"].includes(style.display) && borderWidth <= 4;
      }

      isBroadLayoutContainer(element) {
        const style = getComputedStyle(element);
        if (!["grid", "flex"].includes(style.display)) return false;
        const substantialChildren = Array.from(element.children).filter((child) => {
          const rect = this.elementClientRect(child);
          return rect.width >= 36 && rect.height >= 24 && this.hasVisibleText(child);
        });
        return substantialChildren.length > 2;
      }

      prepareEditableIds() {
        this.getEditableElements().forEach((element, index) => {
          if (!element.dataset.editId) element.dataset.editId = \`edit-\${index}\`;
        });
      }

      bindControls() {
        this.controls.help.addEventListener("click", () => this.openHelp());
        this.controls.helpClose.addEventListener("click", () => this.closeHelp());
        this.controls.helpModal.addEventListener("click", (event) => {
          if (event.target === this.controls.helpModal) this.closeHelp();
        });
        this.controls.aiExportHelp.addEventListener("click", () => this.openAiExportHelp());
        this.controls.aiExportHelpClose.addEventListener("click", () => this.closeAiExportHelp());
        this.controls.aiExportHelpModal.addEventListener("click", (event) => {
          if (event.target === this.controls.aiExportHelpModal) this.closeAiExportHelp();
        });
        this.controls.resetHelp.addEventListener("click", () => this.openResetHelp());
        this.controls.resetHelpClose.addEventListener("click", () => this.closeResetHelp());
        this.controls.resetHelpModal.addEventListener("click", (event) => {
          if (event.target === this.controls.resetHelpModal) this.closeResetHelp();
        });
        this.controls.confirmClose.addEventListener("click", () => this.closeConfirm());
        this.controls.confirmCancel.addEventListener("click", () => this.closeConfirm());
        this.controls.confirmModal.addEventListener("click", (event) => {
          if (event.target === this.controls.confirmModal) this.closeConfirm();
        });
        this.controls.confirmOk.addEventListener("click", () => this.runConfirmedAction());
        this.toggle.addEventListener("click", () => this.toggleEditMode());
        this.hotzone.addEventListener("mouseenter", () => this.showButtons());
        this.hotzone.addEventListener("mouseleave", () => this.scheduleHide());
        this.hotzone.addEventListener("click", () => this.toggleEditMode());
        this.toggle.addEventListener("mouseenter", () => this.showButtons());
        this.toggle.addEventListener("mouseleave", () => this.scheduleHide());

        this.controls.undo.addEventListener("click", () => this.undo());
        this.controls.redo.addEventListener("click", () => this.redo());
        this.controls.formatBrush.addEventListener("click", () => this.toggleFormatBrush());
        this.controls.addText.addEventListener("click", () => this.addText());
        this.controls.addImage.addEventListener("click", () => {
          this.openImagePicker();
        });
        this.controls.imagePick.addEventListener("click", () => this.openImagePicker());
        this.controls.addShape.addEventListener("click", () => this.toggleShapeMenu());
        this.controls.shapeMenu.querySelectorAll("[data-shape-choice]").forEach((button) => {
          button.addEventListener("click", () => {
            this.addShape(button.dataset.shapeChoice || "rect");
            this.closeShapeMenu();
          });
        });
        this.controls.aiExport.addEventListener("click", () => this.exportForAi());
        this.controls.saveComment.addEventListener("click", () => this.saveCommentForSelected());
        this.controls.clearComment.addEventListener("click", () => this.clearCommentForSelected());
        this.controls.save.addEventListener("click", () => this.exportHtml());
        this.controls.exit.addEventListener("click", () => this.toggleEditMode(false));
        this.controls.reset.addEventListener("click", () => this.confirmResetDraft());
        this.controls.image.addEventListener("change", (event) => this.handleFileInput(event));
        this.controls.delete.addEventListener("click", () => this.confirmDeleteSelected());
        this.controls.bringForward.addEventListener("click", () => this.bumpZIndex(1));
        this.controls.sendBackward.addEventListener("click", () => this.bumpZIndex(-1));
        this.controls.previewMotion.addEventListener("click", () => this.previewMotion());
        this.controls.previewSlideMotion.addEventListener("click", () => this.replayActiveSlideMotion());
        this.controls.restoreMotion.addEventListener("click", () => this.restoreOriginalMotion(this.selected, true));
        [this.controls.formatBrush, this.controls.fontFamily, this.controls.fontFamilyCustom, this.controls.fontSize, this.controls.fontWeight, this.controls.fontStyle, this.controls.colorButton, this.controls.colorEyedropper, this.controls.bg, this.controls.bgEyedropper, this.controls.opacity].filter(Boolean).forEach((control) => {
          control.addEventListener("pointerdown", () => this.captureTextSelection());
          control.addEventListener("focus", () => this.captureTextSelection());
        });
        ["select", "keyup", "pointerup", "mouseup"].forEach((type) => {
          this.controls.text.addEventListener(type, () => this.captureTextSelection());
        });
        this.controls.colorButton.addEventListener("pointerdown", (event) => {
          if (this.controls.colorButton.disabled) return;
          event.preventDefault();
          event.stopPropagation();
          this.captureTextSelection();
        });
        this.controls.colorButton.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          if (this.controls.colorButton.disabled) return;
          this.captureTextSelection();
          this.toggleTextColorPalette();
        });
        this.controls.bg.addEventListener("pointerdown", (event) => {
          if (this.controls.bg.disabled) return;
          event.preventDefault();
          event.stopPropagation();
          this.captureTextSelection();
        });
        this.controls.bg.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          if (this.controls.bg.disabled) return;
          this.captureTextSelection();
          this.toggleBackgroundPalette();
        });
        this.controls.colorEyedropper.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.pickTextColor();
        });
        this.controls.bgEyedropper.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.pickBackgroundColor();
        });
        this.controls.fontFamily.addEventListener("change", () => {
          if (this.controls.fontFamily.value === "__custom__") {
            this.controls.fontFamilyCustom.disabled = !this.selected || !this.isTextElement(this.selected);
            this.controls.fontFamilyCustom.focus({ preventScroll: true });
            return;
          }
          this.controls.fontFamilyCustom.value = "";
        });
        this.controls.fontFamilyCustom.addEventListener("input", () => this.applyInspectorValue("fontFamily", { recordHistory: false, refreshInspector: false, live: true }));
        this.controls.fontFamilyCustom.addEventListener("change", () => this.applyInspectorValue("fontFamily", { recordHistory: true }));
        const liveInspectorControls = new Set(["text", "fontSize", "opacity", "x", "y", "width", "height", "order", "delay", "duration"]);
        ["text", "shape", "fontFamily", "fontSize", "bg", "opacity", "x", "y", "width", "height", "anim", "order", "delay", "duration"].forEach((name) => {
          const control = this.controls[name];
          if (liveInspectorControls.has(name)) {
            control.addEventListener("input", () => this.applyInspectorValue(name, { recordHistory: false, refreshInspector: false, live: true }));
          }
          control.addEventListener("change", () => this.applyInspectorValue(name, { recordHistory: true }));
        });
        this.controls.fontWeight.addEventListener("click", () => this.toggleTextStyle("font-weight"));
        this.controls.fontStyle.addEventListener("click", () => this.toggleTextStyle("font-style"));

        this.addGlobalListener(document, "wheel", (event) => this.stopEditorUiEventLeak(event), { capture: true, passive: false });
        this.addGlobalListener(document, "touchstart", (event) => this.stopEditorUiEventLeak(event), { capture: true, passive: true });
        this.addGlobalListener(document, "touchmove", (event) => this.stopEditorUiEventLeak(event), { capture: true, passive: true });
        this.addGlobalListener(document, "touchend", (event) => this.stopEditorUiEventLeak(event), true);
        this.addGlobalListener(document, "keydown", (event) => this.stopEditorUiShortcutLeak(event), true);
        this.addGlobalListener(document, "keydown", (event) => this.handleKeydown(event));
        this.addGlobalListener(document, "selectionchange", () => this.captureTextSelection());
        this.addGlobalListener(document, "slidechange", (event) => this.handleSlideChange(event));
        this.addGlobalListener(document, "click", (event) => {
          if (!event.target.closest(".shape-picker-wrap") && !event.target.closest("#shapeMenu")) this.closeShapeMenu();
          if (!event.target.closest("#colorButton") && !event.target.closest("#colorPalette")) this.closeTextColorPalette();
          if (!event.target.closest("#bgInput") && !event.target.closest("#bgPalette")) this.closeBackgroundPalette();
        });
        this.addGlobalListener(document, "pointerdown", (event) => this.handleDocumentPointerDown(event), true);
        this.addGlobalListener(document, "pointermove", (event) => this.handlePointerMove(event));
        this.addGlobalListener(document, "pointerup", () => this.finishPointerAction());
        this.addGlobalListener(document, "pointercancel", () => this.finishPointerAction());
        this.addGlobalListener(window, "blur", () => this.finishPointerAction());

        this.frameMove.addEventListener("pointerdown", (event) => this.startPointerAction(event, "move"));
        this.frameDelete.addEventListener("pointerdown", (event) => {
          event.preventDefault();
          event.stopPropagation();
        });
        this.frameDelete.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.confirmDeleteSelected();
        });
        this.frameResize.addEventListener("pointerdown", (event) => this.startPointerAction(event, "resize"));

        this.addGlobalListener(window, "dragenter", (event) => this.handleDragEnter(event));
        this.addGlobalListener(window, "dragover", (event) => this.handleDrag(event));
        this.controls.dropZone.addEventListener("dragenter", (event) => this.handleDrag(event));
        this.controls.dropZone.addEventListener("dragover", (event) => this.handleDrag(event));
        this.addGlobalListener(window, "dragleave", (event) => this.clearDrag(event));
        this.addGlobalListener(window, "drop", (event) => this.handleDrop(event));
        this.addGlobalListener(window, "resize", () => {
          this.applyEditorLayout();
          this.updateFrame();
          if (!this.controls.shapeMenu.hidden) this.positionShapeMenu();
          if (!this.controls.colorPalette.hidden) this.positionTextColorPalette();
          if (!this.controls.bgPalette.hidden) this.positionBackgroundPalette();
        });
      }

      addGlobalListener(target, type, handler, options) {
        this.globalListeners.push({ target, type, handler, options });
        if (this.globalListenerController) {
          const listenerOptions = typeof options === "boolean" ? { capture: options } : { ...(options || {}) };
          listenerOptions.signal = this.globalListenerController.signal;
          target.addEventListener(type, handler, listenerOptions);
          return;
        }
        target.addEventListener(type, handler, options);
      }

      destroy() {
        this.globalListenerController?.abort();
        this.globalListeners.forEach(({ target, type, handler, options }) => {
          target.removeEventListener(type, handler, options);
        });
        this.globalListeners = [];
        this.clearTextSelection();
        this.layoutRefreshTimers.forEach((timer) => window.clearTimeout(timer));
        this.layoutRefreshTimers = [];
        this.stopMotionFrameTracking();
        window.clearTimeout(this.motionPreviewTimer);
        window.clearTimeout(this.hideTimeout);
        window.clearTimeout(this.toastTimer);
        window.clearTimeout(this.textFocusTimer);
        Object.values(this.colorPickers || {}).forEach((picker) => picker?.destroy?.());
        this.colorPickers = {};
        if (window.editor === this) delete window.editor;
      }

      bindEditableEvents() {
        this.getEditableElements().forEach((element) => this.bindElement(element));
      }

      refreshEditableElements() {
        this.prepareEditableElements();
        this.prepareEditableIds();
        this.bindEditableEvents();
      }

      bindElement(element) {
        if (element.dataset.editorBound) return;
        element.dataset.editorBound = "true";
        element.addEventListener("pointerdown", (event) => {
          if (!this.isActive) return;
          const target = this.getEditableTarget(event.target) || element;
          if (this.formatBrush) {
            if (this.isTextElement(target)) {
              this.select(target);
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            this.applyFormatBrush(target);
            return;
          }
          if (this.commentMode) {
            event.preventDefault();
            event.stopPropagation();
            this.selectForComment(target);
            return;
          }
          if (this.isTextElement(target)) {
            this.select(target);
            this.clearTextSelection();
            return;
          }
          const canDragBody = this.isDraggableEditable(target);
          if (!canDragBody) return;
          event.preventDefault();
          event.stopPropagation();
          this.select(target);
          this.startPointerAction(event, "move");
        });
        element.addEventListener("click", (event) => {
          if (!this.isActive) return;
          const target = this.getEditableTarget(event.target) || element;
          event.stopPropagation();
          if (this.formatBrush) {
            event.preventDefault();
            this.applyFormatBrush(target);
            return;
          }
          if (this.commentMode) {
            event.preventDefault();
            this.selectForComment(target);
            return;
          }
          this.select(target);
          if (this.isTextElement(target)) {
            this.captureTextSelection();
            return;
          }
          event.preventDefault();
        });
        element.addEventListener("dblclick", (event) => {
          if (!this.isActive) return;
          const target = this.getEditableTarget(event.target) || element;
          event.stopPropagation();
          if (this.formatBrush) {
            event.preventDefault();
            this.applyFormatBrush(target);
            return;
          }
          if (this.commentMode) {
            event.preventDefault();
            this.selectForComment(target);
            return;
          }
          this.select(target);
          if (this.isTextElement(target)) {
            this.focusTextLayer(target);
          }
        });
        element.addEventListener("input", () => {
          if (!this.isActive) return;
          this.saveDraft(false);
          this.updateInspector();
          this.updateFrame();
        });
      }

      renderSlideRail() {
        this.controls.slideRail.innerHTML = "";
        this.presentation.slides.forEach((slide, index) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = \`slide-chip\${index === this.presentation.currentSlide ? " active" : ""}\`;
          const title = slide.dataset.title || slide.getAttribute("aria-label") || \`Slide \${index + 1}\`;
          const number = document.createElement("span");
          number.className = "slide-chip-num";
          number.textContent = String(index + 1).padStart(2, "0");
          const label = document.createElement("span");
          label.className = "slide-chip-title";
          label.textContent = title;
          button.append(number, label);
          button.addEventListener("click", () => {
            this.presentation.showSlide(index);
            this.renderSlideRail();
            this.clearSelection();
          });
          this.controls.slideRail.appendChild(button);
        });
      }

      handleKeydown(event) {
        const formTarget = this.isFormTarget(event.target);
        if (event.key === "Escape" && !this.controls.confirmModal.hidden) {
          event.preventDefault();
          event.stopPropagation();
          this.closeConfirm();
          return;
        }
        if (event.key === "Escape" && !this.controls.resetHelpModal.hidden) {
          event.preventDefault();
          event.stopPropagation();
          this.closeResetHelp();
          return;
        }
        if (event.key === "Escape" && !this.controls.aiExportHelpModal.hidden) {
          event.preventDefault();
          event.stopPropagation();
          this.closeAiExportHelp();
          return;
        }
        if (event.key === "Escape" && !this.controls.helpModal.hidden) {
          event.preventDefault();
          event.stopPropagation();
          this.closeHelp();
          return;
        }
        if (event.key === "Escape" && !this.controls.shapeMenu.hidden) {
          event.preventDefault();
          event.stopPropagation();
          this.closeShapeMenu();
          return;
        }
        if (event.key === "Escape" && this.formatBrush) {
          event.preventDefault();
          event.stopPropagation();
          this.cancelFormatBrush();
          return;
        }
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z" && this.isActive && event.shiftKey && !formTarget) {
          event.preventDefault();
          event.stopPropagation();
          this.redo();
          return;
        }
        if ((event.ctrlKey && !event.metaKey) && event.key.toLowerCase() === "y" && this.isActive && !formTarget) {
          event.preventDefault();
          event.stopPropagation();
          this.redo();
          return;
        }
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "z" && this.isActive && !event.shiftKey && !formTarget) {
          event.preventDefault();
          event.stopPropagation();
          this.undo();
          return;
        }
        if ((event.key === "e" || event.key === "E") && !formTarget) {
          event.preventDefault();
          event.stopPropagation();
          this.toggleEditMode();
        }
        if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
          event.preventDefault();
          event.stopPropagation();
          this.exportHtml();
        }
        if (!this.isActive || formTarget) return;
        if (event.key === "Delete" || event.key === "Backspace") {
          if (this.validTextSelectionRange(this.selected)) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          this.confirmDeleteSelected();
        }
        if (this.selected && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
          event.preventDefault();
          event.stopPropagation();
          const step = event.shiftKey ? 10 : 1;
          this.clearElementMotionState(this.selected);
          const box = this.getStableStageBox(this.selected);
          const dx = event.key === "ArrowLeft" ? -step : event.key === "ArrowRight" ? step : 0;
          const dy = event.key === "ArrowUp" ? -step : event.key === "ArrowDown" ? step : 0;
          this.setStagePosition(this.selected, box.x + dx, box.y + dy, box.width, box.height);
          this.updateInspector();
          this.saveDraft(false, true);
        }
        if (this.isHostDeckShortcut(event)) {
          event.preventDefault();
          event.stopPropagation();
        }
      }

      openHelp() {
        this.controls.helpModal.hidden = false;
      }

      closeHelp() {
        this.controls.helpModal.hidden = true;
      }

      openAiExportHelp() {
        this.controls.aiExportHelpModal.hidden = false;
      }

      closeAiExportHelp() {
        this.controls.aiExportHelpModal.hidden = true;
      }

      openResetHelp() {
        this.controls.resetHelpModal.hidden = false;
      }

      closeResetHelp() {
        this.controls.resetHelpModal.hidden = true;
      }

      openConfirm({ title, message, okText, action }) {
        this.pendingConfirm = action;
        this.controls.confirmTitle.textContent = title;
        this.controls.confirmMessage.textContent = message;
        this.controls.confirmOk.textContent = okText;
        this.controls.confirmModal.hidden = false;
        this.controls.confirmCancel.focus({ preventScroll: true });
      }

      closeConfirm() {
        this.pendingConfirm = null;
        this.controls.confirmModal.hidden = true;
      }

      runConfirmedAction() {
        const action = this.pendingConfirm;
        this.closeConfirm();
        if (typeof action === "function") action();
      }

      isFormTarget(target) {
        return target && (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) || target.isContentEditable);
      }

      stopEditorUiEventLeak(event) {
        if (!this.isActive || !this.isEditorUiElement(event.target)) return;
        event.stopPropagation();
      }

      isHostDeckShortcut(event) {
        const key = event.key;
        if (["Escape", " ", "Spacebar", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(key)) return true;
        return key?.toLowerCase?.() === "b" && !event.metaKey && !event.ctrlKey && !event.altKey;
      }

      stopEditorUiShortcutLeak(event) {
        if (!this.isActive) return;
        if (!this.isEditorUiElement(event.target)) {
          if (!this.isFormTarget(event.target) && this.isHostDeckShortcut(event)) {
            this.handleKeydown(event);
            event.stopImmediatePropagation();
          }
          return;
        }
        const key = event.key;
        const navigationKeys = [
          "Escape",
          " ",
          "Spacebar",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "PageUp",
          "PageDown",
          "Home",
          "End"
        ];
        if (navigationKeys.includes(key) || key === "Backspace" || key === "Delete" || key.length === 1 || event.metaKey || event.ctrlKey || event.altKey) {
          event.stopPropagation();
        }
      }

      showButtons() {
        window.clearTimeout(this.hideTimeout);
        this.toggle.classList.add("show");
      }

      scheduleHide() {
        this.hideTimeout = window.setTimeout(() => {
          if (!this.isActive) {
            this.toggle.classList.remove("show");
          }
        }, 400);
      }

      editorInsets() {
        if (!this.isActive) return zeroInsets();
        const gutter = window.innerWidth <= 960 ? 8 : 12;
        const insets = {
          left: gutter,
          right: gutter,
          top: gutter,
          bottom: gutter
        };
        [
          this.controls.help?.closest(".editor-toolbar"),
          document.querySelector(".editor-slides"),
          document.querySelector(".editor-panel")
        ].forEach((element) => {
          if (!element || element.hidden) return;
          const style = getComputedStyle(element);
          if (style.display === "none" || style.visibility === "hidden") return;
          const rect = element.getBoundingClientRect();
          if (rect.width <= 0 || rect.height <= 0) return;
          const verticalCoverage = rect.height / Math.max(1, window.innerHeight);
          const horizontalCoverage = rect.width / Math.max(1, window.innerWidth);
          if (rect.left <= gutter * 2 && verticalCoverage > 0.45) {
            insets.left = Math.max(insets.left, rect.right + gutter);
          }
          if (window.innerWidth - rect.right <= gutter * 2 && verticalCoverage > 0.45) {
            insets.right = Math.max(insets.right, window.innerWidth - rect.left + gutter);
          }
          if (rect.top <= gutter * 2 && horizontalCoverage > 0.45) {
            insets.top = Math.max(insets.top, rect.bottom + gutter);
          }
          if (window.innerHeight - rect.bottom <= gutter * 2 && horizontalCoverage > 0.45) {
            insets.bottom = Math.max(insets.bottom, window.innerHeight - rect.top + gutter);
          }
        });
        return normalizeInsets(insets);
      }

      applyEditorLayout() {
        this.syncCurrentSlideFromHost();
        this.presentation.setEditorInsets?.(this.editorInsets());
        this.presentation.scaleStage?.();
      }

      syncCurrentSlideFromHost() {
        if (!this.stage || this.stage.getAttribute("data-html-deck-editor-stage") !== "preserve") return;
        this.presentation.slides = stageSlides(this.stage);
        const hostIndex = computeHostCurrentSlide(this.presentation.slides, this.stage);
        const next = hostIndex >= 0 ? hostIndex : this.presentation.currentSlide;
        this.presentation.currentSlide = markEditorCurrentSlide(this.presentation.slides, next);
        syncHostCurrentSlide(this.stage, this.presentation.currentSlide);
        this.revealActiveSlideForEditing(this.presentation.currentSlide);
      }

      revealActiveSlideForEditing(index = this.presentation.currentSlide) {
        if (!this.isActive) return;
        const slide = this.presentation.slides[index];
        if (!slide) return;
        this.stage.querySelectorAll("[data-html-deck-editor-motion-hold]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-motion-hold");
          node.style.removeProperty("--html-deck-editor-edit-opacity");
        });
        const editableElements = this.getEditableElements().filter((element) => (
          this.closestSlide(element) === slide && (this.isTextElement(element) || element.classList.contains("edit-moved"))
        ));
        const motionTargets = new Set();
        editableElements.forEach((element) => {
          this.motionHoldTargetsFor(element, slide).forEach((node) => motionTargets.add(node));
        });
        motionTargets.forEach((node) => {
          this.holdMotionNodeForEditing(node);
        });
      }

      refreshEditorLayoutSoon() {
        const refresh = () => {
          this.applyEditorLayout();
          this.updateFrame();
        };
        this.layoutRefreshTimers.forEach((timer) => window.clearTimeout(timer));
        this.layoutRefreshTimers = [];
        refresh();
        requestAnimationFrame(refresh);
        this.layoutRefreshTimers.push(window.setTimeout(refresh, 80));
        this.layoutRefreshTimers.push(window.setTimeout(refresh, 220));
      }

      toggleEditMode(force) {
        this.isActive = typeof force === "boolean" ? force : !this.isActive;
        document.body.classList.toggle("editing", this.isActive);
        document.body.classList.toggle("editor-on", this.isActive);
        this.toggle.classList.toggle("active", this.isActive);
        this.showButtons();
        if (this.isActive) {
          this.syncCurrentSlideFromHost();
          this.refreshEditableElements();
          this.revealActiveSlideForEditing(this.presentation.currentSlide);
          this.motionHold = false;
          window.clearTimeout(this.motionPreviewTimer);
          this.motionPreviewTimer = null;
          this.stopMotionFrameTracking();
          const slide = this.activeSlide();
          if (slide) this.clearMotionRunState(slide);
        }
        this.getEditableElements().forEach((element) => {
          element.removeAttribute("contenteditable");
        });
        if (!this.isActive) this.clearTextSelection();
        this.hideDeckResetControl();
        this.attachFrame();
        this.refreshEditorLayoutSoon();
        this.updateFrame();
        if (!this.isActive) {
          this.cancelFormatBrush(false);
          this.toggleCommentMode(false);
          this.hideGuides();
          this.saveDraft(false);
          this.clearSelection();
          this.motionHold = false;
          window.clearTimeout(this.motionPreviewTimer);
          this.motionPreviewTimer = null;
          requestAnimationFrame(() => this.replayActiveSlideMotion(false));
        }
        this.renderSlideRail();
      }

      handleDocumentPointerDown(event) {
        if (!this.isActive) return;
        if (this.isEditorUiElement(event.target)) return;
        const directTarget = this.getEditableTarget(event.target);
        if (directTarget) {
          if (this.formatBrush) {
            if (this.isTextElement(directTarget)) {
              this.select(directTarget);
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            this.applyFormatBrush(directTarget);
            return;
          }
          if (this.commentMode) {
            event.preventDefault();
            event.stopPropagation();
            this.selectForComment(directTarget);
            return;
          }
          this.select(directTarget);
          return;
        }
        const nearbyTarget = this.pickNearbyEditableTarget(event);
        if (nearbyTarget) {
          event.preventDefault();
          event.stopPropagation();
          if (this.formatBrush) {
            this.applyFormatBrush(nearbyTarget);
            return;
          }
          if (this.commentMode) {
            this.selectForComment(nearbyTarget);
            return;
          }
          this.select(nearbyTarget);
          if (this.isDraggableEditable(nearbyTarget)) this.startPointerAction(event, "move");
          return;
        }
        this.clearSelection();
      }

      getEditableTarget(target) {
        let element = target && target.closest("[data-editable], [data-editable-media], [data-editable-box], [data-editor-kind], .editor-layer");
        if (!element || !this.stage.contains(element)) return null;
        if (this.isEditorUiElement(element)) return null;
        element = this.preferExplicitEditableAncestor(element);
        return this.closestSlide(element) ? element : null;
      }

      preferExplicitEditableAncestor(element) {
        if (!element || element.classList.contains("editor-layer")) return element;
        if (element.dataset.editorAuto !== "true") return element;
        const textParent = this.preferredTextContainerAncestor(element);
        if (textParent) return textParent;
        const explicitParent = element.parentElement?.closest("[data-editable], [data-editable-media], [data-editable-box], .editor-layer");
        if (explicitParent && this.stage.contains(explicitParent) && this.closestSlide(explicitParent) === this.closestSlide(element)) {
          return explicitParent;
        }
        const mediaParent = element.parentElement?.closest("[data-editor-auto='true'][data-editor-kind='media']");
        if (
          mediaParent &&
          mediaParent !== element &&
          this.stage.contains(mediaParent) &&
          this.closestSlide(mediaParent) === this.closestSlide(element) &&
          this.isMediaWrapperCandidate(mediaParent)
        ) {
          return mediaParent;
        }
        return element;
      }

      preferredTextContainerAncestor(element) {
        if (!this.isInlineTextChild(element) && element.dataset.editorKind === "text") return null;
        const parent = element.parentElement?.closest("h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,caption,td,th,button,a,label,[data-editable],[data-editor-auto='true'][data-editor-kind='text']");
        if (
          parent &&
          parent !== element &&
          this.stage.contains(parent) &&
          this.closestSlide(parent) === this.closestSlide(element) &&
          (parent.matches("[data-editable],[data-editor-kind='text']") || this.isTextCandidate(parent))
        ) {
          return parent;
        }
        return null;
      }

      select(element) {
        if (this.selected === element) {
          this.reconcileStoredStagePosition(element, { mode: "sync" });
          this.updateFrame();
          this.updateCommentPanel();
          return;
        }
        this.clearSelection(false);
        this.selected = element;
        this.reconcileStoredStagePosition(element, { mode: "sync" });
        element.classList.add("editor-selected");
        this.updateFrame();
        this.updateInspector();
      }

      clearSelection(update = true) {
        this.stopMotionFrameTracking();
        if (this.selected) this.selected.classList.remove("editor-selected");
        this.selected = null;
        this.clearTextSelection();
        this.frame.classList.remove("active");
        if (update) this.updateInspector();
      }

      updateInspector() {
        const element = this.selected;
        const hasSelection = Boolean(element);
        const canUseImage = hasSelection && this.isImageElement(element);
        const canDelete = this.canDeleteElement(element);
        const textCapable = hasSelection && this.isTextElement(element);
        const shapeCapable = hasSelection && element.classList.contains("shape-layer");

        this.controls.selectionName.textContent = hasSelection ? this.getSelectionLabel(element) : "未选中元素";
        this.controls.text.disabled = !textCapable;
        this.controls.image.disabled = false;
        this.controls.shape.disabled = !shapeCapable;
        this.controls.fontFamily.disabled = !textCapable;
        this.controls.fontFamilyCustom.disabled = !textCapable || this.controls.fontFamily.value !== "__custom__";
        this.controls.fontSize.disabled = !textCapable;
        this.controls.fontWeight.disabled = !textCapable;
        this.controls.fontStyle.disabled = !textCapable;
        this.controls.colorButton.disabled = !hasSelection;
        this.controls.colorEyedropper.disabled = !hasSelection;
        this.controls.bg.disabled = !hasSelection;
        this.controls.bgEyedropper.disabled = !hasSelection;
        this.controls.opacity.disabled = !hasSelection;
        this.controls.x.disabled = !hasSelection;
        this.controls.y.disabled = !hasSelection;
        this.controls.width.disabled = !hasSelection;
        this.controls.height.disabled = !hasSelection;
        this.controls.bringForward.disabled = !hasSelection;
        this.controls.sendBackward.disabled = !hasSelection;
        this.controls.anim.disabled = !hasSelection;
        this.controls.order.disabled = !hasSelection || !this.usesCustomMotion(element);
        this.controls.delay.disabled = !hasSelection || !this.usesCustomMotion(element);
        this.controls.duration.disabled = !hasSelection || !this.usesCustomMotion(element);
        this.controls.previewMotion.disabled = !hasSelection;
        this.controls.restoreMotion.disabled = !hasSelection || !this.hasStoredOriginalMotion(element);
        this.controls.delete.disabled = !canDelete;
        this.controls.formatBrush.disabled = !hasSelection && !this.formatBrush;
        this.controls.image.disabled = false;
        this.controls.imagePick.disabled = false;
        this.controls.imagePick.textContent = canUseImage ? "替换图片" : "选择图片";
        this.controls.imageName.textContent = canUseImage ? "将替换选中图片" : "未选择图片";
        this.updateCommentPanel();

        if (!hasSelection) {
          this.controls.text.value = "";
          this.controls.image.value = "";
          this.controls.shape.value = "rect";
          ["fontFamily", "fontFamilyCustom", "fontSize", "opacity", "x", "y", "width", "height", "anim", "order", "delay", "duration"].forEach((name) => {
            this.controls[name].value = "";
          });
          this.updateBackgroundPickerState("");
          this.updateTextColorState("");
          this.updateTextStyleButtons(null);
          this.controls.motionStatus.textContent = "未选中元素";
          return;
        }

        this.reconcileStoredStagePosition(element, { mode: "sync" });
        const computed = window.getComputedStyle(element);
        const box = this.getStableStageBox(element);
        this.controls.text.value = textCapable ? this.getEditableText(element) : "";
        this.controls.shape.value = shapeCapable ? (element.dataset.shape || "rect") : "rect";
        this.updateFontFamilyControls(textCapable ? computed.fontFamily : "");
        this.controls.fontSize.value = Math.round(Number.parseFloat(computed.fontSize)) || "";
        this.updateTextColorState(this.toHex(this.editableTextColor(element, computed)));
        this.updateBackgroundPickerState(this.editableSurfaceColor(element, computed));
        this.controls.opacity.value = Math.round((Number.parseFloat(computed.opacity) || 1) * 100);
        this.updateTextStyleButtons(textCapable ? computed : null);
        this.controls.x.value = Math.round(box.x);
        this.controls.y.value = Math.round(box.y);
        this.controls.width.value = Math.round(box.width);
        this.controls.height.value = Math.round(box.height);
        this.controls.anim.value = this.getMotionSelectValue(element);
        this.controls.order.value = element.dataset.editOrder || "";
        this.controls.delay.value = Number.parseInt(element.dataset.editDelay || "0", 10);
        this.controls.duration.value = Number.parseInt(element.dataset.editDuration || "640", 10);
        this.controls.order.disabled = !this.usesCustomMotion(element);
        this.controls.delay.disabled = !this.usesCustomMotion(element);
        this.controls.duration.disabled = !this.usesCustomMotion(element);
        this.controls.restoreMotion.disabled = !this.hasStoredOriginalMotion(element);
        this.controls.motionStatus.textContent = this.getMotionStatus(element);
        this.controls.image.value = "";
      }

      toggleFormatBrush() {
        if (this.formatBrush) {
          this.cancelFormatBrush();
          return;
        }
        if (!this.selected) {
          this.toastMessage("先选中要复制样式的元素");
          return;
        }
        this.formatBrush = this.captureFormatBrush(this.selected);
        this.setFormatBrushButtonState(true);
        this.toastMessage("已复制样式，点击目标元素应用");
      }

      cancelFormatBrush(showToast = true) {
        if (!this.formatBrush) return;
        this.formatBrush = null;
        this.setFormatBrushButtonState(false);
        if (showToast) this.toastMessage("已取消格式刷");
      }

      setFormatBrushButtonState(active) {
        document.body.classList.toggle("format-brushing", active);
        this.controls.formatBrush.classList.toggle("active", active);
        this.controls.formatBrush.setAttribute("aria-pressed", active ? "true" : "false");
        this.controls.formatBrush.disabled = !active && !this.selected;
      }

      captureFormatBrush(element) {
        this.captureTextSelection({ syncInspector: false });
        const range = this.isTextElement(element) ? this.validTextSelectionRange(element) : null;
        const computed = window.getComputedStyle(element);
        const text = range ? this.captureTextRangeFormat(range, element) : (this.isTextElement(element) ? {
          color: this.editableTextColor(element, computed),
          fontFamily: computed.fontFamily,
          fontSize: computed.fontSize,
          fontStyle: computed.fontStyle,
          fontWeight: computed.fontWeight,
          letterSpacing: computed.letterSpacing,
          lineHeight: computed.lineHeight,
          textAlign: computed.textAlign,
          opacity: computed.opacity,
          backgroundColor: this.editableSurfaceColor(element, computed)
        } : null);
        return {
          text,
          surface: {
            backgroundColor: this.editableSurfaceColor(element, computed),
            borderColor: computed.borderColor,
            borderRadius: computed.borderRadius,
            borderStyle: computed.borderStyle,
            borderWidth: computed.borderWidth,
            boxShadow: computed.boxShadow,
            opacity: computed.opacity
          },
          shape: element.classList.contains("shape-layer") ? (element.dataset.shape || "rect") : ""
        };
      }

      captureTextRangeFormat(range, element) {
        const summary = this.selectedTextStyleSummary(range, element);
        return {
          color: summary.color,
          fontFamily: summary.fontFamilyRaw || summary.fontFamily,
          fontSize: summary.fontSize ? \`\${summary.fontSize}px\` : "",
          fontStyle: summary.fontStyle,
          fontWeight: summary.fontWeight,
          letterSpacing: "",
          lineHeight: "",
          textAlign: "",
          opacity: summary.opacity ? String((Number.parseInt(summary.opacity, 10) || 100) / 100) : "",
          backgroundColor: summary.backgroundColor
        };
      }

      applyFormatBrush(element) {
        if (!element || !this.formatBrush) return;
        const brush = this.formatBrush;
        this.select(element);
        if (brush.text && this.isTextElement(element)) {
          this.captureTextSelection({ syncInspector: false });
          if (this.validTextSelectionRange(element)) {
            if (this.applyTextFormatBrushToSelection(element, brush.text)) {
              this.finishFormatBrush("已应用到文字片段");
              return;
            }
          }
          this.applyTextFormatBrushToElement(element, brush.text);
        }
        const surface = brush.surface || {};
        if (this.isVisiblePaint(surface.backgroundColor)) {
          this.setEditableSurfaceColor(element, surface.backgroundColor);
        } else {
          this.clearEditableSurfaceColor(element);
        }
        ["borderColor", "borderRadius", "borderStyle", "borderWidth", "boxShadow", "opacity"].forEach((property) => {
          const value = surface[property];
          if (value) element.style.setProperty(this.camelToKebab(property), value);
        });
        if (brush.shape && element.classList.contains("shape-layer")) this.applyShape(element, brush.shape);
        this.finishFormatBrush("已应用格式");
      }

      finishFormatBrush(message) {
        this.formatBrush = null;
        this.setFormatBrushButtonState(false);
        this.updateFrame();
        this.updateInspector();
        this.saveDraft(false, true);
        this.toastMessage(message);
      }

      applyTextFormatBrushToSelection(element, text) {
        const applied = this.applyInlineTextStyles(element, this.textFormatEntries(text));
        if (applied) this.syncInlineSelectionInspector();
        return applied;
      }

      applyTextFormatBrushToElement(element, text) {
        this.textFormatEntries(text).forEach(([property, value]) => {
          if (value) element.style.setProperty(property, value);
        });
        if (text.textAlign) element.style.textAlign = text.textAlign;
        if (text.lineHeight) element.style.lineHeight = text.lineHeight;
      }

      textFormatEntries(text) {
        return [
          ["font-family", text.fontFamily],
          ["font-size", text.fontSize],
          ["font-style", text.fontStyle],
          ["font-weight", text.fontWeight],
          ["letter-spacing", text.letterSpacing],
          ["color", text.color],
          ["background-color", text.backgroundColor],
          ["opacity", text.opacity]
        ];
      }

      camelToKebab(value) {
        return String(value).replace(/[A-Z]/g, (match) => \`-\${match.toLowerCase()}\`);
      }

      toggleCommentMode(force) {
        const next = typeof force === "boolean" ? force : !this.commentMode;
        this.commentMode = next;
        document.body.classList.toggle("commenting", next);
        if (next && this.selected) this.focusCommentInput();
      }

      selectForComment(element) {
        if (!element) return;
        this.select(element);
        this.ensureAiAnchor(element);
        this.updateCommentPanel();
        this.focusCommentInput();
      }

      focusCommentInput() {
        if (!this.selected || !this.controls.commentInput || this.controls.commentInput.disabled) return;
        const section = this.controls.commentInput.closest(".inspector-section");
        if (section) section.scrollIntoView({ block: "nearest" });
        this.controls.commentInput.focus({ preventScroll: true });
      }

      updateCommentPanel() {
        const element = this.selected;
        const hasSelection = Boolean(element);
        const anchor = hasSelection ? (element.dataset.aiAnchor || "") : "";
        const elementKey = hasSelection ? (anchor || element.dataset.editId || "") : "";
        const comment = anchor ? this.comments[anchor] : null;
        const slideNumber = hasSelection ? this.slideNumberForElement(element) : null;
        const targetLabel = hasSelection ? this.getSelectionLabel(element).replace("：", " ") : "";
        this.controls.commentTarget.textContent = hasSelection
          ? \`目标：\${slideNumber ? \`Slide \${String(slideNumber).padStart(2, "0")} · \` : ""}\${targetLabel}\`
          : "目标：未选中元素";
        this.controls.commentInput.disabled = !hasSelection;
        this.controls.saveComment.disabled = !hasSelection;
        this.controls.clearComment.disabled = !comment;
        this.controls.saveComment.textContent = comment ? "更新批注" : "保存批注";
        if (!hasSelection) {
          if (document.activeElement !== this.controls.commentInput) this.controls.commentInput.value = "";
          this.commentInputAnchor = "";
          return;
        }
        if (this.commentInputAnchor !== elementKey || document.activeElement !== this.controls.commentInput) {
          this.controls.commentInput.value = comment?.text || "";
          this.commentInputAnchor = elementKey;
        }
      }

      ensureAiAnchor(element) {
        if (!element) return "";
        const current = element.dataset.aiAnchor;
        if (current && this.findElementByAiAnchor(current) === element) return current;
        const used = new Set(this.getEditableElements().filter((candidate) => candidate !== element).map((candidate) => candidate.dataset.aiAnchor).filter(Boolean));
        const slideNumber = this.slideNumberForElement(element) || 0;
        const slide = this.closestSlide(element);
        const peers = this.getEditableElements().filter((candidate) => this.closestSlide(candidate) === slide);
        const order = Math.max(1, peers.indexOf(element) + 1);
        const kind = this.aiAnchorKind(element);
        const base = \`ai-s\${String(slideNumber).padStart(2, "0")}-\${kind}-\${String(order).padStart(2, "0")}\`;
        let anchor = base;
        let suffix = 2;
        while (used.has(anchor)) {
          anchor = \`\${base}-\${suffix}\`;
          suffix += 1;
        }
        element.dataset.aiAnchor = anchor;
        return anchor;
      }

      aiAnchorKind(element) {
        if (this.isImageElement(element)) return "image";
        if (element.classList.contains("shape-layer")) return "shape";
        if (this.isTextElement(element)) return "text";
        return "block";
      }

      findElementByAiAnchor(anchor) {
        if (!anchor) return null;
        return this.getEditableElements().find((element) => element.dataset.aiAnchor === anchor) || null;
      }

      slideNumberForElement(element) {
        const slide = this.closestSlide(element);
        const index = slide ? this.presentation.slides.indexOf(slide) : -1;
        return index >= 0 ? index + 1 : null;
      }

      saveCommentForSelected(options = {}) {
        if (!this.selected) return false;
        const text = (this.controls.commentInput.value || "").trim();
        const anchor = this.ensureAiAnchor(this.selected);
        if (!text) {
          return this.clearCommentForSelected(options);
        }
        this.comments[anchor] = {
          anchor,
          text,
          label: this.getSelectionLabel(this.selected),
          slide: this.slideNumberForElement(this.selected),
          snippet: this.commentSnippet(this.selected),
          updatedAt: new Date().toISOString()
        };
        this.selected.setAttribute("data-ai-commented", "true");
        this.commentInputAnchor = anchor;
        this.renderComments();
        this.updateCommentPanel();
        this.saveDraft(false, options.recordHistory !== false);
        if (!options.silent) this.toastMessage("批注已保存到本地草稿");
        return true;
      }

      clearCommentForSelected(options = {}) {
        if (!this.selected) return false;
        const anchor = this.selected.dataset.aiAnchor;
        if (anchor) delete this.comments[anchor];
        this.selected.removeAttribute("data-ai-commented");
        this.controls.commentInput.value = "";
        this.renderComments();
        this.updateCommentPanel();
        this.saveDraft(false, options.recordHistory !== false);
        if (!options.silent) this.toastMessage("批注已从本地草稿清除");
        return true;
      }

      removeCommentsForElement(element) {
        const anchor = element?.dataset.aiAnchor;
        if (!anchor) return;
        delete this.comments[anchor];
        this.renderComments();
      }

      commentSnippet(element) {
        if (!element) return "";
        const image = element.tagName === "IMG" ? element : element.querySelector?.("img");
        if (image) {
          const imageText = image.getAttribute("alt") || image.getAttribute("src") || "";
          return this.truncateText(imageText, 96);
        }
        const text = this.isTextElement(element) ? this.getEditableText(element) : element.textContent;
        return this.truncateText(text || "", 96);
      }

      truncateText(text, length) {
        const normalized = String(text || "").replace(/\\s+/g, " ").trim();
        if (normalized.length <= length) return normalized;
        return \`\${normalized.slice(0, Math.max(0, length - 1))}…\`;
      }

      syncCommentMarkers() {
        this.stage.querySelectorAll("[data-ai-commented]").forEach((element) => element.removeAttribute("data-ai-commented"));
        Object.keys(this.comments).forEach((anchor) => {
          const element = this.findElementByAiAnchor(anchor);
          if (element) element.setAttribute("data-ai-commented", "true");
        });
      }

      renderComments() {
        if (!this.controls.commentList) return;
        this.controls.commentList.innerHTML = "";
        const comments = this.sortedComments();
        if (!comments.length) {
          const empty = document.createElement("p");
          empty.className = "comment-empty";
          empty.textContent = "暂无批注";
          this.controls.commentList.appendChild(empty);
          return;
        }
        comments.forEach((comment) => {
          const element = this.findElementByAiAnchor(comment.anchor);
          const card = document.createElement("button");
          card.type = "button";
          card.className = "comment-card";
          const label = document.createElement("span");
          label.className = "comment-card-label";
          const slideNumber = element ? this.slideNumberForElement(element) : comment.slide;
          label.textContent = \`\${slideNumber ? \`Slide \${String(slideNumber).padStart(2, "0")} · \` : ""}\${element ? this.getSelectionLabel(element) : comment.label || comment.anchor}\`;
          const text = document.createElement("span");
          text.className = "comment-card-text";
          text.textContent = this.truncateText(comment.text, 88);
          card.append(label, text);
          card.addEventListener("click", () => this.revealCommentTarget(comment.anchor));
          this.controls.commentList.appendChild(card);
        });
      }

      revealCommentTarget(anchor) {
        const element = this.findElementByAiAnchor(anchor);
        if (!element) {
          this.toastMessage("批注目标已不在当前页面");
          return;
        }
        const slide = this.closestSlide(element);
        const index = slide ? this.presentation.slides.indexOf(slide) : -1;
        if (index >= 0 && index !== this.presentation.currentSlide) {
          this.presentation.showSlide(index);
          this.renderSlideRail();
        }
        this.select(element);
        this.focusCommentInput();
      }

      sortedComments() {
        return Object.values(this.comments)
          .filter((comment) => comment && comment.anchor && comment.text)
          .sort((a, b) => (Number(a.slide) || 9999) - (Number(b.slide) || 9999) || String(a.anchor).localeCompare(String(b.anchor)));
      }

      normalizeComments(raw) {
        const values = Array.isArray(raw) ? raw : Object.values(raw || {});
        return values.reduce((comments, item) => {
          const anchor = String(item?.anchor || "").trim();
          const text = String(item?.text || "").trim();
          if (!anchor || !text) return comments;
          comments[anchor] = {
            anchor,
            text,
            label: String(item?.label || ""),
            slide: Number.isFinite(Number(item?.slide)) ? Number(item.slide) : null,
            snippet: String(item?.snippet || ""),
            updatedAt: String(item?.updatedAt || "")
          };
          return comments;
        }, {});
      }

      focusTextEditor() {
        const section = this.controls.text.closest(".inspector-section");
        if (section) {
          section.scrollIntoView({ block: "nearest" });
          section.classList.add("edit-attention");
          window.clearTimeout(this.textFocusTimer);
          this.textFocusTimer = window.setTimeout(() => section.classList.remove("edit-attention"), 900);
        }
        this.controls.text.focus({ preventScroll: true });
        this.controls.text.select();
      }

      focusTextLayer(element) {
        if (!element || this.isSvgElement(element)) {
          this.focusTextEditor();
          return;
        }
        if (!element.hasAttribute("tabindex")) element.tabIndex = -1;
        element.focus({ preventScroll: true });
      }

      clearTextSelection() {
        this.textSelectionRange = null;
        this.textSelectionElement = null;
      }

      captureInspectorTextSelection(options = {}) {
        const input = this.controls.text;
        if (!input || document.activeElement !== input || input.disabled) return false;
        if (!this.selected || !this.isTextElement(this.selected) || this.isSvgElement(this.selected)) return false;
        const start = Math.min(input.selectionStart || 0, input.selectionEnd || 0);
        const end = Math.max(input.selectionStart || 0, input.selectionEnd || 0);
        if (start === end) {
          this.clearTextSelection();
          return true;
        }
        const range = this.textRangeFromOffsets(this.selected, start, end);
        if (!range) {
          this.clearTextSelection();
          return true;
        }
        this.textSelectionRange = range;
        this.textSelectionElement = this.selected;
        if (options.syncInspector !== false) this.syncInlineSelectionInspector();
        return true;
      }

      textRangeFromOffsets(element, start, end) {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        let node = walker.nextNode();
        while (node) {
          textNodes.push(node);
          node = walker.nextNode();
        }
        if (!textNodes.length) return null;
        const totalLength = textNodes.reduce((total, textNode) => total + textNode.textContent.length, 0);
        const safeStart = Math.max(0, Math.min(totalLength, start));
        const safeEnd = Math.max(0, Math.min(totalLength, end));
        if (safeStart === safeEnd) return null;
        const startPoint = this.textPointAtOffset(textNodes, safeStart);
        const endPoint = this.textPointAtOffset(textNodes, safeEnd);
        if (!startPoint || !endPoint) return null;
        const range = document.createRange();
        range.setStart(startPoint.node, startPoint.offset);
        range.setEnd(endPoint.node, endPoint.offset);
        return range;
      }

      textPointAtOffset(textNodes, offset) {
        let remaining = offset;
        for (const node of textNodes) {
          const length = node.textContent.length;
          if (remaining <= length) return { node, offset: remaining };
          remaining -= length;
        }
        const last = textNodes[textNodes.length - 1];
        return last ? { node: last, offset: last.textContent.length } : null;
      }

      selectionBelongsToElement(range, element) {
        if (!range || !element) return false;
        const belongs = (node) => {
          const parent = node?.parentElement || node?.parentNode;
          const target = node?.nodeType === Node.ELEMENT_NODE ? node : parent;
          return Boolean(target && (target === element || element.contains(target)));
        };
        return belongs(range.startContainer) && belongs(range.endContainer);
      }

      isInspectorFocused() {
        return Boolean(document.activeElement?.closest?.("[data-html-deck-editor-ui].editor-shell, #editorShell"));
      }

      captureTextSelection(options = {}) {
        if (!this.isActive || !this.selected || !this.isTextElement(this.selected) || this.isSvgElement(this.selected)) return;
        if (this.captureInspectorTextSelection(options)) return;
        const selection = window.getSelection?.();
        if (!selection || selection.rangeCount === 0) return;
        const range = selection.getRangeAt(0);
        if (range.collapsed) {
          if (!this.isInspectorFocused()) this.clearTextSelection();
          return;
        }
        if (!this.selectionBelongsToElement(range, this.selected)) {
          if (!this.isInspectorFocused()) this.clearTextSelection();
          return;
        }
        this.textSelectionRange = range.cloneRange();
        this.textSelectionElement = this.selected;
        if (options.syncInspector !== false) this.syncInlineSelectionInspector();
      }

      validTextSelectionRange(element) {
        const range = this.textSelectionRange;
        if (!range || range.collapsed || this.textSelectionElement !== element) return null;
        if (!element?.isConnected || !this.selectionBelongsToElement(range, element)) {
          this.clearTextSelection();
          return null;
        }
        return range.cloneRange();
      }

      rangeStyleElement(range, element) {
        const node = range?.startContainer;
        const parent = node?.parentElement || node?.parentNode;
        const target = node?.nodeType === Node.ELEMENT_NODE ? node : parent;
        if (!target || !element.contains(target)) return element;
        return target;
      }

      textNodesInRange(range, element) {
        if (!range || !element) return [];
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
          acceptNode: (node) => {
            if (!node.textContent) return NodeFilter.FILTER_REJECT;
            if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
            return range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
        });
        const nodes = [];
        let node = walker.nextNode();
        while (node) {
          const start = node === range.startContainer ? range.startOffset : 0;
          const end = node === range.endContainer ? range.endOffset : node.textContent.length;
          if (end > start && node.textContent.slice(start, end).trim()) nodes.push(node);
          node = walker.nextNode();
        }
        return nodes;
      }

      selectedTextStyleSummary(range, element) {
        const textNodes = this.textNodesInRange(range, element);
        const targets = textNodes.map((node) => node.parentElement).filter(Boolean);
        if (!targets.length) targets.push(this.rangeStyleElement(range, element));
        const styles = targets.map((target) => getComputedStyle(target));
        const first = styles[0] || getComputedStyle(element);
        const same = (mapper) => {
          const value = mapper(first);
          return styles.every((style) => mapper(style) === value) ? value : "";
        };
        const backgrounds = targets.map((target) => this.nearestTextBackgroundColor(target, element));
        const visibleBackgrounds = backgrounds.filter(Boolean);
        const backgroundColor = visibleBackgrounds.length && visibleBackgrounds.every((value) => value === visibleBackgrounds[0])
          ? visibleBackgrounds[0]
          : (backgrounds.every((value) => value === backgrounds[0]) ? backgrounds[0] : "");
        return {
          fontFamily: same((style) => this.matchFontFamilyValue(style.fontFamily)),
          fontFamilyRaw: same((style) => style.fontFamily),
          fontSize: same((style) => String(Math.round(Number.parseFloat(style.fontSize)) || "")),
          color: same((style) => this.toHex(style.color)),
          backgroundColor,
          opacity: same((style) => String(Math.round((Number.parseFloat(style.opacity) || 1) * 100))),
          fontWeight: styles.length > 0 && styles.every((style) => this.isBoldWeight(style.fontWeight)) ? "700" : "400",
          fontStyle: styles.length > 0 && styles.every((style) => this.isItalicStyle(style.fontStyle)) ? "italic" : "normal"
        };
      }

      nearestTextBackgroundColor(target, root) {
        let element = target;
        while (element && root.contains(element)) {
          const value = this.visibleColorValue(getComputedStyle(element).backgroundColor);
          if (value) return value;
          if (element === root) break;
          element = element.parentElement;
        }
        return "";
      }

      syncInlineSelectionInspector() {
        const range = this.validTextSelectionRange(this.selected);
        if (!range || !this.controls.fontSize || this.controls.fontSize.disabled) return;
        const summary = this.selectedTextStyleSummary(range, this.selected);
        this.updateFontFamilyControls(summary.fontFamilyRaw || summary.fontFamily);
        this.controls.fontSize.value = summary.fontSize;
        if (summary.color) this.updateTextColorState(summary.color);
        this.updateBackgroundPickerState(summary.backgroundColor);
        this.controls.opacity.value = summary.opacity;
        this.updateTextStyleButtons(summary);
      }

      updateTextStyleButtons(computed) {
        this.controls.fontWeight.setAttribute("aria-pressed", computed && this.isBoldWeight(computed.fontWeight) ? "true" : "false");
        this.controls.fontStyle.setAttribute("aria-pressed", computed && this.isItalicStyle(computed.fontStyle) ? "true" : "false");
      }

      isBoldWeight(value) {
        const weight = String(value || "").trim().toLowerCase();
        if (weight === "bold" || weight === "bolder") return true;
        return (Number.parseInt(weight, 10) || 0) >= 600;
      }

      isItalicStyle(value) {
        const style = String(value || "").trim().toLowerCase();
        return style === "italic" || style.startsWith("oblique");
      }

      applyInlineTextStyle(element, property, value) {
        const range = this.validTextSelectionRange(element);
        if (!range) return false;
        if (value === "") return this.clearInlineSelectionStyle(element, property);
        const styleTarget = this.inlineStyleTargetForRange(range, element);
        if (styleTarget) {
          styleTarget.style.setProperty(property, value);
          this.select(element);
          this.restoreRangeAround(styleTarget);
          this.normalizeInlineTextStyles(element);
          this.textSelectionRange = this.currentSelectionRangeFor(element);
          this.textSelectionElement = element;
          return true;
        }
        let wrapper = document.createElement("span");
        wrapper.style.setProperty(property, value);
        const fragment = range.extractContents();
        if (!fragment.textContent || !fragment.textContent.trim()) {
          range.insertNode(fragment);
          return false;
        }
        wrapper.appendChild(fragment);
        range.insertNode(wrapper);
        this.unwrapNestedMatchingSpans(wrapper, property, value);
        wrapper = this.mergeAdjacentInlineSpans(wrapper, property);
        this.select(element);
        this.restoreRangeAround(wrapper);
        this.normalizeInlineTextStyles(element);
        this.textSelectionRange = this.currentSelectionRangeFor(element);
        this.textSelectionElement = element;
        return true;
      }

      applyInlineTextStyles(element, entries) {
        const range = this.validTextSelectionRange(element);
        const styles = entries.filter((entry) => entry[1]);
        if (!range || !styles.length) return false;
        let styleTarget = this.inlineStyleTargetForRange(range, element);
        if (styleTarget) {
          styles.forEach(([property, value]) => styleTarget.style.setProperty(property, value));
        } else {
          styleTarget = document.createElement("span");
          styles.forEach(([property, value]) => styleTarget.style.setProperty(property, value));
          const fragment = range.extractContents();
          if (!fragment.textContent || !fragment.textContent.trim()) {
            range.insertNode(fragment);
            return false;
          }
          styleTarget.appendChild(fragment);
          range.insertNode(styleTarget);
        }
        this.select(element);
        this.restoreRangeAround(styleTarget);
        this.normalizeInlineTextStyles(element);
        this.textSelectionRange = this.currentSelectionRangeFor(element);
        this.textSelectionElement = element;
        return true;
      }

      splitSimpleInlineTextStyle(range, element, property) {
        if (!range || range.startContainer !== range.endContainer || range.startContainer.nodeType !== Node.TEXT_NODE) return null;
        const textNode = range.startContainer;
        const parent = textNode.parentElement;
        if (!parent || parent === element || !element.contains(parent)) return null;
        if (!parent.style || !parent.style.getPropertyValue(property)) return null;
        const text = textNode.textContent || "";
        const before = text.slice(0, range.startOffset);
        const middle = text.slice(range.startOffset, range.endOffset);
        const after = text.slice(range.endOffset);
        if (!middle) return null;
        const reference = parent;
        if (before) {
          const beforeSpan = reference.cloneNode(false);
          beforeSpan.textContent = before;
          reference.parentNode.insertBefore(beforeSpan, reference);
        }
        const middleSpan = reference.cloneNode(false);
        middleSpan.style.removeProperty(property);
        if (!middleSpan.getAttribute("style")) middleSpan.removeAttribute("style");
        middleSpan.textContent = middle;
        reference.parentNode.insertBefore(middleSpan, reference);
        if (after) {
          const afterSpan = reference.cloneNode(false);
          afterSpan.textContent = after;
          reference.parentNode.insertBefore(afterSpan, reference);
        }
        reference.remove();
        return middleSpan;
      }

      clearInlineSelectionStyle(element, property) {
        const range = this.validTextSelectionRange(element);
        if (!range) return false;
        const splitTarget = this.splitSimpleInlineTextStyle(range, element, property);
        if (splitTarget) {
          this.select(element);
          this.restoreRangeAround(splitTarget);
          this.normalizeInlineTextStyles(element);
          this.textSelectionRange = this.currentSelectionRangeFor(element);
          this.textSelectionElement = element;
          return true;
        }
        const styleTarget = this.inlineStyleTargetForRange(range, element);
        if (styleTarget) {
          styleTarget.style.removeProperty(property);
          if (!styleTarget.getAttribute("style")) styleTarget.removeAttribute("style");
          this.select(element);
          this.restoreRangeAround(styleTarget);
          this.normalizeInlineTextStyles(element);
          this.textSelectionRange = this.currentSelectionRangeFor(element);
          this.textSelectionElement = element;
          return true;
        }
        let wrapper = document.createElement("span");
        const fragment = range.extractContents();
        if (!fragment.textContent || !fragment.textContent.trim()) {
          range.insertNode(fragment);
          return false;
        }
        wrapper.appendChild(fragment);
        wrapper.querySelectorAll("[style]").forEach((node) => {
          node.style.removeProperty(property);
          if (!node.getAttribute("style")) node.removeAttribute("style");
        });
        range.insertNode(wrapper);
        wrapper = this.mergeAdjacentInlineSpans(wrapper, property);
        this.select(element);
        this.restoreRangeAround(wrapper);
        this.normalizeInlineTextStyles(element);
        this.textSelectionRange = this.currentSelectionRangeFor(element);
        this.textSelectionElement = element;
        return true;
      }

      inlineStyleTargetForRange(range, element) {
        if (!range || range.startContainer !== range.endContainer || range.startContainer.nodeType !== Node.TEXT_NODE) return null;
        const textNode = range.startContainer;
        const parent = textNode.parentElement;
        if (!parent || parent === element || !element.contains(parent)) return null;
        if (range.startOffset !== 0 || range.endOffset !== textNode.textContent.length) return null;
        const hasOtherVisibleText = Array.from(parent.childNodes).some((node) => node !== textNode && node.textContent && node.textContent.trim());
        return hasOtherVisibleText ? null : parent;
      }

      currentSelectionRangeFor(element) {
        const selection = window.getSelection?.();
        if (!selection || selection.rangeCount === 0) return null;
        const range = selection.getRangeAt(0);
        return this.selectionBelongsToElement(range, element) ? range.cloneRange() : null;
      }

      restoreRangeAround(element) {
        const selection = window.getSelection?.();
        if (!selection || !element?.isConnected) return;
        const range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      unwrapNestedMatchingSpans(root, property, value) {
        root.querySelectorAll("span[style]").forEach((span) => {
          if (span.style.getPropertyValue(property) !== value) return;
          if (span.style.length !== 1) return;
          while (span.firstChild) span.parentNode.insertBefore(span.firstChild, span);
          span.remove();
        });
      }

      mergeAdjacentInlineSpans(span, property) {
        if (!span?.parentNode) return span;
        let current = span;
        const sameStyle = (candidate) =>
          candidate &&
          candidate.nodeType === Node.ELEMENT_NODE &&
          candidate.tagName === "SPAN" &&
          candidate.getAttribute("style") === current.getAttribute("style") &&
          candidate.style.getPropertyValue(property) === current.style.getPropertyValue(property);
        while (sameStyle(current.previousSibling)) {
          const previous = current.previousSibling;
          while (current.firstChild) previous.appendChild(current.firstChild);
          current.remove();
          current = previous;
        }
        while (sameStyle(current.nextSibling)) {
          const next = current.nextSibling;
          while (next.firstChild) current.appendChild(next.firstChild);
          next.remove();
        }
        return current;
      }

      normalizeInlineTextStyles(element) {
        element.normalize();
        element.querySelectorAll("span").forEach((span) => {
          if (span.textContent) return;
          span.remove();
        });
      }

      applyInlineSelectionStyle(element, property, value, options = {}) {
        this.captureTextSelection({ syncInspector: false });
        if (options.live && this.validTextSelectionRange(element) && !this.isSvgElement(element)) return true;
        if (!options.live && this.validTextSelectionRange(element) && !this.isSvgElement(element)) {
          if (this.applyInlineTextStyle(element, property, value)) {
            this.updateFrame();
            const recordHistory = options.recordHistory !== false;
            this.saveDraft(false, recordHistory);
            if (!recordHistory) this.markPendingHistoryChange();
            return true;
          }
        }
        return false;
      }

      toggleTextStyle(property) {
        const element = this.selected;
        if (!element || !this.isTextElement(element)) return;
        this.captureTextSelection({ syncInspector: false });
        const range = this.validTextSelectionRange(element);
        const computed = range ? this.selectedTextStyleSummary(range, element) : getComputedStyle(element);
        const value = property === "font-weight"
          ? (this.isBoldWeight(computed.fontWeight) ? "400" : "700")
          : (this.isItalicStyle(computed.fontStyle) ? "normal" : "italic");
        if (this.applyInlineSelectionStyle(element, property, value)) {
          this.syncInlineSelectionInspector();
          return;
        }
        element.style.setProperty(property, value);
        this.updateFrame();
        this.updateInspector();
        this.saveDraft(false, true);
      }

      applyInspectorValue(name, options = {}) {
        const element = this.selected;
        if (!element) return;
        const recordHistory = options.recordHistory !== false;
        const refreshInspector = options.refreshInspector !== false;
        const live = options.live === true;
        if (name === "text") {
          this.setEditableText(element, this.controls.text.value);
        }
        if (name === "shape" && element.classList.contains("shape-layer")) {
          this.applyShape(element, this.controls.shape.value);
        }
        if (name === "fontFamily" && this.isTextElement(element)) {
          const value = this.currentFontFamilyValue();
          if (this.controls.fontFamily.value === "__custom__" && !value) return;
          if (value && this.applyInlineSelectionStyle(element, "font-family", value, { live, recordHistory })) return;
          if (value) {
            element.style.fontFamily = value;
          } else {
            element.style.removeProperty("font-family");
          }
        }
        if (name === "fontSize" && this.isTextElement(element)) {
          const value = this.controls.fontSize.value;
          if (value === "") {
            element.style.removeProperty("font-size");
          } else {
            const size = this.clampNumber(value, 16, 8, 220);
            if (this.applyInlineSelectionStyle(element, "font-size", \`\${size}px\`, { live, recordHistory })) {
              if (!live) this.controls.fontSize.value = String(size);
              return;
            }
            element.style.fontSize = \`\${size}px\`;
            if (recordHistory) this.controls.fontSize.value = String(size);
          }
        }
        if (name === "color") {
          const value = this.controls.colorButton.dataset.value || "";
          if (this.isTextElement(element) && value && this.applyInlineSelectionStyle(element, "color", value, { live, recordHistory })) return;
          this.setEditableTextColor(element, value);
          this.updateTextColorState(value);
        }
        if (name === "bg") {
          const value = this.controls.bg.dataset.value || "";
          if (this.isTextElement(element) && this.applyInlineSelectionStyle(element, "background-color", value, { live, recordHistory })) {
            this.updateBackgroundPickerState(value);
            return;
          }
          if (value) {
            this.setEditableSurfaceColor(element, value);
          } else {
            this.clearEditableSurfaceColor(element);
          }
          this.updateBackgroundPickerState(value);
        }
        if (name === "opacity") {
          const value = this.controls.opacity.value;
          if (value === "") {
            element.style.removeProperty("opacity");
          } else {
            const opacity = this.clampNumber(value, 100, 0, 100);
            if (this.isTextElement(element) && this.applyInlineSelectionStyle(element, "opacity", String(opacity / 100), { live, recordHistory })) {
              if (!live) this.controls.opacity.value = String(opacity);
              return;
            }
            element.style.opacity = String(opacity / 100);
            if (recordHistory) this.controls.opacity.value = String(opacity);
          }
        }
        if (["x", "y", "width", "height"].includes(name)) {
          this.clearElementMotionState(element);
          this.reconcileStoredStagePosition(element, { mode: "sync" });
          const box = this.getStableStageBox(element);
          const numberOrFallback = (value, fallback) => {
            if (value === "") return fallback;
            const number = Number(value);
            return Number.isFinite(number) ? number : fallback;
          };
          const x = numberOrFallback(this.controls.x.value, box.x);
          const y = numberOrFallback(this.controls.y.value, box.y);
          const width = Math.max(10, numberOrFallback(this.controls.width.value, box.width));
          const height = Math.max(10, numberOrFallback(this.controls.height.value, box.height));
          this.setStagePosition(element, x, y, width, height);
        }
        if (name === "anim") {
          this.rememberMotionStableBox(element, this.reconcileStoredStagePosition(element, { mode: "sync" }) || this.getStableStageBox(element));
          this.applyAnimation(element, this.controls.anim.value, true);
          this.syncMotionControls(element);
          this.saveDraft(false, recordHistory);
          return;
        }
        if (name === "order") {
          if (!this.usesCustomMotion(element)) return;
          const order = this.setMotionOrder(element, this.controls.order.value, true);
          this.controls.order.value = order;
          this.scheduleMotionPreview();
        }
        if (name === "delay") {
          if (!this.usesCustomMotion(element)) return;
          const delay = this.clampNumber(this.controls.delay.value, 0, 0, 20000);
          element.dataset.editDelay = String(delay);
          element.style.setProperty("--edit-delay", \`\${element.dataset.editDelay}ms\`);
          this.controls.delay.value = String(delay);
          this.scheduleMotionPreview();
        }
        if (name === "duration") {
          if (!this.usesCustomMotion(element)) return;
          const duration = this.clampNumber(this.controls.duration.value, 640, 100, 10000);
          element.dataset.editDuration = String(duration);
          element.style.setProperty("--edit-duration", \`\${element.dataset.editDuration}ms\`);
          this.controls.duration.value = String(duration);
          this.scheduleMotionPreview();
        }
        this.updateFrame();
        if (refreshInspector) this.updateInspector();
        this.saveDraft(false, recordHistory);
        if (!recordHistory) this.markPendingHistoryChange();
      }

      getSelectionLabel(element) {
        if (this.isImageElement(element)) return "图片";
        if (element.classList.contains("shape-layer")) return \`形状：\${this.shapeLabel(element.dataset.shape || "rect")}\`;
        if (element.classList.contains("text-layer")) return "文字层";
        if (this.isTextElement(element)) return \`文字：\${element.tagName.toLowerCase()}\`;
        if (element.matches("[data-editable-box], [data-editor-kind='box']")) return \`视觉块：\${element.tagName.toLowerCase()}\`;
        return element.tagName.toLowerCase();
      }

      isImageElement(element) {
        return Boolean(element && (element.tagName === "IMG" || element.classList.contains("image-layer") || element.matches("[data-editable-media], [data-editor-kind='media']") || element.querySelector?.("img")));
      }

      isTextElement(element) {
        return element && element.matches("[data-editable], [data-editor-kind='text'], .text-layer");
      }

      getEditableText(element) {
        if (!element) return "";
        return this.isSvgElement(element) ? element.textContent : element.innerText;
      }

      setEditableText(element, value) {
        if (!element) return;
        if (this.isSvgElement(element)) {
          element.textContent = value;
          return;
        }
        if (this.setStructuredEditableText(element, value)) return;
        element.innerText = value;
      }

      setStructuredEditableText(element, value) {
        const textNodes = this.editableTextNodes(element);
        if (!textNodes.length) return false;
        const next = String(value ?? "").replace(/\\r\\n?/g, "\\n");
        if (textNodes.length === 1) {
          textNodes[0].textContent = next;
          return true;
        }
        const lines = next.split("\\n");
        if (lines.length === textNodes.length) {
          textNodes.forEach((node, index) => {
            node.textContent = lines[index];
          });
          return true;
        }
        const oldLengths = textNodes.map((node) => (node.textContent || "").length);
        const oldTotal = oldLengths.reduce((total, length) => total + length, 0);
        if (!oldTotal) {
          textNodes[0].textContent = next;
          textNodes.slice(1).forEach((node) => {
            node.textContent = "";
          });
          return true;
        }
        let oldCursor = 0;
        let nextCursor = 0;
        textNodes.forEach((node, index) => {
          oldCursor += oldLengths[index];
          const nextBoundary = index === textNodes.length - 1
            ? next.length
            : Math.round((oldCursor / oldTotal) * next.length);
          node.textContent = next.slice(nextCursor, nextBoundary);
          nextCursor = nextBoundary;
        });
        return true;
      }

      editableTextNodes(element) {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
          acceptNode: (node) => {
            if (!node.textContent || !node.textContent.trim()) return NodeFilter.FILTER_REJECT;
            const parent = node.parentElement;
            if (!parent || parent.closest("[data-html-deck-editor-ui], script, style, template")) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
          }
        });
        const nodes = [];
        let node = walker.nextNode();
        while (node) {
          nodes.push(node);
          node = walker.nextNode();
        }
        return nodes;
      }

      editableTextColor(element, computed = getComputedStyle(element)) {
        if (this.isSvgElement(element)) {
          const fill = computed.fill || element.getAttribute("fill");
          return this.isVisiblePaint(fill) ? fill : computed.color;
        }
        return computed.color;
      }

      editableSurfaceColor(element, computed = getComputedStyle(element)) {
        if (this.isSvgElement(element)) {
          const fill = computed.fill || element.getAttribute("fill");
          if (this.isVisiblePaint(fill)) return fill;
          const stroke = computed.stroke || element.getAttribute("stroke");
          if (this.isVisiblePaint(stroke)) return stroke;
        }
        return computed.backgroundColor;
      }

      setEditableTextColor(element, value) {
        if (this.isSvgElement(element)) {
          element.style.fill = value;
        } else {
          element.style.color = value;
        }
      }

      setEditableSurfaceColor(element, value) {
        if (!this.isSvgElement(element)) {
          element.style.backgroundColor = value;
          return;
        }
        const tag = this.svgTagName(element);
        if (["line", "polyline"].includes(tag)) {
          element.style.stroke = value;
          return;
        }
        const computed = getComputedStyle(element);
        if (this.isVisiblePaint(computed.stroke) && !this.isVisiblePaint(computed.fill)) {
          element.style.stroke = value;
        } else {
          element.style.fill = value;
        }
      }

      clearEditableSurfaceColor(element) {
        if (!this.isSvgElement(element)) {
          element.style.removeProperty("background-color");
          return;
        }
        const tag = this.svgTagName(element);
        if (["line", "polyline"].includes(tag)) {
          element.style.removeProperty("stroke");
          return;
        }
        const computed = getComputedStyle(element);
        if (this.isVisiblePaint(computed.stroke) && !this.isVisiblePaint(computed.fill)) {
          element.style.removeProperty("stroke");
        } else {
          element.style.removeProperty("fill");
        }
      }

      isVisiblePaint(value) {
        const paint = String(value || "").trim().toLowerCase();
        return Boolean(paint && paint !== "none" && paint !== "transparent" && paint !== "rgba(0, 0, 0, 0)");
      }

      visibleColorValue(value) {
        if (!this.isVisiblePaint(value)) return "";
        return this.toHex(value);
      }

      updateFontFamilyControls(value) {
        const normalized = this.matchFontFamilyValue(value);
        if (normalized) {
          this.controls.fontFamily.value = normalized;
          this.controls.fontFamilyCustom.value = "";
          this.controls.fontFamilyCustom.disabled = true;
          return;
        }
        const raw = String(value || "").trim();
        this.controls.fontFamily.value = raw ? "__custom__" : "";
        this.controls.fontFamilyCustom.value = raw;
        this.controls.fontFamilyCustom.disabled = !raw;
      }

      currentFontFamilyValue() {
        if (this.controls.fontFamily.value === "__custom__") return this.controls.fontFamilyCustom.value.trim();
        return this.controls.fontFamily.value;
      }

      renderTextColorPalette() {
        const palette = this.controls.colorPresetGrid;
        if (!palette) return;
        palette.innerHTML = "";
        TEXT_COLOR_PALETTE.forEach((value) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "color-preset";
          button.dataset.colorValue = value;
          button.title = value;
          button.setAttribute("aria-label", \`文字颜色 \${value}\`);
          button.style.setProperty("--choice-color", value);
          button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.applyTextColor(value, { recordHistory: true });
          });
          palette.appendChild(button);
        });
      }

      initColorPickers() {
        this.colorPickers = {};
        this.initColorPicker("text", this.controls.colorPickerHost, "#111111");
        this.initColorPicker("background", this.controls.bgPickerHost, "#fff2b8");
      }

      initColorPicker(kind, host, defaultColor) {
        if (!host) return;
        host.innerHTML = "";
        if (typeof window.Picker !== "function") {
          const message = document.createElement("p");
          message.className = "color-picker-missing";
          message.textContent = "取色器资源未加载";
          host.appendChild(message);
          return;
        }
        const picker = new window.Picker({
          parent: host,
          popup: false,
          alpha: false,
          editor: true,
          editorFormat: "hex",
          cancelButton: false,
          color: defaultColor
        });
        picker.onChange = (color) => {
          const value = this.pickerColorValue(color);
          if (!value) return;
          this.captureTextSelection({ syncInspector: false });
          if (kind === "background") {
            this.applyBackgroundChoice(value, { closePalette: false, recordHistory: false });
          } else {
            this.applyTextColor(value, { closePalette: false, recordHistory: false });
          }
        };
        picker.onDone = (color) => {
          const value = this.pickerColorValue(color);
          if (!value) return;
          this.captureTextSelection({ syncInspector: false });
          if (kind === "background") {
            this.applyBackgroundChoice(value, { closePalette: false, recordHistory: true });
          } else {
            this.applyTextColor(value, { closePalette: false, recordHistory: true });
          }
        };
        this.colorPickers[kind] = picker;
        picker.show?.();
      }

      pickerColorValue(color) {
        if (!color) return "";
        return this.toHex(color.hex || color.rgbaString || color.rgbString || "");
      }

      setPickerColor(kind, value) {
        const picker = this.colorPickers?.[kind];
        const normalized = this.visibleColorValue(value) || this.toHex(value || "");
        if (!picker || !normalized) return;
        try {
          picker.setColor(normalized, true);
        } catch (error) {
          // Ignore invalid picker sync values; controls still show the normalized state.
        }
      }

      updateTextColorState(value) {
        const normalized = value ? this.toHex(value) : "";
        this.controls.colorButton.dataset.value = normalized;
        if (this.controls.colorSwatch) {
          this.controls.colorSwatch.classList.toggle("no-color", !normalized);
          if (normalized) {
            this.controls.colorSwatch.style.backgroundColor = normalized;
          } else {
            this.controls.colorSwatch.style.removeProperty("background-color");
          }
        }
        if (this.controls.colorText) {
          this.controls.colorText.textContent = normalized || "未选中";
        }
        this.updateTextColorPaletteState(normalized);
        this.setPickerColor("text", normalized);
      }

      updateTextColorPaletteState(value) {
        const normalized = this.visibleColorValue(value) || this.toHex(value || "");
        this.controls.colorPalette?.querySelectorAll("[data-color-value]").forEach((button) => {
          button.setAttribute("aria-checked", String((button.dataset.colorValue || "").toLowerCase() === normalized.toLowerCase()));
        });
      }

      applyTextColor(value, options = {}) {
        if (!this.selected || !value) return;
        this.controls.colorButton.dataset.value = value;
        this.applyInspectorValue("color", { recordHistory: options.recordHistory !== false });
        this.updateTextColorState(value);
        if (options.closePalette !== false) this.closeTextColorPalette();
      }

      async pickColorWithEyeDropper() {
        if (typeof window.EyeDropper !== "function") {
          this.toastMessage("当前浏览器不支持吸管取色");
          return "";
        }
        try {
          const result = await new window.EyeDropper().open();
          return this.toHex(result?.sRGBHex || "");
        } catch (error) {
          return "";
        }
      }

      async pickTextColor() {
        if (!this.selected || this.controls.colorEyedropper.disabled) return;
        this.captureTextSelection({ syncInspector: false });
        const value = await this.pickColorWithEyeDropper();
        if (value) this.applyTextColor(value, { closePalette: false, recordHistory: true });
      }

      async pickBackgroundColor() {
        if (!this.selected || this.controls.bgEyedropper.disabled) return;
        this.captureTextSelection({ syncInspector: false });
        const value = await this.pickColorWithEyeDropper();
        if (value) this.applyBackgroundChoice(value, { closePalette: false, recordHistory: true });
      }

      clampNumber(value, fallback, min, max) {
        const number = Number(value);
        const safe = Number.isFinite(number) ? number : fallback;
        return Math.round(Math.max(min, Math.min(max, safe)));
      }

      matchFontFamilyValue(value) {
        const normalized = (value || "").toLowerCase();
        const presets = [
          { value: FONT_BODY_STACK, tokens: ["hanken grotesk", "system-ui", "-apple-system", "segoe ui"] },
          { value: FONT_HEITI_STACK, tokens: ["pingfang sc", "microsoft yahei", "noto sans sc"] },
          { value: FONT_CJK_SERIF_STACK, tokens: ["noto serif sc", "songti sc", "simsun"] },
          { value: FONT_SONGTI_STACK, tokens: ["songti sc", "stsong", "simsun"] },
          { value: FONT_KAITI_STACK, tokens: ["kaiti sc", "stkaiti", "kaiti"] },
          { value: FONT_LATIN_SERIF_STACK, tokens: ["newsreader", "georgia", "times new roman"] },
          { value: "Inter, Arial, Helvetica, sans-serif", tokens: ["inter"] },
          { value: "Aptos, Calibri, Arial, sans-serif", tokens: ["aptos", "calibri"] },
          { value: "Arial, Helvetica, sans-serif", tokens: ["arial, helvetica"] },
          { value: FONT_DISPLAY_STACK, tokens: ["din alternate", "arial narrow", "impact"] },
          { value: FONT_MONO_STACK, tokens: ["dm mono", "ui-monospace", "sfmono-regular", "consolas", "menlo"] }
        ];
        const match = presets.find((preset) => preset.tokens.some((token) => normalized.includes(token)));
        return match ? match.value : "";
      }

      openImagePicker() {
        this.controls.image.disabled = false;
        this.controls.image.click();
      }

      toggleShapeMenu() {
        const willOpen = this.controls.shapeMenu.hidden;
        this.controls.shapeMenu.hidden = !willOpen;
        this.controls.addShape.setAttribute("aria-expanded", String(willOpen));
        if (willOpen) this.positionShapeMenu();
      }

      closeShapeMenu() {
        this.controls.shapeMenu.hidden = true;
        this.controls.addShape.setAttribute("aria-expanded", "false");
      }

      renderBackgroundPalette() {
        const palette = this.controls.bgPresetGrid;
        if (!palette) return;
        palette.innerHTML = "";
        BACKGROUND_COLOR_PALETTE.forEach((choice) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = \`color-preset\${choice.value ? "" : " no-color"}\`;
          button.setAttribute("role", "menuitemradio");
          button.setAttribute("aria-checked", "false");
          button.dataset.bgValue = choice.value;
          button.title = choice.label;
          button.setAttribute("aria-label", choice.label);
          if (choice.value) button.style.setProperty("--choice-color", choice.value);
          button.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.applyBackgroundChoice(choice.value);
          });
          palette.appendChild(button);
        });
        this.updateBackgroundPickerState("");
      }

      toggleTextColorPalette() {
        if (this.controls.colorButton.disabled) return;
        const willOpen = this.controls.colorPalette.hidden;
        if (willOpen) this.closeBackgroundPalette();
        this.controls.colorPalette.hidden = !willOpen;
        this.controls.colorButton.setAttribute("aria-expanded", String(willOpen));
        if (willOpen) this.positionTextColorPalette();
      }

      closeTextColorPalette() {
        if (!this.controls.colorPalette || this.controls.colorPalette.hidden) return;
        this.controls.colorPalette.hidden = true;
        this.controls.colorButton.setAttribute("aria-expanded", "false");
      }

      positionTextColorPalette() {
        this.positionColorPalette(this.controls.colorButton, this.controls.colorPalette, "--color-palette-left", "--color-palette-top");
      }

      toggleBackgroundPalette() {
        if (this.controls.bg.disabled) return;
        const willOpen = this.controls.bgPalette.hidden;
        if (willOpen) this.closeTextColorPalette();
        this.controls.bgPalette.hidden = !willOpen;
        this.controls.bg.setAttribute("aria-expanded", String(willOpen));
        if (willOpen) this.positionBackgroundPalette();
      }

      closeBackgroundPalette() {
        if (!this.controls.bgPalette || this.controls.bgPalette.hidden) return;
        this.controls.bgPalette.hidden = true;
        this.controls.bg.setAttribute("aria-expanded", "false");
      }

      positionBackgroundPalette() {
        this.positionColorPalette(this.controls.bg, this.controls.bgPalette, "--bg-palette-left", "--bg-palette-top");
      }

      positionColorPalette(buttonControl, palette, leftVar, topVar) {
        const button = buttonControl.getBoundingClientRect();
        const width = palette.offsetWidth || 246;
        const height = palette.offsetHeight || 238;
        const gutter = 10;
        const left = Math.max(gutter, Math.min(window.innerWidth - width - gutter, button.left));
        const preferredTop = button.bottom + 8;
        const top = Math.max(gutter, Math.min(window.innerHeight - height - gutter, preferredTop));
        palette.style.setProperty(leftVar, \`\${Math.round(left)}px\`);
        palette.style.setProperty(topVar, \`\${Math.round(top)}px\`);
      }

      applyBackgroundChoice(value, options = {}) {
        if (!this.selected) return;
        this.controls.bg.dataset.value = value;
        this.applyInspectorValue("bg", { recordHistory: options.recordHistory !== false });
        if (options.closePalette !== false) this.closeBackgroundPalette();
      }

      updateBackgroundPickerState(value) {
        const normalized = this.visibleColorValue(value);
        this.controls.bg.dataset.value = normalized;
        if (this.controls.bgSwatch) {
          this.controls.bgSwatch.classList.toggle("no-color", !normalized);
          if (normalized) {
            this.controls.bgSwatch.style.backgroundColor = normalized;
          } else {
            this.controls.bgSwatch.style.removeProperty("background-color");
          }
        }
        if (this.controls.bgText) {
          const choice = BACKGROUND_COLOR_PALETTE.find((item) => item.value.toLowerCase() === normalized.toLowerCase());
          this.controls.bgText.textContent = choice?.label || normalized || "无背景";
        }
        this.controls.bgPalette?.querySelectorAll("[data-bg-value]").forEach((button) => {
          button.setAttribute("aria-checked", String((button.dataset.bgValue || "") === normalized));
        });
        this.setPickerColor("background", normalized);
      }

      positionShapeMenu() {
        const button = this.controls.addShape.getBoundingClientRect();
        const menu = this.controls.shapeMenu;
        const menuWidth = menu.offsetWidth || 184;
        const menuHeight = menu.offsetHeight || 180;
        const compactEditor = window.innerWidth <= 960;
        const gutter = compactEditor ? 12 : 10;
        const center = compactEditor ? window.innerWidth / 2 : button.left + button.width / 2;
        const left = Math.max(gutter + menuWidth / 2, Math.min(window.innerWidth - gutter - menuWidth / 2, center));
        const preferredTop = compactEditor ? 60 : button.bottom + 8;
        const top = Math.max(gutter, Math.min(window.innerHeight - gutter - menuHeight, preferredTop));
        menu.style.setProperty("--shape-menu-left", \`\${Math.round(left)}px\`);
        menu.style.setProperty("--shape-menu-top", \`\${Math.round(top)}px\`);
      }

      activeSlide() {
        return this.presentation.slides[this.presentation.currentSlide];
      }

      activeSlideDesignSize(slide = this.activeSlide()) {
        if (isDeckStageElement(this.stage)) {
          return {
            width: Math.max(1, Number(this.stage.getAttribute("width")) || this.stage.designWidth || 1920),
            height: Math.max(1, Number(this.stage.getAttribute("height")) || this.stage.designHeight || 1080)
          };
        }
        return elementDesignSize(slide || this.stage, stageDesignSize(this.stage));
      }

      nextInsertPoint(width = 320, height = 180) {
        const slide = this.activeSlide().getBoundingClientRect();
        const size = this.activeSlideDesignSize();
        const panel = document.querySelector(".editor-panel").getBoundingClientRect();
        const rail = document.querySelector(".editor-slides").getBoundingClientRect();
        const compactEditor = window.innerWidth <= 960;
        const visibleLeft = compactEditor ? slide.left : Math.max(slide.left, rail.right + 18);
        const visibleRight = compactEditor ? slide.right : Math.min(slide.right, panel.left - 18);
        const visibleTop = compactEditor ? Math.max(slide.top, rail.bottom + 16) : Math.max(slide.top, 92);
        const visibleBottom = compactEditor ? Math.min(slide.bottom, panel.top - 16) : Math.min(slide.bottom, window.innerHeight - 22);
        const scale = slide.width / size.width;
        if (visibleRight > visibleLeft + 40 && visibleBottom > visibleTop + 40) {
          return {
            x: Math.max(0, Math.min(size.width - width, ((visibleLeft + visibleRight) / 2 - slide.left) / scale - width / 2)),
            y: Math.max(0, Math.min(size.height - height, ((visibleTop + visibleBottom) / 2 - slide.top) / scale - height / 2))
          };
        }
        return {
          x: Math.max(0, Math.min(size.width - width, this.lastInsert.x)),
          y: Math.max(0, Math.min(size.height - height, this.lastInsert.y))
        };
      }

      stagePointFromClient(clientX, clientY) {
        const rect = this.activeSlide().getBoundingClientRect();
        const size = this.activeSlideDesignSize();
        const scale = rect.width / size.width;
        return {
          x: (clientX - rect.left) / scale,
          y: (clientY - rect.top) / scale,
          scale
        };
      }

      getStageBox(element) {
        const active = this.activeSlide();
        const stageRect = active.getBoundingClientRect();
        const size = this.activeSlideDesignSize(active);
        const rect = this.elementClientRect(element);
        const scale = stageRect.width / size.width;
        return {
          x: (rect.left - stageRect.left) / scale,
          y: (rect.top - stageRect.top) / scale,
          width: rect.width / scale,
          height: rect.height / scale
        };
      }

      clientBoxFromStageBox(box) {
        const active = this.activeSlide();
        const slideRect = active.getBoundingClientRect();
        const size = this.activeSlideDesignSize(active);
        const scale = slideRect.width / size.width;
        return {
          x: slideRect.left + box.x * scale,
          y: slideRect.top + box.y * scale,
          width: box.width * scale,
          height: box.height * scale,
          scale
        };
      }

      isElementMotionRunning(element) {
        return Boolean(element && (element.classList.contains("editor-motion-preview") || element.classList.contains("editor-motion-running")));
      }

      rememberMotionStableBox(element, box = this.getStageBox(element)) {
        if (!element || !box) return box;
        const stableBox = {
          x: box.x,
          y: box.y,
          width: box.width,
          height: box.height
        };
        this.motionStableBoxes.set(element, stableBox);
        return stableBox;
      }

      readStoredStageBox(element) {
        if (!element) return null;
        const x = Number.parseFloat(element.dataset.editStageX);
        const y = Number.parseFloat(element.dataset.editStageY);
        const width = Number.parseFloat(element.dataset.editStageWidth);
        const height = Number.parseFloat(element.dataset.editStageHeight);
        if (![x, y, width, height].every(Number.isFinite)) return null;
        return { x, y, width, height };
      }

      storeStageBox(element, box) {
        if (!element || !box) return;
        element.dataset.editStageX = String(Math.round(box.x));
        element.dataset.editStageY = String(Math.round(box.y));
        element.dataset.editStageWidth = String(Math.round(box.width));
        element.dataset.editStageHeight = String(Math.round(box.height));
      }

      isUsableStageBox(box) {
        return Boolean(
          box &&
          [box.x, box.y, box.width, box.height].every(Number.isFinite) &&
          box.width > 0 &&
          box.height > 0
        );
      }

      getStableStageBox(element) {
        const storedBox = this.readStoredStageBox(element);
        if (storedBox) {
          this.rememberMotionStableBox(element, storedBox);
          return storedBox;
        }
        if (this.isElementMotionRunning(element)) {
          const stableBox = this.motionStableBoxes.get(element);
          if (stableBox) return { ...stableBox };
        }
        return this.rememberMotionStableBox(element);
      }

      getFrameStageBox(element) {
        if (!element) return null;
        if (this.isElementMotionRunning(element)) return this.getStableStageBox(element);
        const liveBox = this.getStageBox(element);
        return this.isUsableStageBox(liveBox) ? liveBox : this.getStableStageBox(element);
      }

      reconcileStoredStagePosition(element, options = {}) {
        const storedBox = this.readStoredStageBox(element);
        if (!element || this.isElementMotionRunning(element)) return storedBox;
        const liveBox = this.getStageBox(element);
        if (!this.isUsableStageBox(liveBox)) return storedBox;
        if (options.mode === "sync") {
          if (storedBox && element.classList.contains("edit-moved")) {
            return this.rememberMotionStableBox(element, storedBox);
          }
          this.storeStageBox(element, liveBox);
          return this.rememberMotionStableBox(element, liveBox);
        }
        if (!storedBox || !element.classList.contains("edit-moved")) return storedBox || this.rememberMotionStableBox(element, liveBox);
        const dx = Math.round(storedBox.x - liveBox.x);
        const dy = Math.round(storedBox.y - liveBox.y);
        if (Math.abs(dx) <= 1 && Math.abs(dy) <= 1) return storedBox;
        const currentX = Number.parseFloat(element.style.getPropertyValue("--edit-x")) || 0;
        const currentY = Number.parseFloat(element.style.getPropertyValue("--edit-y")) || 0;
        element.style.setProperty("--edit-x", \`\${Math.round(currentX + dx)}px\`);
        element.style.setProperty("--edit-y", \`\${Math.round(currentY + dy)}px\`);
        return this.rememberMotionStableBox(element, storedBox);
      }

      clampStageBox(box, keepVisible = 24) {
        const size = this.activeSlideDesignSize();
        const width = Math.max(10, Math.min(size.width, box.width || 10));
        const height = Math.max(10, Math.min(size.height, box.height || 10));
        const visibleX = Math.min(keepVisible, width);
        const visibleY = Math.min(keepVisible, height);
        return {
          x: Math.max(-width + visibleX, Math.min(size.width - visibleX, box.x)),
          y: Math.max(-height + visibleY, Math.min(size.height - visibleY, box.y)),
          width,
          height
        };
      }

      clampInsertPoint(x, y, width, height) {
        const box = this.clampStageBox({ x, y, width, height }, Math.min(24, width, height));
        return { x: box.x, y: box.y };
      }

      rememberBaseTransform(element) {
        if (element.classList.contains("edit-moved")) return;
        const computed = getComputedStyle(element);
        const inlineTransform = element.style.transform && element.style.transform.trim();
        const motionTransform = element.matches(\`.reveal, .reveal-left, .reveal-scale, \${this.editorMotionClasses().map((className) => \`.\${className}\`).join(", ")}\`) || computed.animationName !== "none";
        const computedTransform = motionTransform ? "" : computed.transform;
        const baseTransform = inlineTransform && inlineTransform !== "none"
          ? inlineTransform
          : computedTransform && computedTransform !== "none"
            ? computedTransform
            : "";
        if (baseTransform) {
          element.style.setProperty("--edit-base-transform", baseTransform);
        } else {
          element.style.removeProperty("--edit-base-transform");
        }
      }

      setStagePosition(element, x, y, width, height) {
        if (!element.classList.contains("editor-layer")) {
          const shouldKeepVisible = this.shouldHoldMotionNode(element);
          this.rememberBaseTransform(element);
          const safe = this.clampStageBox({ x, y, width, height });
          const box = this.getStableStageBox(element);
          const dx = Math.round(safe.x - box.x);
          const dy = Math.round(safe.y - box.y);
          const scaleX = safe.width > 0 && box.width > 0 ? safe.width / box.width : 1;
          const scaleY = safe.height > 0 && box.height > 0 ? safe.height / box.height : 1;
          if (dx || dy) {
            const currentX = Number.parseFloat(element.style.getPropertyValue("--edit-x")) || 0;
            const currentY = Number.parseFloat(element.style.getPropertyValue("--edit-y")) || 0;
            element.classList.add("edit-moved");
            element.style.setProperty("--edit-x", \`\${Math.round(currentX + dx)}px\`);
            element.style.setProperty("--edit-y", \`\${Math.round(currentY + dy)}px\`);
          }
          if (Math.abs(scaleX - 1) > 0.01 || Math.abs(scaleY - 1) > 0.01) {
            const currentScaleX = Number.parseFloat(element.style.getPropertyValue("--edit-scale-x")) || 1;
            const currentScaleY = Number.parseFloat(element.style.getPropertyValue("--edit-scale-y")) || 1;
            element.classList.add("edit-moved");
            element.style.setProperty("--edit-scale-x", \`\${Math.max(0.05, currentScaleX * scaleX).toFixed(3)}\`);
            element.style.setProperty("--edit-scale-y", \`\${Math.max(0.05, currentScaleY * scaleY).toFixed(3)}\`);
          }
          if (shouldKeepVisible && element.classList.contains("edit-moved")) {
            this.holdMotionNodeForEditing(element);
            element.style.setProperty("opacity", "1", "important");
          }
          this.storeStageBox(element, safe);
          this.rememberMotionStableBox(element, safe);
          return;
        }
        const slide = this.closestSlide(element);
        if (!slide) return;
        const slideBox = slide.getBoundingClientRect();
        const size = this.activeSlideDesignSize(slide);
        const parent = element.offsetParent || slide;
        const parentBox = parent.getBoundingClientRect();
        const scale = slideBox.width / size.width;
        const left = (parentBox.left - slideBox.left) / scale;
        const top = (parentBox.top - slideBox.top) / scale;
        const safeWidth = Math.min(size.width, Math.max(10, width));
        const safeHeight = Math.min(size.height, Math.max(10, height));
        const safeX = Math.max(0, Math.min(size.width - safeWidth, x));
        const safeY = Math.max(0, Math.min(size.height - safeHeight, y));
        element.style.position = "absolute";
        element.style.left = \`\${Math.round(safeX - left)}px\`;
        element.style.top = \`\${Math.round(safeY - top)}px\`;
        element.style.width = \`\${Math.round(safeWidth)}px\`;
        element.style.height = \`\${Math.round(safeHeight)}px\`;
        element.style.margin = "0";
        element.classList.remove("edit-moved");
        element.style.removeProperty("--edit-x");
        element.style.removeProperty("--edit-y");
        element.style.removeProperty("--edit-scale");
        element.style.removeProperty("--edit-scale-x");
        element.style.removeProperty("--edit-scale-y");
        element.style.removeProperty("--edit-base-transform");
        this.storeStageBox(element, { x: safeX, y: safeY, width: safeWidth, height: safeHeight });
        this.rememberMotionStableBox(element, { x: safeX, y: safeY, width: safeWidth, height: safeHeight });
      }

      updateFrame() {
        if (!this.selected || !this.isActive || !this.closestSlide(this.selected)) {
          this.frame.classList.remove("active");
          return;
        }
        const box = this.getFrameStageBox(this.selected);
        const clientBox = this.clientBoxFromStageBox(box);
        this.frame.style.left = \`\${clientBox.x}px\`;
        this.frame.style.top = \`\${clientBox.y}px\`;
        this.frame.style.width = \`\${clientBox.width}px\`;
        this.frame.style.height = \`\${clientBox.height}px\`;
        this.frame.dataset.smallSelection = String(box.width < 28 || box.height < 28);
        this.frame.classList.add("active");
      }

      stopMotionFrameTracking() {
        if (!this.motionFrameRaf) return;
        window.cancelAnimationFrame(this.motionFrameRaf);
        this.motionFrameRaf = null;
      }

      clearMotionCleanupTimer(element) {
        const timer = this.motionCleanupTimers.get(element);
        if (!timer) return;
        window.clearTimeout(timer);
        this.motionCleanupTimers.delete(element);
      }

      clearMotionParentStability(root) {
        if (!root) return;
        root.querySelectorAll(".editor-motion-parent-stable").forEach((node) => node.classList.remove("editor-motion-parent-stable"));
        this.motionStableAncestors = new WeakMap();
        this.motionAncestorCounts = new WeakMap();
      }

      clearElementMotionState(element) {
        if (!element) return;
        this.clearMotionCleanupTimer(element);
        this.releaseMotionAncestors(element);
        element.classList.remove("editor-motion-preview", "editor-motion-running");
        if (!element.dataset.editAnim) this.editorMotionClasses().forEach((className) => element.classList.remove(className));
        if (this.selected === element) this.stopMotionFrameTracking();
      }

      handleSlideChange(event) {
        if (this.motionHold || this.dragState) return;
        const index = Number.isFinite(event?.detail?.index) ? event.detail.index : this.presentation.currentSlide;
        const now = performance.now();
        if (this.lastSlideReplay.index === index && now - this.lastSlideReplay.at < 90) return;
        this.lastSlideReplay = { index, at: now };
        this.stopMotionFrameTracking();
        const slide = this.presentation.slides[index];
        if (this.isActive) {
          this.refreshEditableElements();
          this.revealActiveSlideForEditing(index);
          this.renderSlideRail();
        }
        if (this.isActive && this.selected && slide && this.closestSlide(this.selected) !== slide) {
          this.clearSelection();
        }
        requestAnimationFrame(() => this.replayActiveSlideMotion(false));
      }

      trackFrameDuringMotion(element, totalMs) {
        this.stopMotionFrameTracking();
        if (!element || !this.isActive || this.selected !== element) return;
        const endAt = performance.now() + Math.max(160, totalMs);
        const tick = () => {
          if (!this.isActive || this.selected !== element || !element.isConnected) {
            this.motionFrameRaf = null;
            this.updateFrame();
            return;
          }
          if (performance.now() < endAt) {
            this.motionFrameRaf = window.requestAnimationFrame(tick);
          } else {
            this.motionFrameRaf = null;
            this.updateFrame();
          }
        };
        this.motionFrameRaf = window.requestAnimationFrame(tick);
      }

      cssTimeListToMs(value) {
        return String(value || "0s").split(",").map((item) => {
          const time = item.trim();
          const number = Number.parseFloat(time);
          if (!Number.isFinite(number)) return 0;
          return time.endsWith("ms") ? number : number * 1000;
        });
      }

      motionFrameTrackDuration(element, fallback = 900) {
        const computed = window.getComputedStyle(element);
        const durations = [
          ...this.cssTimeListToMs(computed.transitionDuration),
          ...this.cssTimeListToMs(computed.animationDuration)
        ];
        const delays = [
          ...this.cssTimeListToMs(computed.transitionDelay),
          ...this.cssTimeListToMs(computed.animationDelay)
        ];
        const max = durations.reduce((total, duration, index) => {
          const delay = delays[index % Math.max(1, delays.length)] || 0;
          return Math.max(total, duration + delay);
        }, 0);
        return Math.max(fallback, max + 160);
      }

      getSnapTargets(element) {
        const active = this.activeSlide();
        const size = this.activeSlideDesignSize(active);
        const targets = {
          x: [
            { value: 0, bias: -6 },
            { value: size.width / 2, bias: -8 },
            { value: size.width, bias: -6 }
          ],
          y: [
            { value: 0, bias: -6 },
            { value: size.height / 2, bias: -8 },
            { value: size.height, bias: -6 }
          ]
        };
        this.getEditableElements().forEach((candidate) => {
          if (candidate === element || this.closestSlide(candidate) !== active) return;
          if (element.contains(candidate) || candidate.contains(element)) return;
          if (candidate.closest(".editor-frame") || candidate.closest(".editor-guide")) return;
          const box = this.getStageBox(candidate);
          if (box.width <= 0 || box.height <= 0) return;
          const bias = this.getSnapTargetBias(candidate);
          targets.x.push(
            { value: box.x, bias },
            { value: box.x + box.width / 2, bias },
            { value: box.x + box.width, bias }
          );
          targets.y.push(
            { value: box.y, bias },
            { value: box.y + box.height / 2, bias },
            { value: box.y + box.height, bias }
          );
        });
        return targets;
      }

      getSnapTargetBias(element) {
        if (this.isNestedSnapTarget(element)) return 4;
        if (element.matches("[data-editable-media], [data-editable-box], [data-editor-kind='media'], [data-editor-kind='box'], .editor-layer")) return 0;
        return 1;
      }

      isNestedSnapTarget(element) {
        const parentEditable = element.parentElement?.closest("[data-editable], [data-editable-media], [data-editable-box], [data-editor-kind], .editor-layer");
        return Boolean(parentEditable && parentEditable !== element && this.stage.contains(parentEditable));
      }

      snapBox(box, mode) {
        const next = { ...box };
        const targets = this.getSnapTargets(this.selected);
        const guides = { x: null, y: null };
        const threshold = this.snapThreshold;
        const best = {
          x: { score: Infinity, delta: 0, guide: null },
          y: { score: Infinity, delta: 0, guide: null }
        };

        const testAxis = (axis, sources) => {
          targets[axis].forEach((target) => {
            sources.forEach((source) => {
              const distance = Math.abs(source.value - target.value);
              const score = distance + target.bias;
              if (distance <= threshold && score < best[axis].score) {
                best[axis] = { score, delta: target.value - source.value, guide: target.value };
              }
            });
          });
        };

        if (mode === "move") {
          testAxis("x", [
            { value: next.x },
            { value: next.x + next.width / 2 },
            { value: next.x + next.width }
          ]);
          testAxis("y", [
            { value: next.y },
            { value: next.y + next.height / 2 },
            { value: next.y + next.height }
          ]);
          if (best.x.guide !== null) {
            next.x += best.x.delta;
            guides.x = best.x.guide;
          }
          if (best.y.guide !== null) {
            next.y += best.y.delta;
            guides.y = best.y.guide;
          }
        } else {
          testAxis("x", [{ value: next.x + next.width }]);
          testAxis("y", [{ value: next.y + next.height }]);
          if (best.x.guide !== null) {
            next.width = Math.max(24, next.width + best.x.delta);
            guides.x = best.x.guide;
          }
          if (best.y.guide !== null) {
            next.height = Math.max(24, next.height + best.y.delta);
            guides.y = best.y.guide;
          }
        }

        return { box: next, guides };
      }

      showGuides(guides) {
        const active = this.activeSlide();
        const slideRect = active.getBoundingClientRect();
        const size = this.activeSlideDesignSize(active);
        const scale = slideRect.width / size.width;
        if (guides.x !== null) {
          this.guideV.style.left = \`\${slideRect.left + guides.x * scale}px\`;
          this.guideV.style.top = \`\${slideRect.top}px\`;
          this.guideV.style.height = \`\${size.height * scale}px\`;
          this.guideV.classList.add("active");
        } else {
          this.guideV.classList.remove("active");
        }
        if (guides.y !== null) {
          this.guideH.style.left = \`\${slideRect.left}px\`;
          this.guideH.style.top = \`\${slideRect.top + guides.y * scale}px\`;
          this.guideH.style.width = \`\${size.width * scale}px\`;
          this.guideH.classList.add("active");
        } else {
          this.guideH.classList.remove("active");
        }
      }

      hideGuides() {
        this.guideV.classList.remove("active");
        this.guideH.classList.remove("active");
      }

      startPointerAction(event, mode) {
        if (!this.selected) return;
        event.preventDefault();
        event.stopPropagation();
        this.motionHold = true;
        window.clearTimeout(this.motionPreviewTimer);
        this.motionPreviewTimer = null;
        const slide = this.activeSlide();
        if (slide) this.clearMotionRunState(slide);
        const box = this.getStableStageBox(this.selected);
        const point = this.stagePointFromClient(event.clientX, event.clientY);
        this.dragState = {
          mode,
          startX: point.x,
          startY: point.y,
          box
        };
        if (event.target.setPointerCapture && event.pointerId !== undefined) {
          event.target.setPointerCapture(event.pointerId);
        }
      }

      handlePointerMove(event) {
        if (!this.dragState || !this.selected) return;
        if (event.pointerType === "mouse" && event.buttons === 0) {
          this.finishPointerAction();
          return;
        }
        const point = this.stagePointFromClient(event.clientX, event.clientY);
        const dx = point.x - this.dragState.startX;
        const dy = point.y - this.dragState.startY;
        const next = { ...this.dragState.box };
        if (this.dragState.mode === "move") {
          next.x += dx;
          next.y += dy;
        } else {
          next.width = Math.max(24, next.width + dx);
          next.height = Math.max(24, next.height + dy);
        }
        const snapped = this.snapBox(next, this.dragState.mode);
        const safe = this.clampStageBox(snapped.box);
        this.setStagePosition(this.selected, safe.x, safe.y, safe.width, safe.height);
        this.showGuides(snapped.guides);
        this.updateFrame();
        this.updateInspector();
      }

      finishPointerAction() {
        if (!this.dragState) return;
        const element = this.selected;
        this.dragState = null;
        this.hideGuides();
        this.motionHold = false;
        if (element) {
          this.reconcileStoredStagePosition(element, { mode: "sync" });
          this.updateFrame();
          this.updateInspector();
        }
        this.saveDraft(false, true);
      }

      addText() {
        const layer = document.createElement("div");
        const point = this.nextInsertPoint(460, 110);
        layer.className = "editor-layer text-layer editor-anim-rise";
        layer.dataset.editable = "";
        layer.dataset.editId = \`layer-\${Date.now()}\`;
        layer.dataset.editAnim = "rise";
        layer.dataset.editDelay = "0";
        layer.dataset.editDuration = "640";
        layer.style.left = \`\${Math.round(point.x)}px\`;
        layer.style.top = \`\${Math.round(point.y)}px\`;
        layer.style.setProperty("--edit-delay", "0ms");
        layer.style.setProperty("--edit-duration", "640ms");
        layer.textContent = "双击编辑文字";
        this.activeSlide().appendChild(layer);
        this.bindElement(layer);
        this.select(layer);
        this.saveDraft();
      }

      addShape(shape = "rect") {
        const layer = document.createElement("div");
        const point = this.nextInsertPoint(280, 180);
        layer.className = "editor-layer shape-layer editor-anim-scale";
        layer.dataset.editId = \`shape-\${Date.now()}\`;
        layer.dataset.editAnim = "scale";
        layer.dataset.editDelay = "0";
        layer.dataset.editDuration = "640";
        this.applyShape(layer, shape);
        layer.style.left = \`\${Math.round(point.x)}px\`;
        layer.style.top = \`\${Math.round(point.y)}px\`;
        layer.style.setProperty("--edit-delay", "0ms");
        layer.style.setProperty("--edit-duration", "640ms");
        this.activeSlide().appendChild(layer);
        this.bindElement(layer);
        this.select(layer);
        this.saveDraft();
      }

      addImage(dataUrl, x = this.lastInsert.x, y = this.lastInsert.y) {
        const point = arguments.length > 1 ? this.clampInsertPoint(x, y, 520, 320) : this.nextInsertPoint(520, 320);
        const wrapper = document.createElement("div");
        wrapper.className = "editor-layer image-layer editor-anim-scale";
        wrapper.dataset.editId = \`image-\${Date.now()}\`;
        wrapper.dataset.editAnim = "scale";
        wrapper.dataset.editDelay = "0";
        wrapper.dataset.editDuration = "640";
        wrapper.style.left = \`\${Math.round(point.x)}px\`;
        wrapper.style.top = \`\${Math.round(point.y)}px\`;
        wrapper.style.setProperty("--edit-delay", "0ms");
        wrapper.style.setProperty("--edit-duration", "640ms");
        const image = document.createElement("img");
        image.src = dataUrl;
        image.alt = "用户添加的图片";
        wrapper.appendChild(image);
        this.activeSlide().appendChild(wrapper);
        this.bindElement(wrapper);
        this.select(wrapper);
        this.lastInsert = point;
        this.saveDraft();
      }

      applyShape(element, value) {
        element.dataset.shape = value || "rect";
        if (element.dataset.shape === "line") {
          element.style.height = \`\${Math.max(8, Number.parseInt(element.style.height || "14", 10) || 14)}px\`;
        }
        if (!element.style.backgroundColor) element.style.backgroundColor = "rgba(31, 43, 224, 0.16)";
        this.updateInspector();
        this.updateFrame();
      }

      shapeLabel(value) {
        return {
          rect: "矩形",
          roundRect: "圆角矩形",
          circle: "圆形",
          triangle: "三角形",
          line: "直线",
          arrow: "箭头"
        }[value] || "矩形";
      }

      handleFileInput(event) {
        const file = event.target.files && event.target.files[0];
        if (!file) return;
        this.controls.imageName.textContent = file.name;
        this.readImageFile(file, (dataUrl) => {
          if (this.selected && this.isImageElement(this.selected)) {
            this.replaceImage(this.selected, dataUrl);
          } else {
            this.addImage(dataUrl);
          }
          this.controls.image.value = "";
          this.updateInspector();
        });
      }

      hasDraggedImage(event) {
        return Array.from(event.dataTransfer?.items || []).some((item) => item.type.startsWith("image/"));
      }

      handleDragEnter(event) {
        if (!this.isActive || !this.hasDraggedImage(event)) return;
        this.fileDragDepth += 1;
        this.handleDrag(event);
      }

      handleDrag(event) {
        if (!this.isActive) return;
        if (!this.hasDraggedImage(event)) return;
        event.preventDefault();
        document.body.classList.add("dragging-file");
        this.controls.dropZone.classList.add("dragging");
      }

      resetFileDragState() {
        this.fileDragDepth = 0;
        document.body.classList.remove("dragging-file");
        this.controls.dropZone.classList.remove("dragging");
      }

      clearDrag(event) {
        if (event.type === "drop") {
          this.resetFileDragState();
          return;
        }
        this.fileDragDepth = Math.max(0, this.fileDragDepth - 1);
        if (this.fileDragDepth > 0) return;
        this.resetFileDragState();
      }

      handleDrop(event) {
        if (!this.isActive) return;
        const files = Array.from(event.dataTransfer?.files || []);
        if (!files.length) return;
        event.preventDefault();
        this.resetFileDragState();
        const file = files.find((item) => item.type.startsWith("image/"));
        if (!file) {
          this.toastMessage("请拖入图片文件");
          return;
        }
        const isDropZone = Boolean(event.target.closest?.(".drop-zone"));
        const isStageDrop = event.target === this.stage || this.stage.contains(event.target);
        if (!isDropZone && !isStageDrop) {
          this.toastMessage("把图片拖到画布或图片区来添加");
          return;
        }
        let point = this.nextInsertPoint(520, 320);
        if (isStageDrop) {
          const rawPoint = this.stagePointFromClient(event.clientX, event.clientY);
          point = this.clampInsertPoint(rawPoint.x, rawPoint.y, 520, 320);
        }
        this.lastInsert = { x: point.x, y: point.y };
        const target = this.getEditableTarget(event.target);
        this.readImageFile(file, (dataUrl) => {
          if (target && this.isImageElement(target)) {
            this.replaceImage(target, dataUrl);
            this.select(target);
          } else if (this.selected && this.isImageElement(this.selected) && isDropZone) {
            this.replaceImage(this.selected, dataUrl);
          } else {
            this.addImage(dataUrl, point.x, point.y);
          }
        });
      }

      readImageFile(file, callback) {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(file);
      }

      replaceImage(element, dataUrl) {
        const image = element.tagName === "IMG" ? element : element.querySelector("img");
        if (image) {
          image.src = dataUrl;
          image.dataset.inlineImage = "true";
        } else {
          element.style.backgroundImage = \`url("\${dataUrl}")\`;
          element.style.backgroundSize = "cover";
          element.style.backgroundPosition = "center";
          element.style.backgroundRepeat = "no-repeat";
          element.dataset.inlineImage = "true";
        }
        this.saveDraft();
        this.updateInspector();
        this.toastMessage("图片已替换");
      }

      motionClasses() {
        return ["reveal", "reveal-left", "reveal-scale"];
      }

      editorMotionClasses() {
        return ["editor-anim-none", "editor-anim-fade", "editor-anim-rise", "editor-anim-drop", "editor-anim-left", "editor-anim-right", "editor-anim-scale", "editor-anim-zoom", "editor-anim-pop", "editor-anim-rotate", "editor-anim-blur", "editor-anim-flip"];
      }

      ensureOriginalMotion(element) {
        if (!element || element.dataset.originalMotionClasses !== undefined) return;
        element.dataset.originalMotionClasses = this.motionClasses().filter((className) => element.classList.contains(className)).join(" ");
      }

      hasStoredOriginalMotion(element) {
        return Boolean(element && element.dataset.originalMotionClasses !== undefined);
      }

      originalMotionValue(element) {
        const classes = (element?.dataset.originalMotionClasses || "").split(/\\s+/).filter(Boolean);
        if (classes.includes("reveal-left")) return "left";
        if (classes.includes("reveal-scale")) return "scale";
        if (classes.includes("reveal")) return "rise";
        return "";
      }

      currentMotionValue(element) {
        if (!element) return "";
        const custom = element.dataset.editAnim;
        if (custom) return custom;
        if (element.classList.contains("editor-anim-none")) return "none";
        if (element.classList.contains("editor-anim-fade")) return "fade";
        if (element.classList.contains("editor-anim-rise")) return "rise";
        if (element.classList.contains("editor-anim-drop")) return "drop";
        if (element.classList.contains("editor-anim-left")) return "left";
        if (element.classList.contains("editor-anim-right")) return "right";
        if (element.classList.contains("editor-anim-scale")) return "scale";
        if (element.classList.contains("editor-anim-zoom")) return "zoom";
        if (element.classList.contains("editor-anim-pop")) return "pop";
        if (element.classList.contains("editor-anim-rotate")) return "rotate";
        if (element.classList.contains("editor-anim-blur")) return "blur";
        if (element.classList.contains("editor-anim-flip")) return "flip";
        if (element.classList.contains("reveal-left")) return "left";
        if (element.classList.contains("reveal-scale")) return "scale";
        if (element.classList.contains("reveal")) return "rise";
        return "";
      }

      getMotionSelectValue(element) {
        return element?.dataset.editAnim || "";
      }

      usesCustomMotion(element) {
        return Boolean(element && element.dataset.editAnim && element.dataset.editAnim !== "none");
      }

      syncMotionControls(element) {
        if (!element) return;
        this.controls.anim.value = this.getMotionSelectValue(element);
        this.controls.order.value = element.dataset.editOrder || "";
        this.controls.delay.value = Number.parseInt(element.dataset.editDelay || "0", 10);
        this.controls.duration.value = Number.parseInt(element.dataset.editDuration || "640", 10);
        this.controls.order.disabled = !this.usesCustomMotion(element);
        this.controls.delay.disabled = !this.usesCustomMotion(element);
        this.controls.duration.disabled = !this.usesCustomMotion(element);
        this.controls.restoreMotion.disabled = !this.hasStoredOriginalMotion(element);
        this.controls.motionStatus.textContent = this.getMotionStatus(element);
      }

      motionLabel(value) {
        return {
          none: "无动效",
          fade: "淡入",
          rise: "上浮入场",
          drop: "下落入场",
          left: "左侧滑入",
          right: "右侧滑入",
          scale: "缩放入场",
          zoom: "缩小落定",
          pop: "弹出入场",
          rotate: "旋入",
          blur: "模糊显现",
          flip: "翻转入场"
        }[value] || "无原始动效";
      }

      getMotionStatus(element) {
        const custom = element.dataset.editAnim;
        if (custom) {
          if (custom === "none") return "自定义：无动效";
          const order = element.dataset.editOrder ? \`，本页第 \${element.dataset.editOrder} 个出现\` : "";
          return \`自定义：\${this.motionLabel(custom)}\${order}，延迟 \${element.dataset.editDelay || 0}ms，时长 \${element.dataset.editDuration || 640}ms\`;
        }
        return \`原始：\${this.motionLabel(this.currentMotionValue(element))}\`;
      }

      motionDelayForOrder(order) {
        return Math.max(0, (Math.max(1, order) - 1) * 180);
      }

      normalizeMotionOrder(value, fallback = 1) {
        const number = Number.parseInt(value, 10);
        const safe = Number.isFinite(number) ? number : fallback;
        return Math.max(1, Math.min(99, safe));
      }

      nextMotionOrder(element) {
        const slide = this.closestSlide(element);
        if (!slide) return 1;
        const orders = Array.from(slide.querySelectorAll("[data-edit-anim]"))
          .filter((node) => node !== element && node.dataset.editAnim && node.dataset.editAnim !== "none")
          .map((node) => this.normalizeMotionOrder(node.dataset.editOrder, 0));
        return orders.length ? Math.max(...orders) + 1 : 1;
      }

      setMotionOrder(element, value, updateDelay = false) {
        const order = this.normalizeMotionOrder(value, this.nextMotionOrder(element));
        element.dataset.editOrder = String(order);
        element.style.setProperty("--edit-order", String(order));
        if (updateDelay) {
          const delay = this.motionDelayForOrder(order);
          element.dataset.editDelay = String(delay);
          element.style.setProperty("--edit-delay", \`\${delay}ms\`);
          this.controls.delay.value = delay;
        }
        return order;
      }

      applyAnimation(element, value, preview = false) {
        if (!element) return;
        const stableBox = this.reconcileStoredStagePosition(element, { mode: "sync" }) || this.getStableStageBox(element);
        this.clearElementMotionState(element);
        this.rememberMotionStableBox(element, stableBox);
        this.ensureOriginalMotion(element);
        this.editorMotionClasses().forEach((className) => {
          element.classList.remove(className);
        });
        this.motionClasses().forEach((className) => element.classList.remove(className));

        if (!value) {
          this.restoreOriginalMotion(element, false);
          if (preview) this.previewMotion(element);
          return;
        }

        element.dataset.editAnim = value;
        if (value === "none") {
          element.classList.add("editor-anim-none");
          delete element.dataset.editOrder;
          delete element.dataset.editDelay;
          delete element.dataset.editDuration;
          element.style.removeProperty("--edit-order");
          element.style.removeProperty("--edit-delay");
          element.style.removeProperty("--edit-duration");
          this.toastMessage("已关闭选中元素动效");
          return;
        }

        const hasSavedDelay = element.dataset.editDelay !== undefined;
        const order = this.setMotionOrder(element, element.dataset.editOrder || this.nextMotionOrder(element), false);
        const delay = hasSavedDelay
          ? Math.max(0, Number(element.dataset.editDelay) || 0)
          : this.motionDelayForOrder(order);
        const duration = Math.max(100, Number(this.controls.duration.value) || Number(element.dataset.editDuration) || 640);
        element.dataset.editDelay = String(delay);
        element.dataset.editDuration = String(duration);
        element.classList.add(\`editor-anim-\${value}\`);
        element.style.setProperty("--edit-delay", \`\${delay}ms\`);
        element.style.setProperty("--edit-duration", \`\${duration}ms\`);
        if (preview) this.previewMotion(element);
      }

      restoreOriginalMotion(element, shouldSave = true) {
        if (!element) return;
        const original = (element.dataset.originalMotionClasses || "").split(/\\s+/).filter(Boolean);
        this.clearMotionCleanupTimer(element);
        element.classList.remove("editor-motion-preview", "editor-motion-running");
        this.editorMotionClasses().forEach((className) => element.classList.remove(className));
        this.motionClasses().forEach((className) => element.classList.remove(className));
        original.forEach((className) => element.classList.add(className));
        delete element.dataset.editAnim;
        delete element.dataset.editOrder;
        delete element.dataset.editDelay;
        delete element.dataset.editDuration;
        delete element.dataset.originalMotionClasses;
        element.style.removeProperty("--edit-order");
        element.style.removeProperty("--edit-delay");
        element.style.removeProperty("--edit-duration");
        this.updateInspector();
        if (shouldSave) {
          this.saveDraft();
          this.previewMotion(element);
        }
      }

      scheduleMotionPreview() {
        window.clearTimeout(this.motionPreviewTimer);
        this.motionPreviewTimer = window.setTimeout(() => this.previewMotion(), 180);
      }

      playableMotionTargets(slide) {
        if (!slide) return [];
        const selector = [
          "[data-edit-anim]",
          ...this.editorMotionClasses().map((className) => \`.\${className}\`),
          ...this.motionClasses().map((className) => \`.\${className}\`)
        ].join(", ");
        return Array.from(new Set(slide.querySelectorAll(selector))).filter((element) => {
          const value = this.currentMotionValue(element);
          return value && value !== "none";
        });
      }

      clearMotionRunState(root) {
        root.querySelectorAll(".editor-motion-preview, .editor-motion-running").forEach((node) => {
          this.clearElementMotionState(node);
        });
        this.clearMotionParentStability(root);
      }

      motionDurationForElement(element) {
        return Math.max(100, Number(element.dataset.editDuration) || Number(this.controls.duration.value) || 640);
      }

      motionDelayForElement(element) {
        return Math.max(0, Number(element.dataset.editDelay) || Number(this.controls.delay.value) || 0);
      }

      stabilizeMotionAncestors(element) {
        const slide = this.closestSlide(element);
        if (!element || !slide) return;
        this.releaseMotionAncestors(element);
        const ancestors = [];
        let node = element.parentElement;
        while (node && node !== slide) {
          if (this.motionClasses().some((className) => node.classList.contains(className))) {
            const count = this.motionAncestorCounts.get(node) || 0;
            this.motionAncestorCounts.set(node, count + 1);
            node.classList.add("editor-motion-parent-stable");
            ancestors.push(node);
          }
          node = node.parentElement;
        }
        if (ancestors.length) this.motionStableAncestors.set(element, ancestors);
      }

      releaseMotionAncestors(element) {
        const ancestors = this.motionStableAncestors.get(element);
        if (!ancestors) return;
        ancestors.forEach((node) => {
          const next = Math.max(0, (this.motionAncestorCounts.get(node) || 0) - 1);
          if (next) {
            this.motionAncestorCounts.set(node, next);
          } else {
            this.motionAncestorCounts.delete(node);
            node.classList.remove("editor-motion-parent-stable");
          }
        });
        this.motionStableAncestors.delete(element);
      }

      usesEditorMotionPlayback(element, className = "") {
        return Boolean(
          element &&
          (
            className === "editor-motion-preview" ||
            element.dataset.editAnim ||
            element.classList.contains("edit-moved") ||
            this.editorMotionClasses().some((motionClass) => element.classList.contains(motionClass))
          )
        );
      }

      restartElementMotion(element, className = "editor-motion-running") {
        if (!element) return;
        const value = this.currentMotionValue(element);
        if (!value || value === "none") {
          return false;
        }
        this.reconcileStoredStagePosition(element);
        this.rememberMotionStableBox(element, this.getStableStageBox(element));
        const previewClass = \`editor-anim-\${value}\`;
        const hadClass = element.classList.contains(previewClass);
        const usesEditorMotion = this.usesEditorMotionPlayback(element, className);
        const duration = this.motionDurationForElement(element);
        const delay = this.motionDelayForElement(element);
        this.clearMotionCleanupTimer(element);
        if (usesEditorMotion) {
          element.style.setProperty("--edit-delay", \`\${delay}ms\`);
          element.style.setProperty("--edit-duration", \`\${duration}ms\`);
        }
        element.classList.remove("editor-motion-preview", "editor-motion-running");
        void element.offsetWidth;
        if (usesEditorMotion) {
          this.stabilizeMotionAncestors(element);
          element.classList.add(previewClass);
        }
        element.classList.add(className);
        this.trackFrameDuringMotion(element, delay + duration + 160);
        const cleanupTimer = window.setTimeout(() => {
          element.classList.remove(className);
          if (!hadClass && !element.dataset.editAnim) element.classList.remove(previewClass);
          this.releaseMotionAncestors(element);
          this.motionCleanupTimers.delete(element);
        }, delay + duration + 120);
        this.motionCleanupTimers.set(element, cleanupTimer);
        return true;
      }

      restartLegacySlideMotion(slide) {
        const hasLegacyMotion = this.motionClasses().some((className) => slide.querySelector(\`.\${className}\`));
        if (!hasLegacyMotion) return;
        slide.classList.remove("visible");
        void slide.offsetWidth;
        slide.classList.add("visible");
      }

      previewMotion(element = this.selected) {
        if (!this.restartElementMotion(element, "editor-motion-preview")) {
          this.toastMessage("当前元素没有可预览的入场动效");
        }
      }

      replayActiveSlideMotion(showToast = true) {
        const slide = this.presentation.slides[this.presentation.currentSlide];
        if (!slide) return;
        this.clearMotionRunState(slide);
        const targets = this.playableMotionTargets(slide);
        targets.forEach((element) => {
          if (this.usesEditorMotionPlayback(element, "editor-motion-running")) this.stabilizeMotionAncestors(element);
        });
        void slide.offsetWidth;
        this.restartLegacySlideMotion(slide);
        targets.forEach((element) => this.restartElementMotion(element));
        if (showToast) this.toastMessage("已重播本页动效");
      }

      bumpZIndex(delta) {
        if (!this.selected) return;
        const current = Number.parseInt(window.getComputedStyle(this.selected).zIndex, 10);
        const next = Number.isFinite(current) ? current + delta : 20 + delta;
        this.selected.style.zIndex = String(Math.max(1, next));
        this.saveDraft();
      }

      canDeleteElement(element) {
        return Boolean(
          element &&
          element.isConnected &&
          this.stage.contains(element) &&
          this.closestSlide(element) &&
          !element.matches(".slide, .deck-stage, #deckStage, .editor-frame, .editor-guide, .editor-shell")
        );
      }

      confirmDeleteSelected() {
        if (!this.canDeleteElement(this.selected)) return;
        if (this.hasSeenDeleteConfirm()) {
          this.deleteSelected();
          return;
        }
        this.openConfirm({
          title: "确认删除",
          message: "删除后会从当前页面移除这个选中元素，并写入本地草稿。后续删除不再弹窗；你仍然可以立刻用撤回恢复。",
          okText: "删除",
          action: () => {
            this.markDeleteConfirmSeen();
            this.deleteSelected();
          }
        });
      }

      hasSeenDeleteConfirm() {
        return localStorage.getItem(this.deleteConfirmKey) === "true";
      }

      markDeleteConfirmSeen() {
        localStorage.setItem(this.deleteConfirmKey, "true");
      }

      deleteSelected() {
        if (!this.canDeleteElement(this.selected)) return;
        const element = this.selected;
        this.removeCommentsForElement(element);
        element.remove();
        this.clearSelection();
        this.saveDraft();
      }

      cleanEditorArtifacts(root) {
        root.querySelectorAll("[data-html-deck-editor-ui], #editorFrame, #editorToast, #editorGuideV, #editorGuideH, #editorShell").forEach((node) => node.remove());
        root.querySelectorAll(".editor-selected").forEach((node) => node.classList.remove("editor-selected"));
        root.querySelectorAll(".editor-motion-parent-stable").forEach((node) => node.classList.remove("editor-motion-parent-stable"));
        root.querySelectorAll(".html-deck-editor-edit-visible").forEach((node) => node.classList.remove("html-deck-editor-edit-visible"));
        root.querySelectorAll(".editor-motion-preview, .editor-motion-running").forEach((node) => {
          node.classList.remove("editor-motion-preview", "editor-motion-running");
          if (!node.dataset.editAnim) this.editorMotionClasses().forEach((className) => node.classList.remove(className));
        });
        root.querySelectorAll("[contenteditable]").forEach((node) => node.removeAttribute("contenteditable"));
        root.querySelectorAll("[data-ai-commented]").forEach((node) => node.removeAttribute("data-ai-commented"));
        root.querySelectorAll("[data-editor-bound]").forEach((node) => delete node.dataset.editorBound);
        root.querySelectorAll("[data-html-deck-editor-motion-hold]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-motion-hold");
          node.style.removeProperty("--html-deck-editor-edit-opacity");
        });
        root.querySelectorAll("[data-editor-auto], [data-editor-kind], [data-editor-small]").forEach((node) => {
          delete node.dataset.editorAuto;
          delete node.dataset.editorKind;
          delete node.dataset.editorSmall;
        });
        root.querySelectorAll("[data-html-deck-editor-current], [data-html-deck-editor-page]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-current");
          node.removeAttribute("data-html-deck-editor-page");
        });
        root.querySelectorAll("[data-html-deck-editor-stage='preserve']").forEach((node) => {
          delete node.dataset.htmlDeckEditorCurrentSlide;
          node.style.removeProperty("--html-deck-editor-stage-x");
          node.style.removeProperty("--html-deck-editor-stage-y");
          node.style.removeProperty("--html-deck-editor-stage-scale");
          node.style.removeProperty("--html-deck-editor-current-slide");
          node.style.removeProperty("--html-deck-editor-slide-offset-x");
        });
      }

      serialize() {
        const items = {};
        this.getEditableElements().forEach((element) => {
          const key = element.dataset.editId;
          if (!key) return;
          items[key] = {
            html: element.innerHTML,
            text: element.innerText,
            attrs: {
              class: element.getAttribute("class") || "",
              style: element.getAttribute("style") || "",
              src: element.getAttribute("src") || "",
              alt: element.getAttribute("alt") || "",
              shape: element.dataset.shape || "",
              editAnim: element.dataset.editAnim || "",
              editOrder: element.dataset.editOrder || "",
              editDelay: element.dataset.editDelay || "",
              editDuration: element.dataset.editDuration || ""
            }
          };
        });
        const stageClone = this.stage.cloneNode(true);
        this.cleanEditorArtifacts(stageClone);
        return { stage: stageClone.innerHTML, items, comments: this.normalizeComments(this.comments) };
      }

      saveDraft(showToast = true, recordHistory = true) {
        const data = this.serialize();
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        if (recordHistory) {
          this.hasPendingHistoryChange = false;
          this.pushHistory(data);
        }
        if (showToast) this.toastMessage("已保存到本地草稿；点“保存 HTML”才会写入文件");
      }

      restore() {
        const raw = this.readStoredDraft();
        if (!raw) return;
        try {
          const data = JSON.parse(raw);
          if (data.stage) this.restoreSnapshot(data);
          localStorage.setItem(this.storageKey, raw);
        } catch (error) {
          localStorage.removeItem(this.storageKey);
        }
      }

      readStoredDraft() {
        const current = localStorage.getItem(this.storageKey);
        if (current) return current;
        for (const key of this.legacyStorageKeys) {
          const legacy = localStorage.getItem(key);
          if (legacy) return legacy;
        }
        return "";
      }

      resetDraft() {
        localStorage.removeItem(this.storageKey);
        localStorage.removeItem(this.deleteConfirmKey);
        this.legacyStorageKeys.forEach((key) => localStorage.removeItem(key));
        this.toastMessage("本地草稿已清除，刷新后读取 HTML 文件本身");
      }

      confirmResetDraft() {
        this.openConfirm({
          title: "确认重置编辑",
          message: "这只会清除当前浏览器里的自动保存草稿和旧版草稿记录，不会删除或改写 HTML 文件。刷新后会重新读取文件本身；如果文件已经被覆盖保存过，看到的仍然是保存后的内容。",
          okText: "重置",
          action: () => this.resetDraft()
        });
      }

      pushHistory(data = this.serialize()) {
        if (this.isRestoringHistory) return;
        const snapshot = JSON.stringify(data);
        if (this.undoStack[this.historyIndex] === snapshot) {
          this.updateHistoryButtons();
          return;
        }
        if (this.historyIndex < this.undoStack.length - 1) {
          this.undoStack = this.undoStack.slice(0, this.historyIndex + 1);
        }
        this.undoStack.push(snapshot);
        if (this.undoStack.length > this.historyLimit) this.undoStack.shift();
        this.historyIndex = this.undoStack.length - 1;
        this.updateHistoryButtons();
      }

      markPendingHistoryChange() {
        if (this.isRestoringHistory) return;
        this.hasPendingHistoryChange = true;
        this.updateHistoryButtons();
      }

      commitPendingHistoryChange() {
        if (!this.hasPendingHistoryChange) return;
        this.hasPendingHistoryChange = false;
        this.pushHistory();
      }

      undo() {
        this.commitPendingHistoryChange();
        if (this.historyIndex <= 0) return;
        this.historyIndex -= 1;
        const snapshot = this.undoStack[this.historyIndex];
        this.isRestoringHistory = true;
        try {
          this.restoreSnapshot(JSON.parse(snapshot));
          localStorage.setItem(this.storageKey, snapshot);
        } finally {
          this.isRestoringHistory = false;
          this.updateHistoryButtons();
        }
        this.toastMessage("已撤回");
      }

      redo() {
        this.commitPendingHistoryChange();
        if (this.historyIndex >= this.undoStack.length - 1) return;
        this.historyIndex += 1;
        const snapshot = this.undoStack[this.historyIndex];
        this.isRestoringHistory = true;
        try {
          this.restoreSnapshot(JSON.parse(snapshot));
          localStorage.setItem(this.storageKey, snapshot);
        } finally {
          this.isRestoringHistory = false;
          this.updateHistoryButtons();
        }
        this.toastMessage("已重做");
      }

      updateHistoryButtons() {
        this.controls.undo.disabled = !this.hasPendingHistoryChange && this.historyIndex <= 0;
        this.controls.redo.disabled = this.hasPendingHistoryChange || this.historyIndex >= this.undoStack.length - 1;
      }

      restoreSnapshot(data) {
        this.hasPendingHistoryChange = false;
        this.comments = this.normalizeComments(data.comments);
        this.stage.innerHTML = data.stage;
        this.cleanEditorArtifacts(this.stage);
        this.attachFrame();
        this.selected = null;
        this.presentation.slides = stageSlides(this.stage);
        this.presentation.injectChrome?.();
        this.hideDeckResetControl();
        this.prepareEditableElements();
        this.prepareEditableIds();
        this.bindEditableEvents();
        const page = Number.parseInt(window.location.hash.replace("#", ""), 10);
        this.presentation.showSlide(Number.isFinite(page) ? page - 1 : this.presentation.currentSlide);
        this.renderSlideRail();
        this.syncCommentMarkers();
        this.renderComments();
        this.updateInspector();
      }

      cleanCloneForExport(clone, options = {}) {
        const preserveAiAnchors = options.preserveAiAnchors === true;
        clone.querySelectorAll("[data-generated-chrome], [data-html-deck-editor-ui]").forEach((node) => node.remove());
        clone.querySelectorAll(".editor-selected").forEach((node) => node.classList.remove("editor-selected"));
        clone.querySelectorAll(".editor-motion-parent-stable").forEach((node) => node.classList.remove("editor-motion-parent-stable"));
        clone.querySelectorAll("[contenteditable]").forEach((node) => node.removeAttribute("contenteditable"));
        clone.querySelectorAll("[data-ai-commented]").forEach((node) => node.removeAttribute("data-ai-commented"));
        if (!preserveAiAnchors) clone.querySelectorAll("[data-ai-anchor]").forEach((node) => node.removeAttribute("data-ai-anchor"));
        clone.querySelectorAll("[data-editor-bound], [data-edit-id], [data-inline-image], [data-original-motion-classes]").forEach((node) => {
          delete node.dataset.editorBound;
          delete node.dataset.editId;
          delete node.dataset.inlineImage;
          delete node.dataset.originalMotionClasses;
        });
        clone.querySelectorAll("[data-html-deck-editor-motion-hold]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-motion-hold");
          node.style.removeProperty("--html-deck-editor-edit-opacity");
        });
        clone.querySelectorAll(".html-deck-editor-edit-visible").forEach((node) => node.classList.remove("html-deck-editor-edit-visible"));
        clone.querySelectorAll("[data-editor-auto], [data-editor-kind], [data-editor-small]").forEach((node) => {
          delete node.dataset.editorAuto;
          delete node.dataset.editorKind;
          delete node.dataset.editorSmall;
        });
        clone.querySelectorAll("[data-html-deck-editor-current], [data-html-deck-editor-page]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-current");
          node.removeAttribute("data-html-deck-editor-page");
        });
        clone.querySelectorAll(".editor-motion-preview, .editor-motion-running").forEach((node) => {
          node.classList.remove("editor-motion-preview", "editor-motion-running");
          if (!node.dataset.editAnim) this.editorMotionClasses().forEach((className) => node.classList.remove(className));
        });
        clone.querySelectorAll("#editToggle").forEach((node) => {
          node.classList.remove("active", "show");
        });
        clone.querySelectorAll("#editorHelp, #resetHelp, #editorConfirm").forEach((node) => {
          node.hidden = true;
        });
        clone.querySelectorAll("#editorFrame, #editorGuideV, #editorGuideH").forEach((node) => node.classList.remove("active"));
        clone.querySelectorAll("[data-html-deck-editor-stage='preserve']").forEach((node) => {
          resetPreservedStageForExport(node);
          delete node.dataset.htmlDeckEditorCurrentSlide;
          node.style.removeProperty("--html-deck-editor-stage-x");
          node.style.removeProperty("--html-deck-editor-stage-y");
          node.style.removeProperty("--html-deck-editor-stage-scale");
          node.style.removeProperty("--html-deck-editor-current-slide");
          node.style.removeProperty("--html-deck-editor-slide-offset-x");
        });
        clone.querySelectorAll("[style]").forEach((node) => {
          node.style.removeProperty("--html-deck-editor-slide-x");
          node.style.removeProperty("--html-deck-editor-slide-y");
          node.style.removeProperty("--html-deck-editor-slide-scale");
          node.style.removeProperty("--html-deck-editor-stage-x");
          node.style.removeProperty("--html-deck-editor-stage-y");
          node.style.removeProperty("--html-deck-editor-stage-scale");
          node.style.removeProperty("--html-deck-editor-current-slide");
          node.style.removeProperty("--html-deck-editor-slide-offset-x");
          node.style.removeProperty("--html-deck-editor-edit-opacity");
          node.style.removeProperty("--deck-stage-inset-left");
          node.style.removeProperty("--deck-stage-inset-right");
          node.style.removeProperty("--deck-stage-inset-top");
          node.style.removeProperty("--deck-stage-inset-bottom");
        });
        clone.querySelectorAll("#editorToast").forEach((node) => {
          node.classList.remove("show");
          node.textContent = "";
        });
        const body = clone.querySelector("body");
        if (body) body.classList.remove("editing", "editor-on", "dragging-file", "commenting");
      }

      buildExportHtml() {
        const clone = document.documentElement.cloneNode(true);
        this.cleanCloneForExport(clone);
        return "<!doctype html>\\n" + clone.outerHTML;
      }

      buildAiHandoffHtml() {
        const clone = document.documentElement.cloneNode(true);
        this.cleanCloneForExport(clone, { preserveAiAnchors: true });
        return "<!doctype html>\\n" + clone.outerHTML;
      }

      buildAiHandoffPayload() {
        return {
          html: this.buildAiHandoffHtml(),
          instructions: [
            "根据用户批注修改当前 HTML。",
            "保持 deck-stage 结构；每一页 slide 仍应是 deck-stage 的直接子元素。",
            "保留可编辑 HTML，不要把整页或整块内容改成截图。",
            "尽量保留 data-ai-anchor；若删除被批注元素，请在回复中说明。"
          ],
          comments: this.sortedComments().map((comment) => {
            const element = this.findElementByAiAnchor(comment.anchor);
            return {
              anchor: comment.anchor,
              slide: element ? this.slideNumberForElement(element) : comment.slide,
              target: element ? this.getSelectionLabel(element) : comment.label,
              snippet: element ? this.commentSnippet(element) : comment.snippet,
              text: comment.text
            };
          })
        };
      }

      buildAiHandoffMarkdown() {
        const payload = this.buildAiHandoffPayload();
        const instructions = payload.instructions.map((item, index) => \`\${index + 1}. \${item}\`).join("\\n");
        const comments = payload.comments.length
          ? payload.comments.map((comment, index) => this.formatAiComment(comment, index)).join("\\n\\n")
          : "暂无批注。";
        return \`# for-ai\\n\\n## 修改要求\\n\${instructions}\\n\\n## 用户批注\\n\${comments}\\n\\n## 当前 HTML\\n\\n\\\`\\\`\\\`\\\`html\\n\${payload.html}\\n\\\`\\\`\\\`\\\`\\n\`;
      }

      formatAiComment(comment, index) {
        const slide = comment.slide ? \`Slide \${String(comment.slide).padStart(2, "0")}\` : "未知页";
        const lines = [
          \`\${index + 1}. anchor: \\\`\${comment.anchor}\\\`\`,
          \`   slide: \${slide}\`,
          \`   target: \${comment.target || "未知元素"}\`,
          \`   note: \${this.escapeMarkdown(comment.text)}\`
        ];
        if (comment.snippet) lines.push(\`   snippet: \${this.escapeMarkdown(comment.snippet)}\`);
        return lines.join("\\n");
      }

      escapeMarkdown(text) {
        return String(text || "").replace(/\\s+/g, " ").trim().replace(/\`/g, "\\\\\`");
      }

      syncPendingCommentForAiExport() {
        if (!this.selected || !this.controls.commentInput || this.controls.commentInput.disabled) return false;
        const text = (this.controls.commentInput.value || "").trim();
        const anchor = this.selected.dataset.aiAnchor || "";
        const savedText = anchor ? (this.comments[anchor]?.text || "") : "";
        if (text === savedText) return false;
        if (text) return this.saveCommentForSelected({ silent: true, recordHistory: false });
        if (anchor && savedText) return this.clearCommentForSelected({ silent: true, recordHistory: false });
        return false;
      }

      exportForAi() {
        const syncedComment = this.syncPendingCommentForAiExport();
        this.saveDraft(false, false);
        this.downloadText(this.buildAiHandoffMarkdown(), "for-ai.md", "text/markdown;charset=utf-8");
        this.toastMessage(syncedComment ? "已保存当前批注并下载 for-ai.md，HTML 未改动" : "已下载 for-ai.md，HTML 未改动");
      }

      async exportHtml() {
        this.saveDraft(false, false);
        const html = this.buildExportHtml();
        if (this.canWriteFile()) {
          try {
            await this.writeHtmlFile(html);
            this.toastMessage("已覆盖保存 HTML");
            return;
          } catch (error) {
            if (error && error.name === "AbortError") {
              this.toastMessage("已取消保存");
              return;
            }
          }
        }
        this.downloadHtml(html);
        this.toastMessage("已下载 HTML");
      }

      canWriteFile() {
        return window.isSecureContext && typeof window.showSaveFilePicker === "function";
      }

      async writeHtmlFile(html) {
        if (!this.fileHandle) {
          this.fileHandle = await window.showSaveFilePicker({
            suggestedName: "index.html",
            types: [
              {
                description: "HTML 文件",
                accept: { "text/html": [".html"] }
              }
            ]
          });
        }
        const writable = await this.fileHandle.createWritable();
        await writable.write(html);
        await writable.close();
      }

      downloadHtml(html) {
        this.downloadText(html, "index.html", "text/html;charset=utf-8");
      }

      downloadText(text, filename, type) {
        const blob = new Blob([text], { type });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href);
      }

      toHex(value) {
        if (!value || value === "transparent" || value === "rgba(0, 0, 0, 0)") return "#ffffff";
        const match = value.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)/);
        if (!match) return value.startsWith("#") ? value : "#111111";
        return [1, 2, 3].map((index) => Number(match[index]).toString(16).padStart(2, "0")).join("").replace(/^/, "#");
      }

      toastMessage(message) {
        this.toast.textContent = message;
        this.toast.classList.add("show");
        window.clearTimeout(this.toastTimer);
        this.toastTimer = window.setTimeout(() => this.toast.classList.remove("show"), 1400);
      }
    }

  function mount(options = {}) {
    window.editor?.destroy?.();
    ensureEditorDom();
    const presentation = normalizePresentation(options.presentation || window.presentation);
    window.presentation = presentation;
    const editor = new DeckEditor(presentation);
    window.editor = editor;
    return editor;
  }

  window.FrontendSlidesEditor = { mount, DeckEditor };
})();
`,xv=`(function () {
  function mount(options) {
    if (!window.FrontendSlidesEditor || typeof window.FrontendSlidesEditor.mount !== "function") {
      throw new Error("HtmlDeckEditor runtime could not find the editor base runtime.");
    }
    return window.FrontendSlidesEditor.mount(options || {});
  }

  window.HtmlDeckEditor = {
    mount: mount,
    version: "0.1.0"
  };
})();
`,Sv=`/* Frontend Slides Visual Deck Editor runtime. Source baseline: 1ba9bf0. */
/* ===========================================
       PPT-LIKE EDITING CONTROLS
       Visual editing layer for text, media, layout, and motion.
       =========================================== */
    .edit-hotzone[data-html-deck-editor-ui] {
      position: fixed;
      top: 0;
      left: 0;
      width: 82px;
      height: 82px;
      z-index: 10000;
    }

    .edit-toggle[data-html-deck-editor-ui] {
      position: fixed;
      top: 18px;
      width: 42px;
      height: 42px;
      border: 1.5px solid var(--ink, #111111);
      background: var(--paper, #f8f6ef);
      color: var(--ink, #111111);
      font: 500 18px/1 var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace);
      opacity: 0;
      pointer-events: none;
      transition: opacity 220ms ease;
      z-index: 10001;
    }

    .edit-toggle[data-html-deck-editor-ui] {
      left: 18px;
    }

    .editor-shell[data-html-deck-editor-ui] {
      position: fixed;
      inset: 0;
      z-index: 10010;
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
      color: #111111;
      font-family: var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      transition: opacity 180ms ease, visibility 180ms ease;
    }

    .editor-shell[data-html-deck-editor-ui],
    .editor-shell[data-html-deck-editor-ui] * {
      box-sizing: border-box;
    }

    body.editing .editor-shell[data-html-deck-editor-ui] {
      visibility: visible;
      opacity: 1;
    }

    body.editing [data-html-deck-editor-stage="preserve"] {
      transform: translate(var(--html-deck-editor-stage-x, 0px), var(--html-deck-editor-stage-y, 0px)) scale(var(--html-deck-editor-stage-scale, 1)) translateX(calc(var(--html-deck-editor-slide-offset-x, 0px) * -1)) !important;
      transform-origin: top left;
    }

    body.editing [data-html-deck-editor-stage="preserve"] [data-html-deck-editor-page]:not([data-html-deck-editor-current]) {
      visibility: hidden;
      pointer-events: none;
    }

    body.editing [data-html-deck-editor-stage="preserve"] [data-html-deck-editor-page][data-html-deck-editor-current] {
      visibility: visible !important;
      pointer-events: auto;
      outline-style: dashed;
      outline-width: 2px;
      outline-color: rgba(17, 17, 17, 0.48);
      outline-offset: 8px;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-toolbar,
    .editor-shell[data-html-deck-editor-ui] .editor-slides,
    .editor-shell[data-html-deck-editor-ui] .editor-panel {
      pointer-events: auto;
      border: 1px solid rgba(17, 17, 17, 0.12);
      border-radius: 8px;
      background: rgba(248, 246, 239, 0.97);
      box-shadow: 0 10px 26px rgba(17, 17, 17, 0.10);
      backdrop-filter: blur(10px);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-toolbar {
      position: fixed;
      top: 12px;
      left: 12px;
      right: 12px;
      display: flex;
      flex-wrap: nowrap;
      gap: 8px;
      align-items: center;
      justify-content: flex-start;
      max-width: none;
      overflow-x: auto;
      padding: 8px;
      scrollbar-width: thin;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-slides {
      position: fixed;
      top: 76px;
      bottom: 14px;
      left: 12px;
      width: 242px;
      padding: 12px;
      overflow: auto;
      scrollbar-width: thin;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-panel {
      position: fixed;
      top: 76px;
      right: 12px;
      bottom: 14px;
      width: 342px;
      padding: 14px;
      overflow: auto;
      overscroll-behavior: contain;
      scrollbar-width: thin;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-title {
      margin: 0 0 10px;
      color: rgba(17, 17, 17, 0.58);
      font: 600 11px/1 var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace);
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-button,
    .editor-shell[data-html-deck-editor-ui] .toolbar-select,
    .editor-shell[data-html-deck-editor-ui] .slide-chip {
      min-height: 34px;
      border: 1px solid rgba(17, 17, 17, 0.14);
      border-radius: 6px;
      background: #ffffff;
      color: #111111;
      font: 600 13px/1 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      letter-spacing: 0;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-button {
      flex: 0 0 auto;
      padding: 0 12px;
      white-space: nowrap;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-button:hover:not(:disabled),
    .editor-shell[data-html-deck-editor-ui] .toolbar-select:hover:not(:disabled),
    .editor-shell[data-html-deck-editor-ui] .editor-select:hover:not(:disabled),
    .editor-shell[data-html-deck-editor-ui] .editor-field:hover:not(:disabled),
    .editor-shell[data-html-deck-editor-ui] .editor-textarea:hover:not(:disabled),
    .editor-shell[data-html-deck-editor-ui] .slide-chip:hover {
      border-color: rgba(17, 17, 17, 0.24);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-button:active:not(:disabled),
    .editor-shell[data-html-deck-editor-ui] .slide-chip:active {
      transform: translateY(1px);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-button:focus-visible,
    .editor-shell[data-html-deck-editor-ui] .editor-select:focus-visible,
    .editor-shell[data-html-deck-editor-ui] .editor-field:focus-visible,
    .editor-shell[data-html-deck-editor-ui] .editor-textarea:focus-visible,
    .editor-shell[data-html-deck-editor-ui] .slide-chip:focus-visible,
    .editor-shell[data-html-deck-editor-ui] .reset-help-button:focus-visible,
    .editor-shell[data-html-deck-editor-ui] .toolbar-help-button:focus-visible,
    .editor-shell[data-html-deck-editor-ui] .frame-delete:focus-visible,
    .editor-shell[data-html-deck-editor-ui] .shape-choice:focus-visible {
      outline: 2px solid rgba(31, 43, 224, 0.34);
      outline-offset: 2px;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-icon-button {
      display: inline-grid;
      place-items: center;
      width: 36px;
      min-width: 36px;
      padding: 0;
      font-size: 19px;
      line-height: 1;
    }

    .editor-shell[data-html-deck-editor-ui] .format-brush-button svg {
      width: 18px;
      height: 18px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .editor-shell[data-html-deck-editor-ui] .format-brush-button[aria-pressed="true"] {
      border-color: rgba(31, 43, 224, 0.45);
      background: rgba(31, 43, 224, 0.08);
      color: #1f2be0;
    }

    .editor-shell[data-html-deck-editor-ui] .shape-picker-wrap {
      position: relative;
      flex: 0 0 auto;
    }

    .editor-shell[data-html-deck-editor-ui] .toolbar-action-group {
      position: relative;
      display: inline-flex;
      flex: 0 0 auto;
      min-width: 0;
    }

    .editor-shell[data-html-deck-editor-ui] .ai-export-group #aiExportBtn {
      padding-right: 36px;
    }

    .editor-shell[data-html-deck-editor-ui] .shape-menu {
      position: fixed;
      top: var(--shape-menu-top, 64px);
      left: var(--shape-menu-left, 50%);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      width: 184px;
      padding: 8px;
      border: 1px solid rgba(17, 17, 17, 0.16);
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 18px 44px rgba(17, 17, 17, 0.18);
      pointer-events: auto;
      transform: translateX(-50%);
      z-index: 10040;
    }

    .editor-shell[data-html-deck-editor-ui] .shape-menu[hidden] {
      display: none;
    }

    .editor-shell[data-html-deck-editor-ui] .shape-choice {
      height: 32px;
      border: 1px solid rgba(17, 17, 17, 0.16);
      border-radius: 6px;
      background: #f7f7f5;
      color: #111111;
      font: 600 12px/1 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      pointer-events: auto;
    }

    .editor-shell[data-html-deck-editor-ui] .shape-choice:hover {
      border-color: rgba(17, 17, 17, 0.28);
      background: #ffffff;
    }

    .editor-shell[data-html-deck-editor-ui] .toolbar-select {
      flex: 0 0 auto;
      width: 128px;
      padding: 0 32px 0 10px;
      white-space: nowrap;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-button.primary {
      background: var(--ink, #111111);
      color: #ffffff;
      border-color: var(--ink, #111111);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-button.danger {
      color: #b42318;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-button:disabled,
    .editor-shell[data-html-deck-editor-ui] .editor-field:disabled,
    .editor-shell[data-html-deck-editor-ui] .editor-select:disabled,
    .editor-shell[data-html-deck-editor-ui] .editor-textarea:disabled {
      opacity: 0.48;
      cursor: not-allowed;
    }

    .editor-shell[data-html-deck-editor-ui] .slide-rail-list {
      display: grid;
      gap: 8px;
    }

    .editor-shell[data-html-deck-editor-ui] .slide-chip {
      display: grid;
      grid-template-columns: 34px 1fr;
      gap: 8px;
      width: 100%;
      min-height: 52px;
      padding: 8px;
      text-align: left;
    }

    .editor-shell[data-html-deck-editor-ui] .slide-chip.active {
      border-color: var(--ink, #111111);
      background: rgba(31, 43, 224, 0.08);
    }

    .editor-shell[data-html-deck-editor-ui] .slide-chip-num {
      display: grid;
      place-items: center;
      height: 34px;
      border-radius: 4px;
      background: #111111;
      color: #ffffff;
      font: 500 12px/1 var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace);
    }

    .editor-shell[data-html-deck-editor-ui] .slide-chip-title {
      overflow: hidden;
      align-self: center;
      font-size: 13px;
      font-weight: 600;
      line-height: 1.24;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .editor-shell[data-html-deck-editor-ui] .inspector-section {
      padding: 12px 0;
      border-top: 1px solid rgba(17, 17, 17, 0.12);
    }

    .editor-shell[data-html-deck-editor-ui] .inspector-section.edit-attention {
      border-radius: 8px;
      background: rgba(255, 61, 139, 0.08);
      box-shadow: inset 0 0 0 1px rgba(255, 61, 139, 0.18);
    }

    .editor-shell[data-html-deck-editor-ui] .inspector-section:first-child {
      border-top: 0;
      padding-top: 0;
    }

    .editor-shell[data-html-deck-editor-ui] .selection-name {
      min-height: 28px;
      font: 700 15px/1.35 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
    }

    .editor-shell[data-html-deck-editor-ui] .field-label {
      display: block;
      margin: 10px 0 6px;
      color: rgba(17, 17, 17, 0.58);
      font: 600 11px/1 var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .editor-shell[data-html-deck-editor-ui] .field-help {
      margin: -2px 0 8px;
      color: rgba(17, 17, 17, 0.62);
      font: 500 12px/1.38 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
    }

    .editor-shell[data-html-deck-editor-ui] .motion-status {
      min-height: 32px;
      margin: 0 0 8px;
      padding: 8px 10px;
      border: 1px solid rgba(17, 17, 17, 0.12);
      border-radius: 6px;
      background: rgba(17, 17, 17, 0.03);
      color: rgba(17, 17, 17, 0.72);
      font: 600 12px/1.35 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
    }

    .editor-shell[data-html-deck-editor-ui] .field-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .editor-shell[data-html-deck-editor-ui] .font-custom-field {
      margin-top: 8px;
    }

    .editor-shell[data-html-deck-editor-ui] .text-style-controls {
      display: flex;
      gap: 8px;
      margin: 8px 0 0;
    }

    .editor-shell[data-html-deck-editor-ui] .text-style-button {
      display: inline-grid;
      place-items: center;
      width: 34px;
      min-width: 34px;
      height: 34px;
      padding: 0;
      font-size: 14px;
      line-height: 1;
    }

    .editor-shell[data-html-deck-editor-ui] .text-style-button[aria-pressed="true"] {
      border-color: var(--ink, #111111);
      background: rgba(31, 43, 224, 0.1);
    }

    .editor-shell[data-html-deck-editor-ui] .text-style-italic {
      font-style: italic;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-field,
    .editor-shell[data-html-deck-editor-ui] .editor-select,
    .editor-shell[data-html-deck-editor-ui] .editor-textarea {
      width: 100%;
      border: 1px solid rgba(17, 17, 17, 0.14);
      border-radius: 6px;
      background: #ffffff;
      color: #111111;
      font: 500 13px/1.3 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-field,
    .editor-shell[data-html-deck-editor-ui] .editor-select {
      height: 34px;
      padding: 0 9px;
    }

    .editor-shell[data-html-deck-editor-ui] .color-field {
      position: relative;
      min-width: 0;
    }

    .editor-shell[data-html-deck-editor-ui] .color-preset-grid {
      display: grid;
      grid-template-columns: repeat(6, 32px);
      gap: 6px;
    }

    .editor-shell[data-html-deck-editor-ui] .color-preset {
      width: 100%;
      aspect-ratio: 1;
      min-height: 22px;
      padding: 0;
      border: 1px solid rgba(17, 17, 17, 0.18);
      border-radius: 5px;
      background: var(--choice-color, #ffffff);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.32);
      cursor: pointer;
    }

    .editor-shell[data-html-deck-editor-ui] .color-preset[aria-checked="true"] {
      border-color: #111111;
      box-shadow: 0 0 0 2px rgba(31, 43, 224, 0.18), inset 0 0 0 1px rgba(255, 255, 255, 0.42);
    }

    .editor-shell[data-html-deck-editor-ui] .background-field {
      position: relative;
      min-width: 0;
    }

    .editor-shell[data-html-deck-editor-ui] .color-picker-button {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: flex-start;
      padding: 0 9px;
      text-align: left;
      cursor: pointer;
    }

    .editor-shell[data-html-deck-editor-ui] .color-picker-button:disabled {
      cursor: not-allowed;
    }

    .editor-shell[data-html-deck-editor-ui] .color-swatch {
      position: relative;
      display: inline-block;
      width: 18px;
      height: 18px;
      flex: 0 0 18px;
      border: 1px solid rgba(17, 17, 17, 0.22);
      border-radius: 4px;
      background: var(--choice-color, #ffffff);
      overflow: hidden;
    }

    .editor-shell[data-html-deck-editor-ui] .color-swatch.no-color,
    .editor-shell[data-html-deck-editor-ui] .color-preset.no-color {
      background:
        linear-gradient(135deg, transparent 45%, #b42318 47%, #b42318 53%, transparent 55%),
        #ffffff;
    }

    .editor-shell[data-html-deck-editor-ui] .color-popover {
      position: fixed;
      top: var(--color-palette-top, 64px);
      left: var(--color-palette-left, 50%);
      z-index: 10042;
      display: grid;
      gap: 9px;
      width: max-content;
      max-width: calc(100vw - 20px);
      padding: 9px;
      border: 1px solid rgba(17, 17, 17, 0.18);
      border-radius: 8px;
      background: #ffffff;
      box-shadow: 0 18px 44px rgba(17, 17, 17, 0.18);
      pointer-events: auto;
    }

    .editor-shell[data-html-deck-editor-ui] .color-popover[hidden] {
      display: none;
    }

    .editor-shell[data-html-deck-editor-ui] .bg-palette {
      top: var(--bg-palette-top, 64px);
      left: var(--bg-palette-left, 50%);
    }

    .editor-shell[data-html-deck-editor-ui] .color-picker-host {
      padding-top: 8px;
      border-top: 1px solid rgba(17, 17, 17, 0.1);
    }

    .editor-shell[data-html-deck-editor-ui] .color-picker-missing {
      margin: 0;
      color: rgba(17, 17, 17, 0.62);
      font: 600 12px/1.35 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
    }

    .editor-shell[data-html-deck-editor-ui] .color-picker-host .picker_wrapper {
      width: 228px;
      padding: 7px;
      border-radius: 8px;
      background: #ffffff;
      box-shadow: none;
      color: #111111;
      font-family: var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
    }

    .editor-shell[data-html-deck-editor-ui] .color-picker-host .picker_wrapper > * {
      margin: 5px;
    }

    .editor-shell[data-html-deck-editor-ui] .color-picker-host .picker_wrapper button,
    .editor-shell[data-html-deck-editor-ui] .color-picker-host .picker_wrapper input {
      border: 1px solid rgba(17, 17, 17, 0.18);
      border-radius: 6px;
      box-shadow: none;
      background: #ffffff;
      color: #111111;
      font: 600 12px/1.2 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
    }

    .editor-shell[data-html-deck-editor-ui] .color-picker-host .picker_hue,
    .editor-shell[data-html-deck-editor-ui] .color-picker-host .picker_sl,
    .editor-shell[data-html-deck-editor-ui] .color-picker-host .picker_sample {
      border-radius: 6px;
      box-shadow: inset 0 0 0 1px rgba(17, 17, 17, 0.18);
      overflow: hidden;
    }

    .editor-shell[data-html-deck-editor-ui] .color-picker-actions {
      display: flex;
      justify-content: stretch;
      padding-top: 7px;
      border-top: 1px solid rgba(17, 17, 17, 0.1);
    }

    .editor-shell[data-html-deck-editor-ui] .color-eyedropper-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      width: 100%;
      min-width: 0;
      height: 32px;
      padding: 0 10px;
      border-radius: 6px;
      font-size: 12px;
      line-height: 1.2;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-textarea {
      min-height: 88px;
      padding: 9px;
      resize: vertical;
      line-height: 1.45;
    }

    .editor-shell[data-html-deck-editor-ui] .file-picker-row {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 8px;
      align-items: center;
    }

    .editor-shell[data-html-deck-editor-ui] .file-input-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
    }

    .editor-shell[data-html-deck-editor-ui] .file-name {
      display: flex;
      align-items: center;
      min-width: 0;
      height: 34px;
      padding: 0 10px;
      overflow: hidden;
      border: 1px solid rgba(17, 17, 17, 0.12);
      border-radius: 6px;
      background: rgba(17, 17, 17, 0.04);
      color: rgba(17, 17, 17, 0.58);
      font: 500 12px/1 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .editor-shell[data-html-deck-editor-ui] .drop-zone {
      display: grid;
      place-items: center;
      min-height: 78px;
      padding: 12px;
      border: 1.5px dashed rgba(31, 43, 224, 0.5);
      border-radius: 8px;
      background: rgba(31, 43, 224, 0.05);
      color: rgba(17, 17, 17, 0.68);
      font-size: 13px;
      line-height: 1.38;
      text-align: center;
    }

    .editor-shell[data-html-deck-editor-ui] .drop-zone.dragging {
      border-color: var(--ink, #111111);
      background: rgba(31, 43, 224, 0.13);
      color: var(--ink, #111111);
    }

    .editor-shell[data-html-deck-editor-ui] .comment-section .editor-title {
      margin-bottom: 6px;
    }

    .editor-shell[data-html-deck-editor-ui] .comment-target {
      margin: 0 0 8px;
      color: rgba(17, 17, 17, 0.64);
      font: 600 12px/1.35 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      word-break: break-word;
    }

    .editor-shell[data-html-deck-editor-ui] .comment-input {
      min-height: 84px;
    }

    .editor-shell[data-html-deck-editor-ui] .comment-help {
      margin: 6px 0 0;
      color: rgba(17, 17, 17, 0.52);
    }

    .editor-shell[data-html-deck-editor-ui] .comment-list {
      display: grid;
      gap: 8px;
      margin-top: 10px;
    }

    .editor-shell[data-html-deck-editor-ui] .comment-empty {
      margin: 0;
      color: rgba(17, 17, 17, 0.48);
      font: 500 12px/1.35 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
    }

    .editor-shell[data-html-deck-editor-ui] .comment-card {
      display: grid;
      gap: 4px;
      width: 100%;
      padding: 9px 10px;
      border: 1px solid rgba(17, 17, 17, 0.12);
      border-radius: 6px;
      background: #ffffff;
      color: #111111;
      text-align: left;
    }

    .editor-shell[data-html-deck-editor-ui] .comment-card:hover,
    .editor-shell[data-html-deck-editor-ui] .comment-card:focus-visible {
      border-color: rgba(31, 43, 224, 0.34);
      outline: none;
    }

    .editor-shell[data-html-deck-editor-ui] .comment-card-label {
      color: rgba(17, 17, 17, 0.58);
      font: 600 11px/1.2 var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace);
    }

    .editor-shell[data-html-deck-editor-ui] .comment-card-text {
      overflow: hidden;
      color: rgba(17, 17, 17, 0.82);
      font: 500 12px/1.35 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      text-overflow: ellipsis;
    }

    .editor-shell[data-html-deck-editor-ui] .inspector-actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 10px;
    }

    .editor-shell[data-html-deck-editor-ui] .reset-action-group {
      position: relative;
      min-width: 0;
    }

    .editor-shell[data-html-deck-editor-ui] .reset-action-group #resetBtn {
      width: 100%;
      padding-right: 36px;
    }

    .editor-shell[data-html-deck-editor-ui] .reset-help-button,
    .editor-shell[data-html-deck-editor-ui] .toolbar-help-button {
      position: absolute;
      top: 50%;
      right: 10px;
      z-index: 1;
      display: inline-grid;
      place-items: center;
      width: 18px;
      height: 18px;
      min-width: 18px;
      padding: 0;
      border: 1px solid rgba(17, 17, 17, 0.3);
      border-radius: 999px;
      background: rgba(17, 17, 17, 0.045);
      color: rgba(17, 17, 17, 0.56);
      font: 700 11px/1 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      transform: translateY(-50%);
      cursor: help;
    }

    .editor-shell[data-html-deck-editor-ui] .reset-help-button:hover,
    .editor-shell[data-html-deck-editor-ui] .reset-help-button:focus-visible,
    .editor-shell[data-html-deck-editor-ui] .toolbar-help-button:hover,
    .editor-shell[data-html-deck-editor-ui] .toolbar-help-button:focus-visible {
      border-color: rgba(17, 17, 17, 0.48);
      background: rgba(17, 17, 17, 0.08);
      color: rgba(17, 17, 17, 0.78);
      outline: none;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-confirm-message {
      margin: 0;
      color: rgba(17, 17, 17, 0.72);
      font: 500 14px/1.65 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-confirm-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 18px;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-toast {
      position: fixed;
      left: 50%;
      bottom: 26px;
      z-index: 10030;
      min-width: 180px;
      padding: 10px 14px;
      border-radius: 6px;
      background: #111111;
      color: #ffffff;
      font: 600 13px/1 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      text-align: center;
      opacity: 0;
      transform: translate(-50%, 12px);
      pointer-events: none;
      transition: opacity 180ms ease, transform 180ms ease;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-toast.show {
      opacity: 1;
      transform: translate(-50%, 0);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-modal {
      position: fixed;
      inset: 0;
      z-index: 10045;
      display: grid;
      place-items: center;
      padding: 24px;
      background: rgba(17, 17, 17, 0.36);
      cursor: default;
      pointer-events: auto;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-modal[hidden] {
      display: none;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-card {
      width: min(720px, calc(100vw - 32px));
      max-height: min(720px, calc(100vh - 48px));
      overflow: auto;
      border: 1px solid rgba(17, 17, 17, 0.18);
      border-radius: 8px;
      background: #ffffff;
      cursor: default;
      box-shadow: 0 28px 80px rgba(17, 17, 17, 0.28);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-header {
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: space-between;
      padding: 18px 20px 14px;
      border-bottom: 1px solid rgba(17, 17, 17, 0.12);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-title {
      margin: 0;
      color: #111111;
      font: 760 22px/1.2 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      letter-spacing: 0;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-close {
      display: inline-grid;
      place-items: center;
      width: 34px;
      height: 34px;
      border: 1px solid rgba(17, 17, 17, 0.18);
      border-radius: 6px;
      background: #ffffff;
      color: #111111;
      font: 700 20px/1 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      cursor: pointer;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-body {
      display: grid;
      gap: 16px;
      padding: 18px 20px 20px;
      color: rgba(17, 17, 17, 0.78);
      font: 500 14px/1.55 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-section {
      display: grid;
      gap: 7px;
      padding-top: 14px;
      border-top: 1px solid rgba(17, 17, 17, 0.10);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-section:first-child {
      padding-top: 0;
      border-top: 0;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-section h3 {
      margin: 0;
      color: #111111;
      font: 750 15px/1.25 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      letter-spacing: 0;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-section p,
    .editor-shell[data-html-deck-editor-ui] .editor-help-section ul {
      margin: 0;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-section ul {
      padding-left: 1.2em;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-help-section li + li {
      margin-top: 4px;
    }

    .editor-layer {
      position: absolute;
      z-index: 20;
    }

    .text-layer {
      min-width: 240px;
      min-height: 64px;
      padding: 14px 18px;
      border: 1.5px solid var(--ink, #111111);
      background: rgba(240, 235, 222, 0.92);
      color: var(--ink, #111111);
      font: 700 38px/1.16 var(--font-display-cjk);
    }

    .image-layer {
      width: 520px;
      height: 320px;
      border: 1.5px solid var(--ink, #111111);
      background: var(--paper, #f8f6ef);
      overflow: hidden;
    }

    .image-layer img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .shape-layer {
      width: 280px;
      height: 180px;
      border: 1.5px solid var(--ink, #111111);
      background: rgba(31, 43, 224, 0.16);
    }

    .shape-layer[data-shape="roundRect"] {
      border-radius: 28px;
    }

    .shape-layer[data-shape="circle"] {
      border-radius: 999px;
    }

    .shape-layer[data-shape="triangle"] {
      border: 0;
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
    }

    .shape-layer[data-shape="line"] {
      height: 14px;
      border: 0;
    }

    .shape-layer[data-shape="arrow"] {
      border: 0;
      clip-path: polygon(0 36%, 66% 36%, 66% 14%, 100% 50%, 66% 86%, 66% 64%, 0 64%);
    }

    .edit-moved:not(.editor-motion-preview):not(.editor-motion-running) {
      animation: none !important;
      transition: none !important;
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0)) !important;
      transform-origin: top left;
    }

    .edit-moved.html-deck-editor-edit-visible:not(.editor-motion-preview):not(.editor-motion-running) {
      opacity: var(--html-deck-editor-edit-opacity, 1) !important;
      filter: none !important;
    }

    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.reveal:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.reveal-left:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.reveal-scale:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.editor-anim-rise:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.editor-anim-drop:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.editor-anim-left:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.editor-anim-right:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.editor-anim-scale:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.editor-anim-zoom:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.editor-anim-pop:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.editor-anim-rotate:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.editor-anim-blur:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.editor-anim-flip:not(.editor-motion-preview):not(.editor-motion-running),
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .edit-moved.editor-anim-fade:not(.editor-motion-preview):not(.editor-motion-running) {
      opacity: 1;
      filter: none !important;
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0)) !important;
    }

    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-motion-parent-stable,
    .editor-motion-parent-stable.reveal,
    .editor-motion-parent-stable.reveal-left,
    .editor-motion-parent-stable.reveal-scale {
      opacity: 1 !important;
      filter: none !important;
      transform: none !important;
      transition: none !important;
      animation: none !important;
    }

    .editor-anim-none {
      opacity: 1 !important;
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0)) !important;
      transition: none !important;
      animation: none !important;
    }

    .editor-anim-fade,
    .editor-anim-rise,
    .editor-anim-drop,
    .editor-anim-left,
    .editor-anim-right,
    .editor-anim-scale,
    .editor-anim-zoom,
    .editor-anim-pop,
    .editor-anim-rotate,
    .editor-anim-blur,
    .editor-anim-flip {
      opacity: 0;
      transform-origin: center;
      transition:
        opacity var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)),
        transform var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)),
        filter var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1));
      transition-delay: var(--edit-delay, 0ms);
    }

    .edit-moved.editor-anim-none,
    .edit-moved.editor-anim-fade,
    .edit-moved.editor-anim-rise,
    .edit-moved.editor-anim-drop,
    .edit-moved.editor-anim-left,
    .edit-moved.editor-anim-right,
    .edit-moved.editor-anim-scale,
    .edit-moved.editor-anim-zoom,
    .edit-moved.editor-anim-pop,
    .edit-moved.editor-anim-rotate,
    .edit-moved.editor-anim-blur,
    .edit-moved.editor-anim-flip,
    .edit-moved.editor-motion-preview,
    .edit-moved.editor-motion-running {
      transform-origin: top left !important;
    }

    .edit-moved.editor-anim-fade:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-rise:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-drop:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-left:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-right:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-scale:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-zoom:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-pop:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-rotate:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-blur:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-flip:not(.editor-motion-preview):not(.editor-motion-running) {
      animation: none !important;
      transition: none !important;
      transition-delay: 0ms !important;
    }

    .editor-anim-fade {
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    .editor-anim-rise {
      transform: translate(var(--edit-x, 0px), calc(var(--edit-y, 0px) + 34px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    .editor-anim-drop {
      transform: translate(var(--edit-x, 0px), calc(var(--edit-y, 0px) - 42px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    .editor-anim-left {
      transform: translate(calc(var(--edit-x, 0px) - 46px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    .editor-anim-right {
      transform: translate(calc(var(--edit-x, 0px) + 46px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    .editor-anim-scale {
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(calc(var(--edit-scale-x, var(--edit-scale, 1)) * 0.92), calc(var(--edit-scale-y, var(--edit-scale, 1)) * 0.92)) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    .editor-anim-zoom {
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(calc(var(--edit-scale-x, var(--edit-scale, 1)) * 1.14), calc(var(--edit-scale-y, var(--edit-scale, 1)) * 1.14)) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    .editor-anim-pop {
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(calc(var(--edit-scale-x, var(--edit-scale, 1)) * 0.72), calc(var(--edit-scale-y, var(--edit-scale, 1)) * 0.72)) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    .editor-anim-rotate {
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) rotate(-8deg) scale(calc(var(--edit-scale-x, var(--edit-scale, 1)) * 0.96), calc(var(--edit-scale-y, var(--edit-scale, 1)) * 0.96)) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    .editor-anim-blur {
      filter: blur(14px);
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(calc(var(--edit-scale-x, var(--edit-scale, 1)) * 1.03), calc(var(--edit-scale-y, var(--edit-scale, 1)) * 1.03)) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    .editor-anim-flip {
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) perspective(760px) rotateX(70deg) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    .edit-moved.editor-anim-fade:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-rise:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-drop:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-left:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-right:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-scale:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-zoom:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-pop:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-rotate:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-blur:not(.editor-motion-preview):not(.editor-motion-running),
    .edit-moved.editor-anim-flip:not(.editor-motion-preview):not(.editor-motion-running) {
      opacity: 1 !important;
      filter: none !important;
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0)) !important;
    }

    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-anim-fade,
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-anim-rise,
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-anim-drop,
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-anim-left,
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-anim-right,
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-anim-scale,
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-anim-zoom,
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-anim-pop,
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-anim-rotate,
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-anim-blur,
    .slide:is(.visible, .active, [data-deck-active], [data-html-deck-editor-current]) .editor-anim-flip {
      opacity: 1;
      filter: none;
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
    }

    body.editing .editor-anim-fade:not(.editor-motion-preview):not(.editor-motion-running),
    body.editing .editor-anim-rise:not(.editor-motion-preview):not(.editor-motion-running),
    body.editing .editor-anim-drop:not(.editor-motion-preview):not(.editor-motion-running),
    body.editing .editor-anim-left:not(.editor-motion-preview):not(.editor-motion-running),
    body.editing .editor-anim-right:not(.editor-motion-preview):not(.editor-motion-running),
    body.editing .editor-anim-scale:not(.editor-motion-preview):not(.editor-motion-running),
    body.editing .editor-anim-zoom:not(.editor-motion-preview):not(.editor-motion-running),
    body.editing .editor-anim-pop:not(.editor-motion-preview):not(.editor-motion-running),
    body.editing .editor-anim-rotate:not(.editor-motion-preview):not(.editor-motion-running),
    body.editing .editor-anim-blur:not(.editor-motion-preview):not(.editor-motion-running),
    body.editing .editor-anim-flip:not(.editor-motion-preview):not(.editor-motion-running) {
      opacity: 1 !important;
      filter: none !important;
      animation: none !important;
      transition: none !important;
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0)) !important;
    }

    body.editing .slide[data-html-deck-editor-current] [data-html-deck-editor-motion-hold] {
      opacity: var(--html-deck-editor-edit-opacity, 1) !important;
      filter: none !important;
      animation: none !important;
      transition: none !important;
    }

    body.editing .slide[data-html-deck-editor-current] .edit-moved:not(.editor-motion-preview):not(.editor-motion-running) {
      animation: none !important;
      transition: none !important;
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0)) !important;
      transform-origin: top left !important;
    }

    .editor-motion-preview.editor-anim-fade {
      animation: editorPreviewFade var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-running.editor-anim-fade {
      animation: editorPreviewFade var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-preview.editor-anim-rise {
      animation: editorPreviewRise var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-running.editor-anim-rise {
      animation: editorPreviewRise var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-preview.editor-anim-left {
      animation: editorPreviewLeft var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-running.editor-anim-left {
      animation: editorPreviewLeft var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-preview.editor-anim-scale {
      animation: editorPreviewScale var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-running.editor-anim-scale {
      animation: editorPreviewScale var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-preview.editor-anim-drop {
      animation: editorPreviewDrop var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-running.editor-anim-drop {
      animation: editorPreviewDrop var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-preview.editor-anim-right {
      animation: editorPreviewRight var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-running.editor-anim-right {
      animation: editorPreviewRight var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-preview.editor-anim-zoom {
      animation: editorPreviewZoom var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-running.editor-anim-zoom {
      animation: editorPreviewZoom var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-preview.editor-anim-pop {
      animation: editorPreviewPop var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-running.editor-anim-pop {
      animation: editorPreviewPop var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-preview.editor-anim-rotate {
      animation: editorPreviewRotate var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-running.editor-anim-rotate {
      animation: editorPreviewRotate var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-preview.editor-anim-blur {
      animation: editorPreviewBlur var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-running.editor-anim-blur {
      animation: editorPreviewBlur var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-preview.editor-anim-flip {
      animation: editorPreviewFlip var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    .editor-motion-running.editor-anim-flip {
      animation: editorPreviewFlip var(--edit-duration, 640ms) var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) var(--edit-delay, 0ms) both !important;
    }

    @keyframes editorPreviewFade {
      from {
        opacity: 0;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      to {
        opacity: 1;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
    }

    @keyframes editorPreviewRise {
      from {
        opacity: 0;
        transform: translate(var(--edit-x, 0px), calc(var(--edit-y, 0px) + 34px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      to {
        opacity: 1;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
    }

    @keyframes editorPreviewLeft {
      from {
        opacity: 0;
        transform: translate(calc(var(--edit-x, 0px) - 46px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      to {
        opacity: 1;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
    }

    @keyframes editorPreviewScale {
      from {
        opacity: 0;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(calc(var(--edit-scale-x, var(--edit-scale, 1)) * 0.92), calc(var(--edit-scale-y, var(--edit-scale, 1)) * 0.92)) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      to {
        opacity: 1;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
    }

    @keyframes editorPreviewDrop {
      from {
        opacity: 0;
        transform: translate(var(--edit-x, 0px), calc(var(--edit-y, 0px) - 42px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      to {
        opacity: 1;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
    }

    @keyframes editorPreviewRight {
      from {
        opacity: 0;
        transform: translate(calc(var(--edit-x, 0px) + 46px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      to {
        opacity: 1;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
    }

    @keyframes editorPreviewZoom {
      from {
        opacity: 0;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(calc(var(--edit-scale-x, var(--edit-scale, 1)) * 1.14), calc(var(--edit-scale-y, var(--edit-scale, 1)) * 1.14)) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      to {
        opacity: 1;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
    }

    @keyframes editorPreviewPop {
      0% {
        opacity: 0;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(calc(var(--edit-scale-x, var(--edit-scale, 1)) * 0.72), calc(var(--edit-scale-y, var(--edit-scale, 1)) * 0.72)) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      72% {
        opacity: 1;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(calc(var(--edit-scale-x, var(--edit-scale, 1)) * 1.04), calc(var(--edit-scale-y, var(--edit-scale, 1)) * 1.04)) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      100% {
        opacity: 1;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
    }

    @keyframes editorPreviewRotate {
      from {
        opacity: 0;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) rotate(-8deg) scale(calc(var(--edit-scale-x, var(--edit-scale, 1)) * 0.96), calc(var(--edit-scale-y, var(--edit-scale, 1)) * 0.96)) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      to {
        opacity: 1;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) rotate(0deg) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
    }

    @keyframes editorPreviewBlur {
      from {
        opacity: 0;
        filter: blur(14px);
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(calc(var(--edit-scale-x, var(--edit-scale, 1)) * 1.03), calc(var(--edit-scale-y, var(--edit-scale, 1)) * 1.03)) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      to {
        opacity: 1;
        filter: blur(0);
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
    }

    @keyframes editorPreviewFlip {
      from {
        opacity: 0;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) perspective(760px) rotateX(70deg) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
      to {
        opacity: 1;
        transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) perspective(760px) rotateX(0deg) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0));
      }
    }

    .editor-shell[data-html-deck-editor-ui] .editor-frame {
      position: fixed;
      display: none;
      z-index: 850;
      border: 2px solid #ff3d8b;
      pointer-events: none;
      box-shadow:
        0 0 0 2px rgba(255, 255, 255, 0.96),
        0 0 0 4px rgba(17, 17, 17, 0.42),
        0 12px 30px rgba(17, 17, 17, 0.18);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-frame.active {
      display: block;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-frame[data-small-selection="true"] {
      min-width: 28px;
      min-height: 28px;
      transform: translate(-6px, -6px);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-guide {
      position: fixed;
      display: none;
      z-index: 840;
      background: #ff3d8b;
      pointer-events: none;
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.75);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-guide.active {
      display: block;
    }

    .editor-shell[data-html-deck-editor-ui] .editor-guide.vertical {
      width: 2px;
      transform: translateX(-1px);
    }

    .editor-shell[data-html-deck-editor-ui] .editor-guide.horizontal {
      height: 2px;
      transform: translateY(-1px);
    }

    .editor-shell[data-html-deck-editor-ui] .frame-move {
      position: absolute;
      left: -2px;
      top: -30px;
      height: 26px;
      padding: 0 9px;
      display: flex;
      align-items: center;
      background: #ff3d8b;
      color: #ffffff;
      font: 700 13px/1 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      white-space: nowrap;
      cursor: move;
      pointer-events: auto;
      border-radius: 6px 6px 0 0;
    }

    .editor-shell[data-html-deck-editor-ui] .frame-delete {
      position: absolute;
      top: -40px;
      right: -2px;
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;
      padding: 0;
      border: 0;
      background: #b42318;
      color: #ffffff;
      border-radius: 0 6px 0 6px;
      font: 800 22px/1 var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      cursor: pointer;
      pointer-events: auto;
    }

    .editor-shell[data-html-deck-editor-ui] .frame-delete:hover,
    .editor-shell[data-html-deck-editor-ui] .frame-delete:focus-visible {
      background: #8f1d14;
      outline: 2px solid rgba(255, 255, 255, 0.95);
      outline-offset: 2px;
    }

    .editor-shell[data-html-deck-editor-ui] .frame-resize {
      position: absolute;
      right: -8px;
      bottom: -8px;
      width: 14px;
      height: 14px;
      border: 2px solid #ff3d8b;
      background: #ffffff;
      cursor: nwse-resize;
      pointer-events: auto;
    }

    .edit-toggle[data-html-deck-editor-ui].show,
    .edit-toggle[data-html-deck-editor-ui].active {
      opacity: 1;
      pointer-events: auto;
    }

    body.editing [data-editable],
    body.editing [data-editor-kind="text"] {
      outline: 1px dashed rgba(31, 43, 224, 0.92);
      outline-offset: 4px;
      box-shadow:
        0 0 0 2px rgba(255, 255, 255, 0.92),
        0 0 0 4px rgba(17, 17, 17, 0.20);
      cursor: text;
      user-select: text;
      -webkit-user-select: text;
    }

    body.editing [data-editable] *,
    body.editing [data-editor-kind="text"] * {
      user-select: text;
      -webkit-user-select: text;
    }

    body.editing [data-editable-media],
    body.editing [data-editable-box],
    body.editing [data-editor-kind="media"],
    body.editing [data-editor-kind="box"],
    body.editing .editor-layer {
      outline: 1px dashed rgba(31, 43, 224, 0.92);
      outline-offset: 4px;
      box-shadow:
        0 0 0 2px rgba(255, 255, 255, 0.92),
        0 0 0 4px rgba(17, 17, 17, 0.20);
      cursor: pointer;
    }

    body.editing [data-editor-small="true"] {
      outline-offset: 7px;
    }

    body.editing .editor-selected {
      outline: none !important;
      box-shadow: none !important;
    }

    body.editing.commenting [data-editable],
    body.editing.commenting [data-editable-media],
    body.editing.commenting [data-editable-box],
    body.editing.commenting [data-editor-kind],
    body.editing.commenting .editor-layer {
      cursor: copy;
    }

    body.editing [data-ai-commented]:not(.editor-selected) {
      outline-color: rgba(255, 61, 139, 0.92);
      box-shadow:
        0 0 0 2px rgba(255, 255, 255, 0.92),
        0 0 0 4px rgba(255, 61, 139, 0.22);
    }

    body.editing.dragging-file .slide.active {
      box-shadow: inset 0 0 0 12px rgba(31, 43, 224, 0.14);
    }

    @media (max-width: 960px) {
      .editor-shell[data-html-deck-editor-ui] .editor-toolbar {
        top: 8px;
        left: 8px;
        right: 8px;
      }

      .editor-shell[data-html-deck-editor-ui] .editor-slides {
        top: 68px;
        left: 8px;
        right: 8px;
        bottom: auto;
        width: auto;
        height: 78px;
        padding: 8px;
        overflow-x: auto;
        overflow-y: hidden;
      }

      .editor-shell[data-html-deck-editor-ui] .slide-rail-list {
        display: flex;
        gap: 8px;
      }

      .editor-shell[data-html-deck-editor-ui] .slide-chip {
        width: 156px;
        min-width: 156px;
      }

      .editor-shell[data-html-deck-editor-ui] .editor-panel {
        top: auto;
        left: 8px;
        right: 8px;
        bottom: 8px;
        width: auto;
        max-height: 242px;
        padding: 10px 12px;
        display: block;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      .editor-shell[data-html-deck-editor-ui] .inspector-section {
        min-width: 0;
        padding: 10px 0;
        border-top: 0;
      }

      .editor-shell[data-html-deck-editor-ui] .inspector-section + .inspector-section {
        border-top: 1px solid rgba(17, 17, 17, 0.10);
      }

      .editor-shell[data-html-deck-editor-ui] .editor-textarea {
        min-height: 72px;
      }

      .editor-shell[data-html-deck-editor-ui] .field-grid {
        grid-template-columns: 1fr;
      }

      .editor-shell[data-html-deck-editor-ui] .inspector-actions {
        grid-template-columns: 1fr;
      }

      .editor-shell[data-html-deck-editor-ui] .file-picker-row {
        grid-template-columns: 1fr;
      }

      .editor-shell[data-html-deck-editor-ui] .file-name {
        min-height: 32px;
      }

      .editor-shell[data-html-deck-editor-ui] .editor-panel .editor-title:first-child {
        margin-top: 2px;
      }

      .editor-shell[data-html-deck-editor-ui] .shape-menu {
        top: var(--shape-menu-top, 60px);
        width: calc(100vw - 24px);
      }

      .editor-shell[data-html-deck-editor-ui] .shape-menu .shape-choice {
        white-space: nowrap;
      }
    }
`,kv='.editor-shell[data-html-deck-editor-ui] .picker_wrapper.no_alpha .picker_alpha{display:none}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.no_cancel .picker_cancel{display:none}.editor-shell[data-html-deck-editor-ui] .layout_default.picker_wrapper{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:stretch;font-size:10px;width:25em;padding:.5em}.editor-shell[data-html-deck-editor-ui] .layout_default.picker_wrapper input,.editor-shell[data-html-deck-editor-ui] .layout_default.picker_wrapper button{font-size:1rem}.editor-shell[data-html-deck-editor-ui] .layout_default.picker_wrapper>*{margin:.5em}.editor-shell[data-html-deck-editor-ui] .layout_default.picker_wrapper::before{content:"";display:block;width:100%;height:0;order:1}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_slider,.editor-shell[data-html-deck-editor-ui] .layout_default .picker_selector{padding:1em}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_hue{width:100%}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_sl{flex:1 1 auto}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_sl::before{content:"";display:block;padding-bottom:100%}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_editor{order:1;width:6.5rem}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_editor input{width:100%;height:100%}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_sample{order:1;flex:1 1 auto}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_done,.editor-shell[data-html-deck-editor-ui] .layout_default .picker_cancel{order:1}.editor-shell[data-html-deck-editor-ui] .picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.editor-shell[data-html-deck-editor-ui] .picker_wrapper:focus{outline:none}.editor-shell[data-html-deck-editor-ui] .picker_wrapper button,.editor-shell[data-html-deck-editor-ui] .picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.editor-shell[data-html-deck-editor-ui] .picker_wrapper button:focus,.editor-shell[data-html-deck-editor-ui] .picker_wrapper button:active,.editor-shell[data-html-deck-editor-ui] .picker_wrapper input:focus,.editor-shell[data-html-deck-editor-ui] .picker_wrapper input:active{box-shadow:0 0 2px 1px #1e90ff}.editor-shell[data-html-deck-editor-ui] .picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:#f5f5f5;background-image:linear-gradient(0deg, gainsboro, transparent)}.editor-shell[data-html-deck-editor-ui] .picker_wrapper button:active{background-image:linear-gradient(0deg, transparent, gainsboro)}.editor-shell[data-html-deck-editor-ui] .picker_wrapper button:hover{background-color:#fff}.editor-shell[data-html-deck-editor-ui] .picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid #fff;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.editor-shell[data-html-deck-editor-ui] .picker_slider .picker_selector{border-radius:2px}.editor-shell[data-html-deck-editor-ui] .picker_hue{position:relative;background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.editor-shell[data-html-deck-editor-ui] .picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:linear-gradient(180deg, white, rgba(255, 255, 255, 0) 50%),linear-gradient(0deg, black, rgba(0, 0, 0, 0) 50%),linear-gradient(90deg, #808080, rgba(128, 128, 128, 0))}.editor-shell[data-html-deck-editor-ui] .picker_alpha,.editor-shell[data-html-deck-editor-ui] .picker_sample{position:relative;background:linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0/2em 2em,linear-gradient(45deg, lightgrey 25%, white 25%, white 75%, lightgrey 75%) 1em 1em/2em 2em;box-shadow:0 0 0 1px silver}.editor-shell[data-html-deck-editor-ui] .picker_alpha .picker_selector,.editor-shell[data-html-deck-editor-ui] .picker_sample .picker_selector{background:none}.editor-shell[data-html-deck-editor-ui] .picker_editor input{font-family:monospace;padding:.2em .4em}.editor-shell[data-html-deck-editor-ui] .picker_sample::before{content:"";position:absolute;display:block;width:100%;height:100%;background:currentColor}.editor-shell[data-html-deck-editor-ui] .picker_arrow{position:absolute;z-index:-1}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup,.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::before,.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,.4)}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::before,.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::after{content:"";display:block;position:absolute;top:0;left:0;z-index:-99}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.editor-shell[data-html-deck-editor-ui] .popup.popup_top{bottom:100%;left:0}.editor-shell[data-html-deck-editor-ui] .popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.editor-shell[data-html-deck-editor-ui] .popup.popup_bottom{top:100%;left:0}.editor-shell[data-html-deck-editor-ui] .popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.editor-shell[data-html-deck-editor-ui] .popup.popup_left{top:0;right:100%}.editor-shell[data-html-deck-editor-ui] .popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.editor-shell[data-html-deck-editor-ui] .popup.popup_right{top:0;left:100%}.editor-shell[data-html-deck-editor-ui] .popup.popup_right .picker_arrow{top:0;left:0}',wv=`# ISC License (ISC)

Copyright 2017-2018 Andreas Borgen, Adam Brooks

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
`,_v=`/*!
 * vanilla-picker v2.12.3
 * https://vanilla-picker.js.org
 *
 * Copyright 2017-2024 Andreas Borgen (https://github.com/Sphinxxxx), Adam Brooks (https://github.com/dissimulate)
 * Released under the ISC license.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Picker=e()}(this,function(){"use strict";function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var t=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t};function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{!i&&a.return&&a.return()}finally{if(r)throw s}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};String.prototype.startsWith=String.prototype.startsWith||function(t){return 0===this.indexOf(t)},String.prototype.padStart=String.prototype.padStart||function(t,e){for(var n=this;n.length<t;)n=e+n;return n};var e={cb:"0f8ff",tqw:"aebd7",q:"-ffff",qmrn:"7fffd4",zr:"0ffff",bg:"5f5dc",bsq:"e4c4",bck:"---",nch:"ebcd",b:"--ff",bvt:"8a2be2",brwn:"a52a2a",brw:"deb887",ctb:"5f9ea0",hrt:"7fff-",chcT:"d2691e",cr:"7f50",rnw:"6495ed",crns:"8dc",crms:"dc143c",cn:"-ffff",Db:"--8b",Dcn:"-8b8b",Dgnr:"b8860b",Dgr:"a9a9a9",Dgrn:"-64-",Dkhk:"bdb76b",Dmgn:"8b-8b",Dvgr:"556b2f",Drng:"8c-",Drch:"9932cc",Dr:"8b--",Dsmn:"e9967a",Dsgr:"8fbc8f",DsTb:"483d8b",DsTg:"2f4f4f",Dtrq:"-ced1",Dvt:"94-d3",ppnk:"1493",pskb:"-bfff",mgr:"696969",grb:"1e90ff",rbrc:"b22222",rwht:"af0",stg:"228b22",chs:"-ff",gnsb:"dcdcdc",st:"8f8ff",g:"d7-",gnr:"daa520",gr:"808080",grn:"-8-0",grnw:"adff2f",hnw:"0fff0",htpn:"69b4",nnr:"cd5c5c",ng:"4b-82",vr:"0",khk:"0e68c",vnr:"e6e6fa",nrb:"0f5",wngr:"7cfc-",mnch:"acd",Lb:"add8e6",Lcr:"08080",Lcn:"e0ffff",Lgnr:"afad2",Lgr:"d3d3d3",Lgrn:"90ee90",Lpnk:"b6c1",Lsmn:"a07a",Lsgr:"20b2aa",Lskb:"87cefa",LsTg:"778899",Lstb:"b0c4de",Lw:"e0",m:"-ff-",mgrn:"32cd32",nn:"af0e6",mgnt:"-ff",mrn:"8--0",mqm:"66cdaa",mmb:"--cd",mmrc:"ba55d3",mmpr:"9370db",msg:"3cb371",mmsT:"7b68ee","":"-fa9a",mtr:"48d1cc",mmvt:"c71585",mnLb:"191970",ntc:"5fffa",mstr:"e4e1",mccs:"e4b5",vjw:"dead",nv:"--80",c:"df5e6",v:"808-0",vrb:"6b8e23",rng:"a5-",rngr:"45-",rch:"da70d6",pgnr:"eee8aa",pgrn:"98fb98",ptrq:"afeeee",pvtr:"db7093",ppwh:"efd5",pchp:"dab9",pr:"cd853f",pnk:"c0cb",pm:"dda0dd",pwrb:"b0e0e6",prp:"8-080",cc:"663399",r:"--",sbr:"bc8f8f",rb:"4169e1",sbrw:"8b4513",smn:"a8072",nbr:"4a460",sgrn:"2e8b57",ssh:"5ee",snn:"a0522d",svr:"c0c0c0",skb:"87ceeb",sTb:"6a5acd",sTgr:"708090",snw:"afa",n:"-ff7f",stb:"4682b4",tn:"d2b48c",t:"-8080",thst:"d8bfd8",tmT:"6347",trqs:"40e0d0",vt:"ee82ee",whT:"5deb3",wht:"",hts:"5f5f5",w:"-",wgrn:"9acd32"};function r(t,e){e=1<arguments.length&&void 0!==e?e:1;return(0<e?t.toFixed(e).replace(/0+$/,"").replace(/\\.$/,""):t.toString())||"0"}var s=(t(f,[{key:"printRGB",value:function(t){var e=(t?this.rgba:this.rgba.slice(0,3)).map(function(t,e){return r(t,3===e?3:0)});return t?"rgba("+e+")":"rgb("+e+")"}},{key:"printHSL",value:function(t){var n=[360,100,100,1],i=["","%","%",""],e=(t?this.hsla:this.hsla.slice(0,3)).map(function(t,e){return r(t*n[e],3===e?3:1)+i[e]});return t?"hsla("+e+")":"hsl("+e+")"}},{key:"printHex",value:function(t){var e=this.hex;return t?e:e.substring(0,7)}},{key:"rgba",get:function(){if(this._rgba)return this._rgba;if(!this._hsla)throw new Error("No color is set");return this._rgba=f.hslToRgb(this._hsla)},set:function(t){3===t.length&&(t[3]=1),this._rgba=t,this._hsla=null}},{key:"rgbString",get:function(){return this.printRGB()}},{key:"rgbaString",get:function(){return this.printRGB(!0)}},{key:"hsla",get:function(){if(this._hsla)return this._hsla;if(!this._rgba)throw new Error("No color is set");return this._hsla=f.rgbToHsl(this._rgba)},set:function(t){3===t.length&&(t[3]=1),this._hsla=t,this._rgba=null}},{key:"hslString",get:function(){return this.printHSL()}},{key:"hslaString",get:function(){return this.printHSL(!0)}},{key:"hex",get:function(){return"#"+this.rgba.map(function(t,e){return(e<3?t:Math.round(255*t)).toString(16)}).map(function(t){return t.padStart(2,"0")}).join("")},set:function(t){this.rgba=f.hexToRgb(t)}}],[{key:"hexToRgb",value:function(t){var e=(t.startsWith("#")?t.slice(1):t).replace(/^(\\w{3})$/,"$1F").replace(/^(\\w)(\\w)(\\w)(\\w)$/,"$1$1$2$2$3$3$4$4").replace(/^(\\w{6})$/,"$1FF");if(!e.match(/^([0-9a-fA-F]{8})$/))throw new Error("Unknown hex color; "+t);e=e.match(/^(\\w\\w)(\\w\\w)(\\w\\w)(\\w\\w)$/).slice(1).map(function(t){return parseInt(t,16)});return e[3]=e[3]/255,e}},{key:"nameToRgb",value:function(t){t=t.toLowerCase().replace("at","T").replace(/[aeiouyldf]/g,"").replace("ght","L").replace("rk","D").slice(-5,4),t=e[t];return void 0===t?t:f.hexToRgb(t.replace(/\\-/g,"00").padStart(6,"f"))}},{key:"rgbToHsl",value:function(t){var e=d(t,4),n=e[0],i=e[1],r=e[2],s=e[3];n/=255,i/=255,r/=255;var o=Math.max(n,i,r),a=Math.min(n,i,r),c=void 0,t=void 0,e=(o+a)/2;if(o===a)c=t=0;else{var l=o-a,t=.5<e?l/(2-o-a):l/(o+a);switch(o){case n:c=(i-r)/l+(i<r?6:0);break;case i:c=(r-n)/l+2;break;case r:c=(n-i)/l+4}c/=6}return[c,t,e,s]}},{key:"hslToRgb",value:function(t){var e=d(t,4),n=e[0],i=e[1],r=e[2],s=e[3],o=void 0,a=void 0,t=void 0;0===i?o=a=t=r:(o=(e=function(t,e,n){return n<0&&(n+=1),1<n&&--n,n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t})(i=2*r-(r=r<.5?r*(1+i):r+i-r*i),r,n+1/3),a=e(i,r,n),t=e(i,r,n-1/3));t=[255*o,255*a,255*t].map(Math.round);return t[3]=s,t}}]),f);function f(t,e,n,i){u(this,f);var r,s,o,a,c,l,h=this;void 0===t||(Array.isArray(t)?this.rgba=t:void 0===n?(r=t&&""+t)&&((s=r.toLowerCase()).startsWith("hsl")?(o=s.match(/([\\-\\d\\.e]+)/g).map(Number),c=(a=d(o,4))[0],l=a[1],o=a[2],a=a[3],h.hsla=[c/=360,l/=100,o/=100,a=void 0===a?1:a]):s.startsWith("rgb")?(c=s.match(/([\\-\\d\\.e]+)/g).map(Number),o=(l=d(c,4))[0],a=l[1],c=l[2],l=l[3],h.rgba=[o,a,c,l=void 0===l?1:l]):s.startsWith("#")?h.rgba=f.hexToRgb(s):h.rgba=f.nameToRgb(s)||f.hexToRgb(s)):this.rgba=[t,e,n,void 0===i?1:i])}var n=(t(o,[{key:"add",value:function(t,e,n){t.addEventListener(e,n,!1),this._events.push({target:t,type:e,handler:n})}},{key:"remove",value:function(n,i,r){this._events=this._events.filter(function(t){var e=!0;return n&&n!==t.target&&(e=!1),i&&i!==t.type&&(e=!1),(e=r&&r!==t.handler?!1:e)&&o._doRemove(t.target,t.type,t.handler),!e})}},{key:"destroy",value:function(){this._events.forEach(function(t){return o._doRemove(t.target,t.type,t.handler)}),this._events=[]}}],[{key:"_doRemove",value:function(t,e,n){t.removeEventListener(e,n,!1)}}]),o);function o(){u(this,o),this._events=[]}function a(t,s,o){var a=!1;function c(t,e,n){return Math.max(e,Math.min(t,n))}function n(t,e,n){var i,r;(a=n?!0:a)&&(t.preventDefault(),i=(r=s.getBoundingClientRect()).width,n=r.height,t=e.clientX,e=e.clientY,t=c(t-r.left,0,i),r=c(e-r.top,0,n),o(t/i,r/n))}function e(t,e){1===(void 0===t.buttons?t.which:t.buttons)?n(t,t,e):a=!1}function i(t,e){1===t.touches.length?n(t,t.touches[0],e):a=!1}t.add(s,"mousedown",function(t){e(t,!0)}),t.add(s,"touchstart",function(t){i(t,!0)}),t.add(window,"mousemove",e),t.add(s,"touchmove",i),t.add(window,"mouseup",function(t){a=!1}),t.add(s,"touchend",function(t){a=!1}),t.add(s,"touchcancel",function(t){a=!1})}var c="keydown",l="mousedown",h="focusin";function p(t,e){return(e||document).querySelector(t)}function g(t){t.preventDefault(),t.stopPropagation()}function v(t,e,n,i,r){t.add(e,c,function(t){0<=n.indexOf(t.key)&&(r&&g(t),i(t))})}function b(t){u(this,b),this.settings={popup:"right",layout:"default",alpha:!0,editor:!0,editorFormat:"hex",cancelButton:!1,defaultColor:"#0cf"},this._events=new n,this.onChange=null,this.onDone=null,this.onOpen=null,this.onClose=null,this.setOptions(t)}return t(b,[{key:"setOptions",value:function(t){var e,n,i,r=this;t&&(e=this.settings,t instanceof HTMLElement?e.parent=t:(e.parent&&t.parent&&e.parent!==t.parent&&(this._events.remove(e.parent),this._popupInited=!1),function(t,e,n){for(var i in t)n&&0<=n.indexOf(i)||(e[i]=t[i])}(t,e),t.onChange&&(this.onChange=t.onChange),t.onDone&&(this.onDone=t.onDone),t.onOpen&&(this.onOpen=t.onOpen),t.onClose&&(this.onClose=t.onClose),(i=t.color||t.colour)&&this._setColor(i)),(n=e.parent)&&e.popup&&!this._popupInited?(this._events.add(n,"click",i=function(t){return r.openHandler(t)}),v(this._events,n,[" ","Spacebar","Enter"],i),this._popupInited=!0):t.parent&&!e.popup&&this.show())}},{key:"openHandler",value:function(t){var e;this.show()&&(t&&t.preventDefault(),this.settings.parent.style.pointerEvents="none",e=t&&t.type===c?this._domEdit:this.domElement,setTimeout(function(){return e.focus()},100),this.onOpen&&this.onOpen(this.colour))}},{key:"closeHandler",value:function(t){var e,n=t&&t.type,i=!1;t?n===l||n===h?(e=(this.__containedEvent||0)+100,t.timeStamp>e&&(i=!0)):(g(t),i=!0):i=!0,i&&this.hide()&&(this.settings.parent.style.pointerEvents="",n!==l&&this.settings.parent.focus(),this.onClose&&this.onClose(this.colour))}},{key:"movePopup",value:function(t,e){this.closeHandler(),this.setOptions(t),e&&this.openHandler()}},{key:"setColor",value:function(t,e){this._setColor(t,{silent:e})}},{key:"_setColor",value:function(t,e){if(t="string"==typeof t?t.trim():t){e=e||{};var n=void 0;try{n=new s(t)}catch(t){if(e.failSilently)return;throw t}this.settings.alpha||((t=n.hsla)[3]=1,n.hsla=t),this.colour=this.color=n,this._setHSLA(null,null,null,null,e)}}},{key:"setColour",value:function(t,e){this.setColor(t,e)}},{key:"show",value:function(){if(!this.settings.parent)return!1;if(this.domElement){var t=this._toggleDOM(!0);return this._setPosition(),t}var e=this.settings.template||'<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>',n=(t=e,(e=document.createElement("div")).innerHTML=t,e.firstElementChild);return this.domElement=n,this._domH=p(".picker_hue",n),this._domSL=p(".picker_sl",n),this._domA=p(".picker_alpha",n),this._domEdit=p(".picker_editor input",n),this._domSample=p(".picker_sample",n),this._domOkay=p(".picker_done button",n),this._domCancel=p(".picker_cancel button",n),n.classList.add("layout_"+this.settings.layout),this.settings.alpha||n.classList.add("no_alpha"),this.settings.editor||n.classList.add("no_editor"),this.settings.cancelButton||n.classList.add("no_cancel"),this._ifPopup(function(){return n.classList.add("popup")}),this._setPosition(),this.colour?this._updateUI():this._setColor(this.settings.defaultColor),this._bindEvents(),!0}},{key:"hide",value:function(){return this._toggleDOM(!1)}},{key:"destroy",value:function(){this._events.destroy(),this.domElement&&this.settings.parent.removeChild(this.domElement)}},{key:"_bindEvents",value:function(){var n=this,i=this,r=this.domElement,s=this._events;function o(t,e,n){s.add(t,e,n)}o(r,"click",function(t){return t.preventDefault()}),a(s,this._domH,function(t,e){return i._setHSLA(t)}),a(s,this._domSL,function(t,e){return i._setHSLA(null,t,1-e)}),this.settings.alpha&&a(s,this._domA,function(t,e){return i._setHSLA(null,null,null,1-e)});var t=this._domEdit;o(t,"input",function(t){i._setColor(this.value,{fromEditor:!0,failSilently:!0})}),o(t,"focus",function(t){this.selectionStart===this.selectionEnd&&this.select()}),this._ifPopup(function(){function t(t){return n.closeHandler(t)}o(window,l,t),o(window,h,t),v(s,r,["Esc","Escape"],t);function e(t){n.__containedEvent=t.timeStamp}o(r,l,e),o(r,h,e),o(n._domCancel,"click",t)});t=function(t){n._ifPopup(function(){return n.closeHandler(t)}),n.onDone&&n.onDone(n.colour)};o(this._domOkay,"click",t),v(s,r,["Enter"],t)}},{key:"_setPosition",value:function(){var n=this.settings.parent,i=this.domElement;n!==i.parentNode&&n.appendChild(i),this._ifPopup(function(t){"static"===getComputedStyle(n).position&&(n.style.position="relative");var e=!0===t?"popup_right":"popup_"+t;["popup_top","popup_bottom","popup_left","popup_right"].forEach(function(t){t===e?i.classList.add(t):i.classList.remove(t)}),i.classList.add(e)})}},{key:"_setHSLA",value:function(t,e,n,i,r){r=r||{};var s=this.colour,o=s.hsla;[t,e,n,i].forEach(function(t,e){!t&&0!==t||(o[e]=t)}),s.hsla=o,this._updateUI(r),this.onChange&&!r.silent&&this.onChange(s)}},{key:"_updateUI",value:function(t){if(this.domElement){t=t||{};var e=this.colour,n=e.hsla,i="hsl("+360*n[0]+", 100%, 50%)",r=e.hslString,s=e.hslaString,o=this._domH,a=this._domSL,c=this._domA,l=p(".picker_selector",o),o=p(".picker_selector",a),c=p(".picker_selector",c);d(0,l,n[0]),this._domSL.style.backgroundColor=this._domH.style.color=i,d(0,o,n[1]),f(0,o,1-n[2]),a.style.color=r,f(0,c,1-n[3]);n=r,r=n.replace("hsl","hsla").replace(")",", 0)");if(this._domA.style.background="linear-gradient("+[n,r]+")"+", linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0 / 2em 2em,\\n                   linear-gradient(45deg, lightgrey 25%,       white 25%,       white 75%, lightgrey 75%) 1em 1em / 2em 2em",!t.fromEditor){var t=this.settings.editorFormat,h=this.settings.alpha,u=void 0;switch(t){case"rgb":u=e.printRGB(h);break;case"hsl":u=e.printHSL(h);break;default:u=e.printHex(h)}this._domEdit.value=u}this._domSample.style.color=s}function d(t,e,n){e.style.left=100*n+"%"}function f(t,e,n){e.style.top=100*n+"%"}}},{key:"_ifPopup",value:function(t,e){this.settings.parent&&this.settings.popup?t&&t(this.settings.popup):e&&e()}},{key:"_toggleDOM",value:function(t){var e=this.domElement;if(!e)return!1;var n=t?"":"none",t=e.style.display!==n;return t&&(e.style.display=n),t}}]),b});`,ta="0.1.4",Jo={"runtime/deck-stage.js":yv,"runtime/vanilla-picker.js":_v,"runtime/vanilla-picker.css":kv,"runtime/vanilla-picker.LICENSE.md":wv,"runtime/html-deck-editor.js":`${bv}

${xv}
`,"runtime/html-deck-editor.css":Sv},pi="data-html-deck-editor-runtime",Ev=["[data-html-deck-editor-ui]","#editorShell","#shapeMenu","#editorFrame","#editorToast","#editorGuideV","#editorGuideH"],Av=["#editToggle","#editExport",".edit-toggle",".edit-export",".edit-hotzone","[data-html-deck-editor-ui]"],Tv=[".editor-toolbar",".editor-slides",".editor-panel",".editor-help-modal",".visual-editor",".visual-editor-shell","#visualEditor"],rd=["#deck",".deck",".slides","#slides","[data-deck]","[data-slides]","#webslides","#presentation",".presentation","#impress",".impress"].join(", "),Cv=["section","article",".slide",".step","[data-slide]","[data-page]",".page",".screen"].join(", "),Mv=["hidden","is-hidden","d-none","invisible","opacity-0"];async function zv(r,h=[],s,d={}){let v=r,u=[...h];if(d.aiAdaptationPlan){const _=ia(r.files);if(!_)return{report:ed(r),blob:null,outputName:null,filesAdded:[],filesModified:[],warnings:u};s?.({stage:"rewrite",percent:0,detail:"正在把 AI 优化写入 HTML。"});const x=ev(tl(_.data),d.aiAdaptationPlan),C=Og(x.html);v={...r,files:r.files.map(w=>w.path===_.path?{...w,data:C,size:C.byteLength}:w)},u=[...u,...x.preview.warnings],s?.({stage:"rewrite",percent:28,detail:"AI 优化已写入本地 HTML。"})}s?.({stage:"detect",percent:0,detail:"正在检查是不是 HTML 演示稿。"});const p=ed(v);if(s?.({stage:"detect",percent:100,detail:p.messages[0]||"检测完成。"}),p.status==="unsupported"||!p.indexPath)return{report:p,blob:null,outputName:null,filesAdded:[],filesModified:[],warnings:[...u,...p.warnings]};const f=ia(v.files);if(!f)return{report:p,blob:null,outputName:null,filesAdded:[],filesModified:[],warnings:[...u,"没有找到可转换的 HTML 文件。"]};s?.({stage:"rewrite",percent:0,detail:`正在改写 ${f.path}`});const y=tl(f.data),S=Bv(y,p);s?.({stage:"rewrite",percent:100,detail:"HTML 已加入编辑器入口。"});const B=new Hf,T=f.path.includes("/")?f.path.split("/").slice(0,-1).join("/"):"",D=T?`${T}/runtime/`:"runtime/";s?.({stage:"runtime",percent:0,detail:"正在整理原文件和编辑器文件。"});for(const _ of v.files)if(_.path===f.path)B.file(_.path,S);else{if(ty(_.path))continue;B.file(_.path,iy(_.data))}s?.({stage:"runtime",percent:55,detail:`已放入 ${v.files.length} 个原文件。`});for(const[_,x]of Object.entries(Jo)){const C=_.replace("runtime/","");B.file(`${D}${C}`,x)}s?.({stage:"runtime",percent:100,detail:`已加入 ${Object.keys(Jo).length} 个编辑器文件。`});const k=await B.generateAsync({type:"blob",compression:"DEFLATE"},_=>{s?.({stage:"zip",percent:_.percent,detail:_.currentFile||"正在生成 ZIP。"})});return s?.({stage:"zip",percent:100,detail:"可编辑 ZIP 已生成。"}),{report:p,blob:k,outputName:`${ny(r.name)}-editable.zip`,filesAdded:Object.keys(Jo).map(_=>`${D}${_.replace("runtime/","")}`),filesModified:[f.path],warnings:[...u,...p.warnings]}}function Bv(r,h){const s=new DOMParser().parseFromString(r,"text/html");return Nv(s),Qv(s,{upgradeExistingEditor:h.status==="already-editable"}),(h.status==="ready"||h.status==="already-editable")&&Ov(s)?Dv(s):h.status==="adaptable"&&Lv(s,h),Vv(s),Kv(s),`<!doctype html>
${s.documentElement.outerHTML}`}function Nv(r){if(!r.querySelector("title")){const h=r.createElement("title");h.textContent="Editable HTML Deck",r.head.appendChild(h)}}function Dv(r){const h=r.querySelector("deck-stage#deckStage, #deckStage, .deck-stage, [data-html-deck-editor-stage]");!h||Uf(h).length<2||(h.setAttribute("data-html-deck-editor-stage","preserve"),h.id||(h.id="deckStage"),h.getAttribute("aria-label")||h.setAttribute("aria-label","Presentation"))}function Ov(r){return r.querySelector("deck-stage#deckStage")?Array.from(r.querySelectorAll("script:not([src])")).some(h=>{const s=h.textContent||"",d=/getElementById\(["']deckStage["']\)|querySelector\(["']#deckStage["']\)/.test(s),v=/style\.transform/.test(s)||/classList\.toggle\(["'](?:active|visible)["']/.test(s)||/querySelectorAll\([^)]*section\.slide/.test(s);return d&&v}):!1}function Lv(r,h){const s=r.querySelector("deck-stage#deckStage, #deckStage, .deck-stage, [data-html-deck-editor-stage]"),d=Fv(r,h);if(d.length<2||s&&Yv(s,d))return;d.forEach((p,f)=>{Zv(p),p.classList.add("slide"),f===0&&!p.classList.contains("active")&&!p.classList.contains("visible")&&p.classList.add("active","visible"),p.getAttribute("data-title")||p.setAttribute("data-title",Xv(p,f))});const v=Rv(d);if(v){kf(v,d);return}const u=Hv(d);if(u){jv(u,d),kf(u,d);return}Iv(r,d)}function Rv(r){const h=r[0]?.parentElement;if(!h||!r.every(p=>p.parentElement===h))return null;const s=["#deck",".deck",".slides","#slides","main","[role='main']","[data-deck]","[data-slides]","#webslides","#presentation",".presentation","#impress",".impress"].join(", ");if(h.matches(s))return h;const d=Array.from(h.children),v=new Set(r);return d.length===r.length&&d.every(p=>v.has(p))?h:null}function Hv(r){const h=new Set(r),s=Array.from(new Set(r.map(u=>u.parentElement).filter(Boolean))),d=r[0]?.parentElement;return s.filter(u=>u.matches(rd)).sort((u,p)=>(u===d?-1:0)-(p===d?-1:0)).find(u=>{const p=Array.from(u.children).filter(f=>h.has(f)).length;return p>=2&&(u===d||p>=Math.ceil(r.length/2))})||null}function jv(r,h){const s=r.ownerDocument.createTextNode(""),d=h.find(u=>u.parentElement===r);d?r.insertBefore(s,d):r.appendChild(s);const v=r.ownerDocument.createDocumentFragment();h.forEach(u=>{v.appendChild(u)}),s.parentNode?.replaceChild(v,s)}function kf(r,h){r.setAttribute("data-html-deck-editor-stage","preserve"),Uv(r,h)&&r.setAttribute("data-html-deck-editor-navigation","horizontal"),r.id||(r.id="deckStage"),r.getAttribute("aria-label")||r.setAttribute("aria-label","Presentation")}function Uv(r,h){if(r.matches(rd))return!0;const s=Array.from(r.children),d=new Set(h);return s.length===h.length&&s.every(v=>d.has(v))}function Iv(r,h){const s=r.createElement("div");s.id="deckStage",s.className="deck-stage",s.setAttribute("data-html-deck-editor-stage","preserve"),s.setAttribute("data-html-deck-editor-navigation","horizontal"),s.setAttribute("aria-label","Presentation");const d=h[0];d.parentNode?.insertBefore(s,d),h.forEach((v,u)=>{u===0?v.classList.add("active","visible"):v.classList.remove("active","visible"),s.appendChild(v)})}function Fv(r,h){if(h.sourceKind==="reveal")return sd(r.querySelector(".reveal .slides"),"section");if(h.sourceKind==="section-slide")return qv(r);const s=Gv(r);return s.length>=2?s:Array.from(r.body.querySelectorAll("main > section, body > section")).filter(If)}function qv(r){return jf(Array.from(r.body.querySelectorAll("section.slide, .slide")))}function Gv(r){const h=Array.from(r.body.querySelectorAll(rd));for(const s of h){const d=sd(s,Cv).filter(If);if(d.length>=2)return d}return[]}function jf(r){return r.filter(h=>!r.some(s=>s!==h&&s.contains(h)))}function sd(r,h){return r?Array.from(r.children).filter(s=>s.matches(h)):[]}function Uf(r){const h=sd(r,".slide");return h.length?h:jf(Array.from(r.querySelectorAll(".slide")))}function Yv(r,h){const s=Uf(r);if(s.length<2||s.length!==h.length)return!1;const d=new Set(h);return s.every(v=>d.has(v))}function Zv(r){r.removeAttribute("hidden"),r.getAttribute("aria-hidden")==="true"&&r.removeAttribute("aria-hidden"),Mv.forEach(h=>r.classList.remove(h)),r instanceof HTMLElement&&(r.style.display==="none"&&r.style.removeProperty("display"),r.style.visibility==="hidden"&&r.style.removeProperty("visibility"),Number.parseFloat(r.style.opacity||"")===0&&r.style.removeProperty("opacity"))}function If(r){return(r.textContent||"").trim().length>10}function Xv(r,h){return r.querySelector("h1, h2, h3, [data-title]")?.textContent?.trim()||`Slide ${h+1}`}function Vv(r){Pv(r);const h=r.createElement("link");h.rel="stylesheet",h.href="runtime/vanilla-picker.css",h.setAttribute(pi,ta),r.head.appendChild(h);const s=r.createElement("link");if(s.rel="stylesheet",s.href="runtime/html-deck-editor.css",s.setAttribute(pi,ta),r.head.appendChild(s),!r.querySelector("deck-stage[data-html-deck-editor-stage='preserve']")){const u=r.createElement("script");u.src="runtime/deck-stage.js",u.setAttribute(pi,ta),r.body.appendChild(u)}const d=r.createElement("script");d.src="runtime/vanilla-picker.js",d.setAttribute(pi,ta),r.body.appendChild(d);const v=r.createElement("script");v.src="runtime/html-deck-editor.js",v.setAttribute(pi,ta),r.body.appendChild(v)}function Kv(r){const h=r.createElement("script");h.setAttribute(pi,ta),h.textContent=`
    (function () {
      function mountHtmlDeckEditor() {
        if (!document.getElementById("deckStage") && !document.querySelector("[data-html-deck-editor-stage], .deck-stage, #deck")) return;
        if (!window.HtmlDeckEditor || window.__htmlDeckEditorMounted) return;
        try {
          window.editor = window.HtmlDeckEditor.mount();
          window.__htmlDeckEditorMounted = true;
        } catch (error) {
          console.error("HtmlDeckEditor failed to mount.", error);
        }
      }
      if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", mountHtmlDeckEditor, { once: true });
      } else {
        mountHtmlDeckEditor();
      }
      window.addEventListener("load", mountHtmlDeckEditor, { once: true });
    })();
  `,r.body.appendChild(h)}function Pv(r){r.querySelectorAll([`[${pi}]`,'script[src*="editor-runtime"]','link[href*="editor-runtime"]','script[src*="html-deck-editor"]','link[href*="html-deck-editor"]','script[src*="runtime/vanilla-picker"]','link[href*="runtime/vanilla-picker"]'].join(", ")).forEach(h=>{h.parentNode?.removeChild(h)})}function Qv(r,h){r.querySelectorAll(Ev.join(", ")).forEach(s=>{s instanceof Element&&$v(s)&&s.parentNode?.removeChild(s)}),r.querySelectorAll(Av.join(", ")).forEach(s=>{s instanceof HTMLElement&&!xr(s)&&Wv(s)&&s.parentNode?.removeChild(s)}),r.querySelectorAll(Tv.join(", ")).forEach(s=>{s instanceof HTMLElement&&!xr(s)&&(h.upgradeExistingEditor||ey(s))&&s.parentNode?.removeChild(s)}),r.querySelectorAll("button, a").forEach(s=>{s instanceof HTMLElement&&!xr(s)&&Ff(s)&&s.parentNode?.removeChild(s)}),r.querySelectorAll("script:not([src])").forEach(s=>{const d=Jv(s.textContent||"");d===null?s.parentNode?.removeChild(s):d!==s.textContent&&(s.textContent=d)}),r.body.classList.remove("editing","editor-on","dragging-file")}function Jv(r){const h=/class\s+SlidePresentation\b|new\s+SlidePresentation\s*\(/.test(r),s=/class\s+InlineDeckEditor\b|new\s+InlineDeckEditor\s*\(/.test(r);return h&&s?r.replace(/\bnew\s+InlineDeckEditor\s*\(\s*\)\s*;?/g,"/* html-deck-editor: legacy InlineDeckEditor disabled */"):s||/FrontendSlidesEditor\.mount\s*\(|HtmlDeckEditor\.mount\s*\(/.test(r)||(/getElementById\(["'](?:editToggle|editExport|editorShell)["']\)/.test(r)||/querySelector\(["']\.(?:edit-hotzone|edit-toggle|edit-export|editor-shell)["']\)/.test(r))&&!h?null:r}function xr(r){return!!r.closest("deck-stage, #deckStage, .deck-stage, .slide")}function $v(r){return od(r)&&!xr(r)}function od(r){return r.hasAttribute("data-html-deck-editor-ui")?!0:["editorShell","shapeMenu","editorFrame","editorToast","editorGuideV","editorGuideH","editToggle","editExport"].includes(r.id)}function Wv(r){return od(r)?!0:r.classList.contains("edit-hotzone")?!r.textContent?.trim()&&r.children.length===0:Ff(r)}function ey(r){return od(r)||r.querySelector("[data-html-deck-editor-ui], #editToggle, #editExport, #editorFrame, #editorToast, #shapeMenu")?!0:!!(r.querySelector("#saveBtn, #exitEditBtn, #slideRail, #selectionName, #textInput, #imageDropZone")&&/editor|visual-editor/i.test(`${r.id} ${r.className}`))}function Ff(r){const h=(r.textContent||"").replace(/\s+/g," ").trim().toUpperCase(),s=[r.id,r.className,r.getAttribute("title"),r.getAttribute("aria-label")].join(" "),d=/edit|editor|编辑|save[-_\s]?html|html[-_\s]?save/i.test(s);return(h==="DONE"||h==="EDIT"||h==="SAVE HTML"||h==="保存 HTML")&&d||/edit mode|编辑模式|toggle edit mode/i.test(s)||/save[-_\s]?html|html[-_\s]?save/i.test(s)}function ty(r){const h=r.replace(/\\/g,"/").toLowerCase();return/(^|\/)editor-runtime\.(css|js)(\.map)?$/.test(h)||/(^|\/)visual-editor\/editor-runtime\.(css|js)(\.map)?$/.test(h)}function ny(r){return r.replace(/[^a-z0-9._-]+/gi,"-").replace(/^-+|-+$/g,"")||"html-deck"}function iy(r){return new Uint8Array(r)}const Sr={maxZipBytes:100*1024*1024,maxFileCount:1e3,maxTotalBytes:300*1024*1024},ay=[/^\.env(?:\.|$)/i,/(?:^|\/)id_rsa$/i,/(?:^|\/)id_ed25519$/i,/\.pem$/i,/\.key$/i,/\.p12$/i,/token/i,/secret/i];function qf(r){const h=r.replaceAll("\\","/").replace(/^\/+/,"");return!h||h.includes("\0")||h.split("/").some(s=>s===".."||s==="")||/^[a-z]:\//i.test(h)?null:h}function ly(r){const h=r.toLowerCase(),s=h.split("/").pop()||h;return ay.some(d=>d.test(h)||d.test(s))}function ry(r){const h=[];return r.length>Sr.maxFileCount&&h.push(`文件太多了：最多支持 ${Sr.maxFileCount} 个文件。`),r.reduce((d,v)=>d+v.size,0)>Sr.maxTotalBytes&&h.push("文件总体积太大了：浏览器本地处理最多支持约 300MB。"),h}function sy(r){const h=[],s=[];for(const d of r)ly(d.path)?s.push(d.path):h.push(d);return{files:h,skipped:s}}function oy(r){return new Uint8Array(r)}function Gf(r){return r.replace(/\.[^.]+$/,"")||"deck"}async function Yf(r,h=r.name){const s=qf(h);if(!s)return null;const d=oy(await r.arrayBuffer());return{path:s,name:r.name,data:d,size:d.byteLength}}async function dy(r,h){if(r.size>Sr.maxZipBytes)return{input:null,warnings:[],errors:["ZIP 太大了：第一版最多支持约 100MB。"]};h?.({stage:"read",percent:0,detail:`正在打开 ${r.name}`});let s;try{s=await Hf.loadAsync(r)}catch{return{input:null,warnings:[],errors:["这个文件不是有效的 ZIP 压缩包，请重新压缩后再试。"]}}h?.({stage:"read",percent:100,detail:"ZIP 已打开，正在读取里面的文件。"});const d=[],v=[],u=Object.entries(s.files).filter(([,p])=>!p.dir);for(const[p,[f,y]]of u.entries()){const S=qf(f);if(!S){v.push(`跳过了不安全路径：${f}`),h?.({stage:"collect",percent:(p+1)/u.length*100,detail:`跳过 ${f}`});continue}const B=await y.async("uint8array",T=>{const D=(p+T.percent/100)/u.length*100;h?.({stage:"collect",percent:D,detail:S})});d.push({path:S,name:S.split("/").pop()||S,data:B,size:B.byteLength}),h?.({stage:"collect",percent:(p+1)/u.length*100,detail:S})}return dd({kind:"zip",name:Gf(r.name),files:d},v)}async function cy(r,h){h?.({stage:"read",percent:0,detail:`正在读取 ${r.name}`});const s=await Yf(r,"index.html");return h?.({stage:"read",percent:100,detail:`${r.name} 已读取。`}),s?dd({kind:"html",name:Gf(r.name),files:[s]},["你选择的是单个 HTML。如果它引用了本地图片、CSS 或 JS，建议选择整个文件夹或 ZIP，避免资源丢失。"]):{input:null,warnings:[],errors:["这个 HTML 文件名无法安全读取。"]}}async function uy(r,h){const s=[],d=[],v=Array.from(r);for(const[f,y]of v.entries()){const S=y.webkitRelativePath||y.name;h?.({stage:"collect",percent:f/v.length*100,detail:S});const B=await Yf(y,S);B?s.push(B):d.push(`跳过了不安全路径：${S}`),h?.({stage:"collect",percent:(f+1)/v.length*100,detail:S})}const u=s[0]?.path.split("/")[0]||"deck-folder",p=hy(s);return dd({kind:"folder",name:u,files:p},d)}function hy(r){if(!r.length)return r;const h=new Set(r.map(d=>d.path.split("/")[0]));if(h.size!==1)return r;const s=Array.from(h)[0];return r.map(d=>({...d,path:d.path===s?d.path:d.path.slice(s.length+1)}))}function dd(r,h){const s=ry(r.files),d=sy(r.files),v=[...h];return d.skipped.length>0&&v.push(`为了安全，已跳过 ${d.skipped.length} 个敏感文件。`),{input:{...r,files:d.files},warnings:v,errors:s}}const wf={key:"waiting",percent:0,detail:"点击上传按钮或拖入文件。"},fy={waiting:"等待文件",read:"读取文件",collect:"收集资源",detect:"检测演示稿",rewrite:"写入编辑器",runtime:"加入运行文件",zip:"生成 ZIP",done:"完成",error:"未完成"};function my(){const r=ot.useRef(null),h=ot.useRef(null),s=ot.useRef(null),[d,v]=ot.useState("idle"),[u,p]=ot.useState(null),[f,y]=ot.useState(null),[S,B]=ot.useState(null),[T,D]=ot.useState([]),[k,_]=ot.useState(wf),[x,C]=ot.useState(!1),[w,N]=ot.useState(()=>{try{return vg()}catch{return wr}}),[R,q]=ot.useState(!1),[I,J]=ot.useState("idle"),[Z,oe]=ot.useState(""),[$,he]=ot.useState("填写 API 后可以先测试连接，再开始智能适配。"),[ye,L]=ot.useState(null),[ee,m]=ot.useState(!1),[ie,G]=ot.useState(!1);ot.useEffect(()=>{if(I!=="adapting")return;const j=A=>{A.preventDefault(),A.returnValue=""};return window.addEventListener("beforeunload",j),()=>window.removeEventListener("beforeunload",j)},[I]);async function Y(j){!j||ln(d)||await ve(()=>dy(j,b),`正在打开 ${j.name}`)}async function fe(j){!j||ln(d)||await ve(()=>cy(j,b),`正在读取 ${j.name}`)}async function le(j){!j||j.length===0||ln(d)||await ve(()=>uy(j,b),`正在读取 ${j.length} 个文件`)}async function ve(j,A){v("loading"),p(null),y(null),B(null),D([]),J("idle"),oe(""),he("填写 API 后可以先测试连接，再开始智能适配。"),L(null),m(!1),G(!1),_({key:"read",percent:3,detail:$o(A)});try{const E=await j();if(!E.input||E.errors.length>0){p(null),D(E.errors.length>0?E.errors:["文件读取失败，请换一个文件试试。"]),_({key:"error",percent:0,detail:"文件没有通过安全检查。"}),v("error");return}const U={input:E.input,warnings:E.warnings};p(U);const ce=ed(U.input);if(B(ce),ce.status==="already-editable"){_({key:"detect",percent:48,detail:"检测到已有编辑功能。"}),v("review");return}_({key:"detect",percent:48,detail:ce.status==="unsupported"?"普通检测不确定，建议使用 AI 智能适配。":"请选择处理方式。"}),v("ready")}catch(E){p(null),y(null),B(null),D([E instanceof Error?E.message:"文件读取失败，请换一个文件试试。"]),_({key:"error",percent:0,detail:"浏览器无法读取这份文件。"}),v("error")}}function b(j){const A=j.stage==="read"?[3,18]:[18,34];_({key:j.stage,percent:_f(j.percent,A[0],A[1]),detail:$o(j.detail)})}async function z(j,A={}){v("converting"),B(null),_({key:"detect",percent:34,detail:"正在确认文件结构。"});try{const E=await zv(j.input,j.warnings,te,A);y(E),E.blob?(_({key:"done",percent:100,detail:"可编辑 ZIP 已准备好。"}),v("done")):(D(E.report.messages),_({key:"error",percent:45,detail:"暂时不能转换这份文件。"}),v("error"))}catch(E){D([E instanceof Error?E.message:"转换失败，请换一份演示稿试试。"]),_({key:"error",percent:45,detail:"转换中断。"}),v("error")}}function te(j){const A={detect:[34,48],rewrite:[48,64],runtime:[64,78],zip:[78,98]},[E,U]=A[j.stage];_({key:j.stage,percent:_f(j.percent,E,U),detail:$o(j.detail)})}function W(){v("idle"),p(null),y(null),B(null),D([]),J("idle"),oe(""),he("填写 API 后可以先测试连接，再开始智能适配。"),L(null),m(!1),G(!1),_(wf)}async function ae(){!u||ln(d)||(G(!1),await z(u))}async function xe(){!u||ln(d)||(G(!1),await z(u))}function Te(){if(!f?.blob||!f.outputName)return;const j=URL.createObjectURL(f.blob),A=document.createElement("a");A.href=j,A.download=f.outputName,document.body.appendChild(A),A.click(),A.remove(),window.setTimeout(()=>URL.revokeObjectURL(j),1e3)}function Ee(j){N(A=>{const E={...A,...j};return Wo(E),E})}function _e(j){N(A=>{const E=gg(A,j);return Wo(E),E})}function Pe(){N(j=>yg(j)),he("API Key 已清除。"),J("success")}async function Ge(){q(!0);const j=vf(w);if(j.length>0){J("error"),he(j[0]);return}J("testing"),he("正在测试连接...");try{await bf(w,[{role:"system",content:"Reply with OK."},{role:"user",content:"OK"}],{stream:!1,temperature:0}),J("success"),he("连接测试成功。")}catch(A){J("error"),he(A instanceof Error?A.message:"连接测试失败。")}}function yt(){if(!u||ln(d)||I==="adapting")return;const j=vf(w);if(j.length>0){J("error"),oe(""),he(j[0]),q(!0);return}if(!ia(u.input.files)){J("error"),oe("没有找到可适配的 HTML 文件。");return}m(!0)}async function bt(){if(!u||ln(d)||I==="adapting")return;const j=ia(u.input.files);if(!j){m(!1),J("error"),oe("没有找到可适配的 HTML 文件。");return}m(!1),J("adapting"),L(null),oe("正在生成 HTML 结构修改方案...");try{const{messages:A}=Qg(u.input),E=await bf(w,A,{temperature:.1,stream:w.stream}),U=$g(E),ce=Wg(tl(j.data),U);L(ce),J("preview"),oe("HTML 结构修改预览已生成，确认后会修改 HTML 并生成 ZIP。")}catch(A){J("error"),oe(A instanceof Error?A.message:"AI 适配暂时不可用，你仍可使用普通转换。")}}async function c(){!u||!ye||ln(d)||(J("success"),G(!0),oe("正在把 AI 优化写入 HTML 并生成 ZIP..."),await z(u,{aiAdaptationPlan:{...ye.plan,stageSelector:ye.plan.stageSelector||void 0}}))}async function re(j){if(j.preventDefault(),C(!1),ln(d))return;const A=j.dataTransfer.files[0];A&&(/\.zip$/i.test(A.name)?await Y(A):/\.html?$/i.test(A.name)?await fe(A):(D(["请拖入 ZIP 或 HTML 文件。文件夹请点击“选择文件夹”。"]),_({key:"error",percent:0,detail:"文件类型不支持。"}),v("error")))}return M.jsxs("main",{className:"page",children:[M.jsxs("header",{className:"topbar",children:[M.jsxs("a",{className:"brand",href:"/",children:[M.jsx("span",{className:"brand-mark",children:"A"}),M.jsx("span",{children:"Anchor Deck"})]}),M.jsxs("nav",{className:"top-actions","aria-label":"页面链接",children:[M.jsx("a",{className:"github-link",href:"https://github.com/wengzige/html-deck-editor",target:"_blank",rel:"noreferrer",children:"GitHub"}),M.jsx("a",{className:"release-link",href:"https://github.com/wengzige/html-deck-editor/releases",target:"_blank",rel:"noreferrer",children:"Release"})]})]}),M.jsxs("section",{className:"summary",children:[M.jsx("p",{className:"privacy-badge",children:"文件只在浏览器本地处理"}),M.jsxs("h1",{children:[M.jsx("span",{children:"HTML 演示稿"}),M.jsx("b",{children:"转"}),M.jsx("span",{children:"可编辑 HTML"})]}),M.jsx("p",{children:"选择 ZIP、文件夹或 HTML，Anchor Deck 会在浏览器里生成可编辑版本。不用登录，也不用配置服务器。"})]}),M.jsxs("section",{className:"converter","aria-label":"Anchor Deck 转换工具",children:[M.jsxs("div",{className:"converter-topline",children:[M.jsx("span",{children:"Anchor Deck"}),M.jsx("strong",{children:"上传 → 自动转换 → 下载"})]}),M.jsxs("div",{className:"converter-shell",children:[M.jsxs("div",{className:"upload-column",children:[M.jsxs("div",{className:"panel-heading",children:[M.jsx("span",{children:"上传文件"}),M.jsx("h2",{children:"选择 HTML 演示稿"}),M.jsx("p",{children:"优先选择 ZIP，资源最完整。"})]}),M.jsx(py,{isDragging:x,state:d,onDrop:re,onDragChange:C,onZip:()=>r.current?.click(),onFolder:()=>s.current?.click(),onHtml:()=>h.current?.click()})]}),M.jsx("aside",{className:"status-column","aria-label":"转换状态",children:M.jsxs("div",{className:"side-panel conversion-panel",children:[M.jsxs("div",{className:"panel-heading compact",children:[M.jsx("span",{children:"转换状态"}),M.jsx("h2",{children:wy(d,f)}),M.jsx("p",{children:u?Zf(u.input):"文件只在浏览器本地处理。"})]}),M.jsx(gy,{progress:k}),M.jsx(vy,{state:d,loaded:u,result:f,reviewReport:S,errors:T,aiState:I,aiMessage:Z,aiPreview:ye,aiConfigured:!!(w.apiKey.trim()&&w.model.trim()&&(w.proxyUrl.trim()||w.baseUrl.trim())),usedAiAdaptation:ie,onDownload:Te,onReset:W,onConfirmUpgrade:ae,onConvert:xe,onAiAdapt:yt,onOpenAiSettings:()=>q(!0),onConfirmAiAdaptation:c})]})})]})]}),M.jsxs("section",{className:"faq-section","aria-label":"新手说明",children:[M.jsxs("div",{className:"faq-heading",children:[M.jsx("span",{children:"新手说明"}),M.jsx("h2",{children:"上传前看这几件事"})]}),M.jsxs("div",{className:"faq-list",children:[M.jsxs(br,{title:"我应该上传什么？",children:["ZIP、包含 ",M.jsx("code",{children:"index.html"})," 的文件夹，或单个 HTML。拿不准时，把整个演示文件夹压成 ZIP。"]}),M.jsx(br,{title:"哪些文件暂时不支持？",children:"PPTX、PDF、Keynote、普通网站源码、React/Vue/Next 工程、只有截图的演示稿。"}),M.jsx(br,{title:"推荐使用什么浏览器？",children:"建议使用最新版 Chrome、Edge 或 Safari。较旧浏览器可能不支持文件夹选择、ZIP 处理或本地下载。"}),M.jsx(br,{title:"我可以不用线上网站吗？",children:"可以。你能从 GitHub Release 下载静态网站包，放到内网或任意静态托管；用户文件仍然在浏览器本地处理。"})]})]}),M.jsx("input",{ref:r,type:"file",accept:".zip,application/zip",hidden:!0,onChange:j=>{Y(j.target.files?.[0]||null),j.currentTarget.value=""}}),M.jsx("input",{ref:h,type:"file",accept:".html,.htm,text/html",hidden:!0,onChange:j=>{fe(j.target.files?.[0]||null),j.currentTarget.value=""}}),M.jsx("input",{ref:s,type:"file",hidden:!0,multiple:!0,webkitdirectory:"",directory:"",onChange:j=>{le(j.target.files),j.currentTarget.value=""}}),M.jsx(by,{open:R,config:w,aiState:I,message:$,onClose:()=>q(!1),onConfigChange:Ee,onProviderChange:_e,onClearKey:Pe,onTest:Ge}),M.jsx(yy,{open:ee,loaded:u,onClose:()=>m(!1),onConfirm:()=>{bt()}})]})}function py({isDragging:r,state:h,onDrop:s,onDragChange:d,onZip:v,onFolder:u,onHtml:p}){const f=ln(h);return M.jsxs("div",{className:"upload-area",children:[M.jsxs("div",{className:`drop-zone${r?" is-dragging":""}${f?" is-busy":""}`,onDrop:s,onDragOver:y=>{y.preventDefault(),d(!0)},onDragLeave:()=>d(!1),children:[M.jsxs("div",{className:"drop-visual","aria-hidden":"true",children:[M.jsxs("div",{className:"visual-orbit",children:[M.jsx("span",{className:"upload-icon",children:"HTML"}),M.jsx("i",{}),M.jsx("i",{})]}),M.jsxs("div",{className:"visual-stack",children:[M.jsx("span",{}),M.jsx("span",{}),M.jsx("span",{})]}),M.jsxs("div",{className:"visual-flow",children:[M.jsx("em",{}),M.jsx("em",{}),M.jsx("em",{})]})]}),M.jsx("strong",{children:f?"正在处理这份文件":"拖入 ZIP 或 HTML"}),M.jsx("span",{children:f?"处理完成后会出现下载按钮。":"文件夹请用下方按钮选择。"})]}),M.jsxs("div",{className:"upload-buttons",children:[M.jsxs("button",{className:"upload-button primary",type:"button",onClick:v,disabled:f,children:[M.jsx("strong",{children:"选择 ZIP"}),M.jsx("span",{children:"推荐"})]}),M.jsxs("button",{className:"upload-button",type:"button",onClick:u,disabled:f,children:[M.jsx("strong",{children:"选择文件夹"}),M.jsx("span",{children:"包含 index.html"})]}),M.jsxs("button",{className:"upload-button",type:"button",onClick:p,disabled:f,children:[M.jsx("strong",{children:"选择 HTML"}),M.jsx("span",{children:"单文件"})]})]})]})}function gy({progress:r}){return M.jsxs("div",{className:"progress-panel",children:[M.jsxs("div",{className:"progress-main",children:[M.jsxs("div",{children:[M.jsx("strong",{children:fy[r.key]}),M.jsx("p",{children:r.detail})]}),M.jsxs("b",{children:[Math.round(r.percent),"%"]})]}),M.jsxs("div",{className:"progress-track",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(r.percent),children:[M.jsx("span",{style:{width:`${Math.max(0,Math.min(100,r.percent))}%`}}),M.jsx("div",{className:"track-steps","aria-hidden":"true",children:Ty.map(h=>M.jsx("em",{className:xy(r.key,h.key)?"active":"",children:h.label},h.key))})]})]})}function vy({state:r,loaded:h,result:s,reviewReport:d,errors:v,aiState:u,aiMessage:p,aiPreview:f,aiConfigured:y,usedAiAdaptation:S,onDownload:B,onReset:T,onConfirmUpgrade:D,onConvert:k,onAiAdapt:_,onOpenAiSettings:x,onConfirmAiAdaptation:C}){if(s?.blob)return M.jsxs("div",{className:"result-card success fixed-result-card",children:[M.jsx("strong",{children:"已生成可编辑 HTML"}),M.jsxs("p",{children:[s.report.slideCount||"-"," 页已转换",s.warnings.length>0?`，${s.warnings.length} 条提示。`:"，可以下载。"]}),M.jsxs("div",{className:"result-next-steps",children:[M.jsx("span",{children:S?"AI 结构已优化":"本机完成转换"}),M.jsx("span",{children:"已注入编辑器"}),M.jsx("span",{children:"下载 ZIP 后编辑"})]}),M.jsxs("div",{className:"action-row",children:[M.jsx("button",{className:"primary-action",type:"button",onClick:B,children:"下载可编辑 ZIP"}),M.jsx("button",{className:"secondary-action",type:"button",onClick:T,children:"再转一个"})]})]});if(r==="review"&&h&&d)return M.jsxs("div",{className:"result-card review",children:[M.jsx("strong",{children:"检测到已有编辑功能"}),M.jsx("p",{children:"已可编辑，通常不用 AI。继续会升级编辑器并替换原入口。"}),M.jsxs("div",{className:"action-row",children:[M.jsx("button",{className:"primary-action",type:"button",onClick:D,children:"升级编辑器"}),M.jsx("button",{className:"secondary-action",type:"button",onClick:T,children:"保留原文件"})]})]});if(r==="ready"&&h&&d){if(u==="adapting")return M.jsxs("div",{className:"result-card working fixed-result-card ai-working-card",children:[M.jsxs("div",{className:"ai-working-main",children:[M.jsx("span",{className:"ai-spinner","aria-hidden":"true"}),M.jsxs("div",{children:[M.jsx("strong",{children:"正在智能适配"}),M.jsx("p",{children:"正在规划 HTML 结构，约 2-3 分钟。"})]})]}),M.jsxs("div",{className:"ai-wait-steps","aria-label":"AI 适配进度说明",children:[M.jsx("span",{children:"读取摘要"}),M.jsx("span",{children:"规划元素"}),M.jsx("span",{children:"生成预览"})]}),M.jsx("p",{className:"ai-refresh-note",children:"请不要刷新或关闭页面。中断后需要重新选择文件。"})]});if(f){const R=Ey(f.preview.warnings),q=R.slice(0,2),I=Math.max(0,R.length-q.length),J=[`页数是否为 ${f.preview.slideCount} 页，顺序是否正确。`,`文字可编辑区域是否覆盖 ${f.preview.textCount} 个核心文本。`,`媒体 ${f.preview.mediaCount} 个、视觉块 ${f.preview.boxCount} 个是否可选中。`];return M.jsxs("div",{className:"result-card ai-review-card fixed-result-card",children:[M.jsx("strong",{children:"AI 结构优化预览"}),M.jsxs("div",{className:"ai-review-warnings",children:[M.jsx("b",{children:"需要复核"}),M.jsx("ul",{children:J.map(Z=>M.jsx("li",{children:Z},Z))}),q.length>0?M.jsx("ul",{children:q.map(Z=>M.jsx("li",{children:Z},Z))}):null,I>0?M.jsxs("span",{children:["另有 ",I," 条提示，生成后继续检查。"]}):null]}),M.jsxs("div",{className:"ai-adapt-explainer",children:[M.jsx("b",{children:"将写入 HTML"}),M.jsx("span",{children:"确认后本地写入 `.slide`、`data-editable`、`data-editable-media`、`data-editable-box`，再生成 ZIP。"})]}),M.jsxs("div",{className:"ai-preview-grid","aria-label":"AI 适配识别结果",children:[M.jsxs("span",{children:[M.jsx("b",{children:f.preview.slideCount}),"页面"]}),M.jsxs("span",{children:[M.jsx("b",{children:f.preview.textCount}),"文本"]}),M.jsxs("span",{children:[M.jsx("b",{children:f.preview.mediaCount}),"媒体"]}),M.jsxs("span",{children:[M.jsx("b",{children:f.preview.boxCount}),"视觉块"]})]}),M.jsxs("div",{className:"action-row",children:[M.jsx("button",{className:"primary-action",type:"button",onClick:C,children:"应用 AI 优化并生成 ZIP"}),M.jsx("button",{className:"secondary-action",type:"button",onClick:T,children:"重新选择"})]})]})}const w=d.status==="ready"||d.status==="adaptable",N=d.status==="unsupported"||d.confidence<.72;return M.jsxs("div",{className:`result-card choice${N?" ai-recommended":""}`,children:[M.jsx("strong",{children:N?"建议先做 AI 智能适配":"选择处理方式"}),M.jsx("p",{children:_y(d)}),M.jsxs("div",{className:"choice-list",children:[w?M.jsxs("button",{className:"choice-option",type:"button",onClick:k,children:[M.jsx("b",{children:"普通转换"}),M.jsx("span",{children:"最快生成可编辑 ZIP。"})]}):null,M.jsxs("button",{className:"choice-option primary-choice",type:"button",onClick:_,children:[M.jsx("b",{children:"AI 智能适配"}),M.jsx("span",{children:"AI 先改结构，再生成适配版。"})]})]}),u==="error"&&p?M.jsx("p",{className:"ai-inline-note",children:p}):null,M.jsxs("div",{className:"action-row",children:[M.jsx("button",{className:"secondary-action ai-settings-action",type:"button",onClick:x,children:y?"AI 设置":"配置 AI"}),M.jsx("button",{className:"secondary-action",type:"button",onClick:T,children:"重新选择"})]})]})}return r==="error"&&v.length>0?M.jsxs("div",{className:"result-card error",children:[M.jsx("strong",{children:"这份文件现在不能转换"}),M.jsx("ul",{children:v.map(w=>M.jsx("li",{children:w},w))}),M.jsx("button",{className:"secondary-action",type:"button",onClick:T,children:"重新选择"})]}):h?M.jsxs("div",{className:"result-card working",children:[M.jsx("strong",{children:r==="loading"?"正在读取文件":"正在转换文件"}),M.jsx("p",{children:Zf(h.input)}),M.jsx("div",{className:"action-row",children:M.jsx("span",{className:"status-pill",children:"处理中"})})]}):M.jsxs("div",{className:"result-card empty",children:[M.jsxs("div",{className:"empty-copy",children:[M.jsx("strong",{children:"等待生成"}),M.jsx("p",{children:"先选择文件，之后选择普通转换或 AI 智能适配。"}),M.jsx("div",{className:"action-row",children:M.jsx("button",{className:"secondary-action ai-settings-action",type:"button",onClick:x,children:"AI 设置"})})]}),M.jsxs("div",{className:"idle-adapter-visual","aria-hidden":"true",children:[M.jsxs("div",{className:"adapter-source-card",children:[M.jsxs("div",{className:"source-topbar",children:[M.jsx("span",{}),M.jsx("span",{}),M.jsx("span",{})]}),M.jsx("div",{className:"source-block source-block-wide"}),M.jsx("div",{className:"source-block"}),M.jsx("div",{className:"source-block source-block-short"}),M.jsxs("div",{className:"source-media-row",children:[M.jsx("span",{}),M.jsx("span",{})]})]}),M.jsxs("div",{className:"adapter-slide-stack",children:[M.jsxs("div",{className:"adapter-slide adapter-slide-main",children:[M.jsx("span",{className:"slide-title"}),M.jsx("span",{className:"slide-body"}),M.jsx("span",{className:"slide-media"})]}),M.jsxs("div",{className:"adapter-slide adapter-slide-second",children:[M.jsx("span",{className:"slide-title"}),M.jsx("span",{className:"slide-body"})]}),M.jsxs("div",{className:"adapter-slide adapter-slide-third",children:[M.jsx("span",{className:"slide-title"}),M.jsx("span",{className:"slide-media"})]})]}),M.jsxs("div",{className:"adapter-edit-chips",children:[M.jsx("b",{children:"文本"}),M.jsx("b",{children:"媒体"}),M.jsx("b",{children:"版块"})]})]})]})}function yy({open:r,loaded:h,onClose:s,onConfirm:d}){return!r||!h?null:M.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:v=>{v.target===v.currentTarget&&s()},children:M.jsxs("section",{className:"ai-modal ai-adapt-confirm-modal",role:"dialog","aria-modal":"true","aria-labelledby":"aiAdaptConfirmTitle",children:[M.jsxs("header",{className:"ai-modal-header",children:[M.jsxs("div",{children:[M.jsx("span",{children:"AI 智能适配"}),M.jsx("h2",{id:"aiAdaptConfirmTitle",children:"确认让 AI 优化并修改这份 HTML 结构？"})]}),M.jsx("button",{className:"modal-close",type:"button",onClick:s,"aria-label":"关闭",children:"×"})]}),M.jsxs("div",{className:"ai-adapt-confirm-body",children:[M.jsx("p",{children:"接下来会把 HTML 结构摘要发送给你配置的 API。AI 生成修改方案后，本地代码会改 HTML：补页面结构、标记可编辑元素，并保留原资源路径。"}),M.jsxs("div",{className:"ai-adapt-confirm-list",children:[M.jsx("span",{children:"不会要求你输入提示词"}),M.jsx("span",{children:"AI 生成修改方案，由本地代码确定性应用"}),M.jsx("span",{children:"输出 AI 优化后并注入编辑器的 HTML ZIP"})]}),M.jsx("p",{className:"ai-refresh-note",children:"复杂 HTML 生成后建议打开编辑器检查页数、顺序和可编辑区域。"})]}),M.jsxs("footer",{className:"ai-modal-actions",children:[M.jsx("button",{className:"secondary-action",type:"button",onClick:s,children:"取消"}),M.jsx("button",{className:"primary-action",type:"button",onClick:d,children:"确认并开始适配"})]})]})})}function by({open:r,config:h,aiState:s,message:d,onClose:v,onConfigChange:u,onProviderChange:p,onClearKey:f,onTest:y}){const[S,B]=ot.useState(!1),T=_r(h.provider).modelOptions,D=T.includes(h.model)?h.model:"__custom__",k=D==="__custom__";return r?M.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:_=>{_.target===_.currentTarget&&v()},children:M.jsxs("section",{className:"ai-modal",role:"dialog","aria-modal":"true","aria-labelledby":"aiSettingsTitle",children:[M.jsxs("header",{className:"ai-modal-header",children:[M.jsxs("div",{children:[M.jsx("span",{children:"AI 设置"}),M.jsx("h2",{id:"aiSettingsTitle",children:"配置智能适配 API"})]}),M.jsx("button",{className:"modal-close",type:"button",onClick:v,"aria-label":"关闭",children:"×"})]}),M.jsxs("div",{className:"ai-settings",children:[M.jsxs("label",{children:[M.jsx("span",{children:"Provider"}),M.jsx("select",{value:h.provider,onChange:_=>p(_.target.value),children:kr.map(_=>M.jsx("option",{value:_.id,children:_.label},_.id))})]}),M.jsxs("label",{children:[M.jsx("span",{children:"API Base URL"}),M.jsx("input",{value:h.baseUrl,onChange:_=>u({baseUrl:_.target.value}),placeholder:"https://api.example.com"})]}),M.jsxs("label",{children:[M.jsx("span",{children:"API Path"}),M.jsx("input",{value:h.path,onChange:_=>u({path:_.target.value}),placeholder:"/v1/chat/completions"})]}),M.jsxs("label",{children:[M.jsx("span",{children:"API Key"}),M.jsxs("div",{className:"secret-input",children:[M.jsx("input",{value:h.apiKey,type:S?"text":"password",onChange:_=>u({apiKey:_.target.value}),placeholder:"sk-..."}),M.jsx("button",{type:"button",onClick:()=>B(_=>!_),children:S?"隐藏":"显示"})]})]}),M.jsxs("label",{children:[M.jsx("span",{children:"Model"}),M.jsxs("select",{value:D,onChange:_=>{const x=_.target.value;u({model:x==="__custom__"?"":x})},children:[T.map(_=>M.jsx("option",{value:_,children:_},_)),M.jsx("option",{value:"__custom__",children:"自定义模型..."})]})]}),k?M.jsxs("label",{children:[M.jsx("span",{children:"自定义 Model"}),M.jsx("input",{value:h.model,onChange:_=>u({model:_.target.value}),placeholder:"输入服务商提供的模型名"})]}):null,M.jsxs("label",{children:[M.jsx("span",{children:"Proxy URL"}),M.jsx("input",{value:h.proxyUrl,onChange:_=>u({proxyUrl:_.target.value}),placeholder:"可选，接口不支持网页直连时使用"})]}),M.jsxs("div",{className:"ai-settings-row",children:[M.jsxs("label",{className:"checkbox-label",children:[M.jsx("input",{type:"checkbox",checked:h.stream,onChange:_=>u({stream:_.target.checked})}),M.jsx("span",{children:"Stream"})]}),M.jsxs("label",{children:[M.jsx("span",{children:"Storage"}),M.jsxs("select",{value:h.storage,onChange:_=>u({storage:_.target.value}),children:[M.jsx("option",{value:"none",children:"不保存"}),M.jsx("option",{value:"session",children:"本次会话"}),M.jsx("option",{value:"local",children:"本机长期"})]})]})]}),h.storage==="local"?M.jsx("p",{className:"ai-storage-note",children:"API Key 将保存在当前浏览器，请只在可信设备上使用。"}):null,M.jsx("p",{className:`ai-settings-message ${s==="error"?"error":""}${s==="success"?" success":""}`,children:d})]}),M.jsxs("footer",{className:"ai-modal-actions",children:[M.jsx("button",{className:"secondary-action",type:"button",onClick:f,children:"清除 API Key"}),M.jsx("button",{className:"secondary-action",type:"button",onClick:y,children:s==="testing"?"测试中...":"测试连接"}),M.jsx("button",{className:"primary-action",type:"button",onClick:v,children:"完成"})]})]})}):null}function br({title:r,children:h,defaultOpen:s=!1}){return M.jsxs("details",{className:"faq-item",open:s,children:[M.jsx("summary",{children:r}),M.jsx("p",{children:h})]})}function Zf(r){const h=r.files.reduce((s,d)=>s+d.size,0);return`${ky(r.kind)} · ${r.files.length} 个文件 · ${Sy(h)}`}function $o(r){const h=r.split("/").pop()||r;return h.length<=42?h:`${h.slice(0,18)}...${h.slice(-18)}`}function xy(r,h){const s=["read","collect","detect","rewrite","runtime","zip","done"];return s.indexOf(r)>=s.indexOf(h)||r==="done"}function _f(r,h,s){const d=Math.max(0,Math.min(100,r));return h+d/100*(s-h)}function Sy(r){if(r<1024)return`${r} B`;const h=r/1024;return h<1024?`${h.toFixed(1)} KB`:`${(h/1024).toFixed(2)} MB`}function ky(r){return r==="zip"?"ZIP 压缩包":r==="html"?"单个 HTML":"文件夹"}function ln(r){return r==="loading"||r==="converting"}function wy(r,h){return h?.blob?"可以下载了":r==="ready"?"请选择处理方式":r==="review"?"需要确认":"实时处理"}function _y(r){return r.status==="unsupported"?"普通检测不稳定，建议先用 AI 智能适配。":r.confidence<.72?"检测置信度不高，建议先用 AI 智能适配。":r.messages[0]||"检测置信度较高，可直接转换，也可先适配。"}function Ey(r){const h=r.map(s=>/媒体|img|video|svg|canvas|editableMediaSelectors/i.test(s)?"媒体元素识别不充分，生成后建议检查图片、视频或图形是否可选中。":/stage|slidesWrapper|舞台容器|selector/i.test(s)?"页面容器或页面边界存在不确定性，生成后建议检查页数和顺序。":/nth-of-type|class|匹配|唯一|候选/i.test(s)?"部分元素缺少稳定标识，生成后建议检查可编辑区域是否选对。":Ay(s));return Array.from(new Set(h))}function Ay(r){const h=r.replace(/\s+/g," ").trim();return h.length<=56?h:`${h.slice(0,52)}...`}const Ty=[{key:"read",label:"读取"},{key:"collect",label:"收集"},{key:"detect",label:"检测"},{key:"rewrite",label:"注入"},{key:"zip",label:"打包"}],Ef=document.getElementById("root");Ef&&pg.createRoot(Ef).render(M.jsx(my,{}));
