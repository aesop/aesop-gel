const isInBrowser = () => typeof window !== 'undefined';

/**
 * Device detection. https://stackoverflow.com/questions/49328382/browser-detection-in-reactjs
 * @TODO consider replacing with https://www.npmjs.com/package/react-device-detect
 * if this helpers are widely required and useVideoScroller
 */

const isBrowser = isInBrowser();

/* Opera 8.0+ */
const isOpera =
  isBrowser && ((!!window.opr && !!opr.addons) || // eslint-disable-line no-undef
  !!window.opera ||
  navigator.userAgent.indexOf(' OPR/') >= 0);

/* Firefox 1.0+ */
const isFirefox = isBrowser && typeof InstallTrigger !== 'undefined';

/* Safari 3.0+ "[object HTMLElementConstructor]" */
const isSafari = isBrowser && (
  /constructor/i.test(window.HTMLElement) ||
  (function(p) {
    return p.toString() === '[object SafariRemoteNotification]';
  })(
    !window['safari'] ||
      (typeof safari !== 'undefined' && safari.pushNotification), // eslint-disable-line no-undef
  ));

/* Internet Explorer 6-11 */
const isIE = /* @cc_on!@*/ false || isBrowser && !!document.documentMode;

/* dge 20+ */
const isEdge = !isIE && isBrowser && !!window.StyleMedia;

/* Chrome 1+ */
const isChrome =
isBrowser && (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime));

/* Blink engine detection */
const isBlink = isBrowser && (isChrome || isOpera) && !!window.CSS;

export { isInBrowser };
export { isOpera };
export { isFirefox };
export { isSafari };
export { isIE };
export { isEdge };
export { isChrome };
export { isBlink };
