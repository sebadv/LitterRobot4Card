/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,g=p.trustedTypes,f=g?g.emptyScript:"",_=p.reactiveElementPolyfillSupport,m=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!a(t,e),y={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...d(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s,this[s]=o.fromAttribute(e,t.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??v)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,_?.({ReactiveElement:b}),(p.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=w.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+S,x=`<${P}>`,O=document,k=()=>O.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,T="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,M=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,j=/"/g,F=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),B=new WeakMap,V=O.createTreeWalker(O,129);function q(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=L;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===L?"!--"===l[1]?r=R:void 0!==l[1]?r=M:void 0!==l[2]?(F.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=D):void 0!==l[3]&&(r=D):r===D?">"===l[0]?(r=o??L,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?D:'"'===l[3]?j:H):r===j||r===H?r=D:r===R||r===M?r=L:(r=D,o=void 0);const h=r===D&&t[e+1].startsWith("/>")?" ":"";n+=r===L?i+x:c>=0?(s.push(a),i.slice(0,c)+E+i.slice(c)+S+h):i+S+(-2===c?e:h)}return[q(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,c]=G(t,e);if(this.el=K.createElement(l,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=V.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=c[n++],i=s.getAttribute(t).split(S),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?Y:"?"===r[1]?tt:"@"===r[1]?et:X}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(F.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],k()),V.nextNode(),a.push({type:2,index:++o});s.append(t[e],k())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){if(e===z)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=U(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=J(t,o._$AS(t,e.values),o,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);V.currentNode=s;let o=V.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new it(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=V.nextNode(),n++)}return V.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),U(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(k()),this.O(k()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=J(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==z,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=J(this,s[i+r],e,r),a===z&&(a=this._$AH[r]),n||=!U(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??W)===z)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(K,Q),(w.litHtmlVersions??=[]).push("3.3.0");const ot=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class nt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(k(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}}nt._$litElement$=!0,nt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:nt});const rt=ot.litElementPolyfillSupport;var at,lt;rt?.({LitElement:nt}),(ot.litElementVersions??=[]).push("4.2.0"),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(at||(at={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(lt||(lt={}));var ct=function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,t.dispatchEvent(o),o};class dt extends nt{static get properties(){return{hass:{type:Object},_config:{type:Object}}}setConfig(t){this._config=t}render(){if(!this.hass||!this._config)return I``;const t=this._config.entities||[],e=this._config.pet_weight_entities||[];return I`
      <div class="entities">
        ${["Status Code Entity","Litter Level Entity","Waste Drawer Entity"].map(((e,i)=>I`
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
          ${e.map(((t,e)=>{var i,s,o;return I`
            <div class="entity">
              <ha-entity-picker
                .hass=${this.hass}
                .label=${t&&(null===(o=null===(s=null===(i=this.hass)||void 0===i?void 0:i.states[t])||void 0===s?void 0:s.attributes)||void 0===o?void 0:o.friendly_name)||"Pet Weight"}
                .value=${t}
                .includeDomains=${["sensor"]}
                @value-changed=${t=>this._petWeightChanged(t,e)}
              ></ha-entity-picker>
            </div>
          `}))}
        </div>
        
        <div class="row">
          <ha-select
            .label=${"Language"}
            .value=${this._config.language||"en"}
            @selected=${this._languageChanged}
          >
            <ha-list-item value="en">English</ha-list-item>
            <ha-list-item value="es">Español</ha-list-item>
            <ha-list-item value="nl">Nederlands</ha-list-item>
            <ha-list-item value="fr">Français</ha-list-item>
          </ha-select>

          <ha-formfield .label=${"Use Metric Units"}>
            <ha-switch
              .checked=${this._config.use_metric||!1}
              @change=${this._metricChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `}_valueChanged(t,e){if(!this._config)return;if(!t.target)return;const i=[...this._config.entities||[]];for(i[e]=t.detail.value;i.length<3;)i.push("");ct(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{entities:i})})}_petWeightChanged(t,e){if(!this._config)return;if(!t.target)return;const i=[...this._config.pet_weight_entities||[]];t.detail.value?i[e]=t.detail.value:i.splice(e,1),ct(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{pet_weight_entities:i})})}_addPetWeight(){if(!this._config)return;const t=[...this._config.pet_weight_entities||[],""];ct(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{pet_weight_entities:t})})}_languageChanged(t){this._config&&t.target&&this._updateConfig({language:t.target.value})}_metricChanged(t){this._config&&t.target&&this._updateConfig({use_metric:t.target.checked})}_updateConfig(t){const e=Object.assign(Object.assign({},this._config),t),i=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(i)}}dt.styles=n`
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
    .row {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;
    }
    ha-select {
      width: 100%;
    }
  `;var ht={title:"Litter-Robot 4",litter:"Litter",waste:"Waste",full:"Full",pet_weight:"Pet Weight"},ut={br:"Bonnet Removed",ccc:"Clean Cycle Complete",ccp:"Clean Cycle In Progress",cd:"Clean Cycle Done",csf:"Cat Sensor Fault",csi:"Cat Sensor Interrupted",cst:"Cat Sensor Timing",df1:"Drawer Full (1)",df2:"Drawer Full (2)",dfs:"Drawer Full Sensor",dhf:"Drawer Hall Sensor Fault",dpf:"Drawer Position Fault",ec:"Error Condition",hpf:"Hall Position Fault",off:"Power Off",offline:"Offline",otf:"Over Torque Fault",p:"Paused",pd:"Pad Detect",pwrd:"Power Drained",pwru:"Power Up",rdy:"Ready",scf:"Sensor Contact Fault",sdf:"Sensor Drawer Fault",spf:"Sensor Position Fault"},pt={status_entity:"Status Entity",litter_entity:"Litter Level Entity",waste_entity:"Waste Drawer Entity",pet_weight_entity:"Pet Weight Entity",language:"Language",use_metric:"Use Metric Units"},gt={common:ht,status:ut,editor:pt},ft={title:"Litter-Robot 4",litter:"Arena",waste:"Residuos",full:"Lleno",pet_weight:"Peso de Mascota"},_t={br:"Cubierta Removida",ccc:"Ciclo de Limpieza Completo",ccp:"Ciclo de Limpieza en Progreso",cd:"Ciclo de Limpieza Terminado",csf:"Fallo del Sensor de Gato",csi:"Sensor de Gato Interrumpido",cst:"Tiempo del Sensor de Gato",df1:"Cajón Lleno (1)",df2:"Cajón Lleno (2)",dfs:"Sensor de Cajón Lleno",dhf:"Fallo del Sensor Hall del Cajón",dpf:"Fallo de Posición del Cajón",ec:"Condición de Error",hpf:"Fallo de Posición Hall",off:"Apagado",offline:"Desconectado",otf:"Fallo de Sobretorque",p:"Pausado",pd:"Detección de Almohadilla",pwrd:"Batería Agotada",pwru:"Encendiendo",rdy:"Listo",scf:"Fallo de Contacto del Sensor",sdf:"Fallo del Sensor del Cajón",spf:"Fallo de Posición del Sensor"},mt={status_entity:"Entidad de Estado",litter_entity:"Entidad de Nivel de Arena",waste_entity:"Entidad del Cajón de Residuos",pet_weight_entity:"Entidad de Peso de Mascota",language:"Idioma",use_metric:"Usar Unidades Métricas"},$t={common:ft,status:_t,editor:mt},vt={title:"Litter-Robot 4",litter:"Kattengrit",waste:"Afval",full:"Vol",pet_weight:"Huisdier Gewicht"},yt={br:"Kap Verwijderd",ccc:"Reinigingscyclus Voltooid",ccp:"Reinigingscyclus Bezig",cd:"Reinigingscyclus Klaar",csf:"Katsensor Fout",csi:"Katsensor Onderbroken",cst:"Katsensor Timing",df1:"Lade Vol (1)",df2:"Lade Vol (2)",dfs:"Lade Vol Sensor",dhf:"Lade Hall Sensor Fout",dpf:"Lade Positie Fout",ec:"Foutconditie",hpf:"Hall Positie Fout",off:"Uitgeschakeld",offline:"Offline",otf:"Overbelasting Fout",p:"Gepauzeerd",pd:"Pad Gedetecteerd",pwrd:"Batterij Leeg",pwru:"Opstarten",rdy:"Gereed",scf:"Sensor Contact Fout",sdf:"Sensor Lade Fout",spf:"Sensor Positie Fout"},bt={status_entity:"Status Entiteit",litter_entity:"Kattengrit Niveau Entiteit",waste_entity:"Afval Lade Entiteit",pet_weight_entity:"Huisdier Gewicht Entiteit",language:"Taal",use_metric:"Gebruik Metrische Eenheden"},wt={common:vt,status:yt,editor:bt},At={title:"Litter-Robot 4",litter:"Litière",waste:"Déchets",full:"Plein",pet_weight:"Poids de l'Animal"},Ct={br:"Capot Retiré",ccc:"Cycle de Nettoyage Terminé",ccp:"Cycle de Nettoyage en Cours",cd:"Cycle de Nettoyage Terminé",csf:"Défaut Capteur Chat",csi:"Capteur Chat Interrompu",cst:"Temporisation Capteur Chat",df1:"Tiroir Plein (1)",df2:"Tiroir Plein (2)",dfs:"Capteur Tiroir Plein",dhf:"Défaut Capteur Hall Tiroir",dpf:"Défaut Position Tiroir",ec:"Condition d'Erreur",hpf:"Défaut Position Hall",off:"Éteint",offline:"Hors Ligne",otf:"Défaut Surcouple",p:"En Pause",pd:"Détection Tapis",pwrd:"Batterie Épuisée",pwru:"Démarrage",rdy:"Prêt",scf:"Défaut Contact Capteur",sdf:"Défaut Capteur Tiroir",spf:"Défaut Position Capteur"},Et={status_entity:"Entité État",litter_entity:"Entité Niveau Litière",waste_entity:"Entité Tiroir Déchets",pet_weight_entity:"Entité Poids Animal",language:"Langue",use_metric:"Utiliser Unités Métriques"},St={common:At,status:Ct,editor:Et};const Pt={en:Object.freeze({__proto__:null,common:ht,status:ut,editor:pt,default:gt}),es:Object.freeze({__proto__:null,common:ft,status:_t,editor:mt,default:$t}),nl:Object.freeze({__proto__:null,common:vt,status:yt,editor:bt,default:wt}),fr:Object.freeze({__proto__:null,common:At,status:Ct,editor:Et,default:St})};console.debug("Registering Litter-Robot 4 Card..."),console.info("%c LITTER-ROBOT-4-CARD %c v1.0.5 ","color: white; background: #4caf50; font-weight: 700;","color: #4caf50; background: white; font-weight: 700;");try{console.debug("Adding to custom cards list..."),window.customCards=window.customCards||[],window.customCards.push({type:"litter-robot4-card",name:"Litter-Robot 4 Card",description:"A custom card to show Litter-Robot 4 status",preview:!0}),console.debug("Added to custom cards list successfully")}catch(t){console.error("Error adding to custom cards list:",t)}class xt extends nt{static async getConfigElement(){await customElements.whenDefined("litter-robot4-editor");return document.createElement("litter-robot4-editor")}static getStubConfig(){return{type:"custom:litter-robot4-card",entities:["","",""],pet_weight_entities:[],language:"en"}}static get properties(){return{hass:{type:Object},_config:{type:Object}}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config=Object.assign(Object.assign({},t),{entities:t.entities||[],pet_weight_entities:t.pet_weight_entities||[],use_metric:t.use_metric||!1,language:t.language||"en"})}_(t){var e;const i=(null===(e=this._config)||void 0===e?void 0:e.language)||"en",s=t.split(".");let o=Pt[i];for(const e of s){if(!o||"object"!=typeof o)return t;o=o[e]}return o||t}getReadableStatus(t){return this._(`status.${t}`)||`Unknown (${t})`}getStatusColor(t){return["br","df1","df2","dfs","csf","csi","cst","dhf","dpf","ec","hpf","scf","sdf","spf","otf"].includes(t)?"red":["p","pwru","pwrd","pd"].includes(t)?"yellow":["off","offline"].includes(t)?"gray":["rdy","ccc","cd"].includes(t)?"blue":["ccp"].includes(t)?"orange":"gray"}getWasteColor(t){return t<=70?"green":t<=90?"yellow":"red"}getLitterColor(t){return t>=70?"green":t>=40?"yellow":"red"}_showMoreInfo(t){if(!t)return;const e=new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}convertWeight(t){var e;if(!t||isNaN(Number(t)))return"";const i=Number(t);return(null===(e=this._config)||void 0===e?void 0:e.use_metric)?`${(.453592*i).toFixed(1)} kg`:`${i} lbs`}render(){var t,e;if(!this.hass||!this._config)return I``;const[i,s,o]=(this._config.entities||[]).map((t=>t?this.hass.states[t]:void 0)),n=(this._config.pet_weight_entities||[]).map((t=>t?this.hass.states[t]:void 0)).filter((t=>void 0!==t)),r=Number(null==s?void 0:s.state),a=Number(null==o?void 0:o.state),l=isNaN(r)?"--":`${Math.round(r)}%`,c=isNaN(a)?"--":`${Math.round(a)}%`,d=isNaN(r)?"red":this.getLitterColor(r),h=isNaN(a)?"red":this.getWasteColor(a),u=this.getReadableStatus(null!==(t=null==i?void 0:i.state)&&void 0!==t?t:""),p=this.getStatusColor(null!==(e=null==i?void 0:i.state)&&void 0!==e?e:"");return I`
      <ha-card>
        <div class="title">${this._("common.title")}</div>

        <div class="status clickable" @click=${()=>this._showMoreInfo((null==i?void 0:i.entity_id)||"")}>
          <div class="status-icon ${p}"></div>
          <div class="label">${u}</div>
        </div>

        <div class="item clickable" @click=${()=>this._showMoreInfo((null==s?void 0:s.entity_id)||"")}>
          <div class="icon ${d}"></div>
          <div class="label">${this._("common.litter")}: ${l}</div>
        </div>

        <div class="item clickable" @click=${()=>this._showMoreInfo((null==o?void 0:o.entity_id)||"")}>
          <div class="icon ${h}"></div>
          <div class="label">${this._("common.waste")}: ${c} ${this._("common.full")}</div>
        </div>

        ${n.length>0?I`
          <div class="pet-weights">
            ${n.map((t=>{var e;return I`
              <div class="item clickable" @click=${()=>this._showMoreInfo((null==t?void 0:t.entity_id)||"")}>
                <div class="icon blue"></div>
                <div class="label">${(null===(e=null==t?void 0:t.attributes)||void 0===e?void 0:e.friendly_name)||this._("common.pet_weight")}: ${this.convertWeight((null==t?void 0:t.state)||"")}</div>
              </div>
            `}))}
          </div>
        `:""}
      </ha-card>
    `}}xt.styles=n`
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
  `;try{console.debug("Defining custom elements..."),customElements.define("litter-robot4-card",xt),customElements.define("litter-robot4-editor",dt),console.debug("Custom elements defined successfully")}catch(t){console.error("Error defining custom elements:",t)}
