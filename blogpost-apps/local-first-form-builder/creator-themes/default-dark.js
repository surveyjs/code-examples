/*!
 * SurveyJS Creator v2.1.0
 * (c) 2015-2025 Devsoft Baltic OÜ - http://surveyjs.io/
 * Github: https://github.com/surveyjs/survey-creator
 * License: https://surveyjs.io/Licenses#SurveyCreator
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("default-dark", [], factory);
	else if(typeof exports === 'object')
		exports["default-dark"] = factory();
	else
		root["SurveyCreatorTheme"] = root["SurveyCreatorTheme"] || {}, root["SurveyCreatorTheme"]["DefaultDark"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************************!*\
  !*** ./src/themes/default-dark.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    "themeName": "default-dark",
    "iconSet": "v2",
    "isLight": false,
    "cssVariables": {
        "--sjs-layer-1-background-500": "#181818",
        "--sjs-layer-1-background-400": "#282828",
        "--sjs-layer-1-foreground-100": "#FFFFFFCC",
        "--sjs-layer-1-foreground-50": "#FFFFFF66",
        "--sjs-layer-3-background-500": "#202020",
        "--sjs-layer-3-foreground-100": "#FFFFFFCC",
        "--sjs-layer-3-foreground-50": "#FFFFFF66",
        "--sjs-layer-2-background-500": "#101010",
        "--sjs-layer-2-background-400": "#202020",
        "--sjs-special-haze": "hsl(from var(--sjs-special-background) calc(h - var(--sjs-special-haze-deltaH)) calc(s - var(--sjs-special-haze-deltaS)) calc(l - var(--sjs-special-haze-deltaL)) / calc(1 - var(--sjs-special-haze-deltaAlpha)))",
        "--sjs-border-25": "#303030",
        "--sjs-border-10": "#303030",
        "--sjs-primary-background-500": "#19B394",
        "--sjs-primary-background-10": "hsl(from var(--sjs-primary-background-500) calc(h - var(--sjs-primary-background-10-deltaH)) calc(s - var(--sjs-primary-background-10-deltaS)) calc(l - var(--sjs-primary-background-10-deltaL)) / calc(1 - var(--sjs-primary-background-10-deltaAlpha)))",
        "--sjs-primary-background-400": "hsl(from var(--sjs-primary-background-500) calc(h - var(--sjs-primary-background-400-deltaH)) calc(s - var(--sjs-primary-background-400-deltaS)) calc(l - var(--sjs-primary-background-400-deltaL)) / calc(1 - var(--sjs-primary-background-400-deltaAlpha)))",
        "--sjs-primary-foreground-100": "#0C0C0C",
        "--sjs-primary-foreground-25": "#0C0C0C40",
        "--sjs-secondary-background-500": "#19B394",
        "--sjs-secondary-background-25": "hsl(from var(--sjs-secondary-background-500) calc(h - var(--sjs-secondary-background-25-deltaH)) calc(s - var(--sjs-secondary-background-25-deltaS)) calc(l - var(--sjs-secondary-background-25-deltaL)) / calc(1 - var(--sjs-secondary-background-25-deltaAlpha)))",
        "--sjs-secondary-background-10": "hsl(from var(--sjs-secondary-background-500) calc(h - var(--sjs-secondary-background-10-deltaH)) calc(s - var(--sjs-secondary-background-10-deltaS)) calc(l - var(--sjs-secondary-background-10-deltaL)) / calc(1 - var(--sjs-secondary-background-10-deltaAlpha)))",
        "--sjs-secondary-foreground-100": "#0C0C0C",
        "--sjs-secondary-forecolor-25": "#0C0C0C40",
        "--sjs-semantic-red-background-500": "#FF6D9A",
        "--sjs-semantic-red-background-10": "#FF6D9A1A",
        "--sjs-semantic-red-foreground-100": "#0C0C0C",
        "--sjs-semantic-green-background-500": "#15CDAB",
        "--sjs-semantic-green-background-10": "#15CDAB1A",
        "--sjs-semantic-green-foreground-100": "#0C0C0C",
        "--sjs-semantic-blue-background-500": "#66B4FC",
        "--sjs-semantic-blue-background-10": "#66B4FC1A",
        "--sjs-semantic-blue-foreground-100": "#0C0C0C",
        "--sjs-semantic-yellow-background-500": "#EDA925",
        "--sjs-semantic-yellow-background-10": "#EDA9251A",
        "--sjs-semantic-yellow-foreground-100": "#0C0C0C",
        "--sjs-semantic-white-background-500": "#FFFFFF",
        "--sjs-code-gray-700": "#5E5E5E",
        "--sjs-code-blue-500": "#53B3F0",
        "--sjs-code-gray-300": "#D1D1D1",
        "--sjs-code-green-500": "#37C7AA",
        "--sjs-code-red-500": "#FD6E89",
        "--sjs-code-purple-500": "#F888DF",
        "--sjs-code-yellow-500": "#FCC669",
        "--sjs-code-gray-500": "#909090",
        "--sjs-special-background": "#121212",
        "--sjs-layer-1-foreground-75": "#FFFFFFB3",
        "--sjs-layer-3-background-400": "#303030",
        "--sjs-special-glow": "hsl(from var(--sjs-special-background) calc(h - var(--sjs-special-glow-deltaH)) calc(s - var(--sjs-special-glow-deltaS)) calc(l - var(--sjs-special-glow-deltaL)) / calc(1 - var(--sjs-special-glow-deltaAlpha)))",
        "--sjs-special-shadow": "#FFFFFF40",
        "--sjs-layer-3-foreground-75": "#FFFFFFB3",
        "--sjs-layer-2-foreground-100": "#FFFFFFCC",
        "--sjs-layer-2-foreground-75": "#FFFFFFB3",
        "--sjs-layer-2-foreground-50": "#FFFFFF66",
        "--sjs-border-25-overlay": "#FFFFFF26",
        "--sjs-secondary-background-400": "hsl(from var(--sjs-secondary-background-500) calc(h - var(--sjs-secondary-background-400-deltaH)) calc(s - var(--sjs-secondary-background-400-deltaS)) calc(l - var(--sjs-secondary-background-400-deltaL)) / calc(1 - var(--sjs-secondary-background-400-deltaAlpha)))",
        "--sjs-primary-background-400-deltaAlpha": 0,
        "--sjs-primary-background-400-deltaH": -1.66,
        "--sjs-primary-background-400-deltaS": -2.77,
        "--sjs-primary-background-400-deltaL": 3.92,
        "--sjs-primary-background-10-deltaAlpha": 0.9,
        "--sjs-primary-background-10-deltaH": 0,
        "--sjs-primary-background-10-deltaS": 0,
        "--sjs-primary-background-10-deltaL": 0,
        "--sjs-secondary-background-400-deltaAlpha": 0,
        "--sjs-secondary-background-400-deltaH": -1.66,
        "--sjs-secondary-background-400-deltaS": -2.77,
        "--sjs-secondary-background-400-deltaL": 3.92,
        "--sjs-secondary-background-25-deltaAlpha": 0.75,
        "--sjs-secondary-background-25-deltaH": 0,
        "--sjs-secondary-background-25-deltaS": 0,
        "--sjs-secondary-background-25-deltaL": 0,
        "--sjs-secondary-background-10-deltaAlpha": 0.9,
        "--sjs-secondary-background-10-deltaH": 0,
        "--sjs-secondary-background-10-deltaS": 0,
        "--sjs-secondary-background-10-deltaL": 0,
        "--sjs-special-haze-deltaAlpha": 0.25,
        "--sjs-special-haze-deltaH": 0,
        "--sjs-special-haze-deltaS": 0,
        "--sjs-special-haze-deltaL": 7.06,
        "--sjs-special-glow-deltaAlpha": 0.75,
        "--sjs-special-glow-deltaH": 0,
        "--sjs-special-glow-deltaS": 0,
        "--sjs-special-glow-deltaL": 7.06
    }
});

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=default-dark.js.map