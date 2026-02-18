/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiValueDtoOfStringAltDto } from '../../models/api-value-dto-of-string';

export interface CartUpdateCartItemProperty$Params {
  cartItemid: string;
  propertyName: string | null;
      body?: ApiValueDtoOfStringAltDto | null
}

export function cartUpdateCartItemProperty(http: HttpClient, rootUrl: string, params: CartUpdateCartItemProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, cartUpdateCartItemProperty.PATH, 'put');
  if (params) {
    rb.path('cartItemid', params.cartItemid, {});
    rb.path('propertyName', params.propertyName, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

cartUpdateCartItemProperty.PATH = '/bla-bla-vla/cart-items/{cartItemid}/{propertyName}';
