/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTradePublishResult } from '../../models/api-market-json-result-of-trade-publish-result';

export interface TradesGetTradeCopy$Params {
  id: number;
}

export function tradesGetTradeCopy(http: HttpClient, rootUrl: string, params: TradesGetTradeCopy$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>> {
  const rb = new RequestBuilder(rootUrl, tradesGetTradeCopy.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>;
    })
  );
}

tradesGetTradeCopy.PATH = '/bla-bla-vla/trades/{id}/copy';
