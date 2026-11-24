function t(t,e,s,i){var a,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var n=t.length-1;n>=0;n--)(a=t[n])&&(r=(o<3?a(r):o>3?a(e,s,r):a(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&a.set(e,t))}return t}toString(){return this.cssText}};const r=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:n,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,_=p.trustedTypes,g=_?_.emptyScript:"",m=p.reactiveElementPolyfillSupport,b=(t,e)=>t,f={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!n(t,e),v={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:a}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);a?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),a=e.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const a=(void 0!==s.converter?.toAttribute?s.converter:f).toAttribute(e,s.type);this._$Em=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:f;this._$Em=i;const o=a.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,a){if(void 0!==t){const o=this.constructor;if(!1===i&&(a=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??y)(a,e)||s.useDefault&&s.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:a},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==a||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[b("elementProperties")]=new Map,$[b("finalized")]=new Map,m?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,x=t=>t,k=w.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+E,C=`<${M}>`,P=document,N=()=>P.createComment(""),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,T="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,H=/>/g,D=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,z=/"/g,I=/^(?:script|style|textarea|title)$/i,L=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),q=L(1),F=L(2),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),G=new WeakMap,Z=P.createTreeWalker(P,129);function K(t,e){if(!U(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const J=(t,e)=>{const s=t.length-1,i=[];let a,o=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<s;e++){const s=t[e];let n,l,c=-1,h=0;for(;h<s.length&&(r.lastIndex=h,l=r.exec(s),null!==l);)h=r.lastIndex,r===R?"!--"===l[1]?r=j:void 0!==l[1]?r=H:void 0!==l[2]?(I.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=D):void 0!==l[3]&&(r=D):r===D?">"===l[0]?(r=a??R,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,n=l[1],r=void 0===l[3]?D:'"'===l[3]?z:B):r===z||r===B?r=D:r===j||r===H?r=R:(r=D,a=void 0);const d=r===D&&t[e+1].startsWith("/>")?" ":"";o+=r===R?s+C:c>=0?(i.push(n),s.slice(0,c)+S+s.slice(c)+E+d):s+E+(-2===c?e:d)}return[K(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Q{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let a=0,o=0;const r=t.length-1,n=this.parts,[l,c]=J(t,e);if(this.el=Q.createElement(l,s),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&n.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=c[o++],s=i.getAttribute(t).split(E),r=/([.?@])?(.*)/.exec(e);n.push({type:1,index:a,name:r[2],strings:s,ctor:"."===r[1]?st:"?"===r[1]?it:"@"===r[1]?at:et}),i.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:a}),i.removeAttribute(t));if(I.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],N()),Z.nextNode(),n.push({type:2,index:++a});i.append(t[e],N())}}}else if(8===i.nodeType)if(i.data===M)n.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)n.push({type:7,index:a}),t+=E.length-1}a++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function X(t,e,s=t,i){if(e===V)return e;let a=void 0!==i?s._$Co?.[i]:s._$Cl;const o=O(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=a:s._$Cl=a),void 0!==a&&(e=X(t,a._$AS(t,e.values),a,i)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??P).importNode(e,!0);Z.currentNode=i;let a=Z.nextNode(),o=0,r=0,n=s[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new tt(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new ot(a,this,t)),this._$AV.push(e),n=s[++r]}o!==n?.index&&(a=Z.nextNode(),o++)}return Z.currentNode=P,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),O(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Q.createElement(K(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Y(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Q(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const a of t)i===e.length?e.push(s=new tt(this.O(N()),this.O(N()),this,this.options)):s=e[i],s._$AI(a),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const a=this.strings;let o=!1;if(void 0===a)t=X(this,t,e,0),o=!O(t)||t!==this._$AH&&t!==V,o&&(this._$AH=t);else{const i=t;let r,n;for(t=a[0],r=0;r<a.length-1;r++)n=X(this,i[s+r],e,r),n===V&&(n=this._$AH[r]),o||=!O(n)||n!==this._$AH[r],n===W?t=W:t!==W&&(t+=(n??"")+a[r+1]),this._$AH[r]=n}o&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class at extends et{constructor(t,e,s,i,a){super(t,e,s,i,a),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??W)===V)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const rt=w.litHtmlPolyfillSupport;rt?.(Q,tt),(w.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;class lt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let a=i._$litPart$;if(void 0===a){const t=s?.renderBefore??null;i._$litPart$=a=new tt(e.insertBefore(N(),t),t,void 0,s??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}lt._$litElement$=!0,lt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:lt});const ct=nt.litElementPolyfillSupport;ct?.({LitElement:lt}),(nt.litElementVersions??=[]).push("4.2.2");const ht={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:y},dt=(t=ht,e,s)=>{const{kind:i,metadata:a}=s;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const a=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,a,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const a=this[i];e.call(this,s),this.requestUpdate(i,a,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};function ut(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}function pt(t){return ut({...t,state:!0,attribute:!1})}const _t="nobreak-card",gt="nobreak",mt=["nobreak","nut"],bt={status:["sensor","nut","ups_status"],status_display:["sensor","nut","ups_status_display"],charge:["sensor","nut","battery_charge"],runtime:["sensor","nut","battery_runtime"],load:["sensor","nut","ups_load"],input_voltage:["sensor","nut","input_voltage"],input_nominal:["sensor","nut","input_voltage_nominal"],battery_voltage:["sensor","nut","battery_voltage"],transfer_reason:["sensor","nut","input_transfer_reason"],test_result:["sensor","nut","ups_test_result"],nominal_power:["sensor","nut","ups_realpower_nominal"],timer_shutdown:["sensor","nut","ups_timer_shutdown"],utility:["binary_sensor","nobreak","rede_eletrica"],low_battery:["binary_sensor","nobreak","bateria_fraca"],charging:["binary_sensor","nobreak","carregando"],replace_battery:["binary_sensor","nobreak","substituir_bateria"],overload:["binary_sensor","nobreak","sobrecarga"],avr:["binary_sensor","nobreak","avr"],shutdown_pending:["binary_sensor","nobreak","desligamento_agendado"],power:["sensor","nobreak","potencia_de_saida"],energy:["sensor","nobreak","energia_de_saida"],outages:["sensor","nobreak","quedas_de_energia"],last_outage:["sensor","nobreak","ultima_queda"],last_outage_duration:["sensor","nobreak","duracao_da_ultima_queda"],battery_time:["sensor","nobreak","tempo_na_bateria"],last_test:["sensor","nobreak","ultimo_autoteste"],battery_age:["sensor","nobreak","idade_da_bateria"],firmware:["sensor","nobreak","firmware"],battery_date:["date","nobreak","data_da_bateria"],sensitivity:["select","nobreak","sensibilidade"],beeper:["switch","nobreak","alarme_sonoro"],transfer_low:["number","nobreak","transferencia_baixa"],transfer_high:["number","nobreak","transferencia_alta"],health:["sensor","nobreak","saude_da_bateria"],real_runtime:["sensor","nobreak","autonomia_real"],energy_today:["sensor","nobreak","energia_hoje"],cost_today:["sensor","nobreak","custo_hoje"],cost_month:["sensor","nobreak","custo_do_mes"],v_min:["sensor","nobreak","tensao_minima_hoje"],v_max:["sensor","nobreak","tensao_maxima_hoje"],out_of_range:["sensor","nobreak","tempo_fora_da_faixa_hoje"],outages_today:["sensor","nobreak","quedas_hoje"],shedding:["switch","nobreak","economia_automatica"],quick_test:["button","nobreak","autoteste_rapido"],deep_test:["button","nobreak","autoteste_completo"],stop_test:["button","nobreak","parar_autoteste"],panel_test:["button","nobreak","testar_painel"],mute:["button","nobreak","silenciar_alarme"],cancel_shutdown:["button","nobreak","cancelar_desligamento"]},ft=new Set(["low_battery","overload","shutdown"]),yt=new Set(["on_battery","low_battery","shutdown"]),vt=new Set(["unavailable","unknown",""]);function $t(t,e){const s={};if(e.device){const i=function(t,e){const s=t?.devices??{},i=new Set([e]),a=s[e]?.via_device_id;a&&i.add(a);for(const t of Object.values(s))!t.via_device_id||t.via_device_id!==e&&t.via_device_id!==a||i.add(t.id);return i}(t,e.device);for(const e of Object.values(t?.entities??{})){if(!e.platform||!mt.includes(e.platform)||!i.has(e.device_id??""))continue;const t=e.entity_id.split(".")[0];for(const[i,[a,o,r]]of Object.entries(bt))a!==t||o!==e.platform||r!==e.translation_key||s[i]||(s[i]=e.entity_id)}}return{...s,...e.entities??{}}}function wt(t){return new Set((t??"").toUpperCase().split(/\s+/).filter(Boolean))}function xt(t,e){const s=s=>e[s]?t?.states[e[s]]?.state:void 0,i=t=>"on"===s(t),a=s("status"),o=wt(vt.has(a??"")?void 0:a),r=s("utility");if(!o.size&&(void 0===r||vt.has(r)))return"unavailable";if(i("shutdown_pending")||o.has("FSD"))return"shutdown";if(i("overload")||o.has("OVER"))return"overload";const n=o.has("OB")||"off"===r;return"In progress"===s("test_result")||o.has("CAL")||o.has("TEST")?"testing":n&&(i("low_battery")||o.has("LB"))?"low_battery":n?"on_battery":i("charging")||o.has("CHRG")?"charging":"online"}function kt(t){const e=Math.max(0,Math.round(t));if(e<60)return`${e} s`;const s=Math.round(e/60);if(s<60)return`${s} min`;const i=Math.floor(s/60);return i<48?s%60?`${i} h ${String(s%60).padStart(2,"0")} min`:`${i} h`:`${Math.floor(i/24)} d ${i%24} h`}function At(t,e,s,i){const a=e=>(e?t[e]??[]:[]).map(t=>[Math.max(s,t.lu),Number(t.s)]).filter(([,t])=>Number.isFinite(t)),o=[];let r=null;for(const i of e.utility?t[e.utility]??[]:[]){const t=Math.max(s,i.lu);"off"===i.s&&null===r?r=t:"off"!==i.s&&null!==r&&(t-r>=15&&o.push([r,t]),r=null)}return null!==r&&o.push([r,i]),{start:s,end:i,power:a(e.power),voltage:a(e.voltage),outages:o}}function St(t,e,s,i,a){if(!t.length)return"";const o=t.map(([,t])=>t);let r=Math.min(...o),n=Math.max(...o);n-r<1&&(r-=1,n+=1);const l=.12*(n-r);r-=l,n+=l;const c=t=>(t-e)/(s-e)*i,h=t=>a-(t-r)/(n-r)*a,d=[];return t.forEach(([e,s],i)=>{i&&d.push(`${c(e).toFixed(1)},${h(t[i-1][1]).toFixed(1)}`),d.push(`${c(e).toFixed(1)},${h(s).toFixed(1)}`)}),d.push(`${i},${h(t[t.length-1][1]).toFixed(1)}`),d.join(" ")}var Et={common:{name:"Card do Nobreak",description:"Card do nobreak para a integração Nobreak (NUT): desenho animado, bateria, carga, rede, histórico de quedas, autotestes e ajustes.",invalid_config:"Configuração inválida",more_info:"Mais informações",no_device:"Escolha o dispositivo Nobreak no editor do card."},status:{online:"Na rede elétrica",charging:"Carregando",on_battery:"Na bateria",low_battery:"Bateria fraca",testing:"Autoteste em andamento",overload:"Sobrecarga",shutdown:"Desligamento agendado",unavailable:"Indisponível"},sub:{since:"há {time}",runtime:"{time} de autonomia",on_battery_for:"Na bateria há {time}",real_runtime_full:"Autonomia real: {time}"},stat:{battery:"Bateria",load:"Carga",utility:"Rede",no_utility:"Sem rede",range:"{low}–{high} V",of_nominal:"{percent}% · {nominal} W",runtime:"{time} restantes",real_runtime:"{time} reais",power:"Potência",power_load:"Potência · {percent}%",utility_range:"Rede · {low}–{high} V"},history:{outages:"Quedas",none:"nenhuma ainda",ago:"{time}",battery_time:"Total na bateria",last_test:"Autoteste",never:"nunca",age:"Idade da bateria",age_value:"{y} a {m} m",age_months:"{m} meses",age_days:"{d} dias",no_date:"definir data",outages_n:"{n} quedas",no_outages:"Nenhuma queda",last_outage:"última {time}",test_result:"Autoteste {result}",not_measured:"Sem medição",health_pending:"Saúde · na próxima queda",health:"Saúde da bateria",health_runtime:"Saúde · {time} reais",grid_ok:"Rede hoje · na faixa",grid_out:"Rede hoje · {time} fora",outage_1:"1 queda"},result:{"Done and passed":"aprovado","Done and warning":"com alerta","Done and error":"reprovado",Aborted:"cancelado","In progress":"em andamento","No test initiated":"nenhum"},tip:{firmware:"Firmware",sensitivity:"Sensibilidade",beeper_off:"Alarme desativado",avr:"Regulação de tensão ativa",replace:"Substituir bateria",energy:"Energia de saída",energy_today:"Energia de saída e custo hoje"},sensitivity:{low:"Baixa",medium:"Média",high:"Alta"},action:{quick_test:"Autoteste",deep_test:"Autoteste completo (descarrega a bateria)",stop_test:"Parar teste",panel_test:"Testar painel",mute:"Silenciar alarme",beeper_on:"Ativar alarme",beeper_off:"Desativar alarme",cancel_shutdown:"Cancelar desligamento",sensitivity:"Sensibilidade",confirm_deep:"Rodar o autoteste completo? O nobreak fica na bateria até quase esvaziar.",shedding_on:"Ativar economia automática",shedding_off:"Desativar economia automática"},editor:{device:"Dispositivo Nobreak",name:"Nome",show_name:"Mostrar nome",show_status:"Mostrar status",show_history:"Mostrar histórico",show_toolbar:"Mostrar barra de ações",compact_view:"Visão compacta",show_graph:"Mostrar gráficos de 24 h"},graph:{power:"Potência de saída",voltage:"Tensão da rede",last_24h:"Últimas 24 h",outages:"{n} quedas",outage_1:"1 queda"}};const Mt={en:{common:{name:"Nobreak Card",description:"UPS card for the Nobreak (NUT) integration: animated drawing, battery, load, utility, outage history, self-tests and settings.",invalid_config:"Invalid configuration",more_info:"More info",no_device:"Pick the Nobreak device in the card editor."},status:{online:"On utility power",charging:"Charging",on_battery:"On battery",low_battery:"Low battery",testing:"Self-test running",overload:"Overload",shutdown:"Shutdown scheduled",unavailable:"Unavailable"},sub:{since:"for {time}",runtime:"{time} of runtime",on_battery_for:"On battery for {time}",real_runtime_full:"Real runtime: {time}"},stat:{battery:"Battery",load:"Load",utility:"Utility",no_utility:"No power",range:"{low}–{high} V",of_nominal:"{percent}% · {nominal} W",runtime:"{time} left",real_runtime:"{time} real",power:"Power",power_load:"Power · {percent}%",utility_range:"Utility · {low}–{high} V"},history:{outages:"Outages",none:"none yet",ago:"{time}",battery_time:"Total on battery",last_test:"Self-test",never:"never",age:"Battery age",age_value:"{y} y {m} m",age_months:"{m} m",age_days:"{d} d",no_date:"set date",outages_n:"{n} outages",no_outages:"No outages",last_outage:"last {time}",test_result:"Self-test {result}",not_measured:"Not measured",health_pending:"Health · next outage",health:"Battery health",health_runtime:"Health · {time} real",grid_ok:"Grid today · in band",grid_out:"Grid today · {time} out",outage_1:"1 outage"},result:{"Done and passed":"passed","Done and warning":"warning","Done and error":"failed",Aborted:"aborted","In progress":"running","No test initiated":"none"},tip:{firmware:"Firmware",sensitivity:"Sensitivity",beeper_off:"Alarm disabled",avr:"Voltage regulation active",replace:"Replace battery",energy:"Output energy",energy_today:"Output energy and cost today"},sensitivity:{low:"Low",medium:"Medium",high:"High"},action:{quick_test:"Self-test",deep_test:"Deep self-test (discharges the battery)",stop_test:"Stop test",panel_test:"Test front panel",mute:"Mute alarm",beeper_on:"Enable alarm",beeper_off:"Disable alarm",cancel_shutdown:"Cancel shutdown",sensitivity:"Sensitivity",confirm_deep:"Run a deep self-test? The UPS runs on battery until it is almost empty.",shedding_on:"Enable automatic load shedding",shedding_off:"Disable automatic load shedding"},editor:{device:"Nobreak device",name:"Name",show_name:"Show name",show_status:"Show status",show_history:"Show history",show_toolbar:"Show toolbar",compact_view:"Compact view",show_graph:"Show 24 h graphs"},graph:{power:"Output power",voltage:"Utility voltage",last_24h:"Last 24 h",outages:"{n} outages",outage_1:"1 outage"}},"pt-BR":Et,pt:Et};function Ct(t,e){let s=t;for(const t of e){if(!s||"object"!=typeof s||!(t in s))return;s=s[t]}return"string"==typeof s?s:void 0}function Pt(t,e="en",s={}){const i=t.split(".");return(Ct(Mt[e],i)??Ct(Mt[e.split("-")[0]],i)??Ct(Mt.en,i)??t).replace(/\{(\w+)\}/g,(t,e)=>e in s?String(s[e]):`{${e}}`)}const Nt=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(s,t,i)})`
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

  /* ── illustration (same drawing style as the console / appliance cards) ── */
  .hero {
    display: block;
    margin: 0 auto;
    cursor: pointer;
    width: min(86%, 340px);
  }
  .art {
    width: 100%;
    height: auto;
    overflow: visible;
  }
  .art.unavailable {
    opacity: 0.45;
  }
  .ups {
    --ups-black: #2b2f36;
    --ups-black-2: #3a3f47;
    --ups-black-3: #1d2025;
    --ups-led: #6fc24a;
  }
  .ups .floor {
    stroke: var(--bac-metal);
    stroke-width: 1.5;
    stroke-linecap: round;
  }
  .ups .dark-front {
    fill: var(--ups-black-3);
    stroke: #121417;
    stroke-width: 1;
    stroke-linejoin: round;
  }
  .ups .dark-top {
    fill: var(--ups-black-2);
    stroke: #121417;
    stroke-width: 1;
    stroke-linejoin: round;
  }
  .ups .dark-side {
    fill: var(--ups-black);
    stroke: #121417;
    stroke-width: 1;
    stroke-linejoin: round;
  }
  .ups .dark-side-low {
    fill: #33373e;
  }
  .ups .grille-area {
    fill: var(--ups-black-3);
  }
  .ups .slat {
    stroke: var(--ups-black-2);
    stroke-width: 1.6;
    stroke-linecap: round;
  }
  .ups .gloss {
    fill: #15171b;
  }
  .ups .shine {
    stroke: #fff;
    stroke-width: 1;
    opacity: 0.18;
  }
  .ups .wordmark {
    font: 700 7px/1 system-ui, sans-serif;
    fill: #d8dbe0;
    letter-spacing: 0.4px;
  }
  .ups .wordmark.small {
    font: 600 4px/1 system-ui, sans-serif;
    fill: var(--bac-outline);
  }
  .ups .emboss {
    font: 600 6px/1 system-ui, sans-serif;
    fill: var(--ups-black-2);
  }
  .ups .ring {
    fill: #121417;
  }
  .ups .chrome-button {
    fill: #c9ccd1;
    stroke: #8d939b;
    stroke-width: 0.8;
  }
  .ups .power-glyph {
    fill: none;
    stroke: #5f656d;
    stroke-width: 1;
    stroke-linecap: round;
  }
  .ups .led-ring {
    fill: none;
    stroke: var(--ups-led);
    stroke-width: 1.8;
    opacity: 0;
  }
  .ups .led {
    fill: #3a3f46;
  }
  .ups .foot {
    fill: #121417;
  }
  .ups .bolt path {
    fill: var(--bac-warning);
    opacity: 0;
  }
  .ups .warn-sign path {
    fill: var(--bac-error);
  }
  .ups .warn-glyph {
    fill: #fff;
  }

  /* state: the power ring and LEDs tell it, like the consoles' power light */
  .ups.online .led-ring,
  .ups.charging .led-ring {
    opacity: 1;
  }
  .ups.online .led-utility,
  .ups.charging .led-utility {
    fill: var(--ups-led);
    filter: drop-shadow(0 0 2px var(--ups-led));
  }
  .ups.charging .led-ring {
    animation: breathe 3s ease-in-out infinite;
  }
  .ups.charging .led-battery {
    fill: #f2b33d;
    animation: breathe 2s ease-in-out infinite;
  }
  .ups.on_battery,
  .ups.testing {
    --ups-led: var(--bac-warning);
  }
  .ups.on_battery .led-ring,
  .ups.testing .led-ring,
  .ups.on_battery .led-battery,
  .ups.testing .led-battery {
    opacity: 1;
    fill: var(--ups-led);
    animation: blink 1.2s steps(1) infinite;
  }
  .ups.on_battery .led-ring,
  .ups.testing .led-ring {
    fill: none;
  }
  .ups.on_battery .bolt path {
    opacity: 1;
    animation: breathe 1.6s ease-in-out infinite;
  }
  .ups.low_battery,
  .ups.overload,
  .ups.shutdown {
    --ups-led: var(--bac-error);
  }
  .ups.low_battery .led-ring,
  .ups.overload .led-ring,
  .ups.shutdown .led-ring {
    opacity: 1;
    animation: blink 0.5s steps(1) infinite;
  }
  .ups.low_battery .led-battery,
  .ups.overload .led-battery,
  .ups.shutdown .led-battery {
    fill: var(--ups-led);
    animation: blink 0.5s steps(1) infinite;
  }
  .ups .warn-sign {
    animation: breathe 1.2s ease-in-out infinite;
  }

  .detail {
    margin-top: 4px;
    font-size: 0.85rem;
    color: var(--bac-secondary-text-color);
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
    .ups,
    .ups .warn-sign {
      animation: none !important;
      transition: none !important;
    }
  }
`;console.info("%c NOBREAK-CARD %c v2.2.0 ","color: white; background: #166534; font-weight: 700;","color: white; background: #23272e; font-weight: 700;");const Ot=new Set(["unavailable","unknown",""]);let Ut=class extends lt{constructor(){super(...arguments),this._entities={},this._graphFetched=0}static{this.styles=Nt}static getStubConfig(t){const e=Object.values(t?.entities??{}).find(t=>t.platform===gt&&"rede_eletrica"===t.translation_key&&t.device_id);return e?{type:`custom:${_t}`,device:e.device_id}:{type:`custom:${_t}`}}static getConfigForm(){return{schema:[{name:"device",selector:{device:{filter:[{integration:gt}]}}},{name:"name",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_status",selector:{boolean:{}}},{name:"show_history",selector:{boolean:{}}},{name:"show_graph",selector:{boolean:{}}},{name:"show_toolbar",selector:{boolean:{}}},{name:"compact_view",selector:{boolean:{}}}]}],computeLabel:t=>Pt(`editor.${t.name}`)}}setConfig(t){if(!t)throw new Error(Pt("common.invalid_config"));this._config={show_name:!0,show_status:!0,show_history:!0,show_graph:!1,show_toolbar:!0,compact_view:!1,...t},this._entities=$t(this.hass,this._config)}getCardSize(){return this._config?.compact_view?4:8}getGridOptions(){return this._config?.compact_view?{columns:6,rows:4,min_columns:4,min_rows:3}:{columns:6,rows:8,min_columns:4,min_rows:6}}connectedCallback(){super.connectedCallback(),this._graphTimer=window.setInterval(()=>{this._fetchGraph()},3e5)}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this._graphTimer)}updated(){!this._graphFetched&&this.hass&&this._entities.utility&&this._fetchGraph()}async _fetchGraph(){if(!this.hass?.callWS||!this._config?.show_graph||this._config.compact_view)return;const t={power:this._entities.power??this._entities.load,voltage:this._entities.input_voltage,utility:this._entities.utility},e=Object.values(t).filter(Boolean);if(!e.length)return;this._graphFetched=Date.now();const s=Date.now()/1e3,i=s-86400;try{const a=await this.hass.callWS({type:"history/history_during_period",start_time:new Date(1e3*i).toISOString(),end_time:new Date(1e3*s).toISOString(),entity_ids:e,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this._graph=At(a,t,i,s)}catch{}}willUpdate(t){if(!t.has("hass")||!this._config)return;const e=t.get("hass");e&&e.entities===this.hass?.entities&&e.devices===this.hass?.devices&&this._entities.utility||(this._entities=$t(this.hass,this._config)),e&&e.themes?.darkMode===this.hass?.themes?.darkMode||this.toggleAttribute("dark-mode",Boolean(this.hass?.themes?.darkMode))}shouldUpdate(t){if(t.has("_config")||t.has("_graph"))return!0;const e=t.get("hass");return!e||!this.hass||Object.values(this._entities).some(t=>t&&e.states[t]!==this.hass.states[t])}get _lang(){return t=this.hass,e=this._config?.language,e??t?.locale?.language??t?.language??"en";var t,e}_t(t,e){return Pt(t,this._lang,e)}_state(t){const e=this._entities[t];return e?this.hass?.states[e]:void 0}_text(t){const e=this._state(t)?.state;return void 0===e||Ot.has(e)?void 0:e}_num(t){const e=this._text(t),s=Number(e);return void 0!==e&&Number.isFinite(s)?s:null}_seconds(t){const e=this._num(t);return null===e?null:function(t,e){switch(e){case"min":return 60*t;case"h":return 3600*t;case"d":return 86400*t;default:return t}}(e,this._state(t)?.attributes.unit_of_measurement)}_available(t){const e=this._state(t)?.state;return void 0!==e&&"unavailable"!==e}_number(t,e=0){return new Intl.NumberFormat(this._lang,{maximumFractionDigits:e,minimumFractionDigits:e}).format(t)}_ago(t){const e=(Date.parse(t)-Date.now())/1e3,s=new Intl.RelativeTimeFormat(this._lang,{numeric:"auto"}),i=Math.abs(e);return i<3600?s.format(Math.round(e/60),"minute"):i<86400?s.format(Math.round(e/3600),"hour"):i<3888e3?s.format(Math.round(e/86400),"day"):i<31536e3?s.format(Math.round(e/2630016),"month"):s.format(Math.round(e/31557600),"year")}_moreInfo(t="status"){const e=this._entities[t];var s,i;e&&(s="hass-more-info",i={entityId:e},this.dispatchEvent(new CustomEvent(s,{detail:i,bubbles:!0,composed:!0})))}_press(t,e){const s=this._entities[t];s&&this.hass&&(!e||window.confirm(this._t(e)))&&this.hass.callService("button","press",{entity_id:s})}_toggle(t){const e=this._state(t);e&&this.hass&&this.hass.callService("switch","on"===e.state?"turn_off":"turn_on",{entity_id:e.entity_id})}_setSensitivity(t){const e=this._entities.sensitivity;e&&this.hass&&this.hass.callService("select","select_option",{entity_id:e,option:t})}render(){if(!this._config)return W;if(!this._config.device&&!this._config.entities)return q`<ha-card><div class="empty">${this._t("common.no_device")}</div></ha-card>`;const t=xt(this.hass,this._entities),e="unavailable"===t;return q`
      <ha-card>
        <div class="preview ${e?"not-available":""}">
          <div class="header">
            <div class="tips">${e?W:this._renderTips()}</div>
            <ha-icon-button class="more-info" .label=${this._t("common.more_info")} @click=${()=>this._moreInfo()}>
              <ha-icon icon="mdi:dots-vertical"></ha-icon>
            </ha-icon-button>
          </div>
          ${this._config.compact_view?W:this._renderHero(t)}
          <div class="metadata">${this._renderName()} ${this._renderStatus(t)}</div>
        </div>
        ${e?W:this._renderStats(t)}
        ${e||!this._config.show_history||this._config.compact_view?W:this._renderHistory()}
        ${e||!this._config.show_graph||this._config.compact_view?W:this._renderGraph()}
        ${this._renderToolbar(t)}
      </ha-card>
    `}_renderHero(t){const[e,s,i,a,o,r]=[98,146,96,180,104,-30],n=`M${s} ${i} L${s+o} ${i+r} V${a+r} L${s} ${a} Z`,l=`M${e} ${i} L${s} ${i} L${s+o} ${i+r} L${e+o} ${i+r} Z`,c=Array.from({length:9},(t,e)=>{const a=.22+.07*e,n=s+o*a,l=i+r*a+16;return F`<line x1="${n.toFixed(1)}" y1="${l.toFixed(1)}" x2="${n.toFixed(1)}" y2="${(l+44).toFixed(1)}" class="slat" />`}),h=ft.has(t);return q`<div class="hero" @click=${()=>this._moreInfo("charge")}>
      <svg class="art ups ${t}" viewBox="40 14 240 178" xmlns="http://www.w3.org/2000/svg" role="img" aria-label=${this._t(`status.${t}`)}>
        <line x1="64" y1="182" x2="256" y2="182" class="floor" />
        <path d="${l}" class="dark-top" />
        <path d="${n}" class="dark-side" />
        <path d="M${s} ${a-12} L${s+o} ${a-12+r} V${a+r} L${s} ${a} Z" class="dark-side-low" />
        <path d="M${s+.2*o} ${i+.2*r+12} L${s+.86*o} ${i+.86*r+12} V${i+.86*r+64} L${s+.2*o} ${i+.2*r+64} Z" class="grille-area" />
        ${c}
        <text x="0" y="0" class="emboss" transform="translate(${s+56} ${i-1}) rotate(-16)">Back-UPS</text>
        <path d="M${e} ${i} H${s} V${a} H${e} Z" class="dark-front" />
        <path d="M${e+3} ${i+4} H${s-3} V${a-10} H${e+3} Z" class="gloss" />
        <path d="M${e+1.5} ${i+2} V${a-2}" class="shine" />
        <text x="${(e+s)/2}" y="${i+17}" class="wordmark" text-anchor="middle">APC</text>
        <circle cx="${(e+s)/2}" cy="${i+40}" r="9" class="ring" />
        <circle cx="${(e+s)/2}" cy="${i+40}" r="9" class="led-ring" />
        <circle cx="${(e+s)/2}" cy="${i+40}" r="6.2" class="chrome-button" />
        <path d="M${(e+s)/2} ${i+36.5} V${i+40} M${(e+s)/2-2.6} ${i+37.6} A3.6 3.6 0 1 0 ${(e+s)/2+2.6} ${i+37.6}" class="power-glyph" />
        <circle cx="${e+13}" cy="${i+58}" r="1.9" class="led led-utility" />
        <circle cx="${s-13}" cy="${i+58}" r="1.9" class="led led-battery" />
        <text x="${(e+s)/2}" y="${a-15}" class="wordmark small" text-anchor="middle">BZ1500</text>
        <rect x="${e+6}" y="${a-7}" width="${s-e-12}" height="3" rx="1.5" class="foot" />
        <g class="bolt"><path d="M${s+70} ${i-56} l-9 15 h7 l-4 13 l12 -17 h-7 l5 -11 z" /></g>
        ${h?F`<g class="warn-sign">
              <path d="M186 24 l12 20 h-24 z" />
              <rect x="184.8" y="30" width="2.4" height="7" rx="1" class="warn-glyph" />
              <circle cx="186" cy="40.5" r="1.4" class="warn-glyph" />
            </g>`:W}
      </svg>
    </div>`}_tip(t,e,s,i,a=""){return q`
      <div class="tip ${a}" title=${this._t(s)} @click=${()=>this._moreInfo(t)}>
        <ha-icon icon=${e}></ha-icon><span>${i}</span>
      </div>
    `}_renderTips(){const t=this._num("energy_today")??this._num("energy"),e=this._state("cost_today"),s=e&&!Ot.has(e.state)&&Number.isFinite(Number(e.state))?new Intl.NumberFormat(this._lang,{style:"currency",currency:String(e.attributes.unit_of_measurement??"BRL")}).format(Number(e.state)):"";return q`
      ${"on"===this._text("replace_battery")?this._tip("replace_battery","mdi:battery-alert","tip.replace",this._t("tip.replace"),"alert"):W}
      ${"on"===this._text("avr")?this._tip("avr","mdi:sine-wave","tip.avr","AVR","warn"):W}
      ${"off"===this._text("beeper")?this._tip("beeper","mdi:volume-off","tip.beeper_off",""):W}
      ${null!==t?this._tip(this._entities.energy_today?"energy_today":"energy","mdi:lightning-bolt",this._entities.energy_today?"tip.energy_today":"tip.energy",`${this._number(t,t<10?2:1)} kWh${s?` · ${s}`:""}`):W}
      ${this._text("firmware")?this._tip("firmware","mdi:chip","tip.firmware",`FW ${this._text("firmware").replace(/^.*-(\d{6})$/,"$1")}`):W}
    `}_renderName(){if(!this._config.show_name)return W;const t=this._config.device?this.hass?.devices?.[this._config.device]:void 0,e=this._config.name??t?.name_by_user??t?.name??"Nobreak";return q`<div class="name">${e}</div>`}_renderStatus(t){if(!this._config.show_status)return W;const e=this._state("utility"),s=this._num("real_runtime"),i=this._seconds("runtime");let a="";return yt.has(t)&&e?.last_changed?(a=this._t("sub.on_battery_for",{time:kt((Date.now()-Date.parse(e.last_changed))/1e3)}),null!==s&&(a+=` · ${this._t("stat.real_runtime",{time:kt(60*s)})}`)):"unavailable"!==t&&(null!==s?a=this._t("sub.real_runtime_full",{time:kt(60*s)}):null!==i&&(a=this._t("sub.runtime",{time:kt(i)}))),q`
      <div class="status ${t} ${ft.has(t)?"alert":""}">
        ${"testing"===t?q`<ha-spinner class="status-spinner" size="tiny"></ha-spinner>`:W}
        <span>${this._t(`status.${t}`)}</span>
      </div>
      ${a?q`<div class="detail">${a}</div>`:W}
    `}_block(t,e,s,i=""){return q`<div class="stats-block" @click=${()=>this._moreInfo(t)}>
      <div class="stats-value ${i}">${e}</div>
      <div class="stats-subtitle">${s}</div>
    </div>`}_renderStats(t){const e=this._num("charge"),s=this._num("power"),i=this._num("load"),a=this._num("input_voltage"),o=this._num("transfer_low"),r=this._num("transfer_high"),n=yt.has(t),l=null!==s?`${this._number(s)} W`:null!==i?`${Math.round(i)}%`:"—",c=null!==i?this._t("stat.power_load",{percent:Math.round(i)}):this._t("stat.power");return q`<div class="stats">
      ${this._block("charge",null===e?"—":`${Math.round(e)}%`,this._t("stat.battery"),null!==e&&e<=25?"bad":"")}
      ${this._block("power",l,c,null!==i&&i>=80?"bad":"")}
      ${this._block("input_voltage",n?this._t("stat.no_utility"):null===a?"—":`${Math.round(a)} V`,null!==o&&null!==r?this._t("stat.utility_range",{low:o,high:r}):this._t("stat.utility"),n||null!==a&&null!==o&&null!==r&&(a<=o+5||a>=r-5)?"warn":"")}
    </div>`}_chip(t,e,s,i,a=""){return q`<div class="chip ${a}" @click=${()=>this._moreInfo(t)}>
      <ha-icon icon=${e}></ha-icon>
      <span class="chip-text">
        <span class="chip-value">${s}</span>
        <span class="chip-label">${i}</span>
      </span>
    </div>`}_renderHistory(){const t=this._num("outages"),e=this._text("last_outage"),s=this._seconds("last_outage_duration"),i=this._seconds("battery_time"),a=this._text("last_test"),o=this._state("last_test")?.attributes.resultado,r=this._num("battery_age"),n=[];if(null!==t&&n.push(this._chip(e?"last_outage":"outages","mdi:transmission-tower-off",1===t?this._t("history.outage_1"):t?this._t("history.outages_n",{n:t}):this._t("history.no_outages"),e?this._t("history.last_outage",{time:this._ago(e)})+(s?` · ${kt(s)}`:""):this._t("history.outages"))),null!==i&&n.push(this._chip("battery_time","mdi:battery-clock",kt(i),this._t("history.battery_time"))),this._entities.last_test){const t=o?.startsWith("Done and passed");n.push(this._chip("last_test",t?"mdi:battery-check":o?"mdi:battery-alert":"mdi:battery-unknown",a?this._ago(a):this._t("history.never"),o?this._t("history.test_result",{result:this._t(`result.${o}`)}):this._t("history.last_test"),o&&!t?"warn":""))}if(this._entities.battery_age||this._entities.battery_date){let t=this._t("history.no_date");if(null!==r){const[e,s]=function(t){const e=Math.floor(t/30.44);return[Math.floor(e/12),e%12]}(r);t=e?this._t("history.age_value",{y:e,m:s}):s?this._t("history.age_months",{m:s}):this._t("history.age_days",{d:r})}n.push(this._chip(this._entities.battery_date?"battery_date":"battery_age","mdi:car-battery",t,this._t("history.age")))}if(this._entities.health){const t=this._num("health"),e=this._num("real_runtime");n.push(this._chip("health","mdi:battery-heart-variant",null===t?this._t("history.not_measured"):`${Math.round(t)}%`,null===t?this._t("history.health_pending"):null!==e?this._t("history.health_runtime",{time:kt(60*e)}):this._t("history.health"),null!==t&&t<60?"warn":""))}if(this._entities.v_min||this._entities.out_of_range){const t=this._num("v_min"),e=this._num("v_max"),s=this._seconds("out_of_range");n.push(this._chip("out_of_range","mdi:sine-wave",null!==t&&null!==e?`${Math.round(t)}–${Math.round(e)} V`:"—",s?this._t("history.grid_out",{time:kt(s)}):this._t("history.grid_ok"),s&&s>=600?"warn":""))}return n.length?q`<div class="history">${n}</div>`:W}_renderGraph(){const t=this._graph;if(!t||!t.power.length&&!t.voltage.length)return W;const e=e=>(e-t.start)/(t.end-t.start)*300,s=t.outages.map(([t,s])=>F`<rect class="outage" x=${e(t)} y="0" width=${Math.max(1.5,e(s)-e(t))} height=${46}></rect>`),i=(e,i,a,o,r)=>{const n=(t=>{const e=t.map(([,t])=>t);return e.length?[Math.min(...e),Math.max(...e)]:null})(i);return q`<div class="graph" @click=${()=>this._moreInfo(e)}>
        <div class="graph-head">
          <span>${this._t(r)}</span>
          <span>${n?`${this._number(n[0])}–${this._number(n[1])} ${o}`:"—"}</span>
        </div>
        <svg viewBox="0 0 ${300} ${46}" preserveAspectRatio="none" aria-hidden="true">
          ${s}
          <polyline class=${a} points=${St(i,t.start,t.end,300,46)}></polyline>
        </svg>
      </div>`};return q`<div class="graphs">
      ${t.power.length?i(this._entities.power?"power":"load",t.power,"power",this._entities.power?"W":"%","graph.power"):W}
      ${t.voltage.length?i("input_voltage",t.voltage,"voltage","V","graph.voltage"):W}
      <div class="graph-foot">
        <span>${this._t("graph.last_24h")}</span>
        ${t.outages.length?q`<span class="legend"><i></i>${this._t(1===t.outages.length?"graph.outage_1":"graph.outages",{n:t.outages.length})}</span>`:W}
      </div>
    </div>`}_iconButton(t,e,s,i=""){const a=this._t(e);return q`
      <ha-icon-button class=${i} .label=${a} title=${a} @click=${s}>
        <ha-icon icon=${t}></ha-icon>
      </ha-icon-button>
    `}_textButton(t,e,s,i=""){return q`<button class="text-button ${i}" @click=${s}><ha-icon icon=${t}></ha-icon>${this._t(e)}</button>`}_renderSensitivity(){const t=this._state("sensitivity");if(!t||Ot.has(t.state))return W;const e=t.attributes.options??["low","medium","high"];return q`
      <label class="select" title=${this._t("action.sensitivity")}>
        <ha-icon icon="mdi:tune-vertical"></ha-icon>
        <select @change=${t=>this._setSensitivity(t.target.value)}>
          ${e.map(e=>q`<option value=${e} ?selected=${e===t.state}>${this._t(`sensitivity.${e}`)}</option>`)}
        </select>
      </label>
    `}_renderToolbar(t){if(!this._config.show_toolbar||"unavailable"===t)return W;const e=this._state("beeper"),s="on"===e?.state;let i;i="shutdown"===t&&this._available("cancel_shutdown")?[this._textButton("mdi:power-plug","action.cancel_shutdown",()=>this._press("cancel_shutdown"),"danger")]:"testing"===t?[this._available("stop_test")?this._textButton("mdi:stop","action.stop_test",()=>this._press("stop_test"),"danger"):W]:[this._available("quick_test")?this._textButton("mdi:battery-check","action.quick_test",()=>this._press("quick_test")):W,this._available("deep_test")?this._iconButton("mdi:battery-sync","action.deep_test",()=>this._press("deep_test","action.confirm_deep")):W,this._available("panel_test")?this._iconButton("mdi:led-on","action.panel_test",()=>this._press("panel_test")):W];const a=[s&&yt.has(t)&&this._available("mute")?this._iconButton("mdi:volume-mute","action.mute",()=>this._press("mute"),"active"):W,e&&!Ot.has(e.state)?this._iconButton(s?"mdi:volume-high":"mdi:volume-off",s?"action.beeper_off":"action.beeper_on",()=>this._toggle("beeper")):W,this._state("shedding")&&!Ot.has(this._state("shedding").state)?this._iconButton("on"===this._state("shedding").state?"mdi:leaf":"mdi:leaf-off","on"===this._state("shedding").state?"action.shedding_off":"action.shedding_on",()=>this._toggle("shedding"),"on"===this._state("shedding").state?"on":""):W,this._renderSensitivity()],o=[...i,...a].filter(t=>t!==W);return o.length?q`<div class="toolbar">${o}</div>`:W}};t([ut({attribute:!1})],Ut.prototype,"hass",void 0),t([pt()],Ut.prototype,"_config",void 0),t([pt()],Ut.prototype,"_graph",void 0),Ut=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})(_t)],Ut),window.customCards=window.customCards||[],window.customCards.push({type:_t,name:Pt("common.name"),description:Pt("common.description"),preview:!0,documentationURL:"https://github.com/hudsonbrendon/nobreak-card",getEntitySuggestion:(t,e)=>{const s=t.entities?.[e];return s&&s.platform===gt&&s.device_id?{config:{type:`custom:${_t}`,device:s.device_id}}:null}});export{Ut as NobreakCard,At as buildGraph,xt as computeState,St as polyline,$t as resolveEntities,wt as statusFlags};
//# sourceMappingURL=nobreak-card.js.map
