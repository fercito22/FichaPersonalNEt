var bootstrap=function(t,e){"use strict"
function n(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t){return t&&"[object Function]"==={}.toString.call(t)}function r(t,e){if(1!==t.nodeType)return[]
var n=window.getComputedStyle(t,null)
return e?n[e]:n}function o(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function s(t){if(!t||-1!==["HTML","BODY","#document"].indexOf(t.nodeName))return window.document.body
var e=r(t),n=e.overflow,i=e.overflowX
return/(auto|scroll)/.test(n+e.overflowY+i)?t:s(o(t))}function a(t){var e=t&&t.offsetParent,n=e&&e.nodeName
return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(e.nodeName)&&"static"===r(e,"position")?a(e):e:window.document.documentElement}function l(t){return null!==t.parentNode?l(t.parentNode):t}function c(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return window.document.documentElement
var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,r=n?e:t,o=document.createRange()
o.setStart(i,0),o.setEnd(r,0)
var s=o.commonAncestorContainer
if(t!==s&&e!==s||i.contains(r))return function(t){var e=t.nodeName
return"BODY"!==e&&("HTML"===e||a(t.firstElementChild)===t)}(s)?s:a(s)
var h=l(t)
return h.host?c(h.host,e):c(t,l(e).host)}function h(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName
if("BODY"===n||"HTML"===n){var i=window.document.documentElement
return(window.document.scrollingElement||i)[e]}return t[e]}function f(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=h(e,"top"),r=h(e,"left"),o=n?-1:1
return t.top+=i*o,t.bottom+=i*o,t.left+=r*o,t.right+=r*o,t}function u(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom"
return+t["border"+n+"Width"].split("px")[0]+ +t["border"+i+"Width"].split("px")[0]}function d(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],X()?n["offset"+t]+i["margin"+("Height"===t?"Top":"Left")]+i["margin"+("Height"===t?"Bottom":"Right")]:0)}function p(){var t=window.document.body,e=window.document.documentElement,n=X()&&window.getComputedStyle(e)
return{height:d("Height",t,e,n),width:d("Width",t,e,n)}}function g(t){return tt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function m(t){var e={}
if(X())try{e=t.getBoundingClientRect()
var n=h(t,"top"),i=h(t,"left")
e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}catch(t){}else e=t.getBoundingClientRect()
var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},s="HTML"===t.nodeName?p():{},a=s.width||t.clientWidth||o.right-o.left,l=s.height||t.clientHeight||o.bottom-o.top,c=t.offsetWidth-a,f=t.offsetHeight-l
if(c||f){var d=r(t)
c-=u(d,"x"),f-=u(d,"y"),o.width-=c,o.height-=f}return g(o)}function _(t,e){var n=X(),i="HTML"===e.nodeName,o=m(t),a=m(e),l=s(t),c=r(e),h=+c.borderTopWidth.split("px")[0],u=+c.borderLeftWidth.split("px")[0],d=g({top:o.top-a.top-h,left:o.left-a.left-u,width:o.width,height:o.height})
if(d.marginTop=0,d.marginLeft=0,!n&&i){var p=+c.marginTop.split("px")[0],_=+c.marginLeft.split("px")[0]
d.top-=h-p,d.bottom-=h-p,d.left-=u-_,d.right-=u-_,d.marginTop=p,d.marginLeft=_}return(n?e.contains(l):e===l&&"BODY"!==l.nodeName)&&(d=f(d,e)),d}function v(t){var e=window.document.documentElement,n=_(t,e),i=Math.max(e.clientWidth,window.innerWidth||0),r=Math.max(e.clientHeight,window.innerHeight||0),o=h(e),s=h(e,"left")
return g({top:o-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r})}function b(t){var e=t.nodeName
return"BODY"!==e&&"HTML"!==e&&("fixed"===r(t,"position")||b(o(t)))}function E(t,e,n,i){var r={top:0,left:0},a=c(t,e)
if("viewport"===i)r=v(a)
else{var l=void 0
"scrollParent"===i?"BODY"===(l=s(o(t))).nodeName&&(l=window.document.documentElement):l="window"===i?window.document.documentElement:i
var h=_(l,a)
if("HTML"!==l.nodeName||b(a))r=h
else{var f=p(),u=f.height,d=f.width
r.top+=h.top-h.marginTop,r.bottom=u+h.top,r.left+=h.left-h.marginLeft,r.right=d+h.left}}return r.left+=n,r.top+=n,r.right-=n,r.bottom-=n,r}function y(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0
if(-1===t.indexOf("auto"))return t
var s=E(n,i,o,r),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return tt({key:t},a[t],{area:function(t){return t.width*t.height}(a[t])})}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,i=t.height
return e>=n.clientWidth&&i>=n.clientHeight}),h=c.length>0?c[0].key:l[0].key,f=t.split("-")[1]
return h+(f?"-"+f:"")}function T(t,e,n){return _(n,c(e,n))}function w(t){var e=window.getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight)
return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function C(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"}
return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function A(t,e,n){n=n.split("-")[0]
var i=w(t),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height"
return r[s]=e[s]+e[l]/2-i[l]/2,r[a]=n===a?e[a]-i[c]:e[C(a)],r}function I(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function D(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n})
var i=I(t,function(t){return t[e]===n})
return t.indexOf(i)}(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!")
var n=t.function||t.fn
t.enabled&&i(n)&&(e.offsets.popper=g(e.offsets.popper),e.offsets.reference=g(e.offsets.reference),e=n(e,t))}),e}function N(t,e){return t.some(function(t){var n=t.name
return t.enabled&&n===e})}function S(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length-1;i++){var r=e[i],o=r?""+r+n:t
if(void 0!==window.document.body.style[o])return o}return null}function O(t,e,n,i){n.updateBound=i,window.addEventListener("resize",n.updateBound,{passive:!0})
var r=s(t)
return function t(e,n,i,r){var o="BODY"===e.nodeName,a=o?window:e
a.addEventListener(n,i,{passive:!0}),o||t(s(a.parentNode),n,i,r),r.push(a)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function k(){var t
this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=(this.reference,t=this.state,window.removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function x(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function L(t,e){Object.keys(e).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&x(e[n])&&(i="px"),t.style[n]=e[n]+i})}function P(t,e,n){var i=I(t,function(t){return t.name===e}),r=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order})
if(!r){var o="`"+e+"`",s="`"+n+"`"
console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}function R(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=nt.indexOf(t),i=nt.slice(n+1).concat(nt.slice(0,n))
return e?i.reverse():i}function j(t,e,n,i){var r=[0,0],o=-1!==["right","left"].indexOf(i),s=t.split(/(\+|\-)/).map(function(t){return t.trim()}),a=s.indexOf(I(s,function(t){return-1!==t.search(/,|\s/)}))
s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")
var l=/\s*,\s*|\s+/,c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s]
return(c=c.map(function(t,i){var r=(1===i?!o:o)?"height":"width",s=!1
return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2]
if(!o)return t
if(0===s.indexOf("%")){var a=void 0
switch(s){case"%p":a=n
break
case"%":case"%r":default:a=i}return g(a)[e]/100*o}return"vh"===s||"vw"===s?("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o:o}(t,r,e,n)})})).forEach(function(t,e){t.forEach(function(n,i){x(n)&&(r[e]+=n*("-"===t[i-1]?-1:1))})}),r}e=e&&e.hasOwnProperty("default")?e.default:e
for(var M=function(){function t(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}var n=!1,i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},r={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t))
return t},getSelectorFromElement:function(t){var n=t.getAttribute("data-target")
n&&"#"!==n||(n=t.getAttribute("href")||"")
try{return e(document).find(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(n.end)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(e,n,i){for(var o in i)if(Object.prototype.hasOwnProperty.call(i,o)){var s=i[o],a=n[o],l=a&&r.isElement(a)?"element":t(a)
if(!new RegExp(s).test(l))throw new Error(e.toUpperCase()+': Option "'+o+'" provided type "'+l+'" but expected type "'+s+'".')}}}
return n=function(){if(window.QUnit)return!1
var t=document.createElement("bootstrap")
for(var e in i)if(void 0!==t.style[e])return{end:i[e]}
return!1}(),e.fn.emulateTransitionEnd=function(t){var n=this,i=!1
return e(this).one(r.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||r.triggerTransitionEnd(n)},t),this},r.supportsTransitionEnd()&&(e.event.special[r.TRANSITION_END]={bindType:n.end,delegateType:n.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}),r}(),H=function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t},W=function(){var t="alert",n=e.fn[t],i="close.bs.alert",r="closed.bs.alert",o="click.bs.alert.data-api",s="alert",a="fade",l="show",c=function(){function t(t){this._element=t}var n=t.prototype
return n.close=function(t){t=t||this._element
var e=this._getRootElement(t)
this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=M.getSelectorFromElement(t),i=!1
return n&&(i=e(n)[0]),i||(i=e(t).closest("."+s)[0]),i},n._triggerCloseEvent=function(t){var n=e.Event(i)
return e(t).trigger(n),n},n._removeElement=function(t){var n=this
e(t).removeClass(l),M.supportsTransitionEnd()&&e(t).hasClass(a)?e(t).one(M.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(150):this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger(r).remove()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),r=i.data("bs.alert")
r||(r=new t(this),i.data("bs.alert",r)),"close"===n&&r[n](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},H(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}()
return e(document).on(o,'[data-dismiss="alert"]',c._handleDismiss(new c)),e.fn[t]=c._jQueryInterface,e.fn[t].Constructor=c,e.fn[t].noConflict=function(){return e.fn[t]=n,c._jQueryInterface},c}(),B=function(){var t="button",n=e.fn[t],i="active",r="btn",o="focus",s='[data-toggle^="button"]',a='[data-toggle="buttons"]',l="input",c=".active",h=".btn",f="click.bs.button.data-api",u="focus.bs.button.data-api blur.bs.button.data-api",d=function(){function t(t){this._element=t}var n=t.prototype
return n.toggle=function(){var t=!0,n=!0,r=e(this._element).closest(a)[0]
if(r){var o=e(this._element).find(l)[0]
if(o){if("radio"===o.type)if(o.checked&&e(this._element).hasClass(i))t=!1
else{var s=e(r).find(c)[0]
s&&e(s).removeClass(i)}if(t){if(o.hasAttribute("disabled")||r.hasAttribute("disabled")||o.classList.contains("disabled")||r.classList.contains("disabled"))return
o.checked=!e(this._element).hasClass(i),e(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!e(this._element).hasClass(i)),t&&e(this._element).toggleClass(i)},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("bs.button")
i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()})},H(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}()
return e(document).on(f,s,function(t){t.preventDefault()
var n=t.target
e(n).hasClass(r)||(n=e(n).closest(h)),d._jQueryInterface.call(e(n),"toggle")}).on(u,s,function(t){var n=e(t.target).closest(h)[0]
e(n).toggleClass(o,/^focus(in)?$/.test(t.type))}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=n,d._jQueryInterface},d}(),U=function(){var t="carousel",n="bs.carousel",i="."+n,r=e.fn[t],o={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},s={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},a="next",l="prev",c="left",h="right",f={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},u="carousel",d="active",p="slide",g="carousel-item-right",m="carousel-item-left",_="carousel-item-next",v="carousel-item-prev",b={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},E=function(){function r(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(b.INDICATORS)[0],this._addEventListeners()}var E=r.prototype
return E.next=function(){this._isSliding||this._slide(a)},E.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},E.prev=function(){this._isSliding||this._slide(l)},E.pause=function(t){t||(this._isPaused=!0),e(this._element).find(b.NEXT_PREV)[0]&&M.supportsTransitionEnd()&&(M.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},E.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},E.to=function(t){var n=this
this._activeElement=e(this._element).find(b.ACTIVE_ITEM)[0]
var i=this._getItemIndex(this._activeElement)
if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(f.SLID,function(){return n.to(t)})
else{if(i===t)return this.pause(),void this.cycle()
var r=t>i?a:l
this._slide(r,this._items[t])}},E.dispose=function(){e(this._element).off(i),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},E._getConfig=function(n){return n=e.extend({},o,n),M.typeCheckConfig(t,n,s),n},E._addEventListeners=function(){var t=this
this._config.keyboard&&e(this._element).on(f.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(f.MOUSEENTER,function(e){return t.pause(e)}).on(f.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&e(this._element).on(f.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},E._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev()
break
case 39:t.preventDefault(),this.next()
break
default:return}},E._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(b.ITEM)),this._items.indexOf(t)},E._getItemByDirection=function(t,e){var n=t===a,i=t===l,r=this._getItemIndex(e),o=this._items.length-1
if((i&&0===r||n&&r===o)&&!this._config.wrap)return e
var s=(r+(t===l?-1:1))%this._items.length
return-1===s?this._items[this._items.length-1]:this._items[s]},E._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),r=this._getItemIndex(e(this._element).find(b.ACTIVE_ITEM)[0]),o=e.Event(f.SLIDE,{relatedTarget:t,direction:n,from:r,to:i})
return e(this._element).trigger(o),o},E._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(b.ACTIVE).removeClass(d)
var n=this._indicatorsElement.children[this._getItemIndex(t)]
n&&e(n).addClass(d)}},E._slide=function(t,n){var i,r,o,s=this,l=e(this._element).find(b.ACTIVE_ITEM)[0],u=this._getItemIndex(l),E=n||l&&this._getItemByDirection(t,l),y=this._getItemIndex(E),T=Boolean(this._interval)
if(t===a?(i=m,r=_,o=c):(i=g,r=v,o=h),E&&e(E).hasClass(d))this._isSliding=!1
else if(!this._triggerSlideEvent(E,o).isDefaultPrevented()&&l&&E){this._isSliding=!0,T&&this.pause(),this._setActiveIndicatorElement(E)
var w=e.Event(f.SLID,{relatedTarget:E,direction:o,from:u,to:y})
M.supportsTransitionEnd()&&e(this._element).hasClass(p)?(e(E).addClass(r),M.reflow(E),e(l).addClass(i),e(E).addClass(i),e(l).one(M.TRANSITION_END,function(){e(E).removeClass(i+" "+r).addClass(d),e(l).removeClass(d+" "+r+" "+i),s._isSliding=!1,setTimeout(function(){return e(s._element).trigger(w)},0)}).emulateTransitionEnd(600)):(e(l).removeClass(d),e(E).addClass(d),this._isSliding=!1,e(this._element).trigger(w)),T&&this.cycle()}},r._jQueryInterface=function(t){return this.each(function(){var i=e(this).data(n),s=e.extend({},o,e(this).data())
"object"==typeof t&&e.extend(s,t)
var a="string"==typeof t?t:s.slide
if(i||(i=new r(this,s),e(this).data(n,i)),"number"==typeof t)i.to(t)
else if("string"==typeof a){if(void 0===i[a])throw new Error('No method named "'+a+'"')
i[a]()}else s.interval&&(i.pause(),i.cycle())})},r._dataApiClickHandler=function(t){var i=M.getSelectorFromElement(this)
if(i){var o=e(i)[0]
if(o&&e(o).hasClass(u)){var s=e.extend({},e(o).data(),e(this).data()),a=this.getAttribute("data-slide-to")
a&&(s.interval=!1),r._jQueryInterface.call(e(o),s),a&&e(o).data(n).to(a),t.preventDefault()}}},H(r,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return o}}]),r}()
return e(document).on(f.CLICK_DATA_API,b.DATA_SLIDE,E._dataApiClickHandler),e(window).on(f.LOAD_DATA_API,function(){e(b.DATA_RIDE).each(function(){var t=e(this)
E._jQueryInterface.call(t,t.data())})}),e.fn[t]=E._jQueryInterface,e.fn[t].Constructor=E,e.fn[t].noConflict=function(){return e.fn[t]=r,E._jQueryInterface},E}(),V=function(){var t="collapse",n="bs.collapse",i=e.fn[t],r={toggle:!0,parent:""},o={toggle:"boolean",parent:"(string|element)"},s="show.bs.collapse",a="shown.bs.collapse",l="hide.bs.collapse",c="hidden.bs.collapse",h="click.bs.collapse.data-api",f="show",u="collapse",d="collapsing",p="collapsed",g="width",m="height",_={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},v=function(){function i(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'))
for(var i=e(_.DATA_TOGGLE),r=0;r<i.length;r++){var o=i[r],s=M.getSelectorFromElement(o)
null!==s&&e(s).filter(t).length>0&&this._triggerArray.push(o)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var h=i.prototype
return h.toggle=function(){e(this._element).hasClass(f)?this.hide():this.show()},h.show=function(){var t,r,o=this
if(!this._isTransitioning&&!e(this._element).hasClass(f)&&(this._parent&&((t=e.makeArray(e(this._parent).children().children(_.ACTIVES))).length||(t=null)),!(t&&(r=e(t).data(n))&&r._isTransitioning))){var l=e.Event(s)
if(e(this._element).trigger(l),!l.isDefaultPrevented()){t&&(i._jQueryInterface.call(e(t),"hide"),r||e(t).data(n,null))
var c=this._getDimension()
e(this._element).removeClass(u).addClass(d),this._element.style[c]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(p).attr("aria-expanded",!0),this.setTransitioning(!0)
var h=function(){e(o._element).removeClass(d).addClass(u).addClass(f),o._element.style[c]="",o.setTransitioning(!1),e(o._element).trigger(a)}
if(M.supportsTransitionEnd()){var g="scroll"+(c[0].toUpperCase()+c.slice(1))
e(this._element).one(M.TRANSITION_END,h).emulateTransitionEnd(600),this._element.style[c]=this._element[g]+"px"}else h()}}},h.hide=function(){var t=this
if(!this._isTransitioning&&e(this._element).hasClass(f)){var n=e.Event(l)
if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension()
if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",M.reflow(this._element),e(this._element).addClass(d).removeClass(u).removeClass(f),this._triggerArray.length)for(var r=0;r<this._triggerArray.length;r++){var o=this._triggerArray[r],s=M.getSelectorFromElement(o)
null!==s&&(e(s).hasClass(f)||e(o).addClass(p).attr("aria-expanded",!1))}this.setTransitioning(!0)
var a=function(){t.setTransitioning(!1),e(t._element).removeClass(d).addClass(u).trigger(c)}
this._element.style[i]="",M.supportsTransitionEnd()?e(this._element).one(M.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},h.setTransitioning=function(t){this._isTransitioning=t},h.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},h._getConfig=function(n){return(n=e.extend({},r,n)).toggle=Boolean(n.toggle),M.typeCheckConfig(t,n,o),n},h._getDimension=function(){return e(this._element).hasClass(g)?g:m},h._getParent=function(){var t=this,n=null
M.isElement(this._config.parent)?(n=this._config.parent,void 0!==this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0]
var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]'
return e(n).find(r).each(function(e,n){t._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},h._addAriaAndCollapsedClass=function(t,n){if(t){var i=e(t).hasClass(f)
n.length&&e(n).toggleClass(p,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(t){var n=M.getSelectorFromElement(t)
return n?e(n)[0]:null},i._jQueryInterface=function(t){return this.each(function(){var o=e(this),s=o.data(n),a=e.extend({},r,o.data(),"object"==typeof t&&t)
if(!s&&a.toggle&&/show|hide/.test(t)&&(a.toggle=!1),s||(s=new i(this,a),o.data(n,s)),"string"==typeof t){if(void 0===s[t])throw new Error('No method named "'+t+'"')
s[t]()}})},H(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return r}}]),i}()
return e(document).on(h,_.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault()
var i=e(this),r=M.getSelectorFromElement(this)
e(r).each(function(){var t=e(this),r=t.data(n)?"toggle":i.data()
v._jQueryInterface.call(t,r)})}),e.fn[t]=v._jQueryInterface,e.fn[t].Constructor=v,e.fn[t].noConflict=function(){return e.fn[t]=i,v._jQueryInterface},v}(),F=["native code","[object MutationObserverConstructor]"],Q="undefined"!=typeof window,K=["Edge","Trident","Firefox"],Y=0,G=0;G<K.length;G+=1)if(Q&&navigator.userAgent.indexOf(K[G])>=0){Y=1
break}var q=Q&&function(t){return F.some(function(e){return(t||"").toString().indexOf(e)>-1})}(window.MutationObserver)?function(t){var e=!1,n=0,i=document.createElement("span")
return new MutationObserver(function(){t(),e=!1}).observe(i,{attributes:!0}),function(){e||(e=!0,i.setAttribute("x-index",n),n+=1)}}:function(t){var e=!1
return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Y))}},z=void 0,X=function(){return void 0===z&&(z=-1!==navigator.appVersion.indexOf("MSIE 10")),z},J=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},$=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Z=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},tt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},et=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],nt=et.slice(3),it="flip",rt="clockwise",ot="counterclockwise",st={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1]
if(i){var r=t.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Z({},l,o[l]),end:Z({},l,o[l]+o[c]-s[c])}
t.offsets.popper=tt({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n,i=e.offset,r=t.placement,o=t.offsets,s=o.popper,a=o.reference,l=r.split("-")[0]
return n=x(+i)?[+i,0]:j(i,s,a,l),"left"===l?(s.top+=n[0],s.left-=n[1]):"right"===l?(s.top+=n[0],s.left+=n[1]):"top"===l?(s.left+=n[0],s.top-=n[1]):"bottom"===l&&(s.left+=n[0],s.top+=n[1]),t.popper=s,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||a(t.instance.popper)
t.instance.reference===n&&(n=a(n))
var i=E(t.instance.popper,t.instance.reference,e.padding,n)
e.boundaries=i
var r=e.priority,o=t.offsets.popper,s={primary:function(t){var n=o[t]
return o[t]<i[t]&&!e.escapeWithReference&&(n=Math.max(o[t],i[t])),Z({},t,n)},secondary:function(t){var n="right"===t?"left":"top",r=o[n]
return o[t]>i[t]&&!e.escapeWithReference&&(r=Math.min(o[n],i[t]-("right"===t?o.width:o.height))),Z({},n,r)}}
return r.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary"
o=tt({},o,s[e](t))}),t.offsets.popper=o,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,r=t.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height"
return n[a]<o(i[l])&&(t.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(t.offsets.popper[l]=o(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){if(!P(t.instance.modifiers,"arrow","keepTogether"))return t
var n=e.element
if("string"==typeof n){if(!(n=t.instance.popper.querySelector(n)))return t}else if(!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t
var i=t.placement.split("-")[0],o=t.offsets,s=o.popper,a=o.reference,l=-1!==["left","right"].indexOf(i),c=l?"height":"width",h=l?"Top":"Left",f=h.toLowerCase(),u=l?"left":"top",d=l?"bottom":"right",p=w(n)[c]
a[d]-p<s[f]&&(t.offsets.popper[f]-=s[f]-(a[d]-p)),a[f]+p>s[d]&&(t.offsets.popper[f]+=a[f]+p-s[d])
var m=a[f]+a[c]/2-p/2,_=r(t.instance.popper,"margin"+h).replace("px",""),v=m-g(t.offsets.popper)[f]-_
return v=Math.max(Math.min(s[c]-p,v),0),t.arrowElement=n,t.offsets.arrow={},t.offsets.arrow[f]=Math.round(v),t.offsets.arrow[u]="",t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(N(t.instance.modifiers,"inner"))return t
if(t.flipped&&t.placement===t.originalPlacement)return t
var n=E(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement),i=t.placement.split("-")[0],r=C(i),o=t.placement.split("-")[1]||"",s=[]
switch(e.behavior){case it:s=[i,r]
break
case rt:s=R(i)
break
case ot:s=R(i,!0)
break
default:s=e.behavior}return s.forEach(function(a,l){if(i!==a||s.length===l+1)return t
i=t.placement.split("-")[0],r=C(i)
var c=t.offsets.popper,h=t.offsets.reference,f=Math.floor,u="left"===i&&f(c.right)>f(h.left)||"right"===i&&f(c.left)<f(h.right)||"top"===i&&f(c.bottom)>f(h.top)||"bottom"===i&&f(c.top)<f(h.bottom),d=f(c.left)<f(n.left),p=f(c.right)>f(n.right),g=f(c.top)<f(n.top),m=f(c.bottom)>f(n.bottom),_="left"===i&&d||"right"===i&&p||"top"===i&&g||"bottom"===i&&m,v=-1!==["top","bottom"].indexOf(i),b=!!e.flipVariations&&(v&&"start"===o&&d||v&&"end"===o&&p||!v&&"start"===o&&g||!v&&"end"===o&&m);(u||_||b)&&(t.flipped=!0,(u||_)&&(i=s[l+1]),b&&(o=function(t){return"end"===t?"start":"start"===t?"end":t}(o)),t.placement=i+(o?"-"+o:""),t.offsets.popper=tt({},t.offsets.popper,A(t.instance.popper,t.offsets.reference,t.placement)),t=D(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n)
return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),t.placement=C(e),t.offsets.popper=g(r),t}},hide:{order:800,enabled:!0,fn:function(t){if(!P(t.instance.modifiers,"hide","preventOverflow"))return t
var e=t.offsets.reference,n=I(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries
if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t
t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t
t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,r=t.offsets.popper,o=I(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration
void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")
var s,l,c=void 0!==o?o:e.gpuAcceleration,h=m(a(t.instance.popper)),f={position:r.position},u={left:Math.floor(r.left),top:Math.floor(r.top),bottom:Math.floor(r.bottom),right:Math.floor(r.right)},d="bottom"===n?"top":"bottom",p="right"===i?"left":"right",g=S("transform")
if(l="bottom"===d?-h.height+u.bottom:u.top,s="right"===p?-h.width+u.right:u.left,c&&g)f[g]="translate3d("+s+"px, "+l+"px, 0)",f[d]=0,f[p]=0,f.willChange="transform"
else{var _="bottom"===d?-1:1,v="right"===p?-1:1
f[d]=l*_,f[p]=s*v,f.willChange=d+", "+p}var b={"x-placement":t.placement}
return t.attributes=tt({},b,t.attributes),t.styles=tt({},f,t.styles),t.arrowStyles=tt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){return L(t.instance.popper,t.styles),function(t,e){Object.keys(e).forEach(function(n){!1!==e[n]?t.setAttribute(n,e[n]):t.removeAttribute(n)})}(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&L(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,r){var o=T(0,e,t),s=y(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding)
return e.setAttribute("x-placement",s),L(e,{position:"absolute"}),n},gpuAcceleration:void 0}}},at=function(){function t(e,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
J(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=q(this.update.bind(this)),this.options=tt({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e.jquery?e[0]:e,this.popper=n.jquery?n[0]:n,this.options.modifiers={},Object.keys(tt({},t.Defaults.modifiers,o.modifiers)).forEach(function(e){r.options.modifiers[e]=tt({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return tt({name:t},r.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&i(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)}),this.update()
var s=this.options.eventsEnabled
s&&this.enableEventListeners(),this.state.eventsEnabled=s}return $(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}}
t.offsets.reference=T(this.state,this.popper,this.reference),t.placement=y(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.offsets.popper=A(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position="absolute",t=D(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,N(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[S("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=O(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return k.call(this)}}]),t}()
at.Utils=("undefined"!=typeof window?window:global).PopperUtils,at.placements=et,at.Defaults=st
var lt=function(){if(void 0===at)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)")
var t="dropdown",n="bs.dropdown",i="."+n,r=e.fn[t],o=new RegExp("38|40|27"),s={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,CLICK:"click"+i,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},a="disabled",l="show",c="dropup",h="dropdown-menu-right",f="dropdown-menu-left",u='[data-toggle="dropdown"]',d=".dropdown form",p=".dropdown-menu",g=".navbar-nav",m=".dropdown-menu .dropdown-item:not(.disabled)",_="top-start",v="top-end",b="bottom-start",E="bottom-end",y={offset:0,flip:!0},T={offset:"(number|string|function)",flip:"boolean"},w=function(){function r(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var d=r.prototype
return d.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(a)){var t=r._getParentFromElement(this._element),n=e(this._menu).hasClass(l)
if(r._clearMenus(),!n){var i={relatedTarget:this._element},o=e.Event(s.SHOW,i)
if(e(t).trigger(o),!o.isDefaultPrevented()){var u=this._element
e(t).hasClass(c)&&(e(this._menu).hasClass(f)||e(this._menu).hasClass(h))&&(u=t),this._popper=new at(u,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!e(t).closest(g).length&&e("body").children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(l),e(t).toggleClass(l).trigger(e.Event(s.SHOWN,i))}}}},d.dispose=function(){e.removeData(this._element,n),e(this._element).off(i),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},d.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},d._addEventListeners=function(){var t=this
e(this._element).on(s.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},d._getConfig=function(n){return n=e.extend({},this.constructor.Default,e(this._element).data(),n),M.typeCheckConfig(t,n,this.constructor.DefaultType),n},d._getMenuElement=function(){if(!this._menu){var t=r._getParentFromElement(this._element)
this._menu=e(t).find(p)[0]}return this._menu},d._getPlacement=function(){var t=e(this._element).parent(),n=b
return t.hasClass(c)?(n=_,e(this._menu).hasClass(h)&&(n=v)):e(this._menu).hasClass(h)&&(n=E),n},d._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},d._getPopperConfig=function(){var t=this,n={}
"function"==typeof this._config.offset?n.fn=function(n){return n.offsets=e.extend({},n.offsets,t._config.offset(n.offsets)||{}),n}:n.offset=this._config.offset
var i={placement:this._getPlacement(),modifiers:{offset:n,flip:{enabled:this._config.flip}}}
return this._inNavbar&&(i.modifiers.applyStyle={enabled:!this._inNavbar}),i},r._jQueryInterface=function(t){return this.each(function(){var i=e(this).data(n)
if(i||(i=new r(this,"object"==typeof t?t:null),e(this).data(n,i)),"string"==typeof t){if(void 0===i[t])throw new Error('No method named "'+t+'"')
i[t]()}})},r._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var i=e.makeArray(e(u)),o=0;o<i.length;o++){var a=r._getParentFromElement(i[o]),c=e(i[o]).data(n),h={relatedTarget:i[o]}
if(c){var f=c._menu
if(e(a).hasClass(l)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(a,t.target))){var d=e.Event(s.HIDE,h)
e(a).trigger(d),d.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),e(f).removeClass(l),e(a).removeClass(l).trigger(e.Event(s.HIDDEN,h)))}}}},r._getParentFromElement=function(t){var n,i=M.getSelectorFromElement(t)
return i&&(n=e(i)[0]),n||t.parentNode},r._dataApiKeydownHandler=function(t){if(!(!o.test(t.which)||/button/i.test(t.target.tagName)&&32===t.which||/input|textarea/i.test(t.target.tagName)||(t.preventDefault(),t.stopPropagation(),this.disabled||e(this).hasClass(a)))){var n=r._getParentFromElement(this),i=e(n).hasClass(l)
if((i||27===t.which&&32===t.which)&&(!i||27!==t.which&&32!==t.which)){var s=e(n).find(m).get()
if(s.length){var c=s.indexOf(t.target)
38===t.which&&c>0&&c--,40===t.which&&c<s.length-1&&c++,c<0&&(c=0),s[c].focus()}}else{if(27===t.which){var h=e(n).find(u)[0]
e(h).trigger("focus")}e(this).trigger("click")}}},H(r,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return y}},{key:"DefaultType",get:function(){return T}}]),r}()
return e(document).on(s.KEYDOWN_DATA_API,u,w._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API,p,w._dataApiKeydownHandler).on(s.CLICK_DATA_API+" "+s.KEYUP_DATA_API,w._clearMenus).on(s.CLICK_DATA_API,u,function(t){t.preventDefault(),t.stopPropagation(),w._jQueryInterface.call(e(this),"toggle")}).on(s.CLICK_DATA_API,d,function(t){t.stopPropagation()}),e.fn[t]=w._jQueryInterface,e.fn[t].Constructor=w,e.fn[t].noConflict=function(){return e.fn[t]=r,w._jQueryInterface},w}(),ct=function(){var t="modal",n=e.fn[t],i={backdrop:!0,keyboard:!0,focus:!0,show:!0},r={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},o="hide.bs.modal",s="hidden.bs.modal",a="show.bs.modal",l="shown.bs.modal",c="focusin.bs.modal",h="resize.bs.modal",f="click.dismiss.bs.modal",u="keydown.dismiss.bs.modal",d="mouseup.dismiss.bs.modal",p="mousedown.dismiss.bs.modal",g="click.bs.modal.data-api",m="modal-scrollbar-measure",_="modal-backdrop",v="modal-open",b="fade",E="show",y={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},T=function(){function n(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(y.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var g=n.prototype
return g.toggle=function(t){return this._isShown?this.hide():this.show(t)},g.show=function(t){var n=this
if(!this._isTransitioning&&!this._isShown){M.supportsTransitionEnd()&&e(this._element).hasClass(b)&&(this._isTransitioning=!0)
var i=e.Event(a,{relatedTarget:t})
e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(v),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(f,y.DATA_DISMISS,function(t){return n.hide(t)}),e(this._dialog).on(p,function(){e(n._element).one(d,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},g.hide=function(t){var n=this
if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var i=e.Event(o)
if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1
var r=M.supportsTransitionEnd()&&e(this._element).hasClass(b)
r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(c),e(this._element).removeClass(E),e(this._element).off(f),e(this._dialog).off(p),r?e(this._element).one(M.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},g.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(".bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},g.handleUpdate=function(){this._adjustDialog()},g._getConfig=function(n){return n=e.extend({},i,n),M.typeCheckConfig(t,n,r),n},g._showElement=function(t){var n=this,i=M.supportsTransitionEnd()&&e(this._element).hasClass(b)
this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&M.reflow(this._element),e(this._element).addClass(E),this._config.focus&&this._enforceFocus()
var r=e.Event(l,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(r)}
i?e(this._dialog).one(M.TRANSITION_END,o).emulateTransitionEnd(300):o()},g._enforceFocus=function(){var t=this
e(document).off(c).on(c,function(n){document===n.target||t._element===n.target||e(t._element).has(n.target).length||t._element.focus()})},g._setEscapeEvent=function(){var t=this
this._isShown&&this._config.keyboard?e(this._element).on(u,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(u)},g._setResizeEvent=function(){var t=this
this._isShown?e(window).on(h,function(e){return t.handleUpdate(e)}):e(window).off(h)},g._hideModal=function(){var t=this
this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(v),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(s)})},g._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},g._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(b)?b:""
if(this._isShown&&this._config.backdrop){var r=M.supportsTransitionEnd()&&i
if(this._backdrop=document.createElement("div"),this._backdrop.className=_,i&&e(this._backdrop).addClass(i),e(this._backdrop).appendTo(document.body),e(this._element).on(f,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),r&&M.reflow(this._backdrop),e(this._backdrop).addClass(E),!t)return
if(!r)return void t()
e(this._backdrop).one(M.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(E)
var o=function(){n._removeBackdrop(),t&&t()}
M.supportsTransitionEnd()&&e(this._element).hasClass(b)?e(this._backdrop).one(M.TRANSITION_END,o).emulateTransitionEnd(150):o()}else t&&t()},g._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight
!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},g._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},g._checkScrollbar=function(){var t=document.body.getBoundingClientRect()
this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},g._setScrollbar=function(){var t=this
if(this._isBodyOverflowing){e(y.FIXED_CONTENT).each(function(n,i){var r=e(i)[0].style.paddingRight,o=e(i).css("padding-right")
e(i).data("padding-right",r).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),e(y.STICKY_CONTENT).each(function(n,i){var r=e(i)[0].style.marginRight,o=e(i).css("margin-right")
e(i).data("margin-right",r).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")}),e(y.NAVBAR_TOGGLER).each(function(n,i){var r=e(i)[0].style.marginRight,o=e(i).css("margin-right")
e(i).data("margin-right",r).css("margin-right",parseFloat(o)+t._scrollbarWidth+"px")})
var n=document.body.style.paddingRight,i=e("body").css("padding-right")
e("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},g._resetScrollbar=function(){e(y.FIXED_CONTENT).each(function(t,n){var i=e(n).data("padding-right")
void 0!==i&&e(n).css("padding-right",i).removeData("padding-right")}),e(y.STICKY_CONTENT+", "+y.NAVBAR_TOGGLER).each(function(t,n){var i=e(n).data("margin-right")
void 0!==i&&e(n).css("margin-right",i).removeData("margin-right")})
var t=e("body").data("padding-right")
void 0!==t&&e("body").css("padding-right",t).removeData("padding-right")},g._getScrollbarWidth=function(){var t=document.createElement("div")
t.className=m,document.body.appendChild(t)
var e=t.getBoundingClientRect().width-t.clientWidth
return document.body.removeChild(t),e},n._jQueryInterface=function(t,i){return this.each(function(){var r=e(this).data("bs.modal"),o=e.extend({},n.Default,e(this).data(),"object"==typeof t&&t)
if(r||(r=new n(this,o),e(this).data("bs.modal",r)),"string"==typeof t){if(void 0===r[t])throw new Error('No method named "'+t+'"')
r[t](i)}else o.show&&r.show(i)})},H(n,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return i}}]),n}()
return e(document).on(g,y.DATA_TOGGLE,function(t){var n,i=this,r=M.getSelectorFromElement(this)
r&&(n=e(r)[0])
var o=e(n).data("bs.modal")?"toggle":e.extend({},e(n).data(),e(this).data())
"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault()
var l=e(n).one(a,function(t){t.isDefaultPrevented()||l.one(s,function(){e(i).is(":visible")&&i.focus()})})
T._jQueryInterface.call(e(n),o,this)}),e.fn[t]=T._jQueryInterface,e.fn[t].Constructor=T,e.fn[t].noConflict=function(){return e.fn[t]=n,T._jQueryInterface},T}(),ht=function(){if(void 0===at)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)")
var t="tooltip",n=".bs.tooltip",i=e.fn[t],r=new RegExp("(^|\\s)bs-tooltip\\S+","g"),o={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},s={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},a={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},l="show",c="out",h={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},f="fade",u="show",d=".tooltip-inner",p=".arrow",g="hover",m="focus",_="click",v="manual",b=function(){function i(t,e){this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var b=i.prototype
return b.enable=function(){this._isEnabled=!0},b.disable=function(){this._isEnabled=!1},b.toggleEnabled=function(){this._isEnabled=!this._isEnabled},b.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n)
i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(u))return void this._leave(null,this)
this._enter(null,this)}},b.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},b.show=function(){var t=this
if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements")
var n=e.Event(this.constructor.Event.SHOW)
if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(n)
var r=e.contains(this.element.ownerDocument.documentElement,this.element)
if(n.isDefaultPrevented()||!r)return
var o=this.getTipElement(),s=M.getUID(this.constructor.NAME)
o.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&e(o).addClass(f)
var a="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,l=this._getAttachment(a)
this.addAttachmentClass(l)
var h=!1===this.config.container?document.body:e(this.config.container)
e(o).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(o).appendTo(h),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new at(this.element,o,{placement:l,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:p}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(o).addClass(u),"ontouchstart"in document.documentElement&&e("body").children().on("mouseover",null,e.noop)
var d=function(){t.config.animation&&t._fixTransition()
var n=t._hoverState
t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===c&&t._leave(null,t)}
M.supportsTransitionEnd()&&e(this.tip).hasClass(f)?e(this.tip).one(M.TRANSITION_END,d).emulateTransitionEnd(i._TRANSITION_DURATION):d()}},b.hide=function(t){var n=this,i=this.getTipElement(),r=e.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==l&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}
e(this.element).trigger(r),r.isDefaultPrevented()||(e(i).removeClass(u),"ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),this._activeTrigger[_]=!1,this._activeTrigger[m]=!1,this._activeTrigger[g]=!1,M.supportsTransitionEnd()&&e(this.tip).hasClass(f)?e(i).one(M.TRANSITION_END,o).emulateTransitionEnd(150):o(),this._hoverState="")},b.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},b.isWithContent=function(){return Boolean(this.getTitle())},b.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},b.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},b.setContent=function(){var t=e(this.getTipElement())
this.setElementContent(t.find(d),this.getTitle()),t.removeClass(f+" "+u)},b.setElementContent=function(t,n){var i=this.config.html
"object"==typeof n&&(n.nodeType||n.jquery)?i?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):t[i?"html":"text"](n)},b.getTitle=function(){var t=this.element.getAttribute("data-original-title")
return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},b._getAttachment=function(t){return s[t.toUpperCase()]},b._setListeners=function(){var t=this
this.config.trigger.split(" ").forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)})
else if(n!==v){var i=n===g?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,r=n===g?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT
e(t.element).on(i,t.config.selector,function(e){return t._enter(e)}).on(r,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=e.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},b._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},b._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?m:g]=!0),e(n.getTipElement()).hasClass(u)||n._hoverState===l?n._hoverState=l:(clearTimeout(n._timeout),n._hoverState=l,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===l&&n.show()},n.config.delay.show):n.show())},b._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?m:g]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=c,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===c&&n.hide()},n.config.delay.hide):n.hide())},b._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0
return!1},b._getConfig=function(n){return"number"==typeof(n=e.extend({},this.constructor.Default,e(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),M.typeCheckConfig(t,n,this.constructor.DefaultType),n},b._getDelegateConfig=function(){var t={}
if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e])
return t},b._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(r)
null!==n&&n.length>0&&t.removeClass(n.join(""))},b._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},b._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation
null===t.getAttribute("x-placement")&&(e(t).removeClass(f),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},i._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.tooltip"),r="object"==typeof t&&t
if((n||!/dispose|hide/.test(t))&&(n||(n=new i(this,r),e(this).data("bs.tooltip",n)),"string"==typeof t)){if(void 0===n[t])throw new Error('No method named "'+t+'"')
n[t]()}})},H(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return a}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return h}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return o}}]),i}()
return e.fn[t]=b._jQueryInterface,e.fn[t].Constructor=b,e.fn[t].noConflict=function(){return e.fn[t]=i,b._jQueryInterface},b}(),ft=function(){var t="popover",n=".bs.popover",i=e.fn[t],r=new RegExp("(^|\\s)bs-popover\\S+","g"),o=e.extend({},ht.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),s=e.extend({},ht.DefaultType,{content:"(string|element|function)"}),a="fade",l="show",c=".popover-header",h=".popover-body",f={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},u=function(i){function u(){return i.apply(this,arguments)||this}(function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e})(u,i)
var d=u.prototype
return d.isWithContent=function(){return this.getTitle()||this._getContent()},d.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},d.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},d.setContent=function(){var t=e(this.getTipElement())
this.setElementContent(t.find(c),this.getTitle()),this.setElementContent(t.find(h),this._getContent()),t.removeClass(a+" "+l)},d._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},d._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(r)
null!==n&&n.length>0&&t.removeClass(n.join(""))},u._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null
if((n||!/destroy|hide/.test(t))&&(n||(n=new u(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if(void 0===n[t])throw new Error('No method named "'+t+'"')
n[t]()}})},H(u,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return o}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return f}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return s}}]),u}(ht)
return e.fn[t]=u._jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=function(){return e.fn[t]=i,u._jQueryInterface},u}(),ut=function(){var t="scrollspy",n=e.fn[t],i={offset:10,method:"auto",target:""},r={offset:"number",method:"string",target:"(string|element)"},o={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},s="dropdown-item",a="active",l={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},c="offset",h="position",f=function(){function n(t,n){var i=this
this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+l.NAV_LINKS+","+this._config.target+" "+l.LIST_ITEMS+","+this._config.target+" "+l.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(o.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var f=n.prototype
return f.refresh=function(){var t=this,n=this._scrollElement!==this._scrollElement.window?h:c,i="auto"===this._config.method?n:this._config.method,r=i===h?this._getScrollTop():0
this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),e.makeArray(e(this._selector)).map(function(t){var n,o=M.getSelectorFromElement(t)
if(o&&(n=e(o)[0]),n){var s=n.getBoundingClientRect()
if(s.width||s.height)return[e(n)[i]().top+r,o]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},f.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},f._getConfig=function(n){if("string"!=typeof(n=e.extend({},i,n)).target){var o=e(n.target).attr("id")
o||(o=M.getUID(t),e(n.target).attr("id",o)),n.target="#"+o}return M.typeCheckConfig(t,n,r),n},f._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},f._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},f._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},f._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight()
if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1]
this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear()
for(var r=this._offsets.length;r--;)this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&(void 0===this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}},f._activate=function(t){this._activeTarget=t,this._clear()
var n=this._selector.split(",")
n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})
var i=e(n.join(","))
i.hasClass(s)?(i.closest(l.DROPDOWN).find(l.DROPDOWN_TOGGLE).addClass(a),i.addClass(a)):(i.addClass(a),i.parents(l.NAV_LIST_GROUP).prev(l.NAV_LINKS+", "+l.LIST_ITEMS).addClass(a),i.parents(l.NAV_LIST_GROUP).prev(l.NAV_ITEMS).children(l.NAV_LINKS).addClass(a)),e(this._scrollElement).trigger(o.ACTIVATE,{relatedTarget:t})},f._clear=function(){e(this._selector).filter(l.ACTIVE).removeClass(a)},n._jQueryInterface=function(t){return this.each(function(){var i=e(this).data("bs.scrollspy")
if(i||(i=new n(this,"object"==typeof t&&t),e(this).data("bs.scrollspy",i)),"string"==typeof t){if(void 0===i[t])throw new Error('No method named "'+t+'"')
i[t]()}})},H(n,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return i}}]),n}()
return e(window).on(o.LOAD_DATA_API,function(){for(var t=e.makeArray(e(l.DATA_SPY)),n=t.length;n--;){var i=e(t[n])
f._jQueryInterface.call(i,i.data())}}),e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=n,f._jQueryInterface},f}(),dt=function(){var t=e.fn.tab,n="hide.bs.tab",i="hidden.bs.tab",r="show.bs.tab",o="shown.bs.tab",s="click.bs.tab.data-api",a="dropdown-menu",l="active",c="disabled",h="fade",f="show",u=".dropdown",d=".nav, .list-group",p=".active",g="> li > .active",m='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',_=".dropdown-toggle",v="> .dropdown-menu .active",b=function(){function t(t){this._element=t}var s=t.prototype
return s.show=function(){var t=this
if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(l)||e(this._element).hasClass(c))){var s,a,h=e(this._element).closest(d)[0],f=M.getSelectorFromElement(this._element)
if(h){var u="UL"===h.nodeName?g:p
a=(a=e.makeArray(e(h).find(u)))[a.length-1]}var m=e.Event(n,{relatedTarget:this._element}),_=e.Event(r,{relatedTarget:a})
if(a&&e(a).trigger(m),e(this._element).trigger(_),!_.isDefaultPrevented()&&!m.isDefaultPrevented()){f&&(s=e(f)[0]),this._activate(this._element,h)
var v=function(){var n=e.Event(i,{relatedTarget:t._element}),r=e.Event(o,{relatedTarget:a})
e(a).trigger(n),e(t._element).trigger(r)}
s?this._activate(s,s.parentNode,v):v()}}},s.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},s._activate=function(t,n,i){var r=this,o=("UL"===n.nodeName?e(n).find(g):e(n).children(p))[0],s=i&&M.supportsTransitionEnd()&&o&&e(o).hasClass(h),a=function(){return r._transitionComplete(t,o,s,i)}
o&&s?e(o).one(M.TRANSITION_END,a).emulateTransitionEnd(150):a(),o&&e(o).removeClass(f)},s._transitionComplete=function(t,n,i,r){if(n){e(n).removeClass(l)
var o=e(n.parentNode).find(v)[0]
o&&e(o).removeClass(l),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(l),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),i?(M.reflow(t),e(t).addClass(f)):e(t).removeClass(h),t.parentNode&&e(t.parentNode).hasClass(a)){var s=e(t).closest(u)[0]
s&&e(s).find(_).addClass(l),t.setAttribute("aria-expanded",!0)}r&&r()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),r=i.data("bs.tab")
if(r||(r=new t(this),i.data("bs.tab",r)),"string"==typeof n){if(void 0===r[n])throw new Error('No method named "'+n+'"')
r[n]()}})},H(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}()
return e(document).on(s,m,function(t){t.preventDefault(),b._jQueryInterface.call(e(this),"show")}),e.fn.tab=b._jQueryInterface,e.fn.tab.Constructor=b,e.fn.tab.noConflict=function(){return e.fn.tab=t,b._jQueryInterface},b}()
return function(){if(void 0===e)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
var t=e.fn.jquery.split(" ")[0].split(".")
if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=M,t.Alert=W,t.Button=B,t.Carousel=U,t.Collapse=V,t.Dropdown=lt,t.Modal=ct,t.Popover=ft,t.Scrollspy=ut,t.Tab=dt,t.Tooltip=ht,t}({},$)
