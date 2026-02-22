import { CalendarGetNextWorkDayWithTime$Params } from '../../../swagger/fn/calendar/calendar-get-next-work-day-with-time';
import { GetNextWorkingDateRequestAlt } from '../../models/get-next-working-date-request-alt.interface';
import { apiGetNextWorkingDateRequestAltDtoAdapter } from '../../adapters/models/api-get-next-working-date-request.adapter';

// @ts-ignore
export interface CalendarGetNextWorkDayWithTimeParams {
  body?: GetNextWorkingDateRequestAlt;
}

export function calendarGetNextWorkDayWithTimeAdapter(params?: CalendarGetNextWorkDayWithTimeParams): CalendarGetNextWorkDayWithTime$Params {
  if (!params) {
    return {} as CalendarGetNextWorkDayWithTime$Params;
  }
  return {
      body: apiGetNextWorkingDateRequestAltDtoAdapter(params.body),
  };
}
