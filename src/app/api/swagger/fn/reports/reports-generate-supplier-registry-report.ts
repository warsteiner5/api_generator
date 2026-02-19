/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ReportsGenerateSupplierRegistryReport$Params {
}

export function reportsGenerateSupplierRegistryReport(http: HttpClient, rootUrl: string, params?: ReportsGenerateSupplierRegistryReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, reportsGenerateSupplierRegistryReport.PATH, 'post');
  if (params) {
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

reportsGenerateSupplierRegistryReport.PATH = '/market/api/v1/reports/supplier-registry';
