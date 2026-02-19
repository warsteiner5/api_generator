/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIEnumerableOfIntegerAltDto } from '../../models/api-market-json-result-of-i-enumerable-of-integer';

export interface TradesCreatePreliminaryOffersForPrivateTrade$Params {
  tradeId: number;
}

export function tradesCreatePreliminaryOffersForPrivateTrade(http: HttpClient, rootUrl: string, params: TradesCreatePreliminaryOffersForPrivateTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesCreatePreliminaryOffersForPrivateTrade.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfIntegerAltDto>;
    })
  );
}

tradesCreatePreliminaryOffersForPrivateTrade.PATH = '/market/api/v1/trades/{tradeId}/application/create-preliminary-offers/private';
