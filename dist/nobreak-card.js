function t(t,e,i,s){var a,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}};const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:n,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,_=p.trustedTypes,g=_?_.emptyScript:"",b=p.reactiveElementPolyfillSupport,m=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!n(t,e),v={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:a}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);a?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...c(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),a=e.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=s;const o=a.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i,s=!1,a){if(void 0!==t){const o=this.constructor;if(!1===s&&(a=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??y)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:a},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==a||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[m("elementProperties")]=new Map,w[m("finalized")]=new Map,b?.({ReactiveElement:w}),(p.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,x=t=>t,k=$.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+E,C=`<${M}>`,N=document,O=()=>N.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,T="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,D=/>/g,H=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,z=/"/g,I=/^(?:script|style|textarea|title)$/i,L=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),q=L(1),F=L(2),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),G=new WeakMap,K=N.createTreeWalker(N,129);function Z(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,s=[];let a,o=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let n,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===R?"!--"===l[1]?r=j:void 0!==l[1]?r=D:void 0!==l[2]?(I.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=a??R,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,n=l[1],r=void 0===l[3]?H:'"'===l[3]?z:B):r===z||r===B?r=H:r===j||r===D?r=R:(r=H,a=void 0);const d=r===H&&t[e+1].startsWith("/>")?" ":"";o+=r===R?i+C:h>=0?(s.push(n),i.slice(0,h)+S+i.slice(h)+E+d):i+E+(-2===h?e:d)}return[Z(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,o=0;const r=t.length-1,n=this.parts,[l,h]=J(t,e);if(this.el=Q.createElement(l,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&n.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=h[o++],i=s.getAttribute(t).split(E),r=/([.?@])?(.*)/.exec(e);n.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?it:"?"===r[1]?st:"@"===r[1]?at:et}),s.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:a}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(E),e=t.length-1;if(e>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),K.nextNode(),n.push({type:2,index:++a});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===M)n.push({type:2,index:a});else{let t=-1;for(;-1!==(t=s.data.indexOf(E,t+1));)n.push({type:7,index:a}),t+=E.length-1}a++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,s){if(e===W)return e;let a=void 0!==s?i._$Co?.[s]:i._$Cl;const o=P(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=a:i._$Cl=a),void 0!==a&&(e=X(t,a._$AS(t,e.values),a,s)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??N).importNode(e,!0);K.currentNode=s;let a=K.nextNode(),o=0,r=0,n=i[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new tt(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new ot(a,this,t)),this._$AV.push(e),n=i[++r]}o!==n?.index&&(a=K.nextNode(),o++)}return K.currentNode=N,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),P(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Y(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Q(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const a of t)s===e.length?e.push(i=new tt(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,a){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const a=this.strings;let o=!1;if(void 0===a)t=X(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==W,o&&(this._$AH=t);else{const s=t;let r,n;for(t=a[0],r=0;r<a.length-1;r++)n=X(this,s[i+r],e,r),n===W&&(n=this._$AH[r]),o||=!P(n)||n!==this._$AH[r],n===V?t=V:t!==V&&(t+=(n??"")+a[r+1]),this._$AH[r]=n}o&&!s&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class it extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class st extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class at extends et{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??V)===W)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const rt=$.litHtmlPolyfillSupport;rt?.(Q,tt),($.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;class lt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let a=s._$litPart$;if(void 0===a){const t=i?.renderBefore??null;s._$litPart$=a=new tt(e.insertBefore(O(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}lt._$litElement$=!0,lt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:lt});const ht=nt.litElementPolyfillSupport;ht?.({LitElement:lt}),(nt.litElementVersions??=[]).push("4.2.2");const ct={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:y},dt=(t=ct,e,i)=>{const{kind:s,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),o.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,a,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const a=this[s];e.call(this,i),this.requestUpdate(s,a,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function ut(t){return(e,i)=>"object"==typeof i?dt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return ut({...t,state:!0,attribute:!1})}const _t="nobreak-card",gt="nobreak",bt=["nobreak","nut"],mt={status:["sensor","nut","ups_status"],status_display:["sensor","nut","ups_status_display"],charge:["sensor","nut","battery_charge"],runtime:["sensor","nut","battery_runtime"],load:["sensor","nut","ups_load"],input_voltage:["sensor","nut","input_voltage"],input_nominal:["sensor","nut","input_voltage_nominal"],battery_voltage:["sensor","nut","battery_voltage"],transfer_reason:["sensor","nut","input_transfer_reason"],test_result:["sensor","nut","ups_test_result"],nominal_power:["sensor","nut","ups_realpower_nominal"],timer_shutdown:["sensor","nut","ups_timer_shutdown"],utility:["binary_sensor","nobreak","rede_eletrica"],low_battery:["binary_sensor","nobreak","bateria_fraca"],charging:["binary_sensor","nobreak","carregando"],replace_battery:["binary_sensor","nobreak","substituir_bateria"],overload:["binary_sensor","nobreak","sobrecarga"],avr:["binary_sensor","nobreak","avr"],shutdown_pending:["binary_sensor","nobreak","desligamento_agendado"],power:["sensor","nobreak","potencia_de_saida"],energy:["sensor","nobreak","energia_de_saida"],outages:["sensor","nobreak","quedas_de_energia"],last_outage:["sensor","nobreak","ultima_queda"],last_outage_duration:["sensor","nobreak","duracao_da_ultima_queda"],battery_time:["sensor","nobreak","tempo_na_bateria"],last_test:["sensor","nobreak","ultimo_autoteste"],battery_age:["sensor","nobreak","idade_da_bateria"],firmware:["sensor","nobreak","firmware"],battery_date:["date","nobreak","data_da_bateria"],sensitivity:["select","nobreak","sensibilidade"],beeper:["switch","nobreak","alarme_sonoro"],transfer_low:["number","nobreak","transferencia_baixa"],transfer_high:["number","nobreak","transferencia_alta"],health:["sensor","nobreak","saude_da_bateria"],real_runtime:["sensor","nobreak","autonomia_real"],energy_today:["sensor","nobreak","energia_hoje"],cost_today:["sensor","nobreak","custo_hoje"],cost_month:["sensor","nobreak","custo_do_mes"],v_min:["sensor","nobreak","tensao_minima_hoje"],v_max:["sensor","nobreak","tensao_maxima_hoje"],out_of_range:["sensor","nobreak","tempo_fora_da_faixa_hoje"],outages_today:["sensor","nobreak","quedas_hoje"],shedding:["switch","nobreak","economia_automatica"],quick_test:["button","nobreak","autoteste_rapido"],deep_test:["button","nobreak","autoteste_completo"],stop_test:["button","nobreak","parar_autoteste"],panel_test:["button","nobreak","testar_painel"],mute:["button","nobreak","silenciar_alarme"],cancel_shutdown:["button","nobreak","cancelar_desligamento"]},ft=new Set(["low_battery","overload","shutdown"]),yt=new Set(["on_battery","low_battery","shutdown"]),vt=new Set(["unavailable","unknown",""]);function wt(t,e){const i={};if(e.device){const s=function(t,e){const i=t?.devices??{},s=new Set([e]),a=i[e]?.via_device_id;a&&s.add(a);for(const t of Object.values(i))!t.via_device_id||t.via_device_id!==e&&t.via_device_id!==a||s.add(t.id);return s}(t,e.device);for(const e of Object.values(t?.entities??{})){if(!e.platform||!bt.includes(e.platform)||!s.has(e.device_id??""))continue;const t=e.entity_id.split(".")[0];for(const[s,[a,o,r]]of Object.entries(mt))a!==t||o!==e.platform||r!==e.translation_key||i[s]||(i[s]=e.entity_id)}}return{...i,...e.entities??{}}}function $t(t){return new Set((t??"").toUpperCase().split(/\s+/).filter(Boolean))}function xt(t,e){const i=i=>e[i]?t?.states[e[i]]?.state:void 0,s=t=>"on"===i(t),a=i("status"),o=$t(vt.has(a??"")?void 0:a),r=i("utility");if(!o.size&&(void 0===r||vt.has(r)))return"unavailable";if(s("shutdown_pending")||o.has("FSD"))return"shutdown";if(s("overload")||o.has("OVER"))return"overload";const n=o.has("OB")||"off"===r;return"In progress"===i("test_result")||o.has("CAL")||o.has("TEST")?"testing":n&&(s("low_battery")||o.has("LB"))?"low_battery":n?"on_battery":s("charging")||o.has("CHRG")?"charging":"online"}function kt(t){const e=Math.max(0,Math.round(t));if(e<60)return`${e} s`;const i=Math.round(e/60);if(i<60)return`${i} min`;const s=Math.floor(i/60);return s<48?i%60?`${s} h ${String(i%60).padStart(2,"0")} min`:`${s} h`:`${Math.floor(s/24)} d ${s%24} h`}function At(t,e,i,s){const a=e=>(e?t[e]??[]:[]).map(t=>[Math.max(i,t.lu),Number(t.s)]).filter(([,t])=>Number.isFinite(t)),o=[];let r=null;for(const s of e.utility?t[e.utility]??[]:[]){const t=Math.max(i,s.lu);"off"===s.s&&null===r?r=t:"off"!==s.s&&null!==r&&(o.push([r,t]),r=null)}return null!==r&&o.push([r,s]),{start:i,end:s,power:a(e.power),voltage:a(e.voltage),outages:o}}function St(t,e,i,s,a){if(!t.length)return"";const o=t.map(([,t])=>t);let r=Math.min(...o),n=Math.max(...o);n-r<1&&(r-=1,n+=1);const l=.12*(n-r);r-=l,n+=l;const h=t=>(t-e)/(i-e)*s,c=t=>a-(t-r)/(n-r)*a,d=[];return t.forEach(([e,i],s)=>{s&&d.push(`${h(e).toFixed(1)},${c(t[s-1][1]).toFixed(1)}`),d.push(`${h(e).toFixed(1)},${c(i).toFixed(1)}`)}),d.push(`${s},${c(t[t.length-1][1]).toFixed(1)}`),d.join(" ")}var Et={common:{name:"Card do Nobreak",description:"Card do nobreak para a integração Nobreak (NUT): desenho animado, bateria, carga, rede, histórico de quedas, autotestes e ajustes.",invalid_config:"Configuração inválida",more_info:"Mais informações",no_device:"Escolha o dispositivo Nobreak no editor do card."},status:{online:"Na rede elétrica",charging:"Carregando",on_battery:"Na bateria",low_battery:"Bateria fraca",testing:"Autoteste em andamento",overload:"Sobrecarga",shutdown:"Desligamento agendado",unavailable:"Indisponível"},sub:{since:"há {time}",runtime:"{time} de autonomia"},stat:{battery:"Bateria",load:"Carga",utility:"Rede",no_utility:"Sem rede",range:"{low}–{high} V",of_nominal:"{percent}% · {nominal} W",runtime:"{time} restantes",real_runtime:"{time} reais"},history:{outages:"Quedas",none:"nenhuma ainda",ago:"{time}",battery_time:"Total na bateria",last_test:"Autoteste",never:"nunca",age:"Idade da bateria",age_value:"{y} a {m} m",age_months:"{m} meses",age_days:"{d} dias",no_date:"definir data",outages_n:"{n} quedas",no_outages:"Nenhuma queda",last_outage:"última {time}",test_result:"Autoteste {result}",not_measured:"Sem medição",health_pending:"Saúde · na próxima queda",health:"Saúde da bateria",health_runtime:"Saúde · {time} reais",grid_ok:"Rede hoje · na faixa",grid_out:"Rede hoje · {time} fora"},result:{"Done and passed":"aprovado","Done and warning":"com alerta","Done and error":"reprovado",Aborted:"cancelado","In progress":"em andamento","No test initiated":"nenhum"},tip:{firmware:"Firmware",sensitivity:"Sensibilidade",beeper_off:"Alarme desativado",avr:"Regulação de tensão ativa",replace:"Substituir bateria",energy:"Energia de saída",energy_today:"Energia de saída e custo hoje"},sensitivity:{low:"Baixa",medium:"Média",high:"Alta"},action:{quick_test:"Autoteste",deep_test:"Autoteste completo (descarrega a bateria)",stop_test:"Parar teste",panel_test:"Testar painel",mute:"Silenciar alarme",beeper_on:"Ativar alarme",beeper_off:"Desativar alarme",cancel_shutdown:"Cancelar desligamento",sensitivity:"Sensibilidade",confirm_deep:"Rodar o autoteste completo? O nobreak fica na bateria até quase esvaziar.",shedding_on:"Ativar economia automática",shedding_off:"Desativar economia automática"},editor:{device:"Dispositivo Nobreak",name:"Nome",show_name:"Mostrar nome",show_status:"Mostrar status",show_history:"Mostrar histórico",show_toolbar:"Mostrar barra de ações",compact_view:"Visão compacta",show_graph:"Mostrar gráficos de 24 h"},graph:{power:"Potência de saída",voltage:"Tensão da rede",last_24h:"Últimas 24 h",outages:"{n} queda(s)"}};const Mt={en:{common:{name:"Nobreak Card",description:"UPS card for the Nobreak (NUT) integration: animated drawing, battery, load, utility, outage history, self-tests and settings.",invalid_config:"Invalid configuration",more_info:"More info",no_device:"Pick the Nobreak device in the card editor."},status:{online:"On utility power",charging:"Charging",on_battery:"On battery",low_battery:"Low battery",testing:"Self-test running",overload:"Overload",shutdown:"Shutdown scheduled",unavailable:"Unavailable"},sub:{since:"for {time}",runtime:"{time} of runtime"},stat:{battery:"Battery",load:"Load",utility:"Utility",no_utility:"No power",range:"{low}–{high} V",of_nominal:"{percent}% · {nominal} W",runtime:"{time} left",real_runtime:"{time} real"},history:{outages:"Outages",none:"none yet",ago:"{time}",battery_time:"Total on battery",last_test:"Self-test",never:"never",age:"Battery age",age_value:"{y} y {m} m",age_months:"{m} m",age_days:"{d} d",no_date:"set date",outages_n:"{n} outages",no_outages:"No outages",last_outage:"last {time}",test_result:"Self-test {result}",not_measured:"Not measured",health_pending:"Health · next outage",health:"Battery health",health_runtime:"Health · {time} real",grid_ok:"Grid today · in band",grid_out:"Grid today · {time} out"},result:{"Done and passed":"passed","Done and warning":"warning","Done and error":"failed",Aborted:"aborted","In progress":"running","No test initiated":"none"},tip:{firmware:"Firmware",sensitivity:"Sensitivity",beeper_off:"Alarm disabled",avr:"Voltage regulation active",replace:"Replace battery",energy:"Output energy",energy_today:"Output energy and cost today"},sensitivity:{low:"Low",medium:"Medium",high:"High"},action:{quick_test:"Self-test",deep_test:"Deep self-test (discharges the battery)",stop_test:"Stop test",panel_test:"Test front panel",mute:"Mute alarm",beeper_on:"Enable alarm",beeper_off:"Disable alarm",cancel_shutdown:"Cancel shutdown",sensitivity:"Sensitivity",confirm_deep:"Run a deep self-test? The UPS runs on battery until it is almost empty.",shedding_on:"Enable automatic load shedding",shedding_off:"Disable automatic load shedding"},editor:{device:"Nobreak device",name:"Name",show_name:"Show name",show_status:"Show status",show_history:"Show history",show_toolbar:"Show toolbar",compact_view:"Compact view",show_graph:"Show 24 h graphs"},graph:{power:"Output power",voltage:"Utility voltage",last_24h:"Last 24 h",outages:"{n} outage(s)"}},"pt-BR":Et,pt:Et};function Ct(t,e){let i=t;for(const t of e){if(!i||"object"!=typeof i||!(t in i))return;i=i[t]}return"string"==typeof i?i:void 0}function Nt(t,e="en",i={}){const s=t.split(".");return(Ct(Mt[e],s)??Ct(Mt[e.split("-")[0]],s)??Ct(Mt.en,s)??t).replace(/\{(\w+)\}/g,(t,e)=>e in i?String(i[e]):`{${e}}`)}const Ot=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new o(i,t,s)})`
  :host {
    --bac-background: var(--ha-card-background, var(--card-background-color, transparent));
    --bac-primary-text-color: var(--primary-text-color);
    --bac-secondary-text-color: var(--secondary-text-color);
    --bac-divider-color: var(--entities-divider-color, var(--divider-color));
    --bac-ok: var(--success-color, #43a047);
    --bac-warning: var(--warning-color, #ffa600);
    --bac-error: var(--error-color, #db4437);
    --bac-accent: #16a34a;
    --bac-spacing: 10px;
    /* illustration palette, shared with the vacuum / printer / MiSTer cards */
    --bac-body: #f6f7f8;
    --bac-body-2: #e4e6e9;
    --bac-metal: #c9cdd2;
    --bac-metal-hi: #eceef0;
    --bac-metal-2: #a9afb6;
    --bac-cap: #6b7178;
    --bac-outline: #9aa0a6;
    --bac-panel: #2b2f36;
    --bac-plate: #1f2226;
    --bac-gold: #c9a23c;
    --bac-light: #fff4c8;
    --bac-flange: #eef0f2;
    --bac-filament-unknown: #b8bcc2;
    --bac-perf: rgba(255, 255, 255, 0.55);
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  :host([dark-mode]) {
    --bac-body: #4a4f58;
    --bac-body-2: #3a3f47;
    --bac-metal: #5d636c;
    --bac-metal-hi: #7a8089;
    --bac-metal-2: #474c54;
    --bac-cap: #2a2e34;
    --bac-outline: #6b7178;
    --bac-panel: #15171b;
    --bac-plate: #121417;
    --bac-flange: #5a5f68;
    --bac-perf: rgba(0, 0, 0, 0.3);
  }

  ha-card {
    background: var(--bac-background);
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    overflow: hidden;
  }
  .preview {
    position: relative;
    text-align: center;
  }
  .preview.not-available {
    filter: grayscale(1);
  }

  /* ── header ─────────────────────────────────────────────────────────── */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .tips {
    display: flex;
    gap: var(--bac-spacing);
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    padding: var(--bac-spacing);
    color: var(--bac-secondary-text-color);
    font-size: 0.95rem;
  }
  .tip {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    line-height: 1;
    white-space: nowrap;
  }
  .tip ha-icon {
    --mdc-icon-size: 18px;
  }
  .tip.alert {
    color: var(--bac-error);
  }
  .tip.update {
    color: var(--bac-accent);
  }
  .more-info {
    color: var(--bac-secondary-text-color);
    margin: 2px;
  }

  .pill {
    position: absolute;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px 7px;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--bac-primary-text-color);
    background: var(--bac-background, var(--card-background-color));
    border: 1px solid var(--bac-divider-color);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    white-space: nowrap;
  }
  .pill ha-icon {
    --mdc-icon-size: 13px;
  }
  .pill ha-icon {
    --mdc-icon-size: 13px;
  }
  /* ── metadata ───────────────────────────────────────────────────────── */
  .metadata {
    margin: var(--bac-spacing) auto;
  }
  .name {
    text-align: center;
    font-weight: bold;
    color: var(--bac-primary-text-color);
    font-size: 16px;
  }
  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: var(--bac-secondary-text-color);
  }
  .status.error,
  .status.failed {
    color: var(--bac-error);
  }
  .status.paused {
    color: var(--bac-warning);
  }

  /* ── stats ──────────────────────────────────────────────────────────── */
  .stats {
    border-top: 1px solid var(--bac-divider-color);
    display: flex;
    justify-content: space-evenly;
    color: var(--bac-secondary-text-color);
  }
  .stats-block {
    padding: var(--bac-spacing) 4px;
    text-align: center;
    border-right: 1px solid var(--bac-divider-color);
    flex: 1 1 0;
    min-width: 0;
  }
  .stats-block:last-of-type {
    border-right: 0;
  }
  .stats-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }
  .stats-value {
    cursor: pointer;
    font-size: 20px;
    color: var(--bac-primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .stats-value.hot {
    color: #e8701a;
  }
  .stats-subtitle {
    font-size: 0.82rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  /* ── toolbar ────────────────────────────────────────────────────────── */
  .toolbar {
    min-height: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px;
    border-top: 1px solid var(--bac-divider-color);
  }
  .toolbar .fill-gap {
    flex-grow: 1;
  }
  .toolbar ha-icon-button {
    color: var(--bac-secondary-text-color);
    width: 44px;
    height: 44px;
    --mdc-icon-button-size: 44px;
  }
  .toolbar ha-icon-button ha-icon {
    display: flex;
  }
  .toolbar ha-icon-button.active {
    color: var(--bac-warning);
  }
  .toolbar .text-button {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 0;
    background: transparent;
    color: var(--bac-secondary-text-color);
    font: inherit;
    padding: 12px 10px;
    cursor: pointer;
    border-radius: 8px;
  }
  .toolbar .text-button:hover {
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
  }
  .toolbar .text-button.danger {
    color: var(--bac-error);
  }
  .toolbar .text-button ha-icon {
    --mdc-icon-size: 20px;
  }

  .tip.warn {
    color: var(--bac-warning);
  }
  .empty {
    padding: 24px 16px;
    color: var(--bac-secondary-text-color);
    text-align: center;
  }

  /* ── illustration ───────────────────────────────────────────────────── */
  .hero {
    position: relative;
    margin: 0 auto;
    width: min(94%, 420px);
    cursor: pointer;
  }
  svg.ups {
    width: 100%;
    height: auto;
    display: block;
    overflow: visible;
    filter: drop-shadow(0 10px 14px rgba(0, 0, 0, 0.14));
  }
  .ups .outlet rect:first-child,
  .ups .load rect {
    fill: var(--bac-body);
    stroke: var(--bac-outline);
    stroke-width: 1.4;
  }
  .ups .outlet .slot {
    fill: var(--bac-cap);
    stroke: none;
  }
  .ups .load .screen {
    fill: var(--bac-panel);
    stroke: none;
  }
  .ups .cable {
    fill: none;
    stroke: var(--bac-metal-2);
    stroke-width: 4;
    stroke-linecap: round;
  }
  .ups .flow {
    fill: none;
    stroke-width: 2.4;
    stroke-linecap: round;
    stroke-dasharray: 3 9;
    animation: flow 1.1s linear infinite;
  }
  .ups .flow.in {
    stroke: #3b82f6;
  }
  .ups .flow.out {
    stroke: var(--bac-ok);
  }
  .ups .cut line {
    stroke: var(--bac-error);
    stroke-width: 3;
    stroke-linecap: round;
  }
  .ups .body {
    fill: var(--bac-body);
    stroke: var(--bac-outline);
    stroke-width: 1.4;
  }
  .ups .shadow {
    fill: rgba(0, 0, 0, 0.12);
  }
  .ups .panel {
    fill: var(--bac-panel);
  }
  .ups .button {
    fill: var(--bac-plate);
    stroke: var(--bac-ok);
    stroke-width: 2;
  }
  .ups .button-glyph {
    fill: none;
    stroke: var(--bac-ok);
    stroke-width: 2;
    stroke-linecap: round;
  }
  .ups .led {
    fill: #3a3f46;
  }
  .ups .led.power {
    fill: var(--bac-ok);
  }
  .ups .battery-shell,
  .ups .battery-cap {
    fill: var(--bac-body-2);
    stroke: var(--bac-outline);
    stroke-width: 1.4;
  }
  .ups .battery-fill {
    transition: y 0.8s ease, height 0.8s ease;
  }
  .ups .battery-fill.high {
    fill: var(--bac-ok);
  }
  .ups .battery-fill.mid {
    fill: var(--bac-warning);
  }
  .ups .battery-fill.low {
    fill: var(--bac-error);
  }
  .ups .bolt {
    fill: #fff;
    opacity: 0;
  }
  .ups .vent {
    stroke: var(--bac-metal);
    stroke-width: 2;
    stroke-linecap: round;
  }

  /* states */
  .hero.charging .ups .bolt {
    opacity: 0.9;
    animation: breathe 1.8s ease-in-out infinite;
  }
  .hero.charging .ups .battery-fill {
    animation: breathe 2.4s ease-in-out infinite;
  }
  .hero.on_battery .ups .flow.in,
  .hero.low_battery .ups .flow.in,
  .hero.shutdown .ups .flow.in {
    stroke: transparent;
    animation: none;
  }
  .hero.on_battery .ups .flow.out,
  .hero.low_battery .ups .flow.out,
  .hero.shutdown .ups .flow.out {
    stroke: var(--bac-warning);
  }
  .hero.on_battery .ups .led.power,
  .hero.testing .ups .led.power {
    fill: var(--bac-warning);
  }
  .hero.on_battery .ups .led.battery {
    fill: var(--bac-warning);
    animation: blink 1.2s steps(1) infinite;
  }
  .hero.on_battery .ups .button,
  .hero.on_battery .ups .button-glyph,
  .hero.testing .ups .button,
  .hero.testing .ups .button-glyph {
    stroke: var(--bac-warning);
  }
  .hero.low_battery .ups .led.power,
  .hero.low_battery .ups .led.battery,
  .hero.shutdown .ups .led.battery,
  .hero.overload .ups .led.battery {
    fill: var(--bac-error);
    animation: blink 0.5s steps(1) infinite;
  }
  .hero.low_battery .ups .button,
  .hero.low_battery .ups .button-glyph,
  .hero.overload .ups .button,
  .hero.overload .ups .button-glyph,
  .hero.shutdown .ups .button,
  .hero.shutdown .ups .button-glyph {
    stroke: var(--bac-error);
  }
  .hero.overload .ups .body {
    stroke: var(--bac-error);
    stroke-width: 2.4;
    animation: breathe 1s ease-in-out infinite;
  }
  .hero.testing .ups .led.battery {
    fill: var(--bac-warning);
    animation: blink 0.7s steps(1) infinite;
  }
  .hero.testing .ups .flow.in {
    animation-duration: 2.4s;
    opacity: 0.5;
  }
  .hero.unavailable svg.ups {
    filter: grayscale(1);
    opacity: 0.45;
  }
  .hero.unavailable .ups .flow {
    display: none;
  }
  .hero.unavailable .ups .led {
    fill: #3a3f46;
  }

  .pill.charge {
    top: 79%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .pill.charge.low {
    color: #fff;
    background: var(--bac-error);
    border-color: transparent;
  }
  .pill.runtime {
    top: 4%;
    right: 22%;
  }
  .pill.runtime.warn {
    color: #fff;
    background: var(--bac-warning);
    border-color: transparent;
  }
  .pill.power {
    top: 46%;
    right: 0;
  }
  .status .sub {
    opacity: 0.8;
  }
  .status.on_battery,
  .status.testing {
    color: var(--bac-warning);
  }
  .status.alert {
    color: var(--bac-error);
  }
  .stats-value.bad {
    color: var(--bac-error);
  }
  .stats-value.warn {
    color: var(--bac-warning);
  }

  /* ── history ────────────────────────────────────────────────────────── */
  .history {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--bac-divider-color);
  }
  .chip {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    cursor: pointer;
    min-width: 0;
    color: var(--bac-secondary-text-color);
    border-right: 1px solid var(--bac-divider-color);
  }
  .chip:nth-child(2n) {
    border-right: 0;
  }
  .chip:nth-child(n + 3) {
    border-top: 1px solid var(--bac-divider-color);
  }
  .chip ha-icon {
    --mdc-icon-size: 20px;
    flex-shrink: 0;
  }
  .chip.warn ha-icon,
  .chip.warn .chip-value {
    color: var(--bac-warning);
  }
  .chip-text {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    min-width: 0;
    text-align: left;
  }
  .chip-value {
    color: var(--bac-primary-text-color);
    font-weight: 500;
    font-size: 0.9rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .chip-label {
    font-size: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .select {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--bac-secondary-text-color);
    padding: 0 6px;
  }
  .select ha-icon {
    --mdc-icon-size: 20px;
  }
  .select select {
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: pointer;
    padding: 10px 2px;
  }
  .select select option {
    color: initial;
  }

  /* ── graphs ─────────────────────────────────────────────────────────── */
  .graphs {
    border-top: 1px solid var(--bac-divider-color);
    padding: 8px 12px 6px;
  }
  .graph {
    cursor: pointer;
    margin-bottom: 6px;
  }
  .graph-head,
  .graph-foot {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: var(--bac-secondary-text-color);
    margin-bottom: 2px;
  }
  .graph svg {
    width: 100%;
    height: 46px;
    display: block;
    overflow: visible;
  }
  .graph polyline {
    fill: none;
    stroke-width: 1.6;
    vector-effect: non-scaling-stroke;
    stroke-linejoin: round;
  }
  .graph polyline.power {
    stroke: var(--bac-ok);
  }
  .graph polyline.voltage {
    stroke: #3b82f6;
  }
  .graph rect.outage {
    fill: var(--bac-warning);
    opacity: 0.25;
  }
  .legend {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .legend i {
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background: var(--bac-warning);
    opacity: 0.5;
  }
  .toolbar ha-icon-button.on {
    color: var(--bac-ok);
  }

  @keyframes flow {
    to {
      stroke-dashoffset: -24;
    }
  }
  @keyframes blink {
    50% {
      opacity: 0.15;
    }
  }
  @keyframes breathe {
    50% {
      opacity: 0.55;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .ups *,
    .ups {
      animation: none !important;
      transition: none !important;
    }
  }
`;console.info("%c NOBREAK-CARD %c v2.1.0 ","color: white; background: #166534; font-weight: 700;","color: white; background: #23272e; font-weight: 700;");const Pt=new Set(["unavailable","unknown",""]);let Ut=class extends lt{constructor(){super(...arguments),this._entities={},this._graphFetched=0}static{this.styles=Ot}static getStubConfig(t){const e=Object.values(t?.entities??{}).find(t=>t.platform===gt&&"rede_eletrica"===t.translation_key&&t.device_id);return e?{type:`custom:${_t}`,device:e.device_id}:{type:`custom:${_t}`}}static getConfigForm(){return{schema:[{name:"device",selector:{device:{filter:[{integration:gt}]}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_status",selector:{boolean:{}}},{name:"show_history",selector:{boolean:{}}},{name:"show_graph",selector:{boolean:{}}},{name:"show_toolbar",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}}]}],computeLabel:t=>Nt(`editor.${t.name}`)}}setConfig(t){if(!t)throw new Error(Nt("common.invalid_config"));this._config={show_name:!0,show_status:!0,show_history:!0,show_graph:!0,show_toolbar:!0,compact_view:!1,...t},this._entities=wt(this.hass,this._config)}getCardSize(){return this._config?.compact_view?4:8}getGridOptions(){return this._config?.compact_view?{columns:6,rows:4,min_columns:4,min_rows:3}:{columns:6,rows:8,min_columns:4,min_rows:6}}connectedCallback(){super.connectedCallback(),this._graphTimer=window.setInterval(()=>{this._fetchGraph()},3e5)}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._graphTimer)}updated(){!this._graphFetched&&this.hass&&this._entities.utility&&this._fetchGraph()}async _fetchGraph(){if(!this.hass?.callWS||!this._config?.show_graph||this._config.compact_view)return;const t={power:this._entities.power??this._entities.load,voltage:this._entities.input_voltage,utility:this._entities.utility},e=Object.values(t).filter(Boolean);if(!e.length)return;this._graphFetched=Date.now();const i=Date.now()/1e3,s=i-86400;try{const a=await this.hass.callWS({type:"history/history_during_period",start_time:new Date(1e3*s).toISOString(),end_time:new Date(1e3*i).toISOString(),entity_ids:e,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this._graph=At(a,t,s,i)}catch{}}willUpdate(t){if(!t.has("hass")||!this._config)return;const e=t.get("hass");e&&e.entities===this.hass?.entities&&e.devices===this.hass?.devices&&this._entities.utility||(this._entities=wt(this.hass,this._config)),e&&e.themes?.darkMode===this.hass?.themes?.darkMode||this.toggleAttribute("dark-mode",Boolean(this.hass?.themes?.darkMode))}shouldUpdate(t){if(t.has("_config")||t.has("_graph"))return!0;const e=t.get("hass");return!e||!this.hass||Object.values(this._entities).some(t=>t&&e.states[t]!==this.hass.states[t])}get _lang(){return t=this.hass,e=this._config?.language,e??t?.locale?.language??t?.language??"en";var t,e}_t(t,e){return Nt(t,this._lang,e)}_state(t){const e=this._entities[t];return e?this.hass?.states[e]:void 0}_text(t){const e=this._state(t)?.state;return void 0===e||Pt.has(e)?void 0:e}_num(t){const e=this._text(t),i=Number(e);return void 0!==e&&Number.isFinite(i)?i:null}_seconds(t){const e=this._num(t);return null===e?null:function(t,e){switch(e){case"min":return 60*t;case"h":return 3600*t;case"d":return 86400*t;default:return t}}(e,this._state(t)?.attributes.unit_of_measurement)}_available(t){const e=this._state(t)?.state;return void 0!==e&&"unavailable"!==e}_number(t,e=0){return new Intl.NumberFormat(this._lang,{maximumFractionDigits:e,minimumFractionDigits:e}).format(t)}_ago(t){const e=(Date.parse(t)-Date.now())/1e3,i=new Intl.RelativeTimeFormat(this._lang,{numeric:"auto"}),s=Math.abs(e);return s<3600?i.format(Math.round(e/60),"minute"):s<86400?i.format(Math.round(e/3600),"hour"):s<3888e3?i.format(Math.round(e/86400),"day"):s<31536e3?i.format(Math.round(e/2630016),"month"):i.format(Math.round(e/31557600),"year")}_moreInfo(t="status"){const e=this._entities[t];var i,s;e&&(i="hass-more-info",s={entityId:e},this.dispatchEvent(new CustomEvent(i,{detail:s,bubbles:!0,composed:!0})))}_press(t,e){const i=this._entities[t];i&&this.hass&&(!e||window.confirm(this._t(e)))&&this.hass.callService("button","press",{entity_id:i})}_toggle(t){const e=this._state(t);e&&this.hass&&this.hass.callService("switch","on"===e.state?"turn_off":"turn_on",{entity_id:e.entity_id})}_setSensitivity(t){const e=this._entities.sensitivity;e&&this.hass&&this.hass.callService("select","select_option",{entity_id:e,option:t})}render(){if(!this._config)return V;if(!this._config.device&&!this._config.entities)return q`<ha-card><div class="empty">${this._t("common.no_device")}</div></ha-card>`;const t=xt(this.hass,this._entities),e="unavailable"===t;return q`
      <ha-card>
        <div class="preview ${e?"not-available":""}">
          <div class="header">
            <div class="tips">${e?V:this._renderTips()}</div>
            <ha-icon-button class="more-info" .label=${this._t("common.more_info")} @click=${()=>this._moreInfo()}>
              <ha-icon icon="mdi:dots-vertical"></ha-icon>
            </ha-icon-button>
          </div>
          ${this._config.compact_view?V:this._renderHero(t)}
          <div class="metadata">${this._renderName()} ${this._renderStatus(t)}</div>
        </div>
        ${e?V:this._renderStats(t)}
        ${e||!this._config.show_history||this._config.compact_view?V:this._renderHistory()}
        ${e||!this._config.show_graph||this._config.compact_view?V:this._renderGraph()}
        ${this._renderToolbar(t)}
      </ha-card>
    `}_renderHero(t){const e=Math.max(0,Math.min(100,this._num("charge")??0)),i=e<=25?"low":e<=50?"mid":"high",s=e/100*56,a=this._num("power"),o=this._seconds("runtime"),r=yt.has(t);return q`<div class="hero ${t}" @click=${()=>this._moreInfo("charge")}>
      <svg class="ups" viewBox="0 0 260 190" role="img" aria-label=${this._t(`status.${t}`)}>
        <!-- wall outlet -->
        <g class="outlet">
          <rect x="8" y="112" width="34" height="44" rx="7" />
          <rect class="slot" x="17" y="124" width="4" height="11" rx="1.5" />
          <rect class="slot" x="29" y="124" width="4" height="11" rx="1.5" />
          <circle class="slot" cx="25" cy="145" r="3" />
        </g>
        <!-- input cable -->
        <path class="cable" d="M 42 134 C 62 134 62 150 86 150" />
        <path class="flow in" d="M 42 134 C 62 134 62 150 86 150" />
        ${r?F`<g class="cut"><line x1="58" y1="134" x2="68" y2="148" /><line x1="68" y1="134" x2="58" y2="148" /></g>`:V}
        <!-- output cable to the load -->
        <path class="cable" d="M 174 150 C 194 150 196 140 206 140" />
        <path class="flow out" d="M 174 150 C 194 150 196 140 206 140" />
        <!-- load (monitor) -->
        <g class="load">
          <rect x="206" y="110" width="46" height="32" rx="4" />
          <rect class="screen" x="210" y="114" width="38" height="24" rx="2" />
          <rect x="226" y="142" width="6" height="8" />
          <rect x="217" y="150" width="24" height="4" rx="2" />
        </g>
        <!-- UPS tower -->
        <g class="tower">
          <rect class="shadow" x="90" y="176" width="80" height="8" rx="4" />
          <rect class="body" x="86" y="14" width="88" height="164" rx="12" />
          <rect class="panel" x="96" y="24" width="68" height="44" rx="7" />
          <circle class="button" cx="130" cy="46" r="12" />
          <path class="button-glyph" d="M 130 39 L 130 46 M 124.5 41.5 A 7.5 7.5 0 1 0 135.5 41.5" />
          <circle class="led power" cx="106" cy="34" r="3" />
          <circle class="led battery" cx="154" cy="34" r="3" />
          <!-- battery window -->
          <rect class="battery-shell" x="108" y="84" width="44" height="64" rx="6" />
          <rect class="battery-cap" x="122" y="79" width="16" height="6" rx="2" />
          <clipPath id="nb-fill"><rect x="112" y="88" width="36" height="56" rx="3" /></clipPath>
          <g clip-path="url(#nb-fill)">
            <rect class="battery-fill ${i}" x="112" y=${144-s} width="36" height=${s} />
          </g>
          <path class="bolt" d="M 133 98 L 122 118 L 130 118 L 126 136 L 139 113 L 131 113 Z" />
          <line class="vent" x1="100" y1="160" x2="160" y2="160" />
          <line class="vent" x1="100" y1="166" x2="160" y2="166" />
        </g>
      </svg>
      <span class="pill charge ${i}" title=${this._t("stat.battery")}>
        <ha-icon icon=${"charging"===t?"mdi:battery-charging":"mdi:battery"}></ha-icon>${Math.round(e)}%
      </span>
      ${null!==o?q`<span class="pill runtime ${r?"warn":""}"><ha-icon icon="mdi:timer-outline"></ha-icon>${kt(o)}</span>`:V}
      ${null!==a?q`<span class="pill power"><ha-icon icon="mdi:flash"></ha-icon>${this._number(a)} W</span>`:V}
    </div>`}_tip(t,e,i,s,a=""){return q`
      <div class="tip ${a}" title=${this._t(i)} @click=${()=>this._moreInfo(t)}>
        <ha-icon icon=${e}></ha-icon><span>${s}</span>
      </div>
    `}_renderTips(){const t=this._num("energy_today")??this._num("energy"),e=this._state("cost_today"),i=e&&!Pt.has(e.state)&&Number.isFinite(Number(e.state))?new Intl.NumberFormat(this._lang,{style:"currency",currency:String(e.attributes.unit_of_measurement??"BRL")}).format(Number(e.state)):"";return q`
      ${"on"===this._text("replace_battery")?this._tip("replace_battery","mdi:battery-alert","tip.replace",this._t("tip.replace"),"alert"):V}
      ${"on"===this._text("avr")?this._tip("avr","mdi:sine-wave","tip.avr","AVR","warn"):V}
      ${"off"===this._text("beeper")?this._tip("beeper","mdi:volume-off","tip.beeper_off",""):V}
      ${null!==t?this._tip(this._entities.energy_today?"energy_today":"energy","mdi:lightning-bolt",this._entities.energy_today?"tip.energy_today":"tip.energy",`${this._number(t,t<10?2:1)} kWh${i?` · ${i}`:""}`):V}
      ${this._text("firmware")?this._tip("firmware","mdi:chip","tip.firmware",`FW ${this._text("firmware").replace(/^.*-(\d{6})$/,"$1")}`):V}
    `}_renderName(){if(!this._config.show_name)return V;const t=this._config.device?this.hass?.devices?.[this._config.device]:void 0,e=this._config.name??t?.name_by_user??t?.name??"Nobreak";return q`<div class="name">${e}</div>`}_renderStatus(t){if(!this._config.show_status)return V;let e="";const i=this._state("utility");return yt.has(t)&&i?.last_changed&&(e=this._t("sub.since",{time:kt((Date.now()-Date.parse(i.last_changed))/1e3)})),q`
      <div class="status ${t} ${ft.has(t)?"alert":""}">
        ${"testing"===t?q`<ha-spinner class="status-spinner" size="tiny"></ha-spinner>`:V}
        <span>${this._t(`status.${t}`)}</span>${e?q`<span class="sub">· ${e}</span>`:V}
      </div>
    `}_block(t,e,i,s=""){return q`<div class="stats-block" @click=${()=>this._moreInfo(t)}>
      <div class="stats-value ${s}">${e}</div>
      <div class="stats-subtitle">${i}</div>
    </div>`}_renderStats(t){const e=this._num("charge"),i=this._seconds("runtime"),s=this._num("power"),a=this._num("load"),o=this._num("nominal_power"),r=this._num("input_voltage"),n=this._num("transfer_low"),l=this._num("transfer_high"),h=yt.has(t),c=null!==s?`${this._number(s)} W`:null!==a?`${Math.round(a)}%`:"—",d=null!==a&&null!==o?this._t("stat.of_nominal",{percent:Math.round(a),nominal:Math.round(o)}):this._t("stat.load");return q`<div class="stats">
      ${this._block("charge",null===e?"—":`${Math.round(e)}%`,null!==this._num("real_runtime")?this._t("stat.real_runtime",{time:kt(60*this._num("real_runtime"))}):null!==i?this._t("stat.runtime",{time:kt(i)}):this._t("stat.battery"),null!==e&&e<=25?"bad":"")}
      ${this._block("power",c,d,null!==a&&a>=80?"bad":"")}
      ${this._block("input_voltage",h?this._t("stat.no_utility"):null===r?"—":`${Math.round(r)} V`,null!==n&&null!==l?this._t("stat.range",{low:n,high:l}):this._t("stat.utility"),h||null!==r&&null!==n&&null!==l&&(r<=n+5||r>=l-5)?"warn":"")}
    </div>`}_chip(t,e,i,s,a=""){return q`<div class="chip ${a}" @click=${()=>this._moreInfo(t)}>
      <ha-icon icon=${e}></ha-icon>
      <span class="chip-text">
        <span class="chip-value">${i}</span>
        <span class="chip-label">${s}</span>
      </span>
    </div>`}_renderHistory(){const t=this._num("outages"),e=this._text("last_outage"),i=this._seconds("last_outage_duration"),s=this._seconds("battery_time"),a=this._text("last_test"),o=this._state("last_test")?.attributes.resultado,r=this._num("battery_age"),n=[];if(null!==t&&n.push(this._chip(e?"last_outage":"outages","mdi:transmission-tower-off",t?this._t("history.outages_n",{n:t}):this._t("history.no_outages"),e?this._t("history.last_outage",{time:this._ago(e)})+(i?` · ${kt(i)}`:""):this._t("history.outages"))),null!==s&&n.push(this._chip("battery_time","mdi:battery-clock",kt(s),this._t("history.battery_time"))),this._entities.last_test){const t=o?.startsWith("Done and passed");n.push(this._chip("last_test",t?"mdi:battery-check":o?"mdi:battery-alert":"mdi:battery-unknown",a?this._ago(a):this._t("history.never"),o?this._t("history.test_result",{result:this._t(`result.${o}`)}):this._t("history.last_test"),o&&!t?"warn":""))}if(this._entities.battery_age||this._entities.battery_date){let t=this._t("history.no_date");if(null!==r){const[e,i]=function(t){const e=Math.floor(t/30.44);return[Math.floor(e/12),e%12]}(r);t=e?this._t("history.age_value",{y:e,m:i}):i?this._t("history.age_months",{m:i}):this._t("history.age_days",{d:r})}n.push(this._chip(this._entities.battery_date?"battery_date":"battery_age","mdi:car-battery",t,this._t("history.age")))}if(this._entities.health){const t=this._num("health"),e=this._num("real_runtime");n.push(this._chip("health","mdi:battery-heart-variant",null===t?this._t("history.not_measured"):`${Math.round(t)}%`,null===t?this._t("history.health_pending"):null!==e?this._t("history.health_runtime",{time:kt(60*e)}):this._t("history.health"),null!==t&&t<60?"warn":""))}if(this._entities.v_min||this._entities.out_of_range){const t=this._num("v_min"),e=this._num("v_max"),i=this._seconds("out_of_range");n.push(this._chip("out_of_range","mdi:sine-wave",null!==t&&null!==e?`${Math.round(t)}–${Math.round(e)} V`:"—",i?this._t("history.grid_out",{time:kt(i)}):this._t("history.grid_ok"),i&&i>=600?"warn":""))}return n.length?q`<div class="history">${n}</div>`:V}_renderGraph(){const t=this._graph;if(!t||!t.power.length&&!t.voltage.length)return V;const e=e=>(e-t.start)/(t.end-t.start)*300,i=t.outages.map(([t,i])=>F`<rect class="outage" x=${e(t)} y="0" width=${Math.max(1.5,e(i)-e(t))} height=${46}></rect>`),s=(e,s,a,o,r)=>{const n=(t=>{const e=t.map(([,t])=>t);return e.length?[Math.min(...e),Math.max(...e)]:null})(s);return q`<div class="graph" @click=${()=>this._moreInfo(e)}>
        <div class="graph-head">
          <span>${this._t(r)}</span>
          <span>${n?`${this._number(n[0])}–${this._number(n[1])} ${o}`:"—"}</span>
        </div>
        <svg viewBox="0 0 ${300} ${46}" preserveAspectRatio="none" aria-hidden="true">
          ${i}
          <polyline class=${a} points=${St(s,t.start,t.end,300,46)}></polyline>
        </svg>
      </div>`};return q`<div class="graphs">
      ${t.power.length?s(this._entities.power?"power":"load",t.power,"power",this._entities.power?"W":"%","graph.power"):V}
      ${t.voltage.length?s("input_voltage",t.voltage,"voltage","V","graph.voltage"):V}
      <div class="graph-foot">
        <span>${this._t("graph.last_24h")}</span>
        ${t.outages.length?q`<span class="legend"><i></i>${this._t("graph.outages",{n:t.outages.length})}</span>`:V}
      </div>
    </div>`}_iconButton(t,e,i,s=""){const a=this._t(e);return q`
      <ha-icon-button class=${s} .label=${a} title=${a} @click=${i}>
        <ha-icon icon=${t}></ha-icon>
      </ha-icon-button>
    `}_textButton(t,e,i,s=""){return q`<button class="text-button ${s}" @click=${i}><ha-icon icon=${t}></ha-icon>${this._t(e)}</button>`}_renderSensitivity(){const t=this._state("sensitivity");if(!t||Pt.has(t.state))return V;const e=t.attributes.options??["low","medium","high"];return q`
      <label class="select" title=${this._t("action.sensitivity")}>
        <ha-icon icon="mdi:tune-vertical"></ha-icon>
        <select @change=${t=>this._setSensitivity(t.target.value)}>
          ${e.map(e=>q`<option value=${e} ?selected=${e===t.state}>${this._t(`sensitivity.${e}`)}</option>`)}
        </select>
      </label>
    `}_renderToolbar(t){if(!this._config.show_toolbar||"unavailable"===t)return V;const e=this._state("beeper"),i="on"===e?.state;let s;s="shutdown"===t&&this._available("cancel_shutdown")?[this._textButton("mdi:power-plug","action.cancel_shutdown",()=>this._press("cancel_shutdown"),"danger")]:"testing"===t?[this._available("stop_test")?this._textButton("mdi:stop","action.stop_test",()=>this._press("stop_test"),"danger"):V]:[this._available("quick_test")?this._textButton("mdi:battery-check","action.quick_test",()=>this._press("quick_test")):V,this._available("deep_test")?this._iconButton("mdi:battery-sync","action.deep_test",()=>this._press("deep_test","action.confirm_deep")):V,this._available("panel_test")?this._iconButton("mdi:led-on","action.panel_test",()=>this._press("panel_test")):V];const a=[i&&yt.has(t)&&this._available("mute")?this._iconButton("mdi:volume-mute","action.mute",()=>this._press("mute"),"active"):V,e&&!Pt.has(e.state)?this._iconButton(i?"mdi:volume-high":"mdi:volume-off",i?"action.beeper_off":"action.beeper_on",()=>this._toggle("beeper")):V,this._state("shedding")&&!Pt.has(this._state("shedding").state)?this._iconButton("on"===this._state("shedding").state?"mdi:leaf":"mdi:leaf-off","on"===this._state("shedding").state?"action.shedding_off":"action.shedding_on",()=>this._toggle("shedding"),"on"===this._state("shedding").state?"on":""):V,this._renderSensitivity()],o=[...s,...a].filter(t=>t!==V);return o.length?q`<div class="toolbar">${o}</div>`:V}};t([ut({attribute:!1})],Ut.prototype,"hass",void 0),t([pt()],Ut.prototype,"_config",void 0),t([pt()],Ut.prototype,"_graph",void 0),Ut=t([(t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})(_t)],Ut),window.customCards=window.customCards||[],window.customCards.push({type:_t,name:Nt("common.name"),description:Nt("common.description"),preview:!0,documentationURL:"https://github.com/hudsonbrendon/nobreak-card",getEntitySuggestion:(t,e)=>{const i=t.entities?.[e];return i&&i.platform===gt&&i.device_id?{config:{type:`custom:${_t}`,device:i.device_id}}:null}});export{Ut as NobreakCard,At as buildGraph,xt as computeState,St as polyline,wt as resolveEntities,$t as statusFlags};
//# sourceMappingURL=nobreak-card.js.map
