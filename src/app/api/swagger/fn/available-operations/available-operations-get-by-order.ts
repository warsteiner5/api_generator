/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOrderAvailableOperationsDto } from '../../models/api-market-json-result-of-order-available-operations-dto';

export interface AvailableOperationsGetByOrder$Params {
  orderId: number;
}

export function availableOperationsGetByOrder(http: HttpClient, rootUrl: string, params: AvailableOperationsGetByOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrderAvailableOperationsDto>> {
  const rb = new RequestBuilder(rootUrl, availableOperationsGetByOrder.PATH, 'get');
  if (params) {
    rb.path('orderId', params.orderId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOrderAvailableOperationsDto>;
    })
  );
}

availableOperationsGetByOrder.PATH = '/market/api/v1/available-operations/trade/{orderId}/single-supplier';
