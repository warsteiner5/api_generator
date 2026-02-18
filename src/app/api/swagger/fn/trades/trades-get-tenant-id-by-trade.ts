/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfInteger } from '../../models/api-market-json-result-of-integer';

export interface TradesGetTenantIdByTrade$Params {
  tradeId: number;
}

export function tradesGetTenantIdByTrade(http: HttpClient, rootUrl: string, params: TradesGetTenantIdByTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
  const rb = new RequestBuilder(rootUrl, tradesGetTenantIdByTrade.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
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

tradesGetTenantIdByTrade.PATH = '/bla-bla-vla/trades/GetTenantIdByTrade/{tradeId}';
