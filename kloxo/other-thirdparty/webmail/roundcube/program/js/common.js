var CONTROL_KEY=1,SHIFT_KEY=2,CONTROL_SHIFT_KEY=3;
function roundcube_browser(){var a=navigator;this.ver=parseFloat(a.appVersion);this.appver=a.appVersion;this.agent=a.userAgent;this.agent_lc=a.userAgent.toLowerCase();this.name=a.appName;this.vendor=a.vendor?a.vendor:"";this.vendver=a.vendorSub?parseFloat(a.vendorSub):0;this.product=a.product?a.product:"";this.platform=String(a.platform).toLowerCase();this.lang=a.language?a.language.substring(0,2):a.browserLanguage?a.browserLanguage.substring(0,2):a.systemLanguage?a.systemLanguage.substring(0,2):
"en";this.win=this.platform.indexOf("win")>=0;this.mac=this.platform.indexOf("mac")>=0;this.linux=this.platform.indexOf("linux")>=0;this.unix=this.platform.indexOf("unix")>=0;this.dom=document.getElementById?!0:!1;this.dom2=document.addEventListener&&document.removeEventListener;this.ie4=(this.ie=document.all&&!window.opera)&&!this.dom;this.ie5=this.dom&&this.appver.indexOf("MSIE 5")>0;this.ie8=this.dom&&this.appver.indexOf("MSIE 8")>0;this.ie7=this.dom&&this.appver.indexOf("MSIE 7")>0;this.ie6=this.dom&&
!this.ie8&&!this.ie7&&this.appver.indexOf("MSIE 6")>0;this.ns=this.ver<5&&this.name=="Netscape"||this.ver>=5&&this.vendor.indexOf("Netscape")>=0;this.chrome=this.agent_lc.indexOf("chrome")>0;this.safari=!this.chrome&&(this.agent_lc.indexOf("safari")>0||this.agent_lc.indexOf("applewebkit")>0);this.mz=this.dom&&!this.ie&&!this.ns&&!this.chrome&&!this.safari&&this.agent.indexOf("Mozilla")>=0;this.konq=this.agent_lc.indexOf("konqueror")>0;this.iphone=this.safari&&this.agent_lc.indexOf("iphone")>0;this.ipad=
this.safari&&this.agent_lc.indexOf("ipad")>0;if((this.opera=window.opera?!0:!1)&&window.RegExp)this.vendver=/opera(\s|\/)([0-9\.]+)/.test(this.agent_lc)?parseFloat(RegExp.$2):-1;else if(this.chrome&&window.RegExp)this.vendver=/chrome\/([0-9\.]+)/.test(this.agent_lc)?parseFloat(RegExp.$1):0;else if(!this.vendver&&this.safari)this.vendver=/(safari|applewebkit)\/([0-9]+)/.test(this.agent_lc)?parseInt(RegExp.$2):0;else if(!this.vendver&&this.mz||this.agent.indexOf("Camino")>0)this.vendver=/rv:([0-9\.]+)/.test(this.agent)?
parseFloat(RegExp.$1):0;else if(this.ie&&window.RegExp)this.vendver=/msie\s+([0-9\.]+)/.test(this.agent_lc)?parseFloat(RegExp.$1):0;else if(this.konq&&window.RegExp)this.vendver=/khtml\/([0-9\.]+)/.test(this.agent_lc)?parseFloat(RegExp.$1):0;if(this.safari&&/;\s+([a-z]{2})-[a-z]{2}\)/.test(this.agent_lc))this.lang=RegExp.$1;this.dhtml=this.ie4&&this.win||this.ie5||this.ie6||this.ns4||this.mz;this.vml=this.win&&this.ie&&this.dom&&!this.opera;this.pngalpha=this.mz||this.opera&&this.vendver>=6||this.ie&&
this.mac&&this.vendver>=5||this.ie&&this.win&&this.vendver>=5.5||this.safari;this.opacity=this.mz||this.ie&&this.vendver>=5.5&&!this.opera||this.safari&&this.vendver>=100;this.cookies=a.cookieEnabled;this.xmlhttp_test=function(){var a=new Function("try{var o=new ActiveXObject('Microsoft.XMLHTTP');return true;}catch(err){return false;}");return this.xmlhttp=window.XMLHttpRequest||window.ActiveXObject&&a()};this.set_html_class=function(){var a=" js";this.ie?(a+=" ie",this.ie5?a+=" ie5":this.ie6?a+=
" ie6":this.ie7?a+=" ie7":this.ie8&&(a+=" ie8")):this.opera?a+=" opera":this.konq?a+=" konqueror":this.safari&&(a+=" safari");this.chrome?a+=" chrome":this.iphone?a+=" iphone":this.ipad&&(a+=" ipad");document.documentElement&&(document.documentElement.className+=a)}}
var rcube_event={get_target:function(a){return(a=a||window.event)&&a.target?a.target:a.srcElement},get_keycode:function(a){return(a=a||window.event)&&a.keyCode?a.keyCode:a&&a.which?a.which:0},get_button:function(a){return(a=a||window.event)&&a.button!==void 0?a.button:a&&a.which?a.which:0},get_modifier:function(a){var b=0,a=a||window.event;if(bw.mac&&a)return b+=(a.metaKey&&CONTROL_KEY)+(a.shiftKey&&SHIFT_KEY),b;if(a)return b+=(a.ctrlKey&&CONTROL_KEY)+(a.shiftKey&&SHIFT_KEY),b},get_mouse_pos:function(a){if(!a)a=
window.event;var b=a.pageX?a.pageX:a.clientX,c=a.pageY?a.pageY:a.clientY;document.body&&document.all&&(b+=document.body.scrollLeft,c+=document.body.scrollTop);a._offset&&(b+=a._offset.left,c+=a._offset.top);return{x:b,y:c}},add_listener:function(a){if(a.object&&a.method){if(!a.element)a.element=document;if(!a.object._rc_events)a.object._rc_events=[];var b=a.event+"*"+a.method;a.object._rc_events[b]||(a.object._rc_events[b]=function(c){return a.object[a.method](c)});a.element.addEventListener?a.element.addEventListener(a.event,
a.object._rc_events[b],!1):a.element.attachEvent?(a.element.detachEvent("on"+a.event,a.object._rc_events[b]),a.element.attachEvent("on"+a.event,a.object._rc_events[b])):a.element["on"+a.event]=a.object._rc_events[b]}},remove_listener:function(a){if(!a.element)a.element=document;var b=a.event+"*"+a.method;a.object&&a.object._rc_events&&a.object._rc_events[b]&&(a.element.removeEventListener?a.element.removeEventListener(a.event,a.object._rc_events[b],!1):a.element.detachEvent?a.element.detachEvent("on"+
a.event,a.object._rc_events[b]):a.element["on"+a.event]=null)},cancel:function(a){a=a?a:window.event;a.preventDefault&&a.preventDefault();a.stopPropagation&&a.stopPropagation();a.cancelBubble=!0;return a.returnValue=!1},touchevent:function(a){return{pageX:a.pageX,pageY:a.pageY,offsetX:a.pageX-a.target.offsetLeft,offsetY:a.pageY-a.target.offsetTop,target:a.target,istouch:!0}}};function rcube_event_engine(){this._events={}}
rcube_event_engine.prototype={addEventListener:function(a,b,c){if(!this._events)this._events={};this._events[a]||(this._events[a]=[]);this._events[a][this._events[a].length]={func:b,obj:c?c:window}},removeEventListener:function(a,b,c){c===void 0&&(c=window);for(var d,e=0;this._events&&this._events[a]&&e<this._events[a].length;e++)if((d=this._events[a][e])&&d.func==b&&d.obj==c)this._events[a][e]=null},triggerEvent:function(a,b){var c,d;if(b===void 0)b=this;else if(typeof b==="object")b.event=a;if(this._events&&
this._events[a]&&!this._event_exec){this._event_exec=!0;for(var e=0;e<this._events[a].length;e++)if(d=this._events[a][e])if(typeof d.func==="function"?c=d.func.call?d.func.call(d.obj,b):d.func(b):typeof d.obj[d.func]==="function"&&(c=d.obj[d.func](b)),c!==void 0&&!c)break;if(c&&c.event)try{delete c.event}catch(g){$(c).removeAttr("event")}}this._event_exec=!1;if(b.event)try{delete b.event}catch(h){$(b).removeAttr("event")}return c}};
function rcube_layer(a,b){this.name=a;this.create=function(a){var b=a.x?a.x:0,e=a.y?a.y:0,g=a.width,h=a.height,i=a.zindex,j=a.vis,a=a.parent,f=document.createElement("DIV");f.id=this.name;f.style.position="absolute";f.style.visibility=j?j==2?"inherit":"visible":"hidden";f.style.left=b+"px";f.style.top=e+"px";if(g)f.style.width=g.toString().match(/\%$/)?g:g+"px";if(h)f.style.height=h.toString().match(/\%$/)?h:h+"px";if(i)f.style.zIndex=i;a?a.appendChild(f):document.body.appendChild(f);this.elm=f};
b!=null?(this.create(b),this.name=this.elm.id):this.elm=document.getElementById(a);if(!this.elm)return!1;this.css=this.elm.style;this.event=this.elm;this.width=this.elm.offsetWidth;this.height=this.elm.offsetHeight;this.x=parseInt(this.elm.offsetLeft);this.y=parseInt(this.elm.offsetTop);this.visible=this.css.visibility=="visible"||this.css.visibility=="show"||this.css.visibility=="inherit"?!0:!1;this.move=function(a,b){this.x=a;this.y=b;this.css.left=Math.round(this.x)+"px";this.css.top=Math.round(this.y)+
"px"};this.resize=function(a,b){this.css.width=a+"px";this.css.height=b+"px";this.width=a;this.height=b};this.show=function(a){a==1?(this.css.visibility="visible",this.visible=!0):a==2?(this.css.visibility="inherit",this.visible=!0):(this.css.visibility="hidden",this.visible=!1)};this.write=function(a){this.elm.innerHTML=a}}
function rcube_check_email(a,b){return a&&window.RegExp?(b?RegExp("(^|<|[,;s\n])((([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x22)(\\x2e([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x22))*\\x40([^@\\x2e]+\\x2e)+([^\\x00-\\x40\\x5b-\\x60\\x7b-\\x7f]{2,}|xn--[a-z0-9]{2,}))|(mailtest\\x40(\\u0645\\u062b\\u0627\\u0644\\x2e\\u0625\\u062e\\u062a\\u0628\\u0627\\u0631|\\u4f8b\\u5b50\\x2e\\u6d4b\\u8bd5|\\u4f8b\\u5b50\\x2e\\u6e2c\\u8a66|\\u03c0\\u03b1\\u03c1\\u03ac\\u03b4\\u03b5\\u03b9\\u03b3\\u03bc\\u03b1\\x2e\\u03b4\\u03bf\\u03ba\\u03b9\\u03bc\\u03ae|\\u0909\\u0926\\u093e\\u0939\\u0930\\u0923\\x2e\\u092a\\u0930\\u0940\\u0915\\u094d\\u0937\\u093e|\\u4f8b\\u3048\\x2e\\u30c6\\u30b9\\u30c8|\\uc2e4\\ub840\\x2e\\ud14c\\uc2a4\\ud2b8|\\u0645\\u062b\\u0627\\u0644\\x2e\\u0622\\u0632\\u0645\\u0627\\u06cc\\u0634\u06cc|\\u043f\\u0440\\u0438\\u043c\\u0435\\u0440\\x2e\\u0438\\u0441\\u043f\\u044b\\u0442\\u0430\\u043d\\u0438\\u0435|\\u0b89\\u0ba4\\u0bbe\\u0bb0\\u0ba3\\u0bae\\u0bcd\\x2e\\u0baa\\u0bb0\\u0bbf\\u0b9f\\u0bcd\\u0b9a\\u0bc8|\\u05d1\\u05f2\\u05b7\\u05e9\\u05e4\\u05bc\\u05d9\\u05dc\\x2e\\u05d8\\u05e2\\u05e1\\u05d8)))($|>|[,;s\n])","i"):
RegExp("^((([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x22)(\\x2e([^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+|\\x22([^\\x0d\\x22\\x5c\\x80-\\xff]|\\x5c[\\x00-\\x7f])*\\x22))*\\x40([^@\\x2e]+\\x2e)+([^\\x00-\\x40\\x5b-\\x60\\x7b-\\x7f]{2,}|xn--[a-z0-9]{2,}))|(mailtest\\x40(\\u0645\\u062b\\u0627\\u0644\\x2e\\u0625\\u062e\\u062a\\u0628\\u0627\\u0631|\\u4f8b\\u5b50\\x2e\\u6d4b\\u8bd5|\\u4f8b\\u5b50\\x2e\\u6e2c\\u8a66|\\u03c0\\u03b1\\u03c1\\u03ac\\u03b4\\u03b5\\u03b9\\u03b3\\u03bc\\u03b1\\x2e\\u03b4\\u03bf\\u03ba\\u03b9\\u03bc\\u03ae|\\u0909\\u0926\\u093e\\u0939\\u0930\\u0923\\x2e\\u092a\\u0930\\u0940\\u0915\\u094d\\u0937\\u093e|\\u4f8b\\u3048\\x2e\\u30c6\\u30b9\\u30c8|\\uc2e4\\ub840\\x2e\\ud14c\\uc2a4\\ud2b8|\\u0645\\u062b\\u0627\\u0644\\x2e\\u0622\\u0632\\u0645\\u0627\\u06cc\\u0634\u06cc|\\u043f\\u0440\\u0438\\u043c\\u0435\\u0440\\x2e\\u0438\\u0441\\u043f\\u044b\\u0442\\u0430\\u043d\\u0438\\u0435|\\u0b89\\u0ba4\\u0bbe\\u0bb0\\u0ba3\\u0bae\\u0bcd\\x2e\\u0baa\\u0bb0\\u0bbf\\u0b9f\\u0bcd\\u0b9a\\u0bc8|\\u05d1\\u05f2\\u05b7\\u05e9\\u05e4\\u05bc\\u05d9\\u05dc\\x2e\\u05d8\\u05e2\\u05e1\\u05d8)))$",
"i")).test(a)?!0:!1:!1}function rcube_clone_object(a){var b={},c;for(c in a)b[c]=a[c]&&typeof a[c]==="object"?clone_object(a[c]):a[c];return b}function urlencode(a){return window.encodeURIComponent?encodeURIComponent(a):escape(a)}
function rcube_find_object(a,b){var c,d;b||(b=document);if(b.getElementsByName&&(c=b.getElementsByName(a)))d=c[0];!d&&b.getElementById&&(d=b.getElementById(a));!d&&b.all&&(d=b.all[a]);!d&&b.images.length&&(d=b.images[a]);if(!d&&b.forms.length)for(c=0;c<b.forms.length;c++)b.forms[c].name==a?d=b.forms[c]:b.forms[c].elements[a]&&(d=b.forms[c].elements[a]);if(!d&&b.layers){b.layers[a]&&(d=b.layers[a]);for(c=0;!d&&c<b.layers.length;c++)d=rcube_find_object(a,b.layers[c].document)}return d}
function rcube_mouse_is_over(a,b){var c=rcube_event.get_mouse_pos(a),d=$(b).offset();return c.x>=d.left&&c.x<d.left+b.offsetWidth&&c.y>=d.top&&c.y<d.top+b.offsetHeight}function setCookie(a,b,c,d,e,g){a=a+"="+escape(b)+(c?"; expires="+c.toGMTString():"")+(d?"; path="+d:"")+(e?"; domain="+e:"")+(g?"; secure":"");document.cookie=a}
function getCookie(a){var b=document.cookie;a+="=";var c=b.indexOf("; "+a);if(c==-1){if(c=b.indexOf(a),c!=0)return null}else c+=2;var d=b.indexOf(";",c);if(d==-1)d=b.length;return unescape(b.substring(c+a.length,d))}roundcube_browser.prototype.set_cookie=setCookie;roundcube_browser.prototype.get_cookie=getCookie;
function rcube_console(){this.log=function(a){var b=rcube_find_object("dbgconsole");if(b)a+=a.charAt(a.length-1)=="\n"?"--------------------------------------\n":"\n--------------------------------------\n",bw.konq?(b.innerText+=a,b.value=b.innerText):b.value+=a};this.reset=function(){var a=rcube_find_object("dbgconsole");if(a)a.innerText=a.value=""}}var bw=new roundcube_browser;bw.set_html_class();RegExp.escape=function(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")};
if(bw.ie)document._getElementById=document.getElementById,document.getElementById=function(a){var b=0,c=document._getElementById(a);if(c&&c.id!=a)for(;(c=document.all[b])&&c.id!=a;)b++;return c};
