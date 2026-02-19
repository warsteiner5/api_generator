/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAllTradesFilterObjectForCustomerAltDto } from '../../models/api-all-trades-filter-object-for-customer';
import { ApiApiSearchResultOfTradeInfoForParticipantAltDto } from '../../models/api-api-search-result-of-trade-info-for-participant';

export interface TradeGetAllTradesForCustomer$Params {
      body?: ApiAllTradesFilterObjectForCustomerAltDto | null
}

export function tradeGetAllTradesForCustomer(http: HttpClient, rootUrl: string, params?: TradeGetAllTradesForCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfTradeInfoForParticipantAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradeGetAllTradesForCustomer.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiSearchResultOfTradeInfoForParticipantAltDto>;
    })
  );
}

tradeGetAllTradesForCustomer.PATH = '/api/Trade/GetAllTradesForCustomer';
