function t(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=window,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}const a=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f},v="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(v))return!1;this[v]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{o?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const o=document.createElement("style"),s=i.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=e.cssText,t.appendChild(o)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var o;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,s=o._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=o.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=s,this[s]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;_[v]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:_}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const $=window,y=$.trustedTypes,b=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,w="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,C="?"+A,E=`<${C}>`,S=document,k=()=>S.createComment(""),x=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,L="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,N=/>/g,M=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,U=/"/g,O=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),j=new WeakMap,z=S.createTreeWalker(S,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(e):e}const B=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===R?"!--"===l[1]?r=H:void 0!==l[1]?r=N:void 0!==l[2]?(O.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=M):void 0!==l[3]&&(r=M):r===M?">"===l[0]?(r=null!=s?s:R,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?M:'"'===l[3]?U:T):r===U||r===T?r=M:r===H||r===N?r=R:(r=M,s=void 0);const h=r===M&&t[e+1].startsWith("/>")?" ":"";n+=r===R?i+E:c>=0?(o.push(a),i.slice(0,c)+w+i.slice(c)+A+h):i+A+(-2===c?(o.push(void 0),e):h)}return[V(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class W{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,a=this.parts,[l,c]=B(t,e);if(this.el=W.createElement(l,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=z.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(w)||e.startsWith(A)){const i=c[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+w).split(A),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?X:"@"===e[1]?Y:J})}else a.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(O.test(o.tagName)){const t=o.textContent.split(A),e=t.length-1;if(e>0){o.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],k()),z.nextNode(),a.push({type:2,index:++s});o.append(t[e],k())}}}else if(8===o.nodeType)if(o.data===C)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(A,t+1));)a.push({type:7,index:s}),t+=A.length-1}s++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,o){var s,n,r,a;if(e===F)return e;let l=void 0!==o?null===(s=i._$Co)||void 0===s?void 0:s[o]:i._$Cl;const c=x(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,o)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);z.currentNode=s;let n=z.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new G(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new tt(n,this,t)),this._$AV.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(n=z.nextNode(),r++)}return z.currentNode=S,s}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,o){var s;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),x(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>P(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==I&&x(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=W.createElement(V(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(i);else{const t=new K(s,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new W(t)),e}T(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new G(this.k(k()),this.k(k()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class J{constructor(t,e,i,o,s){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=q(this,t,e,0),n=!x(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const o=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=q(this,o[i+r],e,r),a===F&&(a=this._$AH[r]),n||(n=!x(a)||a!==this._$AH[r]),a===I?t=I:t!==I&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends J{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}const Q=y?y.emptyScript:"";class X extends J{constructor(){super(...arguments),this.type=4}j(t){t&&t!==I?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class Y extends J{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:I)===F)return;const o=this._$AH,s=t===I&&o!==I||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==I&&(o===I||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const et=$.litHtmlPolyfillSupport;null==et||et(W,G),(null!==(m=$.litHtmlVersions)&&void 0!==m?m:$.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,ot;class st extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,s;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=n._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new G(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return F}}st.finalized=!0,st._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:st});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:st}),(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements;let ct=class extends st{setConfig(t){this._config={type:t.type||"custom:litter-robot4-card",entities:t.entities||["","","",""],pet_weight_entities:t.pet_weight_entities||[],language:t.language||"en",use_metric:t.use_metric||!1}}_valueChanged(t){const e=t.target,i=e.configValue,o=t.detail?.value??e.value;if(i.includes(".")){const[t,e]=i.split("."),s=[...this._config[t]];s[parseInt(e)]=o,this._config={...this._config,[t]:s}}else this._config={...this._config,[i]:o};const s=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(s)}render(){return this.hass&&this._config?D`
      <div class="config-section">
        <h3>Required Entities</h3>
        
        <div class="config-row">
          <label class="config-label required">Status Code Entity</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entities[0]}
            .label="Status Code Entity"
            .configValue="entities.0"
            allow-custom-entity
            @value-changed=${this._valueChanged}
            @click=${t=>t.stopPropagation()}
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <label class="config-label required">Litter Level Entity</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entities[1]}
            .label="Litter Level Entity"
            .configValue="entities.1"
            allow-custom-entity
            @value-changed=${this._valueChanged}
            @click=${t=>t.stopPropagation()}
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <label class="config-label required">Waste Drawer Entity</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entities[2]}
            .label="Waste Drawer Entity"
            .configValue="entities.2"
            allow-custom-entity
            @value-changed=${this._valueChanged}
            @click=${t=>t.stopPropagation()}
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <label class="config-label">Litter Hopper Entity (Optional)</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entities[3]}
            .label="Litter Hopper Entity"
            .configValue="entities.3"
            allow-custom-entity
            @value-changed=${this._valueChanged}
            @click=${t=>t.stopPropagation()}
          ></ha-entity-picker>
        </div>
      </div>

      <div class="config-section">
        <h3>Settings</h3>
        
        <div class="config-row">
          <label class="config-label">Language</label>
          <select
            .value=${this._config.language}
            .configValue="language"
            @change=${this._valueChanged}
            @click=${t=>t.stopPropagation()}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="nl">Nederlands</option>
            <option value="fr">Français</option>
          </select>
        </div>

        <div class="config-row">
          <label class="checkbox-row">
            <input
              type="checkbox"
              .checked=${this._config.use_metric}
              .configValue="use_metric"
              @change=${this._valueChanged}
              @click=${t=>t.stopPropagation()}
            />
            Use Metric Units (kg)
          </label>
        </div>
      </div>
    `:D`<div>Loading editor...</div>`}};ct.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new r(i,t,s)})`
    :host { 
      display: block; 
      padding: 16px; 
      font-family: var(--paper-font-body1_-_font-family);
    }
    
    .config-section {
      margin-bottom: 24px;
    }
    
    .config-section h3 {
      margin: 0 0 12px 0;
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    
    .config-row {
      margin-bottom: 16px;
    }
    
    .config-label {
      display: block;
      margin-bottom: 4px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    
    .config-label.required::after {
      content: " *";
      color: var(--error-color, red);
    }
    
    ha-entity-picker, select { 
      display: block; 
      width: 100%; 
      margin-bottom: 16px; 
    }
    
    select {
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 4px;
      background: var(--card-background-color, white);
      color: var(--primary-text-color, black);
      font-size: 14px;
      font-family: inherit;
    }
    
    input[type="checkbox"] {
      width: auto;
      margin-right: 8px;
    }
    
    select:focus, input:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
      box-shadow: 0 0 0 2px rgba(3, 169, 244, 0.2);
    }
    
    .checkbox-row {
      display: flex;
      align-items: center;
      font-weight: 500;
    }
  `,t([at({attribute:!1}),e("design:type",Object)],ct.prototype,"hass",void 0),t([function(t){return at({...t,state:!0})}(),e("design:type",Object)],ct.prototype,"_config",void 0),ct=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e))("litter-robot4-editor")],ct),
/**
 * @license
 * Litter-Robot 4 Card for Home Assistant
 * Compatible with Home Assistant's frontend without external dependencies
 */
console.debug("Registering Litter-Robot 4 Card..."),console.info("%c LITTER-ROBOT-4-CARD %c Loaded ","color: white; background: #4caf50; font-weight: 700;","color: #4caf50; background: white; font-weight: 700;");const dt=async()=>{try{await new Promise((t=>{if(window.customCards)t();else{const e=setInterval((()=>{window.customCards&&(clearInterval(e),t())}),100)}})),console.debug("Adding to custom cards list..."),window.customCards=window.customCards||[];window.customCards.find((t=>"litter-robot4-card"===t.type))?console.debug("Card already registered in custom cards list"):(window.customCards.push({type:"litter-robot4-card",name:"Litter-Robot 4 Card",description:"A custom card to show Litter-Robot 4 status with litter level, waste drawer, and optional hopper support",preview:!0,documentationURL:"https://github.com/sebadv/LitterRobot4Card"}),console.debug("Added to custom cards list successfully"))}catch(t){console.error("Error adding to custom cards list:",t)}};class ht extends HTMLElement{constructor(){super(),this._config={},this._hass={},this._translations={en:{common:{title:"Litter-Robot 4",litter:"Litter",waste:"Waste",full:"Full",pet_weight:"Pet Weight",hopper:"Litter Hopper"},status:{br:"Bonnet Removed",ccc:"Clean Cycle Complete",ccp:"Clean Cycle In Progress",cd:"Clean Cycle Done",csf:"Cat Sensor Fault",csi:"Cat Sensor Interrupted",cst:"Cat Sensor Timing",df1:"Drawer Full (1)",df2:"Drawer Full (2)",dfs:"Drawer Full Sensor",dhf:"Drawer Hall Sensor Fault",dpf:"Drawer Position Fault",ec:"Error Condition",hpf:"Hall Position Fault",off:"Power Off",offline:"Offline",otf:"Over Torque Fault",p:"Paused",pd:"Pad Detect",pwrd:"Power Drained",pwru:"Power Up",rdy:"Ready",scf:"Sensor Contact Fault",sdf:"Sensor Drawer Fault",spf:"Sensor Position Fault"},hopper:{enabled:"Enabled",disabled:"Disabled",empty:"Empty",motor_fault_short:"Motor Fault (Short)",motor_ot_amps:"Motor Overcurrent",motor_disconnected:"Motor Disconnected"}},es:{common:{title:"Litter-Robot 4",litter:"Arena",waste:"Residuos",full:"Lleno",pet_weight:"Peso de Mascota",hopper:"Tolva de Arena"},status:{br:"Capó Removido",ccc:"Ciclo de Limpieza Completo",ccp:"Ciclo de Limpieza en Progreso",cd:"Ciclo de Limpieza Terminado",csf:"Falla del Sensor del Gato",csi:"Sensor del Gato Interrumpido",cst:"Tiempo del Sensor del Gato",df1:"Cajón Lleno (1)",df2:"Cajón Lleno (2)",dfs:"Sensor de Cajón Lleno",dhf:"Falla del Sensor Hall del Cajón",dpf:"Falla de Posición del Cajón",ec:"Condición de Error",hpf:"Falla de Posición Hall",off:"Apagado",offline:"Desconectado",otf:"Falla de Sobretorque",p:"Pausado",pd:"Detección de Almohadilla",pwrd:"Energía Agotada",pwru:"Encendido",rdy:"Listo",scf:"Falla de Contacto del Sensor",sdf:"Falla del Sensor del Cajón",spf:"Falla de Posición del Sensor"},hopper:{enabled:"Habilitado",disabled:"Deshabilitado",empty:"Vacío",motor_fault_short:"Falla del Motor (Corto)",motor_ot_amps:"Sobrecorriente del Motor",motor_disconnected:"Motor Desconectado"}},nl:{common:{title:"Litter-Robot 4",litter:"Kattenbakvulling",waste:"Afval",full:"Vol",pet_weight:"Huisdiergewicht",hopper:"Vulling Hopper"},status:{br:"Kap Verwijderd",ccc:"Reinigingscyclus Voltooid",ccp:"Reinigingscyclus Bezig",cd:"Reinigingscyclus Klaar",csf:"Katsensor Fout",csi:"Katsensor Onderbroken",cst:"Katsensor Timing",df1:"Lade Vol (1)",df2:"Lade Vol (2)",dfs:"Lade Vol Sensor",dhf:"Lade Hall Sensor Fout",dpf:"Lade Positie Fout",ec:"Foutconditie",hpf:"Hall Positie Fout",off:"Uitgeschakeld",offline:"Offline",otf:"Overkoppel Fout",p:"Gepauzeerd",pd:"Pad Detectie",pwrd:"Stroom Leeg",pwru:"Opstarten",rdy:"Klaar",scf:"Sensor Contact Fout",sdf:"Sensor Lade Fout",spf:"Sensor Positie Fout"},hopper:{enabled:"Ingeschakeld",disabled:"Uitgeschakeld",empty:"Leeg",motor_fault_short:"Motor Fout (Kort)",motor_ot_amps:"Motor Overstroom",motor_disconnected:"Motor Losgekoppeld"}},fr:{common:{title:"Litter-Robot 4",litter:"Litière",waste:"Déchets",full:"Plein",pet_weight:"Poids de l'Animal",hopper:"Trémie à Litière"},status:{br:"Capot Retiré",ccc:"Cycle de Nettoyage Terminé",ccp:"Cycle de Nettoyage en Cours",cd:"Cycle de Nettoyage Fini",csf:"Défaut Capteur Chat",csi:"Capteur Chat Interrompu",cst:"Timing Capteur Chat",df1:"Tiroir Plein (1)",df2:"Tiroir Plein (2)",dfs:"Capteur Tiroir Plein",dhf:"Défaut Capteur Hall Tiroir",dpf:"Défaut Position Tiroir",ec:"Condition d'Erreur",hpf:"Défaut Position Hall",off:"Éteint",offline:"Hors Ligne",otf:"Défaut Surtorque",p:"En Pause",pd:"Détection Coussin",pwrd:"Alimentation Épuisée",pwru:"Mise sous Tension",rdy:"Prêt",scf:"Défaut Contact Capteur",sdf:"Défaut Capteur Tiroir",spf:"Défaut Position Capteur"},hopper:{enabled:"Activé",disabled:"Désactivé",empty:"Vide",motor_fault_short:"Défaut Moteur (Court)",motor_ot_amps:"Surintensité Moteur",motor_disconnected:"Moteur Déconnecté"}}}}static async getConfigElement(){return document.createElement("litter-robot4-editor")}static getStubConfig(){return{type:"custom:litter-robot4-card",entities:["","","",""],pet_weight_entities:[],language:"en"}}set hass(t){this._hass=t,this._updateContent()}get hass(){return this._hass}async setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={type:"custom:litter-robot4-card",entities:t.entities||["","","",""],pet_weight_entities:t.pet_weight_entities||[],use_metric:t.use_metric||!1,language:t.language||"en"},this._hass&&this._hass.states&&this._updateContent()}_(t){const e=this._config?.language||"en",i=t.split(".");let o=this._translations[e];o||(o=this._translations.en);for(const e of i){if(!o||"object"!=typeof o)return t;o=o[e]}return o||t}getReadableStatus(t){return this._(`status.${t}`)||`Unknown (${t})`}getStatusColor(t){return["br","df1","df2","dfs","csf","csi","cst","dhf","dpf","ec","hpf","scf","sdf","spf","otf"].includes(t)?"red":["p","pwru","pwrd","pd"].includes(t)?"yellow":["off","offline"].includes(t)?"gray":["rdy","ccc","cd"].includes(t)?"blue":["ccp"].includes(t)?"orange":"gray"}getWasteColor(t){return t<=70?"green":t<=90?"yellow":"red"}getLitterColor(t){return t>=70?"green":t>=40?"yellow":"red"}_showMoreInfo(t){if(!t)return;const e=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}convertWeight(t){if(!t||isNaN(Number(t)))return"";const e=Number(t);return this._config?.use_metric?`${(.453592*e).toFixed(1)} kg`:`${e} lbs`}_getHopperIcon(t){const e=this._hass.states[t]?.state;switch(e){case"enabled":return"green";case"disabled":default:return"gray";case"empty":return"yellow";case"motor_fault_short":case"motor_ot_amps":case"motor_disconnected":return"red"}}_getHopperState(t){const e=this._hass.states[t]?.state;return this._(`hopper.${e}`)||e}_updateContent(){if(!this._hass||!this._hass.states||!this._config)return;const[t,e,i,o]=(this._config.entities||[]).map((t=>t&&""!==t?this._hass.states[t]:void 0)),s=(this._config.pet_weight_entities||[]).map((t=>t&&""!==t?this._hass.states[t]:void 0)).filter((t=>void 0!==t));if(!(t||e||i))return void(this.innerHTML='\n      <ha-card>\n          <style>\n            ha-card {\n              padding: 16px;\n              background: var(--card-background-color, white);\n              color: var(--primary-text-color, black);\n              border-radius: 12px;\n              font-family: \'Segoe UI\', sans-serif;\n              text-align: center;\n            }\n            .setup-message {\n              padding: 20px;\n              color: var(--secondary-text-color, #666);\n            }\n            .setup-title {\n              font-size: 1.2rem;\n              font-weight: bold;\n              margin-bottom: 8px;\n            }\n          </style>\n          <div class="setup-message">\n            <div class="setup-title">Litter-Robot 4 Card</div>\n            <div>Please configure the required entities in the card settings.</div>\n          </div>\n      </ha-card>\n      ');const n=Number(e?.state),r=Number(i?.state),a=isNaN(n)?"--":`${Math.round(n)}%`,l=isNaN(r)?"--":`${Math.round(r)}%`,c=isNaN(n)?"red":this.getLitterColor(n),d=isNaN(r)?"red":this.getWasteColor(r),h=this.getReadableStatus(t?.state||""),u=this.getStatusColor(t?.state||"");this.innerHTML=`\n      <ha-card>\n        <style>\n    ha-card {\n      padding: 16px;\n      background: var(--card-background-color, white);\n            color: var(--primary-text-color, black);\n      border-radius: 12px;\n      font-family: 'Segoe UI', sans-serif;\n    }\n\n    .title {\n      font-size: 1.4rem;\n      font-weight: bold;\n      margin-bottom: 12px;\n    }\n\n    .status {\n      display: flex;\n      align-items: center;\n      margin: 4px 0 12px 0;\n    }\n\n    .status-icon {\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n      margin-right: 8px;\n    }\n\n    .item {\n      display: flex;\n      align-items: center;\n      margin: 6px 0;\n    }\n\n    .icon {\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n      margin-right: 8px;\n    }\n\n    .pet-weights {\n      margin-top: 12px;\n      padding-top: 12px;\n            border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));\n    }\n\n    .green { background-color: #4caf50; }\n    .yellow { background-color: #ffc107; }\n    .red { background-color: #f44336; }\n    .blue { background-color: #00b0ff; }\n    .orange { background-color: #ff9800; }\n    .gray { background-color: #9e9e9e; }\n\n    .label { font-size: 0.95rem; }\n\n    .clickable {\n      cursor: pointer;\n    }\n        </style>\n        \n        <div class="title">${this._("common.title")}</div>\n\n        ${t?`\n          <div class="status clickable" onclick="this.getRootNode().host._showMoreInfo('${t.entity_id}')">\n            <div class="status-icon ${u}"></div>\n            <div class="label">${h}</div>\n          </div>\n        `:""}\n\n        ${e?`\n          <div class="item clickable" onclick="this.getRootNode().host._showMoreInfo('${e.entity_id}')">\n            <div class="icon ${c}"></div>\n            <div class="label">${this._("common.litter")}: ${a}</div>\n          </div>\n        `:""}\n\n        ${i?`\n          <div class="item clickable" onclick="this.getRootNode().host._showMoreInfo('${i.entity_id}')">\n            <div class="icon ${d}"></div>\n            <div class="label">${this._("common.waste")}: ${l} ${this._("common.full")}</div>\n          </div>\n        `:""}\n\n        ${o?`\n          <div class="item clickable" onclick="this.getRootNode().host._showMoreInfo('${o.entity_id}')">\n            <div class="icon ${this._getHopperIcon(o.entity_id)}"></div>\n            <div class="label">${this._("common.hopper")}: ${this._getHopperState(o.entity_id)}</div>\n          </div>\n        `:""}\n\n        ${s.length>0?`\n          <div class="pet-weights">\n            ${s.map((t=>`\n              <div class="item clickable" onclick="this.getRootNode().host._showMoreInfo('${t.entity_id}')">\n                <div class="icon blue"></div>\n                <div class="label">${t.attributes?.friendly_name||this._("common.pet_weight")}: ${this.convertWeight(t.state||"")}</div>\n              </div>\n            `)).join("")}\n          </div>\n        `:""}\n      </ha-card>\n    `}}(async()=>{try{"loading"===document.readyState&&await new Promise((t=>{document.addEventListener("DOMContentLoaded",t)})),await(async()=>{try{console.debug("Defining custom elements..."),customElements.get("litter-robot4-card")?console.debug("litter-robot4-card element already defined"):(customElements.define("litter-robot4-card",ht),console.debug("litter-robot4-card element defined successfully")),console.debug("Card element defined successfully"),await dt()}catch(t){throw console.error("Error defining custom elements:",t),t}})(),console.debug("Litter-Robot 4 Card initialization complete")}catch(t){console.error("Failed to initialize Litter-Robot 4 Card:",t)}})();
//# sourceMappingURL=litter-robot4-card.js.map
