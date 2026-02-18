/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { calendarGetImmediateTradeApplicationEndDate } from '../fn/calendar/calendar-get-immediate-trade-application-end-date';
import { CalendarGetImmediateTradeApplicationEndDate$Params } from '../fn/calendar/calendar-get-immediate-trade-application-end-date';
import { calendarGetNextWorkDay } from '../fn/calendar/calendar-get-next-work-day';
import { CalendarGetNextWorkDay$Params } from '../fn/calendar/calendar-get-next-work-day';
import { calendarGetNextWorkDayWithTime } from '../fn/calendar/calendar-get-next-work-day-with-time';
import { CalendarGetNextWorkDayWithTime$Params } from '../fn/calendar/calendar-get-next-work-day-with-time';
import { ApiMarketJsonResultOfDateTime } from '../models/api-market-json-result-of-date-time';

@Injectable({ providedIn: 'root' })
export class CalendarApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `calendarGetNextWorkDay()` */
  static readonly CalendarGetNextWorkDayPath = '/bla-bla-vla/calendar/nextworkday';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calendarGetNextWorkDay()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calendarGetNextWorkDay$Response(params?: CalendarGetNextWorkDay$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDateTime>> {
    return calendarGetNextWorkDay(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `calendarGetNextWorkDay$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calendarGetNextWorkDay(params?: CalendarGetNextWorkDay$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDateTime> {
    return this.calendarGetNextWorkDay$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDateTime>): ApiMarketJsonResultOfDateTime => r.body)
    );
  }

  /** Path part for operation `calendarGetNextWorkDayWithTime()` */
  static readonly CalendarGetNextWorkDayWithTimePath = '/bla-bla-vla/calendar/nextworkdaywithtime';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calendarGetNextWorkDayWithTime()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calendarGetNextWorkDayWithTime$Response(params?: CalendarGetNextWorkDayWithTime$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDateTime>> {
    return calendarGetNextWorkDayWithTime(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `calendarGetNextWorkDayWithTime$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  calendarGetNextWorkDayWithTime(params?: CalendarGetNextWorkDayWithTime$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDateTime> {
    return this.calendarGetNextWorkDayWithTime$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDateTime>): ApiMarketJsonResultOfDateTime => r.body)
    );
  }

  /** Path part for operation `calendarGetImmediateTradeApplicationEndDate()` */
  static readonly CalendarGetImmediateTradeApplicationEndDatePath = '/bla-bla-vla/calendar/immediate-trade-app-end-date';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calendarGetImmediateTradeApplicationEndDate()` instead.
   *
   * This method doesn't expect any request body.
   */
  calendarGetImmediateTradeApplicationEndDate$Response(params?: CalendarGetImmediateTradeApplicationEndDate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDateTime>> {
    return calendarGetImmediateTradeApplicationEndDate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `calendarGetImmediateTradeApplicationEndDate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  calendarGetImmediateTradeApplicationEndDate(params?: CalendarGetImmediateTradeApplicationEndDate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDateTime> {
    return this.calendarGetImmediateTradeApplicationEndDate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDateTime>): ApiMarketJsonResultOfDateTime => r.body)
    );
  }

}
