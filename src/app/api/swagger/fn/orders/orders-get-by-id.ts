/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketOrderViewDto } from '../../models/api-market-json-result-of-market-order-view-dto';

export interface OrdersGetById$Params {
  id: number;
}

export function ordersGetById(http: HttpClient, rootUrl: string, params: OrdersGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrderViewDto>> {
  const rb = new RequestBuilder(rootUrl, ordersGetById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketOrderViewDto>;
    })
  );
}

ordersGetById.PATH = '/market/api/v1/orders/{id}';
