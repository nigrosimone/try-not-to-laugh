import{b as _,c as I,e as D,f as E,g as w,h as N}from"./chunk-MLIGBPBO.js";import{a as P}from"./chunk-4WGKZ7RI.js";import{Aa as y,Q as c,Qa as A,Rb as F,S as l,Sa as v,V as h,Y as a,Z as p,_a as C,bc as R,la as m,oa as u,pa as g,sb as b,ya as f}from"./chunk-CNTHKWT7.js";import"./chunk-TSRGIXR5.js";var M=(()=>{class n{handleError(e){alert(e?.message||"Undefined client error"),console.error("Error from global error handler",e)}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275prov=l({token:n,factory:n.\u0275fac})}}return n})();var x=[{path:"",loadChildren:()=>import("./chunk-34YXBJB4.js").then(n=>n.routes)}];var k="@",U=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=a(m,{optional:!0});loadingSchedulerFn=a(z,{optional:!0});_engine;constructor(e,r,o,i,s){this.doc=e,this.delegate=r,this.zone=o,this.animationType=i,this.moduleImpl=s}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-7YW62XN3.js").then(o=>o),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(o=>{throw new c(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(e,r){let o=this.delegate.createRenderer(e,r);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let i=new d(o);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let j=s.createRenderer(e,r);i.use(j),this.scheduler?.notify(11)}).catch(s=>{i.use(o)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(r){A()};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),d=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,r,o){this.delegate.insertBefore(t,e,r,o)}removeChild(t,e,r){this.delegate.removeChild(t,e,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,r,o){this.delegate.setAttribute(t,e,r,o)}removeAttribute(t,e,r){this.delegate.removeAttribute(t,e,r)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,r,o){this.delegate.setStyle(t,e,r,o)}removeStyle(t,e,r){this.delegate.removeStyle(t,e,r)}setProperty(t,e,r){this.shouldReplay(e)&&this.replay.push(o=>o.setProperty(t,e,r)),this.delegate.setProperty(t,e,r)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(t,e,r)),this.delegate.listen(t,e,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(k)}},z=new h("");function T(n="animations"){return y("NgAsyncAnimations"),p([{provide:v,useFactory:(t,e,r)=>new U(t,e,r,n),deps:[R,_,u]},{provide:f,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var O=(()=>{class n{constructor(){this.router=a(w),typeof gtag<"u"&&this.router.events.pipe(P()).subscribe(e=>{e instanceof D&&gtag("config","G-E03CYT4PX8",{page_path:e.urlAfterRedirects})})}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=C({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(r,o){r&1&&b(0,"router-outlet")},dependencies:[E],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;width:100%}"],changeDetection:0})}}return n})();I(O,{providers:[N(x),{provide:g,useClass:M},T(),F()]}).catch(n=>console.error(n));
