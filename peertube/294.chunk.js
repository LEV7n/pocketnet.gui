/*! For license information please see 294.chunk.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkpeertube_client=globalThis.webpackChunkpeertube_client||[]).push([[294],{3059:(e,t,n)=>{var r=n(3654),o=n.n(r),i=n(6308),l=n.n(i),a=n(7688),s=n.n(a);function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var h=function(e){function t(){return e.apply(this,arguments)||this}c(t,e);var n=t.prototype;return n.handleClick=function(t){var n=this;e.prototype.handleClick.call(this),this.options_.listener(),s().setTimeout((function(){n.player().contextmenuUI.menu.dispose()}),1)},n.createEl=function(t,n,r){var i=e.prototype.createEl.call(this,t,n,r),l=o().dom.createEl("span");return l.innerHTML='<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",i.replaceChild(l,i.querySelector(".vjs-menu-item-text")),i},t}(o().getComponent("MenuItem")),u=o().getComponent("Menu"),f=o().dom||o(),p=function(e){function t(t,n){var r;return(r=e.call(this,t,n)||this).dispose=o().bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r),r.dispose),n.content.forEach((function(e){var n=function(){};"function"==typeof e.listener?n=e.listener:"string"==typeof e.href&&(n=function(){return s().open(e.href)}),r.addItem(new h(t,{label:e.label,listener:o().bind(t,n)}))})),r}return c(t,e),t.prototype.createEl=function(){var t=e.prototype.createEl.call(this);return f.addClass(t,"vjs-contextmenu-ui-menu"),t.style.left=this.options_.position.left+"px",t.style.top=this.options_.position.top+"px",t},t}(u),d="5.5.0";function g(e){return e.hasOwnProperty("contextmenuUI")&&e.contextmenuUI.hasOwnProperty("menu")&&e.contextmenuUI.menu.el()}function m(e){var t=e.tagName.toLowerCase();return"input"===t||"textarea"===t}function v(e){var t,n,r,i,a,c,h,u,f,d,m,v=this;if(g(this))this.contextmenuUI.menu.dispose();else if(!this.contextmenuUI.options_.excludeElements(e.target)){var x=(i=e,a={},c=function(e){var t;if(e.getBoundingClientRect&&e.parentNode&&(t=e.getBoundingClientRect()),!t)return{left:0,top:0};var n=l().documentElement,r=l().body,o=n.clientLeft||r.clientLeft||0,i=s().pageXOffset||r.scrollLeft,a=t.left+i-o,c=n.clientTop||r.clientTop||0,h=s().pageYOffset||r.scrollTop,u=t.top+h-c;return{left:Math.round(a),top:Math.round(u)}}(r=this.el()),h=r.offsetWidth,u=r.offsetHeight,f=c.left,d=i.pageY,m=i.pageX,i.changedTouches&&(m=i.changedTouches[0].pageX,d=i.changedTouches[0].pageY),a.y=Math.max(0,Math.min(1,(c.top-d+u)/u)),a.x=Math.max(0,Math.min(1,(m-f)/h)),t=a,n=this.el().getBoundingClientRect(),{left:Math.round(n.width*t.x),top:Math.round(n.height-n.height*t.y)}),y=o().browser.IS_FIREFOX?l().documentElement:l();e.preventDefault();var C,b=this.contextmenuUI.menu=new p(this,{content:(C=this.contextmenuUI.content,C&&"[object Function]"==={}.toString.call(C)&&this.contextmenuUI.content()||this.contextmenuUI.content),position:x});this.contextmenuUI.closeMenu=function(){o().log.warn("player.contextmenuUI.closeMenu() is deprecated, please use player.contextmenuUI.menu.dispose() instead!"),b.dispose()},b.on("dispose",(function(){o().off(y,["click","tap"],b.dispose),v.removeChild(b),delete v.contextmenuUI.menu})),this.addChild(b);var I=b.el_.getBoundingClientRect(),A=l().body.getBoundingClientRect();(this.contextmenuUI.keepInside||I.right>A.width||I.bottom>A.height)&&(b.el_.style.left=Math.floor(Math.min(x.left,this.player_.currentWidth()-b.currentWidth()))+"px",b.el_.style.top=Math.floor(Math.min(x.top,this.player_.currentHeight()-b.currentHeight()))+"px"),o().on(y,["click","tap"],b.dispose)}}function x(e){var t=this,n={keepInside:!0,excludeElements:m};if(e=o().mergeOptions(n,e),!Array.isArray(e.content)&&!Array.isArray(e.content()))throw new Error('"content" required');g(this)&&(this.contextmenuUI.menu.dispose(),this.off("contextmenu",this.contextmenuUI.onContextMenu),delete this.contextmenuUI);var r=this.contextmenuUI=function(){x.apply(this,arguments)};r.onContextMenu=o().bind(this,v),r.content=e.content,r.keepInside=e.keepInside,r.options_=e,r.VERSION=d,this.on("contextmenu",r.onContextMenu),this.ready((function(){return t.addClass("vjs-contextmenu-ui")}))}o().registerPlugin("contextmenuUI",x),x.VERSION=d},1328:(e,t,n)=>{var r=n(2286);function o(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var n,r="",o=0,i=-1,l=0,a=0;a<=e.length;++a){if(a<e.length)n=e.charCodeAt(a);else{if(47===n)break;n=47}if(47===n){if(i===a-1||1===l);else if(i!==a-1&&2===l){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var s=r.lastIndexOf("/");if(s!==r.length-1){-1===s?(r="",o=0):o=(r=r.slice(0,s)).length-1-r.lastIndexOf("/"),i=a,l=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=a,l=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,a):r=e.slice(i+1,a),o=a-i-1;i=a,l=0}else 46===n&&-1!==l?++l:l=-1}return r}var l={resolve:function(){for(var e,t="",n=!1,l=arguments.length-1;l>=-1&&!n;l--){var a;l>=0?a=arguments[l]:(void 0===e&&(e=r.cwd()),a=e),o(a),0!==a.length&&(t=a+"/"+t,n=47===a.charCodeAt(0))}return t=i(t,!n),n?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(o(e),0===e.length)return".";var t=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=i(e,!t)).length||t||(e="."),e.length>0&&n&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return o(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];o(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":l.normalize(e)},relative:function(e,t){if(o(e),o(t),e===t)return"";if((e=l.resolve(e))===(t=l.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var r=e.length,i=r-n,a=1;a<t.length&&47===t.charCodeAt(a);++a);for(var s=t.length-a,c=i<s?i:s,h=-1,u=0;u<=c;++u){if(u===c){if(s>c){if(47===t.charCodeAt(a+u))return t.slice(a+u+1);if(0===u)return t.slice(a+u)}else i>c&&(47===e.charCodeAt(n+u)?h=u:0===u&&(h=0));break}var f=e.charCodeAt(n+u);if(f!==t.charCodeAt(a+u))break;47===f&&(h=u)}var p="";for(u=n+h+1;u<=r;++u)u!==r&&47!==e.charCodeAt(u)||(p+=0===p.length?"..":"/..");return p.length>0?p+t.slice(a+h):(47===t.charCodeAt(a+=h)&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(o(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,i=!0,l=e.length-1;l>=1;--l)if(47===(t=e.charCodeAt(l))){if(!i){r=l;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"//":e.slice(0,r)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');o(e);var n,r=0,i=-1,l=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,s=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!l){r=n+1;break}}else-1===s&&(l=!1,s=n+1),a>=0&&(c===t.charCodeAt(a)?-1==--a&&(i=n):(a=-1,i=s))}return r===i?i=s:-1===i&&(i=e.length),e.slice(r,i)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!l){r=n+1;break}}else-1===i&&(l=!1,i=n+1);return-1===i?"":e.slice(r,i)},extname:function(e){o(e);for(var t=-1,n=0,r=-1,i=!0,l=0,a=e.length-1;a>=0;--a){var s=e.charCodeAt(a);if(47!==s)-1===r&&(i=!1,r=a+1),46===s?-1===t?t=a:1!==l&&(l=1):-1!==t&&(l=-1);else if(!i){n=a+1;break}}return-1===t||-1===r||0===l||1===l&&t===r-1&&t===n+1?"":e.slice(t,r)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+"/"+r:r}(0,e)},parse:function(e){o(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,r=e.charCodeAt(0),i=47===r;i?(t.root="/",n=1):n=0;for(var l=-1,a=0,s=-1,c=!0,h=e.length-1,u=0;h>=n;--h)if(47!==(r=e.charCodeAt(h)))-1===s&&(c=!1,s=h+1),46===r?-1===l?l=h:1!==u&&(u=1):-1!==l&&(u=-1);else if(!c){a=h+1;break}return-1===l||-1===s||0===u||1===u&&l===s-1&&l===a+1?-1!==s&&(t.base=t.name=e.slice(0===a&&i?1:a,s)):(0===a&&i?(t.name=e.slice(1,l),t.base=e.slice(1,s)):(t.name=e.slice(a,l),t.base=e.slice(a,s)),t.ext=e.slice(l,s)),a>0?t.dir=e.slice(0,a-1):i&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};l.posix=l,e.exports=l}}]);
//# sourceMappingURL=294.chunk.js.map