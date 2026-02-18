/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfInteger } from '../../models/api-market-json-result-of-integer';
import { ApiOrderAgreementAltDto } from '../../models/api-order-agreement';

export interface OrdersAddAgreementByCustomer$Params {
  id: number;
      body?: ApiOrderAgreementAltDto | null
}

export function ordersAddAgreementByCustomer(http: HttpClient, rootUrl: string, params: OrdersAddAgreementByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
  const rb = new RequestBuilder(rootUrl, ordersAddAgreementByCustomer.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfInteger>;
    })
  );
}

ordersAddAgreementByCustomer.PATH = '/bla-bla-vla/orders/customers/{id}/agreement';
