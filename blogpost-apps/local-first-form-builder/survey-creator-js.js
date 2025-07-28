/*!
 * SurveyJS Creator UI v2.2.6
 * (c) 2015-2025 Devsoft Baltic OÜ - http://surveyjs.io/
 * Github: https://github.com/surveyjs/survey-creator
 * License: https://surveyjs.io/Licenses#SurveyCreator
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("survey-core"), require("survey-creator-core"), require("survey-js-ui"));
	else if(typeof define === 'function' && define.amd)
		define("survey-creator-js", ["survey-core", "survey-creator-core", "survey-js-ui"], factory);
	else if(typeof exports === 'object')
		exports["survey-creator-js"] = factory(require("survey-core"), require("survey-creator-core"), require("survey-js-ui"));
	else
		root["SurveyCreator"] = factory(root["Survey"], root["SurveyCreatorCore"], root["SurveyUI"]);
})(this, (__WEBPACK_EXTERNAL_MODULE_survey_core__, __WEBPACK_EXTERNAL_MODULE_survey_creator_core__, __WEBPACK_EXTERNAL_MODULE_survey_js_ui__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../survey-creator-react/src/ActionButton.tsx":
/*!****************************************************!*\
  !*** ../survey-creator-react/src/ActionButton.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionButton: () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var ActionButton = /** @class */ (function (_super) {
    __extends(ActionButton, _super);
    function ActionButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionButton.prototype.renderElement = function () {
        var classes = new survey_core__WEBPACK_IMPORTED_MODULE_1__.CssClassBuilder()
            .append(this.props.classes)
            .append("svc-action-button")
            .append("svc-action-button--selected", !!this.props.selected)
            .append("svc-action-button--disabled", !!this.props.disabled)
            .toString();
        if (this.props.iconName) {
            return this.renderIcon(classes);
        }
        return this.renderButtonText(classes);
    };
    ActionButton.prototype.renderButtonText = function (classes) {
        var _this = this;
        if (this.props.disabled) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: classes }, this.props.text);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { role: "button", className: classes, onClick: function (e) {
                if (!_this.props.allowBubble) {
                    e.stopPropagation();
                }
                _this.props.click();
            }, title: this.props.title }, this.props.text))));
    };
    ActionButton.prototype.renderIcon = function (classes) {
        var _this = this;
        classes += " svc-action-button--icon";
        if (this.props.disabled) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: classes },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { size: "auto", iconName: this.props.iconName }));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: classes, onClick: function (e) {
                if (!_this.props.allowBubble) {
                    e.stopPropagation();
                }
                _this.props.click();
            }, title: this.props.title },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { size: "auto", iconName: this.props.iconName })))));
    };
    return ActionButton;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-action-button", function (props) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ActionButton, props); });


/***/ }),

/***/ "../survey-creator-react/src/AddQuestionButton.tsx":
/*!*********************************************************!*\
  !*** ../survey-creator-react/src/AddQuestionButton.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddQuestionButtonComponent: () => (/* binding */ AddQuestionButtonComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "../survey-creator-react/src/events.ts");
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



var AddQuestionButtonComponent = /** @class */ (function (_super) {
    __extends(AddQuestionButtonComponent, _super);
    function AddQuestionButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AddQuestionButtonComponent.prototype, "model", {
        get: function () {
            return this.props.item.data;
        },
        enumerable: false,
        configurable: true
    });
    AddQuestionButtonComponent.prototype.renderTypeSelector = function () {
        var questionTypeSelectorModel = this.model.questionTypeSelectorModel;
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", onClick: function (e) {
                e.stopPropagation();
                questionTypeSelectorModel.action();
            }, className: "svc-element__question-type-selector", title: this.model.addNewQuestionText, role: "button" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-element__question-type-selector-icon" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: questionTypeSelectorModel.iconName, size: "auto", title: this.model.addNewQuestionText })),
            this.props.renderPopup === undefined || this.props.renderPopup ?
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Popup, { model: questionTypeSelectorModel.popupModel })
                : null));
    };
    AddQuestionButtonComponent.prototype.renderElement = function () {
        var _this = this;
        var addButtonClass = this.props.buttonClass || "svc-btn";
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-element__add-new-question " + addButtonClass, onClick: function (e) {
                    e.stopPropagation();
                    _this.model.addNewQuestion(_this.model, new _events__WEBPACK_IMPORTED_MODULE_1__.ReactMouseEvent(e));
                }, onMouseOver: function (e) { return _this.model.hoverStopper && _this.model.hoverStopper(e.nativeEvent, e.currentTarget); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { className: "svc-panel__add-new-question-icon", iconName: "icon-add_24x24", size: "auto" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-add-new-item-button__text" }, this.model.addNewQuestionText),
                this.props.renderPopup !== false ? this.renderTypeSelector() : null)),
            this.props.renderPopup === false ? this.renderTypeSelector() : null);
    };
    return AddQuestionButtonComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-add-new-question-btn", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(AddQuestionButtonComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/ImageItemValueWrapper.tsx":
/*!*************************************************************!*\
  !*** ../survey-creator-react/src/ImageItemValueWrapper.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageItemValueAdornerComponent: () => (/* binding */ ImageItemValueAdornerComponent)
/* harmony export */ });
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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





var ImageItemValueAdornerComponent = /** @class */ (function (_super) {
    __extends(ImageItemValueAdornerComponent, _super);
    function ImageItemValueAdornerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.preventDragHandler = function (e) {
            e.preventDefault();
        };
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_1__.createRef();
        return _this;
    }
    ImageItemValueAdornerComponent.prototype.createModel = function (props) {
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_0__.ImageItemValueWrapperViewModel(props.componentData.creator, props.question, props.item, null, null);
    };
    ImageItemValueAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "item"];
    };
    ImageItemValueAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    Object.defineProperty(ImageItemValueAdornerComponent.prototype, "question", {
        get: function () {
            return this.props.question;
        },
        enumerable: false,
        configurable: true
    });
    ImageItemValueAdornerComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.itemsRoot = this.rootRef.current;
    };
    ImageItemValueAdornerComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.model.itemsRoot = this.rootRef.current;
    };
    ImageItemValueAdornerComponent.prototype.renderLoadingIndicator = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-image-item-value__loading" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.LoadingIndicatorComponent, null));
    };
    ImageItemValueAdornerComponent.prototype.renderNewItemControls = function () {
        var _this = this;
        var addButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: this.model.addButtonCss, onClick: function () { return _this.model.chooseNewFile(_this.model); } }, this.model.showChooseButtonAsIcon ?
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { size: "auto", iconName: "icon-add-lg", title: this.model.addFileTitle }) :
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, this.model.chooseImageText)));
        var placeholder = this.model.showPlaceholder ? react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "svc-image-item-value__placeholder" }, this.model.placeholderText) : null;
        return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            placeholder,
            addButton);
    };
    ImageItemValueAdornerComponent.prototype.render = function () {
        var _this = this;
        this.model.item = this.props.item;
        var isNew = !this.props.question.isItemInList(this.props.item);
        this.model.isNew = isNew;
        var imageStyle = !this.model.getIsNewItemSingle() ? { width: this.question.renderedImageWidth, height: this.question.renderedImageHeight } : null;
        var content = null;
        if (isNew || this.model.isUploading) {
            content = (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-image-item-value__item" },
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "sd-imagepicker__item sd-imagepicker__item--inline" },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", { className: "sd-imagepicker__label" },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { style: imageStyle, className: "sd-imagepicker__image" }, this.model.isUploading ? this.renderLoadingIndicator() : null)))),
                this.model.allowAdd && !this.model.isUploading ?
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-image-item-value-controls" }, this.renderNewItemControls())
                    : null));
        }
        else {
            content = (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-image-item-value__item" }, this.props.element),
                this.model.isDraggable && this.model.canRenderControls ?
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "svc-context-button svc-image-item-value-controls__drag-area-indicator", onPointerDown: function (event) { return _this.model.onPointerDown(event); } },
                        react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { size: "auto", iconName: "icon-drag-24x24" }))
                    : null,
                this.model.canRenderControls ?
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-context-container svc-image-item-value-controls" },
                        this.model.allowRemove && !this.model.isUploading ? (0,react__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "svc-context-button", onClick: function () { return _this.model.chooseFile(_this.model); } },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { role: "button", size: "auto", iconName: "icon-choosefile", title: this.model.selectFileTitle }))) : null,
                        this.model.allowRemove && !this.model.isUploading ? (0,react__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "svc-context-button svc-context-button--danger", onClick: function () { return _this.model.remove(_this.model); } },
                            react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { role: "button", size: "auto", iconName: "icon-delete", title: this.model.removeFileTitle }))) : null)
                    : null));
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { ref: this.rootRef, className: this.model.getRootCss(), key: this.props.element.key, "data-sv-drop-target-item-value": this.model.isDraggable ? this.model.item.value : undefined, onPointerDown: function (event) { return _this.model.onPointerDown(event); }, onDragStart: this.preventDragHandler, onDrop: this.model.onDrop, onDragEnter: this.model.onDragEnter, onDragOver: this.model.onDragOver, onDragLeave: this.model.onDragLeave },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-image-item-value-wrapper__ghost", style: imageStyle }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-image-item-value-wrapper__content" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "file", "aria-hidden": "true", tabIndex: -1, accept: this.model.acceptedTypes, className: "svc-choose-file-input", style: {
                        position: "absolute",
                        opacity: 0,
                        width: "1px",
                        height: "1px",
                        overflow: "hidden"
                    } }),
                content)));
    };
    return ImageItemValueAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_2__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("svc-image-item-value", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(ImageItemValueAdornerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/ItemValueWrapper.tsx":
/*!********************************************************!*\
  !*** ../survey-creator-react/src/ItemValueWrapper.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemValueAdornerComponent: () => (/* binding */ ItemValueAdornerComponent)
/* harmony export */ });
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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




var ItemValueAdornerComponent = /** @class */ (function (_super) {
    __extends(ItemValueAdornerComponent, _super);
    function ItemValueAdornerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onBlur = function (event) {
            _this.model.onFocusOut(event.nativeEvent);
        };
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_1__.createRef();
        return _this;
    }
    ItemValueAdornerComponent.prototype.createModel = function (props) {
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_0__.ItemValueWrapperViewModel(props.componentData.creator, props.question, props.item);
    };
    ItemValueAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "item"];
    };
    ItemValueAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    ItemValueAdornerComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.props.item.setRootElement(this.rootRef.current);
        if (prevProps.item !== this.props.item && prevProps.item) {
            prevProps.item.setRootElement(undefined);
        }
    };
    ItemValueAdornerComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.props.item.setRootElement(this.rootRef.current);
    };
    ItemValueAdornerComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.props.item.setRootElement(undefined);
    };
    ItemValueAdornerComponent.prototype.render = function () {
        var _this = this;
        this.model.item = this.props.item;
        var button = this.model.allowAdd ? ((0,react__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { role: "button", className: "svc-item-value-controls__button svc-item-value-controls__add", "aria-label": this.model.tooltip, onClick: function () {
                _this.model.add(_this.model);
                _this.model.isNew = false;
            } },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { size: "auto", iconName: "icon-add_16x16", title: this.model.tooltip })))) : (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            " ",
            this.model.isDraggable ? (react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "svc-item-value-controls__button svc-item-value-controls__drag" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { className: "svc-item-value-controls__drag-icon", size: "auto", iconName: "icon-drag-24x24", title: this.model.dragTooltip }))) : null,
            this.model.allowRemove ? (0,react__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { role: "button", className: "svc-item-value-controls__button svc-item-value-controls__remove", "aria-label": this.model.tooltip, onClick: function () { return _this.model.remove(_this.model); } },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { size: "auto", iconName: "icon-remove_16x16", title: this.model.tooltip }))) : null));
        var itemkey = this.props.element.key + (this.model.allowAdd ? "_new" : "");
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { ref: this.rootRef, className: "svc-item-value-wrapper" +
                (this.model.allowAdd ? " svc-item-value--new" : "") +
                (this.model.isDragging ? " svc-item-value--dragging" : "") +
                (this.model.isDragDropGhost ? " svc-item-value--ghost" : "") +
                (this.model.isDragDropMoveDown ? " svc-item-value--movedown" : "") +
                (this.model.isDragDropMoveUp ? " svc-item-value--moveup" : ""), key: itemkey, "data-sv-drop-target-item-value": this.model.isDraggable ? this.model.item.value : undefined, onPointerDown: function (event) { return _this.model.onPointerDown(event); } },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-item-value__ghost" }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-item-value-controls", onBlur: this.onBlur }, button),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-item-value__item", onClick: function (event) { return _this.model.select(_this.model, event.nativeEvent); } }, this.props.element)));
    };
    return ItemValueAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_2__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("svc-item-value", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(ItemValueAdornerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/LogoImage.tsx":
/*!*************************************************!*\
  !*** ../survey-creator-react/src/LogoImage.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoImageComponent: () => (/* binding */ LogoImageComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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




var LogoImageComponent = /** @class */ (function (_super) {
    __extends(LogoImageComponent, _super);
    function LogoImageComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    LogoImageComponent.prototype.createModel = function (props) {
        var prevRoot = null;
        if (!!this.model) {
            prevRoot = this.model.root;
        }
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.LogoImageViewModel(props.data, prevRoot);
    };
    LogoImageComponent.prototype.getUpdatedModelProps = function () {
        return ["data"];
    };
    LogoImageComponent.prototype.getStateElement = function () {
        return this.model;
    };
    LogoImageComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.root = this.rootRef.current;
    };
    LogoImageComponent.prototype.renderChooseButton = function () {
        var _this = this;
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-context-button", onClick: function () { return _this.model.chooseFile(_this.model); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { size: "auto", iconName: "icon-choosefile" })));
    };
    LogoImageComponent.prototype.renderClearButton = function () {
        var _this = this;
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-context-button svc-context-button--danger", onClick: function () { return _this.model.remove(_this.model); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { size: "auto", iconName: "icon-clear" })));
    };
    LogoImageComponent.prototype.renderButtons = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-context-container svc-logo-image-controls" },
            this.renderChooseButton(),
            this.renderClearButton()));
    };
    LogoImageComponent.prototype.renderImage = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.containerCss },
            this.renderButtons(),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.LogoImage, { data: this.props.data.survey }));
    };
    LogoImageComponent.prototype.renderPlaceHolder = function () {
        var _this = this;
        return this.model.allowEdit && !this.model.isUploading ? (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-logo-image-placeholder", onClick: function () { return _this.model.chooseFile(_this.model); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { xlinkHref: "#icon-image-48x48" })))) : null;
    };
    LogoImageComponent.prototype.renderInput = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { "aria-hidden": "true", type: "file", tabIndex: -1, accept: this.model.acceptedTypes, className: "svc-choose-file-input" });
    };
    LogoImageComponent.prototype.renderLoadingIndicator = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-logo-image__loading" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.LoadingIndicatorComponent, null));
    };
    LogoImageComponent.prototype.render = function () {
        var content = null;
        if (this.model.survey.locLogo.renderedHtml && !this.model.isUploading) {
            content = this.renderImage();
        }
        else if (this.model.isUploading) {
            content = this.renderLoadingIndicator();
        }
        else {
            content = this.renderPlaceHolder();
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.rootRef, className: "svc-logo-image" },
            this.renderInput(),
            content));
    };
    return LogoImageComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_2__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-logo-image", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(LogoImageComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/MatrixCellWrapper.tsx":
/*!*********************************************************!*\
  !*** ../survey-creator-react/src/MatrixCellWrapper.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatrixCellAdornerComponent: () => (/* binding */ MatrixCellAdornerComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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




var MatrixCellAdornerComponent = /** @class */ (function (_super) {
    __extends(MatrixCellAdornerComponent, _super);
    function MatrixCellAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatrixCellAdornerComponent.prototype.createModel = function (props) {
        var _a;
        var data = props.componentData;
        var prevIsSelected = false;
        if (!!this.model) {
            prevIsSelected = this.model.isSelected;
        }
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.MatrixCellWrapperViewModel(data.creator, data.element, data.question, data.row, data.column || ((_a = data.element.cell) === null || _a === void 0 ? void 0 : _a.column));
        this.model.isSelected = prevIsSelected;
    };
    MatrixCellAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["componentData"];
    };
    MatrixCellAdornerComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a, _b;
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        var data = this.props.componentData;
        this.model.templateData = data.element;
        this.model.row = data.row;
        this.model.column = data.column || ((_b = (_a = data.element) === null || _a === void 0 ? void 0 : _a.cell) === null || _b === void 0 ? void 0 : _b.column);
        this.model.question = data.question;
    };
    MatrixCellAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    MatrixCellAdornerComponent.prototype.render = function () {
        var _this = this;
        var controls = null;
        if (!!this.model.isSupportCellEditor) {
            controls = react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-matrix-cell__question-controls" }, (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-matrix-cell__question-controls-button svc-context-button", onClick: function (event) { return _this.model.editQuestion(_this.model, event); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { size: "auto", iconName: "icon-edit" }))));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-matrix-cell", tabIndex: -1, key: this.props.element.key, onClick: function (e) { return !_this.props.question && _this.model.selectContext(_this.model, e); }, onMouseOut: function (e) { return _this.model.hover(e.nativeEvent, e.currentTarget); }, onMouseOver: function (e) { return _this.model.hover(e.nativeEvent, e.currentTarget); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-matrix-cell--selected" + (this.model.isSelected ? " svc-visible" : "") }),
            this.props.element,
            controls));
    };
    return MatrixCellAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_2__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-matrix-cell", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(MatrixCellAdornerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/ModelElement.tsx":
/*!****************************************************!*\
  !*** ../survey-creator-react/src/ModelElement.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatorModelElement: () => (/* binding */ CreatorModelElement)
/* harmony export */ });
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_0__);
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

var CreatorModelElement = /** @class */ (function (_super) {
    __extends(CreatorModelElement, _super);
    function CreatorModelElement(props) {
        var _this = _super.call(this, props) || this;
        _this.createModel(props);
        return _this;
    }
    CreatorModelElement.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var result = _super.prototype.shouldComponentUpdate.call(this, nextProps, nextState);
        if (result) {
            if (this.needUpdateModel(nextProps)) {
                this.createModel(nextProps);
            }
        }
        return result;
    };
    CreatorModelElement.prototype.createModel = function (props) { };
    CreatorModelElement.prototype.needUpdateModel = function (nextProps) {
        var names = this.getUpdatedModelProps();
        if (!Array.isArray(names))
            return true;
        for (var i = 0; i < names.length; i++) {
            var key = names[i];
            if (this.props[key] !== nextProps[key])
                return true;
        }
        return false;
    };
    CreatorModelElement.prototype.getUpdatedModelProps = function () {
        return undefined;
    };
    return CreatorModelElement;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));



/***/ }),

/***/ "../survey-creator-react/src/Navigation.tsx":
/*!**************************************************!*\
  !*** ../survey-creator-react/src/Navigation.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyNavigation: () => (/* binding */ SurveyNavigation)
/* harmony export */ });
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_0__);
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

var SurveyNavigation = /** @class */ (function (_super) {
    __extends(SurveyNavigation, _super);
    function SurveyNavigation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onPropChangedHandler = function (sender, options) {
            if (_this.isRendering)
                return;
            var reactiveProps = [
                "showProgressBar",
                "progressBarType",
                "currentPageValue"
            ];
            if (reactiveProps.indexOf(options.name) < 0)
                return;
            var val = {};
            for (var i = 0; i < reactiveProps.length; i++) {
                var propName = reactiveProps[i];
                val[propName] = _this.survey[propName];
            }
            _this.setState(val);
        };
        return _this;
    }
    SurveyNavigation.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.setHandler();
    };
    SurveyNavigation.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.setHandler();
    };
    SurveyNavigation.prototype.setHandler = function () {
        if (!this.survey ||
            this.survey.onPropertyChanged.hasFunc(this.onPropChangedHandler))
            return;
        this.survey.onPropertyChanged.add(this.onPropChangedHandler);
    };
    SurveyNavigation.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.survey) {
            this.survey.onPropertyChanged.remove(this.onPropChangedHandler);
        }
    };
    Object.defineProperty(SurveyNavigation.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyNavigation.prototype, "location", {
        get: function () {
            return this.props.location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyNavigation.prototype, "isTop", {
        get: function () {
            return this.location == "top";
        },
        enumerable: false,
        configurable: true
    });
    SurveyNavigation.prototype.canRender = function () {
        return this.isTop
            ? this.survey.isShowProgressBarOnTop
            : this.survey.isShowProgressBarOnBottom;
    };
    SurveyNavigation.prototype.renderElement = function () {
        return survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement(this.survey.getProgressTypeComponent(), { survey: this.survey, css: this.survey.css, isTop: this.isTop });
    };
    return SurveyNavigation;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));



/***/ }),

/***/ "../survey-creator-react/src/PageNavigator.tsx":
/*!*****************************************************!*\
  !*** ../survey-creator-react/src/PageNavigator.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyPageNavigator: () => (/* binding */ SurveyPageNavigator),
/* harmony export */   SurveyPageNavigatorItem: () => (/* binding */ SurveyPageNavigatorItem)
/* harmony export */ });
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "survey-js-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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





var SurveyPageNavigator = /** @class */ (function (_super) {
    __extends(SurveyPageNavigator, _super);
    function SurveyPageNavigator(props) {
        var _this = _super.call(this, props) || this;
        _this.containerRef = survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createRef();
        return _this;
    }
    SurveyPageNavigator.prototype.createModel = function (props) {
        if (this.model) {
            this.model.dispose();
        }
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_2__.PageNavigatorViewModel(props.pagesController, props.pageEditMode);
    };
    SurveyPageNavigator.prototype.getUpdatedModelProps = function () {
        return ["pagesController", "pageEditMode"];
    };
    SurveyPageNavigator.prototype.getStateElement = function () {
        return this.model;
    };
    SurveyPageNavigator.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.props.pageEditMode !== "bypage") {
            var el = this.containerRef.current;
            this.model.attachToUI(el);
        }
    };
    SurveyPageNavigator.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.model.stopItemsContainerHeightObserver();
        this.model.setScrollableContainer(undefined);
    };
    SurveyPageNavigator.prototype.renderElement = function () {
        var _this = this;
        var className = "svc-page-navigator__selector svc-page-navigator__button";
        if (this.model.isPopupOpened)
            className += " svc-page-navigator__button--pressed";
        return (survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-page-navigator", ref: this.containerRef, style: { display: this.model.visible ? "flex" : "none" } },
            survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null,
                (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { role: "button", className: className, onClick: function () { return _this.model.togglePageSelector(); }, title: this.model.pageSelectorCaption },
                    survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { className: "svc-page-navigator__button-icon", iconName: this.model.icon, size: "auto", title: this.model.pageSelectorCaption }))),
                survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.Popup, { model: this.model.popupModel })),
            survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, this.model.visibleItems.map(function (item) { return (survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement(SurveyPageNavigatorItem, { key: item.id, item: item })); }))));
    };
    return SurveyPageNavigator;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_3__.CreatorModelElement));

var SurveyPageNavigatorItem = /** @class */ (function (_super) {
    __extends(SurveyPageNavigatorItem, _super);
    function SurveyPageNavigatorItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyPageNavigatorItem.prototype.getStateElement = function () {
        return this.props.item;
    };
    SurveyPageNavigatorItem.prototype.renderElement = function () {
        var item = this.props.item;
        var className = "svc-page-navigator-item-content";
        if ((0,survey_core__WEBPACK_IMPORTED_MODULE_0__.unwrap)(item.active)) {
            className += " svc-page-navigator-item--selected";
        }
        if ((0,survey_core__WEBPACK_IMPORTED_MODULE_0__.unwrap)(item.disabled)) {
            className += " svc-page-navigator-item--disabled";
        }
        return (survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-page-navigator-item" }, (0,survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { role: "button", className: className, onClick: function (e) {
                item.action(item);
                e.stopPropagation();
            } },
            survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-page-navigator-item__dot", title: item.title },
                survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-page-navigator-item__dot-content" })),
            survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-page-navigator-item__banner" },
                survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "svc-page-navigator-item__text" }, item.title),
                survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "svc-page-navigator-item__dot" },
                    survey_react_ui__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "svc-page-navigator-item__dot-content" })))))));
    };
    return SurveyPageNavigatorItem;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_3__.CreatorModelElement));



/***/ }),

/***/ "../survey-creator-react/src/QuestionEditorContent.tsx":
/*!*************************************************************!*\
  !*** ../survey-creator-react/src/QuestionEditorContent.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionEditorContentComponent: () => (/* binding */ QuestionEditorContentComponent)
/* harmony export */ });
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "survey-js-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_0__);
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


var QuestionEditorContentComponent = /** @class */ (function (_super) {
    __extends(QuestionEditorContentComponent, _super);
    function QuestionEditorContentComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(QuestionEditorContentComponent.prototype, "survey", {
        get: function () {
            return this.props.survey;
        },
        enumerable: false,
        configurable: true
    });
    QuestionEditorContentComponent.prototype.createQuestionElement = function (question) {
        return survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.createQuestion(!question.isDefaultRendering || question.isDefaultRendering()
            ? question.getTemplate()
            : question.getComponentName(), {
            question: question,
            isDisplayMode: question.isInputReadOnly,
            creator: this,
        });
    };
    QuestionEditorContentComponent.prototype.questionTitleLocation = function () {
        return this.survey.questionTitleLocation;
    };
    QuestionEditorContentComponent.prototype.questionErrorLocation = function () {
        return this.survey.questionErrorLocation;
    };
    QuestionEditorContentComponent.prototype.renderError = function (key, error, cssClasses) {
        return null;
    };
    QuestionEditorContentComponent.prototype.render = function () {
        var question = this.survey.getAllQuestions()[0];
        return (survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: this.props.style },
            survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestion, { creator: this, element: question })));
    };
    return QuestionEditorContentComponent;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.Component));

survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-question-editor-content", function (props) {
    return survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement(QuestionEditorContentComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/QuestionEmbeddedSurvey.tsx":
/*!**************************************************************!*\
  !*** ../survey-creator-react/src/QuestionEmbeddedSurvey.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyElementEmbeddedSurvey: () => (/* binding */ SurveyElementEmbeddedSurvey)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var SurveyElementEmbeddedSurvey = /** @class */ (function (_super) {
    __extends(SurveyElementEmbeddedSurvey, _super);
    function SurveyElementEmbeddedSurvey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyElementEmbeddedSurvey.prototype, "embeddedSurvey", {
        get: function () {
            return (this.props.element || this.props.question);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyElementEmbeddedSurvey.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyElementEmbeddedSurvey.prototype.render = function () {
        if (!this.embeddedSurvey)
            return null;
        var survey = this.embeddedSurvey.embeddedSurvey;
        if (!survey || !survey.currentPage)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyPage, { survey: survey, page: survey.currentPage, css: survey.css, creator: this.creator });
    };
    return SurveyElementEmbeddedSurvey;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.registerQuestion("embeddedsurvey", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyElementEmbeddedSurvey, props);
});


/***/ }),

/***/ "../survey-creator-react/src/QuestionError.tsx":
/*!*****************************************************!*\
  !*** ../survey-creator-react/src/QuestionError.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionErrorComponent: () => (/* binding */ QuestionErrorComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { "aria-hidden": "true", iconName: "icon-alert_24x24", size: "24", className: this.props.cssClasses.error.icon }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.props.cssClasses.error.item || undefined },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyLocStringViewer, { locStr: this.props.error.locText }))));
    };
    return QuestionErrorComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-question-error", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(QuestionErrorComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/QuestionLinkValue.tsx":
/*!*********************************************************!*\
  !*** ../survey-creator-react/src/QuestionLinkValue.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionLinkValue: () => (/* binding */ SurveyQuestionLinkValue)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionButton */ "../survey-creator-react/src/ActionButton.tsx");
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




var SurveyQuestionLinkValue = /** @class */ (function (_super) {
    __extends(SurveyQuestionLinkValue, _super);
    function SurveyQuestionLinkValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionLinkValue.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionLinkValue.prototype.renderClear = function () {
        var _this = this;
        var showClear = this.questionBase.showClear;
        if (!this.questionBase.isReadOnly && showClear) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_2__.ActionButton, { classes: this.question.linkClearButtonCssClasses, click: function () { return _this.question.doClearClick(); }, text: survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.editorLocalization.getString("pe.clear") }));
        }
        else {
            return null;
        }
    };
    SurveyQuestionLinkValue.prototype.renderElement = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_2__.ActionButton, { classes: this.question.linkSetButtonCssClasses, click: function () { return _this.question.doLinkClick(); }, selected: this.question.isSelected, disabled: !this.question.isClickable, text: this.question.linkValueText, title: this.question.tooltip, iconName: this.question.iconName }),
            this.renderClear()));
    };
    return SurveyQuestionLinkValue;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.registerQuestion("linkvalue", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionLinkValue, props);
});


/***/ }),

/***/ "../survey-creator-react/src/Results.tsx":
/*!***********************************************!*\
  !*** ../survey-creator-react/src/Results.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyResults: () => (/* binding */ SurveyResults),
/* harmony export */   SurveyResultsByRow: () => (/* binding */ SurveyResultsByRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionButton */ "../survey-creator-react/src/ActionButton.tsx");
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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





var SurveyResults = /** @class */ (function (_super) {
    __extends(SurveyResults, _super);
    function SurveyResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyResults.prototype.createModel = function (props) {
        if (this.props.survey) {
            this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.SurveyResultsModel(props.survey);
        }
    };
    SurveyResults.prototype.getUpdatedModelProps = function () {
        return ["survey"];
    };
    SurveyResults.prototype.getStateElement = function () {
        return this.model;
    };
    SurveyResults.prototype.render = function () {
        var _this = this;
        if (!this.model) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svd-test-results" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svd-test-results__content" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svd-test-results__header" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svd-test-results__header-text" }, this.model.surveyResultsText),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svd-test-results__header-types" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_2__.ActionButton, { click: function () { return _this.model.selectTableClick(); }, text: this.model.surveyResultsTableText, selected: this.model.isTableSelected, disabled: false }),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_2__.ActionButton, { click: function () { return _this.model.selectJsonClick(); }, text: this.model.surveyResultsJsonText, selected: this.model.isJsonSelected, disabled: false }))),
                this.renderResultAsText(),
                this.renderResultAsTable())));
    };
    SurveyResults.prototype.renderResultAsText = function () {
        if (this.model.resultViewType !== "text") {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svd-test-results__text svd-light-bg-color" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.model.resultText)));
    };
    SurveyResults.prototype.renderResultAsTable = function () {
        if (this.model.resultViewType !== "table") {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svd-test-results__table svd-light-bg-color" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { className: "svd-light-background-color" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { key: 1, className: "svd-dark-border-color" }, this.model.resultsTitle),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", { key: 2, className: "svd-dark-border-color" }, this.model.resultsDisplayValue))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, SurveyResults.renderRows(this.model.resultData)))));
    };
    SurveyResults.renderRows = function (data) {
        var rows = [];
        for (var i = 0; i < data.length; i++) {
            rows.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyResultsByRow, { key: i + 1, row: data[i] }));
        }
        return rows;
    };
    return SurveyResults;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_3__.CreatorModelElement));

var SurveyResultsByRow = /** @class */ (function (_super) {
    __extends(SurveyResultsByRow, _super);
    function SurveyResultsByRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyResultsByRow.prototype, "row", {
        get: function () {
            return this.props.row;
        },
        enumerable: false,
        configurable: true
    });
    SurveyResultsByRow.prototype.getStateElement = function () {
        return this.row;
    };
    SurveyResultsByRow.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", { onClick: function () { return _this.row.toggle(); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { key: 1, style: { paddingLeft: this.row.textMargin }, className: "svd-dark-border-color" },
                    this.row.isNode ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { left: this.row.markerMargin }, className: "svd-test-results__marker " + (this.row.collapsed ? "" : "svd-test-results__marker--expanded") },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: "icon-expand_16x16", size: 16 }))) : null,
                    this.row.question ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyLocStringViewer, { locStr: this.row.question.locTitle }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.row.title)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", { key: 2, className: this.row.isNode ? "svd-test-results__node-value" : "svd-dark-border-color" }, this.row.getString(this.row.displayValue)))),
            this.row.isNode && !this.row.collapsed ? SurveyResults.renderRows(this.row.data) : null));
    };
    return SurveyResultsByRow;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_3__.CreatorModelElement));



/***/ }),

/***/ "../survey-creator-react/src/StringEditor.tsx":
/*!****************************************************!*\
  !*** ../survey-creator-react/src/StringEditor.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyLocStringEditor: () => (/* binding */ SurveyLocStringEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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
        var _a;
        var _this = _super.call(this, props) || this;
        _this.onChangedHandler = function (sender, options) {
            _this.setState({ changed: !!_this.state && _this.state.changed ? _this.state.changed + 1 : 1 });
        };
        _this.onBlur = function (event) {
            if (_this.svStringEditorRef.current) {
                _this.svStringEditorRef.current.spellcheck = false;
            }
            _this.locString["__isEditing"] = false;
            _this.justFocused = false;
            _this.baseModel.onBlur(event.nativeEvent);
            return _this.baseModel.errorText;
        };
        _this.onCompositionStart = function (event) {
            _this.baseModel.onCompositionStart(event.nativeEvent);
        };
        _this.onCompositionEnd = function (event) {
            _this.baseModel.onCompositionEnd(event.nativeEvent);
        };
        _this.onBeforeInput = function (event) {
            _this.baseModel.onBeforeInput(event);
        };
        _this.onInput = function (event) {
            _this.baseModel.onInput(event.nativeEvent);
        };
        _this.onPaste = function (event) {
            _this.baseModel.onPaste(event.nativeEvent);
        };
        _this.justFocused = false;
        _this.onFocus = function (event) {
            _this.baseModel.onFocus(event.nativeEvent);
            _this.justFocused = true;
        };
        _this.onKeyDown = function (event) {
            return _this.baseModel.onKeyDown(event.nativeEvent);
        };
        _this.onKeyUp = function (event) {
            return _this.baseModel.onKeyUp(event.nativeEvent);
        };
        _this.onMouseUp = function (event) {
            return _this.baseModel.onMouseUp(event.nativeEvent);
        };
        _this.done = function (event) {
            _this.baseModel.done(event);
            _this.locString["__isEditing"] = false;
        };
        _this.edit = function (event) {
            _this.svStringEditorRef.current.focus();
            // document.execCommand('selectAll', false, null);
            _this.locString["__isEditing"] = true;
            _this.baseModel.onClick(event);
        };
        _this.htmlValue = {
            __html: (_a = _this.locString) === null || _a === void 0 ? void 0 : _a.renderedHtml
        };
        _this.state = { changed: 0 };
        _this.svStringEditorRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SurveyLocStringEditor.prototype.createModel = function (props) {
        if (this.baseModel) {
            this.baseModel.dispose();
        }
        this.baseModel = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.StringEditorViewModelBase(this.locString, this.creator);
    };
    SurveyLocStringEditor.prototype.getUpdatedModelProps = function () {
        return ["creator", "locString"];
    };
    Object.defineProperty(SurveyLocStringEditor.prototype, "locString", {
        get: function () {
            return this.props.locStr.locStr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyLocStringEditor.prototype, "creator", {
        get: function () {
            return this.props.locStr.creator;
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
    SurveyLocStringEditor.prototype.getStateElement = function () {
        return this.baseModel;
    };
    Object.defineProperty(SurveyLocStringEditor.prototype, "errorText", {
        get: function () {
            return this.baseModel.errorText;
        },
        enumerable: false,
        configurable: true
    });
    SurveyLocStringEditor.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        if (!this.locString)
            return;
        this.baseModel.setLocString(this.locString);
        this.baseModel.getEditorElement = function () { return _this.svStringEditorRef.current; };
        this.baseModel.blurEditor = function () {
            _this.svStringEditorRef.current.blur();
            _this.svStringEditorRef.current.spellcheck = false;
        };
        this.baseModel.afterRender();
        this.locString.onStringChanged.add(this.onChangedHandler);
        if (this.locString["__isEditing"]) {
            this.svStringEditorRef.current.focus();
            // document.execCommand('selectAll', false, null);
        }
    };
    SurveyLocStringEditor.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        this.baseModel.setLocString(this.locString);
        this.baseModel.afterRender();
        this.locString.onStringChanged.add(this.onChangedHandler);
    };
    SurveyLocStringEditor.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.baseModel.detachFromUI();
        if (!this.locString)
            return;
        this.locString.onStringChanged.remove(this.onChangedHandler);
    };
    Object.defineProperty(SurveyLocStringEditor.prototype, "placeholder", {
        get: function () {
            return this.baseModel.placeholder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyLocStringEditor.prototype, "contentEditable", {
        get: function () {
            return this.baseModel.contentEditable;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyLocStringEditor.prototype, "className", {
        get: function () {
            return this.baseModel.className(this.locString.renderedHtml);
        },
        enumerable: false,
        configurable: true
    });
    SurveyLocStringEditor.prototype.render = function () {
        if (!this.locString) {
            return null;
        }
        var control = null;
        if (this.locString.hasHtml) {
            if (this.htmlValue.__html !== this.locString.renderedHtml) {
                this.htmlValue = { __html: this.locString.renderedHtml };
            }
            control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { role: "textbox", ref: this.svStringEditorRef, className: "sv-string-editor sv-string-editor--html", contentEditable: this.contentEditable, spellCheck: false, "aria-placeholder": this.placeholder, "aria-label": this.placeholder || "content editable", suppressContentEditableWarning: true, tabIndex: this.baseModel.tabIndex, 
                // style={this.style}
                dangerouslySetInnerHTML: this.htmlValue, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeyDown, onMouseUp: this.onMouseUp, onClick: this.edit }));
        }
        else {
            control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { role: "textbox", ref: this.svStringEditorRef, className: "sv-string-editor", contentEditable: this.contentEditable, tabIndex: this.baseModel.tabIndex, spellCheck: false, "aria-placeholder": this.placeholder, "aria-label": this.placeholder || "content editable", suppressContentEditableWarning: true, 
                // style={this.style}
                key: this.locString.renderedHtml, onBlur: this.onBlur, onBeforeInput: this.onBeforeInput, onInput: this.onInput, onPaste: this.onPaste, onCompositionStart: this.onCompositionStart, onCompositionEnd: this.onCompositionEnd, onFocus: this.onFocus, onKeyDown: this.onKeyDown, onKeyUp: this.onKeyUp, onMouseUp: this.onMouseUp, onClick: this.edit }, this.locString.renderedHtml));
        }
        var counter = this.baseModel.showCharacterCounter ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.CharacterCounterComponent, { counter: this.baseModel.characterCounter, remainingCharacterCounter: this.baseModel.getCharacterCounterClass })) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.className },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-string-editor__content" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-string-editor__border svc-string-editor__border--hover", onClick: this.edit }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-string-editor__border svc-string-editor__border--focus", onClick: this.edit }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-string-editor__input" },
                    control,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-string-editor__controls", onClick: this.edit }),
                    counter)),
            this.errorText ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-string-editor__error" }, this.errorText) : ""));
    };
    return SurveyLocStringEditor;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_2__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.editableStringRendererName, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyLocStringEditor, props);
});


/***/ }),

/***/ "../survey-creator-react/src/SurveyCreator.tsx":
/*!*****************************************************!*\
  !*** ../survey-creator-react/src/SurveyCreator.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyCreator: () => (/* binding */ SurveyCreator),
/* harmony export */   SurveyCreatorComponent: () => (/* binding */ SurveyCreatorComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TabbedMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabbedMenu */ "../survey-creator-react/src/TabbedMenu.tsx");
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




var SurveyCreatorComponent = /** @class */ (function (_super) {
    __extends(SurveyCreatorComponent, _super);
    function SurveyCreatorComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.rootNode = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Object.defineProperty(SurveyCreatorComponent.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorComponent.prototype.getStateElement = function () {
        return this.creator;
    };
    Object.defineProperty(SurveyCreatorComponent.prototype, "style", {
        get: function () {
            return this.props.style;
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        if (this.creator !== prevProps.creator) {
            if (prevProps.creator) {
                prevProps.creator.unsubscribeRootElement();
            }
            if (this.creator && this.rootNode.current) {
                this.creator.setRootElement(this.rootNode.current);
            }
        }
    };
    SurveyCreatorComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.creator.setRootElement(this.rootNode.current);
    };
    SurveyCreatorComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.creator.unsubscribeRootElement();
    };
    SurveyCreatorComponent.prototype.renderElement = function () {
        var creator = this.props.creator;
        if (creator.isCreatorDisposed)
            return null;
        var areaClassName = "svc-full-container svc-creator__area svc-flex-column" + (this.props.creator.haveCommercialLicense ? "" : " svc-creator__area--with-banner");
        var contentWrapperClassName = "svc-creator__content-wrapper svc-flex-row" + (this.props.creator.isMobileView ? " svc-creator__content-wrapper--footer-toolbar" : "");
        var fullContainerClassName = "svc-flex-row svc-full-container" + (" svc-creator__side-bar--" + this.creator.sidebarLocation);
        var creatorStyles = {};
        (0,survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.assign)(creatorStyles, this.style, this.props.creator.themeVariables);
        var licenseBanner = null;
        if (!this.props.creator.haveCommercialLicense) {
            var htmlValue = { __html: this.props.creator.licenseText };
            licenseBanner = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-creator__banner" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-creator__non-commercial-text", dangerouslySetInnerHTML: htmlValue })));
        }
        //AM: width unrecognized by react
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.creator.getRootCss(), ref: this.rootNode, style: creatorStyles },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgBundleComponent, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.PopupModal, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: areaClassName },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: fullContainerClassName },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-flex-column svc-flex-row__element svc-flex-row__element--growing" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-top-bar" },
                            (creator.showTabs ?
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-tabbed-menu-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabbedMenu__WEBPACK_IMPORTED_MODULE_2__.TabbedMenuComponent, { model: creator.tabbedMenu })) : null),
                            (creator.showToolbar ?
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-toolbar-wrapper" },
                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: creator.toolbar }))
                                : null)),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: contentWrapperClassName },
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-creator__content-holder svc-flex-column" }, this.renderActiveTab())),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-footer-bar" }, (creator.isMobileView ?
                            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-toolbar-wrapper" },
                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: creator.footerToolbar }))
                            : null))),
                    this.renderSidebar()),
                licenseBanner,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.NotifierComponent, { notifier: creator.notifier }))));
    };
    SurveyCreatorComponent.prototype.renderActiveTab = function () {
        var creator = this.props.creator;
        for (var i = 0; i < creator.tabs.length; i++) {
            if (creator.tabs[i].id === creator.activeTab) {
                return this.renderCreatorTab(creator.tabs[i]);
            }
        }
        return null;
    };
    SurveyCreatorComponent.prototype.renderCreatorTab = function (tab) {
        if (tab.visible === false) {
            return null;
        }
        var creator = this.props.creator;
        var component = !!tab.renderTab
            ? tab.renderTab()
            : react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement(tab.componentContent, {
                creator: creator,
                survey: creator.survey,
                data: tab.data.model
            });
        var className = "svc-creator-tab" + (creator.toolboxLocation == "right" ? " svc-creator__toolbox--right" : "");
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { role: "tabpanel", key: tab.id, id: "scrollableDiv-" + tab.id, "aria-labelledby": "tab-" + tab.id, className: className }, component));
    };
    SurveyCreatorComponent.prototype.renderSidebar = function () {
        if (!!this.creator.sidebar) {
            return react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement("svc-side-bar", { model: this.creator.sidebar });
        }
        else {
            return null;
        }
    };
    return SurveyCreatorComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

var SurveyCreator = /** @class */ (function (_super) {
    __extends(SurveyCreator, _super);
    function SurveyCreator(options, options2) {
        if (options === void 0) { options = {}; }
        return _super.call(this, options, options2) || this;
    }
    SurveyCreator.prototype.render = function (target) {
        // eslint-disable-next-line no-console
        console.error("The render method is deprecated. Use SurveyCreatorComponent instead.");
    };
    //ISurveyCreator
    SurveyCreator.prototype.createQuestionElement = function (question) {
        return react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.createQuestion(question.isDefaultRendering()
            ? question.getTemplate()
            : question.getComponentName(), {
            question: question,
            isDisplayMode: question.isReadOnly,
            creator: this
        });
    };
    SurveyCreator.prototype.renderError = function (key, error, cssClasses) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: key },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: cssClasses.error.icon, "aria-hidden": "true" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: cssClasses.error.item },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyLocStringViewer, { locStr: error.locText }))));
    };
    SurveyCreator.prototype.questionTitleLocation = function () {
        return this.survey.questionTitleLocation;
    };
    SurveyCreator.prototype.questionErrorLocation = function () {
        return this.survey.questionErrorLocation;
    };
    return SurveyCreator;
}(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.SurveyCreatorModel));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("survey-widget", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Survey, props);
});


/***/ }),

/***/ "../survey-creator-react/src/Switcher.tsx":
/*!************************************************!*\
  !*** ../survey-creator-react/src/Switcher.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwitcherComponent: () => (/* binding */ SwitcherComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var SwitcherComponent = /** @class */ (function (_super) {
    __extends(SwitcherComponent, _super);
    function SwitcherComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SwitcherComponent.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    SwitcherComponent.prototype.getStateElement = function () {
        return this.item;
    };
    SwitcherComponent.prototype.renderElement = function () {
        var _this = this;
        var tooltip = this.item.tooltip || this.item.title;
        var title = this.item.hasTitle ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-switcher__title" }, this.item.title) : null;
        var button = (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: this.item.getActionBarItemCss(), type: "button", disabled: this.item.disabled, onClick: function (args) { return _this.item.action(_this.item, _this.item.getIsTrusted(args)); }, title: tooltip, "aria-checked": this.item.ariaChecked, "aria-expanded": this.item.ariaExpanded, role: this.item.ariaRole },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.item.getSwitcherIconCss() },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-switcher__icon-thumb" })),
            title), this.item, { processEsc: false });
        return button;
    };
    return SwitcherComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwitcherComponent);
react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-switcher", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SwitcherComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/TabbedMenu.tsx":
/*!**************************************************!*\
  !*** ../survey-creator-react/src/TabbedMenu.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabbedMenuComponent: () => (/* binding */ TabbedMenuComponent),
/* harmony export */   TabbedMenuItemComponent: () => (/* binding */ TabbedMenuItemComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var TabbedMenuComponent = /** @class */ (function (_super) {
    __extends(TabbedMenuComponent, _super);
    function TabbedMenuComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Object.defineProperty(TabbedMenuComponent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    TabbedMenuComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabbedMenuComponent.prototype.renderElement = function () {
        var items = this.model.renderedActions.map(function (item) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabbedMenuItemWrapper, { item: item, key: item.renderedId }); });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.rootRef, className: "svc-tabbed-menu", role: "tablist", style: this.model.getRootStyle() }, items));
    };
    TabbedMenuComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        var container = this.rootRef.current;
        if (!container)
            return;
        this.model.initResponsivityManager(container);
    };
    TabbedMenuComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        var container = this.rootRef.current;
        if (!container)
            return;
        this.model.initResponsivityManager(container);
    };
    TabbedMenuComponent.prototype.componentWillUnmount = function () {
        this.model.resetResponsivityManager();
        _super.prototype.componentWillUnmount.call(this);
    };
    return TabbedMenuComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

var TabbedMenuItemWrapper = /** @class */ (function (_super) {
    __extends(TabbedMenuItemWrapper, _super);
    function TabbedMenuItemWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.ref = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Object.defineProperty(TabbedMenuItemWrapper.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    TabbedMenuItemWrapper.prototype.getStateElement = function () {
        return this.item;
    };
    TabbedMenuItemWrapper.prototype.renderElement = function () {
        var css = "svc-tabbed-menu-item-container";
        if (this.item.css) {
            css += " " + this.item.css;
        }
        css += (!this.item.isVisible ? " sv-action--hidden" : "");
        var component = react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement(this.item.component || "svc-tabbed-menu-item", { item: this.item });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: this.item.id, className: css, ref: this.ref },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sv-action__content" }, component)));
    };
    TabbedMenuItemWrapper.prototype.componentDidMount = function () {
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
    TabbedMenuItemWrapper.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.item.updateModeCallback = undefined;
    };
    return TabbedMenuItemWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));
var TabbedMenuItemComponent = /** @class */ (function (_super) {
    __extends(TabbedMenuItemComponent, _super);
    function TabbedMenuItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabbedMenuItemComponent.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    TabbedMenuItemComponent.prototype.getStateElement = function () {
        return this.item;
    };
    TabbedMenuItemComponent.prototype.render = function () {
        var item = this.item;
        return ((0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { role: "tab", id: "tab-" + item.id, "aria-selected": item.active, "aria-controls": "scrollableDiv-" + item.id, className: item.getRootCss(), onClick: function () { return item.action(item); } },
            item.hasTitle ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: item.getTitleCss() }, item.title) : null,
            item.hasIcon ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: item.iconName, className: item.getIconCss(), size: "auto", title: item.tooltip || item.title }) : null)));
    };
    return TabbedMenuItemComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-tabbed-menu-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabbedMenuItemComponent, props);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabbedMenuComponent);


/***/ }),

/***/ "../survey-creator-react/src/adorners/CellQuestion.tsx":
/*!*************************************************************!*\
  !*** ../survey-creator-react/src/adorners/CellQuestion.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellQuestionAdornerComponent: () => (/* binding */ CellQuestionAdornerComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
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




var CellQuestionAdornerComponent = /** @class */ (function (_super) {
    __extends(CellQuestionAdornerComponent, _super);
    function CellQuestionAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellQuestionAdornerComponent.prototype.createModel = function (props) {
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_2__.QuestionAdornerViewModel(props.componentData, props.question, null);
    };
    CellQuestionAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    CellQuestionAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "componentData"];
    };
    CellQuestionAdornerComponent.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "data-sv-drop-target-survey-element": this.model.element.name, className: "svc-question__adorner" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: " svc-question__content--in-popup svc-question__content" }, this.props.element))));
    };
    return CellQuestionAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_1__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-cell-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CellQuestionAdornerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/CellQuestionDropdown.tsx":
/*!*********************************************************************!*\
  !*** ../survey-creator-react/src/adorners/CellQuestionDropdown.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CellQuestionDropdownAdornerComponent: () => (/* binding */ CellQuestionDropdownAdornerComponent)
/* harmony export */ });
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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




var CellQuestionDropdownAdornerComponent = /** @class */ (function (_super) {
    __extends(CellQuestionDropdownAdornerComponent, _super);
    function CellQuestionDropdownAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellQuestionDropdownAdornerComponent.prototype.createModel = function (props) {
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_0__.QuestionAdornerViewModel(props.componentData, props.question, null);
    };
    CellQuestionDropdownAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "componentData"];
    };
    CellQuestionDropdownAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    CellQuestionDropdownAdornerComponent.prototype.render = function () {
        var question = this.props.question;
        var textStyle = this.props.question.textStyle;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { "data-sv-drop-target-survey-element": this.model.element.name, className: "svc-question__adorner" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: " svc-question__content--in-popup svc-question__content" },
                    this.props.element,
                    react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-question__dropdown-choices" }, question.visibleChoices.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-question__dropdown-choice", key: "editable_choice_".concat(index) }, react__WEBPACK_IMPORTED_MODULE_1__.ReactSurveyElementsWrapper.wrapItemValue(question.survey, react__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement("survey-radiogroup-item", {
                        question: question,
                        cssClasses: question.cssClasses,
                        isDisplayMode: true,
                        item: item,
                        textStyle: textStyle,
                        index: index,
                        isChecked: question.value === item.value
                    }), question, item))); }))))));
    };
    return CellQuestionDropdownAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_2__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("svc-cell-dropdown-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(CellQuestionDropdownAdornerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/Page.tsx":
/*!*****************************************************!*\
  !*** ../survey-creator-react/src/adorners/Page.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatorSurveyPageComponent: () => (/* binding */ CreatorSurveyPageComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events */ "../survey-creator-react/src/events.ts");
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





var PageElementContent = react__WEBPACK_IMPORTED_MODULE_0__.memo(function (_a) {
    var page = _a.page, survey = _a.survey, creator = _a.creator;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyPage, { page: page, survey: survey, creator: creator });
});
PageElementContent.displayName = "PageElementContent";
var CreatorSurveyPageComponent = /** @class */ (function (_super) {
    __extends(CreatorSurveyPageComponent, _super);
    function CreatorSurveyPageComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    CreatorSurveyPageComponent.prototype.createModel = function (props) {
        if (this.model) {
            this.model.attachToUI(props.page, this.rootRef.current);
        }
        this.model = this.createPageAdorner(props.creator, props.page);
        this.model.isGhost = this.props.isGhost;
    };
    CreatorSurveyPageComponent.prototype.createPageAdorner = function (creator, page) {
        return new survey_creator_core__WEBPACK_IMPORTED_MODULE_2__.PageAdorner(creator, page);
    };
    CreatorSurveyPageComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var res = _super.prototype.shouldComponentUpdate.call(this, nextProps, nextState);
        if (this.model) {
            this.model.isGhost = this.props.isGhost;
        }
        return res;
    };
    CreatorSurveyPageComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
    };
    CreatorSurveyPageComponent.prototype.getUpdatedModelProps = function () {
        return ["creator", "page"];
    };
    CreatorSurveyPageComponent.prototype.getStateElement = function () {
        return this.model;
    };
    CreatorSurveyPageComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.attachToUI(this.props.page, this.rootRef.current);
        this.model.isGhost = this.props.isGhost;
    };
    CreatorSurveyPageComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.model.detachFromUI();
    };
    CreatorSurveyPageComponent.prototype.canRender = function () {
        return _super.prototype.canRender.call(this);
    };
    CreatorSurveyPageComponent.prototype.renderElement = function () {
        var _this = this;
        if (!this.props.page)
            return null;
        return ((0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.rootRef, id: this.props.page.id, "data-sv-drop-target-survey-page": this.model.dropTargetName, className: "svc-page__content " + this.model.css, onClick: function (e) {
                return _this.model.select(_this.model, new _events__WEBPACK_IMPORTED_MODULE_3__.ReactMouseEvent(e));
            }, onDoubleClick: function (e) { return _this.model.dblclick(e.nativeEvent); }, onMouseLeave: function (e) { return _this.model.hover(e.nativeEvent, e.currentTarget); }, onMouseOver: function (e) { return _this.model.hover(e.nativeEvent, e.currentTarget); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-question__drop-indicator svc-question__drop-indicator--top" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-question__drop-indicator svc-question__drop-indicator--bottom" }),
            this.renderContent(),
            this.renderPlaceholder(),
            this.renderHeader(),
            this.renderFooter())));
    };
    CreatorSurveyPageComponent.prototype.renderPlaceholder = function () {
        if (!this.model.showPlaceholder)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-page__placeholder_frame" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-panel__placeholder_frame" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-panel__placeholder" }, this.model.placeholderText))));
    };
    CreatorSurveyPageComponent.prototype.renderContent = function () {
        if (!this.model.needRenderContent) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-page__loading-content" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.LoadingIndicatorComponent, null));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(PageElementContent, { page: this.props.page, survey: this.props.survey, creator: this.props.creator }));
    };
    CreatorSurveyPageComponent.prototype.renderHeader = function () {
        var _this = this;
        var actions = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-page__content-actions" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: this.model.actionContainer }),
            (this.model.topActionContainer.hasActions ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: this.model.topActionContainer }) : null)));
        if (this.model.isGhost || !this.model.allowDragging) {
            return actions;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-question__drag-area", onPointerDown: function (event) { return _this.model.onPointerDown(event); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { className: "svc-question__drag-element", size: "auto", iconName: "icon-drag-area-indicator_24x16" }),
            actions));
    };
    CreatorSurveyPageComponent.prototype.renderFooter = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: this.model.footerActionsBar });
    };
    return CreatorSurveyPageComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_1__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-page", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CreatorSurveyPageComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/Panel.tsx":
/*!******************************************************!*\
  !*** ../survey-creator-react/src/adorners/Panel.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelAdornerComponent: () => (/* binding */ PanelAdornerComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question */ "../survey-creator-react/src/adorners/Question.tsx");
/* harmony import */ var _AddQuestionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AddQuestionButton */ "../survey-creator-react/src/AddQuestionButton.tsx");
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




var PanelAdornerComponent = /** @class */ (function (_super) {
    __extends(PanelAdornerComponent, _super);
    function PanelAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelAdornerComponent.prototype.renderElementPlaceholder = function () {
        var _this = this;
        if (!this.model.isEmptyElement) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-panel__placeholder_frame-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-panel__placeholder_frame" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-panel__placeholder" }, this.model.placeholderText),
                this.model.showAddQuestionButton ? (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-panel__add-new-question svc-action-button", onClick: function (e) {
                        e.stopPropagation();
                        _this.model.addNewQuestion();
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { className: "svc-panel__add-new-question-icon", iconName: "icon-add_24x24", size: "auto" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-add-new-item-button__text" }, this.model.addNewQuestionText))) : null)));
    };
    PanelAdornerComponent.prototype.disableTabStop = function () {
        return true;
    };
    PanelAdornerComponent.prototype.renderFooter = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            !this.model.isEmptyElement && this.model.element.isPanel && this.model.showAddQuestionButton ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-panel__add-new-question-container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-panel__question-type-selector-popup" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Popup, { model: this.model.questionTypeSelectorModel.popupModel })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-panel__add-new-question-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AddQuestionButton__WEBPACK_IMPORTED_MODULE_2__.AddQuestionButtonComponent, { item: { data: this.model }, buttonClass: "svc-action-button", renderPopup: false })))) : null,
            _super.prototype.renderFooter.call(this)));
    };
    return PanelAdornerComponent;
}(_Question__WEBPACK_IMPORTED_MODULE_1__.QuestionAdornerComponent));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-panel", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PanelAdornerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/Question.tsx":
/*!*********************************************************!*\
  !*** ../survey-creator-react/src/adorners/Question.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionAdornerComponent: () => (/* binding */ QuestionAdornerComponent)
/* harmony export */ });
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "../survey-creator-react/src/events.ts");
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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





function QuestionElementContentFunc(props) {
    return props.element;
}
var QuestionElementContent = react__WEBPACK_IMPORTED_MODULE_1__.memo(QuestionElementContentFunc);
QuestionElementContent.displayName = "QuestionElementContent";
var QuestionAdornerComponent = /** @class */ (function (_super) {
    __extends(QuestionAdornerComponent, _super);
    function QuestionAdornerComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_1__.createRef();
        return _this;
    }
    QuestionAdornerComponent.prototype.createModel = function (props) {
        if (this.model) {
            this.model.attachToUI(props.question, this.rootRef.current);
        }
        else {
            this.modelValue = this.createQuestionViewModel(props);
        }
    };
    QuestionAdornerComponent.prototype.createQuestionViewModel = function (props) {
        return new survey_creator_core__WEBPACK_IMPORTED_MODULE_0__.QuestionAdornerViewModel(props.componentData, props.question, null);
    };
    QuestionAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "componentData"];
    };
    Object.defineProperty(QuestionAdornerComponent.prototype, "model", {
        get: function () {
            return this.modelValue;
        },
        enumerable: false,
        configurable: true
    });
    QuestionAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    QuestionAdornerComponent.prototype.renderElement = function () {
        var _this = this;
        var allowInteractions = this.model.element
            .isInteractiveDesignElement;
        var titleForCollapsedState = this.renderQuestionTitle();
        var content = this.renderContent(allowInteractions);
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { ref: this.rootRef, "data-sv-drop-target-survey-element": this.model.element.name || null, className: this.model.rootCss(), onDoubleClick: function (e) { allowInteractions && _this.model.dblclick(e.nativeEvent); e.stopPropagation(); }, onMouseLeave: function (e) { return allowInteractions && _this.model.hover(e.nativeEvent, e.currentTarget); }, onMouseOver: function (e) { return allowInteractions && _this.model.hover(e.nativeEvent, e.currentTarget); } },
            titleForCollapsedState,
            content));
    };
    QuestionAdornerComponent.prototype.disableTabStop = function () {
        return true;
    };
    QuestionAdornerComponent.prototype.renderContent = function (allowInteractions) {
        var _this = this;
        var content = this.model.needToRenderContent ? this.renderElementContent() : null;
        //if (!allowInteractions) return <>{content}{this.renderFooter()}</>;
        return (0,react__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: this.model.css(), onClick: function (e) { return _this.model.select(_this.model, new _events__WEBPACK_IMPORTED_MODULE_2__.ReactMouseEvent(e)); } },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-question__drop-indicator svc-question__drop-indicator--left" }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-question__drop-indicator svc-question__drop-indicator--right" }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-question__drop-indicator svc-question__drop-indicator--top" }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-question__drop-indicator svc-question__drop-indicator--bottom" }),
            allowInteractions ? this.renderHeader() : null,
            content,
            this.model.needToRenderContent ? this.renderFooter() : null), undefined, { disableTabStop: this.disableTabStop() });
    };
    QuestionAdornerComponent.prototype.renderHeader = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement("svc-question-header", { model: this.model });
    };
    QuestionAdornerComponent.prototype.renderFooter = function () {
        var allowInteractions = this.model.element
            .isInteractiveDesignElement;
        return allowInteractions ? react__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement("svc-question-footer", { className: "svc-question__content-actions", model: this.model }) : null;
    };
    QuestionAdornerComponent.prototype.renderCarryForwardBanner = function () {
        if (!this.model.isBannerShowing)
            return null;
        return react__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.createElement("svc-question-banner", this.model.createBannerParams());
    };
    QuestionAdornerComponent.prototype.renderQuestionTitle = function () {
        var _this = this;
        if (!this.model.showHiddenTitle)
            return null;
        var element = this.model.element;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { ref: function (node) { return node && (!_this.model.renderedCollapsed ?
                node.setAttribute("inert", "") : node.removeAttribute("inert")); }, className: this.model.cssCollapsedHiddenHeader }, (element.hasTitle ?
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.TitleElement, { element: element }) :
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: this.model.cssCollapsedHiddenTitle },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "svc-fake-title" }, element.name)))));
    };
    QuestionAdornerComponent.prototype.renderElementContent = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(QuestionElementContent, { element: this.props.element }),
            this.renderElementPlaceholder(),
            this.renderCarryForwardBanner()));
    };
    QuestionAdornerComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.attachToUI(this.props.question, this.rootRef.current);
    };
    QuestionAdornerComponent.prototype.renderElementPlaceholder = function () {
        if (!this.model.isEmptyElement) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-panel__placeholder_frame-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-panel__placeholder_frame" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-panel__placeholder" }, this.model.placeholderText))));
    };
    QuestionAdornerComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.model.detachFromUI();
    };
    return QuestionAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_3__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("svc-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(QuestionAdornerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/QuestionBanner.tsx":
/*!***************************************************************!*\
  !*** ../survey-creator-react/src/adorners/QuestionBanner.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionBanner: () => (/* binding */ QuestionBanner)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionButton */ "../survey-creator-react/src/ActionButton.tsx");
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



var QuestionBanner = /** @class */ (function (_super) {
    __extends(QuestionBanner, _super);
    function QuestionBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionBanner.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-carry-forward-panel-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-carry-forward-panel" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null,
                    this.props.text,
                    " "),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-carry-forward-panel__link" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_1__.ActionButton, { click: function () { return _this.props.onClick(); }, text: this.props.actionText })))));
    };
    return QuestionBanner;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-question-banner", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(QuestionBanner, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/QuestionDropdown.tsx":
/*!*****************************************************************!*\
  !*** ../survey-creator-react/src/adorners/QuestionDropdown.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionDropdownAdornerComponent: () => (/* binding */ QuestionDropdownAdornerComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Question */ "../survey-creator-react/src/adorners/Question.tsx");
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ActionButton */ "../survey-creator-react/src/ActionButton.tsx");
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





var QuestionDropdownAdornerComponent = /** @class */ (function (_super) {
    __extends(QuestionDropdownAdornerComponent, _super);
    function QuestionDropdownAdornerComponent(props) {
        return _super.call(this, props) || this;
    }
    QuestionDropdownAdornerComponent.prototype.createQuestionViewModel = function (props) {
        return new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.QuestionDropdownAdornerViewModel(props.componentData, props.question, null);
    };
    Object.defineProperty(QuestionDropdownAdornerComponent.prototype, "dropdownModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionDropdownAdornerComponent.prototype, "question", {
        get: function () {
            return this.dropdownModel.question;
        },
        enumerable: false,
        configurable: true
    });
    QuestionDropdownAdornerComponent.prototype.renderElementPlaceholder = function () {
        var _this = this;
        var textStyle = this.question.textStyle;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-question__dropdown-choices--wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-question__dropdown-choices" }, (this.dropdownModel.getRenderedItems() || []).map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _this.dropdownModel.getChoiceCss(), key: "editable_choice_".concat(index) }, react__WEBPACK_IMPORTED_MODULE_0__.ReactSurveyElementsWrapper.wrapItemValue(_this.question.survey, react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement(_this.dropdownModel.itemComponent, {
                    key: item.value,
                    question: _this.question,
                    cssClasses: _this.question.cssClasses,
                    isDisplayMode: true,
                    item: item,
                    textStyle: textStyle,
                    index: index,
                    isChecked: _this.question.value === item.value
                }), _this.question, item))); })),
                this.dropdownModel.needToCollapse ?
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_3__.ActionButton, { click: this.dropdownModel.switchCollapse, text: this.dropdownModel.getButtonText(), allowBubble: true }) :
                    null)));
    };
    return QuestionDropdownAdornerComponent;
}(_Question__WEBPACK_IMPORTED_MODULE_2__.QuestionAdornerComponent));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-dropdown-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(QuestionDropdownAdornerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/QuestionFooter.tsx":
/*!***************************************************************!*\
  !*** ../survey-creator-react/src/adorners/QuestionFooter.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionWrapperFooter: () => (/* binding */ QuestionWrapperFooter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../events */ "../survey-creator-react/src/events.ts");
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



var QuestionWrapperFooter = /** @class */ (function (_super) {
    __extends(QuestionWrapperFooter, _super);
    function QuestionWrapperFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionWrapperFooter.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.props.className, onFocus: function (e) { return _this.props.model.select(_this.props.model, new _events__WEBPACK_IMPORTED_MODULE_1__.ReactMouseEvent(e)); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: this.props.model.actionContainer, handleClick: false })));
    };
    return QuestionWrapperFooter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-question-footer", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(QuestionWrapperFooter, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/QuestionHeader.tsx":
/*!***************************************************************!*\
  !*** ../survey-creator-react/src/adorners/QuestionHeader.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionWrapperHeader: () => (/* binding */ QuestionWrapperHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var QuestionWrapperHeader = /** @class */ (function (_super) {
    __extends(QuestionWrapperHeader, _super);
    function QuestionWrapperHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionWrapperHeader.prototype.render = function () {
        var _this = this;
        if (!this.props.model.allowDragging)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-question__drag-area", onPointerDown: function (event) {
                return _this.props.model.onPointerDown(event);
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { className: "svc-question__drag-element", size: "auto", iconName: "icon-drag-area-indicator_24x16" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-question__top-actions" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: this.props.model.topActionContainer, handleClick: false }))));
    };
    return QuestionWrapperHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-question-header", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(QuestionWrapperHeader, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/QuestionImage.tsx":
/*!**************************************************************!*\
  !*** ../survey-creator-react/src/adorners/QuestionImage.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionImageAdornerComponent: () => (/* binding */ QuestionImageAdornerComponent)
/* harmony export */ });
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Question */ "../survey-creator-react/src/adorners/Question.tsx");
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




var QuestionImageAdornerComponent = /** @class */ (function (_super) {
    __extends(QuestionImageAdornerComponent, _super);
    function QuestionImageAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionImageAdornerComponent.prototype.createQuestionViewModel = function (props) {
        return new survey_creator_core__WEBPACK_IMPORTED_MODULE_0__.QuestionImageAdornerViewModel(props.componentData, props.question, null);
    };
    Object.defineProperty(QuestionImageAdornerComponent.prototype, "imageModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    QuestionImageAdornerComponent.prototype.renderHeader = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", { type: "file", "aria-hidden": "true", tabIndex: -1, accept: this.imageModel.acceptedTypes, className: "svc-choose-file-input", style: {
                    position: "absolute",
                    opacity: 0,
                    width: "1px",
                    height: "1px",
                    overflow: "hidden"
                } }),
            _super.prototype.renderHeader.call(this)));
    };
    QuestionImageAdornerComponent.prototype.renderLoadingPlaceholder = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-image-question__loading-placeholder" },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-image-question__loading" },
                react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.LoadingIndicatorComponent, null))));
    };
    QuestionImageAdornerComponent.prototype.renderChooseButton = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-image-question-controls" }, this.model.allowEdit ? (0,react__WEBPACK_IMPORTED_MODULE_1__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", { className: "svc-context-button", onClick: function () { return _this.imageModel.chooseFile(_this.imageModel); } },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.SvgIcon, { size: "auto", iconName: "icon-choosefile" }))) : null));
    };
    QuestionImageAdornerComponent.prototype.renderElementPlaceholder = function () {
        return this.imageModel.isUploading ? this.renderLoadingPlaceholder() : this.renderChooseButton();
    };
    QuestionImageAdornerComponent.prototype.getStateElements = function () {
        return [this.model, this.imageModel.filePresentationModel];
    };
    QuestionImageAdornerComponent.prototype.renderElementContent = function () {
        if (this.imageModel.isEmptyImageLink) {
            var fileQuestion = react__WEBPACK_IMPORTED_MODULE_1__.ReactQuestionFactory.Instance.createQuestion("file", {
                creator: this.imageModel.question.survey,
                isDisplayMode: false,
                question: this.imageModel.filePresentationModel
            });
            return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, fileQuestion));
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                this.props.element,
                this.renderElementPlaceholder()));
        }
    };
    return QuestionImageAdornerComponent;
}(_Question__WEBPACK_IMPORTED_MODULE_2__.QuestionAdornerComponent));

react__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("svc-image-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(QuestionImageAdornerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/QuestionRating.tsx":
/*!***************************************************************!*\
  !*** ../survey-creator-react/src/adorners/QuestionRating.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionRatingAdornerComponent: () => (/* binding */ QuestionRatingAdornerComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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




var QuestionRatingAdornerComponent = /** @class */ (function (_super) {
    __extends(QuestionRatingAdornerComponent, _super);
    function QuestionRatingAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionRatingAdornerComponent.prototype.createModel = function (props) {
        this.modelValue = this.createQuestionViewModel(props);
    };
    QuestionRatingAdornerComponent.prototype.createQuestionViewModel = function (props) {
        return new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.QuestionRatingAdornerViewModel(props.componentData, props.question, null);
    };
    QuestionRatingAdornerComponent.prototype.getUpdatedModelProps = function () {
        return ["question", "componentData"];
    };
    Object.defineProperty(QuestionRatingAdornerComponent.prototype, "ratingModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuestionRatingAdornerComponent.prototype, "model", {
        get: function () {
            return this.modelValue;
        },
        enumerable: false,
        configurable: true
    });
    QuestionRatingAdornerComponent.prototype.getStateElement = function () {
        return this.model;
    };
    QuestionRatingAdornerComponent.prototype.renderElement = function () {
        var model = this.ratingModel;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-rating-question-content" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: model.controlsClassNames },
                    model.allowRemove ? (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { role: "button", className: model.removeClassNames, "aria-label": model.removeTooltip, onClick: function () { return model.removeItem(model); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { size: "auto", iconName: "icon-remove_16x16", title: model.removeTooltip }))) : null,
                    model.allowAdd ? (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { role: "button", className: model.addClassNames, "aria-label": model.addTooltip, onClick: function () { return model.addItem(model); } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { size: "auto", iconName: "icon-add_16x16", title: model.addTooltip }))) : null),
                this.props.element)));
    };
    return QuestionRatingAdornerComponent;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_2__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-rating-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(QuestionRatingAdornerComponent, props);
});
react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-rating-question-content", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(QuestionRatingAdornerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/QuestionWidget.tsx":
/*!***************************************************************!*\
  !*** ../survey-creator-react/src/adorners/QuestionWidget.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionWidgetAdornerComponent: () => (/* binding */ QuestionWidgetAdornerComponent)
/* harmony export */ });
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Question */ "../survey-creator-react/src/adorners/Question.tsx");
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




var QuestionWidgetAdornerComponent = /** @class */ (function (_super) {
    __extends(QuestionWidgetAdornerComponent, _super);
    function QuestionWidgetAdornerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionWidgetAdornerComponent.prototype.createQuestionViewModel = function (props) {
        return new survey_creator_core__WEBPACK_IMPORTED_MODULE_0__.QuestionAdornerViewModel(props.componentData, props.question, null);
    };
    Object.defineProperty(QuestionWidgetAdornerComponent.prototype, "widgetModel", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    QuestionWidgetAdornerComponent.prototype.renderElementContent = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-widget__content" }, this.props.element));
    };
    return QuestionWidgetAdornerComponent;
}(_Question__WEBPACK_IMPORTED_MODULE_2__.QuestionAdornerComponent));

react__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("svc-widget-question", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(QuestionWidgetAdornerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/adorners/Row.tsx":
/*!****************************************************!*\
  !*** ../survey-creator-react/src/adorners/Row.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RowWrapper: () => (/* binding */ RowWrapper)
/* harmony export */ });
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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




var RowWrapper = /** @class */ (function (_super) {
    __extends(RowWrapper, _super);
    function RowWrapper(props) {
        return _super.call(this, props) || this;
    }
    RowWrapper.prototype.createModel = function (props) {
        if (!!this.model) {
            this.model.dispose();
        }
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_0__.RowViewModel(props.componentData.creator, props.row, null);
    };
    RowWrapper.prototype.getUpdatedModelProps = function () {
        return ["row", "componentData"];
    };
    RowWrapper.prototype.getStateElement = function () {
        return this.model;
    };
    RowWrapper.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.subscribeElementChanges();
    };
    RowWrapper.prototype.componentWillUnmount = function () {
        this.model.unsubscribeElementChanges();
        _super.prototype.componentWillUnmount.call(this);
    };
    RowWrapper.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { key: "svc-row-" + this.props.row.id, className: this.model.cssClasses },
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-row__drop-indicator svc-row__drop-indicator--top" }),
            react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: "svc-row__drop-indicator svc-row__drop-indicator--bottom" }),
            this.props.element));
    };
    return RowWrapper;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_2__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_1__.ReactElementFactory.Instance.registerElement("svc-row", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(RowWrapper, props);
});


/***/ }),

/***/ "../survey-creator-react/src/components/Search.tsx":
/*!*********************************************************!*\
  !*** ../survey-creator-react/src/components/Search.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var SearchComponent = /** @class */ (function (_super) {
    __extends(SearchComponent, _super);
    function SearchComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            filterString: _this.model.filterString || ""
        };
        return _this;
    }
    Object.defineProperty(SearchComponent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SearchComponent.prototype.getStateElement = function () {
        return this.model;
    };
    SearchComponent.prototype.renderElement = function () {
        var _this = this;
        if (!this.model.isVisible)
            return null;
        var onChange = function (e) {
            var root = survey_core__WEBPACK_IMPORTED_MODULE_1__.settings.environment.root;
            if (e.target === root.activeElement) {
                _this.model.filterString = e.target.value;
            }
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-search" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-search__search-icon" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: "icon-search", size: "auto" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "text", className: "svc-search__input", "aria-label": this.model.filterStringPlaceholder, placeholder: this.model.filterStringPlaceholder, value: this.state.filterString, onChange: onChange }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-search__toolbar" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-search__toolbar-counter" }, this.model.matchCounterText),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: this.model.searchActionBar }))));
    };
    return SearchComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-search", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SearchComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/components/SurfacePlaceholder.tsx":
/*!*********************************************************************!*\
  !*** ../survey-creator-react/src/components/SurfacePlaceholder.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurfacePlaceholder: () => (/* binding */ SurfacePlaceholder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var SurfacePlaceholder = /** @class */ (function (_super) {
    __extends(SurfacePlaceholder, _super);
    function SurfacePlaceholder(props) {
        return _super.call(this, props) || this;
    }
    SurfacePlaceholder.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-surface-placeholder" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-surface-placeholder__image svc-surface-placeholder__image--" + this.props.name }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-surface-placeholder__text" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-surface-placeholder__title" }, this.props.placeholderTitleText),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-surface-placeholder__description" }, this.props.placeholderDescriptionText))));
    };
    return SurfacePlaceholder;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-surface-placeholder", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurfacePlaceholder, props);
});


/***/ }),

/***/ "../survey-creator-react/src/custom-questions/BooleanSwitch.tsx":
/*!**********************************************************************!*\
  !*** ../survey-creator-react/src/custom-questions/BooleanSwitch.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionBooleanSwitch: () => (/* binding */ SurveyQuestionBooleanSwitch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var SurveyQuestionBooleanSwitch = /** @class */ (function (_super) {
    __extends(SurveyQuestionBooleanSwitch, _super);
    function SurveyQuestionBooleanSwitch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyQuestionBooleanSwitch.prototype.renderElement = function () {
        var _this = this;
        var button = (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "spg-boolean-switch__button" + (this.questionBase.value ? " spg-boolean-switch__button--checked" : ""), tabIndex: 0, role: "checkbox", "aria-checked": this.questionBase.booleanValue || false, "aria-required": this.questionBase.a11y_input_ariaRequired, "aria-label": this.questionBase.a11y_input_ariaLabel, "aria-labelledby": this.questionBase.a11y_input_ariaLabelledBy, "aria-invalid": this.questionBase.a11y_input_ariaInvalid, "aria-errormessage": this.questionBase.a11y_input_ariaErrormessage },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "spg-boolean-switch__thumb" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "spg-boolean-switch__thumb-circle spg-boolean-switch__thumb--left" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "spg-boolean-switch__thumb" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "spg-boolean-switch__thumb-circle spg-boolean-switch__thumb--right" }))), this.questionBase, { processEsc: false });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "spg-boolean-switch", onClick: function () { return _this.questionBase.value = !_this.questionBase.value; } },
            button,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "spg-boolean-switch__caption" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "spg-boolean-switch__title", id: this.questionBase.labelRenderedAriaID }, react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase.renderLocString(this.questionBase.locTitle)))));
    };
    return SurveyQuestionBooleanSwitch;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.registerQuestion("sv-boolean-switch", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionBooleanSwitch, props);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory.Instance.registerRenderer("boolean", "switch", "sv-boolean-switch");


/***/ }),

/***/ "../survey-creator-react/src/custom-questions/ColorItem.tsx":
/*!******************************************************************!*\
  !*** ../survey-creator-react/src/custom-questions/ColorItem.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var ItemTemplateComponent = /** @class */ (function (_super) {
    __extends(ItemTemplateComponent, _super);
    function ItemTemplateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemTemplateComponent.prototype.render = function () {
        var item = this.props.item;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "spg-color-editor__color-swatch", style: { backgroundColor: item.value } }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: 2 }, this.renderLocString(item.locTitle, undefined, "locString"))));
    };
    return ItemTemplateComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));
react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("color-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemTemplateComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/custom-questions/ColorQuestion.tsx":
/*!**********************************************************************!*\
  !*** ../survey-creator-react/src/custom-questions/ColorQuestion.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionColor: () => (/* binding */ SurveyQuestionColor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var SurveyQuestionColor = /** @class */ (function (_super) {
    __extends(SurveyQuestionColor, _super);
    function SurveyQuestionColor(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionColor.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionColor.prototype.renderInput = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { id: this.question.inputId, disabled: this.isDisplayMode, className: this.question.cssClasses.control, ref: function (input) { return (_this.setControl(input)); }, placeholder: this.question.renderedPlaceholder, autoComplete: "off", onKeyUp: function (event) { return _this.question.onKeyUp(event.nativeEvent); }, onBlur: function (event) { return _this.question.onBlur(event.nativeEvent); }, onChange: this.question.onChange, onBeforeInput: function (event) { return _this.question.onBeforeInput(event.nativeEvent); }, "aria-required": this.question.a11y_input_ariaRequired, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-label": this.question.a11y_input_ariaLabel, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-describedby": this.question.a11y_input_ariaDescribedBy })));
    };
    SurveyQuestionColor.prototype.renderElement = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.root, onKeyDown: function (event) { return _this.question.onKeyDown(event.nativeEvent); } },
            this.renderColorSwatch(),
            this.renderInput(),
            this.question.showDropdownAction ? this.renderDropdownAction() : null));
    };
    SurveyQuestionColor.prototype.getValueCore = function () {
        return this.question.renderedValue;
    };
    SurveyQuestionColor.prototype.renderColorSwatch = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: this.question.getSwatchCss(), style: this.question.getSwatchStyle() },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: this.question.cssClasses.swatchIcon, size: "auto" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "color", disabled: this.isDisplayMode, value: this.question.renderedColorValue, className: this.question.cssClasses.colorInput, onChange: function (event) { return _this.question.onColorInputChange(event.nativeEvent); }, tabIndex: -1, "aria-required": this.question.a11y_input_ariaRequired, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-label": this.question.a11y_input_ariaLabel, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-describedby": this.question.a11y_input_ariaDescribedBy }));
    };
    SurveyQuestionColor.prototype.renderDropdownAction = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "aria-hidden": "true", className: this.question.cssClasses.choicesButtonWrapper }, react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement("sv-action-bar-item", { item: this.question.dropdownAction })),
            this.renderPopup()));
    };
    SurveyQuestionColor.prototype.renderPopup = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Popup, { model: this.question.dropdownAction.popupModel });
    };
    return SurveyQuestionColor;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionText));

react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.registerQuestion("color", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionColor, props);
});


/***/ }),

/***/ "../survey-creator-react/src/custom-questions/FileEditQuestion.tsx":
/*!*************************************************************************!*\
  !*** ../survey-creator-react/src/custom-questions/FileEditQuestion.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionFileEditor: () => (/* binding */ SurveyQuestionFileEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var SurveyQuestionFileEditor = /** @class */ (function (_super) {
    __extends(SurveyQuestionFileEditor, _super);
    function SurveyQuestionFileEditor(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionFileEditor.prototype, "questionFile", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionFileEditor.prototype.getValueCore = function () {
        return this.question.renderedValue;
    };
    SurveyQuestionFileEditor.prototype.renderInput = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { disabled: this.question.isTextInputReadOnly, className: this.questionFile.cssClasses.control, placeholder: this.questionFile.renderedPlaceholder, ref: function (input) { return (_this.setControl(input)); }, autoComplete: "off", type: "text", onBlur: function (event) { return _this.questionFile.onInputBlur(event.nativeEvent); }, onChange: function (event) { return _this.questionFile.onInputChange(event.nativeEvent); } })));
    };
    SurveyQuestionFileEditor.prototype.renderFileInput = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "file", disabled: this.isDisplayMode, className: this.questionFile.cssClasses.fileInput, id: this.questionFile.inputId, "aria-required": this.questionFile.ariaRequired, "aria-label": this.questionFile.ariaLabel, "aria-invalid": this.questionFile.ariaInvalid, "aria-describedby": this.questionFile.ariaDescribedBy, multiple: false, title: this.questionFile.inputTitle, accept: this.questionFile.acceptedTypes, tabIndex: -1, onChange: function (event) { return _this.questionFile.onFileInputChange(event.nativeEvent); } }));
    };
    SurveyQuestionFileEditor.prototype.renderButtons = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.questionFile.cssClasses.buttonsContainer },
            this.renderClearButton(),
            this.renderChooseButton()));
    };
    SurveyQuestionFileEditor.prototype.renderClearButton = function () {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)((react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: this.questionFile.cssClasses.clearButton, title: this.questionFile.clearButtonCaption, disabled: this.questionFile.getIsClearButtonDisabled(), onClick: this.questionFile.doClean },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: this.questionFile.cssClasses.clearButtonIcon, size: "auto" }))));
    };
    SurveyQuestionFileEditor.prototype.renderChooseButton = function () {
        var _this = this;
        return ((0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { onClick: function (event) { return _this.questionFile.chooseFiles(event.nativeEvent); }, className: this.questionFile.getChooseButtonCss(), htmlFor: this.questionFile.inputId, "aria-label": this.questionFile.chooseButtonCaption },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: this.questionFile.cssClasses.chooseButtonIcon, size: "auto", title: this.questionFile.chooseButtonCaption }))));
    };
    SurveyQuestionFileEditor.prototype.renderElement = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.questionFile.cssClasses.root, ref: function (el) { return _this.setContent(el); }, onDragEnter: this.questionFile.onDragEnter, onDragOver: this.questionFile.onDragOver, onDrop: this.questionFile.onDrop, onDragLeave: this.questionFile.onDragLeave, onKeyDown: function (event) { return _this.question.onKeyDown(event.nativeEvent); } },
            this.renderInput(),
            this.renderFileInput(),
            this.renderButtons()));
    };
    return SurveyQuestionFileEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionText));

react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.registerQuestion("fileedit", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionFileEditor, props);
});


/***/ }),

/***/ "../survey-creator-react/src/custom-questions/SpinEditor.tsx":
/*!*******************************************************************!*\
  !*** ../survey-creator-react/src/custom-questions/SpinEditor.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionSpinEditor: () => (/* binding */ SurveyQuestionSpinEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var SurveyQuestionSpinEditor = /** @class */ (function (_super) {
    __extends(SurveyQuestionSpinEditor, _super);
    function SurveyQuestionSpinEditor(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(SurveyQuestionSpinEditor.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionSpinEditor.prototype.renderInput = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { role: "spinbutton", id: this.question.inputId, disabled: this.isDisplayMode, className: this.question.cssClasses.control, ref: function (input) { return (_this.setControl(input)); }, placeholder: this.question.renderedPlaceholder, autoComplete: "off", onBlur: function (event) { return _this.question.onBlur(event.nativeEvent); }, onFocus: function (event) { return _this.question.onFocus(event.nativeEvent); }, onChange: this.question.onChange, onBeforeInput: function (event) { return _this.question.onBeforeInput(event.nativeEvent); }, onKeyUp: function (event) { return _this.question.onKeyUp(event.nativeEvent); }, onKeyDown: function (event) { return _this.question.onInputKeyDown(event.nativeEvent); }, "aria-required": this.question.a11y_input_ariaRequired, "aria-label": this.question.a11y_input_ariaLabel, "aria-labelledby": this.question.a11y_input_ariaLabelledBy, "aria-describedby": this.question.a11y_input_ariaDescribedBy, "aria-invalid": this.question.a11y_input_ariaInvalid, "aria-errormessage": this.question.a11y_input_ariaErrormessage })));
    };
    SurveyQuestionSpinEditor.prototype.renderElement = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.root, onKeyDown: function (event) { return _this.question.onKeyDown(event.nativeEvent); } },
            this.renderInput(),
            this.renderButtons()));
    };
    SurveyQuestionSpinEditor.prototype.getValueCore = function () {
        return this.question.renderedValue;
    };
    SurveyQuestionSpinEditor.prototype.renderButtons = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: this.question.cssClasses.buttonsContainer },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { tabIndex: -1, "aria-hidden": "true", className: this.question.cssClasses.arrowButton, disabled: this.isDisplayMode, onClick: this.question.onDownButtonClick, onMouseDown: this.question.onDownButtonMouseDown, onMouseUp: this.question.onButtonMouseUp, onMouseLeave: this.question.onButtonMouseLeave, onBlur: function (event) { return _this.question.onBlur(event.nativeEvent); }, onFocus: function (event) { return _this.question.onFocus(event.nativeEvent); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: this.question.cssClasses.decreaseButtonIcon, size: "auto" })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { tabIndex: -1, "aria-hidden": "true", className: this.question.cssClasses.arrowButton, disabled: this.isDisplayMode, onClick: this.question.onUpButtonClick, onMouseDown: this.question.onUpButtonMouseDown, onMouseUp: this.question.onButtonMouseUp, onMouseLeave: this.question.onButtonMouseLeave, onBlur: function (event) { return _this.question.onBlur(event.nativeEvent); }, onFocus: function (event) { return _this.question.onFocus(event.nativeEvent); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: this.question.cssClasses.increaseButtonIcon, size: "auto" }))));
    };
    return SurveyQuestionSpinEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionText));

react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.registerQuestion("spinedit", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionSpinEditor, props);
});


/***/ }),

/***/ "../survey-creator-react/src/custom-questions/TextWithResetQuestion.tsx":
/*!******************************************************************************!*\
  !*** ../survey-creator-react/src/custom-questions/TextWithResetQuestion.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyQuestionTextWithReset: () => (/* binding */ SurveyQuestionTextWithReset)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var SurveyQuestionTextWithReset = /** @class */ (function (_super) {
    __extends(SurveyQuestionTextWithReset, _super);
    function SurveyQuestionTextWithReset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyQuestionTextWithReset.prototype, "question", {
        get: function () {
            return this.questionBase;
        },
        enumerable: false,
        configurable: true
    });
    SurveyQuestionTextWithReset.prototype.renderElement = function () {
        var textElement = this.renderInput();
        var resetButton = this.renderResetButton();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.getRootClass() },
            textElement,
            resetButton));
    };
    SurveyQuestionTextWithReset.prototype.renderInput = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.createQuestion(this.question.wrappedQuestionTemplate, {
            question: this.question,
            isDisplayMode: this.question.isInputReadOnly,
            creator: this,
        });
    };
    SurveyQuestionTextWithReset.prototype.renderResetButton = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: this.question.cssClasses.resetButton, disabled: this.question.resetValueAdorner.isDisabled, title: this.question.resetValueAdorner.caption, onClick: function () { return _this.question.resetValueAdorner.resetValue(); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: this.question.cssClasses.resetButtonIcon, size: "auto" })));
    };
    return SurveyQuestionTextWithReset;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.registerQuestion("textwithreset", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionTextWithReset, props);
});
react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.registerQuestion("commentwithreset", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyQuestionTextWithReset, props);
});


/***/ }),

/***/ "../survey-creator-react/src/entries/index-wc.ts":
/*!*******************************************************!*\
  !*** ../survey-creator-react/src/entries/index-wc.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionButton: () => (/* reexport safe */ _ActionButton__WEBPACK_IMPORTED_MODULE_37__.ActionButton),
/* harmony export */   AdaptiveToolbox: () => (/* reexport safe */ _toolbox_AdaptiveToolbox__WEBPACK_IMPORTED_MODULE_26__.AdaptiveToolbox),
/* harmony export */   CellQuestionAdornerComponent: () => (/* reexport safe */ _adorners_CellQuestion__WEBPACK_IMPORTED_MODULE_10__.CellQuestionAdornerComponent),
/* harmony export */   CellQuestionDropdownAdornerComponent: () => (/* reexport safe */ _adorners_CellQuestionDropdown__WEBPACK_IMPORTED_MODULE_11__.CellQuestionDropdownAdornerComponent),
/* harmony export */   CreatorSurveyPageComponent: () => (/* reexport safe */ _adorners_Page__WEBPACK_IMPORTED_MODULE_12__.CreatorSurveyPageComponent),
/* harmony export */   ImageItemValueAdornerComponent: () => (/* reexport safe */ _ImageItemValueWrapper__WEBPACK_IMPORTED_MODULE_19__.ImageItemValueAdornerComponent),
/* harmony export */   ItemValueAdornerComponent: () => (/* reexport safe */ _ItemValueWrapper__WEBPACK_IMPORTED_MODULE_18__.ItemValueAdornerComponent),
/* harmony export */   LogoImageComponent: () => (/* reexport safe */ _LogoImage__WEBPACK_IMPORTED_MODULE_14__.LogoImageComponent),
/* harmony export */   MatrixCellAdornerComponent: () => (/* reexport safe */ _MatrixCellWrapper__WEBPACK_IMPORTED_MODULE_20__.MatrixCellAdornerComponent),
/* harmony export */   PanelAdornerComponent: () => (/* reexport safe */ _adorners_Panel__WEBPACK_IMPORTED_MODULE_13__.PanelAdornerComponent),
/* harmony export */   PropertyGridComponent: () => (/* reexport safe */ _side_bar_PropertyGrid__WEBPACK_IMPORTED_MODULE_52__.PropertyGridComponent),
/* harmony export */   PropertyGridEditorCollection: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_62__.PropertyGridEditorCollection),
/* harmony export */   PropertyGridPlaceholderComponent: () => (/* reexport safe */ _side_bar_PropertyGridPlaceholder__WEBPACK_IMPORTED_MODULE_46__.PropertyGridPlaceholderComponent),
/* harmony export */   QuestionAdornerComponent: () => (/* reexport safe */ _adorners_Question__WEBPACK_IMPORTED_MODULE_2__.QuestionAdornerComponent),
/* harmony export */   QuestionBanner: () => (/* reexport safe */ _adorners_QuestionBanner__WEBPACK_IMPORTED_MODULE_5__.QuestionBanner),
/* harmony export */   QuestionDropdownAdornerComponent: () => (/* reexport safe */ _adorners_QuestionDropdown__WEBPACK_IMPORTED_MODULE_6__.QuestionDropdownAdornerComponent),
/* harmony export */   QuestionEditorContentComponent: () => (/* reexport safe */ _QuestionEditorContent__WEBPACK_IMPORTED_MODULE_17__.QuestionEditorContentComponent),
/* harmony export */   QuestionErrorComponent: () => (/* reexport safe */ _QuestionError__WEBPACK_IMPORTED_MODULE_39__.QuestionErrorComponent),
/* harmony export */   QuestionImageAdornerComponent: () => (/* reexport safe */ _adorners_QuestionImage__WEBPACK_IMPORTED_MODULE_7__.QuestionImageAdornerComponent),
/* harmony export */   QuestionRatingAdornerComponent: () => (/* reexport safe */ _adorners_QuestionRating__WEBPACK_IMPORTED_MODULE_8__.QuestionRatingAdornerComponent),
/* harmony export */   QuestionWidgetAdornerComponent: () => (/* reexport safe */ _adorners_QuestionWidget__WEBPACK_IMPORTED_MODULE_9__.QuestionWidgetAdornerComponent),
/* harmony export */   QuestionWrapperFooter: () => (/* reexport safe */ _adorners_QuestionFooter__WEBPACK_IMPORTED_MODULE_4__.QuestionWrapperFooter),
/* harmony export */   QuestionWrapperHeader: () => (/* reexport safe */ _adorners_QuestionHeader__WEBPACK_IMPORTED_MODULE_3__.QuestionWrapperHeader),
/* harmony export */   ReactDragEvent: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_50__.ReactDragEvent),
/* harmony export */   ReactMouseEvent: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_50__.ReactMouseEvent),
/* harmony export */   RowWrapper: () => (/* reexport safe */ _adorners_Row__WEBPACK_IMPORTED_MODULE_1__.RowWrapper),
/* harmony export */   SearchComponent: () => (/* reexport safe */ _components_Search__WEBPACK_IMPORTED_MODULE_53__.SearchComponent),
/* harmony export */   SideBarDefaultHeader: () => (/* reexport safe */ _side_bar_SideBarDefaultHeader__WEBPACK_IMPORTED_MODULE_31__.SideBarDefaultHeader),
/* harmony export */   SidebarComponent: () => (/* reexport safe */ _side_bar_SideBar__WEBPACK_IMPORTED_MODULE_34__.SidebarComponent),
/* harmony export */   SurveyCreatorComponent: () => (/* reexport safe */ _SurveyCreator__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorComponent),
/* harmony export */   SurveyCreatorToolboxCategory: () => (/* reexport safe */ _toolbox_ToolboxCategory__WEBPACK_IMPORTED_MODULE_24__.SurveyCreatorToolboxCategory),
/* harmony export */   SurveyCreatorToolboxItem: () => (/* reexport safe */ _toolbox_ToolboxItem__WEBPACK_IMPORTED_MODULE_22__.SurveyCreatorToolboxItem),
/* harmony export */   SurveyCreatorToolboxItemGroup: () => (/* reexport safe */ _toolbox_ToolboxItemGroup__WEBPACK_IMPORTED_MODULE_23__.SurveyCreatorToolboxItemGroup),
/* harmony export */   SurveyCreatorToolboxTool: () => (/* reexport safe */ _toolbox_ToolboxItem__WEBPACK_IMPORTED_MODULE_22__.SurveyCreatorToolboxTool),
/* harmony export */   SurveyElementEmbeddedSurvey: () => (/* reexport safe */ _QuestionEmbeddedSurvey__WEBPACK_IMPORTED_MODULE_16__.SurveyElementEmbeddedSurvey),
/* harmony export */   SurveyLocStringEditor: () => (/* reexport safe */ _StringEditor__WEBPACK_IMPORTED_MODULE_38__.SurveyLocStringEditor),
/* harmony export */   SurveyLogic: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_62__.SurveyLogic),
/* harmony export */   SurveyLogicOpertor: () => (/* reexport safe */ _tabs_logic_operator__WEBPACK_IMPORTED_MODULE_40__.SurveyLogicOpertor),
/* harmony export */   SurveyLogicUI: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_62__.SurveyLogicUI),
/* harmony export */   SurveyNavigation: () => (/* reexport safe */ _Navigation__WEBPACK_IMPORTED_MODULE_28__.SurveyNavigation),
/* harmony export */   SurveyQuestionBooleanSwitch: () => (/* reexport safe */ _custom_questions_BooleanSwitch__WEBPACK_IMPORTED_MODULE_61__.SurveyQuestionBooleanSwitch),
/* harmony export */   SurveyQuestionColor: () => (/* reexport safe */ _custom_questions_ColorQuestion__WEBPACK_IMPORTED_MODULE_58__.SurveyQuestionColor),
/* harmony export */   SurveyQuestionEditorDefinition: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_62__.SurveyQuestionEditorDefinition),
/* harmony export */   SurveyQuestionFileEditor: () => (/* reexport safe */ _custom_questions_FileEditQuestion__WEBPACK_IMPORTED_MODULE_59__.SurveyQuestionFileEditor),
/* harmony export */   SurveyQuestionLinkValue: () => (/* reexport safe */ _QuestionLinkValue__WEBPACK_IMPORTED_MODULE_15__.SurveyQuestionLinkValue),
/* harmony export */   SurveyQuestionSpinEditor: () => (/* reexport safe */ _custom_questions_SpinEditor__WEBPACK_IMPORTED_MODULE_56__.SurveyQuestionSpinEditor),
/* harmony export */   SurveyQuestionTextWithReset: () => (/* reexport safe */ _custom_questions_TextWithResetQuestion__WEBPACK_IMPORTED_MODULE_60__.SurveyQuestionTextWithReset),
/* harmony export */   SurveyResults: () => (/* reexport safe */ _Results__WEBPACK_IMPORTED_MODULE_21__.SurveyResults),
/* harmony export */   SurveyResultsByRow: () => (/* reexport safe */ _Results__WEBPACK_IMPORTED_MODULE_21__.SurveyResultsByRow),
/* harmony export */   SurveySimulator: () => (/* reexport safe */ _tabs_SurveySimulator__WEBPACK_IMPORTED_MODULE_49__.SurveySimulator),
/* harmony export */   SwitcherComponent: () => (/* reexport safe */ _Switcher__WEBPACK_IMPORTED_MODULE_54__.SwitcherComponent),
/* harmony export */   TabButtonComponent: () => (/* reexport safe */ _side_bar_TabButton__WEBPACK_IMPORTED_MODULE_30__.TabButtonComponent),
/* harmony export */   TabDesignerComponent: () => (/* reexport safe */ _tabs_Designer__WEBPACK_IMPORTED_MODULE_41__.TabDesignerComponent),
/* harmony export */   TabJsonEditorAceComponent: () => (/* reexport safe */ _tabs_JsonEditorAce__WEBPACK_IMPORTED_MODULE_42__.TabJsonEditorAceComponent),
/* harmony export */   TabJsonEditorErrorsComponent: () => (/* reexport safe */ _tabs_JsonEditorTextarea__WEBPACK_IMPORTED_MODULE_43__.TabJsonEditorErrorsComponent),
/* harmony export */   TabJsonEditorTextareaComponent: () => (/* reexport safe */ _tabs_JsonEditorTextarea__WEBPACK_IMPORTED_MODULE_43__.TabJsonEditorTextareaComponent),
/* harmony export */   TabLogicAddButtonComponent: () => (/* reexport safe */ _tabs_Logic__WEBPACK_IMPORTED_MODULE_44__.TabLogicAddButtonComponent),
/* harmony export */   TabLogicComponent: () => (/* reexport safe */ _tabs_Logic__WEBPACK_IMPORTED_MODULE_44__.TabLogicComponent),
/* harmony export */   TabPreviewSurveyComponent: () => (/* reexport safe */ _tabs_Preview__WEBPACK_IMPORTED_MODULE_45__.TabPreviewSurveyComponent),
/* harmony export */   TabPreviewTestSurveyAgainComponent: () => (/* reexport safe */ _tabs_Preview__WEBPACK_IMPORTED_MODULE_45__.TabPreviewTestSurveyAgainComponent),
/* harmony export */   TabThemeSurveyComponent: () => (/* reexport safe */ _tabs_Theme__WEBPACK_IMPORTED_MODULE_47__.TabThemeSurveyComponent),
/* harmony export */   TabTranslationComponent: () => (/* reexport safe */ _tabs_translation_Translation__WEBPACK_IMPORTED_MODULE_48__.TabTranslationComponent),
/* harmony export */   TabbedMenuComponent: () => (/* reexport safe */ _TabbedMenu__WEBPACK_IMPORTED_MODULE_27__.TabbedMenuComponent),
/* harmony export */   TabbedMenuItemComponent: () => (/* reexport safe */ _TabbedMenu__WEBPACK_IMPORTED_MODULE_27__.TabbedMenuItemComponent),
/* harmony export */   ToolboxList: () => (/* reexport safe */ _toolbox_ToolboxList__WEBPACK_IMPORTED_MODULE_25__.ToolboxList),
/* harmony export */   ToolboxToolViewModel: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_62__.ToolboxToolViewModel),
/* harmony export */   TranslateFromAction: () => (/* reexport safe */ _tabs_translation_TranslateFromAction__WEBPACK_IMPORTED_MODULE_36__.TranslateFromAction),
/* harmony export */   TranslationLineSkeleton: () => (/* reexport safe */ _tabs_translation_TranslationLineSkeleton__WEBPACK_IMPORTED_MODULE_35__.TranslationLineSkeleton),
/* harmony export */   Version: () => (/* binding */ Version),
/* harmony export */   editorLocalization: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_62__.editorLocalization),
/* harmony export */   localization: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_62__.localization),
/* harmony export */   settings: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_62__.settings),
/* harmony export */   svgBundle: () => (/* reexport safe */ survey_creator_core__WEBPACK_IMPORTED_MODULE_62__.svgBundle)
/* harmony export */ });
/* harmony import */ var _SurveyCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SurveyCreator */ "../survey-creator-react/src/SurveyCreator.tsx");
/* harmony import */ var _adorners_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adorners/Row */ "../survey-creator-react/src/adorners/Row.tsx");
/* harmony import */ var _adorners_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adorners/Question */ "../survey-creator-react/src/adorners/Question.tsx");
/* harmony import */ var _adorners_QuestionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adorners/QuestionHeader */ "../survey-creator-react/src/adorners/QuestionHeader.tsx");
/* harmony import */ var _adorners_QuestionFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adorners/QuestionFooter */ "../survey-creator-react/src/adorners/QuestionFooter.tsx");
/* harmony import */ var _adorners_QuestionBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adorners/QuestionBanner */ "../survey-creator-react/src/adorners/QuestionBanner.tsx");
/* harmony import */ var _adorners_QuestionDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../adorners/QuestionDropdown */ "../survey-creator-react/src/adorners/QuestionDropdown.tsx");
/* harmony import */ var _adorners_QuestionImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../adorners/QuestionImage */ "../survey-creator-react/src/adorners/QuestionImage.tsx");
/* harmony import */ var _adorners_QuestionRating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../adorners/QuestionRating */ "../survey-creator-react/src/adorners/QuestionRating.tsx");
/* harmony import */ var _adorners_QuestionWidget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../adorners/QuestionWidget */ "../survey-creator-react/src/adorners/QuestionWidget.tsx");
/* harmony import */ var _adorners_CellQuestion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../adorners/CellQuestion */ "../survey-creator-react/src/adorners/CellQuestion.tsx");
/* harmony import */ var _adorners_CellQuestionDropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../adorners/CellQuestionDropdown */ "../survey-creator-react/src/adorners/CellQuestionDropdown.tsx");
/* harmony import */ var _adorners_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../adorners/Page */ "../survey-creator-react/src/adorners/Page.tsx");
/* harmony import */ var _adorners_Panel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../adorners/Panel */ "../survey-creator-react/src/adorners/Panel.tsx");
/* harmony import */ var _LogoImage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../LogoImage */ "../survey-creator-react/src/LogoImage.tsx");
/* harmony import */ var _QuestionLinkValue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../QuestionLinkValue */ "../survey-creator-react/src/QuestionLinkValue.tsx");
/* harmony import */ var _QuestionEmbeddedSurvey__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../QuestionEmbeddedSurvey */ "../survey-creator-react/src/QuestionEmbeddedSurvey.tsx");
/* harmony import */ var _QuestionEditorContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../QuestionEditorContent */ "../survey-creator-react/src/QuestionEditorContent.tsx");
/* harmony import */ var _ItemValueWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ItemValueWrapper */ "../survey-creator-react/src/ItemValueWrapper.tsx");
/* harmony import */ var _ImageItemValueWrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ImageItemValueWrapper */ "../survey-creator-react/src/ImageItemValueWrapper.tsx");
/* harmony import */ var _MatrixCellWrapper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../MatrixCellWrapper */ "../survey-creator-react/src/MatrixCellWrapper.tsx");
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Results */ "../survey-creator-react/src/Results.tsx");
/* harmony import */ var _toolbox_ToolboxItem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../toolbox/ToolboxItem */ "../survey-creator-react/src/toolbox/ToolboxItem.tsx");
/* harmony import */ var _toolbox_ToolboxItemGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../toolbox/ToolboxItemGroup */ "../survey-creator-react/src/toolbox/ToolboxItemGroup.tsx");
/* harmony import */ var _toolbox_ToolboxCategory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../toolbox/ToolboxCategory */ "../survey-creator-react/src/toolbox/ToolboxCategory.tsx");
/* harmony import */ var _toolbox_ToolboxList__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../toolbox/ToolboxList */ "../survey-creator-react/src/toolbox/ToolboxList.tsx");
/* harmony import */ var _toolbox_AdaptiveToolbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../toolbox/AdaptiveToolbox */ "../survey-creator-react/src/toolbox/AdaptiveToolbox.tsx");
/* harmony import */ var _TabbedMenu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../TabbedMenu */ "../survey-creator-react/src/TabbedMenu.tsx");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../Navigation */ "../survey-creator-react/src/Navigation.tsx");
/* harmony import */ var _side_bar_TabControl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../side-bar/TabControl */ "../survey-creator-react/src/side-bar/TabControl.tsx");
/* harmony import */ var _side_bar_TabButton__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../side-bar/TabButton */ "../survey-creator-react/src/side-bar/TabButton.tsx");
/* harmony import */ var _side_bar_SideBarDefaultHeader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../side-bar/SideBarDefaultHeader */ "../survey-creator-react/src/side-bar/SideBarDefaultHeader.tsx");
/* harmony import */ var _side_bar_SideBarPropertyGridHeader__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../side-bar/SideBarPropertyGridHeader */ "../survey-creator-react/src/side-bar/SideBarPropertyGridHeader.tsx");
/* harmony import */ var _side_bar_SideBarHeader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../side-bar/SideBarHeader */ "../survey-creator-react/src/side-bar/SideBarHeader.tsx");
/* harmony import */ var _side_bar_SideBar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../side-bar/SideBar */ "../survey-creator-react/src/side-bar/SideBar.tsx");
/* harmony import */ var _tabs_translation_TranslationLineSkeleton__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../tabs/translation/TranslationLineSkeleton */ "../survey-creator-react/src/tabs/translation/TranslationLineSkeleton.tsx");
/* harmony import */ var _tabs_translation_TranslateFromAction__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../tabs/translation/TranslateFromAction */ "../survey-creator-react/src/tabs/translation/TranslateFromAction.tsx");
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../ActionButton */ "../survey-creator-react/src/ActionButton.tsx");
/* harmony import */ var _StringEditor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../StringEditor */ "../survey-creator-react/src/StringEditor.tsx");
/* harmony import */ var _QuestionError__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../QuestionError */ "../survey-creator-react/src/QuestionError.tsx");
/* harmony import */ var _tabs_logic_operator__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../tabs/logic-operator */ "../survey-creator-react/src/tabs/logic-operator.tsx");
/* harmony import */ var _tabs_Designer__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../tabs/Designer */ "../survey-creator-react/src/tabs/Designer.tsx");
/* harmony import */ var _tabs_JsonEditorAce__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../tabs/JsonEditorAce */ "../survey-creator-react/src/tabs/JsonEditorAce.tsx");
/* harmony import */ var _tabs_JsonEditorTextarea__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../tabs/JsonEditorTextarea */ "../survey-creator-react/src/tabs/JsonEditorTextarea.tsx");
/* harmony import */ var _tabs_Logic__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../tabs/Logic */ "../survey-creator-react/src/tabs/Logic.tsx");
/* harmony import */ var _tabs_Preview__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../tabs/Preview */ "../survey-creator-react/src/tabs/Preview.tsx");
/* harmony import */ var _side_bar_PropertyGridPlaceholder__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../side-bar/PropertyGridPlaceholder */ "../survey-creator-react/src/side-bar/PropertyGridPlaceholder.tsx");
/* harmony import */ var _tabs_Theme__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../tabs/Theme */ "../survey-creator-react/src/tabs/Theme.tsx");
/* harmony import */ var _tabs_translation_Translation__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../tabs/translation/Translation */ "../survey-creator-react/src/tabs/translation/Translation.tsx");
/* harmony import */ var _tabs_SurveySimulator__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../tabs/SurveySimulator */ "../survey-creator-react/src/tabs/SurveySimulator.tsx");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../events */ "../survey-creator-react/src/events.ts");
/* harmony import */ var _side_bar_ObjectSelector__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../side-bar/ObjectSelector */ "../survey-creator-react/src/side-bar/ObjectSelector.tsx");
/* harmony import */ var _side_bar_PropertyGrid__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../side-bar/PropertyGrid */ "../survey-creator-react/src/side-bar/PropertyGrid.tsx");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../components/Search */ "../survey-creator-react/src/components/Search.tsx");
/* harmony import */ var _Switcher__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../Switcher */ "../survey-creator-react/src/Switcher.tsx");
/* harmony import */ var _tabs_JsonErrorItem__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../tabs/JsonErrorItem */ "../survey-creator-react/src/tabs/JsonErrorItem.tsx");
/* harmony import */ var _custom_questions_SpinEditor__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../custom-questions/SpinEditor */ "../survey-creator-react/src/custom-questions/SpinEditor.tsx");
/* harmony import */ var _custom_questions_ColorItem__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../custom-questions/ColorItem */ "../survey-creator-react/src/custom-questions/ColorItem.tsx");
/* harmony import */ var _custom_questions_ColorQuestion__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../custom-questions/ColorQuestion */ "../survey-creator-react/src/custom-questions/ColorQuestion.tsx");
/* harmony import */ var _custom_questions_FileEditQuestion__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../custom-questions/FileEditQuestion */ "../survey-creator-react/src/custom-questions/FileEditQuestion.tsx");
/* harmony import */ var _custom_questions_TextWithResetQuestion__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../custom-questions/TextWithResetQuestion */ "../survey-creator-react/src/custom-questions/TextWithResetQuestion.tsx");
/* harmony import */ var _custom_questions_BooleanSwitch__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../custom-questions/BooleanSwitch */ "../survey-creator-react/src/custom-questions/BooleanSwitch.tsx");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_63__);
var Version;
Version = "".concat("2.2.6");
// import "@survey/creator/survey-creator-core.css";
























































//custom questions













(0,survey_core__WEBPACK_IMPORTED_MODULE_63__.checkLibraryVersion)("".concat("2.2.6"), "survey-creator-react");


/***/ }),

/***/ "../survey-creator-react/src/entries/index.ts":
/*!****************************************************!*\
  !*** ../survey-creator-react/src/entries/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionButton: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.ActionButton),
/* harmony export */   AdaptiveToolbox: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.AdaptiveToolbox),
/* harmony export */   CellQuestionAdornerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.CellQuestionAdornerComponent),
/* harmony export */   CellQuestionDropdownAdornerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.CellQuestionDropdownAdornerComponent),
/* harmony export */   CreatorSurveyPageComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.CreatorSurveyPageComponent),
/* harmony export */   ImageItemValueAdornerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.ImageItemValueAdornerComponent),
/* harmony export */   ItemValueAdornerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.ItemValueAdornerComponent),
/* harmony export */   LogoImageComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.LogoImageComponent),
/* harmony export */   MatrixCellAdornerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.MatrixCellAdornerComponent),
/* harmony export */   PanelAdornerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.PanelAdornerComponent),
/* harmony export */   PropertyGridComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.PropertyGridComponent),
/* harmony export */   PropertyGridEditorCollection: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.PropertyGridEditorCollection),
/* harmony export */   PropertyGridPlaceholderComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.PropertyGridPlaceholderComponent),
/* harmony export */   QuestionAdornerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionAdornerComponent),
/* harmony export */   QuestionBanner: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionBanner),
/* harmony export */   QuestionDropdownAdornerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionDropdownAdornerComponent),
/* harmony export */   QuestionEditorContentComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionEditorContentComponent),
/* harmony export */   QuestionErrorComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionErrorComponent),
/* harmony export */   QuestionImageAdornerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionImageAdornerComponent),
/* harmony export */   QuestionRatingAdornerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionRatingAdornerComponent),
/* harmony export */   QuestionWidgetAdornerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionWidgetAdornerComponent),
/* harmony export */   QuestionWrapperFooter: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionWrapperFooter),
/* harmony export */   QuestionWrapperHeader: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionWrapperHeader),
/* harmony export */   ReactDragEvent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.ReactDragEvent),
/* harmony export */   ReactMouseEvent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.ReactMouseEvent),
/* harmony export */   RowWrapper: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.RowWrapper),
/* harmony export */   SearchComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SearchComponent),
/* harmony export */   SideBarDefaultHeader: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SideBarDefaultHeader),
/* harmony export */   SidebarComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent),
/* harmony export */   SurveyCreator: () => (/* reexport safe */ _SurveyCreator__WEBPACK_IMPORTED_MODULE_1__.SurveyCreator),
/* harmony export */   SurveyCreatorComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorComponent),
/* harmony export */   SurveyCreatorToolboxCategory: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorToolboxCategory),
/* harmony export */   SurveyCreatorToolboxItem: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorToolboxItem),
/* harmony export */   SurveyCreatorToolboxItemGroup: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorToolboxItemGroup),
/* harmony export */   SurveyCreatorToolboxTool: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorToolboxTool),
/* harmony export */   SurveyElementEmbeddedSurvey: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyElementEmbeddedSurvey),
/* harmony export */   SurveyLocStringEditor: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyLocStringEditor),
/* harmony export */   SurveyLogic: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyLogic),
/* harmony export */   SurveyLogicOpertor: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyLogicOpertor),
/* harmony export */   SurveyLogicUI: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyLogicUI),
/* harmony export */   SurveyNavigation: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyNavigation),
/* harmony export */   SurveyQuestionBooleanSwitch: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionBooleanSwitch),
/* harmony export */   SurveyQuestionColor: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionColor),
/* harmony export */   SurveyQuestionEditorDefinition: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionEditorDefinition),
/* harmony export */   SurveyQuestionFileEditor: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionFileEditor),
/* harmony export */   SurveyQuestionLinkValue: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionLinkValue),
/* harmony export */   SurveyQuestionSpinEditor: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionSpinEditor),
/* harmony export */   SurveyQuestionTextWithReset: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionTextWithReset),
/* harmony export */   SurveyResults: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyResults),
/* harmony export */   SurveyResultsByRow: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyResultsByRow),
/* harmony export */   SurveySimulator: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveySimulator),
/* harmony export */   SwitcherComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.SwitcherComponent),
/* harmony export */   TabButtonComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabButtonComponent),
/* harmony export */   TabDesignerComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabDesignerComponent),
/* harmony export */   TabJsonEditorAceComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabJsonEditorAceComponent),
/* harmony export */   TabJsonEditorErrorsComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabJsonEditorErrorsComponent),
/* harmony export */   TabJsonEditorTextareaComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabJsonEditorTextareaComponent),
/* harmony export */   TabLogicAddButtonComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabLogicAddButtonComponent),
/* harmony export */   TabLogicComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabLogicComponent),
/* harmony export */   TabPreviewSurveyComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabPreviewSurveyComponent),
/* harmony export */   TabPreviewTestSurveyAgainComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabPreviewTestSurveyAgainComponent),
/* harmony export */   TabThemeSurveyComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabThemeSurveyComponent),
/* harmony export */   TabTranslationComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabTranslationComponent),
/* harmony export */   TabbedMenuComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabbedMenuComponent),
/* harmony export */   TabbedMenuItemComponent: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TabbedMenuItemComponent),
/* harmony export */   ToolboxList: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.ToolboxList),
/* harmony export */   ToolboxToolViewModel: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.ToolboxToolViewModel),
/* harmony export */   TranslateFromAction: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TranslateFromAction),
/* harmony export */   TranslationLineSkeleton: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.TranslationLineSkeleton),
/* harmony export */   Version: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.Version),
/* harmony export */   editorLocalization: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.editorLocalization),
/* harmony export */   localization: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.localization),
/* harmony export */   settings: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.settings),
/* harmony export */   svgBundle: () => (/* reexport safe */ _index_wc__WEBPACK_IMPORTED_MODULE_0__.svgBundle)
/* harmony export */ });
/* harmony import */ var _index_wc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-wc */ "../survey-creator-react/src/entries/index-wc.ts");
/* harmony import */ var _SurveyCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SurveyCreator */ "../survey-creator-react/src/SurveyCreator.tsx");




/***/ }),

/***/ "../survey-creator-react/src/events.ts":
/*!*********************************************!*\
  !*** ../survey-creator-react/src/events.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactDragEvent: () => (/* binding */ ReactDragEvent),
/* harmony export */   ReactMouseEvent: () => (/* binding */ ReactMouseEvent)
/* harmony export */ });
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
var ReactMouseEvent = /** @class */ (function () {
    function ReactMouseEvent(event) {
        this.event = event;
    }
    ReactMouseEvent.prototype.stopPropagation = function () {
        this.event.stopPropagation();
        //this.event.nativeEvent.stopPropagation();
        //this.event.nativeEvent.stopImmediatePropagation();
    };
    ReactMouseEvent.prototype.preventDefault = function () {
        this.event.preventDefault();
        //this.event.nativeEvent.preventDefault();
    };
    Object.defineProperty(ReactMouseEvent.prototype, "cancelBubble", {
        get: function () {
            //return this.event.cancelBubble;
            return false;
        },
        set: function (value) {
            //this.event.cancelBubble = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "target", {
        get: function () {
            return this.event.target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "currentTarget", {
        get: function () {
            return this.event.currentTarget;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "clientX", {
        get: function () {
            return this.event.clientX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "clientY", {
        get: function () {
            return this.event.clientY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "offsetX", {
        get: function () {
            return this.event.nativeEvent.offsetX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactMouseEvent.prototype, "offsetY", {
        get: function () {
            return this.event.nativeEvent.offsetY;
        },
        enumerable: false,
        configurable: true
    });
    return ReactMouseEvent;
}());

var ReactDragEvent = /** @class */ (function (_super) {
    __extends(ReactDragEvent, _super);
    function ReactDragEvent(event) {
        var _this = _super.call(this, event) || this;
        _this.event = event;
        return _this;
    }
    Object.defineProperty(ReactDragEvent.prototype, "dataTransfer", {
        get: function () {
            return this.event.dataTransfer;
        },
        enumerable: false,
        configurable: true
    });
    return ReactDragEvent;
}(ReactMouseEvent));



/***/ }),

/***/ "../survey-creator-react/src/side-bar/ObjectSelector.tsx":
/*!***************************************************************!*\
  !*** ../survey-creator-react/src/side-bar/ObjectSelector.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var ObjectSelectorComponent = /** @class */ (function (_super) {
    __extends(ObjectSelectorComponent, _super);
    function ObjectSelectorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ObjectSelectorComponent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    ObjectSelectorComponent.prototype.getStateElement = function () {
        return this.model;
    };
    ObjectSelectorComponent.prototype.renderElement = function () {
        if (!this.model.isVisible)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.List, { model: this.model.list }));
    };
    return ObjectSelectorComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));
react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-object-selector", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ObjectSelectorComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/side-bar/PropertyGrid.tsx":
/*!*************************************************************!*\
  !*** ../survey-creator-react/src/side-bar/PropertyGrid.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyGridComponent: () => (/* binding */ PropertyGridComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Search */ "../survey-creator-react/src/components/Search.tsx");
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



var PropertyGridComponent = /** @class */ (function (_super) {
    __extends(PropertyGridComponent, _super);
    function PropertyGridComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PropertyGridComponent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    PropertyGridComponent.prototype.getStateElement = function () {
        return this.model;
    };
    PropertyGridComponent.prototype.canRender = function () {
        if (!this.model)
            return false;
        return _super.prototype.canRender.call(this);
    };
    PropertyGridComponent.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.rootCss },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, { model: this.model.searchManager }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Survey, { model: this.model.survey })));
    };
    return PropertyGridComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PropertyGridComponent);
react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-property-grid", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PropertyGridComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/side-bar/PropertyGridPlaceholder.tsx":
/*!************************************************************************!*\
  !*** ../survey-creator-react/src/side-bar/PropertyGridPlaceholder.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertyGridPlaceholderComponent: () => (/* binding */ PropertyGridPlaceholderComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
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



var PropertyGridPlaceholderComponent = /** @class */ (function (_super) {
    __extends(PropertyGridPlaceholderComponent, _super);
    function PropertyGridPlaceholderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropertyGridPlaceholderComponent.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-property-grid-placeholder" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-property-grid-placeholder__header" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-property-grid-placeholder__title" }, survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.editorLocalization.getString("ed.propertyGridPlaceholderTitle")),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-property-grid-placeholder__description" }, survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.editorLocalization.getString("ed.propertyGridPlaceholderDescription"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-property-grid-placeholder__content" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-property-grid-placeholder__gap" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-property-grid-placeholder__image" }))));
    };
    return PropertyGridPlaceholderComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-property-grid-placeholder", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(PropertyGridPlaceholderComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/side-bar/SideBar.tsx":
/*!********************************************************!*\
  !*** ../survey-creator-react/src/side-bar/SideBar.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var SidebarComponent = /** @class */ (function (_super) {
    __extends(SidebarComponent, _super);
    function SidebarComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.containerRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Object.defineProperty(SidebarComponent.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SidebarComponent.prototype.getStateElement = function () {
        return this.model;
    };
    SidebarComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.model.initResizeManager(this.containerRef.current);
    };
    SidebarComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.model.resetResizeManager();
    };
    SidebarComponent.prototype.canRender = function () {
        if (!this.model)
            return false;
        return _super.prototype.canRender.call(this);
    };
    SidebarComponent.prototype.renderElement = function () {
        var _this = this;
        var style = { display: this.model.renderRoot ? "" : "none" };
        var containerStyle = { display: this.model.renderContainer ? "" : "none" };
        var items = this.model.pages.map(function (page) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SidebarPage, { page: page, key: page.id }); });
        var headerArea = react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement(this.model.header.component, { model: this.model.header.componentModel });
        var sideArea = null;
        if (this.model.sideAreaComponentName) {
            sideArea = react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement(this.model.sideAreaComponentName, { model: this.model.sideAreaComponentData });
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.rootCss, style: style },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-side-bar__shadow", onClick: function () { return _this.model.collapseSidebar(); }, style: containerStyle }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-flex-row svc-side-bar__wrapper" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-side-bar__container-wrapper", style: containerStyle },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.containerRef, className: "svc-side-bar__container" },
                        headerArea,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-side-bar__container-content" }, items))),
                sideArea)));
    };
    return SidebarComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

var SidebarPage = /** @class */ (function (_super) {
    __extends(SidebarPage, _super);
    function SidebarPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SidebarPage.prototype, "page", {
        get: function () {
            return this.props.page;
        },
        enumerable: false,
        configurable: true
    });
    SidebarPage.prototype.getStateElement = function () {
        return this.page;
    };
    SidebarPage.prototype.renderElement = function () {
        if (!this.page.visible)
            return null;
        var component = react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement(this.page.componentName, { model: this.page.componentData });
        return component;
    };
    return SidebarPage;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));
react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.registerQuestion("svc-side-bar-page", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SidebarPage, props);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarComponent);
react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-side-bar", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SidebarComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/side-bar/SideBarDefaultHeader.tsx":
/*!*********************************************************************!*\
  !*** ../survey-creator-react/src/side-bar/SideBarDefaultHeader.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SideBarDefaultHeader: () => (/* binding */ SideBarDefaultHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var SideBarDefaultHeader = /** @class */ (function (_super) {
    __extends(SideBarDefaultHeader, _super);
    function SideBarDefaultHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SideBarDefaultHeader.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SideBarDefaultHeader.prototype.getStateElement = function () {
        return this.model;
    };
    SideBarDefaultHeader.prototype.renderElement = function () {
        var title = !!this.model.title ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-side-bar__container-title" }, this.model.title)) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-side-bar__container-header" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-side-bar__container-actions" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: this.model.toolbar })),
            title));
    };
    return SideBarDefaultHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-side-bar-default-header", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideBarDefaultHeader, props);
});


/***/ }),

/***/ "../survey-creator-react/src/side-bar/SideBarHeader.tsx":
/*!**************************************************************!*\
  !*** ../survey-creator-react/src/side-bar/SideBarHeader.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var SideBarHeader = /** @class */ (function (_super) {
    __extends(SideBarHeader, _super);
    function SideBarHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SideBarHeader.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SideBarHeader.prototype.getStateElement = function () {
        return this.model;
    };
    SideBarHeader.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-side-bar__container-header svc-sidebar__header-container" }, (this.model.subTitle) ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-sidebar__header-caption" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-sidebar__header-title" }, this.model.title),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-sidebar__header-subtitle" }, this.model.subTitle))
            : react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-side-bar__container-title" }, this.model.title)));
    };
    return SideBarHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));
react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-side-bar-header", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideBarHeader, props);
});


/***/ }),

/***/ "../survey-creator-react/src/side-bar/SideBarPropertyGridHeader.tsx":
/*!**************************************************************************!*\
  !*** ../survey-creator-react/src/side-bar/SideBarPropertyGridHeader.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var SideBarPropertyGridHeader = /** @class */ (function (_super) {
    __extends(SideBarPropertyGridHeader, _super);
    function SideBarPropertyGridHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SideBarPropertyGridHeader.prototype, "objectSelectionAction", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SideBarPropertyGridHeader.prototype.getStateElement = function () {
        return this.objectSelectionAction;
    };
    SideBarPropertyGridHeader.prototype.renderElement = function () {
        var _this = this;
        var button = (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.objectSelectionAction.buttonClassName, onClick: function () { return _this.objectSelectionAction.action(); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-sidebar__header-caption" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-sidebar__header-title" }, this.objectSelectionAction.title),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-sidebar__header-subtitle" }, this.objectSelectionAction.tooltip))), this.props.model);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-sidebar__header svc-sidebar__header--tabbed" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-sidebar__header-container svc-sidebar__header-container--with-subtitle" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-sidebar__header-content" },
                    button,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Popup, { model: this.objectSelectionAction.popupModel })))));
    };
    return SideBarPropertyGridHeader;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));
react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-side-bar-property-grid-header", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SideBarPropertyGridHeader, props);
});


/***/ }),

/***/ "../survey-creator-react/src/side-bar/TabButton.tsx":
/*!**********************************************************!*\
  !*** ../survey-creator-react/src/side-bar/TabButton.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabButtonComponent: () => (/* binding */ TabButtonComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var TabButtonComponent = /** @class */ (function (_super) {
    __extends(TabButtonComponent, _super);
    function TabButtonComponent(props) {
        return _super.call(this, props) || this;
    }
    TabButtonComponent.prototype.getStateElement = function () {
        return this.props.model;
    };
    TabButtonComponent.prototype.renderElement = function () {
        var model = this.props.model;
        if (!model.visible)
            return null;
        var button = (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: model.buttonClassName, title: model.tooltip, onClick: function () { model.action(); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-menu-action__icon" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-menu-action__icon-container" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: model.iconName, size: "auto" })))), model);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-menu-action" }, button));
    };
    return TabButtonComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));



/***/ }),

/***/ "../survey-creator-react/src/side-bar/TabControl.tsx":
/*!***********************************************************!*\
  !*** ../survey-creator-react/src/side-bar/TabControl.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabButton */ "../survey-creator-react/src/side-bar/TabButton.tsx");
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



var TabControl = /** @class */ (function (_super) {
    __extends(TabControl, _super);
    function TabControl(props) {
        return _super.call(this, props) || this;
    }
    TabControl.prototype.getStateElement = function () {
        return this.props.model;
    };
    TabControl.prototype.canRender = function () {
        if (!this.props.model)
            return false;
        return _super.prototype.canRender.call(this);
    };
    TabControl.prototype.renderElement = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.props.model.sideBarClassName },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-sidebar-tabs__top-container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-sidebar-tabs__collapse-button" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabButton__WEBPACK_IMPORTED_MODULE_1__.TabButtonComponent, { model: this.props.model.expandCollapseAction })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-sidebar-tabs__separator" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Scroll, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-sidebar-tabs__items" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabsComponent, { model: this.props.model.topToolbar })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-sidebar-tabs__bottom-container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-sidebar-tabs__items" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabsComponent, { model: this.props.model.bottomToolbar })))));
    };
    return TabControl;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));
react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-tab-control", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabControl, props);
});
var TabsComponent = /** @class */ (function (_super) {
    __extends(TabsComponent, _super);
    function TabsComponent(props) {
        return _super.call(this, props) || this;
    }
    TabsComponent.prototype.getStateElement = function () {
        return this.props.model;
    };
    TabsComponent.prototype.renderElement = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.props.model.actions.map(function (item, itemIndex) { return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TabButton__WEBPACK_IMPORTED_MODULE_1__.TabButtonComponent, { model: item, key: "item" + itemIndex }); }));
    };
    return TabsComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));


/***/ }),

/***/ "../survey-creator-react/src/tabs/Designer.tsx":
/*!*****************************************************!*\
  !*** ../survey-creator-react/src/tabs/Designer.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabDesignerComponent: () => (/* binding */ TabDesignerComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PageNavigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PageNavigator */ "../survey-creator-react/src/PageNavigator.tsx");
/* harmony import */ var _components_SurfacePlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SurfacePlaceholder */ "../survey-creator-react/src/components/SurfacePlaceholder.tsx");
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




var TabDesignerComponent = /** @class */ (function (_super) {
    __extends(TabDesignerComponent, _super);
    function TabDesignerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.denyUpdate = function () {
            _this.denyComponentUpdate();
        };
        _this.allowUpdate = function () {
            _this.allowComponentUpdate();
        };
        _this.addDragDropEvents = function () {
            _this.creator.onDragStart.add(_this.denyUpdate);
            _this.creator.onDragClear.add(_this.allowUpdate);
        };
        _this.clearDragDropEvents = function () {
            _this.creator.onDragStart.remove(_this.denyUpdate);
            _this.creator.onDragClear.remove(_this.allowUpdate);
        };
        return _this;
    }
    Object.defineProperty(TabDesignerComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TabDesignerComponent.prototype, "creator", {
        get: function () {
            return this.model.creator;
        },
        enumerable: false,
        configurable: true
    });
    TabDesignerComponent.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.addDragDropEvents();
    };
    TabDesignerComponent.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.clearDragDropEvents();
        _super.prototype.componentWillUnmount.call(this);
    };
    TabDesignerComponent.prototype.getStateElements = function () {
        return [this.model, this.model.survey, this.model.pagesController];
    };
    TabDesignerComponent.prototype.getRenderedPages = function () {
        var _this = this;
        var renderedPages = [];
        if (this.creator.pageEditMode !== "bypage") {
            var pages = this.model.pages;
            pages.forEach(function (page) {
                renderedPages.push(_this.createRenderedPage(page, page == _this.model.newPage));
            });
        }
        else {
            var page2Display = this.model.pagesController.page2Display;
            if (!!page2Display) {
                renderedPages.push(this.createRenderedPage(page2Display, this.model.newPage === page2Display));
            }
        }
        return renderedPages;
    };
    TabDesignerComponent.prototype.createRenderedPage = function (page, isGhostPage) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-page", "data-sv-drop-target-page": page.name, "data-sv-drop-target-survey-element": isGhostPage ? "newGhostPage" : page.name, key: page.id }, this.renderPage(page, isGhostPage)));
    };
    TabDesignerComponent.prototype.renderNewPage = function (className, key) {
        if (key === void 0) { key = ""; }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: key },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className, "data-sv-drop-target-survey-element": "newGhostPage" }, !!this.model.newPage ? this.renderPage(this.model.newPage, true) : null)));
    };
    TabDesignerComponent.prototype.renderPage = function (pageV, isGhost) {
        return react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement("svc-page", { survey: this.creator.survey, page: pageV, creator: this.creator, isGhost: isGhost });
    };
    TabDesignerComponent.prototype.renderElement = function () {
        var _this = this;
        var designerTabClassName = "svc-tab-designer " + this.model.getRootCss();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-flex-column" }, this.model.isToolboxVisible ? react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement("svc-toolbox", { model: this.creator }) : null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: designerTabClassName, onClick: function () { return _this.model.clickDesigner(); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Scroll, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-tab-designer_content" }, this.model.showPlaceholder ? this.renderPlaceHolder() : this.renderTabContent())))));
    };
    TabDesignerComponent.prototype.renderHeader = function (condition) {
        if (!condition)
            return null;
        var survey = this.creator.survey;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-designer-header" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyHeader, { survey: survey }))));
    };
    TabDesignerComponent.prototype.renderPlaceHolder = function () {
        var surveyHeader = this.renderHeader(this.creator.allowEditSurveyTitle && this.creator.showHeaderInEmptySurvey);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            surveyHeader,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-designer__placeholder-container", "data-sv-drop-target-survey-element": "newGhostPage" },
                this.renderPlaceHolderContent(),
                this.renderNewPage("svc-designer-placeholder-page"))));
    };
    TabDesignerComponent.prototype.renderPlaceHolderContent = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SurfacePlaceholder__WEBPACK_IMPORTED_MODULE_2__.SurfacePlaceholder, { name: "designer", placeholderTitleText: this.model.placeholderTitleText, placeholderDescriptionText: this.model.placeholderDescriptionText });
    };
    TabDesignerComponent.prototype.renderTabContent = function () {
        var survey = this.creator.survey;
        var surveyHeader = this.renderHeader(this.creator.allowEditSurveyTitle);
        var style = __assign({}, this.model.surfaceCssVariables);
        style.maxWidth = survey.renderedWidth;
        var tabTools = this.renderTabTools();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.designerCss, style: style },
                surveyHeader,
                this.getRenderedPages()),
            tabTools));
    };
    TabDesignerComponent.prototype.renderTabTools = function () {
        if (!this.model.showSurfaceTools)
            return null;
        var pageNavigator = this.creator.showPageNavigator ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-tab-designer__page-navigator" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PageNavigator__WEBPACK_IMPORTED_MODULE_1__.SurveyPageNavigator, { pagesController: this.model.pagesController, pageEditMode: this.model.creator.pageEditMode }))
            : null;
        var surfaceToolbar = this.model.showSurfaceToolbar ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: this.model.surfaceToolbar, handleClick: false })
            : null;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-tab-designer__tools" },
            pageNavigator,
            surfaceToolbar);
    };
    return TabDesignerComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-tab-designer", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabDesignerComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/tabs/JsonEditorAce.tsx":
/*!**********************************************************!*\
  !*** ../survey-creator-react/src/tabs/JsonEditorAce.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabJsonEditorAceComponent: () => (/* binding */ TabJsonEditorAceComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _JsonEditorTextarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JsonEditorTextarea */ "../survey-creator-react/src/tabs/JsonEditorTextarea.tsx");
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



var TabJsonEditorAceComponent = /** @class */ (function (_super) {
    __extends(TabJsonEditorAceComponent, _super);
    function TabJsonEditorAceComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.aceEditorrRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    TabJsonEditorAceComponent.prototype.getStateElement = function () {
        return this.model;
    };
    Object.defineProperty(TabJsonEditorAceComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabJsonEditorAceComponent.prototype.componentDidMount = function () {
        this.model.init(ace.edit(this.aceEditorrRef.current));
    };
    TabJsonEditorAceComponent.prototype.renderElement = function () {
        var errors = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_JsonEditorTextarea__WEBPACK_IMPORTED_MODULE_1__.TabJsonEditorErrorsComponent, { data: this.model });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-creator-tab__content" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-json-editor-tab__content" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-json-editor-tab__ace-editor", ref: this.aceEditorrRef }),
                errors)));
    };
    return TabJsonEditorAceComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-tab-json-editor-ace", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabJsonEditorAceComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/tabs/JsonEditorTextarea.tsx":
/*!***************************************************************!*\
  !*** ../survey-creator-react/src/tabs/JsonEditorTextarea.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabJsonEditorErrorsComponent: () => (/* binding */ TabJsonEditorErrorsComponent),
/* harmony export */   TabJsonEditorTextareaComponent: () => (/* binding */ TabJsonEditorTextareaComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var TabJsonEditorErrorsComponent = /** @class */ (function (_super) {
    __extends(TabJsonEditorErrorsComponent, _super);
    function TabJsonEditorErrorsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabJsonEditorErrorsComponent.prototype.getStateElement = function () {
        return this.model;
    };
    Object.defineProperty(TabJsonEditorErrorsComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabJsonEditorErrorsComponent.prototype.renderElement = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-json-editor-tab__errros_list", style: { display: this.model.hasErrors ? "block" : "none" } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.List, { model: this.model.errorList }));
    };
    return TabJsonEditorErrorsComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

var TabJsonEditorTextareaComponent = /** @class */ (function (_super) {
    __extends(TabJsonEditorTextareaComponent, _super);
    function TabJsonEditorTextareaComponent(props) {
        return _super.call(this, props) || this;
    }
    TabJsonEditorTextareaComponent.prototype.getStateElement = function () {
        return this.model;
    };
    Object.defineProperty(TabJsonEditorTextareaComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabJsonEditorTextareaComponent.prototype.renderElement = function () {
        var _this = this;
        var setControl = function (el) {
            _this.model.textElement = el;
        };
        var errors = react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabJsonEditorErrorsComponent, { data: this.model });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-creator-tab__content" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-json-editor-tab__content" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", { ref: function (input) { return (setControl(input)); }, className: "svc-json-editor-tab__content-area", value: this.model.text, onChange: function (e) {
                        return (_this.model.text = e.target.value);
                    }, onKeyDown: function (e) { return _this.model.checkKey(e, e); }, disabled: this.model.readOnly, "aria-label": this.model.ariaLabel }),
                errors)));
    };
    return TabJsonEditorTextareaComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-tab-json-editor-textarea", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabJsonEditorTextareaComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/tabs/JsonErrorItem.tsx":
/*!**********************************************************!*\
  !*** ../survey-creator-react/src/tabs/JsonErrorItem.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var ItemTemplateComponent = /** @class */ (function (_super) {
    __extends(ItemTemplateComponent, _super);
    function ItemTemplateComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemTemplateComponent.prototype.render = function () {
        var item = this.props.item;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: item.iconName, size: item.iconSize, className: "svc-json-error__icon" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-json-error__container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-json-error__title" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: 2 }, this.renderLocString(item.locTitle, undefined, "locString"))),
                this.renderFixButton())));
    };
    ItemTemplateComponent.prototype.renderFixButton = function () {
        if (!this.props.item.data.showFixButton)
            return null;
        var item = this.props.item;
        return ((0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { type: "button", onClick: function (event) { event.stopPropagation(); item.data.fixError(); }, title: item.data.fixButtonTitle, className: "svc-json-error__fix-button" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { iconName: item.data.fixButtonIcon, size: "auto" }))));
    };
    return ItemTemplateComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));
react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("json-error-item", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ItemTemplateComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/tabs/Logic.tsx":
/*!**************************************************!*\
  !*** ../survey-creator-react/src/tabs/Logic.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabLogicAddButtonComponent: () => (/* binding */ TabLogicAddButtonComponent),
/* harmony export */   TabLogicComponent: () => (/* binding */ TabLogicComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SurfacePlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SurfacePlaceholder */ "../survey-creator-react/src/components/SurfacePlaceholder.tsx");
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




var TabLogicAddButtonComponent = /** @class */ (function (_super) {
    __extends(TabLogicAddButtonComponent, _super);
    function TabLogicAddButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabLogicAddButtonComponent.prototype, "model", {
        get: function () {
            return this.props.button;
        },
        enumerable: false,
        configurable: true
    });
    TabLogicAddButtonComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabLogicAddButtonComponent.prototype.renderElement = function () {
        var _this = this;
        var buttonClassName = "svc-logic-tab__content-action svc-btn" + ((this.model.enabled !== undefined && !this.model.enabled) ? " svc-logic-tab__content-action--disabled" : "");
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { role: "button", onClick: function (e) {
                e.stopPropagation();
                _this.model.action();
            }, className: buttonClassName, title: this.model.title },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-btn__text" }, this.model.title)));
    };
    return TabLogicAddButtonComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-tab-logic-add-button", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabLogicAddButtonComponent, props);
});
var TabLogicComponent = /** @class */ (function (_super) {
    __extends(TabLogicComponent, _super);
    function TabLogicComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabLogicComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabLogicComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabLogicComponent.prototype.renderElement = function () {
        var logic = this.model;
        var rootClass = "svc-creator-tab__content svc-logic-tab";
        var content = this.renderViewContent();
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: rootClass }, content);
    };
    TabLogicComponent.prototype.renderViewContent = function () {
        var logicTabClassName = "svc-plugin-tab__content svc-logic-tab svc-logic-tab__content " + (this.model.hasItems ? "" : "svc-logic-tab--empty");
        var addLogic = !this.model.readOnly ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabLogicAddButtonComponent, { button: this.model.addNewButton }) : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: logicTabClassName }, this.model.hasItems ?
                (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Survey, { model: this.model.itemsSurvey }),
                    addLogic))
                : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-logic-tab__content-empty" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SurfacePlaceholder__WEBPACK_IMPORTED_MODULE_1__.SurfacePlaceholder, { name: "logic", placeholderTitleText: this.model.placeholderTitleText, placeholderDescriptionText: this.model.placeholderDescriptionText }),
                    addLogic)))));
    };
    return TabLogicComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-tab-logic", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabLogicComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/tabs/Preview.tsx":
/*!****************************************************!*\
  !*** ../survey-creator-react/src/tabs/Preview.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabPreviewSurveyComponent: () => (/* binding */ TabPreviewSurveyComponent),
/* harmony export */   TabPreviewTestSurveyAgainComponent: () => (/* binding */ TabPreviewTestSurveyAgainComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SurveySimulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveySimulator */ "../survey-creator-react/src/tabs/SurveySimulator.tsx");
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Results */ "../survey-creator-react/src/Results.tsx");
/* harmony import */ var _components_SurfacePlaceholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SurfacePlaceholder */ "../survey-creator-react/src/components/SurfacePlaceholder.tsx");
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





var TabPreviewTestSurveyAgainComponent = /** @class */ (function (_super) {
    __extends(TabPreviewTestSurveyAgainComponent, _super);
    function TabPreviewTestSurveyAgainComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabPreviewTestSurveyAgainComponent.prototype, "model", {
        get: function () {
            return this.props.model.testAgainAction;
        },
        enumerable: false,
        configurable: true
    });
    TabPreviewTestSurveyAgainComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabPreviewTestSurveyAgainComponent.prototype.renderElement = function () {
        var _this = this;
        var buttonClassName = "svc-preview__test-again svc-btn";
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { role: "button", onClick: function (e) {
                e.stopPropagation();
                _this.model.action();
            }, className: buttonClassName, title: this.model.title },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-btn__text" }, this.model.title)));
    };
    return TabPreviewTestSurveyAgainComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-complete-page", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabPreviewTestSurveyAgainComponent, props);
});
var TabPreviewSurveyComponent = /** @class */ (function (_super) {
    __extends(TabPreviewSurveyComponent, _super);
    function TabPreviewSurveyComponent(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(TabPreviewSurveyComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabPreviewSurveyComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabPreviewSurveyComponent.prototype.renderPlaceholder = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SurfacePlaceholder__WEBPACK_IMPORTED_MODULE_3__.SurfacePlaceholder, { name: "preview", placeholderTitleText: this.model.placeholderTitleText, placeholderDescriptionText: this.model.placeholderDescriptionText });
    };
    TabPreviewSurveyComponent.prototype.renderSimulator = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-plugin-tab__content" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SurveySimulator__WEBPACK_IMPORTED_MODULE_1__.SurveySimulator, { model: this.model.simulator }),
            this.model.showResults ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Results__WEBPACK_IMPORTED_MODULE_2__.SurveyResults, { survey: this.model.simulator.survey }) : null));
    };
    TabPreviewSurveyComponent.prototype.renderElement = function () {
        var tabContentClassName = "svc-creator-tab__content svc-test-tab__content" + (this.model.isPageToolbarVisible ? " svc-creator-tab__content--with-toolbar" : "");
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: tabContentClassName },
            this.model.simulator.survey.isEmpty ? this.renderPlaceholder() : this.renderSimulator(),
            this.getBottomToolbar()));
    };
    TabPreviewSurveyComponent.prototype.getBottomToolbar = function () {
        if (this.model.isPageToolbarVisible) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-test-tab__content-actions" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: this.model.pages })));
        }
        else {
            return null;
        }
    };
    return TabPreviewSurveyComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-tab-preview", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabPreviewSurveyComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/tabs/SurveySimulator.tsx":
/*!************************************************************!*\
  !*** ../survey-creator-react/src/tabs/SurveySimulator.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveySimulator: () => (/* binding */ SurveySimulator)
/* harmony export */ });
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "survey-js-ui");
/* harmony import */ var survey_react_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_react_ui__WEBPACK_IMPORTED_MODULE_0__);
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


var SurveySimulator = /** @class */ (function (_super) {
    __extends(SurveySimulator, _super);
    function SurveySimulator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveySimulator.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SurveySimulator.prototype.getStateElement = function () {
        return this.model;
    };
    SurveySimulator.prototype.renderElement = function () {
        var _this = this;
        var mainSimulatorClass = this.model.getRootCss();
        if (!this.model.survey) {
            return survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: mainSimulatorClass });
        }
        if (this.model.hasFrame) {
            return (survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: mainSimulatorClass, onKeyDown: function (e) { return _this.model.tryToZoom(e, e); }, onMouseEnter: this.model.device === "desktop" ? null : this.model.activateZoom, onMouseLeave: this.model.device === "desktop" ? null : this.model.deactivateZoom },
                survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svd-simulator-wrapper", id: "svd-simulator-wrapper", style: {
                        width: this.model.simulatorFrame.frameWidth + "px",
                        height: this.model.simulatorFrame.frameHeight + "px"
                    } },
                    survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svd-simulator", style: {
                            width: this.model.simulatorFrame.deviceWidth + "px",
                            height: this.model.simulatorFrame.deviceHeight + "px",
                            transform: "scale(" +
                                this.model.simulatorFrame.scale +
                                ") translate(-50%, -50%)"
                        } },
                        survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svd-simulator-content" },
                            survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.Survey, { model: this.model.survey }))))));
        }
        else {
            return (survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: mainSimulatorClass },
                survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svd-simulator-content" },
                    survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.createElement(survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.Survey, { model: this.model.survey }))));
        }
    };
    return SurveySimulator;
}(survey_react_ui__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));



/***/ }),

/***/ "../survey-creator-react/src/tabs/Theme.tsx":
/*!**************************************************!*\
  !*** ../survey-creator-react/src/tabs/Theme.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabThemeSurveyComponent: () => (/* binding */ TabThemeSurveyComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SurveySimulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SurveySimulator */ "../survey-creator-react/src/tabs/SurveySimulator.tsx");
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Results */ "../survey-creator-react/src/Results.tsx");
/* harmony import */ var _components_SurfacePlaceholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SurfacePlaceholder */ "../survey-creator-react/src/components/SurfacePlaceholder.tsx");
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





var TabThemeSurveyComponent = /** @class */ (function (_super) {
    __extends(TabThemeSurveyComponent, _super);
    function TabThemeSurveyComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabThemeSurveyComponent.prototype, "model", {
        get: function () {
            return this.props.data;
        },
        enumerable: false,
        configurable: true
    });
    TabThemeSurveyComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabThemeSurveyComponent.prototype.renderPlaceholder = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SurfacePlaceholder__WEBPACK_IMPORTED_MODULE_3__.SurfacePlaceholder, { name: "theme", placeholderTitleText: this.model.placeholderTitleText, placeholderDescriptionText: this.model.placeholderDescriptionText });
    };
    TabThemeSurveyComponent.prototype.renderSimulator = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-plugin-tab__content" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SurveySimulator__WEBPACK_IMPORTED_MODULE_1__.SurveySimulator, { model: this.model.simulator }),
            this.model.showResults ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Results__WEBPACK_IMPORTED_MODULE_2__.SurveyResults, { survey: this.model.simulator.survey }) : null));
    };
    TabThemeSurveyComponent.prototype.renderElement = function () {
        var tabContentClassName = "svc-creator-tab__content svc-test-tab__content" + (this.model.isPageToolbarVisible ? " svc-creator-tab__content--with-toolbar" : "");
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: tabContentClassName },
            this.model.simulator.survey.isEmpty ? this.renderPlaceholder() : this.renderSimulator(),
            this.getBottomToolbar()));
    };
    TabThemeSurveyComponent.prototype.getBottomToolbar = function () {
        if (this.model.isPageToolbarVisible) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-test-tab__content-actions" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SurveyActionBar, { model: this.model.pages })));
        }
        else {
            return null;
        }
    };
    return TabThemeSurveyComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-tab-theme", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabThemeSurveyComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/tabs/logic-operator.tsx":
/*!***********************************************************!*\
  !*** ../survey-creator-react/src/tabs/logic-operator.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyLogicOpertor: () => (/* binding */ SurveyLogicOpertor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-core */ "survey-core");
/* harmony import */ var survey_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_2__);
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




var SurveyLogicOpertor = /** @class */ (function (_super) {
    __extends(SurveyLogicOpertor, _super);
    function SurveyLogicOpertor(props) {
        return _super.call(this, props) || this;
    }
    SurveyLogicOpertor.prototype.renderInput = function () {
        var q = this.question;
        (0,survey_creator_core__WEBPACK_IMPORTED_MODULE_2__.initLogicOperator)(q);
        var text = (q.locReadOnlyText) ? this.renderLocString(q.locReadOnlyText) : "";
        var dropdownListModel = this.question.dropdownListModel;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { id: this.question.inputId, className: q.getControlClass(), tabIndex: this.question.isInputReadOnly ? undefined : 0, 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            disabled: this.question.isInputReadOnly, required: this.question.isRequired, onChange: this.updateValueOnEvent, onInput: this.updateValueOnEvent, onKeyUp: this.keyhandler, role: dropdownListModel.ariaQuestionRole, "aria-required": dropdownListModel.ariaQuestionRequired, "aria-invalid": dropdownListModel.ariaQuestionInvalid, "aria-errormessage": dropdownListModel.ariaQuestionErrorMessage, "aria-expanded": dropdownListModel.ariaQuestionExpanded, "aria-label": dropdownListModel.ariaQuestionLabel, "aria-labelledby": dropdownListModel.ariaQuestionLabelledby, "aria-controls": dropdownListModel.ariaQuestionControls },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.question.cssClasses.controlValue }, text)));
    };
    SurveyLogicOpertor.prototype.renderEditorButtons = function () {
        return null;
    };
    return SurveyLogicOpertor;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionDropdown));

react__WEBPACK_IMPORTED_MODULE_0__.ReactQuestionFactory.Instance.registerQuestion("sv-logic-operator", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyLogicOpertor, props);
});
survey_core__WEBPACK_IMPORTED_MODULE_1__.RendererFactory.Instance.registerRenderer("dropdown", "logicoperator", "sv-logic-operator");


/***/ }),

/***/ "../survey-creator-react/src/tabs/translation/TranslateFromAction.tsx":
/*!****************************************************************************!*\
  !*** ../survey-creator-react/src/tabs/translation/TranslateFromAction.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslateFromAction: () => (/* binding */ TranslateFromAction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var TranslateFromAction = /** @class */ (function (_super) {
    __extends(TranslateFromAction, _super);
    function TranslateFromAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TranslateFromAction.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    TranslateFromAction.prototype.getStateElement = function () {
        return this.item;
    };
    TranslateFromAction.prototype.renderElement = function () {
        var item = this.item;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: item.data.containerCss },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: item.data.additionalTitleCss }, item.data.additionalTitle),
            react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement("sv-action-bar-item-dropdown", { item: this.item })));
    };
    return TranslateFromAction;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-translate-from-action", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TranslateFromAction, props);
});


/***/ }),

/***/ "../survey-creator-react/src/tabs/translation/Translation.tsx":
/*!********************************************************************!*\
  !*** ../survey-creator-react/src/tabs/translation/Translation.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabTranslationComponent: () => (/* binding */ TabTranslationComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SurfacePlaceholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SurfacePlaceholder */ "../survey-creator-react/src/components/SurfacePlaceholder.tsx");
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



var TabTranslationComponent = /** @class */ (function (_super) {
    __extends(TabTranslationComponent, _super);
    function TabTranslationComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TabTranslationComponent.prototype, "model", {
        get: function () {
            return this.props.data || this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    TabTranslationComponent.prototype.getStateElement = function () {
        return this.model;
    };
    TabTranslationComponent.prototype.renderElement = function () {
        if (!this.model)
            return null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-creator-tab__content svc-translation-tab" + (this.model.isEmpty ? " svc-translation-tab--empty" : "") }, this.renderElementContent()));
    };
    TabTranslationComponent.prototype.renderElementContent = function () {
        if (this.model.isEmpty) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SurfacePlaceholder__WEBPACK_IMPORTED_MODULE_1__.SurfacePlaceholder, { name: "translation", placeholderTitleText: this.model.placeholderTitleText, placeholderDescriptionText: this.model.placeholderDescriptionText });
        }
        else {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "st-content" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-flex-column st-strings-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-flex-row st-strings-header" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Survey, { model: this.model.stringsHeaderSurvey })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-flex-row svc-plugin-tab__content st-strings" },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Survey, { model: this.model.stringsSurvey })))));
        }
    };
    return TabTranslationComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-tab-translation", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabTranslationComponent, props);
});


/***/ }),

/***/ "../survey-creator-react/src/tabs/translation/TranslationLineSkeleton.tsx":
/*!********************************************************************************!*\
  !*** ../survey-creator-react/src/tabs/translation/TranslationLineSkeleton.tsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TranslationLineSkeleton: () => (/* binding */ TranslationLineSkeleton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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


var TranslationLineSkeleton = /** @class */ (function (_super) {
    __extends(TranslationLineSkeleton, _super);
    function TranslationLineSkeleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslationLineSkeleton.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "sd-translation-line-skeleton" }));
    };
    return TranslationLineSkeleton;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("sd-translation-line-skeleton", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TranslationLineSkeleton, props);
});


/***/ }),

/***/ "../survey-creator-react/src/toolbox/AdaptiveToolbox.tsx":
/*!***************************************************************!*\
  !*** ../survey-creator-react/src/toolbox/AdaptiveToolbox.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdaptiveToolbox: () => (/* binding */ AdaptiveToolbox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToolboxItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolboxItem */ "../survey-creator-react/src/toolbox/ToolboxItem.tsx");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Search */ "../survey-creator-react/src/components/Search.tsx");
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




var AdaptiveToolbox = /** @class */ (function (_super) {
    __extends(AdaptiveToolbox, _super);
    function AdaptiveToolbox(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    AdaptiveToolbox.prototype.componentDidUpdate = function (prevProps, prevState) {
        _super.prototype.componentDidUpdate.call(this, prevProps, prevState);
        var container = this.rootRef.current;
        if (container) {
            this.toolbox.afterRender(container);
        }
    };
    AdaptiveToolbox.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        var container = this.rootRef.current;
        if (container) {
            this.toolbox.afterRender(container);
        }
    };
    AdaptiveToolbox.prototype.componentWillUnmount = function () {
        this.toolbox.beforeDestroy();
        _super.prototype.componentWillUnmount.call(this);
    };
    Object.defineProperty(AdaptiveToolbox.prototype, "creator", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdaptiveToolbox.prototype, "toolbox", {
        get: function () {
            return this.creator.toolbox;
        },
        enumerable: false,
        configurable: true
    });
    AdaptiveToolbox.prototype.getStateElement = function () {
        return this.toolbox;
    };
    AdaptiveToolbox.prototype.renderItems = function (items, isCompact) {
        var _this = this;
        if (isCompact === void 0) { isCompact = false; }
        return items.map(function (item, itemIndex) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ToolboxItem__WEBPACK_IMPORTED_MODULE_1__.SurveyCreatorToolboxTool, { item: item, creator: _this.creator, parentModel: _this.toolbox, isCompact: isCompact, key: item.renderedId });
        });
    };
    AdaptiveToolbox.prototype.renderCategories = function () {
        var _this = this;
        return this.toolbox.categories.map(function (category, index) {
            return react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement("svc-toolbox-category", {
                category: category,
                toolbox: _this.toolbox,
                key: "category" + index
            });
        });
    };
    AdaptiveToolbox.prototype.renderSearch = function () {
        var searchButton = this.toolbox.isCompactRendered ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ToolboxItem__WEBPACK_IMPORTED_MODULE_1__.SurveyCreatorToolboxTool, { item: this.toolbox.searchItem, creator: this.creator, parentModel: this.toolbox, isCompact: this.toolbox.isCompactRendered, key: "searchitem" })) :
            null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-toolbox__search-container" },
            searchButton,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, { model: this.toolbox.searchManager }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-toolbox__category-separator svc-toolbox__category-separator--search" })));
    };
    AdaptiveToolbox.prototype.render = function () {
        var _this = this;
        var search = this.toolbox.showSearch ? this.renderSearch() : null;
        var placeholder = this.toolbox.showPlaceholder ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-toolbox__placeholder" }, this.toolbox.toolboxNoResultsFound) : null;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: this.rootRef, className: this.toolbox.classNames, style: this.toolbox.getRootStyle() },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { onBlur: function (e) { return _this.toolbox.focusOut(e); }, className: "svc-toolbox__panel" },
                search,
                placeholder,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Scroll, null, (this.toolbox.showInSingleCategory) ?
                    (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-toolbox__category" }, this.renderItems(this.toolbox.renderedActions, this.toolbox.isCompactRendered)))
                    : this.renderCategories()))));
    };
    return AdaptiveToolbox;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-toolbox", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(AdaptiveToolbox, props);
});


/***/ }),

/***/ "../survey-creator-react/src/toolbox/ToolboxCategory.tsx":
/*!***************************************************************!*\
  !*** ../survey-creator-react/src/toolbox/ToolboxCategory.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyCreatorToolboxCategory: () => (/* binding */ SurveyCreatorToolboxCategory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToolboxItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolboxItem */ "../survey-creator-react/src/toolbox/ToolboxItem.tsx");
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



var SurveyCreatorToolboxCategory = /** @class */ (function (_super) {
    __extends(SurveyCreatorToolboxCategory, _super);
    function SurveyCreatorToolboxCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SurveyCreatorToolboxCategory.prototype, "category", {
        get: function () {
            return this.props.category;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxCategory.prototype, "toolbox", {
        get: function () {
            return this.props.toolbox;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxCategory.prototype, "class", {
        get: function () {
            return "svc-toolbox__category" +
                (this.category.collapsed ? " svc-toolbox__category--collapsed" : "") +
                (this.category.empty ? " svc-toolbox__category--empty" : "");
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorToolboxCategory.prototype.getStateElement = function () {
        return this.category;
    };
    SurveyCreatorToolboxCategory.prototype.render = function () {
        var header = this.renderCategoryHeader();
        var items = this.renderCategoryContent();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.class, key: this.category.name },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-toolbox__category-header-wrapper" }, header),
            items));
    };
    SurveyCreatorToolboxCategory.prototype.renderCategoryHeader = function () {
        var _this = this;
        var className = "svc-toolbox__category-header";
        if (this.toolbox.canCollapseCategories) {
            className += " svc-toolbox__category-header--collapsed";
        }
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className, onClick: function (e) { return _this.category.toggleState(); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-toolbox__category-title" }, this.category.title),
            this.renderButton()));
    };
    SurveyCreatorToolboxCategory.prototype.renderButton = function () {
        if (!this.toolbox.canCollapseCategories)
            return null;
        var iconName = this.category.iconName;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-toolbox__category-header__controls" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { className: this.category.iconClassName, iconName: iconName, size: "auto" })));
    };
    SurveyCreatorToolboxCategory.prototype.renderCategoryContent = function () {
        return this.renderItems(this.category.items);
    };
    SurveyCreatorToolboxCategory.prototype.renderItems = function (items, isCompact) {
        var _this = this;
        if (isCompact === void 0) { isCompact = false; }
        return items.map(function (item, itemIndex) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ToolboxItem__WEBPACK_IMPORTED_MODULE_1__.SurveyCreatorToolboxTool, { item: item, creator: _this.toolbox.creator, parentModel: _this.toolbox, isCompact: isCompact, key: "item" + itemIndex });
        });
    };
    return SurveyCreatorToolboxCategory;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-toolbox-category", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyCreatorToolboxCategory, props);
});


/***/ }),

/***/ "../survey-creator-react/src/toolbox/ToolboxItem.tsx":
/*!***********************************************************!*\
  !*** ../survey-creator-react/src/toolbox/ToolboxItem.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyCreatorToolboxItem: () => (/* binding */ SurveyCreatorToolboxItem),
/* harmony export */   SurveyCreatorToolboxTool: () => (/* binding */ SurveyCreatorToolboxTool)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! survey-creator-core */ "survey-creator-core");
/* harmony import */ var survey_creator_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(survey_creator_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
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






var SurveyCreatorToolboxTool = /** @class */ (function (_super) {
    __extends(SurveyCreatorToolboxTool, _super);
    function SurveyCreatorToolboxTool(props) {
        var _this = _super.call(this, props) || this;
        _this.rootRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    SurveyCreatorToolboxTool.prototype.createModel = function (props) {
        this.model = new survey_creator_core__WEBPACK_IMPORTED_MODULE_1__.ToolboxToolViewModel(props.item, props.creator, props.parentModel);
    };
    SurveyCreatorToolboxTool.prototype.getUpdatedModelProps = function () {
        return ["creator", "item"];
    };
    Object.defineProperty(SurveyCreatorToolboxTool.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxTool.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxTool.prototype, "isCompact", {
        get: function () {
            return this.props.isCompact;
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorToolboxTool.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyCreatorToolboxTool.prototype.render = function () {
        var _this = this;
        var item = this.item;
        var itemComponent = react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.createElement(this.model.itemComponent, {
            item: item,
            creator: this.creator,
            parentModel: this.creator.toolbox,
            model: this.model,
            isCompact: this.isCompact
        });
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: item.css, key: item.id, ref: this.rootRef },
            (item.needSeparator && !this.creator.toolbox.showCategoryTitles) ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-toolbox__category-separator" })) : null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-toolbox__tool-content sv-action__content", onPointerDown: function (event) {
                    event.persist();
                    _this.model.onPointerDown(event);
                } }, itemComponent)));
    };
    SurveyCreatorToolboxTool.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.item.updateModeCallback = undefined;
    };
    SurveyCreatorToolboxTool.prototype.componentDidMount = function () {
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
                    callback(mode, _this.rootRef.current);
                });
            });
        };
        this.item.afterRender();
    };
    return SurveyCreatorToolboxTool;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_2__.CreatorModelElement));

var SurveyCreatorToolboxItem = /** @class */ (function (_super) {
    __extends(SurveyCreatorToolboxItem, _super);
    function SurveyCreatorToolboxItem(props) {
        return _super.call(this, props) || this;
    }
    SurveyCreatorToolboxItem.prototype.getUpdatedModelProps = function () {
        return ["creator", "item"];
    };
    Object.defineProperty(SurveyCreatorToolboxItem.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxItem.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxItem.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorToolboxItem.prototype.getStateElement = function () {
        return this.model;
    };
    SurveyCreatorToolboxItem.prototype.render = function () {
        var _this = this;
        var banner = (this.props.isCompact ?
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-toolbox__item-banner", onClick: function (event) {
                    event.persist();
                    _this.model.click(event);
                } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { size: "auto", iconName: this.item.iconName, className: "svc-toolbox__item-icon", title: this.item.tooltip }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, this.item.title))
            :
                null);
        var item = (0,react__WEBPACK_IMPORTED_MODULE_0__.attachKey2click)(react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.item.renderedCss, tabIndex: 0, role: "button", "aria-label": this.item.tooltip, onClick: function (event) {
                event.persist();
                _this.model.click(event);
            } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-toolbox__item-container" }, !!this.item.iconName ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { size: "auto", iconName: this.item.iconName, className: "svc-toolbox__item-icon" }) : null),
            (this.props.isCompact ?
                null
                :
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "svc-toolbox__item-title" }, this.item.title))));
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            item,
            banner));
    };
    return SurveyCreatorToolboxItem;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_2__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-toolbox-item", function (props) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SurveyCreatorToolboxItem, props);
});


/***/ }),

/***/ "../survey-creator-react/src/toolbox/ToolboxItemGroup.tsx":
/*!****************************************************************!*\
  !*** ../survey-creator-react/src/toolbox/ToolboxItemGroup.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyCreatorToolboxItemGroup: () => (/* binding */ SurveyCreatorToolboxItemGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModelElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ModelElement */ "../survey-creator-react/src/ModelElement.tsx");
/* harmony import */ var _ToolboxItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToolboxItem */ "../survey-creator-react/src/toolbox/ToolboxItem.tsx");
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




var SurveyCreatorToolboxItemGroup = /** @class */ (function (_super) {
    __extends(SurveyCreatorToolboxItemGroup, _super);
    function SurveyCreatorToolboxItemGroup(props) {
        return _super.call(this, props) || this;
    }
    SurveyCreatorToolboxItemGroup.prototype.getUpdatedModelProps = function () {
        return ["creator", "item"];
    };
    Object.defineProperty(SurveyCreatorToolboxItemGroup.prototype, "item", {
        get: function () {
            return this.props.item;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxItemGroup.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxItemGroup.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxItemGroup.prototype, "isCompact", {
        get: function () {
            return this.props.isCompact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SurveyCreatorToolboxItemGroup.prototype, "parentModel", {
        get: function () {
            return this.props.parentModel;
        },
        enumerable: false,
        configurable: true
    });
    SurveyCreatorToolboxItemGroup.prototype.getStateElement = function () {
        return this.item;
    };
    SurveyCreatorToolboxItemGroup.prototype.render = function () {
        var _this = this;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ToolboxItem__WEBPACK_IMPORTED_MODULE_2__.SurveyCreatorToolboxItem, { item: this.item, creator: this.creator, model: this.model, parentModel: this.parentModel, isCompact: this.isCompact }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "svc-toolbox__item-submenu-button", onMouseOver: function (event) { return _this.model.onMouseOver(_this.item, event); }, onMouseLeave: function (event) { return _this.model.onMouseLeave(_this.item, event); } },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.SvgIcon, { size: "auto", iconName: this.item.subitemsButtonIcon }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Popup, { model: this.item.popupModel })));
    };
    return SurveyCreatorToolboxItemGroup;
}(_ModelElement__WEBPACK_IMPORTED_MODULE_1__.CreatorModelElement));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-toolbox-item-group", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SurveyCreatorToolboxItemGroup, props);
});


/***/ }),

/***/ "../survey-creator-react/src/toolbox/ToolboxList.tsx":
/*!***********************************************************!*\
  !*** ../survey-creator-react/src/toolbox/ToolboxList.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolboxList: () => (/* binding */ ToolboxList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-react-ui */ "survey-js-ui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToolboxItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolboxItem */ "../survey-creator-react/src/toolbox/ToolboxItem.tsx");
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



var ToolboxList = /** @class */ (function (_super) {
    __extends(ToolboxList, _super);
    function ToolboxList(props) {
        return _super.call(this, props) || this;
    }
    Object.defineProperty(ToolboxList.prototype, "model", {
        get: function () {
            return this.props.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToolboxList.prototype, "creator", {
        get: function () {
            return this.props.creator;
        },
        enumerable: false,
        configurable: true
    });
    ToolboxList.prototype.getStateElement = function () {
        return this.model;
    };
    ToolboxList.prototype.render = function () {
        if (!this.model || !this.model.renderElements)
            return null;
        var items = this.renderItems();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: this.model.cssClasses.root }, items));
    };
    ToolboxList.prototype.renderItems = function () {
        var _this = this;
        var items = this.model.renderedActions;
        return items.map(function (item, itemIndex) {
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ToolboxItem__WEBPACK_IMPORTED_MODULE_1__.SurveyCreatorToolboxTool, { item: item, creator: _this.creator, parentModel: _this.model, isCompact: false, key: "item" + itemIndex });
        });
    };
    return ToolboxList;
}(react__WEBPACK_IMPORTED_MODULE_0__.SurveyElementBase));

react__WEBPACK_IMPORTED_MODULE_0__.ReactElementFactory.Instance.registerElement("svc-toolbox-list", function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToolboxList, props);
});


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SurveyCreator: () => (/* binding */ SurveyCreator),
/* harmony export */   renderSurveyCreator: () => (/* binding */ renderSurveyCreator)
/* harmony export */ });
/* harmony import */ var survey_js_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! survey-js-ui */ "survey-js-ui");
/* harmony import */ var survey_js_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(survey_js_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _survey_creator_react_src_entries_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../survey-creator-react/src/entries/index */ "../survey-creator-react/src/entries/index.ts");
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

// eslint-disable-next-line surveyjs/no-imports-from-entries

function renderSurveyCreator(creator, element, props) {
    if (props === void 0) { props = {}; }
    var node = element;
    if (typeof element === "string") {
        node = document.getElementById(element);
    }
    var survey = survey_js_ui__WEBPACK_IMPORTED_MODULE_0__.preact.createElement(_survey_creator_react_src_entries_index__WEBPACK_IMPORTED_MODULE_1__.SurveyCreatorComponent, __assign({ creator: creator }, props));
    survey_js_ui__WEBPACK_IMPORTED_MODULE_0__.preact.render(survey, node);
}
var SurveyCreator = /** @class */ (function (_super) {
    __extends(SurveyCreator, _super);
    function SurveyCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SurveyCreator.prototype.render = function (target) {
        renderSurveyCreator(this, target);
    };
    return SurveyCreator;
}(_survey_creator_react_src_entries_index__WEBPACK_IMPORTED_MODULE_1__.SurveyCreator));

if (typeof window !== "undefined") {
    var jQuery_1 = window["jQuery"] || window["$"];
    if (!!jQuery_1) {
        jQuery_1["fn"].extend({
            SurveyCreator: function (props) {
                return this.each(function () {
                    renderSurveyCreator(props.model, this, props);
                });
            },
        });
    }
}


/***/ }),

/***/ "survey-core":
/*!*********************************************************************************************************!*\
  !*** external {"root":"Survey","commonjs2":"survey-core","commonjs":"survey-core","amd":"survey-core"} ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_core__;

/***/ }),

/***/ "survey-creator-core":
/*!********************************************************************************************************************************************!*\
  !*** external {"root":"SurveyCreatorCore","commonjs2":"survey-creator-core","commonjs":"survey-creator-core","amd":"survey-creator-core"} ***!
  \********************************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_creator_core__;

/***/ }),

/***/ "survey-js-ui":
/*!**************************************************************************************************************!*\
  !*** external {"root":"SurveyUI","commonjs2":"survey-js-ui","commonjs":"survey-js-ui","amd":"survey-js-ui"} ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_survey_js_ui__;

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./entries/index.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionButton: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.ActionButton),
/* harmony export */   AdaptiveToolbox: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.AdaptiveToolbox),
/* harmony export */   CellQuestionAdornerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.CellQuestionAdornerComponent),
/* harmony export */   CellQuestionDropdownAdornerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.CellQuestionDropdownAdornerComponent),
/* harmony export */   CreatorSurveyPageComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.CreatorSurveyPageComponent),
/* harmony export */   ImageItemValueAdornerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.ImageItemValueAdornerComponent),
/* harmony export */   ItemValueAdornerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.ItemValueAdornerComponent),
/* harmony export */   LogoImageComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.LogoImageComponent),
/* harmony export */   MatrixCellAdornerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.MatrixCellAdornerComponent),
/* harmony export */   PanelAdornerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.PanelAdornerComponent),
/* harmony export */   PropertyGridComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.PropertyGridComponent),
/* harmony export */   PropertyGridEditorCollection: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.PropertyGridEditorCollection),
/* harmony export */   PropertyGridPlaceholderComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.PropertyGridPlaceholderComponent),
/* harmony export */   QuestionAdornerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionAdornerComponent),
/* harmony export */   QuestionBanner: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionBanner),
/* harmony export */   QuestionDropdownAdornerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionDropdownAdornerComponent),
/* harmony export */   QuestionEditorContentComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionEditorContentComponent),
/* harmony export */   QuestionErrorComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionErrorComponent),
/* harmony export */   QuestionImageAdornerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionImageAdornerComponent),
/* harmony export */   QuestionRatingAdornerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionRatingAdornerComponent),
/* harmony export */   QuestionWidgetAdornerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionWidgetAdornerComponent),
/* harmony export */   QuestionWrapperFooter: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionWrapperFooter),
/* harmony export */   QuestionWrapperHeader: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.QuestionWrapperHeader),
/* harmony export */   ReactDragEvent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.ReactDragEvent),
/* harmony export */   ReactMouseEvent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.ReactMouseEvent),
/* harmony export */   RowWrapper: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.RowWrapper),
/* harmony export */   SearchComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SearchComponent),
/* harmony export */   SideBarDefaultHeader: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SideBarDefaultHeader),
/* harmony export */   SidebarComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent),
/* harmony export */   SurveyCreator: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_1__.SurveyCreator),
/* harmony export */   SurveyCreatorComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorComponent),
/* harmony export */   SurveyCreatorToolboxCategory: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorToolboxCategory),
/* harmony export */   SurveyCreatorToolboxItem: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorToolboxItem),
/* harmony export */   SurveyCreatorToolboxItemGroup: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorToolboxItemGroup),
/* harmony export */   SurveyCreatorToolboxTool: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyCreatorToolboxTool),
/* harmony export */   SurveyElementEmbeddedSurvey: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyElementEmbeddedSurvey),
/* harmony export */   SurveyLocStringEditor: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyLocStringEditor),
/* harmony export */   SurveyLogic: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyLogic),
/* harmony export */   SurveyLogicOpertor: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyLogicOpertor),
/* harmony export */   SurveyLogicUI: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyLogicUI),
/* harmony export */   SurveyNavigation: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyNavigation),
/* harmony export */   SurveyQuestionBooleanSwitch: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionBooleanSwitch),
/* harmony export */   SurveyQuestionColor: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionColor),
/* harmony export */   SurveyQuestionEditorDefinition: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionEditorDefinition),
/* harmony export */   SurveyQuestionFileEditor: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionFileEditor),
/* harmony export */   SurveyQuestionLinkValue: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionLinkValue),
/* harmony export */   SurveyQuestionSpinEditor: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionSpinEditor),
/* harmony export */   SurveyQuestionTextWithReset: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyQuestionTextWithReset),
/* harmony export */   SurveyResults: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyResults),
/* harmony export */   SurveyResultsByRow: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveyResultsByRow),
/* harmony export */   SurveySimulator: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SurveySimulator),
/* harmony export */   SwitcherComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.SwitcherComponent),
/* harmony export */   TabButtonComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabButtonComponent),
/* harmony export */   TabDesignerComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabDesignerComponent),
/* harmony export */   TabJsonEditorAceComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabJsonEditorAceComponent),
/* harmony export */   TabJsonEditorErrorsComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabJsonEditorErrorsComponent),
/* harmony export */   TabJsonEditorTextareaComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabJsonEditorTextareaComponent),
/* harmony export */   TabLogicAddButtonComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabLogicAddButtonComponent),
/* harmony export */   TabLogicComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabLogicComponent),
/* harmony export */   TabPreviewSurveyComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabPreviewSurveyComponent),
/* harmony export */   TabPreviewTestSurveyAgainComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabPreviewTestSurveyAgainComponent),
/* harmony export */   TabThemeSurveyComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabThemeSurveyComponent),
/* harmony export */   TabTranslationComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabTranslationComponent),
/* harmony export */   TabbedMenuComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabbedMenuComponent),
/* harmony export */   TabbedMenuItemComponent: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TabbedMenuItemComponent),
/* harmony export */   ToolboxList: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.ToolboxList),
/* harmony export */   ToolboxToolViewModel: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.ToolboxToolViewModel),
/* harmony export */   TranslateFromAction: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TranslateFromAction),
/* harmony export */   TranslationLineSkeleton: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.TranslationLineSkeleton),
/* harmony export */   Version: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.Version),
/* harmony export */   editorLocalization: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.editorLocalization),
/* harmony export */   localization: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.localization),
/* harmony export */   renderSurveyCreator: () => (/* reexport safe */ _src_index__WEBPACK_IMPORTED_MODULE_1__.renderSurveyCreator),
/* harmony export */   settings: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.settings),
/* harmony export */   svgBundle: () => (/* reexport safe */ _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__.svgBundle)
/* harmony export */ });
/* harmony import */ var _survey_creator_react_src_entries_index_wc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../survey-creator-react/src/entries/index-wc */ "../survey-creator-react/src/entries/index-wc.ts");
/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/index */ "./src/index.ts");



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=survey-creator-js.js.map