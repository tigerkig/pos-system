import * as React from 'react';
import { ExportedCalendarPickerProps, PickerStatePickerProps } from '@mui/x-date-pickers/internals';
import { DateRange, CurrentlySelectingRangeEndProps } from '../internal/models/dateRange';
import { DateRangePickerViewMobileSlotsComponent, DateRangePickerViewMobileSlotsComponentsProps } from './DateRangePickerViewMobile';
import { DateRangeInputProps } from './DateRangePickerInput';
import { ExportedDesktopDateRangeCalendarProps } from './DateRangePickerViewDesktop';
export interface DateRangePickerViewSlotsComponent extends DateRangePickerViewMobileSlotsComponent {
}
export interface DateRangePickerViewSlotsComponentsProps extends DateRangePickerViewMobileSlotsComponentsProps {
}
export interface ExportedDateRangePickerViewProps<TDate> extends ExportedDesktopDateRangeCalendarProps<TDate>, Omit<ExportedCalendarPickerProps<TDate>, 'onYearChange' | 'renderDay'> {
    /**
     * Overrideable components.
     * @default {}
     */
    components?: Partial<DateRangePickerViewSlotsComponent>;
    /**
     * The props used for each component slot.
     * @default {}
     */
    componentsProps?: Partial<DateRangePickerViewSlotsComponentsProps>;
    /**
     * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
     * @default false
     */
    disableAutoMonthSwitching?: boolean;
    /**
     * Mobile picker title, displaying in the toolbar.
     * @default 'Select date range'
     */
    toolbarTitle?: React.ReactNode;
    /**
     * Date format, that is displaying in toolbar.
     */
    toolbarFormat?: string;
    /**
     * If `true`, show the toolbar even in desktop mode.
     */
    showToolbar?: boolean;
    /**
     * className applied to the root component.
     */
    className?: string;
}
interface DateRangePickerViewProps<TInputDate, TDate> extends CurrentlySelectingRangeEndProps, ExportedDateRangePickerViewProps<TDate>, PickerStatePickerProps<DateRange<TDate>> {
    calendars: 1 | 2 | 3;
    open: boolean;
    startText: React.ReactNode;
    endText: React.ReactNode;
    DateInputProps: DateRangeInputProps<TInputDate, TDate>;
}
declare type DateRangePickerViewComponent = (<TInputDate, TDate = TInputDate>(props: DateRangePickerViewProps<TInputDate, TDate>) => JSX.Element) & {
    propTypes?: any;
};
export declare const DateRangePickerView: DateRangePickerViewComponent;
export {};
