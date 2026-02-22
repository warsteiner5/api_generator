import { CalendarGetNextWorkDay$Params } from '../../../swagger/fn/calendar/calendar-get-next-work-day';
import { GetNextWorkingDateRequestAlt } from '../../models/get-next-working-date-request-alt.interface';
import { apiGetNextWorkingDateRequestAltDtoAdapter } from '../../adapters/models/api-get-next-working-date-request.adapter';

// @ts-ignore
export interface CalendarGetNextWorkDayParams {
  body?: GetNextWorkingDateRequestAlt;
}

export function calendarGetNextWorkDayAdapter(params?: CalendarGetNextWorkDayParams): CalendarGetNextWorkDay$Params {
  if (!params) {
    return {} as CalendarGetNextWorkDay$Params;
  }
  return {
      body: apiGetNextWorkingDateRequestAltDtoAdapter(params.body),
  };
}
