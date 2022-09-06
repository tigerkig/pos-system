import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { generateUtilityClasses } from '@mui/material';
import { PickersToolbar, PickersToolbarButton, pickersToolbarClasses, useUtils } from '@mui/x-date-pickers/internals';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export const dateRangePickerToolbarClasses = generateUtilityClasses('MuiDateRangePickerToolbar', ['root']);
const DateRangePickerToolbarRoot = styled(PickersToolbar, {
  name: 'MuiDateRangePickerToolbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  [`& .${pickersToolbarClasses.penIconButton}`]: {
    position: 'relative',
    top: 4
  }
});
const DateRangePickerToolbarContainer = styled('div')({
  display: 'flex'
});
/**
 * @ignore - internal component.
 */

export const DateRangePickerToolbar = props => {
  const utils = useUtils();
  const {
    currentlySelectingRangeEnd,
    parsedValue: [start, end],
    endText,
    isMobileKeyboardViewOpen,
    setCurrentlySelectingRangeEnd,
    startText,
    toggleMobileKeyboardView,
    toolbarFormat,
    toolbarTitle = 'Select date range'
  } = props;
  const startDateValue = start ? utils.formatByString(start, toolbarFormat || utils.formats.shortDate) : startText;
  const endDateValue = end ? utils.formatByString(end, toolbarFormat || utils.formats.shortDate) : endText;
  const ownerState = props;
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
        onClick: () => setCurrentlySelectingRangeEnd('start')
      }), /*#__PURE__*/_jsxs(Typography, {
        variant: "h5",
        children: ["\xA0", '–', "\xA0"]
      }), /*#__PURE__*/_jsx(PickersToolbarButton, {
        variant: end !== null ? 'h5' : 'h6',
        value: endDateValue,
        selected: currentlySelectingRangeEnd === 'end',
        onClick: () => setCurrentlySelectingRangeEnd('end')
      })]
    })
  });
};