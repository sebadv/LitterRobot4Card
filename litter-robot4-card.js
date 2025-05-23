/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class n{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",_=u.reactiveElementPolyfillSupport,$=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!a(t,e),y={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);n?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=s,this[s]=n.fromAttribute(e,t.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??v)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==n||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[$("elementProperties")]=new Map,b[$("finalized")]=new Map,_?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,w=A.trustedTypes,E=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,x="?"+C,P=`<${x}>`,O=document,k=()=>O.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,M="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,H=/>/g,D=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,L=/"/g,I=/^(?:script|style|textarea|title)$/i,W=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),F=new WeakMap,q=O.createTreeWalker(O,129);function V(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===R?"!--"===l[1]?r=T:void 0!==l[1]?r=H:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=D):void 0!==l[3]&&(r=D):r===D?">"===l[0]?(r=n??R,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?D:'"'===l[3]?L:j):r===L||r===j?r=D:r===T||r===H?r=R:(r=D,n=void 0);const d=r===D&&t[e+1].startsWith("/>")?" ":"";o+=r===R?i+P:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+C+d):i+C+(-2===c?e:d)}return[V(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=J(t,e);if(this.el=K.createElement(l,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[o++],i=s.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?Y:"?"===r[1]?tt:"@"===r[1]?et:X}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],k()),q.nextNode(),a.push({type:2,index:++n});s.append(t[e],k())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:n}),t+=C.length-1}n++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===z)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=U(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Z(t,n._$AS(t,e.values),n,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);q.currentNode=s;let n=q.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new it(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=q.nextNode(),o++)}return q.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),U(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Q(this.O(k()),this.O(k()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Z(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==z,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Z(this,s[i+r],e,r),a===z&&(a=this._$AH[r]),o||=!U(a)||a!==this._$AH[r],a===B?t=B:t!==B&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class et extends X{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??B)===z)return;const i=this._$AH,s=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const st=A.litHtmlPolyfillSupport;st?.(K,Q),(A.litHtmlVersions??=[]).push("3.3.0");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ot extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new Q(e.insertBefore(k(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}}ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const rt=nt.litElementPolyfillSupport;var at,lt;rt?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.0"),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(at||(at={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(lt||(lt={}));var ct=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n};class ht extends ot{static get properties(){return{hass:{type:Object},_config:{type:Object}}}setConfig(t){this._config=t}render(){if(!this.hass||!this._config)return W``;const t=this._config.entities||[],e=this._config.pet_weight_entities||[];return W`
      <div class="entities">
        ${["Status Code Entity","Litter Level Entity","Waste Drawer Entity"].map(((e,i)=>W`
          <div class="entity">
            <ha-entity-picker
              .hass=${this.hass}
              .label=${e}
              .value=${t[i]||""}
              .includeDomains=${["sensor"]}
              .required=${!0}
              @value-changed=${t=>this._valueChanged(t,i)}
            ></ha-entity-picker>
          </div>
        `))}
        
        <div class="pet-weights">
          <div class="pet-weight-header">
            <span>Pet Weight Entities</span>
            <button class="add-pet-button" @click=${this._addPetWeight}>
              Add Pet
            </button>
          </div>
          ${e.map(((t,e)=>{var i,s,n;return W`
            <div class="entity">
              <ha-entity-picker
                .hass=${this.hass}
                .label=${t&&(null===(n=null===(s=null===(i=this.hass)||void 0===i?void 0:i.states[t])||void 0===s?void 0:s.attributes)||void 0===n?void 0:n.friendly_name)||"Pet Weight"}
                .value=${t}
                .includeDomains=${["sensor"]}
                @value-changed=${t=>this._petWeightChanged(t,e)}
              ></ha-entity-picker>
            </div>
          `}))}
        </div>
        
        <div class="option">
          <ha-switch
            .checked=${this._config.use_metric||!1}
            @change=${this._toggleMetric}
          ></ha-switch>
          <span>Use Metric Units (kg)</span>
        </div>
      </div>
    `}_valueChanged(t,e){if(!this._config)return;if(!t.target)return;const i=[...this._config.entities||[]];for(i[e]=t.detail.value;i.length<3;)i.push("");ct(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:i})})}_petWeightChanged(t,e){if(!this._config)return;if(!t.target)return;const i=[...this._config.pet_weight_entities||[]];t.detail.value?i[e]=t.detail.value:i.splice(e,1),ct(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{pet_weight_entities:i})})}_addPetWeight(){if(!this._config)return;const t=[...this._config.pet_weight_entities||[],""];ct(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{pet_weight_entities:t})})}_toggleMetric(t){const e=t.target;e&&this._config&&ct(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{use_metric:e.checked})})}}ht.styles=o`
    .entities {
      padding: 8px;
    }
    .entity {
      display: block;
      margin-bottom: 16px;
    }
    ha-entity-picker {
      display: block;
    }
    .option {
      padding: 8px;
      display: flex;
      align-items: center;
    }
    .option ha-switch {
      margin-right: 8px;
    }
    .pet-weights {
      border-top: 1px solid var(--divider-color, #e8e8e8);
      margin-top: 16px;
      padding-top: 16px;
    }
    .pet-weight-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }
    .add-pet-button {
      cursor: pointer;
      border: none;
      border-radius: 4px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      padding: 4px 8px;
    }
  `,console.info("%c LITTER-ROBOT-4-CARD %c 1.0.5 ","color: white; background: #4caf50; font-weight: 700;","color: #4caf50; background: white; font-weight: 700;");class dt extends ot{static async getConfigElement(){await customElements.whenDefined("litter-robot4-editor");return document.createElement("litter-robot4-editor")}static getStubConfig(){return{type:"custom:litter-robot4-card",entities:["","",""],pet_weight_entities:[]}}static get properties(){return{hass:{type:Object},_config:{type:Object}}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=Object.assign(Object.assign({},t),{entities:t.entities||[],pet_weight_entities:t.pet_weight_entities||[],use_metric:t.use_metric||!1})}getReadableStatus(t){var e;return null!==(e={br:"Bonnet Removed",ccc:"Clean Cycle Complete",ccp:"Clean Cycle In Progress",cd:"Clean Cycle Done",csf:"Cat Sensor Fault",csi:"Cat Sensor Interrupted",cst:"Cat Sensor Timing",df1:"Drawer Full (1)",df2:"Drawer Full (2)",dfs:"Drawer Full Sensor",dhf:"Drawer Hall Sensor Fault",dpf:"Drawer Position Fault",ec:"Error Condition",hpf:"Hall Position Fault",off:"Power Off",offline:"Offline",otf:"Over Torque Fault",p:"Paused",pd:"Pad Detect",pwrd:"Power Drained",pwru:"Power Up",rdy:"Ready",scf:"Sensor Contact Fault",sdf:"Sensor Drawer Fault",spf:"Sensor Position Fault"}[t])&&void 0!==e?e:`Unknown (${t})`}getStatusColor(t){return["br","df1","df2","dfs","csf","csi","cst","dhf","dpf","ec","hpf","scf","sdf","spf","otf"].includes(t)?"red":["p","pwru","pwrd","pd"].includes(t)?"yellow":["off","offline"].includes(t)?"gray":["rdy","ccc","cd"].includes(t)?"blue":["ccp"].includes(t)?"orange":"gray"}getWasteColor(t){return t<=70?"green":t<=90?"yellow":"red"}getLitterColor(t){return t>=70?"green":t>=40?"yellow":"red"}_showMoreInfo(t){if(!t)return;const e=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}convertWeight(t){var e;if(!t||isNaN(Number(t)))return"";const i=Number(t);return(null===(e=this._config)||void 0===e?void 0:e.use_metric)?`${(.453592*i).toFixed(1)} kg`:`${i} lbs`}render(){var t,e;if(!this.hass||!this._config)return W``;const[i,s,n]=(this._config.entities||[]).map((t=>t?this.hass.states[t]:void 0)),o=(this._config.pet_weight_entities||[]).map((t=>t?this.hass.states[t]:void 0)).filter((t=>void 0!==t)),r=Number(null==s?void 0:s.state),a=Number(null==n?void 0:n.state),l=isNaN(r)?"--":`${Math.round(r)}%`,c=isNaN(a)?"--":`${Math.round(a)}%`,h=isNaN(r)?"red":this.getLitterColor(r),d=isNaN(a)?"red":this.getWasteColor(a),p=this.getReadableStatus(null!==(t=null==i?void 0:i.state)&&void 0!==t?t:""),u=this.getStatusColor(null!==(e=null==i?void 0:i.state)&&void 0!==e?e:"");return W`
      <ha-card>
        <div class="title">Litter-Robot 4</div>

        <div class="status clickable" @click=${()=>this._showMoreInfo((null==i?void 0:i.entity_id)||"")}>
          <div class="status-icon ${u}"></div>
          <div class="label">${p}</div>
        </div>

        <div class="item clickable" @click=${()=>this._showMoreInfo((null==s?void 0:s.entity_id)||"")}>
          <div class="icon ${h}"></div>
          <div class="label">Litter: ${l}</div>
        </div>

        <div class="item clickable" @click=${()=>this._showMoreInfo((null==n?void 0:n.entity_id)||"")}>
          <div class="icon ${d}"></div>
          <div class="label">Waste: ${c} Full</div>
        </div>

        ${o.length>0?W`
          <div class="pet-weights">
            ${o.map((t=>{var e;return W`
              <div class="item clickable" @click=${()=>this._showMoreInfo((null==t?void 0:t.entity_id)||"")}>
                <div class="icon blue"></div>
                <div class="label">${(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.friendly_name)||"Pet"}: ${this.convertWeight((null==t?void 0:t.state)||"")}</div>
              </div>
            `}))}
          </div>
        `:""}
      </ha-card>
    `}}dt.styles=o`
    ha-card {
      padding: 16px;
      background: var(--card-background-color, white);
      color: var(--primary-text-color, white);
      border-radius: 12px;
      font-family: 'Segoe UI', sans-serif;
    }

    .title {
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 12px;
    }

    .status {
      display: flex;
      align-items: center;
      margin: 4px 0 12px 0;
    }

    .status-icon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-right: 8px;
    }

    .item {
      display: flex;
      align-items: center;
      margin: 6px 0;
    }

    .icon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-right: 8px;
    }

    .pet-weights {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
    }

    .green { background-color: #4caf50; }
    .yellow { background-color: #ffc107; }
    .red { background-color: #f44336; }
    .blue { background-color: #00b0ff; }
    .orange { background-color: #ff9800; }
    .gray { background-color: #9e9e9e; }

    .label { font-size: 0.95rem; }

    .clickable {
      cursor: pointer;
    }
  `,customElements.define("litter-robot4-card",dt),customElements.define("litter-robot4-editor",ht),window.customCards=window.customCards||[],window.customCards.push({type:"litter-robot4-card",name:"Litter-Robot 4 Card",description:"A custom card to show Litter-Robot 4 status",preview:!0});
