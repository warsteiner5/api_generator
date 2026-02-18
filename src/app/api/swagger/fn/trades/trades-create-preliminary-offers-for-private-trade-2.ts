/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';
import { ApiReturnTradeToFillingAppRequestAltDto } from '../../models/api-return-trade-to-filling-app-request';

export interface TradesCreatePreliminaryOffersForPrivateTrade2$Params {
      body?: ApiReturnTradeToFillingAppRequestAltDto | null
}

export function tradesCreatePreliminaryOffersForPrivateTrade2(http: HttpClient, rootUrl: string, params?: TradesCreatePreliminaryOffersForPrivateTrade2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesCreatePreliminaryOffersForPrivateTrade2.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

tradesCreatePreliminaryOffersForPrivateTrade2.PATH = '/bla-bla-vla/trades/preliminary-offer/tofillingappstate';
