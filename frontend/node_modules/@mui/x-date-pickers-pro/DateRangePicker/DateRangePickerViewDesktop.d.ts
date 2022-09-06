/// <reference types="react" />
import { ExportedDateValidationProps, ExportedArrowSwitcherProps, DayPickerProps } from '@mui/x-date-pickers/internals';
import { DateRange } from '../internal/models';
import { DateRangePickerDayProps } from '../DateRangePickerDay';
export interface ExportedDesktopDateRangeCalendarProps<TDate> {
    /**
     * The number of calendars that render on **desktop**.
     * @default 2
     */
    calendars?: 1 | 2 | 3;
    /**
     * Custom renderer for `<DateRangePicker />` days. @DateIOType
     * @example (date, dateRangePickerDayProps) => <DateRangePickerDay {...dateRangePickerDayProps} />
     * @template TDate
     * @param {TDate} day The day to render.
     * @param {DateRangePickerDayProps<TDate>} dateRangePickerDayProps The props of the day to render.
     * @returns {JSX.Element} The element representing the day.
     */
    renderDay?: (day: TDate, dateRangePickerDayProps: DateRangePickerDayProps<TDate>) => JSX.Element;
}
interface DesktopDateRangeCalendarProps<TDate> extends ExportedDesktopDateRangeCalendarProps<TDate>, Omit<DayPickerProps<TDate>, 'selectedDays' | 'renderDay' | 'onFocusedDayChange'>, ExportedDateValidationProps<TDate>, ExportedArrowSwitcherProps {
    calendars: 1 | 2 | 3;
    parsedValue: DateRange<TDate>;
    changeMonth: (date: TDate) => void;
    currentlySelectingRangeEnd: 'start' | 'end';
}
/**
 * @ignore - internal component.
 */
export declare function DateRangePickerViewDesktop<TDate>(props: DesktopDateRangeCalendarProps<TDate>): JSX.Element;
export {};
