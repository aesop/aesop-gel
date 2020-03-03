"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_classnames=_interopRequireDefault(require("classnames")),_reactSlick=_interopRequireDefault(require("react-slick")),_crypto=_interopRequireDefault(require("crypto")),_reactTransitionGroup=require("react-transition-group"),_htmlReactParser=_interopRequireDefault(require("html-react-parser")),_marked=_interopRequireDefault(require("marked"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _typeof2(e){"@babel/helpers - typeof";return _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof2(e)}function _typeof(e){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _extends(){return _extends=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var a in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,a,l={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],0<=t.indexOf(n)||(l[n]=e[n]);return l}function _objectWithoutProperties(e,t){if(null==e)return{};var n,a,l=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],!(0<=t.indexOf(n))&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,a=!1,l=void 0;try{for(var d,s=e[Symbol.iterator]();!(i=(d=s.next()).done)&&(n.push(d.value),!(t&&n.length===t));i=!0);}catch(e){a=!0,l=e}finally{try{i||null==s["return"]||s["return"]()}finally{if(a)throw l}}return n}}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var styles={base:"Button-module_base__3aZlL",blockStyle:"Button-module_blockStyle__3UjpG",hasIcon:"Button-module_hasIcon__2OvNp",icon:"Button-module_icon__1v7Qk",internal:"Button-module_internal__v3lSl",external:"Button-module_external__1_ReY",disabled:"Button-module_disabled__2hS0q",action:"Button-module_action__1Y2bM",inlineStyle:"Button-module_inlineStyle__1M_B8",alternate:"Button-module_alternate__feDv-",lightText:"Button-module_lightText__392d4",fadeIn:"Button-module_fadeIn__270_a",fadeOut:"Button-module_fadeOut__2GLdK",slideInLeft:"Button-module_slideInLeft__qH1Pa",slideOutLeft:"Button-module_slideOutLeft__2POIZ",slideOutUp:"Button-module_slideOutUp__1vAc2",slideInDown:"Button-module_slideInDown__2eIg2",slideOutDown:"Button-module_slideOutDown__3uiDf",slideInUp:"Button-module_slideInUp__y3mRW"},Button=function(e){var t=e.children,n=e.className,i=e.dataTestRef,a=e.hasLightText,l=e.id,d=e.isAlternate,s=e.isEnabled,o=e.isInline,_=e.onClick,u=e.tabIndex,r=e.title,c=e.type,m=(0,_classnames["default"])(styles.base,styles.action,_defineProperty({},styles.alternate,d),_defineProperty({},styles.blockStyle,!o),_defineProperty({},styles.disabled,!s),_defineProperty({},styles.external,external),_defineProperty({},styles.lightText,a),_defineProperty({},styles.inlineStyle,o),n);return _react["default"].createElement("button",{className:m,"data-test-ref":i,disabled:!s,id:l,onClick:_,tabIndex:u,title:r,type:c},t)};Button.propTypes={children:_propTypes["default"].any.isRequired,className:_propTypes["default"].string,dataTestRef:_propTypes["default"].string,hasLightText:_propTypes["default"].bool,id:_propTypes["default"].string,isAlternate:_propTypes["default"].bool,isEnabled:_propTypes["default"].bool,isInline:_propTypes["default"].bool,onClick:_propTypes["default"].func,tabIndex:_propTypes["default"].number,title:_propTypes["default"].string.isRequired,type:_propTypes["default"].oneOf(["button","reset","submit"])},Button.defaultProps={children:void 0,className:void 0,dataTestRef:void 0,hasLightText:void 0,id:void 0,isAlternate:!1,isEnabled:!0,isInline:!1,onClick:void 0,tabIndex:void 0,title:void 0,type:"button"};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(e){var t=_typeof2(e);return null!=e&&("object"==t||"function"==t)}var isObject_1=isObject,commonjsGlobal="undefined"==typeof globalThis?"undefined"==typeof window?"undefined"==typeof global?"undefined"==typeof self?{}:self:global:window:globalThis;function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}/** Detect free variable `global` from Node.js. */var freeGlobal="object"==_typeof2(commonjsGlobal)&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal,freeSelf="object"==("undefined"==typeof self?"undefined":_typeof2(self))&&self&&self.Object===Object&&self,root=_freeGlobal||freeSelf||Function("return this")(),_root=root,now=function(){return _root.Date.now()},now_1=now,Symbol$1=_root.Symbol,_Symbol=Symbol$1,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol?_Symbol.toStringTag:void 0;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag),n=e[symToStringTag];try{e[symToStringTag]=void 0;var i=!0}catch(t){}var a=nativeObjectToString.call(e);return i&&(t?e[symToStringTag]=n:delete e[symToStringTag]),a}var _getRawTag=getRawTag,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString;/** Used for built-in method references. */ /**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(e){return nativeObjectToString$1.call(e)}var _objectToString=objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0;/** `Object#toString` result references. */ /**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag$1&&symToStringTag$1 in Object(e)?_getRawTag(e):_objectToString(e)}var _baseGetTag=baseGetTag;/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(e){return null!=e&&"object"==_typeof2(e)}var isObjectLike_1=isObjectLike,symbolTag="[object Symbol]";/** `Object#toString` result references. */ /**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(e){return"symbol"==_typeof2(e)||isObjectLike_1(e)&&_baseGetTag(e)==symbolTag}var isSymbol_1=isSymbol,NAN=0/0,reTrim=/^\s+|\s+$/g,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;/** Used as references for various `Number` constants. */ /**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(e){if("number"==typeof e)return e;if(isSymbol_1(e))return NAN;if(isObject_1(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=isObject_1(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(reTrim,"");var n=reIsBinary.test(e);return n||reIsOctal.test(e)?freeParseInt(e.slice(2),n?2:8):reIsBadHex.test(e)?NAN:+e}var toNumber_1=toNumber,FUNC_ERROR_TEXT="Expected a function",nativeMax=Math.max,nativeMin=Math.min;/** Error message constants. */ /**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function debounce(e,t,n){function i(t){var n=c,i=m;return c=m=void 0,E=t,p=e.apply(i,n),p}function a(e){// Invoke the leading edge.
return E=e,I=setTimeout(s,t),O?i(e):p}function l(e){var n=e-g,i=e-E,a=t-n;return h?nativeMin(a,f-i):a}function d(e){var n=e-g,i=e-E;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===g||n>=t||0>n||h&&i>=f}function s(){var e=now_1();return d(e)?o(e):void(// Restart the timer.
I=setTimeout(s,l(e)))}function o(e){// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return(I=void 0,T&&c)?i(e):(c=m=void 0,p)}function _(){void 0!==I&&clearTimeout(I),E=0,c=g=m=I=void 0}function u(){return void 0===I?p:o(now_1())}function r(){var e=now_1(),n=d(e);if(c=arguments,m=this,g=e,n){if(void 0===I)return a(g);if(h)return clearTimeout(I),I=setTimeout(s,t),i(g)}return void 0===I&&(I=setTimeout(s,t)),p}var c,m,f,p,I,g,E=0,O=!1,h=!1,T=!0;if("function"!=typeof e)throw new TypeError(FUNC_ERROR_TEXT);return t=toNumber_1(t)||0,isObject_1(n)&&(O=!!n.leading,h="maxWait"in n,f=h?nativeMax(toNumber_1(n.maxWait)||0,t):f,T="trailing"in n?!!n.trailing:T),r.cancel=_,r.flush=u,r}var _ref,_ref2,_ref3,debounce_1=debounce,useWindowHasResized=function(){var e=_react["default"].useState({height:0,width:0}),t=_slicedToArray(e,2),n=t[0],i=t[1];return _react["default"].useEffect(function(){var e="undefined"!=typeof window,t=debounce_1(function(){i({height:e?window.innerHeight:0,width:e?window.innerWidth:0})},400);return e&&window.addEventListener("resize",t),function(){e&&window.removeEventListener("resize",t)}}),n},BREAKPOINTS={SMALL:{MIN_WIDTH:0,VIEWPORT:"small"},MEDIUM:{MIN_WIDTH:640,VIEWPORT:"medium"},LARGE:{MIN_WIDTH:1025,VIEWPORT:"large"},XLARGE:{MIN_WIDTH:1600,VIEWPORT:"xlarge"}},HTML={A:"a"},HYPERLINK_STYLE_TYPES={EXTERNAL_BUTTON_LINK:"External Button Link",EXTERNAL_TEXT_LINK:"External Text Link",INTERNAL_BUTTON_LINK:"Internal Button Link",INTERNAL_TEXT_LINK:"Internal Text Link",EXTERNAL_NO_ICON_LINK:"External No Icon Link",NO_ICON_LINK:"No Icon Link"},KEYBOARD_CODES={ENTER:13,ESCAPE:27},LABELS={AESOP:"Aesop"},TEST_REFS={// Navigation
NAV_SHOP:"NAV_SHOP",NAV_READ:"NAV_READ",NAV_VISIT:"NAV_VISIT",NAV_SEARCH:"NAV_SEARCH",NAV_LOGIN:"NAV_LOGIN",NAV_CART:"NAV_CART",NAV_LOGO:"NAV_LOGO",NAV_SHOP_1:"NAV_SHOP_1",NAV_SHOP_2:"NAV_SHOP_2",NAV_SHOP_PRODUCT_RADIO:"NAV_SHOP_PRODUCT_RADIO",NAV_SHOP_PRODUCT_CTA:"NAV_SHOP_PRODUCT_CTA",NAV_VISIT_INPUT:"NAV_VISIT_INPUT",NAV_VISIT_CHECKBOX:"NAV_VISIT_CHECKBOX",// Footer
FOOTER_LINK:"FOOTER_LINK",// PDP Add to Cart
ADD_TO_CART_LARGE_CTA:"ADD_TO_CART_LARGE_CTA",ADD_TO_CART_SMALL_CTA:"ADD_TO_CART_SMALL_CTA",ADD_TO_CART_TEST:"ADD_TO_CART_TEST",// Cart
CART_CHECKOUT_CTA:"CART_CHECKOUT_CTA",CART_PROMO_CTA:"CART_PROMO_CTA",CART_PROMO_INPUT:"CART_PROMO_INPUT",CART_PROMO_AMOUNT:"CART_PROMO_AMOUNT",CART_HEADING:"CART_HEADING",CART_CLOSE:"CART_CLOSE",// Checkout
CHECKOUT_CUSTOMER_EMAIL:"CHECKOUT_CUSTOMER_EMAIL",CHECKOUT_CUSTOMER_PASSWORD:"CHECKOUT_CUSTOMER_PASSWORD",CHECKOUT_CUSTOMER_PREFIX:"CHECKOUT_CUSTOMER_PREFIX",CHECKOUT_CUSTOMER_FIRST_NAME:"CHECKOUT_CUSTOMER_FIRST_NAME",CHECKOUT_CUSTOMER_LAST_NAME:"CHECKOUT_CUSTOMER_LAST_NAME",CHECKOUT_CUSTOMER_SUBMIT:"CHECKOUT_CUSTOMER_SUBMIT",CHECKOUT_CUSTOMER_GUEST_BUTTON:"CHECKOUT_CUSTOMER_GUEST_BUTTON",ADDRESS_COUNTRY:"ADDRESS_COUNTRY",ADDRESS_LINE_1:"ADDRESS_LINE_1",ADDRESS_LINE_2:"ADDRESS_LINE_2",ADDRESS_COMPANY:"ADDRESS_COMPANY",ADDRESS_REGION:"ADDRESS_REGION",ADDRESS_TOWN:"ADDRESS_TOWN",ADDRESS_POSTAL_CODE:"ADDRESS_POSTAL_CODE",ADDRESS_COUNTRY_CODE:"ADDRESS_COUNTRY_CODE",ADDRESS_PHONE_NUMBER:"ADDRESS_PHONE_NUMBER",CHECKOUT_SHIPPING_METHOD:"CHECKOUT_SHIPPING_METHOD",CHECKOUT_GIFT:"CHECKOUT_GIFT",CHECKOUT_GIFT_MESSAGE_CHECKBOX:"CHECKOUT_GIFT_MESSAGE_CHECKBOX",CHECKOUT_GIFT_MESSAGE:"CHECKOUT_GIFT_MESSAGE",CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX:"CHECKOUT_GIFT_INSTRUCTIONS_CHECKBOX",CHECKOUT_GIFT_INSTRUCTIONS:"CHECKOUT_GIFT_INSTRUCTIONS",CHECKOUT_SHIPPING_SUBMIT:"CHECKOUT_SHIPPING_SUBMIT",CHECKOUT_PAYMENT_METHOD:"CHECKOUT_PAYMENT_METHOD",CHECKOUT_PAYMENT_CARD_HOLDER:"CHECKOUT_PAYMENT_CARD_HOLDER",CHECKOUT_PAYMENT_CARD:"CHECKOUT_PAYMENT_CARD",CHECKOUT_PAYMENT_EXPIRATION:"CHECKOUT_PAYMENT_EXPIRATION",CHECKOUT_PAYMENT_CVC:"CHECKOUT_PAYMENT_CVC",CHECKOUT_PAYMENT_GIFTCARD_CODE:"CHECKOUT_PAYMENT_GIFTCARD_CODE",CHECKOUT_PAYMENT_GIFTCARD_PIN:"CHECKOUT_PAYMENT_GIFTCARD_PIN",CHECKOUT_BILLING_SAME_SHIPPING:"CHECKOUT_BILLING_SAME_SHIPPING",CHECKOUT_BILLING_TAX:"CHECKOUT_BILLING_TAX",CHECKOUT_PAYMENT_SUBMIT:"CHECKOUT_PAYMENT_SUBMIT",CHECKOUT_SAMPLES_RADIO:"CHECKOUT_SAMPLES_RADIO",CHECKOUT_SAMPLES_SUBMIT:"CHECKOUT_SAMPLES_SUBMIT",CHECKOUT_REVIEW_TOTAL:"CHECKOUT_REVIEW_TOTAL",CHECKOUT_REVIEW_TOS_CHECKBOX:"CHECKOUT_REVIEW_TOS_CHECKBOX",CHECKOUT_REVIEW_SUBMIT:"CHECKOUT_REVIEW_SUBMIT",// Confirmation
CONFIRMATION_ACCOUNT_BUTTON:"CONFIRMATION_ACCOUNT_BUTTON"},constants={BREAKPOINTS:BREAKPOINTS,HTML:HTML,HYPERLINK_STYLE_TYPES:HYPERLINK_STYLE_TYPES,KEYBOARD_CODES:KEYBOARD_CODES,LABELS:LABELS,TEST_REFS:TEST_REFS},IS_MOBILE_OR_TABLET="(max-width: ".concat(BREAKPOINTS.LARGE.MIN_WIDTH,"px)"),LARGE=BREAKPOINTS.LARGE,MEDIUM=BREAKPOINTS.MEDIUM,SMALL=BREAKPOINTS.SMALL,CONSTRAINT_KEYS={MIN_WIDTH:"minWidth",VIEWPORT:"viewport"},constraints=[(_ref={},_defineProperty(_ref,CONSTRAINT_KEYS.MIN_WIDTH,SMALL.MIN_WIDTH),_defineProperty(_ref,CONSTRAINT_KEYS.VIEWPORT,SMALL.VIEWPORT),_ref),(_ref2={},_defineProperty(_ref2,CONSTRAINT_KEYS.MIN_WIDTH,MEDIUM.MIN_WIDTH),_defineProperty(_ref2,CONSTRAINT_KEYS.VIEWPORT,MEDIUM.VIEWPORT),_ref2),(_ref3={},_defineProperty(_ref3,CONSTRAINT_KEYS.MIN_WIDTH,LARGE.MIN_WIDTH),_defineProperty(_ref3,CONSTRAINT_KEYS.VIEWPORT,LARGE.VIEWPORT),_ref3)],constraintsByViewport={};constraints.forEach(function(e){constraintsByViewport[e.viewport]=e});/**
 * getViewportForWidth
 * @param width: number
 * @return string
 */var getViewportForWidth=function(e){for(var t=constraints.length-1;0<=t&&e<constraints[t].minWidth;)t--;return constraints[t].viewport},ascertainIsMobileOrTablet=function(){return"undefined"!=typeof window&&window.matchMedia(IS_MOBILE_OR_TABLET).matches},viewports={CONSTRAINT_KEYS:CONSTRAINT_KEYS,constraints:constraints,constraintsByViewport:constraintsByViewport,getViewportForWidth:getViewportForWidth,ascertainIsMobileOrTablet:ascertainIsMobileOrTablet},EXTERNAL_BUTTON_LINK=HYPERLINK_STYLE_TYPES.EXTERNAL_BUTTON_LINK,EXTERNAL_TEXT_LINK=HYPERLINK_STYLE_TYPES.EXTERNAL_TEXT_LINK,INTERNAL_TEXT_LINK=HYPERLINK_STYLE_TYPES.INTERNAL_TEXT_LINK,EXTERNAL_NO_ICON_LINK=HYPERLINK_STYLE_TYPES.EXTERNAL_NO_ICON_LINK,NO_ICON_LINK=HYPERLINK_STYLE_TYPES.NO_ICON_LINK,checkIsInlineFromStyle=function(e){return!!(e===EXTERNAL_TEXT_LINK||e===INTERNAL_TEXT_LINK||e===NO_ICON_LINK||e===EXTERNAL_NO_ICON_LINK)},getButtonPropsFromStyle=function(e,t){var n=e===EXTERNAL_BUTTON_LINK||e===EXTERNAL_TEXT_LINK||e===EXTERNAL_NO_ICON_LINK?"href":"to";return _defineProperty({},n,t)},hasIconFromStyle=function(e){return e!==NO_ICON_LINK&&e!==EXTERNAL_NO_ICON_LINK},getTargetType=function(e){return e?"_blank":"_self"},styles$1={base:"Hyperlink-module_base__uoaww",fadeIn:"Hyperlink-module_fadeIn__1iLPn",fadeOut:"Hyperlink-module_fadeOut__XYiYX",slideInLeft:"Hyperlink-module_slideInLeft__2mfgK",slideOutLeft:"Hyperlink-module_slideOutLeft__9HH_Q",slideOutUp:"Hyperlink-module_slideOutUp__V8JMI",slideInDown:"Hyperlink-module_slideInDown__1ZMDF",slideOutDown:"Hyperlink-module_slideOutDown__1BVWC",slideInUp:"Hyperlink-module_slideInUp__1XVhx"},NO_ICON_LINK$1=HYPERLINK_STYLE_TYPES.NO_ICON_LINK,Hyperlink=function(e){var t=e.children,n=e.className,i=e.dataTestRef,a=e.openInANewWindow,l=e.style,d=void 0===l?NO_ICON_LINK$1:l,s=e.text,o=e.title,_=e.url,u=(0,_classnames["default"])(styles$1.base,n);if(!s)return _react["default"].createElement("a",{className:u,href:_,title:o||"Link to ".concat(_)},t);var r=checkIsInlineFromStyle(d),c=getButtonPropsFromStyle(d,_),m=hasIconFromStyle(d),f=getTargetType(void 0!==a&&a);return _react["default"].createElement(Button,_extends({className:n,dataTestRef:i,icon:m,inline:r,target:f,title:o||"Link to ".concat(_)},c),s)};/**
 * ascertainIsMobileOrTablet
 * @param none
 * @return boolean
 */Hyperlink.propTypes={children:_propTypes["default"].any,className:_propTypes["default"].string,id:_propTypes["default"].string,dataTestRef:_propTypes["default"].string,openInANewWindow:_propTypes["default"].bool,style:_propTypes["default"].oneOf(["External Button Link","External Text Link","Internal Button Link","Internal Text Link","External No Icon Link","No Icon Link"]),title:_propTypes["default"].string,text:_propTypes["default"].string,type:_propTypes["default"].oneOf(["Relative","Absolute"]),url:_propTypes["default"].string.isRequired},Hyperlink.defaultProps={children:void 0,className:void 0,id:void 0,dataTestRef:void 0,openInANewWindow:!1,style:"No Icon Link",title:void 0,text:void 0,type:void 0,url:void 0};var getCarouselSettings=function(e){var t=e.className,n=e.Pagination,i=e.NextButton,a=e.PreviousButton;return{appendDots:function(e){return _react["default"].createElement(n,{dots:e})},centerMode:!1,className:t,customPaging:function(){return _react["default"].createElement("div",null)},dots:!0,infinite:!1,initialSlide:0,nextArrow:_react["default"].createElement(i,null),prevArrow:_react["default"].createElement(a,null),responsive:[{breakpoint:BREAKPOINTS.MEDIUM.MIN_WIDTH,settings:{slidesToShow:1}},{breakpoint:BREAKPOINTS.LARGE.MIN_WIDTH,settings:{slidesToShow:2}},{breakpoint:BREAKPOINTS.XLARGE.MIN_WIDTH,settings:{slidesToShow:3}}],slidesToScroll:1,slidesToShow:4,speed:500,swipeToSlide:!0}},styles$2={base:"Heading-module_base__Afh6b",noTopMargin:"Heading-module_noTopMargin__2Zfkb",noMargin:"Heading-module_noMargin__25BGU",serifFont:"Heading-module_serifFont__pIB5u",xSmall:"Heading-module_xSmall__3AWRl",small:"Heading-module_small__3Aeb8",medium:"Heading-module_medium__5lYPh",large:"Heading-module_large__2BJbn",xLarge:"Heading-module_xLarge__2F_YR",fadeIn:"Heading-module_fadeIn__2tPB-",fadeOut:"Heading-module_fadeOut__4Si70",slideInLeft:"Heading-module_slideInLeft__1grfk",slideOutLeft:"Heading-module_slideOutLeft__15K7v",slideOutUp:"Heading-module_slideOutUp__1Fw3M",slideInDown:"Heading-module_slideInDown__3nhMG",slideOutDown:"Heading-module_slideOutDown__1J6Sg",slideInUp:"Heading-module_slideInUp__38pOc"},Heading=function(e){var t=e.children,n=e.className,i=e.id,a=e.level,l=e.isFlush,d=e.hasTopMargin,s=e.size,o=e.hasSerifFont,_=(0,_classnames["default"])(styles$2.base,_defineProperty({},styles$2.noTopMargin,!d),_defineProperty({},styles$2.noMargin,l),_defineProperty({},styles$2.serifFont,o),styles$2[s],n);return _react["default"].createElement("h".concat(a),{className:_,id:i},t)};Heading.propTypes={children:_propTypes["default"].string.isRequired,className:_propTypes["default"].string,hasTopMargin:_propTypes["default"].bool,id:_propTypes["default"].string,isFlush:_propTypes["default"].bool,hasSerifFont:_propTypes["default"].bool,level:_propTypes["default"].oneOf([1,2,3,4,5,6]).isRequired,size:_propTypes["default"].oneOf(["xSmall","small","medium","large","xLarge"]).isRequired},Heading.defaultProps={children:void 0,className:void 0,hasTopMargin:!0,id:void 0,isFlush:!1,hasSerifFont:!1,level:void 0,size:void 0};var styles$3={paragraph:"Paragraph-module_paragraph__3AXc0",base:"Paragraph-module_base__2wcSK",set:"Paragraph-module_set__wOcFC",fadeIn:"Paragraph-module_fadeIn__3HFZr",fadeOut:"Paragraph-module_fadeOut__3ucHc",slideInLeft:"Paragraph-module_slideInLeft__h9Er_",slideOutLeft:"Paragraph-module_slideOutLeft__3gKaP",slideOutUp:"Paragraph-module_slideOutUp__1th34",slideInDown:"Paragraph-module_slideInDown__ETGga",slideOutDown:"Paragraph-module_slideOutDown__FG5M9",slideInUp:"Paragraph-module_slideInUp__1PEKi"},Paragraph=function(e){var t=e.children,n=e.className,i=(0,_classnames["default"])(styles$3.base,n);return _react["default"].createElement("p",{className:i},t)};Paragraph.propTypes={children:_propTypes["default"].any,className:_propTypes["default"].string},Paragraph.defaultProps={children:void 0,className:void 0};var ParagraphSet=function(e){var t=e.children,n=e.className,i=(0,_classnames["default"])(styles$3.set,n);return _react["default"].createElement("div",{className:i},t)};ParagraphSet.propTypes={children:_propTypes["default"].any,className:_propTypes["default"].string},ParagraphSet.defaultProps={children:void 0,className:void 0};var styles$4={base:"CarouselIntroduction-module_base__2sFJp",heading:"CarouselIntroduction-module_heading__tajC7",description:"CarouselIntroduction-module_description__XxH4y",fadeIn:"CarouselIntroduction-module_fadeIn__3y7h0",fadeOut:"CarouselIntroduction-module_fadeOut__3GrPy",slideInLeft:"CarouselIntroduction-module_slideInLeft__3ljLX",slideOutLeft:"CarouselIntroduction-module_slideOutLeft__jfLAH",slideOutUp:"CarouselIntroduction-module_slideOutUp__cnhK9",slideInDown:"CarouselIntroduction-module_slideInDown__1AG5J",slideOutDown:"CarouselIntroduction-module_slideOutDown__tptdh",slideInUp:"CarouselIntroduction-module_slideInUp__2y-Yf"},CarouselIntroduction=function(e){var t=e.heading,n=e.description;return _react["default"].createElement("header",{className:styles$4.base},_react["default"].createElement(Heading,{className:styles$4.heading,hasSerifFont:!0,level:4,size:"xLarge"},t),_react["default"].createElement(Paragraph,{className:styles$4.description},n))};CarouselIntroduction.propTypes={heading:_propTypes["default"].string,description:_propTypes["default"].string},CarouselIntroduction.defaultProps={heading:void 0,description:void 0};for(var rng=function(){return _crypto["default"].randomBytes(16)},byteToHex=[],i=0;256>i;++i)byteToHex[i]=(i+256).toString(16).substr(1);function bytesToUuid(e,t){var n=t||0,a=byteToHex;// join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
return[a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]]].join("")}var bytesToUuid_1=bytesToUuid;function v4(e,t,n){var a=t&&n||0;"string"==typeof e&&(t="binary"===e?Array(16):null,e=null),e=e||{};var i=e.random||(e.rng||rng)();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
// Copy bytes to buffer, if provided
if(i[6]=64|15&i[6],i[8]=128|63&i[8],t)for(var l=0;16>l;++l)t[a+l]=i[l];return t||bytesToUuid_1(i)}var v4_1=v4;/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[],this.size=0}var _listCacheClear=listCacheClear;/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(e,t){return e===t||e!==e&&t!==t}var eq_1=eq;/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(e,t){for(var n=e.length;n--;)if(eq_1(e[n][0],t))return n;return-1}var _assocIndexOf=assocIndexOf,arrayProto=Array.prototype,splice=arrayProto.splice;/** Used for built-in method references. */ /**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(e){var t=this.__data__,n=_assocIndexOf(t,e);if(0>n)return!1;var i=t.length-1;return n==i?t.pop():splice.call(t,n,1),--this.size,!0}var _listCacheDelete=listCacheDelete;/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(e){var t=this.__data__,n=_assocIndexOf(t,e);return 0>n?void 0:t[n][1]}var _listCacheGet=listCacheGet;/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(e){return-1<_assocIndexOf(this.__data__,e)}var _listCacheHas=listCacheHas;/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(e,t){var n=this.__data__,i=_assocIndexOf(n,e);return 0>i?(++this.size,n.push([e,t])):n[i][1]=t,this}var _listCacheSet=listCacheSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}// Add methods to `ListCache`.
ListCache.prototype.clear=_listCacheClear,ListCache.prototype["delete"]=_listCacheDelete,ListCache.prototype.get=_listCacheGet,ListCache.prototype.has=_listCacheHas,ListCache.prototype.set=_listCacheSet;var _ListCache=ListCache;/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new _ListCache,this.size=0}var _stackClear=stackClear;/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(e){var t=this.__data__,n=t["delete"](e);return this.size=t.size,n}var _stackDelete=stackDelete;/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(e){return this.__data__.get(e)}var _stackGet=stackGet;/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(e){return this.__data__.has(e)}var _stackHas=stackHas,asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";/** `Object#toString` result references. */ /**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(e){if(!isObject_1(e))return!1;// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=_baseGetTag(e);return t==funcTag||t==genTag||t==asyncTag||t==proxyTag}var isFunction_1=isFunction,coreJsData=_root["__core-js_shared__"],_coreJsData=coreJsData,maskSrcKey=function(){var e=/[^.]+$/.exec(_coreJsData&&_coreJsData.keys&&_coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();/** Used to detect overreaching core-js shims. */ /**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var _isMasked=isMasked,funcProto=Function.prototype,funcToString=funcProto.toString;/** Used for built-in method references. */ /**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(t){}try{return e+""}catch(t){}}return""}var _toSource=toSource,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto$1=Function.prototype,objectProto$2=Object.prototype,funcToString$1=funcProto$1.toString,hasOwnProperty$1=objectProto$2.hasOwnProperty,reIsNative=RegExp("^"+funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ /**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(e){if(!isObject_1(e)||_isMasked(e))return!1;var t=isFunction_1(e)?reIsNative:reIsHostCtor;return t.test(_toSource(e))}var _baseIsNative=baseIsNative;/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(e,t){return null==e?void 0:e[t]}var _getValue=getValue;/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(e,t){var n=_getValue(e,t);return _baseIsNative(n)?n:void 0}var _getNative=getNative,Map=_getNative(_root,"Map"),_Map=Map,nativeCreate=_getNative(Object,"create"),_nativeCreate=nativeCreate;/* Built-in method references that are verified to be native. */ /**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=_nativeCreate?_nativeCreate(null):{},this.size=0}var _hashClear=hashClear;/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var _hashDelete=hashDelete,HASH_UNDEFINED="__lodash_hash_undefined__",objectProto$3=Object.prototype,hasOwnProperty$2=objectProto$3.hasOwnProperty;/** Used to stand-in for `undefined` hash values. */ /**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(e){var t=this.__data__;if(_nativeCreate){var n=t[e];return n===HASH_UNDEFINED?void 0:n}return hasOwnProperty$2.call(t,e)?t[e]:void 0}var _hashGet=hashGet,objectProto$4=Object.prototype,hasOwnProperty$3=objectProto$4.hasOwnProperty;/** Used for built-in method references. */ /**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(e){var t=this.__data__;return _nativeCreate?t[e]!==void 0:hasOwnProperty$3.call(t,e)}var _hashHas=hashHas,HASH_UNDEFINED$1="__lodash_hash_undefined__";/** Used to stand-in for `undefined` hash values. */ /**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=_nativeCreate&&void 0===t?HASH_UNDEFINED$1:t,this}var _hashSet=hashSet;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}// Add methods to `Hash`.
Hash.prototype.clear=_hashClear,Hash.prototype["delete"]=_hashDelete,Hash.prototype.get=_hashGet,Hash.prototype.has=_hashHas,Hash.prototype.set=_hashSet;var _Hash=Hash;/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0,this.__data__={hash:new _Hash,map:new(_Map||_ListCache),string:new _Hash}}var _mapCacheClear=mapCacheClear;/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(e){var t=_typeof2(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}var _isKeyable=isKeyable;/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(e,t){var n=e.__data__;return _isKeyable(t)?n["string"==typeof t?"string":"hash"]:n.map}var _getMapData=getMapData;/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(e){var t=_getMapData(this,e)["delete"](e);return this.size-=t?1:0,t}var _mapCacheDelete=mapCacheDelete;/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(e){return _getMapData(this,e).get(e)}var _mapCacheGet=mapCacheGet;/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(e){return _getMapData(this,e).has(e)}var _mapCacheHas=mapCacheHas;/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(e,t){var n=_getMapData(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var _mapCacheSet=mapCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}// Add methods to `MapCache`.
MapCache.prototype.clear=_mapCacheClear,MapCache.prototype["delete"]=_mapCacheDelete,MapCache.prototype.get=_mapCacheGet,MapCache.prototype.has=_mapCacheHas,MapCache.prototype.set=_mapCacheSet;var _MapCache=MapCache,LARGE_ARRAY_SIZE=200;/** Used as the size to enable large array optimizations. */ /**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(e,t){var n=this.__data__;if(n instanceof _ListCache){var i=n.__data__;if(!_Map||i.length<LARGE_ARRAY_SIZE-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new _MapCache(i)}return n.set(e,t),this.size=n.size,this}var _stackSet=stackSet;/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(e){var t=this.__data__=new _ListCache(e);this.size=t.size}// Add methods to `Stack`.
Stack.prototype.clear=_stackClear,Stack.prototype["delete"]=_stackDelete,Stack.prototype.get=_stackGet,Stack.prototype.has=_stackHas,Stack.prototype.set=_stackSet;var _Stack=Stack,HASH_UNDEFINED$2="__lodash_hash_undefined__";/** Used to stand-in for `undefined` hash values. */ /**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(e){return this.__data__.set(e,HASH_UNDEFINED$2),this}var _setCacheAdd=setCacheAdd;/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(e){return this.__data__.has(e)}var _setCacheHas=setCacheHas;/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new _MapCache;++t<n;)this.add(e[t])}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=_setCacheAdd,SetCache.prototype.has=_setCacheHas;var _SetCache=SetCache;/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(e,t){for(var n=-1,i=null==e?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var _arraySome=arraySome;/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(e,t){return e.has(t)}var _cacheHas=cacheHas,COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** Used to compose bitmasks for value comparisons. */ /**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(e,t,n,i,a,l){var d=n&COMPARE_PARTIAL_FLAG,s=e.length,o=t.length;if(s!=o&&!(d&&o>s))return!1;// Assume cyclic values are equal.
var _=l.get(e);if(_&&l.get(t))return _==t;var u=-1,r=!0,c=n&COMPARE_UNORDERED_FLAG?new _SetCache:void 0;// Ignore non-index properties.
for(l.set(e,t),l.set(t,e);++u<s;){var m=e[u],f=t[u];if(i)var p=d?i(f,m,u,t,e,l):i(m,f,u,e,t,l);if(void 0!==p){if(p)continue;r=!1;break}// Recursively compare arrays (susceptible to call stack limits).
if(c){if(!_arraySome(t,function(e,t){if(!_cacheHas(c,t)&&(m===e||a(m,e,n,i,l)))return c.push(t)})){r=!1;break}}else if(!(m===f||a(m,f,n,i,l))){r=!1;break}}return l["delete"](e),l["delete"](t),r}var _equalArrays=equalArrays,Uint8Array=_root.Uint8Array,_Uint8Array=Uint8Array;/** Built-in value references. */ /**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(e){var t=-1,n=Array(e.size);return e.forEach(function(e,i){n[++t]=[i,e]}),n}var _mapToArray=mapToArray;/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}var _setToArray=setToArray,COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2,boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",mapTag="[object Map]",numberTag="[object Number]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag$1="[object Symbol]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",symbolProto=_Symbol?_Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;/** Used to compose bitmasks for value comparisons. */ /**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(e,t,n,i,a,l,d){switch(n){case dataViewTag:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case arrayBufferTag:return!!(e.byteLength==t.byteLength&&l(new _Uint8Array(e),new _Uint8Array(t)));case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq_1(+e,+t);case errorTag:return e.name==t.name&&e.message==t.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return e==t+"";case mapTag:var s=_mapToArray;case setTag:var o=i&COMPARE_PARTIAL_FLAG$1;if(s||(s=_setToArray),e.size!=t.size&&!o)return!1;// Assume cyclic values are equal.
var _=d.get(e);if(_)return _==t;i|=COMPARE_UNORDERED_FLAG$1,d.set(e,t);var u=_equalArrays(s(e),s(t),i,a,l,d);return d["delete"](e),u;case symbolTag$1:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(t);}return!1}var _equalByTag=equalByTag;/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(e,t){for(var n=-1,i=t.length,a=e.length;++n<i;)e[a+n]=t[n];return e}var _arrayPush=arrayPush,isArray=Array.isArray,isArray_1=isArray;/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ /**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(e,t,n){var i=t(e);return isArray_1(e)?i:_arrayPush(i,n(e))}var _baseGetAllKeys=baseGetAllKeys;/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(e,t){for(var n=-1,i=null==e?0:e.length,a=0,l=[];++n<i;){var d=e[n];t(d,n,e)&&(l[a++]=d)}return l}var _arrayFilter=arrayFilter;/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[]}var stubArray_1=stubArray,objectProto$5=Object.prototype,propertyIsEnumerable=objectProto$5.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?function(e){return null==e?[]:(e=Object(e),_arrayFilter(nativeGetSymbols(e),function(t){return propertyIsEnumerable.call(e,t)}))}:stubArray_1,_getSymbols=getSymbols;/** Used for built-in method references. */ /**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var _baseTimes=baseTimes,argsTag="[object Arguments]";/** `Object#toString` result references. */ /**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(e){return isObjectLike_1(e)&&_baseGetTag(e)==argsTag}var _baseIsArguments=baseIsArguments,objectProto$6=Object.prototype,hasOwnProperty$4=objectProto$6.hasOwnProperty,propertyIsEnumerable$1=objectProto$6.propertyIsEnumerable,isArguments=_baseIsArguments(function(){return arguments}())?_baseIsArguments:function(e){return isObjectLike_1(e)&&hasOwnProperty$4.call(e,"callee")&&!propertyIsEnumerable$1.call(e,"callee")},isArguments_1=isArguments;/** Used for built-in method references. */ /**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return!1}var stubFalse_1=stubFalse,isBuffer_1=createCommonjsModule(function(e,t){/** Detect free variable `exports`. */var n=t&&!t.nodeType&&t,i=n&&!0&&e&&!e.nodeType&&e,a=i&&i.exports===n,l=a?_root.Buffer:void 0,d=l?l.isBuffer:void 0;/** Detect free variable `module`. */e.exports=d||stubFalse_1}),MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(e,t){var n=_typeof2(e);return t=null==t?MAX_SAFE_INTEGER:t,!!t&&("number"==n||"symbol"!=n&&reIsUint.test(e))&&-1<e&&0==e%1&&e<t}var _isIndex=isIndex,MAX_SAFE_INTEGER$1=9007199254740991;/** Used as references for various `Number` constants. */ /**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(e){return"number"==typeof e&&-1<e&&0==e%1&&e<=MAX_SAFE_INTEGER$1}var isLength_1=isLength,argsTag$1="[object Arguments]",arrayTag="[object Array]",boolTag$1="[object Boolean]",dateTag$1="[object Date]",errorTag$1="[object Error]",funcTag$1="[object Function]",mapTag$1="[object Map]",numberTag$1="[object Number]",objectTag="[object Object]",regexpTag$1="[object RegExp]",setTag$1="[object Set]",stringTag$1="[object String]",weakMapTag="[object WeakMap]",arrayBufferTag$1="[object ArrayBuffer]",dataViewTag$1="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};/** `Object#toString` result references. */typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag$1]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag$1]=typedArrayTags[boolTag$1]=typedArrayTags[dataViewTag$1]=typedArrayTags[dateTag$1]=typedArrayTags[errorTag$1]=typedArrayTags[funcTag$1]=typedArrayTags[mapTag$1]=typedArrayTags[numberTag$1]=typedArrayTags[objectTag]=typedArrayTags[regexpTag$1]=typedArrayTags[setTag$1]=typedArrayTags[stringTag$1]=typedArrayTags[weakMapTag]=!1;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(e){return isObjectLike_1(e)&&isLength_1(e.length)&&!!typedArrayTags[_baseGetTag(e)]}var _baseIsTypedArray=baseIsTypedArray;/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(e){return function(t){return e(t)}}var _baseUnary=baseUnary,_nodeUtil=createCommonjsModule(function(e,t){/** Detect free variable `exports`. */var n=t&&!t.nodeType&&t,i=n&&!0&&e&&!e.nodeType&&e,a=i&&i.exports===n,l=a&&_freeGlobal.process,d=function(){try{// Use `util.types` for Node.js 10+.
var e=i&&i.require&&i.require("util").types;return e?e:l&&l.binding&&l.binding("util");// Legacy `process.binding('util')` for Node.js < 10.
}catch(t){}}();/** Detect free variable `module`. */e.exports=d}),nodeIsTypedArray=_nodeUtil&&_nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?_baseUnary(nodeIsTypedArray):_baseIsTypedArray,isTypedArray_1=isTypedArray,objectProto$7=Object.prototype,hasOwnProperty$5=objectProto$7.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(e,t){var n=isArray_1(e),i=!n&&isArguments_1(e),a=!n&&!i&&isBuffer_1(e),l=!n&&!i&&!a&&isTypedArray_1(e),d=n||i||a||l,s=d?_baseTimes(e.length,String):[],o=s.length;for(var _ in e)(t||hasOwnProperty$5.call(e,_))&&!(d&&(// Safari 9 has enumerable `arguments.length` in strict mode.
"length"==_||// Node.js 0.10 has enumerable non-index properties on buffers.
a&&("offset"==_||"parent"==_)||// PhantomJS 2 has enumerable non-index properties on typed arrays.
l&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||// Skip index properties.
_isIndex(_,o)))&&s.push(_);return s}var _arrayLikeKeys=arrayLikeKeys,objectProto$8=Object.prototype;/** Used for built-in method references. */ /**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||objectProto$8;return e===n}var _isPrototype=isPrototype;/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(e,t){return function(n){return e(t(n))}}var _overArg=overArg,nativeKeys=_overArg(Object.keys,Object),_nativeKeys=nativeKeys,objectProto$9=Object.prototype,hasOwnProperty$6=objectProto$9.hasOwnProperty;/* Built-in method references for those with the same name as other `lodash` methods. */ /**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(e){if(!_isPrototype(e))return _nativeKeys(e);var t=[];for(var n in Object(e))hasOwnProperty$6.call(e,n)&&"constructor"!=n&&t.push(n);return t}var _baseKeys=baseKeys;/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(e){return null!=e&&isLength_1(e.length)&&!isFunction_1(e)}var isArrayLike_1=isArrayLike;/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(e){return isArrayLike_1(e)?_arrayLikeKeys(e):_baseKeys(e)}var keys_1=keys;/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(e){return _baseGetAllKeys(e,keys_1,_getSymbols)}var _getAllKeys=getAllKeys,COMPARE_PARTIAL_FLAG$2=1,objectProto$a=Object.prototype,hasOwnProperty$7=objectProto$a.hasOwnProperty;/** Used to compose bitmasks for value comparisons. */ /**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(e,t,n,i,a,l){var d=n&COMPARE_PARTIAL_FLAG$2,s=_getAllKeys(e),o=s.length,_=_getAllKeys(t),u=_.length;if(o!=u&&!d)return!1;for(var r,c=o;c--;)if(r=s[c],d?!(r in t):!hasOwnProperty$7.call(t,r))return!1;// Assume cyclic values are equal.
var m=l.get(e);if(m&&l.get(t))return m==t;var f=!0;l.set(e,t),l.set(t,e);for(var p=d;++c<o;){r=s[c];var I=e[r],g=t[r];if(i)var E=d?i(g,I,r,t,e,l):i(I,g,r,e,t,l);// Recursively compare objects (susceptible to call stack limits).
if(void 0===E?!(I===g||a(I,g,n,i,l)):!E){f=!1;break}p||(p="constructor"==r)}if(f&&!p){var O=e.constructor,h=t.constructor;// Non `Object` object instances with different constructors are not equal.
O!=h&&"constructor"in e&&"constructor"in t&&!("function"==typeof O&&O instanceof O&&"function"==typeof h&&h instanceof h)&&(f=!1)}return l["delete"](e),l["delete"](t),f}var _equalObjects=equalObjects,DataView=_getNative(_root,"DataView"),_DataView=DataView,Promise=_getNative(_root,"Promise"),_Promise=Promise,Set=_getNative(_root,"Set"),_Set=Set,WeakMap=_getNative(_root,"WeakMap"),_WeakMap=WeakMap,mapTag$2="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag$2="[object Set]",weakMapTag$1="[object WeakMap]",dataViewTag$2="[object DataView]",dataViewCtorString=_toSource(_DataView),mapCtorString=_toSource(_Map),promiseCtorString=_toSource(_Promise),setCtorString=_toSource(_Set),weakMapCtorString=_toSource(_WeakMap),getTag=_baseGetTag;/* Built-in method references that are verified to be native. */(_DataView&&getTag(new _DataView(new ArrayBuffer(1)))!=dataViewTag$2||_Map&&getTag(new _Map)!=mapTag$2||_Promise&&getTag(_Promise.resolve())!=promiseTag||_Set&&getTag(new _Set)!=setTag$2||_WeakMap&&getTag(new _WeakMap)!=weakMapTag$1)&&(getTag=function(e){var t=_baseGetTag(e),n=t==objectTag$1?e.constructor:void 0,i=n?_toSource(n):"";if(i)switch(i){case dataViewCtorString:return dataViewTag$2;case mapCtorString:return mapTag$2;case promiseCtorString:return promiseTag;case setCtorString:return setTag$2;case weakMapCtorString:return weakMapTag$1;}return t});var _getTag=getTag,COMPARE_PARTIAL_FLAG$3=1,argsTag$2="[object Arguments]",arrayTag$1="[object Array]",objectTag$2="[object Object]",objectProto$b=Object.prototype,hasOwnProperty$8=objectProto$b.hasOwnProperty;/** Used to compose bitmasks for value comparisons. */ /**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(e,t,n,i,a,l){var d=isArray_1(e),s=isArray_1(t),o=d?arrayTag$1:_getTag(e),_=s?arrayTag$1:_getTag(t);o=o==argsTag$2?objectTag$2:o,_=_==argsTag$2?objectTag$2:_;var u=o==objectTag$2,r=_==objectTag$2,c=o==_;if(c&&isBuffer_1(e)){if(!isBuffer_1(t))return!1;d=!0,u=!1}if(c&&!u)return l||(l=new _Stack),d||isTypedArray_1(e)?_equalArrays(e,t,n,i,a,l):_equalByTag(e,t,o,n,i,a,l);if(!(n&COMPARE_PARTIAL_FLAG$3)){var m=u&&hasOwnProperty$8.call(e,"__wrapped__"),f=r&&hasOwnProperty$8.call(t,"__wrapped__");if(m||f){var p=m?e.value():e,I=f?t.value():t;return l||(l=new _Stack),a(p,I,n,i,l)}}return!!c&&(l||(l=new _Stack),_equalObjects(e,t,n,i,a,l))}var _baseIsEqualDeep=baseIsEqualDeep;/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(e,t,n,i,a){return!(e!==t)||(null!=e&&null!=t&&(isObjectLike_1(e)||isObjectLike_1(t))?_baseIsEqualDeep(e,t,n,i,baseIsEqual,a):e!==e&&t!==t)}var _baseIsEqual=baseIsEqual,COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2;/** Used to compose bitmasks for value comparisons. */ /**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(e,t,n,i){var a=n.length,l=a,d=!i;if(null==e)return!l;for(e=Object(e);a--;){var s=n[a];if(d&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<l;){s=n[a];var o=s[0],_=e[o],u=s[1];if(!(d&&s[2])){var r=new _Stack;if(i)var c=i(_,u,o,e,t,r);if(void 0===c?!_baseIsEqual(u,_,COMPARE_PARTIAL_FLAG$4|COMPARE_UNORDERED_FLAG$2,i,r):!c)return!1}else if(void 0===_&&!(o in e))return!1}return!0}var _baseIsMatch=baseIsMatch;/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function isStrictComparable(e){return e===e&&!isObject_1(e)}var _isStrictComparable=isStrictComparable;/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(e){for(var t=keys_1(e),n=t.length;n--;){var i=t[n],a=e[i];t[n]=[i,a,_isStrictComparable(a)]}return t}var _getMatchData=getMatchData;/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(e,t){return function(n){return null!=n&&n[e]===t&&(t!==void 0||e in Object(n))}}var _matchesStrictComparable=matchesStrictComparable;/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(e){var t=_getMatchData(e);return 1==t.length&&t[0][2]?_matchesStrictComparable(t[0][0],t[0][1]):function(n){return n===e||_baseIsMatch(n,e,t)}}var _baseMatches=baseMatches,reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/** Used to match property names within property paths. */ /**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(e,t){if(isArray_1(e))return!1;var n=_typeof2(e);return!!("number"==n||"symbol"==n||"boolean"==n||null==e||isSymbol_1(e))||reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t)}var _isKey=isKey,FUNC_ERROR_TEXT$1="Expected a function";/** Error message constants. */ /**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT$1);var n=function(){var i=arguments,a=t?t.apply(this,i):i[0],l=n.cache;if(l.has(a))return l.get(a);var d=e.apply(this,i);return n.cache=l.set(a,d)||l,d};return n.cache=new(memoize.Cache||_MapCache),n}// Expose `MapCache`.
memoize.Cache=_MapCache;var memoize_1=memoize,MAX_MEMOIZE_SIZE=500;/** Used as the maximum memoize cache size. */ /**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(e){var t=memoize_1(e,function(e){return n.size===MAX_MEMOIZE_SIZE&&n.clear(),e}),n=t.cache;return t}var _memoizeCapped=memoizeCapped,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=_memoizeCapped(function(e){var t=[];return 46===e.charCodeAt(0)/* . */&&t.push(""),e.replace(rePropName,function(e,n,i,a){t.push(i?a.replace(reEscapeChar,"$1"):n||e)}),t}),_stringToPath=stringToPath;/** Used to match property names within property paths. */ /**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(e,t){for(var n=-1,i=null==e?0:e.length,a=Array(i);++n<i;)a[n]=t(e[n],n,e);return a}var _arrayMap=arrayMap,INFINITY=1/0,symbolProto$1=_Symbol?_Symbol.prototype:void 0,symbolToString=symbolProto$1?symbolProto$1.toString:void 0;/** Used as references for various `Number` constants. */ /**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(e){// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof e)return e;if(isArray_1(e))// Recursively convert values (susceptible to call stack limits).
return _arrayMap(e,baseToString)+"";if(isSymbol_1(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}var _baseToString=baseToString;/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString(e){return null==e?"":_baseToString(e)}var toString_1=toString;/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function castPath(e,t){return isArray_1(e)?e:_isKey(e,t)?[e]:_stringToPath(toString_1(e))}var _castPath=castPath,INFINITY$1=1/0;/** Used as references for various `Number` constants. */ /**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(e){if("string"==typeof e||isSymbol_1(e))return e;var t=e+"";return"0"==t&&1/e==-INFINITY$1?"-0":t}var _toKey=toKey;/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(e,t){t=_castPath(t,e);for(var n=0,i=t.length;null!=e&&n<i;)e=e[_toKey(t[n++])];return n&&n==i?e:void 0}var _baseGet=baseGet;/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function get(e,t,n){var i=null==e?void 0:_baseGet(e,t);return i===void 0?n:i}var get_1=get;/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(e,t){return null!=e&&t in Object(e)}var _baseHasIn=baseHasIn;/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(e,t,n){t=_castPath(t,e);for(var i,a=-1,l=t.length,d=!1;++a<l&&(i=_toKey(t[a]),!!(d=null!=e&&n(e,i)));)e=e[i];return d||++a!=l?d:(l=null==e?0:e.length,!!l&&isLength_1(l)&&_isIndex(i,l)&&(isArray_1(e)||isArguments_1(e)))}var _hasPath=hasPath;/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */function hasIn(e,t){return null!=e&&_hasPath(e,t,_baseHasIn)}var hasIn_1=hasIn,COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;/** Used to compose bitmasks for value comparisons. */ /**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(e,t){return _isKey(e)&&_isStrictComparable(t)?_matchesStrictComparable(_toKey(e),t):function(n){var i=get_1(n,e);return i===void 0&&i===t?hasIn_1(n,e):_baseIsEqual(t,i,COMPARE_PARTIAL_FLAG$5|COMPARE_UNORDERED_FLAG$3)}}var _baseMatchesProperty=baseMatchesProperty;/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(e){return e}var identity_1=identity;/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(e){return function(t){return null==t?void 0:t[e]}}var _baseProperty=baseProperty;/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyDeep(e){return function(t){return _baseGet(t,e)}}var _basePropertyDeep=basePropertyDeep;/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */function property(e){return _isKey(e)?_baseProperty(_toKey(e)):_basePropertyDeep(e)}var property_1=property;/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function baseIteratee(e){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
return"function"==typeof e?e:null==e?identity_1:"object"==_typeof2(e)?isArray_1(e)?_baseMatchesProperty(e[0],e[1]):_baseMatches(e):property_1(e)}var _baseIteratee=baseIteratee;/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */function createFind(e){return function(t,n,i){var a=Object(t);if(!isArrayLike_1(t)){var l=_baseIteratee(n);t=keys_1(t),n=function(e){return l(a[e],e,a)}}var d=e(t,n,i);return-1<d?a[l?t[d]:d]:void 0}}var _createFind=createFind;/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseFindIndex(e,t,n,i){for(var a=e.length,l=n+(i?1:-1);i?l--:++l<a;)if(t(e[l],l,e))return l;return-1}var _baseFindIndex=baseFindIndex,INFINITY$2=1/0,MAX_INTEGER=17976931348623157e292;/** Used as references for various `Number` constants. */ /**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function toFinite(e){if(!e)return 0===e?e:0;if(e=toNumber_1(e),e===INFINITY$2||e===-INFINITY$2){var t=0>e?-1:1;return t*MAX_INTEGER}return e===e?e:0}var toFinite_1=toFinite;/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function toInteger(e){var t=toFinite_1(e),n=t%1;return t===t?n?t-n:t:0}var toInteger_1=toInteger,nativeMax$1=Math.max;/* Built-in method references for those with the same name as other `lodash` methods. */ /**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */function findIndex(e,t,n){var i=null==e?0:e.length;if(!i)return-1;var a=null==n?0:toInteger_1(n);return 0>a&&(a=nativeMax$1(i+a,0)),_baseFindIndex(e,_baseIteratee(t),a)}var findIndex_1=findIndex,find=_createFind(findIndex_1),find_1=find,svgs=[{name:"rightArrow",data:[{path:{d:"M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"}}],viewBox:"0 0 50 50"},{name:"warning",data:[{path:{d:"M42.7,7.2C37.7,2.2,31.5,0,25,0S12.3,2.2,7.3,7.2c-9.7,9.7-9.7,25.4,0,35.2c5,5,11.2,7.2,17.7,7.2s12.7-2.5,17.7-7.2 C52.4,32.6,52.4,16.9,42.7,7.2z M41,40.6c-4.2,4.2-10,6.5-16,6.5s-11.7-2.2-16-6.5c-8.7-8.7-8.7-23,0-31.7c4.3-4.2,10-6.5,16-6.5 s11.7,2.3,16,6.5C49.7,17.6,49.7,31.9,41,40.6z"}},{path:{d:"M27,13.1V30h-4V13.1H27z M23,36.5h3.9v-4.3H23V36.5z"}}],viewBox:"0 0 50 50"},{name:"rightUpArrow",data:[{path:{d:"M21.8,0.2l28.1-0.1v28.1l-4.5,0l0.1-20.5L16.2,37.1l-3.4-3.4L42.1,4.4L21.8,4.4L21.8,0.2L21.8,0.2z"}}],viewBox:"0 0 50 50"},{name:"downArrow",data:[{polygon:{points:"25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5",classes:"arrow"}}],viewBox:"0 0 50 50"},{name:"plusAndCloseWithCircle",data:[{circle:{cx:"25",cy:"25",r:"22",fill:"none",classes:"circle"}},{polygon:{points:"26.2,15.2 23.8,15.2 23.8,23.9 15,23.9 15,26.4 23.8,26.4 23.8,35.1 26.2,35.1 26.2,26.4 35,26.4 35,23.9 26.2,23.9 ",classes:"plus"}},{polygon:{points:"32.9,19 31.2,17.3 25,23.4 18.8,17.2 17,19 23.3,25.2 17.1,31.3 18.8,33 25,26.9 31.2,33.1 33,31.3 26.7,25.1 ",classes:"close"}}],viewBox:"0 0 50 50"},{name:"chevron",data:[{polygon:{points:"25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5",classes:"chevronAndCloseWithCircleChevron"}}],viewBox:"0 0 50 50"},{name:"chevronAndCloseWithCircle",data:[{circle:{cx:"25",cy:"25",r:"22",fill:"none",classes:"chevronAndCloseWithCircleCircle"}},{polygon:{points:"25,30.3 15.9,21.2 14.1,23 25,33.9 35.9,23 34.1,21.2",classes:"chevronAndCloseWithCircleChevron"}},{polygon:{points:"32.9,19 31.2,17.3 25,23.4 18.8,17.2 17,19 23.3,25.2 17.1,31.3 18.8,33 25,26.9 31.2,33.1 33,31.3 26.7,25.1 ",classes:"chevronAndCloseWithCircleClose"}}],viewBox:"0 0 50 50"},{name:"close",data:[{polygon:{points:"50,5 45,0 25,20 5,0 0,5 20,25 0,45 5,50 25,30 45,50 50,45 30,25",classes:"close"}}],viewBox:"0 0 50 50"},{name:"aesop",data:[{path:{d:"M48.6,22.5L31.8,62.2h34.2L48.6,22.5z M28.6,70.3c-3.2,7.4-9.6,21.7-14.9,42c-1.9-0.3-3.5-0.9-6.6-0.9c-3.1,0-5,0.6-7.1,0.9C14.3,81.2,38,28.9,49.4,0c1.3,0.2,2.3,0.5,4,0.5c1.4,0,2.3-0.2,3.5-0.5c12.3,33.7,47.8,111.7,48.1,112.3c-2.7-0.5-5.5-0.9-9.5-0.9c-4.2,0-7.2,0.5-10.3,0.9c-5.6-19.2-12.2-33.2-16.2-42H28.6z"}},{path:{d:"M172.4,66.6c0-5.3,0-26.6-19.2-26.6c-14,0-20.7,10.6-22.2,26.6H172.4z M130.9,73.3c0,4.5,0,13.6,4.3,21c7.4,12.1,17.8,12.5,22.5,12.5c15.7,0,23.1-9.6,25.5-13l1.9,0.4c-1,4.5-1,7.1-1.1,9.6c-7.1,6.7-16.8,10.5-29.8,10.5c-24.4,0-39.3-15.4-39.3-40.1c0-22.1,12.2-40.7,38.5-40.7c35.8,0,35.3,31.1,35.1,39.8H130.9z"}},{path:{d:"M249.6,52.1c-0.6-2.4-1.6-6.4-6.2-9.6c-3.4-2.4-7.8-2.7-10.4-2.7c-9.8,0-14.9,5.1-14.9,12c0,9.3,9.5,12.7,15.1,14.1c14.3,3.7,25.8,6.7,25.8,22.8c0,12.2-8.5,25.8-30.8,25.8c-13,0-22-5.5-23.7-6.7c2.1-3.9,3.4-10.7,3.7-12.8l1.9-0.5c1.1,2.7,2.7,7.1,8.7,10.6c4,2.4,8.2,3,11.7,3c8.4,0,16.2-4,16.2-13.2c0-9.1-5.5-10.9-22.3-16.4c-6.9-2.3-18.3-7.2-18.3-21.3c0-9.1,5.6-23.9,27.8-23.9c11.1,0,17.5,3.4,21.2,5.3c-1.6,4.2-2.7,8-3.2,13.5H249.6z"}},{path:{d:"M291.5,73.5c0,22.3,9.8,34.6,24.5,34.6c15.4,0,25.5-13.3,25.5-34.5c0-12.5-3.9-33.8-24.7-33.8C291.5,39.8,291.5,68.6,291.5,73.5 M357.9,73c0,25.5-17.6,41.5-42,41.5c-17,0-40.8-7.7-40.8-40.6c0-25,16.7-40.6,40.8-40.6 C346.3,33.4,357.9,53.4,357.9,73"}},{path:{d:"M399.4,49.6c-3.2,4-6.6,9.8-6.6,25.7c0,14.1,3.2,19.4,6.6,23.4c4.1,5,9.6,7.9,17,7.9 c22.9,0,22.9-27.1,22.9-32.3c0-24.2-11.6-33-22-33C408.7,41.2,403.1,44.9,399.4,49.6 M419.3,114.7c-15.1,0-23.6-8.3-26.2-14.9 c0,25.2-0.2,39.8,0.8,54.5c-2.4-0.6-4.5-0.9-8.4-0.9c-4,0-6.1,0.3-8.6,0.9c1.3-20.8,1.8-41.9,1.8-62.7c0-14.6-0.3-34.3-0.8-57.6 c2.2,0.5,4.8,0.9,7.9,0.9c2.9,0,5.6-0.5,7.9-0.9c-0.6,8.8-0.6,11.2-0.6,14.6c2.6-4.2,9.5-15.4,27.3-15.4c16,0,35.6,11.7,35.6,40.3 C455.9,98.8,440.3,114.7,419.3,114.7"}},{rect:{x:"131.8",y:"13.5",width:"44.3",height:"5"}},{path:{d:"M477.2,98.1c0,1.6,0,3,0,4.4c1.3,0,4.3,0,4.3-2.3C481.5,98.1,479.2,98.1,477.2,98.1 M484.9,109.1 c-0.4,0-0.7-0.1-1.2-0.1c-0.4,0-0.8,0.1-1.5,0.1c-2-2.9-3.6-4.5-4.7-5.8h-0.4c0,1.8,0,3.2,0.2,5.8c-0.5,0-0.7-0.1-1.3-0.1 c-0.6,0-0.8,0.1-1.1,0.1c0.1-1.3,0.2-2.7,0.2-6.2c0-3-0.1-4.4-0.1-5.7c0.9,0,1.5,0,2.9,0c2.9,0,5.9,0,5.9,2.8c0,2.5-2.7,2.9-3.9,3 c0.8,1.1,4.4,5.1,5.1,5.9L484.9,109.1z M479.2,94.8c-4.8,0-8.5,3.8-8.5,8.6c0,4.9,3.6,8.6,8.5,8.6c4.9,0,8.5-3.7,8.5-8.6 C487.8,98.7,484.3,94.8,479.2,94.8 M479.2,92.9c5.9,0,10.5,4.7,10.5,10.5c0,5.9-4.7,10.5-10.5,10.5c-5.8,0-10.5-4.6-10.5-10.5 C468.8,97.5,473.5,92.9,479.2,92.9"}}],viewBox:"0 0 489.7 154.3"}],styles$5={base:"Icon-module_base__iPRbu",plusAndCloseWithCircle:"Icon-module_plusAndCloseWithCircle__Y4-yj",circle:"Icon-module_circle__4IIx2",plus:"Icon-module_plus__2RJbo",close:"Icon-module_close__1Owsp",fadeIn:"Icon-module_fadeIn__2dEh3",fadeOut:"Icon-module_fadeOut__vf7A4",slideInLeft:"Icon-module_slideInLeft__hiBKi",slideOutLeft:"Icon-module_slideOutLeft__3q3JF",slideOutUp:"Icon-module_slideOutUp__3dkXb",slideInDown:"Icon-module_slideInDown__2lyaL",slideOutDown:"Icon-module_slideOutDown__cchDq",slideInUp:"Icon-module_slideInUp__34srK"},generateSvgBlueprint=function(e,t){return e.data.map(function(e,n){var i=Object.keys(e)[0],a=e[i],l=a.classes,d=_objectWithoutProperties(a,["classes"]);return d.className=styles$5[l],d.key="".concat(t).concat(n),_react["default"].createElement(i,d)})},Icon=function(e){var t=e.className,n=e.dataRef,i=e.height,a=e.isActive,l=e.name,d=e.tabIndex,s=e.title,o=e.width,_=find_1(svgs,{name:l});if(void 0===_)// eslint-disable-line no-console
return console.error("<Icon />: svg does no exist"),null;var u=v4_1(),r="".concat(l,"-").concat(u),c=generateSvgBlueprint(_,u),m=(0,_classnames["default"])(styles$5.base,styles$5[l],t,_defineProperty({},styles$5.isActive,a));return _react["default"].createElement("svg",{"aria-labelledby":s?r:void 0,className:m,"data-ref":n,focusable:"false",height:i,role:"img",tabIndex:d,viewBox:_.viewBox,width:o},s&&_react["default"].createElement("title",{id:r},s),_react["default"].createElement("g",null,c))};/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */Icon.propTypes={className:_propTypes["default"].string,dataRef:_propTypes["default"].string,height:_propTypes["default"].number,isActive:_propTypes["default"].bool,name:_propTypes["default"].string.isRequired,tabIndex:_propTypes["default"].number,title:_propTypes["default"].string,width:_propTypes["default"].number},Icon.defaultProps={className:void 0,dataRef:"",height:12,isActive:!1,name:"",tabIndex:-1,title:void 0,width:12};var styles$6={base:"NextButton-module_base__3zqIF",fadeIn:"NextButton-module_fadeIn__3jbyQ",fadeOut:"NextButton-module_fadeOut__XszCW",slideInLeft:"NextButton-module_slideInLeft__gcHfJ",slideOutLeft:"NextButton-module_slideOutLeft__3ltd1",slideOutUp:"NextButton-module_slideOutUp__2rTsO",slideInDown:"NextButton-module_slideInDown__3AIo4",slideOutDown:"NextButton-module_slideOutDown__3eGh4",slideInUp:"NextButton-module_slideInUp__1Ya7q"},NextButton=function(e){var t=e.onClick;return _react["default"].createElement(Button,{className:styles$6.base,isInline:!0,onClick:t,title:"next slide"},_react["default"].createElement(Icon,{height:18,name:"chevron",width:18}))};/**
 * The onClick callback for the NextButton
 * components are provided through react-slick
 */NextButton.propTypes={onClick:_propTypes["default"].func},NextButton.defaultProps={onClick:void 0};var styles$7={base:"Pagination-module_base___SWdb",fadeIn:"Pagination-module_fadeIn__3WTcg",fadeOut:"Pagination-module_fadeOut__1EHTK",slideInLeft:"Pagination-module_slideInLeft__295-a",slideOutLeft:"Pagination-module_slideOutLeft__2lQbI",slideOutUp:"Pagination-module_slideOutUp__1K-uQ",slideInDown:"Pagination-module_slideInDown__10OPh",slideOutDown:"Pagination-module_slideOutDown__38iPb",slideInUp:"Pagination-module_slideInUp__1sAru"},Pagination=function(e){var t=e.dots;return _react["default"].createElement("div",null,_react["default"].createElement("ul",{className:styles$7.base},t))};Pagination.propTypes={dots:_propTypes["default"].array},Pagination.defaultProps={dots:void 0};var styles$8={base:"PreviousButton-module_base__1J-Kp",directionButton:"PreviousButton-module_directionButton__2QCUI",fadeIn:"PreviousButton-module_fadeIn__3-As_",fadeOut:"PreviousButton-module_fadeOut__2Fvuk",slideInLeft:"PreviousButton-module_slideInLeft__2ATh6",slideOutLeft:"PreviousButton-module_slideOutLeft__KxRGR",slideOutUp:"PreviousButton-module_slideOutUp__3-1Wv",slideInDown:"PreviousButton-module_slideInDown__3svr5",slideOutDown:"PreviousButton-module_slideOutDown__2hoNI",slideInUp:"PreviousButton-module_slideInUp__npgQM"},PreviousButton=function(e){var t=e.onClick;return _react["default"].createElement(Button,{className:styles$8.base,isInline:!0,onClick:t,title:"next slide"},_react["default"].createElement(Icon,{height:18,name:"chevron",width:18}))};/**
 * The onClick callback for the PreviousButton
 * components are provided through react-slick
 */PreviousButton.propTypes={onClick:_propTypes["default"].func},PreviousButton.defaultProps={onClick:void 0};var styles$9={base:"Image-module_base__18W0_",isRightAligned:"Image-module_isRightAligned__1le6V",fullBleedImage:"Image-module_fullBleedImage__1o9hJ",captionWrapper:"Image-module_captionWrapper__1y0du",caption:"Image-module_caption__2nhUA",picture:"Image-module_picture__312I-",fadeIn:"Image-module_fadeIn__1VIQn",fadeOut:"Image-module_fadeOut__ICyos",slideInLeft:"Image-module_slideInLeft__2dcCn",slideOutLeft:"Image-module_slideOutLeft__3AyNC",slideOutUp:"Image-module_slideOutUp__2J6OQ",slideInDown:"Image-module_slideInDown__33bZO",slideOutDown:"Image-module_slideOutDown__3fvz8",slideInUp:"Image-module_slideInUp__3sdjU"},Image=function(e){var t=e.altText,n=e.className,i=e.cta,a=e.large,l=e.medium,d=e.small,s=e.type,o=(0,_classnames["default"])(styles$9.base,_defineProperty({},styles$9.fullBleedImage,"componentFullBleedImage"===s),_defineProperty({},styles$9.isRightAligned,"componentSquareImage"===s),n),_=_react["default"].createElement("picture",{className:(0,_classnames["default"])(styles$9.picture,o)},a&&_react["default"].createElement("source",{media:"(min-width: ".concat(get_1(constraintsByViewport,"large.minWidth"),"px)"),srcSet:a}),l&&_react["default"].createElement("source",{media:"(min-width: ".concat(get_1(constraintsByViewport,"medium.minWidth"),"px)"),srcSet:l}),d&&_react["default"].createElement("source",{media:"(min-width: ".concat(get_1(constraintsByViewport,"small.minWidth"),"px)"),srcSet:d}),_react["default"].createElement("img",{alt:t}));return i?_react["default"].createElement(Hyperlink,{openInANewWindow:i.openInANewWindow,url:i.url},_):_};Image.propTypes={altText:_propTypes["default"].string.isRequired,className:_propTypes["default"].string,cta:_propTypes["default"].object,id:_propTypes["default"].string,isFullBleedImage:_propTypes["default"].bool,large:_propTypes["default"].string,medium:_propTypes["default"].string,small:_propTypes["default"].string,type:_propTypes["default"].string},Image.defaultProps={altText:void 0,className:void 0,cta:void 0,id:void 0,isFullBleedImage:void 0,large:void 0,medium:void 0,small:void 0,type:void 0};var styles$a={heading:"Slide-module_heading__2KIs0",description:"Slide-module_description__1ZOKE",image:"Slide-module_image__1j94t",imageContainer:"Slide-module_imageContainer__KWlFH",fadeIn:"Slide-module_fadeIn__vEXkM",fadeOut:"Slide-module_fadeOut__2i6Vk",slideInLeft:"Slide-module_slideInLeft__mluK4",slideOutLeft:"Slide-module_slideOutLeft__8DYe6",slideOutUp:"Slide-module_slideOutUp__1bHnr",slideInDown:"Slide-module_slideInDown__11R3Z",slideOutDown:"Slide-module_slideOutDown__1e-p1",slideInUp:"Slide-module_slideInUp__1ct0L"},Slide=function(e){var t=e.heading,n=e.description,i=e.image;return _react["default"].createElement(_react["default"].Fragment,null,(t||n)&&_react["default"].createElement("div",null,t&&_react["default"].createElement(Heading,{className:styles$a.heading,level:5,size:"xSmall"},t),n&&_react["default"].createElement("div",{className:styles$a.description},n)),_react["default"].createElement("div",{className:styles$a.imageContainer},_react["default"].createElement(Image,_extends({className:styles$a.image},i))))};Slide.propTypes={heading:_propTypes["default"].string,description:_propTypes["default"].string,image:_propTypes["default"].object.isRequired},Slide.defaultProps={heading:void 0,description:void 0,image:void 0};var styles$b={base:"Carousel-module_base__2Zak0",edges:"Carousel-module_edges__3J2ah",item:"Carousel-module_item__2G_2x",link:"Carousel-module_link__1gv3s",mobileCarouselIntroductionWrapper:"Carousel-module_mobileCarouselIntroductionWrapper__1Y0_X",fadeIn:"Carousel-module_fadeIn__1Ycrc",fadeOut:"Carousel-module_fadeOut__yoNMw",slideInLeft:"Carousel-module_slideInLeft__CxCu4",slideOutLeft:"Carousel-module_slideOutLeft__22k5-",slideOutUp:"Carousel-module_slideOutUp__2RwFJ",slideInDown:"Carousel-module_slideInDown__3BRrH",slideOutDown:"Carousel-module_slideOutDown__1DKAv",slideInUp:"Carousel-module_slideInUp__1kQ90"},Carousel=function(e){var t=e.className,n=e.hasEdges,i=e.introduction,a=e.slides;if(useWindowHasResized(),void 0===_typeof(a)||0===a.length)return null;var l=ascertainIsMobileOrTablet(),d=(0,_classnames["default"])(styles$b.base,t,_defineProperty({},styles$b.edges,n)),s=getCarouselSettings({className:d,Pagination:Pagination,NextButton:NextButton,PreviousButton:PreviousButton});return _react["default"].createElement(_react["default"].Fragment,null,i&&l&&_react["default"].createElement("aside",{className:styles$b.mobileCarouselIntroductionWrapper},_react["default"].createElement(CarouselIntroduction,{description:i.description,heading:i.heading})),_react["default"].createElement(_reactSlick["default"],s,i&&!l&&_react["default"].createElement(CarouselIntroduction,{description:i.description,heading:i.heading}),a.map(function(e,t){var n=e.url,i=_objectWithoutProperties(e,["url"]);return _react["default"].createElement("div",{key:t},n?_react["default"].createElement(Hyperlink,{className:(0,_classnames["default"])(styles$b.item,styles$b.link),title:"Link to ".concat(i.heading),url:n},_react["default"].createElement(Slide,i)):_react["default"].createElement("div",{className:styles$b.item,key:t},_react["default"].createElement(Slide,i)))})))};Carousel.propTypes={className:_propTypes["default"].string,hasEdges:_propTypes["default"].bool,introduction:_propTypes["default"].shape({cta:_propTypes["default"].object,description:_propTypes["default"].string.isRequired,heading:_propTypes["default"].string.isRequired}),slides:_propTypes["default"].arrayOf(_propTypes["default"].shape({description:_propTypes["default"].string,heading:_propTypes["default"].string,image:_propTypes["default"].object.isRequired,url:_propTypes["default"].string})).isRequired},Carousel.defaultProps={className:void 0,hasEdges:!1,introduction:void 0,slides:void 0};var isObjectPopulatedArray=function(e){return!!(Array.isArray(e)&&_typeof(e)!==void 0&&0!==e.length)},objects={isObjectPopulatedArray:isObjectPopulatedArray},styles$c={base:"DefinitionList-module_base__2OnV9",term:"DefinitionList-module_term__38vy8",description:"DefinitionList-module_description__1hVLl",fadeIn:"DefinitionList-module_fadeIn__1pUAU",fadeOut:"DefinitionList-module_fadeOut__2001Y",slideInLeft:"DefinitionList-module_slideInLeft__1f9X6",slideOutLeft:"DefinitionList-module_slideOutLeft__3trxY",slideOutUp:"DefinitionList-module_slideOutUp__1gYOd",slideInDown:"DefinitionList-module_slideInDown__3jucI",slideOutDown:"DefinitionList-module_slideOutDown__1_-hD",slideInUp:"DefinitionList-module_slideInUp__2GTA4"},useHasMounted=function(){var e=_react["default"].useState(!1),t=_slicedToArray(e,2),n=t[0],i=t[1];return _react["default"].useEffect(function(){return i(!0),function(){i(!1)}},[n]),n},transitions={fadeEnter:"transitions-module_fadeEnter__39Yw4",fadeEnterActive:"transitions-module_fadeEnterActive__Jhp1k",fadeExit:"transitions-module_fadeExit__3yr99",fadeExitActive:"transitions-module_fadeExitActive__2at34",shiftInDownEnter:"transitions-module_shiftInDownEnter__1KxQa",shiftInDownActive:"transitions-module_shiftInDownActive__3uEf6",shiftInDownExit:"transitions-module_shiftInDownExit__QzfmH",shiftInDownExitActive:"transitions-module_shiftInDownExitActive__1oIXc",shiftInLeftEnter:"transitions-module_shiftInLeftEnter__JZlOS",shiftInLeftActive:"transitions-module_shiftInLeftActive__3_A_U",shiftInLeftExit:"transitions-module_shiftInLeftExit__3-XBX",shiftInLeftExitActive:"transitions-module_shiftInLeftExitActive__3HhM-",slideDownEnter:"transitions-module_slideDownEnter__1ozxS",slideDownEnterActive:"transitions-module_slideDownEnterActive__19lkp",slideDownExit:"transitions-module_slideDownExit__1zFf8",slideDownExitActive:"transitions-module_slideDownExitActive__LriBR",slideRightEnter:"transitions-module_slideRightEnter__3ktdD",slideRightEnterActive:"transitions-module_slideRightEnterActive__LMADo",slideRightExit:"transitions-module_slideRightExit__3J_wV",slideRightExitActive:"transitions-module_slideRightExitActive__2PwBm",slowFadeEnter:"transitions-module_slowFadeEnter__1WmWT",slowFadeActive:"transitions-module_slowFadeActive__2opL8",slowFadeExit:"transitions-module_slowFadeExit__pp458",slowFadeExitActive:"transitions-module_slowFadeExitActive__1HYrk",zoomEnter:"transitions-module_zoomEnter__14hXw",zoomEnterActive:"transitions-module_zoomEnterActive__1Ix7t",zoomExit:"transitions-module_zoomExit__2YNjS",zoomExitActive:"transitions-module_zoomExitActive__2j1mx"},fade={classNames:{enter:transitions.fadeEnter,enterActive:transitions.fadeEnterActive,exit:transitions.fadeExit,exitActive:transitions.fadeExitActive},timeout:500},slowFade={classNames:{enter:transitions.slowFadeEnter,enterActive:transitions.slowFadeActive,exit:transitions.slowFadeExit,exitActive:transitions.slowFadeExitActive},timeout:1500},shiftInLeft={classNames:{enter:transitions.shiftInLeftEnter,enterActive:transitions.shiftInLeftActive,exit:transitions.shiftInLeftExit,exitActive:transitions.shiftInLeftExitActive},timeout:1500},shiftInDown={classNames:{enter:transitions.shiftInDownEnter,enterActive:transitions.shiftInDownActive,exit:transitions.shiftInDownExit,exitActive:transitions.shiftInDownExitActive},timeout:1500},slideDown={classNames:{enter:transitions.slideDownEnter,enterActive:transitions.slideDownEnterActive,exit:transitions.slideDownExit,exitActive:transitions.slideDownExitActive},timeout:500},slideRight={classNames:{enter:transitions.slideRightEnter,enterActive:transitions.slideRightEnterActive,exit:transitions.slideRightExit,exitActive:transitions.slideRightExitActive},timeout:500},zoom={classNames:{enter:transitions.zoomEnter,enterActive:transitions.zoomEnterActive,exit:transitions.zoomExit,exitActive:transitions.zoomExitActive},timeout:500},data={fade:fade,shiftInDown:shiftInDown,shiftInLeft:shiftInLeft,slideDown:slideDown,slideRight:slideRight,slowFade:slowFade,zoom:zoom},Transition=function(e){var t=e.children,n=e.hasCSSTransitionMountOnEnter,i=e.hasCSSTransitionUnmountOnExit,a=e.isActiveOnMount,l=e.isActive,d=e.type,s=useHasMounted();return console.log({hasCSSTransitionMountOnEnter:n,isActiveOnMount:a,hasMounted:s,isActive:l,classNames:data[d].classNames}),_react["default"].createElement(_reactTransitionGroup.CSSTransition,{classNames:data[d].classNames,in:a?s:l,mountOnEnter:n,timeout:data[d].timeout,unmountOnExit:i},t)};Transition.propTypes={children:_propTypes["default"].node.isRequired,hasCSSTransitionMountOnEnter:_propTypes["default"].bool,hasCSSTransitionUnmountOnExit:_propTypes["default"].bool,isActive:_propTypes["default"].bool,isActiveOnMount:_propTypes["default"].bool,type:_propTypes["default"].oneOf(["fade","shiftInDown","shiftInLeft","slideDown","slideRight","slowFade","zoom"]).isRequired},Transition.defaultProps={children:void 0,hasCSSTransitionMountOnEnter:!1,hasCSSTransitionUnmountOnExit:!1,isActive:!0,isActiveOnMount:!1,type:void 0};var DefinitionList=function(e){var t=e.className,n=e.items,i=(0,_classnames["default"])(styles$c.base,t);return isObjectPopulatedArray(n)?_react["default"].createElement(Transition,{isActiveOnMount:!0,type:"shiftInDown"},_react["default"].createElement("dl",{className:i},"...",n.filter(function(e){var t=e.description,n=e.term;return t&&n}).map(function(e,t){var n=e.description,i=e.term;return _react["default"].createElement(_react["default"].Fragment,{key:t},_react["default"].createElement("dt",{className:styles$c.term},i),_react["default"].createElement("dd",{className:styles$c.description},n))}))):null};DefinitionList.propTypes={className:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].shape({term:_propTypes["default"].string,description:_propTypes["default"].string}))},DefinitionList.defaultProps={className:void 0,items:void 0};var styles$d={base:"Figure-module_base__2Vmj2",caption:"Figure-module_caption__187du",captionWrapper:"Figure-module_captionWrapper__1WrIr",fullBleedImage:"Figure-module_fullBleedImage__1rvxZ",fadeIn:"Figure-module_fadeIn__37Dzk",fadeOut:"Figure-module_fadeOut__uNgqR",slideInLeft:"Figure-module_slideInLeft__c7Dn9",slideOutLeft:"Figure-module_slideOutLeft__1L72e",slideOutUp:"Figure-module_slideOutUp__2Mn9L",slideInDown:"Figure-module_slideInDown__1nzVd",slideOutDown:"Figure-module_slideOutDown__M4jc3",slideInUp:"Figure-module_slideInUp__2b6_j"},Figure=function(e){var t=e.caption,n=e.children,i=e.className,a=e.id,l=(0,_classnames["default"])(styles$d.base,i);return _react["default"].createElement("figure",{className:l,id:a},n,t&&_react["default"].createElement("figcaption",{className:styles$d.captionWrapper},_react["default"].createElement("div",{className:styles$d.caption},(0,_htmlReactParser["default"])((0,_marked["default"])(t)))))};Figure.propTypes={caption:_propTypes["default"].string,children:_propTypes["default"].oneOfType([_propTypes["default"].node,_propTypes["default"].element]),className:_propTypes["default"].string,id:_propTypes["default"].string.isRequired};var styles$e={base:"ImageWithHeaderAndContent-module_base__2-Y4B",title:"ImageWithHeaderAndContent-module_title__1WOtt",reverse:"ImageWithHeaderAndContent-module_reverse__3g8sq",wrapper:"ImageWithHeaderAndContent-module_wrapper__hwV4A",container:"ImageWithHeaderAndContent-module_container__38jRk",figure:"ImageWithHeaderAndContent-module_figure__1SmE4",isFullWidthImage:"ImageWithHeaderAndContent-module_isFullWidthImage__1SW5s",hasFullWidthImage:"ImageWithHeaderAndContent-module_hasFullWidthImage__X0Buc",description:"ImageWithHeaderAndContent-module_description__2w0J5","theme-1":"ImageWithHeaderAndContent-module_theme-1__2-Tbt","theme-2":"ImageWithHeaderAndContent-module_theme-2__3dySr","theme-3":"ImageWithHeaderAndContent-module_theme-3__37ZI7","theme-4":"ImageWithHeaderAndContent-module_theme-4__2NqXw","theme-5":"ImageWithHeaderAndContent-module_theme-5__2TJWu",fadeIn:"ImageWithHeaderAndContent-module_fadeIn__3HpPt",fadeOut:"ImageWithHeaderAndContent-module_fadeOut__2gX-b",slideInLeft:"ImageWithHeaderAndContent-module_slideInLeft__2B6au",slideOutLeft:"ImageWithHeaderAndContent-module_slideOutLeft__3IQAa",slideOutUp:"ImageWithHeaderAndContent-module_slideOutUp__3Me0A",slideInDown:"ImageWithHeaderAndContent-module_slideInDown__zmAl0",slideOutDown:"ImageWithHeaderAndContent-module_slideOutDown__3Qxh1",slideInUp:"ImageWithHeaderAndContent-module_slideInUp__1so7E"},ImageWithHeaderAndContent=function(e){var t=e.className,n=e.content,i=e.copy,a=e.hasFullWidthImage,l=e.image,d=e.isReverse,s=e.theme,o=(0,_classnames["default"])(styles$e.base,_defineProperty({},styles$e.reverse,d),styles$e["theme-".concat(s)],t);return _react["default"].createElement("section",{className:o},_react["default"].createElement(Image,{altText:l.altText,className:(0,_classnames["default"])(styles$e.figure,_defineProperty({},styles$e.isFullWidthImage,a)),large:l.large,medium:l.medium,small:l.small}),_react["default"].createElement("div",{className:(0,_classnames["default"])(styles$e.container,_defineProperty({},styles$e.hasFullWidthImage,a))},_react["default"].createElement("div",{className:styles$e.wrapper},_react["default"].createElement("header",null,_react["default"].createElement(Heading,{className:styles$e.title,level:2,noMargin:!0,size:"xSmall"},i.title),_react["default"].createElement(Heading,{hasSerifFont:!0,level:3,size:"xLarge"},i.subTitle),i.description&&_react["default"].createElement(Paragraph,{className:styles$e.description},i.description)),n)))};ImageWithHeaderAndContent.propTypes={className:_propTypes["default"].string,content:_propTypes["default"].any,copy:_propTypes["default"].exact({description:_propTypes["default"].string,subTitle:_propTypes["default"].string.isRequired,title:_propTypes["default"].string.isRequired}).isRequired,hasFullWidthImage:_propTypes["default"].bool,image:_propTypes["default"].object.isRequired,isReverse:_propTypes["default"].bool,theme:_propTypes["default"].string},ImageWithHeaderAndContent.defaultProps={className:void 0,content:void 0,copy:void 0,hasFullWidthImage:!1,image:void 0,isReverse:!1,theme:"1"};var styles$f={base:"List-module_base__wbAa2",item:"List-module_item__Ru4zd",fadeIn:"List-module_fadeIn__bH2Fb",fadeOut:"List-module_fadeOut__3STNq",slideInLeft:"List-module_slideInLeft__3-dq4",slideOutLeft:"List-module_slideOutLeft__3G3it",slideOutUp:"List-module_slideOutUp__27aLd",slideInDown:"List-module_slideInDown__3H2JH",slideOutDown:"List-module_slideOutDown__1m3JK",slideInUp:"List-module_slideInUp__1ir9t"},List=function(e){var t=e.className,n=e.items,i=e.listItemClassName,a=(0,_classnames["default"])(styles$f.base,t);return _react["default"].createElement("ul",{className:a},n.map(function(e){var t=e.content,n=e.id,a=void 0===n?v4_1():n;return _react["default"].createElement("li",{className:(0,_classnames["default"])(styles$f.item,i),key:a},t)}))};List.propTypes={className:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].exact({content:_propTypes["default"].oneOfType([_propTypes["default"].node,_propTypes["default"].element]).isRequired,id:_propTypes["default"].string})).isRequired,listItemClassName:_propTypes["default"].string},List.defaultProps={className:void 0,items:void 0,listItemClassName:void 0};var styles$g={base:"KitList-module_base__ojyC-",item:"KitList-module_item__2z-sW",fadeIn:"KitList-module_fadeIn__Bclyn",fadeOut:"KitList-module_fadeOut__36TKg",slideInLeft:"KitList-module_slideInLeft__1DOtQ",slideOutLeft:"KitList-module_slideOutLeft__3Bym_",slideOutUp:"KitList-module_slideOutUp__9Mrnh",slideInDown:"KitList-module_slideInDown__2k99r",slideOutDown:"KitList-module_slideOutDown__eDXxL",slideInUp:"KitList-module_slideInUp__2m1Rs"},KitList=function(e){var t=e.items,n=e.className,i=(0,_classnames["default"])(styles$g.base,n);return _react["default"].createElement(List,{className:i,items:t.map(function(e){return{content:e}}),listItemClassName:styles$g.item})};KitList.propTypes={className:_propTypes["default"].string,items:_propTypes["default"].arrayOf(_propTypes["default"].string).isRequired},KitList.defaultProps={className:void 0,items:void 0};var components={Button:Button,Carousel:Carousel,DefinitionList:DefinitionList,Figure:Figure,Heading:Heading,Hyperlink:Hyperlink,Icon:Icon,Image:Image,ImageWithHeaderAndContent:ImageWithHeaderAndContent,KitList:KitList,List:List,Paragraph:Paragraph,Transition:Transition},useEscapeKeyListener=function(e){_react["default"].useEffect(function(){var t=function(t){return t.keyCode===KEYBOARD_CODES.ESCAPE&&e(t),t};return"undefined"!=typeof document&&document.addEventListener("keydown",t,!1),function(){"undefined"!=typeof document&&document.removeEventListener("keydown",t,!1)}},[e])},useOverflowHidden=function(e){var t=_react["default"].useState(!1),n=_slicedToArray(t,2),i=n[0],a=n[1],l=_react["default"].useCallback(function(){"undefined"!=typeof document&&"hidden"!==document.body.style.overflow&&(document.body.style.overflow="hidden",a(!0))},[]),d=_react["default"].useCallback(function(){"undefined"!=typeof document&&i&&(document.body.style.overflow="unset")},[i]);_react["default"].useEffect(function(){return e?l():d(),function(){d()}},[l,e,d])},hooks={useEscapeKeyListener:useEscapeKeyListener,useHasMounted:useHasMounted,useOverflowHidden:useOverflowHidden,useWindowHasResized:useWindowHasResized},paragraphsFromDivs=function(e){var t=e.replace("<div>&nbsp;</div>","").replace(/<div>/gi,"<p>").replace(/<\/div>/gi,"</p>");return-1===t.indexOf("<p>")?"<p>".concat(t,"</p>"):t},paragraphsFromDivs$1={paragraphsFromDivs:paragraphsFromDivs},getPropTypeOptionValues=function(e){return Object.values(e).map(function(e){return e})},propTypes={getPropTypeOptionValues:getPropTypeOptionValues},utils={objects:objects,paragraphsFromDivs:paragraphsFromDivs$1,propTypes:propTypes,viewports:viewports},index={components:components,constants:constants,hooks:hooks,utils:utils},_default=index;exports["default"]=_default;
//# sourceMappingURL=index.js.map
