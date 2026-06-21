(function(){const j=document.createElement("link").relList;if(j&&j.supports&&j.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))h(w);new MutationObserver(w=>{for(const v of w)if(v.type==="childList")for(const y of v.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&h(y)}).observe(document,{childList:!0,subtree:!0});function d(w){const v={};return w.integrity&&(v.integrity=w.integrity),w.referrerPolicy&&(v.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?v.credentials="include":w.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function h(w){if(w.ep)return;w.ep=!0;const v=d(w);fetch(w.href,v)}})();var sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _p(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var Cs={exports:{}},Xa={};var Hh;function wp(){if(Hh)return Xa;Hh=1;var _=Symbol.for("react.transitional.element"),j=Symbol.for("react.fragment");function d(h,w,v){var y=null;if(v!==void 0&&(y=""+v),w.key!==void 0&&(y=""+w.key),"key"in w){v={};for(var u in w)u!=="key"&&(v[u]=w[u])}else v=w;return w=v.ref,{$$typeof:_,type:h,key:y,ref:w!==void 0?w:null,props:v}}return Xa.Fragment=j,Xa.jsx=d,Xa.jsxs=d,Xa}var Uh;function kp(){return Uh||(Uh=1,Cs.exports=wp()),Cs.exports}var ue=kp(),As={exports:{}},Ae={};var jh;function Ep(){if(jh)return Ae;jh=1;var _=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),y=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),D=Symbol.iterator;function b(f){return f===null||typeof f!="object"?null:(f=D&&f[D]||f["@@iterator"],typeof f=="function"?f:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p=Object.assign,T={};function x(f,C,te){this.props=f,this.context=C,this.refs=T,this.updater=te||A}x.prototype.isReactComponent={},x.prototype.setState=function(f,C){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,C,"setState")},x.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function M(){}M.prototype=x.prototype;function N(f,C,te){this.props=f,this.context=C,this.refs=T,this.updater=te||A}var I=N.prototype=new M;I.constructor=N,p(I,x.prototype),I.isPureReactComponent=!0;var U=Array.isArray;function ne(){}var Z={H:null,A:null,T:null,S:null},de=Object.prototype.hasOwnProperty;function J(f,C,te){var W=te.ref;return{$$typeof:_,type:f,key:C,ref:W!==void 0?W:null,props:te}}function he(f,C){return J(f.type,C,f.props)}function be(f){return typeof f=="object"&&f!==null&&f.$$typeof===_}function E(f){var C={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(te){return C[te]})}var K=/\/+/g;function s(f,C){return typeof f=="object"&&f!==null&&f.key!=null?E(""+f.key):C.toString(36)}function $(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(ne,ne):(f.status="pending",f.then(function(C){f.status==="pending"&&(f.status="fulfilled",f.value=C)},function(C){f.status==="pending"&&(f.status="rejected",f.reason=C)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function q(f,C,te,W,ie){var Se=typeof f;(Se==="undefined"||Se==="boolean")&&(f=null);var Ce=!1;if(f===null)Ce=!0;else switch(Se){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(f.$$typeof){case _:case j:Ce=!0;break;case B:return Ce=f._init,q(Ce(f._payload),C,te,W,ie)}}if(Ce)return ie=ie(f),Ce=W===""?"."+s(f,0):W,U(ie)?(te="",Ce!=null&&(te=Ce.replace(K,"$&/")+"/"),q(ie,C,te,"",function(Je){return Je})):ie!=null&&(be(ie)&&(ie=he(ie,te+(ie.key==null||f&&f.key===ie.key?"":(""+ie.key).replace(K,"$&/")+"/")+Ce)),C.push(ie)),1;Ce=0;var Te=W===""?".":W+":";if(U(f))for(var ke=0;ke<f.length;ke++)W=f[ke],Se=Te+s(W,ke),Ce+=q(W,C,te,Se,ie);else if(ke=b(f),typeof ke=="function")for(f=ke.call(f),ke=0;!(W=f.next()).done;)W=W.value,Se=Te+s(W,ke++),Ce+=q(W,C,te,Se,ie);else if(Se==="object"){if(typeof f.then=="function")return q($(f),C,te,W,ie);throw C=String(f),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function F(f,C,te){if(f==null)return f;var W=[],ie=0;return q(f,W,"","",function(Se){return C.call(te,Se,ie++)}),W}function me(f){if(f._status===-1){var C=f._result;C=C(),C.then(function(te){(f._status===0||f._status===-1)&&(f._status=1,f._result=te)},function(te){(f._status===0||f._status===-1)&&(f._status=2,f._result=te)}),f._status===-1&&(f._status=0,f._result=C)}if(f._status===1)return f._result.default;throw f._result}var le=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},ve={map:F,forEach:function(f,C,te){F(f,function(){C.apply(this,arguments)},te)},count:function(f){var C=0;return F(f,function(){C++}),C},toArray:function(f){return F(f,function(C){return C})||[]},only:function(f){if(!be(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return Ae.Activity=S,Ae.Children=ve,Ae.Component=x,Ae.Fragment=d,Ae.Profiler=w,Ae.PureComponent=N,Ae.StrictMode=h,Ae.Suspense=m,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,Ae.__COMPILER_RUNTIME={__proto__:null,c:function(f){return Z.H.useMemoCache(f)}},Ae.cache=function(f){return function(){return f.apply(null,arguments)}},Ae.cacheSignal=function(){return null},Ae.cloneElement=function(f,C,te){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var W=p({},f.props),ie=f.key;if(C!=null)for(Se in C.key!==void 0&&(ie=""+C.key),C)!de.call(C,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&C.ref===void 0||(W[Se]=C[Se]);var Se=arguments.length-2;if(Se===1)W.children=te;else if(1<Se){for(var Ce=Array(Se),Te=0;Te<Se;Te++)Ce[Te]=arguments[Te+2];W.children=Ce}return J(f.type,ie,W)},Ae.createContext=function(f){return f={$$typeof:y,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:v,_context:f},f},Ae.createElement=function(f,C,te){var W,ie={},Se=null;if(C!=null)for(W in C.key!==void 0&&(Se=""+C.key),C)de.call(C,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ie[W]=C[W]);var Ce=arguments.length-2;if(Ce===1)ie.children=te;else if(1<Ce){for(var Te=Array(Ce),ke=0;ke<Ce;ke++)Te[ke]=arguments[ke+2];ie.children=Te}if(f&&f.defaultProps)for(W in Ce=f.defaultProps,Ce)ie[W]===void 0&&(ie[W]=Ce[W]);return J(f,Se,ie)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(f){return{$$typeof:u,render:f}},Ae.isValidElement=be,Ae.lazy=function(f){return{$$typeof:B,_payload:{_status:-1,_result:f},_init:me}},Ae.memo=function(f,C){return{$$typeof:g,type:f,compare:C===void 0?null:C}},Ae.startTransition=function(f){var C=Z.T,te={};Z.T=te;try{var W=f(),ie=Z.S;ie!==null&&ie(te,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(ne,le)}catch(Se){le(Se)}finally{C!==null&&te.types!==null&&(C.types=te.types),Z.T=C}},Ae.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},Ae.use=function(f){return Z.H.use(f)},Ae.useActionState=function(f,C,te){return Z.H.useActionState(f,C,te)},Ae.useCallback=function(f,C){return Z.H.useCallback(f,C)},Ae.useContext=function(f){return Z.H.useContext(f)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(f,C){return Z.H.useDeferredValue(f,C)},Ae.useEffect=function(f,C){return Z.H.useEffect(f,C)},Ae.useEffectEvent=function(f){return Z.H.useEffectEvent(f)},Ae.useId=function(){return Z.H.useId()},Ae.useImperativeHandle=function(f,C,te){return Z.H.useImperativeHandle(f,C,te)},Ae.useInsertionEffect=function(f,C){return Z.H.useInsertionEffect(f,C)},Ae.useLayoutEffect=function(f,C){return Z.H.useLayoutEffect(f,C)},Ae.useMemo=function(f,C){return Z.H.useMemo(f,C)},Ae.useOptimistic=function(f,C){return Z.H.useOptimistic(f,C)},Ae.useReducer=function(f,C,te){return Z.H.useReducer(f,C,te)},Ae.useRef=function(f){return Z.H.useRef(f)},Ae.useState=function(f){return Z.H.useState(f)},Ae.useSyncExternalStore=function(f,C,te){return Z.H.useSyncExternalStore(f,C,te)},Ae.useTransition=function(){return Z.H.useTransition()},Ae.version="19.2.7",Ae}var Ih;function Us(){return Ih||(Ih=1,As.exports=Ep()),As.exports}var an=Us(),zs={exports:{}},Va={},Ms={exports:{}},Bs={};var qh;function Tp(){return qh||(qh=1,(function(_){function j(q,F){var me=q.length;q.push(F);e:for(;0<me;){var le=me-1>>>1,ve=q[le];if(0<w(ve,F))q[le]=F,q[me]=ve,me=le;else break e}}function d(q){return q.length===0?null:q[0]}function h(q){if(q.length===0)return null;var F=q[0],me=q.pop();if(me!==F){q[0]=me;e:for(var le=0,ve=q.length,f=ve>>>1;le<f;){var C=2*(le+1)-1,te=q[C],W=C+1,ie=q[W];if(0>w(te,me))W<ve&&0>w(ie,te)?(q[le]=ie,q[W]=me,le=W):(q[le]=te,q[C]=me,le=C);else if(W<ve&&0>w(ie,me))q[le]=ie,q[W]=me,le=W;else break e}}return F}function w(q,F){var me=q.sortIndex-F.sortIndex;return me!==0?me:q.id-F.id}if(_.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;_.unstable_now=function(){return v.now()}}else{var y=Date,u=y.now();_.unstable_now=function(){return y.now()-u}}var m=[],g=[],B=1,S=null,D=3,b=!1,A=!1,p=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function I(q){for(var F=d(g);F!==null;){if(F.callback===null)h(g);else if(F.startTime<=q)h(g),F.sortIndex=F.expirationTime,j(m,F);else break;F=d(g)}}function U(q){if(p=!1,I(q),!A)if(d(m)!==null)A=!0,ne||(ne=!0,E());else{var F=d(g);F!==null&&$(U,F.startTime-q)}}var ne=!1,Z=-1,de=5,J=-1;function he(){return T?!0:!(_.unstable_now()-J<de)}function be(){if(T=!1,ne){var q=_.unstable_now();J=q;var F=!0;try{e:{A=!1,p&&(p=!1,M(Z),Z=-1),b=!0;var me=D;try{t:{for(I(q),S=d(m);S!==null&&!(S.expirationTime>q&&he());){var le=S.callback;if(typeof le=="function"){S.callback=null,D=S.priorityLevel;var ve=le(S.expirationTime<=q);if(q=_.unstable_now(),typeof ve=="function"){S.callback=ve,I(q),F=!0;break t}S===d(m)&&h(m),I(q)}else h(m);S=d(m)}if(S!==null)F=!0;else{var f=d(g);f!==null&&$(U,f.startTime-q),F=!1}}break e}finally{S=null,D=me,b=!1}F=void 0}}finally{F?E():ne=!1}}}var E;if(typeof N=="function")E=function(){N(be)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,s=K.port2;K.port1.onmessage=be,E=function(){s.postMessage(null)}}else E=function(){x(be,0)};function $(q,F){Z=x(function(){q(_.unstable_now())},F)}_.unstable_IdlePriority=5,_.unstable_ImmediatePriority=1,_.unstable_LowPriority=4,_.unstable_NormalPriority=3,_.unstable_Profiling=null,_.unstable_UserBlockingPriority=2,_.unstable_cancelCallback=function(q){q.callback=null},_.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<q?Math.floor(1e3/q):5},_.unstable_getCurrentPriorityLevel=function(){return D},_.unstable_next=function(q){switch(D){case 1:case 2:case 3:var F=3;break;default:F=D}var me=D;D=F;try{return q()}finally{D=me}},_.unstable_requestPaint=function(){T=!0},_.unstable_runWithPriority=function(q,F){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var me=D;D=q;try{return F()}finally{D=me}},_.unstable_scheduleCallback=function(q,F,me){var le=_.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?le+me:le):me=le,q){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=me+ve,q={id:B++,callback:F,priorityLevel:q,startTime:me,expirationTime:ve,sortIndex:-1},me>le?(q.sortIndex=me,j(g,q),d(m)===null&&q===d(g)&&(p?(M(Z),Z=-1):p=!0,$(U,me-le))):(q.sortIndex=ve,j(m,q),A||b||(A=!0,ne||(ne=!0,E()))),q},_.unstable_shouldYield=he,_.unstable_wrapCallback=function(q){var F=D;return function(){var me=D;D=F;try{return q.apply(this,arguments)}finally{D=me}}}})(Bs)),Bs}var Fh;function Cp(){return Fh||(Fh=1,Ms.exports=Tp()),Ms.exports}var Ds={exports:{}},vt={};var Gh;function Ap(){if(Gh)return vt;Gh=1;var _=Us();function j(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var B=2;B<arguments.length;B++)g+="&args[]="+encodeURIComponent(arguments[B])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var h={d:{f:d,r:function(){throw Error(j(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},w=Symbol.for("react.portal");function v(m,g,B){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:S==null?null:""+S,children:m,containerInfo:g,implementation:B}}var y=_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,vt.createPortal=function(m,g){var B=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(j(299));return v(m,g,null,B)},vt.flushSync=function(m){var g=y.T,B=h.p;try{if(y.T=null,h.p=2,m)return m()}finally{y.T=g,h.p=B,h.d.f()}},vt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,h.d.C(m,g))},vt.prefetchDNS=function(m){typeof m=="string"&&h.d.D(m)},vt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var B=g.as,S=u(B,g.crossOrigin),D=typeof g.integrity=="string"?g.integrity:void 0,b=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;B==="style"?h.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:D,fetchPriority:b}):B==="script"&&h.d.X(m,{crossOrigin:S,integrity:D,fetchPriority:b,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},vt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var B=u(g.as,g.crossOrigin);h.d.M(m,{crossOrigin:B,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&h.d.M(m)},vt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var B=g.as,S=u(B,g.crossOrigin);h.d.L(m,B,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},vt.preloadModule=function(m,g){if(typeof m=="string")if(g){var B=u(g.as,g.crossOrigin);h.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:B,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else h.d.m(m)},vt.requestFormReset=function(m){h.d.r(m)},vt.unstable_batchedUpdates=function(m,g){return m(g)},vt.useFormState=function(m,g,B){return y.H.useFormState(m,g,B)},vt.useFormStatus=function(){return y.H.useHostTransitionStatus()},vt.version="19.2.7",vt}var Yh;function zp(){if(Yh)return Ds.exports;Yh=1;function _(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_)}catch(j){console.error(j)}}return _(),Ds.exports=Ap(),Ds.exports}var Zh;function Mp(){if(Zh)return Va;Zh=1;var _=Cp(),j=Us(),d=zp();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function v(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function u(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(v(e)!==e)throw Error(h(188))}function g(e){var t=e.alternate;if(!t){if(t=v(e),t===null)throw Error(h(188));return t!==e?null:e}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var l=a.alternate;if(l===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===n)return m(a),e;if(l===i)return m(a),t;l=l.sibling}throw Error(h(188))}if(n.return!==i.return)n=a,i=l;else{for(var r=!1,c=a.child;c;){if(c===n){r=!0,n=a,i=l;break}if(c===i){r=!0,i=a,n=l;break}c=c.sibling}if(!r){for(c=l.child;c;){if(c===n){r=!0,n=l,i=a;break}if(c===i){r=!0,i=l,n=a;break}c=c.sibling}if(!r)throw Error(h(189))}}if(n.alternate!==i)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?e:t}function B(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=B(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,D=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),N=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),be=Symbol.iterator;function E(e){return e===null||typeof e!="object"?null:(e=be&&e[be]||e["@@iterator"],typeof e=="function"?e:null)}var K=Symbol.for("react.client.reference");function s(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===K?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case x:return"Profiler";case T:return"StrictMode";case U:return"Suspense";case ne:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case N:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:s(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return s(e(t))}catch{}}return null}var $=Array.isArray,q=j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},le=[],ve=-1;function f(e){return{current:e}}function C(e){0>ve||(e.current=le[ve],le[ve]=null,ve--)}function te(e,t){ve++,le[ve]=e.current,e.current=t}var W=f(null),ie=f(null),Se=f(null),Ce=f(null);function Te(e,t){switch(te(Se,t),te(ie,e),te(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?rh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=rh(t),e=oh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(W),te(W,e)}function ke(){C(W),C(ie),C(Se)}function Je(e){e.memoizedState!==null&&te(Ce,e);var t=W.current,n=oh(t,e.type);t!==n&&(te(ie,e),te(W,n))}function Ke(e){ie.current===e&&(C(W),C(ie)),Ce.current===e&&(C(Ce),Fa._currentValue=me)}var bt,xt;function o(e){if(bt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bt=t&&t[1]||"",xt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bt+e+xt}var re=!1;function P(e,t){if(!e||re)return"";re=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(Q){var V=Q}Reflect.construct(e,[],oe)}else{try{oe.call()}catch(Q){V=Q}e.call(oe.prototype)}}else{try{throw Error()}catch(Q){V=Q}(oe=e())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(Q){if(Q&&V&&typeof Q.stack=="string")return[Q.stack,V.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),r=l[0],c=l[1];if(r&&c){var O=r.split(`
`),Y=c.split(`
`);for(a=i=0;i<O.length&&!O[i].includes("DetermineComponentFrameRoot");)i++;for(;a<Y.length&&!Y[a].includes("DetermineComponentFrameRoot");)a++;if(i===O.length||a===Y.length)for(i=O.length-1,a=Y.length-1;1<=i&&0<=a&&O[i]!==Y[a];)a--;for(;1<=i&&0<=a;i--,a--)if(O[i]!==Y[a]){if(i!==1||a!==1)do if(i--,a--,0>a||O[i]!==Y[a]){var ee=`
`+O[i].replace(" at new "," at ");return e.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",e.displayName)),ee}while(1<=i&&0<=a);break}}}finally{re=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?o(n):""}function z(e,t){switch(e.tag){case 26:case 27:case 5:return o(e.type);case 16:return o("Lazy");case 13:return e.child!==t&&t!==null?o("Suspense Fallback"):o("Suspense");case 19:return o("SuspenseList");case 0:case 15:return P(e.type,!1);case 11:return P(e.type.render,!1);case 1:return P(e.type,!0);case 31:return o("Activity");default:return""}}function k(e){try{var t="",n=null;do t+=z(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var L=Object.prototype.hasOwnProperty,se=_.unstable_scheduleCallback,ce=_.unstable_cancelCallback,X=_.unstable_shouldYield,fe=_.unstable_requestPaint,ge=_.unstable_now,pe=_.unstable_getCurrentPriorityLevel,_e=_.unstable_ImmediatePriority,Ie=_.unstable_UserBlockingPriority,Be=_.unstable_NormalPriority,St=_.unstable_LowPriority,wn=_.unstable_IdlePriority,Lt=_.log,Kn=_.unstable_setDisableYieldValue,Xe=null,dt=null;function Ht(e){if(typeof Lt=="function"&&Kn(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(Xe,e)}catch{}}var $e=Math.clz32?Math.clz32:fr,Ka=Math.log,hr=Math.LN2;function fr(e){return e>>>=0,e===0?32:31-(Ka(e)/hr|0)|0}var mi=256,Qn=262144,Wt=4194304;function Ut(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qa(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,l=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var c=i&134217727;return c!==0?(i=c&~l,i!==0?a=Ut(i):(r&=c,r!==0?a=Ut(r):n||(n=c&~e,n!==0&&(a=Ut(n))))):(c=i&~l,c!==0?a=Ut(c):r!==0?a=Ut(r):n||(n=i&~e,n!==0&&(a=Ut(n)))),a===0?0:t!==0&&t!==a&&(t&l)===0&&(l=a&-a,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:a}function ta(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function df(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qs(){var e=Wt;return Wt<<=1,(Wt&62914560)===0&&(Wt=4194304),e}function mr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cf(e,t,n,i,a,l){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var c=e.entanglements,O=e.expirationTimes,Y=e.hiddenUpdates;for(n=r&~n;0<n;){var ee=31-$e(n),oe=1<<ee;c[ee]=0,O[ee]=-1;var V=Y[ee];if(V!==null)for(Y[ee]=null,ee=0;ee<V.length;ee++){var Q=V[ee];Q!==null&&(Q.lane&=-536870913)}n&=~oe}i!==0&&Fs(e,i,0),l!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=l&~(r&~t))}function Fs(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-$e(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Gs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-$e(n),a=1<<i;a&t|e[i]&t&&(e[i]|=t),n&=~a}}function Ys(e,t){var n=t&-t;return n=(n&42)!==0?1:pr(n),(n&(e.suspendedLanes|t))!==0?0:n}function pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zs(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Mh(e.type))}function Xs(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var kn=Math.random().toString(36).slice(2),ht="__reactFiber$"+kn,_t="__reactProps$"+kn,pi="__reactContainer$"+kn,vr="__reactEvents$"+kn,uf="__reactListeners$"+kn,hf="__reactHandles$"+kn,Vs="__reactResources$"+kn,ia="__reactMarker$"+kn;function yr(e){delete e[ht],delete e[_t],delete e[vr],delete e[uf],delete e[hf]}function gi(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pi]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mh(e);e!==null;){if(n=e[ht])return n;e=mh(e)}return t}e=n,n=e.parentNode}return null}function vi(e){if(e=e[ht]||e[pi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function aa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function yi(e){var t=e[Vs];return t||(t=e[Vs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ct(e){e[ia]=!0}var Ks=new Set,Qs={};function Pn(e,t){bi(e,t),bi(e+"Capture",t)}function bi(e,t){for(Qs[e]=t,e=0;e<t.length;e++)Ks.add(t[e])}var ff=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ps={},Js={};function mf(e){return L.call(Js,e)?!0:L.call(Ps,e)?!1:ff.test(e)?Js[e]=!0:(Ps[e]=!0,!1)}function Pa(e,t,n){if(mf(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ja(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ln(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ws(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pf(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,l=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,l.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function br(e){if(!e._valueTracker){var t=Ws(e)?"checked":"value";e._valueTracker=pf(e,t,""+e[t])}}function $s(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ws(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Wa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gf=/[\n"\\]/g;function It(e){return e.replace(gf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function xr(e,t,n,i,a,l,r,c){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Sr(e,r,jt(t)):n!=null?Sr(e,r,jt(n)):i!=null&&e.removeAttribute("value"),a==null&&l!=null&&(e.defaultChecked=!!l),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+jt(c):e.removeAttribute("name")}function ed(e,t,n,i,a,l,r,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){br(e);return}n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,c||t===e.value||(e.value=t),e.defaultValue=t}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=c?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),br(e)}function Sr(e,t,n){t==="number"&&Wa(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xi(e,t,n,i){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&i&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,i&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function td(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function nd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(h(92));if($(i)){if(1<i.length)throw Error(h(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),br(e)}function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var vf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function id(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||vf.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ad(e,t,n){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var a in t)i=t[a],t.hasOwnProperty(a)&&n[a]!==i&&id(e,a,i)}else for(var l in t)t.hasOwnProperty(l)&&id(e,l,t[l])}function _r(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $a(e){return bf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function rn(){}var wr=null;function kr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,wi=null;function ld(e){var t=vi(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;e:switch(e=t.stateNode,t.type){case"input":if(xr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+It(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=i[_t]||null;if(!a)throw Error(h(90));xr(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&$s(i)}break e;case"textarea":td(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xi(e,!!n.multiple,t,!1)}}}var Er=!1;function rd(e,t,n){if(Er)return e(t,n);Er=!0;try{var i=e(t);return i}finally{if(Er=!1,(_i!==null||wi!==null)&&(Il(),_i&&(t=_i,e=wi,wi=_i=null,ld(t),e)))for(t=0;t<e.length;t++)ld(e[t])}}function la(e,t){var n=e.stateNode;if(n===null)return null;var i=n[_t]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(h(231,t,typeof n));return n}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tr=!1;if(on)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){Tr=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{Tr=!1}var En=null,Cr=null,el=null;function od(){if(el)return el;var e,t=Cr,n=t.length,i,a="value"in En?En.value:En.textContent,l=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===a[l-i];i++);return el=a.slice(e,1<i?1-i:void 0)}function tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function sd(){return!1}function wt(e){function t(n,i,a,l,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?nl:sd,this.isPropagationStopped=sd,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=wt(Jn),oa=S({},Jn,{view:0,detail:0}),xf=wt(oa),Ar,zr,sa,al=S({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Br,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sa&&(sa&&e.type==="mousemove"?(Ar=e.screenX-sa.screenX,zr=e.screenY-sa.screenY):zr=Ar=0,sa=e),Ar)},movementY:function(e){return"movementY"in e?e.movementY:zr}}),dd=wt(al),Sf=S({},al,{dataTransfer:0}),_f=wt(Sf),wf=S({},oa,{relatedTarget:0}),Mr=wt(wf),kf=S({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ef=wt(kf),Tf=S({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cf=wt(Tf),Af=S({},Jn,{data:0}),cd=wt(Af),zf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Df(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bf[e])?!!t[e]:!1}function Br(){return Df}var Of=S({},oa,{key:function(e){if(e.key){var t=zf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Br,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nf=wt(Of),Rf=S({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ud=wt(Rf),Lf=S({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Br}),Hf=wt(Lf),Uf=S({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jf=wt(Uf),If=S({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qf=wt(If),Ff=S({},Jn,{newState:0,oldState:0}),Gf=wt(Ff),Yf=[9,13,27,32],Dr=on&&"CompositionEvent"in window,da=null;on&&"documentMode"in document&&(da=document.documentMode);var Zf=on&&"TextEvent"in window&&!da,hd=on&&(!Dr||da&&8<da&&11>=da),fd=" ",md=!1;function pd(e,t){switch(e){case"keyup":return Yf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ki=!1;function Xf(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(md=!0,fd);case"textInput":return e=t.data,e===fd&&md?null:e;default:return null}}function Vf(e,t){if(ki)return e==="compositionend"||!Dr&&pd(e,t)?(e=od(),el=Cr=En=null,ki=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hd&&t.locale!=="ko"?null:t.data;default:return null}}var Kf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kf[e.type]:t==="textarea"}function yd(e,t,n,i){_i?wi?wi.push(i):wi=[i]:_i=i,t=Vl(t,"onChange"),0<t.length&&(n=new il("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ca=null,ua=null;function Qf(e){eh(e,0)}function ll(e){var t=aa(e);if($s(t))return e}function bd(e,t){if(e==="change")return t}var xd=!1;if(on){var Or;if(on){var Nr="oninput"in document;if(!Nr){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Nr=typeof Sd.oninput=="function"}Or=Nr}else Or=!1;xd=Or&&(!document.documentMode||9<document.documentMode)}function _d(){ca&&(ca.detachEvent("onpropertychange",wd),ua=ca=null)}function wd(e){if(e.propertyName==="value"&&ll(ua)){var t=[];yd(t,ua,e,kr(e)),rd(Qf,t)}}function Pf(e,t,n){e==="focusin"?(_d(),ca=t,ua=n,ca.attachEvent("onpropertychange",wd)):e==="focusout"&&_d()}function Jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(ua)}function Wf(e,t){if(e==="click")return ll(t)}function $f(e,t){if(e==="input"||e==="change")return ll(t)}function em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:em;function ha(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!L.call(t,a)||!zt(e[a],t[a]))return!1}return!0}function kd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var n=kd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kd(n)}}function Td(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Td(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wa(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wa(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var tm=on&&"documentMode"in document&&11>=document.documentMode,Ei=null,Lr=null,fa=null,Hr=!1;function Ad(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||Ei==null||Ei!==Wa(i)||(i=Ei,"selectionStart"in i&&Rr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fa&&ha(fa,i)||(fa=i,i=Vl(Lr,"onSelect"),0<i.length&&(t=new il("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Ei)))}function Wn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ti={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionrun:Wn("Transition","TransitionRun"),transitionstart:Wn("Transition","TransitionStart"),transitioncancel:Wn("Transition","TransitionCancel"),transitionend:Wn("Transition","TransitionEnd")},Ur={},zd={};on&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function $n(e){if(Ur[e])return Ur[e];if(!Ti[e])return e;var t=Ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zd)return Ur[e]=t[n];return e}var Md=$n("animationend"),Bd=$n("animationiteration"),Dd=$n("animationstart"),nm=$n("transitionrun"),im=$n("transitionstart"),am=$n("transitioncancel"),Od=$n("transitionend"),Nd=new Map,jr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jr.push("scrollEnd");function Qt(e,t){Nd.set(e,t),Pn(t,[e])}var rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qt=[],Ci=0,Ir=0;function ol(){for(var e=Ci,t=Ir=Ci=0;t<e;){var n=qt[t];qt[t++]=null;var i=qt[t];qt[t++]=null;var a=qt[t];qt[t++]=null;var l=qt[t];if(qt[t++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}l!==0&&Rd(n,a,l)}}function sl(e,t,n,i){qt[Ci++]=e,qt[Ci++]=t,qt[Ci++]=n,qt[Ci++]=i,Ir|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function qr(e,t,n,i){return sl(e,t,n,i),dl(e)}function ei(e,t){return sl(e,null,null,t),dl(e)}function Rd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var a=!1,l=e.return;l!==null;)l.childLanes|=n,i=l.alternate,i!==null&&(i.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(a=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,a&&t!==null&&(a=31-$e(n),e=l.hiddenUpdates,i=e[a],i===null?e[a]=[t]:i.push(t),t.lane=n|536870912),l):null}function dl(e){if(50<Ra)throw Ra=0,Jo=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ai={};function lm(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,i){return new lm(e,t,n,i)}function Fr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sn(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ld(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cl(e,t,n,i,a,l){var r=0;if(i=e,typeof e=="function")Fr(e)&&(r=1);else if(typeof e=="string")r=cp(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=Mt(31,n,t,a),e.elementType=J,e.lanes=l,e;case p:return ti(n.children,a,l,t);case T:r=8,a|=24;break;case x:return e=Mt(12,n,t,a|2),e.elementType=x,e.lanes=l,e;case U:return e=Mt(13,n,t,a),e.elementType=U,e.lanes=l,e;case ne:return e=Mt(19,n,t,a),e.elementType=ne,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:r=10;break e;case M:r=9;break e;case I:r=11;break e;case Z:r=14;break e;case de:r=16,i=null;break e}r=29,n=Error(h(130,e===null?"null":typeof e,"")),i=null}return t=Mt(r,n,t,a),t.elementType=e,t.type=i,t.lanes=l,t}function ti(e,t,n,i){return e=Mt(7,e,i,t),e.lanes=n,e}function Gr(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function Hd(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function Yr(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ud=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var n=Ud.get(e);return n!==void 0?n:(t={value:e,source:t,stack:k(t)},Ud.set(e,t),t)}return{value:e,source:t,stack:k(t)}}var zi=[],Mi=0,ul=null,ma=0,Gt=[],Yt=0,Tn=null,$t=1,en="";function dn(e,t){zi[Mi++]=ma,zi[Mi++]=ul,ul=e,ma=t}function jd(e,t,n){Gt[Yt++]=$t,Gt[Yt++]=en,Gt[Yt++]=Tn,Tn=e;var i=$t;e=en;var a=32-$e(i)-1;i&=~(1<<a),n+=1;var l=32-$e(t)+a;if(30<l){var r=a-a%5;l=(i&(1<<r)-1).toString(32),i>>=r,a-=r,$t=1<<32-$e(t)+a|n<<a|i,en=l+e}else $t=1<<l|n<<a|i,en=e}function Zr(e){e.return!==null&&(dn(e,1),jd(e,1,0))}function Xr(e){for(;e===ul;)ul=zi[--Mi],zi[Mi]=null,ma=zi[--Mi],zi[Mi]=null;for(;e===Tn;)Tn=Gt[--Yt],Gt[Yt]=null,en=Gt[--Yt],Gt[Yt]=null,$t=Gt[--Yt],Gt[Yt]=null}function Id(e,t){Gt[Yt++]=$t,Gt[Yt++]=en,Gt[Yt++]=Tn,$t=t.id,en=t.overflow,Tn=e}var ft=null,Qe=null,Le=!1,Cn=null,Zt=!1,Vr=Error(h(519));function An(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw pa(Ft(t,e)),Vr}function qd(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ht]=e,t[_t]=i,n){case"dialog":Oe("cancel",t),Oe("close",t);break;case"iframe":case"object":case"embed":Oe("load",t);break;case"video":case"audio":for(n=0;n<Ha.length;n++)Oe(Ha[n],t);break;case"source":Oe("error",t);break;case"img":case"image":case"link":Oe("error",t),Oe("load",t);break;case"details":Oe("toggle",t);break;case"input":Oe("invalid",t),ed(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Oe("invalid",t);break;case"textarea":Oe("invalid",t),nd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||ah(t.textContent,n)?(i.popover!=null&&(Oe("beforetoggle",t),Oe("toggle",t)),i.onScroll!=null&&Oe("scroll",t),i.onScrollEnd!=null&&Oe("scrollend",t),i.onClick!=null&&(t.onclick=rn),t=!0):t=!1,t||An(e,!0)}function Fd(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 31:case 13:Zt=!1;return;case 27:case 3:Zt=!0;return;default:ft=ft.return}}function Bi(e){if(e!==ft)return!1;if(!Le)return Fd(e),Le=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||hs(e.type,e.memoizedProps)),n=!n),n&&Qe&&An(e),Fd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));Qe=fh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));Qe=fh(e)}else t===27?(t=Qe,Fn(e.type)?(e=vs,vs=null,Qe=e):Qe=t):Qe=ft?Vt(e.stateNode.nextSibling):null;return!0}function ni(){Qe=ft=null,Le=!1}function Kr(){var e=Cn;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),Cn=null),e}function pa(e){Cn===null?Cn=[e]:Cn.push(e)}var Qr=f(null),ii=null,cn=null;function zn(e,t,n){te(Qr,t._currentValue),t._currentValue=n}function un(e){e._currentValue=Qr.current,C(Qr)}function Pr(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Jr(e,t,n,i){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){var r=a.child;l=l.firstContext;e:for(;l!==null;){var c=l;l=a;for(var O=0;O<t.length;O++)if(c.context===t[O]){l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Pr(l.return,n,e),i||(r=null);break e}l=c.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(h(341));r.lanes|=n,l=r.alternate,l!==null&&(l.lanes|=n),Pr(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Di(e,t,n,i){e=null;for(var a=t,l=!1;a!==null;){if(!l){if((a.flags&524288)!==0)l=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(h(387));if(r=r.memoizedProps,r!==null){var c=a.type;zt(a.pendingProps.value,r.value)||(e!==null?e.push(c):e=[c])}}else if(a===Ce.current){if(r=a.alternate,r===null)throw Error(h(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Fa):e=[Fa])}a=a.return}e!==null&&Jr(t,e,n,i),t.flags|=262144}function hl(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ai(e){ii=e,cn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function mt(e){return Gd(ii,e)}function fl(e,t){return ii===null&&ai(e),Gd(e,t)}function Gd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},cn===null){if(e===null)throw Error(h(308));cn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else cn=cn.next=t;return n}var rm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},om=_.unstable_scheduleCallback,sm=_.unstable_NormalPriority,at={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wr(){return{controller:new rm,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&om(sm,function(){e.controller.abort()})}var va=null,$r=0,Oi=0,Ni=null;function dm(e,t){if(va===null){var n=va=[];$r=0,Oi=is(),Ni={status:"pending",value:void 0,then:function(i){n.push(i)}}}return $r++,t.then(Yd,Yd),t}function Yd(){if(--$r===0&&va!==null){Ni!==null&&(Ni.status="fulfilled");var e=va;va=null,Oi=0,Ni=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function cm(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var Zd=q.S;q.S=function(e,t){Au=ge(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&dm(e,t),Zd!==null&&Zd(e,t)};var li=f(null);function eo(){var e=li.current;return e!==null?e:Ve.pooledCache}function ml(e,t){t===null?te(li,li.current):te(li,t.pool)}function Xd(){var e=eo();return e===null?null:{parent:at._currentValue,pool:e}}var Ri=Error(h(460)),to=Error(h(474)),pl=Error(h(542)),gl={then:function(){}};function Vd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Kd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(rn,rn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e;default:if(typeof t.status=="string")t.then(rn,rn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=i}},function(i){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e}throw oi=t,Ri}}function ri(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(oi=n,Ri):n}}var oi=null;function Qd(){if(oi===null)throw Error(h(459));var e=oi;return oi=null,e}function Pd(e){if(e===Ri||e===pl)throw Error(h(483))}var Li=null,ya=0;function vl(e){var t=ya;return ya+=1,Li===null&&(Li=[]),Kd(Li,e,t)}function ba(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yl(e,t){throw t.$$typeof===D?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Jd(e){function t(H,R){if(e){var G=H.deletions;G===null?(H.deletions=[R],H.flags|=16):G.push(R)}}function n(H,R){if(!e)return null;for(;R!==null;)t(H,R),R=R.sibling;return null}function i(H){for(var R=new Map;H!==null;)H.key!==null?R.set(H.key,H):R.set(H.index,H),H=H.sibling;return R}function a(H,R){return H=sn(H,R),H.index=0,H.sibling=null,H}function l(H,R,G){return H.index=G,e?(G=H.alternate,G!==null?(G=G.index,G<R?(H.flags|=67108866,R):G):(H.flags|=67108866,R)):(H.flags|=1048576,R)}function r(H){return e&&H.alternate===null&&(H.flags|=67108866),H}function c(H,R,G,ae){return R===null||R.tag!==6?(R=Gr(G,H.mode,ae),R.return=H,R):(R=a(R,G),R.return=H,R)}function O(H,R,G,ae){var we=G.type;return we===p?ee(H,R,G.props.children,ae,G.key):R!==null&&(R.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===de&&ri(we)===R.type)?(R=a(R,G.props),ba(R,G),R.return=H,R):(R=cl(G.type,G.key,G.props,null,H.mode,ae),ba(R,G),R.return=H,R)}function Y(H,R,G,ae){return R===null||R.tag!==4||R.stateNode.containerInfo!==G.containerInfo||R.stateNode.implementation!==G.implementation?(R=Yr(G,H.mode,ae),R.return=H,R):(R=a(R,G.children||[]),R.return=H,R)}function ee(H,R,G,ae,we){return R===null||R.tag!==7?(R=ti(G,H.mode,ae,we),R.return=H,R):(R=a(R,G),R.return=H,R)}function oe(H,R,G){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Gr(""+R,H.mode,G),R.return=H,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case b:return G=cl(R.type,R.key,R.props,null,H.mode,G),ba(G,R),G.return=H,G;case A:return R=Yr(R,H.mode,G),R.return=H,R;case de:return R=ri(R),oe(H,R,G)}if($(R)||E(R))return R=ti(R,H.mode,G,null),R.return=H,R;if(typeof R.then=="function")return oe(H,vl(R),G);if(R.$$typeof===N)return oe(H,fl(H,R),G);yl(H,R)}return null}function V(H,R,G,ae){var we=R!==null?R.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return we!==null?null:c(H,R,""+G,ae);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case b:return G.key===we?O(H,R,G,ae):null;case A:return G.key===we?Y(H,R,G,ae):null;case de:return G=ri(G),V(H,R,G,ae)}if($(G)||E(G))return we!==null?null:ee(H,R,G,ae,null);if(typeof G.then=="function")return V(H,R,vl(G),ae);if(G.$$typeof===N)return V(H,R,fl(H,G),ae);yl(H,G)}return null}function Q(H,R,G,ae,we){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return H=H.get(G)||null,c(R,H,""+ae,we);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case b:return H=H.get(ae.key===null?G:ae.key)||null,O(R,H,ae,we);case A:return H=H.get(ae.key===null?G:ae.key)||null,Y(R,H,ae,we);case de:return ae=ri(ae),Q(H,R,G,ae,we)}if($(ae)||E(ae))return H=H.get(G)||null,ee(R,H,ae,we,null);if(typeof ae.then=="function")return Q(H,R,G,vl(ae),we);if(ae.$$typeof===N)return Q(H,R,G,fl(R,ae),we);yl(R,ae)}return null}function ye(H,R,G,ae){for(var we=null,He=null,xe=R,Me=R=0,Re=null;xe!==null&&Me<G.length;Me++){xe.index>Me?(Re=xe,xe=null):Re=xe.sibling;var Ue=V(H,xe,G[Me],ae);if(Ue===null){xe===null&&(xe=Re);break}e&&xe&&Ue.alternate===null&&t(H,xe),R=l(Ue,R,Me),He===null?we=Ue:He.sibling=Ue,He=Ue,xe=Re}if(Me===G.length)return n(H,xe),Le&&dn(H,Me),we;if(xe===null){for(;Me<G.length;Me++)xe=oe(H,G[Me],ae),xe!==null&&(R=l(xe,R,Me),He===null?we=xe:He.sibling=xe,He=xe);return Le&&dn(H,Me),we}for(xe=i(xe);Me<G.length;Me++)Re=Q(xe,H,Me,G[Me],ae),Re!==null&&(e&&Re.alternate!==null&&xe.delete(Re.key===null?Me:Re.key),R=l(Re,R,Me),He===null?we=Re:He.sibling=Re,He=Re);return e&&xe.forEach(function(Vn){return t(H,Vn)}),Le&&dn(H,Me),we}function Ee(H,R,G,ae){if(G==null)throw Error(h(151));for(var we=null,He=null,xe=R,Me=R=0,Re=null,Ue=G.next();xe!==null&&!Ue.done;Me++,Ue=G.next()){xe.index>Me?(Re=xe,xe=null):Re=xe.sibling;var Vn=V(H,xe,Ue.value,ae);if(Vn===null){xe===null&&(xe=Re);break}e&&xe&&Vn.alternate===null&&t(H,xe),R=l(Vn,R,Me),He===null?we=Vn:He.sibling=Vn,He=Vn,xe=Re}if(Ue.done)return n(H,xe),Le&&dn(H,Me),we;if(xe===null){for(;!Ue.done;Me++,Ue=G.next())Ue=oe(H,Ue.value,ae),Ue!==null&&(R=l(Ue,R,Me),He===null?we=Ue:He.sibling=Ue,He=Ue);return Le&&dn(H,Me),we}for(xe=i(xe);!Ue.done;Me++,Ue=G.next())Ue=Q(xe,H,Me,Ue.value,ae),Ue!==null&&(e&&Ue.alternate!==null&&xe.delete(Ue.key===null?Me:Ue.key),R=l(Ue,R,Me),He===null?we=Ue:He.sibling=Ue,He=Ue);return e&&xe.forEach(function(Sp){return t(H,Sp)}),Le&&dn(H,Me),we}function Ze(H,R,G,ae){if(typeof G=="object"&&G!==null&&G.type===p&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case b:e:{for(var we=G.key;R!==null;){if(R.key===we){if(we=G.type,we===p){if(R.tag===7){n(H,R.sibling),ae=a(R,G.props.children),ae.return=H,H=ae;break e}}else if(R.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===de&&ri(we)===R.type){n(H,R.sibling),ae=a(R,G.props),ba(ae,G),ae.return=H,H=ae;break e}n(H,R);break}else t(H,R);R=R.sibling}G.type===p?(ae=ti(G.props.children,H.mode,ae,G.key),ae.return=H,H=ae):(ae=cl(G.type,G.key,G.props,null,H.mode,ae),ba(ae,G),ae.return=H,H=ae)}return r(H);case A:e:{for(we=G.key;R!==null;){if(R.key===we)if(R.tag===4&&R.stateNode.containerInfo===G.containerInfo&&R.stateNode.implementation===G.implementation){n(H,R.sibling),ae=a(R,G.children||[]),ae.return=H,H=ae;break e}else{n(H,R);break}else t(H,R);R=R.sibling}ae=Yr(G,H.mode,ae),ae.return=H,H=ae}return r(H);case de:return G=ri(G),Ze(H,R,G,ae)}if($(G))return ye(H,R,G,ae);if(E(G)){if(we=E(G),typeof we!="function")throw Error(h(150));return G=we.call(G),Ee(H,R,G,ae)}if(typeof G.then=="function")return Ze(H,R,vl(G),ae);if(G.$$typeof===N)return Ze(H,R,fl(H,G),ae);yl(H,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,R!==null&&R.tag===6?(n(H,R.sibling),ae=a(R,G),ae.return=H,H=ae):(n(H,R),ae=Gr(G,H.mode,ae),ae.return=H,H=ae),r(H)):n(H,R)}return function(H,R,G,ae){try{ya=0;var we=Ze(H,R,G,ae);return Li=null,we}catch(xe){if(xe===Ri||xe===pl)throw xe;var He=Mt(29,xe,null,H.mode);return He.lanes=ae,He.return=H,He}}}var si=Jd(!0),Wd=Jd(!1),Mn=!1;function no(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Dn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(je&2)!==0){var a=i.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),i.pending=t,t=dl(e),Rd(e,null,n),t}return sl(e,i,t,n),dl(e)}function xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Gs(e,n)}}function ao(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?a=l=r:l=l.next=r,n=n.next}while(n!==null);l===null?a=l=t:l=l.next=t}else a=l=t;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lo=!1;function Sa(){if(lo){var e=Ni;if(e!==null)throw e}}function _a(e,t,n,i){lo=!1;var a=e.updateQueue;Mn=!1;var l=a.firstBaseUpdate,r=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var O=c,Y=O.next;O.next=null,r===null?l=Y:r.next=Y,r=O;var ee=e.alternate;ee!==null&&(ee=ee.updateQueue,c=ee.lastBaseUpdate,c!==r&&(c===null?ee.firstBaseUpdate=Y:c.next=Y,ee.lastBaseUpdate=O))}if(l!==null){var oe=a.baseState;r=0,ee=Y=O=null,c=l;do{var V=c.lane&-536870913,Q=V!==c.lane;if(Q?(Ne&V)===V:(i&V)===V){V!==0&&V===Oi&&(lo=!0),ee!==null&&(ee=ee.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var ye=e,Ee=c;V=t;var Ze=n;switch(Ee.tag){case 1:if(ye=Ee.payload,typeof ye=="function"){oe=ye.call(Ze,oe,V);break e}oe=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=Ee.payload,V=typeof ye=="function"?ye.call(Ze,oe,V):ye,V==null)break e;oe=S({},oe,V);break e;case 2:Mn=!0}}V=c.callback,V!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=a.callbacks,Q===null?a.callbacks=[V]:Q.push(V))}else Q={lane:V,tag:c.tag,payload:c.payload,callback:c.callback,next:null},ee===null?(Y=ee=Q,O=oe):ee=ee.next=Q,r|=V;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;Q=c,c=Q.next,Q.next=null,a.lastBaseUpdate=Q,a.shared.pending=null}}while(!0);ee===null&&(O=oe),a.baseState=O,a.firstBaseUpdate=Y,a.lastBaseUpdate=ee,l===null&&(a.shared.lanes=0),Hn|=r,e.lanes=r,e.memoizedState=oe}}function $d(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function ec(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$d(n[e],t)}var Hi=f(null),bl=f(0);function tc(e,t){e=xn,te(bl,e),te(Hi,t),xn=e|t.baseLanes}function ro(){te(bl,xn),te(Hi,Hi.current)}function oo(){xn=bl.current,C(Hi),C(bl)}var Bt=f(null),Xt=null;function On(e){var t=e.alternate;te(nt,nt.current&1),te(Bt,e),Xt===null&&(t===null||Hi.current!==null||t.memoizedState!==null)&&(Xt=e)}function so(e){te(nt,nt.current),te(Bt,e),Xt===null&&(Xt=e)}function nc(e){e.tag===22?(te(nt,nt.current),te(Bt,e),Xt===null&&(Xt=e)):Nn()}function Nn(){te(nt,nt.current),te(Bt,Bt.current)}function Dt(e){C(Bt),Xt===e&&(Xt=null),C(nt)}var nt=f(0);function xl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||ps(n)||gs(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hn=0,ze=null,Ge=null,lt=null,Sl=!1,Ui=!1,di=!1,_l=0,wa=0,ji=null,um=0;function et(){throw Error(h(321))}function co(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function uo(e,t,n,i,a,l){return hn=l,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,q.H=e===null||e.memoizedState===null?jc:To,di=!1,l=n(i,a),di=!1,Ui&&(l=ac(t,n,i,a)),ic(e),l}function ic(e){q.H=Ta;var t=Ge!==null&&Ge.next!==null;if(hn=0,lt=Ge=ze=null,Sl=!1,wa=0,ji=null,t)throw Error(h(300));e===null||rt||(e=e.dependencies,e!==null&&hl(e)&&(rt=!0))}function ac(e,t,n,i){ze=e;var a=0;do{if(Ui&&(ji=null),wa=0,Ui=!1,25<=a)throw Error(h(301));if(a+=1,lt=Ge=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}q.H=Ic,l=t(n,i)}while(Ui);return l}function hm(){var e=q.H,t=e.useState()[0];return t=typeof t.then=="function"?ka(t):t,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ze.flags|=1024),t}function ho(){var e=_l!==0;return _l=0,e}function fo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function mo(e){if(Sl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Sl=!1}hn=0,lt=Ge=ze=null,Ui=!1,wa=_l=0,ji=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?ze.memoizedState=lt=e:lt=lt.next=e,lt}function it(){if(Ge===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=lt===null?ze.memoizedState:lt.next;if(t!==null)lt=t,Ge=e;else{if(e===null)throw ze.alternate===null?Error(h(467)):Error(h(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},lt===null?ze.memoizedState=lt=e:lt=lt.next=e}return lt}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ka(e){var t=wa;return wa+=1,ji===null&&(ji=[]),e=Kd(ji,e,t),t=ze,(lt===null?t.memoizedState:lt.next)===null&&(t=t.alternate,q.H=t===null||t.memoizedState===null?jc:To),e}function kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ka(e);if(e.$$typeof===N)return mt(e)}throw Error(h(438,String(e)))}function po(e){var t=null,n=ze.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ze.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=wl(),ze.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=he;return t.index++,n}function fn(e,t){return typeof t=="function"?t(e):t}function El(e){var t=it();return go(t,Ge,e)}function go(e,t,n){var i=e.queue;if(i===null)throw Error(h(311));i.lastRenderedReducer=n;var a=e.baseQueue,l=i.pending;if(l!==null){if(a!==null){var r=a.next;a.next=l.next,l.next=r}t.baseQueue=a=l,i.pending=null}if(l=e.baseState,a===null)e.memoizedState=l;else{t=a.next;var c=r=null,O=null,Y=t,ee=!1;do{var oe=Y.lane&-536870913;if(oe!==Y.lane?(Ne&oe)===oe:(hn&oe)===oe){var V=Y.revertLane;if(V===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),oe===Oi&&(ee=!0);else if((hn&V)===V){Y=Y.next,V===Oi&&(ee=!0);continue}else oe={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},O===null?(c=O=oe,r=l):O=O.next=oe,ze.lanes|=V,Hn|=V;oe=Y.action,di&&n(l,oe),l=Y.hasEagerState?Y.eagerState:n(l,oe)}else V={lane:oe,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},O===null?(c=O=V,r=l):O=O.next=V,ze.lanes|=oe,Hn|=oe;Y=Y.next}while(Y!==null&&Y!==t);if(O===null?r=l:O.next=c,!zt(l,e.memoizedState)&&(rt=!0,ee&&(n=Ni,n!==null)))throw n;e.memoizedState=l,e.baseState=r,e.baseQueue=O,i.lastRenderedState=l}return a===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function vo(e){var t=it(),n=t.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,l=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do l=e(l,r.action),r=r.next;while(r!==a);zt(l,t.memoizedState)||(rt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,i]}function lc(e,t,n){var i=ze,a=it(),l=Le;if(l){if(n===void 0)throw Error(h(407));n=n()}else n=t();var r=!zt((Ge||a).memoizedState,n);if(r&&(a.memoizedState=n,rt=!0),a=a.queue,xo(sc.bind(null,i,a,e),[e]),a.getSnapshot!==t||r||lt!==null&&lt.memoizedState.tag&1){if(i.flags|=2048,Ii(9,{destroy:void 0},oc.bind(null,i,a,n,t),null),Ve===null)throw Error(h(349));l||(hn&127)!==0||rc(i,t,n)}return n}function rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t=wl(),ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function oc(e,t,n,i){t.value=n,t.getSnapshot=i,dc(t)&&cc(e)}function sc(e,t,n){return n(function(){dc(t)&&cc(e)})}function dc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function cc(e){var t=ei(e,2);t!==null&&At(t,e,2)}function yo(e){var t=yt();if(typeof e=="function"){var n=e;if(e=n(),di){Ht(!0);try{n()}finally{Ht(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:e},t}function uc(e,t,n,i){return e.baseState=n,go(e,Ge,typeof i=="function"?i:fn)}function fm(e,t,n,i,a){if(Al(e))throw Error(h(485));if(e=t.action,e!==null){var l={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){l.listeners.push(r)}};q.T!==null?n(!0):l.isTransition=!1,i(l),n=t.pending,n===null?(l.next=t.pending=l,hc(t,l)):(l.next=n.next,t.pending=n.next=l)}}function hc(e,t){var n=t.action,i=t.payload,a=e.state;if(t.isTransition){var l=q.T,r={};q.T=r;try{var c=n(a,i),O=q.S;O!==null&&O(r,c),fc(e,t,c)}catch(Y){bo(e,t,Y)}finally{l!==null&&r.types!==null&&(l.types=r.types),q.T=l}}else try{l=n(a,i),fc(e,t,l)}catch(Y){bo(e,t,Y)}}function fc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){mc(e,t,i)},function(i){return bo(e,t,i)}):mc(e,t,n)}function mc(e,t,n){t.status="fulfilled",t.value=n,pc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,hc(e,n)))}function bo(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,pc(t),t=t.next;while(t!==i)}e.action=null}function pc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function gc(e,t){return t}function vc(e,t){if(Le){var n=Ve.formState;if(n!==null){e:{var i=ze;if(Le){if(Qe){t:{for(var a=Qe,l=Zt;a.nodeType!==8;){if(!l){a=null;break t}if(a=Vt(a.nextSibling),a===null){a=null;break t}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){Qe=Vt(a.nextSibling),i=a.data==="F!";break e}}An(i)}i=!1}i&&(t=n[0])}}return n=yt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gc,lastRenderedState:t},n.queue=i,n=Lc.bind(null,ze,i),i.dispatch=n,i=yo(!1),l=Eo.bind(null,ze,!1,i.queue),i=yt(),a={state:t,dispatch:null,action:e,pending:null},i.queue=a,n=fm.bind(null,ze,a,l,n),a.dispatch=n,i.memoizedState=e,[t,n,!1]}function yc(e){var t=it();return bc(t,Ge,e)}function bc(e,t,n){if(t=go(e,t,gc)[0],e=El(fn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ka(t)}catch(r){throw r===Ri?pl:r}else i=t;t=it();var a=t.queue,l=a.dispatch;return n!==t.memoizedState&&(ze.flags|=2048,Ii(9,{destroy:void 0},mm.bind(null,a,n),null)),[i,l,e]}function mm(e,t){e.action=t}function xc(e){var t=it(),n=Ge;if(n!==null)return bc(t,n,e);it(),t=t.memoizedState,n=it();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ii(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ze.updateQueue,t===null&&(t=wl(),ze.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Sc(){return it().memoizedState}function Tl(e,t,n,i){var a=yt();ze.flags|=e,a.memoizedState=Ii(1|t,{destroy:void 0},n,i===void 0?null:i)}function Cl(e,t,n,i){var a=it();i=i===void 0?null:i;var l=a.memoizedState.inst;Ge!==null&&i!==null&&co(i,Ge.memoizedState.deps)?a.memoizedState=Ii(t,l,n,i):(ze.flags|=e,a.memoizedState=Ii(1|t,l,n,i))}function _c(e,t){Tl(8390656,8,e,t)}function xo(e,t){Cl(2048,8,e,t)}function pm(e){ze.flags|=4;var t=ze.updateQueue;if(t===null)t=wl(),ze.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function wc(e){var t=it().memoizedState;return pm({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function kc(e,t){return Cl(4,2,e,t)}function Ec(e,t){return Cl(4,4,e,t)}function Tc(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cc(e,t,n){n=n!=null?n.concat([e]):null,Cl(4,4,Tc.bind(null,t,e),n)}function So(){}function Ac(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&co(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function zc(e,t){var n=it();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&co(t,i[1]))return i[0];if(i=e(),di){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[i,t],i}function _o(e,t,n){return n===void 0||(hn&1073741824)!==0&&(Ne&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Mu(),ze.lanes|=e,Hn|=e,n)}function Mc(e,t,n,i){return zt(n,t)?n:Hi.current!==null?(e=_o(e,n,i),zt(e,t)||(rt=!0),e):(hn&42)===0||(hn&1073741824)!==0&&(Ne&261930)===0?(rt=!0,e.memoizedState=n):(e=Mu(),ze.lanes|=e,Hn|=e,t)}function Bc(e,t,n,i,a){var l=F.p;F.p=l!==0&&8>l?l:8;var r=q.T,c={};q.T=c,Eo(e,!1,t,n);try{var O=a(),Y=q.S;if(Y!==null&&Y(c,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=cm(O,i);Ea(e,t,ee,Rt(e))}else Ea(e,t,i,Rt(e))}catch(oe){Ea(e,t,{then:function(){},status:"rejected",reason:oe},Rt())}finally{F.p=l,r!==null&&c.types!==null&&(r.types=c.types),q.T=r}}function gm(){}function wo(e,t,n,i){if(e.tag!==5)throw Error(h(476));var a=Dc(e).queue;Bc(e,a,t,me,n===null?gm:function(){return Oc(e),n(i)})}function Dc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:me},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Oc(e){var t=Dc(e);t.next===null&&(t=e.alternate.memoizedState),Ea(e,t.next.queue,{},Rt())}function ko(){return mt(Fa)}function Nc(){return it().memoizedState}function Rc(){return it().memoizedState}function vm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Rt();e=Bn(n);var i=Dn(t,e,n);i!==null&&(At(i,t,n),xa(i,t,n)),t={cache:Wr()},e.payload=t;return}t=t.return}}function ym(e,t,n){var i=Rt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Al(e)?Hc(t,n):(n=qr(e,t,n,i),n!==null&&(At(n,e,i),Uc(n,t,i)))}function Lc(e,t,n){var i=Rt();Ea(e,t,n,i)}function Ea(e,t,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Al(e))Hc(t,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var r=t.lastRenderedState,c=l(r,n);if(a.hasEagerState=!0,a.eagerState=c,zt(c,r))return sl(e,t,a,0),Ve===null&&ol(),!1}catch{}if(n=qr(e,t,a,i),n!==null)return At(n,e,i),Uc(n,t,i),!0}return!1}function Eo(e,t,n,i){if(i={lane:2,revertLane:is(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Al(e)){if(t)throw Error(h(479))}else t=qr(e,n,i,2),t!==null&&At(t,e,2)}function Al(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function Hc(e,t){Ui=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uc(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Gs(e,n)}}var Ta={readContext:mt,use:kl,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};Ta.useEffectEvent=et;var jc={readContext:mt,use:kl,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:_c,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Tl(4194308,4,Tc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tl(4194308,4,e,t)},useInsertionEffect:function(e,t){Tl(4,2,e,t)},useMemo:function(e,t){var n=yt();t=t===void 0?null:t;var i=e();if(di){Ht(!0);try{e()}finally{Ht(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=yt();if(n!==void 0){var a=n(t);if(di){Ht(!0);try{n(t)}finally{Ht(!1)}}}else a=t;return i.memoizedState=i.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},i.queue=e,e=e.dispatch=ym.bind(null,ze,e),[i.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=yo(e);var t=e.queue,n=Lc.bind(null,ze,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:So,useDeferredValue:function(e,t){var n=yt();return _o(n,e,t)},useTransition:function(){var e=yo(!1);return e=Bc.bind(null,ze,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ze,a=yt();if(Le){if(n===void 0)throw Error(h(407));n=n()}else{if(n=t(),Ve===null)throw Error(h(349));(Ne&127)!==0||rc(i,t,n)}a.memoizedState=n;var l={value:n,getSnapshot:t};return a.queue=l,_c(sc.bind(null,i,l,e),[e]),i.flags|=2048,Ii(9,{destroy:void 0},oc.bind(null,i,l,n,t),null),n},useId:function(){var e=yt(),t=Ve.identifierPrefix;if(Le){var n=en,i=$t;n=(i&~(1<<32-$e(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=_l++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=um++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ko,useFormState:vc,useActionState:vc,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Eo.bind(null,ze,!0,n),n.dispatch=t,[e,t]},useMemoCache:po,useCacheRefresh:function(){return yt().memoizedState=vm.bind(null,ze)},useEffectEvent:function(e){var t=yt(),n={impl:e};return t.memoizedState=n,function(){if((je&2)!==0)throw Error(h(440));return n.impl.apply(void 0,arguments)}}},To={readContext:mt,use:kl,useCallback:Ac,useContext:mt,useEffect:xo,useImperativeHandle:Cc,useInsertionEffect:kc,useLayoutEffect:Ec,useMemo:zc,useReducer:El,useRef:Sc,useState:function(){return El(fn)},useDebugValue:So,useDeferredValue:function(e,t){var n=it();return Mc(n,Ge.memoizedState,e,t)},useTransition:function(){var e=El(fn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:ka(e),t]},useSyncExternalStore:lc,useId:Nc,useHostTransitionStatus:ko,useFormState:yc,useActionState:yc,useOptimistic:function(e,t){var n=it();return uc(n,Ge,e,t)},useMemoCache:po,useCacheRefresh:Rc};To.useEffectEvent=wc;var Ic={readContext:mt,use:kl,useCallback:Ac,useContext:mt,useEffect:xo,useImperativeHandle:Cc,useInsertionEffect:kc,useLayoutEffect:Ec,useMemo:zc,useReducer:vo,useRef:Sc,useState:function(){return vo(fn)},useDebugValue:So,useDeferredValue:function(e,t){var n=it();return Ge===null?_o(n,e,t):Mc(n,Ge.memoizedState,e,t)},useTransition:function(){var e=vo(fn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:ka(e),t]},useSyncExternalStore:lc,useId:Nc,useHostTransitionStatus:ko,useFormState:xc,useActionState:xc,useOptimistic:function(e,t){var n=it();return Ge!==null?uc(n,Ge,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:po,useCacheRefresh:Rc};Ic.useEffectEvent=wc;function Co(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Rt(),a=Bn(i);a.payload=t,n!=null&&(a.callback=n),t=Dn(e,a,i),t!==null&&(At(t,e,i),xa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Rt(),a=Bn(i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Dn(e,a,i),t!==null&&(At(t,e,i),xa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rt(),i=Bn(n);i.tag=2,t!=null&&(i.callback=t),t=Dn(e,i,n),t!==null&&(At(t,e,n),xa(t,e,n))}};function qc(e,t,n,i,a,l,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,r):t.prototype&&t.prototype.isPureReactComponent?!ha(n,i)||!ha(a,l):!0}function Fc(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function ci(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Gc(e){rl(e)}function Yc(e){console.error(e)}function Zc(e){rl(e)}function zl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Xc(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function zo(e,t,n){return n=Bn(n),n.tag=3,n.payload={element:null},n.callback=function(){zl(e,t)},n}function Vc(e){return e=Bn(e),e.tag=3,e}function Kc(e,t,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var l=i.value;e.payload=function(){return a(l)},e.callback=function(){Xc(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Xc(t,n,i),typeof a!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var c=i.stack;this.componentDidCatch(i.value,{componentStack:c!==null?c:""})})}function bm(e,t,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Di(t,n,a,!0),n=Bt.current,n!==null){switch(n.tag){case 31:case 13:return Xt===null?ql():n.alternate===null&&tt===0&&(tt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===gl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),es(e,i,a)),!1;case 22:return n.flags|=65536,i===gl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),es(e,i,a)),!1}throw Error(h(435,n.tag))}return es(e,i,a),ql(),!1}if(Le)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,i!==Vr&&(e=Error(h(422),{cause:i}),pa(Ft(e,n)))):(i!==Vr&&(t=Error(h(423),{cause:i}),pa(Ft(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,i=Ft(i,n),a=zo(e.stateNode,i,a),ao(e,a),tt!==4&&(tt=2)),!1;var l=Error(h(520),{cause:i});if(l=Ft(l,n),Na===null?Na=[l]:Na.push(l),tt!==4&&(tt=2),t===null)return!0;i=Ft(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=zo(n.stateNode,i,e),ao(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Un===null||!Un.has(l))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Vc(a),Kc(a,e,n,i),ao(n,a),!1}n=n.return}while(n!==null);return!1}var Mo=Error(h(461)),rt=!1;function pt(e,t,n,i){t.child=e===null?Wd(t,null,n,i):si(t,e.child,n,i)}function Qc(e,t,n,i,a){n=n.render;var l=t.ref;if("ref"in i){var r={};for(var c in i)c!=="ref"&&(r[c]=i[c])}else r=i;return ai(t),i=uo(e,t,n,r,l,a),c=ho(),e!==null&&!rt?(fo(e,t,a),mn(e,t,a)):(Le&&c&&Zr(t),t.flags|=1,pt(e,t,i,a),t.child)}function Pc(e,t,n,i,a){if(e===null){var l=n.type;return typeof l=="function"&&!Fr(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,Jc(e,t,l,i,a)):(e=cl(n.type,null,i,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Uo(e,a)){var r=l.memoizedProps;if(n=n.compare,n=n!==null?n:ha,n(r,i)&&e.ref===t.ref)return mn(e,t,a)}return t.flags|=1,e=sn(l,i),e.ref=t.ref,e.return=t,t.child=e}function Jc(e,t,n,i,a){if(e!==null){var l=e.memoizedProps;if(ha(l,i)&&e.ref===t.ref)if(rt=!1,t.pendingProps=i=l,Uo(e,a))(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,mn(e,t,a)}return Bo(e,t,n,i,a)}function Wc(e,t,n,i){var a=i.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~l}else i=0,t.child=null;return $c(e,t,l,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(t,l!==null?l.cachePool:null),l!==null?tc(t,l):ro(),nc(t);else return i=t.lanes=536870912,$c(e,t,l!==null?l.baseLanes|n:n,n,i)}else l!==null?(ml(t,l.cachePool),tc(t,l),Nn(),t.memoizedState=null):(e!==null&&ml(t,null),ro(),Nn());return pt(e,t,a,n),t.child}function Ca(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $c(e,t,n,i,a){var l=eo();return l=l===null?null:{parent:at._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&ml(t,null),ro(),nc(t),e!==null&&Di(e,t,i,!0),t.childLanes=a,null}function Ml(e,t){return t=Dl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function eu(e,t,n){return si(t,e.child,null,n),e=Ml(t,t.pendingProps),e.flags|=2,Dt(t),t.memoizedState=null,e}function xm(e,t,n){var i=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Le){if(i.mode==="hidden")return e=Ml(t,i),t.lanes=536870912,Ca(null,e);if(so(t),(e=Qe)?(e=hh(e,Zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:$t,overflow:en}:null,retryLane:536870912,hydrationErrors:null},n=Hd(e),n.return=t,t.child=n,ft=t,Qe=null)):e=null,e===null)throw An(t);return t.lanes=536870912,null}return Ml(t,i)}var l=e.memoizedState;if(l!==null){var r=l.dehydrated;if(so(t),a)if(t.flags&256)t.flags&=-257,t=eu(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(rt||Di(e,t,n,!1),a=(n&e.childLanes)!==0,rt||a){if(i=Ve,i!==null&&(r=Ys(i,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ei(e,r),At(i,e,r),Mo;ql(),t=eu(e,t,n)}else e=l.treeContext,Qe=Vt(r.nextSibling),ft=t,Le=!0,Cn=null,Zt=!1,e!==null&&Id(t,e),t=Ml(t,i),t.flags|=4096;return t}return e=sn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(h(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Bo(e,t,n,i,a){return ai(t),n=uo(e,t,n,i,void 0,a),i=ho(),e!==null&&!rt?(fo(e,t,a),mn(e,t,a)):(Le&&i&&Zr(t),t.flags|=1,pt(e,t,n,a),t.child)}function tu(e,t,n,i,a,l){return ai(t),t.updateQueue=null,n=ac(t,i,n,a),ic(e),i=ho(),e!==null&&!rt?(fo(e,t,l),mn(e,t,l)):(Le&&i&&Zr(t),t.flags|=1,pt(e,t,n,l),t.child)}function nu(e,t,n,i,a){if(ai(t),t.stateNode===null){var l=Ai,r=n.contextType;typeof r=="object"&&r!==null&&(l=mt(r)),l=new n(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Ao,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},no(t),r=n.contextType,l.context=typeof r=="object"&&r!==null?mt(r):Ai,l.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Co(t,n,r,i),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Ao.enqueueReplaceState(l,l.state,null),_a(t,i,l,a),Sa(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var c=t.memoizedProps,O=ci(n,c);l.props=O;var Y=l.context,ee=n.contextType;r=Ai,typeof ee=="object"&&ee!==null&&(r=mt(ee));var oe=n.getDerivedStateFromProps;ee=typeof oe=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,ee||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||Y!==r)&&Fc(t,l,i,r),Mn=!1;var V=t.memoizedState;l.state=V,_a(t,i,l,a),Sa(),Y=t.memoizedState,c||V!==Y||Mn?(typeof oe=="function"&&(Co(t,n,oe,i),Y=t.memoizedState),(O=Mn||qc(t,n,O,i,V,Y,r))?(ee||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=Y),l.props=i,l.state=Y,l.context=r,i=O):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,io(e,t),r=t.memoizedProps,ee=ci(n,r),l.props=ee,oe=t.pendingProps,V=l.context,Y=n.contextType,O=Ai,typeof Y=="object"&&Y!==null&&(O=mt(Y)),c=n.getDerivedStateFromProps,(Y=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(r!==oe||V!==O)&&Fc(t,l,i,O),Mn=!1,V=t.memoizedState,l.state=V,_a(t,i,l,a),Sa();var Q=t.memoizedState;r!==oe||V!==Q||Mn||e!==null&&e.dependencies!==null&&hl(e.dependencies)?(typeof c=="function"&&(Co(t,n,c,i),Q=t.memoizedState),(ee=Mn||qc(t,n,ee,i,V,Q,O)||e!==null&&e.dependencies!==null&&hl(e.dependencies))?(Y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,Q,O),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,Q,O)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Q),l.props=i,l.state=Q,l.context=O,i=ee):(typeof l.componentDidUpdate!="function"||r===e.memoizedProps&&V===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&V===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,Bl(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=si(t,e.child,null,a),t.child=si(t,null,n,a)):pt(e,t,n,a),t.memoizedState=l.state,e=t.child):e=mn(e,t,a),e}function iu(e,t,n,i){return ni(),t.flags|=256,pt(e,t,n,i),t.child}var Do={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oo(e){return{baseLanes:e,cachePool:Xd()}}function No(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Nt),e}function au(e,t,n){var i=t.pendingProps,a=!1,l=(t.flags&128)!==0,r;if((r=l)||(r=e!==null&&e.memoizedState===null?!1:(nt.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Le){if(a?On(t):Nn(),(e=Qe)?(e=hh(e,Zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:$t,overflow:en}:null,retryLane:536870912,hydrationErrors:null},n=Hd(e),n.return=t,t.child=n,ft=t,Qe=null)):e=null,e===null)throw An(t);return gs(e)?t.lanes=32:t.lanes=536870912,null}var c=i.children;return i=i.fallback,a?(Nn(),a=t.mode,c=Dl({mode:"hidden",children:c},a),i=ti(i,a,n,null),c.return=t,i.return=t,c.sibling=i,t.child=c,i=t.child,i.memoizedState=Oo(n),i.childLanes=No(e,r,n),t.memoizedState=Do,Ca(null,i)):(On(t),Ro(t,c))}var O=e.memoizedState;if(O!==null&&(c=O.dehydrated,c!==null)){if(l)t.flags&256?(On(t),t.flags&=-257,t=Lo(e,t,n)):t.memoizedState!==null?(Nn(),t.child=e.child,t.flags|=128,t=null):(Nn(),c=i.fallback,a=t.mode,i=Dl({mode:"visible",children:i.children},a),c=ti(c,a,n,null),c.flags|=2,i.return=t,c.return=t,i.sibling=c,t.child=i,si(t,e.child,null,n),i=t.child,i.memoizedState=Oo(n),i.childLanes=No(e,r,n),t.memoizedState=Do,t=Ca(null,i));else if(On(t),gs(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var Y=r.dgst;r=Y,i=Error(h(419)),i.stack="",i.digest=r,pa({value:i,source:null,stack:null}),t=Lo(e,t,n)}else if(rt||Di(e,t,n,!1),r=(n&e.childLanes)!==0,rt||r){if(r=Ve,r!==null&&(i=Ys(r,n),i!==0&&i!==O.retryLane))throw O.retryLane=i,ei(e,i),At(r,e,i),Mo;ps(c)||ql(),t=Lo(e,t,n)}else ps(c)?(t.flags|=192,t.child=e.child,t=null):(e=O.treeContext,Qe=Vt(c.nextSibling),ft=t,Le=!0,Cn=null,Zt=!1,e!==null&&Id(t,e),t=Ro(t,i.children),t.flags|=4096);return t}return a?(Nn(),c=i.fallback,a=t.mode,O=e.child,Y=O.sibling,i=sn(O,{mode:"hidden",children:i.children}),i.subtreeFlags=O.subtreeFlags&65011712,Y!==null?c=sn(Y,c):(c=ti(c,a,n,null),c.flags|=2),c.return=t,i.return=t,i.sibling=c,t.child=i,Ca(null,i),i=t.child,c=e.child.memoizedState,c===null?c=Oo(n):(a=c.cachePool,a!==null?(O=at._currentValue,a=a.parent!==O?{parent:O,pool:O}:a):a=Xd(),c={baseLanes:c.baseLanes|n,cachePool:a}),i.memoizedState=c,i.childLanes=No(e,r,n),t.memoizedState=Do,Ca(e.child,i)):(On(t),n=e.child,e=n.sibling,n=sn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ro(e,t){return t=Dl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Dl(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function Lo(e,t,n){return si(t,e.child,null,n),e=Ro(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function lu(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Pr(e.return,t,n)}function Ho(e,t,n,i,a,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a,r.treeForkCount=l)}function ru(e,t,n){var i=t.pendingProps,a=i.revealOrder,l=i.tail;i=i.children;var r=nt.current,c=(r&2)!==0;if(c?(r=r&1|2,t.flags|=128):r&=1,te(nt,r),pt(e,t,i,n),i=Le?ma:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lu(e,n,t);else if(e.tag===19)lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&xl(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ho(t,!1,a,n,l,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&xl(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ho(t,!0,n,null,l,i);break;case"together":Ho(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Di(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,n=sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Uo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hl(e)))}function Sm(e,t,n){switch(t.tag){case 3:Te(t,t.stateNode.containerInfo),zn(t,at,e.memoizedState.cache),ni();break;case 27:case 5:Je(t);break;case 4:Te(t,t.stateNode.containerInfo);break;case 10:zn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,so(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(On(t),t.flags|=128,null):(n&t.child.childLanes)!==0?au(e,t,n):(On(t),e=mn(e,t,n),e!==null?e.sibling:null);On(t);break;case 19:var a=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Di(e,t,n,!1),i=(n&t.childLanes)!==0),a){if(i)return ru(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),te(nt,nt.current),i)break;return null;case 22:return t.lanes=0,Wc(e,t,n,t.pendingProps);case 24:zn(t,at,e.memoizedState.cache)}return mn(e,t,n)}function ou(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)rt=!0;else{if(!Uo(e,n)&&(t.flags&128)===0)return rt=!1,Sm(e,t,n);rt=(e.flags&131072)!==0}else rt=!1,Le&&(t.flags&1048576)!==0&&jd(t,ma,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ri(t.elementType),t.type=e,typeof e=="function")Fr(e)?(i=ci(e,i),t.tag=1,t=nu(null,t,e,i,n)):(t.tag=0,t=Bo(null,t,e,i,n));else{if(e!=null){var a=e.$$typeof;if(a===I){t.tag=11,t=Qc(null,t,e,i,n);break e}else if(a===Z){t.tag=14,t=Pc(null,t,e,i,n);break e}}throw t=s(e)||e,Error(h(306,t,""))}}return t;case 0:return Bo(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,a=ci(i,t.pendingProps),nu(e,t,i,a,n);case 3:e:{if(Te(t,t.stateNode.containerInfo),e===null)throw Error(h(387));i=t.pendingProps;var l=t.memoizedState;a=l.element,io(e,t),_a(t,i,null,n);var r=t.memoizedState;if(i=r.cache,zn(t,at,i),i!==l.cache&&Jr(t,[at],n,!0),Sa(),i=r.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=iu(e,t,i,n);break e}else if(i!==a){a=Ft(Error(h(424)),t),pa(a),t=iu(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=Vt(e.firstChild),ft=t,Le=!0,Cn=null,Zt=!0,n=Wd(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),i===a){t=mn(e,t,n);break e}pt(e,t,i,n)}t=t.child}return t;case 26:return Bl(e,t),e===null?(n=yh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Le||(n=t.type,e=t.pendingProps,i=Kl(Se.current).createElement(n),i[ht]=t,i[_t]=e,gt(i,n,e),ct(i),t.stateNode=i):t.memoizedState=yh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Je(t),e===null&&Le&&(i=t.stateNode=ph(t.type,t.pendingProps,Se.current),ft=t,Zt=!0,a=Qe,Fn(t.type)?(vs=a,Qe=Vt(i.firstChild)):Qe=a),pt(e,t,t.pendingProps.children,n),Bl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Le&&((a=i=Qe)&&(i=Jm(i,t.type,t.pendingProps,Zt),i!==null?(t.stateNode=i,ft=t,Qe=Vt(i.firstChild),Zt=!1,a=!0):a=!1),a||An(t)),Je(t),a=t.type,l=t.pendingProps,r=e!==null?e.memoizedProps:null,i=l.children,hs(a,l)?i=null:r!==null&&hs(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=uo(e,t,hm,null,null,n),Fa._currentValue=a),Bl(e,t),pt(e,t,i,n),t.child;case 6:return e===null&&Le&&((e=n=Qe)&&(n=Wm(n,t.pendingProps,Zt),n!==null?(t.stateNode=n,ft=t,Qe=null,e=!0):e=!1),e||An(t)),null;case 13:return au(e,t,n);case 4:return Te(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=si(t,null,i,n):pt(e,t,i,n),t.child;case 11:return Qc(e,t,t.type,t.pendingProps,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,zn(t,t.type,i.value),pt(e,t,i.children,n),t.child;case 9:return a=t.type._context,i=t.pendingProps.children,ai(t),a=mt(a),i=i(a),t.flags|=1,pt(e,t,i,n),t.child;case 14:return Pc(e,t,t.type,t.pendingProps,n);case 15:return Jc(e,t,t.type,t.pendingProps,n);case 19:return ru(e,t,n);case 31:return xm(e,t,n);case 22:return Wc(e,t,n,t.pendingProps);case 24:return ai(t),i=mt(at),e===null?(a=eo(),a===null&&(a=Ve,l=Wr(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=n),a=l),t.memoizedState={parent:i,cache:a},no(t),zn(t,at,a)):((e.lanes&n)!==0&&(io(e,t),_a(t,null,null,n),Sa()),a=e.memoizedState,l=t.memoizedState,a.parent!==i?(a={parent:i,cache:i},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),zn(t,at,i)):(i=l.cache,zn(t,at,i),i!==a.cache&&Jr(t,[at],n,!0))),pt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function pn(e){e.flags|=4}function jo(e,t,n,i,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(Nu())e.flags|=8192;else throw oi=gl,to}else e.flags&=-16777217}function su(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wh(t))if(Nu())e.flags|=8192;else throw oi=gl,to}function Ol(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qs():536870912,e.lanes|=t,Yi|=t)}function Aa(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function _m(e,t,n){var i=t.pendingProps;switch(Xr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Pe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),un(at),ke(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bi(t)?pn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Kr())),Pe(t),null;case 26:var a=t.type,l=t.memoizedState;return e===null?(pn(t),l!==null?(Pe(t),su(t,l)):(Pe(t),jo(t,a,null,i,n))):l?l!==e.memoizedState?(pn(t),Pe(t),su(t,l)):(Pe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&pn(t),Pe(t),jo(t,a,e,i,n)),null;case 27:if(Ke(t),n=Se.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&pn(t);else{if(!i){if(t.stateNode===null)throw Error(h(166));return Pe(t),null}e=W.current,Bi(t)?qd(t):(e=ph(a,i,n),t.stateNode=e,pn(t))}return Pe(t),null;case 5:if(Ke(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&pn(t);else{if(!i){if(t.stateNode===null)throw Error(h(166));return Pe(t),null}if(l=W.current,Bi(t))qd(t);else{var r=Kl(Se.current);switch(l){case 1:l=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:l=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":l=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":l=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":l=r.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?r.createElement(a,{is:i.is}):r.createElement(a)}}l[ht]=t,l[_t]=i;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)l.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=l;e:switch(gt(l,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&pn(t)}}return Pe(t),jo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&pn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(h(166));if(e=Se.current,Bi(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,a=ft,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||ah(e.nodeValue,n)),e||An(t,!0)}else e=Kl(e).createTextNode(i),e[ht]=t,t.stateNode=e}return Pe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Bi(t),n!==null){if(e===null){if(!i)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[ht]=t}else ni(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),e=!1}else n=Kr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Dt(t),t):(Dt(t),null);if((t.flags&128)!==0)throw Error(h(558))}return Pe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Bi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(h(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[ht]=t}else ni(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),a=!1}else a=Kr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Dt(t),t):(Dt(t),null)}return Dt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ol(t,t.updateQueue),Pe(t),null);case 4:return ke(),e===null&&os(t.stateNode.containerInfo),Pe(t),null;case 10:return un(t.type),Pe(t),null;case 19:if(C(nt),i=t.memoizedState,i===null)return Pe(t),null;if(a=(t.flags&128)!==0,l=i.rendering,l===null)if(a)Aa(i,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=xl(e),l!==null){for(t.flags|=128,Aa(i,!1),e=l.updateQueue,t.updateQueue=e,Ol(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ld(n,e),n=n.sibling;return te(nt,nt.current&1|2),Le&&dn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ge()>Ul&&(t.flags|=128,a=!0,Aa(i,!1),t.lanes=4194304)}else{if(!a)if(e=xl(l),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ol(t,e),Aa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Le)return Pe(t),null}else 2*ge()-i.renderingStartTime>Ul&&n!==536870912&&(t.flags|=128,a=!0,Aa(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(e=i.last,e!==null?e.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ge(),e.sibling=null,n=nt.current,te(nt,a?n&1|2:n&1),Le&&dn(t,i.treeForkCount),e):(Pe(t),null);case 22:case 23:return Dt(t),oo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),n=t.updateQueue,n!==null&&Ol(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&C(li),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),un(at),Pe(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function wm(e,t){switch(Xr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(at),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ke(t),null;case 31:if(t.memoizedState!==null){if(Dt(t),t.alternate===null)throw Error(h(340));ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(nt),null;case 4:return ke(),null;case 10:return un(t.type),null;case 22:case 23:return Dt(t),oo(),e!==null&&C(li),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return un(at),null;case 25:return null;default:return null}}function du(e,t){switch(Xr(t),t.tag){case 3:un(at),ke();break;case 26:case 27:case 5:Ke(t);break;case 4:ke();break;case 31:t.memoizedState!==null&&Dt(t);break;case 13:Dt(t);break;case 19:C(nt);break;case 10:un(t.type);break;case 22:case 23:Dt(t),oo(),e!==null&&C(li);break;case 24:un(at)}}function za(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&e)===e){i=void 0;var l=n.create,r=n.inst;i=l(),r.destroy=i}n=n.next}while(n!==a)}}catch(c){Fe(t,t.return,c)}}function Rn(e,t,n){try{var i=t.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var l=a.next;i=l;do{if((i.tag&e)===e){var r=i.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,a=t;var O=n,Y=c;try{Y()}catch(ee){Fe(a,O,ee)}}}i=i.next}while(i!==l)}}catch(ee){Fe(t,t.return,ee)}}function cu(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ec(t,n)}catch(i){Fe(e,e.return,i)}}}function uu(e,t,n){n.props=ci(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Fe(e,t,i)}}function Ma(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){Fe(e,t,a)}}function tn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){Fe(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){Fe(e,t,a)}else n.current=null}function hu(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){Fe(e,e.return,a)}}function Io(e,t,n){try{var i=e.stateNode;Zm(i,e.type,n,t),i[_t]=t}catch(a){Fe(e,e.return,a)}}function fu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fn(e.type)||e.tag===4}function qo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fo(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rn));else if(i!==4&&(i===27&&Fn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Fo(e,t,n),e=e.sibling;e!==null;)Fo(e,t,n),e=e.sibling}function Nl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Fn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Nl(e,t,n),e=e.sibling;e!==null;)Nl(e,t,n),e=e.sibling}function mu(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);gt(t,i,n),t[ht]=e,t[_t]=n}catch(l){Fe(e,e.return,l)}}var gn=!1,ot=!1,Go=!1,pu=typeof WeakSet=="function"?WeakSet:Set,ut=null;function km(e,t){if(e=e.containerInfo,cs=tr,e=Cd(e),Rr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var r=0,c=-1,O=-1,Y=0,ee=0,oe=e,V=null;t:for(;;){for(var Q;oe!==n||a!==0&&oe.nodeType!==3||(c=r+a),oe!==l||i!==0&&oe.nodeType!==3||(O=r+i),oe.nodeType===3&&(r+=oe.nodeValue.length),(Q=oe.firstChild)!==null;)V=oe,oe=Q;for(;;){if(oe===e)break t;if(V===n&&++Y===a&&(c=r),V===l&&++ee===i&&(O=r),(Q=oe.nextSibling)!==null)break;oe=V,V=oe.parentNode}oe=Q}n=c===-1||O===-1?null:{start:c,end:O}}else n=null}n=n||{start:0,end:0}}else n=null;for(us={focusedElem:e,selectionRange:n},tr=!1,ut=t;ut!==null;)if(t=ut,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ut=e;else for(;ut!==null;){switch(t=ut,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,a=l.memoizedProps,l=l.memoizedState,i=n.stateNode;try{var ye=ci(n.type,a);e=i.getSnapshotBeforeUpdate(ye,l),i.__reactInternalSnapshotBeforeUpdate=e}catch(Ee){Fe(n,n.return,Ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ms(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ms(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,ut=e;break}ut=t.return}}function gu(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:yn(e,n),i&4&&za(5,n);break;case 1:if(yn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){Fe(n,n.return,r)}else{var a=ci(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Fe(n,n.return,r)}}i&64&&cu(n),i&512&&Ma(n,n.return);break;case 3:if(yn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ec(e,t)}catch(r){Fe(n,n.return,r)}}break;case 27:t===null&&i&4&&mu(n);case 26:case 5:yn(e,n),t===null&&i&4&&hu(n),i&512&&Ma(n,n.return);break;case 12:yn(e,n);break;case 31:yn(e,n),i&4&&bu(e,n);break;case 13:yn(e,n),i&4&&xu(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Om.bind(null,n),$m(e,n))));break;case 22:if(i=n.memoizedState!==null||gn,!i){t=t!==null&&t.memoizedState!==null||ot,a=gn;var l=ot;gn=i,(ot=t)&&!l?bn(e,n,(n.subtreeFlags&8772)!==0):yn(e,n),gn=a,ot=l}break;case 30:break;default:yn(e,n)}}function vu(e){var t=e.alternate;t!==null&&(e.alternate=null,vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var We=null,kt=!1;function vn(e,t,n){for(n=n.child;n!==null;)yu(e,t,n),n=n.sibling}function yu(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Xe,n)}catch{}switch(n.tag){case 26:ot||tn(n,t),vn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ot||tn(n,t);var i=We,a=kt;Fn(n.type)&&(We=n.stateNode,kt=!1),vn(e,t,n),ja(n.stateNode),We=i,kt=a;break;case 5:ot||tn(n,t);case 6:if(i=We,a=kt,We=null,vn(e,t,n),We=i,kt=a,We!==null)if(kt)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(n.stateNode)}catch(l){Fe(n,t,l)}else try{We.removeChild(n.stateNode)}catch(l){Fe(n,t,l)}break;case 18:We!==null&&(kt?(e=We,ch(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Wi(e)):ch(We,n.stateNode));break;case 4:i=We,a=kt,We=n.stateNode.containerInfo,kt=!0,vn(e,t,n),We=i,kt=a;break;case 0:case 11:case 14:case 15:Rn(2,n,t),ot||Rn(4,n,t),vn(e,t,n);break;case 1:ot||(tn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&uu(n,t,i)),vn(e,t,n);break;case 21:vn(e,t,n);break;case 22:ot=(i=ot)||n.memoizedState!==null,vn(e,t,n),ot=i;break;default:vn(e,t,n)}}function bu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wi(e)}catch(n){Fe(t,t.return,n)}}}function xu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wi(e)}catch(n){Fe(t,t.return,n)}}function Em(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pu),t;default:throw Error(h(435,e.tag))}}function Rl(e,t){var n=Em(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var a=Nm.bind(null,e,i);i.then(a,a)}})}function Et(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],l=e,r=t,c=r;e:for(;c!==null;){switch(c.tag){case 27:if(Fn(c.type)){We=c.stateNode,kt=!1;break e}break;case 5:We=c.stateNode,kt=!1;break e;case 3:case 4:We=c.stateNode.containerInfo,kt=!0;break e}c=c.return}if(We===null)throw Error(h(160));yu(l,r,a),We=null,kt=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Su(t,e),t=t.sibling}var Pt=null;function Su(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),Tt(e),i&4&&(Rn(3,e,e.return),za(3,e),Rn(5,e,e.return));break;case 1:Et(t,e),Tt(e),i&512&&(ot||n===null||tn(n,n.return)),i&64&&gn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=Pt;if(Et(t,e),Tt(e),i&512&&(ot||n===null||tn(n,n.return)),i&4){var l=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":l=a.getElementsByTagName("title")[0],(!l||l[ia]||l[ht]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(i),a.head.insertBefore(l,a.querySelector("head > title"))),gt(l,i,n),l[ht]=e,ct(l),i=l;break e;case"link":var r=Sh("link","href",a).get(i+(n.href||""));if(r){for(var c=0;c<r.length;c++)if(l=r[c],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(c,1);break t}}l=a.createElement(i),gt(l,i,n),a.head.appendChild(l);break;case"meta":if(r=Sh("meta","content",a).get(i+(n.content||""))){for(c=0;c<r.length;c++)if(l=r[c],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(c,1);break t}}l=a.createElement(i),gt(l,i,n),a.head.appendChild(l);break;default:throw Error(h(468,i))}l[ht]=e,ct(l),i=l}e.stateNode=i}else _h(a,e.type,e.stateNode);else e.stateNode=xh(a,i,e.memoizedProps);else l!==i?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,i===null?_h(a,e.type,e.stateNode):xh(a,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Io(e,e.memoizedProps,n.memoizedProps)}break;case 27:Et(t,e),Tt(e),i&512&&(ot||n===null||tn(n,n.return)),n!==null&&i&4&&Io(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Et(t,e),Tt(e),i&512&&(ot||n===null||tn(n,n.return)),e.flags&32){a=e.stateNode;try{Si(a,"")}catch(ye){Fe(e,e.return,ye)}}i&4&&e.stateNode!=null&&(a=e.memoizedProps,Io(e,a,n!==null?n.memoizedProps:a)),i&1024&&(Go=!0);break;case 6:if(Et(t,e),Tt(e),i&4){if(e.stateNode===null)throw Error(h(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ye){Fe(e,e.return,ye)}}break;case 3:if(Jl=null,a=Pt,Pt=Ql(t.containerInfo),Et(t,e),Pt=a,Tt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(ye){Fe(e,e.return,ye)}Go&&(Go=!1,_u(e));break;case 4:i=Pt,Pt=Ql(e.stateNode.containerInfo),Et(t,e),Tt(e),Pt=i;break;case 12:Et(t,e),Tt(e);break;case 31:Et(t,e),Tt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 13:Et(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hl=ge()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 22:a=e.memoizedState!==null;var O=n!==null&&n.memoizedState!==null,Y=gn,ee=ot;if(gn=Y||a,ot=ee||O,Et(t,e),ot=ee,gn=Y,Tt(e),i&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||O||gn||ot||ui(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){O=n=t;try{if(l=O.stateNode,a)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{c=O.stateNode;var oe=O.memoizedProps.style,V=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;c.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(ye){Fe(O,O.return,ye)}}}else if(t.tag===6){if(n===null){O=t;try{O.stateNode.nodeValue=a?"":O.memoizedProps}catch(ye){Fe(O,O.return,ye)}}}else if(t.tag===18){if(n===null){O=t;try{var Q=O.stateNode;a?uh(Q,!0):uh(O.stateNode,!1)}catch(ye){Fe(O,O.return,ye)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Rl(e,n))));break;case 19:Et(t,e),Tt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Rl(e,i)));break;case 30:break;case 21:break;default:Et(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(fu(i)){n=i;break}i=i.return}if(n==null)throw Error(h(160));switch(n.tag){case 27:var a=n.stateNode,l=qo(e);Nl(e,l,a);break;case 5:var r=n.stateNode;n.flags&32&&(Si(r,""),n.flags&=-33);var c=qo(e);Nl(e,c,r);break;case 3:case 4:var O=n.stateNode.containerInfo,Y=qo(e);Fo(e,Y,O);break;default:throw Error(h(161))}}catch(ee){Fe(e,e.return,ee)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _u(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;_u(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)gu(e,t.alternate,t),t=t.sibling}function ui(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Rn(4,t,t.return),ui(t);break;case 1:tn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&uu(t,t.return,n),ui(t);break;case 27:ja(t.stateNode);case 26:case 5:tn(t,t.return),ui(t);break;case 22:t.memoizedState===null&&ui(t);break;case 30:ui(t);break;default:ui(t)}e=e.sibling}}function bn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,a=e,l=t,r=l.flags;switch(l.tag){case 0:case 11:case 15:bn(a,l,n),za(4,l);break;case 1:if(bn(a,l,n),i=l,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(Y){Fe(i,i.return,Y)}if(i=l,a=i.updateQueue,a!==null){var c=i.stateNode;try{var O=a.shared.hiddenCallbacks;if(O!==null)for(a.shared.hiddenCallbacks=null,a=0;a<O.length;a++)$d(O[a],c)}catch(Y){Fe(i,i.return,Y)}}n&&r&64&&cu(l),Ma(l,l.return);break;case 27:mu(l);case 26:case 5:bn(a,l,n),n&&i===null&&r&4&&hu(l),Ma(l,l.return);break;case 12:bn(a,l,n);break;case 31:bn(a,l,n),n&&r&4&&bu(a,l);break;case 13:bn(a,l,n),n&&r&4&&xu(a,l);break;case 22:l.memoizedState===null&&bn(a,l,n),Ma(l,l.return);break;case 30:break;default:bn(a,l,n)}t=t.sibling}}function Yo(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function Zo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Jt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wu(e,t,n,i),t=t.sibling}function wu(e,t,n,i){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,n,i),a&2048&&za(9,t);break;case 1:Jt(e,t,n,i);break;case 3:Jt(e,t,n,i),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(a&2048){Jt(e,t,n,i),e=t.stateNode;try{var l=t.memoizedProps,r=l.id,c=l.onPostCommit;typeof c=="function"&&c(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){Fe(t,t.return,O)}}else Jt(e,t,n,i);break;case 31:Jt(e,t,n,i);break;case 13:Jt(e,t,n,i);break;case 23:break;case 22:l=t.stateNode,r=t.alternate,t.memoizedState!==null?l._visibility&2?Jt(e,t,n,i):Ba(e,t):l._visibility&2?Jt(e,t,n,i):(l._visibility|=2,qi(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Yo(r,t);break;case 24:Jt(e,t,n,i),a&2048&&Zo(t.alternate,t);break;default:Jt(e,t,n,i)}}function qi(e,t,n,i,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,r=t,c=n,O=i,Y=r.flags;switch(r.tag){case 0:case 11:case 15:qi(l,r,c,O,a),za(8,r);break;case 23:break;case 22:var ee=r.stateNode;r.memoizedState!==null?ee._visibility&2?qi(l,r,c,O,a):Ba(l,r):(ee._visibility|=2,qi(l,r,c,O,a)),a&&Y&2048&&Yo(r.alternate,r);break;case 24:qi(l,r,c,O,a),a&&Y&2048&&Zo(r.alternate,r);break;default:qi(l,r,c,O,a)}t=t.sibling}}function Ba(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,a=i.flags;switch(i.tag){case 22:Ba(n,i),a&2048&&Yo(i.alternate,i);break;case 24:Ba(n,i),a&2048&&Zo(i.alternate,i);break;default:Ba(n,i)}t=t.sibling}}var Da=8192;function Fi(e,t,n){if(e.subtreeFlags&Da)for(e=e.child;e!==null;)ku(e,t,n),e=e.sibling}function ku(e,t,n){switch(e.tag){case 26:Fi(e,t,n),e.flags&Da&&e.memoizedState!==null&&up(n,Pt,e.memoizedState,e.memoizedProps);break;case 5:Fi(e,t,n);break;case 3:case 4:var i=Pt;Pt=Ql(e.stateNode.containerInfo),Fi(e,t,n),Pt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Da,Da=16777216,Fi(e,t,n),Da=i):Fi(e,t,n));break;default:Fi(e,t,n)}}function Eu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Oa(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ut=i,Cu(i,e)}Eu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tu(e),e=e.sibling}function Tu(e){switch(e.tag){case 0:case 11:case 15:Oa(e),e.flags&2048&&Rn(9,e,e.return);break;case 3:Oa(e);break;case 12:Oa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Oa(e);break;default:Oa(e)}}function Ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ut=i,Cu(i,e)}Eu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Rn(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Cu(e,t){for(;ut!==null;){var n=ut;switch(n.tag){case 0:case 11:case 15:Rn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ga(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ut=i;else e:for(n=e;ut!==null;){i=ut;var a=i.sibling,l=i.return;if(vu(i),i===n){ut=null;break e}if(a!==null){a.return=l,ut=a;break e}ut=l}}}var Tm={getCacheForType:function(e){var t=mt(at),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return mt(at).controller.signal}},Cm=typeof WeakMap=="function"?WeakMap:Map,je=0,Ve=null,De=null,Ne=0,qe=0,Ot=null,Ln=!1,Gi=!1,Xo=!1,xn=0,tt=0,Hn=0,hi=0,Vo=0,Nt=0,Yi=0,Na=null,Ct=null,Ko=!1,Hl=0,Au=0,Ul=1/0,jl=null,Un=null,st=0,jn=null,Zi=null,Sn=0,Qo=0,Po=null,zu=null,Ra=0,Jo=null;function Rt(){return(je&2)!==0&&Ne!==0?Ne&-Ne:q.T!==null?is():Zs()}function Mu(){if(Nt===0)if((Ne&536870912)===0||Le){var e=Qn;Qn<<=1,(Qn&3932160)===0&&(Qn=262144),Nt=e}else Nt=536870912;return e=Bt.current,e!==null&&(e.flags|=32),Nt}function At(e,t,n){(e===Ve&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(Xi(e,0),In(e,Ne,Nt,!1)),na(e,n),((je&2)===0||e!==Ve)&&(e===Ve&&((je&2)===0&&(hi|=n),tt===4&&In(e,Ne,Nt,!1)),nn(e))}function Bu(e,t,n){if((je&6)!==0)throw Error(h(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ta(e,t),a=i?Mm(e,t):$o(e,t,!0),l=i;do{if(a===0){Gi&&!i&&In(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!Am(n)){a=$o(e,t,!1),l=!1;continue}if(a===2){if(l=t,e.errorRecoveryDisabledLanes&l)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var c=e;a=Na;var O=c.current.memoizedState.isDehydrated;if(O&&(Xi(c,r).flags|=256),r=$o(c,r,!1),r!==2){if(Xo&&!O){c.errorRecoveryDisabledLanes|=l,hi|=l,a=4;break e}l=Ct,Ct=a,l!==null&&(Ct===null?Ct=l:Ct.push.apply(Ct,l))}a=r}if(l=!1,a!==2)continue}}if(a===1){Xi(e,0),In(e,t,0,!0);break}e:{switch(i=e,l=a,l){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:In(i,t,Nt,!Ln);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(a=Hl+300-ge(),10<a)){if(In(i,t,Nt,!Ln),Qa(i,0,!0)!==0)break e;Sn=t,i.timeoutHandle=sh(Du.bind(null,i,n,Ct,jl,Ko,t,Nt,hi,Yi,Ln,l,"Throttled",-0,0),a);break e}Du(i,n,Ct,jl,Ko,t,Nt,hi,Yi,Ln,l,null,-0,0)}}break}while(!0);nn(e)}function Du(e,t,n,i,a,l,r,c,O,Y,ee,oe,V,Q){if(e.timeoutHandle=-1,oe=t.subtreeFlags,oe&8192||(oe&16785408)===16785408){oe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rn},ku(t,l,oe);var ye=(l&62914560)===l?Hl-ge():(l&4194048)===l?Au-ge():0;if(ye=hp(oe,ye),ye!==null){Sn=l,e.cancelPendingCommit=ye(Iu.bind(null,e,t,l,n,i,a,r,c,O,ee,oe,null,V,Q)),In(e,l,r,!Y);return}}Iu(e,t,l,n,i,a,r,c,O)}function Am(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],l=a.getSnapshot;a=a.value;try{if(!zt(l(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function In(e,t,n,i){t&=~Vo,t&=~hi,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var a=t;0<a;){var l=31-$e(a),r=1<<l;i[l]=-1,a&=~r}n!==0&&Fs(e,n,t)}function Il(){return(je&6)===0?(La(0),!1):!0}function Wo(){if(De!==null){if(qe===0)var e=De.return;else e=De,cn=ii=null,mo(e),Li=null,ya=0,e=De;for(;e!==null;)du(e.alternate,e),e=e.return;De=null}}function Xi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Km(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sn=0,Wo(),Ve=e,De=n=sn(e.current,null),Ne=t,qe=0,Ot=null,Ln=!1,Gi=ta(e,t),Xo=!1,Yi=Nt=Vo=hi=Hn=tt=0,Ct=Na=null,Ko=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var a=31-$e(i),l=1<<a;t|=e[a],i&=~l}return xn=t,ol(),n}function Ou(e,t){ze=null,q.H=Ta,t===Ri||t===pl?(t=Qd(),qe=3):t===to?(t=Qd(),qe=4):qe=t===Mo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ot=t,De===null&&(tt=1,zl(e,Ft(t,e.current)))}function Nu(){var e=Bt.current;return e===null?!0:(Ne&4194048)===Ne?Xt===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?e===Xt:!1}function Ru(){var e=q.H;return q.H=Ta,e===null?Ta:e}function Lu(){var e=q.A;return q.A=Tm,e}function ql(){tt=4,Ln||(Ne&4194048)!==Ne&&Bt.current!==null||(Gi=!0),(Hn&134217727)===0&&(hi&134217727)===0||Ve===null||In(Ve,Ne,Nt,!1)}function $o(e,t,n){var i=je;je|=2;var a=Ru(),l=Lu();(Ve!==e||Ne!==t)&&(jl=null,Xi(e,t)),t=!1;var r=tt;e:do try{if(qe!==0&&De!==null){var c=De,O=Ot;switch(qe){case 8:Wo(),r=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var Y=qe;if(qe=0,Ot=null,Vi(e,c,O,Y),n&&Gi){r=0;break e}break;default:Y=qe,qe=0,Ot=null,Vi(e,c,O,Y)}}zm(),r=tt;break}catch(ee){Ou(e,ee)}while(!0);return t&&e.shellSuspendCounter++,cn=ii=null,je=i,q.H=a,q.A=l,De===null&&(Ve=null,Ne=0,ol()),r}function zm(){for(;De!==null;)Hu(De)}function Mm(e,t){var n=je;je|=2;var i=Ru(),a=Lu();Ve!==e||Ne!==t?(jl=null,Ul=ge()+500,Xi(e,t)):Gi=ta(e,t);e:do try{if(qe!==0&&De!==null){t=De;var l=Ot;t:switch(qe){case 1:qe=0,Ot=null,Vi(e,t,l,1);break;case 2:case 9:if(Vd(l)){qe=0,Ot=null,Uu(t);break}t=function(){qe!==2&&qe!==9||Ve!==e||(qe=7),nn(e)},l.then(t,t);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:Vd(l)?(qe=0,Ot=null,Uu(t)):(qe=0,Ot=null,Vi(e,t,l,7));break;case 5:var r=null;switch(De.tag){case 26:r=De.memoizedState;case 5:case 27:var c=De;if(r?wh(r):c.stateNode.complete){qe=0,Ot=null;var O=c.sibling;if(O!==null)De=O;else{var Y=c.return;Y!==null?(De=Y,Fl(Y)):De=null}break t}}qe=0,Ot=null,Vi(e,t,l,5);break;case 6:qe=0,Ot=null,Vi(e,t,l,6);break;case 8:Wo(),tt=6;break e;default:throw Error(h(462))}}Bm();break}catch(ee){Ou(e,ee)}while(!0);return cn=ii=null,q.H=i,q.A=a,je=n,De!==null?0:(Ve=null,Ne=0,ol(),tt)}function Bm(){for(;De!==null&&!X();)Hu(De)}function Hu(e){var t=ou(e.alternate,e,xn);e.memoizedProps=e.pendingProps,t===null?Fl(e):De=t}function Uu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=tu(n,t,t.pendingProps,t.type,void 0,Ne);break;case 11:t=tu(n,t,t.pendingProps,t.type.render,t.ref,Ne);break;case 5:mo(t);default:du(n,t),t=De=Ld(t,xn),t=ou(n,t,xn)}e.memoizedProps=e.pendingProps,t===null?Fl(e):De=t}function Vi(e,t,n,i){cn=ii=null,mo(t),Li=null,ya=0;var a=t.return;try{if(bm(e,a,t,n,Ne)){tt=1,zl(e,Ft(n,e.current)),De=null;return}}catch(l){if(a!==null)throw De=a,l;tt=1,zl(e,Ft(n,e.current)),De=null;return}t.flags&32768?(Le||i===1?e=!0:Gi||(Ne&536870912)!==0?e=!1:(Ln=e=!0,(i===2||i===9||i===3||i===6)&&(i=Bt.current,i!==null&&i.tag===13&&(i.flags|=16384))),ju(t,e)):Fl(t)}function Fl(e){var t=e;do{if((t.flags&32768)!==0){ju(t,Ln);return}e=t.return;var n=_m(t.alternate,t,xn);if(n!==null){De=n;return}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);tt===0&&(tt=5)}function ju(e,t){do{var n=wm(e.alternate,e);if(n!==null){n.flags&=32767,De=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){De=e;return}De=e=n}while(e!==null);tt=6,De=null}function Iu(e,t,n,i,a,l,r,c,O){e.cancelPendingCommit=null;do Gl();while(st!==0);if((je&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(l=t.lanes|t.childLanes,l|=Ir,cf(e,n,l,r,c,O),e===Ve&&(De=Ve=null,Ne=0),Zi=t,jn=e,Sn=n,Qo=l,Po=a,zu=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Rm(Be,function(){return Zu(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=q.T,q.T=null,a=F.p,F.p=2,r=je,je|=4;try{km(e,t,n)}finally{je=r,F.p=a,q.T=i}}st=1,qu(),Fu(),Gu()}}function qu(){if(st===1){st=0;var e=jn,t=Zi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=q.T,q.T=null;var i=F.p;F.p=2;var a=je;je|=4;try{Su(t,e);var l=us,r=Cd(e.containerInfo),c=l.focusedElem,O=l.selectionRange;if(r!==c&&c&&c.ownerDocument&&Td(c.ownerDocument.documentElement,c)){if(O!==null&&Rr(c)){var Y=O.start,ee=O.end;if(ee===void 0&&(ee=Y),"selectionStart"in c)c.selectionStart=Y,c.selectionEnd=Math.min(ee,c.value.length);else{var oe=c.ownerDocument||document,V=oe&&oe.defaultView||window;if(V.getSelection){var Q=V.getSelection(),ye=c.textContent.length,Ee=Math.min(O.start,ye),Ze=O.end===void 0?Ee:Math.min(O.end,ye);!Q.extend&&Ee>Ze&&(r=Ze,Ze=Ee,Ee=r);var H=Ed(c,Ee),R=Ed(c,Ze);if(H&&R&&(Q.rangeCount!==1||Q.anchorNode!==H.node||Q.anchorOffset!==H.offset||Q.focusNode!==R.node||Q.focusOffset!==R.offset)){var G=oe.createRange();G.setStart(H.node,H.offset),Q.removeAllRanges(),Ee>Ze?(Q.addRange(G),Q.extend(R.node,R.offset)):(G.setEnd(R.node,R.offset),Q.addRange(G))}}}}for(oe=[],Q=c;Q=Q.parentNode;)Q.nodeType===1&&oe.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<oe.length;c++){var ae=oe[c];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}tr=!!cs,us=cs=null}finally{je=a,F.p=i,q.T=n}}e.current=t,st=2}}function Fu(){if(st===2){st=0;var e=jn,t=Zi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=q.T,q.T=null;var i=F.p;F.p=2;var a=je;je|=4;try{gu(e,t.alternate,t)}finally{je=a,F.p=i,q.T=n}}st=3}}function Gu(){if(st===4||st===3){st=0,fe();var e=jn,t=Zi,n=Sn,i=zu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,Zi=jn=null,Yu(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Un=null),gr(n),t=t.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Xe,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=q.T,a=F.p,F.p=2,q.T=null;try{for(var l=e.onRecoverableError,r=0;r<i.length;r++){var c=i[r];l(c.value,{componentStack:c.stack})}}finally{q.T=t,F.p=a}}(Sn&3)!==0&&Gl(),nn(e),a=e.pendingLanes,(n&261930)!==0&&(a&42)!==0?e===Jo?Ra++:(Ra=0,Jo=e):Ra=0,La(0)}}function Yu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Gl(){return qu(),Fu(),Gu(),Zu()}function Zu(){if(st!==5)return!1;var e=jn,t=Qo;Qo=0;var n=gr(Sn),i=q.T,a=F.p;try{F.p=32>n?32:n,q.T=null,n=Po,Po=null;var l=jn,r=Sn;if(st=0,Zi=jn=null,Sn=0,(je&6)!==0)throw Error(h(331));var c=je;if(je|=4,Tu(l.current),wu(l,l.current,r,n),je=c,La(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Xe,l)}catch{}return!0}finally{F.p=a,q.T=i,Yu(e,t)}}function Xu(e,t,n){t=Ft(n,t),t=zo(e.stateNode,t,2),e=Dn(e,t,2),e!==null&&(na(e,2),nn(e))}function Fe(e,t,n){if(e.tag===3)Xu(e,e,n);else for(;t!==null;){if(t.tag===3){Xu(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Un===null||!Un.has(i))){e=Ft(n,e),n=Vc(2),i=Dn(t,n,2),i!==null&&(Kc(n,i,t,e),na(i,2),nn(i));break}}t=t.return}}function es(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Cm;var a=new Set;i.set(t,a)}else a=i.get(t),a===void 0&&(a=new Set,i.set(t,a));a.has(n)||(Xo=!0,a.add(n),e=Dm.bind(null,e,t,n),t.then(e,e))}function Dm(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ve===e&&(Ne&n)===n&&(tt===4||tt===3&&(Ne&62914560)===Ne&&300>ge()-Hl?(je&2)===0&&Xi(e,0):Vo|=n,Yi===Ne&&(Yi=0)),nn(e)}function Vu(e,t){t===0&&(t=qs()),e=ei(e,t),e!==null&&(na(e,t),nn(e))}function Om(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vu(e,n)}function Nm(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(h(314))}i!==null&&i.delete(t),Vu(e,n)}function Rm(e,t){return se(e,t)}var Yl=null,Ki=null,ts=!1,Zl=!1,ns=!1,qn=0;function nn(e){e!==Ki&&e.next===null&&(Ki===null?Yl=Ki=e:Ki=Ki.next=e),Zl=!0,ts||(ts=!0,Hm())}function La(e,t){if(!ns&&Zl){ns=!0;do for(var n=!1,i=Yl;i!==null;){if(e!==0){var a=i.pendingLanes;if(a===0)var l=0;else{var r=i.suspendedLanes,c=i.pingedLanes;l=(1<<31-$e(42|e)+1)-1,l&=a&~(r&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Ju(i,l))}else l=Ne,l=Qa(i,i===Ve?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||ta(i,l)||(n=!0,Ju(i,l));i=i.next}while(n);ns=!1}}function Lm(){Ku()}function Ku(){Zl=ts=!1;var e=0;qn!==0&&Vm()&&(e=qn);for(var t=ge(),n=null,i=Yl;i!==null;){var a=i.next,l=Qu(i,t);l===0?(i.next=null,n===null?Yl=a:n.next=a,a===null&&(Ki=n)):(n=i,(e!==0||(l&3)!==0)&&(Zl=!0)),i=a}st!==0&&st!==5||La(e),qn!==0&&(qn=0)}function Qu(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var r=31-$e(l),c=1<<r,O=a[r];O===-1?((c&n)===0||(c&i)!==0)&&(a[r]=df(c,t)):O<=t&&(e.expiredLanes|=c),l&=~c}if(t=Ve,n=Ne,n=Qa(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ce(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ta(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&ce(i),gr(n)){case 2:case 8:n=Ie;break;case 32:n=Be;break;case 268435456:n=wn;break;default:n=Be}return i=Pu.bind(null,e),n=se(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&ce(i),e.callbackPriority=2,e.callbackNode=null,2}function Pu(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Gl()&&e.callbackNode!==n)return null;var i=Ne;return i=Qa(e,e===Ve?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Bu(e,i,t),Qu(e,ge()),e.callbackNode!=null&&e.callbackNode===n?Pu.bind(null,e):null)}function Ju(e,t){if(Gl())return null;Bu(e,t,!0)}function Hm(){Qm(function(){(je&6)!==0?se(_e,Lm):Ku()})}function is(){if(qn===0){var e=Oi;e===0&&(e=mi,mi<<=1,(mi&261888)===0&&(mi=256)),qn=e}return qn}function Wu(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$a(""+e)}function $u(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Um(e,t,n,i,a){if(t==="submit"&&n&&n.stateNode===a){var l=Wu((a[_t]||null).action),r=i.submitter;r&&(t=(t=r[_t]||null)?Wu(t.formAction):r.getAttribute("formAction"),t!==null&&(l=t,r=null));var c=new il("action","action",null,i,a);e.push({event:c,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(qn!==0){var O=r?$u(a,r):new FormData(a);wo(n,{pending:!0,data:O,method:a.method,action:l},null,O)}}else typeof l=="function"&&(c.preventDefault(),O=r?$u(a,r):new FormData(a),wo(n,{pending:!0,data:O,method:a.method,action:l},l,O))},currentTarget:a}]})}}for(var as=0;as<jr.length;as++){var ls=jr[as],jm=ls.toLowerCase(),Im=ls[0].toUpperCase()+ls.slice(1);Qt(jm,"on"+Im)}Qt(Md,"onAnimationEnd"),Qt(Bd,"onAnimationIteration"),Qt(Dd,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(nm,"onTransitionRun"),Qt(im,"onTransitionStart"),Qt(am,"onTransitionCancel"),Qt(Od,"onTransitionEnd"),bi("onMouseEnter",["mouseout","mouseover"]),bi("onMouseLeave",["mouseout","mouseover"]),bi("onPointerEnter",["pointerout","pointerover"]),bi("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ha));function eh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],a=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var r=i.length-1;0<=r;r--){var c=i[r],O=c.instance,Y=c.currentTarget;if(c=c.listener,O!==l&&a.isPropagationStopped())break e;l=c,a.currentTarget=Y;try{l(a)}catch(ee){rl(ee)}a.currentTarget=null,l=O}else for(r=0;r<i.length;r++){if(c=i[r],O=c.instance,Y=c.currentTarget,c=c.listener,O!==l&&a.isPropagationStopped())break e;l=c,a.currentTarget=Y;try{l(a)}catch(ee){rl(ee)}a.currentTarget=null,l=O}}}}function Oe(e,t){var n=t[vr];n===void 0&&(n=t[vr]=new Set);var i=e+"__bubble";n.has(i)||(th(t,e,2,!1),n.add(i))}function rs(e,t,n){var i=0;t&&(i|=4),th(n,e,i,t)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function os(e){if(!e[Xl]){e[Xl]=!0,Ks.forEach(function(n){n!=="selectionchange"&&(qm.has(n)||rs(n,!1,e),rs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xl]||(t[Xl]=!0,rs("selectionchange",!1,t))}}function th(e,t,n,i){switch(Mh(t)){case 2:var a=pp;break;case 8:a=gp;break;default:a=_s}n=a.bind(null,t,n,e),a=void 0,!Tr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),i?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ss(e,t,n,i,a){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var c=i.stateNode.containerInfo;if(c===a)break;if(r===4)for(r=i.return;r!==null;){var O=r.tag;if((O===3||O===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;c!==null;){if(r=gi(c),r===null)return;if(O=r.tag,O===5||O===6||O===26||O===27){i=l=r;continue e}c=c.parentNode}}i=i.return}rd(function(){var Y=l,ee=kr(n),oe=[];e:{var V=Nd.get(e);if(V!==void 0){var Q=il,ye=e;switch(e){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":Q=Nf;break;case"focusin":ye="focus",Q=Mr;break;case"focusout":ye="blur",Q=Mr;break;case"beforeblur":case"afterblur":Q=Mr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=_f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Hf;break;case Md:case Bd:case Dd:Q=Ef;break;case Od:Q=jf;break;case"scroll":case"scrollend":Q=xf;break;case"wheel":Q=qf;break;case"copy":case"cut":case"paste":Q=Cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=ud;break;case"toggle":case"beforetoggle":Q=Gf}var Ee=(t&4)!==0,Ze=!Ee&&(e==="scroll"||e==="scrollend"),H=Ee?V!==null?V+"Capture":null:V;Ee=[];for(var R=Y,G;R!==null;){var ae=R;if(G=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||G===null||H===null||(ae=la(R,H),ae!=null&&Ee.push(Ua(R,ae,G))),Ze)break;R=R.return}0<Ee.length&&(V=new Q(V,ye,null,n,ee),oe.push({event:V,listeners:Ee}))}}if((t&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",V&&n!==wr&&(ye=n.relatedTarget||n.fromElement)&&(gi(ye)||ye[pi]))break e;if((Q||V)&&(V=ee.window===ee?ee:(V=ee.ownerDocument)?V.defaultView||V.parentWindow:window,Q?(ye=n.relatedTarget||n.toElement,Q=Y,ye=ye?gi(ye):null,ye!==null&&(Ze=v(ye),Ee=ye.tag,ye!==Ze||Ee!==5&&Ee!==27&&Ee!==6)&&(ye=null)):(Q=null,ye=Y),Q!==ye)){if(Ee=dd,ae="onMouseLeave",H="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(Ee=ud,ae="onPointerLeave",H="onPointerEnter",R="pointer"),Ze=Q==null?V:aa(Q),G=ye==null?V:aa(ye),V=new Ee(ae,R+"leave",Q,n,ee),V.target=Ze,V.relatedTarget=G,ae=null,gi(ee)===Y&&(Ee=new Ee(H,R+"enter",ye,n,ee),Ee.target=G,Ee.relatedTarget=Ze,ae=Ee),Ze=ae,Q&&ye)t:{for(Ee=Fm,H=Q,R=ye,G=0,ae=H;ae;ae=Ee(ae))G++;ae=0;for(var we=R;we;we=Ee(we))ae++;for(;0<G-ae;)H=Ee(H),G--;for(;0<ae-G;)R=Ee(R),ae--;for(;G--;){if(H===R||R!==null&&H===R.alternate){Ee=H;break t}H=Ee(H),R=Ee(R)}Ee=null}else Ee=null;Q!==null&&nh(oe,V,Q,Ee,!1),ye!==null&&Ze!==null&&nh(oe,Ze,ye,Ee,!0)}}e:{if(V=Y?aa(Y):window,Q=V.nodeName&&V.nodeName.toLowerCase(),Q==="select"||Q==="input"&&V.type==="file")var He=bd;else if(vd(V))if(xd)He=$f;else{He=Jf;var xe=Pf}else Q=V.nodeName,!Q||Q.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?Y&&_r(Y.elementType)&&(He=bd):He=Wf;if(He&&(He=He(e,Y))){yd(oe,He,n,ee);break e}xe&&xe(e,V,Y),e==="focusout"&&Y&&V.type==="number"&&Y.memoizedProps.value!=null&&Sr(V,"number",V.value)}switch(xe=Y?aa(Y):window,e){case"focusin":(vd(xe)||xe.contentEditable==="true")&&(Ei=xe,Lr=Y,fa=null);break;case"focusout":fa=Lr=Ei=null;break;case"mousedown":Hr=!0;break;case"contextmenu":case"mouseup":case"dragend":Hr=!1,Ad(oe,n,ee);break;case"selectionchange":if(tm)break;case"keydown":case"keyup":Ad(oe,n,ee)}var Me;if(Dr)e:{switch(e){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else ki?pd(e,n)&&(Re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Re="onCompositionStart");Re&&(hd&&n.locale!=="ko"&&(ki||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&ki&&(Me=od()):(En=ee,Cr="value"in En?En.value:En.textContent,ki=!0)),xe=Vl(Y,Re),0<xe.length&&(Re=new cd(Re,e,null,n,ee),oe.push({event:Re,listeners:xe}),Me?Re.data=Me:(Me=gd(n),Me!==null&&(Re.data=Me)))),(Me=Zf?Xf(e,n):Vf(e,n))&&(Re=Vl(Y,"onBeforeInput"),0<Re.length&&(xe=new cd("onBeforeInput","beforeinput",null,n,ee),oe.push({event:xe,listeners:Re}),xe.data=Me)),Um(oe,e,Y,n,ee)}eh(oe,t)})}function Ua(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vl(e,t){for(var n=t+"Capture",i=[];e!==null;){var a=e,l=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=la(e,n),a!=null&&i.unshift(Ua(e,a,l)),a=la(e,t),a!=null&&i.push(Ua(e,a,l))),e.tag===3)return i;e=e.return}return[]}function Fm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nh(e,t,n,i,a){for(var l=t._reactName,r=[];n!==null&&n!==i;){var c=n,O=c.alternate,Y=c.stateNode;if(c=c.tag,O!==null&&O===i)break;c!==5&&c!==26&&c!==27||Y===null||(O=Y,a?(Y=la(n,l),Y!=null&&r.unshift(Ua(n,Y,O))):a||(Y=la(n,l),Y!=null&&r.push(Ua(n,Y,O)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Gm=/\r\n?/g,Ym=/\u0000|\uFFFD/g;function ih(e){return(typeof e=="string"?e:""+e).replace(Gm,`
`).replace(Ym,"")}function ah(e,t){return t=ih(t),ih(e)===t}function Ye(e,t,n,i,a,l){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Si(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Si(e,""+i);break;case"className":Ja(e,"class",i);break;case"tabIndex":Ja(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ja(e,n,i);break;case"style":ad(e,i,l);break;case"data":if(t!=="object"){Ja(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$a(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&Ye(e,t,"name",a.name,a,null),Ye(e,t,"formEncType",a.formEncType,a,null),Ye(e,t,"formMethod",a.formMethod,a,null),Ye(e,t,"formTarget",a.formTarget,a,null)):(Ye(e,t,"encType",a.encType,a,null),Ye(e,t,"method",a.method,a,null),Ye(e,t,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=$a(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=rn);break;case"onScroll":i!=null&&Oe("scroll",e);break;case"onScrollEnd":i!=null&&Oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(h(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=$a(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Oe("beforetoggle",e),Oe("toggle",e),Pa(e,"popover",i);break;case"xlinkActuate":ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ln(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ln(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ln(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ln(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Pa(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=yf.get(n)||n,Pa(e,n,i))}}function ds(e,t,n,i,a,l){switch(n){case"style":ad(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(h(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(h(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Si(e,i):(typeof i=="number"||typeof i=="bigint")&&Si(e,""+i);break;case"onScroll":i!=null&&Oe("scroll",e);break;case"onScrollEnd":i!=null&&Oe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=rn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qs.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),l=e[_t]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,a),typeof i=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,a);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Pa(e,n,i)}}}function gt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Oe("error",e),Oe("load",e);var i=!1,a=!1,l;for(l in n)if(n.hasOwnProperty(l)){var r=n[l];if(r!=null)switch(l){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:Ye(e,t,l,r,n,null)}}a&&Ye(e,t,"srcSet",n.srcSet,n,null),i&&Ye(e,t,"src",n.src,n,null);return;case"input":Oe("invalid",e);var c=l=r=a=null,O=null,Y=null;for(i in n)if(n.hasOwnProperty(i)){var ee=n[i];if(ee!=null)switch(i){case"name":a=ee;break;case"type":r=ee;break;case"checked":O=ee;break;case"defaultChecked":Y=ee;break;case"value":l=ee;break;case"defaultValue":c=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(h(137,t));break;default:Ye(e,t,i,ee,n,null)}}ed(e,l,c,O,Y,r,a,!1);return;case"select":Oe("invalid",e),i=r=l=null;for(a in n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case"value":l=c;break;case"defaultValue":r=c;break;case"multiple":i=c;default:Ye(e,t,a,c,n,null)}t=l,n=r,e.multiple=!!i,t!=null?xi(e,!!i,t,!1):n!=null&&xi(e,!!i,n,!0);return;case"textarea":Oe("invalid",e),l=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(c=n[r],c!=null))switch(r){case"value":i=c;break;case"defaultValue":a=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:Ye(e,t,r,c,n,null)}nd(e,i,a,l);return;case"option":for(O in n)n.hasOwnProperty(O)&&(i=n[O],i!=null)&&(O==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Ye(e,t,O,i,n,null));return;case"dialog":Oe("beforetoggle",e),Oe("toggle",e),Oe("cancel",e),Oe("close",e);break;case"iframe":case"object":Oe("load",e);break;case"video":case"audio":for(i=0;i<Ha.length;i++)Oe(Ha[i],e);break;case"image":Oe("error",e),Oe("load",e);break;case"details":Oe("toggle",e);break;case"embed":case"source":case"link":Oe("error",e),Oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in n)if(n.hasOwnProperty(Y)&&(i=n[Y],i!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:Ye(e,t,Y,i,n,null)}return;default:if(_r(t)){for(ee in n)n.hasOwnProperty(ee)&&(i=n[ee],i!==void 0&&ds(e,t,ee,i,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(i=n[c],i!=null&&Ye(e,t,c,i,n,null))}function Zm(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,r=null,c=null,O=null,Y=null,ee=null;for(Q in n){var oe=n[Q];if(n.hasOwnProperty(Q)&&oe!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":O=oe;default:i.hasOwnProperty(Q)||Ye(e,t,Q,null,i,oe)}}for(var V in i){var Q=i[V];if(oe=n[V],i.hasOwnProperty(V)&&(Q!=null||oe!=null))switch(V){case"type":l=Q;break;case"name":a=Q;break;case"checked":Y=Q;break;case"defaultChecked":ee=Q;break;case"value":r=Q;break;case"defaultValue":c=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(h(137,t));break;default:Q!==oe&&Ye(e,t,V,Q,i,oe)}}xr(e,r,c,O,Y,ee,l,a);return;case"select":Q=r=c=V=null;for(l in n)if(O=n[l],n.hasOwnProperty(l)&&O!=null)switch(l){case"value":break;case"multiple":Q=O;default:i.hasOwnProperty(l)||Ye(e,t,l,null,i,O)}for(a in i)if(l=i[a],O=n[a],i.hasOwnProperty(a)&&(l!=null||O!=null))switch(a){case"value":V=l;break;case"defaultValue":c=l;break;case"multiple":r=l;default:l!==O&&Ye(e,t,a,l,i,O)}t=c,n=r,i=Q,V!=null?xi(e,!!n,V,!1):!!i!=!!n&&(t!=null?xi(e,!!n,t,!0):xi(e,!!n,n?[]:"",!1));return;case"textarea":Q=V=null;for(c in n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!i.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Ye(e,t,c,null,i,a)}for(r in i)if(a=i[r],l=n[r],i.hasOwnProperty(r)&&(a!=null||l!=null))switch(r){case"value":V=a;break;case"defaultValue":Q=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(h(91));break;default:a!==l&&Ye(e,t,r,a,i,l)}td(e,V,Q);return;case"option":for(var ye in n)V=n[ye],n.hasOwnProperty(ye)&&V!=null&&!i.hasOwnProperty(ye)&&(ye==="selected"?e.selected=!1:Ye(e,t,ye,null,i,V));for(O in i)V=i[O],Q=n[O],i.hasOwnProperty(O)&&V!==Q&&(V!=null||Q!=null)&&(O==="selected"?e.selected=V&&typeof V!="function"&&typeof V!="symbol":Ye(e,t,O,V,i,Q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in n)V=n[Ee],n.hasOwnProperty(Ee)&&V!=null&&!i.hasOwnProperty(Ee)&&Ye(e,t,Ee,null,i,V);for(Y in i)if(V=i[Y],Q=n[Y],i.hasOwnProperty(Y)&&V!==Q&&(V!=null||Q!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(h(137,t));break;default:Ye(e,t,Y,V,i,Q)}return;default:if(_r(t)){for(var Ze in n)V=n[Ze],n.hasOwnProperty(Ze)&&V!==void 0&&!i.hasOwnProperty(Ze)&&ds(e,t,Ze,void 0,i,V);for(ee in i)V=i[ee],Q=n[ee],!i.hasOwnProperty(ee)||V===Q||V===void 0&&Q===void 0||ds(e,t,ee,V,i,Q);return}}for(var H in n)V=n[H],n.hasOwnProperty(H)&&V!=null&&!i.hasOwnProperty(H)&&Ye(e,t,H,null,i,V);for(oe in i)V=i[oe],Q=n[oe],!i.hasOwnProperty(oe)||V===Q||V==null&&Q==null||Ye(e,t,oe,V,i,Q)}function lh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Xm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],l=a.transferSize,r=a.initiatorType,c=a.duration;if(l&&c&&lh(r)){for(r=0,c=a.responseEnd,i+=1;i<n.length;i++){var O=n[i],Y=O.startTime;if(Y>c)break;var ee=O.transferSize,oe=O.initiatorType;ee&&lh(oe)&&(O=O.responseEnd,r+=ee*(O<c?1:(c-Y)/(O-Y)))}if(--i,t+=8*(l+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var cs=null,us=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function rh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function oh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function hs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fs=null;function Vm(){var e=window.event;return e&&e.type==="popstate"?e===fs?!1:(fs=e,!0):(fs=null,!1)}var sh=typeof setTimeout=="function"?setTimeout:void 0,Km=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,Qm=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(e){return dh.resolve(null).then(e).catch(Pm)}:sh;function Pm(e){setTimeout(function(){throw e})}function Fn(e){return e==="head"}function ch(e,t){var n=t,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(a),Wi(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ja(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ja(n);for(var l=n.firstChild;l;){var r=l.nextSibling,c=l.nodeName;l[ia]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=r}}else n==="body"&&ja(e.ownerDocument.body);n=a}while(n);Wi(t)}function uh(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function ms(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ms(n),yr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Jm(e,t,n,i){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ia])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function Wm(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Vt(e.nextSibling),e===null))return null;return e}function hh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Vt(e.nextSibling),e===null))return null;return e}function ps(e){return e.data==="$?"||e.data==="$~"}function gs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $m(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var vs=null;function fh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Vt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function mh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function ph(e,t,n){switch(t=Kl(n),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function ja(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yr(e)}var Kt=new Map,gh=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _n=F.d;F.d={f:ep,r:tp,D:np,C:ip,L:ap,m:lp,X:op,S:rp,M:sp};function ep(){var e=_n.f(),t=Il();return e||t}function tp(e){var t=vi(e);t!==null&&t.tag===5&&t.type==="form"?Oc(t):_n.r(e)}var Qi=typeof document>"u"?null:document;function vh(e,t,n){var i=Qi;if(i&&typeof t=="string"&&t){var a=It(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),gh.has(a)||(gh.add(a),e={rel:e,crossOrigin:n,href:t},i.querySelector(a)===null&&(t=i.createElement("link"),gt(t,"link",e),ct(t),i.head.appendChild(t)))}}function np(e){_n.D(e),vh("dns-prefetch",e,null)}function ip(e,t){_n.C(e,t),vh("preconnect",e,t)}function ap(e,t,n){_n.L(e,t,n);var i=Qi;if(i&&e&&t){var a='link[rel="preload"][as="'+It(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+It(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+It(n.imageSizes)+'"]')):a+='[href="'+It(e)+'"]';var l=a;switch(t){case"style":l=Pi(e);break;case"script":l=Ji(e)}Kt.has(l)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(l,e),i.querySelector(a)!==null||t==="style"&&i.querySelector(Ia(l))||t==="script"&&i.querySelector(qa(l))||(t=i.createElement("link"),gt(t,"link",e),ct(t),i.head.appendChild(t)))}}function lp(e,t){_n.m(e,t);var n=Qi;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+It(i)+'"][href="'+It(e)+'"]',l=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ji(e)}if(!Kt.has(l)&&(e=S({rel:"modulepreload",href:e},t),Kt.set(l,e),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(qa(l)))return}i=n.createElement("link"),gt(i,"link",e),ct(i),n.head.appendChild(i)}}}function rp(e,t,n){_n.S(e,t,n);var i=Qi;if(i&&e){var a=yi(i).hoistableStyles,l=Pi(e);t=t||"default";var r=a.get(l);if(!r){var c={loading:0,preload:null};if(r=i.querySelector(Ia(l)))c.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(l))&&ys(e,n);var O=r=i.createElement("link");ct(O),gt(O,"link",e),O._p=new Promise(function(Y,ee){O.onload=Y,O.onerror=ee}),O.addEventListener("load",function(){c.loading|=1}),O.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Pl(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:c},a.set(l,r)}}}function op(e,t){_n.X(e,t);var n=Qi;if(n&&e){var i=yi(n).hoistableScripts,a=Ji(e),l=i.get(a);l||(l=n.querySelector(qa(a)),l||(e=S({src:e,async:!0},t),(t=Kt.get(a))&&bs(e,t),l=n.createElement("script"),ct(l),gt(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function sp(e,t){_n.M(e,t);var n=Qi;if(n&&e){var i=yi(n).hoistableScripts,a=Ji(e),l=i.get(a);l||(l=n.querySelector(qa(a)),l||(e=S({src:e,async:!0,type:"module"},t),(t=Kt.get(a))&&bs(e,t),l=n.createElement("script"),ct(l),gt(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(a,l))}}function yh(e,t,n,i){var a=(a=Se.current)?Ql(a):null;if(!a)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Pi(n.href),n=yi(a).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Pi(n.href);var l=yi(a).hoistableStyles,r=l.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,r),(l=a.querySelector(Ia(e)))&&!l._p&&(r.instance=l,r.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),l||dp(a,e,n,r.state))),t&&i===null)throw Error(h(528,""));return r}if(t&&i!==null)throw Error(h(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ji(n),n=yi(a).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Pi(e){return'href="'+It(e)+'"'}function Ia(e){return'link[rel="stylesheet"]['+e+"]"}function bh(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function dp(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),gt(t,"link",n),ct(t),e.head.appendChild(t))}function Ji(e){return'[src="'+It(e)+'"]'}function qa(e){return"script[async]"+e}function xh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+It(n.href)+'"]');if(i)return t.instance=i,ct(i),i;var a=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ct(i),gt(i,"style",a),Pl(i,n.precedence,e),t.instance=i;case"stylesheet":a=Pi(n.href);var l=e.querySelector(Ia(a));if(l)return t.state.loading|=4,t.instance=l,ct(l),l;i=bh(n),(a=Kt.get(a))&&ys(i,a),l=(e.ownerDocument||e).createElement("link"),ct(l);var r=l;return r._p=new Promise(function(c,O){r.onload=c,r.onerror=O}),gt(l,"link",i),t.state.loading|=4,Pl(l,n.precedence,e),t.instance=l;case"script":return l=Ji(n.src),(a=e.querySelector(qa(l)))?(t.instance=a,ct(a),a):(i=n,(a=Kt.get(l))&&(i=S({},n),bs(i,a)),e=e.ownerDocument||e,a=e.createElement("script"),ct(a),gt(a,"link",i),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Pl(i,n.precedence,e));return t.instance}function Pl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,l=a,r=0;r<i.length;r++){var c=i[r];if(c.dataset.precedence===t)l=c;else if(l!==a)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ys(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function bs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Jl=null;function Sh(e,t,n){if(Jl===null){var i=new Map,a=Jl=new Map;a.set(n,i)}else a=Jl,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var l=n[a];if(!(l[ia]||l[ht]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var r=l.getAttribute(t)||"";r=e+r;var c=i.get(r);c?c.push(l):i.set(r,[l])}}return i}function _h(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function cp(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function up(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Pi(i.href),l=t.querySelector(Ia(a));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Wl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,ct(l);return}l=t.ownerDocument||t,i=bh(i),(a=Kt.get(a))&&ys(i,a),l=l.createElement("link"),ct(l);var r=l;r._p=new Promise(function(c,O){r.onload=c,r.onerror=O}),gt(l,"link",i),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Wl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var xs=0;function hp(e,t){return e.stylesheets&&e.count===0&&er(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&er(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&xs===0&&(xs=62500*Xm());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&er(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>xs?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function Wl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)er(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function er(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,t.forEach(fp,e),$l=null,Wl.call(e))}function fp(e,t){if(!(t.state.loading&4)){var n=$l.get(e);if(n)var i=n.get(null);else{n=new Map,$l.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var r=a[l];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=t.instance,r=a.getAttribute("data-precedence"),l=n.get(r)||i,l===i&&n.set(null,a),n.set(r,a),this.count++,i=Wl.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),l?l.parentNode.insertBefore(a,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Fa={$$typeof:N,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function mp(e,t,n,i,a,l,r,c,O){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mr(0),this.hiddenUpdates=mr(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function kh(e,t,n,i,a,l,r,c,O,Y,ee,oe){return e=new mp(e,t,n,r,O,Y,ee,oe,c),t=1,l===!0&&(t|=24),l=Mt(3,null,null,t),e.current=l,l.stateNode=e,t=Wr(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:n,cache:t},no(l),e}function Eh(e){return e?(e=Ai,e):Ai}function Th(e,t,n,i,a,l){a=Eh(a),i.context===null?i.context=a:i.pendingContext=a,i=Bn(t),i.payload={element:n},l=l===void 0?null:l,l!==null&&(i.callback=l),n=Dn(e,i,t),n!==null&&(At(n,e,t),xa(n,e,t))}function Ch(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ss(e,t){Ch(e,t),(e=e.alternate)&&Ch(e,t)}function Ah(e){if(e.tag===13||e.tag===31){var t=ei(e,67108864);t!==null&&At(t,e,67108864),Ss(e,67108864)}}function zh(e){if(e.tag===13||e.tag===31){var t=Rt();t=pr(t);var n=ei(e,t);n!==null&&At(n,e,t),Ss(e,t)}}var tr=!0;function pp(e,t,n,i){var a=q.T;q.T=null;var l=F.p;try{F.p=2,_s(e,t,n,i)}finally{F.p=l,q.T=a}}function gp(e,t,n,i){var a=q.T;q.T=null;var l=F.p;try{F.p=8,_s(e,t,n,i)}finally{F.p=l,q.T=a}}function _s(e,t,n,i){if(tr){var a=ws(i);if(a===null)ss(e,t,i,nr,n),Bh(e,i);else if(yp(a,e,t,n,i))i.stopPropagation();else if(Bh(e,i),t&4&&-1<vp.indexOf(e)){for(;a!==null;){var l=vi(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var r=Ut(l.pendingLanes);if(r!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var O=1<<31-$e(r);c.entanglements[1]|=O,r&=~O}nn(l),(je&6)===0&&(Ul=ge()+500,La(0))}}break;case 31:case 13:c=ei(l,2),c!==null&&At(c,l,2),Il(),Ss(l,2)}if(l=ws(i),l===null&&ss(e,t,i,nr,n),l===a)break;a=l}a!==null&&i.stopPropagation()}else ss(e,t,i,null,n)}}function ws(e){return e=kr(e),ks(e)}var nr=null;function ks(e){if(nr=null,e=gi(e),e!==null){var t=v(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=y(t),e!==null)return e;e=null}else if(n===31){if(e=u(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nr=e,null}function Mh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pe()){case _e:return 2;case Ie:return 8;case Be:case St:return 32;case wn:return 268435456;default:return 32}default:return 32}}var Es=!1,Gn=null,Yn=null,Zn=null,Ga=new Map,Ya=new Map,Xn=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bh(e,t){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":Ga.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ya.delete(t.pointerId)}}function Za(e,t,n,i,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:l,targetContainers:[a]},t!==null&&(t=vi(t),t!==null&&Ah(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function yp(e,t,n,i,a){switch(t){case"focusin":return Gn=Za(Gn,e,t,n,i,a),!0;case"dragenter":return Yn=Za(Yn,e,t,n,i,a),!0;case"mouseover":return Zn=Za(Zn,e,t,n,i,a),!0;case"pointerover":var l=a.pointerId;return Ga.set(l,Za(Ga.get(l)||null,e,t,n,i,a)),!0;case"gotpointercapture":return l=a.pointerId,Ya.set(l,Za(Ya.get(l)||null,e,t,n,i,a)),!0}return!1}function Dh(e){var t=gi(e.target);if(t!==null){var n=v(t);if(n!==null){if(t=n.tag,t===13){if(t=y(n),t!==null){e.blockedOn=t,Xs(e.priority,function(){zh(n)});return}}else if(t===31){if(t=u(n),t!==null){e.blockedOn=t,Xs(e.priority,function(){zh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ws(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);wr=i,n.target.dispatchEvent(i),wr=null}else return t=vi(n),t!==null&&Ah(t),e.blockedOn=n,!1;t.shift()}return!0}function Oh(e,t,n){ir(e)&&n.delete(t)}function bp(){Es=!1,Gn!==null&&ir(Gn)&&(Gn=null),Yn!==null&&ir(Yn)&&(Yn=null),Zn!==null&&ir(Zn)&&(Zn=null),Ga.forEach(Oh),Ya.forEach(Oh)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,Es||(Es=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,bp)))}var lr=null;function Nh(e){lr!==e&&(lr=e,_.unstable_scheduleCallback(_.unstable_NormalPriority,function(){lr===e&&(lr=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],a=e[t+2];if(typeof i!="function"){if(ks(i||n)===null)continue;break}var l=vi(n);l!==null&&(e.splice(t,3),t-=3,wo(l,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Wi(e){function t(O){return ar(O,e)}Gn!==null&&ar(Gn,e),Yn!==null&&ar(Yn,e),Zn!==null&&ar(Zn,e),Ga.forEach(t),Ya.forEach(t);for(var n=0;n<Xn.length;n++){var i=Xn[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)Dh(n),n.blockedOn===null&&Xn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],r=a[_t]||null;if(typeof l=="function")r||Nh(n);else if(r){var c=null;if(l&&l.hasAttribute("formAction")){if(a=l,r=l[_t]||null)c=r.formAction;else if(ks(a)!==null)continue}else c=r.action;typeof c=="function"?n[i+1]=c:(n.splice(i,3),i-=3),Nh(n)}}}function Rh(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Ts(e){this._internalRoot=e}rr.prototype.render=Ts.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var n=t.current,i=Rt();Th(n,i,e,t,null,null)},rr.prototype.unmount=Ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Th(e.current,2,null,e,null,null),Il(),t[pi]=null}};function rr(e){this._internalRoot=e}rr.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xn.length&&t!==0&&t<Xn[n].priority;n++);Xn.splice(n,0,e),n===0&&Dh(e)}};var Lh=j.version;if(Lh!=="19.2.7")throw Error(h(527,Lh,"19.2.7"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=g(t),e=e!==null?B(e):null,e=e===null?null:e.stateNode,e};var xp={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!or.isDisabled&&or.supportsFiber)try{Xe=or.inject(xp),dt=or}catch{}}return Va.createRoot=function(e,t){if(!w(e))throw Error(h(299));var n=!1,i="",a=Gc,l=Yc,r=Zc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=kh(e,1,!1,null,null,n,i,null,a,l,r,Rh),e[pi]=t.current,os(e),new Ts(t)},Va.hydrateRoot=function(e,t,n){if(!w(e))throw Error(h(299));var i=!1,a="",l=Gc,r=Yc,c=Zc,O=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.formState!==void 0&&(O=n.formState)),t=kh(e,1,!0,t,n??null,i,a,O,l,r,c,Rh),t.context=Eh(null),n=t.current,i=Rt(),i=pr(i),a=Bn(i),a.callback=null,Dn(n,a,i),n=i,t.current.lanes=n,na(t,n),nn(t),e[pi]=t.current,os(e),new rr(t)},Va.version="19.2.7",Va}var Xh;function Bp(){if(Xh)return zs.exports;Xh=1;function _(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_)}catch(j){console.error(j)}}return _(),zs.exports=Mp(),zs.exports}var Dp=Bp();function dr(_){throw new Error('Could not dynamically require "'+_+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Os={exports:{}};var Vh;function Op(){return Vh||(Vh=1,(function(_,j){(function(d){_.exports=d()})(function(){return(function d(h,w,v){function y(g,B){if(!w[g]){if(!h[g]){var S=typeof dr=="function"&&dr;if(!B&&S)return S(g,!0);if(u)return u(g,!0);var D=new Error("Cannot find module '"+g+"'");throw D.code="MODULE_NOT_FOUND",D}var b=w[g]={exports:{}};h[g][0].call(b.exports,function(A){var p=h[g][1][A];return y(p||A)},b,b.exports,d,h,w,v)}return w[g].exports}for(var u=typeof dr=="function"&&dr,m=0;m<v.length;m++)y(v[m]);return y})({1:[function(d,h,w){var v=d("./utils"),y=d("./support"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";w.encode=function(m){for(var g,B,S,D,b,A,p,T=[],x=0,M=m.length,N=M,I=v.getTypeOf(m)!=="string";x<m.length;)N=M-x,S=I?(g=m[x++],B=x<M?m[x++]:0,x<M?m[x++]:0):(g=m.charCodeAt(x++),B=x<M?m.charCodeAt(x++):0,x<M?m.charCodeAt(x++):0),D=g>>2,b=(3&g)<<4|B>>4,A=1<N?(15&B)<<2|S>>6:64,p=2<N?63&S:64,T.push(u.charAt(D)+u.charAt(b)+u.charAt(A)+u.charAt(p));return T.join("")},w.decode=function(m){var g,B,S,D,b,A,p=0,T=0,x="data:";if(m.substr(0,x.length)===x)throw new Error("Invalid base64 input, it looks like a data url.");var M,N=3*(m=m.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(m.charAt(m.length-1)===u.charAt(64)&&N--,m.charAt(m.length-2)===u.charAt(64)&&N--,N%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=y.uint8array?new Uint8Array(0|N):new Array(0|N);p<m.length;)g=u.indexOf(m.charAt(p++))<<2|(D=u.indexOf(m.charAt(p++)))>>4,B=(15&D)<<4|(b=u.indexOf(m.charAt(p++)))>>2,S=(3&b)<<6|(A=u.indexOf(m.charAt(p++))),M[T++]=g,b!==64&&(M[T++]=B),A!==64&&(M[T++]=S);return M}},{"./support":30,"./utils":32}],2:[function(d,h,w){var v=d("./external"),y=d("./stream/DataWorker"),u=d("./stream/Crc32Probe"),m=d("./stream/DataLengthProbe");function g(B,S,D,b,A){this.compressedSize=B,this.uncompressedSize=S,this.crc32=D,this.compression=b,this.compressedContent=A}g.prototype={getContentWorker:function(){var B=new y(v.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new m("data_length")),S=this;return B.on("end",function(){if(this.streamInfo.data_length!==S.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),B},getCompressedWorker:function(){return new y(v.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},g.createWorkerFrom=function(B,S,D){return B.pipe(new u).pipe(new m("uncompressedSize")).pipe(S.compressWorker(D)).pipe(new m("compressedSize")).withStreamInfo("compression",S)},h.exports=g},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(d,h,w){var v=d("./stream/GenericWorker");w.STORE={magic:"\0\0",compressWorker:function(){return new v("STORE compression")},uncompressWorker:function(){return new v("STORE decompression")}},w.DEFLATE=d("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(d,h,w){var v=d("./utils"),y=(function(){for(var u,m=[],g=0;g<256;g++){u=g;for(var B=0;B<8;B++)u=1&u?3988292384^u>>>1:u>>>1;m[g]=u}return m})();h.exports=function(u,m){return u!==void 0&&u.length?v.getTypeOf(u)!=="string"?(function(g,B,S,D){var b=y,A=D+S;g^=-1;for(var p=D;p<A;p++)g=g>>>8^b[255&(g^B[p])];return-1^g})(0|m,u,u.length,0):(function(g,B,S,D){var b=y,A=D+S;g^=-1;for(var p=D;p<A;p++)g=g>>>8^b[255&(g^B.charCodeAt(p))];return-1^g})(0|m,u,u.length,0):0}},{"./utils":32}],5:[function(d,h,w){w.base64=!1,w.binary=!1,w.dir=!1,w.createFolders=!0,w.date=null,w.compression=null,w.compressionOptions=null,w.comment=null,w.unixPermissions=null,w.dosPermissions=null},{}],6:[function(d,h,w){var v=null;v=typeof Promise<"u"?Promise:d("lie"),h.exports={Promise:v}},{lie:37}],7:[function(d,h,w){var v=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",y=d("pako"),u=d("./utils"),m=d("./stream/GenericWorker"),g=v?"uint8array":"array";function B(S,D){m.call(this,"FlateWorker/"+S),this._pako=null,this._pakoAction=S,this._pakoOptions=D,this.meta={}}w.magic="\b\0",u.inherits(B,m),B.prototype.processChunk=function(S){this.meta=S.meta,this._pako===null&&this._createPako(),this._pako.push(u.transformTo(g,S.data),!1)},B.prototype.flush=function(){m.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},B.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this._pako=null},B.prototype._createPako=function(){this._pako=new y[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var S=this;this._pako.onData=function(D){S.push({data:D,meta:S.meta})}},w.compressWorker=function(S){return new B("Deflate",S)},w.uncompressWorker=function(){return new B("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(d,h,w){function v(b,A){var p,T="";for(p=0;p<A;p++)T+=String.fromCharCode(255&b),b>>>=8;return T}function y(b,A,p,T,x,M){var N,I,U=b.file,ne=b.compression,Z=M!==g.utf8encode,de=u.transformTo("string",M(U.name)),J=u.transformTo("string",g.utf8encode(U.name)),he=U.comment,be=u.transformTo("string",M(he)),E=u.transformTo("string",g.utf8encode(he)),K=J.length!==U.name.length,s=E.length!==he.length,$="",q="",F="",me=U.dir,le=U.date,ve={crc32:0,compressedSize:0,uncompressedSize:0};A&&!p||(ve.crc32=b.crc32,ve.compressedSize=b.compressedSize,ve.uncompressedSize=b.uncompressedSize);var f=0;A&&(f|=8),Z||!K&&!s||(f|=2048);var C=0,te=0;me&&(C|=16),x==="UNIX"?(te=798,C|=(function(ie,Se){var Ce=ie;return ie||(Ce=Se?16893:33204),(65535&Ce)<<16})(U.unixPermissions,me)):(te=20,C|=(function(ie){return 63&(ie||0)})(U.dosPermissions)),N=le.getUTCHours(),N<<=6,N|=le.getUTCMinutes(),N<<=5,N|=le.getUTCSeconds()/2,I=le.getUTCFullYear()-1980,I<<=4,I|=le.getUTCMonth()+1,I<<=5,I|=le.getUTCDate(),K&&(q=v(1,1)+v(B(de),4)+J,$+="up"+v(q.length,2)+q),s&&(F=v(1,1)+v(B(be),4)+E,$+="uc"+v(F.length,2)+F);var W="";return W+=`
\0`,W+=v(f,2),W+=ne.magic,W+=v(N,2),W+=v(I,2),W+=v(ve.crc32,4),W+=v(ve.compressedSize,4),W+=v(ve.uncompressedSize,4),W+=v(de.length,2),W+=v($.length,2),{fileRecord:S.LOCAL_FILE_HEADER+W+de+$,dirRecord:S.CENTRAL_FILE_HEADER+v(te,2)+W+v(be.length,2)+"\0\0\0\0"+v(C,4)+v(T,4)+de+$+be}}var u=d("../utils"),m=d("../stream/GenericWorker"),g=d("../utf8"),B=d("../crc32"),S=d("../signature");function D(b,A,p,T){m.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=A,this.zipPlatform=p,this.encodeFileName=T,this.streamFiles=b,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}u.inherits(D,m),D.prototype.push=function(b){var A=b.meta.percent||0,p=this.entriesCount,T=this._sources.length;this.accumulate?this.contentBuffer.push(b):(this.bytesWritten+=b.data.length,m.prototype.push.call(this,{data:b.data,meta:{currentFile:this.currentFile,percent:p?(A+100*(p-T-1))/p:100}}))},D.prototype.openedSource=function(b){this.currentSourceOffset=this.bytesWritten,this.currentFile=b.file.name;var A=this.streamFiles&&!b.file.dir;if(A){var p=y(b,A,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:p.fileRecord,meta:{percent:0}})}else this.accumulate=!0},D.prototype.closedSource=function(b){this.accumulate=!1;var A=this.streamFiles&&!b.file.dir,p=y(b,A,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(p.dirRecord),A)this.push({data:(function(T){return S.DATA_DESCRIPTOR+v(T.crc32,4)+v(T.compressedSize,4)+v(T.uncompressedSize,4)})(b),meta:{percent:100}});else for(this.push({data:p.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},D.prototype.flush=function(){for(var b=this.bytesWritten,A=0;A<this.dirRecords.length;A++)this.push({data:this.dirRecords[A],meta:{percent:100}});var p=this.bytesWritten-b,T=(function(x,M,N,I,U){var ne=u.transformTo("string",U(I));return S.CENTRAL_DIRECTORY_END+"\0\0\0\0"+v(x,2)+v(x,2)+v(M,4)+v(N,4)+v(ne.length,2)+ne})(this.dirRecords.length,p,b,this.zipComment,this.encodeFileName);this.push({data:T,meta:{percent:100}})},D.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},D.prototype.registerPrevious=function(b){this._sources.push(b);var A=this;return b.on("data",function(p){A.processChunk(p)}),b.on("end",function(){A.closedSource(A.previous.streamInfo),A._sources.length?A.prepareNextSource():A.end()}),b.on("error",function(p){A.error(p)}),this},D.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},D.prototype.error=function(b){var A=this._sources;if(!m.prototype.error.call(this,b))return!1;for(var p=0;p<A.length;p++)try{A[p].error(b)}catch{}return!0},D.prototype.lock=function(){m.prototype.lock.call(this);for(var b=this._sources,A=0;A<b.length;A++)b[A].lock()},h.exports=D},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(d,h,w){var v=d("../compressions"),y=d("./ZipFileWorker");w.generateWorker=function(u,m,g){var B=new y(m.streamFiles,g,m.platform,m.encodeFileName),S=0;try{u.forEach(function(D,b){S++;var A=(function(M,N){var I=M||N,U=v[I];if(!U)throw new Error(I+" is not a valid compression method !");return U})(b.options.compression,m.compression),p=b.options.compressionOptions||m.compressionOptions||{},T=b.dir,x=b.date;b._compressWorker(A,p).withStreamInfo("file",{name:D,dir:T,date:x,comment:b.comment||"",unixPermissions:b.unixPermissions,dosPermissions:b.dosPermissions}).pipe(B)}),B.entriesCount=S}catch(D){B.error(D)}return B}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(d,h,w){function v(){if(!(this instanceof v))return new v;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var y=new v;for(var u in this)typeof this[u]!="function"&&(y[u]=this[u]);return y}}(v.prototype=d("./object")).loadAsync=d("./load"),v.support=d("./support"),v.defaults=d("./defaults"),v.version="3.10.1",v.loadAsync=function(y,u){return new v().loadAsync(y,u)},v.external=d("./external"),h.exports=v},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(d,h,w){var v=d("./utils"),y=d("./external"),u=d("./utf8"),m=d("./zipEntries"),g=d("./stream/Crc32Probe"),B=d("./nodejsUtils");function S(D){return new y.Promise(function(b,A){var p=D.decompressed.getContentWorker().pipe(new g);p.on("error",function(T){A(T)}).on("end",function(){p.streamInfo.crc32!==D.decompressed.crc32?A(new Error("Corrupted zip : CRC32 mismatch")):b()}).resume()})}h.exports=function(D,b){var A=this;return b=v.extend(b||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:u.utf8decode}),B.isNode&&B.isStream(D)?y.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):v.prepareContent("the loaded zip file",D,!0,b.optimizedBinaryString,b.base64).then(function(p){var T=new m(b);return T.load(p),T}).then(function(p){var T=[y.Promise.resolve(p)],x=p.files;if(b.checkCRC32)for(var M=0;M<x.length;M++)T.push(S(x[M]));return y.Promise.all(T)}).then(function(p){for(var T=p.shift(),x=T.files,M=0;M<x.length;M++){var N=x[M],I=N.fileNameStr,U=v.resolve(N.fileNameStr);A.file(U,N.decompressed,{binary:!0,optimizedBinaryString:!0,date:N.date,dir:N.dir,comment:N.fileCommentStr.length?N.fileCommentStr:null,unixPermissions:N.unixPermissions,dosPermissions:N.dosPermissions,createFolders:b.createFolders}),N.dir||(A.file(U).unsafeOriginalName=I)}return T.zipComment.length&&(A.comment=T.zipComment),A})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(d,h,w){var v=d("../utils"),y=d("../stream/GenericWorker");function u(m,g){y.call(this,"Nodejs stream input adapter for "+m),this._upstreamEnded=!1,this._bindStream(g)}v.inherits(u,y),u.prototype._bindStream=function(m){var g=this;(this._stream=m).pause(),m.on("data",function(B){g.push({data:B,meta:{percent:0}})}).on("error",function(B){g.isPaused?this.generatedError=B:g.error(B)}).on("end",function(){g.isPaused?g._upstreamEnded=!0:g.end()})},u.prototype.pause=function(){return!!y.prototype.pause.call(this)&&(this._stream.pause(),!0)},u.prototype.resume=function(){return!!y.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},h.exports=u},{"../stream/GenericWorker":28,"../utils":32}],13:[function(d,h,w){var v=d("readable-stream").Readable;function y(u,m,g){v.call(this,m),this._helper=u;var B=this;u.on("data",function(S,D){B.push(S)||B._helper.pause(),g&&g(D)}).on("error",function(S){B.emit("error",S)}).on("end",function(){B.push(null)})}d("../utils").inherits(y,v),y.prototype._read=function(){this._helper.resume()},h.exports=y},{"../utils":32,"readable-stream":16}],14:[function(d,h,w){h.exports={isNode:typeof Buffer<"u",newBufferFrom:function(v,y){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(v,y);if(typeof v=="number")throw new Error('The "data" argument must not be a number');return new Buffer(v,y)},allocBuffer:function(v){if(Buffer.alloc)return Buffer.alloc(v);var y=new Buffer(v);return y.fill(0),y},isBuffer:function(v){return Buffer.isBuffer(v)},isStream:function(v){return v&&typeof v.on=="function"&&typeof v.pause=="function"&&typeof v.resume=="function"}}},{}],15:[function(d,h,w){function v(U,ne,Z){var de,J=u.getTypeOf(ne),he=u.extend(Z||{},B);he.date=he.date||new Date,he.compression!==null&&(he.compression=he.compression.toUpperCase()),typeof he.unixPermissions=="string"&&(he.unixPermissions=parseInt(he.unixPermissions,8)),he.unixPermissions&&16384&he.unixPermissions&&(he.dir=!0),he.dosPermissions&&16&he.dosPermissions&&(he.dir=!0),he.dir&&(U=x(U)),he.createFolders&&(de=T(U))&&M.call(this,de,!0);var be=J==="string"&&he.binary===!1&&he.base64===!1;Z&&Z.binary!==void 0||(he.binary=!be),(ne instanceof S&&ne.uncompressedSize===0||he.dir||!ne||ne.length===0)&&(he.base64=!1,he.binary=!0,ne="",he.compression="STORE",J="string");var E=null;E=ne instanceof S||ne instanceof m?ne:A.isNode&&A.isStream(ne)?new p(U,ne):u.prepareContent(U,ne,he.binary,he.optimizedBinaryString,he.base64);var K=new D(U,E,he);this.files[U]=K}var y=d("./utf8"),u=d("./utils"),m=d("./stream/GenericWorker"),g=d("./stream/StreamHelper"),B=d("./defaults"),S=d("./compressedObject"),D=d("./zipObject"),b=d("./generate"),A=d("./nodejsUtils"),p=d("./nodejs/NodejsStreamInputAdapter"),T=function(U){U.slice(-1)==="/"&&(U=U.substring(0,U.length-1));var ne=U.lastIndexOf("/");return 0<ne?U.substring(0,ne):""},x=function(U){return U.slice(-1)!=="/"&&(U+="/"),U},M=function(U,ne){return ne=ne!==void 0?ne:B.createFolders,U=x(U),this.files[U]||v.call(this,U,null,{dir:!0,createFolders:ne}),this.files[U]};function N(U){return Object.prototype.toString.call(U)==="[object RegExp]"}var I={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(U){var ne,Z,de;for(ne in this.files)de=this.files[ne],(Z=ne.slice(this.root.length,ne.length))&&ne.slice(0,this.root.length)===this.root&&U(Z,de)},filter:function(U){var ne=[];return this.forEach(function(Z,de){U(Z,de)&&ne.push(de)}),ne},file:function(U,ne,Z){if(arguments.length!==1)return U=this.root+U,v.call(this,U,ne,Z),this;if(N(U)){var de=U;return this.filter(function(he,be){return!be.dir&&de.test(he)})}var J=this.files[this.root+U];return J&&!J.dir?J:null},folder:function(U){if(!U)return this;if(N(U))return this.filter(function(J,he){return he.dir&&U.test(J)});var ne=this.root+U,Z=M.call(this,ne),de=this.clone();return de.root=Z.name,de},remove:function(U){U=this.root+U;var ne=this.files[U];if(ne||(U.slice(-1)!=="/"&&(U+="/"),ne=this.files[U]),ne&&!ne.dir)delete this.files[U];else for(var Z=this.filter(function(J,he){return he.name.slice(0,U.length)===U}),de=0;de<Z.length;de++)delete this.files[Z[de].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(U){var ne,Z={};try{if((Z=u.extend(U||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:y.utf8encode})).type=Z.type.toLowerCase(),Z.compression=Z.compression.toUpperCase(),Z.type==="binarystring"&&(Z.type="string"),!Z.type)throw new Error("No output type specified.");u.checkSupport(Z.type),Z.platform!=="darwin"&&Z.platform!=="freebsd"&&Z.platform!=="linux"&&Z.platform!=="sunos"||(Z.platform="UNIX"),Z.platform==="win32"&&(Z.platform="DOS");var de=Z.comment||this.comment||"";ne=b.generateWorker(this,Z,de)}catch(J){(ne=new m("error")).error(J)}return new g(ne,Z.type||"string",Z.mimeType)},generateAsync:function(U,ne){return this.generateInternalStream(U).accumulate(ne)},generateNodeStream:function(U,ne){return(U=U||{}).type||(U.type="nodebuffer"),this.generateInternalStream(U).toNodejsStream(ne)}};h.exports=I},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(d,h,w){h.exports=d("stream")},{stream:void 0}],17:[function(d,h,w){var v=d("./DataReader");function y(u){v.call(this,u);for(var m=0;m<this.data.length;m++)u[m]=255&u[m]}d("../utils").inherits(y,v),y.prototype.byteAt=function(u){return this.data[this.zero+u]},y.prototype.lastIndexOfSignature=function(u){for(var m=u.charCodeAt(0),g=u.charCodeAt(1),B=u.charCodeAt(2),S=u.charCodeAt(3),D=this.length-4;0<=D;--D)if(this.data[D]===m&&this.data[D+1]===g&&this.data[D+2]===B&&this.data[D+3]===S)return D-this.zero;return-1},y.prototype.readAndCheckSignature=function(u){var m=u.charCodeAt(0),g=u.charCodeAt(1),B=u.charCodeAt(2),S=u.charCodeAt(3),D=this.readData(4);return m===D[0]&&g===D[1]&&B===D[2]&&S===D[3]},y.prototype.readData=function(u){if(this.checkOffset(u),u===0)return[];var m=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},h.exports=y},{"../utils":32,"./DataReader":18}],18:[function(d,h,w){var v=d("../utils");function y(u){this.data=u,this.length=u.length,this.index=0,this.zero=0}y.prototype={checkOffset:function(u){this.checkIndex(this.index+u)},checkIndex:function(u){if(this.length<this.zero+u||u<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+u+"). Corrupted zip ?")},setIndex:function(u){this.checkIndex(u),this.index=u},skip:function(u){this.setIndex(this.index+u)},byteAt:function(){},readInt:function(u){var m,g=0;for(this.checkOffset(u),m=this.index+u-1;m>=this.index;m--)g=(g<<8)+this.byteAt(m);return this.index+=u,g},readString:function(u){return v.transformTo("string",this.readData(u))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var u=this.readInt(4);return new Date(Date.UTC(1980+(u>>25&127),(u>>21&15)-1,u>>16&31,u>>11&31,u>>5&63,(31&u)<<1))}},h.exports=y},{"../utils":32}],19:[function(d,h,w){var v=d("./Uint8ArrayReader");function y(u){v.call(this,u)}d("../utils").inherits(y,v),y.prototype.readData=function(u){this.checkOffset(u);var m=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},h.exports=y},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(d,h,w){var v=d("./DataReader");function y(u){v.call(this,u)}d("../utils").inherits(y,v),y.prototype.byteAt=function(u){return this.data.charCodeAt(this.zero+u)},y.prototype.lastIndexOfSignature=function(u){return this.data.lastIndexOf(u)-this.zero},y.prototype.readAndCheckSignature=function(u){return u===this.readData(4)},y.prototype.readData=function(u){this.checkOffset(u);var m=this.data.slice(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},h.exports=y},{"../utils":32,"./DataReader":18}],21:[function(d,h,w){var v=d("./ArrayReader");function y(u){v.call(this,u)}d("../utils").inherits(y,v),y.prototype.readData=function(u){if(this.checkOffset(u),u===0)return new Uint8Array(0);var m=this.data.subarray(this.zero+this.index,this.zero+this.index+u);return this.index+=u,m},h.exports=y},{"../utils":32,"./ArrayReader":17}],22:[function(d,h,w){var v=d("../utils"),y=d("../support"),u=d("./ArrayReader"),m=d("./StringReader"),g=d("./NodeBufferReader"),B=d("./Uint8ArrayReader");h.exports=function(S){var D=v.getTypeOf(S);return v.checkSupport(D),D!=="string"||y.uint8array?D==="nodebuffer"?new g(S):y.uint8array?new B(v.transformTo("uint8array",S)):new u(v.transformTo("array",S)):new m(S)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(d,h,w){w.LOCAL_FILE_HEADER="PK",w.CENTRAL_FILE_HEADER="PK",w.CENTRAL_DIRECTORY_END="PK",w.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",w.ZIP64_CENTRAL_DIRECTORY_END="PK",w.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(d,h,w){var v=d("./GenericWorker"),y=d("../utils");function u(m){v.call(this,"ConvertWorker to "+m),this.destType=m}y.inherits(u,v),u.prototype.processChunk=function(m){this.push({data:y.transformTo(this.destType,m.data),meta:m.meta})},h.exports=u},{"../utils":32,"./GenericWorker":28}],25:[function(d,h,w){var v=d("./GenericWorker"),y=d("../crc32");function u(){v.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}d("../utils").inherits(u,v),u.prototype.processChunk=function(m){this.streamInfo.crc32=y(m.data,this.streamInfo.crc32||0),this.push(m)},h.exports=u},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(d,h,w){var v=d("../utils"),y=d("./GenericWorker");function u(m){y.call(this,"DataLengthProbe for "+m),this.propName=m,this.withStreamInfo(m,0)}v.inherits(u,y),u.prototype.processChunk=function(m){if(m){var g=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=g+m.data.length}y.prototype.processChunk.call(this,m)},h.exports=u},{"../utils":32,"./GenericWorker":28}],27:[function(d,h,w){var v=d("../utils"),y=d("./GenericWorker");function u(m){y.call(this,"DataWorker");var g=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,m.then(function(B){g.dataIsReady=!0,g.data=B,g.max=B&&B.length||0,g.type=v.getTypeOf(B),g.isPaused||g._tickAndRepeat()},function(B){g.error(B)})}v.inherits(u,y),u.prototype.cleanUp=function(){y.prototype.cleanUp.call(this),this.data=null},u.prototype.resume=function(){return!!y.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,v.delay(this._tickAndRepeat,[],this)),!0)},u.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(v.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},u.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var m=null,g=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":m=this.data.substring(this.index,g);break;case"uint8array":m=this.data.subarray(this.index,g);break;case"array":case"nodebuffer":m=this.data.slice(this.index,g)}return this.index=g,this.push({data:m,meta:{percent:this.max?this.index/this.max*100:0}})},h.exports=u},{"../utils":32,"./GenericWorker":28}],28:[function(d,h,w){function v(y){this.name=y||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}v.prototype={push:function(y){this.emit("data",y)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(y){this.emit("error",y)}return!0},error:function(y){return!this.isFinished&&(this.isPaused?this.generatedError=y:(this.isFinished=!0,this.emit("error",y),this.previous&&this.previous.error(y),this.cleanUp()),!0)},on:function(y,u){return this._listeners[y].push(u),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(y,u){if(this._listeners[y])for(var m=0;m<this._listeners[y].length;m++)this._listeners[y][m].call(this,u)},pipe:function(y){return y.registerPrevious(this)},registerPrevious:function(y){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=y.streamInfo,this.mergeStreamInfo(),this.previous=y;var u=this;return y.on("data",function(m){u.processChunk(m)}),y.on("end",function(){u.end()}),y.on("error",function(m){u.error(m)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var y=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),y=!0),this.previous&&this.previous.resume(),!y},flush:function(){},processChunk:function(y){this.push(y)},withStreamInfo:function(y,u){return this.extraStreamInfo[y]=u,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var y in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,y)&&(this.streamInfo[y]=this.extraStreamInfo[y])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var y="Worker "+this.name;return this.previous?this.previous+" -> "+y:y}},h.exports=v},{}],29:[function(d,h,w){var v=d("../utils"),y=d("./ConvertWorker"),u=d("./GenericWorker"),m=d("../base64"),g=d("../support"),B=d("../external"),S=null;if(g.nodestream)try{S=d("../nodejs/NodejsStreamOutputAdapter")}catch{}function D(A,p){return new B.Promise(function(T,x){var M=[],N=A._internalType,I=A._outputType,U=A._mimeType;A.on("data",function(ne,Z){M.push(ne),p&&p(Z)}).on("error",function(ne){M=[],x(ne)}).on("end",function(){try{var ne=(function(Z,de,J){switch(Z){case"blob":return v.newBlob(v.transformTo("arraybuffer",de),J);case"base64":return m.encode(de);default:return v.transformTo(Z,de)}})(I,(function(Z,de){var J,he=0,be=null,E=0;for(J=0;J<de.length;J++)E+=de[J].length;switch(Z){case"string":return de.join("");case"array":return Array.prototype.concat.apply([],de);case"uint8array":for(be=new Uint8Array(E),J=0;J<de.length;J++)be.set(de[J],he),he+=de[J].length;return be;case"nodebuffer":return Buffer.concat(de);default:throw new Error("concat : unsupported type '"+Z+"'")}})(N,M),U);T(ne)}catch(Z){x(Z)}M=[]}).resume()})}function b(A,p,T){var x=p;switch(p){case"blob":case"arraybuffer":x="uint8array";break;case"base64":x="string"}try{this._internalType=x,this._outputType=p,this._mimeType=T,v.checkSupport(x),this._worker=A.pipe(new y(x)),A.lock()}catch(M){this._worker=new u("error"),this._worker.error(M)}}b.prototype={accumulate:function(A){return D(this,A)},on:function(A,p){var T=this;return A==="data"?this._worker.on(A,function(x){p.call(T,x.data,x.meta)}):this._worker.on(A,function(){v.delay(p,arguments,T)}),this},resume:function(){return v.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(A){if(v.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new S(this,{objectMode:this._outputType!=="nodebuffer"},A)}},h.exports=b},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(d,h,w){if(w.base64=!0,w.array=!0,w.string=!0,w.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",w.nodebuffer=typeof Buffer<"u",w.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")w.blob=!1;else{var v=new ArrayBuffer(0);try{w.blob=new Blob([v],{type:"application/zip"}).size===0}catch{try{var y=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);y.append(v),w.blob=y.getBlob("application/zip").size===0}catch{w.blob=!1}}}try{w.nodestream=!!d("readable-stream").Readable}catch{w.nodestream=!1}},{"readable-stream":16}],31:[function(d,h,w){for(var v=d("./utils"),y=d("./support"),u=d("./nodejsUtils"),m=d("./stream/GenericWorker"),g=new Array(256),B=0;B<256;B++)g[B]=252<=B?6:248<=B?5:240<=B?4:224<=B?3:192<=B?2:1;g[254]=g[254]=1;function S(){m.call(this,"utf-8 decode"),this.leftOver=null}function D(){m.call(this,"utf-8 encode")}w.utf8encode=function(b){return y.nodebuffer?u.newBufferFrom(b,"utf-8"):(function(A){var p,T,x,M,N,I=A.length,U=0;for(M=0;M<I;M++)(64512&(T=A.charCodeAt(M)))==55296&&M+1<I&&(64512&(x=A.charCodeAt(M+1)))==56320&&(T=65536+(T-55296<<10)+(x-56320),M++),U+=T<128?1:T<2048?2:T<65536?3:4;for(p=y.uint8array?new Uint8Array(U):new Array(U),M=N=0;N<U;M++)(64512&(T=A.charCodeAt(M)))==55296&&M+1<I&&(64512&(x=A.charCodeAt(M+1)))==56320&&(T=65536+(T-55296<<10)+(x-56320),M++),T<128?p[N++]=T:(T<2048?p[N++]=192|T>>>6:(T<65536?p[N++]=224|T>>>12:(p[N++]=240|T>>>18,p[N++]=128|T>>>12&63),p[N++]=128|T>>>6&63),p[N++]=128|63&T);return p})(b)},w.utf8decode=function(b){return y.nodebuffer?v.transformTo("nodebuffer",b).toString("utf-8"):(function(A){var p,T,x,M,N=A.length,I=new Array(2*N);for(p=T=0;p<N;)if((x=A[p++])<128)I[T++]=x;else if(4<(M=g[x]))I[T++]=65533,p+=M-1;else{for(x&=M===2?31:M===3?15:7;1<M&&p<N;)x=x<<6|63&A[p++],M--;1<M?I[T++]=65533:x<65536?I[T++]=x:(x-=65536,I[T++]=55296|x>>10&1023,I[T++]=56320|1023&x)}return I.length!==T&&(I.subarray?I=I.subarray(0,T):I.length=T),v.applyFromCharCode(I)})(b=v.transformTo(y.uint8array?"uint8array":"array",b))},v.inherits(S,m),S.prototype.processChunk=function(b){var A=v.transformTo(y.uint8array?"uint8array":"array",b.data);if(this.leftOver&&this.leftOver.length){if(y.uint8array){var p=A;(A=new Uint8Array(p.length+this.leftOver.length)).set(this.leftOver,0),A.set(p,this.leftOver.length)}else A=this.leftOver.concat(A);this.leftOver=null}var T=(function(M,N){var I;for((N=N||M.length)>M.length&&(N=M.length),I=N-1;0<=I&&(192&M[I])==128;)I--;return I<0||I===0?N:I+g[M[I]]>N?I:N})(A),x=A;T!==A.length&&(y.uint8array?(x=A.subarray(0,T),this.leftOver=A.subarray(T,A.length)):(x=A.slice(0,T),this.leftOver=A.slice(T,A.length))),this.push({data:w.utf8decode(x),meta:b.meta})},S.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:w.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},w.Utf8DecodeWorker=S,v.inherits(D,m),D.prototype.processChunk=function(b){this.push({data:w.utf8encode(b.data),meta:b.meta})},w.Utf8EncodeWorker=D},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(d,h,w){var v=d("./support"),y=d("./base64"),u=d("./nodejsUtils"),m=d("./external");function g(p){return p}function B(p,T){for(var x=0;x<p.length;++x)T[x]=255&p.charCodeAt(x);return T}d("setimmediate"),w.newBlob=function(p,T){w.checkSupport("blob");try{return new Blob([p],{type:T})}catch{try{var x=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return x.append(p),x.getBlob(T)}catch{throw new Error("Bug : can't construct the Blob.")}}};var S={stringifyByChunk:function(p,T,x){var M=[],N=0,I=p.length;if(I<=x)return String.fromCharCode.apply(null,p);for(;N<I;)T==="array"||T==="nodebuffer"?M.push(String.fromCharCode.apply(null,p.slice(N,Math.min(N+x,I)))):M.push(String.fromCharCode.apply(null,p.subarray(N,Math.min(N+x,I)))),N+=x;return M.join("")},stringifyByChar:function(p){for(var T="",x=0;x<p.length;x++)T+=String.fromCharCode(p[x]);return T},applyCanBeUsed:{uint8array:(function(){try{return v.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return v.nodebuffer&&String.fromCharCode.apply(null,u.allocBuffer(1)).length===1}catch{return!1}})()}};function D(p){var T=65536,x=w.getTypeOf(p),M=!0;if(x==="uint8array"?M=S.applyCanBeUsed.uint8array:x==="nodebuffer"&&(M=S.applyCanBeUsed.nodebuffer),M)for(;1<T;)try{return S.stringifyByChunk(p,x,T)}catch{T=Math.floor(T/2)}return S.stringifyByChar(p)}function b(p,T){for(var x=0;x<p.length;x++)T[x]=p[x];return T}w.applyFromCharCode=D;var A={};A.string={string:g,array:function(p){return B(p,new Array(p.length))},arraybuffer:function(p){return A.string.uint8array(p).buffer},uint8array:function(p){return B(p,new Uint8Array(p.length))},nodebuffer:function(p){return B(p,u.allocBuffer(p.length))}},A.array={string:D,array:g,arraybuffer:function(p){return new Uint8Array(p).buffer},uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return u.newBufferFrom(p)}},A.arraybuffer={string:function(p){return D(new Uint8Array(p))},array:function(p){return b(new Uint8Array(p),new Array(p.byteLength))},arraybuffer:g,uint8array:function(p){return new Uint8Array(p)},nodebuffer:function(p){return u.newBufferFrom(new Uint8Array(p))}},A.uint8array={string:D,array:function(p){return b(p,new Array(p.length))},arraybuffer:function(p){return p.buffer},uint8array:g,nodebuffer:function(p){return u.newBufferFrom(p)}},A.nodebuffer={string:D,array:function(p){return b(p,new Array(p.length))},arraybuffer:function(p){return A.nodebuffer.uint8array(p).buffer},uint8array:function(p){return b(p,new Uint8Array(p.length))},nodebuffer:g},w.transformTo=function(p,T){if(T=T||"",!p)return T;w.checkSupport(p);var x=w.getTypeOf(T);return A[x][p](T)},w.resolve=function(p){for(var T=p.split("/"),x=[],M=0;M<T.length;M++){var N=T[M];N==="."||N===""&&M!==0&&M!==T.length-1||(N===".."?x.pop():x.push(N))}return x.join("/")},w.getTypeOf=function(p){return typeof p=="string"?"string":Object.prototype.toString.call(p)==="[object Array]"?"array":v.nodebuffer&&u.isBuffer(p)?"nodebuffer":v.uint8array&&p instanceof Uint8Array?"uint8array":v.arraybuffer&&p instanceof ArrayBuffer?"arraybuffer":void 0},w.checkSupport=function(p){if(!v[p.toLowerCase()])throw new Error(p+" is not supported by this platform")},w.MAX_VALUE_16BITS=65535,w.MAX_VALUE_32BITS=-1,w.pretty=function(p){var T,x,M="";for(x=0;x<(p||"").length;x++)M+="\\x"+((T=p.charCodeAt(x))<16?"0":"")+T.toString(16).toUpperCase();return M},w.delay=function(p,T,x){setImmediate(function(){p.apply(x||null,T||[])})},w.inherits=function(p,T){function x(){}x.prototype=T.prototype,p.prototype=new x},w.extend=function(){var p,T,x={};for(p=0;p<arguments.length;p++)for(T in arguments[p])Object.prototype.hasOwnProperty.call(arguments[p],T)&&x[T]===void 0&&(x[T]=arguments[p][T]);return x},w.prepareContent=function(p,T,x,M,N){return m.Promise.resolve(T).then(function(I){return v.blob&&(I instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(I))!==-1)&&typeof FileReader<"u"?new m.Promise(function(U,ne){var Z=new FileReader;Z.onload=function(de){U(de.target.result)},Z.onerror=function(de){ne(de.target.error)},Z.readAsArrayBuffer(I)}):I}).then(function(I){var U=w.getTypeOf(I);return U?(U==="arraybuffer"?I=w.transformTo("uint8array",I):U==="string"&&(N?I=y.decode(I):x&&M!==!0&&(I=(function(ne){return B(ne,v.uint8array?new Uint8Array(ne.length):new Array(ne.length))})(I))),I):m.Promise.reject(new Error("Can't read the data of '"+p+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(d,h,w){var v=d("./reader/readerFor"),y=d("./utils"),u=d("./signature"),m=d("./zipEntry"),g=d("./support");function B(S){this.files=[],this.loadOptions=S}B.prototype={checkSignature:function(S){if(!this.reader.readAndCheckSignature(S)){this.reader.index-=4;var D=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+y.pretty(D)+", expected "+y.pretty(S)+")")}},isSignature:function(S,D){var b=this.reader.index;this.reader.setIndex(S);var A=this.reader.readString(4)===D;return this.reader.setIndex(b),A},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var S=this.reader.readData(this.zipCommentLength),D=g.uint8array?"uint8array":"array",b=y.transformTo(D,S);this.zipComment=this.loadOptions.decodeFileName(b)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var S,D,b,A=this.zip64EndOfCentralSize-44;0<A;)S=this.reader.readInt(2),D=this.reader.readInt(4),b=this.reader.readData(D),this.zip64ExtensibleData[S]={id:S,length:D,value:b}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var S,D;for(S=0;S<this.files.length;S++)D=this.files[S],this.reader.setIndex(D.localHeaderOffset),this.checkSignature(u.LOCAL_FILE_HEADER),D.readLocalPart(this.reader),D.handleUTF8(),D.processAttributes()},readCentralDir:function(){var S;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(u.CENTRAL_FILE_HEADER);)(S=new m({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(S);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var S=this.reader.lastIndexOfSignature(u.CENTRAL_DIRECTORY_END);if(S<0)throw this.isSignature(0,u.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(S);var D=S;if(this.checkSignature(u.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===y.MAX_VALUE_16BITS||this.diskWithCentralDirStart===y.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===y.MAX_VALUE_16BITS||this.centralDirRecords===y.MAX_VALUE_16BITS||this.centralDirSize===y.MAX_VALUE_32BITS||this.centralDirOffset===y.MAX_VALUE_32BITS){if(this.zip64=!0,(S=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(S),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,u.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(u.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var b=this.centralDirOffset+this.centralDirSize;this.zip64&&(b+=20,b+=12+this.zip64EndOfCentralSize);var A=D-b;if(0<A)this.isSignature(D,u.CENTRAL_FILE_HEADER)||(this.reader.zero=A);else if(A<0)throw new Error("Corrupted zip: missing "+Math.abs(A)+" bytes.")},prepareReader:function(S){this.reader=v(S)},load:function(S){this.prepareReader(S),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},h.exports=B},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(d,h,w){var v=d("./reader/readerFor"),y=d("./utils"),u=d("./compressedObject"),m=d("./crc32"),g=d("./utf8"),B=d("./compressions"),S=d("./support");function D(b,A){this.options=b,this.loadOptions=A}D.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(b){var A,p;if(b.skip(22),this.fileNameLength=b.readInt(2),p=b.readInt(2),this.fileName=b.readData(this.fileNameLength),b.skip(p),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((A=(function(T){for(var x in B)if(Object.prototype.hasOwnProperty.call(B,x)&&B[x].magic===T)return B[x];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+y.pretty(this.compressionMethod)+" unknown (inner file : "+y.transformTo("string",this.fileName)+")");this.decompressed=new u(this.compressedSize,this.uncompressedSize,this.crc32,A,b.readData(this.compressedSize))},readCentralPart:function(b){this.versionMadeBy=b.readInt(2),b.skip(2),this.bitFlag=b.readInt(2),this.compressionMethod=b.readString(2),this.date=b.readDate(),this.crc32=b.readInt(4),this.compressedSize=b.readInt(4),this.uncompressedSize=b.readInt(4);var A=b.readInt(2);if(this.extraFieldsLength=b.readInt(2),this.fileCommentLength=b.readInt(2),this.diskNumberStart=b.readInt(2),this.internalFileAttributes=b.readInt(2),this.externalFileAttributes=b.readInt(4),this.localHeaderOffset=b.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");b.skip(A),this.readExtraFields(b),this.parseZIP64ExtraField(b),this.fileComment=b.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var b=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),b==0&&(this.dosPermissions=63&this.externalFileAttributes),b==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var b=v(this.extraFields[1].value);this.uncompressedSize===y.MAX_VALUE_32BITS&&(this.uncompressedSize=b.readInt(8)),this.compressedSize===y.MAX_VALUE_32BITS&&(this.compressedSize=b.readInt(8)),this.localHeaderOffset===y.MAX_VALUE_32BITS&&(this.localHeaderOffset=b.readInt(8)),this.diskNumberStart===y.MAX_VALUE_32BITS&&(this.diskNumberStart=b.readInt(4))}},readExtraFields:function(b){var A,p,T,x=b.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});b.index+4<x;)A=b.readInt(2),p=b.readInt(2),T=b.readData(p),this.extraFields[A]={id:A,length:p,value:T};b.setIndex(x)},handleUTF8:function(){var b=S.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=g.utf8decode(this.fileName),this.fileCommentStr=g.utf8decode(this.fileComment);else{var A=this.findExtraFieldUnicodePath();if(A!==null)this.fileNameStr=A;else{var p=y.transformTo(b,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(p)}var T=this.findExtraFieldUnicodeComment();if(T!==null)this.fileCommentStr=T;else{var x=y.transformTo(b,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(x)}}},findExtraFieldUnicodePath:function(){var b=this.extraFields[28789];if(b){var A=v(b.value);return A.readInt(1)!==1||m(this.fileName)!==A.readInt(4)?null:g.utf8decode(A.readData(b.length-5))}return null},findExtraFieldUnicodeComment:function(){var b=this.extraFields[25461];if(b){var A=v(b.value);return A.readInt(1)!==1||m(this.fileComment)!==A.readInt(4)?null:g.utf8decode(A.readData(b.length-5))}return null}},h.exports=D},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(d,h,w){function v(A,p,T){this.name=A,this.dir=T.dir,this.date=T.date,this.comment=T.comment,this.unixPermissions=T.unixPermissions,this.dosPermissions=T.dosPermissions,this._data=p,this._dataBinary=T.binary,this.options={compression:T.compression,compressionOptions:T.compressionOptions}}var y=d("./stream/StreamHelper"),u=d("./stream/DataWorker"),m=d("./utf8"),g=d("./compressedObject"),B=d("./stream/GenericWorker");v.prototype={internalStream:function(A){var p=null,T="string";try{if(!A)throw new Error("No output type specified.");var x=(T=A.toLowerCase())==="string"||T==="text";T!=="binarystring"&&T!=="text"||(T="string"),p=this._decompressWorker();var M=!this._dataBinary;M&&!x&&(p=p.pipe(new m.Utf8EncodeWorker)),!M&&x&&(p=p.pipe(new m.Utf8DecodeWorker))}catch(N){(p=new B("error")).error(N)}return new y(p,T,"")},async:function(A,p){return this.internalStream(A).accumulate(p)},nodeStream:function(A,p){return this.internalStream(A||"nodebuffer").toNodejsStream(p)},_compressWorker:function(A,p){if(this._data instanceof g&&this._data.compression.magic===A.magic)return this._data.getCompressedWorker();var T=this._decompressWorker();return this._dataBinary||(T=T.pipe(new m.Utf8EncodeWorker)),g.createWorkerFrom(T,A,p)},_decompressWorker:function(){return this._data instanceof g?this._data.getContentWorker():this._data instanceof B?this._data:new u(this._data)}};for(var S=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],D=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},b=0;b<S.length;b++)v.prototype[S[b]]=D;h.exports=v},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(d,h,w){(function(v){var y,u,m=v.MutationObserver||v.WebKitMutationObserver;if(m){var g=0,B=new m(A),S=v.document.createTextNode("");B.observe(S,{characterData:!0}),y=function(){S.data=g=++g%2}}else if(v.setImmediate||v.MessageChannel===void 0)y="document"in v&&"onreadystatechange"in v.document.createElement("script")?function(){var p=v.document.createElement("script");p.onreadystatechange=function(){A(),p.onreadystatechange=null,p.parentNode.removeChild(p),p=null},v.document.documentElement.appendChild(p)}:function(){setTimeout(A,0)};else{var D=new v.MessageChannel;D.port1.onmessage=A,y=function(){D.port2.postMessage(0)}}var b=[];function A(){var p,T;u=!0;for(var x=b.length;x;){for(T=b,b=[],p=-1;++p<x;)T[p]();x=b.length}u=!1}h.exports=function(p){b.push(p)!==1||u||y()}}).call(this,typeof sr<"u"?sr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(d,h,w){var v=d("immediate");function y(){}var u={},m=["REJECTED"],g=["FULFILLED"],B=["PENDING"];function S(x){if(typeof x!="function")throw new TypeError("resolver must be a function");this.state=B,this.queue=[],this.outcome=void 0,x!==y&&p(this,x)}function D(x,M,N){this.promise=x,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof N=="function"&&(this.onRejected=N,this.callRejected=this.otherCallRejected)}function b(x,M,N){v(function(){var I;try{I=M(N)}catch(U){return u.reject(x,U)}I===x?u.reject(x,new TypeError("Cannot resolve promise with itself")):u.resolve(x,I)})}function A(x){var M=x&&x.then;if(x&&(typeof x=="object"||typeof x=="function")&&typeof M=="function")return function(){M.apply(x,arguments)}}function p(x,M){var N=!1;function I(Z){N||(N=!0,u.reject(x,Z))}function U(Z){N||(N=!0,u.resolve(x,Z))}var ne=T(function(){M(U,I)});ne.status==="error"&&I(ne.value)}function T(x,M){var N={};try{N.value=x(M),N.status="success"}catch(I){N.status="error",N.value=I}return N}(h.exports=S).prototype.finally=function(x){if(typeof x!="function")return this;var M=this.constructor;return this.then(function(N){return M.resolve(x()).then(function(){return N})},function(N){return M.resolve(x()).then(function(){throw N})})},S.prototype.catch=function(x){return this.then(null,x)},S.prototype.then=function(x,M){if(typeof x!="function"&&this.state===g||typeof M!="function"&&this.state===m)return this;var N=new this.constructor(y);return this.state!==B?b(N,this.state===g?x:M,this.outcome):this.queue.push(new D(N,x,M)),N},D.prototype.callFulfilled=function(x){u.resolve(this.promise,x)},D.prototype.otherCallFulfilled=function(x){b(this.promise,this.onFulfilled,x)},D.prototype.callRejected=function(x){u.reject(this.promise,x)},D.prototype.otherCallRejected=function(x){b(this.promise,this.onRejected,x)},u.resolve=function(x,M){var N=T(A,M);if(N.status==="error")return u.reject(x,N.value);var I=N.value;if(I)p(x,I);else{x.state=g,x.outcome=M;for(var U=-1,ne=x.queue.length;++U<ne;)x.queue[U].callFulfilled(M)}return x},u.reject=function(x,M){x.state=m,x.outcome=M;for(var N=-1,I=x.queue.length;++N<I;)x.queue[N].callRejected(M);return x},S.resolve=function(x){return x instanceof this?x:u.resolve(new this(y),x)},S.reject=function(x){var M=new this(y);return u.reject(M,x)},S.all=function(x){var M=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var N=x.length,I=!1;if(!N)return this.resolve([]);for(var U=new Array(N),ne=0,Z=-1,de=new this(y);++Z<N;)J(x[Z],Z);return de;function J(he,be){M.resolve(he).then(function(E){U[be]=E,++ne!==N||I||(I=!0,u.resolve(de,U))},function(E){I||(I=!0,u.reject(de,E))})}},S.race=function(x){var M=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var N=x.length,I=!1;if(!N)return this.resolve([]);for(var U=-1,ne=new this(y);++U<N;)Z=x[U],M.resolve(Z).then(function(de){I||(I=!0,u.resolve(ne,de))},function(de){I||(I=!0,u.reject(ne,de))});var Z;return ne}},{immediate:36}],38:[function(d,h,w){var v={};(0,d("./lib/utils/common").assign)(v,d("./lib/deflate"),d("./lib/inflate"),d("./lib/zlib/constants")),h.exports=v},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(d,h,w){var v=d("./zlib/deflate"),y=d("./utils/common"),u=d("./utils/strings"),m=d("./zlib/messages"),g=d("./zlib/zstream"),B=Object.prototype.toString,S=0,D=-1,b=0,A=8;function p(x){if(!(this instanceof p))return new p(x);this.options=y.assign({level:D,method:A,chunkSize:16384,windowBits:15,memLevel:8,strategy:b,to:""},x||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var N=v.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(N!==S)throw new Error(m[N]);if(M.header&&v.deflateSetHeader(this.strm,M.header),M.dictionary){var I;if(I=typeof M.dictionary=="string"?u.string2buf(M.dictionary):B.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary,(N=v.deflateSetDictionary(this.strm,I))!==S)throw new Error(m[N]);this._dict_set=!0}}function T(x,M){var N=new p(M);if(N.push(x,!0),N.err)throw N.msg||m[N.err];return N.result}p.prototype.push=function(x,M){var N,I,U=this.strm,ne=this.options.chunkSize;if(this.ended)return!1;I=M===~~M?M:M===!0?4:0,typeof x=="string"?U.input=u.string2buf(x):B.call(x)==="[object ArrayBuffer]"?U.input=new Uint8Array(x):U.input=x,U.next_in=0,U.avail_in=U.input.length;do{if(U.avail_out===0&&(U.output=new y.Buf8(ne),U.next_out=0,U.avail_out=ne),(N=v.deflate(U,I))!==1&&N!==S)return this.onEnd(N),!(this.ended=!0);U.avail_out!==0&&(U.avail_in!==0||I!==4&&I!==2)||(this.options.to==="string"?this.onData(u.buf2binstring(y.shrinkBuf(U.output,U.next_out))):this.onData(y.shrinkBuf(U.output,U.next_out)))}while((0<U.avail_in||U.avail_out===0)&&N!==1);return I===4?(N=v.deflateEnd(this.strm),this.onEnd(N),this.ended=!0,N===S):I!==2||(this.onEnd(S),!(U.avail_out=0))},p.prototype.onData=function(x){this.chunks.push(x)},p.prototype.onEnd=function(x){x===S&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=y.flattenChunks(this.chunks)),this.chunks=[],this.err=x,this.msg=this.strm.msg},w.Deflate=p,w.deflate=T,w.deflateRaw=function(x,M){return(M=M||{}).raw=!0,T(x,M)},w.gzip=function(x,M){return(M=M||{}).gzip=!0,T(x,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(d,h,w){var v=d("./zlib/inflate"),y=d("./utils/common"),u=d("./utils/strings"),m=d("./zlib/constants"),g=d("./zlib/messages"),B=d("./zlib/zstream"),S=d("./zlib/gzheader"),D=Object.prototype.toString;function b(p){if(!(this instanceof b))return new b(p);this.options=y.assign({chunkSize:16384,windowBits:0,to:""},p||{});var T=this.options;T.raw&&0<=T.windowBits&&T.windowBits<16&&(T.windowBits=-T.windowBits,T.windowBits===0&&(T.windowBits=-15)),!(0<=T.windowBits&&T.windowBits<16)||p&&p.windowBits||(T.windowBits+=32),15<T.windowBits&&T.windowBits<48&&(15&T.windowBits)==0&&(T.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new B,this.strm.avail_out=0;var x=v.inflateInit2(this.strm,T.windowBits);if(x!==m.Z_OK)throw new Error(g[x]);this.header=new S,v.inflateGetHeader(this.strm,this.header)}function A(p,T){var x=new b(T);if(x.push(p,!0),x.err)throw x.msg||g[x.err];return x.result}b.prototype.push=function(p,T){var x,M,N,I,U,ne,Z=this.strm,de=this.options.chunkSize,J=this.options.dictionary,he=!1;if(this.ended)return!1;M=T===~~T?T:T===!0?m.Z_FINISH:m.Z_NO_FLUSH,typeof p=="string"?Z.input=u.binstring2buf(p):D.call(p)==="[object ArrayBuffer]"?Z.input=new Uint8Array(p):Z.input=p,Z.next_in=0,Z.avail_in=Z.input.length;do{if(Z.avail_out===0&&(Z.output=new y.Buf8(de),Z.next_out=0,Z.avail_out=de),(x=v.inflate(Z,m.Z_NO_FLUSH))===m.Z_NEED_DICT&&J&&(ne=typeof J=="string"?u.string2buf(J):D.call(J)==="[object ArrayBuffer]"?new Uint8Array(J):J,x=v.inflateSetDictionary(this.strm,ne)),x===m.Z_BUF_ERROR&&he===!0&&(x=m.Z_OK,he=!1),x!==m.Z_STREAM_END&&x!==m.Z_OK)return this.onEnd(x),!(this.ended=!0);Z.next_out&&(Z.avail_out!==0&&x!==m.Z_STREAM_END&&(Z.avail_in!==0||M!==m.Z_FINISH&&M!==m.Z_SYNC_FLUSH)||(this.options.to==="string"?(N=u.utf8border(Z.output,Z.next_out),I=Z.next_out-N,U=u.buf2string(Z.output,N),Z.next_out=I,Z.avail_out=de-I,I&&y.arraySet(Z.output,Z.output,N,I,0),this.onData(U)):this.onData(y.shrinkBuf(Z.output,Z.next_out)))),Z.avail_in===0&&Z.avail_out===0&&(he=!0)}while((0<Z.avail_in||Z.avail_out===0)&&x!==m.Z_STREAM_END);return x===m.Z_STREAM_END&&(M=m.Z_FINISH),M===m.Z_FINISH?(x=v.inflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===m.Z_OK):M!==m.Z_SYNC_FLUSH||(this.onEnd(m.Z_OK),!(Z.avail_out=0))},b.prototype.onData=function(p){this.chunks.push(p)},b.prototype.onEnd=function(p){p===m.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=y.flattenChunks(this.chunks)),this.chunks=[],this.err=p,this.msg=this.strm.msg},w.Inflate=b,w.inflate=A,w.inflateRaw=function(p,T){return(T=T||{}).raw=!0,A(p,T)},w.ungzip=A},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(d,h,w){var v=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";w.assign=function(m){for(var g=Array.prototype.slice.call(arguments,1);g.length;){var B=g.shift();if(B){if(typeof B!="object")throw new TypeError(B+"must be non-object");for(var S in B)B.hasOwnProperty(S)&&(m[S]=B[S])}}return m},w.shrinkBuf=function(m,g){return m.length===g?m:m.subarray?m.subarray(0,g):(m.length=g,m)};var y={arraySet:function(m,g,B,S,D){if(g.subarray&&m.subarray)m.set(g.subarray(B,B+S),D);else for(var b=0;b<S;b++)m[D+b]=g[B+b]},flattenChunks:function(m){var g,B,S,D,b,A;for(g=S=0,B=m.length;g<B;g++)S+=m[g].length;for(A=new Uint8Array(S),g=D=0,B=m.length;g<B;g++)b=m[g],A.set(b,D),D+=b.length;return A}},u={arraySet:function(m,g,B,S,D){for(var b=0;b<S;b++)m[D+b]=g[B+b]},flattenChunks:function(m){return[].concat.apply([],m)}};w.setTyped=function(m){m?(w.Buf8=Uint8Array,w.Buf16=Uint16Array,w.Buf32=Int32Array,w.assign(w,y)):(w.Buf8=Array,w.Buf16=Array,w.Buf32=Array,w.assign(w,u))},w.setTyped(v)},{}],42:[function(d,h,w){var v=d("./common"),y=!0,u=!0;try{String.fromCharCode.apply(null,[0])}catch{y=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{u=!1}for(var m=new v.Buf8(256),g=0;g<256;g++)m[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;function B(S,D){if(D<65537&&(S.subarray&&u||!S.subarray&&y))return String.fromCharCode.apply(null,v.shrinkBuf(S,D));for(var b="",A=0;A<D;A++)b+=String.fromCharCode(S[A]);return b}m[254]=m[254]=1,w.string2buf=function(S){var D,b,A,p,T,x=S.length,M=0;for(p=0;p<x;p++)(64512&(b=S.charCodeAt(p)))==55296&&p+1<x&&(64512&(A=S.charCodeAt(p+1)))==56320&&(b=65536+(b-55296<<10)+(A-56320),p++),M+=b<128?1:b<2048?2:b<65536?3:4;for(D=new v.Buf8(M),p=T=0;T<M;p++)(64512&(b=S.charCodeAt(p)))==55296&&p+1<x&&(64512&(A=S.charCodeAt(p+1)))==56320&&(b=65536+(b-55296<<10)+(A-56320),p++),b<128?D[T++]=b:(b<2048?D[T++]=192|b>>>6:(b<65536?D[T++]=224|b>>>12:(D[T++]=240|b>>>18,D[T++]=128|b>>>12&63),D[T++]=128|b>>>6&63),D[T++]=128|63&b);return D},w.buf2binstring=function(S){return B(S,S.length)},w.binstring2buf=function(S){for(var D=new v.Buf8(S.length),b=0,A=D.length;b<A;b++)D[b]=S.charCodeAt(b);return D},w.buf2string=function(S,D){var b,A,p,T,x=D||S.length,M=new Array(2*x);for(b=A=0;b<x;)if((p=S[b++])<128)M[A++]=p;else if(4<(T=m[p]))M[A++]=65533,b+=T-1;else{for(p&=T===2?31:T===3?15:7;1<T&&b<x;)p=p<<6|63&S[b++],T--;1<T?M[A++]=65533:p<65536?M[A++]=p:(p-=65536,M[A++]=55296|p>>10&1023,M[A++]=56320|1023&p)}return B(M,A)},w.utf8border=function(S,D){var b;for((D=D||S.length)>S.length&&(D=S.length),b=D-1;0<=b&&(192&S[b])==128;)b--;return b<0||b===0?D:b+m[S[b]]>D?b:D}},{"./common":41}],43:[function(d,h,w){h.exports=function(v,y,u,m){for(var g=65535&v|0,B=v>>>16&65535|0,S=0;u!==0;){for(u-=S=2e3<u?2e3:u;B=B+(g=g+y[m++]|0)|0,--S;);g%=65521,B%=65521}return g|B<<16|0}},{}],44:[function(d,h,w){h.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(d,h,w){var v=(function(){for(var y,u=[],m=0;m<256;m++){y=m;for(var g=0;g<8;g++)y=1&y?3988292384^y>>>1:y>>>1;u[m]=y}return u})();h.exports=function(y,u,m,g){var B=v,S=g+m;y^=-1;for(var D=g;D<S;D++)y=y>>>8^B[255&(y^u[D])];return-1^y}},{}],46:[function(d,h,w){var v,y=d("../utils/common"),u=d("./trees"),m=d("./adler32"),g=d("./crc32"),B=d("./messages"),S=0,D=4,b=0,A=-2,p=-1,T=4,x=2,M=8,N=9,I=286,U=30,ne=19,Z=2*I+1,de=15,J=3,he=258,be=he+J+1,E=42,K=113,s=1,$=2,q=3,F=4;function me(o,re){return o.msg=B[re],re}function le(o){return(o<<1)-(4<o?9:0)}function ve(o){for(var re=o.length;0<=--re;)o[re]=0}function f(o){var re=o.state,P=re.pending;P>o.avail_out&&(P=o.avail_out),P!==0&&(y.arraySet(o.output,re.pending_buf,re.pending_out,P,o.next_out),o.next_out+=P,re.pending_out+=P,o.total_out+=P,o.avail_out-=P,re.pending-=P,re.pending===0&&(re.pending_out=0))}function C(o,re){u._tr_flush_block(o,0<=o.block_start?o.block_start:-1,o.strstart-o.block_start,re),o.block_start=o.strstart,f(o.strm)}function te(o,re){o.pending_buf[o.pending++]=re}function W(o,re){o.pending_buf[o.pending++]=re>>>8&255,o.pending_buf[o.pending++]=255&re}function ie(o,re){var P,z,k=o.max_chain_length,L=o.strstart,se=o.prev_length,ce=o.nice_match,X=o.strstart>o.w_size-be?o.strstart-(o.w_size-be):0,fe=o.window,ge=o.w_mask,pe=o.prev,_e=o.strstart+he,Ie=fe[L+se-1],Be=fe[L+se];o.prev_length>=o.good_match&&(k>>=2),ce>o.lookahead&&(ce=o.lookahead);do if(fe[(P=re)+se]===Be&&fe[P+se-1]===Ie&&fe[P]===fe[L]&&fe[++P]===fe[L+1]){L+=2,P++;do;while(fe[++L]===fe[++P]&&fe[++L]===fe[++P]&&fe[++L]===fe[++P]&&fe[++L]===fe[++P]&&fe[++L]===fe[++P]&&fe[++L]===fe[++P]&&fe[++L]===fe[++P]&&fe[++L]===fe[++P]&&L<_e);if(z=he-(_e-L),L=_e-he,se<z){if(o.match_start=re,ce<=(se=z))break;Ie=fe[L+se-1],Be=fe[L+se]}}while((re=pe[re&ge])>X&&--k!=0);return se<=o.lookahead?se:o.lookahead}function Se(o){var re,P,z,k,L,se,ce,X,fe,ge,pe=o.w_size;do{if(k=o.window_size-o.lookahead-o.strstart,o.strstart>=pe+(pe-be)){for(y.arraySet(o.window,o.window,pe,pe,0),o.match_start-=pe,o.strstart-=pe,o.block_start-=pe,re=P=o.hash_size;z=o.head[--re],o.head[re]=pe<=z?z-pe:0,--P;);for(re=P=pe;z=o.prev[--re],o.prev[re]=pe<=z?z-pe:0,--P;);k+=pe}if(o.strm.avail_in===0)break;if(se=o.strm,ce=o.window,X=o.strstart+o.lookahead,fe=k,ge=void 0,ge=se.avail_in,fe<ge&&(ge=fe),P=ge===0?0:(se.avail_in-=ge,y.arraySet(ce,se.input,se.next_in,ge,X),se.state.wrap===1?se.adler=m(se.adler,ce,ge,X):se.state.wrap===2&&(se.adler=g(se.adler,ce,ge,X)),se.next_in+=ge,se.total_in+=ge,ge),o.lookahead+=P,o.lookahead+o.insert>=J)for(L=o.strstart-o.insert,o.ins_h=o.window[L],o.ins_h=(o.ins_h<<o.hash_shift^o.window[L+1])&o.hash_mask;o.insert&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[L+J-1])&o.hash_mask,o.prev[L&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=L,L++,o.insert--,!(o.lookahead+o.insert<J)););}while(o.lookahead<be&&o.strm.avail_in!==0)}function Ce(o,re){for(var P,z;;){if(o.lookahead<be){if(Se(o),o.lookahead<be&&re===S)return s;if(o.lookahead===0)break}if(P=0,o.lookahead>=J&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+J-1])&o.hash_mask,P=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),P!==0&&o.strstart-P<=o.w_size-be&&(o.match_length=ie(o,P)),o.match_length>=J)if(z=u._tr_tally(o,o.strstart-o.match_start,o.match_length-J),o.lookahead-=o.match_length,o.match_length<=o.max_lazy_match&&o.lookahead>=J){for(o.match_length--;o.strstart++,o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+J-1])&o.hash_mask,P=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart,--o.match_length!=0;);o.strstart++}else o.strstart+=o.match_length,o.match_length=0,o.ins_h=o.window[o.strstart],o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+1])&o.hash_mask;else z=u._tr_tally(o,0,o.window[o.strstart]),o.lookahead--,o.strstart++;if(z&&(C(o,!1),o.strm.avail_out===0))return s}return o.insert=o.strstart<J-1?o.strstart:J-1,re===D?(C(o,!0),o.strm.avail_out===0?q:F):o.last_lit&&(C(o,!1),o.strm.avail_out===0)?s:$}function Te(o,re){for(var P,z,k;;){if(o.lookahead<be){if(Se(o),o.lookahead<be&&re===S)return s;if(o.lookahead===0)break}if(P=0,o.lookahead>=J&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+J-1])&o.hash_mask,P=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),o.prev_length=o.match_length,o.prev_match=o.match_start,o.match_length=J-1,P!==0&&o.prev_length<o.max_lazy_match&&o.strstart-P<=o.w_size-be&&(o.match_length=ie(o,P),o.match_length<=5&&(o.strategy===1||o.match_length===J&&4096<o.strstart-o.match_start)&&(o.match_length=J-1)),o.prev_length>=J&&o.match_length<=o.prev_length){for(k=o.strstart+o.lookahead-J,z=u._tr_tally(o,o.strstart-1-o.prev_match,o.prev_length-J),o.lookahead-=o.prev_length-1,o.prev_length-=2;++o.strstart<=k&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+J-1])&o.hash_mask,P=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),--o.prev_length!=0;);if(o.match_available=0,o.match_length=J-1,o.strstart++,z&&(C(o,!1),o.strm.avail_out===0))return s}else if(o.match_available){if((z=u._tr_tally(o,0,o.window[o.strstart-1]))&&C(o,!1),o.strstart++,o.lookahead--,o.strm.avail_out===0)return s}else o.match_available=1,o.strstart++,o.lookahead--}return o.match_available&&(z=u._tr_tally(o,0,o.window[o.strstart-1]),o.match_available=0),o.insert=o.strstart<J-1?o.strstart:J-1,re===D?(C(o,!0),o.strm.avail_out===0?q:F):o.last_lit&&(C(o,!1),o.strm.avail_out===0)?s:$}function ke(o,re,P,z,k){this.good_length=o,this.max_lazy=re,this.nice_length=P,this.max_chain=z,this.func=k}function Je(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new y.Buf16(2*Z),this.dyn_dtree=new y.Buf16(2*(2*U+1)),this.bl_tree=new y.Buf16(2*(2*ne+1)),ve(this.dyn_ltree),ve(this.dyn_dtree),ve(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new y.Buf16(de+1),this.heap=new y.Buf16(2*I+1),ve(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new y.Buf16(2*I+1),ve(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Ke(o){var re;return o&&o.state?(o.total_in=o.total_out=0,o.data_type=x,(re=o.state).pending=0,re.pending_out=0,re.wrap<0&&(re.wrap=-re.wrap),re.status=re.wrap?E:K,o.adler=re.wrap===2?0:1,re.last_flush=S,u._tr_init(re),b):me(o,A)}function bt(o){var re=Ke(o);return re===b&&(function(P){P.window_size=2*P.w_size,ve(P.head),P.max_lazy_match=v[P.level].max_lazy,P.good_match=v[P.level].good_length,P.nice_match=v[P.level].nice_length,P.max_chain_length=v[P.level].max_chain,P.strstart=0,P.block_start=0,P.lookahead=0,P.insert=0,P.match_length=P.prev_length=J-1,P.match_available=0,P.ins_h=0})(o.state),re}function xt(o,re,P,z,k,L){if(!o)return A;var se=1;if(re===p&&(re=6),z<0?(se=0,z=-z):15<z&&(se=2,z-=16),k<1||N<k||P!==M||z<8||15<z||re<0||9<re||L<0||T<L)return me(o,A);z===8&&(z=9);var ce=new Je;return(o.state=ce).strm=o,ce.wrap=se,ce.gzhead=null,ce.w_bits=z,ce.w_size=1<<ce.w_bits,ce.w_mask=ce.w_size-1,ce.hash_bits=k+7,ce.hash_size=1<<ce.hash_bits,ce.hash_mask=ce.hash_size-1,ce.hash_shift=~~((ce.hash_bits+J-1)/J),ce.window=new y.Buf8(2*ce.w_size),ce.head=new y.Buf16(ce.hash_size),ce.prev=new y.Buf16(ce.w_size),ce.lit_bufsize=1<<k+6,ce.pending_buf_size=4*ce.lit_bufsize,ce.pending_buf=new y.Buf8(ce.pending_buf_size),ce.d_buf=1*ce.lit_bufsize,ce.l_buf=3*ce.lit_bufsize,ce.level=re,ce.strategy=L,ce.method=P,bt(o)}v=[new ke(0,0,0,0,function(o,re){var P=65535;for(P>o.pending_buf_size-5&&(P=o.pending_buf_size-5);;){if(o.lookahead<=1){if(Se(o),o.lookahead===0&&re===S)return s;if(o.lookahead===0)break}o.strstart+=o.lookahead,o.lookahead=0;var z=o.block_start+P;if((o.strstart===0||o.strstart>=z)&&(o.lookahead=o.strstart-z,o.strstart=z,C(o,!1),o.strm.avail_out===0)||o.strstart-o.block_start>=o.w_size-be&&(C(o,!1),o.strm.avail_out===0))return s}return o.insert=0,re===D?(C(o,!0),o.strm.avail_out===0?q:F):(o.strstart>o.block_start&&(C(o,!1),o.strm.avail_out),s)}),new ke(4,4,8,4,Ce),new ke(4,5,16,8,Ce),new ke(4,6,32,32,Ce),new ke(4,4,16,16,Te),new ke(8,16,32,32,Te),new ke(8,16,128,128,Te),new ke(8,32,128,256,Te),new ke(32,128,258,1024,Te),new ke(32,258,258,4096,Te)],w.deflateInit=function(o,re){return xt(o,re,M,15,8,0)},w.deflateInit2=xt,w.deflateReset=bt,w.deflateResetKeep=Ke,w.deflateSetHeader=function(o,re){return o&&o.state?o.state.wrap!==2?A:(o.state.gzhead=re,b):A},w.deflate=function(o,re){var P,z,k,L;if(!o||!o.state||5<re||re<0)return o?me(o,A):A;if(z=o.state,!o.output||!o.input&&o.avail_in!==0||z.status===666&&re!==D)return me(o,o.avail_out===0?-5:A);if(z.strm=o,P=z.last_flush,z.last_flush=re,z.status===E)if(z.wrap===2)o.adler=0,te(z,31),te(z,139),te(z,8),z.gzhead?(te(z,(z.gzhead.text?1:0)+(z.gzhead.hcrc?2:0)+(z.gzhead.extra?4:0)+(z.gzhead.name?8:0)+(z.gzhead.comment?16:0)),te(z,255&z.gzhead.time),te(z,z.gzhead.time>>8&255),te(z,z.gzhead.time>>16&255),te(z,z.gzhead.time>>24&255),te(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),te(z,255&z.gzhead.os),z.gzhead.extra&&z.gzhead.extra.length&&(te(z,255&z.gzhead.extra.length),te(z,z.gzhead.extra.length>>8&255)),z.gzhead.hcrc&&(o.adler=g(o.adler,z.pending_buf,z.pending,0)),z.gzindex=0,z.status=69):(te(z,0),te(z,0),te(z,0),te(z,0),te(z,0),te(z,z.level===9?2:2<=z.strategy||z.level<2?4:0),te(z,3),z.status=K);else{var se=M+(z.w_bits-8<<4)<<8;se|=(2<=z.strategy||z.level<2?0:z.level<6?1:z.level===6?2:3)<<6,z.strstart!==0&&(se|=32),se+=31-se%31,z.status=K,W(z,se),z.strstart!==0&&(W(z,o.adler>>>16),W(z,65535&o.adler)),o.adler=1}if(z.status===69)if(z.gzhead.extra){for(k=z.pending;z.gzindex<(65535&z.gzhead.extra.length)&&(z.pending!==z.pending_buf_size||(z.gzhead.hcrc&&z.pending>k&&(o.adler=g(o.adler,z.pending_buf,z.pending-k,k)),f(o),k=z.pending,z.pending!==z.pending_buf_size));)te(z,255&z.gzhead.extra[z.gzindex]),z.gzindex++;z.gzhead.hcrc&&z.pending>k&&(o.adler=g(o.adler,z.pending_buf,z.pending-k,k)),z.gzindex===z.gzhead.extra.length&&(z.gzindex=0,z.status=73)}else z.status=73;if(z.status===73)if(z.gzhead.name){k=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>k&&(o.adler=g(o.adler,z.pending_buf,z.pending-k,k)),f(o),k=z.pending,z.pending===z.pending_buf_size)){L=1;break}L=z.gzindex<z.gzhead.name.length?255&z.gzhead.name.charCodeAt(z.gzindex++):0,te(z,L)}while(L!==0);z.gzhead.hcrc&&z.pending>k&&(o.adler=g(o.adler,z.pending_buf,z.pending-k,k)),L===0&&(z.gzindex=0,z.status=91)}else z.status=91;if(z.status===91)if(z.gzhead.comment){k=z.pending;do{if(z.pending===z.pending_buf_size&&(z.gzhead.hcrc&&z.pending>k&&(o.adler=g(o.adler,z.pending_buf,z.pending-k,k)),f(o),k=z.pending,z.pending===z.pending_buf_size)){L=1;break}L=z.gzindex<z.gzhead.comment.length?255&z.gzhead.comment.charCodeAt(z.gzindex++):0,te(z,L)}while(L!==0);z.gzhead.hcrc&&z.pending>k&&(o.adler=g(o.adler,z.pending_buf,z.pending-k,k)),L===0&&(z.status=103)}else z.status=103;if(z.status===103&&(z.gzhead.hcrc?(z.pending+2>z.pending_buf_size&&f(o),z.pending+2<=z.pending_buf_size&&(te(z,255&o.adler),te(z,o.adler>>8&255),o.adler=0,z.status=K)):z.status=K),z.pending!==0){if(f(o),o.avail_out===0)return z.last_flush=-1,b}else if(o.avail_in===0&&le(re)<=le(P)&&re!==D)return me(o,-5);if(z.status===666&&o.avail_in!==0)return me(o,-5);if(o.avail_in!==0||z.lookahead!==0||re!==S&&z.status!==666){var ce=z.strategy===2?(function(X,fe){for(var ge;;){if(X.lookahead===0&&(Se(X),X.lookahead===0)){if(fe===S)return s;break}if(X.match_length=0,ge=u._tr_tally(X,0,X.window[X.strstart]),X.lookahead--,X.strstart++,ge&&(C(X,!1),X.strm.avail_out===0))return s}return X.insert=0,fe===D?(C(X,!0),X.strm.avail_out===0?q:F):X.last_lit&&(C(X,!1),X.strm.avail_out===0)?s:$})(z,re):z.strategy===3?(function(X,fe){for(var ge,pe,_e,Ie,Be=X.window;;){if(X.lookahead<=he){if(Se(X),X.lookahead<=he&&fe===S)return s;if(X.lookahead===0)break}if(X.match_length=0,X.lookahead>=J&&0<X.strstart&&(pe=Be[_e=X.strstart-1])===Be[++_e]&&pe===Be[++_e]&&pe===Be[++_e]){Ie=X.strstart+he;do;while(pe===Be[++_e]&&pe===Be[++_e]&&pe===Be[++_e]&&pe===Be[++_e]&&pe===Be[++_e]&&pe===Be[++_e]&&pe===Be[++_e]&&pe===Be[++_e]&&_e<Ie);X.match_length=he-(Ie-_e),X.match_length>X.lookahead&&(X.match_length=X.lookahead)}if(X.match_length>=J?(ge=u._tr_tally(X,1,X.match_length-J),X.lookahead-=X.match_length,X.strstart+=X.match_length,X.match_length=0):(ge=u._tr_tally(X,0,X.window[X.strstart]),X.lookahead--,X.strstart++),ge&&(C(X,!1),X.strm.avail_out===0))return s}return X.insert=0,fe===D?(C(X,!0),X.strm.avail_out===0?q:F):X.last_lit&&(C(X,!1),X.strm.avail_out===0)?s:$})(z,re):v[z.level].func(z,re);if(ce!==q&&ce!==F||(z.status=666),ce===s||ce===q)return o.avail_out===0&&(z.last_flush=-1),b;if(ce===$&&(re===1?u._tr_align(z):re!==5&&(u._tr_stored_block(z,0,0,!1),re===3&&(ve(z.head),z.lookahead===0&&(z.strstart=0,z.block_start=0,z.insert=0))),f(o),o.avail_out===0))return z.last_flush=-1,b}return re!==D?b:z.wrap<=0?1:(z.wrap===2?(te(z,255&o.adler),te(z,o.adler>>8&255),te(z,o.adler>>16&255),te(z,o.adler>>24&255),te(z,255&o.total_in),te(z,o.total_in>>8&255),te(z,o.total_in>>16&255),te(z,o.total_in>>24&255)):(W(z,o.adler>>>16),W(z,65535&o.adler)),f(o),0<z.wrap&&(z.wrap=-z.wrap),z.pending!==0?b:1)},w.deflateEnd=function(o){var re;return o&&o.state?(re=o.state.status)!==E&&re!==69&&re!==73&&re!==91&&re!==103&&re!==K&&re!==666?me(o,A):(o.state=null,re===K?me(o,-3):b):A},w.deflateSetDictionary=function(o,re){var P,z,k,L,se,ce,X,fe,ge=re.length;if(!o||!o.state||(L=(P=o.state).wrap)===2||L===1&&P.status!==E||P.lookahead)return A;for(L===1&&(o.adler=m(o.adler,re,ge,0)),P.wrap=0,ge>=P.w_size&&(L===0&&(ve(P.head),P.strstart=0,P.block_start=0,P.insert=0),fe=new y.Buf8(P.w_size),y.arraySet(fe,re,ge-P.w_size,P.w_size,0),re=fe,ge=P.w_size),se=o.avail_in,ce=o.next_in,X=o.input,o.avail_in=ge,o.next_in=0,o.input=re,Se(P);P.lookahead>=J;){for(z=P.strstart,k=P.lookahead-(J-1);P.ins_h=(P.ins_h<<P.hash_shift^P.window[z+J-1])&P.hash_mask,P.prev[z&P.w_mask]=P.head[P.ins_h],P.head[P.ins_h]=z,z++,--k;);P.strstart=z,P.lookahead=J-1,Se(P)}return P.strstart+=P.lookahead,P.block_start=P.strstart,P.insert=P.lookahead,P.lookahead=0,P.match_length=P.prev_length=J-1,P.match_available=0,o.next_in=ce,o.input=X,o.avail_in=se,P.wrap=L,b},w.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(d,h,w){h.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(d,h,w){h.exports=function(v,y){var u,m,g,B,S,D,b,A,p,T,x,M,N,I,U,ne,Z,de,J,he,be,E,K,s,$;u=v.state,m=v.next_in,s=v.input,g=m+(v.avail_in-5),B=v.next_out,$=v.output,S=B-(y-v.avail_out),D=B+(v.avail_out-257),b=u.dmax,A=u.wsize,p=u.whave,T=u.wnext,x=u.window,M=u.hold,N=u.bits,I=u.lencode,U=u.distcode,ne=(1<<u.lenbits)-1,Z=(1<<u.distbits)-1;e:do{N<15&&(M+=s[m++]<<N,N+=8,M+=s[m++]<<N,N+=8),de=I[M&ne];t:for(;;){if(M>>>=J=de>>>24,N-=J,(J=de>>>16&255)===0)$[B++]=65535&de;else{if(!(16&J)){if((64&J)==0){de=I[(65535&de)+(M&(1<<J)-1)];continue t}if(32&J){u.mode=12;break e}v.msg="invalid literal/length code",u.mode=30;break e}he=65535&de,(J&=15)&&(N<J&&(M+=s[m++]<<N,N+=8),he+=M&(1<<J)-1,M>>>=J,N-=J),N<15&&(M+=s[m++]<<N,N+=8,M+=s[m++]<<N,N+=8),de=U[M&Z];n:for(;;){if(M>>>=J=de>>>24,N-=J,!(16&(J=de>>>16&255))){if((64&J)==0){de=U[(65535&de)+(M&(1<<J)-1)];continue n}v.msg="invalid distance code",u.mode=30;break e}if(be=65535&de,N<(J&=15)&&(M+=s[m++]<<N,(N+=8)<J&&(M+=s[m++]<<N,N+=8)),b<(be+=M&(1<<J)-1)){v.msg="invalid distance too far back",u.mode=30;break e}if(M>>>=J,N-=J,(J=B-S)<be){if(p<(J=be-J)&&u.sane){v.msg="invalid distance too far back",u.mode=30;break e}if(K=x,(E=0)===T){if(E+=A-J,J<he){for(he-=J;$[B++]=x[E++],--J;);E=B-be,K=$}}else if(T<J){if(E+=A+T-J,(J-=T)<he){for(he-=J;$[B++]=x[E++],--J;);if(E=0,T<he){for(he-=J=T;$[B++]=x[E++],--J;);E=B-be,K=$}}}else if(E+=T-J,J<he){for(he-=J;$[B++]=x[E++],--J;);E=B-be,K=$}for(;2<he;)$[B++]=K[E++],$[B++]=K[E++],$[B++]=K[E++],he-=3;he&&($[B++]=K[E++],1<he&&($[B++]=K[E++]))}else{for(E=B-be;$[B++]=$[E++],$[B++]=$[E++],$[B++]=$[E++],2<(he-=3););he&&($[B++]=$[E++],1<he&&($[B++]=$[E++]))}break}}break}}while(m<g&&B<D);m-=he=N>>3,M&=(1<<(N-=he<<3))-1,v.next_in=m,v.next_out=B,v.avail_in=m<g?g-m+5:5-(m-g),v.avail_out=B<D?D-B+257:257-(B-D),u.hold=M,u.bits=N}},{}],49:[function(d,h,w){var v=d("../utils/common"),y=d("./adler32"),u=d("./crc32"),m=d("./inffast"),g=d("./inftrees"),B=1,S=2,D=0,b=-2,A=1,p=852,T=592;function x(E){return(E>>>24&255)+(E>>>8&65280)+((65280&E)<<8)+((255&E)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new v.Buf16(320),this.work=new v.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function N(E){var K;return E&&E.state?(K=E.state,E.total_in=E.total_out=K.total=0,E.msg="",K.wrap&&(E.adler=1&K.wrap),K.mode=A,K.last=0,K.havedict=0,K.dmax=32768,K.head=null,K.hold=0,K.bits=0,K.lencode=K.lendyn=new v.Buf32(p),K.distcode=K.distdyn=new v.Buf32(T),K.sane=1,K.back=-1,D):b}function I(E){var K;return E&&E.state?((K=E.state).wsize=0,K.whave=0,K.wnext=0,N(E)):b}function U(E,K){var s,$;return E&&E.state?($=E.state,K<0?(s=0,K=-K):(s=1+(K>>4),K<48&&(K&=15)),K&&(K<8||15<K)?b:($.window!==null&&$.wbits!==K&&($.window=null),$.wrap=s,$.wbits=K,I(E))):b}function ne(E,K){var s,$;return E?($=new M,(E.state=$).window=null,(s=U(E,K))!==D&&(E.state=null),s):b}var Z,de,J=!0;function he(E){if(J){var K;for(Z=new v.Buf32(512),de=new v.Buf32(32),K=0;K<144;)E.lens[K++]=8;for(;K<256;)E.lens[K++]=9;for(;K<280;)E.lens[K++]=7;for(;K<288;)E.lens[K++]=8;for(g(B,E.lens,0,288,Z,0,E.work,{bits:9}),K=0;K<32;)E.lens[K++]=5;g(S,E.lens,0,32,de,0,E.work,{bits:5}),J=!1}E.lencode=Z,E.lenbits=9,E.distcode=de,E.distbits=5}function be(E,K,s,$){var q,F=E.state;return F.window===null&&(F.wsize=1<<F.wbits,F.wnext=0,F.whave=0,F.window=new v.Buf8(F.wsize)),$>=F.wsize?(v.arraySet(F.window,K,s-F.wsize,F.wsize,0),F.wnext=0,F.whave=F.wsize):($<(q=F.wsize-F.wnext)&&(q=$),v.arraySet(F.window,K,s-$,q,F.wnext),($-=q)?(v.arraySet(F.window,K,s-$,$,0),F.wnext=$,F.whave=F.wsize):(F.wnext+=q,F.wnext===F.wsize&&(F.wnext=0),F.whave<F.wsize&&(F.whave+=q))),0}w.inflateReset=I,w.inflateReset2=U,w.inflateResetKeep=N,w.inflateInit=function(E){return ne(E,15)},w.inflateInit2=ne,w.inflate=function(E,K){var s,$,q,F,me,le,ve,f,C,te,W,ie,Se,Ce,Te,ke,Je,Ke,bt,xt,o,re,P,z,k=0,L=new v.Buf8(4),se=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!E||!E.state||!E.output||!E.input&&E.avail_in!==0)return b;(s=E.state).mode===12&&(s.mode=13),me=E.next_out,q=E.output,ve=E.avail_out,F=E.next_in,$=E.input,le=E.avail_in,f=s.hold,C=s.bits,te=le,W=ve,re=D;e:for(;;)switch(s.mode){case A:if(s.wrap===0){s.mode=13;break}for(;C<16;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}if(2&s.wrap&&f===35615){L[s.check=0]=255&f,L[1]=f>>>8&255,s.check=u(s.check,L,2,0),C=f=0,s.mode=2;break}if(s.flags=0,s.head&&(s.head.done=!1),!(1&s.wrap)||(((255&f)<<8)+(f>>8))%31){E.msg="incorrect header check",s.mode=30;break}if((15&f)!=8){E.msg="unknown compression method",s.mode=30;break}if(C-=4,o=8+(15&(f>>>=4)),s.wbits===0)s.wbits=o;else if(o>s.wbits){E.msg="invalid window size",s.mode=30;break}s.dmax=1<<o,E.adler=s.check=1,s.mode=512&f?10:12,C=f=0;break;case 2:for(;C<16;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}if(s.flags=f,(255&s.flags)!=8){E.msg="unknown compression method",s.mode=30;break}if(57344&s.flags){E.msg="unknown header flags set",s.mode=30;break}s.head&&(s.head.text=f>>8&1),512&s.flags&&(L[0]=255&f,L[1]=f>>>8&255,s.check=u(s.check,L,2,0)),C=f=0,s.mode=3;case 3:for(;C<32;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}s.head&&(s.head.time=f),512&s.flags&&(L[0]=255&f,L[1]=f>>>8&255,L[2]=f>>>16&255,L[3]=f>>>24&255,s.check=u(s.check,L,4,0)),C=f=0,s.mode=4;case 4:for(;C<16;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}s.head&&(s.head.xflags=255&f,s.head.os=f>>8),512&s.flags&&(L[0]=255&f,L[1]=f>>>8&255,s.check=u(s.check,L,2,0)),C=f=0,s.mode=5;case 5:if(1024&s.flags){for(;C<16;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}s.length=f,s.head&&(s.head.extra_len=f),512&s.flags&&(L[0]=255&f,L[1]=f>>>8&255,s.check=u(s.check,L,2,0)),C=f=0}else s.head&&(s.head.extra=null);s.mode=6;case 6:if(1024&s.flags&&(le<(ie=s.length)&&(ie=le),ie&&(s.head&&(o=s.head.extra_len-s.length,s.head.extra||(s.head.extra=new Array(s.head.extra_len)),v.arraySet(s.head.extra,$,F,ie,o)),512&s.flags&&(s.check=u(s.check,$,ie,F)),le-=ie,F+=ie,s.length-=ie),s.length))break e;s.length=0,s.mode=7;case 7:if(2048&s.flags){if(le===0)break e;for(ie=0;o=$[F+ie++],s.head&&o&&s.length<65536&&(s.head.name+=String.fromCharCode(o)),o&&ie<le;);if(512&s.flags&&(s.check=u(s.check,$,ie,F)),le-=ie,F+=ie,o)break e}else s.head&&(s.head.name=null);s.length=0,s.mode=8;case 8:if(4096&s.flags){if(le===0)break e;for(ie=0;o=$[F+ie++],s.head&&o&&s.length<65536&&(s.head.comment+=String.fromCharCode(o)),o&&ie<le;);if(512&s.flags&&(s.check=u(s.check,$,ie,F)),le-=ie,F+=ie,o)break e}else s.head&&(s.head.comment=null);s.mode=9;case 9:if(512&s.flags){for(;C<16;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}if(f!==(65535&s.check)){E.msg="header crc mismatch",s.mode=30;break}C=f=0}s.head&&(s.head.hcrc=s.flags>>9&1,s.head.done=!0),E.adler=s.check=0,s.mode=12;break;case 10:for(;C<32;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}E.adler=s.check=x(f),C=f=0,s.mode=11;case 11:if(s.havedict===0)return E.next_out=me,E.avail_out=ve,E.next_in=F,E.avail_in=le,s.hold=f,s.bits=C,2;E.adler=s.check=1,s.mode=12;case 12:if(K===5||K===6)break e;case 13:if(s.last){f>>>=7&C,C-=7&C,s.mode=27;break}for(;C<3;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}switch(s.last=1&f,C-=1,3&(f>>>=1)){case 0:s.mode=14;break;case 1:if(he(s),s.mode=20,K!==6)break;f>>>=2,C-=2;break e;case 2:s.mode=17;break;case 3:E.msg="invalid block type",s.mode=30}f>>>=2,C-=2;break;case 14:for(f>>>=7&C,C-=7&C;C<32;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}if((65535&f)!=(f>>>16^65535)){E.msg="invalid stored block lengths",s.mode=30;break}if(s.length=65535&f,C=f=0,s.mode=15,K===6)break e;case 15:s.mode=16;case 16:if(ie=s.length){if(le<ie&&(ie=le),ve<ie&&(ie=ve),ie===0)break e;v.arraySet(q,$,F,ie,me),le-=ie,F+=ie,ve-=ie,me+=ie,s.length-=ie;break}s.mode=12;break;case 17:for(;C<14;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}if(s.nlen=257+(31&f),f>>>=5,C-=5,s.ndist=1+(31&f),f>>>=5,C-=5,s.ncode=4+(15&f),f>>>=4,C-=4,286<s.nlen||30<s.ndist){E.msg="too many length or distance symbols",s.mode=30;break}s.have=0,s.mode=18;case 18:for(;s.have<s.ncode;){for(;C<3;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}s.lens[se[s.have++]]=7&f,f>>>=3,C-=3}for(;s.have<19;)s.lens[se[s.have++]]=0;if(s.lencode=s.lendyn,s.lenbits=7,P={bits:s.lenbits},re=g(0,s.lens,0,19,s.lencode,0,s.work,P),s.lenbits=P.bits,re){E.msg="invalid code lengths set",s.mode=30;break}s.have=0,s.mode=19;case 19:for(;s.have<s.nlen+s.ndist;){for(;ke=(k=s.lencode[f&(1<<s.lenbits)-1])>>>16&255,Je=65535&k,!((Te=k>>>24)<=C);){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}if(Je<16)f>>>=Te,C-=Te,s.lens[s.have++]=Je;else{if(Je===16){for(z=Te+2;C<z;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}if(f>>>=Te,C-=Te,s.have===0){E.msg="invalid bit length repeat",s.mode=30;break}o=s.lens[s.have-1],ie=3+(3&f),f>>>=2,C-=2}else if(Je===17){for(z=Te+3;C<z;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}C-=Te,o=0,ie=3+(7&(f>>>=Te)),f>>>=3,C-=3}else{for(z=Te+7;C<z;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}C-=Te,o=0,ie=11+(127&(f>>>=Te)),f>>>=7,C-=7}if(s.have+ie>s.nlen+s.ndist){E.msg="invalid bit length repeat",s.mode=30;break}for(;ie--;)s.lens[s.have++]=o}}if(s.mode===30)break;if(s.lens[256]===0){E.msg="invalid code -- missing end-of-block",s.mode=30;break}if(s.lenbits=9,P={bits:s.lenbits},re=g(B,s.lens,0,s.nlen,s.lencode,0,s.work,P),s.lenbits=P.bits,re){E.msg="invalid literal/lengths set",s.mode=30;break}if(s.distbits=6,s.distcode=s.distdyn,P={bits:s.distbits},re=g(S,s.lens,s.nlen,s.ndist,s.distcode,0,s.work,P),s.distbits=P.bits,re){E.msg="invalid distances set",s.mode=30;break}if(s.mode=20,K===6)break e;case 20:s.mode=21;case 21:if(6<=le&&258<=ve){E.next_out=me,E.avail_out=ve,E.next_in=F,E.avail_in=le,s.hold=f,s.bits=C,m(E,W),me=E.next_out,q=E.output,ve=E.avail_out,F=E.next_in,$=E.input,le=E.avail_in,f=s.hold,C=s.bits,s.mode===12&&(s.back=-1);break}for(s.back=0;ke=(k=s.lencode[f&(1<<s.lenbits)-1])>>>16&255,Je=65535&k,!((Te=k>>>24)<=C);){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}if(ke&&(240&ke)==0){for(Ke=Te,bt=ke,xt=Je;ke=(k=s.lencode[xt+((f&(1<<Ke+bt)-1)>>Ke)])>>>16&255,Je=65535&k,!(Ke+(Te=k>>>24)<=C);){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}f>>>=Ke,C-=Ke,s.back+=Ke}if(f>>>=Te,C-=Te,s.back+=Te,s.length=Je,ke===0){s.mode=26;break}if(32&ke){s.back=-1,s.mode=12;break}if(64&ke){E.msg="invalid literal/length code",s.mode=30;break}s.extra=15&ke,s.mode=22;case 22:if(s.extra){for(z=s.extra;C<z;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}s.length+=f&(1<<s.extra)-1,f>>>=s.extra,C-=s.extra,s.back+=s.extra}s.was=s.length,s.mode=23;case 23:for(;ke=(k=s.distcode[f&(1<<s.distbits)-1])>>>16&255,Je=65535&k,!((Te=k>>>24)<=C);){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}if((240&ke)==0){for(Ke=Te,bt=ke,xt=Je;ke=(k=s.distcode[xt+((f&(1<<Ke+bt)-1)>>Ke)])>>>16&255,Je=65535&k,!(Ke+(Te=k>>>24)<=C);){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}f>>>=Ke,C-=Ke,s.back+=Ke}if(f>>>=Te,C-=Te,s.back+=Te,64&ke){E.msg="invalid distance code",s.mode=30;break}s.offset=Je,s.extra=15&ke,s.mode=24;case 24:if(s.extra){for(z=s.extra;C<z;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}s.offset+=f&(1<<s.extra)-1,f>>>=s.extra,C-=s.extra,s.back+=s.extra}if(s.offset>s.dmax){E.msg="invalid distance too far back",s.mode=30;break}s.mode=25;case 25:if(ve===0)break e;if(ie=W-ve,s.offset>ie){if((ie=s.offset-ie)>s.whave&&s.sane){E.msg="invalid distance too far back",s.mode=30;break}Se=ie>s.wnext?(ie-=s.wnext,s.wsize-ie):s.wnext-ie,ie>s.length&&(ie=s.length),Ce=s.window}else Ce=q,Se=me-s.offset,ie=s.length;for(ve<ie&&(ie=ve),ve-=ie,s.length-=ie;q[me++]=Ce[Se++],--ie;);s.length===0&&(s.mode=21);break;case 26:if(ve===0)break e;q[me++]=s.length,ve--,s.mode=21;break;case 27:if(s.wrap){for(;C<32;){if(le===0)break e;le--,f|=$[F++]<<C,C+=8}if(W-=ve,E.total_out+=W,s.total+=W,W&&(E.adler=s.check=s.flags?u(s.check,q,W,me-W):y(s.check,q,W,me-W)),W=ve,(s.flags?f:x(f))!==s.check){E.msg="incorrect data check",s.mode=30;break}C=f=0}s.mode=28;case 28:if(s.wrap&&s.flags){for(;C<32;){if(le===0)break e;le--,f+=$[F++]<<C,C+=8}if(f!==(4294967295&s.total)){E.msg="incorrect length check",s.mode=30;break}C=f=0}s.mode=29;case 29:re=1;break e;case 30:re=-3;break e;case 31:return-4;default:return b}return E.next_out=me,E.avail_out=ve,E.next_in=F,E.avail_in=le,s.hold=f,s.bits=C,(s.wsize||W!==E.avail_out&&s.mode<30&&(s.mode<27||K!==4))&&be(E,E.output,E.next_out,W-E.avail_out)?(s.mode=31,-4):(te-=E.avail_in,W-=E.avail_out,E.total_in+=te,E.total_out+=W,s.total+=W,s.wrap&&W&&(E.adler=s.check=s.flags?u(s.check,q,W,E.next_out-W):y(s.check,q,W,E.next_out-W)),E.data_type=s.bits+(s.last?64:0)+(s.mode===12?128:0)+(s.mode===20||s.mode===15?256:0),(te==0&&W===0||K===4)&&re===D&&(re=-5),re)},w.inflateEnd=function(E){if(!E||!E.state)return b;var K=E.state;return K.window&&(K.window=null),E.state=null,D},w.inflateGetHeader=function(E,K){var s;return E&&E.state?(2&(s=E.state).wrap)==0?b:((s.head=K).done=!1,D):b},w.inflateSetDictionary=function(E,K){var s,$=K.length;return E&&E.state?(s=E.state).wrap!==0&&s.mode!==11?b:s.mode===11&&y(1,K,$,0)!==s.check?-3:be(E,K,$,$)?(s.mode=31,-4):(s.havedict=1,D):b},w.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(d,h,w){var v=d("../utils/common"),y=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],u=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],m=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],g=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];h.exports=function(B,S,D,b,A,p,T,x){var M,N,I,U,ne,Z,de,J,he,be=x.bits,E=0,K=0,s=0,$=0,q=0,F=0,me=0,le=0,ve=0,f=0,C=null,te=0,W=new v.Buf16(16),ie=new v.Buf16(16),Se=null,Ce=0;for(E=0;E<=15;E++)W[E]=0;for(K=0;K<b;K++)W[S[D+K]]++;for(q=be,$=15;1<=$&&W[$]===0;$--);if($<q&&(q=$),$===0)return A[p++]=20971520,A[p++]=20971520,x.bits=1,0;for(s=1;s<$&&W[s]===0;s++);for(q<s&&(q=s),E=le=1;E<=15;E++)if(le<<=1,(le-=W[E])<0)return-1;if(0<le&&(B===0||$!==1))return-1;for(ie[1]=0,E=1;E<15;E++)ie[E+1]=ie[E]+W[E];for(K=0;K<b;K++)S[D+K]!==0&&(T[ie[S[D+K]]++]=K);if(Z=B===0?(C=Se=T,19):B===1?(C=y,te-=257,Se=u,Ce-=257,256):(C=m,Se=g,-1),E=s,ne=p,me=K=f=0,I=-1,U=(ve=1<<(F=q))-1,B===1&&852<ve||B===2&&592<ve)return 1;for(;;){for(de=E-me,he=T[K]<Z?(J=0,T[K]):T[K]>Z?(J=Se[Ce+T[K]],C[te+T[K]]):(J=96,0),M=1<<E-me,s=N=1<<F;A[ne+(f>>me)+(N-=M)]=de<<24|J<<16|he|0,N!==0;);for(M=1<<E-1;f&M;)M>>=1;if(M!==0?(f&=M-1,f+=M):f=0,K++,--W[E]==0){if(E===$)break;E=S[D+T[K]]}if(q<E&&(f&U)!==I){for(me===0&&(me=q),ne+=s,le=1<<(F=E-me);F+me<$&&!((le-=W[F+me])<=0);)F++,le<<=1;if(ve+=1<<F,B===1&&852<ve||B===2&&592<ve)return 1;A[I=f&U]=q<<24|F<<16|ne-p|0}}return f!==0&&(A[ne+f]=E-me<<24|64<<16|0),x.bits=q,0}},{"../utils/common":41}],51:[function(d,h,w){h.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(d,h,w){var v=d("../utils/common"),y=0,u=1;function m(k){for(var L=k.length;0<=--L;)k[L]=0}var g=0,B=29,S=256,D=S+1+B,b=30,A=19,p=2*D+1,T=15,x=16,M=7,N=256,I=16,U=17,ne=18,Z=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],de=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],J=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],he=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],be=new Array(2*(D+2));m(be);var E=new Array(2*b);m(E);var K=new Array(512);m(K);var s=new Array(256);m(s);var $=new Array(B);m($);var q,F,me,le=new Array(b);function ve(k,L,se,ce,X){this.static_tree=k,this.extra_bits=L,this.extra_base=se,this.elems=ce,this.max_length=X,this.has_stree=k&&k.length}function f(k,L){this.dyn_tree=k,this.max_code=0,this.stat_desc=L}function C(k){return k<256?K[k]:K[256+(k>>>7)]}function te(k,L){k.pending_buf[k.pending++]=255&L,k.pending_buf[k.pending++]=L>>>8&255}function W(k,L,se){k.bi_valid>x-se?(k.bi_buf|=L<<k.bi_valid&65535,te(k,k.bi_buf),k.bi_buf=L>>x-k.bi_valid,k.bi_valid+=se-x):(k.bi_buf|=L<<k.bi_valid&65535,k.bi_valid+=se)}function ie(k,L,se){W(k,se[2*L],se[2*L+1])}function Se(k,L){for(var se=0;se|=1&k,k>>>=1,se<<=1,0<--L;);return se>>>1}function Ce(k,L,se){var ce,X,fe=new Array(T+1),ge=0;for(ce=1;ce<=T;ce++)fe[ce]=ge=ge+se[ce-1]<<1;for(X=0;X<=L;X++){var pe=k[2*X+1];pe!==0&&(k[2*X]=Se(fe[pe]++,pe))}}function Te(k){var L;for(L=0;L<D;L++)k.dyn_ltree[2*L]=0;for(L=0;L<b;L++)k.dyn_dtree[2*L]=0;for(L=0;L<A;L++)k.bl_tree[2*L]=0;k.dyn_ltree[2*N]=1,k.opt_len=k.static_len=0,k.last_lit=k.matches=0}function ke(k){8<k.bi_valid?te(k,k.bi_buf):0<k.bi_valid&&(k.pending_buf[k.pending++]=k.bi_buf),k.bi_buf=0,k.bi_valid=0}function Je(k,L,se,ce){var X=2*L,fe=2*se;return k[X]<k[fe]||k[X]===k[fe]&&ce[L]<=ce[se]}function Ke(k,L,se){for(var ce=k.heap[se],X=se<<1;X<=k.heap_len&&(X<k.heap_len&&Je(L,k.heap[X+1],k.heap[X],k.depth)&&X++,!Je(L,ce,k.heap[X],k.depth));)k.heap[se]=k.heap[X],se=X,X<<=1;k.heap[se]=ce}function bt(k,L,se){var ce,X,fe,ge,pe=0;if(k.last_lit!==0)for(;ce=k.pending_buf[k.d_buf+2*pe]<<8|k.pending_buf[k.d_buf+2*pe+1],X=k.pending_buf[k.l_buf+pe],pe++,ce===0?ie(k,X,L):(ie(k,(fe=s[X])+S+1,L),(ge=Z[fe])!==0&&W(k,X-=$[fe],ge),ie(k,fe=C(--ce),se),(ge=de[fe])!==0&&W(k,ce-=le[fe],ge)),pe<k.last_lit;);ie(k,N,L)}function xt(k,L){var se,ce,X,fe=L.dyn_tree,ge=L.stat_desc.static_tree,pe=L.stat_desc.has_stree,_e=L.stat_desc.elems,Ie=-1;for(k.heap_len=0,k.heap_max=p,se=0;se<_e;se++)fe[2*se]!==0?(k.heap[++k.heap_len]=Ie=se,k.depth[se]=0):fe[2*se+1]=0;for(;k.heap_len<2;)fe[2*(X=k.heap[++k.heap_len]=Ie<2?++Ie:0)]=1,k.depth[X]=0,k.opt_len--,pe&&(k.static_len-=ge[2*X+1]);for(L.max_code=Ie,se=k.heap_len>>1;1<=se;se--)Ke(k,fe,se);for(X=_e;se=k.heap[1],k.heap[1]=k.heap[k.heap_len--],Ke(k,fe,1),ce=k.heap[1],k.heap[--k.heap_max]=se,k.heap[--k.heap_max]=ce,fe[2*X]=fe[2*se]+fe[2*ce],k.depth[X]=(k.depth[se]>=k.depth[ce]?k.depth[se]:k.depth[ce])+1,fe[2*se+1]=fe[2*ce+1]=X,k.heap[1]=X++,Ke(k,fe,1),2<=k.heap_len;);k.heap[--k.heap_max]=k.heap[1],(function(Be,St){var wn,Lt,Kn,Xe,dt,Ht,$e=St.dyn_tree,Ka=St.max_code,hr=St.stat_desc.static_tree,fr=St.stat_desc.has_stree,mi=St.stat_desc.extra_bits,Qn=St.stat_desc.extra_base,Wt=St.stat_desc.max_length,Ut=0;for(Xe=0;Xe<=T;Xe++)Be.bl_count[Xe]=0;for($e[2*Be.heap[Be.heap_max]+1]=0,wn=Be.heap_max+1;wn<p;wn++)Wt<(Xe=$e[2*$e[2*(Lt=Be.heap[wn])+1]+1]+1)&&(Xe=Wt,Ut++),$e[2*Lt+1]=Xe,Ka<Lt||(Be.bl_count[Xe]++,dt=0,Qn<=Lt&&(dt=mi[Lt-Qn]),Ht=$e[2*Lt],Be.opt_len+=Ht*(Xe+dt),fr&&(Be.static_len+=Ht*(hr[2*Lt+1]+dt)));if(Ut!==0){do{for(Xe=Wt-1;Be.bl_count[Xe]===0;)Xe--;Be.bl_count[Xe]--,Be.bl_count[Xe+1]+=2,Be.bl_count[Wt]--,Ut-=2}while(0<Ut);for(Xe=Wt;Xe!==0;Xe--)for(Lt=Be.bl_count[Xe];Lt!==0;)Ka<(Kn=Be.heap[--wn])||($e[2*Kn+1]!==Xe&&(Be.opt_len+=(Xe-$e[2*Kn+1])*$e[2*Kn],$e[2*Kn+1]=Xe),Lt--)}})(k,L),Ce(fe,Ie,k.bl_count)}function o(k,L,se){var ce,X,fe=-1,ge=L[1],pe=0,_e=7,Ie=4;for(ge===0&&(_e=138,Ie=3),L[2*(se+1)+1]=65535,ce=0;ce<=se;ce++)X=ge,ge=L[2*(ce+1)+1],++pe<_e&&X===ge||(pe<Ie?k.bl_tree[2*X]+=pe:X!==0?(X!==fe&&k.bl_tree[2*X]++,k.bl_tree[2*I]++):pe<=10?k.bl_tree[2*U]++:k.bl_tree[2*ne]++,fe=X,Ie=(pe=0)===ge?(_e=138,3):X===ge?(_e=6,3):(_e=7,4))}function re(k,L,se){var ce,X,fe=-1,ge=L[1],pe=0,_e=7,Ie=4;for(ge===0&&(_e=138,Ie=3),ce=0;ce<=se;ce++)if(X=ge,ge=L[2*(ce+1)+1],!(++pe<_e&&X===ge)){if(pe<Ie)for(;ie(k,X,k.bl_tree),--pe!=0;);else X!==0?(X!==fe&&(ie(k,X,k.bl_tree),pe--),ie(k,I,k.bl_tree),W(k,pe-3,2)):pe<=10?(ie(k,U,k.bl_tree),W(k,pe-3,3)):(ie(k,ne,k.bl_tree),W(k,pe-11,7));fe=X,Ie=(pe=0)===ge?(_e=138,3):X===ge?(_e=6,3):(_e=7,4)}}m(le);var P=!1;function z(k,L,se,ce){W(k,(g<<1)+(ce?1:0),3),(function(X,fe,ge,pe){ke(X),te(X,ge),te(X,~ge),v.arraySet(X.pending_buf,X.window,fe,ge,X.pending),X.pending+=ge})(k,L,se)}w._tr_init=function(k){P||((function(){var L,se,ce,X,fe,ge=new Array(T+1);for(X=ce=0;X<B-1;X++)for($[X]=ce,L=0;L<1<<Z[X];L++)s[ce++]=X;for(s[ce-1]=X,X=fe=0;X<16;X++)for(le[X]=fe,L=0;L<1<<de[X];L++)K[fe++]=X;for(fe>>=7;X<b;X++)for(le[X]=fe<<7,L=0;L<1<<de[X]-7;L++)K[256+fe++]=X;for(se=0;se<=T;se++)ge[se]=0;for(L=0;L<=143;)be[2*L+1]=8,L++,ge[8]++;for(;L<=255;)be[2*L+1]=9,L++,ge[9]++;for(;L<=279;)be[2*L+1]=7,L++,ge[7]++;for(;L<=287;)be[2*L+1]=8,L++,ge[8]++;for(Ce(be,D+1,ge),L=0;L<b;L++)E[2*L+1]=5,E[2*L]=Se(L,5);q=new ve(be,Z,S+1,D,T),F=new ve(E,de,0,b,T),me=new ve(new Array(0),J,0,A,M)})(),P=!0),k.l_desc=new f(k.dyn_ltree,q),k.d_desc=new f(k.dyn_dtree,F),k.bl_desc=new f(k.bl_tree,me),k.bi_buf=0,k.bi_valid=0,Te(k)},w._tr_stored_block=z,w._tr_flush_block=function(k,L,se,ce){var X,fe,ge=0;0<k.level?(k.strm.data_type===2&&(k.strm.data_type=(function(pe){var _e,Ie=4093624447;for(_e=0;_e<=31;_e++,Ie>>>=1)if(1&Ie&&pe.dyn_ltree[2*_e]!==0)return y;if(pe.dyn_ltree[18]!==0||pe.dyn_ltree[20]!==0||pe.dyn_ltree[26]!==0)return u;for(_e=32;_e<S;_e++)if(pe.dyn_ltree[2*_e]!==0)return u;return y})(k)),xt(k,k.l_desc),xt(k,k.d_desc),ge=(function(pe){var _e;for(o(pe,pe.dyn_ltree,pe.l_desc.max_code),o(pe,pe.dyn_dtree,pe.d_desc.max_code),xt(pe,pe.bl_desc),_e=A-1;3<=_e&&pe.bl_tree[2*he[_e]+1]===0;_e--);return pe.opt_len+=3*(_e+1)+5+5+4,_e})(k),X=k.opt_len+3+7>>>3,(fe=k.static_len+3+7>>>3)<=X&&(X=fe)):X=fe=se+5,se+4<=X&&L!==-1?z(k,L,se,ce):k.strategy===4||fe===X?(W(k,2+(ce?1:0),3),bt(k,be,E)):(W(k,4+(ce?1:0),3),(function(pe,_e,Ie,Be){var St;for(W(pe,_e-257,5),W(pe,Ie-1,5),W(pe,Be-4,4),St=0;St<Be;St++)W(pe,pe.bl_tree[2*he[St]+1],3);re(pe,pe.dyn_ltree,_e-1),re(pe,pe.dyn_dtree,Ie-1)})(k,k.l_desc.max_code+1,k.d_desc.max_code+1,ge+1),bt(k,k.dyn_ltree,k.dyn_dtree)),Te(k),ce&&ke(k)},w._tr_tally=function(k,L,se){return k.pending_buf[k.d_buf+2*k.last_lit]=L>>>8&255,k.pending_buf[k.d_buf+2*k.last_lit+1]=255&L,k.pending_buf[k.l_buf+k.last_lit]=255&se,k.last_lit++,L===0?k.dyn_ltree[2*se]++:(k.matches++,L--,k.dyn_ltree[2*(s[se]+S+1)]++,k.dyn_dtree[2*C(L)]++),k.last_lit===k.lit_bufsize-1},w._tr_align=function(k){W(k,2,3),ie(k,N,be),(function(L){L.bi_valid===16?(te(L,L.bi_buf),L.bi_buf=0,L.bi_valid=0):8<=L.bi_valid&&(L.pending_buf[L.pending++]=255&L.bi_buf,L.bi_buf>>=8,L.bi_valid-=8)})(k)}},{"../utils/common":41}],53:[function(d,h,w){h.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(d,h,w){(function(v){(function(y,u){if(!y.setImmediate){var m,g,B,S,D=1,b={},A=!1,p=y.document,T=Object.getPrototypeOf&&Object.getPrototypeOf(y);T=T&&T.setTimeout?T:y,m={}.toString.call(y.process)==="[object process]"?function(I){process.nextTick(function(){M(I)})}:(function(){if(y.postMessage&&!y.importScripts){var I=!0,U=y.onmessage;return y.onmessage=function(){I=!1},y.postMessage("","*"),y.onmessage=U,I}})()?(S="setImmediate$"+Math.random()+"$",y.addEventListener?y.addEventListener("message",N,!1):y.attachEvent("onmessage",N),function(I){y.postMessage(S+I,"*")}):y.MessageChannel?((B=new MessageChannel).port1.onmessage=function(I){M(I.data)},function(I){B.port2.postMessage(I)}):p&&"onreadystatechange"in p.createElement("script")?(g=p.documentElement,function(I){var U=p.createElement("script");U.onreadystatechange=function(){M(I),U.onreadystatechange=null,g.removeChild(U),U=null},g.appendChild(U)}):function(I){setTimeout(M,0,I)},T.setImmediate=function(I){typeof I!="function"&&(I=new Function(""+I));for(var U=new Array(arguments.length-1),ne=0;ne<U.length;ne++)U[ne]=arguments[ne+1];var Z={callback:I,args:U};return b[D]=Z,m(D),D++},T.clearImmediate=x}function x(I){delete b[I]}function M(I){if(A)setTimeout(M,0,I);else{var U=b[I];if(U){A=!0;try{(function(ne){var Z=ne.callback,de=ne.args;switch(de.length){case 0:Z();break;case 1:Z(de[0]);break;case 2:Z(de[0],de[1]);break;case 3:Z(de[0],de[1],de[2]);break;default:Z.apply(u,de)}})(U)}finally{x(I),A=!1}}}}function N(I){I.source===y&&typeof I.data=="string"&&I.data.indexOf(S)===0&&M(+I.data.slice(S.length))}})(typeof self>"u"?v===void 0?this:v:self)}).call(this,typeof sr<"u"?sr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Os)),Os.exports}var Np=Op();const $h=_p(Np),Rp=new TextDecoder("utf-8",{fatal:!1});new TextEncoder;function ef(_){return Rp.decode(_)}const Lp=/\.(html?|xhtml)$/i;function tf(_){const j=_.filter(w=>Lp.test(w.path)),d=j.find(w=>w.path.toLowerCase()==="index.html");if(d)return d;const h=j.filter(w=>w.path.toLowerCase().endsWith("/index.html")).sort((w,v)=>w.path.split("/").length-v.path.split("/").length);return h[0]?h[0]:j.length===1?j[0]:null}function nf(_){const j=tf(_.files);if(!j)return Ns(null,["没有找到 index.html 或唯一的 HTML 文件。"]);const d=ef(j.data),h=new DOMParser().parseFromString(d,"text/html");if(h.querySelector("parsererror"))return Ns(j.path,["HTML 文件解析失败，可能不是标准 HTML。"]);const v=d.includes("HtmlDeckEditor")||d.includes("FrontendSlidesEditor.mount")||!!h.querySelector('script[src*="html-deck-editor"], script[src*="editor-runtime"]'),y=h.querySelector("deck-stage#deckStage, #deckStage, .deck-stage"),u=y?Array.from(y.querySelectorAll(".slide")):[];if(v&&y&&u.length>0)return{status:"already-editable",sourceKind:"fixed-stage",indexPath:j.path,slideCount:u.length,confidence:.98,messages:["这份演示稿已经带有编辑功能，可以升级为新版编辑器。"],warnings:[]};if(y&&u.length>0)return{status:"ready",sourceKind:d.includes("frontend-slides")?"frontend-slides":"fixed-stage",indexPath:j.path,slideCount:u.length,confidence:.95,messages:[`找到了固定舞台结构，共 ${u.length} 页。`],warnings:[]};const m=h.querySelectorAll(".reveal .slides section");if(m.length>=2)return{status:"adaptable",sourceKind:"reveal",indexPath:j.path,slideCount:m.length,confidence:.82,messages:[`识别到 Reveal.js 演示结构，共 ${m.length} 页。`],warnings:["第一版会把每页内容包装进固定舞台，复杂 Reveal 转场和插件不会完整保留。"]};const g=h.querySelectorAll("section.slide, .slide");if(g.length>=2)return{status:"adaptable",sourceKind:"section-slide",indexPath:j.path,slideCount:g.length,confidence:.78,messages:[`识别到 ${g.length} 个 slide 页面。`],warnings:["会把这些页面包装成可编辑 HTML deck。"]};const B=Hp(h);return B.length>=2&&B.length<=80?{status:"adaptable",sourceKind:"generic-section",indexPath:j.path,slideCount:B.length,confidence:.62,messages:[`看起来像由 ${B.length} 个页面区块组成的简单演示。`],warnings:["普通 section 会按页包装，排版可能需要打开编辑器后微调。"]}:Ns(j.path,["这看起来更像普通网页或应用，不像 HTML 演示稿。","第一版不会强行转换普通网站，避免生成难以编辑的结果。"])}function Hp(_){const j=Array.from(_.body.querySelectorAll(["#deck > section",".deck > section",".slides > section","[data-deck] > section","[data-slides] > section"].join(", "))).filter(Kh);return j.length>=2?j:Array.from(_.body.querySelectorAll("main > section, body > section")).filter(Kh)}function Kh(_){return(_.textContent||"").trim().length>10}function Ns(_,j){return{status:"unsupported",sourceKind:"unknown",indexPath:_,slideCount:0,confidence:0,messages:j,warnings:[]}}const Up=`/**
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
`,jp=`/* Frontend Slides Visual Deck Editor runtime. Source baseline: 1ba9bf0. */
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

  const EDITOR_HTML = \`
<div class="edit-hotzone" data-html-deck-editor-ui aria-hidden="true"></div>
  <button class="edit-toggle" id="editToggle" data-html-deck-editor-ui title="Edit mode (E)" aria-label="Toggle edit mode">E</button>
  <div class="editor-shell" id="editorShell" data-html-deck-editor-ui aria-label="演示编辑器">
    <div class="editor-toolbar" role="toolbar" aria-label="编辑工具">
      <button class="editor-button" id="helpBtn" type="button">编辑器功能介绍</button>
      <button class="editor-button editor-icon-button" id="undoBtn" type="button" title="撤回 (Cmd/Ctrl+Z)" aria-label="撤回" disabled>↶</button>
      <button class="editor-button editor-icon-button" id="redoBtn" type="button" title="重做 (Cmd/Ctrl+Shift+Z)" aria-label="重做" disabled>↷</button>
      <button class="editor-button" id="addTextBtn" type="button">添加文字框</button>
      <button class="editor-button" id="addImageBtn" type="button">添加图片</button>
      <div class="shape-picker-wrap">
        <button class="editor-button" id="addShapeBtn" type="button" aria-haspopup="menu" aria-expanded="false">添加形状</button>
      </div>
      <button class="editor-button primary" id="saveBtn" type="button">保存</button>
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
            <p>拖动选框移动元素，拖右下角改变尺寸；右侧 Layout 可以精确输入位置和大小。拖动时会出现对齐参考线，方便和画面中心或其他元素吸附。</p>
          </section>
          <section class="editor-help-section">
            <h3>动效和保存</h3>
            <ul>
              <li>Motion 区可以设置入场方式、出现顺序、延迟和时长，并支持预览当前元素或重播本页。</li>
              <li>选中元素后可拖动、缩放，点选框右上角 × 或按 Delete/Backspace 删除；撤回用 ↶ 或 Cmd/Ctrl+Z，重做用 ↷ 或 Cmd/Ctrl+Shift+Z。</li>
              <li>保存会优先覆盖你授权的 index.html；浏览器不支持覆盖写入时，会退回为下载当前 HTML。</li>
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
            <p>“保存”会把当前画面写入你授权的 HTML 文件；如果浏览器不支持覆盖写入，就下载新的 index.html。“重置编辑”只是清掉当前浏览器的自动草稿。刷新后页面会重新读取 HTML 文件本身，不再叠加草稿；如果这个文件之前已经被覆盖保存过，刷新后看到的仍然是已保存后的内容。如果刷新前又点保存，保存的仍然是当前屏幕上的内容。</p>
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

  function normalizeSlideIndex(index, slides) {
    const count = slides?.length || 0;
    if (!count) return 0;
    const number = Number(index);
    if (!Number.isFinite(number)) return 0;
    return Math.max(0, Math.min(count - 1, Math.round(number)));
  }

  function currentSlideFromStageTransform(stage, slides) {
    if (!stage || !slides?.length) return -1;
    const transform = stage.style?.transform || getComputedStyle(stage).transform || "";
    const match = transform.match(/translateX\\(\\s*(-?\\d+(?:\\.\\d+)?)vw\\s*\\)/i);
    if (!match) return -1;
    return normalizeSlideIndex(Math.abs(Number.parseFloat(match[1])) / 100, slides);
  }

  function computeHostCurrentSlide(slides, stage) {
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
      slide.toggleAttribute("data-html-deck-editor-current", i === current);
    });
    return current;
  }

  function syncHostCurrentSlide(stage, index) {
    window.__currentSlideIndex = index;
    if (stage) stage.style.setProperty("--html-deck-editor-current-slide", String(index));
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
    const slide = stage?.querySelector?.(".slide[data-html-deck-editor-current], .slide.active, .slide.visible, .slide[data-deck-active], .slide");
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
    stage.querySelectorAll(".slide[data-html-deck-editor-current]").forEach((slide) => {
      slide.removeAttribute("data-html-deck-editor-current");
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
      presentation.currentSlide = computeCurrentSlide(Array.from(stage.querySelectorAll(".slide")), stage);
    }
    presentation.slides = Array.from(stage.querySelectorAll(".slide"));
    if (!Number.isFinite(presentation.currentSlide)) presentation.currentSlide = computeCurrentSlide(presentation.slides, stage);
    presentation.currentSlide = markEditorCurrentSlide(presentation.slides, presentation.currentSlide);
    syncHostCurrentSlide(stage, presentation.currentSlide);
    presentation.editorInsets = normalizeInsets(presentation.editorInsets);

    const originalShowSlide = typeof presentation.showSlide === "function" ? presentation.showSlide.bind(presentation) : null;
    presentation.showSlide = function showSlide(index) {
      this.slides = Array.from(stage.querySelectorAll(".slide"));
      const requestedSlide = normalizeSlideIndex(index, this.slides);
      if (originalShowSlide) {
        originalShowSlide(requestedSlide);
        this.slides = Array.from(stage.querySelectorAll(".slide"));
        const hostIndex = computeHostCurrentSlide(this.slides, stage);
        this.currentSlide = markEditorCurrentSlide(this.slides, hostIndex >= 0 ? hostIndex : requestedSlide);
      } else {
        this.currentSlide = markEditorCurrentSlide(this.slides, requestedSlide);
        this.slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === this.currentSlide);
          slide.classList.toggle("visible", i === this.currentSlide);
          slide.toggleAttribute("data-deck-active", i === this.currentSlide);
        });
        if (stage.getAttribute("data-html-deck-editor-navigation") === "horizontal") {
          stage.style.transform = \`translateX(\${-this.currentSlide * 100}vw)\`;
          stage.style.setProperty("--html-deck-editor-current-slide", String(this.currentSlide));
        }
      }
      syncHostCurrentSlide(stage, this.currentSlide);
      if (typeof window.__playSlide === "function") {
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
      if (isDeckStageElement(stage)) {
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
          addText: document.getElementById("addTextBtn"),
          addImage: document.getElementById("addImageBtn"),
          addShape: document.getElementById("addShapeBtn"),
          shapeMenu: document.getElementById("shapeMenu"),
          save: document.getElementById("saveBtn"),
          exit: document.getElementById("exitEditBtn"),
          selectionName: document.getElementById("selectionName"),
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

      withEditVisibleElements(callback) {
        const selector = [
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
        return Boolean(ancestor && this.stage.contains(ancestor) && ancestor.closest(".slide") === element.closest(".slide"));
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
          if (candidate.closest(".slide") !== active) return;
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
          if (child === element || child.closest(".slide") !== element.closest(".slide")) return false;
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
        [this.controls.fontFamily, this.controls.fontFamilyCustom, this.controls.fontSize, this.controls.fontWeight, this.controls.fontStyle, this.controls.colorButton, this.controls.colorEyedropper, this.controls.bg, this.controls.bgEyedropper, this.controls.opacity].filter(Boolean).forEach((control) => {
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

      bindElement(element) {
        if (element.dataset.editorBound) return;
        element.dataset.editorBound = "true";
        element.addEventListener("pointerdown", (event) => {
          if (!this.isActive) return;
          const target = this.getEditableTarget(event.target);
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
          this.select(target);
          if (this.isTextElement(target)) {
            this.focusTextLayer(target);
          }
        });
        element.addEventListener("input", () => {
          if (!this.isActive) return;
          this.save(false);
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
          this.save(false, true);
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
        if (navigationKeys.includes(key) || key.length === 1 || event.metaKey || event.ctrlKey || event.altKey) {
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
        this.presentation.slides = Array.from(this.stage.querySelectorAll(".slide"));
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
        const selector = [
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
        slide.querySelectorAll(selector).forEach((node) => {
          node.style.setProperty("--html-deck-editor-edit-opacity", "1");
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
          this.hideGuides();
          this.save(false);
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
          this.select(directTarget);
          return;
        }
        const nearbyTarget = this.pickNearbyEditableTarget(event);
        if (nearbyTarget) {
          event.preventDefault();
          event.stopPropagation();
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
        return element.closest(".slide") ? element : null;
      }

      preferExplicitEditableAncestor(element) {
        if (!element || element.classList.contains("editor-layer")) return element;
        if (element.dataset.editorAuto !== "true") return element;
        const textParent = this.preferredTextContainerAncestor(element);
        if (textParent) return textParent;
        const explicitParent = element.parentElement?.closest("[data-editable], [data-editable-media], [data-editable-box], .editor-layer");
        if (explicitParent && this.stage.contains(explicitParent) && explicitParent.closest(".slide") === element.closest(".slide")) {
          return explicitParent;
        }
        const mediaParent = element.parentElement?.closest("[data-editor-auto='true'][data-editor-kind='media']");
        if (
          mediaParent &&
          mediaParent !== element &&
          this.stage.contains(mediaParent) &&
          mediaParent.closest(".slide") === element.closest(".slide") &&
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
          parent.closest(".slide") === element.closest(".slide") &&
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
        this.controls.image.disabled = false;
        this.controls.imagePick.disabled = false;
        this.controls.imagePick.textContent = canUseImage ? "替换图片" : "选择图片";
        this.controls.imageName.textContent = canUseImage ? "将替换选中图片" : "未选择图片";

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
            this.save(false, true);
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
        this.save(false, true);
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
          if (value && this.applyInlineSelectionStyle(element, "font-family", value, { live })) return;
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
            if (this.applyInlineSelectionStyle(element, "font-size", \`\${size}px\`, { live })) {
              if (!live) this.controls.fontSize.value = String(size);
              return;
            }
            element.style.fontSize = \`\${size}px\`;
            if (recordHistory) this.controls.fontSize.value = String(size);
          }
        }
        if (name === "color") {
          const value = this.controls.colorButton.dataset.value || "";
          if (this.isTextElement(element) && value && this.applyInlineSelectionStyle(element, "color", value, { live })) return;
          this.setEditableTextColor(element, value);
          this.updateTextColorState(value);
        }
        if (name === "bg") {
          const value = this.controls.bg.dataset.value || "";
          if (this.isTextElement(element) && this.applyInlineSelectionStyle(element, "background-color", value, { live })) {
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
            if (this.isTextElement(element) && this.applyInlineSelectionStyle(element, "opacity", String(opacity / 100), { live })) {
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
          this.save(false, recordHistory);
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
        this.save(false, recordHistory);
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
        } else {
          element.innerText = value;
        }
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
          this.storeStageBox(element, safe);
          this.rememberMotionStableBox(element, safe);
          return;
        }
        const slide = element.closest(".slide");
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
        if (!this.selected || !this.isActive || !this.selected.closest(".slide")) {
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
        if (this.isActive && this.selected && slide && this.selected.closest(".slide") !== slide) {
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
          if (candidate === element || candidate.closest(".slide") !== active) return;
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
        this.save(false, true);
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
        this.save();
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
        this.save();
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
        this.save();
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
        this.save();
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
        const slide = element?.closest(".slide");
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
          this.save();
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
        const slide = element?.closest(".slide");
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
        this.save();
      }

      canDeleteElement(element) {
        return Boolean(
          element &&
          element.isConnected &&
          this.stage.contains(element) &&
          element.closest(".slide") &&
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
          message: "删除后会从当前页面移除这个选中元素，并写入自动草稿。后续删除不再弹窗；你仍然可以立刻用撤回恢复。",
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
        element.remove();
        this.clearSelection();
        this.save();
      }

      cleanEditorArtifacts(root) {
        root.querySelectorAll("[data-html-deck-editor-ui], #editorFrame, #editorToast, #editorGuideV, #editorGuideH, #editorShell").forEach((node) => node.remove());
        root.querySelectorAll(".editor-selected").forEach((node) => node.classList.remove("editor-selected"));
        root.querySelectorAll(".editor-motion-parent-stable").forEach((node) => node.classList.remove("editor-motion-parent-stable"));
        root.querySelectorAll(".editor-motion-preview, .editor-motion-running").forEach((node) => {
          node.classList.remove("editor-motion-preview", "editor-motion-running");
          if (!node.dataset.editAnim) this.editorMotionClasses().forEach((className) => node.classList.remove(className));
        });
        root.querySelectorAll("[contenteditable]").forEach((node) => node.removeAttribute("contenteditable"));
        root.querySelectorAll("[data-editor-bound]").forEach((node) => delete node.dataset.editorBound);
        root.querySelectorAll("[data-editor-auto], [data-editor-kind], [data-editor-small]").forEach((node) => {
          delete node.dataset.editorAuto;
          delete node.dataset.editorKind;
          delete node.dataset.editorSmall;
        });
        root.querySelectorAll("[data-html-deck-editor-current]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-current");
        });
        root.querySelectorAll("[data-html-deck-editor-stage='preserve']").forEach((node) => {
          node.style.removeProperty("--html-deck-editor-stage-x");
          node.style.removeProperty("--html-deck-editor-stage-y");
          node.style.removeProperty("--html-deck-editor-stage-scale");
          node.style.removeProperty("--html-deck-editor-current-slide");
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
        return { stage: stageClone.innerHTML, items };
      }

      save(showToast = true, recordHistory = true) {
        const data = this.serialize();
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        if (recordHistory) this.pushHistory(data);
        if (showToast) this.toastMessage("已自动保存，可点“保存”写入 HTML");
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

      undo() {
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
        this.controls.undo.disabled = this.historyIndex <= 0;
        this.controls.redo.disabled = this.historyIndex >= this.undoStack.length - 1;
      }

      restoreSnapshot(data) {
        this.stage.innerHTML = data.stage;
        this.cleanEditorArtifacts(this.stage);
        this.attachFrame();
        this.selected = null;
        this.presentation.slides = Array.from(this.stage.querySelectorAll(".slide"));
        this.presentation.injectChrome?.();
        this.hideDeckResetControl();
        this.prepareEditableElements();
        this.prepareEditableIds();
        this.bindEditableEvents();
        const page = Number.parseInt(window.location.hash.replace("#", ""), 10);
        this.presentation.showSlide(Number.isFinite(page) ? page - 1 : this.presentation.currentSlide);
        this.renderSlideRail();
        this.updateInspector();
      }

      cleanCloneForExport(clone) {
        clone.querySelectorAll("[data-generated-chrome], [data-html-deck-editor-ui]").forEach((node) => node.remove());
        clone.querySelectorAll(".editor-selected").forEach((node) => node.classList.remove("editor-selected"));
        clone.querySelectorAll(".editor-motion-parent-stable").forEach((node) => node.classList.remove("editor-motion-parent-stable"));
        clone.querySelectorAll("[contenteditable]").forEach((node) => node.removeAttribute("contenteditable"));
        clone.querySelectorAll("[data-editor-bound], [data-edit-id], [data-inline-image], [data-original-motion-classes]").forEach((node) => {
          delete node.dataset.editorBound;
          delete node.dataset.editId;
          delete node.dataset.inlineImage;
          delete node.dataset.originalMotionClasses;
        });
        clone.querySelectorAll("[data-editor-auto], [data-editor-kind], [data-editor-small]").forEach((node) => {
          delete node.dataset.editorAuto;
          delete node.dataset.editorKind;
          delete node.dataset.editorSmall;
        });
        clone.querySelectorAll("[data-html-deck-editor-current]").forEach((node) => {
          node.removeAttribute("data-html-deck-editor-current");
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
          node.style.removeProperty("--html-deck-editor-stage-x");
          node.style.removeProperty("--html-deck-editor-stage-y");
          node.style.removeProperty("--html-deck-editor-stage-scale");
          node.style.removeProperty("--html-deck-editor-current-slide");
        });
        clone.querySelectorAll("[style]").forEach((node) => {
          node.style.removeProperty("--html-deck-editor-slide-x");
          node.style.removeProperty("--html-deck-editor-slide-y");
          node.style.removeProperty("--html-deck-editor-slide-scale");
          node.style.removeProperty("--html-deck-editor-stage-x");
          node.style.removeProperty("--html-deck-editor-stage-y");
          node.style.removeProperty("--html-deck-editor-stage-scale");
          node.style.removeProperty("--html-deck-editor-current-slide");
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
        if (body) body.classList.remove("editing", "editor-on", "dragging-file");
      }

      buildExportHtml() {
        const clone = document.documentElement.cloneNode(true);
        this.cleanCloneForExport(clone);
        return "<!doctype html>\\n" + clone.outerHTML;
      }

      async exportHtml() {
        this.save(false, false);
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
        const blob = new Blob([html], { type: "text/html;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "index.html";
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
`,Ip=`(function () {
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
`,qp=`/* Frontend Slides Visual Deck Editor runtime. Source baseline: 1ba9bf0. */
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
      transform: translate(var(--html-deck-editor-stage-x, 0px), var(--html-deck-editor-stage-y, 0px)) scale(var(--html-deck-editor-stage-scale, 1)) translateX(calc(var(--html-deck-editor-current-slide, 0) * -100vw)) !important;
      transform-origin: top left;
    }

    body.editing [data-html-deck-editor-stage="preserve"] > .slide:not([data-html-deck-editor-current]) {
      visibility: hidden;
      pointer-events: none;
    }

    body.editing [data-html-deck-editor-stage="preserve"] > .slide[data-html-deck-editor-current] {
      visibility: visible !important;
      pointer-events: auto;
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

    .editor-shell[data-html-deck-editor-ui] .shape-picker-wrap {
      position: relative;
      flex: 0 0 auto;
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

    .editor-shell[data-html-deck-editor-ui] .reset-help-button {
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
    .editor-shell[data-html-deck-editor-ui] .reset-help-button:focus-visible {
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

    .slide.visible .edit-moved.reveal:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.reveal-left:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.reveal-scale:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.editor-anim-rise:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.editor-anim-drop:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.editor-anim-left:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.editor-anim-right:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.editor-anim-scale:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.editor-anim-zoom:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.editor-anim-pop:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.editor-anim-rotate:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.editor-anim-blur:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.editor-anim-flip:not(.editor-motion-preview):not(.editor-motion-running),
    .slide.visible .edit-moved.editor-anim-fade:not(.editor-motion-preview):not(.editor-motion-running) {
      opacity: 1;
      filter: none !important;
      transform: translate(var(--edit-x, 0px), var(--edit-y, 0px)) scale(var(--edit-scale-x, var(--edit-scale, 1)), var(--edit-scale-y, var(--edit-scale, 1))) var(--edit-base-transform, matrix(1, 0, 0, 1, 0, 0)) !important;
    }

    .slide.visible .editor-motion-parent-stable,
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

    .slide.visible .editor-anim-fade,
    .slide.visible .editor-anim-rise,
    .slide.visible .editor-anim-drop,
    .slide.visible .editor-anim-left,
    .slide.visible .editor-anim-right,
    .slide.visible .editor-anim-scale,
    .slide.visible .editor-anim-zoom,
    .slide.visible .editor-anim-pop,
    .slide.visible .editor-anim-rotate,
    .slide.visible .editor-anim-blur,
    .slide.visible .editor-anim-flip {
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

    body.editing .reveal,
    body.editing .reveal-left,
    body.editing .reveal-scale {
      opacity: 1 !important;
      filter: none !important;
      animation: none !important;
      transition: none !important;
    }

    body.editing .slide[data-html-deck-editor-current] [data-anim],
    body.editing .slide[data-html-deck-editor-current] .row-fill,
    body.editing .slide[data-html-deck-editor-current] .tl-node,
    body.editing .slide[data-html-deck-editor-current] .stack-block,
    body.editing .slide[data-html-deck-editor-current] .bar-tower,
    body.editing .slide[data-html-deck-editor-current] .sub-card,
    body.editing .slide[data-html-deck-editor-current] .col,
    body.editing .slide[data-html-deck-editor-current] .vrule,
    body.editing .slide[data-html-deck-editor-current] .kpi-cell,
    body.editing .slide[data-html-deck-editor-current] .card-fill,
    body.editing .slide[data-html-deck-editor-current] .card-accent,
    body.editing .slide[data-html-deck-editor-current] .card-ink {
      opacity: var(--html-deck-editor-edit-opacity, 1) !important;
      filter: none !important;
      transform: none !important;
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
`,Fp='.editor-shell[data-html-deck-editor-ui] .picker_wrapper.no_alpha .picker_alpha{display:none}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.no_cancel .picker_cancel{display:none}.editor-shell[data-html-deck-editor-ui] .layout_default.picker_wrapper{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:stretch;font-size:10px;width:25em;padding:.5em}.editor-shell[data-html-deck-editor-ui] .layout_default.picker_wrapper input,.editor-shell[data-html-deck-editor-ui] .layout_default.picker_wrapper button{font-size:1rem}.editor-shell[data-html-deck-editor-ui] .layout_default.picker_wrapper>*{margin:.5em}.editor-shell[data-html-deck-editor-ui] .layout_default.picker_wrapper::before{content:"";display:block;width:100%;height:0;order:1}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_slider,.editor-shell[data-html-deck-editor-ui] .layout_default .picker_selector{padding:1em}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_hue{width:100%}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_sl{flex:1 1 auto}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_sl::before{content:"";display:block;padding-bottom:100%}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_editor{order:1;width:6.5rem}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_editor input{width:100%;height:100%}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_sample{order:1;flex:1 1 auto}.editor-shell[data-html-deck-editor-ui] .layout_default .picker_done,.editor-shell[data-html-deck-editor-ui] .layout_default .picker_cancel{order:1}.editor-shell[data-html-deck-editor-ui] .picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.editor-shell[data-html-deck-editor-ui] .picker_wrapper:focus{outline:none}.editor-shell[data-html-deck-editor-ui] .picker_wrapper button,.editor-shell[data-html-deck-editor-ui] .picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.editor-shell[data-html-deck-editor-ui] .picker_wrapper button:focus,.editor-shell[data-html-deck-editor-ui] .picker_wrapper button:active,.editor-shell[data-html-deck-editor-ui] .picker_wrapper input:focus,.editor-shell[data-html-deck-editor-ui] .picker_wrapper input:active{box-shadow:0 0 2px 1px #1e90ff}.editor-shell[data-html-deck-editor-ui] .picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:#f5f5f5;background-image:linear-gradient(0deg, gainsboro, transparent)}.editor-shell[data-html-deck-editor-ui] .picker_wrapper button:active{background-image:linear-gradient(0deg, transparent, gainsboro)}.editor-shell[data-html-deck-editor-ui] .picker_wrapper button:hover{background-color:#fff}.editor-shell[data-html-deck-editor-ui] .picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid #fff;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.editor-shell[data-html-deck-editor-ui] .picker_slider .picker_selector{border-radius:2px}.editor-shell[data-html-deck-editor-ui] .picker_hue{position:relative;background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.editor-shell[data-html-deck-editor-ui] .picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:linear-gradient(180deg, white, rgba(255, 255, 255, 0) 50%),linear-gradient(0deg, black, rgba(0, 0, 0, 0) 50%),linear-gradient(90deg, #808080, rgba(128, 128, 128, 0))}.editor-shell[data-html-deck-editor-ui] .picker_alpha,.editor-shell[data-html-deck-editor-ui] .picker_sample{position:relative;background:linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0/2em 2em,linear-gradient(45deg, lightgrey 25%, white 25%, white 75%, lightgrey 75%) 1em 1em/2em 2em;box-shadow:0 0 0 1px silver}.editor-shell[data-html-deck-editor-ui] .picker_alpha .picker_selector,.editor-shell[data-html-deck-editor-ui] .picker_sample .picker_selector{background:none}.editor-shell[data-html-deck-editor-ui] .picker_editor input{font-family:monospace;padding:.2em .4em}.editor-shell[data-html-deck-editor-ui] .picker_sample::before{content:"";position:absolute;display:block;width:100%;height:100%;background:currentColor}.editor-shell[data-html-deck-editor-ui] .picker_arrow{position:absolute;z-index:-1}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup,.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::before,.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,.4)}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::before,.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::after{content:"";display:block;position:absolute;top:0;left:0;z-index:-99}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.editor-shell[data-html-deck-editor-ui] .picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.editor-shell[data-html-deck-editor-ui] .popup.popup_top{bottom:100%;left:0}.editor-shell[data-html-deck-editor-ui] .popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.editor-shell[data-html-deck-editor-ui] .popup.popup_bottom{top:100%;left:0}.editor-shell[data-html-deck-editor-ui] .popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.editor-shell[data-html-deck-editor-ui] .popup.popup_left{top:0;right:100%}.editor-shell[data-html-deck-editor-ui] .popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.editor-shell[data-html-deck-editor-ui] .popup.popup_right{top:0;left:100%}.editor-shell[data-html-deck-editor-ui] .popup.popup_right .picker_arrow{top:0;left:0}',Gp=`# ISC License (ISC)

Copyright 2017-2018 Andreas Borgen, Adam Brooks

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
`,Yp=`/*!
 * vanilla-picker v2.12.3
 * https://vanilla-picker.js.org
 *
 * Copyright 2017-2024 Andreas Borgen (https://github.com/Sphinxxxx), Adam Brooks (https://github.com/dissimulate)
 * Released under the ISC license.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Picker=e()}(this,function(){"use strict";function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var t=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t};function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){r=!0,s=t}finally{try{!i&&a.return&&a.return()}finally{if(r)throw s}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};String.prototype.startsWith=String.prototype.startsWith||function(t){return 0===this.indexOf(t)},String.prototype.padStart=String.prototype.padStart||function(t,e){for(var n=this;n.length<t;)n=e+n;return n};var e={cb:"0f8ff",tqw:"aebd7",q:"-ffff",qmrn:"7fffd4",zr:"0ffff",bg:"5f5dc",bsq:"e4c4",bck:"---",nch:"ebcd",b:"--ff",bvt:"8a2be2",brwn:"a52a2a",brw:"deb887",ctb:"5f9ea0",hrt:"7fff-",chcT:"d2691e",cr:"7f50",rnw:"6495ed",crns:"8dc",crms:"dc143c",cn:"-ffff",Db:"--8b",Dcn:"-8b8b",Dgnr:"b8860b",Dgr:"a9a9a9",Dgrn:"-64-",Dkhk:"bdb76b",Dmgn:"8b-8b",Dvgr:"556b2f",Drng:"8c-",Drch:"9932cc",Dr:"8b--",Dsmn:"e9967a",Dsgr:"8fbc8f",DsTb:"483d8b",DsTg:"2f4f4f",Dtrq:"-ced1",Dvt:"94-d3",ppnk:"1493",pskb:"-bfff",mgr:"696969",grb:"1e90ff",rbrc:"b22222",rwht:"af0",stg:"228b22",chs:"-ff",gnsb:"dcdcdc",st:"8f8ff",g:"d7-",gnr:"daa520",gr:"808080",grn:"-8-0",grnw:"adff2f",hnw:"0fff0",htpn:"69b4",nnr:"cd5c5c",ng:"4b-82",vr:"0",khk:"0e68c",vnr:"e6e6fa",nrb:"0f5",wngr:"7cfc-",mnch:"acd",Lb:"add8e6",Lcr:"08080",Lcn:"e0ffff",Lgnr:"afad2",Lgr:"d3d3d3",Lgrn:"90ee90",Lpnk:"b6c1",Lsmn:"a07a",Lsgr:"20b2aa",Lskb:"87cefa",LsTg:"778899",Lstb:"b0c4de",Lw:"e0",m:"-ff-",mgrn:"32cd32",nn:"af0e6",mgnt:"-ff",mrn:"8--0",mqm:"66cdaa",mmb:"--cd",mmrc:"ba55d3",mmpr:"9370db",msg:"3cb371",mmsT:"7b68ee","":"-fa9a",mtr:"48d1cc",mmvt:"c71585",mnLb:"191970",ntc:"5fffa",mstr:"e4e1",mccs:"e4b5",vjw:"dead",nv:"--80",c:"df5e6",v:"808-0",vrb:"6b8e23",rng:"a5-",rngr:"45-",rch:"da70d6",pgnr:"eee8aa",pgrn:"98fb98",ptrq:"afeeee",pvtr:"db7093",ppwh:"efd5",pchp:"dab9",pr:"cd853f",pnk:"c0cb",pm:"dda0dd",pwrb:"b0e0e6",prp:"8-080",cc:"663399",r:"--",sbr:"bc8f8f",rb:"4169e1",sbrw:"8b4513",smn:"a8072",nbr:"4a460",sgrn:"2e8b57",ssh:"5ee",snn:"a0522d",svr:"c0c0c0",skb:"87ceeb",sTb:"6a5acd",sTgr:"708090",snw:"afa",n:"-ff7f",stb:"4682b4",tn:"d2b48c",t:"-8080",thst:"d8bfd8",tmT:"6347",trqs:"40e0d0",vt:"ee82ee",whT:"5deb3",wht:"",hts:"5f5f5",w:"-",wgrn:"9acd32"};function r(t,e){e=1<arguments.length&&void 0!==e?e:1;return(0<e?t.toFixed(e).replace(/0+$/,"").replace(/\\.$/,""):t.toString())||"0"}var s=(t(f,[{key:"printRGB",value:function(t){var e=(t?this.rgba:this.rgba.slice(0,3)).map(function(t,e){return r(t,3===e?3:0)});return t?"rgba("+e+")":"rgb("+e+")"}},{key:"printHSL",value:function(t){var n=[360,100,100,1],i=["","%","%",""],e=(t?this.hsla:this.hsla.slice(0,3)).map(function(t,e){return r(t*n[e],3===e?3:1)+i[e]});return t?"hsla("+e+")":"hsl("+e+")"}},{key:"printHex",value:function(t){var e=this.hex;return t?e:e.substring(0,7)}},{key:"rgba",get:function(){if(this._rgba)return this._rgba;if(!this._hsla)throw new Error("No color is set");return this._rgba=f.hslToRgb(this._hsla)},set:function(t){3===t.length&&(t[3]=1),this._rgba=t,this._hsla=null}},{key:"rgbString",get:function(){return this.printRGB()}},{key:"rgbaString",get:function(){return this.printRGB(!0)}},{key:"hsla",get:function(){if(this._hsla)return this._hsla;if(!this._rgba)throw new Error("No color is set");return this._hsla=f.rgbToHsl(this._rgba)},set:function(t){3===t.length&&(t[3]=1),this._hsla=t,this._rgba=null}},{key:"hslString",get:function(){return this.printHSL()}},{key:"hslaString",get:function(){return this.printHSL(!0)}},{key:"hex",get:function(){return"#"+this.rgba.map(function(t,e){return(e<3?t:Math.round(255*t)).toString(16)}).map(function(t){return t.padStart(2,"0")}).join("")},set:function(t){this.rgba=f.hexToRgb(t)}}],[{key:"hexToRgb",value:function(t){var e=(t.startsWith("#")?t.slice(1):t).replace(/^(\\w{3})$/,"$1F").replace(/^(\\w)(\\w)(\\w)(\\w)$/,"$1$1$2$2$3$3$4$4").replace(/^(\\w{6})$/,"$1FF");if(!e.match(/^([0-9a-fA-F]{8})$/))throw new Error("Unknown hex color; "+t);e=e.match(/^(\\w\\w)(\\w\\w)(\\w\\w)(\\w\\w)$/).slice(1).map(function(t){return parseInt(t,16)});return e[3]=e[3]/255,e}},{key:"nameToRgb",value:function(t){t=t.toLowerCase().replace("at","T").replace(/[aeiouyldf]/g,"").replace("ght","L").replace("rk","D").slice(-5,4),t=e[t];return void 0===t?t:f.hexToRgb(t.replace(/\\-/g,"00").padStart(6,"f"))}},{key:"rgbToHsl",value:function(t){var e=d(t,4),n=e[0],i=e[1],r=e[2],s=e[3];n/=255,i/=255,r/=255;var o=Math.max(n,i,r),a=Math.min(n,i,r),c=void 0,t=void 0,e=(o+a)/2;if(o===a)c=t=0;else{var l=o-a,t=.5<e?l/(2-o-a):l/(o+a);switch(o){case n:c=(i-r)/l+(i<r?6:0);break;case i:c=(r-n)/l+2;break;case r:c=(n-i)/l+4}c/=6}return[c,t,e,s]}},{key:"hslToRgb",value:function(t){var e=d(t,4),n=e[0],i=e[1],r=e[2],s=e[3],o=void 0,a=void 0,t=void 0;0===i?o=a=t=r:(o=(e=function(t,e,n){return n<0&&(n+=1),1<n&&--n,n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t})(i=2*r-(r=r<.5?r*(1+i):r+i-r*i),r,n+1/3),a=e(i,r,n),t=e(i,r,n-1/3));t=[255*o,255*a,255*t].map(Math.round);return t[3]=s,t}}]),f);function f(t,e,n,i){u(this,f);var r,s,o,a,c,l,h=this;void 0===t||(Array.isArray(t)?this.rgba=t:void 0===n?(r=t&&""+t)&&((s=r.toLowerCase()).startsWith("hsl")?(o=s.match(/([\\-\\d\\.e]+)/g).map(Number),c=(a=d(o,4))[0],l=a[1],o=a[2],a=a[3],h.hsla=[c/=360,l/=100,o/=100,a=void 0===a?1:a]):s.startsWith("rgb")?(c=s.match(/([\\-\\d\\.e]+)/g).map(Number),o=(l=d(c,4))[0],a=l[1],c=l[2],l=l[3],h.rgba=[o,a,c,l=void 0===l?1:l]):s.startsWith("#")?h.rgba=f.hexToRgb(s):h.rgba=f.nameToRgb(s)||f.hexToRgb(s)):this.rgba=[t,e,n,void 0===i?1:i])}var n=(t(o,[{key:"add",value:function(t,e,n){t.addEventListener(e,n,!1),this._events.push({target:t,type:e,handler:n})}},{key:"remove",value:function(n,i,r){this._events=this._events.filter(function(t){var e=!0;return n&&n!==t.target&&(e=!1),i&&i!==t.type&&(e=!1),(e=r&&r!==t.handler?!1:e)&&o._doRemove(t.target,t.type,t.handler),!e})}},{key:"destroy",value:function(){this._events.forEach(function(t){return o._doRemove(t.target,t.type,t.handler)}),this._events=[]}}],[{key:"_doRemove",value:function(t,e,n){t.removeEventListener(e,n,!1)}}]),o);function o(){u(this,o),this._events=[]}function a(t,s,o){var a=!1;function c(t,e,n){return Math.max(e,Math.min(t,n))}function n(t,e,n){var i,r;(a=n?!0:a)&&(t.preventDefault(),i=(r=s.getBoundingClientRect()).width,n=r.height,t=e.clientX,e=e.clientY,t=c(t-r.left,0,i),r=c(e-r.top,0,n),o(t/i,r/n))}function e(t,e){1===(void 0===t.buttons?t.which:t.buttons)?n(t,t,e):a=!1}function i(t,e){1===t.touches.length?n(t,t.touches[0],e):a=!1}t.add(s,"mousedown",function(t){e(t,!0)}),t.add(s,"touchstart",function(t){i(t,!0)}),t.add(window,"mousemove",e),t.add(s,"touchmove",i),t.add(window,"mouseup",function(t){a=!1}),t.add(s,"touchend",function(t){a=!1}),t.add(s,"touchcancel",function(t){a=!1})}var c="keydown",l="mousedown",h="focusin";function p(t,e){return(e||document).querySelector(t)}function g(t){t.preventDefault(),t.stopPropagation()}function v(t,e,n,i,r){t.add(e,c,function(t){0<=n.indexOf(t.key)&&(r&&g(t),i(t))})}function b(t){u(this,b),this.settings={popup:"right",layout:"default",alpha:!0,editor:!0,editorFormat:"hex",cancelButton:!1,defaultColor:"#0cf"},this._events=new n,this.onChange=null,this.onDone=null,this.onOpen=null,this.onClose=null,this.setOptions(t)}return t(b,[{key:"setOptions",value:function(t){var e,n,i,r=this;t&&(e=this.settings,t instanceof HTMLElement?e.parent=t:(e.parent&&t.parent&&e.parent!==t.parent&&(this._events.remove(e.parent),this._popupInited=!1),function(t,e,n){for(var i in t)n&&0<=n.indexOf(i)||(e[i]=t[i])}(t,e),t.onChange&&(this.onChange=t.onChange),t.onDone&&(this.onDone=t.onDone),t.onOpen&&(this.onOpen=t.onOpen),t.onClose&&(this.onClose=t.onClose),(i=t.color||t.colour)&&this._setColor(i)),(n=e.parent)&&e.popup&&!this._popupInited?(this._events.add(n,"click",i=function(t){return r.openHandler(t)}),v(this._events,n,[" ","Spacebar","Enter"],i),this._popupInited=!0):t.parent&&!e.popup&&this.show())}},{key:"openHandler",value:function(t){var e;this.show()&&(t&&t.preventDefault(),this.settings.parent.style.pointerEvents="none",e=t&&t.type===c?this._domEdit:this.domElement,setTimeout(function(){return e.focus()},100),this.onOpen&&this.onOpen(this.colour))}},{key:"closeHandler",value:function(t){var e,n=t&&t.type,i=!1;t?n===l||n===h?(e=(this.__containedEvent||0)+100,t.timeStamp>e&&(i=!0)):(g(t),i=!0):i=!0,i&&this.hide()&&(this.settings.parent.style.pointerEvents="",n!==l&&this.settings.parent.focus(),this.onClose&&this.onClose(this.colour))}},{key:"movePopup",value:function(t,e){this.closeHandler(),this.setOptions(t),e&&this.openHandler()}},{key:"setColor",value:function(t,e){this._setColor(t,{silent:e})}},{key:"_setColor",value:function(t,e){if(t="string"==typeof t?t.trim():t){e=e||{};var n=void 0;try{n=new s(t)}catch(t){if(e.failSilently)return;throw t}this.settings.alpha||((t=n.hsla)[3]=1,n.hsla=t),this.colour=this.color=n,this._setHSLA(null,null,null,null,e)}}},{key:"setColour",value:function(t,e){this.setColor(t,e)}},{key:"show",value:function(){if(!this.settings.parent)return!1;if(this.domElement){var t=this._toggleDOM(!0);return this._setPosition(),t}var e=this.settings.template||'<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>',n=(t=e,(e=document.createElement("div")).innerHTML=t,e.firstElementChild);return this.domElement=n,this._domH=p(".picker_hue",n),this._domSL=p(".picker_sl",n),this._domA=p(".picker_alpha",n),this._domEdit=p(".picker_editor input",n),this._domSample=p(".picker_sample",n),this._domOkay=p(".picker_done button",n),this._domCancel=p(".picker_cancel button",n),n.classList.add("layout_"+this.settings.layout),this.settings.alpha||n.classList.add("no_alpha"),this.settings.editor||n.classList.add("no_editor"),this.settings.cancelButton||n.classList.add("no_cancel"),this._ifPopup(function(){return n.classList.add("popup")}),this._setPosition(),this.colour?this._updateUI():this._setColor(this.settings.defaultColor),this._bindEvents(),!0}},{key:"hide",value:function(){return this._toggleDOM(!1)}},{key:"destroy",value:function(){this._events.destroy(),this.domElement&&this.settings.parent.removeChild(this.domElement)}},{key:"_bindEvents",value:function(){var n=this,i=this,r=this.domElement,s=this._events;function o(t,e,n){s.add(t,e,n)}o(r,"click",function(t){return t.preventDefault()}),a(s,this._domH,function(t,e){return i._setHSLA(t)}),a(s,this._domSL,function(t,e){return i._setHSLA(null,t,1-e)}),this.settings.alpha&&a(s,this._domA,function(t,e){return i._setHSLA(null,null,null,1-e)});var t=this._domEdit;o(t,"input",function(t){i._setColor(this.value,{fromEditor:!0,failSilently:!0})}),o(t,"focus",function(t){this.selectionStart===this.selectionEnd&&this.select()}),this._ifPopup(function(){function t(t){return n.closeHandler(t)}o(window,l,t),o(window,h,t),v(s,r,["Esc","Escape"],t);function e(t){n.__containedEvent=t.timeStamp}o(r,l,e),o(r,h,e),o(n._domCancel,"click",t)});t=function(t){n._ifPopup(function(){return n.closeHandler(t)}),n.onDone&&n.onDone(n.colour)};o(this._domOkay,"click",t),v(s,r,["Enter"],t)}},{key:"_setPosition",value:function(){var n=this.settings.parent,i=this.domElement;n!==i.parentNode&&n.appendChild(i),this._ifPopup(function(t){"static"===getComputedStyle(n).position&&(n.style.position="relative");var e=!0===t?"popup_right":"popup_"+t;["popup_top","popup_bottom","popup_left","popup_right"].forEach(function(t){t===e?i.classList.add(t):i.classList.remove(t)}),i.classList.add(e)})}},{key:"_setHSLA",value:function(t,e,n,i,r){r=r||{};var s=this.colour,o=s.hsla;[t,e,n,i].forEach(function(t,e){!t&&0!==t||(o[e]=t)}),s.hsla=o,this._updateUI(r),this.onChange&&!r.silent&&this.onChange(s)}},{key:"_updateUI",value:function(t){if(this.domElement){t=t||{};var e=this.colour,n=e.hsla,i="hsl("+360*n[0]+", 100%, 50%)",r=e.hslString,s=e.hslaString,o=this._domH,a=this._domSL,c=this._domA,l=p(".picker_selector",o),o=p(".picker_selector",a),c=p(".picker_selector",c);d(0,l,n[0]),this._domSL.style.backgroundColor=this._domH.style.color=i,d(0,o,n[1]),f(0,o,1-n[2]),a.style.color=r,f(0,c,1-n[3]);n=r,r=n.replace("hsl","hsla").replace(")",", 0)");if(this._domA.style.background="linear-gradient("+[n,r]+")"+", linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0 / 2em 2em,\\n                   linear-gradient(45deg, lightgrey 25%,       white 25%,       white 75%, lightgrey 75%) 1em 1em / 2em 2em",!t.fromEditor){var t=this.settings.editorFormat,h=this.settings.alpha,u=void 0;switch(t){case"rgb":u=e.printRGB(h);break;case"hsl":u=e.printHSL(h);break;default:u=e.printHex(h)}this._domEdit.value=u}this._domSample.style.color=s}function d(t,e,n){e.style.left=100*n+"%"}function f(t,e,n){e.style.top=100*n+"%"}}},{key:"_ifPopup",value:function(t,e){this.settings.parent&&this.settings.popup?t&&t(this.settings.popup):e&&e()}},{key:"_toggleDOM",value:function(t){var e=this.domElement;if(!e)return!1;var n=t?"":"none",t=e.style.display!==n;return t&&(e.style.display=n),t}}]),b});`,$i="0.1.4",Rs={"runtime/deck-stage.js":Up,"runtime/vanilla-picker.js":Yp,"runtime/vanilla-picker.css":Fp,"runtime/vanilla-picker.LICENSE.md":Gp,"runtime/html-deck-editor.js":`${jp}

${Ip}
`,"runtime/html-deck-editor.css":qp},fi="data-html-deck-editor-runtime",Zp=["[data-html-deck-editor-ui]","#editorShell","#shapeMenu","#editorFrame","#editorToast","#editorGuideV","#editorGuideH"],Xp=["#editToggle","#editExport",".edit-toggle",".edit-export",".edit-hotzone","[data-html-deck-editor-ui]"],Vp=[".editor-toolbar",".editor-slides",".editor-panel",".editor-help-modal",".visual-editor",".visual-editor-shell","#visualEditor"];async function Kp(_,j=[],d){d?.({stage:"detect",percent:0,detail:"正在检查是不是 HTML 演示稿。"});const h=nf(_);if(d?.({stage:"detect",percent:100,detail:h.messages[0]||"检测完成。"}),h.status==="unsupported"||!h.indexPath)return{report:h,blob:null,outputName:null,filesAdded:[],filesModified:[],warnings:[...j,...h.warnings]};const w=tf(_.files);if(!w)return{report:h,blob:null,outputName:null,filesAdded:[],filesModified:[],warnings:[...j,"没有找到可转换的 HTML 文件。"]};d?.({stage:"rewrite",percent:0,detail:`正在改写 ${w.path}`});const v=ef(w.data),y=Qp(v,h);d?.({stage:"rewrite",percent:100,detail:"HTML 已加入编辑器入口。"});const u=new $h,m=w.path.includes("/")?w.path.split("/").slice(0,-1).join("/"):"",g=m?`${m}/runtime/`:"runtime/";d?.({stage:"runtime",percent:0,detail:"正在整理原文件和编辑器文件。"});for(const S of _.files)if(S.path===w.path)u.file(S.path,y);else{if(hg(S.path))continue;u.file(S.path,mg(S.data))}d?.({stage:"runtime",percent:55,detail:`已放入 ${_.files.length} 个原文件。`});for(const[S,D]of Object.entries(Rs)){const b=S.replace("runtime/","");u.file(`${g}${b}`,D)}d?.({stage:"runtime",percent:100,detail:`已加入 ${Object.keys(Rs).length} 个编辑器文件。`});const B=await u.generateAsync({type:"blob",compression:"DEFLATE"},S=>{d?.({stage:"zip",percent:S.percent,detail:S.currentFile||"正在生成 ZIP。"})});return d?.({stage:"zip",percent:100,detail:"可编辑 ZIP 已生成。"}),{report:h,blob:B,outputName:`${fg(_.name)}-editable.zip`,filesAdded:Object.keys(Rs).map(S=>`${g}${S.replace("runtime/","")}`),filesModified:[w.path],warnings:[...j,...h.warnings]}}function Qp(_,j){const d=new DOMParser().parseFromString(_,"text/html");return Pp(d),og(d,{upgradeExistingEditor:j.status==="already-editable"}),j.status==="adaptable"&&Jp(d,j),ag(d),lg(d),`<!doctype html>
${d.documentElement.outerHTML}`}function Pp(_){if(!_.querySelector("title")){const j=_.createElement("title");j.textContent="Editable HTML Deck",_.head.appendChild(j)}}function Jp(_,j){if(_.querySelector("deck-stage#deckStage, #deckStage, .deck-stage, [data-html-deck-editor-stage]"))return;const h=ng(_,j);if(h.length<2)return;h.forEach((v,y)=>{v.classList.add("slide"),y===0&&!v.classList.contains("active")&&!v.classList.contains("visible")&&v.classList.add("active","visible"),v.getAttribute("data-title")||v.setAttribute("data-title",ig(v,y))});const w=Wp(h);if(w){$p(w,h);return}tg(_,h)}function Wp(_){const j=_[0]?.parentElement;if(!j||!_.every(y=>y.parentElement===j))return null;const d=["#deck",".deck",".slides","main","[role='main']","[data-deck]","[data-slides]"].join(", ");if(j.matches(d))return j;const h=Array.from(j.children),w=new Set(_);return h.length===_.length&&h.every(y=>w.has(y))?j:null}function $p(_,j){_.setAttribute("data-html-deck-editor-stage","preserve"),eg(_,j)&&_.setAttribute("data-html-deck-editor-navigation","horizontal"),_.id||(_.id="deckStage"),_.getAttribute("aria-label")||_.setAttribute("aria-label","Presentation")}function eg(_,j){if(_.matches("#deck, .deck, [data-deck]"))return!0;const d=Array.from(_.children),h=new Set(j);return d.length===j.length&&d.every(w=>h.has(w))}function tg(_,j){const d=_.createElement("div");d.id="deckStage",d.className="deck-stage",d.setAttribute("data-html-deck-editor-stage","preserve"),d.setAttribute("data-html-deck-editor-navigation","horizontal"),d.setAttribute("aria-label","Presentation");const h=j[0];h.parentNode?.insertBefore(d,h),j.forEach((w,v)=>{v===0?w.classList.add("active","visible"):w.classList.remove("active","visible"),d.appendChild(w)})}function ng(_,j){if(j.sourceKind==="reveal")return Array.from(_.querySelectorAll(".reveal .slides section"));if(j.sourceKind==="section-slide")return Array.from(_.querySelectorAll("section.slide, .slide"));const d=Array.from(_.body.querySelectorAll(["#deck > section",".deck > section",".slides > section","[data-deck] > section","[data-slides] > section"].join(", "))).filter(Qh);return d.length>=2?d:Array.from(_.body.querySelectorAll("main > section, body > section")).filter(Qh)}function Qh(_){return(_.textContent||"").trim().length>10}function ig(_,j){return _.querySelector("h1, h2, h3, [data-title]")?.textContent?.trim()||`Slide ${j+1}`}function ag(_){rg(_);const j=_.createElement("link");j.rel="stylesheet",j.href="runtime/vanilla-picker.css",j.setAttribute(fi,$i),_.head.appendChild(j);const d=_.createElement("link");d.rel="stylesheet",d.href="runtime/html-deck-editor.css",d.setAttribute(fi,$i),_.head.appendChild(d);const h=_.createElement("script");h.src="runtime/deck-stage.js",h.setAttribute(fi,$i),_.body.appendChild(h);const w=_.createElement("script");w.src="runtime/vanilla-picker.js",w.setAttribute(fi,$i),_.body.appendChild(w);const v=_.createElement("script");v.src="runtime/html-deck-editor.js",v.setAttribute(fi,$i),_.body.appendChild(v)}function lg(_){const j=_.createElement("script");j.setAttribute(fi,$i),j.textContent=`
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
  `,_.body.appendChild(j)}function rg(_){_.querySelectorAll([`[${fi}]`,'script[src*="editor-runtime"]','link[href*="editor-runtime"]','script[src*="html-deck-editor"]','link[href*="html-deck-editor"]','script[src*="runtime/vanilla-picker"]','link[href*="runtime/vanilla-picker"]'].join(", ")).forEach(j=>{j.parentNode?.removeChild(j)})}function og(_,j){_.querySelectorAll(Zp.join(", ")).forEach(d=>{d instanceof Element&&dg(d)&&d.parentNode?.removeChild(d)}),_.querySelectorAll(Xp.join(", ")).forEach(d=>{d instanceof HTMLElement&&!cr(d)&&cg(d)&&d.parentNode?.removeChild(d)}),_.querySelectorAll(Vp.join(", ")).forEach(d=>{d instanceof HTMLElement&&!cr(d)&&(j.upgradeExistingEditor||ug(d))&&d.parentNode?.removeChild(d)}),_.querySelectorAll("button, a").forEach(d=>{d instanceof HTMLElement&&!cr(d)&&af(d)&&d.parentNode?.removeChild(d)}),_.querySelectorAll("script:not([src])").forEach(d=>{const h=sg(d.textContent||"");h===null?d.parentNode?.removeChild(d):h!==d.textContent&&(d.textContent=h)}),_.body.classList.remove("editing","editor-on","dragging-file")}function sg(_){const j=/class\s+SlidePresentation\b|new\s+SlidePresentation\s*\(/.test(_),d=/class\s+InlineDeckEditor\b|new\s+InlineDeckEditor\s*\(/.test(_);return j&&d?_.replace(/\bnew\s+InlineDeckEditor\s*\(\s*\)\s*;?/g,"/* html-deck-editor: legacy InlineDeckEditor disabled */"):d||/FrontendSlidesEditor\.mount\s*\(|HtmlDeckEditor\.mount\s*\(/.test(_)||(/getElementById\(["'](?:editToggle|editExport|editorShell)["']\)/.test(_)||/querySelector\(["']\.(?:edit-hotzone|edit-toggle|edit-export|editor-shell)["']\)/.test(_))&&!j?null:_}function cr(_){return!!_.closest("deck-stage, #deckStage, .deck-stage, .slide")}function dg(_){return js(_)&&!cr(_)}function js(_){return _.hasAttribute("data-html-deck-editor-ui")?!0:["editorShell","shapeMenu","editorFrame","editorToast","editorGuideV","editorGuideH","editToggle","editExport"].includes(_.id)}function cg(_){return js(_)?!0:_.classList.contains("edit-hotzone")?!_.textContent?.trim()&&_.children.length===0:af(_)}function ug(_){return js(_)||_.querySelector("[data-html-deck-editor-ui], #editToggle, #editExport, #editorFrame, #editorToast, #shapeMenu")?!0:!!(_.querySelector("#saveBtn, #exitEditBtn, #slideRail, #selectionName, #textInput, #imageDropZone")&&/editor|visual-editor/i.test(`${_.id} ${_.className}`))}function af(_){const j=(_.textContent||"").replace(/\s+/g," ").trim().toUpperCase(),d=[_.id,_.className,_.getAttribute("title"),_.getAttribute("aria-label")].join(" "),h=/edit|editor|编辑|save[-_\s]?html|html[-_\s]?save/i.test(d);return(j==="DONE"||j==="EDIT"||j==="SAVE HTML"||j==="保存 HTML")&&h||/edit mode|编辑模式|toggle edit mode/i.test(d)||/save[-_\s]?html|html[-_\s]?save/i.test(d)}function hg(_){const j=_.replace(/\\/g,"/").toLowerCase();return/(^|\/)editor-runtime\.(css|js)(\.map)?$/.test(j)||/(^|\/)visual-editor\/editor-runtime\.(css|js)(\.map)?$/.test(j)}function fg(_){return _.replace(/[^a-z0-9._-]+/gi,"-").replace(/^-+|-+$/g,"")||"html-deck"}function mg(_){return new Uint8Array(_)}const ur={maxZipBytes:100*1024*1024,maxFileCount:1e3,maxTotalBytes:300*1024*1024},pg=[/^\.env(?:\.|$)/i,/(?:^|\/)id_rsa$/i,/(?:^|\/)id_ed25519$/i,/\.pem$/i,/\.key$/i,/\.p12$/i,/token/i,/secret/i];function lf(_){const j=_.replaceAll("\\","/").replace(/^\/+/,"");return!j||j.includes("\0")||j.split("/").some(d=>d===".."||d==="")||/^[a-z]:\//i.test(j)?null:j}function gg(_){const j=_.toLowerCase(),d=j.split("/").pop()||j;return pg.some(h=>h.test(j)||h.test(d))}function vg(_){const j=[];return _.length>ur.maxFileCount&&j.push(`文件太多了：最多支持 ${ur.maxFileCount} 个文件。`),_.reduce((h,w)=>h+w.size,0)>ur.maxTotalBytes&&j.push("文件总体积太大了：浏览器本地处理最多支持约 300MB。"),j}function yg(_){const j=[],d=[];for(const h of _)gg(h.path)?d.push(h.path):j.push(h);return{files:j,skipped:d}}function bg(_){return new Uint8Array(_)}function rf(_){return _.replace(/\.[^.]+$/,"")||"deck"}async function of(_,j=_.name){const d=lf(j);if(!d)return null;const h=bg(await _.arrayBuffer());return{path:d,name:_.name,data:h,size:h.byteLength}}async function xg(_,j){if(_.size>ur.maxZipBytes)return{input:null,warnings:[],errors:["ZIP 太大了：第一版最多支持约 100MB。"]};j?.({stage:"read",percent:0,detail:`正在打开 ${_.name}`});let d;try{d=await $h.loadAsync(_)}catch{return{input:null,warnings:[],errors:["这个文件不是有效的 ZIP 压缩包，请重新压缩后再试。"]}}j?.({stage:"read",percent:100,detail:"ZIP 已打开，正在读取里面的文件。"});const h=[],w=[],v=Object.entries(d.files).filter(([,y])=>!y.dir);for(const[y,[u,m]]of v.entries()){const g=lf(u);if(!g){w.push(`跳过了不安全路径：${u}`),j?.({stage:"collect",percent:(y+1)/v.length*100,detail:`跳过 ${u}`});continue}const B=await m.async("uint8array",S=>{const D=(y+S.percent/100)/v.length*100;j?.({stage:"collect",percent:D,detail:g})});h.push({path:g,name:g.split("/").pop()||g,data:B,size:B.byteLength}),j?.({stage:"collect",percent:(y+1)/v.length*100,detail:g})}return Is({kind:"zip",name:rf(_.name),files:h},w)}async function Sg(_,j){j?.({stage:"read",percent:0,detail:`正在读取 ${_.name}`});const d=await of(_,"index.html");return j?.({stage:"read",percent:100,detail:`${_.name} 已读取。`}),d?Is({kind:"html",name:rf(_.name),files:[d]},["你选择的是单个 HTML。如果它引用了本地图片、CSS 或 JS，建议选择整个文件夹或 ZIP，避免资源丢失。"]):{input:null,warnings:[],errors:["这个 HTML 文件名无法安全读取。"]}}async function _g(_,j){const d=[],h=[],w=Array.from(_);for(const[u,m]of w.entries()){const g=m.webkitRelativePath||m.name;j?.({stage:"collect",percent:u/w.length*100,detail:g});const B=await of(m,g);B?d.push(B):h.push(`跳过了不安全路径：${g}`),j?.({stage:"collect",percent:(u+1)/w.length*100,detail:g})}const v=d[0]?.path.split("/")[0]||"deck-folder",y=wg(d);return Is({kind:"folder",name:v,files:y},h)}function wg(_){if(!_.length)return _;const j=new Set(_.map(h=>h.path.split("/")[0]));if(j.size!==1)return _;const d=Array.from(j)[0];return _.map(h=>({...h,path:h.path===d?h.path:h.path.slice(d.length+1)}))}function Is(_,j){const d=vg(_.files),h=yg(_.files),w=[...j];return h.skipped.length>0&&w.push(`为了安全，已跳过 ${h.skipped.length} 个敏感文件。`),{input:{..._,files:h.files},warnings:w,errors:d}}const Ph={key:"waiting",percent:0,detail:"点击左侧按钮或拖入文件。"},kg={waiting:"等待文件",read:"读取文件",collect:"收集资源",detect:"检测演示稿",rewrite:"写入编辑器",runtime:"加入运行文件",zip:"生成 ZIP",done:"完成",error:"未完成"};function Eg(){const _=an.useRef(null),j=an.useRef(null),d=an.useRef(null),[h,w]=an.useState("idle"),[v,y]=an.useState(null),[u,m]=an.useState(null),[g,B]=an.useState(null),[S,D]=an.useState([]),[b,A]=an.useState(Ph),[p,T]=an.useState(!1);async function x(E){!E||ea(h)||await I(()=>xg(E,U),`正在打开 ${E.name}`)}async function M(E){!E||ea(h)||await I(()=>Sg(E,U),`正在读取 ${E.name}`)}async function N(E){!E||E.length===0||ea(h)||await I(()=>_g(E,U),`正在读取 ${E.length} 个文件`)}async function I(E,K){w("loading"),y(null),m(null),B(null),D([]),A({key:"read",percent:3,detail:Hs(K)});try{const s=await E();if(!s.input||s.errors.length>0){y(null),D(s.errors.length>0?s.errors:["文件读取失败，请换一个文件试试。"]),A({key:"error",percent:0,detail:"文件没有通过安全检查。"}),w("error");return}const $={input:s.input,warnings:s.warnings};y($);const q=nf($.input);if(q.status==="already-editable"){B(q),A({key:"detect",percent:48,detail:"检测到已有编辑功能。"}),w("review");return}await ne($)}catch(s){y(null),m(null),B(null),D([s instanceof Error?s.message:"文件读取失败，请换一个文件试试。"]),A({key:"error",percent:0,detail:"浏览器无法读取这份文件。"}),w("error")}}function U(E){const K=E.stage==="read"?[3,18]:[18,34];A({key:E.stage,percent:Jh(E.percent,K[0],K[1]),detail:Hs(E.detail)})}async function ne(E){w("converting"),B(null),A({key:"detect",percent:34,detail:"正在确认文件结构。"});try{const K=await Kp(E.input,E.warnings,Z);m(K),K.blob?(A({key:"done",percent:100,detail:"可编辑 ZIP 已准备好。"}),w("done")):(D(K.report.messages),A({key:"error",percent:45,detail:"暂时不能转换这份文件。"}),w("error"))}catch(K){D([K instanceof Error?K.message:"转换失败，请换一份演示稿试试。"]),A({key:"error",percent:45,detail:"转换中断。"}),w("error")}}function Z(E){const K={detect:[34,48],rewrite:[48,64],runtime:[64,78],zip:[78,98]},[s,$]=K[E.stage];A({key:E.stage,percent:Jh(E.percent,s,$),detail:Hs(E.detail)})}function de(){w("idle"),y(null),m(null),B(null),D([]),A(Ph)}async function J(){!v||ea(h)||await ne(v)}function he(){if(!u?.blob||!u.outputName)return;const E=URL.createObjectURL(u.blob),K=document.createElement("a");K.href=E,K.download=u.outputName,document.body.appendChild(K),K.click(),K.remove(),window.setTimeout(()=>URL.revokeObjectURL(E),1e3)}async function be(E){if(E.preventDefault(),T(!1),ea(h))return;const K=E.dataTransfer.files[0];K&&(/\.zip$/i.test(K.name)?await x(K):/\.html?$/i.test(K.name)?await M(K):(D(["请拖入 ZIP 或 HTML 文件。文件夹请点击“选择文件夹”。"]),A({key:"error",percent:0,detail:"文件类型不支持。"}),w("error")))}return ue.jsxs("main",{className:"page",children:[ue.jsxs("header",{className:"topbar",children:[ue.jsxs("a",{className:"brand",href:"/",children:[ue.jsx("span",{className:"brand-mark",children:"H"}),ue.jsx("span",{children:"HTML Deck Editor"})]}),ue.jsxs("nav",{className:"top-actions","aria-label":"页面链接",children:[ue.jsx("a",{className:"github-link",href:"https://github.com/wengzige/html-deck-editor",target:"_blank",rel:"noreferrer",children:"GitHub"}),ue.jsx("a",{className:"release-link",href:"https://github.com/wengzige/html-deck-editor/releases",target:"_blank",rel:"noreferrer",children:"Release"})]})]}),ue.jsxs("section",{className:"summary",children:[ue.jsx("p",{className:"privacy-badge",children:"文件不上传服务器，全部在浏览器本地处理"}),ue.jsxs("h1",{children:[ue.jsx("span",{children:"HTML 演示稿"}),ue.jsx("b",{children:"转"}),ue.jsx("span",{children:"可编辑 HTML"})]}),ue.jsx("p",{children:"选择 ZIP、文件夹或 HTML，浏览器自动生成可编辑版本。不用登录，也不用配置服务器。"})]}),ue.jsxs("section",{className:"converter","aria-label":"HTML 演示稿转换工具",children:[ue.jsxs("div",{className:"converter-topline",children:[ue.jsx("span",{children:"本地转换工具"}),ue.jsx("strong",{children:"上传 → 自动转换 → 下载"})]}),ue.jsxs("div",{className:"converter-shell",children:[ue.jsxs("div",{className:"upload-column",children:[ue.jsxs("div",{className:"panel-heading",children:[ue.jsx("span",{children:"上传文件"}),ue.jsx("h2",{children:"选择 HTML 演示稿"}),ue.jsx("p",{children:"优先选择 ZIP，资源最完整。"})]}),ue.jsx(Tg,{isDragging:p,state:h,onDrop:be,onDragChange:T,onZip:()=>_.current?.click(),onFolder:()=>d.current?.click(),onHtml:()=>j.current?.click()})]}),ue.jsx("aside",{className:"status-column","aria-label":"转换状态",children:ue.jsxs("div",{className:"side-panel conversion-panel",children:[ue.jsxs("div",{className:"panel-heading compact",children:[ue.jsx("span",{children:"转换状态"}),ue.jsx("h2",{children:Dg(h,u)}),ue.jsx("p",{children:v?sf(v.input):"文件只在浏览器本地处理。"})]}),ue.jsx(Cg,{progress:b}),ue.jsx(Ag,{state:h,loaded:v,result:u,reviewReport:g,errors:S,onDownload:he,onReset:de,onConfirmUpgrade:J})]})})]})]}),ue.jsxs("section",{className:"faq-section","aria-label":"新手说明",children:[ue.jsxs("div",{className:"faq-heading",children:[ue.jsx("span",{children:"新手说明"}),ue.jsx("h2",{children:"上传前看这几件事"})]}),ue.jsxs("div",{className:"faq-list",children:[ue.jsxs(Ls,{title:"我应该上传什么？",children:["ZIP、包含 ",ue.jsx("code",{children:"index.html"})," 的文件夹，或单个 HTML。拿不准时，把整个演示文件夹压成 ZIP。"]}),ue.jsx(Ls,{title:"哪些文件暂时不支持？",children:"PPTX、PDF、Keynote、普通网站源码、React/Vue/Next 工程、只有截图的演示稿。"}),ue.jsx(Ls,{title:"我可以不用线上网站吗？",children:"可以。你能从 GitHub Release 下载静态网站包，放到内网或任意静态托管；用户文件仍然在浏览器本地处理。"})]})]}),ue.jsx("input",{ref:_,type:"file",accept:".zip,application/zip",hidden:!0,onChange:E=>{x(E.target.files?.[0]||null),E.currentTarget.value=""}}),ue.jsx("input",{ref:j,type:"file",accept:".html,.htm,text/html",hidden:!0,onChange:E=>{M(E.target.files?.[0]||null),E.currentTarget.value=""}}),ue.jsx("input",{ref:d,type:"file",hidden:!0,multiple:!0,webkitdirectory:"",directory:"",onChange:E=>{N(E.target.files),E.currentTarget.value=""}})]})}function Tg({isDragging:_,state:j,onDrop:d,onDragChange:h,onZip:w,onFolder:v,onHtml:y}){const u=ea(j);return ue.jsxs("div",{className:"upload-area",children:[ue.jsxs("div",{className:`drop-zone${_?" is-dragging":""}${u?" is-busy":""}`,onDrop:d,onDragOver:m=>{m.preventDefault(),h(!0)},onDragLeave:()=>h(!1),children:[ue.jsx("span",{className:"upload-icon","aria-hidden":"true",children:"HTML"}),ue.jsx("strong",{children:u?"正在处理这份文件":"拖入 ZIP 或 HTML"}),ue.jsx("span",{children:u?"处理完成后会出现下载按钮。":"文件夹请用下方按钮选择。"})]}),ue.jsxs("div",{className:"upload-buttons",children:[ue.jsxs("button",{className:"upload-button primary",type:"button",onClick:w,disabled:u,children:[ue.jsx("strong",{children:"选择 ZIP"}),ue.jsx("span",{children:"推荐"})]}),ue.jsxs("button",{className:"upload-button",type:"button",onClick:v,disabled:u,children:[ue.jsx("strong",{children:"选择文件夹"}),ue.jsx("span",{children:"包含 index.html"})]}),ue.jsxs("button",{className:"upload-button",type:"button",onClick:y,disabled:u,children:[ue.jsx("strong",{children:"选择 HTML"}),ue.jsx("span",{children:"单文件"})]})]})]})}function Cg({progress:_}){return ue.jsxs("div",{className:"progress-panel",children:[ue.jsxs("div",{className:"progress-main",children:[ue.jsxs("div",{children:[ue.jsx("strong",{children:kg[_.key]}),ue.jsx("p",{children:_.detail})]}),ue.jsxs("b",{children:[Math.round(_.percent),"%"]})]}),ue.jsxs("div",{className:"progress-track",role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(_.percent),children:[ue.jsx("span",{style:{width:`${Math.max(0,Math.min(100,_.percent))}%`}}),ue.jsx("div",{className:"track-steps","aria-hidden":"true",children:Og.map(j=>ue.jsx("em",{className:zg(_.key,j.key)?"active":"",children:j.label},j.key))})]})]})}function Ag({state:_,loaded:j,result:d,reviewReport:h,errors:w,onDownload:v,onReset:y,onConfirmUpgrade:u}){return d?.blob?ue.jsxs("div",{className:"result-card success",children:[ue.jsx("strong",{children:"已生成可编辑 HTML"}),ue.jsxs("p",{children:[d.report.slideCount||"-"," 页已转换",d.warnings.length>0?`，另有 ${d.warnings.length} 条提示。`:"，可以下载。"]}),ue.jsxs("div",{className:"action-row",children:[ue.jsx("button",{className:"primary-action",type:"button",onClick:v,children:"下载可编辑 ZIP"}),ue.jsx("button",{className:"secondary-action",type:"button",onClick:y,children:"再转一个"})]})]}):_==="review"&&j&&h?ue.jsxs("div",{className:"result-card review",children:[ue.jsx("strong",{children:"检测到已有编辑功能"}),ue.jsx("p",{children:"这份演示稿已经包含编辑器痕迹。继续转换会升级为新版 HTML Deck Editor，并可能替换原有编辑入口。"}),ue.jsxs("div",{className:"action-row",children:[ue.jsx("button",{className:"primary-action",type:"button",onClick:u,children:"升级为新版编辑器"}),ue.jsx("button",{className:"secondary-action",type:"button",onClick:y,children:"保留原文件"})]})]}):_==="error"&&w.length>0?ue.jsxs("div",{className:"result-card error",children:[ue.jsx("strong",{children:"这份文件现在不能转换"}),ue.jsx("ul",{children:w.map(m=>ue.jsx("li",{children:m},m))}),ue.jsx("button",{className:"secondary-action",type:"button",onClick:y,children:"重新选择"})]}):j?ue.jsxs("div",{className:"result-card working",children:[ue.jsx("strong",{children:_==="loading"?"正在读取文件":"正在转换文件"}),ue.jsx("p",{children:sf(j.input)}),ue.jsx("div",{className:"action-row",children:ue.jsx("span",{className:"status-pill",children:"处理中"})})]}):ue.jsxs("div",{className:"result-card empty",children:[ue.jsx("strong",{children:"等待生成"}),ue.jsx("p",{children:"完成后这里会出现下载按钮。"}),ue.jsx("div",{className:"action-row",children:ue.jsx("span",{className:"status-pill",children:"等待下载"})})]})}function Ls({title:_,children:j,defaultOpen:d=!1}){return ue.jsxs("details",{className:"faq-item",open:d,children:[ue.jsx("summary",{children:_}),ue.jsx("p",{children:j})]})}function sf(_){const j=_.files.reduce((d,h)=>d+h.size,0);return`${Bg(_.kind)} · ${_.files.length} 个文件 · ${Mg(j)}`}function Hs(_){const j=_.split("/").pop()||_;return j.length<=42?j:`${j.slice(0,18)}...${j.slice(-18)}`}function zg(_,j){const d=["read","collect","detect","rewrite","runtime","zip","done"];return d.indexOf(_)>=d.indexOf(j)||_==="done"}function Jh(_,j,d){const h=Math.max(0,Math.min(100,_));return j+h/100*(d-j)}function Mg(_){if(_<1024)return`${_} B`;const j=_/1024;return j<1024?`${j.toFixed(1)} KB`:`${(j/1024).toFixed(2)} MB`}function Bg(_){return _==="zip"?"ZIP 压缩包":_==="html"?"单个 HTML":"文件夹"}function ea(_){return _==="loading"||_==="converting"}function Dg(_,j){return j?.blob?"可以下载了":_==="review"?"需要确认":"实时处理"}const Og=[{key:"read",label:"读取"},{key:"collect",label:"收集"},{key:"detect",label:"检测"},{key:"rewrite",label:"注入"},{key:"zip",label:"打包"}],Wh=document.getElementById("root");Wh&&Dp.createRoot(Wh).render(ue.jsx(Eg,{}));
