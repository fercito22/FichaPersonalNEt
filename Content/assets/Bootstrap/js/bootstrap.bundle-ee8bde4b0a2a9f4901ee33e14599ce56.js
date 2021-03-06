var bootstrap=function(t,e){"use strict"
e=e&&e.hasOwnProperty("default")?e.default:e
var n=function(){var t=!1,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}
function i(t){var n=this,i=!1
return e(this).one(r.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||r.triggerTransitionEnd(n)},t),this}var r={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t))
return t},getSelectorFromElement:function(t){var n=t.getAttribute("data-target")
n&&"#"!==n||(n=t.getAttribute("href")||"")
try{return e(document).find(n).length>0?n:null}catch(i){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){e(n).trigger(t.end)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=e[i],a=s&&r.isElement(s)?"element":(l=s,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase())
if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+o+'".')}var l}}
return t=function(){if(window.QUnit)return!1
var t=document.createElement("bootstrap")
for(var e in n)if(void 0!==t.style[e])return{end:n[e]}
return!1}(),e.fn.emulateTransitionEnd=i,r.supportsTransitionEnd()&&(e.event.special[r.TRANSITION_END]={bindType:t.end,delegateType:t.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}),r}()
function i(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}
for(var o=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e},s=function(){var t=e.fn.alert,i={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},o="alert",s="fade",a="show",l=function(){function t(t){this._element=t}var l=t.prototype
return l.close=function(t){t=t||this._element
var e=this._getRootElement(t)
this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},l.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},l._getRootElement=function(t){var i=n.getSelectorFromElement(t),r=!1
return i&&(r=e(i)[0]),r||(r=e(t).closest("."+o)[0]),r},l._triggerCloseEvent=function(t){var n=e.Event(i.CLOSE)
return e(t).trigger(n),n},l._removeElement=function(t){var i=this
e(t).removeClass(a),n.supportsTransitionEnd()&&e(t).hasClass(s)?e(t).one(n.TRANSITION_END,function(e){return i._destroyElement(t,e)}).emulateTransitionEnd(150):this._destroyElement(t)},l._destroyElement=function(t){e(t).detach().trigger(i.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),r=i.data("bs.alert")
r||(r=new t(this),i.data("bs.alert",r)),"close"===n&&r[n](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}()
return e(document).on(i.CLICK_DATA_API,'[data-dismiss="alert"]',l._handleDismiss(new l)),e.fn.alert=l._jQueryInterface,e.fn.alert.Constructor=l,e.fn.alert.noConflict=function(){return e.fn.alert=t,l._jQueryInterface},l}(),a=function(){var t="button",n=e.fn[t],i="active",o="btn",s="focus",a='[data-toggle^="button"]',l='[data-toggle="buttons"]',c="input",h=".active",f=".btn",u={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},d=function(){function t(t){this._element=t}var n=t.prototype
return n.toggle=function(){var t=!0,n=!0,r=e(this._element).closest(l)[0]
if(r){var o=e(this._element).find(c)[0]
if(o){if("radio"===o.type)if(o.checked&&e(this._element).hasClass(i))t=!1
else{var s=e(r).find(h)[0]
s&&e(s).removeClass(i)}if(t){if(o.hasAttribute("disabled")||r.hasAttribute("disabled")||o.classList.contains("disabled")||r.classList.contains("disabled"))return
o.checked=!e(this._element).hasClass(i),e(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!e(this._element).hasClass(i)),t&&e(this._element).toggleClass(i)},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("bs.button")
i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()})},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}()
return e(document).on(u.CLICK_DATA_API,a,function(t){t.preventDefault()
var n=t.target
e(n).hasClass(o)||(n=e(n).closest(f)),d._jQueryInterface.call(e(n),"toggle")}).on(u.FOCUS_BLUR_DATA_API,a,function(t){var n=e(t.target).closest(f)[0]
e(n).toggleClass(s,/^focus(in)?$/.test(t.type))}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=n,d._jQueryInterface},d}(),l=function(){var t="carousel",i="bs.carousel",o="."+i,s=e.fn[t],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},c="next",h="prev",f="left",u="right",d={SLIDE:"slide"+o,SLID:"slid"+o,KEYDOWN:"keydown"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o,TOUCHEND:"touchend"+o,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},p="carousel",g="active",m="slide",_="carousel-item-right",v="carousel-item-left",E="carousel-item-next",b="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},T=function(){function s(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var T=s.prototype
return T.next=function(){this._isSliding||this._slide(c)},T.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},T.prev=function(){this._isSliding||this._slide(h)},T.pause=function(t){t||(this._isPaused=!0),e(this._element).find(y.NEXT_PREV)[0]&&n.supportsTransitionEnd()&&(n.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},T.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},T.to=function(t){var n=this
this._activeElement=e(this._element).find(y.ACTIVE_ITEM)[0]
var i=this._getItemIndex(this._activeElement)
if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(d.SLID,function(){return n.to(t)})
else{if(i===t)return this.pause(),void this.cycle()
var r=t>i?c:h
this._slide(r,this._items[t])}},T.dispose=function(){e(this._element).off(o),e.removeData(this._element,i),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},T._getConfig=function(i){return i=e.extend({},a,i),n.typeCheckConfig(t,i,l),i},T._addEventListeners=function(){var t=this
this._config.keyboard&&e(this._element).on(d.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(d.MOUSEENTER,function(e){return t.pause(e)}).on(d.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&e(this._element).on(d.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},T._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev()
break
case 39:t.preventDefault(),this.next()
break
default:return}},T._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(y.ITEM)),this._items.indexOf(t)},T._getItemByDirection=function(t,e){var n=t===c,i=t===h,r=this._getItemIndex(e),o=this._items.length-1
if((i&&0===r||n&&r===o)&&!this._config.wrap)return e
var s=(r+(t===h?-1:1))%this._items.length
return-1===s?this._items[this._items.length-1]:this._items[s]},T._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),r=this._getItemIndex(e(this._element).find(y.ACTIVE_ITEM)[0]),o=e.Event(d.SLIDE,{relatedTarget:t,direction:n,from:r,to:i})
return e(this._element).trigger(o),o},T._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(y.ACTIVE).removeClass(g)
var n=this._indicatorsElement.children[this._getItemIndex(t)]
n&&e(n).addClass(g)}},T._slide=function(t,i){var r,o,s,a=this,l=e(this._element).find(y.ACTIVE_ITEM)[0],h=this._getItemIndex(l),p=i||l&&this._getItemByDirection(t,l),T=this._getItemIndex(p),w=Boolean(this._interval)
if(t===c?(r=v,o=E,s=f):(r=_,o=b,s=u),p&&e(p).hasClass(g))this._isSliding=!1
else if(!this._triggerSlideEvent(p,s).isDefaultPrevented()&&l&&p){this._isSliding=!0,w&&this.pause(),this._setActiveIndicatorElement(p)
var C=e.Event(d.SLID,{relatedTarget:p,direction:s,from:h,to:T})
n.supportsTransitionEnd()&&e(this._element).hasClass(m)?(e(p).addClass(o),n.reflow(p),e(l).addClass(r),e(p).addClass(r),e(l).one(n.TRANSITION_END,function(){e(p).removeClass(r+" "+o).addClass(g),e(l).removeClass(g+" "+o+" "+r),a._isSliding=!1,setTimeout(function(){return e(a._element).trigger(C)},0)}).emulateTransitionEnd(600)):(e(l).removeClass(g),e(p).addClass(g),this._isSliding=!1,e(this._element).trigger(C)),w&&this.cycle()}},s._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(i),r=e.extend({},a,e(this).data())
"object"==typeof t&&e.extend(r,t)
var o="string"==typeof t?t:r.slide
if(n||(n=new s(this,r),e(this).data(i,n)),"number"==typeof t)n.to(t)
else if("string"==typeof o){if(void 0===n[o])throw new Error('No method named "'+o+'"')
n[o]()}else r.interval&&(n.pause(),n.cycle())})},s._dataApiClickHandler=function(t){var r=n.getSelectorFromElement(this)
if(r){var o=e(r)[0]
if(o&&e(o).hasClass(p)){var a=e.extend({},e(o).data(),e(this).data()),l=this.getAttribute("data-slide-to")
l&&(a.interval=!1),s._jQueryInterface.call(e(o),a),l&&e(o).data(i).to(l),t.preventDefault()}}},r(s,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return a}}]),s}()
return e(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,T._dataApiClickHandler),e(window).on(d.LOAD_DATA_API,function(){e(y.DATA_RIDE).each(function(){var t=e(this)
T._jQueryInterface.call(t,t.data())})}),e.fn[t]=T._jQueryInterface,e.fn[t].Constructor=T,e.fn[t].noConflict=function(){return e.fn[t]=s,T._jQueryInterface},T}(),c=function(){var t="collapse",i="bs.collapse",o=e.fn[t],s={toggle:!0,parent:""},a={toggle:"boolean",parent:"(string|element)"},l={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},c="show",h="collapse",f="collapsing",u="collapsed",d="width",p="height",g={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function o(t,i){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(i),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'))
for(var r=e(g.DATA_TOGGLE),o=0;o<r.length;o++){var s=r[o],a=n.getSelectorFromElement(s)
null!==a&&e(a).filter(t).length>0&&this._triggerArray.push(s)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var m=o.prototype
return m.toggle=function(){e(this._element).hasClass(c)?this.hide():this.show()},m.show=function(){var t,r,s=this
if(!this._isTransitioning&&!e(this._element).hasClass(c)&&(this._parent&&((t=e.makeArray(e(this._parent).children().children(g.ACTIVES))).length||(t=null)),!(t&&(r=e(t).data(i))&&r._isTransitioning))){var a=e.Event(l.SHOW)
if(e(this._element).trigger(a),!a.isDefaultPrevented()){t&&(o._jQueryInterface.call(e(t),"hide"),r||e(t).data(i,null))
var d=this._getDimension()
e(this._element).removeClass(h).addClass(f),this._element.style[d]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(u).attr("aria-expanded",!0),this.setTransitioning(!0)
var p=function(){e(s._element).removeClass(f).addClass(h).addClass(c),s._element.style[d]="",s.setTransitioning(!1),e(s._element).trigger(l.SHOWN)}
if(n.supportsTransitionEnd()){var m="scroll"+(d[0].toUpperCase()+d.slice(1))
e(this._element).one(n.TRANSITION_END,p).emulateTransitionEnd(600),this._element.style[d]=this._element[m]+"px"}else p()}}},m.hide=function(){var t=this
if(!this._isTransitioning&&e(this._element).hasClass(c)){var i=e.Event(l.HIDE)
if(e(this._element).trigger(i),!i.isDefaultPrevented()){var r=this._getDimension()
if(this._element.style[r]=this._element.getBoundingClientRect()[r]+"px",n.reflow(this._element),e(this._element).addClass(f).removeClass(h).removeClass(c),this._triggerArray.length)for(var o=0;o<this._triggerArray.length;o++){var s=this._triggerArray[o],a=n.getSelectorFromElement(s)
if(null!==a)e(a).hasClass(c)||e(s).addClass(u).attr("aria-expanded",!1)}this.setTransitioning(!0)
var d=function(){t.setTransitioning(!1),e(t._element).removeClass(f).addClass(h).trigger(l.HIDDEN)}
this._element.style[r]="",n.supportsTransitionEnd()?e(this._element).one(n.TRANSITION_END,d).emulateTransitionEnd(600):d()}}},m.setTransitioning=function(t){this._isTransitioning=t},m.dispose=function(){e.removeData(this._element,i),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},m._getConfig=function(i){return(i=e.extend({},s,i)).toggle=Boolean(i.toggle),n.typeCheckConfig(t,i,a),i},m._getDimension=function(){return e(this._element).hasClass(d)?d:p},m._getParent=function(){var t=this,i=null
n.isElement(this._config.parent)?(i=this._config.parent,void 0!==this._config.parent.jquery&&(i=this._config.parent[0])):i=e(this._config.parent)[0]
var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]'
return e(i).find(r).each(function(e,n){t._addAriaAndCollapsedClass(o._getTargetFromElement(n),[n])}),i},m._addAriaAndCollapsedClass=function(t,n){if(t){var i=e(t).hasClass(c)
n.length&&e(n).toggleClass(u,!i).attr("aria-expanded",i)}},o._getTargetFromElement=function(t){var i=n.getSelectorFromElement(t)
return i?e(i)[0]:null},o._jQueryInterface=function(t){return this.each(function(){var n=e(this),r=n.data(i),a=e.extend({},s,n.data(),"object"==typeof t&&t)
if(!r&&a.toggle&&/show|hide/.test(t)&&(a.toggle=!1),r||(r=new o(this,a),n.data(i,r)),"string"==typeof t){if(void 0===r[t])throw new Error('No method named "'+t+'"')
r[t]()}})},r(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return s}}]),o}()
return e(document).on(l.CLICK_DATA_API,g.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault()
var r=e(this),o=n.getSelectorFromElement(this)
e(o).each(function(){var t=e(this),n=t.data(i)?"toggle":r.data()
m._jQueryInterface.call(t,n)})}),e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=o,m._jQueryInterface},m}(),h=["native code","[object MutationObserverConstructor]"],f="undefined"!=typeof window,u=["Edge","Trident","Firefox"],d=0,p=0;p<u.length;p+=1)if(f&&navigator.userAgent.indexOf(u[p])>=0){d=1
break}var g,m=f&&(g=window.MutationObserver,h.some(function(t){return(g||"").toString().indexOf(t)>-1}))?function(t){var e=!1,n=0,i=document.createElement("span")
return new MutationObserver(function(){t(),e=!1}).observe(i,{attributes:!0}),function(){e||(e=!0,i.setAttribute("x-index",n),n+=1)}}:function(t){var e=!1
return function(){e||(e=!0,setTimeout(function(){e=!1,t()},d))}}
function _(t){return t&&"[object Function]"==={}.toString.call(t)}function v(t,e){if(1!==t.nodeType)return[]
var n=window.getComputedStyle(t,null)
return e?n[e]:n}function E(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function b(t){if(!t||-1!==["HTML","BODY","#document"].indexOf(t.nodeName))return window.document.body
var e=v(t),n=e.overflow,i=e.overflowX,r=e.overflowY
return/(auto|scroll)/.test(n+r+i)?t:b(E(t))}function y(t){var e=t&&t.offsetParent,n=e&&e.nodeName
return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(e.nodeName)&&"static"===v(e,"position")?y(e):e:window.document.documentElement}function T(t){return null!==t.parentNode?T(t.parentNode):t}function w(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return window.document.documentElement
var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,r=n?e:t,o=document.createRange()
o.setStart(i,0),o.setEnd(r,0)
var s,a,l=o.commonAncestorContainer
if(t!==l&&e!==l||i.contains(r))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&y(s.firstElementChild)!==s?y(l):l
var c=T(t)
return c.host?w(c.host,e):w(t,T(e).host)}function C(t){var e="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName
if("BODY"===n||"HTML"===n){var i=window.document.documentElement
return(window.document.scrollingElement||i)[e]}return t[e]}function I(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom"
return+t["border"+n+"Width"].split("px")[0]+ +t["border"+i+"Width"].split("px")[0]}var A=void 0,D=function(){return void 0===A&&(A=-1!==navigator.appVersion.indexOf("MSIE 10")),A}
function S(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],D()?n["offset"+t]+i["margin"+("Height"===t?"Top":"Left")]+i["margin"+("Height"===t?"Bottom":"Right")]:0)}function O(){var t=window.document.body,e=window.document.documentElement,n=D()&&window.getComputedStyle(e)
return{height:S("Height",t,e,n),width:S("Width",t,e,n)}}var N=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},k=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),L=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}
function P(t){return x({},t,{right:t.left+t.width,bottom:t.top+t.height})}function R(t){var e={}
if(D())try{e=t.getBoundingClientRect()
var n=C(t,"top"),i=C(t,"left")
e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}catch(f){}else e=t.getBoundingClientRect()
var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?O():{},s=o.width||t.clientWidth||r.right-r.left,a=o.height||t.clientHeight||r.bottom-r.top,l=t.offsetWidth-s,c=t.offsetHeight-a
if(l||c){var h=v(t)
l-=I(h,"x"),c-=I(h,"y"),r.width-=l,r.height-=c}return P(r)}function M(t,e){var n=D(),i="HTML"===e.nodeName,r=R(t),o=R(e),s=b(t),a=v(e),l=+a.borderTopWidth.split("px")[0],c=+a.borderLeftWidth.split("px")[0],h=P({top:r.top-o.top-l,left:r.left-o.left-c,width:r.width,height:r.height})
if(h.marginTop=0,h.marginLeft=0,!n&&i){var f=+a.marginTop.split("px")[0],u=+a.marginLeft.split("px")[0]
h.top-=l-f,h.bottom-=l-f,h.left-=c-u,h.right-=c-u,h.marginTop=f,h.marginLeft=u}return(n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=C(e,"top"),r=C(e,"left"),o=n?-1:1
return t.top+=i*o,t.bottom+=i*o,t.left+=r*o,t.right+=r*o,t}(h,e)),h}function H(t,e,n,i){var r={top:0,left:0},o=w(t,e)
if("viewport"===i)r=function(t){var e=window.document.documentElement,n=M(t,e),i=Math.max(e.clientWidth,window.innerWidth||0),r=Math.max(e.clientHeight,window.innerHeight||0),o=C(e),s=C(e,"left")
return P({top:o-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r})}(o)
else{var s=void 0
"scrollParent"===i?"BODY"===(s=b(E(t))).nodeName&&(s=window.document.documentElement):s="window"===i?window.document.documentElement:i
var a=M(s,o)
if("HTML"!==s.nodeName||function t(e){var n=e.nodeName
return"BODY"!==n&&"HTML"!==n&&("fixed"===v(e,"position")||t(E(e)))}(o))r=a
else{var l=O(),c=l.height,h=l.width
r.top+=a.top-a.marginTop,r.bottom=c+a.top,r.left+=a.left-a.marginLeft,r.right=h+a.left}}return r.left+=n,r.top+=n,r.right-=n,r.bottom-=n,r}function j(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0
if(-1===t.indexOf("auto"))return t
var s=H(n,i,o,r),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return x({key:t},a[t],{area:(e=a[t],e.width*e.height)})
var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,i=t.height
return e>=n.clientWidth&&i>=n.clientHeight}),h=c.length>0?c[0].key:l[0].key,f=t.split("-")[1]
return h+(f?"-"+f:"")}function W(t,e,n){return M(n,w(e,n))}function U(t){var e=window.getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight)
return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function B(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"}
return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function K(t,e,n){n=n.split("-")[0]
var i=U(t),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height"
return r[s]=e[s]+e[l]/2-i[l]/2,r[a]=n===a?e[a]-i[c]:e[B(a)],r}function F(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function V(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n})
var i=F(t,function(t){return t[e]===n})
return t.indexOf(i)}(t,"name",n))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!")
var n=t.function||t.fn
t.enabled&&_(n)&&(e.offsets.popper=P(e.offsets.popper),e.offsets.reference=P(e.offsets.reference),e=n(e,t))}),e}function Q(t,e){return t.some(function(t){var n=t.name
return t.enabled&&n===e})}function Y(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length-1;i++){var r=e[i],o=r?""+r+n:t
if(void 0!==window.document.body.style[o])return o}return null}function G(t,e,n,i){n.updateBound=i,window.addEventListener("resize",n.updateBound,{passive:!0})
var r=b(t)
return function t(e,n,i,r){var o="BODY"===e.nodeName,s=o?window:e
s.addEventListener(n,i,{passive:!0}),o||t(b(s.parentNode),n,i,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function q(){var t
this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=(this.reference,t=this.state,window.removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function z(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function X(t,e){Object.keys(e).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&z(e[n])&&(i="px"),t.style[n]=e[n]+i})}function Z(t,e,n){var i=F(t,function(t){return t.name===e}),r=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order})
if(!r){var o="`"+e+"`",s="`"+n+"`"
console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var J=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],$=J.slice(3)
function tt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=$.indexOf(t),i=$.slice(n+1).concat($.slice(0,n))
return e?i.reverse():i}var et={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"}
function nt(t,e,n,i){var r=[0,0],o=-1!==["right","left"].indexOf(i),s=t.split(/(\+|\-)/).map(function(t){return t.trim()}),a=s.indexOf(F(s,function(t){return-1!==t.search(/,|\s/)}))
s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")
var l=/\s*,\s*|\s+/,c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s]
return(c=c.map(function(t,i){var r=(1===i?!o:o)?"height":"width",s=!1
return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2]
if(!o)return t
if(0===s.indexOf("%")){var a=void 0
switch(s){case"%p":a=n
break
case"%":case"%r":default:a=i}return P(a)[e]/100*o}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o
return o}(t,r,e,n)})})).forEach(function(t,e){t.forEach(function(n,i){z(n)&&(r[e]+=n*("-"===t[i-1]?-1:1))})}),r}var it={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1]
if(i){var r=t.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:L({},l,o[l]),end:L({},l,o[l]+o[c]-s[c])}
t.offsets.popper=x({},s,h[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,r=t.offsets,o=r.popper,s=r.reference,a=i.split("-")[0],l=void 0
return l=z(+n)?[+n,0]:nt(n,o,s,a),"left"===a?(o.top+=l[0],o.left-=l[1]):"right"===a?(o.top+=l[0],o.left+=l[1]):"top"===a?(o.left+=l[0],o.top-=l[1]):"bottom"===a&&(o.left+=l[0],o.top+=l[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||y(t.instance.popper)
t.instance.reference===n&&(n=y(n))
var i=H(t.instance.popper,t.instance.reference,e.padding,n)
e.boundaries=i
var r=e.priority,o=t.offsets.popper,s={primary:function(t){var n=o[t]
return o[t]<i[t]&&!e.escapeWithReference&&(n=Math.max(o[t],i[t])),L({},t,n)},secondary:function(t){var n="right"===t?"left":"top",r=o[n]
return o[t]>i[t]&&!e.escapeWithReference&&(r=Math.min(o[n],i[t]-("right"===t?o.width:o.height))),L({},n,r)}}
return r.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary"
o=x({},o,s[e](t))}),t.offsets.popper=o,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,r=t.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height"
return n[a]<o(i[l])&&(t.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(t.offsets.popper[l]=o(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){if(!Z(t.instance.modifiers,"arrow","keepTogether"))return t
var n=e.element
if("string"==typeof n){if(!(n=t.instance.popper.querySelector(n)))return t}else if(!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t
var i=t.placement.split("-")[0],r=t.offsets,o=r.popper,s=r.reference,a=-1!==["left","right"].indexOf(i),l=a?"height":"width",c=a?"Top":"Left",h=c.toLowerCase(),f=a?"left":"top",u=a?"bottom":"right",d=U(n)[l]
s[u]-d<o[h]&&(t.offsets.popper[h]-=o[h]-(s[u]-d)),s[h]+d>o[u]&&(t.offsets.popper[h]+=s[h]+d-o[u])
var p=s[h]+s[l]/2-d/2,g=v(t.instance.popper,"margin"+c).replace("px",""),m=p-P(t.offsets.popper)[h]-g
return m=Math.max(Math.min(o[l]-d,m),0),t.arrowElement=n,t.offsets.arrow={},t.offsets.arrow[h]=Math.round(m),t.offsets.arrow[f]="",t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(Q(t.instance.modifiers,"inner"))return t
if(t.flipped&&t.placement===t.originalPlacement)return t
var n=H(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement),i=t.placement.split("-")[0],r=B(i),o=t.placement.split("-")[1]||"",s=[]
switch(e.behavior){case et.FLIP:s=[i,r]
break
case et.CLOCKWISE:s=tt(i)
break
case et.COUNTERCLOCKWISE:s=tt(i,!0)
break
default:s=e.behavior}return s.forEach(function(a,l){if(i!==a||s.length===l+1)return t
i=t.placement.split("-")[0],r=B(i)
var c=t.offsets.popper,h=t.offsets.reference,f=Math.floor,u="left"===i&&f(c.right)>f(h.left)||"right"===i&&f(c.left)<f(h.right)||"top"===i&&f(c.bottom)>f(h.top)||"bottom"===i&&f(c.top)<f(h.bottom),d=f(c.left)<f(n.left),p=f(c.right)>f(n.right),g=f(c.top)<f(n.top),m=f(c.bottom)>f(n.bottom),_="left"===i&&d||"right"===i&&p||"top"===i&&g||"bottom"===i&&m,v=-1!==["top","bottom"].indexOf(i),E=!!e.flipVariations&&(v&&"start"===o&&d||v&&"end"===o&&p||!v&&"start"===o&&g||!v&&"end"===o&&m);(u||_||E)&&(t.flipped=!0,(u||_)&&(i=s[l+1]),E&&(o=function(t){return"end"===t?"start":"start"===t?"end":t}(o)),t.placement=i+(o?"-"+o:""),t.offsets.popper=x({},t.offsets.popper,K(t.instance.popper,t.offsets.reference,t.placement)),t=V(t.instance.modifiers,t,"flip"))}),t},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n)
return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),t.placement=B(e),t.offsets.popper=P(r),t}},hide:{order:800,enabled:!0,fn:function(t){if(!Z(t.instance.modifiers,"hide","preventOverflow"))return t
var e=t.offsets.reference,n=F(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries
if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t
t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t
t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,r=t.offsets.popper,o=F(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration
void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")
var s=void 0!==o?o:e.gpuAcceleration,a=R(y(t.instance.popper)),l={position:r.position},c={left:Math.floor(r.left),top:Math.floor(r.top),bottom:Math.floor(r.bottom),right:Math.floor(r.right)},h="bottom"===n?"top":"bottom",f="right"===i?"left":"right",u=Y("transform"),d=void 0,p=void 0
if(p="bottom"===h?-a.height+c.bottom:c.top,d="right"===f?-a.width+c.right:c.left,s&&u)l[u]="translate3d("+d+"px, "+p+"px, 0)",l[h]=0,l[f]=0,l.willChange="transform"
else{var g="bottom"===h?-1:1,m="right"===f?-1:1
l[h]=p*g,l[f]=d*m,l.willChange=h+", "+f}var _={"x-placement":t.placement}
return t.attributes=x({},_,t.attributes),t.styles=x({},l,t.styles),t.arrowStyles=x({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n
return X(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&X(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,r){var o=W(0,e,t),s=j(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding)
return e.setAttribute("x-placement",s),X(e,{position:"absolute"}),n},gpuAcceleration:void 0}}},rt=function(){function t(e,n){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
N(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=m(this.update.bind(this)),this.options=x({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e.jquery?e[0]:e,this.popper=n.jquery?n[0]:n,this.options.modifiers={},Object.keys(x({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=x({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return x({name:t},i.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&_(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update()
var o=this.options.eventsEnabled
o&&this.enableEventListeners(),this.state.eventsEnabled=o}return k(t,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}}
t.offsets.reference=W(this.state,this.popper,this.reference),t.placement=j(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.offsets.popper=K(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position="absolute",t=V(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,Q(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[Y("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=G(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return q.call(this)}}]),t}()
rt.Utils=("undefined"!=typeof window?window:global).PopperUtils,rt.placements=J,rt.Defaults=it
var ot=function(){if(void 0===rt)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)")
var t="dropdown",i="bs.dropdown",o="."+i,s=e.fn[t],a=new RegExp("38|40|27"),l={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},c="disabled",h="show",f="dropup",u="dropdown-menu-right",d="dropdown-menu-left",p='[data-toggle="dropdown"]',g=".dropdown form",m=".dropdown-menu",_=".navbar-nav",v=".dropdown-menu .dropdown-item:not(.disabled)",E="top-start",b="top-end",y="bottom-start",T="bottom-end",w={offset:0,flip:!0},C={offset:"(number|string|function)",flip:"boolean"},I=function(){function s(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var g=s.prototype
return g.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(c)){var t=s._getParentFromElement(this._element),n=e(this._menu).hasClass(h)
if(s._clearMenus(),!n){var i={relatedTarget:this._element},r=e.Event(l.SHOW,i)
if(e(t).trigger(r),!r.isDefaultPrevented()){var o=this._element
e(t).hasClass(f)&&(e(this._menu).hasClass(d)||e(this._menu).hasClass(u))&&(o=t),this._popper=new rt(o,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!e(t).closest(_).length&&e("body").children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(h),e(t).toggleClass(h).trigger(e.Event(l.SHOWN,i))}}}},g.dispose=function(){e.removeData(this._element,i),e(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},g.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},g._addEventListeners=function(){var t=this
e(this._element).on(l.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},g._getConfig=function(i){return i=e.extend({},this.constructor.Default,e(this._element).data(),i),n.typeCheckConfig(t,i,this.constructor.DefaultType),i},g._getMenuElement=function(){if(!this._menu){var t=s._getParentFromElement(this._element)
this._menu=e(t).find(m)[0]}return this._menu},g._getPlacement=function(){var t=e(this._element).parent(),n=y
return t.hasClass(f)?(n=E,e(this._menu).hasClass(u)&&(n=b)):e(this._menu).hasClass(u)&&(n=T),n},g._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},g._getPopperConfig=function(){var t=this,n={}
"function"==typeof this._config.offset?n.fn=function(n){return n.offsets=e.extend({},n.offsets,t._config.offset(n.offsets)||{}),n}:n.offset=this._config.offset
var i={placement:this._getPlacement(),modifiers:{offset:n,flip:{enabled:this._config.flip}}}
return this._inNavbar&&(i.modifiers.applyStyle={enabled:!this._inNavbar}),i},s._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(i)
if(n||(n=new s(this,"object"==typeof t?t:null),e(this).data(i,n)),"string"==typeof t){if(void 0===n[t])throw new Error('No method named "'+t+'"')
n[t]()}})},s._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=e.makeArray(e(p)),r=0;r<n.length;r++){var o=s._getParentFromElement(n[r]),a=e(n[r]).data(i),c={relatedTarget:n[r]}
if(a){var f=a._menu
if(e(o).hasClass(h)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(o,t.target))){var u=e.Event(l.HIDE,c)
e(o).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),n[r].setAttribute("aria-expanded","false"),e(f).removeClass(h),e(o).removeClass(h).trigger(e.Event(l.HIDDEN,c)))}}}},s._getParentFromElement=function(t){var i,r=n.getSelectorFromElement(t)
return r&&(i=e(r)[0]),i||t.parentNode},s._dataApiKeydownHandler=function(t){if(!(!a.test(t.which)||/button/i.test(t.target.tagName)&&32===t.which||/input|textarea/i.test(t.target.tagName)||(t.preventDefault(),t.stopPropagation(),this.disabled||e(this).hasClass(c)))){var n=s._getParentFromElement(this),i=e(n).hasClass(h)
if((i||27===t.which&&32===t.which)&&(!i||27!==t.which&&32!==t.which)){var r=e(n).find(v).get()
if(r.length){var o=r.indexOf(t.target)
38===t.which&&o>0&&o--,40===t.which&&o<r.length-1&&o++,o<0&&(o=0),r[o].focus()}}else{if(27===t.which){var l=e(n).find(p)[0]
e(l).trigger("focus")}e(this).trigger("click")}}},r(s,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return w}},{key:"DefaultType",get:function(){return C}}]),s}()
return e(document).on(l.KEYDOWN_DATA_API,p,I._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API,m,I._dataApiKeydownHandler).on(l.CLICK_DATA_API+" "+l.KEYUP_DATA_API,I._clearMenus).on(l.CLICK_DATA_API,p,function(t){t.preventDefault(),t.stopPropagation(),I._jQueryInterface.call(e(this),"toggle")}).on(l.CLICK_DATA_API,g,function(t){t.stopPropagation()}),e.fn[t]=I._jQueryInterface,e.fn[t].Constructor=I,e.fn[t].noConflict=function(){return e.fn[t]=s,I._jQueryInterface},I}(),st=function(){var t="modal",i=".bs.modal",o=e.fn.modal,s={backdrop:!0,keyboard:!0,focus:!0,show:!0},a={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},l={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},c="modal-scrollbar-measure",h="modal-backdrop",f="modal-open",u="fade",d="show",p={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},g=function(){function o(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(p.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var g=o.prototype
return g.toggle=function(t){return this._isShown?this.hide():this.show(t)},g.show=function(t){var i=this
if(!this._isTransitioning&&!this._isShown){n.supportsTransitionEnd()&&e(this._element).hasClass(u)&&(this._isTransitioning=!0)
var r=e.Event(l.SHOW,{relatedTarget:t})
e(this._element).trigger(r),this._isShown||r.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(l.CLICK_DISMISS,p.DATA_DISMISS,function(t){return i.hide(t)}),e(this._dialog).on(l.MOUSEDOWN_DISMISS,function(){e(i._element).one(l.MOUSEUP_DISMISS,function(t){e(t.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return i._showElement(t)}))}},g.hide=function(t){var i=this
if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var r=e.Event(l.HIDE)
if(e(this._element).trigger(r),this._isShown&&!r.isDefaultPrevented()){this._isShown=!1
var o=n.supportsTransitionEnd()&&e(this._element).hasClass(u)
o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(l.FOCUSIN),e(this._element).removeClass(d),e(this._element).off(l.CLICK_DISMISS),e(this._dialog).off(l.MOUSEDOWN_DISMISS),o?e(this._element).one(n.TRANSITION_END,function(t){return i._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},g.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},g.handleUpdate=function(){this._adjustDialog()},g._getConfig=function(i){return i=e.extend({},s,i),n.typeCheckConfig(t,i,a),i},g._showElement=function(t){var i=this,r=n.supportsTransitionEnd()&&e(this._element).hasClass(u)
this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,r&&n.reflow(this._element),e(this._element).addClass(d),this._config.focus&&this._enforceFocus()
var o=e.Event(l.SHOWN,{relatedTarget:t}),s=function(){i._config.focus&&i._element.focus(),i._isTransitioning=!1,e(i._element).trigger(o)}
r?e(this._dialog).one(n.TRANSITION_END,s).emulateTransitionEnd(300):s()},g._enforceFocus=function(){var t=this
e(document).off(l.FOCUSIN).on(l.FOCUSIN,function(n){document===n.target||t._element===n.target||e(t._element).has(n.target).length||t._element.focus()})},g._setEscapeEvent=function(){var t=this
this._isShown&&this._config.keyboard?e(this._element).on(l.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(l.KEYDOWN_DISMISS)},g._setResizeEvent=function(){var t=this
this._isShown?e(window).on(l.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(l.RESIZE)},g._hideModal=function(){var t=this
this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(f),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(l.HIDDEN)})},g._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},g._showBackdrop=function(t){var i=this,r=e(this._element).hasClass(u)?u:""
if(this._isShown&&this._config.backdrop){var o=n.supportsTransitionEnd()&&r
if(this._backdrop=document.createElement("div"),this._backdrop.className=h,r&&e(this._backdrop).addClass(r),e(this._backdrop).appendTo(document.body),e(this._element).on(l.CLICK_DISMISS,function(t){i._ignoreBackdropClick?i._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===i._config.backdrop?i._element.focus():i.hide())}),o&&n.reflow(this._backdrop),e(this._backdrop).addClass(d),!t)return
if(!o)return void t()
e(this._backdrop).one(n.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(d)
var s=function(){i._removeBackdrop(),t&&t()}
n.supportsTransitionEnd()&&e(this._element).hasClass(u)?e(this._backdrop).one(n.TRANSITION_END,s).emulateTransitionEnd(150):s()}else t&&t()},g._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight
!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},g._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},g._checkScrollbar=function(){var t=document.body.getBoundingClientRect()
this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},g._setScrollbar=function(){var t=this
if(this._isBodyOverflowing){e(p.FIXED_CONTENT).each(function(n,i){var r=e(i)[0].style.paddingRight,o=e(i).css("padding-right")
e(i).data("padding-right",r).css("padding-right",parseFloat(o)+t._scrollbarWidth+"px")}),e(p.STICKY_CONTENT).each(function(n,i){var r=e(i)[0].style.marginRight,o=e(i).css("margin-right")
e(i).data("margin-right",r).css("margin-right",parseFloat(o)-t._scrollbarWidth+"px")}),e(p.NAVBAR_TOGGLER).each(function(n,i){var r=e(i)[0].style.marginRight,o=e(i).css("margin-right")
e(i).data("margin-right",r).css("margin-right",parseFloat(o)+t._scrollbarWidth+"px")})
var n=document.body.style.paddingRight,i=e("body").css("padding-right")
e("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},g._resetScrollbar=function(){e(p.FIXED_CONTENT).each(function(t,n){var i=e(n).data("padding-right")
void 0!==i&&e(n).css("padding-right",i).removeData("padding-right")}),e(p.STICKY_CONTENT+", "+p.NAVBAR_TOGGLER).each(function(t,n){var i=e(n).data("margin-right")
void 0!==i&&e(n).css("margin-right",i).removeData("margin-right")})
var t=e("body").data("padding-right")
void 0!==t&&e("body").css("padding-right",t).removeData("padding-right")},g._getScrollbarWidth=function(){var t=document.createElement("div")
t.className=c,document.body.appendChild(t)
var e=t.getBoundingClientRect().width-t.clientWidth
return document.body.removeChild(t),e},o._jQueryInterface=function(t,n){return this.each(function(){var i=e(this).data("bs.modal"),r=e.extend({},o.Default,e(this).data(),"object"==typeof t&&t)
if(i||(i=new o(this,r),e(this).data("bs.modal",i)),"string"==typeof t){if(void 0===i[t])throw new Error('No method named "'+t+'"')
i[t](n)}else r.show&&i.show(n)})},r(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return s}}]),o}()
return e(document).on(l.CLICK_DATA_API,p.DATA_TOGGLE,function(t){var i,r=this,o=n.getSelectorFromElement(this)
o&&(i=e(o)[0])
var s=e(i).data("bs.modal")?"toggle":e.extend({},e(i).data(),e(this).data())
"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault()
var a=e(i).one(l.SHOW,function(t){t.isDefaultPrevented()||a.one(l.HIDDEN,function(){e(r).is(":visible")&&r.focus()})})
g._jQueryInterface.call(e(i),s,this)}),e.fn.modal=g._jQueryInterface,e.fn.modal.Constructor=g,e.fn.modal.noConflict=function(){return e.fn.modal=o,g._jQueryInterface},g}(),at=function(){if(void 0===rt)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)")
var t="tooltip",i=".bs.tooltip",o=e.fn[t],s=new RegExp("(^|\\s)bs-tooltip\\S+","g"),a={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},l={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},c={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},h="show",f="out",u={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},d="fade",p="show",g=".tooltip-inner",m=".arrow",_="hover",v="focus",E="click",b="manual",y=function(){function o(t,e){this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var y=o.prototype
return y.enable=function(){this._isEnabled=!0},y.disable=function(){this._isEnabled=!1},y.toggleEnabled=function(){this._isEnabled=!this._isEnabled},y.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n)
i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(p))return void this._leave(null,this)
this._enter(null,this)}},y.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},y.show=function(){var t=this
if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements")
var i=e.Event(this.constructor.Event.SHOW)
if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i)
var r=e.contains(this.element.ownerDocument.documentElement,this.element)
if(i.isDefaultPrevented()||!r)return
var s=this.getTipElement(),a=n.getUID(this.constructor.NAME)
s.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(s).addClass(d)
var l="function"==typeof this.config.placement?this.config.placement.call(this,s,this.element):this.config.placement,c=this._getAttachment(l)
this.addAttachmentClass(c)
var h=!1===this.config.container?document.body:e(this.config.container)
e(s).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(s).appendTo(h),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new rt(this.element,s,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:m}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(s).addClass(p),"ontouchstart"in document.documentElement&&e("body").children().on("mouseover",null,e.noop)
var u=function(){t.config.animation&&t._fixTransition()
var n=t._hoverState
t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===f&&t._leave(null,t)}
n.supportsTransitionEnd()&&e(this.tip).hasClass(d)?e(this.tip).one(n.TRANSITION_END,u).emulateTransitionEnd(o._TRANSITION_DURATION):u()}},y.hide=function(t){var i=this,r=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),s=function(){i._hoverState!==h&&r.parentNode&&r.parentNode.removeChild(r),i._cleanTipClass(),i.element.removeAttribute("aria-describedby"),e(i.element).trigger(i.constructor.Event.HIDDEN),null!==i._popper&&i._popper.destroy(),t&&t()}
e(this.element).trigger(o),o.isDefaultPrevented()||(e(r).removeClass(p),"ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),this._activeTrigger[E]=!1,this._activeTrigger[v]=!1,this._activeTrigger[_]=!1,n.supportsTransitionEnd()&&e(this.tip).hasClass(d)?e(r).one(n.TRANSITION_END,s).emulateTransitionEnd(150):s(),this._hoverState="")},y.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},y.isWithContent=function(){return Boolean(this.getTitle())},y.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},y.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},y.setContent=function(){var t=e(this.getTipElement())
this.setElementContent(t.find(g),this.getTitle()),t.removeClass(d+" "+p)},y.setElementContent=function(t,n){var i=this.config.html
"object"==typeof n&&(n.nodeType||n.jquery)?i?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):t[i?"html":"text"](n)},y.getTitle=function(){var t=this.element.getAttribute("data-original-title")
return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},y._getAttachment=function(t){return l[t.toUpperCase()]},y._setListeners=function(){var t=this
this.config.trigger.split(" ").forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)})
else if(n!==b){var i=n===_?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,r=n===_?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT
e(t.element).on(i,t.config.selector,function(e){return t._enter(e)}).on(r,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=e.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},y._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},y._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?v:_]=!0),e(n.getTipElement()).hasClass(p)||n._hoverState===h?n._hoverState=h:(clearTimeout(n._timeout),n._hoverState=h,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===h&&n.show()},n.config.delay.show):n.show())},y._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?v:_]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===f&&n.hide()},n.config.delay.hide):n.hide())},y._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0
return!1},y._getConfig=function(i){return"number"==typeof(i=e.extend({},this.constructor.Default,e(this.element).data(),i)).delay&&(i.delay={show:i.delay,hide:i.delay}),"number"==typeof i.title&&(i.title=i.title.toString()),"number"==typeof i.content&&(i.content=i.content.toString()),n.typeCheckConfig(t,i,this.constructor.DefaultType),i},y._getDelegateConfig=function(){var t={}
if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e])
return t},y._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(s)
null!==n&&n.length>0&&t.removeClass(n.join(""))},y._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},y._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation
null===t.getAttribute("x-placement")&&(e(t).removeClass(d),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},o._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.tooltip"),i="object"==typeof t&&t
if((n||!/dispose|hide/.test(t))&&(n||(n=new o(this,i),e(this).data("bs.tooltip",n)),"string"==typeof t)){if(void 0===n[t])throw new Error('No method named "'+t+'"')
n[t]()}})},r(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return c}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return u}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return a}}]),o}()
return e.fn[t]=y._jQueryInterface,e.fn[t].Constructor=y,e.fn[t].noConflict=function(){return e.fn[t]=o,y._jQueryInterface},y}(),lt=function(){var t="popover",n=".bs.popover",i=e.fn[t],s=new RegExp("(^|\\s)bs-popover\\S+","g"),a=e.extend({},at.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),l=e.extend({},at.DefaultType,{content:"(string|element|function)"}),c="fade",h="show",f=".popover-header",u=".popover-body",d={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},p=function(i){function p(){return i.apply(this,arguments)||this}o(p,i)
var g=p.prototype
return g.isWithContent=function(){return this.getTitle()||this._getContent()},g.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},g.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},g.setContent=function(){var t=e(this.getTipElement())
this.setElementContent(t.find(f),this.getTitle()),this.setElementContent(t.find(u),this._getContent()),t.removeClass(c+" "+h)},g._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},g._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(s)
null!==n&&n.length>0&&t.removeClass(n.join(""))},p._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null
if((n||!/destroy|hide/.test(t))&&(n||(n=new p(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if(void 0===n[t])throw new Error('No method named "'+t+'"')
n[t]()}})},r(p,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return a}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return d}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return l}}]),p}(at)
return e.fn[t]=p._jQueryInterface,e.fn[t].Constructor=p,e.fn[t].noConflict=function(){return e.fn[t]=i,p._jQueryInterface},p}(),ct=function(){var t="scrollspy",i=e.fn[t],o={offset:10,method:"auto",target:""},s={offset:"number",method:"string",target:"(string|element)"},a={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},l="dropdown-item",c="active",h={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},f="offset",u="position",d=function(){function i(t,n){var i=this
this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+h.NAV_LINKS+","+this._config.target+" "+h.LIST_ITEMS+","+this._config.target+" "+h.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(a.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var d=i.prototype
return d.refresh=function(){var t=this,i=this._scrollElement!==this._scrollElement.window?u:f,r="auto"===this._config.method?i:this._config.method,o=r===u?this._getScrollTop():0
this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),e.makeArray(e(this._selector)).map(function(t){var i,s=n.getSelectorFromElement(t)
if(s&&(i=e(s)[0]),i){var a=i.getBoundingClientRect()
if(a.width||a.height)return[e(i)[r]().top+o,s]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},d.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},d._getConfig=function(i){if("string"!=typeof(i=e.extend({},o,i)).target){var r=e(i.target).attr("id")
r||(r=n.getUID(t),e(i.target).attr("id",r)),i.target="#"+r}return n.typeCheckConfig(t,i,s),i},d._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},d._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},d._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},d._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight()
if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1]
this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear()
for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&(void 0===this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},d._activate=function(t){this._activeTarget=t,this._clear()
var n=this._selector.split(",")
n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})
var i=e(n.join(","))
i.hasClass(l)?(i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(c),i.addClass(c)):(i.addClass(c),i.parents(h.NAV_LIST_GROUP).prev(h.NAV_LINKS+", "+h.LIST_ITEMS).addClass(c),i.parents(h.NAV_LIST_GROUP).prev(h.NAV_ITEMS).children(h.NAV_LINKS).addClass(c)),e(this._scrollElement).trigger(a.ACTIVATE,{relatedTarget:t})},d._clear=function(){e(this._selector).filter(h.ACTIVE).removeClass(c)},i._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.scrollspy")
if(n||(n=new i(this,"object"==typeof t&&t),e(this).data("bs.scrollspy",n)),"string"==typeof t){if(void 0===n[t])throw new Error('No method named "'+t+'"')
n[t]()}})},r(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return o}}]),i}()
return e(window).on(a.LOAD_DATA_API,function(){for(var t=e.makeArray(e(h.DATA_SPY)),n=t.length;n--;){var i=e(t[n])
d._jQueryInterface.call(i,i.data())}}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=i,d._jQueryInterface},d}(),ht=function(){var t=e.fn.tab,i={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",s="active",a="disabled",l="fade",c="show",h=".dropdown",f=".nav, .list-group",u=".active",d="> li > .active",p='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',g=".dropdown-toggle",m="> .dropdown-menu .active",_=function(){function t(t){this._element=t}var p=t.prototype
return p.show=function(){var t=this
if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(s)||e(this._element).hasClass(a))){var r,o,l=e(this._element).closest(f)[0],c=n.getSelectorFromElement(this._element)
if(l){var h="UL"===l.nodeName?d:u
o=(o=e.makeArray(e(l).find(h)))[o.length-1]}var p=e.Event(i.HIDE,{relatedTarget:this._element}),g=e.Event(i.SHOW,{relatedTarget:o})
if(o&&e(o).trigger(p),e(this._element).trigger(g),!g.isDefaultPrevented()&&!p.isDefaultPrevented()){c&&(r=e(c)[0]),this._activate(this._element,l)
var m=function(){var n=e.Event(i.HIDDEN,{relatedTarget:t._element}),r=e.Event(i.SHOWN,{relatedTarget:o})
e(o).trigger(n),e(t._element).trigger(r)}
r?this._activate(r,r.parentNode,m):m()}}},p.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},p._activate=function(t,i,r){var o=this,s=("UL"===i.nodeName?e(i).find(d):e(i).children(u))[0],a=r&&n.supportsTransitionEnd()&&s&&e(s).hasClass(l),h=function(){return o._transitionComplete(t,s,a,r)}
s&&a?e(s).one(n.TRANSITION_END,h).emulateTransitionEnd(150):h(),s&&e(s).removeClass(c)},p._transitionComplete=function(t,i,r,a){if(i){e(i).removeClass(s)
var f=e(i.parentNode).find(m)[0]
f&&e(f).removeClass(s),"tab"===i.getAttribute("role")&&i.setAttribute("aria-selected",!1)}if(e(t).addClass(s),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),r?(n.reflow(t),e(t).addClass(c)):e(t).removeClass(l),t.parentNode&&e(t.parentNode).hasClass(o)){var u=e(t).closest(h)[0]
u&&e(u).find(g).addClass(s),t.setAttribute("aria-expanded",!0)}a&&a()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),r=i.data("bs.tab")
if(r||(r=new t(this),i.data("bs.tab",r)),"string"==typeof n){if(void 0===r[n])throw new Error('No method named "'+n+'"')
r[n]()}})},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}()
return e(document).on(i.CLICK_DATA_API,p,function(t){t.preventDefault(),_._jQueryInterface.call(e(this),"show")}),e.fn.tab=_._jQueryInterface,e.fn.tab.Constructor=_,e.fn.tab.noConflict=function(){return e.fn.tab=t,_._jQueryInterface},_}()
return function(){if(void 0===e)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
var t=e.fn.jquery.split(" ")[0].split(".")
if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=n,t.Alert=s,t.Button=a,t.Carousel=l,t.Collapse=c,t.Dropdown=ot,t.Modal=st,t.Popover=lt,t.Scrollspy=ct,t.Tab=ht,t.Tooltip=at,t}({},$)
