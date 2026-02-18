/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfInteger } from '../../models/api-market-json-result-of-integer';

export interface TradesCreatePreliminaryOffers2$Params {
  tradeId: number;
  offerId: number;
}

export function tradesCreatePreliminaryOffers2(http: HttpClient, rootUrl: string, params: TradesCreatePreliminaryOffers2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
  const rb = new RequestBuilder(rootUrl, tradesCreatePreliminaryOffers2.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.query('offerId', params.offerId, {});
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

tradesCreatePreliminaryOffers2.PATH = '/bla-bla-vla/trades/{tradeId}/application/create-preliminary-offers-by-operator';
