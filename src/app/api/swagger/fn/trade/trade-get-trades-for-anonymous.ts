/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiSearchResultOfTradeInfoForAnonymousAltDto } from '../../models/api-api-search-result-of-trade-info-for-anonymous';
import { ApiTradesFilterObjectForAnonymousAltDto } from '../../models/api-trades-filter-object-for-anonymous';

export interface TradeGetTradesForAnonymous$Params {
      body?: ApiTradesFilterObjectForAnonymousAltDto | null
}

export function tradeGetTradesForAnonymous(http: HttpClient, rootUrl: string, params?: TradeGetTradesForAnonymous$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfTradeInfoForAnonymousAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradeGetTradesForAnonymous.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiSearchResultOfTradeInfoForAnonymousAltDto>;
    })
  );
}

tradeGetTradesForAnonymous.PATH = '/bla-bla-vla/Trade/GetTradesForAnonymous';
