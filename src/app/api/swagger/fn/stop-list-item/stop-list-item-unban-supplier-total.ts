/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface StopListItemUnbanSupplierTotal$Params {
  supplierId: number;
      body?: string | null
}

export function stopListItemUnbanSupplierTotal(http: HttpClient, rootUrl: string, params: StopListItemUnbanSupplierTotal$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, stopListItemUnbanSupplierTotal.PATH, 'post');
  if (params) {
    rb.path('supplierId', params.supplierId, {});
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

stopListItemUnbanSupplierTotal.PATH = '/market/api/v1/stoplistitem/unbanTotal/{supplierId}';
