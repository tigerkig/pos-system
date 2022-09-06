import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useValidation, validateDate } from '@mui/x-date-pickers/internals';
import { isRangeValid, parseRangeInputValue } from '../../utils/date-utils';
export var validateDateRange = function validateDateRange(_ref) {
  var props = _ref.props,
      value = _ref.value,
      adapter = _ref.adapter;

  var _value = _slicedToArray(value, 2),
      start = _value[0],
      end = _value[1]; // for partial input


  if (start === null || end === null) {
    return [null, null];
  }

  var dateValidations = [validateDate({
    adapter: adapter,
    value: start,
    props: props
  }), validateDate({
    adapter: adapter,
    value: end,
    props: props
  })];

  if (dateValidations[0] || dateValidations[1]) {
    return dateValidations;
  }

  if (!isRangeValid(adapter.utils, parseRangeInputValue(adapter.utils, value))) {
    return ['invalidRange', 'invalidRange'];
  }

  return [null, null];
};

var isSameDateRangeError = function isSameDateRangeError(a, b) {
  return b !== null && a[1] === b[1] && a[0] === b[0];
};

export var useDateRangeValidation = function useDateRangeValidation(props) {
  return useValidation(props, validateDateRange, isSameDateRangeError);
};