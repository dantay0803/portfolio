(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{253:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(255),o=n(256),c=n(257),s=(n(41),n(28)),l=n(48),u=n(258),d=n(49),f=n.n(d),p=n(267),m=n.n(p),h=n(496),v=n.n(h),b=n(263),E=n(264),y=Object(E.a)("carousel-caption",{Component:"div"}),g=Object(E.a)("carousel-item"),w=n(270);n(17),n(29);var x=n(277),N=n(51),I=function(e){return r.a.Children.toArray(e).filter(r.a.isValidElement).length},_=40,S={slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next",touch:!0},O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={prevClasses:"",currentClasses:"active",touchStartX:0},t.isUnmounted=!1,t.carousel=r.a.createRef(),t.handleTouchStart=function(e){t.setState({touchStartX:e.changedTouches[0].screenX})},t.handleTouchEnd=function(e){Math.abs(e.changedTouches[0].screenX-t.state.touchStartX)<_||(e.changedTouches[0].screenX<t.state.touchStartX?t.handleNext(e):t.handlePrev(e))},t.handleSlideEnd=function(){var e=t._pendingIndex;t._isSliding=!1,t._pendingIndex=null,null!=e?t.to(e):t.cycle()},t.handleMouseOut=function(){t.cycle()},t.handleMouseOver=function(){t.props.pauseOnHover&&t.pause()},t.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),t.handlePrev(e);break;case"ArrowRight":e.preventDefault(),t.handleNext(e)}},t.handleNextWhenVisible=function(){t.isUnmounted||document.hidden||"hidden"===m()(t.carousel.current,"visibility")||t.handleNext()},t.handleNext=function(e){if(!t._isSliding){var n=t.props,a=n.wrap,r=n.activeIndex+1;if(r>I(t.props.children)-1){if(!a)return;r=0}t.select(r,e,"next")}},t.handlePrev=function(e){if(!t._isSliding){var n=t.props,a=n.wrap,r=n.activeIndex-1;if(r<0){if(!a)return;r=I(t.props.children)-1}t.select(r,e,"prev")}},t}Object(u.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var n=t.activeIndex;if(e.activeIndex!==n){var a=I(e.children)-1,r=Math.max(0,Math.min(e.activeIndex,a));return{direction:0===r&&n>=a||n<=r?"next":"prev",previousActiveIndex:n,activeIndex:r}}return null},n.componentDidUpdate=function(e,t){var n=this,a=this.props,r=a.bsPrefix,i=a.slide,o=a.onSlideEnd;if(i&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var c,s,l=this.state,u=l.activeIndex,d=l.direction;"next"===d?(c=r+"-item-next",s=r+"-item-left"):"prev"===d&&(c=r+"-item-prev",s=r+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:c},(function(){var e=n.carousel.current.children[u];Object(x.a)(e),n.safeSetState({prevClasses:f()("active",s),currentClasses:f()(c,s)},(function(){return v.a.end(e,(function(){n.safeSetState({prevClasses:"",currentClasses:"active"},n.handleSlideEnd),o&&o()}))}))}))}},n.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},n.safeSetState=function(e,t){var n=this;this.isUnmounted||this.setState(e,(function(){return!n.isUnmounted&&t()}))},n.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},n.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},n.to=function(e,t){var n=this.props.children;e<0||e>I(n)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},n.select=function(e,t,n){var a=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout((function(){clearTimeout(a.timeout);var r=a.props,i=r.activeIndex,o=r.onSelect;e===i||a._isSliding||a.isUnmounted||o(e,n||(e<i?"prev":"next"),t)}),50)},n.renderControls=function(e){var t=this.props.bsPrefix,n=e.wrap,a=e.children,i=e.activeIndex,o=e.prevIcon,c=e.nextIcon,s=e.prevLabel,l=e.nextLabel,u=I(a);return[(n||0!==i)&&r.a.createElement(w.a,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},o,s&&r.a.createElement("span",{className:"sr-only"},s)),(n||i!==u-1)&&r.a.createElement(w.a,{key:"next",className:t+"-control-next",onClick:this.handleNext},c,l&&r.a.createElement("span",{className:"sr-only"},l))]},n.renderIndicators=function(e,t){var n=this,a=this.props.bsPrefix,i=[];return function(e,t){var n=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e,a){i.push(r.a.createElement("li",{key:a,className:a===t?"active":null,onClick:function(e){return n.to(a,e)}})," ")})),r.a.createElement("ol",{className:a+"-indicators"},i)},n.render=function(){var e=this.props,t=e.as,n=void 0===t?"div":t,i=e.bsPrefix,o=e.slide,c=e.fade,u=e.indicators,d=e.controls,p=e.wrap,m=e.touch,h=e.prevIcon,v=e.prevLabel,b=e.nextIcon,E=e.nextLabel,y=e.className,g=e.children,w=e.keyboard,x=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(l.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","touch","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),N=this.state,I=N.activeIndex,_=N.previousActiveIndex,S=N.prevClasses,O=N.currentClasses;return r.a.createElement(n,Object(s.a)({onTouchStart:m?this.handleTouchStart:void 0,onTouchEnd:m?this.handleTouchEnd:void 0},x,{className:f()(y,i,o&&"slide",c&&i+"-fade"),onKeyDown:w?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),u&&this.renderIndicators(g,I),r.a.createElement("div",{className:i+"-inner",ref:this.carousel},function(e,t){var n=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,n++):e}))}(g,(function(e,t){var n=t===I,r=t===_;return Object(a.cloneElement)(e,{className:f()(e.props.className,i+"-item",n&&O,r&&S)})}))),d&&this.renderControls({wrap:p,children:g,activeIndex:I,prevIcon:h,prevLabel:v,nextIcon:b,nextLabel:E}))},t}(r.a.Component);O.defaultProps=S;var T=Object(N.a)(Object(b.a)(O,{activeIndex:"onSelect"}),"carousel");T.Caption=y,T.Item=g;var C=T,j=n(236),k=(n(237),n(238)),P=n(239),D=n(240),W=n(241),A=n(242),M=n(486),R=n.n(M),L=n(487),V=n.n(L),U=n(488),X=n.n(U),F=n(489),G=n.n(F),K=n(490),H=n.n(K),Y=n(491),z=n.n(Y),$=n(492),B=n.n($),J=n(493),Z=n.n(J),q=n(494),Q=n.n(q),ee=n(495),te=n.n(ee);function ne(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  padding: 0;\n  margin: 0;\n  padding-bottom: 2rem;\n"]);return ne=function(){return e},e}var ae=Object(j.a)(i.a)(ne());t.default=function(){return r.a.createElement(k.a,null,r.a.createElement(P.a,{title:"What to Watch",description:"Information on my portfolio project What to Watch",pathname:"/projects/what-to-watch"}),r.a.createElement(ae,{fluid:!0},r.a.createElement(o.a,{noGutters:!0},r.a.createElement(c.a,{xs:{span:1,offset:11}},r.a.createElement(A.Link,{to:"/#projects",className:"noUnderline"},r.a.createElement(D.a,{icon:W.b,size:"1x"})))),r.a.createElement(o.a,{noGutters:!0},r.a.createElement(c.a,{xs:{span:8,offset:2}},r.a.createElement("h1",{className:"center"},"What to Watch"),r.a.createElement("hr",{className:"hrTitle"}))),r.a.createElement(o.a,{noGutters:!0},r.a.createElement(c.a,{xs:{span:10,offset:1},md:{span:6,offset:3}},r.a.createElement("p",{className:"center"},"What to Watch is a website I created in React, using the"," ",r.a.createElement("a",{href:"https://developers.themoviedb.org/3/getting-started/introduction",target:"_blank",rel:"noopener noreferrer"},"MovieDB API"),"for the sites data. The website includes a number of features such as:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Netflix styled homepage with featured content"),r.a.createElement("li",null,"Movie, TV and person searching"),r.a.createElement("li",null,"Details on movies, TV shows and people"),r.a.createElement("li",null,"View collections of related items, such as movie collections with their overview, average rating and the number of items in the collection"),r.a.createElement("li",null,"View trailers using the YouTube Player API"),r.a.createElement("li",null,"View comments from users on the MovieDB website")),r.a.createElement(C,null,r.a.createElement(C.Item,null,r.a.createElement("img",{className:"d-block w-100",src:R.a,alt:"What to Watch Home"})),r.a.createElement(C.Item,null,r.a.createElement("img",{className:"d-block w-100",src:V.a,alt:"What to Watch Search"})),r.a.createElement(C.Item,null,r.a.createElement("img",{className:"d-block w-100",src:X.a,alt:"What to Watch Details One"})),r.a.createElement(C.Item,null,r.a.createElement("img",{className:"d-block w-100",src:G.a,alt:"What to Watch Details Two"})),r.a.createElement(C.Item,null,r.a.createElement("img",{className:"d-block w-100",src:H.a,alt:"What to Watch Trailers"})),r.a.createElement(C.Item,null,r.a.createElement("img",{className:"d-block w-100",src:z.a,alt:"What to Watch Person Details One"})),r.a.createElement(C.Item,null,r.a.createElement("img",{className:"d-block w-100",src:B.a,alt:"What to Watch Person Details Two"})),r.a.createElement(C.Item,null,r.a.createElement("img",{className:"d-block w-100",src:Z.a,alt:"What to Watch Collections"})),r.a.createElement(C.Item,null,r.a.createElement("img",{className:"d-block w-100",src:Q.a,alt:"What to Watch Discover"})),r.a.createElement(C.Item,null,r.a.createElement("img",{className:"d-block w-100",src:te.a,alt:"What to Watch Keywords and Genres"}))),r.a.createElement("p",{className:"center"},"Technologies used in project:"),r.a.createElement("ul",null,r.a.createElement("li",null,"React"),r.a.createElement("li",null,"JavaScript"),r.a.createElement("li",null,"React Router"),r.a.createElement("li",null,"Styled Components"),r.a.createElement("li",null,"React Bootstrap"),r.a.createElement("li",null,"React Icons"),r.a.createElement("li",null,"YouTube Player API"))))))}},258:function(e,t,n){"use strict";function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return a}))},262:function(e,t,n){"use strict";var a=n(6),r=n(35),i=n(55),o=n(121),c=n(92),s=n(14),l=n(90).f,u=n(119).f,d=n(19).f,f=n(170).trim,p=a.Number,m=p,h=p.prototype,v="Number"==i(n(72)(h)),b="trim"in String.prototype,E=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,a,r,i=(t=b?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var o,s=t.slice(2),l=0,u=s.length;l<u;l++)if((o=s.charCodeAt(l))<48||o>r)return NaN;return parseInt(s,a)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(v?s((function(){h.valueOf.call(n)})):"Number"!=i(n))?o(new m(E(t)),n,p):E(t)};for(var y,g=n(15)?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;g.length>w;w++)r(m,y=g[w])&&!r(p,y)&&d(p,y,u(m,y));p.prototype=h,h.constructor=p,n(23)(a,"Number",p)}},263:function(e,t,n){"use strict";n(29),n(10),n(11),n(4),n(16),n(53),n(262),n(32),n(27);var a=n(28),r=n(48),i=n(0),o=n.n(i),c=(n(61),n(17),n(42)),s=n.n(c),l=function(){};function u(e,t){return void 0!==e[t]}function d(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function p(e,t){return Object.keys(t).reduce((function(n,o){var c,s=n[d(o)],l=n[o],p=Object(r.a)(n,[d(o),o].map(f)),m=t[o],h=Object(i.useRef)({}),v=Object(i.useState)(s),b=v[0],E=v[1],y=u(e,o),g=u(h.current,o);h.current=e,!y&&g&&E(s);var w=e[m],x=Object(i.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];w&&w.apply(void 0,[e].concat(n)),E(e)}),[E,w]);return Object(a.a)({},p,((c={})[o]=y?l:b,c[m]=x,c))}),e)}n(50),n(18);var m=n(258);function h(e,t,n){void 0===n&&(n=[]);var i,c=e.displayName||e.name||"Component",f=!!(i=e)&&("function"!=typeof i||i.prototype&&i.prototype.isReactComponent),p=Object.keys(t),v=p.map(d);!f&&n.length&&s()(!1);var b=function(i){function c(){for(var e,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=i.call.apply(i,[this].concat(r))||this).handlers=Object.create(null),p.forEach((function(n){var a=t[n];e.handlers[a]=function(t){if(e.props[a]){var r;e._notifying=!0;for(var i=arguments.length,o=new Array(i>1?i-1:0),c=1;c<i;c++)o[c-1]=arguments[c];(r=e.props)[a].apply(r,[t].concat(o)),e._notifying=!1}e._values[n]=t,e.unmounted||e.forceUpdate()}})),n.length&&(e.attachRef=function(t){e.inner=t}),e}Object(m.a)(c,i);var s=c.prototype;return s.shouldComponentUpdate=function(){return!this._notifying},s.componentWillMount=function(){var e=this,t=this.props;this._values=Object.create(null),p.forEach((function(n){e._values[n]=t[d(n)]}))},s.componentWillReceiveProps=function(e){var t=this,n=this.props;p.forEach((function(a){!u(e,a)&&u(n,a)&&(t._values[a]=e[d(a)])}))},s.componentWillUnmount=function(){this.unmounted=!0},s.render=function(){var t=this,n=this.props,i=n.innerRef,c=Object(r.a)(n,["innerRef"]);v.forEach((function(e){delete c[e]}));var s={};return p.forEach((function(e){var n=t.props[e];s[e]=void 0!==n?n:t._values[e]})),o.a.createElement(e,Object(a.a)({},c,s,this.handlers,{ref:i||this.attachRef}))},c}(o.a.Component);b.displayName="Uncontrolled("+c+")",b.propTypes=Object(a.a)({innerRef:function(){}},function(e,t){var n={};return Object.keys(e).forEach((function(e){n[d(e)]=l})),n}(t)),n.forEach((function(e){b.prototype[e]=function(){var t;return(t=this.inner)[e].apply(t,arguments)}}));var E=b;return o.a.forwardRef&&((E=o.a.forwardRef((function(e,t){return o.a.createElement(b,Object(a.a)({},e,{innerRef:t}))}))).propTypes=b.propTypes),E.ControlledComponent=e,E.deferControlTo=function(e,n,r){return void 0===n&&(n={}),h(e,Object(a.a)({},t,n),r)},E}n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return h}))},264:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(28),r=n(48),i=n(49),o=n.n(i),c=n(0),s=n.n(c),l=n(269),u=n.n(l),d=n(51),f=function(e){return e[0].toUpperCase()+u()(e).slice(1)};function p(e,t){var n=void 0===t?{}:t,i=n.displayName,c=void 0===i?f(e):i,l=n.Component,u=void 0===l?"div":l,p=n.defaultProps,m=s.a.forwardRef((function(t,n){var i=t.className,c=t.bsPrefix,l=t.as,f=void 0===l?u:l,p=Object(r.a)(t,["className","bsPrefix","as"]),m=Object(d.b)(c,e);return s.a.createElement(f,Object(a.a)({ref:n,className:o()(i,m)},p))}));return m.defaultProps=p,m.displayName=c,m}},265:function(e,t,n){"use strict";n(10),n(11),n(4),n(16);var a=n(20);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var r,i,o,c,s,l,u,d,f,p,m,h=a(n(91)),v="transform";if(t.transform=v,t.animationEnd=o,t.transitionEnd=i,t.transitionDelay=u,t.transitionTiming=l,t.transitionDuration=s,t.transitionProperty=c,t.animationDelay=m,t.animationTiming=p,t.animationDuration=f,t.animationName=d,h.default){var b=function(){for(var e,t,n=document.createElement("div").style,a={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},r=Object.keys(a),i="",o=0;o<r.length;o++){var c=r[o];if(c+"TransitionProperty"in n){i="-"+c.toLowerCase(),e=a[c]("TransitionEnd"),t=a[c]("AnimationEnd");break}}!e&&"transitionProperty"in n&&(e="transitionend");!t&&"animationName"in n&&(t="animationend");return n=null,{animationEnd:t,transitionEnd:e,prefix:i}}();r=b.prefix,t.transitionEnd=i=b.transitionEnd,t.animationEnd=o=b.animationEnd,t.transform=v=r+"-"+v,t.transitionProperty=c=r+"-transition-property",t.transitionDuration=s=r+"-transition-duration",t.transitionDelay=u=r+"-transition-delay",t.transitionTiming=l=r+"-transition-timing-function",t.animationName=d=r+"-animation-name",t.animationDuration=f=r+"-animation-duration",t.animationTiming=p=r+"-animation-delay",t.animationDelay=m=r+"-animation-timing-function"}var E={transform:v,end:i,property:c,timing:l,delay:u,duration:s};t.default=E},267:function(e,t,n){"use strict";n(10),n(11),n(4),n(16),n(17);var a=n(20);t.__esModule=!0,t.default=function(e,t,n){var a="",u="",d=t;if("string"==typeof t){if(void 0===n)return e.style[(0,r.default)(t)]||(0,o.default)(e).getPropertyValue((0,i.default)(t));(d={})[t]=n}Object.keys(d).forEach((function(t){var n=d[t];n||0===n?(0,l.default)(t)?u+=t+"("+n+") ":a+=(0,i.default)(t)+": "+n+";":(0,c.default)(e,(0,i.default)(t))})),u&&(a+=s.transform+": "+u+";");e.style.cssText+=";"+a};var r=a(n(268)),i=a(n(282)),o=a(n(284)),c=a(n(285)),s=n(265),l=a(n(286));e.exports=t.default},268:function(e,t,n){"use strict";n(12);var a=n(20);t.__esModule=!0,t.default=function(e){return(0,r.default)(e.replace(i,"ms-"))};var r=a(n(269)),i=/^-ms-/;e.exports=t.default},269:function(e,t,n){"use strict";n(12),t.__esModule=!0,t.default=function(e){return e.replace(a,(function(e,t){return t.toUpperCase()}))};var a=/-(.)/g;e.exports=t.default},270:function(e,t,n){"use strict";n(61);var a=n(28),r=n(48),i=n(0),o=n.n(i),c=n(271);function s(e){return!e||"#"===e.trim()}var l=o.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,l=e.disabled,u=e.onKeyDown,d=Object(r.a)(e,["as","disabled","onKeyDown"]),f=function(e){var t=d.href,n=d.onClick;(l||s(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return s(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),l&&(d.tabIndex=-1,d["aria-disabled"]=!0),o.a.createElement(i,Object(a.a)({ref:t},d,{onClick:f,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),f(e))}),u)}))}));l.displayName="SafeAnchor",t.a=l},271:function(e,t,n){"use strict";n(41),n(53);t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)}},276:function(e,t,n){"use strict";n(13),n(52);var a=n(20);t.__esModule=!0,t.default=void 0;var r=a(n(265)),i=a(n(267));function o(e,t,n){var a,i={target:e,currentTarget:e};function o(e){e.target===e.currentTarget&&(clearTimeout(a),e.target.removeEventListener(r.default.end,o),t.call(this))}r.default.end?null==n&&(n=s(e)||0):n=0,r.default.end?(e.addEventListener(r.default.end,o,!1),a=setTimeout((function(){return o(i)}),1.5*(n||100))):setTimeout(o.bind(null,i),0)}o._parseDuration=s;var c=o;function s(e){var t=(0,i.default)(e,r.default.duration),n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}t.default=c,e.exports=t.default},277:function(e,t,n){"use strict";function a(e){e.offsetHeight}n.d(t,"a",(function(){return a}))},282:function(e,t,n){"use strict";n(12);var a=n(20);t.__esModule=!0,t.default=function(e){return(0,r.default)(e).replace(i,"-ms-")};var r=a(n(283)),i=/^ms-/;e.exports=t.default},283:function(e,t,n){"use strict";n(12),t.__esModule=!0,t.default=function(e){return e.replace(a,"-$1").toLowerCase()};var a=/([A-Z])/g;e.exports=t.default},284:function(e,t,n){"use strict";var a=n(20);t.__esModule=!0,t.default=function(e){if(!e)throw new TypeError("No Element passed to `getComputedStyle()`");var t=e.ownerDocument;return"defaultView"in t?t.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):window.getComputedStyle(e,null):{getPropertyValue:function(t){var n=e.style;"float"==(t=(0,r.default)(t))&&(t="styleFloat");var a=e.currentStyle[t]||null;if(null==a&&n&&n[t]&&(a=n[t]),o.test(a)&&!i.test(t)){var c=n.left,s=e.runtimeStyle,l=s&&s.left;l&&(s.left=e.currentStyle.left),n.left="fontSize"===t?"1em":a,a=n.pixelLeft+"px",n.left=c,l&&(s.left=l)}return a}}};var r=a(n(268)),i=/^(top|right|bottom|left)$/,o=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;e.exports=t.default},285:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return"removeProperty"in e.style?e.style.removeProperty(t):e.style.removeAttribute(t)},e.exports=t.default},286:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return!(!e||!a.test(e))};var a=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;e.exports=t.default},486:function(e,t,n){e.exports=n.p+"static/wtwhome-28701a3de54ac081307c98fa17622dab.png"},487:function(e,t,n){e.exports=n.p+"static/wtwsearch-1b5d9a5e8396626aa09530d22bc84538.png"},488:function(e,t,n){e.exports=n.p+"static/wtwdetailsone-df720459072c3e7b775a6aed06584831.png"},489:function(e,t,n){e.exports=n.p+"static/wtwdetailstwo-dab5783fc44b903231b13fa7cd8a4bb6.png"},490:function(e,t,n){e.exports=n.p+"static/wtwdetailstrailers-68b4e820f192fea351b870f16346463a.png"},491:function(e,t,n){e.exports=n.p+"static/wtwpersonone-0329e549d9247c4f09ba7adbea2f177f.png"},492:function(e,t,n){e.exports=n.p+"static/wtwpersontwo-76e96058958aa240b2b2b2decb7c5a0a.png"},493:function(e,t,n){e.exports=n.p+"static/wtwcollection-c8462866b16f46f538d0eae5c2db9df8.png"},494:function(e,t,n){e.exports=n.p+"static/wtwdiscover-9d838ecc170d28dd6aaf03c5a0cdf93b.png"},495:function(e,t,n){e.exports=n.p+"static/wtwkeywordgenresearch-2aafbba5f5d7186b8d6b1de5a9bb5e03.png"},496:function(e,t,n){"use strict";var a=n(20);t.__esModule=!0,t.default=void 0;var r=a(n(276));t.end=r.default;var i=a(n(265));t.properties=i.default;var o={end:r.default,properties:i.default};t.default=o}}]);
//# sourceMappingURL=component---src-pages-projects-what-to-watch-js-b14342dc93347ec3be8d.js.map