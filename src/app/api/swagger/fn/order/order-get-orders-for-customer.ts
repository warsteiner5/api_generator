/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiSearchResultOfOrderGridDtoForCustomer } from '../../models/api-api-search-result-of-order-grid-dto-for-customer';
import { ApiOrderFilterObjectForCustomerAltDto } from '../../models/api-order-filter-object-for-customer';

export interface OrderGetOrdersForCustomer$Params {
      body?: ApiOrderFilterObjectForCustomerAltDto | null
}

export function orderGetOrdersForCustomer(http: HttpClient, rootUrl: string, params?: OrderGetOrdersForCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfOrderGridDtoForCustomer>> {
  const rb = new RequestBuilder(rootUrl, orderGetOrdersForCustomer.PATH, 'post');
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

orderGetOrdersForCustomer.PATH = '/api/order/GetOrdersForCustomer';
