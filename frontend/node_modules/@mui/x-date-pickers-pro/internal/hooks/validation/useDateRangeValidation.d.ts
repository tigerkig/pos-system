import { ValidationProps, Validator, DateValidationError, ExportedDateValidationProps } from '@mui/x-date-pickers/internals';
import { DateRange } from '../../models';
export interface DateRangeValidationProps<TInputDate, TDate> extends ExportedDateValidationProps<TDate>, ValidationProps<DateRangeValidationError, DateRange<TInputDate>> {
}
export declare const validateDateRange: Validator<any, DateRangeValidationProps<any, any>>;
declare type DateRangeValidationErrorValue = DateValidationError | 'invalidRange' | null;
export declare type DateRangeValidationError = [
    DateRangeValidationErrorValue,
    DateRangeValidationErrorValue
];
export declare const useDateRangeValidation: <TInputDate, TDate>(props: DateRangeValidationProps<TInputDate, TDate>) => DateRangeValidationError;
export {};
