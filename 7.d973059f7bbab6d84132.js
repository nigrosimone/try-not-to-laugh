(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"vm+o":function(n,t,i){"use strict";i.r(t),i.d(t,"LoginModule",function(){return d});var e=i("ofXK"),s=i("tyNb"),o=i("fXoL"),c=i("RL7/"),r=i("BKB1"),a=i("Xa2L");function u(n,t){1&n&&o.Jb(0,"mat-progress-spinner")}function b(n,t){if(1&n){const n=o.Mb();o.Lb(0,"button",2),o.Sb("click",function(){return o.ac(n),o.Vb().onLogin()}),o.fc(1,"Login"),o.Kb()}}const h=[{path:"",component:(()=>{class n{constructor(n,t,i){this.authenticationService=n,this.cdr=t,this.routingService=i,this.loading=!1}ngOnInit(){this.subUser=this.authenticationService.currentUser.subscribe(n=>{this.routingService.demoCameraDetection()}),this.loading=!0,this.cdr.detectChanges(),this.authenticationService.load().then(()=>{this.loading=!1,this.cdr.detectChanges()})}ngOnDestroy(){this.subUser&&this.subUser.unsubscribe()}onLogin(){this.authenticationService.login()}}return n.\u0275fac=function(t){return new(t||n)(o.Ib(c.a),o.Ib(o.h),o.Ib(r.a))},n.\u0275cmp=o.Cb({type:n,selectors:[["app-login"]],decls:2,vars:2,consts:[[4,"ngIf"],[3,"click",4,"ngIf"],[3,"click"]],template:function(n,t){1&n&&(o.ec(0,u,1,0,"mat-progress-spinner",0),o.ec(1,b,2,0,"button",1)),2&n&&(o.Yb("ngIf",t.loading),o.yb(1),o.Yb("ngIf",!t.loading))},directives:[e.h,a.a],styles:[""]}),n})()}];let g=(()=>{class n{}return n.\u0275mod=o.Gb({type:n}),n.\u0275inj=o.Fb({factory:function(t){return new(t||n)},imports:[[s.b.forChild(h)],s.b]}),n})(),d=(()=>{class n{}return n.\u0275mod=o.Gb({type:n}),n.\u0275inj=o.Fb({factory:function(t){return new(t||n)},imports:[[e.b,g,a.b]]}),n})()}}]);