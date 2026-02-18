/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfMarketTradePerson } from '../../models/api-market-json-result-of-list-of-market-trade-person';

export interface TradesGetCustomerSignerList$Params {
}

export function tradesGetCustomerSignerList(http: HttpClient, rootUrl: string, params?: TradesGetCustomerSignerList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketTradePerson>> {
  const rb = new RequestBuilder(rootUrl, tradesGetCustomerSignerList.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfMarketTradePerson>;
    })
  );
}

tradesGetCustomerSignerList.PATH = '/bla-bla-vla/trades/deal-signer-list';
