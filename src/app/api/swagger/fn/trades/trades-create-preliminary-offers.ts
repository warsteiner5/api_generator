/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIEnumerableOfIntegerAltDto } from '../../models/api-market-json-result-of-i-enumerable-of-integer';

export interface TradesCreatePreliminaryOffers$Params {
  tradeId: number;
}

export function tradesCreatePreliminaryOffers(http: HttpClient, rootUrl: string, params: TradesCreatePreliminaryOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesCreatePreliminaryOffers.PATH, 'post');
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

tradesCreatePreliminaryOffers.PATH = '/market/api/v1/trades/{tradeId}/application/create-preliminary-offers';
