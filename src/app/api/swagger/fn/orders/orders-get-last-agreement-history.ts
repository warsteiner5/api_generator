/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketOrderAgreementHistoryDto } from '../../models/api-market-json-result-of-market-order-agreement-history-dto';

export interface OrdersGetLastAgreementHistory$Params {
  id: number;
}

export function ordersGetLastAgreementHistory(http: HttpClient, rootUrl: string, params: OrdersGetLastAgreementHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrderAgreementHistoryDto>> {
  const rb = new RequestBuilder(rootUrl, ordersGetLastAgreementHistory.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketOrderAgreementHistoryDto>;
    })
  );
}

ordersGetLastAgreementHistory.PATH = '/market/api/v1/orders/{id}/agreement/last';
