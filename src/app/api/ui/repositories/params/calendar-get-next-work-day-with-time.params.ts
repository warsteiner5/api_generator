import { CalendarGetNextWorkDayWithTime$Params } from '../../../swagger/fn/calendar/calendar-get-next-work-day-with-time';
import { GetNextWorkingDateRequestAlt } from '../../models/get-next-working-date-request-alt.interface';
import { adaptApiGetNextWorkingDateRequestAltDto } from '../../adapters/toDto/api-get-next-working-date-request.adapter';

export interface CalendarGetNextWorkDayWithTimeParams {
  body?: GetNextWorkingDateRequestAlt;
}

export const calendarGetNextWorkDayWithTimeParamsAdapter = {
  adapt(params?: CalendarGetNextWorkDayWithTimeParams): CalendarGetNextWorkDayWithTime$Params {
    if (!params) {
      return {} as CalendarGetNextWorkDayWithTime$Params;
    }
    return {
      body: adaptApiGetNextWorkingDateRequestAltDto(params.body),
    };
  }
};
