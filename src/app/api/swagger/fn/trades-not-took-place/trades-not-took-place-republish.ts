/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTradePublishResult } from '../../models/api-market-json-result-of-trade-publish-result';

export interface TradesNotTookPlaceRepublish$Params {
  tradeId: number;
}

export function tradesNotTookPlaceRepublish(http: HttpClient, rootUrl: string, params: TradesNotTookPlaceRepublish$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>> {
  const rb = new RequestBuilder(rootUrl, tradesNotTookPlaceRepublish.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
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

tradesNotTookPlaceRepublish.PATH = '/bla-bla-vla/trades/nottookplace/republish/{tradeId}';
