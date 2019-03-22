!function(e){"use strict"
function t(e,t){e.className+=" "+t}function n(e,t){for(var n=e.className.split(" "),i=t.split(" "),s=0;s<i.length;s+=1){var o=n.indexOf(i[s])
o>-1&&n.splice(o,1)}e.className=n.join(" ")}function i(){return"rtl"===e.getComputedStyle(document.body).direction}function s(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function o(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function a(e){for(;e.lastChild;)e.removeChild(e.lastChild)}function l(e){if(null===e)return e
var t
if(Array.isArray(e)){t=[]
for(var n=0;n<e.length;n+=1)t.push(l(e[n]))
return t}if(e instanceof Date)return new Date(e.getTime())
if(e instanceof RegExp)return(t=new RegExp(e.source)).global=e.global,t.ignoreCase=e.ignoreCase,t.multiline=e.multiline,t.lastIndex=e.lastIndex,t
if("object"==typeof e){for(var i in t={},e)e.hasOwnProperty(i)&&(t[i]=l(e[i]))
return t}return e}function r(e,t){if(e.elements){var n=e.elements.root
n.parentNode.removeChild(n),delete e.elements,e.settings=l(e.__settings),e.__init=t,delete e.__internal}}function c(e,t){return function(){if(arguments.length>0){for(var n=[],i=0;i<arguments.length;i+=1)n.push(arguments[i])
return n.push(e),t.apply(e,n)}return t.apply(e,[null,e])}}function d(e,t){return{index:e,button:t,cancel:!1}}function m(e,t){if("function"==typeof t.get(e))return t.get(e).call(t)}var u={ENTER:13,ESC:27,F1:112,F12:123,LEFT:37,RIGHT:39},f={autoReset:!0,basic:!1,closable:!0,closableByDimmer:!0,frameless:!1,maintainFocus:!0,maximizable:!0,modal:!0,movable:!0,moveBounded:!1,overflow:!0,padding:!0,pinnable:!0,pinned:!0,preventBodyShift:!1,resizable:!0,startMaximized:!1,transition:"pulse",notifier:{delay:5,position:"bottom-right",closeButton:!1},glossary:{title:"AlertifyJS",ok:"OK",cancel:"Cancel",acccpt:"Accept",deny:"Deny",confirm:"Confirm",decline:"Decline",close:"Close",maximize:"Maximize",restore:"Restore"},theme:{input:"ajs-input",ok:"ajs-ok",cancel:"ajs-cancel"}},h=[],p=document.addEventListener?function(e,t,n,i){e.addEventListener(t,n,!0===i)}:document.attachEvent?function(e,t,n){e.attachEvent("on"+t,n)}:void 0,b=document.removeEventListener?function(e,t,n,i){e.removeEventListener(t,n,!0===i)}:document.detachEvent?function(e,t,n){e.detachEvent("on"+t,n)}:void 0,v=function(){var e,t,n=!1,i={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"}
for(e in i)if(void 0!==document.documentElement.style[e]){t=i[e],n=!0
break}return{type:t,supported:n}}(),g=function(){function f(e){if(!e.__internal){var n
delete e.__init,e.__settings||(e.__settings=l(e.settings)),"function"==typeof e.setup?((n=e.setup()).options=n.options||{},n.focus=n.focus||{}):n={buttons:[],focus:{element:null,select:!1},options:{}},"object"!=typeof e.hooks&&(e.hooks={})
var i=[]
if(Array.isArray(n.buttons))for(var s=0;s<n.buttons.length;s+=1){var o=n.buttons[s],a={}
for(var r in o)o.hasOwnProperty(r)&&(a[r]=o[r])
i.push(a)}var d=e.__internal={isOpen:!1,activeElement:document.body,timerIn:void 0,timerOut:void 0,buttons:i,focus:n.focus,options:{title:void 0,modal:void 0,basic:void 0,frameless:void 0,pinned:void 0,movable:void 0,moveBounded:void 0,resizable:void 0,autoReset:void 0,closable:void 0,closableByDimmer:void 0,maximizable:void 0,startMaximized:void 0,pinnable:void 0,transition:void 0,padding:void 0,overflow:void 0,onshow:void 0,onclosing:void 0,onclose:void 0,onfocus:void 0,onmove:void 0,onmoved:void 0,onresize:void 0,onresized:void 0,onmaximize:void 0,onmaximized:void 0,onrestore:void 0,onrestored:void 0},resetHandler:void 0,beginMoveHandler:void 0,beginResizeHandler:void 0,bringToFrontHandler:void 0,modalClickHandler:void 0,buttonsClickHandler:void 0,commandsClickHandler:void 0,transitionInHandler:void 0,transitionOutHandler:void 0,destroy:void 0},m={}
m.root=document.createElement("div"),m.root.className=he.base+" "+he.hidden+" ",m.root.innerHTML=fe.dimmer+fe.modal,m.dimmer=m.root.firstChild,m.modal=m.root.lastChild,m.modal.innerHTML=fe.dialog,m.dialog=m.modal.firstChild,m.dialog.innerHTML=fe.reset+fe.commands+fe.header+fe.body+fe.footer+fe.resizeHandle+fe.reset,m.reset=[],m.reset.push(m.dialog.firstChild),m.reset.push(m.dialog.lastChild),m.commands={},m.commands.container=m.reset[0].nextSibling,m.commands.pin=m.commands.container.firstChild,m.commands.maximize=m.commands.pin.nextSibling,m.commands.close=m.commands.maximize.nextSibling,m.header=m.commands.container.nextSibling,m.body=m.header.nextSibling,m.body.innerHTML=fe.content,m.content=m.body.firstChild,m.footer=m.body.nextSibling,m.footer.innerHTML=fe.buttons.auxiliary+fe.buttons.primary,m.resizeHandle=m.footer.nextSibling,m.buttons={},m.buttons.auxiliary=m.footer.firstChild,m.buttons.primary=m.buttons.auxiliary.nextSibling,m.buttons.primary.innerHTML=fe.button,m.buttonTemplate=m.buttons.primary.firstChild,m.buttons.primary.removeChild(m.buttonTemplate)
for(var u=0;u<e.__internal.buttons.length;u+=1){var f=e.__internal.buttons[u]
for(var h in de.indexOf(f.key)<0&&de.push(f.key),f.element=m.buttonTemplate.cloneNode(),f.element.innerHTML=f.text,"string"==typeof f.className&&""!==f.className&&t(f.element,f.className),f.attrs)"className"!==h&&f.attrs.hasOwnProperty(h)&&f.element.setAttribute(h,f.attrs[h])
"auxiliary"===f.scope?m.buttons.auxiliary.appendChild(f.element):m.buttons.primary.appendChild(f.element)}for(var p in e.elements=m,d.resetHandler=c(e,B),d.beginMoveHandler=c(e,G),d.beginResizeHandler=c(e,V),d.bringToFrontHandler=c(e,H),d.modalClickHandler=c(e,A),d.buttonsClickHandler=c(e,P),d.commandsClickHandler=c(e,C),d.transitionInHandler=c(e,D),d.transitionOutHandler=c(e,U),d.options)void 0!==n.options[p]?e.set(p,n.options[p]):_.defaults.hasOwnProperty(p)?e.set(p,_.defaults[p]):"title"===p&&e.set(p,_.defaults.glossary[p])
"function"==typeof e.build&&e.build()}document.body.appendChild(e.elements.root)}function g(){re=o(),ce=s()}function y(){e.scrollTo(re,ce)}function x(){for(var e=0,i=0;i<h.length;i+=1){var s=h[i];(s.isModal()||s.isMaximized())&&(e+=1)}0===e&&document.body.className.indexOf(he.noOverflow)>=0?(n(document.body,he.noOverflow),k(!1)):e>0&&document.body.className.indexOf(he.noOverflow)<0&&(k(!0),t(document.body,he.noOverflow))}function k(i){_.defaults.preventBodyShift&&document.documentElement.scrollHeight>document.documentElement.clientHeight&&(i?(be=ce,pe=e.getComputedStyle(document.body).top,t(document.body,he.fixed),document.body.style.top=-ce+"px"):(ce=be,document.body.style.top=pe,n(document.body,he.fixed),y()))}function H(e,t){for(var n=h.indexOf(t)+1;n<h.length;n+=1)if(h[n].isModal())return
return document.body.lastChild!==t.elements.root&&(document.body.appendChild(t.elements.root),h.splice(h.indexOf(t),1),h.push(t),F(t)),!1}function z(e,i,s,o){switch(i){case"title":e.setHeader(o)
break
case"modal":(function(e){e.get("modal")?(n(e.elements.root,he.modeless),e.isOpen()&&(ie(e),I(e),x())):(t(e.elements.root,he.modeless),e.isOpen()&&(ne(e),I(e),x()))})(e)
break
case"basic":(function(e){e.get("basic")?t(e.elements.root,he.basic):n(e.elements.root,he.basic)})(e)
break
case"frameless":(function(e){e.get("frameless")?t(e.elements.root,he.frameless):n(e.elements.root,he.frameless)})(e)
break
case"pinned":(function(e){e.get("pinned")?(n(e.elements.root,he.unpinned),e.isOpen()&&L(e)):(t(e.elements.root,he.unpinned),e.isOpen()&&!e.isModal()&&N(e))})(e)
break
case"closable":(function(e){e.get("closable")?(t(e.elements.root,he.closable),function(e){p(e.elements.modal,"click",e.__internal.modalClickHandler)}(e)):(n(e.elements.root,he.closable),function(e){b(e.elements.modal,"click",e.__internal.modalClickHandler)}(e))})(e)
break
case"maximizable":(function(e){e.get("maximizable")?t(e.elements.root,he.maximizable):n(e.elements.root,he.maximizable)})(e)
break
case"pinnable":(function(e){e.get("pinnable")?t(e.elements.root,he.pinnable):n(e.elements.root,he.pinnable)})(e)
break
case"movable":(function(e){e.get("movable")?(t(e.elements.root,he.movable),e.isOpen()&&se(e)):(K(e),n(e.elements.root,he.movable),e.isOpen()&&oe(e))})(e)
break
case"resizable":(function(e){e.get("resizable")?(t(e.elements.root,he.resizable),e.isOpen()&&ae(e)):($(e),n(e.elements.root,he.resizable),e.isOpen()&&le(e))})(e)
break
case"padding":o?n(e.elements.root,he.noPadding):e.elements.root.className.indexOf(he.noPadding)<0&&t(e.elements.root,he.noPadding)
break
case"overflow":o?n(e.elements.root,he.noOverflow):e.elements.root.className.indexOf(he.noOverflow)<0&&t(e.elements.root,he.noOverflow)
break
case"transition":(function(e,i,s){"string"==typeof s&&n(e.elements.root,he.prefix+s),t(e.elements.root,he.prefix+i),e.elements.root.offsetWidth})(e,o,s)}"function"==typeof e.hooks.onupdate&&e.hooks.onupdate.call(e,i,s,o)}function w(e,t,n,i,s){var o,a={op:void 0,items:[]}
if(void 0===s&&"string"==typeof i)a.op="get",t.hasOwnProperty(i)?(a.found=!0,a.value=t[i]):(a.found=!1,a.value=void 0)
else if(a.op="set","object"==typeof i){var l=i
for(var r in l)t.hasOwnProperty(r)?(t[r]!==l[r]&&(o=t[r],t[r]=l[r],n.call(e,r,o,l[r])),a.items.push({key:r,value:l[r],found:!0})):a.items.push({key:r,value:l[r],found:!1})}else{if("string"!=typeof i)throw new Error("args must be a string or object")
t.hasOwnProperty(i)?(t[i]!==s&&(o=t[i],t[i]=s,n.call(e,i,o,s)),a.items.push({key:i,value:s,found:!0})):a.items.push({key:i,value:s,found:!1})}return a}function T(e){var t
S(e,function(e){return t=!0===e.invokeOnClose}),!t&&e.isOpen()&&e.close()}function C(e,t){switch(e.srcElement||e.target){case t.elements.commands.pin:t.isPinned()?E(t):O(t)
break
case t.elements.commands.maximize:t.isMaximized()?j(t):M(t)
break
case t.elements.commands.close:T(t)}return!1}function O(e){e.set("pinned",!0)}function E(e){e.set("pinned",!1)}function M(e){m("onmaximize",e),t(e.elements.root,he.maximized),e.isOpen()&&x(),m("onmaximized",e)}function j(e){m("onrestore",e),n(e.elements.root,he.maximized),e.isOpen()&&x(),m("onrestored",e)}function N(e){var t=o()
e.elements.modal.style.marginTop=s()+"px",e.elements.modal.style.marginLeft=t+"px",e.elements.modal.style.marginRight=-t+"px"}function L(e){var t=parseInt(e.elements.modal.style.marginTop,10),n=parseInt(e.elements.modal.style.marginLeft,10)
if(e.elements.modal.style.marginTop="",e.elements.modal.style.marginLeft="",e.elements.modal.style.marginRight="",e.isOpen()){var i=0,a=0
""!==e.elements.dialog.style.top&&(i=parseInt(e.elements.dialog.style.top,10)),e.elements.dialog.style.top=i+(t-s())+"px",""!==e.elements.dialog.style.left&&(a=parseInt(e.elements.dialog.style.left,10)),e.elements.dialog.style.left=a+(n-o())+"px"}}function I(e){e.get("modal")||e.get("pinned")?L(e):N(e)}function A(e,t){if(e.timeStamp-ge>200&&(ge=e.timeStamp)&&!ve){var n=e.srcElement||e.target
return!0===t.get("closableByDimmer")&&n===t.elements.modal&&T(t),ve=!1,!1}}function S(e,t){if(Date.now()-ye>200&&(ye=Date.now()))for(var n=0;n<e.__internal.buttons.length;n+=1){var i=e.__internal.buttons[n]
if(!i.element.disabled&&t(i)){var s=d(n,i)
"function"==typeof e.callback&&e.callback.apply(e,[s]),!1===s.cancel&&e.close()
break}}}function P(e,t){var n=e.srcElement||e.target
S(t,function(e){return e.element===n&&(_e=!0)})}function W(e){if(!_e){var t=h[h.length-1],n=e.keyCode
return 0===t.__internal.buttons.length&&n===u.ESC&&!0===t.get("closable")?(T(t),!1):de.indexOf(n)>-1?(S(t,function(e){return e.key===n}),!1):void 0}_e=!1}function R(e){var t=h[h.length-1],n=e.keyCode
if(n===u.LEFT||n===u.RIGHT){for(var i=t.__internal.buttons,s=0;s<i.length;s+=1)if(document.activeElement===i[s].element)switch(n){case u.LEFT:return void i[(s||i.length)-1].element.focus()
case u.RIGHT:return void i[(s+1)%i.length].element.focus()}}else if(n<u.F12+1&&n>u.F1-1&&de.indexOf(n)>-1)return e.preventDefault(),e.stopPropagation(),S(t,function(e){return e.key===n}),!1}function F(e,t){if(t)t.focus()
else{var n=e.__internal.focus,i=n.element
switch(typeof n.element){case"number":e.__internal.buttons.length>n.element&&(i=!0===e.get("basic")?e.elements.reset[0]:e.__internal.buttons[n.element].element)
break
case"string":i=e.elements.body.querySelector(n.element)
break
case"function":i=n.element.call(e)}null!=i||0!==e.__internal.buttons.length||(i=e.elements.reset[0]),i&&i.focus&&(i.focus(),n.select&&i.select&&i.select())}}function B(e,t){if(!t)for(var n=h.length-1;n>-1;n-=1)if(h[n].isModal()){t=h[n]
break}if(t&&t.isModal()){var i,s=e.srcElement||e.target,o=s===t.elements.reset[1]||0===t.__internal.buttons.length&&s===document.body
o&&(t.get("maximizable")?i=t.elements.commands.maximize:t.get("closable")&&(i=t.elements.commands.close)),void 0===i&&("number"==typeof t.__internal.focus.element?s===t.elements.reset[0]?i=t.elements.buttons.auxiliary.firstChild||t.elements.buttons.primary.firstChild:o&&(i=t.elements.reset[0]):s===t.elements.reset[0]&&(i=t.elements.buttons.primary.lastChild||t.elements.buttons.auxiliary.lastChild)),F(t,i)}}function D(e,t){clearTimeout(t.__internal.timerIn),F(t),y(),_e=!1,m("onfocus",t),b(t.elements.dialog,v.type,t.__internal.transitionInHandler),n(t.elements.root,he.animationIn)}function U(e,t){clearTimeout(t.__internal.timerOut),b(t.elements.dialog,v.type,t.__internal.transitionOutHandler),K(t),$(t),t.isMaximized()&&!t.get("startMaximized")&&j(t),_.defaults.maintainFocus&&t.__internal.activeElement&&(t.__internal.activeElement.focus(),t.__internal.activeElement=null),"function"==typeof t.__internal.destroy&&t.__internal.destroy.apply(t)}function X(e,t){var n=e[ze]-ke,i=e[we]-He
Ce&&(i-=document.body.scrollTop),t.style.left=n+"px",t.style.top=i+"px"}function Y(e,t){var n=e[ze]-ke,i=e[we]-He
Ce&&(i-=document.body.scrollTop),t.style.left=Math.min(Te.maxLeft,Math.max(Te.minLeft,n))+"px",t.style.top=Ce?Math.min(Te.maxTop,Math.max(Te.minTop,i))+"px":Math.max(Te.minTop,i)+"px"}function G(e,n){if(null===Ee&&!n.isMaximized()&&n.get("movable")){var i,s=0,o=0
if("touchstart"===e.type?(e.preventDefault(),i=e.targetTouches[0],ze="clientX",we="clientY"):0===e.button&&(i=e),i){var a=n.elements.dialog
if(t(a,he.capture),a.style.left&&(s=parseInt(a.style.left,10)),a.style.top&&(o=parseInt(a.style.top,10)),ke=i[ze]-s,He=i[we]-o,n.isModal()?He+=n.elements.modal.scrollTop:n.isPinned()&&(He-=document.body.scrollTop),n.get("moveBounded")){var l=a,r=-s,c=-o
do{r+=l.offsetLeft,c+=l.offsetTop}while(l=l.offsetParent)
Te={maxLeft:r,minLeft:-r,maxTop:document.documentElement.clientHeight-a.clientHeight-c,minTop:-c},Oe=Y}else Te=null,Oe=X
return m("onmove",n),Ce=!n.isModal()&&n.isPinned(),xe=n,Oe(i,a),t(document.body,he.noSelection),!1}}}function q(e){var t
xe&&("touchmove"===e.type?(e.preventDefault(),t=e.targetTouches[0]):0===e.button&&(t=e),t&&Oe(t,xe.elements.dialog))}function J(){if(xe){var e=xe
xe=Te=null,n(document.body,he.noSelection),n(e.elements.dialog,he.capture),m("onmoved",e)}}function K(e){xe=null
var t=e.elements.dialog
t.style.left=t.style.top=""}function V(e,n){var i
if(!n.isMaximized()&&("touchstart"===e.type?(e.preventDefault(),i=e.targetTouches[0]):0===e.button&&(i=e),i)){m("onresize",n),Ee=n,Le=n.elements.resizeHandle.offsetHeight/2
var s=n.elements.dialog
return t(s,he.capture),Me=parseInt(s.style.left,10),s.style.height=s.offsetHeight+"px",s.style.minHeight=n.elements.header.offsetHeight+n.elements.footer.offsetHeight+"px",s.style.width=(je=s.offsetWidth)+"px","none"!==s.style.maxWidth&&(s.style.minWidth=(Ne=s.offsetWidth)+"px"),s.style.maxWidth="none",t(document.body,he.noSelection),!1}}function Q(e){var t
Ee&&("touchmove"===e.type?(e.preventDefault(),t=e.targetTouches[0]):0===e.button&&(t=e),t&&function(e,t,n){var s,o,a=t,l=0,r=0
do{l+=a.offsetLeft,r+=a.offsetTop}while(a=a.offsetParent)
!0===n?(s=e.pageX,o=e.pageY):(s=e.clientX,o=e.clientY)
var c=i()
if(c&&(s=document.body.offsetWidth-s,isNaN(Me)||(l=document.body.offsetWidth-l-t.offsetWidth)),t.style.height=o-r+Le+"px",t.style.width=s-l+Le+"px",!isNaN(Me)){var d=.5*Math.abs(t.offsetWidth-je)
c&&(d*=-1),t.offsetWidth>je?t.style.left=Me+d+"px":t.offsetWidth>=Ne&&(t.style.left=Me-d+"px")}}(t,Ee.elements.dialog,!Ee.get("modal")&&!Ee.get("pinned")))}function Z(){if(Ee){var e=Ee
Ee=null,n(document.body,he.noSelection),n(e.elements.dialog,he.capture),ve=!0,m("onresized",e)}}function $(e){Ee=null
var t=e.elements.dialog
"none"===t.style.maxWidth&&(t.style.maxWidth=t.style.minWidth=t.style.width=t.style.height=t.style.minHeight=t.style.left="",Me=Number.Nan,je=Ne=Le=0)}function ee(){for(var e=0;e<h.length;e+=1){var t=h[e]
t.get("autoReset")&&(K(t),$(t))}}function te(t){1===h.length&&(p(e,"resize",ee),p(document.body,"keyup",W),p(document.body,"keydown",R),p(document.body,"focus",B),p(document.documentElement,"mousemove",q),p(document.documentElement,"touchmove",q),p(document.documentElement,"mouseup",J),p(document.documentElement,"touchend",J),p(document.documentElement,"mousemove",Q),p(document.documentElement,"touchmove",Q),p(document.documentElement,"mouseup",Z),p(document.documentElement,"touchend",Z)),p(t.elements.commands.container,"click",t.__internal.commandsClickHandler),p(t.elements.footer,"click",t.__internal.buttonsClickHandler),p(t.elements.reset[0],"focus",t.__internal.resetHandler),p(t.elements.reset[1],"focus",t.__internal.resetHandler),_e=!0,p(t.elements.dialog,v.type,t.__internal.transitionInHandler),t.get("modal")||ne(t),t.get("resizable")&&ae(t),t.get("movable")&&se(t)}function ne(e){p(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function ie(e){b(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function se(e){p(e.elements.header,"mousedown",e.__internal.beginMoveHandler),p(e.elements.header,"touchstart",e.__internal.beginMoveHandler)}function oe(e){b(e.elements.header,"mousedown",e.__internal.beginMoveHandler),b(e.elements.header,"touchstart",e.__internal.beginMoveHandler)}function ae(e){p(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),p(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler)}function le(e){b(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),b(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler)}var re,ce,de=[],me=!1,ue=e.navigator.userAgent.indexOf("Safari")>-1&&e.navigator.userAgent.indexOf("Chrome")<0,fe={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>'},he={animationIn:"ajs-in",animationOut:"ajs-out",base:"alertify",basic:"ajs-basic",capture:"ajs-capture",closable:"ajs-closable",fixed:"ajs-fixed",frameless:"ajs-frameless",hidden:"ajs-hidden",maximize:"ajs-maximize",maximized:"ajs-maximized",maximizable:"ajs-maximizable",modeless:"ajs-modeless",movable:"ajs-movable",noSelection:"ajs-no-selection",noOverflow:"ajs-no-overflow",noPadding:"ajs-no-padding",pin:"ajs-pin",pinnable:"ajs-pinnable",prefix:"ajs-",resizable:"ajs-resizable",restore:"ajs-restore",shake:"ajs-shake",unpinned:"ajs-unpinned"},pe="",be=0,ve=!1,ge=0,ye=0,_e=!1,xe=null,ke=0,He=0,ze="pageX",we="pageY",Te=null,Ce=!1,Oe=null,Ee=null,Me=Number.Nan,je=0,Ne=0,Le=0
return{__init:f,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(he.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(he.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(he.unpinned)<0},maximize:function(){return this.isMaximized()||M(this),this},restore:function(){return this.isMaximized()&&j(this),this},pin:function(){return this.isPinned()||O(this),this},unpin:function(){return this.isPinned()&&E(this),this},bringToFront:function(){return H(0,this),this},moveTo:function(e,t){if(!isNaN(e)&&!isNaN(t)){m("onmove",this)
var n=this.elements.dialog,s=n,o=0,a=0
n.style.left&&(o-=parseInt(n.style.left,10)),n.style.top&&(a-=parseInt(n.style.top,10))
do{o+=s.offsetLeft,a+=s.offsetTop}while(s=s.offsetParent)
var l=e-o,r=t-a
i()&&(l*=-1),n.style.left=l+"px",n.style.top=r+"px",m("onmoved",this)}return this},resizeTo:function(e,t){var n=parseFloat(e),i=parseFloat(t),s=/(\d*\.\d+|\d+)%/
if(!isNaN(n)&&!isNaN(i)&&!0===this.get("resizable")){m("onresize",this),(""+e).match(s)&&(n=n/100*document.documentElement.clientWidth),(""+t).match(s)&&(i=i/100*document.documentElement.clientHeight)
var o=this.elements.dialog
"none"!==o.style.maxWidth&&(o.style.minWidth=(Ne=o.offsetWidth)+"px"),o.style.maxWidth="none",o.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+"px",o.style.width=n+"px",o.style.height=i+"px",m("onresized",this)}return this},setting:function(e,t){var n=this,i=w(this,this.__internal.options,function(e,t,i){z(n,e,t,i)},e,t)
if("get"===i.op)return i.found?i.value:void 0!==this.settings?w(this,this.settings,this.settingUpdated||function(){},e,t).value:void 0
if("set"===i.op){if(i.items.length>0)for(var s=this.settingUpdated||function(){},o=0;o<i.items.length;o+=1){var a=i.items[o]
a.found||void 0===this.settings||w(this,this.settings,s,a.key,a.value)}return this}},set:function(e,t){return this.setting(e,t),this},get:function(e){return this.setting(e)},setHeader:function(t){return"string"==typeof t?(a(this.elements.header),this.elements.header.innerHTML=t):t instanceof e.HTMLElement&&this.elements.header.firstChild!==t&&(a(this.elements.header),this.elements.header.appendChild(t)),this},setContent:function(t){return"string"==typeof t?(a(this.elements.content),this.elements.content.innerHTML=t):t instanceof e.HTMLElement&&this.elements.content.firstChild!==t&&(a(this.elements.content),this.elements.content.appendChild(t)),this},showModal:function(e){return this.show(!0,e)},show:function(e,i){if(f(this),this.__internal.isOpen){K(this),$(this),t(this.elements.dialog,he.shake)
var s=this
setTimeout(function(){n(s.elements.dialog,he.shake)},200)}else{if(this.__internal.isOpen=!0,h.push(this),_.defaults.maintainFocus&&(this.__internal.activeElement=document.activeElement),document.body.hasAttribute("tabindex")||document.body.setAttribute("tabindex",me="0"),"function"==typeof this.prepare&&this.prepare(),te(this),void 0!==e&&this.set("modal",e),g(),x(),"string"==typeof i&&""!==i&&(this.__internal.className=i,t(this.elements.root,i)),this.get("startMaximized")?this.maximize():this.isMaximized()&&j(this),I(this),n(this.elements.root,he.animationOut),t(this.elements.root,he.animationIn),clearTimeout(this.__internal.timerIn),this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,v.supported?1e3:100),ue){var o=this.elements.root
o.style.display="none",setTimeout(function(){o.style.display="block"},0)}this.elements.root.offsetWidth,n(this.elements.root,he.hidden),"function"==typeof this.hooks.onshow&&this.hooks.onshow.call(this),m("onshow",this)}return this},close:function(){return this.__internal.isOpen&&!1!==m("onclosing",this)&&(function(t){1===h.length&&(b(e,"resize",ee),b(document.body,"keyup",W),b(document.body,"keydown",R),b(document.body,"focus",B),b(document.documentElement,"mousemove",q),b(document.documentElement,"mouseup",J),b(document.documentElement,"mousemove",Q),b(document.documentElement,"mouseup",Z)),b(t.elements.commands.container,"click",t.__internal.commandsClickHandler),b(t.elements.footer,"click",t.__internal.buttonsClickHandler),b(t.elements.reset[0],"focus",t.__internal.resetHandler),b(t.elements.reset[1],"focus",t.__internal.resetHandler),p(t.elements.dialog,v.type,t.__internal.transitionOutHandler),t.get("modal")||ie(t),t.get("movable")&&oe(t),t.get("resizable")&&le(t)}(this),n(this.elements.root,he.animationIn),t(this.elements.root,he.animationOut),clearTimeout(this.__internal.timerOut),this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,v.supported?1e3:100),t(this.elements.root,he.hidden),this.elements.modal.offsetWidth,void 0!==this.__internal.className&&""!==this.__internal.className&&n(this.elements.root,this.__internal.className),"function"==typeof this.hooks.onclose&&this.hooks.onclose.call(this),m("onclose",this),h.splice(h.indexOf(this),1),this.__internal.isOpen=!1,x()),h.length||"0"!==me||document.body.removeAttribute("tabindex"),this},closeOthers:function(){return _.closeAll(this),this},destroy:function(){return this.__internal&&(this.__internal.isOpen?(this.__internal.destroy=function(){r(this,f)},this.close()):this.__internal.destroy||r(this,f)),this}}}(),y=function(){function i(e){e.__internal||(e.__internal={position:_.defaults.notifier.position,delay:_.defaults.notifier.delay},d=document.createElement("DIV"),l(e)),d.parentNode!==document.body&&document.body.appendChild(d)}function s(e){e.__internal.pushed=!0,m.push(e)}function o(e){m.splice(m.indexOf(e),1),e.__internal.pushed=!1}function l(e){switch(d.className=u.base,e.__internal.position){case"top-right":t(d,u.top+" "+u.right)
break
case"top-left":t(d,u.top+" "+u.left)
break
case"top-center":t(d,u.top+" "+u.center)
break
case"bottom-left":t(d,u.bottom+" "+u.left)
break
case"bottom-center":t(d,u.bottom+" "+u.center)
break
default:case"bottom-right":t(d,u.bottom+" "+u.right)}}function r(i,l){function r(e,t){t.__internal.closeButton&&"true"!==e.target.getAttribute("data-close")||t.dismiss(!0)}function m(e,t){b(t.element,v.type,m),d.removeChild(t.element)}function f(e){clearTimeout(e.__internal.timer),clearTimeout(e.__internal.transitionTimeout)}return function(e){return e.__internal||(e.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0},e.__internal.clickHandler=c(e,r),e.__internal.transitionEndHandler=c(e,m)),e}({element:i,push:function(e,n){if(!this.__internal.pushed){var i,o
switch(s(this),f(this),arguments.length){case 0:o=this.__internal.delay
break
case 1:"number"==typeof e?o=e:(i=e,o=this.__internal.delay)
break
case 2:i=e,o=n}return this.__internal.closeButton=_.defaults.notifier.closeButton,void 0!==i&&this.setContent(i),y.__internal.position.indexOf("top")<0?d.appendChild(this.element):d.insertBefore(this.element,d.firstChild),this.element.offsetWidth,t(this.element,u.visible),p(this.element,"click",this.__internal.clickHandler),this.delay(o)}return this},ondismiss:function(){},callback:l,dismiss:function(e){return this.__internal.pushed&&(f(this),"function"==typeof this.ondismiss&&!1===this.ondismiss.call(this)||(b(this.element,"click",this.__internal.clickHandler),void 0!==this.element&&this.element.parentNode===d&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,v.supported?1e3:100),n(this.element,u.visible),"function"==typeof this.callback&&this.callback.call(this,e)),o(this))),this},delay:function(e){if(f(this),this.__internal.delay=void 0===e||isNaN(+e)?y.__internal.delay:+e,this.__internal.delay>0){var t=this
this.__internal.timer=setTimeout(function(){t.dismiss()},1e3*this.__internal.delay)}return this},setContent:function(n){if("string"==typeof n?(a(this.element),this.element.innerHTML=n):n instanceof e.HTMLElement&&this.element.firstChild!==n&&(a(this.element),this.element.appendChild(n)),this.__internal.closeButton){var i=document.createElement("span")
t(i,u.close),i.setAttribute("data-close",!0),this.element.appendChild(i)}return this},dismissOthers:function(){return y.dismissAll(this),this}})}var d,m=[],u={base:"alertify-notifier",message:"ajs-message",top:"ajs-top",right:"ajs-right",bottom:"ajs-bottom",left:"ajs-left",center:"ajs-center",visible:"ajs-visible",hidden:"ajs-hidden",close:"ajs-close"}
return{setting:function(e,t){if(i(this),void 0===t)return this.__internal[e]
switch(e){case"position":this.__internal.position=t,l(this)
break
case"delay":this.__internal.delay=t}return this},set:function(e,t){return this.setting(e,t),this},get:function(e){return this.setting(e)},create:function(e,t){i(this)
var n=document.createElement("div")
return n.className=u.message+("string"==typeof e&&""!==e?" ajs-"+e:""),r(n,t)},dismissAll:function(e){for(var t=m.slice(0),n=0;n<t.length;n+=1){var i=t[n]
void 0!==e&&e===i||i.dismiss()}}}}(),_=new function(){function e(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])
return e}function t(e){var t=i[e].dialog
return t&&"function"==typeof t.__init&&t.__init(t),t}function n(t,n,s,o){var a={dialog:null,factory:n}
return void 0!==o&&(a.factory=function(){return e(new i[o].factory,new n)}),s||(a.dialog=e(new a.factory,g)),i[t]=a}var i={}
return{defaults:f,dialog:function(i,s,o,a){if("function"!=typeof s)return t(i)
if(this.hasOwnProperty(i))throw new Error("alertify.dialog: name already exists")
var l=n(i,s,o,a)
this[i]=o?function(){if(0===arguments.length)return l.dialog
var t=e(new l.factory,g)
return t&&"function"==typeof t.__init&&t.__init(t),t.main.apply(t,arguments),t.show.apply(t)}:function(){if(l.dialog&&"function"==typeof l.dialog.__init&&l.dialog.__init(l.dialog),0===arguments.length)return l.dialog
var e=l.dialog
return e.main.apply(l.dialog,arguments),e.show.apply(l.dialog)}},closeAll:function(e){for(var t=h.slice(0),n=0;n<t.length;n+=1){var i=t[n]
void 0!==e&&e===i||i.close()}},setting:function(e,n,i){if("notifier"===e)return y.setting(n,i)
var s=t(e)
return s?s.setting(n,i):void 0},set:function(e,t,n){return this.setting(e,t,n)},get:function(e,t){return this.setting(e,t)},notify:function(e,t,n,i){return y.create(t,i).push(e,n)},message:function(e,t,n){return y.create(null,n).push(e,t)},success:function(e,t,n){return y.create("success",n).push(e,t)},error:function(e,t,n){return y.create("error",n).push(e,t)},warning:function(e,t,n){return y.create("warning",n).push(e,t)},dismissAll:function(){y.dismissAll()}}}
_.dialog("alert",function(){return{main:function(e,t,n){var i,s,o
switch(arguments.length){case 1:s=e
break
case 2:"function"==typeof t?(s=e,o=t):(i=e,s=t)
break
case 3:i=e,s=t,o=n}return this.set("title",i),this.set("message",s),this.set("onok",o),this},setup:function(){return{buttons:[{text:_.defaults.glossary.ok,key:u.ESC,invokeOnClose:!0,className:_.defaults.theme.ok}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(e){this.setContent(e)},settings:{message:void 0,onok:void 0,label:void 0},settingUpdated:function(e,t,n){switch(e){case"message":this.setMessage(n)
break
case"label":this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=n)}},callback:function(e){if("function"==typeof this.get("onok")){var t=this.get("onok").call(this,e)
void 0!==t&&(e.cancel=!t)}}}}),_.dialog("confirm",function(){function e(e){null!==n.timer&&(clearInterval(n.timer),n.timer=null,e.__internal.buttons[n.index].element.innerHTML=n.text)}function t(t,i,s){e(t),n.duration=s,n.index=i,n.text=t.__internal.buttons[i].element.innerHTML,n.timer=setInterval(c(t,n.task),1e3),n.task(null,t)}var n={timer:null,index:null,text:null,duration:null,task:function(t,i){if(i.isOpen()){if(i.__internal.buttons[n.index].element.innerHTML=n.text+" (&#8207;"+n.duration+"&#8207;) ",n.duration-=1,-1===n.duration){e(i)
var s=i.__internal.buttons[n.index],o=d(n.index,s)
"function"==typeof i.callback&&i.callback.apply(i,[o]),!1!==o.close&&i.close()}}else e(i)}}
return{main:function(e,t,n,i){var s,o,a,l
switch(arguments.length){case 1:o=e
break
case 2:o=e,a=t
break
case 3:o=e,a=t,l=n
break
case 4:s=e,o=t,a=n,l=i}return this.set("title",s),this.set("message",o),this.set("onok",a),this.set("oncancel",l),this},setup:function(){return{buttons:[{text:_.defaults.glossary.ok,key:u.ENTER,className:_.defaults.theme.ok},{text:_.defaults.glossary.cancel,key:u.ESC,invokeOnClose:!0,className:_.defaults.theme.cancel}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(e){this.setContent(e)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null},settingUpdated:function(e,t,n){switch(e){case"message":this.setMessage(n)
break
case"labels":"ok"in n&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].text=n.ok,this.__internal.buttons[0].element.innerHTML=n.ok),"cancel"in n&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].text=n.cancel,this.__internal.buttons[1].element.innerHTML=n.cancel)
break
case"reverseButtons":!0===n?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)
break
case"defaultFocus":this.__internal.focus.element="ok"===n?0:1}},callback:function(t){var n
switch(e(this),t.index){case 0:"function"==typeof this.get("onok")&&void 0!==(n=this.get("onok").call(this,t))&&(t.cancel=!n)
break
case 1:"function"==typeof this.get("oncancel")&&void 0!==(n=this.get("oncancel").call(this,t))&&(t.cancel=!n)}},autoOk:function(e){return t(this,0,e),this},autoCancel:function(e){return t(this,1,e),this}}}),_.dialog("prompt",function(){var t=document.createElement("INPUT"),n=document.createElement("P")
return{main:function(e,t,n,i,s){var o,a,l,r,c
switch(arguments.length){case 1:a=e
break
case 2:a=e,l=t
break
case 3:a=e,l=t,r=n
break
case 4:a=e,l=t,r=n,c=i
break
case 5:o=e,a=t,l=n,r=i,c=s}return this.set("title",o),this.set("message",a),this.set("value",l),this.set("onok",r),this.set("oncancel",c),this},setup:function(){return{buttons:[{text:_.defaults.glossary.ok,key:u.ENTER,className:_.defaults.theme.ok},{text:_.defaults.glossary.cancel,key:u.ESC,invokeOnClose:!0,className:_.defaults.theme.cancel}],focus:{element:t,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){t.className=_.defaults.theme.input,t.setAttribute("type","text"),t.value=this.get("value"),this.elements.content.appendChild(n),this.elements.content.appendChild(t)},prepare:function(){},setMessage:function(t){"string"==typeof t?(a(n),n.innerHTML=t):t instanceof e.HTMLElement&&n.firstChild!==t&&(a(n),n.appendChild(t))},settings:{message:void 0,labels:void 0,onok:void 0,oncancel:void 0,value:"",type:"text",reverseButtons:void 0},settingUpdated:function(e,n,i){switch(e){case"message":this.setMessage(i)
break
case"value":t.value=i
break
case"type":switch(i){case"text":case"color":case"date":case"datetime-local":case"email":case"month":case"number":case"password":case"search":case"tel":case"time":case"week":t.type=i
break
default:t.type="text"}break
case"labels":i.ok&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=i.ok),i.cancel&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].element.innerHTML=i.cancel)
break
case"reverseButtons":!0===i?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)}},callback:function(e){var n
switch(e.index){case 0:this.settings.value=t.value,"function"==typeof this.get("onok")&&void 0!==(n=this.get("onok").call(this,e,this.settings.value))&&(e.cancel=!n)
break
case 1:"function"==typeof this.get("oncancel")&&void 0!==(n=this.get("oncancel").call(this,e))&&(e.cancel=!n),e.cancel||(t.value=this.settings.value)}}}}),"object"==typeof module&&"object"==typeof module.exports?module.exports=_:"function"==typeof define&&define.amd?define([],function(){return _}):e.alertify||(e.alertify=_)}("undefined"!=typeof window?window:this)
