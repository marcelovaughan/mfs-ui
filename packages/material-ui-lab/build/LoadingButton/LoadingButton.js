"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _utils = require("@material-ui/utils");

var _utils2 = require("@material-ui/core/utils");

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var styles = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `pending={true}`. */
    pending: {},

    /* Styles applied to the pendingIndicator element. */
    pendingIndicator: {
      position: 'absolute',
      visibility: 'visible',
      display: 'flex'
    },

    /* Styles applied to the pendingIndicator element if `pendingPosition="center"`. */
    pendingIndicatorCenter: {
      left: '50%',
      transform: 'translate(-50%)'
    },

    /* Styles applied to the pendingIndicator element if `pendingPosition="start"`. */
    pendingIndicatorStart: {
      left: 14
    },

    /* Styles applied to the pendingIndicator element if `pendingPosition="end"`. */
    pendingIndicatorEnd: {
      right: 14
    },

    /* Styles applied to the endIcon element if `pending={true}` and `pendingPosition="end"`. */
    endIconPendingEnd: {
      visibility: 'hidden'
    },

    /* Styles applied to the startIcon element if `pending={true}` and `pendingPosition="start"`. */
    startIconPendingStart: {
      visibility: 'hidden'
    },

    /* Styles applied to the label element if `pending={true}` and `pendingPosition="center"`. */
    labelPendingCenter: {
      visibility: 'hidden'
    }
  };
};

exports.styles = styles;
var PendingIndicator = /*#__PURE__*/React.createElement(_CircularProgress["default"], {
  color: "inherit",
  size: 16
});
var LoadingButton = /*#__PURE__*/React.forwardRef(function LoadingButton(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$pending = props.pending,
      pending = _props$pending === void 0 ? false : _props$pending,
      _props$pendingIndicat = props.pendingIndicator,
      pendingIndicator = _props$pendingIndicat === void 0 ? PendingIndicator : _props$pendingIndicat,
      _props$pendingPositio = props.pendingPosition,
      pendingPosition = _props$pendingPositio === void 0 ? 'center' : _props$pendingPositio,
      other = (0, _objectWithoutProperties2["default"])(props, ["children", "classes", "className", "disabled", "pending", "pendingIndicator", "pendingPosition"]);
  return /*#__PURE__*/React.createElement(_Button["default"], (0, _extends2["default"])({
    className: (0, _clsx["default"])(classes.root, className, pending && classes.pending),
    disabled: disabled || pending,
    ref: ref,
    classes: {
      startIcon: classes["startIcon".concat(pending ? 'Pending' : '').concat((0, _utils2.capitalize)(pendingPosition))],
      endIcon: classes["endIcon".concat(pending ? 'Pending' : '').concat((0, _utils2.capitalize)(pendingPosition))],
      label: classes["label".concat(pending ? 'Pending' : '').concat((0, _utils2.capitalize)(pendingPosition))]
    }
  }, other), pending && /*#__PURE__*/React.createElement("div", {
    className: (0, _clsx["default"])(classes.pendingIndicator, classes["pendingIndicator".concat((0, _utils2.capitalize)(pendingPosition))])
  }, pendingIndicator), children);
});
process.env.NODE_ENV !== "production" ? LoadingButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the button.
   */
  children: _propTypes["default"].node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: _propTypes["default"].object,

  /**
   * @ignore
   */
  className: _propTypes["default"].string,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * If `true`, the pending indicator will be shown.
   */
  pending: _propTypes["default"].bool,

  /**
   * Element placed before the children if the button is in pending state.
   */
  pendingIndicator: _propTypes["default"].node,

  /**
   * The pending indicator can be positioned on the start, end, or the center of the button.
   */
  pendingPosition: (0, _utils.chainPropTypes)(_propTypes["default"].oneOf(['start', 'end', 'center']), function (props) {
    if (props.pendingPosition === 'start' && !props.startIcon) {
      return new Error("Material-UI: The pendingPosition=\"start\" should be used in combination with startIcon.");
    }

    if (props.pendingPosition === 'end' && !props.endIcon) {
      return new Error("Material-UI: The pendingPosition=\"end\" should be used in combination with endIcon.");
    }

    return null;
  })
} : void 0;

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiLoadingButton'
})(LoadingButton);

exports["default"] = _default;