/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDateTime } from '../../models/api-market-json-result-of-date-time';

export interface TimeGetServerTimeUtc$Params {
}

export function timeGetServerTimeUtc(http: HttpClient, rootUrl: string, params?: TimeGetServerTimeUtc$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDateTime>> {
  const rb = new RequestBuilder(rootUrl, timeGetServerTimeUtc.PATH, 'get');
  if (params) {
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

timeGetServerTimeUtc.PATH = '/bla-bla-vla/time/now';
