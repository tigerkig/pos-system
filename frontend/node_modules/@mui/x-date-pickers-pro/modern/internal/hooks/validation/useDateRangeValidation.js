import { useValidation, validateDate } from '@mui/x-date-pickers/internals';
import { isRangeValid, parseRangeInputValue } from '../../utils/date-utils';
export const validateDateRange = ({
  props,
  value,
  adapter
}) => {
  const [start, end] = value; // for partial input

  if (start === null || end === null) {
    return [null, null];
  }

  const dateValidations = [validateDate({
    adapter,
    value: start,
    props
  }), validateDate({
    adapter,
    value: end,
    props
  })];

  if (dateValidations[0] || dateValidations[1]) {
    return dateValidations;
  }

  if (!isRangeValid(adapter.utils, parseRangeInputValue(adapter.utils, value))) {
    return ['invalidRange', 'invalidRange'];
  }

  return [null, null];
};

const isSameDateRangeError = (a, b) => b !== null && a[1] === b[1] && a[0] === b[0];

export const useDateRangeValidation = props => {
  return useValidation(props, validateDateRange, isSameDateRangeError);
};