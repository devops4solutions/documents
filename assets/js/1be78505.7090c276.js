"use strict";(self.webpackChunkdevops4solution=self.webpackChunkdevops4solution||[]).push([[714],{10:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ge});var a=n(6540),o=n(53),l=n(1003),r=n(7559),c=n(2967),i=n(1754),s=n(2252),d=n(6588),m=n(9408),u=n(1312),b=n(3104),p=n(5062);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),l=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.gk)();return(0,b.Mq)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(l.current?l.current=!1:a>=r?(c(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,p.$)((e=>{e.location.hash&&(l.current=!0,o(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",r.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var v=n(3109),_=n(6347),f=n(4581),g=n(6342),C=n(3465),A=n(8168);function k(e){return a.createElement("svg",(0,A.A)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S="collapseSidebarButton_PEFL",T="collapseSidebarButtonIcon_kv0_";function I(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",S),onClick:t},a.createElement(k,{className:T}))}var N=n(5041),x=n(9532);const y=Symbol("EmptyContext"),B=a.createContext(y);function w(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(B.Provider,{value:l},t)}var M=n(1422),L=n(9169),H=n(5489),G=n(2303);function P(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function W(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,g.p)(),v=function(e){const t=(0,G.A)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i._o)(e):void 0),[e,t])}(t),_=(0,i.w8)(t,l),f=(0,L.ys)(h,l),{collapsed:C,setCollapsed:k}=(0,M.u)({initialState:()=>!!b&&(!_&&t.collapsed)}),{expandedItem:S,setExpandedItem:T}=function(){const e=(0,a.useContext)(B);if(e===y)throw new x.dV("DocSidebarItemsExpandedStateProvider");return e}(),I=function(e){void 0===e&&(e=!C),T(e?null:s),k(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,x.ZC)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:_,collapsed:C,updateCollapsed:I}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&k(!0)}),[b,S,s,k,E]),a.createElement("li",{className:(0,o.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":f})},a.createElement(H.A,(0,A.A)({className:(0,o.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":_}),onClick:b?e=>{n?.(t),h?I(!1):(e.preventDefault(),I())}:()=>{n?.(t)},"aria-current":f?"page":void 0,"aria-expanded":b?!C:void 0,href:b?v??"#":v},d),u),h&&b&&a.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),I()}})),a.createElement(M.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(q,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:l,level:c+1})))}var D=n(6654),z=n(3186);const F="menuExternalLink_NmtK";function U(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i.w8)(t,l),E=(0,D.A)(m);return a.createElement("li",{className:(0,o.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(H.A,(0,A.A)({className:(0,o.A)("menu__link",!E&&F,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(z.A,null)))}const V="menuHtmlItem_M9Kj";function R(e){let{item:t,level:n,index:l}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),i&&[V,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}function j(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(W,(0,A.A)({item:t},n));case"html":return a.createElement(R,(0,A.A)({item:t},n));default:return a.createElement(U,(0,A.A)({item:t},n))}}function K(e){let{items:t,...n}=e;return a.createElement(w,null,t.map(((e,t)=>a.createElement(j,(0,A.A)({key:t,item:e,index:t},n)))))}const q=(0,a.memo)(K),O="menu_SIkG",X="menuWithAnnouncementBar_GW3s";function Y(e){let{path:t,sidebar:n,className:l}=e;const c=function(){const{isActive:e}=(0,N.Mj)(),[t,n]=(0,a.useState)(e);return(0,b.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",O,c&&X,l)},a.createElement("ul",{className:(0,o.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:n,activePath:t,level:1})))}const Z="sidebar_njMd",$="sidebarWithHideableNavbar_wUlq",J="sidebarHidden_VK0M",Q="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,g.p)();return a.createElement("div",{className:(0,o.A)(Z,c&&$,r&&J)},c&&a.createElement(C.A,{tabIndex:-1,className:Q}),a.createElement(Y,{path:t,sidebar:n}),i&&a.createElement(I,{onClick:l}))}const te=a.memo(ee);var ne=n(5600),ae=n(9876);const oe=e=>{let{sidebar:t,path:n}=e;const l=(0,ae.M)();return a.createElement("ul",{className:(0,o.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function le(e){return a.createElement(ne.GX,{component:oe,props:e})}const re=a.memo(le);function ce(e){const t=(0,f.l)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(te,e),o&&a.createElement(re,e))}const ie={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function se(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ie.expandButton,title:(0,u.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(k,{className:ie.expandButtonIcon}))}const de={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function me(e){let{children:t}=e;const n=(0,d.t)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function ue(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:c}=(0,_.zy)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),!i&&(0,v.O)()&&s(!0),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.A)(r.G.docs.docSidebarContainer,de.docSidebarContainer,n&&de.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(de.docSidebarContainer)&&n&&s(!0)}},a.createElement(me,null,a.createElement("div",{className:(0,o.A)(de.sidebarViewport,i&&de.sidebarViewportHidden)},a.createElement(ce,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(se,{toggleSidebar:d}))))}const be={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function pe(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.t)();return a.createElement("main",{className:(0,o.A)(be.docMainContainer,(t||!l)&&be.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced)},n))}const he={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"};function Ee(e){let{children:t}=e;const n=(0,d.t)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.A,{wrapperClassName:he.docsWrapper},a.createElement(E,null),a.createElement("div",{className:he.docPage},n&&a.createElement(ue,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(pe,{hiddenSidebarContainer:o},t)))}var ve=n(1774),_e=n(1463);function fe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(_e.A,{version:t.version,tag:(0,c.tU)(t.pluginId,t.version)}),a.createElement(l.be,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ge(e){const{versionMetadata:t}=e,n=(0,i.mz)(e);if(!n)return a.createElement(ve.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(fe,e),a.createElement(l.e3,{className:(0,o.A)(r.G.wrapper.docsPages,r.G.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.n,{version:t},a.createElement(d.V,{name:m,items:u},a.createElement(Ee,null,c)))))}}}]);