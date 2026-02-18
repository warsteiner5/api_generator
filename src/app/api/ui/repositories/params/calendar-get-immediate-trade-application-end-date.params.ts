import { CalendarGetImmediateTradeApplicationEndDate$Params } from '../../../swagger/fn/calendar/calendar-get-immediate-trade-application-end-date';

export interface CalendarGetImmediateTradeApplicationEndDateParams {
}

export const calendarGetImmediateTradeApplicationEndDateParamsAdapter = {
  adapt(params?: CalendarGetImmediateTradeApplicationEndDateParams): CalendarGetImmediateTradeApplicationEndDate$Params {
    if (!params) {
      return {} as CalendarGetImmediateTradeApplicationEndDate$Params;
    }
    return {
    };
  }
};
