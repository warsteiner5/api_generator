/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiValueDtoOfStringAltDto } from '../../models/api-value-dto-of-string';

export interface CartUpdateCartProperty$Params {
  id: string;
  propertyName: string | null;
      body?: ApiValueDtoOfStringAltDto | null
}

export function cartUpdateCartProperty(http: HttpClient, rootUrl: string, params: CartUpdateCartProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, cartUpdateCartProperty.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
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

cartUpdateCartProperty.PATH = '/bla-bla-vla/carts/{id}/{propertyName}';
