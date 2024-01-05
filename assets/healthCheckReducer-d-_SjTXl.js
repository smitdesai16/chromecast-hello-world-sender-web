function w(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Ne=typeof Symbol=="function"&&Symbol.observable||"@@observable",se=Ne,V=()=>Math.random().toString(36).substring(7).split("").join("."),ze={INIT:`@@redux/INIT${V()}`,REPLACE:`@@redux/REPLACE${V()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${V()}`},$=ze;function re(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function _e(e,t,r){if(typeof e!="function")throw new Error(w(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(w(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(w(1));return r(_e)(e,t)}let n=e,i=t,o=new Map,s=o,c=0,a=!1;function l(){s===o&&(s=new Map,o.forEach((f,p)=>{s.set(p,f)}))}function u(){if(a)throw new Error(w(3));return i}function d(f){if(typeof f!="function")throw new Error(w(4));if(a)throw new Error(w(5));let p=!0;l();const y=c++;return s.set(y,f),function(){if(p){if(a)throw new Error(w(6));p=!1,l(),s.delete(y),o=null}}}function _(f){if(!re(f))throw new Error(w(7));if(typeof f.type>"u")throw new Error(w(8));if(typeof f.type!="string")throw new Error(w(17));if(a)throw new Error(w(9));try{a=!0,i=n(i,f)}finally{a=!1}return(o=s).forEach(y=>{y()}),f}function m(f){if(typeof f!="function")throw new Error(w(10));n=f,_({type:$.REPLACE})}function h(){const f=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(w(11));function y(){const C=p;C.next&&C.next(u())}return y(),{unsubscribe:f(y)}},[se](){return this}}}return _({type:$.INIT}),{dispatch:_,subscribe:d,getState:u,replaceReducer:m,[se]:h}}function je(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:$.INIT})>"u")throw new Error(w(12));if(typeof r(void 0,{type:$.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(w(13))})}function xe(e){const t=Object.keys(e),r={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(r[s]=e[s])}const n=Object.keys(r);let i;try{je(r)}catch(o){i=o}return function(s={},c){if(i)throw i;let a=!1;const l={};for(let u=0;u<n.length;u++){const d=n[u],_=r[d],m=s[d],h=_(m,c);if(typeof h>"u")throw c&&c.type,new Error(w(14));l[d]=h,a=a||h!==m}return a=a||n.length!==Object.keys(s).length,a?l:s}}function B(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function Fe(...e){return t=>(r,n)=>{const i=t(r,n);let o=()=>{throw new Error(w(15))};const s={getState:i.getState,dispatch:(a,...l)=>o(a,...l)},c=e.map(a=>a(s));return o=B(...c)(i.dispatch),{...i,dispatch:o}}}function $e(e){return re(e)&&"type"in e&&typeof e.type=="string"}var me=Symbol.for("immer-nothing"),ce=Symbol.for("immer-draftable"),g=Symbol.for("immer-state");function E(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var D=Object.getPrototypeOf;function P(e){return!!e&&!!e[g]}function O(e){var t;return e?we(e)||Array.isArray(e)||!!e[ce]||!!((t=e.constructor)!=null&&t[ce])||K(e)||q(e):!1}var Be=Object.prototype.constructor.toString();function we(e){if(!e||typeof e!="object")return!1;const t=D(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Be}function I(e,t){U(e)===0?Object.entries(e).forEach(([r,n])=>{t(r,n,e)}):e.forEach((r,n)=>t(n,r,e))}function U(e){const t=e[g];return t?t.type_:Array.isArray(e)?1:K(e)?2:q(e)?3:0}function Q(e,t){return U(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ge(e,t,r){const n=U(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function We(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function K(e){return e instanceof Map}function q(e){return e instanceof Set}function M(e){return e.copy_||e.base_}function Y(e,t){if(K(e))return new Map(e);if(q(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&we(e))return D(e)?{...e}:Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[g];let n=Reflect.ownKeys(r);for(let i=0;i<n.length;i++){const o=n[i],s=r[o];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(r[o]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[o]})}return Object.create(D(e),r)}function ne(e,t=!1){return X(e)||P(e)||!O(e)||(U(e)>1&&(e.set=e.add=e.clear=e.delete=Le),Object.freeze(e),t&&I(e,(r,n)=>ne(n,!0))),e}function Le(){E(2)}function X(e){return Object.isFrozen(e)}var Ue={};function T(e){const t=Ue[e];return t||E(0,e),t}var N;function Se(){return N}function Ke(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ue(e,t){t&&(T("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function J(e){Z(e),e.drafts_.forEach(qe),e.drafts_=null}function Z(e){e===N&&(N=e.parent_)}function ae(e){return N=Ke(N,e)}function qe(e){const t=e[g];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function fe(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[g].modified_&&(J(t),E(4)),O(e)&&(e=W(t,e),t.parent_||L(t,e)),t.patches_&&T("Patches").generateReplacementPatches_(r[g].base_,e,t.patches_,t.inversePatches_)):e=W(t,r,[]),J(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==me?e:void 0}function W(e,t,r){if(X(t))return t;const n=t[g];if(!n)return I(t,(i,o)=>le(e,n,t,i,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return L(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let o=i,s=!1;n.type_===3&&(o=new Set(i),i.clear(),s=!0),I(o,(c,a)=>le(e,n,i,c,a,r,s)),L(e,i,!1),r&&e.patches_&&T("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function le(e,t,r,n,i,o,s){if(P(i)){const c=o&&t&&t.type_!==3&&!Q(t.assigned_,n)?o.concat(n):void 0,a=W(e,i,c);if(ge(r,n,a),P(a))e.canAutoFreeze_=!1;else return}else s&&r.add(i);if(O(i)&&!X(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;W(e,i),(!t||!t.scope_.parent_)&&L(e,i)}}function L(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ne(t,r)}function Xe(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Se(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=ie;r&&(i=[n],o=z);const{revoke:s,proxy:c}=Proxy.revocable(i,o);return n.draft_=c,n.revoke_=s,c}var ie={get(e,t){if(t===g)return e;const r=M(e);if(!Q(r,t))return Ve(e,r,t);const n=r[t];return e.finalized_||!O(n)?n:n===G(e.base_,t)?(H(e),e.copy_[t]=te(n,e)):n},has(e,t){return t in M(e)},ownKeys(e){return Reflect.ownKeys(M(e))},set(e,t,r){const n=be(M(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=G(M(e),t),o=i==null?void 0:i[g];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(We(r,i)&&(r!==void 0||Q(e.base_,t)))return!0;H(e),ee(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return G(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,H(e),ee(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=M(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){E(11)},getPrototypeOf(e){return D(e.base_)},setPrototypeOf(){E(12)}},z={};I(ie,(e,t)=>{z[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});z.deleteProperty=function(e,t){return z.set.call(this,e,t,void 0)};z.set=function(e,t,r){return ie.set.call(this,e[0],t,r,e[0])};function G(e,t){const r=e[g];return(r?M(r):e)[t]}function Ve(e,t,r){var i;const n=be(t,r);return n?"value"in n?n.value:(i=n.get)==null?void 0:i.call(e.draft_):void 0}function be(e,t){if(!(t in e))return;let r=D(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=D(r)}}function ee(e){e.modified_||(e.modified_=!0,e.parent_&&ee(e.parent_))}function H(e){e.copy_||(e.copy_=Y(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Ge=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const s=this;return function(a=o,...l){return s.produce(a,u=>r.call(this,u,...l))}}typeof r!="function"&&E(6),n!==void 0&&typeof n!="function"&&E(7);let i;if(O(t)){const o=ae(this),s=te(t,void 0);let c=!0;try{i=r(s),c=!1}finally{c?J(o):Z(o)}return ue(o,n),fe(i,o)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===me&&(i=void 0),this.autoFreeze_&&ne(i,!0),n){const o=[],s=[];T("Patches").generateReplacementPatches_(t,i,o,s),n(o,s)}return i}else E(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...c)=>this.produceWithPatches(s,a=>t(a,...c));let n,i;return[this.produce(t,r,(s,c)=>{n=s,i=c}),n,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){O(e)||E(8),P(e)&&(e=ve(e));const t=ae(this),r=te(e,void 0);return r[g].isManual_=!0,Z(t),r}finishDraft(e,t){const r=e&&e[g];(!r||!r.isManual_)&&E(9);const{scope_:n}=r;return ue(n,t),fe(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=T("Patches").applyPatches_;return P(e)?n(e,t):this.produce(e,i=>n(i,t))}};function te(e,t){const r=K(e)?T("MapSet").proxyMap_(e,t):q(e)?T("MapSet").proxySet_(e,t):Xe(e,t);return(t?t.scope_:Se()).drafts_.push(r),r}function ve(e){return P(e)||E(10,e),Ce(e)}function Ce(e){if(!O(e)||X(e))return e;const t=e[g];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Y(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Y(e,!0);return I(r,(n,i)=>{ge(r,n,Ce(i))}),t&&(t.finalized_=!1),r}var S=new Ge,Ee=S.produce;S.produceWithPatches.bind(S);S.setAutoFreeze.bind(S);S.setUseStrictShallowCopy.bind(S);S.applyPatches.bind(S);S.createDraft.bind(S);S.finishDraft.bind(S);function He(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function Qe(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var de=e=>Array.isArray(e)?e:[e];function Ye(e){const t=Array.isArray(e[0])?e[0]:e;return Qe(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Je(e,t){const r=[],{length:n}=e;for(let i=0;i<n;i++)r.push(e[i].apply(null,t));return r}var Ze=class{constructor(e){this.value=e}deref(){return this.value}},et=typeof WeakRef<"u"?WeakRef:Ze,tt=0,pe=1;function x(){return{s:tt,v:void 0,o:null,p:null}}function Re(e,t={}){let r=x();const{resultEqualityCheck:n}=t;let i,o=0;function s(){let c=r;const{length:a}=arguments;for(let d=0,_=a;d<_;d++){const m=arguments[d];if(typeof m=="function"||typeof m=="object"&&m!==null){let h=c.o;h===null&&(c.o=h=new WeakMap);const v=h.get(m);v===void 0?(c=x(),h.set(m,c)):c=v}else{let h=c.p;h===null&&(c.p=h=new Map);const v=h.get(m);v===void 0?(c=x(),h.set(m,c)):c=v}}const l=c;let u;if(c.s===pe?u=c.v:(u=e.apply(null,arguments),o++),l.s=pe,n){const d=(i==null?void 0:i.deref())??i;d!=null&&n(d,u)&&(u=d,o!==0&&o--),i=typeof u=="object"&&u!==null||typeof u=="function"?new et(u):u}return l.v=u,u}return s.clearCache=()=>{r=x(),s.resetResultsCount()},s.resultsCount=()=>o,s.resetResultsCount=()=>{o=0},s}function rt(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e;return(...i)=>{let o=0,s=0,c,a={},l=i.pop();typeof l=="object"&&(a=l,l=i.pop()),He(l,`createSelector expects an output function after the inputs, but received: [${typeof l}]`);const u={...r,...a},{memoize:d,memoizeOptions:_=[],argsMemoize:m=Re,argsMemoizeOptions:h=[],devModeChecks:v={}}=u,f=de(_),p=de(h),y=Ye(i),b=d(function(){return o++,l.apply(null,arguments)},...f),C=m(function(){s++;const Ie=Je(y,arguments);return c=b.apply(null,Ie),c},...p);return Object.assign(C,{resultFunc:l,memoizedResultFunc:b,dependencies:y,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>c,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:d,argsMemoize:m})}}function Ae(e){return({dispatch:r,getState:n})=>i=>o=>typeof o=="function"?o(r,n,e):i(o)}var nt=Ae(),it=Ae,ot=(...e)=>{const t=rt(...e);return(...r)=>{const n=t(...r),i=(o,...s)=>n(P(o)?ve(o):o,...s);return Object.assign(i,n),i}};ot(Re);var st=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?B:B.apply(null,arguments)};function j(e,t){function r(...n){if(t){let i=t(...n);if(!i)throw new Error(R(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>$e(n)&&n.type===e,r}var Oe=class k extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,k.prototype)}static get[Symbol.species](){return k}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new k(...t[0].concat(this)):new k(...t.concat(this))}};function ye(e){return O(e)?Ee(e,()=>{}):e}function he(e,t,r){if(e.has(t)){let i=e.get(t);return r.update&&(i=r.update(i,t,e),e.set(t,i)),i}if(!r.insert)throw new Error(R(10));const n=r.insert(t,e);return e.set(t,n),n}function ct(e){return typeof e=="boolean"}var ut=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let s=new Oe;return r&&(ct(r)?s.push(nt):s.push(it(r.extraArgument))),s},at="RTK_autoBatch",Pe=e=>t=>{setTimeout(t,e)},ft=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Pe(10),lt=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let i=!0,o=!1,s=!1;const c=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?ft:e.type==="callback"?e.queueNotification:Pe(e.timeout),l=()=>{s=!1,o&&(o=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){const d=()=>i&&u(),_=n.subscribe(d);return c.add(u),()=>{_(),c.delete(u)}},dispatch(u){var d;try{return i=!((d=u==null?void 0:u.meta)!=null&&d[at]),o=!i,o&&(s||(s=!0,a(l))),n.dispatch(u)}finally{i=!0}}})},dt=e=>function(r){const{autoBatch:n=!0}=r??{};let i=new Oe(e);return n&&i.push(lt(typeof n=="object"?n:void 0)),i},pt=!0;function Ot(e){const t=ut(),{reducer:r=void 0,middleware:n,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let c;if(typeof r=="function")c=r;else if(re(r))c=xe(r);else throw new Error(R(1));let a;typeof n=="function"?a=n(t):a=t();let l=B;i&&(l=st({trace:!pt,...typeof i=="object"&&i}));const u=Fe(...a),d=dt(u);let _=typeof s=="function"?s(d):d();const m=l(..._);return _e(c,o,m)}function Me(e){const t={},r=[];let n;const i={addCase(o,s){const c=typeof o=="string"?o:o.type;if(!c)throw new Error(R(28));if(c in t)throw new Error(R(29));return t[c]=s,i},addMatcher(o,s){return r.push({matcher:o,reducer:s}),i},addDefaultCase(o){return n=o,i}};return e(i),[t,r,n]}function yt(e){return typeof e=="function"}function ht(e,t){let[r,n,i]=Me(t),o;if(yt(e))o=()=>ye(e());else{const c=ye(e);o=()=>c}function s(c=o(),a){let l=[r[a.type],...n.filter(({matcher:u})=>u(a)).map(({reducer:u})=>u)];return l.filter(u=>!!u).length===0&&(l=[i]),l.reduce((u,d)=>{if(d)if(P(u)){const m=d(u,a);return m===void 0?u:m}else{if(O(u))return Ee(u,_=>d(_,a));{const _=d(u,a);if(_===void 0){if(u===null)return u;throw new Error(R(9))}return _}}return u},c)}return s.getInitialState=o,s}var _t=Symbol.for("rtk-slice-createasyncthunk");function mt(e,t){return`${e}/${t}`}function wt({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[_t];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(R(11));typeof process<"u";const c=(typeof i.reducers=="function"?i.reducers(St()):i.reducers)||{},a=Object.keys(c),l={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(f,p){const y=typeof f=="string"?f:f.type;if(!y)throw new Error(R(12));if(y in l.sliceCaseReducersByType)throw new Error(R(13));return l.sliceCaseReducersByType[y]=p,u},addMatcher(f,p){return l.sliceMatchers.push({matcher:f,reducer:p}),u},exposeAction(f,p){return l.actionCreators[f]=p,u},exposeCaseReducer(f,p){return l.sliceCaseReducersByName[f]=p,u}};a.forEach(f=>{const p=c[f],y={reducerName:f,type:mt(o,f),createNotation:typeof i.reducers=="function"};vt(p)?Et(y,p,u,t):bt(y,p,u)});function d(){const[f={},p=[],y=void 0]=typeof i.extraReducers=="function"?Me(i.extraReducers):[i.extraReducers],b={...f,...l.sliceCaseReducersByType};return ht(i.initialState,C=>{for(let A in b)C.addCase(A,b[A]);for(let A of l.sliceMatchers)C.addMatcher(A.matcher,A.reducer);for(let A of p)C.addMatcher(A.matcher,A.reducer);y&&C.addDefaultCase(y)})}const _=f=>f,m=new WeakMap;let h;const v={name:o,reducerPath:s,reducer(f,p){return h||(h=d()),h(f,p)},actions:l.actionCreators,caseReducers:l.sliceCaseReducersByName,getInitialState(){return h||(h=d()),h.getInitialState()},getSelectors(f=_){const p=he(m,this,{insert:()=>new WeakMap});return he(p,f,{insert:()=>{const y={};for(const[b,C]of Object.entries(i.selectors??{}))y[b]=gt(this,C,f,this!==v);return y}})},selectSlice(f){let p=f[this.reducerPath];return typeof p>"u"&&this!==v&&(p=this.getInitialState()),p},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(f,{reducerPath:p,...y}={}){const b=p??this.reducerPath;return f.inject({reducerPath:b,reducer:this.reducer},y),{...this,reducerPath:b}}};return v}}function gt(e,t,r,n){function i(o,...s){let c=r.call(e,o);return typeof c>"u"&&n&&(c=e.getInitialState()),t(c,...s)}return i.unwrapped=t,i}var Te=wt();function St(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function bt({type:e,reducerName:t,createNotation:r},n,i){let o,s;if("reducer"in n){if(r&&!Ct(n))throw new Error(R(17));o=n.reducer,s=n.prepare}else o=n;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?j(e,s):j(e))}function vt(e){return e._reducerDefinitionType==="asyncThunk"}function Ct(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Et({type:e,reducerName:t},r,n,i){if(!i)throw new Error(R(18));const{payloadCreator:o,fulfilled:s,pending:c,rejected:a,settled:l,options:u}=r,d=i(e,o,u);n.exposeAction(t,d),s&&n.addCase(d.fulfilled,s),c&&n.addCase(d.pending,c),a&&n.addCase(d.rejected,a),l&&n.addMatcher(d.settled,l),n.exposeCaseReducer(t,{fulfilled:s||F,pending:c||F,rejected:a||F,settled:l||F})}function F(){}var oe="listenerMiddleware";j(`${oe}/add`);j(`${oe}/removeAll`);j(`${oe}/remove`);function R(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Rt={castState:"",sessionState:"",applicationStatus:"",sessionId:"",applicationId:"",applicationName:"",receiverVolumeLevel:0,receiverVolumeIsMuted:!1},De=Te({name:"applicationDetail",initialState:Rt,reducers:{updateCastStateAction:(e,t)=>{e.castState=t.payload},updateSessionStateAction:(e,t)=>{e.sessionState=t.payload},updateApplicationStatusAction:(e,t)=>{e.applicationStatus=t.payload},updateSessionIdAction:(e,t)=>{e.sessionId=t.payload},updateApplicationIdAction:(e,t)=>{e.applicationId=t.payload},updateApplicationNameAction:(e,t)=>{e.applicationName=t.payload},updateReceiverVolumeLevel:(e,t)=>{e.receiverVolumeLevel=t.payload},updateReceiverVolumeIsMuted:(e,t)=>{e.receiverVolumeIsMuted=t.payload}}}),{updateCastStateAction:Pt,updateSessionStateAction:Mt,updateApplicationStatusAction:Tt,updateSessionIdAction:Dt,updateApplicationIdAction:kt,updateApplicationNameAction:It,updateReceiverVolumeLevel:Nt,updateReceiverVolumeIsMuted:zt}=De.actions,jt=De.reducer,At={lastReceived:""},ke=Te({name:"applicationDetail",initialState:At,reducers:{updateLastReceivedAction:(e,t)=>{e.lastReceived=t.payload}}}),{updateLastReceivedAction:xt}=ke.actions,Ft=ke.reducer;export{jt as A,Mt as a,Tt as b,Ot as c,Dt as d,kt as e,It as f,Nt as g,Ft as h,zt as i,xt as j,Pt as u};