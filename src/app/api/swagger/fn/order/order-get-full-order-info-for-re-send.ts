/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiOrderViewDto } from '../../models/api-order-view-dto';

export interface OrderGetFullOrderInfoForReSend$Params {
  id: number;
}

export function orderGetFullOrderInfoForReSend(http: HttpClient, rootUrl: string, params: OrderGetFullOrderInfoForReSend$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiOrderViewDto>> {
  const rb = new RequestBuilder(rootUrl, orderGetFullOrderInfoForReSend.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiOrderViewDto>;
    })
  );
}

orderGetFullOrderInfoForReSend.PATH = '/api/order/{id}/GetFullOrderInfoForReSend';
