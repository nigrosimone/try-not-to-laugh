import{y as Xu}from"./chunk-QZNUJNV4.js";import{$a as Nu,Bb as Uu,Cb as Vu,Db as Gu,Eb as _i,Fb as Hu,Gb as qu,Pa as Ft,Pb as ju,S as Eu,T as ku,V as Su,Va as Fu,Vb as Qo,Wa as wi,Y as Ko,_a as Xo,da as Ru,dc as Ku,ea as Iu,eb as Pu,fa as bi,fb as Yo,g as Cu,ga as Du,kb as fr,lb as pr,mb as Mn,nb as Mu,ob as Ou,pb as Bu,qa as eo,qb as qt,ra as Cn,rb as jt,sa as Tu,sb as hr,tb as $o,ub as Lu,wb as Wu,xb as zu,ya as Au}from"./chunk-GSBCVLF7.js";import{c as gi,e as yi,f as Hh,h as xi}from"./chunk-WWX6BADO.js";var $u=yi(()=>{});var Ju=yi((dr,Qu)=>{Qu.exports=dr=window.fetch;dr.default=window.fetch.bind(window);dr.Headers=window.Headers;dr.Request=window.Request;dr.Response=window.Response});var Zu=yi(()=>{});var $0=(()=>{class r{constructor(){this.viewPortSubject=new Cu(!1),this.viewPortChanges=this.viewPortSubject.asObservable(),window.addEventListener("resize",()=>this.viewPortSubject.next(!0)),window.addEventListener("orientationchange",()=>this.viewPortSubject.next(!0))}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275prov=Eu({token:r,factory:r.\u0275fac,providedIn:"root"})}}return r})();var Bc=function(r,t){return(Bc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])})(r,t)};function Ot(r,t){function e(){this.constructor=r}Bc(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function J(r,t,e,n){return new(e||(e=Promise))(function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,t||[])).next())})}function Z(r,t){var e,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(f){l=[6,f],n=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var qh=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,o=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return jh(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function jh(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function M(){return Lc}var Lc=null,da=new Map,Hi=new Map;function Wc(r,t){var e=Uc(r,t);return da.get(e)}function Kh(r){return Hi.get(r)}function ec(r){for(var t=da.entries(),e=[];;){var n=t.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&e.push(s)}return e}function zc(r){var t=r.kernelName,e=r.backendName,n=Uc(t,e);if(da.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");da.set(n,r)}function Xh(r){var t=r.kernelName;Hi.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),Hi.set(t,r)}function Uc(r,t){return t+"_"+r}function tc(r){for(var t=r.length,e=0,n=0;t>0;)n=Math.random()*t|0,e=r[--t],r[t]=r[n],r[n]=e}function va(r,t,e){return Math.max(r,Math.min(t,e))}function fs(r){return r%2==0?r:r+1}function Vc(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function E(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function xe(r,t,e){e===void 0&&(e=""),E(Ve(r,t),function(){return e+" Shapes "+r+" and "+t+" must match"})}function Xn(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function cn(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||rt(r)&&!e)for(var n=0;n<r.length;++n)cn(r[n],t,e);else t.push(r);return t}function ee(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function Ve(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Be(r){return r%1==0}function Gc(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function ma(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function Vn(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function qi(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise(function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=t(a);e!=null&&a>=e?o():setTimeout(i,s)}};i()})}function Hc(r,t){for(var e=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var a=r.slice();return a[n]=t/e,a}function He(r,t){var e=t.length;return E((r=r==null?t.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-e&&n<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),E(r.every(function(n){return Be(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?e+n:n})}function En(r,t){for(var e=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||o?null:He(t,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function Sr(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function lo(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function qc(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function jc(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function Kc(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function rt(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function ps(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function Xc(r){if(r==null)return 0;var t=0;return r.forEach(function(e){return t+=e.length}),t}function kn(r){return typeof r=="string"||r instanceof String}function Yc(r){return typeof r=="boolean"}function $c(r){return typeof r=="number"}function Ir(r){return Array.isArray(r)?Ir(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":$c(r)?"float32":kn(r)?"string":Yc(r)?"bool":"float32"}function ga(r){return!!(r&&r.constructor&&r.call&&r.apply)}function ya(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function Pt(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function hs(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=cn(r)),e&&qc(r,t),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+t)}function ji(r,t){if(r.length===0)return t[0];var e=r.reduce(function(n,o){return n*o});if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),f=l.reduce(function(p,h){return p*h});for(c=0;c<u;c++)s[c]=n(o+c*f,l,i)}return s}(0,r,t)}function ds(r,t){for(var e=Dr(r,t),n=0;n<e.length;n++)e[n]=1;return e}function Dr(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function Nt(){return M().platform.now()}function vs(r){r.forEach(function(t){E(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function Qc(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.encode(r,t)}function fo(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.decode(r,t)}function Ki(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=e[o]*r[o];return n}function Jc(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),o=0;o<n.length-1;++o)n[o]=Math.floor(r/e[o]),r-=n[o]*e[o];return n[n.length-1]=r,n}var nx=Object.freeze({shuffle:tc,clamp:va,nearestLargerEven:fs,sum:Vc,randUniform:function(r,t){var e=Math.random();return t*e+(1-e)*r},distSquared:function(r,t){for(var e=0,n=0;n<r.length;n++){var o=Number(r[n])-Number(t[n]);e+=o*o}return e},assert:E,assertShapesMatch:xe,assertNonNull:Xn,flatten:cn,sizeFromShape:ee,isScalarShape:function(r){return r.length===0},arraysEqual:Ve,isInt:Be,tanh:Gc,sizeToSquarishShape:ma,createShuffledIndices:function(r){for(var t=new Uint32Array(r),e=0;e<r;++e)t[e]=e;return tc(t),t},rightPad:Vn,repeatedTry:qi,inferFromImplicitShape:Hc,parseAxisParam:He,squeezeShape:En,getTypedArrayFromDType:Sr,getArrayFromDType:lo,checkConversionForErrors:qc,isValidDtype:jc,hasEncodingLoss:Kc,isTypedArray:rt,bytesPerElement:ps,bytesFromStringArray:Xc,isString:kn,isBoolean:Yc,isNumber:$c,inferDtype:Ir,isFunction:ga,nearestDivisor:ya,computeStrides:Pt,toTypedArray:hs,toNestedArray:ji,makeOnesTypedArray:ds,makeZerosTypedArray:Dr,now:Nt,assertNonNegativeIntegerDimensions:vs,fetch:function(r,t){return M().platform.fetch(r,t)},encodeString:Qc,decodeString:fo,locToIndex:Ki,indexToLoc:Jc}),Yh=function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new $h)}return r.prototype.profileKernel=function(t,e,n){var o,a=this,i=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var p=0;p<c.length;p++){var h=c[p];if(isNaN(h)||!isFinite(h))return console.warn("Found "+h+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},r}(),$h=function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,o,a,i){var s=typeof o=="number"?Vn(o+"ms",9):o.error,u=Vn(t,25),c=e.rank,l=e.size,f=Vn(e.shape.toString(),14),p="";for(var h in a){var d=a[h].shape||e.shape,m=d.length;p+=h+": "+m+"D "+(m>0?d:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+p+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),nc=20,to=3,Ci=7;function Qh(r,t,e,n){var o=Pt(t),a=function(c,l,f,p){var h=ee(l),d=p[p.length-1],m=new Array(d).fill(0),v=l.length,g=f==="complex64"?ro(c):c;if(v>1)for(var x=0;x<h/d;x++)for(var b=x*d,y=0;y<d;y++)m[y]=Math.max(m[y],no(g[b+y],0,f).length);return m}(r,t,e,o),i=t.length,s=function c(l,f,p,h,d,m){m===void 0&&(m=!0);var v=p==="complex64"?2:1,g=f[0],x=f.length;if(x===0)return p==="complex64"?[no(ro(l)[0],0,p)]:p==="bool"?[Zc(l[0])]:[l[0].toString()];if(x===1){if(g>nc){var b=to*v,y=Array.from(l.slice(0,b)),w=Array.from(l.slice((g-to)*v,g*v));return p==="complex64"&&(y=ro(y),w=ro(w)),["["+y.map(function(B,U){return no(B,d[U],p)}).join(", ")+", ..., "+w.map(function(B,U){return no(B,d[g-to+U],p)}).join(", ")+"]"]}return["["+(p==="complex64"?ro(l):Array.from(l)).map(function(B,U){return no(B,d[U],p)}).join(", ")+"]"]}var _=f.slice(1),I=h.slice(1),R=h[0]*v,k=[];if(g>nc){for(var S=0;S<to;S++){var F=(A=S*R)+R;k.push.apply(k,c(l.slice(A,F),_,p,I,d,!1))}for(k.push("..."),S=g-to;S<g;S++)F=(A=S*R)+R,k.push.apply(k,c(l.slice(A,F),_,p,I,d,S===g-1))}else for(S=0;S<g;S++){var A;F=(A=S*R)+R,k.push.apply(k,c(l.slice(A,F),_,p,I,d,S===g-1))}var L=x===2?",":"";for(k[0]="["+k[0]+L,S=1;S<k.length-1;S++)k[S]=" "+k[S]+L;var O=`,
`;for(S=2;S<x;S++)O+=`
`;return k[k.length-1]=" "+k[k.length-1]+"]"+(m?"":O),k}(r,t,e,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function no(r,t,e){return Vn(Array.isArray(r)?parseFloat(r[0].toFixed(Ci))+" + "+parseFloat(r[1].toFixed(Ci))+"j":kn(r)?"'"+r+"'":e==="bool"?Zc(r):parseFloat(r.toFixed(Ci)).toString(),t)}function Zc(r){return r===0?"false":"true"}function ro(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var po=function(){function r(t,e,n){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=ee(t),n!=null){var a=n.length;E(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||lo(e,this.size),this.strides=Pt(t)}return r.prototype.set=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),E(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var a=this.locToIndex(n);this.values[a]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,o=0,a=t;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Kt().makeTensor(this.values,this.shape,this.dtype)},r}(),Kt=null,P=null,el=null,ke=function(){function r(t,e,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=ee(t),this.strides=Pt(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,o){return this.throwIfDisposed(),this.reshape([t,e,n,o])},r.prototype.as5D=function(t,e,n,o,a){return this.throwIfDisposed(),this.reshape([t,e,n,o,a])},r.prototype.asType=function(t){return this.throwIfDisposed(),P.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return J(this,void 0,void 0,function(){var t;return Z(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,P.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return P.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return J(this,void 0,void 0,function(){var t;return Z(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,ji(this.shape,t)]}})})},r.prototype.arraySync=function(){return ji(this.shape,this.dataSync())},r.prototype.data=function(){return J(this,void 0,void 0,function(){var t,e;return Z(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=Kt().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map(function(o){return fo(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=Kt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return fo(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return J(this,void 0,void 0,function(){var t;return Z(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,Kt().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Kt().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),P.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),P.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),P.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),P.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),P.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),P.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),P.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),Qh(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),P.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),P.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),P.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),P.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),P.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),P.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),P.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),P.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),P.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),P.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,o,a){return n===void 0&&(n=.001),el("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,a,o,n)},r.prototype.batchNorm=function(t,e,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),P.batchNorm(this,t,e,n,o,a)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),P.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),P.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),P.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),P.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),P.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),P.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),P.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),P.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),P.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),P.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),P.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),P.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),P.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),P.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),P.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),P.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),P.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),P.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),P.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),P.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),P.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),P.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),P.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),P.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),P.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),P.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),P.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),P.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),P.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),P.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),P.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),P.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),P.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),P.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),P.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),P.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),P.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),P.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),P.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),P.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),P.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),P.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),P.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),P.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),P.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),P.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),P.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),P.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),P.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),P.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),P.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),P.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),P.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),P.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),P.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),P.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),P.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),P.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),P.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),P.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),P.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),P.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),P.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),P.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),P.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),P.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),P.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),P.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),P.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),P.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),P.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),P.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),P.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),P.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),P.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),P.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),P.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),P.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),P.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),P.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),P.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),P.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),P.conv1d(this,t,e,n,o,a,i)},r.prototype.conv2d=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),P.conv2d(this,t,e,n,o,a,i)},r.prototype.conv2dTranspose=function(t,e,n,o,a){return this.throwIfDisposed(),P.conv2dTranspose(this,t,e,n,o,a)},r.prototype.depthwiseConv2D=function(t,e,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),P.depthwiseConv2d(this,t,e,n,o,a,i)},r.prototype.separableConv2d=function(t,e,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),P.separableConv2d(this,t,e,n,o,a,i)},r.prototype.avgPool=function(t,e,n,o){return this.throwIfDisposed(),P.avgPool(this,t,e,n,o)},r.prototype.maxPool=function(t,e,n,o){return this.throwIfDisposed(),P.maxPool(this,t,e,n,o)},r.prototype.localResponseNormalization=function(t,e,n,o){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5),P.localResponseNormalization(this,t,e,n,o)},r.prototype.pool=function(t,e,n,o,a){return this.throwIfDisposed(),P.pool(this,t,e,n,o,a)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),Kt().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),P.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),P.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),P.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),P.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),P.stridedSlice(this,t,e,n,o,a,i,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),P.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),P.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),P.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),P.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),P.spectral.irfft(this)},r}();Object.defineProperty(ke,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var rc,Xi,Yi,$i,Qi,Hn=function(r){function t(e,n,o,a){var i=r.call(this,e.shape,e.dtype,e.dataId,a)||this;return i.trainable=n,i.name=o,i}return Ot(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Ve(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");Kt().disposeTensor(this),this.dataId=e.dataId,Kt().incRef(this,null)},t.prototype.dispose=function(){Kt().disposeVariable(this),this.isDisposedInternal=!0},t}(ke);Object.defineProperty(Hn,Symbol.hasInstance,{value:function(r){return r instanceof ke&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(rc||(rc={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(Xi||(Xi={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(Yi||(Yi={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}($i||($i={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(Qi||(Qi={}));var Jh={float32:$i,int32:Xi,bool:Yi,complex64:Qi};function Xe(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return Jh[r][t]}function Ei(r){return Xe(r,"int32")}function Ae(r,t){if(r.dtype===t.dtype)return[r,t];var e=Xe(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function tl(r,t){E(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function ms(r){var t=[];return function e(n,o,a){if(n!=null){if(n instanceof ke)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),e(c,o,a))}}}}(r,t,new Set),t}var ki,rx=Object.freeze({makeTypesMatch:Ae,assertTypesMatch:tl,isTensorInList:function(r,t){return t.some(function(e){return e.id===r.id})},getTensorsInContainer:ms}),oc=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),Zh=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new oc}return r.prototype.ready=function(){return J(this,void 0,void 0,function(){var t,e,n;return Z(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return J(this,void 0,void 0,function(){var e,n,o;return Z(this,function(a){switch(a.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Yh(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;ec(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var e=this;ec(t).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])})},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(a<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),o=n.backend,a=this.readSync(e);o.disposeData(e),n.backend=t,t.move(e,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,o=this,a=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=t}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(n)},function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(t,e,n){t();try{var o=n();return e(),o}catch(a){throw e(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(t,e,n,o,a){return this.runKernelFunc(null,e,null,t,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var o=this.backend.numDataIds(),a=0;n.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var p,h=function(x){f&&(l=x.map(function(b){return c.keep(c.clone(b))}))},d=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,g=Wc(o,this.backendName);return p=g!=null?function(){var x=c.backend.numDataIds();v=g.kernelFunc({inputs:e,attrs:a,backend:c.backend});var b=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b);var y=b.map(function(_){var I=_.dataId,R=_.shape,k=_.dtype;return c.makeTensorFromDataId(I,R,k)}),w=y.filter(function(_,I){return s[I]});return h((i||[]).slice().concat(w)),y}:function(){var x=c.backend.numDataIds();v=c.tidy(function(){return t(c.backend,h)});var b=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return p()}):p()}),f&&this.addTapeNode(o,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-d,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(x){return e[x].shape}),outputShapes:u.map(function(x){return x.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(t,e,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=t;n==="string"&&kn(t[0])&&(a=t.map(function(l){return Qc(l)}));var i=o.write(a,e,n),s=new ke(e,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=Xc(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,o){var a=new ke(e,n=n||"float32",t,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(t,e,n,o){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var a=new Hn(t,e,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*ps(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof Hn||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return J(this,void 0,void 0,function(){var e,n;return Z(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:a},u=Kh(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var p=n[f],h=Dr(p.size,p.dtype);return i.makeTensor(h,p.shape,p.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=ms(t),o=new Set(n.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(t,e,n,o){var a=this;if(o===void 0&&(o=!1),E(e.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",t)});E(i instanceof ke,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},p={},h=0;h<c.length;h++)f[c[h].id]=!0;for(h=0;h<u.length;h++){var d=(_=u[h]).inputs;for(var m in d){for(var v=d[m],g=!1,x=0;x<c.length;x++)if(f[v.id]){_.outputs.forEach(function(S){return f[S.id]=!0}),g=!0,p[_.id]=!0;break}if(g)break}}var b={};b[l.id]=!0;var y={};for(h=u.length-1;h>=0;h--)for(d=(_=u[h]).inputs,x=0;x<_.outputs.length;x++)if(b[_.outputs[x].id]){for(var m in d)b[d[m].id]=!0,y[_.id]=!0;break}var w=[];for(h=0;h<u.length;h++){var _;if(p[(_=u[h]).id]&&y[_.id]){var I={};for(var m in _.inputs){var R=_.inputs[m];f[R.id]&&(I[m]=R)}var k=Object.assign({},_);k.inputs=I,k.outputs=_.outputs,w.push(k)}}return w}(this.state.activeTape,e,i);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n??(u=i.shape,c=ds(ee(u),"float32"),T.makeTensor(c,u,"float32")),function(p,h,d){for(var m=function(g){var x=h[g],b=[];if(x.outputs.forEach(function(I){var R=p[I.id];R!=null?b.push(R):b.push(null)}),x.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+x.kernelName+".");var y=x.gradient(b),w=function(I){if(!(I in y))throw new Error("Cannot backprop through input "+I+". Available gradients found: "+Object.keys(y)+".");var R=d(function(){return y[I]()});if(R.dtype!=="float32")throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input "+I+" must have 'float32' dtype, but has '"+R.dtype+"'");var k=x.inputs[I];if(!Ve(R.shape,k.shape))throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input '"+I+"' has shape '"+R.shape+"', which does not match the shape of the input '"+k.shape+"'");if(p[k.id]==null)p[k.id]=R;else{var S=p[k.id];p[k.id]=S.add(R),S.dispose()}};for(var _ in x.inputs)w(_)},v=h.length-1;v>=0;v--)m(v)}(l,s,function(p){return a.tidy(p)});var f=e.map(function(p){return l[p.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(p){for(var h=0,d=p.saved;h<d.length;h++)d[h].dispose()}),a.state.activeTape=null),{value:i,grads:f}})},r.prototype.customGrad=function(t){var e=this;return E(ga(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];E(o.every(function(s){return s instanceof ke}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return E((n=t.apply(void 0,o.concat([u]))).value instanceof ke,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(ga(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(p){return p instanceof ke}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(p,h){f[h]=function(){return p}}),f})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return J(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return e=Nt(),[4,this.backend.time(t)];case 1:return(n=o.sent()).wallMs=Nt()-e,[2,n]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new oc,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),T=function(){var r=function(){if(ki==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}ki=e}return ki}();if(r._tfengine==null){var t=new qh(r);r._tfengine=new Zh(t)}return function(e){Lc=e}(r._tfengine.ENV),Kt=function(){return r._tfengine},r._tfengine}();function nl(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var on=M();on.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),on.registerFlag("IS_BROWSER",function(){return nl()}),on.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),on.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),on.registerFlag("PROD",function(){return!1}),on.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return on.getBool("DEBUG")}),on.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),on.registerFlag("IS_TEST",function(){return!1});var ho,_t,wt,Ln={},Si={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function rl(r,t){Ln[r]=t}function Qt(r){r in Ln||(Ln[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete Ln[e]},!1),e===1?n.getContext("webgl",Si)||n.getContext("experimental-webgl",Si):n.getContext("webgl2",Si)}(r));var t=Ln[r];return t.isContextLost()?(delete Ln[r],Qt(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Ln[r])}function Ta(r,t){return[t,r]}function uo(r){var t=ee(r);return ma(Math.ceil(t/4))}function wo(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function gs(r,t){var e,n,o,a,i,s,u,c,l,f=r;return M().getNumber("WEBGL_VERSION")===2?(e=f.R32F,n=f.R16F,o=f.RGBA16F,a=f.RGBA32F,i=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=r.RGBA,n=r.RGBA,o=r.RGBA,a=f.RGBA,i=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function Q(r,t,e){var n=e();return t&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+al(o,a))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(ho||(ho={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(_t||(_t={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(wt||(wt={}));var ed=596e-10,td=65504;function ol(r){return!!(M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||ed<Math.abs(r)&&Math.abs(r)<td)}function al(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function ao(r,t,e){return ln(r,t,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function il(r,t,e){var n=ln(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(Q(r,t,function(){return r.shaderSource(n,e)}),Q(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function sl(r,t,e){var n=ln(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(Q(r,t,function(){return r.shaderSource(n,e)}),Q(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,a){var i=nd.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,g){return Vn((g+1).toString(),c)+v}),f=0,p=0;p<l.length;p++)f=Math.max(l[p].length,f);var h=l.slice(0,s-1),d=l.slice(s-1,s),m=l.slice(s);console.log(h.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+Vn(d[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))}(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var sa,ua,nd=/ERROR: [0-9]+:([0-9]+):/g;function ul(r,t){return ln(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function cl(r,t,e){if(Q(r,t,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function ca(r,t,e){if(Q(r,t,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function ll(r,t,e){var n=ln(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Q(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Q(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function fl(r,t,e){var n=ln(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Q(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),Q(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function pl(r,t){return ln(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function hl(r,t){var e=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function dl(r,t){return ln(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Ji(r,t,e,n,o,a,i,s){var u=r.getAttribLocation(e,n);return u!==-1&&(Q(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),Q(r,t,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),Q(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function vl(r,t,e,n){bl(r,n),Q(r,t,function(){return r.activeTexture(r.TEXTURE0+n)}),Q(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function ml(r,t,e,n){return ln(r,t,function(){return r.getUniformLocation(e,n)},'uniform "'+n+'" not present in program.')}function gl(r,t,e){return r.getUniformLocation(t,e)}function yl(r,t,e,n,o,a){Q(r,t,function(){return vl(r,t,n,a)}),Q(r,t,function(){return r.uniform1i(o,a)})}function la(r,t,e,n){Q(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),Q(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function Zi(r,t,e){Q(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),Q(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function io(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+xl(r,t))}function xl(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function ln(r,t,e,n){var o=Q(r,t,function(){return e()});if(o==null)throw new Error(n);return o}function bl(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function vo(r,t){return t===void 0&&(t=2),ee(r.slice(0,r.length-t))}function mo(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function fa(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[vo(r)].concat(mo(r))),t}function wl(r,t){var e;t===void 0&&(t=!1);var n=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?fs(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=En(r);r=o.newShape}var a=ee(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var i=vo(r),s=2,u=2;return r.length&&(s=(e=mo(r))[0],u=e[1]),ma(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return ma(a)}function Jo(r){return r%2==0}function so(r,t){if(Ve(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||Jo(e)&&Jo(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&Jo(r[0])&&Jo(t[0])}function _l(r){if(sa==null){var t=Qt(r);sa=t.getParameter(t.MAX_TEXTURE_SIZE)}return sa}function Cl(r){if(ua==null){var t=Qt(r);ua=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,ua)}function El(r){if(r===0)return 0;var t=Qt(r);return Ct(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:Ct(t,"EXT_disjoint_timer_query")?1:0}function Ct(r,t){return r.getExtension(t)!=null}function es(r){try{if(Qt(r)!=null)return!0}catch{return!1}return!1}function kl(r){if(r===0)return!1;var t=Qt(r);if(r===1){if(!Ct(t,"OES_texture_float"))return!1}else if(!Ct(t,"EXT_color_buffer_float"))return!1;return ts(t)}function Sl(r){if(r===0)return!1;var t=Qt(r);if(r!==1){if(Ct(t,"EXT_color_buffer_float"))return ts(t);if(Ct(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(n,o){var a=gs(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(t,e)}return!1}return!!Ct(t,"OES_texture_float")&&!!Ct(t,"WEBGL_color_buffer_float")&&ts(t)}function ts(r){var t=gs(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),o}function Rl(r){return r===2&&Qt(r).fenceSync!=null}var rd=Object.freeze({callAndCheck:Q,canBeRepresented:ol,getWebGLErrorMessage:al,getExtensionOrThrow:ao,createVertexShader:il,createFragmentShader:sl,createProgram:ul,linkProgram:cl,validateProgram:ca,createStaticVertexBuffer:ll,createStaticIndexBuffer:fl,getNumChannels:function(){return M().getNumber("WEBGL_VERSION")===2?1:4},createTexture:pl,validateTextureSize:hl,createFramebuffer:dl,bindVertexBufferToProgramAttribute:Ji,bindTextureUnit:vl,unbindTextureUnit:function(r,t,e){bl(r,e),Q(r,t,function(){return r.activeTexture(r.TEXTURE0+e)}),Q(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})},getProgramUniformLocationOrThrow:ml,getProgramUniformLocation:gl,bindTextureToProgramUniformSampler:yl,bindCanvasToFramebuffer:function(r,t){Q(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,null)}),Q(r,t,function(){return r.viewport(0,0,r.canvas.width,r.canvas.height)}),Q(r,t,function(){return r.scissor(0,0,r.canvas.width,r.canvas.height)})},bindColorTextureToFramebuffer:la,unbindColorTextureFromFramebuffer:Zi,validateFramebuffer:io,getFramebufferErrorMessage:xl,getBatchDim:vo,getRowsCols:mo,getShapeAs3D:fa,getTextureShapeFromLogicalShape:wl,isReshapeFree:so,getWebGLMaxTextureSize:_l,resetMaxTextureSize:function(){sa=null},resetMaxTexturesInShader:function(){ua=null},getMaxTexturesInShader:Cl,getWebGLDisjointQueryTimerVersion:El,hasExtension:Ct,isWebGLVersionEnabled:es,isCapableOfRenderingToFloatTexture:kl,isDownloadFloatTextureEnabled:Sl,isWebGLFenceEnabled:Rl}),ae=M();function Il(r){M().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function G(r,t){return T.tidy(r,t)}function yt(r){ms(r).forEach(function(t){return t.dispose()})}function od(r){return T.keep(r)}function xa(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];M().getBool("IS_TEST")||console.warn.apply(console,r)}function $t(r,t){var e=r;if(rt(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||rt(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&M().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!rt(a))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),E(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,n,[]),n}function ac(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function C(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof ke)return ac(n,r.dtype,t,e),r;var o=Ir(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),ac(n,o,t,e),r==null||!rt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=$t(r,o);rt(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?hs(r,o,M().getBool("DEBUG")):cn(r,[],!0);return T.makeTensor(s,i,o)}function ba(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return C(o,t+"["+a+"]",e)},n)}function ys(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function Dl(r,t,e){for(var n=r.length+t.length,o=[],a=0,i=0,s=0;s<n;s++)e.indexOf(s)===-1?o.push(r[a++]):o.push(t[i++]);return o}function nt(r,t){for(var e=[],n=r.length,o=0;o<n;o++)t.indexOf(o)===-1&&e.push(r[o]);return[e,t.map(function(a){return r[a]})]}function ft(r,t){return Dl(r,t.map(function(e){return 1}),t)}function mt(r,t,e){E(ys(t,e),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function Bt(r,t){if(ys(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach(function(o){return e.push(o)}),e}function Aa(r){return r.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function Lt(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function Tl(r,t){var e=r[0].length;r.forEach(function(o,a){E(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+e+")"})}),E(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var n=r[0];r.forEach(function(o,a){for(var i=0;i<e;i++)E(i===t||o[i]===n[i],function(){return"Error in concat"+e+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."})})}function qn(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function D(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];T.startScope(e);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),T.endScope(s),s}catch(u){throw T.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}ae.registerFlag("HAS_WEBGL",function(){return ae.getNumber("WEBGL_VERSION")>0}),ae.registerFlag("WEBGL_VERSION",function(){return es(2)?2:es(1)?1:0}),ae.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return ae.get("WEBGL_VERSION")===2}),ae.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),ae.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),ae.registerFlag("WEBGL_PACK",function(){return ae.getBool("HAS_WEBGL")}),ae.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_CLIP",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),ae.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_PACK_REDUCE",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_LAZILY_UNPACK",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_CONV_IM2COL",function(){return ae.getBool("WEBGL_PACK")}),ae.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return _l(ae.getNumber("WEBGL_VERSION"))}),ae.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Cl(ae.getNumber("WEBGL_VERSION"))}),ae.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=ae.getNumber("WEBGL_VERSION");return r===0?0:El(r)}),ae.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return ae.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),ae.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return kl(ae.getNumber("WEBGL_VERSION"))}),ae.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!ae.getBool("WEBGL_FORCE_F16_TEXTURES")&&ae.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),ae.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Sl(ae.getNumber("WEBGL_VERSION"))}),ae.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return Rl(ae.getNumber("WEBGL_VERSION"))}),ae.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return ae.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),el=Il;var tt=D({complex_:function(r,t){var e=C(r,"real","complex"),n=C(t,"imag","complex");return xe(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),T.runKernelFunc(function(o){return o.complex(e,n)},{$real:e,$imag:n})}}),St=D({real_:function(r){var t=C(r,"input","real");return T.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),Xt=D({imag_:function(r){var t=C(r,"input","imag");return T.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function Ye(r,t,e){return In(r,t,$t(r,e),e)}function In(r,t,e,n){if(n==null&&(n=Ir(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!rt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){vs(t);var o=ee(t),a=ee(e);E(o===a,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==ee(t.slice(i));E(e[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return rt(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?hs(r,n,M().getBool("DEBUG")):cn(r,[],!0),T.makeTensor(r,t,n)}function X(r,t){if((rt(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&rt(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return In(r,[],[],t)}function Re(r,t){Xn(r);var e=$t(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return In(r,null,e,t)}function Yt(r,t,e){if(Xn(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=$t(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return In(r,t,n,e)}function Fa(r,t,e){if(Xn(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=$t(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return In(r,t,n,e)}function je(r,t,e){if(Xn(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=$t(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return In(r,t,n,e)}function ad(r,t,e){if(Xn(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=$t(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return In(r,t,n,e)}function id(r,t,e){if(Xn(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=$t(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return In(r,t=t||n,n,e)}function sd(r,t,e,n){return t===void 0&&(t=!0),T.makeVariable(r,t,e,n)}function Tr(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Tr(r,"float32"),n=Ie(r,"float32");return tt(e,n)}var o=ds(ee(r),t);return T.makeTensor(o,r,t)}function Ie(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Ie(r,"float32"),n=Ie(r,"float32");return tt(e,n)}var o=Dr(ee(r),t);return T.makeTensor(o,r,t)}function kt(r,t,e){return T.runKernelFunc(function(n){return n.fill(r,t,e)},{})}function ud(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return T.runKernelFunc(function(n){return n.linspace(r,t,e)},{})}function wa(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return Ie([0],n);var o=Dr(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+e;return Re(o,n)}var Al=D({onesLike_:function(r){var t=C(r,"x","onesLike");if(t.dtype==="complex64"){var e=Al(St(t)),n=ge(Xt(t));return tt(e,n)}return T.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,a){return{$x:function(){return ge(o)}}})}}),ge=D({zerosLike_:function(r){var t=C(r,"x","zerosLike");return T.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,n){return{$x:function(){return ge(e)}}})}}),Te=D({concat_:function(r,t){t===void 0&&(t=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=ba(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=He(t,e[0].shape)[0];var n=qn(e.map(function(s){return s.shape}),t);if(ee(n)===0)return Ye([],n);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});Tl(o,t);var a=e,i={axis:t};return T.runKernelFunc(function(s){return s.concat(e,t)},a,function(s){var u=o.map(function(c){return c[t]});return xs(s,u,t).map(function(c){return function(){return c}})},"Concat",i)}}),cd=D({concat1d_:function(r){return Te(r,0)}}),ld=D({concat2d_:function(r,t){return Te(r,t)}}),fd=D({concat3d_:function(r,t){return Te(r,t)}}),pd=D({concat4d_:function(r,t){return Te(r,t)}}),xs=D({split_:function(r,t,e){e===void 0&&(e=0);var n,o=C(r,"x","split");return e=He(e,o.shape)[0],typeof t=="number"?(E(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(t).fill(o.shape[e]/t)):(E(o.shape[e]===t.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t),T.runKernelFunc(function(a){return a.split(o,n,e)},{$x:o},function(a){return{$x:function(){return Te(a,e)}}})}});function Yn(r,t){return r(t={exports:{}},t.exports),t.exports}var hd=Yn(function(r){(function(t,e,n){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var p=0;p<f.length;p++){var h=.02519603282416938*(u+=f.charCodeAt(p));h-=u=h>>>0,u=(h*=u)>>>0,u+=4294967296*(h-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.alea=i})(0,r,!1)}),dd=Yn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor128=i})(0,r,!1)}),vd=Yn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorwow=i})(0,r,!1)}),md=Yn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.x,p=u.i;return c=f[p],l=(c^=c>>>7)^c<<24,l^=(c=f[p+1&7])^c>>>10,l^=(c=f[p+3&7])^c>>>3,l^=(c=f[p+4&7])^c<<7,c=f[p+7&7],l^=(c^=c<<13)^c<<9,f[p]=l,u.i=p+1&7,l},function(c,l){var f,p=[];if(l===(0|l))p[0]=l;else for(l=""+l,f=0;f<l.length;++f)p[7&f]=p[7&f]<<15^l.charCodeAt(f)+p[f+1&7]<<13;for(;p.length<8;)p.push(0);for(f=0;f<8&&p[f]===0;++f);for(f==8?p[7]=-1:p[f],c.x=p,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},f.int32=c.next,f.quick=f,l&&(l.x&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorshift7=i})(0,r,!1)}),gd=Yn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,f=u.w,p=u.X,h=u.i;return u.w=f=f+1640531527|0,l=p[h+34&127],c=p[h=h+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=p[h]=l^c,u.i=h,l+(f^f>>>16)|0},function(c,l){var f,p,h,d,m,v=[],g=128;for(l===(0|l)?(p=l,l=null):(l+="\0",p=0,g=Math.max(g,l.length)),h=0,d=-32;d<g;++d)l&&(p^=l.charCodeAt((d+32)%l.length)),d===0&&(m=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,d>=0&&(m=m+1640531527|0,h=(f=v[127&d]^=p+m)==0?h+1:0);for(h>=128&&(v[127&(l&&l.length||0)]=-1),h=127,d=512;d>0;--d)p=v[h+34&127],f=v[h=h+1&127],p^=p<<13,f^=f<<17,p^=p>>>15,f^=f>>>12,v[h]=p^f;c.w=m,c.X=v,c.i=h}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},f.int32=c.next,f.quick=f,l&&(l.X&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor4096=i})(0,r,!1)}),yd=Yn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var f=u.b,p=u.c,h=u.d,d=u.a;return f=f<<25^f>>>7^p,p=p-h|0,h=h<<24^h>>>8^d,d=d-f|0,u.b=f=f<<20^f>>>12^p,u.c=p=p-h|0,u.d=h<<16^p>>>16^d,u.a=d-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var p=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(p===0);return p},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&a(l,c),f.state=function(){return a(c,{})}),f}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.tychei=i})(0,r,!1)}),Wn=Yn(function(r){(function(t,e){var n,o=this,a=256,i=6,s="random",u=e.pow(a,i),c=e.pow(2,52),l=2*c,f=a-1;function p(g,x,b){var y=[],w=m(function R(k,S){var F,A=[],L=typeof k;if(S&&L=="object")for(F in k)try{A.push(R(k[F],S-1))}catch{}return A.length?A:L=="string"?k:k+"\0"}((x=x==1?{entropy:!0}:x||{}).entropy?[g,v(t)]:g??function(){try{var R;return n&&(R=n.randomBytes)?R=R(a):(R=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(R)),v(R)}catch{var k=o.navigator,S=k&&k.plugins;return[+new Date,o,S,o.screen,v(t)]}}(),3),y),_=new h(y),I=function(){for(var R=_.g(i),k=u,S=0;R<c;)R=(R+S)*a,k*=a,S=_.g(1);for(;R>=l;)R/=2,k/=2,S>>>=1;return(R+S)/k};return I.int32=function(){return 0|_.g(4)},I.quick=function(){return _.g(4)/4294967296},I.double=I,m(v(_.S),t),(x.pass||b||function(R,k,S,F){return F&&(F.S&&d(F,_),R.state=function(){return d(_,{})}),S?(e[s]=R,k):R})(I,w,"global"in x?x.global:this==e,x.state)}function h(g){var x,b=g.length,y=this,w=0,_=y.i=y.j=0,I=y.S=[];for(b||(g=[b++]);w<a;)I[w]=w++;for(w=0;w<a;w++)I[w]=I[_=f&_+g[w%b]+(x=I[w])],I[_]=x;(y.g=function(R){for(var k,S=0,F=y.i,A=y.j,L=y.S;R--;)k=L[F=f&F+1],S=S*a+L[f&(L[F]=L[A=f&A+k])+(L[A]=k)];return y.i=F,y.j=A,S})(a)}function d(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function m(g,x){for(var b,y=g+"",w=0;w<y.length;)x[f&w]=f&(b^=19*x[f&w])+y.charCodeAt(w++);return v(x)}function v(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=p,m(e.random(),t),r.exports){r.exports=p;try{n=$u()}catch{}}})([],Math)});Wn.alea=hd,Wn.xor128=dd,Wn.xorwow=vd,Wn.xorshift7=md,Wn.xor4096=gd,Wn.tychei=yd;var Na=Wn.alea,bs=function(){function r(t,e,n,o,a){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=Na(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),xd=function(){function r(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;var a=o||Math.random();this.randu=Na(a.toString()),this.randn=new bs(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,e=1-.331*(t=o*o)*t,n=.5*t+this.d*(1-i+Math.log(i)),(a=this.randu())<e||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),bd=function(){function r(t,e,n,o){var a=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=Na(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function ie(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",vs(r),new po(r,t,e)}function wd(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var Fl=D({batchToSpaceND_:function(r,t,e){var n=C(r,"x","batchToSpaceND"),o=t.reduce(function(a,i){return a*i});return E(n.rank>=1+t.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length}),E(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),E(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),T.runKernelFunc(function(a){return a.batchToSpaceND(n,t,e)},{$x:n},function(a){return{$x:function(){return a.spaceToBatchND(t,e)}}})}}),_d=D({broadcastTo_:function(r,t){var e=C(r,"broadcastTo","x"),n=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var a=Array.from(t),i=t.length-1;i>=0;i--)if(e.shape[i]===t[i])a[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():T.runKernelFunc(function(u){return u.tile(e,a)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Cd=D({cast_:function(r,t){var e=C(r,"x","cast");if(!jc(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return T.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),Ed=D({clone_:function(r){var t=C(r,"x","clone",null);return T.runKernelFunc(function(){return T.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),kd=D({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var o=C(r,"x","cumsum"),a=Bt([t|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=Lt(1,o.rank)[0],u=T.runKernelFunc(function(c){return c.cumsum(i,s,e,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}});return a!=null&&(u=u.transpose(a)),u}}),Sd=D({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=C(r,"x","depthToSpace"),o=e==="NHWC"?n.shape[1]:n.shape[2],a=e==="NHWC"?n.shape[2]:n.shape[3],i=e==="NHWC"?n.shape[3]:n.shape[1];return E(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+n.shape}),E(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+` for depthToSpace with input shape
          `+n.shape}),E(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+n.shape}),T.runKernelFunc(function(s){return s.depthToSpace(n,t,e)},{$x:n})}}),it=D({expandDims_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","expandDims",null);E(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var n=e.shape.slice();return t<0&&(E(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),n.splice(t,0,1),ht(e,n)}}),Nl=D({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var o=ie([r,t],n),a=r<=t?r:t,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return Gn(it(s,0),[e[0],1,1]);if(e.length===2)return Gn(it(it(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Gn(it(it(it(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Rd=D({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var o=C(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?o.as2D(1,-1):o,u=T.runKernelFunc(function(c){return c.multinomial(s,n,t,e)},{logits2D:s});return i===1?u.as1D():u}}),ns=D({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=C(r,"indices","oneHot","int32"),a=o.shape.concat([t]);return o=o.flatten(),T.runKernelFunc(function(i){return i.oneHot(o,t,e,n)},{$indices:o},function(i){return{$indices:function(){return Ie(o.shape,"float32")}}}).reshape(a)}}),fn=D({pad_:function(r,t,e){e===void 0&&(e=0);var n=C(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return T.runKernelFunc(function(a){return a.pad(n,t,e)},{x:n},function(a){var i=t.map(function(s){return s[0]});return{x:function(){return a.slice(i,n.shape)}}},"PadV2",o)}}),Id=D({pad1d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),fn(r,[t],e)}}),Dd=D({pad2d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),fn(r,t,e)}}),Td=D({pad3d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),fn(r,t,e)}}),Ad=D({pad4d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),fn(r,t,e)}}),Fd=D({rand_:function(r,t,e){var n=ee(r),o=null;if(e==null||e==="float32")o=new Float32Array(n);else if(e==="int32")o=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=t();return T.makeTensor(o,r,e)}}),Nd=D({randomNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new bs(t,e,n,!1,o),i=ie(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Pd=D({randomGamma_:function(r,t,e,n,o){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new xd(t,e,n,o),i=ie(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Pl=D({randomUniform_:function(r,t,e,n,o){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var a=ie(r,n),i=new bd(t,e,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),ht=D({reshape_:function(r,t){var e=C(r,"x","reshape",null);t=Hc(t,e.size),E(e.size===ee(t),function(){return"new shape and old shape must have the same number of elements."});var n={shape:t};return T.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",n)}}),Ml=D({spaceToBatchND_:function(r,t,e){var n=C(r,"x","spaceToBatchND");return E(n.rank>=1+t.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length}),E(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),E(n.shape.reduce(function(o,a,i){return i>0&&i<=t.length?o&&(a+e[i-1][0]+e[i-1][1])%t[i-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),T.runKernelFunc(function(o){return o.spaceToBatchND(n,t,e)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),Ol=D({squeeze_:function(r,t){var e=C(r,"x","squeeze");return ht(e,En(e.shape,t).newShape)}}),ot=D({stack_:function(r,t){t===void 0&&(t=0);var e=ba(r,"tensors","stack");if(E(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var n=e[0].rank,o=e[0].shape,a=e[0].dtype;E(t<=n,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){xe(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){E(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(t)});return Te(i,t)}}),Gn=D({tile_:function(r,t){var e=C(r,"x","tile",null);E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var n=[e],o={reps:t};return T.runKernelFunc(function(a,i){var s=a.tile(e,t);return i([e]),s},{x:e},function(a,i){var s=i[0];return{x:function(){var u=ge(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var f=0;f<t[2];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(f=0;f<t[2];++f)for(var p=0;p<t[3];++p)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],p*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),Md=D({truncatedNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new bs(t,e,n,!0,o),i=ie(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),_e=D({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=C(r,"x","unstack");E(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var n={axis:t};return T.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return ot(o,t)}}},"Unpack",n)}}),Od=function(r,t){return J(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return Z(this,function(p){switch(p.label){case 0:return e=C(r,"x","setdiff1d"),n=C(t,"y","setdiff1d"),E(e.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."}),E(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),E(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,e.data()];case 1:return o=p.sent(),[4,n.data()];case 2:for(a=p.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new po([s],e.dtype),c=new po([s],"int32"),l=0,f=0;l<o.length;l++)i.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function _a(r,t,e,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(t.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=t.length,i=0;i<a;++i)o=o.concat([r[i+1]/t[i],t[i]]);o=o.concat(r.slice(a+1))}return o}function Ca(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var o=t+1;o<r;++o)o<=2*t?(n.push(o),n.push(o-(t+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function Ea(r,t,e,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/e):o.push(r[0]*e);for(var a=1;a<r.length;++a)a<=t.length?n?o.push(t[a-1]*r[a]):o.push(r[a]/t[a-1]):o.push(r[a]);return o}function Bl(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function Ll(r,t,e){for(var n=r.slice(0,1),o=0;o<e;++o)n.push(r[o+1]-t[o][0]-t[o][1]);return n}function ws(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],o=1,a=0;a<e.length-1;++a)o*=e[a];var i=r.shape,s=e.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=Pt(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}var ox=Object.freeze({prepareAndValidate:ws}),_s=30;function pa(r){return r<=_s?r:ya(r,Math.floor(Math.sqrt(r)))}function Wl(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(e.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(e.rank-o))throw new Error(a+" Output shape length < "+(n+(e.rank-o)));if(e.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(e.shape[i]!==t.shape[i])throw new Error(a+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<e.rank-o;++i)if(e.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+e.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function zl(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Wl(e,t,r)}function go(r,t,e){for(var n=t.shape.length,o=n>1?t.shape[n-1]:1,a=e.length,i=1,s=o;s<a;++s)i*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:ee(t.shape)/u,sliceSize:i,strides:Pt(e.slice(0,o)).concat([1]),outputSize:ee(e)}}var ax=Object.freeze({validateUpdateShape:Wl,validateInput:zl,calculateShapes:go});function Ul(r,t,e){E(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),E(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var n=function(a){E(t[a]+e[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(t[a]+e[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)n(o)}function rs(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function Pa(r,t,e){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((t[o]-r[o])/e[o]);return n}function Vl(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=va(0,a,s-1)}function Gl(r,t,e,n,o){var a=t[o],i=e[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?va(0,a,s):va(-1,a,s-1)}function Cs(r,t,e){for(var n=e.length,o=0;o<e.length;o++)if(e[o]>1){n=o;break}for(o=n+1;o<e.length;o++)if(t[o]>0||e[o]!==r[o])return!1;return!0}function Es(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}var ix=Object.freeze({assertParamsValid:Ul,maskToAxes:rs,computeOutShape:Pa,startForAxis:Vl,stopForAxis:Gl,isSliceContinous:Cs,computeFlatOffset:Es});function Bd(r,t){E(ga(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof Hn}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var n in t=[],T.registeredVariables)t.push(T.registeredVariables[n]);var o=e?t.filter(function(l){return!l.trainable}):null,a=t.length;E((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=T.gradients(r,t,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),o?.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function Ma(r){return T.customGrad(r)}var dt=D({softmax_:function(r,t){t===void 0&&(t=-1);var e=C(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return T.runKernelFunc(function(n,o){var a=n.softmax(e,t);return o([a]),a},{logits:e},function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([t],!0).mul(a))}}},"Softmax",{dim:t},[],[!0])}}),Ld=D({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=C(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return Ma(function(n,o){var a=n.max(t,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),Hl=function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),ql=function(){function r(){}return r.prototype.time=function(t){return N("time")},r.prototype.read=function(t){return N("read")},r.prototype.readSync=function(t){return N("readSync")},r.prototype.numDataIds=function(){return N("numDataIds")},r.prototype.disposeData=function(t){return N("disposeData")},r.prototype.write=function(t,e,n){return N("write")},r.prototype.move=function(t,e,n,o){return N("move")},r.prototype.memory=function(){return N("memory")},r.prototype.floatPrecision=function(){return N("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,o){return N("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,N("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return N("slice")},r.prototype.stridedSlice=function(t,e,n,o){return N("stridedSlice")},r.prototype.unstack=function(t,e){return N("unstack")},r.prototype.reverse=function(t,e){return N("reverse")},r.prototype.concat=function(t,e){return N("concat")},r.prototype.neg=function(t){return N("neg")},r.prototype.add=function(t,e){return N("add")},r.prototype.addN=function(t){return N("addN")},r.prototype.subtract=function(t,e){return N("subtract")},r.prototype.multiply=function(t,e){return N("multiply")},r.prototype.realDivide=function(t,e){return N("realDivide")},r.prototype.floorDiv=function(t,e){return N("floorDiv")},r.prototype.sum=function(t,e){return N("sum")},r.prototype.prod=function(t,e){return N("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return N("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return N("argMin")},r.prototype.argMax=function(t,e){return N("argMax")},r.prototype.equal=function(t,e){return N("equal")},r.prototype.notEqual=function(t,e){return N("notEqual")},r.prototype.less=function(t,e){return N("less")},r.prototype.lessEqual=function(t,e){return N("lessEqual")},r.prototype.greater=function(t,e){return N("greater")},r.prototype.greaterEqual=function(t,e){return N("greaterEqual")},r.prototype.logicalNot=function(t){return N("logicalNot")},r.prototype.logicalAnd=function(t,e){return N("logicalAnd")},r.prototype.logicalOr=function(t,e){return N("logicalOr")},r.prototype.where=function(t){return N("where")},r.prototype.select=function(t,e,n){return N("select")},r.prototype.topk=function(t,e,n){return N("topk")},r.prototype.min=function(t,e){return N("min")},r.prototype.minimum=function(t,e){return N("minimum")},r.prototype.mod=function(t,e){return N("mod")},r.prototype.max=function(t,e){return N("max")},r.prototype.maximum=function(t,e){return N("maximum")},r.prototype.all=function(t,e){return N("all")},r.prototype.any=function(t,e){return N("any")},r.prototype.squaredDifference=function(t,e){return N("squaredDifference")},r.prototype.ceil=function(t){return N("ceil")},r.prototype.floor=function(t){return N("floor")},r.prototype.round=function(t){return N("round")},r.prototype.sign=function(t){return N("sign")},r.prototype.isNaN=function(t){return N("isNaN")},r.prototype.isInf=function(t){return N("isInf")},r.prototype.isFinite=function(t){return N("isFinite")},r.prototype.pow=function(t,e){return N("pow")},r.prototype.exp=function(t){return N("exp")},r.prototype.expm1=function(t){return N("expm1")},r.prototype.softmax=function(t,e){return N("softmax")},r.prototype.log=function(t){return N("log")},r.prototype.log1p=function(t){return N("log1p")},r.prototype.sqrt=function(t){return N("sqrt")},r.prototype.rsqrt=function(t){return N("rsqrt")},r.prototype.square=function(t){return N("square")},r.prototype.reciprocal=function(t){return N("reciprocal")},r.prototype.relu=function(t){return N("relu")},r.prototype.relu6=function(t){return N("relu6")},r.prototype.prelu=function(t,e){return N("prelu")},r.prototype.elu=function(t){return N("elu")},r.prototype.eluDer=function(t,e){return N("eluDer")},r.prototype.selu=function(t){return N("selu")},r.prototype.int=function(t){return N("int")},r.prototype.clip=function(t,e,n){return N("clip")},r.prototype.abs=function(t){return N("abs")},r.prototype.complexAbs=function(t){return N("complexAbs")},r.prototype.sigmoid=function(t){return N("sigmoid")},r.prototype.softplus=function(t){return N("softplus")},r.prototype.sin=function(t){return N("sin")},r.prototype.cos=function(t){return N("cos")},r.prototype.tan=function(t){return N("tan")},r.prototype.asin=function(t){return N("asin")},r.prototype.acos=function(t){return N("acos")},r.prototype.atan=function(t){return N("atan")},r.prototype.atan2=function(t,e){return N("atan2")},r.prototype.sinh=function(t){return N("sinh")},r.prototype.cosh=function(t){return N("cosh")},r.prototype.tanh=function(t){return N("tanh")},r.prototype.asinh=function(t){return N("asinh")},r.prototype.acosh=function(t){return N("acosh")},r.prototype.atanh=function(t){return N("atanh")},r.prototype.erf=function(t){return N("erf")},r.prototype.step=function(t,e){return N("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,N("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return N("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return N("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return N("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,N("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return N("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return N("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return N("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return N("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return N("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return N("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return N("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,o){return N("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return N("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return N("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return N("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return N("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return N("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,o){return N("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return N("reshape")},r.prototype.cast=function(t,e){return N("cast")},r.prototype.tile=function(t,e){return N("tile")},r.prototype.pad=function(t,e,n){return N("pad")},r.prototype.transpose=function(t,e){return N("transpose")},r.prototype.gather=function(t,e,n){return N("gather")},r.prototype.gatherND=function(t,e){return N("gatherND")},r.prototype.scatterND=function(t,e,n){return N("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return N("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return N("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,o){return N("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return N("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,o){return N("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return N("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,o,a,i){return N("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,o,a){return N("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,o,a,i,s){return N("LRNGrad")},r.prototype.multinomial=function(t,e,n,o){return N("multinomial")},r.prototype.oneHot=function(t,e,n,o){return N("oneHot")},r.prototype.cumsum=function(t,e,n,o){return N("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,o,a){return N("nonMaxSuppression")},r.prototype.fft=function(t){return N("fft")},r.prototype.ifft=function(t){return N("ifft")},r.prototype.complex=function(t,e){return N("complex")},r.prototype.real=function(t){return N("real")},r.prototype.imag=function(t){return N("imag")},r.prototype.cropAndResize=function(t,e,n,o,a,i){return N("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return N("depthToSpace")},r.prototype.split=function(t,e,n){return N("split")},r.prototype.sparseToDense=function(t,e,n,o){return N("sparseToDense")},r.prototype.diag=function(t){return N("diag")},r.prototype.fill=function(t,e,n){return N("fill")},r.prototype.onesLike=function(t){return N("onesLike")},r.prototype.zerosLike=function(t){return N("zerosLike")},r.prototype.linspace=function(t,e,n){return N("linspace")},r.prototype.dispose=function(){return N("dispose")},r}();function N(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function un(r,t){for(var e=r.length,n=[],o=0;o<e;o++){var a=e-1-o,i=r[a]||1;(t[t.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function Ge(r,t){for(var e=[],n=0;n<t.length;n++){var o=r[r.length-n-1],a=t.length-n-1,i=t[a];(o==null||o===1&&i>1)&&e.unshift(a)}return e}function fe(r,t){for(var e=[],n=Math.max(r.length,t.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=t[t.length-o-1];if(i==null&&(i=1),a===1)e.unshift(i);else if(i===1)e.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(a)}}return e}function Rr(r,t,e,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=ka(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return Dn(r,s,e,n,o,a,!1,i)}function yo(r,t,e,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=os(t),l=c[0],f=c[1],p=c[2];if(i==="NDHWC")u="channelsLast",s=[l,f,p,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,f,p,r[1],r[1]]}return xo(r,s,e,n,o,!1,u,a)}function Dn(r,t,e,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],p=u[3];if(s==="channelsLast")c=r[0],l=r[1],f=r[2],p=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],p=r[1],l=r[2],f=r[3]}var h,d=t[0],m=t[1],v=t[3],g=ka(e),x=g[0],b=g[1],y=ka(n),w=y[0],_=y[1],I=_r(d,w),R=_r(m,_),k=function(O,B,U,z,W,H,q,$){var te,re,ce;if(typeof O=="number"){te={top:O,bottom:O,left:O,right:O,type:O===0?"VALID":"NUMBER"};var le=function(de,Ee,ye,We,Pe){We==null&&(We=ks(de,Ee,ye));var Me=de[0],Vt=de[1],Gt=co((Me-Ee+2*We)/ye+1,Pe);E(Be(Gt),function(){return"The output # of rows ("+Gt+") must be an integer. Change the stride and/or zero pad parameters"});var bt=co((Vt-Ee+2*We)/ye+1,Pe);return E(Be(bt),function(){return"The output # of columns ("+bt+") must be an integer. Change the stride and/or zero pad parameters"}),[Gt,bt]}([B,U],H,z,O,$);re=le[0],ce=le[1]}else if(O==="same"){re=Math.ceil(B/z),ce=Math.ceil(U/W);var pe=Math.max(0,(re-1)*z+H-B),ve=Math.max(0,(ce-1)*W+q-U),he=Math.floor(pe/2),me=pe-he,Ue=Math.floor(ve/2);te={top:he,bottom:me,left:Ue,right:ve-Ue,type:"SAME"}}else{if(O!=="valid")throw Error("Unknown padding parameter: "+O);te={top:0,bottom:0,left:0,right:0,type:"VALID"},re=Math.ceil((B-H+1)/z),ce=Math.ceil((U-q+1)/W)}return{padInfo:te,outHeight:re,outWidth:ce}}(o,l,f,x,b,I,R,a),S=k.padInfo,F=k.outHeight,A=k.outWidth,L=i?v*p:v;return s==="channelsFirst"?h=[c,L,F,A]:s==="channelsLast"&&(h=[c,F,A,L]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:p,outHeight:F,outWidth:A,outChannels:L,padInfo:S,strideHeight:x,strideWidth:b,filterHeight:d,filterWidth:m,effectiveFilterHeight:I,effectiveFilterWidth:R,dilationHeight:w,dilationWidth:_,inShape:r,outShape:h,filterShape:t}}function xo(r,t,e,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],p=u[3],h=u[4];if(i==="channelsLast")c=r[0],l=r[1],f=r[2],p=r[3],h=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],h=r[1],l=r[2],f=r[3],p=r[4]}var d,m=t[0],v=t[1],g=t[2],x=t[4],b=os(e),y=b[0],w=b[1],_=b[2],I=os(n),R=I[0],k=I[1],S=I[2],F=_r(m,R),A=_r(v,k),L=_r(g,S),O=function(q,$,te,re,ce,le,pe,ve,he,me,Ue){var de,Ee,ye,We;if(typeof q=="number"){de={top:q,bottom:q,left:q,right:q,front:q,back:q,type:q===0?"VALID":"NUMBER"};var Pe=function(cr,rn,pi,lr,Ht,hi){Ht==null&&(Ht=ks(cr,rn,lr));var Uh=cr[0],Vh=cr[1],Gh=cr[2],di=co((Uh-rn+2*Ht)/lr+1,hi);E(Be(di),function(){return"The output # of depths ("+di+") must be an integer. Change the stride and/or zero pad parameters"});var vi=co((Vh-rn+2*Ht)/lr+1,hi);E(Be(vi),function(){return"The output # of rows ("+vi+") must be an integer. Change the stride and/or zero pad parameters"});var mi=co((Gh-rn+2*Ht)/lr+1,hi);return E(Be(mi),function(){return"The output # of columns ("+mi+") must be an integer. Change the stride and/or zero pad parameters"}),[di,vi,mi,pi]}([$,te,re,1],ve,1,ce,q,Ue);Ee=Pe[0],ye=Pe[1],We=Pe[2]}else if(q==="same"){Ee=Math.ceil($/ce),ye=Math.ceil(te/le),We=Math.ceil(re/pe);var Me=(Ee-1)*ce+ve-$,Vt=(ye-1)*le+he-te,Gt=(We-1)*pe+me-re,bt=Math.floor(Me/2),ur=Me-bt,tn=Math.floor(Vt/2),_n=Vt-tn,nn=Math.floor(Gt/2);de={top:tn,bottom:_n,left:nn,right:Gt-nn,front:bt,back:ur,type:"SAME"}}else{if(q!=="valid")throw Error("Unknown padding parameter: "+q);de={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},Ee=Math.ceil(($-ve+1)/ce),ye=Math.ceil((te-he+1)/le),We=Math.ceil((re-me+1)/pe)}return{padInfo:de,outDepth:Ee,outHeight:ye,outWidth:We}}(o,l,f,p,y,w,_,F,A,L,s),B=O.padInfo,U=O.outDepth,z=O.outHeight,W=O.outWidth,H=a?x*h:x;return i==="channelsFirst"?d=[c,H,U,z,W]:i==="channelsLast"&&(d=[c,U,z,W,H]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:f,inWidth:p,inChannels:h,outDepth:U,outHeight:z,outWidth:W,outChannels:H,padInfo:B,strideDepth:y,strideHeight:w,strideWidth:_,filterDepth:m,filterHeight:v,filterWidth:g,effectiveFilterDepth:F,effectiveFilterHeight:A,effectiveFilterWidth:L,dilationDepth:R,dilationHeight:k,dilationWidth:S,inShape:r,outShape:d,filterShape:t}}function ks(r,t,e,n){n===void 0&&(n=1);var o=_r(t,n);return Math.floor((r[0]*(e-1)-e+o)/2)}function ka(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function os(r){return typeof r=="number"?[r,r,r]:r}function _r(r,t){return t<=1?r:r+(r-1)*(t-1)}function co(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function jn(r){var t=ka(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function pt(r,t){return jn(r)||jn(t)}function Oa(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function Ss(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=Ie(r.shape),o=r.toFloat(),a=e.complex(o,n);return n.dispose(),o.dispose(),a}if(!Kc(r.dtype,t))return T.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var i=e.real(r);return a=i.cast(t),i.dispose(),a}if(t==="int32")return e.int(r);if(t==="bool"){var s=X(0,r.dtype);return a=e.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function Sa(r,t){return T.makeTensorFromDataId(r.dataId,t,r.dtype)}function Rs(r,t,e){var n=(t-r)/(e-1),o=Dr(e,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Re(o,"float32")}var sx=Object.freeze({castTensor:Ss,reshapeTensor:Sa,linspaceImpl:Rs,upcastType:Xe,axesAreInnerMostDims:ys,combineLocations:Dl,computeOutAndReduceShapes:nt,expandShapeToKeepDim:ft,assertAxesAreInnerMostDims:mt,getAxesPermutation:Bt,getUndoAxesPermutation:Aa,getInnerMostAxes:Lt,getBroadcastDims:un,getReductionAxes:Ge,assertAndGetBroadcastShape:fe,assertParamsConsistent:Tl,computeOutShape:qn,computePool2DInfo:Rr,computePool3DInfo:yo,computeConv2DInfo:Dn,computeConv3DInfo:xo,computeDefaultPad:ks,tupleValuesAreOne:jn,eitherStridesOrDilationsAreOne:pt,convertConv2DDataFormat:Oa,PARALLELIZE_THRESHOLD:_s,computeOptimalWindowSize:pa});function as(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function ic(r,t){return{real:r[2*t],imag:r[2*t+1]}}function Wd(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function zd(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function Ud(r,t,e){var n=function(a,i,s){return function(u,c,l){for(var f=0,p=u.length,h=0,d=!1;f<p;){var m=l(c,u[h=f+(p-f>>>1)]);m>0?f=h+1:(p=h,d=!m)}return d?f:-f-1}(a,i,s||Vd)}(r,t,e),o=n<0?-(n+1):n;r.splice(o,0,t)}function Vd(r,t){return r>t?1:r<t?-1:0}function Is(r,t,e,n,o){return jl(r,t,e,n,o,0).selectedIndices}function Ds(r,t,e,n,o,a){var i=jl(r,t,e,n,o,a,!0);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function jl(r,t,e,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(sc),c=a>0?-.5/a:0,l=[],f=[];l.length<e&&u.length>0;){var p=u.pop(),h=p.score,d=p.boxIndex,m=p.suppressBeginIndex;if(h<o)break;for(var v=!1,g=l.length-1;g>=m;--g){var x=Gd(r,d,l[g]);if(x>=n){v=!0;break}if(p.score=p.score*Hd(n,c,x),p.score<=o)break}p.suppressBeginIndex=l.length,v||(p.score===h?(l.push(d),f.push(p.score)):p.score>o&&Ud(u,p,sc))}var b=l.length;return s&&(l.fill(0,b),f.fill(0,b)),{selectedIndices:Re(l,"int32"),selectedScores:Re(f,"float32"),numValidOutputs:X(b,"int32")}}function Gd(r,t,e){var n=r.subarray(4*t,4*t+4),o=r.subarray(4*e,4*e+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),p=Math.max(o[1],o[3]),h=(s-a)*(u-i),d=(f-c)*(p-l);if(h<=0||d<=0)return 0;var m=Math.max(a,c),v=Math.max(i,l),g=Math.min(s,f),x=Math.min(u,p),b=Math.max(g-m,0)*Math.max(x-v,0);return b/(h+d-b)}function Hd(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function sc(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function Kl(r,t,e){var n=new Array(r.rank).fill(0),o=r.shape.slice();return t.map(function(a){o[e]=a;var i=r.slice(n,o);return n[e]+=a,i})}function Xl(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var o=ie(e,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function Yl(r,t,e,n,o){for(var a=t[t.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=Sr(e,s*n),l=Sr("int32",s*n),f=0;f<s;f++){for(var p=f*u,h=r.subarray(p,p+u),d=[],m=0;m<h.length;m++)d.push({value:h[m],index:m});d.sort(function(y,w){return w.value-y.value});var v=f*n,g=c.subarray(v,v+n),x=l.subarray(v,v+n);for(m=0;m<n;m++)g[m]=d[m].value,x[m]=d[m].index}var b=t.slice();return b[b.length-1]=n,[Ye(c,b,e),Ye(l,b,"int32")]}function Ts(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var o=ie(r,"int32"),a=ie([e.length,r.length],"int32");for(n=0;n<e.length;n++){var i=o.indexToLoc(e[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var qd=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},jd=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(o,a){return"T"+a});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},Kd=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function $l(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return r+"."+e})}function gt(r,t){return t===1?[r]:$l(r,t)}function st(){var r,t,e,n,o,a,i,s,u,c;return M().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function zn(r,t,e){e===void 0&&(e="index");var n=Pt(t);return n.map(function(o,a){return"int "+r[a]+" = "+e+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+e+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function As(r){var t=Pt(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var Ql=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function Xd(r,t,e,n){var o=[];r.forEach(function(h){var d=ee(h.shapeInfo.logicalShape);h.shapeInfo.isUniform?o.push("uniform float "+h.name+(d>1?"["+d+"]":"")+";"):(o.push("uniform sampler2D "+h.name+";"),o.push("uniform int offset"+h.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(h){return function(d,m,v){v===void 0&&(v=!1);var g="";g+=v?Jl(d):yr(d);var x=d.shapeInfo.logicalShape,b=m.logicalShape;return x.length<=b.length&&(g+=v?function(y,w){var _,I=y.name,R=I.charAt(0).toUpperCase()+I.slice(1),k="get"+R+"AtOutCoords",S=y.shapeInfo.logicalShape.length,F=w.logicalShape.length,A=un(y.shapeInfo.logicalShape,w.logicalShape),L=De(F),O=F-S,B=["x","y","z","w","u","v"];_=S===0?"":F<2&&A.length>=1?"coords = 0;":A.map(function(te){return"coords."+B[te+O]+" = 0;"}).join(`
`);var U="";U=F<2&&S>0?"coords":y.shapeInfo.logicalShape.map(function(te,re){return"coords."+B[re+O]}).join(", ");var z="return outputValue;",W=ee(y.shapeInfo.logicalShape)===1,H=ee(w.logicalShape)===1;if(S!==1||W||H){if(W&&!H)z=F===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(A.length){var q=S-2,$=S-1;A.indexOf(q)>-1&&A.indexOf($)>-1?z="return vec4(outputValue.x);":A.indexOf(q)>-1?z="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":A.indexOf($)>-1&&(z="return vec4(outputValue.xx, outputValue.zz);")}}else z=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+k+`() {
      `+L+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+R+"("+U+`);
      `+z+`
    }
  `}(d,m):function(y,w){var _=y.name,I=_.charAt(0).toUpperCase()+_.slice(1),R="get"+I+"AtOutCoords",k=w.texShape,S=y.shapeInfo.texShape,F=y.shapeInfo.logicalShape.length,A=w.logicalShape.length;if(!y.shapeInfo.isUniform&&F===A&&y.shapeInfo.flatOffset==null&&Ve(S,k))return`
      float `+R+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var L,O=De(A),B=un(y.shapeInfo.logicalShape,w.logicalShape),U=A-F,z=["x","y","z","w","u","v"];L=F===0?"":A<2&&B.length>=1?"coords = 0;":B.map(function(H){return"coords."+z[H+U]+" = 0;"}).join(`
`);var W="";return W=A<2&&F>0?"coords":y.shapeInfo.logicalShape.map(function(H,q){return"coords."+z[q+U]}).join(", "),`
    float `+R+`() {
      `+O+` coords = getOutputCoords();
      `+L+`
      return get`+I+"("+W+`);
    }
  `}(d,m)),g}(h,t,n)}).join(`
`),c=t.texShape,l=st(),f=function(h){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+h.texture2D+`(textureSampler, uv).r;
    }
  `}(l),p=function(h){return h.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+h.varyingFs+` vec2 resultUV;
    `+h.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+h.defineSpecialNaN+`
    `+h.defineSpecialInf+`
    `+h.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Yd+`
    `+$d+`
    `+Qd+`
  `}(l);return t.isPacked?(a=function(h,d){switch(h.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return _[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+_[1]+`.0);
      }
    `:_[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+_[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      return 2 * (resTexRC.x * `+_[1]+` + resTexRC.y);
    }
  `}(0,d);case 2:return function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(Ve(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var I=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+I+`);
      int c = imod(index, `+I+`) * 2;

      return ivec2(r, c);
    }
  `}(h,d);case 3:return m=h,v=d,g=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],x=Math.ceil(m[2]/2),b=x*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+x+`);
      int c = imod(index, `+x+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],I=Math.ceil(y[y.length-1]/2),R=I*Math.ceil(y[y.length-2]/2),k=R,S="",F="b, r, c",A=2;A<y.length-1;A++)k*=y[y.length-A-1],S=`
      int b`+A+" = index / "+k+`;
      index -= b`+A+" * "+k+`;
    `+S,F="b"+A+", "+F;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+S+`

      int b = index / `+R+`;
      index -= b * `+R+`;

      int r = 2 * (index / `+I+`);
      int c = imod(index, `+I+`) * 2;

      return ivec`+y.length+"("+F+`);
    }
  `}(h,d)}var m,v,g,x,b}(t.logicalShape,c),i=function(h){return`
    void setOutput(vec4 val) {
      `+h.output+` = val;
    }
  `}(l)):(a=function(h,d){switch(h.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,x){return x[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+x[1]+`.0);
      }
    `:x[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+x[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      return resTexRC.x * `+x[1]+` + resTexRC.y;
    }
  `}(0,d);case 2:return function(g,x){return Ve(g,x)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+x[0]+", "+x[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(h,d);case 3:return m=d,v=zn(["r","c","d"],h),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,x){var b=zn(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(h,d);case 5:return function(g,x){var b=zn(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+x[0]+`,
                             `+x[1]+`));

      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(h,d);case 6:return function(g,x){var b=zn(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(h,d);default:throw new Error(h.length+"-D output sampling is not yet supported")}var m,v}(t.logicalShape,c),i=function(h){return`
    void setOutput(float val) {
      `+h.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(p+=Jd),[p,f,i,s,a,u,e].join(`
`)}function yr(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=On(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+vr(e)+`
      }
    `;var a=e.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=On(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=e.shapeInfo.texShape;if(i!=null&&Ve(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=En(n),l=c.newShape,f=c.keptDims,p=l;if(p.length<n.length){var h=xr(e,p);return`
      `+yr(h)+`
      float `+a+`(int row, int col) {
        return `+a+"("+br(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+vr(e)+`
      }
    `;var d=i[0],m=i[1],v=On(o);return m===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:d===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+d+", "+m+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=En(n),c=u.newShape,l=u.keptDims,f=c;if(f.length<n.length){var p=xr(e,f);return`
        `+yr(p)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+br(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+vr(e)+`
      }
    `;var h=e.shapeInfo.texShape,d=h[0],m=h[1],v=e.shapeInfo.flatOffset;if(m===i&&v==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+d+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(m===s&&v==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=On(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+d+", "+m+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=En(n),l=c.newShape,f=c.keptDims;if(l.length<n.length){var p=xr(e,l);return`
      `+yr(p)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+br(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+vr(e)+`
      }
    `;var h=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,m=d[0],v=d[1];if(v===u&&h==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===i&&h==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=On(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+v+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=En(n),f=l.newShape,p=l.keptDims;if(f.length<n.length){var h=xr(e,f);return`
      `+yr(h)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+br(["row","col","depth","depth2","depth3"],p)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+vr(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,v=m[0],g=m[1];if(g===c&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=On(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+x+`;
      vec2 uv = uvFromFlat(`+v+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=En(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=xr(e,s);return`
      `+yr(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+br(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],f=n[4]*l,p=n[3]*f,h=n[2]*p,d=n[1]*h;if(e.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+d+", "+h+", "+p+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+vr(e)+`
      }
    `;var m=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,g=v[0],x=v[1];if(x===d&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+h+", "+p+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(x===l&&m==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=On(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+d+" + col * "+h+" + depth * "+p+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+g+", "+x+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function Jl(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=st(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=st();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=st();if(u!=null&&Ve(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+i+`, uv);
      }
    `;var p=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],h=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+h+", "+p[0]+", "+p[1]+`, row, col);
      return `+f.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),f=xr(o,l);return`
        `+Jl(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+br(["b","row","col"],[1,2])+`);
        }
      `}var p=c[0],h=c[1],d=Math.ceil(a[2]/2),m=d*Math.ceil(a[1]/2),v=st();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+p+", "+h+", "+m+", "+d+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],p=l[1],h=Math.ceil(a[i-1]/2),d=h*Math.ceil(a[i-2]/2),m="int b, int row, int col",v="b * "+d+" + (row / 2) * "+h+" + (col / 2)",g=2;g<i-1;g++)m="int b"+g+", "+m,d*=a[i-g-1],v="b"+g+" * "+d+" + "+v;var x=st();return`
    vec4 `+u+"("+m+`) {
      int index = `+v+`;
      int texR = index / `+p+`;
      int texC = index - texR * `+p+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+p+", "+f+`);
      return `+x.texture2D+"("+s+`, uv);
    }
  `}(r)}}var Yd=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,$d=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Qd=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Jd=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function On(r){return"offset"+r}function vr(r){var t=r.name,e=ee(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function De(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function xr(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function br(r,t){return t.map(function(e){return r[e]}).join(", ")}var Zd=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/t);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=De(c),f=gt("coords",c);if(a===1){var p=De(s=c+1);i=`
        `+p+" sourceLocR = "+p+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+p+" sourceLocG = "+p+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+p+" sourceLocA = "+p+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+p+" sourceLocB = "+p+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var h=["x","y","z","w","u","v"].slice(0,s),d="."+h[s-1],m=h.map(function(R){return"int "+R}),v=gt("sourceLocR",s-1).concat("inIdx.r"),g=gt("sourceLocG",s-1).concat("inIdx.g"),x=gt("sourceLocB",s-1).concat("inIdx.b"),b=gt("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+x.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",_=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+x.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",I=n?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+h.join()+`),
                                          vec2(`+h.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+h.join()+`),
                               vec2(`+h.slice(-2).join()+`));
      }
      `+I+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+d+", sourceLocG"+d+`,
          sourceLocB`+d+", sourceLocA"+d+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+_+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},ev=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,f=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},tv=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,p=r.effectiveFilterWidth,h=l-1-r.padInfo.front,d=f-1-r.padInfo.top,m=p-1-r.padInfo.left,v=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+h+", "+d+", "+m+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+p+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},nv=function(r,t,e,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],fe(r,t),fe(r,e);var i="0.0";n!=null&&(fe(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(fe(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},rv=function(r,t,e,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],fe(r,t),fe(r,e);var i="vec4(0.0)";n!=null&&(fe(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(fe(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},ov="return areal * breal - aimag * bimag;",av="return areal * bimag + aimag * breal;",uc=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=fe(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Ri="return a + b;",Ii="return a - b;",cc="return a * b;",Zl="return (a < 0.) ? b * a : a;",ze=function(r,t,e){this.variableNames=["A","B"],this.outputShape=fe(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},ef=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,an=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=fe(t,e);var o=this.outputShape.length,a="";if(n)if(o===0||ee(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+De(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=gt("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},iv=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),sv=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),uv=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},cv=function(r){this.outputShape=[],this.outputShape=qn(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var a=t.length,i=t[t.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},lv=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=qn(r,t);var e=this.outputShape,n=e.length,o=De(n),a=gt("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(v,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=i[t],l=i.slice(-2),f=i.join(),p="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var h=s[u-1];p+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+Zo(i,c,h)+`),
            vec2(`+Zo(l,c,h)+`));
        }`}var d=s.length,m=s[s.length-1];p+=`
        return getChannel(
          getT`+d+"("+Zo(i,c,m)+`),
          vec2(`+Zo(l,c,m)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+p+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+e[n-2]+` &&
            `+a[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function Zo(r,t,e){var n=r.indexOf(t);return r.map(function(o,a){return a===n?o+" - "+e:o}).join()}var fv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},pv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},hv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},dv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},vv=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},mv=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=t-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},lc=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,f=r.filterWidth,p=4*Math.floor(r.inChannels/4),h=r.inChannels%4,d=r.dataFormat==="channelsLast",m=d?1:2,v=d?2:3,g=d?3:1,x="",b="";e&&(x=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+p+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+d+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(h===1)+`) {

              if (`+d+`) {
                dotProd +=
                    getX(batch, xR, xC, `+p+`) *
                    getW(wR, wC, `+p+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+p+`, xR, xC) *
                    getW(wR, wC, `+p+`, d2);
              }

            } else if (`+(h===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+p+`, d2),
                getW(wR, wC, `+p+` + 1, d2)
              );

              if (`+d+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+p+`),
                  getX(batch, xR, xC, `+p+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+p+`, xR, xC),
                  getX(batch, `+p+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(h===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+p+`, d2),
                getW(wR, wC, `+p+` + 1, d2),
                getW(wR, wC, `+p+` + 2, d2)
              );

              if (`+d+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+p+`),
                  getX(batch, xR, xC, `+p+` + 1),
                  getX(batch, xR, xC, `+p+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+p+`, xR, xC),
                  getX(batch, `+p+` + 1, xR, xC),
                  getX(batch, `+p+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+b+`
        setOutput(result);
      }
    `},gv=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,f=r.filterHeight,p=r.filterWidth,h=4*Math.floor(r.inChannels/4),d=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+p+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+h+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(d===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+h+`) *
                  getW(wF, wR, wC, `+h+`, d2);
              } else if (`+(d===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+h+`),
                  getX(batch, xF, xR, xC, `+h+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+h+`, d2),
                  getW(wF, wR, wC, `+h+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(d===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+h+`),
                  getX(batch, xF, xR, xC, `+h+` + 1),
                  getX(batch, xF, xR, xC, `+h+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+h+`, d2),
                  getW(wF, wR, wC, `+h+` + 1, d2),
                  getW(wF, wR, wC, `+h+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},fc=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,p=r.filterHeight,h=r.filterWidth,d=r.outChannels/r.inChannels,m="",v="";e&&(m=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+d+`;
        int q = d2 - d1 * `+d+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+p+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+v+`
        setOutput(result);
      }
    `},pc=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,f=r.dilationWidth,p=r.filterHeight,h=r.filterWidth,d=h,m="int xR; int xC; int xCOffset;",v=0;v<p;v++)for(var g=0;g<h;g++)m+=`
          vec4 xTexelR`+v+"C"+2*g+` = vec4(0.);
          vec4 wR`+v+"C"+g+` = vec4(0.);
          vec4 xR`+v+"C"+g+" = vec4(0.);";for(v=0;v<p;v++)for(var x=0;x<d;x++){if(m+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(g=2*x)*f+`;
        `,c===1){if(g<h&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+v+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+g+" = vec4(previous.zw, xTexelR"+v+"C"+g+`.xy);
                } else {
                  xR`+v+"C"+g+" = vec4(0, 0, xTexelR"+v+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xR`+v+"C"+g+" = xTexelR"+v+"C"+g+`;
              `,g+1<h)){var b=s%2==0?fs(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+g+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(g+1)+" = xTexelR"+v+"C"+(g+2)+`;
                `}}else g<h&&(m+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
              `,g+1<h&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(g+1)+" = vec4(xTexelR"+v+"C"+(g+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+v+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+v+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(g+2)+` = vec4(0.);
                }

                xR`+v+"C"+g+` = vec4(
                  xTexelR`+v+"C"+g+".xy, xTexelR"+v+"C"+(g+2)+`.xy);
              `,g+1<h&&(m+=`
                  xR`+v+"C"+(g+1)+` = vec4(
                    xTexelR`+v+"C"+g+".zw, xTexelR"+v+"C"+(g+2)+`.zw);
                `)),m+="}");g<h&&(m+=`
            vec4 wTexelR`+v+"C"+g+" = getW("+v+", "+g+`, d1, q);
            wR`+v+"C"+g+" = vec4(wTexelR"+v+"C"+g+".xz, wTexelR"+v+"C"+g+`.xz);
          `,g+1<h&&(m+=`
              vec4 wTexelR`+v+"C"+(g+1)+" = getW("+v+", "+(g+1)+`, d1, q);
              wR`+v+"C"+(g+1)+` =
                vec4(wTexelR`+v+"C"+(g+1)+".xz, wTexelR"+v+"C"+(g+1)+".xz);"))}for(v=0;v<p;v++)for(g=0;g<h;g++)m+="dotProd += xR"+v+"C"+g+" * wR"+v+"C"+g+";";var y="",w="";e&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var _=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+_+`
        `+w+`
        setOutput(result);
      }
    `},yv=function(r,t,e,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=t[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var p=n==="bilinear"?1:0,h=[i-1+".0",s-1+".0"],d=h[0],m=h[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+d+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+d],g=v[0],x=v[1],b=v[2],y=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],w=y[0],_=y[1],I=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+x+`;
        float width_scale = `+_+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+d+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+I+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+p+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},xv=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+De(n)+` coords = getOutputCoords();
        int end = `+hc(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+hc(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function hc(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var bv=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=ho.DENSE;var t=uo(r),e=st();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+zn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},wv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=ho.DENSE;var t=uo(r),e=st();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+zn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},_v=function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),Cv=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Ev=function(r){this.variableNames=["A"],this.outTexUsage=_t.DOWNLOAD;var t=st();this.outputShape=r,this.userCode=`
      `+Ql+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},kv=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=_t.DOWNLOAD;var t=st();this.outputShape=r,this.userCode=`
      `+Ql+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},Sv=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=st(),o=t[0],a=t[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+As(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},Rv=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=st(),o=t[0],a=t[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+As(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},Iv="return real * expR - imag * expI;",Dv="return real * expI + imag * expR;",dc=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Tv=function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(e.valueLoc,t)}},r}(),Av=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var o=De(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<i.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Fv=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=De(t.length),o=De(e.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function tf(r,t){var e=st();return il(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function nf(r,t){return ll(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function rf(r,t){return fl(r,t,new Uint16Array([0,1,2,2,1,3]))}function _o(r,t,e,n,o,a,i){hl(e,n);var s=pl(r,t),u=r.TEXTURE_2D;return Q(r,t,function(){return r.bindTexture(u,s)}),Q(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),Q(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),Q(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),Q(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),Q(r,t,function(){return r.texImage2D(u,0,o,e,n,0,a,i,null)}),Q(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function of(r,t,e,n,o){var a=Ta(e,n);return _o(r,t,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function af(r,t,e,n,o){var a=Ta(e,n);return _o(r,t,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function sf(r,t,e,n,o){var a=Ta(e,n);return _o(r,t,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function uf(r,t,e,n,o){var a=wo(e,n);return _o(r,t,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function cf(r,t,e,n,o){var a=wo(e,n);return _o(r,t,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function lf(r,t,e,n){return Q(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Ji(r,t,e,"clipSpacePos",n,3,20,0)&&Ji(r,t,e,"uv",n,2,20,12)}function ff(r,t,e,n,o,a,i){var s,u,c;Q(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),Q(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),Q(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function pf(r,t,e,n){Q(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),n.data instanceof Uint8Array?Q(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):Q(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),Q(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function hf(r,t,e,n,o){var a=r.createBuffer();Q(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*e*n;return Q(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),Q(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)}),Q(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function df(r,t,e){var n=r,o=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function vf(r,t,e,n,o){var a=Ta(e,n),i=a[0],s=a[1],u=new Uint8Array(e*n*4);return Q(r,t,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function mf(r,t,e,n,o,a,i,s){var u=r,c=new Float32Array(function(l,f){var p=wo(l,f);return p[0]*p[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function gf(r,t,e,n){var o=new Float32Array(e*n*4);return Q(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,o)}),o}var Nv=Object.freeze({createVertexShader:tf,createVertexBuffer:nf,createIndexBuffer:rf,createFloat32MatrixTexture:of,createFloat16MatrixTexture:af,createUnsignedBytesMatrixTexture:sf,createPackedMatrixTexture:uf,createFloat16PackedMatrixTexture:cf,bindVertexProgramAttributeStreams:lf,uploadDenseMatrixToTexture:ff,uploadPixelDataToTexture:pf,createBufferFromOutputTexture:hf,downloadFloat32MatrixFromBuffer:df,downloadByteEncodedFloatMatrixFromOutputTexture:vf,downloadPackedMatrixFromBuffer:mf,downloadMatrixFromPackedOutputTexture:gf}),yf=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=M().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,rl(e,t)):this.gl=Qt(e);var n="WEBGL_color_buffer_float";if(M().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=ao(this.gl,this.debug,"OES_texture_float"),Ct(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=ao(this.gl,this.debug,"OES_texture_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),Ct(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=ao(this.gl,this.debug,"EXT_color_buffer_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",Ct(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!Ct(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=nf(this.gl,this.debug),this.indexBuffer=rf(this.gl,this.debug),this.framebuffer=dl(this.gl,this.debug),this.textureConfig=gs(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return M().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;Q(e,this.debug,function(){return e.finish()}),Q(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),Q(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),Q(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),Q(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),Q(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),of(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),af(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),sf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),pf(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,o){this.throwIfDisposed(),ff(this.gl,this.debug,t,e,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),cf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),uf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(Zi(this.gl,this.debug,this.framebuffer),this.outputTexture=null),Q(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return vf(o.gl,o.debug,e,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,o,a,i){return mf(this.gl,t,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return df(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var o=hf(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,o=this;if(M().getBool("WEBGL_FENCE_API_ENABLED")){var a=t,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},e=i}else M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(e,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return gf(o.gl,o.debug,e,n)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=sl(e,this.debug,t),o=tf(e,this.debug),a=ul(e,this.debug);return Q(e,this.debug,function(){return e.attachShader(a,o)}),Q(e,this.debug,function(){return e.attachShader(a,n)}),cl(e,this.debug,a),this.debug&&ca(e,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=lf(e,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&Q(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&ca(this.gl,this.debug,this.program),Q(this.gl,this.debug,function(){return e.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?ml(this.gl,this.debug,t,e):gl(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),Q(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),yl(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var o=wo(e,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(t,a,i)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,o){this.setOutputMatrixWriteRegionDriver(n,t,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&ca(this.gl,this.debug,this.program),io(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),Q(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),Q(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=ao(this.gl,this.debug,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return J(this,void 0,void 0,function(){var e=this;return Z(this,function(n){switch(n.label){case 0:return[4,qi(function(){return e.disposed||e.isQueryAvailable(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var t=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||qi(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),la(this.gl,this.debug,t,this.framebuffer),this.debug&&io(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(la(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&io(this.gl)):Zi(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var o=this.gl;la(o,this.debug,t,this.framebuffer),this.debug&&io(o),this.outputTexture=t,Q(o,this.debug,function(){return o.viewport(0,0,e,n)}),Q(o,this.debug,function(){return o.scissor(0,0,e,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,o){var a=this;this.throwIfDisposed(),Q(this.gl,this.debug,function(){return a.gl.scissor(t,e,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function vc(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(e,n){var o=e.logicalShape,a=t[n],i=a.shape;if(!Ve(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!e.isUniform||!a.isUniform){var s=e.texShape,u=a.isUniform?null:a.texData.texShape;if(!Ve(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var Pv=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,o=e.inChannels,a=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,p=s.left,h=s.top,d=o*n,m=st(),v=f==="channelsLast",g=v?0:1,x=v?1:2,b="",y=0;y<=1;y++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+h+`;
            d0 = offsetY + `+l+" * (pos / "+d+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+p+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+d+".) / "+o+`.));

              if(d1 < `+t[x]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+m.output+` = result;
      }
    `},Mv=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},Ov=function(r,t,e,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},Bv=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},Lv=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},Wv=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,f=u-1-r.padInfo.top,p=c-1-r.padInfo.left,h=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+p+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+h+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Di=function(r,t,e,n,o,a,i){e===void 0&&(e=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],p=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],h="",d="";a&&(h=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,d="result = activation(result);");var m=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+h+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+p[0]+`);
          result += (`+f[1]+" * "+p[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+d+`

        setOutput(result);
      }
    `},zv=function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r}(),Uv=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},Vv=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=gt("rc",t),n=De(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(t,r,e),a=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(f,p){for(var h=[],d=0;d<=1;d++)for(var m=0;m<=1;m++){for(var v=(d===0?"r":"rp1")+", "+(m===0?"c":"cp1"),g=2;g<f;g++)v=p[p.length-1-g]+","+v;h.push(v)}return h}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},Gv=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=De(n),a=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},Hv=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(v,g){return v[0]+r[g]+v[1]});for(var n=r.length,o=De(n),a=t.map(function(v){return v[0]}).join(","),i=t.map(function(v,g){return v[0]+r[g]}).join(","),s=gt("rc",n),u=gt("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],p=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",h="",d=0,m=n===1?2:4;d<m;d++)h+=`
        `+f[d]+`
        if (`+p+`) {
          result[`+d+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+d+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;h+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+h+`
        setOutput(result);
      }
    `},Ti=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,f=r.padInfo.left;this.outputShape=r.outShape;var p=t==="avg",h="0.0";if(p||(h="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var d=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(d="avgValue / count");var m=4*Math.floor(n/4),v=n%4,g=`
      if (`+p+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+h+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+h+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+m+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+m+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+d+`);
      }
    `}},Ai=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,f=r.effectiveFilterHeight,p=r.effectiveFilterWidth,h=r.padInfo.front,d=r.padInfo.top,m=r.padInfo.left;this.outputShape=r.outShape;var v=t==="avg",g="0.0";if(v||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+h+", "+d+", "+m+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+p+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+p+` +
                      wR * `+p+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var x=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(x="avgValue / count");var b=4*Math.floor(n/4),y=n%4,w=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+h+", "+d+", "+m+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+x+`);
        }
      }
    `}},qv=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/e);this.outputShape=[n,a];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,p="vec4";t==="all"?(i="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,p="bvec4"):t==="any"&&(i="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,p="bvec4");var h="";o%e>0&&(h=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+h+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+p+" values = "+p+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},jv=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+zn(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+As(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},Kv=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],p=c[1]/l[1],h=1/f,d=1/p,m=2*Math.ceil(h)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+p+`);

        const float invHeightScale = float(`+h+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Xv=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},Yv=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},$v=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?o-1:o,e&&u>1?a-1:a],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],p=c[1]/l[1],h=1/f,d=1/p,m=2*Math.ceil(h)+2,v=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+p+`);

        const float invHeightScale = float(`+h+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Qv=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?a-1:a,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},Jv=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map(function(a,i){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=De(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},Zv=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=gt("rc",e),o=n[e-1]+" + 1 < "+this.outputShape[e-1],a=n[e-2]+" + 1 < "+this.outputShape[e-2],i=De(e);function s(u){var c=r.map(function(l,f){return function(p,h){return t.indexOf(p)!==-1&&r[p]!==1?r[p]+" - "+h[p]+" - 1":""+h[p]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},mc=function(r,t,e,n,o,a,i){i===void 0&&(i=!0),this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=De(o.length),u=De(a.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";n===1?f="i":n===2&&(f="i, coords[1]");var p="getUpdates("+f+")",h=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+h+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+p+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},em=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/e);this.outputShape=[n,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},tm=function(r,t,e){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=De(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},nm=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=De(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return Fi.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+Fi[s]+" = start["+s+"] + coords."+Fi[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),Fi=["x","y","z","w","u","v"],rm=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=De(this.rank),n=gt("coords",this.rank),o=gt("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,f){return"start["+f+"]"}).join()+");":t.map(function(l,f){return o[f]+" = "+n[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),om=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,o=De(e.length),a=De(e.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},am=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var o,a=gc(e,n),i=yc(t,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===wt.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):a===wt.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):a===wt.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):a===wt.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):a===wt.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(t,e,n,o){if(this.freeTextures!=null){var a=yc(e,gc(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(n){t.gpgpu.deleteMatrixTexture(n)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function gc(r,t){if(r===_t.UPLOAD)return wt.PACKED_2X2_FLOAT32;if(r===_t.RENDER||r==null)return function(e){return M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?wt.PACKED_2X2_FLOAT32:wt.UNPACKED_FLOAT32:e?wt.PACKED_2X2_FLOAT16:wt.UNPACKED_FLOAT16}(t);if(r===_t.DOWNLOAD||r===_t.PIXELS)return wt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function yc(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var im=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var o=De(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},sm=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var o=De(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},um=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=De(this.rank),a=$l("rc",this.rank),i=new Array(this.rank);for(n=0;n<t.length;n++)i[t[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Fs=1.7580993408473768,Ns=1.0507009873554805,ue=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Wt="if (isnan(x)) return x;",cm="return x;",xc="return abs(x);",xf=Wt+`
  return (x < 0.0) ? 0.0 : x;
`,bf=Wt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,wf="return (x >= 0.0) ? x : (exp(x) - 1.0);",lm=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Fs+`;
  float scale = `+Ns+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,bc="return -x;",wc="return ceil(x);",_c="return floor(x);",Cc="return exp(x);",Ec="return exp(x) - 1.0;",fm=Wt+`
  return sin(x);
`,pm=Wt+`
  return cos(x);
`,hm=Wt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,dm=Wt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,vm=Wt+`
  return atan(x);
`,mm=Wt+"return log(x + sqrt(x * x + 1.0));",gm=Wt+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,ym=Wt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,ea="return x;",xm="return x;",_f=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Cf=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Ef=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,oo=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},bm=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=gt("rc",t),n=De(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),a=e.slice(-2),i=t<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},ta={};function na(r,t){if(t===void 0&&(t=!1),r==="linear")return t?xm:cm;if(r==="relu")return t?_f:xf;if(r==="elu")return t?Ef:wf;if(r==="relu6")return t?Cf:bf;if(r==="prelu")return t?ef:Zl;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var wm=600,kf=function(r){function t(e){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!M().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var a=Qt(M().getNumber("WEBGL_VERSION"));o.binaryCache=((n=M().getNumber("WEBGL_VERSION"))in ta||(ta[n]={}),ta[n]),o.gpgpu=new yf(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new am(o.gpgpu),o.numMBBeforeWarning=M().global.screen==null?1024:M().global.screen.height*M().global.screen.width*window.devicePixelRatio*wm/1024/1024,o.texData=new Hl(o,T),o}return Ot(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,o){if(M().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:e,usage:_t.UPLOAD}),a},t.prototype.move=function(e,n,o,a){if(M().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:a,values:n,usage:_t.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new oo(u,ea):new ue(u,ea);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:a}],a),p=this.readSync(f.dataId);return this.disposeData(f.dataId),p}if(o!=null)return this.convertAndCacheOnCPU(e);if(a==="string")return o;var h,d,m=this.activeTimers!=null;return m&&(h=Nt()),a==="complex64"?d=as(i.real.dataSync(),i.imag.dataSync()):d=this.getValuesFromTexture(e),m&&(this.downloadWaitMs+=Nt()-h),this.convertAndCacheOnCPU(e,d)},t.prototype.read=function(e){return J(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,p,h,d,m,v,g,x,b,y,w,_,I,R;return Z(this,function(k){switch(k.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise(function(S){return n.push(S)})];if(o=this.texData.get(e),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new oo(i,ea):new ue(i,ea),p=this.runWebGLProgram(f,[{dataId:e,shape:i,dtype:u}],u),h=this.read(p.dataId),this.disposeData(p.dataId),[2,h];if(a!=null)return[2,this.convertAndCacheOnCPU(e)];if(!M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&M().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return d=null,u!=="complex64"&&M().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(e),v=this.texData.get(m.dataId),d=(R=this.gpgpu).createBufferFromTexture.apply(R,[v.texture].concat(uo(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:k.sent(),k.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return x=k.sent(),b=x[0],y=x[1],g=as(b,y),[3,5];case 4:d==null?g=this.getValuesFromTexture(e):(w=ee(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(d,w)),k.label=5;case 5:return m!=null&&this.disposeData(m.dataId),_=this.convertAndCacheOnCPU(e,g),I=this.pendingRead.get(e),this.pendingRead.delete(e),I.forEach(function(S){return S(_)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,_]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var o=e[n];if(!ol(o))throw M().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.isPacked,u=ee(a);if(M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(uo(a))).subarray(0,u);return this.disposeData(c.dataId),f}var p=M().getBool("WEBGL_PACK")&&s===!0,h=p?fa(a):a,d=p?new kv(h):new Ev(h),m=this.runWebGLProgram(d,[{shape:h,dtype:i,dataId:e}],"float32"),v=this.texData.get(m.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),g},t.prototype.time=function(e){return J(this,void 0,void 0,function(){var n,o,a,i,s,u,c;return Z(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,e(),i=cn(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=cn(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=Vc(c),u.getExtraProfileInfo=function(){return c.map(function(f,p){return{name:s[p],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Nt(),endMs:null}},t.prototype.endTimer=function(e){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=Nt(),e)},t.prototype.getQueryTime=function(e){return J(this,void 0,void 0,function(){var n;return Z(this,function(o){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var p=this.texData.get(e);p.texture=null,p.texShape=null,p.isPacked=!1,p.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return M().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=T.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<n})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(n.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,o);if(ee(o)===0)return Ye([],o,e.dtype);var a=this.texData.get(e.dataId).isPacked,i=Cs(e.shape,n,o);if(a||!i){var s=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new rm(o):new nm(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,o)},t.prototype.shallowSlice=function(e,n,o){var a=this.texData.get(e.dataId),i=this.makeOutput(o,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=e.dtype;var u=Es(n,e.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(e,n,o,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,o,a);var i=Pa(n,o,a);if(i.some(function(u){return u===0}))return Ye([],i);var s=new om(n,a,i);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var o=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Zv(e.shape,n):new Jv(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var o=e.map(function(h){return St(h)}),a=e.map(function(h){return Xt(h)});return tt(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>M().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),n),u=this.concat(e.slice(i),n);return this.concat([s,u],n)}if(M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new lv(e.map(function(h){return h.shape}),n);return this.compileAndRun(c,e)}var l=qn(e.map(function(h){return h.shape}),n),f=e.map(function(h){return h.as2D(-1,ee(h.shape.slice(n)))}),p=new cv(f.map(function(h){return h.shape}));return this.compileAndRun(p,f).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,bc,e.dtype);var n=new ue(e.shape,bc);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,o,a){var i=o?e.shape[2]:e.shape[1],s=a?n.shape[1]:n.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,p=s===1?n.as3D(c,1,u):n;return this.multiply(l,p).sum(f,!0)}var h=Xe(e.dtype,n.dtype),d=new Di(e.shape,[c,i,s],o,a);return this.compileAndRun(d,[e,n],h)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=a?n.shape[2]:n.shape[1],f=i?o.shape[1]:o.shape[2],p=n.shape[0],h=Xe(n.dtype,o.dtype),d=s!=null,m=c!=null,v=u?na(u,!0):null,g=new Di(n.shape,[p,l,f],a,i,d,v,m),x=[n,o];return s&&x.push(s),c&&x.push(c),this.compileAndRun(g,x,h)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),a=this.texData.get(n.dataId),i=new uc(ov,e.shape,n.shape),s=new uc(av,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,cc,e.dtype);var p=new ze(cc,e.shape,n.shape);return this.compileAndRun(p,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){var u=[e,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),M().getBool("WEBGL_PACK_NORMALIZATION")){var f=new rv(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(f,u)}var p=new nv(e.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(p,u)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){var s=M().getBool("WEBGL_PACK_NORMALIZATION")?new Bv(e.shape,n,o,a,i):new Mv(e.shape,n,o,a,i);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){var c=new Ov(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(i){return fo(i)});return Xl(ie(e.shape,e.dtype,o),n)}var a=new im(e.shape,n);return this.compileAndRun(a,[e])},t.prototype.pad=function(e,n,o){var a=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Hv(e.shape,n,o):new Gv(e.shape,n,o);return this.compileAndRun(a,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var o=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new um(e.shape,n):new sm(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,n,o){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,o);var a=new Av(e.shape,n.size,o);return this.compileAndRun(a,[e,n])},t.prototype.batchToSpaceND=function(e,n,o){E(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(f,p){return f*p}),i=_a(e.shape,n,a),s=Ca(i.length,n.length),u=Ea(e.shape,n,a),c=Bl(o,n.length),l=Ll(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){E(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(p,h){return p*h}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=_a(u.shape,n,a,!1),l=Ca(c.length,n.length,!1),f=Ea(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.reduce=function(e,n,o){var a=e.shape[0],i=e.shape[1],s=pa(i),u=new qv({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,n,o)},t.prototype.argReduce=function(e,n,o){o===void 0&&(o=null);var a=e.shape[0],i=e.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=pa(i),u=new Kd({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:e.shape,i=pa(a[a.length-1]),s=new Zd(a,i,n,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){mt("sum",n,e.rank);var o=nt(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i),u=Ei(e.dtype);return this.reduce(s,"sum",u).reshape(a)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var o=nt(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i),u=Ei(e.dtype);return this.reduce(s,"prod",u).reshape(a)},t.prototype.unsortedSegmentSum=function(e,n,o){var a=0,i=Bt([a],e.rank),s=e;i!=null&&(s=e.transpose(i),a=Lt(1,e.rank)[0]);var u=function(h,d,m){for(var v=[],g=h.length,x=0;x<g;x++)x!==d?v.push(h[x]):v.push(m);return v}(s.shape,a,o),c=ee([s.shape[a]]),l=s.as2D(-1,c),f=Ei(e.dtype),p=this.segOpCompute(l,"unsortedSegmentSum",n,f,o).reshape(u);return i!=null&&(p=p.transpose(Aa(i))),p},t.prototype.segOpCompute=function(e,n,o,a,i){var s=e.shape[0],u=e.shape[1],c=function(p,h){var d,m=!1;for(p<=_s?(d=p,m=!0):d=ya(p,Math.floor(Math.sqrt(p)));!m;)d>h||d===p?m=!0:d=ya(p,d+1);return d}(u,i),l=new em({windowSize:c,inSize:u,batchSize:s,numSegments:i},n),f=this.compileAndRun(l,[e,o],a);return f.shape[1]===i?f:(o=wa(0,i).tile([u/c]),this.segOpCompute(f,n,o,a,i))},t.prototype.argMinMaxReduce=function(e,n,o){var a=[n];if(mt("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,e.rank),!M().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=nt(e.shape,a),s=i[0],u=ee(i[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,o,a){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var i=new xv(e.shape,o,a);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var o=new ze("return float(a == b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new ze("return float(a != b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new ze("return float(a < b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new ze("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new ze("return float(a > b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new ze("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new ue(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new ze("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new ze("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.select=function(e,n,o){var a=new tm(e.rank,n.shape,n.rank);return this.compileAndRun(a,[e,n,o],Xe(n.dtype,o.dtype))},t.prototype.where=function(e){xa("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return Ts(e.shape,n)},t.prototype.topk=function(e,n,o){return Yl(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){mt("min",n,e.rank);var o=nt(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new ze(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.mod=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new ze(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);mt("max",n,e.rank);var o=nt(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new ze(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.all=function(e,n){mt("all",n,e.rank);var o=nt(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},t.prototype.any=function(e,n){mt("any",n,e.rank);var o=nt(e.shape,n),a=o[0],i=ee(o[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},t.prototype.realDivide=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new ze(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new ze(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Ri);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var o=Xe(e.dtype,n.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Ri,o);var a=new ze(Ri,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.packedUnaryOp=function(e,n,o){var a=new oo(e.shape,n);return this.compileAndRun(a,[e],o)},t.prototype.packedBinaryOp=function(e,n,o,a,i){i===void 0&&(i=!1);var s=new an(o,e.shape,n.shape,i);return this.compileAndRun(s,[e,n],a)},t.prototype.complexSeparableBinaryOp=function(e,n,o){var a=this,i=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(p){var h=p[0],d=p[1],m=a.makeComplexComponentTensorInfo(e,h),v=a.makeComplexComponentTensorInfo(n,d),g=new ze(o,e.shape,n.shape);return a.compileAndRun(g,[m,v],Xe(h.dtype,d.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>M().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),o=this.addN(e.slice(0,n)),a=this.addN(e.slice(n));return this.addN([o,a])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return Xe(c,l)}),s=e.map(function(c){return c.shape}),u=M().getBool("WEBGL_PACK")?new jd(e[0].shape,s):new qd(e[0].shape,s);return this.compileAndRun(u,e,i)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Ii);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var o=Xe(e.dtype,n.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Ii,e.dtype);var a=new ze(Ii,e.shape,n.shape);return this.compileAndRun(a,[e,n],o)},t.prototype.pow=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new ze(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),a=Xe(e.dtype,n.dtype);return this.compileAndRun(o,[e,n],a)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,wc,e.dtype);var n=new ue(e.shape,wc);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,_c,e.dtype);var n=new ue(e.shape,_c);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new ue(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new ue(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new ue(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new ue(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new ue(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Cc,e.dtype);var n=new ue(e.shape,Cc);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ec,e.dtype);var n=new ue(e.shape,Ec);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var o=He([n],e.shape),a=this.max(e,o),i=ft(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new ue(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new ue(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new ue(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new ue(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new ue(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=M().getBool("WEBGL_PACK")?new oo(e.shape,_f):new ue(e.shape,xf),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=M().getBool("WEBGL_PACK")?new oo(e.shape,Cf):new ue(e.shape,bf),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(ef,e.shape,n.shape):new ze(Zl,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.elu=function(e){if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ef,e.dtype);var n=new ue(e.shape,wf);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new ze("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.selu=function(e){var n=new ue(e.shape,lm);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new ue(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,o){var a,i=(a=M().getBool("WEBGL_PACK_CLIP")?new sv(e.shape):new iv(e.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,xc,e.dtype);var n=new ue(e.shape,xc);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),o=new uv(e.shape),a=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(o,a)},t.prototype.sigmoid=function(e){var n=new ue(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new ue(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new ue(e.shape,fm);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new ue(e.shape,pm);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new ue(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new ue(e.shape,hm);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new ue(e.shape,dm);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new ue(e.shape,vm);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new ze(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.sinh=function(e){var n=new ue(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new ue(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new ue(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new ue(e.shape,mm);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new ue(e.shape,gm);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new ue(e.shape,ym);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new ue(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var o=new ue(e.shape,function(a){return a===void 0&&(a=0),Wt+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(n));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,n,o,a,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],p=o.outChannels,h=o.dataFormat==="channelsLast",d=(f===1||p===1)&&l>1e3,m=u[2]%2!=0&&!!c.isPacked;if(d||!M().getBool("WEBGL_LAZILY_UNPACK")||!M().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var v=h?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,v,o.inChannels]),x=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:x,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var b=h?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,b,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(so(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var _=this.reshape(n,[1,o.inChannels,o.outChannels]),I=this.fusedBatchMatMul({a:y,b:_,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),R=this.texData.get(I.dataId);return E(R.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,R.shape=o.outShape,T.makeTensorFromDataId(I.dataId,o.outShape,I.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,p=o.outHeight,h=o.dataFormat==="channelsLast",d=u*c*l,m=p*f,v=[d,m],g=e.squeeze([0]),x=n.reshape([1,d,-1]),b=new Pv(v,g.shape,o),y=this.compileAndRun(b,[g]).reshape([1,v[0],v[1]]),w=a!=null,_=s!=null,I=i?na(i,!0):null,R=new Di(y.shape,[1,m,o.outChannels],!0,!1,w,I,_),k=[y,x];a&&k.push(a),_&&k.push(s);var S=this.compileAndRun(R,k);return h?S.reshape([1,p,f,o.outChannels]):S.reshape([1,o.outChannels,p,f])},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(M().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,f=s?na(s,!1):null,p=new lc(a,c,f,l),h=[n,o];return i&&h.push(i),u&&h.push(u),this.compileAndRun(p,h)},t.prototype.conv2d=function(e,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,o);if(M().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,o);var a=new lc(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerInput=function(e,n,o){var a=new pv(o);return this.compileAndRun(a,[e,n])},t.prototype.conv2dDerFilter=function(e,n,o){var a=new fv(o);return this.compileAndRun(a,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,o=e.input,a=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=M().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,f=u?na(u,l):null,p=[o,a],h=s!=null,d=c!=null;return h&&p.push(s),d&&p.push(c),l?(n=new pc(i,h,f,d),this.compileAndRun(n,p)):(n=new fc(i,h,f,d),this.compileAndRun(n,p))},t.prototype.depthwiseConv2D=function(e,n,o){var a;return M().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new pc(o),this.compileAndRun(a,[e,n])):(a=new fc(o),this.compileAndRun(a,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,o){var a=new mv(o);return this.compileAndRun(a,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){var a=new vv(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3d=function(e,n,o){var a=new gv(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerInput=function(e,n,o){var a=new dv(o);return this.compileAndRun(a,[e,n])},t.prototype.conv3dDerFilter=function(e,n,o){var a=new hv(o);return this.compileAndRun(a,[e,n])},t.prototype.maxPool=function(e,n){var o=new Ti(n,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,n){var o=new Ti(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,o,a){var i=new Ti(a,"max",!0),s=this.compileAndRun(i,[n]),u=new Lv(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,o){var a=new ev(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.cast=function(e,n){return Ss(e,n,this)},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.avgPool3d=function(e,n){var o=new Ai(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,o){var a=new tv(o);return this.compileAndRun(a,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var o=new Ai(n,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,o,a){var i=new Ai(a,"max",!0),s=this.compileAndRun(i,[n]),u=new Wv(a),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var o=this.texData.get(e.dataId);if(o.isPacked&&!so(e.shape,n)&&(o.texture===null||!so(o.shape,n))){var a=this.packedReshape(e,n);return T.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return Sa(e,n)},t.prototype.resizeBilinear=function(e,n,o,a){var i=M().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Yv(e.shape,n,o,a):new Xv(e.shape,n,o,a);return this.compileAndRun(i,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,o){var a=new Kv(e,n,o);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighbor=function(e,n,o,a){var i=new Qv(e.shape,n,o,a);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){var a=new $v(e,n,o);return this.compileAndRun(a,[e])},t.prototype.multinomial=function(e,n,o,a){var i=n?e:dt(e),s=i.shape[0],u=i.shape[1],c=new zv(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(e,n,o,a){var i=new Uv(e.size,n,o,a);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var n=new Cv(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return xa("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Is(e.dataSync(),n.dataSync(),o,a,i)},t.prototype.cropAndResize=function(e,n,o,a,i,s){var u=new yv(e.shape,n.shape,a,i,s);return this.compileAndRun(u,[e,n,o],"float32")},t.prototype.depthToSpace=function(e,n,o){E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var a=e.shape[0],i=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=i*n,l=s*n,f=u/(n*n),p=new _v(o==="NHWC"?[a,c,l,f]:[a,f,c,l],n,o);return this.compileAndRun(p,[e])},t.prototype.split=function(e,n,o){return Kl(e,n,o)},t.prototype.scatterND=function(e,n,o){var a=go(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=[l/u,u],p=e.reshape([s,i]),h=n.reshape([s,u]);if(l===0)return Sa(Ye([]),o);var d=X(0),m=new mc(s,i,p.rank,h.rank,c,f);return this.compileAndRun(m,[h,p,d]).reshape(o)},t.prototype.sparseToDense=function(e,n,o,a){var i=go(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,f=new mc(u,s,e.rank,n.rank,c,[l,1],!1);return this.compileAndRun(f,[n,e,a]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var o=this.texData.get(e.dataId),a=new dc(Iv,e.shape,n),i=new dc(Dv,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=ws(e,n),s=i[0],u=i[1],c=i[2],l=i[3],f=n.reshape([u,a]),p=e.reshape([e.size/c,c]),h=new Fv(a,l,[u,c]);return this.compileAndRun(h,[p,f]).reshape(s)},t.prototype.fill=function(e,n,o){if((o=o||Ir(n))==="string"){var a=lo(o,ee(e));return a.fill(n),T.makeTensor(a,e,o,this)}var i=new Tv(e,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,o){return Rs(e,n,o)},t.prototype.makeTensorInfo=function(e,n){var o=this.write(null,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var o=this.makeTensorInfo(e,n).dataId;return T.makeTensorFromDataId(o,e,n,this)},t.prototype.unpackTensor=function(e){var n=new bm(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new Vv(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var o=[vo(e.shape)].concat(mo(e.shape)),a={dtype:e.dtype,shape:o,dataId:e.dataId},i=[vo(n)].concat(mo(n)),s=new jv(i,o),u=this.runWebGLProgram(s,[a],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,o=this.texData.get(e),a=o.isPacked,i=o.shape,s=o.dtype,u=fa(i);return n=a?new wv(u):new bv(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===ho.DENSE){var l=uo(e.outputShape);c.texShape=l.map(function(b){return 2*b})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),ee(u.shape)===0)return c.values=Sr(u.dtype,0),u;var f=[],p=n.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(b.dataId);if(y.texture==null){if(!e.packedInputs&&ee(b.shape)<=M().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=b.shape)}else if(!!y.isPacked!=!!e.packedInputs)b=y.isPacked?s.unpackTensor(b):s.packTensor(b),f.push(b),y=s.texData.get(b.dataId);else if(y.isPacked&&!so(y.shape,b.shape)){var w=b,_=b.shape;b.shape=y.shape,b=s.packedReshape(b,_),f.push(b),y=s.texData.get(b.dataId),w.shape=_}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var h,d={shape:u.shape,texData:c,isUniform:!1},m=function(b,y,w){var _="";y.concat(w).forEach(function(k){var S=k.texData!=null&&k.texData.slice!=null&&k.texData.slice.flatOffset>0,F=k.isUniform?"uniform":k.texData.texShape;_+=k.shape+"_"+F+"_"+S});var I=b.userCode,R=b.constructor.name;return R+="_"+_+"_"+I}(e,p,d),v=this.getAndSaveBinary(m,function(){return function(b,y,w,_){var I=y.userCode,R=w.map(function(W,H){var q={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(q.flatOffset=W.texData.slice.flatOffset),{name:y.variableNames[H],shapeInfo:q}}),k=R.map(function(W){return W.shapeInfo}),S={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},F=Xd(R,S,I,y.packedInputs),A=b.createProgram(F),L=null,O=b.getUniformLocation(A,"NAN",!1);M().getNumber("WEBGL_VERSION")===1&&(L=b.getUniformLocation(A,"INFINITY",!1));for(var B={},U=0;U<y.variableNames.length;U++){var z=y.variableNames[U];B[z]=b.getUniformLocation(A,z,!1),B["offset"+z]=b.getUniformLocation(A,"offset"+z,!1)}return{program:y,source:F,webGLProgram:A,uniformLocations:B,inShapeInfos:k,outShapeInfo:S,infLoc:L,nanLoc:O}}(s.gpgpu,e,p,d)}),g=this.activeTimers!=null;if(g&&(h=this.startTimer()),function(b,y,w,_,I){vc(y.inShapeInfos,w),vc([y.outShapeInfo],[_]);var R=_.texData.texture,k=_.texData.texShape;_.texData.isPacked?b.setOutputPackedMatrixTexture(R,k[0],k[1]):b.setOutputMatrixTexture(R,k[0],k[1]),b.setProgram(y.webGLProgram),M().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&b.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&b.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(S,F){var A=y.program.variableNames[F],L=y.uniformLocations[A],O=y.uniformLocations["offset"+A];if(L!=null)if(S.isUniform)if(ee(S.shape)<2)b.gl.uniform1f(L,S.uniformValues[0]);else{var B=S.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),b.gl.uniform1fv(L,B)}else S.texData.slice!=null&&O!=null&&b.gl.uniform1i(O,S.texData.slice.flatOffset),b.setInputMatrixTexture(S.texData.texture,L,F)}),I?.(b,y.webGLProgram),b.executeProgram()}(this.gpgpu,v,p,d,a),f.forEach(function(b){return s.disposeData(b.dataId)}),g&&(h=this.endTimer(h),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(h)})),!M().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var x=this.unpackTensor(u);return this.disposeData(u.dataId),x}return u},t.prototype.compileAndRun=function(e,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(e,n,o,a,i);return T.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(M().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=G(function(){if(!M().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=M().getBool("DEBUG");M().set("DEBUG",!1);var o=e.abs(X(1e-8)).dataSync()[0];if(M().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,o=this.texData.get(e),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,p=this.activeTimers!=null;p&&(f=Nt());var h=o.texShape;if(h==null&&(h=wl(a,l),o.texShape=h),s!=null){var d=fa(a),m=void 0,v=h[1],g=h[0],x=s instanceof Uint8Array;l?(v=(n=wo(h[0],h[1]))[0],g=n[1],m=new Rv(d,[g,v],x)):m=new Sv(d,[g,v],x);var b=this.makeTensorInfo([g,v],i);this.texData.get(b.dataId).usage=x?_t.PIXELS:_t.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),v,g,s);var y=this.runWebGLProgram(m,[b],i,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(y.dataId),o.values=null,p&&(this.uploadWaitMs+=Nt()-f)}else{var _=this.acquireTexture(h,c,i,l);o.texture=_}}},t.prototype.convertAndCacheOnCPU=function(e,n){var o=this.texData.get(e),a=o.dtype;return this.releaseGPUData(e),n!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,a)),o.values},t.prototype.acquireTexture=function(e,n,o,a){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,n,a)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*ps(n)},t}(ql);nl()&&T.registerBackend("webgl",function(){return new kf},2);var _m=D({square_:function(r){var t=C(r,"x","square"),e=[t];return T.runKernelFunc(function(n,o){return o([t]),n.square(t)},{x:t},null,"Square",{},e,[])}}),bo="SquaredDifference",Sf=D({squaredDifference_:function(r,t){var e,n=C(r,"a","squaredDifference"),o=C(t,"b","squaredDifference");e=Ae(n,o),n=e[0],o=e[1],fe(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return T.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},a,function(s,u){var c=u[0],l=u[1],f=X(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},bo,{},i,[])}}),Cm=D({abs_:function(r){var t=C(r,"x","abs");return t.dtype==="complex64"?T.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):T.runKernelFunc(function(e,n){var o=e.abs(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),Em=D({acos_:function(r){var t=C(r,"x","acos");return T.runKernelFunc(function(e,n){var o=e.acos(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(X(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),km=D({acosh_:function(r){var t=C(r,"x","acosh");return T.runKernelFunc(function(e,n){var o=e.acosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),Sm=D({asin_:function(r){var t=C(r,"x","asin");return T.runKernelFunc(function(e,n){var o=e.asin(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(X(1).sub(o.toFloat().square()).sqrt())}}})}}),Rm=D({asinh_:function(r){var t=C(r,"x","asinh");return T.runKernelFunc(function(e,n){var o=e.asinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(X(1).add(o.toFloat().square()).sqrt())}}})}}),Im=D({atan_:function(r){var t=C(r,"x","atan");return T.runKernelFunc(function(e,n){var o=e.atan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),Dm=D({atanh_:function(r){var t=C(r,"x","atanh");return T.runKernelFunc(function(e,n){var o=e.atanh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(X(1).sub(o.toFloat().square()))}}})}}),Tm=D({ceil_:function(r){var t=C(r,"x","ceil");return T.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Co=D({clipByValue_:function(r,t,e){var n=C(r,"x","clipByValue");E(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[n],a={min:t,max:e};return T.runKernelFunc(function(i,s){var u=i.clip(n,t,e);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),ge(i))}}},"ClipByValue",a,o)}}),Am=D({cos_:function(r){var t=C(r,"x","cos"),e=[t];return T.runKernelFunc(function(n,o){var a=n.cos(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}},"Cos",{},e)}}),Fm=D({cosh_:function(r){var t=C(r,"x","cosh");return T.runKernelFunc(function(e,n){var o=e.cosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),Nm=D({erf_:function(r){var t=C(r,"x","erf");return E(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),T.runKernelFunc(function(e,n){var o=e.erf(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Ba=D({exp_:function(r){var t=C(r,"x","exp");return T.runKernelFunc(function(e,n){var o=e.exp(t);return n([o]),o},{x:t},function(e,n){return{x:function(){return e.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),Pm=D({expm1_:function(r){var t=C(r,"x","expm1");return T.runKernelFunc(function(e,n){var o=e.expm1(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.exp())}}})}}),Mm=D({floor_:function(r){var t=C(r,"x","floor");return T.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Om=D({log_:function(r){var t=C(r,"x","log"),e=[t];return T.runKernelFunc(function(n,o){var a=n.log(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}},"Log",{},e)}}),Bm=D({log1p_:function(r){var t=C(r,"x","log1p");return T.runKernelFunc(function(e,n){var o=e.log1p(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.add(1))}}})}}),Lm=D({logSigmoid_:function(r){var t=C(r,"x","logSigmoid");return T.runKernelFunc(function(e,n){var o=e.softplus(t.neg()).neg();return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),Eo=D({neg_:function(r){var t=C(r,"x","neg"),e=[t];return T.runKernelFunc(function(n){return n.neg(t)},{x:t},function(n){return{x:function(){return n.neg()}}},"Neg",{},e)}}),Wm=D({reciprocal_:function(r){var t=C(r,"x","reciprocal");return T.runKernelFunc(function(e,n){var o=e.reciprocal(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.square().neg())}}})}}),zm=D({round_:function(r){var t=C(r,"x","round");return T.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Rf=D({rsqrt_:function(r){var t=C(r,"x","rsqrt"),e=[t];return T.runKernelFunc(function(n,o){var a=n.rsqrt(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Ps=D({sigmoid_:function(r){var t=C(r,"x","sigmoid");return T.runKernelFunc(function(e,n){var o=e.sigmoid(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.mul(X(1).sub(o)))}}},"Sigmoid")}}),Um=D({sign_:function(r){var t=C(r,"x","sign");return T.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Vm=D({isNaN_:function(r){var t=C(r,"x","isNaN");return T.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Gm=D({isInf_:function(r){var t=C(r,"x","isInf");return T.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),Hm=D({isFinite_:function(r){var t=C(r,"x","isFinite");return T.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return ge(e)}}})}}),qm=D({sin_:function(r){var t=C(r,"x","sin"),e=[t];return T.runKernelFunc(function(n,o){var a=n.sin(t);return o([t]),a},{x:t},function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}},"Sin",{},e)}}),jm=D({sinh_:function(r){var t=C(r,"x","sinh");return T.runKernelFunc(function(e,n){var o=e.sinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),Km=D({softplus_:function(r){var t=C(r,"x","softplus");return T.runKernelFunc(function(e,n){var o=e.softplus(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),Xm=D({sqrt_:function(r){var t=C(r,"x","sqrt");return T.runKernelFunc(function(e,n){var o=e.sqrt(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),Ym=D({step_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","step");return T.runKernelFunc(function(n){return n.step(e,t)},{$x:e},function(n){return{$x:function(){return ge(n)}}})}}),$m=D({tan_:function(r){var t=C(r,"x","tan");return T.runKernelFunc(function(e,n){var o=e.tan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.cos().square())}}})}}),Qm=D({tanh_:function(r){var t=C(r,"x","tanh");return T.runKernelFunc(function(e,n){var o=e.tanh(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return X(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function If(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),ko(u,c,l,s,i,a)}function Df(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),ko(u,c,l,s,i,a)}function Tf(r,t,e,n,o,a){var i,s,u=C(r,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),ko(u,c,l,s,i,a)}function ko(r,t,e,n,o,a){a==null&&(a=.001);var i,s,u,c=C(r,"x","batchNorm"),l=C(t,"mean","batchNorm"),f=C(e,"variance","batchNorm");o!=null&&(i=C(o,"scale","batchNorm")),n!=null&&(s=C(n,"offset","batchNorm")),E(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var p=[c,l,f,i];return T.runKernelFunc(function(h,d){var m=h.batchNormalization(u,ra(l),ra(f),a,ra(i),ra(s));return d([c,l,f,i]),m},{x:c,mean:l,variance:f,scale:i,offset:s},function(h,d){var m=d,v=m[0],g=m[1],x=m[2],b=m[3],y=b??X(1),w=Ge(g.shape,u.shape),_=[];if(g.rank===1){for(var I=0;I<u.shape.length-1;++I)_.push(u.shape[I]);_.push(1)}var R=v.sub(g),k=h.mul(y),S=Rf(x.add(X(a))),F=S.mul(S).mul(S).mul(X(-.5));return{x:function(){return g.rank===1?h.mul(Gn(S.as4D(1,1,1,g.shape[0]),_)).mul(y).reshape(v.shape):h.mul(S).mul(y).reshape(v.shape)},mean:function(){var A=S.mul(X(-1)).mul(k);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},variance:function(){var A=F.mul(R).mul(k);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},scale:function(){var A=R.mul(S),L=h.mul(A);return g.rank===1&&(L=L.sum(w)),L.reshape(g.shape)},offset:function(){var A=h;return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:a},p).reshape(c.shape)}function ra(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function La(){Il("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var Jm=D({batchNormalization2d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),La(),If(r,t,e,a,o,n)}}),Zm=D({batchNormalization3d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),La(),Df(r,t,e,a,o,n)}}),eg=D({batchNormalization4d_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),La(),Tf(r,t,e,a,o,n)}}),tg=D({batchNormalization_:function(r,t,e,n,o,a){return n===void 0&&(n=.001),La(),ko(r,t,e,a,o,n)}}),Ms=D({batchNorm_:ko}),ng=D({batchNorm2d_:If}),rg=D({batchNorm3d_:Df}),og=D({batchNorm4d_:Tf}),Wa=D({logicalAnd_:function(r,t){var e=C(r,"a","logicalAnd","bool"),n=C(t,"b","logicalAnd","bool");return fe(e.shape,n.shape),T.runKernelFunc(function(o){return o.logicalAnd(e,n)},{a:e,b:n},null,"LogicalAnd")}}),ag=D({logicalNot_:function(r){var t=C(r,"x","logicalNot","bool");return T.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),Af=D({logicalOr_:function(r,t){var e=C(r,"a","logicalOr","bool"),n=C(t,"b","logicalOr","bool");return fe(e.shape,n.shape),T.runKernelFunc(function(o){return o.logicalOr(e,n)},{$a:e,$b:n})}}),ig=D({logicalXor_:function(r,t){var e=C(r,"a","logicalXor","bool"),n=C(t,"b","logicalXor","bool");return fe(e.shape,n.shape),Af(r,t).logicalAnd(Wa(r,t).logicalNot())}}),Kn=D({where_:function(r,t,e){var n=C(t,"a","where"),o=C(e,"b","where"),a=C(r,"condition","where","bool");return xe(n.shape,o.shape,"Error in where: "),a.rank===1?E(a.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):xe(a.shape,o.shape,"Error in where: "),T.runKernelFunc(function(i,s){var u=i.select(a,n,o);return s([a]),u},{$condition:a,$a:n,$b:o},function(i,s){var u=s[0];return{$condition:function(){return ge(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),Ff=function(r){return J(this,void 0,void 0,function(){var t,e,n;return Z(this,function(o){switch(o.label){case 0:return[4,(t=C(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),n=Ts(t.shape,e),r!==t&&t.dispose(),[2,n]}})})},oe=D({add_:function(r,t){var e,n=C(r,"a","add"),o=C(t,"b","add");e=Ae(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return T.runKernelFunc(function(i){return i.add(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Ge(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Ge(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),sg=D({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(o,a){return C(o,"tensors"+a,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!Ve(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=t;return T.runKernelFunc(function(o){return o.addN(t)},n,function(o){var a={};return t.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),ug=D({addStrict_:function(r,t){var e=C(r,"a","addStrict"),n=C(t,"b","addStrict");return xe(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),cg=D({atan2_:function(r,t){var e,n=C(r,"a","atan2"),o=C(t,"b","atan2");e=Ae(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=oe(u.square(),c.square()),f=i.mul(c.div(l)),p=Ge(u.shape,a);return p.length>0&&(f=f.sum(p)),f.reshape(u.shape)},$b:function(){var l=oe(u.square(),c.square()),f=Eo(i.mul(u.div(l))),p=Ge(c.shape,a);return p.length>0&&(f=f.sum(p)),f.reshape(c.shape)}}})}}),Rt=D({div_:function(r,t){var e,n=C(r,"a","div"),o=C(t,"b","div");if(e=Ae(n,o),n=e[0],o=e[1],n.dtype==="int32"&&o.dtype==="int32")return Nf(n,o);var a=fe(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Ge(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Ge(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var p=c.square();return l.div(p.toFloat()).neg()}}},"Div")}}),lg=D({divNoNan_:function(r,t){var e,n=C(r,"a","div"),o=C(t,"b","div");n=(e=Ae(n,o))[0],o=e[1];var a=Rt(n,o),i=ge(a),s=o.equal(i);return Kn(s,i,a)}}),fg=D({divStrict_:function(r,t){var e=C(r,"a","div"),n=C(t,"b","div");return xe(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),Nf=D({floorDiv_:function(r,t){var e,n=C(r,"a","floorDiv"),o=C(t,"b","floorDiv");e=Ae(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),f=Ge(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Ge(c.shape,a);f.length>0&&(l=l.sum(f).reshape(c.shape));var p=c.square();return l.div(p.toFloat()).neg()}}},"FloorDiv")}}),Os=D({maximum_:function(r,t){var e,n=C(r,"a","maximum"),o=C(t,"b","maximum");return e=Ae(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),fe(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.maximum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),pg=D({maximumStrict_:function(r,t){var e=C(r,"a","maximumStrict"),n=C(t,"b","maximumStrict");return xe(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),Pf=D({minimum_:function(r,t){var e,n=C(r,"a","minimum"),o=C(t,"b","minimum");return e=Ae(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),fe(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.minimum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),hg=D({minimumStrict_:function(r,t){var e=C(r,"a","minimumStrict"),n=C(t,"b","minimumStrict");return xe(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),dg=D({mod_:function(r,t){var e,n=C(r,"a","mod"),o=C(t,"b","mod");e=Ae(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Ge(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),f=Ge(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),vg=D({modStrict_:function(r,t){var e=C(r,"a","modStrict"),n=C(t,"b","modStrict");return xe(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),Oe=D({mul_:function(r,t){var e,n=C(r,"a","mul"),o=C(t,"b","mul");e=Ae(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),f=Ge(u.shape,a);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),f=Ge(c.shape,a);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),mg=D({mulStrict_:function(r,t){var e=C(r,"a","mul"),n=C(t,"b","mul");return xe(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),Ra=D({pow_:function(r,t){var e,n=C(r,"base","pow"),o=C(t,"exp","pow");e=Ae(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape),i=[n,o];return T.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var p=l.toFloat(),h=s.mul(p.mul(c.pow(p.sub(X(1))))),d=Ge(c.shape,a);return d.length>0&&(h=h.sum(d)),h.reshape(c.shape)},b:function(){var p=c.greater(0),h=c.log().where(p,ge(c)),d=s.mul(f.mul(h)),m=Ge(l.shape,a);return m.length>0&&(d=d.sum(m)),d.reshape(l.shape)}}},"Pow",{},i,[!0])}}),gg=D({powStrict_:function(r,t){return xe(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),yg=D({squaredDifferenceStrict_:function(r,t){var e=C(r,"a","squaredDifferenceStrict"),n=C(t,"b","squaredDifferenceStrict");return xe(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),Se=D({sub_:function(r,t){var e,n=C(r,"a","sub"),o=C(t,"b","sub");e=Ae(n,o),n=e[0],o=e[1];var a=fe(n.shape,o.shape);return T.runKernelFunc(function(i){return i.subtract(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Ge(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Ge(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),xg=D({subStrict_:function(r,t){var e=C(r,"a","subStrict"),n=C(t,"b","subStrict");return xe(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),Mf=D({equal_:function(r,t){var e,n=C(r,"a","equal"),o=C(t,"b","equal");return e=Ae(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),T.runKernelFunc(function(a){return a.equal(n,o)},{$a:n,$b:o})}}),bg=D({equalStrict_:function(r,t){var e=C(r,"a","equalStrict"),n=C(t,"b","equalStrict");return xe(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),wg=D({greater_:function(r,t){var e,n=C(r,"a","greater"),o=C(t,"b","greater");return e=Ae(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),T.runKernelFunc(function(a){return a.greater(n,o)},{a:n,b:o},null,"Greater")}}),Of=D({greaterEqual_:function(r,t){var e,n=C(r,"a","greaterEqual"),o=C(t,"b","greaterEqual");return e=Ae(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return ge(s)},b:function(){return ge(u)}}},"GreaterEqual")}}),_g=D({greaterEqualStrict_:function(r,t){var e=C(r,"a","greaterEqualStrict"),n=C(t,"b","greaterEqualStrict");return xe(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),Cg=D({greaterStrict_:function(r,t){var e=C(r,"a","greaterStrict"),n=C(t,"b","greaterStrict");return xe(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),Eg=D({less_:function(r,t){var e,n=C(r,"a","less"),o=C(t,"b","less");return e=Ae(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),T.runKernelFunc(function(a){return a.less(n,o)},{a:n,b:o},null,"Less")}}),kg=D({lessEqual_:function(r,t){var e,n=C(r,"a","lessEqual"),o=C(t,"b","lessEqual");return e=Ae(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s},{a:n,b:o},null,"LessEqual")}}),Sg=D({lessEqualStrict_:function(r,t){var e=C(r,"a","lessEqualStrict"),n=C(t,"b","lessEqualStrict");return xe(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),Rg=D({lessStrict_:function(r,t){var e=C(r,"a","lessStrict"),n=C(t,"b","lessStrict");return xe(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),Ig=D({notEqual_:function(r,t){var e,n=C(r,"a","notEqual"),o=C(t,"b","notEqual");return e=Ae(n,o),n=e[0],o=e[1],fe(n.shape,o.shape),T.runKernelFunc(function(a){return a.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),Dg=D({notEqualStrict_:function(r,t){var e=C(r,"a","notEqualStrict"),n=C(t,"b","notEqualStrict");return xe(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function kc(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function Sc(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var Bs=D({gather_:function(r,t,e){e===void 0&&(e=0);var n=C(r,"x","gather"),o=C(t,"indices","gather","int32");e=He(e,n.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],f=1,p=1,h=0;h<u;h++)l.push(i.shape[h]),f*=i.shape[h];for(h=0;h<s.rank;h++)l.push(s.shape[h]);for(h=u+1;h<i.rank;h++)l.push(i.shape[h]),p*=i.shape[h];return{batchSize:f,sliceSize:p,dimSize:c,outputShape:l}}(n,o,e);return T.runKernelFunc(function(i,s){var u=i.gather(n,o.flatten(),e);return s([o]),u},{x:n,indices:o},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,f=c.slice(0,e),p=f.length,h=c.slice(e,c.length).slice(1),d=h.length,m=kc(0,p),v=kc(p+1,p+1+d),g=Sc([f,[l],h]),x=i.reshape(g),b=u.reshape([l]),y=Sc([[p],m,v]),w=x.transpose(y),_=Bf(w,b,n.shape[e]),I=Aa(y);return _=_.transpose(I)},indices:function(){return u}}},"Gather",{axis:e}).reshape(a.outputShape)}}),Bf=D({unsortedSegmentSum_:function(r,t,e){var n=C(r,"x","unsortedSegmentSum"),o=C(t,"segmentIds","unsortedSegmentSum","int32");return E(Be(e),function(){return"numSegments must be of dtype int"}),T.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(n,o,e);return i([o]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=Os(c,ge(c)),f=Bs(u,l),p=Of(c,X(0,"int32")),h=f.rank-p.rank,d=0;d<h;++d)p=it(p,d+1);p=Wa(p,Tr(f.shape,"bool"));var m=ge(f);return Kn(p,f,m)}(a,s)}}})}}),Tg=function(r,t,e){return J(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,p,h,d,m;return Z(this,function(v){switch(v.label){case 0:for(n=C(r,"tensor","boolMask"),o=C(t,"mask","boolMask","bool"),a=e??0,i=o.rank,s=n.shape,E(i>0,function(){return"mask cannot be scalar"}),xe(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),f=n.reshape(l),p=o.reshape([-1]),[4,Ff(p)];case 1:return h=v.sent(),d=h.squeeze([1]),m=Bs(f,d,a),r!==n&&n.dispose(),t!==o&&o.dispose(),d.dispose(),f.dispose(),p.dispose(),h.dispose(),[2,m]}})})};function Lf(r,t,e,n,o,a,i){a===void 0&&(a="NHWC"),E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=a==="NHWC"?s[3]:s[1],f=a==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),E(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&E(Be(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var p=Oa(a),h=Dn(s,e.shape,n,1,o,i,!1,p),d=T.runKernelFunc(function(m,v){var g=m.conv2dDerInput(u,e,h);return v([e,u]),g},{dy4D:u,filter:e},function(m,v){var g=v[0],x=v[1];return{dy4D:function(){return $e(m,g,n,o,a,1,i)},filter:function(){return Ls(m,x,g.shape,n,o,a,i)}}});return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function Ni(r){var t=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function Wf(r,t,e,n,o){E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var a=r,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];E(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),E(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),E(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=xo(a,e.shape,n,1,o),f=T.runKernelFunc(function(p){return p.conv3dDerInput(i,e,l)},{dy5D:i});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var Ag=D({conv1d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=C(r,"x","conv1d"),u=C(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(Be(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(pt(e,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+a+"'"}),E(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),p=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),h=$e(p,f,[1,e],n,"NHWC",[1,a],i);return l?h.as2D(h.shape[2],h.shape[3]):h.as3D(h.shape[0],h.shape[2],h.shape[3])}}),$e=D({conv2d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=C(r,"x","conv2d"),u=C(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(Be(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=o==="NHWC"?c.shape[3]:c.shape[1];E(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),E(pt(e,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"});var p=Oa(o),h=Dn(c.shape,u.shape,e,a,n,i,!1,p),d=[u,c],m=T.runKernelFunc(function(v,g){var x=v.conv2d(c,u,h);return g([u,c]),x},{x:c,filter:u},function(v,g){var x=g,b=x[0],y=x[1];return E(jn(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return zf(y.shape,v,b,e,n,o)},filter:function(){return Ls(y,v,b.shape,e,n,o)}}},"Conv2D",h,d);return l?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Fg=D({conv3d_:function(r,t,e,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=C(r,"x","conv3d"),s=C(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(p,h){return Ni(p)||Ni(h)}(e,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),E(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=xo(u.shape,s.shape,e,a,n),f=T.runKernelFunc(function(p,h){var d=p.conv3d(u,s,l);return h([u,s]),d},{x:u,$filter:s},function(p,h){E(Ni(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var d=h[0],m=h[1];return{x:function(){return Wf(d.shape,p,m,e,n)},$filter:function(){return function(v,g,x,b,y){var w=v;v.rank===4&&(w=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var _=g;_.rank===4&&(_=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),E(_.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."}),E(x.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+x+"."}),E(w.shape[4]===x[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+x[3]+"."}),E(_.shape[4]===x[4],function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+x[4]+")."});var I=xo(w.shape,x,b,1,y);return T.runKernelFunc(function(R){return R.conv3dDerFilter(w,_,I)},{x5D:w,dy5D:_})}(d,p,m.shape,e,n)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Ls=D({conv2dDerFilter_:function(r,t,e,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),E(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&E(Be(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=Oa(a),p=Dn(s.shape,e,n,1,o,i,!1,f);return T.runKernelFunc(function(h){return h.conv2dDerFilter(s,u,p)},{x4D:s,dy4D:u})}}),zf=D({conv2dDerInput_:Lf}),So=D({depthwiseConv2d_:function(r,t,e,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=C(r,"x","depthwiseConv2d"),u=C(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),E(pt(e,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),i!=null&&E(Be(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var f=Dn(c.shape,u.shape,e,a,n,i,!0),p=[c,u],h=T.runKernelFunc(function(d,m){var v=d.depthwiseConv2D(c,u,f);return m([c,u]),v},{x:c,filter:u},function(d,m){E(jn(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var v=m[0],g=m[1];return{x:function(){return Uf(v.shape,d,g,f)},filter:function(){return Vf(v,d,g.shape,f)}}},"DepthwiseConv2dNative",f,p);return l?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}}),Uf=D({depthwiseConv2dDerInput_:function(r,t,e,n){var o=t,a=!1;t.rank===3&&(a=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=T.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,n)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),Vf=D({depthwiseConv2dDerFilter_:function(r,t,e,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t;return a.rank===3&&(a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),T.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,n)},{x4D:o,dy4D:a})}}),Ro=D({separableConv2d_:function(r,t,e,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=C(r,"x","separableConv2d"),u=C(t,"depthwiseFilter","separableConv2d"),c=C(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var p=u.shape[2],h=u.shape[3];E(c.shape[2]===p*h,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+p*h+", but got "+c.shape[2]+"."});var d=So(l,u,n,o,i,a),m=$e(d,c,1,"valid",i);return f?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),Ng=D({conv2dTranspose_:function(r,t,e,n,o,a){return Lf(e,C(r,"x","conv2dTranspose"),C(t,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),Pg=D({conv3dTranspose_:function(r,t,e,n,o){return Wf(e,C(r,"x","conv3dTranspose"),C(t,"filter","conv3dTranspose"),n,o)}}),Ar=D({matMul_:function(r,t,e,n){var o;e===void 0&&(e=!1),n===void 0&&(n=!1);var a=C(r,"a","matMul"),i=C(t,"b","matMul");o=Ae(a,i),a=o[0],i=o[1];var s=e?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],f=a.shape.slice(0,-2),p=i.shape.slice(0,-2),h=ee(f),d=ee(p);E(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),E(Ve(f,p),function(){return"Error in matMul: outer dimensions ("+f+") and ("+p+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+n+" must match."});var m=a.shape.slice(0,-2).concat([c,l]),v=e?a.as3D(h,s,c):a.as3D(h,c,s),g=n?i.as3D(d,l,u):i.as3D(d,u,l),x={transposeA:e,transposeB:n};return T.runKernelFunc(function(b,y){var w=b.batchMatMul(v,g,e,n);return y([v,g]),w},{a:v,b:g},function(b,y){var w=y,_=w[0],I=w[1];return e||n?!e&&n?{a:function(){return b.matMul(I,!1,!1)},b:function(){return b.matMul(_,!0,!1)}}:e&&!n?{a:function(){return I.matMul(b,!1,!0)},b:function(){return _.matMul(b,!1,!1)}}:{a:function(){return I.matMul(b,!0,!0)},b:function(){return b.matMul(_,!0,!0)}}:{a:function(){return b.matMul(I,!1,!0)},b:function(){return _.matMul(b,!0,!1)}}},"BatchMatMul",x).reshape(m)}}),Mg=D({dot_:function(r,t){var e=C(r,"t1","dot"),n=C(t,"t2","dot");E(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."});var o=e.rank===1?e.size:e.shape[1],a=n.rank===1?n.size:n.shape[0];return E(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),Og=D({outerProduct_:function(r,t){var e=C(r,"v1","outerProduct"),n=C(t,"v2","outerProduct");return E(e.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."}),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),Io=D({reverse_:function(r,t){var e=C(r,"x","reverse");if(e.rank===0)return e.clone();var n=He(t,e.shape);return T.runKernelFunc(function(o){return o.reverse(e,n)},{$x:e},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(e)}}),Bg=D({reverse1d_:function(r){var t=C(r,"x","reverse");return E(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),Io(t,0)}}),Lg=D({reverse2d_:function(r,t){var e=C(r,"x","reverse");return E(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),Io(e,t)}}),Wg=D({reverse3d_:function(r,t){var e=C(r,"x","reverse");return E(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),Io(e,t)}}),zg=D({reverse4d_:function(r,t){var e=C(r,"x","reverse");return E(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),Io(e,t)}});function Gf(r,t,e,n,o,a){var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),n==null&&(n=[1,1]),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(pt(e,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}),a!=null&&E(Be(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=Rr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Ve(c.inShape,c.outShape))return i.clone();var l=[s],f=T.runKernelFunc(function(p,h){var d=p.maxPool(s,c);return h([s,d]),d},{x:s},function(p,h){var d=h[0],m=h[1];return{x:function(){return function(v,g,x,b,y,w,_,I){var R=C(v,"dy","maxPoolBackprop"),k=C(g,"input","maxPoolBackprop"),S=C(x,"output","maxPoolBackprop");E(k.rank===R.rank,function(){return"Rank of input ("+k.rank+") does not match rank of dy ("+R.rank+")"}),w==null&&(w=[1,1]),E(pt(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),E(R.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+R.rank+"."}),E(k.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+k.rank+"."}),I!=null&&E(Be(_),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+I+" but got pad "+_+"."});var F=Rr(k.shape,b,y,w,_,I);return T.runKernelFunc(function(A){return A.maxPoolBackprop(R,k,S,F)},{$dy:R,$input:k})}(p,d,m,t,e,n,o)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function Hf(r,t,e,n,o,a){var i=C(r,"x","avgPool","float32");n==null&&(n=[1,1]),E(pt(e,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&E(Be(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=Rr(s.shape,t,e,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&Ve(c.inShape,c.outShape))return i.clone();var l=T.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(p,h,d,m,v,g){var x=C(p,"dy","avgPoolBackprop"),b=C(h,"input","avgPoolBackprop");E(b.rank===x.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+x.rank+")"}),v==null&&(v=[1,1]),E(pt(m,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+v+"'"});var y=b,w=x,_=!1;b.rank===3&&(_=!0,y=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=x.as4D(1,x.shape[0],x.shape[1],x.shape[2])),E(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),E(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var I=Rr(y.shape,d,m,v,g),R=T.runKernelFunc(function(k){return k.avgPoolBackprop(w,y,I)},{dy4D:w,input4D:y});return _?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}(f,s,t,e,n,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Le=D({maxPool_:function(r,t,e,n,o){return Gf(r,t,e,1,n,o)}}),pn=D({avgPool_:function(r,t,e,n,o){return Hf(r,t,e,1,n,o)}}),Ug=D({pool_:function(r,t,e,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=C(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(pt(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=Rr(s.shape,t,a,o,n),f=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(y,w){var _=y.map(function(k,S){return k+(k-1)*(w[S]-1)}).map(function(k){return k-1}),I=_.map(function(k){return Math.floor(k/2)}),R=_.map(function(k,S){return k-I[S]});return _.map(function(k,S){return[I[S],R[S]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var p=f[0]===1&&f[1]===1,h=function(y,w,_){var I=_.map(function(O){return O[0]}),R=_.map(function(O){return O[1]}),k=y.concat(I,R),S=w.map(function(O,B){return(O-k[B]%O)%O}),F=R.map(function(O,B){return O+S[B]}),A=w.map(function(O,B){return[I[B],F[B]]}),L=w.map(function(O,B){return[0,S[B]]});return[A,L]}([l.inHeight,l.inWidth],f,c),d=h[0],m=h[1],v=p?n:"valid",g=p?s:Ml(s,f,d),x=(e==="avg"?function(){return Hf(g,t,a,1,v)}:function(){return Gf(g,t,a,1,v)})(),b=p?x:Fl(x,f,m);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),Vg=D({maxPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(pt(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(Be(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=yo(u.shape,t,e,i,n,o,a),f=T.runKernelFunc(function(p,h){var d=p.maxPool3d(u,l);return h([u,d]),d},{x:u},function(p,h){var d=h[0],m=h[1];return{x:function(){return function(v,g,x,b,y,w,_,I){var R=C(v,"dy","maxPool3dBackprop"),k=C(g,"input","maxPool3dBackprop"),S=C(x,"output","maxPool3dBackprop"),F=R,A=k,L=S,O=!1;k.rank===4&&(O=!0,F=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3]),A=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),L=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3])),E(F.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+F.rank+"."}),E(A.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."}),E(L.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+L.rank+"."}),w==null&&(w=[1,1,1]),E(pt(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),I!=null&&E(Be(_),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+I+" but got pad "+_+"."});var B=yo(A.shape,b,y,w,_,I),U=T.runKernelFunc(function(z){return z.maxPool3dBackprop(F,A,L,B)},{dy5D:F,input5D:A});return O?U.as4D(U.shape[1],U.shape[2],U.shape[3],U.shape[4]):U}(p,d,m,t,e,i,n,o)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Gg=D({avgPool3d_:function(r,t,e,n,o,a,i){a===void 0&&(a="NDHWC");var s=C(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(pt(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),o!=null&&E(Be(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=yo(u.shape,t,e,i,n,o,a),f=T.runKernelFunc(function(p){return p.avgPool3d(u,l)},{x:u},function(p){return{x:function(){return function(h,d,m,v,g,x,b){var y=C(h,"dy","avgPool3dBackprop"),w=C(d,"input","avgPool3dBackprop"),_=y,I=w,R=!1;w.rank===4&&(R=!0,_=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),I=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(_.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."}),E(I.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+I.rank+"."}),g==null&&(g=[1,1,1]),E(pt(v,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+g+"'"}),b!=null&&E(Be(x),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+x+"."});var k=yo(I.shape,m,v,g,x,b),S=T.runKernelFunc(function(F){return F.avgPool3dBackprop(_,I,k)},{dy5D:_,input5D:I});return R?S.as4D(S.shape[1],S.shape[2],S.shape[3],S.shape[4]):S}(p,u,t,e,i,n,o)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Mt=D({slice_:function(r,t,e){var n,o,a=C(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(a.rank-1).fill(0)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(0)):t.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(a.rank).fill(-1):typeof e=="number"?[e].concat(new Array(a.rank-1).fill(-1)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-n[c])}),Ul(a,n,o);var i=a.shape,s={begin:n,size:o};return T.runKernelFunc(function(u){return u.slice(a,n,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),Hg=D({slice1d_:function(r,t,e){var n=C(r,"x","slice1d");return E(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),Mt(n,[t],[e])}}),qg=D({slice2d_:function(r,t,e){var n=C(r,"x","slice2d");return E(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),Mt(n,t,e)}}),Ws=D({slice3d_:function(r,t,e){var n=C(r,"x","slice3d");return E(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),Mt(n,t,e)}}),jg=D({slice4d_:function(r,t,e){var n=C(r,"x","slice4d");return E(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),Mt(n,t,e)}});function qf(r,t,e,n,o){return t.rank<e.rank&&(t=t.reshape(ft(t.shape,n))),r.rank<e.rank&&(r=r.reshape(ft(r.shape,n))),{x:function(){var a=r.mul(e.equal(t).cast(r.dtype));return o==null?a:a.transpose(o)}}}var Kg=D({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","all","bool"),o=He(t,n.shape),a=o,i=Bt(a,n.rank);i!=null&&(n=n.transpose(i),a=Lt(a.length,n.rank));var s=T.runKernelFunc(function(c){return c.all(n,a)},{$x:n});if(e){var u=ft(s.shape,o);return s.reshape(u)}return s}}),Xg=D({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","any","bool"),o=He(t,n.shape),a=o,i=Bt(a,n.rank);i!=null&&(n=n.transpose(i),a=Lt(a.length,n.rank));var s=T.runKernelFunc(function(c){return c.any(n,a)},{$x:n});if(e){var u=ft(s.shape,o);return s.reshape(u)}return s}}),Yg=D({argMax_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","argMax");t==null&&(t=0);var n=He(t,e.shape),o=Bt(n,e.rank);o!=null&&(e=e.transpose(o),n=Lt(n.length,e.rank));var a={axis:n[0]},i=[e];return T.runKernelFunc(function(s,u){var c=s.argMax(e,n[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return ge(c)}}},"ArgMax",a,i)}}),$g=D({argMin_:function(r,t){t===void 0&&(t=0);var e=C(r,"x","argMin");t==null&&(t=0);var n=He(t,e.shape),o=Bt(n,e.rank);return o!=null&&(e=e.transpose(o),n=Lt(n.length,e.rank)),T.runKernelFunc(function(a,i){var s=a.argMin(e,n[0]);return i([e]),s},{$x:e},function(a,i){var s=i[0];return{$x:function(){return ge(s)}}})}}),Qg=D({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","logSumExp"),o=He(t,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(e){var u=ft(s.shape,o);return s.reshape(u)}return s}}),$n=D({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","max"),o=n,a=He(t,n.shape),i=a,s=Bt(i,n.rank);s!=null&&(n=n.transpose(s),i=Lt(i.length,n.rank));var u=[n],c=T.runKernelFunc(function(f,p){var h=f.max(n,i);return p([o,h]),h},{x:n},function(f,p){return qf(f,p[1],p[0],a,s)},"Max",{axes:i},u,[!0]);if(e){var l=ft(c.shape,a);c=c.reshape(l)}return c}}),Jg=D({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","mean"),o=He(t,n.shape),a=ee(nt(n.shape,o)[1]);return Ma(function(i){var s=X(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(Tr(i.shape,"float32")).div(a)}}})(n)}}),Zg=D({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","min"),o=n,a=He(t,n.shape),i=a,s=Bt(i,n.rank);s!=null&&(n=n.transpose(s),i=Lt(i.length,n.rank));var u=[n],c=T.runKernelFunc(function(f,p){var h=f.min(n,i);return p([o,h]),h},{x:n},function(f,p){return qf(f,p[1],p[0],a,s)},"Min",{axes:i},u,[!0]);if(e){var l=ft(c.shape,a);c=c.reshape(l)}return c}}),ey=D({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=He(t,(r=C(r,"x","moments")).shape),o=r.mean(n,e),a=o.shape;e||(a=ft(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,e)}}}),jf=D({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=He(t,n.shape);return Ma(function(a){var i=Bt(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=Lt(s.length,a.rank));var c=function(h){var d=a.shape.slice();return o.forEach(function(m){d[m]=1}),h.reshape(d).mul(Tr(a.shape,"float32"))},l={axes:s},f=T.runKernelFunc(function(h){return h.sum(u,s)},{x:u},function(h){return{x:function(){return c(h)}}},"Sum",l);if(e){var p=ft(f.shape,o);f=f.reshape(p)}return{value:f,gradFunc:c}})(n)}}),ty=D({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=C(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=He(t,n.shape),a=Bt(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=Lt(i.length,n.rank));var u=T.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=ft(u.shape,o);u=u.reshape(c)}return u}}),Kf=D({elu_:function(r){var t=C(r,"x","elu");return T.runKernelFunc(function(e,n){var o=e.elu(t);return n([o]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return T.runKernelFunc(function(a){return a.eluDer(e,o)},{dy:e,y:o})}}})}}),ny=D({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=C(r,"x","leakyRelu");return Os(X(t).mul(e),e)}}),Xf=D({prelu_:function(r,t){var e=C(r,"x","prelu"),n=C(t,"alpha","prelu");return T.runKernelFunc(function(o,a){var i=o.prelu(e,n);return a([e,n]),i},{x:e,alpha:n},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return Kn(u,o,o.mul(s))},alpha:function(){var c=Kn(u,ge(o),o.mul(i)),l=Ge(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),we=D({relu_:function(r){var t=C(r,"x","relu");return t.dtype==="bool"?t.toInt():T.runKernelFunc(function(e,n){var o=e.relu(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),Yf=D({relu6_:function(r){var t=C(r,"x","relu6");return t.dtype==="bool"?t.toInt():T.runKernelFunc(function(e,n){var o=e.relu6(t);return n([t]),o},{x:t},function(e,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(a.toFloat())}}},"Relu6")}}),ry=D({selu_:function(r){var t=C(r,"x","selu");return T.runKernelFunc(function(e,n){var o=e.selu(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){var a=o.greater(X(0)),i=X(Fs),s=X(Ns),u=e.mul(s),c=e.mul(i).mul(o.toFloat().exp());return Kn(a,u,c)}}})}}),It=D({transpose_:function(r,t){var e=C(r,"x","transpose");if(t==null&&(t=e.shape.map(function(o,a){return a}).reverse()),E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){E(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var n={perm:t};return T.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var a=Aa(t);return{x:function(){return o.transpose(a)}}},"Transpose",n)}}),oy=D({localResponseNormalization_:function(r,t,e,n,o){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=C(r,"x","localResponseNormalization");E(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),E(Be(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=T.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(i,t,e,n,o);return l([i,f]),f},{x4D:i},function(c,l){var f=l[0],p=l[1];return{x4D:function(){return T.runKernelFunc(function(h){return h.LRNGrad(c,f,p,t,e,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),$f=D({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(X(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=C(r,"x","norm"),t,e),a=o.shape;if(n){var i=He(e,r.shape);a=ft(o.shape,i)}return o.reshape(a)}}),ay=D({basicLSTMCell_:function(r,t,e,n,o,a){var i=C(r,"forgetBias","basicLSTMCell"),s=C(t,"lstmKernel","basicLSTMCell"),u=C(e,"lstmBias","basicLSTMCell"),c=C(n,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),f=C(a,"h","basicLSTMCell"),p=c.concat(f,1).matMul(s).add(u),h=p.shape[0],d=p.shape[1]/4,m=[h,d],v=p.slice([0,0],m),g=p.slice([0,d],m),x=p.slice([0,2*d],m),b=p.slice([0,3*d],m),y=v.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(x).sigmoid())),w=y.tanh().mulStrict(b.sigmoid());return[y,w]}}),iy=D({multiRNNCell_:function(r,t,e,n){for(var o=C(t,"data","multiRNNCell"),a=ba(e,"c","multiRNNCell"),i=ba(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],p=[];for(c=0;c<u.length;c+=2)f.push(u[c]),p.push(u[c+1]);return[f,p]}}),sy=D({movingAverage_:function(r,t,e,n,o){o===void 0&&(o=!0);var a=C(r,"v","movingAverage"),i=C(t,"x","movingAverage"),s=C(e,"decay","movingAverage");tl(a,i),E(Ve(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=X(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){E(n!=null,function(){return"When using zeroDebias: true, step is required."});var f=C(n,"step","movingAverage");l=l.div(u.sub(Ra(s,f)))}return a.add(l)}}),uy=D({stridedSlice_:function(r,t,e,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=C(r,"x","stridedSlice"),l=rs(s),f=c.shape.slice();l.forEach(function(v){t[v]=0,e[v]=1,f.splice(v,0,1)}),c=c.reshape(f);for(var p=0;p<c.rank;p++)t[p]=Vl(o,t,n,c.shape,p),e[p]=Gl(a,e,n,c.shape,p),n[p]=n[p]||1;var h=rs(u);h.forEach(function(v){e[v]=t[v]+1,n[v]=1});var d=Pa(t,e,n),m=d.filter(function(v,g){return h.indexOf(g)===-1});return n.every(function(v){return v===1})?Mt(c,t,d).reshape(m):T.runKernelFunc(function(v){return v.stridedSlice(c,t,e,n)},{$x:c}).reshape(m)}}),cy=D({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=C(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var a=T.runKernelFunc(function(i){return i.topk(n,t,e)},{$x:n});return{values:a[0],indices:a[1]}}}),ly=D({scatterND_:function(r,t,e){var n=C(r,"indices","scatterND","int32"),o=C(t,"updates","scatterND");return zl(o,n,e),T.runKernelFunc(function(a){return a.scatterND(n,o,e)},{indices:n,updates:o},null,"ScatterNd",{shape:e})}}),zs=D({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return T.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),Ia=D({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return T.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),Us=D({rfft_:function(r,t){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,n=r.shape[r.shape.length-1],o=r.size/n;if(t!=null&&t<n){var a=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=t,e=r.slice(a,i),n=t}else if(t!=null&&t>n){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=t-n,e=r.concat(Ie(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=tt(e,u).as2D(o,n),l=zs(c),f=Math.floor(n/2)+1,p=St(l),h=Xt(l),d=p.split([f,n-f],p.shape.length-1),m=h.split([f,n-f],h.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=f,tt(d[0],m[0]).reshape(v)}}),Qf=D({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),o=Ia(n);return St(o)}var a=[e,2*(t-1)],i=St(r).as2D(e,t),s=Xt(r).as2D(e,t),u=i.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(X(-1)),l=i.concat(u,1),f=s.concat(c,1);return n=tt(l,f).as2D(a[0],a[1]),o=Ia(n),St(o)}}),fy=Object.freeze({fft:zs,ifft:Ia,rfft:Us,irfft:Qf}),py=D({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var o=C(r,"sparseIndices","sparseToDense","int32"),a=C(t,"sparseValues","sparseToDense"),i=C(n,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,p=s.rank>1?s.shape[1]:1;if(c.length!==p)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+p+".");var h=u.size;if(u.rank!==0&&(u.rank!==1||h!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,e,i),T.runKernelFunc(function(s){return s.sparseToDense(o,a,e,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),hy=D({gatherND_:function(r,t){var e=C(t,"indices","gatherND","int32"),n=C(r,"x","gatherND");return T.runKernelFunc(function(o){return o.gatherND(n,e)},{x:n,indices:e},null,"GatherNd")}}),dy=D({diag_:function(r){var t=C(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return T.runKernelFunc(function(n){return n.diag(t)},{$x:t}).reshape(e)}}),vy=D({dropout_:function(r,t,e,n){var o=C(r,"x","dropout");if(E(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),E(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof ke?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(Ve(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(o,e),i=1-t,s=Pl(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function Jf(r,t,e){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=t-e*Math.cos(i)}return Re(o,"float32")}var Vs=D({hannWindow_:function(r){return Jf(r,.5,.5)}}),Zf=D({hammingWindow_:function(r){return Jf(r,.54,.46)}}),Gs=D({frame_:function(r,t,e,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+t<=r.size;)i.push(Mt(r,a,t)),a+=e;if(n)for(;a<r.size;){var s=a+t-r.size,u=Te([Mt(r,a,t-s),kt([s],o)]);i.push(u),a+=e}return i.length===0?Yt([],[0,t]):Te(i).as2D(i.length,t)}}),ep=D({stft_:function(r,t,e,n,o){var a;o===void 0&&(o=Vs),n==null&&(a=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=Gs(r,t,e),s=Oe(i,o(t)),u=[],c=0;c<i.shape[0];c++)u.push(Us(s.slice([c,0],[1,t]),n));return Te(u)}}),my=Object.freeze({hannWindow:Vs,hammingWindow:Zf,frame:Gs,stft:ep}),ut,gy=function(r,t,e){return e===void 0&&(e=1),J(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f,p,h,d,m,v;return Z(this,function(g){switch(g.label){case 0:return n=C(r,"predictions","inTopK"),o=C(t,"targets","inTopK"),E(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),E(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),xe(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],E(e>0&&e<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+e}),[4,n.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],f=Sr("bool",c=u[0]),p=0;p<c;p++){for(h=p*l,d=i.subarray(h,h+l),m=[],v=0;v<d.length;v++)m.push({value:d[v],index:v});for(m.sort(function(x,b){return b.value-x.value}),f[p]=0,v=0;v<e;v++)if(m[v].index===s[p]){f[p]=1;break}}return r!==n&&n.dispose(),t!==o&&o.dispose(),[2,Ye(f,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(ut||(ut={}));var yy=D({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=ut.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","absoluteDifference"),a=C(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=C(e,"weights","absoluteDifference")),xe(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return hn(s,i,n)}}),hn=D({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=ut.SUM_BY_NONZERO_WEIGHTS);var n=C(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=C(t,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(e===ut.NONE)return a;if(e===ut.SUM)return a.sum();if(e===ut.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(X(i)):s}if(e===ut.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(X(n.size));var u=o.mul(Tr(n.shape)).notEqual(X(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+e)}}),xy=D({cosineDistance_:function(r,t,e,n,o){o===void 0&&(o=ut.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","cosineDistance"),i=C(t,"predictions","cosineDistance"),s=null;n!=null&&(s=C(n,"weights","cosineDistance")),xe(a.shape,i.shape,"Error in cosineDistance: ");var u=X(1).sub(a.mul(i).sum(e,!0));return hn(u,s,o)}}),by=D({hingeLoss_:function(r,t,e,n){n===void 0&&(n=ut.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","hingeLoss"),a=C(t,"predictions","hingeLoss"),i=null;e!=null&&(i=C(e,"weights","hingeLoss")),xe(o.shape,a.shape,"Error in hingeLoss: ");var s=X(1);o=X(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return hn(u,i,n)}}),wy=D({huberLoss_:function(r,t,e,n,o){n===void 0&&(n=1),o===void 0&&(o=ut.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","huberLoss"),i=C(t,"predictions","huberLoss"),s=null;e!=null&&(s=C(e,"weights","huberLoss")),xe(a.shape,i.shape,"Error in huberLoss: ");var u=X(n),c=i.sub(a).abs(),l=Pf(c,u),f=c.sub(l),p=X(.5).mul(l.square()).add(u.mul(f));return hn(p,s,o)}}),_y=D({logLoss_:function(r,t,e,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=ut.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"labels","logLoss"),i=C(t,"predictions","logLoss"),s=null;e!=null&&(s=C(e,"weights","logLoss")),xe(a.shape,i.shape,"Error in logLoss: ");var u=X(1),c=X(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return hn(l,s,o)}}),Cy=D({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=ut.SUM_BY_NONZERO_WEIGHTS);var o=C(r,"labels","meanSquaredError"),a=C(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=C(e,"weights","meanSquaredError")),xe(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return hn(s,i,n)}}),Ey=D({sigmoidCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=ut.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"multiClassLabels","sigmoidCrossEntropy"),i=C(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","sigmoidCrossEntropy")),xe(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=X(n),c=X(1),l=X(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var f=function(p,h){var d=C(p,"labels","sigmoidCrossEntropyWithLogits"),m=C(h,"logits","sigmoidCrossEntropyWithLogits");xe(d.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=m.relu(),g=m.mul(d),x=m.abs().neg().exp().log1p();return v.sub(g).add(x)}(a,i);return hn(f,s,o)}}),ky=D({softmaxCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=ut.SUM_BY_NONZERO_WEIGHTS);var a=C(r,"onehotLabels","softmaxCrossEntropy"),i=C(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","softmaxCrossEntropy")),xe(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=X(n),c=X(1),l=X(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var f=function(p,h,d){if(d===void 0&&(d=-1),d===-1&&(d=h.rank-1),d!==h.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+h.rank+" and dim was "+d);return Ma(function(m,v,g){var x=v.logSumExp([d],!0),b=v.toFloat().sub(x);return g([m,b]),{value:b.mul(m).neg().sum([d]),gradFunc:function(y,w){var _=w[0],I=w[1],R=ft(y.shape,[d]);return[y.reshape(R).mul(_.toFloat().sub(I.exp())),y.reshape(R).mul(I.exp().sub(_.toFloat()))]}}})(p,h)}(a,i);return hn(f,s,o)}}),Sy=Object.freeze({get Reduction(){return ut},absoluteDifference:yy,computeWeightedLoss:hn,cosineDistance:xy,hingeLoss:by,huberLoss:wy,logLoss:_y,meanSquaredError:Cy,sigmoidCrossEntropy:Ey,softmaxCrossEntropy:ky});function Rc(r,t){return t===void 0&&(t=!1),T.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],o=Nl(e),a=r.clone(),i=Yt([[1]],[1,1]),s=i.clone(),u=e>=n?n:e,c=function(f){var p,h=a,d=s,m=o;p=T.tidy(function(){var v=a.slice([f,f],[e-f,1]),g=v.norm(),x=a.slice([f,f],[1,1]),b=Yt([[-1]]).where(x.greater(0),Yt([[1]])),y=x.sub(b.mul(g)),w=v.div(y);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var _=b.matMul(y).div(g).neg(),I=a.slice([f,0],[e-f,n]),R=_.mul(s);if(f===0)a=I.sub(R.matMul(s.transpose().matMul(I)));else{var k=I.sub(R.matMul(s.transpose().matMul(I)));a=a.slice([0,0],[f,n]).concat(k,0)}var S=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=S.sub(S.matMul(s).matMul(R.transpose()));else{var F=S.sub(S.matMul(s).matMul(R.transpose()));o=o.slice([0,0],[e,f]).concat(F,1)}return[s,a,o]}),s=p[0],a=p[1],o=p[2],yt([h,d,m])},l=0;l<u;++l)c(l);return!t&&e>n&&(o=o.slice([0,0],[e,n]),a=a.slice([0,0],[n,n])),[o,a]})}var Ry=D({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=C(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),e<0&&(e=s);var u=wa(0,i,1,"int32").reshape([-1,1]),c=wa(0,s,1,"int32"),l=Se(u,c),f=Wa(l.lessEqual(X(+t,"int32")),l.greaterEqual(X(-e,"int32"))),p=Ie([i,s],n.dtype);return ot(_e(n.reshape([-1,i,s])).map(function(h){return Kn(f,h,p)})).reshape(o)}}),Iy=D({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],n=function(u){E(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)n(o)}else t=!0,r=xs(r,r.shape[0],0).map(function(u){return Ol(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(T.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var f=jf(a[l].mulStrict(c)).mul(a[l]);c=c.sub(f)}return c.div($f(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return t?ot(a,0):a}}),Dy=D({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return Rc(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=_e(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach(function(i){var s=Rc(i,t),u=s[0],c=s[1];o.push(u),a.push(c)}),[ot(o,0).reshape(r.shape),ot(a,0).reshape(r.shape)]}}),Ty=Object.freeze({bandPart:Ry,gramSchmidt:Iy,qr:Dy});function za(r,t,e,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return e=Math.min(e,i),E(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(t.rank===1,function(){return"scores must be a 1D tensor"}),E(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),E(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:e,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var Ay=D({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=C(r,"images","resizeBilinear");E(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,e)},{x:o},function(c,l){return{x:function(){return T.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Fy=D({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=C(r,"images","resizeNearestNeighbor");E(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),E(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return T.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Ny=D({nonMaxSuppression_:function(r,t,e,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=C(r,"boxes","nonMaxSuppression"),i=C(t,"scores","nonMaxSuppression"),s=za(a,i,e,n,o);e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:o};return T.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,e,n,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),Py=function(r,t,e,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),J(this,void 0,void 0,function(){var a,i,s,u,c,l,f;return Z(this,function(p){switch(p.label){case 0:return a=C(r,"boxes","nonMaxSuppressionAsync"),i=C(t,"scores","nonMaxSuppressionAsync"),s=za(a,i,e,n,o),e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=p.sent(),c=u[0],l=u[1],f=Is(c,l,e,n,o),a!==r&&a.dispose(),i!==t&&i.dispose(),[2,f]}})})},My=D({nonMaxSuppressionWithScore_:function(r,t,e,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=C(r,"boxes","nonMaxSuppression"),s=C(t,"scores","nonMaxSuppression"),u=za(i,s,e,n,o,a),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=T.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),Oy=function(r,t,e,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),J(this,void 0,void 0,function(){var i,s,u,c,l,f,p;return Z(this,function(h){switch(h.label){case 0:return i=C(r,"boxes","nonMaxSuppressionAsync"),s=C(t,"scores","nonMaxSuppressionAsync"),u=za(i,s,e,n,o,a),e=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=h.sent(),l=c[0],f=c[1],p=Ds(l,f,e,n,o,a),i!==r&&i.dispose(),s!==t&&s.dispose(),[2,p]}})})},By=D({cropAndResize_:function(r,t,e,n,o,a){var i=C(r,"image","cropAndResize"),s=C(t,"boxes","cropAndResize","float32"),u=C(e,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),E(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),E(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),T.runKernelFunc(function(l,f){return l.cropAndResize(i,s,u,n,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),Do=Object.freeze({resizeBilinear:Ay,resizeNearestNeighbor:Fy,nonMaxSuppression:Ny,nonMaxSuppressionAsync:Py,nonMaxSuppressionWithScore:My,nonMaxSuppressionWithScoreAsync:Oy,cropAndResize:By}),Hs=function(r,t){return!(r>0)||t==="linear"},qs=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},js=function(r,t){var e=t,n=Ge(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},Ks=function(r,t,e){if(t==="linear")return r;if(t==="relu")return we(r);if(t==="elu")return Kf(r);if(t==="relu6")return Yf(r);if(t==="prelu")return Xf(r,e);throw new Error("Unknown fused activation "+t+".")},Ly=D({fusedMatMul_:function(r){var t,e=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,f=r.preluActivationWeights;if(Hs(T.state.gradientDepth,l)===!1){var p=Ar(e,n,a,s);return u!=null&&(p=oe(p,u)),Ks(p,l,f)}var h=C(e,"a","fused matMul"),d=C(n,"b","fused matMul");t=Ae(h,d),h=t[0],d=t[1];var m=a?h.shape[h.rank-2]:h.shape[h.rank-1],v=s?d.shape[d.rank-1]:d.shape[d.rank-2],g=a?h.shape[h.rank-1]:h.shape[h.rank-2],x=s?d.shape[d.rank-2]:d.shape[d.rank-1],b=h.shape.slice(0,-2),y=d.shape.slice(0,-2),w=ee(b),_=ee(y);E(h.rank>=2&&d.rank>=2&&h.rank===d.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+h.rank+" and "+d.rank+"."}),E(Ve(b,y),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+y+") of Tensors with shapes "+h.shape+" and "+d.shape+" must match."}),E(m===v,function(){return"Error in fused matMul: inner shapes ("+m+") and ("+v+") of Tensors with shapes "+h.shape+" and "+d.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var I,R,k=h.shape.slice(0,-2).concat([g,x]),S=a?h.as3D(w,m,g):h.as3D(w,g,m),F=s?d.as3D(_,x,v):d.as3D(_,v,x);u!=null&&fe(k,(I=Ae(I=C(u,"bias","fused matMul"),h)[0]).shape),f!=null&&(R=C(f,"prelu weights","fused matMul"));var A={a:S,b:F};u!=null&&(A.bias=I),f!=null&&(A.preluActivationWeights=R);var L=[S,F];return T.runKernelFunc(function(O,B){var U=O.fusedBatchMatMul({a:S,b:F,transposeA:a,transposeB:s,bias:I,activation:l,preluActivationWeights:R});return B([S,F,U]),U},A,function(O,B){var U=B[0],z=B[1],W=B[2],H=qs(O,W,l),q={};return u!=null&&(q={bias:function(){return js(I,H)}}),Object.assign(a||s?!a&&s?{a:function(){return H.matMul(z,!1,!1)},b:function(){return H.matMul(U,!0,!1)}}:a&&!s?{a:function(){return z.matMul(H,!1,!0)},b:function(){return U.matMul(H,!1,!1)}}:{a:function(){return z.matMul(H,!0,!0)},b:function(){return H.matMul(U,!0,!0)}}:{a:function(){return H.matMul(z,!1,!0)},b:function(){return U.matMul(H,!0,!1)}},q)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},L,[!0]).reshape(k)}}),Wy=D({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,p=f===void 0?"linear":f,h=r.preluActivationWeights;if(p=p||"linear",Hs(T.state.gradientDepth,p)===!1){var d=$e(t,e,n,o,i,u,c);return l!=null&&(d=oe(d,l)),Ks(d,p,h)}var m=C(t,"x","conv2d"),v=C(e,"filter","conv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&E(Be(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),E(pt(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,y,w=Dn(g.shape,v.shape,n,u,o,c);l!=null&&(b=Ae(b=C(l,"bias","fused conv2d"),m)[0],fe(w.outShape,b.shape)),h!=null&&(y=C(h,"prelu weights","fused conv2d"));var _={x:g,filter:v};l!=null&&(_.bias=b),h!=null&&(_.preluActivationWeights=y);var I=[v,g],R=T.runKernelFunc(function(k,S){var F=k.fusedConv2d({input:g,filter:v,convInfo:w,bias:b,activation:p,preluActivationWeights:y});return S([v,g,F]),F},_,function(k,S){var F=S,A=F[0],L=F[1],O=F[2],B=qs(k,O,p);E(jn(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var U={};return l!=null&&(U={bias:function(){return js(b,B)}}),Object.assign({x:function(){return zf(L.shape,B,A,n,o)},filter:function(){return Ls(L,B,A.shape,n,o)}},U)},"FusedConv2D",{convInfo:w,activation:p},I,[!0]);return x?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}}),zy=D({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,f=r.activation,p=f===void 0?"linear":f,h=r.preluActivationWeights;if(Hs(T.state.gradientDepth,p)===!1){var d=So(t,e,n,o,i,u,c);return l!=null&&(d=oe(d,l)),Ks(d,p,h)}var m=C(t,"x","depthwiseConv2d"),v=C(e,"filter","depthwiseConv2d"),g=m,x=!1;m.rank===3&&(x=!0,g=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),E(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),E(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),E(g.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),E(pt(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&E(Be(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,y,w=Dn(g.shape,v.shape,n,u,o,c,!0);l!=null&&(b=Ae(b=C(l,"bias","fused conv2d"),m)[0],fe(w.outShape,b.shape)),h!=null&&(y=C(h,"prelu weights","fused depthwiseConv2d"));var _={x:g,filter:v};l!=null&&(_.bias=b),h!=null&&(_.preluActivationWeights=y);var I=[v,g],R=T.runKernelFunc(function(k,S){var F=k.fusedDepthwiseConv2D({input:g,filter:v,convInfo:w,bias:b,activation:p,preluActivationWeights:y});return S([v,g,F]),F},_,function(k,S){E(jn(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var F=S[0],A=S[1],L=S[2],O=qs(k,L,p),B={};return l!=null&&(B={bias:function(){return js(b,O)}}),Object.assign({x:function(){return Uf(A.shape,O,F,w)},filter:function(){return Vf(A,O,F.shape,w)}},B)},"FusedDepthwiseConv2D",{convInfo:w,activation:p},I,[!0]);return x?R.as3D(R.shape[1],R.shape[2],R.shape[3]):R}}),Uy=Object.freeze({matMul:Ly,conv2d:Wy,depthwiseConv2d:zy}),Vy=Object.freeze({image:Do,linalg:Ty,losses:Sy,spectral:fy,fused:Uy,signal:my,square:_m,squaredDifference:Sf,conv1d:Ag,conv2d:$e,conv3d:Fg,depthwiseConv2d:So,separableConv2d:Ro,conv2dTranspose:Ng,conv3dTranspose:Pg,op:D,batchNormalization2d:Jm,batchNormalization3d:Zm,batchNormalization4d:eg,batchNormalization:tg,batchNorm:Ms,batchNorm2d:ng,batchNorm3d:rg,batchNorm4d:og,booleanMaskAsync:Tg,complex:tt,real:St,imag:Xt,concat:Te,concat1d:cd,concat2d:ld,concat3d:fd,concat4d:pd,split:xs,matMul:Ar,dot:Mg,outerProduct:Og,reverse:Io,reverse1d:Bg,reverse2d:Lg,reverse3d:Wg,reverse4d:zg,maxPool:Le,avgPool:pn,pool:Ug,maxPool3d:Vg,avgPool3d:Gg,slice:Mt,slice1d:Hg,slice2d:qg,slice3d:Ws,slice4d:jg,abs:Cm,acos:Em,acosh:km,asin:Sm,asinh:Rm,atan:Im,atanh:Dm,ceil:Tm,clipByValue:Co,cos:Am,cosh:Fm,erf:Nm,exp:Ba,expm1:Pm,floor:Mm,log:Om,log1p:Bm,logSigmoid:Lm,neg:Eo,reciprocal:Wm,round:zm,rsqrt:Rf,sigmoid:Ps,sign:Um,isNaN:Vm,isInf:Gm,isFinite:Hm,sin:qm,sinh:jm,softplus:Km,sqrt:Xm,step:Ym,tan:$m,tanh:Qm,all:Kg,any:Xg,argMax:Yg,argMin:$g,logSumExp:Qg,max:$n,mean:Jg,min:Zg,moments:ey,sum:jf,prod:ty,equal:Mf,equalStrict:bg,greater:wg,greaterEqual:Of,greaterEqualStrict:_g,greaterStrict:Cg,less:Eg,lessEqual:kg,lessEqualStrict:Sg,lessStrict:Rg,notEqual:Ig,notEqualStrict:Dg,add:oe,addN:sg,addStrict:ug,atan2:cg,div:Rt,divNoNan:lg,divStrict:fg,floorDiv:Nf,maximum:Os,maximumStrict:pg,minimum:Pf,minimumStrict:hg,mod:dg,modStrict:vg,mul:Oe,mulStrict:mg,pow:Ra,powStrict:gg,squaredDifferenceStrict:yg,sub:Se,subStrict:xg,elu:Kf,leakyRelu:ny,prelu:Xf,relu:we,relu6:Yf,selu:ry,logicalAnd:Wa,logicalNot:ag,logicalOr:Af,logicalXor:ig,where:Kn,whereAsync:Ff,buffer:ie,print:wd,batchToSpaceND:Fl,broadcastTo:_d,cast:Cd,clone:Ed,cumsum:kd,depthToSpace:Sd,expandDims:it,eye:Nl,multinomial:Rd,oneHot:ns,pad:fn,pad1d:Id,pad2d:Dd,pad3d:Td,pad4d:Ad,rand:Fd,randomNormal:Nd,randomGamma:Pd,randomUniform:Pl,reshape:ht,spaceToBatchND:Ml,squeeze:Ol,stack:ot,tile:Gn,truncatedNormal:Md,unstack:_e,setdiff1dAsync:Od,fill:kt,linspace:ud,ones:Tr,range:wa,scalar:X,tensor:Ye,tensor1d:Re,tensor2d:Yt,tensor3d:Fa,tensor4d:je,tensor5d:ad,tensor6d:id,variable:sd,zeros:Ie,onesLike:Al,zerosLike:ge,transpose:It,softmax:dt,logSoftmax:Ld,localResponseNormalization:oy,norm:$f,gather:Bs,unsortedSegmentSum:Bf,basicLSTMCell:ay,multiRNNCell:iy,movingAverage:sy,stridedSlice:uy,topk:cy,scatterND:ly,fft:zs,ifft:Ia,rfft:Us,irfft:Qf,sparseToDense:py,gatherND:hy,diag:dy,dropout:vy,hannWindow:Vs,hammingWindow:Zf,frame:Gs,stft:ep,inTopKAsync:gy});function V(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&E(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function Pi(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var Gy=function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new Hl(e,T),e}return Ot(t,r),t.prototype.write=function(e,n,o){this.firstUse&&(this.firstUse=!1,M().get("IS_NODE")&&xa(`
============================
Hi there \u{1F44B}. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:e,dtype:o}),a},t.prototype.move=function(e,n,o,a){this.data.set(e,{values:n,dtype:a})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return J(this,void 0,void 0,function(){return Z(this,function(n){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var n=this.data.get(e),o=n.dtype,a=n.complexTensors;return o==="complex64"?as(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),o=n;if(e.dtype==="string")try{o=n.map(function(a){return fo(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ie(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,n,o){var a=this.write(e,n,o);return T.makeTensorFromDataId(a,n,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return J(this,void 0,void 0,function(){var n;return Z(this,function(o){return n=Nt(),e(),[2,{kernelMs:Nt()-n}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(n.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(V(e,"slice"),Cs(e.shape,n,o)){var a=Es(n,e.strides),i=ee(o);return Ye(this.readSync(e.dataId).subarray(a,a+i),o,e.dtype)}for(var s=ie(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,p){return f+n[p]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,o,a){V(e,"stridedSlice");var i=Pa(n,o,a);if(i.some(function(h){return h===0}))return Ye([],i);for(var s=ie(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),p=0;p<f.length;p++)f[p]=l[p]*a[p]+n[p];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),o=ie([e.size,e.size],e.dtype),a=o.values,i=0;i<n.length;i++)a[i*e.size+i]=n[i];return o.toTensor()},t.prototype.unstack=function(e,n){for(var o=e.shape[n],a=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(a[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(a);return l},t.prototype.reverse=function(e,n){V(e,"reverse");for(var o=ie(e.shape,e.dtype),a=this.bufferSync(e),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},t.prototype.concat=function(e,n){var o=this;if(e[0].dtype==="complex64"){var a=e.map(function(h){return St(h)}),i=e.map(function(h){return Xt(h)});return tt(this.concat(a,n),this.concat(i,n))}var s=e.map(function(h){var d=ee(h.shape.slice(n));return h.as2D(-1,d)}),u=qn(s.map(function(h){return h.shape}),1),c=ie(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(h){c.set(o.readSync(h.dataId),l),l+=h.size})}else{var f=0;s.forEach(function(h){for(var d=o.readSync(h.dataId),m=0,v=0;v<h.shape[0];++v)for(var g=v*u[1]+f,x=0;x<h.shape[1];++x)c[g+x]=d[m++];f+=h.shape[1]})}var p=qn(e.map(function(h){return h.shape}),n);return Ye(c,p,e[0].dtype)},t.prototype.neg=function(e){return V(e,"neg"),this.multiply(X(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(e,n,Xe(e.dtype,n.dtype),function(o,a){return o+a})},t.prototype.addN=function(e){var n=this;V(e,"addN");for(var o=e.map(function(l){return n.readSync(l.dataId)}),a=ie(e[0].shape,e[0].dtype),i=a.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},t.prototype.softmax=function(e,n){var o=He([n],e.shape),a=this.max(e,o),i=ft(a.shape,o),s=this.subtract(e,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(e,n,Xe(e.dtype,n.dtype),function(o,a){return o-a})},t.prototype.pow=function(e,n){return V([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.pow(o,a)})},t.prototype.batchMatMul=function(e,n,o,a){V([e,n],"matMul");for(var i=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=a?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(n.dataId),p=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],h=p[0],d=p[1],m=p[2],v=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],g=v[0],x=v[1],b=v[2],y=s*u,w=ie([c,s,u],e.dtype),_=w.values,I=this.blockSize,R=0;R<c;R++)for(var k=0;k<s;k+=I)for(var S=0;S<u;S+=I)for(var F=0;F<i;F+=I)for(var A=Math.min(k+I,s),L=Math.min(S+I,u),O=Math.min(F+I,i),B=k;B<A;B++)for(var U=S;U<L;U++){for(var z=0,W=F;W<O;W++)z+=l[R*h+B*d+W*m]*f[W*g+U*x+R*b];_[R*y+(B*u+U)]+=z}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,a=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=Pi(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(e,n,Xe(e.dtype,n.dtype),function(o,a){return o*a})},t.prototype.realDivide=function(e,n){return V([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",function(o,a){return o/a})},t.prototype.floorDiv=function(e,n){return V([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",function(o,a){return Math.floor(o/a)})},t.prototype.sum=function(e,n){V(e,"sum"),mt("sum",n,e.rank);for(var o=nt(e.shape,n),a=o[0],i=o[1],s=Ie(a,Xe(e.dtype,"int32")),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=0,d=0;d<u;++d)h+=l[p+d];c[f]=h}return s},t.prototype.prod=function(e,n){V(e,"sum");for(var o=nt(e.shape,n),a=o[0],i=o[1],s=Ie(a,Xe(e.dtype,"int32")),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=1,d=0;d<u;++d)h*=l[p+d];c[f]=h}return s},t.prototype.unsortedSegmentSum=function(e,n,o){V(e,"unsortedSegmentSum");for(var a=[],i=e.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=X(s,"int32"),c=Mf(u,n).asType("float32").mul(e).sum(0);a.push(c)}return ot(a)},t.prototype.argMin=function(e,n){V(e,"argMin");var o=[n];mt("argMin",o,e.rank);for(var a=nt(e.shape,o),i=a[0],s=a[1],u=Ie(i,"int32"),c=ee(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),p=0;p<l.length;++p){for(var h=p*c,d=f[h],m=0,v=0;v<c;++v){var g=f[h+v];g<d&&(d=g,m=v)}l[p]=m}return u},t.prototype.argMax=function(e,n){V(e,"argMax");var o=[n];mt("argMax",o,e.rank);for(var a=nt(e.shape,o),i=a[0],s=a[1],u=Ie(i,"int32"),c=ee(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),p=0;p<l.length;++p){for(var h=p*c,d=f[h],m=0,v=0;v<c;++v){var g=f[h+v];g>d&&(d=g,m=v)}l[p]=m}return u},t.prototype.cumsum=function(e,n,o,a){if(V(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var i=Xe(e.dtype,"int32"),s=Ie(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=a?function(v,g){return v+l-g-1}:function(v,g){return v+g},p=0;p<c.length;p+=l)for(var h=0;h<l;h++){var d=f(p,h);if(h===0)u[d]=o?0:c[d];else{var m=f(p,h-1);u[d]=o?c[m]+u[m]:c[d]+u[m]}}return s},t.prototype.equal=function(e,n){return V([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o===a?1:0})},t.prototype.notEqual=function(e,n){return V([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o!==a?1:0})},t.prototype.less=function(e,n){return V([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<a?1:0})},t.prototype.lessEqual=function(e,n){return V([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o<=a?1:0})},t.prototype.greater=function(e,n){return V([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>a?1:0})},t.prototype.greaterEqual=function(e,n){return V([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o>=a?1:0})},t.prototype.logicalNot=function(e){V(e,"logicalNot");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return V([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o&&a})},t.prototype.logicalOr=function(e,n){return V([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",function(o,a){return o||a})},t.prototype.select=function(e,n,o){V([e,n,o],"select");for(var a=this.readSync(e.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=Ie(n.shape,Xe(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||n.rank===1?1:ee(n.shape.slice(1)),p=0;p<a.length;p++)for(var h=0;h<f;h++)a[p]===1?c[l++]=i[p]:c[l++]=s[p];return u},t.prototype.where=function(e){V([e],"where");var n=this.readSync(e.dataId);return Ts(e.shape,n)},t.prototype.topk=function(e,n,o){return V(e,"topk"),Yl(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){V(e,"min"),mt("min",n,e.rank);for(var o=nt(e.shape,n),a=o[0],i=o[1],s=Ie(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=l[p],d=0;d<u;++d){var m=l[p+d];m<h&&(h=m)}c[f]=h}return s},t.prototype.minimum=function(e,n){return V([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.min(o,a)})},t.prototype.mod=function(e,n){return V([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},t.prototype.max=function(e,n){V(e,"max"),mt("max",n,e.rank);for(var o=nt(e.shape,n),a=o[0],i=o[1],s=Ie(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=l[p],d=0;d<u;++d){var m=l[p+d];m>h&&(h=m)}c[f]=h}return s},t.prototype.maximum=function(e,n){return V([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.max(o,a)})},t.prototype.all=function(e,n){V(e,"all"),mt("all",n,e.rank);for(var o=nt(e.shape,n),a=o[0],i=o[1],s=Ie(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=l[p],d=0;d<u;++d){var m=l[p+d];h=h&&m}c[f]=h}return s},t.prototype.any=function(e,n){V(e,"any"),mt("any",n,e.rank);for(var o=nt(e.shape,n),a=o[0],i=o[1],s=Ie(a,e.dtype),u=ee(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var p=f*u,h=l[p],d=0;d<u;++d){var m=l[p+d];h=h||m}c[f]=h}return s},t.prototype.squaredDifference=function(e,n){return V([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){var i=o-a;return i*i})},t.prototype.ceil=function(e){V(e,"ceil");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){V(e,"floor");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){V(e,"x");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){V(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){V(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){V(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){V(e,"round");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){V(e,"exp");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){V(e,"expm1");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){V(e,"log");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){V(e,"log1p");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){V(e,"sqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){V(e,"rsqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){V(e,"reciprocal");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){V(e,"relu");for(var n=Ie(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},t.prototype.relu6=function(e){V(e,"relu");for(var n=Ie(e.shape,e.dtype),o=this.readSync(n.dataId),a=this.readSync(e.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},t.prototype.prelu=function(e,n){return V([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return o<0?a*o:o})},t.prototype.elu=function(e){V(e,"elu");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){V([e,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},t.prototype.selu=function(e){V(e,"selu");for(var n=Fs,o=Ns,a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,e.shape,"float32")},t.prototype.clip=function(e,n,o){V(e,"clip");for(var a=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<e.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){V(e,"int");for(var n=new Int32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){V(e,"sigmoid");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){V(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){V(e,"sin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){V(e,"cos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){V(e,"tan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){V(e,"asin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){V(e,"acos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){V(e,"atan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return V([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,a){return Math.atan2(o,a)})},t.prototype.sinh=function(e){V(e,"sinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){V(e,"cosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){V(e,"tanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Gc(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){V(e,"asinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){V(e,"acosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){V(e,"atanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){V(e,"erf");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),V(e,"step");for(var o=new Float32Array(e.size),a=this.readSync(e.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Pi(this,c,s,u)),c},t.prototype.conv2d=function(e,n,o){V([e,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",p=ie(o.outShape,e.dtype),h=e.strides[0],d=f?e.strides[1]:e.strides[2],m=f?e.strides[2]:1,v=f?1:e.strides[1],g=p.strides[0],x=f?p.strides[1]:p.strides[2],b=f?p.strides[2]:1,y=f?1:p.strides[1],w=this.readSync(e.dataId),_=this.readSync(n.dataId),I=p.values,R=0;R<o.batchSize;++R)for(var k=R*h,S=R*g,F=0;F<o.outHeight;++F)for(var A=S+F*x,L=F*o.strideHeight-l,O=0;O<a;O++){var B=L+O*s;if(!(B<0||B>=o.inHeight))for(var U=O*n.strides[0],z=k+B*d,W=0;W<o.outWidth;++W)for(var H=A+W*b,q=W*o.strideWidth-c,$=0;$<i;$++){var te=q+$*u;if(!(te<0||te>=o.inWidth))for(var re=z+te*m,ce=U+$*n.strides[1],le=0;le<o.inChannels;++le){for(var pe=w[re+le*v],ve=0;ve<o.outChannels;++ve)I[H+ve*y]+=pe*_[ce+ve];ce+=o.outChannels}}}return p.toTensor()},t.prototype.conv3d=function(e,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,p=o.padInfo.left,h=o.padInfo.top,d=ie(o.outShape,e.dtype),m=this.readSync(e.dataId),v=this.readSync(n.dataId),g=d.values,x=0;x<o.batchSize;++x)for(var b=x*e.strides[0],y=x*d.strides[0],w=0;w<o.outDepth;++w)for(var _=y+w*d.strides[1],I=w*o.strideDepth-f,R=0;R<a;R++){var k=I+R*u;if(!(k<0||k>=o.inDepth))for(var S=R*n.strides[0],F=b+k*e.strides[1],A=0;A<o.outHeight;++A)for(var L=_+A*d.strides[2],O=A*o.strideHeight-h,B=0;B<i;B++){var U=O+B*c;if(!(U<0||U>=o.inHeight))for(var z=S+B*n.strides[1],W=F+U*e.strides[2],H=0;H<o.outWidth;++H)for(var q=L+H*o.outChannels,$=H*o.strideWidth-p,te=0;te<s;te++){var re=$+te*l;if(!(re<0||re>=o.inWidth))for(var ce=z+te*n.strides[2],le=W+re*o.inChannels,pe=ce,ve=0;ve<o.inChannels;++ve){for(var he=m[le+ve],me=0;me<o.outChannels;++me)g[q+me]+=he*v[pe+me];pe+=o.outChannels}}}}return d.toTensor()},t.prototype.conv2dDerInput=function(e,n,o){V([e,n],"conv2dDerInput");for(var a=ie(o.inShape,"float32"),i=a.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],f=c[1],p=c[2],h=o.batchSize,d=o.filterHeight,m=o.filterWidth,v=o.inChannels,g=o.inHeight,x=o.inWidth,b=o.outChannels,y=o.outHeight,w=o.outWidth,_=o.strideHeight,I=o.strideWidth,R=o.dataFormat,k=d-1-o.padInfo.top,S=m-1-o.padInfo.left,F=R==="channelsLast",A=a.strides[0],L=F?a.strides[1]:a.strides[2],O=F?a.strides[2]:1,B=F?1:a.strides[1],U=e.strides[0],z=F?e.strides[1]:e.strides[2],W=F?e.strides[2]:1,H=F?1:e.strides[1],q=0;q<h;++q)for(var $=0;$<v;++$)for(var te=0;te<g;++te)for(var re=te-k,ce=Math.max(0,Math.ceil(re/_)),le=Math.min(y,(d+re)/_),pe=0;pe<x;++pe){for(var ve=pe-S,he=Math.max(0,Math.ceil(ve/I)),me=Math.min(w,(m+ve)/I),Ue=0,de=ce;de<le;++de)for(var Ee=de*_-re,ye=he;ye<me;++ye)for(var We=U*q+z*de+W*ye,Pe=l*(d-1-Ee)+f*(m-1-(ye*I-ve))+p*$,Me=0;Me<b;++Me)Ue+=s[We+H*Me]*u[Pe+Me];i[A*q+L*te+O*pe+B*$]=Ue}return a.toTensor()},t.prototype.conv3dDerInput=function(e,n,o){for(var a=ie(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=s[3],p=this.readSync(e.dataId),h=e.strides,d=h[0],m=h[1],v=h[2],g=h[3],x=this.readSync(n.dataId),b=n.strides,y=b[0],w=b[1],_=b[2],I=b[3],R=o.batchSize,k=o.filterDepth,S=o.filterHeight,F=o.filterWidth,A=o.inChannels,L=o.inDepth,O=o.inHeight,B=o.inWidth,U=o.outChannels,z=o.outDepth,W=o.outHeight,H=o.outWidth,q=o.strideDepth,$=o.strideHeight,te=o.strideWidth,re=k-1-o.padInfo.front,ce=S-1-o.padInfo.top,le=F-1-o.padInfo.left,pe=0;pe<R;++pe)for(var ve=0;ve<A;++ve)for(var he=0;he<L;++he)for(var me=he-re,Ue=Math.max(0,Math.ceil(me/q)),de=Math.min(z,(k+me)/q),Ee=0;Ee<O;++Ee)for(var ye=Ee-ce,We=Math.max(0,Math.ceil(ye/$)),Pe=Math.min(W,(S+ye)/$),Me=0;Me<B;++Me){for(var Vt=Me-le,Gt=Math.max(0,Math.ceil(Vt/te)),bt=Math.min(H,(F+Vt)/te),ur=0,tn=Ue;tn<de;++tn)for(var _n=tn*q-me,nn=We;nn<Pe;++nn)for(var cr=nn*$-ye,rn=Gt;rn<bt;++rn)for(var pi=d*pe+m*tn+v*nn+g*rn,lr=y*(k-1-_n)+w*(S-1-cr)+_*(F-1-(rn*te-Vt))+I*ve,Ht=0;Ht<U;++Ht)ur+=p[pi+Ht]*x[lr+Ht];i[u*pe+c*he+l*Ee+f*Me+ve]=ur}return a.toTensor()},t.prototype.conv2dDerFilter=function(e,n,o){V([e,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=ie(o.filterShape,"float32"),f=o.padInfo.left,p=o.padInfo.top,h=this.bufferSync(e),d=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((p-m)/a)),g=Math.min(o.outHeight,(o.inHeight+p-m)/a),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((f-x)/i)),y=Math.min(o.outWidth,(o.inWidth+f-x)/i),w=0;w<o.inChannels;++w)for(var _=0;_<o.outChannels;++_){for(var I=0,R=0;R<o.batchSize;++R)for(var k=v;k<g;++k)for(var S=m+k*a-p,F=b;F<y;++F){var A=x+F*i-f;I+=c?h.get(R,S,A,w)*d.get(R,k,F,_):h.get(R,w,S,A)*d.get(R,_,k,F)}l.set(I,m,x,w,_)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=ie(o.filterShape,"float32"),p=f.values,h=f.strides,d=h[0],m=h[1],v=h[2],g=h[3],x=this.readSync(n.dataId),b=n.strides,y=b[0],w=b[1],_=b[2],I=b[3],R=this.readSync(e.dataId),k=e.strides,S=k[0],F=k[1],A=k[2],L=k[3],O=o.padInfo.front,B=o.padInfo.left,U=o.padInfo.top,z=0;z<u;++z)for(var W=Math.max(0,Math.ceil((O-z)/a)),H=Math.min(o.outDepth,(o.inDepth+O-z)/a),q=z*d,$=0;$<c;++$)for(var te=Math.max(0,Math.ceil((U-$)/i)),re=Math.min(o.outHeight,(o.inHeight+U-$)/i),ce=$*m+q,le=0;le<l;++le)for(var pe=Math.max(0,Math.ceil((B-le)/s)),ve=Math.min(o.outWidth,(o.inWidth+B-le)/s),he=le*v+ce,me=0;me<o.inChannels;++me)for(var Ue=me*g+he,de=0;de<o.outChannels;++de){for(var Ee=0,ye=0;ye<o.batchSize;++ye)for(var We=ye*S,Pe=ye*y,Me=W;Me<H;++Me)for(var Vt=(z+Me*a-O)*F+We,Gt=Me*w+Pe,bt=te;bt<re;++bt)for(var ur=($+bt*i-U)*A+Vt,tn=bt*_+Gt,_n=pe;_n<ve;++_n){var nn=_n*I+tn;Ee+=R[(le+_n*s-B)*L+ur+me]*x[nn+de]}p[Ue+de]=Ee}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,o=e.filter,a=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Pi(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,o){V([e,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,p=ie(o.outShape,e.dtype),h=this.readSync(e.dataId),d=this.readSync(n.dataId),m=p.values,v=0;v<o.batchSize;++v)for(var g=v*e.strides[0],x=v*p.strides[0],b=0;b<o.outHeight;++b)for(var y=x+b*p.strides[1],w=b*o.strideHeight-c,_=0;_<a;++_){var I=w+_*s;if(!(I<0||I>=o.inHeight))for(var R=_*n.strides[0],k=g+I*e.strides[1],S=0;S<o.outWidth;++S)for(var F=y+S*p.strides[2],A=S*o.strideWidth-l,L=0;L<i;++L){var O=A+L*u;if(!(O<0||O>=o.inWidth))for(var B=R+L*n.strides[1],U=k+O*o.inChannels,z=F,W=B,H=0;H<o.inChannels;++H){for(var q=h[U+H],$=0;$<f;++$)m[z+$]+=q*d[W+$];z+=f,W+=f}}}return p.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,o){V([e,n],"depthwiseConv2DDerInput");for(var a=ie(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),p=e.strides,h=p[0],d=p[1],m=p[2],v=this.readSync(n.dataId),g=n.strides,x=g[0],b=g[1],y=g[2],w=o.batchSize,_=o.filterHeight,I=o.filterWidth,R=o.inChannels,k=o.inHeight,S=o.inWidth,F=o.outChannels,A=o.outHeight,L=o.outWidth,O=o.strideHeight,B=o.strideWidth,U=_-1-o.padInfo.top,z=I-1-o.padInfo.left,W=F/R,H=0;H<w;++H)for(var q=0;q<R;++q)for(var $=0;$<k;++$)for(var te=$-U,re=Math.max(0,Math.ceil(te/O)),ce=Math.min(A,(_+te)/O),le=0;le<S;++le){for(var pe=le-z,ve=Math.max(0,Math.ceil(pe/B)),he=Math.min(L,(I+pe)/B),me=0,Ue=re;Ue<ce;++Ue)for(var de=Ue*O-te,Ee=ve;Ee<he;++Ee)for(var ye=h*H+d*Ue+m*Ee,We=x*(_-1-de)+b*(I-1-(Ee*B-pe))+y*q,Pe=0;Pe<W;++Pe)me+=f[ye+(q*W+Pe)]*v[We+Pe];i[u*H+c*$+l*le+q]=me}return a.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){V([e,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=ie(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,p=o.outChannels/o.inChannels,h=this.bufferSync(e),d=this.bufferSync(n),m=0;m<s;++m)for(var v=Math.max(0,Math.ceil((f-m)/a)),g=Math.min(o.outHeight,(o.inHeight+f-m)/a),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((l-x)/i)),y=Math.min(o.outWidth,(o.inWidth+l-x)/i),w=0;w<o.outChannels;++w){for(var _=Math.trunc(w/p),I=w%p,R=0,k=0;k<o.batchSize;++k)for(var S=v;S<g;++S)for(var F=m+S*a-f,A=b;A<y;++A){var L=x+A*i-l;R+=h.get(k,F,L,_)*d.get(k,S,A,w)}c.set(R,m,x,_,I)}return c.toTensor()},t.prototype.tile=function(e,n){return V(e,"tile"),Xl(this.bufferSync(e),n)},t.prototype.pad=function(e,n,o){V(e,"pad");var a=n.map(function(p,h){return p[0]+e.shape[h]+p[1]}),i=n.map(function(p){return p[0]}),s=this.bufferSync(e),u=ie(a,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(p,h){return p+i[h]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},t.prototype.transpose=function(e,n){V(e,"transpose");for(var o=new Array(e.rank),a=0;a<o.length;a++)o[a]=e.shape[n[a]];var i=this.readSync(e.dataId),s=ie(o,e.dtype),u=this.bufferSync(e);for(a=0;a<e.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[n[f]];var p=s.locToIndex(l);s.values[p]=i[a]}return s.toTensor()},t.prototype.gather=function(e,n,o){V([e,n],"gather");var a=e.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=ie(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=i[l[o]];var p=u.locToIndex(f);s.values[c]=u.values[p]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,o){V([e],"batchToSpaceND");var a=n.reduce(function(f,p){return f*p}),i=_a(e.shape,n,a),s=Ca(i.length,n.length),u=Ea(e.shape,n,a),c=Bl(o,n.length),l=Ll(u,o,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){V([e],"spaceToBatchND");var a=n.reduce(function(p,h){return p*h}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=_a(u.shape,n,a,!1),l=Ca(c.length,n.length,!1),f=Ea(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.pool=function(e,n,o){V(e,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,p=n.padInfo.left,h=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,d=this.readSync(e.dataId),m=ie(n.outShape,e.dtype),v=m.values,g=n.outShape[1]*n.outShape[2]*n.outShape[3],x=n.outShape[2]*n.outShape[3],b=n.outShape[3],y=0;y<n.batchSize;++y)for(var w=y*g,_=y*e.strides[0],I=0;I<n.inChannels;++I)for(var R=0;R<n.outHeight;++R)for(var k=R*a-f,S=Math.max(0,k),F=Math.min(n.inHeight,c+k),A=w+R*x,L=0;L<n.outWidth;++L){for(var O=L*i-p,B=Math.max(0,O),U=Math.min(n.inWidth,l+O),z=h,W=0,H=0,q=S;q<F;q+=s){for(var $=_+q*e.strides[1],te=B;te<U;te+=u){var re=d[$+te*e.strides[2]+I];o==="max"&&re>z?z=re:o==="avg"&&(W+=re,H++)}if(isNaN(z))break}v[A+L*b+I]=o==="avg"?W/H:z}return m.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var o=ie(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,f=n.padInfo.top,p=n.padInfo.left,h=this.bufferSync(e),d=0;d<n.batchSize;++d)for(var m=0;m<n.inChannels;++m)for(var v=0;v<n.outHeight;++v){for(var g=v*a-f,x=g;x<0;)x+=s;for(var b=Math.min(n.inHeight,c+g),y=0;y<n.outWidth;++y){for(var w=y*i-p,_=w;_<0;)_+=u;for(var I=Math.min(n.inWidth,l+w),R=Number.NEGATIVE_INFINITY,k=-1,S=x;S<b;S+=s)for(var F=S-g,A=_;A<I;A+=u){var L=A-w,O=h.get(d,S,A,m);O>R&&(R=O,k=F*l+L)}o.set(k,d,v,y,m)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,n,o,a){V([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,f=a.effectiveFilterHeight,p=a.effectiveFilterWidth,h=p-1-a.padInfo.left,d=f-1-a.padInfo.top,m=ie(n.shape,"float32"),v=this.bufferSync(i),g=this.bufferSync(e),x=0;x<a.batchSize;++x)for(var b=0;b<a.inChannels;++b)for(var y=0;y<a.inHeight;++y)for(var w=0;w<a.inWidth;++w){for(var _=y-d,I=w-h,R=0,k=0;k<f;k+=c){var S=(_+k)/s;if(!(S<0||S>=a.outHeight||Math.floor(S)!==S))for(var F=0;F<p;F+=l){var A=(I+F)/u;if(!(A<0||A>=a.outWidth||Math.floor(A)!==A)){var L=f*p-1-v.get(x,S,A,b)===k*p+F?1:0;L!==0&&(R+=g.get(x,S,A,b)*L)}}}m.set(R,x,y,w,b)}return m.toTensor()},t.prototype.avgPoolBackprop=function(e,n,o){V([e,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,p=o.effectiveFilterWidth,h=p-1-o.padInfo.left,d=f-1-o.padInfo.top,m=ie(n.shape,"float32"),v=1/(s*u),g=this.bufferSync(e),x=0;x<o.batchSize;++x)for(var b=0;b<o.inChannels;++b)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var _=y-d,I=w-h,R=0,k=0;k<f;k+=c){var S=(_+k)/a;if(!(S<0||S>=o.outHeight||Math.floor(S)!==S))for(var F=0;F<p;F+=l){var A=(I+F)/i;A<0||A>=o.outWidth||Math.floor(A)!==A||(R+=g.get(x,S,A,b))}}m.set(R*v,x,y,w,b)}return m.toTensor()},t.prototype.pool3d=function(e,n,o){V(e,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,p=n.effectiveFilterHeight,h=n.effectiveFilterWidth,d=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=this.readSync(e.dataId),b=ie(n.outShape,e.dtype),y=b.values,w=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],_=n.outShape[2]*n.outShape[3]*n.outShape[4],I=n.outShape[3]*n.outShape[4],R=n.outShape[4],k=0;k<n.batchSize;++k)for(var S=k*w,F=k*e.strides[0],A=0;A<n.inChannels;++A)for(var L=0;L<n.outDepth;++L){for(var O=L*a-d,B=O;B<0;)B+=u;for(var U=Math.min(n.inDepth,f+O),z=S+L*_,W=0;W<n.outHeight;++W){for(var H=W*i-m,q=H;q<0;)q+=c;for(var $=Math.min(n.inHeight,p+H),te=z+W*I,re=0;re<n.outWidth;++re){for(var ce=re*s-v,le=ce;le<0;)le+=l;for(var pe=Math.min(n.inWidth,h+ce),ve=te+re*R,he=g,me=0,Ue=0,de=B;de<U;de+=u){for(var Ee=F+de*e.strides[1],ye=q;ye<$;ye+=c){for(var We=Ee+ye*e.strides[2],Pe=le;Pe<pe;Pe+=l){var Me=x[We+Pe*e.strides[3]+A];if(o==="max"&&Me>he?he=Me:o==="avg"&&(me+=Me,Ue++),isNaN(he))break}if(isNaN(he))break}if(isNaN(he))break}y[ve+A]=o==="avg"?me/Ue:he}}}return b.toTensor()},t.prototype.avgPool3d=function(e,n){return V(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,o){V([e,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,p=o.dilationHeight,h=o.dilationWidth,d=o.effectiveFilterDepth,m=o.effectiveFilterHeight,v=o.effectiveFilterWidth,g=d-1-o.padInfo.front,x=v-1-o.padInfo.left,b=m-1-o.padInfo.top,y=ie(n.shape,"float32"),w=1/(u*c*l),_=this.bufferSync(e),I=0;I<o.batchSize;++I)for(var R=0;R<o.inChannels;++R)for(var k=0;k<o.inDepth;++k)for(var S=0;S<o.inHeight;++S)for(var F=0;F<o.inWidth;++F){for(var A=k-g,L=S-b,O=F-x,B=0,U=0;U<d;U+=f){var z=(A+U)/a;if(!(z<0||z>=o.outDepth||Math.floor(z)!==z))for(var W=0;W<m;W+=p){var H=(L+W)/i;if(!(H<0||H>=o.outHeight||Math.floor(H)!==H))for(var q=0;q<v;q+=h){var $=(O+q)/s;$<0||$>=o.outWidth||Math.floor($)!==$||(B+=_.get(I,z,H,$,R))}}}y.set(B*w,I,k,S,F,R)}return y.toTensor()},t.prototype.maxPool3d=function(e,n){return V(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var o=ie(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,f=n.effectiveFilterDepth,p=n.effectiveFilterHeight,h=n.effectiveFilterWidth,d=n.padInfo.front,m=n.padInfo.top,v=n.padInfo.left,g=this.bufferSync(e),x=0;x<n.batchSize;++x)for(var b=0;b<n.inChannels;++b)for(var y=0;y<n.outDepth;++y){for(var w=y*a-d,_=w;_<0;)_+=u;for(var I=Math.min(n.inDepth,f+w),R=0;R<n.outHeight;++R){for(var k=R*i-m,S=k;S<0;)S+=c;for(var F=Math.min(n.inHeight,p+k),A=0;A<n.outWidth;++A){for(var L=A*s-v,O=L;O<0;)O+=l;for(var B=Math.min(n.inWidth,h+L),U=Number.NEGATIVE_INFINITY,z=-1,W=_;W<I;W+=u)for(var H=W-w,q=S;q<F;q+=c)for(var $=q-k,te=O;te<B;te+=l){var re=te-L,ce=g.get(x,W,q,te,b);ce>=U&&(U=ce,z=H*p*h+$*p+re)}o.set(z,x,y,R,A,b)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,o,a){V([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,f=a.dilationHeight,p=a.dilationWidth,h=a.effectiveFilterDepth,d=a.effectiveFilterHeight,m=a.effectiveFilterWidth,v=h-1-a.padInfo.front,g=m-1-a.padInfo.left,x=d-1-a.padInfo.top,b=ie(n.shape,"float32"),y=this.bufferSync(i),w=this.bufferSync(e),_=0;_<a.batchSize;++_)for(var I=0;I<a.inChannels;++I)for(var R=0;R<a.inDepth;++R)for(var k=0;k<a.inHeight;++k)for(var S=0;S<a.inWidth;++S){for(var F=R-v,A=k-x,L=S-g,O=0,B=0;B<h;B+=l){var U=(F+B)/s;if(!(U<0||U>=a.outDepth||Math.floor(U)!==U))for(var z=0;z<d;z+=f){var W=(A+z)/u;if(!(W<0||W>=a.outHeight||Math.floor(W)!==W))for(var H=0;H<m;H+=p){var q=(L+H)/c;if(!(q<0||q>=a.outWidth||Math.floor(q)!==q)){var $=h*d*m-1-y.get(_,U,W,q,I)===B*d*m+z*m+H?1:0;$!==0&&(O+=w.get(_,U,W,q,I)*$)}}}}b.set(O,_,R,k,S,I)}return b.toTensor()},t.prototype.cast=function(e,n){return Ss(e,n,this)},t.prototype.reshape=function(e,n){return Sa(e,n)},t.prototype.avgPool=function(e,n){return V(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,o,a){V(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),p=new Float32Array(ee([s,n,o,l])),h=[a&&n>1?u-1:u,a&&o>1?c-1:c],d=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=0,v=h[0]/d[0],g=h[1]/d[1],x=0;x<s;x++)for(var b=0;b<n;b++)for(var y=v*b,w=Math.floor(y),_=y-w,I=Math.min(u-1,Math.ceil(y)),R=x*e.strides[0]+w*e.strides[1],k=x*e.strides[0]+I*e.strides[1],S=0;S<o;S++)for(var F=g*S,A=Math.floor(F),L=F-A,O=Math.min(c-1,Math.ceil(F)),B=R+A*e.strides[2],U=k+A*e.strides[2],z=R+O*e.strides[2],W=k+O*e.strides[2],H=0;H<l;H++){var q=f[B+H],$=f[U+H],te=q+(f[z+H]-q)*L,re=te+($+(f[W+H]-$)*L-te)*_;p[m++]=re}return Ye(p,[s,n,o,l])},t.prototype.resizeBilinearBackprop=function(e,n,o){V([e,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],p=l[2],h=new Float32Array(i*s*u*c),d=[o&&f>1?s-1:s,o&&p>1?u-1:u],m=[o&&f>1?f-1:f,o&&p>1?p-1:p],v=d[0]/m[0],g=d[1]/m[1],x=this.readSync(e.dataId),b=0,y=0;y<i;y++)for(var w=y*n.strides[0],_=0;_<f;_++)for(var I=_*v,R=Math.floor(I),k=Math.min(Math.ceil(I),s-1),S=w+R*n.strides[1],F=w+k*n.strides[1],A=I-R,L=1-A,O=0;O<p;O++)for(var B=O*g,U=Math.floor(B),z=Math.min(Math.ceil(B),u-1),W=B-U,H=1-W,q=S+U*n.strides[2],$=S+z*n.strides[2],te=F+U*n.strides[2],re=F+z*n.strides[2],ce=L*H,le=L*W,pe=A*H,ve=A*W,he=0;he<c;he++){var me=x[b++];h[q+he]+=me*ce,h[$+he]+=me*le,h[te+he]+=me*pe,h[re+he]+=me*ve}return je(h,[i,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,o,a){V(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],f=this.readSync(e.dataId),p=new Float32Array(s*n*o*l),h=[a&&n>1?u-1:u,a&&o>1?c-1:c],d=[a&&n>1?n-1:n,a&&o>1?o-1:o],m=h[0]/d[0],v=h[1]/d[1],g=0,x=0;x<s;x++)for(var b=x*e.strides[0],y=0;y<n;y++)for(var w=m*y,_=b+Math.min(u-1,a?Math.round(w):Math.floor(w))*e.strides[1],I=0;I<o;I++)for(var R=v*I,k=_+Math.min(c-1,a?Math.round(R):Math.floor(R))*e.strides[2],S=0;S<l;S++){var F=f[k+S];p[g++]=F}return Ye(p,[s,n,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){V([e,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=e.shape,f=l[1],p=l[2],h=new Float32Array(i*s*u*c),d=this.readSync(e.dataId),m=[o&&f>1?s-1:s,o&&p>1?u-1:u],v=[o&&f>1?f-1:f,o&&p>1?p-1:p],g=m[0]/v[0],x=m[1]/v[1],b=1/g,y=1/x,w=2*Math.ceil(b)+2,_=2*Math.ceil(y)+2,I=0;I<i;I++)for(var R=I*n.strides[0],k=0;k<s;k++)for(var S=R+k*n.strides[1],F=Math.floor(k*b),A=Math.floor(F-w/2),L=0;L<u;L++)for(var O=S+L*n.strides[2],B=Math.floor(L*y),U=Math.floor(B-_/2),z=0;z<c;z++){for(var W=0,H=0;H<w;H++){var q=H+A;if(!(q<0||q>=f)){var $=R+q*e.strides[1],te=q*g;if(k===Math.min(s-1,o?Math.round(te):Math.floor(te)))for(var re=0;re<_;re++){var ce=re+U;if(!(ce<0||ce>=p)){var le=$+ce*e.strides[2],pe=ce*x;L===Math.min(u-1,o?Math.round(pe):Math.floor(pe))&&(W+=d[le+z])}}}}h[O+z]=W}return je(h,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,o,a,i,s){V([e,n,o,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),f=i?this.readSync(i.dataId):new Float32Array([1]),p=s?this.readSync(s.dataId):new Float32Array([0]),h=new Float32Array(u.length),d=p.length,m=f.length,v=l.length,g=c.length,x=0,b=0,y=0,w=0,_=0;_<u.length;++_)h[_]=p[x++]+(u[_]-c[b++])*f[y++]/Math.sqrt(l[w++]+a),x>=d&&(x=0),b>=g&&(b=0),y>=m&&(y=0),w>=v&&(w=0);return je(h,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,o,a,i){V(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function p(v){for(var g=v%s,x=v-g+Math.max(0,g-n),b=v-g+Math.min(g+n,u),y=0;x<=b;x++){var w=c[x];y+=w*w}return y}for(var h=0;h<l;h++){var d=p(h),m=c[h]*Math.pow(o+a*d,-i);f[h]=m}return je(f,e.shape)},t.prototype.LRNGrad=function(e,n,o,a,i,s,u){V(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(n.dataId),p=this.readSync(o.dataId),h=new Float32Array(e.size),d=e.size,m=0;m<d;m++){for(var v=m%c,g=m-v+Math.max(0,v-a),x=m-v+Math.min(c,v+a+1),b=0,y=g;y<x;y++)b+=Math.pow(f[y],2);for(b=s*b+i,y=g;y<x;y++){var w=-2*s*u*f[y]*p[m]/b;m===y&&(w+=Math.pow(b,-u)),w*=l[m],h[y]+=w}}return je(h,e.shape)},t.prototype.multinomial=function(e,n,o,a){V(e,"multinomial");for(var i=n?e:dt(e),s=i.shape[0],u=i.shape[1],c=Ie([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(i.dataId),p=0;p<s;++p){var h=p*u,d=new Float32Array(u-1);d[0]=f[h];for(var m=1;m<d.length;++m)d[m]=d[m-1]+f[h+m];for(var v=Na(a.toString()),g=p*o,x=0;x<o;++x){var b=v();l[g+x]=d.length;for(var y=0;y<d.length;y++)if(b<d[y]){l[g+x]=y;break}}}return c},t.prototype.oneHot=function(e,n,o,a){V(e,"oneHot");var i=new Float32Array(e.size*n);i.fill(a);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return Yt(i,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,o,a,i){return V(e,"nonMaxSuppression"),Is(this.readSync(e.dataId),this.readSync(n.dataId),o,a,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var o=e.shape[0],a=e.shape[1],i=ie(e.shape,"float32"),s=ie(e.shape,"float32"),u=St(e).as2D(o,a),c=Xt(e).as2D(o,a),l=0;l<o;l++)for(var f=u.slice([l,0],[1,a]),p=c.slice([l,0],[1,a]),h=tt(f,p),d=this.readSync(this.fftImpl(h,n).dataId),m=0;m<a;m++){var v=ic(d,m);i.values[l*a+m]=v.real,s.values[l*a+m]=v.imag}return tt(i.toTensor(),s.toTensor()).as2D(o,a)},t.prototype.fftImpl=function(e,n){var o=e.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(e.shape[0],e.shape[1]);return n&&(i=tt(St(i).div(X(a)),Xt(i).div(X(a)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),p=0;p<c.length;p+=2)l[p/2]=c[p],f[p/2]=c[p+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,a,n));return tt(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,o){if(n===1)return e;var a=this.readSync(e.dataId),i=n/2,s=function(g){for(var x=Math.ceil(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=0;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(a),u=tt(s.real,s.imag).as1D(),c=function(g){for(var x=Math.floor(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=2;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(a),l=tt(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var f=function(g,x){for(var b=new Float32Array(g/2),y=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var _=(x?2:-2)*Math.PI*(w/g);b[w]=Math.cos(_),y[w]=Math.sin(_)}return{real:b,imag:y}}(n,o),p=tt(f.real,f.imag).mul(l),h=u.add(p),d=u.sub(p),m=St(h).concat(St(d)),v=Xt(h).concat(Xt(d));return tt(m,v).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=zd(i*c,n,o),f=ic(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=n,u/=n),Wd(a,s,u,i)}return a},t.prototype.depthToSpace=function(e,n,o){E(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var a=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*n,l=s*n,f=u/(n*n),p=this.readSync(e.dataId),h=new Float32Array(a*c*l*f),d=0,m=0;m<a;++m)for(var v=0;v<c;++v)for(var g=Math.floor(v/n),x=v%n,b=0;b<l;++b)for(var y=Math.floor(b/n),w=(x*n+b%n)*f,_=0;_<f;++_){var I=_+w+u*(y+s*(g+i*m));h[d++]=p[I]}return je(h,[a,c,l,f])},t.prototype.broadcastedBinaryOp=function(e,n,o,a){var i=fe(e.shape,n.shape),s=ie(i,o),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=un(e.shape,i),f=un(n.shape,i),p=s.values;if(l.length+f.length===0)for(var h=0;h<p.length;++h)p[h]=a(u[h%u.length],c[h%c.length]);else{var d=this.bufferSync(e),m=this.bufferSync(n),v=function(g){var x=s.indexToLoc(g),b=x.slice(-e.rank);l.forEach(function(I){return b[I]=0});var y=d.locToIndex(b),w=x.slice(-n.rank);f.forEach(function(I){return w[I]=0});var _=m.locToIndex(w);p[g]=a(u[y],c[_])};for(h=0;h<p.length;++h)v(h)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,o){var a=fe(e.shape,n.shape),i=ie(a,"float32"),s=ie(a,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=un(e.shape,a),f=un(n.shape,a),p=i.values,h=s.values;if(l.length+f.length===0)for(var d=0;d<p.length;d++){var m=d%u.length,v=d%c.length,g=o(u[2*m],u[2*m+1],c[2*v],c[2*v+1]);p[d]=g.real,h[d]=g.imag}else{var x=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(w){var _=i.indexToLoc(w),I=_.slice(-e.rank);l.forEach(function(A){return I[A]=0});var R=x.locToIndex(I),k=_.slice(-n.rank);f.forEach(function(A){return k[A]=0});var S=b.locToIndex(k),F=o(u[2*R],u[2*R+1],c[2*S],c[2*S+1]);p[w]=F.real,h[w]=F.imag};for(d=0;d<p.length;d++)y(d)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(e,n,o){return Kl(e,n,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,o,a,i,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],p=u[3],h=n.shape[0],d=a[0],m=a[1],v=ie([h,d,m,p],"float32"),g=this.readSync(n.dataId),x=this.readSync(o.dataId),b=this.readSync(e.dataId),y=e.strides,w=v.strides,_=0;_<h;_++){var I=4*_,R=g[I],k=g[I+1],S=g[I+2],F=g[I+3],A=x[_];if(!(A>=c))for(var L=d>1?(S-R)*(l-1)/(d-1):0,O=m>1?(F-k)*(f-1)/(m-1):0,B=0;B<d;B++){var U=d>1?R*(l-1)+B*L:.5*(R+S)*(l-1);if(U<0||U>l-1)for(var z=0;z<m;z++)for(var W=0;W<p;W++){var H=W+z*w[2]+B*w[1]+_*w[0];v.values[H]=s}else if(i==="bilinear"){var q=Math.floor(U),$=Math.ceil(U),te=U-q;for(z=0;z<m;z++)if((de=m>1?k*(f-1)+z*O:.5*(k+F)*(f-1))<0||de>f-1)for(W=0;W<p;W++)H=W+z*w[2]+B*w[1]+_*w[0],v.values[H]=s;else{var re=Math.floor(de),ce=Math.ceil(de),le=de-re;for(W=0;W<p;W++){var pe=b[H=W+re*y[2]+q*y[1]+A*y[0]],ve=b[H=W+ce*y[2]+q*y[1]+A*y[0]],he=b[H=W+re*y[2]+$*y[1]+A*y[0]],me=pe+(ve-pe)*le,Ue=he+(b[H=W+ce*y[2]+$*y[1]+A*y[0]]-he)*le;H=W+z*w[2]+B*w[1]+_*w[0],v.values[H]=me+(Ue-me)*te}}}else for(z=0;z<m;++z){var de;if((de=m>1?k*(f-1)+z*O:.5*(k+F)*(f-1))<0||de>f-1)for(W=0;W<p;W++)H=W+z*w[2]+B*w[1]+_*w[0],v.values[H]=s;else{var Ee=Math.round(de),ye=Math.round(U);for(W=0;W<p;W++){var We=W+Ee*y[2]+ye*y[1]+A*y[0],Pe=W+z*w[2]+B*w[1]+_*w[0];v.values[Pe]=b[We]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(e,n,o,a){var i=go(0,e,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,f=i.outputSize;return this.scatter(e,n,o,f,c,u,s,l,a,!1)},t.prototype.gatherND=function(e,n){var o=n.shape,a=o[o.length-1],i=ws(e,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return Ye([],s,e.dtype);for(var f=new po([u,c],e.dtype),p=this.readSync(n.dataId),h=this.readSync(e.dataId),d=0;d<u;d++){for(var m=[],v=0,g=0;g<a;g++){var x=p[d*a+g];v+=x*l[g],m.push(x)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+m+" does not index into "+e.shape);for(var b=0;b<c;b++)f.values[d*c+b]=h[v*c+b]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,o){var a=go(0,e,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,f=X(0);return this.scatter(e,n,o,l,u,s,i,c,f,!0)},t.prototype.fill=function(e,n,o){var a=lo(o=o||Ir(n),ee(e));return a.fill(n),T.makeTensor(a,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=lo(e.dtype,ee(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,o){return Rs(e,n,o)},t.prototype.scatter=function(e,n,o,a,i,s,u,c,l,f){var p=[a/i,i],h=this.readSync(e.dataId),d=this.readSync(n.dataId);if(a===0)return Ye([],o,n.dtype);var m=new po(p,n.dtype);m.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var g=[],x=0,b=0;b<u;b++){var y=h[v*u+b];g.push(y),x+=y*c[b]}if(x<0||x>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<i;w++)f?m.values[x*i+w]+=d[v*i+w]:m.values[x*i+w]=n.rank===0?d[0]:d[v*i+w]}return m.toTensor().reshape(o)},t}(ql);T.registerBackend("cpu",function(){return new Gy},1);for(oa=0,Mi=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,p=e;V(a,"NonMaxSuppressionWithScore");var h=Ds(p.data.get(a.dataId).values,p.data.get(i.dataId).values,u,c,l,f);return[h.selectedIndices,h.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e;V(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:bo,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e;V([o,a],bo);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(p,h,d,m,v,g){var x=fe(p,h),b=x.length,y=Pt(x),w=Sr(v,ee(x)),_=p.length,I=h.length,R=Pt(p),k=Pt(h),S=un(p,x),F=un(h,x);if(S.length+F.length===0)for(var A=0;A<w.length;++A)w[A]=g(d[A%d.length],m[A%m.length]);else{var L=function(O){var B=Jc(O,b,y),U=B.slice(-_);S.forEach(function(q){return U[q]=0});var z=Ki(U,_,R),W=B.slice(-I);F.forEach(function(q){return W[q]=0});var H=Ki(W,I,k);w[O]=g(d[z],m[H])};for(A=0;A<w.length;++A)L(A)}return[w,x]}(o.shape,a.shape,s,u,o.dtype,function(p,h){var d=p-h;return d*d}),l=c[0],f=c[1];return{dataId:i.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];oa<Mi.length;oa++)zc(Mi[oa]);var oa,Mi,mr,Hy=function(r){this.variableNames=["A"];var t=st(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},qy=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=st(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(aa=0,Oi=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t.pixels,a=n.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],p=[l,c,a];(s||i)&&(mr==null&&(mr=document.createElement("canvas").getContext("2d")),mr.canvas.width=c,mr.canvas.height=l,mr.drawImage(o,0,0,c,l),o=mr.canvas);var h=e.makeTensorInfo(f,"int32");e.texData.get(h.dataId).usage=_t.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(h.dataId),o);var d=M().getBool("WEBGL_PACK")?new qy(p):new Hy(p),m=e.runWebGLProgram(d,[h],"int32");return e.disposeData(h.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;xa("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,p=e,h=Ds(p.readSync(a.dataId),p.readSync(i.dataId),u,c,l,f);return[h.selectedIndices,h.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e,a=new ue(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:bo,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,a=n.b,i=e,s=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new an("return (a - b) * (a - b);",o.shape,a.shape):new ze("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];aa<Oi.length;aa++)zc(Oi[aa]);var aa,Oi;for(ia=0,Bi=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:bo,gradFunc:function(r,t){var e=t[0],n=t[1],o=X(2);return{a:function(){return Oe(r,Oe(o,Se(e,n)))},b:function(){return Oe(r,Oe(o,Se(n,e)))}}}}];ia<Bi.length;ia++)Xh(Bi[ia]);var ia,Bi,jy=function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r}();M().get("IS_BROWSER")&&M().setPlatform("browser",new jy);var Li,Ky=function(){return Ju()},Xy=function(){function r(){this.util=Zu(),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return M().global.fetch!=null?M().global.fetch(t,e):(Li==null&&(Li=Ky()),Li(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r}();M().get("IS_NODE")&&M().setPlatform("node",new Xy);var is={float32:4,int32:4,uint16:2,uint8:1,bool:1},Da=4;function tp(r,t){for(var e={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=ee(l),p=void 0;if("quantization"in s){var h=s.quantization;if(h.dtype!=="uint8"&&h.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+h.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var d=is[h.dtype],m=r.slice(n,n+f*d),v=h.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(c==="float32")p=Float32Array.from(v,function(_){return _*h.scale+h.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);p=Int32Array.from(v,function(_){return Math.round(_*h.scale+h.min)})}n+=f*d}else if(c==="string"){var g=ee(s.shape);p=[];for(var x=0;x<g;x++){var b=new Uint32Array(r.slice(n,n+Da))[0];n+=Da;var y=new Uint8Array(r.slice(n,n+b));p.push(y),n+=b}}else{var w=is[c];if(m=r.slice(n,n+f*w),c==="float32")p=new Float32Array(m);else if(c==="int32")p=new Int32Array(m);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);p=new Uint8Array(m)}n+=f*w}e[u]=Ye(p,l,c)},a=0,i=t;a<i.length;a++)o(i[a]);return e}function Yy(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach(function(a){if(t+=a.byteLength,e.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var n=new Uint8Array(t),o=0;return e.forEach(function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),n.buffer}var ss=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Ic(r){return ss?Buffer.byteLength(r):new Blob([r]).size}function Xs(r){var t=0;r.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),n=0;return r.forEach(function(o){e.set(new Uint8Array(o),n),n+=o.byteLength}),e.buffer}function Dc(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function To(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:Ic(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:Ic(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var Et=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(t,n);i!==null&&o.push(i)}),o},r}(),Cr="://",Rn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){E(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Cr)&&(t=t.slice(0,t.indexOf(Cr))),E(t.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();E(n.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function ha(r){if(r.indexOf(Cr)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+Rn.getSchemes().join(","));return{scheme:r.split(Cr)[0],path:r.split(Cr)[1]}}function Tc(r,t,e){return e===void 0&&(e=!1),J(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,f;return Z(this,function(p){switch(p.label){case 0:return E(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),E((n=Et.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],E((a=Et.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),E(a.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."}),i=a[0],s=ha(r).scheme,u=ha(r).path,c=s===ha(r).scheme,[4,o.load()];case 1:return l=p.sent(),e&&c?[4,Rn.getManager(s).removeModel(u)]:[3,3];case 2:p.sent(),p.label=3;case 3:return[4,i.save(l)];case 4:return f=p.sent(),!e||c?[3,6]:[4,Rn.getManager(s).removeModel(u)];case 5:p.sent(),p.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var Un="models_store",Sn="model_info_store";function np(){if(!M().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function us(r){var t=r.result;t.createObjectStore(Un,{keyPath:"modelPath"}),t.createObjectStore(Sn,{keyPath:"modelPath"})}var Er=function(){function r(t){if(this.indexedDB=np(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return J(this,void 0,void 0,function(){return Z(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return J(this,void 0,void 0,function(){return Z(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return us(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(Un,"readonly"),c=u.objectStore(Un).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(m){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=To(e),p=s.transaction(Sn,"readwrite"),h=p.objectStore(Sn),d=h.put({modelPath:n.modelPath,modelArtifactsInfo:f});d.onsuccess=function(){var m=(l=s.transaction(Un,"readwrite")).objectStore(Un).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:f});m.onsuccess=function(){return o({modelArtifactsInfo:f})},m.onerror=function(v){var g=(h=p.objectStore(Sn)).delete(n.modelPath);g.onsuccess=function(){return s.close(),a(m.error)},g.onerror=function(x){return s.close(),a(m.error)}}},d.onerror=function(m){return s.close(),a(d.error)},p.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),Ac=function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Er.URL_SCHEME)?(t=r.slice(Er.URL_SCHEME.length),new Er(t)):null;var t};Et.registerSaveRouter(Ac),Et.registerLoadRouter(Ac);var $y=function(){function r(){this.indexedDB=np()}return r.prototype.listModels=function(){return J(this,void 0,void 0,function(){var t=this;return Z(this,function(e){return[2,new Promise(function(n,o){var a=t.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return us(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(Sn,"readonly"),u=s.objectStore(Sn).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var p=f[l];c[p.modelPath]=p.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(t){return J(this,void 0,void 0,function(){var e=this;return Z(this,function(n){var o;return t=(o=t).startsWith(Er.URL_SCHEME)?o.slice(Er.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return us(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(Sn,"readwrite"),f=l.objectStore(Sn),p=f.get(t);p.onsuccess=function(){if(p.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var h=f.delete(t),d=function(){var m=(u=c.transaction(Un,"readwrite")).objectStore(Un).delete(t);m.onsuccess=function(){return a(p.result.modelArtifactsInfo)},m.onerror=function(v){return i(p.error)}};h.onsuccess=d,h.onerror=function(m){return d(),c.close(),i(p.error)}},p.onerror=function(h){return c.close(),i(p.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(M().getBool("IS_BROWSER"))try{Rn.registerManager(Er.URL_SCHEME,new $y)}catch{}var sn="/",wr="tensorflowjs_models",rp="info",Qy="model_topology",Jy="weight_specs",Zy="weight_data",e0="model_metadata";function op(r){return{info:[wr,r,rp].join(sn),topology:[wr,r,Qy].join(sn),weightSpecs:[wr,r,Jy].join(sn),weightData:[wr,r,Zy].join(sn),modelMetadata:[wr,r,e0].join(sn)}}function t0(r){var t=r.split(sn);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(sn)}var kr=function(){function r(t){if(!M().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=op(this.modelPath)}return r.prototype.save=function(t){return J(this,void 0,void 0,function(){var e,n,o;return Z(this,function(a){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=To(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(ss)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return J(this,void 0,void 0,function(){var t,e,n,o,a,i,s;return Z(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(ss){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),p=new Uint8Array(f.length),h=0;h<f.length;++h)p.set([f.charCodeAt(h)],h);return p.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),Fc=function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(kr.URL_SCHEME)?(t=r.slice(kr.URL_SCHEME.length),new kr(t)):null;var t};Et.registerSaveRouter(Fc),Et.registerLoadRouter(Fc);var n0=function(){function r(){E(M().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return J(this,void 0,void 0,function(){var t,e,n,o,a,i;return Z(this,function(s){for(t={},e=wr+sn,n=sn+rp,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(e)&&a.endsWith(n)&&(i=t0(a),t[i]=JSON.parse(this.LS.getItem(a)));return[2,t]})})},r.prototype.removeModel=function(t){return J(this,void 0,void 0,function(){var e,n;return Z(this,function(o){var a;if(t=(a=t).startsWith(kr.URL_SCHEME)?a.slice(kr.URL_SCHEME.length):a,e=op(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},r}();if(M().getBool("IS_BROWSER"))try{Rn.registerManager(kr.URL_SCHEME,new n0)}catch{}var r0="model",o0=".json",a0=".weights.bin";function Nc(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var Wi=function(){function r(t){if(!M().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=r0),this.modelTopologyFileName=t+o0,this.weightDataFileName=t+a0}return r.prototype.save=function(t){return J(this,void 0,void 0,function(){var e,n,o,a,i,s;return Z(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,Nc(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Nc(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:To(t)}]}})})},r.URL_SCHEME="downloads://",r}(),i0=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return J(this,void 0,void 0,function(){var t,e,n=this;return Z(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&a({modelTopology:l});var f=c.weightsManifest;if(f!=null){var p;try{p=n.checkManifestAndWeightFiles(f,e)}catch(v){return void i(v)}var h=[],d=[],m=[];f.forEach(function(v){v.paths.forEach(function(g){d.push(g),m.push(null)}),h.push.apply(h,v.weights)}),f.forEach(function(v){v.paths.forEach(function(g){var x=new FileReader;x.onload=function(b){var y=b.target.result,w=d.indexOf(g);m[w]=y,m.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:h,weightData:Xs(m),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},x.onerror=function(b){return i("Failed to weights data from file of path '"+g+"'.")},x.readAsArrayBuffer(p[g])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],o=e.map(function(u){return Dc(u.name)}),a={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var c=Dc(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=e[o.indexOf(c)]});if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return a},r}();function Pc(r,t,e,n){(function(a){E(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){E(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(e=e??0,n=n??1);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=e+ ++o/r.length*(n-e);return t(s),i}),a}))}function ap(r,t){return J(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l;return Z(this,function(f){switch(f.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?M().platform.fetch:t.fetchFunc,n=r.map(function(p){return e(p,t.requestInit,{isBinary:!0})}),o=0,a=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=f.sent(),[3,4];case 2:return[4,Pc(n,t.onProgress,o,a)];case 3:i=f.sent(),f.label=4;case 4:return s=i.map(function(p){return p.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,Pc(s,t.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function Mc(r){var t=this;return function(e,n,o){return n===void 0&&(n=""),J(t,void 0,void 0,function(){var a,i,s,u,c,l,f,p,h,d;return Z(this,function(m){switch(m.label){case 0:if(a=e.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(v,g){var x=0;v.weights.forEach(function(b){var y="quantization"in b?b.quantization.dtype:b.dtype,w=is[y]*ee(b.shape),_=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:b,groupOffset:x,sizeBytes:w})};o!=null?o.forEach(function(I,R){I===b.name&&(_(),s[R]=!0)}):_(),u.push(b.name),x+=w})}),!s.every(function(v){return v}))throw c=o.filter(function(v,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(v,g,x){return g&&v.push(x),v},[]),f=[],l.forEach(function(v){e[v].paths.forEach(function(g){var x=n+(n.endsWith("/")?"":"/")+g;f.push(x)})}),[4,r(f)];case 1:return p=m.sent(),h={},d=0,l.forEach(function(v){for(var g=e[v].paths.length,x=0,b=0;b<g;b++)x+=p[d+b].byteLength;for(var y=new ArrayBuffer(x),w=new Uint8Array(y),_=0,I=0;I<g;I++){var R=new Uint8Array(p[d+I]);w.set(R,_),_+=R.byteLength}i[v].forEach(function(k){var S=tp(y.slice(k.groupOffset,k.groupOffset+k.sizeBytes),[k.manifestEntry]);for(var F in S)h[F]=S[F]}),d+=g}),[2,h]}})})}}Et.registerSaveRouter(function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Wi.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new Wi(t)}(r.slice(Wi.URL_SCHEME.length)):null});var ip=function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=M().platform.fetch,E(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&E(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return J(this,void 0,void 0,function(){var e,n,o,a;return Z(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:To(t),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return J(this,void 0,void 0,function(){var t,e,n,o,a,i,s,u,c,l,f,p;return Z(this,function(h){switch(h.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=h.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");h.label=2;case 2:return h.trys.push([2,4,,5]),[4,t.json()];case 3:return e=h.sent(),[3,5];case 4:throw h.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,a=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:p=h.sent(),l=p[0],f=p[1],h.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return J(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,p;return Z(this,function(h){switch(h.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(d){var m=d.lastIndexOf("/"),v=d.lastIndexOf("?"),g=d.substring(0,m),x=v>m?d.substring(v):"";return[g+"/",x]}(e),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],t.forEach(function(d){d.paths.forEach(function(m){f.push(i+m+a)})}),[4,ap(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return p=h.sent(),[2,[s,Xs(p)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function cs(r){return r.match(ip.URL_SCHEME_REGEX)!=null}var Oc=function(r,t){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return cs(e)}):cs(r))?ls(r,{onProgress:t}):null};function ls(r,t){return new ip(r,t)}Et.registerSaveRouter(Oc),Et.registerLoadRouter(Oc);var zi=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return J(this,void 0,void 0,function(){return Z(this,function(t){return[2,this.modelArtifacts]})})},r}(),s0=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return J(this,void 0,void 0,function(){return Z(this,function(e){return[2,this.saveHandler(t)]})})},r}(),Ua=Object.freeze({browserFiles:function(r){return new i0(r)},browserHTTPRequest:function(r,t){return ls(r,t)},concatenateArrayBuffers:Xs,decodeWeights:tp,encodeWeights:function(r,t){return J(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return Z(this,function(u){switch(u.label){case 0:for(e=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],f=Array.isArray(r)?r[c].tensor:r[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var p={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var h=new Promise(function(d){return J(s,void 0,void 0,function(){var m,v,g,x,b,y,w;return Z(this,function(_){switch(_.label){case 0:return[4,f.bytes()];case 1:for(m=_.sent(),v=m.reduce(function(I,R){return I+R.length},0)+Da*m.length,g=new Uint8Array(v),x=0,b=0;b<m.length;b++)y=m[b],w=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(w,x),x+=Da,g.set(y,x),x+=y.length;return d(g),[2]}})})});n.push(h)}else n.push(f.data());t!=null&&(p.group=t),e.push(p)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:Yy(u.sent()),specs:e}]}})})},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new zi(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new zi({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new zi({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n}))},getLoadHandlers:function(r,t){return Et.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:To,getSaveHandlers:function(r){return Et.getSaveHandlers(r)},http:ls,isHTTPScheme:cs,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),J(this,void 0,void 0,function(){return Z(this,function(o){return[2,Mc(function(a){return ap(a,{requestInit:n})})(r,t,e)]})})},registerLoadRouter:function(r){return Et.registerLoadRouter(r)},registerSaveRouter:function(r){return Et.registerSaveRouter(r)},weightsLoaderFactory:Mc,withSaveHandler:function(r){return new s0(r)},copyModel:function(r,t){return J(this,void 0,void 0,function(){return Z(this,function(e){return[2,Tc(r,t,!1)]})})},listModels:function(){return J(this,void 0,void 0,function(){var r,t,e,n,o,a,i;return Z(this,function(s){switch(s.label){case 0:r=Rn.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(o=n[e],[4,Rn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())t[o+Cr+i]=a[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return J(this,void 0,void 0,function(){return Z(this,function(e){return[2,Tc(r,t,!0)]})})},removeModel:function(r){return J(this,void 0,void 0,function(){var t;return Z(this,function(e){return t=ha(r),[2,Rn.getManager(t.scheme).removeModel(t.path)]})})}}),gr,u0=D({confusionMatrix_:function(r,t,e){var n=C(r,"labels","confusionMatrix"),o=C(t,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),E(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),E(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),E(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),E(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var a=ns(n.asType("int32"),e),i=ns(o.asType("int32"),e);return a.transpose().matMul(i).asType("int32")}}),ux=Object.freeze({confusionMatrix:u0}),c0=D({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Wc("FromPixels",T.backendName)!=null)return T.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],f=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,f).data:n||e?s=r.data:(a||o)&&(gr==null&&(gr=document.createElement("canvas").getContext("2d")),gr.canvas.width=l,gr.canvas.height=f,gr.drawImage(r,0,0,l,f),s=gr.getImageData(0,0,l,f).data),t===4)u=new Int32Array(s);else{var p=l*f;u=new Int32Array(p*t);for(var h=0;h<p;h++)for(var d=0;d<t;++d)u[h*t+d]=s[4*h+d]}return Fa(u,[f,l,t],"int32")}}),Fr=Object.freeze({toPixels:function(r,t){return J(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f,p,h,d,m,v,g,x,b,y,w,_,I,R;return Z(this,function(k){switch(k.label){case 0:if(e=C(r,"img","toPixels"),r instanceof ke||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),o=n[0],a=n[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=k.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=k.sent(),f=l[0],p=l[1],h=f[0],d=p[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(h<0||d>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+h+" - "+d+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(h<0||d>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+h+" - "+d+"].")}for(m=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)x=void 0,b=void 0,y=void 0,w=void 0,i===1?(x=s[g]*m,b=s[g]*m,y=s[g]*m,w=255):i===3?(x=s[3*g]*m,b=s[3*g+1]*m,y=s[3*g+2]*m,w=255):i===4&&(x=s[4*g]*m,b=s[4*g+1]*m,y=s[4*g+2]*m,w=s[4*g+3]*m),v[(_=4*g)+0]=Math.round(x),v[_+1]=Math.round(b),v[_+2]=Math.round(y),v[_+3]=Math.round(w);return t!=null&&(t.width=a,t.height=o,I=t.getContext("2d"),R=new ImageData(v,a,o),I.putImageData(R,0,0)),e!==r&&e.dispose(),[2,v]}})})},fromPixels:c0}),sp=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r}(),up=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function Tn(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),up.register(r)}var cx=Object.freeze({Serializable:sp,SerializationMap:up,registerClass:Tn}),l0=.001,cp=.1;function Ui(){return T.backend.floatPrecision()===32?l0:cp}function Vi(r,t,e){var n=!0;if((rt(r)||rt(t))&&(n=!1),rt(r)&&rt(t)&&(n=!0),n){var o=r.constructor.name,a=t.constructor.name;if(o!==a)throw new Error("Arrays are of different type. Actual: "+o+". Expected: "+a)}if(Array.isArray(r)&&Array.isArray(t)){var i=$t(r),s=$t(t);if(!Ve(i,s))throw new Error("Arrays have different shapes. Actual: ["+i+"]. Expected: ["+s+"]")}var u=rt(r)?r:cn(r),c=rt(t)?t:cn(t);if(u.length!==c.length)throw new Error("Arrays have different lengths actual: "+u.length+" vs expected: "+c.length+`.
Actual:   `+u+`.
Expected: `+c+".");for(var l=0;l<c.length;++l){var f=u[l],p=c[l];if(!e(f,p))throw new Error("Arrays differ: actual["+l+"] = "+f+", expected["+l+"] = "+p+`.
Actual:   `+u+`.
Expected: `+c+".")}}function Gi(r,t,e){return!isFinite(r)&&!isFinite(t)||!(isNaN(r)||isNaN(t)||Math.abs(r-t)>e)}var lx=Object.freeze({TEST_EPSILON_FLOAT16:cp,expectArraysClose:function(r,t,e){return e==null&&(e=Ui()),Vi(r,t,function(n,o){return Gi(n,o,e)})},testEpsilon:Ui,expectPromiseToFail:function(r,t){r().then(function(){return t.fail()},function(){return t()})},expectArraysEqual:function(r,t){var e=typeof t=="string"||typeof t=="number"||typeof t=="boolean"?[t]:t;return kn(r)||kn(r[0])||kn(t)||kn(t[0])?Vi(r,e,function(n,o){return n==o}):Vi(r,t,function(n,o){return Gi(n,o,0)})},expectNumbersClose:function(r,t,e){if(e==null&&(e=Ui()),!Gi(r,t,e))throw new Error("Numbers differ: actual === "+r+", expected === "+t)},expectValuesInRange:function(r,t,e){for(var n=0;n<r.length;n++)if(r[n]<t||r[n]>e)throw new Error("Value out of range:"+r[n]+" low: "+t+", high: "+e)},expectArrayBuffersEqual:function(r,t){expect(new Float32Array(r)).toEqual(new Float32Array(t))}});var fx=Object.freeze({gpgpu_util:Nv,webgl_util:rd,forceHalfFloat:function(){M().set("WEBGL_FORCE_F16_TEXTURES",!0)},MathBackendWebGL:kf,setWebGLContext:rl,GPGPUContext:yf}),Qn=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return Ot(t,r),t.prototype.minimize=function(e,n,o){n===void 0&&(n=!1);var a=this.computeGradients(e,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return yt(s),n?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return Bd(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&yt(this.iterations_)},t.prototype.saveIterations=function(){return J(this,void 0,void 0,function(){return Z(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:X(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return J(this,void 0,void 0,function(){return Z(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return J(this,void 0,void 0,function(){return Z(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return J(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(sp);Object.defineProperty(Qn,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var lp=function(r){function t(e,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=e,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=T.backend.epsilon()),a}return Ot(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:G(function(){return ge(i).variable(!1)})}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:G(function(){return ge(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;G(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),f=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),p=c.mul(n.rho).add(f.square().mul(1-n.rho));u.assign(l),c.assign(p);var h=f.mul(-n.learningRate).add(i);i.assign(h)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(yt(this.accumulatedGrads.map(function(e){return e.variable})),yt(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return J(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return J(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t}(Qn);Tn(lp);var fp=function(r){function t(e,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return Ot(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:G(function(){return kt(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[a].variable;G(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(T.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&yt(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return J(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return J(this,void 0,void 0,function(){return Z(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t}(Qn);Tn(fp);var pp=function(r){function t(e,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],G(function(){i.accBeta1=X(n).variable(),i.accBeta2=X(o).variable()}),a==null&&(i.epsilon=T.backend.epsilon()),i}return Ot(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);G(function(){var a=Se(1,n.accBeta1),i=Se(1,n.accBeta2);o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:G(function(){return ge(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:G(function(){return ge(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,p=n.accumulatedSecondMoment[u].variable,h=f.mul(n.beta1).add(l.mul(1-n.beta1)),d=p.mul(n.beta2).add(l.square().mul(1-n.beta2)),m=h.div(a),v=d.div(i);f.assign(h),p.assign(d);var g=m.div(v.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(g)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&yt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&yt(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return J(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return J(this,void 0,void 0,function(){var n,o=this;return Z(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),G(function(){o.accBeta1.assign(Ra(o.beta1,o.iterations_+1)),o.accBeta2.assign(Ra(o.beta2,o.iterations_+1))}),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t}(Qn);Tn(pp);var hp=function(r){function t(e,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],G(function(){s.iteration=X(0).variable(),s.accBeta1=X(n).variable()}),a==null&&(s.epsilon=T.backend.epsilon()),s}return Ot(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e);G(function(){var a=Se(1,n.accBeta1),i=Rt(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ge(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:ge(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=n.accumulatedFirstMoment[u].variable,p=n.accumulatedWeightedInfNorm[u].variable,h=f.mul(n.beta1).add(l.mul(1-n.beta1)),d=p.mul(n.beta2),m=l.abs(),v=d.maximum(m);f.assign(h),p.assign(v);var g=i.div(a).mul(h.div(v.add(n.epsilon))).add(c);c.assign(g)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&yt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&yt(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return J(this,void 0,void 0,function(){return Z(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return J(this,void 0,void 0,function(){return Z(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t}(Qn);Tn(hp);var Ys=function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return Ot(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=Array.isArray(e)?e[a].tensor:e[o];if(i!=null){var s=T.registeredVariables[o];G(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=od(X(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return J(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return J(this,void 0,void 0,function(){return Z(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t}(Qn);Tn(Ys);var dp=function(r){function t(e,n,o){o===void 0&&(o=!1);var a=r.call(this,e)||this;return a.learningRate=e,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=X(a.momentum),a}return Ot(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:G(function(){return ge(i).variable(!1)})});var s=n.accumulations[a].variable,u=Array.isArray(e)?e[a].tensor:e[o];u!=null&&G(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&yt(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return J(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return J(this,void 0,void 0,function(){return Z(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t}(Ys);Tn(dp);var vp=function(r){function t(e,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=T.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return Ot(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:G(function(){return ge(i).variable(!1)})}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:G(function(){return ge(i).variable(!1)})}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:G(function(){return ge(i).variable(!1)})});var s=Array.isArray(e)?e[a].tensor:e[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;G(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var f=n.accumulatedMeanGrads[a].variable,p=f.mul(n.decay).add(s.mul(1-n.decay)),h=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(p.square().add(n.epsilon)).sqrt()));u.assign(l),f.assign(p),c.assign(h);var d=i.sub(h);i.assign(d)}else{var m=u.mul(n.decay).add(s.square().mul(1-n.decay));h=c.mul(n.momentum).add(s.mul(n.learningRate).div(m.add(n.epsilon).sqrt())),u.assign(m),c.assign(h),d=i.sub(h),i.assign(d)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&yt(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&yt(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&yt(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return J(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return J(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t}(Qn);Tn(vp);var Bn=function(){function r(){}return r.sgd=function(t){return new Ys(t)},r.momentum=function(t,e,n){return n===void 0&&(n=!1),new dp(t,e,n)},r.rmsprop=function(t,e,n,o,a){return e===void 0&&(e=.9),n===void 0&&(n=0),o===void 0&&(o=null),a===void 0&&(a=!1),new vp(t,e,n,o,a)},r.adam=function(t,e,n,o){return t===void 0&&(t=.001),e===void 0&&(e=.9),n===void 0&&(n=.999),o===void 0&&(o=null),new pp(t,e,n,o)},r.adadelta=function(t,e,n){return t===void 0&&(t=.001),e===void 0&&(e=.95),n===void 0&&(n=null),new lp(t,e,n)},r.adamax=function(t,e,n,o,a){return t===void 0&&(t=.002),e===void 0&&(e=.9),n===void 0&&(n=.999),o===void 0&&(o=null),a===void 0&&(a=0),new hp(t,e,n,o,a)},r.adagrad=function(t,e){return e===void 0&&(e=.1),new fp(t,e)},r}(),px={sgd:Bn.sgd,momentum:Bn.momentum,adadelta:Bn.adadelta,adagrad:Bn.adagrad,rmsprop:Bn.rmsprop,adamax:Bn.adamax,adam:Bn.adam};ke.prototype.squaredDifference=function(r){return Sf(this,r)},P=Vy;var rr={};Hh(rr,{AnchorPosition:()=>yn,DrawBox:()=>su,DrawBoxOptions:()=>Cp,DrawFaceLandmarks:()=>Lp,DrawFaceLandmarksOptions:()=>Bp,DrawTextField:()=>No,DrawTextFieldOptions:()=>Ka,drawContour:()=>dn,drawDetections:()=>g0,drawFaceExpressions:()=>y0,drawFaceLandmarks:()=>x0});function dn(r,t,e){if(e===void 0&&(e=!1),r.beginPath(),t.slice(1).forEach(function(a,i){var s=a.x,u=a.y,c=t[i];r.moveTo(c.x,c.y),r.lineTo(s,u)}),e){var n=t[t.length-1],o=t[0];if(!n||!o)return;r.moveTo(n.x,n.y),r.lineTo(o.x,o.y)}r.stroke()}var $s=function(r,t){return $s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},$s(r,t)};function Y(r,t){$s(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var qe=function(){return qe=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},qe.apply(this,arguments)};function j(r,t,e,n){function o(a){return a instanceof e?a:new e(function(i){i(a)})}return new(e||(e=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(f){i(f)}}function u(l){try{c(n.throw(l))}catch(f){i(f)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,t||[])).next())})}function K(r,t){var e={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(a=e.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){e.label=c[1];break}if(c[0]===6&&e.label<a[1]){e.label=a[1],a=c;break}if(a&&e.label<a[2]){e.label=a[2],e.ops.push(c);break}a[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Jn(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),o=0,t=0;t<e;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var Dt=function(){function r(t,e){if(!Jt(t)||!Jt(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function Ao(r,t){return r instanceof ke&&r.shape.length===t}function mp(r){return Ao(r,2)}function An(r){return Ao(r,3)}function Tt(r){return Ao(r,4)}function gp(r){return r%1!==0}function Qs(r){return r%2===0}function Nr(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function Js(r){return r&&r.width&&r.height}function yp(r,t){var e=r.width,n=r.height,o=t/Math.max(n,e);return new Dt(Math.round(e*o),Math.round(n*o))}function Pr(r){return r.reduce(function(t,e){return t.add(e)},new se(0,0)).div(new se(r.length,r.length))}function vn(r,t,e){return Array(r).fill(0).map(function(n,o){return t+o*e})}function Jt(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Va(r){return Jt(r)&&0<=r&&r<=1}var se=function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}();var Qe=function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},o=[n.left,n.top,n.right,n.bottom].every(Jt),a=[n.x,n.y,n.width,n.height].every(Jt);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(Jt)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new se(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new se(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new se(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new se(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=t[0],n=t[1],o=t[2],a=t[3];return new r({x:e,y:n,width:o,height:a})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,o=t.width,a=t.height,i=Math.abs(o-a);return o<a&&(e-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:e,y:n,width:o,height:a})},r.prototype.rescale=function(t){var e=Js(t)?t.width:t,n=Js(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,f=s-c,p=Math.min(l,t-u),h=Math.min(f,e-c);return new r({x:u,y:c,width:p,height:h}).floor()},r.prototype.shift=function(t,e){var n=this,o=n.width,a=n.height,i=this.x+t,s=this.y+e;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,f=this.right,p=this.bottom;return f>e&&(s=-f+e+n,f=e),p>t&&(u=-p+t+o,p=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:p,x:c,ex:f,w:n,h:o}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r}();var Zn=function(r){Y(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:n,right:o,bottom:a},i)||this}return t}(Qe);var Ga=function(){function r(t,e,n,o,a){this._imageDims=new Dt(a.width,a.height),this._score=t,this._classScore=e,this._className=n,this._box=new Qe(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new Qe(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r}();var Fe=function(r){Y(t,r);function t(e,n,o){return r.call(this,e,e,"",n,o)||this}return t.prototype.forSize=function(e,n){var o=r.prototype.forSize.call(this,e,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new t(a,i,s)},t}(Ga);function xp(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),o=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),a=n*o;return e?a/(r.area+t.area-a):a/Math.min(r.area,t.area)}function bp(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),a=t.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new Zn(n,o,a,i)}function mn(r,t,e,n){n===void 0&&(n=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],p=r[s],h=r[f];c.push(xp(p,h,n))}o=o.filter(function(d,m){return c[m]<=e})};o.length>0;)i();return a}function Zt(r,t){return G(function(){var e=t[0],n=t[1],o=t[2],a=kt(Jn(r.shape.slice(0,3),[1]),e),i=kt(Jn(r.shape.slice(0,3),[1]),n),s=kt(Jn(r.shape.slice(0,3),[1]),o),u=Te([a,i,s],3);return Se(r,u)})}function wp(r,t){return t===void 0&&(t=!1),G(function(){var e=r.shape.slice(1),n=e[0],o=e[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(t?.5:1)),s=n>o?2:1,u=function(h){var d=r.shape.slice();return d[s]=h,kt(d,0)},c=u(i),l=a-c.shape[s],f=t&&l?u(l):null,p=[f,r,c].filter(function(h){return!!h}).map(function(h){return h.toFloat()});return Te(p,s)})}function Ha(r){return 1/(1+Math.exp(-r))}var Mr=function(r){Y(t,r);function t(e,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:n,width:o,height:a},i)||this}return t}(Qe);var p0=.5,h0=.43,d0=.45,zt=function(){function r(t,e,n){n===void 0&&(n=new se(0,0));var o=e.width,a=e.height;this._imgDims=new Dt(o,a),this._shift=n,this._positions=t.map(function(i){return i.mul(new se(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new se(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new se(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new se(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof Fe?t.box.floor():new Qe(t);return this.shiftBy(n.x,n.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],o=t[2],a=function(f){return o.sub(f).magnitude()},i=(a(e)+a(n))/2,s=Math.floor(i/d0),u=Pr(t),c=Math.floor(Math.max(0,u.x-p0*s)),l=Math.floor(Math.max(0,u.y-h0*s));return new Mr(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=bp(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}();var _p=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],Pr([e[3],e[4]])]},t}(zt);var qa=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Pr)},t}(zt);var Zs=function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+Nr(this.distance)+")":"")},r}();var eu=function(r){Y(t,r);function t(e,n){var o=r.call(this,e)||this;return o._label=n,o}return t.assertIsValidLabeledBox=function(e,n){if(Qe.assertIsValidBox(e,n),!Jt(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(Qe);var Fo=function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r}();var Cb=function(r){Y(t,r);function t(e,n,o,a){var i=r.call(this,e,n)||this;return i._score=o,i._classScore=a,i}return t.assertIsValidPredictedBox=function(e,n){if(eu.assertIsValidLabeledBox(e,n),!Va(e.score)||!Va(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t}(eu);function gn(r){return r.detection instanceof Fe}function Fn(r,t){var e={detection:t};return Object.assign({},r,e)}function tu(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function ja(r){var t="";if(!r)try{r=gi("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function nu(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=ja();return qe({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:t||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:n,fetch:o},a)}function ru(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function ou(){return typeof global=="object"&&typeof gi=="function"&&typeof module<"u"&&typeof process<"u"&&!!process.version}var Ke;function v0(){if(!Ke)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Ke}function au(r){Ke=r}function iu(){ru()&&au(tu()),ou()&&au(nu())}function m0(r){if(Ke||iu(),!Ke)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?Ke.Canvas:t,n=r.Image,o=n===void 0?Ke.Image:n;Ke.Canvas=e,Ke.Image=o,Ke.createCanvasElement=r.createCanvasElement||function(){return new e},Ke.createImageElement=r.createImageElement||function(){return new o},Ke.ImageData=r.ImageData||Ke.ImageData,Ke.Video=r.Video||Ke.Video,Ke.fetch=r.fetch||Ke.fetch,Ke.readFile=r.readFile||Ke.readFile}var be={getEnv:v0,setEnv:au,initialize:iu,createBrowserEnv:tu,createFileSystem:ja,createNodejsEnv:nu,monkeyPatch:m0,isBrowser:ru,isNodejs:ou};iu();function Or(r){return!be.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function at(r){var t=be.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var o=Or(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var yn=function(r){return r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT",r}(yn||{}),Ka=function(){function r(t){t===void 0&&(t={});var e=t.anchorPosition,n=t.backgroundColor,o=t.fontColor,a=t.fontSize,i=t.fontStyle,s=t.padding;this.anchorPosition=e||yn.TOP_LEFT,this.backgroundColor=n||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=a||14,this.fontStyle=i||"Georgia",this.padding=s||4}return r}();var No=function(){function r(t,e,n){n===void 0&&(n={}),this.text=typeof t=="string"?[t]:t instanceof r?t.text:t,this.anchor=e,this.options=new Ka(n)}return r.prototype.measureWidth=function(t){var e=this.options.padding;return this.text.map(function(n){return t.measureText(n).width}).reduce(function(n,o){return n<o?o:n},0)+2*e},r.prototype.measureHeight=function(){var t=this.options,e=t.fontSize,n=t.padding;return this.text.length*e+2*n},r.prototype.getUpperLeft=function(t,e){var n=this.options.anchorPosition,o=n===yn.BOTTOM_RIGHT||n===yn.TOP_RIGHT,a=n===yn.BOTTOM_LEFT||n===yn.BOTTOM_RIGHT,i=this.measureWidth(t),s=this.measureHeight(),u=o?this.anchor.x-i:this.anchor.x,c=a?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,f=e.height,p=Math.max(Math.min(u,l-i),0),h=Math.max(Math.min(c,f-s),0);return{x:p,y:h}}return{x:u,y:c}},r.prototype.draw=function(t){var e=Or(t),n=at(e),o=this.options,a=o.backgroundColor,i=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;n.font=s+"px "+u;var l=this.measureWidth(n),f=this.measureHeight();n.fillStyle=a;var p=this.getUpperLeft(n,e);n.fillRect(p.x,p.y,l,f),n.fillStyle=i,this.text.forEach(function(h,d){var m=c+p.x,v=c+p.y+(d+1)*s;n.fillText(h,m,v)})},r}();var Cp=function(){function r(t){t===void 0&&(t={});var e=t.boxColor,n=t.lineWidth,o=t.label,a=t.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=n||2,this.label=o;var i={anchorPosition:yn.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new Ka(Object.assign({},i,a))}return r}();var su=function(){function r(t,e){e===void 0&&(e={}),this.box=new Qe(t),this.options=new Cp(e)}return r.prototype.draw=function(t){var e=at(t),n=this.options,o=n.boxColor,a=n.lineWidth,i=this.box,s=i.x,u=i.y,c=i.width,l=i.height;e.strokeStyle=o,e.lineWidth=a,e.strokeRect(s,u,c,l);var f=this.options.label;f&&new No([f],{x:s-a/2,y:u},this.options.drawLabelOptions).draw(t)},r}();function g0(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof Fe?n.score:gn(n)?n.detection.score:void 0,a=n instanceof Fe?n.box:gn(n)?n.detection.box:new Qe(n),i=o?""+Nr(o):void 0;new su(a,{label:i}).draw(r)})}function Xa(r){var t=be.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function Ep(r){return new Promise(function(t,e){if(r instanceof be.getEnv().Canvas||Xa(r))return t();function n(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}function o(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function Br(r){var t=be.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new Dt(r.naturalWidth,r.naturalHeight):r instanceof n?new Dt(r.videoWidth,r.videoHeight):new Dt(r.width,r.height)}function er(r){var t=r.width,e=r.height,n=be.getEnv().createCanvasElement,o=n();return o.width=t,o.height=e,o}function Lr(r,t){var e=be.getEnv().ImageData;if(!(r instanceof e)&&!Xa(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=t||Br(r),o=n.width,a=n.height,i=er({width:o,height:a});return r instanceof e?at(i).putImageData(r,0,0):at(i).drawImage(r,0,0,o,a),i}function kp(r,t){return j(this,void 0,void 0,function(){var e,n,o,a,i,s;return K(this,function(u){switch(u.label){case 0:return e=t||be.getEnv().createCanvasElement(),n=r.shape.slice(Tt(r)?1:0),o=n[0],a=n[1],i=n[2],s=G(function(){return r.as3D(o,a,i).toInt()}),[4,Fr.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function uu(r){var t=be.getEnv(),e=t.Image,n=t.Canvas,o=t.Video;return r instanceof e||r instanceof n||r instanceof o}function Sp(r,t,e){e===void 0&&(e=!1);var n=be.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=Br(r),s=t/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=er({width:t,height:t}),f=r instanceof a?r:Lr(r),p=Math.abs(u-c)/2,h=e&&u<c?p:0,d=e&&c<u?p:0;return at(l).drawImage(f,h,d,u,c),l}var tr=function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,a){if(An(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(Tt(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof be.getEnv().Canvas?o:Lr(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return vn(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return yp({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,G(function(){var o=vn(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof ke){var u=Tt(s)?s:s.expandDims();return u=wp(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=Do.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof be.getEnv().Canvas)return Fr.fromPixels(Sp(s,t,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=ot(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,t,t,3);return a})},r}();function Ce(r){return j(this,void 0,void 0,function(){var t,e,n;return K(this,function(o){switch(o.label){case 0:if(r instanceof tr)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=t.map(Or),n.forEach(function(a,i){if(!uu(a)&&!An(a)&&!Tt(a))throw typeof t[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+t[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(Tt(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return uu(a)&&Ep(a)}))];case 1:return o.sent(),[2,new tr(n,Array.isArray(r))]}})})}function Po(r,t){return j(this,void 0,void 0,function(){var e,n,o,a,i,s,u;return K(this,function(c){switch(c.label){case 0:return e=be.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,Ce(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof e?(i=a,[3,4]):[3,2];case 2:return[4,kp(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=at(n),u=t.map(function(l){return l instanceof Fe?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var f=l.x,p=l.y,h=l.width,d=l.height,m=er({width:h,height:d});return at(m).putImageData(s.getImageData(f,p,h,d),0,0),m})]}})})}function Mo(r,t){return j(this,void 0,void 0,function(){return K(this,function(e){if(!An(r)&&!Tt(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(Tt(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,G(function(){var n=r.shape.slice(Tt(r)?1:0),o=n[0],a=n[1],i=n[2],s=t.map(function(c){return c instanceof Fe?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,f=c.y,p=c.width,h=c.height;return Ws(r.as3D(o,a,i),[f,l,0],[h,p,i])});return u})]})})}function Ya(r,t){return j(this,void 0,void 0,function(){var e,n;return K(this,function(o){switch(o.label){case 0:return e=be.getEnv().fetch,[4,e(r,t)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function Rp(r){return j(this,void 0,void 0,function(){return K(this,function(t){switch(t.label){case 0:return[4,Ya(r)];case 1:return[2,t.sent().json()]}})})}function $a(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:e,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function Ip(r,t){return j(this,void 0,void 0,function(){var e,n,o,a;return K(this,function(i){switch(i.label){case 0:return e=$a(r,t),n=e.manifestUri,o=e.modelBaseUri,[4,Rp(n)];case 1:return a=i.sent(),[2,Ua.loadWeights(a,o)]}})})}function Dp(r,t,e){e===void 0&&(e=!1);var n=e?Br(t):t,o=n.width,a=n.height;return r.width=o,r.height=a,{width:o,height:a}}var Je=function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,o=e.objProp;return n[o]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof Hn})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof Hn)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,o=e.tensor;t.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,o=e.tensor,a=Ye(o.dataSync());o.dispose(),t.reassignParamFromPath(n,a)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return j(this,void 0,void 0,function(){return K(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return j(this,void 0,void 0,function(){var e;return K(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,Ip(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return j(this,void 0,void 0,function(){var e,n,o,a,i,s,u,c,l,f;return K(this,function(p){switch(p.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=be.getEnv().readFile,n=$a(t,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(h){return Promise.all(h.map(function(d){return e(d).then(function(m){return m.buffer})}))},s=Ua.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[p.sent().toString()]),[4,s(u,a)];case 2:return f=p.sent(),this.loadFromWeightMap(f),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+t);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=e.obj,o=e.objProp;if(!n||!o||!(n[o]instanceof ke))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:o}},r}();function vt(r,t,e){return G(function(){var n=Ro(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=oe(n,t.bias),n})}function Qa(r,t,e){return e===void 0&&(e=!1),G(function(){var n=we(e?oe($e(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):vt(r,t.conv0,[2,2])),o=vt(n,t.conv1,[1,1]),a=we(oe(n,o)),i=vt(a,t.conv2,[1,1]);return we(oe(n,oe(o,i)))})}function Oo(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),G(function(){var o=we(e?oe($e(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):vt(r,t.conv0,n?[2,2]:[1,1])),a=vt(o,t.conv1,[1,1]),i=we(oe(o,a)),s=vt(i,t.conv2,[1,1]),u=we(oe(o,oe(a,s))),c=vt(u,t.conv3,[1,1]);return we(oe(o,oe(a,oe(s,c))))})}function ct(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),G(function(){var o=oe($e(r,t.filters,[1,1],e),t.bias);return n?we(o):o})}function Ze(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function Nn(r,t){return function(e,n,o,a){var i=je(r(e*n*o*o),[o,o,e,n]),s=Re(r(n));return t.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function Wr(r,t){return function(e,n,o){var a=Yt(r(e*n),[e,n]),i=Re(r(n));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var cu=function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r}();function zr(r,t){return function(e,n,o){var a=je(r(9*e),[3,3,e,1]),i=je(r(e*n),[1,1,e,n]),s=Re(r(n));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new cu(a,i,s)}}function Ur(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),o=r(t+"/bias",1);return new cu(e,n,o)}}function lt(r,t){return function(e,n,o){var a=r[e];if(!Ao(a,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+a);return t.push({originalPath:e,paramPath:o||e}),a}}function et(r){var t=r;function e(o){var a=t.slice(0,o);return t=t.slice(o),a}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function Ja(r,t){var e=Nn(r,t),n=zr(r,t);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),f=n(s,s,u+"/conv1"),p=n(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:p}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),f=l.conv0,p=l.conv1,h=l.conv2,d=n(s,s,u+"/conv3");return{conv0:f,conv1:p,conv2:h,conv3:d}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function Tp(r){var t=[],e=et(r),n=e.extractWeights,o=e.getRemainingWeights,a=Ja(n,t).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function Za(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function ei(r,t){var e=lt(r,t),n=Za(e),o=Ur(e);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),p=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:p}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function Ap(r){var t=[],e=ei(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return Ze(r,t),{params:n,paramMappings:t}}var ti=function(r){Y(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return G(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=Zt(o,a).div(X(255)),s=Oo(i,n.dense0,!0);return s=Oo(s,n.dense1),s=Oo(s,n.dense2),s=Oo(s,n.dense3),s=pn(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return j(this,void 0,void 0,function(){var n;return K(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ce(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Ap(e)},t.prototype.extractParams=function(e){return Tp(e)},t}(Je);function xt(r,t){return G(function(){return oe(Ar(r,t.weights),t.bias)})}function Fp(r,t,e){var n=[],o=et(r),a=o.extractWeights,i=o.getRemainingWeights,s=Wr(a,n),u=s(t,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function Np(r){var t=[],e=lt(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return Ze(r,t),{params:o,paramMappings:t}}function ni(r){var t={},e={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?e:t;o[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var ri=function(r){Y(t,r);function t(e,n){var o=r.call(this,e)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return G(function(){var a=e instanceof tr?n.faceFeatureExtractor.forwardInput(e):e;return xt(a.as2D(a.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return Fp(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=ni(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Np(a)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=e.slice(0,e.length-a),s=e.slice(e.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},t}(Je);var Pp=["neutral","happy","sad","angry","fearful","disgusted","surprised"],Vr=function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);Pp.forEach(function(n,o){e[n]=t[o]})}return r.prototype.asSortedArray=function(){var t=this;return Pp.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r}();var Mp=function(r){Y(t,r);function t(e){return e===void 0&&(e=new ti),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return G(function(){return dt(n.runNet(e))})},t.prototype.forward=function(e){return j(this,void 0,void 0,function(){var n;return K(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ce(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return j(this,void 0,void 0,function(){var n,o,a,i,s=this;return K(this,function(u){switch(u.label){case 0:return[4,Ce(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(_e(o).map(function(c){return j(s,void 0,void 0,function(){var l;return K(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new Vr(c)}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(ri);function Op(r){return r.expressions instanceof Vr}function lu(r,t){var e={expressions:t};return Object.assign({},r,e)}function y0(r,t,e,n){e===void 0&&(e=.1);var o=Array.isArray(t)?t:[t];o.forEach(function(a){var i=a instanceof Vr?a:Op(a)?a.expressions:void 0;if(!i)throw new Error("drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof");var s=i.asSortedArray(),u=s.filter(function(f){return f.probability>e}),c=gn(a)?a.detection.box.bottomLeft:n||new se(0,0),l=new No(u.map(function(f){return f.expression+" ("+Nr(f.probability)+")"}),c);l.draw(r)})}function Gr(r){return gn(r)&&r.landmarks instanceof zt&&r.unshiftedLandmarks instanceof zt&&r.alignedRect instanceof Fe}function nr(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),o=n.align(),a=r.detection.imageDims,i=new Fe(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:t,alignedRect:i};return Object.assign({},r,s)}var Bp=function(){function r(t){t===void 0&&(t={});var e=t.drawLines,n=e===void 0?!0:e,o=t.drawPoints,a=o===void 0?!0:o,i=t.lineWidth,s=t.lineColor,u=t.pointSize,c=t.pointColor;this.drawLines=n,this.drawPoints=a,this.lineWidth=i||1,this.pointSize=u||2,this.lineColor=s||"rgba(0, 255, 255, 1)",this.pointColor=c||"rgba(255, 0, 255, 1)"}return r}();var Lp=function(){function r(t,e){e===void 0&&(e={}),this.faceLandmarks=t,this.options=new Bp(e)}return r.prototype.draw=function(t){var e=at(t),n=this.options,o=n.drawLines,a=n.drawPoints,i=n.lineWidth,s=n.lineColor,u=n.pointSize,c=n.pointColor;if(o&&this.faceLandmarks instanceof qa&&(e.strokeStyle=s,e.lineWidth=i,dn(e,this.faceLandmarks.getJawOutline()),dn(e,this.faceLandmarks.getLeftEyeBrow()),dn(e,this.faceLandmarks.getRightEyeBrow()),dn(e,this.faceLandmarks.getNose()),dn(e,this.faceLandmarks.getLeftEye(),!0),dn(e,this.faceLandmarks.getRightEye(),!0),dn(e,this.faceLandmarks.getMouth(),!0)),a){e.strokeStyle=c,e.fillStyle=c;var l=function(f){e.beginPath(),e.arc(f.x,f.y,u,0,2*Math.PI),e.fill()};this.faceLandmarks.positions.forEach(l)}},r}();function x0(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof zt?n:Gr(n)?n.landmarks:void 0;if(!o)throw new Error("drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof");new Lp(o).draw(r)})}function b0(r,t){var e=Nn(r,t),n=zr(r,t);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),f=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function Wp(r,t){var e=[],n=et(r),o=n.extractWeights,a=n.getRemainingWeights,i=b0(o,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),p=c(32,64,"entry_flow/reduction_block_0"),h=c(64,128,"entry_flow/reduction_block_1"),d={conv_in:f,reduction_block_0:p,reduction_block_1:h},m={};vn(t,0,1).forEach(function(b){m["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var v=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),x={reduction_block:v,separable_conv:g};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:e,params:{entry_flow:d,middle_flow:m,exit_flow:x}}}function w0(r,t){var e=lt(r,t),n=Za(e),o=Ur(e);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function zp(r,t){var e=[],n=w0(r,e),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},p={};vn(t,0,1).forEach(function(v){p["main_block_"+v]=s("middle_flow/main_block_"+v)});var h=i("exit_flow/reduction_block"),d=a("exit_flow/separable_conv"),m={reduction_block:h,separable_conv:d};return Ze(r,e),{params:{entry_flow:f,middle_flow:p,exit_flow:m},paramMappings:e}}function Up(r,t,e){return oe($e(r,t.filters,e,"same"),t.bias)}function fu(r,t,e){e===void 0&&(e=!0);var n=e?we(r):r;return n=vt(n,t.separable_conv0,[1,1]),n=vt(we(n),t.separable_conv1,[1,1]),n=Le(n,[3,3],[2,2],"same"),n=oe(n,Up(r,t.expansion_conv,[2,2])),n}function _0(r,t){var e=vt(we(r),t.separable_conv0,[1,1]);return e=vt(we(e),t.separable_conv1,[1,1]),e=vt(we(e),t.separable_conv2,[1,1]),e=oe(e,r),e}var Vp=function(r){Y(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return G(function(){var a=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=Zt(a,i).div(X(256)),u=we(Up(s,o.entry_flow.conv_in,[2,2]));return u=fu(u,o.entry_flow.reduction_block_0,!1),u=fu(u,o.entry_flow.reduction_block_1),vn(n._numMainBlocks,0,1).forEach(function(c){u=_0(u,o.middle_flow["main_block_"+c])}),u=fu(u,o.exit_flow.reduction_block),u=we(vt(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return j(this,void 0,void 0,function(){var n;return K(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ce(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return zp(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return Wp(e,this._numMainBlocks)},t}(Je);function Gp(r){var t=[],e=et(r),n=e.extractWeights,o=e.getRemainingWeights,a=Wr(n,t),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:i,gender:s}}}}function Hp(r){var t=[],e=lt(r,t);function n(a){var i=e(a+"/weights",2),s=e(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return Ze(r,t),{params:o,paramMappings:t}}var Bo=function(r){return r.FEMALE="female",r.MALE="male",r}(Bo||{});var qp=function(r){Y(t,r);function t(e){e===void 0&&(e=new Vp(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return G(function(){var a=e instanceof tr?n.faceFeatureExtractor.forwardInput(e):e,i=pn(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=xt(i,o.fc.age).as1D(),u=xt(i,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return G(function(){var o=n.runNet(e),a=o.age,i=o.gender;return{age:a,gender:dt(i)}})},t.prototype.forward=function(e){return j(this,void 0,void 0,function(){var n;return K(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ce(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return j(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return K(this,function(l){switch(l.label){case 0:return[4,Ce(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=_e(o.age),i=_e(o.gender),s=a.map(function(f,p){return{ageTensor:f,genderTensor:i[p]}}),[4,Promise.all(s.map(function(f){var p=f.ageTensor,h=f.genderTensor;return j(c,void 0,void 0,function(){var d,m,v,g,x;return K(this,function(b){switch(b.label){case 0:return[4,p.data()];case 1:return d=b.sent()[0],[4,h.data()];case 2:return m=b.sent()[0],v=m>.5,g=v?Bo.MALE:Bo.FEMALE,x=v?m:1-m,p.dispose(),h.dispose(),[2,{age:d,gender:g,genderProbability:x}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},t.prototype.extractClassifierParams=function(e){return Gp(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=ni(e),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Hp(a)},t.prototype.extractParams=function(e){var n=1539,o=e.slice(0,e.length-n),a=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},t}(Je);var oi=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return G(function(){var s=function(p,h){return ot([kt([68],p),kt([68],h)],1).as2D(1,136).as1D()},u=function(p,h){var d=a[p],m=d.width,v=d.height;return h(m,v)?Math.abs(m-v)/2:0},c=function(p){return u(p,function(h,d){return h<d})},l=function(p){return u(p,function(h,d){return d<h})},f=e.mul(kt([i,136],n)).sub(ot(Array.from(Array(i),function(p,h){return s(c(h),l(h))}))).div(ot(Array.from(Array(i),function(p,h){return s(a[h].width,a[h].height)})));return f})},t.prototype.forwardInput=function(e){var n=this;return G(function(){var o=n.runNet(e);return n.postProcess(o,e.inputSize,e.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},t.prototype.forward=function(e){return j(this,void 0,void 0,function(){var n;return K(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ce(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return j(this,void 0,void 0,function(){var n,o,a,i=this;return K(this,function(s){switch(s.label){case 0:return[4,Ce(e)];case 1:return n=s.sent(),o=G(function(){return _e(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return j(i,void 0,void 0,function(){var l,f,p,h,d;return K(this,function(m){switch(m.label){case 0:return p=(f=Array).from,[4,u.data()];case 1:return l=p.apply(f,[m.sent()]),h=l.filter(function(v,g){return Qs(g)}),d=l.filter(function(v,g){return!Qs(g)}),[2,new qa(Array(68).fill(0).map(function(v,g){return new se(h[g],d[g])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(ri);var ai=function(r){Y(t,r);function t(e){return e===void 0&&(e=new ti),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(oi);function jp(r){var t=[],e=ei(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return Ze(r,t),{params:n,paramMappings:t}}function Kp(r){var t=[],e=et(r),n=e.extractWeights,o=e.getRemainingWeights,a=Ja(n,t).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u}}}var Xp=function(r){Y(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return G(function(){var o=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=Zt(o,a).div(X(255)),s=Qa(i,n.dense0,!0);return s=Qa(s,n.dense1),s=Qa(s,n.dense2),s=pn(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return j(this,void 0,void 0,function(){var n;return K(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ce(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return jp(e)},t.prototype.extractParams=function(e){return Kp(e)},t}(Je);var Yp=function(r){Y(t,r);function t(e){return e===void 0&&(e=new Xp),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(oi);var oE=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t}(ai);function $p(r,t){return oe(Oe(r,t.weights),t.biases)}function pu(r,t,e,n,o){o===void 0&&(o="same");var a=t.conv,i=a.filters,s=a.bias,u=$e(r,i,e,o);return u=oe(u,s),u=$p(u,t.scale),n?we(u):u}function Qp(r,t){return pu(r,t,[1,1],!0)}function hu(r,t){return pu(r,t,[1,1],!1)}function ii(r,t){return pu(r,t,[2,2],!0,"valid")}function C0(r,t){function e(s,u,c){var l=r(s),f=l.length/(u*c*c);if(gp(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return G(function(){return It(je(l,[u,f,c,c]),[2,3,1,0])})}function n(s,u,c,l){var f=e(s,u,c),p=Re(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:p}}function o(s,u){var c=Re(r(s)),l=Re(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var f=n(s,u,c,l+"/conv"),p=o(u,l+"/scale");return{conv:f,scale:p}}function i(s,u,c,l,f){f===void 0&&(f=!1);var p=a((f?.5:1)*s,u,c,l+"/conv1"),h=a(s,u,c,l+"/conv2");return{conv1:p,conv2:h}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function Jp(r){var t=et(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=C0(e,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),p=s(36864,64,3,"conv64_down",!0),h=s(36864,64,3,"conv64_1"),d=s(36864,64,3,"conv64_2"),m=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),x=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),I=G(function(){return It(Yt(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var R={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:p,conv64_1:h,conv64_2:d,conv64_3:m,conv128_down:v,conv128_1:g,conv128_2:x,conv256_down:b,conv256_1:y,conv256_2:w,conv256_down_out:_,fc:I};return{params:R,paramMappings:o}}function E0(r,t){var e=lt(r,t);function n(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function Zp(r){var t=[],e=E0(r,t),n=e.extractConvLayerParams,o=e.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),p=o("conv64_3"),h=o("conv128_down"),d=o("conv128_1"),m=o("conv128_2"),v=o("conv256_down"),g=o("conv256_1"),x=o("conv256_2"),b=o("conv256_down_out"),y=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!mp(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:p,conv128_down:h,conv128_1:d,conv128_2:m,conv256_down:v,conv256_1:g,conv256_2:x,conv256_down_out:b,fc:y};return Ze(r,t),{params:w,paramMappings:t}}function Ut(r,t){var e=Qp(r,t.conv1);return e=hu(e,t.conv2),e=oe(e,r),e=we(e),e}function Lo(r,t){var e=ii(r,t.conv1);e=hu(e,t.conv2);var n=pn(r,2,2,"valid"),o=Ie(n.shape),a=n.shape[3]!==e.shape[3],i=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(i){var s=Jn(e.shape);s[1]=1;var u=Ie(s);e=Te([e,u],1);var c=Jn(e.shape);c[2]=1;var l=Ie(c);e=Te([e,l],2)}return n=a?Te([n,o],3):n,e=oe(n,e),e=we(e),e}var du=function(r){Y(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return G(function(){var o=e.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=Zt(o,a).div(X(256)),s=ii(i,n.conv32_down);s=Le(s,3,2,"valid"),s=Ut(s,n.conv32_1),s=Ut(s,n.conv32_2),s=Ut(s,n.conv32_3),s=Lo(s,n.conv64_down),s=Ut(s,n.conv64_1),s=Ut(s,n.conv64_2),s=Ut(s,n.conv64_3),s=Lo(s,n.conv128_down),s=Ut(s,n.conv128_1),s=Ut(s,n.conv128_2),s=Lo(s,n.conv256_down),s=Ut(s,n.conv256_1),s=Ut(s,n.conv256_2),s=Lo(s,n.conv256_down_out);var u=s.mean([1,2]),c=Ar(u,n.fc);return c})},t.prototype.forward=function(e){return j(this,void 0,void 0,function(){var n;return K(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ce(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return j(this,void 0,void 0,function(){var n,o,a,i=this;return K(this,function(s){switch(s.label){case 0:return[4,Ce(e)];case 1:return n=s.sent(),o=G(function(){return _e(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Zp(e)},t.prototype.extractParams=function(e){return Jp(e)},t}(Je);function vu(r,t){var e={descriptor:t};return Object.assign({},r,e)}function mu(r,t){var e={age:t};return Object.assign({},r,e)}function gu(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var Wo=function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,o=e.scaleFactor,a=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function k0(r,t){function e(u,c){var l=je(r(9*u),[3,3,u,1]),f=Re(r(u)),p=Re(r(u)),h=Re(r(u)),d=Re(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:p,batch_norm_mean:h,batch_norm_variance:d}}function n(u,c,l,f,p){var h=je(r(u*c*l*l),[l,l,u,c]),d=Re(r(c));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(p?"batch_norm_offset":"bias")}),{filters:h,bias:d}}function o(u,c,l,f){var p=n(u,c,l,f,!0),h=p.filters,d=p.bias;return{filters:h,batch_norm_offset:d}}function a(u,c,l){var f=e(u,l+"/depthwise_conv"),p=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:p}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),f=a(128,128,"mobilenetv1/conv_3"),p=a(128,256,"mobilenetv1/conv_4"),h=a(256,256,"mobilenetv1/conv_5"),d=a(256,512,"mobilenetv1/conv_6"),m=a(512,512,"mobilenetv1/conv_7"),v=a(512,512,"mobilenetv1/conv_8"),g=a(512,512,"mobilenetv1/conv_9"),x=a(512,512,"mobilenetv1/conv_10"),b=a(512,512,"mobilenetv1/conv_11"),y=a(512,1024,"mobilenetv1/conv_12"),w=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:p,conv_5:h,conv_6:d,conv_7:m,conv_8:v,conv_9:g,conv_10:x,conv_11:b,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),p=o(256,128,1,"prediction_layer/conv_4"),h=o(128,256,3,"prediction_layer/conv_5"),d=o(256,64,1,"prediction_layer/conv_6"),m=o(64,128,3,"prediction_layer/conv_7"),v=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),x=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),I=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),R=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),k=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),S=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),F=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),A={box_encoding_predictor:v,class_predictor:g},L={box_encoding_predictor:x,class_predictor:b},O={box_encoding_predictor:y,class_predictor:w},B={box_encoding_predictor:_,class_predictor:I},U={box_encoding_predictor:R,class_predictor:k},z={box_encoding_predictor:S,class_predictor:F};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:p,conv_5:h,conv_6:d,conv_7:m,box_predictor_0:A,box_predictor_1:L,box_predictor_2:O,box_predictor_3:B,box_predictor_4:U,box_predictor_5:z}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function eh(r){var t=[],e=et(r),n=e.extractWeights,o=e.getRemainingWeights,a=k0(n,t),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=Fa(n(5118*4),[1,5118,4]),f={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:t}}function S0(r,t){var e=lt(r,t);function n(c,l,f){var p=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),h=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:p,batch_norm_offset:h}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",p=l+"/depthwise_conv",h=l+"/pointwise_conv",d=e(f+"/depthwise_weights",4,p+"/filters"),m=e(f+"/BatchNorm/gamma",1,p+"/batch_norm_scale"),v=e(f+"/BatchNorm/beta",1,p+"/batch_norm_offset"),g=e(f+"/BatchNorm/moving_mean",1,p+"/batch_norm_mean"),x=e(f+"/BatchNorm/moving_variance",1,p+"/batch_norm_variance");return{depthwise_conv:{filters:d,batch_norm_scale:m,batch_norm_offset:v,batch_norm_mean:g,batch_norm_variance:x},pointwise_conv:n("MobilenetV1",c,h)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var f=e(c+"/weights",4,l+"/filters"),p=e(c+"/biases",1,l+"/bias");return{filters:f,bias:p}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function th(r){var t=[],e=S0(r,t),n=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,a=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!An(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return Ze(r,t),{params:i,paramMappings:t}}function At(r,t,e){return G(function(){var n=$e(r,t.filters,e,"same");return n=oe(n,t.batch_norm_offset),Co(n,0,6)})}var R0=.0010000000474974513;function I0(r,t,e){return G(function(){var n=So(r,t.filters,e,"same");return n=Ms(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,R0),Co(n,0,6)})}function D0(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function nh(r,t){return G(function(){var e=null,n=At(r,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(a,i){var s=i+1,u=D0(s);n=I0(n,a.depthwise_conv,u),n=At(n,a.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function rh(r,t,e,n,o){var a=r.shape[0],i=Math.min(e,a),s=t.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var f=l.score,p=c.length-1;p>=0;--p){var h=T0(r,l.boxIndex,c[p]);if(h!==0&&(l.score*=u(h),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function T0(r,t,e){var n=r.arraySync(),o=Math.min(n[t][0],n[t][2]),a=Math.min(n[t][1],n[t][3]),i=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),f=Math.max(n[e][1],n[e][3]),p=(i-o)*(s-a),h=(l-u)*(f-c);if(p<=0||h<=0)return 0;var d=Math.max(o,u),m=Math.max(a,c),v=Math.min(i,l),g=Math.min(s,f),x=Math.max(v-d,0)*Math.max(g-m,0);return x/(p+h-x)}function A0(r){var t=_e(It(r,[1,0])),e=[Se(t[2],t[0]),Se(t[3],t[1])],n=[oe(t[0],Rt(e[0],X(2))),oe(t[1],Rt(e[1],X(2)))];return{sizes:e,centers:n}}function F0(r,t){var e=A0(r),n=e.sizes,o=e.centers,a=_e(It(t,[1,0])),i=Rt(Oe(Ba(Rt(a[2],X(5))),n[0]),X(2)),s=oe(Oe(Rt(a[0],X(10)),n[0]),o[0]),u=Rt(Oe(Ba(Rt(a[3],X(5))),n[1]),X(2)),c=oe(Oe(Rt(a[1],X(10)),n[1]),o[1]);return It(ot([Se(s,i),Se(c,u),oe(s,i),oe(c,u)]),[1,0])}function oh(r,t,e){return G(function(){var n=r.shape[0],o=F0(ht(Gn(e.extra_dim,[n,1,1]),[-1,4]),ht(r,[-1,4]));o=ht(o,[n,o.shape[0]/n,4]);var a=Ps(Mt(t,[0,0,1],[-1,-1,-1])),i=Mt(a,[0,0,0],[-1,-1,1]);i=ht(i,[n,i.shape[1]]);var s=_e(o),u=_e(i);return{boxes:s,scores:u}})}function or(r,t){return G(function(){var e=r.shape[0],n=ht(ct(r,t.box_encoding_predictor),[e,-1,1,4]),o=ht(ct(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function ah(r,t,e){return G(function(){var n=At(r,e.conv_0,[1,1]),o=At(n,e.conv_1,[2,2]),a=At(o,e.conv_2,[1,1]),i=At(a,e.conv_3,[2,2]),s=At(i,e.conv_4,[1,1]),u=At(s,e.conv_5,[2,2]),c=At(u,e.conv_6,[1,1]),l=At(c,e.conv_7,[2,2]),f=or(t,e.box_predictor_0),p=or(r,e.box_predictor_1),h=or(o,e.box_predictor_2),d=or(i,e.box_predictor_3),m=or(u,e.box_predictor_4),v=or(l,e.box_predictor_5),g=Te([f.boxPredictionEncoding,p.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,m.boxPredictionEncoding,v.boxPredictionEncoding],1),x=Te([f.classPrediction,p.classPrediction,h.classPrediction,d.classPrediction,m.classPrediction,v.classPrediction],1);return{boxPredictions:g,classPredictions:x}})}var Pn=function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}();var si=function(r){Y(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return G(function(){var o=e.toBatchTensor(512,!1).toFloat(),a=Se(Oe(o,X(.007843137718737125)),X(1)),i=nh(a,n.mobilenetv1),s=ah(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return oh(u,c,n.output_layer)})},t.prototype.forward=function(e){return j(this,void 0,void 0,function(){var n;return K(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ce(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),j(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,p,h,d,m,v,g,x,b,y,w,_,I,R;return K(this,function(k){switch(k.label){case 0:return o=new Pn(n),a=o.maxResults,i=o.minConfidence,[4,Ce(e)];case 1:for(s=k.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],p=l[0],h=1;h<c.length;h++)c[h].dispose(),l[h].dispose();return v=(m=Array).from,[4,p.data()];case 2:return d=v.apply(m,[k.sent()]),g=.5,x=rh(f,d,a,g,i),b=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/b.width,_=y/b.height,I=f.arraySync(),R=x.map(function(S){var F=[Math.max(0,I[S][0]),Math.min(1,I[S][2])].map(function(z){return z*_}),A=F[0],L=F[1],O=[Math.max(0,I[S][1]),Math.min(1,I[S][3])].map(function(z){return z*w}),B=O[0],U=O[1];return new Fe(d[S],new Mr(B,A,U-B,L-A),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),p.dispose(),[2,R]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return th(e)},t.prototype.extractParams=function(e){return eh(e)},t}(Je);var _k=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t}(si);var ih=.4,sh=[new se(.738768,.874946),new se(2.42204,2.65704),new se(4.30971,7.04493),new se(10.246,4.59428),new se(12.6868,11.8741)],uh=[new se(1.603231,2.094468),new se(6.041143,7.080126),new se(2.882459,3.518061),new se(4.266906,5.178857),new se(9.041765,10.66308)],ch=[117.001,114.697,97.404],lh="tiny_yolov2_model",fh="tiny_yolov2_separable_conv_model";var ui=function(r){return typeof r=="number"};function ph(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!ui(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return ui(t.x)&&ui(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(ui)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function Hr(r){return G(function(){var t=Oe(r,X(.10000000149011612));return oe(we(Se(r,t)),t)})}function xn(r,t){return G(function(){var e=fn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=$e(e,t.conv.filters,[1,1],"valid"),e=Se(e,t.bn.sub),e=Oe(e,t.bn.truediv),e=oe(e,t.conv.bias),Hr(e)})}function bn(r,t){return G(function(){var e=fn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Ro(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=oe(e,t.bias),Hr(e)})}function N0(r,t){var e=Nn(r,t);function n(i,s){var u=Re(r(i)),c=Re(r(i));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=e(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=zr(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function hh(r,t,e,n){var o=et(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=N0(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,p;if(t.withSeparableConvs){var h=n[0],d=n[1],m=n[2],v=n[3],g=n[4],x=n[5],b=n[6],y=n[7],w=n[8],_=t.isFirstLayerConv2d?c(h,d,3,"conv0"):f(h,d,"conv0"),I=f(d,m,"conv1"),R=f(m,v,"conv2"),k=f(v,g,"conv3"),S=f(g,x,"conv4"),F=f(x,b,"conv5"),A=y?f(b,y,"conv6"):void 0,L=w?f(y,w,"conv7"):void 0,O=c(w||y||b,5*e,1,"conv8");p={conv0:_,conv1:I,conv2:R,conv3:k,conv4:S,conv5:F,conv6:A,conv7:L,conv8:O}}else{var h=n[0],d=n[1],m=n[2],v=n[3],g=n[4],x=n[5],b=n[6],y=n[7],w=n[8],_=l(h,d,"conv0"),I=l(d,m,"conv1"),R=l(m,v,"conv2"),k=l(v,g,"conv3"),S=l(g,x,"conv4"),F=l(x,b,"conv5"),A=l(b,y,"conv6"),L=l(y,w,"conv7"),O=c(w,5*e,1,"conv8");p={conv0:_,conv1:I,conv2:R,conv3:k,conv4:S,conv5:F,conv6:A,conv7:L,conv8:O}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:p,paramMappings:s}}function P0(r,t){var e=lt(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=Ur(e);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function dh(r,t){var e=[],n=P0(r,e),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return Ze(r,e),{params:s,paramMappings:e}}var ar=function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}();var ci=function(r){Y(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return ph(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var o=xn(e,n.conv0);return o=Le(o,[2,2],[2,2],"same"),o=xn(o,n.conv1),o=Le(o,[2,2],[2,2],"same"),o=xn(o,n.conv2),o=Le(o,[2,2],[2,2],"same"),o=xn(o,n.conv3),o=Le(o,[2,2],[2,2],"same"),o=xn(o,n.conv4),o=Le(o,[2,2],[2,2],"same"),o=xn(o,n.conv5),o=Le(o,[2,2],[1,1],"same"),o=xn(o,n.conv6),o=xn(o,n.conv7),ct(o,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var o=this.config.isFirstLayerConv2d?Hr(ct(e,n.conv0,"valid",!1)):bn(e,n.conv0);return o=Le(o,[2,2],[2,2],"same"),o=bn(o,n.conv1),o=Le(o,[2,2],[2,2],"same"),o=bn(o,n.conv2),o=Le(o,[2,2],[2,2],"same"),o=bn(o,n.conv3),o=Le(o,[2,2],[2,2],"same"),o=bn(o,n.conv4),o=Le(o,[2,2],[2,2],"same"),o=bn(o,n.conv5),o=Le(o,[2,2],[1,1],"same"),o=n.conv6?bn(o,n.conv6):o,o=n.conv7?bn(o,n.conv7):o,ct(o,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return G(function(){var i=e.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?Zt(i,o.config.meanRgb):i,i=i.div(X(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},t.prototype.forward=function(e,n){return j(this,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ce(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),j(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,p,h,d,m,v,g,x=this;return K(this,function(b){switch(b.label){case 0:return o=new ar(n),a=o.inputSize,i=o.scoreThreshold,[4,Ce(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,a)];case 2:return u=b.sent(),c=G(function(){return _e(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return f=b.sent(),u.dispose(),c.dispose(),p=f.map(function(y){return y.box}),h=f.map(function(y){return y.score}),d=f.map(function(y){return y.classScore}),m=f.map(function(y){return x.config.classes[y.label]}),v=mn(p.map(function(y){return y.rescale(a)}),h,this.config.iouThreshold,!0),g=v.map(function(y){return new Ga(h[y],d[y],m[y],p[y],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return dh(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return hh(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,o){return j(this,void 0,void 0,function(){var a,i,s,u,c,l,f,p,h,d,m,v,g,x,b,y,w,_,I,R,k,S,F,A,L,O,B,U,z,W=this;return K(this,function(H){switch(H.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=e.shape[1],f=this.config.anchors.length,p=G(function(){var q=e.reshape([l,l,f,W.boxEncodingSize]),$=q.slice([0,0,0,0],[l,l,f,4]),te=q.slice([0,0,0,4],[l,l,f,1]),re=W.withClassScores?dt(q.slice([0,0,0,5],[l,l,f,W.config.classes.length]),3):X(0);return[$,te,re]}),h=p[0],d=p[1],m=p[2],v=[],[4,d.array()];case 1:return g=H.sent(),[4,h.array()];case 2:x=H.sent(),b=0,H.label=3;case 3:if(!(b<l))return[3,12];y=0,H.label=4;case 4:if(!(y<l))return[3,11];w=0,H.label=5;case 5:return w<f?(_=Ha(g[b][y][w][0]),!o||_>o?(I=(y+Ha(x[b][y][w][0]))/l*u,R=(b+Ha(x[b][y][w][1]))/l*c,k=Math.exp(x[b][y][w][2])*this.config.anchors[w].x/l*u,S=Math.exp(x[b][y][w][3])*this.config.anchors[w].y/l*c,F=I-k/2,A=R-S/2,L={row:b,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(m,L)]:[3,7]):[3,9]):[3,10];case 6:return z=H.sent(),[3,8];case 7:z={classScore:1,label:0},H.label=8;case 8:O=z,B=O.classScore,U=O.label,v.push(qe({box:new Zn(F,A,F+k,A+S),score:_,classScore:_*B,label:U},L)),H.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return b++,[3,3];case 12:return h.dispose(),d.dispose(),m.dispose(),[2,v]}})})},t.prototype.extractPredictedClass=function(e,n){return j(this,void 0,void 0,function(){var o,a,i,s;return K(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(Je);var yu=function(r){Y(t,r);function t(e){e===void 0&&(e=!0);var n=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:ih,classes:["face"]},e?{anchors:uh,meanRgb:ch}:{anchors:sh,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return j(this,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new Fe(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?fh:lh},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(ci);var zo=function(r){Y(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(ar);var en=function(){function r(){}return r.prototype.then=function(t){return j(this,void 0,void 0,function(){var e;return K(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return j(this,void 0,void 0,function(){return K(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r}();function ir(r,t,e,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),j(this,void 0,void 0,function(){var a,i,s,u,c;return K(this,function(l){switch(l.label){case 0:return a=r.map(function(f){return Gr(f)?o(f):f.detection}),s=n,s?[3,5]:t instanceof ke?[4,Mo(t,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,Po(t,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(f){return f instanceof ke&&f.dispose()}),[2,c]}})})}function qr(r,t,e,n,o){return j(this,void 0,void 0,function(){var a=this;return K(this,function(i){return[2,ir([r],t,function(s){return j(a,void 0,void 0,function(){return K(this,function(u){return[2,e(s[0])]})})},n,o)]})})}function vh(r){return G(function(){return ot(_e(r,3).reverse(),3)})}var Uo=2,sr=12;function M0(r,t){var e=Nn(r,t),n=Wr(r,t);function o(c,l){var f=Re(r(c));return t.push({paramPath:l}),f}function a(c,l,f){f===void 0&&(f=!1);var p=e(c[0],c[1],3,l+"/conv1"),h=o(c[1],l+"/prelu1_alpha"),d=e(c[1],c[2],3,l+"/conv2"),m=o(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],f?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:p,prelu1_alpha:h,conv2:d,prelu2_alpha:m,conv3:v,prelu3_alpha:g}}function i(){var c=a([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return qe(qe({},c),{conv4_1:l,conv4_2:f})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),p=n(128,2,"rnet/fc2_1"),h=n(128,4,"rnet/fc2_2");return qe(qe({},c),{fc1:l,prelu4_alpha:f,fc2_1:p,fc2_2:h})}function u(){var c=a([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),p=n(1152,256,"onet/fc1"),h=o(256,"onet/prelu5_alpha"),d=n(256,2,"onet/fc2_1"),m=n(256,4,"onet/fc2_2"),v=n(256,10,"onet/fc2_3");return qe(qe({},c),{conv4:l,prelu4_alpha:f,fc1:p,prelu5_alpha:h,fc2_1:d,fc2_2:m,fc2_3:v})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function mh(r){var t=et(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],a=M0(e,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),f=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function O0(r,t){var e=lt(r,t);function n(l){var f=e(l+"/weights",4,l+"/filters"),p=e(l+"/bias",1);return{filters:f,bias:p}}function o(l){var f=e(l+"/weights",2),p=e(l+"/bias",1);return{weights:f,bias:p}}function a(l){return e(l,1)}function i(l){var f=n(l+"/conv1"),p=a(l+"/prelu1_alpha"),h=n(l+"/conv2"),d=a(l+"/prelu2_alpha"),m=n(l+"/conv3"),v=a(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:p,conv2:h,prelu2_alpha:d,conv3:m,prelu3_alpha:v}}function s(){var l=i("pnet"),f=n("pnet/conv4_1"),p=n("pnet/conv4_2");return qe(qe({},l),{conv4_1:f,conv4_2:p})}function u(){var l=i("rnet"),f=o("rnet/fc1"),p=a("rnet/prelu4_alpha"),h=o("rnet/fc2_1"),d=o("rnet/fc2_2");return qe(qe({},l),{fc1:f,prelu4_alpha:p,fc2_1:h,fc2_2:d})}function c(){var l=i("onet"),f=n("onet/conv4"),p=a("onet/prelu4_alpha"),h=o("onet/fc1"),d=a("onet/prelu5_alpha"),m=o("onet/fc2_1"),v=o("onet/fc2_2"),g=o("onet/fc2_3");return qe(qe({},l),{conv4:f,prelu4_alpha:p,fc1:h,prelu5_alpha:d,fc2_1:m,fc2_2:v,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function gh(r){var t=[],e=O0(r,t),n=e.extractPNetParams,o=e.extractRNetParams,a=e.extractONetParams,i=n(),s=o(),u=a();return Ze(r,t),{params:{pnet:i,rnet:s,onet:u},paramMappings:t}}function Vo(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function yh(r,t,e){for(var n=e[0],o=e[1],a=sr/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(t,u)),s=s*t,u+=1;return i}var jr=function(r){Y(t,r);function t(e,n,o,a){return r.call(this,{left:e,top:n,right:o,bottom:a},!0)||this}return t}(Qe);function li(r){return G(function(){return Oe(Se(r,X(127.5)),X(.0078125))})}function wn(r,t){return G(function(){return oe(we(r),Oe(t,Eo(we(Eo(r)))))})}function Kr(r,t,e){return e===void 0&&(e=!1),G(function(){var n=ct(r,t.conv1,"valid");return n=wn(n,t.prelu1_alpha),n=Le(n,e?[2,2]:[3,3],[2,2],"same"),n=ct(n,t.conv2,"valid"),n=wn(n,t.prelu2_alpha),n=e?n:Le(n,[3,3],[2,2],"valid"),n=ct(n,t.conv3,"valid"),n=wn(n,t.prelu3_alpha),n})}function xh(r,t){return G(function(){var e=Kr(r,t,!0),n=ct(e,t.conv4_1,"valid"),o=it($n(n,3),3),a=dt(Se(n,o),3),i=ct(e,t.conv4_2,"valid");return{prob:a,regions:i}})}function B0(r,t){return G(function(){var e=Vo(t,r.shape.slice(1)),n=e.height,o=e.width,a=Do.resizeBilinear(r,[n,o]),i=li(a);return It(i,[0,2,1,3])})}function L0(r,t,e,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new se(s,i));var u=o.map(function(c){var l=new Zn(Math.round((c.y*Uo+1)/e),Math.round((c.x*Uo+1)/e),Math.round((c.y*Uo+sr)/e),Math.round((c.x*Uo+sr)/e)),f=a[c.y][c.x],p=t.arraySync(),h=new jr(p[c.y][c.x][0],p[c.y][c.x][1],p[c.y][c.x][2],p[c.y][c.x][3]);return{cell:l,score:f,region:h}});return u}function bh(r,t,e,n,o){o.stage1=[];var a=t.map(function(p){return G(function(){var h={scale:p},d=B0(r,p),m=Date.now(),v=xh(d,n),g=v.prob,x=v.regions;h.pnet=Date.now()-m;var b=_e(_e(g,3)[1])[0],y=_e(x)[0];return{scoresTensor:b,regionsTensor:y,scale:p,statsForScale:h}})}),i=a.map(function(p){var h=p.scoresTensor,d=p.regionsTensor,m=p.scale,v=p.statsForScale,g=L0(h,d,m,e);if(h.dispose(),d.dispose(),!g.length)return o.stage1.push(v),[];var x=Date.now(),b=mn(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return v.nms=Date.now()-x,v.numBoxes=b.length,o.stage1.push(v),b.map(function(y){return g[y]})}),s=i.reduce(function(p,h){return p.concat(h)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=mn(s.map(function(p){return p.cell}),s.map(function(p){return p.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(p){return s[p].score}),u=f.map(function(p){return s[p]}).map(function(p){var h=p.cell,d=p.region;return new Zn(h.left+d.left*h.width,h.top+d.top*h.height,h.right+d.right*h.width,h.bottom+d.bottom*h.height).toSquare().round()})}return{boxes:u,scores:c}}function fi(r,t,e){var n=e.width,o=e.height;return j(this,void 0,void 0,function(){var a,i,s,u=this;return K(this,function(c){switch(c.label){case 0:return a=at(r),[4,Promise.all(t.map(function(l){return j(u,void 0,void 0,function(){var f,p,h,d,m,v,g,x;return K(this,function(b){return f=l.padAtBorders(r.height,r.width),p=f.y,h=f.ey,d=f.x,m=f.ex,v=d-1,g=p-1,x=a.getImageData(v,g,m-v,h-g),[2,be.isNodejs()?Lr(x):createImageBitmap(x)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var f=er({width:n,height:o}),p=at(f);p.drawImage(l,0,0,n,o);for(var h=p.getImageData(0,0,n,o).data,d=[],m=0;m<h.length;m+=4)d.push(h[m+2]),d.push(h[m+1]),d.push(h[m]);s.push(d)}),[2,s.map(function(l){var f=G(function(){var p=It(je(l,[1,n,o,3]),[0,2,1,3]).toFloat();return li(p)});return f})]}})})}function wh(r,t){return G(function(){var e=Kr(r,t),n=ht(e,[e.shape[0],t.fc1.weights.shape[0]]),o=xt(n,t.fc1),a=wn(o,t.prelu4_alpha),i=xt(a,t.fc2_1),s=it($n(i,1),1),u=dt(Se(i,s),1),c=xt(a,t.fc2_2),l=_e(u,1)[1];return{scores:l,regions:c}})}function _h(r,t,e,n,o){return j(this,void 0,void 0,function(){var a,i,s,u,c,l,f,p,h,d,m,v,g,x;return K(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,fi(r,t,{width:24,height:24})];case 1:return i=b.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(y){var w=wh(y,n);return y.dispose(),w}),o.stage2_rnet=Date.now()-a,u=s.length>1?Te(s.map(function(y){return y.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[b.sent()]),u.dispose(),p=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),h=p.map(function(y){return t[y]}),d=p.map(function(y){return c[y]}),m=[],v=[],h.length>0&&(a=Date.now(),g=mn(h,d,.7),o.stage2_nms=Date.now()-a,x=g.map(function(y){var w=s[p[y]].regions.arraySync();return new jr(w[0][0],w[0][1],w[0][2],w[0][3])}),v=g.map(function(y){return d[y]}),m=g.map(function(y,w){return h[y].calibrate(x[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:m,scores:v}]}})})}function Ch(r,t){return G(function(){var e=Kr(r,t);e=Le(e,[2,2],[2,2],"same"),e=ct(e,t.conv4,"valid"),e=wn(e,t.prelu4_alpha);var n=ht(e,[e.shape[0],t.fc1.weights.shape[0]]),o=xt(n,t.fc1),a=wn(o,t.prelu5_alpha),i=xt(a,t.fc2_1),s=it($n(i,1),1),u=dt(Se(i,s),1),c=xt(a,t.fc2_2),l=xt(a,t.fc2_3),f=_e(u,1)[1];return{scores:f,regions:c,points:l}})}function Eh(r,t,e,n,o){return j(this,void 0,void 0,function(){var a,i,s,u,c,l,f,p,h,d,m,v,g,x,b;return K(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,fi(r,t,{width:48,height:48})];case 1:return i=y.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(w){var _=Ch(w,n);return w.dispose(),_}),o.stage3_onet=Date.now()-a,u=s.length>1?Te(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[y.sent()]),u.dispose(),p=c.map(function(w,_){return{score:w,idx:_}}).filter(function(w){return w.score>e}).map(function(w){var _=w.idx;return _}),h=p.map(function(w){var _=s[w].regions.arraySync();return new jr(_[0][0],_[0][1],_[0][2],_[0][3])}),d=p.map(function(w,_){return t[w].calibrate(h[_])}),m=p.map(function(w){return c[w]}),v=[],g=[],x=[],d.length>0&&(a=Date.now(),b=mn(d,m,.7,!1),o.stage3_nms=Date.now()-a,v=b.map(function(w){return d[w]}),g=b.map(function(w){return m[w]}),x=b.map(function(w,_){return Array(5).fill(0).map(function(I,R){var k=s[w].points.arraySync();return new se(k[0][R]*(v[_].width+1)+v[_].left,k[0][R+5]*(v[_].height+1)+v[_].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:v,scores:g,points:x}]}})})}var xu=function(r){Y(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return j(this,void 0,void 0,function(){return K(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return j(this,void 0,void 0,function(){return K(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),j(this,void 0,void 0,function(){var o,a,i,s,u,c,l,f,p,h,d,m,v,g,x,b,y,w,_,I,R;return K(this,function(k){switch(k.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=e.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=G(function(){return vh(it(Fr.fromPixels(a)).toFloat())}),c=function(S){return u.dispose(),i.total=Date.now()-s,S},l=u.shape.slice(1),f=l[0],p=l[1],h=new Wo(n),d=h.minFaceSize,m=h.scaleFactor,v=h.maxNumScales,g=h.scoreThresholds,x=h.scaleSteps,b=(x||yh(d,m,[f,p])).filter(function(S){var F=Vo(S,[f,p]);return Math.min(F.width,F.height)>sr}).slice(0,v),i.scales=b,i.pyramid=b.map(function(S){return Vo(S,[f,p])}),y=Date.now(),[4,bh(u,b,g[0],o.pnet,i)];case 1:return w=k.sent(),i.total_stage1=Date.now()-y,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,_h(a,w.boxes,g[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return _=k.sent(),i.total_stage2=Date.now()-y,_.boxes.length?(i.stage3_numInputBoxes=_.boxes.length,y=Date.now(),[4,Eh(a,_.boxes,g[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return I=k.sent(),i.total_stage3=Date.now()-y,R=I.boxes.map(function(S,F){return nr(Fn({},new Fe(I.scores[F],new Mr(S.left/p,S.top/f,S.width/p,S.height/f),{height:f,width:p})),new _p(I.points[F].map(function(A){return A.sub(new se(S.left,S.top)).div(new se(S.width,S.height))}),{width:S.width,height:S.height}))}),[2,c({results:R,stats:i})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),j(this,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ce(e)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),j(this,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ce(e)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return gh(e)},t.prototype.extractParams=function(e){return mh(e)},t}(Je);var kh=.4,Sh=[new se(1.603231,2.094468),new se(6.041143,7.080126),new se(2.882459,3.518061),new se(4.266906,5.178857),new se(9.041765,10.66308)],Rh=[117.001,114.697,97.404];var bu=function(r){Y(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:kh,classes:["face"],anchors:Sh,meanRgb:Rh,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return j(this,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return[4,this.detect(e,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new Fe(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(ci);var Ne={ssdMobilenetv1:new si,tinyFaceDetector:new bu,tinyYolov2:new yu,mtcnn:new xu,faceLandmark68Net:new ai,faceLandmark68TinyNet:new Yp,faceRecognitionNet:new du,faceExpressionNet:new Mp,ageGenderNet:new qp};var Ih=function(r){Y(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(en);var Go=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return j(this,void 0,void 0,function(){var e,n,o=this;return K(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,ir(e,this.input,function(i){return j(o,void 0,void 0,function(){return K(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return Ne.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){return lu(i,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new qo(this,this.input)},t}(Ih);var Ho=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return j(this,void 0,void 0,function(){var e,n;return K(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,qr(e,this.input,function(a){return Ne.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,lu(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new jo(this,this.input)},t}(Ih);var Xr=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new $r(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Jr(this,this.input)},t}(Go);var Yr=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Qr(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Zr(this,this.input)},t}(Ho);var Dh=function(r){Y(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.extractedFaces=o,a}return t}(en);var qo=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return j(this,void 0,void 0,function(){var e,n,o=this;return K(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,ir(e,this.input,function(i){return j(o,void 0,void 0,function(){return K(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return Ne.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,e.map(function(i,s){var u=n[s],c=u.age,l=u.gender,f=u.genderProbability;return mu(gu(i,l,f),c)})]}})})},t.prototype.withFaceExpressions=function(){return new Go(this,this.input)},t}(Dh);var jo=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return j(this,void 0,void 0,function(){var e,n,o,a,i;return K(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,qr(e,this.input,function(u){return Ne.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,mu(gu(e,a,i),o)]}})})},t.prototype.withFaceExpressions=function(){return new Ho(this,this.input)},t}(Dh);var $r=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Xr(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Jr(this,this.input)},t}(qo);var Qr=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Yr(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Zr(this,this.input)},t}(jo);var Th=function(r){Y(t,r);function t(e,n){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o}return t}(en);var Jr=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return j(this,void 0,void 0,function(){var e,n;return K(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,ir(e,this.input,function(a){return Promise.all(a.map(function(i){return Ne.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return vu(e[i],a)})]}})})},t.prototype.withFaceExpressions=function(){return new Xr(this,this.input)},t.prototype.withAgeAndGender=function(){return new $r(this,this.input)},t}(Th);var Zr=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return j(this,void 0,void 0,function(){var e,n;return K(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,qr(e,this.input,function(a){return Ne.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,vu(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new Yr(this,this.input)},t.prototype.withAgeAndGender=function(){return new Qr(this,this.input)},t}(Th);var Ah=function(r){Y(t,r);function t(e,n,o){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?Ne.faceLandmark68TinyNet:Ne.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(en);var Fh=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return j(this,void 0,void 0,function(){var e,n,o,a,i,s=this;return K(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof ke?[4,Mo(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,Po(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof ke&&c.dispose()}),[2,e.map(function(c,l){return nr(c,i[l])})]}})})},t.prototype.withFaceExpressions=function(){return new Xr(this,this.input)},t.prototype.withAgeAndGender=function(){return new $r(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Jr(this,this.input)},t}(Ah);var Nh=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return j(this,void 0,void 0,function(){var e,n,o,a,i;return K(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof ke?[4,Mo(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,Po(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof ke&&u.dispose()}),[2,nr(e,i)]}})})},t.prototype.withFaceExpressions=function(){return new Yr(this,this.input)},t.prototype.withAgeAndGender=function(){return new Qr(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Zr(this,this.input)},t}(Ah);var Ph=function(r){Y(t,r);function t(e,n){n===void 0&&(n=new Pn);var o=r.call(this)||this;return o.input=e,o.options=n,o}return t}(en);var Mh=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return j(this,void 0,void 0,function(){var e,n,o,a;return K(this,function(i){switch(i.label){case 0:return e=this,n=e.input,o=e.options,o instanceof Wo?[4,Ne.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof zo?function(s){return Ne.tinyFaceDetector.locateFaces(s,o)}:o instanceof Pn?function(s){return Ne.ssdMobilenetv1.locateFaces(s,o)}:o instanceof ar?function(s){return Ne.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return j(e,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return Fn({},i)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Fh(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Go(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new qo(this.runAndExtendWithFaceDetections(),this.input)},t}(Ph);var Oh=function(r){Y(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return j(this,void 0,void 0,function(){var e,n;return K(this,function(o){switch(o.label){case 0:return[4,new Mh(this.input,this.options)];case 1:return e=o.sent(),n=e[0],e.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return j(e,void 0,void 0,function(){var o;return K(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?Fn({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Nh(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Ho(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new jo(this.runAndExtendWithFaceDetection(),this.input)},t}(Ph);function wu(r,t){return t===void 0&&(t=new Pn),new Oh(r,t)}function Bh(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}var hD=function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof Fo)return i;if(i instanceof Float32Array)return new Fo(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new Fo(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return Bh(n,t)}).reduce(function(n,o){return n+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new Zs(a,e.computeMeanDistance(t,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Zs("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return Fo.fromJSON(n)});return new r(e,t.distanceThreshold)},r}();function _u(r,t){var e=new Dt(t.width,t.height),n=e.width,o=e.height;if(n<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:n,height:o}));if(Array.isArray(r))return r.map(function(s){return _u(s,{width:n,height:o})});if(Gr(r)){var a=r.detection.forSize(n,o),i=r.unshiftedLandmarks.forSize(a.box.width,a.box.height);return nr(Fn(r,a),i)}return gn(r)?Fn(r,r.detection.forSize(n,o)):r instanceof zt||r instanceof Fe?r.forSize(n,o):r}var z0=["determinateSpinner"];function U0(r,t){if(r&1&&(bi(),qt(0,"svg",11),hr(1,"circle",12),jt()),r&2){let e=zu();fr("viewBox",e._viewBox()),Ft(),Mn("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),fr("r",e._circleRadius())}}var V0=new Su("mat-progress-spinner-default-options",{providedIn:"root",factory:G0});function G0(){return{diameter:Lh}}var Lh=100,H0=10,Wh=(()=>{class r{_elementRef=Ko(Tu);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=Ko(Au,{optional:!0}),n=Ko(V0);this._noopAnimations=e==="NoopAnimations"&&!!n&&!n._forceAnimations,this.mode=this._elementRef.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",n&&(n.color&&(this.color=this._defaultColor=n.color),n.diameter&&(this.diameter=n.diameter),n.strokeWidth&&(this.strokeWidth=n.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Lh;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-H0)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(n){return new(n||r)};static \u0275cmp=Xo({type:r,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,o){if(n&1&&Uu(z0,5),n&2){let a;Vu(a=Gu())&&(o._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,o){n&2&&(fr("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),Ou("mat-"+o.color),Mn("width",o.diameter,"px")("height",o.diameter,"px")("--mdc-circular-progress-size",o.diameter+"px")("--mdc-circular-progress-active-indicator-width",o.diameter+"px"),Mu("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Qo],diameter:[2,"diameter","diameter",Qo],strokeWidth:[2,"strokeWidth","strokeWidth",Qo]},exportAs:["matProgressSpinner"],features:[Pu],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,o){if(n&1&&(Yo(0,U0,2,8,"ng-template",null,0,ju),qt(2,"div",2,1),bi(),qt(4,"svg",3),hr(5,"circle",4),jt()(),Du(),qt(6,"div",5)(7,"div",6)(8,"div",7),$o(9,8),jt(),qt(10,"div",9),$o(11,8),jt(),qt(12,"div",10),$o(13,8),jt()()()),n&2){let a=qu(1);Ft(4),fr("viewBox",o._viewBox()),Ft(),Mn("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),fr("r",o._circleRadius()),Ft(4),pr("ngTemplateOutlet",a),Ft(2),pr("ngTemplateOutlet",a),Ft(2),pr("ngTemplateOutlet",a)}},dependencies:[Ku],styles:[".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],encapsulation:2,changeDetection:0})}return r})();var zh=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=Nu({type:r});static \u0275inj=ku({imports:[Xu]})}return r})();var j0=["video"],K0=["canvas"];function X0(r,t){r&1&&(qt(0,"div",2),hr(1,"mat-spinner"),jt())}var dT=(()=>{class r{constructor(){this.video=wi("video"),this.canvas=wi("canvas"),this.detectionTimer=Cn(0),this.drawDetection=Cn(!1),this.width=Cn(0),this.height=Cn(0),this.missingLimit=Cn(10),this.enableFaceAndGender=Cn(!1),this.enableLandmarks=Cn(!1),this.detectionReady=eo(),this.detectionChanges=eo(),this.firstDetection=eo(),this.detectionFace=eo(),this.loading=Fu(!1),this.faceDetected=!1,this.faceMissingDetection=0,this.firstDetectionHappen=!1,this.faceDetectionReady=!1}ngOnDestroy(){this.stream&&this.stream.getTracks().forEach(e=>e.stop())}ngAfterViewInit(){this.run()}run(){return xi(this,null,function*(){this.loading.set(!0),this.stream=yield navigator.mediaDevices.getUserMedia({video:{}}),this.video().nativeElement.srcObject=this.stream;let e="/assets/weights/";document.location.hostname.includes("github.io")&&(e="/try-not-to-laugh"+e);let n=[Ne.tinyFaceDetector.loadFromUri(e),Ne.faceRecognitionNet.loadFromUri(e),Ne.faceExpressionNet.loadFromUri(e)];this.enableFaceAndGender()&&n.push(Ne.ageGenderNet.loadFromUri(e)),this.enableLandmarks()&&n.push(Ne.faceLandmark68Net.loadFromUri(e)),yield Promise.all(n),this.loading.set(!1)})}onPlay(){return xi(this,null,function*(){let e=this.video().nativeElement;if(e.paused||e.ended||!Ne.tinyFaceDetector.params||this.loading()){clearTimeout(this.timer),this.timer=setTimeout(()=>this.onPlay(),this.detectionTimer());return}this.faceDetectionReady||(this.faceDetectionReady=!0,this.detectionReady.emit(this.faceDetectionReady));let n,o=this.enableLandmarks();o?n=wu(e,new zo).withFaceLandmarks():n=wu(e,new zo);let a,i=this.enableFaceAndGender();i?a=n.withFaceExpressions().withAgeAndGender():a=n.withFaceExpressions();let s=yield a;if(s?(this.firstDetectionHappen||(this.firstDetectionHappen=!0,this.firstDetection.emit(!0)),this.faceMissingDetection=0):this.firstDetectionHappen&&this.faceMissingDetection++,this.drawDetection()){let c=this.canvas().nativeElement;if(s){c.style.display="block";let l=e.getBoundingClientRect(),f=Dp(c,l,!0),p;try{if(f&&f.height>0&&f.width>0)p=_u(s,f);else return}catch{return}if(rr.drawDetections(c,p),rr.drawFaceExpressions(c,p,.05),o&&rr.drawFaceLandmarks(c,p),i){let{age:h,gender:d,genderProbability:m}=p;new rr.DrawTextField([`${Math.round(h)} years`,`${d} (${Math.round(m*100)} %)`],s.detection.box.bottomLeft).draw(c)}}else c.style.display="none"}this.detectionChanges.emit(s?.expressions);let u=this.faceMissingDetection<this.missingLimit();this.firstDetectionHappen||(u=!1),this.faceDetected!==u&&(this.faceDetected=u,this.detectionFace.emit(this.faceDetected)),clearTimeout(this.timer),this.timer=setTimeout(()=>this.onPlay(),this.detectionTimer())})}pauseVideo(){this.video().nativeElement.pause()}playVideo(){this.video().nativeElement.play()}static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275cmp=Xo({type:r,selectors:[["app-camera-detection"]],viewQuery:function(n,o){n&1&&(_i(o.video,j0,5),_i(o.canvas,K0,5)),n&2&&Hu(2)},inputs:{detectionTimer:[1,"detectionTimer"],drawDetection:[1,"drawDetection"],width:[1,"width"],height:[1,"height"],missingLimit:[1,"missingLimit"],enableFaceAndGender:[1,"enableFaceAndGender"],enableLandmarks:[1,"enableLandmarks"]},outputs:{detectionReady:"detectionReady",detectionChanges:"detectionChanges",firstDetection:"firstDetection",detectionFace:"detectionFace"},decls:6,vars:9,consts:[["video",""],["canvas",""],[1,"spinner"],[1,"video-container"],["autoplay","","muted","","playsinline","",3,"loadedmetadata","height","width"]],template:function(n,o){if(n&1){let a=Lu();Yo(0,X0,2,0,"div",2),qt(1,"div",3)(2,"video",4,0),Wu("loadedmetadata",function(){return Ru(a),Iu(o.onPlay())}),jt(),hr(4,"canvas",null,1),jt()}n&2&&(Bu(o.loading()?0:-1),Ft(),Mn("display",o.loading()?"none":"flex"),Ft(),pr("height",o.height())("width",o.width()),Ft(2),Mn("width",o.width(),"px")("height",o.height(),"px"))},dependencies:[zh,Wh],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}.spinner[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;align-items:center;justify-content:center}.video-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;position:relative}.video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{position:absolute;top:0;left:0}"],changeDetection:0})}}return r})();export{$0 as a,dT as b};
