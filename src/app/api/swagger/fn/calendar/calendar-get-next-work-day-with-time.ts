/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiGetNextWorkingDateRequestAltDto } from '../../models/api-get-next-working-date-request';
import { ApiMarketJsonResultOfDateTime } from '../../models/api-market-json-result-of-date-time';

export interface CalendarGetNextWorkDayWithTime$Params {
      body?: ApiGetNextWorkingDateRequestAltDto | null
}

export function calendarGetNextWorkDayWithTime(http: HttpClient, rootUrl: string, params?: CalendarGetNextWorkDayWithTime$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDateTime>> {
  const rb = new RequestBuilder(rootUrl, calendarGetNextWorkDayWithTime.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDateTime>;
    })
  );
}

calendarGetNextWorkDayWithTime.PATH = '/bla-bla-vla/calendar/nextworkdaywithtime';
