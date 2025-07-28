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
		define("default-contrast", [], factory);
	else if(typeof exports === 'object')
		exports["default-contrast"] = factory();
	else
		root["SurveyCreatorTheme"] = root["SurveyCreatorTheme"] || {}, root["SurveyCreatorTheme"]["DefaultContrast"] = factory();
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
/*!****************************************!*\
  !*** ./src/themes/default-contrast.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    "themeName": "default-contrast",
    "iconSet": "v2",
    "isLight": true,
    "cssVariables": {
        "--sjs-layer-1-background-500": "#FFFFFF",
        "--sjs-layer-1-background-400": "#EBEBEB",
        "--sjs-layer-1-foreground-100": "#000000",
        "--sjs-layer-1-foreground-50": "#00000099",
        "--sjs-layer-3-background-500": "#EBEBEB",
        "--sjs-layer-3-foreground-100": "#000000",
        "--sjs-layer-3-foreground-50": "#00000099",
        "--sjs-layer-2-background-500": "#F0F0F0",
        "--sjs-layer-2-background-400": "#DCDCDC",
        "--sjs-special-haze": "hsl(from var(--sjs-special-background) calc(h - var(--sjs-special-haze-deltaH)) calc(s - var(--sjs-special-haze-deltaS)) calc(l - var(--sjs-special-haze-deltaL)) / calc(1 - var(--sjs-special-haze-deltaAlpha)))",
        "--sjs-border-25": "#C8C8C8",
        "--sjs-border-10": "#C8C8C8",
        "--sjs-primary-background-500": "#3A179E",
        "--sjs-primary-background-10": "hsl(from var(--sjs-primary-background-500) calc(h - var(--sjs-primary-background-10-deltaH)) calc(s - var(--sjs-primary-background-10-deltaS)) calc(l - var(--sjs-primary-background-10-deltaL)) / calc(1 - var(--sjs-primary-background-10-deltaAlpha)))",
        "--sjs-primary-background-400": "hsl(from var(--sjs-primary-background-500) calc(h - var(--sjs-primary-background-400-deltaH)) calc(s - var(--sjs-primary-background-400-deltaS)) calc(l - var(--sjs-primary-background-400-deltaL)) / calc(1 - var(--sjs-primary-background-400-deltaAlpha)))",
        "--sjs-primary-foreground-100": "#FFFFFF",
        "--sjs-primary-foreground-25": "#FFFFFF40",
        "--sjs-secondary-background-500": "#3A179E",
        "--sjs-secondary-background-25": "hsl(from var(--sjs-secondary-background-500) calc(h - var(--sjs-secondary-background-25-deltaH)) calc(s - var(--sjs-secondary-background-25-deltaS)) calc(l - var(--sjs-secondary-background-25-deltaL)) / calc(1 - var(--sjs-secondary-background-25-deltaAlpha)))",
        "--sjs-secondary-background-10": "hsl(from var(--sjs-secondary-background-500) calc(h - var(--sjs-secondary-background-10-deltaH)) calc(s - var(--sjs-secondary-background-10-deltaS)) calc(l - var(--sjs-secondary-background-10-deltaL)) / calc(1 - var(--sjs-secondary-background-10-deltaAlpha)))",
        "--sjs-secondary-foreground-100": "#FFFFFF",
        "--sjs-secondary-forecolor-25": "#FFFFFF40",
        "--sjs-semantic-red-background-500": "#E50A66",
        "--sjs-semantic-red-background-10": "#E50A661A",
        "--sjs-semantic-red-foreground-100": "#FFFFFF",
        "--sjs-semantic-green-background-500": "#19AAB3",
        "--sjs-semantic-green-background-10": "#19AAB31A",
        "--sjs-semantic-green-foreground-100": "#FFFFFF",
        "--sjs-semantic-blue-background-500": "#4F43D9",
        "--sjs-semantic-blue-background-10": "#4F43D91A",
        "--sjs-semantic-blue-foreground-100": "#FFFFFF",
        "--sjs-semantic-yellow-background-500": "#FF710B",
        "--sjs-semantic-yellow-background-10": "#FF710B1A",
        "--sjs-semantic-yellow-foreground-100": "#FFFFFF",
        "--sjs-semantic-white-background-500": "#FFFFFF",
        "--sjs-code-gray-700": "#A4A4A4",
        "--sjs-code-blue-500": "#1E5AB3",
        "--sjs-code-gray-300": "#1C1C1C",
        "--sjs-code-green-500": "#127D60",
        "--sjs-code-red-500": "#D30739",
        "--sjs-code-purple-500": "#AB228D",
        "--sjs-code-yellow-500": "#CC6001",
        "--sjs-code-gray-500": "#686868",
        "--sjs-special-background": "#F4F2FB",
        "--sjs-layer-1-foreground-75": "#000000",
        "--sjs-layer-3-background-400": "#D7D7D7",
        "--sjs-special-glow": "hsl(from var(--sjs-special-background) calc(h - var(--sjs-special-glow-deltaH)) calc(s - var(--sjs-special-glow-deltaS)) calc(l - var(--sjs-special-glow-deltaL)) / calc(1 - var(--sjs-special-glow-deltaAlpha)))",
        "--sjs-special-shadow": "#0000004D",
        "--sjs-layer-3-foreground-75": "#000000",
        "--sjs-layer-2-foreground-100": "#000000",
        "--sjs-layer-2-foreground-75": "#000000",
        "--sjs-layer-2-foreground-50": "#00000099",
        "--sjs-border-25-overlay": "#00000040",
        "--sjs-secondary-background-400": "hsl(from var(--sjs-secondary-background-500) calc(h - var(--sjs-secondary-background-400-deltaH)) calc(s - var(--sjs-secondary-background-400-deltaS)) calc(l - var(--sjs-secondary-background-400-deltaL)) / calc(1 - var(--sjs-secondary-background-400-deltaAlpha)))",
        "--sjs-primary-background-400-deltaAlpha": 0,
        "--sjs-primary-background-400-deltaH": 0.28,
        "--sjs-primary-background-400-deltaS": -10.89,
        "--sjs-primary-background-400-deltaL": 11.18,
        "--sjs-primary-background-10-deltaAlpha": 0.9,
        "--sjs-primary-background-10-deltaH": 0,
        "--sjs-primary-background-10-deltaS": 0,
        "--sjs-primary-background-10-deltaL": 0,
        "--sjs-secondary-background-400-deltaAlpha": 0,
        "--sjs-secondary-background-400-deltaH": 0.28,
        "--sjs-secondary-background-400-deltaS": -10.89,
        "--sjs-secondary-background-400-deltaL": 11.18,
        "--sjs-secondary-background-25-deltaAlpha": 0.75,
        "--sjs-secondary-background-25-deltaH": 0,
        "--sjs-secondary-background-25-deltaS": 0,
        "--sjs-secondary-background-25-deltaL": 0,
        "--sjs-secondary-background-10-deltaAlpha": 0.9,
        "--sjs-secondary-background-10-deltaH": 0,
        "--sjs-secondary-background-10-deltaS": 0,
        "--sjs-secondary-background-10-deltaL": 0,
        "--sjs-special-haze-deltaAlpha": 0.65,
        "--sjs-special-haze-deltaH": -2.82,
        "--sjs-special-haze-deltaS": -33.73,
        "--sjs-special-haze-deltaL": 8.43,
        "--sjs-special-glow-deltaAlpha": 0.9,
        "--sjs-special-glow-deltaH": -2.43,
        "--sjs-special-glow-deltaS": -30.25,
        "--sjs-special-glow-deltaL": 73.34
    }
});

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=default-contrast.js.map