/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDateTimeAltDto } from '../../models/api-market-json-result-of-date-time';

export interface TimeGetServerTimeUtc$Params {
}

export function timeGetServerTimeUtc(http: HttpClient, rootUrl: string, params?: TimeGetServerTimeUtc$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDateTimeAltDto>> {
  const rb = new RequestBuilder(rootUrl, timeGetServerTimeUtc.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDateTimeAltDto>;
    })
  );
}

timeGetServerTimeUtc.PATH = '/market/api/v1/time/now';
