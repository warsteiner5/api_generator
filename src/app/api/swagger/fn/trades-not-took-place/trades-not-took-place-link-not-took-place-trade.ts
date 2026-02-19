/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBooleanAltDto } from '../../models/api-market-json-result-of-boolean';

export interface TradesNotTookPlaceLinkNotTookPlaceTrade$Params {
  tradeId: number;
  childTradeId: number;
}

export function tradesNotTookPlaceLinkNotTookPlaceTrade(http: HttpClient, rootUrl: string, params: TradesNotTookPlaceLinkNotTookPlaceTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesNotTookPlaceLinkNotTookPlaceTrade.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.path('childTradeId', params.childTradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>;
    })
  );
}

tradesNotTookPlaceLinkNotTookPlaceTrade.PATH = '/market/api/v1/trades/nottookplace/{tradeId}/link/{childTradeId}';
