/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface SupplierFinanceTransitionToRtsTenderPro$Params {
  tenantId: number;
}

export function supplierFinanceTransitionToRtsTenderPro(http: HttpClient, rootUrl: string, params: SupplierFinanceTransitionToRtsTenderPro$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, supplierFinanceTransitionToRtsTenderPro.PATH, 'get');
  if (params) {
    rb.query('tenantId', params.tenantId, {});
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

supplierFinanceTransitionToRtsTenderPro.PATH = '/market/api/v1/supplier-finance/redirect/pro';
