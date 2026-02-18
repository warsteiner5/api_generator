/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalOrderRequestAltDto } from '../../models/api-external-order-request';
import { ApiMarketJsonResultOfInteger } from '../../models/api-market-json-result-of-integer';

export interface OrdersCreateByExternalSystem$Params {
      body?: ApiExternalOrderRequestAltDto | null
}

export function ordersCreateByExternalSystem(http: HttpClient, rootUrl: string, params?: OrdersCreateByExternalSystem$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
  const rb = new RequestBuilder(rootUrl, ordersCreateByExternalSystem.PATH, 'post');
  if (params) {
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

ordersCreateByExternalSystem.PATH = '/bla-bla-vla/orders/create/external';
