/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto } from '../../models/api-market-json-result-of-list-of-market-order-agreement-history-dto';

export interface OrdersGetAgreementHistory$Params {
  id: number;
}

export function ordersGetAgreementHistory(http: HttpClient, rootUrl: string, params: OrdersGetAgreementHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto>> {
  const rb = new RequestBuilder(rootUrl, ordersGetAgreementHistory.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto>;
    })
  );
}

ordersGetAgreementHistory.PATH = '/market/api/v1/orders/{id}/agreement/history';
