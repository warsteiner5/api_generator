/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCartSupplierPutDto } from '../../models/api-cart-supplier-put-dto';

export interface CartPutItemsBySupplier$Params {
  cartId: string;
  supplierOrganizationId: number;
      body?: ApiCartSupplierPutDto | null
}

export function cartPutItemsBySupplier(http: HttpClient, rootUrl: string, params: CartPutItemsBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, cartPutItemsBySupplier.PATH, 'put');
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

cartPutItemsBySupplier.PATH = '/market/api/v1/carts/{cartId}/cart-items/by-supplier/{supplierOrganizationId}';
