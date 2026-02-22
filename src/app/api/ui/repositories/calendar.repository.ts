import { CalendarApiService } from '../../swagger/services/calendar-api.service';
import { CalendarGetImmediateTradeApplicationEndDateParams, calendarGetImmediateTradeApplicationEndDateAdapter } from './params/calendar-get-immediate-trade-application-end-date.params';
import { CalendarGetNextWorkDayParams, calendarGetNextWorkDayAdapter } from './params/calendar-get-next-work-day.params';
import { CalendarGetNextWorkDayWithTimeParams, calendarGetNextWorkDayWithTimeAdapter } from './params/calendar-get-next-work-day-with-time.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CalendarRepository {
  private readonly _api = inject(CalendarApiService);

  calendarGetImmediateTradeApplicationEndDate(params?: CalendarGetImmediateTradeApplicationEndDateParams): Observable<string> {
    return this._api.calendarGetImmediateTradeApplicationEndDate(calendarGetImmediateTradeApplicationEndDateAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  calendarGetNextWorkDay(params?: CalendarGetNextWorkDayParams): Observable<string> {
    return this._api.calendarGetNextWorkDay(calendarGetNextWorkDayAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  calendarGetNextWorkDayWithTime(params?: CalendarGetNextWorkDayWithTimeParams): Observable<string> {
    return this._api.calendarGetNextWorkDayWithTime(calendarGetNextWorkDayWithTimeAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

}
