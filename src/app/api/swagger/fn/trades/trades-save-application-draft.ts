/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApplicationDto2 } from '../../models/api-application-dto-2';
import { ApiMarketJsonResultOfInteger } from '../../models/api-market-json-result-of-integer';

export interface TradesSaveApplicationDraft$Params {
      body?: ApiApplicationDto2 | null
}

export function tradesSaveApplicationDraft(http: HttpClient, rootUrl: string, params?: TradesSaveApplicationDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
  const rb = new RequestBuilder(rootUrl, tradesSaveApplicationDraft.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfInteger>;
    })
  );
}

tradesSaveApplicationDraft.PATH = '/bla-bla-vla/trades/applications/draft';
