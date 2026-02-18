/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOrderFromCartCreatedInfo } from '../../models/api-market-json-result-of-order-from-cart-created-info';
import { ApiOrderFromCartAltDto } from '../../models/api-order-from-cart';

export interface OrdersCreateFromCart$Params {
      body?: ApiOrderFromCartAltDto | null
}

export function ordersCreateFromCart(http: HttpClient, rootUrl: string, params?: OrdersCreateFromCart$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrderFromCartCreatedInfo>> {
  const rb = new RequestBuilder(rootUrl, ordersCreateFromCart.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOrderFromCartCreatedInfo>;
    })
  );
}

ordersCreateFromCart.PATH = '/bla-bla-vla/orders/cart';
