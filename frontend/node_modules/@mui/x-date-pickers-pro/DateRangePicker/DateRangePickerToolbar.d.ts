import * as React from 'react';
import { BaseToolbarProps } from '@mui/x-date-pickers/internals';
import { DateRange, CurrentlySelectingRangeEndProps } from '../internal/models';
export declare const dateRangePickerToolbarClasses: Record<"root", string>;
interface DateRangePickerToolbarProps<TDate> extends CurrentlySelectingRangeEndProps, Pick<BaseToolbarProps<TDate, DateRange<TDate>>, 'isMobileKeyboardViewOpen' | 'toggleMobileKeyboardView' | 'toolbarTitle' | 'toolbarFormat' | 'parsedValue'> {
    startText: React.ReactNode;
    endText: React.ReactNode;
}
/**
 * @ignore - internal component.
 */
export declare const DateRangePickerToolbar: <TDate extends unknown>(props: DateRangePickerToolbarProps<TDate>) => JSX.Element;
export {};
