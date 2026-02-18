import { CalendarApiService } from '../../swagger/services/calendar-api.service';
import { CalendarGetImmediateTradeApplicationEndDateParams, calendarGetImmediateTradeApplicationEndDateParamsAdapter } from './params/calendar-get-immediate-trade-application-end-date.params';
import { CalendarGetNextWorkDayParams, calendarGetNextWorkDayParamsAdapter } from './params/calendar-get-next-work-day.params';
import { CalendarGetNextWorkDayWithTimeParams, calendarGetNextWorkDayWithTimeParamsAdapter } from './params/calendar-get-next-work-day-with-time.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CalendarRepository {
  private readonly _api = inject(CalendarApiService);

  calendarGetImmediateTradeApplicationEndDate(params?: CalendarGetImmediateTradeApplicationEndDateParams): Observable<string> {
    return this._api.calendarGetImmediateTradeApplicationEndDate(calendarGetImmediateTradeApplicationEndDateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  calendarGetNextWorkDay(params?: CalendarGetNextWorkDayParams): Observable<string> {
    return this._api.calendarGetNextWorkDay(calendarGetNextWorkDayParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  calendarGetNextWorkDayWithTime(params?: CalendarGetNextWorkDayWithTimeParams): Observable<string> {
    return this._api.calendarGetNextWorkDayWithTime(calendarGetNextWorkDayWithTimeParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

}
