/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCartDto } from '../../models/api-cart-dto';

export interface CartGetClientCarts$Params {
  clientSessionId?: string | null;
}

export function cartGetClientCarts(http: HttpClient, rootUrl: string, params?: CartGetClientCarts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiCartDto>>> {
  const rb = new RequestBuilder(rootUrl, cartGetClientCarts.PATH, 'get');
  if (params) {
    rb.query('clientSessionId', params.clientSessionId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApiCartDto>>;
    })
  );
}

cartGetClientCarts.PATH = '/bla-bla-vla/carts';
