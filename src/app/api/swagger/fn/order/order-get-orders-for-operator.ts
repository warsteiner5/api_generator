/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiSearchResultOfOrderGridDtoForCustomer } from '../../models/api-api-search-result-of-order-grid-dto-for-customer';
import { ApiOrderFilterObjectForCustomerAltDto } from '../../models/api-order-filter-object-for-customer';

export interface OrderGetOrdersForOperator$Params {
      body?: ApiOrderFilterObjectForCustomerAltDto | null
}

export function orderGetOrdersForOperator(http: HttpClient, rootUrl: string, params?: OrderGetOrdersForOperator$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfOrderGridDtoForCustomer>> {
  const rb = new RequestBuilder(rootUrl, orderGetOrdersForOperator.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiSearchResultOfOrderGridDtoForCustomer>;
    })
  );
}

orderGetOrdersForOperator.PATH = '/api/order/getordersforoperator';
