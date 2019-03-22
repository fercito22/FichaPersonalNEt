(function(e){"use strict"
var t={ENTER:13,ESC:27,F1:112,F12:123,LEFT:37,RIGHT:39},n={autoReset:!0,basic:!1,closable:!0,closableByDimmer:!0,frameless:!1,maintainFocus:!0,maximizable:!0,modal:!0,movable:!0,moveBounded:!1,overflow:!0,padding:!0,pinnable:!0,pinned:!0,preventBodyShift:!1,resizable:!0,startMaximized:!1,transition:"pulse",notifier:{delay:5,position:"bottom-right",closeButton:!1},glossary:{title:"AlertifyJS",ok:"OK",cancel:"Cancel",acccpt:"Accept",deny:"Deny",confirm:"Confirm",decline:"Decline",close:"Close",maximize:"Maximize",restore:"Restore"},theme:{input:"ajs-input",ok:"ajs-ok",cancel:"ajs-cancel"}},i=[]
function s(e,t){e.className+=" "+t}function o(e,t){for(var n=e.className.split(" "),i=t.split(" "),s=0;s<i.length;s+=1){var o=n.indexOf(i[s])
o>-1&&n.splice(o,1)}e.className=n.join(" ")}function a(){return"rtl"===e.getComputedStyle(document.body).direction}function l(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function r(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function c(e){for(;e.lastChild;)e.removeChild(e.lastChild)}function d(e){if(null===e)return e
var t
if(Array.isArray(e)){t=[]
for(var n=0;n<e.length;n+=1)t.push(d(e[n]))
return t}if(e instanceof Date)return new Date(e.getTime())
if(e instanceof RegExp)return(t=new RegExp(e.source)).global=e.global,t.ignoreCase=e.ignoreCase,t.multiline=e.multiline,t.lastIndex=e.lastIndex,t
if("object"==typeof e){for(var i in t={},e)e.hasOwnProperty(i)&&(t[i]=d(e[i]))
return t}return e}function m(e,t){if(e.elements){var n=e.elements.root
n.parentNode.removeChild(n),delete e.elements,e.settings=d(e.__settings),e.__init=t,delete e.__internal}}var u=document.addEventListener?function(e,t,n,i){e.addEventListener(t,n,!0===i)}:document.attachEvent?function(e,t,n){e.attachEvent("on"+t,n)}:void 0,f=document.removeEventListener?function(e,t,n,i){e.removeEventListener(t,n,!0===i)}:document.detachEvent?function(e,t,n){e.detachEvent("on"+t,n)}:void 0,h=function(){var e,t,n=!1,i={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"}
for(e in i)if(void 0!==document.documentElement.style[e]){t=i[e],n=!0
break}return{type:t,supported:n}}()
function p(e,t){return function(){if(arguments.length>0){for(var n=[],i=0;i<arguments.length;i+=1)n.push(arguments[i])
return n.push(e),t.apply(e,n)}return t.apply(e,[null,e])}}function b(e,t){return{index:e,button:t,cancel:!1}}function v(e,t){if("function"==typeof t.get(e))return t.get(e).call(t)}var g=function(){var n,g,y=[],x=!1,k=e.navigator.userAgent.indexOf("Safari")>-1&&e.navigator.userAgent.indexOf("Chrome")<0,H={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>'},z={animationIn:"ajs-in",animationOut:"ajs-out",base:"alertify",basic:"ajs-basic",capture:"ajs-capture",closable:"ajs-closable",fixed:"ajs-fixed",frameless:"ajs-frameless",hidden:"ajs-hidden",maximize:"ajs-maximize",maximized:"ajs-maximized",maximizable:"ajs-maximizable",modeless:"ajs-modeless",movable:"ajs-movable",noSelection:"ajs-no-selection",noOverflow:"ajs-no-overflow",noPadding:"ajs-no-padding",pin:"ajs-pin",pinnable:"ajs-pinnable",prefix:"ajs-",resizable:"ajs-resizable",restore:"ajs-restore",shake:"ajs-shake",unpinned:"ajs-unpinned"}
function w(e){if(!e.__internal){var t
delete e.__init,e.__settings||(e.__settings=d(e.settings)),"function"==typeof e.setup?((t=e.setup()).options=t.options||{},t.focus=t.focus||{}):t={buttons:[],focus:{element:null,select:!1},options:{}},"object"!=typeof e.hooks&&(e.hooks={})
var n=[]
if(Array.isArray(t.buttons))for(var i=0;i<t.buttons.length;i+=1){var o=t.buttons[i],a={}
for(var l in o)o.hasOwnProperty(l)&&(a[l]=o[l])
n.push(a)}var r=e.__internal={isOpen:!1,activeElement:document.body,timerIn:void 0,timerOut:void 0,buttons:n,focus:t.focus,options:{title:void 0,modal:void 0,basic:void 0,frameless:void 0,pinned:void 0,movable:void 0,moveBounded:void 0,resizable:void 0,autoReset:void 0,closable:void 0,closableByDimmer:void 0,maximizable:void 0,startMaximized:void 0,pinnable:void 0,transition:void 0,padding:void 0,overflow:void 0,onshow:void 0,onclosing:void 0,onclose:void 0,onfocus:void 0,onmove:void 0,onmoved:void 0,onresize:void 0,onresized:void 0,onmaximize:void 0,onmaximized:void 0,onrestore:void 0,onrestored:void 0},resetHandler:void 0,beginMoveHandler:void 0,beginResizeHandler:void 0,bringToFrontHandler:void 0,modalClickHandler:void 0,buttonsClickHandler:void 0,commandsClickHandler:void 0,transitionInHandler:void 0,transitionOutHandler:void 0,destroy:void 0},c={}
c.root=document.createElement("div"),c.root.className=z.base+" "+z.hidden+" ",c.root.innerHTML=H.dimmer+H.modal,c.dimmer=c.root.firstChild,c.modal=c.root.lastChild,c.modal.innerHTML=H.dialog,c.dialog=c.modal.firstChild,c.dialog.innerHTML=H.reset+H.commands+H.header+H.body+H.footer+H.resizeHandle+H.reset,c.reset=[],c.reset.push(c.dialog.firstChild),c.reset.push(c.dialog.lastChild),c.commands={},c.commands.container=c.reset[0].nextSibling,c.commands.pin=c.commands.container.firstChild,c.commands.maximize=c.commands.pin.nextSibling,c.commands.close=c.commands.maximize.nextSibling,c.header=c.commands.container.nextSibling,c.body=c.header.nextSibling,c.body.innerHTML=H.content,c.content=c.body.firstChild,c.footer=c.body.nextSibling,c.footer.innerHTML=H.buttons.auxiliary+H.buttons.primary,c.resizeHandle=c.footer.nextSibling,c.buttons={},c.buttons.auxiliary=c.footer.firstChild,c.buttons.primary=c.buttons.auxiliary.nextSibling,c.buttons.primary.innerHTML=H.button,c.buttonTemplate=c.buttons.primary.firstChild,c.buttons.primary.removeChild(c.buttonTemplate)
for(var m=0;m<e.__internal.buttons.length;m+=1){var u=e.__internal.buttons[m]
for(var f in y.indexOf(u.key)<0&&y.push(u.key),u.element=c.buttonTemplate.cloneNode(),u.element.innerHTML=u.text,"string"==typeof u.className&&""!==u.className&&s(u.element,u.className),u.attrs)"className"!==f&&u.attrs.hasOwnProperty(f)&&u.element.setAttribute(f,u.attrs[f])
"auxiliary"===u.scope?c.buttons.auxiliary.appendChild(u.element):c.buttons.primary.appendChild(u.element)}for(var h in e.elements=c,r.resetHandler=p(e,$),r.beginMoveHandler=p(e,ue),r.beginResizeHandler=p(e,xe),r.bringToFrontHandler=p(e,j),r.modalClickHandler=p(e,Y),r.buttonsClickHandler=p(e,K),r.commandsClickHandler=p(e,A),r.transitionInHandler=p(e,ee),r.transitionOutHandler=p(e,te),r.options)void 0!==t.options[h]?e.set(h,t.options[h]):_.defaults.hasOwnProperty(h)?e.set(h,_.defaults[h]):"title"===h&&e.set(h,_.defaults.glossary[h])
"function"==typeof e.build&&e.build()}document.body.appendChild(e.elements.root)}function T(){e.scrollTo(n,g)}function C(){for(var e=0,t=0;t<i.length;t+=1){var n=i[t];(n.isModal()||n.isMaximized())&&(e+=1)}0===e&&document.body.className.indexOf(z.noOverflow)>=0?(o(document.body,z.noOverflow),M(!1)):e>0&&document.body.className.indexOf(z.noOverflow)<0&&(M(!0),s(document.body,z.noOverflow))}var O="",E=0
function M(t){_.defaults.preventBodyShift&&document.documentElement.scrollHeight>document.documentElement.clientHeight&&(t?(E=g,O=e.getComputedStyle(document.body).top,s(document.body,z.fixed),document.body.style.top=-g+"px"):(g=E,document.body.style.top=O,o(document.body,z.fixed),T()))}function j(e,t){for(var n=i.indexOf(t)+1;n<i.length;n+=1)if(i[n].isModal())return
return document.body.lastChild!==t.elements.root&&(document.body.appendChild(t.elements.root),i.splice(i.indexOf(t),1),i.push(t),Z(t)),!1}function N(e,t,n,i){switch(t){case"title":e.setHeader(i)
break
case"modal":(function(e){e.get("modal")?(o(e.elements.root,z.modeless),e.isOpen()&&(Ce(e),D(e),C())):(s(e.elements.root,z.modeless),e.isOpen()&&(Te(e),D(e),C()))})(e)
break
case"basic":(function(e){e.get("basic")?s(e.elements.root,z.basic):o(e.elements.root,z.basic)})(e)
break
case"frameless":(function(e){e.get("frameless")?s(e.elements.root,z.frameless):o(e.elements.root,z.frameless)})(e)
break
case"pinned":(function(e){e.get("pinned")?(o(e.elements.root,z.unpinned),e.isOpen()&&B(e)):(s(e.elements.root,z.unpinned),e.isOpen()&&!e.isModal()&&F(e))})(e)
break
case"closable":(function(e){e.get("closable")?(s(e.elements.root,z.closable),function(e){u(e.elements.modal,"click",e.__internal.modalClickHandler)}(e)):(o(e.elements.root,z.closable),function(e){f(e.elements.modal,"click",e.__internal.modalClickHandler)}(e))})(e)
break
case"maximizable":(function(e){e.get("maximizable")?s(e.elements.root,z.maximizable):o(e.elements.root,z.maximizable)})(e)
break
case"pinnable":(function(e){e.get("pinnable")?s(e.elements.root,z.pinnable):o(e.elements.root,z.pinnable)})(e)
break
case"movable":(function(e){e.get("movable")?(s(e.elements.root,z.movable),e.isOpen()&&Oe(e)):(pe(e),o(e.elements.root,z.movable),e.isOpen()&&Ee(e))})(e)
break
case"resizable":(function(e){e.get("resizable")?(s(e.elements.root,z.resizable),e.isOpen()&&Me(e)):(ze(e),o(e.elements.root,z.resizable),e.isOpen()&&je(e))})(e)
break
case"padding":i?o(e.elements.root,z.noPadding):e.elements.root.className.indexOf(z.noPadding)<0&&s(e.elements.root,z.noPadding)
break
case"overflow":i?o(e.elements.root,z.noOverflow):e.elements.root.className.indexOf(z.noOverflow)<0&&s(e.elements.root,z.noOverflow)
break
case"transition":(function(e,t,n){"string"==typeof n&&o(e.elements.root,z.prefix+n),s(e.elements.root,z.prefix+t),e.elements.root.offsetWidth})(e,i,n)}"function"==typeof e.hooks.onupdate&&e.hooks.onupdate.call(e,t,n,i)}function L(e,t,n,i,s){var o,a={op:void 0,items:[]}
if(void 0===s&&"string"==typeof i)a.op="get",t.hasOwnProperty(i)?(a.found=!0,a.value=t[i]):(a.found=!1,a.value=void 0)
else if(a.op="set","object"==typeof i){var l=i
for(var r in l)t.hasOwnProperty(r)?(t[r]!==l[r]&&(o=t[r],t[r]=l[r],n.call(e,r,o,l[r])),a.items.push({key:r,value:l[r],found:!0})):a.items.push({key:r,value:l[r],found:!1})}else{if("string"!=typeof i)throw new Error("args must be a string or object")
t.hasOwnProperty(i)?(t[i]!==s&&(o=t[i],t[i]=s,n.call(e,i,o,s)),a.items.push({key:i,value:s,found:!0})):a.items.push({key:i,value:s,found:!1})}return a}function I(e){var t
J(e,function(e){return t=!0===e.invokeOnClose}),!t&&e.isOpen()&&e.close()}function A(e,t){switch(e.srcElement||e.target){case t.elements.commands.pin:t.isPinned()?P(t):S(t)
break
case t.elements.commands.maximize:t.isMaximized()?R(t):W(t)
break
case t.elements.commands.close:I(t)}return!1}function S(e){e.set("pinned",!0)}function P(e){e.set("pinned",!1)}function W(e){v("onmaximize",e),s(e.elements.root,z.maximized),e.isOpen()&&C(),v("onmaximized",e)}function R(e){v("onrestore",e),o(e.elements.root,z.maximized),e.isOpen()&&C(),v("onrestored",e)}function F(e){var t=r()
e.elements.modal.style.marginTop=l()+"px",e.elements.modal.style.marginLeft=t+"px",e.elements.modal.style.marginRight=-t+"px"}function B(e){var t=parseInt(e.elements.modal.style.marginTop,10),n=parseInt(e.elements.modal.style.marginLeft,10)
if(e.elements.modal.style.marginTop="",e.elements.modal.style.marginLeft="",e.elements.modal.style.marginRight="",e.isOpen()){var i=0,s=0
""!==e.elements.dialog.style.top&&(i=parseInt(e.elements.dialog.style.top,10)),e.elements.dialog.style.top=i+(t-l())+"px",""!==e.elements.dialog.style.left&&(s=parseInt(e.elements.dialog.style.left,10)),e.elements.dialog.style.left=s+(n-r())+"px"}}function D(e){e.get("modal")||e.get("pinned")?B(e):F(e)}var U=!1,X=0
function Y(e,t){if(e.timeStamp-X>200&&(X=e.timeStamp)&&!U){var n=e.srcElement||e.target
return!0===t.get("closableByDimmer")&&n===t.elements.modal&&I(t),U=!1,!1}}var G=0,q=!1
function J(e,t){if(Date.now()-G>200&&(G=Date.now()))for(var n=0;n<e.__internal.buttons.length;n+=1){var i=e.__internal.buttons[n]
if(!i.element.disabled&&t(i)){var s=b(n,i)
"function"==typeof e.callback&&e.callback.apply(e,[s]),!1===s.cancel&&e.close()
break}}}function K(e,t){var n=e.srcElement||e.target
J(t,function(e){return e.element===n&&(q=!0)})}function V(e){if(!q){var n=i[i.length-1],s=e.keyCode
return 0===n.__internal.buttons.length&&s===t.ESC&&!0===n.get("closable")?(I(n),!1):y.indexOf(s)>-1?(J(n,function(e){return e.key===s}),!1):void 0}q=!1}function Q(e){var n=i[i.length-1],s=e.keyCode
if(s===t.LEFT||s===t.RIGHT){for(var o=n.__internal.buttons,a=0;a<o.length;a+=1)if(document.activeElement===o[a].element)switch(s){case t.LEFT:return void o[(a||o.length)-1].element.focus()
case t.RIGHT:return void o[(a+1)%o.length].element.focus()}}else if(s<t.F12+1&&s>t.F1-1&&y.indexOf(s)>-1)return e.preventDefault(),e.stopPropagation(),J(n,function(e){return e.key===s}),!1}function Z(e,t){if(t)t.focus()
else{var n=e.__internal.focus,i=n.element
switch(typeof n.element){case"number":e.__internal.buttons.length>n.element&&(i=!0===e.get("basic")?e.elements.reset[0]:e.__internal.buttons[n.element].element)
break
case"string":i=e.elements.body.querySelector(n.element)
break
case"function":i=n.element.call(e)}null==i&&0===e.__internal.buttons.length&&(i=e.elements.reset[0]),i&&i.focus&&(i.focus(),n.select&&i.select&&i.select())}}function $(e,t){if(!t)for(var n=i.length-1;n>-1;n-=1)if(i[n].isModal()){t=i[n]
break}if(t&&t.isModal()){var s,o=e.srcElement||e.target,a=o===t.elements.reset[1]||0===t.__internal.buttons.length&&o===document.body
a&&(t.get("maximizable")?s=t.elements.commands.maximize:t.get("closable")&&(s=t.elements.commands.close)),void 0===s&&("number"==typeof t.__internal.focus.element?o===t.elements.reset[0]?s=t.elements.buttons.auxiliary.firstChild||t.elements.buttons.primary.firstChild:a&&(s=t.elements.reset[0]):o===t.elements.reset[0]&&(s=t.elements.buttons.primary.lastChild||t.elements.buttons.auxiliary.lastChild)),Z(t,s)}}function ee(e,t){clearTimeout(t.__internal.timerIn),Z(t),T(),q=!1,v("onfocus",t),f(t.elements.dialog,h.type,t.__internal.transitionInHandler),o(t.elements.root,z.animationIn)}function te(e,t){clearTimeout(t.__internal.timerOut),f(t.elements.dialog,h.type,t.__internal.transitionOutHandler),pe(t),ze(t),t.isMaximized()&&!t.get("startMaximized")&&R(t),_.defaults.maintainFocus&&t.__internal.activeElement&&(t.__internal.activeElement.focus(),t.__internal.activeElement=null),"function"==typeof t.__internal.destroy&&t.__internal.destroy.apply(t)}var ne=null,ie=0,se=0,oe="pageX",ae="pageY",le=null,re=!1,ce=null
function de(e,t){var n=e[oe]-ie,i=e[ae]-se
re&&(i-=document.body.scrollTop),t.style.left=n+"px",t.style.top=i+"px"}function me(e,t){var n=e[oe]-ie,i=e[ae]-se
re&&(i-=document.body.scrollTop),t.style.left=Math.min(le.maxLeft,Math.max(le.minLeft,n))+"px",t.style.top=re?Math.min(le.maxTop,Math.max(le.minTop,i))+"px":Math.max(le.minTop,i)+"px"}function ue(e,t){if(null===be&&!t.isMaximized()&&t.get("movable")){var n,i=0,o=0
if("touchstart"===e.type?(e.preventDefault(),n=e.targetTouches[0],oe="clientX",ae="clientY"):0===e.button&&(n=e),n){var a=t.elements.dialog
if(s(a,z.capture),a.style.left&&(i=parseInt(a.style.left,10)),a.style.top&&(o=parseInt(a.style.top,10)),ie=n[oe]-i,se=n[ae]-o,t.isModal()?se+=t.elements.modal.scrollTop:t.isPinned()&&(se-=document.body.scrollTop),t.get("moveBounded")){var l=a,r=-i,c=-o
do{r+=l.offsetLeft,c+=l.offsetTop}while(l=l.offsetParent)
le={maxLeft:r,minLeft:-r,maxTop:document.documentElement.clientHeight-a.clientHeight-c,minTop:-c},ce=me}else le=null,ce=de
return v("onmove",t),re=!t.isModal()&&t.isPinned(),ne=t,ce(n,a),s(document.body,z.noSelection),!1}}}function fe(e){var t
ne&&("touchmove"===e.type?(e.preventDefault(),t=e.targetTouches[0]):0===e.button&&(t=e),t&&ce(t,ne.elements.dialog))}function he(){if(ne){var e=ne
ne=le=null,o(document.body,z.noSelection),o(e.elements.dialog,z.capture),v("onmoved",e)}}function pe(e){ne=null
var t=e.elements.dialog
t.style.left=t.style.top=""}var be=null,ve=Number.Nan,ge=0,ye=0,_e=0
function xe(e,t){var n
if(!t.isMaximized()&&("touchstart"===e.type?(e.preventDefault(),n=e.targetTouches[0]):0===e.button&&(n=e),n)){v("onresize",t),be=t,_e=t.elements.resizeHandle.offsetHeight/2
var i=t.elements.dialog
return s(i,z.capture),ve=parseInt(i.style.left,10),i.style.height=i.offsetHeight+"px",i.style.minHeight=t.elements.header.offsetHeight+t.elements.footer.offsetHeight+"px",i.style.width=(ge=i.offsetWidth)+"px","none"!==i.style.maxWidth&&(i.style.minWidth=(ye=i.offsetWidth)+"px"),i.style.maxWidth="none",s(document.body,z.noSelection),!1}}function ke(e){var t
be&&("touchmove"===e.type?(e.preventDefault(),t=e.targetTouches[0]):0===e.button&&(t=e),t&&function(e,t,n){var i,s,o=t,l=0,r=0
do{l+=o.offsetLeft,r+=o.offsetTop}while(o=o.offsetParent)
!0===n?(i=e.pageX,s=e.pageY):(i=e.clientX,s=e.clientY)
var c=a()
if(c&&(i=document.body.offsetWidth-i,isNaN(ve)||(l=document.body.offsetWidth-l-t.offsetWidth)),t.style.height=s-r+_e+"px",t.style.width=i-l+_e+"px",!isNaN(ve)){var d=.5*Math.abs(t.offsetWidth-ge)
c&&(d*=-1),t.offsetWidth>ge?t.style.left=ve+d+"px":t.offsetWidth>=ye&&(t.style.left=ve-d+"px")}}(t,be.elements.dialog,!be.get("modal")&&!be.get("pinned")))}function He(){if(be){var e=be
be=null,o(document.body,z.noSelection),o(e.elements.dialog,z.capture),U=!0,v("onresized",e)}}function ze(e){be=null
var t=e.elements.dialog
"none"===t.style.maxWidth&&(t.style.maxWidth=t.style.minWidth=t.style.width=t.style.height=t.style.minHeight=t.style.left="",ve=Number.Nan,ge=ye=_e=0)}function we(){for(var e=0;e<i.length;e+=1){var t=i[e]
t.get("autoReset")&&(pe(t),ze(t))}}function Te(e){u(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function Ce(e){f(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function Oe(e){u(e.elements.header,"mousedown",e.__internal.beginMoveHandler),u(e.elements.header,"touchstart",e.__internal.beginMoveHandler)}function Ee(e){f(e.elements.header,"mousedown",e.__internal.beginMoveHandler),f(e.elements.header,"touchstart",e.__internal.beginMoveHandler)}function Me(e){u(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),u(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler)}function je(e){f(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),f(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler)}return{__init:w,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(z.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(z.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(z.unpinned)<0},maximize:function(){return this.isMaximized()||W(this),this},restore:function(){return this.isMaximized()&&R(this),this},pin:function(){return this.isPinned()||S(this),this},unpin:function(){return this.isPinned()&&P(this),this},bringToFront:function(){return j(0,this),this},moveTo:function(e,t){if(!isNaN(e)&&!isNaN(t)){v("onmove",this)
var n=this.elements.dialog,i=n,s=0,o=0
n.style.left&&(s-=parseInt(n.style.left,10)),n.style.top&&(o-=parseInt(n.style.top,10))
do{s+=i.offsetLeft,o+=i.offsetTop}while(i=i.offsetParent)
var l=e-s,r=t-o
a()&&(l*=-1),n.style.left=l+"px",n.style.top=r+"px",v("onmoved",this)}return this},resizeTo:function(e,t){var n=parseFloat(e),i=parseFloat(t),s=/(\d*\.\d+|\d+)%/
if(!isNaN(n)&&!isNaN(i)&&!0===this.get("resizable")){v("onresize",this),(""+e).match(s)&&(n=n/100*document.documentElement.clientWidth),(""+t).match(s)&&(i=i/100*document.documentElement.clientHeight)
var o=this.elements.dialog
"none"!==o.style.maxWidth&&(o.style.minWidth=(ye=o.offsetWidth)+"px"),o.style.maxWidth="none",o.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+"px",o.style.width=n+"px",o.style.height=i+"px",v("onresized",this)}return this},setting:function(e,t){var n=this,i=L(this,this.__internal.options,function(e,t,i){N(n,e,t,i)},e,t)
if("get"===i.op)return i.found?i.value:void 0!==this.settings?L(this,this.settings,this.settingUpdated||function(){},e,t).value:void 0
if("set"===i.op){if(i.items.length>0)for(var s=this.settingUpdated||function(){},o=0;o<i.items.length;o+=1){var a=i.items[o]
a.found||void 0===this.settings||L(this,this.settings,s,a.key,a.value)}return this}},set:function(e,t){return this.setting(e,t),this},get:function(e){return this.setting(e)},setHeader:function(t){return"string"==typeof t?(c(this.elements.header),this.elements.header.innerHTML=t):t instanceof e.HTMLElement&&this.elements.header.firstChild!==t&&(c(this.elements.header),this.elements.header.appendChild(t)),this},setContent:function(t){return"string"==typeof t?(c(this.elements.content),this.elements.content.innerHTML=t):t instanceof e.HTMLElement&&this.elements.content.firstChild!==t&&(c(this.elements.content),this.elements.content.appendChild(t)),this},showModal:function(e){return this.show(!0,e)},show:function(t,a){if(w(this),this.__internal.isOpen){pe(this),ze(this),s(this.elements.dialog,z.shake)
var c=this
setTimeout(function(){o(c.elements.dialog,z.shake)},200)}else{if(this.__internal.isOpen=!0,i.push(this),_.defaults.maintainFocus&&(this.__internal.activeElement=document.activeElement),document.body.hasAttribute("tabindex")||document.body.setAttribute("tabindex",x="0"),"function"==typeof this.prepare&&this.prepare(),m=this,1===i.length&&(u(e,"resize",we),u(document.body,"keyup",V),u(document.body,"keydown",Q),u(document.body,"focus",$),u(document.documentElement,"mousemove",fe),u(document.documentElement,"touchmove",fe),u(document.documentElement,"mouseup",he),u(document.documentElement,"touchend",he),u(document.documentElement,"mousemove",ke),u(document.documentElement,"touchmove",ke),u(document.documentElement,"mouseup",He),u(document.documentElement,"touchend",He)),u(m.elements.commands.container,"click",m.__internal.commandsClickHandler),u(m.elements.footer,"click",m.__internal.buttonsClickHandler),u(m.elements.reset[0],"focus",m.__internal.resetHandler),u(m.elements.reset[1],"focus",m.__internal.resetHandler),q=!0,u(m.elements.dialog,h.type,m.__internal.transitionInHandler),m.get("modal")||Te(m),m.get("resizable")&&Me(m),m.get("movable")&&Oe(m),void 0!==t&&this.set("modal",t),n=r(),g=l(),C(),"string"==typeof a&&""!==a&&(this.__internal.className=a,s(this.elements.root,a)),this.get("startMaximized")?this.maximize():this.isMaximized()&&R(this),D(this),o(this.elements.root,z.animationOut),s(this.elements.root,z.animationIn),clearTimeout(this.__internal.timerIn),this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,h.supported?1e3:100),k){var d=this.elements.root
d.style.display="none",setTimeout(function(){d.style.display="block"},0)}this.elements.root.offsetWidth,o(this.elements.root,z.hidden),"function"==typeof this.hooks.onshow&&this.hooks.onshow.call(this),v("onshow",this)}var m
return this},close:function(){var t
return this.__internal.isOpen&&!1!==v("onclosing",this)&&(t=this,1===i.length&&(f(e,"resize",we),f(document.body,"keyup",V),f(document.body,"keydown",Q),f(document.body,"focus",$),f(document.documentElement,"mousemove",fe),f(document.documentElement,"mouseup",he),f(document.documentElement,"mousemove",ke),f(document.documentElement,"mouseup",He)),f(t.elements.commands.container,"click",t.__internal.commandsClickHandler),f(t.elements.footer,"click",t.__internal.buttonsClickHandler),f(t.elements.reset[0],"focus",t.__internal.resetHandler),f(t.elements.reset[1],"focus",t.__internal.resetHandler),u(t.elements.dialog,h.type,t.__internal.transitionOutHandler),t.get("modal")||Ce(t),t.get("movable")&&Ee(t),t.get("resizable")&&je(t),o(this.elements.root,z.animationIn),s(this.elements.root,z.animationOut),clearTimeout(this.__internal.timerOut),this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,h.supported?1e3:100),s(this.elements.root,z.hidden),this.elements.modal.offsetWidth,void 0!==this.__internal.className&&""!==this.__internal.className&&o(this.elements.root,this.__internal.className),"function"==typeof this.hooks.onclose&&this.hooks.onclose.call(this),v("onclose",this),i.splice(i.indexOf(this),1),this.__internal.isOpen=!1,C()),i.length||"0"!==x||document.body.removeAttribute("tabindex"),this},closeOthers:function(){return _.closeAll(this),this},destroy:function(){return this.__internal&&(this.__internal.isOpen?(this.__internal.destroy=function(){m(this,w)},this.close()):this.__internal.destroy||m(this,w)),this}}}(),y=function(){var t,n=[],i={base:"alertify-notifier",message:"ajs-message",top:"ajs-top",right:"ajs-right",bottom:"ajs-bottom",left:"ajs-left",center:"ajs-center",visible:"ajs-visible",hidden:"ajs-hidden",close:"ajs-close"}
function a(e){e.__internal||(e.__internal={position:_.defaults.notifier.position,delay:_.defaults.notifier.delay},t=document.createElement("DIV"),l(e)),t.parentNode!==document.body&&document.body.appendChild(t)}function l(e){switch(t.className=i.base,e.__internal.position){case"top-right":s(t,i.top+" "+i.right)
break
case"top-left":s(t,i.top+" "+i.left)
break
case"top-center":s(t,i.top+" "+i.center)
break
case"bottom-left":s(t,i.bottom+" "+i.left)
break
case"bottom-center":s(t,i.bottom+" "+i.center)
break
default:case"bottom-right":s(t,i.bottom+" "+i.right)}}function r(a,l){function r(e,t){t.__internal.closeButton&&"true"!==e.target.getAttribute("data-close")||t.dismiss(!0)}function d(e,n){f(n.element,h.type,d),t.removeChild(n.element)}function m(e){clearTimeout(e.__internal.timer),clearTimeout(e.__internal.transitionTimeout)}return(b={element:a,push:function(e,o){if(!this.__internal.pushed){var a,l
switch((r=this).__internal.pushed=!0,n.push(r),m(this),arguments.length){case 0:l=this.__internal.delay
break
case 1:"number"==typeof e?l=e:(a=e,l=this.__internal.delay)
break
case 2:a=e,l=o}return this.__internal.closeButton=_.defaults.notifier.closeButton,void 0!==a&&this.setContent(a),y.__internal.position.indexOf("top")<0?t.appendChild(this.element):t.insertBefore(this.element,t.firstChild),this.element.offsetWidth,s(this.element,i.visible),u(this.element,"click",this.__internal.clickHandler),this.delay(l)}var r
return this},ondismiss:function(){},callback:l,dismiss:function(e){var s
return this.__internal.pushed&&(m(this),"function"==typeof this.ondismiss&&!1===this.ondismiss.call(this)||(f(this.element,"click",this.__internal.clickHandler),void 0!==this.element&&this.element.parentNode===t&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,h.supported?1e3:100),o(this.element,i.visible),"function"==typeof this.callback&&this.callback.call(this,e)),s=this,n.splice(n.indexOf(s),1),s.__internal.pushed=!1)),this},delay:function(e){if(m(this),this.__internal.delay=void 0===e||isNaN(+e)?y.__internal.delay:+e,this.__internal.delay>0){var t=this
this.__internal.timer=setTimeout(function(){t.dismiss()},1e3*this.__internal.delay)}return this},setContent:function(t){if("string"==typeof t?(c(this.element),this.element.innerHTML=t):t instanceof e.HTMLElement&&this.element.firstChild!==t&&(c(this.element),this.element.appendChild(t)),this.__internal.closeButton){var n=document.createElement("span")
s(n,i.close),n.setAttribute("data-close",!0),this.element.appendChild(n)}return this},dismissOthers:function(){return y.dismissAll(this),this}}).__internal||(b.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0},b.__internal.clickHandler=p(b,r),b.__internal.transitionEndHandler=p(b,d)),b
var b}return{setting:function(e,t){if(a(this),void 0===t)return this.__internal[e]
switch(e){case"position":this.__internal.position=t,l(this)
break
case"delay":this.__internal.delay=t}return this},set:function(e,t){return this.setting(e,t),this},get:function(e){return this.setting(e)},create:function(e,t){a(this)
var n=document.createElement("div")
return n.className=i.message+("string"==typeof e&&""!==e?" ajs-"+e:""),r(n,t)},dismissAll:function(e){for(var t=n.slice(0),i=0;i<t.length;i+=1){var s=t[i]
void 0!==e&&e===s||s.dismiss()}}}}()
var _=new function(){var e={}
function t(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])
return e}function s(t){var n=e[t].dialog
return n&&"function"==typeof n.__init&&n.__init(n),n}return{defaults:n,dialog:function(n,i,o,a){if("function"!=typeof i)return s(n)
if(this.hasOwnProperty(n))throw new Error("alertify.dialog: name already exists")
var l=function(n,i,s,o){var a={dialog:null,factory:i}
return void 0!==o&&(a.factory=function(){return t(new e[o].factory,new i)}),s||(a.dialog=t(new a.factory,g)),e[n]=a}(n,i,o,a)
this[n]=o?function(){if(0===arguments.length)return l.dialog
var e=t(new l.factory,g)
return e&&"function"==typeof e.__init&&e.__init(e),e.main.apply(e,arguments),e.show.apply(e)}:function(){if(l.dialog&&"function"==typeof l.dialog.__init&&l.dialog.__init(l.dialog),0===arguments.length)return l.dialog
var e=l.dialog
return e.main.apply(l.dialog,arguments),e.show.apply(l.dialog)}},closeAll:function(e){for(var t=i.slice(0),n=0;n<t.length;n+=1){var s=t[n]
void 0!==e&&e===s||s.close()}},setting:function(e,t,n){if("notifier"===e)return y.setting(t,n)
var i=s(e)
return i?i.setting(t,n):void 0},set:function(e,t,n){return this.setting(e,t,n)},get:function(e,t){return this.setting(e,t)},notify:function(e,t,n,i){return y.create(t,i).push(e,n)},message:function(e,t,n){return y.create(null,n).push(e,t)},success:function(e,t,n){return y.create("success",n).push(e,t)},error:function(e,t,n){return y.create("error",n).push(e,t)},warning:function(e,t,n){return y.create("warning",n).push(e,t)},dismissAll:function(){y.dismissAll()}}}
_.dialog("alert",function(){return{main:function(e,t,n){var i,s,o
switch(arguments.length){case 1:s=e
break
case 2:"function"==typeof t?(s=e,o=t):(i=e,s=t)
break
case 3:i=e,s=t,o=n}return this.set("title",i),this.set("message",s),this.set("onok",o),this},setup:function(){return{buttons:[{text:_.defaults.glossary.ok,key:t.ESC,invokeOnClose:!0,className:_.defaults.theme.ok}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(e){this.setContent(e)},settings:{message:void 0,onok:void 0,label:void 0},settingUpdated:function(e,t,n){switch(e){case"message":this.setMessage(n)
break
case"label":this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=n)}},callback:function(e){if("function"==typeof this.get("onok")){var t=this.get("onok").call(this,e)
void 0!==t&&(e.cancel=!t)}}}}),_.dialog("confirm",function(){var e={timer:null,index:null,text:null,duration:null,task:function(t,i){if(i.isOpen()){if(i.__internal.buttons[e.index].element.innerHTML=e.text+" (&#8207;"+e.duration+"&#8207;) ",e.duration-=1,-1===e.duration){n(i)
var s=i.__internal.buttons[e.index],o=b(e.index,s)
"function"==typeof i.callback&&i.callback.apply(i,[o]),!1!==o.close&&i.close()}}else n(i)}}
function n(t){null!==e.timer&&(clearInterval(e.timer),e.timer=null,t.__internal.buttons[e.index].element.innerHTML=e.text)}function i(t,i,s){n(t),e.duration=s,e.index=i,e.text=t.__internal.buttons[i].element.innerHTML,e.timer=setInterval(p(t,e.task),1e3),e.task(null,t)}return{main:function(e,t,n,i){var s,o,a,l
switch(arguments.length){case 1:o=e
break
case 2:o=e,a=t
break
case 3:o=e,a=t,l=n
break
case 4:s=e,o=t,a=n,l=i}return this.set("title",s),this.set("message",o),this.set("onok",a),this.set("oncancel",l),this},setup:function(){return{buttons:[{text:_.defaults.glossary.ok,key:t.ENTER,className:_.defaults.theme.ok},{text:_.defaults.glossary.cancel,key:t.ESC,invokeOnClose:!0,className:_.defaults.theme.cancel}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(e){this.setContent(e)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null},settingUpdated:function(e,t,n){switch(e){case"message":this.setMessage(n)
break
case"labels":"ok"in n&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].text=n.ok,this.__internal.buttons[0].element.innerHTML=n.ok),"cancel"in n&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].text=n.cancel,this.__internal.buttons[1].element.innerHTML=n.cancel)
break
case"reverseButtons":!0===n?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)
break
case"defaultFocus":this.__internal.focus.element="ok"===n?0:1}},callback:function(e){var t
switch(n(this),e.index){case 0:"function"==typeof this.get("onok")&&void 0!==(t=this.get("onok").call(this,e))&&(e.cancel=!t)
break
case 1:"function"==typeof this.get("oncancel")&&void 0!==(t=this.get("oncancel").call(this,e))&&(e.cancel=!t)}},autoOk:function(e){return i(this,0,e),this},autoCancel:function(e){return i(this,1,e),this}}}),_.dialog("prompt",function(){var n=document.createElement("INPUT"),i=document.createElement("P")
return{main:function(e,t,n,i,s){var o,a,l,r,c
switch(arguments.length){case 1:a=e
break
case 2:a=e,l=t
break
case 3:a=e,l=t,r=n
break
case 4:a=e,l=t,r=n,c=i
break
case 5:o=e,a=t,l=n,r=i,c=s}return this.set("title",o),this.set("message",a),this.set("value",l),this.set("onok",r),this.set("oncancel",c),this},setup:function(){return{buttons:[{text:_.defaults.glossary.ok,key:t.ENTER,className:_.defaults.theme.ok},{text:_.defaults.glossary.cancel,key:t.ESC,invokeOnClose:!0,className:_.defaults.theme.cancel}],focus:{element:n,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){n.className=_.defaults.theme.input,n.setAttribute("type","text"),n.value=this.get("value"),this.elements.content.appendChild(i),this.elements.content.appendChild(n)},prepare:function(){},setMessage:function(t){"string"==typeof t?(c(i),i.innerHTML=t):t instanceof e.HTMLElement&&i.firstChild!==t&&(c(i),i.appendChild(t))},settings:{message:void 0,labels:void 0,onok:void 0,oncancel:void 0,value:"",type:"text",reverseButtons:void 0},settingUpdated:function(e,t,i){switch(e){case"message":this.setMessage(i)
break
case"value":n.value=i
break
case"type":switch(i){case"text":case"color":case"date":case"datetime-local":case"email":case"month":case"number":case"password":case"search":case"tel":case"time":case"week":n.type=i
break
default:n.type="text"}break
case"labels":i.ok&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=i.ok),i.cancel&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].element.innerHTML=i.cancel)
break
case"reverseButtons":!0===i?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)}},callback:function(e){var t
switch(e.index){case 0:this.settings.value=n.value,"function"==typeof this.get("onok")&&void 0!==(t=this.get("onok").call(this,e,this.settings.value))&&(e.cancel=!t)
break
case 1:"function"==typeof this.get("oncancel")&&void 0!==(t=this.get("oncancel").call(this,e))&&(e.cancel=!t),e.cancel||(n.value=this.settings.value)}}}}),"object"==typeof module&&"object"==typeof module.exports?module.exports=_:"function"==typeof define&&define.amd?define([],function(){return _}):e.alertify||(e.alertify=_)})("undefined"!=typeof window?window:this)
