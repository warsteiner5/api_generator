/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface CartExportCartItemsToExcel$Params {
  cartId: string;
}

export function cartExportCartItemsToExcel(http: HttpClient, rootUrl: string, params: CartExportCartItemsToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, cartExportCartItemsToExcel.PATH, 'get');
  if (params) {
    rb.path('cartId', params.cartId, {});
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

cartExportCartItemsToExcel.PATH = '/market/api/v1/carts/{cartId}/export-excel';
