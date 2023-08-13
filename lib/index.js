"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    content = _ref.content,
    title = _ref.title,
    _ref$textColor = _ref.textColor,
    textColor = _ref$textColor === void 0 ? "black" : _ref$textColor,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? "white" : _ref$backgroundColor,
    _ref$borderColor = _ref.borderColor,
    borderColor = _ref$borderColor === void 0 ? "red" : _ref$borderColor,
    _ref$titleFontSize = _ref.titleFontSize,
    titleFontSize = _ref$titleFontSize === void 0 ? "24px" : _ref$titleFontSize,
    _ref$contentFontSize = _ref.contentFontSize,
    contentFontSize = _ref$contentFontSize === void 0 ? "16px" : _ref$contentFontSize,
    _ref$contentAlign = _ref.contentAlign,
    contentAlign = _ref$contentAlign === void 0 ? "left" : _ref$contentAlign,
    _ref$customStyles = _ref.customStyles,
    customStyles = _ref$customStyles === void 0 ? {} : _ref$customStyles,
    _ref$closeBtnStyle = _ref.closeBtnStyle,
    closeBtnStyle = _ref$closeBtnStyle === void 0 ? {} : _ref$closeBtnStyle,
    _ref$modalWidth = _ref.modalWidth,
    modalWidth = _ref$modalWidth === void 0 ? "70%" : _ref$modalWidth;
  if (!isOpen) return null;
  var overlayDefaultStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  };
  var modalDefaultStyle = {
    backgroundColor: 'black',
    borderRadius: '10px',
    padding: '20px',
    width: '70%',
    maxWidth: '500px'
  };
  var headerDefaultStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  var closeButtonDefaultStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    lineHeight: 1,
    padding: 0,
    outline: 'none'
  };
  var headerStyles = _objectSpread(_objectSpread({
    color: textColor,
    backgroundColor: backgroundColor,
    fontSize: titleFontSize
  }, headerDefaultStyle), customStyles.header);
  var contentStyles = _objectSpread({
    color: textColor,
    fontSize: contentFontSize,
    textAlign: contentAlign
  }, customStyles.content);
  var overlayStyles = _objectSpread(_objectSpread({}, overlayDefaultStyle), customStyles.overlay);
  var modalStyles = _objectSpread(_objectSpread({}, modalDefaultStyle), {}, {
    width: modalWidth,
    border: "1px solid ".concat(borderColor)
  }, customStyles.modal);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: overlayStyles
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: modalStyles
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: headerStyles
  }, /*#__PURE__*/_react["default"].createElement("h2", null, title), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    style: _objectSpread(_objectSpread({}, closeButtonDefaultStyle), {}, {
      color: textColor
    }, closeBtnStyle)
  }, "X")), /*#__PURE__*/_react["default"].createElement("div", {
    style: contentStyles
  }, content)));
}