import{u as x,_ as W,w as Te,F as U,E as O,e as se,r as fe,W as qe,ab as Ge,b as Me,X as le,a3 as Ue,G as de,ac as Ze,ad as Je,k as Pe,a2 as Ee,d as be,m as Qe,ae as Xe,af as Ke,H as xe,a6 as Ye,a7 as et,s as tt,S as $e,f as nt,j as ot}from"./request-b5b8ff2a.js";import{E as at,a as st}from"./el-form-item-6bff1e46.js";import"./el-tooltip-4ed993c7.js";import{E as Be}from"./el-popper-90b9a722.js";import{d as _,o as I,a as Q,w as S,r as $,a0 as Ne,a9 as lt,u as h,T as Oe,Z as rt,c as p,F as A,b as F,e as Ce,i as me,h as E,j as ke,z as ue,p as _e,A as Ie,B as Ae,l as M,s as X,m as ut,v as it,R as pe,a5 as we,a2 as ct,g as dt,n as mt,_ as pt,C as ze,D as ye,J as oe,H as ae,a7 as vt,Q as ft,P as ht,q as V,S as gt}from"./index-bc07c634.js";import{t as ie}from"./aria-bc8e8b0f.js";import{f as bt}from"./vnode-8a168df7.js";import"./_baseClone-eb967036.js";const _t=_({name:"ElCollapseTransition"}),yt=_({..._t,setup(e){const o=x("collapse-transition"),n=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},s={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){n(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){n(t)},leaveCancelled(t){n(t)}};return(t,d)=>(I(),Q(Oe,Ne({name:h(o).b()},lt(s)),{default:S(()=>[$(t.$slots,"default")]),_:3},16,["name"]))}});var ce=W(yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);ce.install=e=>{e.component(ce.name,ce)};const Mt=ce,Ct=_({name:"ElContainer"}),kt=_({...Ct,props:{direction:{type:String}},setup(e){const o=e,n=rt(),s=x("container"),t=p(()=>o.direction==="vertical"?!0:o.direction==="horizontal"?!1:n&&n.default?n.default().some(i=>{const f=i.type.name;return f==="ElHeader"||f==="ElFooter"}):!1);return(d,i)=>(I(),A("section",{class:F([h(s).b(),h(s).is("vertical",h(t))])},[$(d.$slots,"default")],2))}});var It=W(kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const wt=_({name:"ElAside"}),St=_({...wt,props:{width:{type:String,default:null}},setup(e){const o=e,n=x("aside"),s=p(()=>o.width?n.cssVarBlock({width:o.width}):{});return(t,d)=>(I(),A("aside",{class:F(h(n).b()),style:Ce(h(s))},[$(t.$slots,"default")],6))}});var He=W(St,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const Et=_({name:"ElFooter"}),xt=_({...Et,props:{height:{type:String,default:null}},setup(e){const o=e,n=x("footer"),s=p(()=>o.height?n.cssVarBlock({height:o.height}):{});return(t,d)=>(I(),A("footer",{class:F(h(n).b()),style:Ce(h(s))},[$(t.$slots,"default")],6))}});var De=W(xt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const $t=_({name:"ElHeader"}),Tt=_({...$t,props:{height:{type:String,default:null}},setup(e){const o=e,n=x("header"),s=p(()=>o.height?n.cssVarBlock({height:o.height}):{});return(t,d)=>(I(),A("header",{class:F(h(n).b()),style:Ce(h(s))},[$(t.$slots,"default")],6))}});var Le=W(Tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const Pt=_({name:"ElMain"}),Bt=_({...Pt,setup(e){const o=x("main");return(n,s)=>(I(),A("main",{class:F(h(o).b())},[$(n.$slots,"default")],2))}});var Ve=W(Bt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const Nt=Te(It,{Aside:He,Footer:De,Header:Le,Main:Ve});U(He);U(De);const Ot=U(Le),At=U(Ve);let zt=class{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",s=>{let t=!1;switch(s.code){case O.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case O.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case O.tab:{ie(o,"mouseleave");break}case O.enter:case O.space:{t=!0,s.currentTarget.click();break}}return t&&(s.preventDefault(),s.stopPropagation()),!1})})}},Ht=class{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new zt(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case O.down:{ie(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case O.up:{ie(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case O.tab:{ie(o.currentTarget,"mouseleave");break}case O.enter:case O.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}},Dt=class{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(s=>{s.nodeType===1&&new Ht(s,o)})}};const Lt=_({name:"ElMenuCollapseTransition",setup(){const e=x("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,s){se(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",s()},onAfterEnter(n){fe(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),qe(n,e.m("collapse"))?(fe(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),se(n,e.m("collapse"))):(se(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),fe(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){se(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function Vt(e,o,n,s,t,d){return I(),Q(Oe,Ne({mode:"out-in"},e.listeners),{default:S(()=>[$(e.$slots,"default")]),_:3},16)}var Ft=W(Lt,[["render",Vt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function Fe(e,o){const n=p(()=>{let t=e.parent;const d=[o.value];for(;t.type.name!=="ElMenu";)t.props.index&&d.unshift(t.props.index),t=t.parent;return d});return{parentMenu:p(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:n}}function Wt(e){return p(()=>{const n=e.backgroundColor;return n?new Ge(n).shade(20).toString():""})}const We=(e,o)=>{const n=x("menu");return p(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":Wt(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},jt=Me({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:le},expandOpenIcon:{type:le},collapseCloseIcon:{type:le},collapseOpenIcon:{type:le}}),re="ElSubMenu";var Se=_({name:re,props:jt,setup(e,{slots:o,expose:n}){Ue({from:"popper-append-to-body",replacement:"teleported",scope:re,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},p(()=>e.popperAppendToBody!==void 0));const s=we(),{indexPath:t,parentMenu:d}=Fe(s,p(()=>e.index)),i=x("menu"),f=x("sub-menu"),r=me("rootMenu");r||de(re,"can not inject root menu");const v=me(`subMenu:${d.value.uid}`);v||de(re,"can not inject sub menu");const m=E({}),b=E({});let C;const B=E(!1),K=E(),Z=E(null),z=p(()=>a.value==="horizontal"&&H.value?"bottom-start":"right-start"),j=p(()=>a.value==="horizontal"&&H.value||a.value==="vertical"&&!r.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?N.value?e.expandOpenIcon:e.expandCloseIcon:Ze:e.collapseCloseIcon&&e.collapseOpenIcon?N.value?e.collapseOpenIcon:e.collapseCloseIcon:Je),H=p(()=>v.level===0),q=p(()=>{var c;const g=(c=e.teleported)!=null?c:e.popperAppendToBody;return g===void 0?H.value:g}),Y=p(()=>r.props.collapse?`${i.namespace.value}-zoom-in-left`:`${i.namespace.value}-zoom-in-top`),T=p(()=>a.value==="horizontal"&&H.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),N=p(()=>r.openedMenus.includes(e.index)),G=p(()=>{let c=!1;return Object.values(m.value).forEach(g=>{g.active&&(c=!0)}),Object.values(b.value).forEach(g=>{g.active&&(c=!0)}),c}),ee=p(()=>r.props.backgroundColor||""),te=p(()=>r.props.activeTextColor||""),J=p(()=>r.props.textColor||""),a=p(()=>r.props.mode),l=ke({index:e.index,indexPath:t,active:G}),u=We(r.props,v.level+1),k=p(()=>a.value!=="horizontal"?{color:J.value}:{borderBottomColor:G.value?r.props.activeTextColor?te.value:"":"transparent",color:G.value?te.value:J.value}),y=()=>{var c,g,w;return(w=(g=(c=Z.value)==null?void 0:c.popperRef)==null?void 0:g.popperInstanceRef)==null?void 0:w.destroy()},D=c=>{c||y()},R=()=>{r.props.menuTrigger==="hover"&&r.props.mode==="horizontal"||r.props.collapse&&r.props.mode==="vertical"||e.disabled||r.handleSubMenuClick({index:e.index,indexPath:t.value,active:G.value})},L=(c,g=e.showTimeout)=>{var w;c.type!=="focus"&&(r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||e.disabled||(v.mouseInChild.value=!0,C==null||C(),{stop:C}=Ee(()=>{r.openMenu(e.index,t.value)},g),q.value&&((w=d.value.vnode.el)==null||w.dispatchEvent(new MouseEvent("mouseenter")))))},P=(c=!1)=>{var g,w;r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||(C==null||C(),v.mouseInChild.value=!1,{stop:C}=Ee(()=>!B.value&&r.closeMenu(e.index,t.value),e.hideTimeout),q.value&&c&&((g=s.parent)==null?void 0:g.type.name)==="ElSubMenu"&&((w=v.handleMouseleave)==null||w.call(v,!0)))};ue(()=>r.props.collapse,c=>D(!!c));{const c=w=>{b.value[w.index]=w},g=w=>{delete b.value[w.index]};_e(`subMenu:${s.uid}`,{addSubMenu:c,removeSubMenu:g,handleMouseleave:P,mouseInChild:B,level:v.level+1})}return n({opened:N}),Ie(()=>{r.addSubMenu(l),v.addSubMenu(l)}),Ae(()=>{v.removeSubMenu(l),r.removeSubMenu(l)}),()=>{var c;const g=[(c=o.title)==null?void 0:c.call(o),M(Pe,{class:f.e("icon-arrow"),style:{transform:N.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&r.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>X(j.value)?M(s.appContext.components[j.value]):M(j.value)})],w=r.isMenuPopup?M(Be,{ref:Z,visible:N.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:z.value,teleported:q.value,fallbackPlacements:T.value,transition:Y.value,gpuAcceleration:!1},{content:()=>{var ne;return M("div",{class:[i.m(a.value),i.m("popup-container"),e.popperClass],onMouseenter:ve=>L(ve,100),onMouseleave:()=>P(!0),onFocus:ve=>L(ve,100)},[M("ul",{class:[i.b(),i.m("popup"),i.m(`popup-${z.value}`)],style:u.value},[(ne=o.default)==null?void 0:ne.call(o)])])},default:()=>M("div",{class:f.e("title"),style:[k.value,{backgroundColor:ee.value}],onClick:R},g)}):M(pe,{},[M("div",{class:f.e("title"),style:[k.value,{backgroundColor:ee.value}],ref:K,onClick:R},g),M(Mt,{},{default:()=>{var ne;return ut(M("ul",{role:"menu",class:[i.b(),i.m("inline")],style:u.value},[(ne=o.default)==null?void 0:ne.call(o)]),[[it,N.value]])}})]);return M("li",{class:[f.b(),f.is("active",G.value),f.is("opened",N.value),f.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:N.value,onMouseenter:L,onMouseleave:()=>P(!0),onFocus:L},[w])}}});const Rt=Me({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:be(Array),default:()=>Qe([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),he=e=>Array.isArray(e)&&e.every(o=>X(o)),qt={close:(e,o)=>X(e)&&he(o),open:(e,o)=>X(e)&&he(o),select:(e,o,n,s)=>X(e)&&he(o)&&dt(n)&&(s===void 0||s instanceof Promise)};var Gt=_({name:"ElMenu",props:Rt,emits:qt,setup(e,{emit:o,slots:n,expose:s}){const t=we(),d=t.appContext.config.globalProperties.$router,i=E(),f=x("menu"),r=x("sub-menu"),v=E(-1),m=E(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),b=E(e.defaultActive),C=E({}),B=E({}),K=p(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),Z=()=>{const a=b.value&&C.value[b.value];if(!a||e.mode==="horizontal"||e.collapse)return;a.indexPath.forEach(u=>{const k=B.value[u];k&&z(u,k.indexPath)})},z=(a,l)=>{m.value.includes(a)||(e.uniqueOpened&&(m.value=m.value.filter(u=>l.includes(u))),m.value.push(a),o("open",a,l))},j=a=>{const l=m.value.indexOf(a);l!==-1&&m.value.splice(l,1)},H=(a,l)=>{j(a),o("close",a,l)},q=({index:a,indexPath:l})=>{m.value.includes(a)?H(a,l):z(a,l)},Y=a=>{(e.mode==="horizontal"||e.collapse)&&(m.value=[]);const{index:l,indexPath:u}=a;if(!(xe(l)||xe(u)))if(e.router&&d){const k=a.route||l,y=d.push(k).then(D=>(D||(b.value=l),D));o("select",l,u,{index:l,indexPath:u,route:k},y)}else b.value=l,o("select",l,u,{index:l,indexPath:u})},T=a=>{const l=C.value,u=l[a]||b.value&&l[b.value]||l[e.defaultActive];u?b.value=u.index:b.value=a},N=()=>{var a,l;if(!i.value)return-1;const u=Array.from((l=(a=i.value)==null?void 0:a.childNodes)!=null?l:[]).filter(c=>c.nodeName!=="#comment"&&(c.nodeName!=="#text"||c.nodeValue)),k=64,y=Number.parseInt(getComputedStyle(i.value).paddingLeft,10),D=Number.parseInt(getComputedStyle(i.value).paddingRight,10),R=i.value.clientWidth-y-D;let L=0,P=0;return u.forEach((c,g)=>{L+=c.offsetWidth||0,L<=R-k&&(P=g+1)}),P===u.length?-1:P},G=(a,l=33.34)=>{let u;return()=>{u&&clearTimeout(u),u=setTimeout(()=>{a()},l)}};let ee=!0;const te=()=>{const a=()=>{v.value=-1,mt(()=>{v.value=N()})};ee?a():G(a)(),ee=!1};ue(()=>e.defaultActive,a=>{C.value[a]||(b.value=""),T(a)}),ue(()=>e.collapse,a=>{a&&(m.value=[])}),ue(C.value,Z);let J;ct(()=>{e.mode==="horizontal"&&e.ellipsis?J=Xe(i,te).stop:J==null||J()});{const a=y=>{B.value[y.index]=y},l=y=>{delete B.value[y.index]};_e("rootMenu",ke({props:e,openedMenus:m,items:C,subMenus:B,activeIndex:b,isMenuPopup:K,addMenuItem:y=>{C.value[y.index]=y},removeMenuItem:y=>{delete C.value[y.index]},addSubMenu:a,removeSubMenu:l,openMenu:z,closeMenu:H,handleMenuItemClick:Y,handleSubMenuClick:q})),_e(`subMenu:${t.uid}`,{addSubMenu:a,removeSubMenu:l,mouseInChild:E(!1),level:0})}return Ie(()=>{e.mode==="horizontal"&&new Dt(t.vnode.el,f.namespace.value)}),s({open:l=>{const{indexPath:u}=B.value[l];u.forEach(k=>z(k,u))},close:j,handleResize:te}),()=>{var a,l;let u=(l=(a=n.default)==null?void 0:a.call(n))!=null?l:[];const k=[];if(e.mode==="horizontal"&&i.value){const R=bt(u),L=v.value===-1?R:R.slice(0,v.value),P=v.value===-1?[]:R.slice(v.value);P!=null&&P.length&&e.ellipsis&&(u=L,k.push(M(Se,{index:"sub-menu-more",class:r.e("hide-arrow")},{title:()=>M(Pe,{class:r.e("icon-more")},{default:()=>M(Ke)}),default:()=>P})))}const y=We(e,0),D=M("ul",{key:String(e.collapse),role:"menubar",ref:i,style:y.value,class:{[f.b()]:!0,[f.m(e.mode)]:!0,[f.m("collapse")]:e.collapse}},[...u,...k]);return e.collapseTransition&&e.mode==="vertical"?M(Ft,()=>D):D}}});const Ut=Me({index:{type:be([String,null]),default:null},route:{type:be([String,Object])},disabled:Boolean}),Zt={click:e=>X(e.index)&&Array.isArray(e.indexPath)},ge="ElMenuItem",Jt=_({name:ge,components:{ElTooltip:Be},props:Ut,emits:Zt,setup(e,{emit:o}){const n=we(),s=me("rootMenu"),t=x("menu"),d=x("menu-item");s||de(ge,"can not inject root menu");const{parentMenu:i,indexPath:f}=Fe(n,pt(e,"index")),r=me(`subMenu:${i.value.uid}`);r||de(ge,"can not inject sub menu");const v=p(()=>e.index===s.activeIndex),m=ke({index:e.index,indexPath:f,active:v}),b=()=>{e.disabled||(s.handleMenuItemClick({index:e.index,indexPath:f.value,route:e.route}),o("click",m))};return Ie(()=>{r.addSubMenu(m),s.addMenuItem(m)}),Ae(()=>{r.removeSubMenu(m),s.removeMenuItem(m)}),{parentMenu:i,rootMenu:s,active:v,nsMenu:t,nsMenuItem:d,handleClick:b}}});function Qt(e,o,n,s,t,d){const i=ze("el-tooltip");return I(),A("li",{class:F([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...f)=>e.handleClick&&e.handleClick(...f))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(I(),Q(i,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:S(()=>[$(e.$slots,"title")]),default:S(()=>[ye("div",{class:F(e.nsMenu.be("tooltip","trigger"))},[$(e.$slots,"default")],2)]),_:3},8,["effect"])):(I(),A(pe,{key:1},[$(e.$slots,"default"),$(e.$slots,"title")],64))],2)}var je=W(Jt,[["render",Qt],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const Xt={title:String},Kt="ElMenuItemGroup",Yt=_({name:Kt,props:Xt,setup(){return{ns:x("menu-item-group")}}});function en(e,o,n,s,t,d){return I(),A("li",{class:F(e.ns.b())},[ye("div",{class:F(e.ns.e("title"))},[e.$slots.title?$(e.$slots,"title",{key:1}):(I(),A(pe,{key:0},[oe(ae(e.title),1)],64))],2),ye("ul",null,[$(e.$slots,"default")])],2)}var Re=W(Yt,[["render",en],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const tn=Te(Gt,{MenuItem:je,MenuItemGroup:Re,SubMenu:Se}),nn=U(je);U(Re);U(Se);const on=vt("adminData",()=>{const e=E(localStorage.getItem("adminPassword")||"");function o(n){e.value=n,localStorage.setItem("adminPassword",n)}return{adminPassword:e,updateAdminPwd:o}}),hn=_({__name:"AdminView",setup(e){const o=Ye(),n=E(!1),s=et(o),{t}=ft(),d=on(),i=ht(),f=E([{name:t("admin.menu.fileManage"),path:"/admin"},{name:t("admin.menu.systemSetting"),path:"/admin/setting"},{name:t("admin.menu.about"),path:"/admin/about"}]),r=()=>{d.updateAdminPwd(d.adminPassword),tt({url:"/admin/login",method:"post"}).then(v=>{v.code===200?(n.value=!0,$e.success(t("admin.login.loginSuccess"))):$e.error(t("admin.login.loginError"))})};return d.adminPassword!==""&&r(),(v,m)=>{const b=nn,C=tn,B=Ot,K=ze("router-view"),Z=At,z=Nt,j=nt,H=ot,q=st,Y=at;return n.value?(I(),Q(z,{key:0,style:{height:"100vh",width:"100vw",position:"relative","user-select":"none"}},{default:S(()=>[V(B,null,{default:S(()=>[V(C,{mode:"horizontal",router:"","default-active":h(i).path},{default:S(()=>[(I(!0),A(pe,null,gt(f.value,T=>(I(),Q(b,{index:T.path,key:T.path},{default:S(()=>[oe(ae(T.name),1)]),_:2},1032,["index"]))),128)),V(b,{style:{float:"right"},onClick:m[0]||(m[0]=T=>h(s)(!h(o)))},{default:S(()=>[oe(ae(h(t)("admin.menu.color")),1)]),_:1}),V(b,{style:{float:"right"},onClick:m[1]||(m[1]=T=>{h(d).updateAdminPwd(""),n.value=!1})},{default:S(()=>[oe(ae(h(t)("admin.menu.signout")),1)]),_:1})]),_:1},8,["default-active"])]),_:1}),V(Z,null,{default:S(()=>[V(K)]),_:1})]),_:1})):(I(),Q(Y,{key:1,size:"large"},{default:S(()=>[V(q,{label:h(t)("admin.login.managePassword")},{default:S(()=>[V(H,{modelValue:h(d).adminPassword,"onUpdate:modelValue":m[2]||(m[2]=T=>h(d).adminPassword=T),placeholder:h(t)("admin.login.passwordNotEmpty"),type:"password"},{append:S(()=>[V(j,{onClick:r},{default:S(()=>[oe(ae(h(t)("admin.login.login")),1)]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}))}}});export{hn as default};
