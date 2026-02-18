import { CalendarGetNextWorkDay$Params } from '../../../swagger/fn/calendar/calendar-get-next-work-day';
import { GetNextWorkingDateRequestAlt } from '../../models/get-next-working-date-request-alt.interface';
import { adaptApiGetNextWorkingDateRequestAltDto } from '../../adapters/toDto/api-get-next-working-date-request.adapter';

export interface CalendarGetNextWorkDayParams {
  body?: GetNextWorkingDateRequestAlt;
}

export const calendarGetNextWorkDayParamsAdapter = {
  adapt(params?: CalendarGetNextWorkDayParams): CalendarGetNextWorkDay$Params {
    if (!params) {
      return {} as CalendarGetNextWorkDay$Params;
    }
    return {
      body: adaptApiGetNextWorkingDateRequestAltDto(params.body),
    };
  }
};
