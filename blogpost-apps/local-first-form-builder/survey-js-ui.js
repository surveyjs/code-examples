/*!
 * surveyjs - Survey JavaScript library v2.2.6
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"), (function webpackLoadOptionalExternalModule() { try { return require("jquery"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define("survey-js-ui", ["survey-core", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["survey-js-ui"] = factory(require("survey-core"), (function webpackLoadOptionalExternalModule() { try { return require("jquery"); } catch(e) {} }()));
	else
		root["SurveyUI"] = factory(root["Survey"], root["jQuery"]);
})(this, (__WEBPACK_EXTERNAL_MODULE_survey_core__, __WEBPACK_EXTERNAL_MODULE_jquery__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../survey-core/build/icons/iconsV1.js":
/*!*********************************************!*\
  !*** ../survey-core/build/icons/iconsV1.js ***!
  \*********************************************/
/***/ (function(module) {

/*!
 * surveyjs - Survey JavaScript library v2.1.0
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images-v1 sync recursive \\.svg$":
/*!************************************!*\
  !*** ./src/images-v1/ sync \.svg$ ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_869__) => {

var map = {
	"./ModernBooleanCheckChecked.svg": "./src/images-v1/ModernBooleanCheckChecked.svg",
	"./ModernBooleanCheckInd.svg": "./src/images-v1/ModernBooleanCheckInd.svg",
	"./ModernBooleanCheckUnchecked.svg": "./src/images-v1/ModernBooleanCheckUnchecked.svg",
	"./ModernCheck.svg": "./src/images-v1/ModernCheck.svg",
	"./ModernRadio.svg": "./src/images-v1/ModernRadio.svg",
	"./ProgressButton.svg": "./src/images-v1/ProgressButton.svg",
	"./RemoveFile.svg": "./src/images-v1/RemoveFile.svg",
	"./TimerCircle.svg": "./src/images-v1/TimerCircle.svg",
	"./add-24x24.svg": "./src/images-v1/add-24x24.svg",
	"./arrowleft-16x16.svg": "./src/images-v1/arrowleft-16x16.svg",
	"./arrowright-16x16.svg": "./src/images-v1/arrowright-16x16.svg",
	"./camera-24x24.svg": "./src/images-v1/camera-24x24.svg",
	"./camera-32x32.svg": "./src/images-v1/camera-32x32.svg",
	"./cancel-24x24.svg": "./src/images-v1/cancel-24x24.svg",
	"./check-16x16.svg": "./src/images-v1/check-16x16.svg",
	"./check-24x24.svg": "./src/images-v1/check-24x24.svg",
	"./chevrondown-24x24.svg": "./src/images-v1/chevrondown-24x24.svg",
	"./chevronright-16x16.svg": "./src/images-v1/chevronright-16x16.svg",
	"./clear-16x16.svg": "./src/images-v1/clear-16x16.svg",
	"./clear-24x24.svg": "./src/images-v1/clear-24x24.svg",
	"./close-16x16.svg": "./src/images-v1/close-16x16.svg",
	"./close-24x24.svg": "./src/images-v1/close-24x24.svg",
	"./collapse-16x16.svg": "./src/images-v1/collapse-16x16.svg",
	"./collapsedetails-16x16.svg": "./src/images-v1/collapsedetails-16x16.svg",
	"./delete-16x16.svg": "./src/images-v1/delete-16x16.svg",
	"./delete-24x24.svg": "./src/images-v1/delete-24x24.svg",
	"./drag-24x24.svg": "./src/images-v1/drag-24x24.svg",
	"./draghorizontal-24x16.svg": "./src/images-v1/draghorizontal-24x16.svg",
	"./editsmall-16x16.svg": "./src/images-v1/editsmall-16x16.svg",
	"./expand-16x16.svg": "./src/images-v1/expand-16x16.svg",
	"./expanddetails-16x16.svg": "./src/images-v1/expanddetails-16x16.svg",
	"./file-72x72.svg": "./src/images-v1/file-72x72.svg",
	"./flip-24x24.svg": "./src/images-v1/flip-24x24.svg",
	"./folder-24x24.svg": "./src/images-v1/folder-24x24.svg",
	"./fullsize-16x16.svg": "./src/images-v1/fullsize-16x16.svg",
	"./image-48x48.svg": "./src/images-v1/image-48x48.svg",
	"./loading-48x48.svg": "./src/images-v1/loading-48x48.svg",
	"./maximize-16x16.svg": "./src/images-v1/maximize-16x16.svg",
	"./minimize-16x16.svg": "./src/images-v1/minimize-16x16.svg",
	"./more-24x24.svg": "./src/images-v1/more-24x24.svg",
	"./navmenu-24x24.svg": "./src/images-v1/navmenu-24x24.svg",
	"./noimage-48x48.svg": "./src/images-v1/noimage-48x48.svg",
	"./ranking-arrows.svg": "./src/images-v1/ranking-arrows.svg",
	"./rankingundefined-16x16.svg": "./src/images-v1/rankingundefined-16x16.svg",
	"./rating-star-2.svg": "./src/images-v1/rating-star-2.svg",
	"./rating-star-small-2.svg": "./src/images-v1/rating-star-small-2.svg",
	"./rating-star-small.svg": "./src/images-v1/rating-star-small.svg",
	"./rating-star.svg": "./src/images-v1/rating-star.svg",
	"./reorder-24x24.svg": "./src/images-v1/reorder-24x24.svg",
	"./restoredown-16x16.svg": "./src/images-v1/restoredown-16x16.svg",
	"./search-24x24.svg": "./src/images-v1/search-24x24.svg",
	"./smiley-rate1-24x24.svg": "./src/images-v1/smiley-rate1-24x24.svg",
	"./smiley-rate10-24x24.svg": "./src/images-v1/smiley-rate10-24x24.svg",
	"./smiley-rate2-24x24.svg": "./src/images-v1/smiley-rate2-24x24.svg",
	"./smiley-rate3-24x24.svg": "./src/images-v1/smiley-rate3-24x24.svg",
	"./smiley-rate4-24x24.svg": "./src/images-v1/smiley-rate4-24x24.svg",
	"./smiley-rate5-24x24.svg": "./src/images-v1/smiley-rate5-24x24.svg",
	"./smiley-rate6-24x24.svg": "./src/images-v1/smiley-rate6-24x24.svg",
	"./smiley-rate7-24x24.svg": "./src/images-v1/smiley-rate7-24x24.svg",
	"./smiley-rate8-24x24.svg": "./src/images-v1/smiley-rate8-24x24.svg",
	"./smiley-rate9-24x24.svg": "./src/images-v1/smiley-rate9-24x24.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __nested_webpack_require_869__(id);
}
function webpackContextResolve(req) {
	if(!__nested_webpack_require_869__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images-v1 sync recursive \\.svg$";

/***/ }),

/***/ "./src/images-v1/ModernBooleanCheckChecked.svg":
/*!*****************************************************!*\
  !*** ./src/images-v1/ModernBooleanCheckChecked.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><polygon points=\"19,10 14,10 14,5 10,5 10,10 5,10 5,14 10,14 10,19 14,19 14,14 19,14 \"></polygon></svg>"

/***/ }),

/***/ "./src/images-v1/ModernBooleanCheckInd.svg":
/*!*************************************************!*\
  !*** ./src/images-v1/ModernBooleanCheckInd.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><path d=\"M22,0H2C0.9,0,0,0.9,0,2v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V2C24,0.9,23.1,0,22,0z M21,18L6,3h15V18z M3,6l15,15H3V6z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/ModernBooleanCheckUnchecked.svg":
/*!*******************************************************!*\
  !*** ./src/images-v1/ModernBooleanCheckUnchecked.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><rect x=\"5\" y=\"10\" width=\"14\" height=\"4\"></rect></svg>"

/***/ }),

/***/ "./src/images-v1/ModernCheck.svg":
/*!***************************************!*\
  !*** ./src/images-v1/ModernCheck.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\"><path d=\"M5,13l2-2l3,3l7-7l2,2l-9,9L5,13z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/ModernRadio.svg":
/*!***************************************!*\
  !*** ./src/images-v1/ModernRadio.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"-12 -12 24 24\"><circle r=\"6\" cx=\"0\" cy=\"0\"></circle></svg>"

/***/ }),

/***/ "./src/images-v1/ProgressButton.svg":
/*!******************************************!*\
  !*** ./src/images-v1/ProgressButton.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 10 10\"><polygon points=\"2,2 0,4 5,9 10,4 8,2 5,5 \"></polygon></svg>"

/***/ }),

/***/ "./src/images-v1/RemoveFile.svg":
/*!**************************************!*\
  !*** ./src/images-v1/RemoveFile.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\"><path d=\"M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z M11,10l-1,1L8,9l-2,2l-1-1l2-2L5,6l1-1l2,2l2-2l1,1L9,8 L11,10z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/TimerCircle.svg":
/*!***************************************!*\
  !*** ./src/images-v1/TimerCircle.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 160 160\"><circle cx=\"80\" cy=\"80\" r=\"70\" style=\"stroke: var(--sd-timer-stroke-background-color); stroke-width: var(--sd-timer-stroke-background-width)\" stroke-dasharray=\"none\" stroke-dashoffset=\"none\"></circle><circle cx=\"80\" cy=\"80\" r=\"70\"></circle></svg>"

/***/ }),

/***/ "./src/images-v1/add-24x24.svg":
/*!*************************************!*\
  !*** ./src/images-v1/add-24x24.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 11H17V13H13V17H11V13H7V11H11V7H13V11ZM23 12C23 18.1 18.1 23 12 23C5.9 23 1 18.1 1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12ZM21 12C21 7 17 3 12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/arrowleft-16x16.svg":
/*!*******************************************!*\
  !*** ./src/images-v1/arrowleft-16x16.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 8.99999H4.4L8.7 13.3L7.3 14.7L0.599998 7.99999L7.3 1.29999L8.7 2.69999L4.4 6.99999H15V8.99999Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/arrowright-16x16.svg":
/*!********************************************!*\
  !*** ./src/images-v1/arrowright-16x16.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 6.99999H11.6L7.3 2.69999L8.7 1.29999L15.4 7.99999L8.7 14.7L7.3 13.3L11.6 8.99999H1V6.99999Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/camera-24x24.svg":
/*!****************************************!*\
  !*** ./src/images-v1/camera-24x24.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.01 4H18.4C18.2 4 18.01 3.9 17.9 3.73L16.97 2.34C16.41 1.5 15.48 1 14.47 1H9.54C8.53 1 7.6 1.5 7.04 2.34L6.11 3.73C6 3.9 5.81 4 5.61 4H4C2.35 4 1 5.35 1 7V19C1 20.65 2.35 22 4 22H20C21.65 22 23 20.65 23 19V7C23 5.35 21.65 4 20 4H20.01ZM21.01 19C21.01 19.55 20.56 20 20.01 20H4.01C3.46 20 3.01 19.55 3.01 19V7C3.01 6.45 3.46 6 4.01 6H5.62C6.49 6 7.3 5.56 7.79 4.84L8.72 3.45C8.91 3.17 9.22 3 9.55 3H14.48C14.81 3 15.13 3.17 15.31 3.45L16.24 4.84C16.72 5.56 17.54 6 18.41 6H20.02C20.57 6 21.02 6.45 21.02 7V19H21.01ZM12.01 6C8.7 6 6.01 8.69 6.01 12C6.01 15.31 8.7 18 12.01 18C15.32 18 18.01 15.31 18.01 12C18.01 8.69 15.32 6 12.01 6ZM12.01 16C9.8 16 8.01 14.21 8.01 12C8.01 9.79 9.8 8 12.01 8C14.22 8 16.01 9.79 16.01 12C16.01 14.21 14.22 16 12.01 16ZM13.01 10C13.01 10.55 12.56 11 12.01 11C11.46 11 11.01 11.45 11.01 12C11.01 12.55 10.56 13 10.01 13C9.46 13 9.01 12.55 9.01 12C9.01 10.35 10.36 9 12.01 9C12.56 9 13.01 9.45 13.01 10Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/camera-32x32.svg":
/*!****************************************!*\
  !*** ./src/images-v1/camera-32x32.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M27 6H23.8C23.34 6 22.92 5.77 22.66 5.39L22.25 4.78C21.51 3.66 20.26 3 18.92 3H13.06C11.72 3 10.48 3.67 9.73 4.78L9.32 5.39C9.07 5.77 8.64 6 8.18 6H4.98C2.79 6 1 7.79 1 10V24C1 26.21 2.79 28 5 28H27C29.21 28 31 26.21 31 24V10C31 7.79 29.21 6 27 6ZM29 24C29 25.1 28.1 26 27 26H5C3.9 26 3 25.1 3 24V10C3 8.9 3.9 8 5 8H8.2C9.33 8 10.38 7.44 11 6.5L11.41 5.89C11.78 5.33 12.41 5 13.07 5H18.93C19.6 5 20.22 5.33 20.59 5.89L21 6.5C21.62 7.44 22.68 8 23.8 8H27C28.1 8 29 8.9 29 10V24ZM16 9C12.13 9 9 12.13 9 16C9 19.87 12.13 23 16 23C19.87 23 23 19.87 23 16C23 12.13 19.87 9 16 9ZM16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21ZM17 13C17 13.55 16.55 14 16 14C14.9 14 14 14.9 14 16C14 16.55 13.55 17 13 17C12.45 17 12 16.55 12 16C12 13.79 13.79 12 16 12C16.55 12 17 12.45 17 13Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/cancel-24x24.svg":
/*!****************************************!*\
  !*** ./src/images-v1/cancel-24x24.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.6 8.6L16.4 2.4C16 2 15.5 1.8 15 1.8C14.5 1.8 14 2 13.6 2.4L1.40005 14.6C0.600049 15.4 0.600049 16.6 1.40005 17.4L6.00005 22H12L22.6 11.4C23.3 10.6 23.3 9.3 22.6 8.6ZM11.1 20H6.80005L2.80005 16L6.20005 12.6L12.4 18.8L11.1 20ZM13.8 17.4L7.60005 11.2L15 3.8L21.2 10L13.8 17.4ZM16 20H23V22H14L16 20Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/check-16x16.svg":
/*!***************************************!*\
  !*** ./src/images-v1/check-16x16.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.003 14.413L0.292999 9.70303L1.703 8.29303L5.003 11.583L14.293 2.29303L15.703 3.70303L5.003 14.413Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/check-24x24.svg":
/*!***************************************!*\
  !*** ./src/images-v1/check-24x24.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9 20.1L1 12L3.1 9.9L9 15.9L20.9 4L23 6.1L9 20.1Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/chevrondown-24x24.svg":
/*!*********************************************!*\
  !*** ./src/images-v1/chevrondown-24x24.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 15L17 10H7L12 15Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/chevronright-16x16.svg":
/*!**********************************************!*\
  !*** ./src/images-v1/chevronright-16x16.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.64648 12.6465L6.34648 13.3465L11.7465 8.04648L6.34648 2.64648L5.64648 3.34648L10.2465 8.04648L5.64648 12.6465Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/clear-16x16.svg":
/*!***************************************!*\
  !*** ./src/images-v1/clear-16x16.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.35 3.34999L12.65 2.64999L8.05002 7.24999L3.35002 2.64999L2.65002 3.34999L7.25002 8.04999L2.65002 12.65L3.35002 13.35L8.05002 8.74999L12.65 13.35L13.35 12.65L8.75002 8.04999L13.35 3.34999Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/clear-24x24.svg":
/*!***************************************!*\
  !*** ./src/images-v1/clear-24x24.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22.6 8.6L16.4 2.4C16 2 15.5 1.8 15 1.8C14.5 1.8 14 2 13.6 2.4L1.40005 14.6C0.600049 15.4 0.600049 16.6 1.40005 17.4L6.00005 22H12L22.6 11.4C23.3 10.6 23.3 9.3 22.6 8.6ZM11.1 20H6.80005L2.80005 16L6.20005 12.6L12.4 18.8L11.1 20ZM13.8 17.4L7.60005 11.2L15 3.8L21.2 10L13.8 17.4ZM16 20H23V22H14L16 20Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/close-16x16.svg":
/*!***************************************!*\
  !*** ./src/images-v1/close-16x16.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.43 8.0025L13.7 3.7225C14.09 3.3325 14.09 2.6925 13.7 2.2925C13.31 1.9025 12.67 1.9025 12.27 2.2925L7.99 6.5725L3.72 2.3025C3.33 1.9025 2.69 1.9025 2.3 2.3025C1.9 2.6925 1.9 3.3325 2.3 3.7225L6.58 8.0025L2.3 12.2825C1.91 12.6725 1.91 13.3125 2.3 13.7125C2.69 14.1025 3.33 14.1025 3.73 13.7125L8.01 9.4325L12.29 13.7125C12.68 14.1025 13.32 14.1025 13.72 13.7125C14.11 13.3225 14.11 12.6825 13.72 12.2825L9.44 8.0025H9.43Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/close-24x24.svg":
/*!***************************************!*\
  !*** ./src/images-v1/close-24x24.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.4101 12L20.7001 4.71C21.0901 4.32 21.0901 3.69 20.7001 3.3C20.3101 2.91 19.6801 2.91 19.2901 3.3L12.0001 10.59L4.71006 3.29C4.32006 2.9 3.68006 2.9 3.29006 3.29C2.90006 3.68 2.90006 4.32 3.29006 4.71L10.5801 12L3.29006 19.29C2.90006 19.68 2.90006 20.31 3.29006 20.7C3.49006 20.9 3.74006 20.99 4.00006 20.99C4.26006 20.99 4.51006 20.89 4.71006 20.7L12.0001 13.41L19.2901 20.7C19.4901 20.9 19.7401 20.99 20.0001 20.99C20.2601 20.99 20.5101 20.89 20.7101 20.7C21.1001 20.31 21.1001 19.68 20.7101 19.29L13.4201 12H13.4101Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/collapse-16x16.svg":
/*!******************************************!*\
  !*** ./src/images-v1/collapse-16x16.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2 6L3 5L8 10L13 5L14 6L8 12L2 6Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/collapsedetails-16x16.svg":
/*!*************************************************!*\
  !*** ./src/images-v1/collapsedetails-16x16.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 7H3V9H13V7Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/delete-16x16.svg":
/*!****************************************!*\
  !*** ./src/images-v1/delete-16x16.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 2H14H11V1C11 0.4 10.6 0 10 0H7C6.4 0 6 0.4 6 1V2H3H2V4H3V14C3 15.1 3.9 16 5 16H12C13.1 16 14 15.1 14 14V4H15V2ZM7 1H10V2H7V1ZM12 14H5V4H12V14ZM7 13H6V5H7V13ZM9 13H8V5H9V13ZM11 13H10V5H11V13Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/delete-24x24.svg":
/*!****************************************!*\
  !*** ./src/images-v1/delete-24x24.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M22 4H20H16V2C16 0.9 15.1 0 14 0H10C8.9 0 8 0.9 8 2V4H4H2V6H4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V6H22V4ZM10 2H14V4H10V2ZM18 20H6V6H8H16H18V20ZM14 8H16V18H14V8ZM11 8H13V18H11V8ZM8 8H10V18H8V8Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/drag-24x24.svg":
/*!**************************************!*\
  !*** ./src/images-v1/drag-24x24.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 6C13 4.9 13.9 4 15 4C16.1 4 17 4.9 17 6C17 7.1 16.1 8 15 8C13.9 8 13 7.1 13 6ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16ZM9 16C7.9 16 7 16.9 7 18C7 19.1 7.9 20 9 20C10.1 20 11 19.1 11 18C11 16.9 10.1 16 9 16Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/draghorizontal-24x16.svg":
/*!************************************************!*\
  !*** ./src/images-v1/draghorizontal-24x16.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18 9C19.1 9 20 9.9 20 11C20 12.1 19.1 13 18 13C16.9 13 16 12.1 16 11C16 9.9 16.9 9 18 9ZM20 5C20 3.9 19.1 3 18 3C16.9 3 16 3.9 16 5C16 6.1 16.9 7 18 7C19.1 7 20 6.1 20 5ZM14 11C14 9.9 13.1 9 12 9C10.9 9 10 9.9 10 11C10 12.1 10.9 13 12 13C13.1 13 14 12.1 14 11ZM14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5ZM8 11C8 9.9 7.1 9 6 9C4.9 9 4 9.9 4 11C4 12.1 4.9 13 6 13C7.1 13 8 12.1 8 11ZM8 5C8 3.9 7.1 3 6 3C4.9 3 4 3.9 4 5C4 6.1 4.9 7 6 7C7.1 7 8 6.1 8 5Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/editsmall-16x16.svg":
/*!*******************************************!*\
  !*** ./src/images-v1/editsmall-16x16.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.59 4.5884L11.42 2.4184C11.03 2.0284 10.52 1.8284 10.01 1.8284C9.5 1.8284 8.99 2.0284 8.6 2.4184L3.76 7.2384C2.63 8.3684 2 9.8884 2 11.4784V12.9884C2 13.5384 2.45 13.9884 3 13.9884H4.51C6.1 13.9884 7.63 13.3584 8.75 12.2284L13.58 7.3984C14.36 6.6184 14.36 5.3484 13.58 4.5684L13.59 4.5884ZM7.35 10.8284C6.59 11.5884 5.59 11.9984 4.52 11.9984H4.01V11.4884C4.01 10.4184 4.43 9.4184 5.18 8.6584L7.72 6.1184L9.89 8.2884L7.35 10.8284ZM11.3 6.8784L9.13 4.7084L10.01 3.8284L12.18 5.9984L11.3 6.8784Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/expand-16x16.svg":
/*!****************************************!*\
  !*** ./src/images-v1/expand-16x16.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 14L5 13L10 8L5 3L6 2L12 8L6 14Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/expanddetails-16x16.svg":
/*!***********************************************!*\
  !*** ./src/images-v1/expanddetails-16x16.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 7H9V3H7V7H3V9H7V13H9V9H13V7Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/file-72x72.svg":
/*!**************************************!*\
  !*** ./src/images-v1/file-72x72.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M62.83 12.83L53.17 3.17C52.7982 2.79866 52.357 2.50421 51.8714 2.30346C51.3858 2.1027 50.8654 1.99959 50.34 2H14C12.4087 2 10.8826 2.63214 9.75735 3.75736C8.63214 4.88258 8 6.4087 8 8V64C8 65.5913 8.63214 67.1174 9.75735 68.2426C10.8826 69.3679 12.4087 70 14 70H58C59.5913 70 61.1174 69.3679 62.2426 68.2426C63.3679 67.1174 64 65.5913 64 64V15.66C64.0004 15.1346 63.8973 14.6142 63.6965 14.1286C63.4958 13.643 63.2013 13.2018 62.83 12.83ZM52 4.83L61.17 14H56C54.9391 14 53.9217 13.5786 53.1716 12.8284C52.4214 12.0783 52 11.0609 52 10V4.83ZM62 64C62 65.0609 61.5786 66.0783 60.8284 66.8284C60.0783 67.5786 59.0609 68 58 68H14C12.9391 68 11.9217 67.5786 11.1716 66.8284C10.4214 66.0783 10 65.0609 10 64V8C10 6.93914 10.4214 5.92172 11.1716 5.17157C11.9217 4.42143 12.9391 4 14 4H50V10C50 11.5913 50.6321 13.1174 51.7574 14.2426C52.8826 15.3679 54.4087 16 56 16H62V64ZM22 26H50V28H22V26ZM22 32H50V34H22V32ZM22 38H50V40H22V38ZM22 44H50V46H22V44Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/flip-24x24.svg":
/*!**************************************!*\
  !*** ./src/images-v1/flip-24x24.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23 12.0037C23 14.2445 21.7794 16.3052 19.5684 17.8257C19.3984 17.9458 19.1983 18.0058 19.0082 18.0058C18.688 18.0058 18.3779 17.8557 18.1778 17.5756C17.8677 17.1155 17.9777 16.4953 18.4379 16.1852C20.0887 15.0448 21.0091 13.5643 21.0091 12.0138C21.0091 8.70262 16.9673 6.01171 12.005 6.01171C11.4948 6.01171 10.9945 6.04172 10.5043 6.09173L11.7149 7.30215C12.105 7.69228 12.105 8.32249 11.7149 8.71263C11.5148 8.9127 11.2647 9.00273 11.0045 9.00273C10.7444 9.00273 10.4943 8.90269 10.2942 8.71263L6.58254 5.00136L10.2842 1.2901C10.6744 0.899964 11.3047 0.899964 11.6949 1.2901C12.085 1.68023 12.085 2.31045 11.6949 2.70058L10.3042 4.09105C10.8545 4.03103 11.4147 4.00102 11.985 4.00102C18.0578 4.00102 22.99 7.59225 22.99 12.0037H23ZM12.2851 15.2949C11.895 15.685 11.895 16.3152 12.2851 16.7054L13.4957 17.9158C13.0055 17.9758 12.4952 17.9958 11.995 17.9958C7.03274 17.9958 2.99091 15.3049 2.99091 11.9937C2.99091 10.4332 3.90132 8.95271 5.56207 7.82232C6.02228 7.51222 6.13233 6.89201 5.82219 6.43185C5.51205 5.97169 4.89177 5.86166 4.43156 6.17176C2.22055 7.69228 1 9.76299 1 11.9937C1 16.4052 5.93224 19.9965 12.005 19.9965C12.5753 19.9965 13.1355 19.9665 13.6858 19.9064L12.2951 21.2969C11.905 21.6871 11.905 22.3173 12.2951 22.7074C12.4952 22.9075 12.7453 22.9975 13.0055 22.9975C13.2656 22.9975 13.5157 22.8975 13.7158 22.7074L17.4275 18.9961L13.7158 15.2849C13.3256 14.8947 12.6953 14.8947 12.3051 15.2849L12.2851 15.2949Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/folder-24x24.svg":
/*!****************************************!*\
  !*** ./src/images-v1/folder-24x24.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.93 9H21V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H10L8 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5L2 21H21L23.89 11.63C23.9916 11.3244 24.0179 10.9988 23.9667 10.6809C23.9155 10.363 23.7882 10.0621 23.5958 9.80392C23.4034 9.54571 23.1514 9.33779 22.8614 9.19782C22.5714 9.05786 22.2519 8.99 21.93 9ZM4 5H7.17L8.59 6.41L9.17 7H19V9H6L4 15V5ZM22 11L19.54 19H4.77L7.44 11H22Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/fullsize-16x16.svg":
/*!******************************************!*\
  !*** ./src/images-v1/fullsize-16x16.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 13H4C2.9 13 2 12.1 2 11V5C2 3.9 2.9 3 4 3H12C13.1 3 14 3.9 14 5V11C14 12.1 13.1 13 12 13ZM4 5V11H12V5H4Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/image-48x48.svg":
/*!***************************************!*\
  !*** ./src/images-v1/image-48x48.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M36 8H12C9.79 8 8 9.79 8 12V36C8 38.21 9.79 40 12 40H36C38.21 40 40 38.21 40 36V12C40 9.79 38.21 8 36 8ZM38 36C38 37.1 37.1 38 36 38H12C10.9 38 10 37.1 10 36V12C10 10.9 10.9 10 12 10H36C37.1 10 38 10.9 38 12V36ZM14 17C14 15.34 15.34 14 17 14C18.66 14 20 15.34 20 17C20 18.66 18.66 20 17 20C15.34 20 14 18.66 14 17ZM27 24L36 36H12L19 27L23 29L27 24Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/loading-48x48.svg":
/*!*****************************************!*\
  !*** ./src/images-v1/loading-48x48.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_19679_369428)\"><path opacity=\"0.1\" d=\"M24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM24 12C17.38 12 12 17.38 12 24C12 30.62 17.38 36 24 36C30.62 36 36 30.62 36 24C36 17.38 30.62 12 24 12Z\" fill=\"black\" fill-opacity=\"0.91\"></path><path d=\"M10 26C8.9 26 8 25.1 8 24C8 15.18 15.18 8 24 8C25.1 8 26 8.9 26 10C26 11.1 25.1 12 24 12C17.38 12 12 17.38 12 24C12 25.1 11.1 26 10 26Z\"></path></g><defs><clipPath id=\"clip0_19679_369428\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(8 8)\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ "./src/images-v1/maximize-16x16.svg":
/*!******************************************!*\
  !*** ./src/images-v1/maximize-16x16.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.71 10.71L4.42 13H6.01C6.56 13 7.01 13.45 7.01 14C7.01 14.55 6.56 15 6.01 15H2C1.45 15 1 14.55 1 14V10C1 9.45 1.45 9 2 9C2.55 9 3 9.45 3 10V11.59L5.29 9.3C5.68 8.91 6.31 8.91 6.7 9.3C7.09 9.69 7.09 10.32 6.7 10.71H6.71ZM14 1H10C9.45 1 9 1.45 9 2C9 2.55 9.45 3 10 3H11.59L9.3 5.29C8.91 5.68 8.91 6.31 9.3 6.7C9.5 6.9 9.75 6.99 10.01 6.99C10.27 6.99 10.52 6.89 10.72 6.7L13.01 4.41V6C13.01 6.55 13.46 7 14.01 7C14.56 7 15.01 6.55 15.01 6V2C15.01 1.45 14.56 1 14.01 1H14Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/minimize-16x16.svg":
/*!******************************************!*\
  !*** ./src/images-v1/minimize-16x16.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 9H3C2.45 9 2 8.55 2 8C2 7.45 2.45 7 3 7H13C13.55 7 14 7.45 14 8C14 8.55 13.55 9 13 9Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/more-24x24.svg":
/*!**************************************!*\
  !*** ./src/images-v1/more-24x24.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 12C6 13.1 5.1 14 4 14C2.9 14 2 13.1 2 12C2 10.9 2.9 10 4 10C5.1 10 6 10.9 6 12ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM20 10C18.9 10 18 10.9 18 12C18 13.1 18.9 14 20 14C21.1 14 22 13.1 22 12C22 10.9 21.1 10 20 10Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/navmenu-24x24.svg":
/*!*****************************************!*\
  !*** ./src/images-v1/navmenu-24x24.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 7H2V5H16V7ZM2 11V13H22V11H2ZM2 19H10V17H2V19Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/noimage-48x48.svg":
/*!*****************************************!*\
  !*** ./src/images-v1/noimage-48x48.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 17.01C14 16.4167 14.1759 15.8366 14.5056 15.3433C14.8352 14.8499 15.3038 14.4654 15.8519 14.2384C16.4001 14.0113 17.0033 13.9519 17.5853 14.0676C18.1672 14.1834 18.7018 14.4691 19.1213 14.8887C19.5409 15.3082 19.8266 15.8428 19.9424 16.4247C20.0581 17.0067 19.9987 17.6099 19.7716 18.1581C19.5446 18.7062 19.1601 19.1748 18.6667 19.5044C18.1734 19.8341 17.5933 20.01 17 20.01C16.2044 20.01 15.4413 19.6939 14.8787 19.1313C14.3161 18.5687 14 17.8056 14 17.01ZM27.09 24.14L20 36.01H36L27.09 24.14ZM36.72 8.14L35.57 10.01H36C36.5304 10.01 37.0391 10.2207 37.4142 10.5958C37.7893 10.9709 38 11.4796 38 12.01V36.01C38 36.5404 37.7893 37.0491 37.4142 37.4242C37.0391 37.7993 36.5304 38.01 36 38.01H18.77L17.57 40.01H36C37.0609 40.01 38.0783 39.5886 38.8284 38.8384C39.5786 38.0883 40 37.0709 40 36.01V12.01C39.9966 11.0765 39.6668 10.1737 39.0678 9.45778C38.4688 8.74188 37.6382 8.25802 36.72 8.09V8.14ZM36.86 4.5L12.86 44.5L11.14 43.5L13.23 40.01H12C10.9391 40.01 9.92172 39.5886 9.17157 38.8384C8.42143 38.0883 8 37.0709 8 36.01V12.01C8 10.9491 8.42143 9.93172 9.17157 9.18157C9.92172 8.43143 10.9391 8.01 12 8.01H32.43L35.14 3.5L36.86 4.5ZM14.43 38.01L15.63 36.01H12L19 27.01L20.56 27.8L31.23 10.01H12C11.4696 10.01 10.9609 10.2207 10.5858 10.5958C10.2107 10.9709 10 11.4796 10 12.01V36.01C10 36.5404 10.2107 37.0491 10.5858 37.4242C10.9609 37.7993 11.4696 38.01 12 38.01H14.43Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/ranking-arrows.svg":
/*!******************************************!*\
  !*** ./src/images-v1/ranking-arrows.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 10 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 5L5 0L0 5H4V9H6V5H10Z\"></path><path d=\"M6 19V15H4V19H0L5 24L10 19H6Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/rankingundefined-16x16.svg":
/*!**************************************************!*\
  !*** ./src/images-v1/rankingundefined-16x16.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13 7H3V9H13V7Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/rating-star-2.svg":
/*!*****************************************!*\
  !*** ./src/images-v1/rating-star-2.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\" fill=\"none\" stroke-width=\"2\"></path><path d=\"M24.3981 33.1305L24 32.9206L23.6019 33.1305L15.8715 37.2059L17.3542 28.5663L17.43 28.1246L17.1095 27.8113L10.83 21.6746L19.4965 20.4049L19.9405 20.3399L20.1387 19.9373L24 12.0936L27.8613 19.9373L28.0595 20.3399L28.5035 20.4049L37.17 21.6746L30.8905 27.8113L30.57 28.1246L30.6458 28.5663L32.1285 37.2059L24.3981 33.1305Z\" stroke-width=\"1.70746\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/rating-star-small-2.svg":
/*!***********************************************!*\
  !*** ./src/images-v1/rating-star-small-2.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\" fill=\"none\" stroke-width=\"2\"></path><path d=\"M12 15.9472L8.58001 17.7572L9.23001 13.9272L6.45001 11.2072L10.29 10.6472L12 7.17725L13.71 10.6472L17.55 11.2072L14.77 13.9272L15.42 17.7572L12 15.9472Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/rating-star-small.svg":
/*!*********************************************!*\
  !*** ./src/images-v1/rating-star-small.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\"></path></g></svg>"

/***/ }),

/***/ "./src/images-v1/rating-star.svg":
/*!***************************************!*\
  !*** ./src/images-v1/rating-star.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\"></path></g></svg>"

/***/ }),

/***/ "./src/images-v1/reorder-24x24.svg":
/*!*****************************************!*\
  !*** ./src/images-v1/reorder-24x24.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17 5L12 0L7 5H11V9H13V5H17Z\"></path><path d=\"M13 19V15H11V19H7L12 24L17 19H13Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/restoredown-16x16.svg":
/*!*********************************************!*\
  !*** ./src/images-v1/restoredown-16x16.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15 6C15 6.55 14.55 7 14 7H10C9.45 7 9 6.55 9 6V2C9 1.45 9.45 1 10 1C10.55 1 11 1.45 11 2V3.59L13.29 1.29C13.49 1.09 13.74 1 14 1C14.26 1 14.51 1.1 14.71 1.29C15.1 1.68 15.1 2.31 14.71 2.7L12.42 4.99H14.01C14.56 4.99 15.01 5.44 15.01 5.99L15 6ZM6 9H2C1.45 9 0.999998 9.45 0.999998 10C0.999998 10.55 1.45 11 2 11H3.59L1.29 13.29C0.899998 13.68 0.899998 14.31 1.29 14.7C1.68 15.09 2.31 15.09 2.7 14.7L4.99 12.41V14C4.99 14.55 5.44 15 5.99 15C6.54 15 6.99 14.55 6.99 14V10C6.99 9.45 6.54 9 5.99 9H6Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/search-24x24.svg":
/*!****************************************!*\
  !*** ./src/images-v1/search-24x24.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14 2C9.6 2 6 5.6 6 10C6 11.8 6.6 13.5 7.7 14.9L2.3 20.3C1.9 20.7 1.9 21.3 2.3 21.7C2.5 21.9 2.7 22 3 22C3.3 22 3.5 21.9 3.7 21.7L9.1 16.3C10.5 17.4 12.2 18 14 18C18.4 18 22 14.4 22 10C22 5.6 18.4 2 14 2ZM14 16C10.7 16 8 13.3 8 10C8 6.7 10.7 4 14 4C17.3 4 20 6.7 20 10C20 13.3 17.3 16 14 16Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/smiley-rate1-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v1/smiley-rate1-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 4.9938C4 4.44362 4.45 3.99348 5 3.99348H6.59L5.3 2.70306C4.91 2.31293 4.91 1.68272 5.3 1.2926C5.69 0.902468 6.32 0.902468 6.71 1.2926L9.71 4.29357C9.8 4.3836 9.88 4.49364 9.93 4.62368C10.03 4.86376 10.03 5.14385 9.93 5.38393C9.88 5.50397 9.81 5.614 9.71 5.71404L6.71 8.71501C6.51 8.91508 6.26 9.00511 6 9.00511C5.74 9.00511 5.49 8.90508 5.29 8.71501C4.9 8.32489 4.9 7.69468 5.29 7.30456L6.58 6.01413H4.99C4.44 6.01413 3.99 5.56399 3.99 5.01381L4 4.9938ZM14.08 5.37393C14.13 5.49397 14.2 5.604 14.3 5.70403L17.3 8.70501C17.5 8.90508 17.75 8.99511 18.01 8.99511C18.27 8.99511 18.52 8.89507 18.72 8.70501C19.11 8.31488 19.11 7.68468 18.72 7.29455L17.43 6.00413H19.02C19.57 6.00413 20.02 5.55399 20.02 5.00381C20.02 4.45363 19.57 4.00348 19.02 4.00348H17.43L18.72 2.71306C19.11 2.32293 19.11 1.69273 18.72 1.3026C18.33 0.912471 17.7 0.912471 17.31 1.3026L14.31 4.30358C14.22 4.39361 14.14 4.50364 14.09 4.63368C13.99 4.87376 13.99 5.15385 14.09 5.39393L14.08 5.37393ZM22 14.9971V20.999C22 22.6496 20.65 24 19 24H5C3.35 24 2 22.6496 2 20.999V14.9971C2 13.3465 3.35 11.9961 5 11.9961H19C20.65 11.9961 22 13.3465 22 14.9971ZM19 13.9967H16V16.9977H20V14.9971C20 14.4469 19.55 13.9967 19 13.9967ZM14 16.9977V13.9967H10V16.9977H14ZM10 18.9984V21.9993H14V18.9984H10ZM4 14.9971V16.9977H8V13.9967H5C4.45 13.9967 4 14.4469 4 14.9971ZM5 21.9993H8V18.9984H4V20.999C4 21.5492 4.45 21.9993 5 21.9993ZM20 20.999V18.9984H16V21.9993H19C19.55 21.9993 20 21.5492 20 20.999Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/smiley-rate10-24x24.svg":
/*!***********************************************!*\
  !*** ./src/images-v1/smiley-rate10-24x24.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 23C6.85721 23 1.15412 19.9621 0.0134987 13.1669C-0.0765501 12.6272 0.293651 12.1076 0.833944 12.0177C1.38424 11.9277 1.89452 12.2975 1.98457 12.8371C2.92508 18.4732 7.69767 20.9914 12 20.9914C16.3023 20.9914 21.0749 18.4732 22.0154 12.8371C22.1055 12.2975 22.6158 11.9277 23.1661 12.0177C23.7063 12.1076 24.0765 12.6272 23.9865 13.1669C22.8559 19.9521 17.1428 23 11.99 23H12.01ZM21.165 6.15177C22.3056 5.01257 22.3056 3.16386 21.165 2.02465L21.0049 1.85477C19.9143 0.765533 18.1633 0.725561 17.0227 1.71487C15.8821 0.715568 14.1312 0.765533 13.0406 1.85477L12.8705 2.01466C11.7299 3.15386 11.7299 5.00257 12.8705 6.14178L17.0227 10.2889L21.175 6.14178L21.165 6.15177ZM15.742 3.27378L17.0127 4.54289L18.2834 3.27378C18.6436 2.91403 19.2239 2.91403 19.5841 3.27378L19.7442 3.43367C20.1044 3.79342 20.1044 4.37301 19.7442 4.73276L17.0127 7.46086L14.2812 4.73276C13.921 4.37301 13.921 3.79342 14.2812 3.43367L14.4413 3.27378C14.6214 3.09391 14.8515 3.00397 15.0917 3.00397C15.3318 3.00397 15.5619 3.09391 15.742 3.27378ZM11.1595 6.15177C12.3002 5.01257 12.3002 3.16386 11.1595 2.02465L10.9995 1.85477C9.90886 0.765533 8.15792 0.725561 7.0173 1.71487C5.87668 0.715568 4.12573 0.765533 3.03514 1.85477L2.86505 2.01466C1.72443 3.15386 1.72443 5.00257 2.86505 6.14178L7.0173 10.2889L11.1695 6.14178L11.1595 6.15177ZM5.7366 3.27378L7.00729 4.54289L8.27798 3.27378C8.63818 2.91403 9.21849 2.91403 9.57869 3.27378L9.73877 3.43367C10.099 3.79342 10.099 4.37301 9.73877 4.73276L7.00729 7.46086L4.27581 4.73276C3.91562 4.37301 3.91562 3.79342 4.27581 3.43367L4.4359 3.27378C4.61599 3.09391 4.84612 3.00397 5.08625 3.00397C5.32638 3.00397 5.5565 3.09391 5.7366 3.27378Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/smiley-rate2-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v1/smiley-rate2-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_15894_140103)\"><path d=\"M4.88291 4.51001C4.47291 4.51001 4.08291 4.25001 3.94291 3.84001C3.76291 3.32001 4.03291 2.75001 4.55291 2.57001L8.32291 1.25001C8.84291 1.06001 9.41291 1.34001 9.59291 1.86001C9.77291 2.38001 9.50291 2.95001 8.98291 3.13001L5.20291 4.45001C5.09291 4.49001 4.98291 4.51001 4.87291 4.51001H4.88291ZM19.8129 3.89001C20.0229 3.38001 19.7729 2.79001 19.2629 2.59001L15.5529 1.07001C15.0429 0.860007 14.4529 1.11001 14.2529 1.62001C14.0429 2.13001 14.2929 2.72001 14.8029 2.92001L18.5029 4.43001C18.6229 4.48001 18.7529 4.50001 18.8829 4.50001C19.2729 4.50001 19.6529 4.27001 19.8129 3.88001V3.89001ZM3.50291 6.00001C2.64291 6.37001 1.79291 6.88001 1.00291 7.48001C0.79291 7.64001 0.64291 7.87001 0.59291 8.14001C0.48291 8.73001 0.87291 9.29001 1.45291 9.40001C2.04291 9.51001 2.60291 9.12001 2.71291 8.54001C2.87291 7.69001 3.12291 6.83001 3.50291 5.99001V6.00001ZM21.0429 8.55001C21.6029 10.48 24.2429 8.84001 22.7529 7.48001C21.9629 6.88001 21.1129 6.37001 20.2529 6.00001C20.6329 6.84001 20.8829 7.70001 21.0429 8.55001ZM21.5729 13.2C21.2529 14.2 22.5429 15.09 23.3629 14.39C23.8529 14 23.9229 13.29 23.5429 12.81C21.7429 10.67 22.1329 10.55 21.5829 13.2H21.5729ZM1.75291 11C1.22291 11.79 -0.14709 12.64 0.0129102 13.75C0.15291 14.36 0.75291 14.74 1.35291 14.6C2.98291 14.1 1.80291 12.22 1.75291 11ZM19.8829 17C19.8829 13.14 16.2929 10 11.8829 10C7.47291 10 3.88291 13.14 3.88291 17C3.88291 20.86 7.47291 24 11.8829 24C16.2929 24 19.8829 20.86 19.8829 17ZM17.8829 17C17.8829 19.76 15.1929 22 11.8829 22C8.57291 22 5.88291 19.76 5.88291 17C5.88291 14.24 8.57291 12 11.8829 12C15.1929 12 17.8829 14.24 17.8829 17Z\"></path></g><defs><clipPath id=\"clip0_15894_140103\"><rect width=\"24\" height=\"24\" fill=\"white\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ "./src/images-v1/smiley-rate3-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v1/smiley-rate3-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.01915 7C6.46961 7 6.01998 6.55 6.01998 6V2C6.01998 1.45 6.46961 1 7.01915 1C7.56869 1 8.01832 1.45 8.01832 2V6C8.01832 6.55 7.56869 7 7.01915 7ZM18.01 6V2C18.01 1.45 17.5604 1 17.0108 1C16.4613 1 16.0117 1.45 16.0117 2V6C16.0117 6.55 16.4613 7 17.0108 7C17.5604 7 18.01 6.55 18.01 6ZM16.4213 21.58L18.01 19.99L19.2989 21.28C19.6886 21.67 20.3181 21.67 20.7077 21.28C21.0974 20.89 21.0974 20.26 20.7077 19.87L19.4188 18.58C18.6395 17.8 17.3705 17.8 16.5912 18.58L15.0025 20.17L13.4138 18.58C12.6345 17.8 11.3655 17.8 10.5862 18.58L8.9975 20.17L7.40883 18.58C6.62948 17.8 5.36053 17.8 4.58118 18.58L3.29226 19.87C2.90258 20.26 2.90258 20.89 3.29226 21.28C3.68193 21.67 4.31141 21.67 4.70108 21.28L5.99001 19.99L7.57868 21.58C8.35803 22.36 9.62698 22.36 10.4063 21.58L11.995 19.99L13.5837 21.58C13.9734 21.97 14.4829 22.16 14.9925 22.16C15.5021 22.16 16.0117 21.97 16.4013 21.58H16.4213Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/smiley-rate4-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v1/smiley-rate4-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.06927 7C6.51927 7 6.06927 6.55 6.06927 6V2C6.06927 1.45 6.51927 1 7.06927 1C7.61927 1 8.06927 1.45 8.06927 2V6C8.06927 6.55 7.61927 7 7.06927 7ZM18.0693 6V2C18.0693 1.45 17.6193 1 17.0693 1C16.5193 1 16.0693 1.45 16.0693 2V6C16.0693 6.55 16.5193 7 17.0693 7C17.6193 7 18.0693 6.55 18.0693 6ZM22.5693 21.9C23.0693 21.66 23.2793 21.07 23.0393 20.57C21.1093 16.52 16.9093 14 12.0693 14C7.22927 14 3.02927 16.52 1.09927 20.57C0.859273 21.07 1.06927 21.67 1.56927 21.9C2.06927 22.14 2.65927 21.93 2.89927 21.43C4.49927 18.08 8.00927 16 12.0593 16C16.1093 16 19.6293 18.08 21.2193 21.43C21.3893 21.79 21.7493 22 22.1193 22C22.2593 22 22.4093 21.97 22.5493 21.9H22.5693Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/smiley-rate5-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v1/smiley-rate5-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.00572 7C6.45572 7 6.00572 6.55 6.00572 6V2C6.00572 1.45 6.45572 1 7.00572 1C7.55572 1 8.00572 1.45 8.00572 2V6C8.00572 6.55 7.55572 7 7.00572 7ZM18.0057 6V2C18.0057 1.45 17.5557 1 17.0057 1C16.4557 1 16.0057 1.45 16.0057 2V6C16.0057 6.55 16.4557 7 17.0057 7C17.5557 7 18.0057 6.55 18.0057 6ZM19.9457 21.33C20.1257 20.81 19.8557 20.24 19.3357 20.05C14.5457 18.35 9.45572 18.35 4.66572 20.05C4.14572 20.23 3.87572 20.81 4.05572 21.33C4.23572 21.85 4.80572 22.12 5.33572 21.94C9.69572 20.4 14.3057 20.4 18.6657 21.94C18.7757 21.98 18.8857 22 18.9957 22C19.4057 22 19.7957 21.74 19.9357 21.33H19.9457Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/smiley-rate6-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v1/smiley-rate6-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 7C6.45 7 6 6.55 6 6V2C6 1.45 6.45 1 7 1C7.55 1 8 1.45 8 2V6C8 6.55 7.55 7 7 7ZM18 6V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2V6C16 6.55 16.45 7 17 7C17.55 7 18 6.55 18 6ZM21 21C21 20.45 20.55 20 20 20H4C3.45 20 3 20.45 3 21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/smiley-rate7-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v1/smiley-rate7-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.0022 23.99C11.452 23.99 11.0018 23.5402 11.0018 22.9904C11.0018 22.4407 11.452 21.9909 12.0022 21.9909C16.3137 21.9909 21.0755 19.472 22.0158 13.8344C22.1058 13.2947 22.616 12.9248 23.1662 13.0148C23.7064 13.1047 24.0765 13.6245 23.9865 14.1643C22.8561 20.9513 17.144 24 11.9922 24L12.0022 23.99ZM8.00072 5.99783V1.99957C8.00072 1.4498 7.55056 1 7.00036 1C6.45016 1 6 1.4498 6 1.99957V5.99783C6 6.54759 6.45016 6.99739 7.00036 6.99739C7.55056 6.99739 8.00072 6.54759 8.00072 5.99783ZM18.0043 5.99783V1.99957C18.0043 1.4498 17.5542 1 17.004 1C16.4538 1 16.0036 1.4498 16.0036 1.99957V5.99783C16.0036 6.54759 16.4538 6.99739 17.004 6.99739C17.5542 6.99739 18.0043 6.54759 18.0043 5.99783Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/smiley-rate8-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v1/smiley-rate8-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85721 24 1.15412 20.96 0.0134987 14.16C-0.0765501 13.62 0.293651 13.1 0.833944 13.01C1.38424 12.92 1.89452 13.29 1.98457 13.83C2.92508 19.47 7.69767 21.99 12 21.99C16.3023 21.99 21.0749 19.47 22.0154 13.83C22.1055 13.29 22.6158 12.92 23.1661 13.01C23.7063 13.1 24.0765 13.62 23.9865 14.16C22.8559 20.95 17.1428 24 11.99 24H12.01ZM8.00783 6V2C8.00783 1.45 7.55759 1 7.00729 1C6.45699 1 6.00675 1.45 6.00675 2V6C6.00675 6.55 6.45699 7 7.00729 7C7.55759 7 8.00783 6.55 8.00783 6ZM18.0133 6V2C18.0133 1.45 17.563 1 17.0127 1C16.4624 1 16.0122 1.45 16.0122 2V6C16.0122 6.55 16.4624 7 17.0127 7C17.563 7 18.0133 6.55 18.0133 6Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v1/smiley-rate9-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v1/smiley-rate9-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85767 24 1.15509 20.96 0.0145752 14.16C-0.0354475 13.87 0.0445888 13.57 0.234675 13.35C0.424761 13.13 0.704888 13 0.995019 13H23.005C23.2951 13 23.5752 13.13 23.7653 13.35C23.9554 13.57 24.0354 13.87 23.9854 14.16C22.8549 20.95 17.1423 24 11.99 24H12.01ZM2.25559 15C3.61621 19.82 8.0182 22 12.01 22C16.0018 22 20.4038 19.82 21.7644 15H2.25559ZM8.00819 6V2C8.00819 1.45 7.55799 1 7.00774 1C6.45749 1 6.00729 1.45 6.00729 2V6C6.00729 6.55 6.45749 7 7.00774 7C7.55799 7 8.00819 6.55 8.00819 6ZM18.0127 6V2C18.0127 1.45 17.5625 1 17.0123 1C16.462 1 16.0118 1.45 16.0118 2V6C16.0118 6.55 16.462 7 17.0123 7C17.5625 7 18.0127 6.55 18.0127 6Z\"></path></svg>"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_51423__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_51423__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_51423__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_51423__.o(definition, key) && !__nested_webpack_require_51423__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_51423__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_51423__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/iconsV1.ts ***!
  \************************/
__nested_webpack_require_51423__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_51423__.d(__nested_webpack_exports__, {
/* harmony export */   icons: () => (/* binding */ icons)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
var path = __nested_webpack_require_51423__("./src/images-v1 sync recursive \\.svg$");
var icons = {};
path.keys().forEach(function (key) {
    icons[key.substring(2, key.length - 4).toLowerCase()] = path(key);
});


})();

/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=iconsV1.js.map

/***/ }),

/***/ "../survey-core/build/icons/iconsV2.js":
/*!*********************************************!*\
  !*** ../survey-core/build/icons/iconsV2.js ***!
  \*********************************************/
/***/ (function(module) {

/*!
 * surveyjs - Survey JavaScript library v2.1.0
 * Copyright (c) 2015-2025 Devsoft Baltic OÜ  - http://surveyjs.io/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images-v2 sync recursive \\.svg$":
/*!************************************!*\
  !*** ./src/images-v2/ sync \.svg$ ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_869__) => {

var map = {
	"./ModernBooleanCheckChecked.svg": "./src/images-v2/ModernBooleanCheckChecked.svg",
	"./ModernBooleanCheckInd.svg": "./src/images-v2/ModernBooleanCheckInd.svg",
	"./ModernBooleanCheckUnchecked.svg": "./src/images-v2/ModernBooleanCheckUnchecked.svg",
	"./ModernCheck.svg": "./src/images-v2/ModernCheck.svg",
	"./ModernRadio.svg": "./src/images-v2/ModernRadio.svg",
	"./ProgressButton.svg": "./src/images-v2/ProgressButton.svg",
	"./RemoveFile.svg": "./src/images-v2/RemoveFile.svg",
	"./TimerCircle.svg": "./src/images-v2/TimerCircle.svg",
	"./add-24x24.svg": "./src/images-v2/add-24x24.svg",
	"./arrowleft-16x16.svg": "./src/images-v2/arrowleft-16x16.svg",
	"./arrowright-16x16.svg": "./src/images-v2/arrowright-16x16.svg",
	"./camera-24x24.svg": "./src/images-v2/camera-24x24.svg",
	"./camera-32x32.svg": "./src/images-v2/camera-32x32.svg",
	"./cancel-24x24.svg": "./src/images-v2/cancel-24x24.svg",
	"./check-16x16.svg": "./src/images-v2/check-16x16.svg",
	"./check-24x24.svg": "./src/images-v2/check-24x24.svg",
	"./chevrondown-24x24.svg": "./src/images-v2/chevrondown-24x24.svg",
	"./chevronright-16x16.svg": "./src/images-v2/chevronright-16x16.svg",
	"./clear-16x16.svg": "./src/images-v2/clear-16x16.svg",
	"./clear-24x24.svg": "./src/images-v2/clear-24x24.svg",
	"./close-16x16.svg": "./src/images-v2/close-16x16.svg",
	"./close-24x24.svg": "./src/images-v2/close-24x24.svg",
	"./collapse-16x16.svg": "./src/images-v2/collapse-16x16.svg",
	"./collapsedetails-16x16.svg": "./src/images-v2/collapsedetails-16x16.svg",
	"./delete-16x16.svg": "./src/images-v2/delete-16x16.svg",
	"./delete-24x24.svg": "./src/images-v2/delete-24x24.svg",
	"./drag-24x24.svg": "./src/images-v2/drag-24x24.svg",
	"./draghorizontal-24x16.svg": "./src/images-v2/draghorizontal-24x16.svg",
	"./editsmall-16x16.svg": "./src/images-v2/editsmall-16x16.svg",
	"./expand-16x16.svg": "./src/images-v2/expand-16x16.svg",
	"./expanddetails-16x16.svg": "./src/images-v2/expanddetails-16x16.svg",
	"./file-72x72.svg": "./src/images-v2/file-72x72.svg",
	"./flip-24x24.svg": "./src/images-v2/flip-24x24.svg",
	"./folder-24x24.svg": "./src/images-v2/folder-24x24.svg",
	"./fullsize-16x16.svg": "./src/images-v2/fullsize-16x16.svg",
	"./image-48x48.svg": "./src/images-v2/image-48x48.svg",
	"./loading-48x48.svg": "./src/images-v2/loading-48x48.svg",
	"./maximize-16x16.svg": "./src/images-v2/maximize-16x16.svg",
	"./minimize-16x16.svg": "./src/images-v2/minimize-16x16.svg",
	"./more-24x24.svg": "./src/images-v2/more-24x24.svg",
	"./navmenu-24x24.svg": "./src/images-v2/navmenu-24x24.svg",
	"./noimage-48x48.svg": "./src/images-v2/noimage-48x48.svg",
	"./ranking-arrows.svg": "./src/images-v2/ranking-arrows.svg",
	"./rankingundefined-16x16.svg": "./src/images-v2/rankingundefined-16x16.svg",
	"./rating-star-2.svg": "./src/images-v2/rating-star-2.svg",
	"./rating-star-small-2.svg": "./src/images-v2/rating-star-small-2.svg",
	"./rating-star-small.svg": "./src/images-v2/rating-star-small.svg",
	"./rating-star.svg": "./src/images-v2/rating-star.svg",
	"./reorder-24x24.svg": "./src/images-v2/reorder-24x24.svg",
	"./restoredown-16x16.svg": "./src/images-v2/restoredown-16x16.svg",
	"./search-24x24.svg": "./src/images-v2/search-24x24.svg",
	"./smiley-rate1-24x24.svg": "./src/images-v2/smiley-rate1-24x24.svg",
	"./smiley-rate10-24x24.svg": "./src/images-v2/smiley-rate10-24x24.svg",
	"./smiley-rate2-24x24.svg": "./src/images-v2/smiley-rate2-24x24.svg",
	"./smiley-rate3-24x24.svg": "./src/images-v2/smiley-rate3-24x24.svg",
	"./smiley-rate4-24x24.svg": "./src/images-v2/smiley-rate4-24x24.svg",
	"./smiley-rate5-24x24.svg": "./src/images-v2/smiley-rate5-24x24.svg",
	"./smiley-rate6-24x24.svg": "./src/images-v2/smiley-rate6-24x24.svg",
	"./smiley-rate7-24x24.svg": "./src/images-v2/smiley-rate7-24x24.svg",
	"./smiley-rate8-24x24.svg": "./src/images-v2/smiley-rate8-24x24.svg",
	"./smiley-rate9-24x24.svg": "./src/images-v2/smiley-rate9-24x24.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __nested_webpack_require_869__(id);
}
function webpackContextResolve(req) {
	if(!__nested_webpack_require_869__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images-v2 sync recursive \\.svg$";

/***/ }),

/***/ "./src/images-v2/ModernBooleanCheckChecked.svg":
/*!*****************************************************!*\
  !*** ./src/images-v2/ModernBooleanCheckChecked.svg ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><polygon points=\"19,10 14,10 14,5 10,5 10,10 5,10 5,14 10,14 10,19 14,19 14,14 19,14 \"></polygon></svg>"

/***/ }),

/***/ "./src/images-v2/ModernBooleanCheckInd.svg":
/*!*************************************************!*\
  !*** ./src/images-v2/ModernBooleanCheckInd.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><path d=\"M22,0H2C0.9,0,0,0.9,0,2v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V2C24,0.9,23.1,0,22,0z M21,18L6,3h15V18z M3,6l15,15H3V6z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/ModernBooleanCheckUnchecked.svg":
/*!*******************************************************!*\
  !*** ./src/images-v2/ModernBooleanCheckUnchecked.svg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\"><rect x=\"5\" y=\"10\" width=\"14\" height=\"4\"></rect></svg>"

/***/ }),

/***/ "./src/images-v2/ModernCheck.svg":
/*!***************************************!*\
  !*** ./src/images-v2/ModernCheck.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\"><path d=\"M5,13l2-2l3,3l7-7l2,2l-9,9L5,13z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/ModernRadio.svg":
/*!***************************************!*\
  !*** ./src/images-v2/ModernRadio.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"-12 -12 24 24\"><circle r=\"6\" cx=\"0\" cy=\"0\"></circle></svg>"

/***/ }),

/***/ "./src/images-v2/ProgressButton.svg":
/*!******************************************!*\
  !*** ./src/images-v2/ProgressButton.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 10 10\"><polygon points=\"2,2 0,4 5,9 10,4 8,2 5,5 \"></polygon></svg>"

/***/ }),

/***/ "./src/images-v2/RemoveFile.svg":
/*!**************************************!*\
  !*** ./src/images-v2/RemoveFile.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\"><path d=\"M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z M11,10l-1,1L8,9l-2,2l-1-1l2-2L5,6l1-1l2,2l2-2l1,1L9,8 L11,10z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/TimerCircle.svg":
/*!***************************************!*\
  !*** ./src/images-v2/TimerCircle.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 160 160\"><circle cx=\"80\" cy=\"80\" r=\"70\" style=\"stroke: var(--sd-timer-stroke-background-color); stroke-width: var(--sd-timer-stroke-background-width)\" stroke-dasharray=\"none\" stroke-dashoffset=\"none\"></circle><circle cx=\"80\" cy=\"80\" r=\"70\"></circle></svg>"

/***/ }),

/***/ "./src/images-v2/add-24x24.svg":
/*!*************************************!*\
  !*** ./src/images-v2/add-24x24.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.75 12C15.75 12.41 15.41 12.75 15 12.75H12.75V15C12.75 15.41 12.41 15.75 12 15.75C11.59 15.75 11.25 15.41 11.25 15V12.75H9C8.59 12.75 8.25 12.41 8.25 12C8.25 11.59 8.59 11.25 9 11.25H11.25V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9V11.25H15C15.41 11.25 15.75 11.59 15.75 12ZM21.75 12C21.75 17.38 17.38 21.75 12 21.75C6.62 21.75 2.25 17.38 2.25 12C2.25 6.62 6.62 2.25 12 2.25C17.38 2.25 21.75 6.62 21.75 12ZM20.25 12C20.25 7.45 16.55 3.75 12 3.75C7.45 3.75 3.75 7.45 3.75 12C3.75 16.55 7.45 20.25 12 20.25C16.55 20.25 20.25 16.55 20.25 12Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/arrowleft-16x16.svg":
/*!*******************************************!*\
  !*** ./src/images-v2/arrowleft-16x16.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.7475 7.9975C14.7475 8.4075 14.4075 8.7475 13.9975 8.7475H3.8075L7.5275 12.4675C7.8175 12.7575 7.8175 13.2375 7.5275 13.5275C7.3775 13.6775 7.1875 13.7475 6.9975 13.7475C6.8075 13.7475 6.6175 13.6775 6.4675 13.5275L1.4675 8.5275C1.1775 8.2375 1.1775 7.7575 1.4675 7.4675L6.4675 2.4675C6.7575 2.1775 7.2375 2.1775 7.5275 2.4675C7.8175 2.7575 7.8175 3.2375 7.5275 3.5275L3.8075 7.2475H13.9975C14.4075 7.2475 14.7475 7.5875 14.7475 7.9975Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/arrowright-16x16.svg":
/*!********************************************!*\
  !*** ./src/images-v2/arrowright-16x16.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.53 8.5275L9.53 13.5275C9.38 13.6775 9.19 13.7475 9 13.7475C8.81 13.7475 8.62 13.6775 8.47 13.5275C8.18 13.2375 8.18 12.7575 8.47 12.4675L12.19 8.7475H2C1.59 8.7475 1.25 8.4075 1.25 7.9975C1.25 7.5875 1.59 7.2475 2 7.2475H12.19L8.47 3.5275C8.18 3.2375 8.18 2.7575 8.47 2.4675C8.76 2.1775 9.24 2.1775 9.53 2.4675L14.53 7.4675C14.82 7.7575 14.82 8.2375 14.53 8.5275Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/camera-24x24.svg":
/*!****************************************!*\
  !*** ./src/images-v2/camera-24x24.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.19 4.25H17.12C16.72 4.25 16.35 4.03 16.17 3.67C15.73 2.8 14.86 2.25 13.88 2.25H10.12C9.14 2.25 8.27 2.79 7.83 3.67C7.65 4.03 7.29 4.25 6.88 4.25H4.81C3.4 4.25 2.25 5.4 2.25 6.81V18.19C2.25 19.6 3.4 20.75 4.81 20.75H19.19C20.6 20.75 21.75 19.6 21.75 18.19V6.81C21.75 5.4 20.6 4.25 19.19 4.25ZM20.25 18.19C20.25 18.77 19.78 19.25 19.19 19.25H4.81C4.23 19.25 3.75 18.78 3.75 18.19V6.81C3.75 6.23 4.22 5.75 4.81 5.75H6.88C7.86 5.75 8.73 5.21 9.17 4.33C9.35 3.97 9.71 3.75 10.12 3.75H13.88C14.28 3.75 14.65 3.97 14.83 4.33C15.27 5.2 16.14 5.75 17.12 5.75H19.19C19.77 5.75 20.25 6.22 20.25 6.81V18.19ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25ZM12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM14.75 12C14.75 13.52 13.52 14.75 12 14.75C11.59 14.75 11.25 14.41 11.25 14C11.25 13.59 11.59 13.25 12 13.25C12.69 13.25 13.25 12.69 13.25 12C13.25 11.59 13.59 11.25 14 11.25C14.41 11.25 14.75 11.59 14.75 12Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/camera-32x32.svg":
/*!****************************************!*\
  !*** ./src/images-v2/camera-32x32.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M25 7.25H22.19C21.73 7.25 21.31 7 21.09 6.59L20.89 6.22C20.23 5.01 18.97 4.25 17.59 4.25H14.41C13.03 4.25 11.77 5 11.11 6.22L10.91 6.6C10.69 7 10.27 7.26 9.81 7.26H7C4.93 7.26 3.25 8.94 3.25 11.01V24.01C3.25 26.08 4.93 27.76 7 27.76H25C27.07 27.76 28.75 26.08 28.75 24.01V11C28.75 8.93 27.07 7.25 25 7.25ZM27.25 24C27.25 25.24 26.24 26.25 25 26.25H7C5.76 26.25 4.75 25.24 4.75 24V11C4.75 9.76 5.76 8.75 7 8.75H9.81C10.82 8.75 11.75 8.2 12.23 7.31L12.43 6.94C12.82 6.21 13.58 5.76 14.41 5.76H17.59C18.42 5.76 19.18 6.21 19.57 6.94L19.77 7.31C20.25 8.2 21.18 8.76 22.19 8.76H25C26.24 8.76 27.25 9.77 27.25 11.01V24.01V24ZM16 10.25C12.28 10.25 9.25 13.28 9.25 17C9.25 20.72 12.28 23.75 16 23.75C19.72 23.75 22.75 20.72 22.75 17C22.75 13.28 19.72 10.25 16 10.25ZM16 22.25C13.11 22.25 10.75 19.89 10.75 17C10.75 14.11 13.11 11.75 16 11.75C18.89 11.75 21.25 14.11 21.25 17C21.25 19.89 18.89 22.25 16 22.25ZM19.75 17C19.75 19.07 18.07 20.75 16 20.75C15.59 20.75 15.25 20.41 15.25 20C15.25 19.59 15.59 19.25 16 19.25C17.24 19.25 18.25 18.24 18.25 17C18.25 16.59 18.59 16.25 19 16.25C19.41 16.25 19.75 16.59 19.75 17Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/cancel-24x24.svg":
/*!****************************************!*\
  !*** ./src/images-v2/cancel-24x24.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.8099 11.75L15.2799 9.28C15.5699 8.99 15.5699 8.51 15.2799 8.22C14.9899 7.93 14.5099 7.93 14.2199 8.22L11.7499 10.69L9.27994 8.22C8.98994 7.93 8.50994 7.93 8.21994 8.22C7.92994 8.51 7.92994 8.99 8.21994 9.28L10.6899 11.75L8.21994 14.22C7.92994 14.51 7.92994 14.99 8.21994 15.28C8.36994 15.43 8.55994 15.5 8.74994 15.5C8.93994 15.5 9.12994 15.43 9.27994 15.28L11.7499 12.81L14.2199 15.28C14.3699 15.43 14.5599 15.5 14.7499 15.5C14.9399 15.5 15.1299 15.43 15.2799 15.28C15.5699 14.99 15.5699 14.51 15.2799 14.22L12.8099 11.75Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/check-16x16.svg":
/*!***************************************!*\
  !*** ./src/images-v2/check-16x16.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.0275 5.0275L6.5275 12.5275C6.3775 12.6775 6.1875 12.7475 5.9975 12.7475C5.8075 12.7475 5.6175 12.6775 5.4675 12.5275L2.4675 9.5275C2.1775 9.2375 2.1775 8.7575 2.4675 8.4675C2.7575 8.1775 3.2375 8.1775 3.5275 8.4675L5.9975 10.9375L12.9675 3.9675C13.2575 3.6775 13.7375 3.6775 14.0275 3.9675C14.3175 4.2575 14.3175 4.7375 14.0275 5.0275Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/check-24x24.svg":
/*!***************************************!*\
  !*** ./src/images-v2/check-24x24.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.5275 7.5275L9.5275 17.5275C9.3775 17.6775 9.1875 17.7475 8.9975 17.7475C8.8075 17.7475 8.6175 17.6775 8.4675 17.5275L4.4675 13.5275C4.1775 13.2375 4.1775 12.7575 4.4675 12.4675C4.7575 12.1775 5.2375 12.1775 5.5275 12.4675L8.9975 15.9375L18.4675 6.4675C18.7575 6.1775 19.2375 6.1775 19.5275 6.4675C19.8175 6.7575 19.8175 7.2375 19.5275 7.5275Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/chevrondown-24x24.svg":
/*!*********************************************!*\
  !*** ./src/images-v2/chevrondown-24x24.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.5275 10.5275L12.5275 14.5275C12.3775 14.6775 12.1875 14.7475 11.9975 14.7475C11.8075 14.7475 11.6175 14.6775 11.4675 14.5275L7.4675 10.5275C7.1775 10.2375 7.1775 9.7575 7.4675 9.4675C7.7575 9.1775 8.2375 9.1775 8.5275 9.4675L11.9975 12.9375L15.4675 9.4675C15.7575 9.1775 16.2375 9.1775 16.5275 9.4675C16.8175 9.7575 16.8175 10.2375 16.5275 10.5275Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/chevronright-16x16.svg":
/*!**********************************************!*\
  !*** ./src/images-v2/chevronright-16x16.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.35 8.34627L7.35 12.3463C7.25 12.4463 7.12 12.4963 7 12.4963C6.88 12.4963 6.74 12.4463 6.65 12.3463C6.45 12.1463 6.45 11.8363 6.65 11.6363L10.3 7.98627L6.65 4.34627C6.45 4.15627 6.45 3.83627 6.65 3.64627C6.85 3.45627 7.16 3.44627 7.35 3.64627L11.35 7.64627C11.55 7.84627 11.55 8.15627 11.35 8.35627V8.34627Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/clear-16x16.svg":
/*!***************************************!*\
  !*** ./src/images-v2/clear-16x16.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.35 11.65C12.55 11.85 12.55 12.16 12.35 12.36C12.25 12.46 12.12 12.51 12 12.51C11.88 12.51 11.74 12.46 11.65 12.36L8 8.71L4.35 12.36C4.25 12.46 4.12 12.51 4 12.51C3.88 12.51 3.74 12.46 3.65 12.36C3.45 12.16 3.45 11.85 3.65 11.65L7.3 8L3.65 4.35C3.45 4.16 3.45 3.84 3.65 3.65C3.85 3.46 4.16 3.45 4.35 3.65L8 7.3L11.65 3.65C11.85 3.45 12.16 3.45 12.36 3.65C12.56 3.85 12.56 4.16 12.36 4.36L8.71 8.01L12.36 11.66L12.35 11.65Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/clear-24x24.svg":
/*!***************************************!*\
  !*** ./src/images-v2/clear-24x24.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M20.12 10.9325C20.64 10.4125 20.93 9.7225 20.93 8.9925C20.93 8.2625 20.64 7.5725 20.12 7.0525L16.95 3.8825C15.88 2.8125 14.13 2.8125 13.06 3.8825L3.88 13.0525C3.36 13.5725 3.07 14.2625 3.07 14.9925C3.07 15.7225 3.36 16.4125 3.88 16.9325L5.64 18.6925C6.57 19.6225 7.78 20.0825 9 20.0825C10.22 20.0825 11.43 19.6225 12.36 18.6925L20.12 10.9325ZM14.12 4.9325C14.36 4.6925 14.67 4.5625 15 4.5625C15.33 4.5625 15.65 4.6925 15.88 4.9325L19.05 8.1025C19.54 8.5925 19.54 9.3825 19.05 9.8725L12.99 15.9325L8.05 10.9925L14.12 4.9325ZM6.7 17.6325L4.94 15.8725C4.45 15.3825 4.45 14.5925 4.94 14.1025L7 12.0425L11.94 16.9825L11.3 17.6225C10.07 18.8525 7.93 18.8525 6.7 17.6225V17.6325ZM22.75 20.9925C22.75 21.4025 22.41 21.7425 22 21.7425H14C13.59 21.7425 13.25 21.4025 13.25 20.9925C13.25 20.5825 13.59 20.2425 14 20.2425H22C22.41 20.2425 22.75 20.5825 22.75 20.9925ZM4.75 20.9925C4.75 21.4025 4.41 21.7425 4 21.7425H2C1.59 21.7425 1.25 21.4025 1.25 20.9925C1.25 20.5825 1.59 20.2425 2 20.2425H4C4.41 20.2425 4.75 20.5825 4.75 20.9925Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/close-16x16.svg":
/*!***************************************!*\
  !*** ./src/images-v2/close-16x16.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.5275 12.4675C13.8175 12.7575 13.8175 13.2375 13.5275 13.5275C13.3775 13.6775 13.1875 13.7475 12.9975 13.7475C12.8075 13.7475 12.6175 13.6775 12.4675 13.5275L7.9975 9.0575L3.5275 13.5275C3.3775 13.6775 3.1875 13.7475 2.9975 13.7475C2.8075 13.7475 2.6175 13.6775 2.4675 13.5275C2.1775 13.2375 2.1775 12.7575 2.4675 12.4675L6.9375 7.9975L2.4675 3.5275C2.1775 3.2375 2.1775 2.7575 2.4675 2.4675C2.7575 2.1775 3.2375 2.1775 3.5275 2.4675L7.9975 6.9375L12.4675 2.4675C12.7575 2.1775 13.2375 2.1775 13.5275 2.4675C13.8175 2.7575 13.8175 3.2375 13.5275 3.5275L9.0575 7.9975L13.5275 12.4675Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/close-24x24.svg":
/*!***************************************!*\
  !*** ./src/images-v2/close-24x24.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.5275 18.4675C19.8175 18.7575 19.8175 19.2375 19.5275 19.5275C19.3775 19.6775 19.1875 19.7475 18.9975 19.7475C18.8075 19.7475 18.6175 19.6775 18.4675 19.5275L11.9975 13.0575L5.5275 19.5275C5.3775 19.6775 5.1875 19.7475 4.9975 19.7475C4.8075 19.7475 4.6175 19.6775 4.4675 19.5275C4.1775 19.2375 4.1775 18.7575 4.4675 18.4675L10.9375 11.9975L4.4675 5.5275C4.1775 5.2375 4.1775 4.7575 4.4675 4.4675C4.7575 4.1775 5.2375 4.1775 5.5275 4.4675L11.9975 10.9375L18.4675 4.4675C18.7575 4.1775 19.2375 4.1775 19.5275 4.4675C19.8175 4.7575 19.8175 5.2375 19.5275 5.5275L13.0575 11.9975L19.5275 18.4675Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/collapse-16x16.svg":
/*!******************************************!*\
  !*** ./src/images-v2/collapse-16x16.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/collapsedetails-16x16.svg":
/*!*************************************************!*\
  !*** ./src/images-v2/collapsedetails-16x16.svg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/delete-16x16.svg":
/*!****************************************!*\
  !*** ./src/images-v2/delete-16x16.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M13 3.25H10.75V3C10.75 2.04 9.96 1.25 9 1.25H7C6.04 1.25 5.25 2.04 5.25 3V3.25H3C2.59 3.25 2.25 3.59 2.25 4C2.25 4.41 2.59 4.75 3 4.75H3.25V13C3.25 13.96 4.04 14.75 5 14.75H11C11.96 14.75 12.75 13.96 12.75 13V4.75H13C13.41 4.75 13.75 4.41 13.75 4C13.75 3.59 13.41 3.25 13 3.25ZM6.75 3C6.75 2.86 6.86 2.75 7 2.75H9C9.14 2.75 9.25 2.86 9.25 3V3.25H6.75V3ZM11.25 13C11.25 13.14 11.14 13.25 11 13.25H5C4.86 13.25 4.75 13.14 4.75 13V4.75H11.25V13ZM9.25 6.25C9.66 6.25 10 6.59 10 7V11C10 11.41 9.66 11.75 9.25 11.75C8.84 11.75 8.5 11.41 8.5 11V7C8.5 6.59 8.84 6.25 9.25 6.25ZM7.5 7V11C7.5 11.41 7.16 11.75 6.75 11.75C6.34 11.75 6 11.41 6 11V7C6 6.59 6.34 6.25 6.75 6.25C7.16 6.25 7.5 6.59 7.5 7Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/delete-24x24.svg":
/*!****************************************!*\
  !*** ./src/images-v2/delete-24x24.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.75 9V17C12.75 17.41 12.41 17.75 12 17.75C11.59 17.75 11.25 17.41 11.25 17V9C11.25 8.59 11.59 8.25 12 8.25C12.41 8.25 12.75 8.59 12.75 9ZM14.25 9V17C14.25 17.41 14.59 17.75 15 17.75C15.41 17.75 15.75 17.41 15.75 17V9C15.75 8.59 15.41 8.25 15 8.25C14.59 8.25 14.25 8.59 14.25 9ZM9 8.25C8.59 8.25 8.25 8.59 8.25 9V17C8.25 17.41 8.59 17.75 9 17.75C9.41 17.75 9.75 17.41 9.75 17V9C9.75 8.59 9.41 8.25 9 8.25ZM20.75 6C20.75 6.41 20.41 6.75 20 6.75H18.75V18C18.75 19.52 17.52 20.75 16 20.75H8C6.48 20.75 5.25 19.52 5.25 18V6.75H4C3.59 6.75 3.25 6.41 3.25 6C3.25 5.59 3.59 5.25 4 5.25H8.25V4C8.25 3.04 9.04 2.25 10 2.25H14C14.96 2.25 15.75 3.04 15.75 4V5.25H20C20.41 5.25 20.75 5.59 20.75 6ZM9.75 5.25H14.25V4C14.25 3.86 14.14 3.75 14 3.75H10C9.86 3.75 9.75 3.86 9.75 4V5.25ZM17.25 6.75H6.75V18C6.75 18.69 7.31 19.25 8 19.25H16C16.69 19.25 17.25 18.69 17.25 18V6.75Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/drag-24x24.svg":
/*!**************************************!*\
  !*** ./src/images-v2/drag-24x24.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.5 8.75C15.19 8.75 15.75 8.19 15.75 7.5C15.75 6.81 15.19 6.25 14.5 6.25C13.81 6.25 13.25 6.81 13.25 7.5C13.25 8.19 13.81 8.75 14.5 8.75ZM14.5 7.25C14.64 7.25 14.75 7.36 14.75 7.5C14.75 7.78 14.25 7.78 14.25 7.5C14.25 7.36 14.36 7.25 14.5 7.25ZM9.5 6.25C8.81 6.25 8.25 6.81 8.25 7.5C8.25 8.19 8.81 8.75 9.5 8.75C10.19 8.75 10.75 8.19 10.75 7.5C10.75 6.81 10.19 6.25 9.5 6.25ZM9.25 7.5C9.25 7.36 9.36 7.25 9.5 7.25C9.64 7.25 9.75 7.36 9.75 7.5C9.75 7.78 9.25 7.78 9.25 7.5ZM14.5 11.25C13.81 11.25 13.25 11.81 13.25 12.5C13.25 13.19 13.81 13.75 14.5 13.75C15.19 13.75 15.75 13.19 15.75 12.5C15.75 11.81 15.19 11.25 14.5 11.25ZM14.25 12.5C14.25 12.36 14.36 12.25 14.5 12.25C14.64 12.25 14.75 12.36 14.75 12.5C14.75 12.78 14.25 12.78 14.25 12.5ZM9.5 11.25C8.81 11.25 8.25 11.81 8.25 12.5C8.25 13.19 8.81 13.75 9.5 13.75C10.19 13.75 10.75 13.19 10.75 12.5C10.75 11.81 10.19 11.25 9.5 11.25ZM9.25 12.5C9.25 12.36 9.36 12.25 9.5 12.25C9.64 12.25 9.75 12.36 9.75 12.5C9.75 12.78 9.25 12.78 9.25 12.5ZM14.5 16.25C13.81 16.25 13.25 16.81 13.25 17.5C13.25 18.19 13.81 18.75 14.5 18.75C15.19 18.75 15.75 18.19 15.75 17.5C15.75 16.81 15.19 16.25 14.5 16.25ZM14.25 17.5C14.25 17.36 14.36 17.25 14.5 17.25C14.64 17.25 14.75 17.36 14.75 17.5C14.75 17.78 14.25 17.78 14.25 17.5ZM9.5 16.25C8.81 16.25 8.25 16.81 8.25 17.5C8.25 18.19 8.81 18.75 9.5 18.75C10.19 18.75 10.75 18.19 10.75 17.5C10.75 16.81 10.19 16.25 9.5 16.25ZM9.25 17.5C9.25 17.36 9.36 17.25 9.5 17.25C9.64 17.25 9.75 17.36 9.75 17.5C9.75 17.78 9.25 17.78 9.25 17.5Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/draghorizontal-24x16.svg":
/*!************************************************!*\
  !*** ./src/images-v2/draghorizontal-24x16.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.5 9.25C16.81 9.25 16.25 9.81 16.25 10.5C16.25 11.19 16.81 11.75 17.5 11.75C18.19 11.75 18.75 11.19 18.75 10.5C18.75 9.81 18.19 9.25 17.5 9.25ZM17.25 10.5C17.25 10.36 17.36 10.25 17.5 10.25C17.64 10.25 17.75 10.36 17.75 10.5C17.75 10.78 17.25 10.78 17.25 10.5ZM17.5 6.75C18.19 6.75 18.75 6.19 18.75 5.5C18.75 4.81 18.19 4.25 17.5 4.25C16.81 4.25 16.25 4.81 16.25 5.5C16.25 6.19 16.81 6.75 17.5 6.75ZM17.5 5.25C17.64 5.25 17.75 5.36 17.75 5.5C17.75 5.78 17.25 5.78 17.25 5.5C17.25 5.36 17.36 5.25 17.5 5.25ZM12.5 9.25C11.81 9.25 11.25 9.81 11.25 10.5C11.25 11.19 11.81 11.75 12.5 11.75C13.19 11.75 13.75 11.19 13.75 10.5C13.75 9.81 13.19 9.25 12.5 9.25ZM12.25 10.5C12.25 10.36 12.36 10.25 12.5 10.25C12.64 10.25 12.75 10.36 12.75 10.5C12.75 10.78 12.25 10.78 12.25 10.5ZM12.5 4.25C11.81 4.25 11.25 4.81 11.25 5.5C11.25 6.19 11.81 6.75 12.5 6.75C13.19 6.75 13.75 6.19 13.75 5.5C13.75 4.81 13.19 4.25 12.5 4.25ZM12.25 5.5C12.25 5.36 12.36 5.25 12.5 5.25C12.64 5.25 12.75 5.36 12.75 5.5C12.75 5.78 12.25 5.78 12.25 5.5ZM7.5 9.25C6.81 9.25 6.25 9.81 6.25 10.5C6.25 11.19 6.81 11.75 7.5 11.75C8.19 11.75 8.75 11.19 8.75 10.5C8.75 9.81 8.19 9.25 7.5 9.25ZM7.25 10.5C7.25 10.36 7.36 10.25 7.5 10.25C7.64 10.25 7.75 10.36 7.75 10.5C7.75 10.78 7.25 10.78 7.25 10.5ZM7.5 4.25C6.81 4.25 6.25 4.81 6.25 5.5C6.25 6.19 6.81 6.75 7.5 6.75C8.19 6.75 8.75 6.19 8.75 5.5C8.75 4.81 8.19 4.25 7.5 4.25ZM7.25 5.5C7.25 5.36 7.36 5.25 7.5 5.25C7.64 5.25 7.75 5.36 7.75 5.5C7.75 5.78 7.25 5.78 7.25 5.5Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/editsmall-16x16.svg":
/*!*******************************************!*\
  !*** ./src/images-v2/editsmall-16x16.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\"><path d=\"M13.1209 3.05249L12.9509 2.88249C11.8809 1.81249 10.1309 1.81249 9.06089 2.88249L3.47089 8.46249C3.37089 8.56249 3.31089 8.68249 3.27089 8.81249L2.27089 12.8125C2.21089 13.0625 2.28089 13.3425 2.47089 13.5225C2.61089 13.6625 2.80089 13.7425 3.00089 13.7425C3.06089 13.7425 3.12089 13.7425 3.18089 13.7225L7.18089 12.7225C7.31089 12.6925 7.43089 12.6225 7.53089 12.5225L13.1209 6.93249C14.1909 5.86249 14.1909 4.11249 13.1209 3.04249V3.05249ZM6.62089 11.3125L4.04089 11.9625L4.69089 9.38249L8.01089 6.06249L9.95089 8.00249L6.63089 11.3225L6.62089 11.3125ZM12.0609 5.87249L11.0009 6.93249L9.06089 4.99249L10.1209 3.93249C10.6109 3.44249 11.4009 3.44249 11.8909 3.93249L12.0609 4.10249C12.5509 4.59249 12.5509 5.38249 12.0609 5.87249Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/expand-16x16.svg":
/*!****************************************!*\
  !*** ./src/images-v2/expand-16x16.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H8.75V11C8.75 11.41 8.41 11.75 8 11.75C7.59 11.75 7.25 11.41 7.25 11V8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H7.25V5C7.25 4.59 7.59 4.25 8 4.25C8.41 4.25 8.75 4.59 8.75 5V7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/expanddetails-16x16.svg":
/*!***********************************************!*\
  !*** ./src/images-v2/expanddetails-16x16.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H8.75V11C8.75 11.41 8.41 11.75 8 11.75C7.59 11.75 7.25 11.41 7.25 11V8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H7.25V5C7.25 4.59 7.59 4.25 8 4.25C8.41 4.25 8.75 4.59 8.75 5V7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/file-72x72.svg":
/*!**************************************!*\
  !*** ./src/images-v2/file-72x72.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 72 72\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M62.83 12.83L53.17 3.17C52.7982 2.79866 52.357 2.50421 51.8714 2.30346C51.3858 2.1027 50.8654 1.99959 50.34 2H14C12.4087 2 10.8826 2.63214 9.75735 3.75736C8.63214 4.88258 8 6.4087 8 8V64C8 65.5913 8.63214 67.1174 9.75735 68.2426C10.8826 69.3679 12.4087 70 14 70H58C59.5913 70 61.1174 69.3679 62.2426 68.2426C63.3679 67.1174 64 65.5913 64 64V15.66C64.0004 15.1346 63.8973 14.6142 63.6965 14.1286C63.4958 13.643 63.2013 13.2018 62.83 12.83ZM52 4.83L61.17 14H56C54.9391 14 53.9217 13.5786 53.1716 12.8284C52.4214 12.0783 52 11.0609 52 10V4.83ZM62 64C62 65.0609 61.5786 66.0783 60.8284 66.8284C60.0783 67.5786 59.0609 68 58 68H14C12.9391 68 11.9217 67.5786 11.1716 66.8284C10.4214 66.0783 10 65.0609 10 64V8C10 6.93914 10.4214 5.92172 11.1716 5.17157C11.9217 4.42143 12.9391 4 14 4H50V10C50 11.5913 50.6321 13.1174 51.7574 14.2426C52.8826 15.3679 54.4087 16 56 16H62V64ZM22 26H50V28H22V26ZM22 32H50V34H22V32ZM22 38H50V40H22V38ZM22 44H50V46H22V44Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/flip-24x24.svg":
/*!**************************************!*\
  !*** ./src/images-v2/flip-24x24.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M14.53 17.4775C14.82 17.7675 14.82 18.2475 14.53 18.5375L11.53 21.5375C11.38 21.6875 11.19 21.7575 11 21.7575C10.81 21.7575 10.62 21.6875 10.47 21.5375C10.18 21.2475 10.18 20.7675 10.47 20.4775L12.2 18.7475C12.13 18.7475 12.07 18.7475 12 18.7475C6.62 18.7475 2.25 15.7475 2.25 12.0575C2.25 10.2975 3.22 8.6375 4.99 7.3875C5.33 7.1475 5.8 7.2275 6.03 7.5675C6.27 7.9075 6.19 8.3775 5.85 8.6075C4.49 9.5675 3.74 10.7875 3.74 12.0575C3.74 14.9175 7.44 17.2475 11.99 17.2475C12.05 17.2475 12.11 17.2475 12.17 17.2475L10.46 15.5375C10.17 15.2475 10.17 14.7675 10.46 14.4775C10.75 14.1875 11.23 14.1875 11.52 14.4775L14.52 17.4775H14.53ZM12 5.2575C11.93 5.2575 11.87 5.2575 11.8 5.2575L13.53 3.5275C13.82 3.2375 13.82 2.7575 13.53 2.4675C13.24 2.1775 12.76 2.1775 12.47 2.4675L9.47 5.4675C9.18 5.7575 9.18 6.2375 9.47 6.5275L12.47 9.5275C12.62 9.6775 12.81 9.7475 13 9.7475C13.19 9.7475 13.38 9.6775 13.53 9.5275C13.82 9.2375 13.82 8.7575 13.53 8.4675L11.82 6.7575C11.88 6.7575 11.94 6.7575 12 6.7575C16.55 6.7575 20.25 9.0875 20.25 11.9475C20.25 13.2075 19.5 14.4375 18.14 15.3975C17.8 15.6375 17.72 16.1075 17.96 16.4475C18.11 16.6575 18.34 16.7675 18.57 16.7675C18.72 16.7675 18.87 16.7275 19 16.6275C20.77 15.3775 21.75 13.7175 21.75 11.9575C21.75 8.2675 17.38 5.2675 12 5.2675V5.2575Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/folder-24x24.svg":
/*!****************************************!*\
  !*** ./src/images-v2/folder-24x24.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21.72 9.24C21.45 8.92 21.12 8.67 20.75 8.5V8C20.75 6.48 19.52 5.25 18 5.25H10.65C10.32 4.1 9.26 3.25 8 3.25H6C4.48 3.25 3.25 4.48 3.25 6V18C3.25 19.52 4.48 20.75 6 20.75H18.33C19.66 20.75 20.8 19.8 21.04 18.49L22.31 11.49C22.46 10.69 22.24 9.86 21.72 9.24ZM4.75 18V6C4.75 5.31 5.31 4.75 6 4.75H8C8.69 4.75 9.25 5.31 9.25 6C9.25 6.41 9.59 6.75 10 6.75H18C18.69 6.75 19.25 7.31 19.25 8V8.25H9.27C7.94 8.25 6.8 9.2 6.56 10.51L5.29 17.51C5.19 18.07 5.27 18.64 5.51 19.15C5.06 18.96 4.75 18.52 4.75 18ZM20.83 11.22L19.56 18.22C19.45 18.81 18.94 19.25 18.33 19.25H8C7.63 19.25 7.28 19.09 7.04 18.8C6.8 18.51 6.7 18.14 6.77 17.78L8.04 10.78C8.15 10.19 8.66 9.75 9.27 9.75H19.6C19.97 9.75 20.32 9.91 20.56 10.2C20.8 10.49 20.9 10.86 20.83 11.22Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/fullsize-16x16.svg":
/*!******************************************!*\
  !*** ./src/images-v2/fullsize-16x16.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 3.25H4C3.04 3.25 2.25 4.04 2.25 5V11C2.25 11.96 3.04 12.75 4 12.75H12C12.96 12.75 13.75 11.96 13.75 11V5C13.75 4.04 12.96 3.25 12 3.25ZM12.25 11C12.25 11.14 12.14 11.25 12 11.25H4C3.86 11.25 3.75 11.14 3.75 11V5C3.75 4.86 3.86 4.75 4 4.75H12C12.14 4.75 12.25 4.86 12.25 5V11Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/image-48x48.svg":
/*!***************************************!*\
  !*** ./src/images-v2/image-48x48.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M33 10.25H15C12.38 10.25 10.25 12.38 10.25 15V33C10.25 35.62 12.38 37.75 15 37.75H33C35.62 37.75 37.75 35.62 37.75 33V15C37.75 12.38 35.62 10.25 33 10.25ZM36.25 33C36.25 34.79 34.79 36.25 33 36.25H15C13.21 36.25 11.75 34.79 11.75 33V15C11.75 13.21 13.21 11.75 15 11.75H33C34.79 11.75 36.25 13.21 36.25 15V33ZM30.5 14.25C28.71 14.25 27.25 15.71 27.25 17.5C27.25 19.29 28.71 20.75 30.5 20.75C32.29 20.75 33.75 19.29 33.75 17.5C33.75 15.71 32.29 14.25 30.5 14.25ZM30.5 19.25C29.54 19.25 28.75 18.46 28.75 17.5C28.75 16.54 29.54 15.75 30.5 15.75C31.46 15.75 32.25 16.54 32.25 17.5C32.25 18.46 31.46 19.25 30.5 19.25ZM29.26 26.28C28.94 25.92 28.49 25.71 28.01 25.7C27.54 25.68 27.07 25.87 26.73 26.2L24.95 27.94L22.28 25.23C21.94 24.89 21.5 24.71 21 24.71C20.52 24.71 20.06 24.93 19.74 25.28L14.74 30.78C14.25 31.3 14.12 32.06 14.41 32.72C14.69 33.36 15.28 33.75 15.95 33.75H32.07C32.74 33.75 33.33 33.35 33.61 32.72C33.89 32.06 33.77 31.31 33.29 30.79L29.27 26.29L29.26 26.28ZM32.22 32.12C32.18 32.2 32.13 32.25 32.06 32.25H15.94C15.87 32.25 15.81 32.21 15.78 32.12C15.77 32.09 15.71 31.93 15.83 31.8L20.84 26.29C20.9 26.22 20.99 26.21 21.02 26.21C21.06 26.21 21.14 26.22 21.2 26.29L24.4 29.54C24.69 29.83 25.16 29.84 25.46 29.54L27.77 27.27C27.83 27.21 27.9 27.2 27.94 27.2C28.01 27.2 28.06 27.21 28.13 27.28L32.16 31.79C32.16 31.79 32.16 31.79 32.17 31.8C32.29 31.93 32.23 32.09 32.22 32.12Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/loading-48x48.svg":
/*!*****************************************!*\
  !*** ./src/images-v2/loading-48x48.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_19679_369428)\"><path opacity=\"0.1\" d=\"M24 40C15.18 40 8 32.82 8 24C8 15.18 15.18 8 24 8C32.82 8 40 15.18 40 24C40 32.82 32.82 40 24 40ZM24 12C17.38 12 12 17.38 12 24C12 30.62 17.38 36 24 36C30.62 36 36 30.62 36 24C36 17.38 30.62 12 24 12Z\" fill=\"black\" fill-opacity=\"0.91\"></path><path d=\"M10 26C8.9 26 8 25.1 8 24C8 15.18 15.18 8 24 8C25.1 8 26 8.9 26 10C26 11.1 25.1 12 24 12C17.38 12 12 17.38 12 24C12 25.1 11.1 26 10 26Z\"></path></g><defs><clipPath id=\"clip0_19679_369428\"><rect width=\"32\" height=\"32\" fill=\"white\" transform=\"translate(8 8)\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ "./src/images-v2/maximize-16x16.svg":
/*!******************************************!*\
  !*** ./src/images-v2/maximize-16x16.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.75 3V7C13.75 7.41 13.41 7.75 13 7.75C12.59 7.75 12.25 7.41 12.25 7V4.81L9.53 7.53C9.38 7.68 9.19 7.75 9 7.75C8.81 7.75 8.62 7.68 8.47 7.53C8.18 7.24 8.18 6.76 8.47 6.47L11.19 3.75H9C8.59 3.75 8.25 3.41 8.25 3C8.25 2.59 8.59 2.25 9 2.25H13C13.1 2.25 13.19 2.27 13.29 2.31C13.47 2.39 13.62 2.53 13.7 2.72C13.74 2.81 13.76 2.91 13.76 3.01L13.75 3ZM7.53 8.47C7.24 8.18 6.76 8.18 6.47 8.47L3.75 11.19V9C3.75 8.59 3.41 8.25 3 8.25C2.59 8.25 2.25 8.59 2.25 9V13C2.25 13.1 2.27 13.19 2.31 13.29C2.39 13.47 2.53 13.62 2.72 13.7C2.81 13.74 2.91 13.76 3.01 13.76H7.01C7.42 13.76 7.76 13.42 7.76 13.01C7.76 12.6 7.42 12.26 7.01 12.26H4.82L7.54 9.54C7.83 9.25 7.83 8.77 7.54 8.48L7.53 8.47Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/minimize-16x16.svg":
/*!******************************************!*\
  !*** ./src/images-v2/minimize-16x16.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.75 8C13.75 8.41 13.41 8.75 13 8.75H3C2.59 8.75 2.25 8.41 2.25 8C2.25 7.59 2.59 7.25 3 7.25H13C13.41 7.25 13.75 7.59 13.75 8Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/more-24x24.svg":
/*!**************************************!*\
  !*** ./src/images-v2/more-24x24.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 10.25C11.04 10.25 10.25 11.04 10.25 12C10.25 12.96 11.04 13.75 12 13.75C12.96 13.75 13.75 12.96 13.75 12C13.75 11.04 12.96 10.25 12 10.25ZM11.75 12C11.75 11.86 11.86 11.75 12 11.75C12.14 11.75 12.25 11.86 12.25 12C12.25 12.28 11.75 12.28 11.75 12ZM19 10.25C18.04 10.25 17.25 11.04 17.25 12C17.25 12.96 18.04 13.75 19 13.75C19.96 13.75 20.75 12.96 20.75 12C20.75 11.04 19.96 10.25 19 10.25ZM18.75 12C18.75 11.86 18.86 11.75 19 11.75C19.14 11.75 19.25 11.86 19.25 12C19.25 12.28 18.75 12.28 18.75 12ZM5 10.25C4.04 10.25 3.25 11.04 3.25 12C3.25 12.96 4.04 13.75 5 13.75C5.96 13.75 6.75 12.96 6.75 12C6.75 11.04 5.96 10.25 5 10.25ZM4.75 12C4.75 11.86 4.86 11.75 5 11.75C5.14 11.75 5.25 11.86 5.25 12C5.25 12.28 4.75 12.28 4.75 12Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/navmenu-24x24.svg":
/*!*****************************************!*\
  !*** ./src/images-v2/navmenu-24x24.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.25 7C3.25 6.59 3.59 6.25 4 6.25H15C15.41 6.25 15.75 6.59 15.75 7C15.75 7.41 15.41 7.75 15 7.75H4C3.59 7.75 3.25 7.41 3.25 7ZM20 11.25H4C3.59 11.25 3.25 11.59 3.25 12C3.25 12.41 3.59 12.75 4 12.75H20C20.41 12.75 20.75 12.41 20.75 12C20.75 11.59 20.41 11.25 20 11.25ZM9 16.25H4C3.59 16.25 3.25 16.59 3.25 17C3.25 17.41 3.59 17.75 4 17.75H9C9.41 17.75 9.75 17.41 9.75 17C9.75 16.59 9.41 16.25 9 16.25Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/noimage-48x48.svg":
/*!*****************************************!*\
  !*** ./src/images-v2/noimage-48x48.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M30.4975 14.2475C28.7075 14.2475 27.2475 15.7075 27.2475 17.4975C27.2475 19.2875 28.7075 20.7475 30.4975 20.7475C32.2875 20.7475 33.7475 19.2875 33.7475 17.4975C33.7475 15.7075 32.2875 14.2475 30.4975 14.2475ZM30.4975 19.2475C29.5375 19.2475 28.7475 18.4575 28.7475 17.4975C28.7475 16.5375 29.5375 15.7475 30.4975 15.7475C31.4575 15.7475 32.2475 16.5375 32.2475 17.4975C32.2475 18.4575 31.4575 19.2475 30.4975 19.2475ZM13.5175 11.2175C13.4375 10.8075 13.7075 10.4175 14.1175 10.3375C14.4275 10.2775 14.7175 10.2475 14.9975 10.2475H32.9975C35.6175 10.2475 37.7475 12.3775 37.7475 14.9975V32.9975C37.7475 33.2775 37.7175 33.5675 37.6575 33.8775C37.5875 34.2375 37.2775 34.4875 36.9175 34.4875C36.8675 34.4875 36.8275 34.4875 36.7775 34.4775C36.3675 34.3975 36.1075 34.0075 36.1775 33.5975C36.2175 33.3775 36.2375 33.1775 36.2375 32.9975V14.9975C36.2375 13.2075 34.7775 11.7475 32.9875 11.7475H14.9975C14.8075 11.7475 14.6175 11.7675 14.3975 11.8075C13.9875 11.8875 13.5975 11.6175 13.5175 11.2075V11.2175ZM34.4775 36.7775C34.5575 37.1875 34.2875 37.5775 33.8775 37.6575C33.5675 37.7175 33.2775 37.7475 32.9975 37.7475H14.9975C12.3775 37.7475 10.2475 35.6175 10.2475 32.9975V14.9975C10.2475 14.7175 10.2775 14.4275 10.3375 14.1175C10.4175 13.7075 10.8075 13.4375 11.2175 13.5175C11.6275 13.5975 11.8875 13.9875 11.8175 14.3975C11.7775 14.6175 11.7575 14.8175 11.7575 14.9975V32.9975C11.7575 34.7875 13.2175 36.2475 15.0075 36.2475H33.0075C33.1975 36.2475 33.3875 36.2275 33.6075 36.1875C34.0075 36.1075 34.4075 36.3775 34.4875 36.7875L34.4775 36.7775ZM15.8275 31.7975C15.6975 31.9375 15.7575 32.0875 15.7775 32.1175C15.8175 32.1975 15.8675 32.2475 15.9375 32.2475H29.8175C30.2275 32.2475 30.5675 32.5875 30.5675 32.9975C30.5675 33.4075 30.2275 33.7475 29.8175 33.7475H15.9375C15.2675 33.7475 14.6775 33.3475 14.3975 32.7175C14.1075 32.0575 14.2375 31.2975 14.7275 30.7775L19.7275 25.2775C20.0475 24.9275 20.5075 24.7175 20.9875 24.7075C21.4875 24.7275 21.9375 24.8875 22.2675 25.2275L25.4675 28.4775C25.7575 28.7675 25.7575 29.2475 25.4675 29.5375C25.1675 29.8275 24.6975 29.8275 24.4075 29.5375L21.2075 26.2875C21.1475 26.2175 21.0675 26.1875 21.0275 26.2075C20.9875 26.2075 20.9075 26.2175 20.8475 26.2875L15.8375 31.7975H15.8275ZM38.5275 38.5275C38.3775 38.6775 38.1875 38.7475 37.9975 38.7475C37.8075 38.7475 37.6175 38.6775 37.4675 38.5275L9.4675 10.5275C9.1775 10.2375 9.1775 9.7575 9.4675 9.4675C9.7575 9.1775 10.2375 9.1775 10.5275 9.4675L38.5275 37.4675C38.8175 37.7575 38.8175 38.2375 38.5275 38.5275Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/ranking-arrows.svg":
/*!******************************************!*\
  !*** ./src/images-v2/ranking-arrows.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 10 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 5L5 0L0 5H4V9H6V5H10Z\"></path><path d=\"M6 19V15H4V19H0L5 24L10 19H6Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/rankingundefined-16x16.svg":
/*!**************************************************!*\
  !*** ./src/images-v2/rankingundefined-16x16.svg ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11.75 8C11.75 8.41 11.41 8.75 11 8.75H5C4.59 8.75 4.25 8.41 4.25 8C4.25 7.59 4.59 7.25 5 7.25H11C11.41 7.25 11.75 7.59 11.75 8Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/rating-star-2.svg":
/*!*****************************************!*\
  !*** ./src/images-v2/rating-star-2.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\" fill=\"none\" stroke-width=\"2\"></path><path d=\"M24.3981 33.1305L24 32.9206L23.6019 33.1305L15.8715 37.2059L17.3542 28.5663L17.43 28.1246L17.1095 27.8113L10.83 21.6746L19.4965 20.4049L19.9405 20.3399L20.1387 19.9373L24 12.0936L27.8613 19.9373L28.0595 20.3399L28.5035 20.4049L37.17 21.6746L30.8905 27.8113L30.57 28.1246L30.6458 28.5663L32.1285 37.2059L24.3981 33.1305Z\" stroke-width=\"1.70746\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/rating-star-small-2.svg":
/*!***********************************************!*\
  !*** ./src/images-v2/rating-star-small-2.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\" fill=\"none\" stroke-width=\"2\"></path><path d=\"M12 15.9472L8.58001 17.7572L9.23001 13.9272L6.45001 11.2072L10.29 10.6472L12 7.17725L13.71 10.6472L17.55 11.2072L14.77 13.9272L15.42 17.7572L12 15.9472Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/rating-star-small.svg":
/*!*********************************************!*\
  !*** ./src/images-v2/rating-star-small.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M12 19.3373L6.13001 22.4373C5.50001 22.7673 4.77001 22.2373 4.89001 21.5373L6.01001 14.9773L1.26001 10.3273C0.750007 9.83728 1.03001 8.96728 1.73001 8.86728L8.29001 7.90728L11.23 1.93728C11.54 1.29728 12.45 1.29728 12.77 1.93728L15.7 7.90728L22.26 8.86728C22.96 8.96728 23.24 9.83728 22.73 10.3273L17.98 14.9773L19.1 21.5373C19.22 22.2373 18.49 22.7773 17.86 22.4373L11.99 19.3373H12Z\"></path></g></svg>"

/***/ }),

/***/ "./src/images-v2/rating-star.svg":
/*!***************************************!*\
  !*** ./src/images-v2/rating-star.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 48 48\" xmlns=\"http://www.w3.org/2000/svg\"><g><path d=\"M24 39.5057L11.7226 45.9839C10.4095 46.6739 8.87606 45.5622 9.12525 44.096L11.4734 30.373L1.54411 20.6556C0.480254 19.6207 1.06489 17.8095 2.53128 17.5986L16.2559 15.5957L22.3994 3.10891C23.0512 1.77685 24.9488 1.77685 25.6102 3.10891L31.7441 15.5957L45.4687 17.5986C46.9351 17.8095 47.5197 19.6207 46.4559 20.6556L36.5266 30.373L38.8748 44.096C39.1239 45.5622 37.5905 46.6835 36.2774 45.9839L24 39.5057Z\"></path></g></svg>"

/***/ }),

/***/ "./src/images-v2/reorder-24x24.svg":
/*!*****************************************!*\
  !*** ./src/images-v2/reorder-24x24.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.9444 10.75H15.0544C15.7144 10.75 16.3144 10.39 16.6144 9.80002C16.9144 9.22002 16.8644 8.52002 16.4844 7.98002L13.4244 3.71002C12.7644 2.79002 11.2344 2.79002 10.5744 3.71002L7.5244 7.99002C7.1444 8.53002 7.0944 9.22002 7.3944 9.81002C7.6944 10.4 8.2944 10.76 8.9544 10.76L8.9444 10.75ZM8.7444 8.86002L11.7944 4.58002C11.8644 4.49002 11.9544 4.48002 11.9944 4.48002C12.0344 4.48002 12.1344 4.49002 12.1944 4.58002L15.2544 8.86002C15.3344 8.97002 15.3044 9.07002 15.2744 9.12002C15.2444 9.17002 15.1844 9.26002 15.0544 9.26002H8.9444C8.8144 9.26002 8.7444 9.18002 8.7244 9.12002C8.7044 9.06002 8.6644 8.97002 8.7444 8.86002ZM15.0544 13.25H8.9444C8.2844 13.25 7.6844 13.61 7.3844 14.2C7.0844 14.78 7.1344 15.48 7.5144 16.02L10.5744 20.3C10.9044 20.76 11.4344 21.03 11.9944 21.03C12.5544 21.03 13.0944 20.76 13.4144 20.3L16.4744 16.02C16.8544 15.48 16.9044 14.79 16.6044 14.2C16.3044 13.61 15.7044 13.25 15.0444 13.25H15.0544ZM15.2644 15.15L12.2044 19.43C12.0744 19.61 11.9244 19.61 11.7944 19.43L8.7344 15.15C8.6544 15.04 8.6844 14.94 8.7144 14.89C8.7444 14.84 8.8044 14.75 8.9344 14.75H15.0444C15.1744 14.75 15.2444 14.83 15.2644 14.89C15.2844 14.95 15.3244 15.04 15.2444 15.15H15.2644Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/restoredown-16x16.svg":
/*!*********************************************!*\
  !*** ./src/images-v2/restoredown-16x16.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.69 8.71C7.73 8.8 7.75 8.9 7.75 9V13C7.75 13.41 7.41 13.75 7 13.75C6.59 13.75 6.25 13.41 6.25 13V10.81L3.53 13.53C3.38 13.68 3.19 13.75 3 13.75C2.81 13.75 2.62 13.68 2.47 13.53C2.18 13.24 2.18 12.76 2.47 12.47L5.19 9.75H3C2.59 9.75 2.25 9.41 2.25 9C2.25 8.59 2.59 8.25 3 8.25H7C7.1 8.25 7.19 8.27 7.29 8.31C7.47 8.39 7.62 8.53 7.7 8.72L7.69 8.71ZM13 6.25H10.81L13.53 3.53C13.82 3.24 13.82 2.76 13.53 2.47C13.24 2.18 12.76 2.18 12.47 2.47L9.75 5.19V3C9.75 2.59 9.41 2.25 9 2.25C8.59 2.25 8.25 2.59 8.25 3V7C8.25 7.1 8.27 7.19 8.31 7.29C8.39 7.47 8.53 7.62 8.72 7.7C8.81 7.74 8.91 7.76 9.01 7.76H13.01C13.42 7.76 13.76 7.42 13.76 7.01C13.76 6.6 13.42 6.26 13.01 6.26L13 6.25Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/search-24x24.svg":
/*!****************************************!*\
  !*** ./src/images-v2/search-24x24.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.9975 2.25C9.7275 2.25 6.2475 5.73 6.2475 10C6.2475 11.87 6.9075 13.58 8.0175 14.92L2.4675 20.47C2.1775 20.76 2.1775 21.24 2.4675 21.53C2.6175 21.68 2.8075 21.75 2.9975 21.75C3.1875 21.75 3.3775 21.68 3.5275 21.53L9.0775 15.98C10.4175 17.08 12.1275 17.75 13.9975 17.75C18.2675 17.75 21.7475 14.27 21.7475 10C21.7475 5.73 18.2675 2.25 13.9975 2.25ZM13.9975 16.25C10.5475 16.25 7.7475 13.45 7.7475 10C7.7475 6.55 10.5475 3.75 13.9975 3.75C17.4475 3.75 20.2475 6.55 20.2475 10C20.2475 13.45 17.4475 16.25 13.9975 16.25Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/smiley-rate1-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v2/smiley-rate1-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 4.9938C4 4.44362 4.45 3.99348 5 3.99348H6.59L5.3 2.70306C4.91 2.31293 4.91 1.68272 5.3 1.2926C5.69 0.902468 6.32 0.902468 6.71 1.2926L9.71 4.29357C9.8 4.3836 9.88 4.49364 9.93 4.62368C10.03 4.86376 10.03 5.14385 9.93 5.38393C9.88 5.50397 9.81 5.614 9.71 5.71404L6.71 8.71501C6.51 8.91508 6.26 9.00511 6 9.00511C5.74 9.00511 5.49 8.90508 5.29 8.71501C4.9 8.32489 4.9 7.69468 5.29 7.30456L6.58 6.01413H4.99C4.44 6.01413 3.99 5.56399 3.99 5.01381L4 4.9938ZM14.08 5.37393C14.13 5.49397 14.2 5.604 14.3 5.70403L17.3 8.70501C17.5 8.90508 17.75 8.99511 18.01 8.99511C18.27 8.99511 18.52 8.89507 18.72 8.70501C19.11 8.31488 19.11 7.68468 18.72 7.29455L17.43 6.00413H19.02C19.57 6.00413 20.02 5.55399 20.02 5.00381C20.02 4.45363 19.57 4.00348 19.02 4.00348H17.43L18.72 2.71306C19.11 2.32293 19.11 1.69273 18.72 1.3026C18.33 0.912471 17.7 0.912471 17.31 1.3026L14.31 4.30358C14.22 4.39361 14.14 4.50364 14.09 4.63368C13.99 4.87376 13.99 5.15385 14.09 5.39393L14.08 5.37393ZM22 14.9971V20.999C22 22.6496 20.65 24 19 24H5C3.35 24 2 22.6496 2 20.999V14.9971C2 13.3465 3.35 11.9961 5 11.9961H19C20.65 11.9961 22 13.3465 22 14.9971ZM19 13.9967H16V16.9977H20V14.9971C20 14.4469 19.55 13.9967 19 13.9967ZM14 16.9977V13.9967H10V16.9977H14ZM10 18.9984V21.9993H14V18.9984H10ZM4 14.9971V16.9977H8V13.9967H5C4.45 13.9967 4 14.4469 4 14.9971ZM5 21.9993H8V18.9984H4V20.999C4 21.5492 4.45 21.9993 5 21.9993ZM20 20.999V18.9984H16V21.9993H19C19.55 21.9993 20 21.5492 20 20.999Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/smiley-rate10-24x24.svg":
/*!***********************************************!*\
  !*** ./src/images-v2/smiley-rate10-24x24.svg ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 23C6.85721 23 1.15412 19.9621 0.0134987 13.1669C-0.0765501 12.6272 0.293651 12.1076 0.833944 12.0177C1.38424 11.9277 1.89452 12.2975 1.98457 12.8371C2.92508 18.4732 7.69767 20.9914 12 20.9914C16.3023 20.9914 21.0749 18.4732 22.0154 12.8371C22.1055 12.2975 22.6158 11.9277 23.1661 12.0177C23.7063 12.1076 24.0765 12.6272 23.9865 13.1669C22.8559 19.9521 17.1428 23 11.99 23H12.01ZM21.165 6.15177C22.3056 5.01257 22.3056 3.16386 21.165 2.02465L21.0049 1.85477C19.9143 0.765533 18.1633 0.725561 17.0227 1.71487C15.8821 0.715568 14.1312 0.765533 13.0406 1.85477L12.8705 2.01466C11.7299 3.15386 11.7299 5.00257 12.8705 6.14178L17.0227 10.2889L21.175 6.14178L21.165 6.15177ZM15.742 3.27378L17.0127 4.54289L18.2834 3.27378C18.6436 2.91403 19.2239 2.91403 19.5841 3.27378L19.7442 3.43367C20.1044 3.79342 20.1044 4.37301 19.7442 4.73276L17.0127 7.46086L14.2812 4.73276C13.921 4.37301 13.921 3.79342 14.2812 3.43367L14.4413 3.27378C14.6214 3.09391 14.8515 3.00397 15.0917 3.00397C15.3318 3.00397 15.5619 3.09391 15.742 3.27378ZM11.1595 6.15177C12.3002 5.01257 12.3002 3.16386 11.1595 2.02465L10.9995 1.85477C9.90886 0.765533 8.15792 0.725561 7.0173 1.71487C5.87668 0.715568 4.12573 0.765533 3.03514 1.85477L2.86505 2.01466C1.72443 3.15386 1.72443 5.00257 2.86505 6.14178L7.0173 10.2889L11.1695 6.14178L11.1595 6.15177ZM5.7366 3.27378L7.00729 4.54289L8.27798 3.27378C8.63818 2.91403 9.21849 2.91403 9.57869 3.27378L9.73877 3.43367C10.099 3.79342 10.099 4.37301 9.73877 4.73276L7.00729 7.46086L4.27581 4.73276C3.91562 4.37301 3.91562 3.79342 4.27581 3.43367L4.4359 3.27378C4.61599 3.09391 4.84612 3.00397 5.08625 3.00397C5.32638 3.00397 5.5565 3.09391 5.7366 3.27378Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/smiley-rate2-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v2/smiley-rate2-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_15894_140103)\"><path d=\"M4.88291 4.51001C4.47291 4.51001 4.08291 4.25001 3.94291 3.84001C3.76291 3.32001 4.03291 2.75001 4.55291 2.57001L8.32291 1.25001C8.84291 1.06001 9.41291 1.34001 9.59291 1.86001C9.77291 2.38001 9.50291 2.95001 8.98291 3.13001L5.20291 4.45001C5.09291 4.49001 4.98291 4.51001 4.87291 4.51001H4.88291ZM19.8129 3.89001C20.0229 3.38001 19.7729 2.79001 19.2629 2.59001L15.5529 1.07001C15.0429 0.860007 14.4529 1.11001 14.2529 1.62001C14.0429 2.13001 14.2929 2.72001 14.8029 2.92001L18.5029 4.43001C18.6229 4.48001 18.7529 4.50001 18.8829 4.50001C19.2729 4.50001 19.6529 4.27001 19.8129 3.88001V3.89001ZM3.50291 6.00001C2.64291 6.37001 1.79291 6.88001 1.00291 7.48001C0.79291 7.64001 0.64291 7.87001 0.59291 8.14001C0.48291 8.73001 0.87291 9.29001 1.45291 9.40001C2.04291 9.51001 2.60291 9.12001 2.71291 8.54001C2.87291 7.69001 3.12291 6.83001 3.50291 5.99001V6.00001ZM21.0429 8.55001C21.6029 10.48 24.2429 8.84001 22.7529 7.48001C21.9629 6.88001 21.1129 6.37001 20.2529 6.00001C20.6329 6.84001 20.8829 7.70001 21.0429 8.55001ZM21.5729 13.2C21.2529 14.2 22.5429 15.09 23.3629 14.39C23.8529 14 23.9229 13.29 23.5429 12.81C21.7429 10.67 22.1329 10.55 21.5829 13.2H21.5729ZM1.75291 11C1.22291 11.79 -0.14709 12.64 0.0129102 13.75C0.15291 14.36 0.75291 14.74 1.35291 14.6C2.98291 14.1 1.80291 12.22 1.75291 11ZM19.8829 17C19.8829 13.14 16.2929 10 11.8829 10C7.47291 10 3.88291 13.14 3.88291 17C3.88291 20.86 7.47291 24 11.8829 24C16.2929 24 19.8829 20.86 19.8829 17ZM17.8829 17C17.8829 19.76 15.1929 22 11.8829 22C8.57291 22 5.88291 19.76 5.88291 17C5.88291 14.24 8.57291 12 11.8829 12C15.1929 12 17.8829 14.24 17.8829 17Z\"></path></g><defs><clipPath id=\"clip0_15894_140103\"><rect width=\"24\" height=\"24\" fill=\"white\"></rect></clipPath></defs></svg>"

/***/ }),

/***/ "./src/images-v2/smiley-rate3-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v2/smiley-rate3-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.01915 7C6.46961 7 6.01998 6.55 6.01998 6V2C6.01998 1.45 6.46961 1 7.01915 1C7.56869 1 8.01832 1.45 8.01832 2V6C8.01832 6.55 7.56869 7 7.01915 7ZM18.01 6V2C18.01 1.45 17.5604 1 17.0108 1C16.4613 1 16.0117 1.45 16.0117 2V6C16.0117 6.55 16.4613 7 17.0108 7C17.5604 7 18.01 6.55 18.01 6ZM16.4213 21.58L18.01 19.99L19.2989 21.28C19.6886 21.67 20.3181 21.67 20.7077 21.28C21.0974 20.89 21.0974 20.26 20.7077 19.87L19.4188 18.58C18.6395 17.8 17.3705 17.8 16.5912 18.58L15.0025 20.17L13.4138 18.58C12.6345 17.8 11.3655 17.8 10.5862 18.58L8.9975 20.17L7.40883 18.58C6.62948 17.8 5.36053 17.8 4.58118 18.58L3.29226 19.87C2.90258 20.26 2.90258 20.89 3.29226 21.28C3.68193 21.67 4.31141 21.67 4.70108 21.28L5.99001 19.99L7.57868 21.58C8.35803 22.36 9.62698 22.36 10.4063 21.58L11.995 19.99L13.5837 21.58C13.9734 21.97 14.4829 22.16 14.9925 22.16C15.5021 22.16 16.0117 21.97 16.4013 21.58H16.4213Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/smiley-rate4-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v2/smiley-rate4-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.06927 7C6.51927 7 6.06927 6.55 6.06927 6V2C6.06927 1.45 6.51927 1 7.06927 1C7.61927 1 8.06927 1.45 8.06927 2V6C8.06927 6.55 7.61927 7 7.06927 7ZM18.0693 6V2C18.0693 1.45 17.6193 1 17.0693 1C16.5193 1 16.0693 1.45 16.0693 2V6C16.0693 6.55 16.5193 7 17.0693 7C17.6193 7 18.0693 6.55 18.0693 6ZM22.5693 21.9C23.0693 21.66 23.2793 21.07 23.0393 20.57C21.1093 16.52 16.9093 14 12.0693 14C7.22927 14 3.02927 16.52 1.09927 20.57C0.859273 21.07 1.06927 21.67 1.56927 21.9C2.06927 22.14 2.65927 21.93 2.89927 21.43C4.49927 18.08 8.00927 16 12.0593 16C16.1093 16 19.6293 18.08 21.2193 21.43C21.3893 21.79 21.7493 22 22.1193 22C22.2593 22 22.4093 21.97 22.5493 21.9H22.5693Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/smiley-rate5-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v2/smiley-rate5-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.00572 7C6.45572 7 6.00572 6.55 6.00572 6V2C6.00572 1.45 6.45572 1 7.00572 1C7.55572 1 8.00572 1.45 8.00572 2V6C8.00572 6.55 7.55572 7 7.00572 7ZM18.0057 6V2C18.0057 1.45 17.5557 1 17.0057 1C16.4557 1 16.0057 1.45 16.0057 2V6C16.0057 6.55 16.4557 7 17.0057 7C17.5557 7 18.0057 6.55 18.0057 6ZM19.9457 21.33C20.1257 20.81 19.8557 20.24 19.3357 20.05C14.5457 18.35 9.45572 18.35 4.66572 20.05C4.14572 20.23 3.87572 20.81 4.05572 21.33C4.23572 21.85 4.80572 22.12 5.33572 21.94C9.69572 20.4 14.3057 20.4 18.6657 21.94C18.7757 21.98 18.8857 22 18.9957 22C19.4057 22 19.7957 21.74 19.9357 21.33H19.9457Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/smiley-rate6-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v2/smiley-rate6-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 7C6.45 7 6 6.55 6 6V2C6 1.45 6.45 1 7 1C7.55 1 8 1.45 8 2V6C8 6.55 7.55 7 7 7ZM18 6V2C18 1.45 17.55 1 17 1C16.45 1 16 1.45 16 2V6C16 6.55 16.45 7 17 7C17.55 7 18 6.55 18 6ZM21 21C21 20.45 20.55 20 20 20H4C3.45 20 3 20.45 3 21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/smiley-rate7-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v2/smiley-rate7-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.0022 23.99C11.452 23.99 11.0018 23.5402 11.0018 22.9904C11.0018 22.4407 11.452 21.9909 12.0022 21.9909C16.3137 21.9909 21.0755 19.472 22.0158 13.8344C22.1058 13.2947 22.616 12.9248 23.1662 13.0148C23.7064 13.1047 24.0765 13.6245 23.9865 14.1643C22.8561 20.9513 17.144 24 11.9922 24L12.0022 23.99ZM8.00072 5.99783V1.99957C8.00072 1.4498 7.55056 1 7.00036 1C6.45016 1 6 1.4498 6 1.99957V5.99783C6 6.54759 6.45016 6.99739 7.00036 6.99739C7.55056 6.99739 8.00072 6.54759 8.00072 5.99783ZM18.0043 5.99783V1.99957C18.0043 1.4498 17.5542 1 17.004 1C16.4538 1 16.0036 1.4498 16.0036 1.99957V5.99783C16.0036 6.54759 16.4538 6.99739 17.004 6.99739C17.5542 6.99739 18.0043 6.54759 18.0043 5.99783Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/smiley-rate8-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v2/smiley-rate8-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85721 24 1.15412 20.96 0.0134987 14.16C-0.0765501 13.62 0.293651 13.1 0.833944 13.01C1.38424 12.92 1.89452 13.29 1.98457 13.83C2.92508 19.47 7.69767 21.99 12 21.99C16.3023 21.99 21.0749 19.47 22.0154 13.83C22.1055 13.29 22.6158 12.92 23.1661 13.01C23.7063 13.1 24.0765 13.62 23.9865 14.16C22.8559 20.95 17.1428 24 11.99 24H12.01ZM8.00783 6V2C8.00783 1.45 7.55759 1 7.00729 1C6.45699 1 6.00675 1.45 6.00675 2V6C6.00675 6.55 6.45699 7 7.00729 7C7.55759 7 8.00783 6.55 8.00783 6ZM18.0133 6V2C18.0133 1.45 17.563 1 17.0127 1C16.4624 1 16.0122 1.45 16.0122 2V6C16.0122 6.55 16.4624 7 17.0127 7C17.563 7 18.0133 6.55 18.0133 6Z\"></path></svg>"

/***/ }),

/***/ "./src/images-v2/smiley-rate9-24x24.svg":
/*!**********************************************!*\
  !*** ./src/images-v2/smiley-rate9-24x24.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.01 24C6.85767 24 1.15509 20.96 0.0145752 14.16C-0.0354475 13.87 0.0445888 13.57 0.234675 13.35C0.424761 13.13 0.704888 13 0.995019 13H23.005C23.2951 13 23.5752 13.13 23.7653 13.35C23.9554 13.57 24.0354 13.87 23.9854 14.16C22.8549 20.95 17.1423 24 11.99 24H12.01ZM2.25559 15C3.61621 19.82 8.0182 22 12.01 22C16.0018 22 20.4038 19.82 21.7644 15H2.25559ZM8.00819 6V2C8.00819 1.45 7.55799 1 7.00774 1C6.45749 1 6.00729 1.45 6.00729 2V6C6.00729 6.55 6.45749 7 7.00774 7C7.55799 7 8.00819 6.55 8.00819 6ZM18.0127 6V2C18.0127 1.45 17.5625 1 17.0123 1C16.462 1 16.0118 1.45 16.0118 2V6C16.0118 6.55 16.462 7 17.0123 7C17.5625 7 18.0127 6.55 18.0127 6Z\"></path></svg>"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_64535__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_64535__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_64535__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_64535__.o(definition, key) && !__nested_webpack_require_64535__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_64535__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_64535__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/iconsV2.ts ***!
  \************************/
__nested_webpack_require_64535__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_64535__.d(__nested_webpack_exports__, {
/* harmony export */   icons: () => (/* binding */ icons)
/* harmony export */ });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
var path = __nested_webpack_require_64535__("./src/images-v2 sync recursive \\.svg$");
var icons = {};
path.keys().forEach(function (key) {
    icons[key.substring(2, key.length - 4).toLowerCase()] = path(key);
});


})();

/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=iconsV2.js.map

/***/ }),

/***/ "../survey-react-ui/entries/react-ui-model.ts":
/*!****************************************************!*\
  !*** ../survey-react-ui/entries/react-ui-model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharacterCounterComponent: () => (/* reexport safe */ _src_components_character_counter__WEBPACK_IMPORTED_MODULE_82__.CharacterCounterComponent),
/* harmony export */   ComponentsContainer: () => (/* reexport safe */ _src_components_components_container__WEBPACK_IMPORTED_MODULE_81__.ComponentsContainer),
/* harmony export */   Header: () => (/* reexport safe */ _src_components_header__WEBPACK_IMPORTED_MODULE_83__.Header),
/* harmony export */   HeaderCell: () => (/* reexport safe */ _src_components_header__WEBPACK_IMPORTED_MODULE_83__.HeaderCell),
/* harmony export */   HeaderMobile: () => (/* reexport safe */ _src_components_header__WEBPACK_IMPORTED_MODULE_83__.HeaderMobile),
/* harmony export */   List: () => (/* reexport safe */ _src_components_list_list__WEBPACK_IMPORTED_MODULE_59__.List),
/* harmony export */   ListItemContent: () => (/* reexport safe */ _src_components_list_list_item_content__WEBPACK_IMPORTED_MODULE_57__.ListItemContent),
/* harmony export */   ListItemGroup: () => (/* reexport safe */ _src_components_list_list_item_group__WEBPACK_IMPORTED_MODULE_58__.ListItemGroup),
/* harmony export */   LoadingIndicatorComponent: () => (/* reexport safe */ _src_components_loading_indicator__WEBPACK_IMPORTED_MODULE_86__.LoadingIndicatorComponent),
/* harmony export */   LogoImage: () => (/* reexport safe */ _src_components_survey_header_logo_image__WEBPACK_IMPORTED_MODULE_63__.LogoImage),
/* harmony export */   MatrixRow: () => (/* reexport safe */ _src_components_matrix_row__WEBPACK_IMPORTED_MODULE_77__.MatrixRow),
/* harmony export */   NotifierComponent: () => (/* reexport safe */ _src_components_notifier__WEBPACK_IMPORTED_MODULE_80__.NotifierComponent),
/* harmony export */   Popup: () => (/* reexport safe */ _src_components_popup_popup__WEBPACK_IMPORTED_MODULE_56__.Popup),
/* harmony export */   PopupModal: () => (/* reexport safe */ _src_components_popup_popup_modal__WEBPACK_IMPORTED_MODULE_88__.PopupModal),
/* harmony export */   PopupSurvey: () => (/* reexport safe */ _src_react_popup_survey__WEBPACK_IMPORTED_MODULE_47__.PopupSurvey),
/* harmony export */   QuestionErrorComponent: () => (/* reexport safe */ _src_components_question_error__WEBPACK_IMPORTED_MODULE_75__.QuestionErrorComponent),
/* harmony export */   RatingDropdownItem: () => (/* reexport safe */ _src_components_rating_rating_dropdown_item__WEBPACK_IMPORTED_MODULE_16__.RatingDropdownItem),
/* harmony export */   RatingItem: () => (/* reexport safe */ _src_components_rating_rating_item__WEBPACK_IMPORTED_MODULE_13__.RatingItem),
/* harmony export */   RatingItemSmiley: () => (/* reexport safe */ _src_components_rating_rating_item_smiley__WEBPACK_IMPORTED_MODULE_15__.RatingItemSmiley),
/* harmony export */   RatingItemStar: () => (/* reexport safe */ _src_components_rating_rating_item_star__WEBPACK_IMPORTED_MODULE_14__.RatingItemStar),
/* harmony export */   ReactElementFactory: () => (/* reexport safe */ _src_element_factory__WEBPACK_IMPORTED_MODULE_49__.ReactElementFactory),
/* harmony export */   ReactQuestionFactory: () => (/* reexport safe */ _src_reactquestion_factory__WEBPACK_IMPORTED_MODULE_48__.ReactQuestionFactory),
/* harmony export */   ReactSurveyElement: () => (/* reexport safe */ _src_reactquestion_element__WEBPACK_IMPORTED_MODULE_9__.ReactSurveyElement),
/* harmony export */   ReactSurveyElementsWrapper: () => (/* reexport safe */ _src_reactsurveymodel__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElementsWrapper),
/* harmony export */   Scroll: () => (/* reexport safe */ _src_components_scroll__WEBPACK_IMPORTED_MODULE_79__.Scroll),
/* harmony export */   Skeleton: () => (/* reexport safe */ _src_components_skeleton__WEBPACK_IMPORTED_MODULE_78__.Skeleton),
/* harmony export */   SliderLabelItem: () => (/* reexport safe */ _src_components_slider_slider_label_item__WEBPACK_IMPORTED_MODULE_76__.SliderLabelItem),
/* harmony export */   Survey: () => (/* reexport safe */ _src_reactSurvey__WEBPACK_IMPORTED_MODULE_0__.Survey),
/* harmony export */   SurveyActionBar: () => (/* reexport safe */ _src_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_62__.SurveyActionBar),
/* harmony export */   SurveyElementBase: () => (/* reexport safe */ _src_reactquestion_element__WEBPACK_IMPORTED_MODULE_9__.SurveyElementBase),
/* harmony export */   SurveyElementErrors: () => (/* reexport safe */ _src_reactquestion__WEBPACK_IMPORTED_MODULE_8__.SurveyElementErrors),
/* harmony export */   SurveyFileChooseButton: () => (/* reexport safe */ _src_components_file_file_choose_button__WEBPACK_IMPORTED_MODULE_27__.SurveyFileChooseButton),
/* harmony export */   SurveyFilePreview: () => (/* reexport safe */ _src_components_file_file_preview__WEBPACK_IMPORTED_MODULE_28__.SurveyFilePreview),
/* harmony export */   SurveyFlowPanel: () => (/* reexport safe */ _src_flow_panel__WEBPACK_IMPORTED_MODULE_7__.SurveyFlowPanel),
/* harmony export */   SurveyHeader: () => (/* reexport safe */ _src_components_survey_header_survey_header__WEBPACK_IMPORTED_MODULE_64__.SurveyHeader),
/* harmony export */   SurveyLocStringEditor: () => (/* reexport safe */ _src_string_editor__WEBPACK_IMPORTED_MODULE_85__.SurveyLocStringEditor),
/* harmony export */   SurveyLocStringViewer: () => (/* reexport safe */ _src_string_viewer__WEBPACK_IMPORTED_MODULE_84__.SurveyLocStringViewer),
/* harmony export */   SurveyNavigationBase: () => (/* reexport safe */ _src_reactSurveyNavigationBase__WEBPACK_IMPORTED_MODULE_2__.SurveyNavigationBase),
/* harmony export */   SurveyNavigationButton: () => (/* reexport safe */ _src_components_survey_actions_survey_nav_button__WEBPACK_IMPORTED_MODULE_74__.SurveyNavigationButton),
/* harmony export */   SurveyPage: () => (/* reexport safe */ _src_page__WEBPACK_IMPORTED_MODULE_4__.SurveyPage),
/* harmony export */   SurveyPanel: () => (/* reexport safe */ _src_panel__WEBPACK_IMPORTED_MODULE_6__.SurveyPanel),
/* harmony export */   SurveyProgress: () => (/* reexport safe */ _src_progress__WEBPACK_IMPORTED_MODULE_40__.SurveyProgress),
/* harmony export */   SurveyProgressButtons: () => (/* reexport safe */ _src_progressButtons__WEBPACK_IMPORTED_MODULE_41__.SurveyProgressButtons),
/* harmony export */   SurveyProgressToc: () => (/* reexport safe */ _src_progressToc__WEBPACK_IMPORTED_MODULE_42__.SurveyProgressToc),
/* harmony export */   SurveyQuestion: () => (/* reexport safe */ _src_reactquestion__WEBPACK_IMPORTED_MODULE_8__.SurveyQuestion),
/* harmony export */   SurveyQuestionAndErrorsCell: () => (/* reexport safe */ _src_reactquestion__WEBPACK_IMPORTED_MODULE_8__.SurveyQuestionAndErrorsCell),
/* harmony export */   SurveyQuestionBoolean: () => (/* reexport safe */ _src_boolean__WEBPACK_IMPORTED_MODULE_32__.SurveyQuestionBoolean),
/* harmony export */   SurveyQuestionBooleanCheckbox: () => (/* reexport safe */ _src_boolean_checkbox__WEBPACK_IMPORTED_MODULE_33__.SurveyQuestionBooleanCheckbox),
/* harmony export */   SurveyQuestionBooleanRadio: () => (/* reexport safe */ _src_boolean_radio__WEBPACK_IMPORTED_MODULE_34__.SurveyQuestionBooleanRadio),
/* harmony export */   SurveyQuestionButtonGroup: () => (/* reexport safe */ _src_reactquestion_buttongroup__WEBPACK_IMPORTED_MODULE_53__.SurveyQuestionButtonGroup),
/* harmony export */   SurveyQuestionButtonGroupDropdown: () => (/* reexport safe */ _src_buttongroup_dropdown__WEBPACK_IMPORTED_MODULE_54__.SurveyQuestionButtonGroupDropdown),
/* harmony export */   SurveyQuestionCheckbox: () => (/* reexport safe */ _src_reactquestion_checkbox__WEBPACK_IMPORTED_MODULE_11__.SurveyQuestionCheckbox),
/* harmony export */   SurveyQuestionCheckboxItem: () => (/* reexport safe */ _src_reactquestion_checkbox__WEBPACK_IMPORTED_MODULE_11__.SurveyQuestionCheckboxItem),
/* harmony export */   SurveyQuestionComment: () => (/* reexport safe */ _src_reactquestion_comment__WEBPACK_IMPORTED_MODULE_10__.SurveyQuestionComment),
/* harmony export */   SurveyQuestionCommentItem: () => (/* reexport safe */ _src_reactquestion_comment__WEBPACK_IMPORTED_MODULE_10__.SurveyQuestionCommentItem),
/* harmony export */   SurveyQuestionComposite: () => (/* reexport safe */ _src_reactquestion_custom__WEBPACK_IMPORTED_MODULE_55__.SurveyQuestionComposite),
/* harmony export */   SurveyQuestionCustom: () => (/* reexport safe */ _src_reactquestion_custom__WEBPACK_IMPORTED_MODULE_55__.SurveyQuestionCustom),
/* harmony export */   SurveyQuestionDropdown: () => (/* reexport safe */ _src_reactquestion_dropdown__WEBPACK_IMPORTED_MODULE_20__.SurveyQuestionDropdown),
/* harmony export */   SurveyQuestionDropdownBase: () => (/* reexport safe */ _src_dropdown_base__WEBPACK_IMPORTED_MODULE_19__.SurveyQuestionDropdownBase),
/* harmony export */   SurveyQuestionDropdownSelect: () => (/* reexport safe */ _src_dropdown_select__WEBPACK_IMPORTED_MODULE_23__.SurveyQuestionDropdownSelect),
/* harmony export */   SurveyQuestionElementBase: () => (/* reexport safe */ _src_reactquestion_element__WEBPACK_IMPORTED_MODULE_9__.SurveyQuestionElementBase),
/* harmony export */   SurveyQuestionEmpty: () => (/* reexport safe */ _src_reactquestion_empty__WEBPACK_IMPORTED_MODULE_35__.SurveyQuestionEmpty),
/* harmony export */   SurveyQuestionExpression: () => (/* reexport safe */ _src_reactquestion_expression__WEBPACK_IMPORTED_MODULE_46__.SurveyQuestionExpression),
/* harmony export */   SurveyQuestionFile: () => (/* reexport safe */ _src_reactquestion_file__WEBPACK_IMPORTED_MODULE_26__.SurveyQuestionFile),
/* harmony export */   SurveyQuestionHtml: () => (/* reexport safe */ _src_reactquestion_html__WEBPACK_IMPORTED_MODULE_25__.SurveyQuestionHtml),
/* harmony export */   SurveyQuestionImage: () => (/* reexport safe */ _src_image__WEBPACK_IMPORTED_MODULE_51__.SurveyQuestionImage),
/* harmony export */   SurveyQuestionImagePicker: () => (/* reexport safe */ _src_imagepicker__WEBPACK_IMPORTED_MODULE_50__.SurveyQuestionImagePicker),
/* harmony export */   SurveyQuestionMatrix: () => (/* reexport safe */ _src_reactquestion_matrix__WEBPACK_IMPORTED_MODULE_24__.SurveyQuestionMatrix),
/* harmony export */   SurveyQuestionMatrixCell: () => (/* reexport safe */ _src_reactquestion_matrix__WEBPACK_IMPORTED_MODULE_24__.SurveyQuestionMatrixCell),
/* harmony export */   SurveyQuestionMatrixDetailButton: () => (/* reexport safe */ _src_components_matrix_actions_detail_button_detail_button__WEBPACK_IMPORTED_MODULE_67__.SurveyQuestionMatrixDetailButton),
/* harmony export */   SurveyQuestionMatrixDropdown: () => (/* reexport safe */ _src_reactquestion_matrixdropdown__WEBPACK_IMPORTED_MODULE_37__.SurveyQuestionMatrixDropdown),
/* harmony export */   SurveyQuestionMatrixDropdownBase: () => (/* reexport safe */ _src_reactquestion_matrixdropdownbase__WEBPACK_IMPORTED_MODULE_36__.SurveyQuestionMatrixDropdownBase),
/* harmony export */   SurveyQuestionMatrixDropdownCell: () => (/* reexport safe */ _src_reactquestion_matrixdropdownbase__WEBPACK_IMPORTED_MODULE_36__.SurveyQuestionMatrixDropdownCell),
/* harmony export */   SurveyQuestionMatrixDynamic: () => (/* reexport safe */ _src_reactquestion_matrixdynamic__WEBPACK_IMPORTED_MODULE_38__.SurveyQuestionMatrixDynamic),
/* harmony export */   SurveyQuestionMatrixDynamicAddButton: () => (/* reexport safe */ _src_reactquestion_matrixdynamic__WEBPACK_IMPORTED_MODULE_38__.SurveyQuestionMatrixDynamicAddButton),
/* harmony export */   SurveyQuestionMatrixDynamicDragDropIcon: () => (/* reexport safe */ _src_components_matrix_actions_drag_drop_icon_drag_drop_icon__WEBPACK_IMPORTED_MODULE_68__.SurveyQuestionMatrixDynamicDragDropIcon),
/* harmony export */   SurveyQuestionMatrixDynamicRemoveButton: () => (/* reexport safe */ _src_components_matrix_actions_remove_button_remove_button__WEBPACK_IMPORTED_MODULE_66__.SurveyQuestionMatrixDynamicRemoveButton),
/* harmony export */   SurveyQuestionMatrixRow: () => (/* reexport safe */ _src_reactquestion_matrix__WEBPACK_IMPORTED_MODULE_24__.SurveyQuestionMatrixRow),
/* harmony export */   SurveyQuestionMultipleText: () => (/* reexport safe */ _src_reactquestion_multipletext__WEBPACK_IMPORTED_MODULE_29__.SurveyQuestionMultipleText),
/* harmony export */   SurveyQuestionOptionItem: () => (/* reexport safe */ _src_dropdown_item__WEBPACK_IMPORTED_MODULE_18__.SurveyQuestionOptionItem),
/* harmony export */   SurveyQuestionPanelDynamic: () => (/* reexport safe */ _src_reactquestion_paneldynamic__WEBPACK_IMPORTED_MODULE_39__.SurveyQuestionPanelDynamic),
/* harmony export */   SurveyQuestionPanelDynamicAddButton: () => (/* reexport safe */ _src_components_paneldynamic_actions_paneldynamic_add_btn__WEBPACK_IMPORTED_MODULE_69__.SurveyQuestionPanelDynamicAddButton),
/* harmony export */   SurveyQuestionPanelDynamicNextButton: () => (/* reexport safe */ _src_components_paneldynamic_actions_paneldynamic_next_btn__WEBPACK_IMPORTED_MODULE_72__.SurveyQuestionPanelDynamicNextButton),
/* harmony export */   SurveyQuestionPanelDynamicPrevButton: () => (/* reexport safe */ _src_components_paneldynamic_actions_paneldynamic_prev_btn__WEBPACK_IMPORTED_MODULE_71__.SurveyQuestionPanelDynamicPrevButton),
/* harmony export */   SurveyQuestionPanelDynamicProgressText: () => (/* reexport safe */ _src_components_paneldynamic_actions_paneldynamic_progress_text__WEBPACK_IMPORTED_MODULE_73__.SurveyQuestionPanelDynamicProgressText),
/* harmony export */   SurveyQuestionPanelDynamicRemoveButton: () => (/* reexport safe */ _src_components_paneldynamic_actions_paneldynamic_remove_btn__WEBPACK_IMPORTED_MODULE_70__.SurveyQuestionPanelDynamicRemoveButton),
/* harmony export */   SurveyQuestionRadioItem: () => (/* reexport safe */ _src_reactquestion_radiogroup__WEBPACK_IMPORTED_MODULE_30__.SurveyQuestionRadioItem),
/* harmony export */   SurveyQuestionRadiogroup: () => (/* reexport safe */ _src_reactquestion_radiogroup__WEBPACK_IMPORTED_MODULE_30__.SurveyQuestionRadiogroup),
/* harmony export */   SurveyQuestionRanking: () => (/* reexport safe */ _src_reactquestion_ranking__WEBPACK_IMPORTED_MODULE_12__.SurveyQuestionRanking),
/* harmony export */   SurveyQuestionRankingItem: () => (/* reexport safe */ _src_reactquestion_ranking__WEBPACK_IMPORTED_MODULE_12__.SurveyQuestionRankingItem),
/* harmony export */   SurveyQuestionRankingItemContent: () => (/* reexport safe */ _src_reactquestion_ranking__WEBPACK_IMPORTED_MODULE_12__.SurveyQuestionRankingItemContent),
/* harmony export */   SurveyQuestionRating: () => (/* reexport safe */ _src_reactquestion_rating__WEBPACK_IMPORTED_MODULE_43__.SurveyQuestionRating),
/* harmony export */   SurveyQuestionRatingDropdown: () => (/* reexport safe */ _src_rating_dropdown__WEBPACK_IMPORTED_MODULE_44__.SurveyQuestionRatingDropdown),
/* harmony export */   SurveyQuestionSignaturePad: () => (/* reexport safe */ _src_signaturepad__WEBPACK_IMPORTED_MODULE_52__.SurveyQuestionSignaturePad),
/* harmony export */   SurveyQuestionSlider: () => (/* reexport safe */ _src_reactquestion_slider__WEBPACK_IMPORTED_MODULE_45__.SurveyQuestionSlider),
/* harmony export */   SurveyQuestionTagbox: () => (/* reexport safe */ _src_reactquestion_tagbox__WEBPACK_IMPORTED_MODULE_22__.SurveyQuestionTagbox),
/* harmony export */   SurveyQuestionTagboxItem: () => (/* reexport safe */ _src_tagbox_item__WEBPACK_IMPORTED_MODULE_21__.SurveyQuestionTagboxItem),
/* harmony export */   SurveyQuestionText: () => (/* reexport safe */ _src_reactquestion_text__WEBPACK_IMPORTED_MODULE_31__.SurveyQuestionText),
/* harmony export */   SurveyRow: () => (/* reexport safe */ _src_row__WEBPACK_IMPORTED_MODULE_5__.SurveyRow),
/* harmony export */   SurveyTimerPanel: () => (/* reexport safe */ _src_reacttimerpanel__WEBPACK_IMPORTED_MODULE_3__.SurveyTimerPanel),
/* harmony export */   SurveyWindow: () => (/* reexport safe */ _src_react_popup_survey__WEBPACK_IMPORTED_MODULE_47__.SurveyWindow),
/* harmony export */   SvgBundleComponent: () => (/* reexport safe */ _src_svgbundle__WEBPACK_IMPORTED_MODULE_87__.SvgBundleComponent),
/* harmony export */   SvgIcon: () => (/* reexport safe */ _src_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_65__.SvgIcon),
/* harmony export */   TagboxFilterString: () => (/* reexport safe */ _src_tagbox_filter__WEBPACK_IMPORTED_MODULE_17__.TagboxFilterString),
/* harmony export */   TitleActions: () => (/* reexport safe */ _src_components_title_title_actions__WEBPACK_IMPORTED_MODULE_60__.TitleActions),
/* harmony export */   TitleElement: () => (/* reexport safe */ _src_components_title_title_element__WEBPACK_IMPORTED_MODULE_61__.TitleElement),
/* harmony export */   attachKey2click: () => (/* reexport safe */ _src_reactSurvey__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)
/* harmony export */ });
/* harmony import */ var _src_reactSurvey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/reactSurvey */ "../survey-react-ui/src/reactSurvey.tsx");
/* harmony import */ var _src_reactsurveymodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/reactsurveymodel */ "../survey-react-ui/src/reactsurveymodel.tsx");
/* harmony import */ var _src_reactSurveyNavigationBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/reactSurveyNavigationBase */ "../survey-react-ui/src/reactSurveyNavigationBase.tsx");
/* harmony import */ var _src_reacttimerpanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/reacttimerpanel */ "../survey-react-ui/src/reacttimerpanel.tsx");
/* harmony import */ var _src_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/page */ "../survey-react-ui/src/page.tsx");
/* harmony import */ var _src_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/row */ "../survey-react-ui/src/row.tsx");
/* harmony import */ var _src_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/panel */ "../survey-react-ui/src/panel.tsx");
/* harmony import */ var _src_flow_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/flow-panel */ "../survey-react-ui/src/flow-panel.tsx");
/* harmony import */ var _src_reactquestion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/reactquestion */ "../survey-react-ui/src/reactquestion.tsx");
/* harmony import */ var _src_reactquestion_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _src_reactquestion_comment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/reactquestion_comment */ "../survey-react-ui/src/reactquestion_comment.tsx");
/* harmony import */ var _src_reactquestion_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/reactquestion_checkbox */ "../survey-react-ui/src/reactquestion_checkbox.tsx");
/* harmony import */ var _src_reactquestion_ranking__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/reactquestion_ranking */ "../survey-react-ui/src/reactquestion_ranking.tsx");
/* harmony import */ var _src_components_rating_rating_item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/rating/rating-item */ "../survey-react-ui/src/components/rating/rating-item.tsx");
/* harmony import */ var _src_components_rating_rating_item_star__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/rating/rating-item-star */ "../survey-react-ui/src/components/rating/rating-item-star.tsx");
/* harmony import */ var _src_components_rating_rating_item_smiley__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/rating/rating-item-smiley */ "../survey-react-ui/src/components/rating/rating-item-smiley.tsx");
/* harmony import */ var _src_components_rating_rating_dropdown_item__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/rating/rating-dropdown-item */ "../survey-react-ui/src/components/rating/rating-dropdown-item.tsx");
/* harmony import */ var _src_tagbox_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/tagbox-filter */ "../survey-react-ui/src/tagbox-filter.tsx");
/* harmony import */ var _src_dropdown_item__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/dropdown-item */ "../survey-react-ui/src/dropdown-item.tsx");
/* harmony import */ var _src_dropdown_base__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/dropdown-base */ "../survey-react-ui/src/dropdown-base.tsx");
/* harmony import */ var _src_reactquestion_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../src/reactquestion_dropdown */ "../survey-react-ui/src/reactquestion_dropdown.tsx");
/* harmony import */ var _src_tagbox_item__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../src/tagbox-item */ "../survey-react-ui/src/tagbox-item.tsx");
/* harmony import */ var _src_reactquestion_tagbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../src/reactquestion_tagbox */ "../survey-react-ui/src/reactquestion_tagbox.tsx");
/* harmony import */ var _src_dropdown_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../src/dropdown-select */ "../survey-react-ui/src/dropdown-select.tsx");
/* harmony import */ var _src_reactquestion_matrix__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../src/reactquestion_matrix */ "../survey-react-ui/src/reactquestion_matrix.tsx");
/* harmony import */ var _src_reactquestion_html__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../src/reactquestion_html */ "../survey-react-ui/src/reactquestion_html.tsx");
/* harmony import */ var _src_reactquestion_file__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../src/reactquestion_file */ "../survey-react-ui/src/reactquestion_file.tsx");
/* harmony import */ var _src_components_file_file_choose_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../src/components/file/file-choose-button */ "../survey-react-ui/src/components/file/file-choose-button.tsx");
/* harmony import */ var _src_components_file_file_preview__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../src/components/file/file-preview */ "../survey-react-ui/src/components/file/file-preview.tsx");
/* harmony import */ var _src_reactquestion_multipletext__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../src/reactquestion_multipletext */ "../survey-react-ui/src/reactquestion_multipletext.tsx");
/* harmony import */ var _src_reactquestion_radiogroup__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../src/reactquestion_radiogroup */ "../survey-react-ui/src/reactquestion_radiogroup.tsx");
/* harmony import */ var _src_reactquestion_text__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../src/reactquestion_text */ "../survey-react-ui/src/reactquestion_text.tsx");
/* harmony import */ var _src_boolean__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../src/boolean */ "../survey-react-ui/src/boolean.tsx");
/* harmony import */ var _src_boolean_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../src/boolean-checkbox */ "../survey-react-ui/src/boolean-checkbox.tsx");
/* harmony import */ var _src_boolean_radio__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../src/boolean-radio */ "../survey-react-ui/src/boolean-radio.tsx");
/* harmony import */ var _src_reactquestion_empty__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../src/reactquestion_empty */ "../survey-react-ui/src/reactquestion_empty.tsx");
/* harmony import */ var _src_reactquestion_matrixdropdownbase__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../src/reactquestion_matrixdropdownbase */ "../survey-react-ui/src/reactquestion_matrixdropdownbase.tsx");
/* harmony import */ var _src_reactquestion_matrixdropdown__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../src/reactquestion_matrixdropdown */ "../survey-react-ui/src/reactquestion_matrixdropdown.tsx");
/* harmony import */ var _src_reactquestion_matrixdynamic__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../src/reactquestion_matrixdynamic */ "../survey-react-ui/src/reactquestion_matrixdynamic.tsx");
/* harmony import */ var _src_reactquestion_paneldynamic__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../src/reactquestion_paneldynamic */ "../survey-react-ui/src/reactquestion_paneldynamic.tsx");
/* harmony import */ var _src_progress__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../src/progress */ "../survey-react-ui/src/progress.tsx");
/* harmony import */ var _src_progressButtons__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../src/progressButtons */ "../survey-react-ui/src/progressButtons.tsx");
/* harmony import */ var _src_progressToc__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../src/progressToc */ "../survey-react-ui/src/progressToc.tsx");
/* harmony import */ var _src_reactquestion_rating__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../src/reactquestion_rating */ "../survey-react-ui/src/reactquestion_rating.tsx");
/* harmony import */ var _src_rating_dropdown__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../src/rating-dropdown */ "../survey-react-ui/src/rating-dropdown.tsx");
/* harmony import */ var _src_reactquestion_slider__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../src/reactquestion_slider */ "../survey-react-ui/src/reactquestion_slider.tsx");
/* harmony import */ var _src_reactquestion_expression__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../src/reactquestion_expression */ "../survey-react-ui/src/reactquestion_expression.tsx");
/* harmony import */ var _src_react_popup_survey__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../src/react-popup-survey */ "../survey-react-ui/src/react-popup-survey.tsx");
/* harmony import */ var _src_reactquestion_factory__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../src/reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _src_element_factory__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../src/element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _src_imagepicker__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../src/imagepicker */ "../survey-react-ui/src/imagepicker.tsx");
/* harmony import */ var _src_image__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../src/image */ "../survey-react-ui/src/image.tsx");
/* harmony import */ var _src_signaturepad__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../src/signaturepad */ "../survey-react-ui/src/signaturepad.tsx");
/* harmony import */ var _src_reactquestion_buttongroup__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../src/reactquestion_buttongroup */ "../survey-react-ui/src/reactquestion_buttongroup.tsx");
/* harmony import */ var _src_buttongroup_dropdown__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../src/buttongroup-dropdown */ "../survey-react-ui/src/buttongroup-dropdown.tsx");
/* harmony import */ var _src_reactquestion_custom__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../src/reactquestion_custom */ "../survey-react-ui/src/reactquestion_custom.tsx");
/* harmony import */ var _src_components_popup_popup__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../src/components/popup/popup */ "../survey-react-ui/src/components/popup/popup.tsx");
/* harmony import */ var _src_components_list_list_item_content__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../src/components/list/list-item-content */ "../survey-react-ui/src/components/list/list-item-content.tsx");
/* harmony import */ var _src_components_list_list_item_group__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../src/components/list/list-item-group */ "../survey-react-ui/src/components/list/list-item-group.tsx");
/* harmony import */ var _src_components_list_list__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../src/components/list/list */ "../survey-react-ui/src/components/list/list.tsx");
/* harmony import */ var _src_components_title_title_actions__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../src/components/title/title-actions */ "../survey-react-ui/src/components/title/title-actions.tsx");
/* harmony import */ var _src_components_title_title_element__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../src/components/title/title-element */ "../survey-react-ui/src/components/title/title-element.tsx");
/* harmony import */ var _src_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../src/components/action-bar/action-bar */ "../survey-react-ui/src/components/action-bar/action-bar.tsx");
/* harmony import */ var _src_components_survey_header_logo_image__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../src/components/survey-header/logo-image */ "../survey-react-ui/src/components/survey-header/logo-image.tsx");
/* harmony import */ var _src_components_survey_header_survey_header__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../src/components/survey-header/survey-header */ "../survey-react-ui/src/components/survey-header/survey-header.tsx");
/* harmony import */ var _src_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../src/components/svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var _src_components_matrix_actions_remove_button_remove_button__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../src/components/matrix-actions/remove-button/remove-button */ "../survey-react-ui/src/components/matrix-actions/remove-button/remove-button.tsx");
/* harmony import */ var _src_components_matrix_actions_detail_button_detail_button__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../src/components/matrix-actions/detail-button/detail-button */ "../survey-react-ui/src/components/matrix-actions/detail-button/detail-button.tsx");
/* harmony import */ var _src_components_matrix_actions_drag_drop_icon_drag_drop_icon__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../src/components/matrix-actions/drag-drop-icon/drag-drop-icon */ "../survey-react-ui/src/components/matrix-actions/drag-drop-icon/drag-drop-icon.tsx");
/* harmony import */ var _src_components_paneldynamic_actions_paneldynamic_add_btn__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../src/components/paneldynamic-actions/paneldynamic-add-btn */ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-add-btn.tsx");
/* harmony import */ var _src_components_paneldynamic_actions_paneldynamic_remove_btn__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../src/components/paneldynamic-actions/paneldynamic-remove-btn */ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-remove-btn.tsx");
/* harmony import */ var _src_components_paneldynamic_actions_paneldynamic_prev_btn__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../src/components/paneldynamic-actions/paneldynamic-prev-btn */ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-prev-btn.tsx");
/* harmony import */ var _src_components_paneldynamic_actions_paneldynamic_next_btn__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../src/components/paneldynamic-actions/paneldynamic-next-btn */ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-next-btn.tsx");
/* harmony import */ var _src_components_paneldynamic_actions_paneldynamic_progress_text__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../src/components/paneldynamic-actions/paneldynamic-progress-text */ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-progress-text.tsx");
/* harmony import */ var _src_components_survey_actions_survey_nav_button__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../src/components/survey-actions/survey-nav-button */ "../survey-react-ui/src/components/survey-actions/survey-nav-button.tsx");
/* harmony import */ var _src_components_question_error__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../src/components/question-error */ "../survey-react-ui/src/components/question-error.tsx");
/* harmony import */ var _src_components_slider_slider_label_item__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../src/components/slider/slider-label-item */ "../survey-react-ui/src/components/slider/slider-label-item.tsx");
/* harmony import */ var _src_components_matrix_row__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../src/components/matrix/row */ "../survey-react-ui/src/components/matrix/row.tsx");
/* harmony import */ var _src_components_skeleton__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../src/components/skeleton */ "../survey-react-ui/src/components/skeleton.tsx");
/* harmony import */ var _src_components_scroll__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../src/components/scroll */ "../survey-react-ui/src/components/scroll.tsx");
/* harmony import */ var _src_components_notifier__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../src/components/notifier */ "../survey-react-ui/src/components/notifier.tsx");
/* harmony import */ var _src_components_components_container__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../src/components/components-container */ "../survey-react-ui/src/components/components-container.tsx");
/* harmony import */ var _src_components_character_counter__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../src/components/character-counter */ "../survey-react-ui/src/components/character-counter.tsx");
/* harmony import */ var _src_components_header__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../src/components/header */ "../survey-react-ui/src/components/header.tsx");
/* harmony import */ var _src_string_viewer__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../src/string-viewer */ "../survey-react-ui/src/string-viewer.tsx");
/* harmony import */ var _src_string_editor__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../src/string-editor */ "../survey-react-ui/src/string-editor.tsx");
/* harmony import */ var _src_components_loading_indicator__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../src/components/loading-indicator */ "../survey-react-ui/src/components/loading-indicator.tsx");
/* harmony import */ var _src_svgbundle__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../src/svgbundle */ "../survey-react-ui/src/svgbundle.tsx");
/* harmony import */ var _src_components_popup_popup_modal__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../src/components/popup/popup-modal */ "../survey-react-ui/src/components/popup/popup-modal.tsx");
// react

























































































//Uncomment to include the "date" question type.
//export {default as SurveyQuestionDate} from "../plugins/react/reactquestiondate";


/***/ }),

/***/ "../survey-react-ui/src/boolean-checkbox.tsx":
/*!***************************************************!*\
  !*** ../survey-react-ui/src/boolean-checkbox.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionBooleanCheckbox: () => (/* binding */ SurveyQuestionBooleanCheckbox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boolean */ "../survey-react-ui/src/boolean.tsx");
/* harmony import */ var _components_title_title_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/title/title-actions */ "../survey-react-ui/src/components/title/title-actions.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var SurveyQuestionBooleanCheckbox = /** @class */ (function (_super) {
    __extends(SurveyQuestionBooleanCheckbox, _super);
    function SurveyQuestionBooleanCheckbox(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionBooleanCheckbox.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var itemClass = this.question.getCheckboxItemCss();
        var description = this.question.canRenderLabelDescription ?
            _reactquestion_element__WEBPACK_IMPORTED_MODULE_5__.SurveyElementBase.renderQuestionDescription(this.question) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.rootCheckbox },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: itemClass },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: cssClasses.checkboxLabel },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { ref: this.checkRef, type: "checkbox", name: this.question.name, value: this.question.booleanValue === null
                            ? ""
                            : this.question.booleanValue, id: this.question.inputId, className: cssClasses.controlCheckbox, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.booleanValue || false, onChange: this.handleOnChange, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: cssClasses.checkboxMaterialDecorator },
                        this.question.svgIcon ?
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: cssClasses.checkboxItemDecorator },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { xlinkHref: this.question.svgIcon })) : null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "check" })),
                    this.question.isLabelRendered && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: cssClasses.checkboxControlLabel, id: this.question.labelRenderedAriaID },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_title_title_actions__WEBPACK_IMPORTED_MODULE_4__.TitleActions, { element: this.question, cssClasses: this.question.cssClasses })))),
                description)));
    };
    return SurveyQuestionBooleanCheckbox;
}(_boolean__WEBPACK_IMPORTED_MODULE_3__.SurveyQuestionBoolean));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("sv-boolean-checkbox", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionBooleanCheckbox, props);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory.Instance.registerRenderer("boolean", "checkbox", "sv-boolean-checkbox");


/***/ }),

/***/ "../survey-react-ui/src/boolean-radio.tsx":
/*!************************************************!*\
  !*** ../survey-react-ui/src/boolean-radio.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionBooleanRadio: () => (/* binding */ SurveyQuestionBooleanRadio)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boolean */ "../survey-react-ui/src/boolean.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyQuestionBooleanRadio = /** @class */ (function (_super) {
    __extends(SurveyQuestionBooleanRadio, _super);
    function SurveyQuestionBooleanRadio(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = function (event) {
            _this.question.booleanValue = event.nativeEvent.target.value == "true";
        };
        return _this;
    }
    SurveyQuestionBooleanRadio.prototype.renderRadioItem = function (value, locText) {
        var cssClasses = this.question.cssClasses;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { role: "presentation", className: this.question.getRadioItemClass(cssClasses, value) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: cssClasses.radioLabel },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "radio", name: this.question.name, value: value, "aria-errormessage": this.question.ariaErrormessage, checked: value === this.question.booleanValueRendered, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, className: cssClasses.itemRadioControl, onChange: this.handleOnChange }),
                this.question.cssClasses.materialRadioDecorator ?
                    (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: cssClasses.materialRadioDecorator }, this.question.itemSvgIcon ?
                        (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: cssClasses.itemRadioDecorator },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { xlinkHref: this.question.itemSvgIcon }))) : null)) : null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: cssClasses.radioControlLabel }, this.renderLocString(locText)))));
    };
    SurveyQuestionBooleanRadio.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.rootRadio },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", { role: "presentation", className: cssClasses.radioFieldset }, !this.question.swapOrder ?
                (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    this.renderRadioItem(false, this.question.locLabelFalse),
                    this.renderRadioItem(true, this.question.locLabelTrue)))
                :
                    (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                        this.renderRadioItem(true, this.question.locLabelTrue),
                        this.renderRadioItem(false, this.question.locLabelFalse))))));
    };
    return SurveyQuestionBooleanRadio;
}(_boolean__WEBPACK_IMPORTED_MODULE_3__.SurveyQuestionBoolean));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("sv-boolean-radio", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionBooleanRadio, props);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory.Instance.registerRenderer("boolean", "radio", "sv-boolean-radio");


/***/ }),

/***/ "../survey-react-ui/src/boolean.tsx":
/*!******************************************!*\
  !*** ../survey-react-ui/src/boolean.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionBoolean: () => (/* binding */ SurveyQuestionBoolean)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionBoolean = /** @class */ (function (_super) {
    __extends(SurveyQuestionBoolean, _super);
    function SurveyQuestionBoolean(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        _this.handleOnClick = _this.handleOnClick.bind(_this);
        _this.handleOnLabelClick = _this.handleOnLabelClick.bind(_this);
        _this.handleOnSwitchClick = _this.handleOnSwitchClick.bind(_this);
        _this.handleOnKeyDown = _this.handleOnKeyDown.bind(_this);
        _this.checkRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SurveyQuestionBoolean.prototype.getStateElement = function () {
        return this.question;
    };
    Object.defineProperty(SurveyQuestionBoolean.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    /*
    private get allowClick(): boolean {
      return this.question.isIndeterminate && !this.isDisplayMode;
    }
    */
    SurveyQuestionBoolean.prototype.doCheck = function (value) {
        this.question.booleanValue = value;
    };
    SurveyQuestionBoolean.prototype.handleOnChange = function (event) {
        this.doCheck(event.target.checked);
    };
    SurveyQuestionBoolean.prototype.handleOnClick = function (event) {
        this.question.onLabelClick(event, true);
    };
    SurveyQuestionBoolean.prototype.handleOnSwitchClick = function (event) {
        this.question.onSwitchClickModel(event.nativeEvent);
    };
    SurveyQuestionBoolean.prototype.handleOnLabelClick = function (event, value) {
        this.question.onLabelClick(event, value);
    };
    SurveyQuestionBoolean.prototype.handleOnKeyDown = function (event) {
        this.question.onKeyDownCore(event);
    };
    SurveyQuestionBoolean.prototype.updateDomElement = function () {
        if (!this.question)
            return;
        var el = this.checkRef.current;
        if (el) {
            el.indeterminate = this.question.isIndeterminate;
        }
        this.setControl(el);
        _super.prototype.updateDomElement.call(this);
    };
    SurveyQuestionBoolean.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        var itemClass = this.question.getItemCss();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.root, onKeyDown: this.handleOnKeyDown },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: itemClass },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { ref: this.checkRef, type: "checkbox", name: this.question.name, value: this.question.booleanValue === null
                        ? ""
                        : this.question.booleanValue, id: this.question.inputId, className: cssClasses.control, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.booleanValue || false, onChange: this.handleOnChange, role: this.question.a11y_input_ariaRole, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.sliderGhost, onClick: function (event) { return _this.handleOnLabelClick(event, _this.question.swapOrder); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.getLabelCss(this.question.swapOrder) }, this.renderLocString(this.question.locLabelLeft))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.switch, onClick: this.handleOnSwitchClick },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: cssClasses.slider }, this.question.isDeterminated && cssClasses.sliderText ?
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: cssClasses.sliderText }, this.renderLocString(this.question.getCheckedLabel()))
                        : null)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.sliderGhost, onClick: function (event) { return _this.handleOnLabelClick(event, !_this.question.swapOrder); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.getLabelCss(!this.question.swapOrder) }, this.renderLocString(this.question.locLabelRight))))));
    };
    return SurveyQuestionBoolean;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("boolean", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionBoolean, props);
});


/***/ }),

/***/ "../survey-react-ui/src/buttongroup-dropdown.tsx":
/*!*******************************************************!*\
  !*** ../survey-react-ui/src/buttongroup-dropdown.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionButtonGroupDropdown: () => (/* binding */ SurveyQuestionButtonGroupDropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dropdown_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-base */ "../survey-react-ui/src/dropdown-base.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyQuestionButtonGroupDropdown = /** @class */ (function (_super) {
    __extends(SurveyQuestionButtonGroupDropdown, _super);
    function SurveyQuestionButtonGroupDropdown(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionButtonGroupDropdown.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var select = this.renderSelect(cssClasses);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.rootDropdown }, select));
    };
    return SurveyQuestionButtonGroupDropdown;
}(_dropdown_base__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionDropdownBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__.ReactQuestionFactory.Instance.registerQuestion("sv-buttongroup-dropdown", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionButtonGroupDropdown, props);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory.Instance.registerRenderer("buttongroup", "dropdown", "sv-buttongroup-dropdown");


/***/ }),

/***/ "../survey-react-ui/src/components/action-bar/action-bar-item-dropdown.tsx":
/*!*********************************************************************************!*\
  !*** ../survey-react-ui/src/components/action-bar/action-bar-item-dropdown.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyActionBarItemDropdown: () => (/* binding */ SurveyActionBarItemDropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _popup_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup/popup */ "../survey-react-ui/src/components/popup/popup.tsx");
/* harmony import */ var _action_bar_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-bar-item */ "../survey-react-ui/src/components/action-bar/action-bar-item.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyActionBarItemDropdown = /** @class */ (function (_super) {
    __extends(SurveyActionBarItemDropdown, _super);
    function SurveyActionBarItemDropdown(props) {
        return _super.call(this, props) || this;
    }
    SurveyActionBarItemDropdown.prototype.renderInnerButton = function () {
        var button = _super.prototype.renderInnerButton.call(this);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            button,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_popup__WEBPACK_IMPORTED_MODULE_3__.Popup, { model: this.item.popupModel })));
    };
    SurveyActionBarItemDropdown.prototype.componentDidMount = function () {
        this.viewModel = new survey_core__WEBPACK_IMPORTED_MODULE_1__.ActionDropdownViewModel(this.item);
    };
    SurveyActionBarItemDropdown.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.viewModel.dispose();
    };
    return SurveyActionBarItemDropdown;
}(_action_bar_item__WEBPACK_IMPORTED_MODULE_4__.SurveyActionBarItem));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("sv-action-bar-item-dropdown", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyActionBarItemDropdown, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/action-bar/action-bar-item.tsx":
/*!************************************************************************!*\
  !*** ../survey-react-ui/src/components/action-bar/action-bar-item.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyAction: () => (/* binding */ SurveyAction),
/* harmony export */   SurveyActionBarItem: () => (/* binding */ SurveyActionBarItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactSurvey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reactSurvey */ "../survey-react-ui/src/reactSurvey.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var _action_bar_separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-bar-separator */ "../survey-react-ui/src/components/action-bar/action-bar-separator.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var SurveyAction = /** @class */ (function (_super) {
    __extends(SurveyAction, _super);
    function SurveyAction(props) {
        var _this = _super.call(this, props) || this;
        _this.ref = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Object.defineProperty(SurveyAction.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyAction.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyAction.prototype.renderElement = function () {
        //refactor
        var itemClass = this.item.getActionRootCss();
        var separator = this.item.needSeparator ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_action_bar_separator__WEBPACK_IMPORTED_MODULE_5__.SurveyActionBarSeparator, null)) : null;
        var itemComponent = _element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement(this.item.component || "sv-action-bar-item", {
            item: this.item,
        });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: itemClass, id: this.item.id, ref: this.ref },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-action__content" },
                separator,
                itemComponent)));
    };
    SurveyAction.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.item.updateModeCallback = undefined;
    };
    SurveyAction.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        this.item.updateModeCallback = function (mode, callback) {
            queueMicrotask(function () {
                if (react__WEBPACK_IMPORTED_MODULE_0__.flushSync) {
                    react__WEBPACK_IMPORTED_MODULE_0__.flushSync(function () {
                        _this.item.mode = mode;
                    });
                }
                else {
                    _this.item.mode = mode;
                }
                queueMicrotask(function () {
                    callback(mode, _this.ref.current);
                });
            });
        };
        this.item.afterRender();
    };
    return SurveyAction;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

var SurveyActionBarItem = /** @class */ (function (_super) {
    __extends(SurveyActionBarItem, _super);
    function SurveyActionBarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyActionBarItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyActionBarItem.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyActionBarItem.prototype.renderElement = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.renderInnerButton());
    };
    SurveyActionBarItem.prototype.renderText = function () {
        if (!this.item.hasTitle)
            return null;
        var titleClass = this.item.getActionBarItemTitleCss();
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: titleClass }, this.item.title);
    };
    SurveyActionBarItem.prototype.renderButtonContent = function () {
        var text = this.renderText();
        var svgIcon = !!this.item.iconName ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, { className: this.item.cssClasses.itemIcon, size: this.item.iconSize, iconName: this.item.iconName, title: this.item.tooltip || this.item.title })) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            svgIcon,
            text));
    };
    SurveyActionBarItem.prototype.renderInnerButton = function () {
        var _this = this;
        var className = this.item.getActionBarItemCss();
        var title = this.item.tooltip || this.item.title;
        var buttonContent = this.renderButtonContent();
        var tabIndex = this.item.disableTabStop ? -1 : undefined;
        var button = (0,_reactSurvey__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: className, type: "button", disabled: this.item.disabled, onMouseDown: function (args) { return _this.item.doMouseDown(args); }, onFocus: function (args) { return _this.item.doFocus(args); }, onClick: function (args) { return _this.item.doAction(args); }, title: title, tabIndex: tabIndex, "aria-checked": this.item.ariaChecked, "aria-expanded": this.item.ariaExpanded, role: this.item.ariaRole }, buttonContent), this.item, { processEsc: false });
        return button;
    };
    return SurveyActionBarItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-action-bar-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyActionBarItem, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/action-bar/action-bar-separator.tsx":
/*!*****************************************************************************!*\
  !*** ../survey-react-ui/src/components/action-bar/action-bar-separator.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyActionBarSeparator: () => (/* binding */ SurveyActionBarSeparator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SurveyActionBarSeparator = /** @class */ (function (_super) {
    __extends(SurveyActionBarSeparator, _super);
    function SurveyActionBarSeparator(props) {
        return _super.call(this, props) || this;
    }
    SurveyActionBarSeparator.prototype.render = function () {
        var className = "sv-action-bar-separator ".concat(this.props.cssClasses);
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className });
    };
    return SurveyActionBarSeparator;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-action-bar-separator", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyActionBarSeparator, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/action-bar/action-bar.tsx":
/*!*******************************************************************!*\
  !*** ../survey-react-ui/src/components/action-bar/action-bar.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyActionBar: () => (/* binding */ SurveyActionBar),
/* harmony export */   SurveyActionBarItemDropdown: () => (/* reexport safe */ _action_bar_item_dropdown__WEBPACK_IMPORTED_MODULE_4__.SurveyActionBarItemDropdown),
/* harmony export */   SurveyActionBarSeparator: () => (/* reexport safe */ _action_bar_separator__WEBPACK_IMPORTED_MODULE_5__.SurveyActionBarSeparator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _action_bar_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-bar-item */ "../survey-react-ui/src/components/action-bar/action-bar-item.tsx");
/* harmony import */ var _action_bar_item_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-bar-item-dropdown */ "../survey-react-ui/src/components/action-bar/action-bar-item-dropdown.tsx");
/* harmony import */ var _action_bar_separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-bar-separator */ "../survey-react-ui/src/components/action-bar/action-bar-separator.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var SurveyActionBar = /** @class */ (function (_super) {
    __extends(SurveyActionBar, _super);
    function SurveyActionBar(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Object.defineProperty(SurveyActionBar.prototype, "handleClick", {
        get: function () {
            return this.props.handleClick !== undefined ? this.props.handleClick : true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyActionBar.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SurveyActionBar.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!this.model.hasVisibleActions)
            return;
        var container = this.rootRef.current;
        if (!!container) {
            this.model.initResponsivityManager(container, function (callback) { setTimeout(callback, 100); });
        }
    };
    SurveyActionBar.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.model.resetResponsivityManager();
    };
    SurveyActionBar.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (prevProps.model != this.props.model) {
            prevProps.model.resetResponsivityManager();
        }
        if (!!this.model.hasVisibleActions) {
            var container = this.rootRef.current;
            if (!!container) {
                this.model.initResponsivityManager(container, function (callback) { setTimeout(callback, 100); });
            }
        }
    };
    SurveyActionBar.prototype.getStateElement = function () {
        return this.model;
    };
    SurveyActionBar.prototype.renderElement = function () {
        if (!this.model.hasActions)
            return null;
        var items = this.renderItems();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.rootRef, style: this.model.getRootStyle(), className: this.model.getRootCss(), onClick: this.handleClick ? function (event) {
                event.stopPropagation();
            } : undefined }, items));
    };
    SurveyActionBar.prototype.renderItems = function () {
        return this.model.renderedActions.concat([]).map(function (item, itemIndex) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_action_bar_item__WEBPACK_IMPORTED_MODULE_3__.SurveyAction, { item: item, key: item.renderedId }));
        });
    };
    return SurveyActionBar;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-action-bar", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyActionBar, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/brand-info.tsx":
/*!********************************************************!*\
  !*** ../survey-react-ui/src/components/brand-info.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandInfo: () => (/* binding */ BrandInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BrandInfo = /** @class */ (function (_super) {
    __extends(BrandInfo, _super);
    function BrandInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrandInfo.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-brand-info" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "sv-brand-info__logo", href: "https://surveyjs.io/?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=landing_page" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: "https://surveyjs.io/Content/Images/poweredby.svg" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-brand-info__text" },
                "Try and see how easy it is to ",
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://surveyjs.io/create-survey?utm_source=built-in_links&utm_medium=online_survey_tool&utm_campaign=create_survey" }, "create a survey")),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-brand-info__terms" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "https://surveyjs.io/TermsOfUse" }, "Terms of Use & Privacy Statement"))));
    };
    return BrandInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "../survey-react-ui/src/components/breadcrumbs/breadcrumbs.tsx":
/*!*********************************************************************!*\
  !*** ../survey-react-ui/src/components/breadcrumbs/breadcrumbs.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyBreadcrumbs: () => (/* binding */ SurveyBreadcrumbs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var _action_bar_action_bar_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-bar/action-bar-item */ "../survey-react-ui/src/components/action-bar/action-bar-item.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyBreadcrumbs = /** @class */ (function (_super) {
    __extends(SurveyBreadcrumbs, _super);
    function SurveyBreadcrumbs(props) {
        return _super.call(this, props) || this;
    }
    SurveyBreadcrumbs.prototype.getStateElement = function () {
        return this.props.model;
    };
    Object.defineProperty(SurveyBreadcrumbs.prototype, "items", {
        get: function () {
            return this.props.model.actions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyBreadcrumbs.prototype, "css", {
        get: function () {
            return this.props.css;
        },
        enumerable: false,
        configurable: true
    });
    SurveyBreadcrumbs.prototype.renderElement = function () {
        if (!this.items || !this.items.length)
            return null;
        var items = this.renderItems();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.breadcrumbsRoot }, items));
    };
    SurveyBreadcrumbs.prototype.renderItems = function () {
        var _this = this;
        var result = [];
        this.items.concat([]).forEach(function (item, itemIndex) {
            if (itemIndex) {
                result.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { key: item.renderedId + "_separator", className: _this.css.breadcrumbsSeparator, iconName: "arrowright-16x16", size: "auto" }));
            }
            result.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_action_bar_action_bar_item__WEBPACK_IMPORTED_MODULE_4__.SurveyAction, { key: item.renderedId, item: item }));
        });
        return result;
    };
    return SurveyBreadcrumbs;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-breadcrumbs", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyBreadcrumbs, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/character-counter.tsx":
/*!***************************************************************!*\
  !*** ../survey-react-ui/src/components/character-counter.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharacterCounterComponent: () => (/* binding */ CharacterCounterComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CharacterCounterComponent = /** @class */ (function (_super) {
    __extends(CharacterCounterComponent, _super);
    function CharacterCounterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CharacterCounterComponent.prototype.getStateElement = function () {
        return this.props.counter;
    };
    CharacterCounterComponent.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.props.remainingCharacterCounter }, this.props.counter.remainingCharacterCounter));
    };
    return CharacterCounterComponent;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-character-counter", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CharacterCounterComponent, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/components-container.tsx":
/*!******************************************************************!*\
  !*** ../survey-react-ui/src/components/components-container.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsContainer: () => (/* binding */ ComponentsContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ComponentsContainer = /** @class */ (function (_super) {
    __extends(ComponentsContainer, _super);
    function ComponentsContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentsContainer.prototype.render = function () {
        var _this = this;
        var components = this.props.survey.getContainerContent(this.props.container);
        var needRenderWrapper = this.props.needRenderWrapper === false ? false : true;
        if (components.length == 0) {
            return null;
        }
        if (!needRenderWrapper) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, components.map(function (component) {
                return _element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement(component.component, { survey: _this.props.survey, model: component.data, container: _this.props.container, key: component.id });
            }));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-components-column" + " sv-components-container-" + this.props.container }, components.map(function (component) {
            return _element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement(component.component, { survey: _this.props.survey, model: component.data, container: _this.props.container, key: component.id });
        }));
    };
    return ComponentsContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-components-container", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentsContainer, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/file/file-choose-button.tsx":
/*!*********************************************************************!*\
  !*** ../survey-react-ui/src/components/file/file-choose-button.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyFileChooseButton: () => (/* binding */ SurveyFileChooseButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactSurvey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactSurvey */ "../survey-react-ui/src/reactSurvey.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyFileChooseButton = /** @class */ (function (_super) {
    __extends(SurveyFileChooseButton, _super);
    function SurveyFileChooseButton(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyFileChooseButton.prototype, "question", {
        get: function () {
            return (this.props.item && this.props.item.data.question) || this.props.data.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyFileChooseButton.prototype.render = function () {
        var _this = this;
        return (0,_reactSurvey__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { tabIndex: 0, className: this.question.getChooseFileCss(), htmlFor: this.question.inputId, "aria-label": this.question.chooseButtonText, onClick: function (e) { return _this.question.chooseFile(e.nativeEvent); } },
            (!!this.question.cssClasses.chooseFileIconId) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { title: this.question.chooseButtonText, iconName: this.question.cssClasses.chooseFileIconId, size: "auto" }) : null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.question.chooseButtonText)));
    };
    return SurveyFileChooseButton;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_4__.ReactElementFactory.Instance.registerElement("sv-file-choose-btn", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyFileChooseButton, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/file/file-item.tsx":
/*!************************************************************!*\
  !*** ../survey-react-ui/src/components/file/file-item.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyFileItem: () => (/* binding */ SurveyFileItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyFileItem = /** @class */ (function (_super) {
    __extends(SurveyFileItem, _super);
    function SurveyFileItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyFileItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyFileItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyFileItem.prototype.renderFileSign = function (className, val) {
        var _this = this;
        if (!className || !val.name)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: val.content, onClick: function (event) {
                    _this.question.doDownloadFile(event, val);
                }, title: val.name, download: val.name, style: { width: this.question.imageWidth } }, val.name)));
    };
    SurveyFileItem.prototype.renderElement = function () {
        var _this = this;
        var val = this.item;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.previewItem, onClick: function (event) { return _this.question.doDownloadFileFromContainer(event); } },
            this.renderFileSign(this.question.cssClasses.fileSign, val),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getImageWrapperCss(val) },
                this.question.canPreviewImage(val) ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: val.content, style: { height: this.question.imageHeight, width: this.question.imageWidth }, alt: "File preview" })) : (this.question.cssClasses.defaultImage ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: this.question.cssClasses.defaultImageIconId, size: "auto", className: this.question.cssClasses.defaultImage })) : null),
                val.name && !this.question.isReadOnly ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getRemoveButtonCss(), onClick: function (event) { return _this.question.doRemoveFile(val, event); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.removeFile }, this.question.removeFileCaption),
                    (this.question.cssClasses.removeFileSvgIconId) ?
                        (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { title: this.question.removeFileCaption, iconName: this.question.cssClasses.removeFileSvgIconId, size: "auto", className: this.question.cssClasses.removeFileSvg })) : null)) : null),
            this.renderFileSign(this.question.cssClasses.fileSignBottom, val)));
    };
    SurveyFileItem.prototype.canRender = function () {
        return this.question.showPreviewContainer;
    };
    return SurveyFileItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));



/***/ }),

/***/ "../survey-react-ui/src/components/file/file-page.tsx":
/*!************************************************************!*\
  !*** ../survey-react-ui/src/components/file/file-page.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyFilePage: () => (/* binding */ SurveyFilePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _file_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-item */ "../survey-react-ui/src/components/file/file-item.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyFilePage = /** @class */ (function (_super) {
    __extends(SurveyFilePage, _super);
    function SurveyFilePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyFilePage.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyFilePage.prototype, "page", {
        get: function () {
            return this.props.page;
        },
        enumerable: false,
        configurable: true
    });
    SurveyFilePage.prototype.renderElement = function () {
        var _this = this;
        var items = this.page.items.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_file_item__WEBPACK_IMPORTED_MODULE_2__.SurveyFileItem, { item: item, question: _this.question, key: index })); });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.page.css, id: this.page.id }, items));
    };
    return SurveyFilePage;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));



/***/ }),

/***/ "../survey-react-ui/src/components/file/file-preview.tsx":
/*!***************************************************************!*\
  !*** ../survey-react-ui/src/components/file/file-preview.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyFilePreview: () => (/* binding */ SurveyFilePreview)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _file_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-page */ "../survey-react-ui/src/components/file/file-page.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyFilePreview = /** @class */ (function (_super) {
    __extends(SurveyFilePreview, _super);
    function SurveyFilePreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyFilePreview.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyFilePreview.prototype.renderFileSign = function (className, val) {
        var _this = this;
        if (!className || !val.name)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: val.content, onClick: function (event) {
                    _this.question.doDownloadFile(event, val);
                }, title: val.name, download: val.name, style: { width: this.question.imageWidth } }, val.name)));
    };
    SurveyFilePreview.prototype.renderElement = function () {
        var _this = this;
        var content = this.question.renderedPages.map(function (page, index) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_file_page__WEBPACK_IMPORTED_MODULE_3__.SurveyFilePage, { page: page, question: _this.question, key: page.id })); });
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.fileList || undefined }, content);
    };
    SurveyFilePreview.prototype.canRender = function () {
        return this.question.showPreviewContainer;
    };
    return SurveyFilePreview;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("sv-file-preview", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyFilePreview, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/header.tsx":
/*!****************************************************!*\
  !*** ../survey-react-ui/src/components/header.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   HeaderCell: () => (/* binding */ HeaderCell),
/* harmony export */   HeaderMobile: () => (/* binding */ HeaderMobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _title_title_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title/title-element */ "../survey-react-ui/src/components/title/title-element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var HeaderMobile = /** @class */ (function (_super) {
    __extends(HeaderMobile, _super);
    function HeaderMobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HeaderMobile.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    HeaderMobile.prototype.renderLogoImage = function () {
        var componentName = this.model.survey.getElementWrapperComponentName(this.model.survey, "logo-image");
        var componentData = this.model.survey.getElementWrapperComponentData(this.model.survey, "logo-image");
        return _element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement(componentName, {
            data: componentData,
        });
    };
    HeaderMobile.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-header--mobile" },
            this.model.survey.hasLogo ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-header__logo" }, this.renderLogoImage())) : null,
            this.model.survey.hasTitle ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-header__title", style: { maxWidth: this.model.renderedTextAreaWidth } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_title_title_element__WEBPACK_IMPORTED_MODULE_3__.TitleElement, { element: this.model.survey }))) : null,
            this.model.survey.renderedHasDescription ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-header__description", style: { maxWidth: this.model.renderedTextAreaWidth } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.survey.css.description }, _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase.renderLocString(this.model.survey.locDescription)))) : null));
    };
    return HeaderMobile;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

var HeaderCell = /** @class */ (function (_super) {
    __extends(HeaderCell, _super);
    function HeaderCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HeaderCell.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    HeaderCell.prototype.renderLogoImage = function () {
        var componentName = this.model.survey.getElementWrapperComponentName(this.model.survey, "logo-image");
        var componentData = this.model.survey.getElementWrapperComponentData(this.model.survey, "logo-image");
        return _element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement(componentName, {
            data: componentData,
        });
    };
    HeaderCell.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.css, style: this.model.style },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-header__cell-content", style: this.model.contentStyle },
                this.model.showLogo ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-header__logo" }, this.renderLogoImage())) : null,
                this.model.showTitle ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-header__title", style: { maxWidth: this.model.textAreaWidth } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_title_title_element__WEBPACK_IMPORTED_MODULE_3__.TitleElement, { element: this.model.survey }))) : null,
                this.model.showDescription ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-header__description", style: { maxWidth: this.model.textAreaWidth } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.survey.css.description }, _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase.renderLocString(this.model.survey.locDescription)))) : null)));
    };
    return HeaderCell;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Header.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Header.prototype.getStateElement = function () {
        return this.model;
    };
    Header.prototype.renderElement = function () {
        this.model.survey = this.props.survey;
        if (!(this.props.survey.headerView === "advanced") || this.model.isEmpty) {
            return null;
        }
        var headerContent = null;
        if (this.props.survey.isMobile) {
            headerContent = react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderMobile, { model: this.model });
        }
        else {
            headerContent = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.contentClasses, style: { maxWidth: this.model.maxWidth } }, this.model.cells.map(function (cell, index) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeaderCell, { key: index, model: cell }); })));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.headerClasses, style: { height: this.model.renderedHeight } },
            this.model.backgroundImage ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: this.model.backgroundImageStyle, className: this.model.backgroundImageClasses }) : null,
            headerContent));
    };
    Header.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.processResponsiveness();
    };
    Header.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.model.processResponsiveness();
    };
    return Header;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("sv-header", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Header, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/list/list-item-content.tsx":
/*!********************************************************************!*\
  !*** ../survey-react-ui/src/components/list/list-item-content.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItemContent: () => (/* binding */ ListItemContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ListItemContent = /** @class */ (function (_super) {
    __extends(ListItemContent, _super);
    function ListItemContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ListItemContent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemContent.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    ListItemContent.prototype.getStateElement = function () {
        return this.item;
    };
    ListItemContent.prototype.render = function () {
        if (!this.item)
            return null;
        var text = this.renderLocString(this.item.locTitle, undefined, "locString");
        var icon = (this.item.iconName) ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { className: this.model.cssClasses.itemIcon, iconName: this.item.iconName, size: this.item.iconSize, "aria-label": this.item.title }) : null;
        var markerIcon = (this.item.markerIconName) ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { className: this.item.cssClasses.itemMarkerIcon, iconName: this.item.markerIconName, size: "auto" }) : null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            icon,
            text,
            markerIcon);
    };
    return ListItemContent;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-list-item-content", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListItemContent, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/list/list-item-group.tsx":
/*!******************************************************************!*\
  !*** ../survey-react-ui/src/components/list/list-item-group.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItemGroup: () => (/* binding */ ListItemGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _popup_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup/popup */ "../survey-react-ui/src/components/popup/popup.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ListItemGroup = /** @class */ (function (_super) {
    __extends(ListItemGroup, _super);
    function ListItemGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ListItemGroup.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItemGroup.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    ListItemGroup.prototype.getStateElement = function () {
        return this.item;
    };
    ListItemGroup.prototype.render = function () {
        var _a;
        if (!this.item)
            return null;
        var newElement = _element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement("sv-list-item-content", { item: this.item, key: "content" + this.item.id, model: this.model });
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            newElement,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup_popup__WEBPACK_IMPORTED_MODULE_3__.Popup, { model: (_a = this.item) === null || _a === void 0 ? void 0 : _a.popupModel }));
    };
    return ListItemGroup;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-list-item-group", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListItemGroup, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/list/list-item.tsx":
/*!************************************************************!*\
  !*** ../survey-react-ui/src/components/list/list-item.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItem: () => (/* binding */ ListItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactSurvey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reactSurvey */ "../survey-react-ui/src/reactSurvey.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleKeydown = function (event) {
            _this.model.onKeyDown(event);
        };
        return _this;
    }
    Object.defineProperty(ListItem.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    ListItem.prototype.getStateElement = function () {
        return this.item;
    };
    ListItem.prototype.render = function () {
        var _this = this;
        if (!this.item)
            return null;
        var className = this.model.getItemClass(this.item);
        var itemContent = this.item.component || this.model.itemComponent;
        var newElement = _element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement(itemContent, { item: this.item, key: this.item.id, model: this.model });
        var contentWrap = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: this.model.getItemStyle(this.item), className: this.model.cssClasses.itemBody, title: this.item.getTooltip(), onMouseOver: function (event) { _this.model.onItemHover(_this.item); }, onMouseLeave: function (event) { _this.model.onItemLeave(_this.item); } }, newElement);
        var separator = this.item.needSeparator ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.cssClasses.itemSeparator }) : null;
        var isVisible = this.model.isItemVisible(this.item);
        var style = {
            display: isVisible ? null : "none"
        };
        return (0,_reactSurvey__WEBPACK_IMPORTED_MODULE_3__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: className, role: this.model.listItemRole, style: style, id: this.item.elementId, "aria-selected": this.model.getA11yItemAriaSelected(this.item), "aria-checked": this.model.getA11yItemAriaChecked(this.item), onClick: function (event) {
                _this.model.onItemClick(_this.item);
                event.stopPropagation();
            }, onPointerDown: function (event) { return _this.model.onPointerDown(event, _this.item); } },
            separator,
            contentWrap), this.item);
    };
    ListItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.onLastItemRended(this.item);
    };
    return ListItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-list-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ListItem, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/list/list.tsx":
/*!*******************************************************!*\
  !*** ../survey-react-ui/src/components/list/list.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-item */ "../survey-react-ui/src/components/list/list-item.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(props) {
        var _this = _super.call(this, props) || this;
        _this.handleKeydown = function (event) {
            _this.model.onKeyDown(event);
        };
        _this.handleMouseMove = function (event) {
            _this.model.onMouseMove(event);
        };
        _this.state = {
            filterString: _this.model.filterString || ""
        };
        _this.listContainerRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Object.defineProperty(List.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    List.prototype.getStateElement = function () {
        return this.model;
    };
    List.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!!this.listContainerRef && !!this.listContainerRef.current) {
            this.model.initListContainerHtmlElement(this.listContainerRef.current);
        }
    };
    List.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a;
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (this.model !== prevProps.model) {
            if (this.model && !!((_a = this.listContainerRef) === null || _a === void 0 ? void 0 : _a.current)) {
                this.model.initListContainerHtmlElement(this.listContainerRef.current);
            }
            if (prevProps.model) {
                prevProps.model.initListContainerHtmlElement(undefined);
            }
        }
    };
    List.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!!this.model) {
            this.model.initListContainerHtmlElement(undefined);
        }
    };
    List.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.cssClasses.root, ref: this.listContainerRef },
            this.searchElementContent(),
            this.emptyContent(),
            this.renderList()));
    };
    List.prototype.renderList = function () {
        if (!this.model.renderElements)
            return null;
        var items = this.renderItems();
        var ulStyle = { display: this.model.isEmpty ? "none" : null };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: this.model.getListClass(), style: ulStyle, role: this.model.listRole, "aria-label": this.model.a11ya11y_input_ariaLabel, id: this.model.elementId, onMouseDown: function (e) {
                e.preventDefault();
            }, onKeyDown: this.handleKeydown, onMouseMove: this.handleMouseMove }, items));
    };
    List.prototype.renderItems = function () {
        var _this = this;
        if (!this.model) {
            return null;
        }
        var items = this.model.renderedActions;
        if (!items) {
            return null;
        }
        return items.map(function (item, itemIndex) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_item__WEBPACK_IMPORTED_MODULE_5__.ListItem, { model: _this.model, item: item, key: "item" + itemIndex }));
        });
    };
    List.prototype.searchElementContent = function () {
        var _this = this;
        if (!this.model.showFilter)
            return null;
        else {
            var onChange = function (e) {
                var root = survey_core__WEBPACK_IMPORTED_MODULE_1__.settings.environment.root;
                if (e.target === root.activeElement) {
                    _this.model.filterString = e.target.value;
                }
            };
            var onKeyUp = function (e) {
                _this.model.goToItems(e);
            };
            var clearButton = this.model.showSearchClearButton && !!this.model.filterString ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: this.model.cssClasses.searchClearButtonIcon, onClick: function (event) { _this.model.onClickSearchClearButton(event); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, { iconName: "icon-searchclear", size: "auto" })) : null;
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.cssClasses.filter },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.cssClasses.filterIcon },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, { iconName: "icon-search", size: "auto" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", className: this.model.cssClasses.filterInput, "aria-label": this.model.filterStringPlaceholder, placeholder: this.model.filterStringPlaceholder, value: this.state.filterString, onKeyUp: onKeyUp, onChange: onChange }),
                clearButton));
        }
    };
    List.prototype.emptyContent = function () {
        var style = { display: this.model.isEmpty ? null : "none" };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.cssClasses.emptyContainer, style: style },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.cssClasses.emptyText, "aria-label": this.model.emptyMessage }, this.model.emptyMessage)));
    };
    return List;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("sv-list", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(List, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/loading-indicator.tsx":
/*!***************************************************************!*\
  !*** ../survey-react-ui/src/components/loading-indicator.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingIndicatorComponent: () => (/* binding */ LoadingIndicatorComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LoadingIndicatorComponent = /** @class */ (function (_super) {
    __extends(LoadingIndicatorComponent, _super);
    function LoadingIndicatorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoadingIndicatorComponent.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sd-loading-indicator" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { iconName: "icon-loading", size: "auto" })));
    };
    return LoadingIndicatorComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "../survey-react-ui/src/components/matrix-actions/detail-button/detail-button.tsx":
/*!****************************************************************************************!*\
  !*** ../survey-react-ui/src/components/matrix-actions/detail-button/detail-button.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionMatrixDetailButton: () => (/* binding */ SurveyQuestionMatrixDetailButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyQuestionMatrixDetailButton = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixDetailButton, _super);
    function SurveyQuestionMatrixDetailButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnShowHideClick = _this.handleOnShowHideClick.bind(_this);
        return _this;
    }
    SurveyQuestionMatrixDetailButton.prototype.getStateElement = function () {
        return this.props.item;
    };
    Object.defineProperty(SurveyQuestionMatrixDetailButton.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixDetailButton.prototype, "question", {
        get: function () {
            return this.props.item.data.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixDetailButton.prototype, "row", {
        get: function () {
            return this.props.item.data.row;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDetailButton.prototype.handleOnShowHideClick = function (event) {
        this.row.showHideDetailPanelClick();
    };
    SurveyQuestionMatrixDetailButton.prototype.renderElement = function () {
        var isExpanded = this.row.isDetailPanelShowing;
        var ariaExpanded = isExpanded;
        var ariaControls = isExpanded ? this.row.detailPanelId : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", title: this.props.item.title, onClick: this.handleOnShowHideClick, className: this.question.getDetailPanelButtonCss(this.row), "aria-expanded": ariaExpanded, "aria-controls": ariaControls },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { className: this.question.getDetailPanelIconCss(this.row), iconName: this.question.getDetailPanelIconId(this.row), size: "auto" })));
    };
    return SurveyQuestionMatrixDetailButton;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-matrix-detail-button", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixDetailButton, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/matrix-actions/drag-drop-icon/drag-drop-icon.tsx":
/*!******************************************************************************************!*\
  !*** ../survey-react-ui/src/components/matrix-actions/drag-drop-icon/drag-drop-icon.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionMatrixDynamicDragDropIcon: () => (/* binding */ SurveyQuestionMatrixDynamicDragDropIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionMatrixDynamicDragDropIcon = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixDynamicDragDropIcon, _super);
    function SurveyQuestionMatrixDynamicDragDropIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixDynamicDragDropIcon.prototype, "question", {
        get: function () {
            return this.props.item.data.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDynamicDragDropIcon.prototype.renderElement = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.renderIcon());
    };
    SurveyQuestionMatrixDynamicDragDropIcon.prototype.renderIcon = function () {
        if (this.question.iconDragElement) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: this.question.cssClasses.dragElementDecorator },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { xlinkHref: this.question.iconDragElement })));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.iconDrag }));
        }
    };
    return SurveyQuestionMatrixDynamicDragDropIcon;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-matrix-drag-drop-icon", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixDynamicDragDropIcon, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/matrix-actions/remove-button/remove-button.tsx":
/*!****************************************************************************************!*\
  !*** ../survey-react-ui/src/components/matrix-actions/remove-button/remove-button.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionMatrixDynamicRemoveButton: () => (/* binding */ SurveyQuestionMatrixDynamicRemoveButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionMatrixDynamicRemoveButton = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixDynamicRemoveButton, _super);
    function SurveyQuestionMatrixDynamicRemoveButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnRowRemoveClick = _this.handleOnRowRemoveClick.bind(_this);
        return _this;
    }
    Object.defineProperty(SurveyQuestionMatrixDynamicRemoveButton.prototype, "question", {
        get: function () {
            return this.props.item.data.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixDynamicRemoveButton.prototype, "row", {
        get: function () {
            return this.props.item.data.row;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDynamicRemoveButton.prototype.handleOnRowRemoveClick = function (event) {
        this.question.removeRowUI(this.row);
    };
    SurveyQuestionMatrixDynamicRemoveButton.prototype.renderElement = function () {
        var removeRowText = this.renderLocString(this.question.locRemoveRowText);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: this.question.getRemoveRowButtonCss(), type: "button", onClick: this.handleOnRowRemoveClick, disabled: this.question.isInputReadOnly },
            removeRowText,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.iconRemove })));
    };
    return SurveyQuestionMatrixDynamicRemoveButton;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-matrix-remove-button", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixDynamicRemoveButton, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/matrix/row.tsx":
/*!********************************************************!*\
  !*** ../survey-react-ui/src/components/matrix/row.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatrixRow: () => (/* binding */ MatrixRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var MatrixRow = /** @class */ (function (_super) {
    __extends(MatrixRow, _super);
    function MatrixRow(props) {
        var _this = _super.call(this, props) || this;
        _this.root = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        _this.onPointerDownHandler = function (event) {
            _this.parentMatrix.onPointerDown(event.nativeEvent, _this.model.row);
        };
        return _this;
    }
    Object.defineProperty(MatrixRow.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MatrixRow.prototype, "parentMatrix", {
        get: function () {
            return this.props.parentMatrix;
        },
        enumerable: false,
        configurable: true
    });
    MatrixRow.prototype.getStateElement = function () {
        return this.model;
    };
    MatrixRow.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.root.current) {
            this.model.setRootElement(this.root.current);
        }
    };
    MatrixRow.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.model.setRootElement(undefined);
    };
    MatrixRow.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        if (nextProps.model !== this.model) {
            if (nextProps.element) {
                nextProps.element.setRootElement(this.root.current);
            }
            if (this.model) {
                this.model.setRootElement(undefined);
            }
        }
        return true;
    };
    MatrixRow.prototype.render = function () {
        var _this = this;
        var model = this.model;
        if (!model.visible)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { ref: this.root, className: model.className, "data-sv-drop-target-matrix-row": model.dropTargetId, onPointerDown: function (event) { return _this.onPointerDownHandler(event); } }, this.props.children));
    };
    return MatrixRow;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-matrix-row", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(MatrixRow, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/notifier.tsx":
/*!******************************************************!*\
  !*** ../survey-react-ui/src/components/notifier.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotifierComponent: () => (/* binding */ NotifierComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _action_bar_action_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-bar/action-bar */ "../survey-react-ui/src/components/action-bar/action-bar.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var NotifierComponent = /** @class */ (function (_super) {
    __extends(NotifierComponent, _super);
    function NotifierComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NotifierComponent.prototype, "notifier", {
        get: function () {
            return this.props.notifier;
        },
        enumerable: false,
        configurable: true
    });
    NotifierComponent.prototype.getStateElement = function () {
        return this.notifier;
    };
    NotifierComponent.prototype.renderElement = function () {
        if (!this.notifier.isDisplayed)
            return null;
        var style = { visibility: this.notifier.active ? "visible" : "hidden" };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.notifier.css, style: style, role: "alert", "aria-live": "polite" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.notifier.message),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_3__.SurveyActionBar, { model: this.notifier.actionBar })));
    };
    return NotifierComponent;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("sv-notifier", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(NotifierComponent, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-add-btn.tsx":
/*!***************************************************************************************!*\
  !*** ../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-add-btn.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionPanelDynamicAction: () => (/* binding */ SurveyQuestionPanelDynamicAction),
/* harmony export */   SurveyQuestionPanelDynamicAddButton: () => (/* binding */ SurveyQuestionPanelDynamicAddButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionPanelDynamicAction = /** @class */ (function (_super) {
    __extends(SurveyQuestionPanelDynamicAction, _super);
    function SurveyQuestionPanelDynamicAction(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionPanelDynamicAction.prototype, "data", {
        get: function () {
            return (this.props.item && this.props.item.data) || this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionPanelDynamicAction.prototype, "question", {
        get: function () {
            return (this.props.item && this.props.item.data.question) || this.props.data.question;
        },
        enumerable: false,
        configurable: true
    });
    return SurveyQuestionPanelDynamicAction;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.ReactSurveyElement));

var SurveyQuestionPanelDynamicAddButton = /** @class */ (function (_super) {
    __extends(SurveyQuestionPanelDynamicAddButton, _super);
    function SurveyQuestionPanelDynamicAddButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            _this.question.addPanelUI();
        };
        return _this;
    }
    SurveyQuestionPanelDynamicAddButton.prototype.renderElement = function () {
        if (!this.question.canAddPanel)
            return null;
        var btnText = this.renderLocString(this.question.locAddPanelText);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", id: this.question.addButtonId, className: this.question.getAddButtonCss(), onClick: this.handleClick },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.buttonAddText }, btnText)));
    };
    return SurveyQuestionPanelDynamicAddButton;
}(SurveyQuestionPanelDynamicAction));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-paneldynamic-add-btn", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionPanelDynamicAddButton, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-next-btn.tsx":
/*!****************************************************************************************!*\
  !*** ../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-next-btn.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionPanelDynamicNextButton: () => (/* binding */ SurveyQuestionPanelDynamicNextButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var _paneldynamic_add_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paneldynamic-add-btn */ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-add-btn.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyQuestionPanelDynamicNextButton = /** @class */ (function (_super) {
    __extends(SurveyQuestionPanelDynamicNextButton, _super);
    function SurveyQuestionPanelDynamicNextButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            _this.question.goToNextPanel();
        };
        return _this;
    }
    SurveyQuestionPanelDynamicNextButton.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { title: this.question.panelNextText, onClick: this.handleClick, className: this.question.getNextButtonCss() },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: this.question.cssClasses.progressBtnIcon, size: "auto" })));
    };
    return SurveyQuestionPanelDynamicNextButton;
}(_paneldynamic_add_btn__WEBPACK_IMPORTED_MODULE_3__.SurveyQuestionPanelDynamicAction));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-paneldynamic-next-btn", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionPanelDynamicNextButton, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-prev-btn.tsx":
/*!****************************************************************************************!*\
  !*** ../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-prev-btn.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionPanelDynamicPrevButton: () => (/* binding */ SurveyQuestionPanelDynamicPrevButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var _paneldynamic_add_btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paneldynamic-add-btn */ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-add-btn.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyQuestionPanelDynamicPrevButton = /** @class */ (function (_super) {
    __extends(SurveyQuestionPanelDynamicPrevButton, _super);
    function SurveyQuestionPanelDynamicPrevButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            _this.question.goToPrevPanel();
        };
        return _this;
    }
    SurveyQuestionPanelDynamicPrevButton.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { title: this.question.panelPrevText, onClick: this.handleClick, className: this.question.getPrevButtonCss() },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { iconName: this.question.cssClasses.progressBtnIcon, size: "auto" })));
    };
    return SurveyQuestionPanelDynamicPrevButton;
}(_paneldynamic_add_btn__WEBPACK_IMPORTED_MODULE_3__.SurveyQuestionPanelDynamicAction));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-paneldynamic-prev-btn", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionPanelDynamicPrevButton, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-progress-text.tsx":
/*!*********************************************************************************************!*\
  !*** ../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-progress-text.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionPanelDynamicProgressText: () => (/* binding */ SurveyQuestionPanelDynamicProgressText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _paneldynamic_add_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paneldynamic-add-btn */ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-add-btn.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionPanelDynamicProgressText = /** @class */ (function (_super) {
    __extends(SurveyQuestionPanelDynamicProgressText, _super);
    function SurveyQuestionPanelDynamicProgressText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyQuestionPanelDynamicProgressText.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.progressText }, this.question.progressText));
    };
    return SurveyQuestionPanelDynamicProgressText;
}(_paneldynamic_add_btn__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionPanelDynamicAction));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-paneldynamic-progress-text", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionPanelDynamicProgressText, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-remove-btn.tsx":
/*!******************************************************************************************!*\
  !*** ../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-remove-btn.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionPanelDynamicRemoveButton: () => (/* binding */ SurveyQuestionPanelDynamicRemoveButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _paneldynamic_add_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paneldynamic-add-btn */ "../survey-react-ui/src/components/paneldynamic-actions/paneldynamic-add-btn.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionPanelDynamicRemoveButton = /** @class */ (function (_super) {
    __extends(SurveyQuestionPanelDynamicRemoveButton, _super);
    function SurveyQuestionPanelDynamicRemoveButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            _this.question.removePanelUI(_this.data.panel);
        };
        return _this;
    }
    SurveyQuestionPanelDynamicRemoveButton.prototype.renderElement = function () {
        var btnText = this.renderLocString(this.question.locRemovePanelText);
        var id = this.question.getPanelRemoveButtonId(this.data.panel);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { id: id, className: this.question.getPanelRemoveButtonCss(), onClick: this.handleClick, type: "button" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.buttonRemoveText }, btnText),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.iconRemove })));
    };
    return SurveyQuestionPanelDynamicRemoveButton;
}(_paneldynamic_add_btn__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionPanelDynamicAction));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-paneldynamic-remove-btn", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionPanelDynamicRemoveButton, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/popup/popup-modal.tsx":
/*!***************************************************************!*\
  !*** ../survey-react-ui/src/components/popup/popup-modal.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupModal: () => (/* binding */ PopupModal)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ "../survey-react-ui/src/components/popup/popup.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_3__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var PopupModal = /** @class */ (function (_super) {
    __extends(PopupModal, _super);
    function PopupModal(props) {
        var _this = _super.call(this, props) || this;
        _this.isInitialized = false;
        _this.init = function () {
            if (!_this.isInitialized) {
                survey_core__WEBPACK_IMPORTED_MODULE_3__.settings.showDialog = function (dialogOptions, rootElement) {
                    return _this.showDialog(dialogOptions, rootElement);
                };
                _this.isInitialized = true;
            }
        };
        _this.clean = function () {
            if (_this.isInitialized) {
                survey_core__WEBPACK_IMPORTED_MODULE_3__.settings.showDialog = undefined;
                _this.isInitialized = false;
            }
        };
        _this.state = { changed: 0 };
        _this.descriptor = {
            init: _this.init,
            clean: _this.clean
        };
        return _this;
    }
    PopupModal.addModalDescriptor = function (descriptor) {
        if (!survey_core__WEBPACK_IMPORTED_MODULE_3__.settings.showDialog) {
            descriptor.init();
        }
        this.modalDescriptors.push(descriptor);
    };
    PopupModal.removeModalDescriptor = function (descriptor) {
        descriptor.clean();
        this.modalDescriptors.splice(this.modalDescriptors.indexOf(descriptor), 1);
        if (!survey_core__WEBPACK_IMPORTED_MODULE_3__.settings.showDialog && this.modalDescriptors[0]) {
            this.modalDescriptors[0].init();
        }
    };
    PopupModal.prototype.renderElement = function () {
        if (!this.model)
            return null;
        return (0,react_dom__WEBPACK_IMPORTED_MODULE_0__.createPortal)(react_dom__WEBPACK_IMPORTED_MODULE_0__.createElement(_popup__WEBPACK_IMPORTED_MODULE_1__.PopupContainer, { model: this.model }), this.model.container);
    };
    PopupModal.prototype.showDialog = function (dialogOptions, rootElement) {
        var _this = this;
        this.model = (0,survey_core__WEBPACK_IMPORTED_MODULE_3__.createPopupModalViewModel)(dialogOptions, rootElement);
        var onVisibilityChangedCallback = function (_, options) {
            if (!options.isVisible) {
                _this.model.dispose();
                _this.model = undefined;
                _this.setState({ changed: _this.state.changed + 1 });
            }
        };
        this.model.onVisibilityChanged.add(onVisibilityChangedCallback);
        this.model.model.isVisible = true;
        this.setState({ changed: this.state.changed + 1 });
        return this.model;
    };
    PopupModal.prototype.componentDidMount = function () {
        PopupModal.addModalDescriptor(this.descriptor);
    };
    PopupModal.prototype.componentWillUnmount = function () {
        if (this.model) {
            this.model.dispose();
            this.model = undefined;
        }
        PopupModal.removeModalDescriptor(this.descriptor);
    };
    PopupModal.modalDescriptors = [];
    return PopupModal;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));



/***/ }),

/***/ "../survey-react-ui/src/components/popup/popup.tsx":
/*!*********************************************************!*\
  !*** ../survey-react-ui/src/components/popup/popup.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Popup: () => (/* binding */ Popup),
/* harmony export */   PopupContainer: () => (/* binding */ PopupContainer),
/* harmony export */   PopupDropdownContainer: () => (/* binding */ PopupDropdownContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _action_bar_action_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-bar/action-bar */ "../survey-react-ui/src/components/action-bar/action-bar.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this.containerRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        _this.createModel();
        return _this;
    }
    Object.defineProperty(Popup.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Popup.prototype.getStateElement = function () {
        return this.model;
    };
    Popup.prototype.createModel = function () {
        this.popup = (0,survey_core__WEBPACK_IMPORTED_MODULE_1__.createPopupViewModel)(this.props.model);
    };
    Popup.prototype.setTargetElement = function () {
        var container = this.containerRef.current;
        this.popup.setComponentElement(container);
    };
    Popup.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.setTargetElement();
    };
    Popup.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.setTargetElement();
    };
    Popup.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.popup.resetComponentElement();
    };
    Popup.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var _a;
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        var isNeedUpdate = nextProps.model !== this.popup.model;
        if (isNeedUpdate) {
            (_a = this.popup) === null || _a === void 0 ? void 0 : _a.dispose();
            this.createModel();
        }
        return isNeedUpdate;
    };
    Popup.prototype.render = function () {
        this.popup.model = this.model;
        var popupContainer;
        if (this.model.isModal) {
            popupContainer = react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopupContainer, { model: this.popup });
        }
        else {
            popupContainer = react__WEBPACK_IMPORTED_MODULE_0__.createElement(PopupDropdownContainer, { model: this.popup });
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.containerRef }, popupContainer);
    };
    return Popup;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("sv-popup", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Popup, props);
});
var PopupContainer = /** @class */ (function (_super) {
    __extends(PopupContainer, _super);
    function PopupContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.handleKeydown = function (event) {
            _this.model.onKeyDown(event);
        };
        _this.clickInside = function (ev) {
            ev.stopPropagation();
        };
        return _this;
    }
    Object.defineProperty(PopupContainer.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    PopupContainer.prototype.getStateElement = function () {
        return this.model;
    };
    PopupContainer.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (!this.model.isPositionSet && this.model.isVisible) {
            this.model.updateOnShowing();
        }
    };
    PopupContainer.prototype.renderContainer = function (popupBaseViewModel) {
        var _this = this;
        var headerPopup = popupBaseViewModel.showHeader ? this.renderHeaderPopup(popupBaseViewModel) : null;
        var headerContent = !!popupBaseViewModel.title ? this.renderHeaderContent() : null;
        var content = this.renderContent();
        var footerContent = popupBaseViewModel.showFooter ? this.renderFooter(this.model) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-popup__container", style: {
                left: popupBaseViewModel.left,
                top: popupBaseViewModel.top,
                height: popupBaseViewModel.height,
                width: popupBaseViewModel.width,
                minWidth: popupBaseViewModel.minWidth,
            }, onClick: function (ev) {
                _this.clickInside(ev);
            } },
            headerPopup,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-popup__body-content" },
                headerContent,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-popup__scrolling-content" }, content),
                footerContent)));
    };
    PopupContainer.prototype.renderHeaderContent = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-popup__body-header" }, this.model.title);
    };
    PopupContainer.prototype.renderContent = function () {
        var contentComponent = _element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement(this.model.contentComponentName, this.model.contentComponentData);
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-popup__content" }, contentComponent);
    };
    PopupContainer.prototype.renderHeaderPopup = function (popupModel) {
        return null;
    };
    PopupContainer.prototype.renderFooter = function (popuModel) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-popup__body-footer" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_4__.SurveyActionBar, { model: popuModel.footerToolbar })));
    };
    PopupContainer.prototype.render = function () {
        var _this = this;
        var container = this.renderContainer(this.model);
        var className = new survey_core__WEBPACK_IMPORTED_MODULE_1__.CssClassBuilder()
            .append("sv-popup")
            .append(this.model.styleClass)
            .toString();
        var style = { display: this.model.isVisible ? "" : "none", };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { tabIndex: -1, className: className, style: style, onClick: function (e) {
                _this.model.clickOutside(e);
            }, onKeyDown: this.handleKeydown }, container));
    };
    PopupContainer.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.model.isVisible) {
            this.model.updateOnShowing();
        }
    };
    return PopupContainer;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase));

var PopupDropdownContainer = /** @class */ (function (_super) {
    __extends(PopupDropdownContainer, _super);
    function PopupDropdownContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopupDropdownContainer.prototype.renderHeaderPopup = function (popupModel) {
        var popupDropdownModel = popupModel;
        if (!popupDropdownModel)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: {
                left: popupDropdownModel.pointerTarget.left,
                top: popupDropdownModel.pointerTarget.top,
            }, className: "sv-popup__pointer" }));
    };
    return PopupDropdownContainer;
}(PopupContainer));



/***/ }),

/***/ "../survey-react-ui/src/components/question-error.tsx":
/*!************************************************************!*\
  !*** ../survey-react-ui/src/components/question-error.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionErrorComponent: () => (/* binding */ QuestionErrorComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _string_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../string-viewer */ "../survey-react-ui/src/string-viewer.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var QuestionErrorComponent = /** @class */ (function (_super) {
    __extends(QuestionErrorComponent, _super);
    function QuestionErrorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionErrorComponent.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.props.cssClasses.error.icon || undefined, "aria-hidden": "true" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.props.cssClasses.error.item || undefined },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_string_viewer__WEBPACK_IMPORTED_MODULE_2__.SurveyLocStringViewer, { locStr: this.props.error.locText }))));
    };
    return QuestionErrorComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-question-error", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(QuestionErrorComponent, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/rating/rating-dropdown-item.tsx":
/*!*************************************************************************!*\
  !*** ../survey-react-ui/src/components/rating/rating-dropdown-item.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingDropdownItem: () => (/* binding */ RatingDropdownItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var RatingDropdownItem = /** @class */ (function (_super) {
    __extends(RatingDropdownItem, _super);
    function RatingDropdownItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RatingDropdownItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    RatingDropdownItem.prototype.getStateElement = function () {
        return this.item;
    };
    RatingDropdownItem.prototype.render = function () {
        if (!this.item)
            return null;
        var item = this.props.item;
        var description = this.renderDescription(item);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sd-rating-dropdown-item" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sd-rating-dropdown-item_text" }, item.title),
            description));
    };
    RatingDropdownItem.prototype.renderDescription = function (item) {
        if (!item.description)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sd-rating-dropdown-item_description" }, this.renderLocString(item.description, undefined, "locString")));
    };
    return RatingDropdownItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-rating-dropdown-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RatingDropdownItem, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/rating/rating-item-smiley.tsx":
/*!***********************************************************************!*\
  !*** ../survey-react-ui/src/components/rating/rating-item-smiley.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingItemSmiley: () => (/* binding */ RatingItemSmiley)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var _rating_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rating-item */ "../survey-react-ui/src/components/rating/rating-item.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var RatingItemSmiley = /** @class */ (function (_super) {
    __extends(RatingItemSmiley, _super);
    function RatingItemSmiley() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RatingItemSmiley.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { onMouseDown: this.handleOnMouseDown, style: this.question.getItemStyle(this.item.itemValue, this.item.highlight), className: this.question.getItemClass(this.item.itemValue), onMouseOver: function (e) { return _this.question.onItemMouseIn(_this.item); }, onMouseOut: function (e) { return _this.question.onItemMouseOut(_this.item); }, title: this.item.text },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "radio", className: "sv-visuallyhidden", name: this.question.questionName, id: this.question.getInputId(this.index), value: this.item.value, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.value == this.item.value, onClick: this.props.handleOnClick, onChange: function () { }, "aria-label": this.question.ariaLabel }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { size: "auto", iconName: this.question.getItemSmileyIconName(this.item.itemValue) })));
    };
    return RatingItemSmiley;
}(_rating_item__WEBPACK_IMPORTED_MODULE_3__.RatingItemBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-rating-item-smiley", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RatingItemSmiley, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/rating/rating-item-star.tsx":
/*!*********************************************************************!*\
  !*** ../survey-react-ui/src/components/rating/rating-item-star.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingItemStar: () => (/* binding */ RatingItemStar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var _rating_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rating-item */ "../survey-react-ui/src/components/rating/rating-item.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var RatingItemStar = /** @class */ (function (_super) {
    __extends(RatingItemStar, _super);
    function RatingItemStar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RatingItemStar.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { onMouseDown: this.handleOnMouseDown, className: this.question.getItemClass(this.item.itemValue), onMouseOver: function (e) { return _this.question.onItemMouseIn(_this.item); }, onMouseOut: function (e) { return _this.question.onItemMouseOut(_this.item); }, title: this.item.text },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "radio", className: "sv-visuallyhidden", name: this.question.questionName, id: this.question.getInputId(this.index), value: this.item.value, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.value == this.item.value, onClick: this.props.handleOnClick, onChange: function () { }, "aria-label": this.question.ariaLabel }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { className: "sv-star", size: "auto", iconName: this.question.itemStarIcon }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { className: "sv-star-2", size: "auto", iconName: this.question.itemStarIconAlt })));
    };
    return RatingItemStar;
}(_rating_item__WEBPACK_IMPORTED_MODULE_3__.RatingItemBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-rating-item-star", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RatingItemStar, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/rating/rating-item.tsx":
/*!****************************************************************!*\
  !*** ../survey-react-ui/src/components/rating/rating-item.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingItem: () => (/* binding */ RatingItem),
/* harmony export */   RatingItemBase: () => (/* binding */ RatingItemBase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var RatingItemBase = /** @class */ (function (_super) {
    __extends(RatingItemBase, _super);
    function RatingItemBase(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnMouseDown = _this.handleOnMouseDown.bind(_this);
        return _this;
    }
    Object.defineProperty(RatingItemBase.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingItemBase.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RatingItemBase.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    RatingItemBase.prototype.getStateElement = function () {
        return this.item;
    };
    RatingItemBase.prototype.handleOnMouseDown = function (event) {
        this.question.onMouseDown();
    };
    return RatingItemBase;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

var RatingItem = /** @class */ (function (_super) {
    __extends(RatingItem, _super);
    function RatingItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RatingItem.prototype.render = function () {
        var itemText = this.renderLocString(this.item.locText);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { onMouseDown: this.handleOnMouseDown, className: this.question.getItemClassByText(this.item.itemValue, this.item.text) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "radio", className: "sv-visuallyhidden", name: this.question.questionName, id: this.question.getInputId(this.index), value: this.item.value, disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, checked: this.question.value == this.item.value, onClick: this.props.handleOnClick, onChange: function () { }, "aria-label": this.question.ariaLabel }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.itemText, "data-text": this.item.text }, itemText)));
    };
    RatingItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
    };
    return RatingItem;
}(RatingItemBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-rating-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(RatingItem, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/scroll.tsx":
/*!****************************************************!*\
  !*** ../survey-react-ui/src/components/scroll.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scroll: () => (/* binding */ Scroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Scroll = /** @class */ (function (_super) {
    __extends(Scroll, _super);
    function Scroll(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        _this.model = new survey_core__WEBPACK_IMPORTED_MODULE_2__.ScrollViewModel();
        _this.model.onInnerHeightChanged = function (hasScroll) {
            if (!!_this.props.onInnerHeightChanged) {
                _this.props.onInnerHeightChanged(hasScroll);
            }
        };
        return _this;
    }
    Scroll.prototype.componentDidMount = function () {
        var container = this.rootRef.current;
        if (!container)
            return;
        this.model.setRootElement(container);
    };
    Scroll.prototype.componentWillUnmount = function () {
        this.model.unsubscribeRootElement();
        this.model.setRootElement(undefined);
    };
    Scroll.prototype.render = function () {
        var _this = this;
        return this.props.disabled ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.props.children) :
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.rootRef, className: "sv-scroll__wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-scroll__scroller sv-drag-target-skipped", onScroll: function () { return _this.model.onScrollContainer(); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-scroll__container" }, this.props.children)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-scroll__scrollbar", onScroll: function () { return _this.model.onScrollScrollbar(); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-scroll__scrollbar-sizer" })));
    };
    return Scroll;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("svc-scroll", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Scroll, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/skeleton.tsx":
/*!******************************************************!*\
  !*** ../survey-react-ui/src/components/skeleton.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Skeleton: () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Skeleton = /** @class */ (function (_super) {
    __extends(Skeleton, _super);
    function Skeleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skeleton.prototype.render = function () {
        var _a, _b;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-skeleton-element", id: (_a = this.props.element) === null || _a === void 0 ? void 0 : _a.id, style: { height: (_b = this.props.element) === null || _b === void 0 ? void 0 : _b.skeletonHeight } }));
    };
    return Skeleton;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-skeleton", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Skeleton, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/slider/slider-label-item.tsx":
/*!**********************************************************************!*\
  !*** ../survey-react-ui/src/components/slider/slider-label-item.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderLabelItem: () => (/* binding */ SliderLabelItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SliderLabelItem = /** @class */ (function (_super) {
    __extends(SliderLabelItem, _super);
    function SliderLabelItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliderLabelItem.prototype.getStateElement = function () {
        return this.item;
    };
    Object.defineProperty(SliderLabelItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SliderLabelItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SliderLabelItem.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
    };
    SliderLabelItem.prototype.renderElement = function () {
        var _a = this.question, cssClasses = _a.cssClasses, handleLabelPointerUp = _a.handleLabelPointerUp, getLabelCss = _a.getLabelCss, getPercent = _a.getPercent;
        var _b = this.item, value = _b.value, locText = _b.locText;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: this.item.id, className: getLabelCss(locText), style: { left: getPercent(value) + "%" }, onPointerUp: function (e) { handleLabelPointerUp(e.nativeEvent, value); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.labelTick }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.labelText }, this.renderLocString(locText)));
    };
    return SliderLabelItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-slider-label-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SliderLabelItem, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/survey-actions/survey-nav-button.tsx":
/*!******************************************************************************!*\
  !*** ../survey-react-ui/src/components/survey-actions/survey-nav-button.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyNavigationButton: () => (/* binding */ SurveyNavigationButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyNavigationButton = /** @class */ (function (_super) {
    __extends(SurveyNavigationButton, _super);
    function SurveyNavigationButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyNavigationButton.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyNavigationButton.prototype.canRender = function () {
        return this.item.isVisible;
    };
    SurveyNavigationButton.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: this.item.innerCss, type: "button", disabled: this.item.disabled, onMouseDown: this.item.data && this.item.data.mouseDown, onClick: this.item.action, title: this.item.getTooltip(), value: this.item.title }));
    };
    return SurveyNavigationButton;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-nav-btn", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyNavigationButton, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/survey-header/logo-image.tsx":
/*!**********************************************************************!*\
  !*** ../survey-react-ui/src/components/survey-header/logo-image.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoImage: () => (/* binding */ LogoImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LogoImage = /** @class */ (function (_super) {
    __extends(LogoImage, _super);
    function LogoImage(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(LogoImage.prototype, "survey", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    LogoImage.prototype.render = function () {
        var content = [];
        content.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: "logo-image", className: this.survey.logoClassNames },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: this.survey.css.logoImage, src: this.survey.locLogo.renderedHtml || null, alt: this.survey.locTitle.renderedHtml, width: this.survey.renderedLogoWidth, height: this.survey.renderedLogoHeight, style: { objectFit: this.survey.logoFit, width: this.survey.renderedStyleLogoWidth, height: this.survey.renderedStyleLogoHeight } })));
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, content);
    };
    return LogoImage;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-logo-image", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoImage, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/survey-header/survey-header.tsx":
/*!*************************************************************************!*\
  !*** ../survey-react-ui/src/components/survey-header/survey-header.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyHeader: () => (/* binding */ SurveyHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _title_title_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title/title-element */ "../survey-react-ui/src/components/title/title-element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyHeader = /** @class */ (function (_super) {
    __extends(SurveyHeader, _super);
    function SurveyHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { changed: 0 };
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Object.defineProperty(SurveyHeader.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyHeader.prototype, "css", {
        get: function () {
            return this.survey.css;
        },
        enumerable: false,
        configurable: true
    });
    SurveyHeader.prototype.componentDidMount = function () {
        var self = this;
        this.survey.afterRenderHeader(this.rootRef.current);
        this.survey.locLogo.onChanged = function () {
            self.setState({ changed: self.state.changed + 1 });
        };
    };
    SurveyHeader.prototype.componentWillUnmount = function () {
        this.survey.locLogo.onChanged = function () { };
    };
    SurveyHeader.prototype.renderTitle = function () {
        if (!this.survey.renderedHasTitle)
            return null;
        var description = _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase.renderLocString(this.survey.locDescription);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.headerText, style: { maxWidth: this.survey.titleMaxWidth } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_title_title_element__WEBPACK_IMPORTED_MODULE_3__.TitleElement, { element: this.survey }),
            this.survey.renderedHasDescription ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.description }, description) : null));
    };
    SurveyHeader.prototype.renderLogoImage = function (isRender) {
        if (!isRender)
            return null;
        var componentName = this.survey.getElementWrapperComponentName(this.survey, "logo-image");
        var componentData = this.survey.getElementWrapperComponentData(this.survey, "logo-image");
        return _element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement(componentName, {
            data: componentData,
        });
    };
    SurveyHeader.prototype.render = function () {
        if (!this.survey.renderedHasHeader)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.header, ref: this.rootRef },
            this.renderLogoImage(this.survey.isLogoBefore),
            this.renderTitle(),
            this.renderLogoImage(this.survey.isLogoAfter),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.headerClose })));
    };
    return SurveyHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("survey-header", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyHeader, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx":
/*!***************************************************************!*\
  !*** ../survey-react-ui/src/components/svg-icon/svg-icon.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SvgIcon: () => (/* binding */ SvgIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SvgIcon = /** @class */ (function (_super) {
    __extends(SvgIcon, _super);
    function SvgIcon(props) {
        var _this = _super.call(this, props) || this;
        _this.svgIconRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SvgIcon.prototype.updateSvg = function () {
        if (this.props.iconName)
            (0,survey_core__WEBPACK_IMPORTED_MODULE_2__.createSvg)(this.props.size, this.props.width, this.props.height, this.props.iconName, this.svgIconRef.current, this.props.title);
    };
    SvgIcon.prototype.componentDidUpdate = function () {
        this.updateSvg();
    };
    SvgIcon.prototype.render = function () {
        var className = "sv-svg-icon";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        return (this.props.iconName ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: className, style: this.props.style, onClick: this.props.onClick, ref: this.svgIconRef, role: "presentation" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", null))
            : null);
    };
    SvgIcon.prototype.componentDidMount = function () {
        this.updateSvg();
    };
    return SvgIcon;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-svg-icon", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SvgIcon, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/text-area.tsx":
/*!*******************************************************!*\
  !*** ../survey-react-ui/src/components/text-area.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextAreaComponent: () => (/* binding */ TextAreaComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TextAreaComponent = /** @class */ (function (_super) {
    __extends(TextAreaComponent, _super);
    function TextAreaComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initialValue = _this.viewModel.getTextValue() || "";
        _this.textareaRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Object.defineProperty(TextAreaComponent.prototype, "viewModel", {
        get: function () {
            return this.props.viewModel;
        },
        enumerable: false,
        configurable: true
    });
    TextAreaComponent.prototype.canRender = function () {
        return !!this.viewModel.question;
    };
    TextAreaComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        var el = this.textareaRef.current;
        if (!!el) {
            this.viewModel.setElement(el);
        }
    };
    TextAreaComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.viewModel.resetElement();
    };
    TextAreaComponent.prototype.renderElement = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { id: this.viewModel.id, className: this.viewModel.className, ref: this.textareaRef, disabled: this.viewModel.isDisabledAttr, readOnly: this.viewModel.isReadOnlyAttr, rows: this.viewModel.rows, cols: this.viewModel.cols, placeholder: this.viewModel.placeholder, maxLength: this.viewModel.maxLength, defaultValue: this.initialValue, onChange: function (event) { _this.viewModel.onTextAreaInput(event); }, onFocus: function (event) { _this.viewModel.onTextAreaFocus(event); }, onBlur: function (event) { _this.viewModel.onTextAreaBlur(event); }, onKeyDown: function (event) { _this.viewModel.onTextAreaKeyDown(event); }, "aria-required": this.viewModel.ariaRequired, "aria-label": this.viewModel.ariaLabel, "aria-labelledby": this.viewModel.ariaLabelledBy, "aria-describedby": this.viewModel.ariaDescribedBy, "aria-invalid": this.viewModel.ariaInvalid, "aria-errormessage": this.viewModel.ariaErrormessage, style: { resize: this.viewModel.question.resizeStyle } }));
    };
    return TextAreaComponent;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("sv-text-area", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TextAreaComponent, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/title/title-actions.tsx":
/*!*****************************************************************!*\
  !*** ../survey-react-ui/src/components/title/title-actions.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleActions: () => (/* binding */ TitleActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _action_bar_action_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-bar/action-bar */ "../survey-react-ui/src/components/action-bar/action-bar.tsx");
/* harmony import */ var _title_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title-content */ "../survey-react-ui/src/components/title/title-content.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var TitleActions = /** @class */ (function (_super) {
    __extends(TitleActions, _super);
    function TitleActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TitleActions.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TitleActions.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    TitleActions.prototype.render = function () {
        var titleContent = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_title_content__WEBPACK_IMPORTED_MODULE_4__.TitleContent, { element: this.element, cssClasses: this.cssClasses });
        if (!this.element.hasTitleActions)
            return titleContent;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-title-actions" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sv-title-actions__title" }, titleContent),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_3__.SurveyActionBar, { model: this.element.getTitleToolbar() })));
    };
    return TitleActions;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

survey_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory.Instance.registerRenderer("element", "title-actions", "sv-title-actions");
_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("sv-title-actions", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TitleActions, props);
});


/***/ }),

/***/ "../survey-react-ui/src/components/title/title-content.tsx":
/*!*****************************************************************!*\
  !*** ../survey-react-ui/src/components/title/title-content.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleContent: () => (/* binding */ TitleContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var TitleContent = /** @class */ (function (_super) {
    __extends(TitleContent, _super);
    function TitleContent(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(TitleContent.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TitleContent.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    TitleContent.prototype.render = function () {
        if (this.element.isTitleRenderedAsString)
            return _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase.renderLocString(this.element.locRenderedTitle);
        var spans = this.renderTitleSpans(this.element.getTitleOwner(), this.cssClasses);
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, spans);
    };
    TitleContent.prototype.renderTitleSpans = function (element, cssClasses) {
        var getSpaceSpan = function (key) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "data-key": key, key: key }, "\u00A0"));
        };
        var spans = [];
        if (element.isRequireTextOnStart) {
            spans.push(this.renderRequireText(element));
            spans.push(getSpaceSpan("req-sp"));
        }
        var questionNumber = element.no;
        if (questionNumber) {
            spans.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "data-key": "q_num", key: "q_num", className: element.cssTitleNumber, style: { position: "static" }, "aria-hidden": true }, questionNumber));
            spans.push(getSpaceSpan("num-sp"));
        }
        if (element.isRequireTextBeforeTitle) {
            spans.push(this.renderRequireText(element));
            spans.push(getSpaceSpan("req-sp"));
        }
        spans.push(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase.renderLocString(element.locRenderedTitle, null, "q_title"));
        if (element.isRequireTextAfterTitle) {
            spans.push(getSpaceSpan("req-sp"));
            spans.push(this.renderRequireText(element));
        }
        return spans;
    };
    TitleContent.prototype.renderRequireText = function (element) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "data-key": "req-text", key: "req-text", className: element.cssRequiredMark, "aria-hidden": true }, element.requiredMark));
    };
    return TitleContent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "../survey-react-ui/src/components/title/title-element.tsx":
/*!*****************************************************************!*\
  !*** ../survey-react-ui/src/components/title/title-element.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleElement: () => (/* binding */ TitleElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _title_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./title-actions */ "../survey-react-ui/src/components/title/title-actions.tsx");
/* harmony import */ var _svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var TitleElement = /** @class */ (function (_super) {
    __extends(TitleElement, _super);
    function TitleElement(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(TitleElement.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    TitleElement.prototype.renderTitleExpandableSvg = function () {
        if (!this.element.getCssTitleExpandableSvg())
            return null;
        var iconName = this.element.isExpanded ? "icon-collapse-16x16" : "icon-expand-16x16";
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { className: this.element.getCssTitleExpandableSvg(), iconName: iconName, size: "auto" });
    };
    TitleElement.prototype.render = function () {
        var element = this.element;
        if (!element || !element.hasTitle)
            return null;
        var ariaLabel = element.titleAriaLabel || undefined;
        var titleExpandableSvg = this.renderTitleExpandableSvg();
        var titleContent = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_title_actions__WEBPACK_IMPORTED_MODULE_2__.TitleActions, { element: element, cssClasses: element.cssClasses }));
        var onClick = undefined;
        var onKeyUp = undefined;
        if (element.hasTitleEvents) {
            onKeyUp = function (evt) {
                (0,survey_core__WEBPACK_IMPORTED_MODULE_1__.doKey2ClickUp)(evt.nativeEvent);
            };
        }
        var CustomTag = element.titleTagName;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CustomTag, { className: element.cssTitle, id: element.ariaTitleId, "aria-label": ariaLabel, tabIndex: element.titleTabIndex, "aria-expanded": element.titleAriaExpanded, role: element.titleAriaRole, onClick: onClick, onKeyUp: onKeyUp },
            titleExpandableSvg,
            titleContent));
    };
    return TitleElement;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "../survey-react-ui/src/custom-widget.tsx":
/*!************************************************!*\
  !*** ../survey-react-ui/src/custom-widget.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyCustomWidget: () => (/* binding */ SurveyCustomWidget)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SurveyCustomWidget = /** @class */ (function (_super) {
    __extends(SurveyCustomWidget, _super);
    function SurveyCustomWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.widgetRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SurveyCustomWidget.prototype._afterRender = function () {
        if (this.questionBase.customWidget) {
            var el = this.widgetRef.current;
            if (!!el) {
                this.questionBase.customWidget.afterRender(this.questionBase, el);
                this.questionBase.customWidgetData.isNeedRender = false;
            }
        }
    };
    SurveyCustomWidget.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.questionBase) {
            this._afterRender();
        }
    };
    SurveyCustomWidget.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        var isDefaultRender = !!this.questionBase.customWidget &&
            this.questionBase.customWidget.isDefaultRender;
        if (this.questionBase && !isDefaultRender) {
            this._afterRender();
        }
    };
    SurveyCustomWidget.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.questionBase.customWidget) {
            var el = this.widgetRef.current;
            if (!!el) {
                this.questionBase.customWidget.willUnmount(this.questionBase, el);
            }
        }
    };
    SurveyCustomWidget.prototype.canRender = function () {
        return _super.prototype.canRender.call(this) && this.questionBase.visible;
    };
    SurveyCustomWidget.prototype.renderElement = function () {
        var customWidget = this.questionBase.customWidget;
        if (customWidget.isDefaultRender) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.widgetRef }, this.creator.createQuestionElement(this.questionBase)));
        }
        var widget = null;
        if (customWidget.widgetJson.render) {
            widget = customWidget.widgetJson.render(this.questionBase);
        }
        else {
            if (customWidget.htmlTemplate) {
                var htmlValue = { __html: customWidget.htmlTemplate };
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.widgetRef, dangerouslySetInnerHTML: htmlValue });
            }
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.widgetRef }, widget);
    };
    return SurveyCustomWidget;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));



/***/ }),

/***/ "../survey-react-ui/src/dropdown-base.tsx":
/*!************************************************!*\
  !*** ../survey-react-ui/src/dropdown-base.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionDropdownBase: () => (/* binding */ SurveyQuestionDropdownBase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_popup_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/popup/popup */ "../survey-react-ui/src/components/popup/popup.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactquestion_comment */ "../survey-react-ui/src/reactquestion_comment.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/action-bar/action-bar */ "../survey-react-ui/src/components/action-bar/action-bar.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var SurveyQuestionDropdownBase = /** @class */ (function (_super) {
    __extends(SurveyQuestionDropdownBase, _super);
    function SurveyQuestionDropdownBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.click = function (event) {
            var _a;
            (_a = _this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClick(event);
        };
        _this.chevronPointerDown = function (event) {
            var _a;
            (_a = _this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.chevronPointerDown(event);
        };
        _this.clear = function (event) {
            var _a;
            (_a = _this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.onClear(event);
        };
        _this.keyhandler = function (event) {
            var _a;
            (_a = _this.question.dropdownListModel) === null || _a === void 0 ? void 0 : _a.keyHandler(event);
        };
        _this.blur = function (event) {
            _this.updateInputDomElement();
            _this.question.onBlur(event);
        };
        _this.focus = function (event) {
            _this.question.onFocus(event);
        };
        return _this;
    }
    Object.defineProperty(SurveyQuestionDropdownBase.prototype, "dropdownListModel", {
        get: function () {
            return this.question["dropdownListModel"];
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionDropdownBase.prototype.getStateElement = function () {
        return this.question["dropdownListModel"];
    };
    SurveyQuestionDropdownBase.prototype.setValueCore = function (newValue) {
        this.questionBase.renderedValue = newValue;
    };
    SurveyQuestionDropdownBase.prototype.getValueCore = function () {
        return this.questionBase.renderedValue;
    };
    SurveyQuestionDropdownBase.prototype.renderReadOnlyElement = function () {
        if (this.question.locReadOnlyText) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.controlValue }, this.renderLocString(this.question.locReadOnlyText)));
        }
        else {
            return null;
        }
    };
    SurveyQuestionDropdownBase.prototype.renderSelect = function (cssClasses) {
        var _this = this;
        var selectElement = null;
        var dropdownListModel = this.dropdownListModel;
        if (this.question.isReadOnly) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            selectElement = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: this.question.inputId, role: dropdownListModel === null || dropdownListModel === void 0 ? void 0 : dropdownListModel.ariaQuestionRole, "aria-label": dropdownListModel === null || dropdownListModel === void 0 ? void 0 : dropdownListModel.ariaQuestionLabel, "aria-labelledby": dropdownListModel === null || dropdownListModel === void 0 ? void 0 : dropdownListModel.ariaQuestionLabelledby, "aria-describedby": dropdownListModel === null || dropdownListModel === void 0 ? void 0 : dropdownListModel.ariaQuestionDescribedby, "aria-expanded": "false", "aria-readonly": "true", "aria-disabled": "true", tabIndex: this.question.isDisabledAttr ? undefined : 0, className: this.question.getControlClass(), ref: function (div) { return (_this.setControl(div)); } },
                this.renderReadOnlyElement(),
                this.renderEditorButtons());
        }
        else {
            selectElement = react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                this.renderInput(),
                this.question.isInputReadOnly ? null : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_popup_popup__WEBPACK_IMPORTED_MODULE_2__.Popup, { model: dropdownListModel.popupModel }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.selectWrapper, onClick: this.click }, selectElement));
    };
    SurveyQuestionDropdownBase.prototype.renderValueElement = function () {
        if (this.question.showInputFieldComponent) {
            return _element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement(this.question.inputFieldComponentName, { item: this.dropdownListModel.getSelectedAction(), question: this.question });
        }
        else if (this.question.showSelectedItemLocText) {
            return this.renderLocString(this.question.selectedItemLocText);
        }
        return null;
    };
    SurveyQuestionDropdownBase.prototype.renderInput = function () {
        var _this = this;
        var dropdownListModel = this.dropdownListModel;
        var valueElement = this.renderValueElement();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: this.question.inputId, className: this.question.getControlClass(), tabIndex: dropdownListModel.noTabIndex ? undefined : 0, 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            disabled: this.question.isDisabledAttr, required: this.question.isRequired, onKeyDown: this.keyhandler, onBlur: this.blur, onFocus: this.focus, role: dropdownListModel.ariaQuestionRole, "aria-required": dropdownListModel.ariaQuestionRequired, "aria-invalid": dropdownListModel.ariaQuestionInvalid, "aria-errormessage": dropdownListModel.ariaQuestionErrorMessage, "aria-expanded": dropdownListModel.ariaQuestionExpanded, "aria-label": dropdownListModel.ariaQuestionLabel, "aria-labelledby": dropdownListModel.ariaQuestionLabelledby, "aria-describedby": dropdownListModel.ariaQuestionDescribedby, "aria-controls": dropdownListModel.ariaQuestionControls, "aria-activedescendant": dropdownListModel.ariaQuestionActivedescendant, ref: function (div) { return (_this.setControl(div)); } },
            dropdownListModel.showHintPrefix ?
                (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.hintPrefix },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, dropdownListModel.hintStringPrefix))) : null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.controlValue },
                dropdownListModel.showHintString ?
                    (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.hintSuffix },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { visibility: "hidden" }, "data-bind": "text: model.filterString" }, dropdownListModel.inputStringRendered),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, dropdownListModel.hintStringSuffix))) : null,
                valueElement,
                dropdownListModel.needRenderInput ? this.renderFilterInput() : null),
            this.renderEditorButtons()));
    };
    SurveyQuestionDropdownBase.prototype.renderFilterInput = function () {
        var _this = this;
        var root = survey_core__WEBPACK_IMPORTED_MODULE_1__.settings.environment.root;
        var dropdownListModel = this.dropdownListModel;
        var onInputChange = function (e) {
            if (e.target === root.activeElement) {
                dropdownListModel.inputStringRendered = e.target.value;
            }
        };
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", autoComplete: "off", id: this.question.getInputId(), ref: function (element) { return (_this.inputElement = element); }, className: this.question.cssClasses.filterStringInput, role: dropdownListModel.ariaInputRole, "aria-required": dropdownListModel.ariaInputRequired, "aria-invalid": dropdownListModel.ariaInputInvalid, "aria-errormessage": dropdownListModel.ariaInputErrorMessage, "aria-expanded": dropdownListModel.ariaInputExpanded, "aria-label": dropdownListModel.ariaInputLabel, "aria-labelledby": dropdownListModel.ariaInputLabelledby, "aria-describedby": dropdownListModel.ariaInputDescribedby, "aria-controls": dropdownListModel.ariaInputControls, "aria-activedescendant": dropdownListModel.ariaInputActivedescendant, placeholder: dropdownListModel.placeholderRendered, readOnly: dropdownListModel.filterReadOnly ? true : undefined, tabIndex: dropdownListModel.noTabIndex ? undefined : -1, disabled: this.question.isDisabledAttr, inputMode: dropdownListModel.inputMode, onChange: function (e) { onInputChange(e); }, onBlur: this.blur, onFocus: this.focus });
    };
    SurveyQuestionDropdownBase.prototype.renderOther = function (item, cssClasses) {
        if (!item || !item.isCommentShowing)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: item.normalizedId, className: this.question.getCommentAreaCss(true) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion_comment__WEBPACK_IMPORTED_MODULE_4__.SurveyQuestionCommentValueItem, { question: this.question, item: item, isDisplayMode: this.isDisplayMode, cssClasses: this.question.cssClasses, otherCss: this.question.getCommentAreaCss(false) })));
    };
    SurveyQuestionDropdownBase.prototype.renderEditorButtons = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_6__.SurveyActionBar, { model: this.dropdownListModel.editorButtons });
    };
    SurveyQuestionDropdownBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.updateInputDomElement();
    };
    SurveyQuestionDropdownBase.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.updateInputDomElement();
    };
    SurveyQuestionDropdownBase.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.question.dropdownListModel)
            this.question.dropdownListModel.focused = false;
    };
    SurveyQuestionDropdownBase.prototype.updateInputDomElement = function () {
        if (!!this.inputElement) {
            var control = this.inputElement;
            var newValue = this.question.dropdownListModel.inputStringRendered;
            if (!survey_core__WEBPACK_IMPORTED_MODULE_1__.Helpers.isTwoValueEquals(newValue, control.value, false, true, false)) {
                control.value = this.question.dropdownListModel.inputStringRendered;
            }
        }
    };
    return SurveyQuestionDropdownBase;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_5__.SurveyQuestionUncontrolledElement));



/***/ }),

/***/ "../survey-react-ui/src/dropdown-item.tsx":
/*!************************************************!*\
  !*** ../survey-react-ui/src/dropdown-item.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionOptionItem: () => (/* binding */ SurveyQuestionOptionItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SurveyQuestionOptionItem = /** @class */ (function (_super) {
    __extends(SurveyQuestionOptionItem, _super);
    function SurveyQuestionOptionItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { changed: 0 };
        _this.setupModel();
        return _this;
    }
    SurveyQuestionOptionItem.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.setupModel();
    };
    SurveyQuestionOptionItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.setupModel();
    };
    SurveyQuestionOptionItem.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!!this.item) {
            this.item.locText.onChanged = function () { };
        }
    };
    SurveyQuestionOptionItem.prototype.setupModel = function () {
        if (!this.item.locText)
            return;
        var self = this;
        this.item.locText.onChanged = function () {
            self.setState({ changed: self.state.changed + 1 });
        };
    };
    SurveyQuestionOptionItem.prototype.getStateElement = function () {
        return this.item;
    };
    Object.defineProperty(SurveyQuestionOptionItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionOptionItem.prototype.canRender = function () {
        return !!this.item;
    };
    SurveyQuestionOptionItem.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: this.item.value, disabled: !this.item.isEnabled }, this.item.text));
    };
    return SurveyQuestionOptionItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));



/***/ }),

/***/ "../survey-react-ui/src/dropdown-select.tsx":
/*!**************************************************!*\
  !*** ../survey-react-ui/src/dropdown-select.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionDropdownSelect: () => (/* binding */ SurveyQuestionDropdownSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _reactquestion_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_dropdown */ "../survey-react-ui/src/reactquestion_dropdown.tsx");
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-item */ "../survey-react-ui/src/dropdown-item.tsx");
/* harmony import */ var _components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var SurveyQuestionDropdownSelect = /** @class */ (function (_super) {
    __extends(SurveyQuestionDropdownSelect, _super);
    function SurveyQuestionDropdownSelect(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionDropdownSelect.prototype.renderSelect = function (cssClasses) {
        var _this = this;
        var click = function (event) {
            _this.question.onClick(event);
        };
        var keyup = function (event) {
            _this.question.onKeyUp(event);
        };
        var selectElement = this.isDisplayMode ? (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: this.question.inputId, className: this.question.getControlClass(), disabled: true }, this.question.readOnlyText)) :
            (react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", { id: this.question.inputId, className: this.question.getControlClass(), ref: function (select) { return (_this.setControl(select)); }, autoComplete: this.question.autocomplete, onChange: this.updateValueOnEvent, onInput: this.updateValueOnEvent, onClick: click, onKeyUp: keyup, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage, required: this.question.isRequired },
                this.question.allowClear ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { value: "" }, this.question.placeholder)) : null,
                this.question.visibleChoices.map(function (item, i) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dropdown_item__WEBPACK_IMPORTED_MODULE_4__.SurveyQuestionOptionItem, { key: "item" + i, item: item }); })));
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.selectWrapper },
            selectElement,
            this.createChevronButton()));
    };
    SurveyQuestionDropdownSelect.prototype.createChevronButton = function () {
        if (!this.question.cssClasses.chevronButtonIconId)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.chevronButton, "aria-hidden": "true", onPointerDown: this.chevronPointerDown },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIcon, { className: this.question.cssClasses.chevronButtonSvg, iconName: this.question.cssClasses.chevronButtonIconId, size: "auto" })));
    };
    return SurveyQuestionDropdownSelect;
}(_reactquestion_dropdown__WEBPACK_IMPORTED_MODULE_3__.SurveyQuestionDropdown));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("sv-dropdown-select", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionDropdownSelect, props);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory.Instance.registerRenderer("dropdown", "select", "sv-dropdown-select");


/***/ }),

/***/ "../survey-react-ui/src/element-factory.tsx":
/*!**************************************************!*\
  !*** ../survey-react-ui/src/element-factory.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactElementFactory: () => (/* binding */ ReactElementFactory)
/* harmony export */ });
var ReactElementFactory = /** @class */ (function () {
    function ReactElementFactory() {
        this.creatorHash = {};
    }
    ReactElementFactory.prototype.registerElement = function (elementType, elementCreator) {
        this.creatorHash[elementType] = elementCreator;
    };
    ReactElementFactory.prototype.getAllTypes = function () {
        var result = new Array();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    ReactElementFactory.prototype.isElementRegistered = function (elementType) {
        return !!this.creatorHash[elementType];
    };
    ReactElementFactory.prototype.createElement = function (elementType, params) {
        var creator = this.creatorHash[elementType];
        if (creator == null)
            return null;
        return creator(params);
    };
    ReactElementFactory.Instance = new ReactElementFactory();
    return ReactElementFactory;
}());



/***/ }),

/***/ "../survey-react-ui/src/element-header.tsx":
/*!*************************************************!*\
  !*** ../survey-react-ui/src/element-header.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyElementHeader: () => (/* binding */ SurveyElementHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/action-bar/action-bar */ "../survey-react-ui/src/components/action-bar/action-bar.tsx");
/* harmony import */ var _components_title_title_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/title/title-element */ "../survey-react-ui/src/components/title/title-element.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyElementHeader = /** @class */ (function (_super) {
    __extends(SurveyElementHeader, _super);
    function SurveyElementHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyElementHeader.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementHeader.prototype.getRenderedElements = function () {
        return [this.element];
    };
    SurveyElementHeader.prototype.renderElement = function () {
        var element = this.element;
        var title = element.hasTitle ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_title_title_element__WEBPACK_IMPORTED_MODULE_3__.TitleElement, { element: element })) : null;
        var description = element.hasDescriptionUnderTitle
            ? _reactquestion_element__WEBPACK_IMPORTED_MODULE_4__.SurveyElementBase.renderQuestionDescription(this.element)
            : null;
        var additionalTitleToolbarElement = element.hasAdditionalTitleToolbar ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_2__.SurveyActionBar, { model: element.additionalTitleToolbar }) : null;
        var headerStyle = { width: undefined };
        if (element instanceof survey_core__WEBPACK_IMPORTED_MODULE_1__.Question) {
            headerStyle.width = element.titleWidth;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: element.cssHeader, onClick: function (e) { return element.clickTitleFunction && element.clickTitleFunction(e.nativeEvent); }, style: headerStyle },
            title,
            description,
            additionalTitleToolbarElement));
    };
    return SurveyElementHeader;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_4__.SurveyElementBase));



/***/ }),

/***/ "../survey-react-ui/src/element.tsx":
/*!******************************************!*\
  !*** ../survey-react-ui/src/element.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyRowElement: () => (/* binding */ SurveyRowElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyRowElement = /** @class */ (function (_super) {
    __extends(SurveyRowElement, _super);
    function SurveyRowElement(props) {
        var _this = _super.call(this, props) || this;
        _this.element.cssClasses;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SurveyRowElement.prototype.getStateElement = function () {
        return this.element;
    };
    Object.defineProperty(SurveyRowElement.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRowElement.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRowElement.prototype, "row", {
        get: function () {
            return this.props.row;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRowElement.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRowElement.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRowElement.prototype, "css", {
        get: function () {
            return this.props.css;
        },
        enumerable: false,
        configurable: true
    });
    SurveyRowElement.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.rootRef.current) {
            (this.element).setWrapperElement(this.rootRef.current);
        }
    };
    SurveyRowElement.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.element.setWrapperElement(undefined);
    };
    SurveyRowElement.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        if (nextProps.element !== this.element) {
            if (nextProps.element) {
                nextProps.element.setWrapperElement(this.rootRef.current);
            }
            if (this.element) {
                this.element.setWrapperElement(undefined);
            }
        }
        this.element.cssClasses;
        return true;
    };
    SurveyRowElement.prototype.renderElement = function () {
        var element = this.element;
        var innerElement = this.createElement(element, this.index);
        var css = element.cssClassesValue;
        var focusIn = function () {
            var el = element;
            if (el && el.isQuestion) {
                el.focusIn();
            }
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: css.questionWrapper, style: element.rootStyle, "data-key": element.name + this.index, onFocus: focusIn, ref: this.rootRef }, innerElement));
    };
    SurveyRowElement.prototype.createElement = function (element, elementIndex) {
        if (!this.row.isNeedRender) {
            return _element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement(element.skeletonComponentName, { element: element, css: this.css, });
        }
        var elementType = element.getTemplate();
        if (!_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.isElementRegistered(elementType)) {
            elementType = "question";
        }
        return _element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement(elementType, {
            element: element,
            creator: this.creator,
            survey: this.survey,
            css: this.css,
        });
    };
    return SurveyRowElement;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));



/***/ }),

/***/ "../survey-react-ui/src/flow-panel.tsx":
/*!*********************************************!*\
  !*** ../survey-react-ui/src/flow-panel.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyFlowPanel: () => (/* binding */ SurveyFlowPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "../survey-react-ui/src/panel.tsx");
/* harmony import */ var _reactquestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion */ "../survey-react-ui/src/reactquestion.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyFlowPanel = /** @class */ (function (_super) {
    __extends(SurveyFlowPanel, _super);
    function SurveyFlowPanel(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyFlowPanel.prototype, "flowPanel", {
        get: function () {
            return this.panel;
        },
        enumerable: false,
        configurable: true
    });
    SurveyFlowPanel.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!!this.flowPanel) {
            this.flowPanel.onCustomHtmlProducing = function () {
                return "";
            };
            this.flowPanel.onGetHtmlForQuestion = this.renderQuestion;
        }
    };
    SurveyFlowPanel.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!!this.flowPanel) {
            this.flowPanel.onCustomHtmlProducing = null;
            this.flowPanel.onGetHtmlForQuestion = null;
        }
    };
    SurveyFlowPanel.prototype.getQuestion = function (name) {
        return this.flowPanel.getQuestionByName(name);
    };
    SurveyFlowPanel.prototype.renderQuestion = function (question) {
        return "<question>" + question.name + "</question>";
    };
    SurveyFlowPanel.prototype.renderRows = function () {
        var result = this.renderHtml();
        if (!!result) {
            return [result];
        }
        else {
            return [];
        }
    };
    SurveyFlowPanel.prototype.getNodeIndex = function () {
        return this.renderedIndex++;
    };
    SurveyFlowPanel.prototype.renderHtml = function () {
        if (!this.flowPanel)
            return null;
        var html = "<span>" + this.flowPanel.produceHtml() + "</span>";
        if (!DOMParser) {
            var htmlValue = { __html: html };
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { dangerouslySetInnerHTML: htmlValue });
        }
        var doc = new DOMParser().parseFromString(html, "text/xml");
        this.renderedIndex = 0;
        return this.renderParentNode(doc);
    };
    SurveyFlowPanel.prototype.renderNodes = function (domNodes) {
        var nodes = [];
        for (var i = 0; i < domNodes.length; i++) {
            var node = this.renderNode(domNodes[i]);
            if (!!node) {
                nodes.push(node);
            }
        }
        return nodes;
    };
    SurveyFlowPanel.prototype.getStyle = function (nodeType) {
        var style = {};
        if (nodeType.toLowerCase() === "b") {
            style.fontWeight = "bold";
        }
        if (nodeType.toLowerCase() === "i") {
            style.fontStyle = "italic";
        }
        if (nodeType.toLowerCase() === "u") {
            style.textDecoration = "underline";
        }
        return style;
    };
    SurveyFlowPanel.prototype.renderParentNode = function (node) {
        var nodeType = node.nodeName.toLowerCase();
        var children = this.renderNodes(this.getChildDomNodes(node));
        if (nodeType === "div")
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: this.getNodeIndex() }, children);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: this.getNodeIndex(), style: this.getStyle(nodeType) }, children));
    };
    SurveyFlowPanel.prototype.renderNode = function (node) {
        if (!this.hasTextChildNodesOnly(node)) {
            return this.renderParentNode(node);
        }
        var nodeType = node.nodeName.toLowerCase();
        if (nodeType === "question") {
            var question = this.flowPanel.getQuestionByName(node.textContent);
            if (!question)
                return null;
            var questionBody = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion__WEBPACK_IMPORTED_MODULE_3__.SurveyQuestion, { key: question.name, element: question, creator: this.creator, css: this.css }));
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: this.getNodeIndex() }, questionBody);
        }
        if (nodeType === "div") {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: this.getNodeIndex() }, node.textContent);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: this.getNodeIndex(), style: this.getStyle(nodeType) }, node.textContent));
    };
    SurveyFlowPanel.prototype.getChildDomNodes = function (node) {
        var domNodes = [];
        for (var i = 0; i < node.childNodes.length; i++) {
            domNodes.push(node.childNodes[i]);
        }
        return domNodes;
    };
    SurveyFlowPanel.prototype.hasTextChildNodesOnly = function (node) {
        var nodes = node.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeName.toLowerCase() !== "#text")
                return false;
        }
        return true;
    };
    SurveyFlowPanel.prototype.renderContent = function (style, rows) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("f-panel", { style: style }, rows);
    };
    return SurveyFlowPanel;
}(_panel__WEBPACK_IMPORTED_MODULE_2__.SurveyPanel));

_element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("flowpanel", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyFlowPanel, props);
});


/***/ }),

/***/ "../survey-react-ui/src/image.tsx":
/*!****************************************!*\
  !*** ../survey-react-ui/src/image.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionImage: () => (/* binding */ SurveyQuestionImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyQuestionImage = /** @class */ (function (_super) {
    __extends(SurveyQuestionImage, _super);
    function SurveyQuestionImage(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionImage.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        this.question.locImageLink.onChanged = function () {
            _this.forceUpdate();
        };
    };
    SurveyQuestionImage.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.question.locImageLink.onChanged = function () { };
    };
    Object.defineProperty(SurveyQuestionImage.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionImage.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.getImageCss();
        var style = { objectFit: this.question.imageFit, width: this.question.renderedStyleWidth, height: this.question.renderedStyleHeight };
        if (!this.question.imageLink || this.question.contentNotLoaded) {
            style["display"] = "none";
        }
        var control = null;
        if (this.question.renderedMode === "image") {
            control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: cssClasses, src: this.question.locImageLink.renderedHtml || null, alt: this.question.renderedAltText, width: this.question.renderedWidth, height: this.question.renderedHeight, style: style, onLoad: function (event) { _this.question.onLoadHandler(); }, onError: function (event) { _this.question.onErrorHandler(); } }));
        }
        if (this.question.renderedMode === "video") {
            control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", { controls: true, className: cssClasses, src: this.question.locImageLink.renderedHtml, width: this.question.renderedWidth, height: this.question.renderedHeight, style: style, onLoadedMetadata: function (event) { _this.question.onLoadHandler(); }, onError: function (event) { _this.question.onErrorHandler(); } }));
        }
        if (this.question.renderedMode === "youtube") {
            control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("iframe", { className: cssClasses, src: this.question.locImageLink.renderedHtml, width: this.question.renderedWidth, height: this.question.renderedHeight, style: style, title: this.question.renderedAltText }));
        }
        var noImage = null;
        if (!this.question.imageLink || this.question.contentNotLoaded) {
            noImage = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.noImage },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { iconName: this.question.cssClasses.noImageSvgIconId, size: 48 })));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.root },
            control,
            noImage);
    };
    return SurveyQuestionImage;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("image", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionImage, props);
});


/***/ }),

/***/ "../survey-react-ui/src/imagepicker.tsx":
/*!**********************************************!*\
  !*** ../survey-react-ui/src/imagepicker.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionImagePicker: () => (/* binding */ SurveyQuestionImagePicker),
/* harmony export */   SurveyQuestionImagePickerItem: () => (/* binding */ SurveyQuestionImagePickerItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _reactsurveymodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactsurveymodel */ "../survey-react-ui/src/reactsurveymodel.tsx");
/* harmony import */ var _components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyQuestionImagePicker = /** @class */ (function (_super) {
    __extends(SurveyQuestionImagePicker, _super);
    function SurveyQuestionImagePicker(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionImagePicker.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionImagePicker.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", { className: this.question.getSelectBaseRootCss(), style: this.question.getContainerStyle() },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", { className: "sv-hidden" }, this.question.locTitle.renderedHtml),
            this.question.hasColumns ? this.getColumns(cssClasses) : this.getItems(cssClasses)));
    };
    SurveyQuestionImagePicker.prototype.getColumns = function (cssClasses) {
        var _this = this;
        return this.question.columns.map(function (column, ci) {
            var items = column.map(function (item, ii) {
                return _this.renderItem("item" + ii, item, cssClasses);
            });
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: "column" + ci + _this.question.getItemsColumnKey(column), className: _this.question.getColumnClass(), role: "presentation" }, items));
        });
    };
    SurveyQuestionImagePicker.prototype.getItems = function (cssClasses) {
        var items = [];
        for (var i = 0; i < this.question.visibleChoices.length; i++) {
            var item = this.question.visibleChoices[i];
            var key = "item" + i;
            items.push(this.renderItem(key, item, cssClasses));
        }
        return items;
    };
    Object.defineProperty(SurveyQuestionImagePicker.prototype, "textStyle", {
        get: function () {
            return { marginLeft: "3px", display: "inline", position: "static" };
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionImagePicker.prototype.renderItem = function (key, item, cssClasses) {
        var renderedItem = react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionImagePickerItem, { key: key, question: this.question, item: item, cssClasses: cssClasses });
        var survey = this.question.survey;
        var wrappedItem = null;
        if (!!survey) {
            wrappedItem = _reactsurveymodel__WEBPACK_IMPORTED_MODULE_3__.ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
        }
        return wrappedItem !== null && wrappedItem !== void 0 ? wrappedItem : renderedItem;
    };
    return SurveyQuestionImagePicker;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

var SurveyQuestionImagePickerItem = /** @class */ (function (_super) {
    __extends(SurveyQuestionImagePickerItem, _super);
    function SurveyQuestionImagePickerItem(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }
    SurveyQuestionImagePickerItem.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyQuestionImagePickerItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.reactOnStrChanged();
    };
    SurveyQuestionImagePickerItem.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.item.locImageLink.onChanged = function () { };
    };
    SurveyQuestionImagePickerItem.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.reactOnStrChanged();
    };
    SurveyQuestionImagePickerItem.prototype.reactOnStrChanged = function () {
        var _this = this;
        this.item.locImageLink.onChanged = function () {
            _this.setState({ locImageLinkchanged: !!_this.state && _this.state.locImageLink ? _this.state.locImageLink + 1 : 1 });
        };
    };
    Object.defineProperty(SurveyQuestionImagePickerItem.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionImagePickerItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionImagePickerItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionImagePickerItem.prototype.handleOnChange = function (event) {
        if (this.question.isReadOnlyAttr)
            return;
        if (this.question.multiSelect) {
            if (event.target.checked) {
                this.question.value = this.question.value.concat(event.target.value);
            }
            else {
                var currValue = this.question.value;
                currValue.splice(this.question.value.indexOf(event.target.value), 1);
                this.question.value = currValue;
            }
        }
        else {
            this.question.value = event.target.value;
        }
        this.setState({ value: this.question.value });
    };
    SurveyQuestionImagePickerItem.prototype.renderElement = function () {
        var _this = this;
        var item = this.item;
        var question = this.question;
        var cssClasses = this.cssClasses;
        var isChecked = question.isItemSelected(item);
        var itemClass = question.getItemClass(item);
        var text = null;
        if (question.showLabel) {
            text = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: question.cssClasses.itemText }, item.text ? _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase.renderLocString(item.locText) : item.value));
        }
        var style = { objectFit: this.question.imageFit };
        var control = null;
        if (item.locImageLink.renderedHtml && this.question.contentMode === "image") {
            control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: cssClasses.image, src: item.locImageLink.renderedHtml, width: this.question.renderedImageWidth, height: this.question.renderedImageHeight, alt: item.locText.renderedHtml, style: style, onLoad: function (event) { _this.question["onContentLoaded"](item, event.nativeEvent); }, onError: function (event) { item.onErrorHandler(item, event.nativeEvent); } }));
        }
        if (item.locImageLink.renderedHtml && this.question.contentMode === "video") {
            control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", { controls: true, className: cssClasses.image, src: item.locImageLink.renderedHtml, width: this.question.renderedImageWidth, height: this.question.renderedImageHeight, style: style, onLoadedMetadata: function (event) { _this.question["onContentLoaded"](item, event.nativeEvent); }, onError: function (event) { item.onErrorHandler(item, event.nativeEvent); } }));
        }
        if (!item.locImageLink.renderedHtml || item.contentNotLoaded) {
            var style_1 = {
                width: this.question.renderedImageWidth,
                height: this.question.renderedImageHeight,
                objectFit: this.question.imageFit
            };
            control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.itemNoImage, style: style_1 }, cssClasses.itemNoImageSvgIcon ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, { className: cssClasses.itemNoImageSvgIcon, iconName: this.question.cssClasses.itemNoImageSvgIconId, size: 48 }) :
                null));
        }
        var renderedItem = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: itemClass },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: cssClasses.label },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: cssClasses.itemControl, id: this.question.getItemId(item), type: this.question.inputType, name: this.question.questionName, checked: isChecked, value: item.value, disabled: !this.question.getItemEnabled(item), readOnly: this.question.isReadOnlyAttr, onChange: this.handleOnChange, required: this.question.inputRequiredAttribute, "aria-label": item.locText.renderedHtml, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.itemDecorator },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.imageContainer },
                        !!this.question.cssClasses.checkedItemDecorator ?
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.checkedItemDecorator, "aria-hidden": "true" }, !!this.question.cssClasses.checkedItemSvgIconId ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_4__.SvgIcon, { size: "auto", className: this.question.cssClasses.checkedItemSvgIcon, iconName: this.question.cssClasses.checkedItemSvgIconId }) : null) : null,
                        control),
                    text))));
        return renderedItem;
    };
    return SurveyQuestionImagePickerItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("imagepicker", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionImagePicker, props);
});


/***/ }),

/***/ "../survey-react-ui/src/page.tsx":
/*!***************************************!*\
  !*** ../survey-react-ui/src/page.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyPage: () => (/* binding */ SurveyPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _panel_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-base */ "../survey-react-ui/src/panel-base.tsx");
/* harmony import */ var _components_title_title_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/title/title-element */ "../survey-react-ui/src/components/title/title-element.tsx");
/* harmony import */ var _reactquestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactquestion */ "../survey-react-ui/src/reactquestion.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyPage = /** @class */ (function (_super) {
    __extends(SurveyPage, _super);
    function SurveyPage(props) {
        return _super.call(this, props) || this;
    }
    SurveyPage.prototype.getPanelBase = function () {
        return this.props.page;
    };
    Object.defineProperty(SurveyPage.prototype, "page", {
        get: function () {
            return this.panelBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyPage.prototype.renderElement = function () {
        var title = this.renderTitle();
        var description = this.renderDescription();
        var rows = this.renderRows(this.panelBase.cssClasses);
        var errors = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion__WEBPACK_IMPORTED_MODULE_4__.SurveyElementErrors, { element: this.panelBase, cssClasses: this.panelBase.cssClasses, creator: this.creator }));
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.rootRef, className: this.page.cssRoot },
            title,
            description,
            errors,
            rows));
    };
    SurveyPage.prototype.renderTitle = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_title_title_element__WEBPACK_IMPORTED_MODULE_3__.TitleElement, { element: this.page });
    };
    SurveyPage.prototype.renderDescription = function () {
        if (!this.page._showDescription)
            return null;
        var text = _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase.renderLocString(this.page.locDescription);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.panelBase.cssClasses.page.description }, text));
    };
    return SurveyPage;
}(_panel_base__WEBPACK_IMPORTED_MODULE_2__.SurveyPanelBase));



/***/ }),

/***/ "../survey-react-ui/src/panel-base.tsx":
/*!*********************************************!*\
  !*** ../survey-react-ui/src/panel-base.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyPanelBase: () => (/* binding */ SurveyPanelBase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./row */ "../survey-react-ui/src/row.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyPanelBase = /** @class */ (function (_super) {
    __extends(SurveyPanelBase, _super);
    function SurveyPanelBase(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SurveyPanelBase.prototype.getStateElement = function () {
        return this.panelBase;
    };
    SurveyPanelBase.prototype.canUsePropInState = function (key) {
        return key !== "elements" && _super.prototype.canUsePropInState.call(this, key);
    };
    Object.defineProperty(SurveyPanelBase.prototype, "survey", {
        get: function () {
            return this.getSurvey();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyPanelBase.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyPanelBase.prototype, "css", {
        get: function () {
            return this.getCss();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyPanelBase.prototype, "panelBase", {
        get: function () {
            return this.getPanelBase();
        },
        enumerable: false,
        configurable: true
    });
    SurveyPanelBase.prototype.getPanelBase = function () {
        return this.props.element || this.props.question;
    };
    SurveyPanelBase.prototype.getSurvey = function () {
        return (this.props.survey || (!!this.panelBase ? this.panelBase.survey : null));
    };
    SurveyPanelBase.prototype.getCss = function () {
        return this.props.css;
    };
    SurveyPanelBase.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.doAfterRender();
    };
    SurveyPanelBase.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        var el = this.rootRef.current;
        if (!!el) {
            el.removeAttribute("data-rendered");
        }
    };
    SurveyPanelBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (!!prevProps.page &&
            !!this.survey &&
            !!this.survey.activePage &&
            prevProps.page.id === this.survey.activePage.id)
            return;
        this.doAfterRender();
    };
    SurveyPanelBase.prototype.doAfterRender = function () {
        var el = this.rootRef.current;
        if (el && this.survey) {
            if (this.panelBase.isPanel) {
                this.panelBase.afterRender(el);
            }
            else {
                this.survey.afterRenderPage(el);
            }
        }
    };
    SurveyPanelBase.prototype.getIsVisible = function () {
        return this.panelBase.isVisible;
    };
    SurveyPanelBase.prototype.canRender = function () {
        return (_super.prototype.canRender.call(this) && !!this.survey && !!this.panelBase && !!this.panelBase.survey && this.getIsVisible());
    };
    SurveyPanelBase.prototype.renderRows = function (css) {
        var _this = this;
        return this.panelBase.visibleRows.map(function (row) { return _this.createRow(row, css); });
    };
    SurveyPanelBase.prototype.createRow = function (row, css) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_row__WEBPACK_IMPORTED_MODULE_2__.SurveyRow, { key: row.id, row: row, survey: this.survey, creator: this.creator, css: css }));
    };
    return SurveyPanelBase;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));



/***/ }),

/***/ "../survey-react-ui/src/panel.tsx":
/*!****************************************!*\
  !*** ../survey-react-ui/src/panel.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyPanel: () => (/* binding */ SurveyPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion */ "../survey-react-ui/src/reactquestion.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _panel_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel-base */ "../survey-react-ui/src/panel-base.tsx");
/* harmony import */ var _reactsurveymodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactsurveymodel */ "../survey-react-ui/src/reactsurveymodel.tsx");
/* harmony import */ var _components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/action-bar/action-bar */ "../survey-react-ui/src/components/action-bar/action-bar.tsx");
/* harmony import */ var _components_title_title_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/title/title-element */ "../survey-react-ui/src/components/title/title-element.tsx");
/* harmony import */ var _element_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./element-header */ "../survey-react-ui/src/element-header.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var SurveyPanel = /** @class */ (function (_super) {
    __extends(SurveyPanel, _super);
    function SurveyPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.hasBeenExpanded = false;
        return _this;
    }
    Object.defineProperty(SurveyPanel.prototype, "panel", {
        get: function () {
            return this.panelBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyPanel.prototype.renderElement = function () {
        var _this = this;
        var header = this.renderHeader();
        var errors = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion__WEBPACK_IMPORTED_MODULE_1__.SurveyElementErrors, { element: this.panelBase, cssClasses: this.panelBase.cssClasses, creator: this.creator }));
        var style = {
            paddingLeft: this.panel.innerPaddingLeft,
            display: this.panel.renderedIsExpanded ? undefined : "none",
        };
        var content = null;
        if (this.panel.renderedIsExpanded) {
            // this.hasBeenExpanded = true;
            var rows = this.renderRows(this.panelBase.cssClasses);
            var className = this.panelBase.cssClasses.panel.content;
            content = this.renderContent(style, rows, className);
        }
        var focusIn = function () {
            if (_this.panelBase)
                _this.panelBase.focusIn();
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.rootRef, className: this.panelBase.getContainerCss(), onFocus: focusIn, id: this.panelBase.id },
            this.panel.showErrorsAbovePanel ? errors : null,
            header,
            this.panel.showErrorsAbovePanel ? null : errors,
            content));
    };
    SurveyPanel.prototype.renderHeader = function () {
        if (!this.panel.hasTitle && !this.panel.hasDescription) {
            return null;
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_element_header__WEBPACK_IMPORTED_MODULE_8__.SurveyElementHeader, { element: this.panel });
    };
    SurveyPanel.prototype.wrapElement = function (element) {
        var survey = this.panel.survey;
        var wrapper = null;
        if (survey) {
            wrapper = _reactsurveymodel__WEBPACK_IMPORTED_MODULE_5__.ReactSurveyElementsWrapper.wrapElement(survey, element, this.panel);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    SurveyPanel.prototype.renderContent = function (style, rows, className) {
        var bottom = this.renderBottom();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: style, className: className, id: this.panel.contentId, role: this.panel.ariaRole, "aria-labelledby": this.panel.ariaLabelledBy, "aria-label": this.panel.ariaLabel },
            rows,
            bottom));
    };
    SurveyPanel.prototype.renderTitle = function () {
        if (!this.panelBase.title)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_title_title_element__WEBPACK_IMPORTED_MODULE_7__.TitleElement, { element: this.panelBase });
    };
    SurveyPanel.prototype.renderDescription = function () {
        if (!this.panelBase.description)
            return null;
        var text = _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyElementBase.renderLocString(this.panelBase.locDescription);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.panel.cssClasses.panel.description }, text));
    };
    SurveyPanel.prototype.renderBottom = function () {
        var footerToolbar = this.panel.getFooterToolbar();
        if (!footerToolbar.hasActions)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_6__.SurveyActionBar, { model: footerToolbar });
    };
    SurveyPanel.prototype.getIsVisible = function () {
        return this.panelBase.getIsContentVisible();
    };
    return SurveyPanel;
}(_panel_base__WEBPACK_IMPORTED_MODULE_4__.SurveyPanelBase));

_element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("panel", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyPanel, props);
});


/***/ }),

/***/ "../survey-react-ui/src/progress.tsx":
/*!*******************************************!*\
  !*** ../survey-react-ui/src/progress.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyProgress: () => (/* binding */ SurveyProgress)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reactSurveyNavigationBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactSurveyNavigationBase */ "../survey-react-ui/src/reactSurveyNavigationBase.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyProgress = /** @class */ (function (_super) {
    __extends(SurveyProgress, _super);
    function SurveyProgress(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyProgress.prototype, "isTop", {
        get: function () {
            return this.props.isTop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyProgress.prototype, "progress", {
        get: function () {
            return this.survey.progressValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyProgress.prototype, "progressText", {
        get: function () {
            return this.survey.progressText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyProgress.prototype, "progressBarAriaLabel", {
        get: function () {
            return this.survey.progressBarAriaLabel;
        },
        enumerable: false,
        configurable: true
    });
    SurveyProgress.prototype.render = function () {
        var progressStyle = {
            width: this.progress + "%",
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.survey.getProgressCssClasses(this.props.container) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: progressStyle, className: this.css.progressBar, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": this.progressBarAriaLabel },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: survey_core__WEBPACK_IMPORTED_MODULE_1__.SurveyProgressModel.getProgressTextInBarCss(this.css) }, this.progressText)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: survey_core__WEBPACK_IMPORTED_MODULE_1__.SurveyProgressModel.getProgressTextUnderBarCss(this.css) }, this.progressText)));
    };
    return SurveyProgress;
}(_reactSurveyNavigationBase__WEBPACK_IMPORTED_MODULE_2__.SurveyNavigationBase));

_element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("sv-progress-pages", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyProgress, props);
});
_element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("sv-progress-questions", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyProgress, props);
});
_element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("sv-progress-correctquestions", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyProgress, props);
});
_element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("sv-progress-requiredquestions", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyProgress, props);
});


/***/ }),

/***/ "../survey-react-ui/src/progressButtons.tsx":
/*!**************************************************!*\
  !*** ../survey-react-ui/src/progressButtons.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyProgressButtons: () => (/* binding */ SurveyProgressButtons)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reactSurveyNavigationBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactSurveyNavigationBase */ "../survey-react-ui/src/reactSurveyNavigationBase.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyProgressButtons = /** @class */ (function (_super) {
    __extends(SurveyProgressButtons, _super);
    function SurveyProgressButtons(props) {
        var _this = _super.call(this, props) || this;
        _this.listContainerRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Object.defineProperty(SurveyProgressButtons.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyProgressButtons.prototype, "container", {
        get: function () {
            return this.props.container;
        },
        enumerable: false,
        configurable: true
    });
    SurveyProgressButtons.prototype.onResize = function (canShowItemTitles) {
        this.setState({ canShowItemTitles: canShowItemTitles });
        this.setState({ canShowHeader: !canShowItemTitles });
    };
    SurveyProgressButtons.prototype.onUpdateScroller = function (hasScroller) {
        this.setState({ hasScroller: hasScroller });
    };
    SurveyProgressButtons.prototype.onUpdateSettings = function () {
        this.setState({ canShowItemTitles: this.model.showItemTitles });
        this.setState({ canShowFooter: !this.model.showItemTitles });
    };
    SurveyProgressButtons.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.getRootCss(this.props.container), style: { "maxWidth": this.model.progressWidth }, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": this.model.progressBarAriaLabel },
            this.state.canShowHeader ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsHeader },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsPageTitle, title: this.model.headerText }, this.model.headerText)) : null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsContainer },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.getScrollButtonCss(this.state.hasScroller, true), role: "button", onClick: function () {
                        return _this.clickScrollButton(_this.listContainerRef.current, true);
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsListContainer, ref: this.listContainerRef },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: this.css.progressButtonsList }, this.getListElements())),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.getScrollButtonCss(this.state.hasScroller, false), role: "button", onClick: function () {
                        return _this.clickScrollButton(_this.listContainerRef.current, false);
                    } })),
            this.state.canShowFooter ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsFooter },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsPageTitle, title: this.model.footerText }, this.model.footerText)) : null));
    };
    SurveyProgressButtons.prototype.getListElements = function () {
        var _this = this;
        var buttons = [];
        this.survey.visiblePages.forEach(function (page, index) {
            buttons.push(_this.renderListElement(page, index));
        });
        return buttons;
    };
    SurveyProgressButtons.prototype.renderListElement = function (page, index) {
        var _this = this;
        var text = _reactquestion_element__WEBPACK_IMPORTED_MODULE_4__.SurveyElementBase.renderLocString(page.locNavigationTitle);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: "listelement" + index, className: this.model.getListElementCss(index), onClick: this.model.isListElementClickable(index)
                ? function () { return _this.model.clickListElement(page); }
                : undefined, "data-page-number": this.model.getItemNumber(page) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsConnector }),
            this.state.canShowItemTitles ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsPageTitle, title: page.renderedNavigationTitle }, text),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsPageDescription, title: page.navigationDescription }, page.navigationDescription)) : null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsButton },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsButtonBackground }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.progressButtonsButtonContent }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.model.getItemNumber(page)))));
    };
    SurveyProgressButtons.prototype.clickScrollButton = function (listContainerElement, isLeftScroll) {
        if (!!listContainerElement) {
            listContainerElement.scrollLeft += (isLeftScroll ? -1 : 1) * 70;
        }
    };
    SurveyProgressButtons.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        setTimeout(function () {
            _this.respManager = new survey_core__WEBPACK_IMPORTED_MODULE_1__.ProgressButtonsResponsivityManager(_this.model, _this.listContainerRef.current, _this);
        }, 10);
    };
    SurveyProgressButtons.prototype.componentWillUnmount = function () {
        if (!!this.respManager) {
            this.respManager.dispose();
        }
        _super.prototype.componentWillUnmount.call(this);
    };
    return SurveyProgressButtons;
}(_reactSurveyNavigationBase__WEBPACK_IMPORTED_MODULE_2__.SurveyNavigationBase));

_element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("sv-progress-buttons", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyProgressButtons, props);
});


/***/ }),

/***/ "../survey-react-ui/src/progressToc.tsx":
/*!**********************************************!*\
  !*** ../survey-react-ui/src/progressToc.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyProgressToc: () => (/* binding */ SurveyProgressToc)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactSurveyNavigationBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactSurveyNavigationBase */ "../survey-react-ui/src/reactSurveyNavigationBase.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _components_list_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list/list */ "../survey-react-ui/src/components/list/list.tsx");
/* harmony import */ var _components_popup_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/popup/popup */ "../survey-react-ui/src/components/popup/popup.tsx");
/* harmony import */ var _components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var SurveyProgressToc = /** @class */ (function (_super) {
    __extends(SurveyProgressToc, _super);
    function SurveyProgressToc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyProgressToc.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        var tocModel = this.props.model;
        tocModel.updateStickyTOCSize(this.survey.rootElement);
    };
    SurveyProgressToc.prototype.render = function () {
        var tocModel = this.props.model;
        var content;
        if (tocModel.isMobile) {
            content = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { onClick: tocModel.togglePopup },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIcon, { iconName: tocModel.icon, size: 24 }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_popup_popup__WEBPACK_IMPORTED_MODULE_4__.Popup, { model: tocModel.popupModel }));
        }
        else {
            content = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_list_list__WEBPACK_IMPORTED_MODULE_3__.List, { model: tocModel.listModel });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: tocModel.containerCss }, content));
    };
    return SurveyProgressToc;
}(_reactSurveyNavigationBase__WEBPACK_IMPORTED_MODULE_1__.SurveyNavigationBase));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("sv-navigation-toc", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyProgressToc, props);
});


/***/ }),

/***/ "../survey-react-ui/src/rating-dropdown.tsx":
/*!**************************************************!*\
  !*** ../survey-react-ui/src/rating-dropdown.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingDropdownItem: () => (/* reexport safe */ _components_rating_rating_dropdown_item__WEBPACK_IMPORTED_MODULE_4__.RatingDropdownItem),
/* harmony export */   SurveyQuestionRatingDropdown: () => (/* binding */ SurveyQuestionRatingDropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dropdown_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-base */ "../survey-react-ui/src/dropdown-base.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _components_rating_rating_dropdown_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rating/rating-dropdown-item */ "../survey-react-ui/src/components/rating/rating-dropdown-item.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyQuestionRatingDropdown = /** @class */ (function (_super) {
    __extends(SurveyQuestionRatingDropdown, _super);
    function SurveyQuestionRatingDropdown(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionRatingDropdown.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var select = this.renderSelect(cssClasses);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.rootDropdown }, select));
    };
    return SurveyQuestionRatingDropdown;
}(_dropdown_base__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionDropdownBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__.ReactQuestionFactory.Instance.registerQuestion("sv-rating-dropdown", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionRatingDropdown, props);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory.Instance.registerRenderer("rating", "dropdown", "sv-rating-dropdown");


/***/ }),

/***/ "../survey-react-ui/src/react-popup-survey.tsx":
/*!*****************************************************!*\
  !*** ../survey-react-ui/src/react-popup-survey.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopupSurvey: () => (/* binding */ PopupSurvey),
/* harmony export */   SurveyWindow: () => (/* binding */ SurveyWindow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reactSurvey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactSurvey */ "../survey-react-ui/src/reactSurvey.tsx");
/* harmony import */ var _components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var PopupSurvey = /** @class */ (function (_super) {
    __extends(PopupSurvey, _super);
    function PopupSurvey(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnExpanded = _this.handleOnExpanded.bind(_this);
        return _this;
    }
    PopupSurvey.prototype.getStateElements = function () {
        return [this.popup, this.popup.survey];
    };
    PopupSurvey.prototype.handleOnExpanded = function (event) {
        this.popup.changeExpandCollapse();
    };
    PopupSurvey.prototype.canRender = function () {
        return _super.prototype.canRender.call(this) && this.popup.isShowing;
    };
    PopupSurvey.prototype.renderElement = function () {
        var _this = this;
        var header = this.renderWindowHeader();
        var body = this.renderBody();
        var style = {};
        if (!!this.popup.renderedWidth) {
            style.width = this.popup.renderedWidth;
            style.maxWidth = this.popup.renderedWidth;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.popup.cssRoot, style: style, onScroll: function () { return _this.popup.onScroll(); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.popup.cssRootContent },
                header,
                body)));
    };
    PopupSurvey.prototype.renderWindowHeader = function () {
        var popup = this.popup;
        var headerCss = popup.cssHeaderRoot;
        var titleCollapsed = null;
        var expandCollapseIcon;
        var closeButton = null;
        var allowFullScreenButon = null;
        if (popup.isCollapsed) {
            headerCss += " " + popup.cssRootCollapsedMod;
            titleCollapsed = this.renderTitleCollapsed(popup);
            expandCollapseIcon = this.renderExpandIcon();
        }
        else {
            expandCollapseIcon = this.renderCollapseIcon();
        }
        if (popup.allowClose) {
            closeButton = this.renderCloseButton(this.popup);
        }
        if (popup.allowFullScreen) {
            allowFullScreenButon = this.renderAllowFullScreenButon(this.popup);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: popup.cssHeaderRoot },
            titleCollapsed,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: popup.cssHeaderButtonsContainer },
                allowFullScreenButon,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: popup.cssHeaderCollapseButton, onClick: this.handleOnExpanded }, expandCollapseIcon),
                closeButton)));
    };
    PopupSurvey.prototype.renderTitleCollapsed = function (popup) {
        if (!popup.locTitle)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: popup.cssHeaderTitleCollapsed }, popup.locTitle.renderedHtml);
    };
    PopupSurvey.prototype.renderExpandIcon = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { iconName: "icon-restore_16x16", size: 16 });
    };
    PopupSurvey.prototype.renderCollapseIcon = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { iconName: "icon-minimize_16x16", size: 16 });
    };
    PopupSurvey.prototype.renderCloseButton = function (popup) {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: popup.cssHeaderCloseButton, onClick: function () {
                popup.hide();
                if (typeof _this.props.onClose == "function") {
                    _this.props.onClose();
                }
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { iconName: "icon-close_16x16", size: 16 })));
    };
    PopupSurvey.prototype.renderAllowFullScreenButon = function (popup) {
        var Icon;
        if (popup.isFullScreen) {
            Icon = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { iconName: "icon-back-to-panel_16x16", size: 16 });
        }
        else {
            Icon = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { iconName: "icon-full-screen_16x16", size: 16 });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: popup.cssHeaderFullScreenButton, onClick: function () { popup.toggleFullScreen(); } }, Icon));
    };
    PopupSurvey.prototype.renderBody = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.popup.cssBody }, this.doRender());
    };
    PopupSurvey.prototype.createSurvey = function (newProps) {
        if (!newProps)
            newProps = {};
        _super.prototype.createSurvey.call(this, newProps);
        this.popup = new survey_core__WEBPACK_IMPORTED_MODULE_1__.PopupSurveyModel(null, this.survey);
        if (newProps.closeOnCompleteTimeout) {
            this.popup.closeOnCompleteTimeout = newProps.closeOnCompleteTimeout;
        }
        this.popup.allowClose = newProps.allowClose;
        this.popup.allowFullScreen = newProps.allowFullScreen;
        this.popup.isShowing = true;
        if (!this.popup.isExpanded && (newProps.expanded || newProps.isExpanded))
            this.popup.expand();
    };
    return PopupSurvey;
}(_reactSurvey__WEBPACK_IMPORTED_MODULE_2__.Survey));

/**
 * @deprecated Use `PopupSurvey` instead.
 */
var SurveyWindow = /** @class */ (function (_super) {
    __extends(SurveyWindow, _super);
    function SurveyWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SurveyWindow;
}(PopupSurvey));



/***/ }),

/***/ "../survey-react-ui/src/reactSurvey.tsx":
/*!**********************************************!*\
  !*** ../survey-react-ui/src/reactSurvey.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Survey: () => (/* binding */ Survey),
/* harmony export */   attachKey2click: () => (/* binding */ attachKey2click)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "../survey-react-ui/src/page.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _components_survey_header_survey_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/survey-header/survey-header */ "../survey-react-ui/src/components/survey-header/survey-header.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _components_brand_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/brand-info */ "../survey-react-ui/src/components/brand-info.tsx");
/* harmony import */ var _components_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/notifier */ "../survey-react-ui/src/components/notifier.tsx");
/* harmony import */ var _components_components_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components-container */ "../survey-react-ui/src/components/components-container.tsx");
/* harmony import */ var _svgbundle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./svgbundle */ "../survey-react-ui/src/svgbundle.tsx");
/* harmony import */ var _components_popup_popup_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/popup/popup-modal */ "../survey-react-ui/src/components/popup/popup-modal.tsx");
/* harmony import */ var survey_core_icons_iconsV1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! survey-core/icons/iconsV1 */ "../survey-core/build/icons/iconsV1.js");
/* harmony import */ var survey_core_icons_iconsV1__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(survey_core_icons_iconsV1__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var survey_core_icons_iconsV2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! survey-core/icons/iconsV2 */ "../survey-core/build/icons/iconsV2.js");
/* harmony import */ var survey_core_icons_iconsV2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(survey_core_icons_iconsV2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/scroll */ "../survey-react-ui/src/components/scroll.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};















(0,survey_core__WEBPACK_IMPORTED_MODULE_1__.addIconsToThemeSet)("v1", survey_core_icons_iconsV1__WEBPACK_IMPORTED_MODULE_12__.icons);
(0,survey_core__WEBPACK_IMPORTED_MODULE_1__.addIconsToThemeSet)("v2", survey_core_icons_iconsV2__WEBPACK_IMPORTED_MODULE_13__.icons);
survey_core__WEBPACK_IMPORTED_MODULE_1__.SvgRegistry.registerIcons(survey_core_icons_iconsV2__WEBPACK_IMPORTED_MODULE_13__.icons);
var Survey = /** @class */ (function (_super) {
    __extends(Survey, _super);
    function Survey(props) {
        var _this = _super.call(this, props) || this;
        _this.previousJSON = {};
        _this.isSurveyUpdated = false;
        _this.createSurvey(props);
        _this.updateSurvey(props, {});
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        _this.rootNodeId = props.id || null;
        _this.rootNodeClassName = props.className || "";
        return _this;
    }
    Survey.prototype.getStateElement = function () {
        return this.survey;
    };
    Survey.prototype.onSurveyUpdated = function () {
        if (!!this.survey) {
            var el = this.rootRef.current;
            if (!!el)
                this.survey.afterRenderSurvey(el);
            this.survey.startTimerFromUI();
            this.setSurveyEvents();
        }
    };
    Survey.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        if (this.isModelJSONChanged(nextProps)) {
            this.destroySurvey();
            this.createSurvey(nextProps);
            this.updateSurvey(nextProps, {});
            this.isSurveyUpdated = true;
        }
        return true;
    };
    Survey.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.updateSurvey(this.props, prevProps);
        if (this.isSurveyUpdated) {
            this.onSurveyUpdated();
            this.isSurveyUpdated = false;
        }
    };
    Survey.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.onSurveyUpdated();
    };
    Survey.prototype.destroySurvey = function () {
        if (this.survey) {
            this.survey.renderCallback = undefined;
            this.survey.onPartialSend.clear();
            this.survey.stopTimer();
            this.survey.destroyResizeObserver();
        }
    };
    Survey.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.destroySurvey();
    };
    Survey.prototype.doRender = function () {
        var renderResult;
        if (this.survey.state == "completed") {
            renderResult = this.renderCompleted();
        }
        else if (this.survey.state == "completedbefore") {
            renderResult = this.renderCompletedBefore();
        }
        else if (this.survey.state == "loading") {
            renderResult = this.renderLoading();
        }
        else if (this.survey.state == "empty") {
            renderResult = this.renderEmptySurvey();
        }
        else {
            renderResult = this.renderSurvey();
        }
        var backgroundImage = !!this.survey.backgroundImage ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.rootBackgroundImage, style: this.survey.backgroundImageStyle }) : null;
        var header = this.survey.headerView === "basic" ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_survey_header_survey_header__WEBPACK_IMPORTED_MODULE_4__.SurveyHeader, { survey: this.survey }) : null;
        var onSubmit = function (event) {
            event.preventDefault();
        };
        var customHeader = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv_custom_header" });
        if (this.survey.hasLogo) {
            customHeader = null;
        }
        var rootCss = this.survey.getRootCss();
        var cssClasses = this.rootNodeClassName ? this.rootNodeClassName + " " + rootCss : rootCss;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: this.rootNodeId, ref: this.rootRef, className: cssClasses, style: this.survey.themeVariables, lang: this.survey.locale || "en", dir: this.survey.localeDir },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_scroll__WEBPACK_IMPORTED_MODULE_14__.Scroll, { disabled: this.survey.rootScrollDisabled },
                this.survey.needRenderIcons ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_svgbundle__WEBPACK_IMPORTED_MODULE_10__.SvgBundleComponent, null) : null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_popup_popup_modal__WEBPACK_IMPORTED_MODULE_11__.PopupModal, null),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.survey.wrapperFormCss },
                    backgroundImage,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", { onSubmit: onSubmit },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_scroll__WEBPACK_IMPORTED_MODULE_14__.Scroll, { disabled: this.survey.formScrollDisabled },
                            customHeader,
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.container },
                                header,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_components_container__WEBPACK_IMPORTED_MODULE_9__.ComponentsContainer, { survey: this.survey, container: "header", needRenderWrapper: false }),
                                renderResult,
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_components_container__WEBPACK_IMPORTED_MODULE_9__.ComponentsContainer, { survey: this.survey, container: "footer", needRenderWrapper: false })))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_notifier__WEBPACK_IMPORTED_MODULE_8__.NotifierComponent, { notifier: this.survey.notifier })))));
    };
    Survey.prototype.renderElement = function () {
        return this.doRender();
    };
    Object.defineProperty(Survey.prototype, "css", {
        get: function () {
            return this.survey.css;
        },
        set: function (value) {
            this.survey.css = value;
        },
        enumerable: false,
        configurable: true
    });
    Survey.prototype.renderCompleted = function () {
        if (!this.survey.showCompletedPage)
            return null;
        var htmlValue = { __html: this.survey.processedCompletedHtml };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { dangerouslySetInnerHTML: htmlValue, className: this.survey.completedCss }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_components_container__WEBPACK_IMPORTED_MODULE_9__.ComponentsContainer, { survey: this.survey, container: "completePage", needRenderWrapper: false })));
    };
    Survey.prototype.renderCompletedBefore = function () {
        var htmlValue = { __html: this.survey.processedCompletedBeforeHtml };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { dangerouslySetInnerHTML: htmlValue, className: this.survey.completedBeforeCss }));
    };
    Survey.prototype.renderLoading = function () {
        var htmlValue = { __html: this.survey.processedLoadingHtml };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { dangerouslySetInnerHTML: htmlValue, className: this.survey.loadingBodyCss }));
    };
    Survey.prototype.renderSurvey = function () {
        var activePage = this.survey.activePage
            ? this.renderPage(this.survey.activePage)
            : null;
        var isStaring = this.survey.isShowStartingPage;
        var pageId = this.survey.activePage ? this.survey.activePage.id : "";
        var className = this.survey.bodyCss;
        var style = {};
        if (!!this.survey.renderedWidth) {
            style.maxWidth = this.survey.renderedWidth;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.survey.bodyContainerCss },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_components_container__WEBPACK_IMPORTED_MODULE_9__.ComponentsContainer, { survey: this.survey, container: "left" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-components-column sv-components-column--expandable" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_components_container__WEBPACK_IMPORTED_MODULE_9__.ComponentsContainer, { survey: this.survey, container: "center" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: pageId, className: className, style: style },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_components_container__WEBPACK_IMPORTED_MODULE_9__.ComponentsContainer, { survey: this.survey, container: "contentTop" }),
                    activePage,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_components_container__WEBPACK_IMPORTED_MODULE_9__.ComponentsContainer, { survey: this.survey, container: "contentBottom" }),
                    this.survey.showBrandInfo ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_brand_info__WEBPACK_IMPORTED_MODULE_7__.BrandInfo, null) : null)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_components_container__WEBPACK_IMPORTED_MODULE_9__.ComponentsContainer, { survey: this.survey, container: "right" })));
    };
    Survey.prototype.renderPage = function (page) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page__WEBPACK_IMPORTED_MODULE_2__.SurveyPage, { survey: this.survey, page: page, css: this.css, creator: this }));
    };
    Survey.prototype.renderEmptySurvey = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.bodyEmpty }, this.survey.emptySurveyText);
    };
    Survey.prototype.createSurvey = function (newProps) {
        if (!newProps)
            newProps = {};
        this.previousJSON = {};
        if (newProps) {
            if (newProps.model) {
                this.survey = newProps.model;
            }
            else {
                if (newProps.json) {
                    this.previousJSON = newProps.json;
                    this.survey = new survey_core__WEBPACK_IMPORTED_MODULE_1__.SurveyModel(newProps.json);
                }
            }
        }
        else {
            this.survey = new survey_core__WEBPACK_IMPORTED_MODULE_1__.SurveyModel();
        }
        if (!!newProps.css) {
            this.survey.css = this.css;
        }
    };
    Survey.prototype.isModelJSONChanged = function (newProps) {
        if (!!newProps["model"]) {
            return this.survey !== newProps["model"];
        }
        if (!!newProps["json"]) {
            return !survey_core__WEBPACK_IMPORTED_MODULE_1__.Helpers.isTwoValueEquals(newProps["json"], this.previousJSON);
        }
        return false;
    };
    Survey.prototype.updateSurvey = function (newProps, oldProps) {
        if (!newProps)
            return;
        oldProps = oldProps || {};
        for (var key in newProps) {
            if (key == "model" || key == "children" || key == "json") {
                continue;
            }
            if (key == "css") {
                this.survey.mergeValues(newProps.css, this.survey.getCss());
                this.survey["updateNavigationCss"]();
                this.survey["updateElementCss"]();
                continue;
            }
            if (newProps[key] === oldProps[key])
                continue;
            if (key.indexOf("on") == 0 && this.survey[key] && this.survey[key].add) {
                if (!!oldProps[key]) {
                    this.survey[key].remove(oldProps[key]);
                }
                this.survey[key].add(newProps[key]);
            }
            else {
                this.survey[key] = newProps[key];
            }
        }
    };
    Survey.prototype.setSurveyEvents = function () {
        var self = this;
        this.survey.renderCallback = function () {
            var counter = !!self.state && !!self.state.modelChanged ? self.state.modelChanged : 0;
            self.setState({ modelChanged: counter + 1 });
        };
        this.survey.onPartialSend.add(function (sender) {
            if (!!self.state) {
                self.setState(self.state);
            }
        });
    };
    //ISurveyCreator
    Survey.prototype.createQuestionElement = function (question) {
        return _reactquestion_factory__WEBPACK_IMPORTED_MODULE_5__.ReactQuestionFactory.Instance.createQuestion(question.isDefaultRendering() ? question.getTemplate() : question.getComponentName(), {
            question: question,
            isDisplayMode: question.isInputReadOnly,
            creator: this,
        });
    };
    Survey.prototype.renderError = function (key, error, cssClasses, element) {
        return _element_factory__WEBPACK_IMPORTED_MODULE_6__.ReactElementFactory.Instance.createElement(this.survey.questionErrorComponent, { key: key, error: error, cssClasses: cssClasses, element: element });
    };
    Survey.prototype.questionTitleLocation = function () {
        return this.survey.questionTitleLocation;
    };
    Survey.prototype.questionErrorLocation = function () {
        return this.survey.questionErrorLocation;
    };
    return Survey;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_6__.ReactElementFactory.Instance.registerElement("survey", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Survey, props);
});
function attachKey2click(element, viewModel, options) {
    if (options === void 0) { options = { processEsc: true, disableTabStop: false }; }
    if ((!!viewModel && viewModel.disableTabStop) || (!!options && options.disableTabStop)) {
        return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, { tabIndex: -1 });
    }
    options = __assign({}, options);
    return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, {
        tabIndex: 0,
        onKeyUp: function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            (0,survey_core__WEBPACK_IMPORTED_MODULE_1__.doKey2ClickUp)(evt, options);
            return false;
        },
        onKeyDown: function (evt) { return (0,survey_core__WEBPACK_IMPORTED_MODULE_1__.doKey2ClickDown)(evt, options); },
        onBlur: function (evt) { return (0,survey_core__WEBPACK_IMPORTED_MODULE_1__.doKey2ClickBlur)(evt); },
    });
}


/***/ }),

/***/ "../survey-react-ui/src/reactSurveyNavigationBase.tsx":
/*!************************************************************!*\
  !*** ../survey-react-ui/src/reactSurveyNavigationBase.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyNavigationBase: () => (/* binding */ SurveyNavigationBase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SurveyNavigationBase = /** @class */ (function (_super) {
    __extends(SurveyNavigationBase, _super);
    function SurveyNavigationBase(props) {
        var _this = _super.call(this, props) || this;
        _this.updateStateFunction = null;
        _this.state = { update: 0 };
        return _this;
    }
    Object.defineProperty(SurveyNavigationBase.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyNavigationBase.prototype, "css", {
        get: function () {
            return this.props.css || this.survey.css;
        },
        enumerable: false,
        configurable: true
    });
    SurveyNavigationBase.prototype.componentDidMount = function () {
        if (this.survey) {
            var self = this;
            this.updateStateFunction = function () {
                self.setState({ update: self.state.update + 1 });
            };
            this.survey.onPageVisibleChanged.add(this.updateStateFunction);
        }
    };
    SurveyNavigationBase.prototype.componentWillUnmount = function () {
        if (this.survey && this.updateStateFunction) {
            this.survey.onPageVisibleChanged.remove(this.updateStateFunction);
            this.updateStateFunction = null;
        }
    };
    return SurveyNavigationBase;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "../survey-react-ui/src/reactquestion.tsx":
/*!************************************************!*\
  !*** ../survey-react-ui/src/reactquestion.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyElementErrors: () => (/* binding */ SurveyElementErrors),
/* harmony export */   SurveyQuestion: () => (/* binding */ SurveyQuestion),
/* harmony export */   SurveyQuestionAndErrorsCell: () => (/* binding */ SurveyQuestionAndErrorsCell),
/* harmony export */   SurveyQuestionAndErrorsWrapped: () => (/* binding */ SurveyQuestionAndErrorsWrapped),
/* harmony export */   SurveyQuestionErrorCell: () => (/* binding */ SurveyQuestionErrorCell)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactsurveymodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactsurveymodel */ "../survey-react-ui/src/reactsurveymodel.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactquestion_comment */ "../survey-react-ui/src/reactquestion_comment.tsx");
/* harmony import */ var _custom_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-widget */ "../survey-react-ui/src/custom-widget.tsx");
/* harmony import */ var _element_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element-header */ "../survey-react-ui/src/element-header.tsx");
/* harmony import */ var _reactquestion_singleinputsummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reactquestion_singleinputsummary */ "../survey-react-ui/src/reactquestion_singleinputsummary.tsx");
/* harmony import */ var _components_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/breadcrumbs/breadcrumbs */ "../survey-react-ui/src/components/breadcrumbs/breadcrumbs.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









var SurveyQuestion = /** @class */ (function (_super) {
    __extends(SurveyQuestion, _super);
    function SurveyQuestion(props) {
        var _this = _super.call(this, props) || this;
        _this.isNeedFocus = false;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SurveyQuestion.renderQuestionBody = function (creator, question) {
        // if (!question.isVisible) return null;
        var customWidget = question.customWidget;
        if (!customWidget) {
            return creator.createQuestionElement(question);
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_custom_widget__WEBPACK_IMPORTED_MODULE_5__.SurveyCustomWidget, { creator: creator, question: question });
    };
    SurveyQuestion.prototype.getStateElement = function () {
        return this.question;
    };
    Object.defineProperty(SurveyQuestion.prototype, "question", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestion.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestion.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!!this.question) {
            this.question["react"] = this;
        }
        this.doAfterRender();
    };
    SurveyQuestion.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!!this.question) {
            this.question["react"] = null;
        }
        var el = this.rootRef.current;
        if (!!el) {
            el.removeAttribute("data-rendered");
        }
    };
    SurveyQuestion.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.doAfterRender();
    };
    SurveyQuestion.prototype.doAfterRender = function () {
        if (this.isNeedFocus) {
            if (!this.question.isCollapsed) {
                this.question.clickTitleFunction();
            }
            this.isNeedFocus = false;
        }
        if (this.question) {
            var el = this.rootRef.current;
            if (el && el.getAttribute("data-rendered") !== "r") {
                el.setAttribute("data-rendered", "r");
                if (this.question.afterRender) {
                    this.question.afterRender(el);
                }
            }
        }
    };
    SurveyQuestion.prototype.canRender = function () {
        return (_super.prototype.canRender.call(this) &&
            !!this.question &&
            !!this.creator);
    };
    SurveyQuestion.prototype.renderQuestionContent = function () {
        var question = this.question;
        var contentStyle = {
            display: this.question.renderedIsExpanded ? "" : "none",
        };
        var cssClasses = question.cssClasses;
        var questionRender = this.renderQuestion();
        var comment = question && question.hasComment ? this.renderComment(cssClasses) : null;
        var descriptionUnderInput = question.hasDescriptionUnderInput
            ? this.renderDescription()
            : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: question.cssContent || undefined, style: contentStyle, "aria-hidden": question.contentAriaHidden, role: "presentation" },
            questionRender,
            comment,
            descriptionUnderInput));
    };
    SurveyQuestion.prototype.renderElement = function () {
        var question = this.question;
        var cssClasses = question.cssClasses;
        var header = this.renderHeader(question);
        var headerTop = question.hasTitleOnLeftTop ? header : null;
        var headerBottom = question.hasTitleOnBottom ? header : null;
        var errorsAboveQuestion = this.question.showErrorsAboveQuestion
            ? this.renderErrors(cssClasses, "")
            : null;
        var errorsBelowQuestion = this.question.showErrorsBelowQuestion
            ? this.renderErrors(cssClasses, "")
            : null;
        var rootStyle = question.getRootStyle();
        var singleBreadcrumbs = question.singleInputHasActions ? this.renderSingleInputBreadcrumbs(question, cssClasses) : undefined;
        var singleSummary = question.singleInputSummary ? this.renderSingleInputSummary(question, cssClasses) : undefined;
        var singleInput = singleSummary || (question.singleInputQuestion ? this.renderSingleInputQuestion(question, cssClasses) : undefined);
        var questionContent = singleInput || this.wrapQuestionContent(this.renderQuestionContent());
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.rootRef, id: question.id, className: question.getRootCss(), style: rootStyle, "data-name": question.name, role: question.ariaRole, "aria-required": this.question.ariaRequired, "aria-invalid": this.question.ariaInvalid, "aria-label": this.question.ariaLabel, "aria-labelledby": question.ariaLabelledBy, "aria-describedby": question.ariaDescribedBy, "aria-expanded": question.ariaExpanded },
                singleBreadcrumbs,
                errorsAboveQuestion,
                headerTop,
                questionContent,
                headerBottom,
                errorsBelowQuestion)));
    };
    SurveyQuestion.prototype.renderSingleInputQuestion = function (question, cssClasses) {
        var singleQuestion = question.singleInputQuestion;
        var key = singleQuestion.id;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestion, { key: key, element: singleQuestion, creator: this.creator, css: cssClasses });
    };
    SurveyQuestion.prototype.renderSingleInputBreadcrumbs = function (question, cssClasses) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_8__.SurveyBreadcrumbs, { model: question.singleInputActions, css: cssClasses });
    };
    SurveyQuestion.prototype.renderSingleInputSummary = function (question, cssClasses) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion_singleinputsummary__WEBPACK_IMPORTED_MODULE_7__.SurveyQuestionSigleInputSummary, { summary: question.singleInputSummary, creator: this.creator, css: cssClasses });
    };
    SurveyQuestion.prototype.wrapElement = function (element) {
        var survey = this.question.survey;
        var wrapper = null;
        if (survey) {
            wrapper = _reactsurveymodel__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElementsWrapper.wrapElement(survey, element, this.question);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    SurveyQuestion.prototype.wrapQuestionContent = function (element) {
        var survey = this.question.survey;
        var wrapper = null;
        if (survey) {
            wrapper = _reactsurveymodel__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElementsWrapper.wrapQuestionContent(survey, element, this.question);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    SurveyQuestion.prototype.renderQuestion = function () {
        return SurveyQuestion.renderQuestionBody(this.creator, this.question);
    };
    SurveyQuestion.prototype.renderDescription = function () {
        return _reactquestion_element__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase.renderQuestionDescription(this.question);
    };
    SurveyQuestion.prototype.renderComment = function (cssClasses) {
        var commentText = _reactquestion_element__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase.renderLocString(this.question.locCommentText);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getCommentAreaCss() },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, commentText),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion_comment__WEBPACK_IMPORTED_MODULE_4__.SurveyQuestionCommentItem, { question: this.question, cssClasses: cssClasses, otherCss: cssClasses.other, isDisplayMode: this.question.isInputReadOnly })));
    };
    SurveyQuestion.prototype.renderHeader = function (question) {
        if (question.singleInputHideHeader)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_element_header__WEBPACK_IMPORTED_MODULE_6__.SurveyElementHeader, { element: question });
    };
    SurveyQuestion.prototype.renderErrors = function (cssClasses, location) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyElementErrors, { element: this.question, cssClasses: cssClasses, creator: this.creator, location: location, id: this.question.id + "_errors" }));
    };
    return SurveyQuestion;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestion, props);
});
var SurveyElementErrors = /** @class */ (function (_super) {
    __extends(SurveyElementErrors, _super);
    function SurveyElementErrors(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.getState();
        return _this;
    }
    Object.defineProperty(SurveyElementErrors.prototype, "id", {
        get: function () {
            return this.props.element.id + "_errors";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyElementErrors.prototype, "element", {
        get: function () {
            return this.props.element;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyElementErrors.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementErrors.prototype.getState = function (prevState) {
        if (prevState === void 0) { prevState = null; }
        return !prevState ? { error: 0 } : { error: prevState.error + 1 };
    };
    SurveyElementErrors.prototype.canRender = function () {
        return !!this.element && this.element.hasVisibleErrors;
    };
    SurveyElementErrors.prototype.componentWillUnmount = function () {
    };
    SurveyElementErrors.prototype.renderElement = function () {
        var errors = [];
        for (var i = 0; i < this.element.errors.length; i++) {
            var key = "error" + i;
            errors.push(this.creator.renderError(key, this.element.errors[i], this.cssClasses, this.element));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { role: "alert", "aria-live": "polite", className: this.element.cssError, id: this.id }, errors));
    };
    return SurveyElementErrors;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_3__.ReactSurveyElement));

var SurveyQuestionAndErrorsWrapped = /** @class */ (function (_super) {
    __extends(SurveyQuestionAndErrorsWrapped, _super);
    function SurveyQuestionAndErrorsWrapped(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionAndErrorsWrapped.prototype.getStateElement = function () {
        return this.question;
    };
    Object.defineProperty(SurveyQuestionAndErrorsWrapped.prototype, "question", {
        get: function () {
            return this.getQuestion();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionAndErrorsWrapped.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionAndErrorsWrapped.prototype.getQuestion = function () {
        return this.props.question;
    };
    Object.defineProperty(SurveyQuestionAndErrorsWrapped.prototype, "itemCss", {
        get: function () {
            return this.props.itemCss;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionAndErrorsWrapped.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.doAfterRender();
    };
    SurveyQuestionAndErrorsWrapped.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.doAfterRender();
    };
    SurveyQuestionAndErrorsWrapped.prototype.doAfterRender = function () { };
    SurveyQuestionAndErrorsWrapped.prototype.canRender = function () {
        return !!this.question;
    };
    SurveyQuestionAndErrorsWrapped.prototype.renderContent = function () {
        var renderedQuestion = this.renderQuestion();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderedQuestion));
    };
    SurveyQuestionAndErrorsWrapped.prototype.getShowErrors = function () {
        return this.question.isVisible;
    };
    SurveyQuestionAndErrorsWrapped.prototype.renderQuestion = function () {
        return SurveyQuestion.renderQuestionBody(this.creator, this.question);
    };
    return SurveyQuestionAndErrorsWrapped;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_3__.ReactSurveyElement));

var SurveyQuestionAndErrorsCell = /** @class */ (function (_super) {
    __extends(SurveyQuestionAndErrorsCell, _super);
    function SurveyQuestionAndErrorsCell(props) {
        var _this = _super.call(this, props) || this;
        _this.cellRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SurveyQuestionAndErrorsCell.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.question) {
            var el = this.cellRef.current;
            if (!!el) {
                el.removeAttribute("data-rendered");
            }
        }
    };
    SurveyQuestionAndErrorsCell.prototype.renderCellContent = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.props.cell.cellQuestionWrapperClassName }, this.renderQuestion()));
    };
    SurveyQuestionAndErrorsCell.prototype.renderElement = function () {
        var style = this.getCellStyle();
        var cell = this.props.cell;
        var focusIn = function () { cell.focusIn(); };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { ref: this.cellRef, className: this.itemCss, colSpan: cell.colSpans, title: cell.getTitle(), style: style, onFocus: focusIn }, this.wrapCell(this.props.cell, this.renderCellContent())));
    };
    SurveyQuestionAndErrorsCell.prototype.getCellStyle = function () {
        return null;
    };
    SurveyQuestionAndErrorsCell.prototype.getHeaderText = function () {
        return "";
    };
    SurveyQuestionAndErrorsCell.prototype.wrapCell = function (cell, element) {
        if (!cell) {
            return element;
        }
        var survey = this.question.survey;
        var wrapper = null;
        if (survey) {
            wrapper = _reactsurveymodel__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElementsWrapper.wrapMatrixCell(survey, element, cell, this.props.reason);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    return SurveyQuestionAndErrorsCell;
}(SurveyQuestionAndErrorsWrapped));

var SurveyQuestionErrorCell = /** @class */ (function (_super) {
    __extends(SurveyQuestionErrorCell, _super);
    function SurveyQuestionErrorCell(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            changed: 0
        };
        if (_this.question) {
            _this.registerCallback(_this.question);
        }
        return _this;
    }
    Object.defineProperty(SurveyQuestionErrorCell.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionErrorCell.prototype.update = function () {
        this.setState({ changed: this.state.changed + 1 });
    };
    SurveyQuestionErrorCell.prototype.getQuestionPropertiesToTrack = function () {
        return ["errors"];
    };
    SurveyQuestionErrorCell.prototype.registerCallback = function (question) {
        var _this = this;
        question.registerFunctionOnPropertiesValueChanged(this.getQuestionPropertiesToTrack(), function () {
            _this.update();
        }, "__reactSubscription");
    };
    SurveyQuestionErrorCell.prototype.unRegisterCallback = function (question) {
        question.unRegisterFunctionOnPropertiesValueChanged(this.getQuestionPropertiesToTrack(), "__reactSubscription");
    };
    SurveyQuestionErrorCell.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.question && prevProps.question !== this.question) {
            this.unRegisterCallback(prevProps.cell);
        }
        if (this.question) {
            this.registerCallback(this.question);
        }
    };
    SurveyQuestionErrorCell.prototype.componentWillUnmount = function () {
        if (this.question) {
            this.unRegisterCallback(this.question);
        }
    };
    SurveyQuestionErrorCell.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyElementErrors, { element: this.question, creator: this.props.creator, cssClasses: this.question.cssClasses });
    };
    return SurveyQuestionErrorCell;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "../survey-react-ui/src/reactquestion_buttongroup.tsx":
/*!************************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_buttongroup.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyButtonGroupItem: () => (/* binding */ SurveyButtonGroupItem),
/* harmony export */   SurveyQuestionButtonGroup: () => (/* binding */ SurveyQuestionButtonGroup)
/* harmony export */ });
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var SurveyQuestionButtonGroup = /** @class */ (function (_super) {
    __extends(SurveyQuestionButtonGroup, _super);
    function SurveyQuestionButtonGroup(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionButtonGroup.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionButtonGroup.prototype.getStateElement = function () {
        return this.question;
    };
    SurveyQuestionButtonGroup.prototype.renderElement = function () {
        var items = this.renderItems();
        return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: this.question.cssClasses.root }, items);
    };
    SurveyQuestionButtonGroup.prototype.renderItems = function () {
        var _this = this;
        return this.question.visibleChoices.map(function (item, index) {
            return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(SurveyButtonGroupItem, { key: _this.question.inputId + "_" + index, item: item, question: _this.question, index: index }));
        });
    };
    return SurveyQuestionButtonGroup;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionElementBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_4__.ReactQuestionFactory.Instance.registerQuestion("buttongroup", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(SurveyQuestionButtonGroup, props);
});
var SurveyButtonGroupItem = /** @class */ (function (_super) {
    __extends(SurveyButtonGroupItem, _super);
    function SurveyButtonGroupItem(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyButtonGroupItem.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyButtonGroupItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyButtonGroupItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyButtonGroupItem.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyButtonGroupItem.prototype.renderElement = function () {
        this.model = new survey_core__WEBPACK_IMPORTED_MODULE_3__.ButtonGroupItemModel(this.question, this.item, this.index);
        var icon = this.renderIcon();
        var input = this.renderInput();
        var caption = this.renderCaption();
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", { className: this.model.css.label, title: this.model.caption.renderedHtml },
            input,
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: this.model.css.decorator },
                icon,
                caption)));
    };
    SurveyButtonGroupItem.prototype.renderIcon = function () {
        if (!!this.model.iconName) {
            return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { className: this.model.css.icon, iconName: this.model.iconName, size: this.model.iconSize || 24 }));
        }
        return null;
    };
    SurveyButtonGroupItem.prototype.renderInput = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { className: this.model.css.control, id: this.model.id, type: "radio", name: this.model.name, checked: this.model.selected, value: this.model.value, disabled: this.model.readOnly, onChange: function () {
                _this.model.onChange();
            }, "aria-required": this.model.isRequired, "aria-label": this.model.caption.renderedHtml, "aria-invalid": this.model.hasErrors, "aria-errormessage": this.model.describedBy }));
    };
    SurveyButtonGroupItem.prototype.renderCaption = function () {
        if (!this.model.showCaption)
            return null;
        var caption = this.renderLocString(this.model.caption);
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: this.model.css.caption, title: this.model.caption.renderedHtml }, caption));
    };
    return SurveyButtonGroupItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

// ReactQuestionFactory.Instance.registerQuestion("buttongroup", props => {
//   return React.createElement(SurveyQuestionButtonGroup, props);
// });


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_checkbox.tsx":
/*!*********************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_checkbox.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionCheckbox: () => (/* binding */ SurveyQuestionCheckbox),
/* harmony export */   SurveyQuestionCheckboxItem: () => (/* binding */ SurveyQuestionCheckboxItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_comment */ "../survey-react-ui/src/reactquestion_comment.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _reactsurveymodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactsurveymodel */ "../survey-react-ui/src/reactsurveymodel.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var SurveyQuestionCheckbox = /** @class */ (function (_super) {
    __extends(SurveyQuestionCheckbox, _super);
    function SurveyQuestionCheckbox(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionCheckbox.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionCheckbox.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", { className: this.question.getSelectBaseRootCss(), ref: function (fieldset) { return (_this.setControl(fieldset)); }, role: this.question.a11y_input_ariaRole, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", { className: "sv-hidden" }, this.question.locTitle.renderedHtml),
            this.getHeader(),
            this.question.hasColumns
                ? this.getColumnedBody(cssClasses)
                : this.getBody(cssClasses),
            this.getFooter()));
    };
    SurveyQuestionCheckbox.prototype.getHeader = function () {
        var _this = this;
        if (this.question.hasHeadItems) {
            return this.question.headItems.map(function (item, ii) {
                return _this.renderItem(item, false, _this.question.cssClasses);
            });
        }
    };
    SurveyQuestionCheckbox.prototype.getFooter = function () {
        var _this = this;
        if (this.question.hasFootItems) {
            return this.question.footItems.map(function (item, ii) {
                return _this.renderItem(item, false, _this.question.cssClasses);
            });
        }
    };
    SurveyQuestionCheckbox.prototype.getColumnedBody = function (cssClasses) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.rootMultiColumn }, this.getColumns(cssClasses)));
    };
    SurveyQuestionCheckbox.prototype.getColumns = function (cssClasses) {
        var _this = this;
        return this.question.columns.map(function (column, ci) {
            var items = column.map(function (item, ii) {
                return _this.renderItem(item, ci === 0 && ii === 0, cssClasses, "" + ci + ii);
            });
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: "column" + ci + _this.question.getItemsColumnKey(column), className: _this.question.getColumnClass(), role: "presentation" }, items));
        });
    };
    SurveyQuestionCheckbox.prototype.getBody = function (cssClasses) {
        if (this.question.blockedRow) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.rootRow }, this.getItems(cssClasses, this.question.dataChoices));
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getItems(cssClasses, this.question.bodyItems));
        }
    };
    SurveyQuestionCheckbox.prototype.getItems = function (cssClasses, choices) {
        var renderedItems = [];
        for (var i = 0; i < choices.length; i++) {
            var item = choices[i];
            var renderedItem = this.renderItem(item, i == 0, cssClasses, "" + i);
            if (!!renderedItem) {
                renderedItems.push(renderedItem);
            }
        }
        return renderedItems;
    };
    Object.defineProperty(SurveyQuestionCheckbox.prototype, "textStyle", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionCheckbox.prototype.renderItem = function (item, isFirst, cssClasses, index) {
        var renderedItem = _element_factory__WEBPACK_IMPORTED_MODULE_5__.ReactElementFactory.Instance.createElement(this.question.itemComponent, {
            key: item.value,
            question: this.question,
            cssClasses: cssClasses,
            isDisplayMode: this.isDisplayMode,
            item: item,
            textStyle: this.textStyle,
            index: index,
            isFirst: isFirst,
        });
        var survey = this.question.survey;
        var wrappedItem = null;
        if (!!survey && !!renderedItem) {
            wrappedItem = _reactsurveymodel__WEBPACK_IMPORTED_MODULE_4__.ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
        }
        return wrappedItem !== null && wrappedItem !== void 0 ? wrappedItem : renderedItem;
    };
    return SurveyQuestionCheckbox;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

var SurveyQuestionCheckboxItem = /** @class */ (function (_super) {
    __extends(SurveyQuestionCheckboxItem, _super);
    function SurveyQuestionCheckboxItem(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnChange = function (event) {
            _this.question.clickItemHandler(_this.item, event.target.checked);
        };
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SurveyQuestionCheckboxItem.prototype.getStateElement = function () {
        return this.item;
    };
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "textStyle", {
        get: function () {
            return this.props.textStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "isFirst", {
        get: function () {
            return this.props.isFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "hideCaption", {
        get: function () {
            return this.props.hideCaption === true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "ariaLabel", {
        get: function () {
            return this.props.ariaLabel || null;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionCheckboxItem.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (prevProps.item !== this.props.item && !this.question.isDesignMode) {
            if (this.props.item) {
                this.props.item.setRootElement(this.rootRef.current);
            }
            if (prevProps.item) {
                prevProps.item.setRootElement(undefined);
            }
        }
    };
    SurveyQuestionCheckboxItem.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        return (!this.question.customWidget ||
            !!this.question.customWidgetData.isNeedRender ||
            !!this.question.customWidget.widgetJson.isDefaultRender ||
            !!this.question.customWidget.widgetJson.render);
    };
    SurveyQuestionCheckboxItem.prototype.canRender = function () {
        return !!this.item && !!this.question;
    };
    SurveyQuestionCheckboxItem.prototype.renderElement = function () {
        var isChecked = this.question.isItemSelected(this.item);
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            this.renderCheckbox(isChecked, null),
            this.renderComment());
    };
    Object.defineProperty(SurveyQuestionCheckboxItem.prototype, "inputStyle", {
        get: function () {
            return null; //{ marginRight: "3px" };
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionCheckboxItem.prototype.renderComment = function () {
        if (!this.item.isCommentShowing)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getCommentAreaCss(true) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion_comment__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionCommentValueItem, { question: this.question, item: this.item, isDisplayMode: this.isDisplayMode, cssClasses: this.question.cssClasses, otherCss: this.question.getCommentAreaCss(false) }));
    };
    SurveyQuestionCheckboxItem.prototype.renderCheckbox = function (isChecked, otherItem) {
        var id = this.question.getItemId(this.item);
        var itemClass = this.question.getItemClass(this.item);
        var labelClass = this.question.getLabelClass(this.item);
        var itemLabel = !this.hideCaption ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.cssClasses.controlLabel }, this.renderLocString(this.item.locText, this.textStyle)) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: itemClass, role: "presentation", ref: this.rootRef },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: labelClass },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: this.cssClasses.itemControl, type: "checkbox", name: this.question.name + this.item.id, value: this.item.value, id: id, style: this.inputStyle, disabled: !this.question.getItemEnabled(this.item), readOnly: this.question.isReadOnlyAttr, checked: isChecked, onChange: this.handleOnChange, required: this.question.hasRequiredError(), "aria-label": this.ariaLabel }),
                this.cssClasses.materialDecorator ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.cssClasses.materialDecorator }, this.question.itemSvgIcon ?
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: this.cssClasses.itemDecorator },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { xlinkHref: this.question.itemSvgIcon })) :
                        null) :
                    null,
                itemLabel),
            otherItem));
    };
    SurveyQuestionCheckboxItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!this.question.isDesignMode) {
            this.item.setRootElement(this.rootRef.current);
        }
    };
    SurveyQuestionCheckboxItem.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!this.question.isDesignMode) {
            this.item.setRootElement(undefined);
        }
    };
    return SurveyQuestionCheckboxItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_5__.ReactElementFactory.Instance.registerElement("survey-checkbox-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionCheckboxItem, props);
});
_reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__.ReactQuestionFactory.Instance.registerQuestion("checkbox", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionCheckbox, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_comment.tsx":
/*!********************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_comment.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionComment: () => (/* binding */ SurveyQuestionComment),
/* harmony export */   SurveyQuestionCommentItem: () => (/* binding */ SurveyQuestionCommentItem),
/* harmony export */   SurveyQuestionCommentValueItem: () => (/* binding */ SurveyQuestionCommentValueItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _components_character_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/character-counter */ "../survey-react-ui/src/components/character-counter.tsx");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/text-area */ "../survey-react-ui/src/components/text-area.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyQuestionComment = /** @class */ (function (_super) {
    __extends(SurveyQuestionComment, _super);
    function SurveyQuestionComment(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionComment.prototype.renderCharacterCounter = function () {
        var counter = null;
        if (!!this.question.getMaxLength()) {
            counter = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_character_counter__WEBPACK_IMPORTED_MODULE_3__.CharacterCounterComponent, { counter: this.question.characterCounter, remainingCharacterCounter: this.question.cssClasses.remainingCharacterCounter });
        }
        return counter;
    };
    SurveyQuestionComment.prototype.renderElement = function () {
        if (this.question.isReadOnlyRenderDiv()) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.question.value);
        }
        var counter = this.renderCharacterCounter();
        var textAreaModel = this.props.question.textAreaModel;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_text_area__WEBPACK_IMPORTED_MODULE_4__.TextAreaComponent, { viewModel: textAreaModel }),
            counter));
    };
    return SurveyQuestionComment;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionUncontrolledElement));

var SurveyQuestionCommentItem = /** @class */ (function (_super) {
    __extends(SurveyQuestionCommentItem, _super);
    function SurveyQuestionCommentItem(props) {
        var _this = _super.call(this, props) || this;
        _this.textAreaModel = _this.getTextAreaModel();
        return _this;
    }
    SurveyQuestionCommentItem.prototype.canRender = function () {
        return !!this.props.question;
    };
    SurveyQuestionCommentItem.prototype.getTextAreaModel = function () {
        return this.props.question.commentTextAreaModel;
    };
    SurveyQuestionCommentItem.prototype.renderElement = function () {
        var question = this.props.question;
        if (question.isReadOnlyRenderDiv()) {
            var comment = this.textAreaModel.getTextValue() || "";
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, comment);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_text_area__WEBPACK_IMPORTED_MODULE_4__.TextAreaComponent, { key: this.getKey(), viewModel: this.textAreaModel }));
    };
    SurveyQuestionCommentItem.prototype.getKey = function () { return undefined; };
    return SurveyQuestionCommentItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));

var SurveyQuestionCommentValueItem = /** @class */ (function (_super) {
    __extends(SurveyQuestionCommentValueItem, _super);
    function SurveyQuestionCommentValueItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyQuestionCommentValueItem.prototype.getTextAreaModel = function () {
        return this.props.question.getCommentTextAreaModel(this.props.item);
    };
    SurveyQuestionCommentValueItem.prototype.getKey = function () { return this.props.item.normalizedId; };
    return SurveyQuestionCommentValueItem;
}(SurveyQuestionCommentItem));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("comment", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionComment, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_custom.tsx":
/*!*******************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_custom.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionComposite: () => (/* binding */ SurveyQuestionComposite),
/* harmony export */   SurveyQuestionCustom: () => (/* binding */ SurveyQuestionCustom)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion */ "../survey-react-ui/src/reactquestion.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel */ "../survey-react-ui/src/panel.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyQuestionCustom = /** @class */ (function (_super) {
    __extends(SurveyQuestionCustom, _super);
    function SurveyQuestionCustom(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionCustom.prototype.getStateElements = function () {
        var res = _super.prototype.getStateElements.call(this);
        if (!!this.question.contentQuestion) {
            res.push(this.question.contentQuestion);
        }
        return res;
    };
    SurveyQuestionCustom.prototype.renderElement = function () {
        return _reactquestion__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestion.renderQuestionBody(this.creator, this.question.contentQuestion);
    };
    return SurveyQuestionCustom;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionUncontrolledElement));

var SurveyQuestionComposite = /** @class */ (function (_super) {
    __extends(SurveyQuestionComposite, _super);
    function SurveyQuestionComposite(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionComposite.prototype.canRender = function () {
        return !!this.question.contentPanel;
    };
    SurveyQuestionComposite.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_panel__WEBPACK_IMPORTED_MODULE_4__.SurveyPanel, { element: this.question.contentPanel, creator: this.creator, survey: this.question.survey }));
    };
    return SurveyQuestionComposite;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionUncontrolledElement));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__.ReactQuestionFactory.Instance.registerQuestion("custom", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionCustom, props);
});
_reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__.ReactQuestionFactory.Instance.registerQuestion("composite", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionComposite, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_dropdown.tsx":
/*!*********************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_dropdown.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionDropdown: () => (/* binding */ SurveyQuestionDropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _dropdown_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-base */ "../survey-react-ui/src/dropdown-base.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionDropdown = /** @class */ (function (_super) {
    __extends(SurveyQuestionDropdown, _super);
    function SurveyQuestionDropdown(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionDropdown.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var comment = this.renderOther(this.question.selectedItem, cssClasses);
        var select = this.renderSelect(cssClasses);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.renderCssRoot },
            select,
            comment));
    };
    return SurveyQuestionDropdown;
}(_dropdown_base__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionDropdownBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_1__.ReactQuestionFactory.Instance.registerQuestion("dropdown", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionDropdown, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_element.tsx":
/*!********************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_element.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactSurveyElement: () => (/* binding */ ReactSurveyElement),
/* harmony export */   SurveyElementBase: () => (/* binding */ SurveyElementBase),
/* harmony export */   SurveyQuestionElementBase: () => (/* binding */ SurveyQuestionElementBase),
/* harmony export */   SurveyQuestionUncontrolledElement: () => (/* binding */ SurveyQuestionUncontrolledElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactsurveymodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactsurveymodel */ "../survey-react-ui/src/reactsurveymodel.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyElementBase = /** @class */ (function (_super) {
    __extends(SurveyElementBase, _super);
    function SurveyElementBase(props) {
        var _this = _super.call(this, props) || this;
        _this._allowComponentUpdate = true;
        _this.prevStateElements = [];
        _this.propertyValueChangedHandler = function (hash, key, val) {
            if (hash[key] !== val) {
                hash[key] = val;
                if (!_this.canUsePropInState(key))
                    return;
                if (_this.isRendering)
                    return;
                _this.changedStatePropNameValue = key;
                _this.setState(function (state) {
                    var newState = {};
                    newState[key] = val;
                    return newState;
                });
            }
        };
        return _this;
    }
    SurveyElementBase.renderLocString = function (locStr, style, key) {
        if (style === void 0) { style = null; }
        return _element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement(locStr.renderAs, {
            locStr: locStr.renderAsData,
            style: style,
            key: key,
        });
    };
    SurveyElementBase.renderQuestionDescription = function (question) {
        var descriptionText = SurveyElementBase.renderLocString(question.locDescription);
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: question.hasDescription ? undefined : { display: "none" }, id: question.ariaDescriptionId, className: question.cssDescription }, descriptionText);
    };
    SurveyElementBase.prototype.componentDidMount = function () {
        this.makeBaseElementsReact();
    };
    SurveyElementBase.prototype.componentWillUnmount = function () {
        this.unMakeBaseElementsReact();
        this.disableStateElementsRerenderEvent(this.getStateElements());
    };
    SurveyElementBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a;
        this.makeBaseElementsReact();
        var stateElements = this.getStateElements();
        this.disableStateElementsRerenderEvent(((_a = this.prevStateElements) !== null && _a !== void 0 ? _a : []).filter(function (el) { return !stateElements.find(function (stateElement) { return stateElement == el; }); }));
        this.prevStateElements = [];
        this.getStateElements().forEach(function (el) {
            el.afterRerender();
        });
    };
    SurveyElementBase.prototype.allowComponentUpdate = function () {
        this._allowComponentUpdate = true;
        this.forceUpdate();
    };
    SurveyElementBase.prototype.denyComponentUpdate = function () {
        this._allowComponentUpdate = false;
    };
    SurveyElementBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this._allowComponentUpdate) {
            this.unMakeBaseElementsReact();
            this.prevStateElements = this.getStateElements();
        }
        return this._allowComponentUpdate;
    };
    SurveyElementBase.prototype.render = function () {
        if (!this.canRender()) {
            return null;
        }
        this.startEndRendering(1);
        var res = this.renderElement();
        this.startEndRendering(-1);
        if (!!res) {
            res = this.wrapElement(res);
        }
        this.changedStatePropNameValue = undefined;
        return res;
    };
    SurveyElementBase.prototype.wrapElement = function (element) {
        return element;
    };
    Object.defineProperty(SurveyElementBase.prototype, "isRendering", {
        get: function () {
            var stateEls = this.getRenderedElements();
            for (var _i = 0, stateEls_1 = stateEls; _i < stateEls_1.length; _i++) {
                var stateEl = stateEls_1[_i];
                if (stateEl.reactRendering > 0)
                    return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementBase.prototype.getRenderedElements = function () {
        return this.getStateElements();
    };
    SurveyElementBase.prototype.startEndRendering = function (val) {
        var stateEls = this.getRenderedElements();
        for (var _i = 0, stateEls_2 = stateEls; _i < stateEls_2.length; _i++) {
            var stateEl = stateEls_2[_i];
            if (!stateEl.reactRendering)
                stateEl.reactRendering = 0;
            stateEl.reactRendering += val;
        }
    };
    SurveyElementBase.prototype.canRender = function () {
        return true;
    };
    SurveyElementBase.prototype.renderElement = function () {
        return null;
    };
    Object.defineProperty(SurveyElementBase.prototype, "changedStatePropName", {
        get: function () {
            return this.changedStatePropNameValue;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementBase.prototype.makeBaseElementsReact = function () {
        var els = this.getStateElements();
        for (var i = 0; i < els.length; i++) {
            els[i].enableOnElementRerenderedEvent();
            this.makeBaseElementReact(els[i]);
        }
    };
    SurveyElementBase.prototype.unMakeBaseElementsReact = function () {
        var els = this.getStateElements();
        this.unMakeBaseElementsReactive(els);
    };
    SurveyElementBase.prototype.unMakeBaseElementsReactive = function (els) {
        for (var i = 0; i < els.length; i++) {
            this.unMakeBaseElementReact(els[i]);
        }
    };
    SurveyElementBase.prototype.disableStateElementsRerenderEvent = function (els) {
        els.forEach(function (el) {
            el.disableOnElementRerenderedEvent();
        });
    };
    SurveyElementBase.prototype.getStateElements = function () {
        var el = this.getStateElement();
        return !!el ? [el] : [];
    };
    SurveyElementBase.prototype.getStateElement = function () {
        return null;
    };
    Object.defineProperty(SurveyElementBase.prototype, "isDisplayMode", {
        get: function () {
            var props = this.props;
            return props.isDisplayMode || false;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementBase.prototype.renderLocString = function (locStr, style, key) {
        if (style === void 0) { style = null; }
        return SurveyElementBase.renderLocString(locStr, style, key);
    };
    SurveyElementBase.prototype.canMakeReact = function (stateElement) {
        return !!stateElement && !!stateElement.iteratePropertiesHash;
    };
    SurveyElementBase.prototype.isCurrentStateElement = function (stateElement) {
        return !!stateElement && !!stateElement.setPropertyValueCoreHandler && stateElement.setPropertyValueCoreHandler === this.propertyValueChangedHandler;
    };
    SurveyElementBase.prototype.makeBaseElementReact = function (stateElement) {
        var _this = this;
        if (!this.canMakeReact(stateElement))
            return;
        stateElement.iteratePropertiesHash(function (hash, key) {
            if (!_this.canUsePropInState(key))
                return;
            var val = hash[key];
            if (Array.isArray(val)) {
                var val = val;
                val["onArrayChanged"] = function (arrayChanges) {
                    if (_this.isRendering)
                        return;
                    _this.changedStatePropNameValue = key;
                    _this.setState(function (state) {
                        var newState = {};
                        newState[key] = val;
                        return newState;
                    });
                };
            }
        });
        stateElement.setPropertyValueCoreHandler = this.propertyValueChangedHandler;
    };
    SurveyElementBase.prototype.canUsePropInState = function (key) {
        return true;
    };
    SurveyElementBase.prototype.unMakeBaseElementReact = function (stateElement) {
        if (!this.canMakeReact(stateElement))
            return;
        if (!this.isCurrentStateElement(stateElement)) {
            // eslint-disable-next-line no-console
            // console.warn("Looks like the component is bound to another survey element. It is not supported and can lead to issues.");
            // return;
        }
        stateElement.setPropertyValueCoreHandler = undefined;
        stateElement.iteratePropertiesHash(function (hash, key) {
            var val = hash[key];
            if (Array.isArray(val)) {
                var val = val;
                val["onArrayChanged"] = function () { };
            }
        });
    };
    return SurveyElementBase;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

var ReactSurveyElement = /** @class */ (function (_super) {
    __extends(ReactSurveyElement, _super);
    function ReactSurveyElement(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(ReactSurveyElement.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    return ReactSurveyElement;
}(SurveyElementBase));

var SurveyQuestionElementBase = /** @class */ (function (_super) {
    __extends(SurveyQuestionElementBase, _super);
    function SurveyQuestionElementBase(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionElementBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.updateDomElement();
    };
    SurveyQuestionElementBase.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.updateDomElement();
    };
    SurveyQuestionElementBase.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!!this.questionBase) {
            var contentElement = this.content || this.control;
            this.questionBase.beforeDestroyQuestionElement(contentElement);
            if (!!contentElement) {
                contentElement.removeAttribute("data-rendered");
            }
        }
    };
    SurveyQuestionElementBase.prototype.updateDomElement = function () {
        var contentElement = this.content || this.control;
        if (!!contentElement) {
            if (contentElement.getAttribute("data-rendered") !== "r") {
                contentElement.setAttribute("data-rendered", "r");
                this.questionBase.afterRenderQuestionElement(contentElement);
            }
        }
    };
    Object.defineProperty(SurveyQuestionElementBase.prototype, "questionBase", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionElementBase.prototype.getRenderedElements = function () {
        return [this.questionBase];
    };
    Object.defineProperty(SurveyQuestionElementBase.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionElementBase.prototype.canRender = function () {
        return !!this.questionBase && !!this.creator;
    };
    SurveyQuestionElementBase.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        return (!this.questionBase.customWidget ||
            !!this.questionBase.customWidgetData.isNeedRender ||
            !!this.questionBase.customWidget.widgetJson.isDefaultRender ||
            !!this.questionBase.customWidget.widgetJson.render);
    };
    Object.defineProperty(SurveyQuestionElementBase.prototype, "isDisplayMode", {
        get: function () {
            var props = this.props;
            return (props.isDisplayMode ||
                (!!this.questionBase && this.questionBase.isInputReadOnly) || false);
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionElementBase.prototype.wrapCell = function (cell, element, reason) {
        if (!reason) {
            return element;
        }
        var survey = this.questionBase
            .survey;
        var wrapper = null;
        if (survey) {
            wrapper = _reactsurveymodel__WEBPACK_IMPORTED_MODULE_3__.ReactSurveyElementsWrapper.wrapMatrixCell(survey, element, cell, reason);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    SurveyQuestionElementBase.prototype.setControl = function (element) {
        if (!!element) {
            this.control = element;
        }
    };
    SurveyQuestionElementBase.prototype.setContent = function (element) {
        if (!!element) {
            this.content = element;
        }
    };
    return SurveyQuestionElementBase;
}(SurveyElementBase));

var SurveyQuestionUncontrolledElement = /** @class */ (function (_super) {
    __extends(SurveyQuestionUncontrolledElement, _super);
    function SurveyQuestionUncontrolledElement(props) {
        var _this = _super.call(this, props) || this;
        _this.updateValueOnEvent = function (event) {
            if (!survey_core__WEBPACK_IMPORTED_MODULE_1__.Helpers.isTwoValueEquals(_this.questionBase.value, event.target.value, false, true, false)) {
                _this.setValueCore(event.target.value);
            }
        };
        _this.updateValueOnEvent = _this.updateValueOnEvent.bind(_this);
        return _this;
    }
    Object.defineProperty(SurveyQuestionUncontrolledElement.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionUncontrolledElement.prototype.setValueCore = function (newValue) {
        this.questionBase.value = newValue;
    };
    SurveyQuestionUncontrolledElement.prototype.getValueCore = function () {
        return this.questionBase.value;
    };
    SurveyQuestionUncontrolledElement.prototype.updateDomElement = function () {
        if (!!this.control) {
            var control = this.control;
            var newValue = this.getValueCore();
            if (!survey_core__WEBPACK_IMPORTED_MODULE_1__.Helpers.isTwoValueEquals(newValue, control.value, false, true, false)) {
                control.value = this.getValue(newValue);
            }
        }
        _super.prototype.updateDomElement.call(this);
    };
    SurveyQuestionUncontrolledElement.prototype.getValue = function (val) {
        if (survey_core__WEBPACK_IMPORTED_MODULE_1__.Helpers.isValueEmpty(val))
            return "";
        return val;
    };
    return SurveyQuestionUncontrolledElement;
}(SurveyQuestionElementBase));



/***/ }),

/***/ "../survey-react-ui/src/reactquestion_empty.tsx":
/*!******************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_empty.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionEmpty: () => (/* binding */ SurveyQuestionEmpty)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionEmpty = /** @class */ (function (_super) {
    __extends(SurveyQuestionEmpty, _super);
    function SurveyQuestionEmpty(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: _this.question.value };
        return _this;
    }
    Object.defineProperty(SurveyQuestionEmpty.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionEmpty.prototype.renderElement = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);
    };
    return SurveyQuestionEmpty;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("empty", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionEmpty, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_expression.tsx":
/*!***********************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_expression.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionExpression: () => (/* binding */ SurveyQuestionExpression)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionExpression = /** @class */ (function (_super) {
    __extends(SurveyQuestionExpression, _super);
    function SurveyQuestionExpression(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionExpression.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionExpression.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: this.question.inputId, className: cssClasses.root, ref: function (div) { return (_this.setControl(div)); }, "aria-live": "polite", "aria-label": this.question.formatedValue }, this.question.formatedValue));
    };
    return SurveyQuestionExpression;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("expression", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionExpression, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_factory.tsx":
/*!********************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_factory.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactQuestionFactory: () => (/* binding */ ReactQuestionFactory)
/* harmony export */ });
var ReactQuestionFactory = /** @class */ (function () {
    function ReactQuestionFactory() {
        this.creatorHash = {};
    }
    ReactQuestionFactory.prototype.registerQuestion = function (questionType, questionCreator) {
        this.creatorHash[questionType] = questionCreator;
    };
    ReactQuestionFactory.prototype.getAllTypes = function () {
        var result = new Array();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    ReactQuestionFactory.prototype.createQuestion = function (questionType, params) {
        var creator = this.creatorHash[questionType];
        if (creator == null)
            return null;
        return creator(params);
    };
    ReactQuestionFactory.Instance = new ReactQuestionFactory();
    return ReactQuestionFactory;
}());



/***/ }),

/***/ "../survey-react-ui/src/reactquestion_file.tsx":
/*!*****************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_file.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionFile: () => (/* binding */ SurveyQuestionFile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/action-bar/action-bar */ "../survey-react-ui/src/components/action-bar/action-bar.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loading-indicator */ "../survey-react-ui/src/components/loading-indicator.tsx");
/* harmony import */ var _components_action_bar_action_bar_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/action-bar/action-bar-item */ "../survey-react-ui/src/components/action-bar/action-bar-item.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var SurveyQuestionFile = /** @class */ (function (_super) {
    __extends(SurveyQuestionFile, _super);
    function SurveyQuestionFile(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionFile.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionFile.prototype.renderElement = function () {
        var _this = this;
        var preview = this.question.allowShowPreview ? this.renderPreview() : null;
        var loadingIndicator = this.question.showLoadingIndicator ? this.renderLoadingIndicator() : null;
        var video = this.question.isPlayingVideo ? this.renderVideo() : null;
        var fileDecorator = this.question.showFileDecorator ? this.renderFileDecorator() : null;
        var fileNavigator = this.question.fileNavigatorVisible ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_1__.SurveyActionBar, { model: this.question.fileNavigator })) : null;
        var fileInput;
        if (this.question.isReadOnlyAttr) {
            fileInput = react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { readOnly: true, type: "file", className: !this.isDisplayMode ? this.question.cssClasses.fileInput : this.question.getReadOnlyFileCss(), id: this.question.inputId, ref: function (input) { return (_this.setControl(input)); }, style: !this.isDisplayMode ? {} : { color: "transparent" }, multiple: this.question.allowMultiple, placeholder: this.question.title, accept: this.question.acceptedTypes });
        }
        else if (this.question.isDisabledAttr) {
            fileInput = react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { disabled: true, type: "file", className: !this.isDisplayMode ? this.question.cssClasses.fileInput : this.question.getReadOnlyFileCss(), id: this.question.inputId, ref: function (input) { return (_this.setControl(input)); }, style: !this.isDisplayMode ? {} : { color: "transparent" }, multiple: this.question.allowMultiple, placeholder: this.question.title, accept: this.question.acceptedTypes });
        }
        else if (this.question.hasFileUI) {
            fileInput = react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "file", disabled: this.isDisplayMode, tabIndex: -1, className: !this.isDisplayMode ? this.question.cssClasses.fileInput : this.question.getReadOnlyFileCss(), id: this.question.inputId, ref: function (input) { return (_this.setControl(input)); }, style: !this.isDisplayMode ? {} : { color: "transparent" }, "aria-required": this.question.ariaRequired, "aria-label": this.question.ariaLabel, "aria-invalid": this.question.ariaInvalid, "aria-errormessage": this.question.ariaErrormessage, multiple: this.question.allowMultiple, title: this.question.inputTitle, accept: this.question.acceptedTypes, capture: this.question.renderCapture });
        }
        else {
            fileInput = null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.fileRootCss, ref: function (el) { return (_this.setContent(el)); } },
            fileInput,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.dragArea, onDrop: this.question.onDrop, onDragOver: this.question.onDragOver, onDragLeave: this.question.onDragLeave, onDragEnter: this.question.onDragEnter },
                fileDecorator,
                loadingIndicator,
                video,
                preview,
                fileNavigator)));
    };
    SurveyQuestionFile.prototype.renderFileDecorator = function () {
        var actionsContainer = this.question.actionsContainerVisible ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_1__.SurveyActionBar, { model: this.question.actionsContainer }) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getFileDecoratorCss() },
            this.question.showDragAreaPlaceholder ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.dragAreaPlaceholder }, this.renderLocString(this.question.locRenderedPlaceholder)) : false,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.wrapper }, actionsContainer)));
    };
    SurveyQuestionFile.prototype.renderPreview = function () {
        return _element_factory__WEBPACK_IMPORTED_MODULE_6__.ReactElementFactory.Instance.createElement("sv-file-preview", { question: this.question });
    };
    SurveyQuestionFile.prototype.renderLoadingIndicator = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.loadingIndicator },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_loading_indicator__WEBPACK_IMPORTED_MODULE_4__.LoadingIndicatorComponent, null));
    };
    SurveyQuestionFile.prototype.renderVideo = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.videoContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_action_bar_action_bar_item__WEBPACK_IMPORTED_MODULE_5__.SurveyAction, { item: this.question.changeCameraAction }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_action_bar_action_bar_item__WEBPACK_IMPORTED_MODULE_5__.SurveyAction, { item: this.question.closeCameraAction }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("video", { autoPlay: true, playsInline: true, id: this.question.videoId, className: this.question.cssClasses.video }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_action_bar_action_bar_item__WEBPACK_IMPORTED_MODULE_5__.SurveyAction, { item: this.question.takePictureAction })));
    };
    return SurveyQuestionFile;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionElementBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__.ReactQuestionFactory.Instance.registerQuestion("file", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionFile, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_html.tsx":
/*!*****************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_html.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionHtml: () => (/* binding */ SurveyQuestionHtml)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionHtml = /** @class */ (function (_super) {
    __extends(SurveyQuestionHtml, _super);
    function SurveyQuestionHtml(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionHtml.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionHtml.prototype.componentDidMount = function () {
        this.reactOnStrChanged();
    };
    SurveyQuestionHtml.prototype.componentWillUnmount = function () {
        this.question.locHtml.onChanged = function () { };
    };
    SurveyQuestionHtml.prototype.componentDidUpdate = function (prevProps, prevState) {
        this.reactOnStrChanged();
    };
    SurveyQuestionHtml.prototype.reactOnStrChanged = function () {
        var _this = this;
        this.question.locHtml.onChanged = function () {
            _this.setState({ changed: !!_this.state && _this.state.changed ? _this.state.changed + 1 : 1 });
        };
    };
    SurveyQuestionHtml.prototype.canRender = function () {
        return _super.prototype.canRender.call(this) && !!this.question.html;
    };
    SurveyQuestionHtml.prototype.renderElement = function () {
        var htmlValue = { __html: this.question.locHtml.renderedHtml };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.renderCssRoot, dangerouslySetInnerHTML: htmlValue }));
    };
    return SurveyQuestionHtml;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("html", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionHtml, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_matrix.tsx":
/*!*******************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_matrix.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionMatrix: () => (/* binding */ SurveyQuestionMatrix),
/* harmony export */   SurveyQuestionMatrixCell: () => (/* binding */ SurveyQuestionMatrixCell),
/* harmony export */   SurveyQuestionMatrixRow: () => (/* binding */ SurveyQuestionMatrixRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _reactsurveymodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactsurveymodel */ "../survey-react-ui/src/reactsurveymodel.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyQuestionMatrix = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrix, _super);
    function SurveyQuestionMatrix(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { rowsChanged: 0 };
        return _this;
    }
    Object.defineProperty(SurveyQuestionMatrix.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrix.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.question) {
            var self = this;
            this.question.visibleRowsChangedCallback = function () {
                self.setState({ rowsChanged: self.state.rowsChanged + 1 });
            };
        }
    };
    SurveyQuestionMatrix.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.question) {
            this.question.visibleRowsChangedCallback = null;
        }
    };
    SurveyQuestionMatrix.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        var rowsTH = this.question.hasRows ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null) : null;
        var headers = [];
        for (var i = 0; i < this.question.visibleColumns.length; i++) {
            var column = this.question.visibleColumns[i];
            var key = "column" + i;
            var columText = this.renderLocString(column.locText);
            var style = {};
            if (!!this.question.columnMinWidth) {
                style.minWidth = this.question.columnMinWidth;
                style.width = this.question.columnMinWidth;
            }
            headers.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: this.question.cssClasses.headerCell, style: style, key: key }, this.wrapCell({ column: column }, columText, "column-header")));
        }
        var rows = [];
        var visibleRows = this.question.visibleRows;
        for (var i = 0; i < visibleRows.length; i++) {
            var row = visibleRows[i];
            var key = "row-" + row.name + "-" + i;
            rows.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixRow, { key: key, question: this.question, cssClasses: cssClasses, row: row, isFirst: i == 0 }));
        }
        var header = !this.question.showHeader ? null : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", { role: "presentation" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null,
                rowsTH,
                headers)));
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.tableWrapper, ref: function (root) { return (_this.setControl(root)); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", { role: "radiogroup" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", { className: "sv-visuallyhidden" }, this.question.locTitle.renderedHtml),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: this.question.getTableCss(), role: "presentation" },
                    header,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, rows)))));
    };
    return SurveyQuestionMatrix;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

var SurveyQuestionMatrixRow = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixRow, _super);
    function SurveyQuestionMatrixRow(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionMatrixRow.prototype.getStateElement = function () {
        if (!!this.row)
            return this.row.item;
        return _super.prototype.getStateElement.call(this);
    };
    Object.defineProperty(SurveyQuestionMatrixRow.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixRow.prototype, "row", {
        get: function () {
            return this.props.row;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixRow.prototype.wrapCell = function (cell, element, reason) {
        if (!reason) {
            return element;
        }
        var survey = this.question.survey;
        var wrapper = null;
        if (survey) {
            wrapper = _reactsurveymodel__WEBPACK_IMPORTED_MODULE_3__.ReactSurveyElementsWrapper.wrapMatrixCell(survey, element, cell, reason);
        }
        return wrapper !== null && wrapper !== void 0 ? wrapper : element;
    };
    SurveyQuestionMatrixRow.prototype.canRender = function () {
        return !!this.row;
    };
    SurveyQuestionMatrixRow.prototype.renderElement = function () {
        var rowsTD = null;
        if (this.question.hasRows) {
            var rowText = this.renderLocString(this.row.locText);
            var style = {};
            if (!!this.question.rowTitleWidth) {
                style.minWidth = this.question.rowTitleWidth;
                style.width = this.question.rowTitleWidth;
            }
            rowsTD = react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { style: style, className: this.row.rowTextClasses }, this.wrapCell({ row: this.row }, rowText, "row-header"));
        }
        var tds = this.generateTds();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { className: this.row.rowClasses || undefined },
            rowsTD,
            tds));
    };
    SurveyQuestionMatrixRow.prototype.generateTds = function () {
        var _this = this;
        var tds = [];
        var row = this.row;
        var cellComponent = this.question.cellComponent;
        var _loop_1 = function () {
            var td = null;
            var column = this_1.question.visibleColumns[i];
            var key = "value" + i;
            var itemClass = this_1.question.getItemClass(row, column);
            if (this_1.question.hasCellText) {
                var getHandler = function (column) { return function () { return _this.cellClick(row, column); }; };
                td = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { key: key, className: itemClass, onClick: getHandler ? getHandler(column) : function () { } }, this_1.renderLocString(this_1.question.getCellDisplayLocText(row.name, column))));
            }
            else {
                var renderedCell = _element_factory__WEBPACK_IMPORTED_MODULE_4__.ReactElementFactory.Instance.createElement(cellComponent, {
                    question: this_1.question,
                    row: this_1.row,
                    column: column,
                    columnIndex: i,
                    cssClasses: this_1.cssClasses,
                    cellChanged: function () { _this.cellClick(_this.row, column); }
                });
                td = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { key: key, "data-responsive-title": column.locText.renderedHtml, className: this_1.question.cssClasses.cell }, renderedCell));
            }
            tds.push(td);
        };
        var this_1 = this;
        for (var i = 0; i < this.question.visibleColumns.length; i++) {
            _loop_1();
        }
        return tds;
    };
    SurveyQuestionMatrixRow.prototype.cellClick = function (row, column) {
        row.value = column.value;
        this.setState({ value: this.row.value });
    };
    return SurveyQuestionMatrixRow;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));

var SurveyQuestionMatrixCell = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixCell, _super);
    function SurveyQuestionMatrixCell(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnMouseDown = _this.handleOnMouseDown.bind(_this);
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        return _this;
    }
    SurveyQuestionMatrixCell.prototype.handleOnChange = function (event) {
        if (!!this.props.cellChanged) {
            this.props.cellChanged();
        }
    };
    SurveyQuestionMatrixCell.prototype.handleOnMouseDown = function (event) {
        this.question.onMouseDown();
    };
    Object.defineProperty(SurveyQuestionMatrixCell.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixCell.prototype, "row", {
        get: function () {
            return this.props.row;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixCell.prototype, "column", {
        get: function () {
            return this.props.column;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixCell.prototype, "columnIndex", {
        get: function () {
            return this.props.columnIndex;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixCell.prototype.canRender = function () {
        return !!this.question && !!this.row;
    };
    SurveyQuestionMatrixCell.prototype.renderElement = function () {
        var isChecked = this.row.value == this.column.value;
        var inputId = this.question.inputId + "_" + this.row.name + "_" + this.columnIndex;
        var itemClass = this.question.getItemClass(this.row, this.column);
        var mobileSpan = this.question.isMobile ?
            (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.cellResponsiveTitle }, this.renderLocString(this.column.locText)))
            : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { onMouseDown: this.handleOnMouseDown, className: itemClass },
            this.renderInput(inputId, isChecked),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.materialDecorator }, this.question.itemSvgIcon ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: this.cssClasses.itemDecorator },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { xlinkHref: this.question.itemSvgIcon })) :
                null),
            mobileSpan));
    };
    SurveyQuestionMatrixCell.prototype.renderInput = function (inputId, isChecked) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: inputId, type: "radio", className: this.cssClasses.itemValue, name: this.row.fullName, value: this.column.value, disabled: this.row.isDisabledAttr, readOnly: this.row.isReadOnlyAttr, checked: isChecked, onChange: this.handleOnChange, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.getCellAriaLabel(this.row, this.column), "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage }));
    };
    return SurveyQuestionMatrixCell;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_4__.ReactElementFactory.Instance.registerElement("survey-matrix-cell", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixCell, props);
});
_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("matrix", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrix, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_matrixdropdown.tsx":
/*!***************************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_matrixdropdown.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionMatrixDropdown: () => (/* binding */ SurveyQuestionMatrixDropdown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_matrixdropdownbase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_matrixdropdownbase */ "../survey-react-ui/src/reactquestion_matrixdropdownbase.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionMatrixDropdown = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixDropdown, _super);
    function SurveyQuestionMatrixDropdown(props) {
        return _super.call(this, props) || this;
    }
    return SurveyQuestionMatrixDropdown;
}(_reactquestion_matrixdropdownbase__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrixDropdownBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("matrixdropdown", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixDropdown, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_matrixdropdownbase.tsx":
/*!*******************************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_matrixdropdownbase.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionMatrixDropdownBase: () => (/* binding */ SurveyQuestionMatrixDropdownBase),
/* harmony export */   SurveyQuestionMatrixDropdownCell: () => (/* binding */ SurveyQuestionMatrixDropdownCell)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion */ "../survey-react-ui/src/reactquestion.tsx");
/* harmony import */ var _reactquestion_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_checkbox */ "../survey-react-ui/src/reactquestion_checkbox.tsx");
/* harmony import */ var _reactquestion_radiogroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactquestion_radiogroup */ "../survey-react-ui/src/reactquestion_radiogroup.tsx");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel */ "../survey-react-ui/src/panel.tsx");
/* harmony import */ var _components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/action-bar/action-bar */ "../survey-react-ui/src/components/action-bar/action-bar.tsx");
/* harmony import */ var _components_matrix_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/matrix/row */ "../survey-react-ui/src/components/matrix/row.tsx");
/* harmony import */ var _components_matrix_actions_drag_drop_icon_drag_drop_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/matrix-actions/drag-drop-icon/drag-drop-icon */ "../survey-react-ui/src/components/matrix-actions/drag-drop-icon/drag-drop-icon.tsx");
/* harmony import */ var _reactquestion_comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reactquestion_comment */ "../survey-react-ui/src/reactquestion_comment.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var SurveyQuestionMatrixTable = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixTable, _super);
    function SurveyQuestionMatrixTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixTable.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixTable.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixTable.prototype, "table", {
        get: function () {
            return this.question.renderedTable;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixTable.prototype.getStateElement = function () {
        return this.table;
    };
    SurveyQuestionMatrixTable.prototype.wrapCell = function (cell, element, reason) {
        return this.props.wrapCell(cell, element, reason);
    };
    SurveyQuestionMatrixTable.prototype.renderHeader = function () {
        var table = this.question.renderedTable;
        if (!table.showHeader)
            return null;
        var headers = [];
        var cells = table.headerRow.cells;
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var key = "column" + i;
            var columnStyle = {};
            if (!!cell.width) {
                columnStyle.width = cell.width;
            }
            if (!!cell.minWidth) {
                columnStyle.minWidth = cell.minWidth;
            }
            var cellContent = this.renderCellContent(cell, "column-header", {});
            var header = cell.hasTitle ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { className: cell.className, key: key, style: columnStyle },
                    " ",
                    cellContent,
                    " ")
                : react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: cell.className, key: key, style: columnStyle });
            headers.push(header);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, headers)));
    };
    SurveyQuestionMatrixTable.prototype.renderFooter = function () {
        var table = this.question.renderedTable;
        if (!table.showFooter)
            return null;
        var row = this.renderRow("footer", table.footerRow, this.question.cssClasses, "row-footer");
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("tfoot", null, row);
    };
    SurveyQuestionMatrixTable.prototype.renderRows = function () {
        var cssClasses = this.question.cssClasses;
        var rows = [];
        var renderedRows = this.question.renderedTable.renderedRows;
        for (var i = 0; i < renderedRows.length; i++) {
            rows.push(this.renderRow(renderedRows[i].id, renderedRows[i], cssClasses));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, rows);
    };
    SurveyQuestionMatrixTable.prototype.renderRow = function (keyValue, row, cssClasses, reason) {
        var matrixrow = [];
        var cells = row.cells;
        for (var i = 0; i < cells.length; i++) {
            matrixrow.push(this.renderCell(cells[i], cssClasses, reason));
        }
        var key = "row" + keyValue;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: key }, (reason == "row-footer") ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, matrixrow) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_matrix_row__WEBPACK_IMPORTED_MODULE_7__.MatrixRow, { model: row, parentMatrix: this.question }, matrixrow)));
    };
    SurveyQuestionMatrixTable.prototype.renderCell = function (cell, cssClasses, reason) {
        var key = "cell" + cell.id;
        if (cell.hasQuestion) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixDropdownCell, { key: key, cssClasses: cssClasses, cell: cell, creator: this.creator, reason: reason }));
        }
        if (cell.isErrorsCell) {
            if (cell.isErrorsCell) {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixDropdownErrorsCell, { cell: cell, key: key, keyValue: key, question: cell.question, creator: this.creator }));
            }
        }
        var calcReason = reason;
        if (!calcReason) {
            calcReason = cell.hasTitle ? "row-header" : "";
        }
        var cellContent = this.renderCellContent(cell, calcReason, cssClasses);
        var cellStyle = null;
        if (!!cell.width || !!cell.minWidth) {
            cellStyle = {};
            if (!!cell.width)
                cellStyle.width = cell.width;
            if (!!cell.minWidth)
                cellStyle.minWidth = cell.minWidth;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: cell.className, key: key, style: cellStyle, colSpan: cell.colSpans, title: cell.getTitle() }, cellContent));
    };
    SurveyQuestionMatrixTable.prototype.renderCellContent = function (cell, reason, cssClasses) {
        var cellContent = null;
        var cellStyle = null;
        if (!!cell.width || !!cell.minWidth) {
            cellStyle = {};
            if (!!cell.width)
                cellStyle.width = cell.width;
            if (!!cell.minWidth)
                cellStyle.minWidth = cell.minWidth;
        }
        if (cell.hasTitle) {
            reason = "row-header";
            var str = this.renderLocString(cell.locTitle);
            var require_1 = !!cell.column ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixHeaderRequired, { column: cell.column, question: this.question }) : null;
            cellContent = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                str,
                require_1));
        }
        if (cell.isDragHandlerCell) {
            cellContent = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_matrix_actions_drag_drop_icon_drag_drop_icon__WEBPACK_IMPORTED_MODULE_8__.SurveyQuestionMatrixDynamicDragDropIcon, { item: { data: { row: cell.row, question: this.question } } })));
        }
        if (cell.isActionsCell) {
            cellContent = (_element_factory__WEBPACK_IMPORTED_MODULE_10__.ReactElementFactory.Instance.createElement("sv-matrixdynamic-actions-cell", {
                question: this.question,
                cssClasses: cssClasses,
                cell: cell,
                model: cell.item.getData()
            }));
        }
        if (cell.hasPanel) {
            cellContent = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_panel__WEBPACK_IMPORTED_MODULE_5__.SurveyPanel, { key: cell.panel.id, element: cell.panel, survey: this.question.survey, cssClasses: cssClasses, isDisplayMode: this.isDisplayMode, creator: this.creator }));
        }
        if (!cellContent)
            return null;
        var readyCell = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, cellContent));
        return this.wrapCell(cell, readyCell, reason);
    };
    SurveyQuestionMatrixTable.prototype.renderElement = function () {
        var header = this.renderHeader();
        var footers = this.renderFooter();
        var rows = this.renderRows();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: this.question.getTableCss() },
            header,
            rows,
            footers));
    };
    return SurveyQuestionMatrixTable;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));
var SurveyQuestionMatrixDropdownBase = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixDropdownBase, _super);
    function SurveyQuestionMatrixDropdownBase(props) {
        var _this = _super.call(this, props) || this;
        //Create rendered table in contructor and not on rendering
        var table = _this.question.renderedTable;
        _this.state = _this.getState();
        return _this;
    }
    Object.defineProperty(SurveyQuestionMatrixDropdownBase.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDropdownBase.prototype.getState = function (prevState) {
        if (prevState === void 0) { prevState = null; }
        return { rowCounter: !prevState ? 0 : prevState.rowCounter + 1 };
    };
    SurveyQuestionMatrixDropdownBase.prototype.updateStateOnCallback = function () {
        if (this.isRendering)
            return;
        this.setState(this.getState(this.state));
    };
    SurveyQuestionMatrixDropdownBase.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        this.question.onRenderedTableResetCallback = function () {
            _this.updateStateOnCallback();
        };
    };
    SurveyQuestionMatrixDropdownBase.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.question.onRenderedTableResetCallback = function () { };
    };
    SurveyQuestionMatrixDropdownBase.prototype.renderElement = function () {
        return this.renderTableDiv();
    };
    SurveyQuestionMatrixDropdownBase.prototype.renderTableDiv = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.tableWrapper, ref: function (root) { return (_this.setControl(root)); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixTable, { question: this.question, creator: this.creator, wrapCell: function (cell, element, reason) { return _this.wrapCell(cell, element, reason); } })));
    };
    return SurveyQuestionMatrixDropdownBase;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

var SurveyQuestionMatrixActionsCell = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixActionsCell, _super);
    function SurveyQuestionMatrixActionsCell(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixActionsCell.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixActionsCell.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_6__.SurveyActionBar, { model: this.model, handleClick: false }));
    };
    return SurveyQuestionMatrixActionsCell;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));
var SurveyQuestionMatrixDropdownErrorsCell = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixDropdownErrorsCell, _super);
    function SurveyQuestionMatrixDropdownErrorsCell(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixDropdownErrorsCell.prototype, "key", {
        get: function () {
            return this.props.keyValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixDropdownErrorsCell.prototype, "cell", {
        get: function () {
            return this.props.cell;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDropdownErrorsCell.prototype.render = function () {
        if (!this.cell.isVisible)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { className: this.cell.className, key: this.key, colSpan: this.cell.colSpans, title: this.cell.getTitle() }, _super.prototype.render.call(this));
    };
    SurveyQuestionMatrixDropdownErrorsCell.prototype.getQuestionPropertiesToTrack = function () {
        return _super.prototype.getQuestionPropertiesToTrack.call(this).concat(["visible"]);
    };
    return SurveyQuestionMatrixDropdownErrorsCell;
}(_reactquestion__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionErrorCell));
_element_factory__WEBPACK_IMPORTED_MODULE_10__.ReactElementFactory.Instance.registerElement("sv-matrixdynamic-actions-cell", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixActionsCell, props);
});
var SurveyQuestionMatrixHeaderRequired = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixHeaderRequired, _super);
    function SurveyQuestionMatrixHeaderRequired(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixHeaderRequired.prototype, "column", {
        get: function () {
            return this.props.column;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixHeaderRequired.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixHeaderRequired.prototype.getStateElement = function () {
        return this.column;
    };
    SurveyQuestionMatrixHeaderRequired.prototype.renderElement = function () {
        if (!this.column.isRenderedRequired)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u00A0"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.cellRequiredMark }, this.column.requiredMark)));
    };
    return SurveyQuestionMatrixHeaderRequired;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));
var SurveyQuestionMatrixDropdownCell = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixDropdownCell, _super);
    function SurveyQuestionMatrixDropdownCell(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionMatrixDropdownCell.prototype, "cell", {
        get: function () {
            return this.props.cell;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionMatrixDropdownCell.prototype, "itemCss", {
        get: function () {
            return !!this.cell ? this.cell.className : "";
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDropdownCell.prototype.getQuestion = function () {
        var q = _super.prototype.getQuestion.call(this);
        if (!!q)
            return q;
        return !!this.cell ? this.cell.question : null;
    };
    SurveyQuestionMatrixDropdownCell.prototype.doAfterRender = function () {
        var el = this.cellRef.current;
        if (el &&
            this.cell &&
            this.question &&
            this.question.survey &&
            el.getAttribute("data-rendered") !== "r") {
            el.setAttribute("data-rendered", "r");
            var options = {
                cell: this.cell,
                cellQuestion: this.question,
                htmlElement: el,
                row: this.cell.row,
                column: this.cell.cell.column,
            };
            this.question.survey.matrixAfterCellRender(options);
            this.question.afterRenderCore(el);
        }
    };
    SurveyQuestionMatrixDropdownCell.prototype.getShowErrors = function () {
        return (this.question.isVisible &&
            (!this.cell.isChoice || this.cell.isFirstChoice));
    };
    SurveyQuestionMatrixDropdownCell.prototype.getCellStyle = function () {
        var res = _super.prototype.getCellStyle.call(this);
        if (!!this.cell.width || !!this.cell.minWidth) {
            if (!res)
                res = {};
            if (!!this.cell.width)
                res.width = this.cell.width;
            if (!!this.cell.minWidth)
                res.minWidth = this.cell.minWidth;
        }
        return res;
    };
    SurveyQuestionMatrixDropdownCell.prototype.getHeaderText = function () {
        return this.cell.headers;
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderElement = function () {
        if (!this.cell.isVisible) {
            return null;
        }
        return _super.prototype.renderElement.call(this);
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderCellContent = function () {
        var content = _super.prototype.renderCellContent.call(this);
        var responsiveTitle = this.cell.showResponsiveTitle ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.cell.responsiveTitleCss },
            this.renderLocString(this.cell.responsiveLocTitle),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixHeaderRequired, { column: this.cell.column, question: this.cell.matrix }))) : null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            responsiveTitle,
            content);
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderQuestion = function () {
        if (!this.question.isVisible)
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
        if (!this.cell.isChoice)
            return _reactquestion__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestion.renderQuestionBody(this.creator, this.question);
        if (this.cell.isOtherChoice)
            return this.renderOtherComment();
        if (this.cell.isCheckbox)
            return this.renderCellCheckboxButton();
        return this.renderCellRadiogroupButton();
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderOtherComment = function () {
        var question = this.cell.question;
        var cssClasses = question.cssClasses || {};
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion_comment__WEBPACK_IMPORTED_MODULE_9__.SurveyQuestionCommentValueItem, { question: question, item: question.otherItem, cssClasses: cssClasses, otherCss: cssClasses.other, isDisplayMode: question.isInputReadOnly });
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderCellCheckboxButton = function () {
        var key = this.cell.question.id + "item" + this.cell.choiceIndex;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion_checkbox__WEBPACK_IMPORTED_MODULE_3__.SurveyQuestionCheckboxItem, { key: key, question: this.cell.question, cssClasses: this.cell.question.cssClasses, isDisplayMode: this.cell.question.isInputReadOnly, item: this.cell.item, isFirst: this.cell.isFirstChoice, index: this.cell.choiceIndex.toString(), hideCaption: true, ariaLabel: this.getCellAriaLabel() }));
    };
    SurveyQuestionMatrixDropdownCell.prototype.renderCellRadiogroupButton = function () {
        var key = this.cell.question.id + "item" + this.cell.choiceIndex;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion_radiogroup__WEBPACK_IMPORTED_MODULE_4__.SurveyQuestionRadioItem, { key: key, question: this.cell.question, cssClasses: this.cell.question.cssClasses, isDisplayMode: this.cell.question.isInputReadOnly, item: this.cell.item, index: this.cell.choiceIndex.toString(), isChecked: this.cell.question.value === this.cell.item.value, isDisabled: this.cell.question.isReadOnly || !this.cell.item.isEnabled, hideCaption: true, ariaLabel: this.getCellAriaLabel() }));
    };
    SurveyQuestionMatrixDropdownCell.prototype.getCellAriaLabel = function () {
        return this.question.parentQuestion.getCellAriaLabel(this.cell.row, this.cell.column);
    };
    return SurveyQuestionMatrixDropdownCell;
}(_reactquestion__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionAndErrorsCell));



/***/ }),

/***/ "../survey-react-ui/src/reactquestion_matrixdynamic.tsx":
/*!**************************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_matrixdynamic.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionMatrixDynamic: () => (/* binding */ SurveyQuestionMatrixDynamic),
/* harmony export */   SurveyQuestionMatrixDynamicAddButton: () => (/* binding */ SurveyQuestionMatrixDynamicAddButton),
/* harmony export */   SurveyQuestionMatrixDynamicPlaceholder: () => (/* binding */ SurveyQuestionMatrixDynamicPlaceholder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _reactquestion_matrixdropdownbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_matrixdropdownbase */ "../survey-react-ui/src/reactquestion_matrixdropdownbase.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyQuestionMatrixDynamic = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixDynamic, _super);
    function SurveyQuestionMatrixDynamic(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnRowAddClick = _this.handleOnRowAddClick.bind(_this);
        return _this;
    }
    Object.defineProperty(SurveyQuestionMatrixDynamic.prototype, "matrix", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDynamic.prototype.handleOnRowAddClick = function (event) {
        this.matrix.addRowUI();
    };
    SurveyQuestionMatrixDynamic.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var showTable = this.question.renderedTable.showTable;
        var mainDiv = showTable
            ? this.renderTableDiv()
            : this.renderNoRowsContent(cssClasses);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            this.renderAddRowButtonOnTop(cssClasses),
            mainDiv,
            this.renderAddRowButtonOnBottom(cssClasses)));
    };
    SurveyQuestionMatrixDynamic.prototype.renderAddRowButtonOnTop = function (cssClasses) {
        if (!this.matrix.renderedTable.showAddRowOnTop)
            return null;
        return this.renderAddRowButton(cssClasses);
    };
    SurveyQuestionMatrixDynamic.prototype.renderAddRowButtonOnBottom = function (cssClasses) {
        if (!this.matrix.renderedTable.showAddRowOnBottom)
            return null;
        return this.renderAddRowButton(cssClasses);
    };
    SurveyQuestionMatrixDynamic.prototype.renderNoRowsContent = function (cssClasses) {
        return _element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement("sv-placeholder-matrixdynamic", { cssClasses: cssClasses, question: this.matrix });
    };
    SurveyQuestionMatrixDynamic.prototype.renderAddRowButton = function (cssClasses, isEmptySection) {
        if (isEmptySection === void 0) { isEmptySection = false; }
        return _element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement("sv-matrixdynamic-add-btn", {
            question: this.question,
            cssClasses: cssClasses,
            isEmptySection: isEmptySection
        });
    };
    return SurveyQuestionMatrixDynamic;
}(_reactquestion_matrixdropdownbase__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionMatrixDropdownBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_1__.ReactQuestionFactory.Instance.registerQuestion("matrixdynamic", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixDynamic, props);
});
var SurveyQuestionMatrixDynamicAddButton = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixDynamicAddButton, _super);
    function SurveyQuestionMatrixDynamicAddButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnRowAddClick = _this.handleOnRowAddClick.bind(_this);
        return _this;
    }
    Object.defineProperty(SurveyQuestionMatrixDynamicAddButton.prototype, "matrix", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMatrixDynamicAddButton.prototype.handleOnRowAddClick = function (event) {
        this.matrix.addRowUI();
    };
    SurveyQuestionMatrixDynamicAddButton.prototype.renderElement = function () {
        var addRowText = this.renderLocString(this.matrix.locAddRowText);
        var addButton = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: this.matrix.getAddRowButtonCss(this.props.isEmptySection), type: "button", disabled: this.matrix.isInputReadOnly, onClick: this.matrix.isDesignMode ? undefined : this.handleOnRowAddClick },
            addRowText,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.props.cssClasses.iconAdd })));
        return (this.props.isEmptySection ? addButton : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.props.cssClasses.footer }, addButton));
    };
    return SurveyQuestionMatrixDynamicAddButton;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_4__.ReactSurveyElement));

var SurveyQuestionMatrixDynamicPlaceholder = /** @class */ (function (_super) {
    __extends(SurveyQuestionMatrixDynamicPlaceholder, _super);
    function SurveyQuestionMatrixDynamicPlaceholder(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionMatrixDynamicPlaceholder.prototype.renderElement = function () {
        var cssClasses = this.props.cssClasses;
        var matrix = this.props.question;
        var showAddButton = matrix.renderedTable.showAddRow;
        var text = this.renderLocString(matrix.locNoRowsText);
        var textDiv = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.noRowsText }, text);
        var btn = showAddButton ? this.renderAddRowButton(cssClasses, matrix) : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.noRowsSection },
            textDiv,
            btn));
    };
    SurveyQuestionMatrixDynamicPlaceholder.prototype.renderAddRowButton = function (cssClasses, question) {
        return _element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement("sv-matrixdynamic-add-btn", {
            question: question, cssClasses: cssClasses, isEmptySection: true
        });
    };
    return SurveyQuestionMatrixDynamicPlaceholder;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_4__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("sv-matrixdynamic-add-btn", function (props) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixDynamicAddButton, props); });
_element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.registerElement("sv-placeholder-matrixdynamic", function (props) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMatrixDynamicPlaceholder, props); });


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_multipletext.tsx":
/*!*************************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_multipletext.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyMultipleTextItem: () => (/* binding */ SurveyMultipleTextItem),
/* harmony export */   SurveyMultipleTextItemEditor: () => (/* binding */ SurveyMultipleTextItemEditor),
/* harmony export */   SurveyQuestionMultipleText: () => (/* binding */ SurveyQuestionMultipleText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion */ "../survey-react-ui/src/reactquestion.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _components_title_title_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/title/title-content */ "../survey-react-ui/src/components/title/title-content.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var SurveyQuestionMultipleText = /** @class */ (function (_super) {
    __extends(SurveyQuestionMultipleText, _super);
    function SurveyQuestionMultipleText(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionMultipleText.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionMultipleText.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var tableRows = this.question.getRows();
        var rows = [];
        for (var i = 0; i < tableRows.length; i++) {
            if (tableRows[i].isVisible) {
                rows.push(this.renderRow(i, tableRows[i].cells, cssClasses));
            }
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", { className: this.question.getQuestionRootCss() },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, rows)));
    };
    SurveyQuestionMultipleText.prototype.renderCell = function (cell, cssClasses, index) {
        var cellContent;
        var focusIn = function () { cell.item.focusIn(); };
        if (cell.isErrorsCell) {
            cellContent = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionErrorCell, { question: cell.item.editor, creator: this.creator });
        }
        else {
            cellContent = react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyMultipleTextItem, { question: this.question, item: cell.item, creator: this.creator, cssClasses: cssClasses });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { key: "item" + index, className: cell.className, onFocus: focusIn }, cellContent));
    };
    SurveyQuestionMultipleText.prototype.renderRow = function (rowIndex, cells, cssClasses) {
        var key = "item" + rowIndex;
        var tds = [];
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            tds.push(this.renderCell(cell, cssClasses, i));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { key: key, className: cssClasses.row }, tds));
    };
    return SurveyQuestionMultipleText;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

var SurveyMultipleTextItem = /** @class */ (function (_super) {
    __extends(SurveyMultipleTextItem, _super);
    function SurveyMultipleTextItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyMultipleTextItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyMultipleTextItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyMultipleTextItem.prototype.getStateElements = function () {
        return [this.item, this.item.editor];
    };
    Object.defineProperty(SurveyMultipleTextItem.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyMultipleTextItem.prototype.renderElement = function () {
        var item = this.item;
        var cssClasses = this.cssClasses;
        var titleStyle = {};
        if (!!this.question.itemTitleWidth) {
            titleStyle.minWidth = this.question.itemTitleWidth;
            titleStyle.width = this.question.itemTitleWidth;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: this.question.getItemLabelCss(item) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: cssClasses.itemTitle, style: titleStyle },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_title_title_content__WEBPACK_IMPORTED_MODULE_4__.TitleContent, { element: item.editor, cssClasses: item.editor.cssClasses })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyMultipleTextItemEditor, { cssClasses: cssClasses, itemCss: this.question.getItemCss(), question: item.editor, creator: this.creator })));
    };
    return SurveyMultipleTextItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));

var SurveyMultipleTextItemEditor = /** @class */ (function (_super) {
    __extends(SurveyMultipleTextItemEditor, _super);
    function SurveyMultipleTextItemEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyMultipleTextItemEditor.prototype.renderElement = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.itemCss }, this.renderContent());
    };
    return SurveyMultipleTextItemEditor;
}(_reactquestion__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionAndErrorsWrapped));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__.ReactQuestionFactory.Instance.registerQuestion("multipletext", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionMultipleText, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_paneldynamic.tsx":
/*!*************************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_paneldynamic.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionPanelDynamic: () => (/* binding */ SurveyQuestionPanelDynamic),
/* harmony export */   SurveyQuestionPanelDynamicItem: () => (/* binding */ SurveyQuestionPanelDynamicItem),
/* harmony export */   SurveyQuestionPanelDynamicPlaceholder: () => (/* binding */ SurveyQuestionPanelDynamicPlaceholder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "../survey-react-ui/src/panel.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/action-bar/action-bar */ "../survey-react-ui/src/components/action-bar/action-bar.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var SurveyQuestionPanelDynamic = /** @class */ (function (_super) {
    __extends(SurveyQuestionPanelDynamic, _super);
    function SurveyQuestionPanelDynamic(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionPanelDynamic.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionPanelDynamic.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.setState({ panelCounter: 0 });
        var self = this;
        this.question.panelCountChangedCallback = function () {
            self.updateQuestionRendering();
        };
        this.question.currentIndexChangedCallback = function () {
            self.updateQuestionRendering();
        };
        this.question.renderModeChangedCallback = function () {
            self.updateQuestionRendering();
        };
    };
    SurveyQuestionPanelDynamic.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.question.panelCountChangedCallback = function () { };
        this.question.currentIndexChangedCallback = function () { };
        this.question.renderModeChangedCallback = function () { };
    };
    SurveyQuestionPanelDynamic.prototype.updateQuestionRendering = function () {
        this.setState({
            panelCounter: this.state ? this.state.panelCounter + 1 : 1,
        });
    };
    SurveyQuestionPanelDynamic.prototype.renderElement = function () {
        var _this = this;
        var panels = [];
        var cssClasses = this.question.cssClasses;
        this.question.renderedPanels.forEach(function (panel, index) {
            panels.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionPanelDynamicItem, { key: panel.id, element: panel, question: _this.question, index: index, cssClasses: cssClasses, isDisplayMode: _this.isDisplayMode, creator: _this.creator }));
        });
        var rangeTop = this.question.isRangeShowing && this.question.isProgressTopShowing
            ? this.renderRange()
            : null;
        var navV2 = this.renderNavigatorV2();
        var noEntriesPlaceholder = this.renderPlaceholder(cssClasses);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.root },
            this.question.hasTabbedMenu ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getTabsContainerCss() },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_4__.SurveyActionBar, { model: this.question.tabbedMenu })) : null,
            noEntriesPlaceholder,
            rangeTop,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.panelsContainer }, panels),
            navV2));
    };
    SurveyQuestionPanelDynamic.prototype.renderRange = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.progress },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.progressBar, style: { width: this.question.progress }, role: "progressbar", "aria-label": this.question.progressBarAriaLabel })));
    };
    SurveyQuestionPanelDynamic.prototype.renderAddRowButton = function () {
        return _element_factory__WEBPACK_IMPORTED_MODULE_5__.ReactElementFactory.Instance.createElement("sv-paneldynamic-add-btn", {
            data: { question: this.question }
        });
    };
    SurveyQuestionPanelDynamic.prototype.renderNavigatorV2 = function () {
        if (!this.question.showNavigation)
            return null;
        var range = this.question.isRangeShowing && this.question.isProgressBottomShowing ? this.renderRange() : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.footer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", { className: this.question.cssClasses.separator }),
            range,
            this.question.showFooterToolbar ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.footerButtonsContainer },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_action_bar_action_bar__WEBPACK_IMPORTED_MODULE_4__.SurveyActionBar, { model: this.question.footerToolbar }))) : null));
    };
    SurveyQuestionPanelDynamic.prototype.renderPlaceholder = function (cssClasses) {
        if (this.question.getShowNoEntriesPlaceholder())
            return _element_factory__WEBPACK_IMPORTED_MODULE_5__.ReactElementFactory.Instance.createElement("sv-placeholder-paneldynamic", { cssClasses: cssClasses, question: this.question });
        return null;
    };
    return SurveyQuestionPanelDynamic;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

var SurveyQuestionPanelDynamicItem = /** @class */ (function (_super) {
    __extends(SurveyQuestionPanelDynamicItem, _super);
    function SurveyQuestionPanelDynamicItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionPanelDynamicItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionPanelDynamicItem.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionPanelDynamicItem.prototype.getSurvey = function () {
        return !!this.question ? this.question.survey : null;
    };
    SurveyQuestionPanelDynamicItem.prototype.getCss = function () {
        var survey = this.getSurvey();
        return !!survey ? survey.getCss() : {};
    };
    SurveyQuestionPanelDynamicItem.prototype.render = function () {
        var panel = _super.prototype.render.call(this);
        var removeButton = this.renderButton();
        var separator = this.question.showSeparator(this.index) ?
            (react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", { className: this.question.cssClasses.separator })) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getPanelWrapperCss(this.panel) },
                panel,
                removeButton),
            separator));
    };
    SurveyQuestionPanelDynamicItem.prototype.renderButton = function () {
        if (!this.question.canRenderRemovePanelOnRight(this.panel))
            return null;
        return _element_factory__WEBPACK_IMPORTED_MODULE_5__.ReactElementFactory.Instance.createElement("sv-paneldynamic-remove-btn", {
            data: { question: this.question, panel: this.panel }
        });
    };
    return SurveyQuestionPanelDynamicItem;
}(_panel__WEBPACK_IMPORTED_MODULE_2__.SurveyPanel));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__.ReactQuestionFactory.Instance.registerQuestion("paneldynamic", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionPanelDynamic, props);
});
var SurveyQuestionPanelDynamicPlaceholder = /** @class */ (function (_super) {
    __extends(SurveyQuestionPanelDynamicPlaceholder, _super);
    function SurveyQuestionPanelDynamicPlaceholder(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionPanelDynamicPlaceholder.prototype.renderElement = function () {
        var cssClasses = this.props.cssClasses;
        var question = this.props.question;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.noEntriesPlaceholder },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.renderLocString(question.locNoEntriesText)),
            this.renderAddRowButton(question)));
    };
    SurveyQuestionPanelDynamicPlaceholder.prototype.renderAddRowButton = function (question) {
        return _element_factory__WEBPACK_IMPORTED_MODULE_5__.ReactElementFactory.Instance.createElement("sv-paneldynamic-add-btn", {
            data: { question: question }
        });
    };
    return SurveyQuestionPanelDynamicPlaceholder;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_5__.ReactElementFactory.Instance.registerElement("sv-placeholder-paneldynamic", function (props) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionPanelDynamicPlaceholder, props); });


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_radiogroup.tsx":
/*!***********************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_radiogroup.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionRadioItem: () => (/* binding */ SurveyQuestionRadioItem),
/* harmony export */   SurveyQuestionRadiogroup: () => (/* binding */ SurveyQuestionRadiogroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_comment */ "../survey-react-ui/src/reactquestion_comment.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _reactsurveymodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactsurveymodel */ "../survey-react-ui/src/reactsurveymodel.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var SurveyQuestionRadiogroup = /** @class */ (function (_super) {
    __extends(SurveyQuestionRadiogroup, _super);
    function SurveyQuestionRadiogroup(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionRadiogroup.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRadiogroup.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        var clearButton = null;
        if (this.question.showClearButtonInContent) {
            clearButton = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "button", className: this.question.cssClasses.clearButton, onClick: function () { return _this.question.clearValue(true); }, value: this.question.clearButtonCaption })));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", { className: this.question.getSelectBaseRootCss(), ref: function (fieldset) { return (_this.setControl(fieldset)); }, role: this.question.a11y_input_ariaRole, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage },
            this.question.hasColumns
                ? this.getColumnedBody(cssClasses)
                : this.getBody(cssClasses),
            this.getFooter(),
            clearButton));
    };
    SurveyQuestionRadiogroup.prototype.getFooter = function () {
        var _this = this;
        if (this.question.hasFootItems) {
            return this.question.footItems.map(function (item, ii) {
                return _this.renderItem(item, false, _this.question.cssClasses);
            });
        }
    };
    SurveyQuestionRadiogroup.prototype.getColumnedBody = function (cssClasses) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.rootMultiColumn }, this.getColumns(cssClasses)));
    };
    SurveyQuestionRadiogroup.prototype.getColumns = function (cssClasses) {
        var _this = this;
        var value = this.getStateValue();
        return this.question.columns.map(function (column, ci) {
            var items = column.map(function (item, ii) {
                return _this.renderItem(item, value, cssClasses, "" + ci + ii);
            });
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: "column" + ci + _this.question.getItemsColumnKey(column), className: _this.question.getColumnClass(), role: "presentation" }, items));
        });
    };
    SurveyQuestionRadiogroup.prototype.getBody = function (cssClasses) {
        if (this.question.blockedRow) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.rootRow }, this.getItems(cssClasses, this.question.dataChoices));
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.getItems(cssClasses, this.question.bodyItems));
        }
    };
    SurveyQuestionRadiogroup.prototype.getItems = function (cssClasses, choices) {
        var items = [];
        var value = this.getStateValue();
        for (var i = 0; i < choices.length; i++) {
            var item = choices[i];
            var renderedItem = this.renderItem(item, value, cssClasses, "" + i);
            items.push(renderedItem);
        }
        return items;
    };
    Object.defineProperty(SurveyQuestionRadiogroup.prototype, "textStyle", {
        get: function () {
            return null; //{ display: "inline", position: "static" };
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRadiogroup.prototype.renderItem = function (item, value, cssClasses, index) {
        var renderedItem = _element_factory__WEBPACK_IMPORTED_MODULE_5__.ReactElementFactory.Instance.createElement(this.question.itemComponent, {
            key: item.value,
            question: this.question,
            cssClasses: cssClasses,
            isDisplayMode: this.isDisplayMode,
            item: item,
            textStyle: this.textStyle,
            index: index,
            isChecked: value === item.value,
        });
        var survey = this.question.survey;
        var wrappedItem = null;
        if (!!survey) {
            wrappedItem = _reactsurveymodel__WEBPACK_IMPORTED_MODULE_4__.ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
        }
        return wrappedItem !== null && wrappedItem !== void 0 ? wrappedItem : renderedItem;
    };
    SurveyQuestionRadiogroup.prototype.getStateValue = function () {
        return !this.question.isEmpty() ? this.question.renderedValue : "";
    };
    return SurveyQuestionRadiogroup;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

var SurveyQuestionRadioItem = /** @class */ (function (_super) {
    __extends(SurveyQuestionRadioItem, _super);
    function SurveyQuestionRadioItem(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        _this.handleOnChange = _this.handleOnChange.bind(_this);
        _this.handleOnMouseDown = _this.handleOnMouseDown.bind(_this);
        return _this;
    }
    SurveyQuestionRadioItem.prototype.getStateElement = function () {
        return this.item;
    };
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "textStyle", {
        get: function () {
            return this.props.textStyle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "isChecked", {
        get: function () {
            return this.props.isChecked;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "hideCaption", {
        get: function () {
            return this.props.hideCaption === true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRadioItem.prototype, "ariaLabel", {
        get: function () {
            return this.props.ariaLabel || null;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRadioItem.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        if (!this.question)
            return false;
        return (!this.question.customWidget ||
            !!this.question.customWidgetData.isNeedRender ||
            !!this.question.customWidget.widgetJson.isDefaultRender ||
            !!this.question.customWidget.widgetJson.render);
    };
    SurveyQuestionRadioItem.prototype.handleOnChange = function (event) {
        this.question.clickItemHandler(this.item);
    };
    SurveyQuestionRadioItem.prototype.handleOnMouseDown = function (event) {
        this.question.onMouseDown();
    };
    SurveyQuestionRadioItem.prototype.canRender = function () {
        return !!this.question && !!this.item;
    };
    SurveyQuestionRadioItem.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (prevProps.item !== this.props.item && !this.question.isDesignMode) {
            if (this.props.item) {
                this.props.item.setRootElement(this.rootRef.current);
            }
            if (prevProps.item) {
                prevProps.item.setRootElement(undefined);
            }
        }
    };
    SurveyQuestionRadioItem.prototype.renderElement = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            this.renderRadioButton(),
            this.renderComment());
    };
    SurveyQuestionRadioItem.prototype.renderComment = function () {
        if (!this.item.isCommentShowing)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getCommentAreaCss(true) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_reactquestion_comment__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionCommentValueItem, { question: this.question, item: this.item, isDisplayMode: this.isDisplayMode, cssClasses: this.question.cssClasses, otherCss: this.question.getCommentAreaCss(false) }));
    };
    SurveyQuestionRadioItem.prototype.renderRadioButton = function () {
        var itemClass = this.question.getItemClass(this.item);
        var labelClass = this.question.getLabelClass(this.item);
        var controlLabelClass = this.question.getControlLabelClass(this.item);
        var itemLabel = !this.hideCaption ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: controlLabelClass }, this.renderLocString(this.item.locText, this.textStyle)) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: itemClass, role: "presentation", ref: this.rootRef },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { onMouseDown: this.handleOnMouseDown, className: labelClass },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { "aria-errormessage": this.question.ariaErrormessage, className: this.cssClasses.itemControl, id: this.question.getItemId(this.item), type: "radio", name: this.question.questionName, checked: this.isChecked, value: this.item.value, disabled: !this.question.getItemEnabled(this.item), readOnly: this.question.isReadOnlyAttr, onChange: this.handleOnChange, "aria-label": this.ariaLabel }),
                this.cssClasses.materialDecorator ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.cssClasses.materialDecorator }, this.question.itemSvgIcon ?
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: this.cssClasses.itemDecorator },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { xlinkHref: this.question.itemSvgIcon })) :
                        null) :
                    null,
                itemLabel)));
    };
    SurveyQuestionRadioItem.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (!this.question.isDesignMode) {
            this.item.setRootElement(this.rootRef.current);
        }
    };
    SurveyQuestionRadioItem.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (!this.question.isDesignMode) {
            this.item.setRootElement(undefined);
        }
    };
    return SurveyQuestionRadioItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_5__.ReactElementFactory.Instance.registerElement("survey-radiogroup-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionRadioItem, props);
});
_reactquestion_factory__WEBPACK_IMPORTED_MODULE_3__.ReactQuestionFactory.Instance.registerQuestion("radiogroup", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionRadiogroup, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_ranking.tsx":
/*!********************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_ranking.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionRanking: () => (/* binding */ SurveyQuestionRanking),
/* harmony export */   SurveyQuestionRankingItem: () => (/* binding */ SurveyQuestionRankingItem),
/* harmony export */   SurveyQuestionRankingItemContent: () => (/* binding */ SurveyQuestionRankingItemContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _reactsurveymodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactsurveymodel */ "../survey-react-ui/src/reactsurveymodel.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyQuestionRanking = /** @class */ (function (_super) {
    __extends(SurveyQuestionRanking, _super);
    function SurveyQuestionRanking() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionRanking.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRanking.prototype.renderElement = function () {
        var _this = this;
        if (!this.question.selectToRankEnabled) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.rootClass, ref: function (root) { return (_this.setControl(root)); } }, this.getItems()));
        }
        else {
            var unrankedItem = true;
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.rootClass, ref: function (root) { return (_this.setControl(root)); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getContainerClasses("from"), "data-ranking": "from-container" },
                    this.getItems(this.question.renderedUnRankingChoices, unrankedItem),
                    this.question.renderedUnRankingChoices.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.containerPlaceholder },
                        " ",
                        this.renderLocString(this.question.locSelectToRankEmptyRankedAreaText),
                        " ") : null),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.containersDivider }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getContainerClasses("to"), "data-ranking": "to-container" },
                    this.getItems(),
                    this.question.renderedRankingChoices.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.containerPlaceholder },
                        " ",
                        this.renderLocString(this.question.locSelectToRankEmptyUnrankedAreaText),
                        " ") : null)));
        }
    };
    SurveyQuestionRanking.prototype.getItems = function (choices, unrankedItem) {
        var _this = this;
        if (choices === void 0) { choices = this.question.renderedRankingChoices; }
        var items = [];
        var _loop_1 = function (i) {
            var item = choices[i];
            items.push(this_1.renderItem(item, i, function (event) {
                _this.question.handleKeydown.call(_this.question, event, item);
            }, function (event) {
                event.persist();
                //event.preventDefault();
                _this.question.handlePointerDown.call(_this.question, event, item, event.currentTarget);
            }, function (event) {
                event.persist();
                //event.preventDefault();
                _this.question.handlePointerUp.call(_this.question, event, item, event.currentTarget);
            }, this_1.question.cssClasses, this_1.question.getItemClass(item), this_1.question, unrankedItem));
        };
        var this_1 = this;
        for (var i = 0; i < choices.length; i++) {
            _loop_1(i);
        }
        return items;
    };
    SurveyQuestionRanking.prototype.renderItem = function (item, i, handleKeydown, handlePointerDown, handlePointerUp, cssClasses, itemClass, question, unrankedItem) {
        var key = "id-" + item.renderedId;
        var text = this.renderLocString(item.locText);
        var index = i;
        var indexText = this.question.getNumberByIndex(index);
        var tabIndex = this.question.getItemTabIndex(item);
        var renderedItem = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionRankingItem, { key: item.value, text: text, index: index, indexText: indexText, itemTabIndex: tabIndex, handleKeydown: handleKeydown, handlePointerDown: handlePointerDown, handlePointerUp: handlePointerUp, cssClasses: cssClasses, itemClass: itemClass, question: question, unrankedItem: unrankedItem, item: item }));
        var survey = this.question.survey;
        var wrappedItem = null;
        if (!!survey) {
            wrappedItem = _reactsurveymodel__WEBPACK_IMPORTED_MODULE_3__.ReactSurveyElementsWrapper.wrapItemValue(survey, renderedItem, this.question, item);
        }
        return wrappedItem !== null && wrappedItem !== void 0 ? wrappedItem : renderedItem;
    };
    return SurveyQuestionRanking;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

var SurveyQuestionRankingItem = /** @class */ (function (_super) {
    __extends(SurveyQuestionRankingItem, _super);
    function SurveyQuestionRankingItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "text", {
        get: function () {
            return this.props.text;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "index", {
        get: function () {
            return this.props.index;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "indexText", {
        get: function () {
            return this.props.indexText;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "handleKeydown", {
        get: function () {
            return this.props.handleKeydown;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "handlePointerDown", {
        get: function () {
            return this.props.handlePointerDown;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "handlePointerUp", {
        get: function () {
            return this.props.handlePointerUp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "itemClass", {
        get: function () {
            return this.props.itemClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "itemTabIndex", {
        get: function () {
            return this.props.itemTabIndex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "unrankedItem", {
        get: function () {
            return this.props.unrankedItem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRankingItem.prototype.renderEmptyIcon = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { xlinkHref: this.question.dashSvgIcon })));
    };
    SurveyQuestionRankingItem.prototype.renderElement = function () {
        var itemContent = _element_factory__WEBPACK_IMPORTED_MODULE_4__.ReactElementFactory.Instance.createElement(this.question.itemComponent, { item: this.item, cssClasses: this.cssClasses });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: this.question.getItemId(this.item), tabIndex: this.itemTabIndex, className: this.itemClass, onKeyDown: this.handleKeydown, onPointerDown: this.handlePointerDown, onPointerUp: this.handlePointerUp, "data-sv-drop-target-ranking-item": this.index },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { tabIndex: -1, style: { outline: "none" } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.cssClasses.itemGhostNode }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.cssClasses.itemContent },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.cssClasses.itemIconContainer },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: this.question.getIconHoverCss() },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { xlinkHref: this.question.dragDropSvgIcon })),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { className: this.question.getIconFocusCss() },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { xlinkHref: this.question.arrowsSvgIcon }))),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getItemIndexClasses(this.item) }, (!this.unrankedItem && this.indexText) ? this.indexText : this.renderEmptyIcon()),
                    itemContent))));
    };
    return SurveyQuestionRankingItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));

var SurveyQuestionRankingItemContent = /** @class */ (function (_super) {
    __extends(SurveyQuestionRankingItemContent, _super);
    function SurveyQuestionRankingItemContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionRankingItemContent.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionRankingItemContent.prototype, "cssClasses", {
        get: function () {
            return this.props.cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRankingItemContent.prototype.renderElement = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.cssClasses.controlLabel }, _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase.renderLocString(this.item.locText));
    };
    return SurveyQuestionRankingItemContent;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_4__.ReactElementFactory.Instance.registerElement("sv-ranking-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionRankingItemContent, props);
});
_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("ranking", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionRanking, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_rating.tsx":
/*!*******************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_rating.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionRating: () => (/* binding */ SurveyQuestionRating)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyQuestionRating = /** @class */ (function (_super) {
    __extends(SurveyQuestionRating, _super);
    function SurveyQuestionRating(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnClick = _this.handleOnClick.bind(_this);
        return _this;
    }
    Object.defineProperty(SurveyQuestionRating.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionRating.prototype.handleOnClick = function (event) {
        this.question.setValueFromClick(event.target.value);
        this.setState({ value: this.question.value });
    };
    SurveyQuestionRating.prototype.renderItem = function (item, index) {
        var renderedItem = _element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement(this.question.itemComponent, {
            question: this.question,
            item: item,
            index: index,
            key: "value" + index,
            handleOnClick: this.handleOnClick,
            isDisplayMode: this.isDisplayMode
        });
        return renderedItem;
    };
    SurveyQuestionRating.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        var minText = this.question.minRateDescription
            ? this.renderLocString(this.question.locMinRateDescription)
            : null;
        var maxText = this.question.maxRateDescription
            ? this.renderLocString(this.question.locMaxRateDescription)
            : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.ratingRootCss, ref: function (div) { return (_this.setControl(div)); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", { role: this.question.a11y_input_ariaRole, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", { role: "presentation", className: "sv-hidden" }),
                !!this.question.hasMinLabel ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: cssClasses.minText }, minText) : null,
                this.question.renderedRateItems.map(function (item, index) { return _this.renderItem(item, index); }),
                !!this.question.hasMaxLabel ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: cssClasses.maxText }, maxText) : null)));
    };
    return SurveyQuestionRating;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("rating", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionRating, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_singleinputsummary.tsx":
/*!*******************************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_singleinputsummary.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionSigleInputSummary: () => (/* binding */ SurveyQuestionSigleInputSummary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyQuestionSigleInputSummary = /** @class */ (function (_super) {
    __extends(SurveyQuestionSigleInputSummary, _super);
    function SurveyQuestionSigleInputSummary(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionSigleInputSummary.prototype, "css", {
        get: function () {
            return this.props.css;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionSigleInputSummary.prototype, "summary", {
        get: function () {
            return this.props.summary;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionSigleInputSummary.prototype.renderElement = function () {
        if (!this.summary)
            return null;
        return this.summary.isEmpty() ? this.renderNoItems() : this.renderItems();
    };
    SurveyQuestionSigleInputSummary.prototype.renderItems = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.summary }, this.summary.items.map(function (item, index) { return _this.renderItem(item, index); })));
    };
    SurveyQuestionSigleInputSummary.prototype.renderNoItems = function () {
        var q = this.summary.question;
        var placeholder = _element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.createElement("sv-placeholder-" + q.getTemplate(), { cssClasses: this.css, question: q });
        return placeholder || react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.renderLocString(this.summary.noEntry));
    };
    SurveyQuestionSigleInputSummary.prototype.renderItem = function (item, index) {
        var btnEdit = item.btnEdit ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: this.css.summaryRowActionEdit, onClick: function () { return item.btnEdit.action(); }, title: item.btnEdit.title },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { iconName: "icon-editsmall-16x16", iconSize: "auto" })) : null;
        var btnDelete = item.showRemove && item.btnRemove ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: this.css.summaryRowActionDelete, onClick: function () { return item.btnRemove.action(); }, title: item.btnRemove.title },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { iconName: "icon-delete-16x16", iconSize: "auto" })) : null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.summaryRow, key: index },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.summaryRowContent }, this.renderLocString(item.locText)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.css.summaryRowActions },
                btnEdit,
                btnDelete));
    };
    return SurveyQuestionSigleInputSummary;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("sv-singleinput-summary", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionSigleInputSummary, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_slider.tsx":
/*!*******************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_slider.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionSlider: () => (/* binding */ SurveyQuestionSlider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyQuestionSlider = /** @class */ (function (_super) {
    __extends(SurveyQuestionSlider, _super);
    function SurveyQuestionSlider(props) {
        var _this = _super.call(this, props) || this;
        _this.rangeInputRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SurveyQuestionSlider.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.question.refreshInputRange(this.rangeInputRef.current);
    };
    Object.defineProperty(SurveyQuestionSlider.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionSlider.prototype.getStateElement = function () {
        return this.question;
    };
    SurveyQuestionSlider.prototype.renderElement = function () {
        var _this = this;
        var _a = this.question, cssClasses = _a.cssClasses, showLabels = _a.showLabels, sliderType = _a.sliderType, getTrackPercentLeft = _a.getTrackPercentLeft, getTrackPercentRight = _a.getTrackPercentRight, allowDragRange = _a.allowDragRange, setValueByClickOnPath = _a.setValueByClickOnPath;
        var rangeInput = (sliderType === "single" && allowDragRange) ? null : this.getRangeInput();
        var thumbsAndInputs = this.getInputsAndThumbs();
        var labels = showLabels ? this.getLabels() : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.rootCss, ref: function (div) { return (_this.setControl(div)); } },
            rangeInput,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.visualContainer, onPointerUp: function (e) { setValueByClickOnPath(e.nativeEvent, _this.control); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.visualContainerSlider },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.inverseTrackLeft, style: { width: getTrackPercentLeft() + "%" } }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.inverseTrackRight, style: { width: getTrackPercentRight() + "%" } }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.rangeTrack, style: { left: getTrackPercentLeft() + "%", right: getTrackPercentRight() + "%" } }),
                    thumbsAndInputs)),
            labels));
    };
    SurveyQuestionSlider.prototype.getInputsAndThumbs = function () {
        var inputsAndThumbs = [];
        var value = this.question.renderedValue;
        for (var i = 0; i < value.length; i++) {
            var thumbAndInput = react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: i },
                this.getInput(i),
                this.getThumb(i));
            inputsAndThumbs.push(thumbAndInput);
        }
        return inputsAndThumbs;
    };
    SurveyQuestionSlider.prototype.getThumb = function (i) {
        var _a = this.question, cssClasses = _a.cssClasses, getThumbContainerCss = _a.getThumbContainerCss, tooltipVisibility = _a.tooltipVisibility, tooltipCss = _a.tooltipCss, getPercent = _a.getPercent, renderedValue = _a.renderedValue, getTooltipValue = _a.getTooltipValue;
        var value = renderedValue[i];
        var tooltip = null;
        if (tooltipVisibility !== "never") {
            tooltip = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: tooltipCss },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.tooltipPanel },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.tooltipValue }, getTooltipValue(i))));
        }
        var thumb = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: getThumbContainerCss(i), style: { left: getPercent(value) + "%" } },
            tooltip,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.thumb },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.thumbDot })));
        return thumb;
    };
    SurveyQuestionSlider.prototype.getInput = function (i) {
        var _a = this.question, max = _a.renderedMax, min = _a.renderedMin, step = _a.step, cssClasses = _a.cssClasses, isDisabledAttr = _a.isDisabledAttr, renderedValue = _a.renderedValue, handleOnChange = _a.handleOnChange, handlePointerDown = _a.handlePointerDown, handlePointerUp = _a.handlePointerUp, handleKeyDown = _a.handleKeyDown, handleKeyUp = _a.handleKeyUp, handleOnFocus = _a.handleOnFocus, handleOnBlur = _a.handleOnBlur;
        var value = renderedValue[i];
        var input = react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { className: cssClasses.input, id: "sjs-slider-input-" + i, type: "range", min: min, max: max, step: step, value: value, onChange: function (e) { handleOnChange(e.nativeEvent, i); }, onPointerDown: function (e) { handlePointerDown(e.nativeEvent); }, onPointerUp: function (e) { e.stopPropagation(); handlePointerUp(e.nativeEvent); }, onKeyDown: function (e) { handleKeyDown(e.nativeEvent); }, onKeyUp: function (e) { handleKeyUp(e.nativeEvent); }, onFocus: function () { handleOnFocus(i); }, onBlur: function () { handleOnBlur(); }, disabled: isDisabledAttr, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage });
        return input;
    };
    SurveyQuestionSlider.prototype.getRangeInput = function () {
        var _this = this;
        var _a = this.question, max = _a.renderedMax, min = _a.renderedMin, step = _a.step, cssClasses = _a.cssClasses, handleRangeOnChange = _a.handleRangeOnChange, handleRangePointerDown = _a.handleRangePointerDown, handleRangePointerUp = _a.handleRangePointerUp;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { name: "range-input", id: "sjs-slider-input-range-input", ref: this.rangeInputRef, className: cssClasses.input, type: "range", "aria-hidden": "true", min: min, max: max, step: step, tabIndex: -1, onChange: function (e) { handleRangeOnChange(e.nativeEvent); }, onPointerDown: function (e) { e.persist(); handleRangePointerDown(e.nativeEvent, _this.control); }, onPointerUp: function (e) { handleRangePointerUp(e.nativeEvent, _this.control); } });
    };
    SurveyQuestionSlider.prototype.getLabels = function () {
        var labels = [];
        var _a = this.question, renderedLabels = _a.renderedLabels, cssClasses = _a.cssClasses;
        for (var i = 0; i < renderedLabels.length; i++) {
            var label = _element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement("sv-slider-label-item", { item: renderedLabels[i], question: this.question, key: renderedLabels[i].id });
            labels.push(label);
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.labelsContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, labels));
    };
    return SurveyQuestionSlider;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("slider", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionSlider, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_tagbox.tsx":
/*!*******************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_tagbox.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionTagbox: () => (/* binding */ SurveyQuestionTagbox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _dropdown_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-base */ "../survey-react-ui/src/dropdown-base.tsx");
/* harmony import */ var _tagbox_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tagbox-item */ "../survey-react-ui/src/tagbox-item.tsx");
/* harmony import */ var _tagbox_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tagbox-filter */ "../survey-react-ui/src/tagbox-filter.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyQuestionTagbox = /** @class */ (function (_super) {
    __extends(SurveyQuestionTagbox, _super);
    function SurveyQuestionTagbox(props) {
        return _super.call(this, props) || this;
    }
    SurveyQuestionTagbox.prototype.renderItem = function (key, item) {
        var renderedItem = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tagbox_item__WEBPACK_IMPORTED_MODULE_3__.SurveyQuestionTagboxItem, { key: key, question: this.question, item: item }));
        return renderedItem;
    };
    SurveyQuestionTagbox.prototype.renderInput = function () {
        var _this = this;
        var dropdownListModel = this.dropdownListModel;
        var items = this.question.selectedChoices.map(function (choice, index) { return _this.renderItem("item" + index, choice); });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: this.question.inputId, className: this.question.getControlClass(), tabIndex: dropdownListModel.noTabIndex ? undefined : 0, 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            disabled: this.question.isInputReadOnly, required: this.question.isRequired, onKeyDown: this.keyhandler, onBlur: this.blur, role: dropdownListModel.ariaQuestionRole, "aria-required": dropdownListModel.ariaQuestionRequired, "aria-invalid": dropdownListModel.ariaQuestionInvalid, "aria-errormessage": dropdownListModel.ariaQuestionErrorMessage, "aria-label": dropdownListModel.ariaQuestionLabel, "aria-labelledby": dropdownListModel.ariaQuestionLabelledby, "aria-describedby": dropdownListModel.ariaQuestionDescribedby, "aria-expanded": dropdownListModel.ariaQuestionExpanded, "aria-controls": dropdownListModel.ariaQuestionControls, "aria-activedescendant": dropdownListModel.ariaQuestionActivedescendant, ref: function (div) { return (_this.setControl(div)); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.controlValue },
                items,
                dropdownListModel.needRenderInput ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tagbox_filter__WEBPACK_IMPORTED_MODULE_4__.TagboxFilterString, { model: dropdownListModel, question: this.question }) : null),
            this.renderEditorButtons()));
    };
    SurveyQuestionTagbox.prototype.renderElement = function () {
        var cssClasses = this.question.cssClasses;
        var comment = this.renderOther(this.question.otherItem, cssClasses);
        var select = this.renderSelect(cssClasses);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.renderCssRoot },
            select,
            comment));
    };
    return SurveyQuestionTagbox;
}(_dropdown_base__WEBPACK_IMPORTED_MODULE_2__.SurveyQuestionDropdownBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_1__.ReactQuestionFactory.Instance.registerQuestion("tagbox", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionTagbox, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactquestion_text.tsx":
/*!*****************************************************!*\
  !*** ../survey-react-ui/src/reactquestion_text.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionText: () => (/* binding */ SurveyQuestionText)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _components_character_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/character-counter */ "../survey-react-ui/src/components/character-counter.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyQuestionText = /** @class */ (function (_super) {
    __extends(SurveyQuestionText, _super);
    //controlRef: React.RefObject<HTMLInputElement>;
    function SurveyQuestionText(props) {
        return _super.call(this, props) || this;
        //this.controlRef = React.createRef();
    }
    SurveyQuestionText.prototype.renderInput = function () {
        var _this = this;
        var inputClass = this.question.getControlClass();
        var placeholder = this.question.renderedPlaceholder;
        if (this.question.isReadOnlyRenderDiv()) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.question.inputValue);
        }
        var counter = !!this.question.getMaxLength() ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_character_counter__WEBPACK_IMPORTED_MODULE_3__.CharacterCounterComponent, { counter: this.question.characterCounter, remainingCharacterCounter: this.question.cssClasses.remainingCharacterCounter })) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: this.question.inputId, 
                // disabled={this.isDisplayMode}
                disabled: this.question.isDisabledAttr, readOnly: this.question.isReadOnlyAttr, className: inputClass, type: this.question.inputType, 
                //ref={this.controlRef}
                ref: function (input) { return (_this.setControl(input)); }, style: this.question.inputStyle, maxLength: this.question.getMaxLength(), min: this.question.renderedMin, max: this.question.renderedMax, step: this.question.renderedStep, size: this.question.inputSize, placeholder: placeholder, list: this.question.dataListId, autoComplete: this.question.autocomplete, onBlur: function (event) { _this.question.onBlur(event); }, onFocus: function (event) { _this.question.onFocus(event); }, onChange: this.question.onChange, onClick: this.question.readOnlyBlocker, onPointerDown: this.question.readOnlyBlocker, onKeyUp: this.question.onKeyUp, onKeyDown: this.question.onKeyDown, onCompositionUpdate: function (event) { return _this.question.onCompositionUpdate(event.nativeEvent); }, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage }),
            counter));
    };
    SurveyQuestionText.prototype.renderElement = function () {
        return (this.question.dataListId ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                this.renderInput(),
                this.renderDataList()) :
            this.renderInput());
    };
    SurveyQuestionText.prototype.setValueCore = function (newValue) {
        this.question.inputValue = newValue;
    };
    SurveyQuestionText.prototype.getValueCore = function () {
        return this.question.inputValue;
    };
    SurveyQuestionText.prototype.renderDataList = function () {
        if (!this.question.dataListId)
            return null;
        var items = this.question.dataList;
        if (items.length == 0)
            return null;
        var options = [];
        for (var i = 0; i < items.length; i++) {
            options.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", { key: "item" + i, value: items[i] }));
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("datalist", { id: this.question.dataListId }, options);
    };
    return SurveyQuestionText;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionUncontrolledElement));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("text", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionText, props);
});


/***/ }),

/***/ "../survey-react-ui/src/reactsurveymodel.tsx":
/*!***************************************************!*\
  !*** ../survey-react-ui/src/reactsurveymodel.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactSurveyElementsWrapper: () => (/* binding */ ReactSurveyElementsWrapper)
/* harmony export */ });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");


var ReactSurveyElementsWrapper = /** @class */ (function () {
    function ReactSurveyElementsWrapper() {
    }
    ReactSurveyElementsWrapper.wrapRow = function (survey, element, row) {
        var componentName = survey.getRowWrapperComponentName(row);
        var componentData = survey.getRowWrapperComponentData(row);
        return _element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement(componentName, {
            element: element,
            row: row,
            componentData: componentData,
        });
    };
    ReactSurveyElementsWrapper.wrapElement = function (survey, element, question) {
        var componentName = survey.getElementWrapperComponentName(question);
        var componentData = survey.getElementWrapperComponentData(question);
        return _element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement(componentName, {
            element: element,
            question: question,
            componentData: componentData,
        });
    };
    ReactSurveyElementsWrapper.wrapQuestionContent = function (survey, element, question) {
        var componentName = survey.getQuestionContentWrapperComponentName(question);
        var componentData = survey.getElementWrapperComponentData(question);
        return _element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement(componentName, {
            element: element,
            question: question,
            componentData: componentData,
        });
    };
    ReactSurveyElementsWrapper.wrapItemValue = function (survey, element, question, item) {
        var componentName = survey.getItemValueWrapperComponentName(item, question);
        var componentData = survey.getItemValueWrapperComponentData(item, question);
        return _element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement(componentName, {
            key: element === null || element === void 0 ? void 0 : element.key,
            element: element,
            question: question,
            item: item,
            componentData: componentData,
        });
    };
    ReactSurveyElementsWrapper.wrapMatrixCell = function (survey, element, cell, reason) {
        if (reason === void 0) { reason = "cell"; }
        var componentName = survey.getElementWrapperComponentName(cell, reason);
        var componentData = survey.getElementWrapperComponentData(cell, reason);
        return _element_factory__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement(componentName, {
            element: element,
            cell: cell,
            componentData: componentData,
        });
    };
    return ReactSurveyElementsWrapper;
}());

survey_core__WEBPACK_IMPORTED_MODULE_0__.SurveyModel.platform = "react";


/***/ }),

/***/ "../survey-react-ui/src/reacttimerpanel.tsx":
/*!**************************************************!*\
  !*** ../survey-react-ui/src/reacttimerpanel.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyTimerPanel: () => (/* binding */ SurveyTimerPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SurveyTimerPanel = /** @class */ (function (_super) {
    __extends(SurveyTimerPanel, _super);
    function SurveyTimerPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.circleLength = 440;
        return _this;
    }
    SurveyTimerPanel.prototype.getStateElement = function () {
        return this.timerModel;
    };
    Object.defineProperty(SurveyTimerPanel.prototype, "timerModel", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyTimerPanel.prototype, "progress", {
        get: function () {
            return -this.timerModel.progress * this.circleLength;
        },
        enumerable: false,
        configurable: true
    });
    SurveyTimerPanel.prototype.render = function () {
        if (!this.timerModel.isRunning) {
            return null;
        }
        var result = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.timerModel.survey.getCss().timerRoot }, this.timerModel.text);
        if (this.timerModel.showTimerAsClock) {
            var style = { strokeDasharray: this.circleLength, strokeDashoffset: this.progress };
            var progress = (this.timerModel.showProgress ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { className: this.timerModel.getProgressCss(), style: style, iconName: "icon-timercircle", size: "auto" }) : null);
            result =
                (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.timerModel.rootCss },
                    progress,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.timerModel.textContainerCss },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.timerModel.majorTextCss }, this.timerModel.clockMajorText),
                        (this.timerModel.clockMinorText ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.timerModel.minorTextCss }, this.timerModel.clockMinorText) : null))));
        }
        return result;
    };
    return SurveyTimerPanel;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_3__.ReactSurveyElement));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement("sv-timerpanel", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyTimerPanel, props);
});


/***/ }),

/***/ "../survey-react-ui/src/row.tsx":
/*!**************************************!*\
  !*** ../survey-react-ui/src/row.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyRow: () => (/* binding */ SurveyRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element */ "../survey-react-ui/src/element.tsx");
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
/* harmony import */ var _reactsurveymodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactsurveymodel */ "../survey-react-ui/src/reactsurveymodel.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyRow = /** @class */ (function (_super) {
    __extends(SurveyRow, _super);
    function SurveyRow(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        _this.recalculateCss();
        return _this;
    }
    SurveyRow.prototype.recalculateCss = function () {
        this.row.visibleElements.map(function (element) { return element.cssClasses; });
    };
    SurveyRow.prototype.getStateElement = function () {
        return this.row;
    };
    Object.defineProperty(SurveyRow.prototype, "row", {
        get: function () {
            return this.props.row;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRow.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRow.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyRow.prototype, "css", {
        get: function () {
            return this.props.css;
        },
        enumerable: false,
        configurable: true
    });
    SurveyRow.prototype.canRender = function () {
        return !!this.row && !!this.survey && !!this.creator;
    };
    SurveyRow.prototype.renderElementContent = function () {
        var _this = this;
        var elements = this.row.visibleElements.map(function (element, elementIndex) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_element__WEBPACK_IMPORTED_MODULE_2__.SurveyRowElement, { element: element, index: elementIndex, row: _this.row, survey: _this.survey, creator: _this.creator, css: _this.css, key: element.id }));
        });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.rootRef, className: this.row.getRowCss() }, elements));
    };
    SurveyRow.prototype.renderElement = function () {
        var survey = this.survey;
        var content = this.renderElementContent();
        var wrapper = _reactsurveymodel__WEBPACK_IMPORTED_MODULE_4__.ReactSurveyElementsWrapper.wrapRow(survey, content, this.row);
        return wrapper || content;
    };
    SurveyRow.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        var el = this.rootRef.current;
        if (this.rootRef.current) {
            this.row.setRootElement(this.rootRef.current);
        }
        if (!!el && !this.row.isNeedRender) {
            var rowContainerDiv = el;
            this.lazyRenderingTimeout = setTimeout(function () {
                _this.row.startLazyRendering(rowContainerDiv);
            }, 10);
        }
    };
    SurveyRow.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!_super.prototype.shouldComponentUpdate.call(this, nextProps, nextState))
            return false;
        if (nextProps.row !== this.row) {
            nextProps.row.isNeedRender = this.row.isNeedRender;
            nextProps.row.setRootElement(this.rootRef.current);
            this.row.setRootElement(undefined);
            this.stopLazyRendering();
        }
        this.recalculateCss();
        return true;
    };
    SurveyRow.prototype.stopLazyRendering = function () {
        clearTimeout(this.lazyRenderingTimeout);
        this.row.stopLazyRendering();
        this.row.isNeedRender = !this.row.isLazyRendering();
    };
    SurveyRow.prototype.componentWillUnmount = function () {
        var isCurrentStateElement = this.isCurrentStateElement(this.getStateElement());
        _super.prototype.componentWillUnmount.call(this);
        if (isCurrentStateElement) {
            this.row.setRootElement(undefined);
            this.stopLazyRendering();
        }
    };
    SurveyRow.prototype.createElement = function (element, elementIndex) {
        var index = elementIndex ? "-" + elementIndex : 0;
        var elementType = element.getType();
        if (!_element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.isElementRegistered(elementType)) {
            elementType = "question";
        }
        return _element_factory__WEBPACK_IMPORTED_MODULE_3__.ReactElementFactory.Instance.createElement(elementType, {
            key: element.name + index,
            element: element,
            creator: this.creator,
            survey: this.survey,
            css: this.css,
        });
    };
    return SurveyRow;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase));



/***/ }),

/***/ "../survey-react-ui/src/signaturepad.tsx":
/*!***********************************************!*\
  !*** ../survey-react-ui/src/signaturepad.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionSignaturePad: () => (/* binding */ SurveyQuestionSignaturePad)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
/* harmony import */ var _components_loading_indicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loading-indicator */ "../survey-react-ui/src/components/loading-indicator.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var SurveyQuestionSignaturePad = /** @class */ (function (_super) {
    __extends(SurveyQuestionSignaturePad, _super);
    function SurveyQuestionSignaturePad(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: _this.question.value };
        return _this;
    }
    Object.defineProperty(SurveyQuestionSignaturePad.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionSignaturePad.prototype.renderElement = function () {
        var _this = this;
        var cssClasses = this.question.cssClasses;
        var loadingIndicator = this.question.showLoadingIndicator ? this.renderLoadingIndicator() : null;
        var clearButton = this.renderCleanButton();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.root, ref: function (root) { return (_this.setControl(root)); }, style: { width: this.question.renderedCanvasWidth } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.placeholder, style: { display: this.question.needShowPlaceholder() ? "" : "none" } }, this.renderLocString(this.question.locRenderedPlaceholder)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                this.renderBackgroundImage(),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", { tabIndex: -1, className: this.question.cssClasses.canvas, onBlur: function (event) { _this.question.onBlur(event); } })),
            clearButton,
            loadingIndicator));
    };
    SurveyQuestionSignaturePad.prototype.renderBackgroundImage = function () {
        if (!this.question.backgroundImage)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { className: this.question.cssClasses.backgroundImage, src: this.question.backgroundImage, style: { width: this.question.renderedCanvasWidth }, role: "presentation" });
    };
    SurveyQuestionSignaturePad.prototype.renderLoadingIndicator = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.loadingIndicator },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_loading_indicator__WEBPACK_IMPORTED_MODULE_4__.LoadingIndicatorComponent, null));
    };
    SurveyQuestionSignaturePad.prototype.renderCleanButton = function () {
        var _this = this;
        if (!this.question.canShowClearButton)
            return null;
        var cssClasses = this.question.cssClasses;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClasses.controls },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", className: cssClasses.clearButton, title: this.question.clearButtonCaption, onClick: function () { return _this.question.clearValue(true); } }, this.question.cssClasses.clearButtonIconId ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_3__.SvgIcon, { iconName: this.question.cssClasses.clearButtonIconId, size: "auto" }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u2716")));
    };
    return SurveyQuestionSignaturePad;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("signaturepad", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionSignaturePad, props);
});


/***/ }),

/***/ "../survey-react-ui/src/string-editor.tsx":
/*!************************************************!*\
  !*** ../survey-react-ui/src/string-editor.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyLocStringEditor: () => (/* binding */ SurveyLocStringEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyLocStringEditor = /** @class */ (function (_super) {
    __extends(SurveyLocStringEditor, _super);
    function SurveyLocStringEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.onInput = function (event) {
            _this.locStr.text = event.target.innerText;
        };
        _this.onClick = function (event) {
            event.preventDefault();
            event.stopPropagation();
        };
        _this.state = { changed: 0 };
        return _this;
    }
    Object.defineProperty(SurveyLocStringEditor.prototype, "locStr", {
        get: function () {
            return this.props.locStr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyLocStringEditor.prototype, "style", {
        get: function () {
            return this.props.style;
        },
        enumerable: false,
        configurable: true
    });
    SurveyLocStringEditor.prototype.componentDidMount = function () {
        if (!this.locStr)
            return;
        var self = this;
        this.locStr.onChanged = function () {
            self.setState({ changed: self.state.changed + 1 });
        };
    };
    SurveyLocStringEditor.prototype.componentWillUnmount = function () {
        if (!this.locStr)
            return;
        this.locStr.onChanged = function () { };
    };
    SurveyLocStringEditor.prototype.render = function () {
        if (!this.locStr) {
            return null;
        }
        if (this.locStr.hasHtml) {
            var htmlValue = { __html: this.locStr.renderedHtml };
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sv-string-editor", contentEditable: "true", suppressContentEditableWarning: true, style: this.style, dangerouslySetInnerHTML: htmlValue, onBlur: this.onInput, onClick: this.onClick }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "sv-string-editor", contentEditable: "true", suppressContentEditableWarning: true, style: this.style, onBlur: this.onInput, onClick: this.onClick }, this.locStr.renderedHtml));
    };
    return SurveyLocStringEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement(survey_core__WEBPACK_IMPORTED_MODULE_1__.LocalizableString.editableRenderer, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyLocStringEditor, props);
});


/***/ }),

/***/ "../survey-react-ui/src/string-viewer.tsx":
/*!************************************************!*\
  !*** ../survey-react-ui/src/string-viewer.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyLocStringViewer: () => (/* binding */ SurveyLocStringViewer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _element_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-factory */ "../survey-react-ui/src/element-factory.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyLocStringViewer = /** @class */ (function (_super) {
    __extends(SurveyLocStringViewer, _super);
    function SurveyLocStringViewer(props) {
        var _this = _super.call(this, props) || this;
        _this.onChangedHandler = function (sender, options) {
            if (_this.isRendering)
                return;
            _this.setState({ changed: !!_this.state && _this.state.changed ? _this.state.changed + 1 : 1 });
        };
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Object.defineProperty(SurveyLocStringViewer.prototype, "locStr", {
        get: function () {
            return this.props.locStr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyLocStringViewer.prototype, "style", {
        get: function () {
            return this.props.style;
        },
        enumerable: false,
        configurable: true
    });
    SurveyLocStringViewer.prototype.componentDidMount = function () {
        this.reactOnStrChanged();
    };
    SurveyLocStringViewer.prototype.componentWillUnmount = function () {
        if (!this.locStr)
            return;
        this.locStr.onStringChanged.remove(this.onChangedHandler);
    };
    SurveyLocStringViewer.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (!!prevProps.locStr) {
            prevProps.locStr.onStringChanged.remove(this.onChangedHandler);
        }
        this.reactOnStrChanged();
    };
    SurveyLocStringViewer.prototype.reactOnStrChanged = function () {
        if (!this.locStr)
            return;
        this.locStr.onStringChanged.add(this.onChangedHandler);
    };
    SurveyLocStringViewer.prototype.render = function () {
        if (!this.locStr)
            return null;
        this.isRendering = true;
        var strEl = this.renderString();
        this.isRendering = false;
        return strEl;
    };
    SurveyLocStringViewer.prototype.renderString = function () {
        var className = this.locStr.allowLineBreaks ? "sv-string-viewer sv-string-viewer--multiline" : "sv-string-viewer";
        if (this.locStr.hasHtml) {
            var htmlValue = { __html: this.locStr.renderedHtml };
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { ref: this.rootRef, className: className, style: this.style, dangerouslySetInnerHTML: htmlValue });
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { ref: this.rootRef, className: className, style: this.style }, this.locStr.renderedHtml);
    };
    return SurveyLocStringViewer;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

_element_factory__WEBPACK_IMPORTED_MODULE_2__.ReactElementFactory.Instance.registerElement(survey_core__WEBPACK_IMPORTED_MODULE_1__.LocalizableString.defaultRenderer, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyLocStringViewer, props);
});


/***/ }),

/***/ "../survey-react-ui/src/svgbundle.tsx":
/*!********************************************!*\
  !*** ../survey-react-ui/src/svgbundle.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SvgBundleComponent: () => (/* binding */ SvgBundleComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SvgBundleComponent = /** @class */ (function (_super) {
    __extends(SvgBundleComponent, _super);
    function SvgBundleComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onIconsChanged = function () {
            if (!!_this.containerRef.current) {
                _this.containerRef.current.innerHTML = survey_core__WEBPACK_IMPORTED_MODULE_1__.SvgRegistry.iconsRenderedHtml();
            }
        };
        _this.containerRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SvgBundleComponent.prototype.componentDidMount = function () {
        this.onIconsChanged();
        survey_core__WEBPACK_IMPORTED_MODULE_1__.SvgRegistry.onIconsChanged.add(this.onIconsChanged);
    };
    SvgBundleComponent.prototype.componentWillUnmount = function () {
        survey_core__WEBPACK_IMPORTED_MODULE_1__.SvgRegistry.onIconsChanged.remove(this.onIconsChanged);
    };
    SvgBundleComponent.prototype.render = function () {
        var svgStyle = {
            display: "none"
        };
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { style: svgStyle, id: "sv-icon-holder-global-container", ref: this.containerRef });
    };
    return SvgBundleComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));



/***/ }),

/***/ "../survey-react-ui/src/tagbox-filter.tsx":
/*!************************************************!*\
  !*** ../survey-react-ui/src/tagbox-filter.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagboxFilterString: () => (/* binding */ TagboxFilterString)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactquestion_factory */ "../survey-react-ui/src/reactquestion_factory.tsx");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var TagboxFilterString = /** @class */ (function (_super) {
    __extends(TagboxFilterString, _super);
    function TagboxFilterString(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(TagboxFilterString.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TagboxFilterString.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    TagboxFilterString.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.updateDomElement();
    };
    TagboxFilterString.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.updateDomElement();
    };
    TagboxFilterString.prototype.updateDomElement = function () {
        if (!!this.inputElement) {
            var control = this.inputElement;
            var newValue = this.model.inputStringRendered;
            if (!survey_core__WEBPACK_IMPORTED_MODULE_1__.Helpers.isTwoValueEquals(newValue, control.value, false, true, false)) {
                control.value = this.model.inputStringRendered;
            }
        }
    };
    TagboxFilterString.prototype.onChange = function (e) {
        var root = survey_core__WEBPACK_IMPORTED_MODULE_1__.settings.environment.root;
        if (e.target === root.activeElement) {
            this.model.inputStringRendered = e.target.value;
        }
    };
    TagboxFilterString.prototype.keyhandler = function (e) {
        this.model.inputKeyHandler(e);
    };
    TagboxFilterString.prototype.onBlur = function (e) {
        this.question.onBlur(e);
    };
    TagboxFilterString.prototype.onFocus = function (e) {
        this.question.onFocus(e);
    };
    TagboxFilterString.prototype.getStateElement = function () {
        return this.model;
    };
    TagboxFilterString.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.hint },
            this.model.showHintPrefix ?
                (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.hintPrefix },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.model.hintStringPrefix))) : null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.hintSuffixWrapper },
                this.model.showHintString ?
                    (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.hintSuffix },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { visibility: "hidden" }, "data-bind": "text: model.filterString" }, this.model.inputStringRendered),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.model.hintStringSuffix))) : null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", autoComplete: "off", id: this.question.getInputId(), inputMode: this.model.inputMode, ref: function (element) { return (_this.inputElement = element); }, className: this.question.cssClasses.filterStringInput, disabled: this.question.isInputReadOnly, readOnly: this.model.filterReadOnly ? true : undefined, size: !this.model.inputStringRendered ? 1 : undefined, role: this.model.ariaInputRole, "aria-required": this.model.ariaInputRequired, "aria-invalid": this.model.ariaInputInvalid, "aria-errormessage": this.model.ariaInputErrorMessage, "aria-expanded": this.model.ariaInputExpanded, "aria-label": this.model.ariaInputLabel, "aria-labelledby": this.model.ariaInputLabelledby, "aria-describedby": this.model.ariaInputDescribedby, "aria-controls": this.model.ariaInputControls, "aria-activedescendant": this.model.ariaInputActivedescendant, placeholder: this.model.filterStringPlaceholder, onKeyDown: function (e) { _this.keyhandler(e); }, onChange: function (e) { _this.onChange(e); }, onBlur: function (e) { _this.onBlur(e); }, onFocus: function (e) { _this.onFocus(e); } }))));
    };
    return TagboxFilterString;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_3__.SurveyElementBase));

_reactquestion_factory__WEBPACK_IMPORTED_MODULE_2__.ReactQuestionFactory.Instance.registerQuestion("sv-tagbox-filter", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TagboxFilterString, props);
});


/***/ }),

/***/ "../survey-react-ui/src/tagbox-item.tsx":
/*!**********************************************!*\
  !*** ../survey-react-ui/src/tagbox-item.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionTagboxItem: () => (/* binding */ SurveyQuestionTagboxItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _reactquestion_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactquestion_element */ "../survey-react-ui/src/reactquestion_element.tsx");
/* harmony import */ var _components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/svg-icon/svg-icon */ "../survey-react-ui/src/components/svg-icon/svg-icon.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SurveyQuestionTagboxItem = /** @class */ (function (_super) {
    __extends(SurveyQuestionTagboxItem, _super);
    function SurveyQuestionTagboxItem(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionTagboxItem.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionTagboxItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionTagboxItem.prototype.canRender = function () {
        return !!this.item && !!this.question;
    };
    SurveyQuestionTagboxItem.prototype.renderElement = function () {
        var _this = this;
        var text = this.renderLocString(this.item.locText);
        var removeItem = function (event) {
            _this.question.dropdownListModel.deselectItem(_this.item.value);
            event.stopPropagation();
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-tagbox__item" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-tagbox__item-text" }, text),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.cleanItemButton, onClick: removeItem },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_svg_icon_svg_icon__WEBPACK_IMPORTED_MODULE_2__.SvgIcon, { className: this.question.cssClasses.cleanItemButtonSvg, iconName: this.question.cssClasses.cleanItemButtonIconId, size: "auto" }))));
    };
    return SurveyQuestionTagboxItem;
}(_reactquestion_element__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement));



/***/ }),

/***/ "./node_modules/preact/compat/dist/compat.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Children: () => (/* binding */ O),
/* harmony export */   Component: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   Fragment: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   PureComponent: () => (/* binding */ N),
/* harmony export */   StrictMode: () => (/* binding */ Cn),
/* harmony export */   Suspense: () => (/* binding */ P),
/* harmony export */   SuspenseList: () => (/* binding */ B),
/* harmony export */   __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => (/* binding */ hn),
/* harmony export */   cloneElement: () => (/* binding */ _n),
/* harmony export */   createContext: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   createElement: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createElement),
/* harmony export */   createFactory: () => (/* binding */ dn),
/* harmony export */   createPortal: () => (/* binding */ $),
/* harmony export */   createRef: () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   "default": () => (/* binding */ Rn),
/* harmony export */   findDOMNode: () => (/* binding */ Sn),
/* harmony export */   flushSync: () => (/* binding */ En),
/* harmony export */   forwardRef: () => (/* binding */ D),
/* harmony export */   hydrate: () => (/* binding */ tn),
/* harmony export */   isElement: () => (/* binding */ xn),
/* harmony export */   isFragment: () => (/* binding */ pn),
/* harmony export */   isMemo: () => (/* binding */ yn),
/* harmony export */   isValidElement: () => (/* binding */ mn),
/* harmony export */   lazy: () => (/* binding */ z),
/* harmony export */   memo: () => (/* binding */ M),
/* harmony export */   render: () => (/* binding */ nn),
/* harmony export */   startTransition: () => (/* binding */ R),
/* harmony export */   unmountComponentAtNode: () => (/* binding */ bn),
/* harmony export */   unstable_batchedUpdates: () => (/* binding */ gn),
/* harmony export */   useCallback: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback),
/* harmony export */   useContext: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext),
/* harmony export */   useDebugValue: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue),
/* harmony export */   useDeferredValue: () => (/* binding */ w),
/* harmony export */   useEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect),
/* harmony export */   useErrorBoundary: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useErrorBoundary),
/* harmony export */   useId: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId),
/* harmony export */   useImperativeHandle: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle),
/* harmony export */   useInsertionEffect: () => (/* binding */ I),
/* harmony export */   useLayoutEffect: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect),
/* harmony export */   useMemo: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo),
/* harmony export */   useReducer: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer),
/* harmony export */   useRef: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef),
/* harmony export */   useState: () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState),
/* harmony export */   useSyncExternalStore: () => (/* binding */ C),
/* harmony export */   useTransition: () => (/* binding */ k),
/* harmony export */   version: () => (/* binding */ vn)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.module.js");
function g(n,t){for(var e in t)n[e]=t[e];return n}function E(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function C(n,t){var e=t(),r=(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)({t:{__:e,u:t}}),u=r[0].t,o=r[1];return (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){u.__=e,u.u=t,x(u)&&o({t:u})},[n,e,t]),(0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){return x(u)&&o({t:u}),n(function(){x(u)&&o({t:u})})},[n]),e}function x(n){var t,e,r=n.u,u=n.__;try{var o=r();return!((t=u)===(e=o)&&(0!==t||1/t==1/e)||t!=t&&e!=e)}catch(n){return!0}}function R(n){n()}function w(n){return n}function k(){return[!1,R]}var I=preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect;function N(n,t){this.props=n,this.context=t}function M(n,e){function r(n){var t=this.props.ref,r=t==n.ref;return!r&&t&&(t.call?t(null):t.current=null),e?!e(this.props,n)||!r:E(this.props,n)}function u(e){return this.shouldComponentUpdate=r,(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(n,e)}return u.displayName="Memo("+(n.displayName||n.name)+")",u.prototype.isReactComponent=!0,u.__f=!0,u}(N.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).isPureReactComponent=!0,N.prototype.shouldComponentUpdate=function(n,t){return E(this.props,n)||E(this.state,t)};var T=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b;preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),T&&T(n)};var A="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function D(n){function t(t){var e=g({},t);return delete e.ref,n(e,t.ref||null)}return t.$$typeof=A,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var L=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).map(t))},O={map:L,forEach:L,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray},F=preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;preact__WEBPACK_IMPORTED_MODULE_0__.options.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);F(n,t,e,r)};var U=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function V(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c.__e=!0,n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return V(n,t,e)})),n}function W(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return W(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=e)),n}function P(){this.__u=0,this.o=null,this.__b=null}function j(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function z(n){var e,r,u;function o(o){if(e||(e=n()).then(function(n){r=n.default||n},function(n){u=n}),u)throw u;if(!r)throw e;return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(r,o)}return o.displayName="Lazy",o.__f=!0,o}function B(){this.i=null,this.l=null}preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),U&&U(n)},(P.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.o&&(r.o=[]),r.o.push(e);var u=j(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=W(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i)},P.prototype.componentWillUnmount=function(){this.o=[]},P.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=V(this.__b,r,o.__O=o.__P)}this.__b=null}var i=e.__a&&(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,n.fallback);return i&&(i.__u&=-33),[(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,e.__a?null:n.children),i]};var H=function(n,t,e){if(++e[1]===e[0]&&n.l.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.l.size))for(e=n.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.i=e=e[2]}};function Z(n){return this.getChildContext=function(){return n.context},n.children}function Y(n){var e=this,r=n.h;if(e.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,e.v),e.v=null,e.h=null},e.h&&e.h!==r&&e.componentWillUnmount(),!e.v){for(var u=e.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;e.h=r,e.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:u.__m},contains:function(){return!0},insertBefore:function(n,t){this.childNodes.push(n),e.h.insertBefore(n,t)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.h.removeChild(n)}}}(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(Z,{context:e.context},n.__v),e.v)}function $(n,e){var r=(0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(Y,{__v:n,h:e});return r.containerInfo=e,r}(B.prototype=new preact__WEBPACK_IMPORTED_MODULE_0__.Component).__a=function(n){var t=this,e=j(t.__v),r=t.l.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),H(t,n,r)):u()};e?e(o):o()}},B.prototype.render=function(n){this.i=null,this.l=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return n.children},B.prototype.componentDidUpdate=B.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(t,e){H(n,e,t)})};var q="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,G=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,J=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,K=/[A-Z0-9]/g,Q="undefined"!=typeof document,X=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};function nn(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function tn(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_0__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_0__.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n})}})});var en=preact__WEBPACK_IMPORTED_MODULE_0__.options.event;function rn(){}function un(){return this.cancelBubble}function on(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_0__.options.event=function(n){return en&&(n=en(n)),n.persist=rn,n.isPropagationStopped=un,n.isDefaultPrevented=on,n.nativeEvent=n};var ln,cn={enumerable:!1,configurable:!0,get:function(){return this.class}},fn=preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_0__.options.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={},o=-1===e.indexOf("-");for(var i in t){var l=t[i];if(!("value"===i&&"defaultValue"in t&&null==l||Q&&"children"===i&&"noscript"===e||"class"===i||"className"===i)){var c=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===l?l="":"translate"===c&&"no"===l?l=!1:"o"===c[0]&&"n"===c[1]?"ondoubleclick"===c?i="ondblclick":"onchange"!==c||"input"!==e&&"textarea"!==e||X(t.type)?"onfocus"===c?i="onfocusin":"onblur"===c?i="onfocusout":J.test(i)&&(i=c):c=i="oninput":o&&G.test(i)?i=i.replace(K,"-$&").toLowerCase():null===l&&(l=void 0),"oninput"===c&&u[i=c]&&(i="oninputCapture"),u[i]=l}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value)})),"select"==e&&null!=u.defaultValue&&(u.value=(0,preact__WEBPACK_IMPORTED_MODULE_0__.toChildArray)(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",cn)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u}(n),n.$$typeof=q,fn&&fn(n)};var an=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r;preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){an&&an(n),ln=n.__c};var sn=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed;preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(n){sn&&sn(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value),ln=null};var hn={ReactCurrentDispatcher:{current:{readContext:function(n){return ln.__n[n.__c].props.value},useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,useDeferredValue:w,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,useId:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,useInsertionEffect:I,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,useState:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,useSyncExternalStore:C,useTransition:k}}},vn="18.3.1";function dn(n){return preact__WEBPACK_IMPORTED_MODULE_0__.createElement.bind(null,n)}function mn(n){return!!n&&n.$$typeof===q}function pn(n){return mn(n)&&n.type===preact__WEBPACK_IMPORTED_MODULE_0__.Fragment}function yn(n){return!!n&&!!n.displayName&&("string"==typeof n.displayName||n.displayName instanceof String)&&n.displayName.startsWith("Memo(")}function _n(n){return mn(n)?preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement.apply(null,arguments):n}function bn(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null,n),!0)}function Sn(n){return n&&(n.base||1===n.nodeType&&n)||null}var gn=function(n,t){return n(t)},En=function(n,t){return n(t)},Cn=preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,xn=mn,Rn={useState:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState,useId:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useId,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect,useInsertionEffect:I,useTransition:k,useDeferredValue:w,useSyncExternalStore:C,startTransition:R,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useDebugValue,version:"18.3.1",Children:O,render:nn,hydrate:tn,unmountComponentAtNode:bn,createPortal:$,createElement:preact__WEBPACK_IMPORTED_MODULE_0__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_0__.createContext,createFactory:dn,cloneElement:_n,createRef:preact__WEBPACK_IMPORTED_MODULE_0__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,isValidElement:mn,isElement:xn,isFragment:pn,isMemo:yn,findDOMNode:Sn,Component:preact__WEBPACK_IMPORTED_MODULE_0__.Component,PureComponent:N,memo:M,forwardRef:D,flushSync:En,unstable_batchedUpdates:gn,StrictMode:Cn,Suspense:P,SuspenseList:B,lazy:z,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:hn};
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ x),
/* harmony export */   Fragment: () => (/* binding */ k),
/* harmony export */   cloneElement: () => (/* binding */ J),
/* harmony export */   createContext: () => (/* binding */ K),
/* harmony export */   createElement: () => (/* binding */ _),
/* harmony export */   createRef: () => (/* binding */ b),
/* harmony export */   h: () => (/* binding */ _),
/* harmony export */   hydrate: () => (/* binding */ G),
/* harmony export */   isValidElement: () => (/* binding */ t),
/* harmony export */   options: () => (/* binding */ l),
/* harmony export */   render: () => (/* binding */ E),
/* harmony export */   toChildArray: () => (/* binding */ H)
/* harmony export */ });
var n,l,u,t,i,r,o,e,f,c,s,a,h,p={},v=[],y=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function g(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function _(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps)void 0===e[o]&&(e[o]=l.defaultProps[o]);return m(l,e,i,r,null)}function m(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u:o,__i:-1,__u:0};return null==o&&null!=l.vnode&&l.vnode(e),e}function b(){return{current:null}}function k(n){return n.children}function x(n,l){this.props=n,this.context=l}function S(n,l){if(null==l)return n.__?S(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?S(n):null}function C(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i.push(n)&&!$.__r++||r!=l.debounceRendering)&&((r=l.debounceRendering)||o)($)}function $(){for(var n,u,t,r,o,f,c,s=1;i.length;)i.length>s&&i.sort(e),n=i.shift(),s=i.length,n.__d&&(t=void 0,o=(r=(u=n).__v).__e,f=[],c=[],u.__P&&((t=d({},r)).__v=r.__v+1,l.vnode&&l.vnode(t),O(u.__P,t,r,u.__n,u.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?S(r):o,!!(32&r.__u),c),t.__v=r.__v,t.__.__k[t.__i]=t,z(f,t,c),t.__e!=o&&C(t)));$.__r=0}function I(n,l,u,t,i,r,o,e,f,c,s){var a,h,y,w,d,g,_=t&&t.__k||v,m=l.length;for(f=P(u,l,_,f,m),a=0;a<m;a++)null!=(y=u.__k[a])&&(h=-1==y.__i?p:_[y.__i]||p,y.__i=a,g=O(n,y,h,i,r,o,e,f,c,s),w=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&q(h.ref,null,y),s.push(y.ref,y.__c||w,y)),null==d&&null!=w&&(d=w),4&y.__u||h.__k===y.__k?f=A(y,f,n):"function"==typeof y.type&&void 0!==g?f=g:w&&(f=w.nextSibling),y.__u&=-7);return u.__e=d,f}function P(n,l,u,t,i){var r,o,e,f,c,s=u.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?(f=r+h,(o=n.__k[r]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?m(null,o,null,null,null):w(o)?m(k,{children:o},null,null,null):null==o.constructor&&o.__b>0?m(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=n,o.__b=n.__b+1,e=null,-1!=(c=o.__i=L(o,u,f,a))&&(a--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>s?h--:i<s&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=S(e)),B(e,e));return t}function A(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=A(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=S(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling}while(null!=l&&8==l.nodeType);return l}function H(n,l){return l=l||[],null==n||"boolean"==typeof n||(w(n)?n.some(function(n){H(n,l)}):l.push(n)),l}function L(n,l,u,t){var i,r,o=n.key,e=n.type,f=l[u];if(null===f&&null==n.key||f&&o==f.key&&e==f.type&&0==(2&f.__u))return u;if(t>(null!=f&&0==(2&f.__u)?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;){if(i>=0){if((f=l[i])&&0==(2&f.__u)&&o==f.key&&e==f.type)return i;i--}if(r<l.length){if((f=l[r])&&0==(2&f.__u)&&o==f.key&&e==f.type)return r;r++}}return-1}function T(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||y.test(l)?u:u+"px"}function j(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||T(n.style,l,u[l])}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(f,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u.u=t.u:(u.u=c,n.addEventListener(l,r?a:s,r)):n.removeEventListener(l,r?a:s,r);else{if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u))}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=c++;else if(u.t<t.u)return;return t(l.event?l.event(u):u)}}}function O(n,u,t,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,j=u.type;if(null!=u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(a=l.__b)&&a(u);n:if("function"==typeof j)try{if(b=u.props,S="prototype"in j&&j.prototype.render,C=(a=j.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(S?u.__c=h=new j(b,M):(u.__c=h=new x(b,M),h.constructor=j,h.render=D),C&&C.sub(h),h.props=b,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,j.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)S&&null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(S&&null==j.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)||u.__v==t.__v){for(u.__v!=t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u)}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_)})}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=l.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[]}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),L=a,null!=a&&a.type===k&&null==a.key&&(L=N(a.props.children)),f=I(n,w(L)?L:[L],u,t,i,r,o,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null)}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f}else for(T=o.length;T--;)g(o[T]);else u.__e=t.__e,u.__k=t.__k;l.__e(n,u,t)}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=V(t.__e,u,t,i,r,o,e,c,s);return(a=l.diffed)&&a(u),128&u.__u?void 0:f}function z(n,u,t){for(var i=0;i<t.length;i++)q(t[i],t[++i],t[++i]);l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function N(n){return"object"!=typeof n||null==n||n.__b&&n.__b>0?n:w(n)?n.map(N):d({},n)}function V(u,t,i,r,o,e,f,c,s){var a,h,v,y,d,_,m,b=i.props,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((d=e[a])&&"setAttribute"in d==!!x&&(x?d.localName==x:3==d.nodeType)){u=d,e[a]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l.__m&&l.__m(t,e),c=!1),e=null}if(null==x)b===k||c&&u.data==k||(u.data=k);else{if(e=e&&n.call(u.childNodes),b=i.props||p,!c&&null!=e)for(b={},a=0;a<u.attributes.length;a++)b[(d=u.attributes[a]).name]=d.value;for(a in b)if(d=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=d;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;j(u,a,null,d,o)}for(a in k)d=k[a],"children"==a?y=d:"dangerouslySetInnerHTML"==a?h=d:"value"==a?_=d:"checked"==a?m=d:c&&"function"!=typeof d||b[a]===d||j(u,a,d,b[a],o);if(h)c||v&&(h.__html==v.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),I("template"==t.type?u.content:u,w(y)?y:[y],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&S(i,0),c,s),null!=e)for(a=e.length;a--;)g(e[a]);c||(a="value","progress"==x&&null==_?u.removeAttribute("value"):null!=_&&(_!==u[a]||"progress"==x&&!_||"option"==x&&_!=b[a])&&j(u,a,_,b[a],o),a="checked",null!=m&&m!=u[a]&&j(u,a,m,b[a],o))}return u}function q(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u))}else n.current=u}catch(n){l.__e(n,t)}}function B(n,u,t){var i,r;if(l.unmount&&l.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||q(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){l.__e(n,u)}i.base=i.__P=null}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&B(i[r],u,t||"function"!=typeof n.type);t||g(n.__e),n.__c=n.__=n.__e=void 0}function D(n,l,u){return this.constructor(n,u)}function E(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),l.__&&l.__(u,t),o=(r="function"==typeof i)?null:i&&i.__k||t.__k,e=[],f=[],O(t,u=(!r&&i||t).__k=_(k,null,[u]),o||p,p,t.namespaceURI,!r&&i?[i]:o?null:t.firstChild?n.call(t.childNodes):null,e,!r&&i?i:o?o.__e:t.firstChild,r,f),z(e,u,f)}function G(n,l){E(n,l,G)}function J(l,u,t){var i,r,o,e,f=d({},l.props);for(o in l.type&&l.type.defaultProps&&(e=l.type.defaultProps),u)"key"==o?i=u[o]:"ref"==o?r=u[o]:f[o]=void 0===u[o]&&null!=e?e[o]:u[o];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),m(l.type,f,i||l.key,r||l.ref,null)}function K(n){function l(n){var u,t;return this.getChildContext||(u=new Set,(t={})[l.__c]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null},this.shouldComponentUpdate=function(n){this.props.value!=n.value&&u.forEach(function(n){n.__e=!0,M(n)})},this.sub=function(n){u.add(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.delete(n),l&&l.call(n)}}),n.children}return l.__c="__cC"+h++,l.__=n,l.Provider=l.__l=(l.Consumer=function(n,l){return n.children(l)}).contextType=l,l}n=v.slice,l={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l}throw n}},u=0,t=function(n){return null!=n&&null==n.constructor},x.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this))},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this))},x.prototype.render=k,i=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e=function(n,l){return n.__v.__b-l.__v.__b},$.__r=0,f=/(PointerCapture)$|Capture$/i,c=0,s=F(!1),a=F(!0),h=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.module.js":
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallback: () => (/* binding */ q),
/* harmony export */   useContext: () => (/* binding */ x),
/* harmony export */   useDebugValue: () => (/* binding */ P),
/* harmony export */   useEffect: () => (/* binding */ y),
/* harmony export */   useErrorBoundary: () => (/* binding */ b),
/* harmony export */   useId: () => (/* binding */ g),
/* harmony export */   useImperativeHandle: () => (/* binding */ F),
/* harmony export */   useLayoutEffect: () => (/* binding */ _),
/* harmony export */   useMemo: () => (/* binding */ T),
/* harmony export */   useReducer: () => (/* binding */ h),
/* harmony export */   useRef: () => (/* binding */ A),
/* harmony export */   useState: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
var t,r,u,i,o=0,f=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function p(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function d(n){return o=1,h(D,n)}function h(n,u,i){var o=p(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.__f)){var f=function(n,t,r){if(!o.__c.__H)return!0;var u=o.__c.__H.__.filter(function(n){return!!n.__c});if(u.every(function(n){return!n.__N}))return!c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0)}}),c&&c.call(this,n,t,r)||i};r.__f=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u}e&&e.call(this,n,t,r)},r.shouldComponentUpdate=f}return o.__N||o.__}function y(n,u){var i=p(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r.__H.__h.push(i))}function _(n,u){var i=p(t++,4);!c.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r.__h.push(i))}function A(n){return o=5,T(function(){return{current:n}},[])}function F(n,t,r){o=6,_(function(){if("function"==typeof n){var r=n(t());return function(){n(null),r&&"function"==typeof r&&r()}}if(n)return n.current=t(),function(){return n.current=null}},null==r?r:r.concat(n))}function T(n,r){var u=p(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function q(n,t){return o=8,T(function(){return n},t)}function x(n){var u=r.context[n.__c],i=p(t++,9);return i.c=n,u?(null==i.__&&(i.__=!0,u.sub(r)),u.props.value):n.__}function P(n,t){c.useDebugValue&&c.useDebugValue(t?t(n):n)}function b(n){var u=p(t++,10),i=d();return u.__=n,r.componentDidCatch||(r.componentDidCatch=function(n,t){u.__&&u.__(n,t),i[1](n)}),[i[0],function(){i[1](void 0)}]}function g(){var n=p(t++,11);if(!n.__){for(var u=r.__v;null!==u&&!u.__m&&null!==u.__;)u=u.__;var i=u.__m||(u.__m=[0,0]);n.__="P"+i[0]+"-"+i[1]++}return n.__}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[]}catch(t){n.__H.__h=[],c.__e(t,n.__v)}}c.__b=function(n){r=null,e&&e(n)},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t)},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),u=r=null},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return!n.__||B(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],c.__e(r,n.__v)}}),l&&l(n,t)},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n)}catch(n){t=n}}),r.__H=void 0,t&&c.__e(t,r.__v))};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n)},u=setTimeout(r,35);k&&(t=requestAnimationFrame(r))}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t}function B(n){var t=r;n.__c=n.__(),r=t}function C(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "jquery":
/*!******************************************************************************************!*\
  !*** external {"root":"jQuery","commonjs2":"jquery","commonjs":"jquery","amd":"jquery"} ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
if(typeof __WEBPACK_EXTERNAL_MODULE_jquery__ === 'undefined') { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "survey-core":
/*!*********************************************************************************************************!*\
  !*** external {"root":"Survey","commonjs2":"survey-core","commonjs":"survey-core","amd":"survey-core"} ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_survey_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./entries/index.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CharacterCounterComponent: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.CharacterCounterComponent),
/* harmony export */   Children: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.Children),
/* harmony export */   Component: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   ComponentsContainer: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.ComponentsContainer),
/* harmony export */   Fragment: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   Header: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.Header),
/* harmony export */   HeaderCell: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.HeaderCell),
/* harmony export */   HeaderMobile: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.HeaderMobile),
/* harmony export */   List: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.List),
/* harmony export */   ListItemContent: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.ListItemContent),
/* harmony export */   ListItemGroup: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.ListItemGroup),
/* harmony export */   LoadingIndicatorComponent: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.LoadingIndicatorComponent),
/* harmony export */   LogoImage: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.LogoImage),
/* harmony export */   MatrixRow: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.MatrixRow),
/* harmony export */   Model: () => (/* reexport safe */ survey_core__WEBPACK_IMPORTED_MODULE_2__.SurveyModel),
/* harmony export */   NotifierComponent: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.NotifierComponent),
/* harmony export */   Popup: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.Popup),
/* harmony export */   PopupModal: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.PopupModal),
/* harmony export */   PopupSurvey: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.PopupSurvey),
/* harmony export */   PureComponent: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.PureComponent),
/* harmony export */   QuestionErrorComponent: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.QuestionErrorComponent),
/* harmony export */   RatingDropdownItem: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.RatingDropdownItem),
/* harmony export */   RatingItem: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.RatingItem),
/* harmony export */   RatingItemSmiley: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.RatingItemSmiley),
/* harmony export */   RatingItemStar: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.RatingItemStar),
/* harmony export */   ReactElementFactory: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory),
/* harmony export */   ReactQuestionFactory: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.ReactQuestionFactory),
/* harmony export */   ReactSurveyElement: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElement),
/* harmony export */   ReactSurveyElementsWrapper: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElementsWrapper),
/* harmony export */   Scroll: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.Scroll),
/* harmony export */   Skeleton: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.Skeleton),
/* harmony export */   SliderLabelItem: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SliderLabelItem),
/* harmony export */   StrictMode: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.StrictMode),
/* harmony export */   Survey: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.Survey),
/* harmony export */   SurveyActionBar: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyActionBar),
/* harmony export */   SurveyElementBase: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyElementBase),
/* harmony export */   SurveyElementErrors: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyElementErrors),
/* harmony export */   SurveyFileChooseButton: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyFileChooseButton),
/* harmony export */   SurveyFilePreview: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyFilePreview),
/* harmony export */   SurveyFlowPanel: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyFlowPanel),
/* harmony export */   SurveyHeader: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyHeader),
/* harmony export */   SurveyLocStringEditor: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyLocStringEditor),
/* harmony export */   SurveyLocStringViewer: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyLocStringViewer),
/* harmony export */   SurveyModel: () => (/* reexport safe */ survey_core__WEBPACK_IMPORTED_MODULE_2__.SurveyModel),
/* harmony export */   SurveyNavigationBase: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyNavigationBase),
/* harmony export */   SurveyNavigationButton: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyNavigationButton),
/* harmony export */   SurveyPage: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyPage),
/* harmony export */   SurveyPanel: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyPanel),
/* harmony export */   SurveyProgress: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyProgress),
/* harmony export */   SurveyProgressButtons: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyProgressButtons),
/* harmony export */   SurveyProgressToc: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyProgressToc),
/* harmony export */   SurveyQuestion: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestion),
/* harmony export */   SurveyQuestionAndErrorsCell: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionAndErrorsCell),
/* harmony export */   SurveyQuestionBoolean: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionBoolean),
/* harmony export */   SurveyQuestionBooleanCheckbox: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionBooleanCheckbox),
/* harmony export */   SurveyQuestionBooleanRadio: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionBooleanRadio),
/* harmony export */   SurveyQuestionButtonGroup: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionButtonGroup),
/* harmony export */   SurveyQuestionButtonGroupDropdown: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionButtonGroupDropdown),
/* harmony export */   SurveyQuestionCheckbox: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionCheckbox),
/* harmony export */   SurveyQuestionCheckboxItem: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionCheckboxItem),
/* harmony export */   SurveyQuestionComment: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionComment),
/* harmony export */   SurveyQuestionCommentItem: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionCommentItem),
/* harmony export */   SurveyQuestionComposite: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionComposite),
/* harmony export */   SurveyQuestionCustom: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionCustom),
/* harmony export */   SurveyQuestionDropdown: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionDropdown),
/* harmony export */   SurveyQuestionDropdownBase: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionDropdownBase),
/* harmony export */   SurveyQuestionDropdownSelect: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionDropdownSelect),
/* harmony export */   SurveyQuestionElementBase: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionElementBase),
/* harmony export */   SurveyQuestionEmpty: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionEmpty),
/* harmony export */   SurveyQuestionExpression: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionExpression),
/* harmony export */   SurveyQuestionFile: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionFile),
/* harmony export */   SurveyQuestionHtml: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionHtml),
/* harmony export */   SurveyQuestionImage: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionImage),
/* harmony export */   SurveyQuestionImagePicker: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionImagePicker),
/* harmony export */   SurveyQuestionMatrix: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrix),
/* harmony export */   SurveyQuestionMatrixCell: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrixCell),
/* harmony export */   SurveyQuestionMatrixDetailButton: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrixDetailButton),
/* harmony export */   SurveyQuestionMatrixDropdown: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrixDropdown),
/* harmony export */   SurveyQuestionMatrixDropdownBase: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrixDropdownBase),
/* harmony export */   SurveyQuestionMatrixDropdownCell: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrixDropdownCell),
/* harmony export */   SurveyQuestionMatrixDynamic: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrixDynamic),
/* harmony export */   SurveyQuestionMatrixDynamicAddButton: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrixDynamicAddButton),
/* harmony export */   SurveyQuestionMatrixDynamicDragDropIcon: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrixDynamicDragDropIcon),
/* harmony export */   SurveyQuestionMatrixDynamicRemoveButton: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrixDynamicRemoveButton),
/* harmony export */   SurveyQuestionMatrixRow: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMatrixRow),
/* harmony export */   SurveyQuestionMultipleText: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionMultipleText),
/* harmony export */   SurveyQuestionOptionItem: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionOptionItem),
/* harmony export */   SurveyQuestionPanelDynamic: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionPanelDynamic),
/* harmony export */   SurveyQuestionPanelDynamicAddButton: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionPanelDynamicAddButton),
/* harmony export */   SurveyQuestionPanelDynamicNextButton: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionPanelDynamicNextButton),
/* harmony export */   SurveyQuestionPanelDynamicPrevButton: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionPanelDynamicPrevButton),
/* harmony export */   SurveyQuestionPanelDynamicProgressText: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionPanelDynamicProgressText),
/* harmony export */   SurveyQuestionPanelDynamicRemoveButton: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionPanelDynamicRemoveButton),
/* harmony export */   SurveyQuestionRadioItem: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionRadioItem),
/* harmony export */   SurveyQuestionRadiogroup: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionRadiogroup),
/* harmony export */   SurveyQuestionRanking: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionRanking),
/* harmony export */   SurveyQuestionRankingItem: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionRankingItem),
/* harmony export */   SurveyQuestionRankingItemContent: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionRankingItemContent),
/* harmony export */   SurveyQuestionRating: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionRating),
/* harmony export */   SurveyQuestionRatingDropdown: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionRatingDropdown),
/* harmony export */   SurveyQuestionSignaturePad: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionSignaturePad),
/* harmony export */   SurveyQuestionSlider: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionSlider),
/* harmony export */   SurveyQuestionTagbox: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionTagbox),
/* harmony export */   SurveyQuestionTagboxItem: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionTagboxItem),
/* harmony export */   SurveyQuestionText: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyQuestionText),
/* harmony export */   SurveyRow: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyRow),
/* harmony export */   SurveyTimerPanel: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyTimerPanel),
/* harmony export */   SurveyWindow: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SurveyWindow),
/* harmony export */   SurveyWindowModel: () => (/* reexport safe */ survey_core__WEBPACK_IMPORTED_MODULE_2__.SurveyWindowModel),
/* harmony export */   Suspense: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.Suspense),
/* harmony export */   SuspenseList: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.SuspenseList),
/* harmony export */   SvgBundleComponent: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SvgBundleComponent),
/* harmony export */   SvgIcon: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.SvgIcon),
/* harmony export */   TagboxFilterString: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.TagboxFilterString),
/* harmony export */   TitleActions: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.TitleActions),
/* harmony export */   TitleElement: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.TitleElement),
/* harmony export */   attachKey2click: () => (/* reexport safe */ _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.attachKey2click),
/* harmony export */   cloneElement: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.cloneElement),
/* harmony export */   createContext: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.createContext),
/* harmony export */   createElement: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.createElement),
/* harmony export */   createFactory: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.createFactory),
/* harmony export */   createPortal: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.createPortal),
/* harmony export */   createRef: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   findDOMNode: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.findDOMNode),
/* harmony export */   flushSync: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.flushSync),
/* harmony export */   forwardRef: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef),
/* harmony export */   hydrate: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.hydrate),
/* harmony export */   isFragment: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.isFragment),
/* harmony export */   isMemo: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.isMemo),
/* harmony export */   isValidElement: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.isValidElement),
/* harmony export */   lazy: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.lazy),
/* harmony export */   memo: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.memo),
/* harmony export */   preact: () => (/* binding */ preact),
/* harmony export */   render: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   renderPopupSurvey: () => (/* binding */ renderPopupSurvey),
/* harmony export */   renderSurvey: () => (/* binding */ renderSurvey),
/* harmony export */   settings: () => (/* reexport safe */ survey_core__WEBPACK_IMPORTED_MODULE_2__.settings),
/* harmony export */   startTransition: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.startTransition),
/* harmony export */   surveyLocalization: () => (/* reexport safe */ survey_core__WEBPACK_IMPORTED_MODULE_2__.surveyLocalization),
/* harmony export */   surveyStrings: () => (/* reexport safe */ survey_core__WEBPACK_IMPORTED_MODULE_2__.surveyStrings),
/* harmony export */   unmountComponentAtNode: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.unmountComponentAtNode),
/* harmony export */   unstable_batchedUpdates: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates),
/* harmony export */   useCallback: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useCallback),
/* harmony export */   useContext: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   useDebugValue: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
/* harmony export */   useDeferredValue: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useDeferredValue),
/* harmony export */   useEffect: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useEffect),
/* harmony export */   useId: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useId),
/* harmony export */   useImperativeHandle: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
/* harmony export */   useInsertionEffect: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect),
/* harmony export */   useLayoutEffect: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect),
/* harmony export */   useMemo: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useMemo),
/* harmony export */   useReducer: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useReducer),
/* harmony export */   useRef: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useRef),
/* harmony export */   useState: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useState),
/* harmony export */   useSyncExternalStore: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore),
/* harmony export */   useTransition: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.useTransition),
/* harmony export */   version: () => (/* reexport safe */ react__WEBPACK_IMPORTED_MODULE_0__.version)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/compat */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../survey-react-ui/entries/react-ui-model */ "../survey-react-ui/entries/react-ui-model.ts");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_2__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// eslint-disable-next-line surveyjs/no-imports-from-entries


function renderSurvey(model, element, props) {
    if (props === void 0) { props = {}; }
    var survey = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.Survey, __assign({ model: model }, props));
    react__WEBPACK_IMPORTED_MODULE_0__.render(survey, element);
}
function renderPopupSurvey(model, element, props) {
    if (props === void 0) { props = {}; }
    var survey = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_survey_react_ui_entries_react_ui_model__WEBPACK_IMPORTED_MODULE_1__.PopupSurvey, __assign({ model: model }, props));
    react__WEBPACK_IMPORTED_MODULE_0__.render(survey, element);
}
function doPopupSurvey(props) {
    return this.each(function () {
        renderPopupSurvey(props.model, this, props);
    });
}
var gcontext = globalThis;
if (typeof globalThis === "undefined")
    gcontext = window;
var jQueryInst = gcontext["jQuery"] || gcontext["$"];
if (typeof jQueryInst !== "undefined") {
    initJquery(jQueryInst);
}
else {
    try {
        jQueryInst = __webpack_require__(/*! jquery */ "jquery");
        initJquery(jQueryInst);
    }
    catch (ex) {
    }
}
function initJquery(instance) {
    instance["fn"].extend({
        Survey: function (props) {
            return this.each(function () {
                renderSurvey(props.model, this, props);
            });
        },
        PopupSurvey: doPopupSurvey,
        SurveyWindow: doPopupSurvey
    });
}
survey_core__WEBPACK_IMPORTED_MODULE_2__.SurveyModel.platform = "js-ui";
survey_core__WEBPACK_IMPORTED_MODULE_2__.SurveyModel.prototype["render"] = function (element) {
    if (element === void 0) { element = null; }
    if (this.renderCallback) {
        this.renderCallback();
    }
    else {
        renderSurvey(this, element);
    }
};
var preact = react__WEBPACK_IMPORTED_MODULE_0__;



(0,survey_core__WEBPACK_IMPORTED_MODULE_2__.checkLibraryVersion)("".concat("2.2.6"), "survey-js-ui");

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=survey-js-ui.js.map