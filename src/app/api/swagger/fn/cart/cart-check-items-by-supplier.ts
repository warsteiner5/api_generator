/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiValueDtoOfBoolean } from '../../models/api-value-dto-of-boolean';

export interface CartCheckItemsBySupplier$Params {
  cartId: string;
  supplierOrganizationId: number;
      body?: ApiValueDtoOfBoolean | null
}

export function cartCheckItemsBySupplier(http: HttpClient, rootUrl: string, params: CartCheckItemsBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, cartCheckItemsBySupplier.PATH, 'put');
  if (params) {
    rb.path('cartId', params.cartId, {});
    rb.path('supplierOrganizationId', params.supplierOrganizationId, {});
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

cartCheckItemsBySupplier.PATH = '/market/api/v1/carts/{cartId}/cart-items/by-supplier/{supplierOrganizationId}/isChecked';
