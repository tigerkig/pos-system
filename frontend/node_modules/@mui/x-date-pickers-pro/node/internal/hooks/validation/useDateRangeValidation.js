"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDateRange = exports.useDateRangeValidation = void 0;

var _internals = require("@mui/x-date-pickers/internals");

var _dateUtils = require("../../utils/date-utils");

const validateDateRange = ({
  props,
  value,
  adapter
}) => {
  const [start, end] = value; // for partial input

  if (start === null || end === null) {
    return [null, null];
  }

  const dateValidations = [(0, _internals.validateDate)({
    adapter,
    value: start,
    props
  }), (0, _internals.validateDate)({
    adapter,
    value: end,
    props
  })];

  if (dateValidations[0] || dateValidations[1]) {
    return dateValidations;
  }

  if (!(0, _dateUtils.isRangeValid)(adapter.utils, (0, _dateUtils.parseRangeInputValue)(adapter.utils, value))) {
    return ['invalidRange', 'invalidRange'];
  }

  return [null, null];
};

exports.validateDateRange = validateDateRange;

const isSameDateRangeError = (a, b) => b !== null && a[1] === b[1] && a[0] === b[0];

const useDateRangeValidation = props => {
  return (0, _internals.useValidation)(props, validateDateRange, isSameDateRangeError);
};

exports.useDateRangeValidation = useDateRangeValidation;