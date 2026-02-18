/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiSearchResultOfOrderGridDtoForCustomerAltDto } from '../../models/api-api-search-result-of-order-grid-dto-for-customer';
import { ApiOrderFilterObjectForParticipantAltDto } from '../../models/api-order-filter-object-for-participant';

export interface OrderGetOrdersForParticipant$Params {
      body?: ApiOrderFilterObjectForParticipantAltDto | null
}

export function orderGetOrdersForParticipant(http: HttpClient, rootUrl: string, params?: OrderGetOrdersForParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfOrderGridDtoForCustomerAltDto>> {
  const rb = new RequestBuilder(rootUrl, orderGetOrdersForParticipant.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiSearchResultOfOrderGridDtoForCustomerAltDto>;
    })
  );
}

orderGetOrdersForParticipant.PATH = '/bla-bla-vla/order/GetOrdersForParticipant';
