/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCartItemBindingDto } from '../../models/api-cart-item-binding-dto';
import { ApiCartItemDto } from '../../models/api-cart-item-dto';

export interface CartAddCartItem$Params {
  clientSessionId?: string | null;
      body?: ApiCartItemBindingDto | null
}

export function cartAddCartItem(http: HttpClient, rootUrl: string, params?: CartAddCartItem$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiCartItemDto>> {
  const rb = new RequestBuilder(rootUrl, cartAddCartItem.PATH, 'post');
  if (params) {
    rb.query('clientSessionId', params.clientSessionId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiCartItemDto>;
    })
  );
}

cartAddCartItem.PATH = '/bla-bla-vla/cart-items';
