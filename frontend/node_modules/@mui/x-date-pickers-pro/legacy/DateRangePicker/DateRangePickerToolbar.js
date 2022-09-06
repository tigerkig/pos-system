import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { generateUtilityClasses } from '@mui/material';
import { PickersToolbar, PickersToolbarButton, pickersToolbarClasses, useUtils } from '@mui/x-date-pickers/internals';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export var dateRangePickerToolbarClasses = generateUtilityClasses('MuiDateRangePickerToolbar', ['root']);
var DateRangePickerToolbarRoot = styled(PickersToolbar, {
  name: 'MuiDateRangePickerToolbar',
  slot: 'Root',
  overridesResolver: function overridesResolver(props, styles) {
    return styles.root;
  }
})(_defineProperty({}, "& .".concat(pickersToolbarClasses.penIconButton), {
  position: 'relative',
  top: 4
}));
var DateRangePickerToolbarContainer = styled('div')({
  display: 'flex'
});
/**
 * @ignore - internal component.
 */

export var DateRangePickerToolbar = function DateRangePickerToolbar(props) {
  var utils = useUtils();

  var currentlySelectingRangeEnd = props.currentlySelectingRangeEnd,
      _props$parsedValue = _slicedToArray(props.parsedValue, 2),
      start = _props$parsedValue[0],
      end = _props$parsedValue[1],
      endText = props.endText,
      isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
      setCurrentlySelectingRangeEnd = props.setCurrentlySelectingRangeEnd,
      startText = props.startText,
      toggleMobileKeyboardView = props.toggleMobileKeyboardView,
      toolbarFormat = props.toolbarFormat,
      _props$toolbarTitle = props.toolbarTitle,
      toolbarTitle = _props$toolbarTitle === void 0 ? 'Select date range' : _props$toolbarTitle;

  var startDateValue = start ? utils.formatByString(start, toolbarFormat || utils.formats.shortDate) : startText;
  var endDateValue = end ? utils.formatByString(end, toolbarFormat || utils.formats.shortDate) : endText;
  var ownerState = props;
  return /*#__PURE__*/_jsx(DateRangePickerToolbarRoot, {
    toolbarTitle: toolbarTitle,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: false,
    className: dateRangePickerToolbarClasses.root,
    ownerState: ownerState,
    children: /*#__PURE__*/_jsxs(DateRangePickerToolbarContainer, {
      children: [/*#__PURE__*/_jsx(PickersToolbarButton, {
        variant: start !== null ? 'h5' : 'h6',
        value: startDateValue,
        selected: currentlySelectingRangeEnd === 'start',
        onClick: function onClick() {
          return setCurrentlySelectingRangeEnd('start');
        }
      }), /*#__PURE__*/_jsxs(Typography, {
        variant: "h5",
        children: ["\xA0", '–', "\xA0"]
      }), /*#__PURE__*/_jsx(PickersToolbarButton, {
        variant: end !== null ? 'h5' : 'h6',
        value: endDateValue,
        selected: currentlySelectingRangeEnd === 'end',
        onClick: function onClick() {
          return setCurrentlySelectingRangeEnd('end');
        }
      })]
    })
  });
};