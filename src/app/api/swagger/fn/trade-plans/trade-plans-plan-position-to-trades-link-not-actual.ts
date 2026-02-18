/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface TradePlansPlanPositionToTradesLinkNotActual$Params {
  tradeId: number;
}

export function tradePlansPlanPositionToTradesLinkNotActual(http: HttpClient, rootUrl: string, params: TradePlansPlanPositionToTradesLinkNotActual$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradePlansPlanPositionToTradesLinkNotActual.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

tradePlansPlanPositionToTradesLinkNotActual.PATH = '/bla-bla-vla/plans/position-to-trade-link/{tradeId}/not-actual';
