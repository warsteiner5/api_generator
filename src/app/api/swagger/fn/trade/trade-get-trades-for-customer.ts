/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiSearchResultOfTradeInfoForCustomerAltDto } from '../../models/api-api-search-result-of-trade-info-for-customer';
import { ApiTradesFilterObjectForCustomerAltDto } from '../../models/api-trades-filter-object-for-customer';

export interface TradeGetTradesForCustomer$Params {
      body?: ApiTradesFilterObjectForCustomerAltDto | null
}

export function tradeGetTradesForCustomer(http: HttpClient, rootUrl: string, params?: TradeGetTradesForCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfTradeInfoForCustomerAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradeGetTradesForCustomer.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiSearchResultOfTradeInfoForCustomerAltDto>;
    })
  );
}

tradeGetTradesForCustomer.PATH = '/bla-bla-vla/Trade/GetTradesForCustomer';
